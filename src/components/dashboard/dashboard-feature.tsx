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
    "3wQabogwodP8nRetEpiSAvgm4dYHb79ZE3Qctmu54ijxnrLaTom2GgS6pCN2icTS5K8zMjnJ8R1SHYCHQGAtVJy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aC2bCseLT5u93z3mPNbyoEQjqABf8jdNsNtkRLMigJjxNKBUFcVjrGa2kCEPGug9XbudF84PkmmqLp5jCb1Lwjs",
  "key1": "3uxfaBPaHzzgHX3YPb6vfvDeZuHDmSsougYZ8vBpdieL6AARLyqAWbMJ8Cw46ph8ZPf2n2jEpQCyRWBoAdVQUL8i",
  "key2": "3sPuG7SsLh6pmXawdoHGUsz4bJqSnHRuHX9Av4HqzaLrrfVDpgagy9SWqsHs4RSPBpBxqdRcw74LNjQQmdWKZpfx",
  "key3": "2BritUjSJrvYa81wTyuAbHS1sWyinE6gFxSbdqsffVPVqMaZmLhukZjkLRd4zQsx7ptPLoK5EGpUwqP5wNWxQ2FD",
  "key4": "4zTCNwUxJ3Aqvb3H6fgW5UngPpPkn2hSU7uHBoMTHcVDcER6AezJ4p8eoiL1HtCjdrJWSmfLimfumpo783z7ihkG",
  "key5": "2Z4gZxTuJfQtsExE3QuF58RVJie5YQdcmb1pzMk5btxUvM7pgDKoX39G1f3kvrMzxgi6Abceh5EpENK8S2r5RPXK",
  "key6": "31fLtWh4NtHYXjrUiCV8wcHTuLdDoa9xiVwuQCsRMt3Z2fayPYsHCiY9ZQS32Sbs1Du4haTM4mE15yNy2cJgS5qq",
  "key7": "26Z5As9upBBamKKH4URUbBPLsyVTeKuaheYG12Eij5VPK7MNeUQN9wQrsjdZgHwNv1yy3jcLgRhTSdReELw6uso7",
  "key8": "J7VH8kw7kK4ZvKCZ5t6Z1K7281bVnf1d5f6cddMCmvqctiEy7AeuDJdBDoVSuSZ2i7uzSS3oDoAprrzKyWFwd6q",
  "key9": "TnsxCJwonhBWQPAUFD9HVPGq5CvBpFG4E4oK1gS2grmEZP9vCrFRPrm41WTmxymEZZayB18XLatyobgXfwNXoX2",
  "key10": "42ngn88Vye4veUV88AtvAJNbCX67JCFEw2Z3DzF6KyC6C488HgZsXWLReSEjjXhFhSPF78t41PLhCzWG4TEps97X",
  "key11": "5EHj1KWfw9nBoL3v2F9Eq1rfXyBXH9zSawFEwJVAWeWnWQxxb7Fp9BrgB8D7T5gvuwcAuZdKLbiWh53DdJcQ4zg2",
  "key12": "5sCYKLjaPHSYR9j5c81aXsu2Kzr3Urt7Ssdpvs3Re2s3TKV2RQVFQPbgBLzc38GAGX2grDazHn92vogiD2exTi6m",
  "key13": "3YDURx4VTbwKjwZfn3RPMsdfQieMqG4qRx3WoRfDFBEdabCpo1dPfxM2Tx1B2ukfemp172B1kPJBH9E11FWcViFh",
  "key14": "5tdD5Pc7D1f67mjgau3rDV6tsLVp1t4RMxFbp6QbzNHE1XsWFKc8QgDwRpETqytfrJXFeGtTta1y6j7fLLDCFQJR",
  "key15": "2eFKKEGsidobuERFUpt3QcpLHJkBdeiiHqX2CKUcbAk1wc8tNVy3oobhKjV9oHqjTTJMoCmt6PUDQtCHxRR8uXmr",
  "key16": "LiuyhJymk175E2f43qjNsdHKyPfRVBceSvVnHwzzodLw89MnLV2AWYnL72Tvq6nBUQYPfjYWJYkBBwR7rcFAYMD",
  "key17": "41M88vcW3ibS5k2SwZ9tKAxqfsJuRfesqeSkajjKLMXGhB5w7vdg9tUcTghbCKgXTunFvHPGXV3osXQBv94SApy7",
  "key18": "2A1GagqxGF6x5s6pze7PbeYbaLcanPf5MYmGaWxEYQ9K6Y8tjojBTA6in7fZjYGL2cX5fqR478PZRsbvgN2iGMvs",
  "key19": "5j9AeaBQ9Fu63epQezTmDgFufAURkesy3WE5suvGuvDHSLAg6Q3aGdiMFYmmATmMh75THo18EwepwdXjwVmU67ip",
  "key20": "4b6wDLFPg7eCU9dkqabKcD7zcDNezPFVioD5wCKbiy5SAUmDUtY71x7GKMayhkcpjV5LGkD8PtYS7AwpwH3hvkzR",
  "key21": "2gDDExurPrLRYvaKKkTDXeLkoevRHpd7e2PJMFXBnJoHGpNfQKK6gjwTUU94iScy3FjiDF3iGT5WTKLKeqXRT6sq",
  "key22": "5XHnBbY4W3qBsMnK9UFcZQ8agJvpZvDkZvUBjQJBwH4vEKe9ik9wgtHv46XUMGrX3hh8T1LvdfUzbkYJyEmfPH3U",
  "key23": "XYee7FTNN3cZ2Bb3dUJqi6pWYotfoCg6L4ib8RDXZwSXDtR2XsPHkRnQrkLX4oxUewc3afhBD7hFiAf1TjbMr2q",
  "key24": "RTR1GQLZcyvbFfEzDExGpA1h1SYPnN96oduW2cdFyreDhnJdYXztyH86KGT4h6vZ5oztKTH83GfM9xgAodLCgFc",
  "key25": "2sT3WTFATRvmd2yVkvMbNNscqfoNd3DTRvP2atdS5qqWMtSesVx4aWECDWHaAzAmRR1uP7MHqtpnad2ZTof1VowW",
  "key26": "2V7pkqnuM8Hh2rwky3qApx1MwALYvbivyzAL3ppZLgcrJmPUCdcDLAuoj3Q6Fibd2FyxawXyWddDooxsX4voMhMc",
  "key27": "PUZXbpF7kwjSkbdb7Q1BCMoAQhGXD7eyEECUc6sYj5Gwpx85Lz8BitRbrFJszM5z7pkWq9P7TB9fMdq5Y9kz5Z1",
  "key28": "555gta53SakrqvJ85AefkFQKghKSCicJUSgmkBNbP5RhQPDUkNgir4zgTHmJrNkN6MWZgBTbrWSRz7NNDRBjg8sq"
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
