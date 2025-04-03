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
    "2fYzjDDyiLebi8AnAdWkpAW6afm9aY56rNeVeEh7bWxfQSmWSXfBw2hxVzAvn9NHUyw2YJ6hFs2epBQsJCMzpD6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKgHemagiNv4uQZidTVxXmjc8QT5Min5AxhK6eXQsC5RN7wiJadzX61gam2oMK2CoDu2d4jCCb8sty6iAv5xD9f",
  "key1": "5g6C52NKU3G7nGdxMyDz1QQqDF1SUqogwGs6hT1KGnijLLFtCbLYEHnX5BCDhJySDiKq5Bzakyc9LRGgKCyadfKi",
  "key2": "2xxzEcpz7hQkT5UD6F215A3E7y5iRd2hQS9xkCyPc6G2aX8WWU7szT64tDQfmZVoAAH3q587nwJVd98XPRYoHWq8",
  "key3": "2pxh3Qo3cLesLfEpkDGZ2z8RR217Sj53agMhZbTQFBP3L8kNe8zDFD67M6BRbw1d8HqKe8F9BhprKRKA3dBo4nHN",
  "key4": "2eVoo23X1fo76sYKGe8QwHyqsnBYQbKqybwjH7SvD1uxofQut9oTsKfCYHy8EC42kUoJ1s4NWAAuFAdq3noW931B",
  "key5": "3PJnPr7TrVdmjpouAh5JXbh6peonHKJKaEnSgcXfxcj5GRdkvWrKFDx6fw1aMyahFZWPAEHvmWC8fJ3hAa8wbL2P",
  "key6": "5tPuod61AeysCFAGNE65GRGAyLmY9eDV6tTjPtho9KAhBbnc2AMgobwegjQKgYw1WjExdpVn3mVv3GdaHD1q5fc7",
  "key7": "3rg8DMZSA3XX8rVkLXm1MgWhoydNntfWj1JyXsMJcQyzV4Xb99EajLQt5cR2yzU4pGmyPReT1DWJ3tQ3EUcLXyfS",
  "key8": "3Zrge96A8gdSfuaHyC1cSugvGftQQ67H26Exuaeeb3b8FwmVTDivXbkUWu8PPmhJU55A5HBxJyjseF3EQ5eoaE9D",
  "key9": "2fpwrE946doAv1TEiZehFQUhW2mjgPYorzaomTwEQQMBMxBHd6KhQ2Y7UQ9rHj2oNv1vLRLg5iNsfTpMnNHED4WZ",
  "key10": "27WCejL8d41pZ7xixwq2nYM7vrphNMotXbN9U8emVuYifm4HH3o9FzhWyg1sVMNxf3zeVmbsTGkUxzfpqbgmAnMn",
  "key11": "2NfdRQwRkD48r6nE9RydeqhJTmx2gNh6AVW3ZYMQdqrvTfezY6abtn4rBQheE1KTKUQcZ1D34JdBzg3X7ttgrYuz",
  "key12": "259hyYgmCroaXdBdtmHfsmRBrANMQXzessTQXY1rRFNuddEpNLZeZy41d1er6Lf3noHKDYs1oN1YniCRZJvCJ4KG",
  "key13": "3Ycm3bx2a91Naz3MUHYmHjxVKkotRiyFFBdrTpALKEXv4dgrxSHijcbGjmmXbdazNqdeViCXL4DsQQMwdAped2jC",
  "key14": "3mwbMNmCkrVqJnDQxmwz18LjwhoiyJRbBRcGHm1SujS4BUURHFZyZo55ZnoTF36uPjT79BLtQ1q3MFKvjfb1awiq",
  "key15": "4T7vzurvBM6By2p7Yas8xdbbHuLWATRkHDD2oFa4D6KQ2DQB9zFPEC6aauTaH1eb4pnF7nFrRp6KaQ84BvtJK7Q2",
  "key16": "5XuLWWwPLwfLKuRoUgNDWeJKbivHa2Ex86fiLYnN2cCaCjxzdyztXD9UZHng6EqEhJKm4VowRHu7acw6waFAB2YZ",
  "key17": "4Rr1PvgaD8dCN881RRfnyKzrYTQNjnV3RsKFnY9rbavbBja4MiYKtwtk1gvpr5kVcAJepwqxg5xRspYrgLhdi2Sq",
  "key18": "5qN6MjWUu5fQ4GohTEQutCjzkZSJowSKaLTXeP2pqs3pkqnUP9xkPbiRRaZU3MYm8PEY9dNaTFXuH6zVi2XH4SP2",
  "key19": "4fABUrAoAjyceKzwzz2WJneTnJBjG4whHzdXQVxq2pwMQWP58Ry98q99NhL6ngw3NbwWXoiuGoHjasrkc6C2mrU4",
  "key20": "buFzus4F4kyVF7ht7DqSKyXiK41nBjsq3DC2ityqSRYq5X5Jc2Jvxh2MpN9cdfCxjgwPYcjNSH4P8U28Rk73zVH",
  "key21": "5jj5Q6MXfM1ryq3XQDSozH7Z6wf6KYtaXpyAxMbxcZKhGMXihN1jSrqPsJucFiteBa4kArPCBWB4t4agdcNKBYME",
  "key22": "3sC2vmABXKAo32MhMu1h9RcjMqURESkpC4L7gYrTowpuRrazdGRRsQnKmXZCv5kjmsaKPqr3CxKQeuKRPRC99Ffh",
  "key23": "fe1e6RuYAEgNAXk9BYeP83gbT83F9r2hWteK6Lf3d4vkbdik7NHRKWQGEAsacj22LfbkNt5nPnZnsgD8nxLvbPy",
  "key24": "2HnA4ooCgRdvybV9en6BofKaHrMGohhrLdKK4Bv5dAa2EPUtHVFNRZiHxTsM9gQgjgdP67QEM2hqeZwagXbz6QK3",
  "key25": "4JgGcMh7eGknSs84pEz5dAF2goqeDJsVbCYC8mZvwWotm5n6eDVhXnh31wTWd11969peSqHkz4WibazAkJdpte4s",
  "key26": "b94n7WcKu6ecTaoYMxtXak5ZiDGNiC9P37tonkTuiscQ3pyArPYFazCJ5Lx4sjkNr8aBxGRS1KSEByPnfiP1jTf",
  "key27": "525EL3zqtaQQqmFJ7Hg7QQxcEVbaZTfySYseSwkyk1QZSsGw8cN9GdcQkrfFrsGjjoLCvkDeHJC57bpbKUU5FBWR",
  "key28": "3r5uUXXpxTX5xmP9tJLUK2SnAo3YoRrc2XyB5yKX142JjSY5rCfJTEX9aCmLwJyh7DCzYTGUFFrwP2YrDmjTwqi9",
  "key29": "5Ea8hFVpc4r6zFGQvEy2vifvCKCG4gmKX2jbuo7QErTaxGEDg2vys482KzMCncDzKtWeEGUEi6Ein3oGd2CBAviX",
  "key30": "5SLDwjJ1fJRw5ZEPtwJapbyxdxAG754W9CaW4aMWcjXGabUH1MgtJK4BVHQ2rTDozYN1K1veQgLUECpXNJm9Bghj",
  "key31": "27VRa3HfzX4KL98PBsNvjAXnKKinSpGUM4YxRxSsWiZB6TiaC6zCGtNkqAWqyKFV81NUD26sBJbzc66oAirrVhCP",
  "key32": "4g5qcjztbMXgMRg6KcrfTHP7MTFkQGWRunKNgYmhKw8FzNVXQpGLqGohrT7UN5BtEBpEPubjBjHZ3BWdACzXbq8K",
  "key33": "2kBnntEddwTcHkBnjA8wmPDpaPoZiCKdUxcZbCAgFVhZZUjUayetSH2QC4GYZTLpgojh4tcn5Zm2rqxp8PyLjHB4",
  "key34": "4Zi47jmQaXSMnTuMmTS3sXg5vR7E59uXWMBDNV44NonjMcNwGDzWqSLYAQSXUvQsZkBdDNQncRn4RnxDB9emWH1L",
  "key35": "43gLcggdoYTeFYXw4kjMrMovwoz9pbZXtzPCPeqVxzJyU4TRwuyeW3Bniwpo5ZunVoUMKB3Dny1AJozxxYk8X3PC",
  "key36": "39EWEqXgYzGGkVE4madoLwR4B5NcetwvG4vPytsdYXiz7M4GMMqhL6tZ9RW1qsyb782zM1JY92FxA4NcopcVV8YD",
  "key37": "52KXFEJaEqYmJ8fnoU1cXvUj3YApMncM3zumvPj458XTw7Smb2B1hStcNmaJdycwc4hdqnmgbhCaEKrFd5M35jpJ",
  "key38": "2j4meLD7uJovmDpEQUHYq9SxFaTx9uguZVP6soBDPYBfajNz3wr3jTWK6bD7sPsSLFQ9LHAevUVjgHzUfcAAB8Qi",
  "key39": "5fZpsGmmdHWUFs62S9gB7atP9cQXnXo1w1NvNVBSvVmPVSCxWb9vdVCH9ELX7taMNHxjYwLmhUMzT6e5V4ZyUo7R",
  "key40": "3ShUr1z6xw9ych82EeWMa8zoSGqnZJ1rxCNA5vgjbgjiTXmzFqxD9567Ny3kD62PNQNurF59oekY8f7Tt9kiAuVu",
  "key41": "4WRkfU5RQjWXYCpXpwXJPWx7hpXtpipHoUsNyZ2uZJdmuPkBuF6Rq2T5u1H4btB2bJ8RM6Yu1n28j5b7as4GMEin",
  "key42": "2GpgXEPP8GyVgUe7qGaduDWyy95dwgAVVmo5UE8S1RZoXybk6Gw8Zxd3jVEqiY185pYdgYq21PY2kP918w9S1sHG"
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
