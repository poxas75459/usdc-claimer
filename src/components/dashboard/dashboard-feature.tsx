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
    "wjAVCa8VLrA4HrRMu3ZdFipc89x8XneUi6YnPDcgyUAEXKG8cvGxidusaPhCZCW4qs8zjtVoRmcMETN67ySV24L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNDmZ24UX8KfFFj5M8BLQ1bPRa6hEGKiPZ3DbWz9zCUgDJxpuDq8ak7f4jk6286GsZD8DmBMtgVGAWEfBQ1peVX",
  "key1": "3GCbLqLDA3gxhXn4tqYsHFn3r4nbBd7WBiqYqwyAQQxqW1Cc71LTXvFUWaiLoF33tzBfuypc1WctyJGjfL34Hxad",
  "key2": "5J2ucnXVWy85RzKat4bEN1AVNsM3No3AgR5bAUjHT9v9kuDBQ4yG23SfgZCcV9ZPUTPn6FtzihR5XweR8EddtpmL",
  "key3": "3UkRe5oLZPD48v7tPjjNK4V5npTXh91TEg11kcG1RvbYbVRjyANmSaWNDRHMA4HUL1s7CeiXPFGKAaQGq8VxwDsJ",
  "key4": "39jYaXChjVh7ZZwdPuBZ4HmseopfJS1DYMEP4sQBWwVZNisKmaUqwpKQK96J9oFQty1mAx8QrG83bJpoTGtin3WS",
  "key5": "2sW4CNmbJpaJCscPQDiDxbA217TUdL1nZD2DnJWmzM56fdwvpooH8fzJ776NM4zc8Qv4XikebfPXicLUc2pxee9X",
  "key6": "375HyyhRBHwGoenjDvmoHQ7YvKxPaC8FHzaCrnN2DxhKHBqMfG4wkDAcvvv3fG16WTkDWWbmATQZaGeQgCaG8Eps",
  "key7": "CTAJwqRC1Fg3VehsgfFTJuou2DwB8vaE7GfH2VPc4oCnwUkjmFUFr3EgHSZeQiN9SBxJRpNCGmAn6N21zwyKU8A",
  "key8": "3xKW6RnKrxMfUPb7JbSSYesPYmg9GxDcK7mc7JiMEb3KgJT6P88rbDAYnqGZPu6kwLNQsexuQZAcxrFvmqCUb9mg",
  "key9": "RWG7TsxUSb56uZfp2VDZxGodEXrS8YjwNsuKnmnfne4LYffvuWTV5mGUvpMLPTS89bYCnNf9yppuHYjCbgng16b",
  "key10": "XCWdLSdhETfWphLwKcwWpNjCAFk82PbQf2Sb87cjzgHa4eK2vD5gSAVMc93ZHNAjHCaTKmoMThM6sng1nvVQm8J",
  "key11": "5UZC73sqhE5LNUWb256WCwvskxUy9GB3bHcYq3ihQfYBUjpoeF2HkPZZ9wfUu7xKfX7m9d5uEmQurDSZBLUqfVvk",
  "key12": "219aRNc6hKtai7dmMXHqGHdpt748zT8LBwiH3CfczxAn15imffd3hqQfrKnmdhUwX8d26F1bMj1xpcFPyGLyy3RH",
  "key13": "5XRfFC8vkqj4ojJWRHBrxrPNayMZC7JitAUmExD3y88AhjiYWWLNrirTuuemnxhnpDR9icmTPbb2QJRLVRx6vSnr",
  "key14": "64jM4GEn7dnhyvv6hBzaCB2aeKtJSJfg5Eh2ijbtShRJQ1AxphevTecQPCPWAuGtdyHyeD5x41A6ZDR6FgTMREJG",
  "key15": "2KhsPbPjxu58tD3krt2oYbcoGQSw4eb8xUi3jR8ZXbZNFrNhEBidrCdVz4eRxgfarYnQ81m4HoSyiYRgTVEkfYKG",
  "key16": "5tLLxBjD1zpGHyP2G41KKNM9LFTBrMVB4zvJSZQLvTENoTHBYkWRoNBgbaDckimAyUWBF7SGkmPMGXXNq2upfWLJ",
  "key17": "3TAJi4cp9A2UbqiwGvNpoqMAQRuSqtJiNsg2dkR1sMFfiYxPY2vmGMPkL2dr1WKk5RC2Ljs2QJ49zQrNDVKQcijf",
  "key18": "3cxTdoiipF9r6b9BdQdTfayr4UjufgodNPxXxXLteM2BAukfinM6yr5Fak74wFrLnsqvhbyyVXByMo7PF2ZKK4au",
  "key19": "67RAzMvHnrX1VodyvGzWF9p4ffMs2vorysytJTNX7EcoWdRU5eymv56hpgPpDvSftHiTSfMzGBWFp3cn3xPpxY3b",
  "key20": "2u5D6jG1ihYBD9tNZnDfy7GXxzeAYJR6wzoePMHYX8TyNzbnv5VCC1jwbH9gVFs8daqdH2BgioEgNce9DuHdC9TY",
  "key21": "4pPMasJULyQ8bhLNNeFKKTTzZoVFhJ2hdeGkZz9F5gtkH7gppKaEosHCa75dfLohA3PBarEaTwU23hay1UYqjk8z",
  "key22": "KKoLEmRLCNGVPRSyp5KQTNnVT9wvcgVLz2EqssUjvmMym8r5ydwJxmEUhF3Zp4mjzY7wMrTJ7QLP5DnHk6hY3ge",
  "key23": "3bwDXD1SNJWXepSY6GzTLBGsj5HSNdrkGmYVfxGg1P4ZEFKgbNdfQjMWrAF7FPqTKcehJzVuwLLW9nYuj5Gbe4M9",
  "key24": "b1BzEAT4bZroD1RFvtNSgT8JJotUC2atnqnoays46fQSMxdikTEXZaDqjUJ1FqN4pnCw6MMMfGze1iGGcLLH6v7",
  "key25": "32rbVXF7KKb4F2z4mx3gPeKZgwogfPmpKQCCESwUSBJEioFge6kYc1QdjQxtxxLYtn4mEEh7rqW2WeYo8TFYzZa5",
  "key26": "3X5DhNUSzF6VTgRi15vEww48wJfMpLk9DysL8dd72Z7Hb4wtv4rNdCXzbXoxe27oZnXS7EGswEQFjPh5tQ5v2PbK",
  "key27": "5zLnWeTiq6kR2sH9BGUXczZMzPAqiKnhGxvgVzRb3aSmfRiWvi8EAepm4kpg8zcea6VzY3QqKMCeqAKgdwRRqZfi"
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
