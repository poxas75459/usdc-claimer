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
    "2nF3Ybxp2AVursJisKzwY8u98uymwfmSsszQKaUpuYpN9QsYUKseWjU7MCCF53f7UTnJLviP4kZEs4Wkmvij5HwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afZQdzRJ31xeZddnCdfsJonHqpmFqd5mYBwmLfZ5qbmUHcDK7b5aADgDnjVcsMV489r9WnkCovVpn9k7VEUqFAN",
  "key1": "3XasmzE1qdkGkRBL9wSSAKNoSegZp3vCQt6vqzucg1DJC2vn6NL93HaoXxM8s3xb9bJ78Y2LLXUUzCyBTeUd5tUn",
  "key2": "2qH85B71sYsHorSxg7oDcwyXJidQnVB8gwdGSamc3VL7VYin5mz1jTnpMPYyRFfaTAM5XKE7FksQNYccFv5Nww72",
  "key3": "oYiGdrjpT4xxR9UCXPMShcVZsBEzWWKyAQWs9iVzUNhtPXxLm8PJAT1Tr6ZwJLqgTRkBXLMc4cXY5nzwCoVg1aU",
  "key4": "2jiqcojJQRaKxw5e66wi5PVb3YukqKPK3bE64iejXfXaVqNkzvq19FtnheFn6gopXgJwnwLjEBzFsAuvToDtWYvc",
  "key5": "5JJYTNnFWaN8MSH4JefWNrrc2LRs7mvMGvByhErGtJmyTE4jqDKW7Ytf1nS79rk6jqaHaHEnzqaXM3ANBw6KmWvB",
  "key6": "5ri9i4669UL3V6ppmEQPFq6yPAV2HuQzxqqrQWFqZWExXV5RfJ7NkxE8WeLdyC76vCjNodjKSpt7ntKaKBmQZ54n",
  "key7": "3dnH3kVDLHXx8ubH1iDsJiqPq2wrsMFbsbqUNsmkiGJ3aksQzd8mLCSmpshrT2GN2jD7SbeTiSeqkZFW1F7EJU3k",
  "key8": "5oD1rNZkD7gQoiNBrGeYRXcW8ZRbtUwr9yMhAty13FTqUb3kTR21PmKTWqj8GwmyitLr9EmV2Ri9sSZaVeDg1SEK",
  "key9": "3A3tNRDDDvu5KzdbS7Kgvk8qyAE1wc1AxsMmXuapjjz1obz2w8eB3hFqEgVTMHpL7Vp9BSDn5TS3boMvqgCotxAC",
  "key10": "5GwaQHxwmuvsTyvrKkZjYmzJDRssGP3wBAUPwWNzdv8QVPBsUcd9yVMfSUhiU9YfBNVZyMzmh9mNysEhaLH2QCMS",
  "key11": "2iBmd5SNZaHsxexFYPWQuvo1HR7LRRuT5CGqsLCHLK58PfYmZssHuca9csQZtNmVWWK7gvRvbZ7fvP1vi6W1jAkr",
  "key12": "5hL3zMPDVq5TbVQ5uR9q38Sa2ucg4kDtoLQUMEjeenz3AWRA4hR4ihvTNMBB4aXi6tjQFLuJpziBnxHL94bE7edw",
  "key13": "3mcUzW1AE7USM3j8DepCpC2fnGojg794jpEgmyxmkktx5eDTNr22gmKQKpqNGdPgekrqUdypbHtA1rur4caJRpbT",
  "key14": "3Y4TGzn1zqJEvWySV2PEXxCF9qpsK1Lxc8eRYoXnq1rdGSugch3VwacQJ4XYmNC2Rum8GCaJuP3pb7gFTvLHLqUd",
  "key15": "56JGzpUjWCYE8NygimBJ2zPXv2rJDgMwCSM6AU8hoaF6N3qKKHJaDJy6975vP97wsBcUZMUe2G41GtxeXMDEA9mT",
  "key16": "e3sa1jnit8XiX2o6ZEJjgtjeY1BxWN1TzHutyxc3okNwiFoi5rjKaZn8oJHUThbCegao2HNVkrDiA95ZSZapL1R",
  "key17": "3JJBhKbLTcC4yUwh2e3iabcqvYT6eTgugKjrL1vzk6d1iNdcox6N6KbpsDXmDi8gacXJWE168QuMfoQncENQWhcD",
  "key18": "Fb6HjL4VVq8M7LhtQNNTWVD6xWRXmJz4ARgAMpyKKxPR6wjRNYUsXKxidANAXyKbofLtR8Ta7BvkCpUQkpxDp52",
  "key19": "13FuZ28UFyZAWz19w7HEZqWPSswYQeKSYA2LTJa2g18jhdhh3az5PCX9QfSioztALB4UwAnHdpEFou3dDaFqTvC",
  "key20": "HpbLYotBaDHPFdmByqgf1fbvjdWRaX6bzy5s232iKH5wATMDyYpRTMNCL9FwNoZaHAJAzNG5HaWzEKhb43TeET4",
  "key21": "xghNcuCk2HffMjYG49KMr7EcR6yugoMJV2y4HDuh7ChZFakC1qcMbeWxdAzxeMpj7p5SPdRx3X8n1rhV1CEouoz",
  "key22": "2kQhWWYhNudzfAPnSNrinLRe7CKCYwP38dqiZJ4ebGQV8bFwxFMdPTanrNrN6zzk1z1ZqkCqFz8Z5QuNbUQ9LCFv",
  "key23": "3T4oPDM9tFhv8HVjp45397BFGfrHRARKf1Tq2wKSAHToiC1iG2yddbkKLP4tURTm4E74Wfy6QHFvpqRMYFtmdkdL",
  "key24": "2Xqw14WK6Vif6ocCsQZgbijfz2Ymja93ip37Q19F5HLHYT4d5fFeXecrwJR6mCzzCZHqqQCiPwLHgqMJSdPiXYnq",
  "key25": "4Fq7LoK2Mitsjk3gkd3pu1Ro5CHsKJVeKS8J6cSFnPeZ2NEWmUNMkRFN5MvF6Jbp1EkhXMXpVPTkizR1Fva8dT4w",
  "key26": "3zhHMYzgr7i7Sc6Yz4r4PTicGvUUGyDcAFxGVZE4MH1zpy29KzTuWo8gd1n6WukgYKw4zQaapyrEfGD87GwHqUnD",
  "key27": "5WsUpRgyetfPJPKKFvRY6bQToDJHd8fSmmYn2F2tumjewPCPN5AZYG82DLdpjKZ1Kb2foqHbKXXmAYfAPGMyx7eX",
  "key28": "mSGcGG1TKDsowiiakv29s3gVPWhF5j5oCZs7xHcf8yyZPdoWPpDEeaA7KXNeGAgBz6CYB8P8NdNuHesEqcAiwpf",
  "key29": "4VxRw76JHdc8x5WrYNGSqfP3oiMKvibt7Hq3DwhvYr6d6TBWUEtZCUojU2ZTyJPPUgah2RKM1bvYV5nhvPABFBzZ",
  "key30": "2wvyyxyzS39einXZ3rcd7m1KnT4LYn9ETizUECpJ7UtzLLnUN77VEmYvJqGfA8CkHh1LQ4PwzMhHD8ckMqLuFFYu"
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
