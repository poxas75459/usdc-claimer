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
    "3scGSwyVpsqHZcTNMU3RyRNz3Xa7TgnYDjwtSZCvm8PFT4uthp2MH91dYzt94wp4DtK9dhhxXT3yZobf2HjS3mNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrWHb1CR29aDPdQ6GYNqkLHCTTxfPWiAZzmT8AE13rK4zPdzMHYZFZspxrR1jvuwthYkD3gnXKzqboLcUmSk4E7",
  "key1": "3Ai8TGp2EX3u9MuLBSQ1HEjTV5HvawxMBDTbo1cbxxN5nT5suppi3tHJqMozDVouhuh2fxnuqX5GsynsanAdvzxg",
  "key2": "3rc8ESHWt5aE8DCpt5dVwNrxu9JqhPuTNpXvhs4Q6NaR4W9wYarnzSyq26oaqXc87Dy7z61fLSyQzHM6gXYTUGq1",
  "key3": "4E6GZBDbAGV5KRfDJShc8sj6piaTkKZmrGtVfMNraaVfzS89o1LSWwGFxC2UKXfHs4vk3UbF3Hqvy6YFSTQ852Yd",
  "key4": "3sRPVm3sQCinmMZizyFrC5TAAtjvuTwvXx69p7PjNk17dnMmv3VPQj6pQ9bpLaf2wW8JAhhaXrQ493c87bcRjB1w",
  "key5": "GgKfNnYaamNWUwWPShoba56aL5hnb3sxYiG1CvZXk9zDDo9bdCVD3pqRYiv8edRs3Sry3Z2ukGbY9yTs1t2g3sU",
  "key6": "2ZMbouSxzLtoHy1sVGNoduTCHckEidPn1WoTbfw3xqwkBDo6UefDuB8MUrvWWHJ5yF67yNB8rG3a8gCVbvyv3LMn",
  "key7": "5Jw1k3rrGoEKzSQatRnpgyzEWWeRp9pNBD9uuZgExU6t5vGanbRS1sHkEKAPqgvon8wXgs1jaJqo1KFix9K1P3MU",
  "key8": "3dhSbC6cDFb2jiot7JWd6iFNnjFkjLJxpEyCihp5tCmogLXS3jGg5pLGgB7y6xizo5rmvoCCgMsQC6vTYGKpiYeS",
  "key9": "3mhMkuhmLkY5KrKk2v2b6G22q764TYvaR9C8DCqfa73Mfuve2oAFhD32wYdsQb6Mg5uzHPrP42eTdL7Pv9n1mnXm",
  "key10": "2gKVXdJKgskRRyQFQCRN1LpTUYMBj6Ygs3wWJZBpWLrYyHB3wVwSCPzKZwFpkbTmMTpKSg38PmbkNJFkrStgDX2c",
  "key11": "5QeKVmMnDtirYoAqDAsTDKwxWv8FCywvYSDEcNnsT6PjubNbjqwQNrmGANA5GrxGKMeVowjwpGfk3J6EEci37vju",
  "key12": "9Y7Zy4Kp7QpBLRfAPSuNo6vFtbgehSGhcyfFRYpsEyh64o5VgEaADV3uqVMvHxkRmj7b3LDrLgZ1jGmapyvGbiP",
  "key13": "46yCWaTvzGXs3M365qSk3nuLSUUoPpSTobTDERBBrzZcAjTEBUS7BXQTAB62xJtfe65uoWBx5c9dpgSf4F4WaSUG",
  "key14": "uJGSndkcg4MfYjjmrkruFXfBdDoJ6orRv4hAramGC5dEac2JgQ3chLmUVu8U5ovLa4wzJRazs9Zr9doAAswxRRa",
  "key15": "42ZkWGyh3oD4sjDeEvy6vdze3iXSbiqY8Kgn5X5Xdp6uP4BkDeN5GhDEfCa131D5B7MFB5eLc2osS4KZn9pQVLNK",
  "key16": "4dXYKevkvw9B4TEwXF5qFTX769ESikv6vvoyTdQaHwTQciQJgD9MsjLkc82MgoB5W2ySK42ZY29HR8x1aLFkVUgZ",
  "key17": "5WHUCpi4V9EJirHiak7TNYmpLmpMkzgNR3JGLbRb2xDkZYKNL91111CMrm9dsYcwESpQUqRnHxBQ9ermrHcPbwec",
  "key18": "3T3nXiF6hdh68apMESsYU93HSVF6Uwu6guMJM72RAnMtUrEAsqJWKAvFPQutNzxYzpaTDM2fMW78AxcmDRrHrHL",
  "key19": "2Sm4kdJ9q52TpEdeuWC64D8UhLichKRWpX8yxT3ed92XMhGd5QspRnNtRbeyw9LG2eCkbPiDwheQ6p24TTjZzR7Y",
  "key20": "3MQRURxtKYix6j924g4KsaXoFUCFgb1RdDaiub1Z3BN1jEhMPU6o1n8KgZwSPy6N2zgL6y1RZ2cY1hbbzU3xexdG",
  "key21": "5Y3wjyQgGqTVtbT7jvAhwPSmw1uN3H626KaEbXukw46f25hu8m22uzsqcJy48k1ptoPyEWMf3NV55AVuf4DZGirB",
  "key22": "3NJ5xFs2z5Y3PtFdFyQZn7eHm51SCGmmPyM7qhPMAJqmV3HeXvXcvkBoACKLnDHMcRcVNRgycsw3JL6mBn5jKxVb",
  "key23": "4Bj5kdshdK96bRM7sFFFU1TexJibqiQgeQoESptwKUn1G2ZjNFuPZceaKJN3QzspMzjoH2h5CRSGAnHd1dfCMSkV",
  "key24": "3mNN17W5aQeUek8UR1rKU7SAzVJXW9LFwW1a8mP2GSpnS7JFufh7NAtUin5oR4dopEH4P3ZfTpXCourraYvTfB41",
  "key25": "4YSofrq6hETri7gHhFK4Kd8X4bs3ipUZHteM2xdg6LYsQAUxXGk568aDb47syojBwH8BXXUcRuWJhSBmdnFFEbyZ",
  "key26": "3ZiNU6gi4Ykmb5ftjiNQibTBAJkQqCLPMqoHpuCogqiyXEhSLTAzfDw3tE8xrCyCY2QYgYQ1GVKZ6wzkCaBRQscY",
  "key27": "c4ukKxgzt23eygQbMqh79jFxeQy5Kyq1CP5bruE7LfWbfNUFzSb2fs7LM1U9chRGTRGYaKGr1xerJJXnBWadBUs"
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
