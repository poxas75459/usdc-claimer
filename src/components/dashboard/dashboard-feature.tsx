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
    "3e8ycyHCPMS8g1WAnBEaQzgwvLyrxxL466A1rq22qKyPKkYbMBWJBVAJe656KV9wd153SMscmqovk9s1aSddb8u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e4HyJcP83hhZ3VYpVABBGqP7VnychqVtJ3swMATWxJWtezgCwRxz2YBQvQZctU2rF2BeUJnMga2hXa4tVNkUBNW",
  "key1": "4YiUJRWQzeA8yYv3iNevB2wzqGKuXtU6FssxakG3KMBxqbU6y5r2nF7tWuWM4SSYXgnyWQz5nbpw7iiMPP2ttSec",
  "key2": "3nw127ep3YFuLyZEkCicksrJwJFXdNis2GhNq1HNANfUJotUh9hLrpjeY5b9CqqzWfUBo88FHJRE8MJW4rCUjL4N",
  "key3": "2HCPmiS33hnCpJKy8dz2XYCjZv7QdMjpeNhbQ763ZaKi45q3M4YZ7gxMLMXwdDorUYuYi9jWFFj9cJdj2AYZjUbU",
  "key4": "5XW5tQS4oqkp1jSWSoHmRDXetTv46gWz8b1RVVojc1uY852qc7nZaK8namRt2tTX3mW27purgrcBVaeiBK9LmPta",
  "key5": "iDoXcPRbjb8NTbQw7CNvDYHvarxqcVe7S2iVw2JU4N7TNQWcSWPg9hevzXhRfnRum7e6GMK39BqhLjweSVMs2rS",
  "key6": "2BvXc8LWyLHpPgYVA9T1QVkgeoMX8aXFasPsgYJmVrJ6E4zWAW79an3ZmK6VFSHp2bBGvQJjh4St42xT1WMpxFnd",
  "key7": "3G8NbcMM8Q5a9PCtTs1a78sccTFzWVxqEXfc99ZKsT8wwSqZzSgA651N94ufKyZ2ygZ3hJpiraDE8ngV1SLdMZHN",
  "key8": "3gQEEXhsQ994FdqNHJ52GmU3A1gr6wfbM8BWfJPZz8px3aZ231DgMVuQjMvQ5i7f9DNQh7NsRrKiWBhL4RENAw6y",
  "key9": "5BLmbka4QzX5woaB3VsJAQFVktiggjRbZ7KvF4CQAYNe9fC6Kg2RvBVSvDsrhxygQzJJoJaAMsuEEz71pnkSsKzr",
  "key10": "3ixTkNBiGMvKsb34XedeiKFsUHQKmZsY95zRcxKrP5CLpc1im9uvEwoec6YLLs7nJR2HvNGUBpMt4DRXdxz1gfSp",
  "key11": "3fGS1SkdpuzN4jCX27ZT5RYKY5w417cKAL9kgeuaQ1kth51P9BWXBfMbqnsCRtuA9TUj5hQScxgDTmqSZAi3nESN",
  "key12": "5a6NxZ6a2FwGn6ekoTGrov5zZLvEfY8W7a1rXHgTAnQUwmff8xPCHMxfLhFv6kPPMmUkuzcgdyNvtdDhJQoXZVwu",
  "key13": "stTnNm4uhviscXfTdo1AGTs3nMgT3D1kARFArrUgysb7SegN8LR1LKUao85XXcHktG3Cm3dawxRqgDyP44UNDTP",
  "key14": "z2Tng2BaCnfnt8643B61d3PjdH3p2xYkYxsnX635qXdm2CpneTs1AZjjTVe1pYGhPUKZ39dCcsvqqK4CpVjZXQZ",
  "key15": "2Qq9kCkXFhD3S87qgDntuCFs9PzgkC9RKwPqd3wUzGwebrDrDFDDHi7r52A8CtwtnoWv44gQiHcy9DV27EGw7cYf",
  "key16": "2g4hhjA1UpVENFYof4uMhVikHxJKMFYtXJmtWsGzdQS6NF25Qd6RpPXGzjvL2gdt8ViG7JTyaNZmmRhsGvUpTtX6",
  "key17": "4ofZi4kB5FfnwchTgNQduuVq9uDRAuRqRG45FxTsTdT88u5xnqkAdFAdsnjWBdeFwHhTcCom4U69RAAhmY6Uu888",
  "key18": "4BaU7KN1JLB3xCwvLHFB75dx2zcFMyQGZPvbX1dSq6hfP6nBCpF8FHFJTzFqFViR55aYJUvGJ1h8fVsGSD8xn8yu",
  "key19": "2BAY6vpkncz7yhyFD7DW1bMxixP4GY9KqkFwK2Ua2TJ2uE74ju5Bagfqt2XVBFA9XwaMDzzeRK91dkHsVVds4zwT",
  "key20": "3rP8FgYbfKoEnNhfzRRWwLAbR6qugCUjt8Vr1TZ1wcJWZ8YaqzAcUVaDJPZr3HknvuNgKwEURjkN1RMixpPLdLux",
  "key21": "5Xe5yMxFyZey5FCkRy75fneZdFqCqh11G6r2EEYbUSR7qJ7VtNfq9LEc8RgnDRxknBdH2ogKKh3qhxbAYwcRmzV4",
  "key22": "4fEc1d5M2j6RePUJNxqHW2cyob64UXWG9MMRxhw8cW6zW5jZxMbq38NiKoQjSvnwpB2T2dxURGDCTo58XJVruP92",
  "key23": "66WNfGdkTnwcF54maDGYdrz6SiJ9JVATVxoCfEgGF5s9djf7twC1JKdPPpX3UxWDio36sWBtnrVRYRpBKvC5Df2o",
  "key24": "5oq16bBEXNu3ANhLSyxzDnuviLHwJtHz8GB5fUaUqRinuviFsk8RBeh8LGyzLkposCgpvH85xZ1Bb437mC2JddoJ",
  "key25": "MiPpJdDQxHsQpLt5EtV3KJpDeptZqqp9mimK4EtxVHm9GSCoUuSLwidi9g2bQUe17zpQ5XTXoYLG2rQLRhCu1D8",
  "key26": "2fgTXXBnvcGMCFKiBhEhokorM19WpqBZZo6VtVvEDBCanFqPBtWmpKgwCvUJZxbPZ3GH3M9SCTrJ9pqgoTcUFKkA",
  "key27": "7ud7oBwxZ8NA59dScqbJEDbRVbT1Fs8jQWTrk5kkusoNrhvTYDJXbV5KAXijUPocM8LdHGnwdWoUDxfdjSwzAFi",
  "key28": "3XtP3hemqCEedZpVWCgWskZPWEssDX5m6YtnyAF4yXqeLZKbGApmRdLz1otiU8ER4vgJaBgxFEW29VgzfHbYv2dM",
  "key29": "4tTvGayPvXnKcNg5RU3nebKRKtZeSWbhKdTN6Gb1iC5HeBWyTuzYaReTzUD4m3hA2SYqCQGuetDPZxV4EUnGTBYC",
  "key30": "2qfX2Kgdw6TntYUfs1iSV5ScyzynQzR72UQSAixQFfSDyVcBeNudxHxB1i27Q94yoe5qcQKPNLKC1ZJfq2emz7Xf",
  "key31": "3qEdVSan1ZemoFXvbTPuBMDHxvqqWu4EocrXdkGetU2YYchiCLTtfTGGWkzcMLsSbCBuuAVxFznqEMEdFcBG8dRV"
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
