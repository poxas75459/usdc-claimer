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
    "5iNpwMpZrApWhaSXHxRcky9GZn4bkm9fhPjFBMvKf4Bq78YRi3ZR1oCBfnxt28eqGfhGGLyYf7VVj6NWo74Fm1pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvAzF3xqszN7hYPhphRAtj85sSupnHGQCDWbzLP8BFj2fNayqJkPvXjVmgqfxK5RjwpocAfYuejzTEkLEZi2oJF",
  "key1": "zQMM9sAYwYBXFWop95KHLx4MjGfQxuJV4hLkWYkRvAGR7aAW3p7vhjJ8Z4gw7MvY7sfbnamNc6onmqzYVnNqD4F",
  "key2": "43YPRXZusADRqaATEyhnZU14EyBRREyPtC61Zgk345u1LGuXRWz36bYzRUCJcVQp3MK24k3CgcxVqpuh1XxZn23o",
  "key3": "JY2MRC6kcM6NknhZwDQqf7qiH5TtXoPmZc8djWnc3LuLp69SXhe4YXCecChVM3cTEHCUpHYbNPCATR9bs96q7eT",
  "key4": "5eRw4s7nH8sqvonyc39EiL6BLFHXnvq4jsmupgPqNxwJHMUCssf5dRFurCi7pq1oJEHqUzhzQKp3moggpjwAYy3D",
  "key5": "2Du1BNTWd7kiiqjnote5BGT5Y3keDFjBUK6KH6RKrdh4V3PajNx9Mu8c4PnPj7yAZqCAtZ1wersAEW5DwJ5z7G9B",
  "key6": "DSpEkXd5a2YCPZC78SWrwhUGcnoykDZ4RBRfwJ7wZcBQbm68GnUyHWjBMMdZm5fvtUJYHnw3rdCRCoE3cvuRHQC",
  "key7": "5MKXmetyaMyX6u73gvU9VLGpericbKBLUhq5Jfk41nVBP6o3SwBpaUdLRqJpjbsBpbYSABP5cSWs1n4wdVddzoXP",
  "key8": "2hRTZpqRis5aqSwXxVbGRV4jrRZfkSiXMhVAAWRhpMw4vKrPrbYjfeFsJDaRef48wVPG6s8BwG5h6S1doNbgpEMR",
  "key9": "2r3gp5HHpR1XoZRhPT5whwnRB4fvqf4QNhr4veTvDQp82xNBW7D5DK4Sa3GfzGwdjKx81rLhVcwUm7tciKEdNv6k",
  "key10": "2pnZyMduGMt3A8oU6Sjwij8Bk5e97KaFuQxu4cAis4sxUG26Qu9PC8QVs9Q6gVMxeeVRfjie6jktxtrSYTyS1nsd",
  "key11": "ZmL7xVN6ZHMnxMY47PyP1efusGiNznGerNGeLKEStQzLvg5h4S5Djcri6CknEuoPRjRYZa772sGdTHnaNxgsqn3",
  "key12": "54ZSsb1LwDYeocTc6W2H5ggm95FR1zHTYU9D1ZBFSva8f73MjWMYeqhg27LnoEGLoAoz7ggEMfRCBxHsAgUKGbZz",
  "key13": "VWi8kVPZqmooMzEDKCtY5hMuErNv1eZhfDJu7AcTz5GPESPznuxMsjN8tASFkk7vTgHDRfQ6Qr4Y9bKwugH3SXh",
  "key14": "2nNiZvyMb1s7UaoToQ6rLaZc5iMigeVDHdp9rGP2MQFSnWyGM1pJYRf6Qyf61kgt9LaLxkoQy5UPkaHbL6SgAmAJ",
  "key15": "5odVSKAT5PaAu2AzPXTXpamc7o8bM4Zfoi5TDCHqudCEZ9akejKiUDAszH5e5XfeH1bjMNBHzpWKqJgP9CQywCVn",
  "key16": "2wLQ6JUmnwRgbU7b1CcrmEhgKxWdBpGEXKvFfaZ71kzuH6E3nfPbnFZ9WzJ2FQghRMNcfpyb7yg1EMHFb4DpgdPb",
  "key17": "3gWHzneYjtgXER6RH13vppTRLZJtbTK6EJCR3Atd6LCi59EaJAZoWuig3gxQUwzu9YSYfmdzYZcKz94DWWyXzMwx",
  "key18": "3fpAZ4ZBbyFbhuS8TAvcmrubupz5iXZJqSoMuKZnWKiM9bNH5JXVRezPx6iBQvYPSxqauy62ijVpG4yK4rLSYjPL",
  "key19": "2miunKdMaJuciSYdv7eDVfWGMEwNVLkMXjTT9wYDFfCoEZ28dUUVexW4nwX4nv4EuMn6ArtGHHMqHP9wJMy8Conq",
  "key20": "641G1ppv5vm4PhzGy3tFA1MYhyaGNW9fkFg59MqnN33HyG1NRFRauGTanKDHnbk6iA3Wo6krkKvcCtqva44bn8Lc",
  "key21": "47xrUv4jw1wvLen4yfYzqnC9AYFcxMTaNetQvnhsvG2jBnBDMmiXRc6KHCtLyryMuv9C1ssu1Uf57ymWFaMksfcn",
  "key22": "5ygTBLRFFg1aMXNeZzkKji1b6FRAqCmg5tyLSSx8BXAMbHZ1BK4Q9RjeexQsRMqdrVrRpzas6arQhj9X2uXXNcfc",
  "key23": "3fSPrtnQuodhHdGwtZBsorKYGQ1hSubmbtEtkNCjK1TWCRevApsqwza4EdtfV3V2cQTzsbv2DEw1T6oR62UzxcQi",
  "key24": "2e4fvVMrbeHqS7KHKck2RBk2LnzXpAyWMGD7wQkgrfX46Yz2negZYQ6KUgL8A5YJfYm2HMt1vBeT1yTcSM12NxRw",
  "key25": "44ZEQL8zfF8mvuESHrzxwicEP6giRCGgP99GSezMvtypasSn3eht94W9ez5VCHs6MDe2n2vVfaZLDbNpNYVpaDFT",
  "key26": "5824zh4gxLydm4xARG1deuyWhn8fV7oYpZkdA34dtK5KPbrUqaQncJMF38RTJSpp6UbP4KQo78x2jPfgfQQ61x9B",
  "key27": "HeTuBKBA8s5kmeycU1e3C6GjwCwdqaivKiBDybD6AEBRMAdUeeUkUALdy5rYxUJXdBJXsYSp9wjgATasbJRMBCn",
  "key28": "hBWzwKraqMLZ4v5p77UYxYTF5mCzJ89bvzdZsLjkL68UyC4fmRWbS8o5wKWGeSf3yogeYbM4bQRvrrzcpKXuVz9",
  "key29": "5ieftdi3r1xGLkaUB1o4Em9NEDyvcoWA5rJGEeLCH7zgTw5nuvDxCLenvX3vfmu6qHSxfGS3o1FSfGuH1nc3SMdb",
  "key30": "4Ckr6SJSbunLkqCUzWdsdZdGXExTGKcxyiN9mAjfdaCevN1bYZ9WaYiat1hmUB9D2E78XPX43hFuV693RFzbHo7Q",
  "key31": "v4tVkK3QWqqohtupJtfyQF6iNsv4MA4hxmaEyBdR7JKL54z2tV324Z1exoNH5gDjJusD7FSBgUMfyDLVthbBedx",
  "key32": "4DbzSsibphuJpd4UApZq3kn7V8WKAvSWGKtS2CVJ2vfhM4muydhHzez1zAmkVtXzP1de35Tieet5idU8cwYRvN6R"
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
