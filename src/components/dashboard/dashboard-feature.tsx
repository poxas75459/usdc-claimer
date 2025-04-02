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
    "2w8zQYzyPtKBjyPfzZM6GCqPEMMuQMJCpf4cAT3pdWvUUWfXDLP57vbGJ9BkEtYqZwsmcuX6UA7vwnFXXzu7mr75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHhKv5DCiEdeAyXueZknhwLGgWx4EHLNmtLq8cKHsBUWbpHzayCMJ2HjS93aA6wN62bzFkSQhrTrZ5BpgqksdGi",
  "key1": "42GoxPrkoiCQisognRQsUnyTazh5Gr43gtAyaQ43inxFkpdTyQkf5RNdqTs4e5CWQmUX7bR7sepvfNAvvSijHL21",
  "key2": "zXpjBEcT67Y7U2DzQ2SaMBsNo6E9vNmmNttT3esrY1QU9VtJVw2wyNAtHcAAWUmK8xuWTmKFLhCXFboKUTECboF",
  "key3": "41wFsYjMjoXfcNmZp2Sf2pY9wJgg3oXdPeqeaLyYd4ac7ue2Fiu4XSyKinvoa7gmaV9N5upiSdtgioTgCf1uFrSE",
  "key4": "5anhP6QBcuNdLoumAsTtypqoovc2goSX9Hw74EX1DWUYp96KutJqeR4iygkoE53NoUCnmPFZAu3FmrEv3fKJyzm6",
  "key5": "4povRabif4Si8FnbBEXAxPnceUttHAetFP2CPkyHmymEXGr738BRgfhMt1ZQuwtCaUjLAK7sMRRnkQzzLxgUPeqp",
  "key6": "3Rx1QeNb9AfUWTh5RC44cD2dhckmCupZ4uMUKoJEWSAQ1Jdnp1a56TM5mmgKNfYuYSz6PcJpsqH6NGqJUTKsDkZv",
  "key7": "21WusvnqqffejmYrzVcsKC9WFo11BKn9AaWWJ4xX6HBtQBkkc2JtsE4erBTCQeAyJ3w1E1G5GGpqHnfX1H4CLrJz",
  "key8": "3pzr2tmSj6cctSHAtQey252iWUfpHK7sgKK1KH8oGv5vocAmKGRR8RVUozjHT5pFwF2rD3zTH84ZHfmKkr9ASqFq",
  "key9": "2qtcVeZL6oEC1Ns4bQjaXtavsCSMMQeu9PGZMXw4qWAbkrfVxHGe3c42K6TU23AGnuxnVkDfH4CZXKQTVdfM4xye",
  "key10": "4vVRpqgxNJYn8qYdRjW3r6W2m2GGYBrTiN75nEEj4s1ajkScP2nULYFhSZNBoriFL8JNg99TNkJ2FVRhUNweYuJj",
  "key11": "26TCY96TXfGQo9cv25rXtCq6rW9BpanJpbzR42afTpQJP8eMA1jSHPdArbnxMZSeFqBQxwGkN7xmvZ16Y2WqTcMt",
  "key12": "4YtWvz6sQqfn6E5zrRdgVPbuTVEeBfcbpKCQgnvot4Yvu576ai98VKstwzgNAonWBfgWKGe38T3TZnfv1mfQUqxV",
  "key13": "2nh9SKRNXzx49AEyp4ZDCgtn8KCPeCWBnLVZrMr7UZ7oEqVfVKnUvKWWeyvCsJkiHX98pcWJnz1QrfpYHZcEaCJx",
  "key14": "5TES3U3hwKpPtQhn8gXdtg1pGU6m8c3Sk2Z1pd31Kq5uabViX1cDoZhpdFHZkAuWmZka2mNNCqboMt4ZxeV2jfu6",
  "key15": "3jfm1skCgYZSju1cSkWmqvXZmkKjaEB8ASDrt92cE9dKsYSQrW4LC6C57PpigaNbLyxxxREQNf7NjGv7xrX6nnr1",
  "key16": "4GiG7vutccAu2Evy91gKz3VornRyDKZNCFpPxFT28QQ7hduxcwYsQ74QenDR38sPneLs1Sg7SnLdMKRbwTxbtyXd",
  "key17": "5FaHMCKhr3XhDgrE7LYHCsy2guYCMHzT9j3pwME2DXP96FVbDVwjyFzJTJrpmvHQStgJ3KcZBnzSTdzzwPm9Qeuj",
  "key18": "3FcPa1tETajtdiMvraVTjYKPnZQsqUJWWMAT6sLwLuGPYgvRoWrVbBuu3sTjzEqEaNHgudLwL2gTBvrcuKTA8m4E",
  "key19": "3bjYVGrREbyur3krUAJH8idQKgkHBJrKhj3AmzKYHe5BhJiVpXa9kTEE5anSyUNkLJ8sgs98PZhszHMMkiu3DhFi",
  "key20": "3aL55QDiAnM4XtMn6CyQrQKzu8VSG4rjXaTgxvxSL8RTHyyKaDBwhHotEpSF2ei7emHurRVghBt1SG8pc56BY4PL",
  "key21": "3PFpVfLyao7byyue5ELF5q7UNKwTXHZdkH7oGmsCougBRJamm6RZPUhhZw2YBpSo9u9mSDJGjyBpdipW9kgxmbeK",
  "key22": "4SqM25LTDQ7HPZxpqw9hWpdptpfZQ4DopJfrwL7hvJ5dXsZfqwZQJiS5Vxb2hqzyD5HWP6J2CfXUm2na8dssSVRo",
  "key23": "35aN612yyeQpx55nX4JEcDx7yFWrkEApTRFx3WqTucrqKBmM98zEj5SULB8n6UgPx2sxTLHU9Zu7LnCruvqStiqh",
  "key24": "48ErGDqzXvAHG6D4D7eCem8rUUVYh3xG8igX5oREixrWKdT2GkavKWuvPDbwe2drvQQnvThBRL8iRErY39UxXvYb",
  "key25": "5qVmTD3j3jA8cFuzQEcYw5n8vcngsxY5HtUTcGizXr8CXyiyr2xpcrLDe3Ye1C9CwiR7ztn14yXNgzUb3gdKk78B",
  "key26": "38twWH1HDFnbWCxKp6vz2YngPCnVAkq4LbWh8ahnBaym397dKoYywsPokSpovWXCmeezqJZ6uh5uCrrHFjyT9Qsy",
  "key27": "5g8Sdw9UaEMUbkQq5RNmGobSBZukjdiRZvU1KQ3Ms3W4gWHFM8fbMWhSG611HRzPK81MfqjRN39APp2QRv2Mp95b",
  "key28": "5KtTCAJWQqUyrKFqvN2FF6RJQVVVeVXppAxnHWvGKcMqYdgmfi4ZTsP5BH8JFZME8oB3GAGitVpECBqde6wycjWZ",
  "key29": "4Y7sgnxe3eT7CTA8kHzTG9PEPQpKkizHvGfCt2WQ3vLcu95SpK8nyx65eDAV9728qQAH4j7gV3yE7pRRvMu1AZne",
  "key30": "6qRApfzQ9Zzj6DZbQAr7vWia14awVpCoNH8YrYmfjknEYTtTk2qGjHeEYhFHTRKw2Cg8C5fmHtjqQ6BdFnPwg1i",
  "key31": "4e42aMvcuPkNT4LyxWzCzpRvEaNLowqAXZio6fgsiYBwPDXYGkN7n2DKBBwBvKyWpyL8trLD7hzUa7Bm1ctUjk5L",
  "key32": "33REkjUb7zpwtaMyjwnG6onje7B4B4KLq83JhXdkPVEnf1EE2jBuLZfEyXY7sSJDHqKUQdEz31L9ADcaH6jG9Wfn"
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
