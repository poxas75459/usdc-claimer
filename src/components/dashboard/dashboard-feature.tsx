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
    "5caG3xsB9ZSfZS11DtQKKL4vSBwwH3UyFVkMUEv3Whv5Bw3W69xYEedgo5GJ8KQiomBS29wPQNQdmoPSdN3BhPQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r82QqrWLvMeoe8dfZdeBPjvYvPBTXYwyZQZTSJiiAFQ2336CLu6W8aQkiC69Wpoe5VwBUFqLh1Q4Y9ZoEdR2NzG",
  "key1": "3hEPdX5MCjFrAyoQUuZG3AmYJfqfS31wVDHHtr6fqFxuk5ydH7A7dcT1zoAhwA616k1cL8emRXpyMVxZ2feZP6Pr",
  "key2": "3z3TGBZWL1zs3guUC89KadNTKXimaLvTp3RRkRg6dXsiNmm7s39s6sRR4qqYvJygYUMgzjwvBMKtCJ5Cqw5hrsae",
  "key3": "2ytpaZXnxBZqKGc8HYXM1KmbfzgeeMbX2uXyFr8rzRAnNb6xnCXXB8xVpF2qVdpDhdn1rrPMPMWvHEnHpJHzyuLt",
  "key4": "5Byaj574MDjm9TkDeHRhNFLD6aQGa4pNrtBUyPBSx3UqJDzntJNWj4JW4x3BL5NPXaE3L37za1M8pbX4GFXyJnoB",
  "key5": "4jgisboe3cEKC4X62A8p5fqhK1GuwAg5Vf17yJ8ndwKzocEYHGnszURJ8rKEmCfKj1jJJqV5HCMywf9wCLmbJGxb",
  "key6": "2Nmnh6YxfqssEbhXi4Q76RTHWAZDfZrj59RTQEh7qp8AaXAozFG6Hju7dyBM42bgTCTrvA9pbvi9yz9Y3sS2vvZo",
  "key7": "3muxxG3xPi7gmxn12XQPePe6vfK2qoqy3Gg6oAVh8xijGHg1PJGMQfFNB6fp1NhcfwcjKoCA2M591dakqY7iT1au",
  "key8": "2HCHr4miXjSyojYhBTz1NpprKRTuvpc1ZRTncbiVWoLrPJH8MmQ93a7JzsVZcwpgPuwfE15WGYRrx88kRvaQS94p",
  "key9": "4Ccv4WZRigSqpFaoPUVp9HYSUijk2kD71bKmCYyu3v5e8hvALUrT2yPdLBigY1gFX2ACGjpfZizF7enZiKztQfj9",
  "key10": "4WgYSFahNkCVk2yHQc8EzcXUk5EPcCzkQMqtvZW2KzqBjJVVUFKJboob8t9nBnRs7dReH8dAJ16BWhp29RWs1Ywd",
  "key11": "viudmThDsGd6oPGHagCQYd7TtzAbQgkZ7nKbYEHqtRHAmPNjjRuvFvWzW4VEgfHuRjbTj15i9wZVoDfRHVL6CPe",
  "key12": "3EnHiSvk4NjeM1zHyt84ZFyqBq8BCXAZF9ds3szTFDavEUsGHAqF4EYMLEBig7MrzWN4wwCTxmxKBXmb7Fe1hmcL",
  "key13": "55MGywhSGi8NUHAWiY3cMZFaWGAKLUtDmbxuGFnwJzWv8Yx5B4Dr3GZ8r23cZ3n1TwMJ6wAu8RWWt42vHGinKk3J",
  "key14": "4uxuCDJJkj8Y6L5JjMncnXFiVmLnw1FD5Mv7D5qkf2MojCDAXSL3wscJDygBkx1QrGJENJ9jjBRpjgZ3vUDhMtQK",
  "key15": "4R7pJpcAr3pivWJXUiDD63TC5UBgFg7pJEDN3rScbuz4CVWg1EHHWtbShqfm7rbSbYKAVXoK7ziVao6x7DQC6My",
  "key16": "B8DasrwSiKVJcCcvCCFJK8VmP4iwLZLkEFqwCYb16PidFumTwkHCaxnZ6qiCQS611DppF7yZYkQdAPLjhB5yR2x",
  "key17": "3RSMWhYn5245XudpGhX6TQJyq4r48asHwv1bGKzNa9P11PR8E1ggcaaYd4upkUSZCj15VwFPm1Hmjbbt8A1WxJjC",
  "key18": "ZP54CTAKNeEwcfihSYVDkjmARV6XCjUEKgLPLkyTSviEAZSE6KDh3458KFVawi4jsFVciWNp8nWvJh5iXWPRiaU",
  "key19": "imKi6iXmsm6Podo5oP78KMQLnJPhXCGxSxknbwNYrwUyX8WZnRqTeDn695wA5kZAkVBgVm6qKBWo28canj7ThfL",
  "key20": "4p9Babf3HmMsXTR4Jxq1p4KeQbQTzcVcPi1qZnL2wxvDWsyw1rA7RTmSKdkBu764yZtm5X51yX5cXW6TJAhVpoES",
  "key21": "ipz4iqF4J2WyL9CtuxjhCbQfJSLNsEaN5PfPEaH1MhHT1ujbaWqCoxy8dCHCkcJ5SxPVnQhoJGDvZ1TVzvQcTj9",
  "key22": "54ospUupaG8gD98CxZajcxpeF5PJ8UdNz9g6fE28tmBpG9Qr6P7SrWuQNMjxiSkjRJWoYN4gW794ybpSNy6EeswH",
  "key23": "4fj4H61v6ngW85tZDzABvhFPpBUJLaDPSekxmS46h5FNYzkMSVwAgWftzTC2vU8EE5U4THFmMcZP7s4VHxVDp45N",
  "key24": "5C9EHyuMtD9Ji2u1JuYkiA2YA5tKQo6ydAMTLuyF4MuyxbRqHHyK2pAfvTz7NdU19WAZyxbMXSQ3sbGG817eNVxX",
  "key25": "5SDpcKJbCPRkov2o8VViJ1DHmdTGCvdeM8EbMcsgA4ViKS2o1tjgbNabWKPZRaSfXQWdQyRMp4iPtzgSPdmERq6C",
  "key26": "FHkrE9RS1V26uGvoTKEioCrjz62rZrV4wtavXfDiAftTq3dqccaopg6Ya9YsjFonTPgEnfpFzQ4yxiTkuS6AP4o",
  "key27": "2hwx5rq4k3sVAWjQaezUe1RpgFEG4NRk4pT3RL437cAzV7XVJN63SaJ45qRPvMnrCSRERbvxcKxWEhbfdhkYYMN2",
  "key28": "222qabxypBg31PTNxR73ceNMx7JEaf1uxktYMFj118rqtvTmXb2NyyonTurogvmpUsbJohNRUm6oaYKvr6j727dN",
  "key29": "37Grwc5prwgibNtFhoUpegPdZSgazceRUypXSVrq6krKN6NPLeFXnEqd5G8qL9HLsnBecVCbmvdGZTh7WcRrHdkA",
  "key30": "5kZjPVxQ4k4s5joYqxDxC68biGNxJndUSV2T1Q9WX3zpvw5ujsLMrNqGwpGnf7gVAF3jh66ggSMyrz5tac2z2r1C",
  "key31": "4mKPKTcSJuYdokPGAsQeSd312UcxZUgCzLtELL7NpUwFk1Cyb6UkX7BjWBjeibGjnuYK5PGdLaeaGf88gNTJ77mi",
  "key32": "5bnSACF3MEgdh8zC4GivTDYekcy5do6FxgjGRqyaWPPDfocd7ZSBSDkNQ99K9bmZyytNgvPLrgSkYvhGusAwHAr8",
  "key33": "t2znP6nMnpH9tkxX16fV1NKo1ZA8sSySNCQNhpXYBkZx4KFiwyj8g6qgG111EWdtdTriv53vfEVNMZS5Yzwro6P",
  "key34": "26xCdZpceiBRDjsE3cyxaFmqhVFFyHpV9sq7tMFqDo5v4HJB19bDQSeXDoSdqcEGq8czi1g6DEWDyJMVV7C4CSEh",
  "key35": "5i2ckAv2z2SsDctJUn5asiiY2XmzxiYQ6Zp43iL8HKYgqWt8K1tpaAucFZ6e2cXWrDvH9Cr3Jt3WtVK8DUFnes2j",
  "key36": "5Kf2HA3zp1iPsQhDW9GwNUaCGnjkbJUEpTp62T5o6U1gGgYqgDiauibCZrxSuaEPEeYgLhqeEcPxRvNuMqznwz8z",
  "key37": "f2coUJvmUctdMM3SLvJzYkxzoooMAkHYtFY8RNVGobhLf9LHTX6ZsWUqUXRRCtMQizYFdeQuPrdMdazXAG4NXuG",
  "key38": "64xi1DA7rib3hGSwpd6X7AqQG7UfjosL7E1R4MscVhtAUJdpExAWmU9mUrY9XXNXveEbFbTLi5qA4YdvBRxP1Qw5",
  "key39": "4ur7x6mcknmZQxBhYmHxjNNY9eoA5WJefp86xyFWUPFRc1xBSci8HUh3CNfYARtuxYkvTbTsfdZGR3GumfEHFk1g",
  "key40": "sBBuzM9madt2STf69CwemTWz75brhExUUVaAXvBknNZeEqXp7xEKs5WKvjzMh9jmedXXAHH8AtFz6dtPyi2ZQov",
  "key41": "42DBiyLXF7bwktia785zMY79ww8jEpNYzsRB9BKMNhUbxn4fEGdP3GhodQzS4CLZ76oyt9m8HxQtL4VPKshNcC9n",
  "key42": "5vvfCmnjEv8JjQk5RbwUTSJjxsbLtaxV9nagqwqkUAhQtGEQhoE9x3PX8nWjm3viHALKRGMRfGTEoT3NNGrhhTFd",
  "key43": "4tBcjaGPJYPeb2xcMPzjWwGkLLgMvAQC1pvZhmAvz31o1aMJunE2SCw1M4ffheQvh72vmjHd3P8mVfYz9RPK23KD",
  "key44": "29RKQM8AFjgfR8vPWe1y5Vjwrr3TPP4w6XPpNZzch2T9rkYhXgrWCFTrPcFZWNbh9EWouXGrVs4WJ9pJkUXySd7Z"
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
