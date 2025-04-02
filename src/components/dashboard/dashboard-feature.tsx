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
    "vzg3Xoywqb8aTcwTYGMLUon84dz8Gkd6LGitAyJSSFb2ixF588w6dqog1hLjRBuHo9SjbRm1ckDr8ctWySNnogK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTYSpAmFVRA1vd3v8svGwCux5jxPQLjXWDVUFgEMu9fnS8JpErgevJGZW4LXhFTHFNmHkVkGcsb5WrvG5LHCRNr",
  "key1": "4fMAutHLFwc9Dnys4CULMWDcf2VoLN1mxREwwZHjFp5UN3TmrfoYKL9i1RgGKJV7HL4S5MjCCBX2mGUmN4qNb1vF",
  "key2": "2ew1eQLPJgKtmkqN2tNkJRt45NUNHDQnrUJYBASi1AayaSC9BH84sZpitDfokfzPfBMPVtomuD7vMXhGRP68YgX7",
  "key3": "5RfZWX1mzXBq4tRqVyEqSWxWLBS4E6pHu9TTqMm6bJLhbiL3rSAHWfLE7EAGo55eSkNEJcz8JASXnA4ACg72bcu2",
  "key4": "331xCKupQanpWuMZ9PCuAArs9U8P5GgX4jwXy2o3rNj5vBf4b16eeoFBT4P5gHyjgBHfgnH5yUo2BRkw9oUdErUJ",
  "key5": "3yuPAHhriCv8eXk8MHe7P8H5yWUFPBr13brdFtD952wMKm7as52bfuXJK4YXRBTZpXSLcA7ZmX7Hwn6RYMRW3j1Q",
  "key6": "57v94pVoJuX61TG4rSMBg2zcYmybVBk3Vb7PpsJRTfQkUgKRa7g2X3dS61M2h18jXqbTZw7DVS8sJ9K3CG8ApWir",
  "key7": "8TMTz5is1hEPWaWTWGe4izzpXsd5Dqxqpji53V7Rtf4s1WyUhjQzuK9EiexavY9fsVX4SJ3eHnFJ4wAKwAGAiLR",
  "key8": "xdQDmPDWuxYinij38aDoFJmoWUoxrUpgLLTHMoHQiGdoXsWtsjQi2e6TuWMPmPmuZCCddUncCUJvsX4hdNPMzMk",
  "key9": "33Tan6vkv7xf5RdbbXJXnuJcd7NxtJuKbyyogZoqfyCdRZyrjjRhGXRCkZCcpmDaHKWk7ramV1DjmcCPznpNDzGt",
  "key10": "36uNHWVUyPnVhsmwBbWszsMJPk75zE9HFUjTTJbGYsKLwoRXLQCkcB4YM4GnLtjsCa78E5vonnoyFVtuZg57wx9Z",
  "key11": "67YWSbKvhYArN1A7awAxwfSayQkWcPQmu3rMWj7erxPTFjbbJ5dmVy6MaydamESfFkcTMPpyB5f3aq2qavBzS7D7",
  "key12": "58iWzSWs1AXdJydksZuoeWxHKDkYxYBJStR81xYseZ2GMDHUKp2XH2sPx2ecrhj19shDPQE9zR1KiCALnfDvjnYe",
  "key13": "21qXpHmW9ooLiskUwVzcaNa2HTzSTpvsxjFQtdwaUhh8f6MrEw4Z7tGGp1ZoA37WMRkhxw4qnpuB6S35ouZ3aAJo",
  "key14": "2JSm9joVCnjWswdejc4CUhhMFdm5gQSGYAsE2EjpkGw7gz45dp8ELNCw1ipYVZhPupx1V6YCGrJr7tJwEGpifWR6",
  "key15": "5fLUGFu2zyo3bFFu2MmWuDVpqVKybppHVWFsGngY6DR4PrAq1o7GKdwiGdjbLGwUyVDu6tfNUTGKBffB7pHBVtBx",
  "key16": "2mT4v8sPMz7KWuuZq9vqy1isjBsG3b3o2Y97KfZdcDc8jYtMn2FFL7DPAEj4PNduy2WUgsNwPKdURiACAis6Scqs",
  "key17": "5zP6CvYp3HqT4AUX9UfSmNWeU7sJQvxFvJeAch69ETaLKWs1EtqDzs6frH1TeFkiqbVfvqJRCqx7rR9L7EDXQfp4",
  "key18": "2LiapQjAeHvHHmrbjcZP2b2muD6T8m8YF2SQZ2spL1FZY6Tv11bBbcwqYGqqTTWUQ6r4SdPuMaag6UzHAVguBYTM",
  "key19": "6sivT2D7p9ufUVxmBiPJ8dFi85GwG9QDKRCGUBjAQEx2umXkULCTFLMHr9cPfpP1aPNKfsETnW3Fyjh8JFx56cB",
  "key20": "5EKdihnK2fXrh3bVmRhkrywNj7MVKNnh3ZrNRyWtd2ymVCYEq92x7MkY5ieaw5985a8CTpuD993Gof6fErMJfK7X",
  "key21": "3q595EEoKg33YkQiGaugYC3ze34N8eJkibcyCKUvE2YksUZupfwDaxW8NLBNcEDYDzihtt8eyqRb49d9SGget867",
  "key22": "2BRPUDRdNCW9nWGkShbtqPAdjptprmh1wqTGSVwnp8JuKArZ97ALDy1DCZMwtgoxQaWRLU2W5uqceniE3FBpi1du",
  "key23": "41hRG4vXJQen33s9wjbQVs2ssjjBP9ZjtuaR8THk5jKDfKbkYXvXD2Ar6KyXidaETU1WPG2TvE2DstYJaMdTTxBS",
  "key24": "3pTR4vaejnEDWS3nw4vdTR5bwZJ8qRDwXpBEHa7mR7mKUHMzfZk6deZLcCwjxCNqgggGBj27XW7iD9o2vj2jCqvP",
  "key25": "2uFxb4oS8hC3LGesDmzA1CxTYdBFFzqoNst53i1HfVxC1nr6uVgiJmTNi5uMFMuNX4J5G7XqCWJQ6ZKhbZqBWUJn",
  "key26": "4Zi6XipnfqnrAo72MukuzJwwVuo5ZBiwFb7tvRzRDMG9rftVQjgGziSc2ssaGBLyupNV2eGdEraA23JMFaWwTHkQ",
  "key27": "eLw2MUfQ3PTnjW91cgbk5C3BPtdPfgCYMzHxXFwWLkVrU6c5MawFhwt2prkjmqqR2VisGeRAnhMxB7ZHZ9LMf3K",
  "key28": "5Tj21HCQhBp3qvwPYLSjyQBkkhrVapi2DYQuZkKPeCxdUFwrddW45Wc42Tf3jGpUhhhtFfLqNCeDw6n9idteWFjX",
  "key29": "4e1n9ucnbU2R5QCMWYHwBFbUUhkzB6ZLn7oBw1BtAVYb2Cd1RdreJkuaPtV2XcuGvZVEaE8EwJCy9G9xFneTYGQ8",
  "key30": "4ts7hbWQqVayEbZXZQ9tgrwaPM97HsLKpB3UZw5xti6FPCbHt7UdgPStT8HU9UfEGD4SdNjB753hqGnk5RXt1okk",
  "key31": "3tHZDwzoAw6gLXEgAYQJ19EfH1JyVdoizKgW37hgCaykKGbkmBh7LWnCJ8g33eVHK1jrQ8MhdnsgL44riTaiTovJ",
  "key32": "2uRHT4o8rFFLAzFSPwBcAHrhnKq24tfShrqudMXv8QmtAzsxEyNfBJehthY2r3JW66HaTtWerowbyGA7afsiMyJo",
  "key33": "5Zx74iGq7V9NjkadXabEELZQu9YDnuLHV3eZVc4nzevYbEvtaYt8xW4oZZLhVNdJJbFAPkoJXejBwQLKWywzjsLj",
  "key34": "c4imb61Q3ai6Vs6ME9Y3AcyjhKKb5mmjX6doQdE6hsYpjNCtxtRkL6Go9ZAhQENgWy5ti54nTnctN1WEm2YF7JY",
  "key35": "4AXvbFzvPshhaERJpb4HBdvkFoxikmUEaf18yf2xrJRXVysfnRkDBvpp6iSFj1CK3RnYLuNV2WxYwGH4gNaMLCAX",
  "key36": "5EW2gA56RxQcv567oQSoSipH6aaMVNgiHy5sGeQMwf73Ms9wF2n57RV2coDE9xhkgZotMTfCf88KvBKqLdsTfXko",
  "key37": "2LFHUJeKeRgvHAH4Sx7YCfRuiyk2TpWpySbp5AChJZtQYABzJ21PLBhfqRUkYrJxMxBCuagPbqd1C2QySYfE8CRz",
  "key38": "3bBEYJDidAd5J5WZTYZbFAWHncXcuCVTuosTAQmU7peJzKrLCJQFnCss1LLGqt4TKUySHkq3sKkcVjcxqUsyjP3Y",
  "key39": "5PWd4NZzGPyro6GK1hprjPFxPLKJ8QJJnTcm3sh39QRuybDNPDMFkHKEcjGFtVzAxcrtkC1mcdwXoAZiisZcJr3e",
  "key40": "21iSM5iUKD7Zb471VbgQ9ijdoT5DoeQvU4zeooeTdEtQ17mufaVf3mpUcstM41cZovGw4cDgf6AAygebeM6hUnqn",
  "key41": "3Zorwwn7wmHsmTpWuPFCcKQvpXoqWHSGxKYDkKUuFSjWaYbAXkepgkgSxDSJs4TzRhbau6f3VqgZUdYna2VH5CP3",
  "key42": "wRLLTqBzw5tPP3YGzgL62xGjVvowmcfdHmRajA31zkx3qK8SZfbcwm6jHspMSNj5r2XoBrv5YLJZ8t6hzguK9Mb",
  "key43": "31jBC45h5MKayRa1b2nQdFuxNMquc6J1j4o9kqNKmc3H4dDAuJyAeTrCJcLtrQnWoQQSKy9sBJMHnnQrJGDS4MP6",
  "key44": "YUJkD3bR8Z5FqaRP5rzfvWvLhtPXdppjADYXvmkXHxBS3wteRnwEDjXWmZjs6kp86Mga3G3L6wyXvJBar4r4HkW"
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
