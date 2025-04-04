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
    "2mwLh5zkcoHKGQLLNkaE4NQq5bJded8g2qD8tGK6L43MadCAaAMEma79xjjGwDChoJpZexuSeRvKAMVg6zspBqTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47R33PQmccc5UjfEEhZu41nBUnGKM5bdDyVcwtq2WPXjX3rbWBsuPhzAATuRL6GefJ83RrMq6sGNuxkmYWWbSieC",
  "key1": "44hsB8E16cFib2TScnpu1wHrnDCas3PWQDDc3LdNSa1VCq6vXaZN1L8kJ1L6rHCig4s9xjtq91LvevGCL1Bcyzsf",
  "key2": "2vuBxHrBfcy2yCvA1gzv4yxc2JLkgf1A57DVbJWYkubyzrWvayexkzfdhPvmactygZ1R1tRNHXcpS1WvSus8ZVD1",
  "key3": "2iqqpn9KBNCQ3nuE9Fg2UFu9yQuV4q8NNrcYuLp9ePpx2jZWedP7qVMi1urN1oaeRS8kDXQRkTnR8XWwiYRgkdeC",
  "key4": "CR3fNR1zb33XP6C3vks6CPeoNmK3zFauQPoCH6JioZbMyiwXoBb4jAENHeXoN9yfFr52c633yZZjgqgWzY7gkEq",
  "key5": "5mHywPWT4scEHad1e6yPS3TmW4qtXZDRBPggxpCmyDp5hKH1x7AUs1QHh9p2oFJVtcrHHSPBGJqAc1buUpCA5ohT",
  "key6": "2cAR6ksZV4aS7iuBFmXWFMZ7chSxt4LpTNmoJGyAL56Q5hgxPAJWbu6WduSLmSzPJFRJMWubshbq5eYU4ReaVoAj",
  "key7": "3d6xNMEY78EWEKoffUBjUsRaUMuRfQ8RLJoJUKkwhswb8cutZrhbGjbnzZT7poSZD2urT1z7hczBhMcEueDimkWf",
  "key8": "WojGAKhRWfsCNSS5KF8ZB3d2MJijPMHj49Yk3M96AJReC5vwpNrLxc2aqZhon83ddAcJzAVxEFCx9jwAyyy1h6x",
  "key9": "acVjDNEqoFzJR8CMZxjZCEgaBp2sN9z4CdGGdvmT6sw4XsNtJEUeavem49XEyiA4yx9TAVE1nyHiWZSY2BJYfyn",
  "key10": "4Dxe5htaukXVY2dF5kZTMJ21ckYmz68nve1V9gA1sUJszmdH5QsfLp1SUREzgWZkLQh7XL1rrXzRQUE7Hh8FXcNW",
  "key11": "fjYu9SwygGBSPpLFWQGMYbx2ewS14abJkPhxrar6LSkecC6s4njjWb3CJsw6CSo2HiC2fAKqhVjDNYZjT9PTiKL",
  "key12": "5HPkJv9CqMG8XNUkHdrs2nerQ81jUbiHXcwhdz7gS9YP7xdExRpVEpL1M4qKLU6XLJWvmcLLHanGFrysgeSSwDi5",
  "key13": "2uqfiEz5CGv3939CXnrEz8kFdYyvbZottouGWDvCFKxXZ6LcfAhn79rYLNMxKfk7PueHiN8QMgMHCpAR8cCYonTt",
  "key14": "5iydDb678fYpXBzXduzsJeoxTjnYZYEdR7ASC6Z8t9oZdWS3HfZqRr4dfiT98Y2idDW1nE8bwPDeTXSwaNg6pkFo",
  "key15": "2du7cNw9dv1RU5Aj8dz3394deeX81FHeH83EiF74q1V86mAa3XVdsV8kyPDQw2mJc94K1FgqGyJzjk5JaBrJfWFh",
  "key16": "2hsdYY3UMPnZTYuzYWRFNdoH2UYCQ8gT6hbQc9gD7ZbbprDfBFvouH1u42MJgAQ48nbnznET7z7gi6FcJY7D63g9",
  "key17": "2i1LxbDSFPMEi9wiY1ghgsnMP9JVZu7QC1FH1zDht2UtUsAPvhFq9UhG5fLF76uSP6zCzuWSAdLAQpS2p3wpLXhG",
  "key18": "2Evd46zrfzJoTwXgSFy6Dh26fPfExDmAobNAhyPKCDYuH3LM3cF1V6x53nnrGaW2cP8yW7zcgvbeemb2jirB8FoV",
  "key19": "5R2kyNCAemDhzD8b3c6PKJ3t17P66NeKZffoUFewCL4YyBd3nfbggPJWomp4rzka8CfGB4zT4neoBK3KfmFiiWy2",
  "key20": "4LxroUXtANdZaeQjtBNJD1EXAaNx9Jz9dXGRzqAz1gTuQmwW35JCLjEwqfHRHXg7iY6iByW5RhcMzJQ3vgihNZje",
  "key21": "3B5WvKzvpYC4WRSneSgUM5g7c4pkvnzK4gW6dWPQeGveuNoL3oteWC4VQAyqHqpHoFMG5Vmp9epdenPQzAUcNcLt",
  "key22": "pUhAwTqx2suCFsy9AV9VE547Cxg6P39zPyoWo9nYTjqWiSVn2VTXf6bgTvccDiwNcMAjEfWTh9TgJv64PADpQ4C",
  "key23": "2JvNhJbkR4UC4j3HvGTqmxLDZ1xiSK5tqsoaHKppYqFydtT18EUNdsuTCvErzZqvDmzigr4fJ4bpqWnmhTYVP3t",
  "key24": "3FQcS2rxQkP5UwMdNPz8Mr6S12negovdBdnNgWPvLUJxPGk9oJ695mHg78G5U4dtBGutnz5BZjQWuTdzygyo9xBv",
  "key25": "j6ewiLsYrnHaAoMhDqNGTmscBpxuTM3G8y7PG5g4SUv3wx8ncvohHzu475tocrQwgVVfotnAMozwuBcBMr1XY7V",
  "key26": "4t7atQypaGp3BH9t7ZuHoq549R3jd11CuTZhWrbcnwEuCWozGRbCdxHU1EVHbrRaCnAK9fTeR4FP4XPjo8Gb1BVP",
  "key27": "4z5snxEasdUGXP9CN4yC4APBWJAVJw8MLD9PCyeNaQBNRsp7J79G5HSocxxvPHa327nJVqpPUAHXpZzUvHRe4oiH",
  "key28": "26faVdVR1XYeWoiWGarTGZT4GpT84rUHkarGBnrUyhnFdqr42NYVymwmtK86GAXJayjsJkCL5U3mnBzgiymvNW7h",
  "key29": "291ohaxWJB6hpPQQEnUmc2w5YfJpbVdMV7c7RcN93Xn4NizUqf4F5FqzCHDw9otcxDTUozNbeThGMTGfzLYYjCeg",
  "key30": "44Mow8ZnFKYvqjnLhoEFSbn7UvSqs5FafBk3QALmHMjUDgk345hfu9Ummi3nPGMcvgW2tPgnhB7jEu5hwwxNZ4v9",
  "key31": "EpDZGA41Q7Jvp6cSBHh1V3pCrGD4u6kb22SXkyTDE1Zvy75YgvrurGmXbbXm6awcxTFphawy4jTu6NWvazEys6y",
  "key32": "5KBhthBJ3VwgJFiBRZ4tTH9XYrrvVEDyXT4EkWjpghGWpdRm4gzho2YqWksYvrUYVpdPY6xfQzvJE2v1v4Gu5LH9",
  "key33": "2GRJybXaGHYEaiNnnFKonzF3sTD34VLTp9BAa3Nrj5RRTfZ9suWh5oCHA2797hVcwxokuUPWG6W96UnLTCzoJqG6",
  "key34": "6Yzzn3uJXZGQnrH9sq2kWdxpaADhpHsUCJDgHRwBufjqzWQfom7rEFFVsnyAKJbwB7RxsC6EZgae3PD2EU12EAv",
  "key35": "2HP9M41c6rQszVBAXLNebj4zCMVjQ8NGEajxNo4r7fZ8YZcLVmgZy6ABa1h9nqbCQaNGn1zgexbzfsTQXL6E29MJ",
  "key36": "2tN1hQaVmN6nZxyeCyywHx2nYGqcDapaB1vSL3Etyv72zXZumQe1X3vpmgieHHkXNDWjpsVPVkbfYFsadT5HSgLw",
  "key37": "B2HkjDvqDy1qgKEHbHe8Hyb9uoqwjSUzCVB8bbbtVeXTvcvt7NiBZ39Ciq65VtQC5rBAS8ZFzhdvbSgEa4PHp9Z",
  "key38": "4sMSPbUpxpapK12kpf6TGfRAB1mwG3qeF65DFjuUAVBEpocvLcHSpLGJdKpnZhirCMD6qAeCx5L9sRdFaJDxaBA1",
  "key39": "3XdxLa7RDmht3rcTi2zhRK66rEratkUrxU9PdCogcxDxZuuAzPit9EeKuai8ycSG2jFnMhkLfvbNjYUqTqGVHeAL",
  "key40": "2kxv43xMbVfnhDKiUHkQtgRufnB1Zosg2rJB8sNSteaUif92v8C71BueceAGp6ieXiEoXHz2KHn5QpeSGvTrHCR7"
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
