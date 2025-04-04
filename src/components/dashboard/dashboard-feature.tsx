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
    "4URCFMS1tjbSH74dJoa7ys8nTQyFzvMKfAoZ2bGUptx8Eu4XWX3kSCoBwZLKWmBiZu5eD5DpNcTHEHY7rDGVAid5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4YFiZPqZBFRged2NL16R6tLB1cdwT5rDA6o8UJJ6C6itKUcvihCHfhcixAAfTam4SHNVonHj8qPtnEfjiJoeLJ",
  "key1": "3woQqxK9tTMvGHfbksPvi6ZNCWuDS88H2GQoBqBvDG6qAaba5fyNaPruexog95fkdqfmDMsuWmPVAAZa15TrEZhT",
  "key2": "2MLSJu27P9ecHF2WffYxLKiCztgeqkFS3dmY15tSzy83ZRBZVycG5y5UEFuXmUx88bT1UMGEc8HZmpHRwaUZ6vpH",
  "key3": "2L5uzH64gJVFyeiduM6yz5wrdfWC4sbRM9zAE51Yj1RmU8thw8wKF6qwgBQazyuUc2Yy8nSodnqKqAvvfveUyAb6",
  "key4": "2HuAsv34gUPnCq7eai1AeQi5ZzfFFb8npCL3Lijy1VeXkvLXGMVPvJGxsVdMVprD1h1gGECF2ahqQYJvHiLot3QL",
  "key5": "4ZSJsHqTogshw3TtVANWW7h9KGqZvixcL2BgZFnG9ygBCB2RQuD6tWeJYBnK3jcRfkPYYCF1wBgDPco3HFS9FkyR",
  "key6": "4DCEgpPbCSq4TunoeRSJfkE3MZtFSb7MrknhFx4mgXtUrwrXUvitb96ihApr8HxgrW41Vyt3z7pMo146Na3tLUfW",
  "key7": "u8B8FXV1nteM65owQ5AfFyzSrUEo5AnXopcKvGzFusDFfE8i9mQ6ztostcTBpsBDgNye4rmhWfgDj1sDxGhR3LN",
  "key8": "3iv5Vg44jrH8DoD4enLka5XNu6dEpstJ4uUSFQRr1fYesFg3t3zFdeXm19YYULPMpNo6u6QwpnUX4UQA88CYjEgz",
  "key9": "3eK52ZFLvDdsTzJ12vBsXqpW6fE2fttTEAM7fDnQgpwd2KuJk73s9y1GkPwAGZYfrhdsiBUskmdfDUHQTjnr1piH",
  "key10": "58shw1M4BQ2L62pLsLkWcoN5yLN5tV4xG7XfSrU7SRb4SNSnmMjYHTcr2LMYka6t3vLEiYomCXxub5Vo8q7gadGg",
  "key11": "4RMT8DzL6UFqXQnY23iiDJJikuU8UTftwUsS7ba6ntVedy54CSpQhYUkL2gyAyB3tfMVEkxC1LfmkFw4tbFpdHot",
  "key12": "4n24E1K5w92gLKgp7VKAoECD1AUjnLsNhXrWNdXF2fzAsmt8fHYH2L7aGxCcpLrepS8yLCdAqt6SukQMkascFvrn",
  "key13": "WyNzeuFswebGxBFVgvnot6RqcNp8dkmVcCik9yQMpJ9qXifhLLxHgup8LumarSkCmAT8mxoiQTaT4q9NaDbaj46",
  "key14": "4hzFaHeB61z5FLm3F13UHcrfbjm6GSJmPiKxMsCKMzGD8SKVdBrHUb6F3QAPrA8CSaFuucpkK5odrFZTZH69dxYP",
  "key15": "f7Yp7rURUGtKQvi6S89Hvy6URAXhQjyQ1m8CXbz5mDC6nRfotaxbyvvQhNU8DGvXzwPGVtuyJqY5evx81Ajk13o",
  "key16": "XWsfsjV3Yu2DDrtzjtBgF1Qh8w15Q6wutkmAPnniemBciW2Aa8jZaRke4ghjDvf3wpHtiKe9ytbM3TWoDnnassM",
  "key17": "VNfDMqYJpw1CNBx7bAoR6FXGAcFWJL8w8GKtZSzjPxoeRfyBiFxCdmFBBCN4HPpxfJZeST5WzmVvwkqp1GAVmZ1",
  "key18": "LuR7nxSNfqZ9R9FbS3cdLy3xV7fTDBm8XwqnoNMyTaz7uXcE2MUX68TWMVQSnnaqua9wiSw5mYrUbmjFNRpVYKN",
  "key19": "4qLKJRuRED4JCVwPNg1o66PrA9oZtMaY7g23PqB9nFWs7Ao8e9hwKvasQXMPaQSNAxB1Z3UNzBY27QqjmAoWqZ61",
  "key20": "5gjqDbURKDqFvQS1L1DU5veSaHAdMQwwMzMbyWPGJ8aCnqTjKZZxyDudJuKcKzr2rLYKnnnDgjF9xuZZu1rKpCPp",
  "key21": "3woVEzwgMkXTNnVA2LBtEWRWFGzLkzq5pMdVavTSbYy8poQcU8q3zdbWhB7Kz2qQtznHfP4urmPPukrQCm5pNs9",
  "key22": "59w2FH7kYSCyzkpcAwSj6mMqNQdshMZpHb3HFaYMTGumtXzLRJ2Fmfs2nbzjw2PLWyGEVw2MRPEbhwKoC1xjjz6M",
  "key23": "3KZrtJqaBDtoSZhU6VmYHnfnvPUAkscnEV9Z6PhJfAKt8YNgah3hxY7c3Pijapm1iu8wL5kqBKpDqvQERDMzkKSe",
  "key24": "41TRiydpEjiEv6mcbui5hX5tNzPhoqeDvENgQZKYTdUHbeCtBpqrtqCG4UEr6K8wF7Xn9i3xYXbfwzxt5JdL19tk",
  "key25": "yv92ynmHjxU66iW1n84L1JfjTqLCvhri6Y1M2FrMd36HM85aUtiFdd1i61tHcSiyv2a6V38aJUxShNLSiZzG4wb",
  "key26": "45XWqJM99iD65CPCSW7Fu4WEkHdpTbxKgRuVH3aDZ3S4rb9vkWHzu2zgEM2eYofSptfyTb35gx1raFhsDxGK6uhU",
  "key27": "4wXADEQxBBXtVwnzcaAwGdRh4TRWQNaw4qcMgKTxgo9WCA2FE3soayfWewndFcJUddDaVwNpGfeXEGpgBMaCRPAZ",
  "key28": "2eVhcXs9qQmBF7jm8xxMF8jyjYKbcyabS5inX7ujEVEWnsjzy7udQab8FaYSiRqvSk86bsTVEJEgJqfYFkC4PKZk",
  "key29": "2wVZGtXyb11ZQhvaCqpUyATgvBMmdgHqjh5yvLRm9TL9w9DRFGn5rWPJbGWKNLqTJRyDWDu5ab1c9MGu6WoYifna",
  "key30": "14Azf1orULCJSjd7BmXwds76mwZ6qEb2JT8FvbUsHyQMxaT2J5VUMvUHyzPbCLkQdifebAMr9aG5Cahba83DHEB",
  "key31": "4hrWujN1hEvUCiWSLWtE5EDnE6MJFEUooSDrC38gsZNJHwnYoYNJsQhMbmzzzUTHNGEkMQAi7bA2WL46VeoqeVyQ",
  "key32": "3funM7WqJsnQzCBcmSmDUMtSuMUDLwcoFo7Z6Qks23Nb39CDZrVPv4Bq1p1tg7g6Knagc1krrmp5RrcTxmj5V3vF",
  "key33": "39h1W5CA9KgEqapMsHzUm3R4jYcFKsadGxp45wwTgt75Kz5mPP2g4KQBCF3sLjJZgJWveNtFG26Bx6Sc63DRaCfE",
  "key34": "2UEn6mL9Bn6t2cmBgQ518iLAa5zmu5pjgkKfmAiFiM7pG8UoVcRYn3tuzoGMg2qq3XpWWACW7dXSRJs2EtLsoU2J",
  "key35": "2SQ3h1Dwz1WXFirYfjQvoZ5TZy47Ej4ai1xVC3am5dWa2gWt1LD9Dwvqoj6Rw426YcQy69k48BkgESQAcQotxQNy",
  "key36": "3YHVDYW2nVxUYBpXxrx5akeW5uEp5xF3DkFxYMCVu14bGsm785spFMxdZWu1nyx6gcxVM2fGQDdiWAaKyWZjMUzm",
  "key37": "92kTJ4dCX5hHeov1AXtUAdUBXnDYS9q11GhHYU8PN5itN8rSSRMRQQ5B5ZSBnw4TvJeHHS98HDVhqYjWydyJFXG",
  "key38": "WDTu3LDsni1ZwaRuHG8MSbzTpzqHsWq3LyyXXbsYL3RptJgd7VUkDEhPJK2JDkNYHLKcGm3RLR9DHUBUdYUfggk",
  "key39": "2faf5hACUPw3G98hMJa2fY2Ejv5ECQHuJCVaKyeqn99jXNP7aMeS6NrAbWgVrnAQS8bxLm2d4mYTP8kWzaXC5hWG",
  "key40": "3jiwYgMtNVZUrKzV4SAcXZP1nnms7SRzHezax8shUu5VDmPBQkrU5AjFF2dYuxKyuPJwjXqYHQ44WT2B3DYX3GqJ",
  "key41": "33Q8Xp4gs1sz21FKd949C3ff1oYrZrPhcWXvAjz8dM7ueoEQU3n56QjKhibKQPW2h2J85iG2yrgESoU6mRPXAaQE",
  "key42": "4xoiYGutPBbfDEXRnghxXbMi2EStNCfgS5xxEc2wsDKwWUxPEde917T5UeFjrbY5zod41CS7eRS4j4P87rFcp7Yo",
  "key43": "23hoLQQGGs2MgBiLy5LJexe884i1xVCZsG4bwVjqyVTt1RLBJQrX4krQH7X2itLy4kLJuLeQuTQnBdFiU1V4Fer4",
  "key44": "2rN2rQSiyQtfJKXLNcTXi1AH4E15qyi8oYzFZFbMFKDMHuUw6rNdj3smF8q3tghFY4bF9Dg1HdC2NoMCs4jeSHM9",
  "key45": "P6WVLV6aFbQtCQqNpd1oWGZLLRdSfQ8k9F9UgTLF7MAex4WyZKyZfi6JGabBzzwB1e3vHJBFAj55VGxQMc4wBjc",
  "key46": "5uXnTWV7a6a8K2jGKeuQmBwYJm2Uo2zfVvRQEMpcmZj93Jhf4F7x6Rs5nEvaDDxAK57wiCrTqaxztLpESB6BNQgq"
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
