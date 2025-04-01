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
    "2HcPLTnzdzFDRBWqAGNBT3Jf4rKqji46aibBSEceyXFfDN2FSarPcF2KartWXXsmaa6KG85WysNtMn4STeppvHcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRVbSChsNAiPGjeVZHbwLmvftQvvPdL8ByVbKM2V8eZciJhzaqUc1MErcAmt5vNvZvzWnDFYWabQhizBzGiTJ6V",
  "key1": "23SnXP4GSffTjVR16cyCSefJuCyy8vimmQ8AkX64gp7SZ2AP3ezXnc16QvSFsBkovUmWtk96z73pyFwU5MU7WkSB",
  "key2": "5Vy2FAUHqUtTk2ANz5ShntXr96YNQxAffe5ahuAU9S9JNWfuuaWBm2D8KtqEL32k4KiWSXZao5jKGqXqKcezRWbg",
  "key3": "2d8sf2B5qGZ7xXsuoGMS9DgBP4FkFZ3AV96fYXKvMZKVB5R1VhYrUonJ8Wr8HCsfkTmyYFhMQNvztueDU4Gp84bF",
  "key4": "2Q7cvcbBaNfdurXbwbzPS87Jz9UPTD2sxH8gm6DCL8ogtHMUxAY5tTKcMjeFsGGXoaci4yP2BXR1B9vfsosvvLcD",
  "key5": "2kM1VL5tuD7BWXbfvKzFukk8p5XFpjAzkAKMunYRfyu4uPATuHLYN4DXuEntciBUMokBGrgGyaEQgMmoS99Psq4d",
  "key6": "26ZBgmXyR1jJe6tbqS9tZdjGXDspZbmvDxTSiWpBXkpV964BKNB7snr3fuJw8CTNzWCVWkRXdzNPpGjUeEHw5doY",
  "key7": "2AmzsTvSEcFkToCCHdTAif1HSuDhKrqyjGFzxJD74J48u6SE2QRoJ86z1fkdcjF5V7yYdB5Dk8iUEeqyqU12QLzt",
  "key8": "5JotHoKwXqr8Mdg2hKtpviDJRFAmzkN5SS4Vm13BEP3LUCyAAq6EwcH5uGu9cUqRTZtfCLwLJoUnT6XJW22op5dP",
  "key9": "bs31TGkAwkJGh2pLWVFfLSgMrA2vGNZgUbmTDUcMzoZmzm2NL1F7259KSDsMk4Njhu3uVS3XdF2GvbmEDrtKw52",
  "key10": "3g31qHCVPH6H27t47biZJMESVUrGXmPeFuFR255GTzpZsh4RqjnzcXVJRnq5PkxahwMFYxCvVnwwPBFQr993sQaP",
  "key11": "MVLAekm4ACpF56y8Wxogi2KNDgGqTvT2eegt4WyZYcCVMBXr8YDjk6JQjEhGYeaLtXzw7es2AsNxZwNo8TuCNnu",
  "key12": "3caaw9i7rEEAQEoqGs9wsXnzzhuTXEVzCeKbngqKwBJjcfzM5ScSLjUyy7TkxfE5Li1wQRTKkcUkkwFLKZ1EDb1J",
  "key13": "3xCnYqqmKrMkyXTu3jtDY1uaCzcVVM1nFg6JtEc6TQhBQkvfS15WXZ5Bi3XQVMAP9Z9iDhqb5MrzbFLk9xDxDRp2",
  "key14": "5YpKGZ8kz9KYk3hxnRDAAYNqoNGRVbYiSRerpaHpu5NsSBkTAZySx4seViBsQt5WLoHGZfvC7Ge5k1pioqsZ5mm3",
  "key15": "5CYpVLDKhvFCkec9mqaynm7JpWETXkyieD5Kj6uFJyMwCET4vMxozGYD4KWTAS3BaxuSUcxrqmkunBzGpaY12AT",
  "key16": "44x7QkKjVEv8HTTCVBEBvqRxcMzHahv5RUtW7SAstba75LEDrmf1T9ikTvw6rBJke7Dz4eu4h1vkZzUCmRdvQvjk",
  "key17": "PSnQJWtDhqBFy8RaYu1jZJEG3yGjqcwRV2xS9sP6HRfiCXzegb7dkuiCpevtTSmG2nsr1vhfXo9Ta7aEVeBhk5V",
  "key18": "2QVvi1NXCFTiJVRd52KpTkkQBU47R7qMajQZrCfjhX5M4vUSqdMFenDzkd7DJANoJapV2KX5tozpEBgN1KtHuDwi",
  "key19": "3idPHqNTMjgWSD1LCyXzyaoRMoZSvCCUTpudzvJze3zox617wrwgUVFsoVr6k6Ff2ZgZ7cyaGWHmm6ksRyZ7ct9F",
  "key20": "2P919jqmppdtBX5oHyK8wypVbXrZ4eTkK6vVTkrwBkkrAgN6CjCpQDs8356XyKniREa1WxSj2Dgo1yXcZ7z1TkVn",
  "key21": "4jyPuhRgKNK5thPX8U9Ux56zMtJaR27vNofL8DLr9TtVLTqLQkEHNxLwrYHdVewkuPf41x91moyqE89yS7oZdG6N",
  "key22": "2SogcVuvK3TnpSHWucCy1gWSPJ7m8wnLmP6Me4Gez7MT3zSfe68YHhyRyFrMWyqH1oDUW6dXPcagD3w9TjVtF1Yo",
  "key23": "5ZDZRAjBjCWk7bER12QAQchu7eZm8yZuFyWLv1qm8mUjnkFfzAtcg1UxSxcBy6cTzicThjBNKodkP3rVJ9LA6RFV",
  "key24": "iqpgesaVLmkiWkNZ1BorLXHnCdRWA7qhjoGPfQJH1D9qkgeJixe1s8MU5gDrJXkyUCmufb5VkNzvXGW8wVCZtZk"
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
