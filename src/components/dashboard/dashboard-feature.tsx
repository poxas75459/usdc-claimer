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
    "3sLPZGXBfR2kACezvPUFBmcQsCAe6jm9dPm7JtU65jW8U58EWg4KkearCow8txCy23m7L2mV4hTTCd9dXMgWq7zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S47TRDLyhAmkVrLAXYRv3hDNGR5GuP7AXw4qMMMumguuQJdDo9mcmRmUpG5kCWNrDU4kGgdMgTEeYU6T5QK3qG5",
  "key1": "28Kfr5TziAyoTs1328Y5Ef8srbYadQJh5Gw7adgAqEguVXNPvZpFVHEdb2hJJTWhmZGtCwfBuN86qxmhz8knvr8R",
  "key2": "2Q5Hgj5V2RTabG5NtKahLoLmyr6V2iQn6USan24cTGxkGkaJGfj8TyDLz3BT5XmheMgM5Sni9MnKcXVVjBr3Azfg",
  "key3": "3BvqEzjJUAzajfYM8JnoFocHjU2y4CHpGkgoKjAdufQRraXRagpouGdF68jA2k79Mjju2bT9Y3HfTW4uny7BN4v2",
  "key4": "2Wq8TnY9WZctR5SyGA1Vuo9amH6nmQ7g3vjouAYx6ggCxa1JixsPX7N4qqHjJaYfpmEuLfX5xU1JPjizZPkurjdi",
  "key5": "AVFMYPda3eAkEdXk7LbyN473TD9zJoVdwCt9MRBPjK22edn3z1bSYucRnA8vm7K3W7oRmrwCoPQXtwTRxQRQwis",
  "key6": "s6Vzr5spuV4tvUJv9tZ7Nx4pxWzytY5P31wqfVGLdSh7pmXLJRqWNQdF3HXrDva1ons82zJMxLAHd32v7Qoqa7m",
  "key7": "2hFBkzQhjuTuEaEXZkTFyiUYTdCGk1VhVnL6GfDm9U5megGFXSvjnZRrfbjfpjxK7QTdu3c8URz9ufyZpc3KzJ2v",
  "key8": "35fGuM7GJcGdmkXQGJ1uRMz9zpMooAfAVnVPrQFHniUbBjWcEh7q94RDMxKzoaE1NERphuoRbPfCgkwju78MD5cu",
  "key9": "NkHBg48kGxha8GgSVTRg8entTXjf17PUt2Kk19zKdkBLT5ZmBpJoQXx9v8sg7rAVUi43ypNx7HdgxoTVrYkh2it",
  "key10": "4CEfjxRrY9QLs21D6zsRTwR2guY3K5gJfp3jmDno6bDk4KHL5exyWCbNnp3C7bT9UmqzFLhDtwbZWC9dK78ppLs",
  "key11": "4aR2fCWrKNeeddEGGiHCvqw1iNnJMgknAnhYcen9AwFWunh6CZeyRnYFah83emQCLsHWZRCnK7x2huFky9VfSNeu",
  "key12": "MThURhMcH4T9Fh7Ya69kPVGQgETVKse5GEFUbWKCe5nDNpZaqHBGjnNKrsjosebXfAq8iNQcad4NCN8PRYAveWA",
  "key13": "xtanznqtoXh4AVPSYMYCNRXugFNv432wuZr9LQCDms3bQwZdvJAauLqLUYBV2CyjqWK2aPU1ZFTZomC9oEYzDfD",
  "key14": "xvWowK9xchriWt6nZjy4JFkcrH22qxNN16tQNmdpbmUpaFvxJYW5TWTGmvMw433BSGsavjeERraHkmq9pK2CcWT",
  "key15": "3RFCoG5mSc2wF8FprG13TEcjRsqFQmtQUiPJe4RcvDcejhdE92hRFBwcUScLGi9dJ8DAVVKS5SqsdrdZvdr4jLR",
  "key16": "5jojgnguUC5bXfaRDZfAVM66BvtPMC1c9aTPfyySyS8MSDAJMr8iEPtEXx1B5jrZwk666Gi839xHfWcaMnqXc7sx",
  "key17": "3gReMontRQNJUMXRUA13vhpxfVsbDG9PsVGMMiw9C3xQVEXS65E7PthKS7SEC1VKYXRm5cbiBGQ7SgzMMpAtBxfW",
  "key18": "5R3uWo8Z4c7CBwGgJVLoaXXxy6EmCWdN8hj6un5SFFpW12GuPc5zMK4djpbXTnhWkTLuGjDSzNPBJSnQCgqrQ66m",
  "key19": "5pgqF7zf7RMXu1D8KQEAxhng21V3KzT98NP6YU1mGQ2gi6tFyxKTsiT3JCihxvLjDduTcka4etT2HdgBg7TRHqqv",
  "key20": "2SFXDt4YCWXXZ7D1PKCKJLiBJQweGBz5Ei8vPcMApz9VQup2UQkvDo2hawiQBEkYtuHS54aMuevtuuQZgJAUxxxc",
  "key21": "32uq4FtZYM8Ai2RJ5xUuw7pGx8qvXxZ3JFCz6vsQYLEhJjp4tUk6fuPPeHh9N7gpqcA3rPuPudSDaTcEv5HnJfzE",
  "key22": "5ozsHmpJCswFnfpces9weARWCJwvQwGT8TDUDQAiCqVjuK7Lep23m6Pi6LRx9iwPNWAymHbeAA9MUDzxBX75xsMc",
  "key23": "2zp8aD573ghDDLxjC8fRQp7edhGTTXA9AeCuQMgowHSZiG8PVRRzrQ8y2SpKV9NyPoRzZkJSjFkVUFfeBRox9z6V",
  "key24": "2GcNjqzjbbtczjr8k5ZzRiy8NHnXfH9EK5ornphzzBxvsUEvWTM9yqAUzv73a31jeKUnqw32SLDdseRuJjApFUzc",
  "key25": "5hkFGt2z8F1bmbAwfMe9pLWM2zmQaGmNLA8tYjmPuAPopJGo6fH6nYyCLbM1UJgaYRJR9KEA47uvv15BcZQnJXXN",
  "key26": "2Q1XD5X14nduNuaKdhKSJkvBHodBzUNK81tGHRFAeqvvZeq9E2hztgHs8iqUVBhc6manstWWadfBnrGrR58Buziw",
  "key27": "2bHq8Reggo5BwQgEfiTvrNo5eCi1WTXSjA6CwbM5suixtF11NgZ8Z4dUfxVLiCPXPuE9A6uGdmWA8Gv54BHHwjdQ",
  "key28": "3cWXrYDwKW5qSJSTgeCTsc4UGdvwjVKSyAGewG7feT1GDuwgyonLWBPe4KEFzi34Zb9mGUQmVeGy7qdeSQuX337p",
  "key29": "5PrmBCvyEdUqQf3wa4iatjh99s3TnSejE7yc1a5dZ6iQmRJjPrfsmjGMhiJNFzQE3Xz5w8DcAd1PjdHRzbYSFYgT",
  "key30": "VoeWxEQeKh42xWCcoiAHDRZLKaNaafAuYzVBzEeqTuPadA3kexXe2rnGskUVwkn82hKt9St8ka4wxoNME9gz6yP",
  "key31": "3mwAvMvmko4hzgUTedrqGMrjpUgunnQfwCbAG67RoCsSu3weseD6hfijdTtErfHg7GAfyke9V31BFiDbYsWVNZpZ",
  "key32": "3heSWBUCz6tZQhdGS5PhWWTp8ysrbFqvqYM6QAd7y6NuZ9D9a8LvcaS5FNNb76yjxdCcTsQohaj7P1N4hCbJKKi6",
  "key33": "J5h8P12mWpnSsgcyLFXE4je4GWurCEbt7odN7t7sNoQmTDHUKGEqUU9cQmhpv4G9B3zTHMKasroag8RDkd6JaYs",
  "key34": "679zzYqoj7RTzbnEvZNSNFcaezuubrZzTkHjGcwEBii8VznSKdNPVZGZCpveMYq1KLHP8zEfVBrxRcaK99NsaSHv",
  "key35": "2m2tnEWArVdsxgW4bAGDvH9RuWaoDcGmPyJVpU2dgAw1XHMy7pKaPCEtp8vL1HYRKbZ74yEJRfotJXzu1repFNxg",
  "key36": "2tuG22UChrMAb84PnCw3PKsCRmaW6Vp2VNZ7uxPVQndZQx9Vr1Ua8CZjDxbqNy3iZRwXKvovoRxLVQZ4Gj8Sqih7",
  "key37": "4V3DYaoSJsq4iqpy9AG3X1GPLysnLeBafkFWuyredn7tCXkRu2Krznr5V38YvviNsfouMpB98G4pyudLc824vcRs",
  "key38": "aXmDbheMjpmu1NJ5ZyK5xSZyUBwvPGa8m68R2H5V9GtQoCCza7YwyskBqDVDcw3zJvgKD8cyqov3FUnSHkYLact",
  "key39": "3d7gXL7ykTR4N3W7nkj64CQ9dVY1iUhn2KBb6PGLeDUGMGexy5knNBXdpWHUUvPnHt3ij4e6uiVkfkgDPPw3ZBhu",
  "key40": "41TRRJDXFghiECkrqjbETwsQEPLc58JA18ZoxuErXD92Kqa5tRAYFRuB1PfSfLe6mGiQ6gNULYQtacKceWvohhDN",
  "key41": "GzVdxuZtc1dJmCUp5RPoZEBGo1xw5EMbiCRbtCH7P7tUtqWZu8qgXxEjripqyJF8exfmR6G5h6NMpu8K1hSXadD",
  "key42": "2eRD1tHSpumgdeYRkrm9L5Kf3C4aansj5hedtX5oPRqaRG17okaWyrTYvWicxoGpeHpYpMeQXCqNK28zYomp6ea5",
  "key43": "4iYgkDrNAknKkVQ2rvk9jbWpEVrzYebvgL1D79r1od993hFycf4KYfPrSM288tswiVkgm9cztsJFgmAAR4TAbqbY",
  "key44": "pH7gRCh6LoTYS3EQ22LyhNH8JyWQG8Ga88n1QmM7og1W2wJNPemhBpbcuZfoz2weW61WmJxkNotDfmuZqNxYGAa",
  "key45": "4JGxPJrJfmDce3zqqTH7zrzghWRLPTZzqmbTpBzopeoBgu7SY871nJ9iDpf22BJDXJUxL54BvLPoSSUX7q2YcmMg",
  "key46": "4Pm3fQ5vdVwPbEqE4QSE9w4XTxQrdjLMRsZrV3bMQq43gLVrMxhSS8t3QsZNP6Phtggf2rrxkRC65kj9goQRhxY9"
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
