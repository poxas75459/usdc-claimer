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
    "3am6CJKU3hyJECPZhhFyKmduWauQixVfqFwozwWWQXgvvGKCrufZV4cdYH7s35rij8YkvjCD1sHUmtFSxX5eUZ6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nayksXqnY6WoTUNQ5Q4FboCDAazmaft6YEfYRZ9Gyk5ymhT4i56V1dYLL9YBgsjKtEGh7wE9ftNKi5RV4M2q5sV",
  "key1": "2RFC9MZkcLgsa8Y8XPXVeAAt5Yh1kfdmS22ArYFxmRQuFBcY8MXwXM3UCCXrphbKJYGNJZpwmwQDjj1Tx34pnFFu",
  "key2": "5LRMx9dZwYbJz1NUcrXzXKLG45wxAc5GhzZX9aKVw1dTcJMsbj8VUcQD885eghkE7M87ck9xf4Fkct7qgYYhDxgf",
  "key3": "3RWnEQ6MX9f8ieSZ3h6jibN33obcCBqF3XLZp9kmBWUaKRCfPWpL6U4XxJzVw64CBeyJsQmxRDgDBxCDH7KtFY7j",
  "key4": "4nf6npD6tGnGN7fLFU8rPkaMhBdbdC4nS9iVeqmWJMcw15kWRHbim6RsbkDA9euGNNVPbjuPJjk6s9vZ5dKHdqmE",
  "key5": "64yfNuYRAP6Li9ShrEsZxwg1o56U3rqaygMXaXUVDjdG19fmCc7JxXTfayz8WSeoXXoH6sMyiZgVehkLSm8T9YyB",
  "key6": "52nX1NHzS6wU2qTR7y5WFpWMtfNVTrGMaWZELUm1tKyBd7QNsFuvfJufrg3KA5C2edamgVMNRGm9qAs5mtvht3H5",
  "key7": "4yB18b34cbERe9dF1RwgJ3Gp77YyqAXbSxjYJ581RM3katPch431WnP1f5fXPenUFEoa1bCqJnuEd5NNmxY4ujgJ",
  "key8": "utfSqfpz8RBCFWAau7xtzqpmKo9ypB3pqCvarTekk9W6mCYTv9QV5W3hkk9o6iXqXnkuovCdMo3nnGJk6EPF5WM",
  "key9": "5kUWjtaGr56fAGPXgJvNZUZAESkS7fpsvdZqLVnkeDHqotpXdoUp7f5Cja2cZNgrqD3tvFLToZqFqrF4RNxJ7k2n",
  "key10": "5agrvenQS4rZKCUkayBSq61fiqjt4Zmeu1S3aYqZkMHjKSPVrNyeanT6kYw67muGRjMjSMmeJwvCSmADHK1vq9TE",
  "key11": "4zDHhHmshDVm17QkNx7JTz82Qexo1w4TDxa56652pBVHn1w7yovdgPrWu1RQPmr3t4A93xQEUYvm6sGs6ZHH6aCR",
  "key12": "4gHGZM8B2nGmVwGT1Kp1KnjdubQjMUYFXZqZppoVe3Lk97o1Fh5jFX8Ta492HKEAkpY1R1CYRruuuKzSH9AG9q6B",
  "key13": "3yFgeAszeqPSnhNjrM8KnASADoGj3xTkjwiwbGJRrGY1TVKk5wTdUL3rBiA8FJuWadQB7ZUL4FqC6SAPNKq2Ssp9",
  "key14": "29ZgoWrrmAzy2vVN85Kn7HVHGbbgW3sLEv3Yc1rwe7GuiWM62xLLT5QQcoaELYemfxxczbJptKfmArCo5oFpwbKZ",
  "key15": "4wKPHts3ASDJFpgXEBGy5jnBUnVJmVm9o2gSHq3PX5nXUDiiQx2a7nrXX5o4i28M2Y4y6QviuDwCj73kUSfmo21T",
  "key16": "KghA9eyNFcF5iJhXPj7LunkcqLoXtuAExWAAN1Ce41o9boYJPaLmAqyq59kDTzPMwqSKGjQGHATw2EmT5W6PbMG",
  "key17": "2xyuaCpkptL1ygAvXdRBtxQDSN7EQzyFTJwLCx5Spti7fDv3ZyBuGvE237UhgwJbYdBDZBeNYPrnUpPTQFhgV7oQ",
  "key18": "2AyQSHrGuSjPAX73quXnLTEguixDqCN1FecyZUU4M7UCJm5VTtrx8psevcpa9KfRfgunaaUjHGHfSKbBwSizvQiv",
  "key19": "5LKcDxyBhxFHFU32qHmMPbLtXtnLLwvH91LcyvZBR5Lq3mMHrpYw5GynULEut7p3ukUZTxTJbZZEra2FJFj4inyh",
  "key20": "WFmduwjC3CfEx9Yh2TeuQghi9tLFVBYgaTUa78o7xkfvzRKLg1RfdBAzH1h55rots4bAPqC4Dkvtn5x8jcrtiuF",
  "key21": "3L62t1f9JrXm4gJeksEXVo2SfpwXDXBESGPpML2Siiupppdruv8eMxwdDh7ac7mnoduKnbLMKTFxyrCdX22HvwSj",
  "key22": "2GfJUeYapdhLoo4Htehg9DByaJYTUER8K5k1ProCG8LjwP7f9hFgMgfFe5uWEsE14UHSVjvnaVy9XR5FcbkjgTof",
  "key23": "4sg8ULFXDDivkT2ejM2kPdKTFTuN3N7FKGU4yJMYykiV251od6Myngj21tabM8UVQvjALHZ1RYLMeQhr4r6ETFLk",
  "key24": "4vQYkrRtnh9dPia3R7Kq7dQ5yTRfaVrKV4ZTuPeJVL6pP368XKNMpYwCTSt5zTUkBmgkPi3A2m8gCoUWDaibwApS",
  "key25": "yourgzxZ74iRaVfJ5rAy8w6ymxDRsU5jJkzBZGrukovMs3zJ4ttXuFTG957yyEvgBDcexe8nKgLnDqv36NPRcQ3"
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
