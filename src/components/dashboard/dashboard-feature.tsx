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
    "51gV93FQGUgodQ1baMgbpDJDMeTzn8ywxs63EeA54uexhJyhUsRLLanKkGEc25YUcz8PfEDfztz4sUejzHRkfRJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwihfZ8rKd7suda5V3nLeT4X8UMSYs5tZoWzuQ4JZK4dyzaMz2mGGsATMiMst1RMLVz6ozZ7vFKZEWvZMcFR92s",
  "key1": "2f2aEEtVMsSGotCkhv8B4j4dXAf3hPepEMuovgCxA7pgBFqBoJXow2KRWNXDsk5PDUHHZ52LSbWDuvDkfTZcuq7i",
  "key2": "5QQe1xCZHjYc5qNntryZPMdHsb6bEoKNbhmsnygkhWyU6B52BxafZA1cmbkkP9VsHzoPiMwJw8Muo8i2NyxzkmjH",
  "key3": "4BpTeKeshhtxkKm6HLVuUGrqwVxDVRh8RHuBM6qN42rbPxr3sBzWUkNHXDFwmnY8Zp8vhxf4CuNwz5RbyyqFNdng",
  "key4": "5C3xL7ZnPh1nysX2BHwsPvpbwaGWVEnAbbVnGKFgmkJ16XJ1syhsqMSvo2JNmLNX2gm76APNRZcoTRwjeWmYWKSh",
  "key5": "W9yD1ZyzBHQo5Y2WX48Y86GAWU61AN8gBy7BEC98WZAKxSYi9LeFkpzumP54YU5GFRUtkR8LxH2wSYN14CqBgM1",
  "key6": "5JxFVWR63LmSoJ1Ly5rqSEMSVL68RovknX1ZmmBugp3TuE1fXPwmtryLvzRmgDhX69W2UqXvM27ieb2r2k3MmKgz",
  "key7": "WSdisDmKWNr7DSNSC6bccRbFzuXGVs2XRfEiPNtMme6BjYtAGDrhQoeFVpFmoBXqPKpMKSHc6jP2uZnwnHVsxYD",
  "key8": "4qNQF134WRmFsx5xMTh5ytpCh1KKgmChkXbLCCWpnzV3LwsVUjPEKkEULEybk1RQsP52mNCtUzU1arPPmnJxVkdA",
  "key9": "28Aj2LuMtk3Dmx8DCB4uHpVEoTjQq2G7ps4TkgeEC6jMfDbf9bgL6uTS4yW7VEemGDEHhQqZB3tDvQUToXZ7cWrs",
  "key10": "3TSqnUPtrdMh9hCcYm7Gp2BA3qM3og2VwopvA8U4RM9eRiQR6TSfLJWdEuYSDH9Dk65ZGAa2uovPuwQEmeb9fYxC",
  "key11": "3Kg2sqCHsE7Z7LRHEqZ8gDaHw9NqfSGQMq4WYSD7gpQAjtg2xfPNupjJHYjQDmDszMEAS9HP5CYFM3tte38wMipd",
  "key12": "5gQXMUkGpostzquCbnR4F2mT75xSwdCUTKCPNEzmzchzvGHVmN6C72gF6S88dMb2QwnWztZpDx1F1F4PNtv5jXCd",
  "key13": "xS2C5bQQpTLnN6jwk5JvrF1WYAANDk1wkuAMS8oHYQZPfosbC8GAM2LT6vA3iffJ5LSb5zQ6pc1KH8LZsv5Mn4H",
  "key14": "4TLiBcWK97D9NehF4kpX3m4VcfgD3DgsJywJ9y6gpZ8vRjnjdDdgdPLHGzevEAuw8zQDDBJa3FdCBvX1iqzBJTbo",
  "key15": "2neaZqQPXcbPjURfgK3B23KAdoSj5XVUSbZzRW4QSeZLuRNvky9HsH51PanxCmJ2ZAot48aHsW1XwnYUngMEgmhS",
  "key16": "2xAXg8XWGdxsmyNW9oZaVnjxtVe8hgfEGvnwjozC1fs2L83BKK98QguYBkScKzs3H8nENAnrpEXNApXm2qNphfGz",
  "key17": "48vYctQsT1brmzs3Li3EEjRdkD9XhrJcNNDqDJovQwwAUkb5gsy63hnaYg59Lt4fJh57W3a1yujkeBoAt345EUd2",
  "key18": "3oPcdQVxNGRxqC8wTspc3waY4ZJjXUS1CisHUYUiamJZ1YtRKpPXse7VBP25YM8oWkLPziNi68sXy6HTw3wF92hQ",
  "key19": "qrY5b548mp6rqSbB4EEcSa5hbDYFDyHHLZdwc4QbaaV9YowSbAZxDxmEdyxji1PZHNd4zvXchdGAu3SPXQ4kBXi",
  "key20": "4RMKTaaCYGoXRFXC19kvtApP2KjCgpjP1VHDzFbMyQWzUcdgfthBJ4tS99T8neFztb7spuAc6nwdiJ3ST6crQdYz",
  "key21": "5o4m6eoh5mF97tDqY8rcGa4q5sY86pFDmWDanjjfvyLsnXgzgbUHSz4zwTSLLdYuUqEtRupTDrTpsBCVpMzm3fTF",
  "key22": "5CLQnwYSnEbS2fksZNVNBqvNCziRWiQyzJsXwMxUcgXWk84jLEPEc1FoJGbpGNKZ68gznbjJgqdvt2EXf3J9JZ8W",
  "key23": "2m1TMdg8CaQjeor8FFCyFkV7HbZXHzfTTdisEZi8LsmsJJk8fid4oeU9MCoB9CHBFanKDCSp86doXLnynUkeos6p",
  "key24": "4UTKHbWqU1bKQ2NXCZoZEwHY4UcZFq3mtfjUFEVyszdiA3EjMF58krfnUzv6rFh9E6EaZTDAeaugAVF2Wyvtdy64",
  "key25": "MRZCCFghG73mZG6qeHYLkrnKuQvfgLpvN7s5YMCeTeVYzCrw74JYUAmk51C9D1TRpp73tghq1AC6d9zrMHPZ9tf",
  "key26": "4BN2jGbeUqio9Q3ZYEMBA4hpSHbsVeW32hLHuJ8vPCVAyYaj5EtobMZFkT7ttdsbtW3WH57656neb7u9Cs4DwLz9",
  "key27": "2WctL5aEorCTPidtEE7SynkqSCYYzjJjko3v3g2sgS2ARKM4bYiAemtxdCgW1xb5x8doxiX1qX1Nih7LEpX1h5se",
  "key28": "2GtNhyibiQdE2gAFYg9Qsjgc2TBMmk6wobNcRzKXqV1bbHh5ik8D7YuDN6mf2mNoz8UTpkeTuwAEn9tkSSjpYinq",
  "key29": "3XXr4Q3mwgyNxTi4RTKC4tATTfw7V8RtpxF6cAGidjh9TchXsFNqsTCGy1i2asHwRQQdzBbgHuzpQ19Y3PJBdYbQ",
  "key30": "2HVvKjcjZ9NejjeAt9qeM8JDauQvdGZUSjD1Tix7p4xJTHAmGkCCJxkshfVxtoyZR9GNPniHeRYu5uNG5Cif3KgC",
  "key31": "5HrxFarSxBcag3SUn6eTm3ugvCUj4GZHup6fxFyHGKdTfLXEqofy4DfoQZ2TVArR4NzDaJBnjDru655s28z742xb",
  "key32": "tUebcnUXrW9dUUpYkCD41Y6RWo8qsEwWXhhLMKGGMaQwBkFRELU2K5YdCUwcEQ7EaV6BTeupW3xbJX1wsVVnKhD",
  "key33": "3P75NDMqwjG11BzM11FLQqNhTyvPoKFGu1mYfTdP7vdgdEPTv6f2gpKD1cYEihEjq3MSQwKCPR8TmSs8t9qvHcUw",
  "key34": "53BaSR4GotkDDojDkdr5kWGDhboeYJ5JHWsAtYpDeW2hHqEGPis92EscEoURzcnj1NAYvwKxcGTcAwcYg3rJBAsM",
  "key35": "2pWz8a9kkoLmvAQMzectiGaY9mqMwRSBuqWJ3QHGxKKdcj9wc2YtwmVGdJarG9ovz7PQesj3DzUZB8NCqFdoMr4Q",
  "key36": "JpgF5kaQiNk1rppzbvYNhrLrFdGykwoce3ah66SEFGW4iSHFna1SgQAWHHKzwFEKEjxdL3dLidNq44RGWADvmh6",
  "key37": "FSxFg3f5KRZpeoSRF3MyTzTyDh97TdaZ7AMqYfExHBWi7LS4P9w95dp8fdPat4xQM6zoQYMxRDxH8bEhXFKVT4f",
  "key38": "5ofbU32gsim3BD1QgU11yva3JEZ5p5r9XcdFJHtBbYDVLSUwuYusoLaKGTpXSakjPDrMK5GERMQAc1BKdqFNZT6u",
  "key39": "23P7kWUbA4SAWdxpTqFUzCDqbWsUeFQAqmyfGYBwhEF2xPfEWpNrhod9JSnZq5omqD6ZEHxgiUzhH8GS6vdfcR91"
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
