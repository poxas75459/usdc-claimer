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
    "3S5gM5PdBbQuYSWsES6B7Nuw9pmZ51hmoPUViRJXBsRwYUU5tfe636P6WM24pKAZtSMyzboxcrh16FgLVDLuxsm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuTDSUQhWe76PHJCvuAQNaPR5uvYW9c7YBS5CqkiPfeAGzo3UFbugvduzYeQFmzpitVTibxQEDV1u9XiXazFDCg",
  "key1": "2V1UCP4nsx2WVbUumGC9MxLKRj8rdvPBc9HeyTYkDrARbWVUn9XvWSXCnz8Qpaftym5Ja9m9zxizSbfmcD8W6kq7",
  "key2": "5YT8USigXaq7aKGNVJnwdq7j1iRbGahU8Qz2goGEURrDSoVbdwmsHGPSrRghfKDv6oiCwQ2JiBLr8fRmhtRgrKD6",
  "key3": "9VSHUDVqYUXeJKC5SdyTPQRXUnD2SEujpuUrWcXQPsLWF6CQ13fiaf9KQWZ1mTeikd6rghWV35u4oaSKipVukJb",
  "key4": "2qSkGav7qBu5poMjf6NNQJMPpcg5r1JdXWB3hvRwRXJHaPv1kXFAuupwd3xVERLjaoJfs8unRS8KbW5mPyqgxMUL",
  "key5": "BmLTxkUXJZVnw9S9BdimCZjzmgVCrvSJNFTwPDyEXR8tSanS8ZMfJdnV6CMkawiYjuVEfbaYcFA2KU6aC1k4CU7",
  "key6": "4P3EBevjUYdr9RfHhwXhYijj52nheSXGqJjURPVDmJUVtMSmj4DMRLGtKsaH8AKxdGUfMLdsSt5Km3zEuaLivTJ",
  "key7": "3MqhxyZ3AavovtvAoaNdj6F6TZA3VuQQhXfEpZDAUcoanu1n3pqfeLu25U5HyjgUn9K2TFrRfvugwa8fbrq6TRXx",
  "key8": "4eEzUHqFUfwaGsKVt5NSiiK3WUYB85vUJfGSWeoEZgnFf9DYkQqQVeMwJMvWMVyGQJ8amRKHfZCzYK2vxMKteSCc",
  "key9": "rYNhDG2eUiiB13sC8ReNoodbFRgsQ9AbjBMhzfWim92VK1Cbi5QEaaecu56AmuKDZcFafi6Hw1cYTjytdAijbSc",
  "key10": "5f81raetKQjWgCpAeCtybERisvdsDWdWu1ZYAPJbfXh1H6o2NKyNh7dC6LougNnY5N2xK95Eq9q1QdfVj9gE65Bd",
  "key11": "2xVvxRmnRsaLafWnu2ZEvSTGZU9p5Now7HhP8yG9FaUfgEFnJ39miVMQxARFDGWDTL2j54eFmTM7TYK9enzg4GXY",
  "key12": "32BqciMFSmfCRh9NhMVGVCwMAZe9GSwtQaKwoebES5E1VwRhcRwcirZtV1vxMHLWxAqNKC3HjWqpQYBMJbRR19NL",
  "key13": "5RZeE645GfG1M878ekRy93uTchG11MmJ1wEf9Y4yoxRXUzPGudAJZxHWTFbQjXu9yFkzAV637yPQV6vmMzMVLiyD",
  "key14": "H6TehFpUyW6mKs1juGrGnFGX8VkLpXXr6hZUxn8ErMQsXvfvGw3QNRyR8hV8XRMg1wCLFWjoZecCyPyZRH9wCyU",
  "key15": "2hqNEsFCAf2KW5Xfzs4DnWg3U8iqSwiARLC6SYBiVpjKZr7NHLo3R871rePTAHy1rvXDvcxAW3dmLjnsMJJSskSK",
  "key16": "4MwVsKxhse5FEQW3PxbLtpho2Ysv9FWVpuzVu9vnN4D7GFJjHR9Rj5ARmkbBDpribJuKHubLPywGPxcZM3YkLqHQ",
  "key17": "2C1rPKRsrVp4ziKMFxNnMKBaVEF3PE7aXrssDj6i6omgzRfKrHvk74W3KG46Tkg7hRgjKgY2vgak4KqiS9K1reaf",
  "key18": "tkkJeNJtKcnnx5xi8jdcBbxXiXyArKEjhXnueH5gA1f1JJaHXHBEkJnuMUHd5jiuuutKsLy1mm1YGxoukdoNWVR",
  "key19": "275SCXnkUE8Gm6FpYkHdC2mwHhCkgpjakutFExG2wL99BhNNFJByChDFY2oZTJD8ebNVL2FgGe1Ur44r1cdnWUCC",
  "key20": "b8EpiyCu8gPFEm5HERnMo9vqQKWncpjF8rJgtrWkYR9J4rR7EM1c9TcvvUfdrQb8NvHewSFHQ6QdA7dejv2fUxB",
  "key21": "3diAAycnkaV3fogmzQf3a47KaspmkrH9wiqCgEN2UjLQdwBeypCGZWKZ6w7ZunrYuegJcaMybhxjjgrPg71dtsDT",
  "key22": "375dTgcRxxtdgYZUzua6woHGCFAdH5f7zn9KBCckGAczSD6VAZVa7t1yLeucZo8Ra6BNH4czaQko4PYRa32GWGzi",
  "key23": "DyhbRtY1wEvcY3YmyVkckFEBGGjFucJfqKwVFZfzwHqEPJBRhYwnt31wjHb2PWQ7UBxtURT1utJsSbVS9yqhd8y",
  "key24": "5ygvFbDRYMiUNctevS7gvXzM43XjXaxwFUg44FvNTWLqi7aBpMD6qxGPfCw8vjj5wpf5ZtZhuUCUTvMphBA8yoxy",
  "key25": "4WP2zafCsvKfH88Ft2R1eaCX51nYSRLHkkBToWxZfdf2AiDt51hp4NemErS1fsGGPgsrEHC2yer31ouS2BjAVupQ",
  "key26": "4TSSA7GkoJwtQaFVHvJue4tmXgiqzYhoiQo5HpurU6H3QM6w2qZSdfPZeTCoRjscQSFzrBdBQh9MijSqYbTveA6c",
  "key27": "3fY25JcD9fhDRYmb44yX7hbGiXQhiFgHqjWxRi2vLtgLBH943aCr5r9z2KDjdE7vPEpu1jjKJAJfU9jZVdsFBpeN",
  "key28": "sDNFuAC9bF9ctJebfZ9qJphv1NqqMwkfE8WUUP8VvN5xEZUJC2B6mwj6B9HAggxicJkQhk6xJ6GSJifB64QMBf5",
  "key29": "vTiViS7KPRxUZHgysyKvg1LJDVqWW2bGrEHs3W6fgjExjGDTiRnNTB3QfgupEFBjaFRoeTmm45pPeuZgFXLhMz6",
  "key30": "61sJX6CmJSGjdjeosFrWKo6S3nULiu2oAjt6wZ88p8mLMGGNDX6NHnG8fM2wRx8Lznkju3BAXfPTDxcSEBXjxVeB",
  "key31": "5HiLHej3B4uRstigN7QjcDCT2tdKFdQYBkfF9qs4WFrdmE6EB8e4uchXPAgwt5py67m2Ugnq7hzWFcENcUmepCrY",
  "key32": "GHAQqQrPivE3p9RGyhKaMVtZcckVAU3YfTvVXkG7NxxQ1o3yfVK89QK3TRpVyvspTn5KwGrCAVn1RKhkvzQB3GM",
  "key33": "3R54VZWHx8NJtPkE4cPqDZ9Z4QfftzqYQCWd1HRBPBsVGsvCduQezLvaGGwZtCpBbZSNcZSmftU3coYdrw5DESsW",
  "key34": "5UFX4vbgGq7gXnrMcspFVNEujuAgtxACC6TFujAr42ttawoMw2gtHjtSDHS9UyFMQJMuqWzaNv3HEoyvdfzm4xU1",
  "key35": "5iudX9USgn7hwYEF4YniZdsrjRS5SbB8shEZEx7WGkXHz89vaLU1pFVyJuXGRKB8RfQy2wRgRMJ8zh8DtmZYJ7n1",
  "key36": "2wuPrGJm7NbjAjDmBy2FMtheoGFgYLvwZtnWK4szu3MwkRF5HGJSsftJGYyWg8MqaM4YxiPyStquveKju9w5XUsj",
  "key37": "2bCjVtv9W8TWEcSm7diAmYiL4L2QJSgBKcZitb6NxpL9EiB3JCrRdXGXk87iqF9oKEDWFQFBTwwKvZS8DBjCDDTe",
  "key38": "BnMNsNLkxDnajFA83n2nGWf2bgh23Q3SynEhCMFUGi7ChUAbvRNV9ZMTTFbjhKzMYuVh8Rus2YFiHh75GMJiCJk",
  "key39": "43oh65UYc2UQBziUhdvdwA3pso7X81Xbb9wE1i9hCmgdQruesmwV5qaHr7dsHxVD6Q48s6Wijv7PAPdLY35osWhH",
  "key40": "4qbCxdmWi2VpBnR7BBTw5DgrcEgfFVtSdDdqr7weiEyAmgH4DnK1FFF5DANvaQKJSa5gaPUUrbByj61mP9761R8P",
  "key41": "5P2XwETyc1HX7p8uVdhLeNkjn19SFRfMhR9FZ1cVobchPYSy3roJP9JHJCZJDHvhsnKPwGz3MkMudVdRpiRuUHPg",
  "key42": "X2tExTTV2bz4kFnSCJUcmKZQdZJCwL3cHv7TCjAA4nQVamXwbisxei2ydBSf7N8Ey55zK81bb9fbMuHNWGcuKJL"
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
