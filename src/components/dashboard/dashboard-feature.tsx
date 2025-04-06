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
    "Zmi6mai8Sh7M7GMbRLn9DKLmZJtap8svg8nhYrQK8YXxpnrJaK4iWjtpcgPBaJ9T7h59HnKUohp5JayiWtP3FGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MG4HEXm4iqxYb7Kf8mp7288WmomGgEbQ7P9LH9TG8ZwUTadqbU6Z2VXaXhtSXekFL2X3emBjXc5ijyFcRNySLYi",
  "key1": "MMahBBMPvRUB3kJJci8NPR7oDef9vcPGX9kAGsVQSrgP5JWdLEQEewvUtapjAEp1T8WMeiCMKp98e4HvheM3aeR",
  "key2": "2WMzGDfpSsXTeDAsGaGi37V3xKcLHZhUsXbgk46cMHUUf4emgFvba1CXTQWgkyremTtDVQ1ogytafDkgz3KyaJWN",
  "key3": "3eYcbpbA5EdGtfRMCdWaxQ9EWdn8thjscYvdGXcLvFv2E5NkWCsmuePhgTs9XvdBo7t82nZiNaQzFNsrPRu8dRx9",
  "key4": "31jc6x1d54dDVD9Fg3wVs3HcBxqEmYWtLbqe2h5PJRkSd2ZeySXJUxZ9FSgQmY2wYMLRfbSL7eUWchTPBWfYwv6m",
  "key5": "3pSWiDLqTnC86qAN7bvg9uUYAcnJfoEiqkxSGDp2PyL3Zxqvsq2GPhTSF3ccwcUN2tfxoenUBniPVE5g3mLWSQ94",
  "key6": "2psLsynPeXr7iuuDgn67LANPt9Q2u9gMFnk5ZdBgbM6FRSzWbFa4kKpZADbxRUcd6JjtdUJLoszuhNYsaBtMDc2W",
  "key7": "228m43Hp2MAzf8wLYo4W7dGMr1sj1TPVAEmmKrMjz65rdJCHtosmnwXLEChX6Dd9Q3QmYzGwz4j8dmy4vfoePXhM",
  "key8": "LKqeto68cw1suzdusADcysbu5an7Lf9NcQgbgSDLZpEiBmxuF4JgRyogQfb3CeB1aC4it8SHAQZpasyfcNWze7E",
  "key9": "4sigUrkTdRGE6b6FkB33KaLy4Ni1Y1Q6yAM1nHtCXBpsipudvZzcxMTEtm5wif8Grs9dgw7YF1hDAVbqqvv9hcyB",
  "key10": "5CDp6C87asV55Ho4LUKnb5exFY73kPvj5AvvfsYzjxqHP5JM9t9wv3F3mkvYRBh2ZUrfAY6dzQWDtncZAUa7eJrn",
  "key11": "4w73KWSjM6aPV4xifuHqeBY8cuPiKuQZu2FFCeMszZJ7Mxi8km22KaTihyxhbdM2pHyBeg9Yy3XWqAQqoxm9pBog",
  "key12": "2kkSGpTrEFRX1iY7oU4YkjLe9FB2ARtw5aPFRHJLkCmE7yTboGUwmZ1ek4drxY4AsQfnENQ4uwzyDETpguajU735",
  "key13": "55yXVVfohFHCGpRxATk59vKPPEiBjzNEfTYqq2X8PWS1kboDsJYoQUftw7vjwxtL4e6EQn8SfLRuV8Tx2qehqAa7",
  "key14": "26mFV1YrGvYjjGbCoSYKAncw53V7rhceb8i8EvgfUf85ycS1b6HWK4uzxwSTdhXonMmpYTTkhiTBmvNMstsBnQn4",
  "key15": "288MVearxtBRyVru8Y7HEK6C65RQuhRk6PsBc7xzP8B8yXZRd7pyz3HxbzLLx4GSwqgUMJArZQoYkxfSSTpqq4GA",
  "key16": "2E2zvnt19TyPfMcBPKtmsxuu91QdA7m5opJucNgDzKM2kMkXgudgtft9boaf5nZCNA3Eo1ec4rgzPJ39kwUXmv6f",
  "key17": "21WjUNSHQQRovCDqzhLc6RfmtUKmeUbBc9kPr38qj4EW2xNLME6aE1n9uGoLpnEupMrvFAVQSphe6qecAek9UNMC",
  "key18": "2XKNtzMqS2SNLpeAa1naDj6dSu16gemaCPVJoNEfC4VoJPhCavvXBJJqA1juytqyFhfY1qLb1Ayp3h2ThHwUu3bo",
  "key19": "5F8Y3ngMjifgaYyE1s3fMticpwXrXbeER9Syg2nxi64maFBDkFkADGzg5aschAwTR8NcvSx5S2rFEPFaVgREjm9",
  "key20": "5X1DfWEjfBdqKuuiw5h2bn9CMeaECvWi3meQTi3Fk8x9eU3qsTjd2F5T4KWaEZ5DUyT1cVRBNZbggb7LKsuKnFTh",
  "key21": "5hrNM51KTA9cNy7njp2dH4d3MqBhA7ZjLFY29uKXfncRMdXVzXfc8U8UXzZFoFn1YxbTofSQZNLKJ8ZczjzJLLM4",
  "key22": "64GXpAhe7ovWYgMQrS4YqBoJXv1BcFCAdkZNYPkEafss6zXRZeFfKJVoCFgGYVLemr7HtxN3QQd8wAMYYUGSYvUX",
  "key23": "5gP9FddueSQhDgTAXAxaQT692u31JhKJAQm1Yxxkc4kdRYn2q5MwQWuEfYv6wGa8XkmqNFwvScvGFN7ajDiPCg2o",
  "key24": "4zxcvajdYvmqn6fKHLRWURMVD8dLdj64VqkKgCSb24r8iDwYJdTfhngSC2NRSUSVh44jVcqtotPLsw9EPib1YRLx"
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
