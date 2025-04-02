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
    "n5EqH3xGQXhjNohNG4pbjdE7uAaUDLZHqRpxaUcfRVuQuixq3xNQqZ8qJPMs9xQZP5TNpNwcBBk23NK6fUmZMyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFkHrBD9xsBESLYFamNSvJrj6jg6A34VfacbgbGpkTVdMSN137ErR1EbtnAomNS8brNRjnK84caAwuDvMZBuu97",
  "key1": "2A3Uk7TZBEB3xSta5bU71qdg3wS3a3g8doytJiwDZ3Ncp139isUn9AVxDbdk9EAPTcWNLvzhRZG6sidkk1CNbjQe",
  "key2": "2KBF2hkhzCEKPN1W21oE4mxb8Bts9qA9Q4EBd12icysp3k9xCMgzL6RPytkNqYZ6oCBxNts37Qb42oNEJ2SS2Ln",
  "key3": "4TChrV7p4WFX9tBWTSpG6z5iv6XLJsD1YvWUW8JzUsrvumezdhvEmMJ3wy4tGkxPD9cmezZGZVkLqaYUUBZgQBQK",
  "key4": "2aHAUpKZKsDbpCbSsJqNJvwQ157b8jKwTdfQBmTfwwiTZEqQrxmcRjkdLi32phLcGAgncGkB3s4oSKDUYiAHj6Ba",
  "key5": "5iPMLNumjdyGb2rveLkDbJFhX1tCAFwCJbFGvy27NcEtJPt9w53czKLsbQAZv8ARHnPeMEvoYCm7KdLfF6B7UAdx",
  "key6": "3Jjzfs6xMjoi1p7nAxnJJZVS5wEKks7JYwchsoXjUmdGhRTiZEaLeMYu5fqdvo5pWhmxhpLyx66z92mNDEuLSmmK",
  "key7": "5t2iBba7ZKenvJCnQ3Vi2tUPhaA55RY4aHqy53J2r1o44dsHq3p3vfvHWf7hh1QRfc4KGX4tYe2TACW4yaDmPi4d",
  "key8": "5eBJZCkEoGDDSQcp8xXi7MXtqyxG12vHFDeZuiHGPMBNCR44evucLcrmAQLCezYLhXk4JUieggs2vyu8sn2qT6QA",
  "key9": "5P8GymHXQWs54kZgFoKCuWvnXhwVM2dRbEfFGdcHSZXqTrsvfqgNLeP9UaMwPHtPNSu5Fv4rJiVbqwsZVo9C7UtX",
  "key10": "4zrokW8JdSswfjdWfjPJeJ9X4BAqvsaP9r97AzzduyRrWboyigiony2xeVgp1aw2AvzUZYTi8jn7bmDfkTJkvSHg",
  "key11": "67c7ZZa3JQf17zUXJedSvj5sUkrAyhZ87KEo4y8X1kjvMhAVEBpzFvcsKxNMpVosdA5ADXy2LsrFK6yAukodo5eb",
  "key12": "2GCLH2e84Zt2NyGqh26rW6qJgdcjTGA6595V7fCpyFdcF6yz9Hbz71EcGhqXJivs9oiWUMTy6DtnLqgDVDxNeE48",
  "key13": "3ENiJ3qrg1n9PMgp7MkSt6EEzimU3FjvYwjDEBi2HrripB9ddo1pvPMFQcQptefxBzfbZVAP4MHxmNNWEAW7M1go",
  "key14": "5RkDZKP5qDLZgre6KhguCbuaUDJZ8hT9cntMn5AB88iAHkHws4YaJLvQ15b5syJSjHav4bfrnmUf5CfpFN46U8ih",
  "key15": "4QPRyw7A9PWmcopJt9MpLsgRWvTFAijgyeVvujK5mLji2Vu9iXv7fwbYwgyrgEDhB4nfpV1LdWNSaekmbyiTXvUt",
  "key16": "oVyXJGcSSFqz1VVgMNotGwRaxwPYeo6qKitNR6paTHUd9617hbVWdMLrEbocnLHT9JUGdzSNv4rDaVmdvkuoNAv",
  "key17": "2E8SehPGoME6CuLzMjJT2TChfRPXxGe6dg8ex9HrH3LzjbBmBEki1sytn3aXdnCze3xy1AL75WmBatt8KE8Hz7Yb",
  "key18": "2mwKoFc85EzjUaFWfbf3KRgS9a9N4fQjMn7UNbchLHxrZhtiXFw8c86uQzYkGuVMJD2tZGPpRUpjtknbePzgDZSP",
  "key19": "2w4s8KEbKYNGKbabcmKqrRSw2bAsTGa1wfMoSU1mbTFV9fpaiNgaV3xedaX2Kz7b65R6gRAUFiWS38mWoUPDWwAh",
  "key20": "52Mtv14nrw1edRmj7qcZBJqTujN9kWLnF7Agj9a29kYkPqPFA8t67NgC12EJXSnwdkPs2Vd3N7SK28Qjy7VZy9Ku",
  "key21": "2ybVAi2C8sJrJ1T5Jr84iTZWFfpSZuzwLtJQj4Mqq5og3BqMXxM7oGRmF7fvt5dWe8KVpxD5CDgqRREFgAXCzefJ",
  "key22": "3GzGtCYxZSVf72gvYFMmZi2WHTsAvVQtAFMt9t19nYSWHD8amWMgZYvhhkfs2NfwNmWzXed8XLTnnLB347qYkZD6",
  "key23": "NuDbts4iyRpasBFpC7ju4fkJU152jyvtaRb4YDwY8khaQtJuXCtxXmSHdP99hs6Byf8n9cJAYT5CeSqS3ofvFnS",
  "key24": "SJVZwR8Fr5DFJB5oWmLSeeYyxuSx7vTxpQGjkTLVA5chqXXgV6qdfzTDYk4RHG3T2fd3Jk4YczkVxDqjXuP5mt9",
  "key25": "24ppEa8RmjRTx4ggJszbqf2wHw1BZCovDxQwu7g2p7wjEMKvZekcKzfGjzh5SGkL7cwHcUgMe23j1h2aerfvDMmv",
  "key26": "3JYbARQn8RyzG5Wgc9nbZS1QSUPmLzaxg3QVYHarWxVcTv1PkLn8akKnEg4Gd2F2VN832WEooUXwzyUqMs9VppFX",
  "key27": "4pdnYxXoL6R21n2RTcnAs1XzToDknJ2fZsUT1gbZrp98YRz4wJezWT9z7te71488paUAdvp2Lxzac6nGBahb4rz8",
  "key28": "3FzAknCPRDjkpm3AVML55X8YEMSPq2sYaA5USWSr43egZQuA5njayXW6Pz6pjhbE1mXdrg4DoKygYyw5yTweeu71",
  "key29": "5AT4JP2R15psYC9djpcxizJi1ntG1BFiW7RitojJ3ZsK69CR81YMhdkN9Khrzv6zLzeyUsEwGDUDbHHwPDrQweaJ",
  "key30": "4VCywnqe66iNaavnQkzHADoEZbEiYPPJTvTjmTYqJpn4VWFGfBXCgUWEkhcgtodVMtg3CCS3TyQuKwJvsiM7j1zC",
  "key31": "nA9ENkMaW4sDDYWM4ecDu8Ege4F9bDQUci9WGyQDGhs382UjxrPhmGfoTzZaPVCfAebRTywwPECs7j8GY54iW6m",
  "key32": "PqDBcKyUyLCKWjPCqVeMk9o981PedFxKQVe5p1pQiABuvr1GLD516CPEb3ijeswDfKh3qyF7F2jTLCKu5S2Mtcw",
  "key33": "62a8JifhcKAP4qZhVFUAQmbGHBz3JZ8jMatyMhXqVb3JaSidjQicSpkSKBmPaLMVEU9oCKmUA828fVoRQmZic1DH",
  "key34": "2CKPcJDzWyjvxPRFfqchv2nLLyS2dWeB1GGTjoZjqhekeaudihWUX3TRfwbTAZEHpjgpsVGaYuuD3zzEkCWk3Ztx",
  "key35": "2S4EUsQAGiSzMQNjDR5RG5srzQZiR7QG1xBoM6b4Fzx71guCx4cPw5xcxyf8psDpuzPGhiQM5tRXpq3XynNFmJPm",
  "key36": "J95ymLxnrtjVx6p1sG8emDQxX8cm7kKW1By3Acf1aqzuToTikWZgGqDrNFjykQkBBKRSqXUL2PrY1zg5naGqpYk",
  "key37": "4WLX61biZydR5fND2hQBn6bQUpbKpXxQQyo12YCEqMq1gF7fFydHjzpxHW1vwSyHUZnFn7iy5gFQMm4LR6Hq8vc",
  "key38": "4VZFwM7oQmjtvuuXe2AwuqkcSqLhTU1MMWPNnP7Rk6HMmDei5Bt4f2v4STbcYFDypoDWR98V2Zau61AAu7ZuBsRB",
  "key39": "5H6maoPum88F59nttsDhtRjv7TL86rXcK4tywCyTdpJH2YXAd5716sAF2dHUhTg726ZPashZoFh59mQ7rxFvqepF",
  "key40": "4XxN1Eg3cXVJsUfhkSmqh9cgSRbBMEA6qvfNAAAFoDhuTryFFNhcJPKrjV94fQYwNXokUNnEVh8B7yAdnNGeGAXG",
  "key41": "5VFVrg4hekkvxRimroaqgApmUhrcoj2vCk45X9LwXK9cmcnVdc5EMgSP3rzLDnGZuhtupi6XFUb9LxXK2RQjVUpf",
  "key42": "3Et5kA99cjBmQWzQqvTYP7Po3stPtJT4waDo3G1Wrv74LfCJFCjwp8qVqrqroywrp29PwSVJtXoh2hJCgRcfB9uW",
  "key43": "4U1s7SzZ6DfLvHnv5uAKbqhXn3LM23Ltp4eFkHcA2owYSts5BguBSSmf82RLpSTHiJTzAMQeeEentgEbAifhBomu",
  "key44": "5pDcpbrzRtY3kGbf78vp659USkLBa6c97cyQdB6biP3KjaADj1XcyGR98jZ6WMSEj7KqYe86BfXWpjNSzooy2GTY"
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
