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
    "4TtzRLM3b13mhnQheHj5e5HgYV4akLiAVojY1vXatDpeU2P9fKCDrgmtb9Tg6McGxV3nXN2ANTS4k9R234eiXWow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGSwnHaQVKm9PKZDE3pjDMamirf7wtemgFEFNSSB1mcSPrzFXdZZPGpBJbeg5AfaQYtKLvC2jNwG6H7GajaPVPw",
  "key1": "5xEHV7PhZPHwrvKXo167zAbGXhs5TFavDVyiRpuj5FDJJxLfMXX9LEV8JDRME7mmrKJRsogK3qGemtYpnap2umfE",
  "key2": "3ZZAkcPAKp9AGuqQuexL3q8e93ZWWD1QYhgf7XioVfK2fKS9ZK5GuozukvQakZ8Kay9ywyU8rSaFnw6a33SPXLtG",
  "key3": "54FMpmfdjm3wLqh7aC3rKBHZoAbQmkbLdNXzyjRGcPyr28Hh8vyZkPFMtBceGHe5Qvn8sSvso2GzfeuWQEhFb5hc",
  "key4": "2zJv34JS8251o7PU7Zw3rqEWMhmBJyTXKP1yfkwUTthXN54rYE5RVGauV4BdeRZUs5aA62DE6UvFeZXg2DPFFBi7",
  "key5": "63burH1kqVL6VCoLGeLvL7F3SFNj9SrnGa4XKvkUk7w1pseNy1Em5oY67AbhZvRq9ExLK9R9xv8pGvgztv6zypny",
  "key6": "35qN7mDtY4mRNhfuDL5mdaGQMn4ATev6Kxb6AsA5K2KEpFCqraZcLsJtrhaYTjUgQqVrj646vHsZ2ia4HCWDhH99",
  "key7": "2pQQACtxsY3yMhsMMMHoTYFedKpq7oX6H8KPynNm3aZvHaVRGYfqLYRUhXW3tUTvZb2RoD4dq3t4wkJgobsxc8UC",
  "key8": "2WKvjVxKAfYKaA1h3ntZrcy3d85dbJXTP9FMgkU428PoszQYsbw96dv3QxMCYT2gjPp5kF2vCn6HZoSwdqgVDHR3",
  "key9": "4LVMfUiF1dQ6c4LZoq8wFqHVZQk48iF7Y5zrhiRhvGV7YZFFue2NFT5m1XpE4enCxXCXHoj1LzE74GVJCjfRVJee",
  "key10": "3H9tp44EzTdZvCfRFEyM15KVbUzcg2fsuaHToPeiF8tc3e8HaJ54j6Cfqee9oFZfwnpQwzhspVBz53G4NZm58k2N",
  "key11": "4hEFDfvnkrK6At9tZsWe7rWQjnokHTcrVrbxcdZLjUfRyH3PJkeX5dXpxwduD5293UBheB2V8KxUkJro1zBd1fkj",
  "key12": "61moVTnvGB1w8KS1FFy2kQASnri3WUvakvFCqcsUhmyN8joBUCB8gGCuWv2271X1zp314ot4tKW2WcYdrTcX6qyJ",
  "key13": "3zr7Wou8kUX8BjTspkv3cnK5F4x3fieG6eo4hZzFNrKqh3hiPTYYejJp6dPnPAc3jzAgtmgcc7WiuTZ4bcreCCMo",
  "key14": "Lb9TQxQd1h465jdNQ8o4yPEWCSxEvy8HHeiDRAijZVnD5dDLcyCwaQEVxW8yyLMmdJwQps4vCwBMTpMqu7sebde",
  "key15": "5VdWh2BNHAWBKWUDhStTBSfCVg63BtUXE8quRb7WaG4oZVgB3zx6MXTih9MCrZE68wtrPAgNqqng9ckuZwVByLE3",
  "key16": "66g8cKL5W4tmrVvh4XQy6tXioV8D4jGvyWG7jbe1eW1hUecgtT9abWBn1KzgF1Nwx8nCDvyzzAY5gLE4GZfGvhP2",
  "key17": "2mioD8oA79FQz44gRoqwdpm2ZAC3yAye5qRoDkSgJR5X1WQsqeNtcmY4njvTNzamkB1mwECuo2VKaPy8WS2Bi5Ng",
  "key18": "2WBzvmWjDWTysrUGCspfwNJaJpgEG6TMPwz2d5rz9Fx3rzgLuM7S63t8onzzqkjwYouiCLUKsDpRo3ERBtEuVeb9",
  "key19": "fBL2EAhfcVZZkrDxUs5JTxPmnJA4CcmXu7CJg3vZt5xFkMTMcTkHtKnsQjftyAmuKCWjPM2hyRrDwCFQgfiJnKs",
  "key20": "4CAKRz5tr2NkFPFQXPHqtNHLdZUK1NBmbVXzajst9EF18iac1uGz9wWPwduMbXFJ7PKgpiDNDWb2KiXrXkXsgVVG",
  "key21": "41P5YQ5U4vDJsgWCThN9o1poc85vBoBPWu4JB2rX3BHdFqDPNuvVVzqhSZZN7iKmL5PDFrCafjCZ858QPLfjUjwM",
  "key22": "38ZXv2HVe71ESr3YAEfgPi4BiiMvyp9Udfqgc6eLZCKCgqHRzEoiZpFytWMrWEDiZEV85usrgYVt6zmpkGi2z92Y",
  "key23": "3WDmXGGb3JbrxCgar5EJrX747y9RVT2N7dfKHxq8d6V9RbrswBBBAKUJMtz5zoQFiGLyrCqHoeEMAgdPFeKcUY7b",
  "key24": "4RrizR3ja8XxHQzCaZKcKbLzX63A6sGGZvswRABystwk8p6gqKRDWDnJwKndgKRhjLV4isyd4WW4dpx6dXz6qEnp",
  "key25": "4W2q2b9ty48b7Gsd6cpPXYLPwyX55KLcKy1dfs1RqCqF12q4NsKrZ2GLB9JkUkmwamKATdmCsb76hgAX77HnphfK",
  "key26": "gc4c99tQ6gkCfEertKt145HLHQuaCxjTy6Pr2KkFBqLR5M8BjsjQiNfK8augzjVUUY7dBL7JBzfQhbQ512C4Enk",
  "key27": "4pyfNYznPchBE478b5v8B1ULvgM195ZhZQWEWJGGaHDGkFPvVCRYSjE8h4VVhby3fS63S8pHgKowbX8ZS8Re5kMj",
  "key28": "4SfBKSHM78jWtZSYDzYV6i6CcYRqRAS3PKcDeZ9GjDCzB7gSNiYfUcE7XsdVeFAmpRSDY3bTcxzgzVC8oeTqKq9a",
  "key29": "5cYsdJq5odt46iHPLaGtmr8RPcHDWKxGSe3hN1urkGVEcxPhZ4d7eS4mVpPF3GQi6HjreHSKrNYc7be9GwfqYVQd",
  "key30": "meV8GtRzKgrdDTVQo2AmdTGWMpcQ6wLz74HDcdJRp25s2J4u3EbqgJMUyAS1yoCqgVbGJ14cJMkh8eAvvY7Rq99",
  "key31": "5PDake3n2W6mmUDsKkssdZNfKdC9kCreb9Jfvg3M8M9mruW53iqofdePcXn2edyoydN5T7MjTj4WbcAXHXVCJnrk",
  "key32": "2feM2yEABu7QXwTrJvzzYeFc3uRyck78fGtvr9RPHj7RK5gysrS8E25pAc8qco9SC5Tpq9L3Bwj5UgSTyc3EZThV",
  "key33": "2RnS2EzW8cL4ZYr4vm7quLF3MotWVf6NS2n7WFJA8fcPTnxmcm41i5oSVhQ58WJ9ZoxUb9YNeYn9foV8ai6itk7X",
  "key34": "4a34r5VLF4yNGL9djbVrpbxFbmj66cmdD13kjGupcNmpNmngWfFQeqRxCAc8ofHfexaVgUxAgH58iRt8ZwLw5wjx",
  "key35": "Wyuymu9ecejFX2ZXF7XyK3t5Voao2NwNLBQ3ZB5mnamovT6jCjyNuy5wKADCD8R4SYmMHsAHYMWeYfjuvuwSZio",
  "key36": "2WBjEi6RiJKjKkq2A7CyuTmZ3jtrMyApXEnvvkNnS7ahKcj47TvjoJDJxBDMMGaEK7N2nJBz2FG1wbFnRzydisxK",
  "key37": "jVH8YcMfrCJycXiWZ9LtmY4c9qNXHosewEBiEvEDaFybpsiT3QzUnsjtFPzoEDRJVjie3moJZ17u7j9eMxR4cCa",
  "key38": "5rD1Za7kF8TxHcCeR3frutBp37naXN38TLGxMfWJkzchsjnSDfxCs8YadJTJJPJt18S1978vQdm76EoumTw7JS2h",
  "key39": "mrHoyK8bbwXSpSSAptkbmiWPNbQ3aDK8fwByj8yYtTCftM5kEqmQKDPPzKnvQHmABc8fZZmEeaYjGECwwtNr7Zp",
  "key40": "5SHtEQacetoBnredHKSPE9qGxVh9NLjAn7jknRPcR1D9y7RWKahXMmf446by9kLoFfchhteZy5qo9HeywCcSVHHY",
  "key41": "4L4FVBxyucKEUSGMHeepQjvVfhGNB3Kmbwdmt2smSPNjcPNKzTgoF57T4uthSLFZtcfACgZo3YDQZLi4AxwzwFa7",
  "key42": "3nQ9FcCaWjXDw3MXdsRRdQFD83X8zKf5SUvonoTR37f2c7tgC6ZLiT7Sksc9FwosbHFRqbngyatPeNAgzmCijERw",
  "key43": "3qeUjY4ABVmyYw2ar39RWHdHPpd5xWNYaDjR4TSgwv2EwihCDDHFGaJ6shZk5UwvSMG4XJdEhy6csEKaQt6TsQ8",
  "key44": "31xwGA6PUxuB3t7ynLNXyYibrbdVGJmBmnomK7XDWaqjE47ddmaC4waBx6ejj8BCC4ncf6Rz36LQ8aQhTJbowWLo",
  "key45": "7bwLagZjackuZMadBwvayeRaPm8iRW8KyARXRywfVCQFb84vJegWKBR47YZcRFqMr7ebTYfDME3WpqnAN8kWqWS"
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
