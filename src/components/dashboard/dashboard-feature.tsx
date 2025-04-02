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
    "2Zf2x52Kn48cGCXtZhWnN171gruNoTdadeUK3DuMKK1LvHhznQRevTo5DvkmrGDUTbvek7VYZFrZhAfyYLPtdKqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5sohZewUc2qRzhD2cq3kSvuNbDxa2pQjjTusH5gSHNzZf7KaU2SxsVwAcXATHrgFMFExdECKhgS8durHFFmtcN",
  "key1": "ddkd4S4fzPAqGzqC8Tve6KLAn5bEf7BWfkSu1hDjuUUqXfmTJMh7XSkDco9tAqTc3jiFVmZd3kHZweV33uf7Dkr",
  "key2": "4i754L74YBmnan2YRBJCLAhUyVdAwbTuzQh2t4AqWzyyjkuy3WzNyA8afGgKAx1dTshybt4kMyPHu2htpVhE2d76",
  "key3": "3G2js6naD8KqLBZNkWSjwyonc3GbDKDicmkhMVcoEDH74vFnfUehJCLdW4tVUVj3MEybZpQ3B6AgHcVrW4xLjy3M",
  "key4": "2SCCMWaHzx9Bkr156iKhNJDMkjfbjTpBb3Fza4LdbDA3AvvbaoRss7dQXoefzQ46SEaJGTw7EQvxRWhNwL1qqFqq",
  "key5": "266fBzgSVYeLs9njRPJPM9ZqDrYdvddTvjBVsRm96CyxymsDxVJruug9NmvtCjJ6mz4qNxwnGV8863h3LTEgkZUW",
  "key6": "cSv5KYLjzgBXZNeTvWBCCyH9xpfRXRyUjGASSj3SjmYSJ4bGzKkr1TwuiJrM2TnPEguLXPErYD7DMQf7L5DRJCT",
  "key7": "3XiqvFbnMQwHzfNxe6trD8y2XE5m7SS2Nsc16mFPEyBxLb1xa8rq21NdfwipWsVx7qkmBXKCEuSHr3bF7bZccsra",
  "key8": "5dPnHtDkqfiMkMUsNmiFZnxhSxdn7giVqiBv3xnzDuZty9HRXfwBcvUoGg3ZHnoUYMLMpsUG8CzybFnRk2YhTgGj",
  "key9": "5M4RGMAyFrwJu3CuUQa2U8gphY41Y9XiNUWatTp4sytp4LvB9LRCExbK3QwYVPc9NKXdYKNJHx3Z7rGiWpaocg3o",
  "key10": "4Xz6GVr7wySpzQBjwdTUdkLTCA1o3Ds9Z7Yc7rw7BSKT9ceXMTGdf6WwCnTHqfDd493M8uspk51vrJAQULaVSRG6",
  "key11": "3rp74JXSigFb19K3tyG9MNBhz66EYNDUKvJZKDjvx3MQR9VCDdUi7RK3fWavfXCzN3aCMCaN7ySmzsmb9HeHdQnX",
  "key12": "5cY8iiYc5zrbWPhfJ9gWqkYJ8wbBvaW2RRcDvDxjn8Nm4nfmq6fjrMqr49QxsNxJ5JrxJjTUrsK7fJakcaZ4ui84",
  "key13": "2RMWZrSXDFrhLpMtFTKz2o5JYzRyq4NXyzJ9gjaTjaJHDzV9r6CEaH49i2wHVk4pzu3XbNt5For7YUphz1QdNbBN",
  "key14": "5gzP42P98xe3khyPtRKk6oFR4WUqTV1X8MZALaE4aKLWVrYXsxnhP6fzihJDhtTUz9yFxtzr793oUJp7GFi89X34",
  "key15": "43LcsVDiGVeCKBh3Vjn94FU36JwPmg1fGXyyixjhZHqeHqynpy8E4j7w6DKnWJQETU3cXpK2CtHzt4X4Vgc5adnp",
  "key16": "zg5Vc14mNAvLL1ugrAmRNWJp3hALgkpm7b57NQkJhpwZTHQjudbStidNPeKQe3LhJwuWEHcviSAmTfjxemzEWSL",
  "key17": "47cRdzVKNBBLgBGDyjt4FS616HpqsH6RvfX57R5gZMX8DMnN6nGjBL3UhjoohHX96KaTb9652wPeBasW8erM28wE",
  "key18": "5QTjT4TLfdU3NJR3533ViQ5qNggABhXHAEBo9jcgAMta3LGkqa7aCGCeAVVQEhcP8bnh6EyUWX3bvioL5EQ819Gp",
  "key19": "4pxkgyL4CcjcJ7LvZFJdgboEUZrvcnr6AP3P9sKkjxgQ4r7zogpwb5UjJFhafHzHqz9dyWG2U7i9eoC8R6eNDj9J",
  "key20": "4JW4HUEXmkZSf6X1eaayxVCr6HvW648EZzrsVGoM2xJ3GY31w45qvQhKRJkDv6cekMEBWsEaymXQsaA4M7R9V157",
  "key21": "4dhgwvSvJRKsAoNKniE5sV7FRoDTxZCpGNSA3ydrjcFyKKxQDw4MGPP2U1wsNuociKnMGj7xUkGm9FWokv7D8wSB",
  "key22": "3ZDDbn333jkvEc2r4DNLN1SM2qoESDDCh2Gg1MMWaMFNhBvRZt8GvyZqgzDim3dbbFLr5xaND56CUhYHJSTJ8W8X",
  "key23": "C68AeNz6NNiML8YaoDkoaB1N6uf4hCUNBAAuudeRjNrvPXTUQfyDPVBJuPpNmW3XxRyttnQBnv3fviGC1ePMYj1",
  "key24": "48msTFxZQ6TyM8g67wC6VFddrdbMa74JCrZpunpJCarQhVyd3qBzDr15zgmeRUEVPEHb6z4XcRavBn68URv6rSwa",
  "key25": "wS9SQ6YdvBe5aPmXhqzst2qxDHDTjGrts66q2izhfmf6c3V7YNW9WeRYhZhrVXNMiFAF9wZhvQ4VPvSCsDAGxoK",
  "key26": "31gCnUEwp57qU8oHGWEWkZEF6B6XZGQAgtbUnDBpiM55yzJnEsSGbnyyZT8nrEN3m3tus3E76WPM3orcHf1JkjKr",
  "key27": "4aeei9DPmeYhuc6GZH7hyUvYicQ74FGnNWFA99YTPLSxJAEYbWbCxsr26qAWLKd3T7gzz7NgtvGYPYJQPsaUDxy8",
  "key28": "21diNk6LEKz8vDeDq8Uzd9ZMocupyjRemAAg3q7ws2j1BeL3DacSg67oLQa8ScHZhekQmqsEknUwoEPaHeuc8inW"
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
