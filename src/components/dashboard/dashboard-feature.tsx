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
    "37joHEfWz7g3X3YhgjTgZQQHvSBLJoNbEWr7P1huyNWrpo7gjtrKhjoD1ZCF9rSsSVWuQXHukGoLvFQSYHQgjMTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogbbWu4ryQm9Xw8sgSCxcnRtoKmR21zzDyFm6FHBtL9hvCgTA76onQnQRFESoTzUu6GGnQXSckYMjGrzbMMgRJE",
  "key1": "2tdSrHn45t1ap1GfjTRysNvc5uzCP9caQK7uefaW5e7Vgny67t2BCYL1wfyZYLcx6YLFH17dUMTXoKnBpWda65Kk",
  "key2": "5QCkNxnXnZmfnb9aYiJ1CF9aGgxzKZcQCjU1TVL751AQwkj8YhY4fZwWSCHPbwzX3a2cWPaq3FzXbhg2LTwhubuP",
  "key3": "5jQzDEhC9DhjWM16oEUpN3NkrD14ik11Yp6Z1HmJM3SVfHu8sFNNZUuVYuLbgxDXTka9faNCDDRuYaz5DH4KTMpS",
  "key4": "EYiY1bXiAyNbrWa5YjcdszyYF4SkmAKgiyfmv9rnxacD5pUTa9iBXFuaxEWKkswVY3oyPzJ2cQ344ibsBrD2AYC",
  "key5": "4jeibiddSVKBdne4j42ur1npuvViZZK5B4Btmeo4WqUCkJgSQEh8iTndNAfHnPYA7CfMTbaTLSoHZgMtgCXGjY27",
  "key6": "5ugduaGKfbE5MkjDsgNVymR1HpBd3aNe6zurGB2nsv5V9v3vxcXXSyustMQkTzLUVu19q11293xqtSXmhTaVV1ki",
  "key7": "4etL5qev8J9zXxxFKabCsGnP3QQ9xVpx4XFc2hSVRDBVr3xekNQQNNiwxhDN9vXcp2MBjpWXBEa1q4zt5YdGu71T",
  "key8": "5jpzgnBHd1miYcNRusMWr9axgoycnafdT3ABTLtAYEFjCqvRUBbzdXGRLPHeVK5LsuNdxQvtsTpxNBH646Ufn92s",
  "key9": "3N1ywDm7zCELr9aVyQzPPeYRAFBWXDTP58fCRiVYBErpFQqW1cmhvBRijXGDHEyLvoEoDmjGbH5CeQ4rLrdcUVhZ",
  "key10": "2Jqqyjp481gs6iyvgU58DsnE8VstYjUdbBzxbPggXeMJ4vDbGcGCKheeoAvQMb4uKo6sx9NidZrE28kQZPUkHmE5",
  "key11": "2B13raY6X8nkVgDscFVwF3iwE37txFnnXztLQFEfynLd6GHmx2YFogBcyxptuc38kQoxQq1gKPAH2F3AqRpc48F2",
  "key12": "cpVAHzhdLZ4MfoXpmBM4DSVBtubdVoWaf4cAyNACdLseruBkXy9GBxEHMZf2hvwWDbTqvHms9VwWUgqMbEGyXVv",
  "key13": "5viR3bLPW5ohRRV6emRqU1FxJipMRWp6JrwvMVWB5qfKfVfnntuzF8u4VYTF7Sxiz5Gfb9LuChMTeMhqonmA5Yhr",
  "key14": "3tJSMrHSTsTojZSqTREeZGh2HXgUsYGjEVWtxoWWWx3KMpYGUjV2T8BLmKJYLuhdnGEbiLX5zacb9xstXmHrEyS3",
  "key15": "5KMuKTuZwPT1KtENUqBSsqJUxK55AZvi7CCi6Atc3b1uXPhvz64FbMuiccKEpTCtamCQUBcSZbJbPpxzE3C3uBvZ",
  "key16": "Gpe9u3WwyzcU45mz7xvgQSuXhjfbigDuzQbNDLgNiXTruRbe6u8jFSgmx71vYFamzqoz9CNPozFBxLymesDS56U",
  "key17": "21sFbPyjhacbWsYk8Up35nVChEs5DGE6KtTFAAQoZiGYKUwGNaJ4rdB5cgrYwY7AgYj76eWxq8hGrJ39XJngQRPL",
  "key18": "2W2oSnQ2dEtkKWxqzE7TNurJYJveGrHonoAPwtgQEfXuao8S1qLPAdRkQTjnYH8LzKCiUjcGiJyZjty3vPNWV2SJ",
  "key19": "2w8AAcHnyQHw4pEoKHp3dmaM4BfJyCYEtMmxa72uptq6br859WF1u6D52FKgvMHkzxtFfb2kLfiDyrP2Mc1pEMxq",
  "key20": "koFh2p2676mucaA3u77x5XqUHeVXhwMxbc1dyfdrdYfEDaGzsexUSRAtZJvc6E3M5JyPNHyVPjzwfzuZ49bUz65",
  "key21": "3Ys7rtB74xaxzFnT2CEkcJejehku6cjVgWRbeFMaLjCL15ZroxvUkQthFy1PfjkWLpsaGGD2bsRj1PwY5wWNscCw",
  "key22": "4eQgV45jBKkRkzbq9KnoMdVeAxo1iTXBSojfHcd967aQZCTNBuEYR7xJErtKNeC5WSD6SLr75iuRnLBR1Meo6bXC",
  "key23": "36wLVT67h7R6DL1pA2gJXz3qHHT57b7j5VMLQuJVfSBZCVwYobuxwVXcV192qTVSQveoyzQcBbaGdjGxtm3yfuh5",
  "key24": "3sqroP6zadoiYw43TsmbAGcq57WBCbotMn4hcZtZdMjWsLAMJGKDvVBUfj5G7tyzpg2JuoTYx6C1YEBrBMo8UXCD",
  "key25": "2K9XSTSx5aCUqc1TVncj44RqFcVwy3reCmbfDFCF2LkuhgyjP5Gxz7dWiNqRTNQUgToT69HeRVfwwyZ9NhZKnhJH",
  "key26": "2yVkZBowK2kYDkrwnxf1HKiVYwzizS8QmRd6TEVFtm8kVyuLz4mM2cgp12nexZbWYZidZJ9QY29T5Lk6qsYy6uBk",
  "key27": "5nEnTsaVpDNMKB94qJ9kLgs2bswT7o9MoyE8zSnUCDaBA1TnQvEhqpCVkRGvU2NnXHMdVsgNPASZ69KH51FBD2Xu",
  "key28": "6roQ1xNhEh2K4bTHvc2X3VKGDCUGMLfiNGmJg4eqtHe9FQ5uKdiQ7xME2ABiyTV2Ft9Yitkiyd7e6bjfsbCorkE",
  "key29": "3FNX5i7iXq5UxLzYhSZ57jaPk5zXcchEcE5yPGZaRfZ14MP8b4XPaQvN8efFdiZGVLm5ugh3bZPFfGyMJw7v9suj",
  "key30": "5fhMYPHYkzT2uQvx5yf3ZNtjqqWgM8YyPzrDhgSKHzVuqook7cvVumFjHozsDN2sh8QWzaLQSPZXtmZGdNUW4Vm",
  "key31": "4N7bAs1CyHFmkXXqZeSrFExv4YAyn4LKxcKfnCVxivuGpGGAKWuK83xH1fB1sX5L8RCYgoLiiQKdXCkgGDmCZPRS",
  "key32": "fsoC4aMCn9rWov6cCKYb6t8Xr86TAmnAfBqbMoq8L31qatrYeE1yxkR6Xzk7pVhu141zbff6vQtwpWrcHALx9Gj",
  "key33": "1sBMrCf7xHpZBwensqq2hsAkCn22YxgNCxkqxV1PwHcXqBUEy3Vc1UyFR2UeRMCF8T5MsHhvxSva7cycP7N9jzh",
  "key34": "5J7c7MuoXsfSSz8YrAiURWqMc7mPAPCQ7oEetLsZsQGabcay79wWukuAhQTSFsj67qaAvB1k8y8ZNBmHanMtTRHa",
  "key35": "3iorsrFnzWf5Wvtms2qAEBGgoE39C8sNZ9PbY8RgFZz2wPYdPkmr7Q4byzdaRKjkD4bbyEqQUg7S3SSAo6Ni8G9i",
  "key36": "15JPEAQAjPUMXwN88XzvwfWFJ7sERV6KGVYyigqZpeWeVRC5qTgqoo6nPbzscB7ua8qydGkhTSW6TXfqdJa78va",
  "key37": "2bbT9tW22op89CCgxXjW4VvRNUyxDZntqKBqhmPBevbD2XDKmBVcqSz9dCZnVF8f6Fw6xabAoSaUttX5QZRpFFWA",
  "key38": "6AbT18d4nNfeH4buHpsr4TsAbQy5LwhcHYw6wsmcY3BCDYBkHGqwUvnUWBEfjxsQ2AUYoZL6xKWcEQpWN2q27sh"
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
