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
    "5SAirj9kevhghyDMzkqgPWmgr4eDdPpouGz4mwzHLvQ7FkT8mwmbcdpeDBe7s5KGQGFrDsTAW4Ze376evYRmWCND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wT3ZYfEurJAoGvLHKbhkUQPJqTRYh91mAe6k8sq2Qv3hae6XGFp3tNA8Bicmb58qeoGPRCd2wGremLpJGGW1HPb",
  "key1": "kHyfRVTpW6mNnDq1NGec86YiVHbjmNkheL5str1qo4gx3BChK53a2RJsfeEevHVqE2H9GjpqY3KY87uwEXq4nbS",
  "key2": "5CU92KEq8wGSupSme3zBVczRaqitYvQjAARbX2ePmRCFiWUztwXLNbRzTVJLLBPqKCKXqZsvxDiTQWJSjNrxTZ2M",
  "key3": "5USD2DPkRG12B1vJNSoEjYV6Vt2wWqihnwnMMgg3Ae6cXSv7SVKZ72qFG2U4AtWz4aVNsutih6wzF2xmvQE2NPWK",
  "key4": "4JqcMKQ54oUZHmhHjjTV8zR6KguvDxhyGmLT5Xjg6itMDAkDKLrMa53N61fhQjBU7x14JNygv3Lf5DXzhXZPivTU",
  "key5": "2XsGjEMj73tZaxHY7MVAEnhMY6o3f8gA73KyFW4rWLtKhJAzPkGLsgyW3ink9nJvEZjJyb1wrUbU9npzcKvfzzUE",
  "key6": "3cEUhcMkLY8KPPfBf3EhR5hRn4wktVmk2YD8hwon44C2LwzPtGVJrwzUQD2gYoPC2hWdg7sx98beRdgLHwT8LP34",
  "key7": "Z951sc33farTaNi7eFj2iibF46HVt9cAWD6y2SjGL5UXUmAVpsXUrqU63czHntKXrXUQri7hvZhCoB4sENiRroG",
  "key8": "45dvUJEiyXMCxAssznGjvJmEQVGb8FQWV1gjYcVeohGxAQDUBwT7Ww2T9jazo7repweSgMpwRz1tPNDiN7f5daKr",
  "key9": "VF7A7kKeDptxREALbKvG2mtncpzg1znyA1fQ9b5xAyjV4hT9F9BrTzDgoxMBu4EzVMKhhwmg3pJm4e5nmeEA6VY",
  "key10": "3LcbRnsg9huyjzJ7q4aSoLCm4uaY1cvzDECekQBgRFdBibCT9XJo6c1PoReqUVxKaJyeiBXKTQLvHC6MeRDRfD8F",
  "key11": "A3sigTpzyNBbgi4c7eKyXzX4YPTkNFDehQXc4ke77rB6D2a8HL6hCswAm57y1DewwfVadVFVJA4gdCZnDK5tQak",
  "key12": "2y1gRzYS3R6UyupdHPje8XEgwXJkSuCG24eTdrxfgK9YYogAcBCvVZVBAkkgbe5eYHfgtmuNs2hSgino7xr52kFo",
  "key13": "zBgmqyMwHT9r3xbrcb373xD6hsBZ6rtCZAQEUe4g8HTFR2xQYf2xBnWpxh7NZm4rmus5DRWx4EBUB93WGL1fxym",
  "key14": "4VkF4yq5r12htqCQwxWicdTBWw9dZULM2b68uwWCgMxs3JykfUeudB4ERj4MEfNV9kSiWn9hbnMvq1sRScqXvb9W",
  "key15": "2fvnaNeXxFirkE6bJoZYfT64YAtHBss9WWhgUwa1WoGf4tBSpJcsTg1nCMKdZ6X7cFXsLBKEX7sR5cddGULYki7P",
  "key16": "3yftF4XorK15wBLtG3HNSjVMQBfN53Zt9oKdEUGExax42f5t9nTGhg2mUMaAj4EmMBBBxEWhJrUVvbCQVLW3hEmD",
  "key17": "3xF8KrwdTzHUtMdK2PsfYM1A5Spq7ytJMCouMeJqb916q6NvRW2xbn7di5Enr4St23XtDBUZxTiVNn1dqmy7ymv8",
  "key18": "2NAitMp5WrmjtXNk3uSkj1e5rBjPBiHAKv2icsf7Y1GNjaHPY2TZZX9AGJSFxvs2khBzjfq74gtFqx9WacHEPaMs",
  "key19": "4pLVx2dzcA4vddhTsZ5bRLUUqZEtEB82dJZzKr992D4s9cG49M7qomVLuv9ZCvkx1kGhRUAzjk6CKaoscnBACqQ5",
  "key20": "2ejB8L9ew1UFAUmVWeprui5tVBnHvAsRupGqwoPHjucXSaoEAakzgSZzy5gvZi156YL3aRRQStJGgc5iSoNnCXuz",
  "key21": "bKcthQXpfFV6QxeksxUoNArqC2PcLAw9pmZ4E1umFCSKiwQEyKbY6oLy7Ggp7QSVPYhq3YraBL7tY54PsZmU7QA",
  "key22": "HHk6BAKn7dCEyKuQbacadJ6gpd4wUD8kZ5Ch9mZGUEAr1tx4MQsd3BPdUcJGAu19h2Ju4A36KSh429fzvC6afqq",
  "key23": "4UENBQQ8BYVizbtMxod6WmDpwJDMf9wdh44inpFnjJf95uxN9dEHsUVaYaJpc57QPcdc5iV1dsobK437kTe6UJWF",
  "key24": "2fHzAL5cbiUJCVfMVrU49CuDWCdgEsSCxeES2UCGEdqPji9gh1aHpd2AfQ9ktDvMqaR3QvmzyX1dG1m6rzXewxRm",
  "key25": "5iRaaj64JC8UtLmy5q2Y9TkBVZiJAK1SRJRVyV8MHJA1s84i5dSdAqb2zNz2vkTdoFvrdxntP5G64UXBNQAcL81S",
  "key26": "5YNJC6otzWeZXZLmRjyqQNoqpXyqyJbz6dBShzLy4iM62ZnYu6ChSmmCSat3EHTZtru6U9aa2kMLi7g5MBWZnnMX",
  "key27": "2etDVWRUN4iFkeyJyJBZwVStJQx3CNgUmsm7nLWfTZdymPvkTCX82Vh2jVmGuwXh8AcLYpuccCqbcsJE3rEKyKQd",
  "key28": "41acMQ3KYsc5jTjWVYv31XvTjqAeknR48iCES6JwB1DqkrCEMHn66WCC67HFKDkvdvNb3WeXSygr2eq9PWTC7VLE",
  "key29": "5yY5qDr4zDsg3YXo7sJUJHJaAw47inbkmU7SDddc5e1Zwzkiim72ntaMMLYmBFDdpbuwXFhQVyXYDJNJdWgTiaDz",
  "key30": "3PuS3RPjagVYPhsBXXdYKSt97Zw7sFXstgLp3MZ3Q8AbzcP2Te2ZgqnciS8iWabiJNpD9vToBpbzdSLSUsm6xAmv",
  "key31": "BRvHujgVnQKvwma8dGFnTm4UXZXgCFe2uE2GxbbBHMiirMvkWot8q1JCDs1uj22QAoCsYNN5uRW86NWB4V5Yga7",
  "key32": "38GBM5qY8P4t881Eoikxm12ZxcrETn6cN7W35VcZYvnYK8dmK3cf7D5SvRPnRG4vFR1QHQdrP982edCprXirDRF1",
  "key33": "V4TteT64bjyYhZ2y1m8zbCNmqjbpK1UgeMeJPt4XN5o5XaXyEqQtxRZDxFtoTJHd8CNPTvmjR9mBhfd1ecZpt7T",
  "key34": "5A6wz31FFtaGwtN1YZokpUfLYhsZnaj8CLUSe4eRzQvSCE689an5F9BCTCiUd7EH1mJoJyHk9UZz4WnnFUnedhAZ",
  "key35": "3LWsXXc2cDVvL91Yr4oQhfeRRWBCYqMweHDdkPP9focgMJiAHSL9iaH56XrHRaYjixMaA48vCeLs4BgPUSbzQc2F",
  "key36": "5txZs8B92rUTzKkfCB3WMPY6yziExotPtsiunQWsL5ofWcFksJ4tV7WK9jwQb8hR9s1erKqm4Yrn74eaxqqChZB2",
  "key37": "5YysT2wSPWUUjAzTtajzDYw8CzgEpTpJHkm6daFNH6CWNQZ7izyvbJcqTywFKCRkwK4TmXvARAqippRAgobWEimT",
  "key38": "21TPCYA7XFGugMicrxff3i1VrsHg9U5p5pfHdTPJwcr9yw9u2KtVc5yHNKkNtF8G5d5oSj4xBWWk3oENx15zv1HH",
  "key39": "4v7AEjYypUyX7Jtog4bC7G355byDzSvDMjMwuxcokm2MaQWepStnoCWpDacBgKFGFq4ENmTDi7tu2DP6yKsjbFEZ",
  "key40": "B9rSdH8ZZ6TgJ7uU8MF8aDU1N6JsCq5sqN4L6WYUJe3YTh7F3vXVWBwyJjxJ5p1XsfQT2vqdbyRD3eyojuAgYLd",
  "key41": "5PeVG6bMuhjdXw7sxht7jUTtvfGm8TQhuZk1GJPuJDTGxQiMV45Mywy4ffpMZxjcvqNFwK3KXfMjkJk8hko75Km7",
  "key42": "jrnaYsSvvMUCVJxXbNnWenqgTbA8hVwbVD9nAPxq2ehQ1m6WMMhVya7FZDQjXoBHdRugLeiujTc7UHki8v5Vicz",
  "key43": "7JjnbWqM5YzgQDrw9oq5dQsEeZL9FJBRzQ3BRZv7ek3DrMUDKZc9wEjSGz3cp9Eg7BUxj9b5nd6bjzQAnsK43Ky",
  "key44": "3rngiTL6PVjTNfXqok1ZaAkjon5gDxch6Y8C6asRAgyPfzx88qzxirEvRjW6gw7VmumoytqxvAggCQMmsP4kvTC4",
  "key45": "3AAQvZtdG4V2SLDXkrGmNqN6rHBxagm5eqGRjvErLR3AYviYFxu7tdN9BPtwLvkJ8ps3mrWp1Sw2by8o1Ymg3T55",
  "key46": "2NnPPP9iGr1xkKQJAx5kQ89KM8AN2nkFe7F5YnWpEveLMvAUHU7c1TyGN2gRHp9XzpM5fyb2uK9wZ74kGe8e5gZ8",
  "key47": "zrurg3mv5gWdJuTebuTFrtiXchtCxCfmD2ZVHsP4Ywdd5Rb34VmqFQVVxpb56fyVjPXksDamEjqDPL4k8C2GC1T",
  "key48": "TV7ujjQtkLR8gMTdeK76f9LcxbBWN3gsDDsJhQHSxB9dTh49NJETeE4qkY14DNNgkeAUy1WGZzs9UJCgvwDzhp1",
  "key49": "2naDn6eH81rhgdz8HnWhbDZU6UoiUWGEg7dsWx64TN2wD6HWGhTHZ5q2qGLaxNLvr9zvvjrb7CoW1vAVnieiSPXD"
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
