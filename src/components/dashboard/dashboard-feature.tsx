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
    "4MCCaXVXaoYZMnDDDgbnDo6DzSpLz7dASKGVQJm6HTN7tBWkKFNGAo6kUoSMaZ5KxNdLhgZL9TQjA2bqc22ibbzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SZNvMaW8qq8aJZkxbc41LieMdWKo9rjiE6HhFmxZ7NWViU2oX2JrEHEv2cL3v9pL4HYTR2AWeDWmS2i55tJichz",
  "key1": "2zaxB4qq9LWjZw1WUZmyKZtaTDSaWQuFLDgPEPsU1gyp2bcwMvRHCWska2ythZd83iLGL56VS8G1tGzHpDPaDm5y",
  "key2": "3JsYkQDjHHDgoYR9H85hMFcmLaYQbTnkznv8xMh5rKBTudEKn75qmPmDQagxxHLxqseGifCSzvAqckWMVSJbiPC6",
  "key3": "5X8MC9rh1CAWn1uCCUUdGW6uf8JZcoMu1FsFF9waiGcwq39cbo2MG8TPrSeGsjvz2ZPqXBMakzsxfN6uuc2RN5AG",
  "key4": "31GTdmxA7byQCcMEkrSruFGtzZQvqCALJ1tMe4jE58DoP3JUs8UodXTQuiC8M9nnYWyznWS5n9NmqnMnP6CRKG65",
  "key5": "5xCsj4cVVYHXCcf8XEbfuNPCBSHy3YY1BDDsUmQmHEnjBK1xkDE7iDNv1pqqs6Jo1BRkCxq4EsSY3i5LXXgVS4z9",
  "key6": "5Xw3nkB9aMxRwuymsdYv5KuMKps9LHB4efzaWz6vEy3L1tFxtopeikGLNWtBMja5EwpUTEtW8C8bSQFFvkSXTsPX",
  "key7": "3jH5hQQGnnCsmLA4Z6GutTm27n3f161hbzquCskq34KGX4BnepqNGAEQ3EMvpPfAT6zDSVyxdhx2JsPbT2cdZd8u",
  "key8": "jCqNA4PxRer77H1hPL2y8UMMkvUdrb4D4L7UScMdiDbFnEkbY6XCLqm16kniV3jUfb1ywvjjLh8AeDoN2pyQ3SC",
  "key9": "4fWh5CFCYos8JiwEgAQmEwKcyTvXgiSUXfHE3cSL9TrTN4zBHM6p8jUkohi7kgqe7GzMvDnJUS6Bsj53Punhqgro",
  "key10": "4zd4WsA2ZMcAvwS7yLQ3yBCSgoNrDB1Htim3qemMLJUWwumGXHzKSmjrVozVNXZDpCJYyxjbiH4CUpBWTovC6VYt",
  "key11": "3SY3Y1QsquAcH2uBgysnut6sfxCUkqNihEyy8baT92UnrDEepFUQrMzSU7M7qd1yeYYyh6WCR6SKVHp7DFgkS2jH",
  "key12": "4h7gVQsJqtr8qzzhDryXNZESaBbnDy2KPR3c5m3ZxvSnQYLRsGre69bTPN18jR2aSEpns1Zgamf7YJyoekwVVDy7",
  "key13": "DgxapsGFMebfRdo2fUSwz4bhRKsrHE1dVMDULCHFjCgkwvPshLC1dXj2GxdqjgXnFxEYtJ5Zp7CDE4amiDtdmuP",
  "key14": "37hrA6MKZUmZSQKwvunixhsYLdE1MNUTU1ENpoSTmAefy2E1sCVPn8fuG6ebgxbB3oCXf9NRWWvrp3XStGqk8YCw",
  "key15": "2c2qfGnrXsVCXVYGcciRkQ5yVEpWXYR3qDVAm2fiSJK748ouvoXqsMsMtKh17bgW54N1M5tHH2knonrmgWVcx7kK",
  "key16": "2ogFiNz3HfR1o3eGC2TowKZozUWgXtV4qR7e4EzJ732R3wosoZvzme8yBLuKMDTJAZ9AiWjdeekaMV4NZSKTcbjQ",
  "key17": "mNgS3igaZVJbQdpnetQwT14HQcL6iY6mUkLpumVegpNVX5a9ubnwhw6ujGsMbyrfd3wvqqvHDMYwJUVCR33FFP3",
  "key18": "CGYaZNutDpxfZkbvaoLyUTLWi9r1gcj4NVhGAnnBnfezUENkYB4LrScxrXam1PwaSfHn7NhWaW1mEFezcdjfxoy",
  "key19": "2hfXFu7rxXowWq9E1AMyJTJVot1SeLXL8ntzf4q6PBRbm14fL4wgg31E8jizWfc4aAwqmussgjXjeAAVE5oMapSn",
  "key20": "5prHSY4SyaTBtPTsXEhsfktwFYsZiYWeRRNV2GpugXznWNuDM5B67zpARHNkUnV93HTj87gP2bjLmNQ8632U3maV",
  "key21": "4ZF8iCw3KtLypLakBi9zPQjJAwdtJv9ANrKuMpj9kUouqPWgM43EZdGE5KkVZVDV8LNZfCLZdviRMcfRJfQVzZXN",
  "key22": "iZ4objxCHSU77DT6YhZ58gXZ6wTkJx1Vf8Zfw3hTUPCerg3bwwtnKHcnaGwfvEvZR1ken7qwzeaeH7qYRtd6qvb",
  "key23": "28MHXegiWojEvAN4shjv9697zF9izKYMQy2WXiqPv1Hm9GQB8EeCjhmx3UGFw6PqjotHEK3rY1vamTbfYaMXSXJn",
  "key24": "2EoW4iJZs6aPbAf88GCBjXwex97vJo6c9YWTbnQ41NZXWSFqaowhyPq1bbvu24jvnH3YmT1o6q3jsjxxKUWqWh65",
  "key25": "5pNmE9uugTY6XDw5opeG7bs4CB5aSRboBt2UWBHtrRTsV6b8E1XgeDa8mzAmy91FSMubCyRWZV8sqYxaPsGy5WWH",
  "key26": "3tifyqanXPPP9ydeRMEXKuU5LAKDSwVz8xAwXUMYR2KTJAo2Jng8ZNoRqNPsMxJtbSLCFRxmFH4u3fadM2kf22Yg",
  "key27": "2RRWWj4JoLpHLPTfV2rvEC3DDzDZBqYHoHU92HncnRFsEwSWSffq1KX1qvrL1ehkxUeaDhxeUFoUUvGXbEDtpd9b",
  "key28": "4Z7t5r5kqMkHnvHqbj3SNatCjjGZrPEG1GyST28bLGVZUbZnC8keFkcVN3rSuPTS5tE9zoG3uhvUvHLREJ6sm1Fh",
  "key29": "gjsLRaarbkXceLX5eW4VKFred7yRVp8DqgKQ4yUHKKy1CKwBWTvvRRNYHGd32mi85Hxb4bZcW2Xn2xxuk4J7bqE",
  "key30": "5V19NTssik2adP8Ka8ioGw49CyWKc4PxLLq19dsEDG2fAb3u4o5zuMWCW7EqSBC42DPWDArHHtSeBiNbtjaufELJ",
  "key31": "5RuCr5QwGLdvZQkv5TALAkqaRRMQf6frTRChJTgcEiGobn8hhKcTi7fTAcyfpaSmYPm1zNatm4zGGZvsGznaE7A4",
  "key32": "3SroPq2L8rpG3GimRtfnGWfuQggnMCTLQxw7JRk4gBmgnSX7J5Zw5Bt2J2pWoV1NLCCJCmDL9LvyUnEpj5Kkyf9C",
  "key33": "3AgRBwEzW3oVS7CjMYevRHqRpKNmQYcg4HJzADpWBFfi858koqPBiYW4ftG1yniUZEo1z2xuAwuNH1PZ34FXLNMG",
  "key34": "5WMcrrGtWTtUdE22jTTeN8rcWkG3H8xELSDweqaiJmoJS2xuCmvZ6afeBKevKS2noK5kqkijND6gYRSoygnmxw9P",
  "key35": "3AduZsVDweRPqRgXLEzkDakQHbjUy8Heh5Jgvc2Nj73NAWWwjjyfRFEC7z3nHGmynFzk5fRLHDbZJNhp8nQ11XZx",
  "key36": "4HgEfbBRvzYRB7cQQTK9HjYT1XXsgzpE4dLLZ8jfpuVqJmLpsb6qS7CFPkGTGhvrYmiNPpVfK5TeqGKD8gSrhEzs",
  "key37": "567WajGtS2KtfrWMZYMDZrmbh3wEG1iAVhmkZTqjSJjSAb4PQE1Eitd5SBmhHMfnZ1uEatKzEYZZfkf9iqXcd5Dt",
  "key38": "3mUyCebEWk6jdd3cdRQBho5Leo4fY4hdMxiQ7wtAtokcJBEG5ZcKudXSTJ1o7gTDXH67mNeJW2BDnMrT54eAxNW7",
  "key39": "2CHf2vofo3YgtJSJ6hD5BuGWUZ7p4mxm16svs6NAKVd61gvaboKtv48nrGPsHSAqinjJkH5pa5EggbnNF2RVvJfa",
  "key40": "uaBaJX5LXiFMAsxtBLiv8PkaVfrQuWJX8PUmtbRnx4TvH4ZG9Yu8J7JQZuBh6XhYe2i3p42mMATM3DViWcD2G6E",
  "key41": "2Q63rrjyuaAZxtVvTmXUuknhAHT2d5Zwy3cEvCVdoRciyZPgzqbF7ae5fRsfwDavraE1UPcnS7q3UX4ZhnY1Ncyr",
  "key42": "298STfsEd3ovJa9gwThHoxF7Q8jJRu84bkNFrD2gSGgCiVPvwQZr9Kh5XzN6VbyZzsjQJogoXaydGrugNJm6qvdn",
  "key43": "4BpiHsTUkWore17TCGM8TBEmspwptS84HpuE1S8ngsopU6uGRX387qP26xhtjnAwAXV36Gvpi36PeSdAVoA9yVEw",
  "key44": "5biduURvaHvKLbQ1fGBq6zhCxxVXkzpRr5M88xTiuRTrPwXksLeawujCpNWL4RFKXDFnMVtMHxY7tSqjZbujZyhL",
  "key45": "4yNVaWAjAEsifnvrJ6DQvjycNTqG3jizi6S2PFJAf7CvfExJ6DEPDTDwv2bX3jtAk3c9LHBC81uTfGKXDWDFDNfQ",
  "key46": "2PheUKV5XC2NcZp9SDLuDBstCXUmUN473BKbsHPLaccyQ8wrghNgb5CScCe2hDhGARgNSXSQ62YVXX1vaVKvLHSV",
  "key47": "64Yn4suLizcMGmE6bZKZ5HTchFctJakSzWuBHmEKJ1tEDh3FkxonP1mdHvXWs8W8n2TF7DHT9uGxZZ1zAwyMDdVT",
  "key48": "4SvNWSKw39sY3xvRLWmfoWExiU1BnkAXYkVae6uD6ocZAiPTHdAdmhzgNN2Bw6kd7L6D6cqkqmPpSDnUAtZQsvfU"
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
