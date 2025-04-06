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
    "4NVXxPqjbfbvYmDjZZP164Ap9sa17tG99Mnvpo5WumVDatbRNzPr9q9W6WCw5kf1r5BEAtNYva7eofLwpTm182MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGke2SDWiFKnh3iTC95YFbS3nk13ye3dQw4GDBPa6bDZMTj12Ngq5ZJKeHS7g1KCPDpPJhdTVF2mzaQxPbDGbUu",
  "key1": "3qgGfJm1NTJ728d7kf5Vba7RFHBrRxXwV8KweS8aUq5koX7E3Px6vaGk76h6Vmbh1sAqxLWY3KMiJCuS5DFdgnph",
  "key2": "4GbYBeiRhSnqFiYp4S3NAWqoQLHMWsfyEKk5WahxbEB2HeSs1gPVcS95UXcismzw2ZXyvxYNgkvPZekY684ZALC7",
  "key3": "65AMnGcH2Pi8CRyVGkZS3o3mDTiv6gqUAmNERAhfvEiQPkgA4CioMnepUbRc22Mpht63Yv2BWDwk53DqooLhHdMF",
  "key4": "uDd3rjDdKYSHK8euzJ64MQdmETJQ9w44aTo1cMvhbycisanQ6uwMRZ7gURLbiQSHEX6zQ4anhyzoMDnKWQapwKr",
  "key5": "2YZjB6oS1aTjZAc2iwi2bzbEeDMr1ANDBhdMykuNb2ZWukYh7CHPBwpNRedYGhDUqGCm8Z98DMEA3tqkXQX5w4vj",
  "key6": "Rswb3bmWDBrs6UxCDF2SR6XhrMA24tufhzuqJ2GJkqPPFWKzZSrSEgA1kLesxuMzc93YCYiCeUWexjUtEfi9H37",
  "key7": "2oyPe4mCxf95W4wsZzHVSGBRYEH7LQnX55rrwktNW5GAuu6DRkw9KxJxSDaSakDbpPyuL6Fcogs4po9CF5bBZmMv",
  "key8": "5TspdNLRhFW9NnwtpreFeEEjsWJaKvWiZRrQgVFdNny7HgyEH4CxwDsP47WnHnNYwxCt46T69n6813H8KMaWK1Vc",
  "key9": "Ybqu8MyDgDhEhGu36VSq6kK7TpNPALGZSJk94Vv3SyPDmFQB3PbsifQZp4KhvkbHWNawKKuDuA8XwdhtZ6cXMTn",
  "key10": "5bkoZBquYMwuiq4bhtAs4EhdYwpEN4BAAjJ1ZETBkusyPXpJi7XUM1Yt6enbxcLQ5YJ1DTvNKEbvPq8s5LXa3Hws",
  "key11": "xHHzqeQixg1U1nukVi1bue8bsaYtVdFHCoAkoNgjXMtPLtwYW27bgwxKEy1ciozdkb8TXXtFe6FsySBqbYYRgS2",
  "key12": "3ymUBrnHN1jYntDh6QHXcopLUeEEdwEsYtttGfwTwVmN2DfSikeNLW9vqjSv7B1C1zyuHLNNEJWU7fdDCwSivuCG",
  "key13": "2PcbzmWvJL6g5GxCU73g3XLwK2vXUiRJzA1o6QCebebiURkeDizUFniV4TahfmbvkDDwSdxmJUoTcxbhEPNHvWn8",
  "key14": "4cXBuYf9uK2KdmvrXXZTVCUMysFtYQJaJH1U52vabZGgkJiyE1s6MaKJ76HgUFf14TQrR9aFkMAbZT1pDayWMucW",
  "key15": "4EGJ15RjpQXqAZbs2ySp5RgPDceyogyPzEoHsdZaZQnu86ZxNiGoJhRSGcNkiXfkgBUom3Q7WmPsFtKhEX51wwBr",
  "key16": "5ReeSjt4RHUp2uBvi7WorPtBmfnQsrxnmopWTvifoRYbqEVbF2T1yGm6hPSjdXAwE5hkC326Fio45pQbbuz8tb3j",
  "key17": "64kXiSQMT9XQime6U3DFvq9gCgaYiz1ERw97azSTDX2MK99eZEM3Gpt8dDPaJSsSgjS5QDXa3MqZJ6yiVsHETSQA",
  "key18": "34ts1xoSbNU3weELUQje9yyq3e3N7dL9MqpjKk2s1x2buWCMUJ9NZwMdcS2gGp62LwJok2tuyHGWffbNp9dSrm2m",
  "key19": "ohVmFYNxSoBcTChrnXsppVEjPqf95NNj4phyju1xaREDnPoJNS2AdmAVaPJUzCu5vfzk9GZfyTJpNweAoAJFcKw",
  "key20": "3FUVHp1m8pjuBZdBmRc6rMxGrJ7QtArsxWoLbzteJXRMonhmjHG8aGD91qFrr3tbrA33qKtmC1atS7iXisxqmh6r",
  "key21": "441vg68HhWifXBDezPV76LMaE9c1w7bTkFEpNpG1Hz6PuseN3yE576JcR3XSrXe1uoHbrr5oiATKDZkLE5vt9HKi",
  "key22": "2TUsDnTckuQPkWHwusy8m4DjdYk6Uzg1PHD9F4HEn4VzyUoArsynmDyHE786qhVNThZwXG72zyjHaC7KYoV5hPqi",
  "key23": "51ygFEQQkooEESRsPWnrM3XSUpsKJGU1fXsD3iyrJMpZSdUB1ohKSoxZpXRvHUyssRAZ19MCtqnKjTJyb5fGA3F",
  "key24": "2KovBCUzjZ9gBb2F9rD1pVGt8rhrsVZgj2LKMKj61qYoM1PDsZJad25VHczNqa6GUgsMpK9FA27HpScMNiP98tto",
  "key25": "4aee6W3ifoP8ancFmF3FViguRzKMi3EDcUPRrtR3867kbSAGoBPXFVU5GpaZZFR6i3VcY4wofAEVKLF7zWRHFztY",
  "key26": "4ueXDcE2bdCVeAFhpQJ4YjEW1odDKRS5LTcupLsFerbPupBSXyjPUofgHnNLgcqXavhgF7DQaHxw4qsgGUWtAZLT",
  "key27": "3SitA8bcVxuk7cFQ9M8jCNmiWDZQQFUaga3TuMh49A6iap1Jvde8V4Jqxugh6M6uA7f26QWdPoWANRtFFofsXazH",
  "key28": "2L9xd31bk3jtqRRJ2AR64zYzNR4fkgVzSGuPHGMwf7aLcyaqW84kLHkTCRWYw1iYQkYN6K9JdqDnYuVJYPrsUdmF",
  "key29": "5jLh8FqmPyFFq1FW5B2VTXvLPFPsRQQwzQ3LcSjviunKfBsD45hJ831fca6at6ZHvswySPRb3aPMpXFpVfAD4e1B",
  "key30": "3rphNWBd9Tw65md6wMkecBw5GRxg8Cykhg6F8GmAW2r29moJBAGBT4mJwD32ugNG52RSMRj7h62qs2tVXsj17D5X",
  "key31": "4KoUsu4SSDDj58ZPj34jMSZVBSAbdRt1FT4w5K2P3TaBK8ThrfBnr5Pn21w9k9sMVBDfSc8vnPc6QhRU8yASM1mH",
  "key32": "4QewfUEjh9NKokNk1e2xRtuwbTKaKNtHCiSN7fmy1XddFAu2ycn55pQhCyfe8qreXdHwQB166iVTYUgpYebhXssU",
  "key33": "2abk5i6woMyGxthQou3UiAHDtXtnp3iktqrkYK1hQyg8JNMc6ceZ6DxX6SNdcgptNdVKDKEzXPC3EJx1p7X3hqGC",
  "key34": "2qsZCmqjvBNLLdYuq8koDNYetuJmrv3eNdBXV71T9T3ryFtNVVDEJbv2WqBRh18iQhF3V56wPctG5h46rmo48ZTS",
  "key35": "2Vcqih72SiRm8VKYKbuBVLjBCdQ5LwHRR9Wp95UvcProU31pAr9PaRFKsz6W2Nxr1QjN9RBGkybpfwVsXRbaKWrh",
  "key36": "3YJmDfoJSypeQUgWc274WQLzB2bTHC7hkc9NQCD5gLCLXS64UpFcDLvzys2u3LQfjcKev4RWj8mfKtR4QVyA7qU2",
  "key37": "51wYGch5gznwBqzUyxWby7APPwVoC38gcpWU2rmAuBM67jSsBankWpSDJ9jwnnBSvXDMaiFtDKTPmqTyunhcrQQG",
  "key38": "4XP6GM5r7hjpVkYVkvtiewYKAQZYH3MH2gJXW3nxUSQJXus6xwrq1dMrX45KZo2CrmpkgrnHZvsGGgNMixbzaxsD",
  "key39": "2YitCFU2jLcXiYYNsHLGLvahmzQLZqg2LeWtg3BN6HFqMSEu8XFFBar3KVvCYRhs5ikbURYKURi8oPuhTiY1WuZS",
  "key40": "4wuR21jZy2ea52WTXn7ZNeJ9Rr5wxtXegKN6N5iX3Y6iSUuq5JvXyd6fD1FabaantytyocST7nbEfRKN6qknqpZ7",
  "key41": "29yq3iDAPex3sPFuMfmubPiHzGSCASXaL1L83oFWonhunrmjDssRZuqpAojrpSoGoTifnsAJixCC8AnLMJFBpfrV",
  "key42": "2QKmFCi3nbEeeWMi1riFNZnxDKiRvsRMrzFUdN4vJsr7diuaRy2BokQ28qNgusgFPBbVuxpXmpemHz6zEKieigz2",
  "key43": "4JgefXCgQjRYW1oBLXz8pWQ8mxv5trUZQ3UJyvat3oSBTM5mLjBSScq7QQxNwUBiifXY8wdthBVzjet6Ga11RX7h",
  "key44": "3dws9Ah2ZQGmVJw9QHDrTiLfc1Nu5aMvn7Re2zkEt4QReoGunzBDF112qHeXbEFySjAT8HCYUaRFpd2rbCsrL9Yn"
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
