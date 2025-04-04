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
    "4eR8xtH4DEuzQtwKW4hvXGFEiom9cfe17gYRSjvXUZ3RCgmcRiySmGDRtX34RuAbRwRmWVvWk7hPVp1m72GyrQ3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvwXJTMQjqaUzVyZq232vHezJ2gUgEy3dtBRJ9Vn2KieUEaYh1vZuFd5S2iaEeHftoErYWYKvG3XzhTgU2KBdUo",
  "key1": "2Zgx7W3AeDNj91iJ2aBH6vGzAWKWVoLA5Dzs9iKzeCDQURbkDLBJGoPDR3XBvEt6ZH8X7tqokUzXBb7YnkrEBdKu",
  "key2": "2ce3nvUEnDHtLTFU6KSLs9btMdrEE6AthLiJN76Rh8Vbk6Lr2bMnJ5nVgRhfq6ywJ5Bz1Ao13BuDeqkcUN44C3hT",
  "key3": "348w7jivyQVfT9Lsnn1dB816yw4eDLvQ1sP8JJtNFPnZR9NVrN6jQJR5AyVzSfz4YtDzhLqbPkyv3fKFvx3ZL5Li",
  "key4": "5bBefy41HruLYnma4vTmqnQPGEewZoGMobVtbHKPfYd5DpvWaV2rK4FRCZSYU3KPZEtCAKfpgcwd9h8NWBvG5wsd",
  "key5": "2vGcCi3KtJXumzGNEhPyxxFW1tatDmoeTL1x3g7wdCSraw7rxigVNVsFFvm41hBbKPRfT2A1amLaJk7nYrbvGE49",
  "key6": "2Qe2gVtGorB7JcMGQe2DS92afD4hAYAYnRQn6VLv5b46VVtAreE6ErwtG2tS32URRs4y1Nd4Nqp1KNuCMcseUpdr",
  "key7": "2vtkiayT5aqBbJT74SAFVdYk8hsqhuv7MUARksXtav6DaKpVsAJpvCwDwqFSVUQd6pUgYoJShKcLYfUxuyTuCSi3",
  "key8": "5McnK3KaCtP9PNpKDy6aKLaZBVs9fdvYdSy2Yx2rk2Rj1zoKZCC6P19D8PV5FsEdfKyopK5bW8KeRXqDSiKQxKKx",
  "key9": "ziRw2dhhwVD172qjPDbenQciTr7Uem7scLKPnoi9xQw2HaVfJkawjji4USrHaNY3iJjGEud1MRNiMbHeyiVreD5",
  "key10": "4B4keQ6cMvBJdhhKBoavqRh3szZxKoP5XTEhWVZ4FK4vKet9rumH5keFztEN62yFw9nGWoSkQbXX29HMiEuaZcTU",
  "key11": "267RcKGab8VCxjnrCV31pbXfzBhLvyRCyuFNi3bWnuj36cWTmYKSrazDtz3Qo1TQZey3hmekSYvdZazfQg5xhDpP",
  "key12": "hU83BkvSA8tfH9Y8V13hdreperQtGr5LWsBzsWNwLzbgbKNtR8wtZVaBBfVWZNmQWzsaGAZjgWpRHLuv7jmvjeq",
  "key13": "5notpQRwsPmbk2FAy4P6ReHvEpQcWVeXnVAFvGPwHx3ZZwWvAGGkUjYJtSDrm1hgH4LJ6DT84BauRN7j5hQTurPe",
  "key14": "5v6pPQnruTKmqFCeuEtnmd5VejwytdpL1LGLfGuq6UxXs3au8LFAgEFQFagJz9yWgBZzDMx1rCm6MtEpSzQLPEhy",
  "key15": "2TJd4traGj3gJeueuMFyZzyTHZPrmTDGh75dvSofbgP1Fzuv7d4ToG1dJcqK6HWSVSiY2TKfD4NwoaFebE5t4wFL",
  "key16": "47F2igHgtT8XsC4AQaCecgSFZXfrSKZzrFoT2vdSK9H3dMJ6ovx8JDfTfEaFFGGzqK7XfgRuNgU1RPwK1ZMLxQiG",
  "key17": "vSrHtyZ3oRuJZcXdQCjSKS2z4F2UzrjL8iijTHHCp8sQsk9EUQG8Xx19g1ZcCTjrMsuGAxAoPBD8vMBW5H4o11n",
  "key18": "3Hi32S4pGp6iKzb1NdLBZWvY4eqe7AhwmUHjwv3Hyn4vcxgVkvJ623Rxm7aAkaythDo1VH8HmWRHdGuiipRaQMSs",
  "key19": "3audgPLZXcWbFcuDeUn2S1yDkPRD9AGnWv6QjcidiPJpSb8gUm6E5Kgk7TE3Wn5BgzpC8TXpghTa8wQqrTkqojQM",
  "key20": "3LEnCvtadYDAs6ucBvFDj6sREykGgLobkLjECHFtaGiw41YGEMfyJqNVhN9aTaVtpmhLiDr6L5nevH75yKZ7aKrQ",
  "key21": "4LMQpyzUwfDktjkumjLXkDM4M6BJSXbrDAReA3Q55fDBnWkv6BAZs5AJK3WrcgPx5NW97FQwFVwikY8TwPG79yoa",
  "key22": "gHqhLHnTN5MUepHppdvZM8HPg3TM9no9Yn9L4WqNqBtohvsdTKubCGjK36omMacTnj5CNtoWvPqUiwZe5dff2cV",
  "key23": "2hkayMUN9iwCSYK22wkggX6dGLF3ico1cDDK2nBLhKHRpMRNH6z23eoUy6wQvvMAw1mCiEZn3vt6LAaDQcNth8tR",
  "key24": "Mmh1Upz8HVnm2DVuwaLbZy2XwunPouYFHC7Ftg1c8PCgFex434e83RqbQh6m8RVRDA6URTvQoLo1qFVV15QUk4A",
  "key25": "5eKMneakmzrftMoMVU7Gnnzuduwko66g3P1AExBrqBYCqxYowmjzcjnvd3SQmjaZkDPLFoiGRA1C7WCy9yNUr8Yj",
  "key26": "4S8zUns8Hm23BvdLu2gV1DAJP6epjZEz1VWX9VszkFcVPH2Epueci3Lx11qFYLfoWMK9w7uqKjwW6PjAFHxvUCQP",
  "key27": "2qfGwk48RVJRgZQcm9awzsGW32vydJTvtRNbczxQf5KbBoB9dVVDReGZ7C9D3ZArtDNdJLKbW1HHvACgR5x86BrN",
  "key28": "3y86nTCUTe9atqiAV9TiA81z56HYrxPZDuqapZQ1B4jtAED9CCH1J43w8QB8TJ2bYVSWJUFqbii3GsEQMZPd21bj",
  "key29": "xExvcNQgU84XZriTUcgVd7a69fPWnNAUS5NTTBn41XtpR4foNvuX5MEGEmzvFXBLGqn98w7DAdVkVsMoDBsY9Lu",
  "key30": "5fVrQAAZxEqX3pfbhmCqySkeqZ9NAPdhrhpTasZbwJwW2NPPeteG9TzmvwKv6nkaqyi2iVgRHu7vUxpTftpYiqXG",
  "key31": "38B81BwtznhFB1ViSYJ3RNZWRpka5HPLekHa6MUiN98bX2MfHdJir4iP9KLqfWuQSWZnvR3ntCmJXmM7Wrvpkcea",
  "key32": "4GFCKahHidUJcFgBDmdL8h4VX9C6KDdKY4Jh3XYZ1dB5A3dHQKJgrMNstRD3Uj2Bo6cKQigaeu2tUnivyYSQvU8i",
  "key33": "3QqehuuHsKo3Jv2jPA6dMPCM8Mi1Eh7CsBbnoftSya3RYUGXWNnwb85gcidrPMe6uzQWoHs3HexnpwvUcjtrtrDB",
  "key34": "2GrsDtrwJvQkzBykcMrV7Wu5LMvK7ZrMGCBxdjLG7YqfXnPpYwewNsApcuWXRiPUT3N8RkNep4RrHUz3TBZVtjAW",
  "key35": "261Lozt49ASA8Gmah4A8SZeFkPfZaGvoC8EQ1SciT53axp8gEHyPzeayVbSiCm3x6tyFLH6CshfNaPeZB8iCqdDk",
  "key36": "5Um1V2L2MGXCuBgmkMABoftdbbXgf2iV8qRxwig3fTXAMGEKCBHSJkY3CXwL5FjKbTJkXJbwjsjsqWoZDg4HGYV2",
  "key37": "5DZ5twWmZ7KMm5wT48G7jH3tsthzVtBP5t32519rKZeiuUqmZohovSEUPquW2E6U3dKTg4irYpRHp84zHg31XwsN"
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
