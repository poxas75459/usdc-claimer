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
    "vQYK2Ur8qgT2c8T3QG46S9iFNZLjFhcWq9Ex6XNvSfxX6VjRbrA2mDs3CYfbxaQhcoQp1a5CU8aJgnT7dbWCyW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBN8pSGcc6Hi2Mx4FAFbm11GBm5X9UuFpS1wgFk7g7q3wAkwtwTWqSryzaRyntxqrj7ZKvt1bY1tHcyrpTRunJ1",
  "key1": "3GwF2aQ8NBirSYktzHWwcWwwzrJdCRZyALcrx4H3fz5QZnjf355dyEXEkwJyBh4AX7hhh72GvNPTQ7QVvjtEoif3",
  "key2": "5DsQRXRTrj2PeNNEyWjFUbiyk3fD5mbDmALUaqJbEX7bdoKGxWUDeybvPfudxZogDSAqHNowgzTtggWebwrbDcEg",
  "key3": "5V5fQAvaaqL15jCJeHFBsMf9Yj64iiR3ESmpKViq1Wtwti4DzRLHvd69Td7B5w8xQ9dvXZaEcrMEv1bTkf7JCkoS",
  "key4": "3PWY67EHQDkji3kdpLapUmJfbFSP5gbVpECiLUgs69dvgVsNaMyP4XrA42QfuVoQGdfbWtajTS4C3EFBzwxoW2i9",
  "key5": "5snFbDaJAsVKKhqQWRtqZNbntLD7E6aFnL9fzzDtYbS7XkEknTNy3Vc3maoXD2vEiPt7x8NXmn9BgYNQqgxTfH7P",
  "key6": "4391jgVuCSJQhPshGrV1DiJCpG7eCQQnXfLLUG8gzggRC8yGdQtrmztFXWtqQCHBccmi4JpfHqVxfteFJ2yJ8LgG",
  "key7": "5SLCfSW4kC7ajmucsjQJGWJ3GduJE6fJeMrTV9Rca45jVgy1LEXBDzzmLXEp24JLwR8EKpKHu9WTL3m2D9mGdEdy",
  "key8": "YQ7pyupzaFTTaB4G9G5Kx3kvgiHn3LtEG1PqRHRzoxvZUiqXQkFgpV1ZsaAm98sxHc461KXE6pE6h4St2y2EurF",
  "key9": "3rqEHaZ5xyWcCXUEU8ZazJK8KbYmMhEahyoj412FdXabMN6xs9BLNtugjJ5onZ7uBv6wt1rkvqgF5kjEEgVz2tDy",
  "key10": "2Qksya52zNXt4PjP68dT1dCznt1uabENedvdWYUKLe1km4AatWHB99Q6vZVmuJvsHYxmGbaf2WK5xMrspo9TVkbH",
  "key11": "4U6KX6poYcuSwDmCw1uyDL55qsj4zazD5VpSn6pvNLp45agbddpJj8bxHs88tbDYrLhQ3rKGBfaX5EY7RnzAkPXd",
  "key12": "KMXK8CaBz8K9VDmVcHjYmEuYwiDyU1kgDn5cuML4FCvGLW2qfT5wDYS8dtapVpH2ed37EG4s67VguiYkF1bcqmT",
  "key13": "4CmZ5gixy7LDm6rS3KajJ1G81VVbGiRHwUgvvN7mqhEUdBuzq4kBonSEuvG3LsvCoGv5Ky4vQmM29pGz1nbK2mjn",
  "key14": "2NqgNytSqaiXwvd9ePga8FrsVN27PczNXmjW3crsoQV81mYBKgVZwbf5xgBKmvyTPnzosUqZ5zXs8N4RwMk6jzdw",
  "key15": "xhmbBLzMTjo9CUZxRGT9B9VwCoYFFegKjATEJX6zoDzokZjRE2H1HS3XHj1exqSjLvdas1owVLuK5dpcuHwHjH7",
  "key16": "3UNUkMbEYLWCF5bjsw8Kk7JBd1j4MCUmBRkdmGnib6mJ8qqejMB1zU65kcTH26c5sLaPBg5WvNJBYZT1fzV3PCdU",
  "key17": "555aFzqs3HZmFHGgunfj1J4AmzahADfuhevE3VdR2qfm9imTPQ7zDdWDhywgm7KVFAAT5PsfEjsowfTagR7f842q",
  "key18": "seK45btGET5YHfA5j3vqxACSZvQuXkAnNgT1FRy8bPoWBGPYfUoa7z3ALWShozQj1dRPehE7P8RJQQ3LPMZimvT",
  "key19": "4CHtkGtiFmCbSYnekxvY4m7br5kSzX38rB9n1t7s4eWaGCXpBn4Cgtt2rMkngymaR4Bjq4kr5nkqz9Nv7gAotxzq",
  "key20": "2SEtaMFyZoSRjt6yDHa5HopdRpfgBC5imgHiPtRQkeZQKZosUyx4wwm4oLVGhtN2s1N8mvb662rUkbrdoS6dF6C8",
  "key21": "4yBdWaKAAbqqpTpRm3gpP5Aa5Tbrd6e96t6tL2aktW92AV2ggLneJpd27CardPG3tG435Vf1tC6vKVDBrmKzTtP6",
  "key22": "5q6EyEGsurm1yJex5KaajY73KUe5G2ZuHudfLvcEz9AU7u3BjyY7XpCAGbTDv1Lf5ZcmUc9ERHQFyTkXeEB59Lv6",
  "key23": "3cY6fZwsgEmYUfSBkHuuFx8bR5Xiw9xu7fJhFJpRqdMr8HiSEHvL9EEJAJWo1kiXhqUmCduoXE11bmTyxPAVhumc",
  "key24": "4X6Zt89E9fVamMfQdBczLxQ8ZoBXmS7WZKr2kqAi8TsnScgx8EQPjWpJAk73Ykz9BgQ5MbkvovA7W1CJ3Ra97D38",
  "key25": "28YnEAEMrsZYyfdJJqBzfxDBpNeqFUi48je6tCLrxCFiwDnPabZyB7JkXMqwoQqwDSsRKqEyiDeG955NGwtM2an6",
  "key26": "127ZyvURgA45LzhhFjA7BVVe5wD22qwk1HBFizEntZ9rtZ5smGGyFUYqeXtJwfeBMc13pFvRkRAh5WwpcC7iLrju",
  "key27": "FkczC8HYVgvt3SzKzxxzMvruis6wdZjJZU46Agp8tTK39Q4KhcWT8cQkPCyVbvkcgGaGpxBvsHfjbcaQPGNrx1R",
  "key28": "ZdWaZzPaZpMbTAvC9gLAubQRcKvs265kLudavsBvCNcb9As84GpSvpEkmuubic6awTZooCczZNL5oAjj8xmntVn",
  "key29": "FZm72erEG2abCNpHi6CGTfLvBSpXuXkfpNQuQi1X4XrXULcv4ucqRsGvNSEXMRu5dTTtpYJ2kAbar6fFLnjhaZc",
  "key30": "3BqgeqMtjBaxAJ9Rev7vMWbe8eSJt51CgvJVTLc836iRDacb4EKiF2K3ULyDShb3eMvKHMSowrfU4QRaYTjafkAv",
  "key31": "4ih8SoGSsq4RjgmELP9SkZoW6a9WmmrYCiUyzzmqonpG6EXi1N7e4hULtDAy8bdJX1u2wZnZ1zLosVA3Mj3kEhWK"
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
