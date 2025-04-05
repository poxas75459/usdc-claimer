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
    "22T3kVDAyFiEaUUWPhF6xBqyr4Fj25eQ14Wr1FSf92p7rBYWsfHb9bxwfmXkj7V4TZD4KkZ2LGMsFkxb4DoC5CVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7mXBJ1pjN5oQ4X1hjUjHU3WQpVMhQ99WeYBUAaHQy3Xqg17JR6X3R5jcWUiCM4b55KdSWayPofSFnB9pgXwebn",
  "key1": "3J2ZWfyia92V3CFB53ambmmskCuiznyVXTc2ymJfBbt6yn1J2KyAQ44TKAoUDAbCtjPLBguNMswDe7Yk4qdeQDL",
  "key2": "32vD7u1PqPbDh7udg65vHZpk8DJ6hs94JoePZrpeFTgbkjXJzGCyXQDSqqGA72FY3RpYCw73pmGK5MGqUsRVHDw8",
  "key3": "zDETtMdj2VU9QZ5XE726jAqxjvD4LheSFLRAELaBnrNg9dv3st6vr635cKuu9rPc9Hbgb3hvQn1ZJPtaRa8RCXs",
  "key4": "7LT2npqrx6S2da1mCeXhijTXV5D65qUkKArMZXd8QMhb3YChbCPWHkx8ZS9DZKYteFxdYtGCqnZrpLfErQoD6ov",
  "key5": "2FBhQkco3RBVXfBGiCXh6bqGFtm57nUUX818ULTHnYWJUaC6qw6ntDGb3HV9jFG5f9gt9FvepKFXj1joChBMRyeK",
  "key6": "xkgqNyWCG5dJF1sN5BNumhWH7FPoFxgjzJZJpipdaYnYuPFtr19vGte9DfQ6DK2kjTLa63xfXDNg3m9S9vcB618",
  "key7": "3uGHmkupUwnFscv2KVQWANLbQNCTZMbhmAPb8egd3CZztKH7WyEb8Mc7koVxRCx6ZYiqpKEKMpV2RSxmoWF8pFAK",
  "key8": "icM1BsQ6Q2mKeAcgXR5FePKpVEVAormorAZZS9GqZCyKVuDWQJGndRP9nEAPRvo753Yyjo2Lqfxv5QvkJCvPfqt",
  "key9": "BTujhHuWepDfapUcsZNa2Z5YSFs6XDNubNKvWm8YrW5n9H6q36NAZ4XaTKFHZyoSUPpGzFwcbkuuPiKXtLjd1VZ",
  "key10": "2rPRdgebpbZy9Kr6Ff34JLhxrFocnh3xd7o2aPX5sPhc2crmEq89Sx8b1omgM6RuDC4aa4f73CiJT9nGGd8e4u6D",
  "key11": "hre95jEfLia94SxQuiP9RqsSWD66DF5Bdm7XZ5D6CVbqQyiFYpkFgSvYXHiW4ddVj29eG9raxKvUG6zsmKFgB8m",
  "key12": "3rGhZ7gDUh1yUgyEN8Vb5dE7zE5fARMJxgPfar3fAE57mvmr5ZJTkCGdGxQ7UpXJm5w8Lnj6Ymm61ZPkLUQrCsL2",
  "key13": "3MaoobWeAsWD1ZPCYAwjDokzZ2WS86pjQKBtG362UDqzShh3rgeSHc8qFTophbERqHBB7bHscNohoZfwegCj7QZZ",
  "key14": "noQxVDSrf4sv5AbFzT8XDN8RAvJ35U2rWaPVrkzf2d4PPy3wfZkNLFgez8qFwBngs1WAFe4YoK4iM1W8UY2Sr6G",
  "key15": "5KV8t23EXbTy7KaVodJ3sEtZPzvsoKCkfAdcAWK6gEPnW3CiTubzJmZ6fJxnwTxkyUVcNzbD22zfYsePmhpPJjf",
  "key16": "3o2s2wZiWkyapKo5Xyt1pms8CNdY7hQX517N8LZ5wK8GiBsGATvGNx1zPG94xkrxKtFK3DJWoLrQSGPk1z4tx59j",
  "key17": "2MH7kTr2fbPvii5hkhQWwy5j6H5Y8Mk3K58GnHqezth79awRDuCuHggUtrF7f8UpehbSKHfC2ui8XuqSC7tcZRXE",
  "key18": "2GRdbeXMdAcLZW7FJeohg7tCh7CqWXVWFQV6GhCF2ytQyfQKq1QZQ9eX4QCygyqwuqzzmb3ANRSyZoHsqxJvgbhh",
  "key19": "2ifNcCv47zNMV3wMoAaN8EGBeovfBhksg6Ai2GvWvjBztNMpTqRfxDLYpgftufzPXqJnKcsVejxksSgeuSJ6m2Yp",
  "key20": "45ZXr6Z2KQVHrEEfWTmqbwNuDxKky12zzsGwKzJQxAAECNczarPxpGYadU1enuNLFh4Vk78TFGfNk51kEwH7tpwd",
  "key21": "4U5PZenwqfo8NjY7GiCC1mEfiNJBUBJH3FbnAjSR9NzFvDnrHBPfecSLU2YFobuD7BFXkNwEN9hFX2dBDRuf6Rv3",
  "key22": "2McU9MbJmbJuZKJry1s7RmyFuJ7xsTNHYQyJqU25C9Az8LiGwkSAQ5r92Pr6tmvFj9J34whDYd7qKC3kmR5GTfQE",
  "key23": "n42akLALjixBV7sbFjC6gKg7gVZs6aS2Sps74fZspcxL3xnytwcdJmogphetcu2PkuyDJpcuN2hABtN4No8fH66",
  "key24": "4omvLXJVrRqEsiHyCcbWtq5Zfc6Z4MkL9Q9QBsmqMrc3kyY1WKitp11TL6s5bYSdpVhwT65h5eYJgQXEoQkGKpJB",
  "key25": "4gomcBgBRCGQZAiD1QmLqaccLgGWhsvjCsZi3h812XRBf2y1yxciH1uH4vB4ruZmnEemDkJLKnFbhWRh4ETkjQzN",
  "key26": "2bE27Y46tvJqtyWgb4rHvD5hDki9pcnDN376baJWGyomZ9afmK96maoeAWpd8BqBz9PM8mAfhkuajfSRdGeJKTDr",
  "key27": "411yGEQPwHENxRKmCAWNQUozaU6T75YxVg38uJDEUebSBF81gcVkzcPuokJkwcCJqkKwYU9ERqHkuUNBWhZUCXdK",
  "key28": "66NmH89SBWMm4sWaicvWb2r9gTzWyXWAyJVrTVeWzSkCXSamphcJ9SstSgAXqCMpdRoGuv5LaAHk8wCbPecan7C",
  "key29": "NqmDtsfNpYJRmN2YaiqGHdVTynQ9VQQhP8q3cFLk3aYGfoSL8v5nbfJ1EdzWaB73YTcXzcGRJi2iH8zuBNPr647",
  "key30": "3KFLk1G9WdsPK6wwgCdn9ou7B6eU8ZBuVgWxqx6Tra4Pgdxbu33FZmrToUcxAKFzwuAxKEhpDBPh9AUSzv6E1ZX2",
  "key31": "1vAZVXmi4cPxLmueXpe84ZDR4MAkk5FVQuXR6hsCEPWBmGZh516uwSseyU81UNUrFWBiMLdQdniW3XUBLkmFqxN"
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
