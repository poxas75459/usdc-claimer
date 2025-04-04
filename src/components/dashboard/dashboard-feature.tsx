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
    "2xqZ67V9KHxd2wrBrVDjPXh65qMCuGpsVmarjNGPjYR3dSQWpY3A22ByTxBe4Vu5HwWf8izWtBt5BQy3KCafukd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFPHgkPyZ2tM7eyQeJcZBjDJQnwWXZYF7CRa6PDomhTQQw1XVF5CfwHY6VZw6d5N5oNhYRNG3nQDudtkcPF1KDN",
  "key1": "2SdUWhE4nwyWSXYvvV3jyWDQM2iz9hjeA9HV2c6ec46SpT1LFg9HWAbAJYXKkAi3n6jFftMKRDk4iaAeG5wpeYXp",
  "key2": "5PKx1pUGZgpRXXFdnXbv2hs8u7ckgcMXeS64YgCYdSvMyaWrnTRGSrfisUUkxdiZHy2pLdicz7BRqX5opFjiS2tv",
  "key3": "jLLywXs5RHeCZH3rnRgyePaAdbvsbqD3UUgHQZc5WYHDMKUwKhYGDg1aEiJ5VdEUAHWTpEanLDBPVWZ8zNjDNXu",
  "key4": "3UkmcxJ8iq5vmpFM8RCENDw9TjHFFvPtHQWVPk3jme2Ebx3qhLWShKrvTEHAH5MvW43QakZJkNsHgGXzzVNm18dN",
  "key5": "utcPsG16aBguYRLFD6372h4e723WuQBMX6PGxSK6xTcqAW7WycFXW45uDa4SKzgFFdv1Rw97uvNrHqtc11smAtq",
  "key6": "5udxcj3VkNYWYt23qJy95Un8jTWLyFpcQED1hxNN7W2w2MEL4wC4mp7gL8bMUjoyCLoKgkxobyB19Mtg9gJ8HCXn",
  "key7": "5MeA9KX4o7uTw2ied5w58MyZ56BWMeV1i9BmeE2JQxS15qdx5WN9HXc7GiwPdC3Czs1br54g7PRkszUnJtjfbm3H",
  "key8": "yYG7STkTcDrika9iqbcYbhLKHLgk7pkzJzQnd7YMYcW3f3iwdtutsfK3AKyfZ4C8Qw8GarncRA3RdW6phk9QicA",
  "key9": "2eTJJKX6hHSNnqaRVTRPYQAQqsU9FBkqW9QmwaftTvBdVJLZwc7q7mKDXMVXtdj1NhpgvQLgb185gEXALLrFaEXC",
  "key10": "61xwCXuhJA7FnzFHmhWWc4GNC2QCBifGZ8uhUFHcXFVPhFWvWyimy36CjptcWzPn85VWGVmFqJTojq9W2UZo9BBg",
  "key11": "2rzSrePg8TjhCPWbqgD95ap31DXSjVJsuS9TjSWmaAGhypmvVMEAKjZsMU9SYgW5Di7DGzGoXipNGcF2g9ukzQB9",
  "key12": "2Uc4U6d6rtDLZKCXS1nN4dMFTMGYjMi2Kfx1BsdwQMujZ8RrNEKhnAcZRwutrkSFnxVbDgJFYbEh9AHm69ZPFCA1",
  "key13": "4mVW8vzPWY7FffHrFfAMJh4twk24xFoUNGpsmBCDstD4bAdAkdJRRT2A5w9ktoJ41rMnVsyon29zHSamR8rxrUJ7",
  "key14": "Mc6AhaXNeu7LvsgtRk1i3Wz2y8yd4QfES5XjnkvBhVURojtSip7Ces4BFpcmWmF3tewnqwpHtpWwDNT6MmWeNaD",
  "key15": "vC7tSXVZH7epASuPW6veuWhFShaGC9ENdMV7DWZrra1E8vPHydqmRA1CfWoajbSU61KEc3vAxzG8hfr3jLD5XQd",
  "key16": "2oNfyvZDCoahYE72RQWqCWgbYid6QMMqNLv3mqyBDfPniNKfcV3J3s2SE4PDLPfmi4MbW74BYRgzu8SzuAsVT3MA",
  "key17": "74ZhdN64q7tCYk4B3wtv7RoU9rFhxiA2eg6nFftZmseRsmU7YgKSGZuzExdHGgjBfKPvU5AcrVGMyYpNaVSha9U",
  "key18": "5txXArvuNitYvo3YTLfeiP5tQKa5kN1EyfAAVvsFKDUiR9qKNXmR7iSYACoQi8oydWBiP3HBRxVQzx83b3u8Di5K",
  "key19": "3GxGn5CWFikUQffpkRFyUcxYtjcv821iMWFoArHqb47kreXhZ3Uutf13dfPbyNUKyKqDgNkMMSpAfeYhFfKAVZPW",
  "key20": "4YbkbQtCg9LdXuie8YtXMxm8heLwPjhpWKG7kq5e4rwADkHN34QvPJLakBvqMvxMz2jkA4vG9rgKzVMXUsP235UC",
  "key21": "4KTLhpW6969fERGyLUYXmyUiFNMFb1AobzAE5y9fLgH2uWXPfHBpAvNsw1bekYA31Bv6qmoYmTxnHCwYU6cFiUmy",
  "key22": "ZQ4hH1dkewnYdQ6sXhXBca8PD6vd9yQAkJQfQNi1qQYBynVHBeoxVTgiLvcUj2RT19L1cTuKDfx4as85Zo8pfar",
  "key23": "ZJswxzjJkmWUNCAzWYFwqnVXUX1enxS6BKVd5jA8xLLoBNqhmrGTGMCexZopHRJaJP2MxNMcGdmoyheX51WhX2b",
  "key24": "3eqNTqREZGGQ41JjbKq5zLXX3YDzzLGcFDkCPxfp4hkCKAqbiqD9qcWU6oqqccew8CSDyW8bdoXCpVZWU5cbPUf7",
  "key25": "5hv8jcB4RuFgeXtM9Sb2KTVhRPnnctudQuzaUd8MyqroLULYKjmrYPZHmyBYU9EvRPeDAVJ2scJTabcMstyyPgBZ",
  "key26": "2TCrh1kbaMbN27Kk36XSbeP7nca4PxofHQzxnNQ4sLMdDR5Uzv1wKz2HxRVCUg1JZ1D4316raceCGsJhPLHYHYuK",
  "key27": "4KkcTKjnVm4TQreMKfp5J4oUpG7vzaZQRe5Nk5yQ7w4ErisUtW4NAz6HyAVknphhpKMqFPnh8orfbikanUHh5ZB9"
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
