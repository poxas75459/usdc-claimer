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
    "34mUW9XenSHxXkssmqUWvfqY5J1iYFVQMXYAfPsQAAXzR4n5Yg8VPVjEbR9kRguo53KETjSfByz3RrV4n5HqN8j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLZBPJ76NirXPsLWjYd8ppnwymCaze9EFWwsdkwHUcePu319XthRMDaUoiVgavwzH1CASqppDSSzaZjbpM89WRv",
  "key1": "5VVcN4qxbBrZqkpm4mzgWHTQKq5n8e52jb4uq5pd22KS6U5J4g6ZoeqehfPJJetcKnyYNVWkGrx6PhZeM3UoGY7M",
  "key2": "4wtMmFbr76ym1Gn7EJTKLu5D11PVEcboNTTSCiGuwpw1B1nf8rKX4HA8jpovAaRbGuyfSy1ZvoD79YT312Q4BVBo",
  "key3": "2Eq4SdkFj9pjw2vSZXN9Ktzp4PtYijbNAgnhxER65GDZ6AD5FHZrYriJ58fRip7VnE7HRssFY89Gix4LGE45mMB7",
  "key4": "32vM96uv4LGiRhe3GbFQxisphM3DvN86LFF89sB41uYa7FWJ13WEWHtP9kp9tNMN9ZgRTDdpbrKQkTJN6Up8KDxk",
  "key5": "4uY4DHMCsXHnf2bivZLnp89XsVzedak5Dv8A3s2pQdEC8HJRuubWLoetcRYHLqch6CbJheWMw5Cats2KdwpnmNif",
  "key6": "2CMZb5nZp3fPvgKshnM9PxJTt96igeoYXQhYyaYtDjZVCnwEzT4HA4WZnNzsc3TQf1GD2jVQmVydy3TY748yMgDT",
  "key7": "6bFNVcHkferHAXdZsDK4MF1M9K1wdv8FjNPtuEh5DGUH5EA6rnJVnCZS7S5UHtbXt9Yp6CcE1jhQytGpU7xiAaF",
  "key8": "3Ra3WrkWQLWc7YDsEJ1drHCieVsidrj4QVNnsgrTuP1AyUQpesWeqtkje5VqaHCZ4aWjyesHvogfKdHLYDseqUrv",
  "key9": "asigrsfYnj3DpXLrX8YmukMgFf2urqR454bJvi9pqMHrsTcHtD1TZHhCbahkSY3R2zLEeBdxMm1kyAMmZiB63wr",
  "key10": "3R6NEoxnPjd9VkFDRifNZ2DQ62GsrrqZKk1gNg9ze3C2SCpwZAjpMEHgrur7MhftmshhShHEBh9ih568uqYxAPYH",
  "key11": "CqwTjSjssKkZDfY6v9b9x1Yqw78Dj2fxtKXoMA591sQb15Jj5356wNPELqojvWzDMmqtpdJhbarVktM61nBp6AZ",
  "key12": "569YPRbqoKJLoQxu1W4rVAWGoTmUUVXZosoBtBWCrZNHEgzx2NriDLCFubBo4ZH4GhxDuiJw3vuS2yv3XoengbPb",
  "key13": "3oc1qoCtAwAsEcqk42TTmCSwG8TB3gX6UxYR17hXVivgS7nBoFReXsWw8PqWbNWZ9nYa2ZfZTzf2Ch2QYQC8ywYG",
  "key14": "SwYedaf7CFqV334Kk9R5Fc44KRDoRT2Hqdsgu9GTxN4S8zApoXJsvx1Lt2tJqLy42eBnxtD2gX2sRZcdhYKTbJE",
  "key15": "2yai4bbXvjowXwrQ1KMSQSXkpGhJ1Qbtqq7zfPrPS5w2HJayEResqmXDtSLD4stB1mEzzDCVVq8cDYcKjQdUcq1C",
  "key16": "5KnX52jrLVdAsrN99erBP7DYA1qZQ2fFWEWx9mELQroDQes5mcd6FTx1exb99nySEqnfcSoWVkBUMeL57rqGEU2",
  "key17": "4zNjTrfZbf8dnftH4kSiQHB28dahJ92NiBiMp3HHjrQs8ySMEk8W57b4Gz7p6P5H2PKn2rAah95FDZX4YcbcuAxf",
  "key18": "3aQxvcYy1A4MX6zxQ2WkTAUTXyK73eu7DrSJAQxM72yhj4Rg3xBdtxJP9yoJ5qQfQJ98dd9k3Jtjp8SZ4Vsergx5",
  "key19": "4uD1SwortSh6keqzFzSr8zBHzjR7tXdtt6mCknguFWLRdoAPA8GkfAL5nSgrwzdz7hXywk9R3byUPidGy1qAFLXB",
  "key20": "5by5wjZGB6GCX1DzahGvAFVcwVUr7R7o5vXg91eS4rGqmsxGw4mu9sHKoGjivxBJoABLfWfALB9XUCa7RHjaJrXN",
  "key21": "2Tm6LirKJXosJUEa8Vi1mnDPNVXa1FH1nsH7FETGd6Ja6pci7LqjHnY2P6YpeLyZ2G5VWp2ryYhLfQ2S4ZC1pRtG",
  "key22": "33jF8Gxf6tWkKttbSDtH5BLgbFz5wW3WPgSC7Lrd6yVJz4eJ1qYbATeV8nGMq19K7L47F71qtPtbvbUstg6ebE7h",
  "key23": "3crEkqVnHH6jUsZbqZcHgwAv1YBLCFw8fNDL3bFeWgaubCgHfW16wxM4dNBK6xcHPiBDxqdHTTZprgDzz4kRKvRj",
  "key24": "4tXSvUrgEf1wSjkatSWWJma6SYawELmGLgF4khtsKQ8JGd3neQBsHTzbbxA2gDaUKqxcdDYWrcTj1QY4vemhxQ9T",
  "key25": "42EiHVhFmQMfTi8H9SUbivnUB6qcjHgFnchfvkviuiJfYCfWGHvLL72hKnBJp1is92LGZdkgyYoa7r3yQKznpqrB",
  "key26": "ERfam91aFejYczWbCbpp2Zx1EhnqXxC6gxBHD6mEp9CUKwbpJFWyjCod3ZoQpg57VLfpiiirjKZ3H4f6yBhLHdu",
  "key27": "a91yut3ZqSZ9GJePRVdcZKECbRxAwqDH5rpXXsrpjp1US3PVuL1uNtTdr1nvjFcyCeqAvde1GuAmjUu2VpW2tGJ"
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
