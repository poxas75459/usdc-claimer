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
    "23j2vsCACXPc3rggBQPDNttJwh9rfTceesLt7ZEmimVrHFmpj8TnGLAtjV1dnhFQU3LPALpJxrn4buMcizjgCtWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsuhsoT7rrHmz8xJKAzWMmUTcYaHPJaji4mnNE56nex1pJWoGZ53toZp4PQsm2HtTai7p4yKiRN4jkgLzwDBVgp",
  "key1": "5dTAW2amvvkmfoiFBcrA7Ybjeavs9orhGaDKwCKX2nKGu872h3Anc3WtrUpN9BSmqSrmNd1GXrFqzsDA2SjG2zZo",
  "key2": "3PHSJ8imrBR5S9AAuxpmghKqc4Zp7RdcizAbez9vmJra8YNhwgvpLQtFjbzyVpuBt7UJd7aWKgCp54Azy6CoEWBc",
  "key3": "5cb433bLGqZvQh1XGxkLcrzVCtKYDBS1gpd6VH2kfrQrkftCXy8qyuKGZ8wGn8qY8ZNWnxPdc32kW1R2b79vMVdU",
  "key4": "65tmtirPjEfpSXZRs3qmLpeSPo4sJqq45XYfqbSpKsy6Xq2yoKdBTEUtGXtKyizeyKRJLjy57LSk1CFBYS7ivS7A",
  "key5": "2HvfaExS1vozSDQ74rPJXVsbP8x5KpyigzqusEZ9WVEiPw3KgEvZ6pG7NHJpvd8vqu95TDiLy2riuoTVnmKDzMfV",
  "key6": "25Qoc2P8qdkj1WXE69UD3ukt3EmcevXwiZKXUmgv7KpqvPWQzFPeTskWDQGSDQseYcnpArrPH6PojTvNJkMYNM69",
  "key7": "27cxSKySJLh4b37XZUhUKVUgDvMAE47VW1UsBXTrupLhnxmitgC3fZoiP2Qdb2TRQsgaf85QdrcvVsNbKDQARHrF",
  "key8": "zN2Tf2jazFjWygnLx45X7SzZsY1mdANTfjyakzVeESKiaDs4Q76ZqUSKhh1PxyzeH5ykkvGBFQ7S2g6chspXF4k",
  "key9": "4pPGVvGLYYBbXh4Hi6Z8bLcvMXF2JjhKyBvLS51sHNuruCvg2iBcSiJo7dkGjFcFbabh2Ud8QaemrkigezTEeZct",
  "key10": "32KjRBxA9Ks7bPYpbowYFzU2tE7of8wWiW5EGRYJLvH9t98XeyuvKFQL3hcpPhvzF6BGmYZZB6ZtD6WZpWAMuqkF",
  "key11": "CkusYTb8cRhoYhhdFbgwPp1Vk517p2LvFnkcosY6XBYmPKg2JRxiKiaDaYVSBLTTYCLVAv9KHitFUcETFqyAD42",
  "key12": "4vMso3TTLf2aVjRtVnVmLbhA4CgFtdvuUX4PzVbjURLpTgFDtCmyxr18kMr1QBtHfoe4aupvbRQWvnK6azkL7V4F",
  "key13": "4JvpawRvba4XqSuEc6Yfxdg789Dmi3poBqC6tA8xnUFrmvqHMzm3ha56YmuBy9g8kQo6GEyEV3Ce3vm1xL9yFRiJ",
  "key14": "5sT5enVmdRhsyp43oQf9DyFWNPQR4kBK82j8sBqRyAYpmrcxNRLnaLsVY7GRVJvDdrHwPxT9CXGpfLzW5UE9sPRc",
  "key15": "2C3RXJad1qwD7p6HEUWVcRUjM7ZvpCyxvvSoS5KzsoeFcvpcvyMrbWSQTcZV2pji8SfncnPcNhVao1DECtMgQ5Yk",
  "key16": "fokrG8i5zAXrdGnRfA99yLFtycNvac4SXemCCZHV29bZZYkugCSWje7xQVzwiKphyJm8C6N2VKFZmzfAi4gqGti",
  "key17": "4fnvKFCNjJ4z8JKWWpxBZusd4QfSMk1fA8LmPy43Xw72AkYaNLeHmkCy4ZK2tLDoTb2BR3wR773ykF2rgD3tB8LU",
  "key18": "5DHG7rKxaAizMbExVhdL5agGcUgSAp8QhkRfXG6xkDoRT2L4jRE36Ut4KfpSh9MG3NwQ8AXDb3vH5a5JA12h4F4D",
  "key19": "66zdFUcduY6dUx2KMoMznKoThTeN46vqjL2Nyhp83LucyYv3tf2RMJPHAQfmEw97X2M35f2EeMq7JWSAzsZ1i6MY",
  "key20": "2biRMudYMy9qeDdNZuctKyefCvApMigjWB7hHCTmd3b9saFMi6VwiAH84LGWV1WQVGytdRAwYV5RWLCu8R49opNx",
  "key21": "g9xa91uBJm3FUjJuFEhpVdmYt98RZ3PtwKMEFTizQyiViREMeR7QgFVcFhzPhK3MXq6zdQRPHaRL75QsfgcNqj2",
  "key22": "9VttiaA3GUGrkrqAumDVFkAScRu6ZEwUPuPEEokV8CRQtffU6Vpt8473zY4rfP3u247MLJf66XzXqPoHFxPZdX1",
  "key23": "3SzMns3edEaWPKJNv3A31UD58geZRHe6tqKSKicA6uToYpaKJgCynFiqZLVXJmxhetLxcpmoWzS15MTXZz2tgRTA",
  "key24": "3QNNczN7fVTPN5MmQAjiDhNYySQGYPVBpgx2ioYdsUTMx4dSaoH4z1uDocZmhXCAfxHwhmsnex2RhzjLp2Utkr11",
  "key25": "5FVN4UdfdedynmrE65W1cbo18DjfPMHqMsi1B6wEBWqeUucCg2zb7M62xQmhxdmwvVopYyzrPP1KkA4dvvE35ufy",
  "key26": "4J31XiCnpiApMUcvRJxzLR7YML61kEVNMgrmoxbecxBvEDpEGNBn8UzS9tuSLfosFQNE3c5ZSrSctytnR7EerzoP",
  "key27": "5Cbu724bcQtLsBDWwcQr1w5cQtG1dm7rfxQMkPau8ARgysiDWUXo1TUwoRgvDFvhTpTbDU3hzipfKXSStvJu5Wyu",
  "key28": "34KbzTskAxKYAwmcsWT5fcsUuHw29VsV426gsQwr53JQwXpt1FnSSuq4jMnAZL3DsNiYz6TrtK8E77ttKHww6Gq4",
  "key29": "4HzE1M9k3VKiLVMRmQHvY4a1b1fBG5wd9gLtfvu5k4FC9n48cADKRrLpgQwjRWLqXRq2M7bL12CgjVe5UVFXERhw",
  "key30": "3pKtQeXowNtn7hgg7a89aDc3g9z1Yq6KV48P8J8SAzhX5iP1EM2xPQZ93BgSB8fXirmjRW6QfZxThyF9BcZmBZLi",
  "key31": "4h5VxQ5Go4NS9nCd3rDettscZ6KxScixjbGemMGc1Bcx7ohBP9435NEuiDciMEdjAbArRQfEoM7Z5rat1mXtSynL",
  "key32": "5ctXPMVnQ7RbCq4nmUe5PT7uFjEKwSgHfG3Nh42GqF6ivfC3ZXckY89Wcr6fSvvsZtV1RK25kvJ9VTGd9hDcxCLj",
  "key33": "Ht52x1PDihThdobRAKEveWeZY2eZXuV7X1kKuuvK5z4MF6fAProyyujTuE3NGWj1VhwiBqZKgduHzoMXqLkVyWq",
  "key34": "3Qd59MiUYexc6GpZ2AKauTLE1qdvoQ9R6NogRf4mR71eXNJaj8nzJHS7xAc2FYhPUnnjuNkyaDPShCXLj1VRZHt2",
  "key35": "4Q1atp3pdJLe4MtunmaBoADHiP47m1MV4xV98ejpQTcC1z5LQo1mZEraVAjGVjFEAvyy3ZstG3e2PzWxcVQykybj",
  "key36": "DPzJUuP846P2BzbdCSgX1bN5FMtrHbzAo4dgBnz32kVv2DWTKVgCNhwRVmrModRByAmSDZYXExQK6chWgX54HCc",
  "key37": "55a9aXffk8C3tNPT5M5XKp7eS5rmCgGPpCxYz5NifyZvDuj8hip5FHwHU7JxPHGeje2BjNG19cPgsKXovEkbrxaU",
  "key38": "RaEKoBmBTeFvHE8JkAU7g3TKEL3abzjFrPuXKbZjW9nHaZY8F3PcyGWLfgBdXrqsUfgrtg9LJWWTmMxJSozUjC3",
  "key39": "3a1mMmrpyEJVDxp9NF8HgXZrbrEHNKHYSTgfytdYDaaB4ksnyGT6VjR4w3qtisLo1YRe9XLNz89escXrZnkaBTZq",
  "key40": "2u5ueXkVWwB64x6HCcfw2dYQDyZw9Hwss663oBeDbiw1n27F7Y9bJJkwPJH22qdHiUWnxE72iWsFMufxbiFsFRTd",
  "key41": "5tgL3fZQkmysZX5ZtsGBNcLs1XqTTfZD69CAmikJZXpSsPJ2Bitr9vNossG3TYwPLZEz4G33TjBCtx2xwN5u5pCg",
  "key42": "2kXCAbh2VaphQdXHjVSXehjAk6EMXVCEz8Zb2pPF2owSnVGP5E5e5ARUgVjnfwcY3MEtGP76AcSSdtwxVbAVuP32",
  "key43": "4mshxDQfPRwYbDcC67gGSL1bj1BwiTtQJQKbtv2GwSDX6XhcD6GLvQhTgEruoRvx8jzHjvrxN1xpoAgUYHsp9tX",
  "key44": "5oWVcsFnEnbe2uDccpeD4qr7hjiMahUoZwEGJq9tcyfK4EF4cxc334GX4LN2npPxiueDvYSA3V2NFdBELgmwTit3"
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
