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
    "3RDKLKVBanUSqTUq86r1j6PLfMCZoNpyC1LPsCRqLMKrjUcSdSQThsv7KEvEVfv48se2TnbWWZ8rCpfZdzwpLfnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUEQtbSqQj6YZoNbaUbWMmkfPuU6fphRG8XXMRCUkFDQFh3rLWZxEGPjg3YoWiSBvQgAKPKqMMV1iLcc6cBsftT",
  "key1": "CEyqUqMzqf9ioTFMpe6devvNQ2LMSQRf2V5L1tW7Ebru81REayD4Bo1mPVfzG4iMFVzNQwTcRKzad2cbkS7Zjx6",
  "key2": "7emovaFc3YYsg2AbBrC2p7Q4DrFPPBggSGbvTrv49J4hu4ppYvUWGFeYgkwsnbKRg1ZSTAejV1NwkLmKeAXaZRc",
  "key3": "3K22E3iGKSAuZPASRFNs74gGTzwRvs3TD3TGLstYg76q33F9ABDByR5icBGpqXV8wMcUFmxsxwqJuw5JgspQLyXQ",
  "key4": "4F9Yse9D11HS1ZPm8eUiZ42c3CdsKNbNctTGUAJ86imXVP2yvkqeRMRLFRv3TvGRKvEToZGtTp3RwhADAQG47XYh",
  "key5": "2hMcFgK4QzBTbskChHn3n49bXWnKS15SyHS5d95K1afVJT4K4HhPUNFzc4QUgsXYahmMFqZCozY2Pfr1H8SaM1jZ",
  "key6": "2SU7vD3eG7c2VdfkV1uayBZ6LWNzntuvYjsVKuhJXo8vNnUubbH4hX1QZKdAztwUiaYFXQK3xW1UrtSYN6ym2JMd",
  "key7": "Ac5eQQXtQ2QC4sHUA5HviKHxNaieKXJQgRDj5h4ZZqrqCsMM23UJQQ6oC4kw2CSLconP8KbmA8zjg4sTARFmMyL",
  "key8": "392kDACvpCWLibnauan6F32ChJQKq6fALzVxiHZTxWTCRRBmXjnw7CnvyZFEutTZjHQiDJtGGXVaGLsGZ9ayjdDR",
  "key9": "42GskHbZknzbxzkaTbtZhTea7rjvCFDziue2WgKcXVWs3sW1jxF9bzV69Ldy7HRM3HeY53E8uE4p1ux1eXTyDoU4",
  "key10": "PJqoWqk78knCSZyqGQUCQyedWhQWEAKnie54jeRRsw6uu24zZRKgc37byZKUB6H48khtomyCfTgrMXiYKHqXigr",
  "key11": "2jS1XpnKQtsAkS4eAhJcyPVCad2tNgjPezfc7MiTPGxgwxfpF8HWcxFCPRcu2pBUnEDucDfp1L8PNf5Z2Hi41qe6",
  "key12": "3SmFS3KBZbWh2fwCoPwAWRP9BQrE8HRiRV8wR8X4qnZJD4BWtQ221jRFnoDah8pwGAb7c2mZdDJDg78n5CU8S5MX",
  "key13": "3b5FKA9t4iqWu8dARmSHYAazmF1UfjiqRSgafZT1zWs1etLVh1jxaGMbbEpoh2bYhDcdWKU6R6Pa5rR5zpbwtMzr",
  "key14": "4irU2pdi1sGsRLU2B9qUkH6KFpbvsZe6SprrfyZsRkFQxJi4qu6FgtRxR7qsDGe7QzrxAzDrVsxjVtRP47p8pmig",
  "key15": "ESgopsKH5xFjQvwbobC6F9eFZk2W7veGxTPRypjkKfd9qW19zVkPjsDmqoZunXxo9AJYGJeTao7y678XSRtLkSc",
  "key16": "5ataJTGTz8t7JQLgogyjJWQqfXeypvSBN9MfBQuf1Fwn4w8tkZdFDaPyH33xbPiW9FxzMfAS6SfVxrzkJnqqpaiE",
  "key17": "5dQaaXmdFzMFDUjzVprZ8bJpTbrw7mFcY1Lg72SqMp49KqexMBTniqhqKq95EKwKbNW5tBa6QSUeuQCrNQaPi7C2",
  "key18": "xtfAUqKZQEXmRhLwdnXGVh1bNani8HjG3ci9JqEuRJtgnEWFWdwg8EWUkc8bTYT95DwHLf2nYvgZawMvCsyAR8L",
  "key19": "pmPaT2iM443qerYK4SF1C5YKm9u9T6WWcPnPGgaF9y2M4c53vs7dStZCBaEiXdTntKMdb3J4x2mrouyjTwGkAKY",
  "key20": "53oWLscebE7YYFsWYYEmdLqP1Eq7hhLy3DMhUxKXxvcDZxgHGC9GQPZpm4jmkvzFLJRxuFmV4NoVdMiRuiQcBk39",
  "key21": "5yY1agwVJjsCZh6j9m5DiBdrrKffvDDwwJ4jK7rREfxWsShRfo8jx1JMZVWn4DAXVtV47Htb8VsYF4vukT26db63",
  "key22": "4AJ5fS29xRoGXfEWerze9g1DxBALA9D4d5PWGojycSRCPSuvVaPyzkdvCzkuBTjtKW6iGvpx6hFAUywqFwazNtw4",
  "key23": "4AAgEWTnez7FvvL9eS5nC4TnbJAgZPT155V5ykWurnnYR8ic9mxHDcwWSL8nZUZciab9yVNufMk5PmyhermFcYQ6",
  "key24": "EZf3FcN3oAiSpThP2JMDqmmaBXUmC6CZkNVixYbPcr35yYDDG756WTnWDjd8iTBMhamBsrBiPfY7MhmJDN76KYd",
  "key25": "3Xi3xWvZfuUPJjfvDvdXcb9PN3EkpZLDUbTu7sQHjE2XRbdHuKpUkcMZftfKLMCTiP1Qf9gtwZzQBXrr6pQBPJoi",
  "key26": "4gQRMMtEQwHTCr4Q58CkwD7Z41tDCqprdSxD4gjfxvsQKrxVr4iE59qF8GaLtsXwWrQ8h9dECfKBFEjF1KWgRo1X",
  "key27": "3eMhpEiPBwhbxbTwbSTmBocusum9i4NMPG1fhpvDoH4cKUBabQbS5JUPFEgQFurNPoMzAeEvLHrBZLoMRpsWHAxn",
  "key28": "PkuQbL1eyx2NAY9ykiCjuJ8edbHZC5xN8avvAwuhAVupZzr4zHq1PHGKRRjqft6evnisK3e3bUQ7tGtj3CmjjFb",
  "key29": "4UPH1R8zyST9n1UdzxfFovj1NjegYUoNnKNmwMUrLEt5C26mwANP5Ef1L4MUZsTZrd6DXXAnygaH6z8DbcRr6kj4"
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
