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
    "4P2gfDTgwJcjBSf88k8wzzP6pZScznwoxrSwCPx3vf92DGqHdZhe1YRqPHYE6xUXJ89YHf7TqpH3KbG9kgKZatuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YV7nXceWgJXDPmoWYXX3hTGCd2eVxSCAFhYry76MtHp9LNzSkq6tDguo253kcgPXvGh1UqmGwppSksbpYf273C7",
  "key1": "5idRfYwmrUPSP77ikHfQX6rFKsrN2QwaDbPCG6SJTtQYgHtyajsJkkyUR5nzCtz6v8u8mw15y9sowNrjoXC28Fci",
  "key2": "2ewDWkMYqd9Y8GjovjShPiyHc7iF2mK3qsPVkZTegjWKVCKjGkUkzxw44RmqaVrHdvoWBQZA2MEsicA9TJ8GbRYz",
  "key3": "3TV8fTYA66f1TXtTYDdcJKEYZEvr2AqvsBGqK6P62qBR1EyDnat4ATb5oastPeWvimXy6jejwUC9kRhBPSaXoEgh",
  "key4": "AaohR7QABCM87r86eSRz2bi2hwTn7wSoLDMHAqphbDQRpDZ97Eb23Mb1Sd22oZyVsAdYWKjwoUFjTrrMaZyGMGy",
  "key5": "s7dejm6JZt5ZT3jV6Nnh9kRayDyEN6o8umtomr6iuauJwkzvSZ5p3NrLgeP2T8PLXqodfPQkHNQJzrC6p4zkqu5",
  "key6": "4oDKoL4vrEt1tkzQo9PY4nJLTcR7BUGEN6hvwjdHadqKo6A6pTR5AbZE4ejzzeFo6QrfDGL8bVirUXwRM3jxYzUU",
  "key7": "5wWatHBa2UBPMNPtTiDX9gYMLxYcmDZBsnFVDL6CiY3DDN8HgKJNjCn9Lqs8ebZXChVTa1qrVzqLqxvE95TZQ2M5",
  "key8": "2UHbYQjUzuNGKm8AseJHb9Gt7864NBS3GQGHTu7MQAzyHEe7AyuaHrfNhH5h67QmmqtaM4oeuxiQ1oTccsGECXNz",
  "key9": "3oQ2jR84hRMt1ofVykA6EByQwUT7sKsu9cBEAyzeMzQogTpin8utBDDp9DNh3cZWS1BseSQ86fYiVG2pjJzj4XGX",
  "key10": "54MvAdtSYJfLUxuNaBGADTcGbD1UN8jHf3ReAN663bbxPF6XQ5BC4XwHS8bqT25yaFvgBnBV12Thsi6GHT2jiZC3",
  "key11": "3L7usxNT3XkxFoPvy2srVyS4ijP7wnKPGNaLfSQLuupVN7ocvmHbuZcGfzEWcRt1Vc6PRMFr3PuDfZzADZrqUVMy",
  "key12": "pUxveQgUsJvhcbcXY3vtM3sjPKE7puTijhVAQ1zYnDZczHyTgLmTTbK4Necduu5AizBSZNxViGcnHQk68VyE5ZS",
  "key13": "qCUcNCYqJstTVNqhYynMvXFRVUnbdEVHwPY1Ch3S1g8Gox6yxD72kkAenxy7WBkVkrfbqc4q9iJ3DYjRNxq2xQA",
  "key14": "XC3fsbFYQXxLxEXqFY14ZSRjxnCsmUqhUpypfzQqkXQMZqydHiVPvUbEJib4MBXW5afniDHvqkgHT2WXTvyczyq",
  "key15": "3H77pwspSEQMrUcm3X1mkaHJkfHAUYJ8RUMHhMwVRq8pMSUFzkrzLCkVDC2wuFiDwenaRgGq6o8t9AUwu1tLm3q1",
  "key16": "3XcfHxy6uTARADEnAAzauL2P4vK7kYkafxkGsB6iYazHnM6pfCnCibekzQUiz5psURpMD17PjMYs3M3xukY8ViQp",
  "key17": "gvQSg2vyT5JVA38KAjQeQmY8CkGaxdSt1gQkarKF7h2DE78GU54LUb9R1RNLK327MaTJVEqjShVtRwjNQKM2XZo",
  "key18": "4FFNnvQm366ZdPLrAnkxJfTncxW8MdK9TWZhsiZPzqfLMz7i88tpMCd3asnAo3fP3ZpUsXwjtZ9PV8ff743yjgwF",
  "key19": "5TjpVuuWzHTQKkrESQ2YsLGyCquca52aYEdcH3Yv81sEn1ZA3x3YhaWY3T8uSV9vwKGQDiM6bTP6fKkmMpo7watF",
  "key20": "3GGXXW9RcfvLseUeCgfAQSLfRg2VJenQgYyHQLNGuZJEhTV2Cm9ZsuUkgNYCsuwDp4JzgF5mgmZeMTE2x8m48Dh2",
  "key21": "4J8o2M61DmKsYxpu4NJsSfL8yXANJzXJAoRWrHNoVzHSbGXcW9qYy29dPeVzQDx3dyWknJDbge3bW3zQQF4BPsiB",
  "key22": "tXa71aZnV544msoqbvHpfiZhkQqTpQpvuDVEmv4NWgrKVKmCdfmDncwTkj6aDrrRcsTy2tYdgXLqwcFz6j52EEm",
  "key23": "2JSQUPAk7JFF2R9YHrLx1RTz1ndf4gcnG2Tgv3hr7TpAFhAMMwGpTJyzob83dM7vXQNzHLBYpBzbgorWti8n3SAE",
  "key24": "5E1TgURmdBurm69iWjEuBJaxn9vgHLqhN92NEYGFTiMWSwBkDYnXiB3hUvLyug99Mxp9Az4yyBKnd3gfgohwYWK5",
  "key25": "5YGiSNpmh9DQVVaQBgqeNYFtorX3XJA5cfzYpQ5TWXb66XdTTnoB9B2JYB9KEbjzCCj3nq95Vr7h1hDVeKeaUatm",
  "key26": "2tM7Sr42KBj1zCP76LXZPrFz5p4KtRVmtsvRXLMgd2vgfHamA6vqf3GSWxBGfYfYHoAW6YwpivBydUnNAxYC1DPH",
  "key27": "24pAugQSiV8UQHqs6HoJTQybwLKWXcRgRjkcVWsoBFez8fFFmAQ7VqezCCS8iTpU743dQo8gZMmnFGaRNAtVutJu",
  "key28": "4U9dGj6tYo1qgcdhsggbqgCyVuv3mFART1AQjat2VZ4aegjBR4R567rxBsvbfBobAGQWSrVUeeYPKB1KrWqFxbry",
  "key29": "m8yri8kw3mq5UyVASTqRyA4gFjogoEtaQF459iZQnDMRem9FvptQ827owKEtHowCwwTxvHCsRAebdkyNbYQGjAM",
  "key30": "vt9mPyFFpyax4HQkbYd5UX3hBj4jMQxxyYm3obXeGoWzVa6NFPAaz8iSW8XUMGWE3488JJfDArsPZ6Jw4vxTqde",
  "key31": "2ArVX7J952nUB4KykrT1D7uTc8y2kweK6quGuWq9QQCG3TnqwcK5yHbfn1dGccnjo7iw8qXHZLauaUhoR823QZiD",
  "key32": "UCRUX7WoLW4TE6AemQWf6s3M9otBB3NGsE6qvUYWyTVBGrrykibv9f1WzBfMDsQQxukNmCtiRoHM7KNgA65J6pV",
  "key33": "5Eb18GpZDCcVSrGjmcy7P11LE8SJrnoRyRsJsrdENziNy2sKcUeUh5wZkbU7miPSC4wGKa5msSPX6p4nf2rJoVE6",
  "key34": "5xyK5AFdJdVMW1DPJ5s1DyzJMC4SrAK5B63hvqb5pdvHgjmJahr6CSsgpxQzzdJdinz17UZiduxDA4zCw9i329W5",
  "key35": "5L6ZmETr3YVU5ogtWjph8BByJj9RCmDxVzn9CGRdjERAn2jbcVLEHRqTnVY3dn9r5FtiEpgAAbsPh1Mqw3oFhYAH",
  "key36": "26KAHDA1gZFAewr1YRUAHLYgmCcBp8TCU3Yaum6Pv4cMqDNSnaaS1BeSiVhqpLyYjBKsxtXNM4wrxM1qRyU7VuvR",
  "key37": "55q7vyvGdEfiobkh2eVCgsjpUeCjvCRrYrSR5suFPB1hicS3sFaXQKw4bThzVbXSNYg7uF4V3XG3pGv9LLUVWC58",
  "key38": "webU6hBMdu3VZ3pAxaRfhks4DJAPex8tqB88ZZ8N2ekWhsFFMhWF7PMHwJFuKoJB7LGsMLTh5XcrkvFTacWMWpE",
  "key39": "35rhZvod3fTWq1H6JXcfPwJXPoA7eNS98kv53wprxcn2VtdvxmP6q3x2cRAjS6wskeSFQUvK7nKp2RgqXffpvhqs",
  "key40": "34S76D1reMxy5rfRu93CJyEiZqKqFGugRQgm84LR4fRQWrp2JcTRGoEuVL7sXCvzs3qDgZEBPgbM7EXZJutPwnci",
  "key41": "zcqB4zXtdbGkg9Ue94TYExRWv468f3GsFt3HbPeauJbpfoqSjPqYEvE2WReahPHbnnqiD1xzb5xYcwNrnGjhykD",
  "key42": "2Bsc168Hbq5bEoNfHkYbVBHBgkhLrpUmBaTzNXM1F3WB2fyAAGUzWgQTGdjcjbbnXwwrbEDG9nw5pGZAMmowCaU6",
  "key43": "ritv2i99o14nQ368KsztkjGiRXG8b4uy7ToxuGKdymHoD8varWCgZbEupt3V49S88Q3M9dyQhsUNsfAg1JV6Njh",
  "key44": "389z6ZjpSwx5YYuhfoTQCF37SSzbnM2RXkgPtpvf9E9nGk8nSjvcBK55pT55wm6bwonXBWNikFrhaEz2pZSC9Frk"
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
