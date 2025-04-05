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
    "2iqabA4Ujhp19bJe9KW4UJgX7ZnrJdEkuLquuPQNKRdT2kxS5N5BYFEF4rbRdkuvsw4RLeKAxjd5Z36QjevHxP1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cBF69QPKxLKcoS3zBKMLaXdHHYCYbxJMBVeG5DKbnVcKtGhPxvbaN9QdfuCqMaYbxdsAxXBGqRWakuMcx12xzk",
  "key1": "2RxuCTWJg4N7VWjMmHNwkxWJyLU9ALprBJV3jZwenGTt6skYGc2UW4oXX99epv9o7cc8RUL1QDSpCBTfRSXjvEgN",
  "key2": "4Ayz7j1MyuxfzMNTh5yKGPmP23FYwvf3huEP4zTr8MLNex5KE1p8ZC6HpG2H8CVRD1peBY14yyAZ7eErwkcHmCwF",
  "key3": "2CQDH8DQ9MFeTg6JAMfkRFuJXcF2H7KSzRJbZhqtsEtk1BPPhUgVFfkFpeJP7uFjremxVARmHw8ozLKjHFbfRZQ1",
  "key4": "4ZHjDjxdnp12CzpA4CZeQ9Y7HmjgviJJHZmBhBfbWqgrg863HxdDPSxe4n1gxignjd9dn3gXsCS5Nv5ehzgkMQPk",
  "key5": "4iA5tnsP524p3TLengCgmYbim1f8TB2Sk1mtfZS8FvJJA58XNmp29EBkYGi9gx61r37Vn1fJUH8EA5xddmCahWsx",
  "key6": "46rrLytzFyVMAgB3Zx3TC2YjJF5tfXAq7e1NL82R9mMFzyhzT8twWR3PTLyUoZcGL3KUUErsbo77hSXt41BX6hYB",
  "key7": "2PtK9ktioopXh2gMTW59x6g6pcG4cKoZsgc1UCrPyPwivZJ7wphKc7JYD6YD4ApqnwRxiPeCvmo6YXAChfQrWVRt",
  "key8": "2Ko8SxqoXnffQPuAe88WWZY92NiH4qQxJgu3dFENYMTyyLydcD5mp5U7FKUDoc6g3EyjUAQkwBra2y1cTVxVt9Un",
  "key9": "2RG93z3pySBj4btox6gR6Gv5f7GtbLqjHPsbvNnA2njVhF49UsZrVyCG7b2jK8ZwtgUCD889wJzWWpqE9Vn9RLb2",
  "key10": "78suddekTrmuE8C55kScNRYjnV3c1AKUF74jrStuwLSEnBK3Cu8EUuEFfY8FydYbfbRoXfERWBoBx5xLPoKyRK5",
  "key11": "3TJQAW5gzbuew7F8VFVZSYKG9GLQpGAZoa8GLQdgmgbiWSqFhMyK7P7VTFzQCdtrAwsijH6L7nGqEZAxikXKuYRU",
  "key12": "2g6osPy9avL1ZaHQ9uDULMgTWVqpG8wui3AhGDuWynCZUKyxon4VinMot7RunS6cRci3vGBJnvr7kMTDtYs5pvaj",
  "key13": "4UqeqnQiewqDtWPnGNdYKhQMQnjigMCfUCgeXRSrCfbpPjMmgkAEhBXz7fSZmqpnwvinQXvR3zScpmxmCAFX3P53",
  "key14": "4oj2twtP5y1uvqHZg4ed22tCsHtRQfDB18t4wodn2fpnonxhtbtqkCCk47aLsEeShh7t2XcDqUqr5q2v72aZCkzL",
  "key15": "2AEpNzBVz7XYjHxN68x7TUUQiUrN9ZQEg4YyngjMsQXXANNYtCtp9AFQqEmXTEgZFF1FuChzhRvUmT7QPmQ9ue5R",
  "key16": "2cxks7mxqKj5RzBnz9W8VwDrMp4cqDnjJPwg1yvboh2NZtpapYmFuVKYN4s5XAgDLw9cQSN1bfyERDvv1avijnyy",
  "key17": "XbxnFvkx1efBGNUzuiGhkqxrjQzum5vKdB1gmTg28gdFtJCaZ2GtnD9cdjQzGGhm9JzugTjXgBDnU9HvcAH5MEW",
  "key18": "2DDo8SCke6Sv3N6q2QAXkG37uZUcwhzN6kGMqSxqjGz3bet52pvLtu9nn2vyx9aLZb3XdphyC8pMp8b2futuny9G",
  "key19": "3hYbyAUKVoeiDbMp3rsLKQ2zYJsai98qWNaGnbfxGhvZH5PLfHctysBsUqhia89naqfxfva9TvVWBr9ZgajQi2uR",
  "key20": "nRQ8coiYdigkU93mRWpgefSCJzKQ3uwnnVVvEnrc3aivgkc6NQ3LcpzfFBJyMm6m5jL5JWwUDDuQaXuSXauoRsc",
  "key21": "6VfVUgaQgpLWsurwidQj7AcZygzH5z8gupbMREjnmBEikC9cwebj7rhrhCcnSUucAggY6zaMg24rNco7nt1wnqF",
  "key22": "2XrPnhbcBCZwaq7pYTGGbKSLdoqqaZue2mt2ZkjgDDbSssudUQZ5NQBz9gWcAGUQaeEG6NnKusKS1HKmbkD1PGuF",
  "key23": "2HhDvCrq4cjVrzNH5E418yc79LzMAyhLM7ZyKPnXTAs3AgpNoyh38k6dVj2aAKWvbK9Q555nagpedmo3G4aHTW3L",
  "key24": "5M7jWtsMBjrFKDFNE2ssHfKykhEUThJjgXm3Yd3taaRDa9TGzATX8uSLGXgah62VeAudv4E3F5WY119wifme1VH2",
  "key25": "5EAqNm4Saosc74xmXd3UAc3SNH4W7LWAXQSoTA2UgZHibCuVKa7d21oK2ur49KsqsQAbkpZeVYX8FwJJ82CYazbF",
  "key26": "3KYzyj4mY1kCeD326txLj2xHuSPgw5rrRapTb1D9G3anPSsJscaTpcSEh77Ejzr1qpnRMNdfZbHfrDJYEWV44aeU",
  "key27": "3nYBhvss2cJLSAtKmmdgmke2CoDX22t7CAJKMaDgN9crDnVjDYJaukiAFY5tdQu445tyDMNAWRNyjGZzVWLMJDrC",
  "key28": "36UhRjDNx3SLHcQGYJkNR4Jw9Y1wNzJ4Cc6kmndPmrKBkurqVrHLRTpPPdiftZYJpzccVj7XXPh41m3dGA39j6pP",
  "key29": "qed3ZsqBZeCmvEL2Y7FoToCZt75CVPCjojtquKVRqbyA92KyAoYEPZo4Uh47cfBFGgyHKMEU5YNwxxNP5rYZFTn",
  "key30": "sixGpZEvVth5XpBeRurXDCovSopNoKmfy641zRtnpoibG4nR8M7bGpC6NJazYC1Cy4yH5yMixTeBWxgQy6V8sEV",
  "key31": "5cnVFYipqsKAomDuiCcEmG3eB6cqwtztioQbQ9qJt48hNZNs5ggGpWYF4mkLD8w31fsC7Y3NtHrzNzj5uA9sqkU1",
  "key32": "2st2fxxiRdtFijaa5bAoiWWjVt4hZey3C1uFxHckpMtG2P137xtfSpsD8CDpwcGJBPwUhKT2BT5nGXEgYecKjks9"
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
