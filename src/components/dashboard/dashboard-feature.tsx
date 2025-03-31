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
    "3j6h5heggG9mnnLSFCtbvv1FVdPZvogeSz1Jq9esFjmdHEnQUwyHFq6bd8PcpVr85zr7RGWni98SyvQkZKs8uhjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBcyhEzeBtoZjk5XG7oM3JVpSbjTaaXUpjtA4u7SVoMfz8mVJzhnuUjTteRajEJD3mCQy2dPbnYgk1eZpqp5MP6",
  "key1": "2bBCbfdLZn1YoRGHEhx3sT5YebmcQUMCvSR5HrgtYuiFcJurMYTsibUmwRDGmKgeo7WnwC5do4X9YhLsS8J2k13e",
  "key2": "4uHZBqj1SfuUArRNjqi893BAsuTkPK4svdCjfgLePQdFNvNUp4QM3Xu89DyH4avZbG21c6MGV4Ab3Y1Y5boTdGH6",
  "key3": "561eS3gaddqK26JwQ8vXN8yMb8CUYTVAT5njVDtao5XaFRR2tsBSPBMbevyJuRUKEeazeg5viQeM3oAvWaFsE5TY",
  "key4": "58n6F6UqVuGTab1KcWwHu7kkiwaeGhaV7TJLDWh7YXSzNbphTohpK1cdSRHuNi4wnjchctLkYFQtZnjaMpLd6LJo",
  "key5": "Vx8hiDJpfzsYzmiWyD2sdmow5ar4h8zbcBx634jcuCP57epQdVPMTL8vt2jc88p3i6JXgnTdRRGxoAYzZEz1cf4",
  "key6": "45XcRot9EBYWZcCL9PpjnynJcFP6rpcQ8G8CVSbyfhX3LswT6jLxuL5FTM1daWEok7ncPosBKbmUzdYmkaYfNR46",
  "key7": "4WGkUdy7jvWFJqxxewbhZtMK2uHF3WZpVocAfJ7m5r3eKLsCcnbSBrz9g59dnZ5o4CvAYcLFvHxj7p7jjFCTvQyu",
  "key8": "2YofxTJYx2hC79LyHoVFEy4B8w8Gdw135eqXVoH8BwwZfTE44X913pdmfGi4AwgUDaNRBca7Nj4WrGuofCLmbK84",
  "key9": "p9umoUmBbZNdYc7QnV6fHqW15gGiVM63JffWa8sLYjRWAsmrGdSK2pUvkDUwtLENFWHj9Y5qjaeBMKLzo1HDNgf",
  "key10": "5X4AVcUrmTMo3xCS3vHRb41xo8ZLYUEQ42ezNu84CXWYrVUh7ZePb2ToGLjLVwhNhoZ6Zj2HMmAN1GeaVqH3fjih",
  "key11": "5WM8rjSQqYb7XsukFaSNnkCcA6Jii8tPwDXi4ZfjYCfamLyocX9okd8keyNSWUws1zdnLgZuj4nqftk9dvC6Pkov",
  "key12": "2jypnprbUWq2qmX44StcSc7YXZnE2VCix1YAEf65W5QyTiD7uYqxroNyf7eUifPKhVMpUa9c4WVfwvVCfkj2oB1Q",
  "key13": "fvARLPH6qTRs8EB3hBZjLWbRZVn9T525HYLY2tsNEHSoAemTJkuS4XcVJH4a21JPiZzaq6vkGEKzEg2ArNhqL1c",
  "key14": "4qRH2dSmzK3xA3GkyduYuT4Aq5WL8qG2MNDn9mMnrvTCKLxauVYSd7yJxLSW2pdjSEcpKn8ftej5No9gX6H498ij",
  "key15": "2QukYhvVZuPWACMvTWkSwta718GcnFNaPpZ86MwWw7mWsZScKeiPSkPsYeNfdzVPaytyk4MRDEwALuWxWzZJFMse",
  "key16": "3P2vkfddW3jbJZ9h3AedmCgrLooAz3Mc5HqHMTqjZYp4jrcVPc6Au2TvW4Ts81j98jShXcm9c1CVmjC88JP1FtKm",
  "key17": "MWUgsiUNDqdgd2v1Aq1Ra52AJQVPbw7CpcnzDUak6dZWQjQQZfACiV87haupkYzCyqbmeAwPFvsTkkLLxihQctQ",
  "key18": "3p8dKMk3wN3YFYJDgx4kKS762xYxMPmTiZ3MNVAK1ZXtB6cfcPuiHu5wnkPSnmsPYd8JvbEj3fxoL2Euyss6NNdZ",
  "key19": "2gx9H4FwjP2tnCqRVf51dnDjVsPQhcDatXoASwiozfMBfqX7e2vUm7TQFykes3Co2ddw9BCj9SBR9EeHXrcokkpJ",
  "key20": "3XChok1xfZRRZu8iUfnegCj1PT4TupMn3mmsAftzDWDKnptUGgUamSgbyYnaeKq1obidCKfKZuv3WeRaBerYiKXd",
  "key21": "5mV9Gai6xJgip2edJ23jcxEdYJ25GQCjELqbkuC1nUPKdZ2cLvUJEn8TmsPmesyVT3P1VncC6z68ctXNLT9wxLs2",
  "key22": "5kvLDmC3sDstPD3JXUhTX28mNqK1HPUbDV5hsVkF5Y1tcymSCP5gRXdafpw9vfBrubcSJLVkGgx6YmqnBBsgAV18",
  "key23": "2oBjZvS35pEoeEa2eWo4JfWvp4CU6sCp8NJg4QDWEN7BSU3BSgp6rQJue8DQetxBsxDztm6YfA1DmG5rVqCUK6JJ",
  "key24": "3uha8p44t56Wyg42RVrXP9sJzpuFVgofTZUZ3GfTq4Xh7L6jz8h66ZUEZuoTrkpANv8nqkkYW7LCrSec2Ab62ha8",
  "key25": "4aVib3mWHHZnyPJrVaKFLCNkfXsdqDbrmXPpi4xTgYhNcyt7zmNb2Ls9f9mXGPtb2Yz9BeTLxwSjchjxYBZkfbXM",
  "key26": "5yRsYqhygWzdmWi35HLY5utWyU1hTACevp1N9mvpcfyojhokz9KKkrDMMscNwdSiXCfr5LwbQi23YJ1XEyZDt4LW",
  "key27": "327kcnEaNhJ9AQXWeAnojwbGuPuFzAHudzdMwfMEVyYHeJSXQNoo6525Bq4odBbvDSL8zAXXszg6NAcNPSiDNYD2",
  "key28": "2QCWNod54NdmUAhB8hZaE4BWH2fMQtid9CZCWxUiMf7ZhrBN2zdHa9xQmQYFgRamWLxgwjU8DyGS7iSEM58pzuAj",
  "key29": "2DTK34XwtNZDyjZRCWKzb4hHoFRN84nVYAkRsR9MGDed6d64CS1afbi6m528tWVEXVvDAYwq9ZrWRtNvDLjz9uPA",
  "key30": "3X2e83o1BLJknuw8pj6gYbUerDHjVxtnvBbe1CdEJBfhAq3Ng1EY71qs8nMdHnYJxpsXa2DyHvkg7hNU3QZvQF5m",
  "key31": "2iwaqZLvuAk4DocDEkXKdfTEbZdsYzRynsN1B98bCcVMN6CfQahnTVDHeZT9r6ttvXPAv96YHktDrBJkK1xjFEVb",
  "key32": "3bXLhFuwYq6WvY4BME2sPXu358CipEFSSBF25wuU8dUq3euUjv9hyRAbzZHWC1fUYV2KscAhmnPtGZkozR7j7X7K",
  "key33": "3b4Uwo6hKnscnShPBFkKmmfznGt5XjCqMjrYtrRwsMV9j9GJe9BQGxAr49ooFtmPnPW4tB5TJa4ziK1zoF9wDWB8",
  "key34": "3keZRskoXvneJDJEZ4APEQhPnNpSaDbXLVaBPYe7n7BFytkoNhWka7rHHszAtCrP7YmtVC9asU4Tt1ZUZt1SCLWm",
  "key35": "4DVDgzmtSwck4asGUXfYrdvQPgNgTEPUHFHCR94ApfGdVuKWKQ5mSURR2wB1kaVJxhe6FEHFLJmc2xSNuWK7NwbR",
  "key36": "22QKC3L1T8NhvcY6fQVGGBt5qsRJBHKBaTDV6S2WDM1XpzTCRDWN7po4X9WGgLPNiQc6F4LsxQhaAvEn8PKNqJZy",
  "key37": "5EukTe7qwWTGD1eQxk3UqNvRH76rWTuqvtvVaM5q9KDW79EGUZY9n8fss6nZSNqWpKSvR87JswXi1XdPeNpTGC5G",
  "key38": "3UPbCZjHChupzsJtb2HYMZv8CzyVtxjmRiqw8aDfWgQ46wq6jD1ynrwkgspEHpGGESo7skvp9Jaw8qzxiox4noiS"
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
