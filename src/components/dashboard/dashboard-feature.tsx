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
    "UgcmgqNK72KzAV5ZA4jNZeSLK4KUDBCx9HazGppT3ZYmg62PgoesihmErnSmT54ckxmUteU9UebLnEkNCHYd6Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxhxxFPYRxdBkveuQA3PBXJypggtBM1nWmRtwSgU9Z87myct67ryBWU3X5BjKGWGdoXVJqjdEPM71mjftHZgx9n",
  "key1": "RDkBSwWhDoE1P9WDqSnhiM7hHC36soQ1m2Zw6Rb6PkYd43amYXS32Pr3MMNReEewcnLeFcKnwcxY9XJbZaAhiu6",
  "key2": "5MTxPa3puXa3wXdHjGrK9sbDgCiz2c11Zn82cFyM4ujjuJzVbiszYiwcL3WVhhhRDSit8iQm3GaTZejb8cdU6z5A",
  "key3": "62RuN8P1aUP4CUBHSXChdbEpKmwbQ88HE59nBgEtdCwgQdSj3Y6KuTu3hJswmXZMKJJR1d9Y8HnncadEmAugi2BP",
  "key4": "5qQ3s4A9m2Bh98LcvpUztLtNabS7o86ZurMcck38RTVbxdsjgFriG3CWbqvQUu8v1wmFnAzrxpe21xpgASQ5yjBa",
  "key5": "5G89HMWg8xUM1nBp6Ha2nLmnkx9Q1CpB4ybWi2L7b3Jkiwd7LJENMgKQrw7d7aRaDaajagQu65QqmBQ84mXUgP1j",
  "key6": "2cice9YZSVB9KJyxx5cjaJRzjS7PdnLkzHFEyW6iPCmVPe4dmkUrgarqQnKnssstWhbUHJyoLvqTyG3ujwKMi3Ad",
  "key7": "3x1r9eiDcNN7XDX78Dun3noHcLNuPGyx9X6T28EsvCNp4EnGnTAyeJaj9nwTtjuNoqaFEJgTNhw23RUdbdDRVzPa",
  "key8": "Cvahbc1P7sgeyqkaycY4cb24BcNTGzQExwHGmd3y3ihLTAC7ndGKbFPCU6zroy5f7LUdSjBT76g2nEUJHSaDJ8r",
  "key9": "3kkb7CCUvrEHusH6BoDjFAZzWt9h75fHLpAEaPbyvM4FnD3XHYvfJHQgwiXapm3Mj1UFqPCQxzPkKCA2wN6gQeLP",
  "key10": "61jYLLy3zJoWFMukCLJQH2WrT6whgHkAcfCgnBTFUHBnmHcKGfEoJQf32cqvm9oynok1NiokDVxBUjRdAzt8G4yy",
  "key11": "886Q6jn6145LaExgtUciJB1CAAs9yLt9Gq5gpzP6P817wAMq8PR3vw7cytqCvyKUVLKwCQfQUNSWDLE4fnmcSFW",
  "key12": "5utdcwfh52G8tWBPhNaCdoyCngNU3hQwPJxhnZCY7qsShvUUF67tMeGAtV2y9mGvR7ai2UB6UUL8LEDJrWX5JfdN",
  "key13": "5pKcBJUXCRWNJSH36DSutnWnGdpbTrutbinP3UnCrZqhhhgNdKw1Ttrnj5S4J1GReMe327Rsg4qCQAVmYx9fvEj",
  "key14": "2JKdtuY86uHUnwhn5wYudTdhE2HakpC74rjLxPdySGyt2TgkFwtoFAV129VUUk4QVWWsRwdr8d1pjW1XJQVbfFFo",
  "key15": "2aaxtiTJ7J8j3z4C9J5gMWhB3wFVKJKSCAB54Hpp9F95rvYv7RFua5yMP8q8Hgf5Jfcgnpw9KZ3Mx4XW69Wjv394",
  "key16": "4CMTwS8s2ZuS4YEkiFRAbbL1J29Q7W43cgtvZQyKuLV8yRQHc42WoEMn2yZJ1Ao5gUg7iQW8ew9YpeaKFu7uKjeS",
  "key17": "2fikKxLDBZRCHde2V3iWdi2NQQ8JQyCbm7CsLv9QdgvcWX8QiA13eXFn3YN8QxJGWJTVogtBXV7FS2GtsC3hPC8Q",
  "key18": "5nyHuSTKJiZfnJzDmYaqMfjh4hmHJCyiTZKRnq19QDuVi1PeQAy2tLYRPBpQ3Kk2vvUajYiK9G4opFMDX22b3kSa",
  "key19": "3FK9zipaJ63DyPwvssEZP341dxphKwiU24tqHT3VPXJ1rfsk6chWHeowxqmfoaUg5Sdgb3meryeuN2dassADk5Uc",
  "key20": "3453ggGtrhYfvxfeEydiN4B2oZyVLhtbcu1jLBrFFLgM8CGz1W6e1uhCKNZsB9GYtS2Va9ZRWS7xx6ytvqXnScqp",
  "key21": "2pa3ssdM8mhciKLV7rmANGzmfemQcp5Z6xBLL6XW4Jo1DxNjN4cjVEcnQTi9oP5AeibDxyGwGRnzC5JEXFDf2YG",
  "key22": "5gJYjuG71dF4nqQYUtftSKjkCTwdzQ8vWvXTtL611AVoedxTvaoEmwbfALAKaciWy5fCCzrKZL2P83ioTTD4F7MC",
  "key23": "2ZpaghWujDsDuGbNshvey4opTZwMSbZTRoitBpCAdbmKXBsV4yrCxxAyMvHjyVFMoK4qFEURgrRzkXDWXzU2iGdz",
  "key24": "5ykzazZkjbvqWfDXZjTvQtPUctUD4U1GNhfoKzsjRKUNabVj4UxMUiCzHSTfDkjQ1PXeZmg6TStpjLaUWnZXWSZ7",
  "key25": "5mhTAw1dArQso4Prb6hiQkVgHFu32pkZ5KeeFbaNRYj3yEP8KDwvFP2kgCtGyoKEjwJzKn145RomxuzdPegZVevq",
  "key26": "Gvp82ifPo5QKrFWAwHpxuNffuDtfHPwKxmArBwZP3Jv8Cfm51B9JmHQuZZdYk36Z9yDFFF1oiLxS9rRtwXNya4N",
  "key27": "3oatjWoyFiB9h6fCcG6aUJZDxjd9ngbN1ufFJHYT5FPwYERzLCkJVpKAFtyJvw6DqBxvhbTigNbWnpURwCAbJNkv",
  "key28": "4kyhThhLcLPZ8JXTqz1sQAiRb1A7tcp2z87m83ZBswG9tSgkagL1W7bQtdj98WLpUqvw7hxK5uXYZiCvXRWfKPfm",
  "key29": "5iZC9obcbsMRrrCK7rUKuQZo6eJbD2Y6LBCy6wd8enaXnnkfpDMwbzCWZgvdGm12rVGvTHdBxAE8qV37zQvnGB9h",
  "key30": "5mG8oEY313mHD46Lo1uNCHAjy6GUE6yt1AzgKJ8nNicc88iNQL2MH8x8PcSL1KdsptWV5wkG7V8UfzXTed6FWyV2",
  "key31": "3D8YKK8H16b7bBJdtUtRw2MXP5KsnDxQCuBwzR6AUxnxoodcwfm4Wb11gxH6hugPiaHZr3qEpDLYAX4RmS9to82g",
  "key32": "33LQHa861uxgvDAVNCWGs1wci7szmxfnF95XMEjaw92RBhid34tWZ1jnk3YKS7CSdYCwH8WxtsqA3FehU5gzM4jh",
  "key33": "51k4TaM4WrWezEUwetwUN2tGwMQxo6VNDseM5jYv93hnmqqE1FxVGnBSiw6xnV5KM76kqRUgLgqAveEJxnNCw9Ta",
  "key34": "25a65txA4LpiqRvTmn8NePL6cP4bSyhdPZMV2prCz3h7rm6j92NUFXLbcY94r9oyDB3uKBriYg2aFRNG1wPgzQLY",
  "key35": "48orMkuj8T78ewco3dsJXnftR4sDH529rHfcSJcDURwut9QCWCfwGtNZWXBVfHqKRmsSgkuw9hWFVcBt1mp3N9f7",
  "key36": "uV9JtqSUbboaHZ3Ae9C73yskK9sxFfhBhbwSrgCGRDiz2gz9ahJNW8L7yJFtYE8cg7vTkuE6DxLTMB1MdiNuPbG"
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
