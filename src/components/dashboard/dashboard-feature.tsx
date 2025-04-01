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
    "4H4m72DWDCfsww5LxLLjdXYz1PnjYC1t2ChwKroQZsviN8PxZFWzeUaXezoQWb3WUJCDkNYZJSa8Cn4hgvEjA5BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQg8imr9ZQ8yUtDcqacAsgG1Ls5GCmWd1AJAPZL7GkpDidNnRwVEdWUGsbuMhmyBGyvt7kUTXpwMm12dmXVfGg3",
  "key1": "4jaJ3Hj94gnqEMxAvAM2HtTjZJhyuHQLSnfT9pNTatwL1PuXypWVy52eXWBQ2awZDkg7wnYgVtEWZuYRr9zHoVEf",
  "key2": "5j2SDLnmQsATfhrxhrwZSSNDuBZYt7L7AA2jLKwALoxysR55pYD62UyQop6ZZsPevzZEggMqsavTNwWQkXT2DedP",
  "key3": "5Bvn6kjW41B9D9HGcXQDywAsKMM25gHjwCTuNorSrbnkvC6wkDqHo1bLE7uqXjERgn9cS5uoUcurZfZvEj9aoGS6",
  "key4": "4TMakYcE85nssxVszkQaMPUav2kikKDAVVX4a44uHXK5nDN5sVCgH8Dtt4rAmSbV2bqJxV5s6iPJJyZGgaqmCz5Z",
  "key5": "5NWf8hRLoLZRYHw14LJ7BnsdLEg22THb3EXjSdRTM5FAppApxd67DhqXebJY6EidyHnZEdnF1YNtBDsQF3KTnpj5",
  "key6": "3pZpgd3SZ5EQMAqFARXFFsHBqbiGbQXBiwcmmNWk7xxtqwEHpQuLHzikWLbMQWC9LheNovWqQMpFysqTWpJv5URa",
  "key7": "47Hdg57SDA4FmB6t9nEg3tG3qzYfSokQpXgvzztGaWoxpi6edVzmjXU4SdNif5PGJKHBZeqasBqxub9TumdF61bj",
  "key8": "2FQSLAcyjAHvUU9iimqBB9vGeA4m7rc2PWzLx8BsF9LVwg3HyHYaQ8fRXFjELzDz1GC2apkqDQXnZZjQk7F4ZAAW",
  "key9": "3q1iZGJxqv979YEzBroufYnFXXbnd1NWFkL6y9q7UZ13mMohyKUxNdUiC5azfzMAeSadUHHueQN1wg1Saidq9iL6",
  "key10": "2vkDRQ3RsshR8Am8PZyUJdcp2am9EWoYBU3dadKNwGKZK9RiUVoZYcLr1TsjbC56xYbZEC1rQj49QP2W67QN5d3p",
  "key11": "31UJs1Qxuddhzwmx8BwQEzEnN3RCujcjnPgsbPcL3mCLnTdMHcrjbGHkVba82a595U8khBTvvXn2peC9m8W77oLy",
  "key12": "PSTJmTFnCs5LmVUNX2M8ZauAHeJApGrHzp4fQsjaTVRHYFwP93pYbCD5WDipQiuLbG4nHYizaRmGTQ4g4daWAQB",
  "key13": "4h2A2DoN1VhoaC1o314BhJzcBi4hyJ56VFFsZt1peQHPBGtFpoeKya73gDEjUszS8CvymyRMDBHzf8FfzU9tDB6V",
  "key14": "4L9nRH4M6Xb4Q4QQLnSMFVtL1B46nMHTcm4NWPzHuLDgXXpUb49PD7hPKFafJr347hotmSfLWcUc6JqScYQvdW7K",
  "key15": "53GUTfzGDZ9ANP41i68QTBT83JSiFCNobVp7ik2sj2zRDPjpLcVW9qkZa5K3C9GakTTGhxymD33XyqRTsxzFw7m4",
  "key16": "5DcmmUwBvgex83jhtDfWbZ3v3eWtm7kTki3GSyhJ69TggxnSe1QFX9emFSkNfQwdTrUg4e3U1EtprKK52QVaSAps",
  "key17": "eoaFsvzcKWazYLdnFKHHUiszqJmok7hyyrz1qkj96LckxpRs1KbpXYft7EKcjk1afHNJFyxNurfENtV7fPPVvY4",
  "key18": "3Gyxkat3pvZCavRoMm9WDzprnkc12CJsnW1AZZHgVUFEc9TFqoCvboHmEEUHTLQX49Ty3eTjhp9Lc9ggmJx9c5pc",
  "key19": "2umrshwKR4YP449EcKLQovKoZ5qdwDhmmmRmgBeNdB85k4JmSmhboKBZNKTTe7CTcFt7ofehqEZNjyoqDqkJUfTt",
  "key20": "64YWNVpYrh1hR6GWLbR4Zi7nUX5dEbbfbiACKxkG8RtWUXg2kpLcYMTjKyg6ghNg8rGQ2GKPyokRmee2wacP3jve",
  "key21": "4APUnDiGHA4fYn4nncVXjJw2nkdT1x9D3mF5aDG7xQJKBZEWeoz2ygVkcgirGi4U1F11DC6paB42khuAfExSrXjM",
  "key22": "2hgnUuUNW1VMK9yfLFUo9ypPE9TTzvWnPEkA3chANvT8UrB2GvEGC6Lgo2adfE8YG9Unm1xKWXn1VB4X5WTbGuCe",
  "key23": "3seXa3y7nZpyc7YqRshZ1oE1qSJVq4rNatTUzMcGdeZG8BtthzM1auNhq68fX5J1h6pUqDHjDX1cpQ6UuvctADqE",
  "key24": "5exvxxLqTPJcCHhLC1KqmS5evF3cbfnZjW3HZY3f3pg6DSb1rgnTvZbiaqqhA6Rsb7QosY33bMcwTPafMeyfUei7",
  "key25": "3PEW8KStZCvH1H9kT2XVxKo78H67wKz1W9hBFAGw8DexpEMwBfswn9gi5EgQ3WcioRXX3vwkHPi6p6ePQWATndyF",
  "key26": "5UREohCTsuNVe6AvEhibYDwU5cgfcAMxRDuHJvuraVDA2MwtybkyfDnhztr8sHx7PCDudtcq3htKasigCshfXDtX",
  "key27": "24BS4ZF4NT26BBx7k58JY2WedjkZejW3Rj9dzToD9YF32oEtiATZkgKxQyeFWVw984LwuneTfzTo5UhdJbwBY95N",
  "key28": "61hsxqdDLsesRf9YbPSAKT9dngaab1zHvdBaDkAamSR7cgNRaBVh6Adb7asQjoqVREG1Fj1o2tUqWVYYhriHcLjX",
  "key29": "ctMTGck88Yb2TCe8HgLXbj4WCJAqa8pzPJNChqBbYbpzDoXNoYTVmBDq5mHpbs5ztuThEw6hTzi7uYkrSefpD3i",
  "key30": "5GebyRyVXSNbTJR4aZ24Y2u1Xcs1YSQcgQv6Z2gurSgtRPQgisSbPNjRfqyPwZfB5DCQwmVEFPtL4afH32sgRAkg",
  "key31": "4pbyRzCXNymesMAxnjbTnpD17rszT98cyNWLegoyG3VRbhhMxu5EQAkZD8C46msK6B62cAeUEF5zTvbK92CJ8D7J",
  "key32": "5jFvmMMX8doVNKhfYcbrqUNNZLYq3nz7TxepoJbLDw8hCvrCyWTnC9TmQ6qqFeNtQsXmGpGuZE5gA5AGvMh4F6iM",
  "key33": "5D4NHZCgqGEq1A1yXj62HZaJATUAg4dS881Tx4AsnNBb8pmnSh4fCPcS9iLTidzdSq1noVQYJZxmEEYjT2StfoRo",
  "key34": "22HZ4aJK1XdxezRtoKf91nGx67dbPwHXu4XPRnvp1ABww5na3GAYc68pui1EgZiq4xfXhCRkeDD8JH1vFeSo9PAU",
  "key35": "oEnx1KHFDLn3AsnZHsjqdxy556pgz6Tp4FDyazjQCtbeGc8srELKLcqWNTWRnGuwJfgA5bfqTtSS2pueMJjtKDc",
  "key36": "3Tm8CNchGcBapn57FW63a63jTDpv3mYve447m1RMXTT3FSDrBz8fuiJf295RoDc5JuDc7b25hvdDvxtNkMwQgrvN",
  "key37": "3Zk9YBR6b9its3FRrcarySeYdtCEAm9dRS1ZgPJgVNfb9AWpbRUeUQHYpR1nGpxVZwFNhwHpWGthM4mmyYysZRoa",
  "key38": "MawvVnuqG18WutCPLH7S38wKab3AQoHxm5UrzvAVPC4VDPH6ytrrjQ1pJbAtuPfvFdQowJcszjzPJtVTQhuhcvA",
  "key39": "3zN5MoP5KGWy2Km9Fwn5mmyB8Q2Uxo8Rwe1XUXHSvYfCH2Ufp9mCYPVtC1SzPaawqGhCKKvDuFQAGC39LygjiAYz",
  "key40": "5NAj8mDEEVyhfVYVubH2HnP9zFqDoPvu4er29NUTwtC3amLAPy62H6GTH14CxmLtNN36Shf18Z9kzREYkC8sP9bv",
  "key41": "9wWu9DfLwxkXuzJJgf3ZXSaBXGwxEvvBys1tXkzvRc33W4iFetKtbnnNQFeBomSLPPHxRzDNDvNa2wrtGKMFAmo",
  "key42": "4JiKYJUN9PDsmTCqzzysGdsnRBCuUbRJsnmokBqPmbc2XRFVzCKAyBxjdasZrnq8GFY4zrsfztcjb1P9MZhRFExc",
  "key43": "5TGBJdNpj75ma8pZPYgPs9PrN6PQHMTJM3pgoCDKN5KfPkRXSRN4dqVmW5GCKGwJb5j66McoYQkPgTvxFmY99vVZ",
  "key44": "2528iFcGsrQAmktai9gSfaMKe4DT4crUFUtSve4SuqPyAxwgxzucYRG1HXP6DAsevNkAuknZb9gYdkgS7z1kpkM4",
  "key45": "3YwuWB25M9me8H4VDG7ro6NwozN9NDSEUmK2TLavJ256qGpfheRG7khJqdQogSL5sWY2kw2M6vCS3sxjLDxtv87D",
  "key46": "PAp5vsSMsXzi3t2hTWzTAtsm14vndUJU7NJY46FcpEoXeqUhJDy1gyu6o53c3wHkz9YLSeTsWRzr8NNxQA2zoSF"
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
