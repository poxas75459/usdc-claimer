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
    "42EUuQ5eZi1knUUmuXafQkHFnMHYTpCdpVFViCs9Vj6UPgScbT9b1i7PN5RSHy8e2JQogW1ao9Xi9FiR6xVefXzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VfzsBzdpLP21fCvntgQ8E8jmix9dQfbpaWx93h94nSscENaYN5BXx9WcnLHKwdoa11nEWLk28JBm9NJrvLin7bT",
  "key1": "595oXVg8KEXbqZQAXRx4pvBFvtYQJAiJKXM6HKHSoZuLDw8Q8rQpyfXom3JntHV7riaD1WGhgWKZpNeBBaRzTzJ4",
  "key2": "GBazpaUNhvAaV3e84pUwp6M1yzWPbVi1j1qVLUaupBG87H87Ew8ewLPuknuugaZp5eaGFS6LbHBz4wQMxFZDb6r",
  "key3": "5UcA5CVepRESgFAcfCeegRL1yNWn8Ke7GrempjCiiFNSCcinnEABykWTqkcNZHBXf7bXSgqDT5Wt8248SZjeYjYo",
  "key4": "zPtvpZmSyaWR5LJ1D7Y1yAe7RDaQ7nuyDsbCm81XRXhAbmpzRtvh6cB7NK3MVSDnzwRFTD2G4QbZtabBrhtrPX6",
  "key5": "tuLYCK3MAMyE823gBpdvEUyaq3NKCSwxqRghheeE4dN1LxRAAhBjUxFBxCMtXHxwvQEtZb83kCxchs983QhLiz8",
  "key6": "66Dix5zyjkCmGXqWiJufYf28N4HdW9hSx54BgJrdbmPr1qcUkfnnxiu6uVUZhwnNqsSc97ohZYwrxJN52ZZrDq6L",
  "key7": "FAwHXuDtBbAPihKVsYyhKeYMuUsGHYwERFteXN1jZe9Zy5pbXVW57ZnohsGposNbVDEWKnB6YyCEyEEoAawa9L1",
  "key8": "2o431HVNYWGQ3tMSxs7r2c1XQXsiC5sXbhbkRVUt2F3fK6SGLQRo3WWf9CqMrPFpqXmE5NXUkiE9zBUi4PHHEZgV",
  "key9": "4p1AdECKAPRXgGtBftonqPKT3ZNwJsLtjisSdDa8TXBzbRsVDQUztFa3H2QUXpE42utRHFVDMJwQC5tUig14D6b8",
  "key10": "5i5WKKjjN2dXniKro1nN5uGfAFNGPE3UnwABL3EL2brtefFBLjuXaFERM7jvwS8wwjsi8HhtoYA7Lw3UJY7XWt1c",
  "key11": "5wTtD6DvF5uhV36kjeus33PT59fUFYFLzrgWnA9xzAv4u7cHfcgNV5bur8hzdjqd7TchCdSiLhmndWmETrFh2C2Y",
  "key12": "3XSWW2j2Czodrrh7dmzk9zbt3GKzfHvr7qZ1Uqras28AQ5epzn2Z2m2sYdrGW14svxqVX6tzp5YepEAPyopNzUje",
  "key13": "2ZEnDrj57ozdxwk5RCGF7Zf8hRV48U6BTtTNeTD1Ft3F4PH4fufXvdaPGr1ragYb8p3EXu5282n8Chwd8r6vFefT",
  "key14": "5zsK9J59ffxaKyLQKa7K5nvz97LiyScX3i6gXJsB5opHHYmRUc3QNsUxfsoMwGG5qk7PYkzYCP5BZ5nv6S79fy6g",
  "key15": "3UCcatQTY7DCf99e9S2WTLz63FyiCJgRLagBcjWRpoNT4JdvWe9WPdQca2E9VbdMWCwg3mkFQQTvCdkN5WcowFiL",
  "key16": "2bf59QFAfLiAe546exdbJkwAXXZK9v1QDHQGoEuWzcPx8hbuB6AXEVwa81QJjKTpfCY97woSA4Ks3cir6Ag8MYNj",
  "key17": "5t2oEC4AtTDqPbPFiftCnW6XfnMUj26MLAMRb9UrLJLGYm4JRBDK9bJJWdAvUmr9ugo7idJ7ktXKFMkN2vdm8VdZ",
  "key18": "55MnpAZoNuVCNzQk663v662zPsxmUv1pT7EKivXVj3idPqWnfftaqtrv1WzzCTcSoAiXrYSXSN4U8bZ8AgqGCGNK",
  "key19": "31aNEp6jwkBQtgg75TcKor65krq63pCvnhFYo3AjyyXrytSTjSa4DsetdLCcov7XQX3mHoZBM4cXFnJGspGypBYd",
  "key20": "3GkuLaZanw6stmRPR5ixEnq3vyK3AK5vRZiJi18jBnV5eVpCJCveKRFxXVTf2taeGvjNaNhHZkarw1BPbrbtWXR1",
  "key21": "5FsxATJgfuLHhD56MW7DYUERif7S4DQuSsdZHAhULnVtUbJ6TAPrBbHGKiiyhokM3t1dpGW7EprHRBEQ6KDa3Q5",
  "key22": "5EM51odB1e5xzmUqrZWoc3f4dff1vxdyWG16hz6NdDsrQBKpovtS9TADyMjjCcmYzEYG62zPA1Pu4NRgcSBG43fk",
  "key23": "4UCLCE1jPtjvth4or6TZ8BVP8Vvn3v63N6doSeqoxgUNYLTRLLPd64HojWKb27JdojLwjF9MsTTqYNDFEhLf8BvX",
  "key24": "4kuVqVommSh2VFnzRCpAQg6tjuJuLomixzhv7HVmGQMA24D4c3dNLbE3cEiqvvdsMoFMhyycbXtdLAQskGCeUCe8",
  "key25": "5hEDTRPUWbV8ujYGA6F26pqLaSyRNMoR5NnE9Qp1VcwbtS714QSEf22to9dUhFPMb1L6LMrD8w7EbB6wJdycyiZV",
  "key26": "225tH4AtDs317hLptiH2sbQuLTcxqFa74qYz3HTddAaWmF46PEoEnLnuYBujH6XPEKn6ustgTPn6SU7XcQx2qquc",
  "key27": "49apapLWpNqpLjV5nGSTJ1NP6iKz54WGsQiSZWTVchhRq642X6fmgtJ8RcA7Fr552MrXjfXgo4G87XbeR9QShPo2",
  "key28": "5y6dAzRMRRoSfrBA7bCakaEFWXpj8cqR1ZWBmPGoyetEDzAhAiv2iKodEq4a9nqRbhQMz3NNQohu6KYb5TSvBJvT",
  "key29": "3E85gtMtEZzysizVfBBgkES6AE1PszyRrWAHQxciCtRC6rUwswku3UKd3HhV9pjkNsSwustUV6FMNcAkVMbZXCMf",
  "key30": "2gAz9RG7achuLkuyisV71yT1NP6PNEf1sWk7Wccx5TZP4yzRbKnq72Lu6ziua2aHNpCYb3GfiLaYdHrdzDBn7gfm",
  "key31": "2K494BHcJQghFSgBLHj7o6BAN1jrLaA6urLwhVPT1oUPCPCAkv5wRcft4Rnn7wPNq8y362BC6Jmqs9u7cREQcBdJ",
  "key32": "49U9okZSavg4P5DWGqHrsDmkkmR9215nqYGPpRAksbwymbKNGgfHC3CfRRZpxFqTpGRKtVFNSuZP59m5kPmdVTL2",
  "key33": "63G2gJKoDG9GzT7TVdKvHezae2e9ZQjkhhv7QAcs3N4zKYUwWZUxdzoKVzQc8fipQprwdhXsGsS7J2b39txQAqAr",
  "key34": "646uSe7PrVW9stsvgLXGJ4bYjQSGPZvEwTMDangux1YLC4hRRgXgq9rf1uGqyNNKckKJuQKfWSx5DQWp6p1LhUBG",
  "key35": "5heVUatFRd2zUHbUwPPiUw9VVhp2FzLgoreKvGFesQpYRXxPkK8LL4bAYoYKgZA2nnKssr8iHJUJL41iWi494mvi",
  "key36": "65KH79hfZKqAqFWwBiFKFdKesP6NU7XKMKLsjoJn9CS1md1KQ33DZp8zRaqmJuiiShG1RxUmNsMK55Zs3yw3nrWV",
  "key37": "GVJfXLLDVucjkLTW5JLb7VLaC95qjG8xruvtA6inARwF6N3hyJpK6tgyGiAXaDbLMpRZ8ktH4B6SddQugovmp5C",
  "key38": "48zHXzE8Dj35QuoDDXtETM5MyYcNG8q8U2o2gWc6ayo1uL5YqKfDoH8gHCHVkQazRrjAYo8fwxG6aPebuAX3aRvs",
  "key39": "3Tga3BfPhAaKuFJHhrycSUFBeX3K2tNxHBezf1irxzFncSyE6cY9BvH7oaugjPFT5EFSecnzoReQKv1rX47644Rw",
  "key40": "4b11x8oKf7ydPskPySymggMGiFVJe9tYkHtvS4VDkyu8cPgUAhfcyGBcseKNuuu5ugC7rwYSNkCDR8eyPHsva58A"
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
