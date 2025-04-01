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
    "5qjkmc8qaW9CDHFWocxx6Bu1fx8XZCSUvuYZPNbBvA9S99fzndzEzAoJdUHFzk8Y8HnbrnjC2EcgAzQ1D7a1DhXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ds38Raf8adxtS9ak1HV3TBbu5KR1Uv7aFcjKMiFv53emkaFdhj737ULnCpdwKrzDYK2S3cY3ZJguNkCjVSbGBBY",
  "key1": "4hdPZ6byvgFkBP1PssQFVGrp7AD1kP6eMDdbSiK3Uu9qhTUvVw4jvKDwToXvMQVDc5GX8UTJ3fFZirzst5GzPwNm",
  "key2": "5iQBV8Wa5ryYQCLDxNeNdCjducpAHzd7U89XGiMnSGZsSvFzXmav5ej8dJBmffFR4WmT5F6dpthes1dJhXvuLgYA",
  "key3": "wPu6SLA38PnicjpLhEe41sW35t5LtQQdDFA6C38K88Jc1XHPch4qKjc4KfAfsTwfxQdoF5oTZuRsCAgg4cXPA3f",
  "key4": "5qGpyRrq6UVabokymecTXkDLL78VviLqTXoRdbTWxi6qMYKsugbGf6amjJB8bdT7t5t74WQKNmEfidcPp4mzycYW",
  "key5": "4t59me2udLaUABFZsidC7P5ETXuXJkEJNWj3Xiteu5CBFf3YAx5yCQqFxf7b5XCdVwDMHn2ug9jfCuhH99DUEdxa",
  "key6": "4w5r9C1MhKioe43uFwL9FoNWh1DWCZFXQTjwf4DECwGtMsc9YXq2JiAzp1Xh6nq2VvgQz11bvnvbx2p3QdnaYugR",
  "key7": "wnszYNo678Nmz6sMaLgR48inwKr6LEVjemNhjT15MasgG7mMutiFBe7g3bsjLGBurv3zZyCvyLbEm86U3ENogX8",
  "key8": "3LSbjx16svNxFw3xKCWsC3ndq3JX5xNeRUT24N5i9Yz69R2nCCuMER12dG7NhCaj4MyTWjYV9hScbCt3thvjmcim",
  "key9": "amSKm5cju44Z8LV3Kfwb5VkMwGFMMw31dUiq68LvXyXXcvWcjoAhrcVCqzdKXpgFoJRjxMbHWJdLDUNEXQ5XBsS",
  "key10": "S9xpK598KMNcwUZ5SWR6jZxrQkCieXEVVfqn5ScQWLt6jY6QedB7Mqerf7iUXnA58WiNquYP3LSTSEQwsj3rv6H",
  "key11": "5DG82wP4tSn8cSMAjbejEbdMcHW4KSA2GtawzhyoW6uHVB8v7UQgTEvj4HdAgZ4Hi6jfFn4Wwwj5zbNNHXTAKbGQ",
  "key12": "51Uf9TugZTw3hmWXA8wY7jhm9NbxqpkzS7dwi9TS7mLEmVpMC37ucEYiDaCJyjbp7QufT4i3JBovimXY8UCEhWv4",
  "key13": "2dFezbACYw6p4kq7rX6VygQdG8FSVvCwUJne9Mvg1L5f1bScLBZ2Cau2vHTiHH1Fh3HmrrTmJ9osAc3nQeevpZtc",
  "key14": "5ZKBix8rwQJUJzJCKnBSN8MfAkZxsa81kvQsEcaEUCiMTghGXP6P18kuwhPzPoFPfw5E2pioRsQTXK5cZPjQqW4k",
  "key15": "3ZqyxzVR83J1JMF7q7pBtLhxPTQCF1GHYx7WpiWsWN9i6As2f4TjNuUPJUbHahKBRVWZd8DPVs4fhdd2YVA6u7x2",
  "key16": "4k5dwwu4hcudnfo6BWG8uzzXxENBnso7kpfHpostJxxBTjPzD4dzpHPTEqN6oRjxTVYViwrhFhShMWDm7PWgqLYy",
  "key17": "i2T1Yk3NoFqMK4oW6fsEZfhcVr6Qc3cvRB3zCD3GtthwU4GJhPZ9LKFYQ29f2pu1P6sc62pwEKcXMJ19cSRgbEK",
  "key18": "21PkTiU3Gsi3pvEZZ1rKa39PyhMVBokiKT34CKMMxzFAFkm2NpR5PFFVVoZ2m3FZDU1tKqoBy5A7TPkrnt8danuo",
  "key19": "2b9CYpctNs1kRUhxMvkhFsDsaD1k99PTUfEue75jZVA6qh6Sk3fQqt9MxTqqaeD31VqbtwKzqxhzXVkMMDMxdJFu",
  "key20": "3ZXzRrJwQXaSSPNzA3bFHK2yzeF4cPAn8yhRGh8hFM46b9FxWN2UoYL41LKFMjMZQeHnBux4sEimxquEfwsq8XB3",
  "key21": "3PL84qvKvadkCZfjABDLL7WBPNkVJXE6GM8BFdPi23rcyPqnzH5V4VF1E2eDZzizjJvUFVybR7xRw4jRvWApQKGU",
  "key22": "1eubgaMeqUa6yGTPLqbQ6Qp62AXeeKXPJPqrC7VaUD1XN9HqmWUKfSYXVw5TrKY9BtWGkA3QWWFbrpW4cfxAQWE",
  "key23": "31pKQgBMaT8xM1fqnoWJZahWMFEJoXAmVXEK3FpyEBB7F5HTuPYpSCpYLHTYS49uDPfBsct17S6sRJGWdTKvmNv7",
  "key24": "5qL7sPwQxnWBLgiTCcncLERwz3WeVsoxPvbFaSHTRb1LakPkGhuaGUjsf8fcpaspYwBMkVqp4Dyqc37G6h6fkN2k",
  "key25": "2veF7xzd91QyEz3MVobuECJK9dHVDBWfAUQcKivDx8EatMj8gG1tKjqqfp3cLfLyZTVVboHG6UC2s272Bnq34yjp",
  "key26": "45bRKC6wYVJ2MgVQRWgJyf6QzMJwEKnhucPgqo6GD77yajUeNgAEm33qqkAAzTRdNT2QD7DYxiMjBcxTdGhTyZJZ",
  "key27": "5aymwB2fx5tV9DGQ1AJ54bstEyay3c6fz7KBdPmyDwEqBT6qCSsnGEJDdpYosK4rcBK2yvaV7SFg1drKmc1tDhKj",
  "key28": "8HaFDzBWFX1oNwSLCEm4Jdu1aiBmA24H29BHJJWfTMD7Bs7rTZqwcY3Ekxfh9giWy1JvU8GKyGX3nrDMNbmJGSL",
  "key29": "1EFHsbXTEE5nbYpDCqz11Nwb6GtqKjadou8zy9pD987QVUMDxf3c66qH7vB6BpjVYfQnAc2YaAJJY1wgNg4M3ua",
  "key30": "4dUEnYkCU7PiLiYVb7iAiRdtNB68Kn6CgyRtaUbytWF5yR2wS1Jio6sKM6nVxBAmyUiKPWLcPEzB29PKvVJPfaV1",
  "key31": "4bc9ssKAhRUZGWsRXiBgrVNwskdCWCH1dwwAUWXL7nQxFA2dD4ajMjCkuk29Hx7UxCh3RhPpQiUX2AqX33EhWoRf",
  "key32": "3v16wAUqZFGBnbNvpM7VP5LX7bLfAdRw1uZPMc5qekB2Ndyykj3pzF3maPrz9tPf59FnjWLQjbxMj3obZrqASBws",
  "key33": "2EXAZMufoTdek1Dv8ZgmEudK2h6XDUS96Ai8Z1ZXmyU8wUrFSSesRnzDxFc6MCyQP2sFUegDCu45z6w43HMzh42g",
  "key34": "3yrMbmS6CA9ZV5RgUtR6XSNdWcPHF6RPL38RFsbqrsCYMQhNZjBgXdFuT9LxxqXbxBhrpyRHQNmuwvTynVq5VLQ5",
  "key35": "2gcoyvpgZbvYmeJQbVp53JRVfE3xrPx1ncVfJaoeWQ93GpsMeN7e5E6CZrbhNK6kjmCn2wHS1UsvfiTawHbQjgDg",
  "key36": "2FhZA27dJqwHuPGkyGDQsxZTDKRUrcFkw4rDWStFfbwSLfrdhAYUvPfq6bBF6nhaXHL4WTUYSUx2rNar1Py3gRqD",
  "key37": "5TwUpmkfrwQ9HNhf3CbKB1hLwBKNGsWhmtr59J5SgmY8fvgRDbEFwY4TM51FhonoTAaQzjzedS3Wm2jG4sif2kdJ",
  "key38": "4HPdMBpYR2yRcWASt73zYMwsreFRgfCdDCTXUFi1oz2k3HrB6D6G5GXiayize1SpXLWhZBo9nBHpbrfrpdKGWkSC",
  "key39": "4G4cWBD45Qx24c1F5w7oVSrbkwtyc1EzR7XqZAPQTPCbsc3V7H8rp2qD4EW5wqRt8MwSmFQwMi2VtoCXve6wTqYT",
  "key40": "VdEPD9FLEG5om8MGPVhxX7NdLv1s3bvUUgUJ7okqWRkj1qp3i96U6NhXd4aqxxV1iwBXaEmMqeihDySTx6Q3wdK",
  "key41": "5sqnV13Qc9oDBBhd1qeoYNye3kzTqpKSXe1JeaJxwcmtUMtxq79EqbpAD7HmzWfuqKP4rnPgnn4zzDGeQJ1nursC",
  "key42": "SwhNorgXeptTU5fT9hLGJdv9qVNuVNxGrpUZPJWxX4iRjaASvRnFqcBSakkxpUax6wA28dVhu9Cu7mLicJuaGDF",
  "key43": "4SgyEWkQ6wQ29zKxtboGzfafpn5rLq2eXzxaUGFg5SkzjTMDpEoVrSvhYqBKtgriDdMc3zqBPoGvKFzN9bAXodV9",
  "key44": "ma68APZe59xz5yyFqrMUDS2bSUZhizMzVtXxebhYqWfSmJ2oCoWS8p6FRNnb8seQGgbT6XZtt1DfZo8ttR4oBSf"
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
