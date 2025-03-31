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
    "5vNtrkJ2PCFQZc8NXnunTxVXNwvrkxkYtJrZLR2dqRFH7HaoRbKSSQFZcTgQrBQs7Ekvs3K7dCNo483RBgQdaeZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyRYygrjxnhkvRCZo2rdssCKJNz4NhNfR1QagCuF6u2tVeqnLj66EH2NnsvRQse5gV69ChAcnecd9aMkeyTfqyR",
  "key1": "4kmNhPAFPVZL6inYfqJ56yTkJakyDvun2NfkgrKXwYZUEx3Yswak2LJYQAZhKFg1SAd6RPAqmFYcqs8AKudswvvH",
  "key2": "5oTp4LJ32R6LP5KVoinJXdymbwbvGgnm87uc3zbMvieX8r8h9BXTbFMJbeyosff28bR4Dc8ZTx4DQjcpM5sUGnVK",
  "key3": "2fYqgcavABpXKQmw8wsszuyKsfQJNpxB6njWJ6tmV3wLbRKZC9drN8QWTTaw157FTVwujQxANRwNBTzj6y2DoppD",
  "key4": "5jZmMoBAfbpuL9DYtEC7E6nG4XNG9sx6PU5Wx6duWg8L1pG5gXxgKdtgpKAEr2gKiQ1xUDZKUZMKFP57a9Y2yyuk",
  "key5": "3DgcvjiuT1YNF82ZVVC5PapMus5QG9ABRwvFsYZ3tsdJNAH2rH3UFmGJm9beNzBUMnJFzp2zkQGrJJfkJztXhdJr",
  "key6": "5JN3LGUwXsZ5Un8zFnCEYCzZ7jKaCBuQWxxJarTXm2YfJmmgWXMVbDfBBJzF5WSxin1pwX1owbquoPsEm8wEgrFd",
  "key7": "4cyE7B8qu11rQ4phxq48C7LYeKVvq5tqcbJsdNKtWetVegPUHRbC9X2TV54yFXCd8FTqMysGQVo3Ar5JEkRFKe2p",
  "key8": "2yksLryBBBgV3Wfgb7dJ6vYXU7F5K2bbnhHyeENTfuuYFDTSzS8rXBjZdA9TRMyAdpLw2Rb1poHmi7KujLRVawZq",
  "key9": "5Lq5hTPPeSNTiiPAyLXrDBtTiie4LxfUuSc9tN8VvPoD59UfStU86jKsFRqprbjWPDXb2kdtL3semzXM3TkwS5NM",
  "key10": "3grkfZjJTUUoUMV3R558JcusWTXEmXjQ2hvcEynvFUshnE7xbVatP8TQ8Ld2iVs5iVzEtvgx8mQGquaEw97z7AQR",
  "key11": "49SDDSHf8n7u2F6XMTzWhuLm6Yg43Mctb6en8WsSefSVBWW5oodFg1NbyTN7xPbPU8FXFPzg8g9Q83hRrx5fQAu7",
  "key12": "3HYyywtXX1oopLKgUyoNyDYM2X9h7LXfBpHAphgWYZvBUfNqdPMgwqRPCGnGdPUXKNUYT4F5FdBpBdMPKTwabxMa",
  "key13": "NuKnQQYT2Txw8cN61MLwjq8mV2tPPLXjbeXuMhs1tfPiGrVGX4boLxZkEiuBk4tV2dhmZ8VBh5gDRkGfXRMBPq8",
  "key14": "4YoxaWv5eCgQcWCUqT4km3JxrWziihxUuhRzztBLvtJEQYbzrStBbrn9yGSFiQZjviYcNiHTwNpfr648sEoK34hn",
  "key15": "4SYSc9T9bkppmXkmhUwE2MeBxiEx33YgV2qNGJTjYyVqEQUS28m22vZeEkqiJCCBMi5AWKE8PDP5Mnc6CXnFVjEQ",
  "key16": "5znm6BCmk3x8MtCMWqwT98PQEdJyFDpCarkpoS2WSrvsPtFENAvQ1syAgqE8EuMRX92TQvW4qEde8NZb2XckhMXP",
  "key17": "2hq7VzBUAW2qFf9kemPEarCZMnSWss6nCosWMZXmJRRxixkDh5ivxsTWw1mLPqt5PACJ3QibMSKdyM1oKxU8ysLs",
  "key18": "4pEhP6VDehwVT5RWcDPkceGQ6uKAfhBZVkh5yvqrewGb2zhJE9eQf6zYchgztvjws2MUqXTbVKMsKwUTjs7Jd2aZ",
  "key19": "4humsCxVW5cKUXXHBnwCY2VqRLbTa7n6LFDuJ4pR5jHsFdenqM49JWsb12mYtgDx4cBCs2yvMaoyxSgsib5YHW1F",
  "key20": "vDBLRP2A7tt1CMvALyjsW17rnAo493mDCgfg5Cists4kdbSvTVEpSPGxpKpdnzhQEwX6VfLcDZjuWwdFcJm5UzE",
  "key21": "4s2dGHyWzmHs1JQsm4C99zbC5YkGz5awYofkB653sysPTom9mWw6g6r19K6NEAW7WGRr9BxmEFvK9mrcBEJVnT56",
  "key22": "3QHGSgzb1re6jSSgZBVe5gdFaXxvBXJvzh9zB3oauYcBhQ4WRzMC8hqPeL7N7QWExjLG27sfbEZPy6YM7p2gxp7e",
  "key23": "2wLSbgJneJ9Sg4nT1sBEmHGsN9yx8J4LTeQjJFArtdpSn2MUJurhHDzzuWwa3BSdHKqSWrFtwNmqGLsqmyCgCPJP",
  "key24": "4RYWrQM1RY6618ZMfztA9GmLzWvnhXmDwECGEdXWUzboZ9zvJH2YoA6uKce9f5fJRygyGamUEdczaAufpcarGXQ8",
  "key25": "3cnZUDTwohwQFTNmSDysF2dP4DJ2cQjGhMgYhZkh3Xa6jZG1u1j7RGt6jnoSQc72ds5JLUTxoknBd8ji1Z6XtXgm"
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
