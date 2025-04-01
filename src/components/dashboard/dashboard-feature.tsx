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
    "5jHSWQUrbmsm6LQc35AtdnRABvzgQbWwpYAirGZ3rPBBoUkLHAhB27WxWuMR5jDt5MNgJ7FvoJT4DbAzEB742JbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUZ3TXWBPJwAzwjN586UKgcLH1yJssEBT2tjNmmbcVpt2dsp1fKV6gio9jBG6LosH3skiJcCN5pdNzJYQc959yb",
  "key1": "3DKxubh6npDkWQFiPdv7bTcF7KVmfHRrvgqZoLpbdP66ejc2zSJ7aSryYjT9EQ8T89XLJ3nUWGzG4n9n9vTehfy1",
  "key2": "3JgTyDhX1dcgQZ9M6ieyQDB3mweXnWWUK9fADFw3rkq5GwJtBzCbCgjveaDmufyFXpMVRSEEwgeuYQrboch4KGiU",
  "key3": "4i6ZrhBh16RNZ2GCTqCjqzpYmWUCievcxbwZkdYyWdr9gyXZEg7ANdUdxJKFz3FHVoJuQMZu7aG8BHnBLstcRWzg",
  "key4": "h4RmPA4BHbXECNZdsNvCkgXFEMgd6juz2saybHBBUCauj3eDy3Arw7ooKT1SbN1KQ6JY14hEKheHdMkNu99CKHR",
  "key5": "467MwzBFB38CmQfPcuT4k7tE3hdvH6NZtuQpgKdUse34r6sreriTy2UPTbNHrjzpSZvRWsCtPU2uWd5yvCYdcYwB",
  "key6": "3zfSDru4kqUtDompfUsfBMg73n4Wmin6eR5oj1nHnD6HaqzktMYsEGRRcVCcQj5mYpfXk24CLpy8QY6MrnsF6KdD",
  "key7": "4KsyuMYNXqMmT7z8Zdrx323CJYdzjK7VZjB4dx8EyCpk8vNG85hta1sMTKentS513CpM7SovmfMNPp6s8Au5vcez",
  "key8": "5aQhoesiBhnK5X6dbDJVRNAzs9zddcrhRghWNC556st1hAEPWYVuyFwyNHsrrNMyhp3i9LcRP9M4eydutJk4pXP4",
  "key9": "4FvfupR2jdoaxQQP71d669sHKMsuu6scqRgCvzCuDpnKBSCiNuf93LSet6nH2i7zuWDtFxXeiHwPtoRVd1bJRvvX",
  "key10": "5GEsEAk3TU2LuTrcERcQyJtfovA3zzsZSS6VmrzjRuJfSkKbpPN5AkUGPKB1Z6c5EwVeYFMFy6z7tSHRB1gwka83",
  "key11": "66U91JHdH1BfmnXzn39DvSaU5PCsNfwFkwDKZW3ZtPsJLaNNyiWeURHL5unT2s52rh8uDscmoCeRqGrdk9UdwbVB",
  "key12": "2iS3wpUyq45j7bvqReLeNy9dyAwGwSg9xVD5Yw8etAcco7YsaEiKByHGfWmyVxyzHuPgUUr7RrdjyjyQF5YSgN24",
  "key13": "4q16FXuTj3Tf4ncDJYZcLaDHrsmSeWcHshyBwo8bEp9ku9YtiNjqVPB6CP2kxacNJbTPJ6XPRuMtzR8JknqfR4S8",
  "key14": "98RxXv4C8NEh4FmYXUwxNEuNUF8g4kMSHMybYYk4cZVApahYWcszASpHKjTPcztsCupKTzznrzteEhnD48VTx6L",
  "key15": "5tYTY4uNxKaJpz6iEGi6LARCKYrmizn3jb5U2SeNY77JTudFKNkSeGcXdRAX7z4Rj6JMafa75XWUfjrcbnDqHZyP",
  "key16": "Q4RiSq9e2zHakgEfVEFdzJ7nvbKo2WkoRUZ19E7ZoVWirFHLNQGUrVeMcR2raStokptsRPTvhzWLovkpFsQovjP",
  "key17": "XDU6pGEok7V17hBjkMfxkbjVm4SHBVKDLG9RGPS84bKGBuNJbMtD1ADjMQ28CJCek7xU9D3Qpm3F4yYt4tvsMvj",
  "key18": "2ahnLkudA9n1ZxWzubZDbQXNM7WLxL1nNZTwE4GqH2yq8LMM8Yn1tZYTiku4VYCUaguUfvb8dASy23zWTRoFTNPA",
  "key19": "WbLx2Pjo1UdJ6kBBStc5LRSLsbrZvEmbPvucBP23gz8AqoD5hYVwvnFih1m9CRNQZ2H9Mht3yuRj2ir7gqGeamo",
  "key20": "4Xfm6q2q4fQ93Jzre5H3Y8YG1KaWNhtnJyE69USFVYWssPAW1kdFBMgfbZTFXA6iR1T6fD31r1mw5SFhXqfDSMVA",
  "key21": "3PkcSKmFm8wy194jceMG6LTSJq3RSGkSUPFGaAVhXPNNBddAEegeYZ3shKp4hwYZzSEP6Nb9f77MfdBfVkcBPpTy",
  "key22": "4oPeAu7UwpugzEXiXGbSMoCvAaHmxXk2xbRAaJkaLgusEsi9JCwKwnHcBiqPMWqp1YQ1Pjza1RoRtNkGGjuxLyji",
  "key23": "2k9AGUbFSqXMYykPveSyL8BeFUAwmcLtf5VpDEbRxNe3A842AZ4FPmaCT6P28LmgGTzNJhrK4YLLkTmQHFcMhKPU",
  "key24": "37Cmm4ik99tbT7Ero2obsgwhNtrkoHwd8oDxQKTcGTsDZth8GN1MJteeX15kuR2XzGv1nvbvAJ8VjcJJhkrqWx21",
  "key25": "2z6vvgLLMoqE91U3BoRiGgf8NSaCCKvgdYLgDDUYEh346CQBQTtPBQ8FWbr3SfCQqXaUHgPz17PKndjJdDxUqgCu",
  "key26": "2ZT14AD8ux2znrFYzLfDrEy2XsPSWN21avWnVu4SxyeG1mBWdG1atUUvb4HEi3J3FSyQHetotaPYa7t2xcyuxeoh",
  "key27": "5AimqC9bXATM7nUaNSKxDnTsntHDqmemNFQUQi1XpYsae1XYurF7yCbXgFH7haAqW55g5vJ949Rt81c6qN3iSxbj",
  "key28": "9BSgbwQ7Cs4aGZnraAg83sfv3hE1XNztb2iUJjwzaDdhK8NRX7sWohrTDcksQWgSy7LqKoUJQGjeu7GF5HCTRkW",
  "key29": "mRp57552HtjTq1nzceZXf3c4pCVFz66dkj8ofa5egKkoXLfxa3UjebpxPvCg6KZHsjXMV9fWaX64EncEuqzysMK",
  "key30": "54P6AsQYdLm5HD8JCKYBPdDBcoeJ2bizVXrDzu7uHD4F6T3EGi46UauJmHXxeghX2BLbP5wEcu7W5HkqXHCsp6nY",
  "key31": "3nV842saCsve6iJn3VwksTGXBnZ2m3KyoxyHE6LTd5kJNrD9Ghum6AsqMY7MBDdAbyPcEM8FydguTRyCEZMAJ6P4",
  "key32": "tLQHetHitaJsYpV4wH1Rz9XV1rY42ZmEbdpKNxuUvaorYY7yBDukFDA7W1eCeJAZZX17MQgvL3Dgfw6z5eCo7bP",
  "key33": "JHhvEb1Nceqv3Gd796hHWzVzTo6dGKd8PNXzCfYL9iERvtUB2nEkSS7MKKtwxQX1LqBJrukPwkKwyKwiHEuxJTQ",
  "key34": "3KNngU1fcaMrHkWRx62MG9XxgiEg5saCYe7SfZvpvjJMtXdeprKZmraPzWfXWa1zNh2YLG9qPjcivxSetwN2bkty",
  "key35": "559WRFo36KLDrjKvGHCdf2K3MEHJCKbRCy3ZUk5pgnWqVMZ6r7xhAD4TU5CYFREmZDEPv1FCHpbFUR1jUMshhLH3",
  "key36": "4h3TSFTaeNzUtHAegh8Lpw9Nq1Vb1vLLWQxEUg4YDFh4y1EPswZJdN8mXASjYFE3bUG67LxGALArHa9rhaK9eeuW",
  "key37": "er7HHvSNxej7ioRUQ8zMqTn3y3U76FxqQcKKa7XiUSwiQEYhjfg79DxZv3R4JmwzvV5HEouFCMsYm3jcix2983u",
  "key38": "2eY7zAf8Qh2xqMRYpAZagZ51MN1Q85qBVWjV6t9FWw6Xaqe2Y5Y1AtwaJuP1UJ19c4DNaQnbi1QbwxyEgVXv7wbQ",
  "key39": "2fD1e2exHs7MjsPZ3NhsSMKSc4kCVyEr7hu2h9qny9ARFoMAWZeQ3zxRfvX2yr9rZzrJPkjBWUUJj4fuuhGbWhqM"
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
