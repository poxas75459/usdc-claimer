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
    "27fFP5j7R1k3W9iied2PMms1QUDVmmNWpTtG1vE4u83DsQgJxhb9HrC8Kv8TnFDLxxZoTKFV3CfNvDMZ4T2ro1fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7ynYwKKR9AVDGRaKiX1JWPkRdUJvAUwHvCFXJw5M4Gwifcros8xrurTb5Z6khzrS1NmV6vzvxaAZjaP4NkVCFG",
  "key1": "2DzioF6VYbCMNb6n7dyQ1tmUTRX6DSREhoRG8eJoCWMB5BjRnk9JXtP7Ztx5pJFg4eQJV2WxVN2ezEQw76g9m6LN",
  "key2": "qWtbhRPChjN5Yy6KwAUbAP9Ti4HKwMH3NQNXRUPeNyHo2MYw5k5CfhekEjBtVigv5iCYCZBUwRT6gDn6RNVCojw",
  "key3": "5HDoN7KPCwLzS3ZGxUg9DWzoH7xDNQ3iFdLv78d1z6TMBsXoG5PCKtU4A7Bb9Ct1f25ogTtX1Ay3TrfV56sNVMX7",
  "key4": "3bmXDZUCdSniuzfx58Q2jm88MiMSMKeeoeWS3XnfUStY4uvd9BGLtDkuJzGAnk9UPfX1EjyGcpHtudSxDPqxhWFV",
  "key5": "56Cky8SmbA4QPMMwAQrxWEPzzUFyEeYEVYMM61ahKfKJcGCzA3UMkFEjy2ZafKrdMhkEmF3t4x7qG4We9EzDDTek",
  "key6": "h44wDG9hiuAyQyAEchdeQC8XAnxfAR2DCYqM8NnhVhdCBFSa7xLGfLpnRKP9LZNKnik7mmn4BGtfp3mSjT2LQo3",
  "key7": "5MmQQth9r8mB9naheYSpDtaCrshDmfc7R64T8LgWsitScXKoL2YswN262MNZ5cxqiqBVEvu6B4htnAkGdBUB5jGm",
  "key8": "oq5JoS7cGCKjhH5FGpBgDcjTng5ku7NqTjZ8fymqmaxEoc7d6Pj2c88iDVuLnKg8G4QXMwpuQct4Pb15QHnobHU",
  "key9": "3xmB8dM2pNxtZqC9tw2jCLQLDpALoLH2Uc83mBDXnzaW6qbJUzB2yrp3bLEnHvL4CWkydi2EHFFoF788HxiAaACb",
  "key10": "3vgZDUh2uyJhzYKeiHC2yh1Z7Ti3srqA6XJki5vroAMwxdFaAX9kE8UboQKBpLBLDCLvCyd1DFoDXTBxUbECDYjx",
  "key11": "2q3gtqsnu8HjKp3k27LynTgyfHoycNEU3DX1RATvbzbky4phok9FcT4yeed9F2Zbf3NK1mo8kQShfKcTa5SV1xo4",
  "key12": "4ZQMJSaM3GxiJJG67DttbujJnNKsA5XRp52uncVrqPhhSWvq6fwipaBrvuu9LKp2xvgZWUy7oJTkaqKi8SooKGBY",
  "key13": "xvM8cz3vTtLT8TmFU7AmxQRyZ9rmSGV8sEXhBvgaVry13BZTeFNdCCpECZqNTVoMm14JrhY1CeHZLF9iY3d4TRn",
  "key14": "5zRQsKHAkh1GUgFLTCvQuHrba5sdc2fve7v75TSF7UVE1hNEQoD93PMYpSXqL9zkfMV33ucUgVy1wSBEfULgJCEy",
  "key15": "55jbKmexweRNE8ozzAxcmBy3fBNusjYTAiaKYDKN8r2GbEqW5FzEyckMWMYQCtpM7GYKGqTik97VTVTaHNjFjpAN",
  "key16": "4s14saEefAdTVHf8TMa6kCQkkbVjVtyeusgKUbjsRPq2XNiwasMF3eGtYz1SDZ4zTAkbEC8L6voEt3eoA93XKqQx",
  "key17": "WZm317VBoV8pxpMYWkKXJfcpYpJVhS62cShptZfqCv3qCkWvChhJ13rNNZEhJmoHgVZCy9C3jKth2cH1HNrNkrA",
  "key18": "5o6TPSmxkuZB1dVAYxjiSgeWCT7w5mGTRPWUbEScLc4dSaqeJ5zpyQ9ftfPG5rAjuGPVE2oG88Mc54by5oNDGUGq",
  "key19": "RpY8MdJ93tXHExNASrERAza4B1DaSWEd2L7iTsm6bHDtfP16X6BeNt8LJrr8zFVjrocpBNvzLnLtKAwvEe3x16p",
  "key20": "57y3bo6tu237DDWMFJYPsNR6eHYs6t6qk3J6nnmrk4CRd1W2WK7LwBqo7oXt4nx2iDqf6zh9pZvs8yRHMSm6MSC2",
  "key21": "2EWHEdnT2qUj2HHX369U2rvrmAjCoLr4RKumH6Qhcs9yFS8vNobC17jjqr4YEoUCoXFtJw54MtKgc9XzF8EkmtuV",
  "key22": "62LAbgtVSNht8aGxrXtDnPUo1xePQWtPtRFCvYmDgS3pTUpZ7Qk8TJMizduf17zvyhx9uyFGLWFpsuUoZkaj5NHn",
  "key23": "2KsTVqTezYKwpBKvzJW7GPz7v7ahgwPVN4p7jEpwsw5BNaD87akS58ezoDA7ERCJXxCpXCWk1kCj2Qus1zAE7sQW",
  "key24": "5E59iMkCHBAkrXet8GQy6GV4aKuWiZSaQhBAr3nzZyFGXrPyshFoA3gPadm1oiLUxSwu8z3ktg7yW4g4fMSppohZ",
  "key25": "4tcqdCZHxR2bPThDEG4ajty2ure43bug2PRyDJCrtReHryi11xDfVxRU9isph8arqroZM2ptFZLhn1TWkbDfo7oR"
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
