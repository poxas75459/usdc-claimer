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
    "5oV3Jxa8j1g38e11NakK85rwkB2Zwo1ytGte9brwXuhmThxajN2mEhsX8nPD44mzQW5gtVr4ssS4TUTbgHzDuG8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvcizJr7ePg3XKg7uwGVWLD2J1X8A4GYXEJAs3hJwjG5Ci7UHQn7UM7RSYQor1sMNSb1DGEEFENMdYgyEL1KcK",
  "key1": "3bCzkKhcEmPRagwHgifFCKNsy7Yezk9R8Lv41iGL4hS53vav3JnbhjjeWsMv349QV972Wr3uhXGPK4u4Kub48tEr",
  "key2": "LDWs5HUzhBDhpivU3AuQmFpreMtLZgbMfsHpHDBrkKdx2oam2xEypsiTHHrUuau37TewGvNEgkkpfJUU18mYfs4",
  "key3": "5FkriH8t9v5BMPAyBVAE4BpHPrc1CGoJ3M4BimFQB1mY6P6ryC7SKDzfb4F2xCpVQdsrb39v5DoDzyRwyrRs4u5K",
  "key4": "4tmeZbuAMndQ52WEgYcrwUcm2bSQB2bHQXgaK98knCHDg6k733vuLtxmLmepGCc2Bfpgpmf9iccembvcCDN5pjWk",
  "key5": "4nnL8ytaVGmcz65Q1VUVTp23sshxrCSd8egn94bhB8te3RHjA3kdHFriXGL8ii4ZXF2jjEad8xfaXLgraep5xQHg",
  "key6": "2sta7DbgKnB3fmr6ZzyGvjWLpZQLjBmBtDn21ougmd6W5A5LSmY3BSYgGKbYhHFAE85BwBZHkyc7K1muTg36Ndeu",
  "key7": "3kDZhfD9xdwGDAhp6o8VgYymKfUwsNkVRKkcMVsT1RxTCEQ5GWpe3cyV4cJkS4Mj41KbTHEXfQem8VHSmiGXC9JG",
  "key8": "5qwpbWeG3v2FcSbkejpCbGgs1C8X523oJhvhteBdySyh39Ro5jzBiXAZFbujriMSTPCH3UnnN6rLuSTydibdbxYs",
  "key9": "5xFyKCPA8jc9RxvHQvC7oe8CT7EJktfgicQYKDwnH7w8zBdgBrebqECXH1c8AB1uHraAN9ADdLDJcFyfzseqmSpT",
  "key10": "4MniLj4Wayuz8fZSbvJ8uJjLY6BfPUuFhf9Qev8x8UTpVwpJKDfRiwzpYHhkk84e3aZTh3BNr5CtjyGcddqtK6cf",
  "key11": "5ihHjLLQTiUHfvu4RQsVbtsiRpUK9yBzbbpN4PkWCsvXSq3vuE19Bu7F4FE3Tf6BfQxWQPuFv7ZCKYfG1hBw2stA",
  "key12": "2JkRx1NFRfZyhKKTrkvvUbGEZMZg4af5qspk9u4fUmy58gGBjW9SjKgAKaM2Ctxj1ZVV8EqyWDNim6r2ZoDUkJ1g",
  "key13": "3VMtXiG3WLpbMpxzPFVXUafTtxtQoBgWRYaziRrtCZmMZ2TSYanHFySyDWfqSJX1SZNHWSMbJrD2aP8gGUJ1Q7vo",
  "key14": "5jX4ZJ5fJjTS23XrkQZiXs9HAt3q34GTYRseMCzdWggniCKSnudodRdtFjHAjVxEn6c82j6rveBLByTUUz5wv3vt",
  "key15": "4NfweT9jz6GGqyUPkrG7YqcJapX9QNnKqVoCqzp437aMwdb1ZvLbkBBrPUojKEmsgDny68ooDSJZ5iBdo4P4QrrP",
  "key16": "3FDJAbWAdUMZUWDNNduos1EiAoomU94HXw8ngRfaFGyNx1yTucs1f9EfpL51SArQLkvKtrdQBUjFFxDG9ymnvXY1",
  "key17": "35kzLta1G4BE4aCpP2HghoLYudTeNwGF4X7vnWAQmTGBMamM3fx4CpWDKAmGSUuXwNbdik3frT79Xat5FgreDieQ",
  "key18": "3mgiBUsdKNGPXbZa7FzoaDVtRfTe33nHDEPfkZtPgaFeEX7ztwzRrWGgkDhfN2ftDqgQGLjAtgkzSFJnTfWuU5tG",
  "key19": "4GzKbsgs3GmjFMcLiBGf51U7cLNJvH6b8Y6NDPgJC8EmotNZufMunRSzL6o9qrP28UJXzKufgX6FZhRG87jJfvgA",
  "key20": "2CmfTyBU5AYJHf5GnBccpEuztuxAoBrTqzMh2YDqFvNXqk8ENeNAGNQHWzyMdESMGv2F6McaWexP2v6xFe8JMbk",
  "key21": "53pEvxtExJ5UtHgHxgTEcmM7Tkb57P9g7qtUSHMKDVE4fJQsdEFqUYcQGNUaCuWFnigsyP1TBfozAzkmKHoU87tT",
  "key22": "3xYT4Xs4vwo46sWTxMcYYWHfix1vGsfQngemNbQEq9ZH2QCws6EMaqvpHKhbgS2S2eYgtaTXYffqVHuPWM7xNFxc",
  "key23": "dvGM5GyKttaLq8eYyJF6HQwxfaHopeSC1pujRmEbaWxJVnUgwrcsNWQsKW4jw3NGkTcvoaYis3a8p4udpRbrhyW",
  "key24": "35nrVB2ea1jVDJQMEXTkeLCPTDZz423kKhXypgefSK4ytaF74wu2YBxot8v92kKRzZUYfqqkbaX22VjTqKA1iYaH"
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
