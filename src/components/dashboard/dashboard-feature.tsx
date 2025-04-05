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
    "47jtGqFJRyYrkfXAobW4rWmS7ELKNMuinwu1HyBJpjQnm9zUTb5DVQVmVeXbvK9uUSbaBsE1RTBopDBoEVDJkVpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RDwaJJtD5deMy2CZgbHS9j59XSaPtuQM65fH5J4rTNh5YKFvcn9PGqUp4r1szpNWSwsbJS7HDof9m8nnYkcBjEW",
  "key1": "34v4kGFX7RZ7TprxhsqXBY1sUv12gbWQEfQZ8iDkTYaz6AHaj36As2X1jafwRSE7yvE7AyVrWAob2gMpSbZrjmCv",
  "key2": "7LDZ7L39FF12u4pHXUeGGxswyMyMpY3yCZ4rcT3VvocHwDUbivR63q43ve7H8qfDSmJrhnoe7M3X7ZXdCCJEozi",
  "key3": "399UjrZ34JFRFvStmhD2UT5wQ5EGwV9hfTH2npEkE3FPMKpfy8h2gH9VL4X4jwibNYsheL64iaQfDKYPDgf7aDif",
  "key4": "28q2nszMoQyqRr1Q8pjMSvrwrmgPRbRmaiKFGeW2BxB9qdmx7JsNMZv4FPoNKYHVTd6XaWLfkgniphrMZTxbAAR8",
  "key5": "2LEuw7W2nMRQorK3QGXrFbHbvdemmeBmtE1k35uBGX55ZYWw29ebJBdCTBhyVytHRYPw9hWNCtDDjRSWX4rSFuMT",
  "key6": "4zq2XLeusrfGRsuvSYcKAJuUUdEh3zaZunBpG7h8Efd9b5Lg81bpuDtaNKXYDJXxyNH7QYwqnUL6RCtM7j2aJmiL",
  "key7": "2L96V6ZRLt4G1SAPn16kbf5474CToMCzQsdPCowUAFe76ACa6wXQ9SMFeA1ZV3Wki1XY1v8h4eJn7PpjqVRSiGWH",
  "key8": "3o4bLC2YqHu5zqTLavkNHX4WDBYZNkrpuG3dnhzp7zSKBz4cJkuDu4eQWSYZd2DeYBDjUegiSB2BJdR1vxTNaAh3",
  "key9": "3BDuPtYPWgsSb3qVjUY2rCWAtzL1i638tJSHbKqKekyZ86QdAfzVcegaATHJxYwRMc18EUZ2ZiRcPCCSDPhuwLCh",
  "key10": "4E74Vjgk55q4GsZWk524KYc8Ys9aSoj5fPYiGbZpQ2toMSrSHkzynv9r946sbPzutunE5rXoUq4tG6yGjzeQVg27",
  "key11": "2rvCMWytNPVExjpXURzq6VkcwUqZpKA2MkaotrzQNTT5cmNAMpruywQviMDrX53w1oVC2Cpu7RdcPLf6sEuCETGp",
  "key12": "3qHj9EhbKF3sKK7XnZbaoTwprPAdmYn213zSjUCMJQ34jhcJbE5yf5s2CkLwWmLfqgXExKw8ETP9aABsNtPbxNS5",
  "key13": "2rgqgx8kvrpog2EP44oFhGEQEk8FBnhkVASCmdQeTd4FevNib9jeMEqmhRHyKjZksKsbMt3dkjsYtzPknr3QRz8o",
  "key14": "MSWFvR4WgTYzag9gR9vksfwC7H4poPfsxosk6SQCg19MQ8czqX4AWwnB8YiCgmvZYbzKLJauH7hWiELGY77UpiV",
  "key15": "2DBvXUJqM6hfPotJDPKbennGDtMzubfPwujwqmCFZkZwizvWh5L9rjwGKQgdTEonYUnYW5DcyHxauQximVrMcTJj",
  "key16": "tJgmuJTjtJvcsacdNv99tsQfk3c5UxMuSPv4vX6nwAjMRSZvUNuzCJQr1SGpqfkrNe9vFaJHiaeNR7UUNEAKkXe",
  "key17": "4JdSkgMsoxkFmmFYdB7PwhRTLq8xreyhKqaRk7VCHXMTXVhtm7WscUgDvZWgC2prCGfGtoRwP9RX2xNyARum31dB",
  "key18": "4aNqkuzK1JuirwkoLcqDzgkQtMGCenE3xsZZPBnJ4Np8MSvc2kt1xE94TQpxpXETmSXd4uoVkfrgr5J3n3EzKYsJ",
  "key19": "2q3V4szjyN4cUAMVd11CYzZr2G6k3xmJ2fdKjcjfKnspyYEjwRaTvR6bGJpDs1NzusaUAuRERcvFu81ks8xPzNHB",
  "key20": "4d6ZST7ZvLdXuzFdMK2vkyxxerNEwFP9V4s1meMrmCZ7TkCxLjGSbCRviUEK8V4p1M4EtUx15XqqytwFMar8hgo4",
  "key21": "5qUh1XCdvTaoug1k7tekdYJFLFh32BQ8F5XaUXqpput4EkmtoeFKvgf88ixZZSHMxhDeyGznm7DqgRxcpZUqWbV4",
  "key22": "uM51rRUzVJHivEsGR8JGPgYfUobTvbkRiD1fds1RA7oDsNuPvEGDKJHK8uttVRpK4NwKPrgeYSpDigqKdiJLMDQ",
  "key23": "9dh7hzYatTpXqkVVWRpwDePBrh7PPDWxe22u4EmkYJQ9LRQrU22GX2HUUAJjddRkYu1LRsxXw2P5JDFYtWUayaw",
  "key24": "EtXHQdV4VJyDQApgUnJiL5mV1Qe6SeXvFQmKJes7z3BeHgXnhr4oZMEEsVZgyfZ84ab9yCTVwbjUCY6Ht9oF5er",
  "key25": "54yJ3nxfHqv1dXtFf6ZLWghiUJTQD4FPM8LFHbfQF8Nck68wbn1X9G6DuFNUEjwL7zj3FB65btUdcjEi6LaPLXWc"
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
