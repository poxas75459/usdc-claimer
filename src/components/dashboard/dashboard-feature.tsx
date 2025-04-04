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
    "4UmZxhFGHfCRyNQGokp1JVBg5ufRGM4ZZCjbAfeeRFKEnmDkbKzKDxEgKUWxgPXY9eod6S1CRGWktsdZ8bJsNpw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfphCSJPVSuACXuVdrHovMiFudi1KFZKnz1Ai9UBwMZrvFvs71Ne757rA7cqjah97n4scuuttxovSobWih52uhQ",
  "key1": "5roKbvjKz2iwhi7d3aBjsXkdv5GyjW6pEm3nB8bp4StH3gxK3kcGkvgvmsJbkiz2K2SYphxhEXkRiDLbpu7sG35d",
  "key2": "3sTEuLKoFzyPGzg3izA3PYTDSgBCV2rrpNC9i3i2GvWvqvBAi1EREuvj1UaGjtnpfiRTFZRktawyGqW5cUxtXqci",
  "key3": "4Gw4TmyjRakTvQoh9RyraUKwtygXRQoLZs4Byj8zEMoFVg4pj9XSnebAGxwcm29wbxshAKLh3ZYUTnT5EHWZNRTG",
  "key4": "3uVxSqm239UQjjouEypgpz4FYf3Pm51kivdTud8HRwrrbAHQGCpJ3XJkrWZHmZckiWGcDrEC26CFeYW8xFSuxX6j",
  "key5": "dW1RTD1mVZZNkeFA4x2ft3iEwtrzw8sBdSTuS99ChQhK2eXmQimc6CpkSNHtD3aMDnbXBYTNAy5DBpZF5KA9N8j",
  "key6": "4Vdqhp2fJySKnWJzQ4Mi2be6acvEKUhcVGqFswDYSbkprS2brPSmJkdDLVFwoAhYf7QeFSuibz8Royw1jMqZY9xc",
  "key7": "YnW5gVuzVWPXMZS956dZdbRcSsDG6uUjJREtqCz6W8pKqyL9e1bQ4N3svYutVwqm84sFqoULAf9vJWzrg1rMBJi",
  "key8": "5hz7WF8BjJUxsjhdsbAxrMh6hxBe2GXCwFA2ChJN1RjSSF2S5CugG1MSmEbrsfMXZyntT4KYRu988rmpHj8Nk1FT",
  "key9": "4VSmdedg3ccqXzrWr6Qn8xed7y4xH58KMmfo2z7FnsyPtm41rMdvaXqP8oDw5ot7mUNZMTh1bpXkwoJDtnGcxjW2",
  "key10": "4do7nYif1TTfVScVseMYTeLKmZTLY98Brbmc3GG9wKPtqDtuSrH8xR9sCGcYDAQ3HjbEr1fjocLX4x6FakDSQc4p",
  "key11": "35yiPDEpGQqi5y1UaW5FfUteWsDqJNMrjEjy1cMDdiWCfSrogfh2TNg6aVjg7pUhfTydiR8ESwBqi5f7VYKiCFFP",
  "key12": "2vsTULKMZNENjb52XRUWnyyexiiCwfdxhHqEYh8E6FG7xyM6uHyHZy8bS8ErVFkW7KAGvDVcLAnQZyJQyZk2AcY6",
  "key13": "4dGKZMxsfRLLEnDtCp84MHiJoQcHGo2EuBWAM6Z7FCirX4nyzwdDYQvKzaGyD62QJYwvwZjdYHaZbuwP2obUcoVo",
  "key14": "45hdu3NL6vB9pfWR2QWQhgU7qCGpo9uALtP1t5obh4ESt8e7oJStASJxApJmskHBoPHiTrU9djhWjSESXTiaoHPp",
  "key15": "2u2nrZKd4hZxt7j8wneetbe5P7LQgxdwsYguLEh9XAmDyyiFbfYn1tBhvcXgbF3pixAtewRLx5fWr6GdGA9VnqJ1",
  "key16": "3qG8PUck8WxW2pu119phKrWciDNnTQHusvXeRDGzfNvQS4ZmC4TZHaKgti9z5RYwFV2XiBnQz8HnBR1VR7xVqAg3",
  "key17": "4Z78TTFuwjhyHxJvWfQWGvQaBqxr5Km2iLom7YZf6SnGF6SQoRoHx3hECirv8eDbdn1HBX9NBTC3GF9GhfRzJEeU",
  "key18": "67NmUsLfqiFXF6XPUHDQDmjwLx9Vo4qEbCtvD1TKgrgP5gRWk8rKeBitCxLeDt3ihiUWwqb4EVNhYu985GewszuU",
  "key19": "5zvDHyxYURAsCan7opXozZX14EGsRrM6jxWDmZ3Nik7diL4unNvwx2qn9a67SeTPXdDPqouZneaaQX5TrzCgQ2xw",
  "key20": "3e2fxtN4df5pTBGNmt36XPuFnYTv2b7wK9F7yHai9ynr17xrmpEe1HEy17V5357ereNKQYCAHyRHYnVJbE2N8gpQ",
  "key21": "5S9MZDnBmFTZcVLTZcc4mJz22BUfDpzg1MeA7LmXnr369gDJcvdfC5hA2yds3UxahnANmGZZoxSAvw9GYo2Z1w5U",
  "key22": "tT3iXupyaKYUpVWkZJVc1xstfKnCfpUnzWvC1eLA4Fb4BDUEUdzLxdVhcq4hqQuTimfSmzng8worHFYGCvDQ4Q4",
  "key23": "2yKGM26UQ9MFueW37NWcjtaAYwmjBzDoVtbWz9tzFmsiU7wV6tDobCJ7UsvfZ6S8ThFYGELPvCdn9RCqdGcTw1tM",
  "key24": "oxhPmeJhLbksXWWuBpjMBXbUd9LQmTsAh9NBPgLD1TntpNiBwDSSYryDTyrzDAnPxt4K6zHUsmC4CZ6nfgvyc3N",
  "key25": "42SV8Dc5MmrW8BmBHCxkyqZFTsn5sM9QMYMo5PyuvULUrARHqVPKK94SshCqBM4ki2e1zogac3u4FKgDuSZF3PUN",
  "key26": "3N8nV6xG6tadAGTeykkg7tMJ1hMrD9ash2URYkQd1UiAPhq5mo69a67SGh4ksb29VneC9W6sitrdNiBwP2ESXmc6",
  "key27": "2QG2dxigRiYYNLYgvDC2tir5mjQMEaeY3PMdMDkARPq1e7LbDsyPwYZJ8sZpkNyucbDyAW59w7RGnSCy2sCWb4Bo",
  "key28": "3RFUBxQvvpM4sbyVY9wYtdJifBp5DjFqxonLAGNPNhsDeX8SHCFbTAHxoqx9LuuExBs5hAUCmeMwrjRwGCs96T7p",
  "key29": "5WTC5F6G2pGijrn9Jf1PLM9gG7BLRjTRDPVavUsskUY8MXiXGbgG1HuLAVVqFjpcfrpCsqvS5zL6pqbo4qyeVhxV",
  "key30": "2b7tcjrYCKoaZB3VqzAdabUWufgj1eKZTUPzY43YLXRqUoKUTh5DFooV1yGJ3qdRXgtz1pEu17i61psxe4LJKfno",
  "key31": "pmrfubfLVJ9pwKcMpVni1FfkLNSq2wvYryHj4sphZ5yzjaTj44nr9LZbbHE1Sd2LJFfPfj8ZR5nLocW3UZDLNXm",
  "key32": "3NWZ6B5R4RGi6M8wHCMTvKLzXNxBnkD4eVv6o6rsMzaDpBnGRpv728ikA7j63ZZPwneWAT6jRRZjfNMEFtw92kEd",
  "key33": "6aLUejCbPYcWjdCDLGB7Yq2QHDZTwHnG4542UUbWQ1NSo73HphxuzXAyreb3ipG3bbYHP27TtwF4t53v6NFEC2F",
  "key34": "4t7d5NXeSjURXi52apBQ6fcCTXn3Gb1SyVSKP8aGVhEY1ga9zD2FA6aXGcXcEJn2CSPvqeh2wySpiu6nYEHkgWXJ",
  "key35": "2W2RQPBbJ1DAKhdJCoqGNQLvUpEMoztC86xxVwztCp4LxYPavnWXizfx1YXTHVaqypqfjgtavPakGE3BcsiK55i6",
  "key36": "2ifNBAZwEZWZmT1FZu5HPbQP3dZyYX6bS77yX2FBWx3xPUca9TkWadCUyhhrd3u2XSsE7D9HymUwkcoJaHHymTEr",
  "key37": "KS5Xa2jTJ1Hr7NxuKomigkqwarbFRcPxv5EEB1fvtQbXgSStdbk3tzQBrM72ZYDZNEk8z1NrNkAwktJ2dZpaCnS",
  "key38": "3sQfgeMRycz9ak6CWmqdz5rT5C5tgXahh12figwi13aw3VqkXxYgZbrCNHrY4zJGCHDmCRzxhtU8nYEUE7HYnKPP",
  "key39": "4A4uPG59wMYJjEhu9ZxmciwGsFU3FXByGbAxv1QEUJ8K78nUEwUsnrh7C8KEEfmF7a5iHDvVpXLNsy3qhvGwC3qQ",
  "key40": "45ynrB1d7YteeN8drNwguNgaDnZjy5HfYAyrM4kkBg89nzc8C7hXmTNi3L8KiWfE41AiXDjhwdL9f4CxdG1XXgQP",
  "key41": "29nVAovjDoaoRbGokHpJdYVWRaRvJfQUTPgJP2xjN4ZuRwNt2LTemjXf53YcZUjRS1MqQcDTL6obJQWhQhCLtAv4",
  "key42": "4Gm7yb56eYcrcCMfLZHEwX4sKMDBTUNsMmXPBXJf23dbXSx7ZhtKDq1NpwecpR7KnAAn9HJuMYhchS5zHm2bDG4L",
  "key43": "3pF3qLg9Dvdnx3TdJFoCiD15Uek5vUuZYBvX2cbe9aBgqFQn3KhF8m8Lx4vBH1cCs8LjjBmXNAx9ZLJgrmRmvELV",
  "key44": "4PqiH7CrAQtsk2tRfRJZH1CRUroPZbGd2FUHH3E2iCSASAPkzqLWjCTMhM3XJCuHJYcHTZavvqnnZJhzM6rAPJ8Z",
  "key45": "4tCRPyfvafZB3XKEgng4L2tRwMxgqzZsrbXSUKC42jLoKdvkb9qA9v9ZfNZKZaDyL4q1Du6aPUTEue4AUVeLpW6Y",
  "key46": "ogytV29eDhvtJSRxM8uzuBb3TiQpW15336iBgX3Gpt4H4FqjpHdiju7nppewT4w7eiJeivx1auW64B6xjE91eDr",
  "key47": "4sd8AnakJbTUbf6nM6W42TprHHojJScLjCXTQgqtiGZsePxtNtyQriKg3qJkX2N9eWEE23XkVBhHcAFqA8W4v8Zj"
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
