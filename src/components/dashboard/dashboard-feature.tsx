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
    "3shxTrDZfowzXEWStCcanNAxz4z9m8AfiuAKrWb2DivHB8npYrXvAJoJSLronFDqznc2e5io4ZwdyRGny91hP9qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r6zELwFTREpSYAiJWKHCWL8ebVBvcnnTgeyAfiGJqSF6w3DbTw9HTaR6ZEczbMi8qy6xfXvGPNRj4nkX6JWuo3e",
  "key1": "4Q42pSBE7LN4BFbqqu4mw6gypHnQ84tnViCmD5wz6gVeRCeGNQoTdow9g7vzKGs8gDjJczaqYJP6gwCoxGkXB975",
  "key2": "4CGjQyXVTDz7QWTzG57LAnbGDDFRng2c6snzkeEMTv7JAM3VhGbEsWJtHAmLfCY3vixSh3zZcrjNfj4qQhhmV1bn",
  "key3": "NKs55XPiJGDviHpkmeDVWCr2LsKS3cxnMcHNE4iqpwSy9q4E5b3A2qZ2TTwWf43ipbC3TZQ9QLmavrLPcebQz1c",
  "key4": "rXsPnBQ5sjYPxX2W18QSN5yiRocBgkn54paxPpvod4gmeFSnCmvLAYQAjVxBoGyMYggHSQbPtq6DjEp1YFj28Lo",
  "key5": "2R9LoLUJRopdvArJTC3rdppB1ePgo6CAA6Vww3arsXWnQUKH5GnnbmJT78qbLh9zgJKgZkrX2qYh6QHfJGhsvrGg",
  "key6": "2xWXYHX9ZFDx9ARX4szcTbmusuJLDbQFojVFLKV4xgRLEdjkPR2ww8wnyGFwvusVsxDtGSzTuBKc4cAPWUwz6h4K",
  "key7": "pAsiNMGbtP9PZdq3Kn6xcE5nwPEdhAzicXYv3LDdFvpBZxwZw6nLyEDrNegg3nUuxrhmTnbUiPbPmABFXyowBkZ",
  "key8": "2Jg53uiiiTdwCLwcxzCV7AKPEzRA25L1hZiGCxDNvuGo4GweqZpCZyojqrJKxRbBPzupLPAB7FgSftVt2gn4xt1d",
  "key9": "4pzsgcZPn7bSrXNxxXr7vKm6Un1wbqJgoWjhPPhmd244YzsYAwQJxahCHhvV9DUmVJJNRZpD7kHdhqEFktyzvgK9",
  "key10": "57iyE49ytTBWDSxn41QayGYBEYRyvxQDoZ7sa9n2xCg58QQ7Jnbp6QuZM7sQzp6pBjqu8RDkzL7DdYQ4PkGso8Tz",
  "key11": "2FzN8oFbDowUh9mpJ1R2GRaYSk49H7mghwjb7zJWhi424PB9M7aE1qMTVEVfCGaKeGydBsC1Bp2iFfpzNpi6qJcq",
  "key12": "mmkn7UED7uPCTqAPQYWAayVBiLg3e9cqTYAfp8Pi5nrxymM6BurqaUHhhwE87DsSioVby8wLs5eWeP5Wxh7nHoG",
  "key13": "5XDQejE2XAZd9KXpSUbctPkjwnmy5FN3kM88D5HkZr4wMpw7u1xKVYHj5n6DveMXmj7mxb9Fymh6nDZGVzUuUELr",
  "key14": "4hjtCttBeezjnTeVhNgUd4hj6Vd2fiTSn8KPkqHqhAxJWm8z5WG2PKrXzdmXe7PrrvjoZhY5BhmnBh6jqkqY7jEy",
  "key15": "2ZwWCZvBum8hreqRzgFhjDKeL38s7j17sqm1tmBodzXGMics4cEpqoKF4CMpETUSEdDmwygvDg88cj17yY5wGGRR",
  "key16": "2DEazLwJzrF69A21xRukNU43HP2kpw22PZVEYEForKDqzimYyabmPsm5iN3oS7aFt6fKHEUs93kBmUvaLMUvU6QE",
  "key17": "2Worqj9vDdAv9BxGURzabRhQoGjjV9Fewh5abiyDNUYz7DtmzrGNzj2bJ4p94mdvkcnrFpFNrJVw6nuZJjQ6aG5F",
  "key18": "3ZNt1r1bKvBmrasmx9wGGgzPs16bApMrsm8igMPbf2ZnKNUV3xAB9wHDQcCW9S79XXiJaRqZMDLUfH2sqi5fEeUd",
  "key19": "3ryT1Jw2yQRMs6jFNW71tyPi9921nYnfWYZPZVfDDcp6JEpZ3W7ygBYVgQWgEg6R1gU5jDT9GjvaYjLMahzrzM6K",
  "key20": "2RywQV95ng82thwTpdprUQsBH3fEomF1aQMDnsdJDPKRY4nCkJ4T2PfQSbh2zdsRPEhdzYVFKF8yF6eMEkUYv2Hu",
  "key21": "4tWhdrB2dx9EfiJg2Ywj9Vwj3o3hCkaFSm5V1SCXti9R8AnQmk6TDqRXXG4f3WBph2TZTfyNAz795J1qqpxpLmB",
  "key22": "2dnfADb9ZArydFZi4hwdDMExR4S71MXYy69n613qgbumNwJheK23xSbTBbbxaZCH2F4FUaf7QrEc8fbC5TsU3Rxr",
  "key23": "3Kz9BJSXQfoqSZccix4AACgFLe3DZ1bPDq8tGa4YMzyvvawXt9gBMHX3MhcxNEF57MRvV5eweHGigdqgEwsUCQMW",
  "key24": "SwGqJc8HAi1nd6WDxMjoXyGQKNwV168rof2GTJS3vGDpF2NMxtnA83vGsFvyfNK2Mo1XR95qG1CZMLTsTfpXgM4",
  "key25": "4cubpxASZPszTGUgGWpa4VQoSi5xj9TfyPtGJuv59DXmUnCvQG7uVrMmv5TbNwCdz3yE46Eize5rx9pMqpPqnzSc",
  "key26": "5qFoWSHwdN7iEEFdg2nHKkhGoX4CXhe6t9HpzEqeNxJqT3Hve5Xt3PiAcpqy8jaWxMrHWTmktSp4zhfjbXYcHvcy",
  "key27": "4M3YxBKK192A9j4YNpuJf8efrzV1CJ4mYrvXXcApbLZZWJXVXbVsaDngZPLAhGcwfugvEKAHoxGNxB16H3KNXXrS",
  "key28": "5ns1tMZ81KTPDY1M1oQxfZvu2AFKicZXSYPnUTcAPjt5bafBoaKVfHDqpPaL6DrYFRrM3GdrSzsLAvKd2LYXYQKt",
  "key29": "2rnMRcbxYefdJZ3DbMN8kBoqq8R2gDgKgm2HrrvquRxdEjcDs3XNc3RBMqsVnma59XDSDaYGF75jVmJtTrqPeKXF",
  "key30": "4K2ThzbBoKfjjtkHm9LanpL4szJuYVUyB1t83iAG9njQYnAFwsD5ixL3QTpYdTYr4FXycnRk2NxUvjiL4UFJGo53",
  "key31": "2nNvgVaTHXMgdc5uAQwLkWn1WKw6iGQmrh5gqJTTL27ugtJ7uHxahUZh621ywfGHVWJK5ZSZM6EfjsbHo7K3UXnA",
  "key32": "4WXJnUtscucCgoznVfALnzVqq8rf2VaPNBTUvYcwWfe4HgsRUYhTofQP7cfoEeEQiEm6Y6VdqGrcu6s3e7ahvidG",
  "key33": "XeSyzsGj9aZM7viobpWkP7RmoL66MzGHrbvSUk5dKCKRQ4NFah8aa2LtZaAEQ1qikwaZ4uhWEj6SbcCst2w6TYT",
  "key34": "2LMre6YzaPNrZWEv7eHiwbwDbydBjtCQ2To5aqYc3Cww5WX6spULpJthrEZVpHi6PijtMdUZBdmjMSRP9prvkRWC",
  "key35": "3Xbizyj5Ty1cQ38gKb4B33hzXNQWE74sXHMiMHSLB872Ggz5ebtRtmZsoE2GaWs4BnTXRbpEqfVKqRHazLijS28u",
  "key36": "KbGxUSVnYV5jFkumk98YAmmRtVwPpx4Q9NSAegZxNQJmJg7iZq8LqmqfRGUAiahxYwdcxrZRFDL2oNrCRbsvH8G",
  "key37": "5m8EJ17iJpNQceHFEWMegqU3PTRNCSsCxRQUktUU1aaKKsvpfF2BkY9xdphi5wr7ZNrbdhcHYk5JkidVcTbGQpRm"
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
