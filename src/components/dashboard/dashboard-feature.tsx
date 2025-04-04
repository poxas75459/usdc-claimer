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
    "ZWizfwTVMr4oouTHhbRMpbeY4tqMci8Q2ni6riF3W8c15MgmNFkUigPRqVtiVXbKziKFhaGhyYLoMcaaMZzj3gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGkejhQyWWC34QVVADDZqy8YnD8BR413jYJ1P24iYYnMXwoBq5aZgupK2exGNZVYEgKkTv9bAAKkx2qg3ybFcoT",
  "key1": "3XNBdr9FbBiwGAx8XsFMcEwpHw7jFLEMpCJ3gsJU8HXSFkNW1hgWZszE4pcnVPwTp6a98EYjeWDPkGvYzwZgfnYv",
  "key2": "bAXWsRqSkaik12r78iBr23NwNrN3tommRyBSfkCGkw2uRpPvFrYQdLc9YzdmAdf61mny1mPDKgUZP1N8sttg7xX",
  "key3": "HeXJ5CfVCgkKPMNjUBDSzEsdn1JRuM1VqqMPbWdd3CHKzJZxAhPtxHQNPJSAbfhLnAmqXgg7JqssM3nTEtk2P9L",
  "key4": "27HyC62QN58S6vsTaYrU6BbqSNN6BgweMuo8upht72Nc1qzbhpXcxccVSZaPkomBRQJkEdNroCA23nJE7Gy2T5EP",
  "key5": "4TZ6Y9pAmJz1NRZQqESfrsQ5zZz3tKdrhVNPMtSdVFoN3fyxX6AZsnTgENnDtyLpxHSeHgJFvASK2LLai7ffLJph",
  "key6": "5ebHuoaU1Pef8xvjfuq2MQyty3nSNxTCevQ5SFxDGrEWWKiW6dkFn6bcHpmhHS6LuvLjPp8KMTZhc735diTrA3SY",
  "key7": "4SbJD7UyAGeHmEWscTLahd1okKK3ijutxaRE76oGqfx8qZLU7ESrNNBzGugmUxcQYcr6Xd2dxUrzpfz6hHxcpGPM",
  "key8": "344CaGrQTT2ysroWgFYg1Y77qA1srdE99NvmkQkR7QgfgPSsyjCRUYQbn59rtfP5DgNS3JCw9ZLjqbB17wwBAbHm",
  "key9": "25mLZhXbhvSZDUw3UWCmrCXNzTuzM8KjXPUK4zdBA2z3f2zENzoKcG7yjPbKN69RCiVMdeed5PXAYdWPYxAvaJw2",
  "key10": "5xUNGiY66EeXy6qE7iYCZ3htr3JDnfacmK3auu4F8kSTaTvK9dP68qShPwWX1Y9nTGEhBaj5f8RqBXFRVkmXYKWR",
  "key11": "3n47HpSwNBkg5i6ByV5h5JBN2fpKKN9oX1v2uB2TgmQ4Ddh1VmJV5X11u8JScDcAJQj9tQM8DurDXvHeCznieajL",
  "key12": "3CbLqyDLgKeehLFsZypTjuPVZSjXjeZ7vCsEPKRCRaTSwY7pKepr6uPZDwPb15GxU7AGpGU4qLW7Jhwni9cQbHBX",
  "key13": "3f7Rh5bBXcdk9EuaYGyaA7ujN1xPyMLCXZfz1zfxwyXYEjKydHSxGB5FTQUn2PRFGYFXRxKqSaC3jS6imDj7feXm",
  "key14": "FyGPe8PZKSNtEBGFih1ga9AHTmenw65rfrzTN1dfXFb5NjbeQn5xLdBx5zU36U7FfKMSgzM6fL7XGW38gDG1RLZ",
  "key15": "zcXXeUuYAnuYqwMHDUnnsFsThwqvDSBH1KUu6JQQ2WDLgyVGeVhW4zyZih3x8mFE99mTmnjMP39DLdkidrXczxA",
  "key16": "25KVtJknciQag6XSgCn9VeLrQQ5xcrc36WetbvgSr4scAuCXL2wFpvD6P5YfrSm5JmLMhAsJoEefnAUA7wkvZ9Wn",
  "key17": "4aWPkkZ7nuMmyyGadEVZ15yDe2gQZ1LypFxjSgCtNJmbmqcTXjv3FQNHUmNjAQFjBjaophZeFfGQEefRGwpHzDAZ",
  "key18": "4xwiSXWmF4dTe3y6LPS9oGeNMMNhF6RCcYx3Twhj6HhFLw3MxgmoC3RSGKHp2iT2f1wtJzJYRZ3E3xkardmSDcNn",
  "key19": "6apQ3QNyw4fWsi4X5Zs8RdoZaBZ4DTABijwbPN9U9ZCE7anaPqG5XH54a9PohQ5y3BCW7UZJiDCgc33YvC8eE5a",
  "key20": "3pzCHW1GqzjVvE6xkVu5DqzsRdLVPGeNkq34cTfpEVcGNiL7i5xfcFXFf3PQ59pyNGcTGXyzqkJbdimtbvahxhxi",
  "key21": "3yyNhx3WWbHhtvmbbxdZdar7oNL6VMvG7RpjTK47xPp9CHGDXdD9ybfMdwE2ws5sufTGppw5Xa87BJSyLMjpHugR",
  "key22": "4kxPXA6rqqgPmFbkV625oKnHT3Wpqs6b8Cpc3DhZqkhnGsYYqv24CsivSEhsyC6jZjz2CanT5mj9VUAcvHRUt9oB",
  "key23": "4fxcEfNanUdA6b1qYfcmefkZBQhpQBcfxJFGEqcWbNAJBwALSzr73VnQhCiKGoMN7VJCm63uRQwPz1A9wt87gyJ6",
  "key24": "ftDqxKRXzQYP8DMZAZP4rG6uodzm53VfadvzPz5RsRAV32P6pdTKAwmkBJDSQqhcKsQ9WGGvzDXUGBQXmKH4y8H",
  "key25": "4YfdSqaz1TfV2ua8pBXjXJ5HWpVGQGDW3q86irVYZyiFRdqrUkA1wRhjh9hBX51JBrBVZJf3oBKp3jvLw4HFERKB",
  "key26": "nsfaa8fBmFT5WKs4pyqKqbbPBHGBQpNjCPLK5VRxGAUdkUGXVWSmZCHKcGdFq8hJzJ4VkVaF1hiDeiK1J28NVwh",
  "key27": "2532zMRqkqJtEYZV3G8CEX4ySXzv6Xo9ReZ66avEPzC1Q299e2umr87GHXYrkibj6dijpn6romdygLKJTqGLsHBe",
  "key28": "3KVDdc5P83UpM61vvPrzgJmKQELZjPW8Bkto6adZ585Fo1BLDfuc8gpJRmBbupVwCxirbt9KxAgXdbhRPajV6dRe",
  "key29": "3QmyLehSC2h6hC911oZjC2PbTTgPczx6JhCXbRqtfVbYgCTnJ8jBY4YEAEZpfrp9tCiqhzgZkXpaAahJErMVQ5p5",
  "key30": "4QqALA6qke1nQgr6dP6RR2tqpwPBuQzmC6ZBpL8Jz62CKszZTs2fnYjEuMtEn7LiB8U7B9eb1KQeMpYQEXZwKGXz",
  "key31": "5yNa9ygUTJukUuu4MxPfxWTxkxmHi3abm2WbfcaJxfi2mGab2YJsMc7mzMFfd6Lp1mBzxWdzimr9PMadkMxwCsEt",
  "key32": "4WVw7W7QrvCRaHxuBdL72EK3SAs71t51sdMrUx6qpfcxGQLqnWaAvS7VBo3f8LDoApGLKEFGQqDrBFQAAwd5Dd1",
  "key33": "3SoCVdBF5PVJiyvnT52faKa2DkhdJpr6ekyuq38yMsGHx4WDWfnCFZRbA7t9KzntL1rK94Bgnca6jqL1JC3BzHy1",
  "key34": "3zBiXd1zqHDGCWnbhDsrHiUQvDeJM59wTuoYBaKaxxQo8X1tjy2Rvdxi6zD6ZntKjEy8ReqmojYVzG7x4t4WmzcR",
  "key35": "5aWm5Z17DjKFcmdDUCiSyz9RXemUS4vZFBTJN88xcvD7vsksG8QquwkJoMGiUtvpsJmgxjUMNnXPdw2dLQ7knV6Q",
  "key36": "4X4mPzmJBSxXiGMCLdAfLhaN3t3fMZUdtqzDUUWnfrRjt6cKqQ6EfqKbE15F7iCnUWEskRZh4V1rzEYq4gYftWWb",
  "key37": "2wQQB3WXwN7Zx7j36gDLNXJeqkp8TXxkwoe9rKTgWXYs9iJS3v5GhxsEgXunugnbxr8hDo1GhgjgwaSAdP5FKKDU",
  "key38": "4fLv5i5QmxgduUiMsTNvJtJnUZZEofTQ4MpDMB7koyuG9CgJJ6uHJ7VrMbwppebeT9x5jdU4EVHD6rkA9ka5Q3zM",
  "key39": "4JuWrtjjSHKRWkfgKcMSqUPEgxP52e6XytZDLi9Lu8t4S6nApRd5w4Sqghbjge8XXkwGbcyHuPa6aKoozPf9s8Se",
  "key40": "3w8MDwsF6cpLwGp6vcZ3faKrV4M7aFT5vTuTFFVBLMvbB14VyNxuoAZEZihDTVqmSqaoiW2ScAUZ2SnvommRu5XR",
  "key41": "e8CENNP11kDDPoeAi7Dpwnqh7443VBge2Ma4rjvk674FG7KrFVC77fj6hTgYntiH2D7dJLrwmo5YByNUWEsx5cu",
  "key42": "4JQkMaWPwFH3cAAGUweHvRHBpP3v5RX6DLhKSxB5aiXsriwZAMjJFHvQfUP4DZkoQy2mDRgPh9RXBVChzLpGxjXh",
  "key43": "2xXaDfwsixZeKhRMJe6jKCVqGmLmkdKRrdhGoh1JS3wPyY4HAFcQ6AobtA3woeNevZZMN2UftZwLj36rHQbG3izP",
  "key44": "F6cGr7AQYcADEUSdBCvSfbJwXWMrUJJSLTdEa4zPK5PYrhBadJVwFFVT7ggQMqrCmavRoXwD8T3uDvuceVnVjD8",
  "key45": "2688czXiwPEbuXXfsEEWqjNLBeycv8xcKtBJs3Gp2MeYX7LgNMDyRQYtMaERJeuk3YNmdSdBs8ThyqpCcWkvfzdm",
  "key46": "67H4b7aH87j4Tgx4s6N5h7x57xJcgefkYYwLmJrUTTWDRiww5AJ4BVqhBVA8tvsWgYzhPsAN2hYYAERW5FQkxQpD"
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
