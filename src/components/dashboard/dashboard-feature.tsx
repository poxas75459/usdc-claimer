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
    "24QdhWNhjuC9b2pAUqqMS4L6XbYfgyZUTDoBMBspyRfVvZkBKCmCU33bCgB7S2oC6BFEuCZfioRHdcwwTbZim8X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSYgpeC9GxiZNcmyQgxu4PbJPJgvarFyAdevzVQ9NvpiFit9GMMBVw49YMhox2JDQ5aGciNhJMe4cHUWyyciRwp",
  "key1": "5onc8sHUAhHTxoJVpttNALVWjg2ZC9Myc6AQ57G3YTFrgGvhERtQuhANZxEiPJGFWaEbttdCbLe6D8pGGtksoFzg",
  "key2": "BHYdxX2ct8ynBRVYJHZU9VQsPVnfQyemQYqQXb895FQTw7eP6gSS9RcQpFsazPhjcTFCJjr6WGZyXUxhDJarxoz",
  "key3": "KR1PE231Gtw8zxSR74uW2DgSccJAw1KzrDeAHZ3okMia9pgdDb65vurKE4qk1NX8dNYWWGBEXmyRfJWd4e9Jjar",
  "key4": "5iFqbHBdYUbxTb8MeR6XsjaqqnK6f3FykeufnPyWcGKJzuuPut6LTp3ZdsbwST3LiARVytC1KjB8kWoV6EDJXcWZ",
  "key5": "3EaC25gRmuqxjJhDjVtz9vu6sxTkVLLQ6Hgcq7BCMr9kPbpEpDdnnLiDnsZd2j2H25nBH9JZpmJLT1nYS3Qr31dr",
  "key6": "2gsePUmjgHZ6NRN72kHKy2iYUnEuXNeoQEHF5ok6dY4DPWSD8TczPNrQBBpyTqM1HF2Ax4wra9evi27TsZUontij",
  "key7": "2ffLHyVKsWkvKnUUM5BiJSXTaFQMKMwfUScb3zd59AjT88XipwnL7XbXYvYWszd9jcVWFJEyXdqzKtJnZUe2qy75",
  "key8": "VQWfF2fWT8tFRvucWNq5oKSN79wHMREag29xPkbV46vpw883UE9Xw6GWfvZGzVL8VeJ8hJKT24ohoCRMFFoX8cS",
  "key9": "54fHVhoWsNCMLeLuWWAYoE8c6mm7JHKsSS6QLqhpPh5yJLd4NVUu5YgDYqKCVMo3w1Fy5egXRVYf4UKqT1EScamD",
  "key10": "31PRo1KiCXn74XQo1c99aJk6jH16Yd9MDnnQygX74oWRE84VbD3kYFmw3R4pBGyPeiPmTARnWTBWk2N6LxBebERx",
  "key11": "xoBUVbNN5BGhZEBGGbg1AfL9kmdcSnpCireyqmPdJDtEVvXnmVmAHA6saXtVdppZ7GFUPFSyPK5xsvAiWKjuuHY",
  "key12": "fvny6kAoDEVzNAq9dBMidpipxybeZKsJTTf2tWCCRWxbWiumGX2ToDh1VV8H1mScLUY6rXPHhyry1FuDdbAHuYt",
  "key13": "4JGGLfXMkASfPkA6LEFNhKCpPzkQxw4AuPwbnMEFPitJFk1ixJefmmovVnwuX3bq56faRpP1QPAHm3AckQe3aMTQ",
  "key14": "pfF7Z9h7jEPJVkmeDHb5uqFVpNWdSGScAPPiiZNKmUaBcMzSv7ejNUME1dZt1n14UBkySiVXMVGhKBdRqrMFs7b",
  "key15": "463aiBfv6UeQ3aormNGquQRcAGf4JdvzexG7DTgV73FCG1FJT6XaS4iPpk8nkgkrm14d5GsW65ZWCbotMajSamEt",
  "key16": "4GCPetjM7YeTrEXtVijTdTdt2GbyHRdYeZKGStWpuKudsUsB77QLvVPwfrWSvwUbbJyG4TuvAsdSWfS9Zt9KZmSx",
  "key17": "2s2qdtWEsM3Sq88D5hbN6xNnuZeUogABQjfQZuJVWznPK9rrJmX5A3v4MhuvGu7CcvhyMVxfsqecKKTrwiy9m1R5",
  "key18": "2xi7xX7mRZRpyhiZ47A3MfJHS3CfDfNu3u8ubYuVgueqdzhWJQTVCW528VusKdacQjJR8RkC74ceFpDYSLsCdaYC",
  "key19": "2qd2sPAGYwwcCdsodvheQY75BbmtUJKR5zhSndyQfsgsdRKC8t7J45XVwBXHdktEBdoVjP7S1fXQiLgBerBMD6Lf",
  "key20": "652aXHrhQyLPfJeVLA24Fwh8xK34h5u76NVQcXCqiGJNChREvV3JjFabzJYYw7CyS3RFjpaDrM1V7Xgn1fnkgJCn",
  "key21": "2EoNUWtJMMf2c9DSKYmQFGUBsYB76YsaR1wcdMWy8iYXJ7XmcwdeptibqhT7XGYdio1zdyMpBwn66MvNh54qNHpK",
  "key22": "21qpeG1WzbZNtYhqLE1n5ySqJo9xcFLfE69RgabRbEmVo7wqPQXm7UwJqV9tcDFdchce4d7ZVxMTn7MVB2UNZ1cg",
  "key23": "PTWEqd5Rrt5u2UpKfQ6nSCVTr9WzCnRCN9XRJQBc3B1DijtZSvgzjG1iUb6ymNmTZXWXTRexB3GKgqbD57T9Dph",
  "key24": "47NFw4a21CXH7BfgbU8QFNxRdhLF7VRmuxuDx4nMU67HNkcHZjeg4CUYxh3YHkxaV7H1MAfSZDQrgbAQi9y71weW",
  "key25": "36dGFFDvYxJ3UkR7LQEL795QHWBqX4e96KGzHTdiD2pQ3AVA1qQ64X3puU72UPkroRoTSY1ujgGDPFN346Z5885d",
  "key26": "BKki5VH7dacRjSaEjFiWsA5izLHzzCV9VJ5Uc9KrXDKJNZR89xYkhrjqcrUxSmX8rrrQR1X99YG2Xm8uCk2NqqN",
  "key27": "33kbFBstZ3nTeGVUWcKj6CLyhJFUmG6911Qewxx91wsUdKQSvaj2gLxrMUPNzkDzLMyTKgA7U7JpS7EfkKxfurXV",
  "key28": "2jxxW82VHs1s9GzLZFeZF39x5vcDvvXAVshudG9Zm1CkK3ew9L3WrcUd5eLS7UkwK2a9EzP4fYPBBx5RZmCczHkp",
  "key29": "4ZjX5WGwG4ppAtm8q6JvxHpK2HowLiMiLBmRHcFbjqz4Hg8EmyhRecG8CHxxPGoB2227o6H8Zhhmfwibh7cJwJpW",
  "key30": "3n3ESjCizNj2itFoYgPBRhmhRw8ZYtYVzMAvNPpsfbZa3YUgfjRRGnJbJSAdLkGM4PL9xTXVY1qSUiVHCcFe7fso",
  "key31": "JaZB3oL67Lkjug7ESqbYw8nHyV7WMwB2myUiBVrSERsK2ShpQLYu9xyiDqhJANwL85DjhGDWFfbGATscvMy9Yux",
  "key32": "3tvM6DJcYmcXGQruSKGGtA36cDJ9uwrrKynSZuYN6ATunVWHCzWhLdsSStKBZfGbGbgtJFKpWErq3uwkCzGKoJTZ",
  "key33": "2S7btQPXheExjMx4rpNPbLMyUXyABP9qRmgWWcbBgJ62KrGv2SrF6RWFq9oWetEPaMmbLKvFRScaPaDqeVAJanE7",
  "key34": "3GrB3dtipE8gHrh8BmFDKPRRPKzfrGYF45BRWv8EnQAMiUknr37ib1h1SVx4mnvzkMdKhmStoXiFh4Js7c14wQZv",
  "key35": "6aeWKx1Ro4D2bAcUrBYM3WWJFxeHeX97jDpj3wd4PxhPRiroWZ7rLffdmtu8xCZW3hVZoaAHfNxFvq73BNZkNbQ",
  "key36": "56iXv46BS1e45kqr5Xb463QLpLDSrF4rqJkWBR1gmypzQQqFDJCQo5Qv2PYyy5vy15XKNg1xSn2bVR5RoNkn7SrY",
  "key37": "A6aiWPSuXUFnsAsg8RBEU84faPWQNvQLvofsQsUwMv3PZdpr3AucmAnsr12HkAR1FicR9Ve2XQXqCBLcRujBDpz",
  "key38": "3ozikVZykQXcZHo9yWs7ht8akwPU5FeTRroUfsQzHFVdEcDnbN4Uxzy9fDq4r7jNSKH4pbrrGmq6XFRZtPFwA2bM",
  "key39": "2EKJSjZ5CvYevaEPWwpQRmJ5evaRpFaZLPBg8yunES21mrYu2HjChdExN47x25qNZdSyYd7gPvL9HVFmcrV6aS1d",
  "key40": "477HDk9q4ow2nNH2az2qUgTC4R7ByehE2uzdWbmiyJpnvXdi286UHRwFNqH3WEnZPSTGBz2ytC467kQy5G5iG5E3"
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
