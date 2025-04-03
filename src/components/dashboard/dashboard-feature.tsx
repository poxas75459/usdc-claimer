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
    "4F3eu5iR9fJ5cckYTuif3KvxbnXph3Rvnk2DvcNT1k9FAPFxfQz7DMznPcJnpxzHv7C9NYKGFGHbCgVSFZokKRBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5nJGWpwnXN466iFGpZoUuFr96z6PZoJbS2xLymrAsds5ntHiqokGkbnL7RKdMXcC2nQv6EGTMoXq3dfmwMcYca",
  "key1": "5V2QXfb5aRF4JBRujCAKoqwNLERbe3VAS9jdCPhqwQjyeTF18za5H4D5x7zXaUHHL8j914Lxsgv1rDMbR1NkCBnh",
  "key2": "5ZjhJPUWBfpfuHjpkX6HkvV96DMhtWLjXxFBgyzWzg8PKjZe3gMpHz2N1RAvqxD992tNyPDCRZQCJ7b2qR2Lr5qx",
  "key3": "2gZjb2CHmbXoSbeACEv1rxHKQnhjpbw3CY5jp98ALNnddSxvSbbxLhfU9pGrkPjoKxMe7Y677D1p5UPv4d9Nrz56",
  "key4": "XJ7pDXmghEb58mDQgMiiy2H2r6KgSHatRGTRS2PZN8suWawQ9bNSCopNHzxNDpuVTQuvdPaA5pfoddjr7JaeHSJ",
  "key5": "5QSc74SmLEmymWPuPAN8vFWKkmoToKTipngbzU5dL8pW7thsNzX7USRV4sRa4EHJBKdM8tMU3kBXA7QWG3dtbs4H",
  "key6": "4h1V44rmzYFv46WQq2gLE7G8qWqyzHgxyg3riadGTZGG8MjRMfnVUTx2kgywSzw3EhHmdpGsMwF4kXV96P9ByZuZ",
  "key7": "4oSGKn5MH9nMDw6TyR9FRDWZ9R8r8mjbgpBd3a1amWDBwviFfQLquUujHXFEqFKFS8MdDcQfDBfMWYXmPXGq4g2S",
  "key8": "4bPTH66YLgEi3yozTV8uwAj8Z45xRQEhmNhrstF7KuF4f4u1BQA82ooPKC7qWU2C9DgxJwvFva2nNqKf4ZMasaCe",
  "key9": "4DV3fjvWVaBaADd5rkpShN5oGGWpZ5HHmSA6FAFGKAFtfsRdDWArXogZ3j3dF27PVj2aMHFpZhua1RM5LBU1tLhJ",
  "key10": "4jE4TYcQAJ7adi5ExHhReJ5y3dYtLeSE681CMVhJsfSA2nuCdoXmfe9VEV4QZvyZwcqbvgNuYHSMi57wNjcQdriC",
  "key11": "58ZTX5G9pZSEMVoadi5BM3keYx69guFHLaBLyxNcNRKZgRcJaJNiPPcds7nF2NuYjzwWpEpgmy61i2KUUwpVys4e",
  "key12": "4sbv4kBvpsRjyzXVuCni4HmhRBx3cwcLhBKBPNWkKRvmpC6fKUCdZ9ePikpXGVkABRqCtRriWUbYSDLASsqUoQdh",
  "key13": "3zyh23DE6ar217bkoizpuE5UjePAbVYW679cRW3KnBb98xqFzN6TEXGHMW1pAydEfsMK5rMHiEqML6mHmA3whW3s",
  "key14": "FKmCaBMzL4PJm2gB9oWC3qjyNPJT8ENmJjZHRSZagzn8sdcGD8wGFr2Fm6KvqYrLT1DdhoW64xkF6n8Z9rmSqeU",
  "key15": "5SmxDW58aBRd98754MJdrfGS7CvDbCzyDw1SDiPQRLqt6rd2HHCxYwsP6k5vacG4dzfRRuaoESxrFj11SqPsVfMc",
  "key16": "4WxuQFCQrsJYgfkDL7FoHkwc9gD5EXhJ13QqFUeQhG1b8doKigo7qdbeiCergvBtyX9zwrCU5Q4neKgxPiMbxMmu",
  "key17": "DkMo7T5XF4io5NbYZeeYou3E4q1x1JjcQr9fWHLGRwKwGfwXxoyJhekiSnPKscZC7yYMc2oraPsAoVMpSY7Zsb8",
  "key18": "4uNujNjEtenQ3eRaNPkKKuxB28S5odLFhKaAcfuoTM6fsuArVauqNau9ezEqMfBhYobAm4vbWjy36CzfCY8Dwk66",
  "key19": "WRAGAMyce5xMgv32UAAkykQ7ZYYVhX7CowMqPyfW7JUQiXtVM745kS769F4rDZAAN263VGVdmXm2zQwUdbYePLj",
  "key20": "4iAnUPw3UeAyMNuFzwM298ZERVuMWJiQvABx6H7bVm1kQ3NiuPnfZFL2PkGBDDQwDNUJJ4wQSEywLiuKzMKwyY1m",
  "key21": "2poRcSMtTmh4j3hVdfuTLquX5psygYpCxw2eg8sTqA2z4oB8XorXPdo94GJTY1W5AGcr1GjGEgXCK8sEtCP947yn",
  "key22": "3ikG3GfMqrsJR13BBx4QxFAXmR4Mz7qeWFn5yNWvhcLj1rS3CP8ULnD8s4q8yfGFLoydcpvSqNYi35HuHjAgWnaV",
  "key23": "51ZQJ53stuvgsYpXsxH2nPi9o1XGxVfQstoU1PXMao57ekPK1G6isG3Q145k1qJdRgxhfHFk9TZcJNCEFgK6LxoK",
  "key24": "5VHJrkssEgBndikWkzkBEQLTtEgnkyNuavBRoqC9ELbh8bETmPAAB47tgQhMSfBFbtU9TD1YHG5Z56A4QwMo1gHE",
  "key25": "3awPn8NgVTgwNzKXR6ptkQr3ALVh3EgwWR7zZv88gomnbcYsfoGXAK2DnscBGc65ytkZNGyGJjk1zCrD5EewPFno",
  "key26": "3EaeFrW51L8rb5koreQyjoN5KUehHHrdfswfpeMwMdPVsJThj7aTbgFAQxHTSFpJjXH6r1z4g3XsrRyUNJMsdAhL",
  "key27": "4q5WTpXFCpijoPRNVs1UbP6fG29VEU4YgE4JgEW2XjqYSWBqaoHppEZkEmysVZvYu72pWhiqTZTAWbErN6yhVfhf",
  "key28": "4bkuV274FGQoAPs6QTBM1EGRyT8AG7J11Po6AzD6rbQHqvCZPMQuVcRk4AfwQwSfvkBQXqZVS9J9ipYA2aKnNNUz",
  "key29": "5NuA9sUgNXLHxR9N4CYnj4assoB9ZZD8PbJ2nnPb6Bpo5NEskkpVdg3tbZ6tYmmRc778NBnGW8RNgLacNN7QqCbE",
  "key30": "5aeTNifamAqP4YEzQbiyswyxVDqKizmdYGDjuuW9YsvfMis28VyryfzDnXymojuk7JcjogeP8DeUKPJb6A7DnFTj",
  "key31": "2hws97dCrbaaoDuUMKwxPmAQSYugC3SEbkcLz7N49SZUS94awvb7q8RB38hsTTkcd85oJ7y81TkVqzBWFmjN225g",
  "key32": "2ZeHiQbHzNR1BzVco3KhwHpk1PMnC8edGMmcmdaJv1yn3WeQPYaJ2wB6oWeGzs3F9pCh93LwQQPw3ykL62Asa9Jy",
  "key33": "5ducMXxUbdkapzK2oTEXtKZwVFqKbx13RD3SHdW23fZGZzC7oMnu5NLiiZHeNxKu1kfb8BrhtY45JVowBdpK5YsC",
  "key34": "PXGEymNx27Bx6ywfPqLUn8KHsheqgdP7nnucQ3MUqC8gt9LrQPvhUPfzy2xocvfQN1fzk5vJbz4XtKZKtJ52XZP",
  "key35": "4Z5pTUjXYrPJifv5ViB4oSnyaVWs2jELoTwJTQpyAVexDcE5myatMXVWGt4C2jpMdDqzRqXmPBHYRY9TXJiF72PR",
  "key36": "2UMCzFRsPCbtqoKZrpYZfWzZLAZhCLcCTk3Nu4h4VNJZssTeju5GX2zZrogp8guTW2qfvyh1z3vrswADxuT7nnXL",
  "key37": "62ngdwJ8jd3rwkz7JfgAiTWMqxTotjGdoc3RNjM4PVNi7RB8cR6NFWRbWSkMAacoc5jdoFtETNKsCvcYM1S28ur3",
  "key38": "5DUDAKjqri6vqrvhsqJDDA8GKzYcbq97i5WTENjWa8Qe76UXK597XFdknhCNngsEe8j39Trvk3Gyg1YJ7DAwRXp7",
  "key39": "3Fmh6y2CZSt81dwAtA4o58QAYAX8hpNuk1YAgGTUeU6YiueUfiVNP52gyDaTSZTofYHGwfuKas1WcQoDeryCUcjs",
  "key40": "5YmbryTpmixiaNPkeMDdo2qdpXP6CzTJHYPDoksMk1s6wwCHgXCH8VpbvXS4D8FvjVMrV6CjqiznPi9aNgoZzKXZ",
  "key41": "4SHQTZqM3oDyVQSLcMAS3YT5AfDXxXHk9A5xuSt9oMJjXdJAz2WkgE1yLvH3vzXRJXJXsGVh4tBGQpyns3Qh95nS",
  "key42": "3FUzVk9USmMuKctMWcsUssxTnjhZ3h3zAMuXtKFsBsgeGvn1jaUw1i3S74yr4BjbWjyPhujoz7vCZn11U5xEuaAs",
  "key43": "3xokfoAt7YwdHmmFRSUtqcyAPM9YvYVUYwAHt5681CzUVKYfgxKFUygjZLm9xFDVXVhbYuEFncYU4zjH2UVDNi8x",
  "key44": "4LMNgLHyLNaPwtASRxAFeW2Pf5HWQJyK7qpUxdT9d8K3gzFsfp15dQ88GdHfvQqKifJZkVMJue6Vgz6yphRfVTMi",
  "key45": "5tDvfQfUikwmGPP3VVRNu8FBLLbjHgiwnePBEKAftioY15PDPXQqEFra1eysJnujixb6Rkke23gwmWokkLbrZvJx",
  "key46": "4EhEsxQTJatPruHf9RgCgmMa82ey2vzeSA6MMz9cgTb4GPTdobJWuUSAr7DT32SXJkEweAKeQ5T64a7k1cY1EAYh",
  "key47": "2aNaXcB4AneCKgaz7uJvgT4e2ac4KcrREMQoeTxw3MSgbjJUhceeVEJaiKdeBZjVMHiyTT6wU9XCXKp4yTqA6ptu"
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
