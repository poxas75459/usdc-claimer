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
    "nnp91kanffvyXoWMjwz38ehZnoRCasPGE2sWWvSFe911MBMBZSGXaLo45Vp3cyxnxUuNBScweCnF5GMHiGrV6H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTTtBiKSurrvbor7ucK6eHzj7KYi485gi6fWtmzj4EVvoJgDeRv1JiMPov7jPhL5NHeCFZnFjgo1FRTJr8PSXWc",
  "key1": "3SxWq2XtxFAKaSC967emQy7ij7bLb8KD1fgnV5GuqXC8adkHywbWkfZVHhGLyFSpbjXqDzxsrihxZHNcQKLiXt9x",
  "key2": "GJonJmnpNsWEtHtCR5MmjRGrvSmG5wMFbUYXvYEzRkEBvaunPnbsBAGrzrE13xaWNbVZrwCarhYDTKhEee5Jei2",
  "key3": "2xrsyAP78QTZQMGeXaUGSUSV85UKU56DtKhgMuW3ZHW7jx44Vm54hoRqCSMk8N4f7kCEKcu9gQE6LMcwdZsyAwnF",
  "key4": "5YHrbsVJG6fersAh6p5Y8NsUaTrmk5wseXKyn69SqzZbwb6CEyS8CrhG7KQ9pj97P3synAwaUoFLcZgrYr4RQJQA",
  "key5": "3HutPTzaTFGDc1bxhAR3pSfyzu44KzWfQv3Spc4DxXN2fjDbERvF9UfKoH2pWK5drhyQ8gs4SBqdtzWYy8weCLCK",
  "key6": "26yQJPxGU5kTLtZ2hBCh3nWoyNYCUtx7N1De71oJpmcQy3ByKkX2MNqCzd9P8GNrScJceNcf4yEah5hzikYJGFuy",
  "key7": "3ZKMhRyshdf9At5j8KLkBA4EtAQeW2H7GQYUwJxkhKR5eZ5pXWYR4yUsHuFCaDYZWGGk4UCPaWgVEMEBpfroEoar",
  "key8": "2XqSWZ1cK4LLA1DJzWDoBZGH7VWeSjzUodRcqjuCQdZjntQfT5oD4igLjKaMoYB757dUWav6NumYBy2ttt91UuRR",
  "key9": "2uRS3UqeFQtjvhP16xghcnyznW5s9GD39gYkfnRjaYXSBqWvotXE1sNTo2NFk4rtPNXpXkMKZz7YSSSFt9UsezjC",
  "key10": "qwdXsQGiJrRHV3gBEJ8R9nuA613CyZzR3snwx5tknR2XqTKBfoWsajkKtftL8MZ69kqi9EBgdcPi91scfp5viK3",
  "key11": "2DrzoNxSWt4TDmiteBBHTEfZhf31c93SfLjmdK2PuVM1sATpNWUtQiTCCp4DqBbRr512QQU8z95LR8998JP1eTzp",
  "key12": "57J9AnvXDYX79pd4sZsKHZA9xe1KzzCp7pDDYD36rRsREaipQL9Hnz13ENDHtVzmFwZYdrHtW1e3gg85WJ6cFXWL",
  "key13": "3GhCWdtgdAhWjyUGbfTK9DXaMUN4S8LyByds3xUPXkj82zMybRYeaZCYS7GCBLvwvkABPdekfke4eeRBm5bmCBx9",
  "key14": "4aTTjiL5pMHaBQGanqhmrvhUA2aRyis9ShJaqiWzS8e6RnNG6rAmQzdzpDxNtHMUFbBpNBuVvF2EDC5zCfBt1tdZ",
  "key15": "5KMbbSFaefr5E3RhccqqStsp4fKTWZBz93fdJJpo555tsWcuuCHheeUzroAgRKs7WfvH3Yg6uiQ3UnRhZeFyQKq9",
  "key16": "2TJvD4iKcgXTJK1E97gktSCn3RYSAwoK8kSxcf1pQxahJdYGoySDYFair3rHgJUPGzhty3ftB3xZZ4vsWdo6KQSy",
  "key17": "3F1dSJozP3dZgofs6EdWcYQNJZVVzbQ79Cvefz3feu5qfUPG6ZTVGvDBiUtHtE8R8xTtTYMjZnu3dLNHoJ8n2Zz5",
  "key18": "53pHtr4c3h2aGvPywAffooHmXzGu1kkQ9aXMHkZpngsSLCQZbamarPZM4GNonbxvvp3fgM9YoMXjw5bagfLGn6hD",
  "key19": "WwXHLSvuLxkciDbL7mMcTKqESJxcV55YPEkRKDf1QwyuBRYDs2ysc2hT6ruMG8VZYuiYnuTUjPC7g9gurmftu28",
  "key20": "5W2cNkUekntq1FLsdn4j9RQc2pGANziSxKdMnUCEGzcNWCpj25396BcbPg2574rEUYGEDkSDpF4UzkM1ZZsY8N3L",
  "key21": "643TLvD31HY48sUCL82aNDivfdyXoTVyuRWeD8WAERA9eTRDQnAvb7BoFnnf3J9nxEHaUpR2PRaWzNrTJefnF7n",
  "key22": "5L5Yo57wD4jf6WkPxXkXAjKd84qZenARPAasJ2NenngUME4RhqxZvcBECswEF7J8vgQP4bJrNaAyjEL35d4wn6wx",
  "key23": "zMT78eShWKFsrTQTNPkQdiwPbdNMhsZfxZdC5ishLzWyB88zRzAgTaHwmtAmgkrZPgKjMDQ5ULonBM9DHFY4wUp",
  "key24": "3NWZXhk9ztX9MBMx2gHKaopYhFk5FRBGAQHQfqHM1aDEAM1KecNuuio4i2gYxPMyDKbR4zSY3gLAfv7EtoKEQdrV",
  "key25": "3U241TVGQch38w9HtdwrFAZpU4KXgZfsM3s1Vh7ApKPoDgthiAcDVFx5UbcVnb6TT13vVvc8WSHPH3tc5sxBoYAg",
  "key26": "4C1Z9BcySmUs42Qi52177gZdFyn9gXUE8KHtcmNVWUBSYT3KmhqQZCsfFoYSkXBsqj2w5RFMKfJ5NmbGziKFTxFj",
  "key27": "2ASLG4u8TwnJpKKsMmDUZRKfFDp2XWttjScWVZ1sn8FhR5ZhuEF6CtNJt6cvS9YDV4S5S85XJGyPPe6DN1xGt8cs",
  "key28": "kHxrAyoWMP3ZwwYzKnYFRppGHPX8PEqm4DrCw979F1WHD1kkdL1QABpEPfp1w3RqQoV2uzWNDf2dTiC8WDgfp3G",
  "key29": "5P2JSgXkDa1B9vSSQFHVWYAyjPeZAsNZQrDoCEhbszqPrHScj2XX2iQwfY8w57bNL3oS4Agr2FSmm8sDuo3Jz1ez",
  "key30": "5brc5V4TWeE1TUPR5UvJD5Qjh73StqnUREi9sRyCa5LKGpv1BhDGb2pdw8xhpW9jfUERtWkVeWZ49k5Asx9LeoMq",
  "key31": "61FtKoVKnGwTCeTTD6q29JczTUoSjCwk1QqBUZTerW523zFZxCpemUmh3qbnnFiCBRygqdu9nuW2ZsiHCRPDeqvy",
  "key32": "2qxCjsGqfqFRA31y6zHv5DfmTig72vYASWZSELqJJzvMroSjEp2DaSp7nbehqAKWcRk28yTjNQSXNX5qWdGNxbhn",
  "key33": "5gz4NsVmw1JxjCtgt5UVvzEeJKuqXasV8bSVX4zc3cfMf7Nkhk7N3MtfUKoUtZ7GjKxHkjiWbnfhbmPTC2Le6WnD",
  "key34": "2QDK3WmjyMEk9CQY6Ae1jvwXGkuNexqrB67eGZw6SNL2ts7SXijHi4rpJB6P7ojH3AAt3FNhCfnJjCGtVTimeXMh",
  "key35": "4ug8dX34aW2Xc3gZjVfCjLJ7jgZok4yFrVgw84buVHdejSvawQiutHKT9eawEJwQ74WsfrKJqvpv8V3g67ygzRZC",
  "key36": "3f9s7gwoay7nmU6KuGjZ3wEHxzcRVdTrjhr7QVFYH693LpFmmdQJGWHzwJ3npCzryfw8Hdq1Dnbt7pm2PkjX6sjb",
  "key37": "5xAZfh8pLvKEGrXWNc25BaiMpVJDTogmzhHv5CNiasF3kSTwZ9fmFz3pXcEUANZpakv23Ju6HpMw8FJ6aN3UK2en",
  "key38": "wFTxH56DDVYbcN82RMXQ8su8nYNwGR1Auj6c9BKQy17EeSmTmx5wJqcmPW8UKzBejU6wFSQS8ko791TDJnEzX4g",
  "key39": "58bcBtbFVLxicCikRDH5tdkRabAPzkZ2Qz3TpA1apYtXCf6XSLvZ6pq4pACub5tVofBPHXGShHKpQPba21NbUeSm",
  "key40": "DcHo86vYE8LmrwYGD9Y4Q6bTTRFgJYSDNovRXg6NwF4wEcQQEi3LBi6K6WiU9ezHKFzq3YzZkPvbecgHWJPryF2",
  "key41": "4RTn1SAWBQTAdoTk7oZX3g3qyBTB2CbceykR82pznBSb74SdEbaDRvdUrJFyiHKq4Kp1GFFhtrLpAZ42bXne1UAP",
  "key42": "3N13Ne5jV8Bymy1HY5C7vStyopVMcid2zQUdfM7Z9Bf1ftTjL3rHuZkbydc8Th8EtpTwvWdWtBMeTPSAwD8LVDEc",
  "key43": "21d4Kt3Xbw9bYYwvbh22YhG3ki3PZDgkeuLgFLMvFr49Tcz2niRaW3wXrRUY1yGUcMFK25Vj2CRQqeQAvBiw94td",
  "key44": "2W2oybUitakfFHEPyGX8BtUhJe7kdS7pkNh7MvZ4ZXqJ1N7NteRJ5QQQZJVfzN58iptqYTbgN9V1fhD6uM8REQ7e",
  "key45": "5DKTovS6LT4L1YwDH5zJY29nSdBRFvc6KvXRFQNr2tbdSqvYNeuCfu8dL1Kn4r5UwhFbdj9gmfWKfJsLx6aixXv2",
  "key46": "2zCN7frvyyGD4hGtfwdeUbzfVncTbQiQ6NXLpnPKLCMqx4GAk4D6acmyBSf5FpffAGchS2uWRx1R2iTdoZcaVuq",
  "key47": "5YXUW9v2fHHwsHxjChxvmP5NtiB8f8QNx82AYedAnK8YTiQwXUR62SrqsiTprfwRmS77Sj78WczR35B4hj36H4w8",
  "key48": "25s1gq17A4zbZGtRksfRcNjX6peGimLVZ3QbKK3RA1kXEMUdKUGwm7hswvZ8DJEufe6pPteahKsL4SDSjPugy3rE",
  "key49": "4MZn9QDXrcSMyaZKiFqU1cZx9J5KFJDZFzwCNHeZg5Dy7gjFjvXAtoWczvbYD7B4PLgmQj1gqLYMBUJ3NwRSZFwa"
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
