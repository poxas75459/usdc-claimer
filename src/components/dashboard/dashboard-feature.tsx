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
    "QmEpa3LLDpTmg9Jsxcg8HbaQEMne7aSKemageSXpPSEyPW6iy24mWrM7yFeauwi5WbBMaQUS6P1KpsbLCTz8m8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ju113UL5duRfTY6F9GKpVpfCvkCGJe3xfEjYMCXkh5fXicLRX2DQvNsLgymkQsPHfgQofs2jGocDCuc2aomVHV",
  "key1": "31RLuxrcsAgw1dbE6GqbukETJbdphmbmXMCnWyv5kgXAc3tnAPappoTBLzipeJJ8k25RSj6fvgLnH6nuSK2VQLy3",
  "key2": "4bkzhxkYkuADkV4VJzAJKMjoCXNKwV7fPvwDEYBp1LtA1VdhTuWFzwMkCLKGnNBcRHmJqPvqsAn6otSXz2A4W6S",
  "key3": "4MpmaSf1ZkVWwgN5pvRRvNPqYUD1gHA51EYi27SB8XYex7PKC14KVs1CtV9JWpKAvLMUwhiaYQxcD1U54tbUFYKu",
  "key4": "2Ct82Lu7Amuf88x3s5yUtmHRab3YZbY2kRq9xfU5LnCwDkF8DBeaUzD61AdRe6aebTUEJTNjDsyZjXVAw1V4LqZn",
  "key5": "64DPTcRmwYhgZSB5XSfUxZT1Lf7q8R4QXoLKLSZaPU96ya1dtY6Z86sHERbDKktEyyfZeLHasx8uLsqh5crWNEit",
  "key6": "RASXxbeTLddFXUVx48GLRwwukXzGCfB5n2erUFgTUDqpRBWwv1p2r1pffnabErvwio87XhcmTKGmwee2H2JRSRn",
  "key7": "4scHAnc7oWdU86CzerUsH49FBxGKA6LGa5ovfZhnzAyTbcvhCvCKn7JvtA8oZdyiA5kXMDt5hsEV9groi8of9apF",
  "key8": "45FeRkVs4oY4mBwrruLoxc3b4WBSqbArvfoHQJRScQjGQY8aSdhPF5wNDrCSQRixEj4fs2ssqvnk3M9ehohFfupC",
  "key9": "3s4ALHjiVdt5dz8JfdXDxfMhCi3neMsKJkJvMMV6ciC94EnzHvKabJXW67dmaWx1yTQCDt9zEckcw2dE3oDGSNP7",
  "key10": "4rKDdAttje2yG8QcxCL2yETU68PRy9u9sNmiivTsA8TUBQS3b72BeKpXUzRisFomNyaNGxnqfXnFMsJ1rQW5WjPt",
  "key11": "X384FLwkpkK7TVaYFUmjo6YLmTFsVrUJYocNLAD5ziihWNWfuEMuhekm5QxiHUPk2wP9SvTSFUidtYpJyxbD2Xm",
  "key12": "5WGCmYS3jri1vh48xkCunkvSG78uxcpqTuZWxZD9xCUoAd8rKZWFkx1X6ftRTXatjSoyFvngrrqpsd2HHqdiRKTk",
  "key13": "3no2Uex8QcZjxubUCAqGy5WbaGJX48q4BL3XHrVtdQxDP37qPLo47gipUGDJtcAFq3K2EyQtyWw8kCRBbrDbmywG",
  "key14": "3UcktsAh49nqXJqp477cw3nWSvxMKrF1gtc88vUXSGbqZhWCZMqfgCUiZqUE4uDiSKnR3MWZpLQkxbDHx2nP6t9x",
  "key15": "c25XyR6gC9ByxnzkYbVXA5LDeTdmxKWUv6UANJvYLm7th76cHRYrg1XejPJSkCkkcFws5RC83nhwDDyUhZbRjTR",
  "key16": "5J2Z78vTsifsxiYKFE1MbAQ9C2AZsmUjpe3GNw7KvUWQQfHMU4B4z8yPNTktwwjW7NmXeBASNmwh4Poyc29zvbLk",
  "key17": "5awSspUGR9VREpg4tqBgMsC4arANq9iVQymmczf1xuvaXKrUCXMBVgrkR7Ck3FDtSrTCoRRRUhnV38guXkkuspf2",
  "key18": "5wo1mzyq43b4DzrdXLUMEDdJh7wDA1Y6Pt2uEGvFEEKa6PYkv3BU4G1gWyx7EPjiypMJKgGkwXKDXXx9qvsSmGRj",
  "key19": "2kbL7xkrKCYLuaR1ocnQJDQB3gEo51tbJ9q5egTmfwy9RmMnc3iEToBCzuiXB7DVrL2HNBtxryjTqLPfjpYNsJCK",
  "key20": "oB84Jruv21XPUETdxrRKHKpxUHqVKLgFaSQgYRgAMT5TMf7VMFBXMVDJQZRbCcy9tfGnFF7QofFcFcj2QKB1CBT",
  "key21": "4H1WLbwGXRPTrEnXXXeYtGqbBMQdZSMZqkUncs1e5D6cKAunCUBpBhdFBShPP67bvj5oLJ1WKVHQcY13Kv18TPhR",
  "key22": "27JMtwTSXmaEDfy82n1pLSkP7AaXZYrUgWHVn2HWL5FpsgrppXQ2po5iUN1XUYgWagpN9hGTovDr3KqyTrywMqYf",
  "key23": "21soU7e3hLWsz64VRNbiJzujjoSShmf4bCAYfpDbwpnGCws1cM8CNErcdxwGP1jQQ6ojKoh3LryaJdMKERLbnmci",
  "key24": "2gfftHnSjAFTDuHKSFsFYAwjEDfmUp7kVBAd3iockdN5XiKTQPuC81ABjs2A168bfhM2cH5rsQjv3VqrawW5oNDh",
  "key25": "4LKZzsxrxkAHbTnHiywAQgC8uFABznwN8q8CfNgJTADVRru4icxH4LqFSuHPZ1bgNCcwufGHHnLchiQgs5p154Ld",
  "key26": "hpbTmrsQpKFLLwffs8ampJAqGsQ2YraUyehz3X9eF32zuYVWmiMkPjab1XYE22uTN8kywc1oS7mThxobY96nMva",
  "key27": "49geKZoBcujv4zCCenDc2dKCWBXnZKLVqGbZfNf8Y3nKk7FykWBLY3NwYv5CVtQxxVoJC8HV4MvF5WgU31xhNUiz",
  "key28": "2MSoxMQTNzJkYjNEpmeho7gjYE3GpHZByMfB9gWiYf64p6J62Bnj6xP2SWqy62uLvzKEHqULTGYA1wtMRkpsArjE",
  "key29": "3NitLwDoK4N7Ki6q6WKGc15es9fXQ7FGbXcJaGoUR5KMBA3xycGitKrPkdsiNzNZ9h77LXqjNDiwA2fDgjNKCDPu",
  "key30": "ASnDeSq9ShsbWYq4YZqmdkJC8kDTVG4gjUNVCYh8UvzftGnWTBS6D39DS6Ax6wr9BRyuWDEsR5fNNjZzd5H1e72",
  "key31": "4r7suzY5hKLVq9FdG1bFpvDm1iMs1hLWTMRaGM8BUaSVv9R3xytmkaaKkHADY7eqFGJc5syo15yScCqhRVBkNVi6",
  "key32": "ecjZLi4RhkYqedvfJmtzWAUfivA7Zkg9xiaNsVuruazpS2xuDfnBLgKddn6hfZ7LDDhP5MXxKbeZ88KrtZug2jx",
  "key33": "24UyLLwH3rPdteeyo4KYp4YbLgMqP3DQGdwZ9jqNVKW7Djdb6o8zKNoSira5yJVhNE3ypn8SrVYDo7qfZ54gQGk2"
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
