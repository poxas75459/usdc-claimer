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
    "2gb6qn7WzNU6PAg5m82bBsxhdwta7koqWoBZjExfQv5XNv7gUUrYmULvdpu1cBTQPtfUFFbzujx1ANHf1FAbLhFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HMgrfGha8p8UBakMdRMoGUxXzay2oCKfd2bp1fMDprNfDYEX5DCLGwBNaR6RsWxALY3bGDWjGKZkn46Ns8QKaiK",
  "key1": "sNxjw9kDQ3adtxXFDU6DtKEs1HVYRd9X9A5ni1wsEzckgciVAnqcP5aanbjWch2Z3pMxiPg9pL4bT6AGAgFnZdv",
  "key2": "5kYkFzLKy5TpvtnfYzdrZfPemAueRsdWjbk68NgG2UYDK6SZ1Gr3Edzt4C7CggZJ1RJ6gPf9Nj5PEyyzzxtYkvXc",
  "key3": "51t4phuHcUmhwiYQyfkwWU4rfLy7SdHNwHBtY5GVxWFs9bYJDnWAwDkNVynBoimAiDQxVrKV7cALnRU3yWjTthn9",
  "key4": "vhMQ2uvXnbtQZYDB7L3GFza5r8i5wiKBZXHz4NTtyFZrBNZpSzvKkkav9dxrSg3W9TBnRQQECtnuQPpJECsETzJ",
  "key5": "3dvGzu3K9zvu7MBhw4pRZC4czFTPnrhhHJzh1pzZPUHqDH3ckUpggwG8q1fejuEVLc6igWCdvA6usDnPnKgAz5UL",
  "key6": "3s56qVMdzBvYsNYJ3MhLyetk2RmWBJasKjH3vNyyXtzDnWKEDxtDhCXmS3jjcFt1m5wPmQjv2RAmCJWnj3q2v2fM",
  "key7": "2aSawxkmV4To3DegPZ1752q5S8mAMLdJqxfwmjZr9EL1GuaWJqa3xk6JF2zQANZfCdsycurjhUfEnk9iRHsUPkyB",
  "key8": "5YyaKJ1hic8cwrbH4ZQpBFagRxqfRX66nsmxJBEbUXpawh6MGYVYFDBoXrdyb5958TfEFkK8rNzQtjMjgoFxKEye",
  "key9": "5tCWwMD4r39Hex9LXwue9thR1nK6gQbzhsiSTgEgCrtTF2R1LitKeGzPmxBwAC4QpDAWHE9xue8oWuYDCfMoVXsG",
  "key10": "3HeU7bHZxMjf8hzh84YgrMVyZCoMcYYBAxahvKVfXf5fBcjdEMqXvPFGJ5SxbcnggRczoEBtonJXrVAYCm1YLozW",
  "key11": "a5cLv6aTWwtVbsm5g2De2RVnLF9jtFrX3YvBPy8HBpyAemJvTi2q2skjFMyDnNbDoBSvyJbmaRkhDxP4xoDi5MP",
  "key12": "2KpZ1ULgpBUeQ7tCK21u1N3eFw1ZUoJmV6ApPYKFteyAurKrVbJyh2eXXnkqmoB7NbRV12R3zBEnD2rCZSKQBTNA",
  "key13": "25AXmELwxtixD8hCfhhLNCzWhw7abABjfSo65PkVScVg67aF1FhP5eDyQDZvqAqRH8dWLLw7DbSCzgLc37A2ARnd",
  "key14": "Mg6PVXt3Q9PTtpqNFDQfx9c7cjGpeHdsgdRdKqsnKjGBXmxjzdDThUQRjfmmrvT72jn32XMvrmHuwiw6shapWQ4",
  "key15": "2KHH77Dj5WchSvyzuq3pbvu8wVoxo6CMFYCQuh1Y5tLXRuvSm9f5djggZ8CnDWz82VuW784cQSihXe7ijJoYhGbx",
  "key16": "2R9y9t6ksAuZjEcz5B3B3CYGrsUy28Eok4fvEo3zY7a4yPSpAc7nuUk8y5bbWdm2pUaqDzBdZD1HQdorEdGoDsD9",
  "key17": "33XdXbaSqVEKdDrfnQfc8rLayyuNTWsbEDtJsANBXESP4nbv96TUUcgXJkcRSZafqG1uY8bPKVAepP6oKRXqRaDC",
  "key18": "3h4myK3f3o5TVmA7yE1pPW5PwBYPUDen43nUuPEPDzHvoD8bjYxGwRjuGM6A1BcUWRkssELbo5R8c8pmerpqLCRJ",
  "key19": "62s4mJfChXuq7D7vsdv5Fjdmct1rvRm2TEWaVgLr9yyH7U14ayrPUDrLL8uA7XZRYtAg2tdMYvoon6baHyAgsufB",
  "key20": "3Rk9wnVUdqyB3x1drNYfxVeiq1mVtrAkd3gkr46wn1TYhcrRUuTTK5bs8dbHQgEeFZ9zwJoUpZdmcwznhgXS84rc",
  "key21": "4pWBjXJ3QiSHnK4ic5v4QepVKA6iFBA4M7PCZdd8tDxV6sqdL3epbukdkUVD4cLnz2pXyKNm6r8Jcu634DWUhi5F",
  "key22": "KwzPsKYefV4XKRL3jkYrHC76t3T7oKCHQLRBTxiL7StniSfumPEb5G73CmmS9PvJfFmeyQduT9UiTf59DzzjrdY",
  "key23": "31U1jEbbNzq8vck17iSttvFMFfWkv3j6pmCq7iJcf9tswNqE6pekrbj8HRHPVwrzyyVKCepnzrkRPvY1qNufCW2Q",
  "key24": "3FiHYzLbtaDYbyuEihf1kG1fNKfb5XJFZueHdZT5YukHNV7fbctte64ExN87vthtCKvtLFSSWjByMRmh9EToFLrk",
  "key25": "3MRiekJ3aobKrYCTtXFYqbzdjEcvyid2p3WSx9hKD3S8mqZsRsu8YB67C697u4sxJiuC1hywzHHUSPVezq1Us572",
  "key26": "5F95CWsUshmFDdotEAdLGjPQJD2CZmnGrhaozfkrs5cSAEx4FPTatC6pDYBnutnY6TZeQZXk2WfQSSd67HJiXeiz",
  "key27": "3YwhDkRQQvVJmBVpo7Rocu3odXjGkSgpRCu28fX55sBbZRAwW5PLzw4f48LoF4bt7QzTadjnnEFeFb9oaVBPLNT",
  "key28": "3bsc5vWqmpr25KBXPTNRZXNvT4E4MEV2XkqApHGXNt1P8thcS7ZDa7gHXkXBR1V5JkGMKS6ajdGD7QKQPfSpWBSh",
  "key29": "65ZuM995rHa4dKWTNWJbawMspTC5dM9NCnMngz7M8bWzMQx65V9tBgQh9wNNNPozhh8BBu2koy1GPMsJGMGa6CY5",
  "key30": "25BQnZivbEZHkNdHU88EtNmsaBADtoCmahouWBrnQXhufYZbegNujxLvgtFDb11L64T78TdhwA8bZejfZHDqhQPb",
  "key31": "z5qNyw76QxrtjgCRYhhsK91BrtEYVDgJaTUQZGi3gXuBHPi71UyTiFrhAKjCWe2KWXxtqRr4w84bNG5PWBgakC6",
  "key32": "2zJaVKB7y7BrJ1baPRp91z8XB3a8M9HeQizs71RM1NJhHBBBgw6ytyv7tUVueGMFmLKBFZgiBXCWHNaGSrKakiA4",
  "key33": "3r24rNT3NX32s1nx92W3bBLCgCRGbp2RCVuWpwN8ZeaFpcp59KwHdxsXB5aCk2TvdJ8xDvfeTG8Tvwv6dkyXgBgX",
  "key34": "3E7DYJSBQcYntEsf9gdAxXRqN88Na6oeqKufWBoK9x3gooQkZZt9sF7w1G2ecPf9DtZmbTo8QyYEYdxADLQv4Cno",
  "key35": "4R2eMmnrBJSDP9cepnrx8WpKBpGCqKFA5knJATToghoiQ77cvnwWGqDPrmv4qRYFy25xs8jsuZEY4LRQGLMJP3g8",
  "key36": "4UwzPKGx1mNfdAs3KYJv3e158BwzYBUPYVWPrmQr4jhmdTW8GoQCWk9JJ4VzFLpBU7bN3oMPPVnpM3qagoiDCRXe",
  "key37": "oMtCR1KWZ1j1LCnTxDHKdPGqVRyWmcyCxEeN8oNeDYPT1TWtZvPF7icCMHyV4HGn3kGJCYDeTT7AjFRc4LUgy34",
  "key38": "2aV3e5iZQ4MaRGpPqFNLCwudYdCRtWd1C7k3oJNWsSk6ryrXq6RLSMti4rozrAajUGh8mQV1QC1fbChEjYjTHT9N",
  "key39": "3U61F8WBsTL9T81TR9MemL5LSkfncKNQaPniHYgmN9jQHF1tHdC4CVSUrJo1jSzjzfYbCs327gNgxxvpZcuCbxD7",
  "key40": "4mp9wK2Vza4XyDUacPkxSgsPVS5nUrgBkxSe1fqse94E3p6MMGZGqDoJfaRAZerWzS7g3ZwPHYqqVAen3Zt3nkiG",
  "key41": "suz6eGeV9AsTfrnpN8K6U5MFi7r2FSgdjJ6SmoEa2cwXtbkw1h1inFqwq1WVnor3jb8dDeiQYBqirNNNsucR3HX",
  "key42": "5Fk2MR9uebHF8Kh7LzPK3ux5pjgYUty9kkbdu7iNYLE8UzFgZYRPgF5xy8BNvwiNodjh9Kz5SUenWg3gdaAQVmD9",
  "key43": "5LXSipHHKynLJwaVC6vae5bPwazQKCWUKaW2AW5WWxjbTvVZXzATwiDPQxbQXBhV3APQiN9sWpicYTPELUKccj4a",
  "key44": "o2EWtYDVuKVVfu7tX9GTU4SHBC6hPFwcQyGg2KJKpCqynFx4q2B2eNsxG2bLbT9Vonda261UPXkjowv2XPaAdF9",
  "key45": "5HrdUr3R5989Sb3ae5ALm4b1tqnsHwHBXeMxE32YFoHsdYamcGAs8Mmj4EqQ2nWvh3E89V8GNC7BM6JJUecM552F",
  "key46": "2JiPDJBJ3HhcCCnXQYE6UzsJiKXacMYmQA5YpUoVxdHQWgRUAGKhyVF98VwZA8sY1kzFawkCNPvjkXhC6a6BH3hj",
  "key47": "4yTBBXPnFLYAJwoi43SxTGn2Qp9ihD9iiFDvRkntPeqcEqSbRbpAedjJsEZCNKMuFPCWzFApWizdZLVJWzH1v2dM"
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
