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
    "2HiTWruxwRrzuTmoLM9zdme7xUCv19AJ7BE4JYgWRSy1mMaSxB4PVsx4k2CyRFHBPLgZjWpdy2RNk2cmJ5hgWroJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjPXnpHvFNm5GVhzwWB49UQJWEHBG6oknoAwB1sZeMh3Fux8h5w96cN4MJNi2oZoAZyrokLnY5ZXk4mqj6kRVso",
  "key1": "3xJbC286EQwHmRLa74QWHaTrv2VpSeRoxt7z9jCtviRytACsz4hCc6vZDCJtCnreuaMPW22R7qMh1nUnKDN1bXJf",
  "key2": "5Sig17v87xXDSf8QsB2K1wYtTMEVcqnZyaupLhEjKLu7n2mkb2WyrjPTHSeEsaWpRuoBc5i38DKoh826VigWpy5S",
  "key3": "5jomW5c2uLsQDtLKJTc5Ds3PKnmCCZkyg8A6YwxGAQd33gXgc925KNnmT39qHriG54aqeUw3juMys7HDraLFabyk",
  "key4": "LKHTcSiVWnJFLAV4pxUdQCNzFdP2X2sxDFKsJBpt514KkbYmbh3ukuFQRi5B1SDfi7QJeFAxyf8cV5iqxaoEuAi",
  "key5": "4fHo97eNQj6d6hMFK7AoeHmJzStK9JKFriz9ZNz5Z9S8Fzge9yjDsEiHW1CmS44c71rrz4d8PBoiQjPCdtkBJjDp",
  "key6": "4mCGgVYMkvLnuVZDyEKQqVBrd2dVbnfL2P3mDHV9vftKrZtSKQXZu9bmuPr6XNsNNreFzM4uPn1fSKt5wZryG1e2",
  "key7": "3BTUmuUTMzB7zDLhJwWeGTvH2HGR7Ror5HZGatqAe9ZUoNdRm4Sx4jWAmvnM7D3nyxZCgdkSZphPdJaJTXzpMATy",
  "key8": "2KUeyPqAUWHQ4ginRi4C3phbbYfQHz5oUDxaBjjijyoLbt4xBuaZcD3UNU6xYQerFKH44FoMGKjGbakKBwEkXYmu",
  "key9": "AS1Pzp7NWKtPF1jqtomgYuvD7BUmuMfyrbaDZBrAHdpf4vLQFizbgVrD3RdQkLRMS34NQb6KU6idDvHNiKvkUok",
  "key10": "5KyYgUGS3kyDdjYHS7FGmgJe4ykG8x5C4fXLLeXkCjogBRgrKhP6CB88aM15yKRNitt4FVbkfapxcDtSji94rrY9",
  "key11": "3BNw1mVCMokBh7aN9jRufd9QHrVnowTb4iXFwyMFRaomQs2ZvVDF9RvkNKWHswp3gSYcEGgU36Y8xDx6en5hrhe9",
  "key12": "2etQGpeVPBQvTU5gAAphY4ZeXdJjwHXuChgjS3AqPsnbG6fg1uH4vh5Mxf1NoHCXU81tsKg8rNDjLL88wN3KMXMZ",
  "key13": "e27KQmxcAWUTMZtiBPoj6tbEXQNJgDYDsZo4Q7qHfTQjEn1MMYNi5mjfjYbNwn9TB7R6wUbdHSCUXqpWEB9AiDc",
  "key14": "2osnAsf3gfFMJM4NDsCwtjQDBuvroHE1pAhF85DBAgVzC22ipdw3R32fnyixKej4dDNtncDrwAUEa5PQ1LXBzzEB",
  "key15": "5ZJrTYBC9AqiW4r9xb2fYdan5BX8bM4qazhScYw5YAGkXKX4aWnoq3qWVWPVpNXZGnhJ8ZyjiQW6ddgs3jV4mkja",
  "key16": "544RjsbWdg8baNWWf2npm5PqgAc9V3dEep953152mxCb6ftcDPPpko4A1uW6NHr6YY7fmTNktUZrceVNHq8haSjX",
  "key17": "28sRuYx4a1AnSkaxsB2N6rPLQPzXJmNf6kwpb6FxTdDemCrpiquiQ6KympjVo9u4BHc2wrTMtdfm7eXSDaXTZ79K",
  "key18": "2Hfx5yzKwecfwNvFDsFpUkYBQGNF6Yvb4CLVTJEDT8N2FoUufRtqUke54pA3HpuKMubHVKWgHWeD4mtQmFghU6UV",
  "key19": "xSAkWfLbUHNcXmt37LryrMn4BBPRVkKxGstSEB2fW2doUqUbQdxLuARLQxg9vzxgpp57PgWZkFonPsXXdfHq8JQ",
  "key20": "38jUfhh6pKQKyQcHKkRJaqb8HauE3ZVSWHEMk1QnFwuVrraYYWrgyei98b8fCVuTx6azWfSy1iL4XYsHNPgxe6zc",
  "key21": "2aAf2VMDGPqotDVvduSCnZdLdaw3HxChW9gkoLkwYG9MWD1EmFe5qS9UuvY6aFtG79W4M43UJY3bn79vD7NEfUmg",
  "key22": "3YBBF2F3Xai5MFBWKLJnbYK42sLEyxMKBwD5wMBB3RDY6CasigBMLnCkesKiVMv7dRSZKo9rn89USAvJSeBdYoqs",
  "key23": "34X5HgvAjLwBFhQd1NxoxSLGEFwHxEUUB6vAobJ5sJZH5fGpZrG79RUaZpRWMiJ3t8WEbyBxZoqScVs49B9Ab4UR",
  "key24": "5EADf9jnoCXDDQiyZWgMzE3fiTXvcTLykCTARBafXKtcbLz7HKyPfTxJ2cqLJMHoP5kd1xT35nu1s55uMrEC2y1k",
  "key25": "4P4T9d8rVy4a7ioekU3YA4UzjzEYcVMVkXRoxoPB5KbvjwDfY98dPnbN5r9DRKs19vZ4Mtqh8UHju77KdfNmms6k",
  "key26": "B2cCBBRm9sRG7JCoKVatQj9x2ESzrNQYfphD6CC6Qd1USdU84vbbJVGTZEFvzUkNaErSCT4CGhVf1CPMdEhoH67",
  "key27": "TFhm7rN7hMUydBHSRPdoAo58aq7Q5rTxJGB9DneB3mMoN6mNkf9CSM2hbiGRysVtpdGxacf6SQcmEtMuf554R13",
  "key28": "4nf3NS5QJa4tg7ZGNHRSennWJR3vWHcsXWVryWR1F14TuTaEaTrpVgV9jSoFZ6F952qbtUDE4wTEcP2xJgy94Nuj",
  "key29": "48HrLtZjeSFHWug8keLmqdU324Xy5khNzff4pBZgyJfFNvERMdjFKwvTyUZ8Xyc69W11rjp8EMQSFPato4oA5BXv",
  "key30": "4DiftWxNzvRQgFeQ3dmeu6pgQQxuY1YHHQ8quVK4rDZJkXwZ6jrkwetypu599CCS2iruMBwnf6MiVsmkRciv8AnW",
  "key31": "3X98afPvsriJUz5WopysyPyeH9NVEUPufSPob6uStaz6Z6we4wFzaDMi3pdFrkXWourZKWthYpSV4iiqirvjvpkq",
  "key32": "5DJthDWAWZg72DZVHpSbqnydu7kXPSBcMGuYPsWvxfrGvpmQSv1RXaYus4ybkekYhHpBEdEEAYwz3AZX7iuivqad",
  "key33": "spm9YQCEUmTiBYeU7PX4AQiaK8mzMbqca1wVbspcWqyPrsMYDBYTTAPui21E3y5vEaD7cxW1i1BnSK3p6HZPbxd",
  "key34": "5b2WVUNX8sgyK8P8QdBBzbqz41nrPhFCd4AKqfmCMvaWMJxsSuxUVCGJ4X4mwsuYesERFfejNFTVSP4Fu3LYQReY",
  "key35": "3rtMPussRGy25196amyxxHwDAebAvwz5y1wanWksCzFPPN1neQpHYetWBQwi4SxTUkUs8P6ezmHZBUmzREafL9VS",
  "key36": "MdqZswpNDotsPqYgHudZLY1TJYReQCnbJ57QfjkWnwyZW4YgxHdw3iPgDqf6Rafxn3kii2xRvmr8K64GvyYndFg",
  "key37": "3qfmmHVAknq8d7ZaTiPFuNrXUfWGDk7aUg3UjyBzGAN27xCQaqL6fdgxp2cyZEs1aW47bm18bFq8oAgRTfMSH5Zh",
  "key38": "YezxYKbRyAuKV77FCMM9mnC61QKgLfMWbeeJP7Hd6oHj7HpsSC7CJP9jejBYGF86tzj4cYxuHSx7fGhT9MU1tmX",
  "key39": "5sc62Pdg5mccXT81XcyphCrnCPmBaLqBSwHkQvtw5i9YmG6BQazMJbDiUt2PfSTLSxzvKRUCLrB7vo63RxVBAS1s",
  "key40": "52BHYZ7EWwu5aofLS7iRvf4krV7WbYx6Ee2wLGRNrbDigKDVcD2DwBiLVBtWj8kb2oqvQCkEpZ7KUghJwmJoLPAi",
  "key41": "59eAYvD7pFdbuQkP1ZnM9vMarCZVoyXDH6KLEFyn6nrUcG8KjnnrRVHZw1h3ASg1EcxDQNDsdy3i2vt7MUknnxZV",
  "key42": "GzyDMYPcdkv4uBbj1Wg3GGn9qoEa29E6tZJbTLrxvvpTYNetURwLqrvKBWYC6yppM96MwWQMsTtVovcHrpkWEJx",
  "key43": "bcpD7VHqtTkDmLdHb5hyPv2QW2UN3ChbExxGA96DxkoBR9Fe7WM5ZCL8kc3vpqPzkYfWmx9ouAEMgCf8UebvN76",
  "key44": "5sybhCr8qkZJNbDS28rAKjMDdjXukeyksVSkpCeRA1tgt7MVUAsZXTuNVFCssBcVFYRT9jUYhjrTv27cVjFQYUXY",
  "key45": "5keWrKr6VYPqHo52DsWHtaMyBj6Xj313KDkVcZG5hAw6MvhqjfpK31mZpEuTii9fickM6qo3Q7ak8AZ137Yk2VSq",
  "key46": "5PK88UBL1f9y8atrxvihvLJJWiaAsgeZ6mjkAvQJgQvdLBrigTJc4n8RwpUjQ85sdPFx9RbTrxusH4kudnm4cYPf",
  "key47": "46TXSuYGVbXdZ6jgzZDWcTyAWiz2dmi2h4j1jvbdXhEzzurJwFeHB5WrKxZHkp9s2gujTLVyKouHhKGaSpN4asBp",
  "key48": "4aGwxRE9ThqUJRh7EtkQyV4nSsuB5AyBkqu3D85UtwFS3ELwrmJmrMKBpt2hjv6S3VGgoKR9ndn22obrPgcKnvbd",
  "key49": "2DeWWsQjvn4kd2DeGwnEpxEEgz9bUv4ZJfmYpdBHnFSkhoJrMRDUERsCKJyFrT1eYmsCFQiZR6YNcXkTowbPeBej"
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
