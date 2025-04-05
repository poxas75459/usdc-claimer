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
    "4mfDJuKK7soXDsenoHmaedqaiVgqAgDmrkpfeDdoTB933VVaLAnXRawMikxNoRjDEFqJTKA642LQPE6jq24UNUby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USdR9d6K6urx8NBL6SAnrkcbaG1NjiULuHmRmaxMLTnd7GPhpeDZtRZf86tS5Bj3aDiM5nELBh9tcP3fm9qhR3K",
  "key1": "4v9PuMnCxt5mpbow5x6AnVe7WnZ1iqf5JcHVKEmgUrkthcXvUPDakay6ANPonDK6PNCLm1u2XvVMfBh12RjrqTM6",
  "key2": "28WrxPZ7y28D9goQnDn9qRX9wgbXUCq4qNFxwHDUpQZaGdA4U84xQFtUX6XpoVNMPC75ckrbNKGyCSc8nYKsvsh6",
  "key3": "4oPEurjMuM9PGqGS2uwu21vdcKi9wvy6erWfChiosmtHqD5E4t85mtthunAjsWHg5Ng6WLLGU1c32xtB6dA4Pekt",
  "key4": "4CYkMUXA3TPDr8YGAiPp27JScXRaDFYwmraknqCo8eB6zFR7mfxQ3NhmrDj4yYbnmZjcGSKMVGo8nQqQ367hGpc1",
  "key5": "5iSnnruKFXUCF7zP87Q2YuQFbzCXPm1XF8T6KSkoYwvN2Fgcd81CDc4NNP8wzC1zRUsMq7egbPQ1YdsXtmwyrUeR",
  "key6": "YVfhT5DUq13cF8ZrEL1Qzm53eWc2HNe9mXwfQSLQAQ28XG5gQR7Kb1KfZhdJ5CiyctVKhBsGJDCbLk5CzZJtuvd",
  "key7": "5RcCgrBsrcvMjB72sLoxZMB3ZRRfBJbayZgviCx8aEh5U5a1aZ4qQS5w4LbQJuDiJ9irBm5D2qe7ESYLuYKgL3nB",
  "key8": "5C2E9rRxrDH1UpSiefKiviMYAWVaqsWAyq9AArw7bun38GEADWCwTjb3qskt3PBHEWefy4Hi1t6KTtdLtsEEnaAJ",
  "key9": "5hGRmyXGLMgp4UPdKrVjwpVhzaB8DQpFyjKoMQ5rM3fwV9bQ2XXMLGnpzq39vHqVepbihrnw8eg1oXohH3yZbomA",
  "key10": "5bfeCVzvpSxZLaSXSHUAxPgpzM7nwULJQbJn3w9UBjtZNpbPdD6QmSDQDPsHseqNKDcDBaBmzb29FNMDhSKe2h2H",
  "key11": "2pBhbYdATTE2p5r64NjAihgwVM17gNFdEBF71QX4kJjML1xbjmSwJemyRsPsviYKZA92T5oCDwbs4BbzEutYYF55",
  "key12": "5pm4iZuscYE31A57a3dsqLiMYF3MLgYZ3vKQfjDmfGqNkgAcKrXChHWasEtwjGVtfTfBcrBRhv5QtNmF7Dv3kkWE",
  "key13": "4ZJxbfTRofrvyWcd2699SX6Sh19oNGkA2FjNKez1Duye9gk4GUvWLccrKpWYLG6hn6WoNDWSPPLebP8oPgaLb5SK",
  "key14": "5DsuYZThBpNdd7ZRiWboc1CJJvNrqFw1MYh8oL4juXeFmbSsWtWch7TKNUedc6S7pfhhzJUNjT1NysitFDk5oWhx",
  "key15": "2n4ybCAiFz5E1Q6dqnp7VH1187iWgzbaEXZUMfCQYn2nqQepQ7nwtmAjW2gpoCgZ1WXYzctE9TX243rzmfvepsNx",
  "key16": "Vgte2CzHxfFeAccp2TobQ13jgUa5bLLEFKoYU9YBpQabDGbBDsRHxSBoPtwdffb5XCPs14fy68nUFsZybui94qJ",
  "key17": "4eNqx9YvE63gfMNqKyuiCe4VS6jamG25BEv6ztQ4yiZrwpt8wxVbBQfqoLdVa9bnDZHhmxb9Yzu3h2zumb93kJBa",
  "key18": "3e3kjuxPjLKDZq3a38apvVBMFvyKmKKjo4bsWkX9uZNxG8Pad3HXYPGjazkAzyLoY3DKzwPz554R4g7QYEN8Z7rT",
  "key19": "3cHYgU1Hn78Lvph6hV1441rKXq3saJrFxP9wGmvDykaYnFyqecHk4TEfdkMe5BG7nKPq5yq8F73HySpXGh9Bbg21",
  "key20": "55GAFthoKuPdQ52kxPG2oPjwLNuqhofMCZjMDPS5CBfspvKdYmDrJGuBerLTewUjbUvfQdPtNU4MfrX65XETMXj",
  "key21": "5vphFwQzTkequmJ7eLo19a4hufiCNcZkSayteydQdjVEg7njkvVbNUUzvP7Nx68NrupfXdATT3ZWEJAsdXrhtQBw",
  "key22": "3r3yvVSHFMkGK76fALF8CBV9fSgcASSM5u8eHuEq6Q1NkCKTmmsdjMVXq2HhuYWNeWMfd2G6NngKXSdSmsniE3JG",
  "key23": "xD686TBZ6rhZtBR7XxsjToCdXbNq8Ebq5LZR9jQETe4s5nMPB5hezuSbDNCtEszHKTrkWcVq67quQw2ohhLGAYC",
  "key24": "5D2qdsrkdEbjiKUqFPSL92rY5ySfZDGj5XgmreURsNVfh7Cp3MQH3A2jWymMJNWzGeenRhCi2cmhgshUHVCVqi9U",
  "key25": "59zzALNRRRxZSS4TQwtYFiTLf4szzKCSzw4Rbv8X5SVJrnVg852TnPjUz8Bfpizz7LVgFjRGpkqYqDdThATtQkA3",
  "key26": "3T63zqcS4THNRKJ9AGpnyCEvGd2W1NdWLA9Y2uYjsZxNxo5k7XYKxjs1aFcbrxEBmPaMrNCSc3FHBg6buk26JEmL",
  "key27": "3PQExMqmhfGNP8y12CaTkTXAqJiTHSaH5Jy8LRfE2m33pT2Sua7xn3sQ3xfqSkHoafTMeEznXutmc6WaED8RvMnC",
  "key28": "4rJwn6akS4mDjK71wzbuzAFFHzkU6Rmx6VinyU3zL5xu78qmXAjTG7Cvfqp99g3YPd93KhyJFcqKjfrZV9PD3CDB",
  "key29": "5WGFwzDesdsJ8vMLvFBe5LzMnd8fGbNAU7ytUFBzC4dxK2BGuRvAbh9QxkJ3HeFwjd3gpRoKxcb8BsRNH8WQ6esc",
  "key30": "3nQkkgt26WYexTiu3hiXj4mnhwgdfYyerGpz1NoPPYFZfHVJMxE8XFpVvp22WHQaqgTcuvZkGn831vqKHrEZuKT7",
  "key31": "5RW7uGEUMdGJbGnqaLYUS6WhjLsXrh35X2hyGPfqqzQCY5RzR8T5fBnCAxLsZPofCZazFDJ2pMhJydSa2U9zdeBv",
  "key32": "4MJzjkR5EvR38dXtFVJst89FRD5H7j7eY56CzHPL8nTgvNpKQs8niUruQxC8XsdL6c2a9bLuKwho5DoyJYy4PKPa",
  "key33": "3xB7dpcqsLH1jM3eoNTr3GEYTgrJpAiP9bXnMVdT4NFFbuqQiM4DVC2RuCMMcbrKYa1ULJN7WcQ7r8XBrLbFxS26",
  "key34": "u6x2SaP3VMEXAwPNPtc1kWNLv47omdwMdTjtSGLcTz1tFnmkhct3yX8KnD5DSuvtYAaqKRbbV7R6A71XSCP3cJ2"
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
