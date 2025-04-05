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
    "3dHSu9vkeivjCQpXwLCfrJCgh3sFaAL8EJ1d6w3SnzCdaRSLTTmDngNpxsUdTzt9XPExcQqVh2a1tECHA8MGqqvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYzyFZMQNnn4yziZKBZfTbvtcxG5Js3dK7XCwkvxqGXnBGzqsN4bbmmcBGsJiZMKnzaF5gtm72WuWAnF3m9aKgV",
  "key1": "4cvZnmmcY3GtYWoK48rA27Ng35FdPndE9rfCKMNVdAwV9SFjnyVmpTj18RwyruEeNTZkKPqmZw17ZJv1gUxwB9xM",
  "key2": "4bxzGcqGnTYERaFuvLZLhBbh5E9J7fui87VPQ9ecjVPisKSy9zK5di2ZQ2TeJ7Jm3syUZ27CCb596KjDPt5LzUoP",
  "key3": "4gCqsK7Ur2g5EpC44EUru27tTWSnGFVZGaXDyyWSxDPEmQC3CEnBuEhrZoVNfYsG8fHDURkAWCzYQTRwLT9EFxv5",
  "key4": "bvz77kJB8Nd6Vd2cpBmbJJ4n9AauJevL3XvFdS27Co9zfLcR9d6SirzYJZ9tS4Xk12sa8JbXCpjjnV8RoKQCZhR",
  "key5": "5ogFx2k46WTvV9i6mqVUB8QCa3WM5sNBBsbQouxsSS3X7NyDhPx8G8zERCctRgjUSovGdHZ5Ck7tGpCPwN8wpePe",
  "key6": "5NaK4iR2qmKDL8RCCqU1XLiCiqfM2WA17nb4G9BpT4PLdbPULzHcEuV5BX5YYuzwLxWugGxhGLRWd6ofiEejGoWU",
  "key7": "Kb4qmUXy7BnvWgCN1QMzm5QyWw1pQYfAJMaJLs3NM9CJuqcjhfsKTz6Na5VDmakq61kGHoRQrpoLX9p9TWEb3DJ",
  "key8": "4CTEbp6SBN7tbf9Q1kwRC4hjufKeZGpLJ3GPLSgzygkvKZCYXJ4i4D6FvnTwsTw5ha38p77JXzQBZo5ZRDejuwve",
  "key9": "4Nb5ppfpoJpkBLXJK9YGSXkQYoJXcuRJBSpQihMA5f6ExVUTk7HjW454L8GKJb1qbpjqG8V8ibcNw7PmZqWMV5EH",
  "key10": "2gQvdDN5TftGddZfTsBkz8KqdgC7eRK5sRc5qZjrHyqNJmB43n9qNMX4humP3Vywp1wrmXpWPv9oFff51Auyb2Pb",
  "key11": "5MSQi3wAheXP5X2hzCzQP7ZQT2e5FJqHb6zvqJ73RTK6Wkz6Xg6Vjg3YpALAFL4YCFEiJYyZj28Uq71jfYFc4QKx",
  "key12": "2xi49jjAsFnKP5RZZr7SF9uL7bAE37Xnm4fV5HmMwQbsDzbGkKYPJY8i5ffUH35TR91Qana9tCT4CqSd69MQWd8k",
  "key13": "Bx9nR7RJegUcp8tHivqtQ5DKPwQEGivPZiNKqdbCd69MSxx7GyAxBw434QT8ndZB1W6iVimjmmgLzxmsaa5fTRH",
  "key14": "5AMpnKPehNRRjxQgrmqLhwdqeTUTpFzze5pZ47TNSNrmoVvHcCbsu7AXoY7fatZbvTevPW4xPBx4oLPm4VP34ULg",
  "key15": "513UFA4YZ7gfdC9vGNBju1xhHd5cPLXfPYw8Xy9kwUAuPFAD6yRj9c22bbqKECahmqLXF8BNFR27X4aXJEizqEfz",
  "key16": "5pAWv1bA45JUJn9c16i32kXCJCbxBr3nJwviwGADiqhuCKS9pTf7ZTZeHJKAxKmQYzLtKfQvu323wQ6wVjS6WFUr",
  "key17": "2nNqEtvApUZQcyzYP3xTSFLcCPUHUmFdaZ7Pm1dWczVRQDFFJfiYZUkWKZuop3MroyNQPgVEcZJqUJKTEXVCyhzQ",
  "key18": "3BtcHKHLLjPT2pQRP8X5wgH4Hs2Y8LE1W1kDTHndkus2xN8q39URyC7ak22vWoW2k8rRAGwUSSeTZWQdVu5fUETG",
  "key19": "hCGS9pXjZCaTmKRr7u5xkStXQZpnk59H3M989uLsdBxfn81kWQnaZAFkXA545RHat5me2e1z46y3GFRuFQc2Ldm",
  "key20": "4GtR2eVEr1wm7MVyY7edasgXDAVEmoXZJM3tixme5Y9dQddL6wKy6bTKZx148L4ZwAC7SovQ8N3rCjGKhKjsR7pA",
  "key21": "TFtcr15QdHJ1HEeQf5nsCpFC5ejKcV8Cd2ZwMsHGixZ8cdEHCNehYZYiepqBxwQXmyN3D6gA7f35y4yYNad1jZG",
  "key22": "34ZUZWCnEjKhdEatnn3JS5m8KTBQkhBcCiGFmCMFm4XeZaLp2pCYynumE9RRKXPbFB3MBvGEnHZGp1jj2Fd3cqpy",
  "key23": "3VSccdueYn1GwnzYKYN3mGdnztFUnrmB3Ef2cNoGYiJfau3ETxgg3NTHz6B83YQGsC3zitFeSnB58nUGFS6txZPi",
  "key24": "3PcDtbJep66TLgDsTnpdqLPutNQgJRbAPsDcEs9QKFZGKvvhzNzubjBEmHMvbUpmjaWD2GVmkvBvnNrZJSoEnAhd",
  "key25": "4SDvTc2E6e38UTcKUYMn7wU9zZLpFceEVR5QGi5MQ7KGd5xpys3f7kL4VtiUKS52b3P8c5RwTVJjLYg53kSQJAzu",
  "key26": "2VJmE9naVMtqNtVVCTKcBNcpBUsSVKRrJaaaXGwjpNdhYiNpGhWscQXhsnjPiJ7dnzBuB2ZTa41oZb8f5umYfmy8",
  "key27": "38K3XKQmZgDRU5W6oxFwaacDjQiBS1C2APPEwB5c53gMKkc1axmWx7T7gR9MV48ne5799LzYFz4CXm8rugKjTfZY",
  "key28": "5gqG4424nvkCYeq8cgzEBiYoXT8UnypHLeQNuwtpK5o6imC3hNXCNeyDMxgS2pqQRwfi2AXxphpchBGCUBGvgHpg",
  "key29": "GEMaVHy8eesaDg3HmDD4jFs4nqQNVsiE6YS6CqYyDEtbTH9sCqnf7ztyMfG3nkiLR16zHxubNaT6U4PedXbJoSW",
  "key30": "23LV4HbSv8L2H55iCBCx6Yj5qaXjy7Kie4oHDkLFbMkNM7N7yNcnzcb3QjnSesP2Ecghvxkh3aVUrWkmJoqMD4hn",
  "key31": "5gUVCpGxL7wvcmJTCLQ9DrehHf39yEfzkHVb9UgLrL1HqtieZSc8qEnHKp6731CykP7HNc3J2mG82Gob98zuAUqj",
  "key32": "U6nAtbTmdFDVBomi2VJuCuww4eMfzMdhqvWQJSUHWpnoZMfyTAfJcUgVe1WRcDAMSgU4isMspAUkAcKmM77uDpk",
  "key33": "34ZPctYRBeXbF65FoU2mYADVqYYhuudefyi3ncPJZC66pAjTxvd3BZ6VA8bzYATbYyYkKWgyn6BsgM9Yz7fq4ak6",
  "key34": "5y5gNx4cfFztohsPBCxfKmRGnHfGunbk7R1EHQ7qAfnPjwaztehXqBVB99tgdu4LHpUacUe895Rvhth16F3XCr7v",
  "key35": "5HXVMLZs4bmEu2UUNumxnLjwsajRCADbAbbh4hr2udpv2Wt7J3SpVXhqV3aDVfXuWC9aJzmvLJyz2zCLdnix5Gvw",
  "key36": "LD62NRUU2dPiDUhGtjjmtfu5gj3hjyWE9xkLZR53AjAvueJQvNu57zVd9uGEG3bLMfCkvr3KuvtvNwRPi1A7UhE",
  "key37": "46wuiwGhdGTWdLFQCEYuCoN3RzLm5F4NdQ8ccBkXYfTMbSp8kzMMiaub8mchGFR6kgrbFMdtVFbtfbymNzwduAra",
  "key38": "gTFPW32yHC6QakqmYEL3s42XGGS4zEqjnxc85FUf3o6Cfypgsz7DktLteicA3iedxMVKwBQvovkF862FpXFTWdQ",
  "key39": "3bT2XzCkdkawmqnQobrjCHSc4wNyQzcVmfDCL1V1yTpJMqDZWoP7fLAj4n1hPVr2eCEf4ei3Xyyv5TihAjVcNcSQ",
  "key40": "XP8jnQZKfJwc7ZrdtVLMm6RoF45HEVp3u6srV8CcVFTGEAjP77pMREW5xxvoXpGeKBKwm3F7CLEzNiTYBEDHtKJ",
  "key41": "5Lo3Xu5caxwQndrY7EGFutxfTKLW3MhHziKf4YuiWCLyAnqQV2pCi3U28bGuF12ectkrc4sWddb4vPs2wWNsJEfs",
  "key42": "5mX8hhmUSK2SnE8Tn1feGuVmaaDhN59Ku2bvXfPePYWBDM1JNf7nfRGnj9Au9jGk35PxoBZkpm18Hi9Le83TedDs"
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
