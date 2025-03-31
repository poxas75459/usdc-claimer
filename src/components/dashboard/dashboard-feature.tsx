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
    "63pC3hnYRhXKDuFRbhVaeDBxYy5Q6FGZKwM2LwuaLpCgCFr8vgyfkmctMLDz3qGYrvonjJzQPq1Vt2uujbQemBCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4voX4NAXLhZejVeLzMsQU5oCqS2gh3UP4H6s9YvhPdH8o9gzdzcLE6p74a3sVqoudCb2SReJquJ9wnTatZoz2Lw6",
  "key1": "47MSBCjWu7Xj4TARo2UuoyPRmoGwSkxGD4Mg5nxuwvyWoZnWnrBmcgKAi6ZNTTb7o9CxnzMThZtJ4zbNCv6g1JC5",
  "key2": "5WPu6doUDY637PBs5Q1e6NedViAgFi2drKQiAE9zJU1RP1QtujPjADZDggbLaTLrVisaGLDcqgYYzUqBzBLmM8Pa",
  "key3": "3A16DDGvReA3PpbSWZ9Uk37h8BC4f8C7a9eqmRLFMhUyNHemwuWbxPGW5vhhfLXbSqSfPmasniPfzrH9MVkryGDv",
  "key4": "2twZPfCMTXUuqc3jnYn2X64MPxXwP9DjucbC8s2ZFZvNREXYZNnwUacAV42yVYKpmy3fL8YKYukXoKAXmb3irTqS",
  "key5": "2yjVRTGA9xvVgxgxK53Qut48ta8mTZSG7inWVqoRnM2hrPoQTKPTmsGaK81gbHQged4ENdxowSwkxGNmThNvzSGW",
  "key6": "5qg3939aPgEmeH8sbnBuDxS1FLSdjuMrjwxkUhCm3hN62vvYbdfF7GAvYLqxTRi8FvYWwi7FMY3kn4JboGtNrCxe",
  "key7": "5K35df5tJAUqTgCgjYfYGq3Fnjczc2twETqfLWmvNhnnqSQyU9kXjpwSAMvNH1ng2EZAB75PTyPRaZqQfrGVH1V4",
  "key8": "uVcWc75u5yg3EiQnpymM87Zc8mRZKU3V1bCKhZRwXMTmqXK4euKUeYkat19tfq1KWfJs6VsvPpzx4xS1MuHsNj8",
  "key9": "385UDzbtdHw6wau2C7cYPpdLHPHgyYJ9dHyRjTuNz897NFgrY9WbXLB6WGVZvCUtbnJCkSq44WpMeM1zgnm8kLHd",
  "key10": "H5jnPCSQN1DS8XpDWvBQSZe7xh5TCJDYZjE2PtUBCQmHs9G5AURmXSAGaWa9ZPcneZDFQkuVNyeTNkJ41aVWBSq",
  "key11": "59HcvXTvF5R2EVhRozzHj1uRrmdPay5cNk8XG36EE4Vi2qYKuJigzRysv2yV1rn2Aodi2p684ikX2YRpTUuZmdoT",
  "key12": "pAqAyLvwikCGUesEu7noPpzJWzHfRNX2Z3gtwVV3B7johLyx5smX9HuNgjKz2syJJKosTSgntZJoxyUq8qpJ3P3",
  "key13": "2UwxiwgxEF8e5AL6Z4NSHrJ6jGjNqyFwnj8xEeyib9um2Cxoe8fUwPBdsprpmUw4NL2HwcriHa6fY1wYPDebjz7B",
  "key14": "3BEodwTenMo1hugn14gzrbVsbFg1RGxFX1RGvFL2GNYpk7ByFxxdL6uTCNxv3GMuVm1ZQeEjGA7iHqDesPyw7D12",
  "key15": "5gVjLCHfar8SfFAB6VYafaAj7XAmEoouoBAm3HGWLAqF64o1tzhapbSffgLgjsp74SjHcBPno8JhuLQBtBWx6HVn",
  "key16": "3a9FdZtQ5iSW6a3vNepzYLtTvJy2x2ERp7FcJWGnRKoU3CswUgJ4awHT32P71VJYDayBPVYSbhDC1a878BB9jJab",
  "key17": "DrzHFguifsVtYwJidWKc7SQnCDhNZww1Q1mFPZGgNfzsCuk6p6AhFHcUZu6GHjH79J91oFzxAJs6j7rZaZdTLoL",
  "key18": "3g25K9vGGdeYBNH7HHC9ReDsV2Ve3816f1fkVQr9vQtVAqEXXnbx95upbtsiGhNXofFBMA44WzQFT7GwjaNVP25q",
  "key19": "4Tw8DCDUpoYbzeSL5wgtYh98YbtopLjx9HDgKDqNkftHrMUvVcWSM9ovCt9YugCYcvqCHD7ey782F2Mxk1LaBWiF",
  "key20": "2uBHczyH7UtbvqGNhwNa858mMDRxyeqp6kx84RUhyBZMi2qVFMm9NZthNnV2LgxYgV78Ak8epn3hxPJqeRdGQZFd",
  "key21": "2ESsCk1hgGSx2cM9p21JU82bg1G316hptyr9d2ed4R1J6hT1QMp6zc4YcDMTbvn7P5F9aYys4cHnkUWJNKx7tuFy",
  "key22": "5wFDAHYYVVpS9MugKpu5a8nH1y4MMGrfrvEVZzcYyzbkwdC4bz8KkpT9Uv9X3Ai1UFsoes6rvAxUvv51ozfm7C4e",
  "key23": "kZBBwoxtBE1SDhNY4S3HuFap8DtUhgtBFzRmzH3Q1TMtYFwQaehDYEm1yYELtFdHyzKdbFq2rJNtJrLFi83vgGZ",
  "key24": "44zEWTitQYRWkcrjcWmED5pqexwKVHTq91TB257zEjMpMUc5e7Q6SAcAe233qW5eE5WAdtQgpB7bDR9DDKjhBseb",
  "key25": "2MkFwnpFbCT1Vrdmpc3DUZ2U44Q1gWdDUq39yZT21E76JXoChXyStSh35pie4EZ3t2eewyNMCqWttex8DQbyrtrt",
  "key26": "5EUUkcCRhP8YTwvHsi1qK7CUJbJRAZQEP6c7EWoABJjZZSzXtkDTVs5sfk3jadznz5nSRVovvecoXTXDtyJV4W3S",
  "key27": "5bjnc3RAPzf86vD3U9Faqty3t8cnFcozJDVBNN8RqeR1p57RfbfG8c4Mhk7Rbbrag9HmfsSt7sXYHeunUtZoR4es",
  "key28": "3fFPb4aodggRwvEh6JCxrXqhbfZEHyCsXSb2TEQCqqnpweFqRjVjajR9r41Ga8E3SF4cHeQebZX255LUiDWrjV3E",
  "key29": "mMjCTaVpbwFhr8Ez6yfFrqaR5FYNMe2LN1SdkSRX1K5mvDpw3xfssgV8XzkG2e1nbPM5RtfFMu6z1KP1LBbshXb",
  "key30": "vs1XcsTQSb9hGshKzauu5g1BPc8MvsXVNDBcbGuEa64GAwwS5RrwAjw83Hs7fRoP7UEqgAEcitneQ777aDWjhRh",
  "key31": "2NTcSSDcBqpehBC2qRv4ZQuujxUfPBRHDkntnqbRBhfJod5A1BTAduuw5MGtibN22U1LxMFaNjxcQN7h4HwfKU9h",
  "key32": "5dNGpVQsa7XhNBYQ8sE2Jy3yyhavcCiPRprtbH3VHZG1Soafvc8sVLgF8PxFbLU1ysNCVAbzqn2QKBVfhrEVPU7Q",
  "key33": "33H3dvviMtSzvEz3XJDvzqzZaiphf8a6hJmhsxoZ4wRNroB8gB8pTg3NKDG8UAzUaEuyU8vxdJvpxj6LVyDgbmGo",
  "key34": "2bagckv3KpvV9F2NYsnU6M4Ux1YpHfvi4GpFp812d6qpsePvyJR7TAoPhwRrEnZD6HxkLS5bKXjFKFAfnK8sFr62",
  "key35": "53SKidwdGBv7TSqC7oj8mjNJH8GFTAFZVuiyz3K9HKq42ejpBu8qum2iiYkekAyGkmVqGd54k6k7kVtc4dnYQE3v",
  "key36": "5r8VNfRGPqCDC6vBmocy6BeskFsm7Xxp84rctjW5JPGXkb4TkP9TTGJp6AtTC3Wd5NrNBx3ZoR4cZTx5TkzBEytj",
  "key37": "4VGEjAAKc5s7PfbujyKCEFc8eStJUhkJ21Vy63PoPqtwPbciF2sumGpGz13iCHNh9zRawQvHBsq3JmxQZfizwMmK",
  "key38": "2bomY22Zu7xKij3euSwixSPfZqqy37MmD4XYAE1oCrrNUQcCJjYJ4EdaU8VKxK1ndenx8M5PbdXT4UiJcnqpXU5V",
  "key39": "5i6dmRcpumvzqWciYz7VzRFq6VxMVGLoTCZxyWgDAjTnoc3D7nka5dUzfiGBFGffJrnvS1B4cYoa67NznmDpMQ2d",
  "key40": "2fP514Vkx7boqPHavvuW3RgsEDjU1usYGouTSLomvcswHGXNvFL8aakW86MJYadNoqDhSkZhHTfeXi3iU9ebJypD",
  "key41": "58iE6MYyQF2rXdoQsxXZXrP9r9bdb3FQywo7gYbx9HRSbQm5oR8D8emWLFVTWdsxcC5f5Cp2NAK26u3kupq1FbGy"
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
