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
    "3Cb2myox5kcv1wrnN5hUHygqFp555KCpgWdG2pvZdsVaYRapu2xZiTFHrwgaRgVRjrKGYzaqticJdUmHDKDe5X5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXYeJB6rQv3J1wBfEZTaz2h68bRd7s7theBbkPMnvG6ETnkBANSosiGweS5dy7vuDvySYUMM2AhDwEtvBubdyWt",
  "key1": "5iZWvERmPnvsYekAyZ2drVUAyJ3pPJrP1xK6CbQMN3s1uLvC9YZHtdet3yppETSmwnAM1gxPtEYSxhoohpnsnkhL",
  "key2": "4D8HaYtGLtaWmZwbcApjSXvL19DkUdABEHuDaR5aLBMznpLPebgzQF6ubEJJr2b8sRyykUdMAXJ63LJs8zCeEqss",
  "key3": "5RxPg8bRRsc477S9pJNSARTmB6ZYu9QbMLFMEtvbL78xdAZQRE35S49QPEtjSV7rotZGwitfARCqdSFF84zEjBiz",
  "key4": "5Pmqj38VJmbeTrpecn8NBvHLqwn2SLYwSkbaqsNEy953k9pPM7QgusMqzEDzEnZHPFepnpJzxKpcvHXC4PvMHo48",
  "key5": "312cSDgio5mYwmr4YZAMNydb9qpyxwzQ8Gw1rVmggPtLLVFcq1vF8kyGofreUCzRDZBNjiUESc8FKMDQ7FrQGWXe",
  "key6": "4NAbXsuhdpFp8YMRHTZ3LMZvGzSpwAanWnKjuinwuqpW4o6NEDMUYHk3QP6idWrA3cJHCNKsVkEHV7sHvYYYgMTh",
  "key7": "2CgtHgPWw3Y3A5wC2PY4Ja37KnPnQB4ZHj8BYe47gZeU9tViEWPYzwsEY6cLgkGb6zTgfbvvicMswBLUrXKK238A",
  "key8": "vWxefJoLG2UbpgyuEpBqZ2nhkfFLwJcBwjFEaoQZhpPGs3DoQRxJ3i9jR2i8fdYfo5J3wsHg3JNWG6cxddhLpWj",
  "key9": "3Tw6dqRxGPi2D4fU4hG3a9hwRQ9PvDJ44gaEEsaPan6hqFRMi87ynCVyPchrgfCACMhwnsemS1h5idZCnAFxQpUC",
  "key10": "kmzvMughVhtgNxw6uC4517heMuFNwBwwSxRzrkRbeVrFc2dG9ZeezuHkKjntXwScbkraHEn3JExCQAFVfqfQxGx",
  "key11": "X4QQVDfU3MHE6BY34MAQRb8MUq45vYgJtLc2KiqPxMQkCQ8uGGCDAZmT6VNGToTEEkxkVhDutXm5FBemvmbSjqo",
  "key12": "2msP82TQCwJrXQKV5ENdFF9ZMZtDw7vN3NYq7aBSmAvcVcmMkroimH5ZdPwZ4hmswTcWxaJYByCq4xwNdKgf2MDt",
  "key13": "29icGkuZDKtUPMbksfSj2APBSvdkvTfhdWkAhnSAtsHLZAv1GkiGtTTfr1wLEk9BexGADrLWVhT2H1inscfw58Cq",
  "key14": "5PngMzUNRa7te9YdLMJn55Z6RYhhYi3DsukRAaHxUgJ2Zm8zEqc2ikagLVo748VMRuJMBWcKAUNS9Mu9urvz3i8p",
  "key15": "5WYGsKfwoNhiBVbn8X2DB2CJhcCUcfPBTfPfhZ2hh32qb458cijyD2w94ca8kUDt1Q5hiSSYe1TvDsCora6sFFKj",
  "key16": "SxCmPbKLQJXSEazSUjrYbpT1jvgYpJ2s5HHvtb89XPux4dBWVcxDiGy6f7VthXXDX6EnVfbkqTWg4E7hSaVNr6w",
  "key17": "3sCZ8U4paKoEqXFR4caj3mfFdQdSiBKmNidCvN4eaJ4G8SzjkWWLsbRN6NMvfeLYQBet9oERYRsVnRzcTss84pME",
  "key18": "2gm5TYR8sf4Wx636JM6EB84cpnfiRVUZvqbke7oXaFoEpAWjHPWoBwNsuyRkhn8uR4fvk3QkkxU1k5wjnCutQ8uq",
  "key19": "3oZutbjFVPswVhHiJoeniqyBotzc74ZYksFA97xMeaydLTGGozuXhWTQ3srGk6tQ6n14dtE9RxPRPqYMMm3Nxpd5",
  "key20": "nSy7DJJjMijkpWnYy28ciS2aoV6L9VuYgHxuWuWFxuuokn4UW2do4W1miAbbY9LPjextprbvfRN4nexGGsbLuuF",
  "key21": "2syibDix3GqSN4PBnTZZhy5PtodErFdudsuBDsfQRpP5JsFPcQcKym7ejbYW58UqQsWCrUPQHtB7XzgL9KrGjmYr",
  "key22": "3qnCC3zYfxVjMCE3jckWjWXYQuN2rRMTDjgnBmZAccGnSa8RWoJ9GfTK8HroLxk9tkrwgQ7BfTXdxB4rCQ3pche1",
  "key23": "Tz5E4C7iRhqbRBojUMUqDmTdtbjg8bu4Be3SgJRCqCZtTkofvsJxtVRq7eu6Ku9W5o2hByrfBiTUfi34EgWzyUE",
  "key24": "3ziM8uY6Tjs2c3uY2WTwugZCB85XMdg6R8XcNBtTCck8UGtKvhBaL8xQKygtoPKYyqLjuPXJyPvsQCdhwhMgkcC5",
  "key25": "2Bfu6f3aaeFcnpoyhzYns7sGZpms8CsQFJtEQkZ9gCmEkDtrGVVTYTGtSNW22DXTf75T5jAXcgsmmADkGdg343PA",
  "key26": "5UZp8qKnBHgcRVQtQCJ6DEqu2RLdwB1SBYWH1Aq7JNYLRLPL3VbRZ4LQpjRkkcozVEHPrp5fTXswNhd1FXY5mwN2",
  "key27": "4nwZekYAA69ezMPDE1SRG8XaCDD1d7WCwQgiPatmj8Kc8p884o3JBaB7Fux5f8XyjaM88XjwDBtfeVd8jHs8zcfD",
  "key28": "2VwEtAkNsSRMFmrq1qnE4iW4d3ett1DKY77B4AkdpJjuYcnYE5ywPorUsMvpSkYEg4s9hD6PnUUqMC3mwCb4t9PW",
  "key29": "5fqapuZPfTXLaxxqCUcm5L8V7VMKCUKseR4BAZ2pYsp6EnhotNQvrzxLpGj1LFvxW9QxhCgLAJys6T32QZhfSYqZ",
  "key30": "4V8MBZQxQQf1TLK331s7MsKFpT3xHSz4rLYPMCuYfhrWnPZdP845ptiKt9n2T8wP4Hgiy6yrzZNRwC2ZzxvSuGgt"
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
