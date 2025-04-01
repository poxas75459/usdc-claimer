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
    "3JTAt7zp28ZWTT6gsZyryuJdyGeUK68PoR473xqT7FRTezfH5rt7RBNWdUMLRpaB6J6iU6VXjW3PG4pC4RqmyfCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zWhAagcvyhgaRVbwv12hPXAZdJkdtyNxbRa61JBND7xGp1L8s48Hvi6cf7TyibeSTPGjEbfD3DQNLewft2fk2x",
  "key1": "5r11z5eud7ySEnQhPBnJmdueYCaRKei47P2V2xRe1s9qBWaAjUmyBh21u4ctXqyPHwRT92NRCxpqgUNMHjFGrrka",
  "key2": "63Czv2w26gUwQDjj5aRthouJWaTaQYVSHFX3Fi9LjkrxDiBGoQ3suAHjbCPwCKCy2HjVz4B4yyhbYkViX3GZiQDk",
  "key3": "5C6KtvBm48PFnZWxGQYjXHRBEiM8hesN4h8LBTSPmmHL4Q6iXNXR8gLLRG4BFpCDWJhrsCiefW6MUPVrc255rjU2",
  "key4": "55XxEExvYDoFvSceRqKbxpSt8SRSeq9K5xLay2KYkjQcu9TYFrGAmKwGuqK5ZrZFP1Ynonw2sckuRHgwFfmbvK7W",
  "key5": "3HWBYu58rxbmDGtKgPECaerVJwFm6FC6auhBr9GzCrcQkagpzQZPcow4nyR6zSHmS6nfGWnb12YGKJgcUsj8RgWU",
  "key6": "2orrNST2EgoDG7HNJdFuXS6fNQ7hjLJsZTpmwh4hamZwvexW8X6GM6M5JQVHubEXc96wkyPByQnVC9VDgyAsY2rF",
  "key7": "3NhE93bRHZh6BDbu28HNgBUBupWGt7g9t8AG1Jcf6GCmkeXw7LvBVtHHrWxVmkf47yDSENi8toSRWo5UCjPyqiQ4",
  "key8": "4h7hCHoigKiyauoDM3gkK7ccmxQzdbhiSt1WfVEBpoZaNLBdW9sSxhJMVsDMjuoQU8KF9xsV1b1zpLqaexZ3fnFZ",
  "key9": "611beizEgqLiX8Jjs6WSS1Hkj68ZqBuufDrP8PahBheyT76YKkxf4GkWbkKTTRtHdCeJgwQ4HiNHa1w2rzNGbqz1",
  "key10": "3f5v9Uw3Zxi5WqKdnZaZKBWKgn4wUwaW9Hoo5xSjzfij5A7cXWHpVxHX2VPfY4EamuBbJBjRtZcCS9B7NQVyFgix",
  "key11": "2QJLh3q3wUYSxcEM8LFpXa6Sv7aQ2e9712g2hzXMBcLie3TqepaXp8dH1yC2wsN9AmyWde8TR5XGzDRoGaPsaVCW",
  "key12": "5RXueK3jY8yRtbK5JNSjvuc7wGRvye6KAotbFbZt9L4MJCtLKxvUjYHxT7nVLbKRdRT1QLaWyhzfhCFBZ9Fu8c4p",
  "key13": "5jh9r3JFyGXNGhdSKvs8jjtXCXEuUeKZip89f6mf2v3zuZGjiiXYVuVtqAa82K5aNgbz3mVbvzCDaKkBP2ipt8AW",
  "key14": "4oCNCRtpN8quE3GUcnH3WM1zDATS75ApdNFsgwJbJaDYqCB3J5GwhpW6wykwqqLGyQ1jZeTZUC6BtnzDRNo1DnCh",
  "key15": "C2orfs723kE3vibUi4hWiLkBif97chHa3WmvKWPwMfL4kHq8xCDSjRa1aWrA3WQ3ruXVej1eZY6Woh91coJdDKN",
  "key16": "4J9JpHzH9mHaSd1bTPF8hWHtSNQGimCC7LriZvRvnCR6hZt9fefwubjZtjpvFANfTyRnZMpork6XJVGa1YYxTs9f",
  "key17": "3NmJT924tjLzfvCEY7AR2p9QEPcjYNAd7gbTWGUURMSN52Jut9zZBZZQvKqhjAUUxtaZj2cThSEp361p9qB6EAQA",
  "key18": "2RguNjXK1DdEkha5xShfeKxoRUVEXz9jJ8S3AJu2thXUH3HdRYgz7WVL94uKwYQCCVqLYPhEYLQQTfn66pm1RBv5",
  "key19": "2LqGx3imd5cAaeq18unorst3cLLYKLUfwzL93K7p7GQZLNPgRdURDfigBBbdeFngJbsKhAgJvthKL5Brf5sLRfSN",
  "key20": "4gKfbefFawCT4Yiks5PEZr6mSTwKAF4mSXmAmbCXAZxWdGMBZpvxCaNdBcas8q1DeZj3PKgUQ7BgbM5igNc6su5H",
  "key21": "2QriCeTZ6a3b2rXXpZksoxAuhDSNhYAstXU3zA2KdDvJsKxFzveKs1F8AMMgTShUsury8qCfDAVqs3J6T7K4iBHx",
  "key22": "296ysVCY7uc7YWa4P57nE9DXfZBqYKnBaUTQSpYCgx4wX6tAHeXxphbgDmEM8SRGF6tGeSwLPG7waXejMP7LZQFg",
  "key23": "5ER67A1mbBS72myH95GJufgXM5uQuvAkp5fgt26LbgtokRb1z7kJTyTepobAZmho1pWc5avpnDRBXaNDEoddSsX2",
  "key24": "5nxBXV941QPAJT6Z8kKv9XJf3xDU1PqZu6CqvD2am6ZdFVJH5vEzivaRT59k5B34u2SrwpJM18KG5oGmUVnUU3VM",
  "key25": "4BDW1FuNED5kmG27kBbKuZYLK4afhjB1tJfX6yzuBUdHDnEBqU3LJLnPeRUCmG8CoQEmgHcsYayffgD8HNHcRVHQ",
  "key26": "4GeQWbdMS4rJAxMSUF2qC77R3sHAfbw4nic1qbu2wZauyCStUHRuAbPhAmZhcQt37BWkTSPWhdL18DQ83LgzX35i",
  "key27": "5UExuRd8oeMM2Ez37y5mC9wR1Q6wiqgQ1gYiLzwUjQpqovo81Lh7R3D9Jratg9GL8ULdVSrMJVHxt5HrAPjoWW15",
  "key28": "5SQnBdmJPzzRmbtVdPYARyPpT7vWQ62naeG4upa14wjaWS732XnJXnZ4811z3qHt73wZn61i5aFiqs3unhkaDud",
  "key29": "2RWJCDkVaEmFEJmjiP5G1FJnAjLTncq64A4LppYTYzgs19g92MhJNwMBF3izkE3CLJuiRSvvHZ3ZnvmFWSitTK4Y",
  "key30": "3TnGNutBVhL29aLkwRDxvWpfRhxysPgQNCbfyDnBgFvwVvhAzRUB4zHjNpmRiHKAAkoJC9ooNCQCM7grhwAXZpbE",
  "key31": "VDGVuWNHCa8sqrQFeMnbtrPtkCvNg2nXXyFPoUsqUdWkkcJ2Tj43ME3gkHKTJzNq6VSBjXYrbZZUZFfSSGGGVJp",
  "key32": "4aCakVrnHktpCA4SM8M3XPLkDkz6StSFfgRzRSojSufx42LybgByK2NbQTGa1yWS5MtBkTp3AYsN1Ng5ThRiYn3d",
  "key33": "4tKMnrihpqxWr5XGtBEssisHe1sHHouijs4VYbaJ3XL2jFiSjM1dkX9xMHxrzvRw3AdjDEHZhfMx944JNHjC7n9K",
  "key34": "3WAuSeQEL3yYJ41CjDeX7sVZEmFiSHpwM5V1dA6pnA1w6gwwv67QammH9n6LaKkTBDgd4pSEiQDjfx6n8GgWGBTQ",
  "key35": "3818r43YFopF3jgKB8DT6v7KfMKv4JHqmiS8sejUjLXXA6ipn42o3b77Ss4gQjvV7GV6ajTUwmbkztXLFiwc2AgT",
  "key36": "4B9SoGE4j1CYDqRf9FpbrZmwffSckMMeen1FP2mmP5DVcE3tTwnPNdccomCKHgQ9dj3q7WrEAdm9H9fLBFhSFn3m"
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
