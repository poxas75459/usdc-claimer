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
    "2yn1QvhJpFTmXt3US9v8aPGJNTp2CTuP63FPKGr7xQzWY7sE1ksorKdKH3kbXMpY9vcEEwPkJVtUttKCWSSeNvDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqS5PVdkqzw3Gvm2HsBUrKyvTTC85C7hf1QfJS2X8eDiE96x2w4fSXR8TUSiudvpbxFHc9x2UA1KxREpUqnX5YE",
  "key1": "5McasAjaSMDKn2eA1Dj4dhZnGxz5n6qMM2HsPBk7gvFqJXr5ptQ1tkyEWVqyoE9X8NZGJ7naSnvCfq6GDiQEjMHX",
  "key2": "3MqH58anvoTUVqY2o4GEnmrF7dj4M14nkHciy6h2qR3jSW2QTj2o1FakLK9qBmJMbrVsRVYjuhVBSyVXQ1PgRbZz",
  "key3": "3x5huGUMS46wtEYG8UqN7KkL1kiCYzdYTVWqKFr3dK3D4cYzB6XWZHKxYCaHTJcgdP6JX59x1iQud9nGi1zXPBRw",
  "key4": "4rivi7W4RZV2QUmsNTNTLTXFFxjYbQDGEpQDXv6FVYp315cnQqWuGsow5hsmmq7xyP6BrQVjHZxUE67V89nSReck",
  "key5": "5SkG7iUfbX86YfteqfYSMwjz5jqs6UKnEMqtibUxovQx3BzkeXpmTdkg9JSccFVZi4pYDpjz2DZtadFP1s2jfNvJ",
  "key6": "HrVrjCeVgp2jqxim653puwVotZZmjBMdx5tVzmz5DYF3uATdWHF3x3qdwKHUuKhfZGx1dbAGG778rQY8gtgFgBE",
  "key7": "262bKVWYDf6L2QyecRcWhjShA9zGZNmAatCSX3uRFnzMq1YGSsQwj8wPZWxAguCSfC7eLvjeQ9MXx5HELNny4TcT",
  "key8": "2iJ4PC21VfpRG1yhKxhTZTAWLGVk475h4d5vEUYsqg4eD5vcQJtUn3dGeio4L5xmjrzrSrQC8YfK1ME6H9JT3rAp",
  "key9": "3WbUju8LLQZUZ2fiTjtacfuMQwoRDn2fU86rLDMFZvgEjgfBquPUs69MQqFW2g5s337JUenBHg54qN7jvDEnTA81",
  "key10": "3BdQdoSrnZc9Zi83cPMvrH5Fu1ThPp9mUbfXvonEefE54rATRzAdVvfSuGg41TEDiPo4SwTyZJhA7BzuVnsK8af9",
  "key11": "21xutuFsadyiNatQuwPbHSFZnjxfKjxG2t2a3JNfamSqZuBLmybZ62fh7NavuPoNCiebLv4itj6zgdtXi9VhEyrv",
  "key12": "5ANRUAmg1J27EJ1DKh3V4MhgfxVgnZCAsMsfj3Hpqwkwbth8jRdhHa5nYGmory88WRLmo33YMy8pfgw2vNHZHEp9",
  "key13": "2CmoJNfjBNr7c6hqpYkbHk4UvGhZ4vNNb4zsHsqJVtszrfgbhfr7PrRp4rJDnADmSKoMH1Q2ZyUqy5mB3uAGh49g",
  "key14": "2ymMY6821aEVoZmXmKrSEuQDNsSxE5eeak2Q3aFzq1uzYPybiq6TGHLejFMZm1svr7Wh6mhwsCWw6setr6xzewLs",
  "key15": "3nu4ttRLyAidADRVzFrLhxXTPyYT7zi9BWrdDiyYEdesvL7Si7CRvd4pCgg2eyMqZrmrfDtFJibo1tJYY2k1tYRF",
  "key16": "65Eh8wT8cVt1hYcufWgjzfeHn7g18iL6UcWikBoH3bkT2QXC1GPRFXT7qAL3TGTZPdYvaiBLTxy3YqZSdodd6dm3",
  "key17": "4iLXiXVTjQJGtyZfznjP6xHp9RrssaQu36BbXJxchdqWx7npNFAs7pq7RAa4xrpiZF6nfZuf3naX5p17TjwBjjrT",
  "key18": "5nii1VFWAUTMMsUjdSdciXseaVHNtmGiTcennXwc2bFrZBPFtbCKgqrhByWHxiYve6xay79YpLAW6z7G8Xka4hyJ",
  "key19": "3iM4BGQVg6ZrCyzA41kJBLphwM3teWHQGMRJWQkb4FRtRQuFrGLGnmWvnHWFdmtg9qCiSCaoo3kqeMkYfkwHj5ua",
  "key20": "61YQqQjYNhiuy3rChBt9DVkjbU3WUxGewva9YbtMaV1oLeicTzioabVRaXDzJS6B3hnWGFF4UgwAJHxSEcAPJake",
  "key21": "54kfX6pvEbQYtgNCnACSqHPVdybsWQbHsHND7i8nyHUGBPiQWWnmiQp3cP2j2uCz4krqxcK5PC4fCdRagDKh2HrN",
  "key22": "65Wc3t4umWtds768BvfQqHfjHcdJohZ9n2D9w1aGHukh9R2yoMse86Nw9n8gYAC8bNAhY2MEHW7s1EzoXNncJeFP",
  "key23": "5EVmgaynrLC6M2XniiMRSLFB1cyKjPRSDyyjVuzvcWGSvY85o5WQyTfKfvadZCjhYmJUfBPZax6CbRwZGENEdY6L",
  "key24": "qDYycfs1g79osuDn7b8sKsXQKx8nJMgSiwhYFZrQGq5wumn4evTAqV4VDUaz8qwBoHwqLaAohNkCYFbXjLmyRwh",
  "key25": "5VePXRRGHkfHv8GKbrtL8yQgKHQe1NsUqHiJCMHcmHDtdttYsEPRSbGxTxbGjwRdujqXwGnUqmSpmSKRbbTXoW59",
  "key26": "2F6zs2fvuy4G7Vyf2pCLFEDmvhqNvEtAt2StAkte1GPELQKg8M98uAD6Tq87Mt53ynFdXW2bCpZsiymLtLeed2G4",
  "key27": "JTAQEMRHjvdXXc9Pw71PmX1cvP8eGMs88qKVe75EQgGVCynEjNHdJRvdM1Z8fev61NqaMpfvGJiNSctz99BdQB1"
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
