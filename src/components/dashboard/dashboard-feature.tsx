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
    "2ErcoWF8EGZFN7noyVcHNxEgQBSNd7Bm7Au4pN9BnYCBT9Ho8pjpFydQJYoo5vYgGRAKGVdAYpd1SYbsmKTmfPdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVgEajrukqR1J13KnTmNh6qghqGr57AHs2aMfnR1CtT6xLuHqQgzBN7EQqGzYNwVe6VBiMWVZGZTJFa9TzqzzSv",
  "key1": "hLHKRABmfcPi1VcipHhvbKX6PsH5DrNXz3j1smbjBTxXDSQzGR8P68AoRgLJ4usrLpnU79jgy4BBzFEcUKoq8xG",
  "key2": "3QC3vyLK2FTbH93exGWYeBiTjj1j5Jx65hsC1VTxTVLZ9x6M9EBXV7Usyw5C6id1juzC8YTFs29LALFodpqh44zs",
  "key3": "Ui87tFXro2mN66AwJ7SVakVkj62mUARehEZrZa7e66aHPKvExSKJ2QsPQyWiXcFA45SjocdrLn745qBp4rdvLzA",
  "key4": "hTi4fqXSjqDkDbTVJjqGie26DUY2c7FcMQPQkYH7E86WhRDGC5k1kcyMNVKjSd6ccN1JEuyU1V2kxwANFz2nQxC",
  "key5": "5yKiLTu3eh2DmfbwnK3qUV6gzTERsxQBRtU35hMW3efghUMLCVrkfxsRr6bF63tAcCfHoao9KQCd5MLNQovBJktB",
  "key6": "3fWyigswYqrEXqJ3RnxvybgdVK8N9WZg6eRMHpHxXZaA74asvgdLxchmcr2dKNfVuGwP3jaMt8jH9Rwg5DoibgaF",
  "key7": "4EJEF8ECsqZ5KkqYYmYNiRDyWTse1iN9mWCHmDSSsy756RgjzF4cghybmQiNaKnyHtzGhZmMGYqs9nPyw758ga6z",
  "key8": "mj44vqnZyHn3TXg1aYbwvPD6oopJuaB5LtqeN12v5Bb5FNcKynM4Um7NZWBigz76uWJocZmF5Ei3Unk4WHYzfrv",
  "key9": "4qPPxNPjD6j5V6pyrCTvaA6LWhDR36VLC6Ja77yZ1u2p2vAabuBaaa8NTNLBsKdVJFHnBu91boGJg6SQAbrHuxCE",
  "key10": "5Szpqh6QYZ6XH9Xvwc4T88gY5jsN7miUVjZyaaJgxY3ekEHymBqBU8qCKJNaSZFZciPnYWBzn8cQMJQHwomKEs6v",
  "key11": "3H78XuDWBNjrD4LDd9SAosVHq7dv5WrnjZ8513sUd1RZxjmx81WAS9XyvxgzVHoqV7qgpkCQJR6briDTMLW4Z47N",
  "key12": "2a6v8waj6MJUmE4cEPZY2by7gftyoqpP2mD2Q7GZB2XrUkUpu7AbG9FMLQB8ueYo7uHwdC9Mm93jVuZiyFz5mKxD",
  "key13": "2A4EWDbChnJjkxJ5BoJJrVzwxtV6WhKnBeWkNbSk6NEuoKb4MV3szj5JNYGuZxGAWz4ZdaCLtdthJh6sRqJD9cF3",
  "key14": "57o67vm9brHygqvWkVPFNmraFhpny4umEX7vrcWhiL1uXcBM4saZnUjyPJHm1vVehbTiR3fL4A2VaEvWKW3CDfAZ",
  "key15": "RVp2dapfMpiyhWTfatjm5bNsbvkT1hJwBo1ga7ozTqwXHyoeBVKStno81p5UAXb9fZj4cMMne9YnVZKhRqrRpYY",
  "key16": "25XoHwuRGjaWytD7GvNmvDJdiRuYzWW9uzjCQDUcgLjseJGqgBLN79RCCue7SjQLCDL9ya5LQSBZiM1n411xiBtn",
  "key17": "28eC2BmuY5hqLnhzXVVvye1shHWRkK3D6pDXBpgSjYyHXw1oY37YD9xMGBUhNSPHPgqJfC5u4vEiwn1DfMj76wYY",
  "key18": "5J1P9gMevc38zDA4xZobmqFctKmd71uVgj7ynNUmDJSwru5bpo3HdUtC88yvgTDk9VsEEKRcLpCnaZVDGr13EavC",
  "key19": "57gaFa3MfPTg3saddVBx7q9LThHVwS4q7odSwyv6DQJM7DnZGy5rw2Rxc48GnoJ9iNs79JD4kxWk5BrqcbKUnf7u",
  "key20": "234Bceihi1qosymyF8ReXp5Q6QfJJfxfWkzrgyCf2iVQYmr57UJEYcBTNdboRM7NMaQoVLqcbGbuuR4NaM3qVVah",
  "key21": "4srHktiRrZoCdDTiaJ4eiuDzRoCbVaNCHUdqjpt8rPxbAcGQBPj7peQYScdb2UGR2WUB5tPFCha3MV4HD7njopHu",
  "key22": "3J8mJYcz6Sx1xwncANaTnqX7G7NYm7FZrEVAjitpCnCZVp265ChCakyUmtkEGVDj5L8sDdMxQWTGs7sptARCKhDy",
  "key23": "5TjikB1XHWhTNt3VeXvC2aXa9A9o5gTrrGRJBTPwgjrxuargeBTA4MaYVXv3GEiZEg6qhoXMjyN2aNh5ku2NKPyt",
  "key24": "EVPAqKFniVy2jM7d8SpZc5egrZxw2vmLB89iV1R76tpsEv9RDWSLoW4mNEjxEeQcLTP5QLG1kQ4LB2uwpU6yBDq",
  "key25": "45cuq8TVmxF7Gjf9nvoAMeznggJyxPckCNgEqasjqrxA8SaMRRf9JeUmkFqFhDWo3rEWQ32bTpGWKm4spvfwzXRs",
  "key26": "5ZqBXtNxNNiwuA8AhKC8ZvTNzGNM3ziQogyhHpFqCQLSCTAYJciMCLpJiS9PkwrgLJmDTaLQyK1VBM8CaLif6vEX",
  "key27": "4rrR9Xw3gkYjTxPxYJLqBkZ3iWCeLTzkSbHk9ckiEpAdzSAa994BYLShzH7v4wVtnXkPv8s2MA8pcWk57RTtRimw",
  "key28": "2NR65Bhca2oER81VEUePBZieL3frZBgU579awugVc54rp9UPoasft8Dz3vNtbDofu2gVQ5HUMQtjEmo17xbwsZF1",
  "key29": "64Zu7f6fV8GWstaVPuQTjxyNB4sgBTgSVNe9DrLUU4tm4hZTyJ2ktAjS3JdaCvWTpwcpo1TZskAqjzUnaWice6w4",
  "key30": "5JCp9KtkGrbqeUSc8qSEv3dUtGS7QZVAmXrPxF93otFkEifKj5erosFy9coTc2TDsuGgLE1McL3FvJLLFYvUqpqN",
  "key31": "ZkYsH1YhtN1DubiZbuMyPQhHZKUrXRjc595nEhUAJ9TTUhkMVsJf5CKiEF8SM5pjgEE8nHZRiaowLnM3dLtnQCb",
  "key32": "3ocagtpp4wew499MQVxXw9uvWFvPkqByVYewb2kDbKHt6gZVgBmZuo1nLpPzXJhYPdkmohH6Xs35Zd35SXfw5drH",
  "key33": "281WFu99MhJ7L5pQPCaw2rjGM1FEQNnuRatkX73hu4KSA3QN4xrZYUACwNJvGgppbUwUCAeKAXhv2s7e78KXGbEY",
  "key34": "396FwUMd39HcaRMj5nfMqRXSZhjpN4KEfJW5JseLWp9taKLzu84Py1ZVE7q4apmkLbSSZW82w3bwVEoV8S99oF2k",
  "key35": "2zhqRGFJwBL15SRWRPJZqDJr5yQTRB6gmePX3XpGFG3ThTXLuT4vWn5Dr32ZGT9pkDbZKRwMRgJhXkHfRS7M5YWJ",
  "key36": "5Y5wnjd9qNugVZvM66DydoAPyK2nFrgd3eNV6edw8yG7rHFq6pUKvhbqYcsYTYNwV2hn79dZgZvXinToc2hhnbFZ",
  "key37": "5nrtx1uNkMq7epWosZKvrLS7QLVCS2wSXCJ82DVPwXyFNhrLX1B4pW29vUTcPugohyDJfnVwypmxGFi4F1U5rkaL",
  "key38": "4kGrwgENUn1zntDLK6Tia1Tfo35wGYQjXexqpUHNJmGmE1R3ocV97m2japDgeAn5UNrDVbeG21WmjffDuGRtEP6x",
  "key39": "3DF13vXMQdz52vwoNJNdqanKz95tcaZ5BncDygzRLcTjxazkvx8SjNZYXvmpEvDdtpUqdMMBYRdPtyxTLzuvJ1ZT",
  "key40": "2p3njJ8SjsmKzVC1wsB5YMFbmim4puDPoez8A4EXKcTHZmU71Ce5vhsg8mj5k3Dp7AVnMhsawboXwiPy8762bNVK",
  "key41": "5Duxi6Ku6kffEZZ7evmQ3vk168srWAPhqU8XgbGN2SSCPP8zgFxrES2ZfRc7rw6xz4YtvA3aqr7MkLqUDecg9zQo",
  "key42": "67LbDf4GHof7AgtHjUTndhwTjHuuF4ToE8sd7zJwJkHQGRuL9bdARrGMYdxQRy4tvubEfGDoo7iezS4Dic2v9M2c",
  "key43": "2Be8EexUyThMZpwVNQMcfGmr4u9vuwX7A3TZnXZZTA3rWZgxwNskE1NLuNDLv2XemVjPvSspRrrzr9715gSdDaEk",
  "key44": "3sMGJPE3yCVaCFicGHim6Ecd5y7Dp6c6WKuRy2nDArAn3mpphcA6A9njdP4thdzJD8H5TgSFDahtzeJfJyFSYEMX",
  "key45": "39NCFPJYg5GWZnK1jQ3QsVik6FQuRSc9Ue68tjbVdixRR3ChJQvnvDUUvgDqtQKysqXxJu142oTbnovsLFUVhovb",
  "key46": "5CHFj2LWC9E9r8X5sj6vYqpRa1LYTaQbntnjALMq6Ysqyq6SDhgrcqxZeZkisFBhXjdP8Z68YyKgSuh32tEsmqu8",
  "key47": "2ngyUcJCA4H6EKR5kvmMSwvy7ko7QSRpuMxmasoG3wAymZwrNhvYCx9868juJJqZa1q6SNNYTMT17T1cfXT7T2kV"
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
