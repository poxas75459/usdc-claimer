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
    "5zub5AfSuuTZmxjcjZGXubNVG2hLgQ6VL5CkzBs7YDjWbmJXTHJSqmsc5frPShgMpQ5cprunwGUH4v8sfwWFCE8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1uLnvbGwYjGExHHLtXbCskePmYnTLXtrAghRVSNNfaJpNPQZjqmcFPS9LoNbuFo4tpdRgMS26w1YNEHfxtDxtt",
  "key1": "3DuYkvP6v7cQJLmFCyw3EUk8z1fLgnj4oLeXVyCRuzNKJdnhVdtZyP8ZH8ua22VbpFUSX84zujLFohrz73Cmipx7",
  "key2": "xwMUPGGFMY9KMvHfibS9NNDCmLooErMbmzaZhubGrwMhYaURwYGtXDWrKyCtARMTj9SoxG4JajCiEnBBSGusgqa",
  "key3": "3SMWd4oPyYaf6CG8sKhJ8DSjpwcDEZA6X4niEPGY8xaHrHdMQvScdBV5dEFaQLHCgj6XoPPuQYhhDLpC56AorLHc",
  "key4": "39Xq49JwDt2udwykCWgjtP73YZaYLhJUpm9SKmATFPnJkTFr3RVQBdEXh84jWpn9uhSok6zMk3hSggyJNEtYb13E",
  "key5": "5dcfFyNBtkAoywWNu3iBP4y9TP1xEaiHMXAbjRVrGfPygjbda31wmYV6G4Eh3CCTrsBZToMq2ggwkDLmczpmCbRX",
  "key6": "5ZgGhpNCy3q1dofgQwdYJxZYjsnWmhSjJHc65EmVvk3gvHyN6bkrZTJo2bzqReTRGWTjw3K57yvm3w22J4GcVsjn",
  "key7": "yfyn2ScRxgajCWQ39QY9oRi1J16ssh7zkEi1BKYCKpi1YsMgiujnuLKGVWR1G8h6k8poeBPmg1ZHC1bgLLLxueU",
  "key8": "5BZhNGzmmSGuGa1BZ11W112xTumVEUqgXgRSEyxY8GFr4RCVzG3jP7CMPX2sQ6mhwUokiLXCQitrGEwZK9xk2GLu",
  "key9": "2HYFjj8ahJTxg8FVG8AuuN2tJGKC1G6xTM9cHdSFc3vCMwKimKmb5kdhf3vtfW7NeCWhnWVusjUoKm56RJQRLhUg",
  "key10": "APWM8sNDctXTs9QKZcwNTRcrdnjACac6PaDgWSHLyJLHdYSEVSxG6BBtWMRnu1iAQ3raKC8zYH8XuEK7HeFenet",
  "key11": "2y2dYeJNTiiCqEGwtdvi1x89BF8vsvvatLTB3EPRhiY9waSzW5ZQRznieUcv6Mk2x5ySSEzHnYzWCNE51n9npMPK",
  "key12": "5Pwfy3Wyu4U1h1sZ5hNziCdgPBJPc5gkCns6M4tG8Yjiv6ZwCYuuTDGrhPfK7o4qimAU8AuAJcCEXeAjYkbpihJu",
  "key13": "4HxSbDNAukdrEXiHkjbNVXLh2GxiL13SBjdGabKzdBSKNH7dEvxGknBxENvkhVojxoEFQkLDGqiCECn3zUmt2QNZ",
  "key14": "5uVLvq4337Fbkn3jnPR3netD5V8kfvQsRuiXTiAujZBQaCakuPWMk8DHW41gYes1qzYvJvVmnPDBkAdv2Rqkyqi2",
  "key15": "VM2uV1PxTf3e2njmZG899pPkm39JpLr5ueFspwSJYvaYJ6RfcNyJYHxBBNpfqozQCmZphLPy473Q5Bnf82tBQ99",
  "key16": "azsTpvEL3oEjB9DsZCiHuYcdxpE5jb5c2v9Zd1x8LjvEwTu3isAbtpRhrjKjoVbqJQLpxdNVrBKRGTgES79mKp7",
  "key17": "gcvGe5MsmWP4FwRUPdahNEUbRRavbWM6Y1JDM4NkcNvRA2nFUgEtjmejHMtUJMdeYf2GQUnJ752GGGGGHk5ZfT3",
  "key18": "4mw4MwD7ydrPHEF4AVB4WwaT95364e7NbSa7UsFnQd6CDfZUMY9EuS9dRxD7ihpFefmqnEg6vS23MJF1A7UNNRTn",
  "key19": "54L7Tu89PWdJJYXqXzTiU6Rz9eG2ogTGfvUCUCTNW92XF9Boy51Vcmjys3DvMyc339CW4jUYeWGpxnotX3caK789",
  "key20": "YqtDgHwJuiCQ4Go6aeYQ45RNDsjhxCmsKo4zA2VamDVonc6NYpQLZyHxUPXAnhNUZGvR76DUw9MqrpDCPTvkv35",
  "key21": "2MZcUgjLQ4Rbcme4vhAbANVx46R8qXZmEWthq2XNPwj7NPTkDJYU2JfZzw1yLQQqPHyhYAkxvdBuTZf8V9SMAZoj",
  "key22": "33bRLS1D51s6pTYHj6xCjF3Qu9AmjEN1WHAtUGbXscvAPJY5QDdBty5JaYNzeoFCjL1imXmiLkYVV1wPegzbEbhp",
  "key23": "48Bxfi1YVo4H8kXxhtWT1JEvUfsN6ceixNF3aHKf2xDz4q2SjuNGmZBS53hR7B23VfWTPsqGszQvVDWu45bJWkdf",
  "key24": "2mxeCmCUbMMM7BN3M8A83rB3pzM1oQu93AMJYPLqRYMW5nmyiuvMnnFiuwvwJAE4oN1MR9Lz3P7YXjhGZFcYkGCT",
  "key25": "5si6EBwXHLBNdgAAMoTawFJNcyU1rc7uZtKQ6bBDgDWfnPVziiRMdUUAAY1f6T12stUBGfiATa2M9QD5BGzGxSbE",
  "key26": "ymD4emZXx9xif3tGm1riZERyWiJEjkRtu6NegEfcQWDeoFQBw7sW2tN23zyLvUaNEvMMsmo9c8M4CSTj9dAQAEz",
  "key27": "8fp7ELsmsz3Af4w1GmjxrPfRSEDTLTfzG5x5w311wdmcmok1fVnasCFr3TPSSVQnctuPPdkzZDNv3J6qCz2LqWW",
  "key28": "tvx2U6oZCyaHYpFKk9fbZZdy7nPGod7JqHvzkG3M59R3KQwobCDu5uqiU1o3YqTBAt7XJNbRBRizYfmJkbD9VsF",
  "key29": "R4C4Ydk5m4iTC2NNqUmE1oKxn9T8zCYmAsUe8TRr9mLZNCuxPiYdVx8cbLG5xe3TFC4SKnmDj3JZ4WC3qm98CHL",
  "key30": "33prG6mcHdnTB5DUgrimMCQd2xfLoeT933DkhMtmkgn93D41qWvmcxwFovsSsBwxZgc5UcwoAD5zAuVnxhtQ6hzi",
  "key31": "4r7iowvqQea244dmguWKs7AEcoow6raF71tRPPo1DRWgTqm1qhFAAsmPeaWcS1djzFTZSLc8z24jQMDEQRPoXssP",
  "key32": "5Uu6uQ8K7dRqHDQiAjosBRQpJQmZMJo69KSy92kU2xXZgDyfhSuj7Hx3phonrvKpYPHJGtuJdP7iVV48G89fNE1A",
  "key33": "5eEbPE5rnhWkYF1gbMyCwtTfPeh2gUfyndznJS9uw6LcAidBHFZ3FLdmJQY9FBw3fki9iysF7ViM9wTJKyfrcuNh",
  "key34": "4VTq3zj5j15oya5hukLsx4VMeia593jW6qCr3ZuGTetA6jfw6griRd52nSiwoNJPVgstpBuK5nN5oJfGq5bLvZKN",
  "key35": "3cb2S7FKScP4o6dJ4GxDGh726UgoSCvsiKwD3sTUT62xDTMxyPgwGRSHEoVgjk3yH488qL6vXNgvhsTeJwVQVXu5",
  "key36": "JpnX9ehTtwcPqoCXN256qFJun3CLrfS7ywviyeqYKXfnB5s5c3kLzmXVcK4q1EV8J7ctCQkejFZSDEGHdief6Y4",
  "key37": "5feRM1XypjQJsDg2wVFZKN7nUz8WEdxbixCHLrPZRQ3Pd2q2xWgSDoYbhQbi7Zwmpduj46C2rjfdychdChcEDFk",
  "key38": "2rcmu2LcvxxGYZfGK8i4ZDn8Jj2wxGFNcamKYYyp5UbyLdZe6SmPeNxvAsXvEojZAzHW2xY7RTBuahwz975hRqUM",
  "key39": "53r5KrP8orQxhUttshGak8B3HXz2VonKJPC1BshctLPh7NziKV43dDY8Wtrp46jY2tkAFv1R1ZZ8jscG8DyZqZfG",
  "key40": "3B2TWUY6QMZ2FYsmbGxB1zWLT5M6ZbWvUftifDHqsHpF3in3pdMp7A1xm5QeTNURCsRGZQFpzjo53zEXJgwmae4d",
  "key41": "3msEEwUf3HSNsr4fpi5hGQarxydzARBM1TC1fBfdzxAKAZuDQMfJuVkDoqT4UoXH47zzgcodw1K8TPt9xDBYBLb7",
  "key42": "2Tyde6JKdx95BW7KtnuFj3MhQG37ZW8WaBkctKYUUEWMZKUT1peDGYREK6irykDAL2xFTfa65tf1bh4R4VdsyVt",
  "key43": "VHeccvm5JXF7GNH8QhDbRaHXv6a2LiK59rPhN9sHCNdMiJzCfu5QuRbhmtUr6Qw8Prtpq3QbtDZyCLxb9DWFBqE"
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
