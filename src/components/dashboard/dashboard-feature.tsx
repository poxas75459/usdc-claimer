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
    "2MhNARMhURj6eukgRi6Ktz2fGpLTuSeQySHZQCVaeNRJoMWwF32vU3oFjNWFjDZm8J8ZxswMhp1T6Xg7C66PFGpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHeuApipj6zGCXdt4V8RE8UsPLLzy3yFpvvoM84EvQmLXZyNJHrZpe8vi52vUZ4DPUNXp93pMC1hvz6TfBMQXN5",
  "key1": "25EkktoocxsUx95n685hbEmzAEzrai2iLyFtbrg1soeLfY5UrSCa93MTpeJc4emn7Npm2TBWBXUYF7GY1NHbY8qd",
  "key2": "4xrtJikMZNpp3T3zppejQTReJpWKkseiKgZ9LvZRCQgAJ5uqGeHJpefsVbQpEGgT8buUd75F9qUbAfCNmD7AD2mY",
  "key3": "3sdNmFSjUEnk5UQ3pTniCzsZmizdhSwiSkuhvyRpQ8Cwm772skLUgU1GKEKVdr1fUSeVaAtJ86wY9m7794R5VEQM",
  "key4": "9tAFtE6SmZjNENq22MN4S6ULAbpkCP87jxoGVqCYBrFDeNzozyUy5xv1z6K5MNrSx3SSA7jJg71ZjH5coymGAkQ",
  "key5": "46sMDqhDqD1w2gFBYHbwMu46Lfw2RsqWPQ7WZm8cR19NcccAzFHPk8j3nb4aK5FpGKvmzPVcwkUCyRohYRBBWH8C",
  "key6": "5SxDeQZJ8WXm7FSn4yGeudihHArLRhnkbBgheRFrvg4TBhxqR3RdSLTPxQ43a7gwZKcVsSztW6NYfW8w2cPqVhK",
  "key7": "25SdkNGeiMEPV9CxB3dZZVARY836U72ZUPURhJwzeXY4ETwzNyR64CQWjJfaxWcNyEaZ8vJwZUxH2hjfqCyGXDUB",
  "key8": "39qC1FxXKsJEGV7ceLwnga548j86bVe4Q69WgBctjknoZuVDkEk54HtSpDt5JTY3sQizNZi7ZUJaeFTgspH6Gf7p",
  "key9": "5hs6Ar9ipJdiFaU9DEcZbNoXrtvJP1ofFL9HEDKba9iPmutLJdbMhJgTQRPxey4YezGwCCve9BkoLRfwGHnWMUQa",
  "key10": "3Y89rFWaSgjvaohp1YjqMuojR2yrqv29H3zHJdKvDmsJvMGBtccJThaHn1rUWLdGniFMnMkdrQzu5SJqj5fBj9Qj",
  "key11": "2Vq8A5SBGHvcsxnDcUxt89LG51D7vhJm17DLdBzN7k88WifVuojJgFVNaTzEiRJWNJcbvy5PPgnFjAZYz3VpBKxt",
  "key12": "5qUfFQT3Pm4ziruTTSPM6v4B6MuMSWX66XpaHf7N3XZpcwqAGNEuz4FY7nc8Y8McGb4KWbKy3xpi4c59EkNUZSUq",
  "key13": "2n4BHAAwL8hrZyEkF5w3oYFdpfd4j4TcWZZkwyHj8Hojs3PEgSPEhPZucBXrfpuor9pDLn3g4twFsymMXsYChqED",
  "key14": "41X6kZbhVqq2x7oHwXwxJxQxCwC9Qd536zRT8wTL5jTTmVBHAsZuVLsusj1am1j9g6F8vzRg3aFkfLeRqeEyf1X9",
  "key15": "2Q4ynTvBMKY5HMgjo2Q7FijPWsexSQpCj4Rhza5rEmfqoKqPPm9bVBppVqR37B4NAfsLW1eqhHXExxqejP9wSLTb",
  "key16": "pNggYDTyvRsivJaWmaUpXeLuuK9mvA3rjE6PQk3gE1ZsJgk1TKSqJpu9dbr2ifQ1TjmcwNh4ZxqBw2NtoMdL83C",
  "key17": "regozMr2pjX9etyvkrervtV1xmeU6UKpL6UhTKY6GSqi8LqEy98k5DYpFgh4RLzukvGPQeMeEsGoxnD5KQBR5Un",
  "key18": "dZ3SdKo1w3DAFwxcRiJLhvPkzXX3Pz3Moutg8uhdUJ3pthveKtkWgy1vUm6y1uKouArKDK1pP3eLLCJbFE6td2n",
  "key19": "JixJEsowVkAA5p78BDp6etHhVB6PWc25bahtFit42uQAc7wXaPQB85xSzuDzocy7CLbUEyRZpENDJqzAE3TuCvk",
  "key20": "KH9AAjFiqwVPzaZ9ZDiDhRaYtm5Ym2MRiJK3Rn1TiekKq3Xz3k6tSrLxWfoGNgLpX7Rsssuo4oH2DnKNjrBjBia",
  "key21": "Wjuw5t8asznKZX5q9FV7yDmmZZd9VZNrNMaVEkPWxegxaD16hchur1vmPKNYzAQtUUYTgLtUepe3TjjY4UTrYJB",
  "key22": "4FFYHxGUCdELjCjDbuHo7ZcjJj4XBwG9caDrNSd3YW3vH2Pevc5AAhsX1zh4NJUzmp4aaT6Fmu6G5fzZi2XtYt5h",
  "key23": "372eTqRxyrmKoLUHzgpprpkujL3ooK9cTMfUYwyNq2hSfHxy3qy9ajqssMKjGG2dhXk5TSBHxdKhSEJnwDXcLxV2",
  "key24": "4rTeyyZh55yQPGmni63B8HvK3gRNSAeDsj9ipfULSvKC8ua2e1pfZe64b4HrxUkkR79S5vGdrbVLU1k54Ms1UMeK",
  "key25": "4hqq47QKuQLcjr65U3gse8GeP92rfiCWR5w8cF335C3eBaz8Cyz6wfYmJYwnL7bTnay7uu5mUCsA4RB7dsopvXRb",
  "key26": "45semiwYiAhatJAruNBvq8FuNK1nmuurfTf6KEvWRGyTVmbWjeenAWjiLG4NFCX2YYdEaUkDNsFNZaP5mKXkqEnD",
  "key27": "4sAHsUJPY1PxRa9t924mFpwqxZHLfghfdmJbx7bF65rSufbHwkZ62iG1MwuURwSX1jLNrcTYdtHtYE4Gs8FkmpQY",
  "key28": "3KywCDNSaWy4X5GXTXzs7efsiqAd48jVQDhkKjoic6pG7GMGuKiwMZ9KMSptt5CRABo7j2CW31TixHxNHTxFSEMP",
  "key29": "sMrGZDJ9MDaGMx2YYxQ8Kg9zYznr7SD2JSDkTZ8rzL9qDM5Gi4pDTCn2CHazCpB9YDX6bb5vuctggbieTkXYn5x",
  "key30": "5XeuVZHUw2VVtpMJt918zsWW4TMspJyrBZFB8evVCAyjEY1948Khdx47B1rYnWt9DGJGhjMdHKJatWwpYccUUPV8",
  "key31": "67cXnvVjV7zsf4rwdwG779Q1zxTecmAodS6ZfxrisE4Tgxu8fnB1xe3H8HzZwH58xKrhETXudAE41Bm4uu5BELzv",
  "key32": "5dWNzgwwiDvjcQuSCB6zH6v1BXZDvdkAQ9hFuWrbtRQpzxy6c3KnU1tnDPMwSkV8vyMnvq4J8AqRDTUzCSzLH7EZ",
  "key33": "3Msj6Jk7Nb5M4MRkpWmpakQeNF1Dhrnk9PHXnsnbQ4jfE3SwLDWVJa3a1ww9j4zgC95tTEojfLHGukBCkQ1jzRjm",
  "key34": "4kongBRfV5TibuDSLBDq2D4X58vCZ8fDnSmV4C34hjcdVTY3YuCQ29wJ1gcwjmRxwoVv7CZhKnjXdP9byrx6XsJe",
  "key35": "4PLbafZRPKejyEim5qMR4RKYAmWzRPmpM8aMhXQbRHPWpFUqdTZCVm64RoBWwccyicqNhFWKg5eYadkCgR57NY9y",
  "key36": "ujSHHHcwJ3sncuuUxCmsfQBqQByNen6eib5YAWRt9jAEPXUHGqfGNoyihNo8KyT8ohGiBXsmpbg4KiG4Hi9zm6G",
  "key37": "5SnctT5v6mNFkbALjkujszaPJt2CLcFGVMkFy9QvCoRtG3xt6nmb2DdD7eBcYWrTvobpUwgLmyoYnT9UvJbYakN5",
  "key38": "5gyewisxXMkE1fGdU3L9u2uoVP2XRM8FRJYQeDKuTCGwKD4RyUE9ghw7724XKUumi272kZiqKa4Z3RQtKoptakUN",
  "key39": "4oE6ZsRtnhv95GZSCaNptXToVqaKvKKkBaAJUnvNPoc6W9eBdnL2GgwmR6i3BzBUpG1oLJbns7nW7xDooXXadoHL",
  "key40": "5MUndjmgxJHh5tBS7MXWCvS59mbQRds3ZJzFfBKHPw2a3ube7b4jVYnwnLkiGzZUF3piy9kkJzUVP1tSNvpMFv1p",
  "key41": "4wNkbktBhYTd1BxkftJLohwft5tdL6j65M7vdkZiker7XgSS2zP2FKG4t921hDH8pdLYR2t3MFCuDWC56m1X4HPz",
  "key42": "rJpZQWsbxEfCSNS6rqgjQ6VUGxf7QyPjtFxXkU1s8bnLVEg6MFbatUWMVgLJUDtN84uNoPuLtfmARqb4XeaPrGt",
  "key43": "239LUDSnwDDGX2aPg9nv9rN4eEca9p9DwQBmpBzBwwy6vFM8URzx9arTF7rHF9T3hpCfX1vjdrRRKnQ1G7gsBESV",
  "key44": "35F72ZxDfdR88P5pjQySWZ6LZumyNCmqBUf7qBCsQgxP1e8YSE1UToCdFQTuxaVLueNMgjvAXvu4HrbM8eaM15Z4",
  "key45": "4YwYtkdCZAShTJMwne1VvDuezveySAsSrdxjyUgxh1161QQ1fqrXJFrxrK3KyYP2jACbxoWp8JigCBinngz2b15c",
  "key46": "9qHawuThSEQXjni19dCkG5AB4QE5UCoou9HboZ2Cz4cQDSxBEPnSUGSPoVwCvv1vFKzCeiEvMsdc7Qcr3bpvB6d",
  "key47": "5Ziqy7H61vQcda1uYGpKawzyorcddZMmxdGwUVgL5ghoawhaVKzucUfAVRd44qSoXJREpBpLQXUTK3bhGnvWbEHG",
  "key48": "45Uis8r1RxDap3apKcenUHmRC6aEkF1NVAaMscwfTK91g5984LUFGbSBCLdvYiDMeFhokF9Q483jCFPNASdbPrE8"
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
