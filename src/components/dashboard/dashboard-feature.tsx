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
    "3SkGjWrcFwK485WQKdtd2Z2TpTKnFNkhW1Q9tCmpnmFEA421dJvcgujhEHCVd19boVvRDU1gUFVtbL28RrJzNMkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mywxuyyC5dA4ntL6fPvsRvUm67kUfYtNL2HHPpfDi4LqEtgf9eufS5xCJNGG3RmupsnGhoMD9dnkNNrf583mHHM",
  "key1": "thv1JVVybbC242sjA4CKh3in1Eg42e7YmiW73UgqGRLLWnvMQuhqZmtmsZJkZXgMjQNcCWkD6e9g9dYB3Smjnyo",
  "key2": "3QsYa9KbjBXewoKJgWGqcojqvR9pWDX93CZexzH96tHncdh6bwm8LoPXCWuRZHbYY2EYVHsAjPsoFwE8rmrHWLgZ",
  "key3": "U4Eod2F7fwEPE2JB1XHbAyotTJzgnhDYzWjCvsmzWwptSMeUSheFBEypSMjocDMEjuLCHcbXGPzwb14N3oBR1bT",
  "key4": "5T283gSVJRHFyK4HQj81s29zEyYChXNZQewksJqZCSuzFH4KA5ccm4VhM2X2P2rmJT1nWc7N2gHf7h6N6bZRZuX8",
  "key5": "47mBgo58oJBCDqwbyAuzXGwBAkPFhuS24UU8dxoFeCFsXoKTnSWcbXbXUsNSzbxgvQnPogSQQ22bofN8fZZmJYdg",
  "key6": "34fiUBN8bbjawvJHt1sTarq4Tv5NXNVewgsdQuKUqiQFdBxtc8mrqVsWSexJR5xpwvdxKkTwQogut576Mn2eAs57",
  "key7": "23w8cM9D7o1ds2t7kDrfEMCKzyPuHrpMcd5MxG1uwhu9yWNMVmDXbwpp63cYtQVPks2GmCCmaAfwWgDFfw2vUinC",
  "key8": "4NYZhvm7X3EzvpFzJEHt9hwb6EeKth1gHCmKVSqzwi85JN61EwuW6veNi8WGvf7PW3C39BbyT2U6x3Ta7sqsDAFH",
  "key9": "4k7HFPgXQjAAQ2W552GdhXKVBY75EeRk72CvBSdU2qpZp4nQA8VUivggrD1adskM5VRh7Z3pdJBPHmNDNnRsfvmQ",
  "key10": "kwBDfW7Yb2qUn6TGpCHfHipvNRgHxhjgNWV7ZaT2Qtae1tCDnFXpHU2K25Fg9JDXDPGQ5BtUDEV6MPx6GorR2oK",
  "key11": "3Tq7FJ8KCSWuYAhxAx2x5jsndySQZofwuMtt7ouYPj1u76GW5A95tpj2YCev5mJrjHFG8GnxAhGZtewn6RiKbTS9",
  "key12": "LYZD5SQDgmf9ytmprjwYZ2muwPXf3MbEcoh7C38gzQePbuNfbPGG61aeeBzZTEhkAc4ss6ftjYpzx6MmZxnGHYd",
  "key13": "2uaWHuDd4jG3C8itqvSyjXNJ6nJNiDeEmumTpwGShaB4rJmojDYpjM48vwsLj6Pbnk513xubund6bioWGdcRFnk8",
  "key14": "5RiPkUfdTabspsdNMHWDpmbgZaFJv71uBzGJ7uwVfz9MLCCFJD9MU1AReaP3WAPqrZGvUF55j2RzpLgRny3dFp5G",
  "key15": "L6ym3ojcfJ7dNk3DTdhodsgY6xYTqRMxGsejaXhviVSnMRCoM1PPpQzzpZ6xrQnQFYMystGYpDYN3yUq3dAgEPR",
  "key16": "3x8QqJcg7PMarjTXkC4mrH8aMBwamFucPocwz2SmDsAxPcP8HZnysQxzpusW7yV8oGJS8ZWyy3RJKY7L4UstyZ9Z",
  "key17": "33W9jNWwWJBhAkYBwDBi1mY1D1yiNgDkBK7mm7NeLD42wpbf2Hy4ju6T2h556eGsRRrGJcxRumQrqfuTrFVNtMPR",
  "key18": "5HLsEavyR43sUaXDiCnVBWzS4mu3g5K4cuaHiYPLts5o4fzxzXMTcPVh9xVNcERanqE1fMmE5dC5p1t59oK1y8rQ",
  "key19": "28z7HoacfaAFKTn6RYpUF2TAKG2UznixyKdzGz9K3r5SB5Q1NXG3ttksuviXtkLcCFY6yobqrszoHtVCZr75X3rU",
  "key20": "2vCz3U1qfWCZBxYUZFkeWnag7m9hgzVsHbM94mPnCLzuGzcR3LPKqVP73MpC4LiUmdCpMmWjFppWFdwVxK7PxaR9",
  "key21": "4NUHdWeztEg5B2beJX1redNtsd9VTZ2ojvaMc7z4U4xPruBPNifBxRmDXsNbfSbv96CERX5rQ7aUwXkgg82YwUG8",
  "key22": "2pppWv9TV3DoRarQmHQ5nX7djPWaf3SzR72ZZAEaaqkzy86ejvaLVrBmh9HdJbGwfYBdsUFPrBbqdvoERBqbZDNu",
  "key23": "4TCQJi4Ae24dk2P5UiEJpVheQ8A42ua3huMvoqJremvoYYW3kveQKufxH8tpFf69oPscGkkD5UpWWdxpPpGuTPJ2",
  "key24": "5DyuzStVJhz5Ajkj816pnzwNiL93Bv5unP6QZ91QNZUgJsTzAqU3dvo2o77PtSzeE2EfSR2DKWvrnqKhsCGDnG4T",
  "key25": "3Qr8e87ZTHpyhb2mfmpRwapXvTjt4hKueQcxSrmGpYmCx7eRFXEWVszbXAM5XbqBkhbMarKPnHNifZv8fuW7Lo7Y",
  "key26": "2sTuTgHReKZAu9qkYHBp837uuAWTDxQXkbRaX3wUuhF2rhgriDaUrPgFovcX2DAjoYZJycPZHkp7CKdECGWXGeuo",
  "key27": "54Wmp8WLQCrvWRtu4aKhFU7robiGj3eBPjUQpgtgVxf7E7ehnvP181FgsxmDpMNqvyRfuPDBAEP1RmsEH3UjaKc7",
  "key28": "4QZaU3QiY4FYra9YwUCzRefUifGnFeQh7V76xAxLYHYgZnodsyNjwpLyTWd25GBs2juQqH5WSKJZWbnKBPx7TLe6",
  "key29": "4zWt6heJXmQhCoVsbJ5afzLRLsT3mY5KBMxbNfAJ8J5HASXKNmZZmh3xRkamQvwn5wW86s7Mmx5U2Z2B9puK5k17",
  "key30": "vsjy8VoFh2dUvF4nw8ci89N369RD6fFfb86nnKJ4EumKa5MtBnhkpR7rwigfo5aqe3QqHXuaas2PngUDMxCqMMa",
  "key31": "u3zXdSS6iEFw3aV12cYoXHEu2KPVz1dnrg5mx4jgbX68BpuZ9RdfeD6Cuec5SNoSk3goD7D6dtPdUiYVGWuTUDF",
  "key32": "2DYbmkD12XGYXVH7BtvppyE8YCjLi4nuX4QEaoLjJKf5dJdhWdHPDa91fA4XQaEtJU9gtR1fNH7JS39TvdasMX8M",
  "key33": "vkeTPntFJy4c66XKk22fDpiRjw4gmaDNzGr9NhvVEZvyFw2NBRAw7aqPRfyzo9QcpRhsoJciPjwEWiqkwGj1HGt",
  "key34": "9qXpxbg62W3i8dHSeub95j2BQyHuTYECNZsJ7dgXmwLJ5jGsY7nNZr24jjf5UwKAYcWfU9CFGbmfeGXKcmM1ARW",
  "key35": "38dEYEVybZvXgL4ngVkEG2op6EnhruDVyFDBTvBKSxqT4oRk4coJZsP8iVpfNKDE2RWsRNVqXmA5cKxAJ2tMgUUr",
  "key36": "u8TLS9NNScJmagSKVty6n3fWoLBqZYRGELyeBjrGMGonzj2Jmrn5Z8LHpBVTbJG7gyN19z56uCJc5qzbDLZGPp3"
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
