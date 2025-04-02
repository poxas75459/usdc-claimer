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
    "5yu8Ej3SoLzo8HbuWuVQiY5MrS1GgPUDD1rJ2wTg5krWT65v5xFUMaNPycaYswnxCP831pVDt9tLdMDX2G42MLYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTWNC2vFk8LXpCzWCndvPiv1jw9NmnNDaitwFNVnKYF4Nq1EWMGwjhoH8Jh58vRcqt92ajbeeusqzgPhCC517B4",
  "key1": "2qE3Rg7hBKS2sZMDDySaP6qwV221KSefZX8pu4WYAf9VE7u78qiJjRRWP2RfcoyQ6vcxYTRBzohF7PXpEdEZ9Y7E",
  "key2": "43muALcPwTQLKvzUKPqFqYLPWAXPA7FZNysznXtHf8vSEdu7Hvsxbbdof5Djq5dvx7ttxhg6FtjTKRhjdEdJrpEw",
  "key3": "5qKiwAvGswktVxdX7WDFecTGJQ2aSevrjscWqTnoJxBRTVtbuPRUdpmvx5yeWtbx2gSs8iQKFiM3vDzn9Rx7FiVV",
  "key4": "37eETMHD5nfyFMW34TM3dRShFwUx7kwLkzjx5QnfKYyZsNKQcUejvzx6jYVtBgEocwYvi7RZHHFSsAybhkVPEVUb",
  "key5": "27FYa9mbu3HXg4c7XhDBpiR4FCjMv1RFeq37bw2pcPtQ9G8gSM6gxfdna21rzkCh9Dy9Bfh8sLdpkd2xCBxkNfpz",
  "key6": "5njocNeY2WvjFU8sejmLg9LYiGCJLuvV3aScgLxgymsLRWJX2oSRepm8dMjCzsko31zASYdksASanzD1aZCEJxkK",
  "key7": "2GEUYpSbiWzdPfyH2rKTW2xLq24CNZnxi5fq2yfoRMcdqZx6Hn6oBWBR22rk2wiSwjR4ofQUGC218sWt9vpA6vwA",
  "key8": "2Z2wX2SpwV4jwS9U8KBuv1S2Mx3bPekcM7vHM8YHeYfb2AiqS2dcH2QkWiJHCZwENP7qo4LrwN1qzLDMtg7W23hR",
  "key9": "37nHHDb9wpUmybMfoSDk5VtTFDeRszR75uhqP7xDkM8gv5SrfEuxPDgsLMRSAj9qPX291UhwAXouwMWJ1UJrNfqS",
  "key10": "66jvXaX32gAERNBBG6BVJAxCqiZUP7buCG9ZyTuEpGZ6JdgewVZzLz5m7Bjfww8R43kaRZ5KbhZ2xhgYXxqbe6D7",
  "key11": "5fyv8R1LB5nd3uTTrRvyGxrBatdz9s8MonG4EjvojGEh7GsMyYjfj1FrzyVM1giF7hUkb3nY6pDKVeTjda1z4cKe",
  "key12": "35A5dRvPvjxyDuJK1fanogBbuNfUftxXj9M7dhiMhix57FWvJvrHLmXZCX54EMAHk916F15CT3QSny9pKFd5BVau",
  "key13": "42iDm7k78dLqjr8iu44wcSxU5L74CFnNQTyNvN74uPeU9smvCFkRWKNdQNXkjZyu9PwSmxVkky1sy5z6aXPuCgJN",
  "key14": "3gvNkscJYiECpahtjXpXoma5cvXbCo49rBfpPjqFcVDPnkMqEkc5bdVgZibdj2n4JT5XNiTfUB1RkryAoXKucfi8",
  "key15": "5c4soPBCzdtf54XQ42WU6BQnJbp72wzxqyry1w6S44bEgNFFCphDyUusdRqrnkaW61CWkZS2hc3hpTmQXi7ZBtCU",
  "key16": "371smLaJjEDef9fK4XAE4zJmRMjsvZY4JveQzn6axgePRTggZcYUKMiDzmhqhEJ4tWP4RarnzzQBHtyAqsRLXdnN",
  "key17": "5kENzPTk4ZZpuDVuC9XKeGMFp6VusW94vz7bfCCa2RGVjBR1YGhKq9wWV9FbvFks3y1ePP3JpPvSEuKWuBrVipSK",
  "key18": "4763iEcarhp7psm2diEY8mgtHC1H86hQVwDBgFNoQ9SeSK7Qu67ktXjutiEPFdKYWWrCJraxcRfNN2aExa8eJ5yb",
  "key19": "3ecxT6VEBfQvSAivVukUZ4EYdfuVFciEurKsTc9FRgoB2kie4jcy2Fx2i8dxjpC9gHBvDAYMagYiyeKnzN3cRqfa",
  "key20": "3LaNVQC2dKhLi4bnkgeBcgybJxXgUQakhdDZpSCTD2CyYPD6TNzt9d3PntXw8EHkyRUcSemPFwUgz4FuhL5rNoWT",
  "key21": "2Asnv3BTzwFH2PmHo5FLFjaCpxJtnupD7QvvnEqij9NLRXsSs8E2cEEWWb4jGEwXknv9UEzqNCrvSiWnWSrNEjjF",
  "key22": "5PdCWVDwukxbK3Drem5REZrf1mRnWY4ge3FY6YfsszpVsAWvydjBo3ykvPJ8qk2y7XcHmP6HTcu9qN3du1S6Z9Nh",
  "key23": "Do7p7puTi4wNkbALM3LjgKNMgaSykm8KdgiFZ9p3tfzfZnVoFN7HtBSNXW41WeMiWzW5qDz3RfCDFzucKGAEN9T",
  "key24": "2auLFqXqt8NY9ZP33j7Hy9mB2N4jZcPww3gZ2b1rcyJv2MJVvRnoFxxN53j3sjaFf4oNPCF3tTiha5Xc4f6tB2FV",
  "key25": "4iuHhJUizgEiUhnm1zgBKnNrCbXcYNieSpjSCSeEnfrDzWKc1tnM6rEdHYSvNRSMfXNBqQ5cpHkrRQfKz1uXzHNe",
  "key26": "3v6L6aDwjQbenxgUKMh21xVCfpmYwyrAJfxnedmPDd9oFfSjaiZL1u2VNYgEgEm8BmJaJVLEGZzNvzPiLRBUv5FR",
  "key27": "321FQCfBbcit6GaPmqyt1FDUPDvesEpxQoka4bqVr64bTcqs1B8MJw3mJEFmNWVtuGQymo7yiBkrzWXVygZuuhDx",
  "key28": "2yDTa5NPRL5m6RVRH1fULpyEMTa6m5Bd8B5PNQfyKmbpWGN2DkrTEeY2cVoPtkyRHgwQ9EG7YuU2effd9Ha4PfJW",
  "key29": "2UD93gWGiGYgVdFm7r3AB1uabKuC8YejpnXhaqdjKceA2uQAiBFuHsgV2NkQpyZ4zA2ygVqhysMypHX9N9asQJmu",
  "key30": "3Duq7mqCv8nDveypSE4aF33LZK4c25Zk8emnYauQTKohpvhMrm7Afv9jBc86yDvvxy9pod8NwVkREoNHXEcm8iHL",
  "key31": "5xTjUGc72wCk4ThTq44bWd5hCKcTBD95uzEdvpijmPasY1o3cU7EGpJ4nZziaeVDdAMLw9JHU4oGrGkCBDhFqB47",
  "key32": "5i3hhesvHKELoLGdoaWaEePMqYZRpe7Gs3FcZAkSyG1vt11KUKiGUTSTEGDcWfLTHcNkR2mqbsbA5VaxegKbdt34",
  "key33": "x5CtE8nda73U61KbYu4prvjL1HeQsU3ZZaujsu8XnSQ2AL3XQBuw95Ssdu76kUAmwtKV8dDNcjDUzyhDQfzdVdK",
  "key34": "4aXCSnsqda7NnXymZXWcUQsNPZB1GMiXFfFpajt3kXuhr8JDDGQzXpWqudrdqxa6pmfo84MgGZWd9ADVVPEFfYLe",
  "key35": "5arZfUEPDQMxnjwgqoURbKRYJYeHEt3EF1zCbLERSoFbzddKeJd8ayWXdMpC74s29CyvbtJmcw56ibbaWsF9taRT",
  "key36": "6dMCP4osy4BHS82bfADXu2bNqVug9ttqEFnFbCEQ92vZHFKkjMh2heJE7YpFa93x6CvTeN37L4CSKvY5J1v58W9",
  "key37": "2D35RnMkGZ5bC5GtEZenKbeySuCYXZ416AzH8KiZg8aomazNk3nVDFuYG1W23rcWBqSjyyu8ShJfHrxh8JbfRPrw",
  "key38": "2MHKiYVZdo61rHvT9bVtANKJgR8DiHMw4UaK1tyTJgVuNE1KAet9TAGfo2WYawLc6sfXxQRpygc8gtFXo2iSHRvj",
  "key39": "3XvGVZg9eVRmbLJU6sTVgHzqrz3gN5z4WxrjrrWcB38teg61kurTQmtG4wTcenBKUvTkeZqtaoxbNnbs8H52zpZP",
  "key40": "3DngfjytWbiBGHiKD3B8mS2MbZUtaGiCup6GRnnuiDouGhSkWnuD83kgiN83vcn8zk7rikYsdx6CKYwHnN1fwxNh",
  "key41": "3H57CkxHjh2vn5fU6kjgdAyS5NwD6DWwebqXLMEpmWwxTKcFbvNFEgbQg2YtqGWyrhezQeh9SRxMyN7AixwKQjNM",
  "key42": "5RXhmQtNJuMN8qSwWZKXE62bDrMkFADxg2T7Acqgme67LN76bcKdmWzviHVWoqginCPvmCVwfTtjybxDdfBfT5a7",
  "key43": "5TJXjNa7Upi5LdAn5SfnJa8Vnz16rxWfHwaSKrWRYfsWAyRfzWoNzhPhmB5iHnq52uCiGjkuEybWVtFTFLeb9Gda"
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
