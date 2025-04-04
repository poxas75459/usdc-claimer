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
    "4HWZwJttuBaQftc5dFNu2DYUikq1Y7fdQAr6BX4AwQZufGqjjf63a8HU5SdonLxyrth2c5b3puN5jJbYxjm6GP9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sh3RzSRf5z8ejDZ2vodY8uhdmJJNBCuvJG5twPZM4apfMQP2XgvMzftUtqsrmpU7Nn2HhZtafsYeqH55Bh5Lvhy",
  "key1": "3iryiWH1XWw3nvWBAQsKdYpPhHa22tMup3BBGGRJjpnwnpaBhrxqASgcrt8ThvPifwyrXo6uQ63bGpGPphByYgBc",
  "key2": "5RUNGT9K8CjudJzqcpdyd7Et7h921id9nK13f6DRSXHUpMHwGUSicqioCDNRv4yxPrzXbwtB9PK5bE16VnqaQgGK",
  "key3": "2vn7dUqzayMU6c26XZ6ejwSSqmWm23K248nfCfLCpC8aEtk4TGYGsVdkvvUCqA67PV2YkaaN2o8w4Ce28ZnauaT8",
  "key4": "4nVpxoTv14oe1HaJpDf7kTxohx7ZCMjLttrZG7pEfynEDMv6FGdN1Kydyr6CDrNK9ZgWmc3AubUqEgZopbXStfR1",
  "key5": "2UvcyFfuf15Fq3MJAh7KUq6tLjnT1nAGETjf99spQBqXpYi6bcFaBjAnvq6psL2BycP7dec2vuvpWJjsLgKduxUX",
  "key6": "3iyvrxttRZEVrtrjF1eA1ceL4DrZoq78QQN6mTvrUrFc1W8VtUXxNeMqNLDTXn5uPVmQUp29N4k2tVBV1vxcUoNM",
  "key7": "5vbtYLsWV2eB3LPPgYuvwPxD792LJiUVEoQJYL1sb16qA2VKrYmiNq4nXwMmEfPhzUUtk7ZSWX3BdDWv7N9Lz5jE",
  "key8": "QXthC7yUFvpVqrQTfjom9xhK2YJTE4UTqi4Pkru4HuUuiaa8GykB9QviHWVSBWN3HAmPxpaLVT4bLqKGbnzi2CD",
  "key9": "2jWPbA2u78HStRnX5EWAf13PTRhXXRdkJC2hzmNh5DdsXFcDPpPBr1gRYoy9TedXzzpcjsByPQzMH8Zpey2Q7Pg1",
  "key10": "4i8Qcjg5v2JcAcPUYyUnPFWdkhEP57oYe3bCa4HiWfN2Lo6rmFHZfWDkGSrtp1DnFcXFhBwxRLFjdBTmFXqztaH3",
  "key11": "5NF7DHpU8uyDzrHjYxYJByaPXRsqAUhTS214DtfXxnsbtR7xyk5D1v9SkLJxH2YihNCkvXzZ9Kh8c6yd1yNsBU7X",
  "key12": "2uk5pD2MURnMLuesHZpQyoDSf4TrjTSRGGzM4hJoxaCbHV1f7URCGqE57A3iypGUdsuHLokk7YfhdCBWd8Pm8ApM",
  "key13": "57m9kkqGLyBbUCqMnnKJCagdz9DgHwBx9nJuHWYzyRY3YUaDMXTLpNds58nadMp6EBzv4wXkJ9uNbFGPReLu2XxU",
  "key14": "bvHAFeZTX95jC2FHfPYgVhNNKp4cHmnftAXXCgaiAVxmAp4wqZ7tuwNJkSJqhUvNnBRsMiRfa2WwhhQPfNifbBE",
  "key15": "tAG5r5e9d2xxPnEuR6TvfGAkugFg839dc4ge6LfHXfBKC74Ut1hUHkGcCgW6WZ2ZB5hAymvcqjWrSsoh6Tub5sg",
  "key16": "qYUgHzw1npJebcVphjMxVe4RDNQwuAKDiFr54jArfx2YpRb7bqej6z6g9QbDa36tnzaQyjhUcuZh3kf2UuLGWau",
  "key17": "EgJB7AKJcLE9J1J2dpU5e2bysFVquKRpR16PzpxWMCRSqfXPuuEBkXLoaLZdBZmnB8eyHAtzBBj5tnUUwwi3QNb",
  "key18": "4nyk7tTY4ky3NLvKEJ3UYp6vLoxEEvrQC7n9DJix2SvEKjgZ7ExcsqjdqzgyX9CLxXgNR416jMJAARhYzWCJgvLv",
  "key19": "q6sqMigWnWtkw8ntuqqvzKZUoQ61SNUDouyNn9whxmxvWAw3Susqn79LGPvsS8zUpUKTjq2Weomcu6AaA7foZDk",
  "key20": "K1tDtekgfRqCU3iDjh5aBPsauPgQVCXWduLsdC5ax3BQskaeGWdZ3CPaDHDmBZA2bYfUcS6o2yVFjtnksKJie4u",
  "key21": "5B1bB9JM5aPJt9fcP6RxZzhr5V84UDgUZDXqrUEddEryTDkMv6qBUpJL5maU8R9ydKBi31EA1Z3XN6so2LaHuUwH",
  "key22": "3EBaSR83zMsjXmPXrhGaVdNGdKMRmGD1NzfBDURStPxgtgUgieHtjc43EgpaMWFS3iHdcSftSJxTcwLPJY4J7iKX",
  "key23": "2TJ7KGNLE4QxQt9PgYHj94dKzhjMZdmzYgD1WugAKnepFf3aihJeKGeuokJDStwcGAuNSHQQrAABG4gqdjAoAfZ4",
  "key24": "5U2m9AxtSoiUVqux1pNiQp8Rr7xXgTyZqiG1XVYTp5CVKPusPbaSBg6nx6P84at7tBEXqes5EVGenkDHYLoFSURB",
  "key25": "8PQhGtWXMs8vLu9wUZu7dEckAuiRBJCjyQUhwwbW9pjCj8pz64MZUH3XzP1biHLeCVnZf8R2zMLqKYfdnA6rVky",
  "key26": "3aUWPzzTUcKC1ijpG1C8jhuu1cJj1L34db9uCtBvhF7A4moaC4R8Pc93vkxiegKyi5neQMrt12oHBZ1ddMAav9fn",
  "key27": "3V42WbeJybR7w41GsKcw14trjWPgdE8nk48cZ2CuAysod88rXfYxoRPwmf9BK1aYXc754fVbhA1Q8ToS9GQf83Vg"
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
