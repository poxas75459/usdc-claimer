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
    "9QpffWtSwF3gWiJFLKBkg3VhkfemZA2yy9U5WKeSqXnxGYK2dCYUFYJs1TytgtGGHFNP1CEM6j9Hi6AhfWB9SRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZT9ZYfDW5NeueEDDRPmntEpfmp6TaFgammVLrjyNvpsQoEcqo6A7MPh6Dn19UdiUqjnTRSnJoFMP8ej3GbCGGE5",
  "key1": "2tjpJ6xEYiny4PykeAp8AP82WJQ2jends6XGCnmprHv2Pz3xUVU6fMm641FDt3wso5oj8Fj512NhJpH2L3BwDuoR",
  "key2": "3XSM4KEsz6F5xW1i9a4SkG9vEZxZXhTm9PRzPNq1qmAsmPNZkxTi9zALY8BKed8WyzNBCqiMux7ubizbAbyDiw6c",
  "key3": "5QNKqUgtAPbyMyKSTC1jHfCT8VMoX6mkefNZ6YL9e9BVWmkVoBsg2Q3RhGcc5oCN33mTs2uRSDqt3twQkFcADaZB",
  "key4": "3FBv3kFxT5anhhDg4EvWdBYQvqvEyTUFPZJtGkNuby2JKStEbkvz5y3A13RL8c3AxR6CQ3dZ5TnSSfisJrmvrTyP",
  "key5": "5sjAfVS5UbW62yorxJRzTjLbzr5WCTuS6Pkz1A8idX91wMnEvcarvC8MadDAKuyFsdViD5JCz1aEPdm1Rp8maoaq",
  "key6": "4Wt7g9suHLtB5L3yrdDZKJJ3yZAbeoeSHtH6UWs1oguaWpB9twGNKZZERCb52JAPAVe6K6rLeZFgErHJUEYNCYLc",
  "key7": "58VrhAHPvBFgmDwaWF7dqH9mVTZEMVR2SJ4TXwx71Q6pH9jL96TZoKPRc2hgG7n89KiEENiDDBfZVYN9RUS8QRpZ",
  "key8": "4iMGX4wEXB4DG1XmczS4qc5iKFdgjZpoqCXxVvGHX5GsXvSWb1H1tC2VKGaVyrqY5DJn9pHbGyimvskyL83re7xL",
  "key9": "67G5cQY4gYSf2CnUHBCNZNX7i6ZPfrKrEmMiWUo614T8P2DAi8CpeGjA8RZCs81cTdEYJdug7Qhtp17qKxLgDsNs",
  "key10": "3AkTHKJ4kV9isaXAJ4f1pJo951ojjbCiCmtzRxrJZB2cD9ztPCcKjhcdegCVAM5FJLZYViDYXNXzh58bNXf6JGHw",
  "key11": "2TWQcuc7inXe65bYKu6MekQJRWRhZ3k8TYEcmH7RHrBdRz9Z9unYMmHyXTd3tUHyhtyBXN5Ff55Jt6Lco66wjMmm",
  "key12": "2wqQKnXwxnF4HtrPY35GmHaxYpK4KfgYtSwMRC6fG1s4xAw5GpXC83pSBtkC2GT76odCktoaFRFmc1Zh4v3FCERo",
  "key13": "2LP2PrebfQZSe1uEJWEX6wuzNoxmidqgV1841CsxJAYAc2ZswfsHiEKiPaNQz4gry8HLsDd1yYgSyBZFRFLvopzP",
  "key14": "3sP5S5bUJM8muDdUHSTXuqFNRoxu4M6T7Z34HtHYv8N6tVCJ38CCcvSxvtnu6LXgmSNzFukdFPWGYzLRZn9DPLMT",
  "key15": "e9Y6gfXN7E3ND44VNZDUHyB8iyCVRLxfpgBCJrxdnGuWXjAPBhApwQcnMbjWmRipCaRr8cxyFENJVmLtdGiehCB",
  "key16": "kXEs92RsVDEF6mzasgU85eoWjbwR6hmaQWTMdbFxoxMg67ZD3hTnpzdZrr9KwxcXFwk3WxWyYBCmPLcdAVkKXKd",
  "key17": "uLbPvjVqW8CPgAC89M4GbMJGUqCXYPjaNQfysTPZQr4XtFWNC9HHHFXeckzJtpRkXtLJ5S2SSPc1m6npRiNwbVY",
  "key18": "2m2SjZGCVReLDbGHwMqK7jkV8W55ZT19qz2E6jDvVRXMH2Sp4QeCdwwBLovCAXnS9p3MkFazi7TgkmcYV9V2eA5o",
  "key19": "31mLrd6f2ygnn2m3TAVGJWgEqnYL9jHuL1aqDenC3jzLvRqBuTgSu3jak9F9aF3x25kVH5K6MkxqpF84hcKHLW2h",
  "key20": "44X98HtKQn1qcGypMhg5CpcNUpMKAVepxohYPSsroa9RsD4cBXPJnWS5yQRSJ3tKNpjjJE8RCjYRubn4ufGKrwjd",
  "key21": "5zu4ARcAnzcqBaJLrP3mdRAGJpgP5duMLNNN85EQcWCx4phMtQ9LMjDDe2ptAJ87nMBY6XSFCt8ei6FwAmJTPbRL",
  "key22": "WT8M36bGvjsLqL8bK4D2NzwEQwdtkk9WAjbPt6yfdj5pGdFgViJq656Dv3VbU175HmE6ma9aeAD8gWHfccw6r8i",
  "key23": "4QS9dTrXMWRzNzb3EBiwhfLXKtd51PHLS8KRxQoqqmzTSstpPGQ7WJDL6qPW8S98xZdEzzsPi8DLq8f9Ku2vxcYc",
  "key24": "4swb9zEYRW6CEXCqcwNS6zeJoGxRmRrthvQjQEei9MeLs9uqQGhetMBHNMJeh5fCBqQdGTdEtNq1cZ36yJE4GT5z",
  "key25": "4QdcbWgkjkiGJMQub2jxcqCeFPpghLpSQt7mjXt7vc7qoqYJudQourw7qP4DNycUQ153NHhpFF1UHc7Ma83MFhfk",
  "key26": "3S8mpSA4akmLUYAHduqWRNn6UYgaU89mhrKySejvyND34NvhgoG2C7Ba5YFiGfTEFKK8ouHCjDqggtQt5AyurZ1o",
  "key27": "btFFZfQ5pQxkfWkVwuEkssEazHMUjgdeYQ8BvYpHJXrwWrx5mJSbNAvHTtsvpkBncru7Ty79hRBSJXd3jcPtwoN",
  "key28": "4Q5HLzv3tL6ybvkJAhJ2fLQ4xgtvx55L5ZRLsnJ81aA5Q5C9g4HLYVBpWd1pVm8FJWdXP5ykjH3U4mdeYGbe6cez",
  "key29": "3JtQ94rsqNP1baoR6ktCzqqqnkaURe85JC2FbFHBBEtnQ7mSHyTMfQyswW5w7q76fL88NGqxAW4XbWARkUUMwvUG"
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
