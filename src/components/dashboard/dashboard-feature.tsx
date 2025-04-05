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
    "49XvMuiwtmKC44RCiSdudsP6Wra5eaNCDW5EybCkyvVyZZRN4XwmvWaERgnAEDQTXn4bMfPgfia5KDFc2QkAAoxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6LdbRM1ZTgbEWcq4anrkKU1FqKwBJ1CDdSPMPPR3PiW5wcPSvQbpkUAhwscKzDcRmEfHSuLoaturwdh3Vj5nnb",
  "key1": "4GqkqCjN2JdNyYTooP4ts3g1MJ1hCQobNHxcPfVdPxkpqKs4AhCsUBd1gYFWCsVRBbGjsf5CoXtDV371fYPNJsQG",
  "key2": "22BvfmdyebDkvaAoQEpV16bqgvVDkRegGfnkEz9m5WQCz2a1qL2yuh7u8TkZfj1RutK9UZyEtuEyAAYRSiDnvP9Z",
  "key3": "41rq8L5iGFNfhBrYTHWfA71iudP8AtnFtn3GjTjUEKgseyKYwtML2yd9J7oFHhFs6kdN1pTx3DBaEN6PJv433KYK",
  "key4": "4kHqd9j7hMLMxZnTkarc8fj9AgeBphZi1Dju8zTfexAp6sEkCx3tRc2htjfW3HN8mMsUndnhy96FMGSfd14DVk1C",
  "key5": "2bnZjmJrtd1Buikuouxd5tVxpwUy61T2L64Q7CRcPVzAyuJqkzU4Fhic9ehuMrKNyGuexUue7T2SuMjcBqkDy48h",
  "key6": "knzVuXgLsfuHU12ibwmD3Ct8cxWcfexosUWzLxZThcsAi4HH49ZiS1YmRGNtN9NiQ9GALzVW83gmiWoAiKiYsX9",
  "key7": "23ZpvyT3x9iJPmxKJha1u498p4zzKyFbpy3AoqHStKfF8d5WZCW6DxULFaT9JygKK7PUvAjtpbsBq8RNoPXPUPQG",
  "key8": "Ei91HTcWdjYheqH65dtc3VmHaeNVyZ9ugjwAKZ9Et8XH3ku7tfapw81D5Vf37wZMtvimXAbscvsDpt8YKaUn3Nb",
  "key9": "fRPmUdecT7fpCsz6QmniuP1GPMMY4pk7k16P8xugjia5wggpLty4Bj3q3W8zhVZxRhc5KWUsRVDMBccyNVi71yU",
  "key10": "5vvjrowEoMJvCpctZoZcJFspu37QCwdYhvd1MWkB3Mc3fUihSTgoZKe6ZhPzueEKVrVB1oqsdjoBMYdibgeawP8J",
  "key11": "rLBVJqiMshvg8hihApHpSfw115VGKELdJqxnBTE2TaxSaHkDvMYqaKK9iGZL5951q17tLqjE5hasbX3cayiLY4m",
  "key12": "2AJmevLoN98khT6169e5Ki6w8X9ZnAzP3ySKZRRFA7aPEc3nV4e6g6Bov6XkFhumBq3Wrj5FSowU7eEsvaERpjyC",
  "key13": "22VBfsnGdGYzAM2Q8T9n2WgrHicVMCZkBXFu4urggYzX1PcyMCWp3GqwjCDAB8oCDUSP1fhLEJRKPz8jK6m4qDyY",
  "key14": "5W74LuSUgrEAJDZfvhXY4NiGjN3NfP9ZDrZA6geobUm3VFNcmWTVctJKEWiuXLu5TmZGMf3MXAPNa1tkGiwiNivJ",
  "key15": "2fQ4kdQJVZjPps59HEVsDRu7Yj7HQDZiKJ2yBgm8botFEnMkTn7o4GRiz3iBwqYwAqR9YUmYFvNgLkUunFx7Hcj5",
  "key16": "49EcYB7HXMmSya6rQ3BM46MS7DZoHeu9FYXPtcMrbz7ywn1KZcrUysZcj36hihCv1qip9xEJxWvR4P325FYSJ1u4",
  "key17": "2BBQGKQfnq2NR3TcBQPqmyRHwaKcMbNnbMgDwBtm6gwnc5MRGJ7NrCQLpD94cDZPNZmjQBhLngy6UxVy7oLNy56W",
  "key18": "5e2PoaMSQ7MCF89pLk5y2vHBZDsYRM5W5mLMeS24M88vAYyjkTPJX7FG7dergspRsJCVNX1bKBC1BBtMNVwrdvRN",
  "key19": "5fpinWauRneSmZ2NcqobFS2KdC96rbgaQxfj4yUM8c8ZFBq8BbeUETge8Ypt18bYtRuiLU239WSZstoU6NbVkpto",
  "key20": "2MQJMRPTXkijQsLmFhSqjofVJLEYdaTxF9cYKtpAF99ercmNot55uDS18v3TytsrYxYvdiZTLhHDdKhHokdQ1xY3",
  "key21": "2bmYRoGSNiBMw3QySgwc9t8GjrbjtHfvq9uvcDm5Wvv74kkvreQFSNq5Ujbs2xe4bqZDR8gMeCdz5N7t9PVdUs1p",
  "key22": "xa1QKMx9eHr62zNsDPar5diVTuuUrE4VgQ4Y62HZCETkAELBzT9V3DYciM3AgaQ3whxCiUuBFaUGwvYBC4yNG5H",
  "key23": "5XDqgj8qukq3VatJuqTJ7kPkUFQyBSobGmGCNtb36xJS6taYBsjKqs31C4JMn9iQD9FDsixPq9Uui3rj1o3zQC5w",
  "key24": "28xYn69ZH5J3QHgCkar55k4DZUN5NSo9meWgdAiFqY7qTQHWDWdX76uw8mAFvzeV5e7bmQzLxwn5wxdVu9dpY9o2",
  "key25": "4jMHhMfN7cAsKKNULdrqsW1kgeCvfjdWPER2jWEQwoKLJcAKn5En2LakHoYnNrdqQHDUQWohjpwoyD9ZVzWUemgd",
  "key26": "3kfLNNCzZCDadATgDFzPnwD3wGazTg1NWYwUxPDZiC7djeb5PbWLHtrbpPjH4MB44rjKX5DKbn4bW5sPnRJQENGR",
  "key27": "3tEmbXPXZHofN3y8AbigXJsktdLJzU7ysVKKj9PcdTfvhNdaTgUcBbzsLL33qNDx2Z6UHYuR2p5WfcVWrTRCezKC",
  "key28": "BjNV6j5MbpNPi9NypE1zSKV2KVkEtyJFdjgnAS5duLEw6PSecf4iowaKKiNHX9V2Wdbx758KrwJTT3BUUgSgU5E",
  "key29": "5QMVh8z7zPZjBLDe5JVKgt5qSyrz7dr6L2P73KUb5DJcKjvg646VWzcFqNPQfukSseDbx5bJ7JGGZnRQefkMdoER",
  "key30": "u4SVEYdye6Q2sX2xKzPBe3tAzMjisBedcoiVQ9vNE7WYRrULE4VGHdQLMcUSMGFDg9CzUZS7YVeD3P823KNUYHa",
  "key31": "3gk3DyUuPGhBEYVVy9bLxfE7EGbYHgrW8mAEenFvMo2U5AHoK3XtXaLEETSvuuVrAt6Lq9tg5eKuQWbYZrKhwzYc",
  "key32": "4Vp11aDSx1j3ZwB4hPtn51fePFwf2gjnGEeq3ksXEhPSS6nuBK8MP6athUKRTprbSq7ecRb7251Xu3Ex398bTTue",
  "key33": "BWK7Yd2tE7d6y5nDBUq4Gp7aDgjNnTeaUrDtgmsTWMUSFTpJggaduvMdheNUwGfNqZYZoxFSrrUst9a1ScGSK6q",
  "key34": "2EcMphYvCTuDuaTjWtQzZktp7gE9BdhaqCRyenq493vDSYXtKpYys6K4sES9kL3CAd88o52ttq29GJffZjzdz9VR",
  "key35": "4bjdpD4MdT37KZ5dykEUHLKCwZyoFdngyqtb53gi6U3PiptndVmFfpc5VgiN5yKuqnsWsNnj51bpREHmXVwtB8iG",
  "key36": "5VJunkiS7og3dQxZ44sZDHwTcpzet8mtM4RHA4TAA37bi5ADrWR4bSWa6yK4g3Xs83SBTgZL8kM1ek3kDsCsV9US",
  "key37": "3wxuMzahmgQsTN35Sb1j2AhHEQh4V9TX5cp1UmtzLF6SrVraTRZiYu6iHwXzwJzYRfdZcXD6AUEm3NEumup6HBYK",
  "key38": "24mBDayrTXhmzEtexoW2hkvNQJJRTZuReyFVJUcxfiRu5PbUgcK5ZmzcYrF6NgxAUtK625uvgZ7AUJPcNYUf2cGd",
  "key39": "4QaZ9diF65ueog3mszLfpFCfPskNiZyiZBNCsef5TSKKjSZLnGqwuVcXfzSUzkEpKTqBrNawxiW9QcTtDB72knYw",
  "key40": "4B3DgSQvKzBGU2xLq9UQqeFAqqFVY5ZQmjb6J9btezPNcDT5Mbh17GPpAk2yS6z2Sh66vc6Q7xZJXnf9z9C3Y1c3",
  "key41": "4Lan4fCf4ne3WeHMqBeuzmJ6hoTSi2uU1VCJvh98CjThv7JjjFEGFZ6ZebEvfQXLMAJkyC87iAZdA3uXhucg6HbG",
  "key42": "5PvsiaX6DbgJuFcUAqtga6bHwZ9bNFXvqLGRXGEcHBysQDKBfwXFNR9dPC5GEjmJ23RoxJKT9fiinAWahUk7twyb",
  "key43": "3Bvvt9Xc6VVWRJm2u72D7EdydBqD4o7zY6eoAoK74nsbwBVtwHNwWeRpL9WUM8YhEkZ2moiUVLu2T5LUWzd98raG",
  "key44": "3yRDKPtoBxaR5Kba1q5C11DUWc9mCKpySj8yuwH49tktN7wwMRAmHkufgpUY5YCKp99dk3QYSZfGaMmtdi8Ki9nw",
  "key45": "3H5HN6giS2j1zRzExMeT6Ees3MZGstN4TKX7shSbaPDqwAKAzi7mfkAfnL8qi82KEs3SbPLWmMBLqe6UqSzoHdiz",
  "key46": "46p1cE8hCtZ3hVY4ovT6FJKyqZRTyQdDnqRJowMcneLKr7aqAVNXqq83BAK36y5HtiHafoHH6Fohny5nHewV1Srf",
  "key47": "RXMV5gLKiTS8Cuf3828SKSKzAfWup3Zci8kMmCTbrSsm7FT2JLLM8uD1Ei4U7XG3MeBFw8TKZ4Uc1B8WQy5tugV"
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
