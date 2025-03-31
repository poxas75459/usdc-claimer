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
    "3ytSYj9YFFCyyr3mM9hGtHtiV3dPcpEEJ2wocB2B9RmxDw5mNQmsHvSqS9XBJ43ZFrvxHiaBDkMH38waJX3FfmDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UzeZc93VeJpg58DYqDQ4mvLQYNDaSvyyeauGXD2Ad2JbFfe4CvQQsrZ8KLiUE7DeE1cGbEQrt4XmF6o8DimUSF",
  "key1": "3MuPe7oDncp7NMcZB4mTkstVcw3foAr7UfdzeahAc1gRo65FqyC4sTLX9UQZ65h5NmLq7YpbM2hC4tnbs5AarizM",
  "key2": "5hzMZ5rrYQK9bAAsAsQLXWrYwQySM4abMd6u6o1VmpDP9msSvfu2qQ99mgW1TrcPbSQaYhpz54nh57sTv4cUQ7x2",
  "key3": "BbZ6nr8jEBF4x23AiMEufYDZEXmyVfWmFLVUQxuFSufncGGeMtJarUdq4ZFPMacu2P6gLtqWJR1WSWMvg9Zk3af",
  "key4": "4Kni9QrVtRESFdkmhBB2oX8QDrbCveimVyciyPP5YuNESs6Vo6MGxGPtu63PCv3L7AdTFNu9WWqGWyZDq9FQQWCs",
  "key5": "5FyUe1SM3QVQAmzvnGjMAcSXDSUcicRPePqDaiEuS7djzeuJbXyDL3vh2n3H5Ctb2D2ZPS3vNgi4bEg7kNNt4omN",
  "key6": "53LSj2ztibfErb6B1RjhuJ8kQwkPYipUDJKnuQYnu4cgEuj68DGtdybgKnbX9pWu3Dgb7ZZ7nUyenUrm6mYVEuyE",
  "key7": "55njYv5Hswdus7PKuBfPF52uhxU15ogdHx2VT3Eroi2woNkbzHfdooXXizfchb4QvLLyXu8DCPBZYNMjxaknRE1r",
  "key8": "4fZuPFHVEdb1h5AtVm2FW24fUPhNeB5gA3rjBZmsGdVNDiG2DbQnsJnDAUV9RX2eAddQoq2daZJL1XpH1JcMUjZA",
  "key9": "5WDCxoDf1xZUAKZwjs3Si6CCMJ4qHCuxaUjpi4XxtYugTqnEdX9iWXc1BosHpMu4Z4L8Voba6jfuVYA99LAMdttQ",
  "key10": "MUzz4rEov8YYCeZZ6py9YLvDFc5DxhQV7pbEW6s9t9bwrhzutkkDL2HgsMaUzgP3VdDAxCpDudC3gBzZaiPzdEU",
  "key11": "2QfNzjUEEBjqKgcVcRFRLtS1zUHaFWjNmGbFpt9MeCHCLmqh6tLrhpktK8phvLKtryMETvPDqU2G7xcd6wPBL8Cn",
  "key12": "3tAMaYoAncYWLhU1Cu5sbfPh69b3FBYNGM9c9QqQAc2ERHeKx4mW9NWR3avbkauUrXQRL3FcSMe6DVuqQ1HQCFFn",
  "key13": "1GJsDCqNffts9EjZncXgfMrGDGjeZnvZ4b7uSQkFDnht7aiLzbowN4NEJVceCHzow38jh2QQs36WxLAHugQd6eU",
  "key14": "5Gyqrt8emaHEsK8LoBjX5NeUiNkG2PBiMv5Q57Q5eKc28KjyC2YmnN1JonYa2FMqxLBqS7GdNubdNwPrGNaFQy71",
  "key15": "5TjjjTuwr8Bc212ZUhRGCy5q9d6fyycTBf6UsFmbRwLjYAipPm73Rw1MUEYcss1WLo7sbY2ZgXawG7Q6zdfQdA1m",
  "key16": "2HBf6JE9uRRpXxqyERqwt4aHCrXJoVKY4zkvQ3imyRMwUdXsKLodYuKoYgBz2i9pHfPuk8LFAud2uTJLnBiwbnWD",
  "key17": "3Ac6X8eD3y92VrMCbdomr5QBL1AhbeFmVZqXr5VpDJErVXMEAuDVwhXKoSwbWh3aBwC4S9jd5ZjLyXGbHMuiRk78",
  "key18": "4Cbfr4NmiGj4gwmN9M2tq8QFpiURK431xsV9wYg7EBBupcPmpdZiS7asUDfZPusPpUEAAgGfrMYwRQXXt9nBJFi4",
  "key19": "4ofszUc31P7G3HMDDQREfTXKMv7dXYWggzea5wHNsiPCBnEDW7DHFLZYJjktUsemY57WnRcaUJRD4C6HF7TvpmBe",
  "key20": "5mN3EYaiarSMPEJD3bJhZozoPRvBiXTiMqeTxL9JiL7CwxaLHXEKnjQkYhP77Mym9Wk36d6MsZTgbbxfYpFXwQJz",
  "key21": "24BJsZhTUiR8A7xzW547VfcEWeXwB8v3snkWS6TcyA6tktxMb8pmPioK9yC4ctUQKagPgdEuRWNEJm88x5yW1mc3",
  "key22": "43vycAPLfe1wFTQ34FDc8LLqX1VvjP2RiCBqH4GJPMaCACJTm7hBkUqvxh7xQEYx4WVX1NMm7GX3KccSYjtc8S23",
  "key23": "GwEspqUis1EBvjeeUteyBKVCbXLJMzEsH6b6soneV4dnqwyZ2JKBSr3N8kSGV3G98CzWmBqWJGzadin6KeqXYZj",
  "key24": "5uPSYZgqCEzEKWgUNsiCjG9crBMQQPc79cWkkizHEfsHUUqtHgEdEMvdfDAwtRd69cx2z3RdKun3As152LGCLRrH",
  "key25": "3PKHkTUCEuzhqR1ASsFMHMqMPg873dfHBqrgoQPWgL63yg236YXdsZtWnb4AXt5oyNxMXoQbmDNSJKmokac6Y2Am",
  "key26": "pMHJSnJb9sorxRgMYs8eQZLcrMSaAANmpXAXp57DXFA3u47PWLeEQxuNRDkL2RwmXgAcaxFsz2Hcf5UJ5PCxdTZ",
  "key27": "34eyxrQh5ejkz8Rx1tmzRdqoDxAgJsSA4dnAkMkkjEc1zgVkpA3cDwhLgJ8E6a8MrGQnM2FuHUryoX2zoFzLRTRA",
  "key28": "gjzhLcJLnnMHeTxWbQVRdwNudck2V1Q1ap5x9Qo1ZrLzLnWhRGZaaZdvbz2nhkf5eEDvSA6YV7tQg5gJgztSxvi",
  "key29": "4sn42uHFCQiWTbz2GHL5SgyVriAMQvj4bXe2rBJJ393wzZC6rREmjr1JSAFk9k4E8MhAZteujZDBfm8Djii3GfbE"
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
