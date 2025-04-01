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
    "4Apg8yW1Tx7jFWhf3wrAZVWnF15qBmUJzuRQNjkgPMcJfNMSw2GR3noiWJiBNJj7PZVUk7qAK1aPfXrEyRu8vGjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsdaxSsnizHuTJcChFK58YNW5c4DFP8iu4iVxbeP1Gq6u2hoXk1nmT2UA8TcgniPUnF89M9F6xfSnqSSwdeVkVx",
  "key1": "5dHgXECE4ne8KMFarCxrZzSvtmatkVSBUJdCBoqBgKvCJnv4Bvv1SzQDdX9c7X3SvEDCsZ8QHoejaHKguBLM73Uo",
  "key2": "5mUQC8nS2QhRkBSJASaDgKsSqjvy3QXdEmEGCn984jrfkp8E2DuAvLA7P75W8oDYzki9WQhqtFxgXC2Adh9RCxTe",
  "key3": "3eaRca6vbG8UYQikveGizkn2FjgcZH4cH3u9XdGSB6kWCvbH3JGTFHGrJvuQ4Efkz1RZM3GBXB2x3XVHwxTXDdT4",
  "key4": "vpVHCFNhe8RAvx8oAeZEUYFpuS6L66a2gKSbKPWZc792sZARoPkviEvQqRK58imZNF3gbddnDkywwS4xL2QFvp9",
  "key5": "5PPUq5ygtQtfXeAn3TKnZExjFcqUYT7ho4u6jVN9yCjGoMGtRuZXHvvAL86usDU3g5k23P31chMDMmBHnAZDcdTk",
  "key6": "2LZj78RzTjsbQzgRxrvKAjtHYFV2MijKRy2vKKA27XiE6YYQYesb4eN2RVY47Wq7XwuoKgtKHnwqSRVxgDVGRrND",
  "key7": "5oUTVJDqD2x5uNqDXq5FzgwFA3pZ7ZEuKd3LquPK2qEnfcxnQJYYGmAb3i9AMKwbhu9qnVDvWitTUDusgQSWh9ps",
  "key8": "46cTjHXSFztHV8fYfeu278BCkHP9VZCGNSRwbJPeCuW4vfQ1CP5sk3ENMaYY7B8BTh6gegpXLtdk9Dt2M9w6yRJ1",
  "key9": "m7X7gNToM5rVhupUZ8Er2bWRhoHkuBFNGqFm1zv3da8j5iDN67qrMVUYsMuVMJPVqwtb6BGEXePmS9ftri4JHtb",
  "key10": "3KBa48EPxPoHRffYqLBN3KD6FyREWRu9zC5nRKGugQ2QvDsBbJTcD5XM9zeiw37Znax7deHe33zkPcdH8BAbbf7u",
  "key11": "M4ZAGrxhEVcX8yAVMWoiRvxmQgYxWjbGt9L7NiJnkoVTp7YtjwBMAR3TaGJ8dh3WJDgxpPTNGDnnHTxd18xy2et",
  "key12": "4WUMeTGJpWBD92WtdXT58wzqFFXzh3GAjpH8LExGBQFzKcfeU3r6YKgBv78sYnZBjJzTcEUEh3bgojtQGXv4xUsF",
  "key13": "4f8GvJgL1j4zZNRy3vinWP69nsbMzRCSYzPGE7PCqFk3XNU7wfuFgzDNGdmGcJ6CLiajMAiY7reFLGmm7q14t7Nu",
  "key14": "4Ag8cSMR1CNSgc4cLr6k6hyLeYZQQo3rQqkCyoPDz68anu4ESEDe1aXHRn5NGtEpaD7e1pTdezJWBNy3LUUDvHPD",
  "key15": "2MKpFEWWrs7s5F2t5Q2ZxEEqZqQJk1W8ZQzjD7ALxjAuAaXEvW8HHudvodr3gktq8JYUpKJnr2M4arKva77afaJk",
  "key16": "4nEPzicHDjfEZtQZ4RJ8vaf9UwQJpeRxSuQLtCzGq1TEjpw2kaWo9Di3X7HrNVhyAAhrShLFRPYLXRL8Tgsk1vuV",
  "key17": "4zRQs6xG4cap7thQz3ad9eV2Eq9DZH79eQuSma2jR8ckxtDRHHpd5qzymDBnVbmeyyiqBhJtQMCSau7BV5Hvyht4",
  "key18": "4jgg6Un6xUNYWp4YAZqJzLV7EG1xwYeVWLANgKFZxj6Qh92vasZ4dZFyu1DNjRWUzRxgWYZaVCBmUdTmSoTpoVSE",
  "key19": "58T6PiAxYJLXaj52NYairJ6vhZdpEmK8phJRGXL299Hquw6xGBERK6MS5RYcoBtBvj1iiVyiuM9Pw9vF4uYJwhsL",
  "key20": "52oajDVKZuDL3M6CHbV6MeQdt9JKM2znPQ8qWntreDnuebNH499mZAHtXfTmTVZb2po6Y4bxEV5TzbLBsaycJfyX",
  "key21": "5NUwngTsaJZfHXAaEQxC2P78uRKvnCwvcEXHKhS5EuJ1WPAiK682MB2oPRnwzRRBQwgR1isQ2bVkb8xPPKdZXbrq",
  "key22": "4Cp9XADdimfrEu3sWzf735pz8SeDC2EuF4BctHQve5QAoJRzH8z37gDexQKDvTN2ZUx5AWUhpD2UTK7MET9CEp6Q",
  "key23": "FEHNMzg835e1MxEK4onuacrKThH9kWa8Uze8q7oAhgQm7Q5hsWjgLbyswhm12mHD72c7Bh9CynYLwitShnJtdrx",
  "key24": "3djYzhQ4gYUQqCxNUXSYB8rsqnxc5seEWfPiZPEfG7tQ9PZRubhsTfgTvpy9Hce4ECAPpfHJSF1JKwMqAVrW5T6u",
  "key25": "5VVzhrNABEieH3RpfHYFrStKhjATW5Bkhb7YN2JJDHRqbE48sRinBxA4E2hRY4pGHTUSbD96SkKrbf8ByWkqKiB8",
  "key26": "rm4JDEMrxuBWuW7kmZhQPwBQGKev8vs4n6qUqaRPfFyRQXz1dELFcu4rQpr6yxLXX1GWvQvSQiqvsdwTKaKz37m",
  "key27": "5SxuokoT44HDyeTC7XheWNuH2UqF38hMjfR8DUdvXjq46h3jRYLCr2hJizMyTwNuZgwnHvYVdebRZG7kttRQAQZX",
  "key28": "33hDsaacennD5MDSD24AJVBpJ28hECCaSrEtTWtFJunDDieJNRykq1kuMdDSsgL7JpD2kKK4KPDY9vy4RfLuG3R",
  "key29": "2UxbWLw4d9E8LUuGcPTc7eaeTfK8sXgxjyZ6qv74yV9HU3xdWZ3ypCuqLYGHyNqCwo6nHPBcXfbDsc8JMmX1nwis",
  "key30": "3QitpNNftRCmokTB4V2FWAKeVy2CdVu68nMYdBXW8cdW7KFyTuprS4gAty4zEZCWm7DxWZUVTQ86J9SBvqe27b26",
  "key31": "3VZ1MthaB6nenfero3Ucx7UMUr8rrPZgK3NQAcSMnimfDeQbJChbejMR3sUEz1xuBCQ36p5wx8hbDs29qW2sfywy",
  "key32": "5NwxHPyZ22HpSSAvmb5xfiyMRh3tcbsb9bzkGxSKDRmrrVVCZzPD3bay7HbpBUNLcT9ABFazzcadKuHnQ32YoMnv",
  "key33": "46RUcnP2oZfaW9PhJjcaKo727uEn1ooTHSU1aZAPjAhNz1873ffAd3VQKr5RpHgfCzW8PixL3eQndvAjgp5jYnQB",
  "key34": "QiFYMG7cmpQQQJu13Z1rYBenkcmTScPHQeyT1tVEVs6QBAKkWDFd6yTo7ChQZtVjQQ2wAbH6NtScNN8AVAH7EZ5",
  "key35": "24JHqEnsSwfe3wiE6P9xVtgrk13A9d6jgPD8A141o4TPQ6Ge2NRichmzU5Tuff3Rs344g1tZTcyS1ZCP8wAjDxe3",
  "key36": "58577HwrZ3y2h3Ujf98CeHrYadJ7vmGQRPoQUsN7JwswEDQZ6mcY7Dko4ka2nbvcakG9mQ4LeTShBrEWqv7xqcaL",
  "key37": "5iLPu6rPxRB5gMv6jZQ2nRXcRW5xbuvDab7tcCmxqyuZazszk258KRkPeuFFN4Ezm9P4JGoqDRNjR2VJatteW81E",
  "key38": "CW1oGyGVYaf1VjSDaVzTBfeRZ8Tj2ewnGi6duLsfrHruFaTsf5Dkvk9Dzro1eEN4xL9aQKz9YWhc7Yq8Ki7AZ6N",
  "key39": "4HyQNHwxMLSdhmeKKErzLC3JWYK93JugD6j963TabiH3BqdxfwK4ejhVSrDk4TsDdzFWyn3hXTuK6Wp2rdtbmoGm",
  "key40": "515B8VAAFAAnqS5QxqpBS1VGjV2oAe3PcGa5pYemwUEvXhmPjN7CWmuCs722szR7ZPLiAFQn6PfUHE8QfnHhUFbk",
  "key41": "NK6N1nyWjeQVdx8oFaWKteXk1MHnWUZBjP3J4gUQrcozzT88MR5yZ2CjANdtwagghk2xAo65YV5tuytxdRofo2n",
  "key42": "5DpqySXgiu2CKJV7ECTERtARTmQajy6SVbAchJ3bfiR5vfF4HASBjVcrNhHqEouJGmf825XHGnzjoW72ze1kPkvk",
  "key43": "4PGnEWEGidZj1w5x92hdtCgnGNjj3X3Jc2rJzpuZAasgH68sD6wKLg7GTbcmsTeUJQXgPRsVrWgWcSkkEGrkJ9hF",
  "key44": "1e8eUHjgZdwa2iPrDnRguPqECaKqjm3Dncnd4AuBs1gyiZd5sAT9PKNhcHQYktYdZjihMniT79ZLn2bvEGZQY7A",
  "key45": "59yn5xnAVDCVBk59EsRNjt8gtav1Rda8xNMqGc4vNT1ggq8WUJTYUfutxhf8vUkvkP3Jd3SBPKkxzT2zVeupjz91",
  "key46": "NTS4q5rzrzKp3oYwRdzNibpDUCP9ZGbTjZfe6Ecw5JXmf6qyMs495xSNkgkLtKrsr299qr4hHRoimVCfuUi1rum",
  "key47": "4LAxybSfBmtVFzNn9sdARfxHLoj9mFxPYh532SRyLFXSBXGBUxJnu39PqStjEq7oW6B36UaRShTtR685gzvA12NC",
  "key48": "5tJhXcRstUaFUZiDVHMXWVtgKyDaBi3PiMzTCRrR4kZN5X7XQxFUyffPKio56PSj7UEgWKBD1wU8ryTwU9hE85qT"
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
