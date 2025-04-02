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
    "2GfckRB7KSszXv6EYQxwzmts71wjz5sM6VBiS7DzzpuDCoNxSEWZ156gm6DjUp8J5p4XWxFNsov9JvsurfcvihWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFCYjMSURCeB6iaAdanV8NPAm8JoToeH9RcQvh9se9Jnbcqb6EzZ8eRsotgRaE3Lza8u3qRsQKUVRc8xD9Pe65g",
  "key1": "t4CpekLNEmczRWqaNcVGnS7SGTXktbTTY9m4X7pQ5SxHT3V5mdErcYzeRvvjjyNFGydJHdpzBPuve7BE8ySRfn1",
  "key2": "3NVUfEVLgYgVwrS37AGocZ3E8zTnihZhRzD8w2xPeXbGtfbZEbGbNAysn3U328De1yXshUBnfh6vwZUVoB787LFq",
  "key3": "4tTukQjwTepcx7RHmEGmZmh43kDRkWidcyK15sm8GdQv5h77x2wbMZntGJmKQShrcgfXfwjoM1nKR1A2xeTRdHjC",
  "key4": "5ZvnVysH6WovSk44ubMDM7rNzYSj65E6jStiMk3xZpStT7NJTCQ3fYbX43Tr2R9SJRQR52jVhyNAaf5ix4Ko87tS",
  "key5": "8Up49ok3mPrVknPovHNxCog4hQCA5MVNr1WAM7jhE85tv8f7Ssu6sZJeR55Nh83tocVBA4ikWfTX2uM6HXxy9Xs",
  "key6": "3CtQ38rFrUAG7MCAAaGi2ajenUhVeqQxJkPyZNQ2oU372CiA3pVFHEVgn3LUTUtLJ66DG2igbLkSRenhPFvUyXUs",
  "key7": "4SXzagSZhCTC45tZQB1AWRdiNiTg13hBCM7mpxZ2sMZryszMofgseqimQqhRnqSZ5BsU2tuBnUmk4LEqRzx7jXJX",
  "key8": "2gMyaVPe3RMcjv5PGKj3Rz1p3vAPXGi1yQV1jf8AfmD1sxXubMZborXTBYfRcqmMxoy6N22iVeP823TNtbDXXcWA",
  "key9": "4vqEMcBPeh1Gp15Kbxd8XFNymeg5wagY2L8Ypixdze43ChRDfu3w7TfKLk513Ke1rwzfrDEYJXaoCZeiT8sr8znU",
  "key10": "tCBPwDenAdvMydtmaoK6X89Hyb3uhEy6pc7nKEukAh7sCHnMB99HSw8vC6bZ4Tk2sJowf2hzqaDjFFSjjz51BHf",
  "key11": "4RBDDTAKmR9vXnBTJSySk1MqWcb6XTbTq2rjLKUn5Brytvu2nyJK9bCDgw21mkkdEvTrxLQv5TPhaZ8XfwQsgUQx",
  "key12": "4hgmFsCMJH4DMs8BiuRrmz9vHX4soBbrkpLMQNtBTU5BoHehWpfPUZ8CFMkYeG5Kxwkxc4CnXnmqzyG2ULrjV9Z1",
  "key13": "3VU3Cwgejek2B3KehvFn8SWqnS2wKsMUisuEjvTPU9VgW5omLgL6SgbshpJuUPSfd1om6ccjCTZWM5GcRaM4xk1R",
  "key14": "EgK5E1uUsjRVdM2MqoN4BA5FoeHYjfD2xappuZRKic4KtwJTbyYcePGUaqMguFwCDyZifAb9Ao6xDEJPGdKwjCA",
  "key15": "3RPcNQ4t7jJ62kRjVEFNnBFzk1TAqiQ41cUcuVoiF8x7Ao4rni9kWKDUGdhubyj6M2PrHMBRD91tNAEVgBCucTrQ",
  "key16": "5mqdeNWvgvwvuxQgED1RQzzcCxJe8bwEN5BuEdkzC5QME4UxLE4aiL14A1LiaukJjDnYt5YgiWYxgLr6FocMez2i",
  "key17": "5FsBu2Eeza9vqofgZD8CvENj6t26EUAvWqVxNWACByhNRPRvd8JzQhcuHo2X7deRwK4jkEr2f1WGaZzfaK6iqb3h",
  "key18": "4i8Ja8CFHUGfoVN5PFJ7H7k1hTNTrYFDPmbHwvYSdeFcTq2QkJXuMTeZsXnien88PecnS1ePGvfcDJDZ2GsjWdNA",
  "key19": "2WrX5K1cr8cj2MTH87huGXAGSSMLEUTtuznnTbaPayaE1KJJbkdSXmMG9eoVbr8rfHhCspdK8qkmqwUY4QifxjC",
  "key20": "34Jn4smFSV4Vk9w1Ub1bALvsMP5FjtbQJu8TN8nDAs58fNGABJ6wu5M1Rxkwv6GkXsAQLikBcUGuMiwaVQ7Xbaki",
  "key21": "2TfXABkCjrk4Nbx8uRQtFnHRpPwtU1ASEYv3oP4Wg9VvGUsNKPbzKjvGToUn7CkoprwXqzZZWn6zRNVmeY7QhvA7",
  "key22": "2peyVC875DxgMTwRXCuWtyVandKZpLiHo8X4WBzxDGEauemFHUyBsbr9gBD7BBcWayhoeqTjkY2neoRoErM5yKfm",
  "key23": "2m1dLWz3bisqntBNxvEqGrPp9RFJt722FGGg46mhHinAtFFc5jZsX8jHThpbvznWRp3zNS4zugcuA2EU67V7p5B",
  "key24": "4LYZL32KRA3Puxp7DnbZqnvQ5dxS8BzGVeZLTvxFTn13dUw3LTdQH6N8XiGm6JXe7r78eHxxPai7zP6nasvZzgQZ",
  "key25": "3UBW41bZxQyr7N5YGwNYDoeqq8kJ2cupS3guPzmx5PVF8KhJFdCPYYHxT4CZWrXyBrKZrYmJ4o4e7e3X3n2QM9X",
  "key26": "61dXtixQdZRYojgz6bN4FW3grWas1rQ6ckrPexgr7zfEVvyB9CoSeX48rH2UNNdJRpn5ejAQU8A9ApQCUWkSXVvo",
  "key27": "2c9gBUVLRiACQSiV2GarQoeYP15ADEbzJ7PmuYqnC5nE54orwTWUWgTJUpxy4T1yLqY2ziBGBBdTLnhJjrTvWTCb",
  "key28": "2rEjHn7BCyzFuLmgXVyh3sf4TnceWH4rtVr86pS4AadrzcEzw6LjR42wA17ZgMbYtdQUJMtLJgJL8KqkSmJjVgpU",
  "key29": "RBE88dDiv8pRvchRiRkCuvd3NhKuWwyTETfQ5ghHpqZaypziPCaJKz8RjBWhJ3btUEZzWUwBXu7Gj7QmeT47kbo",
  "key30": "siH7GYpyzTRBEXKjBWbHvZG1GJo5g6BG7C3hEDx8Qno49f28aMQyNL5qqgaCunmmzT6Lf9uga12uYyLasKhtxUe",
  "key31": "3ZjvmdzCa5atfFqJGsa3eBSSgMDz3c2s8QUYd5kjAFAgNvw3ihBYLrbBvCVeV5CajHDjXcums3TzfdJiyZLfAj9",
  "key32": "3PNEGfnGRSwn22cpSZHqoskW78PWs9Q3t5FrkfRyt9V58LkWWRr21U2zAsXhmi7WSFarVeijnMi3A2M8acdKh5uy",
  "key33": "4BwrGj9Ar9J1m5qbk3r3sYyXyFmvHkaAyUaoEoSfxSdUtpUMeqkur84SF9haq4xbDwbFWaBHgHWcy7Zkzz7g4has",
  "key34": "2SK3bGeegqwQeJ6yC5GwTDzGpuf2iqT9PBp1VUWu9U3h66of8NM7EkpWd8KcBQEHD2zgDyrFYK2E1RvtfRquKTJK",
  "key35": "4YuMMVEEdhATgxYEeiC7AvGSz6hzAbTLqUcaSbJpEb52nXdxW5QafdYScTS7hVZjTarNDNJHqA3Gr8Jpt4cVZJTZ",
  "key36": "5VXGDYUH5oBpMZPiWbES6apVhvjtfpwpcW9MPHYwLg9EKvHrDtk5uf21E6ZnhSskrVGU4XK5dvuvUQs4rsF1CGRr",
  "key37": "Xu1WGh9CaaZKABwPxDmpG9suq6iKm6HeXGbhBpShFcScNrXFrnKpDKLR32bd6DYjrQvCQkbi11JfCZ2g9tMgGc3",
  "key38": "4Vk7TQKstiYY5UhfEgDuP51pj83xGRKmsmXZ7RWmSndaHNu5YYnTrrERracFXkR86NQzsKHRLPweBpLbShSAmyKQ",
  "key39": "4PjP5sBzpJnwugiPYprj7Z2ijTnxZV2hNT4suG8Q1gYSQv1Li7MhTPoBkeVLapXSKTXt68wwkXjkgFmcmuYwRWFE",
  "key40": "5ZXBYbEQkRjXyP54gwtcTA8FDfoMGgov8nC5NjT2KeVAQEzsujjRvM7qkERmyycpH8yMThVVdNwyfxS1qrYT3Y1h",
  "key41": "4HCZNf5Q3yKFJAPVpAB6XvB9g7BMZyrTBALwY75zcbAKk7K7vfhPYN9Aax47tKAbnLgJtFoRiwu2PbLDv4RFCk2F"
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
