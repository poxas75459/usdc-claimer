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
    "2qBvBDDqqdVXrGKteXvH6GiosnALZ4iSbGco4YS9K762hyAvWRmmr8CpfLQXBEgZeZhZLkS8DcEg8y95xEXBFPMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTKfEtoK4MK3nXQWUiYmAsqpQ44DH2qtyhJHHPPDvUqw8sfMaf15dMrqFQqob6CAyT1LX85JZFqGLbwA2NQv8Bo",
  "key1": "8e7zNrK5MBdNSGgy4JkdDyepoEkufZfgePkrkRj2tX7vmZ9w8sjWHLAB1EiZ7PGuXCPgYpVjnqBQSYfCRgvRYax",
  "key2": "64FMNTzvkgWuyy2eLcubEkBnbYS1iuHfvws6HGETBDjLCAt3Fmz5Z4TmpxV4Mt9n5w8PmxKnnctU9ZJyo7FJNzqq",
  "key3": "2RE7bR64WRT9gS9B7u2RUeBKf4rdgTz12gYJv1jkR29VJwag55awGzRJtN1ax8x7NcG5ayhJwUQGbdRzRCKp9iHa",
  "key4": "e9z6NWW8twPJQ8CQd5JP9Jub2Nq2khiMc6G94S1Qa927GRBqzrWdEV6wXm12AoCRqAg5RLkNmcEJfwb9WRmDjzJ",
  "key5": "2e4nxS1RE2ckQ3cu6qrSxufpm68UZJfgJU6rceBQHEqv8xifZgbErrx12JvTP83ihhf9gEyvTJPs6xDn4X2mJ7dg",
  "key6": "gmWXoe5B1KBEUAHt3Ut9akJnE3HZcJTuMLhj9BoEvRVHpj2V8AfuwLWH4h7yb4awacTCqfvn3bKRptSSJ3XZmWD",
  "key7": "5JXqzDY3yr4Da8CymMUZUZwBTbV9R3m5CVDjv2FwEzNn5uY7vVw3FbgCCBhWZ8k5TCvcTLQsT2VdLTWNM3kFH6cw",
  "key8": "548EHfJfjH3TtaCXauuMGp4pj1AhdrJywcH4qXQpvCQGR6XL28ZtLtky219NT8eai42w57HBc3TGdFQ21oQveomB",
  "key9": "4FiA1CgkFApWRBZnxPykQUZWM3vACfStNesSmFzVhy45VguQqNhwRyFHAzxKA4nguyQbobDViufXd5BYNbWdkJwM",
  "key10": "3uzo9kGniAH7W1PVhXtFo8a7Y9FJ6mbxb8FU6VR8XYVb7mD5gGeFoJiCjQhfo6P85hvMyfh6Nhc1sELTGUPtWfm2",
  "key11": "4MiwxYG3JyE2u8B4DS8znykNM1cVTwJncR1hG232CeyWCGSswM2nBas2pn1jy3wxNXryAR4xhSmQRYvVvasUYWoe",
  "key12": "kd8QdR9FMze5qUjNgYERPshbVANCzav1imzjLNfjGGaPqwoE65js7Qnv6hSQFMDpPnpKTy7DZqouA79ehUDWcqT",
  "key13": "2hF9kT3eeuf4CLrM49pbp8c7gYUem9r9aMunAD5dt58EzM9Mvksv9eM1Us4faFYAcZBrLSsKkGYTZuDdnDGA59Yp",
  "key14": "5MbAsh2SS1UzDaoFizn7ivD9e7Y8YfR6HQ4B7UVb65EkHbqKF2hJYSkDAcQH2t1G6cdtCH6VTDHGRgwBiQ7K2EXb",
  "key15": "5c3c3RaK9F3ueZQzc4uBYRSB1qiJFUzcCTSD9764Aj3k7YZ4VYQCqKNG4Lzpa2z1pdYVVkqgtvenHAX6EY3Be5sB",
  "key16": "5Hhn7tU4T4CkBhE6tgUeNCwrKKJbHuDLf5iAGzMM892fmUgNsyUULgmc4RoxsuC4ZXfkzZfkf8XCwZcMVX1kg2JK",
  "key17": "2kuNKqsWVtMda7L231rdxNcfp4qxGmyNhURWaDwb9r6HgggB3dG2edvrwBZiUC1iTDT7CkES2iX8XpPya75DE6AP",
  "key18": "HtTa41e1ZPACWzrAFpUruLGq1LYvzGLiaq4tdgwuSr86o1pK9SnrjxU1qz2fxqnnXFn9PKvtF4WLtKUiwGiEiTJ",
  "key19": "2Q8wDEQaFdFh4woJmsEsRCX6ViPag8vM8SrfZrFJqf5mfgHfmduV5nRjmSKFw9dkbhqg56fKY7u2dUibLtfUphJU",
  "key20": "7X1rSv5QK14Tg4Nev7Pqqpp3dzthqpPA7LejpvUMU3ZYxpezCXAmqSWLdeEk8bpEDNNdU4jdTyr3HLCD3tzpSzU",
  "key21": "3bALEL2hbm1YvK4v8MVTt5ZnAdTBro1DQad3dJovD6P7zYt28Svb18iGsCPSbghs5C8qBr4o3Wjqab1ner5AYeCq",
  "key22": "4v6JayBvdzrDKPmTzF8uRfA4iSoxKKZLFP2u4C6FjQD3zwBLneyEe1vK3F9nRkZXErVoSWc1uqqYMy7G5ojgPJtT",
  "key23": "38F8S7Z1LUQzqkReRq1pdQLVYDiYaYUtyGi4YtcJbULMLAP6NwRv7tRUvm6mbLF68Gyya3DTGfPtanLVZ5L2Lk8T",
  "key24": "2mHeNfXF9GCu98FnQiQ5P4g3rvmCR2TcsExgTUwNWptqRXK6amuttRP44DmMwHxPkwiN3aRyNQZVYLjNVLxmoG29",
  "key25": "F3Knz3kyQao2H4jhmqv8kYzDxWJdvUYPbDTHdxBVGR1gf8hxGonrXkKN1ZGfUXdeeuUpmZd8AUWrcqShNEPqMti",
  "key26": "52tkh31h2F81cfDmqvy4TYVuwkatHMC9KrRRoTHWyimhqPyoLgCMVtrZkEihduzMzJFTrnAPNDxPmyKurtTC4gHW",
  "key27": "485mAXXZBN84gRvXtczJvKkwKBHCa682EEw12CQGYHek8KjKN8LDZawwsbvthazWbYfF7SM7GVHuLLfvNB2VjXWw",
  "key28": "2DHADZHdbaCZbByLiDhkSs7rdfYYn3Rc1dy4eAEFP93gvRDciTdUyskGXfxJ4DjmEooQzabYexeovGdKNb5nf3vj",
  "key29": "4EFJFb3KnqnB3buiy63PbuuXYtLZu5nbnkLNvxSz55SwMKEgBeAL2UCu8JSvJG4zQSn6SgX5jbGmBZoCs7E7SRMu",
  "key30": "7u2LzXodJaMz8jyhSwyzY1fxVtR9roSAn7hsAqV5c56aokBjanQ3MmKZzc97QriojEYrdM61tYRAxkKb12jfgF4",
  "key31": "4o5RqSaUQKQgMrvmo1KEP5ExVjsXpGySaBN4U2cauAEHTvnWrynqoQG3QJQcBcKBspLT2Y1DSV2143wagcoreqNj",
  "key32": "4MU6qymDAyUTrjFYCkSwZRgPeacosS1h7PKfvqo3aixMTcwgAdW1V3aCtxQFBDQpCnovkWm7jLFK3GJESu36WJJi",
  "key33": "4Himojzw2wqKnFR8Ue3B2E2UyS3zEd3vtqbUp8YEQH35cw3AxWbG4tNGn8cdPTyx4CEtjE7svMrTD1fevWgLAHpN"
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
