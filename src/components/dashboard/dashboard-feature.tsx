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
    "4MiBk8WAxoN24P3VVPKAdJuB3NexKVaoP4mH2ajY2UCVaNBQew6ssps4dmQE8ZhFDu64yL6N84RkjpBm5Ut5p8xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKxyV1iKLGUVLAN2zeE2YBC8tUDYCYmtC7UwF9dvjdpFDzNTGD27ryvYXmBvs2Fe2spRSKAu7B3jU2GsKb4LDV",
  "key1": "4dVDA7yjuHU2MHM4GjTfP5f1QmAjCs7j3UKi8vKYRBf57RJ4dJfdR3xW72QUA9SKNPoAWEsfHUYe7YLHRAc7JgeQ",
  "key2": "2hVcdGpFyTsehQVjapqjVxYD9hAykypMdaCQfATpA6EgSFLeeoSQSX16BRvhJKp7qrm67boZCt9vqpDeroG82DcH",
  "key3": "63Aq5WS7CpBubk7L3oWVGwUeBF4GBiPaQYkVPwF4gMw2rWKJKfnT4Kj3JKLGuvzPq6SuzhWMAFgGoAaYC3V6967P",
  "key4": "KpZ7GBy46CnQgM4iNQYGnCjJY927PiCPPLHF7AaWLH4smDYt42QiiCetWmuNmYKwVid6psCbUF2We63weNA9wnW",
  "key5": "2etcXPURhHd9qkYa18p3CkDjP4zLLnX4tGtZWMR2ULudMHokenRBwGSjs5PntKt6Zhy9QoV1zzHeZDXjHCMbCVPF",
  "key6": "qyyUxpRvJ6QiJuq3QQvCaDsfkvaRQC12UfVTXoUyyjMq2RFuKec2WZ5hd1oKybA1M4BxtbisrqLso8UvC6iNDVw",
  "key7": "5mww1PN4uibdAZTo6G5XqZmPCFGSH1e3gFeBRZMNBuLLkQoRiHriijWdCjMnTky1Le5yVnbSacsr69yp2euA4ztw",
  "key8": "4VVuNAVCcrCQ8tyDjKg9YGCqJnURpSA4neNMzsm6sEEhBdvK1u9oAwWviF1iwxKWAc4nDJAVN6E2WAisfgmPcLf1",
  "key9": "2DAbhSyqHPWHPBmFTXFAabfh9V1vUerdKZNJ5F7YS9jYwdzctsfYMdpB3bW2VxvDaMencMoFRrBJXuqW3Saavgwc",
  "key10": "5RMtJuFKVgt7XCLMEM1htGevjfnKfHwpNNXTu4tje2xU1o3ocEqK2yqBdSuGNGAmjAUV4ZTL1QDkuJ7uVVxKYFVT",
  "key11": "64hHCaC9KNkBA6RB6x9nyxhpmLXYgerjyer4M6ph24oCcV8XwSekP757ZFMNyKH9bD23gc8C7odpxYKw4RARdUKH",
  "key12": "8zhBVh5gyygQMCCrk4LbF4pqWphehppgDW2QwstA379XKkmKWQ2PYmCWKLfATFxzxYsBkS3aYi9tjDnGWmyquhK",
  "key13": "gaNrhVE2b2ykoSh1MBoBnVZYKMqMuV5zngAYXRwoqez8pWMxZbgpM1boq216iD9psQ1uHRHDWs3XRTwurso3Grh",
  "key14": "445rCoW6zeB6YXwmQsErgPE6c81jzgwP2rL3rZDVJZ4Qq4mkXSFeKTwGDi1dWBS6tWFRi6Vnd5bHEcfNwbL4X3kP",
  "key15": "meWq2js8iWeYPtRiL2WmZbz7Kv2LGTBKL7ZyGjSBHiEdKUCtLEtZVpSfsgkEna41YdfS7CQdeNsA21i9wCc1W6a",
  "key16": "4jA9kWmyV9E42eHuxaiizWD78rSf6kWxBfEME7cdJW7xdUyP6pZUUGWWF8nPCcKWjws5QFb5ALxKaM5ehH6eEjtp",
  "key17": "5PEZRwY5i8BXXJMaGEP2pnwH9pL22XfkWa3FMs2RodP5DEuJDz4Jx1PNm3Yq6kc9qdn8X6kH9sk6r6RKcvkjP3XT",
  "key18": "4A69ipk4wEmpDFa1UsuTNanPSY9simC675pBEmy6Ny9xBbWTsURbxz1amrS4tLGBRG6rSoFNorJR58KixriKsd3P",
  "key19": "2sAW7M7xngrZmtjHXSMBQD2wCpxyeEC4RG6ASfs5BypF5UVytPD4t3NwrRFyhQB2RewBgxf5L4a4GTzxW9QL1vtx",
  "key20": "47PECUn7aWRbhLEE87ed8dzzYmwSqhPhhngrNWuBhwE7qnUMeKLWCiCdtSHmJ1D8W3LynZNFThAKBH2633v6M5F2",
  "key21": "4c1Yw2YPptUBaSeS5szf9AJgGfG6CmwnFAA1AShZo8gEdaQ3WkCU7e4rG5ryMZAr1nZaKtYSREiUj8eAAMdqwHji",
  "key22": "5oRWaaM89Q9KjoFHN2juDQtuh9Y9zgPhqX7AeYP36QUF8g7XCfZMfnbZTKpK1XDKnev7KpDwmvbu6FwSKDahJQLX",
  "key23": "9FtL5StULXFJEVXgBxppcSUEuon7Vd6NW1fvzFN68Nu7Lj1ACuh6aDCMPX41ePqVmBih75kqZiQKNXbYqg67uFd",
  "key24": "3T8boMT3Z6c5w9GVLW1LDPRY8oBqDGnLRZJD5AvjQwHYD9ErYmhrib8MTy8LTSVhs5wXoqHEcgEHCPTJwYsxGMpD",
  "key25": "3naGpttad7jBCyCC9sonMxdq92djsosXSdfbE7vf6JmmqtTKRccQ5pyDt46xvTCMhT2m8Z4v6fcSrynDap7oS5gu",
  "key26": "5K7a7r45gPmkdmdAfThs6iUFNXEXkqA7Au4czSSh9LaQJi6Lcd35nLM2PSx7G6jVE42MCbAv7cA1Lcwdrm9FbwsF",
  "key27": "3JtrRFJzrpSThTWjn83URyVQFm2xiVzHxAXa9rMHDgSTxR4i1DXqJeo1EoLVARyWAbDZGRHw2jqYWiLZVgLEo7UH",
  "key28": "qUoStsqQP9hANHtgqQa6sBcWRxgFugpnNVe1BFsrQdgYQQmQJxQt79UvsFx2p4jn85gSrTaL4zz2ip8kRfb8mfo",
  "key29": "ZJTYhVbNzgoMMknkQBCHeQ8GuSe6ea3FKCR9omfk6PticesU6qGm1KdQpR9Adg9NGVshVwbMHSXqxtE1PJS1RWU",
  "key30": "2j9qVP7Ga9yEHeb9fZitQhF9rNgJefJFqotBfyzVypqUo3vPeZdmnXatJxbM1ddo1Um2Qf8RE2jDtwdph1wi42xe",
  "key31": "5ZbzjfkYxBso8pgmK4pCw9JvdngZ2rXj3jptXuD8sMaNn1jpMgTG7edUbfWVSpd6KrLfQ6bZ5b1mDnDE9bN4iME5",
  "key32": "24wKpjoncea17CsEEtPpt3K1FU6fL9qLesSdcqdhvh7aQJUM289krBEs8SdbXXiUfQB9Buk2mauqZwZ5U3AA3A9M",
  "key33": "62amJCNW9gQoUnkpiPvHvVA5omgSyM19s96UEjvFDvQW6p9Z1Rp6YVf1uazrGeUWRKNcgT2ACCnRNdsQKtyLTbz1",
  "key34": "5cFTUSGiwyEdNzTadmYpYc58W3Qp1CgpRf2iUqidQBNfTwVDqbzBGuyFkw4JnSzizNfLX4ep5vdjPZYESUNx7yLk",
  "key35": "2pX8mEnGtP7W9juj1GWuWkxXzuRwTUPQDSzEUEPfq46QNwGYo32JqPqsGLJ2hRcG6yCrAafMuANRvXgypmTrf4ke",
  "key36": "2n49JbM5GR7vVHF75weR9XfcU1DesWksSwmcgGwFptRVsVeHBJjLTm2AfaoYg5iorobwzZDn86T68jpB4iwVbZE3",
  "key37": "3jjvdF5f8FVckNLWU4cDS6RCFCByFPkp4pJgM8T5L2c1Ep2eae3KjsMNMgcVezNL2zgUS8dHPn4zd75Jka3A9ddC",
  "key38": "4EPn4TDDmTm9vePESq7isqywLMVhZZZ3M4hLcG8L4ooejJ1QqBXmfKJK4YjZPP6oJaFyiENbKeC1qgM1cjQWvyRr",
  "key39": "Srj9vY1VywMeXDuHeQYzvoKqGHJ6KaxKL7JBYkDJTTbM4imR7fu4BRek5ccVqFjxWQgq2dn2NeSYyra3zhcnpYN",
  "key40": "5jRHCyCmj1iL7jD3amgXQHkPD5k95qkyVeJtVGy4hoTptnXSdyJVnXzocTMy3PaaUgT63tg5XuwGWobBjKhf8pyt",
  "key41": "5u6Bqn3HM4oMtnFZba77uFytLi94cbjWXZSqkBiKPthcwnoT2EhYe8BbtNWzmD9hUjy6zrhd43hi1boDnnSDSYrg",
  "key42": "2YAzzDbGm4Gy7kwxt3tTmB9dLkFgACCxEnJmBDy5MKPnxgZrNHqMsD9hBfFnJeY3rzg1mKJwGKjr1PneixfvUaPm",
  "key43": "27ZkTkD6YonBgAoBwgSZNMKcDucxyuXzZ1bYrENUcWXBXdCZdk6dAkji5GuVvv9PQSki3HPJQvkDvNzkyLLs6M7q",
  "key44": "2LdG8dmVdXF9Yy2xxNv47KGSUxL8VNYB1rA1FC3ih3mPyBU8PujYVBNSUj2RAf3sYVm7xj5vtaAejBbB6FUgVej9",
  "key45": "4yvEa4Z8xh9yXQtH1FsomVt1nar6hSAR3zyBuag1p1HxymvYzGMh7ZgsRBbeC1rVxVvS5YS8XRXAd9tD3CRjz5HH",
  "key46": "3H9TM91WKq8TwMepH6GQZXayKbwYSjJP7wsECA2rq3Md7BehcpJebdwXTSeJmTCuBtsMnmtAa1btr7iZ6yjfoucs",
  "key47": "3JXSP3vrfz5ufrapLqA36HW2fgTKcsXwdLDzforhy8So53WTV2GgrK8GZdB6Mpq2411eDJ8xLpG1oyVEjpEBMC7b",
  "key48": "5V6MThJMtaRzde5AU3Q99t8odZhMfv5CkS4ffqYSBKBXhuGQbcyxUAiitGyNBdiZqJQXtgKbBGP9czzGDjNdr1tj",
  "key49": "pS14UWV5e186A3LopfLvLKNUusXQwTQZb6MKT7ECK2MsxrvdKsxperpVzosJz9X4WxaYDepzPWcrT525GnPfMF5"
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
