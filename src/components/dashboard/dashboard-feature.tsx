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
    "5cLnjkefYKRWx5YySyqT9amuWe5nm34KsarffuYamq15Cb7rbKHd3adAT5fnxKBkNbUsKeAUNHNwVNTFc1fdk9x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wiWp9ihxK6uFkt573bUKTSTKP6VEXZCugq413BwBNUKkg79jCei66fdBur6FGXVHsdHxLAqqxGN1rgAyEisxUUb",
  "key1": "5r5THJAe5CYDVoQYKZBBPFbBWp251KcGvfGRee7UdXmT2zchqq8WJKfD5T8dJhazgqawfLQuJ3b8KSH4ufcmnQ6L",
  "key2": "5sHwHUubzxyaWKi2KwuHfgwwmJPEctChqHUEMf5wosBWgbRK6oBJdzWef2FjiyfSjXXYfA1RU5R5jj5k147AkzWd",
  "key3": "5LaLiAQoSQMwaoQQoxQESgJC4rgFMcVULJFEBx4R4TXXTfad25LKz8Cb77h2cNWuAYMDL4qsvoNj8L1fFt1crj3M",
  "key4": "5WxkUVUTCxUfodwxMSH73VAdQYG6ZBD4qpykBZnqDgZWsZgyDQRmz5VzgBNaZcEWgs6avg8SjARSGMMafLyoL65o",
  "key5": "4w7kj1WQQQBx5Qj7MpoQcpCGB3ZvQ4vdEc1NsqmSxczffJfCkwHmQ3KsmqpDiPZg4qGv2tL77RVwPGiFpNvrfmPR",
  "key6": "38mpB3uJFVycXh7VXf75VSq3iNDMZcKB8dNWVtQhWurYqJ6zKyQQcLbPKDW1oUDp6jnsbvJBfK1nxKfVjs2mZQnJ",
  "key7": "4uNLfccKZ4XmY9r5CZTSSgHm29H9WHDmWcZ2ofQPMcWe3a3tQbtiwgRPtH1UAAf6LtSDhdSd1XG3ERbnzVD2xGks",
  "key8": "4n8WHoNMToTvoW5Gin7YhqT3ZJhNtVmu1C9as9qCjvd8z8NBbxWV3vAMmiSoqtwFLh6BR2WBgsZ8RFymy1pdVQTM",
  "key9": "2NEJr4xvCU8QLLEReNcthgXt4i8rMkeZncESBh1n4umnydd9nKwfGp2H7kXDHcXyfSmCRX5HZ4MKFHLav5xd3KJF",
  "key10": "3wi5FHU7TGsqHR8EpcUqphSZFSqYsYxaEe6kFReZJXphK5hrutwK6GD9FQELEz7sEAMJQ5and5A9mHajmTi6DKSd",
  "key11": "2hWj9EVzuLwXY2di5UwqkDDt6E9sYFc7wLfPDCb2RwJcwdgBS685XbCPgZv9w7Gf9t5EcS9WSPP1WjCXHeJNNaYa",
  "key12": "5qHq8Tc29QmCXytwWNPPnsiS1mWWLJG9qCpcpogsARjwBK3p3aX5QSYSKus4guubBLEfb7FySLgNHDYyV5Mjr9SB",
  "key13": "n5oQLhn7X812NCbRsVFa1VVSdwSwNE8Ad6dLGKisP8UVqDFYnoSvpysNS734tbJS5zSBUdwxiKkd74ALMSj53aS",
  "key14": "5coTjDPrXxvDsdz1BLbbK23ZRx1AN4Hqo9LaC9CJNGHjmKfg47kpuyMjgPx8F7fTAVikSdHoYANDg9DD4WhdDRJv",
  "key15": "5RiLtJc7LxLd1qy8NzQy81emZgZ8fafmCYKYUeg2QthzRm2ZaPszAQwkNkXeM3FauRraPvr1CysLa6PSXexi4uuU",
  "key16": "3M77FbAHeMCU6p7WesskznvPJ5VhQQjnyboEwm1MDW5NrZyG6gBY4UaaUcDiXnVScswFdkjVrLDdNYryePwtHVbJ",
  "key17": "FcKYzmx5sXekfCdCxPRfWHd3hp2oEvHXXtVcJpUoczQUkeCxFA23eB2VW6yAxqmrdhUQcUbfaZphguQ8yWuVpFA",
  "key18": "4hLbEjCbrPrVBUGJYNokMVy6Kh6XhehZCxhLC6mhNyhGBJn1qFRk882xyZVjKLtNDtyozZCnWDbC5ZWVJQE8EFxc",
  "key19": "3Q2y5qrNu4Gd26Yqcq8YhocB3x4QDjbfLmJ3XfHNTrVHk8BForGnQDy3GpcUTNV43QgTCCfPRyMCzBcXdWoUzU7n",
  "key20": "2gssdepDVQ2cGFg5ARWEN5hdimBj4L4G3uiDWmtN1Yg9JQBJmtXgfwbVvSpHw1RzP6ygNZwhLoGxWhLxk6ENoDAn",
  "key21": "3VJwdCf9wgKnGaW9c5B6Q4GfTMyhrq1o1cnVhJJ86CA1SFibCtKoxF9gE4jBUcC4XhHjDmAxYY2MQjja47vE7Ztm",
  "key22": "jKDFShLQv6sHWVqrVvV61E7kNoa2zt5ebAPR4dDUSWxe1SAWNVhEoyiFYVZkAhrYU3biUh2YmdUdWUX5rYa5ejA",
  "key23": "5d1vzWjqRtVX1uZNbXpZ7VioqiqGnByhEvbKoDo7apXwvwNAi9cnxRjrcn846MZr2DKxRivgHXTt7Hf6BZ4YPtjK",
  "key24": "52iEgK5tmB2Hyuq33hT19j1WYd4D2T9EozxNKXoeCvPAJmKLk3SoNH16BPiPpf5AH83X6CbQE9KU8M2Fppdbj8JC",
  "key25": "3fn5ZFMyNStEBhYdfAN4GStyo7tmXPLSbeBL5UHDLYRmRceNNXRYxmUWoyvaHwiyZxxy8MR6924t4dGh5JtXR35U",
  "key26": "3Kdwc6B9muMWuqF8KzFhSCSNZvdxuxbeFrxEKoF3v4HyD9ngJK5ymwu9mqjhmV36CbwvFUCb6ecXmrNRKgWH2BjW",
  "key27": "2n2ZFW6JNk1qMYT29BTFFN7tKnAwXgaQSLdY7appwwDsoNKm556Ge9zGcrhW9F2cisNEpdY4c9cBi64DQBkTt4fa",
  "key28": "3ZXWoons6zxhok553a89BLEUu3AqcLrTanaN2WnrPysReT9mVCmzHeJ6dZb8Q55F7MBp1PXwpkCrdU65FPxL1AWF",
  "key29": "4AHdHg6YVPXcjSHMYmq7gbi1mdCZokfKvvvMVYLKBRwJDa1uvbsSKDnnAny9yS12ntAhZhyLEFoxSqH9shLvQWjq",
  "key30": "2xyrqDrDy7pvxbpq2pP3iPeujkV1qFrTDisJroZJk7wCa2v329EyCeFoWE1MGdCgDP5DkPDmwWqrHwxgHxJWMcKG",
  "key31": "4XLL4xcEuviwRRcsv9cRgwj6MAUWGCq48o2cdJcnYBmQHmPH3xqS8zCmpTzDwbKG92mJBRyAjDVyMQdzepWygwVt",
  "key32": "QRnRaAbKW1uNdhqrKnfNKmCLWgb6pPCAUpBhNWfcVStJKfWzwpnCQxS8fa4SLn16RzZvp1WPCxbhewZNNweRNon",
  "key33": "3B6W3USGvck8vBShU3kfYnXqpf2iisxKo2J7ZTX9fy5peSdMdW1j55eqSvqLxkyLUNu8xXzPw1DAErYqgb2T4MuB",
  "key34": "LkrWJWK4j5kxaR1oANvikXuQQb816mwagVzZjN59iyCfkSoRd8gE9E4JhXShGxSZ8hqDs5gfNm1VHuipPNA1ni3",
  "key35": "2CcqkS5EfUHokEwedxcB3iHCvViMt5yoV2LToMJYNgB5VXNFPTzAr4GJKvVEYmcAK3iic5AiPWfHH415bxt1u4he",
  "key36": "5BJ2VCafmAfuZwksGP3F71Pk7LV5WZ3WScdA8m4RNGU34QcJCH3EvCdtJnvJ6m7e6QUYcxEaNTwv668H26qBZqeJ",
  "key37": "2ffBvFZFtjXZdoN6H4XuywNzokwC4eUETWHhtfiJpr9XpVGt9PN3wM61TtNfUcarFmRM5MjKwDSVzH2JkrqyQd7E",
  "key38": "5tUvaE1DWNpfLUZEksHQZkPpUUgkEQd9MXspRe1rVmSwaM4u6HpYk8eob7cvhYVthJGEp2X5Kkma72R2t8N9wjVH",
  "key39": "5iBweRQgepiLRC2GPBKG8FTbHJU3hqdWpwegwebxGX2NEiFdQU3CZmWAHsvrdbp19qPfKGDMW6tUcPeXDJSHqaQu",
  "key40": "3yLgpsj9oGBS8rJsDQAjz755RpEJgwpfKdkwHjt35x2sY6QvrLHB9aw5GzRYVgZJUBVzJ6hvr4qGAYdRLmL8KZfU",
  "key41": "5PujRMxpkUdmsKofttp3CiqPJ7PXRjDzqRppeW52Aw42Ez6NbCTJgqe8Um7TKc4FUTieFHK7PSJQYc82r8Rm9eKj",
  "key42": "5gkFE9TYCMCPFXJB6qeB66KmXUjkYYNEaBzmHZmn9BYLXPUSp61DiQkubvNsytn8NywdRnDDuoZwpvjwAsG8k1P6",
  "key43": "55CRgmjAmsq2Ka1JFiE9pvhM3ccpNyixXBiiPmpgQy2xUZYS5zmbjREMv2vc1zPEZup7FVZDexw2s4rhWmmH3nds",
  "key44": "TEDyKdyCBnmkV9iQFgxiYzU8WWvrLyjt6JRCNop3aiQyp8Hx4GSRSoR8WKkYm57h3e3t5d3tvK4RMKTBaDGz3mL",
  "key45": "5iV823gTtoHvquxe9QDgrJrnXGmW1fiKTbzs1d7KFfVq4PDZwQVDkAf4fXwoRbNvfFshSNJabU5aNGTKzsjbCzvL",
  "key46": "5PNqR5iMw792H5wB7JC1E8zik9jKg5R4qgjMA2TqVd59pHQr2jYKPSokx1CTedcRPPYm8z3tRamDZ8C4LX8EnnzR",
  "key47": "5zK9b7hgFpyMYbJm7At8Z7Ne4DmVQFKNXFGfe8Noy63mYqDpD8tTTmg7p8QQFHv6dd2WcLUXzGFiqLsV5RwUkhwc",
  "key48": "2YaQ6op9n8qpopE8Z93EixShTujKnwaM6zDq3Fvh2NuALjkmjrKnuZTXjpyGqrqXqFBUp1sKwMDwcc1GynjA7kUV"
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
