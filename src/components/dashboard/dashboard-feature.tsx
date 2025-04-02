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
    "5T9kPSFsfaYWYR7hhHJgvQc3sFBjp9LqpyLdW5HKn6qtRRoCJVxbVXaJecD5Tiuz7EA3MrCKpCmByrZSR4VPUvET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LF2efo6v3aAcgHiAyH95NxYoMRn1594z7auZwibCm1MMfCrqYstNAqKUD8VHs9thb8qcxdUZ8XZC5C7MaSd32UN",
  "key1": "519ke599NtVSUfZk1jfKRNx94nmyDLxonnn87v9zMoM2P7EPJWGGwzmxAhynmxMKSqVGrtqKGzKGvmpesr3j6G9n",
  "key2": "5ZsQCw2qaZUnK1C6r6UwWFPuHMqK79u1qtTRpCAUVucwz9ohDcT63HYs1KRaJYwuiDMbETe6uhsU34jycsCKkBWL",
  "key3": "63LkTWoYKdn8UhEfUX1qRhSbankHsWMiy8XmaKdk5uGSMK3DJSwmV6JdEYvBa9WjK9a9B9UJqgCjiNBRkSHecJf4",
  "key4": "45VGhx8g3hbXYqXKBFMufHFxySy55d388ZkGXqEBmTfoPtnW6cgvJKaCNUwGysxQcCAYP6fkQiY64LmVPorPeiRj",
  "key5": "2bS9SdTwdHfnMCtoZckoaGZnL9H8yLDxLHFWdszVhe8NQV5GwZ15P95hrhxVf1XAwBMhfwh27EVPC84p4qjDn521",
  "key6": "5ZateaAicgVfWZVgFPQ8kdHZjyfor1Pa5nDXxRhUQaK1zAXyQs5RnfUuGH9HwbeArp9HV4sU3ScFm7ynrMK5H4Lf",
  "key7": "4xiDLspC4huWrovSnqWKK6fEeyrxQmCKLn8nGYNU47PuUApf4fTCGrgGYs8skd47cp5b57TxPKjypdtheiuozVfU",
  "key8": "2YgSCjHF9o7j6e6UocMgoTNKa22tpUNyrzVLEtFgSgt7qhHHBcNBNGJYvndAynkH9baHfXsd64ngkhtvUZkYs6xV",
  "key9": "4ozLwY1jkLAx5JN1zrr5SUG7HmYm5HMEBogPzxGr296Xu3vDaXFfrnAvthF2KzAm67QHsbcmpcdX5D1C2UNVPWRk",
  "key10": "5wHBDcxkGyjJ23xyiV6sQPHVzRMuo8sPXFkf7qpzgDpjrqDUMjq8ieeEK2PdLCHdpSPSMH9f2quSjFthkA3mkjGa",
  "key11": "cvksgk94rkiV5oU45pzGPoUyfk79Yk8Lwer2FEvHvgjQ7ANftk5d3n1ezZCpkPAumXg7DiT8YbaAqeMZTJMjtRj",
  "key12": "4CAYrFfa9ADsWz6AbdEzr4Tx3BDFnpfWmLMhqgYoRd9ptFxWp9u8sVgDxXGsruQB4VFFbDCQZjc97GWL2uCNtxHA",
  "key13": "4q62UentV9Dn18ovHYJ4hz6df6G99EkW8sdrQoo979oi4CjjVMVvYCoD4muRewMHokRiipCqQsAfv3XPGkdch3n",
  "key14": "Zm1UG2SmbYxrkLBhWDQcenUYNRHmtqNcqWsA4EFaR5eWd9pzNPyyNtDzH9oipsNwotHxKh46C3f8m99HY4GtbpN",
  "key15": "3Qs5ZA2rhPhxb4vY8bm9tsmqT5TE3yhDdtgPyD7XJB85BreaQoBzTPDnyBh4n4dCPGC8Fp5KwyqfsR41AjxHWtf2",
  "key16": "22X5nrCFzfEwkFKsKAMwbEWMyYbxbbTMKwDmaCYDUjUD6JDYPJ154iyMS13a2JxveqKkLjAy6GgXNyM4EP7J8DeU",
  "key17": "4yakgrA7skj9JMCcakCkKwA7JAyr4evpkVRpsu5mRTfeb3HRbg7feeVFL8yQ9p68JBXKJt54yGbeeMutxpEaJAiD",
  "key18": "52cu89ZC1vH3P5wsCdPhuAuDuPHFkUXqNHQZYGZbHW9gtfwH9NSdcTEVx2EipHH4FjQuwTYL5gRkmPsnxMuSLEkJ",
  "key19": "2XMCgAafomr6rZ61J9SwrgfkM3aiFYcMFNeApBYZZbN3tTZnC6bV3msZAasamVSNx7nR8nz8JeZPHqJhsreesHGs",
  "key20": "p8qwEDGVptfk4w2DKF133pv9qPBemDdcMKRnse7faN5x6E16bSZbkgaS8bCCgr8hJUyweRe4MSQPC5x6YbAMD69",
  "key21": "4hZsfGhPDEnqmJ5j28KU61m56EmBaEiU8cRBJpVYGJNXuSt2tyPncFay9WxuidayCVhCGyMNUpbBoUyBQRGqdPFH",
  "key22": "35GD3Kb3kk676NTmQ7ofrEXkdB6hL7WoCddKJqQe8Fi9kpZgR9XEFWkfdEC5rqRuoT7KmDnvYxJtUzT8FVssagBc",
  "key23": "4TnFewmFZ4tvSkhHXiqE6C7XNdHnNaE1dPkQ1qmzJPXWHSje4oYALjCUMThndKHBC5LYDmrQP1KpXtpcZ57QJETB",
  "key24": "2x6oR4m238tLaHZ2GPgcWPJF2mivhx4Hptu1Caw9KmLW3KhsGxSArrW7m74a8MKo6YvjTNJzqANvTvnjzpbzU1CJ",
  "key25": "GPsjGyHDzaS44LKfUq4ZZN76EWdbyRiam9eB8uw2Xr3d9iazDQGxLX8iipt5S8pm7NwbP5tD2M7q1uyBwAgFCrT",
  "key26": "4ZrHpk6LPaotRXbV8BcZvifVMiBAZKHpsprd5jp5KDjcmCqwTcvfc8HZ4fEoJvfqwtYqzHHiZs6hd17MVvkphkcc",
  "key27": "27P1iWEo8f6ZnsmMCLF75qo71Ljue6cRPQoC5jWAH3CZRkz8K8Jgw5XMHXWvnAHPfDvzw4Ajk1p4J5JtcKtPMTGd",
  "key28": "245BnnQXKjWFTTpAM3fTBoQLftZonUPNU6KWniL2DE6s5681JuSWEvHFY4DTqD38svGCXeu9525AGiDitHg4h8yc",
  "key29": "3VT54guuFsPPYnq96ytWsbDG8WuQz13qwRQFYNy4nujw8GK2BDWthJpL8w98teTVzPhL3yZJ1Ermz3H8Efs7VQb9",
  "key30": "xQST8CTkKFjeFZvMvzZTpoTMNz8cCHBehDJYe6uf29DzqG5xwmFwr3skAYHXB6dTXaAByF62zPFRwwsevHsvD98",
  "key31": "5esueJ6P3pytKhD4P8UZTW9rcgs1eFX3titqvNtykzTZwPkWW9totcvSx9XB2hsZoQ24KpRDwmJUZDY5fhSocRm2",
  "key32": "5xJj3SY1WEUzuPjacmWDzJVSkTaaLdNjArwk7Pf5b1ZEmMoUcNNeiVhz6aLHD8D5siSuXPZziSX1Ls4ntE6mo1CL",
  "key33": "2Da97Lhd6fLP4B63X7VXZT7c4XKdqddoHRBeCd8QrBrc8ZjdcnEWCYg4J5Z9V5S7WZ495kYmEa9snbkXDu2uYh72",
  "key34": "3n4PZSpRfvRif9ovgiH2zU65QFmTJFQ2rqPh8C4dCqK732Aci9SiHm6PQpMdqzeTzwEAY4uMcPFK9C4tum1JKjCM",
  "key35": "4HvpsmD41sLAvMEiLXP9nCm4Bgqr1TDABnaL9Bqny3tLa4b1o5qPqt8UcqJYAgYE251e9r2dcmoyQA1faVty7nDy",
  "key36": "4MecpRqNRzpw1dT2TZFi1RHmJtESmUsQCN7QmY5zejoTzVek4FY4sSrsSH8ae5z4ZsynUcTXJXJQqUAmPy1KX1D1",
  "key37": "44j1MQS5K625zknHa318pmYCcJTLRaYsNV23KKK4ibNUtYiuJAySzGuhe2UUbUStezAiQzz3dME6FVWQFkcn45vi",
  "key38": "47pZbHGwd7xPesyJ2FLbVLbBxLePCszkCvWimouHA75f7NFnk6XskeZHdrQS8yGFJgXBp7Ccq7NDf4f6yR6KTDiZ",
  "key39": "2faqtNY6TqguL9uboh8Bnhxh4uHZeCVnYoPKrDDiUVWqqG4Upe1cJL3d6wKbgNapt6Qg2iiDwNrKZCPW4WJCVukp",
  "key40": "c6TKtjuDJpJp9XB1Svj1JD2j6owADEFXR596jGznEWGmxosuvbZNaMDs1sBMaT3LQk2wcBs8LVYjojmRivZyEbW",
  "key41": "3nBzdhCEQBacn4vX7qynjGtLHvoygUCx7udojtHFEVHarRriBz2ePxMFZTNSKzQSiF5dpMdWg74skTe1jkfUX8b8",
  "key42": "iyjwkrAJPJtxdpP8mM2C4HPea1aFdeQDnP9z4h3m3VbnrTkRCz4z3mwD29Q9kfcDtqfyUq5BoarX5TFpjXceebn",
  "key43": "5itL3p7wGU9zxKVVM7ra6ixQBfhqSQ778QdZfmX6jksgEcHTNds5cNnNfVSXGC3hgwmxZb1k5fM6jsxCxKhqzNzj",
  "key44": "4cPRSyXWas8yxg2aTaTio5a6qbPSYUcTUDBd4BUu3PH1B2kf5CaeYCfbiDMtweSTohrXNuoVdqQNLQDKZj4iFuLY",
  "key45": "4xJtNsjJBU4vCtiohFxb7TwkQ3XNjp8vg7yGhaDZkT1bfzrs3a2pqznvKN97GfFUVfDn2k6hcL1hhugPgtVKKbtP",
  "key46": "32qmPXpn3WKYGVLkdf6moKQhnCt5DScWcyrcyojkk9D5WiU6yZHQrDs9tEWpVE3xF6akzxrGqS2hyhHQBYbMfAu3",
  "key47": "4nBSiMDdW8ppH8YNG7tEfX5DSSaFkN6y1Xf7EijHjBmXndUKNGQaKvw3VHm2bGP6H578CLLtuW5cxKSJeB8j5Dk"
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
