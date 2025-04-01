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
    "5kLouucNTgW5uvJhCms65SHBJHQGfptZHqx6QQaxAUS8n4aCkdA3De3ANxbg1ER8cNXyLqKER2PZmQ8wWBBoB51a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVyRs8WAVpv4cBCgAe4cZLLdMWZ43UcvJ2TW4iRMCAkYdz673aFLA3nmqYDwLPc8xq3hHR7M2v6QaweYrWJgQp5",
  "key1": "52imjieYFASRFGZnj8EnHmkkEbB7Qrxzayvzh7d2FFJQuSj1Hj9tNU1AuSZEZ9dxjqoYzFugiCha4n7Ga7Gjco54",
  "key2": "LjGEW8HLHufCZZvhkBYcfxGxUQEuFJo7NqGv7okNPo7fbcXRvwKGJGSepPxoAtJKRUQmQfPEcTkDxSZQgtNGrGY",
  "key3": "5SLdEqxaqcZZFoxM9o8AUpwmbdSEXiL76YG88WFJ9wcCRmtax2ZVeE15t3u84LatFdRwzYwuj3b3CNqPv4n86Szt",
  "key4": "2M1hduSDqiawpYKWUBQ9b63nmHgtmNb8YXidqmEWYWNrWYj13i1pJLHkXXgSbEyR6tQ2Fx7ivDpUX92az78KR7ua",
  "key5": "2J2RoPFMGCAQFHZkCjrbkhPrZTMpZAmsTcPvLQ7kWi1xRgF7niF5YW34VnohTZhMFtKJsLNoqtXBEXPS2qPkz6ix",
  "key6": "5WL6c2N4ZBdJZUGPW633Ezpo5ajtQ3frMek53Hty92EVauEwoTs4hohVq8z9RfH7ijrkjZdpJdetDvxtwTKWH7T4",
  "key7": "2tcM6QXGCd5i9RZBSWBG3jnp1eCdpRFdizEBh7t2DT15DLFFNsYGzpEFUTgDz4jQUUV8rKz1ubVTBBs4zTDRTbwk",
  "key8": "4aWJZ64WRSSh8BiziG6oEpzsVaL8fhRb1Uu1QbpiBCgBbHum73YoNhiffMCa3vMVm3sAs9yunFiSA8TZPDfit9wd",
  "key9": "3HKjAATmx9oD3eiiqiDkGu3ac63FnmytzFam7rUFBsTKmeShjHL2opsdAJ2wuDdURG2sGQzpniKqQtfRDkCQTWdc",
  "key10": "2htx2QiLHiAFs1ZUxrt1CScBaKK3yx2BdanN5UbjymRFT87DEwKVjf8jCcF3TKSfsaQnGSnagvTiJUbCfb432V71",
  "key11": "4n8b2qTrdVzWZxNNfDM68FouYK3wxRVf1nTimywtc6bvY7H2C53rZpsn7pDSg7ch3qox68qZpJ2ojpLExjje9jbC",
  "key12": "FMM3g3WAv5WB7WjnDUXXyaK6naAjWQywjkCjs11vmAGZaPyRxLw3cgxeWyueVcAT6gY9f9RbJ6Jugeg4UR8T9uH",
  "key13": "3YxYwuZB7DLxTaE1yRSeatKEkkp3jquDByKpHSGtJMbh2oiCC7YufSRMxAm5afekHzYUBCzG7oysW1CQpnht6hh5",
  "key14": "3khH5SVAGFzw4CpJQ8Hp683vsKmbmm8VBmooZCLzZENpHHAFGmFqNUphmAeUxoHrxag8qxNFWgres8uyuSpBBbNS",
  "key15": "3VzEF6HaF8u1GobEPcirqgP52bSxFcSPcWt1Fgfckdz61PT4UdtaGJSdfVisMDF8jZrsujbbvdzyJje38X1eQ2tJ",
  "key16": "4ZDeRaqc7YC8ssNyVSLPs4mVK6nDNKQEFbc4R598N65sqdmowuZ6GPMitJPU6T8ayDLRUX4EhG55tF4uxNKka44p",
  "key17": "5S9NmKJKYjEhNqAdXFrTtPvACzLHqmGupZf4oEBhTjyYF92cJC9X3xHW8BbHhr81wX6YKQT1nQ9SDGBaFpATAXhp",
  "key18": "wFYhsPYMktJfxiPiypdHqi8k3PEBRax5MswJHKCwgq78o4cu8whni4bvTZqeqWk6epbW1hEbHJdxAhNgzvxsvrw",
  "key19": "5edv4TuS1moJxZQgStvVC3UYfFqtuVzn53APK4Mefzaa2Wyum2LttRzWoEXGXa7jStjWmW5h6uVrKGSNMst9nTRB",
  "key20": "4ndVmAQwmBdZtHwwNQz4YUYH84KHm7qUYubfoLZ7waKqAAmuLGvZW8VdzToyKnTc3TUxWfT5ZAihWxguNiTSk7E9",
  "key21": "r4wrhWrmxurQvxiauHXRp5LH7DhoV87UFug3PMhp57WSAKT6GeKYqi72MdA98robQ746yAqkjRYhqXUhT6eUuPE",
  "key22": "5RcZVbA791GVRmxqeunx1CyMZt9wgSb4VGkLz5NR5kM8SJVkRVUTENTyMCLqA6655RZGcWfSjGLoDmr6oPdQwvnx",
  "key23": "5xNGmhhpQbiEJjaFYFQ5uzNdmybBCstEyxGZx4ijeqXrFZegyhLCuwEEbLSQjx5jXXEEEKL7eVHeZoa6dHzN1miS",
  "key24": "5pSmRJSgSetnAZpRBcEEUtBPWijRYrRfzFDKZwKJnC8ABnTn2hrrSuqTAiUqHURC5aQuj2p1exopD9d8Zmq3qxr1",
  "key25": "4r8bvA9jPibhg7pVZZ7zuFWu6QXdNHRJXaooZ3LQE2RNTRRGUTFHXx5uH9LYfkZNZnPoAA7tFLV6Q1DnsT7jCAaN",
  "key26": "BHbLN6RzmkjtBg2FZTonxuC5TffDwXPg2cHBy25rzUc1Wk5DDBFYtWFT8fjTh8dCbP5x95ag2LzR8bgPVkinoAd",
  "key27": "2SsEGsk7amg9yKQvD9KANkfqATk1bKbDBb9roCq9mVD7zRRSHD33SNRTUpVeeNx5satot3ectro3o6nSU2AwHvFM",
  "key28": "5MpeJEPzUBW1jUJmegLrdeWivcScqGYzqcZfwHzTHumJ4gVjyQuetF2HfsmxzsNXi2FKhjavc4e47YsW3zFJJ5Cg",
  "key29": "5mafph8PynZQmhwsqoJqcCzvGi2WPmtib95FZnTt3ToYTEX7L7nJE86FMGNYfv8rS5abv3LXCe2ddajjnf2UETtC",
  "key30": "3vyfoYr2jS14kWYKRpYWjqnjgMpBrkKQwyUF3TSkiqvGmxwCqc7gHZJELWYDrPSxpq1q5jnVQBoYTazAJM9D86jT",
  "key31": "3tN8nHhcayVBUHSQHUVdDTTYgiWxB2KqGiodYSAWc8mdRSbHVKWknLapREUGqfwRcURaQEkNYcxDWoZtUMXeWbsz",
  "key32": "5FxQRU6jLcH5iDo1dK5gXrs6ZUqtf9mhAfySm7UrKWetwtZZ1w7FVZ514zkzZGoQb4Hy2tP6zfAR3hvUhtGXH8Ee",
  "key33": "4995N1BBfk6X6AfDh4oiSAYihWoDmhYZFAKRQB9bVwcwiYpKd9KkQr7GCtmHntU2bWfpDv2bS4FnE3NEbAXKAedQ",
  "key34": "64cjQhp5YA5w9ADmsonshCPdMvmmTgrPL88nFHk42n3CY1nX1CLzenwDqj2FiSosqYqmTjupKH3LD3GQRr5hf1dS",
  "key35": "5SpLd9EoMBjPTmPnNXN1eRiWih9AxopcxhUbZNYf6Y8WmQeugCXXZH817ZcrtghXEtdonm5kKD6bsBekLbBMjoH3",
  "key36": "2EnkNmSTfE1YrAySjHMTMdDwg6TEV8vgeqTkf43q1Jykn1MUmdBPyTEkAihcch6c4qqrbpBCtEjAxgENQsebrx8F",
  "key37": "27CtkTf26nnmx7ewdXAdYpRQmzdPBHUayCSGRSZunzSUsQLXuHfyqDBRLJftvx7U9LeAh3qU9FZ2eqM2K9upWUod",
  "key38": "4CeDHnhLfppG4VbUsENDJbEWtewQZaJx4sp3MJ42o5yEdTV2TSho1P6Bkce3SNkajvmuP4BTsBvHUkLQZSt7jFTC",
  "key39": "5QQ12wBZ4MAYkh5PsfVo1vkY7XgnGcL41jazQhPNLEnB2CRiqt2UYWuQHHuhrjS6gwzyQEsu6qCc7oYoFntUVLF4",
  "key40": "4LVLFxTiGdezqcC45Cnm8an1YR8Lwj9p7pErVLpmAQXbxLUXj9rYzAqwna5qtjqMbs2Bx83dB727aHEi2pMEuMaA",
  "key41": "5HLitzGxjDNmCf7RyRcWynfQN1yFKFWJBnKuEqQkBMGukvvWS4UB8gWtifAsZGuuER66SMtL917qaCVmXWBHTfw5",
  "key42": "eBYzneXaoqBv3fnwvVZnf31npEpkYkZ2YYEXqkh5SXfyf8dFTrU1XhqYgA5XeXCxpQpHR1vajNaxG1AauaFCScy",
  "key43": "6332CCCj8ay9aSnLGaGzqhuKGt9bLoTsL6mKGWAV1ji8PxrPcefL2uGfoEFzWtuCNyKy7w2QXuaU783S4rFLswid",
  "key44": "66f34WcQKeHadRPmeKgaNSuDSqmEVcQ3r8FyuaJd9JoXc7hCqkFcGQGZfAhhqSp9hkK7BAV8iaZFDU4HbcUeBBa7",
  "key45": "5W1XMo3DnbYMuzWp5WM7LfSg6K8EJ28vhUASKgSnJS5n6poL18Knm9LQHs8SKJAUpKfmjGLPcPadTG76pDwkf4dz",
  "key46": "4qpuA7mHvw2akTavsKXByZfV5Tz2xegWXDkhNmbZSUSdmQKsHaL4yme5znrubCuRLTP7ysaAcBa5VYtLXkQpTKW6",
  "key47": "5udR6jyDTmfTFALcfcPtqX2swRCAVwLK7x8jNRSfSVYW6xRsPzGLHNbrSLPgm7w8TCSqA5CeveWXmhG1mNiLkYNf",
  "key48": "qQwhNsfdtjRHo4F47yfufj95PCMeQ7GSyzNZiWLoYJwHPWVTbc3mW3366nDBcasrxaPsz3g3ktJRRVdU45ZMdLW"
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
