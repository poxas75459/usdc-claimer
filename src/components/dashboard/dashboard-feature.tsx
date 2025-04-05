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
    "Hgss3BHuFY7Vrc4gHuBsDZYuxyXTV4XqPYQYh9XzNxBZ7Eob9uiEUuiWiYn6bk8REoBZF7zBrpnrWwKFnaHPyAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJbXki3d1qNyCG7L86noiMbg9QjsZPFXbU9YkYFTtj2fTseidyJW7HycrY55NLx779JDgC33KGbfXTQY5fWpffU",
  "key1": "4RSFRefzbfZu4Web7AZHdnPWUhrpPb7HhiE2jRXtgbmUmNNDh192ZNEsvSVtVGXSiviXrJz1dL7nYfds7gcErFAK",
  "key2": "3nhxc2piRfMn27E3TZcap8ymzBxnNuGLXgdvioscjNgmTg14VeLSeXupscKFwzouPJpa7EUNTws5ZgFtVTHYPFxJ",
  "key3": "2L5MeXTPuKTGbEw6GaS1r1TzEQ7AVa4LERGnUuALaoUdLoFygKCLTPHsqHtJMFkqUzTKWeFcXJrvC65kM21rGZAC",
  "key4": "4j58ug4BGEC71khHSLsVsjdv3T9BWjCTnmFoBG4K1znjiCx8tQNg6SKBdA1gwkrheVwHJtKPQv444NFXH5Q5mnHQ",
  "key5": "23UsudBRnh3Asd61Umoqqf8CivMCHe5M3hNVscMBR1wMnYSTPHPwLZycteT8A5voGkTyefgHEvx1ypVgFySRmHvR",
  "key6": "5gDv3ApWRy2tKyjUq7C73FMcPEn6C7Q6fx5tfKDa2WJBPQBvSxq6eaTg7H9xT3QsQH8Dbfs72PyoZVntWejtAufk",
  "key7": "52SQaXmbz8i5nTuHncJjy5uj2SPW7C6byYb4kYixQAsM2ctKLVE7Nx3wT323XQFt1wDpEA8vGXivuddmoGZY3CD7",
  "key8": "3g5EYMnE7e3rnBAyM88jU6UmZF1cmokXFufmUxaQ2i5BKUPFTNf7Tj6hu6iExfDWuTvqLwaNEqiBcvsEKgiGZYcn",
  "key9": "2d3jEvDx9SkKqZu8tKVzeRz8ChpTL5tiWAa3RaWCKWhFoewvXhy6G7Q3ET1H5gLab65N65Wyzbv38LQXPthCPDmW",
  "key10": "3unAVdGf2BWtChymbMJJ4pueQoAV8iyg7be9BEJhu4SkVqWjnLgFePeJQBde5aEVcYjGFEgLXbWVYcwGyzQwQc4y",
  "key11": "TmB7jrYDaNHXJgfZdhUJ1QgumMTHbnyYzZVfSumk2Sb2dA3Was7iavBQqeZuMvWywyY9q7ejW7RBHKd1mXBooHa",
  "key12": "37i6JFneikUritbSU6k55q6NFgXaUeUUeCP9sR8tDCYJb2kNvusYDrq1S2VARAn9EbzWWajFp85funcs1Cs9sfLD",
  "key13": "5Gv6U5ioM3ktCe2KJHa2427duZtmp518NVvDPA94m5jCoRuh3nLePVevmRzimJcU1bRXK9fSqzg1p8pjiybrp6bK",
  "key14": "4uHvpWwxHLHmNRJzgTbJcswp3MiwWNJErijd9QmyCCArMg2QwAGjSTKtrQsTZh9CVjbu487GsagZtp8RBPUefb6R",
  "key15": "2ApDMzhQY9a49afavVvo5uxCiSnGy7CxvP1x8DQTKggNReLb55bc2JE7KF1Y4a8q8oZhw5FgY6XTPx5k3D6zRwe5",
  "key16": "3oP1kSZZRFk5gLaArqPY2P8YHBtRt36Vcc7Gx9NUEkYrKCg4sfwUz8Aa6ZnWzQ4VKuLtmEM9AvjTsEDC5xR25Uec",
  "key17": "25D9E86fExK9mCpfjt6rEKi6DB5LymbCndMcogP36HPYjqGACkb53SgfZvpfL2gf213vhE48gJAjmVQs3pwynuHB",
  "key18": "3LNwpMZ7vVRDnxczpuM6BrisLS4Uxd6KoYxxjwzuQDcko2gzCPVASVeJnGeHGtua2KnQz87Qrsshbc8yyguUL2vT",
  "key19": "5BYdpdBb5QGRvMGAHtiN7xd64sDESWcTqnEGBQg2baoPi8UFJd1m9WFXtq4cXc71cHFXvt1D1kAvn9sSwDQeFJYH",
  "key20": "3KQgb9UH3y9LVBCnueBmtvBfA7bhK9NxKfdpyzpuJDKAEVxoEoeMBtVr55rcCpU9idnzPsChd7Zm8R8qhwcWVxAw",
  "key21": "3cFK5jS7dNHfmLghCdBdLZLc7VVCvf2KZ1F43DfPh71wCfQT6i7ePyyLQaKkwjktTwvx5W3jp95sjx43jdsjvFmC",
  "key22": "fU6jAPVWRYxUiYQt7PW7R9fVU7kfXQAn1p56ynf7ekbgA5f6UoEe8Vf1qsbXeJaFEmR1S7mAue6BS1MMviKqGtC",
  "key23": "3FacwFLZGtU9sUV6raYay2GwXGKQqAEBCfdCBuMv8CTmBba9RczftUNzxR7bnGjtcWymAH1YK2EJ73MxUqm56uiE",
  "key24": "5Jw5BBMRu7r1fPe78Vut1auTmY1GUXDMZJ7egzEE41Tm5s3mpdXgQCsK3RhUCWN43C6vj3xEMDSt58N6EAk1J821",
  "key25": "4kkRBNubudxvDbdnM1oK4gk7w8Sdba1dPfLwpApKbniJwjvHhAFPk87ktfpdsY4jtwZe83Bug73LdTvJRQ9pzPtT",
  "key26": "3DD6JMsjBY6mCpfVAKUyZQ1Gcg5bbGgqr2ceYj2HMBZDcxrJob6SeXcfa8Fy8vw9mLLUDTj8NnikQLYoeAeRMYQE",
  "key27": "4aXpQAJkdfVjnRqkmDyjxB89Lf9beYtzqbYPLJTg3ap9zpigUzb1G2P4tvRKVpWJkBreukvGvynEjffjXRfbnPNE",
  "key28": "3kK1EBbJnHndYQHvRoszPD4bPo1VrA59Kt9fnyx3DJLgoVN9gK8GzQdL8AgpB7t8x4mAVbHvsMUZ91aUTgwKjw4p",
  "key29": "2Cfh68hCtVbBsHUiw1ogp4PFhRkK63eUCiDLdzwQ9A2Hg5nLu1iJdPZ3zchGQbkao5i7zkMQKMZDo5bgVMe6NPod",
  "key30": "34g1VujogBLTRYX9homQvwM39Qgp9FpEP7WX3YKCmya2jT5CvAQCB8muBYNuAUAUfmioaXA8Msr7yE1RmC1SDBeZ",
  "key31": "31jasT93iK9Lzx7a3tJkoV5b4RH81MX6ma6pRgbEdJtBifteJL6jfeaCow4WFoUs77uG6WRzg7RWcvrp1CDfQfBB",
  "key32": "33jBcfSTN7Awua96YDnBacshpm4VbqCNxrDZ31cAs7YHPA4uSmuqvfe2Jp2LUhUEmYphs3jXGkUEJDc9dGCGsUUB",
  "key33": "pCraQ3zB2s27zCBLEdjHEz3oMJ2eLXSLgYZN8NN3b1LLLQcXtBMceaToHEaeF5VvFKa6GetKRA1W4oqEXK8f2cB",
  "key34": "2s2qEwfSkm25yXDhFyhnQVmNGMi6L7vXqgHaBpBdzLxrQy5ygpb7WiQzzNodwhfwfqN2DUBWcbBKKYni4wAJF21m",
  "key35": "63Bxg2z1X7eBBXLbibYMCbVuMVyPBaZQ5Hhdo6m7sqBAe62aAb1g7CSENd2sYRaznu16r8VvH5Yu2UjDsDoCxGRb",
  "key36": "3Hg3ZE7v9RKxUBUReB8HdVWKti6AVirnuLFuMEnGWU1WrPFpMLF9sXkN8JCtH714rpdhWYZYfBcpRLpC1egs2Bic",
  "key37": "31Joa1B9FhxbAqQAaxXHpJ6k6kVWn9XH45oF3HKAAZ2Vt6PrvqJtGHKFVZmknBt6VfKL61p16Fgoj4am7ev36fT8",
  "key38": "2c4KnWc5gz19aSeiJNB5RWSRgVj9gbx1fzSjZMHE9wj9UQcWN9WMnXpijxufvNGhKZDPTtkwGUeTUujE3EYpjB3s",
  "key39": "3ZY824rCKLvBMJrJdRRy8ck76njRndotvcUD1FS1sSjNPh16YJaBWXX13d8ntqH717P16C1hWBvPTXPEXFo1VHJh",
  "key40": "4WJrRLCCugnZ6DZbPDgevXTfpv5cs2S7C4g5Eieiv2r8d7wVeX9soeq9jmHmjeE1csH6uxK5BqdqKPyEZj4ncVio",
  "key41": "4hRHwupPvzYUkqn8ytrHmHwkhozxjfYYjBR9qud92ECN4HEE4WgG6gtPUp8CnRP4u6XVmogDPTbq757s4UxcAkVZ",
  "key42": "dMmHL3Wh4jEihwk8UiLEx1KbXeLRbB8SzAqjdKfShZRi8DSWAaX5ffyxLR4JxLYNNaQCUHK6CjcCVTSutnZ6Sd6",
  "key43": "4VXAo4bQAhqPxgrzgkLvH2LVTHiZmgXeRi4xDjjaUB4F8sPPntDdBYwDMfpLTk967mwPBdFAxtgH3hDju37o6vT7",
  "key44": "5rp9AEatc1qX1xNt9xWysotfRqqCcW2T7PYkosEeC7ATUFEF3gVN8gN356p4ZjMihMGo4AaZRtbK53zzzrWeFgVE",
  "key45": "4EcTPS9v2DxF714ZLLwVa2XezEG43JBtZ9DkjE3RSBeMR1nJ4w9MYnir31tHyZgVByScSLH4YMfUJrxZXaRWfuXE",
  "key46": "3hkKJEutADiQeDHEdE2GrX2Vee3WwQLLuGytWshqPyXvTymxKX21MW8vy73tNXPUYuUDsGRJVHnru7i11hjSL9Nq",
  "key47": "5zZ6ojuujzKJwAzAea5pYneR5jcd35nyxn8B3HQrypGRAB6wdaW6rGfRjdXWaVZrA9jYZbJui45UdrC5LEWBVv4q",
  "key48": "2391fPJSKifx53g5tWrzwVt7KA4NQqpeVhzSN3YntiLBWjoud2tBWjBVKJTz2cqKPFdb9pLehhW8zpsPnHm8uVjt"
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
