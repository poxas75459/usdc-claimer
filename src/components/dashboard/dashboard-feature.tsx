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
    "3BWdLUuELY6a1M6WSdi86zhHrm7fmhe8YkzmabMcZUELZhqUXtpnk3BFEZQm11EVbuEhPdRyb34LhwoWp8fUxf2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LFmATGER19THVrP1VXyNBdpTsjzHaM49yHwmtaCk5mapRn7maNihGAP5sc6yu6MLvdxcGZExRxYR8ee6AuVyV4T",
  "key1": "27EGdsJvv346YqE1njGSSiPsNMkRXJVS57DdiLDPTTWXAcWsQfqW1HsYjNM1xGC2uuxPNCZpAHtaNcNPY6wizpeG",
  "key2": "KAExNjqtAakFW58HqA1GHwcWzGsWNLyzPq34ZSJj1qA1DRopH21YFydfdJQUjANxYw29ntDMNXAwDpaJWefobP8",
  "key3": "5whu6c7TmgVjT86nkw6Z1peuTwjCxNyehrWNMYoRcgJCyc25ohXHqHbzpGJtbEUtspuhg4bvHKbREZoyYrYGhRYz",
  "key4": "2Vxaas5uCpMnoepuEfpvDrNiks6ALYrLmFafKmBiSFf9BoWfYGgbYY9SVxhbEkC3BRt1evto4xL2pS5BPDkfRRCx",
  "key5": "4XwhhW9hjQLS313vZWcox254pXoEZCHoTurGoLN5bwmv266iJm8RxNgrTpvfLNMtW6V7deQgp5DkzNY9ahh8eNSz",
  "key6": "jXR12Au5AMq47G1LagHWHoamrgdJJhujMFmBfAroPxzyjqjbFwr5qr6XDNn2yvHShmoSuzhkozsJ7Pz4fMgUxRh",
  "key7": "5N56RDApTqJyuQ53NrdtmyEVx2vdhfMSAzmAjcRKmJHTUN9G8Y2FypygobT87QjdfLSH6GNgS5F1yJeV9jVmxQpB",
  "key8": "3HMos6cY6bcj5rkjJ2icGaMfZENJdofByt7DMBf7snQN6QjBRo1j7J7r4r7MVbDyLwWR3Gz63AyBs1UbMZpHYBat",
  "key9": "J7BVD8sSkjoxfPHes3zG5uqMBG3yfeaYLDxWReZEu1J3AP2PWy6FEvXwqT2Au41BvUaagCTi5hbxEN6FxcMZCEs",
  "key10": "2Mcsu6upUWySbS9g7AYxnVwf3DgGTV1WnByC41HU5UsnHUCDWonNhNxR97Uz1QTQsnw2xkPCA8mYvQ9cYS2a8gkM",
  "key11": "3HQN4RmmtwznxR4fhEcXNGsdCe8wGh8RadxPL8Q2BRfCaz7B9mMctPjWGYbTWBrjQRZpTD3DcrxZTRfuKqDGctNs",
  "key12": "36tZ2NjKEureshapw5n1Pm7tEN11vn93zU99MVVzAASGeetz3SUY1vPH7ZvRGATFp9twjFyRtrogw29CqD1g2X1p",
  "key13": "3CE9fFNwB3sEkbm7itJy5dzpkLDj7a2aVbsAVK25G4MKNU3UKqcpv9YnnmdTgC5BWyU2XUyJ6gixa6mdez9v9E3Q",
  "key14": "27ZS4QviS2BYahcuUASYDMQmWtWU6TguYFz29YmV4iNEA7mxsgRpp6WgXSQTvza9YfEnbzYDqtWRqHQy84b6FTx8",
  "key15": "4gPAmp8JMN8VbnZn7n9y553Lzjd1pP1frprz3pjrzj48UcVcJQVcwQmktnx4JnBgPqmzu4YEPHj8kYkY1qCQgUhX",
  "key16": "5NGFA7iujbNegvo7z81SpWDH8djma2qS4P67uicjk7coteBnbQefugjpCFgzm562Auj3fCLeYfBcu1dWqBD8Wi1f",
  "key17": "3YaFGRrT6b6Jy6jwbgpbTuTBYPEoTtM8nmv1r8jxGUN5JLCkvKuuhd5U3nNdpjSLuEyWEHNrWj7UJ9nRu2fN4PkJ",
  "key18": "4DxtF267igVeXQ1pYcJUd4zDxpyXiA1i1JZUbsB8mfKwveoBmcYGNMMJaDX3oABZy8gAcCWtDqZC35TyA3yKRPs2",
  "key19": "4CoK85oE8iAXrjsox4uMTK8n6zF7q9vMwq9j8LPxp3E1R6JxcBB8DQQxGV9FSM6X6FxJ9GnbmbHNZr5sAquTxzSD",
  "key20": "5ftSGwKyA6prp99gjfqkLb1LwXFwvFZXmfXENj33YgaJtDCdtDDSYTbZKey2CS9n15JQotMVMgcEgLi3XJSp5Gy9",
  "key21": "4TmTzkh2RbG4bDRoVFetBk1Czdu3G9bnN3qrsYgpzJdvb3Q38pRtGNYdW4XN5LPkvMXBxGq2v4gfwZ7xUHRierzE",
  "key22": "ViykJZPVKjFFHstZUAY4zJGDya1yy6G23ASViwVnnWS1Pz9bNvcRS3xsV3e2X9wNp8rguu9fzXaxpygUdffgKzK",
  "key23": "4PebW6ugwyopZrXnK7pwDTHuzCo2toXVMKFgYuGtwuemLM2xBQgRcf9YBmJXPVcGUGjST74Wne4dNoonPLpvDKLE",
  "key24": "4LAwntxg3isLMVg7DPx5scA4fJnRVgV8Qm2TM3hrwzw58tvawM7CJ33qYUceBTn4caeZiMWbEvszKtZfrzEPb9H5",
  "key25": "iF9fnZobXndgXp9uN1mD9NnTyJRqnqorMhs7Dot7HPn4HGVMQw9NRuahfwA4fHrEjSH6isgKBJZGUKw2ydFD24x",
  "key26": "4W9PbZmPccyjBPzVrAyEMcrR26cPd1LnBHfNL5kFVvqDja1bVm8Q6WLfvVA2xrYTKvxkLdgjooYgRzkYqY9ombZ4",
  "key27": "3nnEEAKmzi5cu3GJj19Hq9WWymbR34rmkfJyJ8S8cDwPeuMhmaPdmCNkHKQ9McqLe1GoYyutWvz8gYW85j1wHMfa",
  "key28": "5uVdgNVoiG4MdSf1wqUXTrB1uaingbBBXSPAhKJ8CpJ3SbSus78Ehxy5WVfRNe3PwDbtUdYZtaf2kgTcWziwcweL",
  "key29": "4BMJrdGi4KX212y38BnQ7fzohTsmJMiNPCtvVq1SbsyETvSGAER2wuqVcigcpFrcN5Y2qVgvZCNMMRdjcnDKtgdu",
  "key30": "npoyXRsL2rAQ8giNoozzCWud6Vecdh4Ui8oinh1A3qNj63MPc4Ldi1QwjPLVno4VtUbYRUppFRcE4X21Srzgcie",
  "key31": "Zw7v3pTXNmqbDHPxhzg5VK5KoQYDZ55r8VprVyZB7QbhffMDes4yBMAqVE1Z1M7X4hEMJkC6XM1iRmVVgCXtp6K",
  "key32": "38YG89hRiVCThQeQeX1oPCoCUh2ME9p6Dse9XvURD43PLoDEQDSKSFRvv9mtZkVEddaBqzAZafGEAtZA9hTRAVjY",
  "key33": "46SvX17LQ3x1JFWiYbGhNtaoHA3xnxF99FfKUmzSS1rUUL1Q1cg4VFvLRs23HMWiF9ZFzu8jLB1W6PUqMYN7ofs3",
  "key34": "5MNqSrRgKDF2d6ywCpYEqcnRLSVrmjb5sCjJELw6YhuJYyxtkvEB5UcVm2fLmrpFWF1fK2PiShBMnwyhGit3fBse",
  "key35": "GtJ6y8voDWEs1rFSeXbCUqe6CEkXZhXtrqSP4Y6voqLf32UM2pC3UEi1YRza6q3anXvQGqtWwB55cFBmjXx8ChU",
  "key36": "g443riJ3Njqyb2WFu5YX3vXNg7ARyR146ccB6qJCcvmj7ycXPCSueaWFCqeBkzjJodxnwtrxoJaisdVB7ie5N5C",
  "key37": "348S2AcY3hCb5HjaLR5pncfRb9XbFexpTmVdT2fdwP4G1kktDpA8ULh85UF7XesFXXHhXCWacBkiF2xbuDEMZb2x",
  "key38": "3y5zvqnb7hHni94y5KAwohPKzyz43XuP3sjZiiqFwVNADe5d2YZaj1igSV5wFpHSEqTEBTMiHSb2jnrVPaAYc4Zv",
  "key39": "2wNf1bZEutdZQcyYjWBCTUaKhN4Lqt4waWF38HdBhVuUSCKJMXPweS2u2erWMMAGXXp4exRJVwFGvU8agb4A9UfH",
  "key40": "3nQvHk34ovsw5pU5VbbP8NoYLG3EV93Mx2jac6i8jV44rGnwY3u17aSNitf9Q5amQxumEu7Tc4zzzA3pwAg6XLaC",
  "key41": "59SGPUn1yXS2GfoxNDqQiXUPT5ioAdbDDiykXN155AUzF2fH3gRe97E1FkCt7pXDxH9QZK1NbqbXRBqHGr75AwsJ",
  "key42": "U5X6aZhY1cCaT2Rttc2aLoyVhVCR6vawYnoPXoaxUM54YF34MkXRexvArBmaWMmAwjEBs28AzgZHF2sQMMvUXoa",
  "key43": "5gP9p3ZbKXqCjKssNySQsv9fTL8m4R55CkDeMEzAtydSbRnsVns7KwDD2hdPuih1HzC8EZb8MezQG7FTL6FwsKsF",
  "key44": "3ejvkQAgPTdyv2fsGMCzuT7HbdTSddN7dapLLooR51X9FeF24oytp59PhfPJZvKStbxhPtGGWSQytN5pfLkrTzoT",
  "key45": "4MuossUywCWV3cM6tSXV19o6bNNZNcW71pXzCpm8jjNu7nHmBYRM7pZhrXBwdgZ2ak5SHJUw7aym3WWWoGrPBywr",
  "key46": "2GWkPmDdrTET9ySV67XT3v76RVmQNz6CEmwpQUT4XZz3YDcbp95AkHwuFnCePsqUTpewrY64uAgksx6ifBgUaRLo",
  "key47": "3YGStV6beFBT666U36hSHMnvdJ4VDPjPM8PwQnmVTzcpR5Gd1kCYELmf2vxsPUV6h7otbvVReh188P5qYyo1Vs4g",
  "key48": "3hq3AyfE9t7spQ31Vf4ATmhoirZo8kvQ6282g4N5p5KxjnWaBahJQVj7yX9SgMq2rPmYxkeL3HK34bZJuaqiqxCw",
  "key49": "65TpJ2S65JKcsixe14Cibfau4QrY52tGFt8CYwCgbEmhsVb28dYm9jDjN5GZuTi8fypfUoM6hd3YuTQf7Qp3bCo8"
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
