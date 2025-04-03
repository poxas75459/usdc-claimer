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
    "3DU28VHRJeJgdrcoNFq92jq4uhSRm4UhQ12JwcPbB5UAeqWa4y4PCeHWChBYeL1VG3ogFxF6msA5YL7bf94b59X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThZig7uWcQs2to4EAFc7rdg4WoQDa8Cj8xGFb894rM6TgmAj1wpLhDyjiVTycxaiBgnBRcbiGjVvnLJGDXhZVmM",
  "key1": "264y3LM1QnovTs1XSsLkxiU1GPKYPCXRv1CLtVVxzwn5fwKKDvAa8g1P6X1nqeF9aBfLJ5fgWhYf7mTGPTrDnRxX",
  "key2": "sjEbQ2MYTSR949QkttrEuqg4Ep86a5XMbXJp7iTR1KQN1cUDGPwM4WC9X8BJYNoSw1qtZUBnTEmLqAwqpfMp8JF",
  "key3": "CeULvcL7fS5xKruj9YwD941hgsdZm2qoiAAERmSbNgfeDvbYUmdnfKtbvRPjYHtPSi4YCZgR1Re6CCMHfANGMjq",
  "key4": "4X7MbXfQ5QZuX4687R6UQzirXdrrSfLT9ymMbAXEUmXefNSfsJidK3X9nKY5TaR9ug1RNav9sbwk1jmG8a8DJn8V",
  "key5": "3Xpgt5rFVriXbKQ8a6y4qQSefwnxobPPdMBgkun7K3ips4zVQetYzDJWhhntK9JD4Gvnf8H8CZVMD8Hkyc7A6Sq4",
  "key6": "3oupXciaz9qtBYmbV3na5VTUysM9SntJy97g9PgsDwp2akWxTj4xBpZMazkXX9jtmcKrU3RZPPSrpn1ho1uUuZYk",
  "key7": "5bpVULwh9yteqeTdVvNTKoWygGrM8JhKVug1g4c6yRpqNSXQhyyxo5pEp4M8iTFgkYLM76Nqs35KQpijR4UrEhpb",
  "key8": "52CWSAaUbMhmRumcWqc2iY8jqY973HeBvoa4C4eVkEHGu2Jf5fexVLNNNLXSeFReVGCAeKWDzXDWTCRjWJ3hht4p",
  "key9": "A2ba89iXA8wpQ5gSGuB3dirsSiXCvjhHJXFZGtU7DfR9Rzp86PXR1UnALCDeJjZz331ndiHnHENpd1DsmDMs5nv",
  "key10": "4Lu7tx1dZDMcV7J11vNGjruPi63WiTs5Qg1ySWRGnz6TtbE3nfkZDRWCLQym7SvE2PgvdnseRMfP4aRWgLtY3aiH",
  "key11": "4DtXGfV8WBac6qLjoWMwWEy2jDj7e1bpYSZa1Va3Qx4inbNYPF2N2RkduJVt23wGoBxZet2k3wDsgLz1SErHJaPp",
  "key12": "3SZPS88v3tFxExE29A3FhtQjdku67ZDiFfqHKxJW6tBZ81muPdyHY2MD4TCNnZn6Bx6tCVW4UUc4n69tBsdYTAF6",
  "key13": "5DQxEn6ZMn775ZAx8fckWaD2CA2WASMycobSMFJ9SuyNXsWtEMpEysvhCStNCxdbRsKD7Fwi9aYiZtsZgrK8QbCZ",
  "key14": "AkvV4whhd4NZJXGDiK2gVtDbAuBbPg6YzZ9NKr8D3hFXLYv9zttpeznovCm2VJWbTPiQcwQd37bH9Bmcfkyhudf",
  "key15": "3qYcsfh9QGdzKEi8XR3Dn7k6v2bpnkbieLQUKSoqRQchKxyVpvyhB2YoowbGYnQGPhQYdPtGw3TVpbEmk7RvVWXX",
  "key16": "5Fcw9oE2MmaGwQtR9orJve3DatFonB8L8hxPTt24Gyfs639vyMnZFYAZjZUiGWPH8dcQWBJYFwW5ePYn896sYw46",
  "key17": "2oUSfPazno5y6isvX4HVm5yYYJLTiohSvzrKVVHGtDv9UU2xqX55Mn3rCFJCjcr8Nkti5DxnctRo9Dy2MaLheR3f",
  "key18": "2JAgKSssbksGR1YDHVEBoSi1EH8FVjtGY1QjMBB5MXaGKmAGLYZkr8oEdyuW2vekjBRizDmiaK6goW7knS1cat79",
  "key19": "4eMa6AautFSbNRLeKAJBfGsPdAYcgAYSshySHuoyr71JBBogyzZ2aPaHA42s5qDSo3hjRnb4E3St5MdUjugeuVcB",
  "key20": "i3fVpdgRMn7iqQRBQJm9pWDzP7zZkFJQxbZgLpLAfyRpksRxfeJyCrskCSrLDw7Q6KM9Laee1fRHUtXHj3VNFGi",
  "key21": "5gXN8nGfdQ2EftdKGp7WENXTev3yh5Vude6rBptxCSoXTJusmS7YRBHTjy6imvEEige486nj77rSbU6Z3riWKeiH",
  "key22": "7UfGQvJNy9mKT2e6r2GshkHnVEkPDB6ztPpyN6vbSjXRGSxTncS9BxTvyYJYq9MtGPgBK62tG3dopZn2ZmsAEtb",
  "key23": "58xxD2HszmZT4yMbNzkg6fLf4u7tuxNXHaAQAZba23AEyAiQUiH56GVnP1dVAYWiet2vFNbMz7vmnqqg2Fv7QUqm",
  "key24": "26oKNLwT9Mx3WkmLun85dK7HsWmXeGg3snWVF6xF6PrGrAWpdhK9nMuB5dTA2vx3eG6AU7RkLjJSxFkXAKPNv6dz",
  "key25": "wGaxZL12LKT5hjPxfx5LLxfVCeRkS4caf7gz6YePzBKXQGSj6v59LVU2KjrefHaHFaNXu3rif6csTY2xZioAtbM",
  "key26": "DDGMxa5JewAR7d1XZzSa9GnvcLz7jTxufBKms3uDhvEuCWzmnWcVi6c3CHVCqvJJyrkUVf1HFFqfWvdiNZ1wws7",
  "key27": "3Lk7VHqqiMzqyJ47wJjDKR41aypxDnDV6pgJA8nkC6MTAkMcP8RHrNQ21hhDvt8yhYv663o4LQqxfxAzScjdGU4H",
  "key28": "3ThSznHKpsJhSG64pKdxnqAhrzqyMppfY1LJSuvMmUoFJnRT3YFffxbUAV4uZdYtsVSHrDFHG63GvgaXaW6Niu7B",
  "key29": "5HTefR6yLhMXmpUSbdt2fHBBXzhTCtQy4p9a87xWveMMb92mVXeWLow8HubKPQFLGjREDojGbhnPWEXATNRpL8Mb",
  "key30": "3bZPfUKxX3EtoVGqhFnV2NtZhaDmQ64uqPAYi2ctE8xPgjsaKri5Ameg6Y1hUx9fHdyjUdnHdXo2zGmAzeWwPB4C",
  "key31": "3CuELg5gjD96ne9ybCVVhQBQg2wpgW7uHgK38RBKpyXeHwRHKS7hLJVQVUUtWuTj5SeZvHyCmWGjTqBxCpRmofGf",
  "key32": "5wrWJKmtDQqZEqCGZ2DGmea95ZkMkcAZxpvZysywhRvPr975FuVp8sUW9NUaC7HEhoWMX4dTCLkww5M9LePq4hfB",
  "key33": "3fRS1g4F3eG67MoxCfcmYNJsWY4x5y7GgEeK3nnVzM67zavfBnNwBSLJrNSaWtynjKq7n1tjCS7w717Nb7N72JBs",
  "key34": "D3qLd3yMQPAHHAo7cPY7EYPX59iyEbXu3ThRLAfBxLmPPe9zxsoTwMcHNutEQ1REarozFYUJsuxEZ7ZnhfgAbkN",
  "key35": "3waDf8swWmyANvJGGDTrJBSyavK1iHLgwJ75xABqTT4eNreG9EkFkoVsGmEDrNPMj3GnzRHMns8FcokLfj4H6X8g",
  "key36": "Z6He7PyZJByxwn1KVnFvNUn4Rti7fZmEZfwiw8Df3sk95y95R1qvFuRNyzVvAA7ZS7WKUK98zQozAjLvhzBxair",
  "key37": "5En2YBVGNMS14jVqeALqXai1DiZG5vcQKeQMhaWnzCKEefM1o8mXrr2MwKuDB17tXU3bJqH6q8n53GkEZoUDHrKp",
  "key38": "4oVBKEfXeZjZMZsDydyDQaATe6VuFTgMVmJQnGoHYZZmVeNUmjzKDhv2mENuw11TFiiQ96QMvhpyYXLYgCY89GMy",
  "key39": "3w4DdT47pS7ZQfM6kmKqtVAhd8Ekc6F2MGLiNzS5mYbvcoHcUX6NaBruMZtbXvTMnRi2t5BCwgyj6WX1EMiVrF6Q",
  "key40": "2ip3kyJXu7Q2y9F3bfp9F2pSH4UiqvuAnxNjrN5G53iRhhRr9CjuvJsbqf1dddxiThqXDr2nNNDDa2og5G1ACBYu",
  "key41": "4tGfdCtv7LQjwBgbzPCTtizN3qmwmRuoEk8KRxMBUTjgo5bnuVJfVeacRru1xTkt31Lk7a2TnCEdXLnXwTeekDVo",
  "key42": "2XCBtxmWWB1Yiqu8W89Ht5njiyMoSii6bsVqQKvUDGqP2bvwuBq38mhj9hMWGwvoaDVSXBDZYJh3tDpciJQng4s2",
  "key43": "4ioWHCYafTf4FTPDAunRVcemgbu6newmvoegdisji43V9HrZa85s94MTM6ufUsSUvX8PW8U9wR3aSfDogBQ5Mbf8",
  "key44": "3g66yHfrTjDY4VBRA2hqZesyTpcVnznvt8bRQvanqedqzqW5K2Y2WbSuaouRM8CMuUj3gK1sf1HcEitvZ56zvB8Z"
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
