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
    "2sstPzJ4fDiU3UNtKisTZrmV7KkUub2nBsh4Mk62yZwvXeXqdSEp2bu7xfXFDvoYmjenxVCnp973TyAmrQoMZdDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZE1cQR7CEW4wtQiKgyqeosbp1ox15i1tnmP2isCC5RuFQo1q1sfpP278AfRaZa2xfwM4Upz8pwety1PBmpT6Vm",
  "key1": "3dtdnp3QdNYxVH44zhZyJ3h2dDExNGUHZTuBnFHkNNkQVqvRht2qUz5KFzsqeW5MCuCMjX8cLwQwHensv6kyQEhK",
  "key2": "63TM2fiZss3M7xM6pFyLwSLyLCxu5Uh3sq6CcrG47qqFz1jz8ACUo3JM2227dfehL3shkgPWjXtQqoESkriEo9Fg",
  "key3": "3KXtQbFNVrNU3kmxGMS7D9EW6tgMP4hXXDswnZWmMvD4bAYAzyNcCPPV9cRCats6dKtu2t5Q2gP1H7dsJoXqg3DC",
  "key4": "3GagScMHq1RDZXrGHS1ZTxgZVr2Q8LUuXZNcBVC94mND8PYQTi4ovCDVSuG2hPL3PKRD6zKkdVg2NUN2HQJd4PfP",
  "key5": "S69QPQx1TbXkocYraehig5bxc7qwNm8a9XMDBHxtdtineKE1kdsWVXSVoqRkgyZsopQG5yRVxXhG13Qfg5m1kfH",
  "key6": "2mMXs3kX3HFcwhaQC1Keh4Y6C95pe7gc2gMxLNVF9irsykKaJL8jvGr727SQwEh2N85mWZD78tUJRkP1BPvveu4P",
  "key7": "26LxryV99rm1hNtea3tJNeE1gBXoZP4QeuMLSNriwLsKFLU374jHRzEhzFmk66uZGJrpnxpB2c4eeZYbdkWRvYdJ",
  "key8": "4Kf5NW8Xp1xfhZpALW3Jsu6KGRsr1zLdPcThAyAGZasqjhDxUxJBQ1j6iZovUHGAn32YK9Nxyehbg7tiDGNq1dAC",
  "key9": "2xZ9fW1PiBHbGF8KDwX8Rvso6xgPfjSZwPmAKDAPpXQMc8sZ3wvTt2gkYnk9tQNNVZADChXeCVcEKFMqrWorMEPb",
  "key10": "3PhSNzGh2yb1ZyyS5cgv1QsNFuNXGZdymfovH3i7wyAHP38S5ua8N1bgoXaNZNxE4XDgVbR7iCEoMRcLjv7DyizH",
  "key11": "584SwuerhHYaS7EEdHKXxbxJ5b6bBoYsorFavQja7bmCwAhwSvujsAuQ4XscversHmSEcjv3WH6HS7GvypgGjHVj",
  "key12": "SDMd3SraP5j8y441BVwxuq7pW8WMJFuFpWLXtjdRxwXxGAeTySGv2BXqj1n6A839gd8pj2Zom6mZGw7t4Zu73ko",
  "key13": "EkCTDk9zWP6Afg1MGJEU72bJAe3QNnXNXGZvd6dB9foyEikWu2WKLYmtLaixqZ96b7nYG5cL87NPpgS7aWfwuHr",
  "key14": "3vFH7CTH8Ja1moiKnNiwN4UPj6RciHQ5DAFT9nE4EWQN5xncf8wSh5bjtSbgmAmqMNGqCjwYkZeENCt89ye9WraC",
  "key15": "5mT2oNriCvEfBTCVeKBzLnauVocr4CrN2Qxix2E7ZPQajUzAukDrQz4dFDWTFKTRjcJSDyxutSrzsVNiWGkwdYi",
  "key16": "3k8AQf3eQdYo95zJRXWYToXSwBmQpVyeZa52WqLFDM4pUHRVDijGX1MV3Dv3RgscnDXN4eDoK8tuCMmmP7ysm1i7",
  "key17": "4sqrLxMt6WDLtYTM39mCoGoouknD272VMuy89eqrPtFqGeM6AgK7FjdGYHhULLANbBxhV9tYiLBDpQVXVTChkBHB",
  "key18": "4DnJ1e5BWL4PPSW1nitsPeycNxeQF3hV81acYij838K77SD4hLB7cNdcRaRwPEFtZUx99HFvn823w6YKZiTAkG3s",
  "key19": "2xgeih1N8dKW4heZc4vNjH75r2apQNooSvNMA27KFupubFqAnBcfz44ZBUMeJYfeTcuHXNELRNrso9dGJ832NrhL",
  "key20": "4YDSxHUN5aTqZodVj1sfTuxFT93rvmRQcTnAgDc6tTEEzSYCdQk3rG6dmnDS1zNLVU3iZtaqkUHJk2Hoz67Qhf4Q",
  "key21": "4gRcKQwDFCdiFvBXiweAkVAWxQteRnzNjfncPcoiCySRDDWNQ4v9KEX2nJMiSJP5fSmczH2BjRKfGdgxTiYr1VBN",
  "key22": "2AKkyGv89Ps7MZLep1H4nCLbUcoDQq5GiErXX5PJyyyj6i9RY3Ve5XB3FnhdtXQDTb8gMpnQHR5aeU6XAFZ8pttA",
  "key23": "4pqiunmFjT7pMAyL3LWLmDQqmJ1EaaFGQtvnhnRr1mUviQVEvUf695sEb2uQG6ummN3hVsrMc6mLmoxtxDzjJGr1",
  "key24": "2RsvCRMWwVDch18diAS8vzdnPDYbA79UaFKLq9U8vdToqgh2gZ9ifqCwq5qPR7wf1CGVxDzzT5vjyBLeZnCyPTjw",
  "key25": "sjiynzK1nzrpgSe6WnAe29jxq8xRG7P2LqA615Ahe5qfQKivah5psA4NQMMPFUnh2CsVsYuCpbRL9U7LFNWyypr",
  "key26": "35opDZihaWckH5ttAmMJVgaXJWJVjwQaAmz6bmdQ7VE1aeGr7d3SYgzLms5mfat2jMAydhAaNjoME6C48q2qNQsX",
  "key27": "4CCuUCQdR9htn5GK66EG3TCZbKKSFXHmXLY1MzUqpvYfVopZu7aVUD5jNV8NvPHdyAnSDFgjAkLwdfnd3AKiFdWg",
  "key28": "5rMQmP1JVZf6EaLJzi3yP2hzAPMm8hnjT7UnfwZzXhz2Czh5RsAEtUpC2yfKAf2Py1sCG22VLGyfNWLnzpfFwBDH"
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
