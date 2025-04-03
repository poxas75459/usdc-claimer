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
    "2nfWyEwjDwfj1zsHwwVLzssG3waBWmdvNyq59fhMG9Zbxej1qwoFRQf7BcLLSN3mGqRna2s7tDvBqw5jDZVPTkCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W99MR9iNihXSDhtvxCv91YNAJD64zuWWzrzQVzbsXLyfKu1mPqwjEuZH4fDvt5eF69si7xqvWW1iHFZbSSG3PXt",
  "key1": "4yfZAwqDqs7DqbHBP6ZenmJy9p8quaNg2GWa9v2VMXrhqpXksJQ1c3dG8t5X9hfBAFN9wv8sMQmXouXfaj2K1Cf8",
  "key2": "3wrGLcLQrKaTFL6nCAzM8mK4tFtudHaLrrbq7rbmKHCnGy6PtFroKksTw8F6xFcwFWyiNyzdhyCp1HThhBpL7Z1j",
  "key3": "r8qNFdEcSZY8gqHaN3YfLEZrmu6QW8hu2v6bUVcp16jbJYxmiv5CP5HPQmdWCLokjcjDGkq1iVtYWWRhLxwoT7e",
  "key4": "5QZRcaWNij3BqENM66WGxn7GE2vnCBxUo7Ebj6KCVVKk3HMdsCBQPdb1P6N5dD8bHB6ojmQZL1vDd8raJJyNVjXb",
  "key5": "4sFVafWgzfqC4ufYspcaEbb8thJYEvnMGufT2o4D7mT2j8vgEm9eJNzze3nZRpJd5RZd6dVfQ6q7nUaaF5koLgd9",
  "key6": "2GGo5X16FpRHZA4xdYAakdLkzSzuFGK9tasxWsnRKEuSaAjRBLda3Fu557zqygzAyiUCYqWgvo9L4v8fMiZi5c3H",
  "key7": "4Kb4GVpGmyYnhUxSCcHu1nyQAVBhkTbhcGtjFs5EGa8wDeXBqkfgYPvzafTz1em87itwjp1ZfuPqn3e5EakoqBFc",
  "key8": "3gMQKv3S77To6gRAzxepq1sUjkr8vc1Z5zfXM2SLbbciBLedQKpvw9CBDEFa62o61QzRtk5CWVXr1upWmKTJcs9i",
  "key9": "d94dVM321S3aFsqHGarAe1DCxrAczqJiLGSAt1mhk2sbgR7GFbHuB1FZVsruoeFCEpqfoJg74qvpjkGJPGQjLgr",
  "key10": "5PgrdxLEZGeYZvT5ytWqTv7AqWe76odovk57fJjFKD3APY831XBWK3BZ16zA3uRUW62zR3svJe2p8qQZJ4rTYmvF",
  "key11": "3McXf4ixeFJRAfGnZSRFZwA1RY7Grq777vLw2AoGGEjGJeoj8sU6U8buQwU77mX6Dh1rFCiiGFZNmdY2SroZTKqc",
  "key12": "5a4dmMTJ3CwJNbF84q9x3KwhwtJPBjEf4kYidUNTk3nNH1chrf8MQNuBeWzrwqH2knhySWQm35XrspQu5BEcghkg",
  "key13": "MpqomLhWmW4awgM1PaURv7WsC7bNgwDCPiDeAQCruurRGidvJCh4EsHLjjN85BrqJF5CzLPWFQyi69ogQHddUiP",
  "key14": "AmeSYLtNFWxSdywAyLaaAGqHtQeDRbbEUtTyxF2LeGDhNB7y3NidthpyU88GD29gGcHMSL35S6veMLmuYTCATmz",
  "key15": "4uk55EGNkeZoUsDbSPDkYJXMSf3bZXpEwq8aiqKhbXLpy8tdSWCnNzciNpqF9XbkLrmaHVve5Y6LoCPzyJz6Whx3",
  "key16": "3PJa3EGwKa7nTNbypbx6EE6QSbxYDUR8Jfvi7RoaxKES9UNUS2HZTj3p6jrWqJQ2bnrPAJd7CwVe7pQjHXnj7MP7",
  "key17": "2SfZKuzYHtrzCuGRhtAXtqf72z3N4GBu4R5R2hTXuwYsTsgxwqHWC3y9htPpfWCbQFnajZgwwvtsG6QGyc8zeunQ",
  "key18": "BD1aCnGNjqhFUzRsCLb5YXBSjSh8xQ9HBtBBfBLVwFpdbtqbZ11xAmsy71s3Dy9i99g9jyTt1DhMTKrbhyC5hdF",
  "key19": "4bWufqYYEiywndDSseEa6jbPV8A38fKQEhcsHaeK6aR6GL3ZZH8wELsaSyF9gaHyGPfvq7CZUufswWXJREGBTL2K",
  "key20": "41tWij9GeeFimLrzpKFAQJhjVjKgVwg1b1pvDdzDsiGrUBWmcBZZDMfBvqopT5QrD5nxJFYsjA25Li6VAiDNEGfu",
  "key21": "3Xq4cw3UL3ABZekzac9RWqhkN46U6siQqiiD34g2VNK28ykDGjdTKHm2Va3omXW4VbZTy3Qy1HE2mFyJUu8j3m8c",
  "key22": "4cP25xEYMK5MwhkSwDStVKcuRvFWv43PWHWbiCF7kgukqrFnjWyyqxfqtqTVrm9T92ah8mFUhea7nPN44UQwb1XV",
  "key23": "4qZLTWophnZ6odL3DNTXR4uFAT1RDz4qsa87gRzPYFo51NPZinGw3QBvvFrc3g7iqoUFiMquTRPGM44eQeRpeSVj",
  "key24": "a1HiteGy9CFoHKgbcYGSmVNvQygvmAKVbbwrwFVMcFCvLyVMBieqcZbthST2ku7rsayE6EvQWinXAdJf1pA1fHK",
  "key25": "3vmX7UsjzgLJi6oVmQ5fzjEyt74WGA6uc1iVh8GsKFcpirT1fJir1SgjHCSzd528st6DTLJSuz9puX8mh25sEoeD",
  "key26": "22BD3iKexbZ1cUmsLb65deV2kZ6hLifmZTpyzL5qVcgNQQbjcM9RFfyKCYsYjcv1g5VS7tJWBj8zoSEfsg7sK8ey",
  "key27": "5mkqoeAEHZ7UdrhgyKeX23qEMNxawum9MYmPVsg7xU55BUaYqA63Mz1zHTQa1GGNWHX9svtus5n2PSWmq6Z2zHg9",
  "key28": "QU6BYC5Z6zVXog4fF6tqkcLAysHsemA4Sus9DuQdi5tewhRMzEn5eNnTz7sVs2LL6qC7aGuWL2v9UYeLofYoSww",
  "key29": "63FXFyYjZStKzoMGCTZMbWEsCorEa7j5mcaH6Qm8sAM7j47ZKN89U44Ct7ECZD89nMD1rr5ZAYT3awidmZJq6ynR",
  "key30": "2SpwMqyMbeqtfThjYuF3KWB3PwHiqC91r15U87jc1KAMrHStcvMTTri9QV6DFytFxVjHoTkYzoBaU2DUb2peinTW"
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
