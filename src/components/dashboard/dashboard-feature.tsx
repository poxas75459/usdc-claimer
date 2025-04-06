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
    "q3HfgwMco37bmSFfsBQSMhz8v9xGy2ZGg3RcynAno8anqqvXHMfPoMkunptjBszdE2G7B5UsRXcxQ1jpWaoSYuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iqsep9QJViPbJyz8wLvm8KEspWdgcyTxuGeFNdRQgm2UKGuvCtD1CJNs7bEYz6nAFhp96et28wtL8Fjrkhn6fB6",
  "key1": "dShNhPFJMeAUyrWJeEhBSSrLtmWNerJA5yxhoWV6hLkbhhYX13GSotD8eYhEL2mV92QmNhGev5c6KZHEtpqAxvM",
  "key2": "6nBczcA82iZ7abckwS8CfHTmX3ybxFJrj4Wez48sARvg8uvk8TawPS9S84etqLgzUT1BMU82EoPX5VQuvQ6KnmP",
  "key3": "4F9W6dAXutMfi779z5XSV5KznjirurBgtyxJUv1YsJjmd6MDJYpry1v5o2RSv2ZTfiZnPPu8VENsHU34FmX3JYBA",
  "key4": "mY8keVwdq7ntPkhQ8MgfTibjU9XpxVH92YEiSV3qwF5qd3DgxZ7HeAgiuNTHrUY3ZX4UaGwkMf3LSLdtu3VUXyk",
  "key5": "5cKN3WQKtGB2V3sTF27734MRqoC7b3GumbdUZ6wofqZXgBgvd4rCkcXrvRohCXx5k8jXV6wk3qnQjtkEY6p1sRYq",
  "key6": "AZeHSR7M3SypcfUJk1YWngmvMoxPw4TGBDtKQtRv77GK94deZjfX8AqxW2qMWwWAQeGBNYq3L8bkbXjT7qcsDRr",
  "key7": "3D9AKo2hixBxvsMSJEJXV84fC3vX42qmcfYRk1K71gS3tE8Vi6f7AMYwJLkSReasEv15LuGviiJJG7BWpytHHdXX",
  "key8": "5JnDwr1AZVK5uERXG3XzMsjpWqVJuU9fiiptdw6zyddrRHvDv395PNHdzTyBYNeVG44JRZ96ywiTdGfW76h5B5bv",
  "key9": "5pnecHyYFYtKioKCXt7kdAFKhT6kir41mmGVLJCAx5mv4cgmpHPsFjy73qDxNADncX4EPs8D5vWb2dZ7CMcffYp2",
  "key10": "2dsntHEy2zeb1WBzDay2pdBhzqEQ7yxB7hXr4QULi7k6RxL3LWYkaXQJruxLFgwYMGu7Xg4pcwURuMbwPbX6dXA1",
  "key11": "2JwBwR4at3iF9QPgbvxzi1iE8Mzviok6y1jFPA1AdDtWoLpn2jdonDY3Mcn3ntegqtLfRoXwBspwmy4sb9PAqrQs",
  "key12": "4qPgjUptqpdMG68jTgXSvxYqYFkFPewQ9gxpudjqim2sPTYKgeDhZ81BudHtzMBMuBVg92LrmP7CBYweDCir8PDw",
  "key13": "SAPqN14H728Xpx4p6scxsfb89JtcTJXXYVtMTvWpi4DHY1qTpgCMNyhoqyru1GbXkZt2dhiMD1xz7N2MKNM1Yk7",
  "key14": "KKWoSUgjYeu45aDabVYDrXbCMmtKgwAWwTq7ALaTviLaeeeKxL8rTfo78MG4nor76oBcsL85o9VGrL3abRRSuVY",
  "key15": "38Ff3kkhPVgETZMZHuDs8AzhULhLUZ2wysUvdEhRvYo8nTpg4WbwkEqfZMNiD94JNQVRG2YzdfGTrPvattGqqjNi",
  "key16": "5BfEQaLYhSpkz3CJsG244SL1vS8oFC96Z5Si3ZAhFarK8TJEGTDGAqEoJUV6move7bf9A1oDp8jqVvPGKWeYqN3E",
  "key17": "6Nx6uscX9WozJ1Rj4xLPB4GcZ6XbxvykhUL9Fbu9uDkcDUSNKJ6UYzVAfC33yeeMW6gba8WPHYntnKKipiJcGL8",
  "key18": "2VZW7Lx2eLjvKbohTW5emSoK85EEATyC2kEJXk3vQgRVZRZV3to8ew6hWT2nPdKaqPPEArkxskjDxU9AKeX6MEHG",
  "key19": "vzyHyqLfUEmwuZa2j3s1GwCDCaaWG9TVEomDvczvrMq42wiuHJMzpuey3W5g69NuByoVN325oWuzLT9qY8rD9zm",
  "key20": "62RWE2AGsYn7F1acNqpyB1HxD38BQfUm2xA81FhdE4d4Q7VF2WiB6UVoCH2UpaemVNKGtJbW1KVEc7QTtdo385bc",
  "key21": "BkVZ66rf9exaLrwAnbuRcSGMVvVvLMQc5qSmMsV4P4ytNp9bi7udWNY1zVpx9Q7RoFFBBajrgSgd2XSgkvnCLRZ",
  "key22": "44nYtoBwzR2F5Fk54UL2ESu5ppB1BZw2yvjJHmi9ao4hVcpkamnYp1dkQUFYXHpxLzZow9Tv3AWj4UEEencTmWqz",
  "key23": "51Q7KbwGJb93EGyUt3QtKpNgf6K1HEk2rZNej82we2sR6RdCxi5Wv56RGFxUjhfM13WGMLuCue62b1RVSQAjEZc4",
  "key24": "5YGnvLy6b8WA9Hgm6Egrs6MyrYaX9qcnZnKkir273Y72pAJ1rsKg39SWP6FUBv29HqY4q1CeKkP85XjWwDc7FBjA",
  "key25": "Sco2ZqJXqfamTNteB786RHsWTDvvv3mjxh312ACLd6EV8d6KxXkKNE3xfgbUta4EHXbJ38cDkSy1tSCqMRppZPN",
  "key26": "5yFSUHQLNiYv4Shhjj8qnnVRPvxAAxYejQXpyGyZAQ66rP7Pc7cX4tJo21fwT8tBNSX2Rg5MCR8a8wcZ4sxRTH6e",
  "key27": "25pStw5yfu4M3riRpi6LnLX2XUrGbZaBATw68QRKAwuMrh5XHfDb3yK1trvuBxru17RiizqEHFQWMsCRBNvYJxqT",
  "key28": "3mYRmvE5CjjUSUeRsd2wGgWwJH1Rrr8sdwdW8BckcLpyfbWsA1cfyi1ujr6YDLeeaqo1pUsW77hzSHwB9cLMUVbU",
  "key29": "SkTBtGiejQjTE3y258khTpQawq6hPwfKzMy8JtnmQmh5PgYZdf61jFDyN78Yf6sYMoMQYzLvGWdPknPNGH4YvqD",
  "key30": "jgvLaUztPmKjiEWZCvvB76Czxx8E9ANZEBKbE4Q84vqnP8rQHDLJSYKLkymUW7kXNj6WEBYUERev5z6a33V8T73",
  "key31": "4qXd38shLkMxwGPKRejX2RV1zTWPtU55bsnbKfNAe3k2f9atPkteBe5VkxgBweULN3KC1midJp8KXvdggSjLc5Ts",
  "key32": "5LXSqQyy1N9EEuXNQXAoffvyUpWH2QwJbjMahkmcQqwURMh8rUUKJqKNA9ZiFvCNyLfFBguJpRPUqXEQCaLMrG2o",
  "key33": "H6jsgnmmTDUgJWYDQNVXAxNkNdWqdhvZVbKbMAfwfsHCmdZCoAUiwqufpTPENk1HiXJgG8rMZKLV8Pqa1TJnANU",
  "key34": "2woSdiYdVDoy3vAnhAsoNBaJN7TCdUaqiQJUi836aPuZKA6Mo3BsuMczujvvhgPmY8yNrciSXicwaiFfyESfi4TQ",
  "key35": "4RwrGvL7uXtJiXukJpB82hhQ9XFqacUBkcrup3dU2aKqdVARkDNjoSnVBSF69ZrUksDUNCpH14KnepvVj7Bv5YWZ",
  "key36": "3EfQs2FrhXb3VKNWfXt6pRaaXkRyrfQ3gGFARsmnrKwCXtqW1YZodKUu3S7ehYKdoYzrU8MGBLzNfqSpc8x68iJZ",
  "key37": "44kwE9UfCqFArsSAXy8GPJoPE22QRbkachh6ooCNoWfQyiwvm5TicRBCMMC9rMpdWWUgLooCFdcnbn2ARzNYHbAY",
  "key38": "2GHXtdCZJ2RV9BwToWzoVu58sarMU8FoChmNWQmJKERnRnCaNG7TFDXGzPmv7gJqxsEPBkGpaJKdnoN5zC3ZnMs3",
  "key39": "28MBi9TJvxUkL2XTvKXLRJods1162VVrnuFWqjvxpPmF5BwgvZMfugs2KWR4Kkm2Rm5N5UW9x7q2M7Z6wdJe65Mn",
  "key40": "5K71ENU43ZaL91f956ABSAt8y1khUt8cEomGH4PaJSGhDxsJeJrjE3ZujVaBDyMDkTv7ijTooD4RhAcKtLzP14Dv",
  "key41": "2srvfkGYgXcft9Fjfwiqyv6pKb43mizcT2J1sRWCPHN762xT6v5hj9q2osbctosU87tm8s7qvKE84jnM9AanMbyE",
  "key42": "31d41MfpiX5BJfUQBywJrZqxzyrKfsuwPhU1r2oXNNhQdeJTkTWpunUpJej2X2q65TuocMVFsGjeX5dJqfDUka8f",
  "key43": "4MX3qTT4ARuz2NEPkhzNa6MtrGVsPPMUwaKukdSwSEFku2wE27Qj8vrdyw3oXLAgnXGXS3S3MJiXxK2huY8SP8k2",
  "key44": "5sRVNgM1MCFV84RTdjMvN8eYxNpRsuV84sCMsvpUsmfmDAEVUTuwC1p33SXJEMYyKJzjoa3pdEK2w2c4mE1MsefG",
  "key45": "3rUwzYW6tUKJeChRpnvUwkm69rCaaieCxwaM1gnVxXgAQ9d5Hh9enc12aJhVuEb8ZkFUTFnf8bD84Kd4iB5XeZcM",
  "key46": "xu4csGDEVYfVX7NForCju64cGNiEZ9BoAF1B38b6Jgrr9Gos8HbXaitz5W6zKB2ZWK5m9wR5MnJnwTE5FZLwYtm"
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
