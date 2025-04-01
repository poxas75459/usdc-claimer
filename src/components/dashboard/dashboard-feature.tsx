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
    "3pSJqRwXzv7oAM82gkLwRR1tGAT7XtTDB4HY4cKhixE6G2UQwQ3ftujerf8vCZtt1q2V46opiMSZrgUEr25x3Jbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aoFqVdxh3HjayXhSp8hx3WiNPFaz7YPSWCWKSZNt2Au1pbUGkERzsVjtsPcvSNxkdgNcMa62hLA7WMFj7NDWu4Y",
  "key1": "5zq8z7ygi7rbNSvsvDiMPryQzuTbmaAE3SBHzqcA48xbcExGUV9gGT8dAHLK4mWwMKyK3dRPz4MWHokCv2RxF5Vw",
  "key2": "4cFjb1dgFojRjfMBUscS1Kxo6dwUpH1LppYSxm4bw7fKtgzNnL5JH7QvA3hJr1oo2Y5Cgj7wGuNMZkAE1wpdT5Xd",
  "key3": "4SqpAzek2UqS6Lw126pcqQHW5HFw8hpkpq1SaEokT4vcnhHbgPrCdX5UA7d5jEaSwvPG7ASYwm9AssAme4bQFvvx",
  "key4": "24zqnNdriXaRsKvZWhgfRxTAUefb7c5onYw6LR45GjD9Eh1MFKX6CRuXGmV5gANPq7icviuPhdEhAEN7BxrRxsFr",
  "key5": "5DBxGL59roP17Xt3hQbpqmNfP2thcWhjgAEC8nq6tmJ4Zqnpu8tN6ykiEcMm44rUQrepPeFaBBDPfdJ9JSHGJcxo",
  "key6": "PcyeyUrSfvCmhGRdKHhbRRFvHuMwAsNKGrX4qu7u35VW4ubXjzRu91aZQHDNiVr3hizQPNxAt6Gsf9xCyWMEuf6",
  "key7": "2A6ry8GzLbn31RXTH2bfE1nd8dDZTVjuT1NHqCBdDRbQnR23ZVyqmdDwMSZjEZm89dQ6NJLgpgxHDGk4bptiyz8x",
  "key8": "m3YQvSntN6PHcauEJzpLDY3aAGvVzxXsBK1oab99xwbC72ic1cmxpERpLKPagwj2j3UiapCocLuqYtW2mRTrHr5",
  "key9": "2nPYidxvrjAjcRetU8oHXccZKRarUUDiGLC18svuPVEZLGqfMpK9bdhhe37Ss78GkrW1NcGWLqh4q7Zeu98Bo72n",
  "key10": "FBHvTnDnzxJe5v3Pf1qLZdCrhWG4ywq51r14TKhKYm5zuBX65wJ7wCU9bePAUKdSi9CYgwEEGrWsVSEwDYgJLo3",
  "key11": "2YM5x5g4WvHMtvFU2QRurypCEAzsDunnNeb3Vp8kv3r2U1GeE4Xp6DQcp6HaHBT5GizsAnxnz2o4vSwKzC4uBZtH",
  "key12": "5MDyqzKzejkhk2mitMTSpmJ2hLTdU83Zvv7q7BaNZy8ZQSLnr7mFhwA6Ae4nRhm2Hamz4whQ3cuB9hR9m5s8Sxjq",
  "key13": "5DZ5a6HADwqUp9VvDyVJzAae2tUXkz1eJaKD5DECSzKyjWFbEpgw5dcyPjGHhQ4gBCidwW5U4XdFjisfuuaVth8M",
  "key14": "fWuZ85rjUpypENQrZMwbHBppyUR5aXFFUYnEUL9zp5aeMCqLWUqHLHHtH3jVjLwQRrFbojxVTEHzALBEZvpLxVp",
  "key15": "MSTXsbfG7ukx9YYMmbnsVaMa3hvDYmajgmTAiha3xcPMVWTVWUqAJVHUhJLg8iHqjkgS3BVXQT2j6JRNNQ6LFdN",
  "key16": "3YUU4Ryk3rvvXUq6SoPg5e34aDwp3gr34faGkDBEGth3hb8bmmyN89PZppbW7BySoD1NV4rJnVRStSEJACWSREKQ",
  "key17": "53yTUtFqQ774GRz5NkwmndJVsEdUS7GYyy5manXXb6F1jruVPJJvnKPc6JyRJXuKANvvhrroMY4xMM8n5TfUpEah",
  "key18": "5qDCjqEDdBFcRFuLdM45ZUprnKUH3wDtFeAnXFEr9H2GZMn4jeAAkxaeyET5bZqfxeSXjQeyJCwyCppbJB1VRxoq",
  "key19": "5xeUxqCDvtARMgnGz8F5vdQYMQqgEUsiHmitfVwMc5LsSWb26hMgGMdvFsFPKirynPAvejUeXFaQWHGpMydFfvV",
  "key20": "4zAuBRQyFJkp1jdbZ4dzPHucrnZDhytxR9nLN3cbcJpSMAG5LE3MFJohcNXdrtKYLRQryaG3V2Sy3fbgVUrvy8tc",
  "key21": "3V2tXLm7wmovRqTjT47o5jH4CFLe9wLR28j3fg9ruHFTH5EvSPmyPdvbt3pcSAKyXXTr4XC4WwYpHQpqiux2zf68",
  "key22": "42zLcVyKBJnLCftbEk6nXk5vS7Hz76bKDcNrbCHtRFTqBpRbWeSGfZ8dpquJPBvrbfyytDtERB1eE1ncdikMsAsM",
  "key23": "2kr5ZE5F19HZyaWxmbHVzducCTeiHmZE3AzntM3r6rXGNiCAx28ZqDatxHXiBXqyyphGk3NfoeVvND5CUMbh3dYa",
  "key24": "3xTNSMm4ExWyaGZq7Xhd6uGqk1dhcHqXTFUoUYmeLJaZzHZMb7TzLwkgizsg3wCGoXD1yT6gNftmrf2RS3BHVfGQ",
  "key25": "3hBSWHfvC6LCXCD4RSixsnexxKG7iXL7wzFWQEzYKwzb6VGTjzCU5VAwEB3wphnjUVX2bV8MapLkgJwW3hGvyA1j",
  "key26": "2p4Lc6XyJV9JVt5qfz1f9Su7BK2eaVPHYTvRfj7xA7uWhkf1VEmWiABDna54ngxdgR9pGV7NhxjUFLRkvML7K4EV",
  "key27": "5gD9rW6SVQFT5f5VqhVFf2EN8tQGPAeS6R5CErhfnzZ2P6krW8SLUBhfW4RWTNTWagj4ewaGLLZAGzNA13G2bTd2",
  "key28": "LfVYvzMSjXyCa7YAVa3SH7Tcn47YznQRfDqhzavY99Kh3b5pmg1yAZ4czHngWgbutARLtM8eAE65uKQ6BWhWzXC",
  "key29": "43kMU5zg2Jdm2LS1NifE3BGWkFaBSixhrGzWsJVVViUsV9b4eck4JTAbGqx2J9DCZQSa5VP3U1UwAjKTETdXVUq4",
  "key30": "4VGAH9pTR3ztrRZPGiU12wuuE1mYB2DdBNQQAmvRoGBc1ih9adKLFmy3esYZo9qEHzDHdDheCyDWAidCYogMukBZ",
  "key31": "4gZhkCye7TKKvtyf7N1Xn1L3BTFRBda9sDtcRiuyo6vkN8kK1p4CnyY2V6xE6KfXbmLmyYJbAs4oCrhXoRGtirVq",
  "key32": "cW7qCr6YzBWHRnGi4xRUg6F62pccX4JNEFPQUvVoiDA7jtYaWSkVVrvQmcR2ttLuFexgbC456scNwHFgFHefpQe",
  "key33": "5hecSQcyQwQLd3rapH3mWEYK6NuTcBGE3vNFQDD66Afmqi8W1pZfMGG7JRvDKSeQnEWyKgMQ3UDCJJfvrRv32V6Z",
  "key34": "62nw7j7nKyMAkeEigM4N5AP4GNV8gW2dAgWcP4aSe3SdXrS1E1P6Wg66dJHu2r3MC3r6i3XUHp5pDvg8HonBTmzu",
  "key35": "nKCUkLP6f5SW8bRCn2B2YaHTf2NA2oa9GtzwtPH4wfFWnw5iLKHXy9yYvK7H4AsywTLaotrGkbhPcYYzad8TVRN"
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
