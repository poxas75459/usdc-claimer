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
    "2HKZAxc4jXYvz24q6PTnwvb1FtH9rBm3qcRbrmeKevU7AMMNDpL73JNCfMPHYd2ak5A6AzYXxh6fjX9hZc7zT9Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaXLPDHnYFrae1W5XyAyoTfJqxoqmdYLS39QjowdBXFjcNcr6MXT9N6GjpzAyXo8kbUAfxqssEiNKDa5Wmui756",
  "key1": "kMNdA2EfDcHyZvkY3iax5ayQ6nLDgxEFdqZiR9EBBKAAErmhrWYERc3TeYbyTHeLDmCHcE91u5oQTFTauKUfJhP",
  "key2": "3M28apbFn9PbMxzR6FYF67GACkXK6HmdFW5nyMPcmdiWXYpE8PwK4M4rJcoqNqbdCfLEGrtndfKrVKWRNsRg1i9E",
  "key3": "3am6tHAUCu2ASgt5vaQ1dbJukJdbHpM7n3yMm27BUxNQho3ozosWu52pvWXhhsvnEuqQzzZW4msBnuULF7r81vv8",
  "key4": "3pjKXsXfyqBU5ECw1TmCPHjpBaxkKvPydHzFFtY5LkRjzSy25j2pXqBrCQJnCsJ4gRvyFrzTii7KtnyhSbrqUjZX",
  "key5": "kyt43ps4UyTJzQnNCjZXwGmb63PzcqUJbhBCgx2vKB4yVy2Gh6UgRKa8EbmudQAAGxHKsWAKaFAaiKy36pxgavT",
  "key6": "4sYTJbCKCFcka7AbZTD1m7SMf1evyYa9bnM7oMTS7HW8zJMChacjHmPHfTznMAF5JW6hkgKvNaUxNiowDLvxMRaV",
  "key7": "2e4WTokppyC8rVEtTBdAvSR4SHtNuourkFuYTdnNRfKf3q1QD4PrZhf4xdAFtNQQeM81UeFqoQgSzhXXkVRWKmHD",
  "key8": "4BppB4HG63GFeiKzxKHtr42UFHDYdXk7J3aYBhoxqu8d5oL6mahxPiGsqdPagyqNLQaP1puto16eJ3DBePxGsssC",
  "key9": "5rrDxAZxrzdRRbB7t8CvUNZCbDy687Ax2zatNKYxDYApZsFsdRRbTjFui5CghNGv8ssrRkpHV3YrJ5r9ZktNSg3s",
  "key10": "EMqVBSRdvAHMtq9h76tF8aYcjTcCmYcQAzmVBntDadBfusFvEedkEkYHTSvEFde7okvx1t79LdSf5GQNtuU5XVr",
  "key11": "wf6VSqdFypMMwaynqLMChTcabEHTdHwrZq5BUXrdutTY7pLD8Q4Gmiwsa6gUwtWe8NZjXNZNmuN3p9bqZBZvn7C",
  "key12": "Ermo4GNDUqqGuCDFAsVATTvhhF97zWsGYWVW6Cb3PnuzWjWnsVuj7DU2rUYTNYdnnKiXjxHnQwU4YJG9tPPcT4K",
  "key13": "567qMkLmd6ovPeJDzbrtfrHBNjnbregsAYW19Lwv6NC57Kjs9bWdydjdb3moAQWeJ4MudmAj7ngVfaBumxKTqCi4",
  "key14": "33RLtxuP9DwNosyYUVf6SGWKYkbA2cTzF96t1HTb45Tm5gZF5h1kV3ZcT6NdhES99rioYDYiiPFbGMuhvmZFmzDe",
  "key15": "5i9V2GCo9hTjyytQ4HUbm5YBKCbZA8j7sGRjv6LfG8wQBk6md2nrpWyqV8f41H8ThPn19kAJDT2MHjNcLZTPfm5M",
  "key16": "4R8KjF15yWx83DEfvBgr692CLQDjCLZ5wQYZzrzgHuqFv4eWoPWBYVFVpzAPH2W3wK2CRmpyGvTwHA2Bax2FPDhD",
  "key17": "3q7ri2U3NjhCk9xewyqPyzLfQ7FBBzizaUiWfxZEt7m7L595mQqPwiddpNZ2PKriHvUWAL9diG81R7S9z5w38qxC",
  "key18": "5chmeA4SxXWhUsp6axu2E3pa1zMhxLgKspZd9sWkX6bFe58H13YwWS7r3HFyVFARyfJhrXqwYDrbCP8ksUUmKjiG",
  "key19": "5CwLaicoBqeqzsC3E37PofYGFhv6twFzTLMdbiNcmRveS2enVtPFDRqUdKY8rHGKqpEWsiQSkwnVhBnRUeK6w7QC",
  "key20": "5Yz37UKFKvCo3jNCzsuLmsHcJqrf1ZbhD9S4ngRQ6zN4tsq33RuS7osNs8C94eNzjdukvV3S5t7WnbrHWt57dxB6",
  "key21": "REQBUpZ2EnxrMQfw95pWKBcnF81W32ZZq5VNuAbMiQ4e4waZxsBWQvjN725r2Vua14Z63gudxaPN93qqvpTYaPG",
  "key22": "3X4mpYXHHFLWDVALmMxvUJpyCSpKcs486pG2quw5SrT5BPSpD7rjzHKJFkCLHLfcn8QX5BCKwK6FFAQPZszU1zMW",
  "key23": "2gjhZihTPYvAxQ94ByjciZqg5LUGDAfML9aSFqM8RVuWx6QfbY4g431CdWdLtYj3EocTDiSVPAZofmH9JZj6fZYH",
  "key24": "5wCZ7miVNzJPBLSkmSDJszro2dA6eSG1RRLQ87nkJdQ28Ui9H9YU11QRpwv3kc4Sj5oiY3VfDtwu5os3vP8jUuo5",
  "key25": "63dbYALV9kWnoKWCdLg6MxajiUYxay6LT55AWK7eNaNG7HvV6MdK4qkbi6uhNrdMpczVBd45jQs4xs1f2cTXR9CS",
  "key26": "3ByukZc323VqVwC2JKrcrHYSxFQndrbLrvEYCeyX6ZvYDQMTJEFjLEt2ZtLkFYViGjEHBxsQhUoDUF3V4tgptwks",
  "key27": "4HbNfRWdwAdX343iJxHJpBzZMxAZTEHo7iHTuuDTGQ675jRGdDDtc2eARNPdwB4vFhcmf1GEiGEb5cT3csJ9cXsC",
  "key28": "4YCx2rkqmifRtjJ3Wpik31vTTvLCLHR996gYzDNKPysmDCCFA5B6ZjMg1GAJq3LoPe9wCjxhTGDbSmbeftowjERc",
  "key29": "5fodePi2uDcwDqTFrWL8uJq8S3XA7XrrU1za3NbpeRQgZC2qMipexjemr4WgqEn5G58wkrLTH3QeuuZ69VerxeGD",
  "key30": "5X6N6MH7dQVvJhWMoD1f66W9bZUdSF1HpSTFLwYMGZwbPH4JwxFYToAAa63UoXa79cV6V5EQkLywVFziqQHz4C4o",
  "key31": "3EGktyAa4SFY282RvNxZoQxt4CdFa1KLATq92kiJUikWPzBWV3ynQgShKVu1qcRi1nqwVDNyHoG5wFiXbpx1awbt",
  "key32": "4GHGmaZkFr7jESEqztD6VQLJ71ft7jinHbxRLRxVA3MiJ79HZWpdSUw7DifBLgy7xFfW8PD9zF2KkqLYwJ7vqt3q",
  "key33": "2GFKxHkUinF3rXPQtZjsRY9RoWtEuSxrPVfsQgz1twLQBifRGyZEv7LLeWZ7pX2XV9xMfuWw5Rq7dzJK3mPWrXG3",
  "key34": "2EaCUGvduBhohmffV3VvJKbg9tFSgeEnh8yb7fyujxvELpeSjqN8pG2ZhKmUtfVjfRQSg348ivcEPmFk2XPYorzu",
  "key35": "5nRtyEb8iJHqLv6N9RG7fvmnQvtHXN3xHG26me7e1mziJpFfHTKNSjuMPGn4Ajt6DfNJQr4HdzYFk8QQJCCVKyhk",
  "key36": "4nS77pKPNUasBdDuCbn74zx4ZzeA8akrzRbwH4L749rzerQG8oQd51GZ5XHH11viHfDzWyDyam8mzdjizupr8KhV"
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
