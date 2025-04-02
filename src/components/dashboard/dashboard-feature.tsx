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
    "5qbpLGkLPtxw9Pa7afwHKyL2damB6ADcjDB7nc4pkM2JhSZvrjn1eiZQ67EVkMbg9RcT4icfkRj8YqxMNkxuHmP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rG3NvaZeLxvtfQHSVJghEaCj42YUF5811yvUFWa3pNkXyyUxph6pUhJPqwhFM4vxiv2ANC9BYjQHsJojLbZCVK",
  "key1": "4cgEqGEmTgHqJB1AhioPZ2netTa6mSp9FCPb7vJcbDiGCnRYwYWTQDSoUiokYHZZ8oKnmwWK5TPYdvm93K8WcT8n",
  "key2": "2fMRpjcbHAfy8z49uAo46JacHkJEkjD2YqvriUpCckb5BMKqzayFnK6XTJ94dj4EF2BYFeTBXRv1wtNRmFnqv3XQ",
  "key3": "3TxjqZwd8iukYeiycWYk5YuvQPSPVtDRyJ4dySs2G5XjSv6Y26C5cKwNMXdpDavsiF4yXH7gbtBjCGikDye7iLa8",
  "key4": "3i9D3PePgZhxLiZxPbxnwEXvtQim2jiS3CqZVE2582yW1brLy3j78fw1ZB8Wx49TiUo5B4kFx38GRCuaMQ57x4k5",
  "key5": "4Nd2EU294aKxKMsPkSpcLPckH5XhM9GY44Scy2LEYurLdHLYZ4UbvR9NQ4xyHUSMAGMfEg2ZgpfGBBksowbxNyEd",
  "key6": "2YPqF3qEstBhzRZYzjVPSMw4NwPbWLJScVjh1zDatTtWxvePvoTmMrwY32anU8WNG3qKzCizmRZHchZd7xWNiCU",
  "key7": "4cjFLF7Nbqh1GSLhE7ZFMyrgBCStTazdX8fZ9MxcH7uTkkQt2TRAhM8EL8xgNNGJmkRRADDUmtVe53GXoPbDmsHG",
  "key8": "44hbuMTKz2ruvadSjo56BBETxV1a6MzoCWzwTaFTdY8ZzZiRn5gSsQ3sexuCYS7LjU2Q9JVpSQ6mfVapCH45an1g",
  "key9": "5ZFYt7G6zErc2mWYP3f8gGAoi8cMK3c5PUXRtp1XbzwaLu1Cj8xeVDKhAsak7Rm3mBEk1HrBevtSBJNND1PaEnw",
  "key10": "2CqxUxhj6bBhbm5Yeae33ZRsNhfQJDyFcugtxsXSZ1CcnFxq5HLYo55yAsTway57qiKcYSyYvZaDWuns745N4sQB",
  "key11": "2SCuigrfGvwUGWKFNkRyf4pnDCpp7ausDxK9MRb9aFugSCN89DMzWBVeuXXcyvz3CVfGn519P7pEEGeZ8Xr96ZRx",
  "key12": "2E8Y7oSWmHZBvyxzzQMCZ7fmnPSdJVZQyLgCufW83Hckk3nWAjqguX1USEXTR4aYnXmcstdWT6azmvZoYbnXWLHp",
  "key13": "2Dbtfnn7CPGQEVrWL2qZT6NfgMBWj8Vndsn2NmEyMi24CVwvVTDPrDygt2wZpLTDEMRdsh2TcYZv2SPusY6QYvM",
  "key14": "mj4AFdXKmdvxfvQtXxcXJ4jrfmUMSKRj5h1VvtJ27zc25QrNYyWqQUYVtAZ5xEHHYmjAB4mKyxiAiYzoUoNu6BJ",
  "key15": "d4ywXnGVAPnJ2vvGjRQBLKPcJwVYLRUCWn65Su87rny5GXNi3rCAVHEgubfGWFAvLWeAqvfDjLpqdevAPHCAkAt",
  "key16": "4JchrVqRMZY9suLbtAcXEj8H3fVzPsAHsEmmFwRHRzSu7C3WkL3pjeLCLsuoivV9kMrccFe5ZrcPmuMgnek9eUvq",
  "key17": "5BAwS22nvk24NfSpkYuDnA4vvF3yGj82AdgvLsr69fk6QXhfH8PbJsMnYd71DgoE3TuTPzi3D8VseS2qUg5hwMzb",
  "key18": "21pBHiLL1eHkTA7rkFVY3pxZJceWwgVtMwQSLiKdwAsFQuZLGsuJHFXS2WWiKNfhCjeU9mew4VnaFoEP78ibvuqs",
  "key19": "42bxgTVfaiJsbkYQopiofuanVd97uET7JxhY9KfCsnhbmQwwfYKLFVzU6srrJ1zpchoBeEQM5mVSFFj8ic2G1fhK",
  "key20": "25XdkjocXrhx9U6ZfuJXGFBDdn7ddoNoRVkhjGuEdLQcAZnK46M5KYGXTKKegPcg53BuR3r1cARoNhTa4Mfa4kbx",
  "key21": "3jGsgQHZMdyqJKriWUKktjuL1yTD3d1DaBsce41uYdXMqxK9czFx7xGrSmpkp1VcEdpFhaWXvfMXUJE7MCSxm6kA",
  "key22": "2bSARV6Af5xyJftksNsrqRPpQHjGSLaYdaj1mreWUGT1uJZjSbqEZa88EempJkjKNgtHC78aWKxzbPAikmnXUNVo",
  "key23": "zHEGag3SAgksH2Tro8upTf9oTWgUVMP69cTKp9oEbu9Y1C7L5wgdeLuJn4CS31ioDRNrfWUmauzmEBLx7LUrtar",
  "key24": "5i8Appv3XSm9pDmF4sbRh3YAPmVeL2YcMHZQ99UEbrfoPUPC4CGrk6hidsF9XFE6v5vxhfrPr5XkX2Uwb4QZ5NPx"
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
