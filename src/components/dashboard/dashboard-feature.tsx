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
    "5XDmVondSjtn49ocwGJq6b2XVwnTtgJyLwW3Mabm8GaSEwPQKgw2jU68rx1cdzkNtisZvU5mgDtGHLaLjFwc8tPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUiRVgPLg17LPe7E5jzFUuMHstchqpt886qFS9uGY6nFZsRdBnx1gxbmAcoUoZ2JCvKAgec239C2eh9rdvaQ2gD",
  "key1": "FWrUxyaActQdE4wJ89eUuheXbFxkgo78iGH4AxHVfzSaBjwyDEYwCESpeXgqe1VnmPpwDR3L84NKocidg41JcPL",
  "key2": "5PZJcb2EqUtXJX481xcargJ7hNQDXzr7SkgHFJyLisHJFQKHSba4PZxePqo2EUK8GkBet2Ntrwf6UcG3KvRfv6zN",
  "key3": "4ZNzEVRxMXsTA9EKqbyNQsCRPKfVM8bnHdFYqqAyyEfN97ZUYsLfhKYHqXM5jvLdQXEZjAKaa6X3Yj6zWQjCtASU",
  "key4": "3qmRLP7QiLx6jwwo1LJqtgCDAZe4vBRBx5vgsChX67gTys2dMFJtQnWyiPZRWf7MYX6bjXMxp6skHpmdcgtfXa1f",
  "key5": "TSSm4nzfehMYWrxHwewPT5LcXJxh1yTEUzpkVr6kJas1k9xqw2iEGDhkixCJpPbkEXmG7nHtuwi1mnTbc6iywbA",
  "key6": "417D1BDSH3d2BE3CqBsDxyoiBHBHiUa3LbaMacFTc5SieVdd32jXMZwG6L81j3iPTwZ37dXKstfsDyqfn6N3Z7Dj",
  "key7": "VXMHEiJYR384rV3skzvNCvSkkvgtnz45EX75ibAvRp9aqN8BffutXpVJx3aDQkzFrzBfZ9EyYsvqxLpL88HqsZr",
  "key8": "3eYmN2aHiwky1BTknmxhUFNFYyWC4e6pyK8TopFEXyjr4N3wjp92CpGdLAr1jnKwJBbtoKpDnZ74XrcU44ELc3Ja",
  "key9": "23369BX4idM7CPrfmSehjKB67kRHrJ2rYXy1kLPVvo6QYkx5QWneFAPZdi5DmjHCYsWhe55bCDodMsqW5QAvw5aS",
  "key10": "4EtaBriVqK9wEPg12fwYsU3AXps5Fofuj7zA8oSG1gNY5Zh5sGs7xiJrAKWFAwBZzNuBB1HFFHfFytvF6ZEfFCQb",
  "key11": "4pq1mNBAfUXe8buqoxBuyPqtgGohdDXAUDH5zzY1F6esbBZgavgPoyR7nRproCZvvC9tnepeasoyBF3inG7tWRRM",
  "key12": "27NAQ67NyLHjobKYtGvWMd4t116YnjiQLfiUoq4G1ZuWtLAwYkn37DS1g51e6HbfDc5Laofv8FMyHbzDAHiBHcZy",
  "key13": "4fqVeCi8rav7Ypj8zXp9nRkz9MKH7oT5uW8eiXN72NJf7uZaL1MMYxb6vHoFaMDrZ9acYaBuJHVUnXRbkbhDEYye",
  "key14": "cWJJZswmWukEt1AJMhJbGTuSm7X7BD1JXAn3avHDNFvnbqJSEjc2axNdj3uVSXT7E23gPmegBRdNZuX9yad1oB1",
  "key15": "3KLrE55iAZRit9Py6LoK1yMwcLSFmPXG685NmtS4DEEetvPgLbpwbp6LZfN3aK4YZvuLZPNNNmaRzP6bsm1RwHkW",
  "key16": "3qUtCAQkSFYKb9zDeC2BLWeYkV5kpuLxwzFnRNfBysUvwTu1nWiz6xhRrGdZLKZQwHCmD5vBQsC57GPt157j8CyX",
  "key17": "62B9D3D4RUkTEvchSZgtd9pzu55af2GfokWm4b1ieDcigeVXQ8WmbzXDFYz54mj3u7te4iBw9ukea27BZDXQXoRP",
  "key18": "3QDjYcfJHxPpaV2h1jUBJbB1K7VhSoFPQ45EtpN6mE1H5yo8hanbMt5ni6ZU27kAHyhPmRGPWiX6SbxVrxnTw2Km",
  "key19": "4Anmp1HPZ6x7q5MXhceSJoyocZukcz7PcscDvz5GW2GbUe47zJXTrA2YpvEehojoYWFmDiZ759NqD1VYbEdzWHCd",
  "key20": "4P2Dcj35WxEJB7va8L6YG632VL96GUSZpPxuqdsxfkhuowA5d1bFELtHGuwUsRxQzJ8GaNZiHSLWtye4MtAMKWcs",
  "key21": "3krxk26QXhDESa3y2NrpB7AX4mxKwEmthCSQ8eAXMLbBe1JxaLMeEM27zx8kJzC1r6cWad7qdfvV8eNR14gTyoow",
  "key22": "RPcSTTy9hkJnzr8G7iEzitHTxhJsZ5GQWFgrMtRjw7zqwqe6DKNPxibvCVzrV6CJ5KxcGTQJTXc2MHx5nfCXZKQ",
  "key23": "3NkF5654LoYNnxrQHtfD9iiNGFFsS8M4rnYLmi6Vx2XdG4U66ZaXDc6ffQGfFREgKRrp5esncTAQJcnq1zXK21R2",
  "key24": "2vPQmcSL2HGM2yosNF3VmAM15RaVUDTpSmY5E7kJkGdCuUpC48pH1TxVRSuc6j3hatPYFX18VEueHxwyhmbbaEet",
  "key25": "4wngmKsHmx4WW2R2FS4FULa36sLfP4SoK8yHmdaStrbT3XK26KAG1KKXfRM5zyp18XWYSXfAo9zBNQ3AXHiqrtH7",
  "key26": "4xtLX4j9axYqPxWYsyW1g8xqTwivmvYBnxYLTnC22v2sjhojvUkKahpK3kc4D52mLtJ61dmqHJ9ff62yEApkboT6",
  "key27": "3PewwSDuPNUQcr9b2EAJ2pckvANwQ3EmCw3QhtGUfe885FHfm1gVa6uxz2rDzSeAYEbzFZzBZA3KzU6mjqDqjbkE",
  "key28": "3i3b7aESgnc4VBMNnMFKgxs3hJDqX6sqTFroxjgHq2YmsaYESKTzE6W8UiN2shhAVBDRgWaE3Ck3SFpXMNs9vVkj",
  "key29": "3swHLLYohE9u88o6rxgCZqHtoyfCay4mbq95ADRS5h3XGnoivPQaKXB5nC1ukceT4VbeG25qpsBNjuNzPeRFMGLU",
  "key30": "3c8mMhQ4Y3Pkzbp9hd18nQndZ7WCzMNZ9YpuQ36MmmbrQo87usyeGm41EYo5Uz5ibV5f34WSupxK5HpBfUjhkiyF",
  "key31": "4eTGnLsh4d62GsjYdVpLFrRCDbBnrxGnsvMMiVUagZhS8mVABC1Bnkv3mBMdA5hCeDrc8QSMUM9JjuPgj1VvXYof"
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
