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
    "4dCFTevpDEFezRZQy4z1oeWm4HZpVJcniSskw1XX5bRx13wPPLfr4p51Ycpnqo4VbKcbeQPkPZyKXwN8ezEFQWrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MoghpAEXNsaee4xafdSPaPB6hu65B8Zs1ZT9dvY5trebMwZjbXrct1g9fRAny23PEycXJ8gzeELnzSqUBK6eSBQ",
  "key1": "49GXb9GPbdi8VaokW9VioMpjc5Pnhvti4KgNFWop9rfMbJ7UDZVTjBZv2kSPD5WBy1SxMFmAzZz5DHigEH4LfsJ9",
  "key2": "5jCZWYRLESdRtRzc6msXS4pzqe7SpBsBTciodZMcrk5oUrzE9c1JhJib3cU8gBFYdRnqNTko9RFVivwfUCoorAhd",
  "key3": "63yCbCYSYYn5zBpWJfFdKhPHSAQGo6FcTMZdFRLHEFTE3rQJKjE8LM38AcJYxdYbr7iLzh721gSysuumJeJpJeTT",
  "key4": "2sxz5KEHBAL6cX5EWZYFGNUvgk7aNdH19ppeUoUD4rDs3TdJRcXf6ssjTeEEbdxN6djtRNrtnYBog7KhKLjTTGGy",
  "key5": "KRsXCYUG5tcahwyFdMzw7FCZE7h9EvbaDBGSmJhPNdNmesZNPhq7hG8CtaG14djUW358yPVGuREs7KfvXbthBro",
  "key6": "3vQYxqTh57bcQzZTmGMLFApUgdvfCyHSncrwmBG7Lmf4iQCoQX4gtUb9eFjyq9wzGic6kxstMXV3N1SA2WbY76T",
  "key7": "qznEsHXZrgSxnKaNB1X2Prx1VRhiJGdD762WSmfSYMKxqmMH1WhS1MrQJd3U9fHTYopp5zaKrkF8A1V9vBHAwpG",
  "key8": "2SRMjquSpFmD8D3AgTTSKE87tuT11ssrEiminDA7xHvPVyoCjrbRrAN2UMiKvrDJRuhdFSzUrdQXXVBmzGuAm199",
  "key9": "51NdCQqigssbAQ3D9nA1Kh46gvicyExPz8nghMRKJWHd86ntyhdZKHZTQV7Bdvc7eDn5WLFQCeozRv533wyToxQM",
  "key10": "4CHdg1BqXo3aH1vRLCZg6ct4rcAQZUBFFxT4WhR61jywQx1EjL55QBfv6tLocxPW8gAYYh5JXEtzSJDdT8rHMh1L",
  "key11": "MjKxp9zixHHLDHBRmmnuFyVeFRuKKW7J14Puf59jMFLs2keSYbeJEwP8SSZwxHwiV3kiYDdgsQ3LpctZ18JyZ8o",
  "key12": "5Rq1u6iDPbXmGdxnj8gFpVFVn2ma6da6wBDFusWPLZ7LoZi7UovPAMZtqpKH85n9yJZxAhxnxJnGHSAfsGeBkypk",
  "key13": "2HdyrrG9hbLeQ7xGUiHF47mvZZq7ufHuNcMyK4SDN75GaKy1hRs8m9G3YGZuVvf1r9qVYmrjN8zm4DvAfk1rKFMX",
  "key14": "48CGT31voxg4NWUyAvVVxiqKHrbchYvajkNzLQtvJgUQWMYGSuDPeDDELCXmQ9Vr4ZMntTzEFYKFSqJLD38AWYWh",
  "key15": "2tL86kQEeXawNvbDczNFRGhBLBfN2eb5aabjrBsz4UcCVefrUwGiN34XDP9ysiP2G7e7TH9PeQwqJJdfGnAevtAW",
  "key16": "5ZJsPPaN32vpRXcNrPti76uWSaU6PMYpwK3HEB1PAYW6TtyKaVD1FHKaeQBf8Ard2AsgFTE7HFcLtPyQ2iDPDqxM",
  "key17": "SXbtjtV59gUHK4UF5m6Uo5LdBf87wJZHr9eneHRoDz7KGbQ8ASRXi4jsYassJgoVezGg74QfY4q3pF8R34JXn4K",
  "key18": "2YMj7MrVFrRVNUii2xwBEP2GmCVPDbJm9WY5LweNvcSSuU4U2zKGuijNUZdk2Kdxn55hDNNX3HmzD5JhqJrAe12F",
  "key19": "2W59Wc24ebvg4r63gQVihgMTYAB85aThu3ENQuYtBogJoRQ2wNcvNbZPMeif87RBBxiEF681gV5MMG1D3JQ9atZc",
  "key20": "4MXxu8rLRevYEv4Fi4ThBTBo4zW91uJWbo19xMfsqpvteAe9UETe1EMV7Po9gCYEosrA98BpgpEmgsZ95ZPstFRt",
  "key21": "2rP1xrTGvEQRuEkaoSstDczQeUnaZEmV8AEk3SY5FNCxr4Ls5SGfjsqDwjbgarHQXnFUinHNeVogpcT8sFxJ7fch",
  "key22": "5Eg1Kt1kdwtpFqEWFvQQBmV2X91KnJXm2V78m3owoYEtqbm5fXf8XwCz1LxV2XLketd1UBtyihhAfU3LB7hSySwz",
  "key23": "565azfgWJerQuzARGJQDvr2V1iq5S5Hr8nioxfRJwBQfyoLnxPy2zE769hC2TrbTUazA8AvCULcM436znrpzmW21",
  "key24": "3w37aGFDL3ehDwGJtEQEynNJqp6HH4iYWWiYV5EayKXQUJQq2Mf8BiEsQSNbU2oert5CQKEUPFASCnLxwubb6jzY",
  "key25": "4CeUPAzQZq88CKTKaBaqohd1s8AvayEjcP7dhi6bMv5X11cy2rhgQQXm9j37XoXWFZo7zDE21DKdTcFJhbEdtHYP",
  "key26": "3THafqiJLxv6mWAnLmdUtRQXzzntdcjrqUrSQBQ81hnd5yAdzrvUsUjubqfBhHjpnmxVbkukNugRHmyjfLvpAny7",
  "key27": "4KmGGCo2k9n6LFA5yax49sCfU3Y3EgxTrxUrXxXt1jeG2Kx9BfSnanbmaGGDJmBjS3sGv1zwGjy9aotiSLC3vtYU",
  "key28": "5G5ghhsc2KsBSfYAFStq4Bfp4NRnbAikL3ywVXCqoCXkcBVYSAJXipiMELUxoRFXCbRFfDf7y81VcdKFXhBvxrrd",
  "key29": "3ifywanBZV8M4FnARJhWfz1p9W5arhFbJBb59suKnp5hSmzYQ22zqqEozAw6yE9PEYMfX3jbhRg3HsRk1djBjaGk",
  "key30": "3gyQDuAFg4X3XPheZEfL6CMBiKEqhYDWXJBTyrha2Ggp36w2XLbXZrcKKoemsAvxeNy5FgYHPG37pufuy9MiEYUG",
  "key31": "4kCQ6t1BpY31sKhbCVBfqEGaL65WjVsWE85dR23f2TzUX7uVNkfS23C6eMYrb7LQs2seECJDYqLXgn7CWXRVSBBY",
  "key32": "yt6f7kKev3MNe6KTv4WEpYNtWCMHgfcP7aurSPfXqGGnHfDfedBsve4LDDPGaDsyFryo4A31wGShZ6cfjW7kZQc",
  "key33": "4hbtNyCzPf2nKLDqsTj5Epd23E7rBi5CL8bEtFAzEmcHn9mqANPbjKV8WtjNZGWs2WevCtUQ1wmQb7TtSR5UXvV4",
  "key34": "251xMikNW1Frpb6oRdMXDC39Ui7x2dj44tL3oKoqmGMMfwdrKG8vj15NPt6cK1kcG7qG8FjjDf5dg1oz9Upo2JhH",
  "key35": "ruP8AugAYdGfwc2yiR9WZMpWsGiPnQKgjeHnkR2HURCJPdm6kr371fJwztpLJVPE5qLPpMbo8YdCbLuPh4NEjGU",
  "key36": "5uBo9ctbUzKSckJsdDRCReBWQCviJTqDLehQ2Damoq6fGyNgfvsdNVKPC45Xbyo1qdEJE6bAwodffQ1o2Wkny89i",
  "key37": "5HopYsDzGUYJbMnzHRoodS1cN6jSmPZjpy7AutBrhjYvd4tHRX2wwGQzpTtWgWRqAvAQACCrdepXFKVgPZUKaJ1J",
  "key38": "3noeSy9X967wKZt4zyuAxGymn9zEawSGjuEUQyaJf54yKA83k6mamTrbBcMG4XKWsxvLd5tUzRUcxGPdLSoLGq3s",
  "key39": "VEB1QUoPHcxCwSCM1hiq1dg5YgSHsVRZXx4nnPFMYwwFVBExpG2GCZC9Qi8rk7h3Zbj9PiCiPvgxkt1rFGwYzwg",
  "key40": "2njFwjgCQcpD3JAbnVE7JeSTEYe4jr6VBRdM8ZZTSoMxeWDJaR7bYs8kLDUpSsHrK14yzsJrySPV6BLGxshwt7QQ",
  "key41": "bXdHHttN9vB19fq2YdVymYJBBW4UNoUFVFdghSy4LmCoznV5RemVqZsbqFHYtiRoSbB5h8LCbvsXi5BJRJzywQB",
  "key42": "xjeaopE69T2NkTV1zDXUTrwofj4gK1zR5hdsqBMdvwUNtp1D6uf9SuHUB4F78LFrCVKReViPe7PBNfj8Rw4U8NH",
  "key43": "5TukLnCxC6kttSTVeTARnBrebEJU3bZBVGAcEhBfcsB9CGc5UfY5qHdCZFmuKrtuTfXzpEc9o2PfuVvmpY7pPmKf",
  "key44": "64deoZHUFQ3WkQT6g8PTwMxXucZ1q2vbrAw77xTnc6RECxyyuWVN6ZY7x5f46LEWg5zpfazVV4Wm9n5nzeptDpoU"
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
