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
    "5JJxbwE2bARCas9HvVjWQSGJYPkw3xpQRRFooECDUMAcLnSfMSPCieWNYF9VZQn3qZZGzfBfEVsjYS2R2SQrvLhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UvSozoDAqWNxLrHfk1aGXNbg71m8ff3mt49yAoinLwDP6mYtMK8D2drtbaS1HHJa69w5AVfdrD4vy4yVPzQ4ED",
  "key1": "5wx3XXUvqYcggeyzRhXMyZc45HTxCwzfDTJtND65TWSEtBcD2DV878zoVFcFscJxEDB4LFyHFCHVBWxRCXryGDBt",
  "key2": "32XYLfbPmuRAbPyQwzn2jmCbVbRwzEbXz1NpPx2YHBorYYjqW9bEjTfFPfiec7FTQZxBPpeCWeZPf9my1DWJXUkQ",
  "key3": "5ktyQKoUED4RHoWHR7wFQhSECg1Yt1RxoLE1qGpUrSXPDGQDu2TkJtLMX4r7dvFsYutH9ZNj1h3Ge45rLcK9UbRt",
  "key4": "3ENpE6wjFjEN3VXCG8rK9aG3WesVZhkBmY4KUzCV1yPNJwVNynTtwWTW5MyDB1dgsBQNeTW32cpLhEQAmi9SuPUr",
  "key5": "5tQCvsNzXgX2HPYV3ZZSupnPUxtzavCWHZEDptW5vJSZ3WG1rJi51csaKZR8ygxni3j7m65WTVD5pFim1Uco7Xza",
  "key6": "4VTMSYVfPvqyEXcsVxZ4kj4ZohUgfJkABaQ96gP9HbhTmC9xQ4BPT7hF21xPipM8bLKxLhXB6UBzWEh8KWgHG8F8",
  "key7": "5gcLMf7yXxygYdQaxLopJdGDENc3bUJrGN8CFAxYEfFu3hErsdhCrnkN4hMYaDen65wcMF7Fdi4B9GkvFThNZ4ox",
  "key8": "2ZhEAnrsnwss3GWRN78xZErhqRecdweBLMjnJotJk1T8txpqEevsFm345DkXzYHXrmMgYCJrgFmhxz3oT7qKQaTp",
  "key9": "4gYxRc9rBafCAP6dgm71eWGb2iTN84so4WiD6HW67CpnwLHDR6dB7NkKxECsKmuFWS2sZMddpCqVFdcw78iFnyw8",
  "key10": "5eNyix2J91Z6F7cfR5EnH29jKedKVSqJsdo9UStMNnYMFxzEYqmMSURTQL7GHFsHCyQB9FaxoB4SqzfZ5xspsWhf",
  "key11": "2BMP9NC3PBFsPH1uTHhv7ZA3GB7bThn9GMzUYGSfQX4Mw2SHNh6MYvzPU4mSg2kBghqYEz19V2n7S6HLSBBr7ugD",
  "key12": "HL8yciCkh3curgM431XxE77GtCSs1PMJnKYLtLNhAKdJiEDHenjAG4uxtmkMSE4rdZzB4d16RvXNW9DpxkvwHWJ",
  "key13": "3WnXQg8DQdhB1LDdD32RbqWJzTrUQn9tm8HsSgd9dw64CYyzTpgCJxtK7XayMPCafKfhDfeyMmXXzs3Qhv27ZtTV",
  "key14": "2MsSY3pL6FgaTBNkXjdmphVqXrMPTuydKxPXTe5zHc1dur3bi9MKWCJ1LzKwejZFbxsV4UCViudvrqQYTgm8c6mU",
  "key15": "5xBbqSjoqFwyCXPqPMvwcpxPobR83EvdiN7axxbRgxzmBgGHfPfsv3XHXMzqpQDtRNwHJH3ycQRA5EFB9zKV4WCb",
  "key16": "64VCyiXNZQ4ztQbyzwgQABqLijtjkfDDCLYsBWqTjbuuw4fzUuhXgTECPzg3SRGcw5E3fB9rfJhARHazQd2aSGrc",
  "key17": "5vu1i3uN6Nw3wwbcEVsBRD1cbzNN5T4zwiFRZRzDhNfpx1oRqA7rDHQEZ6u6irEkvnhGvCPh49ATUzWa64Sbj5H3",
  "key18": "QViJijnQMExkt18s3mFEUiNuMyzYgDHJTAVaQ1rmRHbWXGhQ1NHi4znnKhdcCCiqqfn3kgaUrYCRawTq1BQM8mi",
  "key19": "5VvdDDd631icnxQP5tn7ovYqJY22X8aY9pYsJRoLpxnoc6rGWfSLsHF9ZMo6Tap6jVtvyDxb1mL4msL74epcqYf8",
  "key20": "343NLe7coAhd3YuM2iG81bfiDsjRVW6MuEeLufpwheWv5xyAYfdAVKqrx94kcSPVtjffnYWpCDbDPV8hHiAH5Kj2",
  "key21": "3uu14Zor1p6c5tnfVBCsxpSzdzV2s32uNesxSVXiC6hRizVFwweoKs8zfB6GRakvwyu7QSaGbFuD8NkyiU7rJey3",
  "key22": "2eSG4z534vFihfGz55H3nJU3erPa1gSieSGurVY1b46puiGvJrtuyqrRYejmMm3H7dE8TnVYDo51uZRQHVWqmbud",
  "key23": "6791T7YRdVu388oHs9B1qWg55cxPxuaH5bZtirajKfXEjoR2mBosquFTBHepTQFm2wJrfsW1uF6JTAoMvPw6BcTg",
  "key24": "1A8jzDJ8WKMfe7NdmAWJKMNJivaW7YBwmaW7fpGMtaqL6ncprkp7ZJpex3RzK1ghpPP9ptLHioTCNXKZVfhajH9",
  "key25": "2aUKdEfshwjY1fuuhBgzn2HfK5r1DMGRXSyeLeXACSMGn7XGpFAYF9jFgJqAt3XwGQ7UBe6Ab3Pr68MUBe1B78fS",
  "key26": "2f9YUHKjDdg2j1AbhFV3wnVRkZLWoYjzBxxpQNVaLtcNTVi933GUcCWHi7d89GEM5SA8rVqDCqXrCTGDGWDo5AWs",
  "key27": "4EWkbiuH4wLMubufuPdYE1kw7mCZHG2W2DBHtTRWjaESzowRBC7gqk6krzCDR2tuJ5D1Anf7jat4XT9n2hcs7GGX",
  "key28": "3vFrvNQBXP8k4yb6CKzjfP5XqDsi89Lt34tyHqVXvCzDm5mciLG8gP3NnzaLCDMtojoNjGQ2gCbT9XTmH16tAicw",
  "key29": "8hnEXZpDPcGjfqCrcaMUsBZ6h8gj9DSHQxUwD6H6MLkvKuDyT4npdPMgm1QY4dm8NYHugNkxqMCypqb3ztf6aSM",
  "key30": "4sDaomW3yVAeCyeEDqPfekDWcNLP5eT1BUhGTiu4rH2vPsp2BL96kfaqPSL2xfJpe2wH7dpm4273zNg3dzcxSUfT",
  "key31": "3J4wSXZLwaMF6gQwubZvP74n6inc3n57Cd7o9zacKGT39i1McEsGt7tm3MGZ7Ax5jKrQepE7hysibYcPwveZ468q",
  "key32": "4MQwJ4eDqtkcdGjUmPRjqbHsKnYYreuuGrbKi4t6MWuA9RK4Vn2K4VXMET4ide9ea63YSfcQFnkhdqcUE7UEDaCg",
  "key33": "5YQDbWzKkGBaaDe4QXYsSNbsPPMoXq4R5pNa1L4DmrwrtFvdaahSWv79d8BEAg3rKBeCfFXdi16RgU7Gr4eKwovw",
  "key34": "3JJvGFbQidJGkqHEqouo1zCoiFYj1k1RBhFSi9L6GLNhFiyEn1b5tMuRxTF7958yHPGJynCB8nRdGD9UwnMGv1vE",
  "key35": "5g1JJRX7EZ5UHGXf8xUkbqHVt3vBRdsuQyPDJsVWzKgmgfiN6PET68MiqN35794hJwdydPNihmri1JEBrhvpFk1L",
  "key36": "2AqvSaxLRsPm3JXnjqGGVencvG7DgUYrfJB8cpQE4mQ4tmtZqqaoUHijoExMBSanzRMzZD54gcjNEafJELtRciyu",
  "key37": "4PRZfoEabyjywUrdSA2W9f4GYc4AMGVW7Yh2AkPBTm6w8hPkbu5ygCLhY4ecU9ukuaxvHHGy2FoVY9oAWjBZH4SE",
  "key38": "5YuStMnHfxzfiyHUTcLapvssorau6Y4MBJxaAU9mhebcFmKbhYuNRHufXKmMN1PhqixSyEpxxPeq46XWYSs3qePC",
  "key39": "5DnfNtMhGWoVVqadCLbLEyfiDnwLLRVztpPMKrfWjQZdbEwCoWkcyJMb2vAtitedEE3bpvajXgmgjdjeN4Q66yvo",
  "key40": "3V4jpZ6SVnc9voCiFkTnVxs7wHwQhSNUm1sjLAAehyxozYqD1pVdPZrCxThUGckVdXBA2gmmnKQZdgpUMcz56qxY",
  "key41": "9si7JytPyVyVVnY9iMJzQeNQ7Ljq2R8Tjsts19BGgdcD9scjpjE3Nd71NYyBujiBur51sBN86cBrRrpdbjS5k94",
  "key42": "43ygi88CmUoFeKb6hU3GV2xG3mRFNWLAhe7gb29g4SZNYMoFMLcbnD77gNyB6qtozwBomWLadsaxeHxrkPqntjRJ",
  "key43": "37nDbzXzZbQWz3FrhuEseeHXY1mHkyuWQno1FgzfqAq4cCxPhgBw7Dm1AAuAsrcmwAKnLmBdr77P6YkPQTWgAyXz",
  "key44": "SPwA6VK86LEDLBtndwzRbKuDMyjtRaqYsShtrayTFC4Xg2xZrj3AM3gz5xtSsKTRKdwEMuwdxnLt699KttAWcCY",
  "key45": "4QWodSiykMvHn5GXAuxUAWBBm932QLYdUrsg16PzPxKP31wtz1NYBijbPH1vCCdc3FLJAFTjngsGhtVwoVh5jPfd",
  "key46": "2eABcSh7RbjdSLXK8EqDYPV4KNA1mnXffdUxBsPeFgzjzUHsJ66ggfd9JirafTYjxETkV9Mpex9AChvLFTNaANNE",
  "key47": "4mGJe92LFQgeeKYSo8drgmDDz4ysrQ1xGGbKN63rTtZCXArc5Aik9doq1sijT3JKohpPTaH87nZWMCKQYCEZAXgg",
  "key48": "4c5SqGPTmqDw5FF3casZPUyHJFdtT7UWJSV1GENBiZmUb2hmktS5TdvNdDkh5E9L4vEwJDyFCK289bLCNLGt1hmW",
  "key49": "2vaE8Ubkmf4Lj3Jds9mLzgZemyDGj5JPVRJ9MD2Hd2NQZLYPo9x7f8pMShDQFDV8Zvz3KRR5yUNFgaVHjCoDiS3g"
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
