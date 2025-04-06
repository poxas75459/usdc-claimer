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
    "2EEs29jWSTaehMRu9N4o6xW5DHqHfRukajnhmtqZ51N2pqckjTQrcXet1VHDwyCWDZvErPNkhBNsV5bAA7hn473t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27t7fjvR724hAcDfrPtfZUuxosjz9Z9xmfrs5FERHak5wdBAnUCgq2exzaHSqopErzkRbK7kZW7pNQ8yfqDbXQkN",
  "key1": "5y39Bupp6Q8f3g6RnNQc2Pr4NVtu1o8qG8kHhLGzoiPj4ZDk1jUVDenbyWQ5xsFKG9FbcCX2CPkjC3AfVnLDc5BD",
  "key2": "4L8CBYVQXWqFjhf6vtj6ymHzW22H4zhBRzFRgkQYwXV8kiF8whBpBc4m8EihAtkiPNCVhBgKjXQNoGEkrG972Atu",
  "key3": "5o5magY3bcQyjTUcWpW5dzhftptEh6g6j2MdurKQCw9owgwYQsK9a1AZ8uKczjswxH27J45tUBVi743E36G1EL2k",
  "key4": "3b4U1R7zty9DB7pog2jsJjrnbb28Q9JReEheRFYeRPhDgJRWAg5deWLCyQykVGLpxiZLUWRMoV5RpddiZ1HZdtDj",
  "key5": "4pUnNYfzkjH2JQHGPkBv83VfDbcerhYVW6Qu5Wf356qUz4pLwpDL7pcnYEWNXVu8jxoALowtYGBidLTUwrqcDd9i",
  "key6": "4RcZTcfZYR8ZmW6LWQFhPGGbJz17213QG7pvWgyH2qk4uBv9JH6hfspLGD3bKkH2FoosEJYeLfWiJ7hRjszPxLRR",
  "key7": "4qpsSiTmaYTMmEMfiK4BST9MPMqPskaRVutNo5pJczZ3uCLof1N7A6pozUxd5ujv9Vv6DW3c61vgB3WoSDqXNdRD",
  "key8": "22aRKopQv4oyd4zFzNoU5mhXMZgkcEAzMU2QFtDnpMvJ66zpxQUFdRHLgHiFB5FuEWWRdTForexbbBNkU3wcw6DY",
  "key9": "5yYESGUenEdFoeTyT2uwV3u9KceAYikDpcMtBXn6ERGKhFVwYR7UgDEgbGxLJqeqeNRE2jf2mEJFe8ThMTWyA4aw",
  "key10": "5PzkbetuXDPdpRzXHAwJHaith1pLgGLHgqb9nttCMnxMMuSRTd6H7kPqhvkYWMBg6mdPz7Ljr5Ldwxs7iUf7u9Zt",
  "key11": "4hcf8Tp7saR4CPXwkW5rNhi3XnZ66454jvWeAC3GHALdAjpsqjCsjg7bbPc9Wpcz4R2KXWii5dY3HPVz3pc1yEFj",
  "key12": "27Ka83KX9x2JCg4kuLT4DkvGoWkDkXRP5gMGRDvJ7K7pt4Qyy9KTEHutuEEiP32999XHPyFioakm6jr8HM6gkbey",
  "key13": "239vjSbrU77SPXajBudb14QLi6EBhsndrUwwYhQC5JnATUHSVKjM5AXX28gG7xWsDvpx3ymhU2tihXh1mbqBwGrY",
  "key14": "3KPBEyTJG2udsx2hPvwag4EaepzkU2aF8oFVm92V9WUnDMKiignoWcCCePc6SyJDq6MKSfs9W85oUt3WhnUg9iX",
  "key15": "2jTh6WzH4EpypfAgvb2bbjoyEd4b1fXbCFWmj1GvCeH8LGLVJt3vkSHk2MHgUCpnZTK1ayofE8QKMkARcmefQt2g",
  "key16": "5BngSgGpQVkRAKUcz2P8QQRG8JMYVbSib75kUyD2Y8HYCYYF2s6bCoKozMinQ8yhsDeQuMN6LsQxVPQsUz56A1Hg",
  "key17": "N2tG9tnjHHQ4RcVq1oRuUn4sKyE6ARAHSD1W4UNcwaAgAiCwAsgfVZDn4LrasuS9Qu3eEtbVYrN5gck1wK2GDW1",
  "key18": "4j1U3hXNudRPGLFEFN4PMNcSnPFHQh9Gr8NALSTXJk99y8a6Y3rqAKz85wdXCkn7Z4aGPFd7EYkAbJizqAQsk9gD",
  "key19": "3incdwqx9SQcGdLiV5hmKwRxBVyPUuobCiARm7MWhP2Xhn9hcpSGdqPH1PGTyedrMvXXiYRLPRMyw8QqYJhHuzpR",
  "key20": "d1ton1caMqhobDrpfXebm1TBejPhsHnqZ7v89ARnMQ9WdWbg6CN8hKkF46WADoy9mFCs9MQVZaNjK5k4rVkX43k",
  "key21": "5oADckURkMP5yi9VqN9k77bT7GCPnCpGKMogQGjtZHz58oBhTsEY7AvWghcu1yztiPQwbLtm7XGfJW8Rv4N36AAo",
  "key22": "5kfjn7KWkAUKDUAi8vnqVY6HjGgoSEdD27pM4aEhtmqjJerVgjahxf5JkALcW6bKLGiSbe92qTmyTt8ZmSJmJ3Fk",
  "key23": "3ZV2ZjVgqyjkHJgqXiRxcxKexXBTXmDkUfXc94UV7DFa3aC5cYUmyjQdB87sSk5QwnLoMfQ49cDPA7HUAATGdXJk",
  "key24": "45M1VBRYzCLVmMHv3WPERQCH71WyNFCC7vp2q3qtppV7TgmFHomf3XhwcovRvuVbKwTbdTb3zpQUSzC4vsSf3Ddu",
  "key25": "5s4UFtRWa8cn7zMWvC6RkUwtCNsZvYEsjJyRzuurkDYXwYGz4bwqh948sWoE9jawb1AkJNpgpuKnnm7AeakEuLpQ",
  "key26": "5eJFwCyxspwTDBj87FdVJWVSxjcEUgXAxHBzq5krHnd4z9wdzVkH14xZ2A5ZM2BynNdJohGaWrqzsQfxQemZshPM",
  "key27": "JFSdWdJzkJgMnjb3PGhyduVkG7v2TNhSzJ2E2JhdhLWtpd7xbGAYqESJKXoFSYXmnKiptAGcsza8UfGbWYfYQG4",
  "key28": "5FdDmPTfrbBQJvkAbVKgMrSkLHuNZt382XUe2YYhtSvtiherAGuMnh3YzYa4Lk51waL9kQNFLM7frTFEYLDh6ggd",
  "key29": "5GzcSTxnfbUGJTeSmVAxH8osipg7sYipKsvePPSaU1g6J1HN3Q8V3Q1xTrbDDXd2Q7jrx9aboMKU1b6M7WxNVkrc",
  "key30": "2vU4ybnpMHpVy3EP8LPm6stTfoYz4h5RZ8hK3vApg3eu5FUxLCowEwGA5x3kcSbzEsTjy44kjNK1KAzLbE4tUc3r",
  "key31": "5yr2Pz8G4DzGWk5J1Engviu1Ni6765tYrQXxeagR1jkSwkRkqPp7NuCVxx1FEBumEK4M1BMgoZKt6BPpDc6aZgw8",
  "key32": "3dBUZHd2SfhQFbaLtf7KcP67d1CEauF5dsdKTSED4BZkR8omey6QjC6rgYzZhEQP37mdj1iNCpnQhPsVKwFwdmY5",
  "key33": "268TxKevCUjwf6RVenRGRphKCY7k825GCJbKfbsxMyTr9AB3GMDY5EnaxLHrKX9QmSVuyBs3uuvg2x54WaGAbjZb",
  "key34": "3WntXq3QeruAfY93TR6XcFG6A1SSCwkxkDWJdbHvDvXwYq5xgj6PSiTTJ55vhjECUCivmET5udk1RTxaJgfnS8of",
  "key35": "3Q7VhQKq7huWBveVHRyKAGMm2HzvRm7sp8hX3TQBDpee8ppYxVQ7GvCw7YKy4rr2JdgecoVr76iKQrSTfrux1j5s",
  "key36": "5nxXWVfRtZp25jMYBo929yWNQAq2wvUGYQmkH1WK4qPKLdpMiY3zvnYuKZCvm2fWCtgFEJdzTx6Pc53DeuMr7pLd",
  "key37": "3m6hVx3TZPJSwtitdYUxqJoA3DHZNCpBMupzFGDB4hcSwSpR8GciXRv53xMqgJFom5iAPWD9hq3WWyi7R6khgdRj",
  "key38": "5hWHcgbEVksAeQMbY9XB414SztRkEto98KU5MAs7yu4gGuyC4kUNX5iroodw12n5spGDykfPSr25EMMun652GCUx"
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
