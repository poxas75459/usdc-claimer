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
    "5mFGr8GESg9Qo5iuz2XMJfJs1T2NGGztR95gFuQRz2tuyavySmrH9tQcCQecWqEdjxjGtYE6VuStgN2MrK4vj7MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YQaNG4SXPFK9CTL7mpSkLyaN7z5YWk8gm7MmaKP3HCHDofs1UevjY2JbtiDYvyEnidafHJfLgxoV5VdzSwyvN",
  "key1": "4ZmCTTWgyguCyzpLCuCmVoMNi58pwfNVFLkPcvLyjM7T2FavcUcCc31mPjx4DuTsjXr4vhsDFAv3muMdw6rTwKW3",
  "key2": "2MfUqusymwUYmDq1tpKaL5y6GWRnX9zxFkZUjBVgQisZJSdEryDGgACa8PJzzoSt5ccY1B7UaJz4R5FywvxSmwij",
  "key3": "3RhTsWfHhpQgi7XGAq1d2zLsNYL3hLPQdhH2NbrMcqxgZRoWhmLSUW1ZMdLEkzyuam5ebkrETxgdmjzsANZAutyj",
  "key4": "4am485SsYLX3tprjUQGh43suwuftMKFz8wFYorC7foARyhG7whmgFuGbk4kdPSfNKQh4AFaj4rkmjBdnakzDgQKD",
  "key5": "2KTD2fr6rnEeiWCpLMYc7tWYC7QgknnFimsSbkCBjUvhdxbiFPmwPQx3gBH81rtBDn5heXqhhG1urcvKa4D159Hp",
  "key6": "3hok2Q8TsHbvKYxoNWp3JHfwmDf4ANQcGtF278iDvzZdPcuQrduFnjRtqnVVbKWWwKCexMQabfc92Y7NPx31KH92",
  "key7": "2KqKx7gXRjYdfyBwrby3vjT675N8WTs3sm5ZysaD39JjcorsXYo7BxdteKuo6TqWZU4raYHTZyeN3rwtBMSGjG9F",
  "key8": "5PDK3Eg5JwayuseGZjbW1gMXucApJRK2HRcvrux4eF5dzQNTf2TYUdPQdp1aq4cpuqWgZ28ChXEdYCWrPtmapExc",
  "key9": "3Ay6fd9ufgYt5NbMjmwcFZVS1PGzVaXWXg55Uz5JRJo5A57qAX1tDVg5XogtfLd6VhjobVSp18DY3PE5iiY8i1Ap",
  "key10": "3FS1AP2zWHQSBe1kk7siUaBUr4YHecqhGYLwXWyFU5nzj5Ce1nCqatvaSpkeBDNHpWKu2k3ypi7U4hZWdK6owSUz",
  "key11": "2v53zzTchRMSXYduPv9zd2w7fXpxvvWAR71A81b4HSSJNiaeDBLkvHmasvJP6Rp4apPsaUWutHj6giJTqnGDzjYL",
  "key12": "2bs96RuRnGvz4xPBRNxrrmbd9bnhBGgggKJbVw3Nvxt9J6gdohtk5wyj5Mbe2DMahbN2Z3ag6KiKY3HvMPGn5BnK",
  "key13": "2LqcVX42NKV84pjogGqEDeCCGbRgroTbSWNx5gD6vmz6auspVKKTbRKUai7gwZTCH7EFSvBcM9xpZfUTABLY5Ja",
  "key14": "2bGHZYDWojgBJbEcAV6H3R96wwTgfTsbpdPm3b57pkRVTVf6MCYeXzZKv1GwhhEGhfVwcYwuwrRDKVH5sAgxkHYt",
  "key15": "5gqaACVZPa9sACVoTxSkmYSroefrHk5DkPHt66wAi5kFEC2bZLPNertGu6J8NbhzMSu58TuxySvEuPSgEaD7QGgf",
  "key16": "5PVWHLQeob6J21EY7qjtynVcBttFfJDifRNtr4cmcn5np4PDVKATz7CPsbtMEkhkvG7tQRs3uugvUnKjpQ7t6oCb",
  "key17": "5DAxGVooHZNp7P7dLz3tQL1mXUfTMYFw2wUxiSf4XUB4ehhBLy3axwMncEhsbdtXikMszy7yXoBx9TvxiVKsPw2o",
  "key18": "32nRVM9p6MHkrLKF3LSEK7UA2WaGipsgc8PAsnPoH2C5LWp9YMNYFRB76Xq1MtAb4roJS7McXqxQKgxbtM2irVjD",
  "key19": "2SNwx24rbEag1jnao45xQ2pDhsJp6kTPS7BrLfPzB5MYgzNuRmV9pEkXJHDRtB4XrHQ8yaCigFwFYNfj2wtsGT8U",
  "key20": "3iydSuaCNucqh1DknwQ1PuTxQyfMuRH2TCmt8ijUpEqQrsYrK7cTdJSfNa8oZTfBKa9FbMT4GJSxuWNprsn1nJ9x",
  "key21": "2ZWSrGJmGRHdPv5jrM33pncpqBsBg6Fp637tgpXBHrLzHHNREfSdru2auonhrgExFAUVdQ133oy83rrA5hqVY2Ut",
  "key22": "5AEmKJcsWixwtXFxjxPBJTFn4rBuAMm7AesJzvMQay52rnuW6mrLv9kd6HMrewjgayXdnnh7ASZnq9RJWHP4vNoq",
  "key23": "2oPKPZEL5Nuq7QzRqXVECP9GmdPJNudYAuyEogA8HerZApH1WdgwZCGA8em3po1U9FDkdN8vVGgPamx7PVW2ZiDP",
  "key24": "29Pvj2W8Bd4UHZkLTEDqNJpoicJi5svyqBQhGSQvBcbc1ueMojLXKuufBef2w5X9t7yvs1P3n8fmjwGZ41SnTsHy",
  "key25": "6fcUruuJVUbKukmhosSqpW4okxvJDXkFrf9qw1uHqS84VYRBzVFWtdrcPe2ktFc1EKBFoV6etXQDDft6KfwAkL4",
  "key26": "2JM2Z4HGyizWYMAVRTcQSvDzNHZq5oX29UJPDvn4YtBPHLKWZKTnSBVuYAe6VrgFWXhgQsBT8S4gguAgTgTqWDf1",
  "key27": "5dv4pNmkvpFxa8DtCKuEcScAzF6tCSh2zKYBrSRPXGsEyGCTrGepCzitKUgG5WPxE5c7wQeCcLbeNBUTWRXnke4z",
  "key28": "2vFMEpfPAQTCkzw2QJcFdnN16DqQdi39SC8XPbo1MqpPPjPvqb72XZ4kDgh1cDBmYe45vU2qtNXBo1nZwZGmjJbR",
  "key29": "4jNFHqgMW3r3wAJ4sTE1Vmcz4yQBbJ8JA21vX3U2dXEFaE44gRwu6ahPa6GUmpcSBGxyZN3q5aj8RbmYd15UVFjw",
  "key30": "4BjmVMbP4o1Jq3n4qWnRy94PJravmNuwqk2PwczZSno4XjgEicjXX5HPa6oGk196igf1Fhijqi3beZhqdxMR8qHB",
  "key31": "58PazFmYqBqayjtNJewK3BwH8G3DLpSoXsbnUbH1vwJ3eiLSqFsqwH8n4wHuSf82oxaf1S9aGYviooDyw34CWqL",
  "key32": "2o8mDw9hgrGuakgEN6SrzBNVUPNrfAsaDryyJGvfa9t7eunu99TLLvmEzkJpjCpd19PQ6FeNMwVQfMZtsb8YjD3a",
  "key33": "4HBSNQzkXTeXHsUyjiv4BkU4E7c4mbqjSV7An4HZQT64i3v29Md4De1Ya3k39GPuzkXz3yB6xSrnz6n9aaeTaP1G",
  "key34": "48VNhmxoVCk3Cx64caFkrNnn3RwfTj6CFTGFLFFHhjuDPiSi8hmJsBb72wDmVqQ2zA53TLe69kNNLcSDw516MMtm",
  "key35": "2xmGcW78eihEHeZ6AQF8Uw94Ux8Wb5yT7L3LgYbppV7LE3sHjz2LnM9PnKwhxq2ZUbbWNaPtygAZ6Y8kEpvhvAzz",
  "key36": "xcQiZh4M6TfZjnuRCcTqCWkDxWHnLPDYv1226EtcEcgzjDyphNzhKs8596S5QnYXZTMtNyresCycaREFP3d9opx",
  "key37": "Fza9ATTXkeq1nqsKXQm8EvvuxSKrChAxwUsJzf8jBcM1xwzP1ADVmDhtvVB8LjW3ePiefED3JvMbYJNfxJ9z1xX",
  "key38": "28djHxNg6waqJcJ52XwnFwHwfNomwC8pqkRs2BUzKSUcba7V5mDTedRWYRYp6VsSdqkxQtG7jTxQX9pbvZanXtak",
  "key39": "2QwhC63wrG4ru4EADQuV2zPSPtnUrjFxd2hY8RJ6sKZ8AvKSqdontLvsHWpE7yPd3Qg4FqNXinAjptPAhVEoGafx"
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
