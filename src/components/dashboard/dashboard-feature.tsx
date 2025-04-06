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
    "31sZx83AsEBJoxmXGbfJy4Bq9Cka6vSNzXCqU7jqLuTPA9p1CAkHd4ZgZ256HunzRbgQP4YbwhUS4Vn5LU7BaVKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Vj216q2hkrVF8RyHH7rz9XTAk65fRQTScrqodqFnoKCMK2CiJjsa7puqjmudMDKA9png3AaZZmRsgg9MDnbrRQ",
  "key1": "5Wm3fLsHnsmMiLoS2GFUyjX5j3giepuPj9du5Aa1H1n62dSJrEqdCuiMapjVNKQxdZYyg5VfE1iKiMjAEgMp9vLX",
  "key2": "5S4QnmPdLk7BNK8332RAmmonbt8fjAEXzGNcs8zpuBWbpKnj8A6Qcz8zipwxY56sXxowV2EnDcizPYUGKjQavYuT",
  "key3": "3pAmiLRtGMUttCfX6idLEc44XthzJBHWkkpc2tM4ZadYDQSBdppmaZy3WcUxQgrhsjTE2DThSzw3MEk61xvguhwZ",
  "key4": "3jPnGZWxgNvURbVwtS6DkA2p1b3EuMC2sVBLRMHj5C4pMRTnUa1oaraUiFnTdRepdWaKaoApusjVvFT3TN3pEVt5",
  "key5": "5GMo4cpj1cKGHRzAuAWwBbXmR6zKazZwjCvsvEY55kNrsG1aZutm1uQyCA9NgvSjGfQzwJfCPi9xkKgUxQcygJin",
  "key6": "5V26QGhwF94jRTjPXism2beEVhtDXYdSA9bAHGK1cqXssU3Zfw759Nmkyuct2sY6WuqnPU6ZHwS2cpCRizz6eM5X",
  "key7": "2U9nHiLTX8B1jJBBwLmsV3qRz6gLwR2bdaRoebCswo5keD1MAhChBrJmL7ZAFaEiVeunzz4hkAQbswgLKcjRgT9H",
  "key8": "3LU5HZCferf2peu1aeVJuMaUWCSaeLWeGNdeEvW8Te2S8JAK8Weg7sYSV4NPB9Foe3uLMnszwboXnHdbaheWCPMC",
  "key9": "4zjY44RAfj2YVxo1SxaTA3GjAAhretsQMjc3J6eqdVDAzhLszATPExfJmDHwfRdnncaYuNdphgrXc13pVWJRzgKF",
  "key10": "2gz6muYTWeKQXeLm71gjxagVZ8jbLHi6RpXtZzMZ7L5tKt2Nv4BEuZTimUuNrRz6PohX8DsespWNxWE5rpfH3DSx",
  "key11": "fJEMC2nXuQHyY1q93CdPgDQqYSvuNXdUkgFZyhSb3dLVph8QVMugLRxbQm1MY92mucn2bVjTMjVop8bnWVXdgbr",
  "key12": "39anLs4YpdrwdsAkRbE7zzRhVeppdoK3cwyc6tad826uuu4ZDKneqtkS6USv5D3JzGezV6bPgML7bAb6ozz41XXL",
  "key13": "4pMM69Ys3VY2YkRiM7QWUnvXpF9o6geu3RYMfbXAWU7UUgHh7M4fjr1UGx9FhCQwoPjFwH8j3pH2j4CFkfSZp2Cz",
  "key14": "2FopGjNjLohwz13mkcdXBZRoYMaGtSj6a3co36S4V8PkFrc6sgQjvGubrbCg7HhhWxGdxqqfPfJeECziS6yBcvqq",
  "key15": "kn6bf2bBJzY6HX7eS8KMts84A5QKtkx2TEY3dFGcJxKwVfG8cWsHHTHjt5DMqpNJM1S1H214tiA8hUHYwrtMspZ",
  "key16": "2X2se8aaT1vsk2vqUrXBnUNEzV4GVoAZiYkHxk3QTgAKJEuhJ8SbukVHtATfg5dua1755Rt6cCJFvd5rz18RU9Xi",
  "key17": "4qLMK4HVYSKwrMzutRAnUuPgcsr9AxHgJc9vNjZpSqdC51WwXtkgpRsHESXZJYLC9FygwQDM6Aj8DU2ZHaU43WZ1",
  "key18": "2Vm2mCkByLJ4GdjPFPMYEUaPQiigQXQqwz3LMDQSkG6ZX1MVVxzNUbpKeN8yF5jKB5YCh4scYBAvQQy24gBN7x4j",
  "key19": "5R3TQSTrKzLkZcZdpW3his7Yrtxmgnw5fEdZTWwoRestWFJd1Tbpu45GztXy8uLGHiJWdtaGWFbyB1Bwd9FtX1pD",
  "key20": "4R8kDNermFmEx6RnAbwHLNfuJ3Xeq6uzcwmH3WjqVrNYQCeaMo4J6TyBwEoyY3ZTMfBZC1gQAC2xnwRWR7DMRQSr",
  "key21": "21bni8GWnFdhwBNskd3EsqYDYGH4fB1WLvKdfbRqntRLArjXD77uo5SXa5iLzwaXmhroMicBySWTSkV7bDWnWm56",
  "key22": "64u5waY5Pj89j3YKFe4szdML4CCNEjP1Yo2Zy1J1CD13HxxirKhwGj5ViUAwqPqpDmF8KmCENaEX8cQhsQiRDFCR",
  "key23": "5EgQwWB9FuQjcXGURQcEkhX41HSPLquwof54eL1NAeA8T3W98nP7Cw4XwgHtUR2UZjKjNnWvZ7dssWg51euHbky5",
  "key24": "riGoYMvgd5XMR99Qt2C7Xji1Mh7x9MX5MP9sfc6CQM7w4oYFCeu7FHLYjKaGxwsqJih6iBcjjmgJ1C65BT8N3Sv",
  "key25": "4S2cjE9dRxNt1iuyMzGRKC7KTHf6CYmrCBMK31pTZsi1fyA9UHqut5szYsHxA81zoHQ8DHXmGyQJWsbNJPpcFkkz",
  "key26": "4XiGQRSrhuB9yvLZ31yrRNXhULDNKsmPNa3xZyGkgygDmM6uc8ZrQQDpyhRXTe3wfdR6tCRWJQVhmZjfLyRKge1P",
  "key27": "36ehUPncVtBgm3iwRjDuWQQHGV1pBcan1dMw8XFp25wzJ1BRCmVPAoJ3PY9AmL65jho6B84FTUbmKCe29cbJxco5",
  "key28": "4Nr7rv7muPA7dznbNbrJQxb9Tqf1G1ohvpm5m2oB27NvYVGfwRx8dDdwxQZAwZM5cPDdYpjWEfTDNrnw7N6nr6uG",
  "key29": "5JdzAY5BwDNH4riPRKSjxLYGYuNbNYFfnddAVNH6Y5tDEAtpAn7Tb8JYw2aYD2cv9cBtfad2C5id5ZYHYAbhXrbw",
  "key30": "jj8k21mUGAcoQbF835Xjz4YRdNkUhSkU5y5pmGzALk3MMecD6p3YsCDjMwHifoCAndWfE4enrGFuG6E24nxtQTb",
  "key31": "2dNWqjuMxgYwn2ntv5L56XfL7QPxy3qyJmA6L2vBa2dP9o8y3sbELesyX1eBv41bNnzSHoydxY2g99tBzs5ohTZa",
  "key32": "2ycgxx9HHdmfE9PQ95iSNYX3TMD8iPGoAG58deJumUqPmigX8bYkpzq6UUqgZ3Z5hwPhLGjAJn88gF2Q9eHU4Mqm",
  "key33": "5MSrJvbyWzFu7Kt7m2xXdvs48n3MpgtTCb8q7Lhd2xGjm4UfErrrfpEQs3EcVP13q1gEU3HA8vDMWeEFTLaD76aP",
  "key34": "3NF8XLznGsZ2Yq3QPDHvQBMgUYvx6nTM1mgyJfyHZxkUtYjjnQzANtXcfARLh1t1q8KkJrMiw3br59WFDPTbGQfb",
  "key35": "2QzdUVtt9kQQJSxsHdewahwfX5LRa7CwZ8Tk7edGnasTkGUHLtvvUHorZqC2pcfaFBwDhdh3shNGFXPYmHZEMsAT",
  "key36": "443aMGAgU5pwwY59Q9yAfY3m3NKAFKoXnJP4v3T9YzG3QDL8Uh4hnkndEKLY914emW33N9TJebKZAPz89n8hFpFA",
  "key37": "61weQgAE6XEumSNd6rfXXv7wqiCuqqJPUZkkK33yoMiK3SejQciUokn3DHmzAsz1UDrmewd7WFR7dW6tQvS2bLvK",
  "key38": "zj5e6mo9ZQPmzskndPwJYGAQQdQduw5YGQ92wwjMcQF4ysLkYEcLYe3CVjjZPV1e6Eh9fAKKxBJjm3B4ucUs4hE",
  "key39": "QNvv3QjmDiSfdRxxysRJKqNpaF8ec54effUdntG8vCj2fkukKBMC3iPA7Z5k84G5oxCWLvwcsTq6KH1aAja4UZ4",
  "key40": "2Aga3yAowShmhBkxiTzhVQBYzhNeqAEbXYAWtzMaJYa5w9t9g3JgmVSMwWgEPsArHYsshUgSc9gj7AuxZ4drZJNJ",
  "key41": "44eZRXcpjP44as3Sj1qU6PRVmuFvWzCybuCvfyW8SUdW4nNniKYNqMmCYJSA7dVvBiKxm4QEwKrniyxmvQrDWHxN",
  "key42": "4qXLjgyGtjJVX13xGgXGoijjdYyYpd3bnMQ6KTYBFFBdWjUyo6v2KCYbiaF92FLNuaDtdzQPyMpj82DBnUUo1WZP"
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
