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
    "47a2FFe1wGZp3mpuXhecF4GXRzZe7mmpwAQAYMix6Ffb81AN2d6mdMC62fBxxstzMAgrJTKPeSxyKKhdzD27DHk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAexF4tdmr4yTMaqJFgRqujiZsWXaNnNrXcAH64oJCGRrJzkWJYNHjonGMyZdCsntxU15iJbqBZ8pSkmKgryqzr",
  "key1": "8ZeeNyJnfNUZKNghbc6zyz4k8gf22NSqqeNNVZvNantzSNKBsU3GFpf4sdw2CnC1uqNQcz1bzJhu4no7uGaksuU",
  "key2": "5gk6yAhZmRYtrhXhUZ5viS1FeX4eoSaST1DozYYaGRAFBRhS5CBSGPCQL7tUKY4QiXLGReiaTRYNY65vv28ufKgs",
  "key3": "gvAQWnZwXrnMJwYDxqFuBgqdKCDMGEuyWX3jt5zoXrQtJWLghc3mKoTTXknMG56r5VL9ifkqbfNanew6zUeVTEN",
  "key4": "5XkiZW6UHkDrfkqNESnyETMKKZT6zSTTdYPXbSfEgEsQ9PayBxpStU3wQpddyj49YumkQg1Y9ozZvRZbViinUNY7",
  "key5": "MJbDi5qvrEyL7aXo8AvHfAkBwdqQh497FmMcN9sUvowbUNxJbigsmQvPv6TdRqyQbeGz73UnyueSbEbetDzxFTk",
  "key6": "pSw6zUookMBX2s9vktR9ba2vgnHzspagfDh9XwDHFQN1eRqy976XhhanzDhpCuBJDHGgVTzA5N4xgPs4mwzkCLN",
  "key7": "3gZRNL27cN2UqK8pRuifu58LUHfL2XVpP7j65c474XZvrPwLzkRJ6szSQsqNN4fwwX98Q3nHEB2mpqR6MWFhvGBm",
  "key8": "R8mTyWKJ2dbTLUX3zL1wJQpzLYNB3tS7CmBWun9yo8azykbgQppLTFbTmFPWkaXdQ8we5Y8cGraQ8qKh7PQBUp7",
  "key9": "wpCDd8HVxa9dBBhCWNQ6KNqUnieZ8KhBmKXFBq2BS2LwdcWrDiv7D3TQwJKKAY7gr2g8LfonAKi3dewg6UHcnye",
  "key10": "46k7t1Safk9xVs4mtthkHQNPTen3aAYmnrR6DqSmgRHRZ21wnfjpvWaVFwAEwNo85FJb5PZPq38j6fYaRYzQZKfY",
  "key11": "3bm1yhZvLUPvdnnsEKXM9YYrmKoCtvtTjGo836h2tXtJg9phpn7zCrues6tacAzUKpzf9wXhBpUbzRsoNoTZYVap",
  "key12": "GDciG1F3GS5RC9QSHF32Y2Dr5apNoA67wLAvjQrmPCqGJexfVG8CawErPvvxMrCw9cadtAjNTdfaRJyYfozysVK",
  "key13": "34AK2twVvGa1C4uiHST2kTT51XGGo2tTRkfQwvx6J7esDreQMUwoStzDKRn2HbAvBfpo46caAh1e9adeRPAviyac",
  "key14": "uQjkMwhsehfukgFC5iq4hTGkKuNsYfjuNq1DdsNscRcVnrpo7TzPjmKeSwoAoMD9AGneDUsL2AEeU3Z8YGmN799",
  "key15": "5FCi4cFK5sAuA4WS6otV9pnUWFNmfrjpcbjMT2X1qRJf57XcDmbBduFMPHQFv5ur2eDbfGUHhJchKzkUAuUo2GCd",
  "key16": "3ebdk8X4gNdYWyBapKA5SEzkt6J18W5a4afCnTPmdqUdi2xV9jLyS1xjRiVh5ziHogD5bdaknH9sweqNjocTmCjw",
  "key17": "614fmVRKyCgwXAscoJaexA9FRNV8fbHhyemfraE8fpqGoHbi5uuKRkG5oo5UrYfVXAfPuG7nN4ugwspkM94HsyWb",
  "key18": "4rY4GdaMqUX5VRmVCB444HUm8b2sQrv7vm5SEvyMFkpa4pMvJSTyBFCpXknDcY4Z4vaPAFAuCEe3AQjdk3hBN399",
  "key19": "4yCBuuM8qZsfhpMK7pA18iVu5dPdQ5DzaFviZ8CQCLPDWJg32HeCNRMZLMWqg4i8GFEKkGs2g99fwzePFDhBmuPn",
  "key20": "2vFQAeg7gHgppaZsGK2zzF82CZWTV1LaAcBPEXaEgGsGihuFAfXivEsZRSn7qiCcwxeNLux27wrjoPCtRN4i8RTJ",
  "key21": "3Y2nJHrCnJEdh3ExScP9zNq2JvkbTeGarRFy6KZ8c5D3YHQTgUp6bzWkSEQYYNbPKVogCrAbEo2fTuZKQNGP6S5t",
  "key22": "5SX7d6bzvhpNDTzyC1erhVwp48KjErjtSE2DL2PdgXgTR1oTVY9uczhriPEtWGSCvyJdEnYsMhyYR8GBmJ5s6NT1",
  "key23": "UZA79nsv1NtCQNxbt5s3fsLGezRuqF95WgZTqoTRnzmNoF9HZh2YtSwmprVbbwXemJGNH5a39YsLCHGftwESd3t",
  "key24": "5DRAcwyZNg3FSrEJspzdyze5ivtFVbtPDwP8EEPga9q3YytRE5pspqR89aiTA9bP14Hn41UmNJo2VY4WFvzFGxPB",
  "key25": "3w51iwhgPRJpD5TqrdyPZw2VmNQCusMhqqjA7SpvAsm38oHP4KPhgWPmFLhnVD9xJK6mjNnHnYQK7Hu7PugGL1GJ",
  "key26": "iaWVsxDdmwsRxS6nWjmcnethy9A275TPvGUVnYhh1yWUv3fZmTeCTwdXmkWYyCnnvBmoLeJZyAs1zrubdVgV3rf",
  "key27": "2jkfXjKt93ctLjsgdEpcJBLZaMKjFTYCpCdcmCwf3HS35eiRXAfg5ed285sy3jS26pjhK9oetdfpkD7fHqvXuKHe",
  "key28": "3sZm8vxPjENWkULFQ99eknvNDkiikwRcwYQnXMyD6b9sBP4JLAZkqdXwHbc2cVK99c6vwkuGYE6a3zsZjV43G94n",
  "key29": "3bDjtXQ41JpUYg4nCRLUg1FrxiPDup4pCWZDLMUkdaadfjYH3D63cPqkNPuzbqRV9Xg1471MNT3cmFEtZAJB5Kce",
  "key30": "4NA4a648TfKUUMnAJP6PYYSZfXG1nKEk2NBa56JWFShTFk6dNDnpnbHyaVTQkKqeaVmdpggLkX8KihaYEr41oW5i",
  "key31": "2vRrrgYkvieyRE5xcBGrFarvpbNAwEyKApkUwcCw7mcBauMsiGjJWHkqVyxYv4FaebWj7UbwHbAFvHPqohMAM4tt",
  "key32": "rpQtJqyiS3KA6xJex3sGwCT3pqweLJCwTVts7q8v3vequ4E2MxehfRwjsh2LQnx6r7kakeuCTet4ULtAQiPPtyD",
  "key33": "YYLHmnLbaj2ddUV2imNx4mywK85bejERigzXBTKYcW32WCeXPfE935K9SNEimJDpgr8mchvkHv5uNr48SqFB5BU",
  "key34": "5Tpe9yzzzNpyMQha5RWNzLjNvi46DoaTRdXMrALqxwuvufNogcooNdj9dTEjQCGSBUeXCJ9pZ4bMqcbz1LCjaBQT",
  "key35": "2eXGzqoScK98BTF4kDy5yukh7dgu1GAriDhLHUfV5DjpATU8M7xw61W8PAkyq7eqeRNoFzKCMinnq1guMKqiPGij",
  "key36": "3QJjMoSBMHfsJ49dNEh1UVpqX7ZMPrRibH3L2rTM3n6TGWVZ74QUrqUeq79zma188dEoo3ciatMdzuyeocT2V74V",
  "key37": "5UuSpREtRMXoE6Dtf7eBU7cLDS6c7KQARN4wZ3hPedEBaGvMUCTiaPqUWbSA8RmUXgMLFaqErnRXe2P9jdSW5MDZ",
  "key38": "5dueCcTjq7JqrifpGAoVSeQp2PdnpCLVSSSqAM2JNEaDrqffVpVMfG1PDPN1CiiAeX7gfi5axiHEFq99mb2s7UAd",
  "key39": "3rZMTRNbBDFkmDfChk5DY6PDDkmNN7NBaXP2Y8baAwt8iZB51vocktL7jru4PeED8c19FSC5Qu3JyEnqoA2hB7SL",
  "key40": "3PFn9SbhAntTaWD8cD622BkjD3Xix59Tvw8NeENC6S3d2jAHTijF6RGnrFbhCQ9tB5pucCQs4chqeS4oMCSHBZhZ",
  "key41": "erSGM8zkRVWMS6RMcofi5gPVDVDwV4hxaxPA99hn3rqQTUqFjVpsVcF7hEqpMEqvqtqyGSaNTJmoZTLAmEJTG2F",
  "key42": "4wzsvJtVVT249qowWs9BfWrDo6jk7u2KUDGuBphMQfJV77113axfgeTxoUJhHfpM9YxBYXrhX5vCrnRESfZZzt34",
  "key43": "49VdZRivKLpSFVfjs7ohMnPhviRksooLTgmoE9aeYDq1uBgcQeGpE4LmQ5Kv58vho4o9xYrnsW6AzzSVKuFujSte"
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
