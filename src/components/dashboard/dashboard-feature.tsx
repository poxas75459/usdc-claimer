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
    "3hVm7cVaZhP4toqvnEX174M4rUk4K832baASnBKwSHgDHWUX2WEUhavTxZyRgQFVTRBNUBJoWVNGNbVfUxoBjmpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZpjCJWipqadovuqYwx5K1JQv1mBXFXuhWMyyjVtFScPUMoHZUyLe2ZKguDZuh5rqVvGrJkueTknHrrAmWky6LJW",
  "key1": "3MYV8t2gh4v8MXUBYZH4PRfcztQHEb3rjhuBDUVVZjE1vX1tHbvzKK4MuCnXVhjv2HrbV96nMXwpctPCViyYM8Xg",
  "key2": "3mhYkiWzUAwpEYhz9Ca4DU85YCcunAQ3NFF2CkwEgcMy196xxZp1Ys28Vf5rTb64pue3cxnPjcug9TCniv1m6Lsr",
  "key3": "3ammJhrr1W353LPRr2w8zm96pKVmBvXsGTDbyTUm7TgSw74DDnnYVkg4gfVm9Awuec8MTg5dUFcU4VZG3LGSyTjw",
  "key4": "tT7njQmpbVAqx7biVm4Fvs5MyNxEnkYi1mVeQ4WhFzETnPgFtzeeGcpqJ6WTfEPiha3eSmzWUyuxpDnm1NhnLFD",
  "key5": "3ShPdUsfF24fbwJJcFjWiUTogstVnqXciSPi7SWGgPCwojFYVjsHmBiFdnDHRy5cMPUDxhXmeCNSxAF9Ga3cSPUw",
  "key6": "2UXHb1isxA61AsrPHoS83Ksu7RVdRTKJ6v4xfKMaajCA2vpNvvgtppS54byJiEBwRcbg2ehrggmty71NFRvmdAqY",
  "key7": "3ccegLiP1P6kCBNpQ5ywGFxeDAe23y22CXySCXD4ovtt6Qhu6TiE2DpH8Qot6NpJobqHS27yZty8xhwK4rdbaTJY",
  "key8": "Cw2z9uQ1SgTMHihUnxhER7yq3iMkStqMkV7csrM3kJ1nA1urr8DWLsDU8R2b2NZA7rCm7Eo15Gvz14W9viPTGaC",
  "key9": "4yZoo9A7sTRarByMKTkETUR3gdNhy4tHioXfEGUJyL74vx6TENUt25osYXhPw2GGDcpUYsCc1Hd2KaChik7m66MJ",
  "key10": "2mgiC3nJhpho8RFgfVU1HU3pQkPGu5y8CTZRXsyGQm2bpYGaGgo6bWym4KPGpMxM4QwXAbJz8MFjNr3JujMyF9Kx",
  "key11": "5H9CfoP2awXnwGj6F8tiAH18BWPrGNAVDsZNsQDGyrzzEjGgTpsHVJVmnfxxqzNCpGa1rpCf9JWtVBymozTNh2pD",
  "key12": "4HEftJpYXHRtToTkQorBiHgULV5rVtfxADZqgExqbxhBMiru23b5gPyY4jkF53PzuGnZdKKhYzTkqmS2ywydaFRN",
  "key13": "5JNNyoGjkvV2xTYA3C7Tz14xBxCYTfrkXBHyaQ4Wq3CauGuGeUtDbZsKBWWc4hvuynPoXthWLj1dF9MYAjQeH4S7",
  "key14": "4vivSnFpUxx55eXy1fRs9EMVUHixnSGDgRmVU8wnAW4Gjy51GqWaCxk2vpjQd6yFyYnXLXt55G7HdB17VXqSAVW8",
  "key15": "376jZ5GuL2o8R6jWtYqcwZFfpeohd9mjMErhQvF1cuhvwyEHb8nuBS2cckpQZe8s4YniESeZaf87KZWpNK2DMi56",
  "key16": "4tqU26PZoJVWSFQEhpLkr8QWnACq4Ak1mpzHv9EfWrXewwiYSg2EjaFTVbUTScnmbcs2HssaunAqAFsgGXh2gaYH",
  "key17": "3g7w187XjkZreMMK5QjuP4Erwasiy6ioSNPMr4wn9mUTtWLQTn3N9CBmc147pKKFuikF9Cexm9A8kthALEmtChWP",
  "key18": "589EgufxZk1K5RK9irToNeXJr4o8i7ak8Mhn8u8N3PN4fa6oWp3sQ6CFN4hg4E712H4JTeHh694jUxkXAw6MqCsn",
  "key19": "5du8HwY3acdM66KZ37b5kHb5AHXs2qSnnw4jQZ3DMZWbPeFEPRHHYskxgEDogTaoVbXrGtdEKwqx8bh4WGDydyL4",
  "key20": "4Fec4et7y7G35yvCyU84bU7QRc3aSHa35XWg61BqQSsx1UGBmXafu8vyYk3cRTP6iQbJMESJRDLHfCYC1faCESC7",
  "key21": "3JsfW4XRJ5Ph7dheA5PNdbZkbXNyA7xnMrwSxLqkSwkUyE6UCvXCbK7iAXNWDKdMSBfAnrH7DEQWmZg5dbZbrJvS",
  "key22": "2pipjsw5JHjGkg1YgJbhnZYgWrK2eVZXL5fAqSZjXqfpzTps8G1UNswFE6Aks6AepNw3SsPZ6eNKxa3PsCxaziyo",
  "key23": "4gpNmdrPBd1zAdEfbbXrSSz9t4y4q7yp7CftRAEckvsAZex4sWEJEuWmX3vHtgCDhvpEiDpif4tX5ZcFeXTC9eLD",
  "key24": "5Y69icHw2XVejGn4GwoqBvcv2TApgjZApwkbn4M9xPBeDsL93u8yKNC9aSej9w1nPe1gFLhJQvMf9bE3kWvmTsC9",
  "key25": "37kPkvifkoZNBS6D9JLAYRHdwJHEzDxjNyKPWDc5Ke4NeFCXpXGPqf6XGbsViE6iJswQe49Hg6PCdu8ZbgBQt84B",
  "key26": "22T566cgbovqUvMA8ZMXiDcT8iy6ASS2c1DFz3JgxF5Ho56bN7hiE8vHUk8Wcvz2CYKrZNq2sJQ9PvxHYrWAodZT",
  "key27": "3ffLWBS12w23abyzorU7UowQeNmbzhv7YwYdQ3PtKj1TydTe2Gn8jhLw3LtxGMATvjHeGRsQnEvNvCNKrQcuWQK3",
  "key28": "4p8bqffSWGpBb3X8R6ah6EEQVGdDHmAWAJE1vYu9AHsruysF9iKV8VT7LAfSBnFDP98MbVQrMLtEqNVuvPyuh1HE",
  "key29": "5KetuKhfC6jkmqHJY5C3GnCqNmD4JDHnsy5HZxibMdtkPgniMdzTN2Dac5Yn5XLyjxfjbxba1yAMBX3bDmDjx6EM",
  "key30": "3ufr5JfQXZH5Sgk1Azd4VHoLG2428DFZ5xYeLtwyfvRcgsSA8nqUd31PK2L5LQGXpNW7QGEykePGFsuCt7WDAvaf",
  "key31": "4pNrmMjavQc5whS4RvNLkgnjJXzM1tEaVBsSTRJGYRx89h8kNVRv1oBKkAfdzNHoKYJ2P4aBPMoCamQMA6EKYKaM",
  "key32": "31nizZhrquhTKyUw748uwzyJxpDM5h1NUzV6xm1pE6wLQaWaR8oNnxzXdnAwKbggoFkixnTdH7gsXFZPpCVd6Lph",
  "key33": "5Fq91coPRXCpBW54WTSb24SAongx2dJqBRJgNkBwi9vubWzsmCdm7XNWuc8SLW3zkw8oRA3i31Z5kRmqAbixGnhA",
  "key34": "5HKVzAnvUyFHwjEDUNyLAQCSKV9yhZhDZ7gcn6fnpe8JdLk1Xshq7GccPKSsPueDjxvKrJZdwEebDMAL1rZ8TcAt",
  "key35": "2a37gYCb5TZ7FLD7p7t3HrHteSqSYSTeVcjq8ZXDkwHCuavLRpQ7sxU8Mnt7hEUCtQdNw7epHYvhrUccZ9MMCJiK",
  "key36": "1RHjpQzVV6sTF6ios9Mm1wmKRXAv5n16ZhqPPDuqHmDz4THB1fJGzGLLK59Aw3RozWKrvDMz2gqBGY8qh7PfVrX",
  "key37": "1255Xy515uGyPQu21Yz74BQooKEaMwiQtVZ3kbivt4XVJJAbMnE2o1ABycZQ38ua47QNkgPtaZvbHuB6KquqXyDp",
  "key38": "5YN7PsecfMsFXQS1ejWKgmoUdXdcCkYJwLCQ8sS3JewzgG9Uwf6KNXhoJM8zkWHhH5JPTRoXieDBdbkhRXoCQSWE",
  "key39": "5LMfTuEdG9PxSDviFvUcgmDe9LQKxHx5PhNW5hVs86xAuBd9VaVk7Hqe6HLGDiaLm9cwAcsvoVRAiRu6zw5uir5N",
  "key40": "wELScsFqHHhscF6uyDqYroJ23YBGk1WwtybW7nu23x7p2VSE7zompUxx3pWQKxDorKgJox28Pszjd3KwWjzNnvu"
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
