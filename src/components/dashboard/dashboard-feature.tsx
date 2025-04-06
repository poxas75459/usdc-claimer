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
    "Lf2ykPDJXJwfYzpB9xgHvQFT5trYysozUww2MdD598L6bdLkvXDDYjKeLNYxjubG9AB2X2mc7zocX5fZZgnYa1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfwjnBFSyuG5as6hzts1o6cEpADZEvNoCpT1CfKERvg48TqRY3pA1zTxXcRWzEqZHgdGahzN6QDB5PdXPDhXxsT",
  "key1": "4PM9ryehiYLvrNgdYqtdhq6oSxaEXv54e9FXVJETJmKbdospxTSKXi3ErFTZifpd73ce5q9wWPr83DBZ8Q2uU5YK",
  "key2": "b8dVzzwY9XweqWE6mbWXiA73wHCXcQ5gZNcPP7YVpe8L2fUCaGvJveMmULuDT7eTyA33oic2WhtW5J5Ycxqqi9y",
  "key3": "26YSyY4eXcF61RbSw79yh24Ln8bW2iZjnLq1wbKomy7LSe4WaFp4Dg48fakSWDZj2ZcPu1Kar5EwLbzpo8wGgVKB",
  "key4": "3BJWPBgLGbRc1K39k9voD92xKX2XTDAYFjyAVLfJtDCTZVaWi5oxAycayrLxjZ6xn5e1JaeQuKjore4g2mgXiecH",
  "key5": "RBxbYHsJAppPY9mdXiLhJ9Xb4dsaea15ag445K1dmu7xyETE3unN45htUXZKhFyn23SM1Few69UT8jV61RjiRwD",
  "key6": "3hoiRyisgj3CVpVLDLhwCB8YryCvQ1EYMaJX85rdCruMcoaSuHWYHCqFuKFGGwsswFgrKgZRa62btKpii8v4JUYe",
  "key7": "52dby47EkcaCov2zhJqHAcQT35q8J8Gu2fwYYLoVKPyzrjtCBmRXe6bwn8bwhZZGhMdzzX7vvPLXR3zs4yzbLhBb",
  "key8": "256USktEHhEHH2tCjo9bgjnHEBiSieTuMmKfZqMFiFKMeGtQ2bQoUeJrddurGRjm6VYgnrvfRXisS6yeJHeJ4HW4",
  "key9": "3yMzFMAhnBpc5N2W9sFRUNgBxWQKvHDnrchykwbEiZrRngHsHzMiM9qaz93mZB4p2WSAsst6iTQbjiWRYZwr3cqA",
  "key10": "3hYBbFZ1JYTsYXiYHemt9q4HHuLYB5nVP8pusskyT29neGy85X2jA2gEdGJqv5XSGe7D2jT7wT9VL3HCBRTxssF9",
  "key11": "33xVmcbSwQZB2LkbxHRnCXktAJUPFMiShXC57CcLDfydP32MtYrKAS3t1zUxc1U3Sn1L2zdr1sEzLmToensZcD63",
  "key12": "2pb6pow6tYsPTqedvArrvVvhmE74p1pDg9b6MojCUW6XefQ8S5HLBDa4GwRHgpXY6HyRTMKoG9DmmeppgNbmMRvR",
  "key13": "2jU21XirtdGy7R7bu44gNrL97aytbbrjcGwRdzQ39droT3P9qrxvJ5d58VX9k5zc79wzAGBdFQTbHo5hwG1uvK3r",
  "key14": "25bbdRK4XfCd9x8RMM934PhHdip4brU3SQiWxywqFXuuGTgQVPSNqJwE1Nvd2hSEjNpeAqDkGeWvv7tTyFH7LC2x",
  "key15": "uW5cftM3xq3XmSFJfyg5mg89bSo7zR3WrXQhbfAKcKExoXTVSRayGpGjqMxNsbf6UT9FUmha4RDJvz3nuRYUabp",
  "key16": "4zFqJ6nGVA37RvW82rtpHDmfzMALFTkntNvb1seoWuhVYX26z974WHjx6oJDUbUBeJpn1Ppub9PnUmq7FEx1ieb4",
  "key17": "2WzUShBPim6njRA5xtMtvJGgwiQLqo54ACcy3oizxn4Erq1AGJ3dw72T2YFuSevjvBAnQxTg26ksWJeQ7MYu9cxD",
  "key18": "51ajpiheZi4Fa4MKM4NcXPJEfrJmDKEj6gyCSzNQMDPiUSbjVyv1QVpXQeWrDkxwPPnR5XgkZ9WFrCQxrWMn4NJL",
  "key19": "3LFqREfQVys84rCGwgJtzyis84bgwKspj1o51TyUgRsCavjE7AiiYKCpLmaEpDaAik6mek2NPbgNsZkEbd5YnMnp",
  "key20": "3v6TuZHrGYoYHSPkRhDYyywfrWtjpygCNyyNN1reHF4J2FRcqiw8vFYSRoGUTLWjzqZCsSjpXemCQ5nxAgpw93S6",
  "key21": "2FrdLQGpAZEiAJGy6XK8gDJ3cD5UpwEnnp75wM7VmJqFNBsfbfkuYY849AHfLSsyEUeN57ETT75UscSvTnbF15xH",
  "key22": "4jRHzG8RFMgiG8CycRjmuqRvat1Gc7DyVwqa8SsWoMBfirykwbpx8AnmFYr6p2XWVpoXACWzxzaLfxW1DZyPYTo5",
  "key23": "4zaKMtbzvzi8fuC8iPZR7ZBX6keNca8yJTAAoP4AhBAwSDoHPohi1QuoYJmteUW9nWTcnzWgBc2rTu6Ahu1dMC9o",
  "key24": "4K34kKMukYG5VtDqypk2bjKJcHfrAUjo16tDi1L8LvVGAsT7bQduEASsBVNpVbixvTGUPQDu4KS4sgt1J5PKwS6N",
  "key25": "4ELimW8JWcBNgxfvZ6aGKZW72BRMB3oUuS96FBzJpzSpJ98DGDvsA4NeudsZxFFVVJ4cWCQsKhJz7N6Cj5VB2yNE"
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
