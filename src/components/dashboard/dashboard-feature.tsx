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
    "641y9hneLWUvfv8Du6p6wqRzYBj6EEsRZGVUgcdbJXu3PgDarTXdC77zBAgygba4t2jqzEkpc3oy2JLBkU6333EK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1vP4SBB94bfKBTivHtkeXsXGd9ExEC9R9PgicNd2hscQKH5jsKYR7BunXE2JRzLAxXQFGvWYUs42AKhvvnwkrL",
  "key1": "3ReVAwzUgM8QgE1aNB7mmrsTybDH4vkwZ628bspA3WyBvWctpP49kWvFP38s47UtLkRU1rcbBPqv7ADQxDDTBjZX",
  "key2": "M53bBr55CcaNmy9MhHPgTEE35GZtgqLFeMAohAM4bL1DtENdCAaFVitZ7CaeBo4yDu9z5u1MFCUUsghBpX9W41T",
  "key3": "38pJP4BPxvq7FsZUhMcfFTwoubk6i6aSbgWV4YqJjwpcGvwPomWZSxTtMAsgoaPfNKjnWgZDuydZuHT9rfe42eYF",
  "key4": "4xxBGNbidFVCqJTv8TKyfqPuFG1UnWeYCdtdnZFps2Eu22Go7WNNNgmoTnKUdDaepeiFYVun8Kado4MESSPN4nmV",
  "key5": "2XNQXPYvabVkt87MdiKeoMszdVQzu9Sfmj5JddtFcTLKjKkVki7fSiX9qRgEgun5EbPzoqAWniGmioNpVXxtqj22",
  "key6": "3sqrq6Q7BzgU3qUBGoUiNEwgXbaQ2dyja51cBzL1p8ZdbVtLLyX7BdEeMd9FbTvRzpD8fqUteUfx8vWFUfacjnTR",
  "key7": "4AVV14pknv6LsDP3UL1DnRseq2S8WUCjPi8XW8t9PQnnXwBFafbpjr6tXd55z33aGPoLZodbg75GYUSrBjdY8UYY",
  "key8": "5VssYd3ji2buVj8GNPzUmfd1CLFgZ7dMwMuB9bRokkG5F6zWHhUtskZPJXCViTAYT6PK6QaoKcPEqDKmfESzifZa",
  "key9": "4HnXRp4Mgnf936M8E8WC5knK3ygskiLdBhXcALxNqpMbqMPjnL4dgWvH33WsWqwyp6PC7VCebnPa4QkfZ5Y1d49x",
  "key10": "5zrSVDssyAU59D6QmgBpQSdSeMWXLHd5iBNcgP2dRSMWBddytpr9Z6sNhYGNSYPdvhTvp16ThmRB4AHDm6LRScBx",
  "key11": "2hPVS1HXVk4zNuDwjiGZTsBDC8yaWDptbWa8oytuzdA8KCGwTdxFUBB2PfJPKidSgQEUxRB5AC85xrwspouCkTeB",
  "key12": "QRWMYpBvXB5mEYLhXWtczUWCKGeGhggBwT7romj8sMKyQGacUT1MQQFg2pX7mmr4bTXsECFWbVZFzPLBVnUFbbu",
  "key13": "5QEetCLZ9TNBna6twx5eCYBwU2XbEAFAXXL3VUdW7kaSX8MnWviahrywyh8qVuhoABXfTWyAyDqZkvwasnBVFPmi",
  "key14": "5PJNVHQnEHMbdz9KwKAdprmrdSsRW5ZYVQ1AwsXyj639SRJfeHe74PJk8UeZzGY4xYqt1eu9zQj2ofG4YAbPNbJX",
  "key15": "qixcXL6yhfPMBEEsurNvkiSzb5ahgRzTrqVvXqZyX3TFLpJF9uf1M6NtwDjQXggdJBeQa5pGp4brqd2hAFq4qDK",
  "key16": "GwpqCcvPYmPN3iupyUUF8CZonpfvAnnx9svgMTt4qAvzVWWeULhBXWQ6McGmmTzTeda1SUzYHxcGmoq3YouTDc2",
  "key17": "35UH3Ex3rCC4SDQ7u3JieSiwvLMkNYBPcptYAEaWGbem2f4JgouNWkmyPnKePXwbwTPLMRnFjcthC6ojHhu2TtXG",
  "key18": "CV7LiVaprboGBt1QaQ6G5VeE9PMkG6JHYFwSdJ5tngGbvBoHRXQC4mExfSKkGzWa45hvdV4cCCU7DZiyzdfb8Uy",
  "key19": "3T2T9syiXEyviMC7sdXyMrqq2AhX5QWX7FusHktiEgWZEq2gcMVjypDHmoZD5RxBokeoq94mLfuz4W6g1GnPtXDj",
  "key20": "4CshvgCA2qiFTutFYtktr3ijiisiXHSsCUa52QuxvthWx1Bp9PDBKyCcuqmrmuw9UPQFjDHb4wRN5M9ymUDjLEPu",
  "key21": "2vCZ8bR1qR5XFHUEM6QgRyMYoHHxXQW4gCa2s9gVmF6D7RFxN28DfTr1CTJQeda7Zq82hdZuW5XAWWn9ztYKnCMp",
  "key22": "2VfNyN2uDTSEmqUTSqyWGqfMPaEzMxBuryBfDsiv5Jv2oXzLaGeHC8M3VpCjDU4PSfrJaPC4tv6S2uh5HdqcxGT9",
  "key23": "5cvKMUsvt6CsXJ3Wg5Dd3X43HtGpHiUThdAdbYCZhMTvyQpghTok1775vqmqqUPtMWmvkZF7J9Rab67ebRCPaD8N",
  "key24": "WsZE578VD2WKgUQ7VXjBbv6a8YR4Q4RQAacH8LAN1mt9oQraTipDysPRQXYEDGd554qNGPt1CF98ZypkSs943Vs",
  "key25": "2AZevhZUA9MFpnhGrWkJhitSm1QUKPykudLpWi6QsfMnxHh8ViuF9WjynL6dwAZjNzpKbG4WynjsQaiooQGtW5EQ",
  "key26": "3V81qu2EzF6EKWugGBWrGvsXDgZHFpcGymtSkZ1QCL65UBsXzCjiCPfNSTywk4P4dxYA2Kd6HAyqyvWEzpfAERNz",
  "key27": "4XEsRgHJxsfVhJFyApiYBXPAnoQNNGJTBrhFn29Y1sp37untEMB8YSG5gBJKLqicHiN7Y2jbwMPyQ471XEy7f8FY",
  "key28": "5eTowYGhDrgLFeX6ooyskZe9xucnXHsayhvbUVeCgevuhM6aCipgZguNB6NBbEceAq7DSR6ZodjRox8hHqyEThuD",
  "key29": "3vev1n4dAC5LMXU81WXEjEkv5ezGRzgoUnwF8sHpJ9ARR9yxFXvhuvrV7HBeqRsWsSFdKQSsXdjQT1uf2P6vUdMR",
  "key30": "9EvPWwSfLu1Bn2Nv9HeRRkDRB3Riwcz8KaFHmznLtXSzaDV95owS7SNpkLNqzujRm2BKy9BiF6x9r1rWPuWkGAy"
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
