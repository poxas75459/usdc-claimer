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
    "24FcGVLZYdiZtW3YUmhZbjCjtARVG6gKCWEZASpbWEWgk3SaMcYG9dNxnzuknTVkUC9ysqj91SjNH9rV5B9Zu5qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSfwN6BNFBQ5ZZExcpuz4wHNmnNJgwWxpjv3uRLuKP1wbFW1oPRJG7juNpLMoSpLAU8FRJ3kkNUtGQMcSDgGa9p",
  "key1": "48zdZhU8QRDDJfgYGGGtQ7sJytz55vq37bqaZjHMtjmVECK9erp1q8462FGauKVsLfaQXDzeo1S1qnXLZ2TdPxWZ",
  "key2": "2Mdqvs9jDtDpUQkA6XhNQfpWbhrpvWcGfeuaCX7Vv2Mqp33QPWDQLAzDJYv7CxN61RrG4MsSFZ7cHhG5amQiUEAa",
  "key3": "5ZCbi9cwHMwrvWdgXWsf9ZgEsTjk62qBqqkmG6vB6eWFVSnnDKiCT9YUQ9eqU3AGVEDxwfxfMQ4rWh2zm7wM1YPb",
  "key4": "4FPdHrRpW42zowVZntkmSe22W8fWtL131vaVB6D55CZEiyqamh2Xc434KSao5SJ6e3taPJ3n7p6UtLMCTSvmzYvq",
  "key5": "3DhgXLZV9wtVPLJsxVNtW8492eiKpgkDzWftJqwG1qhxEfdfsMyymerGLkv8bwg7WVo7DnoYzAd1soRX6oG4qxrL",
  "key6": "5mTy4vdM7XpsBaHfysq7rnmjY1LgwQrt87ULeQRctUCKh93Kh4AQ6d5FVSdipN7Kuf46W4cS5jT55XWErZxKPpYq",
  "key7": "4cnywdHiCgWVpKpQMfY9ueSJw9tTsJbZdw6SzJp1Fih2zxw77dq1jRLenGFxnmgrXHXqV9cmVgwgehhdzRPuT24p",
  "key8": "4N1zcKd92mQdegWu8ANqzd2ccQomkDiiqun1Gk96y1LSNJQFHG2vu5SS3ygaB5RsWNw4gtyvZSkvSF9u9dCJwbVv",
  "key9": "RG5RQSHsCo31Srf4FccPPC38JG7ERyGDojS5crvaL3sNWcmBZ7pGbXCCh8YruQtyWbey3M7tmLtgB7HuiGrbYfH",
  "key10": "4Ykd8ewdApUbx5q8wCqZFyDwfdA7yG5BTGxqdRj7Z1sCpiNfzKEnqAcaPLcV9qCk6P7i4XenpE8KuLfGeaPJbrYt",
  "key11": "2MNLKpmVbHrjiz99HYKeqPZ7MGkbkEYwRgNvb4BVzASk5PhbFsWxWagJmcZt6npMu98U4KuG38S5ENnH2nKgDMd1",
  "key12": "27hFQBSZdGaj7TgF7A3ava6rAiC1vxPauGDMvUUh8b6uXsc2gxPce2nM7CAdZGtQy6VPn3L8rXNJsBThVXaNcp1P",
  "key13": "hDUuyjXFotnFBve8kJxiTXUZpLhUvbXmw7G9m7ceSHaSE1NyH93Sykzod1bHTvyGRvRCJXvdkB6GVzNHDixpHNG",
  "key14": "3hLCH12bJ7g19N7XjsdYt6kXy1x78m9mCbqkPxsJt3DSWcSMXeUmDSKc8v58RsdMSeXZk43yLvfTAqwMZMnJYxvw",
  "key15": "2sP77njuwUsC9JaMgK9xa1HLMymJyK3DSTzFak5fSXamAYns3wHp98q5vqFf3CDESkVN4pNBAREvYF9S7rAHqcSc",
  "key16": "3zeRZ9jQtui1R4VzmmrgzYJ5S2Asu8PvXwrjVWBJGvs4MTXSDAKE1U8vviZsu9xz9ba5sC7US1KDK3NxdqDVHvbn",
  "key17": "3G6wym7zFNMN1VxJqVSPQtNGjRKpAvcBYoH3eprFaYizEVUVDKVFwTSBhTqys33kYgwLWbj2p3RTSdWqTW3QG3BY",
  "key18": "5PiPRoZpBWDPoKNXaufZSVu8AyUB3cm8Apy9797zAdaybQSKRobkSVvs6QQ6dc5yDAApWN2CYLvXTBTibMi76ZZX",
  "key19": "4pruy18afUZjRinT17SnwxXzLTR7Vq9uEbmu8FSB1da98AoGjJkrcpCn9WvVd9TPSmb3Mujrv1u5XubDiHpdgrDv",
  "key20": "5TQwY2agYRxTDqz1MDstJeBVwczyx3vje7FPhFJe8SCjQwxYUT4M6voUPGDxvVvU39RqiEdVmAWKPj7DEnYJbJQw",
  "key21": "5p8ovKWUNU2Kas3zsHTf26JAAmLbJMFe9ApWQ7xpXRJ84FKNMovfHoyozzVDgoRxTxBHnB1j2RaKK2x5WDZwWAn8",
  "key22": "2jbrMzKhhgztZhLq7QjUgjG1o73m5UxKhRnfdtE3bB3oLAdxAYFiF82ZS3DBeuF1hqf43m69x3qkFm627JYMTXHi",
  "key23": "z6MCDPF8W7CbPKGTZjRpfY3kxzsWhWhYibVtvSv44PG1qM7AQk3oU9Kh8KUUHaMyNqVeK7ktAjZJGiFdx3QNTeL",
  "key24": "4vuKy6LQa3eZHDyJhi2hfzUeAhVWxVCurxb1gNNNTRZmd6MKW1VCVEU9VFyoT9tBhKTvpDzKfv3V4eMMEYjvuxaF",
  "key25": "zdkUScXWevPd4MmJyjxq1e3x8ePoCZPrA6rasCgr8ZBj2VEpCCXsYvKiEG6ospFNWmrJ5GVYbPuF2J89qCDYpb4",
  "key26": "4KgccAchNzm4HHYxU6WK2iC2oUd1c7yiMwYMZJAkRRGjQUd1HFBh2zHvPfjgmLmSQKKsRK45W8jQLoKAPR6zxgae",
  "key27": "4c3M6RnruXucU5fdpcVCbbRuW3yNbwC6CfZCsKSap4H4EVU3fwZgr2m912N52HndeFbu9eC4JL8JULAuMbBhLFaX",
  "key28": "5Xr2y9hDKzspBXyYG6i7dT55U9yRUNwrBc7eDnxQ2aoNBTzxhJ9zF9uxrSZq77hNypfkmU7gygXEVBy4MiWgcbEM",
  "key29": "4phnZwrN8kifRPHpNSgFMeisGszYqu3Y7M8mQSKmAxDqGbVLh6aaFFmZcMAhey65YBSzidW4gE8xSPzvov6koVsw",
  "key30": "46vYhDK6xYbQYLR9bHpdKRg27QMtna6SAGrBJKMkEUd4akKgEkxL6GyDqo58DEaJSLbgo1LRgz2zwZiea5cRwmhv",
  "key31": "2TQeLKdUurY6247FCW17UjBNwC2zdPTDdGCe5RNRtepJAtz5N5VSGKtWwbSow1SkB83a9hBJ1fhGUXV5T95z3KE4",
  "key32": "5u9u2dGL6k7YfkextWupVngnnQrgGfTeFfJFGUK76Sz8cVQyk6498gViHdoidAYjxi7vt1RkNextPy8r8NAd5QXq",
  "key33": "2Wj1KPTqHTEL7WeJuxhbA1QkuqFRPw79RrSGShRMQh2qjC1cr3h5RBCosTjXUt2ZZqadheD5A9hfr4TKLUg9hPBi",
  "key34": "2YKfmoxktj4VGneVDfZQe6v5zcu65mKTRCtDSJfJ2aToZAZLJRLxArk6QUYdWFE8Hi9J2EwjmcjNzJGHFfmkveFf",
  "key35": "4CTc2Fyys9edpe28wtBH1U6bAkYojaHGcfuxqMnfKLBogyrCbgVtmSD1JmK1xJNPdUFphk1ChU5CH6Xms1Ho4c94",
  "key36": "2yhs159Uq63tXg3rdZpo5GjVNBVwYTaras9Z8KcNhSddoBii41BhjJB9hxn14dQPmheKwDM4ehpVxmuYN8BJXqVd",
  "key37": "4F5AYvtc2HhAnaWA7C2pBgpQybYoouFoY8emfoXvFbzVYMrWRKgEETVp8DS9CYtmRxGPmb6kXa8HcDo1jjbmmsgX",
  "key38": "44n8fb92fftGo5NfSveBufi2TQWary4n5daZ7j7pFHT1eyVDA4c4pje4pm2LfdmrBu26F38Ufi4UFRtvu9gEyKua",
  "key39": "4pHRgABvwWMh5wUcqYCrveUY7geo2ccRDVnzeZVFDgAvoyyd1hxZto2PWaTwf8CsBxp5XJJXJz1a2uLAEbS8vy63",
  "key40": "571FH4eMJvWaznHFvvMqDU5MCn3QaG4XJRDWN4nbZ8ozfoSf8aRTUk4zSHkpWH17uKQ6VNo8mF7ABB8Rhjo61jVW",
  "key41": "2iXoy6wPnsLp2R6DR1tAgCEwKSh6ub9L1ficYcC2FZ5bsWVhJMjnybdczTxNjdUMjraPwTxUxXkNq3rPgVYFtUFR",
  "key42": "4DkmqxwbWHW9bk4Lh2Q2vgzoQdYj2fcZtKxSGgKrznvbUjTVhS775Z5RSLZMRicrKuJ2d5E3CmZfDLrutgZY5Miy",
  "key43": "5knnkTsbLnyaTzXHAYVXPdCLFkfCuhhadKqJJp4Jjsve4zKyWFMEADHnKwcvYwVtsuMhk64sMHCzR2yXHd621DqV",
  "key44": "2dJHBjCriCst1SBPAPommiQopnjXVJP9z2efjz4zzjT38A5BBFNAcxzST5GuzpBzXwsQyQi7dQTNyRGzbna8Pi3m",
  "key45": "2mgrEH7PrKyvt5R4FrXmPqaxUFtqiUWbknkaz25XARUUq2WWMKvrmq8unmiUSi5dUZcqMdbmyx5av3MhZWo3gNgZ",
  "key46": "4uTTLNTEffrYCAMWhPqiuFeLy9F2BzxEiLYvGyyDRP5GvYSBdCZMtnFqaodx5564gBJgJyzKmwTYiXgQvDFxp9Pj",
  "key47": "o9tCumYBKvQu9uDf3LJRLAGQbjebxrouThyodSDeN7WfHXXm3Cp2MK1sWVY9h7Yeg4z3ikpqgt9uuLX22HsHqd4",
  "key48": "4hB24GnPhfZcFquDUnMTnrJcFyshqHsTgRvQV27LC6UNFjBQUu7UuquA7D2Dokmrkrc2haW48Abau6LRjyVKEkQ"
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
