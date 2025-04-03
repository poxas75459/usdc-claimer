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
    "3ZuAfrAfzbWuKrKKCZsPm51HUAjTpiKivyWZ2EXwj2e3EWe7t33soSSmQNragNt2AKDjJAs2QecFPsacVVvVkY2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gySYUQPNEots3CmhLHKzxmSCxoH16v4TZ5QKNXKpc7dGktA8HnsUa8hCDuLqLJ5Er7sXU7SkKPyfgSpsaeYjN34",
  "key1": "5brQtaM8RUuqh3mTMusjRWuqsoyZEr2vbuMcVXukqE3NZwuwpMFh5oyoh84w73hwmNt3fYuAoeHYGaiyLEE3wCRT",
  "key2": "kDnKibQMHHrXuk4DHqTwZhFqJLgnrSoEBoSZQZsiusRqeZsgCeSPs5Uq7hBm9Cx7HX2tiaKDDiu68i8s8nY86aj",
  "key3": "23rp2D6N14Ccm516PjF39muJcJqwiQRawWRo3jUUQKLvCpwmdgrJwTHMqbHEJnUgacn9GDANWjHQMxjsUgPyXBn7",
  "key4": "4MxpJAKRxn6rRLif955Apd7byugPjSyShyhmHersqMibFVHXYJtSN5cbpAb281S9VgogXxRywsf4RHYRWqw92ws8",
  "key5": "6iHYqVEScErkkcGN4UuvTT7xojhDhnDf5hVQGUwHtypD2o3veKn8w6dSPdXZmeQB5QGTMdkTEhbVUjLiP3zrALG",
  "key6": "4hMGUDNm6RHvhyusWsSvxFcUExsiaYxA9s36H1wfqMLoWzh53HASbAVVEmuW25jrkPNdErcTr7wmgswyj99giirY",
  "key7": "2c8wKMrRy5uB2R7MKNFk9qEjS8vjpFw4WWWJYkrpepVpP5nEwHk9eoDTHutz9gzyq28GXu7U5BFP2H88czRJgKax",
  "key8": "2gUFfXXZP5XzPPVjk43o3bRLcWEHx3J1uA5Br6V8pP6Uc4yrp8Pz4JYV5UeY7hCBw5mQZFARHx1wiAHtXSE4X7YP",
  "key9": "SLofKuGdbTw3yGuDkpzw4UopiLQvRrXacThVXVVXzmSbqztj3hjKPiSqYKGhq9F8wku2eMhCqTAghsub6KMDyYb",
  "key10": "4Fz6fxx43GkoHE7iUgdcexMAbsdFDth4YkMp1HgxquDtxodDUGeLGT9SdgTF19gC18MLWKjxnSf2k9HAYUchpmj7",
  "key11": "LzKfA48dLgnefBC91W7b7ELBGe6FZNu13gVCajdgqVzvhW5ymHyeZWA8wB1jPMpYXh7QmzQHsDWLCVsYFVrtzv5",
  "key12": "4B8TnGQ7dsYZgzYHW5dDm1vJk4R5DeVkzbPHfQQ8YNuPYgu2vxbWBEWAsRvuQFgU2q9Sg3VCvU95WRNKNG4g1EeR",
  "key13": "bHaqGdFoABoCjLaEe6VewbkNDBjWwPpD55ibaAcfcCCMEuD2XW3Gzug3ozqwLWwfT4756Atnusj6JW4UkJHENBn",
  "key14": "57Z6FySabKfAioEzjfYLhbHmcb2JKfQQCniskvBGws4TFrsWaDQGvKxFqq34baoi6zAn614oj1HMQQ68EfTmbHQY",
  "key15": "474PkvmhQk4egawQi9QfMeVLsBNgpgAgSujKedjxSpop3ScaQ57e6mffEKoRsmcAyxhku7oFuRtqqa9jhZsxAP8F",
  "key16": "3MT9RRrPRymKvES91skZqbEBmGH6JHzRqfqYo9v4bUcEPB97WzmhPyGM6Rqr3pwp7W3g9fbgoEAFhmvDZjBsZGjG",
  "key17": "4f38yDWXmT18kYW1oUD2VuTv7tvR64HD1JsFwAK3RetEiUEw8XmmHB3MUVvn93EGNkYiq2hGmsvSP9bxq6UA8nq1",
  "key18": "TK1mqchEjtT8nURauzHb46X5Xv92ce9dC87SxHcyZZG6ZLSxzSiNfhjr3VLaT29H853KN6e7e9JtcaNdjNkAvE3",
  "key19": "4ojR9g7fEPn1eiAKENese1gV2pyR6Vm2oL9cwU7YMjbLcP3eXrwKE1Fi5JUAPUaoCAxfrU638PFG4qpoU5CbzbwG",
  "key20": "5RJo4N7ZMifaKu4RTqUCreEJ9v2REwDuHPUipBgiWGzL5KrAtuCoCWjYwTj4KJv1r6SdK2wVpKtbY2CXnppSweXN",
  "key21": "2aUuxjoiNJMmweeGm18sc9sw9Mmrxkt61Dc8Mqb5i5aESs4MmP494SAJiCtsSbJmpAwocLjM7WCcsc2Q8V1HivMn",
  "key22": "65GcUkAWW33dKZ8v5LuC1nSsYAkhADFCenkAgiYqxhVLNkmRBp2Lv1Sh9z2448DCgDzUrLYAZL3uSnK35P4s8tSB",
  "key23": "4WwDW1X93RZo7QReaqRmFwpqG2sbsTkPETsmiH2ukXfZETUxSisj5tbNp8A65XuwuQAFLtKJ7UM2nxXUTxTeyrRk",
  "key24": "3tG2Hsm8pBDrSNKULwXij263jVSSruKVS88Ds2S9uUiJGeUnSo2xDEv7BEJ6VGTHEqxw92b4AH9Kq1EQtJJWYqd1",
  "key25": "2wr1Hacjz2AhBqzQcnQai9QHQbdw3dcUiaoqRF9GHwi7XdjTWULwucwfTJr5BTcgzVupSfhP246GSrJJQ44aRGK7",
  "key26": "5cCtfCoiGaYQciyQKtagVovZZsENYeAhVNZZnvGEvLbsV219MZT7JMs1LNXFX4nr1MBkXiLjGaojauEXDA1TSwWR",
  "key27": "4i1XTmRCKc6ZWQ7U1SgSSQz2qkjAyDhopKBavBbcbjNGg7s6sNQdjezsFRxRwffUiGFEnCMcJZyiKYo1E4h7KjyW",
  "key28": "mBYNu5RRBc6f4uCv42RrCGWuWeKdhu5ZHsGrRXKSzfC3aVw7dmX4R4naSufgH4k1mufW8rC61hMwhyvcTq5HADm",
  "key29": "48bmu8YcPe1VX4JpiPtxYkB5UPLXBHEDymq4qnbkWZZpodqr8yMjAzeRUXGwQr81DkNqwGAeVYv3bwkhSHk7Z5RJ",
  "key30": "228rQCDfxsYtEsJKtZKJxTyzJDmvWqPR5rh7TDSwdtcQNFeCpDysonyaswGE1Nz66c4HoX5M9iwzivAnjBxuNRjP",
  "key31": "4dhaR6PVBsMBFoMKNECnwnowD8Xr9MsfuddAb9MoQskkkU51Z43WQL7vHQdPngrgNiwgUoTwjaz9T3yYNyKze6N8",
  "key32": "4H26SEpE8sc9wVqPUCU475ih5iSJt3418MwxxVVhNEfg5i7NQHng5RQnQPBxSxtbqCFAqCj1wva9NfJUFA8g6TYw",
  "key33": "4rSZGv8BatWnxdp5BeDnRjkdgj57tUEkLo64tfqYxG7QvgjWPcTa9X8YJ3QkxHEeeS8qvtEh2uZMvHny72PhUunh",
  "key34": "3yA2hDsDghf8Pbbcg4QBYwmM6Rtrwi6SdXqUQ3dxvduvFTpTbxXrzKAerPBQ6zkjsNr9hW63QPcyCoBvntd3F79n",
  "key35": "4uGb3TckrsqXp8utMNRspwE7K8N5pMfmZiFRL93Wi6jMGGnX2VRxV62aqmLUdfY5ScLWX8ZBQUeip7u742wxWyPU",
  "key36": "22MQ5JasYg3Fio4YKkD8xF5VToCztsC9qqKCcnhRTKKvgne1agjH5oYqCbKHfJdyNKR5RH1rDy59QksWmk48sVtv",
  "key37": "2iCTmoof1uTxBBNsZ8HFe3gvsb7idoRD9jUMXSubP5NM91R2LEd7hmAjw6da7STxGNZuhAQ4vvri613JuqVnPDYj",
  "key38": "2NNp4bRdK16F2igU22pjpYSyvESwEFaPrAvfWKG7b9kLuT7nR7oEXmtvZALZAtKAr3TM7zfp2MqUVZxxPyUbowrT",
  "key39": "38e5pLQEZDxJ48XhVrXeCw9E4eRajgT7tbvvFNsXHHP1YTt2zeUv7xGnviTE9wC48LxG3MAbrVu3qeF7oJWuJNr1",
  "key40": "3pbaWQL59b9qV8kFVPyaRhLLbh6wZyJFVPgUZRCvWx2At26c8rgJQiofpc8xHRkHg493GQjgmJWrcSHBRAvNY2bC",
  "key41": "4wFeRc4zabc29Ym4xy4E6FkiYNzeF68VcMcy3LFNPXH1UQmnHE2rSwsPgKsxyWSwrLo6pr9M1gDXgVxt1JePNSzr",
  "key42": "6coPhvVhXHs4Lq7KfH1dZFoccYF3XSvUznWJ4GCWSRZuYtiUBcH1Di7abpVcw2UEVHrbRk5xqRHWXPtm3AXt5xH",
  "key43": "5wD7bbXnkx6Z7Ao5VK3wEhWVB8TjpM2Zpv3x87UZGnTiQqQSzxRzeMYCyEzeAHGWqE1ETuvZbZ7TmpNdytWXRoa8",
  "key44": "5ETMEM3qd1HAGGT8hP34u1ftzfJPWFyJeh16KHJKK7o42KGtdP7aQyvbqAK3QQhZ3BEqekf4rjdxvwRUb4Fc9xeb"
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
