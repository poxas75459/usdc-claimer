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
    "4RQnb2R6Hwdb4A1Bg2zqP22h817p2ruPCLh9WVnzpu7cQQ4L3LwCApmQ4YAuFPMjpazB92LDkuV6f9aFifz996nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVbQD4qrLMs3qRSTGEz4Wk4ZaEYYBJatmLdKPswrUwZM7QUyKmc7N12q9aFzvpK2NyXk8ihygoLFdjWYCkcYiWH",
  "key1": "3Gr6CrubHdUo83Pz5nEjbSLU9cgGucEU7E4MM4Pdb6bVafiKDzZQL1hooQGqGL6ASJ7tHbLSnb1aNDe7Cq3QFWZ7",
  "key2": "3kskZAfwL9Boay4ZxMiQy3yk8LsTRm9GAWtygHRLnwDZ1n5D3HQKKezUsRtsySjrtureBDqYyDWQCfCM4vuWkdEK",
  "key3": "3DugCro7Jftf2cFFAvtQDqTLszyBYBJCqf1j1yKcfjW5f7WfP6yof2oXyTYNNMu9fTmuG3uSXS1j47ftjrSrwqBe",
  "key4": "2UsGycUR8HCHirSaaTVXAzqKhMSAYMLpgUHdfvJVNt9LjwKwujNC4224q4XePZ5riK2dDgRgbLqhM1twpiXkbxuM",
  "key5": "533J1XcaTf1imVtUNNHhweBK6tg7mWiVY7rycxzjqmeFm88dq1y6Rbhv7dquoT76sJx158K2NhVoknnC6a2mTEmM",
  "key6": "NQdaNmvYqKSMAbr4nHvrAzANREWVv651KDwe8hzFxReXjre2jCoRW8y6R5qQQBippGZDihakrAtBrJ62zBKLB5V",
  "key7": "R3zWNbm5EWp7X2iVHmBjtKUhvhcgaSeoPU94xvKgFTRdB7ZpoRR4aLnrwN4crJCAM584BaiUgzxw3HLbbReumXr",
  "key8": "5EDcWwyoAFXjbnw3tXeBCUcfTtYqjJ5rC9JcjT5bCFBdE3Lda7Vu4tM9Cc4x6Q9LeYCKrG72KQTa7MpWdX9M8hfN",
  "key9": "54R65puf4gNuEsrhS1c3ukgeSABJfrLUMFNsvf7uRdC6H6JwoSxCK8APM6Cvj9hGtkfJ23EdTgFSrRRihJDC2oxf",
  "key10": "znvY5R2BeJNTAPFGEcggVXaEbzHDrsBzQ8YdTV5aiXENjUZPoDG6i7G8Sqkt1Pbs5m2vZA8JCCkUJJVqpWHpDWs",
  "key11": "3avFBDT5ezPBJLCCofyUWa1EGqRoj4Vk3u4yMbuB1P2D4WtnbrjWU9v2UpHkqELK33DNRk7tiWHQ2MLC3ER4cbHZ",
  "key12": "dWmyVt363fHzGo5nf4tk3fzeS85v4EqbtsqMNvnNdEHp6VVYWwLw6CQ4KnkacYBSUg2Q4iTwsKZJi7ee4ipJcXP",
  "key13": "5bb2yYDtwX44YgeCexjrsMrXe5MALwuZDGkAVd2SXBy6cfdDLFESJnUoNvgLKAUDGDMnxQcDuTPnPCdgwHfuQPCF",
  "key14": "5GF7UQpdjiB2cpGSDw8RMXhAU2twh14r4Xjv2DQCd2MC5nik5iXjxTiSSwz3CGmDmReke7jdZC5bmBdjNor61WaF",
  "key15": "4PMeA5nwa82dRMkvK4yuSgri2Uy87XtjwurEystLDaapt7Uso72WyLFKJD94yd3mHkLYANdJNSDt5CUDRdgdKvsa",
  "key16": "5wVH83rdFt4NAKBX5Y4jZk4W5uAfoL7Hvoa8HVEcpkk3e6FjTXTSiTAjGVgcSvg8myi7HKoxEFhrQRACVfRova3Z",
  "key17": "5H34hy7NJuFVwJfGRTzKGrWJrXhgkZPEn1sXowGZHX7gzmtMF8AfwEVMitmETP7qDadKbiF8hArXwuhS9DdtyGdM",
  "key18": "54XSzrGYErYGx145Uxsh1F8SbjHyxBq9pnjmYzbu29YTRs3TKod9eKbEwBXfidKbPJxMSMyLSSBikdD9esjw3m8y",
  "key19": "h4hjpSykbtXB91GXkh3meBUxaqEAEkxVKrM1qPnWTGLsvB2J1Pq1sdiqHLLS3HSb78y24CFZZ7V7HfEXc5dsSvW",
  "key20": "2mHwSPc1nynPjvhiNyVS6g3QZjX9fbDVykjfmJwXaDrdQoLLE7HtJiSe2ZvJdytfSSZ4xkyoC6dDZgcra2ggncE9",
  "key21": "bZdTx1EYAMzKueSVoa7qvyVjiSgUnXhxiusYqUUEVA4yWiHUYD5dNvysshySWf4uEGSKy76uvqb8dMEk8Ce3Whk",
  "key22": "FrMV9sRBFMukuSocNucvLTYUHGftmqGksR8mAvWyFfa7NZnFiikAJqMZFzpRRSZxXdPhDiUPBaCsrYg9Ygp8YJE",
  "key23": "45THzaXi7XEeRvHoZDsA2Gdu4fddQtF8ZxerGKTkYWGoDTWR5V6HVVPnrTkH33SjwSv6RHvbY4UqDMCiWHbNUjvr",
  "key24": "3TffFdZ8fgJCwFGMTpx4GVKmeRoxiaYhQMU53Y8Rtkcv4LQ4asxorBLBXGycLaR3aMZigv46b3QZiQWhQgY97Ner",
  "key25": "DBi8cMdwcoeh5U6e7iEauddSmHiDJntx5UGrnsYYBQFEqKLdJnK4oSNiNXx43aseJGGyjn7eYmLkopwVQmx24qU",
  "key26": "3qgpa4DfZzb3Q5wyrUtb3kbBkvopi3QexxN8uvL5c4KD2AyJ71sa4foU7b22itDs1XRssfvftWiLMVb8EPvzXFu1",
  "key27": "3rwWp4mNPkoxsZKwoUWpUx3PVqAPUZVrVNdR1LJor5VrB8JMvabJYDjNAuEM88cxtFD8gG1Dr8dgzDkBdo1gCR2B",
  "key28": "CNKPQbPReG8NynQ6JjBQczo5zEsJtRNPXezCa4nAeVd2ZmwHJqGVzhXJjfthWQGVAhXJ14UjFV7wzc4hBFBQPyz",
  "key29": "5JD56mL62wqUJ5RfzfcraEK6fkSrMi8nwCWvy39f9aw5adBGshRiDxrV9WB524ttmuEKxZmaedjKVURcG4HNe68q",
  "key30": "5E9S6aeRkSsQK8FXWeEnASfqdTaPNfxCBGPJ1xoFC9NEkRZ39SWtVufEi7KTcjRbfEd4nyEwRvhUmUuXn8Vtr7pQ",
  "key31": "4isVXbc1RQpLm1gCp5h2nTc292WbLkpM1VHfXYqAYntqqvVKrwmmhBhzHSven61qWtCvQAjjMcfLWcs54mBbCvW3",
  "key32": "2UHwbjsgoT4Lr3M9XHeWSPJfFSFGsyxFhd6Ke299yPE1jfWgqJ8sPWiZP2nZnJKZZLWZhuKXFnNFtd2SMhZ2MsB1",
  "key33": "3r4bP2mhfXe2AsHwU8VYxhz3PZ7Nut8en2U8rZsKjjatitGG6YjWBSELs7R5kVpN25XZZS568XiK9aUY8WF2gsnt",
  "key34": "3XtM1qmvtUEWJYRxmaPms4qKXPHpRckyY9P7kxAKghGTeTTnHVWHBzRjQnh8b4mV76oec3k5s5gJNkpNhfK4jP1d",
  "key35": "99eHfNjHtXzzAX4CRwagQiEzZhNpQGa7Ynzpnu8sU9yXUvr4aENYmdhgwsxrGdjvmsG4tE9DzXAHFRLSL8m3AN7",
  "key36": "2Mq18W3y5gHcVrpKN8UCehxEAB7J9QVmTHLUUFJ5mwtUbhVc5wrDQT3FRDAuC6R979BBfef7EXmPanaNKiNdP4T1",
  "key37": "5X5QXWYtFAYzeDZLBNsxNeEaQNaFNmwAdcwj4NAM16hiyzv2pZDCfodNJ7aPdHkg9GjLtd92UutgeapKoBWcP2TL",
  "key38": "5PCAMCbXuZsZEVG1BKJRKLW1B473yi6yXpFY8khKG139m4zau44P38DLZ8T6H9UTnrJrqNaqtPfn2qrxbLfLxKmb",
  "key39": "28nAd8WcqoRZcC7xeedUPs7q51FexBkM8cq9B3hRwTBSKsvPxSyNh2AxnPKDjKjubrKEmffxyCMHwG1H876F3PqU",
  "key40": "4guLz3ivKbUhP9ybvQHWE4ThjZNJNT9cFmVBXHprBp2PU3SiPqeRMukASwkcjUWTLEe86CM9VVQTpb41djYGqxsY",
  "key41": "2WeDAAtpPf4B1rpahEHbyQFtDpTcYq27aCXMiKiiRzUzrTvhpMdrfcwpzHzUCkGfrM6kjdH2TEWxvFXeUfPNuEuc",
  "key42": "2byinNH2fEgh3gu7QRcyRQYHy6j3SU33Vk4Wq921jc1qh5VU8V7bHxo1dk1rMiKSvxjaMKfZhPW4jvRo4RV62Tmg",
  "key43": "3PMi5d4famgCUzWZcmc6ubvFc6noCEDjLS2A1ZkTbEF1SaM5J4Q49sszBHX1AQ6HMmoeeE9q3HcWGQEwuKg3zzKn",
  "key44": "JNR2tqySkjv9TvKAMpArNYAMjhEoXNHF7EHNGhEKJKZigNXPkffc83TnpAcg5i9VctPzHttxnFh6d9zDJCCRETh",
  "key45": "LuM9ftDibFL2Z6kPJaqJ42pFRNn3PpgQPEj78sxVpAUkBwSidGhEPPscvEjbZzzGsZyCCzdpWTGyTvDNe3Xi4on"
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
