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
    "14TdSnfwbexS9sjSZdRq4TPfoFPPZWi3oteXC4FgTEi3R9YWsrC3wysvBccJ2U1fUNCQJxQrYGY56Cgre716D8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4WFeoTpwHqeZPtz1D8VRKE7ARyJQLUp97GCsPzArPkWjN56W6aAw6Q2YQGVhupN3EABJPuva1eLh4UTv7eeQTs",
  "key1": "4vNidh2QXk1hCCNBBvu2egFWujxjjHyvrTR4zb3ZyzyCCGExFzAn41pzGECguFAfYrJBbHX1zCxi7akHLd377Too",
  "key2": "28LmyC6wo3nemTj6QD56kC9mSCCVcWYwC7KX1sC3nvNkmXeqC3N5ruxGRFhsoo4qdnzYiMvZQVCKuwg6x52s4LSg",
  "key3": "3F2eBueAC9ULNm5Y7d53ZYbUh2JgjauQfd4LvnFtjEVrQXBjNKXQ3kVCrEvg8vXA7of6QJZ7U9zAiXcXRNfoXEyF",
  "key4": "3sqpW5rsjP6oyL3JasAx9xkJohnMuF2b2mKahGuyMHCZS8GDiav4F6r81wFB6Kp3MxpFJ5FF3vHNrRHxwXL5xnRr",
  "key5": "5zrp4yicKtZfg13xNYaCMjLik6dyjBpNhW2tKHGSykHu6s8jZRmFGFs7yjN9L56egstxdhLB1YNMUHxMog6yWoBR",
  "key6": "3rcUHbNnDyiZbvYb5ytnHAuzuHfapra6m3JYtDTbWLs8oo3vaPoC2As5FSZpmqbKSffPfEdfyAtTemCShtQdcVL9",
  "key7": "2ALaDznAfMoGhb2fsEt6WgzUsSph8zpP7uqW3YBQj4BSE4vKBpQCtaqkvHcJ5AXkWSFdk7jAZtoPdyyujyDiW4W9",
  "key8": "2KbZUqCftgUfDrPZZRGqsMADqdc41RXo2CWfSXsvoZmfp7ozdQmZRMrM1hFjqTGTNpGYhfmLBa53gRd5q3k7fm9C",
  "key9": "66WEAd4ebNuozNLSHmvEnoiagKXR8cWspZ8e8mnEib9dwHBuC1hNmbeHZpozY9t2obSgHap76ZruGp2gmtdydn2Y",
  "key10": "4CwGQ5343q2pvNWAEZ62DjAYoS2ZCxCT7k9YDuC3HoMQwadwcTS9azkd8rE1Auj2mYQnfn2u7xYqA74xaC79J2Ng",
  "key11": "2myE5xzb2QExAmoR6wTdD6NVY2nnHVCrgHiyzDwu9rsLdxV32AJWUTmCAu4ohwd5sMN4ntTe91PZWeE4UYmadEo8",
  "key12": "4JCk1jWxBHXCWMitFrpW1M511ujkw4eqMsYf29h65KoDnCoxE3stBLJ4Eo6uTjc6cykj5GaBUSw1k76TWyb5P2W9",
  "key13": "5DwBSeNFDqo3cEbzM4wdxATShz2ihU4paBy4dYpiwBZ2BMvQnLcWbtN9bk7dPjGqcFwHjNeofVrBNCciggujJHTK",
  "key14": "2CWEF14KARQFDCs8eYXLqJ9k13jYeChhLY4Cbw6nv6f8si2u7vpTAmtrG8rkhhyEkTWzkDSghtPcdBiaLtmr4WAc",
  "key15": "dSjva8Zt4BqFeuvRwFMz1m7eoWcuEs679ygUQWHfLqu5eyr5ykkkquK4YqoX3sCfbCgvnaNAfQZZYXacBKEZbas",
  "key16": "JVzWg3tAwqkez8JHLb3UZgmiZhSYRBhFJLVv6y3ywbjKuSxoSDG2sxTm8kmmfZ8vAzjzFJa5ay3juetYjrJ28QZ",
  "key17": "3AvR625cwfSBxWZ4QhVvhrYCy4zD1WupLv3pKpvMxAe1UE3W3q1zCNxVMA6RYk6Cn9rxVLChUwSFMNoh6CpNPtrr",
  "key18": "4DU67DPCzjUumHz7p4yhu2Veg6fGQ2P3oBgMSSFkMFjaXTUnQH8Gyfb9QDWkbKA5GWZG8JE3V8x721DqV8vaBTJ1",
  "key19": "39XvNEtt1NjM1aTb8jt1xpDJ6y6xtfnZxqH4GreuxXA9pfDj9ZCQv2SweYe9TXE5TApBV5JvrUe9D4kQMmMYTQZo",
  "key20": "p9uztcE1sfyPq5hz9JmnGq6B66BMH3SuoguuDRWPoHB4njYjPC3k3NDSGT1JDUEffHJZzce1JW5FX6hYoC1GcTM",
  "key21": "5WUCWukySHGqWDmZeBLVrz6gisdWGNnq6xKWGEM2hbcAo298oH1yfeBmUNvRdGPYMnGGLUNPff7t9rDnSgPF8bTs",
  "key22": "54cRhqZ7ZY9VfDGQMqeREnkByrKPqKNz1D196rhGqhNxVo33mSZrFz6nuDQtwFzxqnAftxAM7ekXM2P14fQ2rcAe",
  "key23": "2eYz4C1YtR521ugipUZDautirwCAAsHgynq5ZdY2E53LBD6tVNWwvy5aZsFZQfhhpnbg8vkKRdrXgjM4eoHAGe7X",
  "key24": "JZuvrTiisVE5wMD6Gip58KQWzx5pg19VB5NMHqRepwf9PqwMSHCAFJ8iPPafdhxed7Pb3e7a9UTB9owrACBehWm",
  "key25": "4Qkr4Avorf7zkQrG3sSSx1Cifkt75zqxvW3RUbPcpfxvaoZVtXQZz7qKPs1rtY7Pzj7qhsoW13GRiJvsbncG7Xf6",
  "key26": "58dPW5cG6F4HXp65P2xuywg5MbmLmUDgfGYaZUKwasWX9qM22QH9i6iVXF4aVusFATkRo5dyVhKszFsmDEwZ2fxH",
  "key27": "3bvExUcews1xZ2aHrTRDHA4QCNUYG6tsNBsp6XT7pajm8ZWNvzMUZttYCSqhuv3zCRTo7h1pax3ortfaX1jr3yX7",
  "key28": "3JiMRiDf82mzJJh8Vqwvbpc49PomhTjGZQuEn2B1Zxc81NNncBwCLuD79m4XhEPasSztDRuaRjUZLWNeGB6jTXhc",
  "key29": "3GPF9jKtoKqE2U9AU8cSPQqAwk2XZCoFjPx4x88NpYMTvVS88XKpFy5ViHDcW8S4xAHEohgoLMuyCL2uSWh3pszH",
  "key30": "DDQrbVVxdW6ruVwujGPcPCcDELXCvp6FxMRdvHNhWG9DTCLf9JaJoorVFHiXpCHpCuxU6scyP6X66tdGAh3WSyN",
  "key31": "3Kv8pDWqnobStw4y6ykgc96CoAsF5cVnrzAbHYBXkwMkJLMNsJ2CE7PVvwdogQDgNt35x46AKKoSMfZ7qNB8SR5x",
  "key32": "5nHZyrs6V7diw3gtwXpe4Bpytp6YHQejRPFsofoz5DADJ6eMhBnZ2SG3nuqxgUQ1vnLz27Wp6NyP21v12LrUDSDE",
  "key33": "8ySskcHWX7M63DrTgroWYGgGHbghibGbDr9UbPcHVTr7bACqRTWRN3SStPzwTE4t3wWmQ6gSGZBMXxfUGi4bzH3",
  "key34": "3NJQKZrHfXV5MbRUn5QhDozCxN1rb722fcKmaaotaHMgtpQcAFS5TZMohb25Nx5sXBAFix9xWp5iM3Hpd1HDHmAd",
  "key35": "3uK1SrwSrDb2ce17m5RutyqM598bhQ2oB4dCJwzcSPsgLGN4TRw4jYWmmdNzwPvnJ6dKS2ktXZUrWz42zh6kFzq9",
  "key36": "2r71iQ5cRXg15EuUZzcVjFqifp95b7zwCxyqKvQuofuzRzGAZmo5tEwD34vz1ay9WV7bKX2avLcQKUXfz2pZ9JYC",
  "key37": "67XcVWn9bpDEZoEpZ8nTY7nKSKD32WnhKXck2LQNrSMBycDaAx46JZF947hDXNwXuDGz8un1jaW7qqATByb9F6pW",
  "key38": "3uMYP8hQ2cR46D81Rjk6KpZJ9QszcCRPv8iCYqWmrtZkFwf1zeu3ucJuHuEackNpoGKL9XNM3z4UiwecWQyUGVpv",
  "key39": "58FiGRpjZWMqYoSFQPvHHE72oKF6V1SJvWWic7oh9nwPJ3KkLC9wZkwRG5u9VokNf6RS9it6kGnxCPLqYBjDtjq9",
  "key40": "4kKXgPPhVQ3PnAk9uNXC6u7Mww2hNT9tZAYeK9o2o753XMGpfmZKZSxV41wEpTy27ZDjvNN8yXVzjGohvEPWRF75",
  "key41": "5rPE6bEqVnDea559QR87jw8E14T1oB9GQKGjUxRu1U9TKXf9xbS9dE8tGhQiPS4EAmfiHbtgoBbaponr73HJx8zC"
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
