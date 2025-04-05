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
    "4efzcRKPLCrYw7LtqYAQT7cCpDp9bE2TwdHgAGs2k6Ckyk57rtBGW2tKA8iuJJ9jUhZb1sTzAUScdPgt3hhRoySh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APxLexb16L3i2SSuqMsFXQJSHXDRNu916FG7uBAr5jPEgZ3eRSamu3mnBZW3TLFF7v4rpLzZBXnNMDxUkBpvGjk",
  "key1": "3V96TLE38FMnjtSnxQTsQSguz17YesJyxi5oUMcj3xa4TSZWjV7BM6WQaUGWeJTefxvVPT4oRHZumV2sgt5S7gwy",
  "key2": "5wNhD95GR9dvDAt3MNjphnBoE5qw6ENpskZjgMtynmfWJ1zaJwmTXMLQAca4enTKfnEoLf6b5vuBAH9cXQjos3bH",
  "key3": "4zJLEvNLV4NWrbH5t42UeSRAxB4uFDhg2FSdEGVd8je6d1K5ticCqJDLt4Cnr2qcrjUmDSxYTRrvqvmd34bGBwY",
  "key4": "443VwE32yMn7ASmW1XxtDUs7mYxNUMyfSbyULCfsb4V2tQ8UvUrtUvo1KjbQy5PrHorbHTzaGE2qCE1T2KTwque9",
  "key5": "4EG9jBjDftcanK32B52vCacg3enc193WjDt99Aqufz7mbxq1Y6oDupZ2Y4dvPMfgukZL3pEBticKXvpiDC8XK2eM",
  "key6": "5EJU7ohTfycWpvLobxHkmYQX3cQkCrEVMAPUs4zHEBo4iuoAgNpq5q1kWi868sTj18PwoPHDnDBuGkrcgakRD6xm",
  "key7": "32WC5r2dr3Btz8bSZSDKHh27jqdA2N7jsYL9ZtoGkq6PCZUx7YbxuaTcMK5EZtLTAwuv9vNPRzJ9LRHHxLRUvX3V",
  "key8": "4rnDePUt59Reg2VX4KV8GkE5eAGPfMjdtuekhyj88UJBNkMyzCXpWnpZVY3FWbN5jxvGjBUJ8debLL6CLPet4tWu",
  "key9": "2wcD5zB31FR4P4f4kGX42h4xK3ANoNzCaZTg3g3Efehfq1wsamiW5i8HcLfk64JBJd7ZXzCQNSDtDWZLcwjVrV3J",
  "key10": "5oqvSG6kKaecwwp428JGqW8HVGSFgdF7kTBTeUivFXx7GrrXcDnKH4tN9WQB7uTWJNmiD9nRKzwgrJ5vfjF4v64Q",
  "key11": "3iyLX9A6okHsBGdmcmkWcrsT2kQiAE4tnSzcdZ19kLPPtbGMwc9LoAEn39EayyobnxiGkF8efJRJkX6sZaNmPQr2",
  "key12": "3rcFAh3qyZn7E4y7eudVhKFqhLkBW8BWw2ygDAqDiFJhK4qGxm3fFUJw9XwTaqSrhWayBJrGTwPAGw8nT152karf",
  "key13": "5MaGZ8G7vE8P3hKNGCsc8VQC34SdFinwDYkT6qnpmQ7Ho8jMXncx6fCKrUAESCCwpGqJiHrsFX5VEBn24R31nfnS",
  "key14": "qSrDZESPW9F4YsQJC7CoY7LQykWpdKJVu6sih6Y7M1DRLw6kNSeRmjFRYpgrTwesZw3k9GZqtsLpSGRif6kwVjh",
  "key15": "4tbZu7PmMNq7c7MsZwgwiWBrmFa8DEfLsKvA9Hc2xS1uQY2tyrYn6GH4Mi7gaUDQDUDGe77tdUHjV1uVumCyRKHj",
  "key16": "4iUNBB1nhXX2BCC5H5mT2oJcBQ7x4c8dGtcdbpzbNcNgYuKARUa61s5PLT3q6YXcxRXVLj5zkRmgPi2kKdzkHSKv",
  "key17": "2HfjjL5gj5HGUohNQ3WhHo5ogUM5WErTPrERWWjRCwD1E8q4mmwaFbYH4wtTQTvX5wWcvieqtHGgk3pVGBdCzBx4",
  "key18": "2eunKJhzk1E9pSpp3Fmnu97kk88fU2DeiMuo9V5SyfTdEVtubrpuqtGWiZM23AVrKa3dZZD5j823HXMJeYcCF1AW",
  "key19": "5qK2QVV36RrzRG771ceZPLnvKP6P9DRGY8T9gPxRto1Q3HJJVbZA5A9DS7UKprh3qDBszZNK1P3zMfRnngQ8WKQ9",
  "key20": "jGEk4cUa548nHrL2W9AzdvB2hXsFmfvYfuFhGieg3TLtLc23EW7hgqXKkgQi9uNyncdLSp2DMB9sD6QxRNwb4Dt",
  "key21": "e2uMGqFGA6Vom8mkKBktx7qDgDTaRw2dUDCJtdD4SXXYF92bx52a2BRW24WUj9WPUdpRVhmkyFLnYPRuVCAUd6n",
  "key22": "3YiE8E9BXrePjjVExRgUPunJRB8PS7tNjgdcTYCcCFW5zZZivL1vLc2gzKUqizwWdFCpvFWEAc8morDfiANjuH6j",
  "key23": "3csKLDqCiJAqaD79UUD6KCjSZwqbjDqrVvteaCTgCWBuCxuSNdxWaVFmjxSQorKgANKYCiY4h3EyjiecsGdu4w7P",
  "key24": "5PMJT8UasHnPpTJ5oNtLvHSnXBXRPJMB9fAhocfsMcy3Din5h18sBFhwxBJPi2XDdznQ9vU48C8Kdp6iSk8EyWq5",
  "key25": "57CypzDuZZCNb4CXYDNCVQCumbR4PYkSp95PocEtfrVrLUNGypr4pW5t8kdC5zjd7jLQ29SN1G99oazgy4i9VHiX",
  "key26": "51rohreZ46nTNpaFTsqG2sFVwrB73g5d8aEPDZuF5gRcrZ2QYcz5BCPcUtvayFDpH8pFkNWgcaKfeApiMcXXXqbc",
  "key27": "5jtJ3E5ZHMNX4jJATGTWYBaWps8z8KWqLcx8w6V983WW26DC8tycm9KEEA18gyXquNxFyKY4ZPjV22JHRaakAymT",
  "key28": "vXMamzHbmDCKEzjU1KCwj4qH7wgHLcsuZakfRezCvUzDE6gGAC7maxdBb5Co1awjo6uAWg9VvmdDHfVvW5hTbzq",
  "key29": "3dRnC6i8j4Feiz2cDtyEjjm45ntPUpXxnTT4jNLfywTHLGEzXBHNeZXJDji7J5jHi3auFqtT1VZ5AqqfyBNX6TeB",
  "key30": "H3ZJBLiBeqiiLdV1cf6mmyrpRdo6HW7dQm89UMqFtbqH7fkLzoQXXmhhtHpk84KAuST2iwBoLrP2NM1qUn12Hiq",
  "key31": "5vfjyvHeg7gewURSG4gnVKtXmRNbdqBV9WYjQ9wjyFUDrLd1x2QFH1VM3Hxogu7we8dpgdJiRjm5g3nscPfvw8f4",
  "key32": "2GuzaJgcWKVqxCHABpzYxcJS7N86SpEwwwCY9vRmc3fzvFdQfJsctKPJePgsDaze9qqtT8oisez6dsmEkwP9a3GT",
  "key33": "5tCuVKLZ1bHYdmQJQ89hmVCgnmbTvbdSfFdHDLE4Ae83TEdGiAjJP97VvyP58CcoH2CGa7XSRZE9yoekAALifRck",
  "key34": "5Z5tuQA84AAds4NABuPbewTzHKxa9JHJEWFsT6SgVwYLNDgRSe899wnEnyKxwv8jp6XJXzb5oAHySiZW1D8Mjj64",
  "key35": "5uTfmCx3gqHb9DgPKzhLPgqE3AopCH2VsMkYZaHdynEPkU9cS7T2qpBwUkQ3VxqetdLsu6zGfm3UQfzRZ4g95iPs",
  "key36": "4bb5LVnPsTRWzUXPDZPzwZ9GeCvkJnE9Z8r7XE2RKf6Prw255sngHJPwfevkyx3S1J7H8mxrUa2RnYJxWLiGaRvb"
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
