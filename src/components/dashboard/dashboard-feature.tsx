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
    "2QZDKqMMYhaHdmy1jy2PqiSQ5Urb3tpabPr9rt8qmthtjnaLxyvAE4Kfzd67vqPSWnSeJTnZagpDvaPYuA4eER6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UnwVccfe9nagEvzr7edYQ3jEP4uXs93vYkDcGEcA9zCKBzdQW2NNAz8vufKWQXffLgXuXiYP3CezcNq12Uzim5b",
  "key1": "63ne1pibqPwEgeY29qoCvVJAqYqYkVrKpp7zesKkjeHnLpQKuFaKr1x33DMzmajnKneh8FdqxdTbBiZBWYMgR5VP",
  "key2": "5mp5AcEBnFKfRtZCbw9eeWsKA52Sdhr1LgGfvExPWQiVDPf1518JbUio3mpN9UTKGuJqKb8TK3vbMdkvQLMk2qaV",
  "key3": "Ab48NMUwGxHkrtN3yqFx1tYATtYxCw7AcxGJJXB27HPkxBtysfK2mKkj66KgKtLgV68xua7AXmySm9jgDVAyFmK",
  "key4": "5AC27b8W7hqHxCcNcy69MyR5qNjTPENxCtVAKNJd8JKvR96pMMwabtPncLNs83hM4gy4LHMdnRH4MtmdFM68w3t4",
  "key5": "5JYDrWMV99U3ySbbKMT7uvA1mNqcXZzB4sqbWyX6m5pVx5zpQuqirn7sHq4q1Gy2BBpY9HEmNk9ZdqAJLDAFYY57",
  "key6": "NeBzHhRi7heGWT5ViTWLdkVsJoN73reRubomyPzFCTYamLPjo1aWb5Kb157ZkknA3kQKvZEVLakQZ5rps2pgv5g",
  "key7": "2yby1cnZW7TM5kXKroJpWzNtzpE8NuNNt3b3kNwjkVhBTPG7mV3y8pRLnHK5wFn2fLsjpeAesCM4sRYMfDxiRPTd",
  "key8": "52LP7gdGbJr9fcNndopPcz7dmRnGHg9Q244oCSKunqPbrwUSKcB1U9EUtUWUe75ApXTtwgqwSLhtNYAApHfiTaHL",
  "key9": "4xUqZ7jE2DqKJKUpV5dbcbVMKbN4Njzr8wDXakxqTnd8hEDF6bCnjD4U813DZUdz1GsJjpPzf9hKk3Vd9aEUyyJy",
  "key10": "4jtoEdLFJSqcH1ohFqhcVAfhacthQAR8JprxsX1XyF5E18r8T8gp2WUy3A2r8itRxoRTMiJHiV2AtZhimwMFxRg6",
  "key11": "4NZwbKWgP4ZNwMKzR7UJ4yEZQkkkjbjikKGromF9ntuTFvJ7i3KffiK3GrpVnAdon99qdAy9cVzecxWuox8A4Wnm",
  "key12": "5WpuzhzfsCXgdeBi2ufKPzuz5mgYD47QRg2Zi6he7iQ21C6W9Xe9pRd1hAcwG8wJFsDQ637d7ToGtR4xyEfo82iD",
  "key13": "2s6bHeWSYQG9z1To1F2LFqa26SXh28ztVDNHFAWZQNQL25SVQqjeXSVG7EjV5V5M2xG2h8DrUkSZNrugz8GrCcvN",
  "key14": "4T24DBko2c49nkcK7jePeuUnfRfMYGDAq2ECic2zFEvpPpdvC45sap95VVzzBzWqHAVpDCNVAWzxpEEcjJGajaK5",
  "key15": "2aU8qfoL6oBGURGDqAz6x92sEQkaP3EEiTQLKV8r8v8wKRykTvAfXLDZkoJPL3LHFmBB9b4DiaCRcPDtoe6iH9Ux",
  "key16": "5DvKmoBxDD6NHfDs8BGkqe4L8A2TUXHCDWjJBm58Ngo8XcxDvqwymeKztqnMVeRRodVuXRMBA8QmGsSLckuBniVB",
  "key17": "3x2bQPDX2hHDYV2kHphrMNt7T92BNyqq3aPQzawJjgtcHHKfBHdqEnp6EU9QoD3dnyUy7kMmHH1RiuCyoyeERAQD",
  "key18": "5LrqzRN3DWv8xyE3tn3AaaGMcanMUB3EL72dQDcWan4DPKiGhRGtfduMHaGTC3JwZtfntveBHm5K2rdxY58WiARU",
  "key19": "2PbfNrAeoFT3BdXfeK4ZHHHdFomzF5jNMUddzwSzjjVtMejF9NmBeYYR6iX3HQ7z8JhtNshRs5nBhDSs3sHxiEKN",
  "key20": "1MwDAyLY7jJ718moLR5xvHzD4iZfv5GdpxoLzZ4P7z3AZHd17ZqzZtTQy3gMKvLfVq3E5Wnig7v8ckzpQ7pQr3p",
  "key21": "293kaMojfmktT9Lq6aPbpFk7EXcehGGZcLqA9d2nu2xkKuhPJ35HpUgCGvseEdrCuhbTatnRhyEBA5TjNukfHrxC",
  "key22": "3rouwupADeAJ8bT3YdnoytxUfq1utLypZaUkZ4YPob54q95WRK65Y8xYF4QiqgP6epURFt156SLp28JyZgoWw1aQ",
  "key23": "5A1UtohKe7sufuaoT61A2bDqWSmFjvMZCevj7nreGQTZSBfyKjzZ5tqFsvCqgci3swLSvf2m9cMBvK2L9pXkT692",
  "key24": "jEFKHUscameZAr64CWWTK2SpH9Zco728UXieKsgVCYBa2wzqgeDwkaY6ZrS3HiiyqyWsZZ4qesJefjN178sUgrp",
  "key25": "3Z54skNLvoTLpoSwNqovkJQqe7Cvgb9WHEj9dhdDiMvauT7SVufKeEqBmZ8iMAbCj942PQLqwLWM8K6CbxPpiPJU",
  "key26": "4F4wobgVpaoL2sfKkDJ7xi7XM4F3awK381y8wXaWZmAZiyFZ6rcvi8JKYgCessetQVcWh6qEQ3efH8jihEaC3Kn2",
  "key27": "KjwmoW5gUMC5KSMpr2C4WKTkpVgisdm8rJhL93z1RCERJrdqtkWV6DbYeTbG9jsBPuxocmXc3e4CM9PfkM8U23t",
  "key28": "5bFVT8wT2Pmb9dcQgz1B8wKhZvmnwqtm7CBqsYgrYrkwyw7LgP16Rj6NeTkLdi9iBwHCZHC6ghvZVGTRWQo2mrhh",
  "key29": "4TB4CTV2MgDsravZp99pySR1YPXDTMZMFnvV9AaxdLa6YGjMfQDk5VXEioqHNZ23JP6wexf9Km4Bvn4kfGGcXZrG",
  "key30": "4Kfv8uD1YYDNG4Ysfxia4HY2DdWJ138c4adu4t8xNtDJBk92XXcvp1uHGmevPfmRh4LYbv9LP2W8YLcNfXMwGYJr",
  "key31": "r4bb7BWrZhtm2E78wuKbeZM7AD9ggarv8AMPxXy1w9MRuWLfkNWGcLXRuWiniBhe8mgTqMAn5w3DqoFKVWT33hs",
  "key32": "5x6noszfLULTDkvGGJjLSBvSwiPMJcGcw4kmEtuTvkyqagznwRqcUApjSBbUc1Y1wpCU7cVHvEqKtHDfLLrWH13Z",
  "key33": "39ceLne2LKFBXiLDm7BBTTqfBj277UWHMLZknP4TGNwC28vpm7nxHC5PHFydmCijN9m5e6k4hiHkqbqSXvkRzKtX",
  "key34": "2EUU8T1DzTyN5f1n3n4gFU4qba4ii1ay2LUGrMLBe2w1vEHvcLie4jdXqSC7B4usPoWe1yJaFj5dmEFEe26CXhpH",
  "key35": "3ZXsLy5Ao7aEZEFYq3UnZ15bGfk78hgG1xyLhT2fSEheV9jF1Js2RBwzzbf65Ad94jCvYUiZaZvfUeKfBWifGfcH",
  "key36": "46m7sj4pFXzv9d1Z6HLn6fyZdruH3w14ZupwMhT3xeQCe3hvx1seUUohZsqjExnHqdktRsqa2ZgDHTPXdTsuKqzN",
  "key37": "6MTY7SGpLnCWJAeUciejzMv4SbkG5Zsw9xvAeExSBy1wCU7KgfCBSYt8o5e3AtTkfaLaFmpRw4w7Yr8514DMN9y",
  "key38": "3EBQRUiU4tojNgBHk4JQuL8XbgZjg4sjTXJRhNB6Yam6YRTrMoz6xGkrJZ4buh9p9TQEpUAGqwtzDux59BT6e2bV",
  "key39": "q7LMxaM3tdfFH8amgLT9rnwRzvWPLW4VcBNgxBNLryrPr2XxSumx3ThUZNjT27R6B61mjUiY7DPvqiB3aBVv4zm",
  "key40": "5Nc18Z3Zs3kArZrPQ7eNeahFkW9KhCmVXJxNeYT9cb5m1YmakUGFogerP8oBDiWeTwYjUc4eKG6eXyQUrsYSZxyY",
  "key41": "CF83LnzPkeNbYt1WqYdfhVFaRcFMy8n4LGxURG5Yfj5WreQ3xahWiv7LG1sjEqcrdchgTiiPM5j5UPc4wzxdaAL",
  "key42": "5oVxHpbKddvhkFF96nEvaFPG9jfPThGw69MEELgasZTydG8Cqcudh82uXFdJBYmXXkHqdytYtfXPeKCcMxaZbgf6",
  "key43": "5qwDEyWTm8G25VsX8rcUJ4rkAwpuMaM1y8UkRCKQ8NRkqR6LsxR5QheeuYZM8r7vwRF4vubsxzyhJvav2tWqDbKe",
  "key44": "5oqGdPeG5qpubLJ1vpARXih4dW8sTL3nFPgqyLNmvfEnSntUipT7BTDfRSJQ52n5GZ24zWusTWigKLPrpZhLJnqm",
  "key45": "35itNodJJVyVZ1j5FhmzodVkKn86iWPXKf2wsFPzdawGpnCTnU2hEjNzeEoR6jg6rxfs9NFUhtBYiEPkZAbVztsC",
  "key46": "ypw6kvkd3yt7VQthwZHWQuN9pebcFKGa2brp3Y9q41vfj1XGsn3sfpURyxinc54CEsdT3Ujs1NoGodcEDrZoHJU"
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
