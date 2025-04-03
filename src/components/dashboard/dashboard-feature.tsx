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
    "2qy4vS3c4BZ72CUf46on3hvJmAfrXsKUyvE3YoPEGYAH8XTHsVnzWGnBmooTozoVpUAnQgGF4wNVAewaTtHfcH4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FC7DeQ5P8VVb6fAmhGZ2tF6toAMfjSgBKYvAP68M4dLghTMSAXpwYzpJCjSDqJRCK13pudL7sVxvKWdmsSUTp7H",
  "key1": "2bS2c54UDPTKGnDCjWLie6mkRdA7StUrYEy5jgA4QX9wvR12yW3grSBqogEYdixkntnqiN7avQgnhJhVBQvW94K2",
  "key2": "5akXJiTQVjAHsxNne347syf7oGoXBD9Cg2VGD7xBhYLshtaQY7fbZNB9a6N7ExSqz4M3mFe9fAUYgSNm5fpYXAMr",
  "key3": "5piDbvdC3b9iL7XS7PkDwreqDkqgPkZ71f7nZPpKHigCkH9s3tuFKk1L92aJc1Srp4PeNwbGqUCznh8SpZ8F4J4h",
  "key4": "5TuxFgWH2rJXNCmm6S8hDHcG1KFWz4Csathx98GfefwPHWVWURV61riFrZ23jsaqQ8MEG9Zgp559aNjrdapFoox",
  "key5": "4fAdAMJJWXa8323xvDrLGHZoEZhD1isihm9hK56n3rVewqrNwnEw2TnMSYCRGCYbNqYYxPTygwGopdsd2WBy5Txb",
  "key6": "3rifiZqidMZbZ2WhJm81r27w4oCxmWxRbBzzXJvDHGD4DovP8B2rytM4YbgyhNEa515RPNMSxqhNKWyQqZ7T8nY9",
  "key7": "zwvxPSkiXTEokWp78KsNprgEa5wDbfznGHb8otv6UrFuhhhcDgFd4YS43asiEtMb7hdH3D4jEmGcCX537Zd1RHL",
  "key8": "3yZgLoLG3W2pFHXHmPTKzTiypeDZPq5PuzKJvGdmQMzRxxf9B54Kw2EnwTjKQS6NFRyS8yDiiioBg5zxvZB4N7wV",
  "key9": "56qda3fCPYAFBuoo34fN8AQu9FC2sM2r6EVfWZqzMm824PdSxgZ1rdprGYmHRWp7k47RKwW8FNuDv6Sb7ZJYNzBg",
  "key10": "XX37NFrMSaFAFMzeKrjjqP5hZmvUpxUmFuoapRLfYJSnX43z67L5N3xCKfiQau4e7XtLgqVRJoQCZ5SFDrae7Xy",
  "key11": "5YzK6HWbYDxdDsfNZoA2x7Uf7imeFf5DUTRfp6PrsYYDFqGCjcDmgVbzUnkDiSW3Eog71RWSPU3j4PtYGNdk1BaK",
  "key12": "4zUECAkx6bK24oVGWaoxhBxEApcbRoYtyVSHvF5WwPg66srbpioycr6mxMjtXiidenxD11qpornoky3fCag6KM8a",
  "key13": "43UkACVBUP2ZodE6PZoY3RFC5SeQa1JNKVBCh2VShrzdD2cgVKSn39ZzJDbnA5xiDFNUHhgSQMB8NY5dz1pDFJUq",
  "key14": "249vMWdELKdSbiy4eFKALdRtDWbBuAV6KpKkjtu26jfdi9oVaYTYNscNjp8182S14M3XS5AGxK7s9TFh4TWesp1s",
  "key15": "4L5Q5wAMyHgiysRZq2pC3WmgfEXsX4uH5RSgJutqziZdh7Xwxq38Y8dYEcvPx9kP1f1f2tufxT5g6ga8gjBPoYyx",
  "key16": "4V1PdNYER2KHcz1FswxMvezndBrgn85C8NRoJcQemE2aBHbAfEAxxKGAEeEGvqsp8MbMFbaocLxXppeim3KGQM1o",
  "key17": "5KYRic6cz9qNSm5zBbwfMV4DVGLxcMSs4XCvxboJXjZ3ghTQnwuARyxMm7FSVssG7Svq8EfsdrNojzA1A7FTLhDd",
  "key18": "2Kc53iQgTnac9z7KTJbZcKeFJtpnu9cSuevvr1ZPyriLgqEe1d13v2car6SJLcQQfFWy5w61av2KPLFzNVgCMM5a",
  "key19": "2d9hgTqoxtvQmAyhAfy6XPAd5Pyz9W4CyUJnyybh1Pu8B8sh774LGWgALMr8tUPquzx6Vw41ncodNEwXv1i7bWi7",
  "key20": "3EzG2jnhvVKXuDxe28TX99bpSr9yKZ5yNWdfecq8oodzY6sgE9gUiYMHMbuYDGzefXZfvJ7hKRDLXRJvSLTjdnBA",
  "key21": "565dYX8bbkiYLc6ccJZsipm8LAfNrP6nRut1eCRbdB32in4wSAZijqTGhssw54sLTofeP9gDbtdUAr8UCYJW9vf",
  "key22": "2CfkdT8hst4T8J8bsxY2WRRmLaTu77LKrsdLm79si1NSfunMakfq5DtKqx7Gz4zrd4SyNGGV9md3eMP9eoYsjxPa",
  "key23": "34Xs28mRtZF4PVsXy4PgQNo2NVXYKijVqy8hL1dpcQH25rJc6ouUBiYH4yVov5J6qRAWCu9hihvgmoA84JgygJTf",
  "key24": "1cgywWp9aPu7CteFqdUpv1mwZgE7xZeHScAAfdqCpKURxR7EWXZM2sbjPRnxDq9HBfyz3QKkjNuXQCu7wUnh5PF",
  "key25": "q4J1bxGQf3zvw7C6zSVej1PZgfxcXfioUa76upDmbPmdqsmeTCBGotdcdd1ttL8cG6VJx15yTCgnt6wWTLXgZyW",
  "key26": "55sVSTLFjkxpUUmFfyjcVbi8pKSWEyqXe19ycdc1oRgTdHYQ3APPEMmEggsR3pc2qGFJ15mhCruXNuRtnBSxNJij",
  "key27": "3p5YLC9foPt4Nzra36cHgp4bfURp89XVr4wZzfBVRxBb3WvPQH6qD6RxzWadE1qV5XLyuL5nJAzpoyn1ZYfgSfmy",
  "key28": "hPLyDWSY5vrmbevvrubcCi2Tghwbf41dSwABU3Z5pzCwmDuorRES7HXqbYco3uwkJhf5V54nxG4EYig2NsFof6C",
  "key29": "A6ox1qApkNX3PPuAhFpnCRxhEdX5ARB1NvtQ2WEf7Ze7hM7FFFx7TzAmbNr2LJ6wjg98gJC7SiikdQwPSsYdyiU",
  "key30": "SZizVqCDUSYiVk8BKHV4ewf9iNjt5F7GN59L9ynVL9rZtc9uqkxAxwfZhJm8SfXNKuZtFAiBYA81PP9J6L6qkBX",
  "key31": "4UJhG145AZ797YTFk1EgCXMDDmtk1QBwMWqRuudYxTPDeBhvedN8FDAZjnqbn46wyXteqJopQfZTgkeh1YKKYH7e",
  "key32": "3oMxXsK2yXYUfqa7dMd2Y9wjM5HCGZ6F212UrxiUd18vt2hzCk7BoUeqtmJm2bkJLfS6VWAVbNsfgnoEthXPp7Yc",
  "key33": "2mLuGC5JtNpdKB9FwR9FrB3vd1UmCuGKYWi1jW9khjNBoGDi9uCAVZ8PEaG1PNjA5HDdG58BCWFeVqw2sCTyevjD",
  "key34": "DSu5Fz2VB22Vc4RsK3tA3MYrfqTthRYAGwNcbjRs3VeXgzjuMJMuMEdDEV6tbDyfNkWsGBgt3oyZsrTgy9Tf8w8",
  "key35": "5siMtGhh3CSvyb3cvpAZ9e133bnSU7rLKWhAC1voMVtXw8J1tCzy7PgrsZnPCaXn2zqmWmUFJTvW4nEturjXzR8D",
  "key36": "5GeYteQR49fLdqr6YendTp4PD3rwc3HYHxZsvTmCbLTmXmCdDKLhak2qgBbVjmUrJd5shHRCxisRSBDD4xF2BcL4",
  "key37": "5v14yc8E2X5EZgNTXLUKmwsiEumeme3ERKnRNtdecrM2pZ4VBYPAkFCPJJLz7kP9jqo1PWnSxk4hSdLn5b7M3Zip",
  "key38": "CWHi8t2FdS1ekwnTVKQqsm4NPdVdzS1r6g1Y6RqZu1axmR3M6sBG6pab871BFg7emncD4t76z4oeMDcNHjg58e8",
  "key39": "2fzEhSVuwmH4hKjnXxevuNDDywvsMRWLe6KoxvgG4AwkTTZp5ZKsM7tKwLqfNRFRUBawxvzfnuAFBuxYPGrcjSjM",
  "key40": "5Vr85bSju3xXMRLcnfqAPQ1rFBix8ipK7t7ZrLYNewfSq29zgwgDs77sVtdafqr5socdVkbpDCYQ1UC7NVh8buMH",
  "key41": "5VpmpQCDLD2yHv28XPhiq6nhcDCcD539sQVkyYgAMDo8CrYK9AsKCyNrrkEX4GbmnyuzYeD57nP8cuT1kTs6naAR",
  "key42": "2fu41CpXRwsyvNGHR9FPcddQTTD8oJ8gtkLqEdbcRYg4zyRrfG3drQf9GR4fTDCxGBAgRarEnEitpmcJLBNaysC1",
  "key43": "6AByDVuGX5mKooVnSMwJTC1FXwdz1zQ2WyjPw1mw2rPdUxufaRzh6xYTH5rBzenJtCACHqNYbpDuLNjjexqsVH4",
  "key44": "3nmr2vAd1raWb5XZvLXzANnMhXpeNo881qGXKyJKmQTHg27oEfRuYw2Z6kXGjSPXVTQZr9ZPikh3drtq1L6NGkrj",
  "key45": "2tcVxZxe1M7wMkHKRmZBFTBzdPnDeYrfdkNorJCh5dCzGafqUNfixp5wCtgQZ2W7WuJTV21kJTqsRNpgp45Qw2yZ",
  "key46": "54mePLgCmCM2ZNjNAghJtYkFyWG7A7GnokH4xdoy7oDPh2bFsyisdXDy45YeCGyDbQAnMD5YiagC4cu3sm3Fdi71",
  "key47": "2REQTuycJ1P5DHjt4oKmJVicuApRjRtKu3mghghuPbcizMtZqgYSKTm9GWNFaxTN2ySDo6bYKprpp9oKx6z9LTHi",
  "key48": "MtwJSuCme8ovMVqYKRTmT8hHUuRxc5vatym3X8a2CWuhT96bKsmWQi4sqaRqCz6SpmpypaNy5VWU7UPmY3t5MyU"
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
