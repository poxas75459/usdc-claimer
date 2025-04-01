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
    "4iS238v98XCH74PTQJUvExWhCCBZTfdaPqegn2nGRcFEZiz7edV7QNcYVZFA9nQhJ7KR9YBJQ6BmR56HuSXWoCig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ua9Ao6DSyCKbiYQVBYa3FuqKbUEGU14eMn8NTZFgw4TmSqCcycpzfu8cv1j1uEx2gM7JyaYzNESFaKqABNnciTb",
  "key1": "4YzXGa6Bts1HQt79kVgzjqk62GFYmX6MvNMrf1Pqe6TseuHDyunUs3vTpbiBgEsHQ3yvppo6hPF3ayzMJFjUrkdH",
  "key2": "MR9s611N6wXWwua9gqTz5Ny1ZTCuVWigdFuTEkUp4Q6qrB9rSHVYUqGUkPrHzGsjWi9av8fpkTrR7Hv6MPj52Ep",
  "key3": "2H7qitDDifxN9tja4wRGaRBKRfs4DpcJqhjLBSBmbbmbwNtwrRzuxbAZNcopTQDZvwJoWaCpCv44cU5bxzvYWb2h",
  "key4": "2E4TUGqoGf9HUpVghBb6m76jg4qY41K637Aq7d7hq5KtKoEkNGzj2WcrJzD6ki5nWp4Cb6E1NQkGY98BmvdrGZ4u",
  "key5": "4UR2TziH9MN6Fus2yW6U1iwii877k5NWKacoxu6RYQryAJaNpLf3UNEgtyGgWFpb3zsxFBjCt1tvC3ZXQb34sqs9",
  "key6": "5DJXvrbrkyUnYMzxkaZRiLCHfgssxeYHYnofQwgxhjRAer5tnSZugdnx6K8wVGhYyf8PdrXL2UcncBTKN9mHgaUK",
  "key7": "4pqYWmWFaenKdeBTeYH3TUs6z68Rr7LSLPFbQQDMpNZwTqnV41kkbrigmXHeyzKoXEYbycTQd3R2GSHayUxHbSw5",
  "key8": "5VLoXr2ircvBSJqCQGj3eY5jEujvCfHcXj5N7XiyYAvJ44s6Wy6ibAW2ksXTACjYAunHUhoa6NgVn2D8RUnWzb1G",
  "key9": "2WGvirgnFJr7xM3bDF29r8i4aajDaErMisv6bhaoToockqsEdms8iqEzqusbB1jcyxaSEvKX99XSU1nhgxgAu4nT",
  "key10": "5Z8bvU2CUGTuU6m9h5Dixcav2zFC6pAk8jM7UWPsorQ9974wL9ZpkLWGAt9SVvX5NubjJjXccqhS8EVKNv3Q5c3c",
  "key11": "5GkbSJ9Kapgx5NZmXRQdNiWE1MxBGdCSHDaTTFkUfKLEcfTgh76ZSdxFeTR9PVuPAmJ39p9E5m2dBEq84ADjcZ1D",
  "key12": "53a6fs74ejpkCfzps7JbhSYkmtT62afFNErAyL7yorvA95YLHtSyXL33Bha2z5s64qcJMHCfEuLFJea1p117hjbw",
  "key13": "2hJbKLXcaDzYtBNo6pRGsgsCN8dPUVmEZ5xGcXZhE4fjXX1ywXxoHG4vaKVYdUbwqaKuiASYUduyxrWf52bDkx4Z",
  "key14": "5tGmR66jkohtpF4xmFPFrWyGzUSGGBR472xpQi7N7ztRiwW57fK6txEBacB4z9ZjdG1e4PJVGroCmcT8Jrb2anVu",
  "key15": "HQiirGHqhC38VKLVDJEUep4HwEwiCLqW4sq9F9epgHdi8vtPj8KMhyc1dVy1CNk4p5oG7ZCwpmZSz6bg2BFLb5y",
  "key16": "4rCza99oRgVw3QVdN1HEJVRhUnt9mS3gQWtn4w9V7ShRmF5kon9MASpwVicahp3jnBDdAwNvrj2cRAmHwEH8BrJ7",
  "key17": "2gCzeWyWzsP7DcNA9t3RgHSz5jrNCnTeMXUHMnvV8HNtuymX346dXL42mbKHjaJipfm9dz9YgUKmatWEHt7h5TgD",
  "key18": "5WvsSUme8FqgPsnjjncZW99TmM83ghYiDcrKz4aCYF1N2auRwxYdyggxi1em4fpGjvhipj3AmundL8fpTiXFBULJ",
  "key19": "2zjZVqihiLNazuhQF4sDPxyQjjhoPnaTLsrxf2znjtsiogH61EHtE67vuAJjqWYnjyCykCyMr3tAo8xmZ6RDvZfS",
  "key20": "4AfmfvG28GJygKk9nGuajiiRj8h3jGu6wE4djbNPn6mtxacbG5cXdBETAZ86U2TZBKQxjRZmjFQNGwgC2mVEixCo",
  "key21": "PNMYA9NpsMSCypu6qtJ6ksnBCLeBZconXNNNgRBj5VhGwhNVsxLJZZmhAewxmUn4LWMMEPtz9BvAhXqX1HZ6U2i",
  "key22": "2S6A6zXER6iZSuYTjvbvAgWwWk2RnMC7LoMCrkyt6DZMLVQteWLZaBXQRohXjbvaaGfcEctjcBpdTqKwUEQffaNs",
  "key23": "61DS3RC8jS7fk4ynXMZXtbu33QC6tDQLkEk7nZo2feVCSUKakuWWj3Pm5q8Fs8VvTpWFdstv1KSTnZBHTnp91fvw",
  "key24": "5f152svLDBegCMdZcECM9hoD6zw8PoxFQY72T9Zx7ZC6SjtH4fessgTEFJgg2LmFkz1u2u2Wp3w9pS9MZobwV4NN",
  "key25": "5NgSb3GVEgiQDYpi7TojfoANNLu3nuaiNEpVsvg9K8iL5Hyvx8gsAky8KGjeCJ9HqhAEJ4b49b677cpkvBnKV5gZ",
  "key26": "37RLzynKTUhewxQjeXnuBeFWf63F8cSKa6Sf3gmunUdGQPMtvLbZ7G7d3AyfBhA7zxv5UAQkgQhEv5QPFr5HmgmV",
  "key27": "26vSN74GDwmwxzWKEkFVsxkvTLaAsG4yr4aE4SW78XjNUW2cSX94ufgCsZiMuFjQpAAuoggDoeMzdRfHmDKB2YBn",
  "key28": "2tADke9CGgE9xjHPKKf2UBu5Gf6g6yipZeqkJhGSEEx1XeQtyUNWhhafyQyejDCMhZBSBLjcfa2myKDJTXJq6PHu",
  "key29": "4svZ46qR3HMAeVnm4LJCL3ZFQuihDmaunDopHjdNzzaQdJb7GYHkBpCQc3reif9DrA6NcDddNKWNKTiE2cPdrGnX",
  "key30": "2PRqY8CUod2mPa2bYa7PgNpk4WJtw1QLMVUnudEDaYaNaabYhWjEcaCcZd2qwzJ1DnQmGTwzcu7AiC5psdfi6FGe",
  "key31": "64v8zMC6oC4zN9GprS9ugixLrunipc35xbjx3FHgy97qmFZe4yjtqFcb3ohvsU2yF4oLMcwEEncLzrYKjsXTTuhs",
  "key32": "4qgLXacuhnazXFS1V3RwShYwpRxswm7LbLtyxSrSdjGgz3N7ZhJLRYzokRgqSdpZkZEaDrtdvD9UinZgm3pKWmgA",
  "key33": "YZYu1NkhzTHDwL2j5Va3DzSQrncQS85MNoALTrbSpsy1noMUtwmrw7zsAEQAPosqSKmXu7PrehwL4E4pBrGVtJU",
  "key34": "mAeGzrV4zF1FkTxcMeziNkjzjRNiCw9cb9EiQpXpXR6uMdQHarQjiXDWp229fHFSkN38TQZWZwfmM8sc1pANC7K",
  "key35": "9757PKMewy4eRuwnZxbeHXdFwE76vrK8p3qufdeAtJopS21YdvbBLGaj5exsD6QM8YpDcrA2SKDPnQmKdzngNTx",
  "key36": "5MM5RfjsssiVxpXYMSHjpgMS7g3FTUFnK6cMgZQUrurqcpMgmUZ35LF57spNyPXhwHWKhnsMxnkDrbqG4Eo8oHBM",
  "key37": "4UyREhYtSR5v8Jcd6iw6XEL14RPb41e5x5zZTYjXbwtJEZjSP6Ai9kae2cuhGRYG4RU5GWFGguU1EqmP8a9kWo6b",
  "key38": "4qRwt8zMEEkD5UbXuXeaKZScJ1ppi4hJdagyNPJPjRjfGrKSttbb3DbPujxvST6xsjiRbFxkBNhJzHR3z3HWdtkN",
  "key39": "5d4hwjRXhVijUYGKbU6HCJAeh7MhdyCMhoQhUgrLAWAjtCZAyNv3vXY1iX5AWKDNzZye187LnvQFkkAXFMMuqDa8",
  "key40": "4FCRVvgG36cWAK3ZxeBmU8dC8TWxUPEBA5xGJMoyexxWnnEFApEXUCtumYQaRFno8HhGSzPZ5W1z517VpKTLTfb",
  "key41": "2WcFiydnJ6iVobYcriUKhhxps6fd8mNrt3kCMfTk8MG4DfzpKdG4SnUimvSfn8g9go2Vs9UERgoC36ShkaYP2rAx",
  "key42": "4XodBGTmZoPbjvHAfnKETJzi6vKGn9J2QgM3hg7egr9gqJ3mDZktX9ESAA91tAiW6cuEUTB9UQtNFbTUg5pcs3nk",
  "key43": "5E2jL66Jc48aXCsRKCwwHMc475nW2Byku3pCkBAVn1f33juW1XXZrjyNMJ3LhjNCDak698DePPbYpJHp2iwsHKjU",
  "key44": "vPAZDHhepJyRkYAeXBiQUV7HUBVGPaNpUokRVUWMCNWD5VQqCiFQsZbm6btGSkF9kVJpyQPcfg2c3xp2EvGUJSF",
  "key45": "56pfwYGEASbamcH2n6UtzjBifV8dVuGyTgi3o5i8wHxJ7yCwkAkVmHugwWhFN6rw3n4FjWhF9QAMCQwgTojC5yW3",
  "key46": "5WLJztDepRzYuWooXEfAR1GDHjte31GMW5FwHRSfGV6oeJoopVyU8Zc8RmUVdywUPjSuc7dSUUgWCPDVV2RPs8T1",
  "key47": "5oHPrDXo6GoPx7z7bgd5uNQy4sHbec1ytNvn9PD7wqy4XD7xV6WCdstG2guQL9zE2haJrKKyZcJET8m37k3dMXY8",
  "key48": "3ycmLWFnZTqxkmcyys98Nz22SvWoAk2Hky8Su4AmX4QsZkbtVHuLCSfFU7x74WZpwoQxcPXv8cdXUmpvkLqAnqep"
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
