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
    "32TXJueQ6SHAqUQdUVprZL5aL7t6q8nAUcYDYdCPiHT3HWJJ3Wa3mC9rbHEVg8QGmDnWoxhRs8ZbhUYqAb2RnvNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5qXGcJvG95fxzmSWT57DB35CsDrKZneyHPtBuudsmiWNWCYbELKjqax5WmpzsFQLusEE6peBuccRQpMWTsmEbJ",
  "key1": "3C6o1WRXvzv5ErQQhn7CfCCYnYPn5hTF8xWjMLmAvY6H9v2sP6utEUmvpYMdrhNuqsRhQCQFbwgXZT7DQXQ9YW1b",
  "key2": "2AyrdcedK6BMCZyPX8uTiSahUXrpMnR7k24hW8R5bp16ZUkCtorkRJ61LMgSPmjWVvfAtKsiHY7AUVWAAV4Nn8Uh",
  "key3": "ypjF2uy2kJdnVWyj2cyvpDMRZEH9wgCEp5m7oeu4rDfEHdKz9U9NiS5KBpikJmw5FWuZ4NNUvaqYBReefpANA7u",
  "key4": "qpbywEreqzA4ABPhnxnW1LPehSCkYqv2FXs7ckkaVwyf6TdQgxpRcMPNxVuY3o4sWYPfkUezcYPZeR3vkxBPXqk",
  "key5": "2uSbRUENUaxqHedr1PJUeDssmMbxuheP9bVG26YQ1SuLBdeRLDQUy6FVWQhvsJZJoKmK4iMU3E1PtuNwBt9v1bs7",
  "key6": "5wjXCNjoKTvGJVztBZKcDo93Eiwwv2DxfzgU3b9jqpGvyr5DiT3yzsnf9YTa5Scu4h5Z9N9iMxmbBmAxFRfvaKM8",
  "key7": "5DUzjVcNTcTGkffJxwog5MkgwujdVGAHzdeWb5CoAi4MUrrJV95E4vtR2ipgvijVmGFNPfMxVAyCSfF9r6HFYLuh",
  "key8": "2xWjPA286zRas23mtJFHr1kdMv6ND8Xw9JhdFk84QFcCKykjLEsjwA1rR1MaB4new7q2QLbZQdhZ2fG8myjyrZRd",
  "key9": "4datsGDVowepPsyf7JGFbkbjP7QpTnbde8W11wQAoDMTr19o6HTGjKk4DQ9KRf7Jv6e47ZdeSDvW1wCNPzugnSGE",
  "key10": "5MYANzs6s5AvoBQru1vmhRZDXuDTUvhj3VujNup6KC1YKW25wc8MX5zK1V2XSqccAEoBvGgRmhsvMvevrW36nusY",
  "key11": "5mu7hmQH1tVw1GVnTFBfhSzQEmxwAFYS2C6f4UNoCdtABWEq2mdzBujcqcApxEhM9r4UYtHr5VumCQebbworRsdM",
  "key12": "3RtCjPHewaS1ryxU2XDfAWJC8V3WYt7GLAwfof2YTB7gqQHUm4XRqXUYMNXin41XRdWzyf5WAGwUvVbPvauNtBFn",
  "key13": "583Cyexvt3fpPKEerML7eQ37e9m9n3gCW5MUESesuGbaKrcAX3tyK3XS82u2CFJxmdHPwLNA6ofKUcwyc54GYF3b",
  "key14": "5zKLou2933AirRT8RKsDfNdA11UJXvX5baC1Ghs8P1YM47aEqh9ViWcU9qEYsck6drokkjf5JqrptgrvxeSLuaVW",
  "key15": "3Hn2uqcj7mSBRxoHJiLTG7MT3nUPuYkCV47hXmqhnHaHLx1XBLoWw3id4HZznHGr8krN9h1usbYLXU2MWjDNmKHs",
  "key16": "2nvZBKCi6Cc7sHYdrAbLwH8UtnaJurk1auAjgfbms7WTE9cuKw8cEJMSYtn4M45xfQxXxHb1vfz14ta1eJnyXY3F",
  "key17": "2SEmJ7wgTyfYj4dtJi9HWzgnrRrZVo6fZ3aBbikMETn2vXUDXKGLP9YCeAJ6U2TpAjp2uLn2VtS9QgrWJ6MEjFZz",
  "key18": "3eEmRRRKmwqXQtgiW6esvETZZNu84hoTWMTyGpfDuKuK5ebKi1qaCDQ2GBFHXEdDzVWBgwPRgXLnVZNQX6TrzN3u",
  "key19": "3NLzhDC8GJHE6Dg6UtAQqjdBvbDVHWHotVQzdEFkZpsRaoiFv4XajGZXbjCeSngLCjRLAPRhVnw4vNW2awPHDbzn",
  "key20": "4wFtTk8K6r7gNn2LKtHLX11WBzZmcH6NZk1GUyEfZTpJzhn5xKHS5Et7hxpqbBp194F5z494Skbzv7mcZs4hYhUd",
  "key21": "2jZiVWAX9W8PQpBKBRmGPQXXM428QFL4P4VpEFYdouWSuzwXp7GuuM6d524onARasVNXPoQf4GRQ331TZoksYsDE",
  "key22": "2hwDEMjSyajviNArNY4ZuWeqsWpXFVkdXmwKvC4YcypTx9USYHkad4QEBC47weiXEyTZR6zbYLjbW1zQEeDkKouo",
  "key23": "3qbtVJKiE7h43vuEeXDZPD54kwkoDnf9GKmCCXBxmr9Dst9m4zwpD3jDe7pGre4za3DGr112nP6weEe25spBqz7Z",
  "key24": "49fhdRj4f2REQVypsqy6muWVrFbBYCaVVhWYMTvRhwCxiJPN8KXGXZvYbSyKs1ySbYpHAGbFWqkK9HvXEx63n4LT",
  "key25": "524J8UHAyP8cZ2EKLjVP58qNNmkkNxfv1MtfYSZ3vjGYVW5KeFWHbrTT5qhg2eAt44BhTf9iXLfGCXgLsU8eMXSt",
  "key26": "2kH719nj6paKnTSiEzUVKxtBjH8RJHnzSPpNnxbHfWibgxHXdHeX5DyWk5dWVvZqs2R6KWtgLJx5wyY8wC9whpTM",
  "key27": "65ec6LfCNKAfBg71LUdb8E7jbFRLRahsv1RC9HAo4AMtCNMgeBu4QJJCN1NaKiBbbAKxzrvWTUW9eVQYnL2DVsQD",
  "key28": "3GSpcwoSAc18GKY6ZxAmSauMvHn8Z6hAM3V5ybkMxEhY4kd3ZPDd6Z19gbwjyr62JwCN7iauuXsvNh4KoSPvLC15",
  "key29": "5krm3o6coDEDmY4XhRnkKbMLBghAVjCBpBMLiS8YxiJaVh7aMVY9gDCyBFDRMkqtUXnEm1fbGCFXcLJkWSHxhLCS",
  "key30": "4VC1ZzxcH7tVM5Y7Y6sFm5LY9yEpKvBxNXczpvN9xsv7Y22tJyTX74U9QfUb4p7mftDgf4GT99dHVjMAsSSqG4fH",
  "key31": "35jDeYosZuFUccFZxEe1zG1yA4DAuBJGDiJJhHg2VDTkFb49SHwiTHpFepsuEKqxFmhjx9BLEzFKkv8FpwY9t4QP",
  "key32": "62uaRVz7M2omdt5nheK2M6a3Q7eS72cVCEM5uu89WcmLx1U2pDARfFKSNLDvfFoq4Zc3yVR8YybnXMGcFK9PpoXo",
  "key33": "2dwB9uRWugnuibEQknqABsZaHan2PdxLfez8vSVHdVzLos3DSk4K2zB6qzooVacYzyGaLc8Nk8axf3kk255Qo2NR",
  "key34": "2yKP4TPqVTosrVedtVLU3aZmex82URPrYs59S1GA67RsNbs1HCv4zdvqGkWZ4yT61LL6s6UMEggBEYfEQ1UiUexV",
  "key35": "4tz6xk5KicAubywLSzdYEDe4GmhuNuZdetg4Zby2rEEWoE2MsU7Gz6e3ekkjofKHN7kmmK183pYCaPPkV2qvRBY8",
  "key36": "5of3gCi3vYHHoJ7baCvtbHzgj6iCLWeH7ovCbZ6bTHPbCpEwgV6jP1yUmCCYYyffP6rUijHnfvoAHBfYshDoGjsT",
  "key37": "oxLrVfz3Mqf8BP1zjhxD59N2UF4LA8X5nATF58S2vDAyyXtTYV7gWK3L6QfsD1McQGpjBww8dMHLqppFAzTKyes",
  "key38": "HzHB9PYaRJGYQgxkKaXSQ5RyK9LZDYQkLLky9jDtU6JiCLdtmWUgaVp14sH3uKJmrj97cU4xn7jrvSU2uboGBUU",
  "key39": "5nhrEJB7izi5vopVcpKg9zEQ3jwaHTvWKQ1etiUbaSQwJPnqG74UpQ6G4FRHSfnj1hYMy9bgrL8vnyWxH57tAD9g",
  "key40": "4TMeDdtmhpSY1nMi8bDwu4wsU9XjrmX5pmJwLM6HhXkz3aJv4GnQFHiLopi7uXFnzt582AcUYTnzpP2RYY7drNYb",
  "key41": "4pbJ3ZmuM4yLfH9kDM2E77VsMA23ossaepvGaNjre4SEtZXDsg1WqV5NRkUCkWVjjbDDT1U4u4a8wt8BDeFYj3nj",
  "key42": "5XPqowuT4DJ4yaYjuVwbUo4Kdk11HSTiGAWPrMBAeHBWsQpfRyTkAdTEeiLbouZ3cN3oz3LBiymiSmc6jkXBkxQH",
  "key43": "2VXfgRFBneeuMJ96hzJL5m4U85Jan5VLcpUsxcSCh2Es7tv7Af8TMz4psr8oCSm1UNiHu6gxTjvFTU32M3BCGSud",
  "key44": "2QJE822pERhZZHNoWsd5pibuzDgDohMy9Ay817wQWJtJxB97BkTzK1GfhC338BUGTo5xxY7xy9dLJAdWu6RTzsc3",
  "key45": "39SyyhAnpQSCxpqqCftSH2znq2WWdqD3bSvFT7gn6gP9rmV5ytjUsTcTh8sjP83ePuQoeUwtYPgxszLZM9Zcfev6",
  "key46": "3dRCL6iHoANRC3UW4STC9sqHNDjos2Wv5kS934VC1DmwhGzp7KbJPtM7HYSz365iPR5oinjCFPG7z5ncYoDjE6Uo",
  "key47": "4gVifKWuPKS11zavCRGxGh9D4RvaciBy85F3KU62ByeuvYYE1MuPGBXk9UawmoTTr6NwuJmo8YbhU4PQcvwRU1Co",
  "key48": "yCF5YJYK1g73ssofxXPq9ZhkAFcv86uZe32kd3NrZ4oRGfLKWUjCXoxMjwtG2Qs4GxuQhAUFn7YyM22NgCB5iQi"
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
