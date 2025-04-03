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
    "2k5f2weYzAhVSsULqFDjHVvsNeeMeVqcEvuvhbLF4giwkRmv5grqjQ8SAKBbqnsGavw8PkTpsLHPrL9TuUxYpPmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrYKzYU2QEmQmUGRMGA3VrGx79bYpiMtT8CAXvQ3MmZF1m6t5vkMpfXcXP4TNLh75vULkT9aX1oi6RqCNhwYC4W",
  "key1": "2RavbcDqEGDus3MNNHyK21Hkv7tb4Fp4uzgeJqyV276B6QzB4fzJ2BcMqZETo1AWZttZFNCKw2xXvrQgNyBFBJRF",
  "key2": "3Nc9i4Lb3FaiTbtoBdYaqP2TKELzxiZhvnC6oh51FvJSEqtBDXVzHAXcHDAhihZmZHZCspo7ndHqdLHckbkc7x9Y",
  "key3": "KBQzuZsS6DftHSCsetVQHH299q8jc8tt2vV3edM3aiALrXz9BKRT4ZReVP9arYPy4KWLJHwnagjdDWizxKmQpss",
  "key4": "3HjghSiSgvKd9TKKgp5GS2soFgL4D5arMYvUrMmCEan37k1k3WyN6VyNZ6sSJNYqpYRePZuVqrGUdqrD4sTG8LC3",
  "key5": "QmycEFqhM28A3C3VsRyEFAYfdgD46Bk9gZonWLGzqzZ6TcPWjYBF29PvAe6LnHS8nTVJkGKbNTPR1nFvzvyXR7X",
  "key6": "5jgQaEDSgnu7U2ugP7H2S6KQ75ykGqT4gGs8bpCnN5QEao3h8zqNhXGBwfcsRcUdB8Dr7Vqh3BMDwTji2XPZRsMu",
  "key7": "2RBWZZh5Abj5d2GZEznWzV32KsTvBrzPot3nLLj6fGgi284R445GtR1EcqadQPK93CoqDw35fGq47HpjUAGF6trD",
  "key8": "5nSmchm96PSM9jaP8JbxNttywT17k7zGuMbdHXHpHAGZA1VAiBY8MjU17z7xeawidRZCzS8rvmw3GrwjvajiFDGi",
  "key9": "2gHbpTZ93rMrEKPv11RYy82zNM32ZopM5oM1BBieEfMdNBjhvVmgLm16ZR4C98aqANARfB1ykSra4yY1a4Re4MXg",
  "key10": "2WTJA4Sbbu6GLdiWAbbQhKYzuqHMhM6U8Nz1Loq1ZK5ZnMzkN1JCvzCAHfp7wQvoWTaJ4dmaFftAhKLHuXaS6oQv",
  "key11": "K6k1dMeJJAB9qopXXjmwvTVMq9LZPyPYmmLM5a1DrxAhAyzMPw34YZGgu4WHjER8nqsSMLTtCMnVMGDjo1mUQjN",
  "key12": "2DSt2TJvSyKnhi4oQbVEMxmHMpdDDCatbuHB5a2jb4gj5tLGyBLMAoM12k5uC9MWqmMm4GNURHQnNs5jg12Y3VNy",
  "key13": "2RFsKLfsx5Cgw5eiZLTX8swBfnoQZHEseENyd9cR7dxhy3XdKzcF6VzvUmM1CFG1n8GmoCqL4XHRMuApK3wM9Chh",
  "key14": "2zNoC4yeWYYZ1CoYFPviin6JxTEaEU42L47Zbv6BRmyjnfjDwZLHWanpGzBgJxSSpjvMsis4kpy9GEs3kMuV9pfU",
  "key15": "2xtxR4d4yr1uJhmDrjP6ZkAP8FU8yB8owcu6hWxk5ZhkqM1dfuZrb3gYsVJtVy2j1B2faedJHFUjXwWLtP14yZ7w",
  "key16": "2JuvYnxWEZXFM1SPLtqqyJ58bkc9pBzwm1WE1omozR8ThjVesKtXakfsAMGBVQon1KoExN3XWWE1ihufbd1ADRCj",
  "key17": "241fejbxpFr4ZdwFYQTg8aB79JPx7AxCFZiBmMwq8pxxFx2KiJm7ZNmum2RnFwXuKdP2npnFzr4v1aYCv8MsGr9k",
  "key18": "3GzcFD9VzoA3TxY8hrRuaWgvik4hG2j3znGesm2hJXeyKmrKosWcakVuevegAUF9tq3yaYgrrTYx5gHe6YT2bdL7",
  "key19": "3Dfmbfkb5eQiHMuXsj3ixB4AnRqdYTFhov7Soup76eX8HMu57WVcaXLQTw5147d9iSGnu5Mq4c5aCWGnGbcMVmdp",
  "key20": "5364v5bKNr6VQjdEtn8pQGx5EzwWqcLxs8KKh5rvE6N7xfRhQ3ntv5RBkBe9V3hK2hTDwxr79nvWRvXgBF81JS8c",
  "key21": "5R2FYFEYoNM2DozWAVaheh4AQ3Xgx2Sg6ekLcZfRmP1RfbqaYjmW7pKKDxWSaD2dBky9i8Cvj4uAs5oKroYunPbm",
  "key22": "5cpvnTKLHWvQNPoqnLD68QyS2ot8qPmx1FLQTM9PUXZNv3o37VzTDk7YwEtK6j2jQER7TPZBgmABYmtXkE3JGYij",
  "key23": "2vWbEZJxvKqemd19Lrj1U6pNDuJLqYUxG7nUmSnMV8AvZMGZDRoyqUV2cK9TQiP2DeegqgpUwd3RYdmxAU4m1TBN",
  "key24": "cqgCNtFMpegcytjSXqZDVnKaRSrPLpZzdXoHTUZpSEi189nEdAkEgCABqJJCpydUZPuyaq2iJyVJJPAjmvSHjqX",
  "key25": "5BjaNAGiCJUU8zt43v54SVLp2w2D8aQHPDpQc6v8DGtRArzaq6vZBeaFsqAPbXv5e41Vbe1k6fQqyMhLvUZKjPvj",
  "key26": "4sCW8Bwd5dSW4Ac3fpx6UjttnBtFwxcyfG4ZMSN7nBGxdtdm1RxrxyfHUUhh2jw9uTHaDdcJuttTruWRz2sTsRrU",
  "key27": "GEyKFH722HWGzfNkg2ix7cLrfgdBTVzhJRuiMFkCoegQJoWhv4ZZpDKDTp1aDyW9KjFhWm1YFN4pQSg52J8s3tw",
  "key28": "5NpsPYiATDpAoVTYYoxRmMYZ5or4uv66DGmMTNtFRaVeLomw4yoNgc2qcBJzdwaA7HagASDuwhXrV7YDk6pAz62y",
  "key29": "2RiAL61QLj8LdUVpEve8A3SR7XuEzySp4MqHRNMNdjGdoUSaSSunsoMigeza9gG5eBNrrpeC9bmZj1rMXrgaKB4j",
  "key30": "57JM2AC3TDNsU4VZZQuR4BZ45AwSetY8dCdz4FAAXeuKUQmjTB2s77MnDwE3Ya3swAmjAV8NyD2QBY2mJq6w9h4L",
  "key31": "5iaSDqcw6wHFjFjvRebQVFYmdq32ab9LKG7GeKyDBGw6CsmL5k3vo3CejzBj3xBf2eaRevFx3vEhFy9RrnR7oJXo",
  "key32": "4qGeB6SdfNpCqGC2ut71VjTxAKP5KfZZC7bm7er2eFmUXB5Xgijk1E6DZ8Dx3cRUfVHnqWAkkZNFWET3xANptZdW",
  "key33": "2yU4hg27ajKzhVh43AJBcyMbk6mGQjmAq7PqwXEGgQGr1k5Arz9dfAeyKurcvCRnDGVEuxBiV4h6uXByWy5DodZt",
  "key34": "2LKkJKzrnv8sRVqQWVbA1mDbbwR1BdxJJL6FNVaH9RybKCGAscXkA4EmxyhBFyvkFHT8YWu4dwVMqj6nrUGUf2bt",
  "key35": "5wUiTecWzg2tvFUZWrwaZJz1REotHhS478YzgJX4dQa56G1wZ4s2AxTE3BH956xsL4UXtGhEZTJz74yzKemnjsNX",
  "key36": "62GyxP6UwFB14srJAUtcFPn5RyyLfFA9i1bULm5Gjpzo2pY4FqZJddZbZbcvVPnrVMGcptcj3upH1JmP4Ld9Nbwp",
  "key37": "2GGwAaUMLhGdxSMgiyyG4Tqs5hnRvpD5rr26mLjJdYSE4gyrpazU4aCHgANjmVHrE3nTGLWk3E1QFrEJv9ES7BUy",
  "key38": "5EmTig4qp3JjdofPrMsc3U5YjzMLADbEW1hmf9qHgPWkwStUmcRST58Fo6LSe9pXoKALoyt3GdH6gGfz9UpYs8YC",
  "key39": "i9JRBaTjZ79sQf7qKuErFqYUceM3YFUA3ZHXCZ6Gs3jrH5Y3F5YMYGBa8J5x562uXdRu15Kj6BycDVgHRJvYXhR",
  "key40": "2eDB1Ly5TndxsG8tp2rsuFAB9SHFGRoEqTZQBGhyeYaSgwZiVfEUj6kWdSEppN6S3ze4XewVShCszpDfqXXaYhgb",
  "key41": "4Hjz6XvRfuecGSLwX66DCkMLqy8CMytRkW5NjpYPMD9GBtyqcPq9jTFn76GXmbRVaLNU1FFsJBNAfLUEk2yZshus",
  "key42": "2DGfpSfdNrMq7mrXZHU1i71c3tCaUjyWEWTAVduw8u8apwEEoD4jPr4whtSizkkLHeATEyjtzQmicquyxgtvjd5o"
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
