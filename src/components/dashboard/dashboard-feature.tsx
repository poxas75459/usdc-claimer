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
    "gkdKD4qJxM6B8gYFR6pAcZU3NubcQd1ygTC4vN5dM2gRtZszHWvZZxSbRMHQvhM14ruCgx23cD5ppPqR43dE4rW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfJ1UkunkJH2oCW3GXqyNcexF8pdFeTkA73Psaa1fKZq2SEmLdnPboBJb11FapbU1BHnuvQ1gEScbJJzQvyX7ow",
  "key1": "849Q8LyqFZHSRo1eVXckHyEp4esFCXTbFsM7rWdgebTfGzUmBtCBgpLsrqHCC25maKFER3Ju1tc1cSWPNfaxJPH",
  "key2": "65kd2XtMGoroCRFyN8fB3X9CRTCtgVr1TdEYTch4rSvpBJUC3P21H3DCe7MWUtXkixqFskyxNWBeBd6exbYWyioB",
  "key3": "4CCirkJjfSmhgBZT7FdujJEsgfFbzpt4Dns6ayQin25nY3eRoYCFGFthES4V6ZmqLBeNoiXLd3EKoPpLedGaZ68w",
  "key4": "4L274XPceFiySPY5foy7ZkbEzP5WhPiZ72UL5ygLXxy5VKptaqYP6hAgnDBzRjgKLrkc8vEHv3W6yabjNq7xGaD7",
  "key5": "4tXXoLcx6isdfcAR32qUYdGKm6J3unyQdt4ykttfnLw9BC4q5y3d184QjNBRXzTC6wA1h5DmqHordPxaG5EScRp5",
  "key6": "4os1SPoJo2967D7qYcPn73QUuZveX9GC9bFSTx7C5TSBWLZtQ76ineD9wnKxwfUKivEboKMYDp2vobVam3yQuXGT",
  "key7": "21AmVinpfQoXQ3s4Fxr99g5iFVkgx7CkZwGMTyTjWNi4QeaLrACL7b2cMfe1CzHhA2MuPhudkYEjoZiWrt3f4mf4",
  "key8": "8Q99Y7R2MaaNUGYWbeWM5Fyq6JZNLKNE2zb7FZSr8r6vRSusUfADqq1ptg68WuFXzuzEAKa9BFFP8MTyEBHXsCd",
  "key9": "4XoLLh1yHVjQyuXTCeD9kSx5NCUoZp5b2mz8BLW4NnNt4m33CS8afE6E2ZdhWEWtDugeTc3z6wWLofYAdMRLUmAn",
  "key10": "8UxTFZ4GGNUMf69jG4shbQ61DzA44fK9EpLNdwsxEnxSkizHdYskjSBLTrzmRNr6ZZGTv7WzK2uDeidwLifiYCP",
  "key11": "634zBciJmxvoLJZs8FGGCwnp4ykZozUw6LtxSdMJLQEVZXQwHo6X3DgHaQYFeg6aLHxhNEvHvVofg8cJcpzuZatD",
  "key12": "5wWYwx5M6seCx9rUkPxnR2PqKgppkJH8xaiGZjMARWtEA6Vi8TDz7KYYdUruu5jSuNqZu5rWpwvuBVfnajVdVDvR",
  "key13": "4qyB819ZPYEwFKXLEubGuDkCndbwdvnjEDpkfbtJd4SBjowQBCTGtgU7sLbgG7wdq8EoiDSNvRzu1mm1jXb31rnQ",
  "key14": "5RYVCBf6qSZ6xeRuBLynUhXJ8VHCVD1wHUkU66EhbuLnsEATHS851A7QRL7UHX3oVFy1pedybBnjFD1C3GMxFrSZ",
  "key15": "4y6CvhkkHzjM1KyMewuZxzjuB2M6qQpYGUiNeXBTaHf93yBRbka4Jbt1aoHFfnuzZ5FDoVJRHd565RxS7KiQzEHe",
  "key16": "5N7HTovpwT38pEzr4eMraQrMYJBhdTM4B7kmSvp3jpzVwCnjxiNzSMrXxUTkdE3RkfsJNSWXANQAjv1gJVe6SKji",
  "key17": "21xranguuxJGGkwjnyiRNyYLWb6CUQmBxJp7qCETWRQKXz4yFTtsHxJmH9hayppEUG8uogbui6jeBWUYpGtktC7i",
  "key18": "5cAFm3YU6MbAkAn214HLys9tFiJMjZLeSb5P3iTs64w8rmXBuXwxBN5cZkgVhY3fFokt1ubYe71yGEYtJwEy76f5",
  "key19": "3KFWewGSDyDPsX9B5dpTmLVGdCDoLgLkToXZAD1RpjYNuUj5kHqpzopEVz4k9WudeTU6cecmMtNLgHQ9ZXNfHkM9",
  "key20": "2B8oCqVaVug5q3m5hsgrj2c8gQAwNXhLrhTvru5knWLWfbHH8F3fZ9Ae4ZAW78nd1RnfCjiCevHjcFHLdafj15WX",
  "key21": "4XxngLn8pyJGz3C2SsFrAhckGw6tNwsto2CyBDw83vSNBsg9TpMF5XKAZxdHw3riYKfUpVBkivbj8mrRNGGX3wEE",
  "key22": "4rTTMPJVSgKN7Swgw8xazPYRAWdeSfNbDWo6U9q8K97o2yfJvw7wbwKq4DXZMKphhzBqNoL4EX9v6zRNHqm5arNs",
  "key23": "5Y3LSkbgwKHX3xVqCrjnMPTEF5HBGV9qRH7krVrWXr8GQisELHsCh3weLM2ExVZkYGgemvwhBm42DJEuZy4dcBVi",
  "key24": "2D4WJ1iy5goScXX8hgu6dEGQG35BeHHg27uThXhPuKomLd12iU1EdG98ryjHMaZhjrzZNVGaztfMZVn9NnrNx7w1",
  "key25": "2EPAy9ERowmkXQfowziih7dzWAx91CarERc62Y6mbniTuVeXHku59ZEFbdQTZhaYnv6GK5FBQ7PUtmC7GJGJ5DrG",
  "key26": "4Dhh3rY5EkmKyX2q22fiHS82rDtrAWoMkQx2ek2ut8cQwJpdiLH3ABXH4ksWzHqXJ859gZKRbu5mzzgqWG7WLkH9",
  "key27": "2acxPMdLSbzwuaUD8Lb3Am8Uww7JNxWdmbnjJHyUL5FPb4LQ82DhhhWsLn5nWncagmrHheFwXLJsNqukALmwPz47",
  "key28": "3qYuN5nNiUcSTPQHFoTfPdjwcKZWGPVsyNC3Lyjya5mgFCSqNxNXwo8RaSHdo7mh7dAVcgDNi8RN8QaKZ8UxZxT7",
  "key29": "5uDeFsCSwgSeHghnZ96aQHyPvEMip8EuKUV9eUzFNGJySjvgorrjTf3xobauEzMFMizebKLFUhbJRXLdYtKNd66Z"
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
