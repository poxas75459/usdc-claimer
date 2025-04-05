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
    "4FLJvagjxbRYYRu86R59hR46ETFC8MRXDi7dkJZ2iaHRjPKKQvt7dW1LayopFWnEdJdrwyGVKq9L7F9KDENeMH3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gh9oMLmn7jhQtJeyYSsMdg6onX2guPhJb4JjiExpTxSKMn2ga7TmwiwbCFeLpPSHgCygifJmLfDgV9EBKv9R6KG",
  "key1": "srKhJVrrYrsXCHtYNKuysjmQZUj8kUQqMcahDZjNbmWgKasSApbRHaPiZQGTDsB9DJ3GAs4X799hoNQrxrrJCwx",
  "key2": "419MKrsTCX7NPP7gaTiqEknUJ7kfexCJJju3TRJyNBKESHvbMgPsZjQUEnXmAWcwWi17jGPBGR31cb2oRGogH3Rn",
  "key3": "65Rr7N8VrL5jy98nC6AGnMrim7a26hsvwvMaaFz3FWUSmPDp49aV1D8Uk1GbJ3kPz1hvimwD6WSnEjkDvoqKPdoX",
  "key4": "4FKy95hALeaNQEiUvhtbBg9nLvAxcB8jKcaMSaBvJNfvP2TtsrA6Qhap4Y6MUHos9okChvwVctjfdV3CjRyCXH78",
  "key5": "KWkJmrireVaqmPpHLsD3ySmWuy5d5zj1WmjkgW4v3SLJ595YBzbdibnBDZSeYVvAJkp4SXYHGjxg3H4gwWeWyPN",
  "key6": "49EGwW1UXvHq36BdeTRQc4RSvui5CUaVgzDFinb3DFt17JAqmH33BRsmaDho8mKHbK1vjkKfYprJbSjtEjsei9CS",
  "key7": "m1gPGc7Vf3DccN2uDvgJjTazxGmeLsa8gndojUkGx8x2ELDutoSchwPpcF11XZhiwRen5RuCuRiUaKiWzkVHpe6",
  "key8": "5HpBH7ZKkpWRLSV3EJjzJkVQ7HzMmQ5P4CkcYwhJUhipVsVovYWPniitjjD8w1r2T4PipNUZMyRRwTMizsyEtsKJ",
  "key9": "4u1uEpycGVkYDJfwcVXX9b24yN1TC5aRRCetnVwoycHMTvvKZQcmXS9Ux9JWZyD1G4NrdHSXJKJmfhpeJZaoJc9k",
  "key10": "5nEWbBVpQbk9wg4SFjmLxoC9qUVz1Zux9JuJRP3rRVUDqi4Ly4xR1xJpPbqnXgf8viYrERB48evnfLmiNXiMoX76",
  "key11": "iAiXw8MgCtV8Dkg5CQocKdCbu64JokhzdcYUZ9TC4xGJRRVzkgQEfoXvj9nHso3CnGGCG9dzCoZSdKJWqJzfAVp",
  "key12": "51YxGxXXcZMUXVW6CHukYXnUggvLc3Zy88KQ5ds3a8FcFsPtgiPs2QwiGkaSoAg7EEwabasHqaQ1VEh9Xjyrbd52",
  "key13": "3wJ2sxTcXUkrnAVW8S64y8DjsvSiNBVrjoBmvb3xBDkaw5jSx6kgRzcmiAvjFFGmvfhhCED6XwhzKpa6RNH6gR9H",
  "key14": "3XzoBV171mKoNqHCoQ36jkMugcPiEEUMdw6eqEgd9AcvwJ6LWfYkAS1U7TUgfsdA6vPkn8uQWAMwtTNSpmBWyj8F",
  "key15": "34oP6uvVHNkAYJMq8KVcXFToccHucbm8RpJv8pXok91AiWZvn9CFb7jb1XEe7PSUWGmAzsoLhcajousNyJi5p5bk",
  "key16": "2kSRAahGwRg4DLq5Up34CDA7sTN7p19LanwwkLsaErWzNARKnLeCs3GuhRq6YAWfRWe8mhgRp9eozZPfGooviguo",
  "key17": "gdqDJ9seYD3HSvgjo5XV2nZYCJCHHduzHTNXwetFfYDauRdk9jZH5gHE13qhaks7QudkWp571TmyevNUJ2Babv5",
  "key18": "4Y32Zabvw7tUiygFXuDCU342Y5BUN7q8xi6P5GvC7YsofCDJmCuhcRXo9a2MR1ifo1c8esWrnHU1Nw2VN6cU623i",
  "key19": "3zrn1SGAQo1UAFnHqk5LYhSRQ4V31wWjhKhArvW2tX8nxPYRY9WdiMicSSie1HxhddGgRPhQRTbKScssNbfPpmR9",
  "key20": "4zxZ92TwBm1ZLgyXP8MvnXRkgneFb4dFqPELka6fkL4svgoKrTTECTvy8itFTMJoHzhMi3jbsp6qTourLNhUPCni",
  "key21": "zfWCf3wnQSazdVFHqEewgWprVj85NnQtmC7cz5tcsh6pKSgyMfW5zsjPiQzZM29i2faYPLGNWQm5aGi5zjh2N7y",
  "key22": "4tMMj5NEi15NwM3VYnTjmwXDL3o7JxYxnaGasW4ViwddY9j2WpRxo3QfdsEciPjngSrmSvc81H4hFzXN8MxnaK6s",
  "key23": "vjjScdatwvvih9piqijZHRChdBDiHTZoLTq6RN8S64QXzxWJuiQcsLPGivYKe6PJPWmgaD8VNiwL1Pt99Y4w3vs",
  "key24": "VcZ8rSAF8rfYzofyKYoZjJKBx9q1uuvFd74q852X2jYio2zRtyHwHMuwVBWvPY6iuVYpPZCoFygFnjRHHMW4vDT",
  "key25": "JgKEnE7LSW6baYHVQfR3RrEt2wAtdXfPP9gLngRDzc73k8B1jtFxURpp6UC1XVyPV1dq5PJANpHaasZgnDjer26",
  "key26": "3RCsGDaKukruVxAjQDhrL6EmWaWjB8RkESbbgrvLoS6gkhdeoSyjFc8cayUYKVpBKY2hi3DQrcxjAXDRfRTVMG3h",
  "key27": "n1eokTLJ3uDrm2DBJrHdm9ekXenQs4EPtdwa3FCPC5xVC8ZNMrFPUvohyJtwKzFvA1pgcXDkZpkS82BJpCdEtfQ",
  "key28": "4cXy47gyobhC8gpQ6PSKPSKtN15y6LhvPKq16buAXjXRbjbM33CuXAYqrtR4ksmH6eFjDp6XuaFiXR4v3DXxxogR",
  "key29": "2Kba68wmJBoFeJLkbLkiMcrPihYc7mXMzAfd5a1CEPcKx9MHiqG1KycZ1Siqrswp3ut5C4EQbdhEbLypdtmoXtTm",
  "key30": "4SpzBucw4KYgR7w5Bm9brPXvTmuehLU43TVv2tmvqqCraNYSRwYMTfUgQWCM5qjUTv4SzgJ2JjoBUFqPsBzM11MQ",
  "key31": "3u5yfr23sV1pAJ7TMBTHf5VqtfKvMpU9zxYprgZkviHZ6wEkXqFNHKnBrb7xwYgb6iU3qmHTtPRETiDd5U3jhNCc",
  "key32": "3YBTDduDqbdQ5QqRuzb169kSu3dJLhkf5mBwQSC7fTw2dSRbMRrw4kLToao4nwf2rSFzU3mr59W5z9rkn8tWRiWf",
  "key33": "5fCfkNoCXTGtdwPpt16S2p5FQ3atoghUaJhbMXEN34kv7JDF3NoMnk67jV9NgvEUGVUv5SQp1buV5WjTPcTxksUV",
  "key34": "HV22r6KbW6otEP5vi6tBm7dFK9LbTNdHahdbtcXQFn724C6o7wfLBph61h9S9ta8h25yr8YwwB6dZRXnErQiAtk",
  "key35": "nDjbJqELjU2kTQbZPwEW1HcNgRQn2uNm7CDdiYcySW3Cdf5BSBNPWye8PWpRFdMx1rjXgN7Tzv3poEcwS6tzh6a",
  "key36": "4eUqAMbcRes6RbafRrzZW7ur5iJyzy9X5qEsmpTaP9pdcStoDB1hW5f9RiFfCAjJZZKCGZrtxfsvtHjxkZJAjwmT",
  "key37": "53gpE3xkq5hVkrdLhvCej177UhCgncdnHeyo789DjaNRBeqqhUcMQnecR6zKN4oPa8HcWW4XcEkJBrpyEiFtcxnB",
  "key38": "jP9wCryEj4jEqsyhn9zrTdQSvCtbimS4KXgUAuzffZuGkU9fuAmouoCuMdTpkHFijh1NCeicQiCqsQe2FQkDzTv",
  "key39": "Eqq1w9yaNKYK1id3hg1HtZc4sLk7q8rQy7cSGEKe8FvkMZJ6QgzeF2d9RNJfPhtydToU9Hp5Bu85scnfwFSx868",
  "key40": "5piAWcxnxUhze3yXrNzy1HjYsh9QkhwEx3LMEvXTSQ9vsmChovtn6NzZuLUieWeSbbHzscJURS2P8VJqTsE8jFQw",
  "key41": "3uyoviZKcfeBt8TyrPkNHBK37EUcA2ZmrQ6WEbsh91JNLtvgRaFgsvMkMM5jDZ2MKyvNRZ99xAFD8d5JN1qpVbc5",
  "key42": "4Us114psN3djY7dTxb8KPxaygtc6iHZzi7qs2jdTBkpzxv8kEoVVnddSTzhKgCDWNYjBF7BRSoTNyFoV5RrdGRx9",
  "key43": "3S2BDcrKXdCZPZzt95MzZrycBCzi8rKbXtHehodntkZf5pieascW8Dabp8DtMchwXPH5rk7SDBdxBxkvRk2RCXqG",
  "key44": "fi5Tb6J6qYZjRhoTic7TCVqcVgxVdJc7k6nHLyDjthM6NfLJ9wxsx8MQWuvfvZRKZuhsv62Aex7aHxAinEHjgXN",
  "key45": "MovnoGPYq5udKz6kd1xURSzYWgwT8MMAbZrYZDEQ91XjmsQStQ2npNfvUApyypZMmbYu2TyCs82c8Y5KujxkVwX",
  "key46": "5NuXSXX4z4q7gx9bmMEvtHEpn3UPtxjJg7xN1W4SpiFkMVQoJn4F8dmviWTLAzyUsPZKj4fmFc3yD5LgBbVkiPMW",
  "key47": "2FGygQbtoUdriP3u3XQ1qd5RTrVcjWTkVjFMudYFsDUCf1Y21q8eiidnDRrHoCL5gGzUkiHiM8Dogc3W5HULUBE4",
  "key48": "4j8DufHNUZHorjQkbsY6XxgQ8SDKkYtpxCkSxqhxLxrrw8quWGMTUE5pX4BmZzSh2cUvpyP8Dr487JRDwZbSs3jG",
  "key49": "4BqBMM7BAwVyGrben9idJp8xNp3cs6u3rdhZmdb3eXALRv1fVF4zTTmGgwFrzQvSS4r45aefixEV8wk9mG28J3Kk"
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
