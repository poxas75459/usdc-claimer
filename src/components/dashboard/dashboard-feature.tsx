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
    "5KmSP1ujx7MtFSqup7QUQsjxDp1c23H94AhRm64teYc9nyUHz9oKvwR6p8joni7EJyg594U6F6UN4td4eACCcafq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emcYurJcveYjeoTnEsEy3ZKypN77wtW6wdd14Lh3Sqanp7fNrg2EChTFXRz9wVnVdfYYi2db5byeWZVRmSmZajK",
  "key1": "4Cim1pUChYPYjjyuRXSf3G4kHToE7jNXPKDK684F5nmva1bJn3PQ2hroNDVe3TLNpRiv5bVSmYBLbWWu8sxLPk6D",
  "key2": "5MBUEnq3J8fUL8qxMrYD4WVZUVbXzfzkXJvXtvgRYoK4keH2svFtBpnYcrTyeQW5tEuPA5a8YujehZ7spYmiXeee",
  "key3": "2CVdfke1Z1HRbk7ofwoGxVFfLBC2jvDMfjGCootMjD43x5ZgoELGck3QigvTrWwer6wCxT6RNHyQ9WzeYEcgAXwb",
  "key4": "5Tf4XkhUwz69XzCTZoMddVBmQeMWb1qoXwYU2QecTk9XhYGiAwrrxXgBUPBjm47ohspWEmPszAdUvtKKqGJfWHPG",
  "key5": "31Nj4GeXhaos5QUYFxYmGGxLVrRCnaMUZjsJXt1GqaxbUDsBfwAfridd5dAuPEk751Fh7V4xxjtAbvDZmSb7CLf3",
  "key6": "55BdTWm6eiDtgXMuTrjxixAzvZNcik2BQhsUSycwDiYPgRnzeBe7UewudQTaeLeMW5itn2kqi89xCBBJp7Svpt38",
  "key7": "5jpeKvHz6imHKosozDjomHFb4vJ3CVWspqLQhRzYWdTZoudmpLF5V2z9k3RJyEJyXj4oKsFTMKKmAEKX6irSsp3S",
  "key8": "3JPVMDm3Lv75DVwo9XyH8bXg7jvHGmF4ZizGqDrs8k5V2cMKpDUEdWWNpM9qu7v1xZNFStNAnLPTQC7yTbUj1QqY",
  "key9": "5coDF57rATTMBpzN6Cc2fgg2kN2pJJX7vuawVycXsnobbRf4DGYJrJc7SUJQhyV7vHL1MnXF9Kv9rx37cfWicwd4",
  "key10": "YK4dr1s8YrWYLxasJXMTJwqVP5mdQZZx8HCHrHup2bRuLLd2k7VZAU88aUaArWNJAvZpXWuGVvoenMQmKT3P1d4",
  "key11": "5gVju5LcPuVFTP32Efyr3D5ppqfjWvHqEzs845jSoNPzzHQo8UWESKC8N7XJ1EswyVBD4aCYNnPv4hMKxuLJp948",
  "key12": "2xAnnRU3ekkZ9inErJ3VRPrUgc2TKziHQMGdmzxwiwbXP5yAzt9hwwVic41xqgHR6PFqFRTMcG6EwEzqfoUcomPt",
  "key13": "2bzDbfa8eirUdR1TAAYVgPfaYLa1XRgw252ivovE4VzLuNYh6E36QMKDdEEeLa9MqU9twFg8iwXJJnvdyCSZ1dJv",
  "key14": "kSWeWErnYjfH5oh3sfNr5VXyznuJ9komcFPqR9WxUfwTXLdQBGRoYFLXYwWB8zDPyLR7gmHwRjT6wjEZpAPgiMH",
  "key15": "2fKqDZAeG6kZj9ZHtu27uXpn5KhfMWCXJh9w4UBQ2jd14xQBcfGA9ShpoKkPQAyADSVQgEXisVriv1usMfRTTSCz",
  "key16": "4FRfHQiTe8frQBh7TqtwZuN7CDZ7V8iYeMzH3sWMserNtfEBWRg7FoW4GJKVgAtRzdKR6T7PCEEAkwTxR9mD45oB",
  "key17": "QGoEctN8uKpvEUJdhKZMkPZDMY5GJvXBCcuYuykSFhRTEGzh7nfoKTkhkfyf7TjqAriuYiZ1Utwjp2vDZsB4yph",
  "key18": "39a5M21qKLoJHyjtTYEbu7NhwibhfuCcBjtuboAdd689jgCFjmwAGd4duxFgra5t45ZsCuNBMuhTpttsd38gYBq2",
  "key19": "39Cy9UxGiTvFSCFZcZVeL8XuvbD2LFFUgLUn2KSD49iDNFT9xvbWvo9WtQ2syD3cePAryFXnL8iZeZjWKotrpC6a",
  "key20": "oSTtcDoKz8pxTAubj2KwxNvvqvqerMmfQnUG6sAZ8muM8nEVFXExefjkzKdcdZ3vgp6CwpTiNFNHLEyABKCT3Hf",
  "key21": "3jFHxELvuLPHvNWVTrTYWgvpWsMcNWRG5gSKRp7UFymaDDMogPGsHWzMBk5ko81KiTu8gigEKrHQJ8HvSPFoSTPS",
  "key22": "5dj8F2cwt9k8SEYRRmYhF3Y8zqnqh4uwwTA61v8k7GL1AQgxTdEqJF7eKo9haJtrFoQrwa5T6JAyHibHBxFtgfGa",
  "key23": "3YAGNCqZBdgEUt2KcL9tGnLCy6DzCsbo1TvYs4bAKe28ZXVAb4A5qVwEqtH2Seff74aqMB9odoFw8BbXSBGkYo2t",
  "key24": "3XLY7GMdhRZqokQRJGqtpZfqrsEXdHRFawcGjHXTxRZWE64kdiKFEMdzkHMi42t7wAujUQirE4kAZWeWeFpTGyq5",
  "key25": "3kn5pYSW2vTWVSYpkV4nEjgokmWAoopgQFx8cq5QPkW5j3frc4Btf1u6jtNCPfeQBAka2VphhjKAfAFmbVVTnFnn",
  "key26": "4beT6GivrYCV7qhsNY6KzukDA7GtZCpmQ4deHQPu63J8c12MPeUdAhqsLzR5fr9ev8ydgymakM1UKaPTQg1vpSZ8",
  "key27": "4ZYKyERi2P2WXCkeRZMuNRkfMH91jdk8zfWebextqUoeZjgsx2SECgd6f5uJPKXwLfVTNbJBYQtyEaZTpkkywKfm",
  "key28": "3M4n9YdyT77n1PNABNZJfTrf9tH4cdtDVX3jB7hTHtEikwxRnuJhciqCL14zXQ1gADZPEqaQJjFtgL3gxAde4dJ1",
  "key29": "61gu5QLEp2reFXzTzddy2wtn6NmKegLrQMRXX1HErguXCxYJSe5bE1WfB67kqRdpNmvkYzbCK2YszperXYhuu3UK",
  "key30": "5aFExGZVd3ePZzmmgq3KBmrgvWEMhnvn84ZkSxYmDQtkUTMdngNPS2sz8YYhnhfF7RVZbjHJQjDR1k89Vc5m6iQM",
  "key31": "3fZrathohqTJX4r7CZV6oKCPKFX5EPpbV8pn8HneEPgVPWM1BvcM4SAvssrVwJhkDJ4LBjfF9zxBkBGUVzNSGvuB",
  "key32": "2RBXEXsC2ssUAJvnvzBFL3vEevW4byzmerx2f9AT1EgCQyed4PddpQ67xSoxwptJeQo5XdLPiy2vV23hidjbuTK9",
  "key33": "3ShwZorfwc9BbaTnaZtqV2retAsA9nhkDUuJGtGo3FW1uJ1kUvYUhYuoA2CSF2LRaCRDNEkoY1UrJnNLhuKygaYc",
  "key34": "5izRFewndi6fb6LQyF945QREaDQZJRZPahT4JhLKaT9Mk4mMs9bM7B9ZjV8AMWnANjWdxdDSknejLGPrAjCKaUzj",
  "key35": "4GuwsyrDZyAMPZFoPUVqUJQSJY1TgwAUwoQE9Mjyb6Y45c4vq798LwpgMwHXdKmSTJAFVbseWRqkbmyibQxDoxG8",
  "key36": "2RneeJcDDh4aAQwfGDLVR8o25UqUCBWTJcvVn4SRW2ij9qCica4VpwX4num3eoFFSktKbLEGjtFaKmHqnJ2iEN4R",
  "key37": "5DTRoVNAyhkx8o4eBwwEs5X9BJ6ndFo1wBtTgeviNZnPhHD1FjRymPtcBvorjwtnWDQvwB4Sj7hwDuJsvktWQAvv",
  "key38": "63xxfmyKQgHhqp3a7LvFEvmNXmnYeGKF7vP1S39HRp2Wk19fP5VnHcmmwte54pXBkrmciPXsEexjEZcUcRoVb7Po",
  "key39": "5nWzSG62S6hBXkr1A3JL4TqBoDXuK7Hm2eXGwHodBaW8YdDDj6jd6DqzEd9RSHc1dFcAh4NhySBUcRMyKCNYzQmh",
  "key40": "4MpLQ5qpwoG4SfzwpJkfkRKM5ZpUhd1WRdiTBX3Az6Yw4zTk4PFQsNnDLyau26iiUK473yv16YqqhyScx3SfrdAr",
  "key41": "XsX6d77B5v9gf86fF31arRBtfcGPPoN14opStfW9VyxhJkzSHk73iCtczJPyoRUqpeXvXUEKsRczvre46p4SFyx",
  "key42": "66GoUqdvpvwk2nf7SZBuUQDSrQNMCCVyaB4KmyaKYxR4cteKJys4zLjPwRCCBDQ3c27jrFUxSRwKdogH65tfakB4",
  "key43": "2vpZJs87CGZRuekv2QJcCViNGNC7eALJFuEskwnt7CDfbaw76hyRvGwjEYnAMvLoSgnG7UpBgp9yhwzKfY3aoSWB",
  "key44": "5atTa3AKaGbxuuofVMEcctofdMYQoWkKWEt3Lht2J89Wr7T9xymNFvoDreYjJpyiusDXp6vXiGVtimfsw6WrT1sw",
  "key45": "NHCdKNpywHmdrtZoty7LwaqgCupQ2j5rixSiYXVhFiCcJkC3YsoHqJ5zmziYkA17nWF7DgLV6yejoLDwVS4a4Hu",
  "key46": "2VHaRWCqksSWDnuViZfy1bYMvE7Yka6YVPXg79TyT6c9zAh9mqKQvpsh57r4Z3HStz9gHeGDHpPYRLrARNmC3tVe"
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
