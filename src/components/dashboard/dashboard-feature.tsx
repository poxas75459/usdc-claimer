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
    "zxFDf5cEMFahEZgd2Hkx8ng3Pn5x2gjk6Vko7SNBX3HtR92etYoSgWNwWsgabPVVpcz7bqWzw1tWhkraNn6YcZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DdCZ36jfzLVQxE9HMe1c3jmWYyX2PoLZr4A1dTXVWtiWvwcVTqSe2iXunrpsFDsb3JkRbUb9DhDSD8zSiJESv5z",
  "key1": "U69EDs8DtBEUKdQG1tHLNemjEE25VEyhJLNxm4yozJPaDYQ1qtqwPvPNmsEg2wtKt83ge8Zw54MpGXkTvr97YNR",
  "key2": "VJoC1PD13wZJ8K3AeJthuM6TaQCfPEs71Rg8Cqf6anXVuANyorSrLoVVJv1eBN2bo1rL9dguWbyzBRsY6fgPuLG",
  "key3": "37LRatsfXseftJDn1m9vPtn8jPjgEAVWFreZ5PfsffbGXUEJh72Rzk9anmCgYJA8jFGi6xufFfVvinbMD4JBUXrW",
  "key4": "3vuS2h1LfEM1hoVrdoWBqAJ7yFRYxC71aCA7wYBUzCujgpYeXSx17etELiD6DqdhZe3UcqLUM1ddMe26Lv7f6WBQ",
  "key5": "5uvL2YopGXZGKJJoxVmJzHrux4b91SGYC4Tk33FcyTxtFvi8dvhRZRMr1yb5qv7KHE2LGidfm4muS1ozNDXSx56Z",
  "key6": "577ZGo5msL1Hp1VYXEifzXeswUwRTT61YJ2WuQpqxmqwEDEDd8SYmMRGXHiNukeXr5GodzueWz5xqGVurxG3xm45",
  "key7": "55Szs2MjuyfQ3EvzTV3nNXDYJPeHYcEH8TvZbimc7aKgCaWEwpJqoemvQUsjCd3RdAkz5hdQGJB8xHW173ipSTdR",
  "key8": "4srwLquTMMu3QkL7bGgddSQK1gLrnxrJi4e2TMhepoYVKRrD7v8KRDUEMNNS7cyFvL3VHy85idkr8DhJyCZXy8LF",
  "key9": "CbVwWvKEVZ9kqRDeWP382cemhDM6dQBjmzXFVuwnUGqpUv4kbTwo5b5JHuYLD8cFCeyzFx56Kxpn7WE73LgAwx3",
  "key10": "2jYHwzmrEZDdxgwVqxythwMA32gNCHht4AspwJbPuEQ87P4tipG7QEedNehyxyAzSxvtpY6eJDCgdceQW68DX3Rn",
  "key11": "4ZC2Nf2nFFTQEn6P6anp784eE3ntEaJeq6AAWFdZxUgHroE3ftmUB6qmNVAK5ZqTWmx8f4hNpMQvWwJvYyCA6sMa",
  "key12": "TrzxuZJdHrcTB5kC2r38wCKjWeaXUZ43hKXsdB3wvET3Qu71KQ6bmUtMJbUeUtKv2ibpuEaUi5tF7enYBkQyG5T",
  "key13": "WjGPENMv8abaQqk1Ja9v1EzZ6mWpgn76PFrtoJ4bUJftNJu8QPqzm8vFgBN8EEJ9zjaNVXqbKRMWRbY2MAS6oax",
  "key14": "2qoEUiht1HRismWEqRjWp9q6WkaCQ9ivfhNm75HS2LvPFYub1Adv6Tx8Ph5a9LRN6cpaYuNSwTM2WVkLp1idkXSs",
  "key15": "3YQertwPSeofopi3voQJN62ZXRHJhmEpNuZJamkbfrZZthViFUzWY77qfpSg6r5HQ43v7UnBBiL2SkHJCbtkckJB",
  "key16": "StTeibJ7jpU9HRCk3hoxHJc9gvRg7HaQ18Rm9aYoCVcjUwoGsRDQhWcFTLSKDmBrRF7ysbqqB6zxQfU9rvBmdWP",
  "key17": "ewDecaGMUtdPVRwrz1CFF5CuY2q8JYA1gkz62Nph9emEZ7aNQ7biyju9qWNXeYvRVW76qmAJeSHeaJfeZoiPW1v",
  "key18": "2T4XpRtUyLNvSzt56Pk4YV8yNTpP1EVheg2Hqa25fLFwvw8pkDN55bnRk6ypancZG5kajQFxh5jqg7AM65xbBgk",
  "key19": "3aDAGXo4yzVmrwqmTKcoqqRX2Ab3668RZLEHyx1vvyCF29fi1KBph4gWCZTu8ZVzeAxgv6MH3yaq55aE8CKgS5Ti",
  "key20": "269L1sA9ADPNqCrfSBL1vaNtrsFBRaHaJ3fFGtkx6rdvQgjfv8iDprFTsXTV8YzBAKeRwCsPzjj2Er1esUC1y3mc",
  "key21": "3eCkcizTvCyM3ZQdRXq8DFARqRDVEwfpMUZwNeQzyjt6oWCK56FXoDBjVpeaTZeUGEPdaL31tbsb1p6D5A2zu9fH",
  "key22": "5rca7J69Ms75kS1f2PyzbGSGBMRA5naQPgdcQYsqp4JptiNXWfRePPT9p2qNG4C2i35w3unFEcVKNAWtkEfgmkMD",
  "key23": "3UdHJ9imgGyPLmcQ6JuD56WGJgPXmTa8fkggz5KE8f73NjUWM9N5AJNJUGPwSdwYDW7HZsQJm5o2VWBMnmGuYrDV",
  "key24": "25ipmA6s1sb4Guiy3zMBFQHUe4qsmh3i484GXJQ12r1BqTBZApUzTWkaWKgcmBFNHzmQzwvuoqjygmbfJ1BuuvuC",
  "key25": "cAnvLBr4NN3FWbpCcLG8vRDSeYpkdtmzqezB3ovtstKvEwuNf4ZpWF2qZ4iWYjUJrqdrKe1Yr3W8GepizqtuhZK",
  "key26": "5rAsk1rvrbbJjy3sy1TndZdWsu9wuRZMTJCLFdxatKxWSaKhjU3wY9Ha42MQt6Yw9chP1AL2ayLPm33hwkLxtobd",
  "key27": "12Q5crhNN63VGQFyRshZCQk221KyumP3AD6sZdzW5AMrtTZvre2zz2QDqiDwnbJ3TYeiookBdN9hLDiESDYi3Pt",
  "key28": "3fqaf4xciLzmD5fMEgya3skRmtVet7ZCgxN11wMcfvZGBQN1NtC28BicG78ttDFXS79stEbfrupn32qKpHe3ijxg",
  "key29": "27ehXX6q85MsG198AK4RFVLjWyjRi6CCiQMzGCxkpc7EV3urzUUmUCWdEwdx23AFPVYvreibU3RKwZwks1tojEy1",
  "key30": "C3AkLFPcoqbWjDzzCb2R9eMX1dk8pF9iHYjqLSp4Z9QE6jKRvNeCbTQindDiyiqHfqmYDKy7CoK6Xg4RoSK8N8f",
  "key31": "3e7NrvRbmi7mJnaAnGgyqkDgrdx12NMuXQwXGQwZbHHuKj2qmAVjXuP2eHmvYU4R7ayKffDQheTjB2spthSyaatF",
  "key32": "3tD8PNj33Dbu3CxNxQWavMTu1x7vQZtQuBp8djN6euJCARqAPCWUDos5xZkdynuNYBwmEUqiGLZ3mb64PbTxs6wj",
  "key33": "5wnzC5hp3ZCnCkCsgByW9B2gcUokyxELZYXTXTtfeaa8PtND2bkcaWoMLubQG1TqF6PPfPga5iC3ybmUf2B32AH5",
  "key34": "4jY1fnMw4mVhAK3C3LTevKme2TewEzXs5deYpp21xdvQkKiCFnp7CJaxusDSGvpgegSWFZoLPY7xJQ8eBMKqzQv"
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
