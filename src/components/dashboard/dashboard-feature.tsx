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
    "vcKQwgJ7RACpcykXLh54kjNad25d6YDvy4UocSD18mv4ACY7tAW9P4hqfoDD53epiz6w1jywAWQzUvevbQPiZwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ue1y5T5evcd2s7ckAiHEVR6hndZsLUVWbPq6LMAB6YGxFtyybme9DsbYuGEkAyfuoucV8KrgAsvJCraGWhnDzGg",
  "key1": "Bhbzu9hYee6meg5oJGDU1EmDrtwB6hQKysDMz6zyc1xLw5X7jw6htH5W9mNbA8amHSgx7GfRpVvwYkBBDLFqVPv",
  "key2": "zbr8DHpDgGJn39ZQzs5Mwi9euroKYxc89k6A4yKkeef5x5tK46Zz3QEMjMjh4YcA5Y7bxY9BQrcFkzJNdtS7zxt",
  "key3": "3yUSEbZekRWVL6axULgAuhcyVEKhaSBwQUbTVbrNu88SUr2FWVGPGv63ZScW3DnN7vKAqdDc2TKxBx3btxRcevGx",
  "key4": "62myGUBTGNa6TJ5KgQNzJ3wyyYvGRLJmaBNDTYgsrJYvMsLDrp4GW5HrvffWdd1H2XVdFyMGudvu1zEs2HfaPXH",
  "key5": "4KFnkanbd5wrfSodri1u3rX9gbHGXWSp8KLTKVEiFmytnpJo6a3fQXK27H63H6HALUhmTZYsMipPe4SbKofoQTu7",
  "key6": "3zsT7TMYnZx8AqJCRHN6TzqEXwpNtjjf1Lci5fA3vRgD5iQX415kNkxmWxYPfQSd3HMXWGakzJw24bi3eDQkBmTZ",
  "key7": "2V2Mb1TA7hWLfyDPhCZ3MT3XvkabYf5n3SCVFtgaLJ9xuL2mDZ87tUt85iro6JZWRDv6kpkumS6JTBgnoppNrj2L",
  "key8": "2QaEyzxA2hmabasYU9N1XLPALPbRpHFtnhePMGGmGQhqZQTSdaveHS736pRg3mXxwRzisPBoq4RFjwGvfjX885Bk",
  "key9": "3XYEkvHQwYncuE6mmFtYHdeRzvmjxuzB9JMtqVcVECi2qiXsfi7bLbfP6G5FQb4Qf5JznTQy7meKJEeoVRxhEmtu",
  "key10": "Au4HBG8pKFe1LrPsAuDpE6MJxCm8iXBkovHhg17DK3usqruLniBDFFVKJsW3hJVzWKRDdvPxGLUzZee8ZzCEVYT",
  "key11": "2NaTvbNdMBXn9YBs4Sq2SqtK5Mk3vvujhziWBvZ6TA3qgsjDY59pxw6m1rcNzB8VucwA8sT8uXhQXT6Yv5vRKUJW",
  "key12": "5ZvwC9eJCbpqPACSbfreGtSA9hZ6Wht9Uy8RaAp31P7T23bF9ctpfEZLfJiCzNytnUb1QyiYvF4Nob5oAaQ48RAU",
  "key13": "2v5sNxke1yxnPQo1ShA5a77pgiNCDjDD3MHBsJ59ogDApNpfVY8sXFY8jxM3YVGPA4LrXQAChiRz25Vj1zKBaGWa",
  "key14": "2tfSfG9APGjXZkjohXZ8A8ktqG3ELo35RvvTLofKBin49c9hq6rizb3EuLLLC3PomdzitDhBzzE1jkjJ5tQvhmPm",
  "key15": "3zWF81dtd4NBu6TcLbpgTEnjvoqsM8JJRLfd8ActCQtnA6kVXUJPUHYEvJpX3YbjRJJ12CGz3qgeFTBHYdN7QiX7",
  "key16": "5AQVokzBiLidGxqEF6DguiXjV1aEuHe1Ftq7C8MPcwCp9a5Rvjwj3xnxEBrKKMQnsuqdmgSTmdCKznCpusg3ScAT",
  "key17": "2SCFgNvs8kekwPkVMMndWTrePgaJd9NW9AMKnqbVmZXubtNjGoy4Gp8gkg4Mx9TT9vcBDMY4yNBwNcAAzVEcsXkB",
  "key18": "3QunM6wDhtxstLaSL6BC5YopNizw5D4RR3t3jE7GNrUR7MNKT2WSbpuBX2NbcqqaGwS7sj8XyreghYzas1hxmy8p",
  "key19": "2yH9ZacvX9U3R38nv11GeCBZo3AHRQ41XX2aotZwQFayfFViw1jacTz48Tn1Drf9y6guNxFzddDCSbjNv9tPaKP1",
  "key20": "3AvAeon6mBSD5bRVoDAM369t7ziD29kVaGkaJfXZzreACDYqijnSxVGR7DRAzHdScnd7gd3z8cDLswTLsycCTjeo",
  "key21": "2w2WooxjrLg6aiNPeeUPJdEsYBoexe6fnVuzbJeT4bmxrvUZraUJ5xDkQcX76n4ykQGdR1EsdYamLUJQJyoJfbnS",
  "key22": "3QmoeHakHyM1XpEvYJMThhKr5WwBGyBZUa3Dhx1toYNKhasMHYNQNfsVXa8rbRqAYEr4RgLDTi714cceYb9w3uRA",
  "key23": "3QB9C1CCQQDkw2Bxfkto57J9ERRfjWhPBxA8qUJXWHyRC2Hc66zndjddAn26LoNSe4CFtwSwegsWsJqqVJygUCcL",
  "key24": "4Ns988g1MMU79gGD9LZu5XyL53nYQPTzyNekNHYBDKAGEGGhgBdt6dTDUTP5jK3SJNU9GDX2PtWtq4eyUEgSMPXA",
  "key25": "4JnZjbESEueVqqmZa6B3Vva3zD3sEX85u4MvSVgd4CR2kRtp8T2nepe9Seb18Qq2EUNP6tXdzywQ3Fzha3LQMTbV",
  "key26": "32c6KRoPMofrK1a4aUZrrkMEDQk4DigyRtwyg2sVSzbeHJo73b9HEtcByWBAhsVcsbGwB5B2CyJkVR69Mnij8eFe",
  "key27": "b3dRsCUCpxRS318HgLFHpE5ULA6MbiW9UG5dcffK9EDEEAqRdkYtH5paJWBa3iojx3xNMmHN4Sc5PEUq9QkcPNL",
  "key28": "ncsezjh5tvMCLHT1NffcG2oTrbPBhcZ96xqrhgxTwzPtW95azPTTZwiMXkkNa8vfs1jZ2zNi6nuSnC6bobR6HWi",
  "key29": "3dWksnQ7p1Rt2M9RXVKUCVEBDtUkTbagQLtGhyGUmefxyVfRivNRsFb1ki16Zxd5qcFAFVTdXfNGHAfhFS85XzWi",
  "key30": "32HJRVoiYWAsohsL68a7emwKqfE1JT1i7b4W3y7FQM5BRdZTbQbMRAoXUjEaSa7K87rkySkVziXrK5NCkXFXsLSe",
  "key31": "66pdoz4eqA4Kr7XC74kGXZHDvjcK6A5jXaZWWrhYVjgrYDLAckvmyvB5CMTVqX53cLu7ttYEWQM74fAt4fzwrmnL",
  "key32": "5WG78RDs4XH9sTC2n9wAu4VcnB5LxioSytubtshdGcD33KvU1KxBDLaXexvAqnL5WY9irjJEjVv97oEHgLQa3nnD",
  "key33": "4T8byYE4XccMHJuUWSqVKAE12zxM8C1mxiQot9NoWLjbpP6q4Jaxzsod8vuwRq43zpReNxDLmzTRxc2NEpjBiCc8",
  "key34": "M55b9vBPffEyxpSFsXjhpENsZj1CV5PREanYFJ2Hf9VduffPgX6zW7sDDpmhGm5eMPN2yRyYiTLUh4kA2HsC9Kj",
  "key35": "2YSeTAaqnSNc3vmXbqB2ts5n3cw3YqaFb2fLdpZPEyfKXhPQpSfCfQY3xPdxznUjqJBLXXG5MP8T78vx1sDzDSme",
  "key36": "AV2NBJ5heztuhi8XsqBpF9RXF21za69736hsAjxDhRWoByqcEog6qQoLr8mMjrXCv7egEccTqRVZnwLyP1xu9jK",
  "key37": "41CrHid6sUeiTVSZSSvbGM8BcLkAbNmsnF59Msb8A57V5AaCzP3fRSoTetjXdUryd6ZsHCPCLf3jorZKamopjc2K",
  "key38": "idC84WyoW4SfonkeuPyfWfmgYojheCCbSeQXnfUaHb7GZaHKn4pgA6fZjLykXosodTt2h5SZWy1dmVKYv2fKgQy",
  "key39": "54KyTPXsgYppoA6HWGrMoqyFCmE193jHCGzMVzS1r1TXgum9aSvYQDR2eQYsHoAyhwwZ4Bb5SjggfUeeWk2wxt9D",
  "key40": "M9m33bequeoWDLcxhW24gGXyfT73AWYbQGaBxu28tqxr7qRLChQacAVofxL9AmiBNhWLk8aWSgzSQwVyJpJ5GDX",
  "key41": "2RGxFzH9E1abX5LBo32w4aFVDiAvLaYyT3B2eDq1TogWhh5VRn8eEUJSxY3Ath8G4whE7crLzXL4J3jvuLr2pcGT",
  "key42": "37jmZzZMnozBdfckLmYYVPoptBHDe93PXqbvqEapqxvFu8jdSpFyycZTrQRbxFsvkNFYizyX8VcjqizqYMs7XGLJ"
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
