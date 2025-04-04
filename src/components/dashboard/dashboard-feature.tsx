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
    "3dpc7VzDLASXreQnMeP4iLNzipwGGg8upUBARqnrkr1awzG4fSa9GwDJfV6bzXs2zzifWMeB28ePDsrv1LyeUVpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MdcsGTvwFsSx7Ci1zZdY3yc7oCNAoYaT1W4EGAkJZk5RAK7kzpACPZLU1ersJ2w5naW73iEpmAZDdPLKq1csMHK",
  "key1": "48W2LkgMfFB3FfFYbSyE7Q6uAs6fRZcdE1Kxj5sQjzcC6STLWmWoBtFVyHeTfbyLrJEgg688nDVdoqo8tZZEic5",
  "key2": "2xgfYXogS4hNMVAB63BTjyRooi2vjmHiUhmP6LxoXCmhMdD71iFC6Yxdk85ps4FEhggR5AJQu8J97VzpsZdimMPh",
  "key3": "5fUVGkkVUQzGR6ksPn8VF932mcW2W2mkdRy7o7g9LDXbN2ekH745VXz3CbEiMGmJcjKHYhZzcHPvpcxApAFe7ceR",
  "key4": "3rTLripb8YxWCJbhUKwgyD3q79sA5bvsEin5ingU5L82CPjhwVaMA3fy9Jxftr72pZTFiBFoLtL9WueXHAbyj26k",
  "key5": "5tyKZTuBboAVVFR9RfDq1kjdBL1MsNVC5xnqxwmsF6AXBqFQdrEXTv5EUZGRU1PtWkPbQtvqY8BapUNzg4r1hx91",
  "key6": "22VzrjUEGGeXMwtbJYpMEoUZB7wrA6wMQnsE34AnjSF2UZeA4vLSjDoccFfN5tZY9AiC4PiJ4JSStYSLJkUBovxu",
  "key7": "wVvdoqBbCp85oezE1T3ndEb1RBMBuXcjsh4uvAS1SS8iXLzWQdLFC7mgXXXB6dUneqhPU3RCipQR4yjvpNGQfMS",
  "key8": "5aogtiJz7F4aLeRwJbcv2VtuB6C3XmBucHLj6PuNrFVAqDxaq91WCfXqupENU3BVpKf4ZvimroFM1LGy6mUqWpyJ",
  "key9": "3aQwxSshs2YWupUqy4TPsPxTx9GdfP8rAcTfFh68ncjmNgKc8S8UGQZ7FGsYbgUhd2ViS9Jzh1yRtrPbvEfSsoCM",
  "key10": "5TCDofPhE1hD7T6RoHzx8Tq2PLRmqaZ9zqxkKfSBegettGUjCGUEvco7ygUWZznAvBnTbmbytcuNHPqEoFZeK96e",
  "key11": "3FevcnNiNzNvotiv1Mt9VbrTgkyFMcXxqnoBv154BjnXGGGcPLatSEVC8iGkjd9sx6ZZyPeEs3Cr5wMJYLHXBc34",
  "key12": "5eZyzTiKLUdyqPcGRWKcsRpfLJifF1bMzu9FjdVFoQhTAT9eUceWUejT16TXBx9QXkff67pZBGrQqRFcSuf7ayrW",
  "key13": "2ndVs2rR9kWNVGAou3mTMaqehWP7V9s1ZcLgvD1oCKVDLGSXizjqLK3LtxcNHdc5hQrRtqX2u8F9CiLxn1ALLukp",
  "key14": "675eiyNXtr5EHWVvBLTyd6Qc3xjggFiq7AcQ61kCgqvhjKRQfaCcGfn52HJAGzdcKnAi6tbErRTDLfN2f4Hh5Bu2",
  "key15": "5xwH9KKXqU1SK9ebjP2atXc9sDJCq7NYCkVJNiNr2drj4iRHnwmppsnJrHqLDyLkt1GFysg1UtHFg28uRYRs5MQN",
  "key16": "4MjcsspXoitqFtE5mZogrxcSQoaYtwW5PGD1KXFRrSkBtzBRQN58zryG5RekTVGLUYj4oH2eMznmsgsptDKfS5wE",
  "key17": "2CKmLwpGzj1twy2eofDwnevCZiHxu2HMJDrTkkeUyXaD1fURa4V7fcTZPmJ1984Z8GB8gMXzCdKeuywrLaE2tm1K",
  "key18": "5CsWeHgkFiGBNN9bYusfvUaRsf83JPJGkUP8wL2rM6zg2TW4zLY99aor5kR1hUk9U253wCpwXN577VbNLJG2sTcB",
  "key19": "2PNbNrVJwf9ZxK3TaGPgW9zesCojAidCbC8v86CDZYeoV9JjsdiGwUq4MQVGNGJPGB48KwE4ZzySf3QDACdWdoWL",
  "key20": "3wtgRC76cqMqpXFWqZ26V1dGmqm9gF3gCNgk2sJJMZehzV4384XP6schxDNPjuDu2qhuBYAvu569F9dzjKSekTZA",
  "key21": "5x8Di6d45ErWQ3dRpqEzgLQmwL8W6jrEn9XVCgUpcWAF6mVpEig5Vucdhv4bVDq9aBHXhhTRtvM79WZvPrWXrRVE",
  "key22": "5jwKWUgV1QnDUnNoWHF8hJUdRWXKv4ojRGSFpmYZKJHmjZrbHTeEXKM4csCQeXyogoRBjsCqyYGLpMXTmSnfTwUk",
  "key23": "5cipMiAGvMZfYBvijqLMrY3hScojGwVQjWKXeRGMY3HhEmT9YkV5vW2AhaF4AvYq7X6b5fr3RRhrm54YbPFw1ffR",
  "key24": "2SYrL5HgJYHEdjWvSWWB3Azn2hswcBdxteTjS5DuVtvT9EwTFLyfToSpvgr3vBGk9AXiwzAjW2AJ7jNFkdTSeVUi",
  "key25": "3xs5e3NGfUrNu5xgEZ8GQpBgHMW1f5ACJ2AamSieHUoJwKSGd6kz7wQP559pyXs52cJ3eArRVKda933p31wtLqYF",
  "key26": "MSsn9h2egPi55j4bHGyPv3kd1g1QB4nXyhrcSfBJ5d831xbGKtj2RWGHfDN9xRMzcEMJnSRVdtnEtDzS1muU9f1",
  "key27": "43gmQKQUVemA9twS34QmjdiYLfMxHygdbm4NDDGro3iBYLXyU8ZPUxcrjp2az1B5sD5dKMntVzQFEumLLaeLDUG5",
  "key28": "3ksLH898CaBPyEj3kyPkNq5fsw7e7WN7gnGzjgATBbULMtXdqHrRzykFFB4U4bA5z2SND5tZRHfRNiszrSDp2Bvc",
  "key29": "nshkjuFndVYLVc6tTZbYWzLBd92ZJqnyg8eXt3b4wk8Xn2FrVAJcWX9KZqmQAjVuvBDpDk8Nqe2Ur3GjnG8Yua7",
  "key30": "442H9ezM3WXfVqSNAAAXmaEHydCrXKRrJ9AYeLF88V9J7WjnQBVAqqVjY9KCpHV3tRCXGRviMDNcND9m8DvEVKVL",
  "key31": "3fLhN1TgHgv2svE7PrSDaNBYp9noMWXL1XvzfaYd3VEHgswggRh1tNYUnRdbU4jPQ8Sz2LtLBYMWFi1ELCtcKPNm",
  "key32": "5CfoxAxUDuY3kBS8DHBEVrcEC4UAqtboDwvxQRY5cLLHjZdHopbWe8keLXp7oAByL7dwh6McLa9iFrux91RtRLh5",
  "key33": "5crRwH3fEzzUcdnFkweuxC9WeiMZH2N7Hqjaorzu3h2H7BaSmrMAcGRhGo2ayb8YEFCCReXZnDxDXg1vWeGuy6yz",
  "key34": "2qJYLR79s3r7gNZ3Y3t7D9xK7ybeoe22JhjZG6Wmk6c7JQRRMGvpJomin6oCmXEskvE7fAGsguxYGnVyKKwXBVwA",
  "key35": "3xoRdTWZSB9ufxCk7b9cnamxkrYxAqX6tQvoC94WMt7Qko2XACDHNNqjwUB7dcyw2RSHSedafrNfCYtFLtZuw4gz",
  "key36": "4XT6CUQQuosFHbjLbLjknF5Seh6tmmoQoiskjDiDMz1MJv9fcmD4Xs4VWep5cp4ah2JoVah7ShJeuXnfYeMUFLjJ",
  "key37": "51TFP1hLj7NjXaUUMWhFPeTctDin6YvnmXADe7YPBJ1iXGpAYXGPA67dKSYdyxyNBe7n66TZztrvgEts2hW9YdgB"
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
