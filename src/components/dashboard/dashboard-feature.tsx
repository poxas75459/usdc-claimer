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
    "22qeC4SwJgdgwkFub5PKfVMM4G6nnrAmRJhdGEgQLBwWqFV8jkY58thhrv78wRGzaoaZ1tU7jvFCoTbKkEz1U8MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5rz9y4aVyKpSY6xVwMfDLNn8mxm4nafdGi6zTfx2xT9wgHnLD9asCEEKULwrX5twjFh24gZs5PasXsN5u6Hq8S",
  "key1": "5Pzp1XBvuieAyUUGhPcEh5WXB7X4Y316J6tCqheRkdDzdmhCbCxMGSoYviv1HgWAQ6Lqkr899heux5wR7Entdesz",
  "key2": "5WvKkrpEp19NdriaqeJEuKKWeeM6VCEAVeTt6ufupGVck6u5yX9DH513wr41cwDcCyXTC121AwjQ3sKHas5AQkWp",
  "key3": "3ha9QKJ4wDA1BryZraPKeSVaUzoBsQ2UTmWWocmycCRsYQHmBYRdpyB4NsjucvmTqGiKQsNXqnYhBoAR8fMUYn2x",
  "key4": "33DwgAeVs1zTUGuw1Jfqkx49RyRdGcBWqgmpHAm3XK9qRRjdaX2Nu5Gs4vVf3yhb1xJARc8MP2SiqToz2xBToutX",
  "key5": "32MyJhUJzJXsgPqfRirhU7YXA9k6tcBvhRyG2BGyS1tHxQFPmHZfyNtJS1Tja82HYcrvCMEn22L2Pfx3oTkeY7wY",
  "key6": "2eStFy8H4UZCuN3qk82aV3V5CYzgjq3cyUp1z3F6N9Gdp6MBXypFodVpmrNa8nrUKW69AC6jh9wexfpr3Apcx5Mt",
  "key7": "4WHqC4DJGkjsx3Z8tNvAWQevbZgLSybR23Nawt7aR7o26HqdfeF7waTV2aHBV4qitGK2ahHtyxHVUbRVqpem7jxC",
  "key8": "4KUCo8vVZMjbQwwFFHALUVqdgnqisuTdMDGJdMs8ckiUe3TDbhRvynE5s4WRz6dhm2EqrZg4eamTnn2wNtwFVgSc",
  "key9": "4gmuETfD2BKzUeMPtcDycQEp2suHQG2WkbX4RDZyEMGQfQPzhw9yD2dCQQUMGEoVrgxnVjtzX5VBSMERkr9rxCpv",
  "key10": "5SjnhTgMRd3oeoe5FtMHdeyd9sSsC49w4tj6z7FGFpFxou3iLJHg8RWUPThy2SCdBvJnwSWJcXN3vbU4o4rf4dGx",
  "key11": "5eG5HkxY5EVNiQseEmQAgJtxc2XtipnPEBHm3LH3j9WAudxtv7yWJ2bkWBZkNUxGVrHJ157yeZE88UFSfgj1gA94",
  "key12": "y82u4uUZ4RgZPJy3HthwX2BnUyBGJG8TSYhCfnxUyYdTgYa9FBE1ky68K69XQKknFnBb9XzM3EbRXLoBeV1EJwv",
  "key13": "FViijHfBAZybxnmmrbC7sAXU878t6NCf7hVQmGokApT3M5d14CjUymeQWCL6RtUjNB3xq2Gf4syfwQxuxvx28zC",
  "key14": "MhRJqLdJW3BfsNVGKeJ6ixPgrLLSQ8BbQYkCME9PWjpVT1CjKP1fT2ipn37o1K3SXbdeof38EqsKFjvGMvww9JJ",
  "key15": "5sK4TPx832RPr1Rxdsvn2Ge3q81kmbWuGa5LxJN5jvsFHPe93DGjGxgnsLw5jjo9jaG9v4Hci8dcFKrXDJcL1oqG",
  "key16": "5YkvkFNtTTiozRDYzPmvjBWc9b7MURrViJRJ6wx7mDd5ToQ8b8NJA8bFp7xZ9NnBacnV7sgyteAarPWHTWjE1sLU",
  "key17": "2qT6xgPd7tmmdKwXTBjEJbAShCpeTei1w4CxgST1fqNKygpcyHrstY5Nr3No7XZ2eLEcRudFTqhiZvNenCv7mrXF",
  "key18": "2JAS5YDbwNHqwWviPz7WDqFDNLVvmG9QunaKAAtVKKCyytwhD6Y548bhoxAGUkX1fJg8hXdPrRpFAw7duHBUBKSE",
  "key19": "3QrPe4zct9s5SeptQBc4Arb1u2BCqQiBVyic6WSU27TsSR5F1Vsuk25KJXqkoJFX4P5HxriB9MPXCM2UjnRtMWeL",
  "key20": "4Ys27iEd4Eeys12agBnNcobdie646dFMkML2Yka6BnXQQv3dbvuaAtrHbXbNU7BHjCHEQdBHMj6VC8fqQdh5sw21",
  "key21": "3bKMhfdbVyJHUsV1ZHSNHL3oMYSn6enV6NRUyXf6tZFv3X34iMKHLK2trSuxj5U9zDwPzL4Ykm31Stetcjh9UVdx",
  "key22": "4MrxVtgq2ywSsE8C38ui8Afqip9XXigJvwhtCskKtx3esZjYihJXpAsTEfifPRMgZKAXJtkQn9J8X5XdexTttJkm",
  "key23": "5gaJC8SSy8uWLQozxeRi5GR3LuBaT8tR9cEb4P2M2KxN6eWMntQuRJBKy6aTAn9s2rD6e7yW8EM5UsJ2FkMteHiW",
  "key24": "2CTZPnLHrtc4oRANgjBaoyUWoXSLwjVpkYBTdZpYUb6SxdMvSSTYEHAp6Cf21cb5GEZGsAiueKt32ht63EQZcw7L",
  "key25": "JAhp9n1ah4gma7TLyNBKc8CM7QLpkLtXE37h4CRJSjWxq3YqLtdPoqnfXhf1WpDHoCyZXUCYVq7hyDDMsdPK6Ge",
  "key26": "hi9VfAfKdXmfs2jK6E4PYcJZYEKpaSdAvLJge3zmfU3WZGSTwS6PK6h5g177ELty3fry3mBaQF7k5xUHbcgKfVF",
  "key27": "27Kd7zPNHXSUGA4daUAycQndQmS8WgZWdE5gji5Q1A86MMgH6jUHebjGLZv59uTDxS4rA9EHvfZsmK7fS2vZ2swE",
  "key28": "AhNFopUauFzmbC3ubjoY2Ny3wyWS7zT66pvGhGMfn2ScRKmjzyk7Cz5zfn2T4RgkLcE1c4CQqTSUWNgd66LBw28"
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
