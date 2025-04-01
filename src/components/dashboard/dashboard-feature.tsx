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
    "2KAHgcsiUYF1ZvzQUywGenwziWTSkV28DweACBbr2u7eEsfckzhpjERHGfEGat1gCs9wWCRoautbfHsJ3wVu8Q4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9CVoGkHUpyWoMLGhgdpvKEGwFZPSStVmCdQ3jtYBBzLecfWuzLiAbxL9e7GyRxtGdZo4kXLpfkH7Q9hSHPm3M4",
  "key1": "FkrPmrWW8R2nSQjM2s5ttaJfWn3mnukWCPc9RwZPzTe3MgzqjmHwrWq4MpupyCM9LGgHe4weGRuJF8KiWR3oEWy",
  "key2": "UBr6Yk2qHHg3oxteFybFX5bjV1ivfaC1GgHpdvGeicjkzcbpsCRLtKaGQ2qawS1Wg9AoWj5xsUsaB6AD84AdXPH",
  "key3": "2h6Ju8AP7Dq8qgoZWf9wiPaEc8jDsQSbCp8oSPS1uomtosbD31M4pLyPqxNhADF6q4PRKGRAxAp3UzKLhAkQKQMy",
  "key4": "24xhyN9Ze3BJ4GYXWbz9vCGvahgCPabrpwMw8fdp5CeN9FDzKWz5s5RPd6eU8oT2J6BHvqNJkuRjWZVnBzP62bmh",
  "key5": "4eLvuvWUgT7Gm9jqUZLW68MUg5o9U4WsZycZuQDVS4F5xrG8gwWEhH2VAqRTYk9nU8u39NQnuW2Ayq18yDWbYeyA",
  "key6": "4Ww8AUMTzdoE6eebfzt6s4WgX2SAi3nGSkZ2nWNvAgRrmwUR3AeJCRtPeD18urpS9LKiExCtpv1wvJr6yZWoNR1j",
  "key7": "2EJZM2Xf7DXxyLnHBaAK1TCrAf3qdC4rNvKPdizN5xnjCGFXknJ8aR1VL9h6x8gGXJaPXGiQUcA9hmfK6vBm3oQC",
  "key8": "fEHKTyWjCyNWrsPWmMEuCZfX2EoDifxeSPuzJhfNdeLEG1QjZysb2r4fURG9d8TeEvanq7BqGDgPZimEECwQ35h",
  "key9": "3E5T2VDp4je6JjHAN5nU4AHGtN95yoMNJSpiC3XVpRRaQ1xJdAaiLzrJqiZjPJ9heYwusm2mR4MjmVNxVEJ7ef56",
  "key10": "2HaKhS3LD1KCTQxgyW6ydm2SJ6XZbzd52cNDs6FbZYz2m9DPRxVRSTKU5Q6BWUXcJT255cLmH7PKoUpWdEzeyjXu",
  "key11": "3wztA5RjDDpPp3szhxtRgnPKNK71URUA5vNHFP9hR3gcUbcJEMzBUUs3Q2Rwic3odtsURezxo8EjnHcbaKdsBnX8",
  "key12": "2ofW3PMxbbpKYEJVfJDK2sU7NB1cd6QoKS263SVwzo7nseZkVw3BoLuGqKi66Ev2bApCd77jtsFPWAePoM6iP4WM",
  "key13": "wupZaX963bapyrzpkFctoaNZghQjUSvrDiHJ5tb89F4BDYccsEqbRpZt1dHM9HqZsvGeT8PD1D7qajvJQ82GePA",
  "key14": "YDGjBt9BWHtB4hEhTTkWFGXFGy6pVVsnciShXFpg82fXisv9jrTKawdNSDqkpeeB2SVt1NogL3fvVEx8GZUShGd",
  "key15": "2riNLwJ8nndV1S6vRixzJWD7r8SBFE4z2gRwMcJuYzmgbT8nWGExBzDqBPYvrgPZrGepAcKQu8PuUVSfmUBf9XXh",
  "key16": "22vMQ3cXZ7Vn4XRqFv3PYdGuQzcimpdzXVwbHjRsiLRJzmuzbVmGuGnVgyca9GWN88riuYJUgffC8YguH1dpgDet",
  "key17": "5ffTUYbsNdrhMXsytLoUYojb67iEq1i6Hf2JgNShF4QZY2HekBcocX216EviRSY9wr1V5UoAAYe1uwCzvm7jWo54",
  "key18": "5cvMsykMYyq1vLyH1JXiR7HEYN5TwZD7hmXxCCSN4iRvc2DhCFRZnn2ysbGLojJ5YnYLd9upkmDjVDb35wshCkwK",
  "key19": "2fUDN6YSXtrLXgCZSqnPyxgt9RvToDMaZXG3A2rm97K9GsTLaL5eGW7avnFwYcabwdevCXe4HNjPVhiduDzWk2za",
  "key20": "5FzDdzHwvFutPZhNLk5Mp56DUs9ABvWapC2CUngcGYHc5oBE37WhWTu3Muj6Z2DqbjJYbX89GHJooZ8tLvqT2eCs",
  "key21": "3hmyU5ah4Jt5UsWUdoCYfZf71NVthZP7gRJ3n7qYeH1URzMyeMUZVGzMhBkMym1KSbeLAmb2RrXxZwEQ77p1BewK",
  "key22": "YWTCR5pFhbxYVXbnU3XcSbEPv3zhfPxEkYaLGBPEssYnWy5sGGLgtV1mKuCDrAJGk49ULN1W9HaXBbZwNNhYiCU",
  "key23": "2SRhU4mrydwWrxb16k8n3gvE23tPab3uKQ82mbnfS2Jqe2y66bC5FvYGFHUNL1C4ZUX7qL19cVT4ZFsC1HDkSgQW",
  "key24": "3uL17yMxajuUHu1NcVke5aMn87VRUx6NniYV5pYZJqMyzGWxLhhoNKM2EXyXbQHP6c6NCDvkPM3yZpy5ufWYqF8K",
  "key25": "5dxTEyJ9Y9B2GNuweh5RbkABnicTCmRgScb1wHdedJ56MVH24xq51ubTwDhquUuVp36foczqgpeS84ZudTPDet1J",
  "key26": "5QchVYUaiDfUDJqJdoMJyzRKEzg4MMq5DfKfHSin2dP7ds5Lagrbdj3N3et29pQjJe24hB5vt5FZQWzTQAWZGY99",
  "key27": "3pJM2u7C4VFxvrzBqdXu2pd824ZDkDte5fTkFXYhy3iNpF5A4vMnaQBMqsyvQMyfdPFbTKydcwGP5UE8dnmxeaHp",
  "key28": "5NriUbs2TrTALPFbmA1WeCzdjiHVbvwLdw1BDx8SxK2WFZqjQmfKXbwtE6erYewCXs687mnWqYFQBRnKtMQhfxcm",
  "key29": "2LoeCuDeFxjJPsN3d7wCabxCDjfchHq64eZ4BtxQZsNGXfgnrQJJuHZ3A6o4ckbhraQzKHnUMJFiAo1Qmje7yQQ3",
  "key30": "2RmrwRjhCtUpVjGtswce75tau6kebCx8x33K6nKjgTHYaQsvGwD8eqHhzWCBbRzNz3a48AoNWrro2K1SiubhMJ8",
  "key31": "fy8tWGKNuZR7bS8AoCKibmy9KNAWRxMMyxyou9Zp1v7jHVFRVao1UK1BFvPs6ZnHHrLTHnuiCEnKncCu7tiREnv",
  "key32": "gZgPP3YQXJWTosoB3NaHDXbBP5x3LR1UNBiYzxbivQxrSbMkq8KPFVDqugdLZxXSqana36ZUfmDgHDaAnc7vjL4",
  "key33": "2uy2WdMwh2pr4w9VnG7S8mAbiqugfm5Jwtv6EuuYsccjKGiGTia3BSXrPGUrLP9W7KfSSCB1fdJESPZnwwABeP1D",
  "key34": "3oD6R3VrY8QsdvKzYDpDBotTKUi15tkbLPvwjtQJr6vU7PrXmUjGcT3x9W9e1PG5XVtfr8JRR5buSYoKuaEZApWa",
  "key35": "3NiYW7cT7yhs1N5pXwLaijckP7M3Z6LaJVW6Mp4WZcTdpYB2MeRYV2S9nk4gawZiAbE4CBvaXJny3HfPCtZ6b3Uh",
  "key36": "cXk9YTN4EBiNYQvj3cqZzamFSW48xcNzq9p2zFo3szHdnmcnL5XNZ4AU8dqGBs8WV6BLxPBkLkp3UzxVeNZWfx2",
  "key37": "5w8npDyguecYtLYY3FaV2f9tPLHNgn2tkxVdTrpuMBt9Sn5vBtKHkZtDo65cU1ferzSJgotaiPDDEGpNrn3CxUbb",
  "key38": "4E7FBZXgUhqrJk6JMsBrtEc4vtrScGp5swUVNxoqtVnb1k1b35wuH2WXN7u3C9HTRUXjSf199j3Z7qHRraThwe1y",
  "key39": "31h32Jw43eQfmoUS7kUXjoNvcDQTc2wxRfP9ujQLHJjsrfunBriAxqejW9kHwJH31CLnsUCvSsW5Kckp4zMB1fkT",
  "key40": "fKpsvHE7SKD7eQidFTqTV2YCGYizbv4vKNixK1e4p769wTEk7sFJVwcnQ1R6JQTP7PCrPjzbx467hGeKP5DicGo",
  "key41": "5gwnMoNV2ts1HgNt9atiJBK7G7TVa4LA7VgwuRaSGRYbwmZ8bkkjeTvVUTwZELcr3Md2GaMAJa3B6YsorXaNra9q",
  "key42": "4Rqa6aecTqWqfPmJVsf4A8p5KLBvFJQoWVPkNwR1S2ypeYsYhQecY6DCYMCjc1Nxu3fP4m9p7KdTEyBpFzge6iW6",
  "key43": "24UWPBZrwZapdQ1jPAw1UmP5N2n2RW2fBbeX6g9GbgK9JjeLwtgmoT26m68DYbEHNJkbHwp9sYBGnoePK3N55Jqx",
  "key44": "2owdrxQVNpo8FLXJzsJVji4xfpx27seRrYBLJKxRq4w5dUmQ73fsGAnZg5rgqr52zcfQgbuPpoZbpz3Qa6pPJTYL",
  "key45": "2vBBQxgS19L6aWe5cjPGwF89PjHmDRXs6jBJdEbDdr49fX88gx77bNjMmVoM8Qffxke7cjRd2qTknSAzSMU92ePw",
  "key46": "uBMQP8aGR9LyN3xwyvMwcy8wmRErG4SfhQjbWmRyZCoJge6oPPwAYWFqjjPuLvMEMpXRRGsCBCB5ip88zn5gH7Q",
  "key47": "5xcDUg6sgqgVFWrLxKp2tTqpYxN6qmQ7RBdGn9zDJtBCSjZHbEAHAnzci895xU7xHrqbNtbixx2jWZfp1yikpahp",
  "key48": "2KABGtUjbzf6ozyUWLyu9MxU6mRVDYZHvQBKFnzmRcZ5iyW82P4m7JnSRyyFJ3rWALe2T5NYHtqfDWZ8X8sJqP3N"
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
