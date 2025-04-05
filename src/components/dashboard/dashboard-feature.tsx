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
    "d3ATn7SSWmf5VGh5p8wcL8BpnV3sHf2XFJysmVddvx8tDN4MH2Pnk9JokHQLeWU533A4AVx3dd65oQ5GTo9rGcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3guMEHGNLpSTj3fX68FySRpqShaUkyEjeW3uApVkT2x8jocfU2etmr1ZDRG5CoMV3sFB1EGE7JYbWNkFKXpWJvqD",
  "key1": "3eQj3cUZsQtVtKpbyMduniSQmkXg6LE8Dzi1dU9z6u6UQcN77c4Qx5yKs1q9JxXQPDhCcqzzJz9bfxEuo3MkeDHr",
  "key2": "3qYq9rFuZYEp9L1qZofLE14zDmvqBrKrYMFG4DBxKgHzbTsGvCTKKo6PnZ1KT9fQZs13kg4mVQKocHrtyvAotyTN",
  "key3": "4KScoVXjqkoDV9Tow5KcHMsPBU2eEbnrzh7SqDr5CdfbH2Ei9c77qMJ1jN6soszSkQgfJ3dtmFHQYDXh3kwMmFRS",
  "key4": "3zhSbQ354sEsDDd8VvH8o3XVwwPW98MLwiNHwJhrGSwjwK8iFHXzUeqvcABd2gTEoFkBTBxzBrZ9UojJ12w4LAfq",
  "key5": "5r4JnqfWekF3dXvX8U3vQ6EpdKoHcnLtnhZxG6fLgQmb9dDAX8FyL8g7bLPCBGRXp5xgAY6TokzzQ7C2rmpi2WaU",
  "key6": "3TZkLXk9XsKwH9FH1i8oyLpRggdiM45rDqBS3g4wnBRSNwSAkxWatyGR21Hq4XR17SZd6T15X59gceLR31DHBvzr",
  "key7": "2uY6cR3EF3VNa77LEBxRKfzJss7QcU4MtRBLsmcCiwgQGWWWvs5bGCkCeyvzEQWfxTPaVphuykj3m1JAT8FvbgGb",
  "key8": "oxxsHKrYpw6a8duHr8ez9AB3DxyVpe8yQ3WWeSesozNQJNTipg9kwwBJzdNFA9WDzMdKtAL3TMqdvxS8vi2HZ1e",
  "key9": "2qGsS74H4Xur466qyFkKBLZFE8w97ZkdV7vWKbMYz8fhhRpywPdPnZNmo4xKnRk6uFYscRuEL5eDxJGYXFvpyWRT",
  "key10": "2Pf8nLCYUsXZCroxDJgqAVZfXbb9wnBcRzL8jKfNjjQ29Zrge49pTPq5cHRmKhmFCfFHroXs7Ngyr8xF33ynSchs",
  "key11": "4RXYoPP2boEsTVG4auGv9Lm1aB8camijZWKTDwgDiNnenVpcbr3d11MYPeVeD1cFXEmZDXpnwc1YeFZJ1RXoWwC6",
  "key12": "3mod9pyxNasaaM8sNVVAzhEkb3ddhEn1A8yKvvF1eomL3VbfYxQEgaPgjrRPm6AVnreT174eP15915Jfm4uuqGGf",
  "key13": "2ik6mxV7Tb9FuZw7nEf86bmqjXnRkqjTgdokunZ6zUJBsKvZZzNdJSgc3QGVCaR42SSmgYjsfwD9TKLPRZuLa2RQ",
  "key14": "3XUrZzvXbVyhg7jhPgFS4nqf2P5h2nYKmjfbhGsThTosSyznUzXHMgphmTviXDHAP1JrpAHqMy5etymaMyz9awSW",
  "key15": "3cbHGZ277LUF6qpEZqz69UhfFTU9ZBx9HGDF9bdWwiyanjNXy6yBEZtc3f8Xwb2RcocWU8psTWFdmK5e3LdkuDha",
  "key16": "5XopK73HZvds99WgRW4KpBhfsGu3VNYNLeDD97xx6PwyZK9prN4jeSnRiebiQSMsnXTiGFv9b8YkJRk9aHeB52WA",
  "key17": "2rTmhrkkTjN6vMyKako16Ure7Azy3mYYfzYd6UiRzrqXGZSR2hwh4gsDg7ZzYCZ8SrGwdREdUNHVgW1aC1ByTeom",
  "key18": "wuSowqdhoTatLWLYraNtHS6pr9vaHVpqhKRLZHt2i6Z8PCyh266N46ArC6sjhWTCq5r4zzW2cW4dmKnxcPacBM5",
  "key19": "2C2VtCEagkMr87kUuraPaz7Jfph9VbZ3exQneu4gE32w1Yy6tSkVFDMDunVD5F2iKaC3qgrW8dCvNaWDo8A9gDtp",
  "key20": "4yMhP67nVcAgKtXHbweUcLirXu1cdtsieAEy1SSNHHaJ2TBmWCfSp1vd23KxkhWG9KxYEYtmSEVCRtFkLjPfTLdq",
  "key21": "TQGaKewAs3j7xNHdnXSoPmhLkRkonrhj3ffdHSvcQ6M7uHQKGmFr3qpQuyJatUkHXBBFRYXMvrBdbAztRXh7FUP",
  "key22": "55oQfWdhTiCnDoRo6eAV56Cx92Ev4aTtZNMAe5MjzEKxrNWoKsmn8H8FQawP1JhJpQaSC6K7asfYYutukB9kuMMm",
  "key23": "45Bxw8DGuUmVk4BfHUaNAthjaBPgHivZM6phhdcYNyeyuE5NKH9HusdxS7LATcz24dCt2WC5dkTUVsFeNF3P6fiU",
  "key24": "4EWgDamCuhZgvRc25UiS8thFsKtLq6toWJS6PotesZPxxXkSdJ3pyb5wRNgGNyKguD7ztMbmNJKLaPtcL5LA9wRw",
  "key25": "3GT7DQdWicaV8QiRGn76gYC6FArBH2S6tPDkEarPfPxy1fs2xZ9N9wTvZ5xXH176BuqNeK3zKaPU2LuZ486DGdTo",
  "key26": "dz283aZXZRCoUJ2BYbcz6weHw8WerSjD2pas7T32MXN7e9Rhs3tsHfoHcuqp4FEdTaRBCYpSMbNLjg6NG2tmDRm",
  "key27": "5dPwa95nvV64R36XuGKW3Nqdgmmv6DAKqtyiP8mPBVgiGmXHXDtxGaZxGux1mp5uGe4skSpxQ1gXq7wxNgmajxjH",
  "key28": "cB5mxkevfmcMC82yrRiVQkzf3NxDnVJNWqGN85NXa7s447jPeRpqTzi5JcCeExh6h4BnWLrZTxoj8Q1YGCrt9Nz",
  "key29": "2AkHMEGViQ4WwR346wh5oThBzwweZyXMbiznQewWnCP5vPvLtZWsJe63nWzKThY19jBSj4PywJJyNEMXmmYrcvRL",
  "key30": "k2daTPBou7Rqvos7s5SHC3GfCv5FPDfqGnHU4hUXEsPbe1u5sXhrWMMqSSYngHhQZ7UraeHkeeWrKAsaGuEjxET",
  "key31": "26HRmx5xcUT3NMc2vkkmERuBjjfwbqyqHAhrcejEj3Re7GsJ9AswpioRtQ6ZuCokxF1Cy81ACQ8fFDirGBEZf6iZ",
  "key32": "3SoDwWKoAeF6CibKNWi9cRSK9ACrtB5tqUNRDoTJ5GELeymCcNJ5egsN3K2RsqviHJAawxB5RkBzEo3uG9azHqR6",
  "key33": "5hXmCx1By1JYmjWcN2A5UzQN8BTgHAJs7xwyP9Yf95V1FwUe7Dfig7eAhyN3pHb3Zi8oHrPbeg3PzBscscNb9y7s",
  "key34": "48woiQ415FMzfqWnchH2j9BPBDK1k525543MPjMzFJBgdWXk9EJkDU6ZZUcJxKBj7ECwxvhbKAGnxUDvSAdaMBPc",
  "key35": "2pbyxoH39avcBfwM3vUisED2rv1usL9rt7odWG81vtExnGaA1JATjiqEFkkZB4ib6ubuH5EYsktKnCSV49L4qiFX",
  "key36": "3GyehPKRzGFCXcbC4gU1cwftsdVPZbTxwtgGV7BFo2tKjauYxyNyEbanLfMvvezpgyqsGmxT2p16yewcDirMa6gT",
  "key37": "2jLqVjdnH83UpXmgufvAiGP4Z87xhF5u3Ra2MWGJnmEPGrVnvCbWfNTqtJ35mUzFMqCkkF7fPvyoEdSSiYT9NvKr",
  "key38": "wbKpSVYjXpnxruyYt3cDSDfCdx5RMGWEtNLvUrm1aSFHEbsd8wNbjZy8pCCKMBTR8Fz9CXBTbnvrJhyUkziH2Vd",
  "key39": "XPLg4irJWGCE82xLyvdWwabF1i3nyu1WzwoBJo2CozmMSeDbuuqdorsFLWxZ6pg7UN4csXxbdYUTzu8D3mLocw6",
  "key40": "2yQrBLZmzsUmYsBMTAXAeWe9wABXryqLxWtofmtfNmatKm83zPuJh9ZW8DwE4mgB8xJF3tnMZVN1eyzSyfHSbHBY",
  "key41": "4RN6oViDjfavRWF2naLqoWGXJRCehMqWM4qMq6syg9zAiH8hWUQRULC11GUfj6sGwBbtjSmAxctvqbE7uWcdRVny",
  "key42": "3fYgFU63KSkU6qiugW4nuxHtq2j9nZam6R2ikRgEB4c8dGewdAuMaSRpCCCYb7QxRRSzyV1eeQgf1MmHXhniqwdk"
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
