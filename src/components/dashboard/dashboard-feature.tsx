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
    "2JmcHdiEfzXiDjpVwfWzgyXWt7fcSegfR3J42SKuSBShcVEBN6hfaSrKc7fZw25G8s1f4brfNLckXVfQpP6bsJP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SVdrK12nQJzJQbZXooE76whhhr6eXa64cE6dpg1iFT7D3wrNwqvTSeZE5428yKxSq4Je5yA6B7wFx4pBAU9FGT",
  "key1": "46bQYNAmwVbJEzCCZ7L6PWZUkYSXDhQxFgnptC3TSUbSHjTX8f1RipCWpmR29Mz4orJHg1wS59vYbdtu2UaqfRuz",
  "key2": "4jCJ23AxtpVnHVGQsqnEmTv2oFb7RaYoenCLMZFLgStG1u8MdAwBxLZnENEMm3z9dwcpv1euC9MKFqXiqZsn3SDR",
  "key3": "4WrKWcReRdhKV6qqNA41Umktz2JsJ3yyhPcP8rTJwfEnhxDQvKaKtig2odobkbrg7UQRz7pdcqU2n8QLqqpPH8Gc",
  "key4": "4VooYgBjmEbA8dYFrf2SPM5fvZFgLSFQhq2BE8V4hnE4aexgssd59SiyeXEXpU25ucmyCjXgMgY3wdiAKQz5mqdH",
  "key5": "5p5CWJ6cUcDFmnRzbFjZrfD5n4hzrh1oTwvz46JNxc4cZL8wFkswKkRzmYshXAMteDrjfTP9T2v5sChwWqkYvegP",
  "key6": "Mfm8Z8pxcKGa2i1M2FT8HBzNJRdmcv6LUeqAVcxazvNLXMvGpMmwbxqLkARtdC4yMSunGrf3viPeF23NnjFvE2t",
  "key7": "3BAiTiyDF1fEdPsES48z72Km95jyNkzCLdkZnWhjEJewiFrAveVSX8EGNMGqGceuXjLGSkkrSGKV4LxQR1cWA3aS",
  "key8": "4nWYZrW54CpMqasduMUmZxCF2XtCSnHHaRD2QJS2rUJGM6s1JqZSU4UhsQ8tKZDxGDVo6XVCK2Mkrk2YtzUD9uA1",
  "key9": "3iokoEKyEPi8mAvEGFDunJdQaawNX4EDwMCfjJxEhY9EUTBYrzaMKiYaet1tufee1eUxhBfe9yRYDjbJvXVHrsTM",
  "key10": "5ZjuMKFt66GGHsCz9qJk7FLMB7oJEZLvMENJCqWNaPouBqVX5i2zECXtwhoTaRTKPifBK9TDKYY7m8AjNCm5UsQ",
  "key11": "5ge5q5P8SNzPyGstZAM7Aq6C4vDtd8eXGVhsnJcp9XBj5ksYRqAoXhQUHBUC73PzCbZ45djN6463z8DL2Fgu9Fzd",
  "key12": "15HnKD1xtcb9b4Qjq4B99unKndMSS43Y9hmfL1LbRd3CmejKnEFqk9n51iz9sDaUpAgXGPiCveucSyEr58Y4GmK",
  "key13": "678DWVeHr85uKkecr3bVjF1xupm2uKfUEdVomginAjNcYqPak8rcHVXpBfj5zW4VJTPsfHdgrhYcV4qiHkDfRdk8",
  "key14": "62fP5AFHQ96uLxYkJCPhGRF1hF7j56k6EMX573h7DXW9xUJYCyZfKtysBZ25ispA9Lt7NpxqRBi5ofDk3tGVKt6p",
  "key15": "3qChXXHXDXcSzKN8Vhz67i77DTHKDmUC7xc1UuczQfFtU7YwUMoVvx9ADqj1sJQ9uUJZf8C8Ni7azgo2GiKk3P75",
  "key16": "3KidzDb5t2khhjQB42m83TTqq4CgFSLqKwCmbpkRrbkWDLzi2vBfeR5E7FWndtt8jgmFP8j4MFUmsvXqVRqzrPaF",
  "key17": "5xd3bY5bAdnY3LS3D8Kat18zJPqSwkqfHJZenJ1BFFTSgc91q3zBwewnNek36qe7k7itbcAvXQ5aQtUD75GrXxyp",
  "key18": "2MoBi72MMG4ZUrwAxzHwVyiBK3H8CxNw4HADXJBRqqHXyAGJqNhLGcY65nQW3ZsPRoSRBhRRa3tiwMkYPao5tBs9",
  "key19": "5M4tZkDk968VQMoFV8aeMoCHt2DCjCGbjapUvAExZG848AU3DPoDAHS3nNyvPEuvGsVbWhhY1KUnUAu4UjcCV88z",
  "key20": "wEWRkfKADaSjC4o6jJAwc6omPbVqpMr3YsRV3GJZMNpoGCg9VUs4hmVFMzhMvwG8EJAdHeuGzKEjnJ5hthXZmnS",
  "key21": "2brXSWUomQ9JfA1VTiK7zqMmZWwrZVtPdjirDRY98gf26KzZD1wfJkTg6daaFnitUTDcQf6qfG7nsfK3HSgwEFw3",
  "key22": "5HCjPQZP1VGjXRczHtekJbZ1SgV1oCNg7CQp55XFvfV7WqZe44oomQ1mdWDWfgXnwwu9vYrvUHqnaTPUfKYa1qFo",
  "key23": "5VtAYoiXuUDsucrUPrLgLMGaQLrH6qHMJFgYADE5173ESmusgx4PCi2Zdna4TLCSGWaNyEsYiZQbZoUkZDZAzmjF",
  "key24": "5ekjJViZ7LMW4aDMLn73MF5QC8QVjzBiG4Lr5KkRjqJm4EnNMmjRhUCo9TeDdfsMsxyb9oQBRYU4R6XTwUJoaGJT",
  "key25": "21raz4hYAGLMrN8c8QFJitaS6HiEVMKWFvgCSB5Rv7VttXDJtAoLsuhk4j149xjrMK7qUwWghmkonbD5qawRbmQZ",
  "key26": "39zc6wBc2o5qszP54i2tm5LDFMDjkeWfMPMhKsdcd55YrWHPz4qoFM9TQVf5StTd9F2m7HfGwWSQm8Qp68wH1coe"
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
