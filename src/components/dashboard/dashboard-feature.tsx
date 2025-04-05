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
    "5Ce6CnNJv2PZ8cRxr4KK6w7XyW9ToLDWCq5nnZmPLDk6WhN2UwaSLdcqCJYwLRVMjAz29K7ZAJebeurFgqpEJiK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34W9CLwD6j7sSQLRL29vS5xNtEEmSEiBXX1NN53gTjr569bWzK8R2mxxag62LhEkFDrzvAW4YsWm6JkhtgsFEPYk",
  "key1": "3ZfztRpn1z67d92qqxTzXZcL6HzSJUcFhvEqpu4E4ixf89FbP3tCaS2g8sACWH73aaQ2aTt5gPxDRRzkYd8fHCSf",
  "key2": "3BmAta6DRgYVbpMfWfm4hn8MTpU2X5q6oqmacDjmrM5gAMCziPKu2LKtFMEfCn1mQsf1Gbg8gJ4rTYkR1CHoqZ7k",
  "key3": "5P1ENzFHxqYrQpBPShzVmowCPmjcMNzUhapcEgkd3BekTJrN9Wa38x7WVTvZygXjoBPeFQ8cg6Xuf4uNnP8bE48J",
  "key4": "28q2u599fViAG4Yk1hG9e6qDSpGDpdTqRsFYeGMLoeNG2rp2KKZRfVYy4wD6CrhD775KYuvLUuwHAutv5r6yKqxN",
  "key5": "2NDNfkZRiRBP54JV6s3BA34zcr9CSdYC5JMGtDAKixXJ4nPNJcFWeZpwR8FfvpkdtoJHNzPPjKskV5iAbp1AwDo1",
  "key6": "aGa93JntLWdVJ8XXoFsNBUtEA554hWpU47XW1SzooX3mUtALzgHzPsSnGCDLkrT4dWvmAKBFaWUNetGGsG2mhZD",
  "key7": "5JjNjZ4mP62NWQ4Np5rGq5fVtXwKxLdTeCjTQExtAiBKsRAFj5UnsNYY6RcrGb7uPM6UgoWyw246YVuUEv7kNSVW",
  "key8": "4Rk7CgKYckTvqmbDCGg3CUgCJvvi5y8TNma2Z7Axdrtn8PcfVhKNRk4gfVpXu5E3LNVsaoDZRxWAAwGgz5tew2ht",
  "key9": "5PncX6idNDkHNarhgBhagCCVtBMbJb9oo7N5FxdrTcqaebwAwqBRK2Y9NseqLkh36PrqGKaAG3p5mAzGfzWUtSU3",
  "key10": "3WYx4D7zngyanuFdf1Wagy5R8AGGHtEt9cAt5LQLUsijiqhrNhuHC4zyMfUsE4SZDHmsqS4Fo8GfU5qRjxDmhT3V",
  "key11": "2RPd2zdA4C74thVD67NDzeVEvVyDAxmJNf3h4Rc7Ykvq7aG3LzbBrFWFxk2XmeavwJtkmFZzs7uGsTRfstRqDP7c",
  "key12": "5TcoxfjqTAu6yBuzSTRKZtrAu8bucZfn6RoUrTrZ4MCXeSPwMhaQWcmMjkGTQEar7QJ5veEQe9GUwveCUJPHFB9U",
  "key13": "35Hk4LPrNqwbRgFwSzZ23ywnkgZp5mF2XDTnYBCp7BCVb8vAmS65MJ7HKA2qNcuL8P8ZnXXaYJpkRpeQQFzUtEqa",
  "key14": "Z9LhxDMboU12PKu6miNYS9vW7jANUwLZHzQLq6APTKjjHWV34Xj4LSKnR3eKtwJ89w3FGhgWvSUvp41HdsJZh8D",
  "key15": "28WtMuGmeEstm5TyXseUCM3biHkwAo4MoTxW7ycwFdUSM2gEkHGp9N61b4qDddJf8ZuPfQWAAhYeXBYqXSdiANt3",
  "key16": "3STnG8VnYfcwmRNzU2aQuLvfpsuuDwMVqk383YsNJyovN6S24j6ieRibm7DM6spYhEEPF24FEQRtK17fZdmQpwid",
  "key17": "5cqcHfxecJXhYeAUzgRoeHnG8Z8ENtVUfoThNGPRTvRk8amrF9qGGn98xiRB3c23BjYbBR5YRCytzKR6Bfx5bkdU",
  "key18": "2VKubNcxqqbJhrqqZ8Mm7Dt2Gngv5WH7WyuerUX2ndMr37WvpbDocbNeDhMjJYB7Stawk864NAnJAMrVHQ5AxfBP",
  "key19": "2gBXeJG4fcRSp2rBY1j8Tog3LSDTP1wUnwZNyHy6NZJwivx1TjxD1wjpzxDynEriQSG2iypRYgd2m5JtUAdDG1ho",
  "key20": "3dPKKvKuSEcjDa6pKWjaryL7QpLcJb8esvVqRFUNzHzQT5ygpQomPLFu3g6n43ioTNPPosDuQepYy3bqbrdpB8VL",
  "key21": "dpMeYaE4bMQs99xJBapPaHYTg9FScU7j7VXB2sdg9UQ2Zs3coeF78YYr5WCbZiyqpW9isXbzoy6v2gfZsekwRRm",
  "key22": "2F3EFB9dKafd7Zcqqr1YmraoRmP21r2q2xx93Lm3dwjDCKFnrsiv8k7zgNt8gmEPMAfkk59KHG8eYcVPsPgUt7uf",
  "key23": "2aNtGT9S4D1jXVrE1qFT913QSF93HG7MktTUa1ZLc82dz7BywsYMRNZSVSHEHDuSd5HDDP8TQnzCwXyoRym5nHQr",
  "key24": "3GsEKwr2whwMBnYVvRKBa8SbgynBtQJgcYnAnKLdGobZjgp315wk6qyPpnHhfpD1buuTG6DtU1mxbhHuQemJsgT3",
  "key25": "5XJMvmm8sVKL18XV9fXDZGVR8unxsCiUGE19uHjKiZVH9WJ4S7MeMcYTPiJo9LpuAJa9m8C5mSVdqQhBWMranhg2"
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
