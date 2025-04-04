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
    "2D85HtTFXrTv3BmZwCXQdYKD43xdKiEhLmzRYzZMMEe6cbwHHu4m88DL3f4XPk9wArL8Ys4q26RUauqtdQKyw9JF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5osKSTxXgqFzhHhAawYBk8Z3xZCdxnkddWhuStrp1h5sL3eLv31xLmZw6qdQcoBU2gMxg323BqUZ3qCeUVvEub4X",
  "key1": "2k1iX5bE5Gpi1chAdjGi36cMxkaUt1RXuWd1qpsyFu3K9XgrQ5mcjoNP8CM4eTQgmfiNazmoT87QL7JK3hR2xiMr",
  "key2": "2kiCscxyosHbf4ApvQ2X3SGoqJmGPfGj2EwuTHhqJ7TTuaJ1b8KtomLYcypsbHFCnrC6HXbKL8T9KgkcTKBjPg18",
  "key3": "FmRVhT7VKSzvz6kyrA3JUW2f2zwLrL56RfX1f82UxKXXomjNdX8ruxDJ83xRfzS3wDHYj3MGMYwJxdjK9pHN7uh",
  "key4": "4jhRUoG29GYAfobSeNJR16Bevi5EqwPugTpnK6aJtMdoyxxJ1xppJUyaUjJWwKFWqwYJXcnDsceK6vRbhoBwqA7T",
  "key5": "2Q83vKgzbCX5AR1iUbM5Bz366RE12rVLydDSJVP1u5uc2C9w3kYToDse8Ca7MoxAUAUsaWGZxkQnQ24jBe6acJoX",
  "key6": "3taowcB2yvfJseVDL5PW6FrsEnpVdy3jKfWMJh8PUzvAfQAgTkQMvbHe6JmFvpdUyMA94VoWFu2fXW6CN9fv5db7",
  "key7": "4hnCDtpd2D53SeXFJjL5KDNPovb1gTehri7bERrm3afUo1SXh5EfuW17L2HXBdi3foF8wws2FHxcWXb4NULGrpGN",
  "key8": "4kB5yybHDvK4aaYiDXAsNksPrcnD7ntTAa4VUqApwCpFSE6qGvgSXYbe3wNRB6edJvA87X3rD362tsutLSVAETXz",
  "key9": "5GnqX1dgm8dDNu8aBPZ18nGaHn78YgmnhMQbHsfpagyh8qsCad59BgYpWs6zxuuy2d6BLGUtgWavra8XtgWyqwbA",
  "key10": "4ryJvHT6jfepKHHcb9MXiSRpSKZMqRGz4zWKSoxBjtJtmGBVxdmEtmTwGSSrnctFUoPwxpfQuknx6sYMXiTTjxxf",
  "key11": "22ooUNTDVou3us4LstGkjWFkKQejngxuE1AS6uaex9TCDburH5wuaiKAFoyuUf3539bAQLiApyPwp2SBbUPMWBZQ",
  "key12": "4NBXNTcDijF5px73Do1axCa4Ta99Tvg7WyE6cxRoS3AVMu8A3CkA6it2hrw3knZCtpn2GYrhX44cX97QxebYt8Qr",
  "key13": "64G4W2E1qThMSA7ER14kGmQbb3qrUueXuKfcUbStTgpcHvpMXCwZPnRPLa5v5xD6JB1czpsQaX1T2fSoLdDxYRF6",
  "key14": "2csHtXQJVqwNkXmi99Qjdib8CCVU4UpxFRcVpRkhnbcC8PhtceXYZdwBRuWESnMApURr88CYRy9Txy24xspbXXeg",
  "key15": "2PUn8znG3fARuDypv1fDJ3zsGPBcZrZtXin1mhFGbKKTWMSxqtqAuH27bwELBusinG8oDH33VjSAMCXLfVjQHCET",
  "key16": "34WHik4kktK8VqbmFvnyjGezU8xG6115AuBX5tSxppMBBSTkLfQfuWK9hcA8SY1JzFqcrFaaFPWRskBBRLbCqsvN",
  "key17": "5hfm5iDHpigP2KRmQBdqd4dXmTaNB3zLyD1ikQY8Sk4vXoQn1gLqsjgVzGVv6njsWZpsebWGboY9235xVRmrSETH",
  "key18": "3Y1htsJAvrABi3rn652jGNa8oLjEKdw2tVUx5sEcXfF2UvgxAwhS29GGT9Dao69JfMdXCe9gouSNbVwKzAEosHbN",
  "key19": "5zcVTc4Gn4HkyjYtZWTB6HptQuwCSBusYVgJKkFE4tNe1rcyfzhw5Ms3W2eJjPe72qo3ZSdFdZkovkhxUhvHYYdc",
  "key20": "4HDJ83v8u9Q6iq1w3EpHxRgfgh1PFsu1qo92GVn7wWD4ThEv2zxvD3W3YqUnn58DHFcfiKzV6K4Tr2HeX5uMLCkv",
  "key21": "2XeUSLkBGUgmGjo2iYh8SZnWZHMbZutFBpVC5ZkA5Qp7NWea4ijQqBbNrhhXgvDmB4xZEuXLzxB5q7PidzE3c55c",
  "key22": "3TsYj36wyjckeYC7j1RiqfugUJALwC2mHAgfPBxkusmhCfRPDXCc43spxujyVkwhL6dRo4fuJpEZZeVuCurmwWLF",
  "key23": "4DEFDYskCnE5x5rpqrdv3ynVk6Rmoxi6D2jFReeEgYmVMg4cXPLRJTRbsZPQ5uYyySYkgS3iWFHH4pVSKtkbbAgy",
  "key24": "5e9SeNoU22XokSqb4Q9kjHMXJEphTZkwdqy7Xs23AUGXMmgyCroUjnjRgaR336cmvwxveMccDibGEozbeTadq4sa",
  "key25": "55FqKoHWWU6Ed8uk33m3qjUFXVcXzrTetD3jHvkY3WQz4wk1BMwYocpKRPJAwAjfrH52ejuH9amw3TZ8TsFzYq1r",
  "key26": "3LYhW7y5sqcj49ZVNpcQRQ3vxMJcrYV41atzs1GxGM7aXyzMNBkLYNzqmqibJdAp3DYkCqrhqRGu73QTmmozacAK",
  "key27": "6U2FuHcyphyUjQ5wxLmjaLJSkGQ144JHF8sC5FzW9HfpDSLMBKUYjzvWn4yx9eCYfCM9asDW9MAkPhHFwyfHT5h",
  "key28": "4LUyfBYKjY2PQWg7oCJ83DuA6AJy2LhwHvr9sJg2pfzsCoeYFcz6H9PTuRAemXWxmB7XifWopXpJEG9Agjtxctco",
  "key29": "3CbZQQYyUPPp2NXSkkYSRNMFjAxUT1ju6iVs1DvMHP6A2jAQ444Koimx6g4mNhu2CeKzdTYPZMDLrJJJbv5HcTL3",
  "key30": "4NXLFQHM7pCvFpY5sbKK2NSgWQxo2C9yHRtFGZ5zr5qsN3x5P8Nch8VPhkp9VKd6f8atx9ox3WBENk3CF5d4udWy",
  "key31": "bsNvn29uhcrE8VCjB5mUNDbqcWnJ5PW7zLiQD34hbJgc167A8L7Pe8cAMXJzgq9noxHbDXZ9vgeX2wrxNeauXWk",
  "key32": "2iA733jitQcpo2BxSK2rxd94yM6JNRvmJw2TJUoaHtriiW8ZW6nm7WdMJyq85UoDg9AjCa4C9TL64v34RgSLajYk",
  "key33": "26ZbhhMo78kmrNPbA3KRCaRNbXHh7KkwW7Dg7eM9513KeBoqkZGpCEasCm5SQ6ASTEd8VzeG8Rv8WbuCH1ANF3zR",
  "key34": "3U3jXaWKUVVr6AuD8bcZCcaHa3B3ywUx8i7p8mKYHv954eGGuUciVLGoMhMAYo88255zkB7TJiQUfJJCgDqBwp6E",
  "key35": "UwKuQGKwJouDnkxDbMLnEZtJUYXCbERDriu463k6Ajgrw6t72kyDCxsh39B9PuTSfEzEWnh44G9baxngnBqJyQZ",
  "key36": "48QRSXBjt7NZt3gGAWm63rACGLr1UcGyvaCcqHWvtTqKEBp2HEmL9ok2zuDFSPEtTqLyi8fhqbqwKcYFQsNGReHS",
  "key37": "3WggnENowfcd6EY9qVU3RskSDvUWnriRdiA1Autje4KNtWHEezubj9RKtzT31DmCMEim8m3dfXkJwiQ5My4JvvqA",
  "key38": "2Mz1SDHQNwbvF8ieXcMpxGP8Wtdc6zDxWRzk6tEc6Le3Vs9hyjp3ptrcAaJ2NMzDhbMNq5qTfpGsqqMV8QiXEGNP",
  "key39": "4xWzCyQhmtMXQKoP4RUtyVjmpZ3AoTac9KbJobqUxS9bU1mqox66zHLcD4NAdMrT8dduxBix7w7xtfHGf6Cjn1jE",
  "key40": "43yygRmnvQH6VfixnXfT3McR4gA1KrWYV7r3BdsPH7Mrm2X9oM5b8dFygxPtaXbYen43tfvpzaNxNfMwxPMKmCEH",
  "key41": "2WvEkrarcSSQ1H7HDCrRgwNid4eui9e8JxMKx9aTNfaKRDu1BiYtnwCYSwtBg96pem9pDqeFpC1qRbNxDcAi8vdx",
  "key42": "tZnsBDUjsW78GS9TbQ5pNPYNkN3uAhmERbD8D5RpEBDJGt5M3nZSygbzTHaL48xj4QXM5asYudiUobyLU9fpN3E",
  "key43": "41ZUpF3zZXAV7N1eUk4SMqdHUu9nNsuWJSXoGteT64kCdotgRFR6QpP4XhE89wmZf6kKHW4WRLqNgztiqwKToBZd",
  "key44": "2HoJDcMLo1o3tJa8C3H4P7NQp9Jt143qTxqx8CQ2MDnuKTz7cfr4a4NgXfrNQwsqxR2Xht2GtrkwPmBcqwLLiiMC",
  "key45": "2QksqhqaMV4o7VGVzno4xntyQnLH6bUuDp1tLA4CUm6u7AmHZQf46kJ1ebF3wN3S5WwEkA5cJZhmKLPiR2E3y5xn",
  "key46": "5jtVU5YffsB9MqK7bSoMT1FYwonEqAVZToP3QrrnsyjbTdBWR9MAUcxV1GjzhUpSYotFtoijzYbiXjBabrvffJqB"
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
