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
    "3fZ4HPkQU1NVcdoLXsYDrFVLL7Waru4597BYHrWjrdLPFn5eGgiZYgA5dm4YxKXwF1oaHkuEwwhNxipARwJpwu3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JmpFWaztDXFL9inPDEsYnQTyoALR3bysRzBFpBhtLkZXERL2HCtBzZT8haCYzCGTpuZ2WssT1TgG68KdhFuCYf",
  "key1": "5kyrtGjmkBbmcZLyoGjZ1KAEh55u8TCLwNUu9SvAf8ejryYY7zAtBFi5ANbbxuLkti1iYZy6JCrQQLXmBtDRc28b",
  "key2": "47ftQi6tzfeg5dfoy9vPGR14tcFnQEjAE4xBLTLWbjfsxtS3mJDPX7u1QpQ18ntATGPvBwTmvb1PKtaY2eGjmcCE",
  "key3": "zzeVwgYPEVwQEWhaDWKyEbzkexXhv8VHbK5aVLTc7btzHuu3koHX8X1Tv5CxM15AV8d3GjoGQQyXBRqLcYVvKrM",
  "key4": "59XiHz3cUNyqNDErjh97tXV6xJryQdNVU1xc8HYu57HbwiAXDob8HHskrWU8u95E7Hvp6uaTZ4394MeiyNievb2A",
  "key5": "9gq4nSzfpmkiyW7M4N4fqtGH8ajrqb7WQQ1scfgMi2eBH6o6NMxZreLf11yXta4LrsF9WLxUdRquGja45xup8DR",
  "key6": "Ztbi1VZfFDgDEJHtBtoEnFCgDuDN8MM7CEzjQcmGavbfL5DFUAkQ6EzzxA6vb1HbhMYtfPkzbcgNCsKdXtsfEuB",
  "key7": "3FkgNxVopUZTcLpNMDQE7aZ4qPPNeg8hWTHswyENnFkLfs1qyxVt2ZJLSw57bz1ZCt66XRFZmrR9GAXLwi5heUki",
  "key8": "4ndtobFTuBuYSHXC2FGzKmFztumiaCQitcU2UbMQrJHThyaoVoEZE2oRJyf4jdNwGxRoSm4uqRDvXvoPtRW2WgE4",
  "key9": "Fv6dM4dHKJDBpc5cCe5JagWajyPeej9QTKmnetqFaHRRdYU7tta8fpgQSTHYD7PRQskRkJmnTAUS6D2aVWD4krP",
  "key10": "3bCtHrEKM6xENrkzsbPG3D1JVZv2kHCfNEvjzxFNnhUfhTsEDowb6uURs31xdwWAUuiRQ3MgTm2pDwY411hwdET9",
  "key11": "4ASfdTMEXNi33i61UdVZUoue7pmoma2a7xMuViC3aUgWWinasyTAkmy5bGe4qBaRtrwtB1o74r1NLrvSYfuzFUH4",
  "key12": "2dxC1JYYDV8xYMhv1ESpY7pSWb7rLKuex7USS3pmwNtNVR8Poenei38AptNF8hZTHthtDPvp7Lf692wLSWz7WLNA",
  "key13": "XxJWTU7Y9PXbZEwxRDtcJhKFKScHVPh1SNbHKtFk2RorTQP6YngEyd7Z8WkyzcTpkCncJx4Pp5YufKj78dZjHwE",
  "key14": "4vNr868qXQXVurWW87YQMXELoEq6QtBD4vhR45K9ud2PKMu6Zx8zL8x19TY6pvsEPXJRvxvN99kvg1kwPG9k6odP",
  "key15": "4wnmiKRBi8Jo7ERoFamxB82UCaKj9JyeepxHLVXtfBsLnHxR6yH6MxARkytdMuj9LoUstHaxeRwVwhCkZXSQ4Dtm",
  "key16": "2emt7pArNGUQn9PP3UG33K9zMCUG8xBxRZCcv6KoxH9ij2b8im6kWK3Dhc1oJSvenPsjHK22adbXU7kwAcpiQuGY",
  "key17": "3QU4yZYKxL9aLKzYTMwYUM9FBgNdTodYMXzSV5PQBeMrBJXTfJc9fXDpZHn2SfzAGEBaB3HC3Etg5goXhGvtNjTw",
  "key18": "2k61VzS2UkMUbk5MMFTbKDuZxgfM6PCokDKdUKS82gqDELyvLW5Ru54iCfwCZrETAkkzg3agnP446s6MAGPLTBNs",
  "key19": "5UkiVB6ZLVoDnhgoXC3fBQ1g37ZX3cYjtNCyhdFRALbtvqP9kGqRAUMo5GNbgRume93tFYH6UtQksAJBHZNHH2iJ",
  "key20": "5bWeETD9tsD8sVZcHYE5uBxiWVyjtCP8NtWDanGjhN9Xv1nxypEfE6WXPihgs4adQLxHy2cA8ex4Bxrbu1YoaES9",
  "key21": "gwGforuBB31yufrKGraCWY6wULV5CmG6nwRsE1KKLarZZQw8XNd92sotTNagLis4wo7GgBuKdm2LupfVTktPVsV",
  "key22": "389cYuyC5J7smBr1BTMPng5BSCnCmv22B3vsrrM688mJ2cvNqjJRxAXmKa43WVnzn3edW2RAzSo9Yc6EQsXj1coU",
  "key23": "3PuhsFotLdswUNhGNmWe6tVbdS3Qpo7jXxSetniG1RDWzpyyr3be7cfzGodWhe2iiMXjkDNTnb9RsbGnBHpaz9Tx",
  "key24": "3sRrCLLkE1e96puz69X5VjM5Ju38hnXvFwY2nzx4bJAcFzs58NLJ6qK9KZmTEsAwFdQeowadXWT8QnEbbKKM4ZJc",
  "key25": "2dJ2cgKVn8FYtvX2Pgo3mmLZwLjNTJKyXYXUHjJAhU9x6KGAePn9TiauS22LRRmFgXYskBb12XZWgbFzLt4CJ3Rw",
  "key26": "4Ein8GkwH3DEFm5kEh2HVbdRNMczfFb36apXtf2L43TCjUAWd1gwx1rV6GRPt7Bxce7wY9iX1jGv7Tbodi7dDern",
  "key27": "5V6zJTrFZ5GeLxnfffYoqP4B1tggtM2hoPvyDUkMQUm9N8BFYqdTSjxhXs96qtymuWXgH4q1BC7GQGGyybHZ3EAX",
  "key28": "2wZHvdYtczzdA8wsskVQ7XZYzL1okZXSzRXakQmnWZVt32MiiwP6z3R8LR34y3fXKpdGVh91fbqJgkM3EnK5MisV",
  "key29": "uEwAzF2V2JpMSxp6WqzQ77TwT9qQB55aJs7ZZcPGEtKWEvJquXjp51BvpSbkKKoBuTTSAvjg6DzoTsyMT2VStFM",
  "key30": "4v2susKKRHePUJ3YRvoyuLCwSzJqXQPiTPWza9SBjXTFkmu8PX1CUUm3rYbAmVjfpFo6bqLqgfR2thEmQ8CMbDqU"
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
