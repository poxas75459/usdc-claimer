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
    "65VfYvECDteYZZNEjmXQwJUhnW1DRUi3XAt6oxC8VthFim4S1FX9dWBUKeUD6ipfkzYEfczSekJeLMU9DgVasQbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wo3q7g5n5fojZQS8xarDyLAU4ncZtPeFs69HHKk8oSYVEz2q3uFq76wi5tMuNqmmbNuv8DxhTbYiXmJv7UWwvrV",
  "key1": "2oHs98nfsiJdRMd9bNqvx9He8mFDQQS4y6MaDQjTk1qjMbnw1qPSecb8c4Hafrh6pmwSpuPb9iBa5a8ew797mKdp",
  "key2": "2LPwZ8UXyd3FXqeViZKNSQSfNHyLYq2zwAe2fGn9wyowwrBgYUpZ5ieLHG7MNqeF9JVQtKqcMCwagoe4aNrThVjR",
  "key3": "3PtxFPbmExoMpqHpZhMUayJPgH45CwGsfQBxhznk2dgaaZbgCbvqym5fnd48dkpR5fFRQ2hxxsdQPKXa1FfeCgLB",
  "key4": "2pficYVoSUHCfrwpL9ht3M2V31UgmTKDHg9M3Chaz6XR74CQpuRNQVp4R8NLitxSE89pek4yJ7UFBunVyhpP9hMq",
  "key5": "2XnSPsjjnoAtJspNaYNk9kNq3WmPS1EuFdggm8fTwGeM3r6xG3MFXhg2LGs8Pbie738x2qChLtGi7cM8KFhFNdBV",
  "key6": "3Mf86u7hFDdXmyVNRXc8V77Sjh5R7FnNzGfjuwR9NhpehPdgCUom67u93Dz4Mg4ct6nM63vwVmQTrnkf1xrQaD1g",
  "key7": "uDa4MigaRVy3uG5rptXWwcGzQe74DCcjokjmT8h6bwnTbQXUHyke3StkRWXBwGxLtEEJ5towX1V8rSVSo7PkRNK",
  "key8": "5DKZRYy6ypCSGB2jB42R2DScCtibUfWgKxJFodG28kHEeCLPBZ9AhFiGbzRGLKsNphAVE7Sy2zxvU9dFd6uVMKat",
  "key9": "4EFw2yipq9Rj2DW9PbCoL74n3YZ6FuW1woJx6T8vdE5CMgNPsHUH27CSYFT7ZRK4hvAw4GziCWiwGP7KBcnRsNYX",
  "key10": "3MUjWHB72SV3WrMtBwzxeWJF7nX14tPXJfa9FonDgfBUC5fWBBGDNic1paBYeRg14bNLCSMxwGF8Db3BjoU5EzgR",
  "key11": "nnW2Ljgxn77YWsGc6Z2k56YDB7pM5AS9D1hEuUu383MWZJwk66KWewVkcuA9Yd8NeqicEF2wCBBS44PrGXnQW8s",
  "key12": "evF8W1gyrCKNRPMovHp439wjN1MURPMbQuMjdhXi33hYF6ir5eNNBGCPC53CzUgqMpM3g28FcMQhxgH9vwEKBZM",
  "key13": "3hC8HcTy9iw327zWbobL6F6tesE4vK5kM625VNAG5tx2AnrqoDoUmNq1NQsauBPBN28i3BUDPNCSc8tbpo3S2KJd",
  "key14": "3NxFvVypTVd8NV9zzDBJKWCa8hby8UykKY3Y4HvPqf6GSs86VZVZPFF8or7eG4yasYUXetK8qr4ojkzykZ6wPmRY",
  "key15": "5N7LfBvgYBwMvPh5Z9GWFonKqt3ueLnm7hGowH3ejh4eGtbMEHZtj6uF8iG2kYKm8HrMqCc5DKobJjMNx37Lstrd",
  "key16": "4ZGA1iMC9RwNo5NAfwsUhKX8TXPdGB37V6GHak6KfqgfuHDoPQsb7DB6eHytNxv1Uxm4hT12WLLiUJtn1gPpPdFh",
  "key17": "3Jm3UKWCuwNgYQer3Lii2RApoRavsNYnzg1RYkgjYiE6WpZ4QkjDJi584rJzCJcrTbaKRxSaVZ8FqM7zPpLHW86P",
  "key18": "5AA8cEcHXT5KsqnqdVDqKh2gi8Z9gp1uq5BeertMHVW5yU83KrZyJ895u3aE5TFZsLsg2pxZr5QVdVtxgdH322Nk",
  "key19": "4YJxeEV26JszYA4eqaVxiGYC492CJKhi3UYNLxS3ikfjYqPivt4b2pWYFjVhN1Wkj7tpe6h8zPftKnNopfDdFNkU",
  "key20": "4VT123SJX7QM4Tz69XHgcZaq4G9u3xsgzb5zJXy2NUuh9UA3F245iZBLJBtPoPEV5aaRf47EMxgnxBQmdovMT5eV",
  "key21": "5WVsNGmtC8FvPc2APspVnFX1M2uWQGZVtMmtqC5k2KBaGKYtUABMPWYpBprkvLFEbqrYcGdfaRh42Q5AbPNLfg9Y",
  "key22": "5ww8GUzxUYEapoG2Pwf63eVfdcJtUW9tj3FWrhaKxEJpzSp6eNZWqENg8MjaWnNSYS8GJEpbjo8MuMR9UUasALzk",
  "key23": "5JWMYyqfd5nAZr5JDDSW3VMAwKXYpEBccMdJpkBhZdkPuzPq9ydYEwhMrexQt5xT1LMF9xpfjRDgQ3xNqWgY41wZ",
  "key24": "FP6dsNmw4zS7sYZrqToU5jWdCjKCtiZcAdouDhiFbt13tVbEy3EpMaAJ7ajyXdLLGq75w2SpPgshndbNWxP9Nod",
  "key25": "5B2UqhurZTJQDqTkWKL6aoEMk2pndpScb7N7B42s3gaRMpfiVEGnJaqiojvDJcDU8C6Sf6NfrzsLARCdkovqQtAz",
  "key26": "3sig1Wg7WuGxJi5t7WwkwL8kG1XnomJMtoPhs6p8TyeosHj4FXBzpfEFa7pGby1RkZAzC1J8MhEmVf567EJgrgr8",
  "key27": "3KTQkAae9dvwXChvTLndrc1YSxqWkJJqXi9YRboMokNQ2y2NosNMTuJ1dLSdnoAgZa7eJT8AzvpAN8QzCUu5Efnx",
  "key28": "51ygjMbrp4rXpH7gWcbWXeJaTV6atuAFTKdXwoHErSHuVcQo3xod2DJypa13Q2je3Ld83eUcP1TEsS5wN9Wqmx8q",
  "key29": "2MmjcMyqxQQ77yNvfVmsyZyn4HfeLE7EN83n1xxtURCS6KWhvh9qnApvyzWipiSvr6WERowpKuky3jbuB7WVQynK",
  "key30": "ChUukzxKNmc7HQjfDi2W9LkNQq9KjZoc6eUj5K1asvxTJDFWcLAQAXfotZWfvonXMyk4DqjWA2H34LhphvBorrn"
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
