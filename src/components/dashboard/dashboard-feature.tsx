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
    "1qo98wr2miZ5qQouKsUktRCWc8N3Gb954xXTtZwtdbjJAuyidcBpwj8J4awpSZgzWXN2LuLDqQf2mUnnArTaH9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bnWUfhJUNMsVGXvVmyzbGL5oUw5yP7cbdUFtFNADZMeNYhXaYrZ9odZroBPcuqF8T8oCe8emqgRPZMh3zDvdtbw",
  "key1": "5NMRkr7fddAGBue98LqqpWDpUuUcrpk9KfZnxyUTkDyfpvcBQ5yt9ECsvRuGoX3817xuesSEQwcQVNzJWgdfcQrH",
  "key2": "BTcq6Y9yDCaNKNvVssiQ6HCoCkgYTZcdFWzd7TJGHi719kFXVYopk2kFzdiGXt2u5mxsAoq9hWRSZYJRZBjiT7i",
  "key3": "hH9MUkG3F1emYxe7i6qEbKVpyp45YKyvfK21Jwfig4WKxNy5tee5gEmKmnN8e631hvxwTNJKh5xvs72VwEXh9Tb",
  "key4": "3HSpncoyiJCcxbY412JXTM2fy2REtAStk3EhtWsh7vcJhxAJad2bYY7vnTYjErJssBmPmBQbPWTksECf3oQ7bn1N",
  "key5": "2ykE9eziGR342yqjZEXp9xv8AFMBMnGMDBZcufEsYEy22wHAjfUb2PHkWwSKcJgSnZw2mxf8aeNsAXfgzquUAcN8",
  "key6": "3xsADhY87v2pZwqcQ9EF5rEUP1QnitcSF1qQz26iYdjaVazGeNFC7yWoSxRZvN4iDyPNj1TBiPt7xeNfYRrYnBzr",
  "key7": "456KAAXqnmKM6kEaNw4CHv8HCwLHVc7RKJz5QNrSz6CCAZjSMTnFrSpqEF8S72DXUnKsLxhsE5kyMrVxuiwDJuS5",
  "key8": "5LkGf5XVEm7NuE74FNaAfvMCVeynXnQsNM5ex1KPBnsqCSBzTXaiJqRq84SBL4CQpnCnQxrxHKbMmgB3F3AHcQN3",
  "key9": "2AdKNuHgsAgz3sH1abZWB3PumTj4CX22ZyLDyBriVrRL97yfSpmdTTUnGqEekrUSVntYD9aCESD8Bq5YfMxxEYJp",
  "key10": "5vf8GZ62ozND3iaDNkr6D4itEQjKt6JeEJBfA191LeDYaDQMUZMrnf7NkijgGavh65shEwBmgTu3z1hrca7RGfZN",
  "key11": "4Sz69nFc7b8kZsGdT66ZVRmKTRFLEHPfBWyTVSjDtT3VBY9uf1Sq4Yhsgq4yNExjbAxemZ2MGpaVwLXGTn2H4PC1",
  "key12": "3aip74oRAEDb4uFqoekwyJm34AbHvGZkQ8KEbP3ZqZoHeQBzACMuyYsReE1jig5JRJN2H4ek1TS5oSCGnnmDJha1",
  "key13": "28EoAbQZv8dXpkKberm5dG7Ca7FNPRienJduTWxszgFNqGrK1tY8RfkjB7b99r5rLuKWeVJgnLbvcThJP173oBAd",
  "key14": "Umu9hfAU8jY6vmNE6yXGBCuPHWHrCRCQTRvAqyfV6ab9cD8wcfHunUbhHVANF4aWG72rw8pmUdmayWAzsSDFH3Z",
  "key15": "3SRZnPMGLGNxfT6Aziu4yD1FJH3eq7wZzrTdKEBAG7VVJ7hGmPwodVUVGU9e6xvQpf37hT6MRYx7F1P4ZMo26a4m",
  "key16": "5kNcB6B6bnuZpA5f4ZkxkVyAfuiv2CBPptL5FEnpYeobUjhh9e9HUdZxEE2qzqzykLdgP7RFWaUsRkJ4m558sQwd",
  "key17": "4kmNQvYukxCQm9Y2NvvUNa2MT7LBipTZkuT7uCH73f8bnnHMBhVdXML7Wiqee5uKFvbFGh6e9oaUF41qqUvtaP7s",
  "key18": "5djr67cmkoMG9QuiFA1CLwF1QDDv5pvDCYSUfqySMwF7nEWZyXjbKKCwRwZ7azj1DbLPFF1QVHE61GA4c6Keo6Mb",
  "key19": "5vhf93AdWPBbGWLZsQpQfrpz6pc592xWUWKNiik7DqKf3PB5DrU2Bgvqr2tzprp4CdKH9VmLY3PxkooXhdZqhwFn",
  "key20": "4PZEDPazrAW1aVF1caYiyEKkR2vgzfHJToPTwvBam5LKBJJ4dLGKnkRNsUJot8ZW9r3mLeLCsQcszGP3BR4r8i4U",
  "key21": "Eis2GCMsybf3rWAihpTPn3m6ZveGRANmMqFmBpbv1qL2J7G17eHtnnEjGGGPSvVae9ebnhpEpCNRDqQ5cybq4Cd",
  "key22": "3hv1VKeAysQfuhzsbpPfsfPqqTv874TxFGS4AicjYSA4C4HHNnqxsyBRAHJNCwUTSHeZD4oSo8Ce95Lsa4vEPH8r",
  "key23": "AG7Nm1SqXNK63ZED3fFBHZ2ooyFhZDq6UxKWs4SibZJxf6KT2mYvca7LVNqaUAnWn181kAkFxNasrozNBQcKgkP",
  "key24": "4rz1g8MgHYrN4967Z67SDZV8QB4wa9rdCSHrkR8TAFsGwxysTrZrR7CnyCdN9VJu18GPJzCY5Pj7KworfPut3UU8",
  "key25": "3ZuQH6vEoaWaxmtCcNw11hoepY14uyZJXCmiDi1idq4EHPRctpG2SedU7F83vBoZSPRESVfeSs2VpR3Si1GHR5Cb",
  "key26": "2ZmP9xGkmJNPDEnTrCQpoxujw1D1RobxbcVJ3LFHSuQf2roEbCcEDzP7VpeQzBCYWxQ4DDgystM4PnMWxXf5GYmd",
  "key27": "4NkhdJN3ZSoc8fV7GvKnxJ3vEmnR56YL3f2EuskQudUbubVboSUdKK2SLpR2KG9fkadPcYbb1Ai4xBeoDvp8PZQo",
  "key28": "4Td2wzdGSQkR7Xx3GrbL5D3Ka6zaCuHYyFjTiQe4LSkZrUx6aQj4Act1YNUPPZXdKqXrQY1wLnNsx8rvyWaorCMe",
  "key29": "2Z9qrbd7JVHtuDRQJZ1ozXKuBBFh4GhmwYcAstttVFSSx19H5gztEuFJt3N1WCRUVWBmV1CibqyKs78cdf7gKaqr",
  "key30": "4CW2qjiUr6UtEJTAST3cxZU4tgV23yy6Ss9SnvBm9DcZWreVYJ9hERztEVHStqJ2iGJkDJgX1KLqkBTHkS7jL1r6",
  "key31": "2xmLJmkYyCh5wRTWeGJnZoE4dwXxWyF9RjXz3PWgSWoif1VMvWnpoPgigNiFWgLRN9whWsLKN6RSSMfdffLNXMon",
  "key32": "DiJKF14ZwqnjqYCtduJbaxsBqQszh6ofcHsCKsFMdaQASdFYgh5sbaxdzSQ3RkmKA8Mx5LhngRiDqv2SvChdS9M",
  "key33": "54YAz3NMKu2aix4t6ZixNudREPMmjUrjycyqk7L9bkMWXLBosfaj6kn5yjZWGFqAy5kBy3iC2roTshohSXmiLmqN",
  "key34": "U5G14ptM5fQ3gsRHKbkZWQj2mUEpq6HZcx7YzEN1e5hBPGU8HL2pVY99XurLyFStjLPV8JynZB6b5Z552NTA1VY",
  "key35": "3ucjhETjNSvWKFTSR866y7ENuJhFDwEvqGXKijeVF7CfSi6XtPf5naLdrpvEfp4Q4tBBKMQPUT14nFJcTSqt6wFh",
  "key36": "58RaWfC61bECYgKfBcKiahSRcBBZoz53TGUrXNmqUscZycAEsCbQ8mNuSxaVGmnKbBhWkYb5AC3P5DvN7wbEuLKk",
  "key37": "3Z6oRQjXVAr87mEkBtGnWBjEGX9FtAGvzfQqWFFrYrtbcdfRQRR6eqJdxGm74Eajvxay4NkSoCCU3phB3LR6T1Z6",
  "key38": "3DUU41E9iNBWbTxwt7Xka6KhHGB4FJfhCXj76z54VgnEDFCY9wWRowmh4Eurw8CmVjpbePtwytdq2ySN5ZWcwAyM",
  "key39": "36HYr5B3mNSQYj9SP38PMuMbDQX2wmqEkEYhoyDBxVQbBirDoarUhnqnZARxQqe3HW2VhSeCzPSx85BYPm9okBCp",
  "key40": "36Sq9X5MPQRgNiB5SVCPgQL1RRvVKMbPW6NjZRCH82mTwRG1Kn6ncvhd8kQGZtnnUrckLr2Xrhb9ZuxKjgGdMhH1",
  "key41": "3JRFic4vA9tVSnEsrVKJ9BuBPvswRgLHZuf7A3wxGF8z7dP1hiszb1Kpq8FrCTMk7U49SiFY1KMprobe41mZv7vP"
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
