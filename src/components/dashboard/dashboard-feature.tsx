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
    "3vfNaV2hxNYQMMS1A3pfN8bVTUP95ci3rDzYW9xBfsMX9yQv2gC148H6bpgAE7byEvgtHFNnFpwCQwdnWT4J1ejz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6d9rfoZN1Smn2X8UeiUk8btsVRA9rhqy1kCSz9677i7x8hcWrf8yNuabMHHuVBWcmQkZiMJDf555x34SFxzZKS",
  "key1": "4XhiDytAjF7HUw48oWmZu1ioT4b5LoN4YgRMKXDsKjAyovePKhAtLJp1GNUshQGNRJMZZunrPxXn5tF3LxHSpTZS",
  "key2": "tcCFiYCppAiHsVGTJPSDG8SyrXs4DKesXNnSoLJ1xM98JroQk9fwXy1zbwBWKKqjmLeEusdjfrqVbbccnAd134C",
  "key3": "5N3RgixQWaNw3frPCixGRumf9T8HFSjTHAfPPxYkeSv4NsAUADbMVzZQxeono8qzDZpton6GvHvPQHUz2JXwVeGu",
  "key4": "4pxKmhBd3Dpjdz8Yoqaqw2eYcrDW1Cyyw5ctequzfJNbZWg6UfUHoXKqYcb84Kux739LbaazEH2FHqbogXD36Uc",
  "key5": "381eoTC7mRzKbcAwoZ1gSZcRdvYE8rJrEboZpVCwr3XsonswPD8Eg2PF3g34c7s2krrtq5Y3kRb3TQxthAFSGway",
  "key6": "44fEJswkd981RwGrTxevMFUgR3egcejAcR2mmoP8Kh7UtRe4dsT5FfoXbUQFr2zMpaeVMfyMyYWpGDPkUJXH5Woq",
  "key7": "V4gmMDzXG3xyRMLwJa4pgaEmtbGzrLCNiPcvFjpNggyzG63CnUPCAL1qjurfGvy1DE1CUW6LRZkJhzdCrVZCpCw",
  "key8": "5zMrYEmNw5Z5h1urUJCJeeW9qotx5dWVFA3GX2mnrdQxerTUiYbBwMjAbtdrsXYnTN7KdkdsSMmTnU7X8SFD8x2U",
  "key9": "3sW3FVKGewQpkEfSHt48GjPS3AvCiEnpygzTTeuYHyV1mFc5EBjFsN3ZrEzUMFMT44kK6opFS4NkoDBibGHncsFX",
  "key10": "3i7FLdPs6UVSKEEMWbZMVafzEuTWYwiBCA6MvMDfGLFZTzQZDrRPbLvDnx2ubAZ7x644tnR2zkuNEQfyXacRy7pD",
  "key11": "4j84YbBENUyzMiw1xkD27pQqCLqYQ5aND66S1bPFEREFLyaewCXtQDTTyKt4S1HyBJ4k29dX6tESjo4o5BkDGqWZ",
  "key12": "3oTT732yuSM5WY6wRHrrAnyhLQNEp2X44tFeHpwx9nBdP9DdwtaXfQqnZcNQyGF9t3Y3iyT1NZPMFqQs8mdJog1C",
  "key13": "4ddgm6ZSN71QeZgiGQ4DLfoeMZnN7xv1dVnGFjJDSybQmx2Fg4y4BxRFThsNsPwTN7zwpDK4ywyRCWypeYWrWD47",
  "key14": "hU64teJK4t4ZtXow5Cth6C9Aa5oZEyWEMucdcjv2SPkYp6YrsprUGG9pSZYoT7qnEuhwUN6azvyk1QADDq1KpTN",
  "key15": "2JsiHXzJtqyseRDEAppbJDP5z1Y6ouJKwn9VMJWqcqGWB2U2h823E43B1J5KxXUVVVR6mWAgPYsuiCoHtXb3RbhR",
  "key16": "4g5scxBddcxtvF8HyfCZpNd6XMKrSSPaAiGrhxGBfZeEKcSrBgx1qdMrm13VrpxqUqGq1ZMxPFUEi8gMYtK42dug",
  "key17": "5Sq6gi4EXt2zB77FHFfLyEQ9mXB3FvFXAxPkA4ZLcrygDan4x8VcsunNBEB9ZhyUg65eQcYGijnmZZvZdgkiuCks",
  "key18": "2n1yVCv5SLX4oJeEt7LUZWs16PwmgRydBQSFBYcfwWm5NTbsvaLHwGALrSVrKzKHU13w2xqqAxtwrKPBuAJvPScU",
  "key19": "3SyC7cnzEoUHbHCTDjd9sEFUqZ5hDZwg3wedBrmgcQEEFPahTrnQQ2SicmrB5SQCEH4mLaqH14HhPBM1Cv4JyxtJ",
  "key20": "5aZwLEeXuvqdr4eMU6zXYsMoSs8HPopEZfUueZBYgs5pixtDx3jqwPwcLojvkRnRmyNK4LocZNVopEzyyiMWzxS2",
  "key21": "DpsbmtR2DhKWtZD61KihjU8q1PogR1zHLCB95nmjcGL3YfNsLEUMtdbmAA5VywwAhXzaPNLQL9ZEGMdJS26VZA3",
  "key22": "549XU4ZG5hBJF1FYvcDdT3VBZN8TwrN6tkkTugdu7ArtvtHT5rNzsESk3TEa4eMJk6dGpdnHACVG4dqPQ2pi5qqB",
  "key23": "3AsNpJ9EzAwitZmUoB1iXnP1Kq6nxDaQNriprLph5i1jtnamM8vH9qic3Vq5Sun46icMC5au7pw4ebESJ4XJrpc8",
  "key24": "p3iMNaUeiptzwD4iSLFgUxsyg9c6SNP7CrZwANg56Xa8YHibVxuZhngp2GQSfGeiMMEFUfiZ1mNMKb2G5KQcuWo",
  "key25": "2iN4AqKLz7V5ck66QPcgorLu6qdhHz6qwBYHB2rD5Q37JJSQsDJSfnfUaDNV7RfGnRwJDpEQi9Jj7EbSScpWB21k",
  "key26": "39eHF8y9zAgkRA8u2ZsgNycvZNgtmgpuAshTmWKLUKuAkcFteJSDmJyadJPNTwt9nzjLW2ou1ZqATUeBguMXSVpN",
  "key27": "2c7jzewtbA8Btn3tHjifmf5iJV6jJNpo1qLHMYmg37k1m18R8DMFA81FqYiX8N65WewYazLvpKXpVyCMBNSJtAiN",
  "key28": "iJbAzDzxsuR9SzQGw6tRW7Z2FYFwBvtPJHqPfTrTGhN543yVqo6cvZmj5ivNk6CoUoDFeNJEMir2HLHFvLBBguj",
  "key29": "HhsQdfdG2tCKQGQGdJV6gWEHvZbWCeTmk568ihL5nVTRbAtbQ8cEDtbcTwHuf73ZF9jBEsjibK8sgjEJ1PPvR1w",
  "key30": "3Lnj4vPFe3g5fvmBXWwAiZpC7Gj4BNhTL4qRqE4bJwrZ8UHPqWSgngw1kZ6KVjXq76EohWHiS55dSEApS9Avi4gs",
  "key31": "5SLDsdVxsw9EFhgZkF85CFovP6A58ojd543N944gJM9DwHKnxuWq81fJYccUR6MkMQxhR6L1Q1LNHjZW63HeCNi"
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
