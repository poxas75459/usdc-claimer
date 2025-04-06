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
    "4fNLenxEX3s29MudeaXKWbpki9yDqiMT8SWtupk55n4Ua2Y4ma8GcphWBkN9CZqVHF6CN85ehEKDKRaKko4mdAMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Suy13hvJ6GF1odY26iAE1CtxFTLEaREqrc1hFZDBdyEsJWYo5WE3Zj53eeADbNEv4XmFLXDy9naxKGuRnNra3u2",
  "key1": "49AVBNQz1z5tUvf8ES48f2F3zVzSPr9QTKHEMrtN8iN6rR7Pv4LSMEKbMgSLYs6EZaJHV3BjVMd2h3iSvjWQLbM9",
  "key2": "25XD9pB8PzofcKcKZcnx1oGKV42dh6G7xkAWuuqLQQy6Tr2ZyAy5FJq3883VGLg5XhssZCJJTM78EKaDRPoFmkLf",
  "key3": "5vCTN1dMLXtM1Jyp6rJBMFdijivhRQ6Xh8Rpm2MV1QtL8HZXe8EFQU96AJAAnYsjDrP1DmdYmy5Cdjac9Zjuwkst",
  "key4": "58S3otds35btgQ6SCshb63doirvZQvZWPEy5hf7jjCstqac5vUGZ9YwFfbgJQCv8ei9DmKJjf58hXQBisWmPsYHy",
  "key5": "5yprMx1se6wArP4LznM7tc1VP3VHQ2xS4mmxs9F1vKpZf7PLe6wDVS1KMLCHjEMoyjhyCgkepv5H7ZDmZpKgx7DX",
  "key6": "5vpaFbxPDoMh4NAEU5a6SoZcbA3eswqgHdjzgXYV8T6AGV5RN4J3dgvdZWMiFK5639hp1uL4qbBH6G6JHfwp9Zm2",
  "key7": "43z8NrvTZMkReV9F53VkCBjgUksruEm12NjfH8L8G1z8rohZJcXkhaV1UM48gAasiFuZxGaNpCjPtWJaHJCmKeWE",
  "key8": "28R3VQCwBHx2SV7sd4n8bGRd1MwbyQfEfLV5DkKPr2kv2DdFJjDnyzUxkatfWX32D4DGeeDQxirxFXtUCJGF8xnu",
  "key9": "54sEEVhxNb7W3CEdVjqjoye4azGgGspVo4FzMmz1Kq5B5zjZm22hGnx82zdqKxb1gpZkihYeacg3UDRYexV7w1Tt",
  "key10": "25nmCDV8pxVD8u29JWEatGbKrqA8XSmq9JSXT1MJAEpjhq6wVMYtpTuw8uxabYPtX3mBnMj7HMRMftQPYnMmYv3u",
  "key11": "3KM6MqeT7AawCYHWQGVzDNxHbxYww7aj32VAth7aibxMrXWYhriY2kAMWGzxmNNwkfw9qAajfDfMECU6CqEtNMN7",
  "key12": "5MG9gfJsHQBMNHdUEDWyTEojQ2qLd3T8HMQpJKEU5J535UnGaoyjHaoxVSoCj74s5BqdaDKE8q2YQbny5yKA6YFm",
  "key13": "4wW4jupV3TreNiXsoGkPfjeZaYTThzWNtQkgZAeDWqjwMZH5eRjUMEYcJzmJCXZHtMm2e798EUYGh5hi5o3s9aie",
  "key14": "xHTBFibBvU7w3PLhdqPyqaC5ShcdH9Wj9az36TMKPXiY2KX12fbrGXUsTKfaNU1Z6W8DzLnpuKG5j1UiQ9PGtpN",
  "key15": "3MfcF2z1Yxo1mjx7ZX5qzBK9J5KGdwUPzAQx1QNZSRcWhXkEmYgAUnPqXBTffJ1RFC71QzXzBiqzQnwFDjgu7XsE",
  "key16": "2Tmk7K3fQDkEkXWaR4Yb3b7QDkiEdjuR8swntpL7BbBEGT3kNCeKK9HsW7UCtjYJpe2vuZsCEKd5adGR17zHFdVV",
  "key17": "4sJZrk426W6MfrGMcfwG55Vw1R88nEyDAyE12m4b4qy6FQ5Te1rBpx6bem2QFMk61JBaJ7qWCdLKPDRtqPeNoDGv",
  "key18": "4kH1xhd9pJnUWuByCPSfxWJdQQn3Fk6k2odAj6Kcj9RMdfbuLCEUz8kYh3HVHqVbwoz66EW77AXSzEqo9mz8JRA4",
  "key19": "29Fdq2vTSiAsuC8ziDvTPcbJcxQoCXUt8oMjTae6hR6oqfLQzi7gcdMNXNc4qBdjdniEsqamiiqke1zcdyNCW59N",
  "key20": "3SZ88Ed393h1337WhaKtnC5sZRGKbSfxDWB3qssjP4eDoTHCRq37fgW8h6SYEWw7LiC1xa8vwcZknh4PhQikVVKE",
  "key21": "5rutJD7iGJvv9usYufzM5eaP29hugVhXwA8DAGEc4cTLaFpxbU6gZP7PpL5TAHdJAxWXgT8UeAraptAgbJWsoT6U",
  "key22": "4f1CM9bnyEBp1URbeCiKm8bQnuRnrYkfTu9P9EhG6xdRVwfDCYe8LHiiGFkh12Vot8xwJbVtmf7LUrGCj3DoRZxL",
  "key23": "aBJgqppiWcn9xTSRsuzX16vz2UZqor4X2bm8RW9aV9jGRPiAc6rv63Ejez1bUMogeTKg27yMnGRZBWc5VuhzK8x",
  "key24": "Nb4cxbK6tEZKrysCA6iVHxQf5eSPcrhVG7ub6eNbQdRhRuZz9uCpRiuU252QW28cwKeUvrb5nMSepjm2ajfoVM5",
  "key25": "ZfswhrKeDPTBxKhLf9WjBG2sHjan1MNv1yEhjoHytDNdzKKV3cWieTHxhQ5MboHnzTcsMZ5mmvoV12w3ZxZXw16",
  "key26": "5FDuzJYVjyjDmi4pX6SvAhw45CXC1vkUU4vJVT32kJyrzaopQqXiBEUKM8PYa34qDaRN2XmLwDTqFmqHuR4tmm2W",
  "key27": "4Ks7LtZ9kXUycGCfRG2bPsGHuhRf3amaqHwbdpaLvcAM1F1a2fi6RPBu78eFTvHysHHEnNg7jnPwwjUdPQnvJ6oU",
  "key28": "2oHW7oRo26gq3brvZtk4LoYeSHZA3hQKa9hNfjJTGGBmjBWnWjNp7uynnJtyHkfngHuVgHFxVTZtLSYpVpD99E7W",
  "key29": "5mYnRFW1Qe6qjgELzt6JjGajSZgAuUL8ufmmXGy9UUS6wrnx6i4bkEG54Zii92rvePRpP9NzT8kz2LdrQQVySygz",
  "key30": "UkTGSNG6SmLwFFrBBRnwwnRVSqXdg1jrpt69XKyhr95ttUhi4FhoBQkoEyJvJfTzKKFGsst1ZTJxX2bembmFhQi",
  "key31": "JvL8iXdfDFhJnLccrspNaTAqzK9pWs22Rwv6qCM1ggpZJh47FSm56amVPUtazghBW5KNhfTbFpvBRGNtiXEPivy"
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
