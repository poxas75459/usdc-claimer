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
    "bKuUgjkoZXQgEVNr7fm61TWPSJfyU6g6hDWmTFHkTytxCRKgzSBQERHJvutF9jvMFQpJU71RDvnpt4BZEVPx1mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gU4whYTvP3yMcqsgtNYuSGeUZ23XuRq5utHNhjeWnEKAwSoji1wrQ7tTrErDQCCoN7b2FuqgGrB673ALzrBtcJF",
  "key1": "5nmDuHGk4o18gghEvzozergAMYGBzJhi3163PxhkHr1QvHydSVJKQuTALut9xaGfyKxBq1XZi7S4ASTZNzpNKKW2",
  "key2": "5gggycd185UXoGvbRyaHAhPRqb5Sv1BAdiEQtQFP8fJPVaq2uEVJqgz1SpBLZeU6Rp8itHvhNHLHYgoAd75RcjW1",
  "key3": "34UrD8RiZKYrQqxK1FqtcPSt81dtDzvA7n9zBotuXAoxasqxNnbHv7bp3EWM1Ey5JW7D54bi2Z2ckY8RQDBfVjiQ",
  "key4": "5pqHKZBfvRapBR2iLGLZknyzTFoq65EwxjvKPySkeBNxJuq6feouyCwBVGjv4uLKshe4wEiRTd68XttMFTgPxuaD",
  "key5": "2bB89oxeXcGuK5DtT8L7RkwREzEUb2XQAmrtkgTCUYrsNbi66fxLbcTiDuXGVsECTyUtYQ61iiWvRZryfQVN45Wg",
  "key6": "nFRGfP2WQMb9jsAwhvs1L2FaeWnd16N89JgckT8hGpMMy4JHDx3bd2Sqqf6HFf2JAoQ39tumDBBZLcd8vureS8V",
  "key7": "43gyr7mAgtDDk3DagHH78uX6oJJ1vBSLwhW1RQffMGBaTAZZZu2j7zYA9nsNSXxB8fi1nkAXnP2GqvQtBUr5omtH",
  "key8": "4uPCW5ym7J7v8KTpCyRbFbtMx59runY84Rmxt8bwt6wpBjrQrhVSryCfeTi4RkWVcGafn3y1iePNKesn5TNzhcSV",
  "key9": "3zM6W4A6hF51RxMx8ybhrUJTgtDERAiQHVscVYWvyU5RcawB75yYLruS3w4WY5GxovHxQH6dM3PLgumBBSkk9NyE",
  "key10": "3eqxS4gahphBJmPV4ostaZUR56T7VwwEinom2eRSwGk58Di3w2jMa6r2eVpFHDwGeveQNtB1Rvtmd8yovuF4Ydn3",
  "key11": "5i24eyhqRBQV1rWp6LAcxbqvgDt9j3zRZvWdZSNggzMpxJfspXbMvj4eAvqwkkvqaZnf1oEAfXmJDvkhfUBQqSz9",
  "key12": "jcaBt1exvcWs5rZNQ7zBKwzPWPU3cBGf5NtnQAFuG4VEXwsrBMfsCZ9abcDNKb6wB6vLengfEZMphoWPHgAi6T9",
  "key13": "4a5odi2caB9PjpN8yqhJH52QuoAfw5CLxd8CNH3qReJx2v5mkYR6qe2FyGvYEKS8dn6ST7aPQha3QQ4Lyc9W4pAd",
  "key14": "3kSuEywvzri6AddihvdxKyn9PjWqi1mKoEVYYZc5GQkmX4b5TuYo88zszLhWcrNYGdeMbHLFWMVo9BPA2dTDrgF2",
  "key15": "4LPcAfuDBFm637pA95RhNYLrhnvZqzctW6sQNd6ECYmBzRKJza3bMc1EH9DJNFwsq3ghRdW44KwmNQt3FHfAnsrC",
  "key16": "5iq9Xt3sCBLECjMfhgwV7a38zNZXZyGhfjy2utGfBUNj8dJEUCRfjh6VjtAinYAPYZVPUJcy48qdVqzGVPBoXYQG",
  "key17": "3234SeEeyBzG9f2qaNYQamRLDCEk87togBqHow6wMb8eq6uGy5d9ucJQmDpwdJ9PQaHoUS83qPMLqQDY1qR6TaJf",
  "key18": "4Zmyysn3N4c4mdeKKSJexyHcyo8wNEspNHkBF9r8xGPReCNKJAKi2iUPya2gY2jKoBHVuYbNAR6LZ9kTjAjXFrGF",
  "key19": "2DzZCH5qPCqizfMB9VfexkpF8yUHjDhNGkJ65KZFK4LGzdZGQA21KhB4G3EGWPjZ49wdi3cMNfJWnVmcfCkZNvb8",
  "key20": "4nRFovFNKt7sQqguFjVCiH4wf4Jvt2CcCMYFCvfo6N5ENkBjdkPJj7aFZMvyGyBBm9W7hKeyWQuhY4FEekCS5R5v",
  "key21": "2Gtp9y9LW7ynaY8pWmbFLBiYXrT6PzEcCcdf6TAu58xkWMKHjT7EkKYjsXMi7c3w2yQTxqeprM5Mfi7bz4mYkk7",
  "key22": "5Mmj3yrj9u77gymUvjQ9SXxYVaFwnU2nSkoUbdapEEUTeNARRQX5RMXz53Rrjs4v5qPuJnHhF9aro6b6G65oNCLs",
  "key23": "4fXxaFCjD6bKc5FW5XVU27iJscWPeyAed2CoU5EMfpbfgEga3JiCrWiDUPhDYKUWNRB2VGnVh9ososVK1m9KPRqc",
  "key24": "22D6qSRpW45Dm5esFtcySxbQNtLZUsg8WEAD3sHn1QznafqWRoGdKSqmR8bydQrXSuZWPcMA6BacaBWRSMAdvKvc",
  "key25": "2ueX7LGSq58pmDqM4gtxafkJ5EYCDXskoLXt9T8J6qrgoDXmfqCRiH8C7e9bjQGqB7MAiYB7WzWZa2LCV75XPdsn",
  "key26": "5XV3YRJZBxoztAcpz4vdBiSxsUzGsCSoD8nzoS3rvYk48DWE1Bmx91UtxKFdLdxQHzEEEUToq4xWPAxvnVGfcQvP",
  "key27": "5DC5ZYi7AMrptuc2DgwhdXMQdp8K8QL1UuEbfaEJq9QnYbbo4FTuhD67hX9pp2rEP8LQaNLajah4CbAyh9HNnTCq",
  "key28": "UsZEzHgpyChsBP7b87WdNgkCm7oYpgxFDFuNRGyR9XivbpaUWmoeP5qbEwmN5fV5khGLjqPAsXQ7k2kB8adBfUA",
  "key29": "3cfLGoBS37XX4cZx3twM69y9hCz25pXXAy9dMdr7kTWntXRhsSzJFYUPMNo5edRYhbyw86Kv79YTmgqm7oQMBG3W"
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
