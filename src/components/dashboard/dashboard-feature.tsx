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
    "25ft9rneAduvy12zAwj17ZDKZB2sEs5Z6AwGULywbvGUYoVsdAMVpSQzCwsEfUzd4A4wuhzSF2bHkZ6fVKm4cFhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9cpUWYjLGUA7SC3r3Z8VY3TvVpt6MkzfSq6whbn5towxKGeDkKALhFsbhmopsM1mKtwtX8qTxHy7W2QRXoct9f",
  "key1": "EU13e8dfZjFYCCDT4qKzQ2ozFfVBLrrX1M42CgX1NYwc8cdmzDkbuvnRhBaLKyNeA8swRRQX9jxMorWGqhi4KQT",
  "key2": "KwJaiKWQSsh9XyWcChLA2JvwgjZ3PAAqf5zZLRkAZhXvCnVM9UFq7uicQS1UgkjQr6PTGMLsgHEMu7VyxJg7dQp",
  "key3": "56fY6vXfN5trMuanbYPxAZomKLnHJL8TMgENRJG8GaQM5T9SthsVPeoEUu8fnyERDkRC9ZYSjwJSNQpTqDsRZa1i",
  "key4": "21ZhtJ7X9Eo685VNYyMrxCJiRPu3gBuf99oMXtjK9zxMiwrNwr2hoeJKDjh9qbUqq8XEWqLT38hemaS2RQTHHYLD",
  "key5": "cZZzEgmjqBPWF6PH6eCR5i9qPwr9TKQZX6MyEmApaGLNbD9eopwPpNsKuVn3NzNTowoN3Y3doma6wPyBb2UMY7u",
  "key6": "4tBjESSaitBQvze9w33WLZkp258azHJxne5AaJQSYUv86ahGsaqtJTGKCYtReX823RW2T54ys5u41XZ95DWckZQ4",
  "key7": "4b4xMsUEMjcemPp3QoYf5eTbxZ1uRiNnHjjmPwWhdJ8F4CuAyeGrVqEWwmoGScU7aothALmnyXJgkzwTXLMUJKcu",
  "key8": "BYioCucoZm3Z6ueccYSYUwmGFEAgTQewzmSntpeJFPcd3hy236Xbzimib571GwhEg1Ss9r54mqEU6Nu8FdwGrCx",
  "key9": "3ATzudwjJ3WMHr7np1VdrCt16wXrdz1juupyrmipPEMSVBr3PG2sC5ZDxWEv13svYU9w8iRA857uXAvHPhta1KrY",
  "key10": "2zoW9JT7kiH8Pviv7AnzSgvnDEzZT2yEGC6KMXL9SNs3MSvctGQ34kd8Mj9hgrjDNaA7wCndELEveexoWhE6GEdp",
  "key11": "3dSy5skSPnVGibkbYKNE6U6Ju1d2Lj1pUqXgrX1tVVypBMATpyT9avNnKT1pdtB3DaSWMXsFTPwahQWkQqoBz7Ct",
  "key12": "HrviM59cpG32Np9mHcob8HnoctGw5rgak9W7EQovL8dtHVgLcVi7UbqgtxZ7fSJx7WTJPcJstLxynky3PsDwsv4",
  "key13": "5GQzYzMDyYuQocmgBhveAvH7J9fq3VNf5LT1jY6TmM5aghhTFNBRS2xWxHcL72naoK8ZaxhqcrtU7kuut5CpM23p",
  "key14": "2Vqy1HX52Sd2BzvG1b2AdUt78YVotHVSzte7YuAqkDrVkZP663bBohTV2oweCtHa2uczxq2kiem5L9kcswzUNHfD",
  "key15": "2MJWKb4zjXftxTynkoxnkhjNMrkjutnpChHfcnnm7n1QNeyoZYKdbB4ZeTGwQrtTNGVzdTQJeKjEXfk97ubzz6oi",
  "key16": "3fGhrAaLF86JkAsgWq7urp6qz54DprGiiirkexTPqAUKFc8EPBLtRP6BovqDGX6Z1owfZ6thiDHKSJE2Q9rZTApn",
  "key17": "29rHHfvBcfSpQBEbJB3Ue43nmxi8RvcdVxr2tV2Kg2n5fCb4rAeu9e1zdeErPvx1SLE7qcctHcgbxG6q3UtNi3nG",
  "key18": "2wRetaTyqNaxfadsQyYvRrAmdtjzWi4RiMg8MAknDbLpccdQdW1QZuFeTRFKTBhoPBq3uRCwUxxiUxCvhBPvpqY8",
  "key19": "3LAKPCfDbYMzQCvyTbS9UWpgHiT2nrQUuWQ7QisNUgv1mvYamJWCNwRjpkhoXuoBMnEqgffMJCjB9E6WWjDBFyAS",
  "key20": "fD3ebhmuDcwXHMaB2Nuf8jpQwZMtwVuMTzeNtTvLS2Dob9JKvN1V1bTyWJ1TYFC8w4SBvR41j5JRNWtuREWXccA",
  "key21": "4GiWBRVjaocVS7xfJTzSSHGULP7srLeVFWMUmDpK53Y2EgUXiEHngkfMNGwJ27sbTrpDC1sVZsSH9TxDGFdKUMxm",
  "key22": "2qws24khR8u1V41fkMZRZepBS8kaFW3bTL36ynpJGcpdMWPyCkmNUdn8bye1kHiVHJPugHo3rbteV67yszyRwS7H",
  "key23": "3FuD6VccECnuUH2wLb9HSFeX7q3npTvxWgjT9QXgmrk6gjEPcxUgKU8sZtLpi6UMLMHNeVnpaWv4iAVkmxqEk6DX",
  "key24": "42REig5Asxi71AXVDD1xXrMnN7yNHDUx6eGeJsZrQTiYXa8bUye23oXZbApgpgXgtJt4hTYjMH7ZsvEBBP8BCEyA",
  "key25": "63xyDSFjQ9J2LqbNfTb22xx8q3SBj1hutGrqd6HH3QepBD8d2vWTEi2UqGUH4ptPQJ6ctqirVTVhSaBRMm75HNhy",
  "key26": "3VZ6Hqq3DX36dVq8rAhWBM6T9kxzqrvMvcTk6xnwb1WxDaade3rpQfmcb32TYc1Z7gg3uv7beq4dzJsHHHBhpbPN",
  "key27": "CV1ibZikVYDBi5gXSVDqMrtwsQiAdWnEGKK9Kh33EGXPfatc7yJsXgD9kYtPhkzow2XR2AaPHsf7HXFJVWBnePb"
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
