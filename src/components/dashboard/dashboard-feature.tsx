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
    "2dMD6i1f4AtjpFTuZo1GddCgXHsuCxqdRYJXmBERu76PD9Po2uaKco7atscpChCDcHJ3eBmbtt9dBMZxMyFFCLpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ks9g9eDNbdkPpixN3BdQx3qysEaCEoojrZwU7a35XbSjwNiw9BYi9W3MRkqMdJkkDGeYeKSm75nNBYxX4aiqJne",
  "key1": "35TYLqDJQpuYWiN7GTe1Hzu8Rrs8EPizV5q8D2sD6vFKYWgqeWYpeUbJnmyybTs3hBvox9iBgW6TdtNuFWEjk8GL",
  "key2": "46jarQUzr9BwiPoHa2LsX9mdBaXvS3ydFDvci542B1pY2hUefVqpsrnHsaPMpvGx1sho5mF6MtZv19by8FwRqozA",
  "key3": "8WC2HiUyGzGCsC2HHkZyHMfD5VWooVCLCUzxzF7wZTvLzYhz6aWTP6BWu8KXgsSG9UaZEgq2Xjs9ucuqMEUfhju",
  "key4": "3U7kvcESGNyixFdwGTiyMkdWXHd1miVarCzHThrJ52E86jNV21VnZ1FdGiHnRpjGr8XnXpyY61LZeagV2PNGRBg",
  "key5": "K5L2sM61mZcKr3sLrsW5KDzHLU19mHxL11zHZJvYczm7TCH3Jh4keis264rvt1RNVqnrXWCDwqrY2U3bzzpse6w",
  "key6": "SPgha2NdteAcY7q64abv64GsEAibbdZmTE6Cyqn1bctucCGQeEKb1cHpnT9EPsgXJ8LJpXSktJmekCkSmrfj3VP",
  "key7": "4SY6qVdVZmmW27KDyKZ3Y5afYNDTTktoEeWcHtNoQyY78BVVSKsVcmX2a3YGRGBY1L1H1Q8MbL3wuTdG7zeRz2kH",
  "key8": "5CumkEgXJXwvebeJG84ALi7v1RB5PeD4JDXSXR2PUgk7YYpMkwkYxBPmRM9f5tY7iG8xZtdHgRweomc5TcgafzuB",
  "key9": "2PdwLX7SnBWkiYp85UUwTbRF8dqHJSwwuHAhvUAgVNtF9NEYffTZAzdNEpvpEzjnBKiiYEjJbFVgwyLMzGdrczYW",
  "key10": "Uv98QmvuoaNVmN2xBobx3hg1N5A27uc9kMmGeFPJCScZ9xfuWKi3A6oX3ELFdBg7WrisLs6yQNwyM6BRppY3CQ6",
  "key11": "3cMjPjvRWM4xpTNXRYEtTFPE8rqwZbixmbCbXqzySQctDo41u9NbCfJk9LyYbYSkrazd61Fu62rJnoftuTmf8hp2",
  "key12": "2jVAXuuSvaFi6VTH5FpvsjfihmwrGapMscTXksA4pfPvgLwnpfSW2qiYfXiKkovrtX6HHe8R55UpL3ZVN3xXzeBq",
  "key13": "3xFkYCnxELtRnys1F35zr38y8SXba9m86BC1H3Btu791wrtt9xorSFvLf2wevNMZDQKCEDjGshBK66T5EB2T5mMW",
  "key14": "5WQzkQJtuhsce8quaBySiwXyqR7Jou84oZ3qezBzGrLdrccfSKDACQyFogjkXrU2EjS7vpEo9VHNjXnmVkp1NoMN",
  "key15": "5WemYpce7JaHm5RFiw987yRPW5PNxcrW1eg7qjnK1Jdpb6Y4uEGrBhDCG9PFC19KXcHAnvPtcqqjuRaQPc9NbC1i",
  "key16": "5J5DjmQ5kMGpPfe4FhmgX5bQhrqBu3KnkXgzt4S79zvyYjExLhLBk4qhjuLVMHcbLijyMeLPGJS78V7DcbGAZkqV",
  "key17": "283W5vEGkQ1REnw87wHZNj5SWZj1Jp5myyUt6LGu9sfHq4E7HPrCXgdjpJH6YvwEPzo87dnzAjvnWY1Cvo2eAQTc",
  "key18": "2xoVHx9sujdbPeFiBpJDgHLEXP8pbDhbVbGqJN7atrzeY5Eekuvm18RjzDpqM3xx4iGQZeeAG2GxCNZXX7n5ZwEh",
  "key19": "kHSLophYdVAav9muJSxjk2qQne3NnhV48kx412DtHVrLfKxGMx3LveN5E1AVdbu6bT9RtBCDQACkhqmzKE3qeCL",
  "key20": "3WQ3EqaJA4AfPatRtizgSL8xqHUZmmH8nkbJRk44LB1z99F3gwoiD2y5YHs7v2DsLhtVjZzza3kc9pCx6c6MwGCU",
  "key21": "u42LqyzBrACr1JZrVTwceXwotjA8jbRMxx6eDUviAmnMDZyfsortWzA4EsEQ3dJrkhTaRaybRfkAmMhuzeSWC1S",
  "key22": "3v6DGLoPefRQ7wLTnYDX8wapyhX1FzHiYSUhKGVeoF7j3tQ3v2bLPDKqL8PFVMTJ13XQTC3ik5exvwY6zFdfXKFJ",
  "key23": "qytvX77MbteDHNJoWARCb5YWv8cYrTkAWqCFvB1iCy5xVe1ckNFbJkWdT38CdaDACop8dJD3tnWAvx1ehEQumaz",
  "key24": "2mV6rk2mjdhdST1oaw6oFnxCAiiQ1pdLmapCKN5pmGJ3wnrXYztu9m1T6x3gQ7AvBo41xypDMazxL9QA2cC8knuY",
  "key25": "2jnX4SyasDTwDEZEVsYsKCRrnUor4sJZ9W5UTS5SwXU7bsuYeguUKx6vM6nhXZdVR5xmeQNi8vxyByqGuWkxQTRn",
  "key26": "f3AaLMWZqYqEzRdZaysDvZ48pexosn8k9hs75xQf4cCXtJJPHjBHqgkAMrEUoPf4RhpMuJwmNdT9cyqZgLomWjf",
  "key27": "5Hbwtmax2CcuqzqWtafxjrfycqvXk3k52kvMPLgmYnb4nZ7eyanWS6ywfdwwm6DfeH2N5njgAtHz9bQR5PTcBh1M"
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
