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
    "4ESC3C9uwRztQ5PDzPwr8AAxB3eLUmjh5fTQiJFqWEupU9Kph9UHHPGGVzLNo326DrfJue58UrD58tM8gtmPLoQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYqNZRiXGTUTZ5SBX3fa18j1e2raS74bouWiShBVVJzk9vKF7hKdkztMX7A8YhUw2HzirceCYk2UHj1JKcW5WhK",
  "key1": "58C3kp6htspCyCLHhi7DJAHfXNA1BPfurmWy1ZEo63tbg1XwY2ayeJgwpyJJN5HXe4P4Q9SaqZJFJBZXxt3khc8S",
  "key2": "57hJYmHUxmPVoZQxfJu1cdbGaUderP5B3befhuRzU9tW9xVKe3SSPxcUYbcY8tPPthz9re8cmUCwTD4ktXEZsYmh",
  "key3": "KMhhXCaMreQwVZPFHmHefj5yjv35FM7r3XvUjKpov6q5cHfnvRwCb6uhVDFm4rrjGe2an4mGJ2AaQBvD2nkLTkM",
  "key4": "8usoBigCafLRJVrtKHG18fZmMo2c4xYh3udm1vwkEmUWVSS4AL8Y6VZay61QCWggp6VzjoSyfaV618dHn8HNUP6",
  "key5": "2XCsEZh6YbXumAzSPrDAwZeksjKMN4xY5oz6rKzK3ebBnTxqMfXGmxGhDZ9YkM7GTYeneYPYtiYbPZ7n3UDrzeJa",
  "key6": "5u1izunqkp5gg1Eh7VUbSKu45TyY5LQqGRWngeH1Zguw5Gp9BCLtiVemFR9A93HqLCTBaMWbrGNdSbSGhq5jNXhR",
  "key7": "3mUvf1eXE5k5RcPFpkwhqkMfrYAJUvhkeL2SToFgWWigzwcyJEJbueNXr98kjv3xxQ8cZ5zU3S19Fgv4Q5Gh1sXc",
  "key8": "32Eg12tujjmHEJF1HU9ZG5BTg5VGodCnjWof6bV6D9Gsd7ZSR7QeJphyM2dVpCYwyf3PwAPoPcnPVMBWhUST5V7K",
  "key9": "4ytUyw57ABw8xS98B7PJViLecGd2bmBhQD5Tz6XT3kH8tuY1eoyaf3X8DuGXdf4uuEog2ZMBcifw4UmKTJR5v2GS",
  "key10": "2n1gRfqF4YyQ6g3jn4fo1svpfFKZLtdgsE8xLGVEUvHEZPCWDboas79Byc4Q5rFQwVuyRY4YoxaSXRuPMzNDvo4F",
  "key11": "3gLT3MGnhvC8FhwX6r1vpU26d31bTencPkwXNjp5swdV944Ndrk3kTsWxhAHXLGMGMDUdRsJHr4P62rvQN6gjpYp",
  "key12": "5kGqZSRoJqS4qMk6fxqwvc4yxij9puhYwzj5GYWywrtKgjSq3zCfNsbVQcTNi8Jftkuq5r7VJpBDxfiW1pN2tNEk",
  "key13": "2xHBRKSYkrRPnvYFhSCxNQgerNT8Qg8oMRfS9j6o1CV2EoCemkn22TCE1cRwAb41QRnE7JE1p2jQpPv8qdpQthNa",
  "key14": "4ANgvd8cmS2bfBFteX2DVm2MR5jB9X7gT1yJDtpaeGkbjJf1Vrw5v7aPVjGAYQJFuenwqVxnetHg5ZFZfUECnwYm",
  "key15": "3tJVSNncWXJUTgM1GgonFE3pm2mnNaCkSqVRRA9fEygnueRS5GuY7scQcEfzJ2TkH5zdkzsaPFvVNZsGsp6hfP3Q",
  "key16": "4E5gsf1qwwFx588qZ6APXuMYXUNw5tFYLEhPTLvD5dzN3dM6frBP5D5AYREaRkS6CFWQGwMg8TmHPam13HvQmmkw",
  "key17": "3TTsUWF6WKy1req84BdS5UqqiBV3hTfg5g6yEeXTRB1obwoW59HFUtKBDbMfFSVcD5zTkZUVgVEWKm9rabcvwr7y",
  "key18": "45rwMWpDSEh8iGoYsTgqCNjtA9htd3qkSS67anokYXCUA1zx8huT2TC5QE4Upqwp45zoQuMRGDe1283Yh7FnJvmN",
  "key19": "3ZQqVm2gfDvxVKbwj8CWtjHMp6R9zkXLeRM66zpjrHiZt7J1MTUCJvs7YimSUAy4e6RG3MMpN65XxvhrmAnwaNu4",
  "key20": "87g8iQbyBXesC3bsJ75uDwpttL4mwVaGuzq5qRTK86zyj3DdFz9sCdChQ4buNJbg8jJaiQYqQC5TwJUdYnBDtZd",
  "key21": "4qRxPgGnWyyZNoa2XkTrh9xS8bk3ibEzXfhga74ycSGYipNe6MkPRBo87PvVph2Lrr8HFwis364fQsjXPjcPvJop",
  "key22": "2UscnSkjopuxrxvEd748xad5rELvCHUMyu9H2FHR4tMXRyttE7HdVr8V6qK8z6C8DZtwPcSW9pMg1uFXpuWfP7kQ",
  "key23": "57kG78yTgEuNUuJ9WRj1cgutkFA3PC2KBSsYwUqu5Vgk8VTSkhuoSAsyTJ2tXXSUw9VyzLtHb1nLdkESstLSmS1P",
  "key24": "3MWMdMiLnGARJKc8tJDJaesnfniKhkf49zRpLjvmRL1vqj93vFMyCtVYtQrywpNrSL2DJ9trdYRtcxPYm8ECBvHk",
  "key25": "5PjMixtNYZb6KBkgs1e57fF5PtxxhG7WoBUGE5YynHmDmZBCLDTB2LaeK4YqEr1gpmJQc6fCpzH5D5gjVrSX9nq5",
  "key26": "2e2hu9Su27YG9hz91Zk74U9H9yPziovqQ9NXm6jgkVRZ8evwhPTJDyERsmrTHNk9sbof4hiBwDZDDcNyWYzCJudi",
  "key27": "4dQLADVucNNAP4MZBGWyz3AouAUbZp6RU98MDpEj655adxts6o7m5SmBnwtCJk8HvWHzwigfCntqunH1XiLXPBs",
  "key28": "2vRZFdJTB98X1KtJdu3nAKQXBKCSJVnvpvy1HJH1HyTqzdgNjpQLSkYsd5MxzMLKhx1jFLd7B42A3dCrvf8VzJt",
  "key29": "3vKzeFJke6jnUn7JdzvEbXBiRQnpa59kpB4BfTvdmyGcNozQhBpbftqCQ4p4HyMFpz3BihCVjbKC3oWThexJPVx1",
  "key30": "5Qfj3joShp9ZDWzutksEziZ8kNrFyyULfZgpECL97BDcyVZEdFTYs2qJuUQUgtk5DrtUi79akSig2m45w7118rLP",
  "key31": "29wCYibXVY9TQ5mE3KxnTicMtuFVyyTTy4T573PyTV4Xmn3rXtEL9Rq674xyUPxH1w5dsfRN4bcmxkrcXoxHHDRC",
  "key32": "4nTomqC3kQMSfiE5RkngS5d4zjNpQYar3FEyKHLn6rk2Dbp2dH8QLYJeHCZHgt7R2w7QanMGyex6ypeSBgmnj2YL",
  "key33": "5F5oiDveNz5a1dV8ox4NcQHU8XkHasRMZ7XGRpKzXFvV4sZi2PF4BMK4bnffo76XC34CrkP7Z4KZne5NNqAu1LVZ",
  "key34": "4BaMSz3ckYmvYjGwVNuS1tU7ASUVD8gbvgj4gPL8ChJMQXeofJJReumGJ4LSJzXJpa2tQgeumNWFrPYqQEYBwGaG"
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
