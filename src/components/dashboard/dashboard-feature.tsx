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
    "5pP2rH6qcZgyiWpJA2WFpQowmLujmbiuDd9LWurmYdh4fHYKN8mEoNLMPi8pYRJQCsJonu6HQZqtrLsiUZqFR126"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UewaPXyGVk8yEZ6ouisq5qGruFAf6k7URRqUHcJfcaKUjp6kuAhKmmpXRZVcbhdAnY1nFDRDeHn7FiQJgw6Fbyc",
  "key1": "25ARvbXBYbti1acEEb78XmfJiB3kDVrC4sonGnji4C27b164LLsjXWo8CSm21WPyZH5k7heqW3h1HgSYEfNNq4sh",
  "key2": "2eSgoiXdCoFYMrF6pd8v4tcmd3F3gJGDPoadXMPgzfs6eCfFdkGaybLDzpAdPWhZbejmBybq9TqJvfhTNxakS3Rn",
  "key3": "4bBtCBQQQGGjKKPeT4a6fMzphD9EKYyUredGN21btwHcdvN1kSHbFWyvqcugmDK6hYKeM4EgFcPXQvdGavz9yFPZ",
  "key4": "3fPWdGCBVkXsPAmtZNCnzHjBfvRMdf6zyPVqbDiFTaVHyZQUC9X31GepvwZH7Vi3woTAXoUNZs86b2nbrgHNxk6M",
  "key5": "5Y7cW3ZK7ty5WowQ9QUKmWayQSyMrfeiGcLCiDKim4z86uP1qzodeYw5TJ57KXEJfPfe2cZWzJyGUxN7rkVcZqwE",
  "key6": "4Bii7ciE9XVRMUM8nXN6Pv4QauLonynGbYVLuarGqfgn24UqRsarSNQCbMJh7eNnxuq5QG8F7iaLL6sKkAEyLmyd",
  "key7": "5yjpokLbgtyAAh5JUfBe7yMY3GkmDvq7Xw41eRQwL7DfApVo2PeZDHR9zYcWbfZ9HWYavotZ2TwZf23m6NbLqy7X",
  "key8": "4Ny4EC7UWx7PpENMuxntogBki8KRk6BSDRwmsSUFQuWZWGmw8WgaiMRgWoE4566Mw6283mRg73EdRSx5vFndHQk",
  "key9": "2hs1sx9JtoMYuYUjVZNtrVn4TedXjUhmyYmNLNHdsHM8w1a4A7D4mKf9HtmD1jNKhLr9UjXkQoDXnMxU2FvHMR3C",
  "key10": "2JvJLoGvHt22YzJNntGXjwuySnEsGyyuDhaPFmh11t37GPLvcSKUS5234EcBEc2XqemSo6BVUNYaosuWLTEeFucx",
  "key11": "3ANgDWRR6axcEwJTnjT2z4PBJ13h1hJPF5k7gohvQMMDxb16XbKDy6ruNwAcTDQXjVpSEFjffZ7uE48cEyZHjf4p",
  "key12": "4npnCHkh8bG4PANzrAYv7ZqvxbqUtagj3rnENLuwkTUeVbvK1PVq3uVzA7s94H3UGycmuwrtF5L2TspJ61yh67F6",
  "key13": "677UW35b8gvs24sVzff6JRFWgcnWGvXG5B2FwQVMM5drEWq68FcqwfZiE7P6APgP57nBJDBcgWuZaVKH943i5NX",
  "key14": "4XN9gyEzAugnPVpC78H6u4rPijwqHigofXCevca2en81hdZMTJMoS2HkgVdiZo7RXYpaHVqaEE3QxfmXfBMLwoAQ",
  "key15": "2mfv9WGhEpw9JkQEznvCYubEFU7hGX6D2fv83DSvxun5GAVoyBWPx3zH7JUDX263moTT4wS69dWrxxragdnABwWZ",
  "key16": "5d4rAUkCWdRYG3w4EGxJf5be2rzryv3VfaNnBeHBA7KC4BXRsmaRAj6PJn5YhW2xq4Xjc1wY3WGST6Rtd4AC9X49",
  "key17": "TjUiSCvoMyPfkinn3JRJ9fGEQsJ1vpwaZD9fWXuX4SGrsgVCTi26FnSHB2TnM5YqmvpwPtBduFvBmMzXtNSEJCX",
  "key18": "47ow5q1KPuD33qNcvY7YCQF131L9gSaa9kKShV7jephy19dqGjyyLknXbEmLyx4mymXcBQHAEhdnDZQu7wr6xLGv",
  "key19": "5tLapctjLdPG4cNy97GMRqtQZ2UpZqc1XYME9SWt9McRM2tNVEwfgEuboNTDy41B7vkCEcJSpC59ypvdbUsw3vnL",
  "key20": "5M5YFrDSZjo4NCoGwjdP7BpdGcS6qEquxHnD63Yu4f5VCwUDGNLGsqZdU6S454dTmX6f9fmjCqjvjU4ornyiqAXZ",
  "key21": "3LigdeVyzx1gEK4v9keTLmdTmmHqv64nNEHpswcqiXBtXZwx1F2HoXrAVP979Uqv3eE5aExgs1TyjYEjgXccduwr",
  "key22": "JxA7bPUh2WRj8CxTkV2PBeS2VZvEB9HiaH2yoBmZ7eoA3BayZ6if3BEyHD5JWTPqS4HQ9XtqxwQZNu816UvTb19",
  "key23": "UiHNdR1drNvMknejHvPAVm1EzVtuSvYNoEmWbnCAFKvxnjFx7bxAUSjFLa38XmiAnQdcgfgeJns4wsfWr8Fu6eM",
  "key24": "8dk3AC45mEyaAPDTAgtz43spKPUDk1nSgvuwR552tSUtL9H2QsK797xLmBjT318uhnLnT9x9K2ihiTkSem7N75V",
  "key25": "swWdCin18ZeAeYq2frFRTdFxKYN1F9e9qsQ7aVJnCc6zzfeDZaQKh7UzMjFFoYPobmgjkiz9na83ZUWiLYNY5Jg",
  "key26": "4NsanBMjAq4irjpgcPRXBskomKc2R1f2cMqXD2ENij1Bs6Jf1tUfjHn4wvQ9DRYQQVRne5j4gNDh1LKsxTXvgEN",
  "key27": "2BH5g1HUhDdJdP5qSLBeG6tARE5g6f4VPA6kjB9kajhj6UsRr2PC9cM6Kyyxaw4yF73zEop1CRVvodPiQvePGH9n",
  "key28": "57LtkkfXFDYMgGLEJZxinhpZesUmcAy27DFRqbCYjLzqKbb7g54KrJhpSwbPNJguPtoy9dkbPbM1GaPm4yVqr3BT",
  "key29": "5G4CHVPj754cQyGfVZi1HSAzXVcC7XHJnFVvbxzSqVoWgHRAb1q1o3gsGgbYFvmEB5jvm36Nwti71qYMYLJ2CZ6J",
  "key30": "35TSqiPBmnZac4gMxt7hWz6S14VBNVG5Ywt5z77uKBS3DwNF6zg4RtvfnWP1cRUy8Zxu2psJjXF6qnKh4vLWWCMP",
  "key31": "3bW9U5Cj7gB2azXubuPMLFPAKxmgoWnpDrr9vyS42nPvQF8rGpctvqN6kyEm4GbUsru3KkoJAivPBv1DgpmbHXAX",
  "key32": "iHwzpdNgPQkPHkedHLKmyPuf3AHfvyZ9SFFH9yUrSC181WjCnT8Sfj9QZ7kZaRk9kmv2qzV8QRvBDoiDW1yr1rw",
  "key33": "4NXGC4LYS4sfgRDHUtkWjQEr7q3dg56N9Xo8pN2wFjeXRMePaLWYT97G1M2jcuX2EAyTDVtitg1FX6LT3c3GKWne",
  "key34": "VBHr1BYuyDidB4fJU32PggoefNXfXzGdoSf2WRUM7sTh5nwt557k86a6F2aPpv6ruHUwmMCV4qmwTbs4Vt8yGPo",
  "key35": "3KkhXr3yEmDHFoUyQYsChsqeyEjKPG6bXcG7ePMEnJbUg4qLELMuKHiXgqRRowvXoFKGY46XdZsHQKLXEg8BpM77",
  "key36": "33bTPck9gNDpWAnzDSaB46k69H1vwL8qNz1HpywcCUpTzfmoFTMfF2sgwcjJgNM8LDQyTWgR7JBqQpW3ybanLAaU",
  "key37": "2QtPbd4gEEEUeVuVpK3cCaM6FgvHyTnvN4XziV2u6JBSjAabnkYwAGwQjPmGD5FEtyaB9nRD2cazDhFcf3iPHVFw"
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
