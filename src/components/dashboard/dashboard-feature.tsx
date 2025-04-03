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
    "3yEp1FWZjByygiGzFqFmGJH4gsCUPeb26mNvirQm5sU8KgqgGP3GU26cprhhcj6t7bWUCN7BXR4SGAFmnEAHF1Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKXZYN3qheo7eYF6PmCrf9sNLYun2yfhwCnkxJzAHoybuiUzhGTPf4jhHggko1V9CgaSuxpZSNMouWesgLw1Cvp",
  "key1": "5UDa8fdXgYzZMevhq3VDqpf9mRZ93JPMbAfSQVFCSoQPLrSgR8uY3Yu64PT8ju16vx4yZwxfMURDTAvriuCe5aRC",
  "key2": "1Qsy8BGY1hjNFhhwzzSgr8uRizvBnDGLduiQMJEUJSvT2boRkNvWFU3dmLfSGe6roW9HMhT8jAxcemdZ6VVXWpq",
  "key3": "5awzykR5XDEvu7rMeDuwG4KY6g3Vfe9bdCRc9BPesHftNktLbsjxEDXRZHCWM3DGwH5BZ3AYvNxaMp7exsETJDyo",
  "key4": "5G2onGzNEUVLQjyXbRuFeHhVfVfd8LTwxPqUEz6jtwUd5kb9CqokLRwFqLMD1FHMLPt5Wa31jFp13eAQ1HzDfyxE",
  "key5": "5MRFcVFrC5M4hjcLDXt7ZfvCVer8J7rQo6nnXY3w9iKHZxu357WVdrZwvJvnCezJrC28HEG7ua4tbLdVrfNmNX91",
  "key6": "2orh2eEhQwSBkZY6emPpcKqc6ErDzWeVFCNFjUe5TGmTKf8cdQmxrmqd7Kp5Ly3HCn8Qehi77gN2jafaBiHDzPB1",
  "key7": "5nBWxoo2XmMF4Et4kYpsP7NRMysEnbdEdv55TChTwMCAVyYCS2RnW3PrmgJDJMffwQn36iAnCbHBVi7jgvXi5SyS",
  "key8": "5owB2auWH4mnfm68w2XQGtecH5jintExKyNyUN4i8vxES7zcsR3ruRNuiL67biDGo7pnCjn3JpP3orpVfS24L5tu",
  "key9": "5DP5xfCoNfnj7TMxaebuybZ7Uz9jRW6php2RY2jgNnHz8o7xUadDDEhWtie4pz2KFbTspZprmG6kk1FrvZSkJif",
  "key10": "2K8WntEsy9bHg2zdrh3rHEX3UBP3iSYNs4viKPpeAW6gMyCWVJahuFNW8hzAVQwWWfjiFNU4PuvHF9XXnbAid54R",
  "key11": "57wUKr1brGfRAdwzK77jv5Jk41kpF11p3wV6ZoQ92xav4vkfbKPKeq1cDuQn7BhtwQ8YGtDcax2gQN3ca2CYUzNp",
  "key12": "4B3sp9yRhuppeAdvSF61jr8grFLUgHMEoq2wDuHTLYrCH4Xr186FaUHsWxxRkoWyMGCWMuN8CJhxrf6DQC2qZnVD",
  "key13": "5bZ2eoZN9EReugG5HgZCXtccySffBmLRr6C7V6fe78bNaGv3u5wtXAg2D83rwr4kQc5gggvCZ52V4BwZR1ZKQtV2",
  "key14": "5H4QJokhX4x4h1VrhW8s7HTfstxUbrnwMjTtrJCMnCHMb5zFFj3DeYGYjFVpDLtzL7HPrxDemae1c5KyAvgWpB7C",
  "key15": "2PXFQYByCV3LJGiwppzMTG7JtNSmubZUQnu7zxwYBZAiEAWo4jfW2YVCYpEsxQMk6ty7G4nN7wNuCXhZkm6WyhBa",
  "key16": "2kezxG9VToL2TTRbAQMJcfrHLiJ21UcAhp93vKi5upTC9Ghg1xa7XsT4V21bMGLLiPsHzNRs1SMS681DYHBXLpfw",
  "key17": "4TZRoTQ9Md5gmjwv9AT2t34JqhUjSNEttErvGXGPGLJygsz1FAkpzj2dJrTarHBRQibHFBP4vGj6DuoB2Ny6ME85",
  "key18": "2B7RJw2nuAgHCNEUUCLoUrRMtgAZ9j2yHWu68EzuTn3nwhhhbRoxgt67rSR7B7Sf21yH1SZsz81ZxYdAwmANhBZR",
  "key19": "3C27HoN2VdmuiuwUxhhFds9vYZyqGpAXQjDQkyCwJmX2aQRq9XvWGQwQEe9BD6DHKSYCohJZaCHhXoyo4AbgHTFa",
  "key20": "5QkGsxkKMsPVFc3PbpwULrLfgNJmWs1w32ua1tWAMWQrfiAGAZviNmd5Qa8bYHivSPBiYfWsgUzpv3BuGwxWZc6w",
  "key21": "5bb2V2tWrfSiZvAhamzEcV4WdkjVWzGPaBccy3ZPyG2t12PJ82pCt4kB6qNQoweXvDR5tzgc4gvMtfUmYhi5nbk1",
  "key22": "4igx5cn3xGGHUKMyHpKnzNiDA6z3oo8cTdPrAbyxhDGZZQfGwd2EjKM9uejTw2YCU6JvfA8huFdxaaZXbDr49LgH",
  "key23": "2UcR2oLR6vkoEETamq8q9k9LQdYQ5BQErg5crVrsawDNHLEbV7xQvc8mYm8oKQxsuYGZtUJFE1qQcC8tBpCUJ7UR",
  "key24": "5kK7eF9MwLBkyUwfE4XBQ2dFsz8Q4YMTK38pfNKWnnSydfEek4SKDXJqWucybQzVnydN7tS1xakM8EuLyK6xDTaH",
  "key25": "58ULQeaVfX8D4c32vbPty4kv6ybBDTPehE3fdQcaA4NcbwyM1xhV5Jj8MyVuyvESjr3BMr112dWTUgdmZUyFLDDW",
  "key26": "2fTFUmzBCtJ26qjzaVWKfLHtr8Z689zMXsc9yCbsxTrYU4c2SZGpF1ZC1Aff92gtSNLYb8rCBdE3kiuVRLmxKVxU",
  "key27": "4jZzq6PKC43EGDuV22ZuhazA1dCtUqMxmDTYtiTWMcQUTMWwJX9JpJK2DZ73xjmzVVKQu36MrUVj9XfmqYdB9d9P",
  "key28": "2sHLxMBxgASxyzF8ahV857btnU1MHeSXf6gYGd1Aiq3f8siziQvWPs23epBJDdERR4oJwFJzTMHCyvSHwoaRz4sg",
  "key29": "3sbU7fr1ErxegCPqixjm3as7DRMeC7v6USXvjx1hLxaoQ8LitoAprgQK6yN185qYemPKTNwrUf41SjSjpetSbDzy",
  "key30": "5zGGVyGnGJ3e842zkuSexvEhVTmwmg3pZGzMvvNbhUfjJRhtBLtcRENGop5V1idka9jnbf5MH7xsjR6s4b7Drs6Y",
  "key31": "4qrpHhwHVLKvUf8a3HPZJ6J92zZAsr7K47qZ6mi6cMW5fU8o9ThH9anWvtah7A7kY8gS3JW17RAgAJ2ysc7GVYVj",
  "key32": "hkjrS8eRtzemkk9NeUAiBf9Zw2ZrHxUrPeLpg4KbuvonFwXLnyLquEtVu5J3aRLdtXCQQ7UqHLhXAbRTtTFFy9v",
  "key33": "C6a841FmDSqzrJyvkRRhHehtn1WMK3dXDLuhWEpVCvopjE59z5Z3gRad3pfpiDCXy13bzrxx56JTpCR1QkyYgUm",
  "key34": "Q5rPeUUrQFhFij1h4B9QxUFHmKGAqBFMzBGzsHaLnpS5pRtwSKi9ptPYNmbF6k16NJ6tEQcibtjSE1kPyKnJyG3",
  "key35": "3b3fh9ndrFhnqeW4bNXrrvyoUXcStL91t1EYeAUqZipXzhbSfjUEqZVPg3yshWhLz8dmkrWy56fx51mxykDR62wy",
  "key36": "4AtXbc8p6tw6zEBoyUbSCbyFUj9kGowtwx5xke8FNyu2imnLD5xoebxj6T5pV1yjfAssokTwgWiwSzs9r53fCEZ7",
  "key37": "32igptrcH6JW7KXZ9TR3fCuf9X3LhaQuGDQxybbEQFvjKHwXvG62xiqiyFzRWrMCJVpzrVHQk6xfTPKVkKMLT7x4",
  "key38": "4dpF1SWVHSDVDYyhsThsq59o6QbmDdwwLv9vPsrHmWpCV696xsiyeQmFW2NSNx7gqWJg8tap3FXMcVEoD3o9QwuN",
  "key39": "4rhbRHdgwg2S7fAoErpSvrryn2nAX3BAMxG7oJJ8cVfRXcR7HZvA6VLy5UaUZCChxKwKPqYRYcbPf2BAa6CHNZ1o",
  "key40": "5zFkU6bJHJjb9sPfYWoSWcKcaCH4UbqCB9yQkYu1WJYQCTmfkYxWpRcYX3Bw3B4m3BTUidCpy6AZNgH7HPrRX14G",
  "key41": "3n4or8m4KUUsP8GX7ZTBdLN1Je4bEAe9nQkiEqyUjomzub2jRWx7pNJg3JDiGNEXddWxCfdAtVBkfzuTUH154Mti",
  "key42": "3YbrULort3B6K4JSks4fid8t2TLMqjpRSX1CoHjgH7FN9vGeUUMndbRbPp6uenVDMcAEvkAhjSMHntqSPDeHj4eB",
  "key43": "3oh1N7BmjwoKsz2ga2xwGN5wnP52HznT3LF6u2zFt32HzgXqS12AH4cTWRj5jko7z2LZmkSgX4ViGH9uLrnaSH8",
  "key44": "52FpBiXzUvAaeDQQoYkjdHg85osDhWLV6afoZ3ZB4JvAB6q1iSR3nvF5xfsRFeG2q3qP6kAozZArfsgD693FNKxu",
  "key45": "2MwasiF5Hc1CLJMu3xEj9RifLMR7ezCLpCtnvbaeGSCQ2DwKWa8Ddqwbm8BJJdz3cLaECWTwA657E25K4wE5hHQF",
  "key46": "4HSqXCjPbFyH8gYwGH8gEQScz3HLVtEQTvTF7TumPaqVdMQGQ7sjBw6s7MCogxpY4E433JkJaeTw6Gth6iyCTvun",
  "key47": "67mrNPMbL44WNgUcfzB5zJ9dWdLbqUa2sBkuYKHvAd8FqGn97muX1Cpont22mFQyK42Tod5j2Ukw2EtLDrNMhAHj",
  "key48": "3hqtutzhBRSs9464hTXocgcPyv3VmUAjrk5AMWRQJpUAXbcQu4eno5vchTrSMyaTcbKms3kXxAeMdJJrYU8qPscC",
  "key49": "64q73Kk9Nfw9RjGMTjCfSCxtik5uUmcXGC1tAAJfVCU1EaJe9AmMMsJCSrjGZkbE48rQzdJD7K84dy1FXE7Zjhqq"
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
