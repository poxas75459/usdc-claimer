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
    "5dT5ZfhT4tw2RHj6scgPMZrPbefumGubMFofE7P5rgD52nu9uyj4DMNanmPKtEGn5H6Chxa8czdEkXvuEXZiLziU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtoinpUjxLq3ZWEak6qTAe3BnaAh5SSCq7shzd9EA28kTEqRiMX6KDbd9nHdfM2EWq9JWsgKr6YL9H9HvErbF3S",
  "key1": "3Bba3zLhq6RVaY5ECHwYiYV8URr81fmx6aNRBDTuiHxQDc2GdjFewVHEJDZDHbKdBqwNG1hEWFJJVHF7W8mWBnEe",
  "key2": "5qiha29WwcKSyunyxuvhhTMLnBa2vH7wPR7USzaTv5yG58ozjUK4zT49ETprnmt68eTw7UtLjtSjDhmT3uYGP7Fi",
  "key3": "2oudAnedGDRyzjMQBGqroP79fZe5hNxHwrDcS3q8Vp9tVug89RKVeJatgHdHZUZQmzyfMGtja2Pc6NvEvDQKx4Sd",
  "key4": "5uPsZgdzXYabeXGpfUWAFpbZip6narwuGW1qKtDpydfCg5LN3ftYsCBSJowjo3gDx45kj38eSgeV7p4FYFZ6xRF6",
  "key5": "64zTTDPEBXQ6n4XdaGYhS1jQTGNT9VsYohi8YDaHUmgrcsz8eLTD5R3GoXKpGxPtrou1U1ZSpxjgbQWv1GGWJUrB",
  "key6": "2oHi9ES3uC28zxQ84Pti2qPNWaynNSPLWE2PZ2rqyfg8HqYH6AF2ui7dCReBcvkrDH986fJ9GHSaf8Sj96UdiCGb",
  "key7": "4AZAUZddphL1TDc4CozrKPhCXru4srJTbq558e95cqLsTye3xpS9vKwXD4f8iU5pPr7xxcYDpqfRP1HVKyYWX17q",
  "key8": "2sbn1MyqxVLridBH32gfT71q1zuXnFVt47nhd8YfEEULajH1CuK3kjDn5LLS34nMhEbN7dkeB6gHNToyKtwEvazW",
  "key9": "4bELevGMQSTL11gcTmwe5d7wbz1aHBRxavxEZeYj9zHJSYgLSxz6KaxEUz92zDDnZk34Zi9ydzFcBSZPFWREQrbu",
  "key10": "2ZY2ynV1s6CayrPLj8NSFwJkknJg5QHxmHrPSEGPGWeybv6SrX1eTnVpnVjZ32gDepes9g3DaNw1dXYmoJMaTeHk",
  "key11": "3TotbGpWbXvac5foQeRFENN2i4Cj7A7a35A6DdCsPyAgYMVyN67WBR33C6pTp9DGF9LvgYLmq22dAZHJBgdjie8d",
  "key12": "47tcFZXtAqBx5zJak4mD4Tc78ewKdNc8Z9xpztWFrNtmSQAaVp926sDQ6cj1Ab675Ht59XzL8xBM4PAJya2pqYBX",
  "key13": "3vfAPXQHhF6RGx2zg2yTaeyt9bcG7EunALJy9j6speqEQQC7P7zsWFEdTucbM8yDd61tHzUpYrC1PkFTxkgaiPoo",
  "key14": "2pcR29PsWUTkQ6whue6CUxtmnKZgJ38E9nG3Ua7FTfyTD9FzroN21cv9Qtg2jGF6455L7R5YasJBJCdxmTjhsb6F",
  "key15": "3dV5Tfy6tt2g8Yp3V4XE1JuDv2CpUP6qARB5im3o6aiH4nnY9fMByPrGn5Z3ySiATzfXa5hoFfrUKiH6oZb6khpm",
  "key16": "2bQUgyKgxMpYADrG1LitLSMGEAFXyCmbK8v6GaRQ1bzdHchoojMccJV6vz5QhfXEd3CVHS9pwKgHY5B3ojBQQEM8",
  "key17": "2ac44iZ7jpykpQ3w7reH7cBTHdLsodTuVu4Qksd6oan7LdQnCUdnfK5DcL7r75EyWXQtTpVt3goNQyfeCijaAb8T",
  "key18": "2PnuEkjk4Z6ALZLa7nQxQJHJF4PenCxsT5in5LaPCapV2jQ37kHFzz4nsNCqmEnAxFgcL2DsTfNfMPY9Xmddojko",
  "key19": "4GU9AKnWF9BASzpJxvNaQMHajK8FZy9JZuNeErQXmtFuGLVQYDGFtHcLKYATpTKdEVVWPvjxfiYZu8DZV4WBryDC",
  "key20": "3xjKJReUudjADnuyVHjAC3wbxQb6JjKi3jdNvFSZbd2iBHZ7SjuKwsuADfPpm4s2hRiotfBjjqLtJPHzKLDro5hR",
  "key21": "3Gk7JX4VoLLreFGzbKyhjLguRmHcoRkazH8kex8U6dfFcrPQsULBxwjHrHn9q2Zy5rFLahLELQyDKzWBNiUJrGHz",
  "key22": "4rrmM6rjAbggHeAChynDAJ1pBsfHMfRpzLPhvdaYtHCTdgT34oRCws9UdCbonoATwCo2DQHE3AKPjXcbK1SnCWM3",
  "key23": "3j9F8jSg4qHmdYuC5NkdWWNhTw26dXmRYKvDJLCjsYyAd39djPhe96oAXarZzN6cjWEEskogsA3gt6YgaZhgmwPg",
  "key24": "m9Yb8pXW9kLWqfMN5K8hNS7bjZiJqoZdtZGTNCRoi26hKgMmbe5CUx2bFK7fNuvHpfak69PgiKgPaJJRoqy1zfu",
  "key25": "5bHQaYhH6eZJhPV2nDeC3sRTpAH3VVZB3NXrLvzQyffMvXMPnUAJnDbQ1bsBjz1SrQsdJv2kgweMBZTR73iWx77N",
  "key26": "5YMmdzBzjJL2kAHAMnY6iY6M2ySYJ4MMCjnD2tRRgrC8hU1BtANLbNXdcCc3NNdPjg7BDWJG1xzqxysMMVorYBT3",
  "key27": "58snD4EHZfCRYdHbnpKeXV43J1EM711atgcjqchbn6MHTwKnp81Jf9kzdrGWtjKNSBT4ioRZ785truUi9xWgshcY",
  "key28": "f44H26xhWcfcQVVkmMjdLeLYcTcFZXtj3S9fEBxQQUes4A2LbvPQiWs4PXDcga5gfkLrUYyvH1phQdaUV2j6Bip",
  "key29": "5eDSut8ZNCTdXJAUkAmqUbKtDXDJKe64Bwc92L19mi8AJXr8oVxaAKSPoCAJw3p8hAe7Mjft76eNgX1xKzaEnzfX",
  "key30": "62meV8Hc4Z9Tntni5kh531NtqmwcUJyi4jicYDvYS3H9yXYnujiaiasp7WwJ6AUmRHrk4qxzqyykLGDuMp5ohU2x",
  "key31": "ZbuDeHWG565NWpBMfKvNmt13dUsE6fB54PDrNEc3nR7McbqBdQ6D4U22bbBwaBL7wXNgCbHjjxAbbNcM3r41sYQ",
  "key32": "2ia5UMuK5kP5un486qa551fwhs7q6vKfV1oKKUsyqefHKxF55uYPdo5VtZrcBag4bxir9XfFoNKTgT7hBYCTdX8k",
  "key33": "3AXz3XGzDRakJ8A6MZb5Ajvz8etWRMPLRgs8w171q4yLrxXgenNAYTfShJ3b4pyqhNfiKgZBqmSzQaV6cDXtn86N"
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
