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
    "4pWjeN1nzC9NKbR6AV2GCYr8CDxV68GwbSRzc6kyqaaYoTPmdWeYvBFnx3PLGfi5fFCFamo35QqvAXYnXriVYMWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cY6ELsUefLKPBe2a4Pa3JgffW9XzLTNenjM8vRXnAQxoGgfJgHSnWT6zKrRn5oaEcp4naJ5HsMAZFemcmuacDpJ",
  "key1": "3NuGVtrVeUTBsa7wnSoehaVcoJrWAw3iTzbLKk6hXyEFCD3mXkw3uFqBwmdLaqC4ATNARoTch4HMhGVHmdQJefkb",
  "key2": "64AFxBDEDDg1sNT8A1vnLs7kttjxE4nQ1XV5UScJJ6zgefz7MfxyZry9kzxi8vWeoxTg8iWdbKoeBpT3YhPjg7An",
  "key3": "4PeZdGpoKQeJE3YwFR9wAk5hbEePwD5dweZRwpKm9S6rxSbSicaGfNRxEDPCsfYE7oxzumAV6afEf7rmZPUGqcya",
  "key4": "945JYrEKGZcdF5PUfyEqF3tQpX1J6MaqfJFgU2guQT3jwZ2TmNT8KW9XxTLfLpqFHZCck5DpD1Fsjj3Mzg33hCs",
  "key5": "5ZEpATmW91S1qFgfDZuVJSThvpHkzfnscTbfULtBE6KWqGZGZSNX7TuP7SZhcAHuFHiw4Wf3AbP4hBtgrB2HxUXs",
  "key6": "52aVjN1ABZ2DmWydDHq5RgnSKM6S7cd9dYKVA9x5GMPaHMMBZXmZ3GxARyvGBRuB5aH4tyqtpBaiTYVANNN2qScT",
  "key7": "1sjgJrgaodWH1dJifd9h1pvZA4VujZxNABzBx4nvZaoCX5HZzXeSE4kf5NJ4GwJo2j3a6HF4mNVmPHKeXB2Uszu",
  "key8": "2VHD7YqX6f5NJVxbTsP47RVvxPKFivqjpFAN9xyv7Sx989GDa1RyAqob6kotvuKHH2czb1bBampcHpcRmCJM2vHL",
  "key9": "5vvaXFJYxfjySDutG2VwVEwhrDY82mZhyq1TbFswUYxD2cwNJP3BrpB2EtbLmpY3z7SFvzV1bk5yrSafN6oeE3hL",
  "key10": "4qdD5pkW4qxYXH96Gct9yPFSrKideNHdkg7iiFay5bwGHRkjJMoHajr4BqQxMnyUn7ThdiJb1NuTKfYUNSrc3EBx",
  "key11": "2oZXp9wXmjCRETtwFqaJtzejBiENEFinbtMGLsS6fEsA6qWymqSDnd1sc39mH7z88LtXazGbzjXpMm6hApYixqmL",
  "key12": "5NFjyV7waHDHcd9JJHmVMX31jQg1gtTjyrdLN67jqG94GnE3EgN9uc5T8tfz3ywdqxqsdwXjkYUpCGchtnz7i6Zn",
  "key13": "4J5ivtNrNeQsZb56FKvTX6fpwsXKzWQ9pYfzVnQ7gKzpSZmeD8JXDFWceG3FrDnfF2v64RxcFGmpx5o6tvKNwZan",
  "key14": "4ux9TqrhoMcNXwW4oLG74vUjUnfzhonmH8U5fHbYxvobo5qgpaL8C9e2dXQqvPfbjQZ4iiEzjLrsxgTCd4bMnrPz",
  "key15": "32FZZFyhgyjHfWgWXQwNvNMimLwWoCyYG4Gw1KhEHvXDYJeURj4Fi1hZ63NAunYZ1CvQ1jfvnqiLPuDE5aZJnsbv",
  "key16": "KpKjsAbbtiw5BV1sQZjUUBJto4iYx6oix67VmPVuB8zqh2oztp3WNF17Bnyu4G9d1uD9rCLMSi6N1f2rnDts3qN",
  "key17": "3ps5jGcn4iMjT8NM2n1rkbgDSZ3y2HaDWBV58piezS3mnXsiEfRmAckW25hQWf9YShhVWxNydMK7qNKnQdgXVVUE",
  "key18": "2M1jENiEmfAEkbALT7xRwv9oqf9jEevCVhXnaVj6g5rmunKdEugoH7XpBwg2gJA8pQKXaRXPF3QGWzt7Mqq6E6vt",
  "key19": "3ba7y4FduxajEp1TCLHiMabZiRw1pvb9JE2ifUzXEiKAA4UdaUgC6tAvprNCjcD4UiXcTzGgj5LyCMwsjSs4au88",
  "key20": "2aVLwzvgDKMDxs2Nr3283yra2U3V7nQGoS1VjYZK5gqiHw2PygcDuMbsMu7oPCrzz7JVzh22brrvs7jSsG73NVY2",
  "key21": "3HiXjrTYzeetYWyoYeBXxPpf6VdgtaPQ8aq6YqbE2rCsGRYsVbggrmypPiQCoP9z55F3QhTdJUPq5cgDqy2eFY5Y",
  "key22": "45h1GKRrXtr3hzFrDK4n31oEgVLe22dW9imbXTcjeZypXze7qn1XupK3sfq2DQUxq9FPM4ngaxu1jLxGgK1gA693",
  "key23": "33AZ3n5vzeg9XZehpXJoN8Tad7HHQ1zduQJqLVPku4LkVFfHbthVJzGuXHNv4HyDzXtvu9JzB1koXiBGxv87FhfJ",
  "key24": "fJHHB1XKm5qcz2LzFtMk7fQT6MRzVQtuskotTS8hmEk6JXh6w5Ec3tBcB7ZFtqHVgpMzKjYpzVHJbcEq7RM9cKL",
  "key25": "p67hMKoS16wXxHc6zVvqUgCH7rVbZpzg2avcdH9a15Qp6o4AEg6uFtRRzGoPDSBiEFvAPy6e56rR4kCqVQnwLGe",
  "key26": "4t7pJJaHwVkR1rXLdCtnKN8hca23xzPjxbNTWC3RQwxJ8NYmfiSKv2bK663ka4U1SgCgh834skcQu4ZuxP7wSEWT",
  "key27": "UiGTbDv1k3aunsUv4DAgRM7VfYCNMFvaPfeHfBTSwV77Q1rW6cYmGxetFf1MN6K47GCEPy2prbzEAyeMvk2L1uQ",
  "key28": "3hHkE6kckLvPUUnfXwgQAPVee58BhJjoAf1Z1rBYNuAigAAAyGBy8wQKu9jjpZDGQ84qw6KeTcXC5kBpr2xc4vEp",
  "key29": "4g9dJkxMDoGpwAP4XkUhd6cvBqgv7yKYoPsKsDYpzzrTP5MLLYgFVGS7GW3oNKWEnBfkjGmB3ZRVVQgeZRoy7qxX",
  "key30": "4kPo3goRbkv5H4uidCF3N7fiC3SBg3y76GKXHRwdikTMzca2MfKpgcG3SofyUSEW2KQZ7CRXjKifsJntZLnKZ7R9",
  "key31": "2oKjJHE3rwx4kfRH4pxWKTT1m6i7ykMemEWUghDogsJGqNig2GnyYgGkPfsTGA4TjEngMQ2h6aZ4vJcVUfCQ5ZgN",
  "key32": "4XZcB8WADgycF6d6Qab4bygSjNivm5w68ngc5xMgt5TSuCbTU5RdYrtGdzmyhXRyYPobzCorw1gVYPE3J1cuSa4F",
  "key33": "3tL4843LVRxP5ht8JsjkfJ6R7KTUsNmsoW7pEofTaBvnJrHS5AJrP6whV41im3qjP1p6QWWgen9mvr4nAW1a88vj",
  "key34": "3VFdJKCK8G4WGQsCMG5oWSQaw8B8MouscXoPPjPfXMiUc3WPBH6y4YZ4oESHHSMVtLCzFhQVXLNtWtmQ36wh84Ua",
  "key35": "449PccwPGu91DWe77zopc9ASuyaTXCWPaTSaZhWG4WrN1piah41sd75aBzPK9XBqfDdstYA1kbHrVMyjCpHa4ygw",
  "key36": "3NkHpXSjDe28Wig3D3HMAfrpE12kjzJZEKLDLLCpMjLcvtH9DYAsRE84P6GMxUwHc5LVx7a26XnYpk27brtMG16w"
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
