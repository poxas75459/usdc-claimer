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
    "5PmV4cdBj6YgjzsFoGVE8SwNpmMMmXMhMoGAgrqcpuxtayrW3u946XCKqxrkAb826Y3QaNQ9YeW1qyiigQCfUNkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nMJang9eDhWFapLoHqKvjCsB2xinvwEgbgx4pr6cz18AsMFdSisdE327rV9TMUyPEYbLY1mxbA3vTeinQeuHBnk",
  "key1": "3PzRrGgJJ7G3dyPSa1Vk3iTVRi53ducSrnxyJzAD1KBhMabosdiNhhHhWkKuEaXY4dmdoUncYnRPi6Q3MRAkLaDL",
  "key2": "25re5gAGrj8dM1dtKtoiZpd4CHtfFJ9edcYuqLniz15Dc5kdcCd6bS5piLv479NJEQPSPBmPDyf7AJGjJNgHwrAF",
  "key3": "2e2eZjNQW13MezpS8Uv4jCE8QBX24i8e6MfLe7RvZd86L9n1SczbpQwnVeBDRkB6XDbUot7q4m5EQRQnLSJwXGcy",
  "key4": "2TUYvT8VRc6S6QtWdkMJw7MCtHv6NBVjAX5y3JLNiV7Q3YEz7hcfkDnbtP6rWeFimQLbkqCmVkswbU14uggvTo94",
  "key5": "53Fgdx4WDhL8hpfCo8ichR6efGVZw9TeGtoKXc4nbTrRX4ridytGa4abMkXQfaHqFb4Vimtr6wusoHZLyL4tV3dD",
  "key6": "y4k7Z6owyebF4nBrARn1nRysz9pQHetrPVbcyge5E7jJin8zzwapAzZmEBtBfdnVratYzMbMXvDPpC4zFVd6iwH",
  "key7": "442LvU3DuCJ596kNa4XWeZYrCN7tPWmpnfJ9WRL1hAXMT93z265NZ71X8zEyVT8xTBta9gAgTF5kWrMbAjJbwLPg",
  "key8": "4wCPpsc5E92VejHgA6VCGQRFR96hfb9BbxqTVGcW46Ne7X84CM5QEbzF3wbikjsArrJiQovFhwGkapx3ZKjESvmz",
  "key9": "5wMSPSWiSZpey5KXJFBkZydNYzdc4yZ7tPDjRGQhpCPLKb5XBYE43eo3pVUw6XAaJqAvr94kf9ZYdtM3Bi4ZqbHv",
  "key10": "4TijK6GaKSowu64DZ5EpTbQ2RmHoXfXm9KqMWvjpQBNfomEsEdu1BEcQeg8s76x2vkW1EhsFzsm2t7FFQy7n7A3Q",
  "key11": "2T9ik3rzSQmmoykjxazf8hQpx28HvLdohVH4Pnf4Jd5aqbyNZYAGVgbjvJS9JZhyJLmJN9mw36h4nRWGKTTK4rrT",
  "key12": "5Npe4WXTsouLZR2AGuk2jVu5kAsfwD9KA6LRc9UCwdtNMhNWakjpk57Fxx8GA3RbeQKJDjne1Q63qcBwwEh8MCtw",
  "key13": "44WRZLryasqw5UmWVisY7FP8A5NULA6VQmmAxfXEeWmPsJRQJhVTyKjNbM2YDcGdECiB4eG799sw5puMYUrMUSPH",
  "key14": "2yh7KLgzt7ssXzBaxBh2SooFYL9vmprDpA7bLu3U6uggqTddgE3xx5EyryyAxrtixPijizCkYTsLLrpUt21bCsiX",
  "key15": "2R8VcKUei6qmv1WCbf5nmgan7WaMrnHJK25wWUJj6E9iWXjMWUM6TrUqSQai5Gw6oJCdfP6gpfDJ43FZioiU7n2d",
  "key16": "3ieHRYySDvxrMsoktYFaUgEpc2srynF1uCRZU4JZWGgMVKWQJRnwK2JuUdPtVPcDvHyBaxnqagL1HrYfmFpSVe4e",
  "key17": "4PenMqt42oc5n9CiMJWaahuGRja6Hza9N2d5MeJK9GQ7pyYXnidDQjfJd3gqqVGKARwZQWzXbc9drHJPurGrCnCE",
  "key18": "2myZQzacqtuDfHgSp9zA8GXyyd6BDZZZrA7b4FvtSJt42LwpXckh6KBTgECDuDxXE7A47bGzbvaa5BsNA2Pc6P2T",
  "key19": "2ejfA2TstVQFrTGyYJj5SrUtsMQsgHCxSNxfaMvjHPiZVmri47mEz1tWp8NKA3DZKPAtMeLv82s3XE84E9NZD7Pu",
  "key20": "2VTqxuazfy37XYJ34zMikHae2RDXsFfComgNog3fB1YjM4pGvCfFvfSkS17LNpeKJJS9RXKdWhD3ZVvJTv1Dpm2t",
  "key21": "5m2UUc6oi4u9dQLkbGiWc8e1vwPUEJJ1BqpaHYzjC9MLs2ZiHjKyE57EEDKLfGt6yv7bx6C3Tp4NqpuFAXdBoWb5",
  "key22": "5XHppjog75NDLfGQCoxfCcatBqZF1hkdyBZSUcYvWCxJW75jU85nJ2pvhNdGzzSefjLTVenqzHZkWWVWrfcrqgTc",
  "key23": "3Dbr1aCgCfyvT7QagRxNK5an6UE6i2S39FbFYAC9cm4skNHmJ6mRgP7vdeM62QbeN8atuSciwaPQUwuxPPUqvR7X",
  "key24": "xK2dT1z8DVjGNGooFarL5yUstGy7ccK7ZW7mP1FQnHGGGqW5Kn1g7aoQrN1d9ZZ1S9kS2RhqMG9uCdtVYwiHcdC",
  "key25": "5pVHpMWxJ1AyM9zTJEz4L6x8XAPR9t3uxA75nF9DehcTWW5NK8mW4FzcMpFggrgExxBjRvviNzQ2ThU9YdrxKvRR",
  "key26": "4UdxvqeyNbFD6Dfpg9U1wLUUpykvHWWDX3ZCNZ9shYrmNXHxSmJFRbi7E9bgRhWZJ7vNzb1DNBFrNn7Mg8qy3JF3",
  "key27": "3nwgUPLjvDKPSrLbwCgkowZXJEttPe3mHthS7kwrquM94HAPZhciLpXEiY85UaXL3MN15gq8SWpr47CVd1JGRkFC",
  "key28": "36eiibBpuNG6jWqYNb5PofdJHUTRnNtx6aba416zXFBV1uwjxNqTajWrVK3iy15Bq6g5hSxHMCZp1WE7wMrUKnUy",
  "key29": "2CctCqAnARvYm1RNJWgu46LuskFPPkuGC4DZKW4oCpd652CHFsKbU5m7S2hTHqEdWC3uted1y37qopzmeDcfjZju",
  "key30": "3DvP82sARtGvudV6CGdwtDtfzed3csVdWQgLkQPixt5dYbJ9zXninFsComqZ8JyPqn2XGypesMctuSjAgcMKX7wW",
  "key31": "CaSzXquQVcNHb51QZCotUsXbHmexE3kYz7mxvgAcw4W4UPmpSohcajN3qXvHGqwd9CgmswaZV7VVHghWbXVHk86",
  "key32": "3Ezmw9yH7GzQQcimYHCpkByQhtUpSDTjVEwWSLw6D9VEHZSuJzTcdhKekmheKc3daffyj8szTxB6gtQHnRsEahZu",
  "key33": "4HK9osiQwTZpDcQSiLpveHrawp8kFoonZn7RcfwoirckW4Gr6UAMaUMDg8UecAGvYpQQJ4XvszWMNVCs4ug9QwfS",
  "key34": "4yfDwRa2jx8rJV9QLMtvQehj4HyEt3SVy8khVoMgfGXtktq2Y4Cx2EvWm7Qr2nYygELjARi49kpVCeJcFmnXbZu",
  "key35": "63zKoPtmZTGukMiQoSKVDLpua3pe2r1mcBDfABbFpoLafaDaTmEGU98u6Ds4HxDqLULnVp1nnxR5XfTdaMDtozAQ",
  "key36": "2u9vsLJo9e3ebh1mBoAUAghsSJicEGdbEPRxRrhFq8wPZ73akZAYGqR37fdc2Gg8jZTR8JvR2bLcefN5F4FQFB36",
  "key37": "567jbkmEffGwMWpAunaiz5gyXaWUHKrf64Zq55Yy2mJjBfrUzkd7Y6gqZN3HefebMJsTSuvGkaZ8Zw5mSHoSgski",
  "key38": "51QkZgEoMobAz9KMNFqbCxEhHx9zKcVrhwC9QChYikvvwJ39PyHXWyHg9PEBRJP5bAf6TWyvYfqEYWhUgvo4fAtS",
  "key39": "4mozyojbdTzgLhVtds7yYt6mGXGP2MoeEQw11UJmr8S324cmRipqEbLD1Zq8EPwqioRuLMCbwAajNpeiDqymLChb",
  "key40": "2gzx6kKhHdKNhrYpdokWjz6Nv7NxSvBy2aAEFRpjtjEpWhSn4RkYDUkKukhqD2twz7mZa9EoHdcQLg2DsHeow3T3",
  "key41": "5caqssB6JHMG6xiFCeyEinkS7jc6L5j8tUK5wFvAwrfqXNvMTu9R66nSyTkhAr1bCETjr7QXmgdWjbvVaf8xPixK"
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
