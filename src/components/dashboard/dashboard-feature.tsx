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
    "49WF1fzDC3irDxhrVoJRzCRe58HEgrMkA2zo5WxXNXTzfwMHjgQytx1jWmztkAJZVaz7kvjhLjBsduQYwRedBuKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzSJkwQWS5RMWyyRa36BcgKUNqQQK8KC5AQxLE1Febj8HuovDG1uEf11xeUEae7iMuqKnzoth8jAj4WXoGWkpUA",
  "key1": "5sFsWJMq32S924RrFPCvreZJfWtpPVd6UGbidnY1PRFWcqPp8qgUMQQ7ng2BuQmBtSwBiaTymW7VY15RQQ7pwwdq",
  "key2": "45t8sjYvw842upgBJkK7KRxit6ZT1M8voaxHiBUeTHp4VbvwMzvfQvnRHCzAdaYfamxyqJ7gXQ6DG7KzuvHKWw8a",
  "key3": "3eUHpZK1ijktYQ8ATBkCq1qA8FSAbi8rFJEAYyaquEx1TiUTBej8m9Mv8EKjbRQeDC2nDoFg7RRkxQw99axn5Cyj",
  "key4": "5vVpBiuH72ZuJ9SMEW2bvpwxRBs8mFQucXkvXmjFMeRnc4ioAgoGMDmvJ3DEk4w4rBeHzPhF1MjUK7wymWF82KNh",
  "key5": "4TQRugAdsyV9E4Xwnq7NsDJRQ4Vw21G43ifQPWiFwwDiYTCB7wpEp8NCWH6nh7zSepsso2FkUb8uDSupJSctz95j",
  "key6": "2eKyLQyJHsrQagB1KKdqN7ayDAXeCfjJdcJCTeQGk1M4ZgBMjJ1stAdAENpM4Jm7ASuWWXEuCgRUVf4TbgPhxuc9",
  "key7": "45ubrcjyiqdfiA7oSqW8SqinjB6nep2GQfzJFnDuQbHEBUT2gNUM7fzySb7Lr9aSRbJZWxCNbrDu1mJ8iG3DjNu1",
  "key8": "4mqVLmT3mMCCdNpK1svQRRTbvrTMFhs9Tz7p7cccGdp4J9VDmzLhTXW9Fd5wgCXEALdMrTazjQ5LvyacZiXTyAaQ",
  "key9": "4gXGGeKKrB5GGFx9czXtm47WKmTsM9zfWEd1L9SnfyE43wEiXmvidbobgbgC1S7BWMf7SyhsH52c1hFLfJTYrscF",
  "key10": "3j5AycQdbNZzQNRYXMscbrZJLR4zQD9gUnCqdAnpBPzKqCmkfKaLpyATD36aS6agdNZea4PGgEXMaTBVTtV1GvAw",
  "key11": "JYJqfBNrcWLCGWTWcmL6PD4s4aSQCZ44tefMEfwhQ8nM9q4tggZBMmrCwPbpknw9qp2m6pRHSXWiPcXFWrzNNxW",
  "key12": "5n5c8psZ3faJMA16pBock3it7s8bxdzCaiHz7PMheeL1HVhjdDPVVv1iXuHYKyHJsSP8bmNmv66LvRCPucqZDgtG",
  "key13": "4EjGTqkg1pPKqvwQrD6NyXcWceKypNpkWgkSaj7BNeZooTb9Y7sQVVHyYK2Htaa4PEAjmSqsVDGjvpkEtF1w2hV7",
  "key14": "21FhaoqwMYriNjyNhnw7oV4TzrpaaXBKokSKQeSQUnZuKTtejX9WfyWXrhKB5ozAZXz5Hu2dTuLZ2a1G5vp5JkYd",
  "key15": "kXb8Z6dDx2MacfyZFDoszsPh3qavKJ2hapDzrm7mHnNYtggtmuFDTfZgbokEkvfnzr8zoAHMDBBzNqdaUPQbxHj",
  "key16": "4kdsUCimrDa4x5PT2jbhpRYddUZXdJMtXBGChFA8RPsmTXShZRvJjNkKkDitb4DnhssrmyRR2yV3DrQAAT8b7J8t",
  "key17": "5DeHahKSyPpiZwuubCW8ss4irkKZKHEGGQZh4c3WvUY9NqmjjqdBZPZwpA9rGxp8K3vTVQkdmEksstFg8HmDVRJd",
  "key18": "5gdKkSEffJPUGFqLzAvPQL5j3zvwLECZVakNvBzGcKeEofVb9kLyAxuFY9jnAeSq6qky6qUGW2Fix3PozBy9LFkL",
  "key19": "3CQZRoE7D5HGZkv6757eYGi7StKEsVfSXAqeJnjaMWzR2pjgbhEAt9YCN4FzatJZgoy5Nfk1PUtkZgAKtgBvbBC7",
  "key20": "Cunsrj1xnq8UZ7UZ8YoD8uFUyvZG4aTR8eDJq558DYvRi78HMXbzMmHCiYJ3XfmvcY2rL5Zwka387MxkveTwbHg",
  "key21": "5682E5K6wwyKmiPuZKwoRGQyF7DeLSYv2NsdZnLEvh6qBVM59Bs2KspGEkz4oXQYo13yzPZjuWbetZSBppjRuSkJ",
  "key22": "42itsuh4vQnrxQJ5zRv1Z8azi6iuXsTZ7nuq2rpqqKUWj8bo5Tc11qBoKYdXCiUuwzxaAkgLLdotKw22oYxDNkq7",
  "key23": "5CiKid3D4219hVW7oXnekWyLB3PCtcuFHh9uhHMS1hs2VRshNh4WF1u6xwcSzDytwTWfq6N5sP9HTpktbJqXLdKJ",
  "key24": "5zgL2KzwNVcxa59eH7Z6HLxQeCqbSnfzWT67dbJRXQZLP3Rc21oUhhyB4xx6zCtUwG4xnC5jG3qtmpynMcLkngcF",
  "key25": "5TqMkup9xZdiSDisXMN5zkcH3Ke6obtSdew5jZQjQvWSvA4uJrDVr2VMGz5HVvVuHBTSBQsMN3HsJQRaoyPwssX4",
  "key26": "46yWouQbnjkQQ5aDjM9G1DKaPgHgcFuEoAus162xFeEhzodJu7MynpLpRsXcg6sfECDfu9uaA48SWywCkwo1eLXm",
  "key27": "3Qzku5z7Xuydw7zE6aHamxf3caQ4fHj4wBAN8vCjxEXngBFepGF1WMYyCgSrxEs7XQNoqRkqhUn7EJLYS6tnGW3h",
  "key28": "4Cx1fQ43hJEPYH9Us78Q5VArULpr4Aenz6DZXrixsdzMYzahHyemv35xVeNng6sxKECGgQNghZXs8Ak3yW5JzsxW",
  "key29": "2Rzn1MkH9vfpLLwtdMkrUWQbaJ65PSW6QFn1MzCjdnWaxGBG8HuLvTQWq7eeqGNFencx2Ubz2dEGphxqk9ZCRwaZ",
  "key30": "GM6Xrz5E7UCTRHMByRYYteNvk7JcW1Gy7nc6juewCh5BAuN1PCMa22NZZbnN7jX7DfX3G8v5952dtgtngGmgQcx",
  "key31": "4vDsGxeTYWkzseUiynj9d3e5FUGxmQjbJfaZptpk1qSrbD43evq2DvMXrYTyAX3PHemuFCBhPEfRRSMzecSsgvzY",
  "key32": "5tnoU5rPzjBGgRyimCHoSwkw4vbatfAqcUSSr343ihRAd5AWj5TypCUaV38f7F4V5JLSb2Ana5rrmX1VUjVVLY5a",
  "key33": "4bjNFQPCJdPe15jHGifjdkYmnb3itSvGBbzdJrjr82FY6cxRcfrwfbzt78rTqHdPWfWGTjAhs6kbwdkXnE1nkjr",
  "key34": "2SyCrhbq8oRMpPP5YPTfcuHtqkfcG4KaCWHz9yZucQDeUknVSx6W6ekvwpzwnT7SUShrvMTe2utFYur7JPMo9y6z"
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
