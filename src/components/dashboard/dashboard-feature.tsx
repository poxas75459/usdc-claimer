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
    "2eUVp9jJ6EuDg8Rpdxw7VrZXrbBRt1PUHUpVQc1ST85RgqvzoujrdXhyCTNnWaRS547hwPGyQTz8Fdi6YtnVUgRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZrvSi5KBf17bATWnB7yyZfn4gV53ZyHzcds9PrTF9nvcLBm6Lif16xE6neFnFncWoMGbjRn8T2otcY2d9LcfWx",
  "key1": "5MQn8umrkH7vM9tCkQxhgnevtcGqZihi2GY8J8eNntHb75cobCqyeQctuT1xbj3GgHPN8xQw1XM9USenhrDQu7Yj",
  "key2": "5rHYBq4GnCpxdZLYz9CvzfACBszCdQagUB3M1jCNYGbWdsrZYJVdBMPaxtCDrL13RKJKHVW3j6nn37hTohNVrPRE",
  "key3": "5bovvZRPyeUpXouFioNszaQpnZaM1DMxzwWKMmqeEb7SjZuCa1RUoh8B86HcuHa5CowvCJ6hKAJ7j6y7fzw7ZUaA",
  "key4": "46weSkh1yZXu2BH489P8QLabunPNExZba6Z1SDJAAxWpZ6o1JKPdTHsfookQZMjqfucU7GpihL9NKdaNLAswbooD",
  "key5": "3RaFaSQU6fDgz5gyK9Bzk57sDbFiSZ2k7zKwm67F2u8HtLDC3XjynP1ez4aykxRcTf1Fca81iAqZBL8F83s9M6Ec",
  "key6": "39qsPwx1Ae1mcS7SeKwhphT6eafhnJFkb5zqYQohtU46kcPczawo9xcDyXLs4PQP9jqZgg2Y21e2CCJ8vFBFZqKZ",
  "key7": "4Sve1TaAaFzkSQnUeow8zzn5smTqHJvtarX8ksGbHdDwmwvD96fmPAJXKXYtoAfGL7AWHnvTMtbto74d8f1CbMXY",
  "key8": "5iRca4xAemquWkHoVUfg7kWFX8CtsH8TWzac2ni8Lv979FhqXDZEouZG4q2XXqKsT7hSzSEnt1jQZBLRMNPemHEi",
  "key9": "54yUBfK6PCBVNoLsqztRv8fW9Za6EwG5kfzdVL1wQMAXfxn58yBf5jrHeVeaecbT77Z1G1b6umQA7CrXBhTpgxi2",
  "key10": "5ac7tBQG6mvjoZWJ4A2K6Qeo8XMWKRUq9Q5M1FjYSTgTLE3BPMAX8uPGoXFbahUcqdbXZMMDff9rZMdwzQq91nCA",
  "key11": "3ujLTiCwWfsCRFp3igB8cK58N4FCCnwfFtmATbrWPpffxiy2wByPsRt8UCDnQ5WtiDwBAoEcWh5tE8p4HmWamPzo",
  "key12": "3u8o52SppZdHPuksA99qgZvS7UHpcbFwLoEVwT7eepjtEzEgUfJsQS6DMCmaGCcWFTdiyUoeSibFDPcTaM69oAZi",
  "key13": "2THcWfp7sXHiJKUFuQscUCKrbWgz28ZGeoEZAbuaK24gTmJoK2rspf7fkQu9Ren372acF8whtGQRc123WTwPRgF3",
  "key14": "5B1sMhgzDzYyu9t1hBW1TE9HTaBud1WaEE8g5xM5Diz7RWjHMn1bZvCJMqSPkhd4hYDbcfgZaCLL8Pb1r3c5sPLz",
  "key15": "SU55jERdH7g3a7JmTf2wNbAhJkQ49eGkh1QPnK496DNaSHZs6FhYwZoMUN6QUEWbdNsrUiWotVLCBHYENTf6nsn",
  "key16": "5UU2VmAN4juN8H69ebMXWPqgFKR2qZkgY7BW6WcytshHwmzW8TEmnvMLrwVQcc57ybtXdawsJQdusTKz8YVz71L",
  "key17": "3k7kf6LUzAveYhC2L1uLMMvEEopKUP2nHeve74SWs2un8QS5GL8qbGDrGUsv6stn2BT69sdjVTcy4EC6CHLpzix8",
  "key18": "24ryoedaVvpZKe1Wrfvopqyt92dktBNfL5phREw24qotSZEkpT1gnukL31Y9QfXMTf1c6r3CKHLnfir1bhANdMB9",
  "key19": "2SuWXthSNiSJuft1KLGXfBTsuCepWycZSJQJquhJBobDjvTNSYbZJ7MNUQMuiHxGoz9djMavLk9aVbbtnL2kYskA",
  "key20": "22Xmh3CHrWrQbr5ZTdkMdXGYqZeifZjCXdisTzXP9pNBmDg7TZ87MtoDdWCskhJqKvn5R5rYkrBtftAb1fLVs1ZX",
  "key21": "35Rn6ytxUsf3ejRJ9enKDgM7B5szyW788fXcsQK3FoY8srr5fn9yX2UrVpDfWSvLZMHw1fQoGpcrrnfycxfzFNTf",
  "key22": "5Lqag4wdxCVNoQn9yedDx9hKj2a6vwoiiZA4Z9jiWMabVLnyKFg58TekiXFaTg1rtFqxXfXBHGJA2CAJPhGQaGfx",
  "key23": "3eWdY1A4heUFegUaQoe9chGi14Gy2Kap2F2rGReDzkmpZWLNrCQa93ccbXJoKHY6jp2dBXe6ZqqiTz9D5bqTFc69",
  "key24": "3P4UnxxVPWHA9urUt4sEDgjcxKAoNC3cMETT1wEn3Hbg8XxUcbWsGe3Gobajs9Q2da7qSwMewEZD3sfSogjb4son",
  "key25": "62BD8MY95atHJqNKh7BJNd4hVbqMoSJgVvGUrRiFPPC6BmjLwWLrsMwDqYREpmJWUsW6WJh5PUeW4YLxXAAEiwmE",
  "key26": "51GgJi6x3FNiFL3M92SuQgGXEJsr1RSmKu6gZxvPjqHdDgDLSqDHozAbv1nzypzo6zJVGF336fZRcfdUi27fPEu2",
  "key27": "2d7sA3Rd5dxm3hsmrrqegaXTE8U2txpyHPebkxqoHmKBi8fZmeiBYthxcUw8iLJULsuX33N4b3xE3VKLYiaAqiP9",
  "key28": "26VUwbx4GybAVwTTsq2q5z6RpNovJExHcHucFyaGDwSytHQXomCyg9SmhWaa36Ck1jL9bMR9TNN3MgYxpvZUt5Eh",
  "key29": "3kjvhvRybPJDWUjQcbv5ExUnUUrRPKwj7F58JTJKzBSQ5BtqdFYbCUT3ULnNuivh2SxtRy2KzdVp6ok1dgHD3VmX",
  "key30": "2NtKuHPoPmtaWfDMzQJpakVyAXEbgz4eTDs1grjYkxH2qZSpxk4kKXnNGFJ7KEE59q8qpKkWqf5vPtCz3t8UDQNd",
  "key31": "5STHHmgt8b7dwyLFvRjq3sV1rt7SBAF5KamcJg6BmbmdjFA9uAnZxNXBPCnaEWGJCpumk86qYkmaARcq8VH3Cmv7",
  "key32": "2BnJbWruBGcwaqGKxtdMq37cw7kBmnG7s7rkmEpZKfCGP9eXSqeCDjDM8rRLBfhb4pBNVS1qeuiVSJN9Yn8eDyJf",
  "key33": "SEUsVQXmZwsDchrQqs13Mf1CSCdG1fjbZKTtLikGFS5HibLm93gkHE883QD3UuY8ii3f2JL3Uue3LgwtpAng1rJ",
  "key34": "4HU84wyz2Sghem1hMydUpWvxdMA17VKt6UX7Yz7sGSjA7E9y7DGEYZTqHVMFP3UK6t8TAsyHzaWrRkojfbrFqC8Y",
  "key35": "3m1WyjKbFz5TD4xDnibzG4FFQ8deaX1FSZ8Ss4niaEsqp2PEJtjDPPQjVcZBUjnDyH6XVKNHLZ19vvF3czKxCucs",
  "key36": "3ZsJVZs6jSpS51GUpsikpGYZNEWNuwo5QZNkh6zVzs3T5mRk8Rvn5QnPgUwLwuMnKdnEMpXvQGRWLMxKjswmqn6i",
  "key37": "4vAaeZ52Jf2jEyaPStLJEyTcqXuGwXMtd1TxW6x7thun23YWhvPYvHhEE8AUpjL9jZn25Q8uaU6J57VAsUgLUutC",
  "key38": "4DGjz7Yk71ihFZHgLjvxnFm9inRB8YLZpjS2GXsMjfpZ9UXMnBVVUa4iggk6j2sXD2dK9sjXCKiYDWuSZEHFiJi3",
  "key39": "4yiec8FyGjHDjXtS97gnTr74G6EHgMpSLPoDGyH8DFRcya1EUXwRBK1oH29vTZACxGocJY6b4dAFw62UVdCzbvym",
  "key40": "os3e4SMERxAc96DDEA2jYuxxSqwUx3wEwZ5K66h3nNwui2eYVcRfTmgcqkhaXfCiFqkMkgi7Jy28poYnQCRij1Z",
  "key41": "4EC5mf2nWHJFT6fCx6bC3FZK1ztTtxBK4pHBfKwChfkTvTSmKyrEcZtsh27oTDuofhvHjZXemJU6znMMMCg7Fka4",
  "key42": "358X1AzkmWVNg1Ate9bD3Ax9KZevSFGeZBHXZNgud6iMg7Hjk5qMj7YbzXLmERJPfqefasbMJfxZc5C8GHddVUFJ",
  "key43": "33fmbwYPC2WgvBuk7Jz4Fsh8HLALWt3DDLQoUMXq6pjMabMTzoM7vWpamXM6ebRDY6RUTZdayqWVjYoV1Q2QQSya",
  "key44": "5qwsokinVqF3nAtzNq9HshSe3ihg3VJ7RtaxA8a1XCG7rDL9apSJtF7wN7gZjR1xt1DLnF4nPT7e92YgxSHYwNCY",
  "key45": "2qeK1woh6FrhBy949LqZNNajRxMxvDkXVhfLGD9APeiSbDyYnR4wZwL8EYpDTZSfXdZEC6anz2uMmP4SenzBypNC",
  "key46": "5cxT4YYryj7KbnAwdYRhdzkPUgdc8rUnWGRdFssX6K9pdNnsnqFJytY72uh9DxisCaDjJunbbqR997JmA9WuX3gC",
  "key47": "48eJgxZWjk7Sp31pFTFAkxwvV2YfwZ2Bjhe4wqm4z4UCLqGPP5uZyX99EyceJmJ6VeKoRHy3RmFu8mR4cNsiJY2y"
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
