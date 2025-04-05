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
    "v1CxeVtcpzMKS2qu4YNfCwGyqFqXbYa5pFSoE9Hr5cPxETePjEfWPWW9QLV9kA6hBPC2FwZ7HaqqQQHRqB3zF5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7h92xSAdQKiw31DmzSf8UQKyPoXgYEY2vf2YrfHrUXK711n3LXmt8ABBEfJVmBDCYC7NVvGe3XCZtQxYJGmPoq",
  "key1": "3erTqb4pWmP7g3GijkfXpVjsB89x9KnTagKXAfib32VgNuR7qHBrGFLXbMDYPeNmJdtdcURKwhivWnYDHqko3ioF",
  "key2": "41S9AbqjvooP9fu7QS9djfGntxfkzrVfEfSeDpua3F29thjqiDD24XNrzW1bmPCngE4Bp4k59vxb4XZfrmRBQuod",
  "key3": "SbFuf77Z2TyKRYWxmf3ptLAC1mx7xRMsVGCHZ3MiiF3kUCeuiaKMEH1aEDuPZhFSYpdXN1X449oi1nMYMKGrARA",
  "key4": "2ej67vbtJ4FKrNqujpvwe65kMR2UqfL8jgS5TFtsazrTy4rQCMij79hnvzhTjjsLunxNB6gFiQ1MpaS83oDTHGUf",
  "key5": "2CnLUJNdjHJvW2WWMdqFVwcz9VaUY6BZZqM6vTs1XziQhkLyZN9zy3cfzcarKes5oCn92ZAkSCyUqJEjbLHNVAUc",
  "key6": "4cJkFgC5X5j1nJ9zBW418bT2PJTVcUeBuR3s58RzCCosq93KKZFqE2F3qfRRmoUuQkcLLkiVQ74bJRsXY2ZQyKrb",
  "key7": "2XaP7SovTcQDyk1CfrmZcMhToevKs6fJeNwdKengTp889xr9iTaqDPdovGuLCoGXqnyusuro11Yy6n9fryZaQJe4",
  "key8": "4dFdHmbiiye3tH4zqRprfjUZ3RKAPSbWn8pBCz9ctbDYhi3SdKRfZwT52zhAZzzykBP4XfEzYjz8zTCZRYHSV55R",
  "key9": "3xkDKCGh7FwZQMn7iadQWmhqxSUmrjsanZpW7huivdGm31CMky7JYvHLKCvQobPbR7QmhdNuDgR98PuZcxjUKjVh",
  "key10": "47vYSPoQQa3AfrKwvWYmwNNg4Wv3BxFPpMeyiJske4dKzpqhYxRUxGniYbH4uoqfewgii32HY1ac15QY18YdWwJx",
  "key11": "4BbbHWVrT5VSomZPF5VpoVJ5YsH1L9BESWwK9uVAeVjAWxsoPvytEGcv77iNHrWyP3UcHHXAxEwqcyqCsLc1ybrE",
  "key12": "whpJyyZycW1riPsgwGaQ8VNAsnsFhxdCsDP2MFNcEv9n9CHYsHMiL7razEaaDZWkvYAqn9pNGaZLxmnZyQwp4sP",
  "key13": "Ro19Z2onGxtX3AH8DRuuMgmkUFxLL1Nx2RDHaD5y9AktQWAejtCJFR7PsDoFi79UQkCYtrSmJ4PzbVmaUczLoUp",
  "key14": "5UuxF2eu4rzqPw1kAVeCqUUGYy63rZEQ79xMu6gT7F1fmWMMaBCEcn8Gqc9KSbvd8zuiLQF5ooQQhk9n5HqbXXZX",
  "key15": "5RHWePiQe5p4GDY6buuztdUrHD5JaGFvM3NaoFGZSiXwU5q1feZzASqqyuFz4mkgS2kJaJ6UjWDtAWr9LmNAjmtJ",
  "key16": "4tvBon75xfgUDTLGFjY7CRviqkjRsiGuznVRHHWAm3zUwLpvefFGWWo1mxn1PmVx5ywADZF8X2Er7bWpbV3pwH2p",
  "key17": "4kx8o9NnhBcmdkbK9XezxqAdJ1RBHBxgitea1sUaGvNCpnmf8r7aTtVqpo5NarZWN37rAFdjtsUgtzBbtsoSanjm",
  "key18": "4GrV5UxMvASgRzkUT3yUJPYzqYb8YJX26o9Lj8xTZJfRYwgjgX93Fj2EbQWkoE9yWPztHH7JCiQw3ij4b6unywQo",
  "key19": "2vHoJ5uh78KU9QNnRLYUgLbHkFJYBkdE21yZpwG7S8n2XsXfBA5YUrdoTwYt9Mq4MnLBTT7WhsqDeaNEkyTU9fCJ",
  "key20": "5TY9Z9F1FJmAgyetkkF5KPB736tbjpKc2GRqpGBqQVe3sBKhWQ4tmp1vC8NtB2yTfKyULH6GaKmzRAjQ1bKQ3E7z",
  "key21": "2bGqyHJN4DRxHqgp48Sx72oRMrsDtzJNsiwb8N91yYT3kotsUePQ4Sdv6ZuDWmwTseeZ5eAZ4fkavPwL2e4xqBcm",
  "key22": "JiRNNU6AxRsrnaVJ1Qk2tyatVKMwLemL6BJVLZEBzUyM759PQLKb3PuNdxWnabrXJM14cG8wDimC4UyYiYhaxjj",
  "key23": "2XR7JqQ8kikNKyga2KeqxXRzHTwoDNfryhH4g3bjb5onUvCwj1NDYDS3mo9kscVbUVQJ9CC2QZG2X42gS7DayuEp",
  "key24": "2yuf4T2ANsKQ1vxEKJ9o6APh2sKJJM8KKUczSf7v1eH1JnUSZ1enwUGXC1f3g2ZUaVvV8eAwwDbotJbi2jkMPhpz",
  "key25": "46cwrNGxByk44396N4UkjzqCe3dVj4bHS7XZEACgwMEXftqNNXNdCfEd6rCe6FyPyiEcEtKU4xSsRAaTr3YBY8gb",
  "key26": "2XUhMuGbKwxf7eqg3aWyjDJ8Mfg9naj6PtFL5epapwPstTBULRmos5TbCu7oTA4rTv9wwWJaV7zkb3kieSjWS3Pe",
  "key27": "5g6BCHaefpgys3mtEhD2yDfa4KSBdEE1WXGadvz2VEHGRFGmwyVnT2WFbnZ2wweujfpuUhhwEyQoHfbiYmNUKr55",
  "key28": "4RNx2Z4LXZYhPkMN87tZNgaqnkykdCeYaAiDbanWgaTw3zUUwffb2pww4bPEcxYQZxPzVCC1Y2ioXXAisy1yL6Cz",
  "key29": "2vYH42sG2xreD9HsKgsTd1GuHtbW6sVDfKua5F6yaEbmVMethc1SfWDLHKCELSjdv8afVfq9uCaYqsB3WMT3DxN7",
  "key30": "5QfgA7W8UduwPESRR3BkBLNPV8ajGZ5MfFaMxvtU5FqRawL7pnyHAAUJ3vJniC3H2RzgjR5E7n7QRkwuAynFoA1u",
  "key31": "4u5ersephfnBWCG9RP7c837L6FALWVbDLo8XF85arruTRmadWaiLWWNFkHhHbZSgMDRrdB83C7ZfBSULCsYrhSDu",
  "key32": "2WDBmGb9FJ8pZgf4YPDvJ2NfVHbN7zzRFdcnMwdYN5mUFDfxrUBH5Vv1ZPAV43siPt6fMHQ1HGCG34yQJSCFQnbU",
  "key33": "61dAk14CmzavxevJ7x99AhPys4GJqbZz8JDAcPCZD5d9uZmN2WCAuqh7s9CbQzxZgtFZJA9RG7qeN5mHfGKdkMmS",
  "key34": "2nbaSW8g9rriGib2rE6LVy2RcxUzT7nQGLyf3Mrp9sxSygS6CUhfS1PvmkeWJadWU7cittyP5m6mxfTj7mby2AmP"
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
