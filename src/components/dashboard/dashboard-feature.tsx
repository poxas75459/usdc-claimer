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
    "5vkF64n5KDLuHCnJztqQgLNedd7qmwnBXbQ9ySjkRR5jUv4ZGQ7TqbPAeAySeUsvEDKusYvzsdHegtWKT6hwcjRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqAZimivDCSBqCR5Zcjmqf18DQha3VF9GPAT48VPMSDBpxTkXQPDMTjRDX33o8YnoKAZF7M9FjTGpzxwUTKKKPo",
  "key1": "5RHGZbdt1yovBe6gKwSTtFsssnDq3JFc5G6HwckRdia1uaY9gZYhMvc7bHYhcKp3Rbayp3TJkLctNgw4eqewf6QK",
  "key2": "3uh6gXLKPsmYMSGAeTbMaWhrY7Zbvu9xkQXroi6UyR3uwPepFgyhA5KFQqo3Kt4Jfk4zZcTb9RGZuB7bhPe53qBk",
  "key3": "3yVhRQifnggwWWRv7XzM3DUpJcojDkezWpWnvhVFZFvgGZvAQxAUUKHvEGJfs34q7c9ChkPsXHTf8cWWYMvCTVKY",
  "key4": "39Qn72VuaR8HkBZm9aAriNnFw2aVc4m42kK7mVbgN6QnbhqxTp22MfGKFM4DKWq2GSFXJrWGUJDxJYgqSsF5Pg3b",
  "key5": "R66XJ7Kyo5GTxsuEUrP3wasZLLJ9WZLrNUa4nvChfW7VfNX8Uv9nzyX5Ma9gsQZqTH6y2GrhU8oybvsy9qvnzKJ",
  "key6": "3BjpFJLvZCxCzcL6x86LUzSyYTTyawPj8w8aYSCQRtRR9AdkJhjMzrzsZKhEHgWAY9FoXRorJcfjoWmkvvo41mVk",
  "key7": "Lk1UHjmnDPyzWR3ce5RuKX26MLv1zEwymBD1LLSwAHu3SzyZt4uRtFP6fSFQYAR4kfG8s3478eoCkndUBkQ7HwS",
  "key8": "4UuH6i2iYbqeEbE6MMCLwexfdRhDBcDDXAF4EmhYsiEUvyXBpMwqZ45SiF4WkehUiCtrnw6Enz8GoFGfHUnVJmjf",
  "key9": "4iCw1Uu23BDwWufkAaWuWbeBbJWZfmacxf2SKoECiXtMKa5Sgh9JBgkiLCCRHshpiByEXMwiDWB8iGWdbNcC26oi",
  "key10": "4rbMV9RVMNbXnMVXs1D35SswWJZxjM66jTYTqwMDVVaeUA8NNhRdkMCPLXiZeCWCcqsPVXPyifUnhjj9HWgLAPea",
  "key11": "3q8P5vDxJz5Yh3aUYRtGJn5afaCH1S3Cz83zPhvF6JRCkNtV6L8wGBzQx812YVt4Uq47BrbTSHfPuwhX4iHCUcji",
  "key12": "3MC3n56CVZ3PouJSv1VwFa1YRNRVArQW24x9RkMhkvHdkcSTCTNxvxRcbomyBWwXPUBS9BZdA5HsASxT7Whj1XeX",
  "key13": "5pZYr5doZSuBJ4pWSiRmS35LZyTf1r6a2BfRAWZL6YAgMFhH11xNKTiW88jyAzvUYEVBsNZtJMbDzVkKfCaNbz4u",
  "key14": "3GwVMxQbheBUNjhSCo5YahSvVHrEfm7c4q7KRENXuwJ3hGv9dZvtuiPZ23afWikp8cpmsV8ZTisxEHwKRSmHY2dR",
  "key15": "2icLWUXbCMM8ZJUTer9AXDakSDyut81TKt82fpsuTFjcr1UDKunmdRn7QFq8Wger4sQsE4qPAR4Um5FFfjH9abJr",
  "key16": "2jxYJ44vfoJgjafdZiMZcjzfLfuWZ7hYGkcWkfNAUuNA8yNvFuQAZ3fH2HsNFfEh3giYwZENqN3azbCc2UswfACQ",
  "key17": "41opcu6bdBMNbVySUEHu4vVxwAiFxHuBvUGyunBj9bu3g9GtKuZobuaPUSRPgstXBrXzNwJUNYSpt6pdWQdCVWed",
  "key18": "2gLwXFcXqEJBgKhrkSQGH23G2iZfueyu295m6W98z1sqSo8tUgYQaoTgMgMMjQdEMpGtdtdjHngmEoznoiGpfWHm",
  "key19": "TUzjVc8fMcfcH2sJukz9ZKemsxu3XVZZSHetzfFbSSLss9aDr5VCrhF7owdndDobnnvEcM2RRh8VQLERazf5G75",
  "key20": "3oW14Gmv1NiWyT5UZfQQZQmHXHnppYbXa9ULcv33ot5gr2hqs3Lk5gk2qkgVnXqfcdNssoFj2jYZ9Z34ekdbyegW",
  "key21": "4Aw99JGFUbtwuxX2KN9nDJaLc2D57tumeu8bwLmRncN98VNWBr4XFr2iLUmiGgvbgAwj5GQegoYwhn1vLb8nnwVj",
  "key22": "BTBZ36CdAABvBmyzkAU81h91YnjXbHkTCD5JQe7LgVyrMagchCGYxywAAAQiw41VbsREQntyX5GkWVqru2ryzPg",
  "key23": "2Cfs273gAg1oHvs134L5jnndZsaJET6Quc7iiwq3TGzNLefH9JPRr5Ayi1gRoyWGX3eeuGuHohygqUyionKVTxRX",
  "key24": "5im1Ah2iHnQxC9KUrP63eyypw2tShtCuiBpeWjDAsNJ86EknRb73XQWWaK1zwHGNiMnWJc8SmrqBhenXQ7UoFKEX",
  "key25": "smW7ziod335aGZu86FFKhqjbdagNA7X3igQsmwJQ3WaRLcWi2ypNeCLRCiXNYtXwgA21CxYLzLxj9nmyXcmp66c",
  "key26": "v7PSBei4fsohLcCsPr8pxPSNbzATxiTaBqqWUMy9rZHABzxZAib9nLkUEQLuMt7bqhnDLVJccokW9ZdRXUmMfhB",
  "key27": "3Kkr1ZcevAHSGmFV5z74Xiefm48SBuVFcopziFEKQM77BLsSzB37R9VAm76BR3sZPXvTcvRADUZVVCCkEM9gfhna"
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
