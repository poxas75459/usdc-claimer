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
    "3tnwwEcg9cwC1u47Gahouugkf3taWskX7XW8BsmNAhqNU27jJvo2YshuVnLZ9hv6qpZVhrT3y9QD6ss94Y6wu2Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apavRT3dA3zEUiZU8zFdZi9EUQN2e7Qqk9ad9zu12W7rujoYq9C54XTE8TxGiX1Em4WQbsrn5BsLF1gHEinG6Zj",
  "key1": "5L6hheHsNPvzfzJsw5gk9M5vf7CkdaLcDpuatWjYU36Dzu9u43Fd6F2aNeQ1mxXSNAMQqs3kxQYbsLrDfdMEfNUF",
  "key2": "3xfih17Gon215QpspJGSbZEihAYZgve6irwSV3iTSYDgfgpEB9e3RWUeSqafj32CPUnAtTHYjZgJVPfx6mBWRFqo",
  "key3": "5hNNo5PFp8JJLTGxG7RRmRb1G69wKWrynk7M4fteWzPHbJvafyXJijabQR718pCGhRdtNAZpyHeJWYEzk3kLGDA6",
  "key4": "2utNs74ZwRqb97AaDFF7uTiGSHVYN5mR3pxQM7j2R2pFzkQASKA1R9jhSu7KboKdMjXCbuBzW7RK6pNfPDNRVbDX",
  "key5": "49jwWbacrEreGtEZRuLXYav742akD4LcYgfuBSNREAf9i8XPjoA25dNQoj2mSYmNmXmQgHTJryUsSq7XoQRNm7AE",
  "key6": "2c97Hj1yD5tL7VZaUoCpcyQQ7S9sDQorgWXKFReBMcJKRmKxHnNWNrBxjYTMVoDBycPi2Up5FhbPPytziuDCePBj",
  "key7": "9UZWg8aVrYBfgfxVwFG2DPC71kZ15bMD6Mz1KDb36htod2cN3vk4hjUzBQHHDdiCuHsq2fAZ7oLoK9egmRNFrww",
  "key8": "q9uvUQqvyo476CBZFenWoapqYWg6T8RYwYa1trqu1rtHxmG62WaQeVF9ujFBR3XHL3syr4Z4wrUMTikWbQb3G3J",
  "key9": "5v17tpa5Y6eagizVtdrHF6HH95bZJd9w2oLTYygFsB1aZun64TuRtSF9sj33WG4rYdY8Sur5AYAwE7Ud3cPgT1wN",
  "key10": "2Ahh97A2YynN2jTV3sjgf4TauigWLW2hN5wf34jdADjiYZ8R52cMD3E2ZPVeG31spisJRRPHoJvmChAGPdUFsQZC",
  "key11": "rYpMM26ZybmsuqBg5amWQPQGMD62GJLEscrbJJ53F41ZQwV5t5NC8fao2FwKe2RbLthKTSnaYvY4VVhUUmaHrLh",
  "key12": "4KLdUhrqzgKFUBPpkVRL3sJsrTp16B8u6Cv5Vp8q4BdTcJ6o2Yaw1SZd3ZtQjmygi1YuizYjDDJsJJG3LkX3wrZj",
  "key13": "2f9CcCddB6mfACnxsg8cEL9UxaCMKiHRMDub2pXDbpvhUXzjMJ5QU8m2FSpDwKvnVGcesgMf338UN5bBBrCFUnuW",
  "key14": "Rncdp75cqTwg262XWgxLQ2ER6z6fwJHMWBg2JnvNHKcAZJrEt6H1X7FhQM1jHCWLRcYvCH56ERXRpP8hzKooLV2",
  "key15": "2vKwtuVZRuAPaHiurdHbXbk4db35FRuPHmJ2F5ZtNcKi3yB8Pixy1Xugurkf7uuUx7XzNsre9WV6J6tqoGvuqdKM",
  "key16": "3R8m1CNciy78oowXJBH3YhjTzTKXZKwY6wpbsJ1AruM9HG2mYdoVxKgMRvfNJBTZHh1sb94tKLJMjRqai9C5oo35",
  "key17": "4Mmu7MpNEdFa6RdE7QVd75XzU698qnFK84idPEDHoxQQaLebDFU6zkYqWXysYuB9TAdW7s4ZUcs5fkT7sZtSYoqg",
  "key18": "4FEQMboc3ZJ3chLgTckfcoLk1cZtGCgE3QL55rgBaJzTzwiuhqF84rJNiAZ33JFEcnQP9MXpZ2F3wbkMfnDY11Do",
  "key19": "wJfPkQXoryrdrhV1mjFBH5FafVxvJLGDkY6emgWZJzhbDHC35m1aWAD3xFamTbLPtKP5XTPvNKhTVv23bbp5ytr",
  "key20": "2fLGYvXaDh1oQFvaJhLakuJRQV4gz3bBDxdEyF5FRszuUXDxye4nzD6p982fjvPHm1UaJBoaKiBYAtchPtJA3AaZ",
  "key21": "3k1pEru7UT6WCQ242P18oR8vZ4wk55iHThUAQVU3b8DpTYBC3b6iWXBGDefWddq87huAkbkRWBYE6WSJDFxJ5Pws",
  "key22": "mqLi9BKo8hH9nZ6ayaE687dVmxqPMFEGXDDz8aYDFmMQovzQGR6yTZebNNWqRQ9c4ey5Lu68GMXHhDXpVJ7ogcR",
  "key23": "5RdLdyxL7dLyqeRxD57bhD1gjjEhfw2ba2vc1GCH1TrKgc8zCJWBomL4jAappwWeu85PQXaoWULt66jagnNGYgij",
  "key24": "YDgo7CBM3vz3FJwFkjv9ZHADMnMstAYMAH3PkvPqARVFgJ7dr6W5CNff8T4iQsdLyQXdZjbbby9aiiDg6pb8yYu",
  "key25": "5ehJqAUcJ8jVpXVe8g1xUhErvk8YsNFdfpNzWXiHFdZfsJY6fsWVvaCgL1aZDASTnxGtMtTEnyT8tXG43kDztxcP"
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
