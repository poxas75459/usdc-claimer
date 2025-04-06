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
    "dv4bu4vbYw7qiiKRBmPB9G9fJ2yUhkwEUYjvqkrJ2nNJ2v25SHuYFomEtHb5GUq96jiorZYqtPGH5GQYnq2kkdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFXQ9cjyzrp26mVS9hYtshTvhjRhKTeqG91shv6tFgQKYzSpCSuaGiBwbtTmkBKcRShxQD6ggQsNGiihhGp4Qhv",
  "key1": "v7hRfPfUwwDPS7t4mZnhuZUUkETL2NufqoqLRVjebZSXzRoXBSEYLxjhYCFM9BHf9DWF2fADAab29FhUGNb8D5E",
  "key2": "4v1SaubjWyvuM8xmTkf8u6k9pXKCPBWxypFm5r6giB111uRjqXf1ujup1JL8bzR7GkFPnA1q8DWTXPyVqq7zTwnu",
  "key3": "4rU3TUiaAGojgjMMQnVhe74CmQGoMFwnk25Y486PCkrHWBtMFGXhh1pbkMrM27pCRPXG4qSDh5BGBPJ2vpYqNxxK",
  "key4": "5UvoT9jm7knKPqoPnAJNaeEoULfxpai3zke7jD4F3DZv4STnRSt52teRsGjcCiHCZA2dVazwLThk2b4wt22tJW5n",
  "key5": "4rg76k82b33SMcXV78e1wrFMA5rfa56JFz8W8frpf9vPw6yTfurFKsaRVPEsPAdC1JMHqpKionHLywedjs7FuTMh",
  "key6": "3VnJShq6NerZAujauL3QA7GM6homWRyzChGaFrgsUzD6fWiNf74KE9ewUfMgXaLehWFbpYp5WM7ZA4QH7mcaDbbJ",
  "key7": "6vLAt2gfy6A3HVga5qhAa3rQxkjJ2FcrBsc1H95856c1chR4yFLirZFkuFNuYVBqoyA1fkvNey1Aozp5qSYVvA3",
  "key8": "5g2QPpBzDEurDotehfxrMzcBC9BPSJ88hbJqBvYMeLdudPqev2rXyjpezJy3iZFcku2pidFRDmyEB73so8NYksBn",
  "key9": "66yA6GGHxsXCevxGgcLaMxMz89wp1Wggng6srCB7eHzBVaFMtbnMEnZuH67fwQtpbv8NqEM9WoeSGLp6bfBpb42a",
  "key10": "tp5dH5HNFSdgyU5fB414LStjtCZTEyrCJcico8fNzZ5gP8TA5DABPL7dodTkGBh6np9f5jNM8H6ggtufTqtFuM1",
  "key11": "4P3SgLdwaXqCnNY4rT5jUW2vYQpXyykz9cgLpKLTb2ATHWECyeZ2rBLbiUZGc2ZNbgtmXqbpWnQZppR2z7R2U5Nq",
  "key12": "3A29r8qEHq2LaFdesrRgmpKLaXHx1tgzsmXUWVNLd6HJdkscd68ShPwzpiDkYo3XLv1D7yfKxytNiwZ1uQuGm7AS",
  "key13": "5hSpYx4XwY86JmVZSgYdA1sqXcGVK274ifS6kNYiQA2r3sHBps8cgsfeKbKfpP5p51HpwrsnDuKyX5cjh1cR1uc2",
  "key14": "5KcejzcHRjYvaj1pDrFBkBSbCCVnzcCvbDpijnQoqC16jFkXWvDNv6rvMdwQivNoZk31FpSppX3WKruAKZfXvpPs",
  "key15": "4HLfjyh3EgFKAmjXGmeePeyeTc8ofdP2gpMaedXGqmyMWJS9Ps7Hn9RK5iDQKcE5jLgXa2nJKrwmfdn2LjVgUi7Z",
  "key16": "3HjnwtujLHAR1TirC7bXwYDJeVMugRBdAfRm72UHuycZBA3nHXoFAjtKLyyCDYi9YtFdk9dxLTZtyPEaFdMKTYoH",
  "key17": "3aMRLi8AWDX45bspihp5YqfELL9Y8W6seUhttAzEmMDQx7frFZuZD5qDXi5xdQ957LPgG3aExoptnkyFsR8kiQ3v",
  "key18": "5VnjEE9pL6Nf6STJvYBxjjgeFsQq3rALjN1HjpbJGtXgUUVJNA98oot2JRrk1UTuqQ9PNor8QexYSjwBV5w4KqNH",
  "key19": "39pMvMnFHL2aYghe6tp1JABezHcT9ycfc9MhJDGrvcGmaEr7WETHBMTgmSFaGCLoRHL9RuTckv78BgghTfAmZqtS",
  "key20": "293H1wB9ip2RZofBpyzSLkYYM5NCB3oVt6ZdtPVyRMsPGZr2LoDDu2HRe8f15ZMmqMbz7rm7DydidW5pkpmV15T2",
  "key21": "5thzDW21MGk1yeqLnWjwRatdXwVXueizTmjwA8D6iGW4PzVdkAhwM3kVzNLjqAxKekgMLomVHzLn6tLP6ZgYbW1S",
  "key22": "4hs7sev2t98kRpd32v8gwfAP2FarFGz6QhRf1UJW12oRH4kzT9PkbapVN7bFbwAJSseQMPN9kUcC3VVL3QpXy1r3",
  "key23": "5zta6ZXkMTHuykS9GMNJ2CMkQDPpd6congEhqyezCtnHb3erxQGqQiKtcgjHb2vh6iPdc4nJd5GMmU3bMYHWB54",
  "key24": "46uidpdebwTmCVX9ZNdAPq9LpRGE2sDpvS6GyFVb2Mjs6He5Ym3iW1dRebkFmRWzhhWKbNBU9duhggi7yXRk1Tt6",
  "key25": "5WBsGYEYUECY9kRAvia7YphkvhAxjdeo3Uj4nFvjvYoqp7cJNbbv7MGYwiBZBKR4ZjCcwTPXBy3BzuWcFsGjENWK",
  "key26": "8Hn7oxuZbWzxnThrYu9hzUdMwjCwWxLG2fzpvubRTQt4N1MXLE47U7aRauxiHJYYrF3qhc4cbFwYhh6ssq7qG3U",
  "key27": "4jhBp9M4oa7Ec6F9kFaAdtdVvgNwTDDrPihf1nLk8ogZVrL4AXeuvoQTSLZwL52udB1cCBtcBjAvv9WecF9uDMr1",
  "key28": "5A66VYfpcPf4StQqQDYrooShx8FnBTzP54xFsnqkAA9uBqgxNDw7eWxLYHqKRGB2Xjpf9kmGr2GVXVyfJBhhntVw",
  "key29": "61MoRBxSWsJgYPbAWfgxdrypAuhYHyFdCKi3A84TQT696d81Ek8yi5wSL3wC7K8udfdPxvuPogadQrD7V1xPNoYV",
  "key30": "2u5tEC8wvzKjDStpoi8UQy33YhN72TQkRk9XSUTLvcfBzLd6hkSG8A6P3eeBAGK3r131iiUUByELXXi2aWVCXGaT",
  "key31": "3KD1132gea4sJ5JTAwTNx1rk9yBanbmjQ2DaMo4aFqsFhg25FSMdbhLpwcB1hAPM5iuWascWZyFSfQaWfdLwQoAR",
  "key32": "1xYexdS1zPT8aRprtMfWCxuQt7BeJjjP6t1vgXCNekFkhkxKmuvPoEb6pqYb88dfp7tgB2tkcMbdCMteA9NVFYD",
  "key33": "3DdbJNX7kMg6CB4Fa5Fb3zjQWgVVnDWvooqv89z9rsSfQe7StCjyFKNhHdjgMDhNGKKqYPqJz2Z4Pn61yyDUvK3b",
  "key34": "42eKcLKEQyXDHDVHuAzJStbQEUSLfLAu5QN6kMbgAYViq8MWkeC4Kf9HqzeVSeC6vCrouwJBYcSMfTLApRZS46uT",
  "key35": "2B8hknjWuNtE1fGHh5sxAjSKVL7V5TjEcCpMpJFSkF1DmbAHvHi9YF2sHq3dXBmskHuNuUVEGQSupC94JcvTXaTe",
  "key36": "2nz91aWvSL1PEXakoWDJGAxCivRPCsPnwewKjVR7Rf3PTfv6iSk1KUb9onssgx6QPfSHrDYprxGyaC8x9N8sdz1o",
  "key37": "9ki5KmZfzfRspBMMBUNyajBaCK2RgPGydMkMmRdgTg4FbhgjqEeiLcmPdKhhGbw5VFc5P72qWMuQYMFNAChHpKu",
  "key38": "4Jep6hg5t2TWyQYmDHdK6FPk6rmX4ZhDSF6FDQCdFAo8RZZbt21b1rrjYhnNKZuTezAv2U7hf7fZkGqYBuANwbJC",
  "key39": "eczQSWM64rLsVKEyfxZyH4Jmwm3emK9UMA8FNG9CEwFpd3k617seYgsfnubzmPFMCZrjxcQ9c9qRnty9Pi1e9UN",
  "key40": "2Z4whow7722b9xjBRVHZAHAGp1kwvsgGXhzHWtT5W2jXMan7sEqYxcYoPmfpqAAm9N841wqkJPXuXt1G9PQmTkJV",
  "key41": "4A4EVEReNirs7ym1uPTg3VrjnmtoU613ccomMaA9ywHNopZjbVULRc2dna6vePmy9fHLEodd3jZj2TPtCB6WweHq",
  "key42": "2xm4TJkFr4hRRPQDkLgYYg1Ct3GqXSxXPHWhnnkBGpMfX3NmvBfbMhu5DD6ihiT3U4TewSdxK5BbsNBGNhn1phqh",
  "key43": "51W4138PAEhZMCtCXijsF2QzeYwdnqSpPbVwwKZnkXHA4gvWTf7mqYWHFK6JZeBMszbFBadjNwaPtyNWqDQ9tued",
  "key44": "2WB7h3DGxYLT6kqVwCWz29unpNJjmYUk2hGVPuPheC4ekpnmCWhZnoMJAREjFueCuEckeugeB33bXjSzMSDfBvKq",
  "key45": "226ZoecoXQ4HkK9HgrzPyoHkWMKXDqZj7GKBnnFBCF2wAr66qZBJ7opWztGRz9MFirtLNrmrPTZfhiCMQyqz8V7v",
  "key46": "2xZPm1n4FGYbH7vnY3z45J29c3oDGH9ofxqRzmJkPSP3w5XZYb6jvSYYwovfnfd29prHEQS9oBQpYqvxxP8GYZ78",
  "key47": "39Lr5hxDBc41s5878Sbobfs35a4jiSYhcxauiTivLtgFxdiUgfoyiEMEt3nt9PbYEo3LzdS4psxMThJeEZ6uktCU",
  "key48": "5wSd3TzcjQcfEvbxA8aZVuRW1RYopTXK2P7cvXTM6AenjPKqzzLvE8QojLb67kAC6stT36fZdsZ1Jqwtb67sppQT"
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
