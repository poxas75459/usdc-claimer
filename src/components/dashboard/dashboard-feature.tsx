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
    "5MQU9FoRQmma8LYahwW8aTi7xFAjjv8Uv5yUpussxv8dAZMcDfvKN49xgZDhDY8UsfBGMFbCi6yRFAzLvsMkPDro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mY2wWmxFzdUTTLSHGARHoTKB3DWY5Krj9Ptof9xcY41BDHcgXm9cASHrkk2kgAupKvNJxXoQCeZAYTREj5LsBP2",
  "key1": "5n4twdXJpdcJ9wYSErmrhdQCf1fWvmJp7oaskvx5ycckRoTZxH5oDwdcLuPhfJvrbM3w5bJFR77PLKonaxWETBki",
  "key2": "4Gbw6tXG1uqWVfiLREQ8drBvNnsjFjUZ4zpPskvrM5oaLVQKLp2j8rj2TBCTj9NEyi13M1MgEnuMihpCL19eFGTP",
  "key3": "3XxMmdsywKy3o2UEbXfa36Lhz3pWegYwKbMXC63ypUSgPyiCdyuU93HDzr3hWG7R3rsyUmC7HqsSW1Z25qPZJFsM",
  "key4": "8hipfjP4PDAn3ubgUW7pxpjpYN6KhHsoFvokcysjZdzfWZQqniYjew1eJxkc9xd1HofXAWSxjepgxxydWawDYKB",
  "key5": "jsXxhXjvbbzhEcSkm3qpF7tyCvkFdFw994dA6SF8rkwAVmSqtvEBNP4zDr7ov47BZuAaFLaNXVARrzAhMdEZQcr",
  "key6": "3CtZR6cHkUuFJshMg5Xif81cGV93pM9J5K5BZsfRQkC2jJr7AEn5bkygG3c2ePLiSBiovvhhzcSpeJSJkKHXcCYa",
  "key7": "hwnfNZzSeUi6m7qscKgaz5SvevupXXmRDqqSDDcer8tKv83U8WXBuKRiXBNwETBSXRFyMGEYJL5U3TwuuvDsrFu",
  "key8": "4iQ8mPThgNbsxsK1ThyhgN2Dz8QzwGZHB2FG575Q5XhbnEeMxNWZrPmNjYfwEcgpZwpJ6yTJ4dFuEF98Tpm47CGA",
  "key9": "5fNtPMEqAUjWMAYpVHPvRhyorDQXELfySCxVmyJSXEBw8mAHDb9hB28SFfFYGZDYAxUfuHHN9uPiD9Dc98thfRCW",
  "key10": "2X9yyaT4dEd5EucVygNUySDrwpQQPcGiMvTmMGHwwr9yjeasjnGrJMKd2pmZwcgZtiSTbvyzjGwe4iKT26UCK1Bp",
  "key11": "44KCu1DJDcytnvBaHFJ7M2XRbEV1SeKgM7w6VRGuJUEQ4TBkn4xqRKGFCbL3vBvZWSKoH6e5PtnHGH9bX8xoFaFU",
  "key12": "3XNHYW5ahTHYzRKfMMYMaveMJoaEaRVK8QxaqRgSmoYFeJHvL6CsaWdL5XRojW6go2FdWg9Uhih4fYYQyTr4GAGR",
  "key13": "4bT9migMXvBZKADEHszLdw6qXaM6i6EaDP78PhML3WyiU2anNNXmAjPKThdoLGuXCuzEM3EpgdQLBdzoXohYc8y3",
  "key14": "4eFR3atv2PtJkMTcm73GV3kxRBdEyCc7EDe5oSpu7TxTHqLLLMxUmEw449gPwwwX9onLSwv6MPFe8sEutMKoAD8v",
  "key15": "5jiVUrNMwehDQsRa7vdAPVjfAZTsRPixg6SgDsRykzm72KgEQXJ43jCE1GR8Fh6TXn9YKBCYxkhQBM57qeHcszuJ",
  "key16": "5qh4YzfzkmofFUKfitqF4U77zgSUUEefAkQu76tt2NAV7BvR2H8qPanDZo2PzBwpA3eU3TSdXaowUvreKpuWoRKZ",
  "key17": "22HwGgamRU1Qp3kwYCGamhXPCWXMESZ7U5vttUuTnWybWmz99eCSHhPj3C84VDWeRCWMeFE8dcSwT65XJgMUxAAX",
  "key18": "5UrMNdSD1ZqpRZHXDkyLuAargZfUiAsFe1zkko87dTmJ7fYP8q7pRSgU4WhQcVWuKaDXpeweS1io62w5sqEboC5w",
  "key19": "4ZWUuyf6YnqfehPeQBRvPjmU4hHVKfSKfvQzhNkmLtdrdosDCM4mYVq4aq5VRFmHwxEyqojbamQ51g9GedDFwr3p",
  "key20": "3i5Bs56rN5XWYWohmwkboP1ujnN2qCTSXyYV6vGCLPcFvAhUt85SFCFxMEMjwSkSzZKNdsaE6yCH9fu1vq7rWzE9",
  "key21": "3TeC4S92qmJzUCJtbxR3VTxJxhCAzfDoyZc2yBKuhdwHD3fPXzkYZeVdS9f5ctgCvd3uqiryHbHwXT7RFgZnfwCj",
  "key22": "GCMKzP45Dmn2EZZDXVQSM6YDdNRpavsc6Hzpy2wEsN5SNaxywbNJVxDYccRZ4PuHqJjARMo7hCvfGEQNgN75VUu",
  "key23": "3w9hWf3GNhfUargVBjpW7sypdz7PW2JHVnLnXDrT1yFRtbkR9oQEm26rWWdWp55qQcRboyHKw5M18CrZDQYzGhpn",
  "key24": "48EWTBbXkHcfoSgaVQARurAS96hUaypJFaPEtod5uUhaFKZdNrz9h7x9568M2jfaPuzoFqVtgv2NdtWu892NDPDE"
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
