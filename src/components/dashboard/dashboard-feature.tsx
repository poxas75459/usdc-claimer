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
    "QKdu69v6sd5jmKxp7xvc6c86WKciytmKXWGPHAPmD6E94k2QYyqGBs9xVGzAoPhs4dxTUQeaGy3AHgDWHpZSeEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifm4xCYmiBrjJWU4f55TzWE3hpAZGxT9ajfccsR5ZeGqVWHQoCMLU9mSVHjjHi9qRZtWKTRqxBCRc73Ppsp42pH",
  "key1": "5yCVZuJAEvgiq7Kum4NiLut4beWkJeaQLKLQBrJnqes1jLV3j7fkK1qeDn4Cj7jk8T4VdwgJcNjpJKJsnR1AeX48",
  "key2": "3spoSmdJC7ktUETi43mbRq8KMwqdJukuTF9TPTraWDhE7dCspVWzES4Z8ToMuyjUu3c3gjTGp7ZdJ6HfTw9Qt7kc",
  "key3": "UsZXjy6NBr35WYH39g28jK34UUS5HQ4swA4gKRZFff6pkjzxdMvfSmv7uRbcptJ525tX7rGuqbY5Ccz5gPDzq86",
  "key4": "1Q1BXVdh84MoXhV72q4cSxYne1anhUycS3oUrmPQsuSQQ13iHcivdkSnRE7zV3oiawmVsZ79rBgQyjAofMqTHLt",
  "key5": "5wW6HZQJViAsYb2fxWEkACkMj3WGsdw5LSFzVneKupT3E6QJJiUqN6pRQuCnwGTPjC5SxYKK98VCUUapS8J3wPHe",
  "key6": "L9zJdyWKoHduFCiDfaJW5SjB3GEmEFweSLLaAUMVYWWRcvMZpoA8QdsQYCkiGKjwa5YjJbZKYaZ5hRQ2fUWMrhN",
  "key7": "633dDUzg3mkA2G5n1eUS4367kNhjLBNNqS9CAUC4JCr94fWNZswwzYV382CTY83bZiX1M4w5LQFVViNGrLKCawn",
  "key8": "3m6K1zrSz5sDQ5wFAH219J3aUJE15Gdca1rzdAbbHWqdSCWL3wSfxuq1wGnjaXqZ6jNuLPtdFuy1xij3DBGd48LV",
  "key9": "3MPrfD2aiPD13V2hPamntCFBk5MihdWgScJcWvWbKiUSBKpMw98TGyGruNWMs1pnE48ejgR9kNKdVt8LVUvPWVt5",
  "key10": "39CwtBNpK3HftP1BCo1MXjfnzcxfE8Hsgjcz5m6MAppQ7aQSQQpmnKVcqy1PjuLKhiV7Y95rXcpcbDtca9MJWvej",
  "key11": "VsFksZwDV1Uui6nHkQa7RgKCJpZ4t879w8cYb2g5uhN1P42mds6DLMGhZZ9qC1drQ6VDEvTEMMdfbtuzwvimE3H",
  "key12": "2bCzcCArJzbFz81pv1YRvDthf297qcTUze38EQJYABBV6iEDciU6w7NL5LZJeBdxJK6HrYtAeib3C4JYWQ4L1Npk",
  "key13": "5xJuAM2x6bEE6pvB2xZRbEdc3p3a9m5mCYtQ35v5nznCK1TehivtfGTKKkFtenKVbs51Jo6yBja7SFra2copY7ni",
  "key14": "2hoouJZisPPRxwePqVc6FjoqaDTiQUt1dpVnACQL7Y1LWtFthL3SCWqepXuLhBSSKGv7FqmCe21KoUfEo4gzKruq",
  "key15": "3yBwiJojXj4E8TB9kjn2AkEUJXYyJvv762q8nC6UXMJroD7TzjGxoGVD2joTS9SZmzaPnGVs1ekQpxxGtFD8t5i6",
  "key16": "Yb5feht1TfF24sszLqrh8TzLE1N4bNvH4Fmiw5ZHbY9FkBCpBveWdb6wmyxcWDPFaei2weqQf2fby6WrGB1aCEe",
  "key17": "5PFUGFVx9XKZpGB69hdnWFZdCTuiWbJeNujigBGDxLCWd196k5ZznCDjXu1ruSGZumjoiLQPsXpW9FpYpqUh5HsP",
  "key18": "M9yg4C5ET6r64VvW8AsMZECqkxT24jghzo8v5gMK4z1vzWaMYn3Jtm1U8JchQHGwiXegpZEXVeE9hvxHETmvyFj",
  "key19": "BaR8mFgG81wcDz5yXZueEWjUD6igg4KkEz1AYT5G3soFczmqn4ZrdR3KzkSoxfRUHRHc2VsUhPcCesYCnyAZksY",
  "key20": "3Gg71FVLQ31ozZdbs19KhogK8fFqWnHUbHJFmqamZcea9JpCp2699AcDKCk9Rx4LENrF8oMT2WofugJbkQ8yZ8pM",
  "key21": "5ZiqQxZziJBFmt3nboW4964ArqDpwarHsxfJhCuwobX4n5rF79e8Z9Ky8WBDkhcVExwJ5HtH5gLHxaBuUiBVFXBH",
  "key22": "nGgW1rzG87Dc6ye7xBvT1LVJkTft7MrLQsT6Uwqm4LQCLVqbbs7Hv8fP1J1ZZmeyuRW5G8ZVGAYF9p6qvogy1vK",
  "key23": "47T6ofW9LyKRqK2wXofQYfUfcE7aPXVMHX2ENxowW6G5Ss3RuXNjLH9UprzxYccA2q86KNqx1XNgp2pQZhpLQS7F",
  "key24": "4cYeskjDJLKMrSLBbaX23meTYAYdLCLjuXeGc8KussnQEQYF5mBcmXixHz9qc5UHyPc55reEnrwfj8BC3ETPVzQP",
  "key25": "4ytf6ADMyxhPMSFfuTVBHKGwJ6kXdFTKMvskAXQdS3cSj8GQLW8g9oFAm74FznZFCtgkCDZNQMmD9rags3VLYzeU",
  "key26": "3XY61fXYdjVHq4xvxHYNXfBDBPEH5D4qknnv2RJHRsHErRhFFFw8uVzUVbVKBnhawQJHUCjWNAHQGkvyegTxTDko",
  "key27": "krSrgM8gGYXa11J9Uka9sidEMfxHvVgjE24CcoDLSduJnZuqsbJ1kucbbBCwtdzxzgyEL7isyvEze3WeweK8Co6",
  "key28": "2QDZg3wxsUFjfDRVXbNF5KtLh43rnCei3kyF543QSMQtv9VxZVBnJ3xyzbQZdZDcvMqXUrhnSft8hKWw6EGav2rf",
  "key29": "4vSFMzDL948jor1zLkiu47iiE5hfU42jdhpiWtSFVW4v9K8yhY7Q9N3hQWJr7g2R4vVoRqDMcNuspiXedTsP6fvr",
  "key30": "3S3udqLfsHVVWtuiMYgKMS7oafuafxTc2rnJwa9PpSPJZX6VzANGzxCd7VobecR7edrF4CdMhWbKi9JRpdXJJgVq",
  "key31": "2itTfRus8HKNLEi6yRqgs9vQ7yrTRjFgeTLEgR3TzdB1J739rQLMtE377JVqcV9QkGfXABM7hwA81vfSZijU7xxA",
  "key32": "22wDRRPdrT6Qfq7XUPqzPmsEkBMun7DYMVZj8QBWyFe2u265yo6DAN1XWfdHV8nkj1NK1s2pc1s3YCmA3oqmg48Y",
  "key33": "ZDZ7Z3xcdb2UhSxR6eskmPUdAUeaYEJ8L6UoHH35fE81f95NZZWjRjvpsH9w1TeA3EJDL8S3fjLJmXGmvu2TpaU",
  "key34": "2fdVWGbrbLAimT1tCm3Sn442dftXoukmWRos4xEGyh8R5VCfVngtHao97tMgNCAGuYbiAcaMBCqt6QJHA31MjCtv",
  "key35": "3cdiijCt3nRruJvxHvn9aT3rpNv3XzpCJmYks5j5vyQZPcwZRgFpaZuE69m47q1ZTNDTn5P6G8y3uyosmHpFBTBX",
  "key36": "5cNn9f3Yrsa1TLxEM9brbc364JxAZGCeKnivp6dpcH5qJCm1nQ9y5WPy9kBS7XfQ7JYadsFxMkytwjSK9fJ5QBot",
  "key37": "4jh7HTswwMg5g9MaET9M4J9zi3uzm7tNsaSWKnRUCWyH8QB1wATWXBP8B7xvditHYKsF8PND9HM8AbqbPbpDLNyu",
  "key38": "2T7DQn2HgP6CuGpb2PEgLdM2rwtethwq1HhY2u2jZFLxuaP4WkPvfVXELDmM28jhRj6end9ri1rzkmf1akzzEEKs",
  "key39": "2bMV23qeF9h4X9PMPd8yZAGuFpEioVuboShgvsDAqG62Le1a39XkaoYHnDc81CU5PFefbm6CNJu76WKTSr5M4Y9y",
  "key40": "3VYW6ij4nrPSzhEpJJwR8XAHegwP8MeJtpypeasfXPDe1WNh28qxqFSE1MkFHmQoourFNBNq3Rj765DmEztpMsyX",
  "key41": "5pC9AvAfWM8BV3iNia1EcyJowrYzX5hGWFUUSLJzn28UsfpjEnE1k8bkeKTDU82bBHt5YmJ7VuzdaxDAWxKidwXm",
  "key42": "6hc5hmagevbVkQBtvp7wf5qq4c8DUL3BLPtDT6rzpFCqtmkTXmggzRRQ2B9KbBUhNUEKT5NhRkJY2m9ejXLxPwj",
  "key43": "2n4LaSuSwbauu15g7inu4nMSAaTKBsHhyyzgBNsnoe21TxN4c2Wh72JhB9Lr6YCCHrjgZgaF5axypTrtseEDuSob"
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
