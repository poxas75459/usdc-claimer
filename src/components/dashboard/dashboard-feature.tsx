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
    "5oaA16uSYuepsw8kFMbcQ5Nhzvm49aK58pbo7YV6Hk8TCAdf5ShN5vrr3fA6ioL6eMe1xWX27oVFqm3VqaP8hnc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTPnHzD7P9evXX8oB9TKtP2HG6ArZBi4FMCB8Wbqi4U41yNKWhHGFewE22HgMik9hnac8QPxGaCHxAWZPy8XGgK",
  "key1": "3KRwZxrjCn5efk7kcf35uyakyKndJdEQTPMrWip71UzgCFXXf28u4yzH2AYm984Ujnwr3JkqYTF67qoyantPr4Ro",
  "key2": "2UZokdnj2LjyuJHjhXwoZKymyrqFoPHTF3ieYT1o9EGStLKhatTm7YkBxioJ8ZbP2R16HxX2axgdRCZpCQJuQCJm",
  "key3": "3yD6BBrxxJiFmG7aTLgjdoFBG6yR2fJxE9HTpgVDusiZypFj8hmdf9YvFQiZ5awoti88y1trfmqiYJdEEYgb1cst",
  "key4": "4NCfQMkpW6AryqHp8Emz98ikCRCqcqYfwUXBzU33bsFDZrXCWJ7NmXQwPg6Jk47ag9SEacxBNGED2dtX3FYLYYum",
  "key5": "5Vt2URx9NAtXtfEgXAfouccZUyWQAHEuA4oCoECMWm2BhJ18o1AeUkdAyEjwUjk5ya2RtKzPyBScxUX9Ag9qrYPK",
  "key6": "3nW5QsUUhZcqDsUir8euZJKx62n6GCMotNY2AyYEmiQg4Bm51yvndtaDJMVoHW7ts1Q1bk2fHmeksNsGfWaxHvsQ",
  "key7": "2y75HXArPUU8kjVcp4h8MNF6wttfUckg8i2J2iG9tw5nCgtZaDYAnEjC6V3yZXRePdgVUivmnNGiDGmPeQUrN9Sh",
  "key8": "VLVW2UwKbA2zQoK1o4GfocuqsLDvnDkXCZsCLJtRMbCoHQz5BxyqyktX4Bigz7XULzLY5xaA3kAJVtXpwpJuHaJ",
  "key9": "2CsXz5wkQrUzZPKv78WFzxEmheFaD7wGgudM5xVUNkmTZx8ECHy4R8in6trnFGjrP58hie2GrPLp4QiTEXtCgehf",
  "key10": "4NktUVhaUoeCtLyhEKEs7eVSGJTXndLNmFL3vxwNPR6UW5e6qZ2uTGQrN9T5v9ds9gjX2jq2yJ7Qwas9Gsbwj4d7",
  "key11": "4YvDyZ1jNTCzSenAGiMgvqHRKrHf8zE58dEwSqG8Par3s7QP8vZsAdmh8nU45eR1AWPHyJceRYgWZHpQR2Vbiy2R",
  "key12": "B7HHVki1PeZw1N3TuGW7Scv281CQEkhpw86zWCcR6SCL7rtR1qkvwuPCNbMaZaW3w542zvLKnwhighLepBm5fjf",
  "key13": "26emvscxVKTJEHJd59uwBSqmRxDKqfh3MnFDuMJuT9tg9XuBmqYur3BLGM6BpkXcR7FtgEJaogGdpUPVPWSZZ23W",
  "key14": "59aZmLvxX2bff3aXcyAwNTQvEV2FDFu6mp8YMo95LumXWweNG8odsVrynmYSNZgquzFYrzYkcSbadXQZbm17a3zC",
  "key15": "3tKywUQJP6GuzC32U6pMB4VB9aEf73zsihBBKk5NvVXHvV9jXebMLqQL2PdnNufTD8vpw4xWzCP8r614CWNr6HpS",
  "key16": "59KFGwaPyaD4WGkcfY7eqjaTETWg7f9eqiFsN4CGBc4dLUjpcmKkijktZs2c5c4xXzvCCvb7YoMbvq6WPz53TVk1",
  "key17": "29p2yHba8YbopiULrEdhuQGdUoCUDhy3LSgpoanoGCooGqpkhMjqa8stMPH3LNSkVuL9yyg6wSoGwo6BDV5EnbT8",
  "key18": "yUt2L2LGmgpKsBcNnULA3bLszW4iixi7VzVYSdcw9pxER7ivKrGEF1FTLVb6grSz92MzAhvD2TosDLAVYaS4Zt3",
  "key19": "4T8rKMGYc1XrPjhsFPxT8FJr1hdF4MjqFgyerPFTPHDBJC1Sqzg5ArphXVxPXpnMaEWtqL8hqi77XxQSGeSPBcYJ",
  "key20": "4WEBEv8dZvUvLksEoRKbK7vovV2RnfaE2LiX7fxVvarMxGGfEy1G6K8ViKbA9Ak3AeMdpD6JRmDHmj5oV6GqWtT7",
  "key21": "55Z7Y1zDdg4CCmVVEpdfSSk3dPhfvWrU8ogobVXCDd5F5QEAGYA9Xd2mgD5oHf4t79MSy2BW4i4f32MN7AAojfG6",
  "key22": "63yVarSM56UDKNfawFhz6Q9BNnkkufcCsz1ynMbYheZhDtbtZeNK9RAid9wXfLB73xRKTxWh99DVU6MXjV5HMUcc",
  "key23": "2rKvHzWN56PvrThME9msLhUJKLKAM9WStVWdqvejvuZEhFVbcfEwfvG9mXcA6r4yA8xAGgkKsBcnfcwqWDJHG7sb",
  "key24": "3QwGZnVk9iDKCpxzR2NPi1SU1CMCHTNitr14hssZrPhnvCAmZYENR3Zq43oVtevAeGs1a8aaZ6uU8Dw4yMQ4twfG",
  "key25": "29HF8NTxwtN3ngQTQbrBDaZLyYeUUiUj17wRQCZQmAGzQzM9uJgYRCN7jLKNEAaWkQoGqRewpPUm9RJJLhNE5eg3"
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
