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
    "5Adt6bWbBvFM6fQ4SCJUA7BhajA69ZC691hEFfqEFuEk8PuKX8cV5FAw6sogeU9PmZMS5RjLz1MmGMB2PVgDQrB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8QWpKdoiNqrfZ3wtu4DhNAmtpdAxYyzENJgYGJbTj6WUmSDDKXTvhTttLyBRqho7sNWHWWPTGy31axGgGNzh21",
  "key1": "44VVsGHxMxrLDJKFU5JEzQVxsTfqRDzNYVVqQSSRBFCCh9zEWSWMeN1vpegiCX6tfT2hSDcvrPMocJsMHxDPpyL2",
  "key2": "2eoexauZV6tnbyWwzyoYDPZVQ6mjHeczxczkAJLcFQa3uGQvmgA4oS7G5EymWdW34TuoxtawsiwudrzUK5psehpZ",
  "key3": "4diH94ygj9ofP254nvYnXvWHVrDYh8Hzw2Q14C6EgR85FS8TYDJ9fmXHBjk8Bti7znL3B3Kc3GWBr2CnkPk2qDX8",
  "key4": "5gtqYdwrVZewmwYmCvs385fa9a737mNvxyD2KUCpwx8pvveNDB3TbCJbiPu5SKbVPqVY7jdt1WLWHNWyz81bi4Mz",
  "key5": "3o96iH5Jqs52iyXcR9pFGGZPGGeRr3kUpdZjm6oMi1KDxkAP8mk91HdA4tbAN6tHEZVTzVixKtyvS8uDnK8L3oTM",
  "key6": "4X677ruTFpxzsWstfVFEWeWn2cuyAnjBgZPTG1RF2kF3X9WVCPzdfUeXWGgAe3C3UDmMue1tiERpjA4nZr6HFsVg",
  "key7": "4ZjKyovxoS51kcWigYJXHWoDtMzrqV34skF6j6GRybjUBuWqMrPSstx4QjXEtxUqyAvyvJknzwWoaKpEgWziXcgg",
  "key8": "BFAEuQnTLQWwxjA3CtEr2jz9vqEkpafTANp8gRe6JJzrbHdyRnPztmngcYEi3wMMV2UBmGbpthnDJppQTbc38qv",
  "key9": "fqJF41QMtEev2CPRY5LTgzjPgPD57sqGzp8Dogzqd4972ZCGbTQRZM93XZ2aCSKVpsuM33iKRasG1LEDzf87kkC",
  "key10": "Pfvyun9jzAMDPEjqyVWsWhaBaB7LQAmg3iZWvVRHJXVhwt4qRpRrPfH64xpAHuhgQfxFbxpynQ6a89j5VmLhwb2",
  "key11": "3obWbiPRcJgQyFtiCPp489CgFkftP5PeWgbY5sRr2JTFW1SR6VuZG2N9msABnN4wKL5U5DJd8kSqhVcYgktcX5Cu",
  "key12": "3qrePFCJmB5KWfpEqgvMEFR5YNbPHGrVKCaXLwJw3acD48SaZ1kiZavEdMA8gXF7hXQ16JrAzdcLRLcRmUuocGRz",
  "key13": "2GUB1n6tKaTdEbrEwhy29hgpupmibjLr5bt5pSVzp5G2SawASo7BuTtLRgFkP1mbLRsinywnNbtqxb9nUr8Gm76y",
  "key14": "5fPwywoJ18rGjo2PKTPXNKLnKLoASFzZmyZx2MC3wcEAyQ8zAvxrHTwgndZb1MHxNaaCZExbViJtCdwHrSn9BhSE",
  "key15": "3JnstDGNEqPf7xwbJ5vrF4pHiPxAYctLpjNcQf8GAMSL1d8e9wBmoJcSZVVC3aH171XBi7BNK2jc6NHm9rfB8PPA",
  "key16": "4BEqQM1MtTTQoEuhEVg5kWZ1wrpwAxEUHEG5sznB4SE2sivUSXkBxwaDgKtQipk4SFbDMm9tTMkbpHJLaDpmdeXQ",
  "key17": "3bEeKsrVhixqbg3SJ2o3GSHCkZAzGFakijs7uF7DBs3s8NExZUzwA74ZwQvm89MdrxeuF65N14y6DmKj5JnsRwWs",
  "key18": "5z8SUJpqomTDCXvuNnU8vNfFueSybcPLEg7Rq4uXQAmmcDKEx5JuFqSH3sKT6xArmmJqaip8dTkJfXWdY3MRFLow",
  "key19": "abXdtGDocrod6u5oc3oVTLGzpXSJCJPsztyi5oepWPXxL23ZGaHvei3Fx3p1Mnk4gWg7ui5tvvjbPJ5BH6jAZQX",
  "key20": "2izfFrDDW7EJqoTW1KgjzxDz4EmdQemmFiPLBQpHVmVTmkYteLGMFjS1RB9VbPJRNVB4tX9J1ocxgLoDkgFUYJaQ",
  "key21": "5C6BeJPSFbopB4q8VyitP7bGkQ1N8msiqcfDH1eVWYtsnQEFT8bpcnC1wE2CKQ5h9LS889GGzATsP86Toex3vZkR",
  "key22": "p7PxHrDjtCpYZ27Dtf7Kb2P76VpXLUoEZ3XoCdhD9NBkaauZnkSidhyVDViChkNYNzu9ei4YL73YCk3myfXk4nS",
  "key23": "4Pu4UCV2SGMyqMapydvQgJodJTm1SEX2cyqmb9HyvrZA9JeQ7s3vCL44wzR1Jxh1fbj3R64yXECm1GCFhdjJHds9",
  "key24": "3SRgydnKq9UKGaQ7ZMEU3yWKVwYVBNazvcprEHbdFS76Ec5F6te9awiHCojvMr9oEKkjsA1NStYc1jX1cU4t7Ecj",
  "key25": "2T2JQELNMbwUHSr82bMfVe6boDDJFwvJZsSsJ7Lidr5TR15f4hV9C4c6sW2LcXM6UkjAbXi7LKHE7FEKvAsJw7aa",
  "key26": "cAzzUJ7MyiphLAdJY7LeQdW7DYiznrbfJvQzYACGXLShv1oahykPN6u5pSXyQ4smua6pPATMM3vVX5uMNYDkyZh",
  "key27": "55AFxZh7KpMufg42ajRsnfsNgGKUCaaaPperHLpM2p7foCkxsSjMC4MZ3zc1i7fMDkkztZMd87zjnfuQfdctavDY",
  "key28": "3srhMoDh1NgHThA1B3RaJXeDvfFGaG8x3sF26hequguPd1ceystKTMA7PDezUJnnBVSscFyjyZAQ8f8jdkE9Vmrf",
  "key29": "2n8ewsRvWYg61CKHNWq4pYbt5VSaB8SfuiDKtdjyv8f8XcZELrBxY9NgfidGZTmPxtuxXRScppnVZWPhdaHFwf9A",
  "key30": "5ZNnGiEDEpv6vYrGtEZZjZSpdrzsxS6JhoLLpSfDDFf9nZrmoA1EoVTZVaeuB5UmyERdpqYBeW1Sh6vhjW4iiVa4",
  "key31": "XeC1PDKf54wx76Yp8nPTBh4Yuhe2LgPowcQrvxJqntTbVQMu1bDGrWgos6dor68gHZwzC2GyhgxhMDqCACz8GJF",
  "key32": "4RiigpMk9f2KrwC4Ek2iQBz2BvSJaRVAc1nuQs6ntJodgSiK1tSwydU8qyEDiEJkXrK9jVvzgw6GB4hNnMBj92eV",
  "key33": "3JZ1L5SDzHLpLcqAxXeVGQrRqB7Zi75sw8QGcJQF1YyE7LgEZ9ti7bRAD5bkhuLSkgFFtkpYxWKsMs6Tam76uzUn",
  "key34": "3qjQ4LCbZxNXQguqfxBGtmPYgyACDk48NkaggJEuuR75c8f518kquaya7fc8e2FLNvGcK7EwptvDU8npXBG3y8gd",
  "key35": "3H8EH7MfYyh8yUXAbhm9BXYmvzaWSb7DHg3zd41JHr5Af435rP5ouDruda62XmGoT6sv8dZPpyqmJLixucAqA2jB",
  "key36": "3KH79arumt9mDKCdd3hBrFBqEhAhpjM68nqsmMQgACEQ26JEjTebzf4mH43h9NRroZE8kkJyv3GqeJidzZxMYUFH"
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
