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
    "5SBRE224xJ9XdAUQFcY5JZhJUCsbdu5HNvaQAuv3mtT8VakifneZPrjJR6zJ4LSYcZqskkF8PrLxNZSYvDSVvH2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nisCHTvrSqKGUiovZHoyY3BETC8kgHrTmcjgkmbKUBD61KmuVd6PZDRgNtHHrsLKH1skFrQsZJzhmTs6tTYJBGF",
  "key1": "2pdfqqcNnqCSnAxvqEXk3XyzNfAAq2oJm6yg5eLhQtsxfxMte1VtYD4mdGHq6DFsn6BAFxebEt9aKNoT46cLXAPD",
  "key2": "5Re11tuwhQFdmSsyw6ndVatSkp4JNfr4XM3y2Em2PahtUXw8zE5iWdvptHqrAgQ9qpHx6gbGaJ4mqBSGfQi7KCs6",
  "key3": "EdzqyEC5L1F3MKtsm6xddx2YfxdYeUqYXsad273QkxJBWD2ukqVy76rRA5i5QBafovjoj8oiKrQSJs3mpTXpVAw",
  "key4": "2FXf5ZxARhLM5rgred4R9tpkkG6D7jqRLQdYHbUmWLjkH1Ma7h4MBCvGMM68y6ct1xRj4mps9HN6FokYQpBTfEpZ",
  "key5": "YLoumCpPsG6znBQPac1bVaYUtYwxnSHWZBC6215EMYM3AvopXwGZDeWUn2uNfWYsNWWKnuD18TzfadytZQgp1bz",
  "key6": "4a7XT5VYcxP3wMzJYK2bmP8Rhz38JCSXuUf2T4mavq9V761rHfQP1wnKhwJnqrLo2AkynidGDVbbZrk7jbeMTjhc",
  "key7": "3qkhAxr3knssi5vKyBz6KBHzZ3H8qM7wqKjahmfkLyiLWJFBWFVfhYLJMwZZdJp7mhXKeeFVUtDuKH8KShTHbQ9H",
  "key8": "31anoJrEMWguYWhQBxqPZFZiD1uG6hhsoWkbTbScEr6z4iQdbB1HRAhd63tDkLky9AufShsTSzPdLMviwT3e9gQF",
  "key9": "35yeN9K48fLyw4NBBvy8rzZFYrDZSNx9SRD4Scv22sP7aJ6tEzgCiSjCtvdf3gggVm7nZW7JFSHrVv7G6Yj6Cj3K",
  "key10": "2k3h4GBvm9E8WTMuVZM4ZShARGiqUyXSfGhjaEaS3FXmcdRnS8x8aRxXDLEBWLc3Rdm3z5Dp6YpXfnkjJaqu4BEx",
  "key11": "454kPLqbnuEGXsNdtfKXScYtuAxHS5mciUvs68UvndkErxzjybVQW4E4bgXuv15esb8bWYVQX44apDCgbP6JQ9o1",
  "key12": "3owQbiJmJBcxfbreLoYed4i6pfQVwG3SrFmEiKrtqyaHooHhsAe4AR4E6nYNDe8DhTNAuRDicCJq9zkKPcoXTGNQ",
  "key13": "3ZF2rv5qMY1ySJiUKjenpeUWDAxvTKWD27vKVREHcpUBQiXsKSpBZ2DHKWV3tPFhsMkFxhbsp62XykyajazRHDFH",
  "key14": "63r8y9y8xiq58uHbsnU3LbQuw8CXhvqjc2GMSngxLNZjThkLTN2L2k2x9JQY3Ev1PbJS3vthc4aeWFgyCdMUdSxx",
  "key15": "3EZh5QKHMPGYAjBMkFVGBkxCo8VBRht2iiHui23Q1f8BpQDyNZTZy9N7b9AavQDkj6uidALim9c2YLoyznoLQ1u4",
  "key16": "3kBxGTrs1DySKccuyukZUKARa1QDgXmdnvKbhP8i2nsMKhtmfCDcw3M6vXvkUW6CyUBDSwWA8SeYMdwK3ZCKFH3w",
  "key17": "3233x4nyn16sUYMLSKkBpSYzdTukVHjJ4cVoeFfxQyVehbDDFzmptxRmkuHjYzoNx8GGPGvtucVYba1KRFVH6f8H",
  "key18": "4H8pWyoFM3nePmLPs7xzbbRtGHXht4yhLrwLK7LfoWfkHpZxVhkm55wyMizht2oYaTWSWpa2dibjTQc7HZHArkQ6",
  "key19": "3E5aUQwfYHrQ3V6EvZdgb2MWJiYXsP8hHFMKQgL3dKzjC38eQz3SWRE6avQQjHXFp17z5btrB22CQDnDYt2mjTys",
  "key20": "HbCiN4yswTpucGujCfRKxgH5rPmky333wLMFf5dxTB44ftsCEUW6hcUTWuSShgkaXUFQnfE9k3R2UATrhcScsMx",
  "key21": "221BA5zD9qXm1rwBnbbDjVeteB2L1KLq5htYHm49xYsfaHuaWjjVsehELNtqbBqootqg8NhUpFr67FsChFywvqPQ",
  "key22": "5Jh1RHyyKeHUGcEC7oxMS4g8ftbCnkfKw3t2cGKRmPqVpJNxCmA4SmsT6AxsNe8VuTCbYn8C93sZHGrkTt7fMAYr",
  "key23": "3pyooeYpkpueFqz4oXk7VJWVWtLiCM2hBJmfdsaa6JFbRdw9fcF2C7aFa1JudDd6bxxtPYPH9bL6K7jXeKWTZRXh",
  "key24": "4BZVdifQfgJhX8qNvuNQk3N5CP7ZtPVaG4BQQS65wen7B1kSMdRU8jwbroikwNNrSngLdQeExX4VFyH6U3bZU6HB",
  "key25": "4HUqMvSAAGdBAQ2R6Qb433qhsVE6ENPgeZjoUPFNK5bWUS9gMd57g8vAEkYmjPbv5gsmTwmvcKRU6mJ7duKgJLzq",
  "key26": "3UgaYW8L9XzMjCRksVvjfGE2P39PVNQyWoTxuCYcH1VyLWeLAPE5dqeQZPnNYJqmd3oy4YmLnipbuBo5nQqGhwGh",
  "key27": "4ppSZsN6gLV1RhoNj7Pe3MCq65hJTYoLVis6TDqe1oBzZWwbNNhiHmE882hdyyxbh16BMHoXuaTKnF2poJawKM26",
  "key28": "3wjW5ae9Rc17Rn4PGTqUVdUn19wBEF9mBpT7XSTKDPSVN79YVmrWEVKiA7AQQdgeeu8c7ixjQkDTk9DHHCqDDzmZ",
  "key29": "2dvWicapfjQfnwWM3PrdDbVhQAWmwm2NdnjhE8WhpDvbwNeGfFzdgvGmCyURFyyNxa5ssTomHRw98FSbzhTVMpLZ",
  "key30": "4BnKRB3DBCPFn9ESANLY5kUDnMRFn34VVEA9MyZxuFTwxuArLjnUb4wgQqnA4P36oVb3Hgtsy7oZNpBYUcFmnLqz",
  "key31": "3k841eAdAM5uuenXVXLeUo8J6XXctaBirj4P1zbFmX3d818HTeUhyL9bSgZ3PCRo766n71XqCa7Zh4D5rsFBqm2Q"
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
