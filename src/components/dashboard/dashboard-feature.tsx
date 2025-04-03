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
    "3m2T4UdU3eqETwZRgNrYhEk5W1TdNZTfjukpeLQMVdEUHyRpfeLZFJBKmgDagheq8tea7vYBsHwJcXuv3MKkfEwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aU4aDMowqtu6Jk9uoNNao2rpf7HpkFdVg8H27jzTwjbxCQMHdCf3eJymNdeJ1aCodwxMNqEfzWz51inFSe1dx2B",
  "key1": "2m8aTrmjXxv7F34vHP9DQr8V1BxQ61jBWzzBpEGguWa3VLtoed4tQdHMPDivEZsgQKqk8CiSqhkYJSZEh8ZNehg9",
  "key2": "5F5A85GMdj7eaBb6bgiBt2NmTpBomTZZK5VWTVdtAsW5S9jhDVzLFGnt39WQmZrXWpT2fJGtvUrCKzsV3YeV5EPy",
  "key3": "5BNLpzpTo33wGRFmDsYCraKQrpPaSRwiuMhZCuSrDXwCQvn1McfbohNKZAuAjdMYhPfekLGuBsbwvRiv7V2Yc92a",
  "key4": "4JbxyF2otd4QbPK1j3SoxJzS6vW4HWM2fp2GN7SqhZY79MWSokZSsas4aV9sAepxGfC421EhwW9trYcmtueLd7vt",
  "key5": "rXUsmHKzCkigh6f1fcaqKV6pp3wfaKCJ79AN75DS1tvup1pZj34zs3eNoatN5cuadXHrzqP92Zmdoq5WX3ptQQN",
  "key6": "4CvLkyeV6MoMfUqFwZUk8KV9g6nT1Zt8HaRETQJhDHNrzB9Y4h6VR5yZSdvgNCgYNUSzWxoGfGL9twTAuNsftuQf",
  "key7": "5tXiMTRTVyEzaKW1FHq7jFPnu8PRKtrVVXajxytxAgjXR1C6Vxg9Q5gX5FdAjWnbaLGES4TzSdAv5SYW7wji27AN",
  "key8": "39mU3nFXeoZ6V2o6dSNPbzAwKZFGMsT1baRGXTPQCzz3oAQfVnTQwELN2ubXpJqKTru6VRjM8NgnLL2U8GdNjpny",
  "key9": "3eUj2gcbRKSh7EoVZNkzwZnstRu4ixn9KrMFYq6JDS5XBT737snZN8hJspUUPT2LpMAjDFRhL9tUmoD9YPeoaaGr",
  "key10": "5HkwYtiCj5u532pn9hXDBWZxhuirPYAd2FA384YbTg584RLAF1HngrGENjc75ziCYLREqNRerwvWiEqNxd9GaJQV",
  "key11": "nhLfevFRTEjDETDfS7PtNYsJU4dz1QFs9f8uv7eMe8SwdHnHPeKNKRSGbNLxLpCNW12s4ab1L7e9auGG6wPNZGK",
  "key12": "2ti3mEGkKTA73DQ23s6nTmFVeGQ2AsfgFtpXGkiTTy5qsZMu7m3wGqNKbiyc1JwGDsCUkkcfiAca8nrhzYP3SX9P",
  "key13": "4b9mGgDxikK3mqr9mKHdRoW7ZWft1rG2hLs5tzKRh6sn5GBpmq3K55NVhE7wWmmFGaa79kENVvPUHTQDJggH3cZT",
  "key14": "3cW8u8qCsnRoGgkhz9KGtb3bmoExq5ChXnp3yKJKVJTxJa7QK4eoC5cb432WwJogtt5Pk7mpbKXsH6dpLmA3cmzH",
  "key15": "5XAAaonyAchnwrtN43T4gXHvmr1quaXyw67ukWZg4jjoGzURCBKs1MUYwKVuZaYEVzBmzjVDM6qEzDmYMcEjx9VE",
  "key16": "5E1D2hAGzgmgw6PejtPDwdz2QbNMEAEBDewh8icVyYpmjgyLWos2ACBPdVrwLr7Gn7fQh9ps8imyWZh6EeXGz6E2",
  "key17": "4nFhzmoZ6LLmHSRgFBo2MdAXmEHq7iCP9FphK7hPJyxRZvzQUW7nuGiCQC2RdrseHwKy72utStG9ZcTCgMTWzzfq",
  "key18": "4ZKdiNhb7UjLMpRcC7519CocvD5ewHXKjc9MtMwCTmCbD2cgJybX8oeCHF5SZBh56NQArpQoj2F5rASd2cLMKqD8",
  "key19": "527R6YrVXDw2bCA2iMUMe2D1gzqdjoH5vwGicG7yCPNQwqeGzemgfKLVgpyACv3MoQ7KL5yV9YzzenngDBrXMHP",
  "key20": "2CygWY3vuhwGBUfCCkBgPKpgK8rBZ8jEPuSXXW3CSwxh1wBmTHsgs9q3qAFvTBEgT6owAaXot49wF6n6nS8afXo1",
  "key21": "3gVjQjzsvhLb8DoCRpiUkyoxw8nw2w832ES2XLrieQ6ETHVMc9w2DvatzrQMjjaButALtYFWrxAcgbkCoDoCjXFW",
  "key22": "2a7NAMTNKYoeah56zw99NugGPf46je2HYaRyedvAbPwUV6tz6YzBrxSNE6UPki7wf797iCRRxxCcKHhrMsTQnEnq",
  "key23": "3HWNKSjhmB8n72Bwmq9gxP8GGG5QrEMywLJV6yVf5UQAA2gQrJL2GE5WnXkotGGbusRN6qDQs3sKdxmTrqHUCGee",
  "key24": "5ybYvtLfo3rVvYrjnutraLKpNhCJRWyAAagjR1rpRJr5H4MiJH6BwAbsHqZEVDvFdB1s6oVjtzC5uTqRuf6VFSV5",
  "key25": "3vd2QLHqZApgNTuT59z2CHTyVRWEkMVveLTvwtqxGUN8K7wMqPToiL9qL42hUXTQbdKakraQR3ftc7cEhjxU1jM6",
  "key26": "2K3HaRFKDpLErnyfriembyCyhSJi1q2mS8sLEC6MjRe1PrakfkCepLN9mj2w742SFpQmaL1JvZpZfvAxLaxEh8gQ",
  "key27": "36KHwWUDyibTdmCa2FRMSA4d2mNU56LmoBFYiXCHuraTSTH5ccE169QQAbBt1zL2Emnje3iySmCwG3ukie2Ntz1o",
  "key28": "5St8JrZ7FZZw7mXoRk4ZT6vNKJFj9yh99LA1PqRx7Q9ZtmmjaE53wBzZqM77bP3DHLFV8MHQQEgDaq6bmoHZbAEr",
  "key29": "2AuEY1ShEDFPNqSMg9mZbSpepwX1dp2hr1je7Y7wocze4kKaADNao4WiYqtDU1AkMo7oYHApBBbca6CnxsdTg6o7",
  "key30": "2NWGKj8BpSansY7S5Gh3NwSn2zMJcLYFKZktARaPdcy7kGDpaTMpfK8BGq75RSUrLx8cSnKvKNTB6WqvoXKCyF3a",
  "key31": "3kQHb34njDJqYeiVsDJyXVCvrxs9ANaUyMUMMSB4nBM7Zt4RmoteNanETF21RRkY5Jd6ZzedPaTMdyYn9ooysA2u",
  "key32": "5RYYyqxyBhtJaEkbDsHiY8xSi26VQ92dHUor489no5Dv12ZppCPxuJfrc9LvHEVTSM76pcaQtAbYCsCFi2vGhNLR",
  "key33": "vmBeZKRiYd18ZAGMT9DBnjBKT8oz3NazLadMcrwPN21wMjyYQPwxY7zgMFcwDYT9NZkDXFFYq9X63A6KPihWZM6",
  "key34": "5kbkD5HTWLn6ez33Q9XQhSXFg48MFJMLzf8hJHM9CqRNBHbu3zdGjGFa8R8F5xz3wUGNkmoyVXS3BWBR53kQpBRD",
  "key35": "3euFUbztbt74frR6aT1VQhh7oVMDawrX783Zk2v8HJEGiUYTRoJA95aVXKdtWe5z6jT8CWHHJdL3p3aHSRzWDjXk",
  "key36": "2thtvXGCgPT66naP22nvYgfyjrDQhifkxVCZpFYQJigCx7NzA7FRSotyS7CyYuFHTQJ4Hnxzo44gB9ddhbnJFD1a",
  "key37": "3SKe9Sbg2vcNRwhtG7hG5RfJdndsqGiLM4FNRAsmXYdPFBeNPxs8WVKgEK4bpFkRyFzvDF5fqHy8xZpe8fUbriwx",
  "key38": "551sLz3a6DdHDJcQRKWiAQrfzCrcoyViRqqyBwEPBpdisAeovcdAtbpwkfCLnESb6jxFheGvLSt8bqUkfYCJUV3j",
  "key39": "j4uDMW3U8G4jAremRHnKMmxAQX9fyD7ogo2KDKc7jj1AnJf7SwiLwafWKxUT2PskQLepbPLZP7hTeQqczMLVX1Y",
  "key40": "5deu4zdLvewtXiC4Q4oCdQvXUUAWx893A9miHngvLP7QyJrNHQSBJbu8omhq7qu2qGvG9y36dokHSxBkzJkbNim3",
  "key41": "5bED6cJ1LZrGQuoYqo8frgDvAskDLj9W91EZyf8azab9Mpoz1G4GixtwD7kXh8TqS2Uf9TCxKguJBAFBHGuUy2Ah",
  "key42": "2sZc4PZgQVSXCvx7gDh7J56LjMKTQSDvhtDarnhpfTyst12SGqYCVwbs6dnYsRZbSCDkq1ahdojzvqXUw7ZzhdYe",
  "key43": "6soYVYpAfrsNf4iH2LPHkiFRJbUTYjHV4ncbEiHeHqagoEr9pyzNxWAncMwe28hd9yk9DwQPwrv1UgdMmuC4Tkh",
  "key44": "7Sb2CT7jZi4pGh6kifV2oWzJuxz6WHPbmP4jMdn87CQUSYnsacx6G6MVU7ZzM9LzXDSf8c86WcvsmNgFcue4CBZ",
  "key45": "3MLygrX5hg7ARJYvK6M1ZRXVSQv6xPp2WokwQzWVT7zszH4G1VPcd9sUfRyiGSo7oJqvQuKzQhrjFDEF5aUNjWm7",
  "key46": "3NpMbySTqJCnK7GxmN3zUK6vJ5h1Vbfaai9hbAQFYQ93DGAZ5MX6VUgcZsbzRvyGhofjc33R2crfaxwtkavUbnH",
  "key47": "4GzmoUTNJvpxtQK83UDoLRzf5GTEgHCJ1LAAB3kcBzMNSrUtg3PTj6kXU8kPUn24QfBHGDrHskBKfsgD9rHYknHW"
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
