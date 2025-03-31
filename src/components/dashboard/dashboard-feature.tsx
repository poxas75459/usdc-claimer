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
    "48kxZJoEQEH6ujs9W4M1TSf2MefUDHQ2DqrB51vfNbUYz3R93foYDvPwM6DMtbu29yLLF17ZHimqB9JkD8jTPg3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33utwVsnFwT372eoLRSyDXThVvJjWWp9UH9giJoyx7BEtnoFsFLtMPL2iHL3tV3KhbisjsktaXFLogKptJ8xVmXJ",
  "key1": "5An7SDWRFYgX8WAynyJtowwLN78DWbH6ZD4YcReTN6Ya31zvLBHdfYNM9uzL7mrWk6e8iK1ucj7MkkLG1WAHr5BL",
  "key2": "RdwZf99ZjPoAkXg54Lwc131jrnUY7kyJUzLf6iQHGW4AV3bYaPvr3oREZHnYJ7VhhkGoWb2km69ssdFXTAbavZd",
  "key3": "9UZyjUaREZBJawqSqyAiDzR4Bcesf43bjgnaK721zatVAGSkwYax6RquGvnfKZDk2Z3MLg9qg7XT9CMwy9oQsS1",
  "key4": "4fvwNR4LMeNWm6vRHrHBetMJ8ogsyvZ429trksgCXTfpBhVt4ZzCzGjRXRbQVZ7TKbQeLyTV5kyYbtaBdXJ5YTcQ",
  "key5": "gExa4vagsaXtenLRfKMCnHx3r5emn3pzq3jts6EbfQ2TkzN9S2qoJsgFC9ppzuokoKNVmXPDFfhhKrBuWG6poqg",
  "key6": "2U6B3Du1jY8CebQLmbKrNT6pT14TRrAMLCp3MdmrJfEEAASpCTsc8J2qGnPkfR99tDH3Mmg7CVtRngcE2xCdBT5F",
  "key7": "28xh22m5pC6AY7NYL7NHGLAqsEEmU7jHoVFGiNociSbDVumkerQ6EQcAjYFwbaYWEnzHAjqu3EUBjhw15zXv9yjy",
  "key8": "3mmfspRj9jUNd7K5WY5DCx7tpj91te9B54SGD6EBccWDQaTYxTfvpEwsuaRLgw6fGG6mgj2a2HJ9scsSxgDWPGUG",
  "key9": "R49nB2Dg5bEti42uwh9jBQQT1PvzjrVYe2LqwJeWi9evfc8D6gQnRCk7R473CA1tZpRDnvmp4Qpmjgg73suji8U",
  "key10": "5HqZqSKogbUrJKyM65sptA7vFvuZDYSZ4ynjEtiCGDJvEu54SGpQhhdsjxLPECVzjDJ6QNSYH8RfyzEqL9wnsdVz",
  "key11": "2AHe9oHJ9uE28q3VNMi2sDnr8Hi2f1PPEwgZZSwCJowR9cC6ksie5XKqqzT2rXQGPC6TPxmBjj3kKcb9bsRudzq4",
  "key12": "28qHAvxmAhhd4rNJmHo2fPRTsSnf7HTnZt9TkY4ZS243Mm9ogC3rq69SRwT2D7qgpaYzkJsGshQz7GcqNnysYhCa",
  "key13": "5o6SZwYZmUrbSyEPJy9urVKnkB1rUctwnJAbnxKoBBrn7scTjydE7JdCUHXpvje2MwqZwzYhVpNbtpFupC9pji1",
  "key14": "2ngsq7ZLjoSQHiJ7r4hK1pyP63nEYeXeZAFD6D6PT8N1nXh74qB9ecPhd4uDuQFkspKB7teqYZz8xaZ3wPnrBQBN",
  "key15": "6xWXTJ4QsfFQRZqsWj15wKo1r6iv7RfTjXCteiKS2Apoq2RFB6btscpnDGoecsbbLAzrq3M7B1XKhUTtQXioNXb",
  "key16": "2ydxzcNrXzuFuGxWAFC67QvhVtvABQLxPFMTFHcVjmUWeY8PkGJFGAfVZvN4Xhd9RPAqjzjs1UBTUeadd7f3hNAg",
  "key17": "65cjXNbs7QJntJYoAg6NdUaq96VC9KmHqXHKooPDTPdAyBzGQ7X6Rmizk1GTEiuzjK9hfdXavx4CczrsUEXbgeSe",
  "key18": "4pDpUgQA99ivTvU8RQ2mkNXuNHhNQCWCK62o5t3uiQECDsnDdWasPMTT22VJtwjBKuLnyrNRkiNiHesPqu4wGz7g",
  "key19": "36fbQ7zPBXeuDtrYqfHiwdrdTUHngE8xvjProvHtTW5pXWPKLnGffxNEWWthuqu4mAys9KWFLNUaYacqVzVUKuJp",
  "key20": "41CMkBAfq6LM8pBP7BoiU4Lc8gDfcVPKoafXXQWHp2xjEhzWimw6yDfxrJMRhc7AwRZajfuYXo4g7eGxR4UFw1pa",
  "key21": "3CsWgKusujWxajkZUTtwjFaNu2RCe7xp98t3afV1bUA7347kRy4TpYEjfG8wbDCnTHuHt8xSgQRALB7qDSRq7ELM",
  "key22": "XoUcDswZooFAWchqA6y8Resp6PsJ3SsNsRMZfBNuKu5D7FSjHX8AwczbrVFfErs9z2DzNg6bcPCj8uDjQYoDp74",
  "key23": "65yJ5yJ6BcqbDyQiF1v5keeW4E2Rmg6r1vQbKsgwFEpngH4RRsmSx75nqFctCekymNngiEyp9w5dm91Pwp7vEQjH",
  "key24": "5R5LaECkoCCmQkeTxCBKF2BWfwApeZ8xGJQhFRc1fQrFViyb6rsHqFtcgCAUxoLEug7UUrfKAWZvtQjHVr3E9C5p",
  "key25": "3TLCKUBTtoWUb9ouQvUSMNg7GEso86jnj87DbbVc7vPcyHzcNG2mvDZcuRyoP5Rsc4MkaANLvJwKUV7EsMbF4LYL",
  "key26": "2uhbfWWL4hkpMYXTftHjvbGyCz1uQJwQB8AAbZs2xj7TxzSWuFNSJu9JquAhqzLt5F8cKdnB5sMDduJb28PG5u8N",
  "key27": "39CnZiZ4WFCctbj4AfGhxUG1fkjR7hzVQfyHoMECCiixTYWAby8FZLm2WCKXCTeRfoTXEpyv49UTeCduZjorSTV2",
  "key28": "4xqefvVccPSCZenC58H4tTHh9ehu4LRn7dynihd6BhqxCgLswmAn9EJKFkPDE6EM1wUoDg5Rji6dcTdzdTNr52Ae",
  "key29": "5HshAcvMCzHwTmtJuSZZnjqQgHhtNPFair8DzJPbXMutETY4kZMmaQacCeou3RNsRMbW4Vds3jesYPisNmyc88aT",
  "key30": "5i6YJJtMLvb32uZpfAxYvGVHdxdszkiw6tTXnNA73mi1weR5qtPa9stVXRBcyuqyN1JaWcWL7rGSAnzNzuYbK14X"
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
