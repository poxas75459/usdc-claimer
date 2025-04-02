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
    "u8vmGm477scYjF8aeY2XF217G2pSzBEEy69nDM11tE9Qdwmz5y9tNWXQ1NM9HHeJkxbvNdPvDqRMwokaEudc3E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A81wMrRJY8KZhziDq6rfHf5JQ9qbYskJd9txpn3mWKdr7WqgmrnN9zjJHiqaLytBfcQ1LA96GiYvkd1WD1KLiPb",
  "key1": "4PdPt9uALXs5kJo35Rgo6iXdyzNP8W9xoRwBicPRfyuUi3oJq2EjoJueEqMZTH9YqFf8db3A9TPzndUvgBBjp1B8",
  "key2": "29WcnSvGQfNCq9jiJHqaVcus6mYa29HoUbW4TP7CsVRnB5WNw3BVuyfTdAzK8uuFaUmEKuFGBfgKkPPJNGGZVsTM",
  "key3": "5DtYRGyGhXbouPyd158yPcrF7u2bbFSPHepMyXYEcFVs4xzRtyvk6RuLFYjbNSJVLrz1ibG4tbodZGjpemebGrUd",
  "key4": "4pJk517oYY2yoJpU6VeGPnkq6S99asY9nDzLKuwycKJB4GNEbD3Dgv9SJWm4A3gbGWznUnb8k8z9GAq96VwdKbt4",
  "key5": "2RsSwgf9FtL53wAjsSuKL58YCXW5GL4VkvoFaDXRNNJDiPqdaLvAKZgGaiF19akMQX1YEeztaKfb28aVcfu3KQkT",
  "key6": "5npfKHwygKBPbVZvrhJDXL9HxG3msijfXBP9KqaBgquzEk3KwA2MBnca7ay5Q9QEhnxvJspi9KmRfLz4ABsSMqsT",
  "key7": "4JsgD7BipgKRYnHR36YQ912sTugJW7GTcvcGHnvV7L6c8aTsrBbfkBYvyXuXV1QFBXcdzuwhSS4SqTWDEedE9MKC",
  "key8": "iWDV4wnrGKbCefZn6SDdcgijMA4bXk3zrnC6vy7HJAxLX3dK1rsQdjMZX59Dxrp1R7t9fkkkAt9PUQLV62wB1Yj",
  "key9": "4TRd1F9rt1Y5nvcmm6bzDrKhEEAuidnEp8GkuLNW6swaZaYYpTf3gRWtT8NLRJdEeydM8S6Up8LZsUsXcPRb6yGu",
  "key10": "3JLnRjaDMWFzKo18BNYqYbSaaqWRwu5bJS3DeqRhtbKbE9vFwUw2w7WqV3jcdX353SbRj5wn48R7XYgqcUme6P8D",
  "key11": "34YiYBTsSLr6PpQ61bQTgijXqNcTLV4Ec61vdgVc3KNPCcAURsVMEA3iy6BsxpkKjH7mKJ8Kr5MKfDEjZQBL8miB",
  "key12": "5X56CXqJJ87RHUdaNjtBuwkLSwKgw8pTDcM72qqgvXeqoY8w7beXLbvRj32GApYRe472dEHibu22JhmFyZAJFmQU",
  "key13": "3g8wxnYuZ9CZAFdjTB9FK2SatbYFjGTPuRedqyxzEBsHP8mkn3sj3jxBosSRKYYFgxRcZRoK2HAkS9C5NQ1xgPK7",
  "key14": "5hHB65fDmfSPSDgBkFUaF3FVuTJUafVdNRWWgMDyDKFd1L1v3USwidmhmYRn2ZX8JG9NeHkwe5nVUc4Nst9Jbd13",
  "key15": "37zXak8M5p3k8qPP2u3hfsQY8aWQiqf4syFPaXHBRKcfGqHarppN8gPz3JhFaUpNatvVcjDfbNAoqZnV3LASMaGj",
  "key16": "2ZPS7DGvYaz3icUetwaKY8e9HLRWHt1zkqqgMdvBZGCQCsyPaCDTqpryQomsmGbcP3d6vJaAEP8d9Rc7NercTCm1",
  "key17": "ySVkY64HsDoH9R4PSS5qLtDyJmg3uSuuhbJqGibLpfnbMwiK2vJN45b8Tg4D8Q2Zt73ktsR7LQJDL1iZjwLDzqy",
  "key18": "5XBhF2WgTzN17GWGVWw3GtPtmSyvLFfyLWdYbekmyWV3ezAQVczK9QPPoQU37oRr23HG6MQs9BnsMX8v5HMF7T3E",
  "key19": "4pf2J6s4WbTbxT37Y2k9reuemdy93ciRqHPLfKPTHxjQWCz6EoBq6NUBXx5B2o35VpifSHqZmb6j6sKFkbWDPiEV",
  "key20": "Z2qAgHYVSxLBFeM1rzeTSsyrF3RLD1gPgbMSEeEccToemn1y3E6UZAmekAy5e8DRicy383vhizrs1VPjP1PPAxV",
  "key21": "3RaNCmy1nSfx3XAD5VRSq4bZnn5c7oFxJnGgVLaPbHoRSDj63yAuv1a2tuR2qZ1BuD9k3pR5f5s9aUvBiW3jYehK",
  "key22": "oZah9MqwePayUQGRPc13qui5xTDT6ELUnEp8ep3UpP9bFWqfP6QKrTr2kAVPir2LymNjCNtiiZqhoEcgYkYZZwg",
  "key23": "mo1EER6Cg5DK5afByMcqQpGYq7gxoA36s6sAsY8z9hxh6kNfYYyTaU84XcvZy7orejUEMXwUinu4E7kWmz2MeF3",
  "key24": "yQihej1tBtW6PPPKvu3inwLWT4oHx8npAwyfJQyn34ubEZp3dfiJS3ha8dR6z2L6KDvG4xEqhFjG8zaDTNxdsdM",
  "key25": "4VjQiJHEeJgVe3Wa2H4ef23L5vxtigRrCfT2BDrRT7Ggiqktkf5ukb8Cptv2DGzGDP9fhGWkJwi1YvaNFsKhtxJv",
  "key26": "4bzUi8XgJME2HhqTtQ9QnqXajfzTw9xfDxqvcgSzDUomsqqj6G7qzzxBB5h6GqDjWhZ753LGxG5xQTwU5y69UcHp",
  "key27": "5gcBTu2wm31QWqZvazDjWMXCfdjezhmSQAuXny9dynjugrwBDjA86jze2HrnX5McfxDC5TVqS8DZM38VTKUqqgL3",
  "key28": "3XuHYE1YSWFjASpcYQV4whBipNLdYFt8DWujfHY4rEi1FE3iu5Euvrcx22Q2SX1EMC8SNACxUK5jLmXC3TQQKMqu",
  "key29": "2aCj4ZyGumjW3RUyXj15sLoAqXJSxhsgJwgpFvRuqrfTkKPoaiekLgEH543HYvCZ9JRMcqfRPQ5xdtyvfmFgdL2D",
  "key30": "2jfmHp5EYTuWXc7PytQnQZ5kUXydv9LiLzhFB8jH4B2jqsCgkccBMN5dhswUmtLP1y6R3mfiYvriwBNrv5y5BzAr",
  "key31": "3k8BzMcVnNkLhyWhVyXR2vPpTVrgR1YyxDhd1EFKNA1v2Sqc5qVGbgDqkL3Gn3twLdd4wUXNUdxJHAcuUyG8kP2N",
  "key32": "3eC6DghbrLqpcCiHkkTM4BMzzNtWoQeSuR4RfE9mwxnUAiiCf5U79kMAnuzV99zpUk2ziNHKifvUkPHa7gfvghBS",
  "key33": "3j44bVUEQBiCbzf3xdiWb1uCk38rh9JPMi48N2qFFwpqzB5c8VPHeD5XFqHxFFg7ULBUoUWnubwBQH7KHKyVee37",
  "key34": "aZmmB4Sfjcw1WfMcyy6hn7FetGFbQhqKpqvvZzA1SzyfsBF3VJzkpnVMgNpP7Gg3LBwdpjxgk3vTV4zWTu3U9xn",
  "key35": "2BB312swFBiaKbnTAnMEGhMLsK53cJ7yTrsstCkMHAM9UhrWXm6fDc3vTabHASbLyhu8ExtVsaiwtAaRcr4VSDkF",
  "key36": "yFbFqCA71dAcKwumKLCrm71uEAYsiDwMVfaMUqkfRtj7ujdiSHiqSAy86GhT5qoC61vMdpKjSSaCEu8qZGgrCtt",
  "key37": "4z7cfEmnAJ1CVXrTzJ9nHibcimbCkT1DYC6tEzVNVfCjKsxRHbLQkKnGzUPbPMeU6Mcoi6pKUbZRfazRW5pDpF3h"
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
