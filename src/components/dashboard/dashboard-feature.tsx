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
    "3n8k2v7QFqkqK6P6t5fbboNh69Bi6YxABEgkawVuyRHXt59G9nqbRGRt5JZMc4gTctXfHv21b9M9Msk6PDsEGHnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoRxfTTKUHHpa5qRwsgokWFmyXykAnwKutDGNctuJTCEQjSEXT3dQwsgBoxqFKmygCt1tzRg1Sg4xKgMnsH5hBv",
  "key1": "3ytf3oQu1ffkVCi8memyVBgVhXdBmgS7LGJctRn4xtCHFH3WkEy3YqgvH1aphmjM6ATFYumy3Upg3trs7g5EFUfH",
  "key2": "2tCXaFV4W6Rzwq1a5XbFDL6cvp7sXztQv2v6j7Z4WXsiXYrcVe94sBTmD6JcJ8XfaUjyRnGrTJgfg2bXf3iL1kM6",
  "key3": "39LBab1Ykz84UT6LD1SoJLRu3zVCjBzgpVgo1wRAX7338M7qGuviY7KRNaH56G4DKxdbNvgzUfXgowD6pyMc8EvR",
  "key4": "3UWM1Z2a3V2WYjuG1dBrHeEA2A8YApF9eQkznuc9NhPAwR6mQBDPKxcyYVtFufV8EEc7LRzZRCRpGdgmvv4Doaqs",
  "key5": "23smE8oBLm6pm1oxmbpCqm7XqBZm1oiXgggnZAiFaLtq8c1h3Cca4662FuhAzJ3UffGhNnf3X3NRzAQYqQUeDoiY",
  "key6": "G4RRm18YFs6Np1sYTNXRVxx6XssP5Rufw2Wda8cCBqyFLZAgTgcvPxpWHgHqD2o8nB95MpVZ6XnXWYgz3bkdyXu",
  "key7": "2FCF93kRjEwQLVxxjp46d1uZLeMXuKGujoKo3aM5215GsXpUPFhQdDzN6fp3YZUSfEJziU7nZeoHzG3yzu6MQYKH",
  "key8": "3fkoct9pAei4BeyHp25xNoQAQoQocFv1423dev84KerFjW3YdJASekxvAi1NQYQgjKzoekW5yMRAqkzF6uFvWAFH",
  "key9": "5G2B6i7TvNooHowNppWkXSstijJZpk6wPzkx5xY5RTFWG3teaskB49szEBzNuoiCLemRASq94cDEq8ANGZVM5YH1",
  "key10": "31F6u4NhfiSGsAacNVKrYe8XrtJkzBNR6FvdUSANAWFnoE5P59bcyeAU5o3CGBRpTs3bR3kx6GSg1GVaxNML4nHS",
  "key11": "ohTAgTkDaw2RQkr1eJ1CN9pSYdNDZmaYq3PUSwSDobLtBmXTgTey5dza98S8sHHEf8gcC575VSw6cQGMNnXYEGb",
  "key12": "4dXavopFg4hxrcDza3VxaXE4Azfae32U6116z2Mu1zZJhyVBFpPgvAiVnwuWCUfVfqqy6LLKADnPy4p1MZbKtVYb",
  "key13": "39h16UGKyKfuSkmqgmZMgubovaWYoBg9YnG5wp26crEENJ7aLg6REipCupGefLDEv4mHU6JLdPu1oW11ZmVTkBKs",
  "key14": "4Y4B36FxwC87RipPxfUisGwrYR9Y62kNEFygPVDXNYaUBQ6SQLgKM15x8qwx1y5nKweQXF4cZm1C4PzBYfLCgT4a",
  "key15": "3mKjLCikaa7h1aCQ6zw7qyvomJePUNABtPRxg1hAWNwRDUzpjVWfftV1YUah5dzMLfTdm9Aw7c1i7mEJDA6FELH5",
  "key16": "3VEf2Q9stWCqDGkUjGFAG2jbaCajaGzrRB7NembdmbCWAFbfEtt1SFyMjzbJt31wgj15a5mufWuCkqmZUkLwX7bn",
  "key17": "5d68vDVV8KmZsVrpebZGkD2w6TquMcTXmNzMYJZX3xpHUb1UF92DChwNt7NwiQTtEPLzf1aHBRVKrDmPJ87ZqaxT",
  "key18": "2TFMz5EtJhSoZN7QBZtdPkH1PaANHuYdsrHRkgfSdk8Jj6SAV8LKP7Y2iC84gMoVgfpemiMaeaZmqRESqCretmZd",
  "key19": "2NKsDfcpoWYgR4vLvvHtmCBC6nKx3JS3AL3VZngwcSKkXUYbTw4F2yZ2fNQuKziYwnJaPhygZF6QKYfKZFY5FkLT",
  "key20": "5UfvzV5AUUH2hieoSjDe9MitDDYoKQ3d2HNVRQ8Tqu9eppdpraTGQLHn6zNiDJisbjopFY9BtwpoPg7mtEWLHMMc",
  "key21": "nJes6AhvSs3tuGvW2dGCGzPA5DuFCYgSX1Q5Wb99FjuaZiMM3atwC33cNJAmYFfgpVTya5pVLrWHrswKQbHk78X",
  "key22": "3DPobdiY4BdkfKUAXmV7w7xtrGq2SVSgGHYsW7g89T7e73pm3B7gNTTdRBBuftUrsVyEPaNPiDATRyoZFGC4ZzzQ",
  "key23": "3TyojoxkvJ2GPgqxRGjhv2a6kWuifmi4gpNXuW1TFnwwvemnSB1FcmXVXunBQasLgjim2mk2nS8QoX82hGBHfojN",
  "key24": "k2hSpY2znsU3yL1fyPUMNhyQaQMK1mcti5zmpDPcHkZDNz6n3Vmg4rxHYjAUBCRp5ugRUi57omBcLKV8gwPNACs",
  "key25": "4zgDP5uiCv87eG2gbccnwQ8ebea4vnF8ToArtuDv6TP921xMDYyb3tfGTZ2wk4Fw5PtLGD4pbALvMmCjU9xVyFzZ",
  "key26": "4bajE31YtgE1MA11CDrYHa1MLnRgYfwqvs5iZzrgAHfRRfm625CahE9HJkyEUrCa8LCo5UatR6tXeHmg1ZPNL9XQ",
  "key27": "5d3a2Q7ws5E2MunwBvt7MenU9KHrF59NgK5R5ahRvxGAU5zQgHqQFfV3uNaGW2W2yXqna69886Yz2Z6zEA2Zoofj",
  "key28": "33ZPZEUVsERdbniaZYXQh2cP7HqzifRbJsfrmM5GtgiunRNd56mgynwBUEsNbev4bqRvj5JtFdq8PKrroFXAL6eM",
  "key29": "54gCHkyktz48EukdADsk4aCHeSN3QfNyLRBUhBdvPZennDC966jDZjUsa9dYRGJkCJZ1jRj1ndKSAZyqiANcfY5W",
  "key30": "2NBGzzkgUQeiQPb1My9jBXnM89ygWa5H4qeksZZKC5iH6ykhbJCBzef689fJvMYiwsTJkzxPH731j5U678i3DVdA",
  "key31": "bnLcigBqsKnowtaE3nu3X365413k46fnBFrdS8AnZykw14gTDLCSdLtmcPRk7dDRQC6WstHzyv893ZBe3pbrABe",
  "key32": "uZgZNxsoT6seakpubFvfzNi2XxZ76w8avDnwGcS3Gr2ZfmAP919L1eeAZMZXaVgEaXRMszG9mdGP4SeRiAJnR1v",
  "key33": "2DveiPHimbeRnG9omc363z1VMPMdjQBboaWGRv4eKLCqeDe4Z67TpLiZxoCeWLyp51QeQ1Eiu3kwfAefpA4tVg1V",
  "key34": "5X8s7bEMM3SkATt5NgK77aq3kYTRn5Ls5GLmnhaNnCiJwqx25xjtHwVNqNS2zRDF47qxtZJGGn4L7mk7Cu45Y9Zu",
  "key35": "5btjyePwSedy8z1XyKYjofoR7Eo7rE8dC7VDcZ9xMLMvazwhvP1GnuhRL32qsSjKcjyEgKVpXzZxUi579RsJZHgc",
  "key36": "HDjCpVcpkM8hvFv5iZgaVqpXBQKivXBpLctN4nRUfyXJN3iaDX87rMGFPBafVse1RWDRP8pfrhLcCsG12p8qevS",
  "key37": "bAMHdBcTsDnZXm97rbBPq6eGDwCJG8DEyfxYsG8hzVF7ULnuWKedve8PzGJP4txarnR9HEvoagXXEGnTPjkqbZy",
  "key38": "mZrucvvXKQHS8yVUe4E5VSieSvcoFF3ZMiX973uMCw1vjfJjnDXRkfSeCvKy2CeJY8X6vR2PnQHua3Cw7n7ARng",
  "key39": "2WZNzy2eraqwrKZT1URChNjFcwcH3HToua4Lk7rK3QHA12MexzmL3de2LW4z8DqknBSTVku7qJLsnCQ4ecK3PU5Q",
  "key40": "4sKjf2YnvS1qBs8w6sCArskfxAe3U1b4UQyJ5jjHwjGaUUqL3NreFTDK4yRHc5ux2g1sKqZF4RZuaSw3DACEj2c3",
  "key41": "3N6RWuDruGMCVro8ZeJepZF1p39eWu7zo9J5bgbZDV7gak7je7ydbtCikSuJHjVrHcS6nMW7JNLegmqWMNmboQXK",
  "key42": "4TwFQpYcUj39rJRG3uaq8XRxbLzhA3Wp4rNSwybPqjkPoxKn3QebJnmLKHwHVo9PAJfSdTbhzFuhSXnKGKRGBtxf",
  "key43": "4DYbVtyLGK168rVu76Q39g2u23aD51GESRxA4FJrmn8vokYDGD8X1DSp7V337JDLFmRx7uKqaEAndWPMfbKVRAQ5",
  "key44": "5yeUtWutsz9WcvYRDHfL5MZMsca2i6A1vhCb7Z28G6VrnvUXy2v93R9NaLBPwmfXnaeMbdfuk95P1LwfSZEaibfy",
  "key45": "4aX8EAmzdy7Dgzq98Lm5svfCZAYfP4XtkGMCi4aqrPThhtgyYFWacyhQz7S66MuQK5jxJDCE4tQU28LVE1GKYbv9",
  "key46": "4D7HE88FPBdJKXpMCdNwboik7FEnFgKJx2fNonxfWgQFCoVE41sUj9SAWPepkvA3FhnztZg54neLtrjqvLnyrJ7F",
  "key47": "41d8vFRfeTQ58YFFfBZ62dHVfYf89CkbrkW2JP52vZ7iT6kTccgVdeo571REyBYJm1i5NgsSh9qH8DsxegxHCusg",
  "key48": "5SpRK8ZusRTShhKp8TnziucicZYev43kswWAM73QSsCN7ttkYVPF31JN53Nbgc3vHTzxFGNUmXc3zLDFyyvdYK1B",
  "key49": "JxZf2NiPb3zV8bXoVzZYxvu1EYT3B9KVgkmFQ5vv7rgsMaE1ER1vr1YdjYxcXRfSGp7G5XC4gVcK4ZpDFvxbHPy"
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
