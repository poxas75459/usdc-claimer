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
    "4nqojwJKpGWp2KiPUY9Jnxp8pfJmXoXE8M6caxvNkAMxHaA1EENwvxaAi9FpXNBYRXuMtY7MszueHt4sjx4havLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WF3DVfHAcuFtDEaGeLdRmkdk9uGoqnxWquxSLJtD3t3NcF2QJRAGKsRXxhCPPwqZXpfafUQ6bp7r7GtzmZ2bnXy",
  "key1": "2VJSK8AppacTd6Unn67PDrC7UB2qtY5HvwNHBniiz5pkgB2QwUrX5c1dhBHVsfM4CwN36EnLo3xnV43TmXhmoGi5",
  "key2": "1i6KqF9EsGd5eo3voXHCykfgLe5xLpsPPbvmJcth2XvjBNxNgainoc7cJmaxJH79YXxxfZVkSK9W5a5vNxE5RhB",
  "key3": "5KeFR3UPYGVpQTDmUK3gdG88hBVrT31oK3EEXJKiWu2fBMz3ugccHAnZWbJZXoAtfgtQFRQZuLAujDmERF4NuYnT",
  "key4": "5LRwkkZaXHu7ca7aF7LUDADDSwGpcENLcBisz69aFZ7Ge6MQ9dgygY3n3uhmwYvsBfHytccivEerwiEBxsfZM7TG",
  "key5": "24MfxyAyXi1ADiYWNNxNZ46B96auiwBi1tgHfe8eefsqHk8JjCiprTY2ZtVYJdVdFbx4nzVEuGwcGnXx4CTB2w12",
  "key6": "4nYVM89ikU2UeW5VLUZE9eKZiuGwnkX5GL2aQK96ARRkyiBpeuAV33yzSW26Gopng5F8Mp2mjNhZfkeoAVv7d1ML",
  "key7": "bEevuxrr9PDkxGvr5wtCd1zuZayagCuGK14YSYxx1f41fgoRjF6LhiJxMKv3cxLS9mXaHWCSa6xRGamma5jehCc",
  "key8": "2jAEJJ3vztdQFRvjDRkvB9qgJ2E8C6aTMvhnnVbXXwcR2uLeUYLvDn8yGLQKzuLbnXCcJX3Wu8AW24x4AkZK8JFS",
  "key9": "66SJ9pTsBxDWEHqFZAyL1RnTDoL4bMd2i6MVW4t5DXhe1wVJSjve563dQqoZGKmPSaC7NS6YCn6txaAKXkzHJJZG",
  "key10": "2GGh2H7iQ3qGZYsNeuS8LRtXJkJBh5PqL735KkXjBYxmGj4oexVHPGnpWthSFULGEJ3QKoBPcnAMtyuMH4adpZiP",
  "key11": "rQvqHYUHJs98Mv81tuJjETayWRhNwQqXYcrTV8zwnXH7Xv2Fa1m6WJKoFm7nNUPqG6kqE2sm7BoZ3Cx6A5HDqyy",
  "key12": "4k2kgE2BEqhWSehNEVfWyeth1cRPu9ue695dHAQd3zQ2qobxPC667sW59qNRF7CGFZ6DPrn3dwsn2iwAMc8gxpvh",
  "key13": "5yTtGhKyTSaBimD3wJd1XCCELVhvtT1Umor98vkcMaYnXbgKfnA9YHouhuPzMiEzs86wkuB7nJeYsk1zSTcB59va",
  "key14": "zFKPiYggkbjN3iTWqDagxtCkVddovJfn8jNE2fScKDBS2TCNsvdxobMKmE7p8fTqpG9dMcfw15FUTauMkfvpit1",
  "key15": "4dXPGPw9J4PvLbzgQ3P88QtKkSPLF4ZQnhdzNker5bATzEFH9rSFHQW5Su3jVCKUtxTCaLAwkGoJYUHHjkC3XAp1",
  "key16": "3pevJwJu5RuwNpJkypDKUBUYVKHZ41bAyLrV9m3A7KxBXSx72N4C2LEsp5VWJY1ZDcwiKn2Hp3cbmkWZ8ABfrSmp",
  "key17": "3MjHBHBfah7erV6mGGyf7etZumD8WGoy1nb51CSwRo5rpSqLNK8NNGvz8KKefJnkh9muodSUsfvXEYhjdp742tf6",
  "key18": "2XiYVsLH3icC6XSDSSwYRK3iNtAuoMxAXvVRu1rNvpLV2cDqQr2GhVDK4sAavzvS5zLHnwG8zUZdoejfTrTqTvvQ",
  "key19": "3Hfffyv1mpeSazk1oFYcQ6DCqWyy34YPMuqbAjbFf8TjZ5D7QWiNELB7ZCJ84vWpdTUBsrTdqZJHxdhDphoPhcmF",
  "key20": "vDutFU1gM8AvuMEjESMmWWdgQKmSgbzB8WBaND7RZo3KNUJLsKp15UXacnu3jQ84CVncWYC2ZRx7ygSUPT7qdJZ",
  "key21": "4BvBMPj3VM4YwFoZi7hxM4131dpdSfrypAM4dvbkboimFBHhYPzurGnJAQeMbmVQvihgyEZ6zNmK4hcXCNsdN7FR",
  "key22": "2MMQywwStNawxeoh9UroosqznPQRBn65oTc67AhUCHqa8gTR4tHT616bB2ppazUVFUVW76RLxVWqeV4Yvyb3L58J",
  "key23": "LCefjEpjyY8ATQkdEpvGRnh4YA1oG3ciZmiU7MdFY8TDCrGKhhkQyTHX2cxFmqr6X57RPthjVQ8KLK4JNYJwV7B",
  "key24": "2bgaZSJFGnLFTNzyssZ1DDevfB5CSmMVmbxCgSbmT9GpUir3DaeNbwGreEK1tVVxiwMoiaUkRp4zpRf7MozNt65F",
  "key25": "3EGS7bGVrUpAs1BrDCyVzQtYQaB85tkW5WwWM758FqAbWFWWHzC1nmPFB1tTj7vvB9xxoZuKpSWqgA3ssW33rzGT",
  "key26": "5T5UxoCHAeBUwVEfcF95rPW2QhM4aRWZsqSDMw8WmRX6FfEsMFvS1zfGc22VDQnJzNMmEobwFhvRmxgMkAFcKXMs",
  "key27": "42r7aSdnFDPT6TirFtGMHzKQqV7CyvrQiw44ZsmWeZYqLprFmufBttM2uvS9ZXooafr6wUT7xt2RiJTkv69upWZK",
  "key28": "5Y2gL85snfhmFgwXMrjFNALokoTgmrRpUXFMTJAQ6oGV3q7Di1twX5Rn6PepmTNfvdxLYmUB7iJLsuQkvnMZw9fi",
  "key29": "4dLm4DPiQAZnmbTsMetHjuqwa1X5gLaSrpxB3xKxavuXp1J9x577h3oXNX7dbdSQ8QXLjs3pWsivx3TMJ2GVzcf3",
  "key30": "4VgyCpK7UED76S8KnoyjsMG7t7D3rY7yh7EypcNP6DofVATkyMsnokzwzpZ2TMpvhe5czrTdd7wmpqdNUXSYihcp",
  "key31": "29ahQmfD4dZRSTWpVWAgjmPaM8mmhUFmRRYFHFumCLfynD6LHxeyjq7xn1TfJDvJKXDD5TZKEGEuVueTFsddqwWH",
  "key32": "MX66mCFoLoyKHjuZ8uT2HY6ryNgiTaCZaqbqyBmxXjJUwBaDKLowoWLB6Zu5HaxEoMNedAHDMpqdQrTGXhWoUoc",
  "key33": "3t8TL4jVAgNCnTHqvxonMvfxR7NTkEYuPW2j6RfPVtsyAyhZBytjAFwb7thotxJu4gx743y5LC5ykoyvee5Di5P5",
  "key34": "kouqLTnGW2ioabxjP1uMUQVhyp2Mygb8QjcHMNzKMcwvrGZfHq5u41WEwUn6ULmNaXWrdhdTugzcj49tx6WnHRQ",
  "key35": "4orN1uD8GwigSKjfjyaoSpzqZ178DM8D7menba3uNqoM3NdfW6vhuWL439MNToUGgjRqSBE2sKEJYxahiMMcVMPS",
  "key36": "3qjhEKKir5tGeUVfu1DyEtowznvKwHGm6NxMZxPRXcBeUcYyVzPvvhRxQcvez2Wj9NgdiDiukHcHhsbfAFAyuhzC",
  "key37": "2sQuQjbqpXMim6JDo5GCjVbX8faRqvM1Fsodb1UnWtPUpzDGq5A85Ryix8S2KUwcjeLCqAn6uxPiDkvn2j1WazLH",
  "key38": "5npSnDqsctyg6zL7ZRGmxYgdm4uAYmtFtsgYn68o9YJ5TzC65jFb2HFDCckcvT9wrgtGMofPDhdbqvRnMZ3FCLtb",
  "key39": "4hoBdX42qKHrdZ2chxL7jriveD8kkLhB7UNCngopFTMwCQrK9eiQqUzsobqMKFbWyJBwffNiVp8gNoFtbN6dbZuY",
  "key40": "2xKtuaaoHT8LHTYaJrASBuX8BqmP3Q7NTujgdNaPrsErytre9BwyGxM5kFhWzaMTXE5uh9KcZFi7ZmiYmJChGoNp",
  "key41": "2aJAzjXz4LiqgLn3ioVDCBoyi4BsSGjctSuFW12GWbJEqaEVbouxcmW3gbXS1DgHn3yCuSBSdgLCDp4w5r17L8NC",
  "key42": "3Rt9wprUdy7rxFK32FeGy4UWD5cCCDrEihHRWCRkoLHEVWWqfGQzb5gRuCuGMgManLsUvD5woanCHjBmNxYArwGj",
  "key43": "iY1ubwsULTQMiKmnmwidi5LGwSZ9QgoMg4y1zgUnrCGpzWdoZgGvVHh4H6tWL2mEgLuGyt8WXJhRGaq1dPwPVme",
  "key44": "2M3Dkkbg8iBwMif8Tmeivzix3tSmdoPhq2eFiynXT2fmqMPoGWaGq19WwGsEDwsNc6yx7jtU2GqtuHBuZkQahZ9z",
  "key45": "2iui5wpj5od6cnrTCyVmzf7izDBfnRUBvb4cATeY8EQ7Zp51v4vC9KLjj8yzZsmVe7Y9V87QJ5r7trGH7SPGHLM7"
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
