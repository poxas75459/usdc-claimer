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
    "4zwkskXLs2wQnMeyS9N2LF2qKZVD7HafSdn4hpx6VP6LcNicHLZNU8vwXZJLecMR2cauFMk6nxCnxMwRP5NBkVhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BADqFWmeDfdnLEmFu39SWzyV8Rugs1V4EmHHuBJBfHeshTW9JvoYVBNBKaXBWTNkj7fM1bVaqmn8epUncb8ds38",
  "key1": "3JufKHYzJebwByjB6vS9K6Zz4A8oKvgj2gzFuACNAb7rYqKuLmLJygJKR2DKXUUKht7zuVWXsa3eMzyUGdW3ASJM",
  "key2": "4J4rejCUZJksm17jifrZBNehpWYSSqLUukmuJcmQHM27FokoirkmXHHAyoRPJh9LhtKqqPNq8emtiWwY9GnPM5yH",
  "key3": "65RoUEVmDTXCE4jojh6EGiTJRx7eDx1PbXFEd9ZEzHTcpuXootP4dUdQpzfChfbuPvJ8i3giwLUJz3FpNKash8r5",
  "key4": "2BjFyzG2N3YfZSrP374wEvkjMEJsHt1LiQdMXi53pTx7uBaPtzz8kqL9XprhaefHPiTP57mZGnU84ETA2VH3J2zY",
  "key5": "41nqneQD4mr23XpRC7WS2JyRiq9FX67VP5cUH7MKebKYWNKq96S4UfeQYmPksVqpaWn9qzCGNpmn44Sq5X9mUXa6",
  "key6": "76iM7eoYp8qM3R4NqSP6DofbTAybzzT7sb9jr6G8NvEe7v3nGEX5oHPcEXpcEdDksDKHNot1iMSuYrPJLtaMGvi",
  "key7": "cd9cjtTVxwpAwMAeQAKUEDFmbrmiWC8FqCfPJxJH4MrAMkjRXP52fmVLx7SYETdw9YU1LBgkoxABLVjnPgu97vh",
  "key8": "283w1gXwt4Sbh6QBHzW6dggGFSQ4ZVUPqWowA7Hf4yAxYZXucyiFtF8frgwuriPsidp1i6MezuNgUBgpeyrtPzNj",
  "key9": "3pVptBcPwipEPaa3PPw8wZrPLyNVEJAkBRRm8f5oQ91e9Abosnm2QdLuABR48boUtG9Z8YAsEQtFZaeETJf7DKRx",
  "key10": "2MDF1Hmh6SsPseWVwzZAc5hda6dvvAermbB4rnC8qSuudhjqpXpXfWApft86kKgPu7sZA7DG3N7jFa1JabaPxoSR",
  "key11": "3q1Fw4j5v5oDo7w9t7bMdmW9w7ctp1PtMDt1YCjWo27TSmNMiSkVPH9hngLweVPHf9EZJW5GpEM52aG4dAdLerxv",
  "key12": "5Th3aCNznj7i75MhUXGnqXD5DjxRthPA22pvnfCayEBwY7Sw3YVCixJRmpWWYkBuBEXMhqg6rViuuNZws1XpvNwr",
  "key13": "5foDsRA9x41YLfhxiyKnquD2e1D64cbfjTeQ2aVDK8VvZuzCXxHb5utxtAz2KFmgtaGHXUbS3ULMC4YaUUgyrHLD",
  "key14": "2j3765Q9zBkFmZfYjRV6q4cSEneugiLFhefzJUyTzo8Wp2BXRjW6UCeUEUzv4w41y9kepjrgscKjVkVAeGvTC462",
  "key15": "Gd3CaXLUQic69wp8KJMphUpuZm1kPC5iJt97NSq7V225h3RWp3XK2zkVpm2y6FSnqiobmw9HqkapKB9gpPxM2da",
  "key16": "4rXHk9moGJZjCikE5yTFQzXXh5KEjNn74M9MTENnbFGNCSjTMTu3LEC6dhvsJNdjdNa7tccL9Jzz5JLmWnBUBv5Q",
  "key17": "3it2DNWJP3GxVc5jhCDW8uU2QsgjrPkM9224K7ADSqwmgxn9nbGPbJBrLRQ87bzDrtKDzShi7k8y2JxwFm5gGY23",
  "key18": "2riUbjUsrW81RJiD4xzGWci8kb8WLXRyWQkHe2PnDSaMME5aJzu7umCQzQPixgcdXyqqKKc8oPigYDMGjCFF9gf8",
  "key19": "AUx5Xrg5EjYQucayd9JYTpY2DeEkFdwuhh2a17fPTaKwKp68kngV22KsGBP1GqQBA76qXKgFEarcqZE3nvAWFbo",
  "key20": "2816NK9eaQCK7stT9BUM89NH7DEtVQiz8ASEVxwsLkU6mPVNoCK5ETQpAvtAFbvFrz4KgAAQr4vuqPrS23VSHTU8",
  "key21": "5UT3e7gt5xTV6rudCozZ9CoQfabWzDtCBiT1gkNBhEmSnMFZFZAuMaaDPWTfsdmbCN3RgXKN4QdJEfu6Kz6CkM4M",
  "key22": "2FxkUs3d43Voqqao2Uh4UvYXPQQDePxbeP7FbqdLCU8p8Hd9g1HrMf9CstadYMLv6qd2SL1qeTWP9KW8wxYKiRvf",
  "key23": "316uFiJ34B7gkiLS8VQHQUFWbAikkLbGiUy5HRrjib6nDw39HYG4NF5Wxbua3avU1uL2XMiPvLd94jaWPiVVKVao",
  "key24": "2ShANtyZ8ofDYirbAbxViczpWpjumJbJvv9VHWZXEyfDits1ZmcFUg87Gju7pgENYKskfBo3h15vGqYDq2mZkpLg",
  "key25": "38scCEs8tVbbX87X64T3m2PmSTxNVf2v9Z9QUUCscWSu7yeAsk4U3kmDyMJXYgtttB7doZ1jzT54bMjMeBL1HTZg",
  "key26": "hEFmfE4Vwe6GTScV4SEvFYEJSdcE1RZugviaS4ssfWUutjyH9hRLWg63HaDTmYN62krkXZzpBenyLLCSuFtbBvJ",
  "key27": "3n9ywurQK15qMSewqxMiu4MLaW874BREFMhPVkBdwqgG4ECjXJ2KVnZ4VKsgaVPVghyKTvawZHrQkL2w8SZq2Fsn",
  "key28": "4US2rdVAScdHYWecGSmvSLTQ2HWX9hUJUHVtYXCfFyTCUJxegNC2DFVPKYHpY32TyAeJJ9XYBCoXkX1Qc3oP1W2M",
  "key29": "2L8aS6SrssXe9RwDHyMWQGWPmE62oqLzohr7pQMbGjM1pVeE6mufu3Di6yAwAYigY5aHzKBDNKopxmshELfrYmBg",
  "key30": "5ktdyHsjRNkGcBwBwCfmW48rkG53hNZgsZPCqW8Mzks4JCAHEUjicYWWWpGFvNTM83tjtaayHJY4uUSNzZ2KkgVD",
  "key31": "hBMpExyjatma4cjkrrjjgbqQQktFGNzQisvTZ4rns5tDe9V4YLaQLwcMKpnkUHYmB1yPWXbbHTuHbQK3CgT9E45",
  "key32": "2Ua7FojQa62NyQvUZjMKCtDkE6bPpP6JXCfZPmnUq2e2zZv7bDKNmBtRPzmov9W4F1RtMMGwSNqiVp7Q15Re6XPW",
  "key33": "5mE6XrRpVyuMQu1FnuVJSH66ZwaVahGwAZ3G8EvPVzPJUgCnSC35nmNbwSpBGTsiB1HcCMJ9o2CwrAQXf94tktCy",
  "key34": "5VcXf5CxYQnVePq9QW2nibxNBgfHoa36GSAXvpmCBFT49sEWJ961YYwnbM2NELiLBtbqRucHQNZmBUfkX7V3GC8K",
  "key35": "3maWi1rRDmK3Luj5VVrFGsou9DKCwttoHrLvZuP6WWN5LTzZsxzsoCX99ynQELpZdQmewzoF9aWoTJQRtThd7DQo",
  "key36": "2MxGwgZCKgJZiDSAJrYefH88yNrLW1MVfoeD4hH5ZhibdLe8QuPX4GViqMWEtXmpcAVAn7eH2LmatAU2QkarpPVG",
  "key37": "4chKPqNGqFPCxyaKqAZd66AEEQA56GNNQAKR6GuKLKW4RLwTCRBcfbxHjpvMXrL2mNfiPuVcmh5xMvrstX4zivss",
  "key38": "58HeaBkPcFszo2GSJD2TA2MddetWYghAEPCsFCaPkrdnbpgdk6AkXdLeNuHDHsm39vmvMJTuz51dtZqgNFrUY3PU",
  "key39": "5dDrh5kbPoAEKDwEiapD8Y5B4BJPryqBVGBFCds6Lk5t4452H8ogexohBBV4SnCm7pJQWVTf4sXJP8JizjnfPMZ8",
  "key40": "3jw5tXD39C9BuFBe2kbv7FDg3f5wHucuJ4yXQz3n8MyVS66E3vPmhYuXw1XDeBDnVg2RudqsghiFiNcKXHcq58GN",
  "key41": "4jphESRrnhqRVBwpYQZf99jLHRK9SM1VCbWHpqWvcdLEYQCy5HtjWDWgDveLB8HzeWw8rNSsWnyh184kzRKfeX2B",
  "key42": "2yyNNGnkPRTJskgXxKY5iMYmPpb3kAgXAdrXM6Y5RqYrbMCh6rbpjwghSp4p2n3Z73qBSEg7vHCNi5Jk9gCuRgFi",
  "key43": "4pseEYs7uYt7pGgGDYxLk6NDoT7j5wiUQga9QSfBrQA8Rb8z3Fq3gNN7iaFXQdpfwjo1sPHbixtLieV8LW9AScSv"
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
