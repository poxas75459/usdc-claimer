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
    "4DCmXYdyNoosz4ya5HrLqXJtKCFZxDmVBydEyncZvTKnwVEdpbPgtCZmsWAE8CHaXvfTaLX15kgacM6Hbf9n5y2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pr5v6nTfUGq2td7y7p5g2khPa2yAKHmZEtPnhhpUxVXUPDe2GYhQPcqHCmDYfZG6uVJLHu2cm4RwZYoB23fyBUe",
  "key1": "4jWs319RmWJ56BEVTPMSyWep1K1e6zkhYV2L7b3LEjXqRrDZwEqafo8JufcAiPiZhQgK7sWAMU2gCdg6WoZmoW9H",
  "key2": "3bnNCfFqrqwgvu5DMKsYLzgHNf3upoEUJEptrsaGCveh44X1AASfMvdkzkuiqSmJJbFjWoZzVKWZHcMmr91j5s5d",
  "key3": "4XnQeEStn8gRkKCS9cWvVWsopFdHfEWjPmnkjzvcizn2Lj9sbutQCXerb4EDmoa6KX2kXDw9kRN1Kk5SbtkwXmsX",
  "key4": "D18GsQ6eKk9F1ZA9hFiUkCLBVbccVeZ37hvVy3WiiScEpfKr3fxkbTQxjDwZ91UjJ7Tnyp6XcdkMBy5byrc6eQm",
  "key5": "4zjQTLYhAyEWNZZs1fc9pbZp4WTwDsFPWsypoGN2AGZ2W3akiCcZ4kJKowZR3Tp7VtJ4ewmBErhxGhJG62roKCfY",
  "key6": "5s7VUVgmjdX452uau7feqAVeTeWwn86WYwPqK2Y4k918nwC7Z8NiSfJzEpJ2TVnaQfLy5x4tQUQqnUzeBn4a5Dqv",
  "key7": "3XYNTyph9ppndoVJMAfnMPgcDynceTWMeqwZVWhVhApVnTHaa1BW9BhRkyYjxNWGJHez4aaQtMBDxMwonUyqqc2B",
  "key8": "rJhKpBR7h3TmEhfHCHVRoy6t2DzTKqgwbzadqp6JfQt1Eh74ELJDJ4LkpTZDuPEaH7V66gijEQs5btfvdaVbgnU",
  "key9": "4cYPMfGVVLasutnMK88CPofxQN22XngU2re9JdHmR9yLgfEXULiuJWAiHHjQ8kWx9JHYQhGo4zaLS3LRqjcSdxUL",
  "key10": "5swAgcjrdarZErUsNSNvSGd8vtvMA1zAr3bmcrEXMG98DheeaPUMgHqPFghLE7PraZdAkhBSzUARJLARogLSnTFF",
  "key11": "2wno8c4TsJRWxcJaRzt5GvrxHpdVAQDBT3vQ736cKsypwEXA9JUThaHXCbyjCifTXrfZWh2DpWDEDM7Lgv9uidvg",
  "key12": "3GJWxCBHV4zk2BDs5dPTjnHH8pgmYLitARaZ1bw2QhgpAASyxZiK82uTAwmPja8eDAc8bNDP2Qo8fcCrzb9tjJrs",
  "key13": "4qaEm9bDkoEdv9CHdtPrTjkcx7iAtjzK2sdq1cpiKFqv6tF8sBGuto6dNPk7Uamxnnogn18M1XxcYgSEdbjK6nyo",
  "key14": "5x2WxPctMotKVrhgJM4saLHUYtoRWBY8YyYqUG3ZdP6KxLN7WetHKtnSd28weAFiVrYP3NuNqq5uxYQLBh4fUf2r",
  "key15": "3SRSQMRAdVzHemWHRPXpG6PiaU5f58c24mku1kuTyYN4uJD6tkV3WmjFTCMsyuiNovADr8T4E5jZyHhJ2XXW5tkS",
  "key16": "3dJSDyPwLph9R7GeKJjLEzYWmzPDC9zDRUbeswXcDESHMSuNnycEaeTdiXAS5iTMQgjihMFTtboNtAAdp9BLgfJ7",
  "key17": "5ntKbPHt1bgbQzmiWaLV9jPdHL8JpjAMhtBiyD57TGRa7hfwxQxZmVrLnuQ4wc5b12oHfp5hcTcvqdTbreaHc3si",
  "key18": "5SfDRzwxygUa1bAeHFGYWAoK1ha1CCq1KARDi684LLbKiz8V756t5n3qBMo6GadcJtMpMtjBRqQDNWyGt5urphqH",
  "key19": "5ZiGWw6oLG7otfZM8rsNC3c8S79NmaRYFtaWpdC2zQJMQ5tqeAA2aYRhLcNEkJKwxZE9CSU9cYjic5WoEeXWPVDa",
  "key20": "5mRrio7iLRBGSbCRMYnoRW8ji7Aaz1QqyYqPZSzKwdtqv1nj46gFXEZ2r9NcFrjappE8rwCh9feV7Hed6YBC6KPv",
  "key21": "43bKVhZWUgaKZ6zprnokGEiXbTsuYmmjS4ee6MrzacnXkUUGHhUu2f22LCVNHBiEmaezwkPKSEW2ndouPuzkgJrf",
  "key22": "4hwvQVNQopAhGku7zVT4hCjJ6hwFkj7b2CDFVk5J78sbUaTvZFnJXtDQPfoWP6Ddnw7pYs4vfEVa3UDqeZXaCtL8",
  "key23": "4iyTBUsVNQpiNjmLNmRPqwQaa9a5QP7eUmL5H46vZqHxTonkg1yYCBouBsdrB1fe7Ez4B1Ghrt4QgjXS22r2RVjR",
  "key24": "57xeJypUqzBeeurBRAybjgdHSDhqwULyVpNmdVGhb82uBHJriLYk5Ykoqr2NQESUNxXnPK91srs72fcvSHjYM5h2",
  "key25": "3HFXLbSccc1bT9keML5FMC3YkVDmdmeXY64iA5dfhZf2nv4eFsdQqz64doWqyeEAXM6dvNP1mJC4AAJDCZnxDD23",
  "key26": "3rPEb5fC52KJLmVX1DVa6T7NA6hnvMSfEYwHsiCmfEttNLzob2jmDQdecae3tt4zAMQ2NSHf4EqNX9cerbZiAsTz",
  "key27": "5g7zPuQiF2TN6yueaNxdxLLHeHesmZPSUF2y6LmsFKLJuQzftN9nH1e46L2Cmd7peRG9r1EedApvwUMEbsGh5oXM",
  "key28": "2c1ihn9yxog5XyVuhw7ypmHF7hMkCqEr5RStq4H3PmcuYgYoAEAyz4mwm7MTmKtcfSuvreWM9MLz2B3mx29tgMSr",
  "key29": "3z1n45DgZ8k1MTvQkHcr2Ri3tGk659P9M2FpL7BZZ5SUrkeG9b18LDacXx47oHVxJcFBr4FSgiqdP6W2HqV8P5m",
  "key30": "2XqG3Y6AGwSz4U6GFrsLRECtKKVXipjzN17Jwz63pPgH8URaW7JrsAXvF3rFfmn6eFVGMbZDHBEnzYCkZZdajP9V",
  "key31": "2wrMLKexN5R4MmLfkyCWcGQgYk3g9A4Efj9W29NzF83HZC6tAJG68urzyUS8HjCziS1sKziMxEeN32TxfmsBEYve",
  "key32": "247nfYTHDVEKVuxLtqwDkFdrzwmhH3FgxSUNnYA5hUK43PECWdfhoBHdDpHocvA9Q9MiLpeC3idstafxhHEa8Q9W",
  "key33": "5Cz2i4fFYZVTiHBTZWFNmPoDt4gabzu96FrAqhJDwYMfVuRpLTJ2pRTEH8SYACiMzhdYwWyjhv1k7KSJATjQC4m5",
  "key34": "VKXjjUTVvxwmBtxg2r82k1E3Awf6ukYFqQQg6XxvoxZJCwc4geFnm2ErKpTrtQjAj27FWKT7mtL3DBaYfg9Jj4v",
  "key35": "3H6yMWXUhm1jUuQDRGKRsRhEcyULPayFgh7cEtnd3Ui7E6DoZKm6M6mngWv8L7fqVZ1a9nN8YGENcESZBHGEuGeH",
  "key36": "2rnm71M4Djw2w5FsZwpH3c9ANZW7QYXM4Tf3znzwBpvCaZj7q2BWCtfqWGjVPpC1npMgp5SWRFkdq5Nju9KbExxg",
  "key37": "3t3zyFU3kDijvB8xpaDxJHLr7784rPZML27PHtBLuBN5rmpoa2p5rysB7veEMcLPRfodXgXbeSe7omrZe4GMJCA4",
  "key38": "4skJSAh95nt1TWMoqQ1BAhzPTGo1AVTnJgwjhTdfexr4ubwELmin9vh2EW9Di8QfYGjqPPHfYnVV2H4DGTG5Q6QZ",
  "key39": "5qPzw8CHNvzX1ZADjeUVeFQh5mqg6Qn5UvcyUQfGNvcDz3BBVTJvBBjoj8CCzp6ehBhUqEdcPxhrcbebP7tpHQs5"
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
