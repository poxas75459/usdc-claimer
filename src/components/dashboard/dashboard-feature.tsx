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
    "35jpaqSJ5qAW1duKp4RccH8Evxp1eMApgEHzKb5oecrawLrWNCCit3yZYrCKouQB3b9tuq5P8AESF3c3SZfxHWSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAYE79ToddKjnVoggDUzw8chnDwbP847eek9fghPnKGLKo6zvqyKmfHRF4tcqXrfaXiJEKBLWimGVyqo7M6Fgqu",
  "key1": "2Re2Wkj7kjmT3apRkLMqtqEo2ZK9JjVVpSsaeoJMdDminMhmHq91MBGoCRGmM7bAri1DZaFgZRMbj5xdJPxNjSvH",
  "key2": "4JbWbsz6kWfcaTeQB4N9cjWz7qVVnvR6NL1N1hPB4aKzADpRsahsMGbyue6N8hJ5PnPJnwRqMzvnaG3KqPwgR8wJ",
  "key3": "38vnh3fG5gvCiBLKnPNEr8ndaQvmJsjng6PtkdcsVkJg37FMtW7rke2yTDMTDmA1p6LY6CqKQUmkTx2FWJNBuoTV",
  "key4": "5UTSjmt8NvGHV5YuY24ZBudrfZ9AJJhQ3G89Gvkb1QRLaQeCFKYhmG8giDgiN48QLxSNKQj5jAmN1Z1M2dSFUeBT",
  "key5": "31nEPkQNAidscSp6fbDihux6yFydVurTyMXXSQbCKbWATBXdTor5cSv8dcekrVEdcG5DZq4ypUiH35TLmMVr8Qmh",
  "key6": "2aspx27ArcjRpB5V85VxSEVtQ1DytijzVwiVEk1Us4dfz6rEoKeN4wnrS7AvPFukxfav936DCUJokGoLxUjZHArm",
  "key7": "HTdDSTofP34wAayTWsaNooirypGku5R6MLvUKzz5AmWNLbp2j2w1UN6wzYDHiE78YxEx5wMep8orDqUq33ZKxZ1",
  "key8": "4ck31KHoWKkuKuVJ2HEueuFymDoaxtcUjMfYXhjFQdoDScuNg4mf35oGU4JWfptqbEAKvjA7gtBNJNba8LvPgvqx",
  "key9": "2UaAA5v2S1fUChiFXSBjTi3XG4q53EzDRNKcm6djbRyuZrcTsg4fmKCvG8veiwt82j1BDXBsZLsnRhrcYh146xrW",
  "key10": "65dwhMwZRe4DHVj2NCNz3sxALoyGxkEfiZT1xqpUbiNUPU3zW9KyKNxFFPawP1EnNTQrspHMnnxmKXQkBC5WLsTG",
  "key11": "t4mxUHeDzMTsr7RZRFPRyYaC2fAZvvMFinU4RpuFz87CGsKHDy8xdLVbJP1hrkhkWCWhfecNvidNz4gKVt1S5bR",
  "key12": "VZeyfC8BuZn51DX6VDn5bnK3SG6Lcv1f3Np6qVY4Czt7b2p5Q32FKkLjBRMqFK4LdV1wTTbgevshs7skRGWxpL4",
  "key13": "3CaoUAF6j9R7e1UDj4PDPmtcBfjv3MBUet6cS6iux6kuByeJRhWBxNXDhBHAbSzHv7fvoQuvqMXacMRbvqr5dGUZ",
  "key14": "2CzswbU5ASjoT5d1czrqFsBicoeJw1DeG8PTZe2oEPFBe3MwZKQ5y8qtPtKbpGDi491ANpqbzUJq3myXphPz4Hqu",
  "key15": "4WtkjGikjnqWGqtBpC2EY5b471GJgnS2TPwjSPEXEkwfQV6rfBc4moReo1yEGm5uYhov9rSM3QkXyZEKsJ3MQPja",
  "key16": "2pWbXKDyqprCcz2nTp8vvwrhcZKD9pLEcxtPNPCZ4Q1F1iLCZQt6wZgGr7654fHefNYQb1LbKmmU537cqaXoEWYA",
  "key17": "3qkCcuV2gAGptRSnbbvMXtvzs9xNWTLVWFgXB8j4R3pYrHnAixbbBGrXJmvxqc81uVUafKsAsGBmDHwBWZ7futNK",
  "key18": "5xE4hdFabu61Q3gbrsaKyb5yV1ePK4gCWr7a4EyTfoVLAAQczSoV1csub6sGQmPm9huBcnGdsjtYfsvz1rqMt9av",
  "key19": "4zbCuGNbbFoakDkrV8RUdYMtkBpsvy3rAEabtDdpAzGazgddrsBA9SsNv9TKsMMtkdPjuaAyyLNJ2HATWwgwEYfQ",
  "key20": "m1q1BadFTpt6N9t58cPLmnvHo1jAyAnSe9Ms56EiSEC79tr7QmsSS3jpyKJhr5BG7H5cxXwo4NZxVE1ComsujAm",
  "key21": "3DK1zyKeM2NPnmYBG5MGyuUDvxrhsW2fzakndy5iWkwcH6ZkENTj6HKA9mvP2XZEC1SQ3c5puAvcby3xyhBGAJfK",
  "key22": "3oADwWsiZMRM1c1rGLT8abBvhRYfQqf2PXJY6KoZsqU7PAHU8v1zqg2c6ESfkXpRiGJGGv7XRGacB1ipqSxhdBkP",
  "key23": "3D1iHxmQYptpUXefxBYTFjmdZH9w51R8x425toq5ihLtrnSNyhDPxi1KwoXucMwcBrsbHy5yZhjuQ86upZfJ9xSM",
  "key24": "gtiWTutEA38PuinqcSwBDwQxoN4sSgFiXeniJSKp7AK55qezQuTGx6qtjzU5a284SjJmpowBWQd2sCrERaeRY1N",
  "key25": "5mJ72Y2frf9sm69qd3JtCeauFtKdYLxx6xErr5eMYZfrD5YVH6FQqZiL91pxwp6SmaY5QGCkUEMktAiMsy9Zox2j",
  "key26": "2MhoQ78yozwqcGN6zZ83KiTQeb2FCxQMr5KacmEg8ipw4mbfzZwF8FDtbHzjXrpgP1JbsBKCQC1CnaTArdbM1tMg",
  "key27": "3r2rTXf5rsjkh33aD5KPi7XyFQBxtMdkoQfvhpAUCofTebtGvWGdrpNkPE5t1naRkmuFZ3f95PXHXQEvfA5Hcwt9",
  "key28": "31cs6SZsBzYKQWJWqmfv2iv2KYo39yUP2AQo25pBYMn2sm8k9VyUkebFYvmXmtEQ9YQgyfWbzk6tXZdEap32Hhfs",
  "key29": "Px6h2Az9NPB5TknpXSedU94eBXno4Ecjko6t3iDWYaChtxaviTovjRpfxGjKV1KhDQsf5zEr1VKY21cgQe3MuLu",
  "key30": "3aYYVTUpKL7uGuzAWhRoL94jTrkBuaLeHqayS4ucVfNocLv7iY9jG9vzyvUKkPqNtfNSX8R3GDU3H3i17eCoew18",
  "key31": "5hns3C3ggq96nRS28aChtJmiHRh9EzPhYxB2DZ9TC2P4ecpxVsQxJ636exAMC8nFg12MXa1WWCE6usm4rcALKm4x",
  "key32": "DSNPNdsgCRjvmAetgb5YnjnQ8tbLXm4VzrM7eDWDt8zr7TK6RefLxhJUWoH6CCiTc3vtrh9phharXJiVCnLZkKQ",
  "key33": "UiWGJ4H3Xw2zyf952mAAfFZipBzfUk2rWhxVz7683YmCKL33VpUsmjWSehnAq5sh8fnBSQuCr9v7jLB43saMGrr",
  "key34": "3GuxYojJsHMQCST5NeahAc5WBZ8wgCWKz1YR3cwieedJZpAPqFKZASsEqUJqiRydisou6batZm3cQSnTgrMFF4jF"
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
