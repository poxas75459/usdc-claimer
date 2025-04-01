/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2CnfwQ8HCXAuf9CPzNchghw31TfCFNUJqSAN5qH25ahybC3PJuEGbK7WHv9GEtxbDXbdCs4T6hCCz9T5HVaz22H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9DTjbNWnviouL9Ub8Kbg4H7cmNCr4angZGjegTKp1bncqtjMPWeThaKcYbr6rkGA7VWi1L4RGtAXHwDipB7MPN",
  "key1": "ofod3HPaztQUoZP4DmgrPEwgNi8sFw7RDhXKPAWC7YZhkKrdDzZTnpzdQyiEw8BMvUKfucuLQZapKAdhgM4Mk1d",
  "key2": "5SyPmMnwJdUN2cb5TKPUPfwR4nTGjJJpVNLF9RoNAqV4N6p3hFbzD34ZnK2Tjz1ZX8Ub61UaHgN4BREqV3um7hrV",
  "key3": "4YKcB8W3zjCVw1Q4NcAyoir5h3cJcAxQKJKpzUZai9HoG7CTkj8ZEKUwk1tTpEhNT3AaQtYpXMkYDVje66CBgsAD",
  "key4": "2qFp7bSZs8miBj8CHY3YCbf2X4SEiunUBquhhxxcKUF5qhtJgUsmNp72ctDyFyNxp2hpYFPLJtqxiks9AzFo6fxe",
  "key5": "oF4mvPCnMxaedaDQXBJrDTLZp1KnrhCkxvNf97wvvxfTC5VZc6NuhaEjRX2bPa5q8WFv6AahMG5kuo3QoKzURWG",
  "key6": "63U3YrZZfdoQSb6ALqNoN3gdLMDCRHtA7YJ7A3BY2JM7rFpEwQFjAod7EzzLSpZPM9qnVsCQRtBNFnbpfqKtoDNH",
  "key7": "4vZanjQQvLb1bqwRJ1HYbV18SN41W1AkKkxgDZF18zN67P4FkNChVU5MzjKaSAiQ6DJttCtxSzaRAn4z7VBodYB5",
  "key8": "56cx3v8Mo4tzXQy3d5bDmmKbpsbgTNxzmqTAhEGocxPGAjJ3LuysQsoVcyTaEotSsX26QootGUDMqJsGRerB61mA",
  "key9": "32eKtPX8VPZaftbMXPbGHz8T24vAKKcqg6BvdsU4ki6jCaHPpkAYDET1zVuvoHrxrVtGZNiNGxN3fmGe2vNJWm1j",
  "key10": "2ij3TrAoe94JCSrPSJGMKVrnUBfE7F5eMEWdksKmer5ybiNuKKUXS7REZndJWueTFcNtZppdJMhziZ8id2Kx9r3V",
  "key11": "2Gz7cju1DAVBdEUrCbtzU8Rkbhaz1ALWw4mmxUj2NrwwL186Fi9rAJmbradyxs1fFr5NbsXqUYw3dvSWj4uWBJpy",
  "key12": "3ANY4WK4PqpDrCZJUFjPGQpNi3NCpfS3y3oQKms8ZPKZjdrfWm3tL7CZZmKx58nxA1bzoKCWwZXzWD53M2sPJGjx",
  "key13": "4DF6WN7pu5yp737sY49Ao7jrF1KcQv1g3tD6bBYRa8hsk6W7qzmbzW3Temn8NtgoubMgA9PWA1isscM9ifgb1ctb",
  "key14": "5BPXaTfNxUoDrSEjX21eTv3Sz6EiGPGCaq1v4qfTjWZh3YEtAX1zXUGBf9joUwFVAWr6HdkxaUZXBF2iay4pFFTz",
  "key15": "wj5xL1ADxdn8PHGCMxxqjTvmGBysi5W6XbZnaQ3YfPrenfs8z54E6vuS5h2q9S72uAKsZHvFxoD8G16Zo3xmka4",
  "key16": "m7NaMmjyHvFLK6GVGSXqhj9aJUjdUCELGtBG9icLVuVpDTRkaPzS8dAhEEz3MGgRnW5DCBtibLt6U3Hq4UgHm74",
  "key17": "qv8tthQ1K3Vmp3HngXbirs5KiLGBrrAqnNiErMwsDuVyDxPFzGpDdre5innUpx5qJxbxXUjmzpz4gTmscEzeWNc",
  "key18": "3r9xvqNsiEpw7rZiTfvrwtQCS5cqPX2qWRdBjTuuPToDs5HJaED18SF1fyctoZaMSTQdEmrkhV3jTs4u8KzmNT1j",
  "key19": "5CWdUZg7uajtE8oSCWvQj7veNBa8wr5CEUV6UJrCdxDjQ27RBenbdorJsW3f6xj5MjkQwdFuCoH4ePCnYMiC3q2b",
  "key20": "4xr12G8FNbvZvXSg36HXKUbmEXp9iaE1J9cAt26x9sKwkcXx6VhGRPGdPEQPP4DaXPq82TvhGYNPvMfnkE18FgVo",
  "key21": "2Y97PC1Re7uy1X5L9WXhR5K2Zuf1ja6KsPoERotc4tUu1DxWY9r4rZChzEDKVw27kKgEmQpG7rAcYexMD7yudWr8",
  "key22": "voLWrm5FcGHs6y3LMChgCi1Z4ZEtgWyMwfS8DK7cR66FqzRiAS6ohaPAM8a8a3r4FqSHBCg9LjPkuoPUqHpBQaS",
  "key23": "5Y8zf4BPh1qNVixiJzVie444WSpvcmz6Sk1qUSWDGZxtkdCtMqFM7soMGzyYiFmcHghmcaXUZ4xCSgtyGxdiUNgN",
  "key24": "5UD6ajT7HQ3z8Azs53k6GyB2cNoLXBBZWShhCXd3wDcU1Pzkmw93Z7YXLPA8S7NnhFKnBRvhF4BBwdQKmKCPnS3X",
  "key25": "3UC4RzyaG5EveiaeyTuwwwN6t7HfpcfQbQDimHkHFZXTBNc63yYwXdXCiw3mnQAHXidNeLGMkW19xATJzvAkyDM2",
  "key26": "DkBuY7dQWDCkrQUN1MYJ5UkcZutDoKsLqNZLmFzqzff4JM82qJdWUZjDPm7pTY3VjikrNoE6Uy1kzxWNcdx6EFS",
  "key27": "2aWg8MwxwitcVK7QdEBQu5AguHghqXoLkTmrnDAXq2qJsgw17mxyuQvd2k3s1Y7LAksxYDi5dTT38fV1YHX9aRyt",
  "key28": "356GxQedanQkhH8Xen3W8o8UzTt5pVt1Yji6mL35sqyjg62tkmpexaibTBqtZkKdax9dRNDB378hidaqdKZpMTvg",
  "key29": "3UHTcVYBHr8GXBr5kGao6eig6UCc1KVbUAcXo6yRT6ni8FnXq5ZN4pAeRb1nAVmS34eanprMWCy4ieYg3EnLtWen",
  "key30": "4EX7zEfY619aZtDZD4mjJNNnspQbvMSJNCcWU1NeS3YYwunofnybaj5kiFc1ARbkzfMgEVQ6TpJY8uAKn65HyLRW",
  "key31": "3YUMc9QJQeUhFAjCs7PEVe3y2oaX4zWY2TcWEdiKLxZks6VfBvB9TLGWfJbyxCbiE6f8RPaBWoj37mhG7rvtFq7b",
  "key32": "3gJCSSy6xfgUsYvHeUoAvyFZnqh5v2rGmuewkqqmf3pyqiveW1vaatpz7zpAqipjZd7p8kh3gbi4ZuNLAMi1KJRW",
  "key33": "qQFVVYd9JqVgYLkCuP5DeBR4GsTmrafxrnHwaCTnFHMo52G2775v6eptLj4sxQqCk1wcJH1bwPVqg9b9gtZqiFt",
  "key34": "4Bet1zFvcGu5HPxMQS5H7yjVL9i285xLromxto5J3UgtjAsCCzVKsTucwWeeHunRYaw3NgMRLv9tCJfoLTqtnDN7",
  "key35": "28z4U1UPxkgSh6Vs3Fpq6qjsoTCtf7WZ2nCdc9cmTrNZr5b8PVXBH6YtoM1ueheDk6Av8mFf8DAAnJLB49dmGqXX",
  "key36": "2uokf74491ULfWJ1RBKh1T5zVrD6qWLBXksF7maKdyFJgcf771YFVgQ4yPjqUcskKtdbGVXnEwW1DZLWm7cy9RBM",
  "key37": "4ywmfJ2AG2LSEEuufXZHneSvYGEcfcjDHagxtntRjQMK4ifREgKtuMYxJt24NgCyX4ChsKDyrbKVMZjj7wysEMYb",
  "key38": "5Kd7tyhh67AWe6AKr85EKh8PVESTtouZ51AWGb2Uo1qYx3rcA69QYHfnLbTBsj6Uafu7stTNEQgiMpnfStuj285A",
  "key39": "5ce9rkektEbt7X6sthpJv1co9CmZ95d8ufuGJSDL1b46wN5gqjKPYi8Ug8Vq7E7En46vGGPao7R2Mh2mcrgBbBAE",
  "key40": "5ugatAo3oiST2t6jVrirdMh6u1BjCcLuJ3YBgGwVUWpEcCd2nXbZDp1aDvyYSrjFN7eGsqCdZGENbvUbzjFBjYag",
  "key41": "xR3KJSL54AJ8gdmxki2Zcp132nYBMrbJhA6AqvyHx6MEM2TvGXk5ZSCd2ufteeRsWjW9g4RjtF6WVqVBHgUJRpw",
  "key42": "43QDaUpijVXD3bGNiM9YZ1KmzNrXsnjZyoJSxUVUpGjEdWh89XTBUfhXVSeJd5uvqQQaytTjm9QPVEPKSfN6Bajx"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
