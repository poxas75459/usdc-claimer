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
    "4aWt5J3pGJvRkN38QckQAKBPayrihayX55Ph6uF5qW7srqtHmzhwZx3DgG1JR9BCy2vLmF1BFKpWiiRibAvmFKBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XPvyTJL52Dmu4T4W8Zgk8gGMBhgW6z2ReJtzkDByZS42qyFW3wb8FRT4nT721ysmYAJxApRgu9TosVTfQxa4S35",
  "key1": "3DqcsZf5uJF38yYkmTDS4gtF1HPAwWpXZ67P9N1HMSU4zGYe1zGsFpesMd1uXP8X3b2umkjGkzYqonLdGhmEMoPm",
  "key2": "3ue7BPPaj6VgsE8LFpQzu9MrLVxZ42FKxzGN48hwZJGoK1dyfzrMZUR6a7nEKaJvKmfCtwaymVkgYZKQ2ZeubvVs",
  "key3": "48HnwpeYvDvHcSoZHvCvw3DXn9QiXDXs8Psk11ze3Z6jrQFexzj7avkkyzAn5ZSMrc6TMTM1vxj5mcFedzSnsVjD",
  "key4": "4sgt9FGQCegrm2Rz1ArRLeQsTnb9phVnnL4zgJFFCwo3trJewTVUM8SDFCagCdBBrx6o7Yf14CY62Ky2Mpf4eCr",
  "key5": "3NAcsTJMw8bc5dVjBBo3MsrFazrZqywH8HW2sPzQdyYtRRzP5wZfdBVFTa6XBtQ4LJxWqKzJtTJKNTPxucBe53KG",
  "key6": "4Lb2BMvammZ3tjr18bDUs519fQ6Jv5KUCqeqQQwYm5DmX16cMz82eGKf94ZpqBGndMP5KrduYNUzCoM6pqEKnqJR",
  "key7": "59bDzuShgsDGPZJCNm89KBWTS1MWBgXGTVHkf8aLsRbhvQVBrm5EYHMsG9Eny395Xb7RiHdupxR75Q3LiNADWq5U",
  "key8": "43KFiKSc59a2QFACo8PHmAkrTsDaiJSYWyeE6FozmmYkeDNG83ZNmbvNppgr5gMSEgMS18ZdFNAkMx9sUqZaTnNy",
  "key9": "5tmJAiRWP3BJAAnZzhjb3fFN6JKiLQTkoTPvyLNFqtcKLMyXpidmCLGZR1DGNYFM7mUfqekWh5JDAXhnbXHnydbS",
  "key10": "2kgXtnnamjkvXgy69c9C33MBcj5tuzQgDB6ho2MSQJJQ4L4YjTK85Xf6A1xa6FuYoDo1icHx8nZGEVtqWgnvJAsG",
  "key11": "3bL9ngd8Byzhz2d9ScgXe6U9QdKe418K4iw6jW9PR84AzKg2ppyn2J5mXjRtAr82puAZuPEu9SZcxMbf9ysfTG9S",
  "key12": "3xKg7bGd2b1DWTREBDrsUV7qkwVn7JVdWi1TPD2qGYXrYicXFHELAKnf4bCeMSGNaP9x61Nna7GqyNDkmGYofm7F",
  "key13": "4CAPbiEBiRzDw634sKjcECKHbVYHf2EbWeFZTFCxKSZLBCEX7DVA4bDRQvRv9pLhUo91ifehnjRHu4CpjyVSQWu5",
  "key14": "5RkN3mtr4VLjBJYjdT2nyedcuFaY6gqVWPqUAcuLCZMxjf4Pp1X2PrFvhAFmVLSDRqGw7rdUsjHjrSvBHCBcsTbE",
  "key15": "4nzswBmC3agX3mpzwo5hiyoxnFiYaRSsDNnFVvmP5ByBE7XQo7mqyUfw2wQJDKcqJTFkBGMAqXmw9mEhakfm3vk5",
  "key16": "2gKgqQ71L2kdgUhLmaKjv3jiqbkvRNYqtVph5YjDAtkEduKZWhHfDioA7ndcMDptbvpDr3t5gwtzNz2bVAZjqTFk",
  "key17": "61MxKQ4hR1DeAZ8xPvfxMP61SnhWvNWnQqX2cspoSfwpSphxo2GAvzzhVujYjhvd9NCcaKYqZGKUqsv3BUy7QdSS",
  "key18": "3q9zxxFmihCHMwLeWAYLSmgTuAkAffSnehtv6WxiG3MANa3Nn3vmoSLaHjGxSNCjqhBWXUGB4GrwmZE7YZSr2JkN",
  "key19": "3q6LPwRBpLVPrrxZxMpZr3z4P3ZcpkabkjAuBM56zBtVWRrUX6M4Ae2dG9owinmT386aeNGMgXKWEjE5FZHnVhEp",
  "key20": "5cpxr1vkNEzV1WnKu3jZjVKWtRfnNq3p5YGJHQyYohFpgArdFxMbwwtpPpc3ydbGcosKMFt3PYtB3RftzaQARv97",
  "key21": "4RyXuF4CdCSkLMoenX81BqVzFcewfuUhFh2AGjKSK58N6iADk1tivARmLDvo2TjTW3tPYbKuYgFUNtkuX3gvSej4",
  "key22": "2KDiAk5ze4LoMrt4cUExGPMzWZe9Z2kK9oo99ipJcMbr6ZSy1152jyzMUoprvddggMkcN8Gudjch19Q2Z3XGGi7w",
  "key23": "4bQ8BVgHb5DK8tZkyoMPKLn7Jec715uNVKxUtMeZxTjM9LnGyVbVu5NVzmPD84vb94gS2fbR4n9hMKuN9iSRBjiM",
  "key24": "3fuJ72kDUGLAkYJfbCe3fQJCZQKi3D7K4MEg3tzbqNQtMEiAorUVkT94EoJENSN6BUL9fMbcvyi68QCvzy9zs2QU",
  "key25": "4iArapqdzRLYmeudEJeQTi3eKqpwhkJnsvpMrTfYuL6GswEGpbdvY22e7S2AkjURpb9bSvgeg6SeMWr3wyYYF5Nu",
  "key26": "2foZmBGt8pdYpT5NkDLZ2X1vobcrg5HGheUrt9YfqtNXHoskUsvdcBEGJcU5o4KzNuvB69AzBLmcPb3X9N4sFK3Z",
  "key27": "3g8rb1ywyLAwxUyJc5Jr6w131Ron4rGAQTbTekUGUdCbGcSVQWc5QP9ej3ko3PF7PZy7WNGq6Kf8TWj53nb33w4R",
  "key28": "3t8kGxexbDktyE8VDWuy7dvSLeMjq1hF1ZSNRzz4jE8EGwX5ofWR7z7dVTZSkariDZuiqdtPeRZS8V9zJGTzyKK4",
  "key29": "4BaiUR9Q6jwqXS2u6DEHgJxr82xZXT8ocpFDEcGi1GgEvehNh7Umm8UEd24GmQvwNtphxhwuUA8kKc3quoNMNpyZ",
  "key30": "2yNpcdMFRiTMRCpsQFBS9iaDSqUa3n3UUWBXkbDjHWvFQ3GV54BWsVGHGQGmeiRzE7kqa6QZyX5aKE8U4AXMHsh5",
  "key31": "4BC6DBDMGG8Ubuw1BzFZdyWwW7QkSrzbV9ekxYCiaqgmuVH1YiCBGRYQU1KXLvksByjMPaHc5BdgHGnPtDPZcSdh",
  "key32": "3rMrF9oT2mbKvvnXMQUfJ1C73hnBeiGeb2WCuHsA12a65kNMhGZeuGLTFW9EzddN8wvVZWNaXWpAT5PbGAvTeo78"
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
