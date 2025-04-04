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
    "4WGL3M5p1z8XnzCYgg7XpBdDKaNeSQuVBHKwKfrUfmtd6MaN4kR8uzz8myCrqgKR7T1nHTLE5WL5cM9JhtKXiLmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8MVhatCNr9oANohfc1NENbaiguzvHc1iBgCdxTp7sDhnJKtxWsVkfFArCHtoiaoDo5idsuVqMt3kGRxe4mL4BT",
  "key1": "22ad8i8zgjs1ZAKjbBn7pSEgg2L4862VVAeVbLewUMmhQe92kECbXxnKz52sqpQpz9PP9gEkjqLJCPc3Z22Vg7JR",
  "key2": "3dW7kC2kKi5DYE4Jzya9uYT3cxK7gEegDTkxbfN9645ibDmWLQgtS41Zurjj5VKggDVgur7q62VfYc7UMWktB9gv",
  "key3": "5onPgzEohU2gqzaBoG49EkxiUrYidP8JeVjqVcgjM6JTkhEFxxeBXQWANrt3S4xmhFoLxWUfdTgKNHNaHHv5Jigv",
  "key4": "2tKXGcchT5LixLJoXCtUXoggKqAxkZ5M4u1efXbDpz7zbdfx2DEU6boEp1R184HC1xYCB4rh8A3m7drJkvafTXgW",
  "key5": "mAucFatD1BJ2jDw3HztUAgrnfeDqs8XNEeRkAa2myfstgXECbvD6RABVYXTAECijqXpHjEhyZzfjmDo5qokLxNU",
  "key6": "3RUP1pUG8m3mkK2QaX2mnTBnBwYeefZtzrhG8o7PiSXyRBSeAys9Dw5V6ZpGmqc7Y2yDYwsSH5AamYUUNJMpm2rB",
  "key7": "2ySoXQ67pUQr9rF8hBDE9a9QBNM11xKcVwqvy5vUBL5tsECXT2Rve1wPztUqnYwaCL3aj6fAcx5ceMv7hUtR64a3",
  "key8": "3jkmthorFgUtYbJk3ge23qGFBC6fk4nouaz3Nb36i1zu2r8oQjH5wXH4VTdZFXawzVm713D3nmoisgWKqSk6kQNz",
  "key9": "3amVFeK8jYZdunMLTTtarGSgaK6kpCAbPHV4EGegwZu7JCwBzZ5ZgUQmpvQJzwUXYUdHTjgcWTY4jPRtdsXFfyc8",
  "key10": "4Wu391nkynX31YkX27DgU5129F3ew8VZvxjNS4AFk8jvQXf4CxDisz4cwyZRCRA5ddqG9PgxpvZAjwLL1Jxy7UiS",
  "key11": "2TTgzQWc3CfDgB6c9rYVxeNeNQqueznk9Aks872W7YFJuHjqBHtPk6narkbPsHvtzk95e67gusJLSHcWsTrc46Ng",
  "key12": "67bxxaDrr8q6U6AEZZbSE2GceMzPppQM5Sjqos5NFBjZHZeS8GsYZ167Jt3zMnWCadcy13BtnsExYFmka9Dq2wWP",
  "key13": "5dgkbLK1uN9BzizgGtLVjuxEv9gr8ea5VbqM7kn2pJC1tpPLmaq85PBxfAP2WuzK8fVRRQ9Y9DVnQeHhY5WE6TFa",
  "key14": "5nhvywhQawrFBLGUtkW2KhSXDmMxqSHTQuH3xYcKHKZACYERn3FSFW7wDdejMBh71wfSdtK1imffmyBUf39JiUUZ",
  "key15": "4RmgfJ96JYu7vFJWAvBTx4Gu631RQHSUSRR89DJ9kg7pxys2dVNM2LNyXJo1G3pXcPNmFxQAD2wwyH39efT7GLAL",
  "key16": "tcSweLw1w4dV1SuLwrxo6BJn1yTMSQBY3N3JqunhaxN89Nns8t8AHSZD9cfeUMvxn1kHVQUoUFiJ4N59z8Wgbgv",
  "key17": "37zQAHmAtLrL3yVRy2BJVkjQj29eaX5WgFRKCkPozEgiTyksRHBEfHsGuUXXT6y3wnYNQCvLCTyxJdfamXZAASjW",
  "key18": "34Bw6cZ88y5diiTd6TcmXHoXQCvDgYBniB1MaU6FXawWChNJppyEdteUDHp1pR2JfH1LHu3LfN2fiMdfGRZNwjRV",
  "key19": "4b9ArQcjobFFG7PtCMMUc3rH7AhcuLckD1gEsV2qYLtHA3WFXTaJqU6pLP6HDVc8gHZpDPbrePG71jePUnZg1R5x",
  "key20": "5CYJq6WKQuBk1h9CTDALxTguqUis7NsJGduEgrSCDFrMUC1hKN5J2CijkyM1mDfm3kLcjvNqwY8FSTTiqwjJs5go",
  "key21": "23s6cujoSfFw5sAzpQcmnMu7kZdfKnHk5MnZMjZgUJqUuDj7mAuTZ5qEpPDP9X43NsubCRDjRs6uFG9LMiTZ67Mz",
  "key22": "3vsQ88JZi6HHgKU2ogzbEMPYeX2Akt3XfEJfYytLEfa6GVRQmbVNfzNRWvufDQC6KdhnN6o8mnk2DZJgxaZZgQZm",
  "key23": "By7YfK5tMVJt8ubg4Q6q7sm2frcTVkhpKAetmsifvcuHWfqz5AqQp3mFbvaiDndPJnTBaGeHqd9stFko4sVz99Y",
  "key24": "5MjWZt5L4DoAvZzwzdg4aV4X4bgsHfycRydNtWccser5pLkbhzwkqPM1b5RBdnT9V7MbxR6Mdc3fiW5tmarGkGfd",
  "key25": "5jUuaqs1ybj3YFfjH5G9Lm9uiGbequrC7Pm7fkNEZz3UV735pXzy6Umpfd6PD8CB2PCFu1emaq68jtPhuMbTqXWW",
  "key26": "2oS25JQvvKPRiGmBUc5Un7EfG2jdGiu5Xtt2ZCvXNcmFePEBJrjzNKuaLNX1PZwEAtoU6iE6aibDe4US8X5TPJad",
  "key27": "5V34oKoFKLKsvX9AyBeCXustJp9eWkbkLQMfWgfx5a1pKhNhDfXD5u6tcutq5az4cSpA4ZSgVW24pi8xSbVhhkDy",
  "key28": "2X2xgXSQD7SqTfKdwbLsJYaP9pXZk5nx8BKSyrzYoCD3FJX8mgN38gsodrMHr5iiTtksrcmjY9QEe4Doz9JKctfN",
  "key29": "5NuYxDrM63X8eYVMWrMs93Cu4t9ni7KsazhsBQDigCySEtsTPLdRXS6jGJmjfcYj8gkvnrg6SYspJ6GrCriDir9b"
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
