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
    "5Jmnxr3VkUVX8fbDfvvTaZbhzXibMmhqVXXNMeAKTqCfxFs8nZnfMBJYn3htFje92X2Q5cXRtNRnCGHfLDX97ZNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Jw7nrd6fLZmBaA4jynGKybRXBimEpmwZgJv39ZV1XPbjDgHcapruVLNdJwEWZUtakqhdKQ7QYjabW9HpFvfsW7",
  "key1": "aVWP86FqTWKY6uAjtchyZDpbJq9kvbpRkZEfpbT2ffoU2pXm2ZPwVbc9YciSwWp8SD4crooR87zy9QRqVsVS1Vu",
  "key2": "2znBCSKR82fnx9pZsE1vFPF3enhexAy9u49wwB6UL4xTyBvDQnUtX8FigctcYVnaFdbi4AB8z6tFq97DK2n5QUDL",
  "key3": "vB34WGJ22woQzHm4So9CkEKjta9T4RvFuNf8cmyJJFFgLKd12BnxgRX9CCC7zAhfJJwHdLHzFm9DyXzGNgGdZkA",
  "key4": "25YRDcV6kxMERJTYRifbaugj4ijwMvHDAAmJ4toRyyCgfc1THYDL33eR2YSBZ2PVauUzCWB1Rs8D9cHLdhm39bdK",
  "key5": "25DA78EEbp6ftseEfh35V8yNeM8JPZ2gVYYA3JSvFvQ1UPtQtuai3LEkPmnWSH9JutNvDqCWK4WsYwykdVkTqS79",
  "key6": "65rqXj8R2gNGki5ji76JPJSyGkiGCUFeG1mxLZyxJqgb6PMUPBqtLmnPze5kZJkdbhZry9yosfRwN7Ph4diSjRvY",
  "key7": "4ub4axDxckbHrCZFDMwg7FVhzcXEqH86BxYJiSAmrEQKYifxKDu4Z4KuFAGwtEkz8VqvWComZzioyvUQmRXSFsLL",
  "key8": "2WGd1WuHxh68wWZrsHRP9Coc2XsKkBiP16Aucg1znxC3x3TJETH9GD1VgUrFY1cDaPhpYM5C1uu6uMSDnTDGt9Go",
  "key9": "3QjYK6x28xAVohEiNG9c2KXA9sgBKsjDByVMMS5azgvQcf2VMra5AakxhyMZcx4Z2UHzDiYN7Fb6Cm4CD4V7c6CF",
  "key10": "2tmc9EcRTw1GSjsjVPGFNPfNBSHiAN8iUDv7NNNxgCWzBJmRJeDQ5u7RrPhXUmD6vVPSNYYghnRQbMvpG1RQy3kX",
  "key11": "2eJFtQ7vm5zo4AjSsf8o2m6anbQjG3iCEag1kiuWa6HGiH5C77VRpTAE3EWgzsG4PYmz87TDHHCviTdrdhHE7qJ9",
  "key12": "5HVHvYa9Ds95C5342TRxcwkq8EePqzwmtraRrYrHQ8D4HPbNvA5ZkoqbWGcvQSbC2hk5NV4evCBZ8VK6DWxPsEVR",
  "key13": "4cZ6akDcWpP2UfdKePs6jKiQ5KBXwVFTdkdSdrZ1kVBCze8XfX2jS1Vdp9SK5iBD2MGAwAfptnr9RnjEmtFP65oB",
  "key14": "3AyQafGZgswX38b9GFmreR7q3F61JUbzvjgfptTPDdkGyYdBSDCQW99YMKd2WrMuowGrwfzxRcKKNJ1diAPcJNnv",
  "key15": "5iir6azAc8t9xNMq1m9TbabeMzMvMBZNAh1GNZa6hNKNeBCCD1YMbdwDsMAUk4CshDdwknTiNKJvGYG7qjG47USJ",
  "key16": "52JAu3HuYYKS9YQdFu5d4iWiyLer123B1avpfBJqbqvDfLTzbN1sbY13vqBqdUHLLPmAZ5LvPQJUUoX8Yb9RCFgW",
  "key17": "xiF2HhVof3rSjfj5c6GpXN9XxLzJBbLbtwfRh4pqsn5hqbzKM6bx2LFioJ5X9unRKcQLzS6zzUAj9YPdmKqkKd2",
  "key18": "4GjKt6gHsEZGRXkdEWVonKznDzV3NjQuNZqU5Riep1vpVLT7Ut6DTS9TEbTH8tNyAhq4DytJm2jxhFESugsfi9JY",
  "key19": "3cZH1eG415YtMRaSZzVCKDbZzDQmfu68EZxsAqWVJ1tvksUq4B9WAfAhxNjRGG9mntwnAtZuw6dm5Qg9rqa6DQyE",
  "key20": "3rH9yvwAswDjQx232Fsdkf1iVMY6cvSHKZVH5dZaDwhEx3rdQPrJSW77ZwyjHKah1fVNL8B7KBb7EkryaPmEgYaZ",
  "key21": "319nLU88rdgy8PmbnF8YQt78vLU8AaTLZhMkWrjY5G88xvHDnwnVgx5eGcccWaTrmqVzUyD9mhPArk67NNDspXin",
  "key22": "4mnG7U4SGuMcrLtXXL37VDh85kaByEpzRX7mhj54J7Yf6P126iMG1Dw2P2BJKFACassXJmeWBWJrEum9xtywS59B",
  "key23": "sq2As7j42bud1S2jzubsNGPA2ehgxpX8YARaqfxhJ3npWfqxyCD7KmSsEhvWdkmse8pmZ1sfbQDvMaCdzanXzjT",
  "key24": "M3ZnEnxhVVohSU6B9dGmFDYTHPB39EJsZNhhdjpWWJ4c2Me1hWJgr78mbd67jkXibBE3MEe6EyrZyWuW38ZNopF",
  "key25": "2U39fDxewx7NVvch9cHC1gpszAvzx4fNcmnYCjBAVSfJq7A71Fe9PaQbgwGUkTssWVLcozRwJJmjYqFUguEcGkwb",
  "key26": "1ErEXhfP5SW8Feg3hqo9xxj8WyWfYXa6eB2N4BATVNEMC9NGHPu2KCbkomE5mqFg2NX61ZAbBL5wUJAxfy77Lm1",
  "key27": "2PbHUre8eRuMbYAHHfghckrYB2gZS53GWodoQmfLFyeARTEFpdRcqdaVsy5xkG8GVRFzPhU1xwnqEJbaqPs5Gjsb",
  "key28": "4YBG7Soz4wViJzKanpx6irjMM4ocxbBCb3ggLwDi8zTPFbKWc6YefpnXqzUZV6RkTXPWHs4EziQA4nmDquAr3sLn",
  "key29": "2SdSWHodEkvFYMQwAyzvoEAzZ7oAETk7gXucUcbBvDm4Xgv2aoixGD9UUshGzc5mgktwAp1GfeVGG3NJ3TJTTkBK",
  "key30": "CaeXymDHKUFFfTZksZZedmRQw2EEVJqcaPdadajMFGWKZeTZHjY6J66Jqn5w8oRahK6p8FWWnfivCcPB4nMsVgy",
  "key31": "3EG6AhpziBVhcbZrLB11VT5Rfyo9ob4N5aXTfdCckCUtjBu91DPwZw8q8xoUMhS9EgLsjfM9DAL7rpqquHETuAYQ",
  "key32": "4J9UtBJbZmZFMp2Q7wMz9Uq7Nb75GCZsMWeVSYpzNh19wi2TUJHfLZFSJsN98Tr2LFxn3FgGu4Kast873yRhA1gv"
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
