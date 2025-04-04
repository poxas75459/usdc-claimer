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
    "59G3TubccA8AXoYBcho7LooNvNVihmaZES6KKEeQR8eJNpdSxP4TQBNJpodSvwu9ZeCjpVmXjJoXRepfxhHw56Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATat7KJ89VPTCGWjMRxUMpjXu6SbVY2Skt5n4JjrC6p1oYeosPXGmUDFRoth1QuvNCFPf2UVZvJv252hFFWMbXz",
  "key1": "49P4yAJyzcA6pbj1AdjZMHdwKDW34FPqL1Q7Up7JeQf4mvSYoRNyfa6bJV2ncvEKX9Qr4tZ5BgpW3RkCgnWsdABH",
  "key2": "51wpc9R6sFqfELxmtFkaRKzQiHPM2crPTso9Y3sVg7nTgmRma88V5vNAJvkvg9sDBDWQ3MSczRt3Uu2ffdoNhMXg",
  "key3": "kDT5VKviuhLU7mmqzdrYXVdLVovQK4LniLhcrrJLNGRXo6NphLynfXSB54wicNxeaSsB6p3Lrh28VWESKaB4Wek",
  "key4": "2swVAqqC9Aa2YhT5Jwyaizr9KmBFQ17dDDcsRTCumzR2K3iGjGZR1LVg29m7HyhtTFzkALnz7hLoLGzeskiYR5sz",
  "key5": "1ugbpUPqK2aLVVeNRj8SGfmka55ghkPWnJUPX6ZXhR3U7LZyPvYPaWS4fgJWraPYbRQCdgj2b2LPLpXjaRLZM2B",
  "key6": "4ZYryNzrHBy8Vr2kfSn9L7QUx9ZYpL6SXcGiKMLF2afQSzmEtaoequ1yaVd7DebmJkKus33efE2PQd58v7txyJap",
  "key7": "5JYDjfgoT85Scv6NVX98EGCLn85NkuF4Tk5Ezc7zSd3DNtdkxKyxzPXmWHP8KEaA84j8JK7JTm5CGWYBdTWsoS5U",
  "key8": "3WEYyc9sUzQn1svPGFgt3ZnGFa1e9hpS7iu6TBk9XP5knH6eyJCqnPrfdyNns3HRmUxjsX4vFfz55hpAEBjrLA2w",
  "key9": "2gYerB1aeMSiHyBmnFmfgkJGqUopN3woncEn23sfVRS26WhhHzBt1hsSJyM47S52f1bXbj6cqfJMhsE5qat7fnJ3",
  "key10": "5dk1GENkywHEVHo8k1RK55NvjDzoR6gwxYccSsgDvZ9kqSfL7y4TWVzDdphEFmd9U9j1ktpEPPPfuHAPpJqzBFmd",
  "key11": "pMZ5vd4VYYgRuFSEnP6KinbU9FnaQL8D1B2AygBE7cKDbyWy2CX2ebzJQ3jp8bcp39BaZgaeTNpuzSJFnAiPpPd",
  "key12": "3Cui1Bp1fHuoDpiuoFiYP8rwtVBBsPbjTwGxXQomUBFTzfohKViw5U8mbWzbJFRfRbwiM6t889RvkPt2DEEEmoF",
  "key13": "CYSmUKRuE3unVWPkEJEbwFdArWJ3QXVm1dXJfueBNTG4VpsGZsEHmNCJDDJGbB1h7BnccCFVtm5zv3PnKjZUFj2",
  "key14": "4JxTCNkgeHjRwDaG2gDM7Pmb2py1WJCgvWebrPcsg8WYMM16DhTiuruCr8j9mYwvNdCsvP8dK8xqBfE6fHRCjocg",
  "key15": "4Dcdkzfxs9KTawSirD8VJTycyCjXuJAncTabw8V7LqF6sP5tJKWzgTfNvT9GfY9J2jX15siDX2SLh3QJH1fhUcky",
  "key16": "L6hFrZjAad32sQUe6BuX6k8A9L96jR8dh7a5ymwfexHXVfXZAr46ZDoHVdY9vhcDb6f1tUMDMMk4Samh6AqWbhr",
  "key17": "3zBt7Qr8jWK7qLzbqihyNrHUqW2yjCKQWci9S1C46A665cgdWFQuzTRSQiTT9PaN8EyVwTHSPbS8iuYbjdmfzBuy",
  "key18": "2wqPhbFXhq7SNR23fueFMGdGiMs3LG7tX66QC9bgztwCjSZM1wvrDmovrNYrKMtbE5yU5Mh4BUBX5bd8mB6LMm5P",
  "key19": "5ht2q6ALGu1WoJFruembHHwa3DGDBGtoGKUyAPZwbdTKTXv86J6dTSYJ5VpBoN3QjAbENVoNsV5EbWz19eibbWNe",
  "key20": "5G259hUaYDtY2gSYGvLkSu6WmasSScJQwgYp4JDt9XGyBhuSu4FtmX7asBeyk5DiyrtYSjb1xRn4uf4cS5M8ngcE",
  "key21": "4YX28bJYq6RvwLyoPCPEa3WCmdo7SHEfUEpYVnkeGT3Dc4QjVTUk78yEaoVog4Pa43Vq5R7oyuG4vVfwxNGP7E2V",
  "key22": "mCSNyshAfHiHw7E9zSZrViN346jS2dX8EuJBwCVaR9C97sLsRsot6hLxqjQMALioLLGccjYbyZEqTDLxPXZPe1b",
  "key23": "563dr2BVM5mcNT4vnoHyULuRpEwBkg59DZsRELeJbeTXVcLaKNnQ2ZvnkM9EnCDhLbKKYEjGW4JQC5wX4FLADptz",
  "key24": "5ZaRkn8FUPVAZgMcSSPgXUuWPR6u1fEAhVsYBfGXjNwhNq9dzsWgcKTLcWvbrjUNvYtHBYQgnmxRo6FgTUFqkzwH",
  "key25": "2ZXErHXCC5PVhjcoqSb9PPrM7fkvQVgMqxg1LHJJQg9s7KVJhcfFgrLVYpt1gCdWs5cq54WAwN38FeXLyVKCQdUH",
  "key26": "3sLoFnSN6t5LPmTWJQWBwpWL3qio9VuBnajhWpfhHdtjg3UFqbCtr6bWnAzA39qFw2xqc1QaX7dfto56XbyV6BMx",
  "key27": "4gX6YN2rXQprj5rc4DXGL7wCesqKgXCUrksA2zCK668bBjxhMHxprX4AzGsu1KJRU9vSN4r3w5Pz56UxtyL3YWeC",
  "key28": "UDbVhw9PktQPqFf47vBu44ZwaC8dkqTNdqWgHc4nrdPC2tNrFXWhBPMyHNCBQ3sW58ZLn9hZoG1BtMrCuR52ZhG",
  "key29": "2NGig16MDgEJb5gju1aiyTQQqGiDnyhVSez5AarNthwSzeftYsSJkAu2vxZd6TpwCMEvNEP2jL8FMxwCr2iqZykW",
  "key30": "sP1nawST857J5cBgwiPkwMkjx2baLaSn8kjuY22x2c8ybq4zV8imPkJMFbZvRPedpnusuTJpiX91FCubHaA5s5K",
  "key31": "4U5HErV4NDKPA8NxzNauJXkqzKF6dcrqC8wT8bFz5SLyfeW4sBqHMyhVJTEj4g4jK1mr98Bc94EiRW1ZESEfrS6U",
  "key32": "4WS38b3dEHTp5N1dHzU3fbaCEUCrDbAqJKfUrXThmgmhwjXVAABHWn52Z7AhvCnnr9WZ61wKTi3vxodJUon3Hpxh",
  "key33": "YhEpiz5mv311JyeqgEfHzTnkegQ8a6aYcR2U3iaiVKpvj1qHdmK7ZzpRjttq9U3U5yTvctYUFHi33vd6WrXUjpQ",
  "key34": "2UdZS9BB7Zz9d1HaZXUycJB6Wn2PeE9MrAWjagcCXo3byiE4fCMmSHMCnQiAvL48uV1tuRyExquoUPdGENPyzDfb",
  "key35": "YWjbcL3cFFuFc5N2UryzTG58EZfA1GpNNFWGCthZpkmSNtFjorsPGYpn5cvk59xEdJeCYEi97MJEt3PuafrkybX",
  "key36": "4zwkB873PcZUvogKowagza4JQayXYHV91VxB2knwbH9X28aqyXQpPrV5aYhSCWaewJJ3NCCaxSLisinfQkL82UCX",
  "key37": "2fUcqSvPaUggj3fQ7GEgiKokNTJpnXm8B1DUY3ykQpNJdXwVg7eGWqLh73zUrGUyoCgs9mtWiRn7yCjCUVLTqX4v",
  "key38": "25DfXukSRWtsnFdCV5v5tzpg2jmNUgBc4Adc57an2GSW9epQKs9JEBQmSv1TkGeZyqhdtfWy8bhaYeK2MJu8hwK5"
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
