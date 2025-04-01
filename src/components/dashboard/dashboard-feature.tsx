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
    "4wbiXPpGEamrf1CiMCyfVVHazrkygXxVHXD1c5pPSY5bRrchjhxqgTiHNhuaNBYTo2e8wP8897BMRLqyr5g2N9zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rGxrnqRXUfLvR19LrUBQWRtjoU5kEqW4gZ3NngkoUnZDLvGqrDyKkBF1PGHx7Rt9A2uCaQiapiPrG9CERZHAwLx",
  "key1": "5VCA1gKxUKy6uR4VFFSuU7o5QAsGTYfy3v4L7cbH2Cdaj5GQjif4PxxKNbfRjHYK8HQRw9HRnNrA1JEWutYerWDW",
  "key2": "67ZHfLnUEQ9qLPPF3Aniwy49BzdGrdkhmcsffS6HMkzC85MWAsL1PdTpT71257gRg2e35PChhNpYYKtK6bYrSrbA",
  "key3": "3TVHP6dsSM8QjcYjchCzUH2cxTRrojctjzarRWCeoLCnYfLrfgSS839suR8L2GGuEg8SDzRXjRE3rcJBpM2u92wk",
  "key4": "2CF3Kub5Sqq41A5Wxxixk3UyRora9SeVnkZGRTqtLjpsyYZZBH6vMqLT2VSz8E8e2yw553SGsCvWiBUDcwDiYFD",
  "key5": "wvJkffrqTruisvt9JiFWxo1bDWeMzPfdiEQMYCXRDRdY2KkENkCNoBGagmU6dSVAkH1hterbZpbfBsf43JRmBJ1",
  "key6": "36UsLnp1TLwXK8f4Bt8qdHWT5DXXpximViNtNSJeudbLXiyAxr2b1ReKUPeck3MgvnhyHZjU6k1xQ8EX9VDUrviY",
  "key7": "5n5KD5c9aRCx3xykhrU8uzTLGwD646HG4m6o48UbB4w5Rky2akA3eWKWZjMo4SXJEzkqxJRKhbhH4HCk4ci6gPpX",
  "key8": "5DtwpFuawg9reR4jDvc5NuNfrPH4RZ51xEkPcSpr28D3GpAbCCZP65rvkFx93EPzgMYSRDV1atiMiuSujNUHLYXD",
  "key9": "4dQdkCdSHvoE5MUPjoo5onKBVAz3x6WmwQ9P7iPmY8YbDWgZWZaK92H8UQodgUohZUVi5N9i59cp86wRePzQUtp8",
  "key10": "3rW7vEpmijxAQQaDGW76zQdZjKVde69CYhXrFhmLaLZC2fVwrUE2tTgHBky5Ny2NebymfVuiTGrWp43ufMaSLhsY",
  "key11": "2nadCdVZUcyBpa6jz2fTgvnCxm4LkPZdCxYFc17N66n6BgfJojEpypPFA388JVJf9PmrjZ22J28BvVuiLruBZ1fS",
  "key12": "22ewaM9MzB6FjYxLiV3S6AbVMhBR8PmHXvXyouo5kS4j255qfqicf1g87gFLBhkjgQ8qaM6UgQPoP4nLUFSwS2u8",
  "key13": "3PaFL8MBnVFXsZeWfzUiXNGm5N6Pmx5MHZp8CCwS4A5ztZhx2ot6LNkW6iSR3YTcvXNqNp3txJuriaRJLmaNGKcT",
  "key14": "2uk1dNxj64rtk7QWKJRy6R5uTPFo6temMN8i5GHQpBWSSazCDmkPtH2r44jXdSRFqpQKi6MMndrhQWxYuPCRG9CH",
  "key15": "3Pzkk8Qm2EzPKgJM8xoDapCqNbH8TTHSVSueNXGSDTkp25rBoNpsbtdHG3j5KygB4W4b34FR37VwErFeBjHnSpa9",
  "key16": "3PErxuFE86tEpRJFdncVtk6SgKRK4MUddCh1KXawYiTACmXKyy9fjma6Rq5bMWMcHXNmofifo9YB4iHTXuCXQySo",
  "key17": "ouCA9fBbEDWwFB9MTLSLKMeDBafDLz9WFohNZEcaBd4qJQNP2NZabaMBtECUv8984aMGdFnfgNibsPEuEQG7FGu",
  "key18": "4kHNFYfpnYJQ2Xj4RAmLQne5cURkBfHvmB86cp53BnNiZsmtK1ZBDi26oRniXgZtKEh8GUzAV33MCww3z8ufxASb",
  "key19": "3s39T3fGbup6Ex1UhePKKau8WGJEvZfqKcXN3qDEJ96HS39g4Saq3uEJMFH95rrpYts9hW8L8Vzofz7i3XXWDQHk",
  "key20": "26KhH4u68rEfCbZFWE5AEATw2tWdiHkkaxsjMXFnQTQYVL9ARSUupYgkGJ7pxEQxtjcTMoJNyGTACGJovpLFBqLk",
  "key21": "4qvEudrngYzDLKxE4VzR3fHxAXvpPBDEE3fbZ7YuDRySimsgsevgpbqojFGLzahwxazNzpLtgmhKg5K9ZHXaUJbk",
  "key22": "33i9ZREFvur8ZBpCbGqo9TswVGE8upNVCxaw96jzuLP25UumXxpbJR7Bk4FiU8hyy8PhXzmC24X3s9UAf2FmYf9x",
  "key23": "4aP4A32CNsqn5rFcLugrYB3dCchfzd2wdtBeY2L2U6tEgp8ucmajg5jQNioHUfhK4h4JtgEwSBaBUud4wPRoCaba",
  "key24": "5q1J9774SAEtYbnPrn1KZ2trFmaopARAwH3joFrXHgXW3YXTRm2XZnknMqAPNd1S9wXBr4TmZpLmW7ncY6XbHqWv",
  "key25": "5CNSm8VqAn4FeefvR69AdfkfHD1gv7SCUz8SJYaRm69wSvdaK9e2xZxBWrJDM3pgrHscBWVZpCNW6dd11UuXZ2YS",
  "key26": "4tDNQUsoTVSaecn8p8dseCxJJN8pYh1dJJHKWZCgZRHfp4oaxvKcov7AC4hVhZxrCAZSSetfJfNEvz9e146LB6X6",
  "key27": "2ApSye8FcYxVaphY4ZVwo5ppPbDhVcCYqxBykZd7PqbDybdD1BkTvj4AudtbfcpaqzxPjG7psec28RAmCi2f8rrp",
  "key28": "42Xu3CYRYy7WUbbtQ5ftTaMX3ygHkjiVWrYhpwdeKGbTJbDt1GZu8VmsgMuU2GMZSt6sW3QWkvUjvsqNMesHKKdV",
  "key29": "5NttqByhLV3xAba72bdGMcH56zhxEuaEq53ztNND3QLZaR56S86jsGkmnrDzmt9FwmxBuwV3pv188eKS9gtT6Uyp",
  "key30": "3pH7SFEbRaHMnLHcR9P6H7okhTwYWNJHWmWFv3hpDuM9y67fWToBGtmJ3ii1LvjdpH2C4E7P3WwmaEXFTFuRe3PQ",
  "key31": "76c6kmepjVvGWN8D7un4wcWu2PiJ421GCq2vHrGis3uAvaZBuuxxFLPDYv1b1GTkMhfAT7ZqRNKyaParmV7BM4K",
  "key32": "2qo1UN4jJXECyETiha21GN2Q9HuBvBcQvT3LwRCNNiukX3w1ek624qo1XUYEXDKXQrDgcZp95sxiGqQnHzHGaeXP",
  "key33": "2vuUgk2SB7AHzr6pxp2Fp1ZhNDJ9h1y6tUNTnPYFaejBfDKCtJ5mjdKqm9zKReohqNPvKjbDzbab9YXfrqESoX8n",
  "key34": "7YhaAqYCUZTEqCBegK3P9ea8yMxTtY7yBCqkGQZxpzgZ26ZAnsF4QKPEQfUmb5TCkr6VM2NkTsEhWqprpscADNG",
  "key35": "f78oDSWSxPy2MhTmBfej9zLVZRZ1E1FzcmEVUH6vxpaQjfGcaogN5B93EnnXcKJ5LW8hS59K9dvCf6nTRV7KaXy",
  "key36": "Kv9Y178GEncKue4fckDX1LinfyuzHHZFo1jZb8R8FF9ftD9F3es9pMptgXybwqoaSR8S4SqTXB4JhhtrYYxcN2n",
  "key37": "ggaNtSLAsPZm5bzGeCF9aJBMFgc3kTwEvbGfv2AbFUkbw61UQcHSk9yemediroyFVy2Bbu6WKppANQtcooEMK9G",
  "key38": "3Yq5CWaaRF7n887gCSm3UNWjHzk267aYKUTLXP2ddueotax5hnxzxcVU7q2Vu79NFi1D1Jo9B2UDBrgU6TqaKxjb",
  "key39": "51ymnBoWL8Wuf59s2ue3CLZVqszH1d9gcuu26ZAya8pA2qKwrjMDiT4Pgpr6zCS7hWnQ444XpsYkMYqw1XkdNNv6"
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
