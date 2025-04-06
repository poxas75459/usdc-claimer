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
    "4roVfbtjQqLEeVt5cRGomko1TBzSj5qv1Cr6NTfsLcpUFUAcQregSwZfBHw5dYWwjs9YZxzjVt7s6Ry4pVkRip1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnfsVp3yY2itg4SwRkWGSvZi7g6KXTt8xwtdBMsEsjFWRPCgaDhC18uwcUax8u3jKuWcJppGLMLtUWq3RQpzTza",
  "key1": "5urvTLFfWRvkpmGp4pCFCeFR2y2mToZ5Epb6DTbEXpVkYVXTWEZidgH3puCLJX5UwfeD3iEsnzBGDyS88Esf5HNQ",
  "key2": "3TUYUsXGcgHqQLR8ysAbBSXrUMNYqrXUcCYJyP17NpgwuRvsz1FSUyUez6DmQcNgfmduXsHvup3A1mSw49euv3Ez",
  "key3": "LkJBYQf64UhGsvkTP6CmJ7HnxzQaVM4YuicpxZ7vqAmTDMsTawizVZan15Eq8KT2v4yxE8VSCNptQAgGrUk5CxQ",
  "key4": "3SDxkVPbbc1e6jZTxsVBHwPjf843r6svHX2Z4CdRPfgm4D1qXnZYBG2RSgMg5hpBeteeBkcZpWouhRoeWcynsxkS",
  "key5": "3EMjxJMxpLkEGgdiux2YtjLfH1ij4cuKHzviKQcCBMzdriYBaNVs3Aw7kYZbGdXH9VwNX1eSpKxmjJUvftd8pUEE",
  "key6": "38XTNqxrJn8C2gKKrXCAs6ogeF3j5eWzWwtpCP8EZ8XNxT4Her4aiAq3oXvdUm3dTxNANhoVQgCJUy4nXMRqJ825",
  "key7": "2C9qJ8kETKSBjdgzakcDp1h55m1acz3KkuL3Nvd98mX2aqBUmJRop2UA1YTAJkagGT7WTAM2ZZyEwimuSkHTkEUa",
  "key8": "2RP1Kc7dhEE2QBdHMyeiNR5WJ691SAwnVp3racuUCkZcNBuqHcNW3qJTckDvZZUZ7xbwoB8ZAPAoyQWrzpHEkZPM",
  "key9": "5r6vc1Z4NJnJNmRwKKZQJ3cHcBWNLDD8smvbZMcwYSTkrue2jNEBCdmjpGiqeP9e1sWB9zVVruJyTNKgwvVPkXFC",
  "key10": "3HuWnMLf8dSfnRLvzYwnJzniDsee5BbZLUYLLhGR2aqpiedBYoRaXw73UWhESwp9r1cziKJ5oc13ZVx6MQEZCtBr",
  "key11": "2EUuSKmj5GS49dYmFMbCaFiftRHY4gxtSB2fP9K9Vm9JydeCEkiRqMeu32J9ZkUgiZ2oMYHS7FW9n6RBmT4U75to",
  "key12": "5SQ5HqhLYtSz28ux9ya8nDjjqbSzyh7RLW2474AadzTvKjmBMbiYza1AeUrKYdQrNZasGDUEo6SkwMwCmN88zkyf",
  "key13": "2TAhWNdLEGCqcQobVvCdKmoCzG2FzCSPTF8V5oaQAneeKoyXDVaqE5zDcyVatjNVGswsoCnUM4UCewFvHSeW8Aoh",
  "key14": "4oNjwYp4UDxb5NmutGG1FyJYEoGbNJr6Nqt5NCmyrpXRHZnrDqV8RjVQhfRZG9EQM8pTVStdpVeTDKZswZ7uRFBC",
  "key15": "4G8fXKU2r5MBRVhcx8iR4R2xos7FkMvqPGTcaHtAud7dpXL2cDDWBRxc8N6W4bRKHvCnmSxETb7bNy3km1aCKac8",
  "key16": "3nXXuiifqa9JfRqrB66zxYbDrR3zfW5kprmZK6zXW7bhexNCjKTGhFUgWcfg3M6nmFb1p2E1VwuGXyx6EUWNUogK",
  "key17": "3f3PBGwZRMjeYXNPYYaiWyGfPWGZ1me5K4pRoUrAY3nKZuCuEqjb1v5cweifJjEeD8pLPKXeUTrFoU4sGnD5Kz3m",
  "key18": "4eKsr4RLYXQEHSdCGWYoDdkxyZhVFqN6C5cTj6Qk3NvXAMVB6BgA3wVoJY6k8an9xH8EZUh2g7DccUxmF9FPAQEj",
  "key19": "3WBqp3Ke4Dy8RsKq9kG25zYDXQMHP4DnM42Afrq2jVkr5Fid36Nwow2yELiZhAZRGVJ2cpTHa9YRHf35M8AEvcVb",
  "key20": "mmgPfZpZXFuWWtPJrHErfJLg6RsJXWZWfJ5Dv9XfTKANV97oHBqzHv8H9GjexBmP36pXQqDVXTfdBYNWrCnHEn3",
  "key21": "iVAeWj89cHFtZ3gvgAwwn4zcRmC6TPscjhNCKAVG9vKG4XPnCM7s8ifqu1VL1iz1HtxzDQkbP6jHJe65YtCw7cK",
  "key22": "3jTbXrjRQgpWFCVrHZPWfwpG34FQWWFRAv1norwzsUp1yX9y3BMBeJw9QqKCKfBXuEDUbrr89cy28a5WsVFEHekb",
  "key23": "3pc1TLLY9rtcYirGaVVKE2EM8UPQJde3tDAMW4TqUUbQz8ydrEYK5fvmfWgqpL5hAe1GxetrQJBXMkwAAbsBrYzx",
  "key24": "29TM2xgsci1KSxoBiqHqTkKxMvhXokZQ3UrcFH3v16B3QMmb4572DmGCuaqwcdHFSmRB9yk7DoTy4YNxfbhS4M19",
  "key25": "5A3WaU8XHHtdtq7vbLwa1CefoDrmf8MWXQTL6anxGeYneSGwJ5FQ7mUPEtQH9zNDUsPS7kJhDziDobTJCa7JVr1G",
  "key26": "4BQhmbysZ3U6WqEUVDbHCMgb84hPQobQvNv91ZrD9CaJMqv7xjPT2ULYRG4E3Br8sYsv2wKrhVajCcvNFLQwiruw",
  "key27": "5u7JPw3Mxq3urW2SPVDmHebHHueD31WbMaqJiDtrCBhMVJw224fHFjhkCnDBgZ6wrmfahxJ5MCTUwEVN2YHg1qXc",
  "key28": "2gBcduD1PSw9vbvWwZEq7bnqEarutuYDQNCjSDY4npXJTWoVbmTyvDJ5DPpKtrnYjgDM94wnxcHgHiKRyAmNTNqZ",
  "key29": "3a65Mn1VkPzS9yghB1YfTktJnXiRixvmQfBZJ2vjw9Tk4tz3h6Y8pJvM7GHaLYPXZFMgweJAF4y6Th5JGpX8Nu35"
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
