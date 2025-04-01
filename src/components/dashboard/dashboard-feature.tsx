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
    "332D2Xs4QhvnPqZ3o5gq1qctnwNkvMVZTkbpWvDMgBgwmYUZ4t2Qn1XSZq7BjTkGiNEYfpq9MFjGdy5muzBP4WrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNej4T7oi4p4XzsAvGhzHzUm7qLfBop7uDAoYuNc8d5SpxJnkfn975FfuKAr6JVLc225pkdEQK7sDKrwHfAwrHK",
  "key1": "5azabUJ4AdtZiR8krxPq1C3xUwQDNQrA9KQJFAeM5xeGkDjuwLgxZH64iN6avpQEPvcQYfo23U13i2459W5eoEup",
  "key2": "2dSaf6Q9GwMrQHEYE4u3eZRU58tgMGqJvoJyX7NFBC67ca5mF5EQrnWKPG2rveewqtEGgScvsRPh78dSJwDsTnPr",
  "key3": "WKbum5Q3KMwU81xXndofisRaBqBVLJDR5BthZcEuRPncVFcdFjaEUB6aCWVFNc2NgCqAcmCTwfMcrEja78LuzQQ",
  "key4": "5ARkQkrrzzcqAWBo8b1C2rjiXYfbH18Mu3qREGcWDJkGfxBXDjawQgXQWUKV3d61RxYHdABerMHukRiPmsGmBXsg",
  "key5": "5R8CQQkeKk88dRf1qe6kE31X7GASqvFQVbgZV6Td4uQXUUj3xy1nbDEzgrsBt7oCh1cgUG2cmuXSDB99tdSzA5ZK",
  "key6": "5uvfMCLshk2q8w6ojAaFov29TPCzTX4fuBG66WxuDSyGvCucx7GapVELzKy4eyFRX6Mn2J5U6a8X6jCzHodCZZr",
  "key7": "3Q4jiYYwCBSdnWXmRdn8AJFNqLthGtLXvgpx4YAGo55VSdRKYEuoVzabDReDeN3nEZNceMTAR7WMMVkag8cPd2SJ",
  "key8": "3AG6iSFfBTrXEwmyEt2PPXGPac8UznrjWUdiMdTg5HuxH8SmMTyx7z3qaDLXLvGqheKpKyRoVXLJ6NoEECfWJuB8",
  "key9": "5zFykoqyBLzwibv1KRHn8gZ5pnu9WkSn1twjCFdbdaeCaeRwCxEZYYuoLyFexeeokufbxw9RG6hE3GHkjpL15Sh1",
  "key10": "3eFHM2huB77f8KroUqeAWMHVnhBpVCcuQxQvAWFBTaMX8jq1J7YcaFdCRhvuygcgn9B5AqPV5BT7DUh2vbYUVTzq",
  "key11": "XJjKsa7Fr1pKdCQaktGmJCDrJ75tkpDpDM5zLZX2azcqmf1GQ59Dm4VDheHAPvPEqku8jKHBguFZmNd3fkDPmfu",
  "key12": "54bWfgFxtQBbZ9sd5CXTaXMMVJYbDWrjQQFmWYELh6p223DQ9bxe8XePbvMzou9SUJEM4Hu9vnwnRjG3dkWa4z8u",
  "key13": "2Ngx9GBRbfjSyJWK2AbzY8JPsf5kFUu8SksoVD3bM92CxSbcg5xVCo5rL3FuL6HtNQBXTPPY5ovGbrCpGjVgcdqV",
  "key14": "3kGc2PHQdiZmPLuaJHF2t898PPQm5c4J3MuxaAgkwKpY5sAkKHusuvn9M8zvAaNGoiALTG6onAfAmwPJGBUCa3uD",
  "key15": "2fxiejSb5qtGYFkWyArp1vCt8mPMgHbBZLAMnjuHqyjjLc8nCVNhZKhQm9zei8iHwLaW7PxMth1x1s7HjYsJA3df",
  "key16": "51nfA2x77zud7VbzHUxnkYqAy9fhTisjKStVXr9W5mpUirHFxbmRe2xqy3F31raxuKtD56rRpo78LTRh3cqYVqvi",
  "key17": "46U5sg71ZbfUMid9Jhk9asDnTQQH7cmUkXaJd4QU3QB6hEb6AtKNJvCJfghK8zkC5mRqbvhueMiWsV7XPw2L3XrX",
  "key18": "66G15YAzbFjgGwob7uBAJfB99XAeqy1Z7DrzYizagUvQHoAX8cSih2bHz4ApoxU3BL5dAByyyE3KD4GyjLwtZP9X",
  "key19": "2wiD41eMVixaknFx5WJDxAkteKsi4XnP9Kx6ZdjJDXBsEqHnbReHT7xWTuEG4pSyo7FZ4iW7uqLJbopdG7n4GxFx",
  "key20": "aJgMKihazz6Yc7tk7HmYLhoCjkWAEYtPAFr7F8yUFvXfpwBf3y2AR38q8AGF4o7WRp4gMPRD8jHCnfKsUDp9CKD",
  "key21": "4grYTpkyK3ocsi57t4DQ5KfTBfUi3Xc4uChDqHww5hM4EWY4bwff65DniDw1LAqFVjtqXccQbXwiMKkCKNNyRNVs",
  "key22": "4SraNJRLgFscBadUqMecubbRo3BSuJaY8pXYsiGN64jjEvXXL2L3ALGqzY9iSRv4ZFECL22esrmLmCbkUEi1jZzh",
  "key23": "2FEUUCEWeJtyzAXNHGoTAVREy1Qs2JWyFUa9vWtwDjEYfzfDVppXde2PuCHS3FApnSTknkMPpc9iLtkTDgAafpFd",
  "key24": "P1jVDFUNtzmYbwA91ijsuSY9pa3HpnHWJydzJcGPLraMMMJ7sJriDDdjgRtEqLkwvn3CmmPPGKBRtCYEkvqS75B",
  "key25": "Li2FFtGc9Z4KZ1wa5KjR7ZC7hN1GzNp4ukVAREjYRZsUZeoPRu11B3WgFVqQ416zJHdFkVKMnVKouCJyo37SAms",
  "key26": "59TRQdvkFreMypyNRaZiBZ7Zdu6EnRXx5ghfHP1GjMfmQ6YeauyiTrs8mPtr1xpj6NLFCCJiqirXZbkzjNZc8t1i",
  "key27": "34ghjMvootQpSx5QAKSumisgvjsJ4fz368CM7J6oBWsmFM1wrXzAT54D9ksH7VAUZX5rmZYHWdRutrPBYKaGgPTm",
  "key28": "3aQnANKhLZCqJnFeqzXBbGLkkYrWVJ7sYoEzPwWiB7RZ4JAPMVhrdKmrdWFz2ZEEyZig3oRra81vEkDGuivxtN3z",
  "key29": "2xMYf2pEN77qBGqPWPhGXNRqZJb5hu6Se6zga9hgPa1dkhY6NDxMPhnvgGMK47XSnsEi56HN44LHrobTipaiCpw6",
  "key30": "2MUy5TRX2gPL3NeCQi52Ccf5PGuhQU8o9LgJLrozJRMbhFrTiG2MA88FNbPnd6fLVW8u19FLmfocvC47WJcMqt4q",
  "key31": "nt2RY367XgjwzsanwBksryxD9ZJ1TUEwuhS1Z5zSH7dbD5jocqa9Ln5TPCYzkTbssc5iUYkMyi9rFayKQnPECQS",
  "key32": "5PC7wyKKwzCxsutPvRDBbypUMNtZ2bSUHFzrpu8KyhwtyagWrwsDxpN1surKBgpLL2s78KQRp1y7hvzcDnx2nmgX",
  "key33": "TGygj7uSSwBrUstexyKNDtUnyh3oCQSaGua1gx4JYgUo1PBw8ESPwuXaKz47cTwJ6MKQVouHsB71bQgELwtfgBN",
  "key34": "5KoxgS9RTAkbusruvS2CartXohYUcF4swswg1TLxFQNiGDUG9kg9Y96NDh45jTRzMBRnnw6ztj5ZYTSSoeLDrQAy",
  "key35": "5BiVYnrdfKoQMLYG3Uemjx8hMfwm41p8nwSXw6C61auRoUujbynTpDdMAr2jqUeS9P4gVhAr1hJ2WWr198FXNEvq",
  "key36": "f1Nq5dbnmyDPRimTc3tpr5DJYwTWb1MuWy21t6jfN6swYWY2671k5aZ6MsPqnDnwH6bwZkB22rATEUFaTz1hMwX",
  "key37": "3zee26USdPC5eJd4Ucibc4JTUtRV93QjqRJntB2tjngsgkhjXDZpijbUDu5hhovps2RiCxTDbeKWuXCNXFgeyVjN",
  "key38": "4zgh8feut4sxV1kLeb5eJ1rT4JaVkU9MT9WzWvByUdfivcJK1TNaVCHV7kDqKyfLcs3ELAT8aEfeMkZwgpyRXg8J",
  "key39": "62MGxY6L3Zfc8Fcyu33HWemZJPNQeQRydTM6nNFBLX25Xs3gkpkDsxPRavADjbyhY2xfQpq7GUv3S3xJUs6hDDxs",
  "key40": "JzTutbYm35Cu72cLNy1sEF2keiwxXrJUiNTQdvzcnsqKS4zQGFCMDvfhGT7g3Mxe8Gp34PSxpUDijyinrw5g8WU",
  "key41": "26BdkYso5MUszDbuqq7VYnnmV8RsrqeUvuzB7gbs4DyYjLeeoA7TToru7zCi3fuFQ2er716ATe379QkiSu8hx4P7",
  "key42": "5qBonFUrxz1kRA7Q8DYUGNjL7tTZSBQy45LwHM9D6D8QUUsmg1dheWMCfqnEVAcFVUu3YDewjWUtkdTCNRTFKTMx",
  "key43": "C775NMcE26PBMdKpaERdQZeREvT5MyJppRLFzYuwg7oUBmkQhB1hvU8125KP1tKi4TZVk5ge7JQmHVx7wpxVXmn",
  "key44": "Nnm5pDTBz62MqvrFJdnTjiSmm7c2ZCbx16qNzs4rXUiuTFaCHPnGMqWPRpRv9FLeZXEDa7s8FhSCg6UFA2EhMmg",
  "key45": "25bzPst5VZ7Vv3RvjNBursajgueA3mezQzy2zdbZvPEiZrKwqhb5df313BK7q9vHQ9BktTD3qK2278cfDsmDXLUb",
  "key46": "2hMyFhtGtrRyZCBPEKveZiHgQHmAkRPCpQLE5eCV8XrhUonanAQFDNi1sxCVvEeNR49ibwMdTMRSQicRhbxnn9yn"
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
