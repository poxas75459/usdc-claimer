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
    "3MhffoL9xxREGzt9RHruJS2s7Xpt9UEKwCfPLcvkpJDTZNfGjKWMVToSfVxA7YJGz8qY3MU7dY4Jk9427B8pakP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDyC6TjuNtZXnYp3b56sdfHZ3GsqnvuBw8ry6ectzov3ERG61bTtMcL9kLqUTfoeSBEQ1xx69RZwU8eoLHeDcNW",
  "key1": "4wPQjZjahpHQv8bZ5j7yzBvdSFuKBX92svFVUV3fLfvf1Rwu4WxwE5Vi1yZGUJEbKKepM39R1tgAbX26XSUVRC81",
  "key2": "5UViQswLjsz5r36arR4YYXmK2FsMeoHLCWAMXL257fhSTzswUwPQs7A8Am4ykvDsqFhYF4UQfE8hUUdAFoHRVXZU",
  "key3": "3LtmxDvieRg5xnFy1WiPFSyRLeqGoJzuPq8NxDueDpAfMZNwYHokj1MHz72Knw8FXrme9D3BNqWDb9WWA2DzWF8Y",
  "key4": "3zgjGvk8gvYBdRSxiDrB1LdBmdDYW7YocQhd3rURmGEimkQCJ981giKeS9rvF19NosWMvmSEpz2gAQQActz7K2Zk",
  "key5": "4aVcBW3EYSUjTRZGne8mEPFUsWSd2aJQMjyyhGkkVP8efANrBcvQgYw14YaWiwQstx87cSAEnk1XFCb9z4LUG27i",
  "key6": "21u57jEZEAKuSTBaMFKcT93GtKSyZr8XBZMpzeKAmpSLoE3ud4cDjmotramwvfc1jDb3ZFzzpjHKmkMbQFvGZUrx",
  "key7": "3DueopgCpW3SSM5UE4RPegs8dXLm4evMzeAzA2hLSJDVNa5MdjHADrMZLq3qknGYgurx1X7VMxdNGRQ4i9snhPM5",
  "key8": "4uztBbxwLcT8rsvVcav3FqpZZz7tVBB4ZauW6KRoUGHgYe91EdjAE8WG4QyjW57Qao5jN8JwVMDD1qPoYTHd39U2",
  "key9": "3oK2BxNC1shvmXZ2LZ81n9JaeoB4Mb366WoVHS4VJ3ebpdq8eHVYRaykTwF5oeMKMrFbdWqWBq1QRGvcytj1pfVu",
  "key10": "4rLD3Go6ZEhsdKQQWDRiYLzCxbfVhfrZK6M5NrhieY3gNaagaatNuiAxwYgnbnuTA41gaWAaSNBVcTtz7LLBTxu7",
  "key11": "hiGhCTnRLAwjxwL8QfQJAXvHrw4tSzLViuaW7YB5H4eL2s9up6pQS4B37xQXEg4thK8Xgmug3Rqtfz14j8N93n9",
  "key12": "5NdicrR5tazuJfWCu9igE8JJvLtT449n8JAJ1vDV319BeEWpKzPLuKU5wBwJsV8ziRaotVs8xScQEEkxXMr2tLoz",
  "key13": "4ppMnUecMHzSbfJZMWMogwe5x7BrYeStMxAohm5dbDynCbJEZDTqjZikoGovvjF829YVSeKgY79sCNmWqrbrcuZn",
  "key14": "46aETvdhppsfzcr3DkCY3XdRiowKn2su3CgzDz5kBuZs5VaazfE8DEdj3zUr8SgGhGQFN7Sra8zAwyF9KNYcApau",
  "key15": "2AE5VDpXgUHQWRS1huXCgysmoZMgQ3qNV44ZeE9KuwzerHfzGam16HJ84MGAn7svYJooE6Z3AcgCJ6mAKDZf8FhH",
  "key16": "2ZazaNUt8tMnAA1dvHzjgzu962UxpzX4U4Q6DUJht4oB9ZXGWNJbTQiZRztm22eFjBv8xhw4g3CQ597ydmhaCLzh",
  "key17": "4doqkQVQU8HWSxsNLcybMgigUwnxo6XfstDzYzt7vG57raJBpeBH2JJrhXZmUxovPotdQznx2tQd6qd1YDAJBnqi",
  "key18": "4TrTghsce45cQkmJn4t7hZeXz9ykp24w1B6TaQrn3XKH8SGnnZL5petnYjg6RNdVKBrXK6EwZ2vxWUtbABFVwAJR",
  "key19": "3f2mAVhoRgXXWZgpQsRsC4LM63v9k4584gXDx25R9SeC9efU2jADrLK5BJCXR8kpDxmZXhRRDeQ1NuFCFZSEv5Uq",
  "key20": "MQA2Bb8njvHvqN5jy3cZgeBqNCtZJBiXjhrEtvLer6FkuCK6jCYfQHejSqJmMHwPcohdgLwHzrXRPKp8SicJnpt",
  "key21": "URW9aT5Jvgrr3nMurK3kAjAVR6TU5WTCka3iThcdRWwXqbogUJtdz52e4HBW3fDW91MC7aKjH73mHbiqEDRA3ZZ",
  "key22": "gL7c7t72GNKmHGjhxUfcdDPYVvAQqigwpMo49QJPLLfz494NbdeLHuMVCSMtJ1Sih1TEDhjcEoMMopKZEkRSE2H",
  "key23": "2HEN51Yj5oggH6HudAw1i1Fz6gBwXR8jpAUsuu8xb7NRb6RxwVhgJAj9gSGoNmR5hgBhmpcj3D4VACjNKNFASwtX",
  "key24": "3cMs1NrgCesE4Lq2WgUpWVzvxoZ2tZgBZef5Gr5tnv98NnhJDBzCBLF2inNNq4reiz72tJf8AU4ZRcVVoN67otb4",
  "key25": "2CEW8XrEftnrQrsjaJZUuiXGtWiPDCwL7DzfPHyzqK7JfR3pJH2UKVkkfw8wpe8djcVTTfhK4AJPeDvtvbtHYWcP",
  "key26": "LQsYFpFiD9DZtgrMwcDYMaKZ7ExvePrpheQKB8S5ynvyvHJZjbUtHi555YPWFNBocLhcyE9ZQ3BfrQ2fEPrkMaH",
  "key27": "3pD3M4SU7Xc3z1gsFcJ2PnGEBuaBGKpuyVppHLAvLpkRLFzWMD3PxwuscZcAkBvtpV1oKHJSwRYFLnrwsXyv1Jx4",
  "key28": "uBr7KEc9xsj6WT89vLMnVncWtU2Nxz9vxDxQKaPKfzxSex55HWD4SruhbG98ZYdKse1Hnjg25gHrmSZM7ceQEQA",
  "key29": "5AGh9AFrDfoas6ubFFije9LEiJRdCgSvv2RgLWnSvxe2oNR11Emxp2fDnbwzYfk2wqq4XRvsckuqBm7X77xZzVhR",
  "key30": "3VmkwBLZPqFacbZpyLGxcvXKf2g4GobU6JzGi3ybWdbdWi4k2R634xwvfQ6sHWwoWjrXGVxAkgGPYWqNLtR6ZUMo",
  "key31": "G7D2ELhiEtW9WRwf5MYFrbgbaHQbEmMPXx6roTcSMaAm4i1rz6jQ6wgi2NXphGq9pxetFrHd2ghvRVgjqT2V9aC",
  "key32": "4v4Zkged5FSwy61QYh8PPQqMbB6Aw5ZET8ka6gbPxqsdBeetuwba7XawCUNMQJqHL35E9VS4qcq6tkotmkJ47G8e",
  "key33": "3qKDwDyZTAfhRazcMRgtCkSyY1AR9jFQPEwner4J67Y7x9c2QpCNQA3UbcY4PRsCp4Ts4nD1FTeydXrC9X8xhnrc",
  "key34": "4ptShXCTLQ2TTMXQZuFAbZPBksZdop4imT4NCmb7cxDYZk29swC29zX4GqGgZNNrdvDa1DEaCMrGJJHbsv6bEToW",
  "key35": "5WLFcnktkxuQVAtgUpZB8gd5EXQ7TGuVUP9qhv4qxxSZhZWKmXGQ55EzHe9bo7KRjrUUkNagKGF7vnwHJc65CLpD",
  "key36": "3Z1RKhEeBqSsKJRiQhPXdEfSFni2UjTh2xz9fCsTgugwxkttNvZxwixfnuhNwUdkKRDSaFHvgnjZSPFzjMCVK8T8",
  "key37": "2GzYryBEekULEPvsVZGZhk1Z32gnbousMcTqbn89o8poj8QpPR1B9UjpMXmooen2ec3CPkHuNotP4KtVJquiKfne",
  "key38": "2bdav6Mb2Vjo7CccJjs6eU6fQZEFgeSTDKdqmjhELufis4nLqYLCd4iwTYBnEX22Lpkq5BLDY4Nze2H9dru9EHnv",
  "key39": "RYGzpvFafS3ZojH2WzsGn8y4RC7EqUgd9xQoPPtrC3W9ZX6MG3wbv7jzPQ8Y7CUAzL3TFQXgL9sBQjpTR78KC6W",
  "key40": "5GpFQ8kys1ZK3M8SNnvpzwkuiZHDnoP2BU5dqSCDE2CHsBWX2mLs3KinAMs3UMfQYUqtug6Hm7WBgxB1hjxgpwoE"
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
