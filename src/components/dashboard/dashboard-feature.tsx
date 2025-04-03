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
    "47P5gWUAxgSvjgnG8D8tpy7kHbZwChieRMjKJHGuofuvFyxYuYtDj3H2NKJZvjXSaGWNrmq1syntMZn3Vrch4cyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdYiDvBXVBdjaa6VvjrknoJnYDnYRDosc5a3PsLt63rSKbAL9QP59tRifzc4sYspc4t2zsyyJ7q6fz7Rwoxzunp",
  "key1": "4vPz1okJZ8DyQoB8Tew72mhvda3yYsZVfm4JkccuZT2gcsxMaqSW8wf8jX1atqGGQD3eVFxHj7HSpUdArkEKQQEw",
  "key2": "2qSBDQT6oHtFnEA4E2Zy3BqT7ZHzUK4RHj6AQKZUDKD9TewdVB7RuVJi5eiXoChG8ddgX5jYHZsL6rgBdwhkN4gc",
  "key3": "3PB9rtsuVX8z1sruXR6bRBanMWgE6xWpwxKcM9Vm1wqJCywuqrJC1FjH29Y1xrH9nt2U64PtJW76qZNEJMRsxkeD",
  "key4": "5qS93bGtwvP1oGN2GEi2Jmstv2tjqUg9MrbJsQuCzjiNuN5dcqExT2bxBQP4qKa47yQUXgDiu2ki2kdBKR5prPuJ",
  "key5": "5FyjUzaxhj6p4BmsJaZrxHBNTtKhDeBL3CJMDmLET3XUVYLiQUE23L1yVPmYnLL1EiL2zqD1RHrZHeH3oFUJNKWT",
  "key6": "ivqYGLqa66C55h3khBtrkjv4xHVahVgGd2mZL6jhiSw6WcnaAyoEMB4kwPRpuWA1cqdPddeYuwLLqzfPnFySGgS",
  "key7": "2tammi7ZNJpd4zdwE57uChrRbYvwhXChsdXZRQKz86i735oY53tJB6A8GqQg5C3cTc2o7oQyctLSve5sirc1ZZTn",
  "key8": "26atZuJJFLa7ngmq7CwFvebDvgXDa2DKDbYGY5quiBxfiQnR5z8sKjCG25z5JxTGW7n9Gy5NBfKbkHUS5tpL9YCC",
  "key9": "66ydfnUPnu4UewVxEhP3DcpRQa3aCDCMZWL7a9ViPkAQTu3eanUn9zjdHmmTgxcaMaAZfRrkkEppVZz13qq35mcd",
  "key10": "4R1PmCfAZLNsgVK9vDgqzUgNAFc8RGGcfyNBfktVt4C37cE1W6NUNSaX4ziKP6mzmWrqGXjpeK8xwX8e9KUYxTPq",
  "key11": "278o3VFgqaaZmC1vfSmfwyPEaw8McHHdTtSy3cHd57yQdggrBfBehJdK6zkN2pBEN3bqWUDjvrUw2HpdjjaoMipM",
  "key12": "3i9eAQEgdWiERUqd4nY1w9KeGAR8RSTmMbHbx4BbmwxWAJqcyr9z7uGS1Nm15PkGr8jPKkEi2ywNVxAUJVPKWhbc",
  "key13": "GCp5t3q76W1yJxehieVPGCFz8QgQat57shdtZigRCFzoYihhMNfdDQVcMH1nusFth68v8wLdkTtkQ2JLUg8cm1H",
  "key14": "5fT6UzhdeABSpbQPqH2sF61J6Ex37kWZninYJ8wTtMitoNdCHVcWkbuPx3ykSNvWUFfosxgf5fqhxrv2BWAPrVfQ",
  "key15": "k8bora3xzmrFdDz7BecnV55YAFLpMvfyZWLQ9WhoJHyZ1bXXMFja93jod3znPk2BEgsbSE6r4K7ihTxJzuZwfLu",
  "key16": "eGPksrynVL7xDsazahfvWGi8Ceuwg5jGZVu2aNcXhy4qp8iCUGERoUhEhpg3sqduqZmaDMf881tcUyG9D4c2Re4",
  "key17": "51UJnNaJvsVFYVfjaK5pqahLwB2b2NqBbuy53oi2JVxFUE2hXZiNavDk2nAPdNcHSg5UAmnh38vopBxANDyq8coY",
  "key18": "3Sy9MRfJtuzzGK2ofMWpuMT8w2dZbem9EMutsCAgPLneY1QupbGPv3KZEeoMF8SgjsZ7USo873DyLX2Az3rsNChn",
  "key19": "3rdETLKx2DHk9ADsyFBwDuEQ7iTYBnMDgicbjKJT63Fj4RggfxvfnkPNxKyUahe86SNTjr9TCGshk92zqz5N871L",
  "key20": "4aT4SCQ4LT9eMFySjNQW9axbWwFP7S7P4ZoVydrvtFeQYD4PxwJRPjMv8kovSBNGvimNvZJZofGConiSPsLkRhYq",
  "key21": "62PPjEuuxHT6yaZVxgiKd3DD5Ppghshb5VRN9WHhGo59DpTHRgdArN6Pc448a1wPbAuSZ4odrxMYpeMdNwg5MiqK",
  "key22": "3Psj6cAqZkA5q21Acxaj7yq59Uh5MWPa7WtyeGiYaM7YXJUXMNaJcqC9mb54b78BT7UNqtphtmvtuB7VHnV9S7U2",
  "key23": "2aYfCbjFL2AwHbHri6erNY2XMbqwNUbQS9qLNeLJ7Lw9H6rEQS2Vjf8vdr7A1hzepQQpYfQ8aMUtPZyEHL7KV6Xn",
  "key24": "36aESQ3P6kKqRcFixN35sAHV9DQFgjZde6gfG7Hey75rCVBT2ziGaALW9NyyaqJpFeaWEcJd2b44x2Rb3n2N3m6N",
  "key25": "2jGxj4dU8ZC2svrKZZhgp9SZXKP2kTXa5SjVqoQEaqjd498Wro3bgtrRvm5cfCbgF4gjp1XHX26DT79owvs2E6tw",
  "key26": "2nVHvRGMTssuJDsXBr27SrpphXeoPrveYCDbPeheJ14DBp96wKkSGW2exNToUseyaKWYB3XCoEdmrnJFYsypoB1K",
  "key27": "3ejATeTvPoBe9aJP4hettyWwKYbrCoimMvy9BZcK6N2zWYKZ5H9F7FT1oq4ApZZ4wUUHo3u8L53s7p7D5makLuGM",
  "key28": "37a184LGnecTrhskjNaH1q4oEDpRLBCp42xYHuovSVxYnee5qiEbxBAcgDLskmHz9HoukJCLh8vEgMqg6okKpt2t",
  "key29": "em5jahC2uma3yesvZkk5QKJSepiS9YAGHnP85nbKUPM4ZWGfpJbMa3EytZ2VmGpZBxotYqakLrVrNX8ZuyLa5Bh",
  "key30": "5Y2A6MitX5WcCZpr853Czi3mPA9epPPKsFysYPekFnMPsjUnZdpuM8Lnykrfn818s1RRbczF6JrtFhaJWt7EZ8ih",
  "key31": "4yJ27MPZEQsGf2CEoWf78WD6T2vePWzteHLsuwfi6sX2s1gf7qxmXbQQ5PtKaUmEh9J5VgDAsq8bgR6xC9vMyTdX",
  "key32": "2CMsJrKaj4qFPpXmbG3sMz5MHJca3fDBqiTVRPApBaEduonuPEN7TxHojKEg54Q2Qdi4N5G8iPkBzsoLLCQgK4eL",
  "key33": "aWGGXwpp6tHTZQcKpE1zCg3L8ee2M39qwq2kiH2pVuXyCE6vrVg4fv6uHUkEyHBLTidNK8XV5qaFz2nWxDSExky",
  "key34": "28FaZWqQ2boEMprSfiuFA1t57KXhKV44aUiT5LMjGHFngk5qebSSK3r8tdmmC3yrm1oFv5adSRGMtJuFrZsatDs3",
  "key35": "5ZUhAq2gBADfoGxQ4jmCtRLKKhDAfnPKVzM2m4xBGKLTZPRND6qBDaxGBt2f9gAdS5cSe8pNHHhQ4RRo33PDPudo",
  "key36": "3iFtUy9eyB15nMj5ouHf5bv8ZEAHBCnPDjfHAHXgyEcDLAVdrxgfy25QcVQAuifrUJ3UWboXxPKh2mFn5JFQ41uP",
  "key37": "5G93HxyPRHy7EmGz4oc21tEQwhngxijejrUuap92gp6ZyvziuKwxQ8KrFhSpKriQke5ApY51wzhrqHTwSThJCBnc",
  "key38": "2dYsgbfFyXsfWEwesBGsN94qxUkJW6popdYfkmjyhUv4kVbToZoKR3QmfT1yrog7QJb21uvtjod6At7ocQJozX1s",
  "key39": "uGiu1JLN8BmJfqeCdKQrCYRqVCPc6M4cXu75HuqmvxfKrqESqxr9prBdYQ992V6aLJ64hAJoS9pEHrSwKnZzhZv",
  "key40": "3VbzwR8B9s55nxjG3abBTdCK1iXyyvdwDVtgY1m6qfismd8p7H38R7vw9mmezGRZyguyN6PumfsbFaKDBJA9VakT",
  "key41": "58z724JxoCrwwNniPPYb6dEwpcd9DDvjQh2Fwopy5XGAkCXFHRvoMFBrFZDPJgeTcSPZey8E5mzQUpEVzLZzkJXw",
  "key42": "5dk8LW4GE17nqeM62D3CQNm8YYpsi3svgsbffTEEzZ61RcJUna83KLq5sWtLNoKRXDK7puY5WJ5hbDnZyLZN8zX4",
  "key43": "35U31NFPJ65qjCCJfe51ioaHXHoWdmCYCGLeRvHv8No6QGxP35iQGv8XNitd3BpWwJhGNA1u8yMv5Bj8vSabxyeA",
  "key44": "3cynLQkQfQXqAB6M53f8wzqFFdmTA8CuETy9gcbNvmrpLUpuDc4fzMP4FhL3wdMeZt1VHNjzmCrkxaWYn1oX6RKr",
  "key45": "4mob9KouR1wh1JsRJ5FyPfhWLTc2f7DxfXCuT3wqWBVVqBULz4S1ywy5rQxToMS58az4fVvXMHMrtzq3TLzyca8r",
  "key46": "3zXSTehsRKDvbTXKACFWN2DWA9LhQY7ZzjNadbR65CywatwR1BiRZEvR6fgkpyFYBGjGZ75Tca68RFQBYKq6scui",
  "key47": "42QKZhYTp1uUShD2d3rdJuYhwAxD5bRvYqBwzsJpzeSF6S3canhTdFST8xeARG4j9QbCWrVMU1LcKRMTPKjnkx4P",
  "key48": "2KLiiyV2nZDXRqrPzri5ecP2qH6NQ9kYhzY7ikmengqjrrZrLp2QBPuvZJBtqSgJR9hXYb4SUXrqtpbiZ3pJvQCg"
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
