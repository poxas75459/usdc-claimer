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
    "48ovLvrw4oXci3UabfYbWxUpqw3oCSLwHneUntcUUizcXi3cjdcnc1BxE3ikcQQgp9Dn13hYMPwP8wgFiRQkMWJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ze4gpWFENfGU758zQWHNwWzBkpkkodoQTEV3NM1tX5fh1E2iNqTaehGGb4seeawdTad6DbpGPNQqkXu6uwB6uRH",
  "key1": "5wQ97qW5FLVZKuzwLSVeKUpH6qKE4L1ABBnDswaY3VTT9T2ThkHoNCsSnKiu6kfNggqpa383Zi2ckqSGRzq6kEFw",
  "key2": "5ptGMvAvMqoyy6BV2rdy3zTJ4BeJpJsZD5HCornG7bet2YrHbsLuumv5eb2ByBExBVju9yWN4bSc2V2UXa4MKm8s",
  "key3": "5JvjAYDS7tcjoAnAXbW6i9ksdzJcCe6AbLo7bAiekYXFw4731drnMpggaHzmUpiGB4fNu2cYA9L4e4qGCW9yMc85",
  "key4": "2bUStNDWbGs1xu8afkRYkP3yeqXHkwicUCAVsCW4WDG4Vqo2FkBfDtCTS8a5iY64VYYQ9VqFFnSdsGEWHQ5Qy3aX",
  "key5": "qH4sCvYbrNm8f4Gjm9Mv3E4TLTFXjcYC7WVz6e4JoMrxNwu7RBG8DGF1AQwDn19CPNAekRbPW3TQFp3Xiy6X6R8",
  "key6": "5buXMueUf2wmSRdp7ih44js3S3h2A7ByQc2NjzmVzoMCuqoNYLLE2qHtMdAUUAuaHNyK2AoGq5WwUVgS9g6Fcb34",
  "key7": "2T64znp9CPcNRFjdbPyjUAfSv4pUE6uvUV2bmfYh4fgRrWTytbAfqt56wMb6kkpkhazdjDzvGszwBc5PUX6T8fpA",
  "key8": "p6fBL7xLeAjBWshXsdK4cihXFkqKCEnPEvkU3m5FdhYofJddrDcW5rv69M6NUUPfYx4w76k2mvPVL788nEw7NXt",
  "key9": "VdrzRBqCNR4vjpgdvpv7XdT15ko9nwAwaj51wNZQq3u5WKeGiD4WhR9nfXmdz48BU4PB3HKbRceLan6PnmnRXrr",
  "key10": "3raNLGMFvUUU5jS8JMDP77bxQnxCDpdTMXeFnQJ1S7kpGFWyCDLVv3zFA2P1wPvUs4Q2RB44kNg9EFffTCt1kQSW",
  "key11": "3izdfQDREgqXx4owJRP4oMPZPrFWbPLPQ6VrFmhv8MUurRNeN3X3LZr2Yr6QmZmntYcBj4WVSbj4v3DFo78rsSH9",
  "key12": "Gwdez611rtu1Y1HWWe8b9njdSZwXGZYLaPhRSoqUYVG9zsx7hYegdRg74kYDKrCsgU5kfN3mLHX8XcKapg7PoVJ",
  "key13": "2j4nRgmJiFoQedKmNXdsoRPBXVpXaZtVToDYstKjJed3fX1q7PdFMaJx7qYjihWL7DzoRuu39UcX8W2M1Uhyw6QR",
  "key14": "cHCAHfeBvupwWRjnx2SDk8yivj96KxSBNyXYHKD75jxYHcSy9ALzBo7LFfZJ4A9bdXiN3bjFARKF4og4WZ2EXRw",
  "key15": "pLvpPYfBkcKzc1gJCpTpGJCexzRPRsqHXQHZDukCu6E8QjbRZejCycPCeJQL1NKjMM8UxRa8LdD27eKDRFfrw5X",
  "key16": "2n2quVosMU4uQzZhcKiS8ndnuwVDWL2ZgkRdP5sAG4Sfzpvp33bH5fk57Smtfvxv8ak5eKZRE7E7HqG5cPFtLcgT",
  "key17": "3mXY48RVPvtGn2pLoPA6H1PJ34wP5zs8gz6ALDbauEP8HyjCsUfQfZhuqnDzzcvdfqmsmb2tJU99pmUgYiyMGtLs",
  "key18": "3ZSD6GPtZQtrNc2NbFmqpPrii9dZmJevpnXvNzmJv9zFWjqZYJBefyH2GJQCs6fw56G19c7d3KshwPArfjNHtFmb",
  "key19": "2rourJR45HBagPUdJZ5pnBsX9SLtTTEHXXADgbCjuFNgqbSD3z5B6ecTKZxmH8XxgBi8Ct3A8X4A8DsWC1CGx9dt",
  "key20": "3mbhsxB3M1VZLk9AxWSNJvZ1hGL5CcUycSb1ktaU4DuGQ8mpuWxHTsZzmCs2NaH3b13Yx2w694TgUqCxqz4rZyqJ",
  "key21": "4LqDS6uWG44cGNg5zMmEDLh5RmGgHQkarXJun93EJX1w75FJQPdLLYLuVeNdNRb84azZf4pvkc8uNGtiXVijsXMh",
  "key22": "571KPmwYWqM9mZio493WSFqX1suhmzx1tpAP4Cdfdh8Z3vGK7Jh1Tct9EYfuD6tcv99BoJtwGSU2D7uFsQ9S1Wr3",
  "key23": "4iuA2TXGLq4rvx8Xn63kuBC6tYXA2dCbQJRJYR2YJaN8PDoE8kfEitThTkiX1nf4JfigPgJCj11o77tWWbvL38q5",
  "key24": "4kgzo3S3VZ7ytUcU6RNJNt1oeLC14rZn6MAwReAZ9nn46HLDB2v8s85iZ8FaSGDSq9QvC24tg8K6SWCbnGsoqqPg",
  "key25": "3eEp4ke1RvbCKZKhEHZG8A8DExdbmfDRVQuYS9jpubYu5Vhn6dUnAYZL4hFGpxZRCZwjsnNrRewSUk2pBwaKCGSe",
  "key26": "RLW7GYE9eTMUmyAb9ci9WfD25gzmGmvCVoGnyPattvy8HixVLPjuxf3PCnNggCfx3hdt6dFZREMkhe1qTUm4eZv",
  "key27": "59ewpocvx9hAZGGt59uesZjhTa5RBuGH2nZYzupLxFm8AU1Jx4sP5NfrthMF9HVNeEsXnkQFv3QppWFz9zpLR7ch",
  "key28": "xzNfuEeRkXYdN51KgVMXb4v7ze71HbL5Wf7qacnoEgVbhXcKyvNK3NFXFsmcnbDPKnNvhs5MLv4C7HDfYWn72kU",
  "key29": "42WJvtfUdagqwC1MxervuEhQXo184Ld9fY136rLMohBgSfXukHsQFW5vWDAadWLMjg7w5jxssfaZRhSVf1rbyLra",
  "key30": "4gGr2w9Js8UirmHNcGsdbBLsEeXwa7c6rg78VTMF64tGo3xaCx8KeGyLyenMxrj2xJ3yPn73mP5QPztpTR3dThYQ",
  "key31": "3xTpb7xwUULsuhJRjAhsEmrPmbJ65eeLUx4qNkCckrXfJxriR3NynhAPW4mLZUHnXTya7CWS8JJqUHeXQTyQKBh1",
  "key32": "23iyFeLuF3gLRFkfy7jMUCEoN8snw7RdYFPHRoydx27CoSbv2gbiUZfXMPLtNzFn5o65dShVyvRrsiQfHkJF1CDL",
  "key33": "5g1emhV1JuGkk4VDosi4Jce68YfWMhkopzLYBmUrFFf9EruYdFDZoeso9fSDDs7KnoSb8WDsN4Eoc7AU6r2LFR1k",
  "key34": "Jei5Ue7t8ambMvYn68T5K9qkWwtQUTQsSMdBSnMFaYoC8ZxPGyEU6JFWRPW32tZmsj5THyqqED2gLK7SHe9PfYw",
  "key35": "36WX45kV3hLPrASmxL67PnCexq1bCt2skNXjUTRcXrTvRqcLEcFZRLjjstACHinKuXVSP4BRkvK2wobNt8BURJW7",
  "key36": "PyxJDHxuHgjo2ADnauAxf5x8ZpodA751UfqzAo7sMQzA4nrkhyvvKWs5y8ASry9Dwnj6mDo7pq53ExURg8sh4Fb",
  "key37": "vdfithtSpq5poR3wuSLSQuv5ENmi7Ku57J98mRoj9tWGgCGkFeMGML3wf9WCrGcrtGUZTaUULQtMrieifTAYhGd"
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
