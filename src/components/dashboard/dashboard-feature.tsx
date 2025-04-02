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
    "2qA93gieYDSTpN2pZgLQharYEEhvPdU2LQwX34WMTxUgkkJaKJ6g78iNYdov1PSEELcTE1ERVLMzWCaTyfekdXAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35n3axcByPRPnKr7yae6iDh7CrZ875WgPnVvzJhNG5Bs3ZmCKvwGD68RHMYR7QerkWf1UKXjRdnp7QPNvNT6uMdg",
  "key1": "5QEpphCip9WmLUjzXJrb8ghk3disPaHuvgYX2ihyBU79zguw9m7sviwfHeZ8gowbm3HZPNk5kdooxEV7yKknLtnq",
  "key2": "4Uxx9dD5mng9H5ghRWZP75xro8YN4ghw9WfLpe3Vof1iedgWqtgSq4KDYUSGc1hBn75p9dirohQoBA1AchsRcs8H",
  "key3": "5UKP7XETFPVE9XnZs16eWqUVmUY4HNeE9fzfcYs1YHp4wwX64cMntj4B1XAwS5BADqSEXALyhDzG7vNj2JGqbLjz",
  "key4": "iMcqW1fKK5dQ6tWhTGrjfk2uyQK7NpV5V3Ye9HmE9ZHGbCKTpZzdR6qZb59rsAieqgpzS1AeQ2aypnM69RrqPWM",
  "key5": "4Bjjg9Jz8moVZmz5yX5riAWa164WPg5gzfkrSskHFreJLhm6gHpuVpHaxnJSTuHB8YKgBwgFjeMgX1pdg1WQq6RQ",
  "key6": "273oPw75ExMGcHZCAjpueTNwRhaF6ixtLkB9uyHemRom2K6su6pQtwCT1w9qnv1jjf62aFw8YEyET1dRC195juxo",
  "key7": "4wnanwaFsmRjPNp3xmgUBHoU7EhjbwVhyypD6mCQHYspG1nctXoiipqZFwTNM1fP1uiTorsHrBkenCGATUzGQTgD",
  "key8": "FUkphSPVhkUj2GYzeQPtCbYXewf5fYrH63BYK5rD5rAhFcwfdthfcYk8svYxo1aQzXXJBvfQiPU5Jt6KCEqz9zV",
  "key9": "4LXUM9mLNPekMFJXLtdkoZGU8Pk6FeeuN1p4c4A7UAtFCpFa7DgpSATFGSAnvNz49xFZ4wkfVeMDtck6kFkJFATV",
  "key10": "5djce7Fxs1HNYdttfzXESn7YTGpgJ9cb5sYixnLb2bJaKmc3MuQJdcKbvcRnuAuU9Mb25FquHzZZYhaquN2Ehihi",
  "key11": "4LAa5iKTapcTWzjD9f7VgbsCpr3kbu65XU5bHoZPJQp9eSRSAAnfVgvxahq63boU3PTnh8dpGpkXZQYXAHdcfM9b",
  "key12": "4pmNKRuFKbKHhicbCCu6tbJv3JqsSp6mCNn6BSr7zXB6JBeq6wB5Q5XEdgeSo2cVQZTvtVeqm13JczbAco2Hn46E",
  "key13": "2n18NNcPunk1qxPnUU3Lo3F3764EgshGT67FncqXgYHqehu7sAHkZ9JSQNrurBhxv3TLN2LGmQUnA2tyPwPhvN2K",
  "key14": "HuSp9K9u6mswtUAVjM34jDpR2XF82qr4RFmQsMUUo6cCDLbwqDghqVkJfm8z85xvWmrqegxpXGEAJLGraoyDoaJ",
  "key15": "2DTcSLtK5hGJXy31VTDPCHuWMVPVjceTYZipzmkqgoqvMKswgANiwRyhxhv6J6koP5EXb1hCN9Jfsy1KPzNJ6VRw",
  "key16": "3DhZqSqYsdmtF6Lg9g4arRbYUBh9iqfXE7vpFfB9WgC5jKQqxqA1eUNFzreATkDmJbxvZUFsQ59yx6hNs4F8uHwL",
  "key17": "ePkhS9gjayc6n8seXHDqHA34ZBGUtACSTwLZ3zjSrASY8baXkp1JdQFma2c5kP9PmauGxcM573ehQbhqJr81HBc",
  "key18": "5qGvdLvCmamD8QKxsUhx84aHkRhSs6eDLrTY4kizwwpKjXeMY72e9raskESacnN1HEayd4kiYpRWtPxaNAbPjwzA",
  "key19": "57uxYPMKYVk4BsQVKvWKcvY9Vbiki73Ev3gPoVJg3jNbodioeRaRvct8YLeekbjmvJJLMUzaCLmcjGSZJY1zQZzV",
  "key20": "62nuyuWGozdYS1C5CQYGoWuxaKPAfgdG3hzAen433j9EquwynPeapMpCLoJG3bazVGx7UKCPKKjGKwC7N9pujV2o",
  "key21": "4ADxwaAhvuBcGSP3Pk8aRYP4d8SZfcoQYHr9vc898XErq4aPVzWk6Rhs71uTDQjEpUBmRnFsA7ukkGcdz95W7HXo",
  "key22": "5aJmgC7AUuSNkiMje5x3SQWZQNYJV3z8yvSsF3PmTuPRiMdKD8NnAryuZEdsbT6hLxNVsi5uWnTF7YtBrLRpUXfW",
  "key23": "4JwMvSSTjkTDQLbGRm3M7xpetzb6ecmrEVi76vjfg2jDbUEcyBsMeXBaS4HjWSonx3z7q7wW1STS32Dar49wXfrG",
  "key24": "R5yjrty6QStq46KoC2MtB95ZamrhTGdx9f2hJ9hcABTkpsouoFyXyXMxMYKiW9B83Gdrta1RWD1QcMc8p2TW2h6",
  "key25": "4WHktnh432mYBQMvSDdW27UiHWw7oftz1o9USMya5VENeqYocAWxRVTentcK8X4UgPhWUkrNxvWhdCGxzQLUn6G2",
  "key26": "25SAbTucnpc3WT1u9nizUVrNHTaSQbZQiJkZUTdiLhJPqZ2bRdSGP8NuTy1Pc8uAzCkMocvLjasic4dhAhTbdrwm",
  "key27": "62YGWZwcfYPrAuaENvcTho3t8Wcj2e7MrTDtj715JWAN1CVVQ5zcyukLthYUWDw4b5jhfEbq7N6xUGS1Nnt4Li8Z",
  "key28": "4j5ePcPvKsXaJjPFcPAwsAByGAkXqezzAPx8kPiUvQL1ombiZqK7MM7T4VkxxJmYiFG5RCKjPeMvYSaaeLJS2AwK",
  "key29": "36WxeQP3pqGMRiWXQhi3w8dHy9JwHBKAtmddvzynuyiD3T8Ny7sxAuC7ve8RNEsqVPo5HRRvyJGi3n9Jkjz4G76h",
  "key30": "4nFNK51d4qn6Vgyi2v315Zs8XfMAWAdvmzru9qdsttMUsqMBZncVcMP4eWFxtMcfpFcs8zvJBUAqo5FhP3YFbZTy",
  "key31": "4dubfsCjRrNqVNEA533eTC468xHVbRPB4xs94PPfLpi6AT7LhwA6WpdgMKNXb5avkKCz4vAm96hyDzUimkyBnPtv",
  "key32": "5GjVKeToVzocSoQW9b33Eu2J8aBXaPpBtbqLZJe3eyaxfkbHunPi2Hc68jbvgytYYhEx3k883deRg7iWxzxrQAFG",
  "key33": "3fUWs9DDfJ3SQkZNvxmB8Sy1TJqHxmoHxX71YyizCene8AvCxcNLnnTTQqAYtFveTaWvQWshciCwonahoBUedFzF",
  "key34": "swRhvJtogy2LPxnEKvkcZrn4PDgjPwysbpWW19MfAA5jLYKwZju4k7ah8sCNXYRhxdRKZw3CzCWtHSUrbUqWyXZ",
  "key35": "2ddc5N3f4Q4mCgvKsvxHCPaP7pKdSQpzLKFakJxAVamneNpN4AKc8Z6pshUh3MhwTfX2tEtoWHZF8kJkBzpoopd5",
  "key36": "B7A9Scy9rBPkgJ2ArZY29KG8dvuxDihoJT1L4RiQpEwJno6eRHksSBov65aLHYcDSZc44AHWj7P5F8ZP2v9rDiR"
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
