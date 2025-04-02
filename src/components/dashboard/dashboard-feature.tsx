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
    "3ji4w4MnyzM3niQaFd2MBbx8DRamV9hDPoYdxiedThMXY9EMhFQTQS35cteXJH1VR59kY6p1RGGfruXyGyd6HPFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WohaSKWYaZihkQYEJ6k5PHW3o94dciCDNjjSVR3DohCUdj9JSZD5zedhSsnqdRqU7WkshRcYx3YF3yR7mBkNXES",
  "key1": "55y61Lk5HvpK8e7ELExqRGZfok8Et3v9PXyJhg1VFCKFBPeRwYb2A4anG84FyfdXmrMwBe6V6emv6EGAMw7Zhpfh",
  "key2": "3J1huS1uQZg7gUcke7qHy5K6k28tmBMgYaej6jkmpTG6aErfPe3aMC2TmDmZoT9zRqTcVK5wksT6taY41rENycvL",
  "key3": "4A6Fz8vNx7h8bkcNki3AdaGfFsAuPZV5e6JksVXyaSfUHQB3bBbxbrq7EekzxwKtwMT9TwnAecokh25z4dpEi91M",
  "key4": "5wsfwD9wA4zQkTtbgKrBizLgwLHdTeK42FsSRyyx3hXAtXbn7trc61W6W3yRRzmdjoHrA5cMFagrHsM2LfViH4gB",
  "key5": "5SSjCXybYTkwe3XdZsVpaYR1zMnBX9dfooAA7fEiVegFXiak3F81VsxXqF8U5vEUDyuxQ73NPqHnaKsiGaWWjZJ9",
  "key6": "3MhrqMx2GimR1tjJfA8FDPYxzmBzNjJsFg6kuvv3utFcdkbr2SjK5U8PFF7sVKiHwp3eXsuFxcqWMzL6Bjp8cbKJ",
  "key7": "2XkMJahEiFQt6xxhcvtPFgpsmba2iZvLNjuhsMeoDrjvetKRxT1uUEK2b6RJz5uXKVhcoMfSuvD1uMZ6DYVtYNJ9",
  "key8": "4Qmf6iDhfzaL3PvBsmykNEHhd549zrADT8A6e1NUKy79MZWZhqLHko4iUDHMkBFpVRCYPVrsu7192gA69HqsLgty",
  "key9": "29yJ9Xzbc3MduXtGjq9CFbvfW2G1a3y68Zzs5tb6mVoNeyKXCRVcuef9ZDgzTRA3CJNvDf9wELN6TG3FTH4tzZyS",
  "key10": "2ktA8XyuhmnvZsKTNuqiT3JrqJGJTUkJW5ey6qCt5p1BQFUWShJgfCrbGS32hbqjro9iLLW1rrPQaPf1ub1jYrms",
  "key11": "xdNrCVJe3hCVjsdVaSm5eEBAAkN8isjJpuS1WoxyMtqg3XpeEJZTstUGox9Hu5q3btykRbD9AixoVPMsjW9UaXG",
  "key12": "3FntRdaC38BStjZKAKUXh7myZ2JMcch8dHCGEV2VKEBS9grBGB13xWwh2TQsorAzoBcgHG14GKQk3gjPBvCuBB5F",
  "key13": "i7JniteSrj6i1wwS6gH41KSgFSL5hESQ3dEdnJ7VypyjN9NjrSTzRYwR8QiaHsrAYP6ubtF91tNvwFwXdVkmyiH",
  "key14": "3rCRbAmJ4uzUavTfQrg9JigC1QmzTyxfxNs89km9SFkKbjGeVxBLsWf62CBnduQcVHFrqq9ir1XiNAvpNK348r1h",
  "key15": "NdrRPzHezfTvEHYK5JXf4pnpK5JwUYfsRsDBa3L2j4Lpr7YAiTj4LZ3467NJDf419L4GcFdqpyByzduYUNPd6RX",
  "key16": "uRQBs5EVeimZi3aQjVQrjEWcNAwfbXy8NVB2ZNyVgKoRwYKjYwrJoq3A5WeBs2r8WNyphCuNasfL9CzCuMzazPp",
  "key17": "3R9uZA5WiVfW8Q94kFewkXrCc5zePwjRVFQ1RoPTqdBtwVjNeHDsssUqvqJWf2YACgXJf21g844wfkiGcmStkJjd",
  "key18": "5RF5V4bu2DHtH5Xt2Jd9UJcXnM7NMankhDreZorSJfdvTAnTc9RG7s2URY7fhB1H7JWHDeBUyQY4m8ZSEvYBPho1",
  "key19": "2rsYY9gSfbM4khqWBmnWXw1AhUEw64bvHeyTARdujVHXdwwNTyMFpewQ58ejDLFdonpFVo5Gyrvkr3t2WJ3dccfG",
  "key20": "25oMFfdYPzrvxerBqzDCmTz5vjaXhAG15PHqkKpg9KxVcaMXkz8WU6Rdx8sFpR3X2yz6SWd5MFRzaNf2t56TQVZm",
  "key21": "61av1zFxQjKFUg7FTs5bskSTgSS2BBQ4fqNx7VRaQfqL3V8SbKEuGUcvw52wWN99FwoS2izVWV5f3B5xi2cWeGxt",
  "key22": "4TNxW5nQoppAVmQsJLxWNgYYguK1fVkzyLfTtBEdvDQFrefsPopSbuYj7ZqR8QmLb1Vb98NVFGsR9aVoCFEdCusr",
  "key23": "2Qh2MXLPybCJGCLNHwSv9ZfQnAMJsqnrUSCY7YFmQYdtFs8zZYnpU7pJHb3or4mikPrThiNus2JMMLuVB5tme2Gq",
  "key24": "2bAuoHjivvXyQVDHsDbRFW9JcVtBZ1jBqNRoJwGMqV1Qg5paXLr2NG4kqdFBKtvVVry9SES5PNkLtsLy6jfxfJs7",
  "key25": "4Rk5couBQMdAdFjUJXQ8LeWvk4ytp7HRzZVXcvzbiUXBFUh57ASEVgVhWXTLoCyLYNJjnSrv1ek48k2Bn8XyJAD6",
  "key26": "3ZqNZdCizZ5JkxzHbiZgVDeRkM5ucpkrVKaUj5Dbbc6n3oABSGYBa3bMKZBS5qzdLUBaXo9czM6BqNB89kEqJoBH",
  "key27": "4BwtqjZCwqZMqNQgqExxd7NYaAWZuqAx4zn7dbVknn15XJQTaAjf5Po6zF4YKELdCdGmuyNtK65hYRkagQRmDqpY",
  "key28": "44Xdf9gzvtbpogJj9tc4vTJMEpfFFJdMn7ymZoNGHgzMP3JDUmwdJYwFd1hpkzMgqdpPVBBCcjB6zycCfC6CTHbo",
  "key29": "4EyHWCmW3cEGKhxam7174Gf5WtZG4rg4C2qqAgH8P4jDHUsQnaNe51nYsEEkPyKtYFM9BhfpMmLsBefJf3Ns3vw7",
  "key30": "mypP2UhTXJ87hi8N4ztmVY5HewgLGT1V27ugeMrmhBebb591h4XfyvEr3okspKcST3zsrs2MZ2juix9JmcyQqsw",
  "key31": "5A8KiMn9b1zAutcPeeof5w7EboFpdxZmqJmL7KgCFqSk1ZPoXfhyKLHgUktRdrw623KWFiBvcWy4UxXEUsjrTTd2",
  "key32": "34iEeqtVfpRqzmBVB4UgwJETSMsP64mouf1mLKwTwcoCVshRVicbeFW8tbFuZXBRv3Q6FoKVayfuBQShKzRegHzw",
  "key33": "3vxvcPKodTw2prpbF4T7FuXiaEG6G8E9zZgwgo93p8qrCdNR7KNeATh2efBmqfrLXd7r23xzHhysHEVgqMXp67Ym",
  "key34": "4sGj4LNYpvbRnCfoqiQzECqcqhCcWC3Ui7SBJzH5BXuQ4LW8SLuuJQvqGP1i7yeFq4abjyoJSEea6TNRVaFtdycU",
  "key35": "2gbZxkRK9qCqLX2KWkvMSrAhabvjs5QkfCBC4z6ZAejK1yYt9p7KADpWCc7W3hnG5oEXshCu27yRy4WaoW5cA5MJ",
  "key36": "2przTLCqhZNFp3v8Co95Va8nMtV4GgP8Kr6QkiFZrUePS1XcpScFasQy6iN1HQN6KkxQkw4dHmr6gTCezPsT1mU7",
  "key37": "3yd72W45cJbZcDvTWi35xuGyds7nnqQv3qnxgRU2vVL4uJUcdvVxb3ajAU7Wv7NgLQv8JgV4t9w9mQHBXLWXdvHf",
  "key38": "4RAMGBNGzSjuhdeyRazKBTkhVqFNDfKG9UMVc5JZsoM38ocpHgrpLUSosGLA1ihvZVm6kXzLvwTNmsLjVgD5poFv",
  "key39": "2kAcavC4xZXktwwAidYWaKpV2Qu1XPkmMgCySyqZyRt9Kz48YpgkfcWyge5QLJR342eawAmUBUnbNe39UULqvkpa",
  "key40": "2PisnJsx9dCohZjSTtKPirmoT45GqJRXbfwb7xgPfoojVk5LC8M1JaQe3cKhDnFTMApFZB5j7TtgUGmQt4N7KZTi",
  "key41": "2ZJzFp2aVJXM4YdyCR3xPvLCayWbR97kc6zi3B7XsJv6vS6qpxvb3wFMKrYvmrMZk3vtNoCHvvqgBrH5thkx9ot5",
  "key42": "2icMuRozc8diKHhrVm272FQr6rDWoweUGbtLf92mTkt8Avc7pETtvPK1z1CU6WihRxBEJVSYR5CfF7A2B5kUvSjL",
  "key43": "2G3SYF4RfvgbxK6Zfb9Tj6QJdmgH4PVSJVsi9AYjUJcbGupaWQtkAfms1ACUUt2hR67Vs2tYmS1gJoSH5J63GRXj",
  "key44": "3MJtUDeJ61CzJAtBzADtqY2MLwkHG1APDQp3FDCngB3U4C7V3sYruyqcMaK9ddAAeTZmdpw9PwsECgGaQR8FX3so"
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
