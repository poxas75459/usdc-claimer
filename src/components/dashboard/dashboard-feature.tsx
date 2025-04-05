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
    "G6A4GiEM6gpi5HW5mAhBM1Z72DDdpD4ocJmZvqqi1UiwGqp3qRFssuTvpN5m12fUasqbWSwZVFLQHSwFE4eqgDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BNWkWyMQVpTgNT2toQ34ktDyWUHBDAM5TumTfVrHRHGrpKVu5eLdH178VoqhjeEVuJV3BBMwpVLtTMamR6aVXp",
  "key1": "2uiAVnsSJjt5UsVJJTYM6CUVqqDihkETRB7EqCDcNdvE26c3cM48Gg7t7YmYnHh6yyjPhji6a4PpnyS6YPUPuEHo",
  "key2": "2SPuuWZN9zQuk1ax8gXRxWCeuE5UGjoMu8bMcPsa6m1uozSxp7F4xnFyPQjVFtwcSy8D4wy3pX8nYUFtsRT8Def7",
  "key3": "egRXww3xpRpL1w4mm5NAHoQ3A1W77v1RXKH5jKTAtWh35Y4MVLnq4xZnewMJCMD3NM2HaA9BMW6qQ5g3xL2C9jN",
  "key4": "5U2AkAj9Sd8jJZvJQKPcq3FnsCEebw9MGz1AVhRiU2D79LyQyQE4swBVp37EhxcfGn8izt3h3mznnpX86SydxKr2",
  "key5": "5sL9Hbw6n7PG1kyxoU7ZjsKGonwdtof69bbREAUU1xhbmBzZyKUE1AX6QaJK1XgAB9GVcncjTfkjn8TNMciKJTuo",
  "key6": "2ELNRPu7uaNHzhFyw2J7aSKdWNyXtPq7oTVp4UVhgmkVMbrbCGMpEoWqmwR1irXMWpb65cchT3p536QDPGBtPZ87",
  "key7": "4hH4e6QtTrHEJPPLWDTADuGoeP2HaHZJvV33QzpC5KCMjTBqf3QUQhgvtZVKf6sfASHn9WX6tMbezHmr5Wdb15bu",
  "key8": "38uRDuNqd7impENztyYLui2b7VodSeE8urxydTnsAcfAmRxVekuSuXpn1hkrQux1JjNagve67XEh9JxAenFrbKG9",
  "key9": "4gn8HeaHLYmBMb5KeyuDt6ZSRtTNsWBrKZSYevB83ocTKwsFwWgHEQpgPzr2QZ8agirAzbEUDsy3zTb4HLkzqCNX",
  "key10": "4Rcsbb6MAVxrHrELqd3B4smguhjDyMVCKLjzZ58vQ8YELEko88B7E5ZgmCgqjZ3QQ6BsHFnkGmvzCZsmSU1c88Lv",
  "key11": "4qV93F53CZFRCQLY2Uta42aoWRdo4Eeqbz2XFQMHEYsDDbG3S3HvJdRwfBUFagonohPiprQgjmSTS811XzV492kw",
  "key12": "46iPFi9sgL2JwYDEdE9aTZa53vWVCKwWbKMMMFtaYH51A8FaxZgSU1HXU6jX3G2UkcY9yZvLbaM2DJVjEMkaa5WD",
  "key13": "3uADL8CT2r96AbcRrn1m3bLK87himGoSDDBkDKvVjwHeB78ujaYLTNMWsS744uNFv2KFcdJgKBjJTw5EfdGdtP25",
  "key14": "Www8XYV39KPZuFmDGBSC2tzX39te5v97YohemnjH7TMdeViGwPJeKMNFyefhfoMMoZNkBrZsGRCkPJDuSfMVteT",
  "key15": "4AvAJNp62E2cEZ6esyGpF3s44ERTEPXjKt2FRQkoMZvgiPtgBuadofEAX4scmGis774RKNApvsDzCmbZqRzcBsg4",
  "key16": "57JFSWRnjsL8UHnhnXqmvvJWNqbDTBcqEKMsa6KYTRWf1CKnXYFturQhq7Gc4xbWX31rbDNp5qsvmYRcfPzRCFLS",
  "key17": "4exrkPjtMGs5PWhZ7CWPUbkb2H7EqpMn7zrCAhodUUFJhTKxUsEXwg7687i9B3LsgkgFV11rtbu5kjSCMYR8Az93",
  "key18": "43btXbK17RyACtmkoShdSDGNuSCGSasCowjq8CWpCqUcwmDqv2BpdWiCPpv6sLh1dQsCsa4gVhXjpYvL5kkoGKPY",
  "key19": "5q9a5UPhBCWKZnzGDdcbYDMJ54ZC7HDgDg39JqX8eyJSCTAnHCtDs93dmEyZj9u939gDreK4o5K5FQcZZhxa2ypf",
  "key20": "2iH7Si4CxwTWJhtHWTiX3ZsQ1NopPMW3T5L4D2gVvDkSwM36PfkUd5ryroucAxptd9StWE1eMwN2mZ35KkdHFsQA",
  "key21": "5AMy3Zujmrp8vpSxr8pKbjRsPG6AtMZnGji289EMm1o3pDDEFEBi5nFDAWsUAV9DojrG4KehnTnAsZtpapdiTPyX",
  "key22": "4svDaJWnr34sRf1MqgDQDw73nAsQ5KUw9WWDjeLUkUB85ptSU8dxXZaZXt56yvNjZ5vv3Ry1Xh62BcScAa9a6mEx",
  "key23": "4SD7R6qnHpvHCqXQseo2acbDxWfETb8mqmjmSBqaiTyWdmd49aPiyr2mgreB74kX5oyB3gapAj9WnCXvVK6yioxg",
  "key24": "67QbH4z5Zua7Ja9Wgd8MP8QrxAhFkhN6hegU1rJHy9x9Li7x9QoLsZcevmcRz96VKbqBgfsaDuHGD5PwdDrMwpt7",
  "key25": "4AceUK7S1kgrjWWXBNP7G4hrjX4obWNVpQ48yfacwXKkXJ3JJcRbdLrBmcQnZtRd298d3AndZ2o57YJwhAEQM6cR",
  "key26": "53Rp6jg2x22KP8t7zHfu9bi6YqLPxs5vFR5mxzk9ECAcvJnCmA3YtPcdxZeTmXzSPq1nncJvLDJs6BXd7ZXmZ4QB",
  "key27": "4mPYN4YBuWHXVKJQjVctuLaZgggsPUfP3Ea22cTFjREv348eLUAZAmJyRPYExEDmLEkpuRBzM9QSe3rfEWzp4cjN",
  "key28": "4CpGDp1DYAghWaGDXMsJfhob5VRYvypXTdycydxXd9PK94LWwBGxLUcBD6h2GuKXY4JVpBMY6ejnKCp7GZeg2Lhn",
  "key29": "5vsY4nQpKsPia9oeMZ57adAnC4apZSTW85TxwAZ64ZzxYbP7Ar3dEMx14MpV66Aei29g21riGrZBLaJhZTmCYPWz",
  "key30": "5FMU4DyNgVZMiBPWZafjhqgUXzpF9BtpGa7LwMiRnViLzSHhK7LbKfwjYsbDExwtLvqgakfKbWY8XvaUP64QDNET",
  "key31": "2tMWARPxJXG6izDp9QZtM8QFEyZTPGgZRXMWBXvLofXpKL5HT55sqMzfKurET6BB3CP83rfTxAVHbHi8TEwAVi4n"
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
