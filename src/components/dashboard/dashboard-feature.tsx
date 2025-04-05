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
    "4cMa51ggtXrzspqsGMkJKHHexfcFnxQ8pjhB1gb8hq6y5FjDSboceiJaqGQ8zyEWEHxtbNq9NB3e3QhyypKDukTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53d4L7UmMjPZBuvNs4rHb7LcWebeSnVfgDnGfWK9pYZCQbbCeoKxueSMCVeGeD8vmNHN5CNTXie7UxpV5iy7uTrK",
  "key1": "4rU5wG19c1SKB4M6pdDtZT2VNafT5Axa9A8HhgDc7qLKkxSDiz6kWxe9b8XCew87X6Y64rSLTWf9QVnHtfhYEeL4",
  "key2": "4xZCR2VkEpCUAqhfz8UGN9K4eXFNTWH5CscFZLAvfCWsB5bNkJQZsipEKfoLEBEuc5E7oc3sLnET2CVTjzeTXd4K",
  "key3": "48AP2jr5KyVXS8bi5xpAbJ5RkU1PpJfy5YwcMs2fAid88JL7jL14kwfahiFtJYBz4jxfuq4qkrXeUz1sD2SLGVWc",
  "key4": "RUzHZPqVrhtwohQ8jSp1X1n3CKxAedDr1Y1XMxhNo5rEs85tuj3VuVQpbjnzWZj5Er91G9pU6mAaToEfgczsyxk",
  "key5": "5foAX2wVBK9Kx9VQRawZ3vLRp3QSQDWoyq3G3bf9j1aDgFWMxrmiah71FLQ5y4mgLen7XL6i9Fh3Mrg3rAAi37mG",
  "key6": "4EHBHTU11qwatTjxA1Lw3jEaQFskdoMXVuo2s5r52zGgdn4rqfss8ZcH3EKmPpsjYC4P9hMHAUeqwxPBwexNaGdr",
  "key7": "3FH52qmch3RxuMwCYzNSreyfKPaJ4TsXW1MLV2KAPGynZJb2hG1VzzpBP1PtF1avUarcjjs27zTfz3GpjLAcRuER",
  "key8": "4YqnjhQN9KPgNQLyH6Gzgx6Wp2UzXoj4JftN63j837fN2ET2s72uavZ7s1YAPoNmsXLAcxksjjTFgj2ZAirE6skr",
  "key9": "3XWXHZfumDEfcNfy3JAeFqF6QZBjPMbWFSW7kBE1rWG5HMoPbBhsQY7Gp8Nh593iHXBaW1SEnchHRjUBoes8B43c",
  "key10": "2QKXHmcUTW34vzXu91rTkKh9xnf2bKiuAq2euU8xk8FvRc5YcKNb9W8xcqBHwTez3j2FbxGSPrhtE5Ti4zSvQrbR",
  "key11": "2aGS89nHFpHJ2rt7ux9CSdWiUBFJMCva64C17gPPuFaoCcMCRcA7xK72hmDyGmLq5jizJJ2C9dEEh6bh1QEW9Bwx",
  "key12": "3CW7aGsBTJ1UK6R7HHwkadXc6Vzd9R93BLibUfUgdqmdaT3HnZ1bwe8nkULHHPr5awoHLnMPN5wLF7WDYspvCNxB",
  "key13": "5rcec4VyHz1pxt2yFAfDRyMPKkRqG7rMdvJQcFEgedAhe8yKzvpk26gQGzVzs9YAoR87X7Qr7kjiwGVDwshYdrCG",
  "key14": "2Lu81RTsx9pjgsYgRxZeY4FthUdmwLwYVhPnbK2ZQRHJm6bPQApF2BEB1Y1JKSaenAoFwJAVCBNJxqb7JDEhfDGR",
  "key15": "392dWdQmKub56rVa2CAcrZFmSdrqFJeTmdFrL8b1c9NMYiYucnMHmV1xYNk9wu7A66tJxXeWvb18gHUD27XgT9WF",
  "key16": "4S5zd3adqwwtWbKEvsMnyByNLtwUajkDudZMNpGEKyBLhy3N7Ynh3tihjYxaEd4Qj6ZDCnGrxgrPAeAo6USXGfMN",
  "key17": "3uLaauhdFhsMq8kv37LEv94F24Z12DMubSWYNykcsQm9GNoGQuJentxjuxZV72axPWUrpCvuB1oZnQpfWLsFAfkv",
  "key18": "37bgzeq1fX1Ns1TE9toNCLVP3y4WoWycdGoeNhBN9uyEsi6Rb9k3hbt321oTDwsiXspAmMpAVKTCs3dX33vvnppG",
  "key19": "2Fczsvt4DbjCVEviS7KVqrfXGHS6Cwvg5Mo3zYFBgZCVygiwSmpJ4TqMu1NCDmVQXa1FFwrvAyMipANr7CtWwazE",
  "key20": "53PdrGF3YsN4ZhPZrF6GvmYqDgNnjYrRrTbHgbaFDFSdUr1SFEpNXrVNrsswy6Lr2QitLPX4o4cWsXmPPLQ1xmJp",
  "key21": "59BhL64Wue7SXU2aQX4N2V9tX2DwqVXnQtpBb66YhdwLMF38CxXBy3Pou5CX5JSpVrvy26favz35D3eKe6LgRLZM",
  "key22": "64Zs9pFbWeiPqG6FKibRx4GwrAeaJhrZCsQRjcWV2TruScc4ZqTBTA2bHzhjk6gWs17yQRTc4hRtNAnaxeSXbucd",
  "key23": "w5k238Ue1ahxT4wto31neixsSEVcZz56zozezwqHoUU5vW3bLLWXisZ3b9oqKj8CoUc7DnrwyXLxZUGU3jMK3sU",
  "key24": "5gNrm4phdWyCUYQRyFMp5NEoKfb1BmvHUCNFBNrTbT2PmqTAgkjydghQHwkgiyp7sJtMagvB92gACWGf8aF6TXGg",
  "key25": "3bxU6xYXq6Wjxmf3XvkpC4ygNoiGceWvpSFGjNpv1k4UJK9g1dRW3uC91Fbj6ekKLsHbPFDDouFRWhK9c8GJcLnM",
  "key26": "5X5Dddt2nKnuz2zX2s2M9ntD3Qn5V3PPdqneD5wT78EurQYYURVeiZrZe9RDKwf5gtQKCgrjEseM7BQkNDtBWo5D"
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
