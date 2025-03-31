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
    "iEQJpXh31r35B3tFREhpCXfMrb4hUNHsfFnYKJYejtAutfWHQh9g9XeuyCrsSC1vUoMTd5oBp87MSmpSvtCAhWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dgguu2p5ixfNQ3gxmg7HiM3QK84a32NpfT6rJpgSGbuPzuhZJm7oPVvUDnT7G6UQGtf4A3cqEgHTw3uApyMbXEE",
  "key1": "2ubFTs35PuLAdGM1j4zksmbJAYGHbmsKUCc6sQwY3RXyRepkuiNBgyMkqRQPLUdJxpYbScDcSaRJhYVABgKVV49m",
  "key2": "5AR56nyxU5AE7cj4cwz9f9vr1nLfGXzcuCUJMd518P2oARp7ice4jnDBgtDr9RRfTnzdqj5thKKPYqRrh1NHfzrz",
  "key3": "4gXEELQaGuhzroL9eJcnNRySUy724HmewmMPfLFMDKTHzGETQpDSqCbZRsJxgtLyghBKkG3APbKx3q1kXQ3cUHFJ",
  "key4": "3YWDpdF8ve1Sz2j59Y6XqMWCNjLEnCdRDHLjbNm9ngHk7aAVZBDTgfDew6SPzULoTt2UoSC5XCf89STMDfJ1esd9",
  "key5": "3inoeb4LTBi2jYhiCrtGjR39Fo7geu3QbvGJyWewM5854zTEp1tdYUU273c7WJ2idcKfumGohnymm7zi6M6PzCuk",
  "key6": "4Ln3GJNu65FRC2w2V9SQd7UKkn3LUQbQXUd7c7BCVLyQiChfeWZeAKwGWAULYENM35kfZihjDDLo1DCFZbGKFraB",
  "key7": "3XydZCg1KUtfsSMQzyb7gaV99gtet6EdS5xzFXWtLfTmuePxe3PUM4DmsX98cRdtjMFZzUXxNJBawBeu87MRV74P",
  "key8": "5QtKbkt7cbCrGwH6RmPufpo7XsAisFuSmcHSF8TtSgYzFN6oPGg5dr5nDKJbcDGgr7zy6D6psiZKKVoHjh5HHc8m",
  "key9": "4pCZvX5vdh7GXRS3BUg4g2dCCsN5jFAvSPDrBosuFmTotLhSB8VvDwFGGJgrNXMHRuGnmZrgnMuG6dVeacycytSY",
  "key10": "M9awTAJ9dbjCjJXvoA7e9ootSh3S6hJXjPoXrEpeDRepzyBitDC3ZnFdn2d5Y7PgF6wEV6DcyouActnH3UQc3QM",
  "key11": "5Kxy5ezrB1L5xkMy6GijzLA5JnQTVSRJ1rHzYNXP1jo9XBrPmZ75WVYoqZRXtpWjdzj6GYdyygu3FcurzZuzawY8",
  "key12": "TbwuSxYs5KWU8Ak5bFZLAY9wNazM2qrWucj21McrgBUTFcLu5Z4BEjkRWFTJPLZ7s5onWwDVvoiuhtGG3dRsjNP",
  "key13": "5X7RsLnmSixapD6rsxDhuPW2fFnhFJ2Td8Lyj7HdRfBxneH8sZ3cUSVLC2iSe7BbCoopgquPx9xfCQQyem4fdcuD",
  "key14": "2ch9pXGGzgTqZXwF7ekDATpUBsBzgaXPr825tMA9nXWrAv89AjJ5ks6VBFNzGyygiX97gZKgHdTasbFhQUBHZ9CR",
  "key15": "5v7Pt9sLBB5YaLKaEcyPr7goGxubSUyWNPoxLABRdPCkkAvShzfGVU4eNMKXYiWJXAo3byx2rYtYQJ2UHJ6L8SGX",
  "key16": "3sZFXnLuQawhGT1NVjfJ9QeV1mffKhV4Um7Vhc3aA4isaYYwMDTRxhKPxR5H2cZUqWcbX7uxtPv6SLhRB7BSFKXL",
  "key17": "5UvqPQYEn8yy7uzUdbB8fW5AruLT9HvYBsYakYn5EDde2Tsi9ZfhetbuJrCuA8UqRbM2C5UM3Dt5Uv3BCLyKK8dm",
  "key18": "5MxHZLAe6nPV6wsHFtPZVXpj5zVygZP6YuasWMQrwuEXeyByYbe1PTmC5ZBsdhvDkie4gsivnPz6TUD2X5N7gn1P",
  "key19": "iK8r1hWqZSv1wUcDpTWTY5zwTZL231R1HoxUHyvyPHa8YoAiGXxhCSkSoPytS8jr1TGsSaE5SA77hRsefQScrgb",
  "key20": "3wMAhd4mePou8goafdENWceomy4ZSbkLHQyF8eWS75hN6iF6PUT5oFKLSQ7mYLY3hf82Qvp6uEivsRnCFTueEnu2",
  "key21": "2v4MdevPoq4VXKQ3QVbT5oLfxZg2JYAUFkVgTRjYxBi7xb9xrv16j8eYzA69unAZSAdrsFDzUboqXHxoGPamyyj7",
  "key22": "2jMQoJit6Bag2X3oScosMKhJG4HbsawJxvVup4fq7RHbEa1ob2tKf9WhZFzEVx4QnpzjmvDANY4MgNkPuGAGhvqs",
  "key23": "3sCik1FKPboRUMZ5UqchES5fEzrjrcpHidp99m1EYQhzsqMS3Y7WwzyvG9GZdF6r7H1DkYstcUWoZsQqvZbRA4BX",
  "key24": "23fTLZzdpZbFeNcDHkRvnH3bDi5Hp7YPsN7HVJt36dqKfVR8eub6hJsKBQJbnAyHVMEypqSBjJFajDyK7iaizDNa",
  "key25": "1RqReMmCqpXs1KqqK7K9Y1Mqu77AEdWArWek9M9iJX9WuuocLfA48X3STqQuu2KKbC1j2UhRQ9WnA9pZoRgELhP",
  "key26": "3kVrhFnPiCeUKT9iBck1YXYfnBGKNqtyBEzmTn2J9LpLvDHMquast6KEaUwMWBkLDcDqUTYnuQ3KRkgSZmNPoiwv",
  "key27": "3Vaf5idcv2Cr7wkPDykUhxcqmtoRT9E6EEVwijoLijGNhhVQBjMUKbuUTFaWL2HFLi3ySauKpttiHLHuSJoBG12f",
  "key28": "45VyQ9XkhAZTeK3rfhnVdzGq48tp9Fq9RZAgnpoxqhNNiHqbzVKJcVPa3SfDFv9rZkHMjHYa1cFjwPPTuiAPApZh",
  "key29": "63Xh1sJXDudvVcshDji24hGF4PXa8MTYFqq9CQS9PxgWGAEgTuWzQYRBXFvBVrUNqwVoXUnmsZpzqd3o6fdKCdE4",
  "key30": "4ZqJt2pJpetiw67nQVmqgbouMBhHjLfHAbRvmtpUoec7twwB1ujjmoucbszGaMG32EfJEVx6jDbAtqTEJfohUiMj",
  "key31": "ArjyuLYc9kox1QPMi2ngfZ5KuoyLnUV6nvFDcMrG36XaKEQLZmCA4J9d4rqM6UELUQGyabratbCwhzmbV3djQip",
  "key32": "2QgRQ67416SNLJ62hi8ZbPKsue7e64aL9pYaj4SWiHzKcTDQzmx8NesoYSYz1gmMXyd9Rxd4WVK7AWhkvxFBy3do",
  "key33": "4ZXpS2y5ZC6HDEETa3eYCHRWDkt2rdfawgzFs2RJoSKv6gfPu55Hig1HexWxjMqhYyPHCEZNSeq4xr6kqaGX3sAa",
  "key34": "45yqy7XsZmHK4pmPp6nhCwTecDkgSSM2jEknJKuRnKYVPxk1evPgeCnBffhpb6dJUomUXa9e2ciNiEBtzJJ3uFeg"
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
