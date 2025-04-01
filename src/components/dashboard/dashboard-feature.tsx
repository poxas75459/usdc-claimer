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
    "64C166M86rNJWmueUTpGKqFSoS5fsvMMWNQ7zCguodSvBMGdQErEraf9y4yjieKCzYnLdq1t2PAJj8bDhGQq2vF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJ4NswTXSrrK7LgwkBXLQ35XBtREPDQLPP5i8fsZAgzfAMc2UT7E3TAxwUKtz9fLWuvpV1Jbo2f3xJeNynWgeEz",
  "key1": "2kvKEekMzvu7KQoFuCtxFxKQWUMxouVuVLFpSjUJS7RW7HxXhPrzoweYbbm5ujjuGyGRaVZN5oQkHRBLwPvcUmXA",
  "key2": "4bzbL3vWraNwbE1zvAwPpFVE6ErGurHi7hE5gPKvHuEFx8By4Wa6qX1S4GpcXphFNHtfoR4EtCQe5c2yru7qEcG6",
  "key3": "J3WRF7digJoKaujGEzmbBFTS9scixuzsGmXe99zVQd8jo2chwc48XQ37MHuqTSHkxkMNMemaZgqrVJ1f8KqVr1E",
  "key4": "5DdH6pffk3zVGb5C8ZVEmaoFPKunR4jhDfKvUTpu4VpozopZoKmNpwm1mLFHFBT15VpovvS5PLvAVvyVZ1YA3hh4",
  "key5": "3ip9RdTESdw7ar71TLz1kmgzGPxVMGxhDwXY2GrBSSrWE9RaHoAsXuCqiMPFpnErA3UDn5fcE1JXh5Kdkait3Lf1",
  "key6": "5Q6A6rtevqkaDnKkj97TsESFgbtFxGUAijd91eGzSvVScQhLxrBg2VFz9DowXR1gGP413vbfN9BUnm5pWkC3iVZj",
  "key7": "2r1YSXWdTWjy6sYsZYQqU7pyoQ4iEvywS7bhjb9CDjU33cz8TN8nVjscqDDGuf47q4xjYWSsv1YDVgoant4y2D5s",
  "key8": "3cyMM5Fd3qnf8eANuEx677WtyrKfzmZMcFYDGuXFA79t2HcPSxVnLQ8rCrU2eVkaSgFw4KzJMTYDd38w9Qapx4yf",
  "key9": "33c3vLNcAtc6y23tXUQcHqTp1CrDSJSB9cEaG3p1DBtyPyTxAeoDENDZJ92dov5Xk2SH6NDXsYP3VixPezZqufvv",
  "key10": "q23fEbvh3sE4DRRsLigYTFzGCTcuRV6HZMeipFSbf9Xx4sk76tDuxvTocch32byRTHb8tgMKFfSFU7RshEiRdBZ",
  "key11": "4Kpkc9WJ1fFFEFQtrPMnKYYa16t2SwH9Bp1rF3s9GHerYZvLSXSQFEZTYrYiZCagHyv2zFra5692bLFGA4k36LJS",
  "key12": "32CpZEjhLLrYm8gWPQLPKFfWXGWsrg3jGQdtdBzagmk9CkXgQN2bfFim68DjwuAC5zf9oitWe8pzjoKoUCT7LWXx",
  "key13": "3gJ7K1X9Az31z1GpzTPvkcaZcxgGRM6RWeidsMShMbzNRVYEqo5BATjaJbWwGfLXSJPw2MNfv89sMQpfB6AaLxkk",
  "key14": "33zSSpmFL5oFeM8sSLT6DUaxVKVwvHM9pjyuqNfrbTzHzBdLZjDgWPEQkEwJWnm9tVpn13ZBwtwnxgbrnZoBZyTy",
  "key15": "5jHBXRGUyyQVUbAMoCyhVtTm9HDXVa7YEW26zoBuXAjGDppH8NSjtqXtfvv7vjLw8Vj2a9a4oabGNGYZ2SGvp6tM",
  "key16": "5YeWNGA1MAATCmjHS5SXbj7tah9USAY9YfvcGBhz9jSbycGKDoe5xWESw6Y9etGbTRkGkiQnbcBxexukJv8Bn5u9",
  "key17": "5bdeexrzmqRTYxTK2ExkzyUyCrpqWC1FcQwgHPNGiQkzf2cQ4sf41p94V9vyQNEoLhH2YJMsCGVD9MxABTCxaFZM",
  "key18": "39PmUmaGHUERNi5u1Dk1vdM1FyNjMabWZCb1wpCtQJvM4QFeN7ywsNHPpPAA1DQ5kAT3zMc6Dxvwe7NsK8w4foFH",
  "key19": "8FBBssRLDPG7aCMhfPui6U268HHihQFsKPr3EtckdKs3ed8NffBgZFE2FrqwzoYTQmhn9seDRCbscAcrPV7FUj7",
  "key20": "doVLGSAsx2KmDwUDEPKKZ6k7Cc8Hr4Bn1LtFNeZh4b2ojMPV7w9j2C8449BCwqm9suf3pp2wiB9cd2c7gYXJyn6",
  "key21": "4Z9K2sdEp2pc7CzEayf5pKPs1MyuLNw5L9RSG6pLhKtBePe8U8u2yYAF5A47nN1A64oHwUc2YeYFoY4KeXxfQe8S",
  "key22": "3YKy3SknFqin7N5sDF1GsDUcTkqtZHMvoabDd2C65EKg6G2Cxu4oz7MGCsvPfTPKNCoaH24HtVBjXcZPvSMEzuBd",
  "key23": "3m3CNAdxeNRwa5n7MTteReur6T7UZeizsEf9CzvHDtz29F9cYRskE2q1VqZKrGX1Ko5xmM72Vx4ngpbEjQq1EMd6",
  "key24": "4X2B8faFLapM9hm1vpMSyUk7dQeoiW4JaiSgEe86tkRWUpPajM95XS54g4YYohjXrCvTgLHUmaoxFDfExNosYpTz",
  "key25": "53UeeY5mPmZTohrewq2WETMbhsv28ig5DqFJmS1nyjF3Cyi8YANMFJ6iPcMVBSNWeUU5epFU8ECgdX5C2QGqERvG",
  "key26": "5ZwTSwLzvUdBENwFhC6crSa3MV7gj8nonqXGzZXdS1jugvQpAWFUaYeaCn3Mtcv8F7kP5bqhuzE2M4YSnrUQGNA5",
  "key27": "4vV9fimNvLCLo9dqcQepfsJBcSNLy64jRBtuanAUNZ33QUUXA4qESX9YfF4bBpUUUpibWUYsydPcmaPZTDfGhGoT",
  "key28": "5YmoDe8gEwZppg5eMxJCyU9vz6ieTEBEiV8NQHohJd5yBehUSFqpp52Mq4ReJ8iLPed3Sx1ddKRDnqxyzTNZRzLM",
  "key29": "4eVVwawEaLi7F6XCAt9TgdKTfeHfniTwrV6fmnuhxRfdjgWXPfGZqK1vAGJJdL6aisWPJUu36bVD9R79xvX15WQ8",
  "key30": "32TDr6mKBjLHf9eeVLyvbhTnc8rdWm6vnNoiik8KZ1AeHfThPEc8e8bSMqt2LnMWoWoEfXTSP32mg83g27zn1GCx",
  "key31": "3WWLJmta7Z1XLHGcaaHjUqFk6UbsvXoTCKzu4dap83TGi19Ufh8MskCktYumrd2u8Q2VJS96X8DC25SLDUw3gE8B",
  "key32": "4dMDEWue34aWbisLp8VVLXkujMMWDQS6dNkNAz5V7E99Af1KDSUa52UhTymYA6SEvr44GRVRnHUvTioV91WJfo4g",
  "key33": "56RDvjM7vWe7tYRFWCGZxap1EFZM8HADfSzNysNJWTSsUqs773Zjz7JXQXbrFyBxa2zJ4xpMQVZxUd7dN3YeCK4j",
  "key34": "LwqvzRRYP58b4wZBqtgHTpJNrgnBrHLwRdWRQNNDLPjH89UuChHkHVPQ3nTUYdeFu6nCh5TdzHxJNUyKExhau8b",
  "key35": "4xLq9uVtAC5vp4H5YE1uoq1gnRek2NxwaGpxSu1rc7mUFc8zxbBKig48SYepawu6n5Aat5tNa7zgxcD5bYd1mdTG",
  "key36": "4fsjCzRGNB5o59QtB9hna5kSUG5WkPjUiVK46avV72azJkKZf9wipWCzQ55ZCvaZexVkVvJNfe5px8thohVXaJWf",
  "key37": "a8JUVGDMWGz2Fv7LrmgdeML96r1tyZbN49K2LDuRo6TA3kNuLH3qF4gyfWkqom9h7rMXBe9NkTwCRGamT942zoL",
  "key38": "mFFjQK6i7SeaNsBKxmugmSDULzQFL1Wvgw3z2d5bkskchxwKWEucq1Z2XXu9Njg3n7fDK8hjFcviCctZZEUTogv",
  "key39": "3CYLNZuX8hbaD5eDZCQfcDsXcEGotaxDW8GVcS4kGu2PeR9s5VuFYvN4eQjhYUz5mtuy6G5Y1WGxadYxw3WQJHCX"
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
