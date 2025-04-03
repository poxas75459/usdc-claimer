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
    "4r9zVPVBcwk9TY4fHzFYKUAeo8ccTCjZGrt8FDTigZYg8nJARAHV7NL3vdQJUFN27Jd18JN7bwFKsj1iFWJSMPPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDihg3zjynzzWyRxsBGC9XNXECHpbv6wncJpgcPxkjRSxNuLCF1AoTnDKGTrg4GiwcXEjN1DSgFHGobap3y6b9F",
  "key1": "b7bQEqoXY5JGRk7itFKupkEiugeZwbWHvw14BLYANWdBuUKZANPRkB9Hbvid276BimXUTpD32iw8ZR2MUZXa82f",
  "key2": "4BVWoGarK1bHDDeAfb4iRYTXQAqPYJrsvvpSYidfXU2n46jeUUNVAxec9YXYnu4KTEsCcNPK85kVaWNfPW5Mbxwb",
  "key3": "3pj8Ttk2cRJrBmMpyXhfDeZyM2perNU3Rn8tr1WTQBpTZ7YicpLHxDd5jXHYNzVR4oH5WMpuyoDbBME6x585vJ8d",
  "key4": "5who6KVTk1ow3S8smfb21pYxrPHjgxNiP6JYYWZMmwy8J3dkEoMrPWhvgQTpPDvP9uTkT6ostyZ7a4PBBCvJ7vX8",
  "key5": "W7RQhuBUao6KS7o8hhKonWDJLUw7FrL2NaG5vqcJZ5XjyMX8JwPBmeBiYFipV7tL6wNSzCmswh3VkUM5vY6Yxj5",
  "key6": "2LGK2gKPTHFvH2LiGrFDr9ewy3nws4gcagA5gS7oTXi7xaFJ9hFbWCMfu1nV2nqfQok6HSK9tiaszaJ6UWZxKd6B",
  "key7": "yDptMG3Q1rt6GQ1BReg88r5RhiFPww419VYWaj6vutn13FDHJUmrzQMHza4UH2maX1Nv6iNWpf11B8owHRxnJo7",
  "key8": "2UzzuiB4a9AnRho4pQjf5v9PeYmG2WJay9sWXfgsRDs19u6nUadsuNXCbx5FGBWLkKfKLEYRgA63YuYGJy6qRKgQ",
  "key9": "2h9Uym4ZzMcY4veUMUmWiX9h9knw5W6C96DyrmouMLpABoNSmXhYNUtDApon1887gmrtB1Kif9n5F7uH6xPftuxt",
  "key10": "QV5qEvE55JagyAc1PSJzdFM9LGG5QGx99BtSBB4gagBrHryiUuSVCix1zBUQWJ2DKLpPpFzdJqRhrsorFt3tnf3",
  "key11": "2E1tAKX6hcUC3uf4XNBZvwYkpbSNjhBcAPiUGB4zJWHJR74ej6m2mcumVY2gBMVGtyopE5JpTnn7Coh7VoXjftXo",
  "key12": "2JuiEAAGRYUj5VREr1RTa4vfFvg7coFrtxwn4oakFF7NfBujD45uwZkQTGPwbYEez5ngNLEhRxF8UCqNvDE85iRt",
  "key13": "3xuxpPtiom6k5pF7JJLkb4ttv5hkvyggqL1L7LGVxwgK7D7ccS1SF7w84NP88crEzBionHsd7S2UxpzoQAm3Pf1f",
  "key14": "3aktfVPp1K6nWqmVPaFrhfgoU8Jqy9viuj3KzyK95QbXTS1EPYD6sHumTqzgZtg9YAc1C41vVCE8QoPHro5tWdJb",
  "key15": "gdg8xUtNocBczrqphs3CSbj7PbP289f2R4sjkB71rgzkJHquz4iPFBJw9JdAzmxXPDX5W4w2vRE4UmHMpo2L6kT",
  "key16": "3WzLoT4EAJSBe1eKHAHA4t1i4oRnE8sSoEahNRmtxa2Qu5i3RxfXv4nYf7qwQHtgynokKiwphNPYfYGzyA2gK3N1",
  "key17": "3Js9zVeZLyq5HWmeXiiVkfWqVMt41qvNw8LtCLGZkhrqmXhuQXUZ3pjqwTN4zZcHP34QEZPzJSFUC5m7s7gdaqH",
  "key18": "5pbHDFq2g2zR8z1qpg4qcUGzjkS5RtaJN9ZW8Po95pnEWKv82jfa19kgyuVJBFqDijmSy1EXZmTy17qwctDoALqT",
  "key19": "95h1BwmqrypATjm33TWt1EqTVFCiJ3DKVWDzV6SmmP8HWpWPVkr6VZtjiV2791Kqj1fC9LMY22BWHBLux31S1JM",
  "key20": "2k1a9GajLQMV69BW4Q7bRb1RTB6esTTFVdpyyPDo1K628nE6Wcu3du2UzeirwbKUHFrHkeBupntcqJ5te5mXf6Hw",
  "key21": "2pZyeoJchTPZAVexvwWNHYBqZcX9TvG2PSADqK7otZYdh57xFVuhzDRSZ1iL46zVTXM1dVbQMQJ1KRWmWFNbN2Wv",
  "key22": "4iwjQuaXNbGmaEaQiyANqRujDK1FGCYkjpLituFKL7axjNmW9bSaLTuXwVaVr1HFMN7ZkKuyNe1Ytwjhv6n6gK2w",
  "key23": "5T5PrwxWR5KvRBGk6AonWcm9ewGJVQzbEXSMVEYWx9S2V5LwVunCgA5N2Lbr4swPmPWz2GEGMMS4jsWhJd6yHw86",
  "key24": "35bu6uzEDSUqVztDS54CKtzUzpoYLsqGyF8v1E2eoxeUDLXDmjFcGDwqD6DC7dNqQC4rP1sYKzLdYGwF53egBkfc",
  "key25": "3exVmqD3o9yYb1F2PoFqC9Y2sveRVgGYGbJvucef4e8rWFaWepwJySXbSbAJ4tKboQgV2Fn5T48jAyafvH77EG1x",
  "key26": "3CnoPonmQy9MpmBUHei7fa4maaChKEUKeSYuSTJkhmeN3dDWPGaGRcSGGJMDLDmfsyiAxMFvU2KqSJEGnfVvZ8xz",
  "key27": "Ssa95w24U7DbYkprWWrLq6raxtKb1DBSZttKKmWAJFyzXawzjDYnm9Qe6bbehReTznwtA2DSwMUPcgAkod4ad82",
  "key28": "2ng6tYEw6PyL88ZZojLb7NcZ3ZWVwEhCuBGTp8ixnzySbYPoz3btz1WjwTmCEsysivSzYf93JZq1osnVa739HXru",
  "key29": "vrzxxQq7vYcCUJUTDiar2rHKc54aUH4SQTjrVZyGKepMbg1swvEoMAwtYw56reyyexManZCHTkcYR6wmiuxBmAX",
  "key30": "nD1gpvRvNdx1hxDVKdnapHarPrW5zeNdtdbYgYgDVseBEAQovH7a7XS7AXDstCvmwt9J4WZW6gw9kJfe8UZSanM"
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
