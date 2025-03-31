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
    "TakoEnDgtLsQM6KzqL3vTrzvy4PJspQJNWWfTiwp27LGyyZxLf5DvQprU4MjaR71rNhUvxgJbwcbeiGtAAJXRhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62iAP36BKDDY1NxmgYCff9bbvEn8TtumcTLJ7JU992Y6xGYQQhdbZbVcYSrQTpNErEvJhfnbF7Y5hWjeNgLibZM8",
  "key1": "27QWE7xJSgmSdcHRfG5mRV5pPMLWMp5nVJQzUafYA92kdpXpDehnAe66MaFghGMsVq1UUztfsjTN1y1W6myMAUoL",
  "key2": "2RrgsfcfYE37e6zJVR8aatdaPJi46TEmenVgwC93CwZ5TNdYM9qPJRQhDcqB2zAhxEBxyf91EgXDpDpyrCVDZAR4",
  "key3": "2rqETjqZQx77pucdDSTFpQQVa63YWq8aEytv8sUvwhMD1fKZU2Ph47C7eCY6wkNETJfwyR9DAAFe1vqFcDUxNrEw",
  "key4": "6pNCMjiKo1rG91EjBvXFG7qzB6qrogJ6kUz7GPiwvZQ7Y4v3b7UnRnMeGiAZyiAZGLvpseFkcJMmWmM1oUupHJo",
  "key5": "s5eAgvpTuBjLQvG1Z5cVKgNfXxz7FT633eTBB5ereDh5fNAwwTYeH7qrpNbEi4bKcj7cNRqc4WAfWTF8CgYR7MK",
  "key6": "38dGrKYZFFjAjUY74tFEEjmHbFcNL1fbfUFYJ8sFU9cAi7zVBxGq7UZ8AS1kN3BuSyeQG38wzJK1qVARfrxHDy2y",
  "key7": "4NHsxRXfBGbitEd7ZcNti7EhfLF6Zoz3YtRjnTf9fBhYKtEJBCmCcTNfuqpMURA4XUj92dYjNp1CN7bPJT8pVwwu",
  "key8": "4oVmBmamHptM4AhLff6HYCVXsJMT8CQHzX3onhkpTbzBxZPcP8iKxDtPz1VqR9Rf2HHmM5qXZKju9GHtp3GqZ21w",
  "key9": "3B8v2HKjBQBUMTAHKmhMibhZDCkBmT9CGvZxQiFhdHhQAbyXKaBnMLuSDkg4oLHuDA9iXF19bviNWip4Go5FMtjE",
  "key10": "3CYAxk4DVfhRBLB8Be7rdQBHCsBPzzMN3PC226mbj2thx3jrkn57D3ns1whuE8TEwetwjvnqepPPtdN3qxTHqpCi",
  "key11": "3bQmQhzhLpNc2ks2VdvMkUDEFDu5mATMefCYxLgjgWAZf5d2HEQhcBLnigzijnbiGbdwi3146timq2eGMeMSqYsA",
  "key12": "4911tYJDu4JkEZABsU387UawNmvggW1Zi31Mmv5vdDe6UaknwgpuK6jUo3DHG3f37DrvtCqHnmv9XMzHacSa68J4",
  "key13": "5Cbt5dXqspyNPu3X3mAKVuyJbmKZ8UtZSBR2UXV2RAMAbk7ERDBuVJezbfz3xScudwVDZu1ufc77rCYqVktfnPDW",
  "key14": "54SiuU9Q4hZWt2cmKWuvJv2aHMsuorCZP1Ag1jk59DL7sTjSCE3FyfaBCNCCWS5T3bbabkKtjKW95sMMPgLSsrGq",
  "key15": "5VD4QbGpLfqQ8z85Xjpj1rhtBqeg1tmefCSHNXbMZSRZgdMo3HfovRKsbeWpwAobfDNo96fjVV3ruyQu3m5MpCVf",
  "key16": "4yKA73oQZYigFbuQiRQpPtTskc4LZC37M75Nk7weG8FeZHuNkvX4WyKPQuLCn33BkAu9NWoCXis8HttaSkEvQN1j",
  "key17": "LXX3QCrYM2NBFfGL6RNkMC4whfinWdKyKtBDhyWpRYeZquaPwcBFJw7uhbkjY7GXnsbeFpf23fZa6JDLKt1D9a6",
  "key18": "2qgUmhjk9rWEEwNFT1xrGjecT1UQ6srkcBsWu6qA12kLJbV3roMJCbqab2o2pb5H7vtxJzuFCcKsB9JY9XMnCsP2",
  "key19": "5gjzWAZ7YpURzNN88qR2rPDMUUkxDX54H5wWF6kfdAMHaFuUaFS8czeJ1yCwnbc4VFerrzqu2ZaAzJApeE4GoD75",
  "key20": "9kPVHSGVdBAmhVQaxnCbMvTS41n1onkvBYdLNgYFdhY82eAB9rwBvekhggXRGztFbGNHnQKRUVU7QaSVuLtdW5Q",
  "key21": "4QDuoHzFQb8dE6N14DpML1k7pWf3QNNdXzkWzudLabPTHrfZcFzGgUQv1r2M96aVzC8HijfjLwAGu3EHnik66uga",
  "key22": "5YUMUaHRitsADYiqKuVFKVPDYZj6Wf6zgQxP7fNUqCQauZ2xwFaJPAcH6eLcgRawU76vzHAE3yesUrveCPZ6YCDe",
  "key23": "5fVL2x1vzs2q7RWfS8irQ4jYhEtfzfwGzpBYAD8TUAusWG2T8JsdWJBHKQp5JegNNJGWWnLSMyJw5kap4d5Y5hgq",
  "key24": "5ckGUyXR5NKJxbJ8i781KkCvF6NHr9JVafuyWvFSYZw4FBfdNPWMHtvVM1mKV7w3Unt2xC5dAHtA95vcaGjJrUpF",
  "key25": "QrCUnKJQHMuU4PksFp9QXpm3NpLjGVRkWRe48DpF1UBjFZN5RSs3aNHqM1iG15FAcLcewJTBypdokRgjMCBasjc",
  "key26": "2JnAvkfR1HbHP1ZLNygFf6QNVzat1BuZnzDQxRKekVi6BshWgvhVwjP9STFC1xcbcSwUhGR7YGc16hKqMPeHGbLe",
  "key27": "4TkYbp2Rn6oo8YfhYL6DWCwmdLBSQNSSA5gEauJewvYcBatv5QbJKUYGYExBDuqexeYPfkE2vy3eroVT9fY6FQ8Z",
  "key28": "4GtfceM7DFFHtoi83dP21C2zo5EWfb2XgUGZyxY53n3SLc8oNApKBgPTVMDbWeXLyM3q9WAmk4nb1cuP9pLi4TPW",
  "key29": "59mkwg5mCCfwKGsAhA834xt9ijTujYnjHwAdAq2nz6Q9JMPyQH6rNyBNmUbSZsvwvnbhMFWefP5GPPWHoKk7ZNad",
  "key30": "2XH5JtJgY2V2isp2rB9bQLYDWzeMbg1p1ZdEAXfWh7sfaqbDH3HUapzwfX53WYrgzvBt4yRZizqfgFXWGsHonX6b",
  "key31": "bWMMFbVAivwwBT6rvDjyo9kjzR5BraFe1gTMva72vaH5WFoS2woZCbMNXaMLgD6ZHjgyahkQyLwJ1gtLtHkNdg6",
  "key32": "4YT9NGDiJ6GpEjLEe324dGLDkiukSiJu7JqujuF4EdLfUfxawpQwbqKEeSvhq8FuvwYYgGRqhH6D2sL3LVqvDArV",
  "key33": "2zVRUZG5pssj7hZsjcJgnyi4ByVw6zsYRNc4sCgt4HQHbrq1F7JARaFtsjRVQyEi3tNvpNvpJNRcnia3m5x3rw1j",
  "key34": "2DEQz8bePiXs94FnVtGUoc4CT3H7Z5a2NW4SqZyfLAemkKB1oDGRVXpYCdZg2cM3Gh7d9NeVR5mFoJRJAVV2tx38",
  "key35": "2KFmEz7hinsT6omwo3EHKzqis4qmocEuEuSqmZGTfGfu353XVRJRovfmREJbpxrCmfCUpSpUF3jhbQjBhdXfwHn1",
  "key36": "44vb2rUALyQfwcwPxeQ7psTtihYrMGaGyfJsW66e4yxCkcoq2qPd29EbBF7VvCuDQLwj4DCjjF1DSwnae2JHNRiQ",
  "key37": "32FtF6sWqZ5HMXVgDt33GMCAvPitptnJExwPR2nz6VTa9ByuPbFSw8LS7V9hT2mvXLKJ9B5dqmtrvEByZtUPCYyj",
  "key38": "4ArppkoeuQTArxE2hu7UzEdWDeUXSq7MdL7us9ip7HsYHbqCk8N29tFj6dtQ4s5Tsf89NqkcBUxERuzkBVig4ZqM",
  "key39": "3TN8UuUfeCSirCUueQBopriA7eXkQquCLMTN2YvDugGiyroaccKPitZAUKeh9sMhq6SQSqpCC8rPdRpUGsvSg4aa"
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
