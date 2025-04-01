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
    "UX822MptNqohLjvrv4t6qix2ujRSS3h1vp2PsaUFcd8Gaw3np9ytyDtCwqrWWitK58f6fTtbSxSkDvWnLJgoa3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H2ADTSzC7vKoTaWrG8htijF9vLEz9NtuCfg51BpqTpTzZBJxDzVgcyEFjCNi81Hsw9SbMZos6mrvhGsVJ7s7k11",
  "key1": "24F47rMdyAfg6xzsdywd9oACW3tZYqdPinx8WL5sCKigX4k9nexwVebXCNczL8zE7E5qwM51FXmktpTuCLaBZJ6n",
  "key2": "2e2HZvZEJEzKxyahZc87KyVhqtLZG4cqYxqq2tSuSEF3upVmeAofEbczW96zF2MPGtbYQz3EVpva3Bnf41WDqqX",
  "key3": "Gzn7CK6yWxpvSU5tcgBYGFZgRajGD9Pk44QRnGoTih6mo7vYeEM4YFb4RHUWzXs2cEcMGKk4vkmyFwZycVFhqR8",
  "key4": "4E5QisCotPuwxeR1QKhngMLtw7jtJb4f6o4zQHJXwYiwUPjkRuT2BdURmGXrZf4d5uB7Ey32NVoLvqLDKjwARvmn",
  "key5": "8ZNHSG6WNXgJ93ZDCbS2id1uEPMHx7Nr1YxTEFWz61hcXmw8eqYgjH8NykhumUJJgj1jwySukta6gMduS9ScvpB",
  "key6": "PAPMMUG3gaaZxDjRj9BixUSDERaYXEAWCgKjoZNuyqqjThhQxFqrHZMHDMr5pCtU2pS7NwcyztxKVuGdyfzouBq",
  "key7": "61WjN6SXdhLFShKGLFojpDFFQjpM4A91iedz5AnYRrmiuzJPv6DbDvBDmDoTXicnenoHvQ2ZBMHNtEn2fwCDeNC9",
  "key8": "228TcMHbK2tpxHqQoU7ebJ59TuVjUNx76T2Fu3XqQ3qiLUkC7emTm2NScD2BhP7CHuENg9AGDFa2MJ75QNFJUGBB",
  "key9": "4AQUYXMpznFxXngV4Dw168eufDYKGJAvuVm87R2DMJYHSGUpzhxkb3Je23ug8wPKaEA1KwZBNqgBFgy233dt4ZRH",
  "key10": "5Ka6XLKqkHdf4DSXojomcaKYmrmVHhqmypwWT8RHejQzxu8YmkC9aCDZfyXZ6fac9qyadYyCtsFH8MFtUSqUPDRa",
  "key11": "4HraMsYTi4J6U1DjQDzwzN1WXTee7w37QbTQDM8eSkqWMRZ6L44k7ZaJkjuthGHnQrTAbSnQzBMU5tCJXfHNNk9w",
  "key12": "5zRUMvbU71ky8KNPJqPTcMm6kqcdFrBoW94miKXJWMB1VdqmmURWxC8XMV59ZGdRwtFyUCe9KJVCGUc4WcRmdwgc",
  "key13": "3sjFkCA4AFthm7DBCvo8xr6qpVHqkuaR7b5ucLF6MudVY9oThdpgHs6b1L1PzUGMP8VBNwUfT7fKzTwYbkW7Yva4",
  "key14": "2q2ZqiRvmux2WhMCHHjjRdTPCGc1MS3EcWA1BhxGiD2s2SYMVAVFKptNbGAvXG8rnN5VurjrJsNyAycnQhyRqKRi",
  "key15": "4bCXYSYKStYvy3F7ro75xGahqKqGCYNDKk5RU5pWRifgeQNyGn1xvxANGr5zfj2bAoSMx8mfCYCoJQgLsrEUb7Fe",
  "key16": "492JmvrGsk2gt2SXbhmu61H6PPXgnZYrVBBakxYUWCWAP5j2df4yeHD15HpawEdZMAbdASmgegNSqWB3j46LYydD",
  "key17": "5hpCHEtufhaviq6KcNVzibBVHjL4sNxwksDeTtHV9JTdi9MhpNWgc9Esczs66PxSnzWFzrsAagAmiHf7gMovasuu",
  "key18": "2yho7i5g6RtTiaHxuQGqN6LmfBuSrzXEbhPz3Aq5RPQJkdVYqmiih81qkGqndtebHKb8tg149w4rXmLCZHBC8xDZ",
  "key19": "5AcBgfo4SjpMfDH1bX24dGqWfpBy89sk4dU1pJFCWkTSAZe4ZfpurdhqTybN4yz6YcpFfA82W24VW8oJ5pvyJ3a6",
  "key20": "46pijdjfkZNuuxTgzbxRFjbf5zagah4b7sw5BnzYcJhb1fCFQkdQwtXuEiUS5ipF732ccMaJT4zXNU3JgQqkR5Lo",
  "key21": "4D4xbE9BALZRdEXQY7WaTh8Bs1pmgtyGP8vYg3mQKoxvqdVzCQmxukiUj5CU8waXmZB733o2wH2ewKBgzUwynTHW",
  "key22": "2vgmULjcozBxkYciTr3k86u8JRvymFG3obFGu4QuL4X29Zt5ihcZGv3GVENudcMj2bLjLpvdD3ZEM1qnBD44yu6n",
  "key23": "4yJtzZMGrQcVk363LDBjEMtAJaoh38P3zAWCiGiYdYaeFuBLweKYNqb6YaEy47LV2eiQsKo2V1ydsNYdkwmADtGv",
  "key24": "5vj9r2A5gDms1LhUsPLvMvhSPoRtwy1fgfSib88c5p4bSc4o4L74i4ayKHyAdDRW67fzE443DTJkQSDTmEZANZ6u",
  "key25": "5iWgHWyRq2qs7SVZrwThoFFTrv7MhXN3Htfomkyo6YB8kysYBP7fVuhAoiFQ6tPwgxBWQcVbo44p2KQF5T2KymdT",
  "key26": "4j3zYcYaihPdo8npfHbYWoeLv2HqC19A9Z9usw2ysjC3KsCL6CTNbwgcW4DdnbRVsuxFtjvDJZWbutvrutWkVZQw",
  "key27": "3u4EcEXKv9U8w59cENKX8EAcE2UTe1azDFgQzxzFepVEMZsuo3TtRZfk6yGj915noBxSZ1jRTxXcFEZJVZFLytF4"
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
