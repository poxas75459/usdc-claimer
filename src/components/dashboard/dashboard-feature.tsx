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
    "5tLgEVetsNMKSEJuvDSGSQYGdGzkm4CtVjohWgVBZoZw1kdGzkNFy7Tc6QDCbxmgUYjWsVHSmFhQbdYRUZD24BBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kq9b1rQL7sJ3eTaMNRLunsZtvos2hGdNyUP7CXFtCNpFthWQmvPtmXAvHPyvgEMr8gJGVdptbtEPBM2Ak25KKH",
  "key1": "4Wyx7jutTtgFD1ju9o1XdMpuKjazSPCtoTF8eFN65FGVHxYyrHYwBkxG7FL6Uxbhrw3cf1EtQjrx65GwaPW8Mu5p",
  "key2": "3BUd5p3JMUdP9AdbQSAQYQasxywMX6r5GkJbS95bmJovjr4cJMj8GzSsvMKnxRG3bBJK53aFwptwqFU5FKVCfQaG",
  "key3": "4BhFEvKxKC1PuZ3uzvjWWey2f9HVV9B575jDetZ3kctVM1Da2rrJcgH42pkqcBvoy7V6EYybX3Pnj5VAn8Aq4ZtR",
  "key4": "4BuxkVMY3m53MVyf5a9JPppDk1HaJCWcW7i2Frrfoef95TEY8iHZ1X3i7hbx1oLhBEXuSG9aU1ASZHDTmsJLkeiZ",
  "key5": "4YvWGToQXuEnrFLZiCGvzTFzhsHLkXHDDW1qxytv9rBE453SATJq4gS2jKGdexJrHGmcWsinDbSUgqdzwNfXoMRc",
  "key6": "5q2dJUiZcSkDEqJtNofcA68FQiauKk8M2Sz69pfasKMRTo47yZam3wNSEXvT3fqcNFti6tR6DbTVRuX1Nm69N7mK",
  "key7": "3oa8RSH9HxkyN5dx54gsCWv8ZGChNsQYG8UrCFnGPGRQjH65L6ET8m6TZXfaPVHYuJTYP4LebKt1H7pQDej2hEcF",
  "key8": "P7HBPtxK782g1JTUnPPRubEu67pe3pbqo5ZF3YmxNwCsf2tQVh57jSPSK8DFhzM7ovHk6cbSsY7BTJtectkHxYm",
  "key9": "7Hs7rQuKubKqfUttXmBmNxWXUQLqZMB2wEbUFSbCBqbs9k4L45KhmDUjB8NEdjByWt6utv54eKmoFSAZPxMabS4",
  "key10": "2Wj9jwCNK5rRqnxvpuZRDkoFsVn2qTcSaxRzB6CghF3urULQd9puyHyDPt1xqKCTD8maC7kFXdhcjy61iy82CQiD",
  "key11": "38L3Bi7ViuTrFEukTHaJJVFMSUUKc2NgqvkLhVwxTmvrNgDMY24vLSyaTHwpxz5mxY2QzB12H7qt7FrWcsRBUmHt",
  "key12": "26iDGxoo18yJiSUHGB964svhTfodzuQks4mMtRFUHxB649DWtZAqmTsALgBWekmTGwxvAqnoc5mRUaZrAnhYspa3",
  "key13": "49SDmrM9uaZ3XwCufBRNBC5tU8WM36PKcpBbbjCQspKn8HpikRDjJVSmXFpiySziAsizd8dh5ZUhoTiKbXfRAv54",
  "key14": "23ASuPGfkMnmLZtAQGoQ1YKWdCVb1yKUe29pCnB8eGRzdQ5w1ssNjPwmYkmKuWy2JsnAuhoWhng9sWPrpeNsZNYp",
  "key15": "37dA8Wfu1vAHn1ouLRUzRm7S9DEZTLcVUM3uGXURQE5nvtkkRbydcaDBPprMDzGtudN7SM7Cn1hR57ZLrUiStGsj",
  "key16": "4eNJ5dRDk5iZs2sMcr1UHjhPRdhj8QWpsFBMtuoQpSyNX6C3AQnGKwgceuPCF5x22TzcLFpYnQpuM4TWePxnU3yC",
  "key17": "5ksbP3WW8hg3mcREixvgm7549q4n1YGZnACVDU5Zpat4rPXxHP2tGdi98Qhs7vPPeQVbvYTb1ZNeRX8giTEpk5Aw",
  "key18": "21Eb4LsH4NhjJpUyBZmoEGz8fNdNLqCX4Qbufqi8gxrWmmVTw2MUdNGTmDt5Fj5WaRFLfMvir5QipQV9pLMLUsBV",
  "key19": "4TW1vVbLWjVu6iQ63uXkAvjHHqVQRSZ4SWRACdAu7hnzwZV9AoXTcKT1Wvu6cawuxkV1uGDfso1eKSLmZ2aj4E7U",
  "key20": "4vXa53pRRgHNNxapXigjzP7KW3Qs6tDLJkTZHPeDZqwTD96nesyZjS8BzyHZEE9Xq1EV959XJxwmBeoggMjY41dT",
  "key21": "JzSAoKHM96wcZcELZs1SG6hWUgHkqjogUJs8pRhRbkEtmzzyh2MLea7Br6GEQFU15jC8mpwF6nap5DM3z15pHx5",
  "key22": "5wtwP5CqFsNxv1kaMHCVT2VrrWYfdtB5NWeCWCtgogMNeUfCKnpE1MWme2Mv55TiMC9kKtKggrzR3x3PqwkyqiTa",
  "key23": "Qpp8SLNW85Mr2NyZa1o2xg8ePfSKNNgN4wSCvmR85WsNrTJLmVjLtSeCbh12CCBYk3FLXxxwNvYJ77TAs6J4nat",
  "key24": "49sE2BB8ZXdVs5tdHntM9W74YfDHVWbmWcM2CHpD3R3aqWUvKjg44EyuEPditcpZSjz6t7gpquDkFB7qTVSDfGaP",
  "key25": "2XhTMWfhvHckJMwtHHBVG6XTKCrBGBYY13XaJ8uKz7uxNu3kyCwen5ESBhMy83foJtWdmRx8w7o3g9b12xDL2AjR",
  "key26": "4D4GASWGvk5NHsRHn7pPKNsVvNk6njbFzXyYd8Z47hw26cviBMgyDT4CBmgXtaKa2pvoHk1AjTFW9eecDaDJGkQW",
  "key27": "yWPjvdoMhdf6xJRpGyfG5CDDJHD54aeTwZV7WmRBgkXs8jH3YDvswCLGjNwLTW1QCPG1j5uaRkV9Fir72d3GtAC",
  "key28": "5aXEubsHsWsXJZmWwBnoEGeuBn3YJwy4brGw3EiKMNRxXfhHgkS9piFcXFMnwimDe8p4UiyK4L4S8vqQzevZCSyp"
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
