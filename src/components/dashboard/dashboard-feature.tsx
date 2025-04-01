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
    "5HytZzMPbEGnqJz5qB7xAzZ939QoVSfGo8giqRFjxaosFUvx7C1PcXpVNYpWkSHn7qsnSNuV1fVFSBLvKH4S4mUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTXVFVzxthzRzZfzWKCf7ky33b15y2NJF3dqCbJG9fwvY1KiCd7nWYWpk1VU9jineYo32rrqb783GrfSSUCwKvQ",
  "key1": "BU3iLTcQmwaUstgCMcioWMLR5nyUjb9wC6Sv6jABBTjKExR4zr2ngwPgM3WMaYVwWULRkdu7XsYVPmQtQE9vgPa",
  "key2": "3Y8KU7Esb9RsabPu5SGwL7xU5nCZRnRcZpBgpKDh15fPDHsAuR8rfDvcYJAM9Y4UeMzSVVLYEXv5GYhcnRRPDhJX",
  "key3": "2PKoCeQ4hamAe2Zgr5MNZCbpkXo67Q6114STm2euw5VMEaDGkMMB4YxB9syeoTvnkgp1BvW4h528biouwGTV4jex",
  "key4": "5yfTTETqNtqgChgYDgfFVJg1udizwpM1BAhyecUoQz3qWirnMfqv1Yxj7sXxNCJgsDaotpNay7xmsPgbNPmKpg6q",
  "key5": "4hLFVLQ4TR3z5wjDnKswg33uaUB1gJFGz7mAFRozPPqyexrTzUbCGXLivGZNoqLE5vGopHbaGaabZgr8tNgW7hcW",
  "key6": "eJ9JssfJZQWmAsLpR2mjnTqn249z7yEhVVqLuPA5YVZu89obgYeyC31KmYUWDHdKGr49wQSDQtNSfm236kdtod9",
  "key7": "2XnpjS2FnahkanCya3Gf4zLhVCnFeW1q4bYF24jhxKPxx2Ru2M577srZErWTLfHY7KKJ48q2PYGZ51XFXvxtwe41",
  "key8": "21HmMo1BBUrYqqecWrWFQBaUmbCNN1BgYjwhxtW7CU26kMBPKKGXSeyG1pVuA1xmspNvYaepTjEJbKjeY5PpPH95",
  "key9": "3J6tJLckJJgjyovkmPpAP4jryDxBzW5oACtvjTRSm98pVTmBZVfNpG4vyd4nfJcFaHhbVPMkX1QxcBTvcBX3VAY6",
  "key10": "3dCK6ia5AA6C9QCNRYsjwnenDfUo45nXfhkiFRDnhMkujxCUYUVjkazs2V4yn6sSST5raZFX8sSWciQsZLVyvADa",
  "key11": "33PQ2mLgjktPN4cynuJqDCGJj8Psj3EpQo1nGJH315CFXyzUM9KByxcGTR1pFgNdpSjNRwBwKyFqSuKNx8Ut1Gsr",
  "key12": "21WPtLBqYZVTmL17JG7d6TUBP4FHmaUkxXvk6sWx68eBjaDkPSdohTbmSz4eNmcp2hpRWWnU5CSg3q9Y2N6f118n",
  "key13": "2nzNzaojodLxPJUJGrerMxK3kYMN5mrcLBi2nRmhxEVnzQZoe7fnxhYh28eyVPyEW3unDc3fWXmU9ai46ApKQHbv",
  "key14": "4GF2U5L3TJzKMD46g6Fc2fGMyrdkygS6ojfmQ6yeFj9pcRez75vzuSZ3ZfCjbJpioyujGCD7Bd5X6Dc9vToHcMz6",
  "key15": "5n9HjUXDFpNQC26dEYrvwQYHeJyUB6Ehq2Ltea1KeRo1m5gDYQfVPGoHJCzTBnapNieB2yx1ZnVpSeGZ1osCATNt",
  "key16": "62KGyqsbLmXMe9XvJRk8rXaEkB2Utsx8tKL6NhvNEd5d2hm3Y1pvQb8Ryd7du2SaAVdosZxGFFtPuhG5izsjFqcF",
  "key17": "3SGB2g17L3BjQUr2Qptb6vXoPd5gYgashKwBsSzSGqMj8w3hLJX2K1vHx4aGUXP765BcgmUYoPsj8UdRv3yxuBYe",
  "key18": "2fkz3nMjzGXTeuZcqTLGBHWE57UnJAEukFdYW8qJE8rZJBLrFS62Wvry5VeVXESARjntxbbxqEXxDEmffSgV6oRc",
  "key19": "3EqFFgSoHAmPfheauLRh6Hm945fyNbzdEL1rZtuks3kvwJyn6M1VrGt9d4MSrsRwbR9SRnF3Y9xzGMUUb3Ssec4N",
  "key20": "56QxTzbkUR6mqJQtsh6UQeiaxSkvAWDnwssnyPcvTnvwjVX39hArw7yxL5ZEMrjF5Qos3xyKCDpCzo3KNfbXLMSE",
  "key21": "2pBpvz68d7xUPMJ8HEHsFvmthLLGVsoW5vFQ6GJ7svGQ8RWexrNLFnTERyAW4qsm96VgpmLaWhpgwJEHGQX8iVrj",
  "key22": "3saPoLDGVwTMKG1paNo6hGyHLVSg7ve3QMquAeHJzKyeV3nwfFynkaVrh6JZj3Z5Dr1U9Fqb7sh9YitoiQNNvAnA",
  "key23": "49u1VZPYAbF3UaWgXvUdx5LgFwUaxNkPNkwgbDr14h5ZAatiTnDiNeuXNUfbk9U59HXrNN54Gotu2F7cWr1eiWtZ",
  "key24": "2JEdWCknAWTJTsuKTZUXUbzpnfnpHVV6Wj54NL5UTzYADh33XNMK8EGpjncMsN6QF9jySdqPEpEfvVPKiTpAPEy7",
  "key25": "5HSHV2RgEym2Lv5XGp4Ypf3DGALWxyunLhj9sPthofwWPiZ1GvgRCMtZ2ueGEUS7yUeZAW89nPH73H3Us8jxE5cB",
  "key26": "3dwDmNrdT9vcednVjWiXgQNHcwCY18gopKZgbHhTEbpDSAQNqttThP8pemTob7a7LuHRcLgg3YGw2dd8htjp6shB",
  "key27": "2D89KEeDv2DMJp5wWZSNMiUknkSzfoaqV53hYJrNgEwy5BgKMb1h9DnzoVyYMzQjTt4NFuP2G1WtUSbXfgh1kS7F",
  "key28": "2KmXK3w97UJSjnqqwU7MV6M4udY93Z5ghJir57VZU7UMSEAYJdijEwTg2ssr9pZR18hbYcDUbPi9MyDiRbKzpKL8",
  "key29": "2NWfeZESSQtezMQaCimRWpTvZ65DGeg7Wj9Z2G4986iwdBKbJxSqgXtVayiHz5iU2mQNmLLbbReddE4BwhoZeLq7",
  "key30": "5HmHLsueUMNnwrQmPhrPqnGKDGcvptFGQWXrtbkA1A3Z6cSdEmjqcLdKB4LfbiVY5MTkMtxC37SM7duLf9QwitCT",
  "key31": "5KV5BqNU1SutpTfMrLRWRkr2DHywKy1QK7FoxLpuXFR2FhCBmYTYP9EDxKAqvAf1wZ9GxKRYTg3ro99oBuBi2rWz",
  "key32": "5Z3TDPRgP6432GpXTRP3tCKtbTNLen9yGwzdxGnEaepup6oTBQv1mwKZ3vSLrPYVkkzpRmM6iXHoyNsC6yziQS4F",
  "key33": "2wJEVXoyjKnKUBrtGyRCHxBSsN5ASUjZriQqYdmYRAVsJTZyxADR6699x2W61869fK5wcp9JLo7skiXiDwKEo7FC",
  "key34": "4gows46UP5hkSBJV4ByDst63nBqfbX8NuYQi4sLZaAnJkdUq3awkEMT2Q1gz1PkuWSQa59oxnF8WZRoToCq6UHsz",
  "key35": "38mfQNiJcnkxu4cs1fdtacTGTR3qX37N32uXsvahQpEqup1Kw9x4udRyHpUE9vQeJesoka2wXgxKwMgJA65gJZap",
  "key36": "2wsBAkjBA3X9YPuFk5xKKdxjootw8pzDdcPaV3qiw2E9LCejNeiqd9RNvZeWfo2o54quA5niKUbZaBMQ7F8zAZDH",
  "key37": "349WgoULge4MoRcVtJriuzsUGy9JvJ7eJ7phcaLvnSd71gNbzi7QkUx2Lf8YaxiFD2xXGXsrhW9UwaUYYTvZdkVv",
  "key38": "5ngLWDnfKpDUS2ptge4S7ESEgUFNkWjP5Qa5mvxdwvpCUWZb8hWGE4FNs7ZFgMbk69qZjH2wWzs5y8ZNnVBs8LcA",
  "key39": "3bEGRAoehQXRUi2FtbajTtZyW71VmPuNAHzwGJxFA4nveAFaE4oUuZuf3obMaAjjFdBii26HJqHQpXHP6sMr5Tj2",
  "key40": "46WAUxjf1yWqUs5Q9dDQD2xijkdupuMcqKVLMvRbgH9DCnMMATgdc4EaBntrJRBKfUt12iYyDRkf9gezxqWCmaBg",
  "key41": "5qMHoevFF5sd9xcpRwNPqP2drTFunRGs7Ey97j4ksC5ZGrPNpzvWhURYjghWRGtRwjy1NJZ6wW3k91MB4GEGvCMz",
  "key42": "irLhYdGvLnQTGU9rxSiP1BBPAYatdb9LK2PyVQTtW5JdT3H3hdQZP49Sh7SgCCKpmESCjWf4C6F3ducntkzp31B",
  "key43": "2yU8jKbwW3R4noLEhWEKtaYoLHy211fP9NdGurVZ3oUwPKpAPeG2ry5YBeRJ44kKsJGzWmvgkYUjVCj2G7thfSM",
  "key44": "3K2kzSqhELZw1QWkwPA2QWohr8nkAZy1Lykw1fWwy69WdTpzBBHPfXMxHsZ5hGQzq6v8QKCnGuKNtSPb3BKfmhVS",
  "key45": "3me1z8MWLc17oee1YvgJ4vGUJrB39yp7ifvCEdtCJoBCZeGU8nY8q73PTvrTVHiUzZUPd5a1P9inRPQK9Qq27u2d"
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
