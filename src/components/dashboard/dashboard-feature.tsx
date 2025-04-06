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
    "5SsrhZ85ZGCFNoaRh7MuDxjg22mDgzyaCXsvJfayJGPbHzGx1AxU6Zs5s1JvoBhwJeZut3xuy8u6SxwJqDVXErkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sN7Mgy2vHde1aEXTAdPq4otFhgBaQf34t9TojDuqVCr76LAdqvp5QbjwsWiSz1xQr4VQpLJ9xw8xijo5HFxVUgL",
  "key1": "2U9xUgbWXkuNURvRnY1DapYXLr2BBvxakbFiqbsAyVrSzQr7eAH69fCNveug4MZnMsBkJsnk6TQUi7oAzU5TQsbu",
  "key2": "5U4ogR6jyDkkVqQC4aBkX8UrCRnR6tJtcLKKZe9wgVNAy6mnfitb4AU3SHDX7L6mYAhSBxvoWaGGCXCH4eEPBJz2",
  "key3": "2S9x5rhzgNC3xosGfjAUPh8VfxWq1bUvcNnJTC5fqpvQPoHuo6bTJSGygnG5Z1Q9Nx96iZPmgdqLzxtMPPguTjuS",
  "key4": "54nPpfAJwHkUadBCnMf44TsPE2YskrDqF5CHUauhzqLWL82mNL3NRqUJ79xVyJWgDi3Lu51Z4pS4qiABdmKXDJAx",
  "key5": "2EM4Udt9rzMvFchoiXn2XqDPtaMkunT2X914BhU5TWeDNe5PVvktGwdU5n3CTnKFJYTwqPCaNmWHDocKL3caH56g",
  "key6": "65XJTpPqQo2rUDCwtCKk2tuadStTFuPKxH6W5RZT3PV5rHUfzGHXjkEcrqm8JUZT3BuKjgoaByuBHqt86q9CQc5J",
  "key7": "24sXxm6XQAibhTdFUhth2rTsqbNFP7b7E1ipnHQgME8btHEVL3M18d27MGuMEopMB8krCSPgv5oxzzv9nLTmdY7N",
  "key8": "3yKCep29mxwNs8dz6YWXQCHAUNNS32GHCVCNq3LTwVNdx55QxgQNvW91nDCSbnATGUvXSGS2tL7eFxCdGDiLvfnX",
  "key9": "2bPyKBdu6aGur4vs5a3zKXLzAMWywLUcbzKGL7zxKzT3Sfh6aLF9gRGdpbx7kJCj4jd6rpb6rC1qxNYGLiuAPeN3",
  "key10": "ca4yoxdyiWktSPCLBdLYgsKims1pMtuzWH7UvHMKyaThiHv2m7J4kF9krJmPTvewXHDZCMtoBkXrAieK3tSLhJq",
  "key11": "3DyjMtMGKRSTeHp2Ep5FzkotavTM6bDLGj1vRhftzaPyhb2xF8j7DkNNeHMQhP8ZLZsnaEx7Qo65AUK1jaYnuMEG",
  "key12": "4YcqL1ZbiB4dtJBa73b6UMT8YjG6jv9sYpMkU5UgBZkQAt7Yqgbc81BeZhYagHLUz19Uow3XWZQkDmogmKkpMUmF",
  "key13": "5NQVjVn9v6V4fVc92AAxZVTnGD8wK7e7ymfdwSfThqkTTZV6M4qpCA94VbuCdotqe7KbeZc2MtjAZLH3mouYbCN6",
  "key14": "2u8A7w6CXrB5hi1cWRN3rhQbvV7PwxRZHgMupDsXrxuEf4VJchq1spk4WXJ2PFYbzYFvXkgmgdZt5bmnxken5j98",
  "key15": "4EyAi9qfxLHrbTJa7udH2fCA3EQTQKiZHC4YZVTDe8Nh63iKUY7sf1hE1yLWUB9P42VCcWbkqsR2NcbsidqykvzS",
  "key16": "U3Gp7Dd2wjHkxkz8YtoBH25udZpXMpuHjSRd59r1fjuumRHj6UK1f6JQpGrB9YKEYjD3twq5YPniDem72yDATor",
  "key17": "5ZXUZpVSuQnRvCzXCrAssM9QRPi8sCJGohJzw6puYcVM5FSpgHN2GDRxsd5PtLBdNEV1ZLGzsjc5LvRfxFPSnNok",
  "key18": "2nhTp4qpxFKRtM5WbyvMsREgt3Uq1VkHVXPEVXDHUPgskQPrr4map2KjXbXKuvPcqx1uagAeT424FC9iEq3hyxyq",
  "key19": "26LUMZiJJg48fjCQ2y1MbaEqvyngpTgWAUBYAvSHqrqLUJUkSn25ue9UxycPvZ5vF6JXctjfmoZpM21TrUtHauVP",
  "key20": "5xn5j2F8FPdDLiyYAbLSmk8Ehj6gKpNmQD4JqWoFHMDyj9oDu6Hk6RfwKWrW1uQZbBEyYSkQES5J6dBQDrv8en69",
  "key21": "3VLCD6ZdByH72sZ9cV7PwwPQDsKLoWnyGhgsySfCWXs4kjM9SwSVson5uHX9kKuBwPegZy1ZMR6Nmudvged8nEJ4",
  "key22": "4TdvfgenW4kzVZVMcqxiCQgMiTFdEDXHLVpKv5V4WWhGZQR7A11n8ELujH4n7Me1RxhTfuEo5oqWqzXDFg4iGXE8",
  "key23": "oxW6qnzyJDZtpvSWi3Vf4nN5sL25WPPgsiP9iJ19N9LpkHkSitG64YPKxGc3NYq9vp53EAaTWZS1HmaxdpXX1Na",
  "key24": "52YJvKFxhXe9oFjNGPyVbsswYuG3ny96pZXMQ4c23T4mNrsJ7g9nWuDyECYkiqq3B76VcReU8uGPZ3dkXqRiSVjp",
  "key25": "2aX8TCAJYpMyYQUMwfE562ohnurtNtg51DFJzVdTtm9Xu3p2mjNsooUNgZzyxPkPtACYxZA5qSNsLc7y9aYfnkDz",
  "key26": "fbKWvK7BumSAPUKGUhXyzkv95mrXDcMJivYhViEcmU1gRnNpXcrP19C3qgeJkoXF1Sfi6feAeqNC3nkTLMXkvmU",
  "key27": "5F4G8uYAmrr488k5JPCLzQ1qX1M8gRS3Z4CyKvDpDtc6kx9DzV7B9Ky22LZtQy1fsZpnjx6ma6bmXxUHPbAt97VB",
  "key28": "3H2aJww8tTBTyqfDDp6ayQ4Smi2ARVP5xam6gzXFTK5iBjzpQDgiaNfdrc4oRVSJfJuHLHsGi6GkMS7m2fq5gVu7",
  "key29": "66dAt3Qfy4jdyA74PcndCrYtqWdY5V7DqF5CmAgt9aFMH7GfPgqjA7HCY1gqaN82kWtAha8UtBK12GEZ48FEo5jB",
  "key30": "2o5uePUXg8BaDwhu9a1LwrLT8RHKEo7Du7GsXoce5RMVPkFDdXwBoh8sMWNcWwJbsfZqcyt3X9sEpQFJYrQoPr3m",
  "key31": "2JTVHrgekjANzs4SR7TCop9mgh4rMp8HtfdBNBKnhpJJ41HgHCMuhSEB45vr28QaRyEgxEU83jMtxbQqRjhnLusY",
  "key32": "7oZQZr28eGNe3M67QTJ1f3gmnPxWhsAiqq3SW9Cv1ouThrpdJn5Zx3cRphGniCp9tAi1tyXCTYmsqNLrbWsRUVb",
  "key33": "3VPKKSWz94GmSAf6MiyqmhFigAtKtHnX46YNPvhR8LgXXMZiC2HmUMj2c9eVLHxLGN5UBcM8MrpWpqtELwFk6inG",
  "key34": "3ZxLZxtTTR7Q3LhJHxHEzLrT4UtGKTYXy71jeUmggqx9Ltars2JHQkrs4hEgtzXSjN2ffvEvjSxtS8yGXjs4JMbu",
  "key35": "3foXCd36akENJ7aFRJS3XWquqZ6a6gZuAYXBQiXXFoXSzR58BwFpL3DZ5WGjbcPdqKdGwatLj7DdjefNKYtWddLq",
  "key36": "2bz7YYDcPfW35rqLipkZLun6CsEjWer2gL842sMgwkUgM3B9Jbm9ztQh1d9yZ7whth6tsZt1zjFPLNrUGyuZsgyG",
  "key37": "2oko2gNCBH4Z3tZW2FRRoDzJcNS1QCuJxhwaTmfukd9ePVQEgBRjsRfXJkaCAGGEc5HvidiPf175iQttmnKgACiV"
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
