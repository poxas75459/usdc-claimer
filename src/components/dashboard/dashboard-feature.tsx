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
    "2jA1UGiNhURpinEH6NBB7Pvfe6zmQU3MYVG5dgczB9YmwHfaRcAFMwyUGWdTMq83orR9Jz8r4aXgAAnM9rCyg4GB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmcwdQ5Rf5QGP8TAFtdKzTfis2rubqxQuewNHaSJ7KrY2NCzbSzuAdjQdL3qzfWhNUofg3MZodjvbjJabYkr5NZ",
  "key1": "3nvrfwbeAjWMSbCfwwzRaBMztR4Kjy7D5wwnNZuedgaAmDXCrKTdaA2mKKRp9sqXGXywtk4CWV7fJDAo3FEEunN6",
  "key2": "3BpBqi5ZmtsiHNS3mcNq4brptpPegqAuYZcDSRihvcUFRKgGssA6Gn7WaC1wJGhkftdau5D2YUpxDvvRSCo6ZGac",
  "key3": "5Yaco7iBgxKo7Rsb3ZqbWqxbXFkBmwhsXyGw1C6hXR2B7z56smkaqyCSPyyWmKUCUYQedGJfJ8qeZshmVzkZuN1u",
  "key4": "2ges7iTqbb3y1w82tn5pdz8Y7hgE7Y2zQTLBin6zuLLVoBuubYoUACLkmiueFEVAqWPoityPffSZrvTZ5dzA2SuF",
  "key5": "51qceXRBkonZnfZ499EfSpWmu2WmMm7xFSAkbZEzPHWb2QVKgXfkCDsrNPuyrjR1CwBVH1j7mFMkwDTyXtK3Y8Xz",
  "key6": "2CKmRJBy8QFg1ohzmB1jS5wUiHCkk7hVc3hQ2TCAPawgdtgSVtXLgNKBvxk5C3UCrmtDggL2VAgmZ66BfKw387AR",
  "key7": "3bhSitGZwWNKnDntECEDWZTmaZVajRn6r8hksebKd8VbCB5kk7jf5qtPgX5TwtVtsdVR2daNvvWXyeHLPbxYGaG5",
  "key8": "1z9KomaxU4U4y5EZSRar1G6LFAzuZRpD41sYKwzVPVHiZceXaH1mMfCQbmeMYzoeEQu4syU3opuKVvPdoH8ZEtB",
  "key9": "3XZuux7pQWzKpGjugGVYWheNoN5BCLMwiq5hHkXm1PG1Fh3Xw9h9MgBGJuUioARhBq1iyKGQTMgwbf1CDro5gcoX",
  "key10": "3zvP4uzhYh5YUChXhZf3yC7Gs51xbRL47BFXZnRM482hN6nuphpoLdnCBHnWh3tqAUvXu7WmFgGATYgnGykA1PN3",
  "key11": "3WaTKEaZSaW6ZVTVntpaabMgJjqsSrNj1P8jekXgtvNpgoqLRiq24ZKswLJWNMxNkXA6zkA5FVeoN8DZGED2AJm",
  "key12": "2Qt9D1PY4jfRoJL21kTq3EYcbHvKuVLrcMZA7HsVdd3mVaKt13mFax8fNWE7v795FKSg9KQnUAj2Kpw3ThSv9m6V",
  "key13": "4PXqeid2JErEjmM9su8AsvKNSwogRKFMwga1SAf6SeU633NjprFQH1jNw7r8G6ef7FV3teQ75J4rjzRuNTViuLpy",
  "key14": "3qxxt1hK5Yqne8VWTo9GEyEvmffdJdGduC2YAfPFKkNSXF3m7xzWmEg3pfgocPXuyEZRtHUwdhQXWvfoGrUhWPZg",
  "key15": "4wd9Fop1pXgtBddVpURKxfJACZjoYC7MZKaEMFD1msPpeNYcrg5FMps7dDAHibBu2H8jDwX7hmYbtmeyVFeNqC3s",
  "key16": "65CQpsbyq82nmGFz2Rh4pT7gibdHx7DvNJKLAR4r9p2ak1KaUAJXmsDCpsEhaqp3duwpeMdUsAb4Sa5xrqQmwAD4",
  "key17": "2kY31sh5jCvB9ajaovgWxg8rx7j2s2fVPpScfJW3zQTdTZjYNx9VAMbKmHFWhqC4ZbRXrvtsqUsMPGPA222VJQV3",
  "key18": "zQK18JGH7R1iCF1bdZiVJX6xq5UK1e6fJrAoi3yMkhZDx7nN45WjsYo7dAqQPXVUpQnfkcUPgmURbpP9rVMvttj",
  "key19": "Y4Yf5MytmZyi9JGb2ytZAsdMoTzGDW2X6Xx8Do3YPac2VsCmWCi3Nt98FqEhMtUX4Xi452oeGxWYNEDqkhtxJZ9",
  "key20": "437s7KsRTkkK22Qy4RCut3RvkTsYP9gpHfqqpprXbKawPHQbUcNizL4zGtfc7PMq54cs5mZfCdzYv83yAm6MYQkn",
  "key21": "4Defhw9Bs42ekFQdGK46hEyuXQ1ybA9aki3whJWWHRwNdJHDaRFWccPjXM2qkZGaYoREf8y8L5jnydtpJfKZWFDb",
  "key22": "hCjmxhr1YHUV11JCScMhbHt9DJuPJkVE1MnqrwiSdqYgUsannv1k3TmpQsWqJySZS1rqH9hoHPgXJtods2tiPi3",
  "key23": "3XHiRJDwvxMofLLLhDFeAqmRGcELxJYHQicJieNPwSPcnpZ2dcHZu6vX2VBvn68b77fnqwV7TyXYj2rAReF83DT3",
  "key24": "4XoARpj2Xv3H76KxDoLEybZLDS8XMod1CoiSNMg8bCqQ9hvtHV4963uHTHGZinQKNnFEiqwaSqejcdzEKx5nQvHF",
  "key25": "5pwuo2Fo8ee9nXD56B65QioaYS1DGKSSqahK8qpHauuMBKBpjR3iAQ1XXCv75ZBY2hUCWGB5tFKnLEyqYjAnuhUC",
  "key26": "2oHrLaPYvhCJUpCkUAwow9dHQ9nZovP8oNPQB71UT3ZAdCq2yjBAu3ARU5rBqVcs9FG9UdMdWxrafRNrzjGZJmiY",
  "key27": "2mJmMydZmqcfG7YgSmSMvy7onA4zn6gd3j3fJUcEpwrFwHihCJkoG8XgzxZPrBVqRzBycHCbSmxiYBsWKu9cJcAy",
  "key28": "44gvnpVRNvbZaqDctdUrQBxPfFdMN7GciuWDhmSbNRQooL497PSapLMjJ9pDptKkxTPzAtgxzpGUd7zPWBbowqkq",
  "key29": "5NGt1GfDTp5DRE3cw6iSmeB5KdS5fRJbRsBPENo2ja5zr4juJKaVtqBSHt2LFN1j2nHJbo2LeSvhci9SWNmqHjBE",
  "key30": "3HkuQQ5jjfqb9PjrDn5q5gpP5GxXUHA2h5sGvkvfc51VmdYAc9kNggaamM98VsUwH328hBw61aN1hdkZiumm5qSx"
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
