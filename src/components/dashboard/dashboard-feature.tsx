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
    "rsya9gZ6KE6hHpWgoi7fEPm52S2GysGeZNYtSxb8Te6aWTStVK4sgVUB4gxMA3gdQsSHpqQ5GG6g1VaetbwxcM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ApnEXk8oPkZvvHU6A8rT9YncotRTY1Gnso9EMMszm1HHWc6CXnbWsrFt6EfkNAD11BosFzA1vRSi3msVETyfHT",
  "key1": "2qtpDzQgd951GJUUuqstnisPfZV5qhpNzLF7JdnPbz6srY4k4qbvxC3ZSZ73Nf4vu75fopc4HBwwCbo4AwxN8Vuu",
  "key2": "3JLqLRBr2nrEmTahp84a2wcLiVn4EReFxUDb2iF1uaEN378xcUfUm869SoLdtjqGU3jxSh4af1vuzeFxu87Hquum",
  "key3": "4PKG4X7gvHXb7WXonkX4EtYuGHjFcWaEmAGD5cP3q9BTD4F429NmFYQhhahm4CCcr3QSkmcot1ZqZg3r2irjhXNQ",
  "key4": "4LULt97EHbvDHKeTD3diSz95nkfumQyr3nEwZpboJMJmB58F3Yp1Q1AAQkMuWKbvcHN4Za1d5ckykMEiRZoHaDeZ",
  "key5": "4s3zPpvLdSYxH2ndHoPpZCK5SXox1hZRC5nBhaVvJgAJMyWg8fRmPo54vEhCQTCV1KZCXwAhv9KQkxc3PmUS3q5y",
  "key6": "4UYRJPU1f721Mq1wdAWNWV9AhmYUb7Wcpp33riU5F6vJ6XSxcMjC7f6yGkwuqfW2125RjBaBwUdcTHKZ4bFH7nC2",
  "key7": "268TGokaZdqgphQiNQkiHv8XEMKudy8bp36GVDvNeFUn3vPPimXW95Dh9S8PUDBHaTEwx4L3kf5ZopyXoXZjcNpY",
  "key8": "2tmgeBMSezdyp7kx9ZyKA9zHcTjxZcFYnJRoXEffTauutgQKa4im72ybuLMEZARmwM3ZhZ6cH4Q5GLTw4nGXe8a4",
  "key9": "32zy3FJSeZDqmLCQFgrZ8rxqEWb6GkrCWJw6PeEtbPtB56vtVnQ7jX26zUjp4LznQCuB5ut2Dhn98dYE3YYe7rUa",
  "key10": "cbMGkQ4nXSLq2M8QvidPpf1jyLeNutnjmE1xUmSqHDLB3SxgdBe6SanoRv8wUnNsG2pgggs9jXbGg4GmatdFwt2",
  "key11": "2cwXmCMZAa5sAPH5ABZFBqpH6JoNLgVW6bQf5ZSqNY4H37MBHTojeNoxyDfepyDb2ULGj14XoK94MSyoV7A77j8j",
  "key12": "65vv9gZRwgzEnd1uzMe7PbBgbMFtCeQsnXWt2eerHbykM8PEsnrDEH1rJWhiAxVoX5oWhNsc7NdXT8wHP39QTGox",
  "key13": "4EpZyi5dtEP2jTdzzyHmPpidzgv2dT5cLrJypnEnwGsrtc6ixp8f6bZ4LTKkjyBpKX65qMJW6G2qdvwmFWveNCf3",
  "key14": "3EXzQW8kna9yPgnaCG6y8uJunqhCNwFBSQzTTBgJvEp1fmaCLohb8N7pUWBx72UbATJ7Mgdf5ifvFrVuW7z9wmNY",
  "key15": "4VEvMTrK2FJFzSq2k1gwQnF4SiVLS1jAKPdwpMjm2MnjjDYkDogURFWCo8DBYq8UkdgH6NDhM9PtMrTnmYRgLNZW",
  "key16": "31a4ggmBt6SLcJBYru9Enac9newqEChp67iz2cZXPVbhDgJifeUntNsDTyhyhHkcxjeP29P3Kabjao2T5oGc2Zeb",
  "key17": "3pKqcdKzf25Pki7DK9GzTpxecPK8GvanEzhcSC5esDh6R9MEN5MSGt19dXxMdYgGscBi7v5xHcQdxyobAcoAmvW9",
  "key18": "5egw92MfKNuMpU4PxHT3E4rJiNb8suPUbu7arZRdTaLZyFTqLe9nN41iduY3ygweM8BUBAWW2Rs69kVFcLCfTiG5",
  "key19": "39baSp4Pfrm7eKie92Dp3uT5HGu1UwgfNpctQ1EDMuiwfitJaAZNbovonCBzzwepmKCPBGNR8FJJRTURyiDbWZ4g",
  "key20": "5FUqo8CX6WMag3kB9m5uTJSxqn5j717uiNDYb8FGzA9n9Mm7nJ4PYp8SxLCLkRVrZcy9mCUFmU5iFpAEz9eozwGv",
  "key21": "251EUw7GBCL9WV3Bh4CsZrSdivx97z5tKyhypFVbWuTt3CuXEoQjEwcjr745KDffaNdA3YTWd6BhEqNeTTRnVWce",
  "key22": "5fxyfo6J62TZyVdX8cstS2ekysRoDKEDvW8vZZB1XjYfTRyvCbuJt97MjEaQ9jei3Xt3oJpbvGdxAL7KVd4VyQyk",
  "key23": "5ksq8axikMfKwph1unCMwGwiJkk72Tj9YyYCwhPwsdZYJCBwrfvNp8UhJproDdeAUM1UvdzH5nuB5f6a7VCsqyiY",
  "key24": "38nqbf9YKk5VPC6ksLW1NWkiSb86Gg2H5gQjDRWybstMkPteKBUKymRbGAY1PwXrrUYT1w8tQR8XxzA9c8YSniv1",
  "key25": "2WSJsuCEXvXPuzxfYuPmCxXyz7zksZJ5s4u8rcaoULeAJtHFeobHo6yP4ppPwh9Nq5ndWLuu2mkYyhQjMwKEXcLK",
  "key26": "3Qr29DdgZxfY11cwAfPnT9RDCK39w796s1dL5BqFm41LXBnR3erJqFtEj3PzsaREQaxNGE6xHUX44W4KPF1d9M8z",
  "key27": "3nHeRGWpqh1ApJncdLMsobdRF1tBxxrtqZhCPef5ensGm2Mxm4EycCzTGcp1kP4uGJEu9wGa2CzN3THkebadq54H",
  "key28": "bxm1gJYfwyavEAKR7UjKmtju7xFbHZQD1p5WzaEv7zZDnGHJ7RtWC8VkXBEax65sGh3pigFkwxURZnrQuaJ4PiN",
  "key29": "5DzK8AqvdnATWR8xS1An2ds89W8ZSHGekfN6hUHr7srdopa336eTsfVt9nmuDkyzigx8CFjP5B3p4J3YSSCdq3GB",
  "key30": "BwE7R62SkmUS7Uxur8ApdX7LmcXZT3MAxC3yMZAxnv1q4DnUUjyWV2QrfoAs5Fvf3wrFJVS97HLFgG3ceoyV5NK",
  "key31": "4q3cLNR1coKXwMPArZZ3veN9gsEmNYn8rQhRnTCu5teLdPH3FE9U6zGVBCMert3PMyZVTy3rd35ZzTfxRq6e2CA2",
  "key32": "4cCN1ATyKRdFg4a7o5gaPbEcLUAEynFDLsDfGEHThyqDgmshimSQ3b5PsizQddGQupyJLiMxQNW3GLcqXXQHjcpr",
  "key33": "PZWZ5bKiUhhKneef46KQiDyA8Kw52MCKaUT8iWRrticX3mx8qem8dZVUSsZmFGYafrLtNzDvNKgsMRBjgtVgR3H"
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
