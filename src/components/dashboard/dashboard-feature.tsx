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
    "qsKR7aHeSqhuspAtDiiP98bgJdJwvZE5b6MdeDREDtuweGfowHthYogn8ddjiFamCD8XwYhwUSD7dQ12Py4Hj97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ctoP29dSYnX9Loq15GLWcwWLk7SXA7mtumUhLxmzZsJGU2mEWdsoeqcemacDcLkmeGbbBAUSiJaPdd2mp4XY9N",
  "key1": "4ApbuyYzjvSpkt8GXx9jmsgs5JwVJayhn5aKCkDgH5t8nBJMuu5cdQu72mTnKsuckNVFQMcQru2ohcAJpyynActE",
  "key2": "3nJGd59hrgnkZ4NAtRKJb19zqaJiaNxfqc4gvrYs21pCePPiktnnfiJ3WsXuScx3AfSUTqM1kAiz995NcG8ByRXE",
  "key3": "4TCGh88rZouYRxkmmFpE2fTpYcUmGmKVdNPzkxBEBo6yXssXW2hcjjXq3DmgwLJssLoCsNxgEegCRUNVkTfoW9iW",
  "key4": "2kJeYVKN7eNKKZSaXVGZkPkMaySjQAMaaghdWNWd12ca8AiFKTS43GpxSw6afAog5LfoLN3ZxtCWD7SFuazxQ4K4",
  "key5": "2TBoQkHCz7yh4NAJpx23otAh3jYVNaZzkuW2uXzdNZQDXSeS7F7uD2WL7W2thDbuHjBXFeMSp6h9noue4JufUcWw",
  "key6": "4dNobVXmHRKHdz1jMvX4urdTb2spZV6yeg1k8vExm373tgW6p2iT4xV4ZEDUw3XkhiKgkmMRCCANPsJgW2z3H1vu",
  "key7": "2rzuBeKLJvN9DAZJPqqJnjDzCeU7HNPt2jjiyJAs71ijwJfcLGVYAvLaf5AdoNuGYQnevWnVU8ocRXbCz2mLAMNy",
  "key8": "3X91s4i3XA6o2AF6sLzQvA5AhxiWsSpsZoUZfQ35BJGJN12iVrB8Ug6JXK3o1h7Hiosr2ZyCcumFZigshNbr7xyQ",
  "key9": "5cwM4JsnToN6CRctJuvUp5gyZVCnGkhHthzyz6DsmT9Zb4boapV9g2QzJJJ3DUx8fs6g93hn7cANwKUejguam9RQ",
  "key10": "on3Ard86Sj2X4MZ5czZ2xk1vNFc7ijEhNGENRGHcawqoFqDTKacA8qKotKEjYFbdd4jVyk4j1GKFB4D3VeoyzBY",
  "key11": "qTKJQbpSHg9zHkrUFk7Bhyskp2ACbyVyZ3bA3CdKB8apEyZj6LTcJ6Ta3rq6tct7EeV9U6GZuQ4ZhGgQd5Tj42N",
  "key12": "4aKhVJwjwriKozZKX4YcayjYMgq96GFjaaAnJENS7aRkLKu2GDtgkQwsoeccVAVQVAVEgGmiZh3deyJcUX6bHgGy",
  "key13": "E4PEcfwUVRcW3jVEyz51gMjy8wssji1KYTHccYRbXXtgby9uqrfKQ87TShgYwmb4kRBQECcsNBtu7vesHQZKoRx",
  "key14": "54Vm9VK628mC8PrPLLJgeCCK7GUBivDUm7WBapfGqM1wtdpfeUKG1bxAmLzmpahmv4GbXAGZVLjY67qE4AiaEnmJ",
  "key15": "64eteMdFJyzuyKAsEUxc36B5gwqmxVbadDMFmaFPHoVEoZJYmD7kPdXDMFeqs83kHNCV1F1gUu4MmkGYnmPQmv2t",
  "key16": "5rZDPorBDi4RxCEGP95GrCCD4a8bm19msvy6NNzCRvsWp2WSm3GGG9Fa59WRhytwkY9pGftBumZ35hTDxS3krugt",
  "key17": "4TndmCEA8q66bzm51Df1AYzpNk1PXybigoXmSSmWhx7ta4ENFnUw1sWVxmHSqG1mdq15CH6MjYYvFw8Dek9XvVym",
  "key18": "67P6oWQ7xEpXDCki4hu9p5FU3GNMY9MW1GgNnM1yf5TF1EUyhepmD4QXTL7L4iDWF1gTTFiENF4yKMXDyH2SjgFc",
  "key19": "j8ykfW6gNYukd97egxHeC7q5Nvmgu9SWcABjSd5MA6ifYUL56ZPFACQ1gYkfuDJNC8ZgekEosg7YTGW6HtAAc48",
  "key20": "4EUV25GHPme6k6h6qjiHCUYFmPb5ZzZ4mQDFCJMRWn27WcW2JANBUfgR6X7e65pbeDLTjM73zwJmWCn8iQ3ocY9p",
  "key21": "4Vu7UKivMtZFeYH58R3EBD2uo5URz86F4yAuzVVChdQbRYh8EfAUgxUDyaJcpm6BbzswALurq2VQGpMuqrr4Cagd",
  "key22": "3egrAmBDEUTfVfRW7ZumnmYFX86KpUHNLuwJ7vKSMvFSkqxQFpvg22Kwm5MvmKgVuqG1AX41Rn67zT7v1F8eUDip",
  "key23": "1h7tQbM3niPYMd47eKaUNrdE19K6ZmroUaYAZJZffGFyFacUH71KKmeA76WpCjJZ8RiapgYw2eB2fMteAM9zuBK",
  "key24": "4A99rj5po5eKJFXFmviQxUyHx3ezARohiHE75RuNjRi9vc5iNEeoDjnWdx4kAbX5wrJc1Dnr9D46yJnY33LWFwi1"
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
