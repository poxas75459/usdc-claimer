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
    "4mKY1suK2qTgLZrHsoJRMG8YFjacDnaktCTpd7Ncj4ARAxoe3NViuCNvKMxjRJGzxPCPkuuPyoM1mc9hQEF3YfjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onrzXMbYARX31oyCUNrkJd3x7gSR5CSZAc1YK3AvTJapq94QvL4hbT8cVoMVydo5si2MTSYXkmzHByScpg986fD",
  "key1": "4bjVnDdebZv28B2YdkcYxuYS1z42HaHzn1a9xoN2reTGuYVEnFPQfwN6dxtL29HdP7MX6R83B7ARmwUwTHoB6DGo",
  "key2": "4NUumT7ygQMz87Me2HYNtxqLWa4hSAjkq96Bg39gPEZZhUW6EbvZFEPE5CjEsG13VR15WvoCsTzeAPaQdfkM36m6",
  "key3": "48B44AvAZz2X7i33pjafskJQUwjddCoMtfPsj2Bu3DYmWtrCaakEcqXbVd6XkkGRGdGQs1oUHy7GFfCwi8ZQaFTg",
  "key4": "5icqeogi9fGxLNwAey4WuSsohucENdYU2rf3SaBZkrMmXvivqG3ht88KirjM16QwfrNHp7rbxDRntShGig4fPwou",
  "key5": "5FGaWsrj9NWMRpM19FNEN6fgyvVEtpBCr6JpScbubyAXFbUPfiSSBjsTXHHfbS16fpzd6MTqm98J7fSGtkcxwRmA",
  "key6": "5odSC9wi9K9VNejs2tuJKrDB56skXoAcCsPUwfGGdwY3AX67Kj5ixBcsCiAEA6uZjMZpfb247cpXzLTPXt6tdHdE",
  "key7": "wCdSfrw9x9dnprC57Ds4SUzFwUgnX5XFH7ynCNP5MuhDWNGXtHftdcPkwJb3d95VEW6WMaHkhLEFtTgcPcu3vGF",
  "key8": "Wn9GNp3v1SxfQiqMt4KAnAK158Gs65xzk9FgYgCmuGJ251KuSfQWPysmX1GDSbhrZ2AB2Kyte8ctH8qaAVVSWev",
  "key9": "wUEYLTLtmrseDCmZe3tm8tB2p9j2ZbSkBzbv2nXdbzMb5sz8j7Q9K3SgFjRS4P9eh5BWoCXZSkrDdBgLT6iv5pR",
  "key10": "2ekC5D7SGojtkuKtcgiTu5NXYXBGE9oJNSxqGV7GEs9xjKb7kth6Fx39yMw5esZy414QXvX5SaNgpG6ZS2F7Y5bC",
  "key11": "4wmVjrw4qF2FLotw4RjjxSnHdN7wif7xgrGHfWBLuYf16wCZimtvCtGA1up7WXfBLDPNamgy7ANhb16HwbUtTBmp",
  "key12": "2ubchUmgVeSpm2mTYmNPj52r36aXQB2ykGGJ3JXehFUdy6AY79DyfZuw38ZWYgubgwvS2BKzGSevkkfNg11Cg4aW",
  "key13": "q4XPGkvPvRvjVjqyQFKGVp5MihJP5uBmgFXg8uAdN6jeULoGkdXbFmParMFpEgvMLR2yP4wsBy61kTkLybBHWNz",
  "key14": "3jdGSHAbJunSzPh4coX2q5HpAY8CzfxCiWemQtbj3STRtKE2nMQpvjWGcHkEWmXhsRsTKjgE75FWEkJSkSJGQxiP",
  "key15": "298GBSUNx9EwBgXu6RuSVBswVNEo9aQdRLpDekP2WCBAky4U4SXvVAPJZBuTYR3hvaaNkGTEU5ofQN2FJHVcTzHT",
  "key16": "2svS7FGhJ8fdynnLCA5XSbAESMBEnHLDa8R6vurd66sP6miXMiCnscMsZpvVfne28o9CZXqJL8dmY1CHVoktAaPX",
  "key17": "61FuUPKbUWS1bKKNXrrA7Me2QdcGwr6mf3DeEy2BbBsEf2ZGm2UkKLtJ8Y1sEV3bW5kj1DK3AoGCoGQ5UEPB5yAa",
  "key18": "4vuYFTd7xbTadvu4KShyrH4X1xo4JAYwRgyNs6EBe3JwuaiLtfwXQEREb4uRgxvADh95MdkkRveT9DmKag9dUzHj",
  "key19": "2JqxV29iNwWgvzc8ZESWxsGFdh8ZnjCpD514an2vEdQGCNfzc3RaiFYhsK4mpN2aG9fui6Uo6ZfnRcwmcQkRFgTV",
  "key20": "SMTv6rES4KU6MKQ5oCJCu9Kjmtww1AVNa7dv7Fo9Ckh9ph5xvrxseAubBKxhRpreXf2GFLxJr2SyceT9q5uCnMK",
  "key21": "3jzLVUjJZen2nWmSZWNYQFCtU7LWoVjjwMwGqPxpzwy7qwwZoH9WJvHgDcNkhi2sevR18m8ZfRGa7EpjNZ9j8C3P",
  "key22": "2PmYYzpARsmQorp9aQLWk3Q9HnFUTkUY94otYqLPfxZ89DhUV4JuoR18RWqMEuXBi8Sdn8wthFjxYe5WXeXVLmPX",
  "key23": "5mUxFYdJBiRDr4wNamfjDeryK9KcnawJ6qicqm8bvqiHs3qwpLngJ9sqrKrhQngVDLYSq2vyXK3WB7PyAVfAXJuS",
  "key24": "TgHeNJNiGkwDSrYzzCxP8Mvx1eydeMyav2Pcp5shx1RfC9YuZn6DeLANFs25WhQ4S6sEW73u7WvmjNXgfVxp1Lp",
  "key25": "5g91wcbziMxaBDWhTYV4Fmn83paoMXB1DS8qk6XcW6t4cEhC9GZQjUbZxWmgLzKWoMsgoGvDDwxuUK59Jo6pKvE4",
  "key26": "QrVEuksdrahGmwjNUTomYpK4YUw5T5NTujKWXtpXt9no8H3SFNXcu1Cp1skDF47JuVyeATDPTrqu5zM94KC3qCz",
  "key27": "4vjsNx3Etw2Hc7EvU4yoe2MqEEgZ2QNnR7NYppdRnXL9Uoo6npkT5EtYZx19qawUiHCmDS3GugP9LAP5dibQxXfs",
  "key28": "5FroViEfVXg7GRqLhGFSW78E7cVGiCbeB8jEur7XJMTwqaMq1pBR4Z9X97wEqU4asLjRs7AcaarwSYTmhFeDQa1",
  "key29": "4pNXCpAvv3odtPzegEMFt8HY1JJU6J35XK5Cam3H4zCbUy7nDKEPGb45tJhUHgEg9DubDURvEWK75zRrbs6MLAWk",
  "key30": "4Q9M6vmygDsYK6mU67xm4qT1NfgwjX5M9dYCKem268krNX4SnR2VvBjV4MuoEaaXyTj33LMG5mnMBSeS5u7pXCjy",
  "key31": "3p1tgiyqobAv5LDKS71dgPa9jC2n9AhsyoMLLvCjDwV4NazZVTopFnREibEy9ZpFP4e9CakThp2g4z5gRQSh5NU4",
  "key32": "3DMS8bjrHCK7VM19W4q3zUisQLFhQZNowLbFe9vGaB8S97xeTx94t5AntDMLDbxYoehVdPmYmZjEjgRrz2XMRmD5",
  "key33": "trgnGneqGHv5K2YHszTtoy452Tcu2RouhsQTNCSA8e7NDm9ChCr2yJMvyRvCTVLUy8R3ddPNgj4RKwBJXyGcLY6",
  "key34": "4ESPXV5JoAPnKzd2dLgZrMg8ieKx5fXf1Jr8warYhd2iQxt6uaXqjfDncpMrzbuDekqxVVoTQkEkAYqMTXXwbhzC",
  "key35": "3BWS17KvW1sv2XKaTc4GD8bS7E65sk21wNf68Q1E3pGhpxBcUS2xapVKwysLcNiymWHthwyj4bfx9ua1ZKd81bLj",
  "key36": "5A7CJhEhqTxdZMYz7Sx4vGQAXi7Meru8QtdUAAuufVDvZJNE35kLUfr3j6ERE6UWDLwFtjEA2swvHUUUd6jMaZqC",
  "key37": "2pEVV3DcrzuUc2nGGkyv3ri156hBxLBGMc34dtN1oWXGqHEBJnv3A9yqunAeeb9VaGy1ME1dYBbtwUbqZU5CFYtg",
  "key38": "2RwnRswW6wMy5ZyrZNYQq5M9DZoWHDe9E683pzxdRZG9gw8WR8fV6dwnmUmxKrVZ94tw14rJz5HvDfnQTC2TFzHv",
  "key39": "2cSCcPGUTnYe7WXKABcwoY2FQrw7ZD18qmyPPLwxD2NdUMaqLDku8Etf5id6os7d493UZt4J2roHkPERheQenUcy",
  "key40": "2w1GStXvCzrWUjaw5y1NEA712pBngVKVTDJAkaZ1gKX4azFJc9ENpZYEXsWSEKYJhnmGjrj1fXPcVGK8TdckME8",
  "key41": "4EtuEaz5jse7KSJqNDhkub3Tr2D6r5y5pcD94d9DTKtpzCN1sCUMGjo5qb8UeTPSYMo4ZQSqYs1N9ubx1s7k6mBU",
  "key42": "66dp5WKpzYSW3mUGpej9AQAmy1gU1PhJaH6RW3zZpm6x177wejndF4B8LdNusfnvQ3MTmXZRBpCQZge5zHiLfMSq",
  "key43": "52bAo4VF7gtdgAiYfJiq8xkj73ah82zi5r3ys6yqgtyjmVYW8DTWttnibffY5o56xaH5AYY5dVdBFc1PLqHUG9E2"
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
