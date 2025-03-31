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
    "mNZEH9LR9TsyDHPRfPWHXjvH99YicTZF8DaxMrVMcLkk3oPT6PZUD6iKQV8pC2kej9QaicmFZ5bvMsGdGs3MHqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqWuU19zWa5cVGqns4nfimnGL68UfbfHkAzVbqfEmoYoN3Mtj4G58mtcd6cbstTEk38RtS85P2gKEKfA7Vkv794",
  "key1": "kwM7n2kJnqqW9Ms2u5twZ6VwYF3CV9YbgfzXEk9zaQkEMV6xVU1TL8EaS4VSLkctiJPnPPUM2BWJYHSYnPdfnCS",
  "key2": "2qCRvgU3r6skXDJRtCXpch92fsMVWXTXTZnTbNmKeFZMat5UCg9EJDWznesmVYr2Nu1uqSHExKK84DJx3Zh5Nbnv",
  "key3": "4moPkSAqSPWB1QrbYubgMBu7dyKs8buR7ejDkqj4cE5Zk95FbL8Z5Q21A8grLYSUoNimFvoi97VvgWQzwJ3zmsVi",
  "key4": "5E7Zv6f33pWTdNtNSRZeKb51ZhujnpfJRhALHkgQVcZDL5GcbrXdcXeSmAeR5vdfJCRHfqyLeZtYxM7FpbjUauoo",
  "key5": "453NVNk8r6cAg9tDHGkidmMDNQNxHA5yrV6SYeVVVVm3fVc7AsXkBi16GXL8jL9ucvFW2jgfahBDZFPzfxyvBmPU",
  "key6": "5xL221KBncWx9HcRRcXkTqwm7SKRHvibpbc3ZupKZ2mbAGL79ieo9WnHtfVgvSbBqKF1UmT4gbQLxis3MckA3qPi",
  "key7": "2M2rvbKKQY5HPporgQdMxfY14fBG68wgQRBh4Y8idiCTwehxjNQnCe7wmT3gZv4aism2NXaR5RPXxZavczkn3Py",
  "key8": "3WitkAvC59qe91aCWWd8iHUUuVG8Rz3NxwNjMcxzJuX2gwR4UtT2ETAqTt268P1eaexycBAYS8D4SVWrpqehGq2d",
  "key9": "4fcbyQtmBrZHfdPi34ua9z4VvcknPMEAxMgBUJoLqwmxrbi1kBhL9RZ6nKQZnWReZTNYC1TBeMc1v6hFqxDu14Aq",
  "key10": "2GZ5MyQR4r3SUyrQaeNTbvWQdYLu4Spkxbr2aJAnfZrfZ4iKRQw9MWP7kmPXE6Rov7cpEhqXNw8BeA3jwZZ3NRPp",
  "key11": "2k1nhqFgkxYdaV4hHaUuQe3G8aW6EjqwQ3EQ2NugQjDpsVfXd7cJSL2iYHS4xSRXnLgfepq2yg3zZymn3fMtzYkJ",
  "key12": "4QkxNPYa1S8SRiZMGX1ZYvgYBu4XzX4JYTQUUWhNHCSiSgTvZQubwH7CuDzWhMWM6ZhbUyMBvfXQudsBiFTPJTXF",
  "key13": "nAvGgf3W1QM7ezovxE43XhjWtkN3J1pREKPmmDt3MTnMHc3A2P4BteMPZeLwGsYpNzuZW6jPwogkpg4nFiwDPBN",
  "key14": "3MHG64dLnEN2JjVMpBBd5SrAXLs7RBws3BYCLdaQaC3BBfNXG7R8K24ADtz3LMXXzaiuk39W3WrZubWEnkR2iNVs",
  "key15": "3gZEpXePuSuqCZNsJd35sb4g84RMqSy8rJoUB2SFQpu1TZBGCRPjXguNEHpz8kE9fXA1qKdu8PMyWz8xwopfYWCJ",
  "key16": "yc5sofkLKEjKKg5FJJJM7wYkEXQ2FHTK61PyG3XeDTAKJQnieFyNfK3Q2FtxvooGtrZATRYJ1guCGWLXU7eXLtJ",
  "key17": "5uJo4nzP3MV8xzpE7jUdjP4BpENpoi8do965Qhh7wADg6A2Cy1Jczc3yQjtu8ys7VgUZ9JtuzMSh3mHqrLTja6rf",
  "key18": "rK5fxTKALJtLroxLcbME45tkM4zYyoBiEcy3yViTDBYMgTyUXw9LnDqu12zbiEzpJvLvLQXqQcat4jXo1G9h83U",
  "key19": "29JTc8y2uWUXZkDJQmaui8xKboNxQdQRLPozBvUmACueyfuS1UKdkr46MCbF6tRYanGRyNcaPDdRPvte4WhWyFBt",
  "key20": "mxmnzuiYsQauJ4jfmyrJtKaQJE4LvqfPjPkeCAnr5UWGxaRTtQxvTSVGxGHm5u9qZvNVec3qEXkAMfN2AYpszRm",
  "key21": "2Tg4jjZfTrKVGF7nns3JfBvQNWpBSxQ64rdjQTwz2eqG1SZopshxkMVC88F3HDMzni5xbd7Z9x5RasG1z3QXnmMT",
  "key22": "4QLte885UceidTxfQmuDuR3HNTPcELT2Y8HJ3kiq1gz8VnotsmPpRzgEqD1W3LTeAAaG7g3sFMSRfcC37yS7hGyj",
  "key23": "5r3EKfUZLZpvjVok6yQKmNHbABF6ueawQAbZ62UoBo1A6FqyA3AufXWsgFfz2ZQoBNnZycCjB864d1RFisNq4XAK",
  "key24": "4B81KRjE7GTy9SL6187pGJuP2SM3Ru1xJbWE2iAjj57YH3k5ethv8nbsh8Wg82MeK4LFsx6vZiKjZoeavpPmGS2G",
  "key25": "Dqm5N3WivoURMrBaomBzAjdRp4pj3oeHobV5BqL9k1ikFZz4uqexPMMTtKUK8NZCMGqr8VjxybFrJRbLVyW2peM",
  "key26": "5sUgjRFadAxXZthogMQ1hwZ38a2XtFLgjCF7ZL9W4skpNuBVQPP7ZB359DdDtzy3uY9XMhnMYqGxHAVRtSZ27o58"
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
