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
    "4vLvP91DEfoqwj5oD5GRn7TJEwoD3BWm4nhfQ2Xr2Sq4ckrT6gC1SPD7my441KGVNz8FT8s3nH9dVRXXE7CCjbJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTzVhXMLfLS498977TdicJSYHAz6kTmAY23Z886Efc4fctCRqDqbZZQJfG4XDHCVGwuS2NtJV1AEvJCBS3ieEGc",
  "key1": "4dsmYFNnSmCF7Bq7uXwW2aidCZeTxradboG4Kx4kVVQVS9AqqEDLB8M9YGGxFod3HvVopyjAzyz2FsMUJr4eLy5T",
  "key2": "5mggqyMTvHnXfvA1RgwVrniKKjCPDMfVf1Sc7JFhFS62LhYV14ADHbwSPGqCa7YW1doqauLrLCNAsmhruRmRqA71",
  "key3": "3prrRQe4VtMRUotBRx7NPPC4XEw9h2zdhJvLCtANLtdVLH6mWwDB9NZbXBZYcFNeNebPLAMPQMGJx1akNvG87T6A",
  "key4": "2ActLDhsG4eNgLjrCNBNZzsaisFik2Z6JhfqFa7HDnzuawuKo1LXNLTAZ15yrwXMQuVhxCdXrQuESVm7ihNseaS8",
  "key5": "cpphLexR8BoXmjH56FFyfvAksPBdYwVBS1aFp9uYmxiJRuGd8Dt3ndYrxcS1RFF1MEvzH5MNxRy9BCTMJp55WXM",
  "key6": "2QrxnkiRsuswqMo2dAFr7ntyrbCMBnvBborgR1yDEDyvHKiy7SetcQhecs1du26ktzvQkPu9EPuSyH5k4qt6eyhe",
  "key7": "2vfRr7Q8ksZxeNNyPyT7VStuSmYGNymTgKdZDLwNBnx3LKYPpQXC2VJg57mFEg3RL5mjiHBV1jXUYNi7qnp2hV9N",
  "key8": "VcYHrgapd48Ci3kz3vVY3w7FbHi3xfmLQPQn4R48rrsCkAz1hPuc8EXR8NNdc3WF2f5co7Ynq3M63fPdDQYdXDx",
  "key9": "3wZMYsytKSKqyMFXQpG9gdg2Pu6xGLBASwaPUatx9L3tMVerweR2xdNwgbLkwuepq7kqtvMCcQ2zzSmXPmKC2Gry",
  "key10": "2mLNicwrQbHpkJcX8xnafaRS9Qt8M5shZTHvjmgGhW76ZY2CUBbfCqdH5j6aHbVnpN9fUUJ3AE4fFgFkJApVfSwX",
  "key11": "9VKMpoECXpiAfYp8zggnEYazya2WThcazuvGFNGG7oR44GAVPqCXMW1QSJr965ib8XoXzM8H7E4XZiRGtSqV2DY",
  "key12": "W1p8sWfh8G6Td59wDiLtkmSPA3GPGQytE5dZVj3RkuhdHaLT9Fe5BqaK4GQK2FzomC44BcRAtWuG3Z2KumjqePy",
  "key13": "3DHdNqBGhVxdCj64AdRCyffvzALQMxy9VCyHyLtXN9AYh8CjcY19GvSYJgt47pwZUPwCYuQ7STvav34CYgPqhsGJ",
  "key14": "5nL3bSi8M9wbFsjC9M4jzdke4sJ5mZ6M2oK4AqM8JKU1mniHQTvhCvBHbA147bL6BqPfV3Ch9FBwCLZwZfRFfgos",
  "key15": "WtQAXamJsMn9ziDpxTDpX55jbodJ84S8dUVDfpwGN9nfN31PSyFdbsVavJ57RBf6ocmfwkfmgCSvii6YNbWaGae",
  "key16": "2fmvyMTruBrrri1WsZCUZYgMQY5ZW2ecf8hQB2KTxjHJrUuTZB3GPMijw4yTh9D5RkLiHCWibH6DyYihKAaViSVy",
  "key17": "LkrEoYFUPopsgNBKEPge8eKbfTN5HppoJyWXxEazc1xpmDiJuBZG8baFMrxUXKkfAzGmDZEC2UxaQPvYGY8h3Xq",
  "key18": "5ZyeiPU9rw4iSRMweMqc9MNCVbFpAKkU36A1HZxwD8PGFSzgAz8HCvVLYP1CPZMakCTSDmyQ4quy88RPc2J1FHAq",
  "key19": "36yprdUZd12P5p5Rc7hhEz94VTm5uFaYMerAJakE61MwgKhuPd2taJSnstFXp1KnbYvKR1o1vceCY8zB4bhXfT95",
  "key20": "5dQ3VSqFngWfZbrYatdDYe5NBupWnRAsT7S4pXorVeFiZ3VVmRTiDKF37wLjSyjmEZi8fmPHtSAoSfA6xSCgggej",
  "key21": "3rtjfP7EXtDhymaySrEUB5CaQT2AYqfges3BLaQgLoALYbKML5Twn1iNutTEXC8KwhuUr28iPgXEQz76ttSoEgVi",
  "key22": "5er6BHF2YKvbRrKJYDhMiegWbtZmJNe7NwEDwmY7fqjy5K8WaqrrXBEv2hgEyjYnKPSLbU54ZYGTopLfGSJockMy",
  "key23": "44J2Q6HuJKtF96B9v7MUuNMYdhCiesq3nvXSvzxSniQZMvEAvTvBySiJ62o4JKfN1GX4z1bGzH3FfywCwqc5rof6",
  "key24": "28jvFBWCwHc2SmNhyHfuXHTUPryfGa2woyDJwUwNb6HrXESZKZbCuCxapse4oCP8E3Y9bsb631nZcoBtS8Z8RAFa",
  "key25": "2bYzsSCU1oCXc8VUtvbfapr2421tWRiT5APWqd1qmJN6Chq95JhUDEX95yqJMhqSwPiMnxR9Xn4BhndvYDMQmZSG",
  "key26": "5CMN8BPHfedATAKTbpWDkwHQUdDoD3ty1Tb7Xbm3D3WEkkJaxLZUvPb4JQa1tzTTpVrkzQstAVknhyHRSGsuhfqq",
  "key27": "2Lr9AmC6i7fT3NnqXgxQr9dMsguxjE8GJyqunU2RJTsk3FZMMdK6X5RrV4H6vmenCAU8gs97GBn4Eo98nTyLShsL",
  "key28": "4biGDt1LRxsUeybcvfNiLrVo8rch32FQYBYZCWgSB9j8YVb3eBrUzrjqV8KVuy5q589jRktbvqTRojGe7EWorjQS",
  "key29": "21KduhFQQXZmnoKxtvMiRCoXutcRKbAN1AEoErj2jk1zCwkiGmJvEhrdeeyJyr9yUSGgEmFxu4Qxfxi7YZ3yyRtS",
  "key30": "3nUTPD3WA4vKyLXwUjN3H1Kt14pDnHLE1gsPx8HbajH9A7t9dy2F6AqSc8WT5JAJFMP4TnrjsFz2MyEL4gAU82Hy",
  "key31": "34sz8BsYfR1yyXzWSgxLxXRH1SAhsL5y5L6BwjdGDQfgb9rcBpG6g3VQ1EPC1NCFKWyLfZMVEu8QFYLDnKPwykuK",
  "key32": "2GyUM68TUwmHfitptfXuCytbLNPE49kUsVYTpHcV9YSSSQJM2TT5aK2SLDV8nE7rm8NTbeFm83gwBgUgkPWQTzjc",
  "key33": "95kok6mUQqmHE7L6vUe97WtuX2vWQjv3g28oFRu6cwrSnVX7XP1Sxh8ChRfzwcRnZb5qjmnFXpynkAQkPBNhhsi",
  "key34": "3sjKtvtoZ33UT9Npt1oTQCaZAjev7qWevaqMnWsPQobD3TES6LcoAMKH2UGcGV9dwoeV8m7yPYcxEgDhESNRyvkg",
  "key35": "3qwR7g7KRmZZnTEsUW7y1BVhZKVEeU2sPtenTbv7z2PqY5U6cfFcawQWTKoT6wKtC2VzrPGfirzECkGsuu93yRZE",
  "key36": "ALg9QGf4E1f4EW3KNn4Jq1ZAc5RMvvrGh8H22GxF4FV2tH8JY5BfAoBHVhHWsMXgB1xjCKa6avikAMmY4V2XGBv",
  "key37": "2pTzNmBRBaVupEzTqFAj966XLWWuQjAm9vnCLDDf7ZugL2hzErgYm5iuCvkGdcdwzfJjDhEVvZmsKyZ1NKnd3jdF",
  "key38": "27KTweT7kiDLemfowV296Hve1th8aZwoPCmd1TacEGCr1wFTMMQkLNFBAR28B95jRSAQ123xraKZx9f4SBr3p4Mi",
  "key39": "3CYTWBsdLZeHKP3dDwTwgwuXTRcghovuxUUMjhsohhM8inxxC55VRwFRv4XuQreZvyuhp3Sd8jg6qVK4V4SVkmMd",
  "key40": "4k8vpMxa5XUJrJET8ejzvMdw363qvH1M2StLwQCDPauv4sXEm2iWevFa3HDsfNtbXRQbH7HygPEkzj7NWYeUWbtC",
  "key41": "46RUM6LxrZTLN3xwP865VKtZPXui6pyWNhrryAt19rF9kgrnPQAx4bMjGLGpusEJcxwZkPSgYi2yKrNtJSx3Ruth",
  "key42": "RfkW2Rd3ZUc4iiRfked7fAsjRa8PB88xtLW13CDnWd52GZZisWrZVsC9t9S7MDzaFnvsb465zzSEWAZ2pu4QtCT",
  "key43": "5c8MrMZCKdLguFryu67nN9gvbQUrRDcfH1fbyct8tkxED4YTBz23r32FnryWDgoywEBkGXRtMa1bXk2bZhbPXzkF",
  "key44": "rTzDrSFYdBmHVdv2EuEKJxMddccTjH1tmWWTwiNLfxia8RLmLAoGAZJyYHRCyGR4KTTNfzVnjgHrJKhsdSgyi8n",
  "key45": "2PgyNwrGpe4ueechXdQiqL2QhBrKmEGXxKAeWk6eB4cfCwREwr1yWGbk5pVeDKeo6M8V3TYNJKPPBCWEBWDAyVsr",
  "key46": "5Yrto6YBjLpj8Zc7NxpEaheg7Gom3okDq8dvE27FGNsM8UQ5muLzS1W9cPWepKmwCSCC31bDxrNfq7BE7Mdnk9Pe"
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
