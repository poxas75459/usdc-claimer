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
    "58tAZ4nvEvz7ynN5AX7zNfUwKrYnN1AZ1gLif4goqt2asTnbi9nbUbmA7f9oHUsSJoboaoJWZiHZ8QRTm8UqdSYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HonVf4Q8kSWi4gtUS3ZsW4WtfGtt7a5WumSxi3YpBmgnBA7gUvxogGrKqppyjLQijGF7UX2TRmzP3h4dY5rJvDz",
  "key1": "61gwm6UkaKysfGd1AhbEyTLjAeQhvT7t7xZCFjnLhKydxcoFsNbhdC1K95ACgQndWp1xWbqg1TrqdCaTPVSQiyUS",
  "key2": "4vFpBfHiKJsrhiHccAC4paGXgarZEWz7YytWREFGEQiJcxvtmpfDBDr8T9LR7H8gF82qqvXXb6rc5apSGUgrQvpq",
  "key3": "5CSCM4C1GPeD2vYtSpq2As8RVpJh7E9DwUGQfMyFsLYJBzseFL5uCWrc5u1cXj8uBvTpn886GpKcd6AUCg9f2s4C",
  "key4": "4cUhQ9uFMJnJt8cSTh2n23mQtehLrrt7mSE6RfMhLMNPXDniE6d9PN7VjzmSfCoQTHSjGjyy5sGJJ2NY7NNdVzgX",
  "key5": "JjJVf2Whm1xSbFCNc17on3JtHeMXB7L7jA6SnAZfFS5VaJyA8BdfJL9VeFxBJkvPekVGLyoMyqAtX5B7JMfSPjZ",
  "key6": "4jgRAU5iNQZ4wze9MrRdf89Kbs3pH8ZaqAG1Y2rAoN2X6FQHPkhbAaqGdtVudByStreLemrqgPfG7VBTs8hAH9wu",
  "key7": "2n8N4QZXE5hsEkr6EZqnfH2SpV5ScMnC3wLoUJuDWRdsDkDDJVftFDDCMGmJkMZu4ir9EgkUz1hCxWCEh6Bg1zSC",
  "key8": "3QYCYsQpJsFjKt1Yv6SZcws3dkHFmBT7EUXbd2q6L31UHhpY1kXpu6ymecDw1UhHNsLz1oSWi8LnvXpuf9Kg622",
  "key9": "CoeWhfLaVGktt6PoNdM39nZ7PfXGvuPrBq2YLkRjyUEni1afdD1wMwx32qGfxGubk1uVYrxWv8ja8RadMgTDvK3",
  "key10": "4PyYBVLQ68G7tjiM8h28He6hmcSJVHx1RCpcny3UcR1mJy7FN2ZbyRE8z8JT1qkBS3Q4gmDo7BeCGpVp5DDXNbw4",
  "key11": "5uN6Wzg8f2KCZEvXm6cDSwYvd2J6ie8c89SuJExbk269bk4KrG8DfNpYJEEVGVvT4pSA5XW3pfsdGRN85txDX2bZ",
  "key12": "2Y8yVYfmWv8RG4eDbVdqE54gU5UcgNUQdhKjz6RCZ9dZr3Z9mgTdJHnYwH7A6ErPJXQDaUgmzfq4FuBywqzj1rNW",
  "key13": "2vw5gVoYAQmJpURn2Q9sgFDhk1U4Gd6rNCqrCQH9b813sMuSSoFNRcgrhfyiL1iFU1yBiwNjzxMQuhR6J4pGfGSY",
  "key14": "5U3NVHeYGVV74RwMvZy8nXP2tTZWFP7jerxwhSV78yCJJXCCz6McKk73vqekLeUWgUbPqmM3GpLi4NR5YUHwSxkZ",
  "key15": "2wgpghxvPwwcRveqdEijvr3GkLFrXVpouHywqFVSTX8a7m9EfV52xZ1SUurHg5uPpaUH56BPNMDfqNN9iQbwnBeK",
  "key16": "aTdUkiFwPfNfhahYypKZ4oa6rmdNrVrqjkgnD4LJxFtwG1VWHRh1f82z7pAMoP1aX935paSjp4XGJ7Vu73XPi27",
  "key17": "5y75rSTVgTGfJoP51u41xY5wxwDmdVwbPx3aGKBpiF58hwBz9U68f77fDrua6bhQauWvga3H7KUdn9S4aKdUnUFA",
  "key18": "4iWTgXtMZ5NimSytkK6hG8eRS26oM54pNsB6xsSyF4NRiZYMyvBs9MMi5DKqWfoWdCjipycTqweXfreswof2epcP",
  "key19": "2zUZKAEFCNQQAWaU4CgE1ARxmq7PspWTRSJrvA22x2k4nU4LEzUBdJ9hmCbkKXvQA9BEGkdTS4KS8h7pFsfoZeR2",
  "key20": "39Dy1sXx7ksJv3dQDcsHdx24MoB5LCThrGJXnnTHRQTLcyTYYhhGqaXLJMQ2LcSchjLTwjZQMui3JQ7XiC6AnAaw",
  "key21": "3Y4puoJmopxjPRjVFK1HANJmwrNCxqJRK5ng2z464LJc8bPZaVw1KddLBqFZB2eLY6ye2oac44Gbe86wQgftTR62",
  "key22": "xpVSsSuc6yi7NCimxZjDmCkyJgoqSY6yWqS1AY1Ghv2MKNn7cfGKLgQNQMryoonzXZEM83p2TgjGUkbPyMHqGut",
  "key23": "3sajwT1TDBW6HkyW5iDgN7ZhT5bCy4nFy4XRP7pPRuKRzQLMAcxGEZBmMM1MU547Qowi6QtbT4o75EuFLPZrfUVJ",
  "key24": "3Jp8WvGQ1CHpNiTp4Nx1VhEgZSyxzXGaBpJ5zZP6z3Wgt72XXvoZcei7QnHMY7687a8ponUE4DJmSeKiuPp2ixij",
  "key25": "2ubwm29gZ7WtEWv7Ru9GfPemviLAJ94nGuaQpKGhQVr14Wa4Pv1DVs8CNKguETzizAH3bN7aVCUyy3qTpz7BmVb3",
  "key26": "5NaQ4nEQQ6ekmBD9xDf8s1fFx2QKU2Kkx64BMVR9g1Vn5CDgMQKiB2FtNp7d94n7smCqCbW918ABxmeagw7XBd9M",
  "key27": "2hHvmyXHMioC7Y3wp56pQuGXqhBtrws5NbYbuBFZgPshAu9d2qa9yk2VW3AwdYys2ULnjfVuATZvehxP5YRcZbav",
  "key28": "3jKoS7tzmidCsayr6Up9nZiWQo5a7VYzhQTC8acs2kZWrWMQrM5YgxKuJLt1tXvE6hwxpA5451rwa4RcYj1C35Px",
  "key29": "4hGTe9LK49WwJSF59oTNJFzdiGmZ1115q5xKJgraBKt3TkiFcNywm2PXpRygcL38EfQk91BXBvxrYkj7iKDRSvbW",
  "key30": "yiGWZQwJz9usftNv49HNTM7MaWDjofScTh9iFaKPZ81gubpvFv1BAhBwAqmYySiYKx9Wgnm3ApTCMfL2vrfujbZ",
  "key31": "3ZoFnDyDFenTgqqzUcNfczagMmx49DLkL9psenU5fez8EJhGauHH1P9y5TgUuoXxCo9a317hAviUgRPNcWtPv2sY",
  "key32": "5uvS5YESckGKu97Zgb2tN1AZLoiK9NAk1WTdhCqFobPj9XuZhfaDunrjfv1h3dkf1GChF1RSTCrc4CGcv6a8LS1B",
  "key33": "Etaim1CXBpsdpHBTzzLd52btADbU2qhgYPQM7X3xwaB5eCwyuF7hhgcurtHauwaJt88cGLaXsktthfcJeKGS8k4",
  "key34": "xPbyjSzbSQMpvZKsBnzcE1yKkFGs6VkHTEFE1dBipLnX4H5YabPa7YQCo17ZycXfyjuZde5tEtCU7gyRD8fzVsk",
  "key35": "5NVWxY21QeSPSx87rr3rA7aApnF6tM9Pc4GqAqkwEkCFrtnPugVKupa7juFKMewKrHLfvz67VpTDes1HJQdNfE1W"
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
