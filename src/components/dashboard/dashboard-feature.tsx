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
    "4De8jLeCDbBHupnmhL6SuJf2iLsBgKk3nGmYYzAXpt1v3gc19zxJRdNqYvEcscRvQgndorfJT7WKq4JifyAe5CHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWJz7QTCkqVgU331ByUXza8gLFBrVdSovr9quZeXCZxHh4brZoFA9uwKid4LB8n9s4XC22MR9qZge6ynMqaHZCS",
  "key1": "42FestH73nB5Q8t7SXAamkwzJc6RcT667QA4qMYNLFVVXpXo13XMQVrwjimpNKuNyWWTprJTthBLDjTUj1vE2L1k",
  "key2": "4xfeatSeNeG8ZSrag88DdbPDDpDLgwH3RhvHWprVR84ANcVHqwbLLp7msXgabYN1yRHJ1Rw2JFCCWYvuAmEgmJAM",
  "key3": "Sn5MPBAr5sWvhC3HMvT3UCQCnP7bCpvDpNE3gzRd9RBAuRBS3eQZk4wpW1HBdvmiw2x9iRy8HMa1tHqZKk65FKM",
  "key4": "5gVQXF7PYEtStqXGg4NehFwqY6hGYucJabxbkrZE5FNdaSUCfPK9UFsu6qABCypk4PtyyWuQu5xEKjkJpjYFEbMg",
  "key5": "5Sd7jBgZQuyZxfJkjaA49iH1MCNw3pFKxJqYwbRqA9aa9Yie9egZshU8UxMWqCwenwfyRzS6JKByNNVSXiBsiQq9",
  "key6": "2rqmuZTqaJTz149LJwAKjMUMzQ77xjuDBK1N3daeLQ53qezkRa1MsVfjDBLKRAixmchzcYXhZmsELVMJimFVnmvB",
  "key7": "2XBibAtmHVHqmdpGyPX4V9CPYLKFk5LgqvZd1ca1jmkEQkrz6sjCSUJFYyTA54bMFkncnJJwDrFF5AQPymE3UL9W",
  "key8": "14CARv2ZRHgaXDuePaZ9zyLUwnhxR35mHWPk1qN8ARwvJwDGhALG3AM7Ej8X58tahEyxbGaUmjafH6xUBpaEqX8",
  "key9": "47x16NSmXmnqs25CmBXfmGTqDYXsubA8Zo7UjCGFKm3pGhEPnyB4f1XBQJkTvbb7unjNup1CJymwwUyWigmkthGF",
  "key10": "26wYx1ybZfk6fbHEwf8zkrXU5ZeYtzTmGzEwH41C7WTiguMVecp28HvXDVjnWzTAYCvpzdnH95VAZ33wD7rvviMG",
  "key11": "2Bq3kFZonpvunzf7HFPXi3MVKwYPgqLPozUxH2Pq37NpjYtyQ1onfHYTopChMBqUQ3bmmy5nv647PjgbugmidFxA",
  "key12": "3eF2iRLfzssscJsfcqPax2PVCPzS6ANrpY465Y4DKCpJZWGaJN3pqhLn67C7eVUDumxDWq9DWNxH2QE5AfAdNENy",
  "key13": "kqanXugQ9MyYpWik3iVR6qRyZtU9CjDuQm6grHECXHfQZZKMDACPqLTdZo3bp4ui1k7P4mjfuhVpyvrcGjeop2H",
  "key14": "4MfajaNaE6Fya9HmqCXXaH9RZQGti2zfb4hY4dAN8rRyUMmv7GEkoDGSvTNTCntHTwMStWtPPznwdhejhYF1Srcx",
  "key15": "bz26GbiyArimNiELC5Kfv9qRkMsDktz4Tif9neAvtbmbxaq4DgWvsVnwaJDNvVRXMbGtxdRV8JcnQD6L7PtF5Br",
  "key16": "5Gy3FyNSi6FFh7dGre9ZV7pUVBNTShxzYqEWw2udtZCv3wdW8KNnSh9LnYEGKTeZCzRr7KNKiLtHx1wkHtPhMJJn",
  "key17": "2dtRSZ4AaU24JtLeo4RztYMmnxCo9GTHs51SFrfWiCUdTMc63v5CkBedreoxpfzEVoiA5MAkZ9MAmivTXziQVy52",
  "key18": "2p6CmcEesaT4gugQpHL1H75m8bpSeuyBBnU6BpRKKk2dK2hb9ymdcfqk6W2Jnb3MZmAsmN7V9xrhy3MLvZbTBBfx",
  "key19": "3miC2i911XCNwBjrBCSaD7ocRsqi8RsrG2JCUativ47LYhRJMX1SCabRurMFxc9eQeLcFPABE4rTzpxAJKozRu5T",
  "key20": "5DA4m3H54YVS3f5Z7UX2Ghah4iaawa5jhu5KuN2m8eFpHY5EDaYDtXVgUPqKqSn4sYj3LM3gmconjdq72FyTVhUF",
  "key21": "3mU7sqzMNNxGz5hKSSUMbQ96yViwdSssmGoSFk5QMpWUGcb3bBj1kr9HQq8FmH3XD2qQpuoGFhCzvfok3rCtYcia",
  "key22": "gF2dZujUKHAzG9ZBn2a9C6XdQmtVZHJQZUnfH6dxJPYFmAyzVk6BUqzTD3jxgBDqERq1xRtHGJEEt8pSyf5v7RE",
  "key23": "4Jdt6dwDmawfeSgpPfG1xj3ZdAXvfbmEcic1QFbV8khWCDcmT2pqF1VbV2BNDQbEpooWQAikZ6hbDmwASLgE9Ar2",
  "key24": "5cugz8B5NFzg5iwNW6kYLGuvk198zodKPggNm4YbLSfcCaiersy98Wfde3wHyuS9vH31jHCwHqmcyNyG69YvttH3",
  "key25": "3iBAm5VMsD24gCkWvGDxmz5ttkbF2sESTMe97mRsVYS1MvKCyLyan8USvfjnq7ykEFaLeYN9AmGVGphxwzizgcwr",
  "key26": "3HshYHhgXaJfJbrMPT5qNje7irLGSmMicGQRq68ATe7KPEoSayVnnY3fPbqrxyxrd8RnhjAMLiVrkpUm8Dd8WGaC",
  "key27": "5oC1jra8hR8RMu8Vw5jKFDgm48UchMMJ7fKLWhN6WdMK91B4yXHQcjwH3EwY68Lj4iJapZrTgWXrTZbz2o4xjCQ9",
  "key28": "4Lt6SPD1k12AhNERbdxToMxoLzDVKidvHrEQ7VEnsp6kNn4myMFCZAQW5qAmRF8CG2qNJkq5gT378GzoAJ7jepHB",
  "key29": "5VecZQBdndRjHDsnithagDqWaTniwdG1UpUMBmb7qTQyCyjKvD5ZcsGbXkc76Y9FJWEDp3ypm9qiiKdqX6jGxChA",
  "key30": "4M7NWCW8Ejj7p8GASzv31GPhinuU2ss7muMRKtiCXMjac5BPN9UrowUtpm5dtjvYYshoqsn9QGgZY5nnxR9tbJEH",
  "key31": "2GDEHbdssYNxRjNwSzY7QuFaD6i54rpftEiPhLajJjBE5bnmmiyvwVuY2zD9h2QWWryTT7Wg47RiET8A2HUTHWnR",
  "key32": "4GKUHRw4C8CsLEbGoP3Ci2u9s4UT5BBwG8sgwBWuMPMHxHShdyC33tUmtdedgWq5A8cF1kkVRsxBwk1HV3zFLLT6",
  "key33": "2w7yt37ghyGMLWhaNuj18ftY1bLyiaWR29ozkgFwVbPSYc9jLW9gbSycRA7zGVxDvD21cfKuWuRsd5P4kJon78Ed",
  "key34": "3c95E2FSXTVhK9v6EFhpHSfqSPa6ZvwTbJFYHVSTdzLkyj7BhmshHHJ4LDcpbDdTiy7Qi4ia4PY37ipcxD38DHXz",
  "key35": "SqJcZfc3M4qsoRRSPb6kpN1wYNCrNzjMD98Hke4FvYP5XnkGVNEHA9W8qbHztnfQoyn4VpjXYNNwQaLxeNf4hbU",
  "key36": "4sV87UXz1tboccoQQQMScob9swLakVWp1Gc2wq9h3n6B1MAWtavpqtaU1NiCDFz2tkw5Cy5L5Smuz5iCmrDJJcyp",
  "key37": "5mCmTyyfe2kxVYUQqbQkbbNgkFzQGRedoC4oXYecNBe3L8h3oF6gztDUbYa4Anren2Yc3TESimvVWb9nFdZSwFx1",
  "key38": "LJqhtfPrWoreDq8eftQuPdJ3CJx3GR71KPBByWkFAKzjqmv6HxXK755qKxWXycTDC7JuywjkByFv5NLgJa6KWE3",
  "key39": "5SZw4tjFhPHwhj7UhtRoCtDLf6TosidZB8s1Mu6w5f4iiAPWiT8R41yu8g2oVFnKZK68Rxn9RXVrNoJBNWfyhEo4",
  "key40": "4LAecq9WtWp19xMDCkKeFDHDy4h6ctPHdy93kg5ZixZDtA4tFVCiPyNCaoeEiELxELbTBM3hBA64vQGMMX3tKDJ1",
  "key41": "4fcojNibh7iTAnMmAvH3SrLTnwUXEbqC4pjV7suFa2LB9DhpNiDhyvxrdTu7e7LKnQoXA15hEuqZTAbXaWehdrFP",
  "key42": "5STDqvXy13pFLVMR9ecnsHB6D7dVMpG8crc2bNVQVB5CYik3mu167D4n7wxRWstdt5kHF9GsLGP3ejDFU5F7m9Ww",
  "key43": "4n2i2CSfPrVJcvm8duQRFuCrqsKN9tEmN4f636WRey9ry2xyLzYfqPuc1SwUqJz64G73hXtKcB51L2renVGLTGEQ"
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
