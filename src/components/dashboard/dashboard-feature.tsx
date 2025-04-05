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
    "3zcQ9cNJAL7hCevVP6jfFPbQbS5zSXBT7WycpzKUVL7DM2nKBNg6NmyzEamvjVGnJQ8cPoNYYvKFKRyof9JbmmN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRgR1PuvcR1ZdeWNSUCApoSzaRtQ1WqsWKS4CYCjsSntzf7kv9wPGfhCyxiY8byEDpeC7PEMozpfrqZsa2Nm9Lx",
  "key1": "5gmgYWjPBtMkYXMrLKaECNuUeTAtUR9QrL9spcT9PzXQUaDDjXaHmHhoQcHoXsu76nbv515Q9bL18ZzVKzLeYXPp",
  "key2": "42UevMCRwwVtMJytQx7uEmbBHx3UMV7Wz92NazgcsbnaU2NqDoLHQtEEaRGEMZkgwTLe2tY9oQGbSx2XbgEgv9Vx",
  "key3": "3aDjArGAmko5CRZgnnpLdXUoaU8NSDybPpMk3fqVqrnjKkacUKa2jS89UXGeQNjRobqxRM13Yp8kvGNu3SKBdfPC",
  "key4": "3Zb7eoebB2ubn8DsCnhkEBmNTNBvYSxGJjEsuDJS4BmescVhicCR8qNPKtFBK72hKGybNrEprTD3NpKiwPzCKnLS",
  "key5": "4seXXPKw1vRi1rmGMeWpMJXkK4WVdRdbisgopZuupbzuYg8dAoRmuC92GemToLHsoErAcEuj5uvjWwwYTBjepAgZ",
  "key6": "4sT4rQirbZCEWQWAvotRwRWEkhHBgkCYz86qBXbG1S6RZw3rgCQ6SRuNhdC7r9bvcaU9trvyZq2XBK8QpwS1AJto",
  "key7": "3CQc85NrCWMSB6Qha2x9YPNmGHtiZ1voQPakW6N1Eb5B7WzigSStQqzkcBpGJkBou9mUHaWLyWf9QwyvYuaUA8n5",
  "key8": "54k7K5TtB3v4yse5YAy4A28LLx8iidZBbX5saSHjnPiYv7VXVak6qGePNJn9r3tcPPF8V9LKtUgWRSkVRrNyMuvM",
  "key9": "4TLfL9HJ4R2YWNKn1qR3AKtpce3QujSnZLNthaamGd1NTnV3x725JYn2rroaUz1z9d6AeRwZsz3X85TLMZtpJUY7",
  "key10": "2JtRK6rxvrsn7UCNfi9qWyNcKwyde9j77arN6MuUqabBHmDu1Nk6GWuVRb6cBDKqGeDGRAiQv9buFm9PxmtkjVJK",
  "key11": "2Ey7kPD1yHEakuN4Y6DBdPs7VfmZxbPEqPPA8cjdiXbVBB2JxDBrMmxGK8nzTsrKsxkun9MZSbsLvLW1Sp1CbhnZ",
  "key12": "5WFka1mgG9ejL12FeQvKu6Dw54qmRENufKboAKhp8yfuVLK4VbH5NUeYfCUq2Va9atqckHu7R2vhChvvqgY2DmxY",
  "key13": "5J62xtcjX14rozpcCawMJNUiQG3KWmr2aaagWMSXgja1eXmwg1qJpLs5WoApdu1rV7iQ3LsGCtbPy2r3HAfCkSxX",
  "key14": "Tegzq3QnpMjb5PvKARGCewEYwan3ST699L8toh5WE12o4X1uvnxGeX1Neq3HJjCvYcwSwdTij3WndhSW3gXT5Yx",
  "key15": "25Sk8vVfrxvPFw4FTK56GjZvyScEpgksi5VvKKUrabD42rGBueDuXaD6V43RuMHzLUVz4G5s4bbFTCqD21oQv88e",
  "key16": "ww6LnjpNuTUUa6XCSQfW3xd9AekL88z4oZvHzyq5xxh2DkiwC2RQgkWtsQM7quJL7w28ozh2wBaJEZiM6cducw7",
  "key17": "62NBknckn9UtVLrv5A65QPKPTrivDJTwYJt7pTKdDm2gEynwpdzurBqwsmSHi9aaXmFJNG34h3q7DWFMSi5xudCs",
  "key18": "48iRndZ1ecR5Fv3brMsEHSAkTXnai9VYViE5iDZG59qPuWU26qaHpXjrrcXr1yASaSQH68g7mJA8SKZjYK5kw1U7",
  "key19": "ZfGh4uBRFKi3uGjX592gRG7eMuz8ydLjxpZFvdvixiSyzyaxCwBfB3tAbHL7GhQYkoAjgLnqrEbAYYMFL7Ucewm",
  "key20": "3ejmt4ujWYdzaUqfJuquRQMgzTc9vszecvcsnshzL5x7riVK3YrZF3KU5jLmj84rMMpXVosXav4PWxFAV5yx5bke",
  "key21": "62ut9bLqDgPCxVMaj86fccqMQF8RYXCuojdGSu7PoLD2HS2NPa6AkC4SJbJCEVdWkr3zNCh7wov7nptBr8uCYeuY",
  "key22": "TkEM3jPNwMt8zThNMUTDysaw76Q6zPMoTonWXdFRhGoAp6GJNVcAqg8HT5RAqt6nwtZbGJYwJf9DFMQ3MXzuWe9",
  "key23": "4T6g15uGGGwRCzNvHv1dgu4FCTyexQhJrZ6f4idgxqYiBZHJko6Sr6WKhRh8LGfFhxhwtHbubFnnafM6PRTnKJpL",
  "key24": "5kCjY6tBFc2hjQJ1uZfQ3uCmzrwzbWLMuX9Bng2v2woQhNUuiEQy3ym1y44VDuigLqBL4WZMpo9CdQZiTGxhoDDd",
  "key25": "Mm3KJ1uoMTxmEdgzELntVUx5JzDM3cYkjVaG8YhkbK8UBtajWTyXriBqrqoEzR4VFyGL5x8qFZTvMBhNZPBLqCc",
  "key26": "5miWEDvCJ1MGfSBypR8PvywyW9MaALXwuoiRtMqCeMwjz9Fzt5NWbTTKBx4bsE3NypQEm3NP3Z97L6n6GUDHcmQp",
  "key27": "57HS2P2QyPxbQoqiC9iBo2FKP927SFRuiesfku987nmd5N6C7j9GzTgkBJbCs8AwfPwJSGs2epm7QKsqBvBx63Jb",
  "key28": "XpSuYJaPX9jEdoo2LYER4CuUv3bxnNuin1QwDBgL5xXyR4biDeU8yc8myWvVAoZJpwo2qoDS8CAUGCF9UWFha8k",
  "key29": "2FRPxPoiqBGwuEXWa9R6iYmTvDxbz9SfX3dYvmLeDmh1pNWJ91UzyLAye7KKUGVaihvuw47Z4CzewDtL5XswrTbB",
  "key30": "gyfQQ1XAQDSy8SQkMkd4bpqqDGcmD6WyzxjowMkPHbLh4YT5g8jz25vtB2hSxNrBPR8emREzWZBjwqzWtDWeKq9",
  "key31": "2PsyKoSkHm2nYaX2Q3k7qkBTX1tN8dWnjrPSwjWgFsXTJtsDVRcUXwCvzenEA2YhoCxaxEAYVDE9LqtpKAB7iSW9",
  "key32": "oJdQDDUH3gshQ8AvjxSYX4q6tWeNVzaFxoPawZzPGrcYJNk3V4rXArDYD5CnUB6M4wo7cSWSs54EZUPXfb7JmKt"
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
