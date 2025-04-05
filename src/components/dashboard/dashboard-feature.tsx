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
    "unZkXaL8ZZn6cWa2wmD3EDUGyRZ4oz7Zt9CXqqR4AwTKiDvKEKM2agswwxvTfsrcTwPVecRs18KpgFg4usDq6HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfsmibjD3pt5SBvRoseNzwiFNjtKiwYt6tDFuajJW3FKmWguJ6s7QAirDMWhWCDqZgdncXuJTGxWEiREZHa5qo2",
  "key1": "5ZUZ5qJSGjxZn7mWzadiboG4E8Mw7dBLoy5651PGYYxWiH1HLmQdHjyLpJoptQqtASnRbhfbd4NDDbQVhA1ifh9r",
  "key2": "QTBZWBegVAZnGp8oWhnPgTjU1Zto9sDtZAkqJFKW5BYjLSokRkZqfVTMyFjmURioe52iqu62LwjDgLJdhjrtHjv",
  "key3": "2HWdANAWVunoLLx69xdEKQgGEiqudszY53PcYUEqurrNP5dF7AH6wYgCmHM6HkqNNvajyy2JeHByqvqAqKSKzYgD",
  "key4": "5fkKqjfvegQzyWFCLeHXatGSEWctSQJSHJoFZzNdEEdEJWBaFyN4iJECpwWy9zUn31Vb3tukQKfZiS8outRHTzpu",
  "key5": "2gswynmnF8ZQ68aUaixF5dWb73KNHsYfkopDYQ5oqBZdfXXMbG2jpeuWP5gW7WYREHo6gF13FEhNrUa5Rh8tkLc",
  "key6": "6cse9Jy9dEiPE6JF4UnQDC7BWmtNjVd5cNmJYuideuLjoWimDeGJhZZiqTJqZvAJoHfq9Zt4PiHt73uTBGxhPtj",
  "key7": "4pojMULec1H8WWnEM1KDYuJV7YgdLcQN4Y3z8irhUpdsjFa7tbDk6b7bhwUV3uLvcTju2Zqr5V892B2ax38fbJG9",
  "key8": "2nGGd4ievozieosXCD6EgSH23MYiKz7HBTBEG74eZGtK76KkH45MTJmGfWhbE7bQXSX4uUcLhh6pUGxiXLDiA6J4",
  "key9": "4ZoJgTYa4wQiLbjHTx54QhDXLyP73wNyBS5pPi9UNB75uzqjARhZNxbKwJkSNXucUuviRaHt1jCBiwEiwquu7okB",
  "key10": "31KXuyKozFPUS8wFjERTUKXB7jVkhaYm1Q4JXmdur9vfZPwmEcoXuhfwBpxKkUtzy8E5iXLHiAzJ6XUjzo7G8Tyx",
  "key11": "3Ezqg4jt5cFL2GwsnLDuBhWBtHnnqowS9NL9feU4QSNoDh64fNVYPY1KrcGTDpdo1TLWZDCebsrUyRgYr4bvHwLT",
  "key12": "RXHvn2tp1ttgGDqtLk5z8KeYAnjNbFEesLkz7BZxEi4mxcrNXpcbnnBhDyoyxurGJBgDYcxo3jwWHDU2dZfby53",
  "key13": "46TjzKZHsTvi9qah3sFzUtx4YKd7dnKPv5mAAVjpJHjLLNdabXP7YLuwHXbE5ELSYQXLMHrsSrhYqZy19JdtgGr3",
  "key14": "4W3a8KwcKPCmk6A3JNdQP8ZwhEHqwpSpFnpnYXCDT5k4LZAotfbYECJ8c1pryzBpUoBDYkqZcrkErzxUiuiPvRKk",
  "key15": "5GGoYLmj2xQb4HDuUYgUYVHYSsZEPadPybfZfscfbv6Bvad1bBCp5n1zxbLYr4PAYYsGeQkJLHWrJDwhRGNPV9HL",
  "key16": "X6oMMbN28b7KpN2AjuY3qFBrgpVaMP1pzA66JRDj5TDSLfEwzDdHDvuDF2u4XV8CAX2g7hncKCR95SZ46Z8P966",
  "key17": "4vsgTdA1z7W716N4BWiDkquyfGug7id6XqjriGJdDFLeYMV5ZSvxzURkfhZdNBq1Ny938k2Xb1gfH8KfYFitSgWc",
  "key18": "649denbZpriQFQTwWLSDtp4szV3g8sKwkEqtTHtUvU4D7SXPSDViKFrrgiTtBZXCyG5YMdEBzv4FSbLdLqc7wFdB",
  "key19": "2YbG8dWY2g8J6PoUKVW5fLScTV2oBna7ih6mjELR8HeqeXpJBsac5kRpD3WEvsj2cun5fVS3sityMVfuchYvd8Ew",
  "key20": "3dJvjxuAfbQowt8bhe6YW3WDEMmp2kQYJ68Mz9UUynSRKLrns2JmrGos6RzfJm5S9pwomX8w3YRKs3iDRVAVtQ14",
  "key21": "SHZVxNrWiPfXwqKWr1wHGGCZEsnMJjyYjZTBearGEJk7Xw3JxJGh323wL7naS2x4qiuBjnRM4ZMu3umuogfRtFC",
  "key22": "5BDEfDuYbfLWGJKP9rpNHTn19zbQJPsLaASDHKA7iXCiqvruA1tJb3x3A8qT9zgwP8JX2nVrFWGUuKTZxPPcf5FV",
  "key23": "2FWXdaFWawuPfjLrwgzYFRrSCyJb1awZyRxkk8NSunsM38u6V23eKFZ7SgmGieU93d84QUsHt8qKyfF6t9bzAfah",
  "key24": "3LJPALB11hGrXHGM61mUy5qn24nmpaqWL8vYumCpZquEbFdNAkGWhV4TYbs66Dj4VRNbbcivVnRceH5XC39EqCVM",
  "key25": "4d2MN9UCo5CwGAaNKL8QAtyf6NE2XhicRSH8Lki8cdVeevMdyxzZJBvoVeQAK3WvU6M9LH32duW8tiEfQ9RsWdhk",
  "key26": "m5EdErnsYRQ14djjPRFhAYZPyc4ou8L9i4jLBAkTo6jKzsZEbfnKAkqYy7J9Ut7xsD53uJnUuZke46tWGYmR3cr",
  "key27": "3gNgR1Ubf9QgZ4PNV6uW66WGTHydX7yNyo2bZuFGLBTkCqrDvqwjNfDMBvDgzKicr8eGWfXPG9xrtRL7d6oyR8rW",
  "key28": "4vdtpmyjCjqQbiZou2xeAd46jXp8ZWXfLvfhF1GKkQ68tgRK2qQpmYUqjXQxAvJBG272LhGWMCrpBE1zi8Kq6PwT",
  "key29": "5BvRhBj74ky66ceF7S21ZCs9zCc2vwacUFEzFm97S2BYABB7HwEaUuV6xtRQWm4Sz6osqdN9Cy19JsFDXAUEiH88",
  "key30": "2dyLfjwSgy478yRzALEnnJyRrNxquG9C2ca9k12J9qBhHQsV2xi5RfWrKFvKdvh2GeK4y8NTZYkw7BVjYh3v22Bf",
  "key31": "2U22XTbgX94wtjy6eYZoGBGrGeRspTNVb54Qk99E6w7GmLAjmh6LuaEyPK8tvbYC6bEa4jdJNUrSchdVXegU8nv5",
  "key32": "4bCrWCr8qWaSHKrXYXj9FEgW7ZwahmZ8y762yJGNSD7U88uGKRfpiUBqPXg24npyzK6FpLswRfFTfAxXTUeFLhZq",
  "key33": "56H6feXm6QEq1Lgdspc2U1EM7SaAb1Z1BZiWcWvrXmuA6nNw3AFTAwSzVBB4yKmMeYkJCXKj5UZbkP8Q6CL56twv",
  "key34": "65S9D3xy7i5oYLqZcXKEqa68TCZRf6DTak2HrVWpAQw4sAYkmKH6R5NkWTnCnpTBz2CY2s6x3fA5ixp5RvhCkdRR",
  "key35": "3xq3TgzJGFNa4jbNfq9Qif6C72tapEuYLDEyuhe6C6ExEGWZHyE1zfKgSSs2fd2RFDFtqzd1YrLpScecWGAL7TzZ",
  "key36": "2i1q67rYtZju2rLGErfwiqXkcKpcynDoFpbRt5HsPCymNNYBfrs3JYSjx8SPWBnApY5SdH9UXMrwgz28MEE5BCDD",
  "key37": "28Tjo94DNk1B333dW1ettuknrph8GgNcprZNw29u1wu3ApRhXczq2W69sbAyCh7h9SFCbWQdtfhQ3hTKqiT3D7Gh",
  "key38": "gFBfkyxpDb8MhCP88bgMGud8cwrA4WYfu1CU9JxdCe6mTGi3fN53DuDWdWW9wortuJQLj4u4JPjZzZuY9kgcnHt",
  "key39": "5bC8sJN2HxszjgRkWL5MWUKbWbTCa1s5VtTNy5Uc2jBckgSbjf6VXQYHfLW6s4h97cPiQwZCpbwHCenMwCzjBenb",
  "key40": "ixyD7UYMwckD2LKck8PPfX9f8uU354kMrME5tiR4QJ4nh7fw1mELazDUDLafYJewr5TKstAGUoA7W4KgDxhor1c",
  "key41": "2Teamb3AK8fXh1QZqYzbMzowBMKp5ytQkHau69jmec6b3kXHdeFoMBgQRcK7nYdURpqxRHTcWzU6FanYx4b1QYx2",
  "key42": "3AXDWJtcfGNfVmPP2Jp918urndjMQ8L3wm6wYMCeYSPJkYsPBFUN8MzTjYGjhhdn1YeV15PNU57DVQG9N2pWDfYG",
  "key43": "28V5Dry3nuqZ6VRMw4khh55KiysAL7pz8vptLyrNEDzWAgreiu3uqZBK6eYaG7F5PxuFMRkurnMtJfUZUHLZDz8D"
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
