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
    "5QsMmD3gZZgFb87RfsvFjQTw1SFCcQ4oR1RMZZqopwuefk1uvN8EGdTwCkKgLCvGvoDMko7nGHPHkmfcVHbhVnhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fkjRKnTUfkXZQdiH1Z78dvt3RWXg5fvioB2Njbw1HZML8GdLmR4pLJD1LzkVDCDdYJfrkPF2c7NaRJizxKREji",
  "key1": "5fr9KaBjaxi71hi2jURVEmHxyyukqSmsXaBTWPKZCexp9o87pZS7QknWVEEm9xHSGAimBe3cuzrK5qWEPfAUPneX",
  "key2": "59aMsJFe6XUnqgbyFsrMFXTxQ4jheFtKWcTTLQMqB4gQ9Lww5XL3MmocwD18qL8YeHzQu2DhG5aPGVYPakVShsxE",
  "key3": "wzsA7k2QvKXUgVqyk7qc6XKrXSv3DSiA1GvTaVy4rRYhvFSA3C3DvpCm12ngAg41pMkuKvADfoRiTPCA4mgJSch",
  "key4": "6RehdnVTnXL7Px2yMvVZpYQCBnRkmjmRrzS55mCS78FpsbufCnGowNsPdc3RXYepDgAeowoGndbfdUEqN58b2gv",
  "key5": "3mfVPgaZMK837kdwc16NZ8JGBJoy1zBTKRGVtiKazJifKf7ARcjjUiUnfoCm6a2yVATU9B7JwBc2GZ8Pw61irsth",
  "key6": "2pnkYbeZ9roA4kB9XhXm7BDK6u1uDaP2Qqny5FkiAd8trfMwig22cFax48uMQgjngVR8BnxtUvzHaLDbPWax1pwT",
  "key7": "5u98iWyDNj6uotgxGUnKx6usa8AeJ4bxdFnqDfSpsWgjqxVJSddArDpW2FeJmQVF1o9vwXS19nLotxdDJaYmNwdp",
  "key8": "3dSiHXcqZXXKXeiRQjRuZcKvx1o2FnEMrGBPHdtqqRtow8bhxpt3YZmggeqTPy9KP2jy8tRSvY9Txp5rnzy3jVQb",
  "key9": "3SwiT4ba1fq9sQ6BEjCRcnHJrwUDktMhnpcNLHDCpijtBLeVFa4GUYyiK2dTkQg21PfFRSmwZ5AoBWAgg5wUEGFq",
  "key10": "E5oabjgaFk7TzSx5xwmDfyYYvBy9MoyhV7RDATSEt7nnMkCi3g3Up7WzxWhCmxrzhL8rJaNYCc1vkkpY37XnmmQ",
  "key11": "2h8i4jJJS1THGD2WMMP4jFx4D9VMBRHitLjX2nHhmiq6rCaUAJcN4f8opaHUpXuMvFH34iZcvyPBY3rL758Wf2Zj",
  "key12": "5Ca4hmuNRB5iaQ2m7o3vbveVUhjzwYjqK21Dph5Krv8prNkrErCrtfLzru5nMvrc4ghitMYJLaiT5DjQVwn6Sjqf",
  "key13": "4TPx5anXaeKcW389Vaw6accu42boHiC5GRCcHqCWe2QLNypJSttgHRiDpWiwTN6kiXxZ6yJu6MGUN7mk4cSJFLAw",
  "key14": "437WTqaNCCtMRycWTQ7gsSp28NE8mjVAkPy3WXVRhip3XPk6RqtWucEuGtxmY5touXjhnuh8zCdgRZUHAgpGv3wy",
  "key15": "NfrTJyp7e2PgtMRoZM2s4tDmZibCZ7MXzWshjWzi8T4ZxryeSfutrEjSUMTsZpsM5MqGdkqeKep5xYfHNxa9L7v",
  "key16": "5ei3ppWAnCfunUH5DeRGL7qeUa5vPjJAaVQN9gVUoeMPWBKyW34YnLALYbKkNU6n2k8gh48uEUPRkT5DKEqRPQGS",
  "key17": "viaVAqTREQd6QMJSefMLJGrThpUcM6rCtc8DcXsKx7WnE9nSGCeopsKMD1fq26pwGbhXMnN1hQ4P1mAFAj5Y2Zx",
  "key18": "2yFCqPAQ2Gv2P36h8QEtrj3YDUDG6j9u3gZFsLLKCTgSxTWXddCpkg9iYm8UtRmTUyffZZ8CpPTMUQeWmQSxw16V",
  "key19": "2j9ApVoDu292MZ7pKvp58a9vDRVjRYh3eq4AXJrEojrki8BMTifQCTU6a4MKwHow8X6Z9f95JS8JwruHoSe1955p",
  "key20": "5C3NWN2jhErbLXTN8NknA7K549ydAnwtfDfoqYN2PMxTgzPtiKwhHWQJrYdgc7s1VSWXgiHTmyQcji4uHCdJocBC",
  "key21": "5EsSxEqEHnmCw4gRTtWAXFbEK6yspkng4B4uDFSb9175dynvBz4L4pPxDqY8vS87hpnB5CihXkmsPFd4qXaKweP4",
  "key22": "5gWLX9CEgNtMd1TBZoQc5PNMRZAswqYAfzzcVATgV9PqXdHVQgX18kU5DPD27jvkWaBFGdo95L74tpwpMAgq6u7F",
  "key23": "5fEtjqnoz7D9biA7GYPMd3ad8LGcACzGwboGk87XJj9dggdqc1p4JZBmAvqsMGQoYyVn3rpkwFZ7GkDvsfJtMiuA",
  "key24": "5QPPRwaBVD6UGKcCjB35YvJYjpnHdotttRmemxLz7fVSCt6teex1kqJnoDFNq1aVmNnuHQyVy7SYjXAqg3AgjUjE",
  "key25": "2vBm5s9UUX5Vd1XhcpBZEvHq8LVynv3tUjyyG1GZNXS582qUT11XC13BvJ12a1WQDNXfCjZAoPE8kSMCUvCVfLmN",
  "key26": "5JyN8qqsEK966HbnF1Pz7F3tLJEKVe35T84uAUaE24TvDxHd4YJWdGK2ABxUvATfRR1FMcvZSiqfxsWVrJjyDNEU",
  "key27": "4BZVr2WvCXX3YdhdDqfX84yoBWRo7QiPbxSJjPPgZLLcZkFQghmLeBCGy9fZuJYyGodCb1wDNQb6XYSArJY5ErzF",
  "key28": "4QXCey9WbjYZnYnvrFLmoAu7Ap6EF6jbGSNEcDQi5xRG3jrMy4NA5uUsMJGtJnQGvjpMHLsS4C67TsP3DC9bq7qR",
  "key29": "5HFCbB8wBCNJp4FynbXtyqNZ3xwYHp1zDVG5aGDbvgVrHjdu2ej8ENQvCD1fmtmApsPipcjsrPf9nWxcCA5KQuRj",
  "key30": "4q91LGLr5gryRNUn6kgQw5hxJFdHGYtnVAWoQgBzpkV2dpiftWkhU6Upy2aJDmQJNhqKNfnZ3WHJPD7atShB6fJ4",
  "key31": "4UkLZ2hH9PSWEAHNyiAmfWuhHq3gijQae3r6X8ZtnomqdFX22nu83EEQjXgd6zGtmyVdxVY7X7AcmvjAivCr32oD",
  "key32": "2NHeTfYjSg2H6QKMm3LyYojxSyAXL5817iRVB7DrGnxN3CwTE8RcgqExXbTmwqw4S3NzMeQMaTAHVgMeuvXrtnZg",
  "key33": "3cqD6XuFsn2Fk8uBm7WHTib7H7fX2fSqxQS1mjfY9DTgX9HNHkZcw1UyvSW2nwZ3Hvn3oH7DYYMdGdPCSNEncZQf",
  "key34": "5QqBDrXCtjrymi6dwYRvjNKdpRJjGM99R6hgM1frTmPbjKq686GGiKptpBnK6KZZBtas3tRbXSiiZQZtXjcN25xc"
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
