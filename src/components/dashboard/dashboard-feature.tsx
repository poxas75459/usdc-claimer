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
    "4erKkJ2mMUVK4UvWfkTmDGEKfBVCuswmE3TTMgvZUTrkujQFy2t8QPUizfDU7J52KEwcaYw1XJEpZWRxNjotys8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9iBmphiNPJ1HtfVCKoPXUqTQpJGjxekiekmYCmRPG8hHWGyUdC8ibGbgJaT4sCVvoDcDrJXEvDg5sjzRxT6MGT",
  "key1": "2haKpnciQBuMyQy2wxEyZfSRMs6j5z3jYQ6Hoa9bDiVK7Pk3DVazd9ZVe2ex7PTBAz2iy9r5GgnFnLjcwQ95sFfw",
  "key2": "24ChuR7AARpZhNcS7iAzpxteCwYg74LedgL7MUkAVvMbHTs6WvXp33QXuTaZjHKx1X9YgqvEhzrFi1CXSiretvf9",
  "key3": "2f2LCyu8eyV8YKtLucvhjZWYaCKTyW7spe2caUunW5hxKX6s6z3F4TACuxaPZQE7gDayvwYX6m5JcdU6VRPf1eCJ",
  "key4": "SWRbs7wHguNCHuczSN5PWJN4ZdiAKcAdF2nmzTkPN3AHMVd4D5paTYtkDtNv5GG55o4WXuUTRYbd4HHrauvm6LD",
  "key5": "45uystiZaZ87qgfaeinCUmdQEBEr4uDVX1ZoZ7HTLUoevEKUWxwsdpEFvoynSfLsL8CpzAnTpYEzAdwG7xw6XiYg",
  "key6": "3Fc2CA79bTChCK2Q6h6yHcHyNjt59WLX28YS6DdRsC12V1Zyt6XtRkHhfsSpxo7VBZkhhhx98rSYbSjCT1aLGFqA",
  "key7": "3dWwEQhcLGTQG7ez2CuYJ8RLQCw6VPMpBdHLvKqGamTJ4LT3Ci528vt2T7hyCz1G4boX5YApFEPfb4fQjA5kM7hy",
  "key8": "57hnu4ETx2iLJaBU64m9uUYBYex7mA6Q24yjQTgbpYwy5f89QLTDmxvFsCLoj8GpGW8fnfPvgK8qo2Gnfh9kYYJh",
  "key9": "3EiVyVjjWugAuwhCcVZttcy7MmWP9Nc4Ugo8eYdJE358ze6jhiW1zypc5tXZ8H33v4uPakcyVnjkv4WrGBfH4sKB",
  "key10": "Srz3wc3H3PDqGFbBat3xXcmBPveutujNZCVuHRSSkXa5btHjzdmhF94fkEEA4kCBYnCmTJjPhpGmLQXxMtuoqq8",
  "key11": "wmafixJBqgHFLntcXjaq11kUqrn3sj7PJhUjZ4Z8YGGPiDpgHBURsMwAVWrrvQBbxAehXPaMrfGQj9dainXvVgC",
  "key12": "2PpD3bfXNkA6nFxNWRMuJ24bVALd1UdMcqt3GPtzoEX7NKAaFJe6diJuqvLEhBHLgEHJpapTpuKMx88LkTWvpbSd",
  "key13": "GHz8eZzrFLmW69425WhvnGG47ih89tbHjfEL8AwUZ8tmG5oNaaoPcQwuU76wFHaZQg8cYaykbPM3dp5ZBm2BqDu",
  "key14": "2CK7byw9pWjGFWiXfNXqqUURnyqdsTKce1dpKaWeVbjG2rmnjdw8FV7snJPZWBkeKBHdw8PmcuaqFPvoATf8s7ae",
  "key15": "4JYb6Ayf4vX2gkjHZfwhxkREHx2vp8Z6929KppmCWhm2KFwRkqMvvmMoANfkVZyNc4EDxW7JM8pKa1sXYiszYDjV",
  "key16": "46w1ofexbL8eMSJZjvBe1CcYxbGb7nyYxuA3MUGP8h4vMxouJX6uoQyjR8HeriMRnJH1r5Ei3ahqHEAtgr1U4qmz",
  "key17": "5Kr5qNvWkvrrbFKQDnHAipNxmFNafrYWiqySXwJVWf541Vwu5oQNiJHNvZmxSCac4K2UkPjQpv5nkWPttAwQHQyf",
  "key18": "3Xy9ee2iRqm8czLFiEEgV9vDpsoJDXwzywDX9QoErm3Yzax63WXwgYQt648NpgzTbuGg6QiTcNd2ZTY9bbXZX3xJ",
  "key19": "4TLi93hUwBq53B1HSZNXSkN7ZtrLqK4PD6Vrb92wPoFBFFXDqDWpqMmzipZz9rzVap4mqWTX5T9WWvsnEBddvTBN",
  "key20": "4ccW2eRm2XExrUyyCs7tZWJaBqa9v3RbmkdZtKGLYEc2QKaiyLpwh7fn2Z2G9EH7eXRZhiSDZLAWKq9MK9v8gXU",
  "key21": "2FZvUgXmfRoAEDZKUgkSujCEvkwVoy1Hpim6FaQWymWyznUEsf2VcMWCoCmd4ANvNk4GPmzdzp77RchZQcmonQyA",
  "key22": "4DGYkhyUPJKyMkQh38BYGoRTteQDtpJPdiBusPvfoL98xvZYfbkrPxYgYPAcRmmRHJzJ2hZJBu9tp6EViqiaeQnj",
  "key23": "3V6mT2VQkp5HNm8R4CsLmuCLxkfU5ZazHJSCa1YmD4BBzeNdb9v2CrXV5sM8V6VqBV8iRrBQPitfdkfzCRDLndWk",
  "key24": "5eh6NreKQ225omY1aDuXWge3cRbp1TtUyaSzGxgdK43oVNg3Gz77KNAwEBTcSJvekKZgSFV4osCWMt1eYaxQD6N6",
  "key25": "ctDvJGxYPXQ2WqPcZxjex3KQTwSqCvauZ1oivg2PH8QF8TAR1voh7EbPLo3tZHBTjYctWGoN5DHuqvD4thnSkpb",
  "key26": "5v8ZgXAs4ejFqaETsCveTZHkmoR8U25fhFs7oHVYvV1Uuu7b2NLBgFkqh27ewMWtWpexKA1Ldfd2d2M7c1PEo5Cf",
  "key27": "2n8rMjv6PQYcer9E6VuzsrE3gmJXopH9pGv255MqUpWV3EsGNncac9YNXbDBoaNZztmiuwKUbDfX6pMeJttvTfuC",
  "key28": "27YUUVrFPqkx2s15KicAxm7LPYRjXbDew6dTxasbcky3sSutkr8qY9SGpV2efc4hUuvE2Fek6EiXsjsU4s8xFUuH",
  "key29": "447NAMM6RFs5q29Ky58rA1J1sNCuybfgBFjJNA5mWSPS3R1vxmZ3RA31rK368YKe6y4pG3fTAyttMQUULuYWbZzm",
  "key30": "92sf5rBWeNKVyMspqKvGkD93CV4bY3kDBwLVEHqXA8HWY64kAdgAxGVa8GhkguFkmecSx9PAeuDzorQ4XbytNii",
  "key31": "4PmdUH49ngvzrhFrzLRYu4tWGRGGL3Mx7m52sSZuejDJF1dnW3pxqNmLtpY8B4wyboz2x9cPokboTMXv4GE7kJrz",
  "key32": "63g1ZCTnsRR29h9wrdN5n8C9N7E7zSoa69LmwNfoqTyGrRujWB3HqZNEVNJmFoPvoypBKsdmmwp1Y743GCDSY81T",
  "key33": "5RLPFLTWmRNzNFARxFCwpUoGZzjNJbcNWqpjZNcaZBr5VsmtKgsYD3ABdvyGQ4sTV4HcEzhzm2bsYPg91daQPPZr",
  "key34": "3EmpGjvxMu74UjwH24oqCZZ6k86inhoadFueiJEwUgYrUY6ppuzcyBm7TMdZi6LRd8GFAbyYJsY6k1aNQi4HuiHB",
  "key35": "43eQJ7dhfkNFx7C5znMvDmR18Vaqr1zyfeLa5RRPhzEorVNNJPvtJmdTtvacvXTR2Eny81bX5B6dWvjLcws8JF4Z",
  "key36": "JBDbTtSX4yxdJH2LUG3WLuyHf9RTerrHvBxkZhvxjRveZuLwbASkSERuvWTKC5zXTdDC3ExNvZDQk5kwQudpCTw",
  "key37": "ft8UTykYzqoqepcbpETU2Wp66F7vGD2WyacmsMMVC1EpTGWgYgvDhXktwCPmRKUo6czLiN4GfsDPXTEAitoTnXp",
  "key38": "2o4iHLHNg3Wf39YaJj47mpWpqDdRzzXawfSJm1JvHGHd2Y7LEW3UNJPvJDsTSWbS7ozdoqLaCbmXy21kzJU9vA13",
  "key39": "DTbrX8DxUNGu19FX969eMyXd3BSywtPzHCjZyJWoMoxUR61eLBD4tD1XdJZpkLWxPthfFQrWfh1N84r45hjKqBC",
  "key40": "3w185c9H3VAryyNeQ21uRaumBjEufb1SbsyZw87KmWCk2wnmJ12dskGfUP583U5GfToxYPr1Ue4io1CPNi5pdJfY",
  "key41": "2PRuSgTCky6chNSXbCBd9VuL9T55vanxTstqBkn7PhLRh7XUnmDovpcTXSVvz8LWN2BLSHQLWEVa1iCYnXFcyuqf",
  "key42": "3LVGsqMK9vq4fi78TuYVcFgMg54ZQrvTYnZs1q2c2AowFoc7puSh17tpmPwsoQP7P2HME7Gr8TVxUyReT4uAdcfn",
  "key43": "aW2AuPjNdU5LiW4UutyVK8NoqiY9ZVHtZ4vjCyewNvWebirdVXV48DcfGTHBbvfjN3Gu12pQy7jBD7TNxRBEMYQ",
  "key44": "3y8r1pvCNTcKBmUG9HxRHkLJpkwwRN7qCL4QaiDmRNgsc62XwzqZHXLcchfrNeP7vSeTVRRbvDEfmsqqNqwamKRc",
  "key45": "3CdXwtydEcDSsJqvpNdmXjpqdtnn4TQ8TZem8mKL882E9eCu2ifNG3pjnoJoqGKrJCZhtgiPPo7wcnVT4FtZFRhh"
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
