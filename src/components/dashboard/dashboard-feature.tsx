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
    "5hmvg6Yh8ZngfQQGhdZySbnCYHdqjU58UrHkeNhWoNiecAvEe4dhzaynHX5nkcSmXuyXgXJDmocNzN2KYpQET4NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48X17zQktp5MoHqaBJ2yFc5UGJq6oPkbx5GWAmmXqWCKEZc8ks68pgLsZ6LpyhY3HCLWY9nZhX98j7MWN1wGVi41",
  "key1": "4cziqrXN7rRN5oQZixGzbHEzdRpuiShX3G3EjmFQpzwQFzkSXruYhbAhqV3Ha1tmKEgMTRNfMpRi4agPmBZV5vxL",
  "key2": "3AJNA4MQ3XXcuKwTgAko5BwWaYacgGz754wChxvo7EdtZL3tyBLyuDPQygXKhX5F5JLT7TANaMj3LQsZFCqvnnoP",
  "key3": "4krFeddmhAe2YaNvTqB1hSp5e9NBYYrt5cLkaxoP2U4CMYMkxF5tKaz2Y63GR7YJQiM3cYDDA1VxMvs5dmh9YENE",
  "key4": "26Lyg5buWoJjGSPyQQhuTyF45Ddh5hhyT5MjSqN7BA6K5ZXcPRUnmUSzbpnhNwbQiBRmQ5428itRqJZZwJ8zA54Y",
  "key5": "2WPPAhA5zPskNNJcP6UDULPCHHDevJv3Eqr3BBF4WKEvxUF4ZERcSu7qBFaLFfVH6juJ5KxSikgnpViHgF56zmHY",
  "key6": "cMRWFMBJmGnAXb3xKBeDFfdHuiAkiytLRyK5tzq56NFn9KPYao7TH93LiQStt7pj1czYeTutgACAf9HM7Kdk8BB",
  "key7": "5yTaipagBissTwk1PKUXga13kmgP14H488oaCmk9948MdwWrr8H7hW6g2YcJ4FZM6J19vytQSV1eosCT13FCzM3s",
  "key8": "4iUpjfgsyNnsbTXJDqdxF6UqDPNJGzUXrt5brRREFwbhBdEiogit35oU41Jkn5EQVUPKKt44UAZQcyy5y4L3A1P4",
  "key9": "2TgYu4fnHp1x1pM9AKrfba9gsha2FaXEFv8i8Z4mRcqjHoVGNJ9Nd945kXwBenZBLG4MfnBj4P3PXb3iSaB4ZvrE",
  "key10": "5zMiGaJSJ7u2ek3QseDVHsKMwLNBfjsjvCrcYR7VvUX59Bk6dXsnJi2Uq1jxx3wUbBw5dzdutHuQPCPXBdKi8a8m",
  "key11": "3H4PtGXAiA28ii4cYwhSdPPkEzY3wvD4fLRHEZUPhnToDx2Tq25bmChd4gAvh5uz1exbaLYZaC35VtSWcARZiRrH",
  "key12": "wMzP3C4iGZqDSmYjFXycMSMbLQXu17LAaVFu5jxjvsPpecZdquqKe13a1G84A5DZiB1feuoKXvVp7ogXSCPrp5A",
  "key13": "2qX9EfVtzxg3tfGA7g2ivqnXc3TNWFjKS9a3aFPhPREfWtQwagSfvMjWQVnVynas6rMp99jDQh5pMCD8Ta4AnQqR",
  "key14": "aE6mFALXJzNFtkEDQsP4ynhxF3Rnq2C6Epp9Ve5tVfyUmbRRD3uSpQ4thLxkN9XzxKTJRNRSuhMocyJjcskPWBX",
  "key15": "2c11f7YYy7zUWneNyMS4NnPiHkwCEuuHU2Am62UxzcocrrgjCxu7QVSLMcTF1DtdAbGt5sMasfKYzts3n7yeWDz8",
  "key16": "4bAZcsXcLDZrkWngKZ5TTa6YqrmPbMe5dM1jqr4aemTACZnbMwwFajH9BndkjKXBMQgYV9seqifnmB6Fh4YFtVMf",
  "key17": "3s9zNmat1fKAs4cwsTyQbcxUnGykqHsbcYPo1Yf9ux2F3t9T1bD9nJnD8bcFh7NnAqg9jFrmrvAkxW6ngF4cUMmd",
  "key18": "4aWfKXcCWoxHtVm9sfcNmWdSSRF9UajUNfvZnsQvnuuYeUzbWxx7K7cm5hydiiBgwDDW6y85asSMn3YxEHid67Lu",
  "key19": "2wR6xND1iQZWkuJSUC5a53MrZBaiVsvWNCfJHForUW41iS3QS2aELP3br9EV4tLw2XAokTM8MzQoAWwJVQRsaSzV",
  "key20": "2PuhEadhho8DVAwpszJbTrm4m7U9cwgzvZsfKtFqXpifVbfGZY3DCTc39AoGcMFiJjF1EibZCWeni6dyJSUHfwwb",
  "key21": "3qupkP9A3cctGoqM8cFPb6Na4oZNT6BajqqW3RF3NsTCg7r7Uo7utkhc7eYtGrmxQJh51HueyKmVPbrSLSxLNAm5",
  "key22": "4Knna2uQq2sUiFzoh2HZhk5QQwmnLUyHyPB5g5a9b1GUuXdEHvyf8eydZB5Vumq2F5Hq9bxrhEWsKFkk1XPP6LdJ",
  "key23": "2dWjKpr9d75k4GEGMxhCMA541m6QsnFxBotHaNixotgXudSff9qUgWgAbVZms9iTsPRRfeWPY8RB7tFyKN1A4gQr",
  "key24": "5e8L6CdYiiGg2KyVTV8nkKpMepxyxzMBE6eoJr1ovrxc9tsi7oX7483aesJZhRarqizovHNGntF71ZpNwY1qi4bt",
  "key25": "4FXYo3ryiTazjCXvC8LzLP4sSFLXSghHvrRJqSbDi36iJGqUqw8vDsdBLETzg5C9zbVq3gN8iyzWgrqtcF5wmUAB",
  "key26": "H1Dy4gCTbaHL9Qbmg6vf2h99ZrQqvt2dM7qZAMyGFsUgH1DuXknkUPPVzodRRrJczdhEV4rs9FygsRVCXjTPz8U",
  "key27": "5aQzeekSFVYuuP2BKuyEiufVyGQeD17NSRiNKbWC5rxsoxwyWaBTfbJEdddq9wuvq1FMpcERRvWGbSqYsH4EaX9L",
  "key28": "MCsiRMiwnUXeUkQAgz1pY9ZnDzoV7hbccvPhx3pt1WvKKp1n5stxNWCqhdZLGmJPVzypJ6SHQknxpv3M8ujFNpJ",
  "key29": "4fby5DCJZzSSkKDVvy5uKaX497DaNM4b8WDYgCxYf85TGzSZCeqkW9am9aTZyDFwEx1xvojaSPB7yP3XSDFWwrTA",
  "key30": "54kVcBtQHVNRkMehwhUoC1fhdgxKQ8EPBA5YCnh6azZmYGTqrHSiHjbJUreMpsaTS9FV65KDkreQ5gkygzEdh7nR",
  "key31": "3ELZzES2MdD76QuNnG2SUi8LutL3UoqjkZTubrj1RBHMXacobAH1qh4A8HCxiUMMrt8oV2KpFoYQPioUqVHrjsiT",
  "key32": "5t1B1S7mWSv9MRPt8DDWwnbx9L93nLRhvp6iSo4ttjMe3GFidj6v34vaD7mBmCWLUY8Qcfq1WtFiHUec8nW1Pubm",
  "key33": "3DRcH5iKGNirq9Ep1CvJDK8fCNnyKLxdV47JH8o2NwRQi7dGJN6edVphmCsWMXC7c38AGM37iyguQfSLnWF4E2XW",
  "key34": "3xzgf7z71waWnzTYEbXSV1FTVoVv6n6ndRTetQHkJzTiGnFjtMGL6L4Uev7yooKKzKVSU4TKCRDArcMsuM4ReiA9",
  "key35": "4ThuM3ZriDYAZAeNSoGVrCUmEVvfLoV8bu3FnxGmYaFB3iS84j9PSpt5fF8FZ6Ajmx8sLuSi7KfmcmqsznksiZZZ",
  "key36": "4u8oGfWkJW5MjWwmjwxLxyiPK7dQyoQ4MPhQAywcUFTsapuxNA4HsXLQ6fQob97rJi96kbzSARtT2TgCaPi54iAg",
  "key37": "5co66CbipJhLZpRBfxUghrgBh3w8YxWyVBoXuZAuL1Raw5fxBa96xwTLBVMSMDL4f2oFwRL7jPGSpMSNSREnPZsP",
  "key38": "3ENFEgtp1h87fESAtLh5JRVXvVjuAT2DEGN3JpsbSYPW7dnT6sWJJTq4ar8WhRQFm4Qtv4Gu68W7rmJeYx4QKf4b",
  "key39": "PCUc1mqhQ3VL78StZg7RrkBH8L6zoGwdUyQX8b8EhZTkJwsFKDnWdQsReHqmGert7rygXsut3UAwVy9yJPVeHKN",
  "key40": "2gFz7QsVK87o5q3eivQkiu82dPRreh6rwrAk22V2MPhaRBvoB4xf4JHGEKS3yVDp9P3WaXCZqkwESYx1xv8jY1U5",
  "key41": "3oxqHbpLMB8kmQJXWhYxmK5AUtgFtm39XW6aTYGvXyih6Xu6mnssSJmcP3xBMYV46eNuXbXdcvYW7nUdmxAXYEmN",
  "key42": "3yusk3GH1LAXGaDqrE7aMBaec3nak16FoCVNpgM9V2zHhU7RnHgmAsoKd8yTe9F4gsZKz4VArWYUHhy7KwViGyJx"
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
