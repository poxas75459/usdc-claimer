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
    "9vou3EFPYkd7jpFCyZnQBnhsDRuB9XMaPstn2XBneAZSMVRej3DPbBEHDM41U5yoozX6KXhzLPAdDrQHaPD6eap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFePJduYJ6zXGQUcyjSSTqLZaL3Qh1preths8QtmHnQEdWvAb5cxbQdHoKa5yhes7uK2NthqLkdjBk5vLSzbZQk",
  "key1": "4E4z4tvqh6v7UyDZmhizLC7pWuBTWQ5eeYN4qgas1odSzqA1rZh4HrPSnfg7ehRVgDcBXSuGWuPQi39pRG419RHx",
  "key2": "5PouQYDgMm8MUC5mjmbYqsgPzdoQft6PFjspbUEvsNzhHbYa7TrA3EyAWxTVdtnexMhwekvE2XCCiik1Hc6tTiPp",
  "key3": "5P539eNJ1knAsMwJDn5tRJsFma9tw1mpwrnY5Xm27asuoLGfJSQKk6r49TsieEUB86NTzcX1CZRMPbNVkur1JUoo",
  "key4": "3ynmCsXAJATWnTb6YcND1hoUrRdhg4FUKdFNu7dsdpkfq6MSb46BcSz7ashmtxyQEXGxiE4df2W1vfpNCAoGvWUS",
  "key5": "2wUWDBj7LiM2mCiNuqikQpjMvnPAB5JrwtapHMMzKaJYSg9XBAbvDVhxXnAsSD3vSrp5BiNzbkHrWUu3MmPDzo2B",
  "key6": "62cS5QGF5qGoSjrnB1rPCKj9ocWh7i6CNnidnPnJmsbLMpvitGUxGoF3BoQMYd6H8BkdDbkaU5DpHWL42PEkpB2f",
  "key7": "B8EdHKu3Jutj1wKfoPqEDGLHwrsiAvcKK3vHWadCtHvNq4HqH1bRwFkC3Bmxm5c7sg3PNL9cMNUU9zBmhY482UE",
  "key8": "32eqwJss7eW2J1fxWUtRLcmxfFmkiaYii4DJ7sWyZeWd2rwyjFDAqtDoaMsFuG2gFPAAbLbhePPzccfdc5NGbRjY",
  "key9": "4bL8dkZj5FCaJezuoRMvfkPsoHfD9pPMLmn2MkkCAJ2VuvnFfiNP1js7k67Rq7nNNEUmvke8HvH3FR882M3yPYC5",
  "key10": "3WBR7N557KzokgoZqYXmivA95Gxaubz4s66q6M6AZvRDEBoiEtNfQvtQrQnFLe4YGE6b9MvaEXCJ2ZG2hhfTnUbk",
  "key11": "4hgKty1JTKQNWv3JwQP1z4APtfAYYTVkNrmazWRP6HoWEJgM1Ph5aZjeN1jXWCVJ3gmB6dinYnfNm4qrupNgtbdL",
  "key12": "3gTAjFfnV6ZXCZYaZduvzu17Lqcc84UXWwAjbzoDDjPSS2tRfN3Vbqmr27HQzw6QWqv5J92VqBcfnziAwxvJbgLF",
  "key13": "3PwNRZ61bqVqVDDGwdTkyF29HDiPBRWSC7HmcsHisjbJPPs3Af5XXvcnNwni1QvmEKctcgGLHN474K7Rfh2ZETTr",
  "key14": "3RHdZtxJsfDGdbeHq6qtFW32UPjiAJHpzif4snuSffDccAGLatoZCcVP3kMMYaRyYrmH3vKWJFK6ztQR2Vom2FFb",
  "key15": "37RbVmHEjZMuGLcn7E4H3WLvUPmewdUG9PQc4DrmVrPLA8vsH17P4eHakFeg3MQvRfPBpynJBvzJ5nTsW3twGb1J",
  "key16": "2cfU2wbbRa6WdXJDbeQNyCBA5bzLun1LTAAE6e8eb17ypB4d7QacVD7KgRcrNRd9FYWRYzjXsicAfj6mYMgUWDcd",
  "key17": "5SrAYojh5fC5jTt1GrghWnY84bzunPKtDaHU5voWDgmf3H4K2eeriMDSL3nxsSTM5GTnsQ6PGfkW3KeBSAzHP7gK",
  "key18": "2ieDR8oXkub6CgkcbZcu9k8MGQ3TkL1J85BqDVvWwvLHgWgkGr7cqah2nP1jFboXeceTi7La4iQaFSQ5o8tTagtx",
  "key19": "3FjCjCrsUQtqDEmLswgjKS4UedqkSW1D4tjMVeGzzGu68GksnJwjR3PXZTCyK68935nSDK9gyMywWo8CkZf1Szto",
  "key20": "3MT86gXoymmMdb8QoHwvkbD9j6BcPBuAkP2dHUCxQyBUdLW2Qws9oV39SmLbb8Jobg6goHvZs5VYHK77Lzia44vU",
  "key21": "MGSrzRKBwVicaChGdDy4B3fB2C5gQTQKM7j4FZG9pxfgQrWJb4gqgMMWhXA7fgyQ5qKS6KaYwMJ58h99yTfgzGd",
  "key22": "GNEnkfz59TsBa4Y8FeZwikFVWYC76m6gBAdqXZ5rQSSfZ8Uxtd17XhPgrwFfEU1Xy5QmasWguy75JaY7F8WoZp7",
  "key23": "4vbEYmip5uS5qc5uiyAkf22BE6KaypK16s6jePMgztU28TaSG1fqsueP5iiWqrH6z7VyhiEj57yFoHe5j1Cb2WgX",
  "key24": "v3YE24eZT9MPFy8DoumvxgneC4Tk3yn5btf5rCJCJtoqzcTe1w8PdQLUPshaiYYiZweG3am4cBgBfV8nyXgwNzN",
  "key25": "4mQPFLVbuLcT4f89zff3RBhAgokHqddTjuJW9pnFhek8QubVR93JxaqmmPWPCv8BensdtBsG3Xspoo3B5JRuRg6u",
  "key26": "31W6GgEsWFMbUjt5gqbVMm8gheeZsWpHC5JTtksBTXgiytAkg1cyMEXzFfU8hCfxFeh4o1v7JrNyjtKJT6vLtC2h",
  "key27": "2YyX6BZjEAhL6ocjafaR2YGovTZ48qocxbbFeRmeNwekau7ikhkqboC1wah5Z7UhqsFLxhit1KJqmRZe7yBHgQWS",
  "key28": "5nRa43sYV27pWs1wHEtAK7cnPc9HT9ELMCwUYgAHJmmgBRLz1qDY5Uo5A96kwS4evLigiF8VVH3UypxE56r55dWA",
  "key29": "kX3avNxUpbU5oVFXqh1WbPVaqoVodP6BqsA7Rd7eXJPLR5t6ZYKebgyStp2XMhhj16Jbq9NTJsoJji7rk1tY1YJ",
  "key30": "4ivhbUWpKKU5ibUhN8da5bK7CNCtRkS3DNZXHVvDPxXpfnQNyk5zWgjUjTazMvbcj1vLucCZeTn4tGN9fpqdj7yo",
  "key31": "33VtMt7feSGwEC22qjNqJ27CgB1a1LshHj9FKB7b1xm6sXS8qVkPh2KgYBoReNU9Mc9ntnzueLysnnaie4uyf5RP",
  "key32": "6EPGhrv586J6BzU5isbco4FiJQAtFJmo9ux4RieAtcLsfiPMLmWrfeHt65b57iuF2eyR3PXkpgkj45bquRrK1Qh",
  "key33": "2ZvkfFaPRnVyEi4WEXzKV3kQbMEStVBiS7MuRqLTZCj5yhtHYpuCMdnuYeT2JKH3TUjApZSpddbXRtw6tPwSnTXP",
  "key34": "3UFmQZJ2PecBKWhX7S1BQbZG1QpU7nE2pBF4kwiDy3V8V5zzs9AXy16fzbekgjwGvJpWG2LhmqkVE8B8sMUPv14N",
  "key35": "2FZcYyUocxvP2dFKkvsXTnws2gWcUDSfzdVwGgABTnR98C3oqsVvVHSsXjKEKCRGfypiFpitJwooiVmm9eWNraqb",
  "key36": "5xXbCWXXTP2XtcQJhQRt9hzzhX45yCqNm7qCquqx6qRTbpmuqWf83ewem9sbeauvQfCAH2CNf3Qvdm29S51GDqdv",
  "key37": "sjCLoinY7dSb6fdQzBNKKDAknzaY8QGZHWsHq8uDvZHfeU2SZb33iPDw9acsWaQ3VsPKoSuzQeABMU2KcfC1oHu"
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
