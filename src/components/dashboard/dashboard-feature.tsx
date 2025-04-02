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
    "2EAVHjoupqstT95dpmyiRvnNhz3DkxFHFuMPtaegVKkJ3Pa9HFr1CSLm4BVxdYyLcYgFk6xPUVWejbdztGTFaD8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6G7UrHDsvLjrQ2AF1ocakAc36KdjNGS2Uh13SnPCS6mrP287AJhmdbB4oBrvGBbXRXkYKooDLVWqGz6DtDPS5f",
  "key1": "4Yozq6nacjwRGfE5imYmy2SD1sM3VQN4oFJvWh9n1vfJAytksn5pMzeK1W4hNLAy36CwnGtjikkzx8cUoSUCVtRg",
  "key2": "vP65FEoCBcBHS2FV2X5vovGumjfZbXzFmaEwSyXAw6SPYsB4NwTosZAkU1DR3SYx6dBp6VvQEgMjwaDFzLBLcFF",
  "key3": "4qCwbiipUQVQMYXxS6SEFRCd86XzXd2Vfro5nU7zooXWq317r6WRgnie2U7afaP94qi5HPdT7rzek6Eq1AJipu4G",
  "key4": "n6KwwtkEKaqfhpqnvmvWvnAgNz7SXewRiSXj8PQXUd4yAsZbvjCpXUUPUAS7dRJ6vwLDYjKNjv7BtEiv4spPpXF",
  "key5": "5QdCV7MpWBceY3638KwALGJwYjVeG2cG433KeSNc8XzyGCFoidb3P2srfDAxJJUVu9zPEJTFQx1RkKY9xquB17Bh",
  "key6": "9eKpEg7aXD69UwHNhUXTgZkwUnxDyJdiRbHNMixC9YudcmS469BdVP5P4g7ow4gifsSisDr8QVwEd7jEfxAaWSi",
  "key7": "4TkFvKyiC67QHAMDY9tKaFmE8ZmEdCauu8HEca2VuZUjjnRVysdEko8GqCyxnN3FAADJPTyt1g1FYpBJay1N1muR",
  "key8": "2AYV1YMDb5oF2WQbnUwamusUNuQrvae3X1i19H3pZYsebNrZQE99M5QozJrDUtuUuGT8Ym92VkhJ1hQ2UVy6DgV6",
  "key9": "2rgTJtjnmTru7YLRk9ZWgbAskiBgUBCKuDx75M8ht4qxRcFoZKXkXH2XUS1gEE4ph2Xf7bQBr8H83pA6xNq2HDwd",
  "key10": "5qzdRu5BdJv8Pex1ahYsWdVXvKWQaN8j4niUeHdzfgi1VXCnvDL8ScgqQwfwahgoK49GgD8yMwSxBnfjtaEX1jp5",
  "key11": "2zzFUMfTYw6chBiakXxCBQG1pyKZ4Y39BXeREyqgBGT3xxSLyWL28NTJ4abTE6oAuLFVSAsgMjqQTC44XCi7Rnci",
  "key12": "CHRUYmRbp4bwLK69dur4E1QQaXPcPdyXwTrPbCxJWr67kwgzPfTybWbNQtnMy82k1AFaGBCcq7zKfajrezQuh4H",
  "key13": "2voyTFv7b9BMbMFkjEQrRrQANeAuC3pKf8ZytiearUD9x6MJK4DDverRY9S3fCUcfyhuhYGe4WQrZPQFVxyn2u39",
  "key14": "3iaPDAinQqh5iYjbTGkn3dihskD57Bh7hRwV6LxhfRmsS9rA2G4hfUcxAC3FmNUPU7zNZqo1BpqbmcMqKWQYg99x",
  "key15": "mMbZMYxfaTqf6LCYE35JZmN1RytuE3YvDyjRsXj5VXFCFASuQSVYmE58YECFMq89QnevWjCc1HfNa8W4C8buY2X",
  "key16": "T24eKCeHFLbFhcRe852sYZQHEjj5TtKkrMtaMmf5Q9RQwo3RQvKWzyvBTxGuFpviDVkMLmFsXe5VEEYoKU356YP",
  "key17": "5zZyuF5hDhBBgw7cXuEHmnVA5bAKSKY6ydkFYNyaxzfwJkcpk1k3kV4v41hXSFz5e5ns5g9JGatPuEiUEQEC6mgs",
  "key18": "3uVEnEdjjcFxMRx5c6uYwwLpRJGbBkHmBp1dCJ6ToFKdoQNXXo8P1Uzx4MnLrTKivgTaVB1xcy4Ubwd2yNuvTCot",
  "key19": "5u8osigd5pUhFaLZFrE4wDJnZHj1Fw11wbWBh2CXnsSAR6RLTyvuYGcucTGa1gRi8V5UfKkJjpLfHKC2tvayM4WN",
  "key20": "tKTqwStz8RH6mCqQcL3beRYdSoYw3AWkyKrEgZaiUZQ3PzpUoj8Fy7J6g3yNzQCwPHxpRU5KedGfim8C2iWU2b3",
  "key21": "5RCecQgrqYQFvfQwLkwXy5JbXfFMhZZyHGYc44C19Fbdr5StXY7hCpXSTRcfjEdHyBooX3rx15pdC1qJJT6SW8JX",
  "key22": "2TKc1CnzQUZpev4MZRLscSuHUmRfVJJ77Hsnco4hV9TMpq3xnZSrWnof6V1jsACLSBQJsHRoemc5w3CjevzjEaHM",
  "key23": "5NDdzyFYBbhKpLWNgsSm9LGYetietymX2JvCtaPqSGEDpc89uP6Pp84s7DchqiddoV78nQvKdJvQzAuqU5xeCnnf",
  "key24": "4YqnLPJhjVZFgnEhRKtW88cT32Eh9TTj3e5bMDVernjLJkGnL1BKes1wuH9AYX3vvhB5fGD3zgYYn7wUZPnFuvPe",
  "key25": "5THZ5xVNtUcHHeG9MqmoWLkfJX515GWAWSDacjMrUWFFNjiTUcPWdNyE3idgx5EF7fBuZKa5Xpv8M6RUgCue24sb",
  "key26": "2QPfTxaUb8wKwGhWNqs57b5jFhn1DBVQxKQiUM7qSB6iJn7rN6dZ5D91xxJyfz8TWajJriHaEV7EaUCkr1xv1ozs",
  "key27": "A1fz2hR4WYLSpxa2PGbhYRsURnKE7TSD8AZXdHBUaoC3Dzg2uyAp8U6fw9wsspLbXK3QbKaXHimLVff3Gsy1FzE"
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
