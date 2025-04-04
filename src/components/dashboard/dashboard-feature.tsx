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
    "2hAXfe3URBCSAb7ePDZLoxvGiSu8iXgxCu3Fhz1fnqXJo4RChVmMBaRb83MZHFACcFtvhQWRHmcTSmBAfExqMYne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67muKjp1mFDaekLZS6pbNxvUSs143d31kAmffBjoCZCFH318ccGhYubPkk5ES1m9Nw7tfSRoTnpWub3pf2zJoiKZ",
  "key1": "3bzNWt1eSuaqz5k7pYWruekPqBp9WG2eAiBuJ4gcWsS1CaXegTyjiEdDtU4dD6tnk7ij13ymby7xbjTktPn6wf5F",
  "key2": "5XiFv6P52xyxce62fYFXL2rquLrvD4R4gCvoRaYM9tt4LVyGeQQaSjqVQ68pyLePjonvfY8Aw8M8ziEbb4MhH2jw",
  "key3": "2KgAEE9c67VTu3TtygPEZL63UoPuMcEhfWbnN1oaG7bmZm9vnMpxAkxm3RshVx9ctDoCMPSx9zyPvWL3pBMgj7xg",
  "key4": "4fZfE7igittuGf2WLCXUuDK6vg6f4yQxFcgLrRRqDZym6jgFUh6BecEhVKo8CuXQuLhoh9F9FaQnTBJL2Vrm33QT",
  "key5": "c7xhjUvdTsCpAFn2Xa8q8vvZSSdNzEdjhVhaFghNbBt4XZzcrZxfcuNsYphAgVaHvhkNjF5pfcjCLqj2qdEcGEZ",
  "key6": "3i5knxTyhxpD6kbTWtQEYJPj3U3VMSeYUtiGRBCjK1eK4ykPZ4S6jxT3xcnv9P2yBbvvRhgkti638fEZV3117Nod",
  "key7": "JTKsMhVWMZaVQq6TAG756CyKnNPPmLg778KL2MZmfE7oEYdzXQJvA31xiAn4uDtYH31dPmS2Qkahr4M6eZnzNfs",
  "key8": "45B39Hr7cjkhy2DHCnKeB5zqKvtGtPWWGoe7edSXX11d8DS2yYeNGE9CAa7HcnGmuKL36xMThTMNRy1dy4V9E7nT",
  "key9": "4akgaGBsgM6oE9CYazR8WSr2hW3E8uWVnCQ7zUBjngZtY3E1NyjGZBCcxLB3nEX261JkN5BXHhLCQVuwN3rvKkrF",
  "key10": "41v77Ud7WikKcS31wnvEbM91dLM9U9TGm9WDkyP869Qci2m3ycTpdaN9UsJhGL8SFDU92yQsufC5ERvPax1QuNRj",
  "key11": "2TjbA8mAT5QeJtrRn9rTKD3FBLYsMjNt9DBNetmquD2aDQvXmVv76cEetFPtd42VwiReDb9nVp2LtFG2VdB87RXa",
  "key12": "aiC6GeWzGLcpemyStV5cqixbuRTnGEJejZcS122nR8UZFm98FRorjYi4Wkd3uTM3uDLdavsJm6RGV9gVJTfRttz",
  "key13": "64afcPhuQ8S36p2TRwGnEw17CPFGMyymDTEeDkR2b1WN31eRzZfnqVmEdy622WLVSWPHJmSP4z1jjSJa2S9nxtc6",
  "key14": "3u2Bp6DixnyjSkZxqX1Uv1BdGXBLQhy6EsBQ6AzSctgKZgV5mgzD8yTGcT8aPSws9Awav3eHDWnxHo7rEWAUnowq",
  "key15": "5vessK9rnVPftDgs9UWVop155VETfq2vbS195DRZNx9Mw6BU5pdZkYrC1LKTUigFxY9Uqs95pYswsxegc8W97ErU",
  "key16": "3N2JQ4UQMDZJBtHz22SKvz4hHvQKLP66NSjgG7Nc93gkc8pFPiwisuKE1rdRChfPWTANfWvyGiviPSzbGgW8EAsR",
  "key17": "mT4MB1o3pSn9Laji7neUoSxQf1nX4ySvk7Y7J6iC1cPnuQe9bQVXG1xXqpRHjwA7kvvQa3VwZz2Jfv9KoNw4HTz",
  "key18": "4iJPM4V3txNBwZYQJCkoDBwyCnxeDdyRb7vFQ7BrdLuPpFG8fm6ngdnWEsZ7oWq4TppRbkJLYmGgd8k3nX5tY871",
  "key19": "5UXJpAU6TvMopVCfSsmbm4j6WnEXHM4XyvWmkp7RfFsJM4rzDJtkeC2SinkeethwprjZxtUmR31iemTwphCH7Fvt",
  "key20": "5GY1EVgLZ3qprRRxnkUbbFM8x6DyXKv3dxcWCsEf1YdHBDwPZQQcJiD1tiVVbk2fFQPc7PURx3pMkx8cSL4Xn8sX",
  "key21": "2EqM9KXQzc3YJz7RJH296wFXQac2ppvF9nQVc9xC4qt8DoKJbG45UHwqTtQfCUwGR3KbHyz8Z6523WUQ84bvmADz",
  "key22": "4p9bgFidYtSSrvh8D7r7q56XxFAxtN9WZXMCiDJFMuAD9uW7c4SArhXe1d4hcUK3mf1L99ZW2AxniFTFRpqBE3rY",
  "key23": "2yGsEeZgffgeLGYY7ZwWmaeGihVjiQeMR1bZ8RPC6FWrx1Q6rZKsAD9BfwNa7Y3Eys6kJUZNTNuN8FSr5SpPKaCo",
  "key24": "4ssotazLZBn1niUoszG21dskjgLqDs9RVxj6hViWoYaaUqBacpXQBJnYPXt15pgUiHunmAgB3zqWt1o3QAFU7ymd",
  "key25": "27RkmCghq24PxmfzyJc1sgdrDchxPiBxvdx75EQiLsCjT67ptpPKgePqiPGLmBMdw1XfY8vZkVV9VNPhdCUs41PZ",
  "key26": "W7VXuqG5wR8HoMW4S72PdrHDYbiMm6y4Dn9V9HmtjrbzQoNWrZxQykPau89AdUxaDowTsnhxJUvy4VdizTK5ozP",
  "key27": "466WLM4roRHvyXavibRGxbqH3nZdwJtQzqsgr9dvDH4g4Ksdkey14orju4k7gTQmYdHQbhMssT3Zo24GHmzRfBAw",
  "key28": "5aYy35yWXr8LP1XXZ5b447mifThS5t52MG7HkcXH2RRmSCobcjhk7bpH1GgXK6VruPky85AqRWXRWLPzBNWWeAXV",
  "key29": "57FN5JXbNEMFeD1CE6u4pqpSJqyydqhiPZq9dWFyNtecx2pf2wZJuDDM9kTqeENkx8HdJz2hjXuSSaxLxMjLoUcY",
  "key30": "42FksqJbcFDQYecAhPxauGDMeM6NuLaobtT37ihBf4fwaUmokkUw9EWUF1VhCUGB5R4ZJjx32LrCyFfLjz8DVr7M",
  "key31": "2sGopo5n6K8B36RznNsmCqcA87tamf8UBjBdkNgyzGc1FzLjPpn2vpgVSitFRi9Ueudmh8HyPVDpxZffKYdnhBFt",
  "key32": "qgK6T1ykBseMfUcbEyPB7Ua11ai76V8hGxhKQedCGbJQ7RwWGSGTFYx4sEnJZxTFVdMniAokhG6CJnvj1S88mQx",
  "key33": "2cYoRAjLQxGxNTX4g9Q7dzR1mf15A2XJcnd8SwALAjf94HWBnf6mT87hQJQNbn88pGK2iGCJUNBeScLUCaUSwv4k",
  "key34": "45ncwxmCGGMEhkePBu9mz1cvWL8er2bsq1VsEiWyi6V2qpKvcwQWC2hAvB1PpK9xe7t3c4Lm2yZ53VTmqy4M8r5c"
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
