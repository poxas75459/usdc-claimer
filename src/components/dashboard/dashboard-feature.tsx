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
    "2cmYxjQkeryxDUfTcEiTM9WxgnL98hmr7r4azFLb47DHTmaFe3xdeFHNyndCxpgbf8sFLe9rsytVKpS1ZmRCH9WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37waVRaUNtAMERZQAkyz2xUCHjY7roPg9V5DLWZPHhE2VyRKtzAMsV3DuozxwGrB4S5bijjVPAv51GiFoayoRTAh",
  "key1": "3qFU4bytNWF9CxcX5rKRTHJbWWsRQDVt6vvnm2XYUqJ1uXSe8gSCHxz1gvWzLk23doHDTZdQvYcxgoUJyuiHZfDm",
  "key2": "y9JLF3Hn4mHQLuQCYfNyTuVp5qz4iEv5LAYPg83ojaafWZuujBZDBLK7aHCLpnnXKw6d11opwY6D6TmhYPHyb8Q",
  "key3": "3V8ma3DvZfUWo3FNXCMas4SRUUqC8ZFYLtvmLhVEGrPvxWM4kfFcRMfMU16oTne6jQPwLRwUGw8pLK56fwSKFwxg",
  "key4": "4ypDALEtHvwV1acEVhDyhmQ7MhqGdg7eaGLv1aFhZgJnWMFcZqVN5RZmhbsdL6A7g9Fs9ZSo8TVLcMzWsftZFgTV",
  "key5": "5JihiGixMv9UYeo2M5gSc2V5fhLqaCAFjcFcyHAMAwh2BEFXHmXaSJ6zeWoPhuyq1eASZq4tHBFduXt4kFTLCebh",
  "key6": "9tSYonrAiNLEZdrC7ppKzkdAWKCuGPGJWtiJLw55so8sTUxTCm5VK78FrD1GeKys1aRcY787BwsyJKeqDJRUrij",
  "key7": "5DAVc7JdgvuHMKKWMQNutJtcQfvCu6nSeMk7EFN4mHvenmCN4WxBtjeKJp1ju9BA3FWX4zDRHnEKZ4G1Nryc8mAA",
  "key8": "3yJgVjWmjhbFBhuL1HQrd7cSdb1rqDcFLvGh443Xzd9QJz4aqMDRSCQGBpqBZ3rwfLaMXL2zSnZSwaaqVHpkvPZA",
  "key9": "2z9wpMnUL7znDVwVunctCKjPycTmb43TPEuLAQpJvPJxijmXHvaRutbjXGx8pbsqnyPesPsqCzD9XurjkaZL4Czf",
  "key10": "Fz6YxRtoPoHabqT9ux9m4bvXgtgwYsXWz2QWxowG6SH8bgcjAxUsepQtnFVHUHo4Pt6WqN9yD9b7gm2iWSQDaLo",
  "key11": "Qujk3dNDpD1EbBGfDkwPhAWgqqsDeSdrqzWUmA8a2WErmZJLz95MMrWUL94AcXjaqaGQAf2Ch571cftaNs7W88v",
  "key12": "54PV2kgH3qMhY599R4RkFKBmhpmvy43AQbqMWXwc3ijtGVUS9shnjrwwNySPREBqfW5tpCnH9A7fuAYiR1aYUUge",
  "key13": "2aXe1hUYhLKhCZkvnhTBAvJvzvvr4zhiLJFWFrtzK5dukUXCAjRYWE64ZnkYzYasMCSsZKJ97GxyetSDEF3mnXyN",
  "key14": "63jDNfC7g3dPCtJjHD1c5Szmy9aAK2uaVRtxFTVQewWWagb4bUUHaKnQfuVn8cKaf1x6f69RpmZec8ban41kz9Np",
  "key15": "3keEwdfqaFZh1bpPVHJruibjAHATAvDCybBAkGRfw4E6g71NH2UhCCstis4bG4TNX1hus8i7jn7gm81L3WWu3KGh",
  "key16": "5mKKgPXsdnkMaPtoiKV1JoCaaHcY3FLxBZi7T2mXescajXxoKPLQrCwaxkN7foyhEdHPPbaou3Pb1h4TuFfa3Mbh",
  "key17": "2BAnNyPbdZyXwPPHf2afCCdR1cShcbaqH8hU9Rp4uq67ixABB11gUfaaXCxJZivb3kcwZZVmbT8xMgjg7rtnhKD9",
  "key18": "5b8JUCab1Hj6G6c5fvXNCMCZZGBf2jg5UDQxRHkLFjw8aW89NYwqXzujRCaggE1u82yiVY9nJ8fkux1tMLFePhEo",
  "key19": "2eVHb6nRuhgbgvgCKqkhT1DyYpfU8wQPy5EWnuqVXCcXk7Y3T5dtDZA8yXPPC9vKAvcrNhTvXhbMJ4eYen4njdAJ",
  "key20": "3Adc1qLXqhaxwEZZ3x8QGvAjfnXxNTYSnQRMWdLb6WuuhhyoCMnJ759MTbA9WAfv8PU2Qzqhr6t13huyWBPK124U",
  "key21": "3sdPpb2Nf8pxcGD233v4xDiudndjC8jn43eefs3fDFfJqoBMggWGvhUv6oRKTJx4q53gZtnGJ5PMqf7yWtDW2uqw",
  "key22": "3aAo7n9u1qgDPxoDdmz5CAQCEEXQ4ntXdfwN7MVivUmsaWPSLgkAes4Fme45KpVst3iB34VMMK5GuHQo5ZbsDKJk",
  "key23": "E4KEvxPz1PjBdbMJvVf9qSAFKdEhVU5EdosWXo9VoPKo6eGUeWiVhBxv35rLmPYSnfJbrbtSWFof576GifxZ6wx",
  "key24": "5PetJ4TsFEdkLtK8F93rxqbbg9T5WSf259m43bEatLCSVfTRX53CQksSGcHKbSAAxjr7Hzntr1ppVDjFrbJQvnzR",
  "key25": "X7CfnDieEcN8fL4krRXqsiSzTRms4G1vCKQhQBH5CgdMzadYKgshsjkqsTPGbhQQZ9GSvqw6Hv7CHzbGaMM4Mjs",
  "key26": "51JJ4wfYRkfSNQXPRAqWFhrihamakvcjckRJ91dt5cE8F3m1UzTUHL9HBaAyq5KuruA1FHXVQ4AxTuTvrPmwyb9E",
  "key27": "2eQjtNJMJzixLw2AZKYRcZyvAepGVBZtJcSsyHCgHiziCUftZKzWSXMJcfycxKXCgNUWcUwZ3JJmn4QycrTe2F2m",
  "key28": "3aT92uCed6PkbVHEvvJzMUABP5WxM8hoCJE239rJrgRYvguHAV8rVLeU3rHuheSyfK6h6yiSVFW6rWwJn4C9yPfP",
  "key29": "5tjvhYkuXbA8XjseBrd3GABn8qM5tZLNxHVyZpZRkqHCmFAreBBDSWiCKnGhj3iayHN8EXs84WH4EHrDYH9UuEKK",
  "key30": "5WtPLwvbKZNZUkrTMCNSwfrMTQ4z9KjMWysK2bJWx5YdoQE4nMwPQYxfbV8KDDeueepStQUpL6EAT5w53nohfJhv",
  "key31": "5urVwr73ye6DXNuaptbtnYTe89bovGcpxRQCNN4mMZiCvTyPCXELPgj6umfZU75hZCPvAivRsquiZ9a8E5nuAQeV",
  "key32": "B6objPhNhcUtz1QE4rX4zkybs9BD71nCdRpx5kQ7RRLengSZirFbUNsKP73ZRecAor5RwHbFZiQezkDyx3xoqTM",
  "key33": "EjnHwoqngFeANTVMpTKvfuQY93y3iEL2q5jfR8esxwXxEVhgaWjKJDoxQKdq3YmfGcz286AwLJmkVSksYShR7kf",
  "key34": "2tXDFSKXGSHoEk5LSJf2qLAXT6rE9yz1m1vUdF6cR6N9pUzWVNYrHgvcdguFCFRNjFVxyoA9BbjzkgsZUSnNSGFN",
  "key35": "wndAK5NySWzyGKbpoucUn2Kq6k2JzryA8BvkgR4UqiYp5j6z58wdAjfk5KTGRXPSNdGJZhPQmd5FpyfpKdXjFM8",
  "key36": "2weL6hW4FgWQRujU4aHrERXtiuCVarrwpKKbzMg5iyP4qdcur6oY5sboK8BuW6UtkZMGMDhtPQ4zTu4VqMovib7n",
  "key37": "iS3WtTggjKqEuuL5cbWcVuhmyQj9eQWYUobDc6b1eUt9G8ELqRbC5JhZzLnGP8s2JSpXLigohhuFjKENoHDXTyN",
  "key38": "3tbi7Ymrsvq4MMcusN5o36uaRPf8YyRtC3tKPQHsdjE9QFXDuFiFgRExfD1ZHnxuXu8CU1bWFtCrdA922DKhocVv",
  "key39": "2uHws8edcc91GSXZXbuxgDqaPrxmpa8QETGnqJeoQL4VnWHjS4sNic99gYoww6gRM8ZVmTvmWqbSZaZa8meW6KKg",
  "key40": "4EuttRTqJNF9HXjDBgTiYaCWCjM97tfdx9TgCZww8kNftexnJ44or1UgRddgreTiFR1VQZhS1ARe6pvzRge2wR9d",
  "key41": "45zmNFJnHhDeVFupLhJdXHE1kpECamdbpFLQwvGne9ejAjB2mz5R4Qyc2keB4a4AWP7pZZfava8LGG46FFRW3nsd",
  "key42": "5egmUhS75qe92vzZnDeMqCBPyny5kcEkj8379nsF9Yp3ooBn6oJtwrhFCbENr3NNigjZhhd3YZ9mRUWKCL5m5MEs",
  "key43": "3pk89o5uLuZiBWSkgvZT5htSbteGz3nYprqAsBY8k8kXmfD5Maa4Wy9CWfw719azak9195sEXkKAAa1Fj2r8BsPw"
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
