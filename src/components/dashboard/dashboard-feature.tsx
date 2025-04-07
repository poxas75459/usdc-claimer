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
    "3yvwiE5dAZpFgAS5xfGgAXWS5dXZT83RDSSJe1JGFCnSZ7Fp6wapMP79R5oNtVPQRAsyVYdyg6CMc4t4Ct3qCrkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmHDZuVrY1VHg97cce2xARa16AM5hpW4eyL5oNo8sKYaiLPdgW1vKygw6QUbXidk9MiSNH6JP2YWgqUgunbukUL",
  "key1": "5AJia82Yd9y2JaKPbLPiJnV3GjMMFQ1q2suUFLF3mcmPTSQ5i6oDT5by86xAqHJX5EqVBdFhThGs3FCUAqStxg5Y",
  "key2": "3a4E6bJbE5xYnX1oKq2SDVMWjrhFNXnXYAgx7zj8kQ8HZGkLWdimdctnQY66V1yr9SVon22qRXT6tdTwBnmyajxv",
  "key3": "4XyFoqiQF3CuLimiCnvNPXKi8PANJr69rPi9Tey1JEe2wgPpP3qRLMcivcQQqYJt36p76znH6Bk2nHW4WCkmaAXU",
  "key4": "5d4n9DvcZU1M7LrH2fD7eZgxAiae3nLRcxvqHGiwZhx671m5x7qEeSkqszemwu4YrPLTFDpW5jMEfsMXxNLwuFsC",
  "key5": "3dsbhU2pguZNMPN9cCK7t2j4bjgbkzudmpytMAiDHbix7N18V5G1itvcQX3zJMMd17tNuB9S1nhAoXW6QuerNPQs",
  "key6": "23FFbD5zkEY3NzNqAh5KK7egXRgXNdnvJkEHsLR2yGbM7KsQyXGxitwxT2ZLb7N5hV6arQLy3JdggWcmUY2J7hjc",
  "key7": "5VR5QCgcJab4twRD1dUH1NnqmnAnrfQYjune4hiKb34ZHWaf15Pd39KRnW9QNKcritsvSUJY36wCoodDYG7nEog1",
  "key8": "UGRGvAScm2fc8sewUkSdCdsffV3qnJXRFvMGiU39f1rCzK3T2R5EbWK4djqpAkVFmY5NDB26v9Yc2iN79ciMsDL",
  "key9": "3wq2GLiGqQVuJqEgSPoaFmJuKAQXuFe38q2K6Hy2Fsy6iC4VZC9jZH7Vdeox7nnp4wkN15FrDym21HcDLNznft4L",
  "key10": "3uhmAxZTKrLwpTns2rZLtfSworhJbUYqEVbytK8ZRhTkW5swU6w7zBZ2Z7FaFSBHKuR7c6dR2Jfzxb88VJhCLwqw",
  "key11": "EnegBXiuNAAzM82zc9L9s2vb4pxkwdDdWxXqVhxvx3VDcxWcGzT75Vgi1ZqacqPba93rdrDqx5F2YWEahuA8NTJ",
  "key12": "ECpsRZRyhGTCZuteDNYZHB4ivqrbr8HDfhYqxypi8b3RMLaQGPEUrr78isZ6h93ynr63rCw79HnmtB6c3fjFW9G",
  "key13": "2Vcv2fz2gxeZpMdS9ZWc92JQkMjDccoWi6QrpXkYHcAvYWrTr2G7XmmshceG8DiGdZuz7xdQGUpVdSoEt8aeMcTR",
  "key14": "3f2499bsdBrSaQ6da6jWYhHzzQe9yEJGnbNdf7CkoWExNhYRngxkvcYrYu7z4fjWUYoAgScpLDkk7fPVGL1rHGDo",
  "key15": "4U4WtksANQ1aFRWuS4m2aA7eidwQgFZrkKnFDkKwkh8XRGd7cnXMte6RtLKqh3XaPin2ohP8KiojnMgHrQHpZJca",
  "key16": "56vGivYjnyzksZw9kaTcT7JYpFk8HBTwUkT3edxuFDikHLDD83y7MaWWEe5sPzxGSikhJyP9nPG8mAtBey8X4ziD",
  "key17": "4ysZjSnxkGBuNrR1UasBDAt8YYMLUzUHetd1hN6aJucAVcLKqbtjdaavQwpnFF2QEVcqy4A6m8CPhQpV34awpWc4",
  "key18": "5U1sPNdfJX9Y4hRSyDPkFcuCJq8b1tQ8s4dQ1yfcKsXPsFvBiEWdCUUTZogjp4SKZvVECKr9k5cJbZYpCqN4Rfyn",
  "key19": "2xwQa9AEns2y1ygTjBaokudxMFCuv4QXVbAG8V1G9vynrBAbo2H6cTn5dxdMZhCHkS7jPcXjb6rQUYrNqLFsZKXu",
  "key20": "27w1qBUgoH2C4a46qJjvXuWCL3bg4g4BKyB93c7uQiZd2WjNxdbmFNDAmwfTMbwCDgztpgSxDVPJektifKxtR4zS",
  "key21": "5E36jZmci3daPX3DGDrD6X1VFEiGQ4oP1GpRJjDHt2ZWtMKf7qrFWYdHEZo8PcVhB3Yrk75f4ho9nqkNAx8PvcZ8",
  "key22": "2j3WRsmTGtF1hptnswz4vPFFPTBzgUe2hmnstx6KX4mJVv6gosQ9Brne3XMSfGypFoGpVg6zDoRP9zwAmUC5w2es",
  "key23": "4bQB9nwJFac6mEJDfX5ZoNzZrgHGTBQQJXRnHqzBUCq29J3szi2fUpn9BF8i2QRt2mXo3HG8UTXX3zaWejqq6adJ",
  "key24": "36JJu2KNYpzmrjq6cLELHSVdm8Vd7euVcEEgGB3GPfaYpDd1374Cd7XhihCJkUySrDDfUSVP2fjdFGfGh8kvM4Tc",
  "key25": "s8xRLzSATwcXbLydFNFsxZk4huZjqDFbsdTVExE6PT2hTFtoewgpNPgXreKsfSHNregw2UbLskMz3eqnYBH5VGx",
  "key26": "5cYs2nqDUmTtEyB2Eauxb7b7qk8LVtcrTusUHnh8o55NecjTnpCbSAgxu64cHaL3r6Ms2igB8GFuGJFDzEgKofqL",
  "key27": "2oJzq3aALtTabb2smkLLBbXxNKHX6N5zD9b5zvxovyYkNHhtVDnGAyYLgGzVqv1frmVaFmuQuqrxg62JV4d5ZmDh",
  "key28": "3J77YuQnBsYMGyfjST9rkzfbDnDSkkoSgDheJ1Sfwrb83vzFPJkY7K3kjS1xa4JH3qqUesaxNYc3PxxR3t19prP1",
  "key29": "4t3WHD6Vrmo8GAkYVW7dSQoUYQMBck3f2tM3WU2YdjcGcZZAYD2VVJdcuguVpNfPBeJ8DVe1CxHk3T7R1m4n1cHv",
  "key30": "3YSE5MWva7PMnqs1Qf9Yij7q16a5x1AUPRomL3NsRnHybkuUkBhtib2bsD9sYdPQRwTQ7EaMc6KY4swZBvUcTuMs",
  "key31": "3BrNgFgDaP4TbfdZrHWh9ynPZM7xKJeDL9XxbUvS5rbSrwZgt1njVYBEWbgA36TyR65MScC54AaW9pFBjBjgcobZ",
  "key32": "5tTHTVPsg8roPurEBuzVGjK4o5R87MXu1usWVUq3wibDk5ErAm3QpbuzKnFCaRPGe9wqsVpjsrBztFxAi4k2nadm",
  "key33": "6Yfw3jtJdhPewmiFo6yiD4RmY3Eu3oMs1bhUUAuupZQvR4B5DUzVe4Pitq5w3F9SHB2ahS6cZYQmRdJV6xYZr3r",
  "key34": "3FschAyQhjNyz8x84uhP5C54bpYimQNq1ZQVUGwKXKVnJGBXoAcwN1ZgpE3kj3zEHoPLLjrn7UTN8k2pPBGJu7BX",
  "key35": "3HzmWeRrCNxJz7UVZYixg5w9wdeTKikXWDPfQ8mhRFtPBFeSnArkJysPHJdGRD9e6Qd4BLdb1bDQCxc1r9nqaQza",
  "key36": "4thx2HiDdxFkd7zcT4ZndkvHbxEa6hSMqG4YfsrjLSD56hpBqhp3MzFhqEHagbeg9Nk5BXkNLkB5jLsPshnNtkrU",
  "key37": "5HEt7rXWibJNkStc3Wfu66gGdxU9vThPqeb9ygXibiDGf72ZGUBRNNN3iun85dbgEcNFaUEH9RBVo2tefVw2befh",
  "key38": "54Pb37Dix4TXUxtSZXtEvJjZymzYw1zvdeE2TsiSdz8MdDzqxBaoTsHhwxtJPaZeUEtr4tMfLfem575S7tWZbird",
  "key39": "4Wn3tCMkGy7jgrV7zpYgF3Mo92MYmjwKVFx92g7keDHfrRweh2ejj1hMVy7j3GiVqQBJdMWxWq2KGETJ6XHA7Zqt",
  "key40": "3d7jn8wmDcoFCiduRrMpRA3sAk8B2ybiAFtER3QWhRUfpz7SFB3kdc8KkSgLwQNK6YfeHdeqrKxPVd9a9LwYyBRL",
  "key41": "269y555FRbCa9E9Rye5hMAVmgnzaQWeGAY7Gk7V5EPUGk1vZave68GamRF1CGQakFbumqxERbDe74vJW9sxhuWrB",
  "key42": "2Yq9ERsAvCo7eJSErXDHxBQLXHFkGEcyH6ns3qLVUdXBdDjiUKrDDpapgmAdKyAV7ZjvbhQwK6rzWhq3pKrMroex",
  "key43": "28F4a9E483MSM4i5T15VJMS1gYDqgW9YmymnMzUGLfYEMyE6Z5jab2hmrKAyM43A2QYLG2WXcDChc3Zf6foacNsa",
  "key44": "YrigGn5gtzHLBGiP3RRQBYGn1XnV1PESVkUFkCvWsf9Tdzb5UiXLThMGrRvh89nDvHS9v2o6x9Wf6RTnMdb8tfA",
  "key45": "5633S1BgaYcGbajLSC7bwuM5hM81AmcaZNTb4KQWzWqF9wihXyCqjN3aSQJ83Xg8PmTppuTjwJGrAjHtvNLsNP76"
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
