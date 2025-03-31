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
    "27GKW96ku9Akf7QFWZaQVktMcbNKbrFnTyyPwpkgbbDdzJ89rXKp1HT2TTdJq7bwXyFGhttJTErLbhEVXZmohMR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Ga8MLsEfY8t1YVpAmiGnvYMxyQCcdCQ1T1qdSMoeGThXaXMnEt1kHLw4Dg5KkS9yiPbwCUtganpGjpcTmCSeX7",
  "key1": "5PaAemtsDpBpCJuh1JXmWgZCnkDKUiHtWidwR8NgJX83VWQ2PWjKsjdEFcWLXC3NiVffibeVN5hPgkuzQ4SmNv4K",
  "key2": "4FW7YAyaPLziHNHrj7WuMd5oaT8TKLHvBgomcmjh5wnUQdXWcnpD9kpvSzD4MbZi9SX73ZfqguszLygiLTaB58qM",
  "key3": "45pmXhb9DYiRtqFih9DUTYkHY1sN9YWTyVPTNvyavXkRU9H89f4BJ76HGfTbMmfqpWT2gzorssn9KjZoxFG6LMKf",
  "key4": "3vFoKjS64rQLTkGZsHYiKxR2R1SYvWDtactPuguLqDGArfXPXQBQttbviXRpi3c9UH7ELkCpwS4kxRs2tGDHYYJ7",
  "key5": "aDr8x1u4PeFEsGwZ1faoXucaNsZ4w1uUhwsRiurMMQvtnCgoFrMMPC6qaruSbrLGz5aWmLVDSQ4ywyQxTNpZMTT",
  "key6": "3D2VA9kRcjUyHeenjpMxLcUSWFfrazSDTTcE5YKXMABGMWZaEJHkPybgBzRFtQVMryskkky78HwRWLk9LX9HqKzh",
  "key7": "5vyZJU1M89UdDjA1TK2cCedySBW8Joi5KuLXzcufA9R2dtBQn7sFr6MYEujbdwnr1r4YNAFgQm3BoQodkThitwwK",
  "key8": "4Dtc72HmBtxfwS1bTYZKUgefJQD3upCoGs92ps8eaBsSjsmKtchmkDZQrqbjUyenLGuRbekcYBhSdprihT748rxP",
  "key9": "4F8mmZp3WZXYvt97JWvXSncx1kst6nei7DeySB96bvfmDzc56RKGuitCp7TSHYk7nWNZpyskWhccwFAofcSSsyZW",
  "key10": "2QxUbnyExkD8QSvNa8ee31PQFMmFuaYeVKGjvLEtoGp8hyPbJbG7YH2FytKzFARViENhmD3wd71MYwWrPKyh8xGi",
  "key11": "3zKiKSFYawHYFafJPpTRGPabn6ry6khPK16TqhVuHs4vpNRdLz1mxXefRst8DrdiQSJv3nCMvoNLXKqvgcRrQi9d",
  "key12": "37LFtV7JbEb4ji9W6rtr43kkKDDnhTNBg4pBwYMTe5K7mJmJ8gWTndp1mi9cdBougjvsKfHLTNKc43UNVq7LZNW4",
  "key13": "2oXQPuWm8nodkHzhGQzLZ4AFfooRT7rcSzBtykyGUDBMjs6kaywC8RVyzAtcCwSkiWD92F7YaTLeVWwRdheSebAn",
  "key14": "2iSHyqPsdn3tqZnLmrDwYMp1ose3ti6wouYcXVASEkWZfpw2MGXDkt6NxydF73VbLx7L8UwbsUAnEWvsFtepwfxz",
  "key15": "66maJYZ9bFZRutvengrNAtDKDanwS7MbKXQmWeEozkVnU7SpxLc1dGKuyDGPxp2w4uQWKxukfVu9Nk234HeJ6JVw",
  "key16": "5k1HdT3oJ2cTdUPVyacZA2nGAaQtpUWezinHbcs32zhUP1Fg9hzxHc9Z4vKLkAmQ3kGTx3eUWfj4ZauE86yiArfP",
  "key17": "UiACxtphUkidkDHdYcQkhrJdYmPAZUco6A2deKR1K9YEBMqbtXRJeivC2NXCvbN687fQBMWESUtia3NwXSW9T3B",
  "key18": "3jVhbMk9CoLrzxTadwW2ZTTFwgLHHHTiRqaqZrbmRYUCijM4Sx5qiRLszShmWbF86a6qfHg9JFTw9S5qHqFRV2u",
  "key19": "qpxrdizcxGtuFNVfoaQ1jEDzonEbEcpapfnXz1ukbZCM1t7dTFpDCDrD27f5YMWeFmBcebJrtvxzMfVru9v18AF",
  "key20": "RCNeeKPUc8CZpRx7uJw1HSZRY9d92DpMGjfbcbDkMeMAwbkc1pmb79ZKJHVbcShpFTyfQAQxtX3phNaeknzEJwM",
  "key21": "5TWdbRjLb23vAY3hDQp8dQqcME8PPA6qjQxJAw39g18oQgxQyj3J8R3nNnAmRQdC6SFx892FZWaDuUyJWXhnr5oq",
  "key22": "5eipSk53cq9hqhyCEUrsrcycTEhHVw2NsXTAd5zRQQJRMpANMEz5BCfxsfSTqXBo7CCauxUePwLJpz3acg56ffnU",
  "key23": "3i3apensADayCDtpUoSBFEk4czeoCxrh5xsVvzRngeohJqHLNhi5yc6trBxNs53mv9UtWjnitLWUwJqkV6pKJnju",
  "key24": "u9WsbRoafgvpHo1SefrYwB4eMeRm23CqF5NR5MG2tjrG6kjEvxESP3iwK4gpnoBm7fm8Vs18rbhwa5wg8WcAs3T",
  "key25": "4G5oKUWDyM58WcfguSRnxiNu732t8asGy1BdQsgobP4NzFUkP3wzymukqFE3CxUzjzvWhwQdZhhYbjXvDyBAzGpp",
  "key26": "5K4Zt4dtYFyww6denbhWgqMj2hoAFtyxe7L4JmoYPmGKZVzNk13vtpCjJf2YXMZLHuSYEqCbMCt4B4JeWCSz5EdY",
  "key27": "5HeZ3hHMxgYJeF2LtKFXXC8WhtGDWgrEvnsFa1CJXWipws2bo5fBPRJ9nwtNwpwzSTmY5SnH1FufppnDtsomiLVU",
  "key28": "4A4bZF8WcEAtDcL7yXp2gAXdBjnRfSRZMH6S2waRk7dAXQYCxV6NcW8HEKWNE9ScTrTVR1HZw4WnzdDmFKCvkpN4",
  "key29": "36GJtGBFm7TF6mJcCVyEuEgxJyn4LKKzmtnzSBMFLoJPpZPzFspYikbpWqrcx3jZ3fsZjDkYEr13sZRaao4x1PTM"
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
