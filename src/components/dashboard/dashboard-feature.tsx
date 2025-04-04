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
    "WWD9CjATjJqEeFZ33c15mxvMh8yCVC697iwjhXg4TFJQrjTmJsY5NASGPheoyPAAi7R6h4v7mWDwfQRcct5zPb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXDKCEFka3U6CKYKSDuegdXZYgiqS4pAnQCNgD5QM8G1hnGp7rXDZYo9phNwwDXiMvM6GrsUtPAdU74wgTZfjw5",
  "key1": "3mVLZE21jqwrNaBb6VyGJuZ2PGPVEzk1kBjU3FLNjm1VKobvqwvM5YDmoBWcHPsQzxmrQtNCPqCt3ZrmXQNhu6S3",
  "key2": "35B9sGjAQdpbPZ4unpSDmhdieYsEFgtweRk1uwe1NQSuVMCd5SzGgRqBnWTiEGa4v6qF2ztKnYWZi4KSyApZBJ6B",
  "key3": "4QfxAfTQwr5piaPRn4QQxPCihYM9CE121S7i12QieuTamQ1rZCE1YA6N9QpKTBeUG6uqpTaifr86id2bnwKhfNe3",
  "key4": "93tKgEn6XvLKtUjTwX4MUALp68boHuVucs1xhhqFkkZbvF2XZamam8Fwdx7MQysUvxkBnUpsNX75qpy3DVyMEih",
  "key5": "3ERRRmQaJBW1yCrA9Ehf7Ye2TgHw1fnxPNSMXLRTr1PVZGGnpFoQpKy91XA5pFDkgpCj1Rf6cGoyWA1EW2r81Nve",
  "key6": "2eQQm9Sdm9UhfuVvXani7bDKXAwM1fChpeWq4T4uthiXY4DXCnhc3uyUm5nVaZoUJXGQcrqaFVJmogku5rxfLEvJ",
  "key7": "554eMCJ26x2qMN8ifwcDbtpJ2wPNYyrNQuGGhC2MoJNEvPGxwuuMjZoiBPZWWvdEMQowvDFdfdLAEzBbYLNhZy7f",
  "key8": "65888uFxVdsyMTmJUtvqsy4owLcy4aiiYExBevoZPPSVcgHAjgruEpAbaX5Rg6c1XBwK5W15nJZAsxRcAV4AbQtH",
  "key9": "NheB7RtZAfttH17NMJNaWERMkrqViSjRnvfzts3Ze1CJdWZsS21gTChq6GgJPw6jPHE2dniLy85PcYWA5UfyDFE",
  "key10": "4s6pC6aCjStH2r2zUtvVmPb2MUJd1KM439HsJfc9ys4gWfnXyg6mF14vzfrjtCerHapDBmEE6x7AEKiYz9iRx6ch",
  "key11": "2YHmNqvwpEwFcVNyBEZw8GHX7uKCP8WuF9qmoAkJCe7A4C692rpVBhR4Zsnf6WBQC4dY1jLVrYG3pbS4KeoP3kH2",
  "key12": "3fG3inLr67PivBkNfPNFDNfjpA1Y6hmAQ8rbXuoNEmW1VHzXUP41sxVWgnJermzzhXvRrnWZXkZaGmiufo6HAbM6",
  "key13": "2sr5RWqiH2wi88TGxoChgGfB6pWAA1jG2PQscidYT29xUoaUuNhFkuGWGCEkTiRGYzDW6f7CPUyH3G7bWC1b2mFo",
  "key14": "3kCGwebF746gNXS8q6Q2ygP9cXjHegYce1fWVmDtzzC8zQ5TnHn9P1wc1aG843h63PEwuyi2heLPyQ9GyFRurcBE",
  "key15": "3N7DaZaDJZXR3TUBZpPTCtwMaDLtH9NewqQq441Mek71QQcyJtRR48awzkpwYTs2VvrQppBQ9WUPx2zdHHL8c6y5",
  "key16": "43UEuNvyneaKDEi1uXhf5yPBTpGcE54Hq5bSFYdirrHqN2JVNYa2xMW1Ko51uLw7CGjbLgUp9m1V5Ck1AktLP6Df",
  "key17": "5H2knS7gEQL3oic4YVzeRnypPE66KQtFnhuPjeDK3YCPYATapZrDEbuZvbFg3MVU7QpeookXvUFDv9Gr9V8AbBuv",
  "key18": "4D5qkZbjLpBzy1bpPQapcbTBoPzcLeHEvv1i4ABTPmoqSWZdtDTWEmNjYJAXeatUimjzBuip3tNBqzi7KFdribaD",
  "key19": "2jXuNkr7TZEgQtrTyooUAjgPgD4bEbep9BHpkCSJF9HQaecjyKyJciYTjhbbmSPoLbhgoLt4PhnJR2YnAvgBSdN9",
  "key20": "5qMZod73fGNWCP6ZT7dWxTUmDZsaXXM6CgAzD9V51vzCrqWVPjc1xJTdVYJTrSrDQjmr96Ny5TqEXnVzTkrJTVG6",
  "key21": "3qJZzFgVxq2nf2HaiV4xn8cdtuwyUCtSLXu6LtWPwmiAK1vVvWw6Yv2Yq4s4H3KnBDEomRV6gyCFKRdxUmoDC7ke",
  "key22": "3D1kKVXKvgZTPWqtpscroJrqcfrunHZVD25uW9yTUJxPor1jScFZVMQFU4GG7iBi17toEVN1pC5aJpBriSM3ks8U",
  "key23": "EPxm8nfyHC5cT3Y4rkmgGimTN9BaPsB4UzyDr51rUg6Xnx24qRogdhutWiXaSdbb1HxnztNtUtKHM8PAnt7WZsi",
  "key24": "spJXXoHypuzQNwTtCfHNdzTi834oLpdCbVw2UyRgSqoTjDPeGoYvukN39X6vgjcZeeKZV2uLJeSz2Kj1dJrLo16",
  "key25": "5dezo3pAjoijw41J5CwJ7a7hqraw2pPaoQZWdsjmVu8ogw7zLUxHngXpf1kjgn8Zg4ALLAwAabCwvDfE1hzrob6Q",
  "key26": "4xpLbwtmsXL5JwfSeEcpXotb6KFYVm8cck33GLwXHSghxv92vBvSns1wXQ5fVNbFciURbUUyyhNd9Dt49KP612yA",
  "key27": "2x31ha8KmKrQEP3T7w4DMKnDP1Du194xvSP5HB2wz1xRMbuyh1W7UTFHJhf6zG6qjGMevUAqGasQDiwrscjpow7f",
  "key28": "5rM3BGHN75HVdD4qsfr7vuPczTtD6RCeUm7t3pos4gZ1rohYjuHCHqVUoBwSNqjS7sko35f5Z3zSoomUaLuuhnCe",
  "key29": "a2PmSrCDTmEb7o1eErgsTgZDPrCPZtZ4n4XCCHb87iwGFPmR7dj2qk65qEt9vXX4nNFJXDdLDV7dDBXeqJzbe9f",
  "key30": "3b1DpFECFAdP17KJ4fDVTbhasEXytannxJ5qGChEQxydAAv5FEGXqMNTKXca4JZArDG7kGEkgeH3GtUFW3L98mri",
  "key31": "4gaXVoswC5UxGewdpFAgw1tFg6BFw8hp9ZKE3CKvY1LJYq5ed9TVAsCWgja283iWQAFogvddFV8mg3gyrDWVtqBg",
  "key32": "BbUUYJycQ15DN3KtWBSwiCCoeXmevL3TpE479vdiqeiBE8airQ4KKWuJErdkrZV4MwN5DAmHufwgA37tkdWJ7r3",
  "key33": "5kzYaW685cKTZe6xvuUCPKhQsbQAfVu9YL9rWN9aNa1rmx5t3WfpRaGCWSd9vqk6HoeTmt92Cy7yxw7ChmwKCDk2",
  "key34": "K7vW5sWrWfYpMPT77tw9zfJMaimYsuh83QzXUwEHjRACvYCDeQ4hQW3KRe8GMUkb71MHfhrDdZk5wZZEvYZZHQa",
  "key35": "4TxqNBArXCUHTXaYxmLT8WuFru6hAfFjwQwTzCo378sv5mMfeTjbChKThqRR52Bqdz9zBk2MTfFCUu3hF4GUBnCb",
  "key36": "47zAGcwu6u2EQin6M3ezhMa53WX4eFQqEE7USbG25y4q4EV3bg6HT9cxMMcfQDPTot6o81AWALXVjNsdSStY3W67",
  "key37": "2nELdQCu29feyYfTZtNHXNzDEZBwgDmcTzUAbYR8G5whXUacsbXM6zcTAHt1yK2nLdZU628YPreM98pzpd79Hc2c",
  "key38": "3Vz7eFsHbCTVGyjsTKAVM9ibirfvYrjkyHsjEt1WmZmZtpM4WYfARjcJ3n1hmWa944nhMimah4H3JYW2UThitM4X"
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
