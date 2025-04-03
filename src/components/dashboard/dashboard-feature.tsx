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
    "3Vmr5wBJecQhg7Mjcq6miuvsTWzTtAh8YzTWZkDZxKvoFhpAKgQJiS4wL8e6XuTJyZEzvxZuDwva7YmuahiFMBNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38AVtdkEtrbnJYhG3aAsnbZFeHxWCLdB7Bj1sCoLH3QCFETFcowpAkYJ96kirW1jLHGFzbWh7crLd2musaBcztTo",
  "key1": "46qoZqWx4qi1eh9yWueFmKjuPkHkPbZxofqgKsTiu7xqq3WL6HyHuchKPNMXk8iLkXXM4KtQHsn8ppKsChGpDFJj",
  "key2": "2CBCQrSZMskxYSMdSrpzf6ywN1YoYUCoJhBi2y5dHgym4ECUWrE9CvnzNYPsTPy9ovrxyxr9ALhMbeAcxRWvSMAF",
  "key3": "2teCFSxMqFZ4J6e3q37u2deux8TP1rcZF4STa2dsSy3RDmAYGfysU7DUAYgTpqQeCmdpEnJQJcSK9YR8uEz9aMo6",
  "key4": "3yyQRPfjMGKAYfejvpA9fHVqNapCVQHdm2GiFjKDViyvnzt289Mguo5UvjRdG3wys5gNx7q6jKfGwfGofGwCQ2xH",
  "key5": "94juKVHd6TxQgBQevqHq6LRp4MzMsHPKvRyxzkKFXgst46B4YGceaY4c8nLmVuVvfCXf9cZUsc5wjopHr8k5fcd",
  "key6": "2W28GpwcZZMi8iLNmdEB7kNMLoxU7P8dB5uhTGbJ5pN79DaTvUNFrzNyVoubJCx7KaTfHj97jzFQvPDmG9BubsEo",
  "key7": "5yf4essTDuSsCnJ1CgwQrTMieGhSLLeGMQFB4n6D2yh61VvskeAXjTWYXkUCAHLEGfWY7NohNe6zApY4MfDpujDc",
  "key8": "5t9dVf6QXRZuCqH6yz8tV1ssqjhyBGHiGPEE6pK7LPgE8aNDhVodK5V1sBPE7Fsh5fHuXE3xJGK8dZwVzvWwFHp5",
  "key9": "2pQ5Uyk8FPuihzk4aXxZSVgfqBtGZwv6TwHcvcpKdQnWJU3UButdekQNW8YsJqet9yyNZatu3Z1jXQUTs9kWhVGk",
  "key10": "463jaRA7weHfsHh9ZivkKZnpYu6vsKk4WkyAsYrUt74MMPa2LBUffSvpd3ouyYwyCRfQjVAEPobTQkCxz338H3d5",
  "key11": "2SvCxy9ySY4TxvwxKwY1QTcmCymfboaD1k7txq1ngovy4JxTzcVVqW3QXjsnf9mt48pjPjoxBUnmuGefsWG924YB",
  "key12": "yxCwzwzx1Uvk29qqKqBmMDbKtyhFKjtrNPutgnNXWSBHJWjxqPULRrGeRs12c4WzW1E3F5mKgJE1Dtt8pmwLpCd",
  "key13": "4dStEuzfeRHnfBvELdhQJqAzaKRjotyjr8pVuvTBxUCqKkcbGmBcvSLZujJeRgVwBHhRFDUqRbdrSMFRxrDnktUA",
  "key14": "BSH1iXTxiMbE1UAdKyJNURrLG7LVwfRnWqrrv7316SV3wzPpXZRz7ekjsZkqLXUnZzQvtnNUyc3C793QGKYuApc",
  "key15": "3LA5mxvTAo16Yo3Na78iaBLoZHEdhPLcMLtA2YvSLPc3uLJXL139BARDM6sq7iQvUs8tM7VWTRg1sEpvi6FzDXPi",
  "key16": "PunSV7bZWjjCgRG76djVzJiHHqd8w3nUc1nCutfmjgHg1iRAesbFVB491UPYqwLNxJtboFX7tYunnhZ4idChBrr",
  "key17": "5rHFaLFnVHHr4ZRUqMVveqfeo9yezvS3mvxpmWdBiC2dx2byamEUg4exSXvCjL2qTDHdZxdy1ooa3AJgKfQT9R3f",
  "key18": "3BEbZhtJHhsXqiH7TytxrGAf1bhgWnKjaqgNWRtxdrzCx9EPyGnUMk9m6VDb3nw12MohfYbdpd5EjT8A4Wg12xkG",
  "key19": "3X2oGGtgazxhsFCx4XniYA761TF495g83DJarh3MZpDh34dM3KtXQatVcog7eYuP6tkaBUKzYDz1DaQm96VZ8EUh",
  "key20": "cWXz6fHj1HLVk9fVZ6Apn9mHMV2ZqagK5MU5t2wibJwq5PPpuAniuTnRmVaYRXMUpHkuZbpo4Dt75HweTcR62jb",
  "key21": "2AgSXgu4JVUaCiM7vV837hyHn2mQx9gQvCkPayYcQKVvSjWh7jdg4jLfJVaeCZSfxKFFKt478KyqRay3DwkejdcJ",
  "key22": "4Xr1aBcnqmksvkDCyBHy5e7JDr62Vm6t47JzjJDouCB3VLUBpuVkjKcPpGfY71WpfxLW1Bacf5n6EtgezUUsD34n",
  "key23": "4EijhmputpXp1x8chmbNAnh1EF1QaQ18rPRPwoTEbcb5TtvBaCPpfQz5WrLtEK6NEqDwUSGT2WaxbTWCCxaBN8ps",
  "key24": "5rycSyMhfSVjjqigxzULyuAfJPTPXeSjvWkpki48KTTa7rzBTTwgsTc8vGMrxj2EkGWNzfXfkXTYgwYy7JZ6vVcv",
  "key25": "EuB59CL97X8tMHWqKTNdrEVPoTJg7vrwPCVxcMoFDzvhNE3DybpG3nJpKLxozDhyBT6iFv3mFa5sn9d61P29UH4",
  "key26": "3o24NTEc8yVKBGL8vDSKd6hCvExUkeFz3EPCvEduwv32dkk6e44wNMM6f7SBjNpspDfk3YL9SEMp3aYeNAEQAaej",
  "key27": "47Bur2gU7BjksNJ6kB5Rv6ZanxFgoWFuhNuZTp74niyGhcWGq4PuJpm6kifds32UEYDtBet16tjLzM7CwpWZP8Td",
  "key28": "4qB97t63FETtFzEQPTcjRkjJmfg3Yt84A5PgB4jGk5UwpZn8xKm8Mr4xhhhcSk4wor869AJhETJVrYpVect8VMwq",
  "key29": "3ZuosJdxhW7U9k8oXeUfUYt4qqJqK9LfTTBxwUq1wnSUmAAx1nJVrMXwhgXoyqhS4SHyY7MsdbnvV8N4BSJMJFYv",
  "key30": "3LdCuj8jHCavwpUTTgPcGmvmfAEofWBoZyRXRNM9YHTXqBz5CUtTaeQqnUnNzp3f2qBu8k8mQL4H3rJSegdPnH5T",
  "key31": "4nMqo2LLxnB7hpJGDgSFe1G4Zk5xK5g4Anro1LSvnudGnoNSsBNw7mmsx2RcokpcM8dhhd9bZcYo4kmQvn2hyGwD",
  "key32": "2xorsY9RjUNY9U2ksdocn9uN9wEwQtnHjJ2pHqtDZb1EccBTfpSekUE8LWP1RQgccpggAufAWjosFMAKa8UX2JCj",
  "key33": "5RfRBzxb5ftk7t2A2XfNnbje2KktptfnSAqqyycGjSgb6DXaPQHPjG1dq5U4RYWrUoBYVtuqVGFsS1FkHd5yf8QK",
  "key34": "5QqxZVPLU3hmtbVueGVYU5kBwCJnfuNfbXzsf4f6fzAKnoJE2L8pRNyBUGK4bzfPQCdVwKcArwWDXWt1pEymaJnA",
  "key35": "4xG1QQLUZtyf8pNKYNfV25q3ccEdCyUXJkRN3SPbXiH9oGKXiEeKciTfDk2AtiCvGxYDtYDR5x3BL7KZkN75Hqwz",
  "key36": "67DaLjL5eBiyyiEm7tbG61KmH2on1xvKnyZvncjvt84SQ3bfrkGVnTuVyxSiVPgJydgbwGDSZqFTiv1SjHshjSDH",
  "key37": "4hk5Zj9WTzYVPoVT22wcoNumwUdQiXYD16Rhfeqn42VgqkAtc16KcAEHScG6FP7PvEjdEuh66SvUiAExPsGFYHcx",
  "key38": "4127WkA62QnWoaCt7CC8amtx3k1UqAcYXFES6CNcxdnmsLFRBP7MQea3GHPnkhMEPDzywiZyNV6e1sHdGDFheF7T",
  "key39": "38FhA9oMbjBoNniuKz9BNn5C1Y4aH7kmDh22UiofydLSnt1zMRp2n5JZvLiRG88t4YsTktQBYd4V7PyVgxGZnEb1",
  "key40": "5jxGrPjgQzsLGYUq3AhrSyHsTj3uGJspWcKRMAtZPLFpsBUKJtUJAsTDziWZFSNDrdodcAfhA3Dnvc1XaERZt3ek",
  "key41": "oqSRPFqykFzXGAKvJ5MRMjFvsMcAYUykThCtzTvVFqaEev8ixmmY4AgHjN2eFS5ivkTiHn8wTbTRpx5J4eG8kdP",
  "key42": "BgLfSkCkarxHbb3eRG9hccB9ggUyzGvzxvCtLAf9Fckq6mtHcXGEwbYQ5txyeYriMMG5bLSL72Vab4YdVzR2bG4",
  "key43": "5Z5GSr1dCWBNPvkGgV6N1YRw1NEBaPM4mbV9ae5KUVDHqbUBSUPWXDzHzP2ADevdhK1R9qVZdUxtnTYUvCVGAekh",
  "key44": "2NNasVsXJDapVJunLuHF39HAztiVVKbsbUGMExbFWCPSx84GeqsG7nBpyUeiHp141kA5GzKTL4bSDWs5puqSohw2",
  "key45": "oJhYVGY7Pj1qPvt3sQpTrQx2uXbLp1uZgw46WsyJxrN96qhwkGDvMZsU8rmF5VKnpxaMHKstgjC5RyYiXuVsYUd",
  "key46": "5PPuKLMDAZBtvTtYRHBFtRbNug9aMsJRCM5agu5d5SfrZSr1PyFGSt6gbHL8kS93qbeWZFsjB2eRYpoHxeqKTbpF"
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
