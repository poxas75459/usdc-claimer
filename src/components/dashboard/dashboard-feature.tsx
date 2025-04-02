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
    "4f4dB31b64NwvCXUuZMtJsFKk5ajANXo9B9Z5AbKouC3rsDkEieoJQqLDLzKmFrNYK8RSb6zKWpzLjgVfhxGvvyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wp8B3SDRpJKCWmMZ833uvDV62uStQimvEH56tjqoyzRicgyFWWADbmZKaJGeeYpvpwqqjuUaohBxWmBihuvViEu",
  "key1": "4CNsH5TEqNzNB4cv3mhVqpLeGUFNPpauSqJqGpcEgQDNrj8qtQW2gciwWjqasse81LVPXgKFBTjqKSsDiGkQg63j",
  "key2": "62MyGgwUsyiiZQ7zgx2kF47nAVxNDqjuFYdmxoZNVyegTnwQ5fSPgCZzzBo1xS8j7VtSt2L32h2BcgnkgeLrHTbC",
  "key3": "54j58FgojjJKxiWHKnmt9bBoVRxcgTipRccdMkdYJSag9B5zcqUAueEXHj6pVfaFuGYd12hgeceougfXehDw1Te6",
  "key4": "TPURGRscAp3Y7BWNTsiVMHGE8zMGtQb3awSKfG56YksM25u3P4RCKRTzjiRU9YuwG7Dxcgvd7BpDzZTMxJJ6mYy",
  "key5": "3prwUzuFEE3qBMJbHzgx6bxnM4cK4jjZfnpHysx7vLSxT6t1PvFC19t1QB72AFsSaGaZesD4kS8X9QpvR5ewC114",
  "key6": "w8c64FTY7Y3qyTGFK1yz3WtqwMhXH3iipwf5rhH4F1mU9QZTHkaYudwbHvbu2dzrZAAcL9Y31s3n525UaULAqBY",
  "key7": "5zaTqxK1qf8RfxHhRGSRaR5SBn2D3baQ9yhSUHTFNgMc1vrEzz7uvbV2sXnfJbBp6yiGqchKPdKYDp6scDSCPa8b",
  "key8": "3X1EW7ZKysiyBeB7GqSvi4w7JfL4ohbm2GSFpgjaAoS1syR1qFGp6mMtW8ooP757B1Xkeg9TsrY9JkdJp18TFFeu",
  "key9": "21QbvgUU5meFmtKCmMcERqZkz8pm2KUR1THJsmGrV6tjoett73vFbEKY8Uv3crMiKrzoXzgpptTwK7XyYcESAXJc",
  "key10": "2AezTZ7s3LxbW6Q2T7vWTvPEPBDwZwihXTjzcWM4s97rPA32a2UK6GGrCbzEBk3R9tRHeqaWaf8j81RhFza7w9jC",
  "key11": "5ZhSGG1cRuBq7kFqh41yBR78xKGZSUEADQT5rUriGLENCzExLHASksFK2ywU11DWR2t5n3zfsmB8Puh7hfvtq3pm",
  "key12": "2zXbMepR6XMt5ME5uYBZAGhzXv5QhZCBgt3ocQn4a7fkfrNeT4i5hYCzkYLKUUPHEqVuRoJGfEsjB4Mco3VE4XkH",
  "key13": "2jonxNTP2En81om9X7zQAiEtiF8ACjaLo7oykWHJpEaDv8vYnrpByKwUfjAZ5uJPu5SfLpFVJfs21kqFiajnD9gF",
  "key14": "Pne3HawfPukBsf9eh6UpZtBo5Ey2X3CQfMWFZYgVuv2hhg8VyLGeRdRCuqWsL2ijbbtZp2Df7bet2gFVGJ8TkBc",
  "key15": "4TLCKUZxdwtb4NuxkQM3isqR8aNNzEmVpc8rQ1or5JdCsauTqvnsnX2mrwcZDXHx4uEgDCEAhJ84ztGKLFuh3VaX",
  "key16": "38YkofRSqFq22HZ1G6KX2GEEU5xCkoSfJxsL1Trzh7TyrHKYPoxMx3eHfyGy7d3fnZD8JwNmeTHZwhVaK1pZ4Fwd",
  "key17": "2ZEBTFSXMZDmdDtVrSf38YqAYCMT956xYYZdjVYGX4txs5nMdRjNpNE4Fc4qULwiMoTQND6MWv5otmxefjFkjPp3",
  "key18": "5BX7sjkix7jhpCWWJqhVHrDZAMuACnhyAyohxRYsqro2UBursGJ2t6qaDsyzhuB6ggrZVHzVYwmaes4pV9m9eKGV",
  "key19": "S7pYTUbrn6Lz6zFLmb73TooBg13z4uFZtCERtxYn7vFBdVCSGPatVLpXAkbVaK46fYoYLvdoEodudf7iJYF7ctH",
  "key20": "5BtsuE3PDz7kyE3NbeytBrViY8saZunMTiwCZUBWjvDdxdZba6vrWvZGWQiC1D33JP3x7VT5RheMrM6ZEYwHDG6T",
  "key21": "3TFVf7nqaUh2oNWqKcHSMrwFZSSAUqLiyNm6WT1hynLPv8nPqXZPCFvcesYXjpDcWDEmoS56RT8uMdPnAVYuygsL",
  "key22": "yzrJG2zf8NEZev6abW9deW5rkQ9jez46zpMF9qjfwGUUZBiAf4ftYxfBL8hWPnN6j8kxsywg8fUntqRiN9k7tbe",
  "key23": "3LgPtLSm734vNPhhWSh26CBr7uuZWDSWXJTspsQPnnmbK2VpcheiCre8BasAJyazKfXLL8JzVUpZRaUPcLbZ9Vgp",
  "key24": "5nGTFSKiauz2fJdJtNYPTb83t2QW9ZWfso6BF1uwrMru1TwcS5f7TZ1cyN4u8DfnEo5RnvWnb6eSxRnLdbggpQw1",
  "key25": "35DXDjXi8kJvKFAE5QJM7MvyDEWrktVNqX73fkqKonZYYdrXpWSpiEQdvWxsmXPo8gsXHHNiuMv7e2AK1MDMgvmH",
  "key26": "Y9tGnQEjMdoma5MkLoGXiDuanKPD1cv81duE23XkxNzCDByNRqw7BkStDe4KqAohnAc76CequhL4G29RXGcsrmA",
  "key27": "5N62aFsEbNPNNgvWrE8TAh7o1d1inBvGoiYPtnT7Ddj5xvVizsu7HSceFqvfx8u3YxK2UoPWCW3UhuLA1A52zAQ1",
  "key28": "5AL1JM2MecpFvdAqpKAt53FErL9S2u9ezDJn79inP5qbGbxLUfY4vx5ecSTHbTtHumYcasmMaBg4h4pKEt4LWfyk",
  "key29": "5dYNFAfHfo9eNUUzwKY5xRTUSS1vZBfDvpHZqvQZQYbEYTmB77yw8cwF7A31crQuv6H2nbu3CF8HsQGm7HegK9AD",
  "key30": "54utzePTmDUKoR1z4c6bAZQPpBQHobFe8qBLotnhrDTkDVSxHAtdX3NaHJbE6vp3vbdxgSvvDYLpjXaeFvp6fEHJ",
  "key31": "4bc4HgEcXGCFVjgxqACAm4ChBpPnVqVog1eNBt6NCDorB7tT1XKGJGiecf8F6hMX4dkZnbVHE9r9GgtoQ4pXKR69",
  "key32": "3PhPj2yrW27W6LMXrLRN8bjUCofpTAKccWmoruZeYLgFfZLnHG1oQDerxtKovnQvNLLjg9J4EKaSCYu3TeHUY9d5",
  "key33": "2EyB7YRxkAG2By5az4WFtEKCQkrbgW3DzD7gEvRJ2jqYURsqmi2eFgunVWWya8j1vHvZyvFuJeJ7BDbJwHma4who",
  "key34": "3nEHVHV3d9ZbSWDfhhMvNXh5AAXG4exHomi1TG3dZRyM3c5ENGjs8JFPqa43zMdh11kedatWnNZhEBE1zEegeQ4G",
  "key35": "4w4Lt55U7Q6mqpaTPZjmAHUabC31Dn3EfyjXy1x9v9fnpYFiT9wMByT3x4nxGe2fB2UZfq4biszBWfjRAye3PVD9",
  "key36": "5TaLoaEzTESEaSTjLuL8hX55ZCwcgmYYeKvGHXkjeGseQJk4ABZpW5EBmiHmtLWEMtuBDjcmVu8gmZwJYGtNCbje",
  "key37": "4pqdoHGusmTkWyNDRutgP76uHiiPjT7qnWJFVgtJwY74wFzZ78cpP8C3XcdSoENBaArcK9A5A2ZELkyMRmoWdPvD",
  "key38": "56NHRU2xj2LJCgcbNpNGEXcaJqZ72cGUPVf1AeVAVmRjsB2CguiDiDNYbovMKotzsjZBSXi1iV4WNTcU29UScU8r",
  "key39": "jvnVcPkm3QefU1rkXi62qnL4NyZCbLYdxYMWS5A2GtS3RiXvM3w3SLmWH12CCrYTXDi5A8UrwGq5NN7mP3qmz79",
  "key40": "5LCmhqLzQfMsZYnpxwXqZsZdnXNnZVTbjawu2MDQWm4EFRVQAccRzUtaPZ1Lburkhz5sUwCozUCFPDiXncNYpu2E",
  "key41": "65bzJAGk373YjMiL3cFL4m72LymRyYNk1jmXBfJdffKCE5zMhCE7VYdLFPxDdSM8eDwScJYudkxqNhRpwMELDXny",
  "key42": "2dRXzxfGAHSxvZNxSN6881tRmiURtAvq5SMXbdAkBKcExP5Y7Wa88rP88NbTEb8qrjrfHsMfN5nuixBhh1ExXjH",
  "key43": "35JyUVsZJZkwGEbPeatz9V8ZtJC1qdvzF9Zqm1e4ZP42Qt6DwYMch46Wgx799qYPbAX1Qudh7QHGHcrWAr7Pa2vR",
  "key44": "An2oW3yRxoXPB1hvUnd9e3xvyXCD3CwvJTpq1Nx2DrVxXBPJG4nzywojaA8cK1Zf2FjqwtMxv3aqNq2kWjuuBzY"
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
