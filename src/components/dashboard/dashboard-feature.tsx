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
    "5H3E9pSzzfU2wyQoQoR6tRjWMLJch7FBBD44YqTNsyWwPwTfzZ3Ek1R7iPw83gs7RLBF7RBbbdgXqz6KaY5nzdKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRfSMFMcubTwneuFAtAJF7rKdphSNSKP3V529rLbqPSzHxqxiePxKmL5A34p4up9fAdBJG7DQ6QMdSiCL1ngSvu",
  "key1": "53v95MhLE4zEbr3CuW1QAvjaUaujdWSbhD5MgqNgFf9RfRrjfZ24StYusw5Ls4vhdrDsAhumZWLtBQKyHZrzj3mG",
  "key2": "38iDBWXaySaaYREs1bAr6CaWipLqHPK3siRwbBw35yg45KYv8W2fJQpuaDb5HHpjhLd4f2oAL3hodhhTj2ogMPiN",
  "key3": "4CAq3a5S1yMtb7SyUXSoAbVk36Mx3NyFKLMu5RrbmDaE6u6mMJJFBF8htEyAtmge7WGYkuooepyCXSD9owaqoJVQ",
  "key4": "3LaaYRnk3YXe5CmYWdawNXkg7hryW1Dd6CGTEdNjSyQxzmV7DZs4pbqeV3mbwxdov7jzHXvzxWP3ofgZXHwjHfEj",
  "key5": "2a7XoR9ymtfn8bcwPFajHVpT7rw88uym2B6XS8rQYmnnjEj6coVPanVvS8HzAUxfdAwyYKPh95NLC23hKMPcMHaB",
  "key6": "2rkJuHfgWnGokCvzx4ZUD7M3yv1eCvvXYaRm69TPiNiBsyWgyjupCdo1fVDM94egiDXJuLgnzt3AqGzLGie5Eiem",
  "key7": "2sPrFvgt71xdaZXv7M6ZRuEFE4sskWCP9H8DSV3cFPgNTbAyRHx1xL74rvN8a5e9VWAyiRvk1fnBmvCmYtEpNudg",
  "key8": "4BnECGW9b5d87BJzydECtr5vcx2kve8zHJatq1Lymb48TeC7m9vDc83tYytcw955S9C6KBdCiicF5d9mUVgVDEj4",
  "key9": "4u8TY87djjxcxaysDQt5hN2n7NfH8DPW8De6zHUvur3STtgDcsvH3diMM3d3CtJ6x4xnwKh4vYuhEMrnJpc3ybbY",
  "key10": "D4nrTZytg5KMHH2fSN2apDF1bKxy5tN8dLugnHVgKp1Q1JkragUuWSH5rsBUUrtTHe54kS7gRZQQ1NuxyCzQ3ui",
  "key11": "3ATXxQhmfHmPNPknXkyxJLPrsKosJQgySvTBNvJQ2ABWgTZtgjEehw1ZsXKLsFwz4mDwTEgTfWku8psNhKHL5U9k",
  "key12": "5FveEdPWEmtN5pmpv16Ks9HpHzhsD48h7SU3mrnr5QMzqCEbwdNyPupdLTFsgAjQNQR1rQfmoSBhRd6qnEqZETBP",
  "key13": "5uq8EUMqofTVgsxydZ6ZV3VLabvfXUE3KiXdLBZRj2uzy8MUewijvGzoqRFNp5shaGstQrkkGUw5tzvsRRFfK3dD",
  "key14": "2Mm88eGsRrz5wQm5kAGpySHwHNjWjqJPynz4WiP7KUoJG4E91DyGeEF1zPfuSjodaTLTc2CqYBTGEvaM4SGVX3wa",
  "key15": "4sdQ6NpZcyZp1vnCe9QobTREb9nJTSBzPbPALNTTbtRMshuyJf1f1ytH84JM87uBdkiDz5XAxxP5bjqfMRA3M4Hd",
  "key16": "5Sc7Vb3icHrBap6AbQ9SRFizSCgwAV6KeV9AcyH7m3hytd5F271HeDiiWsNZiE3yG7w41qG7gv6aDuuYm2uFZfvA",
  "key17": "5eukD8tjPjfsx1p2z169n8jSJXv9uhH32ENjTSWzjNkgGN75YKXcPvazi4yjuy78GrLjdJzEg2xUEnbtaR2fxaBc",
  "key18": "4WC8MVF57RfmSm1pQaSDJQ1fMJaPiPcyMoym8bWV449uta1UJtKgXD62T8Np6raiKjKBPL5nQptCBVYWyja4nt8q",
  "key19": "4M6KpnjDBGpFc9Tc78F8PjmjtKqjD5GKKGTLyoqCgo3dqxQ18n36LZhXc5TBYrhCcLda5X5Z9uj5NRb4ATxpUn4b",
  "key20": "5napxqtb4yvJFs62DFWgrRhLYuqAiEjYeopVfx9mFTC9YemEjR1wCMKJfMLDyk4L4LmX2YGaKdLniCUtgxRUExgP",
  "key21": "3xsevDkwLLveR8bvegiigwKJWaVgUBkLRDpHKZCmU7fy1FvukfA3yegE4AzK9MAEns3EAQuJ2Gk3w3dXeBdenzjj",
  "key22": "3iMYF8jpLQ6W7bwZethguHKY6jbvHib5kADGLUdeug7AFZWp2zudzhpstxFceQFFeuDT8PYEPfSaS7ZoG6HHJp68",
  "key23": "2hJsrQQsAxtSLU31UuJ2rDZB2cqMGNjZyyTzgBexBy8u5qJq62QP9qHAEEGe3jo3dMqPcLiyvGb34Lgpz93wMijr",
  "key24": "4r26CabsoKQASdizCdXqJ4TUH4qH5355Vd9DcLynLtZ3rBTb6yUADBcR87DTocJF9qMs2p5QUKbe4nbVQ4wND6h3",
  "key25": "WjpA1QxABL9RCwt5PkocdjtUWqRFAzhQZALZvDfF4rNg4wDhxreNX4tojd2v9kPeVL2WH4ENtaF3PhAynt9gVfy",
  "key26": "5WK4RVQz2yMjASJdLoub8p2gxj1sABrPiRCCKDCng7xNuZHaL8ESMG69yEQn8dbPBctkSma2KLayPxY9WiGCSAxE",
  "key27": "27RQfVKwVrwMCS2MfhAGXENda9TSKyka5jGVDCcGK6J2Nf8QRTQrCNPDirxW4RsapW4mqGs1LUivj862AfEpyQ5Y"
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
