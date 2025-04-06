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
    "3qZt1Sto5zAr9Avk1GBD8FfWbr2jJvRyP4GiBKqyZ7ZS5Byjd6cGSAa2uA8ifJHcwyxtAZ5GVcNvcC9zJ5UtkU3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVnFjoPWf3SyT39tfRZXJCrsNiDEWekf7BReb9zvmBCDDWcMy8FZ8EbvK7ryqRpvf4jb54whsNaZ8q8zyahzbo8",
  "key1": "3EMvMYW5x2eiK1xJfvmVAKs5LTpovFTw6tGiu2KSSkk29BPfwFA4Yf9TC7ne4cAwWt1nBUoTrf9orTQmHX9QZWdy",
  "key2": "y736KXuRAcNrmyj1afhbSR7HVzmv7Ve84soSFuM6saZfKntLVVkhHN17JbeHV7V1ZEEFrHojnx93LpbYZmFLESX",
  "key3": "3a9P9DyXF4GJhsy6QCfj4GbLhMdL91NMrypD1CqkP4e5tf2vUtpEnZvcdkqZ7b8gnbSQ2Re7SKD7c1sKY1bR4HXn",
  "key4": "493PmSXxw74AqeEEm1eZVTyMATCXMijPiMNAMgkBdn8AtwNLZrcfm5U3THXh7boNcN9qWLby6hpH4vb1fgHzQcf3",
  "key5": "5EtuAraKt4tX9YuSWewRCbjtdqyBkXdWZojK8js8fPvseuALP6oCewUrLSyagpGd1wvCmJY3ZfpfNcSK5E4tUTgV",
  "key6": "5vqQnCvDqP3fTq6FbZrAazAxrGkwT9kVqLVy3U5NTPb9ReYAnrD1Uirkwwnm1NXHnCAXyfpAmQW3oGKNt3y1Q9Bc",
  "key7": "4KeXyjhvUSYDJxt2EJoyYaEga3Tos1K2QQNpST6YgKbz7KmjX4KZkagrRvhBND7H9PewbGtxmnC8ej7iELWtkfBd",
  "key8": "wBY1eSmFxbRxezwwCiPA3qVdiioaSVLojDrzuqrFFYU4pS2PxyANjUufNgY7RL2VDMQmpXq4fk6wDDxg8yeVhPG",
  "key9": "67ngRqeidH5ByezDPrhZfzkRCbUJGfUfk8UwcSZssLeXoJxqWLwMCKpvhdQvQ4p4kNxP1UncRhbjmsZhoHEQLdrt",
  "key10": "7eb9vb7tHVVpELEceREMmTo5RpgXXkfUzhUYcddWqpFHZRnQg9t6Sn1iLmCddeTxHn7QHVZDMTkEPRK8Y9ka84c",
  "key11": "4WzBgceXFB2zZDRxRYj7Zsz57DaHiGFF36fBAabc48Y1ALuMQ58nVtThXx91dfvP4KHhzSrvypZ3WyCin5yqpx3h",
  "key12": "5mcmtRd3ELym34cTtWzEiWb5NWSnjpretY5fiHdpGm1tSKS3nApSaxUoacjkcqXS5Y2GUjbBKcrZMZuQkemAuJK8",
  "key13": "3h4XcpUW6YZ6qr7pNpYfAsSHTuoG8gphfhBUbz7TAtrsh8beGqBUUwqTahXHnNdyr3rgayKngER1i7gRVeWND9zk",
  "key14": "43iCo2n2fD4fxZeMznw29HCPfPdMYY2HXTYvTJ32DD8KDwRJB4pcyPpVCPHmASQG9tLF9dK58GSNDeF2bVr3kL5r",
  "key15": "E7HPKMqYATj11nUX4ggqWrEKU92bv6rYw5xN7yPxi5rzpeWdCdgJo5Ba2r5ynFmnwgk31PPweVYwcgW3gS1VugZ",
  "key16": "5yQcMihxZGM9o6RHTD2M7513w9shuKmJdg79h7j33GucEXMbMnJcRbbhkxMjw4dJY7ZXvD5xeBbD6JHq9iPQG4ru",
  "key17": "2t72mJBNnE3pL4rvaJE6LsYauHFNrmGTAKR3j1bCvbjtN6frc1MtksVD5abCCRGP77SZ7H9viCgPixK3h82utz5w",
  "key18": "3MWHeKATRvphgCYddPTVV8WTSe4K6hwUQM6CYk2iTvwpTyQMzShYBeSCP5WNJGw67g8GywJ52F1iQGib9AcEyiBH",
  "key19": "5aRkUzBv6BwgrPWXjuYTdRoCtM5SXpN18oT9NAYsEafAFaD86TEW9TXrWNR8wgrd5vya4shruodsJfZaFqEY3NhY",
  "key20": "3HpDGv2NWTWGrs8x4yoMxnN3rNsiHCT5SJ82aG6UDHKsEVMnMCNo3LLhq7QGxVjTR8PvnyNZwPpVTboSdsB7bnz",
  "key21": "4L2nx1nhrNuaQLFkUdMnQ7oRgmXQZmB468JJDNH9CwuRB7eXjKT24NBiK68yRJgcs8DjnUEskdpTnudTrnTqJSz",
  "key22": "urzmCfHgvFNsHuvrMqeABWRxcEqbetWgR267obxNwqq2muTJwYqWYqzBqpXxCcCgCqsHxJMezCrGgLzbLJH8oyA",
  "key23": "5vS3Kq73NMRHCu5DtKdWMmMvERJiNood2ey44932LJvBDWN2uoZS5CHfzz3JThLQBXz8366MU7RQYYAT263AqsoW",
  "key24": "4xA2XmDv1yD9kY2nr5QUkdm628sUBC5bLE8knBppTyusyGS3LX6J5Ehcix7GTvYAor5865P5WLqSqJfWv5HpwQ1r",
  "key25": "54qP33NztbVjWj2wgBaM9B6eBVLfW9xjPEB2gKmQBvs7gPRzLEqFaMSDXMT1FUCCz7nZcFyG5eepaWn8yUE9KUag",
  "key26": "5BSGMwnTmgYE36YfWyY2dNvKmVFEz3kXoQk2kZTk7dKbtNKBS9e1TByFDrk7GAmEyRYFRKsKyG1EedggiqsSkKVY",
  "key27": "2MH5oWCMuyLzg9pvZW9WbLhyTfXqAdKj2uAvJnLS6EZA76aDKisfT8Q5hHcG7movRKvJUXyf1yZbTVZ1FikuJzSX",
  "key28": "2ynFJ6Mjr7rZwHQkKaTCtrXcjVNvmDUrnRxT4CoXpH1t16N2VfvRbx7CkvCuex8jeznWvQkTyZ3mbLvPJkqe7kFQ",
  "key29": "4tr369WSR1DxvuM3edbp7eNFazG92VwBDkiA4Df36PouTfiTRpMfH8zrL5LcHPM8VWYDQpvWAfa7rb27wyPQnGmw",
  "key30": "2rxjVVXNBc6LqA36tjo73KT1zNirUwCh5uSpxrPtArKP7KBvTMwvvXQdsrtyCsbAUbeVZFXNadGQzYgWjYarHVWJ",
  "key31": "KcvAyKAd1Cbc3euPvkzUme3PTqTD2WrADuBTWp4iaiLXKujSTiChN9vTjmrXUfZWTBq25hEBv9q9AyRPE6P5he7",
  "key32": "2ogR42itWPVvU1126KNDdoXyPrXDmGppbmV39T4Xkh2uY4EbjiCCWchXFGfBdNssV5KhzRCB9FeD1w1h5YRsxAFw",
  "key33": "5jxc5PMx9QCUPujGZNs5aSXbYPBUjKXCbpijcfK38qpeHyfPs97XEBR4R8SxxDTFYyiTEQpEZ9jkPonk57zoVep8"
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
