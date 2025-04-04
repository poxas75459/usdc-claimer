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
    "WMU3PQ2X8QS6d2kvTmt4Ure9oKTkpsoj8UHys68TruCd66TZfiouFDCtRKjnKZtpckKxf5GjNMCVP3AkMzutTkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6scsiRzr34n11sWfG3fPXB8wSmKMiLiYBhHp7GgkBXWM4GZcozoxqSUopD5DsrnUKKESnmHFYSJg9PRbGrg3YPr",
  "key1": "SqCoZgYSKB23QSs8L4i1wr7CjmZjCf9NCq4mx9WsxER2rGqof3scqzYKuPZBW9pQkLLLJF46wayRkTvCBc6tLVk",
  "key2": "35nE2QhWYLTc8iAMZdcVjE6Lwzp2LXBKpqFAgRfh5NqEMSX6dyo2o1AcXBYsqNTN9PZx4BjEomr9vLL1R39qiTHw",
  "key3": "QuvPZefTM7oPxCmjmL8WM1zo8CoaRiTQsZRUqzvbj5HaCaadtt5SnSwjSi5wcL7XVU4CRwRwQBmeN3U7JFzynXx",
  "key4": "4Dd76d3gcr6P27jpX6SPmLdSZFEkTjMaaE5jF3sBiGFvWdEdWHdxQm2hxtHf1KdS93Tmf6bvQJdZR18HWoeiPBYG",
  "key5": "x1GqpZ5rXFEqzG9DeXDmzbVmntGKfYRjvvhZ1Z982N48huZjqqrbAo4bQbXTqStJBvL3ECNSUUTsvrfhL9HT2wJ",
  "key6": "41Y8Nn2mVRPUN7KJ587bGMAg5zRy7SQthEkJnNAnZwqmMQAss5CQknwNRLXFoWPreB6FQ7udQuocLvv4kwDekBoj",
  "key7": "buwEEpbCGPwYnZL1UZBR42hXT86WGCPv4bwvzzrkUDentHKHDWaMnJFVJSTBzNZk6VApCZXqot5YZoZHEXqDRFq",
  "key8": "ENRgNBQFWH8421vAAPxce6F588wEL6xQiKTfn7D7nfXU2sCoSvMKHhWK9LZgkTLi6dUc9N1w9YA5mLSKcPt6mHe",
  "key9": "4v8ohVqKnsUqqJTL2anhCmHT1MifLshq9n3FXBTjDeHVMzBfnqahoUwbTfwPuTKKc9a1gcroZgTcfP9XUoLD2ytX",
  "key10": "4bkS8tmwfr2nQybjKbSuiP5VYydU1oBevDFAAD1rvXCDhQp8TdmC72RyMaMUcrUx4UYua3CHv9ix5Lvn4ehg8YUt",
  "key11": "3QJb48dYP8mTFEKECdJkQxpNsACfgJd5ScFcXgUH2Me1TUK8PhrRbsxYuLMaLCuxPmf42XhsHKTEToJJfhxFoAaM",
  "key12": "5pPL5LJ4BCWdxnr7EHg2n4a3QmqENu4pLCPQ4z7Ltkd6k7Ar7vLu6Qo1Mu7eYXAgrRAUiPYEgw6MjXuPX7iCTNQv",
  "key13": "4qpRzKzqBv15wN8Fx54A4qWNBbKw9At9RgPD2orXRcLWRuZcyGut4CxSZ9SECGGtXatTpHvdDz5xfAYn3Ntb8Ehz",
  "key14": "2bkxdJQoQSGTCpuLiCCwL87Cce9h5y7zfCBtAJGr7Sh52XZSkR5essFebFWtiyY5M61USBCeXVMo9JLo8FneDMzL",
  "key15": "5ELHwFXLpRwchEF9UhaQpypGnJgrLzddGL4iCuy8xUU5wJPshBoBUwL6JcpUndUMnft6szPTMqBgPyuYyZ3ermN",
  "key16": "66G171ZzrUDiZipRePU7NsDbUAPmMwkyWbWhFkLnSN2eBvqBxbcJ8Lu1VPCJnVXWnsvjDs6YpP3QkNjntHAQPgyp",
  "key17": "3aVAjUYCGcvxs8KXo1JSmTMBa33XmNngmktAkS13TDxiLFemJ4zrZGuJzStTqZc2DB93huCsTE549HNhepqfhQ4k",
  "key18": "2eNrg54Bq76Y3stUHqY8BCRzqB9KVE5a2kqdB1CWV6mFfNhbAj9H8Nqw6mZrCyeph2CQAEM8NpT9ZRQN15fWkwns",
  "key19": "5MpMdqUZnVfMKsNbvGK2JWsqWMLkxn1DRyhFQC6Pu8zUCzUKkba4CSA3B44x9kbsTL3mRPubCXEHXEDGMK27oenZ",
  "key20": "LPjKqepQ1hvGdKEBTEN91zqPX1MrGN7Kc6xdwJJ6QPPnKbuxaxZ3PGLXjSYTPkiCXZ9ZBckrnC7fmRL67WARHBm",
  "key21": "4noena5kjevma3PAJsn3cKs6Hy212QWcsSqA4zx8M1Kd82WvE222uMmLZKMUzn4wNJvRLYtHNCBQ1Dsf6ZGF3BMc",
  "key22": "5heEHyUjhT5qRQksCQyzqVjBAoStu11vALs36ohHbzMNJ56W5FfffNbADxCQd4qAvbDddnnggw3jdprA8y2zjkV9",
  "key23": "5gcSRnx9BXuYJzW9SToJSdvyGwo7pRY2JahusxgFm7YCdzPqfMxj2bQq7icwY1pVwJYa4NRRM4MsBSzsvHceaH5S",
  "key24": "5CUvqSqDphkUQQGQpu7kyVTV7r2jrpBae9kfhw1Sj9jhcQHpJhKumW3UX73USBkgEfGBmjC2a5JdjbtLNPM5kd43",
  "key25": "62Ck9oXa1BRi3iGDxfXCys5S8A49oLEfabPG2Cb7SJVQGA4WFC314ndMz5qVtpZr45gj5BLEcwhqvJmJKwwvGWGT",
  "key26": "5sBx1Au6wYdKm6LXaxu89Zo6nszPM7ok6VyxQy4tLDg81yhmuSw5bpv6hSfdWQorp5ZVbTkusTBKKDGRd9sXScX7",
  "key27": "2v3hEfw26r6yJXGECfWxDjC89JX3Fksx7hx69nnZW8nWDXw5iVqnq31AT3iVSK7LQG1qxDnjEEuTDntQTj8YxUYH",
  "key28": "5eCpurPnbUsCDTLu52endR4yiX4h1xoMP9bR2yf6Q7y6kyaTtt2MqNtjJjeEpHdLurheJGUcxux3xcPXgo49qbV",
  "key29": "Kwiy6tYsjRXfUZNjNCuQ2BqLKByK3J4KbnCqsuubCpc1iNBywum4gcDovt6b2wSsKbtZY3ZGuQfeYhka3Pxdqxq",
  "key30": "3FfC41JBFZQCi1EAVZpg834pxUmYX54xycX5wBjdwiDWPbBuEZdb89ADvrUPfcUrGEXjU2FJbgoTgsmDj3DTMDTK",
  "key31": "7NJs2Ei9vYA48mcN3UuMpxuw5Hih2NXTtjrbMnw59RykxTr5eLRE5uLAHEKdatWRS2MFYZhfBwQ3QmtVr9UjR8y",
  "key32": "5w9BvBqnL2x4R8xY7zdZF7Z1qwc8Edbe9ByHVVynQV7Vrn1VbWC25mbkKraaQt1r6ugJY7GfYPEFw1ky7QBRxAkL",
  "key33": "4c1RwEWgWDfKuvH6NqUpG5qx52DbkmYVmS8k2pb5JVMCTgLWUZjLQqAr5UKFnU8LqsPpMuFoBxiWgHTZoLUN6aPb",
  "key34": "KeqfiTPZVqZXD1dj2qiZYmrVodKx1F5M3iPrm6ZFgh14Qf6HF6xSFYvJ4hY8WiTeaZHpG35yj1Uj6rZZ77gyjzG",
  "key35": "8uxMC4SX45AVGFki9j7sVS9aehzbVSVUEXGeJnEYXsRVZiGHx3DvUrxZ2hjKtHRhYYHQSYaospvf81p8Kyoj9ct",
  "key36": "4aAc1a4pXjUFA4pLXckcPFYkhARJ6CnhH1W8ThVzdzgBtqPHuYN48cTKWuy4L7sJh9ibnZt4WFDePVEXMY4qmywj",
  "key37": "SopoZTp7nBrvbzA8WkECCDzHjyfFzVjYunDNoFDBbqwbiRr58ekhgXaTgV5WxtUHKZfoYyLoyQStuwaPCX7kRWZ",
  "key38": "45FdxNm1zTCeB7wHuR19GWCSVvXW6jGziWpRFJH3eogBrQaCRPkJ1HxN9Y5BzJskf8mc5EY6tT1G9F2TL6XAnzKg",
  "key39": "BFYygFcjwQiNcoCCXz1XxRDio4RNsCZrYjyTCKi7jdG3UvdnYqwQg1jN5WTFtXiFPAMdB21axE38hired1Tsx5b",
  "key40": "ZC5tcShjF8ksWA2YfeJazA79xauVFJVcfHu55AiUZ4NJ5mzxqWYGSyt17teg5K4Y3FNPNpDK1L6rTXELJJc93Mg",
  "key41": "5YBbtaFDruTZ98LXicMaa9KJfPzPiw4YFHUPHh3v2fLxBAnT4FvTSd5Av8STnKqtwoqSUnjdVK4GQVqx2rHLTusy",
  "key42": "5i4MF4qCtfp1ZUUa7hhAJyarDca4dBYqnhgYD8qQJox3FjB1wjeKq1kWQcGfjkUM54LDqAFbyCbN8NHxcGrZ7ye9",
  "key43": "55XAaUsihZgxftdd1BuWZeR59c1siL1RyEPsX6qNtQZFZfNg3dLJo5CDMtxN8QkKnN4zNZYg9qGzFPaCrgSthpxF",
  "key44": "3qLV47ZbYTC1Eey76JihfirChVAWbpZpCeRewHfz251c1SU5kZZ9XF7nKDqHaRq5D2ySY5oGt2iWWvbkYFckAJKi"
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
