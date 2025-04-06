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
    "3LP35vBRMNaaiYC8AoB6wPsyrg8JqiPVkdCmqtvy1ehwmjjHBsRJaWamrvuzoChe1bMLqwzFSMjab5DRLCEuq7F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDZbwipnLxGsamYKHsjGhDCxeXPqzgLs38JDpnRtWNfdTkXXExkG6wt9ZkARX9xJtGSWrnjZU3dsN5F6PgBj9kN",
  "key1": "4cLxDoUQLL5mH1ErF9Hfwm6iqwg4DoKavpRggCvJM5uuRcrRRvEGDZ7cvz47kizs6nADNjhp47xrUENSD2kq9SaE",
  "key2": "EwuASdZYF8NSjGNnq7ECrevQZZC7DEQBMZVWsWwwa64KfjFKRjb4dJiFFnRG12ah9dSBjnmnzbxnh7Lcba4HgKw",
  "key3": "599bMsXBkQZs3mY8nwgry5cnABQdCGFSbzSdLjDtTyqK2sRD2ZuHPADLY9qBnG7QaM7zFQ32EKGCsXYVdLurcxyb",
  "key4": "67ZTjYaZdSCfdJ3PTGCNbR4nRWnczAhKebDSKWpEVZL3ipAzxzWBxvFpzxiBni6homJGSVhoFT1FFR4GE3DNa7gb",
  "key5": "3Q7HrZRyp6fd5vpiVw9pag7FFqJptuZX1Mr9TWtzGwHVmNz5aioNJfnXDTkUFYRRu7Lm4mXbEahmegn5AnHwMY49",
  "key6": "4WkCHBLvdsavDjmRwUFppe48nFT4FRphrePk71WufvCmjJa22ikzwe73kY9PmwwBXqKuHdiHPJwfaAUnVrMXsDSm",
  "key7": "21kJNxqaoCry6EgjCC8iZBwmkdnbtaSRRpwZzyztAYhVXS1mABzRDmFUfyQATG6LkRYYStV5YEsVFV8hs6AWW3SY",
  "key8": "5dT9wt1gNdU9hoGMmCfNr7iMrgXjcnho5Y8DVTKuqxErAQRuGzHTjXaJ5Dne9QgxMzLczFApLGBNN1bqngD2Uy51",
  "key9": "fPGUaupsLaKZsqHa1vHJZxD44PcF8h7VKVsecmCV8qVZo9LpMk5pEMLVreQNAbiK9CaeAhvSz9dTDTkSd9RgS8M",
  "key10": "5KkRQCXTkjoFhFbVUp9H5oLFqZCXWbD3uLVjmfvHgFUsdGCR77GYysd4cnB3QWyWrRpJP5Ted7D2xNkUH5fWBRHM",
  "key11": "3Q5twdc9ncN4mAAcAKsnGjGZD2gMxgSDicxo9YGvRWrrQfsCogRv8qRm6uR2zPR5f1DUbdKsxVvj8bLTDbfqRuAe",
  "key12": "64CUb8iCSUFHXQZ7CujLK76SJFZdceSbRvMkfnhimedzfqyv4n2uuQMfNTJPy9UqPkBXUm5tR7USVAig9w4pynCn",
  "key13": "SHfsSosRLYbzV8oi8jViayPwSeo7hSwB5iQ6aRbbWMSwrdNSHbWGPhuXsuB4HuC33jxgGVwDz2VoxC8NqvvdTwX",
  "key14": "4Q7Ay4WZd2oo3RSq16aLa8h1ASrREpkTtrojA563sytv8rg6NUoKDvZf1aUQKkWYWorqZbJXM4nCe4n4dCqkvUYz",
  "key15": "2NLXhT2FMEuPaP4omYhhJRE7wBz2UpWujFLkLHnFZvjzcqWH46hqQncNqszwhacNcUuksvbCwQqvGR8FgTMsoMe7",
  "key16": "3bB5BEViVEjQahkjodRZ2okJYEpJ8wHsTYGrXtXKmTnd3jbFCuEb4o1Thp7rTKGus7JRujNcyMHGpzdeZZbuYcaV",
  "key17": "5dFEHCeYa1s6GTVbLsyieeHprwyNpj8XLSQzh5XPMR9Q3dnFVHPSNNG1bRoFFUg5yShyF5hB8VA1t8BHVEEZsbFJ",
  "key18": "wkCqXQAaLTK7XLC2w5D1suMyo6DVYEe7tFG7kvJFeraYjLJ7tq8JX2e6qPcSWcjxJsrPU2sWRbnV5RMHx15nDpp",
  "key19": "24nymrkLcnN7amxqHkcDjsvK9de5uWhS1t6SASMX1kYBgXbaCeQMreLyfKmzmBzwFpUEZGCCbCVHAkHUt5YdW1z6",
  "key20": "2BgesaBc1zJrehde842Fg46mmD423Pbj95hovwZaU1nme1xRb5VshP4bvsC5mXjago6kYnZU5DAiB74A4hPL8Div",
  "key21": "agH1k5hZJQZjrPsS214A9QXar83Zzo6PKX7vvrL9qQcQsWQX86qeokzuncLrKDEzDDXveZ3eeevmFBKqX1jXScF",
  "key22": "5MwPiSoBvKmYba5PUE41yybkhgV4rvPHG8hHojTcZve2KCpZScJQthQLpxF1rxb26y8EvDmF4rRHGeu4HSmkAgAv",
  "key23": "3ojphbKtr5vbnWYJ2Nxam8ZYPrqrKjFaUXCiudviv5WJwYSS6FqTsxUT63MkDnq7N9k7iQSymathrdzSKKiy1VL6",
  "key24": "2VqisDH2o6av4Tubvqt5DszKdyadTLVYAdWr6pzn4LHFAq3VSfJ4VuBeu8sJpxF2jrq367np39CMhiFsMX7tqXPG",
  "key25": "RFBaG58NA5U3CjLnBZFtGsMPuNJh7DJtKLiQrvuZXaxC4dWMkM8B37eXFgVDPygRADi2Vy5dSRsLE2P1m69yAPb",
  "key26": "36Yi815DyFMiYB4zjVXMSkA6iYJxhzPhB1Gd3nt9Bw17tdkxdJU2P4ntZsTMYCGQfJc7dAFZznLeEVtxyGcpgskf",
  "key27": "3fvWnhyrYAykExPhURvHXwcoKb5cxvHLgKWpePQ5qhKgL79pDL4yGDEyh94Cc3jMcpWBABQmehRFsL23ECtsmEQj",
  "key28": "3LxBLC8nAw4hnfMbM2xiepVwo3RfCiBXSeTg8usVjiuG8Nhr9i6zquEBgF1ggXmXYUyL5Yu1QCtZFifKvRAoGMtx",
  "key29": "5iYcyf14YDrswBnGebJqKU3Fg8qke2CLfWRhwnApKRn7fsuxq4xUegFDXVAf2zXSfVEDqnmTfrdk5UZ4cJdFHodk",
  "key30": "5wSqYR52TrNEqzfpUzH4Wskgr7iTnpq7G2hW7HpBaSeoQtmzgPd3uZSh8gNBh6uCioMKAK5fojoUW4DuUXpGAgUi",
  "key31": "2rJnENMyCPt8XiPZNmxPghx9iXZuPre2jDm3kwWCrzpfYK2wpNMDzQc1Sbu3cf2y8aeJTMBA8addcocZXdMtynro",
  "key32": "2pCsSyvy5XhEyQowdYcw2spTJXHESmdNGCRyNp4Et4ihwya1yXzjwhoZ1hARt5KC4vBE7ak16zpAnEgswWdwVA4X",
  "key33": "5c4EYLWfiZpW8y3yXFRNW1D3kB8q5jEWhta1qtFxjLiH5N8VuHBvUsQzFCevFYv8gDTPqDPtSUwFBWkoqwAPMpCt",
  "key34": "4pgBJkKP1tDtSiZ3hosjArrhTergowAvARwCyHdV54u97Wi5abLXnbTJ993j9eeSwfPTY3RzX1LBti4cnAosMD6m",
  "key35": "5C1Q62B4BViwLRXgMbSZEduRsSFfSyVmQK7rV5RNwJT1nnpibkTSSMYLH6MpsBc2Sa76XQYrfuF3e61eCFQPGp79",
  "key36": "h8JcDB5bS1VTAD8YB4HKAfkexSwjYpfRZybzFJPyUqqX7Ycnj5ZxLp1gtdopf32utyxzGz1vauRmhvTpgqfTzoa",
  "key37": "a2Tg4QhRT9WaQh5V4xBAUr65YCCLH8TvU4XnJYoKowfEH1qcD339WPkmkJ6TRKhzQHsGMrYzD6DhACJgknos7Fk",
  "key38": "1DwVCQDRKv9XvTEQaMFHZFyvMxaVRLdwgu3Wr5b7k7hB2Z1SASaugEdk3CXN4A1yTU7YT2D7W1Y8ss37A7qP5R7",
  "key39": "3TXsVwQPtg64Mh5fjXKbFjqVY7AYMeV5V5FSuaUZUUA6xBFj9XQPyasbhLj3hJbPPditRqSAvQR8DA9RbA2J3vnU",
  "key40": "4B8FbAQ6kJ5who8CpXnNeSDzqYH1ozWMZJZDTGrbEzq2hWxGreXEjieW37hHKXqy8s5eYkQ5cyLjkoLmkFCD35vU"
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
