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
    "3opXwVus96o8n61c9NewVqjFXpzcbHUGvo8y39N7kDcfdj7iCBTXPUFfxC96WKBarP7NbEoKZ2tyjKfacHYf6amU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3u6B9DXNrCUEAFsDUTYeXgFpLRJL1LhKFZgBzf392KTaibjiGPxdJeZgmHZLKkDeSVK6cP9fyqjy8HsRxCjiix",
  "key1": "5va9zUXif8JWcDxZBVuYmfWsxcUtBu529Ya7rpj8jWMHTAwwxue6XLsfVzkgpH9xem7SDs73bYDstKdqyd1j88kE",
  "key2": "q71dMGui3mpmpkLTfFogZfTSbxfxG6QJ8bisMusph9n9gUFxSix3Fr42ZLVNxNonKwG6UxGK5dnKCPdTJ93BAL8",
  "key3": "1rQbxJSp5KxrdiAPGWkrBwQGNiE9v3PNVggXPFUyMS8DjCr2dWui4GpaEPKThZeWDAmYoMWj1fPU6eL5jBwm86g",
  "key4": "4ciMifFNDcQMu7GFMvXBJkioUxMtZb8TQfEd36o8fxskscLfUGbyw4nvmUEcg13kgk9r5WcKNWtVk1ry43BQYANN",
  "key5": "wU56V2p3pwF35JHutsVUtmyr5KX2DMBJGvtxR9LYhyaWGG4kQdJ85RkPRD3ZuuG2AE1kfRXVPMgQ6H2dXNQDPmU",
  "key6": "2u4hYDioeuYrqbrXRyDTuFa1NSuZa4mpU9pTnutCYpksSjcgU45Cm8MWqSuiNm4dZD7CUNxWb1nj3Yz7EFHms5Km",
  "key7": "4k83TagXQPmm5Zqiu8eWhCz3HS1U3mw9De92AAZpPdYPgd86JjjyAY7WZQBWYEDL7dBtcCHJNjv5aJ7EnU1RjXJD",
  "key8": "hLuS3JNAheEcVhGjdzAvCeNKynXGYpmXsoGeyut1GpWsto75CUDVJCrFLaMdnieoDBf2CQJSnC7WtJAah2ffztt",
  "key9": "3mpNmdmr8AiVmbhMFMaf8BK3WLJ3J7tfZtUdouH2N7heQzYKiQQ7jPrENQPfw1DEtn45wLoj5YZpEKhww3UYcYjD",
  "key10": "P86CsagnofQLJ7Fyjsq5c2iCSqYjs4j4bZ71iZJ3dkum8NfadEG3ieJV2twR8c2BysQRVbnFmMbrmAW11WJTwwu",
  "key11": "2PD891hWrdmGwqeFc4oEg4NRc9E2wWAz9sVLHJhPWxuN6iAE6P9dJwSdAKff1r8BdYdrGiDZkzeA1Z49Cdx9caSX",
  "key12": "4t8ZAdoA2SSRyxjCFfCytFJg5DjeBdoqQjqrvHrt4G2QM1LS3cd1zoGMCh3thFfv3qJ2Kax36S2gKe6H9Xo1jwdZ",
  "key13": "5ypXPavTHrQ8MUtvvbgwYYU7TaT25hN57fJwYMqfnq544zUGwFJaQxg6ktxvVmEfvEvPpur1V9AXa8DLarY4X5Fd",
  "key14": "4o82KxQQrgmenZPzsVrtKGnMgro5GrGazQaajXzxN9DmQAFVNwg1hg5X1Dd9R9MJvSprKUPWoBvUoP1CAhBKYzLM",
  "key15": "3xtsBKgzBBUWZSc5eAmEdywwvwbw8PguaTfnLGtAwDHzxyU7L5gS3YUTjTdXAqvNorfYgqKiAvodJhd9pEXSzNd4",
  "key16": "59ZLt2gA6zaPR1Dx5aCmkLBBWftckstXdKeedGQXR1oAsKYXuRnh5i7bqe16ujVo677rgQQC8QkKyXhzkZm32Lue",
  "key17": "7mtVWiz74gcW1nujmNGM2j8Go76yKSyq8SEiiSNNoBryWGkuA8fiWmcC8asKDuiWdcWpiJE2tEHB8bKSWkPidLv",
  "key18": "8q8DToqXwsbKqVzisNo5gtp5z3Cgtkpe9CrwQkvjpJW44PTzir1za9h3uv6PMZmV1FNDr1CsCLhDBj73yrfjoKh",
  "key19": "584oekstgXsc4fKoDvG4FqLmmH28WS4xTMJnRdm9ZhTbwcPJYytzdLrh9qAZDSvk6CSTDCwCbkwitU6fVZgfNq1m",
  "key20": "3W2FpQNouuPzKthBUDJxAmAwETAexptx13PHhV9oc3uQ163qi25APWG9T8NL29GpgMpwzb33vKAKJYwKNXHLWMPJ",
  "key21": "3mvjSHqwq2ubE7edfxi1eHVCeqiuRXAhVThQuDHpyxhS5s2TicXqNFz7KoXPfG3dvZFs6g5Y5Sws8Kyit9FCoS2L",
  "key22": "2u35PCSs9Cqhh9pRcJ9oJ5evwK9XjA5GZjs1M1gsfWtcjGGuGF9AdGmz6AeP6Ekv23jk63iVxwf9RZdyVRe28dDz",
  "key23": "3GnkynmMU7mWMqZtThavNtdkpX5Qy8GYf3enFYZMcodqHyc6fRJv5NFKZ4eTiL7DkqqeJ118Ci27V2q1WSahY81S",
  "key24": "4f7f6fXBS8fiKwHu77xZdo3GnHzKNgM9bxaV1J4JL3Nx8cXkNUceKAW2KHbmDe5fqLKFNcMyE7qmteqcQXSFU8fE"
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
