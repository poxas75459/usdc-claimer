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
    "3BR1KJreApAFSzdZodRDgpaiNPG5x3fFCNM2F13LkMZ2cxbHEnbjtN7eG3JTdmBH5F4cv7s3bviKXzScQtcMT2K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pa9usEWofSi2WyZnyWsTs5oQmnvZGpWKVNXwF9eZbVTmdoWjmf4TrN17v1AhsffE9BfYcXi4vj9jRA4EudEkUD5",
  "key1": "wAUbNaf5AfEoxg3PjdeAk3yvqLKUZU5gnK1HgzL9U8dcJEFNHFvQAiSEdaTzzPxwsiEooZmBkVEmjXRB7omv3YN",
  "key2": "EFzPoY1tv9FQxjU7uPNNj6c2NFx6gbaLanokhE7TQTYGYVMZVK11VJSEFW3ABzTa4p3YuFX5jU6p5KEJEwckMSR",
  "key3": "3QbWBTwk6WQc6F7EBcnKvPGAFWrrjEwfYZJZostWE2GdN7JBACuXnvdm2Z6v7hhEtEXsTFpE3q2x5Xxa1xpt24SZ",
  "key4": "3KFoGQY3e7e78DZPe3hHf7n8AaFrzL97dRWJnoSSPTTN6YD2Pg4mPUXaQBYPJCLffdQTix63FvNrj28rctHb6eFB",
  "key5": "Kbip3r8dEkXXvT4qRn9xH2ksGH53KuX1xsKCzZ7R2W1fvLBoiPLSqDe7NSRPDUqfHUZeCopa9s5EmdEYBGfd7WL",
  "key6": "64SFvzL1amYMAXMoHCh5BNaYufokhZr5UCTGLKarGcjH7fw9ymryMrHGWoJ85o24qempYFhprDwyu8gZG2a7SxUz",
  "key7": "4EU3vPNnm1Ha7MVZiSUtJ6S7FtA2Hkemnftp1AAJ7f44gbEgA9TvsXYisvbbTEzmDT43ssujDtxpcFTM68YZni8u",
  "key8": "5VyqJVb28ZUopdhJW7wTe4jSdwHQwsdg4C7m3oT5C1G7cwHPxcqHGxCQ9WKuXiVnNvKWUaKcnn9qZZMEw97tx4wW",
  "key9": "2r8Ua3vB9rN9KYnwpwvWoYFtssfoDgfBhCNPQxN2eMdV79GyjTVzKUx8HqAXPezDT8yFReGh7Hz7JFVNWN67DzkA",
  "key10": "26tnRfQMzvRy9HaAGM54Eb9y6SG5uNx6jsjs9FB6tLRaGnNjXH43UuU22oAXrSLEWWTHs7ojThyVs6Y7MtgsXrDs",
  "key11": "2T1e7BELBnh3FL2ZSASMxihWxo6Yoie9kzCngFT9TxgREstY94fueaG7Lwag8c11LSTehwTFg4yWffB6dhkpYpB6",
  "key12": "fqCyevkpXcYnT6pvA4wY351kHA8fcEJ3bYk57Q7D73xBSTD7yipLsS8EqMCUWUkTyxL2YZW5Jww9AfWDfY8uLxc",
  "key13": "5Fa5jBrto3zL8iSBXmAo1cz8nD44oZwXNkLRAVhQruEEAHV1FPwHuTJoRT7QaEUotWiZxTs91TLR3oynTFSKEsYP",
  "key14": "4kZB28AzkEYP1TMktpiamAoiXtc7atB1L4Trf2brvXZebkw1sDg36vWof4u48WoPnxniErSZNvabNwPRboXBNbmP",
  "key15": "3fGUXG33eVsaXtNA5uThYEuUpUvYimPWcSjWqyhm1mCkcKcME2gznjjSgrYzym25vAquv2r3fLirb6YN5vBBZQEh",
  "key16": "2K3mMNEB2L5RwEP4Rn6vNdcHiHy2B2cfuEzGcqWLSYzQxoLNz2CPF5vUmm3gY8dmv9GdsuzXbLNBsyNKGEF8aDjL",
  "key17": "4UMmNpSckdqYkzDEB9NumCeUhsv7qPNG6W1RnNJVSqp3Vxu53bYRzLKBVQERLJLpXQDgfeoEgfaRHMmgVxGMi3aW",
  "key18": "3AFjH7vXPWYBvNMJPyaitJKP5twkvmcjFhjpAg214pWUm1ZLMr4K2WQBJ66EZLrwJXGpifYeDjnFXiTyzqBdC243",
  "key19": "z9WdytLb8hpPyt4MxuvXASbFhBRbeaA6grpD6Npgn7dtjK7rMgj9LzYfw5HFU7cTKrdFBPH9x6aQ3WbBUYQF95G",
  "key20": "5L2wawZNRrXc4c9kXfCxTpK1fmCAcGpSngKa9f8xAFWPkiMg7YA1ux3fmWwHJ2mLoSpqckss5Ge7tnpTr5Y7h8QH",
  "key21": "2hb5ahywezHJqRHaJe7ULmq37wKoH1K8iZ6Pk24LHoJpMQwUnkYrxr61dHeD9nGJ9ETmdSE518uWvYAWT6DoNY95",
  "key22": "4j1NqJYmJPWecwTZEeYyr8BPriZABCtUPrYma7EdUJys941u2kDbT5VmSEU8j6EiB4ZsCFMgAETjr9ywYwCQGbZr",
  "key23": "3kjsnfjJZNc9Z3bMxVKFMi55NfhQscka9k21264hbBfqMmhAXsFah9qhio15jjMuwn1cL9WtNZKiZUnFHqznrFQ2",
  "key24": "5e4Nbgx3WVAuDiPwSutDyS9U5mmhpJL6ZSkqcXT1ngKv4TbQVoh7PcV4sKdpYpeeBgQis9P2oDt58dyH9B2KxQ3f",
  "key25": "kDRdYL9Qeoke31oxKx7evWhuX9eGpBma2FKYbRwxWuqFAiQYvfwRYDgcEyKRVD5kkXjNhAaSrU1Fk7JcGk5cbHZ",
  "key26": "3iWucqQAUfYSJiHdUvxkym9eswfarLYxQkjrQVeRDpLFFrTvbrpAKqJjoRixnhKRvuMxy5rR4wHRa5hrDfeuTX5j",
  "key27": "3rU8iXMgCar2UX6ZRgJAMPsU2BcNMnxYVHQPpnnMiJLZK7cb3wspL6dZjKQ2fAHPcNJNHECQmkyEmVPuPcvunXNo",
  "key28": "3YQyJkfZeDdbWtf7yonPXRH7DNsGPUpWYxfjRPrK45xGY9AaKcUQ91bEc3f2Y9RxETag5hRnBCj4yXS3zohN5K6x",
  "key29": "5weafksVFhHomzzDZ8NRJA9xssuFUpRmHwDcRAWdK44oechV9RGQLLB4jvwBmQp5ChHshXhpLvCr2ZUp3m8S7MeR",
  "key30": "3D4nXi9HGHPDW1QZz3M6U3smHo5kitNgdVkShFhAdm21c2AKBmAJMjWXinsL7hfZciFf87QPALWiWDzmiom4Maqf",
  "key31": "3rSw5yQbrRQd1d9Tk41HNo4EpPjsFa8zcBMfjFuFXBjgjmAAiUvQgVzZyMzWZJUNZpHRpuM2HLFcfyhvaR5ucAbT",
  "key32": "2t9gHsME7xZvagbE3EN7GKvKLMNDCBFAi9a98V5iSum9UUR9R2McJQvoq8rNFPchoGfpB7L5znKrAxKyQt7tRXUu",
  "key33": "nTtCWfLZaRccQ2WrNxuNXFgyCej1FQCEetY4AfANc1tZhefRr8CGspGjUhUTpnbv7SnTkYFfDhymQUyKysirScx"
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
