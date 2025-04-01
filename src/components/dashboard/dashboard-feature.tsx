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
    "2gm1Wj6Y831trpyauzD34VThYS45oXN6w4tqFFbVc7mppBq7yTkpsiVmw26qBxi69HUNjgYYyPsvULUFLT1bgf1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1k2oDaND87ExNBNLGjk4TE7zkDztkQuKNSaJdwZMKGzBHWcpYXx97Amfr5yaU3cJQ3tZMMiRdnay8r4K1TS7B6",
  "key1": "3Mzu61xmQzzKgNjstn5Amfo8iWr5FpKrH7qhk6PYVf7JyMRNgDwdj2fbdbYtCTkJQnPyMxiJZFWB62WJimaUcoPK",
  "key2": "2D9VpVvkLv8r6jeSse2CajTLszzu8bZhMWtMhYfG1A5xvrvddz32F2t5b79XEU2WjG3Mr8bPnbv2FijFGZbWtydQ",
  "key3": "2xy3Ghzfh4BciK8NuA2yMqpAwZbGHxmNegCSxeHgzokRGFWof8t5NBY23a1mMgLgdqy2asKxf8jobVCqQ8fSnwNQ",
  "key4": "2C1C7UZB49Rg94dRpjQ3TeMeRPh5G4SMriN7UfKMSk5PHtsRViCovt7U1enRFgdFnPDxaC9sE7rvrCNXpNAKEZ5V",
  "key5": "25RE7EEau535aMjN8KHUkvjJ1ikCmoVzcZmJzU45jJEydTdaakU6qCGo8U5zGH13AEFRQHVXJUYEFhcsHBTkMTsm",
  "key6": "UDPizVZdHiqTaEfyrc89s3dScDr3SrgQzfMHupvrVetwHASTXu82gZaaHYgzXc5iw17qqQJiBaagaZ5WnW4gEiw",
  "key7": "3ZqaoHsncsikhZc1nDepXq2CRogiegLijCmTkqYZSPHNwCFyaBCQ99qHe4fQek79KhxQ3MGiLo9S4suP7BHpAVtA",
  "key8": "iyUrd5KzFnxuxDQfwGnGZPHV6XeHN4CuxYVMH55KhkiEmenPm7PXmb9apQ8hhPwJqGLgBPyVj1Z7S1QLkb9Femw",
  "key9": "2X9Bgze5Ky8wQeQCVF91aFKF3SGMQ9sK4YoQXnqTXnbpTWmZZyijBKDFzqwg26DLSmLn1FpD8rQG1eWafRfMGHst",
  "key10": "5aLXSxJUJAD1jJNkrktumzxz6G487qYBvK997HYbb5YiqsvT52tedbt19pHe1ZrcbeUmuriJHtU8nbtvQZt5kKNo",
  "key11": "5AnjVQFXzhQQaEBE8FnFhRMhNVgBnrgtBKzkMCSrZq7cfXgR1T8yK5iQE7VYvyy9BAa9Rx7oic98xDXoK6Mbz5v5",
  "key12": "4ggCgULjT3HSY3wkCmJ1ERkS7mAskq4C1jYxcxfXvnajsxtEaQbBv6qiqftYu2FTBtmzCNqm6wkyDaPrzmXtSndH",
  "key13": "2zDjZEPSYtZcKMb7mEw9Kc7Swx8uhWttoP1AAf6cCZi3y3pihRL9vy4v4YKXMaeVDQafUdoCVsRtDt5soAn5yCgh",
  "key14": "4Yb8U2aRwFi3LZqwoptdVthrqUDkJDQywG9sazhSTw3ftL5yZRGFNr6H8NZeKknA8yBPTf4hJqz7AN7fEdgjgHUx",
  "key15": "5ogwyMABpBcyAMG7dpgRyv3ZLKQM8AefYWHCSCqv1VyBvTxM4U47o512r6iVGgfFY2SZCzVhmqLxTM143YiXa3iU",
  "key16": "5xaidKKLAkByqKqcZz8N9cx9rbW8ZBP3vwqBtS6fiDVfJQmDT8faHmTZqnneSsJducf4CQ2nWZ3r2jZdJUgLZuqD",
  "key17": "5AZ4iYkaQuKjTot9GUzz4RmTNfYB8HBhdib8SrQXmRQdXGQ2Sk3Nxytw9HFCt1B1Xvqrhi8cLaw6BsZUybx5h2uj",
  "key18": "H8ohfn4UHmQSpsg7ALa8cVXTiCYtgddigK3YxDRHjQ2UrcNhVW2VF4SQYuy5rKLqxsz6gh65rwigXFDkjJyfEEh",
  "key19": "2irjWLGWrjxWEZ2ewaYZHTcdAxFZ24UyWLxhNXEim7w4814kCuHAf2WwLyEPqSAZ5gBSFRc6DqhWEAnJHWHE1Bnq",
  "key20": "5xYsq2pFBj6f58iUChiSmkxEh28v1oNaTYxm9kLKpvNb4w5BTNyzePSELvTKR8JixiDRWqAZdktCensLB8fyJnDW",
  "key21": "23ZTSAE83XXUFVpHCC3HK1ggtYnYnJKtPAZNu8TxX6phjew43ZMbqNaeyKFk4nGoG8yUAxA8Me15W6CJvmPUJdHt",
  "key22": "3hkVyiKyTqVNeJK4Jjgvu1GJMzHwF1vvAfgjq96TghC6rXYEx25t19M2fe7s9i2DfgMm7vjjNfqPfYtAjxAWDiKG",
  "key23": "3yYsyiPhCaDJZEZVJvRQMdm2VUeJqZMpU4xigCEUnsmM7g5uJmaxqiR1LPMXe7FjoJScRZHEbjZW6DTvAPbA9kM5",
  "key24": "AzNbNrcxfseYYTGH6bD8MkxTdkHKBhh5hrbH3eRtBbLdTa8Wm1hHHUgAKU7HS8NhwUJTtc3c8KB6KMsZApX884h",
  "key25": "4aWSUHfJy9dWAwUmd2nPPY4UCEDn864jR7wKyQgcu2TTUJSESusYDKnHmuRhN5oNshevW9ybpYnZCVXxkdN9wi6r",
  "key26": "5A8ZgXwTS7BKT5PtnhDmo3eXT4aPhcyqYpvmmjfZrX2Qa3N3QqfSFzUoDxnEdugmvWctM4uYs9tHdCKiqiyqB3cX",
  "key27": "4DgHUcBuX36xwCDyUfr8gXgcbYd64iHE4jadYohZXk28pV9JL9urGXZ9NS9tRLqyMaynrxsejxRYpby7zxNXKEp4",
  "key28": "2c1E5cxDF24A3g7jwjjHXU3ehgeM5qZ1ivUfFaV7kygkKjzhUJWKuWA7oke9LiGKZLoFZ6xa1LRMf5AGuMrdGrvL"
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
