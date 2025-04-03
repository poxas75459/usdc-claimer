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
    "2EYAbKW2jBAFYZweLrFawQDiaj9j6ojAEExTCb889G2VQeDsP4JBuVCPc7F7dQktYTzJVz69W7UTzzbpc4P1TkiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ksgsVyzbP3eYD4ySbTbxBGUk7n9AspV6xFTLMPGPAY8YS17T8wDCZE91YrVDur2R3uH3XoCoVam1w8S8h45DEZM",
  "key1": "kveEVeDyFMxYA6uHxVyrFMhvNMaadW17ZvYH54sPLPaxpkG4cCU79R3h2EsR9k1F3Cwt2SfvXpXBe5EYQKCtQUD",
  "key2": "3AVtQJ9fpHkFzRX4aX4zk5ocfrGhsHJzPGTDdzuhcNge1RF1G2Ai3CW81ToZCJ61Vu6meHzErNynxq415XvBgfcS",
  "key3": "4s56hLxrCxgoQyjCdYjNQ7xQSTWJzkuQiSB8o4yXm748cwDbA95d1SEctnhNjP241mY6KdBAZQrAo4orZb5n7iiM",
  "key4": "5DWm1Dob6BD9unac8SgDWeN7mjd1mzjS7iVLkv8x1cP6c41UYWcmoiz1uHzWwE2XVJNq3wYoBQDRowaqXeXh21tu",
  "key5": "2LoE4JWKT8QGuMPmabziEbekGRjWzaKryJzPyxg79pN3QYw8BgadKbTkWJn9UPzf8h4gxL8badRr7TP2DfUJjdUV",
  "key6": "3wnGgkwVmFUet2ad7zCZrvNUJ7u9rxhF26dvESVEJGGLqPuzCrtYtE6yKkL8598HWthpQ66gKgkiBuPN4oEWAeC",
  "key7": "4qUngAgc5S6Y4ZEMiKTUdjPYzzQ35jmEkTzjK6dA5y9pYcp9V8hVt4sa137eAakweqxuuJQvirPR6o2D4BTL9uST",
  "key8": "32o2JN3U9ZS5XJNpHKFhV9nCFQsnJWTU9sEtBqikBaj8QcqmUM2TgKWLNmrJqMXg9n9DJPBA2SHoUTwbWR4Ro321",
  "key9": "4ysPCDWkYFeJuLu9FfdN5TywL1hSaR685WGuuHWBfEpWpVBb2r8ta1SYWi72Tj3cMsfmwn4bRbUMbpbZWouwjUnp",
  "key10": "2upHoZNNpstmGjd1LA2bmVC5mmt173jFZSSZhCqKsbXx33iNHqbeY7B9AMv2QZj1PoaiYq1ENzovaPv36WRijGQe",
  "key11": "5npdy9PYjpEGBVXCN4j47Uu3Db1sDDEYD9yT8vnS8ALMt7EsQ9NHzA3CoAmvSmuMHELJX2iKeRVNHrzw7iqse4F4",
  "key12": "4Zfa2LfPmanBSVSg6cpGuQDbdqaQ3kKoTv68MRebnYeJTUtbUmgXWi9W8qeWxgwV5tisi7HTfPLQ3j7AJcF7iKQ",
  "key13": "zdQuAu2ereCKtd36D5f2p7oGurDCxwTwGzGsasrkY1iZ1fzf8UNEjHYhcckGXCW3mzHBSDLzWdiGsCVTJGXGJnN",
  "key14": "3qnFUmpa5iLyPS5v4aDKY8eqUgd5cbkZhbJQVv3144tmPZpYQCuHHtyFazfGz5UtUW4d3quBwycstbZu8PMr6nDR",
  "key15": "fppBDdbE19afYraEKtpvKVxLS6yz6NRpfLgQz3yQduzVRfPGL7XAEA7yEz8CAbi24xNYfq2BhuLAFPymQSuXNVe",
  "key16": "5ohDz1MtZxgc2LiapzS6RbYzF2o9ZZYi7hKyLHEr2A7yhHT4LgBRjyAjfMqN7qTTQydyNzfmqVy4QvdysfxZXqGH",
  "key17": "5oReB1GgCS7AqoXzhcWPwv6XH8trNbd69KFt5MK77h9ZGdxKbu3E6MZYkaD2BFRQGbYcE9Mkj7C3XDZxZxFFGH4i",
  "key18": "4upV81JF13h7CTJtWdEUwozu7hdfenEBzoe3iLq4NKE3ewzgFvFBZLzLiMFCW4MT1HqmMZV7xtZ9vmtGPRm85ye8",
  "key19": "2nYcStzj1hDsLCgu8as4Ej7otwqEN4Ph9PmRCVZwbZB5hB9KufeVhHYVUgEs44PUpJ3pMzV1PRcKrkDQpuvJuwd6",
  "key20": "3qvqG91Pw3R3sGqaMAkJx1ybgr459gdDakuaG34aSC584VMpFNz6XxZKcbtbTgaVGWw7k7udTqBkWLM1Vk2u6VDL",
  "key21": "jozwhyATfhjquy47jBjmDaFoYUNJ8Ksio9E1spFEXcJixHPXBaSmDT7zoJ6K6puktnJZWF7Ld8XaBgHR2mSoAfg",
  "key22": "5Rg3eBgfGPij8NsnYuj7v6sfyepnRnLLccXbuma3AGdPkC3KvJg8rvBvSQdZMVwLg1kVDZ9JfqBMjEvCbEyEZm9P",
  "key23": "3zt8V8axQohMW7XgWr27hVmcRmqZeDK51gPR2yW7hPYDuTH6dGthYucmBrv2fQCwjJWs7g9G9bpsH1NYb4do27Qf",
  "key24": "5JYN6AYEiwharQimcWP9HTdqbm5kYPvouzpNGHTq5WAAE6EzadNe3yQTeXjUX4njEVpZbcxvFftALYJQEExaixVG",
  "key25": "5HN1eNchSPAc4u75YaQCPy1XkjLagR8bjMc4oxhrw2cKYJ6Za8g1RaN1XHr3WEUHPMXeCz8fUcAe7qzG6wnDmuya",
  "key26": "3j3KcFvDTiWjuT8EAFJPR4Hg4snJwEcuTrLT6PQjLZ5yLxzvoLo61w1ubjo6qkFsnwSdJh18qjfSV9SGBrWDz6LA",
  "key27": "5xGP3EsCHLV94xSb48QeffFTcxVmGM9xmc3kdfMdapNKRi7dwazqqP1no83vMWZ8kXA1knXs8x56tGMNyZfvwCmE",
  "key28": "26g3e7V9DoUAEbA8DGBQtAtxxXbNVWbs9EVVNfiBF792ddpMYcRtw5VZQ1xJr1rMSGsoDu9gYXr1rK1f4QdQxv3K",
  "key29": "WL88nnS7B1Zu22F7LNKPXk8nRoY3kZXt6dmVqRmwuC3HRBDfNFipD8YQWwJpwtdj5Wvnjh2q9CKzKjRAkSRtACK",
  "key30": "2iQoi37qHxty8vio8rELPW65vhgukBJKBXitcNFCNDr2yim8LWfgzmHMjHUR64cj2ZKS8Xw2Y3sYyWR7P1Td6dQk",
  "key31": "2Mmp3zvUBpbjyuMbMCiANExXHCNDLNxDxjF39CgxJtRPrs8iSyVyavsYWeNtbqgFaCFHnYJbPBrLGgSttRK4z9eU",
  "key32": "3J2o5Jsu3rg3AWoVW2cixB8A2pXaRckioaD76whDbC4zLJBCqRVorr74igTxhAKJ2Lo6ax53V3NQAmv38e3DF5nv",
  "key33": "Mu8ctZFQKCSTUEmaPRnorEgquMZPbXUXHGH6oZCxtrXZ3ofmw8Vyrq2nzbT81FwAWfR1FMPPynvqMiiPyGtmDr9",
  "key34": "5Dwz6q2beDY9UA7m55TwwEW624fSHmSMYt3YTMeJd8Pb8M5dJZbSWYcAcqMHhf1zNqeagYZm5LoMY43tihx3idws",
  "key35": "21d2nTu4uMWGPNL3Cq5BDQpmuJiP7isFDTduc6s4EvTfs2vN7ZWNr4C2zjpqWmmFWikFR7CRFjJExoqtoHavQb2N",
  "key36": "PqJg9skFEP2aQXGgh7eQzw2Mer7MGwG68rZsAGU597yoxKUcuRcHowA6aQsQ1z53VfDDuQiEZaoJ22xWbPVbGfp",
  "key37": "CrsDuxegJ9mbFsfnEiYnv7mxaMcamGPkMhHMjvFnKEVYoMmwYHDDs6AbZYxQZuGymrtseSEvY4PhCAbRpB9hWAj",
  "key38": "yFLFxqcBA66EsoGjKHKvtAeRbL6wmtbpR8TnLcvMK6EHncujqp7YWzAfpEVSQJvg63TnHjF3jMTgWqeKwcu8KmW",
  "key39": "354Z15SkXZ4JqCU57pBPmfQtDced7EVCdwKkcBXtLEbQUDPBHidj3eEfes5k61B7ehuNjxaxhEgSokWSSRZXDbem",
  "key40": "4SWu645gQGGm7qxq8Up5dabk6J7CmLnAjX3MogLBxFfcEvZ8anBX7gkF1pgLrfVqWHr2BWGfXKsCYjtvACaby85W",
  "key41": "twLx7UPnixXKDs5Y3TexJVygr6X64UCaQwsnahZgBEhd41oWemQX9HEoxRVD4yuJw2hxzgne7YJ3iZ7LdRovMK9",
  "key42": "3ySKS7i8CVPWEzLybZiWQNV7BCQuyXSbks9XfqcGHXAB8U5WHnwM5B8VBTammXwQsXvUysrFdxZX1BiD4SnBtM9N",
  "key43": "2hfM3x8Ya45vJgHcpAbfGYao2v412twrmq6BT6hjRb3KnAVJcaquEXcsH6rWVkoiRGXkuPs4UYyY9NtANYgA3MPq",
  "key44": "3GHZEpH7ae3cRAUQCJsHaC3bcDSiseMQ45J35omiRR5A9N6ao4iMbsAvM12vjDcsdJxCbkbhT72sSkxJZT7z6mTe",
  "key45": "qkiJcMAqe8u6E18PaYE8DCs1YVGtFfpCHP3uvytMoCw4uf3jfjva94daSEMicjTVrVozGF4U3sSnV7vP9trRWfk",
  "key46": "5LtnVvUF8NC5vicwG5VEqsYrKsZ9Lfn4ksDHBnbhYPFPJhDUd3YWsDJf2rwj6U7QF7M39PiL8fJAQuHDu2zaYpDd",
  "key47": "4PvX8F8exHBrk48SXCH8GQZjywJT84v31QTsPui6HLQ4Tikd891AFJvsvn3XjSM9mebpe8fXWWtTpceU1bwNBNSa",
  "key48": "3uUVf8vFsyGTHLKq64SgFaN9RhuDWMEN5PMyZLTKS6aMhXEyYMn37v4mjYUGcMN1NwFoTidd9ZwVaqtmfJe9NbH9"
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
