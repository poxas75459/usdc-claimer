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
    "4HjdmE9AmcLWzYqnBVDsJQqTDnWW1baPcm1iUveprr12j3TtrZ7kGTyj1LExfvH3nwoXSXe7zKn8qUbYomVEXFRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CG1pvwQMWSJLb4EywFH4pmsKeu2xiGjWjzf9cSFGUcUiMAy2tk1yjNgbUPWPG96SxfUgW34NjL4pr5aTr4BsSjk",
  "key1": "2NBW632MFWcYtEnNKqTbRUjv8nEm6ikfgU2i7rqe3pYHVr6rrYvdGW7AU9bqfUh92szN8sA1hXpNxAkfxyREywme",
  "key2": "4LfVJupePSkhW6GoKcUEX9NZV4BdC4pzTsqvXp4GZD8FaxwYF9Qr66mVqxU9hPaW4JHy5BrSn54oeD27zquXtWBe",
  "key3": "4sXZfQGusabgkP4m2fQWBZLJeReB7MGTLmMpG82xJnfAq3ASseZMEs8n1qH36NFhzbDVhSjD9XXAJpJMVnthc3mW",
  "key4": "57MSRwjLTBJe5CrceWGyYC9apuggDZoXjpMJxACbp3RDbcqwkwt54Dos8adXs5wmkRe9sttGfT7siMHvf9XgqWJK",
  "key5": "2oRqjyg3H2CBmuNuvmrVh4dnS5LqFpzkHdtSC3QbCMBymrKBMa6VRoBzToi4kyCxV16RTW3nnfUceL9nobMcmCMU",
  "key6": "uTCW8V7ZcQMb9agE3hSVa7RCSrh2hNyRUkA3JYdz1pJRisxmxKkPpMzHp9XPfeuQ36Sxu9YnaHRxxAaNBkwz99y",
  "key7": "4D3RoiuxeCPDi8xNtVVkGhtEk5MKZJ4MVfzTeSMqE32BYmLTCjCPCp1nfsFvvvTLzHhKcLzif8Gk56ZLJpjsb9w9",
  "key8": "3PZZT3yiB25f2tCtErVuD2Jkc46WCzYZFeoRn1gNzSuzZj68X9GKUUdLcz8q6q37hKTKp6KSVXcZBaSS5doXSyWs",
  "key9": "2WTHry6JELTeVPGrd42H2h8aVwnYHFsP7gaRfqK4Ugh8Asipgz7XrTUbTTfUXxDFuxqxpo4z9BWyvkVAW8S2SfCK",
  "key10": "3kJp72mYvNWTLtr3okAun7bjm44NWSDpzhgVewPCp4iNXWNDDP7SEisW5gA1tMYMq289g9z2Nko12oy5iKwKWee4",
  "key11": "32RVojHNG961KNLHqjHSmPEysjKYBGuY6ZY1YRAc7kHKupn8yBkSPjmoX7x8tqbhPSsgLRvuJzGKpXZuUyoJXxU8",
  "key12": "4xzwGhPhuxrBvAYBmTycPA3p5xcUZCX8KPQhggCVuszwiRYgjApk6NeQii4BaX3UpgFHreyK4vokieAWXekJH51B",
  "key13": "RKSoCcbaGxyD8w1mCC15Gqm37mihfWAuG7frnvcQb6QfAmkJXyJGGsvx6ZrAGJGLxQqskLfJPRsZBVo2YyC3uwj",
  "key14": "318HUcYh8UKiJ9HkT39bXP6eCojqKBWu1BhUBjLEy94WmGCxrxEsdwaL9YsTx7K9oNzKpJvp49dXtsKCJGpAUiGn",
  "key15": "JUPu1t6rEfKSVqFtr7yFnjRze9iMMdkkoJdVui9KboYtAWSboupS3ZWGrGwFAomKn83SDrtvkPG8Z9Fo4s1BhA1",
  "key16": "2ADoeZrmk6RzN7pgqucPmPfrJzHABw8rNgoR1aaqvdtK6dSxUF43pjm97RursYnDxvEw99nWiRDam8vFXDQ9erqE",
  "key17": "4DJ53rKrFii2TV8cxHenvkgEyjg4v6VJLg3ug3SxjVn3wqk3YST676sfpsbpfk72NMBYdo9nNAYJRqDMDndcAYFx",
  "key18": "5kZVa8DeUgBCndEViXk58C229EFpVSAEV8GWkDfDUZU7TVzkkZmamw3FsWbyw4NwnwYiHxXjMZ4ee26GHAqDnyWp",
  "key19": "3Yjzp3v98B2823G9WkJ82eqaEPWkMUpbKuKws6RCp3vks4DJhHGbsTe5xtZzjRZejNJ7rA3PsvVHjz6n1a9L1V7q",
  "key20": "5AqfjY3xAjgMnWpkpj2xYM1xqcEPdht9UmSUe1cQQLcocSdprGwKMMN4ebkTNcmXSZ4zHsF6dj4c6WDjJXdkdQsL",
  "key21": "4eiWWdDQA2Gi7GFVoM8seZrTGSC61Jy7ANHGh3TquTmAAdRjMRySyvzmCgqBVThHhnFWttP5eUQxqjtPAm3bDabL",
  "key22": "5hwfiDod5M4rYdWAFxR6FVfnTEGERQi3x5Qjb1ahPUgnbdpzzGr5MeV3vAdfQ7kZ2vgXBtP4wfg1LaNd3CWCvg9j",
  "key23": "49cVHjCviYMeFGQur1afaRnKXefNPsppnGeMwhoihas1qzvsBYiQNbfrNmJgMZKh59QpBnHGA6xqKGfdwFrwDnTa",
  "key24": "3WhcbJB3q7yAP1qGH2cATgoU6suU9KjDtFuedc5REgWsfhuQp6p7xVGAeKEnzVFZbkjAdfH1n9qbjxjr5SB6WWxQ",
  "key25": "45gkFnygFNwebHHoy9Rb229xtjohQsQaXneEkn697hK7peNF1o9Z5GTBDpYS5W3kWovjMDJYFfnbaAnFF41nk6Ft",
  "key26": "4ZPjwoB9131wzuQEtPUUJoEznQsTmZ3pypktszo3Yrni6QTUXZEB36qybJQPin68PbdSuhGPMSTLTv1LnrbKTKM8",
  "key27": "3HtDhi6vMg5V5X51kPcJyh9q1cY5ZKA7BNMLEsVuXLmJiRpN5JKe77DqqBsE7dwGk78pXrcXn78p1BCvs6KNQiaZ"
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
