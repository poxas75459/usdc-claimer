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
    "5g3HUaVbrzh6GvcAivE2JaqQ9mRGpZFbMUeEnBk2BS9aTPoWtZ22e3LR4ci2uW88F1Zpdtb6MXkdjTuLNQ2GNtyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AF2vdRx1QZpfwai24TEdkZtwqjaURsCWbZbbGvKP7YDhTgpAYy1sjoCq1TYwsGA2LPHiWetZUjHLMSfwZiHdYhs",
  "key1": "5KfwpB4nm9zqNGdZAbja5emWD9h7s66eg1nmFtK5hsAY9P4d7rqc8xxGgCjE7ximNEBHPMbVRmRHEHoNcdbgqJGk",
  "key2": "5hbFihh4kB4qPNyREJq8yLzuSrGaGJS9HtuYdnmzG9qVAMQitGUurC4o4MK7XattMgxm8rKdxMkKd1j5o8PC1kuk",
  "key3": "3uvj1DDn5G6QZkV1Ayy7NFRhCNrT5dsErizP85hKejE6ojUq4emHBG8gBvkyAbsBUS896TZ4TsqMkee11NQFaxVo",
  "key4": "3LV9KaApaLfFT6qvfb7CSbBVHscY6rB4mxZjuM6yR2bgby2kBEyCQmtpp2bDiXjj2GDTh3C36A9A6b9HR8UyW726",
  "key5": "5zXCGsy5b8qTMZQHzKFVk2H9LHQxQiYNh2X9TbMiuewjntFvBqJaa5PAZmHkBpGifZtHLf5q3JeUufUqSvNw3ToE",
  "key6": "oaLEhHssXnMRtV8mRHrGM5NyQfAns4drNUbDF8yVoRbGZYwHSuxeevwpgZc5fPJsRnmMas8pyZQepuvBeiZR3T3",
  "key7": "5sdxyTJvBzj8eMx713hGhm31PumZKYAeHqSHdXHqPxTJ7yKs13JmqJcMNyXEbkjSnGhLdk8f7gG8242RwT3aXAS7",
  "key8": "2CXKLTwqpxtC9uyzTCH8mbPcyAnUd8jwHcR2wEXfrN7qDSLW1hdyDBY4fx6THWZF9aD9yJ8kpebxPznv4H1ZatAs",
  "key9": "4pSdRdVYiSQBzDTstjschRuhABR7JezNgchfMb7We4AhkBAe8rgpF31aMyK4M4TdhzcoWui4KyxYkTomAYzFCv59",
  "key10": "3dWrpi2EvHtN8ZmXWKhYiFYbsiQHYsCyZuzRoTFGQQW6qRc2zjwDFVrx9DUnHeJh5M6YRUbPd4xWogvgnWEsd9wQ",
  "key11": "5NXrZSm8Fdht6rSvxbuFhEVtDKfMLinUoKJHUjmKoVEeHDRW3jo5nGRqjfXD5dV5CLYWSJ9zwt4C6vCm55HU8MUV",
  "key12": "5FRP5MZEQCHyW4j71cSFqYbEe8zCnfcmoHudgaLu2mghQ48watwBKMshopUaSggc5Tqh2eJSicJDDbTKmWGBFFo7",
  "key13": "4Q6jcphQr1LgmFv9HamV8v8AFMxsqC8Uz3omyPRVfSaMkNF3ugMMxVXzD4BVnGyGgp5srRbkADeDWHpWGraZo6AR",
  "key14": "42FeXyH6KQDSBLoKbGF2T1YFZnb9Kpc4PHjgymVwgUJzAivjgioFCdxPUWykLpzVWx4u6bchMAAvtM8rQPuX6Kne",
  "key15": "3ZvsFG2zzJnTrE4kvpWG4UQrqc1gXX736X19eitrkc63YFBth5Xb54QwFRiHGPqsNWBigjA4n7qgxqBkst7Q6kic",
  "key16": "2aDmDQ977vgzN2SrkUcCzopmGBsziPnkDeW9tGAh1fxuTiCT4gpLQfgDuENcqzjW1CHhbzWR4ub4uuS2ZQLnuba",
  "key17": "5uvoUCseaKnp5zUNuqPJPBShPFx71JxFbxQU4o1xPAyqmiMTXry7c2Pih6FxojyjKW4xmyRNzsW6G33YueEBW1y9",
  "key18": "3Rb61UZCSKMj2mkJPqLWAmxCWjjG1gHas595yfXJdfiqDhuf8ajAShCMwhGMZz9YYUB49S3VfvZpoTRBdRQFsDCp",
  "key19": "2eWY9HyXcseK4A4PhvzDgiT4duB193rciYXtRx8647BQTfF1fhocFZDMXkTbgdh9oJaaG3XDXdgMfWEFomaNyovu",
  "key20": "3aQAF62RceHsVDSfzwfhkcGvHNZbN3KRFeMvdYDjUP38s7SaRqAomiufBSprF3XbJWCuXUV2F8qVNVZzrQeeJu1y",
  "key21": "hzPPAe5NVP3bnxt63aeJ2ER9bdi17UHC7oRzzZ6gZ8yzAdXk2emBDkGAyaEzxUacnBshfceYH7wd5mXZtfjqBic",
  "key22": "iPRoKddTmPfXeDABcfzFJonT4bCH98TfSSL9Qurr8f8STAUkeyLA9pwcE9uUSgpZ1FNzWcUhvw1K4V3YPP6r8Jc",
  "key23": "2fGtf4LTryWjp7HxmW5EkhacZAZ569z7xm8MbNPT5Sqcx2KAnUnXEkYKxNDhtVxUNesw85bgekJUABupeEqrymRr",
  "key24": "2VmYQ4vNJci6NfySjsbszwkJqi2tTeyEtMUGjjXmaBu1SsZ2MPBsM3oZDepsnyj4D8ju3DZswtDQGwAVNfh6iYmC",
  "key25": "3bjsdRej13ec867VgtxwPkvCvRYPiVVzoSivALBxA22vGufDgNFr76MhqqTcV1Th32o4fK7o9ZdXAEogGhBJgFDz",
  "key26": "4JHCe4VTJxLM1GqYapeKc5KstXF7eh1Y1GN83jmVW7tRMWGnbB7b9Za4Ut9pPW8ksP46sXnLt1Bhi2G8ScWb7PWu",
  "key27": "HHtzL5Hq8E8KeX6dAJ8sw5yCEA2xQjmZ7xwJLQjga6viAWCtjV9yz2x2zMRQc8UbppTRccueqxDDTCXPt7DTRZs",
  "key28": "3vDttb5HyJzg1YY93hwALFHJpVLx3BkpJVz7yybZUFPxNHX7DzjQ8nfAcRUoFQjwLUyd3sCsLAVGa5J3TGtRP9sn",
  "key29": "4jpws9rEUVqqM4puEqrwjfZpw6tMd73SmrqxCuqahhdVx1ZFKKLDRVwTULykBSRMMyrCyTjemiJqzazpEVnXTFx4",
  "key30": "zvejVKYJPsq8rop3Jv5t2Rod1pv6d9kLvWpkCBJKGRKNfx1i4r1s5bWEv3m1ZHcXPPDUEjS9cmvtBX5trtLecDH"
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
