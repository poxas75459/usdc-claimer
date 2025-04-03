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
    "GktPPZobodXgaQeVZMWsFpm5ZVE5oNjqx3ZejBanLPZFJvRGEeNDCszE9ppqWJFWj81WVzaNaJuAU3y2pVTxnQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7qTBuNZQdUcofh6jbh71zKL7zwmQTPoFKiLXb82HfVjuBPcdA3T79ZzJEWKfUzZXcJHqJ8BTtAwQXGa6iHAPzp",
  "key1": "46G5hJje5konjcjbYsud9YL64PzjzcnsjkuCqpTMg4WqfcrNaW7w7d5EMGYWiXXg1wd7iGx6sT3BUhASsUMCVoBw",
  "key2": "5cJYbrDFcw52BJ9UFTwPVbAUQNFVUHM2JFZrdddktcsEUCuADCLA9KgudCFEMvkLmKLurtaAuyt6RE8fWaQEarYJ",
  "key3": "41GDMoYBXu5ryMmyyhwBXZrrDpqBk6ucCXFsjndNQL8BpsMSWYiv7QhhNX7YxihznjXvJa4nKSbQRh9PN8mTSzRW",
  "key4": "NXGmou2LnApCFUaYbPcS43pSivcJPkBXUzzNXpQfrgJn1X8cvvC5tYpbW87mvmzN83L8YPAn98SbWZdjvZ3sPy5",
  "key5": "5V5eTQ6u8ZtMPysKvLRJVXFirThcRehKJ7s5zAK6XjRgH8qPGesWYputJyJ61fLLX35JfTyTA73FhZosycsUihdN",
  "key6": "8UTDz7ft2LkAnFsFG58vuJc4ZcPMR48n4usbDCkeC4c3KSQocyXiZFyhSHnNLWd1hsaXpk4nCuJN2a5J154kJxE",
  "key7": "4Mg9W9Y4yz4p7ZTNZ82SMzALrUjjo6ZwrS3yvhCC9nxxUvKvftRGWQhVrX6BxLj8XpvfFAA8CkZ394p33temHNfo",
  "key8": "PeuQ1YyfTc3ZFNixBRU5Niv46L8F3yeGyPxkv7eAgcrQbTCMdekfD9W22mBxdJYwMunjdNfhA64BxBLahtpYShv",
  "key9": "5Kqbi3WsTn9cFQvQ8epN9CYMmwjrUU8sDxbMKuwcz42XR6Z3GRUyWam2soc1mjo8BdKxhutn7K1qLJsG8QpPFoHw",
  "key10": "5pAxcVuArjDpYwUpAcMkdsGmRkrer2U5c19Vtoq7331hfZzPocbBYXB1ZT9LG72GrCHrN7Q6e18D89j7Ro3dwRt6",
  "key11": "3SiZvRVFVhHM1b7koXZv1syDWiDkYJk3opjCnfyjE6CZbVPrufJxyQjRyS29WMMSUAnEB3sZ5iDpsG8Dh5xca9FX",
  "key12": "PKShYjhmk96fGcTrzNrJmkxzbAZMfhff9V5GGrnrGMKP16VY9hdWeJ65gZNKrThDhga2dwfXAvqrqynEq8qsLEH",
  "key13": "3avGHcBeTowoPS3BQEoLcmJtkHQS4XqatgRd2jvpaQniTNe5eda9T7tqwokuEf5pi23CZpPbQ1xpwpq4PhuYYMGH",
  "key14": "2VyDejjgGJgFtWQVLdKrPbyHGcmNYSELA3Dfo5vGSzVUDMULYGWJWLWN5kS76oJ86SCHDbSkh6JmU5qyPyJempY9",
  "key15": "3ZaNF8n9RavFrQM6n6eVi4NQ4XGaJMXsVYj87tZ9cWYNpWMsr8kKy9QKEj7Jdo81XKubvwcaTxh7VkseDny2jpA8",
  "key16": "NGA9nYs76nPVVfVckPAxti5v3Z9bndRYanvEsv3ng2zqbVfnbmiSzCgetGiAbDW9DdBJgFG5ZVhe9hqie5n2qxz",
  "key17": "mJSYFFMTMkbBM477TaZD7Uap8UPPpefGXxonyLoTknw5kw7YUbsdsA5H4LokDU1GUoiV3wR2SZudccpGigk6wVe",
  "key18": "3Vm4v7UoVxPFZkH9Rfmjmc5BceMpFDC9nBvfCi1J7eTxStheqEEFwA5oW9hgde5oZMrGXSwa9ksN62wrkihxLziN",
  "key19": "2oaYNoUVCJqxNtgsoXRBWhsm3LS9f1tJos9vCPnT1FWcL2kTwC7HxjjwBozzgsu2WCRBwXyDG7c5wZgkvb2JLXDo",
  "key20": "2xWvsQw4XrQp9SuLJPN8iGZoywXznHswEA7q7XhE1j9tSgGW1TrzTEw8He8ff4dXJxBHaynxjazmEUXD2ceh5eRS",
  "key21": "TUeBTd4K23Pcx32Lk7RtHf3j6Ai3CqgGfJHkgcyDKxpLXS1cpuNG9MePv7dn3eMSB4WXU5yTikh17rMfa9e9VQ4",
  "key22": "3drwVSPqNfSgTcSv8fz7Du6EhDqHP5UVMeHprYK7vbxLwHJiXnWbTKq2onDgxnvrGMQPqtgrrj9VambqYim18tNA",
  "key23": "2goECA3RGC1HmqyFVfpZXLEiDzD56UUToJgYBK2ahb47AoV3SqW9RpJjgXmq9382qVaToF7rmdJBq2yNhWJH1AyF",
  "key24": "kiSMHecMTSX6DzZ6WiLt8xtPittbBK8N2SryGsXr2un26gfA1z3Mnqn3nebUM6iBFp4Zm2XwgKSsrSxok5EP7k3",
  "key25": "4mxGJT2gy64bcmyCwC2tLLsaV1ndXHaqrNsNwFVNrMqGxpJ6HcTWfn5FV4dzacqj1CDGbt5XB5839eWuYJmaQYsY",
  "key26": "5agrDxSd6H7gQKAxP74zPaHoc3SaagvY8fhoeTfaJN7PohwyTewXr9ELH3objUDp1ZzqtyKRMKEvRpNDyeSLHNvw",
  "key27": "eZyRQSdiqix4k7sugwmnuuWPJXBrhnzKphLg9QwxkMJfL2PEyZxrZACXV1N3wBCjcxoyTWDAehCjBoYiDQojnNU",
  "key28": "3JWQS2KCfyCN8ki8hmfzHWtnNgxQgXMDdED7csS2mWqd6vFNpiaQ7UkN5AtgeZwkHkjM8XFuskriEYbAsjC8NxYB",
  "key29": "4DFqyzYivcMTdGx9AB3nKuYQRiNx1So38vTU27UQYQJNN3F5ci7xK8qHzqsrWf2HWJZcfMCndVkJgBGiLs76QeLh"
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
