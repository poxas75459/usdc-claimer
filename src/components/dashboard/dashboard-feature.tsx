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
    "5NmYnrxV7kmtH9QQBCgzjuCt4ijKEYUjhvP5378Hh2Sps8WXCJHnFA5xYrLammWZJVj6fGYgxtFM94ij2saJXj4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqttNQUoBDNU97Fn87QvF2fq33aTaiJ8u4Bqo3BN7ys4DnNvG1Ht5dXBG1F6peWUb4VpowwwiCxJcydzFKbYAji",
  "key1": "2w83DeWGAG6PZMAXuRPFAeFXzdJaGgeCaNxVnmK4nCe3wpNnmPhaE2mNggXh6pdH7JtvsrLMULN5nFwcCA1x12yb",
  "key2": "2jZ8VbSwbAzaDyAFjwiHTKmVhVrFG8vT2NGR3jiDmtoyLJRiBcVrwmuj6782LXhBthnE9VBF5wm94PyqcWTYnLBz",
  "key3": "hvkXXYGFxCr9GwFPZQGS2LXNqhZuGfLrffbygrnkN9Rd5B43jUEX1Qmk34ceUKhB3keTD2sEfMHFHbGGE5C3BUa",
  "key4": "2NV3Zkm81oAvE8XgqARboskZbXjEvz3dj9VgLTL4K8FwWbwrmFvpLbfanpxCBkVeEoNMe6HNkQce1cHbNPPeDYEb",
  "key5": "4hfsGPoYhFGkt2JZ6aRbMfApBXd26cnTnpKNADFg7nKBeLTK5kSc6b7xsm9ky9gdhbfog3aZPQeVGYwJ3Fd8zrqR",
  "key6": "64cCHBLfocRXdbAiYyPCdEcUxCgHRChr1XpzXY61LyE5VxcfHjKspScWKKkPJ21awvAXVGPNvUqwCCzGLV2hjWgC",
  "key7": "2PXgzdJqF44MMas3swBXmsPdvBJJemvquGLBNDKsmfaLoSJf7nAsEK5xaL7kq9BdSNRUDLWV6p9HjgrvjLRdj1of",
  "key8": "3vxopBknAdSJEUeehacWRPsXZAo23H3VAA8gk9z1UQvp9kwUcsgPAaZ9EBTm1BiTjXETJAJkUkoaBLwavHNRg7qT",
  "key9": "53UbnycSbUtsJxChBajQyB5g5XpUAnBL6WSrJZGr8GZaMBRV3xqoPDq9Rz2gnxpFeXg6iJavKPWMoAqkxYtjHLEL",
  "key10": "4pKRfLfPZKRpvEbtnSmsHNxA8D4eMDQMQVRmRC1zJpLV3M8xtVpwpo95aUhkEXz7Dgi5jTLYKPR8EUeCcoqeArjN",
  "key11": "2jsSna5nZrj3BqGqLTU35QMdSaCFMWuKZxinaTM8He17uGJe6AKmZQZfU4uc3VWPDu6LLTXNXo9pA36Q8DSspsUD",
  "key12": "2PP16xm6tN5piS1ASzqpVvXXhLCmgzWyf2rC72E6jpPTyjujT71WnuTXZJ6YMdmB7Kg9J9wQUjFpyU9qV4e7nnyK",
  "key13": "27X8kZuTh3N35SRpxag5h3oWAKXu2S928Nia8EZSw4epsgDeGYVjqsZemGeq9qZYsbK6SuXXqwTPwtAMVd7jr3BX",
  "key14": "4bm8tt4EZ3aEKi9njuEmN1kGVNo5Jnodkb2Hskz2jZLhzp75mEAA1iFdhFdRVqjvFTEdEcsJNCWPHSLJT8RHynn1",
  "key15": "5LuWEC3Ud6F5Gb2CNejstvXDLhCTjeY3pkSf7xPG22DJVhtXb93FaQHRKW4QZsT7KpCU9VDeWx4gPLi15TxgjZox",
  "key16": "524i7LmzwzQyZYkzu5fZnWvcXQrNTtWgkontXvfrubrxSeoZW3AEnxHR54gTeCUoZz4dB4gxXka5ysY2QvaXe53m",
  "key17": "5dyQRgQnS7Pr9vLZjajPAYhSAjNi6kfNsdK1CCCS1e77R9aBJ2v4Sx6YNAZHhDTNEDvC9nBN9PndLYfoCkPjgTFb",
  "key18": "4eWHHvpug4THnVANhUEXF5sMmDDCnUEigEJopJbfkbemSNBuc9oaoecUt2o3PuZBmfqH8KAkjvALeavMDDmo13nZ",
  "key19": "tp9F22dpVY3UEMd2tvkYak1apG8smgwWayepjoREGfpxfrmQU9S2XWusCdnqCDhbJiCokHCqerQtaDbQ1YU5rXN",
  "key20": "4j3rGqVh8uqCvVYhb647MooBLYt3JtMMMZUJLqgvLR7twBFhT2iDuxDnxjBuu6SadpkpznDvmsF2zhLL6PHSgXdS",
  "key21": "2PKDiVkU5jXuHh5nTrYpfDJmUfNn3LdkbNGZN8qVQ2ywZcyACPhFsWdftsRiqa6mWv2GwpPjXCmoBxa887h92iaY",
  "key22": "nxStDTbVrr8eR7XFu4QLJRfFQcX1HbsXNTudDUALoudC9DnnRBqykzLVRdNPcZEuvn8s2LHcDpsriZR5bu38NSe",
  "key23": "3cSGZ2BBeTHrMLMkvBR25vs71o4ZxLiKmGZDMmD9mLHraNL7Q6P9SC1Z1kSSaChpotYeKpyZpJ7KVFaCdkP5SppP",
  "key24": "2CktmBD9iZTwHy3bqyLKpGEnzq4Zz19DwFo3MqbnDE3m2s6Ue5uYH4EH9MwNArkLtVL5htxbopFzzoSZyKVXUKy9",
  "key25": "3kQD95vmVCew7WRAEPzPc3AqY62nH7Y7FeYeuHJJwBsc49Tz6gBX8QaYCiAay3tE9Y4gohJaZyJQ12Z2WtewNn3B",
  "key26": "3RsZj2Rg1ceFHzzh7kyywgrTb1UJU8pp8R3hQbtwNg1kUXGcAS5QqLZzjmZAwymNiWH2nn7z4u5Hx9y7LCusW9bK",
  "key27": "4h6Hjh9bjxjuoxJnj5cb2fQik7rS9CtVi51zyya3FVdsdxGkRtDT26eN8faZbPamaruyKejjiCqw43CUzv88vKhf",
  "key28": "D1N4DUstXtGwyS2ey7mHFfYMjUbt3SfU2aw5VPT6QkgaMWWyeAAuxyyXDn4TQqXRKfPQ6pvv8awm2xpg5e3iDNn",
  "key29": "2RvwALB7DFfnGqC7Y66FC8Z3jssTV96x6em77CirCR3d1ma62Kwy7h8suZKvtW5wYKbtt4gebAdEg2Sv13tKgZC5",
  "key30": "XynJnznybxgVdWmL8ncRGeSntZCTUwLN9P74VJy2reNckTbYCYDTS9x2jdXMVpe5mkgy9woTToN8UF4PQpt5boF",
  "key31": "4k2VcjYQEXhzA96nExdh7SV7fbfz9nRZrKZPX33A5Qj4cWbtdzeopsexhByKwDWnGrok2S729YRpk5K81Yfbr4M",
  "key32": "4owMDZR8fC58iAPDiA8Rc1AbVruZJ745iY5rbGdbkTTETQKP73HsVMempoCHXkX5E9N3QpwvrEUE2XV1AvsJfFA5",
  "key33": "4T9s7fp4n1fEui1bntRGDJiWkjR2gRjinM6AX82CHrvdUX2DZb6vuViS2xuMxdqAVcZ45npG589M6Nfm2iRY9nzW",
  "key34": "23napPR8gVG2TwojraW8ggnRvLnUJJVhAG8tp1j1dawxmTVGMjrKZaftk7q37asrdazuT2L9yK224NYrvRHLvRaA",
  "key35": "26nFgkyo6bNDoeoQkiNmD1rCs9FKkKDTrcQBT9u72jaLBJ9d5uxDs72ctMAhWN5X1vRFZk9bXSbYrUHsD4fG9kJV",
  "key36": "61qdhjDa4hmjLRh6YRLb6jBpRWk7TjQ1Pd5CMVSvwo8Akf8s3DUUMsNHwQxKdeBhUzEyNZWwcejArGnNYNwdtRa9",
  "key37": "Jh1rq9rwnh41cTs5ddaNm21NYKMUQmtsjsv8uHDuBmTFmyrgB6ZHbExeEpZPiNcrba4c6hifbfGcCFT9vdPvfMc",
  "key38": "3bWhNN3USBrMxQpLjuKrMdB5WJVvB3WFa5a6MKjTxhX9j67DQgCwyjYDdguKEfv3ah9uTnzst4HtJUx7wBaqxTkJ",
  "key39": "51MzL9TACUeCuWHUSQAX8TgZJVXQeivSrPmia3x1mqiyz549pTr9efyUfzZ1fNHnVfueqokrmvtwdS41xhNrtk9s",
  "key40": "5sixJgVAncwdbCBtw7ogNKqH7JkL761Fw4krUF5m2iMk3Q6ubwALHRqY8dvh4gsj2cj5fEqoZqygKBE7Jorhf7PA",
  "key41": "29r2j8BS6BdZ8hTYx5n1TJDDKBdjFL1aPQn43FyEaKq71tCTCDSoo77pBmLHDnYLAQRmz7g2ks7v1tMWNQcArVCM",
  "key42": "2SDgmwv8XCCpVPQ5z4Qj8pPYTHY3GGen2GLMLShdnyNGwXCkKRx6encEWyBHGU2xZAQAdKmseFcwHL4qq5fWGBvq",
  "key43": "F5K8dNWumqCnShvZx79tHtjypCzSPHcjHNJAxTrXmjvJUEVZ4otMavFQsvP6PxQ4cWMWbux4g1fsNu1XEvREj8w",
  "key44": "25qQy3pUe8Jb1tmZKNCTTygkw4BgkHXqMeZbKL19xUry1xuipFoPYaw5p8AkmbA3K4P1KxNA74zfRgrSWK9xZRjP",
  "key45": "25PrapA2EurkzxgwLB3Jsw96THwnx4Qm4QpRGkmGGDUkL1wNJEYcFVJVfMgt6LwpfLEahhhwMQMnpXMpAcntDmkU",
  "key46": "4wuFBm143Pjfttq67Z4Dbf3pdTk3P6kVhmnQahLhWWabvBVA7okxnyKzroZrFGvdhXZkBKH3YCqEBty3J75JPgkX",
  "key47": "4PUTih9FPdXxxuPexETPMkcr7VfDToEzcC1azSzRgejf5yT8ipvBxz55m2imPtjySGppFr5d38nV5WwPPa2SdqDT",
  "key48": "29ds6RR6uTovGoFKEKH9UceCWAEGFnkVfEE2TRktMVmgufmxPoGWyep66tJESDCq22DJRkoQkEBjrUDhAXyWFJUr"
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
