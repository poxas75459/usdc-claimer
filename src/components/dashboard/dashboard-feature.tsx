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
    "29qNHrWTXFRJoikkExKrnWkKeVKcgVB1yd3WGYkaCkmigtzhPthCAcjrMrPBF4LskrQaq1tcFmWwydZHn8A1L9cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCrhbtyR1oLNBuXZ8L3hSqY7y1RN1czUpzcJCa11gjfR16EcTtSZqp9qp4qbAQkQm2bA3mbaR2KdLVSdeFfRW7T",
  "key1": "3BejMrqLR3ALFdebUhrdCadYroWUzkvxj4C9hRgqsXT7kVMuGqJymU7TVjoXKcYuCT9aZjybrVzrfFNxB2kZjrAK",
  "key2": "37GMd2NVkrvpriqAK49Awv2t3BxjEebZNxEusJ2bCanrVo5VXTKDa4GbKvPNAVSLxce1qEyU88RNXuBg2cjFe7X9",
  "key3": "eFZPbJyLthjrEnEzS74Xs2JCBseA1D5b1MCYZbDdnmDam2THpCfaS6omV5nSazAdsGeLTuEnxNyMofjF3XqyyKa",
  "key4": "4g4M635jgv4JsNoMZr4EKx946LzP8mxA11t3YEbzUocro8TZMAXNszvzpk4vHDFP5SKGAgV3WYXRTqWobdMV7p3g",
  "key5": "2U7JaW5tNFihpjjdJS1wRiiznrnJ1YhFHmkQUngsBsbDmC9GZYfCPJiSa63GUJBqti7dv18Dm1z48DWA7QGnPTUj",
  "key6": "rTUEPKRec53iyGN6F9spwgu8L6AQz8REGFpsw7S4DdSQi2yq8ALA2fanBC25YBkYNCYEW7SSnLDag6DkQLdzh73",
  "key7": "44LpMbAMnBTxnb6PXu1SpVAB1urj7zznCRe8n5bLxSk5bqo98QGCK5bWL5senFCCGNoKsCgEm7ZLv3ARHWJdnsD1",
  "key8": "2ZDyKCshUbKRuTgkSRvn8esRKNM4P9qE4fq73dgLhWunSoDHjraJLjZV8KKgVEGTz5mgB2L23cHAr8yXe24v3k8Z",
  "key9": "YMgnvQCPrPDUTgzv2GuYANdEtpxnLntPMnvjhd7ExQsptmjwVM3DVVWMu5WfHzkMipGRhgHRywqnp7uisggUQJF",
  "key10": "4gZEZwCJCVooRFT3JwZdp5Dg8jsnkSL3SwKhKi2YwPjFFA3KAQXfa914Ub5Nmg8KqR6cpvp8xVhTwjHSaGhHg9yr",
  "key11": "2wHxqyEcHdoCooonxRW58u1ftPXngik6TjjzKw2oLQBj3dTXUi1oJwCDGVtRFuTxzvWcafQrXdgkHzbbqe7gC8sV",
  "key12": "43J97rujGYXwit2HRy9UL175CKef4UHZqH8RR7XvGB3R4AkEfuP1mYn8WUCjCcZfwH9mG6SD6TcqEai88BG8mFTw",
  "key13": "5S7BjHcFjMGvqaPuu4Bv9M3haiDXKLmin69CLX74dyrJ65UYCnv2qC9xKHNpeDGHCM1ytGSRpVAPHj1PL251fKAJ",
  "key14": "5S1Pb6wyFEyGodDQf25BbWmxHeHgR8TPZCeFe5fpffEM3J74kZyebw66R1nL6eLw4fVoFGidUcXxNmNnq3a2Vs5N",
  "key15": "2ZLRrUsyaw1oRjkYa8XRxVyrRF7bA5vjHYwDrzBHYrh2jXS1twzXCYYJ8uyCLP2yb4U23atzLsR7CfRZmG1Tgg5o",
  "key16": "2W2dropEda8s4HoZe1FRwaN6BSvoWzcLhWs8m9D2Asoqq5cF657EkRy3Txo3JoRfV6jgCF2kQpjHwmJtrnquPbUc",
  "key17": "5ghmV7KoRdtnu45aaSARWxxjhkPwVNnjqftuzuXU5yjL4kVe6Vn3osdmVCAMzsy77UBXHcRajQXsmmoZjgFr5T5U",
  "key18": "2bzHPrPsoNwmmWgvTUhBxyZ2tTJ2EyCJYyxGdg5Laquy7LFkdftv7wqLWSZHBgj44RTWLvVR9WLfpxRPoPBzkXzV",
  "key19": "3dNR36CacFmGjD5ywWugjSf66ni6QusxsiiBcp1hyFUZJyhEsS1pLMhb2g3vTHf1S5vQcyi2MH4y5BoB4CXq2z6e",
  "key20": "27Fraq8uuYCrV6hZ4xdGDjSwxhAoLaQyNT6qwHen8bvuy7uobaZ8Qa1EhUFkuzBJ7brFz7YQKEsbfq2XPBWt81XX",
  "key21": "2QXK4K9bCnm7ThFP7Gua1SYjCFLNEFeojCDJu4GcV48JpemubyfcpUKdg4WnBXTTACtQDynshu4567sYhhh2mE36",
  "key22": "Ze8B7H1fYABAnjJTgN7jCbLsS5gVbEGbcBnePc2XUQsTFDiZgjKqEhAvi4WUUU1qgt9VWNEVv88a3oNxpdqNJMV",
  "key23": "4ioLwhwCGF8DasTvnRJ2bwNboVNb1h5jswfTE2CJW1Ppafzbg329PUsL46tBEriYwWwsWEjyw1UQkjg4eGkEJ7Mm",
  "key24": "m1qD96RWrSWH8yotAQgj6Li7PwZLMgzpfERLeRYAhMUpRu9niutMuvEeNnj1fwuo8TZvFg61hX235ay4F8qMGUX",
  "key25": "AkJNtFYJAjb6tfdwPdSkm4aNezwKaJdMx1oux7Q1H9hTCWaJM8fzfjXVELoPZ2mQG4o672BJJqDAYSLVEvbr8wK",
  "key26": "55hSK5JPo9x7MCqzx8Epno6ktvHMtpAWGi6Mp8xqNbUDRTLtYgYhPnBzRy7Pe5DLPy5RNgpY5qbYvN6MvhESuAN7",
  "key27": "mhpjZgWn8sLy8J4yC9NbgxDvuFkwyweYtNhNjzDMSCnPjdhw8CEfPiSf8UiM4TGTXvL6ZHLiHgAGWQqmcnjL3F2",
  "key28": "5zNMhy9bVhLAzw1sxCRNQAbzdXmgt58RufUUiSLkk6BMgVCfjLKLvoD7fGC3SYeZjZComxkWwwXjnh16QQ5eSEmS",
  "key29": "kPXNEExBDSG69b2oPLeQbc82rj2oHjUvpeR7RgtjyYdrAVLpu8d9c1uDCkW54VzWJ7HKyth5EVuk32Jz51pVVDv",
  "key30": "4UJT8KqDB5QhAx5P4Kae6PaxFHMJ7ZRjKjkwZD7ZcVF6kDnBArQaEKsxGRJaWF7iMQVu9oPdjWymKejCHGVfVBE2",
  "key31": "3X8juMWpiWAbYLN6om5P9PkVcbUnUjgLxRkkL3cQsfLgqahziuaBE5QH5ffYMANuTd2Ewy57hRDncZkJpkmRhTSd",
  "key32": "5eTPnb7KK5pjT4NpKJ3kchMiHn5JXBkyoBSYvp5XeniybBRgLs4qPAaxVXYn5vjfGz46gwS3nshF7zHn9VAcKSbR",
  "key33": "62A3oULqbcoeo6Cq89izBR87ux9BfddabdMN6o3oGoAnx5WBHupsEnNb2aJyB4bSnwkUMeZWi4YNV7eicp61t2kH",
  "key34": "aEj83yoFQ5j6WEbmJ6oCzv6EphxvYrT18zTjbpkaie5UbM9JFm3z7JoWQKr9BjrXzGHZtwdzhXTyzaBaMBQt9Za",
  "key35": "22koaVkRpHgHMVFEKTBAxa1iRQKuUYZ6WdcVa8Y1mHqkwtXDMZf4ELccNzHa4NSPL2JwSKidHpQt3tcNQffpyedA",
  "key36": "s5PHbyDY5KXKn3xKMNJnJDQiaFaAwPbLatjq8FJJfvPk5XE1K9YBMe9bjykiQGiictvg2CfiMYt5KK3KuaE3wUx",
  "key37": "5f2BcfeYT55wEi6hgwUAknuuRCuf95pgkQ8SJZugmH2oBH6h74oSWPZrkrJ7Rd1Yu2K1ew74QobtQuhww5JMzxDu",
  "key38": "2GH1F5ZzJb1F39CVUX3zWEBn25m6riqiYME7LKKp5CwBx7vbuBeCwRWriFVaMCpdKcRNYreX4TM1776aY6jNzj9U",
  "key39": "47DZAYbARmGYVjckrsBdfmtsPwZ7pKYH3Hq2g3snsQ3xJVPMz9DW6FmvX4RffnXGf5WhX9Hmk2jjg5T3ew9UB3ec",
  "key40": "57EHyh6rPbCPRc1kRuWqfehsjxwTdjtpwrC1iYMGsKN2MLa4JPAPunuuhsnizX3KyQ41PsjVQkpUgTfVDQZ2hXQu",
  "key41": "3pFDUjrE8LxSz9g8F4naR4rwJW4oAnqZxCKGMfn8UHmkZ2SFhF1uuoCcCatY7gaBtQewiK28FVt8Hy5R9Hw1sHwP",
  "key42": "376Az7FEoyxTyJsKHAaPaqDxqqzR8d4nLtp6hfhrfyZQQoKyFMhsXARbE73DSXXuVQfZK2DzceaMrXViD39Mfi4d"
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
