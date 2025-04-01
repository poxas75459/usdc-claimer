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
    "3wMYk53SGALZZKfLQziAwNCdm67NqCT4t55sr4KV9W96uEgadA4G4VTHZ1fyMjkb8QCtbWwYNHntziF8FhSLYEZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274TWQZDAAHoHdm9GZ69kEAUsAHFmPckMAN9EEVZhjNgrqTVMsNTmeb3E1pMfuXeR6JrNNAhSckPbqX61KzVhByC",
  "key1": "2VqmoneCAjdZoQ9kJ3biL4zxm6x8cPX9YfzjjRKkpprUx6wvhvFmiEhmwwKnZ539fpDVRgSYDAebJFRXD3R5idi5",
  "key2": "cgGr2Lpv5TdFWFpz3mLQkTzibCDZyrnw87BWo1nnATAxTpuKbjUUkuMY3oFhW5JMQ7Ur82xgH2B5foTMErB86fu",
  "key3": "5gQFZUaVFqjpat1enpQPJ2HqUvwgvbw6YgDw3kJkvCuQyJkU2vevc3KU4mcs3sLVTEWFfA5JtvXYvLAf2EjrqPnv",
  "key4": "4vT6icmbnXKNyhtrNjQ1YxFwAivYfjP2cS7QzkZm1RJjjndeoqGt7FFJcy5VchtTz9D2x9uW55JhhmjhExrkyLNa",
  "key5": "3SH1b1P17wPz7B8HK41LGnEREyGoHGCTCPdL5aasMXvJ24Wxg1LqUg9bMdgYcHELYSABJGukax2Vbi67AraJFk6d",
  "key6": "4FRCoeTESmoykHS44kH92rMwcoDL6cEU68PCdVFUBRYv5hYY3fLjpxR2gCRkBopuNwLCW9x5cTWmDPg3m4hGWSeD",
  "key7": "3qjrc1YH2TDfDf72qd6XZhigXx7QmrZTG7K2Kn7SKvZ79DEDj7K7Kxj5MFEW8wBy74oqPqTkKUX9DZDHSH8aVgEc",
  "key8": "2JSzjiWbk4LBtA9KueGovCWtH3vybrdJf4nMpQjQs62C3ntxvwTMMuU7QFHuvXjFAwrm9YGxWEgB163LqQhzah3a",
  "key9": "bdtZ33PeGNDkD31Fy1EpGFH15tJYsADv7kMB6UErVTQYZB1moeYthm9PZSvimsfSyZG5HaPFbq7cHZws1rjo39N",
  "key10": "44tP6ZeL792eigpdfzQRSiZRfgtxqVXPKD9vb9TNPdhwVXSg6KaUQdbYe4sd4VKkRQizoJHK8RBikyENg9u9e3D1",
  "key11": "QaC5wPEtyg2HmBCvNgUQTfx7GbGsfZA1bgE8oMNQvcS4YmADm6XnEyCWM6cmkFpJM1y54Gery3uY6vG3k9riHpN",
  "key12": "3w7pDmPdpKHFnSqjisRH4sybPUN38tmf3zcPKpF3PFCdxaYFi2gTZUDBHj6Foy2gaNYjyoHjUmbZf8Lfsv5LVEa2",
  "key13": "3DqJD4vrngLU72QFT9egjQGVDUHaGCTjjphrrKQjGGgmUcsoxjbtrmxkmoKE2Qxf6NHDY4fU8ZmJwmoCDWyE8yXW",
  "key14": "4CNp5CWDJ9BPMo1bLR6BCzBBhYeh28Gbn11KEVgeVSy36u63wthh3vsHM5hEpWaNqfjFdFjP9jfJHbRM5TMLdvxQ",
  "key15": "5DPuQ35694eT5x1eh65Gk72U4p9K28D3bZHnNUMQBLZJ9GjNe5NLYBgccXvYkbHeocVkFofE11XLWhLNt3husSSD",
  "key16": "5Q8usjctgGieXghrksmTK3diqTGVGQDFCGGbzZLag838q9tT1iBA5jAhLpgmzd5gnm6mv3bqegcMHJtUWvAESBoz",
  "key17": "3rSaN1irJBtN594Vq1s928r9Fk2wMmT3BLJThV9KAAfNhRUr1Ncainictugry8ima7udvhdzeoCVVous4DmqcLYe",
  "key18": "dPm1eKecnsd7DdWdg7pdAtFjee82Y6vnw8i5ENNBifRZvEAsrxupJ9ka4DWWrG4yys7fqyB9j4dqHdwqFhCroSa",
  "key19": "2h9MN7fLcDW7TUQry2FncB4eCykXaz9QjecGrmYVTu7pnj4zt9wqoSWtAmAVBfA8By9rVxKWdP6DRejwURtKjdFt",
  "key20": "5uA4J9EUksamBQQN83QMGeRTtJkT8RNX7kRxd8CsDx39cdgLe1LzWcWvxfMcTcpqsY2KoD7E1Sw654zFwqUmnDuq",
  "key21": "XdiqyeZK9r18J5cK9HaSWxqef8yFXj3iAF8dFxBJAw2AWMZLpaMDiFFnJAXTWWD8pk5u1oc2GErb7WydHj6ZcV4",
  "key22": "3npCoU8LpdXau2eV91pkq2TSxg9Ar7B2stJ6SEPNFrwUtnTH3o57p2BDgHCki51PTKCcwDoBJwPKE3DpPqEdMcMr",
  "key23": "58kkDZS3xekyuRgtJWyuC47DG3FP1AKQ91Z2uARLZSS8y3gSbpSoQVVFqNQ2AYEcuXWp91SsSvXjkJMih5THdjy8",
  "key24": "F7F7MwYBhtc5naKEjTWWcK6o3dDp1UYLdJbB28s9Wqcd62y8iSE1wdRegtaNJK9kUbpMMu9Bn3GTMuM5M2NhD3C",
  "key25": "5fc7u6SGh85zGz7NqadmZh1vvR2gqFdhzGPvqNyvKwogq3tqLMYrVDdFp8U7wfhHH7nLCK7PVk5PoAydgtU5z3XY",
  "key26": "4kjGpbfdL4sKTAUcoC6hN8MPo4zXY72ULbt3CiF4rBPfJwsVutXC3NeMTTLhdTDa37Nife1RduBAATu285NypXVf",
  "key27": "3PAiiCnw6j5MLBg3ANfaVNd3NAfQzs8kjGb1Q2gyFuToYN482AbN7QtHm5JeskUU8u4WWSC8Dhz9Cit3h37LdeXc",
  "key28": "5DgG8WPd7BJMvxMZ2hXvHhcazctxhoUFoFR7E6vQHTkGssmswfe8Hz7qXE4DpySr9pRW2m8WBknRpKWTBCZYS6xD",
  "key29": "4vjdWEbWGKD54AMCqRRDHwt1SvgDhiMaz4N1rukjreW98ku2ackDe99HH2r2aN5Zcxe816wRDoqNuR7G6yMUrTEm",
  "key30": "4UBrPm3T56D5otuJouYB2hJJEwBtDgVvSCc7ypGtamM5hZtsSkTXp1QPkDfsPfhB1KDJf4JdwVdfH5h9pVw8GtXR",
  "key31": "2m9Q7z7jrZdQhHEH97cPWVRQS2H9G5JvyauzsD3Q1WVXSvLSwrr4SPwd6svJt1yhCH9Jz8UrBBbqtX3RAM4G4zPf"
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
