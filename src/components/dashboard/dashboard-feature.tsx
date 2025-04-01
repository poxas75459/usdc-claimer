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
    "3sW9W4oRJzE6arfRLhnT9GGQkWFyUjLYtdJMZeQ1eRmQsfz3cyeMijYzSug219V7gApYu5m1TGvJv18t7ndzAXec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdjj8pMtACPyL5AAF3zsscfXWBUd5Lw2ouVNNrjbytGFwFfEvVBFjhXoHbxuYod76r6ijEGuYKaj7WKdRiXeQE5",
  "key1": "3mGx1ypJnUEzjHGJrrL7dDAnxf6urGPVhZfws4Szx1YF4ttyoPs9D2KsWxLiLbrmetN369beLVG69DU8E1JqC91o",
  "key2": "5dAauaAHw9dwQeADxv27vNNyjmGqA2GhS3Tty4RyxDBamdwvxerpcSnmFjRERbrYPXM3Ui3C51aD8UzhMQYxGzP1",
  "key3": "2pwvCUFyFCV2oFWnko9LoLrRK3b5CUXxJUSR59T9mxfBERrYA4mAtNYDZCpGzdzuprUBqRJKZ5mZqm7bYts9hQar",
  "key4": "5RyvaXQrkLS3M6CBH5zPuhBdmtWLmSNXAmAtPfHJi3ucJGh3GKiDT58ZVNWwLfNzWqxMnvAr5dX2TiNxjRyFXG1S",
  "key5": "3ZygeMYx9tUyzRLkuoJoXLNpeeSKUjextcccC4dhAb9aELd7TpmdCeWDA6VdHeHG2HVExtzKArkVmKuTQ4zWcRoW",
  "key6": "2ctE1iB8yFLV37z7AjbX3TdaHGNbx5f1eJ98wPW48sjZgkuUo7BCdLMTq4fkocp5SdEX6xQ3pDPhipAWFTES8cti",
  "key7": "2sHw2n3pHTMR3wtmjPow8VfiBYnbexe9FShGW2r92TQTeTMMesmKqQWjnKQesSYTf12MPUUEVDmSGD33XYfRtnJb",
  "key8": "4cf1QVkv1A31UpEP4gQBwVgERHzfNmsWgegmXZw885idq54JvgwzhLrYGraEuHG3msSvtAeAukZvspYLVwveSRp7",
  "key9": "3DzRWVeGTJfsUBHN1BdsbHr6fzZyfEA8PyRHEC5jk5r2RhzUEQFSB5SKeuMWvf2GSBjB6LouyqY2nswC5svzC7hL",
  "key10": "35NGEjjejCKAoStdTqjHLqncfvBdpH61nrP9ukKPCh4tRPweWu1xBL4B35ccnv4gFgkHbgC3AVBZwczCPMiaxjiA",
  "key11": "55PSW8sgQVuCrfV5ii5xmCGGZdixCtsHoY6S9nfB1JPsEbLe8HY8ykMWsbG5KsEwPcbe8syvivdp55PRDsdpAQwX",
  "key12": "5tzd34FVZvPG4gQvhhz2njGFLYgNB4BAz4mVjf4oXs7kBW2yG5QgytVum7Ppw3hyVbB4yCD7uchdwghV5KC86yVy",
  "key13": "2gWkp4sqdRMcdAqrjBDKJoDqiHbtMPenjRc7b7W1D29nmaoxhv7GFezqwEHXJe5eHXrUvQVqXhW4bmkNTMvxoVZf",
  "key14": "26LLE6WML8Bfh4DfF1K2Lcm5odJgXjGrwCMtyshLDYNqmE5SaW9bcvxxp9oddnuoUWryGAgQ474P5qs7apHXtDJn",
  "key15": "4Lh7FGpyXV5EuX361DkjetnjCxbP2zhj4cnM79EW5Fwnz2JcDscqVpV1kgUDhoW9NhtZuH6HohvQky5rbrrXKyGu",
  "key16": "9RZaFb46feRDBJtnBBEBpkv6iLWfUenVjajUvxCHDMb4EZiyWeuSmEsio57QbemY41Ks3uLu48iqp1p2qAPs5by",
  "key17": "A8d9Yx8MW5atzpWWwcYBgZwt4bjWxESSVt7rkP7YMWeNVYuL9rv6ZpdoawdT7oBb4oeaxtpXi1URce4kmjuDNMS",
  "key18": "3NJdk361cnwczJUWwwJwCauk1NTuSXmuLHNNyXKdpjBKhPmKiT2nbiZLPe81nex4jxwHibJiLKrLwty9qUZNMg73",
  "key19": "3GT8R1ARQkcvYsTVeDvERy7yM4ywMYDb94rvnuWDxb5PoMeGHvzFYKNBJAoeTb6p6H1np51XzwDe2vNiSDhnEkqk",
  "key20": "WU61E4YT1H8qNYjQjDdKnrtzQpoL96unvZzLvy5w2wMJuvqfNDMHjmURuATuvstgEHHZTricwkMVxdnUYj2jTxm",
  "key21": "3T8m7hh9JiNB14rpxKtt3oaKaCvTE5Kcb31WEEvV2PaUJacUtkqaTJVZt74BJ1svqusS3EF5LxoEXPMbkesHuRNj",
  "key22": "3mUjaCSwf724NJiQMP9pgh5TuT3uL8kJwsxWJqLZR4dK1D6SryYjfrDbykuoTp7KaF5bjRXV22xoiWg5dHoTXdTR",
  "key23": "3jA5R29EZpFjWZMRgw4NY3AygSue3d6HpoHWoMAR7HuWXxmjq1qWEcsHgj8Xi1VTPNYYpwN2b1RWLoQWBSY2XCDW",
  "key24": "4EJHrTtVY5eF2c9UGaC82PfXvPPvFi6ExJzrABW9L1nCSiKAsqTAkPByen2JQb4JVuUQdFCczCb8e1rqa3RnQxjC",
  "key25": "2Jh2HmQU2kS2NoKDxHHNyZt2UWe8MkEcCSQBD81r6mcFM9dMgp4Fhb4uj2qLTST1WtK5yLYHfY3Jp2o4q2ztXcQw"
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
