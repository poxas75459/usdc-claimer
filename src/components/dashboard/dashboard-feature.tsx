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
    "4Spi5QKPGFw49kWN4JCseo7uwr1h95FBfoisZFMYRWfZFGC4M8Ayeqnf83WwiJaaFCTGBgFYYzxTERsCvqGCTxMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38byaEaxjM8XWcV4dHghcbuBiBbV19hdM5yBFLRieExNmWLsBHWa3F3QA3j44p626BNsLGq5fp1dkswGpsJrkCrt",
  "key1": "42nUPzN7M9yb5U4hfjrMFdho9PHgDQqDT3gdj24msq9eBLoffa6t3avPZfPGTvPYkmU4s82cJqJPX9tXtR2SXKyS",
  "key2": "JweUAKYsgoNrJ8GKrLMa4ckLqLFiVpHKvksmjoU7NF5oJmLX5QznqpnL5vpvQh4qAuVyxtXvw5wvNKpZkHrFNpV",
  "key3": "ERmWLMXB4C69Dnotrsdd7bWQNtttbsvymroUzdcnjafj4QEsbp4b86mzYUDPnB3RJAKagAuRrkfE43cmjk3jeXD",
  "key4": "Qz99Ja8pYL7qZa6WiWJ7sTmxxuMw1DPez3NdAPKAUpSf84oknVvGAkHR7vJqDBTJutJwvVp4LYkC8MBsgf1MWCQ",
  "key5": "4JwXMHT2paGDsqEtxjRFTCBTxLnecpLmPf9edT1VwVQxwWZwJmiTcUTjhjt29otZmqDjSkfxzN9EyQHYhCtSekzD",
  "key6": "2DJMjHHDbtQdDXjjGNpv3r1HuWivZPsuzpyMyXsTZ61Ne7ZxL9SZRrZbPMHdmnnvToCtm8XpDwfgRkUx8y38TQW7",
  "key7": "3MaQZUZYbJwk3tbYTQXxfKbSVKrLEoj3bpGx5Nx3DSWtMeCnUACPMKq8DDnAUDi4JKxeUJ6frKK9uwcdoPzWWhae",
  "key8": "63xZ3Nvsys2XJjcf84ZjcFgpkTwjBLjs37ZqkLyeDHh9YtK3M7gVGRWSu2pVpmXdqpDcijM5H3fdh5VRCJSgqvfs",
  "key9": "5MmXywF4ix2BVqgkS9ZRD4dXRJJwJ4VyXNbtYkpcugtX13i74zTwdpfxh9ZahmYkvQhEndnjHMe57LmyuewtgRmS",
  "key10": "5cHNBzfGHBFRtjxFUwLCfzjV1NRM9RCJ6HPET3FHestWD3kKcCKm5zexUyK2ZP9SWrAeGjCfGXwLvr9m9evHCSPz",
  "key11": "46sxyxn6xGvAsibjSa6hxErKeAvsTbRrtmzqu2WovQKwLBd6XCDhK6KfbeMzkgTt3KnRRGdwrrPAZPEdxr9ax9Su",
  "key12": "333j7ysFKaHwdRU6wC7ubeDZPnPvzWVEr6vX9TjFfTq9WsHFi7XvXXXfut1PG1dbfe531vAAMF3NsT3WuH64fjTB",
  "key13": "3yKraBqEkxLZvrFYrnSaYws2y7wwxvhwxUUSGKy8T5c1X7zWV85Kr5BzGz9LfLwMcaL4mKK1CSAsoCPkpX3Z3TEy",
  "key14": "bqS9uiqG54dp8fbEwjhdkdtFYw7jpmWTvzmdm1dgCh2wfBPmgzfhB4p4JZ9VdsVHP2niwc95mvNAvR7TtvTb5x7",
  "key15": "2K9ZoTiVLtxrpdSNPXtZDtJzq3WCVqyiX8fMNHUc3LgASB5AwusLvEi1wYUHq2zxAwS4ccGsKwn7qvhY5RX9hzSc",
  "key16": "4bFWn5U7UtYfT1n4r7yoi6Ma6eT9197ZNG5rpdDjJ1tFyh4YtoTRjMu3YMhyzerYcoUzvZ5sBr97bc17Qypi4GtU",
  "key17": "p4xFYdqwmvy7fxFi2Pp5S4xbwiTrd8N4DpD3HkZwXpKYJoH9ySXbtTdvC7fUvqeG3PE8pEmHfzqV2nneFdhwU6s",
  "key18": "4Z58qZTXijMBoCo2Z2N2vgvQ9Lgs9tY6gbMg3nkLDmbpTm4Lk4Ms92SGrRpGb5yxyGt8ZZbW4wZAN1XdUaEKoXoT",
  "key19": "2aEQtCXoiMQ6u52Px7dQ5qaiYws7EyZ4SxmtqgpjZ5H9ptkdCJtVMqpCiwCkvZXv3EdFev18aoC1P1s1TkVxjh8U",
  "key20": "3aNpRF7PkuPocxBu93cGpWfjjpTia4CTYcjnV3x9mBDh1kJ87sQQF7oaG9T3iqLRDbzK15KLc6LxRrmkCtqvNUmR",
  "key21": "5jgzfqAeahp3wipUpATczh7JmhvYZzCHBpaPJfz85d28vvMzXprBRzHtLuA1QbbuTKusNNZ1z3sVPwdEnveTapZc",
  "key22": "3QH9cyNmaMwm79mQWAjCeNUKMbEJ2THR6JbS3Rrt2fSHvNNrwmfRn2eA6bCgrST4jJAm2M2obT3TBByTUKR7Y6bB",
  "key23": "4s79rcoKqWnARu5FViLMjYHa67xRoZkB8urrUXb72Z3ExgSwhxhaMoPhmieMFEq9hywPx3QEqfy2KE44UjtKfQxz",
  "key24": "42guGp728DosjPmoEASMjJ7dSxbSGRckDQSYpwU55hmovZ671iw8HkvSCTY46BqYiE9adMMWGY6ufoxKTfoyRMDa",
  "key25": "5bBDAed9kkcXcZtiRQouVqhcD2zoSz2FVCvAgCzSy3LYdNbW9mWCdp1kYGqt43cumSvneYepcgYLvftUwBAo2FXm",
  "key26": "3iva3yy1yhGXNkW7jZwx7tKUjwAPhT1J8qAcSnY76ho8aHgQMMtMrSjSCF7btk5UJS3SuZd3DcKtcWLSc3xNZhop",
  "key27": "5UZcinsNmouKJ1fNgoiLBi2L57DsEDznKEt25Jvs4SzsFXCHpLTk65wyu54JAZg27uWP2MUjogHnXDb9HeqgEht",
  "key28": "2c4PMg3MEh6MdAjj5JZSPBime75zoDoGwjcrLsMiKXLpcT5X8X2K1GkQ5p2hP7LxKMF2KRn5GfRX8kBF8G2QbDJ8",
  "key29": "27WxxCs3rK6UbrkQDoHL7Vg4rscSRxTrNVy9MkQbRrLQbiPrNHFoo1Xuo4obEgvT6r8QQg9VdZjuBuJCMr1DrFr3",
  "key30": "3byqEABEYGdrM3rfdS8MVgYrnFEmvv39L8WZJYk3EEDT3K2DoDPadqWJJox91WpGTepZPkxx8e78NhZ2YXGqhoEV",
  "key31": "2pQ79Wpou18bCZXVGNqwn72FMXjk98kw89TUdfBzAUXYHGvnhrmJKajxKwE7qwa5qRDSof4XHawbGE9PscSW8Z5v",
  "key32": "2GUSqoGH6Xcu23D6XVRu9fEbQeE5HeZ7h7JYH7k2xwmkkhAEcK4x6JFfbTPbaFbFGpzmkVjuv5e3bAevbhVg3qqw",
  "key33": "5a3h6fS4bFrX6fSdVXypdKtKj2omR7hCKhcDhi1eDFyuVU7McNXQbJw96PL2sxrYBNc2UvFFUt2VYVATfFbeoLaX",
  "key34": "2gwZsjAhBg4rEtRqPTS4gGBkBKXnsknLAm3ygSV1EMvy4yhCiXMp8grmjYQcj4VuTacjJ2CNbCP259MwWyqEHR9f",
  "key35": "5X4cYNx9CvD9VWASgFsz4BDAvQgk1CW4nWy2ShPPydiRRcniAkjn1dK1NaiXVdbQb7gTPMk46RWaPB7oK3MvXSu1",
  "key36": "3WWJeei9qZHChZp4s9fkRQLAoVH7S4uiLRRxNXrEvHzB82QT33DDcHFV4v51AWJi3mhYa3URsVJTgsU7fHx9CsTX",
  "key37": "2Zbi1Un2ushnh4SR7L61QFRJpQmGhcoq9CEt8qTZYPfRZDxP8YZCw6VfjoMPAs3cmpJM7sMjqxNkSpcwutfGAnTG",
  "key38": "5iVuk7wBaQ33jLQuvJ26p1FnomazdoEMkHNxANWWtK5rpP6BagajpefMS6C4RWwkC2XnXtHPSLcAdW7thyAapSgB",
  "key39": "4nYJ3fGsLkTNzcrqLsAovqexZizK8JF2LMMUymhah1A3YHYd1WaGyy9Q2ra1AmkBq8NZAascCPjUnHaNF2LVjhGy",
  "key40": "HW38a79nase3PeXWgasQZee1D6omsHh2hb5quG6ZPQJ5p7r8WTjXY2CVvVERKEkDgE4V2teQ1EruHwacAR3Y92G",
  "key41": "19Y2q3HuLdvZuFR39SUjoX5F8SUP2WxXwKfu7VqUkQ5LmKYDYG5ZwegnsVnmUCp82PT3bZBz3YjbWddaWs38jcy",
  "key42": "5k1ZvR46YX6Hvq4YdeaAbXZEnyJnGAAWT95UYfAKarX4CLRC2GGEgPiAhYu2Z22rPp8mMBDxAVJaa2npg2eowco5",
  "key43": "2Qs7whi1Lsa1UxN9cvZL98jgP9e8dw7RZVkEhbPf4JuMVGbovLus1eGiiioFuzCDzAdjoFZWkrsWxSBomHA1CdLE",
  "key44": "2ABZhGXCDTJait6mPePvf4n67uKdsm3JnWkgZnbJfZM1anHk5Vau6iyjpsquu6Nxcsy2YnosA1vt1PY1kXVNG4Pq",
  "key45": "38XqgN2YSsC7f1Y9B9sKZxfHNrQLNXLmCToNX8GHy1zV2DX4gcD4JPXVs3e9YWJpDfFvBQK2HogAubPnG8WBwrap",
  "key46": "53Yeh6B63qARbfKPee6CjKsQrAkNSt5zPV5vGYQ3qywGRLW91nqBVvpTcjrm2N4yoxWrVn6rSSJyRGXTTeBkrEpx",
  "key47": "xBuLV921zruKQiG44Mm2Kn89Sh12PdB6gJBU1d7cdT12WzpFqBnz8wn73hVmuLvDaMuurRywLNCWmFAZdnnNMmf",
  "key48": "9bGLtPZwcYVXpgPStrZX3VZSFL52dDqvugYt35EgVM6uoCo8QecJU1o53qFfh35g89DNcqMrvk9xjS6g8wKDC3m",
  "key49": "Zb7pvfjYQqgCx7QNCTmCFoyGK6J6zBxFBXhyUAtiApaJgg5JkuTXXDQwC93qv8YcUGQXU39d1yg6Jru4oo13rRe"
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
