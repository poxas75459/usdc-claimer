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
    "3Y6ycqQQrkfJJwySJXTKSoWJ8q7VY7mWhHXMZeDLTNCYGwYdAtFfNoUHSPCqw4gMkbE7KE9JEhVEun6GMVDxYfC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGGYfJ6HTjqcvfUccGLUAq7FFyBd73vMmNZ6onMT76TZ5Zxz5wzBBBCpyn18JbdmuBJqoVgvveowWhcoAVuAFHg",
  "key1": "5Zfu9YhdCEMnkuC6seeVo1iK2gLP8j166AnxAisyCJNBgjvhh7jv8JttF2ce4AtCjg4mAfsQ2zUMBSxM6ihHY2hn",
  "key2": "2BCigJ9BueWJCQD8sLsPhVpPxXjZq9Jfu2GF8qyU3vEeTYbDyohmoNYAiNWQu3MsLzoWAnwejA6NSehV7ajJeEp3",
  "key3": "GdbVgFzbJhpHiuQ3QpPpskbsj16FmKs1WRwsuvYo8CYk37Nf9y2SJ9ZpZMg7CuRJ14xc5GHBYqfPReK8aT3RRi4",
  "key4": "3PqyJ6P19BMWm54r944LF2pL6d8tqkNKnzhMr3P5bgEtXrnkiyvN9K2zUyaRTp3ebjCAZEfF7RJxZJZ5fhKCZMEP",
  "key5": "3wRo7zVYyuq1LGrzNdC2W5n85QmfrEVBHbyiZWauH3BDPda9RjSXmSF7TiFkroaghcNfayFA4aqwoW7UzmMNd3aa",
  "key6": "2rHGtCfDSg87QXs2u5R8nyieRa6iNBRf9k53D3Htgu5jBMjEtLknVihWRsTptsGLtZBVkU9wdtwZ7CJfcDeadPrf",
  "key7": "3Wh16uLXnnTndVUK7L1isSHpW8tQv2jdzkwNJMuDVuo6MhyAK6VW7GXh6mvPahzky7RLVBEwNu3mVfGwcL3bR2So",
  "key8": "3GmgGTbLmCr8m61KkHssWAR4YJdPruAni9FVHaxBZ1fBnoXBuwFJBHdhWiVzLCGdw9Xdk7mk3rNMRN1dyJnwvnd6",
  "key9": "2kc8rQwi3hDK1jKPfA5jTJn5TACJ5aaVofptA23mH8poq12SwFkw1SG1SF3ctiy8vDYtwV1oT8y1HvaZCzabYtQV",
  "key10": "341x1EbU8rHwTicQrMYnjabRAqeo4mgePXL7PwwGssQAcRSKy6t8rbyTTCgFdsrqyLt64oALG3RZaLo2v88H9arz",
  "key11": "5amr69bHSSXqSkDgisJuqKFkdsHU6Rg9S4jMYBHATwvPMx2keHJqzb9Cw7mXWmH6dDBJ5ny39JfbrixtXn3JRJrF",
  "key12": "wDzCC9kwxWJsSQEn8VBcpjVX85pdS57Yjuo5pmwaXgFFo4paGDtu6M3kp3Aobu6MCS3wJCtT5YAnLqojAWtHCfo",
  "key13": "4saM8As4aG8c5Dzt7DvrEnfMjqEqfMgRVPwbpiRiHCnrHWcRBBYHsfsGxKkA6Ydkh2qc5VTXcnYWhKybWET6k1Rt",
  "key14": "mrnm9gHZEKZKFwz2cnguHLr1z7t76ade22p98rx19638NKFTX4NuGKCmiHsZtREKS6VG3GfNdyyVWkxi5vBSV5o",
  "key15": "525P3JVG2NkZ2uRSTQTrXcJRCHJQ4zk3u1V6RrqyBmvH64bMhzkg3aiNgpM4jgnSBRQjFSVYJtmhhXYQUEBCnbaa",
  "key16": "2hqZi5nbXbYUBoJ9AKwr2duMjEQHoqwBqs3nciiVUSZTrBxqYDAM25ZiQCkGE3RE8AuE5pmf4vjJMiHGN2MQHNM7",
  "key17": "2b4XSzgVQ25iWjuNDAWTUTVrfiJgzc3WBFV6Ei8kNyBJS2u6wtWQzyxEWbzhxF8uNCNm44gVwddKoE1xbJQKL7Wc",
  "key18": "5f9e5f3brPrp9fFNdg8giw6wkMSc8qToPiGaRRHaLzocEZrp4ouKgwLuuWYZfbVThKi351yECAjog7RVTRLisFCM",
  "key19": "3xSiyoJchcqdgUSKrhLnucAXpFRxqik811tDEs2b2B7TCC6oX85dcxNNgDgHEZMdo2Nx36THtDNAmDbCi21EDBuM",
  "key20": "4Dq3YfHu6aMnXkzPSN9pDqjBJCJhqrug5cjYNQ2jfhwsjuEP28MHNwxWZUdC5HZ2F8E5DFKRxsuELxaN9b2aZkKA",
  "key21": "4SQKonVZAKbsmwwcsW3ZwfRJU9qCALJnoeNke4Q18PG4jcU4Q2WHnGvBxed2RQ64ekBNmsBRzdXdjHmto3Uh3TwF",
  "key22": "5vsdgQX7m64ga7GLRuDLorFbdCcRrtG3jBVhcn2hcPPsfjHrMD8k1wsHTykYbbnVihMDq5jP2VPdGHqKm7jbipq2",
  "key23": "26bMhdKbvESC1UL6WWtSmYdBDeF3VFSRPA4MkR3qvSxXwj35gGM39UX8jW3GpaU7LECbX6yQhvwYwhfGhKFJRTwk",
  "key24": "4nf9gUKW4qYEU468CBTwuwiLJVuDvfrqmSceZRePCVU1woZJJeExLLXA1TZ3Nyw6CpoWnCk75NCxyG1ehBD4A1uK",
  "key25": "5o2LtBt5L3Efx6qAswTmFqzhZRRwABYBX89NCBWAkWHhrjQPk9P1AWRAGzJAVnyimLe6JJm9XJqQnbvL6dshihy3",
  "key26": "5ksoqwaupkPrcXTC5Jrqz1TomysHqSibUyvXNFZBJ5gQDAktSEpdfo9NeQ1oBdcSEjfSSt2GBHx1NQmu4rHWysYk",
  "key27": "LcaJUKoUPxepmr9nRMa7DovMfp7VaTC6PiJ4qBbW4vHLNmLy4UA9tZ55kWfYYmMS5VJadE59A9sLJffsCuDVfVE",
  "key28": "5LfMgNLVQKu5dM7GgbJKM3cSr6KjvBg1bdwU6wGuGmgVj8PbxzsjUWbLn2Kt6CaxMWE15BXrvNQAqubZ2Aq8bBXe",
  "key29": "ELi7V2ah97v9wnWGmUiJrYSedKLydag95F9DPTxZd7ZzoaoV9c7eMw68Fs89Ha5Dg1HFcf8KvyDkD7RR2BGyxs2",
  "key30": "4C3RJmLVKqGCK1ckXyCFtkxp2uwsNdwwppM6JzCj3y9HhMMnMXjBBcirLcUmix4N1ZFsg16Sve2AvCL6rS8ERTKT"
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
