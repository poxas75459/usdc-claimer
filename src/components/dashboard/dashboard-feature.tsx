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
    "4rhqHwTid6Wi6TE69QpjbBkJ7VdbbMZp8o99eernGTCvpBSeUcLcjptHJzRTZaTZeT8pJ4qY4yXFh2K1dgj4RDpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFmGpW8n7SBjQXrWD6e9HGhC3oXhAtYd9vyvfhTL3d4Zk56c3FVGfrKWvzj1UJfn3JNA827fdxwzqNQV3KgRaHo",
  "key1": "5qa96JxMVgJqkX9Bc27kGKfT7Jp4QoRvWH64j7vWZVsjGdPXXRLiEtjm3koErNtJXuUrdbmirPGu5heLTVjhebfA",
  "key2": "4oTT5qq9FJ7T1WPnsMckUBKhTeukp7sTidn7n6ssfpZkZ2WrznU6iMtNm8ZzimhS3JNUCn7dUg5qdeZsUpehRd3y",
  "key3": "51VBn6cn7K2joTTDSnDLCBXjX5xw3JgN7T54Dwzr1u3wqq1AWUZ5rWGMq4mTALJS4HonEyu16qmPWv6SnNG1T2pm",
  "key4": "2WtrUFQYR9ZzdeWYJH8TKoUPTRvcCqp2e23sq48RXpkT8jdHJogtuS5zNFfV5oC6ytrS3bXobEv5AuECFmk6E2Jg",
  "key5": "3xPnKaWzD3QA5Rw8UcbDtSebLykf5Xh8LFQSeMpwPp37e23P2fU39eeTvMNciCUiJvmyKfrYjov7XvssGCrD8MNj",
  "key6": "5APMSgiCX7NobakAEYpQWydrQijvjLNixKiFfqrTUDNavm54e3YEF17BQV136tNkLAQ9otxSc1uuviHN5jtAuenp",
  "key7": "48vxyKAK6gwjJAE4r2shatYBQNMME8VWXsnKGV78pn7PyMQArL14dFeiTaRkcFYsgdDEE7oakpc42FAgw9neu5a8",
  "key8": "2hsjVtLgo8iR81AgxcparFdXvVHzmxvZnLeLccLxHnB2YQRYikYVQyD4Sg2gSzE5tARddgsu5azC6E1zMfZBQRk3",
  "key9": "5GdfbWmgf7aB15hvkGoioCsubptWcVdYmEU9moyrjLTe2co8NHCDiQ23Agc8NLchaQFYvtuaLGj7UdqXoiSZisfR",
  "key10": "3kNBKfxdAHaX8c8MYqdiLQX1LDSns6WmzfQCgm5EZek3DGyjjitwd9Jwc2YBrRgY1Nz791pn9ahFtS6T8b1RGte5",
  "key11": "neWVvLktRodF1YKWAuPcThmX2AeRFNGA1KJwfVnZX83sXudpL2BwwpBCH1bMYF1F6iMpcUXu8NwtHgxN2b6dnJM",
  "key12": "5hVcaoKQKzgMYSwx8oRsagXhiBkQ4uBRtVPaPzssNx9jyYQfJn868fwHH1rcJtXZEFgnNUvx115c4AcAzfQNib2p",
  "key13": "5YRR2YG9hYgUukFrMYhGdNbw4MjU1fKQeeM6dLMAjThjp6oTip4yKP3KPvxdP4KS1KV22Do4e9UeQXKPLT1qzTQK",
  "key14": "2wruJ897Ve1Vm1iCSqW9LTJ6CL5VEZ5xhFuCA7pHsWLCBERBrcKugVpvoovdADoPP5FKxysHWt9nRE6atG5K1W2N",
  "key15": "34QLVEjiHN5Xs7GMSfnV7sh2c9A1XGw3FbSgRdvs7pCDMDyc2iVir5mbxWkaNhZ7ogRSaBph88ESkGuipa1QnuD5",
  "key16": "3MPoDDTgPYu8J16AyXm4SoKHrpFqYfdJbYc71mSSBhWFRa41YEXHX4WHKpAJKRZCwgWcnZWSmr1EdFh7AWAwL7NJ",
  "key17": "5FrKjrKmBjBZoe8qMB1Ftag8iNxu4vZY9wKY2rBKn5TSgUYZQoaxZ9huxJ9tKbbgq1th9Jw5Fa3Ka8my1VWKv7VJ",
  "key18": "3oVij2uzpdNAjNetU56NzgakGvW1rWjSm7saft7KMMiRRQBv7E2zhEQSfE7Bb6hirA4rjWbCRKAq1Zdu3KH9HBev",
  "key19": "5Er4rtPTqp48pxhyUh7fqXc9uRDBHdCysN4m7awcyi3HwRHx6fSRgcwKtrEV1hvoGUdmViMgh9uakqjqpYmsQY4E",
  "key20": "3yCNMBgdS36S6qFLVeY9Csf52wLA64xn3a6L1NRgZwEmaqbteWKndhoQXQ7sQzoxRWjwWdQuMAFLo13vzqqjrjog",
  "key21": "3mTpitsTCSPmw6eGojzQK9FeXuyRnFKCfSVCBVLkCXajj3vooKz4XWawa4gfwX126vhZq2xJiLWkeDvgyooSTvKJ",
  "key22": "74Qt3h3Do2fuJ7FP3MWmszcJQXLsQwXGxhT8i58Hj4AWjnBPEEP34Nojcex3gKc8VEfLc6yEZJKtJ6EmRRKBxxh",
  "key23": "4e7XF2JNkbq83YU7H1ziHdbynZkm9EJgUaKSqn8BxMgV6EZ9BdByPiCKfVaNRxHkBiaumhZQV6K6jo1T1xy9KC1F",
  "key24": "5x3rJoG11rY1HqhN8xDLodKigGoGwhUsP679APfwF7DkiVMqD6T9VtRBcgcLzxuirmXctj1bp3XVaJqacM1FJiQm",
  "key25": "5o66wE5MBQ2wR6RNzsQXnWZLM3tw5RUEys9nmZWiQHq4XVEFPmusdcyBFFUu4n1HHujkLVoV6pDeZDaqojd4JKcj",
  "key26": "3scwTyuYFWfWznzkBYybK3o2DyJjLsqxnrVt8Y9a9Yw2GVSf5o2uFVSHuBA4KmAM1W2MihqPb2CFwaw6N68zNq3w",
  "key27": "8jbaPHyUHMT3Pm6XcZdwH9e89asnKjVptWJzipNcGC41tdzB9Fq7FYeudvAgkUBYscKh3avbar25Tv1GV3muTrG",
  "key28": "4UmasiJC9jnhL3xQtd9bDDRxfqZXU3gNbeRKKMtS8tLwjmwQ1nd5ZMH6nKyDeeCjxk3bvd5ZsHY7vb7FSxvQr18g",
  "key29": "FFdsJnmQirdFbPfDMBQK77dDdXes9YtPEpbFGQMMK8Ko3ccsEr36whxcrD44y6pVpgW7nhj9HzhCoLPy5CvLBzh",
  "key30": "3goCxyLKkgzbQU3XvPGpShVaK6PZCUxS6kvV4KWzhuxMXy3gJ1oiHkD8Gv4pdHq2gPdb1jNniohymnmYkBegK2pt",
  "key31": "4WU2jBJ294W3du2UuJJKgJxbQPxysadxEy8bv6Jbs8CrSCJmg5j7XpA9Y4UmTFHy5omn56DPmwvydgxqZnAFtroW",
  "key32": "pTb3shvEs6zN5ShoYMJHCtr4ueTmbU5t7pBkvdrai4wKAqpF4C69GjH1vjo8YiWQGkkznnAASqyrFXHscYksaYV",
  "key33": "4AR7qHzRizGTpgF2KGjNe8GnRrTwufACBV5LqSpfX3ov1fnpkuFfQQAJFxVVUxJEYREG5GLTEm7oNK374NqgPbJf",
  "key34": "4C99zVsFH5byGwybmDesc8nvdfta6mgf5yDaNz7GSDP6MAWvrfQkDsZbPYnytfhP1sqJmXUT4DWQ61VuyLiMw7Af",
  "key35": "ay3ztixr1kmffLriHhzXTo6vn96LWaBen5FWnvtXStN2mtB4RhU2hZ4y6jTce7tiTWsjt59qypcWsk1xNWiZUJs"
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
