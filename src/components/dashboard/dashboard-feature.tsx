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
    "AVXMvxxJGeFCDKXb7J6bpRjqZTTBuJztDAs2gZhYv15AkAmTwCLwQuiU2YxntymWxvPByqSePVEAmKkypC2QJ6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRPsvzyz6wipx6V1oLpwUJAtenjCfRtFvisijHZbVNdaoEedh4XFSw1uxgzSgioUCQjSkbL5aEG51D72zLEgAAY",
  "key1": "4CcKUPVuu8etu3j59EtZbwYeaG6zDmgvQRhsTFRUY1DiYuK79sWXdtMqbpkkPyzquLVSJE5n8Rrfy34NppAZnccP",
  "key2": "dqHB2H958paPAAJXNaYwuB8q8ZDKZ6Y97xSqANEVoinHgH44AzPA8PfUE4Qz4deurNwasAtHYehsyi5FjQxWJwE",
  "key3": "4PLoTiYQAWHMX28pLacVhFhmFEF8FTknoQmpFy4G5fgiPw9r2uakUEJbvzqMyZHHdMqRtQ1Hfjf65Xzo8jE1Vsw3",
  "key4": "4ZgVddzorZ3bCcE8Cih73fxbet2brHPqbu224VHib4xhcWkBRejbu6GzZFvcdDNVSkonKCJEvVdYkTG26ZeNoorP",
  "key5": "4S3WDBe47gXo1nkCj1jHrPLZZWrebxishKxK7chVm1EipTK8uHZPxhsFfcNoaJQ13bRsVQ7guFi2653eWQcWYztb",
  "key6": "4LwHYgdQ7PuQr7mH24hue2ZPBm5BYwxBgWzz55zxTpRs3gXYTRFVzrgGTj6sWrGuSYHrFkvJiFFF7e29Ko6LtTUt",
  "key7": "55n3tALVyPKenQWNhcY9MqgQ4fiduLpcQoLtsvus6gCYCHY7eZ9jPPP5chHJC26kk3YgiwRWcc91ynbK4VRDjCyT",
  "key8": "3CNTbKSLZGoKembUT4YS8jpsP7MyhJocujXzFgDv4h33bECxLT3gNgZgGnGrz17TeTnmo3qhK9HLEcQXbpNd9CLV",
  "key9": "31cJphJXs2AsAtMzZVsVvHFZbQ2ZtnWmRM8RFEz6AQTcqsniMoZJv9iARHqy3KqgasXWssFm8m8hfsVcxpGV18yh",
  "key10": "2aCgxrsGPBxBfYTDLKE2DvP1whdJXKwS26WBhBs1Ck1tZdrHzbyURX8fNHMMYpSy59LE58MGx54wpDRrg9mBU46W",
  "key11": "2f1TYDGDCCHCibETrJP5BCqFEX7qw9WZ4w4GP5ryNt5Ct5GvCCoQiXkkobDujRoEnmrwQEYnQuwSgLScdeMnekbL",
  "key12": "4sdNQcaP4MfA5SHWMcse2hXNix5kFRaa4hLPaxct5FgqTnPyaibxzB16gwuay7SBeA4xjnHotZJLMWDT8FQTuRfd",
  "key13": "2ij4qwxkLdZcuYgSTo7MSrjtLZ9afLUGW1xrfFrs4Edu7JbVhtKY5gN4J4nPcRKoLWTzWnekaCNq8HaF9Vf4rSJM",
  "key14": "29JHzrxBQJiZRvkAQPEAN6wyorH4RP98ZrujTmprhw9n6S4txYfinTfU9tHGE84Kp9625YSGEf2F7h46a9E45SEX",
  "key15": "EDPRuFePebyEQxUoNKxSUSmcGFS7KQqw75yFpy8GkfySotCTWGvqyEn2TQ5rVhbz1WF8EEb7S9pTgzXb3w85oy5",
  "key16": "5pGPpcDw7dGZVfzt77vygpJaiwuDA2J11vB65Dm3p6dBUX6MooWmE2bDFWriocK9Drs3EZJa6y9y9Y36MAb9QJ88",
  "key17": "5g1931LqJbJPZsQYxoAF25DfnkVTRK6xZVyYynBrpyXwDYJarZFrykBhzYwai9yig5GJkhBuBmesruiEEMWJWwEY",
  "key18": "5UsYjdEhdQXrUcKQNmDCE58P8U8mAdMdhvGdFKu5n3gKm84Fij2V61RAdmNaSpUDpLAn8CnhDX6Wk9XLjyD4KD1a",
  "key19": "5PC7CAZLhTdjK6SXD1eXT9s79qZPdcpukrKBa3xMYSHMDL9TAJ1jXCvokosvyJje65VraRgg9sqPZ891hgYZMitq",
  "key20": "3MKCM92z2bkaAeqF2EZg8nmnp3YQRzFkedjnQTP63CrTiWu1URDTpFKHwErp51UBZ7MZa4FEUAwJ3QNqsB28CbH4",
  "key21": "3FW1KvRq58woeXR9Gv9jzLtuy6oTWLL2Zv3bzYBqJsbrz1Y7W3Qq5uyVjMjvjWowYfPbLx3w2mc7scF2Rqh14uZs",
  "key22": "XbnLccXppS7gsgCQtK4M5H1tyjB8katVqctnJsrhD5x8JBjtoiXSSx9evMYBDgmfDeaJT6fwza8FS27BJfP9BmE",
  "key23": "4KoMjjXHkCMwggqGufLJeoDPChyu9MqH9TxG95oshsxeaLn73oVmxdUPzdqoRLUViqs7JsFbsJ7L1LKeDo8Ho2L",
  "key24": "3BQYA59xWXoSx7Bk7R7LBxNw7qaiyx2Dvw945gDoZ7fuytWr3BxaJFBSbyvg22SVoBNQ3RSg2Xw74nq3QQR9EbxM",
  "key25": "7XzZqBxryF9YEGQwHrHmNtBJtv8XPXBCkKw2oUaGAJQiUbJXRbChprohzefZnqwN3Zd3bukspN8vbMBUg5Bgemv",
  "key26": "4Dm2crFwUsnCguSjF6z7LdMSZNpJPVg9ucioq8X31QWxpYEdYbNbGmmKPVh92ap4E7G1qC2xFVTeiBpgAeGF2q3E",
  "key27": "gUREVGrMUfEyMzwDJfFMM2N4mdYynbNy9Q43GJqzCiYT7VJ2dEzvb4xpoT8xvSwYnNcgvBimkEyXpBiYs6SWKE4"
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
