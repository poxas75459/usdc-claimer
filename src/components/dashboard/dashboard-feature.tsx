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
    "2R5AAFGbaJMCCSERH6YMC7TYatyuMDJoeZDQphB62wZ8rZBtPsh9goktve7hET57kvHJLQYnh6QgHHgYKzHDL3Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27V35yP4WanH92kYGHkNzfgZiTGr6Gd5LWtXMmj1D4otTZm1RgaLwqHX9WvHasDAhZVmZ9xRyy1ibLQvFLYDJSJW",
  "key1": "5gpY2F3w6jBeT1ewKgeHn31ZBSuRXvTzcTPcWhHYC3pCq1aXM3bh6Kf1PfnH5GcC4NihGfcPPC2haTnqTzYWhoXH",
  "key2": "5o87d5jPt5nJe9kskuS1PF74tNQeCrwAEgDLJwKA266gd66Kn54r9HxcQSu8GW5ATMNzPVmCVLMSZqB4jruWpob1",
  "key3": "5PBsUVHgpjZq6y9AZCuWY7SwjBGEfSFTUpGSqkz3VSn5J9mJrK4uNfp9Tj9vhUEmaEZcwdoKWQvRnKGsCYH1z2eh",
  "key4": "471aamvbAUsc5jNueHArJHB5dBRvgYDDU1pre1ng4nL5bNujYDYK21Tyqu4BJMiR6FzeHMVhFNaF16xvsUkJy8rd",
  "key5": "4cLfDQxJ18zdF2KsNUzkEpJyZ188x5HNzqheh6b9aD8aUpdFzTqaU21Vq7yTBUnmqhNsezVaddD72sKMr4boMTvd",
  "key6": "3F21cs4cZtKH7ReXP1ToJ4wq4G64Bhpn1KWTiaq3p1SPCgHE2YD6nwDe8PXEseUMNkBUMJ92Kp6ik8Vd1pHpbbyb",
  "key7": "5oFjxuGyuYQtfUe1UDAGUHFj8mb6gXZAx4TUGzeBRNUnPXmfarRebuRw56fSj2EAXUpSUw5uJj9nhofX6a5WQjid",
  "key8": "4LSiTacUFLdqqqgSKdocv4MWoTeyxbFXTzo85top4mDFy9p7H9PxhHnjGwQfHcMn2JnZZukTU4dLzpbpc5iEmyMb",
  "key9": "3mEcan5xJQ6peHxXk2PyBB4RrsazvvtUhxzTgn9mfhtuvneHdRwHrLLAk9fnpYf8U71dWqRCV5MpqB4R592GZbq",
  "key10": "2gbR3eJSU4ddbK543Q8jkUQicuAsf2fW8mU4KSX7yMwcEvXQ9c5mzkiDnbVgHyRB1oJAF8ijYDV9HdogZ8EXJS8g",
  "key11": "LZFAaRMk1cttYinYjmWS22QBfTC4uhSEqPfoYsvYoDrBDMnxjSu6FMS92ZbmXbF4DSJ2pceUS4eFwHfCmqtfpwR",
  "key12": "2UWmoBjiN4nMunENywhNGBcD2TqafuhqfoacE7VZ7MkcGEgLq7grbVdLpwEJhTJnMGXebRTGkD4b7CzkmSAAT1BR",
  "key13": "dFFKwDQrVfwHWo4b1ufq54cHVNhRqSm7VTatbxxL84rJKQq1RZo4pwLEutXj3RYo86cd1CAtTcsYJErJciFLqKy",
  "key14": "5rjBKjRTifiXuuMgEJAhkYEw7tyHMcfkKZkQuZSTRbA25zHXbjt6JACh7B3Sm9e9R9rnC5a5pKLmp7vG4449XFw7",
  "key15": "4so1KU5eawpGsPeNC7CnPk8B58Xi4XRdAxtB3BYETWYorqvYthkcWaHt6U2mfhpq41scfQspH1qyMKSiw4XA2TWF",
  "key16": "4chhELrxXjdV3hXPFqFNq9vKLwqhA1oxxtfogaYnkpvjFfnjpk4Zwt1MRqHJ15QNgh2kRqd76a8qVnMh8dovJxX6",
  "key17": "2mt9ejcym32z7RFAC7moU8mBWtfVrFfsA6fX9avqTcXmTGD6k8kcLF9bG8ncrBYTyeJ8p7LZUJRQRuY1vDUwToj1",
  "key18": "4i4iZjx5vZFNEm5iykDUef8qU4LboyE7xESZmuWfA4VWVXNPmtwDCoWpE6Qji3g9t9uqzHKnTkfWU3NqDh6pYShv",
  "key19": "2Wny4CgpssZS7itVuArHaRM23nQU1M3kQBRKBkGhDdivqqVVuG6m27WkFy3godDbZnMLh1yL5vvGWPKCmgVobwuf",
  "key20": "37FXd7xMCrwLSGLgteBAXuPUettX3JJjfzJ5BojYqQRkdnG42pRAA3WFqDuutk9WbfPmNz12B5jzgybKoYU6Mj7u",
  "key21": "4Wo8vmCSE7tsT5m4jjRFzX99yYTKG7ZAUVshiFaDXyiykFtn8hiTF66vWSRKebXn9QV6mUZPYZTiLc9P3fMu6Gvt",
  "key22": "5w51u1bKPZxZvgV3VQEbCeahcmf1wPc41MVQbCCB4Wi63mdrLtk1qfimxxPoaaez7bhGU2uyPjQQzdVk1VFgXsQn",
  "key23": "5a13iTHTeudEK5Yxqr1PriCyJoJacJb9781NyLgWXM5WM1BEQJZ8xzfZfpLicABJQr5LQyZG8SogX5bnXyF4sYnR",
  "key24": "2Emh1kqFwc45ZadP1nTHSEg9dzFSForrTEU4ioP1dE2b96LeSkT6D9pGDJ1SNeLhv2EgJjHcxUEQQxezRuD9PTfs",
  "key25": "4WZKqH1Ggz5YJmx26C6FEjCxmqZzFgDZ4CeRSYosgDS9JyqupnEeNFV9SdpyyEJFqiNo7oaL3psnpAF6XK8Fceoj",
  "key26": "53HsaDhmSUC8XWPmqvnCFgAcVixNPTkKiamfKLFk7CYJTS3rujRcVNaQ9gbYkmGognzvTAijVTiiBr8VB1TtPL6s",
  "key27": "qes8trtcgDcyXs1J72rDToQFB37nycnDMf8JSGJ8BaXEvPY81E9HnjEbN66rMSSYaLPUajaK4vCksGtJ9uo5vB3",
  "key28": "3VQT7hTFnbUwSy4ZJ53VLdRnSAJVi8cfoR74z3s2sSXiJYCy3VXxhvEz8hpUwe3xfx8chNFEMLeR72ngi6FKTojw",
  "key29": "2HsAJybGrggZxgRYWwAJHuhxLBz7TH5MrngfFBAYe7mnvkhnJqRbRfmDy8Y4q8mL5aTsSuEFT1zQmyQVCyfazpJF",
  "key30": "5PMYXVWgf8g37KWD13atZ2vRaTkUASnzeyxKG6LAqJpwfj86R7Je8Tg4XKde7RTfoNcSTMkBMneads7CeLHGANDM",
  "key31": "5YMye2icM2JgJmmGLcGTndHetL6FJSzM2uysRnUZhVDn1TPtJ8MgBxwnCHUfRXD3Gk46qADDJAYdRYigXUxwAXSe",
  "key32": "5d6VhgjAA6DeEh1jLAqNxzgxAcVpW9pWCLyvPQKV9TwpwqQF3bkZvTgGKvu8EzGmHtPFuMTPFmiLR3o1VJrJXGDU",
  "key33": "MJR2Dv9ceHiJMP7HDsszzCdPAcAhwiVga3ZZJSjBNDs4riDZKtL7nUqAFKZ1eTmB2anrXuJV7XWEbyU4uJ8Jcit",
  "key34": "22pdUcTwEf1ADCMUKrwtfk4F9gX1Vu8HZvuFDCQZyeB2YRUwK2mGT7XFVQZnHc89dixUmoFNoNu5iqq3uJBML7pj",
  "key35": "Qz3jniMr6c1DgZZgbPEKrZ2ZBr3xacWZTWkPAKeVBViaYgaNCBiGz3UGNLYrcrjrNeJWzfNsJiZj882UGseV2UE"
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
