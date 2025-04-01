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
    "3C5FoXncQ8gDVrLZargS9dMTvDcSQMVnq3y8Ekypojj4mjGa1EPBdX8tktaBAJ3QDhiHwwNC2xqHjTV7AQxLAG4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fA8GKHXqs6CTmkkhdsGFg1ZCUQ6axSwQZtPjCpg91d9KJdCexr5g7erf4m1tyhqugCqxwC2EkDd7TFjkozHy65o",
  "key1": "4gbVGev6HCyjkmujymw5vq44eN2foSf4jQQbhfTX7jTPDwFDncEJ231vGCoRN1cWVm9HoRiN22kw7ve7Eq7fxD21",
  "key2": "5cYdMCYxYLDgU9HK88i7QEdTvTaTARGQgTF8xL13gdDsd9yMZZ8DwvppuLmejko9YqXoQxPykPMFpon355cJR2fr",
  "key3": "4wNCBLSJ8RfcgxyWCxkSX7mBENwDoLvkAwpbVCaG6yUCZzPPpu7mWFPcZmdKJapsY8hj9cgV6LeJVCJ5CbZS9JHP",
  "key4": "3v84QKcMhw6EMhiq6XVJsmk3MV3udgSKYuRrmtKv1Wggo9EPZqptZaEWqRcDMUQ9qMoHa89Y6qDkN76CAEupzQCc",
  "key5": "kYBpGHsJBanMkfPkiqfVRKm39XspVh53SfykavwSVuyiCiD9QwGdipx1fp8xCuXCnhLeSJBZhYoNoPLRsz41wPp",
  "key6": "2BwnLKTU3qLCnWhBuEqJwyEqtmDwR727qyz8zE6mzgGYiQKZPu2wxh8JH8Rg98AxPCpvbCdhxq2jkF8TdKFQqeZQ",
  "key7": "9US55RZdFxBhW9Np7DC5chjoxpsZEDznQjcy6kkvoCh5Wu2zveobK6DvNzHCCB9MTtR2kjSx79Kr1aNc7yJ17zm",
  "key8": "46grqm1reDyc7KsZb8rcxEcTV8wpow8DcgkHeNZbZc426ngHyL7jtDvyyPuyijbLJEgHbK96JxM53sVa7NnKFbVo",
  "key9": "3MHtZnYzBHDKNWhKrC3o43KZ8hk4V3pHFNBGCqqjXBZCFXv8sA2ELfKXtJekLkbRatFhaxbXxmuy65FVkG3wPB2H",
  "key10": "2bsSWpLAz2kCvJCKo5TGibvJtasZoRqPW9XZ6T6fN5J3U8CHnZNoAk1qRiGvWv4iF1q7bY6eRJxMFhorSXwxKBq1",
  "key11": "3dDQBR5ZDXHcDq9DDQERVqBxSQ7Ae8hmF6hoap85uMC542FwNJ6Wd8bL3rorWe1hrkigp3LDpESVLR3qfRZCtQvy",
  "key12": "5UEkN21GFCxmUV7kxgjQTakZT1LJwyU5rMRLHBqguLPSvnqX9qjCrnjQ2hGctMto89gwVPy6ZLvoRkD68Qxx4sds",
  "key13": "2WvYJzt9HXHVZe3sU8oeLK9TrVAFXsW81VaDHEiPbXbPVEGMg79qm9S62cv5GuvNAAA3WEMnsz5LYZ1odQts7aqG",
  "key14": "3uiEUbcubB62fGPZ8e61WwehnnovkUdP8ZKYhSTKkjAWrhrQ97reN7Yx6UWtB9wcFVRQCX7pGhhqySeL5UNC3YB8",
  "key15": "2QofSAaziFdKqAEDBH6yLQHZx1KPppVRomxmYLAzq4FCZAa5QY2vQURirEp1vUvVZHLPWyLhcXmAwikV9LXCeTNV",
  "key16": "3b8k6xsaRSAWr7qWCBVtQTB5U9CAkzZyXbQXvDsygceAr4cUkCchdGhpZLaVLsgiVnRKwuJPYEqju5bfqnL2N4J2",
  "key17": "4Renbzf8REJ9fYLw4u69gLwK57D1saJrNBkcz9DUZdqU1QLCu3UBwjtegjjocHmfEnbzcusDtmp1x4SLRJEDtwK9",
  "key18": "woEKzknYk7MC86wGcw5LV95Da3TzcGfWPpBAujgEGzR7KgWCCB1FeukLA65LjjWLtrtqZcA7FwbmLauDk3vtbe9",
  "key19": "36PoU9C9mDkarPUrFaoYKmCBQHoSLa1kSZ63zaL2NefXpgJJdkVrfJZtiCQZuN3NcQe1GV8x7HLi2E7D4vdzgSRB",
  "key20": "3N4CVbxcQsHYuFeAHKH1SgeECFAcBwPKpvDuooGhFDeF6d2MWE7A2GpTLA3yRoTCGsv3vfLKyV1RPzBKWwseARzL",
  "key21": "39Qwvo9XhKRWQ4eyPE8NuXyQZd6bi6p2i1ducpQdi563oPQyqR5VUYHfnHwPzYhmMDrtH8duVPQSz1xiyCcENErt",
  "key22": "4w3wpQ6enFA8udeEFqaMbtEbikeYUQGMJ8NkWpsChTu2JLHtyR1cqtEZ6KEMsJhRsrmsEUXLDc5CiXanJW4fmBZk",
  "key23": "4cgby4R223hxNCZxVihDRTRd74HXJWtXSZahnAiC9g6X4m8Pf1trTDJUFs3DbvzTTKGUyfLJnsjkwyeinH6pFutL",
  "key24": "4eVSV84DZNLwPN8MkoQ2wwVrNrpWmg22JWrM5yZzFBzEdVFY9iPmSQ4ckZ2vdc9AxH2PAV6rfpXkdSBQvqjxoRar",
  "key25": "4ckr3EMwNahpisFxo35xKgfWfC8yRLQZAcY8YsZgtMrg55xqWgW3kvUSFGeW8YpZ6x7sPVrUBygvrkbSQt4Z8ixQ",
  "key26": "51DjRmUMSxu3VQdjAjKwLZjz7HofqTuWF7TrZGCjAj3ngPf8rDho7vDbTgshcUoCXYcJSguHfwHtMJDsK4yfHbzw",
  "key27": "3QL58bay8wvSDM43KC6YPTg98nyWd9B4cDHLTPxihbWB58zvVeh2yuvHgDLxSQxLxjhcDJ3Zs3CGwAcJSY8Q2EQE",
  "key28": "npWTEam3bGqSZrwGVaGDiCWC5Wv7H13FTMnEw5bHKKN7XtkEHWiigttEDtj7dxL5CUY61uEQXmhpxUNriHGG1Y1",
  "key29": "SBD6fXiQqtBnqn7FyrYcievzbH46q6jv9MmiL6FaS5Z2Fw8Cv2HtBT9h3Fd7FhHWBxovU4nShjduzbQU5VoP3kc",
  "key30": "5yp9yNJi7KnD6VfZMLqY5tP25sTeusub9V23TBPvCd1LPq2Dqhdy4TqmXzmDi382yjriAMxLe8Vwo7XdyVBagx6b",
  "key31": "3Rkp1t3PVN4ZV5brvwiocMhG7vKfxZenUgBNHFDrMKgVguNQc5ScQELDPEoUFefUiJ2Z9jDcoNLVfih9M5E1M1Yb",
  "key32": "2Ys4ufkM7DdWEB6QgjykEdU7ZuhcnfaW13rt9wdrg7czmVYM7MH2hDdxoC5ertcB2UBYo6KrTPr9cgc6B8W289Fq",
  "key33": "2BGGeKfCJXaqJK7Ayc491aLBr82rCSRn36ugviJoKQWTq6n12BsdczqGShdWLFfjC5kuTeNhrDanNXMktFPJsrQ6",
  "key34": "5wC63rQLE6kruu49unvqzJyDLGA9G7dLNBhzxPS4TZjoQazutTjCtXTYqoHY6suPj2ajCEZrFK49uWVgeXjjSg11"
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
