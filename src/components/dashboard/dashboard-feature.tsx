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
    "5SBVVmfMbyYnb9ofPmD1gid7Xs2UMxkvcE9dkRwxm1FKQBRHGVr3xLwpxe94YWrRGRzbVSdsFepMLM3wpLKGtXts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKLXfAUzyaRUhHeukD3qnYjtjv1SgfnFZnKBGHwQqe7PAz4p1g61ahxBMCUsFU3aC8hW8mrMSotQt9GJkTjC9nn",
  "key1": "YLX16dtEGc6Kxj94Lyov7zjDMBXC2Z5WEfEDZSc7TZ81zU7hLmLt3UAc25E29hnyYxdRA8esH43jbVFe7fb2t7g",
  "key2": "r2YWugbb4NvetAJ5UvDAxZkYw81CKQie4S4YFKbwsPsXjSg35MD5tPnJsceFfmoPyyUDPpXTsv8149VkUySHgp5",
  "key3": "58iCSDQUY3LydDF6wcg6WcRg49Eg6EfXNAX2V7NkT6nWPL6NNKyQGtgho56yqdiY9zQiHWNSASJCAGCAQEfAQJfm",
  "key4": "3xoLt5Tt6URvQXBd9wmebEGZqzihpi7Qm21LZqQ81r4yRG1Awa7tqXp265bJqUA7mrcHPYbKjqv2ooY6w29YdsVv",
  "key5": "neDvNVKie18UoVqkaK7n6xm3xPhwBuTUgiaeXRXuZYXBdCyq47ErBsWF1cLxqQnHDRLg93LX8A2oW7d4eCu37vA",
  "key6": "4YFjKpQhJEooko2dsx1nqP3EVAT8VnxhGY2zeRPYN6ZRHfQLzebnUsuYcKBG3upfMZR9jBQ8yjdPbNpXRzcK7htz",
  "key7": "5SUZ6VvbAC5J6cV8FW2B81wcBjXiVNMmLHwHqhg3akT2EpY5Amzn5PUSPjXAmcdnDqMVxRyHSaSgB3nALGLvirH4",
  "key8": "DVFbC5MpfwM2TRVz3u9exm8V2SEDPV523BY5hVLRPQjGU76HxUuHdkSJMjsHwCB3iJuLdUjbdM8oQSGQiMa9Nor",
  "key9": "4QEHyftBj2ooELLisXVvSuw4MiSdTDcqnQe3Ur8RPYe3GgA8MRHFam2SGJRzfEJtBGDzDuZdrMboneUvX8eBGE1W",
  "key10": "5i6t6QJR5cd9p2yXuYtwYBM3wKcpm41aaFtBAXBs8GB2zyNpY8kNf5UVtQ5u4skaNEDuAyU7NFqrrENdXPW5By9A",
  "key11": "4kiDNeEbk2738w7kZofpsXYxDTvbd5KiNRV6tn6wQfzxpGXyxCoMch2AtGNpQf8WkSg4n8nGWqFCSUCB9vzEM79Q",
  "key12": "2KyB8nGWs14uhMWBZEz9kt4nHugrAGfH9iJUVRh7ABgQP2kbevquJEk4t5GwPpAyLik688W13KTRQCkaP3MMWPYk",
  "key13": "51GnVCPA5dgzQCmFdaSF5jCoHp8uWS3qREr1LmcVZi68ozV2qZvonmfEnyKEWGsXRM5JYUaMDgtJNAmYdcL3bphb",
  "key14": "5fDeRBKMS11r92RkTKuiBHceRyDNeaNmpRiqRyLTqujYi5L1EtwEdKRYjESGc9NFCZbverFvE5DJfP1vFzs7hQ1o",
  "key15": "3yqqCS8fxiJTHYwfziagKQCHQ82gxZbUF5zxYEFrC58dHChmv4cZSkVRc9dEW6auDVXrH6W1RLpcbqqVoxB5Gv9R",
  "key16": "69vhaqQoDEpt7ZZ3bVyPf3pghvH6L1YHrTBrxQhCTHRkViYAoT9R2HMTqiyA5rwFEmnArwSAbydtLQYEyict6f7",
  "key17": "3REYCHvCM4cLeT1SU57QJ2e6rfrNhFkhnbrWz138nEJa9u7ffkESv4Wc6xt1soLkyWqeTTb34xcTEEZaHYmzfDW6",
  "key18": "2PeArYtcdZyWEhgYKa66Bw5Uhi5XeuUb6Z2DUY6ninBZSvrzG1sJCfeLdvysnjXcKqBnCt84pfS6YaYHxFPQHDQd",
  "key19": "4YTYXr9Ga6CvGSBjAPBgrxnB9iaHLEW8ZAh6efuHexp8MKy9EW7MH4Rsy3ubsE9CgQSumNXG6Tqc4UNomPHD23wo",
  "key20": "5Q754owdxDpMtHH2ocMW4xKePdkTGVbgzSeHgqCfTTuuTvD5aw6UkTa1y2wYGrDrayNyLcsKDg7u7CC9G1wPtKqy",
  "key21": "2A1yjmN43PFy38BTLS4n84n9Ut3SDSYzG1kAF6BSb4YCmhxNUeTeEryfoUg6NX5uhPugJj521H8wejq9usRW6A8e",
  "key22": "3pbyemh6shopdYcNt2Z3rQR62aeV6UL25PZTpkZiD5sZoZ2LPFDhUQxc2w8vJPhc7HE9u8XL6aDNDFJLgRdvHhBR",
  "key23": "2m3jQuP2eRSwB8UmBJYXHryedsvoxHGDQkWShtx3phrAFFXexRznxC7xDUtSZc8WJjfyo2iAvYKEnTLBVo7ThLtn",
  "key24": "tSxa6e8hijqbRVPqJQxrkgYKrHxT7MVHprdRSbAxesjBDVHqWycBbLyMkxzRRmfxFRUY7X3EJjU2njZVwCSbTZL",
  "key25": "5UoVpCemLJs9TLG5UKed5vsarbwYYgQtWkyXWWyAViBqCxZ7EzvHEUvH77Ns6pqmN63yWH588gUAue9awSnt9QqF",
  "key26": "bMnKVKF2t56EFwd5Ycwc37X93aJ1APmZwte94BoQNzBzKeKqbbtmiDjDzZPfUfKVANUr9762Z3r8nfZhSxu3hYZ",
  "key27": "TmHTyTFXPGBcpRgmi2ERhCXkSiad6uWpTsGMQuB8Ws1Nn3xjKSDccjL2q2mEcVQMRnwAAT8WDAcFpRhfbiJHJak",
  "key28": "3MZkG6th5kUvv8DdApVj1uH6Zv4WtjeEfJnJFAp3ykVZQk7mDY4afF79j5p96Fpr9sDAbrY9ASHvA5U6u7rN777V",
  "key29": "3SkaXpf2Livopj4wKz12Ly9S9dF8Z3RGzDscVpTqkvmG9AkYZwyJoojXyhXsZNyNgARDgQBb95thFCkwPmEbznXD",
  "key30": "4bGanr4TERAikEdsr2uCC3pRBnFQ1k3Ts7K85BkGuRdDoL9uAhNQgP1R4RvhnS1ypuhU5bk8nPkm39Vo8e1Y6Bja"
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
