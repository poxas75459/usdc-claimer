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
    "4SRqchN9bsAomi2MeznVUtAPKtqaKQF95UP9PR7Htk6FQLNRmi2girv82oEiFjzKVpyLMrudFuEWC8o8qSmN3MRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUoe9TgBNVgyopAL2JmjrxnhL7eq6MAaQgUEsu5oboPEPNi4575mCG3VKsKFUbRZBkN44f8UdDvMjyPfTwNEfPC",
  "key1": "5UjMYnHdRaMxuvAT49uLdKzhrc3Uwfnp2mpMppLuum7Q5fbKLRna19o1f5Up6VbhkEXMa4JWMiTxpyAND2RMyt2Z",
  "key2": "66BRXzH8f2TwbrD8myyATCZePpfkJZMBqayEnXUYmPsznZTxXrzBYFiVQqHSvTdUTEi6Aosz6PT5USNgMAUc1AZ7",
  "key3": "DX8LdVkfE5V7tCK9Hyw9ooQE8RavYoF9XwNCfFWSd7M7gJKReiCS6faiUNBmXRyqSvmusbn1gEsDYyHYSdGjCRh",
  "key4": "3uVaFf5Nyf47ZpYEZWTxa5bbPs7ab285Gd8UBm7wcuRNfCVknhiAboNJ2aAkqqstzfcaCxuddfCTd75EvcTPMmYR",
  "key5": "2rgbe1ySWfXh8GMoeAftCfs3Kim4iJgBdj9Ze7NqUVnwBGUyk48kfooQaEtgmSdduaic3sXXPV4CteaSA1PKH9PX",
  "key6": "5zdSubqrJqpUFUz6T4fbdHkh35MQcPkSYAE3SxAKjFgEzsuwPJNi3uA2qqpvTFbhSgN6GvokFbGczqkL3tcghMqY",
  "key7": "5tdvhxqCz4hTpC88dBgMaQaNQrR7HZLGYENTWCXKDjF1zY3378igQKNMKeVwuHNpoWBzSTYRYX9T58mXWhFAUhnz",
  "key8": "P27QSU3p9kbBpQz3DDXVTN8nzQBFbK9kdfNC8GyUejuo7tXV3sRrGmNgokUCdQNzFTj9wL5mfMGa6BumhXNucoq",
  "key9": "343MQqSa9AV1Gx3HBYua6KvuoNM2gpyWqZA1xpBuwfB9YdSQvALnrmMYpvTiHTiwPCwYqd1zc3rwgG7aCCt6XuuZ",
  "key10": "5btQ7b9mmPsyfxeTSRNdMXMC1LRhPVC6j6FphvEh6ty9nEzAB6nCg5aKaEQ1WAuFp9ssiqrXh8gYKd6SgoBzw1Rg",
  "key11": "4rjZq7Mdjs4t47eqkWQFynW5SaJ8T7GftjyHaAtbVPjuSPadtexRcGw6rgZThGQZgMeYPXJ5UkVgCJPQRMzfK9ok",
  "key12": "3uWZhvK6bz9N2bcz3ihjh7j8PPk6ZTxPtqcTPYJmCR9vw69jAZCkfxX2V8np47fkD6sbgtbzYVhaoVsjYbmei6Nu",
  "key13": "LaC1MEUkCyKB7qSUUoUBLpnum2JQJtzYG47CovgGbPq7hFVGLwstKkWy6nfnrCoj6qYwzkY2r2iBbB9XDF35gHw",
  "key14": "5GpUMFDJJPf5t9aVwM7KVZxx4CR1caTwL1vcxPHJzxWUtr93TQWYDJEuwJH8WuEuwNycrMZw4BzAHYyBhCaFa7CB",
  "key15": "PHSyt7uatsJ4tbrRf3p4u5V9Yyw1XwG9etHKkKkYEuQxJFQ9YAuLqQpe37mCfrhFk2Pt7XqLuuTUMucrmDTWm1v",
  "key16": "5nxT4vK8q8M39vFucof37mZnYXPqvdgaCL67uV8txBCVCWzsvbwxr61sikPFiotLTeDzfZK2vKUJY3jUzv739fWJ",
  "key17": "L579CdbPAAyWwwLUhD1stVRHs69U8BHfoAtGwNyTNqPkpV4KctyMhwTcMxXUsicZchdkrg4uxWD3hLjNz3uTnAV",
  "key18": "2wb1vSH9aUkCToBfHJ96DNyMCvtFkkVFLV8SMdhgMHBqpRBcNZT4yvng5ZWJYzumAsow6BySC2XtnrMtUTonLS2U",
  "key19": "4pQZ3MziF4fw7DF6fdLAfMSA8QPZXP7PHniMSUATE5m4Tx5FG4uc8GYsw5UVuCf2Mgt7x4ngXLaMwugDhPe2yNVA",
  "key20": "2rFdmCDHDsh9SgKvat3nVYPHMPgs7h9BM9fV1uYC8aduYYKjX7EhX4JzvyHxaP9yzasnHMwxP8pPCiHzkZNBYtnu",
  "key21": "2EwZrPKPgWMyJdQvnrM3QrEpeju9dMzE48fXZsuBbLbKCwEYUpWoEzQb1RgiLToLtPr12npSVzkza6QixcCa1VM",
  "key22": "4tama5rkUeAbwMEDmwucVe1UyVnLFE8XhWUWDVspoeBXRLjCfCBeyuQDtUE8RLqi9FQB7ZTWeGs83q4Vin3cJKfW",
  "key23": "4LPA2FNUrgVAfXhnqURKKJArXH69mTgt5gsXcjAX3p5brAhUyDiMDbgb3UNYKw8rkzVqBBahsyH6QgN2ofCXWm5v",
  "key24": "4XRsQdG2d5r4177fCU54FnvodK36JsEKguXXtNUxSdnbusPRAK1X3XFTi5Gvp1j8L1YZZQ7FmqZHUHeyE1esN7rt",
  "key25": "ryp2ygeVaS3xuhWf9B3TbzpXybbuKWbh4Vb8ct5DyMaqbvNXj9ZqwBUNUFyRJBYmf7JbwDiFf7GuU9WpuRmJhU6",
  "key26": "2i81xJCvqV6GGxQBtGGzphdN9PiTwYrB3oWm91BcXDYjhYA9LWopH6W6Yuh6bbZxRAxH99f3S239UCpNBL2M4ojP",
  "key27": "66R6zYQPnPTbdRUKfUgoxkK4gDiii4jaEwU5MV56NrhJ7WCUnRPpyeN7z6MUZXEYLFiUwaxBRhmKYWMNdAY8aqCg",
  "key28": "4SxRh7YgYEzmfKwAiEt4abuinZKfusSdQL6NS9pVdfHydmUDKtAmQG1ganUvX9nTHEuH1SHhY9CsLmrgGr6Dd6G1",
  "key29": "3TJv78TaB3K9XdqZ8b3adbWiqfw3VrCDauWdBkmPmeQFhGQTmdtdMzQiHrtJqH8XtBbwrWi3WYzcDGacvhoVugwe",
  "key30": "2UKDEWHfdT3UGxgjUtLjn3hyJySNVApTpqpXktZziFdw2oegt7xgaZgGx59g5MzNBPb8qPdmrxWn3rpn7ksQsjoW",
  "key31": "5vv1AGC5gEnCPXMJuVvhApQwdwiubEUaMeoAG9F5ohfp4mnibirmAAyKyDLhP5n7T94gYRMffDi1y66ZiUgM1yYn",
  "key32": "4XH9CEvwtHPKqcogDLhWa7Xp71vehBzNhTqonHqESAeEJhpSE7nRhygsPvrZM3cRuDyEV3CnNKbPmZoJYFb4bBmN",
  "key33": "4sdTk93xJUCGHQ9USgiCnTJMGrpmQkCEHMBEuqowEwc2773JBqdySmPhVaSxYkuyAbjZy69KXeUG1MmwSLx7ipkL",
  "key34": "a62Q2AVzDKhwfV2aCgAuPL3ChKnNyUJaRWkt8rAy7ArnMmRa68T29ieuLJcxEEknNCQ1WQxx81jQDGUtfAPa4WE",
  "key35": "g16dsSZQ4udL6V2UN8Vjuq3tQGX4msUkZcBGDHLLJenodkb8Cgznypx2fo7uzbz6Xe6iN5xmqbzyb2LU8uFdrTv"
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
