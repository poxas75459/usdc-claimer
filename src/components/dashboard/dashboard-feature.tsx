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
    "USj7b9SdyWhjT9V9o1Yva4qnQJPZoEGd7NESSGR8KeqNe1TPtLzEGD4X4RfEfL22SeWorU9qu4xuxT3vzWmEDuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m9sVbbmtBcGCD4Edn2YcPjnLoHVty3LVSe8DheNuUZKjCG3upxagn3aAnXcTmVgT9qvRikxTQorshbin6fVnpJK",
  "key1": "4HSjUUG2fmGrByTEiHxMbuKVBLxN2M9mSnsGavxqymx2Xv7wtLXWmSwHzpCUSrbjRnXn5mLLDsp7J7gHgjqPQd5e",
  "key2": "byetKTkJZeGJtfXrUgVXSh7XMmMma4dEtWJMS8PJYHquQ1R5atUv8eBiZ9fTA7AiqRBUX4vuc9tuQcE64LdBs2K",
  "key3": "5MFFCSnhP2Nc5grVDvLXsD7cFH18Jypry78CBSArWNqJmp8xTo8EMjyDDkSs3KqQrwJSYmfyap3PxQcQECfXaTTy",
  "key4": "3fYVwmHEpULP532bMsZPNgSEpmQC3oFAVQ487nj89yhD3ifeDf9mn2nHSEDbcxrf3TmRPU7MmHVrrkW6HUwqnRSN",
  "key5": "ZnkgNKR1X2kievgrjwYkqEePGVrDeuwAx92nE1e7aSaPM1vzsGzJnKgKFuUxJyiUKAXjbp9w2iybkACa2tWDwuo",
  "key6": "2jAuAm1NE7kvYUWyfD8TNybtx7Q2HK62YQFotsDDyKfDVbjRYnSCVUtRH5aMEkK785SkGeig1B6uGiD7TpkGiSgU",
  "key7": "AZjvMULyuzTgnT2TticBhZZNbxJsTUYwU9r8YFvzGyscNZDwzXGJATnD9y5tc4nFdhtyWq76g8pt4WB22Gx5Vvq",
  "key8": "5CoTUZHEt3Lu7EGxkofqxtU3ictRNgj7P3RQVMDRmWhZrXvEey38qqnDLdxA3VhbxetSX4HjAFoEnfDbpLyDpT4V",
  "key9": "23vJsrS8FiraSFsv1nQwZTCWzXC2H3Ng6JK8Zaxq1MWVahyobAg9i1bVRERnV6D8TUSHE5ZmRAXynWHoMaBsP2Ga",
  "key10": "K1TWa7rGprDMaQjmsSZUs36bH8XVTmqAJT7YgkbMPTtQJP8ewBbTjUrZbuiAMy15yhNQYrB8gNBpcQgCphszaS6",
  "key11": "2PTpK66d4oh1jnpSpFnyWgDMikTDzXuvn2qK7igzNeJEUgSftato8cRa9GrLaFMNV5hQCGgdsZm6fhUrWGtkTrdR",
  "key12": "7SJnXF7vpNi5jHwHJXKsn3q7cjbbM8So7ELEotZqYNvC8CF4iPTQ1MMWAHBLxaUjSgZdQmejVKkNP212fUvWEKS",
  "key13": "4QLFa61m3FGaRvM9UdXrV7FqXnibSJFtaX4YiL7Zcu9PBY8GGRFJaFKWdrtpddkskC8VgN81WBjCeez3xJMs5tif",
  "key14": "5azyas8uKcFeXY8z1u5R4MAYe6sZw16avqowzrsS1v8eKVGqkHSeSMyUGVEDhDrPouTWiAauEfTSgmdZXAFSWWbD",
  "key15": "3c7eVzEpZbczvhjVaDi3DRsbvtTfs65LiCfxkXSbWkhkopRkvoK1sWpbLe6zBD4BU1moU6ujDn8X9XTERvwBGhUr",
  "key16": "3dygyCYCmtNw1sPmF6GkkrTUzaxe7QDstqtRLtwofvCpNhtCUumni27ZwxfwWLqn9ozMkgPcCg2LCcBSXqFjTVj7",
  "key17": "4Pm2EL2e5Tbf7P5uv7xGb4AcZChq37UfV5D8w5JtQjFaXjMkMA4eycDCYNPevzaH1CjNXYKAJcuuzaaASKYqZiAk",
  "key18": "LwQ9WbMYocWUriasPfc2Kt7qg7o1DhCCQdhnfLsX2Qvm8FkjZZRTSKCdKxn3YujLe4grPaW4cyT3syNhAdq2VAD",
  "key19": "H9Y9v5jmxrgTkts8KwhZHDeRJMtp2tDsBSRP4DuVSEX6maGR1oeKbeWAuw6HCWZRJV99sJ961zpZX2pdAKsjd7M",
  "key20": "2LTQtHVYLdL66vja1TJFVVzJEhU9Q193wF2q1Jmc27k3aRyP7CTDCWn2ujc8sGyobbDj5QBTMJ1THy4nft6ueTxK",
  "key21": "5esnkE8ZPCH3GBavpaum91qA1F43vErhegCos8R7zMxxNF6fNdhzs7ruSauTdfNYpSEsrXN6Kc5a18a9yZvsuoNx",
  "key22": "uo2dJBZrWSDX3XRmZbB2ZKxJbMHN3tTKmCGs4HQ3CiqFeMSBvpBNxhHvXP5mUKjFwAzEb636T22BLasu5mcgaP6",
  "key23": "38hSroGkDtAqJ5NVyYcgAgGVPhQuWMNr7kGr2qhdKDMmeWX1MaWZFcVbtQkVfg8MxUzG94bHfmT3BhTWPVL7uFcB",
  "key24": "33obWsrqNnJrnnVZ71J2CTF5czq5ZJFMrdT3s53ajU8n9xde4QJCij1ND2wNUCzXcDMxgAf4Khy49rWfBZoWnDgC",
  "key25": "66vAedDkPhbtZshLnTVSY5WTtmPCHyKJM28SN2wwi4qLSMi991NYhbbCe9gQZXR1UcjQpTDyAtgfsRguUmAZFoso",
  "key26": "5LcFSSTG3FToAP3mnL1zdpcK5u3ByXjhozvTr1yGhJ3QM1cQ6prg9BPKZLPSn94EfhGKeVVfNLpDRHXocb4J7xUr",
  "key27": "4Ebp5D2ZqJ6eE4aUNPrGAiynUcirurZ22ri4EizdSqBgM4tWvgYPVe8cJE8LCGjAyeqDgE43GEx71PLPj4X9QULS",
  "key28": "5JrWcJkwGTS7eSTstm9SHmcupGh3phpnf6kUrvdZLxQAK6gBjABEmJ92k3dvg8NE33ZURwXxQHtZ2FR8nBTPLAX6",
  "key29": "2fQiVcXuXvRfmP4qqJjuN7cPAJYdq3jin342Rkb3tsNN9a9V85BqSTMto7HRKLcwhujgBgMJF8hbtuBdRkEV6NQB",
  "key30": "2rDAwwQpZUPe6ALKS5oZgubKDSNkWMg26sc6T5ocx9FXtQqjnzWwiR4fNExn7Pexsfanqfgancxn13WyPR6NH58z",
  "key31": "4YMvm1ReNT6S9BdjqVyNm913u6hxuNbsQ4ZbYKukPFeo5K2L7udYmToJYXZvj4JatPPvnTBLREXVCJPgtK9ERDDn",
  "key32": "5vsXHKriGTjvctr6JBMCjpWhjgnhTCdWSUjVKc8ywRY3evWW7MwKoJ4R1QbVZigvfczERtApXMoAaJHDiaP4ZzZT",
  "key33": "2dJhS6p5RZkgg1xgRQydroZt6Cmc5jRpq3Sri9M34QF6TyiS1xmCpS4pzsuPcXZ5Q7KG6UZQRAjqRnVnTLsVVcxY",
  "key34": "3JyuZA6ubqpq9bNhkwoLMZD2dbp1atWnP6aAifjnPN3Z7EKx5SyqMrRTRUVA8zAJLE5xJ8zbCBbejaYYfAHpaoHe",
  "key35": "zKyDaPfkbuszCoAK6uQVVNUzbdoRAZ9Fzx4PezFT3iZkcLcxiv8PboSTCfgk71AbX2jhxfZYcJomHoqp5zaXNXk"
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
