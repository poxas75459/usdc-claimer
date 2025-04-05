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
    "fngPMa2Bs5r8WV8SjZd5v8eb2zbE1RCqZEsCjFMYMPpZZWGCZE8Ts7HZqaKwUB1eDyaGkmw8Mi6tYtdG1fYq1WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2di4UUtuZLygit8MUqjV7YCNfAU6mA9HYyABRiXMP6DQkDNbE7cNSxXfQEE431G714AiirkA1iVesYYhKk42E5Q2",
  "key1": "2AjWA1vetFWgZV1fXxjrDRT2knsiryu14PTUN6unZVkt3aTYsU1AkghLXXqwPYPKRFwXVAn8K5yrpQsm61Gkqgsv",
  "key2": "4wnZhiSEMa6i4xxdyRyLyL2mxGtGNnZfYVNTbKowR15Tk6Pf5zsmWatpWpZRoq5vUvUB5ZHQBkS3yndpb2c4NXrz",
  "key3": "4h3cD9Wo94AVEWF4UXJaJvkN4BNteY7EDAuXZqYjMXnNHwqbTJV886DymPXJJjfxN2y3gKGWR7yAoX4FiwG7qQ5a",
  "key4": "4kWKWkxp4eu9XjdPiAnq9UJGWYs8eFJpXDmzoELJCFBBm9JECbG8hQ6Db5ebnbgRmYG1J3ykAkNBjNrUnB1v1UEH",
  "key5": "5ZaKzyobcmvonHtQkGvn1b2dMSM75E2VfZzWicP6aySfZVKDuNb5PR6rm1mHjKh3LPYNeLwAQLg5gwNowfSRft4h",
  "key6": "4CNYnRYnGDMb1uR4X8vFfyQADeu9SPGJ8fXEqTv1LNJeu8uRiZimMGUMKWcR3rssPs5EBLFJTBdJmdYHw6isgiRU",
  "key7": "K7T4R1VzhiwcCa5nqLa4e968QMeG19bY5gTvT9g7HbNVKuk4o5LSQTGGn28z9kwFLeNAmqMGJqSwHfmBfeyPCNp",
  "key8": "DBMP2rJHxxuBNRPCsecHDNmwEZTMeqbdYxXw1u7pU9WVEeFedukUZiWJVmd3WJmkHcVSYwxAraSnMc9ScDYdG1N",
  "key9": "3GyexqSgtvu1cZXMGciPWn7wo5KK1mYvqCMSdWXUjVwL7pUtmTVn5JrUxEv3HCbfjAaHQeMNMFTqhhc158C5k3SQ",
  "key10": "4F9qsThjKvn5DFH63jLhee24XTL4paWFQNQNdRVz6UwYToKqoMEoZwotVFK5sfVkWvq9g8s6gHjKxCKnobL3BVca",
  "key11": "4Zoydx1XBp9b3ku3fuYCDKWDmGYKWBCTYkRPeXtELX72JBfnKV9bhgR17FR3ptqXf2BJcW59fGNo8dBuvfD6xHku",
  "key12": "5SDiyR71sEWiycwhoFrE9cYbTzYEYjqgdJW7rCotZNMMHdiLD6UZwTK6opJj49JUtpSLRiWCxYKUYqpb6SysVMqm",
  "key13": "5wZGEct1JKzZzgERTJzC3Y8umedTT3XdKBZGGGsCV9vdwuGqSFWRNHPYCf7FGgnNDjCEQLjCaz8E8CwTnNaEA9fj",
  "key14": "zE2waa5UFM8LtvKT7bViVkWN1xeqBJ5ribpV1ekGkuDVvxawixtonKVE87i5tEkWUrxi22mH6c6adJpaCQ9xCeY",
  "key15": "M2LycPZm2eMe6MxneZFCb2rszc6tkD8EzMFt5XGGaBPLw1bkPDxsrLaqM3Ks36zCt3Uyi2PMoargDJU7wRGGpBc",
  "key16": "2VjRBJkuVQtz9jYL5gQZeUV2crGrhLAosfwMM6bZvj4LV6uFDoT4dJBFHeySYdSsiN2BzbXf4SrmKyEwPapyKUpx",
  "key17": "2SfmjXKocdfbRLjXh1VCPpy3KXpDTYL2VeHk8o1p64Ff1exk3AXVoNF7XxJqVBhdAj3JBYFoTSpDo7MUjVdW2es4",
  "key18": "PJLid9xgoMvHRXoF2asa4ankuH7eNsubnSGMzRmf9bRhs5AoQUrJ2WhszePt687CfMME6KUgBdvBQyzXmidgpAd",
  "key19": "51uA5pjrAaxbRbgGwP33EQtFaoUXGkgctjFDzy6KMLh5A6T6qxXRrp5bpRLoHYhviSvAmBGhirvbexiND3eHocHU",
  "key20": "4sbVcbCAV2g6PMNrPpz5ThbKVtagLcDARkokCg6T29JpJhnt72DfyJXRbyQHF2MD2pp46KPpbjgpp8STYoTRPnp3",
  "key21": "3FdFLGux9fWZjzmMbHXHzsbivm2AuMV95oKkyALBhw8WjaxhB6kRLs1wWmq5EogyeaWuhQ2FzHunPxbnpFHU1uAR",
  "key22": "5yLyYhu8JhqRp6LbRkuyBhMmgA9AgLactwPtjUreoTNcybYftTeHKBb8M3XpdhSrFQUZGHDkjSxmczH9xLF9xo8y",
  "key23": "3jEySEG65PUq7C1EbxRGw1AVcvPbX7r9zsX5GwELN1wKf11NwKtVCHoA9A4SRVgBCUcPfMVmCJVz5HMwHuwPtr4d",
  "key24": "5TsdpUQGQEgQ8iTaaZKTPwqV2qNRdUTePk4HW78dCkcvkp7VhGB6P8hbJjBGK79rjgBKEkfCCSJk4JcaGL2gk8W2",
  "key25": "2LAYpdNerJ17CJnDTtAezEtDb3C2DYEAHxfv5XyYttk4mUp6owCRMDiTL2Cxj9rEN2CwXeSb7HvGFmW59rV2hTzQ",
  "key26": "3f7btKao7MjftH2QHK1Z9PXn7HdqXKDzkyP7kkybkm9Vbszu4f1u3ZbTthMVZbQmmv5UfG7UUGybhU7Aaw8q8mbF",
  "key27": "5DrZ9QJG8Md8jSma1jpALjckER8f3biSWLiyQBQqdmWgCAJUsshncqi1TmTQfV9FZAZgCsFw4SaFytFJ5h8cmKrB",
  "key28": "3b82Ct9NviDA3etj6fqZEGDP9pyUmMUZk8X3tPTMruns9uGUwatRnFR8K5TrTuy23NxXbcGdrm9ZC4esfhW14gfp",
  "key29": "m3tW4nFdf9AvFNDB2iDM8q8rkuaj4pwGaBKc8tV8FZku7ANcBJaTMVqCdj25BNWw5heZGRiSDjzSLkujJQ1PifZ",
  "key30": "4e4vKXHnX6RaDojGHjaKFQBw8L2cauDiQsWDsx88s8c78u6Z4L75GQF4PFX27AGEwqdhVzZDHfYVt2qEbvXntvpg",
  "key31": "3Cv8pjymVs9EcoH9etnyoD3G6NRMiTPKCstKd4wXZQrUwFtt6QkBLVZRNJdXrivFyBeceweaNx3yUkjqvc3quxUp",
  "key32": "3rZUpLcJUteCYSj5zJr7fq7fzyEZWNtbzddZCaHDCnpbKfVakKbrC6eFxY6d5NRaq8m98UYwUHMi19E8WEHHTKEP",
  "key33": "48aRUPY4AiN5KmUw5zYdjATJvje515v4yPYn2uZuoYowxSnSTCgA9YXvwMgNcdKJRT1fMnE4U1nmQAvcYVgBpAfa",
  "key34": "qg5uscm9XrJfi2KGuWv3s1KDTvkyYhjb7UuBKNnvVYr4sbUtAHPnyEn4ck8Np5GgkixMsyKL21hRMqz2J7cqe3D",
  "key35": "58NS59uBG7P458q2MDjPdzPB8sTgd81c6s8W5bHc42hy7Saiy9nZKqve5QJ6Y2TsLYjv2UTXDK7cudg9NgiD4vKB"
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
