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
    "4GnR9YK99MetndhKvDgmWYyZcgp6i5cBipSyV6aQMtdUASYUzYyHyLWXBjYC7a1GWRBg8AyiCVpZuLKNqbZRKsbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUnaYyGQYxL3JnVS9TdXvvCPSZZm5DEQ77mP7optYQPut3qRRX3ViqyVd5zwqfPuQ3sHWFa9KDKvawiirgZwFdQ",
  "key1": "3kpsSzNaWUxXvBitBndU2v9CdgjscL2mTqmfjyDWJNGgJ1EKuAWqrc1io6nNYRjY6vMDBt1ZFn227A9TrwaKPJ6i",
  "key2": "4qwjjqd1v5JTssD9SxK7fiTyojbe72hi8raFM2FVsi4Zie6QoibskcGaEDYLbezVrq4FCo5jtYQcwuvoAdxzEWhg",
  "key3": "3kamr73vzL9C36j8vJL6bjrP9KJhnHXh8g3EqtYvDiorwduZk5wh9Fg2TxVCvhj96eh9TjU72kmwJoCGr1CHgkxn",
  "key4": "WvZzEW4MgYG4HJeUUKBoknBFSe6eZL8XZsp3CMfk1phLeYvMtKb5uvU2bu4UHUxrF1KD6m1SWsCz6nSjEhNtM3o",
  "key5": "2Yo61hGZxdMNom8bmmfSNSJCKS9WhTVR9ja2GfQ7iKz8A1TQqg7E4DCeDKdQDgUoMztAEBzCJbUt8nXANCwgcfvB",
  "key6": "C3LQPNYqhorz7BFacLpFqfjNgd8FWR8iBKrdj5Tu4UkCtm8KHNAog2WVvS2CJdd3eJMvhZUdTNoD1dzdsYF9H1k",
  "key7": "5JrVXvzSZy9X4qhmQm2P9hqgj2DmD5fDy96PjA6bSim3LkS49hVVyWShvMZGXDevfuTpyWVBRtwkuUc9doVXZuNQ",
  "key8": "431vhQF9J3YJhBCjT8RCTpZpXd62LaW61cokU8PxVMpE44nJHtMVpX9SV8EKbHF3a5ej9FzPFXUXcYJyAtFxixjM",
  "key9": "ZmmaFHJyM6DUPWAzZCf8EaZuwRwAYZqaJEHuk2fBQ6JwjXt3WDnmFet5xzYEUvdzb3UQSbLa2cVPA6oSeR1xwJh",
  "key10": "4fhx1uE5aNMXfCyjoDabMbDDdgZsxz6UG8iv2kAjQvgVhh6S8cjYJDJZSVkrEfUonZ5SixQRR4znk47g9G3bCzWw",
  "key11": "rfwTmzmzoNHzVggyqzwmB2GGHawBo4tZTcGEeioNz9ERzPZREQ3dUNb7br2cnhSThzkjvxS9TJoqwi9Zin32kZB",
  "key12": "3sF2qXhuTx7NRmjEP1TA4o59LsqUbpnUJKSNY1WQ6iRVyepu62so4ZGGwttQsv6kVdTghRySDwDRcz3rAcFTk3pr",
  "key13": "5hzqdSkfdTS3CsQR9vTR7DpJ8MrynhrAD7tUk8R5ANyADGoVNcrZD8ETiJ2TwLQonEA1XZ45ubVam4negiKfHZFR",
  "key14": "23C8z7bEWFyLrfEYYB6fvaoUb7PGtaAMhUmpgz36mwgmEDhuWvRkjU4t188GDc8mQVkR1Yc5qwufHgfsLiFcKR3W",
  "key15": "oHy6pdn4ULBfSYqr62Y5ozaQzZfU2N8Ucsry7TVqk2zD3p6QmyQSbYkkNDaqZ8VhsiSvH8CvPjkDeaDkkPAgyHR",
  "key16": "2n7oTE35u8ot9nQsMExo9PLUi6sBuUy5EQArfTbXCzPPPChJJCR4FvmchHBXxERzk86b9poRAuaZ1DZFaQgq3MoW",
  "key17": "5yMLJiKJF8K8Sst9yFQ5mwZJN29uHXUb5uciRNvcsVmEWJNabX7Y3oyYivFmQv5i51LBNvmta4MFUw1WGkuTANKW",
  "key18": "2bMwpud6x547u5qmxYFpGiZfCBdq6A5NG7JQmnr67zLXdcCdii4ucdHS3sSxEPDYPCVhuM3wBYUaDN8397BLmRJT",
  "key19": "4hBfp5JdEnJrtGM6NkKUzM6LGtfE6csa7nGwHr8dS2LXbpYRnJQkNQzjueiUrGV7DjFHTiSCiMY2mMKrGVm2TxzR",
  "key20": "4uQNMErFTonhfUMDHobuSbRib8uQD2t76UqWqhrschD3FSto96amPALpkUZdXnvtdyPCBLcvyvzugEWKWuYAwNvC",
  "key21": "3Vwm2XmtySMhEikvpmchG13G3QRujANniJjomDiqwuUq7uFDRHcAj4qi9Z4qabVhqzw5r3TGgDRJmPiDuWiDDkbM",
  "key22": "2mgJYN29NvGa6Z8agQArNyN3pfcuPWia7BQAW9dm2sCjp51jUU6XoL1uMuN8m6tvWUP53sMxve3aDwJkp4UqQsAZ",
  "key23": "3qdu8nkqUR1axz3FKuzV6XsewrjegNxQ6DxFZQU7WPpt2tD2GLusLpMoW1fdiLLZskK4AJy5dVjHN7Ne84Qqty7F",
  "key24": "k4G75DuSPaQzgVXTZpsB7XCvmq9VYaigJ1zA15Nz9RUBsqRdp7vXEaDtm4yZUJkkfT9GmLo5VAZmbutqxYT8CWJ",
  "key25": "35wioZ91BR4UL2PFRw1dcWV7PQsBE914TWhK8G5iWeFQwoDU7Lnagi3PSEVd1hPcU95xsi7HSaEQSgDYx5H89JXe",
  "key26": "3rAJYFPsSDQVowwMYyZXkrm5NNYrckJt44Qx8efMSZY4acfDHR4pnGBwYfL5r2MMF8acNCk4mn1GUKaMHkpvDLTF",
  "key27": "31KorCXW6UvgXZxD2rgPRjwkukkvfj32DT8QAJeEnJiEzRZbsvNFh5Uo6Mt26PHtKZNHcSGWnfNbPMYkYzu9Dyqq",
  "key28": "2g4e7bjtSJBGR8VfoNMRMYE3GeQUpUUyRa57hpXrVREkpxvCxmgUYrzGqX3pho7TpKXNJXY9ernscqTDEpxMsRFr",
  "key29": "4xDyZLbSxVigHfo7D7P3Jc6uypAz52ZssxPKiMsosKwxLcaPUbQgLcA3P3Z8JbBSvbPpCzgh6xbgew4PKTHNGNfc",
  "key30": "2YY9UL2uXQz4Zb4XFF3X29suTgMHmisgoSfzJArM6KBnA2FBp7ebFArmcVnzZtd3bgjSu6LiEUNZphoCLwWPTKHH",
  "key31": "2PdimRJPtuteAyXGdhQ2VEpzcwzLrKtPHN78W9RMwThWenAYfxne2RSy1KWBMtZJwQbYeBjxzk2bFi4tjF5wgFC5",
  "key32": "TQ28JePAoLnsdg7nMLZQtzxF9mBeT3KCtVVfTi6qAzjonpc6gJj1UH5Tsq2kewaMidnCMcUvrbaM2VwtG4C4Qx7",
  "key33": "3sHEdqE2qAE9UTK28cqS1wjnjJXPVZgNhPHNQpb9QVyk7cheijFpNkgHvZV5RiR5bM6ywJa356LJYnVYH4GZLoXb",
  "key34": "29xBdVRbZdTQrSE527vTygriT67Ysi1GuWfDKPpFfkFMVi2J3eyhGJ3tAo7JnjrL22tRAmXM2rdz4oBEo77KeTMh",
  "key35": "5zuhWGbmk71H2fHwBoNEdGA6GU7H2p5eUCPayBdknvDvepBi8DKumNJvvZGzMA3yFWXpwozDfRDc7xj1sPVxAHKu",
  "key36": "2DH4mk4M9qzswwseyCTu3Rvhwekm1oHhcwckUrawDKPsQBzaKqdNFj4htcMMsJFRtk4d29bLPxRnCg1XhndJDKfQ",
  "key37": "3XRqfCooaSZc2ejKniEUyqiwoERjA7vMBh1NgxdhZpZTZccbzFXR9h6sdSR6JASZnodM8qjeFmSwiNiiSohbqQMg",
  "key38": "2iu5LcpoKJ89hYmSUHbGrW6hQABi8Uhn8mjMFR8L6UV7MpoVr9XZ6wiuyFgejzzcaE3KLDE5nrknt1rLRBp58iKu",
  "key39": "4D5nxyi66jusQTYKWzJV5e25cQFqw6gC2BXEZvPiSMAY7x9Vb22WDSbowrAVB9SkoJSkFRgGTwGGZ339aCBK3shT",
  "key40": "4stKjPTgXoLBv7ZJakphyqNdhGgWefEoTR2j66GCvgs1wqkXPuiNfncNibYg8XNdE6yAknb3CPdC1FNgzC93D2QF",
  "key41": "4KmSkADe4NjYDdrtxN3UHQ4AXvn3gXhTpo9oNBkA1FjjyULAQX19t3DExuvrrWvC4L5DF4sqXvbf8Uj55qptcr4q",
  "key42": "2Ys6FY1cseroKonsw8nVKQgbMCgEDH7E8HJ8F8NfFu4b1113h8Dsqygt2skqnVPG6ZJJVLE8LNYHFdPhp5U2AvQa",
  "key43": "Scroa9knZZCBkus9HqRTi5JtmV9HUiDqmh8CxxyrEURkmpyax3jcUuaNWTRSvyZhTGgYUZU8s9wUQo5oPus2TFA",
  "key44": "5pCsbfGazHfzAFWDbfSTQkBkvtkDAUuaMhMU133AN7m9rG8zQg3R9vBVcpas7HnHJfeN9EeKxxuo7tco1J5wdFRa",
  "key45": "5SUSK998PdYeLZfZa5KiJ76bfVW1dLN9zPh1CYS8juQ35XGTfhqg5gzuWSh2BBR3wrf6dbg1gTVbTnRo4Dogxjp6",
  "key46": "4tvnMnx5qM5DtfZktHaGuQ2JV3aV72VdsRcCubyR4rYXVvEvn2duN2Db8NSiYswiJczi5HXJsA3xAbTdm4nbg2xg",
  "key47": "4iV4WefkiFhDpJPQQdGa859cRdhvAHKedbxcePqq55rXJmhTCvbo1Cw8P7hPdVqs2bYYjwAiHWTcgy24Pt8afdXC",
  "key48": "45eLVkyeaNAqwBQFsJSR33w189yhwx8miGuYfEPjsyZFPN83nmwZediiLtbctACyJivvSTVqzrTZUnW4PzoJx6E4",
  "key49": "GuTQSU3g4JUSsvUcwLQgGBuus1rTnpArrfTQdgJC2Gi9JTHyJUPki5gKAWQ9uitrru9z6ZsJ7LSwJ2XB898uvfp"
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
