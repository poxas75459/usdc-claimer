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
    "4WZeVWXud4XAfj6HvhaQHM5uy4jiVgLnba47myxqRkQBazXEVdH5Pd7AuEm8qZNvWUexEc4r4DSuiDgdtyZZY7NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ENmCxd6AGrJCq1kXsF2DiPPPaZT8sTd2sUMJTMNY8Z4ELm7ph9cWKbn1dkyoEbi9r9iCKy1hKe8UNDSjFpC5kFQ",
  "key1": "23MNBNDutwpjcvqiccteq2QkkXRMrPHerMUMkuC6rYiYiTrSd3wQyGr2AP4LKS1mc94U3gp4GbSvdEDebGVryvty",
  "key2": "2kdYRd7DySb562CbUB5sRJa3nepK3xvhsY7qgsqqNkoCPgvnQXifszZTjXxjVGtZzkkMbaed8SJn6TSMS2MxE4dw",
  "key3": "3xrLzduqHwxQBz4wGVrgiGQPSrBXvHhV5icLoWb5pFBjz81Vc84tKWxnZUovVqZHXWKEyMVHu8HM7Ds1iphS32Nc",
  "key4": "2WPGt2J13Bs2s3kFob8icS9AwP92UT7vgsrtQ21gSbYsdcJ5AgmAvAvU87UTaVtPrWKKu1YB81kn3emTcsLbMxaY",
  "key5": "2famaT7VDQZCBqyphaBcmCUDGUVtG6HYWgCHDNNQsCvJVy5jkmvzWCzD5szA1qPDD7jcTvs8AUxLBbAWqtXBPS7v",
  "key6": "5okptvAVmEu87wY7TJwa7Nn1aCAVMUAtrdyyj81HGvwg7nYuTPV2kzQBpjhbcJrmDPnVj611Xq4YYNFCs1JDFwbP",
  "key7": "3sRwmHQSdpbu4yVp3c2NKd9xQreCHrcHWicaJVQsMUrMGsaCwSSS981FJbdyGWvyUdhmbq9jhB32cfSH9KiA1k2z",
  "key8": "62HxZXnV5RJw4BwLpMVa5qghwZCGZpEh8zqw2byqv53W3RaWjF4HaDkfMdczEcFBAFVpgntpe4EmiJqe4FHPRU49",
  "key9": "hpPH3JoFntYLSq5E83q86m6QTuefn6UBsbr7C9xwqxBsVN4ChEUvSQUqVdj66rgngLtuZKJiAra625iQ8FyoFL3",
  "key10": "W4UXDE75MZTwL6rTCatoLnjjADVz5zYoX5LZpxYp4XggcbetH2XWvSboNmHSMKRLNq6ohyJrseFW4ew7gvs3rZR",
  "key11": "9bMygHkx9LHM7eHYgCQJcyb6FCECdk6fkkeCAiM3EjPf2DMCtaVa4omJVnPxTfXUnnBraNWyYfZx5sqeejodqHm",
  "key12": "2jdFtADQMsVdSTwVZ61LJxQQUbddWcx2KizazEtt4FoDjd8sprUSn6CiQXk4y5NHpqSEgwaHEJ9Fb8offtY6Fj3R",
  "key13": "NpbxAY3donR1XPpJC6sZrbb1qCm5UovHXVkvWW2nKZvBuKGbD77BpFvZn7o1c8PRA7kpKPVifvQLXuFxNn6dNso",
  "key14": "3vbD8evHTAiCWeQ4HrupYokhLPpEhtqkxgSg3q2QFY9RTamggzqpYKUhQrRMTUvzAumX6hUyXV4P8cNc8rdpdPXx",
  "key15": "4hkPCfSkuo5AUSWGZtKeW4aT7SkJWomAk2ER3hsz9VMn485bgk1fAuXN3coqvoyQBpKN2bEb2UcED2ogBwDgWd1Q",
  "key16": "rh4chdmswA3wgNXYs4TKR9s775CAJyWS1PCkJbr18pBw96NpNrP32QY3rHf1tFtnk5RYircKhAH6goKLRnHPkye",
  "key17": "w9sbxVgPSk4ZFANZvWXAPo7HicEvkdv24PPn4cyG2CbqZwMuEZaMrp3ZhzEdLjkw1QrGbspwUqdm6JY2jRYyiKG",
  "key18": "3QwGLx9WUq8PVJs4cNVAp7aDMogKr8xb3BRoSq8hfz6JaPb7F9tkGVxsGv44PnYrwExyss1fmKcTfELoLoWevtG4",
  "key19": "5AQHWNe1PJXfnAzRESxAUTAFxqd3Z4QmCseiGmhXkvEHLe4bCLbiaseF7eVQxTBMJ4JZcLkQctzm2HZPJFgU8WZp",
  "key20": "4GjZjQfmsr3UiahGGRRX58a2uDaKFZhosyQgAErEyix6Pt2gjNAwfNbQ2Y2RWwXs3yHY9EV9LWWGkMG4eSSHdFgY",
  "key21": "3DHjzynC51zWsSF9XFuTgmYQGLKU2aWPqepXrmvQoGsULTDjRvN3bxtL9VNZkjDo15M1vkWWAxo9dEUi37N5MQUD",
  "key22": "W7LtyFFrze5acYcgZE5yB9LZ7UcX8T6o4tg96Q2BxC8i6AoUTs7FWkZHiTJT41mkjACkrkPfU7CzKtzr2nTM2cF",
  "key23": "5d33J6sYwb2tFc8RZx28or4MTu8SGm2sgcjR95SnhBU1Sc6P1gDQvUSYrgNxQq1aHEQKof4ucLEuubuZZJK89LC4",
  "key24": "2t1RHwGCnytJWABAcvPCb9vrCuMu4S9QYWUQ2ZEbo2Y5mPJi9UejTpJkJb8Mu9hF5wwC2ma8BL9FHnSexU2fXvx5",
  "key25": "63dtvochNKvScCjcqkCqkUtBHp5HzNijN3nzw3nSTWTvMPPU4KcZuVS8g8mnd8e64NJq7YtzZSQ7kTKpBC6ZGPoX",
  "key26": "4Gwb6F4vdeafnLSCiLQuFmbA8U6rpYH9hEYRwTN4HhrFB8GwoqToEQcevHLTrv3isadZha1Ht3gm7ie9umqv5WHi"
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
