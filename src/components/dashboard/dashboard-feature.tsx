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
    "4iJKkBsMCzZkiJLeVxhiaFmtxyBzhEoaN8m2vmjM1irJRzGrNK48GMytqgYj8SYnEL4LXz1K1a6qF38FRMNUwdE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8cRvBrcPRxGSSDzH9JJ1udSD5zPVfVgedH2RUrZyE8wpt2qks7VmGhDRsM76mTTnpAT3bmq8DBKJkdTkawzSeu",
  "key1": "4ubEA9RYiRNt5oBufruvBHjyVArPmYp8NGdJMsdD6BbAaYicRNXRf45W7nMRuUt9JG3zs1uK1kGdtzEDuC3pAyds",
  "key2": "34QDpz7jBF7F7EhpjEvbanvzp8ePkwX98Re5J6ZwVMwJFuMQ6MSeB9nAmKFC9Hdunv487QGM5moyjhxZVyBgHoC",
  "key3": "2cboi272evdURf5vPJh2jXJA6bmZkSzAZt5AU7vdjMpMn7vMY7gZmm3Dc44be9bJobhnTc6t7GYE1mpNC9X2BYHP",
  "key4": "2oSZzgu1DcAaoGWeFjUZYja4SghZs2QQ2fySf9HsP1Aaj4i1GKzQeBk6yQZZTZUM3M6657EorBvTscB7KwQfr7Xf",
  "key5": "2ubvSEj87jEjo7k5bjLez5iLTk2ZUa9M5JqWVvaNPVSv9Y51Uirn3MzcwYwWeZGiL34iomcBr1g7coWWt8Jvi45r",
  "key6": "3ZkhQy9BoiqcgsjX71cVEsKSTnqrMMD9wrDERttHaQ3SYXnWnZzdofgyMXUkEGSFqPXk8GuJsgGGuPGggpEtW6k6",
  "key7": "2tacDaeMGREdeXgnjMrZEnfZjx79X1kufFvc1XPzoekn1avipCbYLdi7uXgFHeaWmfWCToszPNvXLtwt19zFkBLd",
  "key8": "2vMTPxLzPCNRy3kGca2awJqFm5iZWZvRQtsFbTK9tXvKYNarEYigB7P2xnk4jtiZUvFXhL1tsYxond5BGEKLbLmZ",
  "key9": "35yub5rRSPMbLbxzQZRWXbpj8WnHRTPSydUBPmJvc7Aa19T8r7ajYn4HckhApg1gNuCKqGvwLfV91iHHrtiYDjGh",
  "key10": "2aTHQ3zWR6LVsoRwtSMm8WW4dXSv7jaRjdmgE1k5NcRBDjVCFYkqnGfgKSh45tWNt4XDQzBGfJk1hycvf1FUun5X",
  "key11": "4UMYBR1aSo9ZwH8y4xvVKNXi6KGxfPzLe7Mg77zGuCWhLiaysdZXcbDkP4EP8HN41TRvsgcPZbWKCdTJ6Cg1ST99",
  "key12": "Wm8Juy43Cc1PDBRDUR3ckZkKm59YCFyRh5XxWhwTFsivZ2mKp4bD1t7VcmJp1mZZcK1Zgje5EbcKqqkz2TsmdiE",
  "key13": "5nNGLBupJN41QggacSd2DTNFz3cncNKhnaanefvxDDvRPT1YUtzYXu6gmqXxws22HdvU57WHYZbiN7Cx4KVx1VpV",
  "key14": "2MgqAxwYRjwrH5kDGvrK1LyRfyxx9RbvSLDJeX5foRSA1zknRhxNsqLihwtqtnwduavPUj617D2yXiaGQfaNn8RL",
  "key15": "21mpJB9s1X75NFyhMRptPJf4wsYvL7ci99bBUiAaoi2W5FjUGcP7PXcHmFEsBPSWpWNdfnbVzfmQfgL1ypRweAcc",
  "key16": "2E6AtjmFFqZv6rbbc8E6zEHYTCZb4LCXKkGAqagZLvB2zja12z7aDse59zwGMpnhtYLXjCfPiYnovDymtUYd6kWu",
  "key17": "BrTnY4U14KzsZrMP1ASPQYkpGiXaAo23kWk91tPCJHHg66B4Qm4BkzXHVGw5mrzkgG7PGAZL14y5YF8oNvabiMo",
  "key18": "eu6jRqTeWgqJruErA6AdCNHJMQK5ADScnWJFeX2NRmHDYRUkcnpzjKu3xnVyk8SsiUY7LNHq94NEg5tZq9rUSA3",
  "key19": "CigyT2TFKpi6qjztez3ecivsjGZ3z2kkWTY5tyZVoZZxXqJzML7syATVd9VLzupViwRNUZDPkfSvFenJewN9BJh",
  "key20": "i8Npro6EukfwkFoAzRdNmKnssNYntH1xyt4SohMeqGDFkEeY8YMYJUPCANiktQb9KgbrouLYk5yCY7iZr9hZdHy",
  "key21": "2GQNQFi7tUqQrAZofgdpnyJu8epM1Bb4T4FoAypzqKgX8oemFsWL3iUNaKt2bgQ99AUArazarGsWjjPyBfAR76Mh",
  "key22": "4KYBuY4PfX7tQkEZ9K2fMZtdDLQDygPUAeEuxcyy6cU5YFed9cUpo4vfRBaxxkF7DWmmU2JWWBd3JrBDrSaRvnd9",
  "key23": "2GZdVGK9CHmd2FcaQa9wkWUW6UraKcn9qAvT2dYXfDeV3EqfuCVjSgrcNCATVScKkBTehuZZMhi34V5pdm4CWb1g",
  "key24": "JsE3TvDcs9itJDVya3n8hCSqgPRpCvwMcsKCoPMPEsvRnFsWCQC1ZsTNNPQTMsvtPrzMqpfzHSSEeeCHC2aAbtp",
  "key25": "3bYAT438Gtm4W4UFk7N1FZAeHacYkp5nQu5Knxt3zjDbPGv8NDexEooPtJ6x8RQuVFWMnBwLAd2coqJ8kGaT4qbR",
  "key26": "4Q4vdnbWTX4oL3xbXAosdbbQ1nocRHBEcjJDN8i8r8s1om79bm3o4bKKf1nai2Mibti3thyUh34bHCdHxRvwEpKo",
  "key27": "2okeMAYtUifYDWTMPSm3FD55VXUu329Zxez4HWhfZpgkix1j43thmCyQNUe7RqPhst7hoGAwbcLJw96qbhHZWUXb",
  "key28": "4f8DMNrsRhNCMhi1KvSeoV7QVjv7qQY8HTbYTD23bxfQeeVsZ16HwLk6bU5QLcWYWRarQdCjSFuK9v41h7dCDyVJ"
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
