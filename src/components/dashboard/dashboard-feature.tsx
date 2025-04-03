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
    "3XkWNUZVWAN3pUGCJgR3WFKtCupsFoMHDtSueQXRXLodK7SNGZH8GwtoviHeNAHgQ5bWf7pB5NHPoNvUWsnoCBof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEA437Vpfw4SLGV238QmAeSAY9aZoi9icFd4ZZ9hSC7jAWqESTqN3A1JemVohnSYHmVR2D7Zv5DSU6e7SED9zPy",
  "key1": "2NqDbppPfAQL1HUzZaSfg8LCszFycGUY3D8dpT1Fbx8ANGz9Mn3U3imrvDzRv6gcDRyiyh6Es8UiDcFjL5dnruTz",
  "key2": "26wBis5giVUbXwJUtnpT2qyVuR36kA97DJJhXZSBzfmPiDPMBq9T3cJhS89XrGKmqZizuK2j7YDoWaBUJEyCc3sU",
  "key3": "2armadN7HqmrwoUWQnoc7deZMBYozjU58s1rFUemMnd8btvQAwHsGGyKytWsucZQ5pcGdiPcZy9A5ULsDvFTdkVi",
  "key4": "5gMztjaUETSihwZCs3L4fxx92mGY6EfoygBAbPhKUnWLSufJXbMDxFqJQhh3ar6Ra6SgA51JhWAqFDAZ82wxgQPM",
  "key5": "8uHzyryiCwX2M8YWeum2ocP44WepRLqA2T7F8SfkVU3GPqG9gQCiqrLdhVv8nN3spg24LojKTDBwAGzLrMQWfLU",
  "key6": "6E6dqk5239MmkyMWtEvBawgzc6Fd25SQJddbCyQRHu12ydTiHJs8jHsdsLhx5M3qiWUZMfkoxd95tYvtjYtUbyt",
  "key7": "5cLoYdg2EWKQ5Wy9CkG7DU1ahT1yC7M9sEP16rYJWKTiqcEjcGQyUcSbZApkeu21AFczncHSxsHC92YbXha6KPrG",
  "key8": "3x7LAvN4EUghXw8ZBURyUQyBMLGdAuFqJ9Lb1Jvbcm1wWGuHRwPVK7uCrAWfEuWNvHYZJSC7nw8RAsiQonEvkw6n",
  "key9": "2h6YUtde1Za8jvXVWTDqdLQnbzihNr4G8nVuBF5oYT5Uh1UEj4C1vxSns8gXbhG7vULmRpE4FaY5WzjrsevSkhsH",
  "key10": "4shRCmBQ5q4KwyKpp9MZLHN1sbmMcLgXJdVXCNw6To1kdM9BpvyLQJfvq4W8qBN1jLxz91bfxtJ6142oS4JZUoBt",
  "key11": "3WWvXi5qjcdRUsU2mntR6WC2Ujywxz6aiRMxtMMsjoY6w9dxBsiJLobzrzkoKJ6gm4oFWJTHyhaHFkzNzDACEeNv",
  "key12": "5N3eF9LX49ZFYdUM338pgyxm3h3yoR4rNGDt29iNbjpma2nUpaiTtnE73LZmMMiLHXzBcU9YqEHhS2RBa9zLF1w3",
  "key13": "5wvdMeRS22jNpLycJ1Ah6YYbufUH5xwZ3DVcav3vKvcLWKdHwFQ6NA7JhSLksDZtE4kutgL5GUf1z14oJdYq1T1L",
  "key14": "53joaNLYFHKfjDPi276HURj5bYdGtChEEYuHzicQMaTJujYPHnPnCp7myDHekmSSgB3UbjeopjSBSHU1t5bSBCUB",
  "key15": "3LbKW3qt4YiYjjzeRP24TouhiDr4SBsoDNqiJXzQ17PDGaDLdGhA72aHzXPJfj4J7v4W6uRyRcyabcKwo5SVUDw6",
  "key16": "31yCjsyNfwaQwAwfAx5AbPu6GBHdt7VHCo9PC5UAJsZJxyCbKE2E9UkyXF2FZ5SJxSR9mERh88d8nTM4JfNemLTn",
  "key17": "8tyaENTXAfWJNtqPDjNbcTMQuq7Lr2WR6RWfnW2poqFUTmkkmNWFbwXKQJ32dyrarCoQfjUN2qMXSDeWSh4FMBB",
  "key18": "2ARXQ73mfgJ1XBrZmtMKkeAXZkHKrKHextAFFBJHnSqNdXKqSRTatDEtg993CWReky9RLuBP7FZETbhs3C1URgZi",
  "key19": "4sAPvZQqTYi72uC9mqg1wx1sNGD6T5LFkux9YzgkKXi1sBhdi6QseFHC67MHajwEQYpA71r8oSisbePYxuWbXWwf",
  "key20": "Zho3tjh354x7MoJvmXX1NoGqN7jJ9v3faxpzsXgw67t6b4LocqXGUgHDfrMEGtackQMondAHay97JZJLYBBcwnN",
  "key21": "229rDiYuaHLqBPXFdAGNysQsEoXRTD6XSTd836iBq7r1zZPoXPqKaHB9jXGXRVhgwoJt6ZSw4K2ZCQXZKypguSsF",
  "key22": "WcX5bu2SNEfGmhmpfwcqKVpjmwvHKpjJHXNigRUhquRNtx2YWNAgC77imeinswNo2aa9PuUXYFhDRCdgYmJPKGV",
  "key23": "3kezavTmLMfXSkyjaA1D6vHKcvjvZ7CrZnYQB1Fce3ZteEnf7eW5FZKTMNsRzGMoEsH5UhTCY3G7oLRwBcKBPrwn",
  "key24": "5C6qJR4tWFzRRFVz9ePYTL4goS2xoa7qDURN7s5akhvd9yML2yF4fgx9Mr2jqhteL2ncQbufM84ZinGSHVBSjrWG",
  "key25": "4prcceSfhk6bDvAHbBypMnuLnWTqUAu8ky3E64tEvUamUSJ6sMfzohCs1p1Cs2pFqi7iyUz56BM1sQAUnv2NuRXu",
  "key26": "2TEMQgtyRLHtS3vzoNgdb6YKcFAUtY8QK45yWe8tDy2srcx4kDzBorZMj5RYwKyLpttresr1teJiBW4xW3cZg4CG",
  "key27": "d6LJ3Cz8FY89LBSWtsChvTw7EmgKsXib8wUZCWngUbHGr9M4GBiyi1wbRHeSEzN4GqDMpoPSSvLVsy19H8MhDmh",
  "key28": "dRicmDTVWyKEWTJtwYQUiKCpLKne5LxzdmkEDJiXNnb42oC2zb7WcPm3hG6RNBTpyRsbSXB5KcQyfjUNo9JYUay",
  "key29": "39ecgA4tr5TZbtRLgzDfU9z55q62S5kjHJchTj2dMDhBAqw4tkFTNKeAUyC3Uo1KoAmVkShcU5xVeZ5PXdP6xQx",
  "key30": "14aogYS9QFVcky7KFF1ufzAsA8cZggKFNQXiqQhPRTC2f73CbPM52F1hmtJ6z6dxBAY7Lb7p5B6GwQK89xZrdG2",
  "key31": "22KsSYzF4YiaySsHp1EtS4hsTqxtDDE56GGU6ZMwRSdhXXiK1Vh5TXUgy3zuqtnWMi12hdZ5taBYxPankvBsPSDY",
  "key32": "4wsxWWomezPMUhz6Ue4uF2T9nECFwGrWYea3Ucz6tnPJVF2DEDg4fRoGA7HyTVpqK7SwkDgaykyeGjpvy1UJ3bif",
  "key33": "5a6KKqujY2v3HDiSs7aYUGLFHveR1K1dNcEA3Fx8ih2hchTrcvyC5ct4opQYZg9XjaWxBQths4vk9GZHgxEK2fpv",
  "key34": "3NKWy7MiNiL5RvRFf1nnWwJThbnegrGqJzXQZk2KYaS6Jr4JUUZfcT1Ae6KqwJAJgMUGUxRpe33kuoYh1SCeiC4b",
  "key35": "3d2YSionT2H2BCpNbcaY6CfbmdtCdSm62KwKrU2L32mEqpoNqtcfwyzHvA8AJ4bDmPEHsBTxPUnrWQBHCjyEMLHp",
  "key36": "34NSG3V9nM7JrqJZUGrcGHZVtPsH5cZxHBEx75yKd3zygSFeVqJc8cyFtfBced5qR6Sz7kRAAVR9wVaHGjCtoRsF",
  "key37": "41GnnZc3PNFzEPN3HEFdeDD2vQFfEAKFjgSZaHrJHCsb57W9XmSLdkSqZBLqwmyRvdj6QH3JqQcRXjFHkyom261o",
  "key38": "599Bb8Xjq8VjZbn2vtHa5rgeDAzrB1yrBa6EYtxFw2BeneLCJ5WHfXmowMdVKwepGGYtp8ufVZJWtNZZZXJyapou",
  "key39": "2mSmsCc4N9v6HFhumk5jWFcijPCemjETAipVnVucy5pQ4dtFmpqCwvipQY6oXKp9pUzJhvf2CyJ2j6PXqh1XW57a",
  "key40": "qQTV4HHcQSdePT5QSWJRv4e9TjagPEAG1xQr3EXjVSJXnrYgoPQsswE28GvXuR4iDA8LY9Z1aW2xjFQ65imoZmR",
  "key41": "3FmUNw8qiuJQuAN42ovXeaodyjfRv3QVSqHiYUWvWC5zvfuCogS4NTFxK1r1NXXJmbCcRY4dVT4U8TVkwzuknRGC",
  "key42": "4BmgGLbmbHqqbUPqeG87cG6mkz9HUDgDKCcAw2zQcmGpQWmPGZLyF9XWhMgSheZi1XV2cSW7cHpCn4jYXqHTdHLR",
  "key43": "5ixtisTnyKp9gUoWDpvzZVv6dP62b6UvyVDqpdp9MW4QqhzYB4DVgatDVucAD4kxMkCduUJcj3uP65f3EVnGTKjg",
  "key44": "38d9ito6YUVKzDgPqzpho4HXfFQ5m3NWZeXfhig1dg5z83X2wUV96SptL3VwyRKqLs5tJoTMQt3r2kLS2tEyoUnu",
  "key45": "5aLivuoeW5VyFdRHCzoqfmgfh38VC5sAQQr9M9UZTEecjGsM7RAyHcpSvbuYcx3L37knQ4j2bNZJcb8qmsZ2M28p",
  "key46": "X2js5PC2DSX7inutzqQFiLVfiE6bpZr751JpB6CsJtBvNz53hhzJ53zqVNGXpFytUcswjUgTkf9c7fkFAgFzACH",
  "key47": "jRrUna12EDUaK1nABox1CHLxdZdxA4dTwUoUT7pTavBrCKxqxdGbAvtVt4KBYByypxt39NrGhJrsQP2uPoiof7o"
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
