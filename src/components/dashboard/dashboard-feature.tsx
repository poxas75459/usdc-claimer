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
    "5ERLFXhXCXiUby8LzUa44LUCsCpVwiANQHBav2y1kdFgPcvbHiGhAKPjavFUxBziLkcegHhg1S11iyq4DHLHAGfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2XaKLwRH82QXXyaKRoDeDhC57rGydeSUuRKYpLFuPb9Q6EhUa282UhVj9QS1B8WGcN2L34AfumaNPR8PZx7KQy",
  "key1": "3TQsM235vbgv4zGigE9YUCkBRikZBuuhcQEUUyjuujnvcMyEPTxffarYLxkskowU5CjZvzsWSnh6szhXtvDGoMHg",
  "key2": "33JatF3BRhv4MFqeGCea4Von9h1G8twiq4vRzoQrmP9314xdnCV8PPGM8bP9sQDt7NmqTHF3r1yEZfzWGisorwX5",
  "key3": "3k1ZPs8vx45U8Un5Q27biDPKaJZ9QdFHA415SJjC5vw4VnCLFhMTMjS2XhXJyCAj2nb3opmuYCga8Fso8c6SPVqS",
  "key4": "2aGzdJFRVJcrNc21eJVtYTi9StZoXHafmGPMvtJ4N14tywrSzUzXo8SuDkqa7hyuRYuaguetKN92byrajd8CiWCd",
  "key5": "muTgkTLZqBGq44DEzX3qsev7apteRWWaePPpMWEctwmdn3KKZGtquJh3sPvL2zy1rdEz1L3MymMxyZZWESs6Yr1",
  "key6": "3JKVmZrz6feAiRJQX2H9hJQgbNuqr9UWWjurm9huS7x7roHUXZDF37x3iybCBK8HQgS63FctWDx4Q3q8DgfS35Uc",
  "key7": "3hawPmgVJK8xPj1U43ZF4oaqLTzSM6pHf2XvEJLZVQHQwvKjzSyF3SxhjWfV6EGZEQ1XAWgq6f77MBQ8QbfGHkos",
  "key8": "4fLMXwXyd1yay6tvfDpKR9ufqaGrqfzfubwJ2D3Ar6x4na1MD7Ai3RaoHNWNTUXe8XVbxECZFuSfqBdcFnUzRCMy",
  "key9": "3NJRh6a2VBpd9qNNbKo4DpkYXZBRrkuuHw7EY6Y89T1w8CvuCM9DKQe5CiPbNB1eZYscxt3LECdQNaqVVp5dyYXB",
  "key10": "oWrpMhs9SYEGjULNDPP8fRQoHbDvKyLQvHNz9xqCMKuFCcC11Qemf9pjdUTZrvSSn5fg3rZjeCFiYvGm5Le3Uda",
  "key11": "rZ13u97VTJ4pM1sESKuiRubcPWf6NyRSGzBUtG1pyNfVBwEtLMSVEdUf7bghrm6fdAYuqzkfmsShyKXJfjy3V7x",
  "key12": "3MjFEZ5pzY9EC7ALmpPExkvLv93kbKXztrfNApd3oCu4Pc3SuasyRGU5YvFrj7bDCiqbajuK829Bb5NrnJ4pjbte",
  "key13": "KBKr3JgXJ9qPBoQx7koYjr2XB4EgoV2wpL8eWHunyhwowUaK9au6XMjWpjS5qYvz85wu5JeL2oFnkwErm86Nktz",
  "key14": "4vvYrVg6aWNtySGY27CHgfj9naVqMefrRH6MHAsp2pRrDgXgfQfxDpEc1SWnoJrweQH4eNtrxEsYtM13cptUGPsX",
  "key15": "4QRLf6kXP4mYJRAU7rKsmKE8XXYc8NDTCA1WML1kozxMVYuAAZPhx6RM7NYauG9kYtw65KvKPntFEZSzWbD4NsXz",
  "key16": "445idds6QiZgs4LjygKJPSycoigjbE2WMmUey3R36y3d6jbBY4KxokMJ36s2CrgiXgbN8AyEhhaBC1V1AGJ4fpQi",
  "key17": "5LrhwwqSNRdHm8nRbkuTGXmH4gfXKCPc6Wp1Tw5SStyWZUWpDDS12mpWi6ZPxAG46jw5Za21mv4LQ45s8GpBhwia",
  "key18": "5S8AdAqLrbUrgBgKVfoftTU75FjAQiBxtHUuk24fSgXyUsTeU6Sqb4nYFuwocDTo5Yq2hWxddgZdr29uohb5fSMh",
  "key19": "2NF3cCttxERGqqqSr2cUJNyC7M2KCeRHR9XEQjg6674tExqUqvNdAApUULqCF8iaQ5Bwdhrb9sSb6rACbwkDmyh2",
  "key20": "4ULKnFwm8mwuADhFQkQ4FPngnDMSjErJFHEdAYnY1anyXrfxDDwM4kVek73uw6Z8LM86BMKTYcWwdaRRS2NB4ryr",
  "key21": "3tSgs2YftdUweF1WsXWqcxarvEUAdfnabGEGjazKNYevTBP5J3G9ju4fvaADtEgPsd58Mwbp56t7fxQgerDSCFtF",
  "key22": "3vTTRg3KgecyGRYatCqXgsG4eEuKu57LekETpcBTBEbznjgGBHb6B1xCPB67FWa8vur66KWfPpc1xzW47hb2xxQ5",
  "key23": "2VLner2x359cNwEiGtG7AyZpLKRAYxBqhbYxxDbqQFA5LuFFCMhc6GbeUv17yd9d4ikW5CQRAqJwzrKam9DAMNNU",
  "key24": "iTVAkS3oY9m6LbZWyAEjjYRch74n6HKF3pXQa4UoideAYBUyWz9KVpyToWTncHWsNzW1cAYFkGPiYMPcPPj9jdj",
  "key25": "455XNeJ7uP5U7RTvBEHJ5TzgGRCB847DzgV5DiBRAU7cgHkDjgYUb2H5DyXsYC7WqakjVxpCHbwrkQioxck2neyS",
  "key26": "51ftNBtFwA6SKb7WiTcQsPJnndzyJVX6TbHjWe5G9QSwW1bi6fjuc7hLLpeReSLRGgBjQ7PxVGLYNqkBkQfBDgco",
  "key27": "5FAtSHxTxePJmiyMngsAb2U23544x33zdQ6Vg2RmNT8CtjWukumHhAAtqn5dB4CyD3FDCA2YepdNS3tFz7iMHMAY"
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
