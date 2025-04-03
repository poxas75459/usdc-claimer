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
    "4izr2MfhDJZv6dh3aVqP574T4x8sCRFi2BXWcR5eG1T1YT8f6AsJkLUXYdRAvHKDtFRWC9otSaqdRygASxmNhT9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnbtBz2QLH6YFWz7tRVztqNLMFPGqHC43XRwAhfqCRLFqgvA3nXLE7qY16eVEtfKRPc2yFPwq4r4VFBDxzJnFWN",
  "key1": "2aRgkrZ8HvrCZjVDvCV5Nn5sMbmLxGLs1wFJuRJfFeE2fgE3DPC1UjaDe1YiGMDVX69ShbVr7xpRrZEvDsp7bztP",
  "key2": "5iRuVy9723KTV16bfc4hUy3QzLLxNCVuDrNYe2tevA7SKQmo7eNbuFqLtXm8JEayJXuHd9Z9mCfmEhggEhJbcWDe",
  "key3": "MY89aL8dihvQfYuqZ9y7snaEZ37GMPprQKJC5wBiU4mCSf7R1vty6PDWrLdoGguB414ZqNUrJTEfkPNvmdM8hRL",
  "key4": "4QmJDQ3kWaMMKmASWqnDQuQTT4jwaXCv5TghsECnLw8U2DCQfpZeAXyCc31XfcMHZPQbVHZ4NwJZY9bVPPUTrQuV",
  "key5": "4ea1BWAg4VFa6MQWyrXVjsvpjNz43NP6TkTTWDZ7xqKuuMPNUJgd3NJsU12EW824NazgGAtaRzVTzx5ZMfzvrHC3",
  "key6": "23HqHwRX5dwpUTHmHvjyYiAApSDt1xNf3fZjpFqQb95xkAy9BGucARBYHn78HUUyjhXBCbLEvg95UxDNqxxGpXvw",
  "key7": "2WasCQbb6u17VM4JArgoir3sMUXTA8djyPT5jfBo3vP3LpSpB1wGMqRCfjU19zq5kFnZydFgsN6RrNgnvmu7LAHN",
  "key8": "2LNz667wjyqh9cbxfNU3yagdnJwCR4fijGfxPmSr5MAfyxvFaYg1x8k4DUH5ner2yojoYWRa9wfLxgt35mcGS9nk",
  "key9": "s8wXznK8Z7P62JRYRpAXWaq6FQgPfpnfKHDGP9LpkfZEhsDWtRNx7QRMJivKVorbcMUhzumYZTBtkZbzZgVm7zA",
  "key10": "24zLFNLsRPJ7Zf6yfvSUJ6YTDZJMCTpkNY4viL1JmD4VeLqznKebRdCdAKztMGJFtggiBwR6XD4vNtqFUXPowJSd",
  "key11": "5cWrtWYmT4vZagG72g2g8yjTc7yncDz6NzxQgMSZsRjPKqyGyuVeTov8Dox2Awk6AEcgiQbTxRLMWT2FvcLJsAAK",
  "key12": "3VobfVNVhJDKp9waFRVivcCrPKs64sNg1i1ss6LePMmBsbhvsGj87bJuoZ4nb6QAR7728mpvjzKrBEacqWsHwzMH",
  "key13": "vWhyk8a7btXAo1XxxuqVW82eTzpvhMQDYC1QZpc9XMByp9x6ErfrhaF6WavZfE7wEiWCgfASZPktvmSDR5nXwyA",
  "key14": "v2VCQFbA32Y3JtZe989CmQXDPsQ9DzYhDMzzR7o8DUpFEU1pE6XePD6cKMjC4qLeqPjXRg58jf9YieyPvgdLi68",
  "key15": "2n7pT8PLLiRZvCKdEfXMZV8Sn8wATzrK73Bdg3Zf2pb1TCeCGnJ8jhakzSdZWkBrXZbchmKTiMqGAnabs4v64N5H",
  "key16": "3hsNCf84akF2vBrpjrWL9JBx6eeCsUf6HacL1hiMqNreyQFMb3LN7Rx9sBVy4P8w1MA4rJwTziNMe6vPg6ufDRKg",
  "key17": "4Vnz9FEYXJYVBPwaQKeN5JaiDbT2bEZCmtLAdLPH2pDCd9Z2XSp7eYZauoDvE8dBfg6oYEpP1bmC2H6sFoHvrhWR",
  "key18": "2TbeYUqGFmAmMZDBdS2ps6TnFghWdD9iwrLhszpGNi3ZUqHEQAFXFeGfET5RqtPfJkVTo6geNPdBq3EQmWfTsMzb",
  "key19": "3MgA2Q4W21zcjn6L8DRbRcTsMx1XBS1KaKB9BE4NpXx69rfdixZ7sP6ZDTZKjpcBRV12JhKnpP32EKsNr51c4Whq",
  "key20": "351aNNwgdvCEzuYvE4vpxXsWVP8XsAk7TjR76itvDcPSULBDSeGE61Db4nEUoFyawPdbV35YTBdxYs1fbPzT9YFg",
  "key21": "4jsRTyoWwbndd5SmzAhPcAZusKJoxLGQLLkwkFYgJaxpC7eK7gtMMukreEau3an4stG75sQguqevxNqRAphfvuNF",
  "key22": "yfsuCmNqYAPoD98vAR8kKu5DDufu2nnzxrQzgUqDSLB69G4eKBqvu3gtzXCY13StbmdcEkwhx2fHQuyhAESbTiG",
  "key23": "5ZTMJ3f1Ljoo3hwxDVRw5YaU5kD457Lr9tHPRpnfkEAvDbtLaGt4tfvGST3xQ7iHouibLU4TVFU7KwKQkqTLWjeU",
  "key24": "ow7NwWh7ApUkg7zVz5zc4r6NvxyM8f71vpUUNynAnYSMzEspufg5jDkkzsG7hCY7joesG1m9VZc62E7VHe4ZKW2",
  "key25": "4J7UxMZxm9hGg7LPCroJ3wVgDhSEufd6HTFiN5WAgGvaPo9o8eFmKRsUE16KwRPEbHdgJL8ws4vNAFSx1bxY31N5",
  "key26": "zuNsZ7tP57v9186uLcMwZdGF1FrnfDvqhU9YxbY4nZNf2q4TndDgQtvK733h4cL4bX6RdkuKQPsgvRp5bNvfSq6",
  "key27": "3v716m2RkHbcPCJCyMJCLg1vMTuCJtKQGK8JjPE3RX8d9qLDubjcwzW4EwJZb7g2ktNi9TfoPQYSJ5jgMC5X25kB",
  "key28": "3r2wE9AAT82qSQqHX2yats7ZWnRGeLy1nEt3kd1sy3rMT2h4efPqSjBZKY5WHN8xQnkKjUuakju52xupV8Wqekd5",
  "key29": "2359DhSWjjve8zSMsUUToKgAxo4AGSqp93BLsuTDRgaDDxpUHFqnM82EzVJzB2DoeMwfEtY2W5UU7YtrvVhLDdtz",
  "key30": "3wnPJUxEp5ghYKNS3ucZUDGaKBbk1UJF57EVrVbcWbntAg5ajqAtb7Zb5i6DtbgPx4Nd1L461rB8Mi58RcVNCGwp",
  "key31": "29CgP7bpqaAMxeSYsdCPyriLVTtoQWw4x3fgFMeFwkGH7RQvHKQjyfPJ7k9g94KUGqo4V29sWszTwFaNHMAALufm",
  "key32": "3aBpfJyf8tfArhMBcFZJ8dQBEH6MRWDwDwMfYD1khKVW9KmKv6SfVQ2E1tr6imjfpmsXMt6UimsmbG5tLeexo8hu",
  "key33": "5Ch8VHvZaQhfZiyNwPrcBfrvVkHu9GGknBxrmza2kYdHbZuR5pio2s2qez4DbCzENBmxZuKHnfyNcGqZhpBmEV2H",
  "key34": "4C8oKF33y7sPDY7P9ZgNzP1upZ2KhWD8s8vGDqQczMMKj1puChre3ocVMgarD8M1i2gx17w9PY7H3VC7joQpyvpr",
  "key35": "x9TZiaHdsQxWRstK57XSNMCGog4jUVFqR8XrFjCtxafBwtB7wPLKQAuLc88KDM7qgzJNATBbQg2tj7QyBDbUy9E",
  "key36": "5uooZAnB4fPYSyR29GGpwieUGE59fSWWZPRcWMHMzoDJabhDK1zVXZVXyrLq9FoVFcm7h9LDHS3aYQ64AMhpDDYS",
  "key37": "2LqNWypRJe5SsmvsCdsPDfbgT3JZTvtK6hNuyjnBxSosahbjV9YTgk3evw9mAZHB6jGi3qC7TkghmXCTUjx9fjVd",
  "key38": "33u2CgVqFFJK5Dx92e1gGxZpLaWRC84Ty6919RNpR4zuZsnzi7yhuDYsfPxKSedyTSXfmm5BMCKZzEKyrioWLBnr",
  "key39": "25ZZSAaS5sVVdsRkYw4FvyubvE37mFbAxFnANefyBSAkUbD6XdfbMjU7kN7wg4Bf7DCMgjM1BVfE4Um6GHSwHzmp",
  "key40": "2g9GNoihKfVM6gNV5JagqaStkFHRPTKgXCVGpfepBAuw5VA7SPgyMwtAtpBFMBAVy3ktjVKPtpHyY9CfAZFFcWz4",
  "key41": "3gmgWFmNfsgKos7EU6mNyT6YftzWz32cBoQVdaUkecmmHGwQSiojc6QpT99sb8uJyS46PmWZhGecre5E8mkjKAcd",
  "key42": "4esAkU1gwHZrCMHsNkHpSsfggnzLdkjpQpRtJnAW9xevFa8ZzHfzADzb471xnoQxtsf6Ki5pNtQJuUN1zkWVxfH6",
  "key43": "2HhKBdABVgryycVh4JR7D8HFaT78R4vqWNZDiF189QBzaRdE69imsmD6yrDDeYpAtrei16hkgPjj75RfmaRhuEmi",
  "key44": "5vDX7biFFPbUUPDTLazoB3BAicefAGBHkHXodmfBe4ecfJfy2XgoF9GyMqQJYTKeDfgVRU8opjJnWX7DUu2yzuTb",
  "key45": "44aFBJQC2DYXusPceQp3sXHQrXvoGAQCfyz5GXQM2WDq3ZPKYzFSnKZsLzYYWvczTjM1UsviKpggQo1av3SezNCT",
  "key46": "5cSUY3jj9aHj7vCvXJHuptU4CkSxjtF3StfHzwKJ4bNxCwKeFAfBxQx95kMumySRH8FSS9AEBVW9LNABxpoqJPQf"
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
