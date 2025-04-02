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
    "5ANCS9QUVaiHRYTBLHy4i4o5WunoMzd56dkwVwmTMqPgU3gNuf8P4d2hPpVMtaHLnRiiSXGCwytgd4p4xRViwAkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eLs7xmZwP8zPc6g7nakoVrPU1qVeThStDHw2XfzDVpshAjanvxF1bJeRWsArd3RDpR7XvRapLwkgXwGkeuNPQZx",
  "key1": "2iUd1WqQ6xsPBGZfuWCXKzgoKN2MqTZuqcmzBVL4HjZ2pZX6oiixFKyh11Bv7BgC4tGAMsAvjPZQqyFs6KZh3Eiq",
  "key2": "5Swv91G6DHDa68KHMW4UaciHPbuRobmjFoSVJkPU7v9GvoCceiMLwhkQc7yxQcSL2jiYjVXrkumEdELqouTtNL6S",
  "key3": "58dF9tdC533qk3GS9DGnFP8Hv5dmyFka1kMyde1qhw6TNLenEL9vXtmJRFLSqiV1rM25i5o4MaoePL3bKHZipRbp",
  "key4": "3hbX5VRwByHYtuxFGVxknimXy6uPaYmUFHZYeE9LZ1xmE4N5ktQ6jFkg94Yc5Zv7BE7BvQJXe6VVNBg1VP8hYjTM",
  "key5": "3h1mcmzwrX8TnqmtKGD7noBgwwn2rytgngVRdEdoDpGQHuScwrwJYM3eV4TWLTq9db2dPTKSd575a65YDma2jRB9",
  "key6": "2bgmFzatMRZxCDbze6RXWmhhiJ1PgH9kE6CFmVsdQNQnHaaoKLE6dX6Nn3VPEYwVG1sUi64u75iEMx76N9wbGUY1",
  "key7": "3JTrXiZ7P1DxEJBz9qBxyNV68VyKiJfjT9Sbx4u8fHwFC8jA3ZdPc4wTpsjntK3myvAFDDAB8HmvAVooZG4GuVeJ",
  "key8": "5umhWWEF3cUakmPu3YE2vPzroq94RSDT4RPwy4YwtqgXUkWbeqvogRMMe1Q8rC6VAgVEfpcQBVGcntWy3RkG5DRM",
  "key9": "4XCZoGizCFSLBTc4t2yKzkQSzFcjNvcgwGrUmZK1AhzcQUXXW47x11LFrukzuhqnSnV69hetMZTuQvDAo6Sh7HPV",
  "key10": "4NKyxKc9VTmGECWyZowY73QRrczw6cjRFWHU6dYaRiwsWG2PVAxQnNBaKUT1ak9wXYzDWkrJTN6jYZ1rxgF1EYJc",
  "key11": "2QRJjBiCxWS1Zzb2zusgEG4YkrKz2PHThE9tifoyRLXfTtvMZXB15rp8p8abWEqEUJBTjesbRzGmBzVSm2S5nMWg",
  "key12": "dRnaH5cDzqDqQetUP64dZrsnDkRZZPinM7fddByzLaivUZsBnANLFDiFifbqgUmZKSY2mDhGnz6RXTEV2Z6dGTv",
  "key13": "3cz2ke4ePTmsoHN89jPvcmM9kuXmMa8PZXNx5kNAcQ9CPUrv5on3U3WAaWnArYTtLDSySsNZbqbid8iysvyu1cmF",
  "key14": "5gUGr3ZLtZT5yetXZqeEPRE9QYk7mXG6ps3CWHnPxNP6LMAL5vZxSPGzN8pGg6ngdFctvsQZfE7QnGYnh6ngrz8c",
  "key15": "7mgouvBrCgFP7ztFMCxTB8LitqfoXEFJYYERFpt9NqDXLoQ4j14JQgUtRYv4b3FXfQ2M5gEVDYpnHSARUm6JXQv",
  "key16": "49DMuMfspN3wGqvvE6GkwXM4LiHPbg8F1v189mjHgKVoyJjdmjsBQHZUcX1DvsBnSVf7DG9XDezbdqovfAzx9HC3",
  "key17": "3923yzBfeMYxCsaekH4U84p2gcJCtBgMBc6fUUqpzAC7HViouikJEpbiEDj8jzn43shKX9sR6BpDXkLY6Me8CLmK",
  "key18": "fA8PSduBbW4sEoESUcZDGtpWqm3QRA1dd2GWChvopm4Ei1SuDYyUVjwtwhLTsoMgahCVAZfnyi9eT88B4BkkAw2",
  "key19": "23kNmTRjGbxRpXrP1ENyFPGcCx8xn15aGqBE4QGdoupx6MooxMsMQ6xw1HKJd8h8zpA75CWqnX4CvnzWRwxXKv4c",
  "key20": "2UJzWSLwugrjTeYNCsr3woAcsHAKb9v2nK7PuDApqqFMsGBFJKgUrW79KXEA9599py3xWjqSeYWRxgur6deQLxLe",
  "key21": "AH7RgHKH8f1Ev4vk7P9psLo45fYWVRsmMuA3NNdttD31FPqdcV5YS7QMWMNZsKKhGsriGepWBquPT2NgkDLG3KH",
  "key22": "2VNMkoR2eiFdqXvkiPpjtH3v8QXraj8jNKD5hr58CmsuLL6TBpDAjKY4utCzDteJ89cbjLxFaX82sTkHYAaDvkF3",
  "key23": "4JnrBVsNAfjg5ZSvvDz8hggQfhSUGHjKezXxMwLVATjxkEHdCgnMUkmqjRrAC4HRQZGSkL3vgM5czKLAYMyqCAvT",
  "key24": "Ra1boL1QTmfYh9hS9uhddK6oUtuY4yPBrAodUoj4Wgram7erdFqmWXSM1fEVahr6dyEtK32SQuhhRTmKCSp4w7Q",
  "key25": "2Do9o16gG4sg8vFxwo1NDqVv9hhGowgq9gRbB594q3FHiZyuYRWWDwAdW4E8kFdDcka3TyWoVfuKrVjYLEiMyCFZ",
  "key26": "5YsFsqof9ZbXSv65tm6pcoL82zTYV5dYH266uHPGf8HjMHkjYwoVLxQLrygtRxqATe2RFZFKoDdH2BCwRFCk3piY",
  "key27": "2xCSYnhHoTyEcrQJYjSU4j5NZ3pvmppsgnN5N9C2PPfae9qtnC9oN63386tn2hK9Ev5R2vnFaDtvb7H2Nx8PncFc",
  "key28": "5kQkWF1EF4staor2ncwRNDNMGvvFpJkU1yyGcj8PhTJkbuksayf365mobqYMRzSskDbmadgeHCLfmhTLuRSsg5FZ",
  "key29": "22dEkzfnjH9rUWLk29TxGrEM9NAsBNkoxsC7uBeS8aLaLkxnfrSQMmYHKm57cwP2Tbz5FneTU5EiKit1kZN8NRvi",
  "key30": "2g5oGCqrXsJzLdW2a3FFvgDgbHExC3YvxdSDPebaEC7LknXoo4WfoFZV3wPBA8sNCqXMwhbrexDSvnpctDj1TMjQ",
  "key31": "2k5CAZ8crEjKVh3KMmtJWAWkxW5FG6B9CGCYi3FWcG3XSBCVjCGQx7RffrXR3tAYAHyHWHfLA2Wn4CCpY9vxm9En",
  "key32": "4QcYqrXwAfUmArDDoh1MpkEzBUBRhELmJMSc7izGSFbgqTmmNxHV4b2VHAeAYZGLELfs7b6nKSzrpeMXPxuWbGrH",
  "key33": "4T8eEfKseLsA83iB5AAzH5iAGrerdG1kSSnd5uivwAZmNVtfEYXiceN6J8PM2cHQdSAy6QRPNi78YDZkVoAL6czm",
  "key34": "3euppTR97GcupmtLCTNy8Yt2bPZ53nSw8XksUkYjA3en6zwD4qbbLNUraxYXBa37cbP64avmcUkn6hkLn3boWUCc",
  "key35": "31HabwAZY1uuhBkmcvAwsLQ9f3b63osRBAXwU44uaxsJhyiSozzJWfDPRCxr3YGEa27NGCXGjFhpFzyxiQQqmu6L",
  "key36": "3Ps44U823jc1wp3JLQGfcKWCvtVNW45vUnAH93fGwfKn1pvW6X6HM19vS3VCVv68cbp1ZBjzZ3nQ5Y17vhvJzQkb",
  "key37": "4imBNGDUtRxYLwwvsDpBFc1Tev7qex2HLqYyUEgFXxWjC6ihMpAW9ZVuWiBSbcZtv4net1rdYEKyXFwEgLYorJr2",
  "key38": "3aUo4dAP1qmnt6933NpNkcazmeEpKbfHkhTuhSC8HpH9BJU1z4rn25W5Q4dAQJdj8PJh7sto7QEYEvX3CbidB9jH",
  "key39": "4YKgXP6Sua8btUmSL89syQSKAmSPQ29JHzL1o9m5R4tBfzcu5yTZTnzrPVTix2FFoFy8jtuss5CN9WWaZ7yUi7cB",
  "key40": "47Pi1Q6SKZyQW3KGhEbvwhjEyeka9GRERYxjQo4kUmuarLiG7X5FbxzNVFTbgkaaiFjngDPUoUTE2WcvDQRc8aoF",
  "key41": "4RRLm4UCWEBPCz7VFbV7XABhg7teP9vsp94HyJFGseK6fNoQoCwXuxvwLWJtE4cXK24HYuDVGwS9Fc5rEwv67GM3",
  "key42": "5WdYKmiN8nj1nmCjvukuvMhUu3ViDJDzzDoWxEr1p37RFZxFWDUeApnNRGSVu29CUrsoFYFuQ7ApuSPK7NSCnmw6",
  "key43": "5RUSMUBHW7oT52umnAAWGmBnGeCRzghvRqH9VYDFhoMMLsD7YASbxNAFBpY1Qxq6d5sMPZQ8hcWbmTMHehE6p5Qg",
  "key44": "4bpptMZM5ajiuDjEbeeEHRPEWE8ByqqHwSt7VN339KFbvxaxWh3B9azFgjd73oowVE5FQpY9jG6kvu5CvkaDJ3u2",
  "key45": "5BaPt2JUFPjhwy5gtyEvk6zeyJWB5Jb2YF89aADxzyffyn8thbogCzSY1hLS1kcoGswnKdiDGPQiwFe9zM64YvG8",
  "key46": "5LWk928ic37k1MCeboJVwziYZATwZNMv3x6VtmwiBamyjc1r3SpcQ42rwQV7zW2tQaoY9pdLpi32T3GUpN63tLGF",
  "key47": "4xAZsV1JFCWuGadTQDpCWXNG8A1hGg99c5Q8HEoLHP6rhhanUm8xoAY22hW2fDarN4Zv1nVP1G5FjTee8xpD9ACn"
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
