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
    "o5HykZZ5LK8hZeex8XAwxEa5iep3Qt8fbNJBbwa6ycLECB4RTp6tzoYtL2FhUuMB6vawnC96mtDE7wa1z5WPQG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWG9ST8gyypzcWv8ZPrgQumSXZoe4JSwFkBMhHQtrYfAR4r3Qj3vAU2iGEyfFqst2CpPTuCGAVNPnp4C3vJuPjc",
  "key1": "5oPLEiyZd1rU9Deqso9czgm4WJX76kssVu2s6yBMPNE4Mu12sGkWGgpQrTgW5NCsf5GzhrjS6gxKLJUA9BEEf5M8",
  "key2": "5YDMTUdf6NmWc12TKgeFzS8wxYoGannC5YfnWFr4Cwej4xivfakEL3MrXrirWPjPcGWBuayqemqffwbyeu7LHxDD",
  "key3": "4Y7CZgsvpFpNDq3mvj6xZ5eLNAZYsNgZxfHKx3ebBqBgSzSN2Hpch3WsqaVwzSrHc53rMg86svgxuaAYuSQ1mTDL",
  "key4": "2LzSJtQvQushjqRBbQAW54TXtD9x1v8n1K6ivy585iBTJ17ai4jfRMzdTRDsj8YXaynjwojQbBL2guDiuECc2Mq6",
  "key5": "523okQS6h4BYnRoXcxDUydNFxWxrZeHWxDbzrKH6Vhv6NsbhUYBiGD84orqnTvYZWExj3C6huvqM289EdyPQbTxv",
  "key6": "3m8iHkJRAFzPdMCc1ZbDz2SJ8dSFZ1SAbW8cbrnXVFd3W8yRdBJXxV51qeicd93zHEkteWhPfaJ3acqR2HTKrTqQ",
  "key7": "3q5xtd9ko3xMwN9tVfsWzKBpGFLSHufNmhQ48FzHNMMFHEG6ymntLxxW6kRVT15SPaharwStuCJpnV6gxwGGSSK6",
  "key8": "4wpxxSetuzrWaunV4Rn8he6zsNHfaZv3Wnpn7hBEgab7rjxwqav59gckdHnkJZ4EuS9nbfSSDczSio7dM7KTtYom",
  "key9": "4VYqzk7WzeMNWzRSFM2y86neEj9rsbeL5ijoditHLJnM3SMDxWtUK3TsZ1FXEDKNUHZzC1ydE3nYfMRyDYwzPFBx",
  "key10": "5RNTyfQo9NN4m9PNSme4BdcdAna8RtzXevuYCUFx5eJcK2bJ1A6ZHygtkdAQMCN7JWwhqZcYNHEXowSBevXDYXGk",
  "key11": "3kHaPAAqFFzcRooJU3QdsfpL3zRg1Xywkap4Qv6E6zBRhtpmsZiHC45iPeRZecPToqqKhYrqUheT5F4wkr4pvpKv",
  "key12": "3W7JS3cX8fxvQFPgD5AvysyQZujtunPR6Mr6MHQwoCk3ra9HWQdF1ygK4JQRt78boNzmhBTaGotCD3xk6uKGCASX",
  "key13": "671qaKyj8ppvRnrTV8pXCfTyLmtdhNQyejkMBGesqyTmn14HkiHFeD7pYbu4KPd8Q2aasjKThYxMaoUWXTdt9kgC",
  "key14": "Wqf9LkC7zwpgSCwGY5KzwrCwiZ4QMEnq6YVgX6KLGhEDeMxPDLPNWixQd2GuoGaJR8PvPZEzM7AwoYarQbA8Zhc",
  "key15": "mb597wgZ5jXQ5LKRXJGcNoHTBw74KdFbRw2zXymraRLbVWqnpJekLe6nvurLM63mYgrmumCuGyesLU8zVdVpSsB",
  "key16": "3ZWLz9LJbn6mtLs4bwq9iJXkFDapKqnPRWnLw12AsC2kK98TPCLVDcaspL7BDFrLQzDuJ63sHChFnkTPQL3gsocX",
  "key17": "8kuebmRKbKHJKeSX8XW24dauGxtTSHQizc2dCDvxodnbpQkvcpgkqRYncssAzTptruTjriXC8W1xLiAnBm3i9uS",
  "key18": "5kgJLV9RQXUgEatzQJKYagwSpWqMoHxyP2hCnVAFwhUQQjXLRvBWztu1WYmDeebrGjoZPyTrY6Kr6jvayv4w8Rfn",
  "key19": "BXNKJWNaTCGRgfCULq9sYwsidmUP7HiSQCQjRjuzNC2tjjKWS8gzsvu9mRhqDEdXpCqmmw9sFnApzccP4pVZBEi",
  "key20": "5AkXkbPt8zoapC7uLjvaLJuQwnztYTj9uDn8HihMDLnzjYQ4kG1RyLcX2qVc9cLk5NzKXVaG4paon5w2PhLQXYR4",
  "key21": "2wehmYiyXc9wtQ19z7NAsZion1YSor6LMJ3gWtKFkQd1Fbsv8mPDhruzARqdYWxymhcpPwzsgjL9NgJ1VxyMyeBt",
  "key22": "Y5WomB9uN2FPTFHs9ZdpCmafdxDKGurvKbgoCgnV2k4aXZwbcvNxoSwAXy7vvRhuHvhS2M3G3AD2iMJQHt9VcHC",
  "key23": "dxRVcTBhhpg7uqS2SgZFKdb5XwDYLzugXgUVwTJr22bfadzYb6UNe1kEJr7rL8fE2zWYuhFskbjDJoJ3Ej3Zhcd",
  "key24": "4UAomTrZYwGNqphSgySckRqp2iDaPFLeVqwN2dZLGX6WQdXeuLCAJWhLaDr9sx6SuzUmN5HxEKEVrpamMr9ZuMnR",
  "key25": "28xRJ72eeriyHHe1JNuk3FNA1wFZDsNpgeeAPcUDtrkjdWnwD5L9WRcQY32k1ppdnvqquXSEoNKQYVKWAvggq8DE",
  "key26": "NSDyzPWySuAcMUeBQbaASSHV7TG1jzq6FMhtfrf2FLv25PLKrqG1bCmrA5vAqPmht4izb6aLktL52Qnc43zPEmt",
  "key27": "5FHmL4AhHRxDazJTmXba9M1C9ZDKnG7ZVQ5G9R6C5z6X267XEeibhY1YXoCcEN7awS1FQqMSXMvX29RkGzuTFGEg",
  "key28": "y4KqVdxWtdynbJRSWnabSzz8wS4CmgiBTxRuAv7SujKTv3yADAieeKxWRFNjW5mHiyimeZZ2tYeBCSAADg5F6U6",
  "key29": "5yaG5iXbg9AKph2HheKssmriVVoch4soGQLz1svZiH9bEgUGzX1vr8iAKYSApAcmc7EXNoMRtUbS6EbJq4kKZqg3",
  "key30": "3XtmF7jZ6kd6hJYwvVDrmKQm7tFsiCH1xtCT62U9codNfR3C46bRZ8AQd2GHc1iGgemu6P3XAC7GxyqBJLPM7Hhk",
  "key31": "QQTrYLZsmwDdv7d4jdXMW9146nk9sbcQayZ42S3euJ9cpLvPXzqEaY6wGyQ7SxZC2B8DNzhomLwhCkEGX7hJGhC",
  "key32": "3Nxa6sZ1d8qSWQ1fcLbVUDfyqCASyGCjCwTATmmZwfPokT4VALqtcyxoGi6L8s6Vu1NrWrKxZo6jh8Armk2Histm",
  "key33": "33qabV5ZPD4JwpByckvSVSCv3ZMzQcNjkTie2tQN7oQYusPU17BxrhYZQprtNVL8xhPyrZM9Uc2nsT4zxecDEh25",
  "key34": "4kVYP5VZwHegAuKCJLGVJ99eujjRmERKmA6gv41zuD4ngpXXFTEHB3XvNKXrM8sf4LgegFxDRoDeqZehGM1GigJ1",
  "key35": "4goCZzgcYfgrusDDj8n7VzoM4sQELDoiAuDYBJASHUP43aK3uS33Z6BZNUHHTJh7mc8APYWih1JRM2Y4kXZMV9Wy",
  "key36": "L7Tc1hz1piZZFrHrPS9xGTHyP6cZaEGpdBGpc95qd6mjPSJc2kdSLctAxHk4HxWo2p438xCSL3bAN7RRDmjRQyP",
  "key37": "2nUdwHofACoPVbggokbG4LBvoCWnz1pGVtjDafHMiXWGyRgy24B95JKNurjtMnsJSRir7RGQtRtbBp6UHCBFvpmv",
  "key38": "UqJVLj1qZaEmWuDGzbdtytyeGm6wWY3Ezh3bwFje5hSbhC43GojUpNH6qT5G4Q6rp67xk3CWPjhsZ1vTfBBT389",
  "key39": "k5jgxo6iHiHRGQPbFaVTA8kdrpQBdaM16xvNbbq81p3Nec4CcMLbxLCH5r2CBXbpfaTiJrXsaq47cCuV3SHbugw",
  "key40": "3Zy2HoeKhiwpjJsktsNmPNaKmhEHYAzgDWdvJPkxPWYxcKDzFQTMcrbi9MTj3YtEimtq2opEKxLGeYEHyVmXeYbJ",
  "key41": "Ur5nE4eiy49RkEjry68Anci4VzYTDtQWKov5QxXzfwp5rSiMMCsnH14tiD1t9VmM3Pe5kvvHM8EDAMNBE8Xyx8X",
  "key42": "2kJdLP1BpjmUZMwHaMwBUJqEv4vZjC9fqR7aXXVZDgKxBdXgNmpMKx9RMdL6k1zmKxhime1b3AsXzKGgv3SnDZ4A"
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
