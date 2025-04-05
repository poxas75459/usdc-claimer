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
    "2rLjAseTKwPmG7USjHgUWMpQRw4akonUnaNmoPQf24GcQG7ikA7EsFv9dVMN2agQigtkSWLv7GpXddrRmKiiBdoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5VrnBq8yVo89yGmUJkj9zqnVuGHkTfC1gQHtQrM1j8RMpwxFu7cx57M6Pq7LFzHgrfYFWuh7gGEgbZh58Qrrat",
  "key1": "63TyLVk2pPZ2tXgQGLLxmhA4zvo3rgfS93Q6nGAb9sfzdrPxQ3JHZV2b6cxxrHYP397qCcnnLTvGi3QWjUpuQBuv",
  "key2": "2W1V3Gm2QRyMEmtzduXps3ESn45XDdHC2A2mLTiuyE3qSbPpdk3BMXt1ZTYK2qb2q1dMMw13FBR63WTey9fFWYc",
  "key3": "4ViMgwZsktHAaeDyvrZsNds5GFUctqxrdFEkm28KVMJiPHbnM3nrhnShwLQiK2pRxTTUY5raxxB5HkkrCf8e6qjt",
  "key4": "4A65tnZpkNL64WP2c9YdHcrtAFBNdbHYEEQFe9x7ZQctjNghnrr3Xbmo5FkCfxLZq6rzkVVW6bAbUBCLAm9DJzbi",
  "key5": "2mB1hd4Z39MKWSnm6g7umdTDxDcfcLeZAXFCvRSCoaT6U5rW69n6dyFebi6mMq2dwqf2ovidBSuyL5eUStURdRSu",
  "key6": "erXdxEGrh3jrBjrUuproC8VC8869tdamHhG8f3UhT2DRMzS4Jxs6Acub3mri3tpF1FqvZgPSnk6v2u9WoJywSnN",
  "key7": "48m2aZymK1aDDWqfnd5PzHmv9D1Vv3D6FtR29BiqsoXArUHQV2fzsSr35u6NRmrVrNScRWFttMHffJNoHYeMFNeF",
  "key8": "q5HQq2FcePpf85JFvGrqwLunbUwF9t52Sfe2Ki7RMYiM4GqU4qvYXvCZs96ViebCyXZEewyPQxbDqvN6o3ffZb6",
  "key9": "P3cDPxFekEysk5TQzePkSrCAFuFCmN2KMD6a5DhCpirpFwyHmxWZ3XsjJnMPUrxh7cqWECRDcz85Q5PyhjPoqBA",
  "key10": "4BPz5nPFjWRFBSPKdJTdJxiJGA3QUo9PYbT3jTjBqA5k6D5f81bSCgmR4cJTrmG2ZHgW5ioEp4Z7vaTwDZQkNzyN",
  "key11": "2FJiBogomBHMnRKWtUtLLDHQza6oNzUusjq6ifQVi6brdZUg53kgUWJQ1LZooUHSrv8sWHubJdHgyt4Uro8TRNKB",
  "key12": "3eH7XQYtf1RTWHtqUxJv2oz5KY11dKsK7DdMHsFmA81oo57QRtNJADRgumJTHcYGPCLuYP41F7V1RqNKMj478m1M",
  "key13": "33cBGzf4HwJUDQzQ6sjAWanWsBJeBsLfDDUnE5VKkq5EtRfMY5TVyfzVx3aoZZnat4JJjg5stak5fmsFrH5j6grB",
  "key14": "UgMrXfhhsUgbSp9Hi7RP4zd7J5Ny8wmq5moGHJZxmZsUSV7dLX2KxMw4boaBhxv6JxTt4VhUZZi61AU56KipxFg",
  "key15": "49JoUA9MWXRVycgCbrTwrH2r5PR6vPAaFNQiHRG8mjUqxp3abE1ZCqXj93wWarQipmrwdAnVWvNa27nfzZbkzL2",
  "key16": "638yyar8ad9dXEYiToK5Z1aBWZ2VqBzMRMkZNUdCUq5ASxG9PS9PJ4Bex6oEF8Zdy8fXa7RypLho9iAu4A2e7ub7",
  "key17": "bhvfgDvw8AoQSgie2HFRYk6SKAXX6A8SCMNFzZKLS6Ew9xip94R74WhtEu3YziRyXmwqC1WKZpvkyxqze6RqK13",
  "key18": "29h3aFisHF1mnpW2VFj7T1bK7JKUxjTLGBJpdth9zPS7PpwPjj1Db2X8uaep1UEgusvBQcpH4mgCTh5Jwrb7JUhR",
  "key19": "HdKMiALYTvaJKWPZDsVkRXpsdEDU9peAdsxqpn8B3me3uQ1Y3n47xQBFeGGiV8hX4UdeQi2zDxXmnXLzUe2RSma",
  "key20": "bqajG6i1BAejt2naFPUabPNCXvHy7TSj4LwFdTDCcBcMCCmAqDenNXDiKjmnd7rZeg5yYjQLgt2X67SWdUX9XoP",
  "key21": "5S5tsoKvZa3jf9mFN9YqfWUfFBt93vWvwdz3dbRa2x8x2RNeKXWxqteg2HYLDZUNhyVnQYk7ojHYb7biXRJHbHJs",
  "key22": "NjkZj3ULmU4bFs4VL9a6vNK3hiZr29hugXFroUaByhKhyCgpeTYagnim3h82Tv2XR61qsCyjTYvSxfYiyVPxXz4",
  "key23": "4kMAiQbKfNXyZUaxepfhfcwCmvHz7DGrvkNQvvj1faKrDvuNEavQBsK7eNHUQ2ENM6aEhpsPASkAWSjsaBioXvzN",
  "key24": "2HeAZ3mDNvWUn6Wd7UV9VY5b3mXtriQZ3LNuKwVjeqzG51jwjWRHARLphxN8YNpuLumxqnLQn9LHY8aHZSiWfUVp",
  "key25": "2KvgAcygtFCkJjk46UpzGhWtApcxXu4M9PAp6b4VMfeZ5WqhcRgw7JARAmmNDdy638XHw3dJ4LkCy5kSmd27oeHJ",
  "key26": "c1FjDoS8SULErTmuzkRTWVXTSpvaEouEBww3cEbiohv6YgQwxqb7H8LTc788ZFaicMcXn5Z38rq8jhit4dGJhRT",
  "key27": "5hrmixYu8J1rPGKb1yKbuw6sbmAd3mb8wJLYL79n34SKkXRy9xfX3jB7KP2MXxGTNy8doaHLKCvHj2HwwW4CMGcG",
  "key28": "5fCTh96qeYTkyaueFfL4cfeWDYGbEKUVWkKihrXSTRiao2PMpWDRvTm3X3PbqKzNrUF6FwqxymB6PHvzi3M1gDA1"
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
