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
    "2y99NP8NEcK5VpV63LfSpi8M3tMbCmaVSAQJ2iokRSuXPF4od3ycLibnZSUoDDkaHmsiRKx7h3CnzFJRsYvbdJjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPwH28F478sbEbvHzVXeoUtHghAAM2WbeG582fUMW1yE5X9GEStbuN1Vw3WbRjUCTaAvVE5mvUmSRCnE1qCmxU4",
  "key1": "FysbULjWwp2zu2SNuWnJELX211Cfg9VkXGMRnQz5n6BrpNeEAjYGVYXaTTgW7ARiR7Nm7ynvpeXypfghqLa84re",
  "key2": "cZ8MmGKzGvWmfH3B1wFLPS7jaPGAy4tSPyjDR64vdBHCXd4PH8CLY4oKgN8WT3hV6qR4am8HH6KpDMnhyruBQrq",
  "key3": "j2Nw6b4aB24kQox3dL9vcxu7P6zNui3XLhyQmghv6sSvDVa8UawYxec8Y59eiUPGtA8yzjHtAMKGiGSv9MBEoL4",
  "key4": "2bVY8ALkXm3DpoBa1t1WbakXvte72F5M2PhMhhbuzW2MH7926H1epysU8KHPNM2a3wSGVZW6a5NaLbhtPvFmZ42t",
  "key5": "4g6Km7engf3bDNEma6UohbwmYUnTReFYhsfQaq7qNM3eh4WkgJBqudQGKFRHCz5ZFVAmgdvQKa1p5aYF7kf5JtKD",
  "key6": "59mNcwvB6U25kQxeyJHtT8hwPqtvPzd4zHr7qvK8rfQFiXgGLYK5ZCLiuSYCfSbnNceBKEgThMUWLii81AVJ7Rxp",
  "key7": "3SyCMH4EBmEmipfKa3nRuudPutoAaAdKxjzTz7TnD4ECZv8rb5p3Y6X84xi8SbVY2Qwu2eLWTqMRhbnpmue9WPCr",
  "key8": "23VgNPnd1twdaa21fueZqBEC2EpLAykzN6E6ska3nNBDi7V24qMFCKhixPpk3dqbfYxZFePdJqgrbXRR4SGCQdQp",
  "key9": "2uPR7k8Zfns7GdS7XjYNim5ows6UXQoWTGMxAT6Cuwiw2DP25mSxSm5cGCfeXTM2vBNRaBnZgfpRfWtzNCN5PNbp",
  "key10": "4pzijio7V6LczGcK6a5PvWARoHgmsmhH5gpFNYee2XHqaVyEKhBLx5TKDjCkYhiekKePrm3Ep2SA1Q1cTBHvBgrn",
  "key11": "cExtLrDsCa7Xpn1Mgcp8kraR89KEgJM8h2pRoZAM79bMxeFrtEFjHpJYraTm8dENSZSVd3Zpm6kUbLwbrimM2d4",
  "key12": "2GgPn7yQvoBy4feV5Zs53kfDmn343kCLFgGyo1ZotyZEtoe7fYpppW4ocrqy5Bh4VkbSou7ggmR9HxWpDPDwN1AE",
  "key13": "MdkKiskWs1VymZEUM1WbXsa1NnnNGxtYHeUWBJucFs4UHq7nVQCAM8inQy4KcHfhRBsGGAiF5HA97Jy2Uio5VwE",
  "key14": "2mtwsXujeRSR5qB1eAsoPu2Q29LW68S8RP9oKWqPigb3kskKM2yBJHQeGjLSe9A7ybrKEtc4QBuTgwEC64w9XefS",
  "key15": "5rB5UYpv7B9sQLYGNHFwnqAPypRjRB9rFCXBSK1YjgLcq7Ri9pMsBpyQZ3oRTozVtVQBQ4btzrd3PLZutaSTDqVT",
  "key16": "5AdDrbKkA8NzVKV16KnBjGQdurBfcPq2eRom9P1WvjWdd5yYGhr6TWJj7YWCLa4V8Bi4RBWbTgWoBqnjNX1ujfjY",
  "key17": "36RzpynQxwRMyJEMgMnktGgznJrKANsB4oAzzovsRDWJhD7TQyXGiaNut4LJkc8s2g9bp6pT4d2icd6cweCdF57t",
  "key18": "62EvQgGYPCaiGvmdAWkD48kuBz2cbFvk1URfWVKYAbNTVLm3TJSPagF6UUJy4qmXjMeiNZ8FKujDvSU6PDWW48eY",
  "key19": "2axq9LkPKuLzzZRjxD2bACzFMVdU5WQHeie5GQHiEpUXqXkFGF4aA7bhsoZdfggKzcAr9o1hRRadfhUwpk7fJeFY",
  "key20": "3HiXvQfr2jxtqpheoKdC3151HxUSk6hsiNpFTB8DbVaB8eoKop2aT54cnm6oASAjBfo1aeRj93gagtdyTmDHrXjd",
  "key21": "3HjbNzY78sBo8uLcrMBpgRbFPtXSvKshys4eo2BctwbJwsqShbRwkNrkmzGm9p44LL3EpDzpfGrMfHuHwwDwBZ3p",
  "key22": "q6B6aW3vKzYtDRkFqxANvct64mnERPjXurSQ9ADjY3JwZr2rhSjosDBTCuz1VDGpVcvbggZeH7A8bTkw4E2BdpY",
  "key23": "2rEtx5s7vHWmSEvadSKMQ34M8Y8Em4RhcQuBv35PQxyHYRfAnJALj8PqFLDfX6iatBa1RM14YoezvFcPknnYo6q4",
  "key24": "5jdo5fGoCT4VA3r8WEWgxGoWh1q4s4Pq8ez5s2opzwdW2hFHonPxtvGnGHfRrcAkZGhEiqhSsmTZyBhtPREZyQPQ",
  "key25": "5GwB4cfXpuZEB2r2g6yYdkogYVcQT7c6EVYq4JRExhYRFo4xxMU6RfU9SBTCwLE2dRkph2y2WLFeRWvqi8zbL4VD",
  "key26": "pYS6KvYa6wMLPBY1vRg1Fwf4euzwXxMR69iCTgeU8tYAQtvjLiDA38CGAVZdiRa4gWhkKdxFW7CioYhijTxdFHZ",
  "key27": "2WhdCHisWXGAKdunVURaRdVcLU1KTFGn43F1qvrRLRWxPgopY2cJCrVd91bQVRxFhpv5KZUnp9MpKAHgkKoLjte5",
  "key28": "5j8qMMwU2foUbfdPWBfswt3H7KPKZve7rj7noqHDTCxwad9HURn7dDznwkRiEBazbteRyZxsEaDkFCpR4ry8YHjb",
  "key29": "5QY2GFbFzxMfM9hUjvBRTVzctdixL7HDDraajiAqq4CkJByHRxM1ft1XiJakkFC9AwHKkLc8RBsZJ2PoDqXt22CN",
  "key30": "2GQS26dNTJtHWprcq4iBdzUdkqWL6g84TeyyRGMpQiiUvGt2MAEA8wCCVk1XrV3zRUHQwy3iB7yMytuHmSavBuK1",
  "key31": "4pD66C8D2pBKCRAy17YfSnHiq27gwusxYS3K4igxZLHhjx2K8wvWw4erNLYbVHWxR9C4CeV1yCXxYPQASZwLW5Dz",
  "key32": "61uQ5THgNa9pyM6mKn7A9iGfJTZ3XW5r1Jayiekkjtx42o9duUjmC4Er6v6n79Jv5CXhBW3F4F1rKLsxDiavbQvN",
  "key33": "2tYCkax5gWMDcWFvsxHyC67vfGi9BY29d8xSezGarm2VE5Kr32JXfykVtzGpdT7cAm9VXsMm5X7TUesgr6xpHFB6",
  "key34": "3ZAopAFxsVCjFoL7zRqQbJL3vFA2WFxjGYnhQKtyTcThEUeSWiGwDGVpEU5jqiWRWdEjHAe8CtQmDUw4htYCEKGP",
  "key35": "Yznmv4HvYF5w9pBmrFFwuR6HQ3uRjC1XkSQcF4kEcVRgfTmSdMNkXGQxA52PpXEpbd277KWMXDqG4yo5FPXYLiR",
  "key36": "4phSoF7MUiDZx2JgQ8CxsyyyPFd8LUH4i26chKv4Kd31RnDEwSiho4FQRGZVWUD8mxFGUc7FqugYt4G2hSvunehq",
  "key37": "EDV7WhtuW2uJ7Ux4YGUMnGVk4T8DSs4cmoVTwPSzhtj9bKMpjt465ixYKzHKagVPKLTknXay8T9KpGZMU9xoPqp",
  "key38": "3MzimJdzenisCT7sqbsqQU2S7T5GQoZSXN2VzPYfmxhBv9HhKhiDcAvpDTKgQMQSqaMiaAx8au7ETVzaPGtWYcB8",
  "key39": "5gr4D3oqTyw3x9vZ9JzgQnF4u5jHgzDEzHRStTi9vZGDKSXc6WoVX2uqy1yviT6LvhVyzUxDVqL2kvWWFWDDit3S",
  "key40": "5PeaEYttWhACmXDVFaQ8gRDF1kNzXFTwveL4Fsqqxe6BM1cc5otkyGkqRQVtFtLGvUcmFcqYCU65NBRrUqwxK9UZ",
  "key41": "38A395fNt32R4rFCDQveXmNvZTHWnXcDXdgoS4KZT4umuwkMuKx96UgncxXRcD1PWy8fwB4TWWHcRSJFyNK6qwfZ",
  "key42": "XbTCig9iG7tjVEAwUKeYDj3ZHmAv4gmtCmj3PUzeMZjQfKCr4B5ZohJYv5BGwvFh1uPZszu91xuSsQe3UYmo93E",
  "key43": "2DQRWy4phJKvxyAfd6CZLPwDRjxFxNxua1eR4SFuHZz5SqRyyaJYpGZ8feBHNZJkmAUZgsHLT51fuxa3wNK9sRks",
  "key44": "4xyMMRZjBQf2wfHoZXaFBmwrjwT5btprvK5RtwwkCAanwn3eiPoyjwGhnBqFWhFvR7rsuAWGqJKzExCSgXCwR7Xo"
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
