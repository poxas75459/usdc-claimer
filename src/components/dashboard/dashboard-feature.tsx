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
    "2GF5uqBa85C4jkWmaibjfVMwk6BpbMpgL2F5hxcVJrYgRF3ASYmSntGEHC86YL6WUfHFqiF7FnjpFvZNJckb9GGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxCfNzDMdFfXLEhpwv9buYUnqQqNDjkyy4RaS36HfXPf5uRqh1oUBifkhoJisM47DK38p63ADFE7AhVQxEPMJHz",
  "key1": "4MH6Z7xqwgxyC8gBvDzwjTBZMP6MMvKp6RbQ8LfzSaqkunx64EoWbZirSXyk1UeYGRBEv258ogK2N3NmFaTSXw5b",
  "key2": "brRVopCehapCtg3uejqkZYc884MF6jWKiBGC2urByf8j8fdZVkFcPFvzBAGYB3X9Yox28jmVPeSVjurTJWG4HEB",
  "key3": "5R6NsonHGFMuHDDWKRfZsrsbx7Ya29gPHzCALE73gAA5r1MXGzRSZaC7U6wSVXS98LvcR9tojrBShHiuY3rnd2rt",
  "key4": "27jWSYkPRZkga6B8tuv3Ci5eiVN3b19MPjmDVxJLBgyUWzD66dsGnGH81PZGdMVEFrmem2EY3JdpB14hu7Tm9zWM",
  "key5": "2RWJvH2xrszLE3gkqmFTFeyZDc41YVLhhn9E7zeDMUypEV91esNM8sBow3JG4GVpsrY4xqUSPotWcpQW1M6oX3Li",
  "key6": "gYtgo5KirDPw4jx8SXSLMKiBDsjg72zeowwZ6gUAiUw7M3at738AijrLCa8B1LKwuch4xrQjZCFj8Kc9MUhvVis",
  "key7": "5Xsud4FD1vtzvCBZKRmBwHxSTvs6ZWUL2Rv9hXc8f98QmcsZfgPQcvcfo8P1DYoxwznttxdpmGqu6WLiC6PqJYoP",
  "key8": "2K1HjRvqTg8xDAmpgkF8x3ntfJB7bpkqCVGhk2kmV3Tm3DVM6cw34aKYKZE3MpyFqqwCdMDkwJvcDvo9bywUcEfC",
  "key9": "njLBE8DQJWxsBHq9G8Pa88w8Se8MXPYxX9uR9fvtCsZMnhPk8yG3v8pvLG9VuRM4qV7PbdiCXWHqENBoq14bpBt",
  "key10": "yHpQmPS8TCjcnrMFQdSvwQ8fAThnnwm9f7J4anqBfEyWDthwWnnUibKBbhGSZMZM6nfAZ1WWwUqX2wrD5bGZTfk",
  "key11": "3uWKn3r86cicUqV3VfqmXMTabpLvHaFcU3sRHJLxQqou2ZwYJc1pA63kF97HRmJS2LnCnpgkLc1MosZPGiDqeJQE",
  "key12": "WDYv8G4EKnJXAMa5HikKgmto7aSpuxffMC5c4TXbED9dSkYMdWLrVZKyauTBABz1gC84BCwqjozpMfd53hwByJC",
  "key13": "2dAw4gG9SShyCx47qA4p6uiV2jXm2dWHeU7A5jKnFVthqwJjazY7VWgQQYi6AzNQED8WLrjmBMZJfxvghY9qWNTf",
  "key14": "3pTVLwrxZMvB2mDAQBuUMgQVuLNGdkrYxzMWH9gXe2TUZKugB8H9KSwgwjGEZMrhMckfm6vpgYmjEvwyQ9Ebvw8W",
  "key15": "438HqRztwujmCBzG5zCgJScP44Vw1pK5Cxx4fyCErwNr1Af1YA8R7vYk6WMBRWoRfSkzpiWFuFidqzBAND8bPD1h",
  "key16": "UKE73uec76712NzBt6tKm1uVen3vY3xg9KmPYUpw2y3JtoY2fAEVmkRZAaALcNsEsAGpL9MQ1J5NZwPoows7Qvr",
  "key17": "3NHR75XvRMBHmnqkBUMeAJf16FyTpYJQYL4ksgqRh8t9KtPL33B3zaq4Y7GgaBRTYSK88gt16Ej3G27bNaFEUbCd",
  "key18": "Txtyun47UdkH5bxap1VyqrWkUKH45Ppe63bDuDU6gFDLwYWczFAXWtzsCSY2QwiuC1cNjMiAYzdW3eo2hTP3mru",
  "key19": "53wQwPZ3qZ1ccehvM5T1fiqS57UYquWdu4aSmqDYRcTBqvcxq5fZSBXGhH545AFszjWJiMv9BLu1pgZ6tTJ8TBmv",
  "key20": "42w3Wu5SBSJDgjwG24EGNqjLB7iKMATrK7apShEWhoy2J9dNohPmShLyf4BfuZHfYJvw47MXNWCwpX8E9WQWir67",
  "key21": "3Zs4EEWjxHJHatD2HoR4pTUg8DC72VRUWUJVu1t5BcdhagmR93swkgtqziXPDhhzdAx1kMk2bfLgRuFVRtYPqbro",
  "key22": "2xZF4xN92DbRrDzEVKCuw5uQ5zmhSBwMTTnUcfDZ48Gf6fF2KRifsUuavrfW1z8SeTSLBkkZbdq3J3Cynq6nBHpq",
  "key23": "2y9GSpLFMJQoAHsbvFnvgAn4FWikkf1qP5kJGVE6fQ2gA9YPEYXT2tDpNpC6cDz9xehX867ZBiPrCAYhQsNNBeUv",
  "key24": "tF1dqttp9FGH2aVZ31MEeGVdrh1nt8wLdt8GseM39sM9BRY7c898HahXMmqJL2tCw4UwE4tziq18zYwn6YZYLTu",
  "key25": "4GQfCMxzoen6dhYhP7t4nxvCPzHioh8wYB7hhsqzcgFewLifhq6zhr7xm8TdsguQwd89D4vQ52VHrVWVJHGigTCs",
  "key26": "254ESNCN9humk4eimbbcSw6x1eHiSx5fwo6zEcrN3DDww7JNpKWd2kFWGgVKL6FMxKurUYLmoC4LyqEp5f1exs9d",
  "key27": "5pQ1h6RWCBwwXbSi6pCRDuxUFzUzATHv9JNvDKris6BDHaobbQm5HeDqYiWzxBi17UhH4atJRWDJjxeYY4SFPLb6",
  "key28": "49DfrC6hNUVNiKbFAve4ZiYNcoQQUvDkCCnAFnUTzFt2hhdCEFoTDjNHNWHS7sCydxrY968DjzKaYMcRpsfkBojg",
  "key29": "ZT2sQgS3MGNDvXRqJ35a5GDh5kkQgfqDo18CuzenQJCdZTFFfsTVgQcn5P29gUSvZyhrS5hKHSa5gReYmmgakJV",
  "key30": "5LczwpsnSWZByzhn5LU4o7orwz1nT9DgiFAhJa3RAtRB41pFXSBRUxv7YdjXfyR64PX3zpbVHWuWeMF1umtXUwBq",
  "key31": "JaJafST6pGw3e88o1UzC4VbxEFArTwaccNoZaqD1acz9w3aGZU1WgnyC1p1SJ1eiqWNDUEnNepCS1n1tKmNDVz5",
  "key32": "4Wtetddc22AoJvSeahsM4WDKncxy3hw26ZR96xQfiSJio5AekRm7ZTHaiCtJ6JTLUu183u5JUmfYUkCZYj6BQgJn",
  "key33": "3GkGku4Phu1KULSWLk4rNuWNqzqVMdHL5cEMdtyTcp11UUFPLAiDkDk21J1NARVfDQ6UMGu5cWqiGd6MnnxQksmT",
  "key34": "45tgpfsKScUr6TnU7N2qVYDfxVS5Bj8H8whwVzLHxseuExhYngXuJie3z9ZNHeJNdkPMhhiaQKdm3KvmPdWRvV26",
  "key35": "5pWQVWDJGLu6hhywQQ7bh1sQYEcSrg9pS3NwjEMBeHhQhTrbLgCZzkqunP59Ccr8SkriLAiCyp4PPm3ytHiDBPn3",
  "key36": "4qiqzZJJ5ZwaSf5UTwW95ZYopNCnVqp4dJPSkaPbJaEvb5DbhcmsRduqBR3SeP6R3KTPGpjKLjav1dvfffefH7kW",
  "key37": "4xPHnSz2brZZ9deUf3V7PgPVU2txHzjeMmDwn7Msy7VZMRhzsSq85xhLpjnyPqDAXYpzEKdXN9JFJFSLtHyLG8rP",
  "key38": "56pmoQgJ8t82YkUcZddhFvqHiHMiMwSkZHWixbNXvzcRaKV5HXPuCKAQ3ufdjKrcVrjjrFzc5Keww2pXveiDwBCg",
  "key39": "4XE3jCcBhxn5Phgv9oW3LKuvA1iyB9SNXtesogjBUBDSBEZgDMgEdYae8F42hZcA8xPq8MZDhm3DerJz8GDvvdaq",
  "key40": "5M8hB5cRkEw5ouojLdTeEcp9ErBQBz8RpKmQ8DKAruQALMg1Wa8k1j7ZLYtUF29c2qr5oXF1p7zJv2GC6fjemUvX"
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
