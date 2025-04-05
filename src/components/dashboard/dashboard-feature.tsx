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
    "LMngjBHYyALmKXSAvFxAW17g1CUKoc25rLBcgCo8KCxvc9eaUM6nFVbFbxGBwuPTMXYRSZecQQZ8p5DhQqnqvaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAV1waP53jk9aCsKAwmtvmU2kQCY7GLQpiJhpeBXxNRzgiMNkxnmsKVSxy4vrJg3DBEGZQsy5FWBwwRD2nEFY4X",
  "key1": "5WS6sZ7cfkrf7ASD4p4kcBodhE7Pm1KQKZiJy1Y2CcMQ6NM82fiLPiEcgHwpwQfk7aGC7frZiJ1UMQfD9CzQwc5p",
  "key2": "iCaeyvyPiVh4uAWjx9VyZvMGdeHEPwa6cabG7ia7CF2Lkkc9Q2gaKMrC96k8NnK8vHWCxzbqakiVtWML4Uf4xr8",
  "key3": "2MJSFbE8HfSBMCkj6wmYwze9cfYbmUaNTgdqc3H9Nb4Ry4RfAy5ttzRj7M7MZEhxqULpoqE77CYAWMKw6eFF8k5p",
  "key4": "CCTeZy4dWXrJFBc1JiKVhZj6R7KQanAia3VD7cZdEqT7pxbZS6ctdo3mVcVcZE4smy6cJZg7bwbxUP1oTAab4yA",
  "key5": "39QYVh4LqLW2bVFfYk2TVb6q7CfdkKXn5iMTnavgMYk8KYLnRZtzZjR2DaMkCawdxcoU2wcyA6w567H51qgKNLiN",
  "key6": "3ZXutCFUTJfszWh8CcYe2rGsnZ68x9zqTj39SEvwBu6ZaPst9kV5VCgJBgLiRJwqdALi1sxMeNj52NhnAKxxh92u",
  "key7": "31HNQShAy1k8ynGH8UpsEonyydSXG1kHakkx8V9eWc6WohVws9ugMJytUyeZofVG1EWYC7rpAYg6voSb2qQ6CveP",
  "key8": "4BT6dsK5ZsGB6LUMwG5wiYr7cEdYvUVNGAuARxau2ivLDyXVGqSy3fkFymr7Jkw5pDhmgyDRMm16F8Pi9fRmqV3Z",
  "key9": "3SALAr5wSKDG5M5Yx7djkfydyXzLdgKcq63emWAatGcwGeC1RqwbrRd7BPMCfvjZUc9R3nn38tjS5SWEoKWDHkiB",
  "key10": "5HnxovqcAKBFGDYUxViJAxhBq5NWWaEfJdJmSmGyZZ9YcN2AM6PX2fqwg7B3pZv5AuaM7UiBBhez5KL9XGa5JY3S",
  "key11": "555xHShux2uxVv9F9oScJZdHDgWLJYP3Xq6DzEJ27HKNXbCPudBkvP5V78A1T4pvgoAPoi99mwtRgYHGrJJ44BDy",
  "key12": "3Jg6uTc423qSGBKqEdBL5FFSsSxsRfQwQ662H59RprdbnnGBxKSKv7MkiTMebJZqmh7ZrQ3Vp28k2JyYQd5nSRE2",
  "key13": "2vd7XXz8gf5wfrQa7rkDgcTX6eCzDoHnCiLpxLNNpxXVsCtU7FGZZjzbccS8KKJjRy8rQF7ZnKuZHfjZoe2MRw94",
  "key14": "3HToBKLiyoBPJ2JaMphi1vw9UWcjWctbivpfJyUbVKS9u9CQMCV9UYAJDvhytk27EszvjpfLjMktM8DJagszaycM",
  "key15": "5arTDSFcws4t9bj42SsWSJfV41qq3NY1P4P28E7B8w3cK3tTLrss8okPjKZEGC3BwNaU9f2Q5T4mruyprMKvy8Ue",
  "key16": "5mpWJteMh3djdkmXaSyQWLwmcfh4scFLdMK179cxnNHeLA9LYFx8ojL5oKvqWHBp8FDuwGws6WAwMidm4E9CSKrd",
  "key17": "4bkJigjPvSqwbbATopomXqCx5pYdHTJbW3NCAYBWtYque4Qagaj6Ro4BVhoAZ27PaFqWVkUBFpUyMSJKnZYJA77X",
  "key18": "eNXFkhYk6vX1b1jL8wvitTynttZsZ43kxA5VmqjFrbSdCCy8Wb2zsqNwX9WsxRexKbcZAGPFuB3i6LiPcCf5ABr",
  "key19": "4K7f7Qr6FFpwphaJomkpTfoHTPi5FN7usNnqMNpY5x4XqWkvX6xewH7mSvK2vQjbwLF8dePH7ZxzNTHxdnkS4FUj",
  "key20": "5Aoyqq3x1Q2RSPGddwiFo33zYVDCMrVYHTHfZXh8WjhCamv8wJQXFmfW6Gessow7jL6iSrECmmyvCpkWnpX4TKzH",
  "key21": "3SDDaf4wwMSfnpCrxChM4Cxx8o1zFhpxx2mMEYrK1KdhGpZysfjQ1oJ9tzeSUN125VgTuQbcLxsiv7tNRnpSNeiU",
  "key22": "4HiFscT21mULwc6zYqcamLYdpsoRhpfAUDTMG8YQrkrmTuaJ8HdMbqRWQaftRLnhUeUbpXLrtRnmFPYzH7MJsyfQ",
  "key23": "Y2CAkzuRs7cUM46Pp94UpQRnh6EpB9vhJkzg8T1zfWXyyZmkvvsiuHoqTGD5rMULLT23BnKCAYTe1GRarcj5VuZ",
  "key24": "2uSNvUHMnKXy2h1qfnftLqtGRrrqzfhkRZtoEUtdeb2pGzvQXneXJ8dBt4DtRTXbn8LzYAj5bt5d1nY7PJ7HYD74",
  "key25": "SAXMNz2Zpeo1TN4xLEW3QLCVjM5vYSb4yPp6jdGauHpUkSsuB42edmzW1ppVpyiwNxqcHUjBtAKfk8513UJV9Qg",
  "key26": "2DkVSA8NaK6WkkhSt8anTPgBEc7Ro5FRXcGkkFCDN7sEQ42jsBMaJfk37SvT5Xhrp6ZoVo1dmAa4XVZica3EKbyX",
  "key27": "3EDP1RnmD1eJRLVEiAEQgWbVKoWN1zTrY42QbZL6U59gA6p6nDabJPBMrdsQz6g6gyzVwnejFARLenP3ALtMsoNU",
  "key28": "5NjYM2gXF8Qo9bWhU3RdozRSDUyu9qbyU2GpjJUmTT8MTgi4UhMoVtkEgfEYhpNJGFsLoFxtJYwSkJ1zL9hsi2k",
  "key29": "271q7CBdgqGFg7YRiWt6ts1jXG1t4CueansREKYSeeHcCnuG2eaeaDYeAV4osEcmqfrcVPWFTRjc6r8tYmKkAaDb",
  "key30": "5J8qCkN93SP78DbYsh8TvUZTd3XLCu76v3RM1q1btxnGkBefZTnCBpNgyvuafju3hsB62fUYP96uvtAqTbjLYKL5",
  "key31": "45XAkBS4p8GnVq6vGij8cdefuqUxZ7rhjWTLmC5VAiSetenmYYyTSEpFNJyqqdk31zzZMjYDBubnJ1nFWcGKscwR",
  "key32": "4EfhghPqs9GAffP1NwToWhtLw2EqtFfdokd9Copduigc7sXLwfK5cGMypBmwziKUVNAAMnPofSKMmQtmpvXZLTV6",
  "key33": "31hvF1L7jrk9ojyyhWTufRLR7ZtqZXHZfXrw7uevkRzGBPk1SZQQhPNkHyoYKNkYJHdTWXdmyQmKN1c4Y3f1YuUD",
  "key34": "2rHEPDFPfZutHkFQkPv15nerzEfRL8e99u2ghfjzoNHLU1PiGsPogr2RSYZDa9AyShaHRmDZtA6JohPmQiqa2vAi",
  "key35": "VcFjBsNHd3dqLXr222TzvG6KWWm4dc7oxB4Yv4Vpuhnbgf4cBbEte4djVLheKTs5X7udRZXVJyuzPWym6JjpeJc",
  "key36": "3Z6yJ1YYYiSWXPHntn9X689uXzGQJgUWoB4heV6pd9Hm8DVrjwQ1a4CCFe2WAARHnKGjctLSy2ABdruWzMV7cMFi",
  "key37": "2bUEK6xaAcJC1qGWTTEgcovhkiZtheLkz5nAD46aCAD5VkKajctHgsTcvhCinUfKLmLjmNKrW6tpobLGKC5MmR6",
  "key38": "3R8DdjeSM15N1deLLB3mExjKN5FZxaXbbSVEUWM8a5Vht3msf9DuF5bXDGX8vYhs1WNNnNgrc7kp7sShpNDHekRU",
  "key39": "2SZzxcZMpthRa3xyEf2QWfBD6ozpuGn8Z525x5ddi3BevkfamDXBA1Lnacet4PdNc5r72yxroYgYmVa9h6nJ1fbG",
  "key40": "1qYK6soPhgWsLdosRZiDSqpYfv4y2AXy7YykqchqDjsDMPKbPVas69CnfmB1gs6TNzFH7LZJoLqvjMPV1XmRAou",
  "key41": "4sSDpZiuA1cU18wbp7Kw1iCkMr7WaPXWhcWHVJfnNZAPkGpB6BJR3FcaKRrJKazQ62qkTLroHT1C7o7Ecn3EbwSF",
  "key42": "3rthapkGuJeEoXrNkDYdEBj9K6EvRymQqJ5CJtavDeqEMXrGCuiCB4LcodhjeuUj6XAudb59sULvSGCQoF7a5Asq",
  "key43": "9aJAw5H86sa1urVf7boA1t8WB2K6suiRin9qDGC7zMSoo6n8mDVrpooBsXr7pEiPmBRd75r32nsdTdSDM3CiqUx"
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
