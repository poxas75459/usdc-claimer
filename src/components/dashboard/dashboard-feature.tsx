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
    "2K9EW2dMR346Yp8BP9pBj4Ek6fcSeL1AXd5LgUmBtfSVGCCgCe4pnZ9GYvUdBjjBUvgH28FFpe7Nb7QHC1rZeuWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhkzhzJcUoApbRXmC8zM1XDXwP9fKu1CCAuqgHbhYe41hX9HB57WekBkJddG819o582zUtvNpV7fusQyVHyHJJn",
  "key1": "5yyUQsZ2FXaUJXiU8beMkmZbfntkADVjG9jhWcyaPiDeG593pnjvpD2ZXvnpa6yg7hW9VPd28k2DT2qDKoUuhSui",
  "key2": "sPJ8PKn3v5ZjHWMSt2FBussAB9RQhoAZb4152z4a1syjqrjEvDyXDYYDyPJN4s51qcD49MyJ4oNJPqpLkznKw6x",
  "key3": "2jjTTj7MV3jxAeuMDCc5joQMLdmMBxWhkn4ikYgsEkS4oVQU8cvakddQkVfjyaxwo9PuCuCWTteYXuGoXmP91kV",
  "key4": "3CM54Azvmr38MdrZ3q1zdL3XJssnyiCjLtiXxf9raFdGXT9Q7QFu6aNhzjUYHCcR583TAAxonua5D1GQ6Pc9APn3",
  "key5": "63Jg9zd1z5bpqkLNynRyBbG6VzgnpDpRLi2sJ2vKNMvrYMksrtVub8h5zyeYmXJYTgMiins52RERGQoY6cyoZ11c",
  "key6": "2ZL36iEC142peat68U2qC6MA5ej2wgXE8adwzTmNf7qKoXYkbcoTdxM7XZngfXvBKsh9vDLYBKLMAvyxBp6x5YRj",
  "key7": "4ahMkBnavHT4vZkz4BDKF6oJv1cBf7nL52WEEzPEV6bJah3RkJYufWsZajCg7bgdw8dhqbf4xjaX46W8RYnkcEkh",
  "key8": "2FrPGKhDym349twHokBjsUvRi6m2MPLpGE4WGTWASkQPAWuieMKTvMdrVJxyRv3NuCSuQuwxajM7hTm9vhm2uuTw",
  "key9": "3cFkTZJEgfoaanZkEmWfLkqyryqh7i2Gw2MEeVrSjJvoA7bEbjHagkszu3ZfVfoyACsQvjJ8pqHS996MULaJ3uAb",
  "key10": "3gsaoUGYqZCw2wCr9bzJ9XquUQC2Sq85p4iV8hjeXNxMHD2qT5LyHkhwyQvkpsfXRE7J96Z4JRwEen6zkDVYqwv7",
  "key11": "4gRCkmWFBNTerkr9foxa14zB1Abo5Ctd8wNjpLdbTK6tTzbMJeDZGPgHd1gn5nSe6aDoL3poEiay8ekPaQ92qk6P",
  "key12": "2enMEdFAEaGN9X4DJvjqVZC9g5keaFBi5tr5gPUgNfs3CRzZxtXqUx8ZAHAAbU89aNbQNm58nEYWQiDiioM8T7n",
  "key13": "2mjKtoskGHTQLM9hmw36SLtXzvUnrGTFPKj18BPdtCDo869jZMYdCpU3b5ziJAzdiMQRXhAninPk1aj43mrdnupt",
  "key14": "4xdW4vs24EwWkzp1REPCDHQNKSkKUtPkpzJ8Fsu7guv3fcT8U4kwKNyW7D1X3V8D7uWpGhAiLcQnqd6nkv9iu37G",
  "key15": "3yous3wK5eWfan2uSPe8gJTEvchjHuF1BXLvimRzC6GRmZc3sRTb8Zk2mE9NMaJu1kj2nN5sxfvCFCa1fe3SfVyt",
  "key16": "2v8SamkSL8o9YuuHv3i1tpJwirJfbsX64obrKyHzX2nPEL45cNAiSz2BD3adbKVu2Ps8WArpNqW5rxP3TN3dVwRT",
  "key17": "4rjybJzYuET7zCUHrVB4jJc8HEwfqdffnDpUcnoFS7FaooqVAsb8D5ew7SRsz3gwpoL1FThCnFKkCowLE6eX4Uwn",
  "key18": "3owHVVs62RQndy1RbortrnYdrswDHZgdwtZYucCJYxqQ7B7Tg79xn3NcqutCjcTgJNnF38Nu53CgMacbqWiWPxER",
  "key19": "WxeMVDYDi7uJ9tQ6uoHLAJAPSfLy8R1wsAQvgd6jVQNbsFZLTTVbxFMNyJgVSXUKrfdUxN7ccmvHDZbr39xNYtw",
  "key20": "4BHZcsfHJ7Z1dQiB2zQBrL4h37cVqnBgvijRv1upXi9i3QXJr1SynZbvd4iAgfERaNdEAAM59oCZA2ahN7PkUWon",
  "key21": "YGgUKHhQ47YgZiBjvSG31UCG3FkY41GskwdNRDCFfNtmtKhKVQcn3xsTzb1nYqPmM86cXdtPdmG6R1YBgNnC3yH",
  "key22": "5Kx9a3kndCtwx1C2Me5UohQHTK5dGTdwP5x1hDpCjQDD28jBiWBB6R3EpxhukzacwSVMXAvTEDaDqjnGPgZXtQBJ",
  "key23": "4FPUaPVFu2aba6Mp6HaJG64VDbkDYDmVFaySXjdQyPNoyxd3qmiWzFCKCLTTr36rox3TZL29xscZMgq8w1FgQEQd",
  "key24": "2Gsu3GkhD5KnJVxUdc1zUsfjFdHiBgdsyjd1CkTKWsSM9Az7eCe5xPLYaatdqbVDPMXkbx26vx6xjGQpornt1hc",
  "key25": "2WLFoY8ZFLPk1XkbFyCjKUYRoaSF1em2gyEkGr2ZrtiZAhhKRjotrUTG73jYWr4Bt4eN61vwAnQNcfidsL6Y8dGv",
  "key26": "242ULYF795HvLJiyN2Yd8iEnjSckuh1QLANaJyYigXm9rnW69AGsS3CV99x8ikjp6rdGXCFFxie7cbC4ShgA2Exu",
  "key27": "5AM4kja7xsfCrBAiefdqZiiW5voyi6CVM1HbmaUScLMZJs9eKH6CFkxmjguTtxExTJvTNeZVhh3KCtDmpqEjWFVE",
  "key28": "21f8vA8ZBiVNxzfEVNVnmtscvQRFQn2uV22BNyT9as47CfpCD6YXRfuNmQkfLBeNnhj5QDNHFjTgb666vwDKprLU"
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
