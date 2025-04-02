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
    "2hYk2ADJK46b7jd4r35DxiqLQLB4WWFtrsXmc1734mMMwJBQJ1gedTky47FKKKGx9qof8bzooeJjhdpGTEprHhqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zucwJvFLRTMwvhXv4QTijTv686fxZtE9imxY7QsQZ4dnJfAK6N42LLaHGi7gHAbmpHL2rP66sxvzebYztvx1j7k",
  "key1": "4Uq8RkbLCNCrT8Hmbs2mrWcP5sV9Xs8KkTAn2zffDfmdtwMcqrxCfhEsZdJqqub6FA64fX2nDaLpySX9cx14tMov",
  "key2": "4kVM4YHDeCoV1tAmQkyw95A4hdoKShRuFaYC1LVRXZvCwebkZdHHe6GFbGCCoA6NQovWswHz2KkNWMeHyy4m32Ca",
  "key3": "5LTs6hwPkVbCfjPLLBYpJiwpkjCisGQ4Cso4bsTXTYggXD3Dk7XPBtgJf4y4vzhEYNkDXWVMDsJtsXRf5VHmWrV7",
  "key4": "3N2K969riPV1vVtR5ZP5KgbmJd461pAckbaVu98xWFLiNC9GMdTEHYLsxYmYxVKhMnDmziDgjRhhrhzMSYUVyhts",
  "key5": "2tFisi1dKfUue8X71tTdTYLGqNqR5XdrRnnjLjUW2AVLvvuCLHg7YtgstU1YTJVp9Va9qsnEP9xXSLKcrS6vG72c",
  "key6": "2fdZUfnBHoE133855RtacShwT2m7nhWFuM5F2GAgmgyRuSBEPKHNhorL8nHM1jcjsbzGswi78EBcuDuZzWVzwM9Q",
  "key7": "4R2JWWDMZwtuEq7B9HitiGw1q7wYQXsyiBEYZFjbCsJynz3ggCcshEvK1VUtXTJRVBDVJ9a22utRxVbexyXaKxcL",
  "key8": "4iBb3wCWj3yEsKZ3GYgUkqYtr2gqjGu6UcXoU4c66SMe4BGHi2SFbicWFxecjukDcyKVkTAbYvE798TLqwqyH5Fi",
  "key9": "5wqRZySuvDEnCniKBQedNbSzHyeztfRW82h6kAHDvmrC3yhAxbax9N65wdxYYRdaJCvddC7rLS1dE51JnEBEyRhJ",
  "key10": "5i1sHQQdtkeSqQiR7fi1Pm35rsGa2EHc5Z4qpsJHzWDEqDWEXMMWduZXeDBf9xafkj8yzQ6RPfZkc8xXabAGqbtT",
  "key11": "2NAJ32iVgUNycpZiq1cLk5sErXzeQfgX3uhmK9mQPU5Zh2TEDZLG8RsqGsNJcr7GAKNu1JSNvUUdVPVvvq6JMEie",
  "key12": "2fQkJM7QQWGd767DF34RzP65o2o5pKbgNL2rstgJm8VfmYYGhWaJkhKUjL7PBXGJwmP27PK2U2m5x4yif87TuXn7",
  "key13": "5nULEBJW7kxFwasRLzX4NJHvtK8biZthGYbQdZm7AanSNZcu4mGaMK29d96obxkpxy9KXxa5vSmo9Uz5Ag9zkdsg",
  "key14": "2M9sKxj2KcxwMEpsvaZ89NFnzmqKoRoRKAsXyF3jZiMepnZLmLKFyBT32i3NLnS3jMGgPhGECaciyhSdgPfhBGiX",
  "key15": "5HKYmDis2J6CA6dtV7zgVqReEuCG521VfyM6eELiTbM3AzjCKJbaSUaNuRKM52VLbqJDMbSNiDQ3VgvP9XYDsnW8",
  "key16": "38LMFpyeXkhVDdpEr1VUPFXXup4XCDutn7eBoC6222CMxzWy29A6ZhcPXYnuaP5Meyz68eZXbGVug5myME61LuXd",
  "key17": "4MkmMKxKTFXamt4YLwRpwx5u1uCESUoEsvaPysyJY9V2q2sqMPnWDhXmYx9gPiS3QizBto2Dkwieo1wak2ZwJL62",
  "key18": "4Hf82BDrUWG7BqxaBvGpvi4gzRy5pNUPKm9V5mV4AEjzQsEc6K3yMSGh1DPcsVbjEsFsjqbsKfCxLstruuZpSEgW",
  "key19": "3Djh5dCMDfGT1vvbC1joysGuKoCaRgrDLPgYPYP2H13xpNEyQxjuDxT4KevQwqjbAc7cnqs2c2uKnj9kTEnBBXjs",
  "key20": "4YDevc8FanePCz3WMQZeZQHpq1r98tDsbgd4bMMzPXwiaaMKTcppA6K1eJEyzYuGRezN8Tce1NHZ83TmV8joERA7",
  "key21": "4UUPdH3q3RJTrZ5ZDLB8kL5Bq1WsjT9UuCDmxjRRq9KqH2kiwMNHBaQPDjzj3W7C6CNgvSqEkUdxBDUnsUzZ9FjN",
  "key22": "4WDKn3Jtiw2jv4TMJW9Nn7hCwYvSesgyq4tefKehfdRyRCsKnk52MbYya2AGRVs9Unt6FML5vJ6VuFAWaarFsJUt",
  "key23": "3tcmiZRoAXcGiQm4DUNKF3xeCacvfB8Zz5nW8grMP1WTHeELWg1JuNeHUjg6mtRgHMJjVgV3oYtUsuVix1QSvdDL",
  "key24": "5wjKAqYyGmtAEhu5gitzU7S2bDpntQTrQB56FU5btAPDZtwsbpSDS4rYNSkpBeYAeD1cD1AWbVrzHUW1C7bxvsJa",
  "key25": "42qVGTi8kqZ7TMx8ssyTnusGQbEqUVwB6cJwj7PqUzcCFeBjUHjcW2qUm3UxCBnX8qWMEnoZLKoZeCAZT39R5yuK",
  "key26": "3KH7xUDgKqdzwVnnc5EMZbBGvMxwHQ8msCBrK91iUzUrqkCqcdE2bX7vWZZKhaMWR69eBoXNdd9zmSU91UziLRbJ",
  "key27": "64GnwQ6bGqfc9ePn1iF2fPQwBh1ocNNEn3sxZJQBmuLkE1KmijRnDjt8hNaZaGLp2uavZP2FTX6whktND4MWNeBz",
  "key28": "5jjw1RFzP5g9ZDgvKcr2zVizXUSKsNYaHMxsuPvXj428AshNWiPwmFmXJmZqG74JpwLDCruvoHGr6QStwp7Zy4f",
  "key29": "4QcPFFr1DnBwsj2u75JppSAckAqAEBm7onb92tGo3bFpKBinLBF3mBMkYjAm1ngtt8zfwb6cLDcoaoNwCv2rMuEJ",
  "key30": "5anFLgEsd6duZinH2QkbJ579g33Fsh7fiK7Vm8Mk9z2LLM7ygi1UvdRyXUYXzMH1rLMyJfH1DvZ69s96XYukniGS",
  "key31": "3eSeEH4hHhw9B8E14Eivqw5XjBrdx88zsaJbRa1RT7TQWH6irnJ574xhvxB9hWedJuqP1gk4a8LenwH9KJ3ixhpo",
  "key32": "TyEQx9Qsts2xncuTpi7F3MxiqYL1nXC7pYvnqSxL49UninsbjLr8ukpm8buo2d1VweKsL95BxfNDednC2H9KnJh",
  "key33": "56D7LH3TZQ53NQin1V8bFozNj3aA6rPj2jnsaKbvN2HsuGeTAm4VkoREfAHyzdNeNoHnAMti9bkuZXxXNGnFJJ14",
  "key34": "Ti5zrjFGPryXV8W3c7KLywoV5QpbJFFCXVwVehQMyZy92ZkakYdt85C2ZFZkACQQV9YP6YKHmGgX43cvDHAZc4J",
  "key35": "5SQ9Ajw6uW7KFSqF1SaCRvyzKFvvEw8bTH5BS6AxERxx2i6EfnJMtkpw5muvqD6Qu5b5f7ZjeQR69GCLQmY57e9Q",
  "key36": "msKXbvtt6poipEpUw1eznr2BqzpbQWJyb6kYworpqTqVX24ujsrn4PDWJ5z77pfzYded8JvDL3k2pdjeyfdQgyt",
  "key37": "28tR4d1618vA7r7Lu7QPkcib9Sq18pMVHH7bpazoG2pbwTfCFPPvJHw3X4JwCbrAUPw8sQzF4ThZgmMAdWqPewvT",
  "key38": "FY6vTUr4yyhhTegZ9YiNrNDyBxunbEQk5tNZUM8CovsVWFKwyPMtASfLe4xos1L69ZpAdcjPGbNijcNsaVKT8W1",
  "key39": "5ongdm2SEh8hPwsTN1KgsnPs5A5WJ19BtMhfqunmZkYvA2J62uwrFY8m1pSbHPYouoSbMGcXor5Bi6ydk81sivf1",
  "key40": "XsAyG6wyYPuBzCiEPmhC7hCRifcm8LuLiquJQTiMLXJcmE4nax4HHcZzeMsuJaj9GhUtKkystm5wXHQD2tPqTWQ",
  "key41": "44JnddcMC8b6wxdFYyW2RQnCYNeWQ1F8RCTY98sdynArxVpidJyx6vGS6qVeNueSfg1dFMHQPFxrszUy11Zh8px1"
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
