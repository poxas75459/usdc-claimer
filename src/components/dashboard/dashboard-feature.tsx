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
    "45tozA8NSaL9Wv9vvtuTD46qrXHwJ7qux9NENWkrS5jLtMxJM63JYGoszA7ULZPRMBjbAZFvZqRcEL8UqkfNRYm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8gFYid5Ux6fDe8ezFwmHigH2hsM2RMmhwg258wgZ4HXEM46VeakFd3KgrkH6tdfXqsBvmS2VwsyRxPeao6GykY",
  "key1": "5Q7PabCjHEsXRJud5PBvMMXpNwn57WcFfhU9UDFzYYheyuKouy4fnDNjKviu2EWMcJXp2D2y5ZtXGRCta3JxzjHZ",
  "key2": "5RRkcjqXGhY7R3JBLku5dXkX97K34P3Km9WmZigiPHswYjFB8Uchc7fQDNtiiCMLwqrM9BMQqXgFtkUFMMiXdYWR",
  "key3": "L6RyCFwhpAAcB5dxtSPG1yEbDhoe1bu32PkJuFfpdDdrRVanZDKcumq9j316ZD94CXQfRv2efwNgURMnsocowCC",
  "key4": "5K9bTeiF7aXvuQ1rv69C8vzrpBJqY194Krek93NiEoYdQZRHDMnbrhbBiUuqW9RTtv3pfy3DkmPzr2UywBMwWjBr",
  "key5": "5EvSprBPrrs5JN6NktG4AbDvpfngZQ2CNYXJJVgFRGnP4kbdGU8M9HDyCmW1jbxBZ9AtvgWpHsqkqaFARTTUvcX7",
  "key6": "2eHCZJ6pU4Etb9e51cdQqP9z1ySUUSJhprE1L7widDvYeo2iB2ndHeim3yMWh6CNJcHBBKrRAxrFvLNSEM2MgWnc",
  "key7": "5kJ1sB4Lg8TyXy6LQkV2FvX9xCkADjEXrHDBoxXzTMHQCMxSAFg4Ec4xULMqfBznpyStGWoC5mUnPxqbLYaDsTjR",
  "key8": "4FmHvoxXSZiHC87J73PDH1hrhBAxLni6UNmrCHXFDjVCznyzAgf2iTrdShvmfKMcxEyXFQMJ7KBZNcbQbTnKiCae",
  "key9": "2otGdPuovg15oKccuoosENqDHBVotUwLwfQ47UKFp3z3ziBKr97GJ4H9b7Gr8pnacrBWGXVFXdav8uApLu2Tudcc",
  "key10": "nMTEBN5tyQ2B94u7BX5QZ3mgsx36pnNtBUoBfskbMWdE5toCQEDyum8gV8YwBU9Cnk3suCNpYXS9NnBiTEtMuSu",
  "key11": "5ZnCPKXpJQEPm5zTimz6FFoxSidiC7RoTCKtNsHhPBHnEj8safLAcD1VevkemUa2DXpTdVHHiKKdXmJ4mr6xBmpo",
  "key12": "4TA7pAaNe7vxmWRAb4esoiruh3HM9PGuWG644YbjmPfMu2y7S13DfW39iewTs7vvt3uJcxZyrn4rX8tYKeNuikPw",
  "key13": "4dxvwwvep19nxgr1bacdGfd6AT3gqQLtggTyuYJLmd1oNrUDJgDTkAeo2iDBCpM5Z3JPEQWQVJK9vfd82VokRU7L",
  "key14": "5KGQGayzwYCCwAmZvHhrxMTrEA5ejCkd91e8ki3wBH9EFCFA32mwvNxh951knmwJaW6jpk4cctGoXZuYmpVo9Nya",
  "key15": "4fHiN6mmmRUTiZE6qdoTrW8JEBwwcx4SxNoZb6ejr9ZbMuiVzB5R6umhQfJS5ApCBPmdGR8pkF1fZR1aPtbM89yT",
  "key16": "3c4s6FBTURvAbQbstAmpVqqEcRWCmLYdSzEfM7FnThPpMdWxG4XdR6kbHeFsQb2A6SCscwrRW9J4ebw661TxdPrg",
  "key17": "5s5JhmCuAJa1XoMfWDQNrJBs1RRxqDF4VBv1d3VbwVyi4wJu73x6ZTKoLYFArQTzWCEyXcWWYbkVxPiGw6NyQAbv",
  "key18": "5XrJiUNaGeP6DpvG7WsZxqBzqwDPsosJWKsureKhdeyjSX14vcguDz5xGCPWxTsdKzYwiXqoRaw9y57QL9hPaWyc",
  "key19": "66ptFDs9SYDfsp474jJ4qRAyRZfFh1i8ep7Dpj3wcFJfqBHTa7uQ6bvj1tV67PEJQ4xQq48dKYh2rEajEnWy6MX6",
  "key20": "4soE7D4FvH3G6mdf56eTKFM5L7KrXrEFxcitkrd86gt9dD4ZwZ2Z59qEbdo4bfugRjGNJshWCzqN39XSH1Z1xhWb",
  "key21": "5wKySgyB1FCYca4UHYG8uEGNuuMTWEchQVTDwr735K2XqxzkuvhmdAkRP2guV4FjXkbFebdyiLaAVD2ZmbubYLCe",
  "key22": "2qDs68zaD1ea1w5tDNsDrKvhLEqAew21oAUEU26boZKiGKGJWLaZ5EPpP7y3gSMGSxi5TPPnce98Ldn9e3oj8k5v",
  "key23": "D5LEVnzcqS3HU67noA353jyNKDsVY17CFWiEKJ7s3Gh49YcdFPkx2uyoNUfvV34511ccncxbfzvdrEqVoghHBxY",
  "key24": "XhGLSsTEGFDBXscZNoaZLrHKgNgPDMATWe6EndehBPSoXkpQFnD4FpMqBdcd2aF1JyozPkfvxavb4CtyD3FvrZf",
  "key25": "4wXGYcxKxPk4p5AUD6wewsGgL9hfa1t6xtNqYBucZXpBj3GuUTrr719XSQMZ793QvVzqZmz8zxbcuVH7q6abPTUP",
  "key26": "2MdEHGYHb29Xda2C3wjd67EdtVDJQFvExLEhbQ55yq1E48EyVTGcGoYxmkKjzh8Q64UPEZ3gReDxwJkbXxqgfRYm",
  "key27": "3XCFgrVNJ6T4jRJtR946MJS6bo4mju8soeMmnnupxs9U9RofKmcbUWoeRNeqCF8wpymJPUkoT6rLvjgxr49dm9Xg",
  "key28": "4FdJobgdFJmv67j3g3hM2GXyAXnTzp94vJDuKG1UAa12uU3eKEqUBBVoPFBrVGyngqKHxKAEvuhqDDH5AGu8RKoV",
  "key29": "TC6fmGUVUySdRxApXEZcPNCUM1aKp7g2hcUmDduAr6Y68P8mdJQDKnDJnjCKaQPgros2ZZTu9ijKuej84AaTg27",
  "key30": "4epNLQJnvrzHenXgYUBUwurLYHSZg32ssRsh8Pkq9D5N8uyotXL3FZWRVr9WkGk1cbFUvuvcmJqamCa4WH4XQpHz"
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
