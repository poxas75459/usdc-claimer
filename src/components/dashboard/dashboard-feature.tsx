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
    "4Up1HgcGEF2TSm9JWGKQ6VwUtiikMbjAtqYcBZbJ5EoX9zFnhkZXs4gxFXvEJJ95kngXNmEGaAWHpuWoKmYyy7jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJ722cMaBaPVV4CVvJ6hfcH5Qwk3Ti4oTdct2j8o9zS5YpV8ZDxCeTzpArXuDCWfG12YYXr2r6EsKGdGtaeDUb9",
  "key1": "3PswFJMTKUymUhFMagHcJTfHP4kpSxwtbcc6Asw1rxTsYQxCSUA2KzdST6XWVSyqPgZL1x6q6oXDnC5hsZhhEWJ2",
  "key2": "3rVv6aj6znhZnJqb1iS4dNBqBzQLaQ5cg95rWiE2dFNEuWteTHBGgFffrfFL2tW3c1cihv1UzdkRS9foiuStrYJq",
  "key3": "52btHesQ6pT7M7Tm25HMVJjnbdZyhv8rgurkqsYRhnphTUxmnaK3kFHVwdGSsW3DHpQYzgvNzWKGFSG8SZo8oGnA",
  "key4": "2n4zpMoQcRad8V1U1MyKKBo7mL4kmzWE9GX8Ke7aJdHfT9BzPVkv1ns1UjQppEymdTD1rFL7cacKDh3TAYMs3zWi",
  "key5": "3fFvHA3hcT9rX3ortoNSg8pBxPMq3BgrwdW8Z2zjarH5U3eVBvRHG2fqRXXpGRjkgRPjrWYtkfAC8FP8uHxNd7xs",
  "key6": "V3oKJEGys7neK5zuvjECcMaSzw9peaJAxgwxNxFMzaMwABmymhXKxzTCz1J2kRr8kstZhKWcjiPF6XGwXjWkfMZ",
  "key7": "c7BZs6R8etUod5KZ42uKYai9o9UJ9rGSa1TWeFp5NyuvjV7dExS4JPR9nbWmsag6q2s5Xd8sgNu8Gp2DiPr6AAk",
  "key8": "2qEzmmQaxi4a9MskkjvrEvW6Fufkx2KkwskVrTiQBjkxqZbnUGZdPPsxe72yT2qfiKvKfeyBwsT5RiP1uypyiX3W",
  "key9": "3hxH1jDUE7Y9ci1gdaM7v5VbUyo6Yif6Y48nYXJD9QqRRAYobaYNKfQqaLCFJubKFw19jRTqtWjqfGjaRjPNhzAA",
  "key10": "2vAYKBeaXwQLqdprvBZJ3MoWX8dww4NogUhNL238qZzQdGyYp4BrkW8xSF5tLrHD2g3b1Uq9v7JNSFEwHSi2rfV8",
  "key11": "47JEMT7qKuLuyqnzztGHNyrat3wLmbEAv9mJXYaSr7L4EBrUyVjTS4WkdoYrRHnHLh1hAcJmsvagko6GPHaEaXMU",
  "key12": "5TmuSpkDsFxKypoLMZMyjQcgTTpVdGsYXCEUAFQbcNsA7TdJtJS4fqueqikDA9VLuem9yyoMwav36MpbNH5QyFW8",
  "key13": "612DwzX1fdsK4TmpPNnV96f9R2CzraZejAUTSEsqPN5PiEGNyeBEamNuQopMZjaAgjA24dDNeKbdEnT6aeHKxMM8",
  "key14": "5mzLQKpkrC73KeiAeV8zZUJXDKgYi5FH8pVS1vZns8k4w7551BcEsWPnj36eYQtqUAcXUkuRFu3s6cuNcyyC68hA",
  "key15": "3ZGtAvmiwuvkLZkpFp3RNXn1DBoTCiVp3wSPTmazU9KQYrDehL44MpsWuSxAQmSvXoztoKeiW8tE4xp2VN1mrExp",
  "key16": "2gYktMnPCDdrRoSbQoanN8anr9dhUgknkgjdptxbWnwpmWTUGT8ggP3YoViT6pezPnbHYQg5F2W5iuhm6mRyRmUU",
  "key17": "4iQLVxPBPpeZo8Lknn3RVj47ZqKLNVVkFfKXfUDGquLpGN8Hg4NrfZ6c7q9nJNMWHCTyE5ZuXUyaRAN2DgbCoKuj",
  "key18": "ffHV3xMZLpBybc7T9xSKUEQzE2cNsgcBMXqratmLntdpUXUHDmXwWQDhT5YMymM6bqTSYLPnGrYraBfieEHdtmG",
  "key19": "65qSJUExQUwfZ44oK1GSPu1PcCnH5q9v5grxGEtg6iw6jDW8QqXkqs9GQhNkQ3F5K8EertMe3Z4ZPCLkEJutHHHf",
  "key20": "4x1RdTkkmGo9yYjM3F44mxZXXFgS48WUDsDGyJF8xbjUD57wZpUuSTeaFSwmJr7HTaei3FCgsyLajkv3jP435HCe",
  "key21": "3zoVDZiGrXz2Bv7kow4xvuXQeiyXY2BiFHZeWfir17KXjaRmWUTX4UkQoNgDfXpDWhmE2KVZeUWmaVHKoJqL7Lf6",
  "key22": "3NPo9HEjUhJVKW5UhAvpoePcnWHHioFNMcQmZnWPQfGZnNnEmKAJn4t9rGHdAeET8SLMHL3iSS9d6druNVjm9ci9",
  "key23": "2wkR9dm5sPiXe76UDGWk7JC1wP1CStyyK3yVDf7XETdJYFcvaASmCiTo1ztgXxfnh1CxAgspRxQsocZBkt82DkrN",
  "key24": "wF52ffdbaLf2cQpsfVqyNYnJzTdQS4LeGZUNW8itB9ZiC2EP3sQQpqSZoBtrAvXfkfsjUHXzweBnkZPXDxiULGQ"
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
