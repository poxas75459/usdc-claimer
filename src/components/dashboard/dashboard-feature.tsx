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
    "xTB1MudC4zvUxYv6LcqceYhxzWSDSwQPn3d7HyjdMCAzCA8HdfVxH2sd2aoxxdbVP5jXZM6oKbtLnuaiW9EpfPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWRSHBpFmaqeyJS53iUH9ZTz38irM8NFJPtTiEe9izvTSkkg7gDvrdojEjqLqvbX6UJyf8zmDDAoxvbb5y2hfRd",
  "key1": "5ihE1TJvQB2HAz7T1M25MxmnWaH6rL9AbANVhFiq6bev7FnH9zLyVyD1nxjoBVY12qdqKJ9c9xq37CXBwEXpcuEL",
  "key2": "5S7Q9zjwNDPerfqE32vtxGiLR37veiuGUGqTHgwetRFZc8hoECpiSWD9hEwx5qqqHoizLEDQrdCTuiGkyFxEgWLk",
  "key3": "5oV9DYg945XAvvgBRW4D9sZ38H55zCrJ4DtLo9tbS8LK2muLTchK5yyWWF7hRYmWDuZwEFPTzhBLkzrh22Qg4mjB",
  "key4": "BsStvdqq7m7JvcjBG4qr4XtArWaRmvG8XafvN5XHNQRGx6PcBNS9ZZXeYa8FoWmE2iVwFdRNp2U8rojhTtwsizb",
  "key5": "4GkhLNuXNqALo7ABqZ2318gnUgt1sdWzjXWotGURYGxa8hbKgM1AWtzv1YhZDxZMvmqQxYF69iLLvEEHGTVbJv5f",
  "key6": "8ynUnrQZJzLdNhbj2P61cBbAjbbeZhXQL2TEEXF3bBfJ51kWNdhF8fXPrJNetMzThamRqcyWoedKbc8SLCfkYsd",
  "key7": "35QUqdoqJcGEKwZ8gNsKe51tjXynBGBRy7kTYhLS2eSzHiHCBfqkude1M3M6PtvL4gC2K8pXrfaRpMLbLHbjoD7B",
  "key8": "tWaESjacaGPnkSD4Bv6j6nSYjkyC43t4aTbYSScSid2cEXUVEWcopnVXo54Zk4gnDZ1EnKZiAAXeDud6Zb5bFDC",
  "key9": "2AppAZYT6iXGvScQDz7BFp92LECdJKMRU26evypyC2WX6S4xr5mgvJcpXxLB5P2fFibe1oYDm6wGXNbtYk2K3eTj",
  "key10": "cCZpgp47NDLCoA6KFDJBTUqNTFU459D1L9Xr5HAQvjhXb6DaxMLZxS2TMdh4dFgCaQNJez3Jn5KcfMdHU7zxYjn",
  "key11": "3oCk3huSPBF8jb7N1e1ivQo4onGmKMVYG3a5BUbShxVpP54UupV6j71ToHMriGc2s5tTbwE8e4k2b39Bcn3fWga5",
  "key12": "3g8AaA6ByGciXVTYpB88uAjT29q45xReEM6zMBwvgDAVLJHPPFDebTKxfg5N5xnFC4BnzooWL9u3yh17X9DaKh6s",
  "key13": "azaVkfV68qjAvND951G7wsuBjBVa7fiH51aLNwmukRnjrjCPB8GdvNDCyb6QwwSseCuqXqRECSYHirEdUczWvwe",
  "key14": "2Jhat9XoRFgYP3YWpYHWLdESJejg2XsyuSgKJ1FKBxT3Kebjw9n79LyCRNysrjkkmPRAEs67DT8utJayvRWtJ98c",
  "key15": "2NsrY2ZLUt1c6BKEEjrU17ks8MVaQuyoFFRotP8ih2LwetN7ymsnVzEx2JZKnXNAgHudD9NDQaGutXnGtskQ5mr2",
  "key16": "3pSbYzDKZqr7LC9fgt6onyiAjees5iZhSPHFzNZ9zX8ugdFSdNtB1ubmeQKvsbr88goNN3xUfGrYjAcf7igXJLBh",
  "key17": "2f2wvnFruxLLRraW3b2nDjj7e8MXVwTWPDUFYe5bDp2z8a71Gd7XckGjdYsCnVP2gvqfd61FVk4oV5rfRArrDC9d",
  "key18": "48aRjMwxCQ5LP6WZ6jUKceuRQ6yKVToN2bg9xyLNc8GB7h6PSLJoz7e7PBExoPnsMJFJEXSEps1cxCUWEuk5K552",
  "key19": "k4AEx8os2fEEbiPcRBqKhktCSTgx3HaDEk89HX5JUFHV3on4ntFkmmWNq6uRXDzAA1NnBRkxgrNr75KVBDcc88w",
  "key20": "n6KBdBtZWo4owWdnVULiNV59L7DqtxUV7DY6xp4m7ZvzTLAJ3DiNWn79Bh66eEANcsnYg63bQzJLKRoZQkc5Gyi",
  "key21": "5sKeRgDSoiawR16j9uzHthtzYFnQ72ssQVxDwNLYtJd1fp2XdPYziAvBbQtHfVY9TwZvsPa7fpsy94zQGC34XaFh",
  "key22": "tG57L7oLbLKjp7VQaVJ1jiDUc1ZGx2HsAYJFyXuc7yCgroPQjUtYUfCTAVMTM84Eyp4j1GW4i1Q4eXuZc82QBHu",
  "key23": "66SooQsVvPzJvhiy3RaqJsyCp1kDZ91meA8EJNKmf8SNNhDHYL69Fs4BQfDogsZiNAFRoovNmP8BT2h9VggYFdzp",
  "key24": "5AGcRgQWdiH7D3xNX9Xtxpgo5iKYfvMTKSaF7rQYL8t8Wi1fprW29uYpWAX9Y58sibnsoamkybjUox6ejMszCsUL",
  "key25": "3KMzeV7qWbGkoqfk1XwD2TJb1h199FxGMdLHFcQWJYYdtZavkyVWwimg4ZqsgromVnZXkRNH4QYhdYAK7xVSKYnu",
  "key26": "54fWsZg9k5haGXoJgf1C5GaCZuKie9ctewkF6XscFN5YfB8MgUNeUqTkAnVtvrHQ8D8P6d4rd8qdizii6K9PYTjf",
  "key27": "5pmKS4tr18vLn7JWXiGhpJsaFRiapY5sDYfp7MTP7faZVDQC5QP4CUTqEjgB1FwEuD9oyQSDUQbQEvRX2ZTesJhF",
  "key28": "3Tdc4V9Jpg4vyEhEXAE8E73fTqXnXkRJGVtxpaAbPRiWAq1p9tG32gDRDEMMNPQGpNiExJmcPB79GtHKRzB2qD6e",
  "key29": "3pQHfQ6HrrYfYfL35Dp9Ka32qPVEe5SaM2NWEmkonW68kqKbqNNFv4AWFBU7WviMeQm7orQPdiCUBa1uAupn75Mm",
  "key30": "mhCJvVUMDvqqrTQEcro2G2Kvdv4XJfL5GNsLPF2TEvyyXhd48KiVg96kcsTej8dQKHnp5JCjnkStT957TBzXuEn",
  "key31": "52wLmsNyYZ361Ht3STHx3dRe9V1gv8mhNoEt2AXhCQQf69X6RLaFtmKFwqeEs1n4i6EteJ3MmVWphp6cxX6GPYwm",
  "key32": "7AgrViSKzp6TStagHTaPoD1kbmWXeZ9BzfntcYCZvkRGdQtqCzBn8fNna4jPjTd4H9Hq8NttTsCRFe7S87qRF78",
  "key33": "4hpok5PqU3nT2vwGJXCwPmcUsPK1eBWYPbZsnLtEJFKKnQYpUbANPjRsDHGuFjF1p26bdz9o8AHeDfgacX3dBX9X",
  "key34": "4NbJoJBvazPFqfgLMP4tXdw61fgCo3TdbBBGBrr6QbGviVMpmJoVUHQ2yKhXHrVL1t3oJoChPXGofAsxHmuTKdiv",
  "key35": "5ypyen3Sj6aA3QMZeoHzyCnsroeeCxw2FPVHz6wrg6T6H9LApMzfeqT3vHh5eXEmukZeeV82WbrFMb3yicMcwU6M",
  "key36": "2f6qKzqCaSa3cy4qc9vYDY6S75nesAZnVCRBUhuw5TrsdJVeSU1aBeh7gSxakGh45CHr4uKvyCbqfJFS9Xbxt4a2",
  "key37": "417gU5JDu1U14yNXUxJqMD77uWMv2uK7Nwgm8Nyi1o1d2ZB1Y1Jq8Y7uAy61AmcqzougkYGbFESRBVpkGvFDaKfR",
  "key38": "2xXAnee1UtbTHgMEU6wix7tTwjUK8SgCgvcaWB9Z9sDZ2C5GT2sB4RpQPtsH2S7DZjoiHs8SMjB1ALDLyhn6ba8q",
  "key39": "5CdBsfTuRm2iB9hf31tv51vPbonutKczQa8sihiLhJg53VkdVkPGBpDLj3E3hBkHASRiFV24NGSbUqP3xgmFo5H7",
  "key40": "4cPdwU28HfCtFx4bN7ULepD6C7zwdo8Ac55mgiZUEzWpvA8KUMK84QKUUAwdWzceHmWhVbkYqZj5iQNXn8WpKaQC",
  "key41": "4471DjWjLAdsMzRDuFnpAc2gYnDp8d4osYDGB6C4sG22ckMHQRP9HxAyXPHAwwjVHv1GzfSohtLZDY3U8ruJBBXw",
  "key42": "3MLTw2kKSuDC6Pp6XsugsGNBGZDLQRUnteaY34fjTWftaKwByrJHvnzhsArkUZmGTSzPEnhYSi8jHKqBuFMjbbdM"
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
