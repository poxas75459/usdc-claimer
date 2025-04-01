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
    "5TBbuPSPzkm7CMTMxPDrCy2SHwUvEWEMjzbHMXXRGgonzAes1DxvCP45gbFRc9KpGDTXujk1ogVHnPpzA89E5uvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqUrmfDsnVDNxxPXWy2Ka9hX2WwA1TdM4mPrvZnFzXkjgQQSNNFokSqy7thdQpLPLhWoGK6gVJ1NFQsytaLjegq",
  "key1": "3aqNM3LnzqNb7QZGxgzSgRpWgimpCaUnn9qkLcfNMa9gJM1LNRBoBUbEW1ewES1wRxLXUVRNXAo8du2z85Jzquaw",
  "key2": "3vA3nRAHQQewopZubBdDM4uksbBBQFQ3z8qVGFkoK49KGVAK7quV4iwcaguHe7PwH9U4EJKiqZoSzZpEcWPgUaat",
  "key3": "BSRfe7eAehW9XxLoP5TkaJUphYxh3ycAJuaYXqvUREbZU8GghASmSGpkkNQKc9YAdJb26YuDkV7fuJGRzdjfSgS",
  "key4": "TzjibVWqYig253TdBunJ42ZUafRaXLh37MawBW1R3EU8TAos1T6XaRLWKr3M5U4yksJ494GLRKPS4bnt9zmbY3j",
  "key5": "uhM43WehD1bDcLsR7MCPgsBfJ72RJ99VJyKAQWPgpeftn7WX2eCAUNWJqNJVZ2s2RRbSfJsj6zUmCt3m5wKtkDa",
  "key6": "2eWt5Hu4kp55Miov92sRytsAocGZdncBPojTAkzup36geXBMTPAuaTLFuGX2xhD2yvSZ4modD74zCiTRYDKaapw3",
  "key7": "q9kBBKSN5pAjwnb5ZUrTRu3j815a6c7RsBz4voSBUv5sD7GWTvmjQJGUWe4G3ua4godXXFMvEQtX14yug4G91YJ",
  "key8": "5nwXhTUkL9UQvX3F1UqTXTq2YvqgzNFFMJZbYiL2oZEc74zApB7WsmCyL4ubYffcEiGybiyidmQY91QUdhth4gJh",
  "key9": "4XJc3jnMPj1yT6gcy5hG9z2gyYubxUNJqxBSicKiv4PVggbKJ7BQrje9WR7gWqbuRt6n77jokoW8AnP4GMPJk8Fe",
  "key10": "5GyZAH7TYeacKdnB5PebWKJPsJT8ds1wNuGqEPiw2foWyLtNQpDgjWs9K97UFTrfTuKDa2pWT7KYUJMGQjgwQtik",
  "key11": "5wREtLs7cXpMWNEPbtdh8EhLfen1e2FRRtffR7wty1TDtk4BDdhdgeLng4EgC7U246MHMF358bEXrGDHWpR6zbtU",
  "key12": "5ysdVEgEsaWNhfG5SjEpHeiEnwG2DpsxXA6qRFx5tSxQcbigP46pF3EbkyYtfgC8bVPkPfuUE5XFKFNA9WJ7BCFA",
  "key13": "5G1iwnAgk4yipJzkkqFB6Nzx7mCQ1TRPHzuBqMazGA7d3qfBe2ySUUdnbFjHzjdMZbeNgsxybWgQBZLrmcQgKPGF",
  "key14": "64NejHDuiAcLhhTKERMqNyQTWNEUBTobdL17JWDmMrFCHGE79EzGiPEFoyxtLxBScAZpvdwZeEPU8i7YrCK3bZVT",
  "key15": "3UjMgPA7AbqZnm7XUwMgh6zmbWtCjtZtjVqFTG6GHhJhDpokvrmr3HdkwffY73HbMchrizBy58Lg72uSTX4GMKuv",
  "key16": "zKTrvmsZCe8wLXarNN8M19oyZzaYmU2SWbBS3SvNLNjZaZtuhGYNmxrDVwu3a3fQi4C17KXYAHitNQDdBoC14HN",
  "key17": "2efKFmT97xBcBBYDCJZopLxSJD3tbN6Bixbc6XB3oLSJzr1DrU3h45KscLKbi49AyN8bcYRwChitgQAptFZiR1Qy",
  "key18": "4TFmbWa83CCY6XmvR8KDHRR4arSBH5ULwY7fEEsNeYq7CScP9hKHgZX1bMc7zDP2fgBR4w3csG5NDGXTtKGVjVPQ",
  "key19": "67dXFuyw5N8FaQR9HN8D8PE1tMXwBgx5PtG9jcdTbBGNifVcCrBxzWRJuBGgtTj2B7JcCDKeeibNRYmvqHDReqvD",
  "key20": "51b8bQ8foKxXMhwVu5htkgcVfWwQpTxGpmVzgvMeEqDdv7UktCZFnxzgJgsrwoKwmniCjXuQQb8oeABo2uPMN8hN",
  "key21": "8ZSREEcDFUhMuBe3jVEdndSN9qNxn1g3ag99wLceqRh4ccUHi9oUcuK1rDzmgEoBNjqLD8WyRg3SpnfbhZqVpp2",
  "key22": "35J214ZXRd4mpK3vbGYJstzyDpQX1nAPZVTtUBJfbwrf5KbtU55wfF4aTqDUwMkhchfGBPt49BLDiB97cqgiRQLo",
  "key23": "4T3wdAuCqptDvhoCQDzBQrkKKGLigYWqsFVJ5X4UzhpvdKNQu74HVBCSkscjr8iSgjA6b66FaABkcxVKqBL1t6Fn",
  "key24": "k7euadmDBPKqVhtoT1hJN6ftkLQorEYm33GUpZZ3z9Hsfc4zUoELn5pK1zALS1JoVcekCgj3DCDw21zwCgxdPnq",
  "key25": "9sAtWD774MHm27D6GWD1CfUspzkE2KP3a7iKLxG58RiUPH7tmkff5XAF9qCcMXPEdy5Tu62BWDwA9GDAarP2kor",
  "key26": "4cabPUkgEba6CWWpP1RyETwvzxi6PJGW15miaiaJBfMoMobtiucbFhjJS74nqfph1SdPVJK2yaKoMnghXSWUb2eX",
  "key27": "2Z7wEiBtTfeTyjr5ZX3jhPVWxkqtCYSFgNBi3VE5rwyXq5NmKHg7RL72kLiqmQLQzDvg6jRvFLHHTrCCsXqpxWr7",
  "key28": "5jCzatUBWAf2BmNyfyL4FE5J1yckgzYLXSxLm598nCpS9jwfA19RoWn1ZF24xfv18FEs57fTDiCd5C6VuexXot2N",
  "key29": "4LfLpBpeUsh8z2XwE96oy7ZNwJb2untyELrUH44oAkMBaaJuTxfSmJabKXjMWYoQZWizecAT8K8gM42VmcfTtyzz",
  "key30": "5b2ME3rtbYvx8A1tBuUSsq9UHcgtJdwNinjquo2zWs9hWAnod95kWr9RAFtn5ZdrJAE2tKbvADJ44yen7Dds8xMo",
  "key31": "4hKeUv82KfpcfNHWeZqZRx79FRsohYEEhjD2XNR1xmvD5q9ADJbYSqwAvwxWfxPmKnYxytV6ucWyY5g6AVZicfYk",
  "key32": "2vh1xzpChhQmpjBxTgvEcd3JUxpQWTZserKo5zfsDnEzF7F9AJMBvAua2uWFTHdy5cs4ovgiCzqXahJVbtB9yWtE",
  "key33": "5H2wg84dsaoKgKw6rArLE6qJXrP7wcDNcqm6i7MhxUmSSqSB3wd1mXXgSELse5j5Mj7oUjH8ni5gs7eagMxGScUz",
  "key34": "65aDd3JjhFYwtkJfT4Ut2Fg768eVkVBuWJcKkiDcF1zv9bGa5R4u9bYPpuFkLnXmedAXt2MsWQeM9iEhBZjN4Ze2",
  "key35": "HVxw8svmrB5J8MdESQwP8vEdq9oyfW4HdV6wkyRvvdLSxsHQqx17ZsifQ3UcMCPLURRskPgppDtBUweq8udQ8uD",
  "key36": "85s2Xpi9tzzWt1VFQfmiCpXi9yVa2M63eqyjoBPnGxhFVdV96mW28zqD1VmwtuZa6sNptGHh3jsn37Lr6P9R3D2",
  "key37": "4FfhwWEdQUhJgZKPJLrXiyDSQxnMPL1shuxvUemE4aJHXCt7DvXxmbD8NyyoXmP4emuf49LoTw6uP49kEHkqR77P",
  "key38": "2KZbewL8gZSN1dBtYSHrSjuvu1V91QxaoYjoUHaDdgkBRwq9r1fEDY74uta71iAeUxbK6soR1th2jH5cDoXas2sX",
  "key39": "c73K4VMSpRmyVUfk1rdHpwpZ7KagQsTaLgoxbWhB8N2zbnpk8AMU55JdZdUFLZzgPRkSAR7YJ4HSP9vy5njdymF",
  "key40": "4uovAqcuGvwBtdiGmEvC29sw43V8kApqqXc36nk9y4fpQpEDsoxk2Vf17REjhENMKwjp1EsBhGvWdFrwfw5Anqy4",
  "key41": "2JE9p2QnPuWnh8YxSZoFJm4ihJMQPzz1HK22M936NX1GgxCJ4ZshqmRg2vAU8XMTB2YwKzKW8Y3ZAoXdfspwxCxb",
  "key42": "4LPN4x5A7yj1XQbfT5N9Ve6gAKN1MuvwuNw1PhjpWcPA7waTXgG1ja7X6p35D4bmvUcwLZE5APP6gqb8o9vcSGKM",
  "key43": "R9ysAHiZ1HuVpiv7eJ7e5CLCjarVXLG9u2mYsjNq4mAgYEXa7MibS3bRUrtf5aSUsD3ZZRFdYJGCfs4P25sCpjp",
  "key44": "5ubBb6vs33gBkAo8NfEmaxidjdmzRSyeLtmGwTjsmYqngSbgVf9uqmkzeKkJWExYxFaXrcKqeA5dAesXwYT6RGiE",
  "key45": "5y6PLFfAdgZHwSMjD2sCtWQ3VhpiVeGharE6FeJcXh26YmZ1NKQgmNH53tpvsLFqGgbaPU3nUVkq1DSwjunjoGdh"
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
