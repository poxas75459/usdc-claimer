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
    "DCtpofkGndHNy1aRFjHpfXWeMRmgiURiaq3zBhPYccavCqT8UeXXxTbLoAWkPhteSP3xVKLgnS7Bz35GZq6omdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GmfMevGJzFfb225Gt58CiwUKsGkAu6dTLtiLirDoAybhnXHWFSaf1caTvMHaMZzTrb361c6DgdgNZPDp9U2sQyN",
  "key1": "2fbXWFtxHdwmsuedTUZryyxvdeMrVRnMx4Mux6otGVyMXBwseyRz84mhDzZSsMoVY4s89rWYdZPoQteXEkZ7vSkP",
  "key2": "4UNuk6XQ82E7HFe3CwJmUy7igFXTmNJ6wwRgfexCQQyWCiGMpsKd1FjEEPuRAVMziMvkayDHBY4xyAHdZ6mrFtvP",
  "key3": "4HCk3cYTcbsXT9J5ubbxXVWDjinvn28ojB3gayaNnwBavurGj4j4DDghB3gEZqyDJBFKtX6KX5FJb34BY92GtPuC",
  "key4": "TE82jKbGmenKeLmrzbsXD6pByANk3UC6K1qarkUSUeGvRobXyFQGePLrRn5ioWuBZot6cQ6Bb97Af2QccySCT7t",
  "key5": "2S3PBAnX5TNYkBF4Np626Jjcm9NTZXBdhfYg7YSZ5KVLV7pRB8vmjeUVWSxNnBGPS7yADRx8pUwatJvctWXAFWTR",
  "key6": "4MpSPAMHvSiivkLhvxjkFLvM6XGaGoEc6cqGZMkqFhWyR4E2hvqndFY7wxi3TS7QMPp1bLpqYSGqegCxET4WdSnJ",
  "key7": "3FFRkSCKsrERfS4FNH1pWHQnF845e2DEGkFsxbfkExtxVPE4BHYuF1QSuRnZ3MXhnAJMNjChd3xtu1R6Jo7LXMLD",
  "key8": "4Sdn2EefZHUQX4zyTwaR3Y861kDob3fC17iv1iSRm9Pyd92GDKAse2sp4CzkEAfuaAkXE3PxjBFqhA8Y1hanAfb7",
  "key9": "5zrSNm52C3vA7FfQde59FM23uD7Dz3pRwj41TN2qG5iHEUzDq9gTdXY9AhAjZ7ervmyhTZaosRVaZHcNNCTHTrg1",
  "key10": "3hr17wT1WpFqEWEiFHUnv8sVUQjjBepAfY7CeW3CmXBPS53HQXRGi4WXi6wKkkH1ngu8bP8nPcZqk2YpCDYWsNTL",
  "key11": "3Z2eg53JSdFjP2JJbCCwpxHAK8HVt3yuLDGs9VFCzqxMZ3hbWyafbR9YN3hnX8VUinnzS84qb7uSMYQHUXdidS1q",
  "key12": "5JxGCC2jdMjHz1MHTGTSWBXCzE2Hq7behTFT68zHLvkFoxzEKoTuz7yKRzwovrSBsZop5BfpPD191DfYQFNq7V3A",
  "key13": "5MDMchH6pZDxxQ6SsHJmocz9oPM6Ws6hM85QXPdFkqJYCHapdTg8ncMMQVQ3AwL7vaPVtGndqabP1e5FwgANpDXx",
  "key14": "3cwKUkWU6pNV4fGeR3gThs9tEhhp5BJNJDTmuuGmSY4mKNPLZbsZ4y8NK5BUKsaukcB13fUAYucVcRxJ5Q5ormkE",
  "key15": "2U4bin83T5x3RspYK9aob42DEGa2uMdWWuWNcuHxtqCSJHm8emE5tjVBj7EYBF6SaX1s46jUXT18c3kT8Z5qWFsD",
  "key16": "5hTYmiWzXSDpRTBh4KoUNoRJbp2WFFC9FRsUxf9ssNTx6eWGiVWALPdJAce8957Gtjd2bQ5Z2bJz91YXKGJvm9NT",
  "key17": "32UDWe6XCiqBBGXHk4egxr5EzraLYkyqhU4Fyy3mqQX4jxi1EktuBVy8WnVmKwo8TC3RYwJTyuf3a7w5G1kCakfN",
  "key18": "3iSNSd3KWKKf7uQZ8JPwDuYWj2eufgTo38vbLzcq4cSv5Cc6gmShvvA6bzr1L88EnwFB4kSCbNPhdvzWfEp7i9Pz",
  "key19": "3GZT6ybdmNkMPtQUk9HooZYgPppQq68PH2zvLa2xEkigjPp9uYs7W1hnBrfYYxxUBCJ9DzfsmXrJtftf2KvUxEbp",
  "key20": "EMkRNWhHTsLQtDvt9X9Pm2s7fQxkSEDjwy86amLm7grsN8aUCP47SbNzEtTEECXwM1B6JWNgNxdrQyiGKVKVZHU",
  "key21": "5rCRokDhPpHjHRqVPyeJJaZ2mv4bW5yLgg8VnSnhyaVr56hsRLyUXPJF1HHRCzaN343bsjZkBkm43LxdbJiBdqc",
  "key22": "KTo2MZABwJwN3VWVAFzNV5pp8uwwRggbCyekTRhLMcsyVU3fBzQyA4EbLErFimHnhAxY3BbzJ7FN5QPMQpvTfXt",
  "key23": "3AeB7HUKfLAofmJqMyCnduNgwQEe6rupbJ3EYe7PQTi8LyH5j4qHtEnDVvXrBQxwnJynC11Y1nGtNDPdTCfTr2U1",
  "key24": "4y6QgeARK9EFVvXQdQrKXzpKmXxCXLv8d1ZqPm2eeunvYMTEEYRu6De4SrM9PvuYsTVjBBLmXarTLQWDGyv92dPP",
  "key25": "4T6uGxQAzP3rGy4FU2LRxTDBLzaCFmoUC8rspDKZbAGhyaEMnmDXUk3VXN4wgfgYrprzUckYbiHerLXo8oYZhRR9",
  "key26": "4aSayXwo5gTD4ziDZin6ZNQ1KqpVbDd2ATagFK3T2QUh42LXRja4UpZhEbt4kYm1v16GXb9rJZUHRkEJY8LgkYiK",
  "key27": "5siRxhooeALMhLfWoqfVuMtwqSEvLBkt4LSZMPdnCiUXHfS1bDsU6XWGSuoAchvf7pfwkwUV5q2geXJ8E1Sgu8jr",
  "key28": "3ePms96Sci3uEiq5zw6SP86S5Bi1sf9hJ4hAAgiBhapMAT7u9MRVNVkNJy9So4vNa9hgDuz4m9448Dh4Gc9UUewa",
  "key29": "4byxjpjaZQ2DAF2sAsNjdwCN3hLVqRBLg4pQCn9MgGvdMn27Qe6mgwif8NDeJRxLbjTzHtBx9SmhtEgKCwvQHpya",
  "key30": "4jLACnnPaJxHdEhNjjo9wmT579imn6P6LstTpjjv5putJJyxxv2URzZneXavV8wJMyNF9PZhD6oSFDPjw8g4eNLF",
  "key31": "8MQM27wwQX6kY1wvN6iWmpbqr25St4dnkqGggannaNGwYe3MsdHSF7VMse4mnEECCJrnmcr4cG7YiFhTeR36vw5",
  "key32": "5cpDYNdLVwPz6w4Nosjhp6DaxcZxme2XdBDgijM7Ann8iuh6LywxgycceFfeJQpntCGrithKKC1JMxvwRq3DYGXv"
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
