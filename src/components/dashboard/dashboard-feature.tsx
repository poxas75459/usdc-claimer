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
    "4P9bUmQThgyGJ76DmbFeLgi5BDBvKiJvRFerjw9SxnqCaamFzAcT7ujYqd6TJ3tAdWGM7g461BLJfB6SiP1zVurY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23u69QETiw7WVZzZP5fGobNH1dqi7qcU2Fz7s1cFHh3GVksn1TNi2GMDfVDYMJVewZDSsQadpab8nUDJti7YvrTR",
  "key1": "DBLTDWinFV11qrrunLn13P6ks4BYH7vBzhBHJfZTJRaeZdaVm1ftNhiZ1vo1FAuTqCDawXfkrhAuCvwT8k3XsD2",
  "key2": "5Rgp2ZeByzpVdKsC4zuNS1tmeKDudF9NisFHMssZZW2qZtDMCFD6gYh3fhDcWv4wdJgZVnu13Y6wtMeS7NGTQtZY",
  "key3": "3hH7hgZqRSVxPTn7ytwPssJVBF2Y8QrNd6dkQerzLSMAqQbCRBbXnMFeAD7k3uRbxy4d9UFjqJw1Dnhh9zGXhL2e",
  "key4": "zuC22Y74WCmEohrKfwE3MgMvP8xAqbHSs9LYgPBJjL3ewV6Lon8qWV6DKhTtftXd94gunWNjg7ZJGkkAJgtbJxk",
  "key5": "4fnW94eHm3ctV8XK6dxpgus34p6iGYHa75At766kehFLDAJTxHPWXWVqJwHiCybyQA5jgmDAybb3a3wLkfTVLVum",
  "key6": "3WgeajDqiF7gdZtJw6LDrZcpUgZ9BNC8q8Xf51nyn3FJvzcMuMiZUGgDL182bPTzJW2cXXyMD7CViVvVdMNYN1eF",
  "key7": "4MiDdNfGLj2j2fjNT6aPS3dCs4KZGcEavPrp7cifmHxaXpffVU3K7EmX3gT3ULABkF2xPBvGqS8wMTZKpUzFEu79",
  "key8": "3zTikvdXJ4vaBZ4zeusJ34KCTd318XdSegudSso1LXWE8FXCgtQvRzaMX2qzBHGPADoYWnpz3H79g5r67RNH7So1",
  "key9": "2xNJ3UcSNaHbufzoLHhSBNU1oVoGqebrXKXsddUc6L3qZjC58syW9LALg5dit9Xqssu6vWQD97gUEfsk93EpWwUC",
  "key10": "w78wrwRnRmvH41G924YmjbVugTWdvV8nQHnGZwP2zQVzCiShuBfXQpmAWqe9BBiHALzt4MpBpVeEk4v5AT4uedm",
  "key11": "21srNwgheUBhkU9nTwEVMEb4WNYoT6FnTRhdeNW3AtXgyfe5hCD1FM34sS2VDekHB9dzTig336wR3M59n7etw1sN",
  "key12": "fQqPiiAwXFWCqTSFS61PWHfGgqvdWqwbprmxcGSVZzxcGHSjeotPHHoxyG9eXqG6qPDr1zFEVVRe3qP1vtoFGf9",
  "key13": "2Ryig5B4stpVCKd6VJqcsREZSPwy7xXctygcX2WhwxNgD77vP1wvgkPh88maSQWY5Y55uT3794zxdApNHsXZquhc",
  "key14": "2WUpksQUFZBTkyrYjdpqFpP8zLRo8V6BjvHcz5qajDVFEzaQ5UYrc3BjhgzpsZwsFPpkHk1VG3FLSKBDHSqbMzyu",
  "key15": "5mqKdXvCXn7n2BMgsc2xsRtyzsd63QhhxKbBKFhiSBQrK3hM22U6pBYMLCNbiCuwy3C4pyt8wcfRV53ahvvM8PBS",
  "key16": "238aSNRanTriMJhfrHvZ8AYD3bk4aftafQhdyYM9RVNuV6UAkHyXGJQKER1TNuCPmhWWEQmccuqCbNmHFCfeBnMo",
  "key17": "4JjyrzegWjYjLQi8Dsnbo4NGKv3ziSzwzD6f8MDVpuXmDBuLFr8Gg4hYAvNx1NPaasKMfW6WyU7bzu6HBTK986Vz",
  "key18": "2VF4Q1tJqJo96XJ82sNiSStYDsr56VnGvPsgeyigrdVhDsFQRMmRYpviPDKYkGphv54WRN2o1yDPgaANsxwsmMvp",
  "key19": "2N6RWWTg8EKDSTYcXiZjUir5SwAF2siudcqkuR6rQxxfESnVaDtCy4sLt4ixMCwnpeLGhMTXCPxq1WGtczsaHcf7",
  "key20": "3TqP3r5Q9ZCQtRTgH1uQKkDRHkBH6MUbNmN6FuFWL2t7JMka6r3Xri6rxyWTP1heXMZim3Co6vUYEizZpYcngVrg",
  "key21": "Vu9yT4ZyLtVmaQELGcYUejoMwuBLuJVVsbQSTUCbF6CxsarjCWdWd13NLQ6PaC5JbEnSM4S49p8jvcXpVomSoPZ",
  "key22": "3urLH8iC1w8WRMF4z4HM1Hyr5npgGiwaGZ3T3Vv2SphT1QwxHyHX7HVfrAWHE84rPToP7MY7XA8f2z7nmte6NY8d",
  "key23": "5hmkoiq8b2FDJ7Y8H6Vm55xRgmEPMxKLmd82DV3wzN2ag8J7xsndST9JtWKxXWaEo2ttJAGjKQKx7bNs2QivmCCg",
  "key24": "2kHWzdKg4S694vRHWXLBBoWMgfPUGKSnrVwQcXaNSMS2gwcUKZ68uEXUGttRhpAWrMeUaPZSa8wyqJ5xrfJdArdX",
  "key25": "4A1qdghkRsLVsbK97qorQ9pCe8VgsWkqFZconiE631UGDHu5CR9U4CwRBCnFPgK2dU7XHKwRDkcL8jtRKaoJY9yY",
  "key26": "2Qi2SLXZUPYwkAVriicHoxakMNt9KZf6JDMFe3XSeroUJTJ7RBcQkorh33By5hhmcW5tddMqZvaD9Csd9L5PW8uw",
  "key27": "JtDCSkGXinwSbXnsNmccXxPMzkinRV9hb9rm8KpCKxuTjpn5LJMSFLJMBt4NjdukEK1VEeprRtoBPHogBnjwLVB",
  "key28": "5DDLdKxK6w5QxEwGsF7k9WG5ytmNEv7gg9PNrhSgo374k16GobvSiyaSvQ4MvMTJZgjupDSpde4zuD8sR3Mp4Eoi",
  "key29": "5wBRoxwEn8RLyuBRAgueKENQwzStbfZ4RhMEeLiZXFPKPqsqKss2VTk1MYh42UYLQ8baU1SgGzzkmhfpWEqXYSYf",
  "key30": "5i17MocCJgtDUYuX5ZGHYaM9tu5pvqvCYc31JxGAGpw2xxjmK5sBWhHUoLc9M68pttPBDqQHLiU3HjmPK67McJfV",
  "key31": "MV85tit9EBQNU5ACLMehzTQC8W1Dh2XFix5ATnNSMwRwiuXbVPkUxrrxRJ5tJ2h3oRY8t16iL4YbtXDiUmHYsoj",
  "key32": "5ZAHKmA65hzs3TqJH5mWCfvF8d7MWC3XjopY7DXSTQbgr3eh6vLYU32anWgmMsrsYrawi4zqxB3o17xzvgx56wJ",
  "key33": "5v99LFYf3WygDVdFsRypM2Nbeb9PqJX72Nu3AZ4aESdHwYvXqyDabkXta6VPdCEm9fU3otSfmouHHsjpq5zahzjz",
  "key34": "sajci2NSN7Hpnqdqgy3WWscuU2EAPAtefuYCqsbVa9i38QA6FyhCaun7i5qR8xd8hGEkWCbTEWgZje48v9bh6Tk",
  "key35": "3QjEiUWGLj9bqaUSEw213RgE1db5VYg8HekKbKWYYUDKbCqk7D32rc5AGG8DRcK4GSnNY7qHZdNuq3jrs6rMEvyi",
  "key36": "5gAF5XMSaeBLS7nbQvvkgJGTw49tP2WAsR5UNfLHiiVhLZC5ohFatBWqs8gBitdUAbLRX7zDLAvKWx7fjf9zgg5c",
  "key37": "2iq1qjquS8kSuy9CvPXiGvpfC5eUYy75udcrhAGWAEDcEnFdav3JD5jHD6rjxbHui8gqxGKxFifdgqHxLkzNzvtj",
  "key38": "3Qv4ebY8GHC37znk1HzhYgoHPDNdsUVGPXLSj1FRiqpT6QN1XhcC2SLrqFXMueypET8twkERQ7KKvgxc38Z3kXhJ",
  "key39": "4MC6VSQ2D8vK19eQerGoyvErRdvpj1xo5MN8nHzBiRRENTLf81PGXg5AZuvpodtPYRBPqujTx9mVrVYo7zi5q97G",
  "key40": "2GJWbAv7hNbe4CTc8pawypdqikfncwa9Yy6goDXwu4nrXqNGuEwgQUZsMxxb5Ray7ccz7eMbWRazpQqyBFtoG6d9",
  "key41": "KmtFgFsePcE9fUKvsU5H6cxgmRc9NeB4VRX9tkWW3naq74xyeYt2CzP6snPQ5x3Row1tE6z6Fu2znHSHAr5z3PM",
  "key42": "3kFt1WWwCavtvdMfoVL4Vijcwi47WoqDQe4j8ooQskNgkVb6mxVhpaus452qK8MSmYvxg8HxxJiBCYv4ABcmn1AB",
  "key43": "5t6X4FDsEoJQj9BL5EkuXFjLcRqai7XXUjwygaepPtWw6aj4byPNWRDnEHiGmJLu7vSNw7qgXGDFnNxkXiVUd3di",
  "key44": "4JxstSw5kPVkHqbXLU2Ayh2MQtYFqGuFhH4GYUBDbtnejLFqyC1YRpe81oie7NsNKFG7KCQYdBzbixyB52VuZKqG"
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
