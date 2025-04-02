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
    "3UWa9MWn5Lx5XvcR9wA8ptyyDzr8pchNh1xHLMxucZZFRx35gdp7Zc75py11jJpMhHRN1rTC747aCjzEYAMeBhA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPLCs3TA9EpTVo35gR99BQ23AQrb123GrSUkzMLky4A3AoihUnSiTgt6AZPYD7gTs7f6fEZTosQQM5v5eRLijod",
  "key1": "4HPsDiG85PuowDy9HwCDC1XHmFpDntavz9FhsA714Tuex7xFpU22bq9N8AFxZMiGgJqYLCR5cp8MZBtukBjbNMsL",
  "key2": "4TJZzGSHNsVq6mihVfajkw1913WQ6QxHHHvmZFqAjcbvhLPACUuzMpWjxwHYzhVBokgveGUe98GS2kt4exAYrLbk",
  "key3": "xyEhmCVVHArUdUCrrsYpofYFrXSCgKWQ2CDcg5uorLxcQz7iSNsimyvjD89DcZFEfbuWLuj68qsgKy6j6BpAfRa",
  "key4": "oRPBhh1t5hhvWh1jvTSGTPcgkwEYUFRzMP5gZZ927qN2abLUTaPBjDCDvaFFxQ78uKK28GyNHLSfspLMU4Y1soU",
  "key5": "5dyxycs36a2pujttBWW1qzfv7RbQ5VK9nyMyEzguLSUpkuQRCsNpbdSwPXvme5dgH4H198ZbHjAZaYpDjZzoHpEz",
  "key6": "3LE9o8rh8GqmuKGXJLVXLLQzCpne7m4MtJLPNFog5YAv24Terd4HUkgb4ExarAjKCtEMcsGK3WQXtST5jkzXLmgL",
  "key7": "4beWPngcRWb1JuqSWratztdTsF5MwApPUUEwVbkEjqxEjztiKfsz6WUkRayd3tKVW4Jid3NCkhkJA6bd8bcqe8Ro",
  "key8": "5JNR59VNs79Zgenv3tvwRQUAJA5jHfVt9pwey5rbarszmAuS3yufujtn8TH3776rJ6jHcZqXoe5QWsfk9ecHAdHM",
  "key9": "4JwEVK9DftsJjggfZZfWZVhZWnERNafFzeTUinVLVqHYCmsZwLnVLuY4g6Ns9QdcjKxr9dUovkrtsrbCh3GRjepB",
  "key10": "2d1FbpF9iVXPZJMWxUCfYp1vY8x22AtexvqPr6Dfw1YRVbsVXnCFbBJfDSvTimWnkbpp8oE8FynSf93tjFqPz3aX",
  "key11": "5J6pwMAc4ZawFW5qhDASx9UxMGvPqnCoppKQmibXMRw8LHCXqTksiRXzGjehpggLhtRpb9oixDxmu4xs6p3zqymG",
  "key12": "2kDBYpNLHno21LpqYvn3xNMSLUGRmiHnza6itQw5kGSeajRjrqqirrYiQeBM6Cep5XD7vx4fh2T9GeUf6PxL3GhV",
  "key13": "3rPqcM3YbK2tSjuWjWwUhTLNfGrwcTPaWhLqqX7XcpE6koUEaEk4dg3hb1KQDfRsmmwCFTPqVDpkdrJV6T32mw1L",
  "key14": "gmFPJzneJ2s8FETip753LUyKyCiQ6768KDn6VnNizGQLx4EDHL3PtkxpVZbRaoMeXVb8W73mTWi3r3kr3wvyg9G",
  "key15": "2GSpQayTxo2MEMPa8cdqywFXrzdMjPZ2BRhdu55UCwkFLiKUqo3TD7FWjbgCZokebYj8hVTsTN5NzYqgPQBWsC33",
  "key16": "36PRFcXv2wsfTW1bpDbBNmxPV3ZcsHior9DiZhAHcYpztgX6Xq7cWcwMVzCPkca31oEYuxdYwp8tdtJyNCZyyVmZ",
  "key17": "2vEcwovzYCdikzLco8zRPwiSE1SJR1m39jjsw9zXgZhA7x8z6FWoCsN7j4iogTYrn4BivwZcj8tcZGnVhSy2H7Pt",
  "key18": "5WLeLrBfsy6oeGGzZ5HpDExhFN9eGT5WtuyY2i8JJ5T4ovhqVRvoHQe6U2HJHCrksEFk555PtZQo6c7wLoca6Tne",
  "key19": "65Fskqvu3R7yRoj4BjNFL5wkJkcr8f7vNCTWNW3WbuFHqR6Hh7rDvnmR8vRP5A7kK5gbfkN9mSLXt5deFM1HTmFU",
  "key20": "5vsNmdphbwhjryND38EapGQMyznz6Lg9vieNsdmCAQBCy6ELHVni5RNYFdUV5bJqAq15u5x8sjerp2A7nLJG6gKQ",
  "key21": "2XnXPbVS9tecRJTV88936URXYTAThXZtM7EhgZQkSnCjp91LKqQnqssXuRsoPKY46Ap2Po3ayrgrHw9rKUxSThuc",
  "key22": "6268iEM9D56gDT5o8XtpWRZuGQgqv3hXA9jGHu5hcXKfUKxJHBDcqQuV7FgK8PHQjfFsG5CQa8dbWPUFVvHz6VrP",
  "key23": "LhTURiX8xHQYKDHKGEiQ6gqCXXzkj2sZTpVwSNfk5gasFcWpn4DG2Umas89CvKtSDiYY84xXEreSHSZLzUEEsLn",
  "key24": "319Nuu9jvAo85314GVh3t5JeoyC8tapXGHxJhKJQkanVJALLNAQhE94uHS1LnmgtkceJGFLuuigGjLHEWpgoMwdh",
  "key25": "2egnpX7etBpvdFDNcMxBaANA55BdSnPhpbSeqTevmm4DKBxCwqWCJKovHkFALo3qbtZk6LseQVEvknZeDBnCy5Ep",
  "key26": "ghVBDG8CYxuCzw3yomCvFiAfDNdnwANP9yDUCyMhw6ujQ1MmZiQmPucPntYqYWYCbU5CzNhzx6bqcoPmsLF8BNP",
  "key27": "5JZ34uf8jVx5ZDC6LLX31ZZGsQMd62wvDTG3cgNcoKGtvs288bd6U6WMSCzyeQdZqCtp7vsP2d2x1YL2ZADp6XPc",
  "key28": "2FW2SAs2ZCKBHhFMWcpgvsz3Axt9KyCcqBUV5Hji5fjbhj1HfwzMkanz4j5gVAm19qGoU3WYnH5b293uHNKJM8LH",
  "key29": "5TDpc2UGxKDG9qQyzzL9eoaXt2hJFMXyk5474zMq2FxXVYtgKxnWkvwnfPabXHjnUoW7PeGLENVPauuSZ47ZKaLq",
  "key30": "28SpjeYvL5Zuu9JPq3gK2chmhHtQoj46WNiEkR9VpezJfVpEaGKDVvdWmuU2KDg1S9vZqqbwiqobjm3V9juydfoh",
  "key31": "3Nfhnaq1jfbwmhn9M5ujGcJ2q61uWHReb5mGputfvowU6FtcwMGsiRd7Ghfr5tbqQZkY31XjLCoxyiPnAfswjKX",
  "key32": "5PTGf4bTpAgTg8qaX6PHjTSrdEgSivAUC7JN4Khu4RhrJYgK6jPm1EWL2ykPNkfJ2MSKQGmftCSKaGqAxTnCXptD",
  "key33": "3qjCJkrNJvdvRAShNkJYjJhJkaVcnDjwEyYLV971gbkQ6WA3JbxFynQPCBi6J6SUktknEpxwC6x7bdet8DYFwVUK"
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
