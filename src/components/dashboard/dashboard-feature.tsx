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
    "4xyFhNvaq1dbsSqhmAQN2hP6gS9v6WnLC5JeYLyrRUfP9EovUCvjs4BY9omJ2T5NKbvwhn4R58DPSYURmLy83Fip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qijZrnED72KozfWe5U3boRVPA7rrXMmUdSrFgvg8VrfMLNNSRM9PP8JvJwivhToWSozpiJ6a1Y8XGYXZc7B6biJ",
  "key1": "5wJhc2acTc1RQP1Wvc7XDXDHf1F8sa2tizNDBmqMH9MkEq4cJ6Mwmrw723X6nTYisd6CLgrKELDgBSE6MY8183i7",
  "key2": "57Rh7khswMXsFRchsERgFxECPgDbhzbAqFCP9WaWmTQDbWa4JrhEfgXQicKpTFZgZMTaj6VsN9y3ApdsG1zGWchH",
  "key3": "51Uk6zQMYCHrGct3NF77QzEygW82qTwn9vLbrQaYCFVZmmrbmnj7N9KzfpqWkekVaf4j9C3SGST8T26B88j2BB7n",
  "key4": "3q6q7ZtJ4SLHvsWSCNNN1iM4h2zAQZX9dpEChGbhq84WioSa3UTvsqJSm1GNPtMyCAyR6X48vt959bk4qtySN87h",
  "key5": "3aWsgkSG2WP6QKmPxpPsmYW4iPp1PvRFeVeEUru9DP23F36Jmo3ECaegG4UTPEnA6GPAoKA5oL4NaKrbQk9NUfDB",
  "key6": "5icdKSAau2N3iuoAQZPgcVE2RwLZvQWzNannu3C5pwcuFnbESKQukqLjndcHRe7nYa1QYCbcAd94iYhLNjXUpmxm",
  "key7": "4bLRD1do7Vik5iUPN82aZgGzC2rinWZcxNAaCAu2TMYQUAFLikRTQQJ39pYPx4HyGsCjUtq2mwt8esqDBLwxoHKP",
  "key8": "5otJt3gvptWEPQWE6P7GKhbvyvHxoG5QtDCZmjkaLsc7VB31ENdHXufystc2ASSsvTM6R5ihPgSEDZfUQgFaqUED",
  "key9": "3rQYfdjw6G3beyw6kpEzLAsQYchPZg6QW9vkNRQrEhkiFBeN3S28Ah7pbCJs1ptY9AL9SXVqMRx3th4S28BPn5RR",
  "key10": "2r4vzG2EdVgDdiJJzcmjfWyT9uCzTtY1vKQo4TQuprSxgb4pFyRCXBUsdoudN4ugxpm4kUdyCvYNxfLNvBMbf8PR",
  "key11": "28RWNKBHyyoidmL1vcaGsyqcW2o3pPbwQcwDKM8MVHhQC6zd91FEQNUxKSSqz7nQta3uGtKsAS7mcGyP7KEaXpTB",
  "key12": "5i9hhwsguNnWptFaezMkThVRJhbpE5iXC8WGumvpj9fmfbnifvo43MC8AzcPJehi4XrC2zEZRKownNnrBsjYpGqf",
  "key13": "2v7MSdoQS2L4APnwkEWm9pczEainhiAhA6GiA8ydsQVmQvaJFYgsnpLcL46MFXPqGDftbJBn9zNsijmCpjogarX5",
  "key14": "28FXPeL2ueqMjLk6gPpC7Ha8QwxzZLJmNREYy6YxYPsFdFxbNZ14itTWzHvx8j6S8eF9oFj28WErrpLHo8sPG58n",
  "key15": "4gLwutzcVh4atrhhqvZx32NwBAW9r7onovbwEsGSLQxzhuqJavLnE5YAgCYBWZPpmMaKcHQdF4pz4DLtvB79s3v8",
  "key16": "5NaDTXnHGeVN2uiqkTbugjt5vYdH1zic3LfNJgoN1H6CRFmSSqEsdnhDNwXwuv7tdSfpJsFCBZbg2TUYz4izAXuc",
  "key17": "2494GmBpywHiJ7e5bGnauSRu9QDzQNcT1YCPdZfehBC5B36GCVkRsXy5AFYrhzDceqzrHb3WQmzH68PPv6CjDrCt",
  "key18": "5SPGPiYHosFWvevsWZrJcgpBp5WWiW4by2C29xEKrtsveDRt7nR3zGnwxcgcq74dpjQsgR4VCVaeKWSUFatTWnR6",
  "key19": "E2qbHFGjVBRiYs1ReB2pfm4WS3ESPGP969x8rdvadsrG5cjtFtDYzENb8ZzYL8BzcDoVUVJr47WqfDF1oqbTzAH",
  "key20": "4wzrrCxRgPzx7HSdjNgVPrAVJFwXvXAk3zVakH1Cx3S9Py7C7nRSoKoSNc4Mr84M8DEMgUtaZJqrSLYGnRgLeQYa",
  "key21": "5x3hZCfa9s9PqxkxDVPSTrkmPbFQiZDTTmSVBpNX5DkskubGfUwuqaFCKR2JDVf93AJRnQwCnYo3QZs647CfdSc8",
  "key22": "56iNk5BqTKKMYey5M9EDvxHAZDGmKbutGa9equsuDL6DHrMmnoAA93CN1WBFVbGzrY2LXFYjZYWC62WFGYKW73MF",
  "key23": "38khXYjixkNFWbitMHTUwpjovYtQwcZftmMuoNzZ8rhzb2bFALJQ3nCcK31q2v6sio4xv54J1aK62TGytFm4pake",
  "key24": "jAKn5qVUxM7K1Gif3z5eWiWjAvJvxEPqp5MA78z9gtgSeviYaJk4edVVGqkrirrf6AbK3yNENp79EFCF8kin573",
  "key25": "4qJr2SXHVXacRoRuFQxd5KS69dd7iLXNRBHUYW3rgJbGi2xSfjfCGZ3zTaEV4jdNbWQdsvJUatcq4E5tEPccWzPU",
  "key26": "aiya9PijrHLRpAfP6F1LjvNGKzWZfnKgXawmAfw8QPVyPZtdGmeRMSJhfoMSr79PShR78brrqDZBhmXJZdrAz4V",
  "key27": "aTKSg72qXWXhn5KMrF5H4SCsYXwik69Dwx3SKnnztrfsZC4c9AttkYrsC1P3sn9XM4vmw2dMDigQncodLD98Exw",
  "key28": "LiGmzPJKzbAQDjMmfmtAaiMLLMkGLkUg9HqGc8xQJgRiE6qEcq7oTrRMBN3TiG1xWqZH26rYuxpcbGtQ9Qci2Hp",
  "key29": "423yBPCzAVspjN4sBkEuQknZb4whc9PdEzanDWWdWCiVr4HihaS5LhEriZ3THuwicvWaJau7XC9AHgMnUzDTSnPy",
  "key30": "45a8xGk9v2oVVQbw4D76RGqwa8kszP6ehyGEXXVphnuNNRok8CoKfcG2vet8Keh1aJtDDZZywJ28rPUFKTprcFGN",
  "key31": "4E6SM4trfmvRiNj2m4J8pmr1Uk6UcVorqaJZ5PLopYawUTP2EJdoypjV6SEH2qWNShC3aEhzTJj4sKuyVuFecE15",
  "key32": "5KPoSwtCmCLBZXVsVakT84HA3KjPCzGmzeLc2n9YXyi8xywtLgh3CLwBwZdnoeFxqJo27ztWfV1hXyMMTnZnmnQo",
  "key33": "2VkkmrmwF96dpPMhznXRfskKzBuiSe7Eug3DZp3GMnw9LHSQd6uYJMtMFEvPfrpQWnmd7TnBbpHPNiecdCGhDpwS",
  "key34": "2aMVQxkpbqauuVXmBKPegBem1gzKopp5Kpp5jNaT456xmSVfFu29ZpeqJV791QvgVNtLWBqzH5H3VSkUr58xUmKT",
  "key35": "36W6kDGUcDQvBA8FY1h2gMWCSasq5GWV7siHeQbGfzhcaxMupL5dUZiL8Cmrfxz3MCvxzbd8Lg12wdF97BJZ3hm7",
  "key36": "3Hr3dGdc7wLoGFjLQ4W9kxFiihqM9vJhxYcgYfuVsh2hntvKbQ1nJiemJcHfDeLXasL66Q6zZSJa9RtmeDbgbZH1",
  "key37": "3MMpMwiyE7wk9fiFgpE278qQCRRTuFMA41ajx6xHtvivNpRNGEb2C8SJs54aa5pgZgTQocy7mCHgEqfk1p452Pys",
  "key38": "66RvXXsAefheVZH7JhC4jvvtsNVcqKySU3T5ZPuvPwDonnGjFzeFp6Y2aqM5admXhQWu5JeDdapDjEUSpX2Ka2HS",
  "key39": "2wBeY1gxZaWTbJm6G7twDbaFrdnoAqQkbFDLh6vwz35Efp9e7bDaTefdnrqtahf5GWqiMePLdFWFV46dDuuZzFWy",
  "key40": "5EkMkiJKByiqUSchP5tp5Wai895fgjSyKCXRLX2NZEAAsRS8jna33y5LwvTe2581T13giQEhyQeR7SJr5WjN8kGi"
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
