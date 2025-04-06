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
    "49GcUn8HngwGWse3vrB3Xg1uykysfqWCRRLsRUbbZHVv31miWT6ry1CbZedSSDcPZaoZs2TJRDQtb4cSLLrRvUR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpHmfRnic6BeD7XELZ58m3Qp3yfKx8BuSkVM8nBRJ3FrcxogAYVC3sEM2vpp5cAaxftui2iHLTHCSo9kyRCfjvU",
  "key1": "xpw63baNCdjiK7cVVr8T2Voaca87dt9YvCGFe4eMZRaDTkaNyJ84srtnk7AoV7aQPhibGczEenZB8tML19itGy3",
  "key2": "2zmvhsigMV3BTe1XMQt6JoXNqccpojVRXce6BsnxZgjtkEuLr2GRjPmtbsTBfk52XzdQM4D2yLTjXDP1pj6U8y9x",
  "key3": "5JNd6BEbSjbRja3Rs3FWsvFy1cPNw3u1EYb4bjb8yRSUq922veXMiecUXbAe42a2wGFZt3mGk1bcdzZTjAfBYjDG",
  "key4": "4dugSj6Se2yjdQ8vQM6UPSkaCnFxxz4MdB9DwUcZz6ZZ9hPTBHx7WBg2aEwTjjbuguoyzSbzdGrQAwtaECPLxDfS",
  "key5": "46F5iuHjxW3HWN1tEzdyDSqJtj1uurJ8SU5gDhXfP9JCRp2MAvm9nu9F5Ch4UKShitVUTmv5FVR8qCyTpBm3USiX",
  "key6": "2krtjYjgegAchcaqsh25MnyC4cVkjYEsj8SURWaUeiBP9YUQ5aHbGxp5PLRKNJH7vpVVSkiyY713ddYPzFbwNu97",
  "key7": "2zUxEXU1auPe4qQEHd8eRuDoVDmVz1DnmT9d834aRnS62FgRobMxtrc4sRiHDKhe7Nswj8LBq1yEX5FYE17YNwq6",
  "key8": "328VB8gecqYvQTHgTh3xWXR4dR8HrjxvDK7SBsSeTJXGzzcCSRMFg642tGw5dhVrAXL6sdJ37AEwgngydKkaHkof",
  "key9": "3g5PkF4ZoLX2YP4x457rwwuFvyGi1hgSF6tXBdegJicYEdnw2pFmA3BwTJ8sw3sqMYqWdFfosP9LMY6V8oByy3nS",
  "key10": "4n768Q6JpZCS6RnQ72d48C2fuZRSZZCMUaCBvxGwm1D9SJrxYcnmp54ArPZ381uGdZ94Deu317oTNUpoobgmbTM9",
  "key11": "214VFzANPSPK7vxqeH7iV4V4yAHGaspEos29iK5Vx6d2qTWktDCseo3ijhMrhswxwW7eNBDZe1xvGPtLRrvu1Y9x",
  "key12": "pdfSP85cpJTptSfaAtoxGfsTRYRgoEsaGhJTCJqonLmQ58BKJ3sSkQRFnzoKTNMZdkLTdov6MyP1u89gQG1M2mq",
  "key13": "46mYXLHeWhJ4jUShSgxRNP83yoasqeWC7uenRU8R75xh5jRZXdeuMXJeFAjXQfEZHMk491CFLcz8AVY7rSApHweD",
  "key14": "5YkCze3tqY6cmJewz4FBtM3DwqpuCa2dPnh4hXqxApe2vFNn9zN7h74FakcApXQiz2Af9fzWgCzJb821WCuYfXtJ",
  "key15": "3Pois3HUu1F2BaYemZGSTbyu3JCyHW8gu2rNMcPDLgwspPfVPx53ZR9eneom3YSk7DQGwp5xeCXBnvAFPZVzE84E",
  "key16": "5D2odMKdBnaY6Ch2edAzmwwEVfDFfhuTm1cRNzPa32ofbrPQiqVRNHQEYKzaxJ444B2r1BDJr1isc1g4CPiYazt1",
  "key17": "3iao73epvEw1MLgAdNssq5m3KKXb46iLfu6JvPyzr1dwj594EMyh5kmz19rXEfyuAChf5SGwSohnJJUbpuZvnsW5",
  "key18": "29kwi2YokSJ61JZVkMxE37snHdCtmx4FFQr7yk1q2ATzYER5HyAv57g5JV8YvSEpcHmheaAfZQWAjFULDnjaBoSH",
  "key19": "2PtwbquZkFkb3piBA2qFa5C2d6CvMYnJuSUWayKeyL3ufcm27CpmxerH9YZqdDXkwvsAFkriQYdbjUS7uchNfxdc",
  "key20": "PByQcFxkp3NF96rUcgunMnMjc8Qns9v32upap8hoTnJc2fopfF22iBxas8Hfi8ou4ioZ3CevAku7ofaHsoBD8j9",
  "key21": "4m4BQhZ6STaefES7wZR4aPJxPzqaygqpHfqhetArqrkSNB8e5nNv9Kq4uvfLEJPJAXkSBcnyBnxiKbk8oUmfgbAs",
  "key22": "4dkQCdueJkzXZTL2N5SaePKwEk1aMb49MpoX14Xvz8yfMyA9Q3GNCMFABdXZkoXkMER44jEzrHfj7TWCTd2EDsqH",
  "key23": "f4GxVAo1xB7mbzxSy99odeSs4d8GimHadTiDtynNyqipRKSh5SL4XRdTZBErUYYrc1kL4EJ1giSXo9BNZMinj8g",
  "key24": "56exmJGUXEq1oY1zc5vCPVBo6ZQCy23tV1PypjsYpCG8ce7AeWNpXbsWswCYhNVC49kDuVKYahB6ErRtLrQ6U2PU",
  "key25": "4gj3VgnjGHqzWgm2i9t4jHesQMat5uFRgswLXT76ZrBXpUaijSk5Hu31EouLGxtuNRc7TMUg1EZJuEKairv8CmzL",
  "key26": "2UyNuTEQ3rkn3REj2WSrRQSsbrRkTSDuKsfHqRRGQiWNPgaBqpdwUiFNnbZjX8xDBFzp8k6vqNfui87gxEAE7E5W",
  "key27": "516ZkcKrc36hZQnvuyQoB4Kki61twYFyFqTdANcFjdevhAmxv67KhfcWvJ9Xc7ZGLxs5nGs2hvVnXCDLEgsn9ej8",
  "key28": "5hht8uLCQak5JJDDjrajx2M9TDvDa8DuduJeczQs5hQe7ryECPdaV8AcUfAYkZewwq5uk6otQwPXzZFM6NJmL1UU",
  "key29": "2N3wP1VhzDwSchDWRkx3xyZA6e3hzXadrRfgaWVCPKwZdUvJE8gdyDZdAXGUzchvK2g43GWJhFArRdbMg5HRhBVd",
  "key30": "2yHPW5396Bx1gFhse2C3ARJUpiaqnPttCYhEhxxx2mjCjdawUz8zmcrRSnC3AuEmXUZH9dhvbvK99TFUhGLq2dre",
  "key31": "5RixPkVB8nKV9Ko1EuqqRWYNo8MLeNtVgD7N67suMpSztWBytFKiGFbRpSXkzttBvZ5sp6b2qfPjmCmpRLJZXR1R",
  "key32": "492AMiiygvzwt2nG6RntGbnGD6pb4Ljqh3bxRYvPCg6pPyf1aP4THXmWYdCqqMqmBtoEiYuoZqe27Ji4SXRFQNWJ",
  "key33": "4L7XUw3youPouGyyUtE54oAgJSsFGCevui29A7T7RFGQGfi8N7E7eQDMEceca8oPtPJpca7xpmMi7gbAdK1P2W7u",
  "key34": "1LkQLHyKAuBzXGsDD1x3ubHmgzR9GXWnkH5yGPHvMVAUfvBtBfxQegjKg47TkXDqh7A2zyR953dVAdPXd7yAdjv",
  "key35": "5kAUuHkn53a87PtNZbCXKpJL6mwzQdviihQcYW2UCSNDiNGRVGKhPgsegL2iiJCgWExnaufdE3NZFCm878nijH12",
  "key36": "xbwZDyG7wfobDQ8XEPTPFsYGjmCvv8Yjoz5fnp3eN5MLbAeKGqUcJ7k29JqvqYVDW6hf1n4KjoX8pn2dsE2xACS",
  "key37": "3BLzUg1jaMRkgUcWDFRUDPC89HZQkKDta646mGpGSsWRqtF4XWU4nHM7P465EvCKYNQeMwHYUFSHe7CXrpuWEjZm",
  "key38": "3o22v3dAc2s31MYboUm1joXzMstZoGh6jJrLMnMr5ht3GrGkd4ZrPntaVPfjps4eN27KhWkbY73kfT8C9KqxY1qQ",
  "key39": "5giZPZ2FURHfXXoJj62jNeLHqn9tth66D1ZAfW5Nz7NS6UnqHsCZmAoCZvbKRV3UuWFviptf2tThnpx1tS6rqx88",
  "key40": "5rkAH3LcSC684EKKrKGNr5WcTJoHAYrfKVAyHUShUmho3Y8t6QWF9uVXobDVJB8xAmUspZ3fW3itAvoQFhXZu9zp"
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
