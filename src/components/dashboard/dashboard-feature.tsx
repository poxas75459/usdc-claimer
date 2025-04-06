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
    "4hr88tD9YAGwWiyyDAYh73TJ7UgDKF4ibbdX6ZNHx8pzwbHdpNqoNKiwTH5WJ7BxEr9Kec4EBNNqgJqMxwpey7A7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTVJq8SrWfzV3iPHwe1xeq3pZNYDEnD8pZAGCoq1tCuDc5Ncn9oGH8xP81YeUR2MNiekffJZzAk6h75d7oHhZCh",
  "key1": "K6T1Cik7cr2twUCnpuhUVosuPZzBg4Ts3oN1psPguQTxeSs7XQGb8kt1hkdUnAK3t9yYYSv7XubQbTBoFv8t6hC",
  "key2": "2SdzhvtEMzduDzuRaRNiisNFGKJXT17EihWrejaFsxiLZ9zJi7CciKXqzJjEbr992cniiXHtzrm6qs2dHJboHZCD",
  "key3": "2MC3sPpbUnJN8XcMpR5A4MaKJZDfPweXm5JNnhoR5JeAgSPZEA6iXodypKc8uoBWj3jHV7gTV8MrGuKqxL8Aaj3w",
  "key4": "2uZ1JMfcyq3eG9NENtQdQLGMvbMteTgbDayuNvW6LBNKKrRUg53s3Fre9Yomk9b368ttYovqX99rwjJwP5XjrQCf",
  "key5": "4JQqbWLPrcGsQQeu9JWnETFCX2d9GLycXiQpsFWsbowzGoFaLGwSiH6aAej6NffEXy2G6o4LdhFKjKNR1gn5QQqL",
  "key6": "52zfwYxtYJmcK1GRDrjin9yevjeaJurx5RcHsfxgaLdHciPahcvoKWBxdm9ZEdwx26jfZstAnSTcwT42r7aLWZJD",
  "key7": "mvkx27mxgzFVUm3ZH1ybbvgcyJfVbGhtCUv5fZytSEbd6bz34UAFsMMkQjzerMDfFa69x5Ao5vEbVGE9Ncun6UA",
  "key8": "2sKpzLE1yo55qzXnfBTQ4Fe1ZE5DNVw1uMXyKiGdCGVzE7VDrc24LXryzyK9niZaDjUSuHK4cbWoWz5NmfgRFwqb",
  "key9": "22eRd8gfQJyhZFX6xdTz42sqFNN3EkobkqmHiPXFSXsfumb1wuGQ3k359DQtPJpBS6nbHSusDUmhgoiHcwgwee7d",
  "key10": "2LLMoLj85MSFmD8BULARpXxpg8j4DcKNTFAsZFLRVUkaCTbMjvF32x7FYcrSkzBeWof3fE8xAzxNra75GSbCWP5x",
  "key11": "2rbYb9AsCYAAYumi3s6H1Qqg6b4bdazgRoRpLNPuJ6ji7aNXmL6DGqzELB8EiK9uJZQPKCZ9hGfctodv6NpozskN",
  "key12": "61gduMnspgzXF22MDAeKKoyyvHXpg3x2A3x8awgiDP4YYdUUqXusbGmUUzAXWpnYSuM7Qf6Tz6sUaW9ErDvG8FhQ",
  "key13": "2ePk5p42wzbpFBUE8RcFiBvndo5ybEwyjuxMe5nAzS1ipfzdpno4gxRvKJye9sdPG5K9eNbxTZbMfyrEfcEJn9KJ",
  "key14": "3U2cP5FqG6Ernuj9kmVcM1Dkq8ye1T65jf8rhJENsUfcP91XzrkJzvnU9JtychZ7KKAMRBx9wPgSLWZaLDUC2qin",
  "key15": "512sWbR16Vg3hWQdSWv1RaHzJQx6RTnsozzB2uHocpLKMjvgWc3sAsiCJLyef4dRvvz8Tmq6HaAeh96Jc4xxnhKB",
  "key16": "2JAcq6hYCikjY9JSmAoQqWcTGV928xF4itReuGiFyrqB13U3MPYgNtZKGY8Qi3KwXTfyjhpAxNq3EfXmaLdCBbSF",
  "key17": "bXXNTGQbJDXwAoukkrPYxMxuhunxE7g8tQZDN4FJ4fr21qchE8fXPBmZRH2NewmnNNKh6FqJsbhPMERw8Buzmym",
  "key18": "g7oYV8DGK4PQP5DcMWZhqqPXwMrY9cJthtxxg8sMehi9JxhdwgEsgMTnnzhdeckMKQf3itMHysXWLA8wYenG9Ho",
  "key19": "2uaawsogZPS7V7Yqyb7vxbZcSRqCs71RZgRCZijFtRmyM3gagjEtFpHz4DGvYcFQtDgH11CC4TjAPfUxCMwoViar",
  "key20": "3RdvZ2Jg1hahYDajkNByFxDCyLzd45NhJZwqVh6k6iHNbUKewmCUh37FTXGMsfKnPktXyF3eY5JcScx9Dv2fTtFm",
  "key21": "32eUwfeuEXE9XkU7zWW2J3bQc8kxLFVewVUYdoKTk8o5QRm5ZRzU8n62thTFuM6RGPmhcdboRRFKXk3aWayTJk4N",
  "key22": "2Uyjknr4bdD9rqi3WQ8iRLjxd7xirkR9FctyEGHNVfD2JrQmEHVEeQNeuouMSaTkTNf75kAvf3tVzHktYLqzjah6",
  "key23": "27in3HxZsBkFY1DL6ohnzJtPCyUey8LAurLB9K8zbgKofzyvcz1bq9orih1i1fFeVydpTHyEXGXSdLDBLNB2LVgZ",
  "key24": "2WtRfKqbqiSWjVuopAiEPfXastJgWsmxhmh1UiGc6tt68XSRfjogiikeiiW2BPPfTTb7pvF8mWKzLb1XSdLtX4v5",
  "key25": "3roR8sE6JNe4FfAD4gRGVUC6tMZYqTpFy6E1wnxEMrwVCC9PSUbRSuPA82yjZWTzkNGqPvqrDG36fe9D489KSvZZ",
  "key26": "5aKjsCenc9ooDnkifqzdyLAPsCkzfD5j4njPd2etDTZEWevhfxdN9tc1vA9jYjVDesTzADh9poV3tncaM31ndLDs",
  "key27": "1ZEFJUqVpEN92wKJEwkANSCUemRADqpKmNd6mDQnonNfxEgNdvUpJAJXxW8T5drfE9rZ2XwLpUvHcq6qoCzUDvX",
  "key28": "CtdL2nKvH46qVN1WMpRZifzRNoVLVSFfwp2Z9YSM6wkskZrUWqjDXmUZbTUGF2aCHFT2Wn9Tyc7WXt1dB99Nk7Y",
  "key29": "mKG74X6xwk5vnvQMrjrLjXm4pJjJ4DiLsdEmaHDvTKQBLX5jdxdKw6mF7YAZVWgPxJpfeBSKckajQrnp7kmfWMJ",
  "key30": "z7nd55J9jD14sTgGT7Kj7mApQByN4bZRrPAWYW49EpsnoPM3nG4m5BMw4xhY5s4qCvc85vRTQ6hHnG4uSBZEino",
  "key31": "3mZsrXSx3jyUmya5xPdpQ1KBcEKKYvdDrrqUoczZXA2ypYgw3AdM3TbJZRR7aJbHg4wLoSZXzcM5pAdSty82rhv6",
  "key32": "29qrsPbwr9jp3KzWK94Qu5kUS9yPfSkJgnPf9ixTxCfnszU5LfRJiUCxNHTg8JPScJTxJJd26dHewLwAfVJSVDTs",
  "key33": "4zHspAmz2qrE6cpFsSnTJb3vD1doqz8QhA3gxypdXSuh1NUYNaCiuF84cmiPBbNzUgBzu6K9rSXQsSLebVbaXkVW",
  "key34": "3KKmXgqPdxhwdotYDAwWcyXT92pu3LbUBsb4jcfXCKppe7ojLvem2SbbYt6pUGxjkC2C4CGyUJVnesjXKfSGLZBZ",
  "key35": "2b6zisvvSxobihfovonZusrS7Kmr1RLwhqwpF8hacmk9PbVbaWHy1B39hgtdUNgwnXaaRDXhFqCH8wVpe89rirKw",
  "key36": "37GcHNAQb5bpqxxYfELzJydauFYKDhr1rbDRUnoTrfL6L1dksPa3nGyCkFfx9DEE3Qcny692rvqGfUhthwx2mQVn",
  "key37": "4uNWhqRJdLeomR2iPrWVsLb3aVNdGLahj5u6DLYJqbH8uKo3B4cWvqt6PLWomyjNc6V3hAK9CWz94YfvQTiJtjyy",
  "key38": "5icaVx92GMPPj8nxRf3dJS4Ub9noaMDZefbAEdBxbhgTxzfMmWBeDPdANU2K6tV7F34cNBTdJ9PC2qxwTWqF8tUr"
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
