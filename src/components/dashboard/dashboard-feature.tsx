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
    "5Wp73ZZpA8A6nNapW2neXrdrguCer3hEhfyaquPJGp7aWooY4pgmqHbBCHfh6NPPXwc2q1BrSoPku6zb9ubjyNd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LXcMndD7bPfXNJBXgenzYzbNE6kEvMMu4QBFWj5M3Kkp3vmZrLfiJehf3AXi256Ds3Mu2JnFUaCyNGoSJHxE1B",
  "key1": "65UxxWZUJSvqff6AJ9MymekVxpMyfR9j4AVyAuQTrDBLSK5WopdnPwhDRNBFRYqfiRFJzwfkXVFWqenPTJ7tUdNa",
  "key2": "3L81aGPYH5x1WGnZiLTCBNHRgXAASWTMJqyWwqwZHDr55FWAdb9s9jpk2gK6a9pP1uvanJYHHFB6qWC82TKuV2xi",
  "key3": "u3raSoKfH7UVHWbtH5nzzr8t1fbfpZqNMEFfaDPYe7RYHKwbC57TTmnBaHUuHegjQ2gL6wX8Gsz83oNTtXMyhRH",
  "key4": "2m8Nei8LU87BMLvbxV1mvoFWTejAEieAyfG33LuVAmLRJtRrJ3U1SmGYZai47mFzv6isYMUx31xFtzTtymaK5CFJ",
  "key5": "1nKNqLjo9beo58SrVrVbDnDsZ9PG3XudfFMRyM8gLKDc6aTMDauv7163gZXMxWC8ZtdcxuuD7PeMukSdjEhhp9j",
  "key6": "39BkWqskRgxSEENCYtFMDSFymZuaGzuNLMfaZf8frATTjiYRbK5C3z3tabzMUW1gcPTbpKai85YfnZXohvSJVcDN",
  "key7": "5ufw3KjF7nvBQjnWc53ZAs5kESYjbxZcjQJWsX9htSfoEsX9CGNo1Xf8qykKoeg35chi58FNYko3LoHX9NU5C6YV",
  "key8": "5Q9vSTPMQfXn18b2t8bmMuYHQ5of73AMp84woRwi8AZoAMfLkb7wdnvPNvirLoiS2r4A5mDdFUDrCYD91Z2U3X2T",
  "key9": "41iJ8pLiMFPKqFECagYhxGHGuTprHeRPGHQjDQpZ3PJTbUDCbHNPJyR4NZuxmvPgqTdLXUSs6U8tL8jCVQBJXoW5",
  "key10": "3vXACaL9Tw24Te9mP7Pao4erXLfRSg2J7ZZhD9FLHYyL8a6i7wdbjAt3oDLUVMuuX7FduneA3w7qJGGcuVbRERi6",
  "key11": "3r4w2Hh1oTLCaXDXiaC7ygwWpza4ZLQUZjUiC9zTgBtEB1oyAdxGBbNQvXAMfQb7rY8vo9uNy24drQLVvBABWeAA",
  "key12": "4TDnffXzFv7YowrXt4eWmQApeDBjyuWgd5ZzvDfWvGLrrykSkmauGHv56mizfBEDeLrkWKWKznGqz6CSQ9hi11M2",
  "key13": "5puBTinJceJNPFjWAQnsgKvC7w6czBQPgD3XLE5xUhrY4RfnX6tA7XYYFxcveWLhmHtxwSaidoyqwfRCdedViZKe",
  "key14": "5Z2j5BnySQpgMfGi7rsmASGzbVTBZnskjwYAoD7cUapGQkHWw6m9Vb5RVTdKvz2xtdYUxR36A6A7kjArGtCRkrbv",
  "key15": "3hUa9CoAr9wDej3YFKgCf1rMKwMVYuh85ARfrNdPQTuRUhcttQ6gTSojjHDxrph1o4ApSfeFwa4KP93B5UEihAcD",
  "key16": "28bAto25GJHd1MpbXU5zYxo8CxMTZLbUPhyinFZhc986rUhNz1hMFnWS1K9gJVnWex4BhYeoUxxZuShovxxsRJwp",
  "key17": "WY1bHLXEysbT4HU5EnFAmKTfQ33RpLEYSbk8GcyPdsCvr4xgReMruhpGm9p2bEE3kt21tngKCpbfYxFzuTEYDtL",
  "key18": "2pPiatfAmxSUW4L6ZA5nrSsmNjMRZKJ1otdC6LzS7eMFVDRaGmptxtt9PVEsq8q2fXgPcJVt26j8dnajFsLxR4r1",
  "key19": "bBRB9dXUSKL3M5nP97rzRiC1cdiFXdzPG1kccYWeJ1fTHeY5Yh8wJYTciqtTSWbBEWcMsH3vWtWppCUAbqPejmQ",
  "key20": "2iAMGXjNUvT6AfJZVmPCQxyCMDUTDJRSfqvj4p7PYXD4s5s4tcLLD1tvpxBzEHWAncASMJ9tgkWEZNMzP8nKmaj2",
  "key21": "4sVhSboCjb4fJjNNipxF3TGHmBqAU2KGZV8sdUh2J4qykjv4JPSz8sFJY8nJNH2PaheLMctPuHpNJQuMfLGMxrpQ",
  "key22": "aAtTR42R3ShPhMhCgwRqqwjAXQqiNz2FDgfXteEt5iLdEoDjpDVpsyCx2CbJB1f7rvT2QMaLMQieSzfX35eVVXz",
  "key23": "4DSJGan1TcWdfDrW4pdGUgxf6KWnkg8T3YrB9JdyGVwZ7Gav66gCbTWc3XkshDJnJyKnkEvBym1tovZXiC83v8LK",
  "key24": "383eWuKTtJ5hSyTZXiA5wPwhpj71qMYMDenLenrjRSdtcykyh3cZtYNJx754gWp2XZtwdbysdnwGAwHj5RHJts1n",
  "key25": "jPF13rSNFfaLSscakgN7X63rMsj5qPDhLHdmVWQqfG5fMy651uwTDKM3Ui76zctSTot4h6xUUmqmaw6AQtz8nnx",
  "key26": "2Qhhiyn614y8unyic4z6ywNSgUo7d9uUtNNnpumYLpcJEy7y4AXBTnQ79kZfVhJyHfkZxk8XjXkE3p95pfk6eF5Z",
  "key27": "5LZyKTmFTotShmMjjirBeoCPjNFqKABJXyXk9kijEsHoJRr2YEEeRPR7gpQTjfFhAGWwoifauzp2344nU6wFhiGp",
  "key28": "5uZwQA8kHYYW3N88amBYQQKocXrd9oWuCavBUKyYcmDqucjfDCbSsvr3wRu2ffYwr83NxbpoMQinV8irUBUDEop8",
  "key29": "58KsPU4L3bEJvdp5KffWHS2CfM5BLz51N6b3UQE6dmoBtD2qp1EZzHevTYU9hBEuFCerQug5VtPrgZZtAyC8Gmor",
  "key30": "4U1gRw8Mzzu7TMcqfpBjnivLb89mfzu9mQewscb8kQn7aKFXNeswE7Yg2gaW9ABzUDKK4mHVzoE3JLrKmSvZrEfE",
  "key31": "5Gu3k2L8txhj4mVjU7TQ3CnFsCWjJgjjYcdJoT6yxAy56zdfFjnATP2mjusMypYFkTmakCK4C2WShLFL2ZtdpZHE",
  "key32": "5G6CWur2LfqBjTeeESUWbCLnR244bpSFwTTkrCQGPPMSCGfQCLeGutxfdxynMCTHNEmpXbySe6AH2MaRREczkMdz",
  "key33": "9Hngt1fnYL2RJNfzwDB1n1ecPRgMeXL73h6X9Z3pCLDfxUhS7m99eCxh7XYM3NMESjJYT1GcYdproj7nJrWeYVX",
  "key34": "4NYBY4ZiXYM1uC2hJT6DR3S34doeteyxf6sCZTKbbvoVx6qQvVK8Hypcq4YQR6LA3D87cjXgw4DaQbCPg9xRyk6f",
  "key35": "5DBVtLBzguEyPb3JqMNt2B2m7ZG8BRFNwAExKTcQYTgEWyeFxFUbVZBcFXhUmhEL8Zmhjg2YxJSqdXqB2DbxeZzU",
  "key36": "5ykjVP1DuELGoUPE6gDCAmDVJa9ZMSitJtJU5pYSoX1TNLjMbW4YfMScdvDS8t1nyjfQa2BFnu1svJmGmATWzVu",
  "key37": "4dKwA1U273EApVUGN2h2hXio7RDHa7nVKCHw2ZDpm3NSMRKiZMYjjGrQUuxLmzwHxAzyixVxoE2bXWCUiUSVzUzS",
  "key38": "2AuDuRU3RM8cTQ7YtVpYp3shrTZEWjVuK6m7FJMDnFazy7aJQLah36MNw3nGDddqKzwEuhuCafgJnHsVZC8AqUvG",
  "key39": "3drkBMSeJxVnXYNcfLJsFvCkbJbqC9eaZd5453v4tJ7mxf354q21hBPMRXdRrFMdFjprvrQ3b4JH9U11YSAwX2Y6",
  "key40": "spSq2Y1MS219Wxwcmx9LfzCvvfqV9UALPrBCG8zwNpcFJ4K5HCt9dxAc1516hE5rcC2vYsgudZgWJGWus6NMCLd",
  "key41": "2bAEMjGxTetheD3L26k7y4Xt4TNw5zDx2To9eF6x6s3jzNwuc9QDZ7nVmGtE2RhWXV8Ze2TfvtAvqUvjnguusCv3",
  "key42": "4ew8jL2LFk94LdNCbwwv1LEKaTG18zwvVUj1HgNRdBChkA55NLVG1v11AzEXGd77uTdTEYFS1j19TZzbSAcn5rLz",
  "key43": "2Gi78oTf6xWnrDtQ7BNu7jb3Dwkb2atCD8nUxVVhzUbU5zSgeYt86kMivGSzNwz5kzmZjn3UR5aQ31gAZuFW9UTD",
  "key44": "oq2DjnaJq7QKcNUamR8GNZBxJHyLeV2o8Zgr17VVTfKMLs9KmnpZtap1astHXn2sUwGNGEVAPi7ZtDWPJT3jBFj",
  "key45": "2ryrqmS7oJN3kVXaP4rX63qYhaNuadCYj2f2vNAw2348CXspe7oqBNywN4ebBBSPCySnDRLQo56fHmQqNDaWiHPT",
  "key46": "2A63yeBHVdygMkc1eqAFZo3NKJ6cYvwJbDcJy3KN6dANRy9XLmv5DnEpmGCoEp8ecRuVdarL6En7drZTg5gU7frv",
  "key47": "2ALYPVqGYinqSpKJA4yizDdsbiHG9Mh6SfsgrmUfo1XYng6xnoBGbs28LMjqJZX8jQufDRC47vgPToJBUMrwQerx",
  "key48": "5q6H3ihEUqV1gDZC8U5ZEbXkJewAgdjozC3Pn5dngysc4wH6TYvFQXzTXJHarvFEgzrRzVUkGMPMxTaC5Mu8q63f",
  "key49": "4oqkBVzsqB91YvQA7P7kV1kjyhFwVN7R9MQCM97ScUVnZzSLeBBL855uxg1Ehs1p9gVpC569reuX6m4ie59N46RG"
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
