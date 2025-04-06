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
    "B2KafTE93ZRXoEQUmy9ZirDV2M7pNJrsk7WzdW2qpZERwB73jvqKHPqX9N1Zkc628Nojq522fu4CjAPJivW1wqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PaFKfSxgpDKsD31uFAQUATcG7LdX1gpqjTdpc6EL6LiPmenrC1cyrWatY1GKsWXEm1EsKJAqFL9sLYS8nCGG45",
  "key1": "38hnxsADqvq4c6xESs76jeVFfPRnj656kyGs6KAAP5sKYg4MSDm1DYHqpcJ5qw8RooqWPXhdBKspmuxm1LifTqUn",
  "key2": "3fmizEobsGxoqyAuYTATMakKGDaGbgKxVPSATGjVpoCkR9EhKuZfWFSiriL5EgTPGm9cw1iB67cMduXCZeeJ8i4E",
  "key3": "2nYx2WdH2N4mHshyVbcNwkqnxdRf1r9qALrUXxPXMfmad97T43n2Ukjj1NyThWiVeHBw3itEqpQLpjx6mH86GMeR",
  "key4": "5og7qmqc5p3a7TNc8YMvQvWRfuULQPwNQGcYi15DU3J4jKNwmzWcPtS1pek5oVcVq5AWwHeJW7Y1nRgBj2Ash3Lz",
  "key5": "4pHbEQv7oneRDWKNmhddnSE7w56DnySfR6Sz2KZkLr7jRYkK3LqJK3bmkxF5tR8uBrzCZ1AApVwjuriajLLxThq6",
  "key6": "5B8mAabaCceVZ5d1S2gsu6R1HL82hrkhJQRyycMm8wga65cnRtxJjhZontKihdudFWD3mxvvdjZ9sqirU5CRjxd7",
  "key7": "3ScWm1NAHZiXp1DYthQxaM2RdxNpV78hsVAxuaQL4wjGVrsso6Yw3i8enH8dCyMHmsiczxn8k9yRJXjRzeegpQsh",
  "key8": "3W75sVjD3aY4EHqmhaExqdNbTt7Jsc3iHAJkc7tHcCyPJT1zdCjNV133TeEaYzgF1ZifjJRmWcfGYmMpec8FUhSZ",
  "key9": "4huzctG4yxM6KexR6SL7NH53wv5Az87X4a3fsAFg9nyy8Xq9o5MM1ZMP6ngmiu58Q2i5MSifxbNvDF7pcSgSEn3Y",
  "key10": "zUgdaCqTeQtrpSz6JkSu95ehCtGCTxrKjTzfAcksztyfxUkAD5ZJf1HfRyfYicUHgBcQ6LsyST6J4wQ7mPqonuB",
  "key11": "4JE34rDyExFqRFLF1jUdpE1fDYVan2RhgqUodEGR88Qo2W2g36zwcxWcPBh3H6pyGwxygbQn39xpqgWd8XiChEXF",
  "key12": "5h57hGSATMZKEuaBBFhzdA3Td7TtxBE6h1Mtyp6ChC2GVMCXxVdh8fpuEZsatRug2uULFDvtJDxm25mWEDbPbpWD",
  "key13": "4m6dXws3ob3tfQ3rv6Vwp2WtnZb1RzbkciQNxwyEBS9GVSmHawdLG4UbnEA7FjG2uTBFDKbY1XmStgVe46hxigwE",
  "key14": "5s86tuqbCNeEfXiicKg4bh1fYKKMNfRfpRVgh7BVWPAJf2TuZk94Q7aLFNh1apHxVcZD2cCuFVsTHUUMfdKQ5mt9",
  "key15": "3MZkfAKka8fUGg8Qh3RHhwpEMpmnT7uwDz24tGbxu4TdBfm489vpiHijP3Z2FvNLpNxVRNT1DRHy44wfn3McawH9",
  "key16": "4x3dhKfdgQSLFCX4RsrHDrGUBSV7eDAi443cZUqBs3kwfMWMrKt3DxZhVPbzhU2quCh8xEoq53WdswE1CXyGzWVy",
  "key17": "2unxcVSKVvTcxEKApx5Pxdnr3ejZYpsdytP2Xi3EtKRfVHpfEmFxdHcL3oLqBawVa3BvRotezGPME9fAPCstNPB1",
  "key18": "dXTnf7zqTcVijvLvcaUHHEBCqomUD4qWR6o3eX9i9iWuBArw5aAsFt6HrwJvTbQknpPaa3ZNFNBvVKzxyeggXri",
  "key19": "4EeCq5V5NXBSDNhp5YGf466iNozhxDVWk6X8yzmHRJmssTEpxkU7q8VDNcxHbu6KHAZihpxEMJgKfEZBCM9UAXrL",
  "key20": "poEcEGaWfTVbzf7c2GQuk41naytnXzKshhFGt14ijVETqXjvFzigPQAFUH6qUKKrF2uXMyGWJrtpupmPBx2J8Yu",
  "key21": "3k2jSbRk7W69wAyoDrDbKG2KkQ7s1opcTE2d6EYJURdv7kNWk3BekG7Jr9EHRuTKUQ6D9PB9ZGeFxAFMj5ZQj4D1",
  "key22": "3cNHG1Gx8xqdJCrfQX4S3c3b3UyADDG4fFA7HQrp3eFLfkw9FyWw48Xf2jYFEH9m6JtXwNvc7V7wZMqRHdxKe6hV",
  "key23": "4LVAMQMj3ZqbPJNK9iWUoWoeWpPpVmZNjNuxfLaJ3TKANzsRXSeeWtGXQfrgMVrgrYvgFKVuM83XBDKebaTqpQWW",
  "key24": "5w5utENXfW9u7DxGrt8Ryino2LPZUMp7UH44gyvHaSSeyMAAH69tKeUTgdbMe8TgW7tnJZLVzp39dP5ysXgzdGrv",
  "key25": "4kBifp7bN8x4aKSkbTMxAsAJSGA9gCQFSmQxd2LPbdZrXSwVjZzJ3M8FYMYYbVLkdxNj6ysTu9bw9YxmQxew9PTe",
  "key26": "5WEM3gDqqMUCoaYvVHAZdGRaWAnCVxWTbQVgVicYfqCf9Bq1VN4xQvx2jn2ePLwXr2rz4FPxJsDB1xzPaxMdw8zr",
  "key27": "5C5wbMYSrxM7xnjb2K2ZBQGWuDsQnDcv74YB2zAWZXBCKnWfetqgEpNT93Z5ypLaDqWMouzWN7Z66LnA4BPevTEy",
  "key28": "596Ehj68fkS5X1ZJru7XcBEvS3k4FidnoUaZLhJXj2qJttLuG3tDxQFRPJ6UfRLA1ip5Mb2yu2CRxX7fFYuJJh52",
  "key29": "2ic8jEbaV85iN2ZV8teRTnjpErsFFZzbabAoTjrtg6W4apAekMph6MFwLnnYWNwi3wi244e72HuprEQMGzm6dzyo",
  "key30": "3Gja4sFzW8ZUNZGBYftraZzeszHzKJ5FJd8TufsLpJ2YfJ9eYZdZoDg1KjVcevodfCtTWMrGS46F8CMDWr1AAFxH",
  "key31": "2bwfvEsCKP66eX5A9pzah1EASQaQjh2sY5BE6HRk5JHRCDPLvA3caob7GVsAHDC1pwDk6T71i5cdaL9hrbZEKfRV",
  "key32": "4jUoXVwAdXsFDNi9xdrmcn3jA9s9gGsNyQwAjCezXKofWwtHtEEwHi7tyPKmg8Qg2KwsF6yB8pPUXKPEE7y2PJQX",
  "key33": "PjKmo1cujwGSau1HHbo3KsscFGaFAJ1WtccckF93vzdGP1rHqz2DYZrzwBa2cuKucMrmJFG1ZPf5ZSNUDZKgtL5",
  "key34": "3myVc4o5FATBnyYsDt4rPgJPbp3wVugXLG7rstjnPgDA2v3qyWYbWVWQDp3LPEuH3MyXpC2zwJXLY8wUwVRPkNsN",
  "key35": "joxBxKK7htHZ8ezaF4qNyoPcdxdmXfAtoRwnhVD5sBVe6JrLAbkF8vQvDQV3gusn4BuWThsdQkq57zMJ2ZwhrG9",
  "key36": "3pL7epHf4amAbjnyDXjPsGCuyrZLRBGgREhJHh53dsKgKF5k746PAJbCYjdNB48gT1HiS8H1utcnyLqeFk5Tsyz8",
  "key37": "44HPyTnfwKv6LpAUznfsCdaKi7jKpLZamjRDwfc7z4uJ6VYHtDjVW3zKJTwA9CqHWQPqVQeR9aWLkLmswhxc9L9S",
  "key38": "4gcFd6z1Bx3fRkfdTurXFHrtvPiseCLSDAXEVCXxXR9Ay5AtznVaAMWRwWvTZQ5CQiSZd7UHBgzDCtPL2D5LGr8C",
  "key39": "ASfVAA54QThZ9hVjLM5p24pVe5Vee8zHCawhreMY3zQG6m512NVBLFEYr1wxHBUUg9f6b5Udz8Y1SGxh7eNUP2M",
  "key40": "4iYbZEJYoLUuEW7UJ4Wk8SHrscRMhc7efSERJUWMnafNtt7wJcBy37meiUhPbvw9uegSvxKhLZADW7GEoPSbmKTr",
  "key41": "3rkPRntTMfG14m7DNPaUwnyC6kTmNgJcrkgdX6DdnXKn1yTcMq9Z2ofV6RtYZQuno3fxFNeRp7aTwGVkb2cRCB9z",
  "key42": "52bzRiWXCXpbWd7gVay7796frjNL5DcrnTsY8QnifJ1jzJJ2V3663Cyjv9jQSf2xUpZXa3CVqpP9VukxCgqTecJZ",
  "key43": "41s4xXbtcK4ciFYevEx2mVrCXVjUZX3HrVkkR2mUX2PHt3DhEq5APPPZrcA4jrpN2WLXvmXy2umPsZFTJGBZp6RY",
  "key44": "2bL5KQttirP8PQzqaRqyBK2pfWodNxnbkvv4AD9Fq8QdGmjQYNyExsdFiBLHFfumrW7ZhyrpnbqoXbbSDx2J6k3x",
  "key45": "5JnFGv7bLqUwYTuFE9D7WgW1Ym4mjX16dKhKBw7wavuUDzWvvwdGzeHynF9tGoGh6kTcELFzp4FoxBkroQ5AQLFe",
  "key46": "448K71oH2Gsd486X2eGy4575qzwgkeMsJKMr9pdjWMKCU9TvuHoVHrfmMJPN4MbAdnwCA8LY5axAu1WeVQGfSR9f"
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
