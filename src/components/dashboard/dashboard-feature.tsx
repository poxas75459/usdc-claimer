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
    "4wGGaWCNxY8e7dWpiyULc3qbC2ABbK2f63JhLbSJr4DV3dDFd33dQ7RTbqE5PjcprgB48BrcFWPoeqXHN35L47Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybvodUqLJYT1MVzWuLuF7mN1guQTvhbJ165YLX4bQHJHiG49jR971J4dKNCQirsUkX6Jtc5RHFMtdvoFZH2Mk7z",
  "key1": "5F22oYpb65PuRiZMAC31Jqbo3bHfCTfkH5ud9Hp7v7bwfrfHUguxGxPVnM456J2aWkYRonqfffUnU4wgTz8iZqk9",
  "key2": "4HAFETvk8CpAYT4C5TSLEj2V5SwbRLg8r5zyYgJv6a5zRu7P2EJmH73gwyFHVzSptkbdFB55g1fKCwqyHZRweud9",
  "key3": "33hz78DHdBYJhNwf7YC423JSiE4HMobj144HTkUUUoGwYpPYFUnbjwu2pgzKP4Bq48DVx9D7thYxwg5TVKDJGhXD",
  "key4": "5Zd8pGiJ1KneE37AQfFxEi7sH6zovmbUVYwzxKSGusMiun1xfBL3vqwLmRqMbpvXU6TNt19SVe2nDqrVeRfKyzto",
  "key5": "4x4R47wQrXwPAa4KiA5j8oHLK5BRL7T2CUznRhgGtv8gk9DhQCrRf69GdrEgnMjWMuWjgmQeQWwqTLt57KdvvYAM",
  "key6": "UWm6macvU1BXUpzzh5uEaDHDCD8MTCsku1GaFmv6re8ePKcK1S2osggW4k4BjvoWRqWGFeQ1kgt4m9KdUqxqr9f",
  "key7": "2kW1PmNSgvXCV6YGdUzyfGngemZy49RbxSNmfV4uq9rDrf41BMyjhooP6grh3sS7YcdevikTCjJGRTkXjVCNUYS7",
  "key8": "5SjVSVf71jKR3cxTjPpDjiw8NCU9r5aNmmcF5HjFXHomCKpL8qFrqq6EoUCjqoP1X46nvinZgL39AHzgo2a1ZKDx",
  "key9": "4XbdaKWYynok1oTRmJMd6HwXX8fAyEqqLMQw4gsU2zgyEnd3xZDNyBcGT7cCMDV4zzrKwpMVVJ5E8dgJgzmWpkZw",
  "key10": "3KRbeu3kgsTUdaN6k1RnU6eWgkX8RVxyY6YJmT1C8dYbf76Kfm5HuG1tEUhWKy9D4f9WBfoFjZgT68cg5d4Po7L7",
  "key11": "3s5HZJXkP1h69mEodbt66n13cpSjQY4pgsX6pnuAgwukYvb9sfaFX6DZde9NeHuTpXiqnnEDAZCvDNhzoRSNm4s6",
  "key12": "27ANbMnk4xRN2gF7CUnkdJWDLJyab7NnrsicnrtXLYMV4GPVgfQNMfh3re88HnKSGSh1TG4Z3KNTNd2xh71H11tX",
  "key13": "4EQBg3AtzdjguycoAmJqBTzKMV91fzqksfFfS7KYALbrXS65awBwj5rZXpuvR9tmRBd9iiqFhASBUmnr3Dn2zYJM",
  "key14": "5VbXavtj881b6oc2DcW8qG1ad3Ujjiy2uXKh4wzJ17yauTKXScrrN7Uat1sdRc3G3gw91Y9hCRUWxRqmzwzPJHgc",
  "key15": "44JoaogrP99wCDvLQ8chPneCFGeMLF8FDqu9Av21za392ZxmQpvTz7AZgafHXqRX4e6z5sV2JqGPFiBuYXvZoK3m",
  "key16": "2mRme1LX83DLd3GRSSNXM7yVdAmhbesHhTEjTeKXve4B3HC1GqGukdrDxoE6tZKb9mkk8jxscQpFvQZ1FDSpXgNq",
  "key17": "5vBnVv4qEQsgeHdcEDeYp1QVykTX67u3k9aabeXtV7Z8TJNv9DGbmDALQnKWaPXyYFMc9hC7LZa9e1E5iwXrsqtP",
  "key18": "59tZ53f154hb3QgEUKGE5keDoLKDgBkDVdYXPe9xiQXPNTqPzDQjuoNgrdTu4s4XEndRkxW8ea2c7oJvijfWhrfK",
  "key19": "3vjvA4FUV8pGKkfWD4sxvQDm3eWwj6F9JtqRkG1UqwcV8MXCBDEtLi5vxpBhaPBSNxYhc4sEDw2fjvtqqZNJEGB6",
  "key20": "5fT46vL63FCmu8HwfrgpKXqAsGcBLYGSy694XNQaDzgB5ZmvC6R4gMWnvzwhRDKZHSkJercvXkKk9qAk9zqB6u2P",
  "key21": "5eTqtSLmRPpHC3VXj1prvQwp6g2WHaYwJUgALUWURAXwqebYuPgLfZvq2hX8GaRBvsz6N9RmA8MnMwZ6P6dM4sYV",
  "key22": "BKKbw36hgpiDdV1iBcCTtswoXER9YAXYcraqwHQm1g4Mw9uJkEc2awpciiyGuRgpJY8mr7jWNamxNyqsB1EQSmG",
  "key23": "4ZBVA4kTEz3dwnmiHdBwTo2o24e6Rnwt5djswRQiBdpxQzkXnsUEBFgW47dUbc6n9UeReuwCdDfonkDFHVSmtnm3",
  "key24": "zyzZwRZ1Q5EPr7bdThkAtbTqxmoLad1srMwnSK6xWnSv37YAp3wpXJK1hgmarpkX4P2p1evZKjvZ6S47F7r5fE1",
  "key25": "5hNDydjQR12rPizUpcSicgBoHC7CkykMtuDHKgNB2P7hHd6doUUaCUk5maeTENt9kwpuytYwf4hnR6u6mLLhB3jT"
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
