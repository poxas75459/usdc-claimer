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
    "4ZaM76E468zVAube6GGSkbkongH6zszzHRxjqDtPbGPed94xEwyGpGj9wYVUGvhnUeFfeuAKZScF2aXAfKo5Y8XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNj2tRPMWxLcbwrJtKRPuWmbiAnaR8YeK78d7ZV2ErLv2BLaKwaYoNcuarcfYNoGFoQ271j5Lo2KazcpThkRSb8",
  "key1": "5eNwFLiKRBHzKoFKeUyZ6A5bVd51NydiUZXAN31hbnATWRWDaCTTD9Sx5nit8xiAYvbNnRuKyRo9h4qDGMcCD2zT",
  "key2": "rz8Ge6YBg4724Nh4e9Gg1o9E8WrvwPpCA5dfHJud3spHtBG6v3tTw8zt1JXV98goXWctHRbtKxpSxtrf3FDo761",
  "key3": "6bsYVinEK9vQYtnqV45wqqJf9CJUCY3S5rv991ddshnfLNiFvW8ninZKS4axdY86BTEpz6vfmENiHY9dxxNTTm4",
  "key4": "25LkDNq6vphgXTUi25P3zEsXNrJdohG6iLYxytSDJxgzfkQSCwWivftxdJm4Y244wSYjuP6HCTcPmgbNnhLzK1PB",
  "key5": "3qRdHuZcffNeiynYHZ6kubDrJMU6cNQs8TFAyK6SiJsJsN7Ey7dVBtwuFXmsgYGm2szRUAh82YzWBX1dVeYeGgsr",
  "key6": "4nJN9vubBShEbj9ik5EXjBfNdsG5SnAwcnx7xNovdajbijMf8YnXqXGD83PJ6R7EFxvbzzFX2sFGF6bWY5Z3tj4E",
  "key7": "5jjbKABJqzZpWoB2onana5uKaXavBhRXuznbyb1yxbt5HML7BZYGhAvPK6ECrtiX68PRgSysV2vVnuAxuV97jSGk",
  "key8": "58iWTnJCDvzZrNJWAf8rnYCiQXtYp7j37wii6Brp9ZLTLxHGFQYs5BvcPzuFdTvybbafuAawWaFHoNaCT9U2stpo",
  "key9": "3m59JZbb1SnJptz6G2b2FAGDWLTT1mpLsvmRD16yrg5uLBp7c9UpEi7UExQ8r4aDvLUf5U4KkQ4Py513scU7C2K1",
  "key10": "3JN3ZT9BL4ttQGDqmGbEVNkLMd94BCwNCjUPPuGCaM5BFvwXketnzKtw1AXrFuNKDfzSLxFHQsQCJAnSecbvEAjP",
  "key11": "4KLVrwLGC3zEuDSNAVbhcka2AKN8uA7SMWow6HpSYRbZ7dRYjp1kJtKVt4Vr7XsQYZhuwPUZFhse4WtUZU7SNHmg",
  "key12": "278tTE6zFuxjT9x1rLG5pBRZHp4fBdMsSRmPAkrWjVaSy8Y2cXVGR8VvCocm55x8HzSUqp5obvEmuC3TDVZqAdFW",
  "key13": "4U3dQism9QA2EdAAC5Vb36FMpu3wTi6bDLX2eQwoq4yAb1YXY8Hta6gvu14QfmKGqF5AtneLbKcjdaEyoj5pGtu7",
  "key14": "XjrhMJbggxKWXZnxirQgce4as631TBww8gqvCsxQb5EqvdCcJndAcCNpTzDe4w9LuUS5EQKewob47oRJiERSUAW",
  "key15": "32kq6Ks7Kg25N4iMGioF674XUbRAHkMXLSJnkB9sFpLBwuevrtbVXQcD1D4PthxUzoYsY3T2EtSsfmfi1JFZWHHm",
  "key16": "3sjzXLNbWuEZi8mHpFodFh6jjcHa7gPMEncb6tGPgZf73XkRDpAzpForieyxVTPB9RHLE8WUWaRFJhv9kzmM7gFU",
  "key17": "SQ6SUr8TV7tpSrnv296KK5QbTCY66psU8tYYMBjHubAzGegHcqCMSpSwp1Lt4HhSfDtNKary5JpCENadj6khVma",
  "key18": "38ndciKEbxseCFCEDfWbbQepP7BTW8kM4dKYviZL8VRCqBFt39Uq7PUUcQwzuK7JXNPYYs8vjRAB7DHUSkoCFR8L",
  "key19": "3NLXpkeenzfTNeaMSnyMyHZWboLEFQ6prML4LND8STQVhuwZVHBWwzZvK8RkaHPv1bbYZGVLpsz2YUr1PoKmzXEg",
  "key20": "5q6xmUR76Kqarq4hmYFeYmkmTdHh1nQx5Biuo5YhXAMLzESErWh8hvxmbMhcg5BGhS6VDby2AxFqvExyRrbi9QHT",
  "key21": "5QCKY1cmtGkL6DHS9dw84G5dBeadYHvCboWgVLsFJcFLiEJLhDsFRHsfCKeVrg3zNC14yJKzYt4n3dDbTyGQkLP",
  "key22": "5jJQ8aAXAvhnTaCdWWxWZ8rWh8Qf1bkzsUsgy7ARsWYexZZQQeUHQm1HABYW6QvscvT7KG97BYBfLgAoQv77fgUM",
  "key23": "3iWzoiwvR2d6HmfKwm3QZKoM2meBCn16YSneUtZVjaczeUjAnufEJGazht5VLUijxBT9GhXfADQaw38oDN8BVRKB",
  "key24": "CJGjP14tamonzmCp89bendFUAkY2PUtcHRP1komtXtVxKHfgYMy7aVAVntKijtgDcSLu8dRxYRCJ27QNwFpKVLd",
  "key25": "51aU9KBckRZEMhMPyY48w4yLNdGXHnM3U774WjDbAH36uQPYn2DEb55Qc9LCPm2vjXFb6gPrrqa5Yoa7MqkmYgk1",
  "key26": "2V1Ypqv5EiWtYW4ZDQCLdKrRYtSdbhZxENjqQQhr78nkuAvtQ6t3GdPNrU8Wn7A152Sephpjnnmw4CgWSU2Hx4yS",
  "key27": "2XqnDRFJuwvFvNDRdoYkCBpSrYwAG492QYqjhsZxRqKyBnxtqhRqrwrBA1dfT6bno1S9BPpgZNR4JPcGDU9uKQiQ",
  "key28": "RN2nx7n62Y3RzpSmYD4sSKPZDTGeZomt2qYbZjCjCU9NUuJ9DYXRaMRHsEA7rmsS3PAT4tLbEzr2pGW7PhrC9ma",
  "key29": "9eo1g5PpyJ7cgGeYsvgsYRZ1Xck9eviVSug4eBzbvpCxNey6jvU2d9yKCXZiwE93drCpkAzXaK62upJy5j1wKtQ",
  "key30": "3R9X25f6xbgwnPxw6qM4xH8u4RX4Skcpzn1knrSQGvBEVcL2YTegenAVkrAbP14LBqUHTHaXkgX1fp5pA5gfLKGy",
  "key31": "2gsbR8bv5EbVY2QZDzDJY1RAxCDwXNnjFDUPCCeYVD2AiBsA5eKYjXbAEgmJ34h8aeHJUWP5Hor1DesSpv7e6as",
  "key32": "2aZJHn8wbNUKs5bSYdhLurY8Sspjk9XELx8E1xGTY3cgNEZFCE3zSqB7JkQYXbTuJMPM8ohDAf5NMT7j4RdXoCSU",
  "key33": "2ZttfAETxjB6PjnnwScke2LpWQGgNN2DFTS5thcMDR9vfwF22fs38TzqZsHZrhbdQZUJUCzPatGmzYjHmDD63TUP"
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
