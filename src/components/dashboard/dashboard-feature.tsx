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
    "ub5LLobJEF1afC3MAqSTd1AgK2L23FegT8JrqurqYX4dtpVzGYraDj7xKgu7DGJ354zv7ykiAU5hednNRKwWmwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54F6frjU9X7qR6HrVE9xLZiLM194RsoPSkvBzCTSmq4B6UMepiPouzjq4kKsgCBQNYb276Zu6a65wp1jMYfj5CB",
  "key1": "59ov7DvJCpYqVoaqJhe8mobQfb3pTnZHNQtkVGEvmC51ULU7jmcHAPcK8PdZT9hdompDcbD6pwKPiJztvBfaKzsG",
  "key2": "26mvGoa5s3rcGzmKPLj45jFVYQh7Ss2SzMSaNiL3w9RKDfXhLU6qKh1zdRLSPmYBTuoegbbho7GTtreZMJxLWzbp",
  "key3": "5zhgNT4emsEuqjzGqqnk9Lcr4pTp7NT3ELZdVmwNTg4xXBRhBtiFztLt7SCy1XHptchH92jwFm361CykuXds89hy",
  "key4": "3Br5YMds4QYSBG46CqHE61r9VDx4otvX7VS6eaocnWr3HtDo8TBUfQVRcbbdKUAg59NiMTZgSm9cBEPyV2JmB19p",
  "key5": "43mDwsrMVBSu5wZ2uMszg7GoFXrxr8SLGPJ5rhdQBSea1vZDbxQPucXvpq8KpKC15TfJNHYPHRSNuHWhwPXerGjd",
  "key6": "4zQUhBasc8FuvXpgy5mAgriLGMooG8veo4N5zv1yPJ6SqhX6ifasFoif3icWgPDPxJqMXxpDWE2MTDJ7DuPyQzBb",
  "key7": "h77LEx2Dk3X1st3eUbCDKRXcNxo7JM4QAGpYKALV7JezY8nACr38k7xvRsDeG8zJxUpniRtD6peqBR82Eeg73Hq",
  "key8": "5Cpqhuw8LxM4NXSCs5sbzYJV2AShM6aK9zmtUSQUAHg8Tt9hd2LW2CJrs4PdH89cFEyos36f3CAqR9FN3qD5X1Z2",
  "key9": "3nYixnf4C8FCZrGzDgRE5ERXsbYUd62kyyMG1XETWh8hNrd2wT8ZyKwyGYWimu2pNYQxNjWDLWoGvEcEagwmDpam",
  "key10": "3PEUkovAurYgGCHkLBqwUCjVU59zuumoW7A4kjXbsphUaEGEfcTSjvSdFkad4x2HmAdhhyKcD7HpUF63Sj2tjQY8",
  "key11": "5txFxybr75QWJ8RLyvxngFEEPhXcguwmsZjCyMEDwXKHh9qj5vhZFnF3LSQp41DzxYgu8BUtR8daD9X1kLWZTf3V",
  "key12": "26DRz8J25pjsX8MRTHbgLrYos444XtwfkL8wSxht37rWwgM5pCxhMRz7M3JY1KvPXZzRsfBGENG4GPNmoezad2vm",
  "key13": "53fKjPBwtC86Hm3E8YVecWp65Rfe42Gy69NE5SN3DacMb8QfxwujAw78QKDmoVsjeTbobhAmJdUpU5cEo57Z8uiy",
  "key14": "qAuUQbR8UzkrVbtnmdSKxX1h7NDjFzY5VrJy9uHLechd4P1Z4cVvHFpMaiowSCELVygZZMrubkrV53hsU6aCECr",
  "key15": "56FrZWBBkiS1f7XGxs4oiuT7PKmNwrWpKvhjoid8f4rnLVfmYFXHJ7oxR46FbtK7MLj8ELuU3uCfFLXBHvrTUyCK",
  "key16": "5xFPp4GfrKXqDZNKhfjR9Tu8XoLfayGCpwE4b7T4c3NhxrA43H2T8htThadME5HSwKSJirLdxGPtRzAeQ9Qe2DWY",
  "key17": "3wRCAAid1UaX2xgRiRnTpCNXSKef73hR6LHErACgnkF5RaRmefR9r5uuJg3Y4F1dMTYTRTwALen9LEpLZaLYQBFU",
  "key18": "3kTvYt1zHQjSj4qiZkuCfB43diTQkP3CuW2XCWyuP2bw16jm1GBqnrg29HnpVXv8M4NuR7QzyiN75bHP9DKgMjdF",
  "key19": "G7p5WLnRRSwRi2jbbYij8X6y75XGoxnZsNAU8tJVbrp9iM2RyKpiSsw5tJXoUqBdj3svdajWAjMUDqqMhEPxBFX",
  "key20": "3HEMXn7oqPemkjcLk5ZhA8RePDRSDjeYwvn3qu96G1vumsXQbD16JT9Smm7CuuTZvN3GtuR4Sh8XLMdmCg4k6Koz",
  "key21": "4nkSFCD38uJyRck62AJVZrcS5poSHnmoDh8vhuCyqUqXMXq1hSW5jxTQNxAgkRrmeoXJAQ9FiAdgPnBZX4VBWLek",
  "key22": "4YEu5mdYtHJnMvQGM7FPrZJbqEg8LrBNrrSSS1XxY3FiBYeRVK5hq6By7RUwFqMQqiKskeexUhA1hN52Yyqr29y3",
  "key23": "FaFw66a2VGZSnAcbTMNxQAuQVxnF9ktiNvrcRJ4yy7FYjcT5C6CSKm3BB4E99pLP6LRXq5UyU4kXaDpv1ay1RP8",
  "key24": "4wgj4tYjjF9BnW4fFRirzAokqBJhjDhroyCXmKjyQgbE1ApgWUK4ft1yTe6aK4vrh6G9oLiutx3M9SUfRhebSkMp",
  "key25": "55VzycKxu8vtdSj92nR3anZLqAGXArs8YiCEssNihdVXk2k4Su2NXJEB8yFxkS2mqNhWUQC2VpTGQyhgU87Bb9oa",
  "key26": "3djiM8H6rWD5HjRtnHAAfoWBySrhmX7M1WiHrsB1VZH3EesqewkUkBKP78Yyenw2w1NSZPjR96m8sGV7DJbWCNFd",
  "key27": "NoPpH1b52kP69sZFGCsE7Nrx7NgLXciRXt9HhNKZDhPqwD7mqyKoURvCwGne1WNCQA4Ho9odGHXUJYkLw32mhn9",
  "key28": "3wz444KrhKFL2rtZ2QtNuzxVt7XionppEN9EhMWC25ad6CXuimfoAH1NGTrQvvhS1jTzK3Bf8BjWYBxB74uf8dru",
  "key29": "Lm819fb4g9iD1KoaxEjV4nSfr8kPob3kvaTh2rntdrebyDtCL2c366wL2kT9Xa9Jcj8DfWvqMs9TgRM3hhwGok2",
  "key30": "5Gkd1ac1riT1fP8UYk1wr6e56YUGAw5jYdjcGhct4KdybFcPsrHv7Msn7YC7QRnWgXXAQHCJZC4m3mAH83uwVRf7",
  "key31": "2s1XJeTZVWzNFC6EwdmmHHCCYNxMBKjXS7y1dJbEebX76qZdj9NgA8X9ar2fGUhFC1FDF5oF4Vvz4rpC1MywQNPf",
  "key32": "2swKijie62VqcygU51HAqpNeRYAdjf8Dt3EFYGo9QSWq5uBR378RBZjZC8y89qi66Y297J64mpaCukgVQyokXv4a",
  "key33": "yPaqw2EkoFAncHyM5nC1VxWzrbT4m4qpjUVCe2CeyZ74YtSpt7rqc2omusHQM6juoZbHSj9zQNekpsve6brM1Ly",
  "key34": "58pEzwxYLNnJ2iYrWrjmACJMYqC915AXAymB81N9o3iCDWNZMvTsodyuNZJ3ebnRJyTZb9WCUjL5A7aLudiC84LE",
  "key35": "2JdVauoTTKgJgR1VEyi5ugcGfczCp2VmpmAVjan1jJquUoHxWAYcGELsCng82siN6kK5AJgr6EVkwVGmTycFMAvy",
  "key36": "43jYQd1iEVLhFtnWkiwWGBptQgzfMZisGsXxu4jFpa8sfyGnLsRnGiWNT4NMXt5JhHtffoQfxtdFt2xpExuqYDvt"
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
