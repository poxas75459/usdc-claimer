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
    "3rzAHTe435jDqDR3iCwgLQrFrEdC7gD9CSgM4Cb2qgwWUcqGBTT54KR7JzmJUsiSBpUQNVJ2TWG614zXFrXH7nfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yznAZfXLvkfVSdtC19Ub87AsmoJvw4fA9C4WFdMw4MeBMFYMQhPqyEuquPDLbUcAMukrf3svk19AvKAHotB9vHW",
  "key1": "4ubupXJRTaK4EpNF9hHqNHBx92AihibwmwAkYtetcJkE3Wtsmz7GYMjSPffS7oEBD5Mesbymit8nCj9ptPeZxpLy",
  "key2": "4BNkwgHXb1b9mWaVuh27UpfwkhCcWHru5vf2HV6yHyPUhW3nW4PHw8f4EMrchrqefjeY6qVvUiXeN3e6cvStjKSJ",
  "key3": "q9jtmP41ouiNLws8xjV2u4mQr69T8XPpCD4LxkUG4ja9rqqRnw4AsxtspQHGKuaqWQbnFfGmBcGNoLB6EmAetEV",
  "key4": "4YgtjDRCWTmAsLgo42uVSFm77XVhTY1oBVdcRuV7SG4Eqv3U4qJKaGdEF8Pjtx9a4NUNQJp8MuBAgpmKCR1WehpD",
  "key5": "21sEZh54MSYRdgiRmxa3bFqp155C7Y11oLeeAN8y81oN3ZuHAdv2VuhvbTNB9CfcMwEsRGu5LGNpmBfJbYoPN4Bp",
  "key6": "5ZFJAGjKvsZt7mwa2xmLRR1F2MhtkbDVJdqTJzcGaQf1cpRayfv2nZd7zKVbP7s2XFP2wkCNF2S613PiReQXunUc",
  "key7": "2voFu8ivfPz2QFXnPwpcz5hYq4p3Lg8UFbYtzB4hxfJZExgiAZX2xQzunvw7Cnc7yjpK3V8zKbWHWfCc9Qb4BXHw",
  "key8": "4wPGyZNZ281SwrqpZMUa7cH3kAseBUPDcQanFBwWV2UkK6BKLami1M2ggHuPqfoR4HQwpNmjyBRtsDkYsV64Ko8z",
  "key9": "44rAA7yUVnUxEpNJg4QXacfseb4X5PVRiw7c1kwiruTjbzhm3UBoG7JMtvKMoGMG7rkAPNpghMJ4YMPEyYMtoKcH",
  "key10": "4sqb3BDLkRbp45M5t5Yk7Qjb9Fgjvgxm3JGWoWPEXwLC5iezwLM5VvecHK6ayiUg2d7SHgDCQbg8pepR8CYWxFxK",
  "key11": "3KRaydNoRkasxkb8fUiutd2Cnd5RM4YwJWD5Gp95NKxTgn3BQLiiw3cZNdtMxN5THNXLnK6FyM3g3dDuFMEUALgs",
  "key12": "4BwCqh9BugnSZB1JuCKXEKr41vRDJTVLTnuQgpWpJw2qH5kbbGM6yQnpLDed1w5jDs6nZGRjJrwCfrA59YjArp6a",
  "key13": "c1o5hZwBUUuvwkB4Emp4ocaGAEcVAmPcP1aAB43rjrFQVZQ7HX65aCPMvmny9L6HCVK7qNaoQ74BR7YwuLnqSgE",
  "key14": "2KYAfBFX5J7pqyoGqfWZt3jPTYXCvbzvRhTAHH9ybpMy1pAkgEPxzv5EiSxq96MAMNa7upD7snabZY6rs4rCC7cw",
  "key15": "3J77Bky4t2byaLgzVGEjNooCHTb8XBr2EKt5oxYmwB1jHbAP9p8nVr7MzqxMuCrnY1iGDJSq5KvQekGNqdHHDMBq",
  "key16": "4Ag1SxBRF4a1dntPqLpzzh51u87VUhVUVwrvbZvFZqfEuXu8s8hLSvAdh4CLn3CK1XdQZgSqm9JQc5WLL4GfCmUu",
  "key17": "2UE7TzEGuDKycetxbPXr8dBTxjQCR9rLXXo8NJg1pShD5FWzAhEnv13zcsPWwHoUXYzzeDct2cPegaoq3mUmZBij",
  "key18": "5yZCmyBu6Ym8x3mLtoGQVt1J6tZDzJN4hqD2vb7GHpa22hZCUzkJ5WjiB7CY6sdd8G5HnDsNisTfpFdSRLnaehSe",
  "key19": "4hCQTAHwgc3NDyhK6Nxxf4qcYj1SFxicnz8vWY8WNZe7mSaJrSPwq7fFz87SLEuCWhfMMrJQFfdEBGQU5BurQE3E",
  "key20": "4unRDFbPuXombCqxnReJeq62Yxcs5jWrxnpAgAPZvc1Rdc8xFBXdtFEkSLqKeboQr2SCzdsNbbjiAsbopKcyFgZ9",
  "key21": "5UfG7jLGriM32ihpxFHXswKVSjNL4vecNX3UAwo122GE2WwYiBTs1y1s3mdVhQj7kZQgDmpHbk8G5EditBJDkqVn",
  "key22": "3ZR4GnGSP8TRjJEuhMNYPRV26ufj1ryNWN62zEjc79H7vrqA4ohm1FsBx8ArBGpZGWj1f3rsXHpVE1ZqsbY88jiQ",
  "key23": "HQ8jcTjC2DDWwDkzLF4wnjNDaW1cm3RD4jhUEdYVtMWz6Cvw2wU1viaeyub9LCCFwZdQKrwY2epMqLKxMGevsb2",
  "key24": "2xudaZ7ikH64gSPQqarpyS2JDNnMdGmw2MiTW3dAi4PJtHrp6HpA3ZjrEkAkmy4TJg7FnqvgDbS5FQEkJ6BktAgQ",
  "key25": "4zHKWFKPjn3jSguePmr1psaq3H8QawDnPsv81o4R7j2BiLCuQJyvSjaYC3SQomNqLYT34SFms47LZzQsoddqKD5S",
  "key26": "42kCK1eAM1Qzfk69AWhRFqXAca1xrGcYCVu2fuSK36VQjCVgARKC7Md8e2sh2H6eKogChmuAyvCYkwzVAiGvWFwj"
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
