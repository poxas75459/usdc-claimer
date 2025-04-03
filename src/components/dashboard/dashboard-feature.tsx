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
    "4aBcxVkp4FuZZfemt4VzTx5ZXVuwnGHo6ncYjYPpsDELyos9G5ZZ9eCxieVo4Lqho7EP5ymZMjkkf1aP3i28Tauo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XW3hYxmMkQLBczrvqsZo5cfTWzZG3dothiq1DmjQtcfJGRTAK1wUoEeMGEBc9EGuTr22iVLDGK6m2zbvcunrtwc",
  "key1": "DTsaSiMVCp7PUFWcU1WpNCfLjrpFRhn26Pq1AbevKBo97pr6ED3U5NorZhDZogV81rSZ17Ce7rvT8tWEpwsheAZ",
  "key2": "3AXXJ8T1Mg4Kw1goX3TJX7mkBwcmSowyzYhRcKZN86NFkHpcMQdy4FcBswzT1fm49YccHtuRaRW4t3EjAaPeBEg6",
  "key3": "45GJe5iRe4keMxXc47BNwVgQyXW9F9srUSC3dZRKp7T3t7vnHCVZiEEPBLmRg9i2BvSYWDAqycFUQ2GpRntjnWcA",
  "key4": "2f2zkD1UQmtw911ZC2CzHbJPM5RcDLq7PSo6iGrnNbvmQjSrAP1rvtwGbx1CCa2Z5oTTqe4bopC2fgAXveB33cTb",
  "key5": "3GMFgnZaBeQGsjvLtWWf2behCiQ3wFGzH4h41HeC9Gb89HhMuG7SF9kjRAMLqKRmVJSAyYycGA5Ca9A9benQpeG6",
  "key6": "54MDv4kf9BsADxYCtQmPmFGWTXMoK8TKUztqFQ6CRh1FzkExj8CYwCbuTS213uWG5bFN5mzP1ZxygfJU3MHxDzRm",
  "key7": "57EGcZ8QZmrRxBcf3DQut3pLZAwDmbAHha6vNXqadUFUMmZA4UzANxb865FBDPGx4A52HMtokXcVP4A2QmDtWWan",
  "key8": "3BcaxbJzYymajMLNhjdcXTY9TEc7bmxzLFgjM5ZYE7PfwDvCZcHm7DQ9X4JaiWrvnSictApjsEbUobyuTVfUQ5As",
  "key9": "5wZJgEMzjmgGGzmNc2D3Dj4boX9srKMUycZwFMBxMvguueQGgEugEqoLLbfJCkfHm9mjnpPCCyuWW7A3Ncmae44Y",
  "key10": "2f4q5oSuJ4e9eZM1QHMqv4wZWkSWBbMKvDwKPhwRVn6FnhMxJfWohMfFtFdRscUXmE6kAzV8YjDgDw5Hg6SP2ocd",
  "key11": "5kHWwFMNwxrppU3CwU5RoJDiKpYeZnKHmCcnmxWZDjeGNiUAZdfLEvsAe2PNNv3oZF9T5GJMaHKpRLn2NH3hyiU4",
  "key12": "4THcZovecNiAhWYP39LF1pvW5M1nbAzNbNK2agvpCSWX5aFu9BfM1pbUX9DZJ1hGWPGbZP9WKMddfCGaw1pTWvx2",
  "key13": "3JgZxGgRnG4P95Lm8rJBJ14D2BMFJbt8NmTCQ2e6CbZN2Hdi2HnSWtdja2HRzzug61RvrkEuQheYTRQmy2zBseGd",
  "key14": "4XTv7jECFrKbf92mjdcgaYdCtW5EzDLLutqrc3LUCzJXkXdWbafAfULiywiNACU4uYZWVqKNwSU1enVTpm5eLxs",
  "key15": "5StuN2c1v9DwXMFqY2c4swBnGEX9r9doqnSHNAxr1NQosn382Mrh9QXhWAj2VjY1fV2cmFxMvgtY8w1JedjhEYE2",
  "key16": "2RCaJC4xumePMAmUkz391aag7HDJjYkLbL7xc8Xnwd7psrvpkF9UaPsdta2ieyc7m4X9aSXSVhqyc79GH4xwzFE4",
  "key17": "2i7wCxBcRESv3J5LzmNikgsydSdYQ6kh7qwkRTrnwB3JiQ7pvbDg7D3J7QP1xWMy42zGMu8YG3mSCsNApipMe85d",
  "key18": "rVFneZS5Firz4ietkV8reSurKRG8snkuxJ5XcgGpMeyJphdYu7tfmNMPVLzBDmu9tNdVE2u7GzQnoKmwBoQW7Ms",
  "key19": "4BuJzbN3CjAXd7V5114rT7N5cEgtMbbeB6gZvqLtiY7wC7ePnXLkzazgx8TEemsNuXC5rXATRMMoU21wfENUX6je",
  "key20": "2NvtbqSDacVq1Wr8eqKxBVaZWNAd42wHzpbMpKfbBhQbqTcCoHR53mKJwpYg9uKDHPgz2Snkb63kkHZwt8h3KuBm",
  "key21": "5dE7kGRAVVA9g3sJ47Z9ejVhXgoozU4QR8P5f6uDJFSMu3WS7wH7BKTDVfnFc9UJ4k7MB6iYdWZZDo9rypxRfCB5",
  "key22": "4H8gLrZrokEsbDi1zc6cbzSxBSGPoVc5xG6vdzCxtcqnF5awEYaaMAjECgomDrHTSsc3Ckqm1ojDRgyP6HwnsbgP",
  "key23": "3wKPevDhKiJVZXzNKYCmzsr5CSMrfVRwPyzeR5Vm6maXhgDnxAKEVzktqWT3xzviAYtFBeyN8H1Ao2d8hMCHB9aU",
  "key24": "4BeC14dresX8xw4uy32vgjCqLGhMCc9pyGrWecfod2bti9m7iqDmDKTJzNFd6PnTZpX11sTkruDWk7YqCESXh8Gt"
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
