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
    "5aRLaR3fq3zQeMAp6rsbyCWR1uwS3gRkFSzrGwRfFFGVvx9KGgt4jtNYZ49DjAhV7csrHVCRE6hegRta6LCJzarM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLNVX2SqzFfm3v32WQsKaZL6czanq6tb2vH9mKWJv8aikgimhTdewTcpqkWmbaAjMzAznoV1a99jV1hQwdXn7mH",
  "key1": "4EXmNyFWWdkCYSiayMzdYUGuMDv6JmKq4AnbEHi8qw99sNqTs3ZGays9T8J75KbvHyJiwE85xbgKPVJZRZUhTNP6",
  "key2": "5DvPGUdaJjsmUJsdjWXgWqmiVsuC2ivnC6o15vVKo7rKLQjyW4EGJjpAxgaLtVB2b23p8rrXbUE9hditmkRDRxsx",
  "key3": "5wrxp4m4ETt6aLpPSG4jJWqScVtv4xKSbNVudkvUCPsUVQ5SvGX2xE5YeCDoitR5nmt9TXNh2GAuSp2kuUKaiVMH",
  "key4": "3Jrb3gaUVTdELXK2WSdwPBMmYc5aVGH6Hbh1xnAh37CEgZ6gDMJeLaSVddwk5ENTJN7U4LTQSxxgAQfgPXxEuJGU",
  "key5": "5WDvo31rNkSa4a4xh7NuBrNCQ96sy3MSCx2zRNRdxduPuzzp716NLtT6QqNz2BqdMMq5BjAbNjp6V3dZtwVsj4fV",
  "key6": "2XpNKQs85j76FscMQ43CAJkWhqbTSvwDeVNy354D4fLPwQtQ9kp1NE5JjzXNNZjZJ8auBi1wSqEf98ECCRhmmjTJ",
  "key7": "5965ayZJsx9n9VWjDUFtk2Tp3nLMHhjHnFeWWkGoqHMqefXKDsKPZdHrRn4yWXgfFtCVid5DGfQFiDehuPZEffmp",
  "key8": "4RUpjoS5j7bDnnM5xSGetrLvh75myysikcHLE4zvnVvzuRX6n9U5RNi3J779urqF1ohVoeLi4ZWhuPZay4CGHHLn",
  "key9": "3NQKr12AsuSgNoKja6FMqioYRBhT3WjAL7CCt5h4JApannEvLCPdvN7qggrwKMLr35DEfW7XP1ksa6vrRZSVqzLg",
  "key10": "pSoJWCjCahEc51wYN6ugqY1M49VMyh7YNDnBKgnfWeaE9ZnANPGQds78GNPEimfts7jaPxKbwpTTxvvzBmEQAHf",
  "key11": "3w17YYdPMuqmbbu8P6oan9LC8nEfQ2gCWoDCPefKr5YJwsE3GrNJhTiJ3A32ssVUavS4oixnmZD79oNHpP3kyDS7",
  "key12": "2fLtWXu2qPc7Wdrj1azgYGV2ScRCAh47FGK6rbBR5KDJnmujVekEgj1PSVqvb17RmvcZKvyMttr2Q65c2HVBjVZQ",
  "key13": "9tfdWNRbEvabExWaE8XFchwawVPWiwGM2FNiU9kUpDpHTxLTT7MGbYniLe6f93hkQwzhz3SuYMQypmiqEBK9dXh",
  "key14": "28uQpNuzdk4vscrgVZD41nWxBYJXxH7KzY2UiEJLc9Bu3nxrrZqka1kBffLDVefrGy3iS9sbzLweMHc9z5ymkpB2",
  "key15": "Z65rjXStMUmeXy2QcbsJf3zwtfBf6rzb5uPkVDRcxn42HbpePFVL1nXqAWCjvvVALHbwmdiif3sFGGfzjW4kzdq",
  "key16": "4k8MAHPFiWWG7juVAWsQpwTSmyR9G7wNej87F84cr8SwCf94t999NvhU25uHFrFrSFTzKE63kidChbjGR8bi2GjW",
  "key17": "5p1hPCBxMyGzAfydJoxybXAML7yLVHGrAyjSaUkKKm1hx7pYJJVUCBBbPdyvrUF1S217go3L2ppTiqEi11VUdNis",
  "key18": "3gp6ocVyD43Gb5bQdmYSRoKm41YFqPvndNJfaEfNXcUHpRHgxZgpoJvfg4fGbqJGEVoStiUHSqRrfaND2HW7J6BX",
  "key19": "4nvZqni8dQA2YQxeqYa6S1RK4u44RF3oaHC1QiuMboRryFDjyt39HMkfK1kUWtErzgzuSxvDwtcMFcCL2CTdJts9",
  "key20": "DPJ9KTLUD9Ujh6u2Kc5BMrWEHvvxNTY5751AEfiigE13BuYU8qgR5qc81SE3fbUtLoXTaQxq9ZPouRgGpPdiT5Y",
  "key21": "3AwfyAn1NfSbaT9UrDKrxH3aFsSPhabtJGASHVcNxS7iPcMKdEjTFPx2uKQL3twdXKXVj4kwiWRmQAHf5Wu1dsRS",
  "key22": "5GVAvHLGU8CbaaS4KWHxGmsdifKJBrwm9G517Cdr8CfbsVq4oZX692vBWD86qLjM3Jf4n9nJS7fg8NZTzskyC6vK",
  "key23": "5JAD6kyE4WX7HnsnW57RXqDCwuDq7j4DuU5M6speHkziJhNZTEXjAjppcHTCBvs7Zm41uPtXVNp519Sao5u6UCPb",
  "key24": "4yETw2ZK3VeTLCHLrYbNd8aT3eQGJ8VZJFozfhtuzCETXL4Dp8iMrEEVWZdGnm2yZS7qsC86f9qtMoCWXuuZhqoc",
  "key25": "BpscuoeWeWbQkSiXwnfDF5nP1VmFwD3ZD6BFK6viZbXzGHi2yLnJJtnFYXvGpvaFGCoUyjPXCzybgJRLUGnDWEH",
  "key26": "w4uCctsn5yEcREioX2fepSBTrLHt6g3sTvryE8dDN8g3J9ZmZEjqp9nDVeE6u6ufPZQpctU8qqstsffiMWxPYBk",
  "key27": "57XBnUfDjvPRChq81WEJJZZhWgiUsZTYbzNvc3Hc6uqyht9CcctWrSumsFfVS8EdhKcBeyoLc6rKBKZBfdBykDJ8",
  "key28": "3DXRDAhVfSjioVnFkgSLeZNHPbiMLdkaMaRUpJFfw8mA3eDN8RFncoshqTrnpNToKjbK63mGo5e9GrTPHL4GUEJZ",
  "key29": "kaCYjWcUiKx2Xbw4xNfayBHoCMmYfkCb3iF6jdG3NExgg2NptsK6YqybfMngs7TeLtxRoDf4uBTFSMV1cegGuHC",
  "key30": "4GMNMNLapJoHkbEUZyAzMEDb3mbNkZWq3ofoLt8dEm3S1MXdsgJGcCCCZ6ujmRgHyRJC5Sy3WUNseTUagXW5PyW6",
  "key31": "3B79gCitfvFqRcK1hSk89mSzaKtYcESoJuEXaZksfSpG2TjwC7HCLSuE3cdwFTk2awbfrNxB5LB5AF9RthA6QSVf",
  "key32": "3ZVAFn5RWFbg1QFDHxA46DXN4WjYAhqkwQMZ5R7tDFwMa6GaNEK5YJggXBgfpeH7RNSk2trCFG3wdDctQBLQ8rVC",
  "key33": "44k8cmvh7gTiVmgdJZsHqw2w6Gz85nPL61QLL1BxXKTtVDcSrSiqXz8WsVmq3JJE4TeCcPNCKbiPPUuWeRji181h",
  "key34": "4ZBYVPfrgTiuyvHUmceASFb5UrryRXyEjV1WVToxi2GN8Kiu2DSCnbfccXmFSKjJ8JrFpUCF6ZVQ71ZiRM9u8Hgq",
  "key35": "59Hr9WWU9swTfK1SgNcnVU1kdBn9x2N7oB2Zj6KzxRFfTF6toEBn9UM1yx8SgLhLjsCYbHqgqA5iR6yt4k8pth7g",
  "key36": "4TPp5eu18Yrv5fYDbijqEBbfFhj9qBFDk8zLaZyDDUxqRwwn6qET8sTTC2aWaBtmGuvkbyKE8W74k2aBdsp2HJ9B",
  "key37": "3PDwPsmwQfEwvRDG4mdTcQCd2FB1uK8XmMMgQoofQmvovBtvHZk4uPk2XyC4oVeXGtiimLNkqLbphEBYi4tWSwYP",
  "key38": "3jJAjDw3JGozRMD3dotjuKjKs6F5m84MUMm4GuyBH8p6WL6XEvMzYHeJN1SVtxDfUguRHLfThhbPYvhpRXVwEGaV"
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
