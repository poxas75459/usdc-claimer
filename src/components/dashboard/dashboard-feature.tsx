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
    "3FwzCbTDfM2UQHV8cg2wJpN65d2Wqm3purDeqy4JPje4wTRhYZffLUU6ao3t5FV8sbZGD3gzesLUfz3iNJcUb2PD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tj1nVRFX9e2kVDBMKUKKuyfMm8G8AnYpHJLtHXWXusNR5b84EKmPpkBdPfKemiBQB4CSDLh6sppgdvNM4jpKYZ2",
  "key1": "4Dvv3ysWJ47PJQD458QntGffv62Si17JrGzEqkAaeYMXj6q27o3CUwJAcUKcUUCMY86QM8n5on2eShd6UkG1T8Jb",
  "key2": "5AoFN6bgKc9LGWeWr8VgrURKAxtK7kMCD3QJpizGA2w7hdcCu52VPpyNQJ7rQNWPR3eWjRa2EB64Kx3zNRtPSBM3",
  "key3": "4WY4zkLQfhbLMpV413YsTGDArecoTTpNm6NedgoDHEqndbT9Syz8eQ26nqwj3sSqviBmW91MeaRCEVmvy149ebtA",
  "key4": "rrrS9Ppja6TrkdDvcd3bd2vsDsYyJooCQjsmPYL67P8RFfFb2heco2Tgzn1cPFT2JTrWz11h86k8noNcoPEZ1xj",
  "key5": "2WyjKT8taKrM1wqPrDLxYWFXpwRjKzrEhdHoPWhACAVkSBjUJuET5Tc5YqPq53xrgUxPYckQNdiKdQNiuo8sD5Yn",
  "key6": "2VKzcbBiEGrUaGMkmFowBiiQVvHkLz35VNDZnk4qfdxMwjwUE8dusYsAWn5PU2CeTTzMtYVzov7vRgLbkQd4NtPV",
  "key7": "4RkUoMBAtwCX14BFkXHjHiuoFqQJyAByEnDkekMsR1iy2tTu3p4YMtff7MVSokp4vMrxLZ32wXav9iPzCNCx8Tpj",
  "key8": "52bqMZwGzYUigUsvsthiSmBW189poWDEnCp1vZCbaoaf5qgxLYtL8oTCBqT74Gg1ob5hN1mVbBTSqk4kjSZYKKu9",
  "key9": "2iyYPTWc21tBRwsaErbdPjC8QMajRtSLtjzVi4B6k1h2ZkevCenayFZPqWbZLTX1QYSUjeGKu7U5smZjKh1oC8ny",
  "key10": "Bd3AenPrtwbA1HoUsU4DUp3oghBhAtWQN4LQ1CLw2HsxSziTdeVaPpUyNkrs6MbknbFyLyXoTq1Ttshm9XCkZD4",
  "key11": "3jQEL3J9cJvaMqws8p3LsFhB4T1QRT81wXZSJSeCRhk7sLQFnLGzGwRiYMKSEKM6qN8e1XAoP29z4yCShkBb4qQ6",
  "key12": "5bkrgUR7jK5fgAMxnahcsAj6755ysRVMFSuXX4J7xSFV1jWNRJrxLui4uxLazZBJAQuXDUXb7nfBrxWQ54cXwYEW",
  "key13": "zU6RkXpZc2D3QUed43SuhfKZG5JJTibVJH2qZYJkLNVVn9VdN78YQcpdKMyMeoFdqpybPdWLapYCBRJfNUnsV3o",
  "key14": "j4YMreTcQF5YQmoMdTxup4fYyfbQv3JZkRcHKwozU1YxKbLJBLft2SnJmr5th331LJ1bvsa4S8GVdz3jGHLak2L",
  "key15": "4DK7xPvzavUhojrrKVSMvfA6gZ9BHfjRuyBRTF452GXGGyoUazQc6aLvashbqxPEfwNS3GDzjRmBWxyhroBPFNhh",
  "key16": "2YEqCG8D37bNnCzaaPJ43NoN9jNczRfAhvFND4cMGXgYPMmA8gRZTa9mpk7maA9PpQTFeW93fw2SN6zYWkncwSnU",
  "key17": "5UbgsjRF3zHHT18YbVqBtKsuPdUFerpcMDeYHcnMS2quVnXvhsKPHvWBzqacDpz1nj4JxwL7h1cqXbcvereJbRrX",
  "key18": "493od66wxjC5veBBod58Ts5T7E6SzFZjeejE4Wk82f39ZzaJC9Rgr3SXybDuUk3NGw8QyJCHGNoBsokCoAofcjC5",
  "key19": "4Cup5WsJpLhRWPsmfn3333cmcWaVe11VjkXHioTZFTafVtJ8ELGN62BM1vgMc4fTm255nTDwshRGWPbHa7pdeShm",
  "key20": "Z8eSKu2JXzUYueguq8wBRm667sTfoTC96VkNVymiymPgzDYwAANNMgDRZ37q3Uk8fPRDmaXY7sH2phSyguVAumc",
  "key21": "3JTW8SRkz8kEs77bwoaSXMdGN8dsZ9GXvB2bmU47QHCfL74YTHQDdfCXwj9Vf4VsAAmUbuCGvNJib7xskjyuCGqT",
  "key22": "36E5xea1iWyBuNLBLP9wUPXkokQQg655BZnboGEudhRAVKk12Q5jgh1YqrBqDZPRCoarv7NBZsQ7RpJyDEqACPkX",
  "key23": "5CELMLBVQax1n3RmrmsdUaHUNt6TkauGrc4WEPJASbTdwnSLmeDubYeKEJp7pFx5KXGhGjT2sVfvsYGW9hx62e1C",
  "key24": "2gpzbvKi7yTUbS721MZV4gZqG82Aa4vKSctqNeLfDCBpG8fdy1W5A7JypHJRD6XswPUbAuHg9Rb8rMBPggTdGCar",
  "key25": "3K1VzTUz2rdiePm7Tpujx9EzNTyWtWJByMfFK5cbu8tFgthis3kuv2MCAPoi5vzXzKzfyg72rZHeGSBXVeUs9W93",
  "key26": "48KN9k8xLkWRML3sKE4HKjGgsqszmTpJo9h1xDx4cfc6oe3WTpkqPqRPuiGEc3mP11PnE7SKL49cEk6vgLx1mpwk",
  "key27": "5mcCeDXmC3UUyXoh7JcSJVE5TXMXGE1BZVz3vbSNK7RvdbLgSaL49LdtHi1kkumY1DU4ab2y6NnhjUWAYWEUX8fx",
  "key28": "4mpAbLJuJJoXmLztPmhnmjS3BiHBzGn2H9ASY5QZ6kKNjUMovmuzGT9RuuMjZiVsK6R1zkhHi4syAAV5fBRmWCs9",
  "key29": "2EX3MLqkU5CLpQ8QTabUwamvWrB3qKhAkj2ecscPeN2CQh3SS49JXaK1MVMZxNmxBmCMuDEYHid7M6qY9RCXrvWk",
  "key30": "2B858WDw2iXQrZrpA3dgPixVZtXQks5PKAAoRtLz2v1s6pcy79AXpjpNgHCwjSqrzLsB36QkB1z2G1GSW91cAqdY",
  "key31": "5j86m8rWWodnkos64L1b1k5h3hiJbWTiJ8AtN7iWMnm7FLkHQozHNrun3Y6muZsWwk6w6VPpY7zsM7Lpsud49jAq",
  "key32": "3mY6YvMTHcfYyLaeuDviSr4a6BUzCseSX84tiCiJ4Zg6RV3ddmoMbgxzhxrNv61DxJ31sKbDYDEmSxzYsJYKwqTh",
  "key33": "2wqbw6L4cF1p7GgRnfPcnX97n5DV8c5kxsVNe2urYwQTfEaZrJGArtBK4xUc76SShcVYyQu7WLqpjtbxSRKH54de",
  "key34": "3As8EDj2JXy7NfUqNbFoY7ysXodBfCd1WgUjaz7HC1YMURR9XUPC1k9ZunyB2onncwEWRpHVcHdudJU4UteAaho4",
  "key35": "yrSHyhn27XyCJDxBPwaWoMNhZttrdK3grdhgAXLmVK3HhoELJGnhPptCRmszHMqZ48QacyEj6Sp7mhSqgDMDfnC",
  "key36": "5vCS4cbXCLnASZ3A3Ni4n3KrNbQtPgxts1vGK4S75q2qiK8R7VPbKLkt5CJtFB1wvoGDY6QsmXXz6Ko68awyfJRp",
  "key37": "5yN1rQjvgdkggN8ePmnQSxD7g9Xvec1Y3UBQM2EGch8RvwMESmX87ro6ZE4KADKHuA9rtGPRnAJq8NGtyfgQbwyY",
  "key38": "3fiGDXTawkHSqcS9HN46HHVUTpgrbHcGB9KB4BMf68jYorKoszFa75L6GKJA5SjT2MDwwTrGABRi1mUV2Wm8MwZ9",
  "key39": "5WK32dTjYP11z5ujJaSDtjVFHEPyBScjewRGSPp8xNdSxpkZ4rv3GimYJzv69A79Qf3ufAk4JQTfknTTKEsb2iyJ",
  "key40": "2jE2VwtkHG2pmbysBz2c26XNiLMmX5bZx14yXShnPe4UD3kbKjkYSzziAbQBEsuLDYZ7GwZZtAANRb7KWNbmPVgZ"
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
