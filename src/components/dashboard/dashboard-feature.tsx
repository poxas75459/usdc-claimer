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
    "5YgbfcRgZUuVNsLcRdBXdfojmuQnm9peiQxs3UkVBC4JijnB6TQRpeejd6wKqNdf6zz2VmRP64HAccWqVHRucYq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367BLCrrvwm1923boh5VnopuiUx6cLNeYozDGKyfptKqs2akw2NebDy29mAfXawbJnPKtLTeYtoVMiXgQvhj2GyD",
  "key1": "3nrc2WmibxmHiTritcq2rx3y43nMkWgHRvCbYA2yBrYKPgMgWPNbyGNxg9w54b3sHP7Q5uApFgNN3GKTVq5MQ71",
  "key2": "2aSDYQDNybjf8GYSyVtN2A6xLFSD2N8FGKnaEhz3UX2LNhHCvXSG9D8nrofamEWyZyFB1cqPXZAbCTT8ECDowm8U",
  "key3": "53ux2J2RAEaDBpZmSkST4qo5ExmhgEyQogxsLFGoUtJtcGZ42MDPR643APL7e7oREzHdTCocWPsHDWBp4Su3Rkux",
  "key4": "4ov1LcToPhndDXQw11Kjxi49Gx5oR8eVQB8MZr6JJQ7QmtGysHCATDouKYYt38FYCzgZ9AqniBD6w73MLM3Jy18x",
  "key5": "3f1xu8KmT32yuF8cGY96w8qaVBrhs9qPDfHQ9gRhY9uNwpYAACvPKegSauEyM7JxYsVL5ip2RB44VwVqF4fqAWp7",
  "key6": "4UA8G5CEeE7hc1BUKae9K3KGvSfpEcugbbQWfXTkyAQen62iLqtwbozWPzfTM118eupG7SpCcbf4Zigt4JgbnUyR",
  "key7": "2sFTE1SjdNnwYZFo6BpmEELfuYrNWKfVRTBUtwMBLuPdvL7SgbxSzfaJE2ckWnztZTGPnx11EQZaQp4528Wkekcr",
  "key8": "5MXHR3mZeoAbdZdNpKWVFLpszSW6HxZQcEErpJHZovNsvho45UqQBxMVxPsTbWBntiHa1sM7ndiDosj7TkKtKyGA",
  "key9": "42dcRtWtxtrT54FBtB2VJLcTR4Ve7yF6N8LQef5c22TFzY29zBFW1bbjvaKcchbSBYz8cD95LrLTVSzjD5nrYJDN",
  "key10": "3uWDD8ff4n2Lwfj6PoUEVgdaiNk5xTrKDn2q5eCBMGTm9CrkVxkcgKBTmwjQfPkWTbaPJSo4rSqtyPDdzm9Cxbds",
  "key11": "4W5QgJuQ2PfqL5yZS3YbCv567rKmF2ccDXYbCAQa31h7QYNAHRLMpS4PFqt3F2gU58kdBTKUe5rrjLTHtHAEnyn7",
  "key12": "V52hZSqEEHP9tfFtxczVtSaC9Lei2EQmmL1cJxQD4oTGGPUJmnoFnbEPK7sPyuzVeEVmmtDarNe2CaeSs89DweW",
  "key13": "4VcTyLMzug3tMSWndSzStTh4zDiF1eRFJhvZyPDjTUoYP27HCgiZenpuVPZ7mrgnfUiJSaAYXewLcJJA6GMSyh8z",
  "key14": "5yTbJqgwie4F5RMGErfd7wnvDZxNEH3YkXhg3kAeJFBjuCpmP15SfSTksQHcZEV8zC2VmBytemR4Qrf9wbVhYsT",
  "key15": "3xceT6QhfVSaNYr2ACZfvcBDWjpD634zg7sH75ZacYe9FSMaXXiAMCXdkPa6pJvjrJ7fiJjCsLdiHJSCJoJhaV6v",
  "key16": "GpDwgfR1NShe1LJFCo8ZGDyQYmof7CZo3Xv335rVJhYCeFYHmsnheHfpr9WyaEtMJQmwGtr3rntcUT6H9yviZBn",
  "key17": "53yBe9kgm7yZkGXQ1cuXF4XFJAF1Boa9nDC7HYKeA8eCwA5H1Rnji7RRaijBtDPyiNRBy4Q85aDpX4Q9r8sy1pz1",
  "key18": "3f19PJXx3yMZ65vWEp1oxbopsZyhAHDGvee85PhHpWu1bzMnRn7wrCWVj4f1jh9cJ9h66XdYXDandh4yZVix3rrj",
  "key19": "7L92h5YddAqKZrpL7jqTvwx3VZgybuqLGq1TeytzTGCqqeDSjRZUhyEazAuyaK3xGtr1Cgep1u1rzNsNZGjFzgd",
  "key20": "5PS5ycLoLTWFzguTNuwuXha8B5k68HLn9utedfkpj3YmR5JRRhaRzBtVubiG2hJxKZ3YY8T4KDHKQMuj324fxgKr",
  "key21": "4URAtHkm9FhRj1DK7hKFePA9HDLgLE5fJKofqnTEUUyTT4ANu861zBymSbcr9UULYG27qMCzetoPcy3odubPbmbb",
  "key22": "Crp3qVyzKH1z4zXWks4FfGVVdejXkyAueXn7xpViGuFN4EGCAA3Zx3RfWSbqsZMMgw8n4smwLkEW7Z8unu1JMC7",
  "key23": "631XNreJKFWfP7vVoYsvBracEcEZ4pzxrcGwBMRTUAz34VWSFhsEpD5457EpWQh7X3UmrtYVUjNwjNJqCCGW3uru",
  "key24": "4BJr4Fc6RY6NriDK9d3LSmRGP84r3CKwH4oVy81SKvKpfYpjmmdt13Wcm8YSMCxkhiWwyYseCUdFZrRJU6VPBXkj",
  "key25": "SfYgGjdqX5M9vFTUxVYbPDf7drFn2dGEGfN8FUj6WVNHrgrvbqskVEXWaa3dvzdJgbPm1ScMwgv2nY5Y8yr6Fiz",
  "key26": "2QNQNR8sikWjRWPhZZZCXrMeuEVDLtgWc7R7STAqB5ux3Z3xLdxo6WKuZvewnqFXuZ7Sf17EoP7MQ24t8QbvgVXc",
  "key27": "4HYzzyBg8nx9rgnDeFau5dvZbDRYzde9U5MduEvEtGL1wyM3VZom3DdEivibw41CpsqpkR6vr5WpFN6b2Qgx7pC",
  "key28": "LnvDiKfN89CLmaezcLNPfg8db1GrC4mSUAAeiJc2npMm5gmhnYR7cFF4srJJKCjUGk9ygMmgPfy8XesRE8m71mP",
  "key29": "fUkZ2pwr5TkLYxUT4ysZrFxRrCvCqPa6U4gQNAmFoP7RhKUR2ZkwBkT4nhkC8LGvr7fGNr2wzrKrQoAVLJpowmZ",
  "key30": "WJW4M8x4yJP9AC99goQ3xW54r4Woa2dJ3RoNnxtxoEE132jyvx1owxvi9TVaRbcZyVZrJgsa8izL8gsv3E86QAg",
  "key31": "3qTC7H6xey1jswLoTgo9EFmADY4Gc3ohc4vcTC8BgQuy8pnzX9KyFutLL7vUJ1uUkzsoQAjwpFQpkaLy8iz84bdC",
  "key32": "53EvTivnSjZGoAcrpaAi77LFEDRWRdLFM1xsjQMpcxS6Cqn8zGsZmqZTef18XfnciALuZcerrigGFMUYQtTT3YZd",
  "key33": "5N7QRD76btuUEQbX2VawfRitBKN3TBBfzDJ8ZhK3VXdLMsNh3ruV7RTVD3Tbo5k2ydBCPYGkoxG3dJhDWQhuG6K3",
  "key34": "2h8wg13V5kAdWocEGTX6U3GbPZrVA5iekowLiBBmzSBSnf6ELhiR1ToZk5wTmKq6j5cmfZLegbWrV1tNTj2j94eQ",
  "key35": "5SfnjpPPKjfnKAY4hdnyLrdQZoQ6tBHVCXMiLhRwJFfqdeFwr1Djz4hkp6QTvHJfpPYZBPKsp7ULLGhcrUoLr2kg",
  "key36": "zcrnyjQQpuhhrHhEubg8pUZVjBA4xJibRdA4Tdyg7FMN6pWfmFG7Vh97trFvrqpx4JGLiwB9z6x9yHeCtyuFF6u",
  "key37": "51ZRdgnBDKjPVtRwVDTPUP4eWcXjREVqNQC9pbnyu4Pn4HFPxFMFf25ZijFMZhgoFVooscniSMUy9BSgZvuQt1n6",
  "key38": "2M7iKrRjnGE2CQCCdiBwFLgt2BhRgZFSypxe48gnvkqBHZKLF9u2HgvwydPJYjKimoy6bGVE1G2VUj7ec5m87XkD",
  "key39": "5CynfgQDyAL5obXdQBiR6ew4Ld163k4ggfsNKP8zudgzQjsSjXs73hHp8xGgcTJsimXwohzHjeNup89W8eTa6xzt",
  "key40": "5wxJx7FhkxFsAsTjeB9bC7sd77aidppMx3SngWbN8Yj4JwP49VN6L87y4x6aDjbZY2g3ML4DYfVtGkUC8Dbr6mTi",
  "key41": "5YckJKym3MxR4kyWthD9oMxDN4egn4rV46MACQqqrDDZ2FYHz46pxGCAxZQtdBkDJnnvDjzmGPRWquxBdu4rFgyt",
  "key42": "288sw1A4HytXc83PJhEjxpQCiRmdDvYkdoYKd6Xh68a44j1Xxz4jpGDDWGhzAiswQhcrhm6wQGH7cT3RUJdEnwdw",
  "key43": "44RgHNbidEaD9JD7ZuQUHZPSyJ4U4BMfnQiKujzXtS2VrRY9eVTsZh1e4EzUxm7MiRURsw8cRT3qzaeKTSQVdcwS",
  "key44": "5P1XspnaCxcpEvCWPiX2ui3axr21dkxPXfXxf1nrqr24WfH1PaP4N8i9mv8tsieZjHn6JDc2CJtMGKcrfXrvrCdy",
  "key45": "Sj45RmaJQxhAPaaWCFVkR8V1uqebcmpdpraX9pM6QRjLiqGxjFQnUcxDyncDz9Nkrkkd9qCSQUuGaq8HUjhK53L",
  "key46": "q29dFvFb5EsDMLMtgoWuGovk9nsY4iZCoHNjwbcwjxHMREcYSxbkimWBsox716Y7LQNqzWHYanddwtdmM96rmJk"
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
