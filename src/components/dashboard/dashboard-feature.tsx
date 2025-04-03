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
    "3J9YWhYnujYfCx3X8Rrni682Mkb9wUzAZGgXjU7nhHdWCQxvPjRGQ99km5v7Pm9NdQeN4g3fmYszr9CLWSLXvEm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKvWYgyfUerZugXG7F4QrDfUeFSgb6oGEFh6hm3wDqEgTgSRLYippEaEt2U32Ymu1hkrAmCgG9jhMN19qc522Nb",
  "key1": "3MAkao3inVqGpUaRSDu5C6w6DPBitkRqWoVr7YR4KApCMxVMwkUgG3wf3Lk8nPnsEX9mJ7bcDSJPFpfTYc4Hkpbq",
  "key2": "5FcC9gA2Rr6pA3KS7Sv2MGwQxmSbPgcBRdnVZBEHHqzbgXozvSPKSvDnHQucw7oTB2qFdvw6pnDJZEaPtwwuTzZm",
  "key3": "5G9AiPQcGD14b7agsodw6NjLFbPhQurSKQhYkukWbJdonC6ioKwvuRjhMewWRaSUx8rh2npkB5cg3VKq7o68tbpL",
  "key4": "2jxgUJ7DgZvmm2xo5dnQiHGvaAQ7yyDwXppo5r2MQYJkxFdRss8XwguHH5XpKwzwY629vhY2vezGkTzBAKTSq6hu",
  "key5": "3246DonfLKyUzHfhJ3BEsDH4BrUBqyqmBk4BroUEQbFUnBaPtB9Qs9q9SHxjBFWSh9DyG2uzXczicf3BbfH6TM3R",
  "key6": "2rZH1GheDW9UFx5LUL4SrHcDFCh97PbWNp4jGdqc2J164F23UGbq5kgRhA5RRxnXCH2rZMXLoda1qq6QdH4FNryr",
  "key7": "2qQxFtYTiDuT5Kz9cbeb5pAeDUZ8EykMxJns7gZEqd3Rad2wbHiemFgbmD6ucXRuVHXccE4zv6mqwQCTX25bgtyY",
  "key8": "5oY1CxCJNdjoyQGcmnxrnKGY8SGwvJKXz5Pzte9MUnV4ZSuzgZrN4HfYWPyMBdFYtbbYtkLMs6jzTmuUstsiNTBe",
  "key9": "hGdy5YzZkY4Sos8Y6X9vkNDCaZCsJos74LdA92wj94nYmxwRhHCRGRiAQxKLCdHajQ6P9dwz3f5ax5nybxR19Xy",
  "key10": "4esxfYicQ8EjCPKxUgKL57HMNCBfqz1Q6LvVkGq7rQLPN8JhJb9ddzgEXhcNGNsJa6xAXrwxGwDTk67cVBGrDGCb",
  "key11": "2LsUkzo6jx9SUJ1DraafKqbQo6vgnuk7r6sRsjz2bk9tqxmQxZcZJGYgJtj2Gu2ijhPvbdEAbHGXy39bgVqVRrPJ",
  "key12": "3h4b9ABURzXvA9LMJE33GAB6Xv3281p4F65u28j2Egj5JNPFhaACbuEuHDdEEmmuCLCgUUV2QniA7ANh24TU3VF4",
  "key13": "2LgJmEAjDsT3XWuNr6N2ysTURRHU712G6hKicb5VjYnPuWivSrB3p4dxLCUSb5N4P6xpbVrmwSwb9k8es49B4Zk4",
  "key14": "q97kmPKLvRuRYPd4u1LrAaXxURYQziuEGQycBiqm3241QNqZXJg3uEdN28eJNAPoedRfH89YZWgerDSUrQGYzqL",
  "key15": "5bb98pTcY7r49F9VquMYHEgTdjsiGrzHqz8MfuVEZiKGqPQn3yLp5qMTjk32TJp854wwQSGEvBJMZhwFrcgi5Eq1",
  "key16": "3crmQui3itfiFxPDj3Cvs8QqgpoXjWq39UtLCHe2uGjPBojgVifyKMJVTkGr49SxqgkUr97HjLnanUfzfdNAmZGa",
  "key17": "9KyWnu4bwx35v2CDZgJkTjAjNYngF9JicfS8ByYmskztCmLE2ZJaF8PqpXD2FyDzEqoja2UhGVw8L2sDTR7uqsg",
  "key18": "C7oJNaEuJEHPGyn3t5ucJWm8iUEUEiCZrX8SYDDSWpZeo5Kq8c3BYkM8hRoZzh3mEQigB6nhZ5kacXZMZZYqoKz",
  "key19": "7M8VyBGvWAuKsMuEn8Va5yy5W7VrPJyTVv7mRRm7rXYFPjX4EiWWbEqB7U6DyY6NhocYBN119KiasC3MttptQCE",
  "key20": "4xhHVEQqtyHZZiNPibDjH4feDCCYucYAPFQnhhWWnk4kpLUoHbbd7wxmx8ZciaTpjY8aY5wSyy8QMuS6h9jKA2FS",
  "key21": "5CebZCMX9921yBV3dkQ2nGaxd7zG4dZJVNywZfFpHX5fBrDaswwcnHGSWctsemggc158hSKVk2geraa2qU7i3BPh",
  "key22": "33WGyjBQfLA3LuTRp9JcjcrSMvH8TZhfgSu3goPfncrLGBmcRYEFb99NDWVh3QoYKPmqCM2Wrhtm7yas9oJ1aQbL",
  "key23": "55kc6bF4m7XFsts2cWtsjkzMfZHQBhMwdA2T3e5FikEeUv99iT28z1mQPzbPJCPLYTHgfDGquvKCBaoccb6w3oDo",
  "key24": "3igjCM39RXzPyFPznm1e7ytrwsNGAAeHc96ic2NvPewJ5EsnJd1yNutNEuQg3sLQyHoBmnaJwiMAFz6KJxumbML3",
  "key25": "3xzUdtdMAG3Rob4X567Ew55wRoNEjp95v9gpvxP2FFswpyAMfENB1MGgXDrdLiHiqb4H47jpGc58HXZSQsVfrDgU",
  "key26": "vR898nETvQDAHduqF8UwPFBXuz96Vwn1dDVU77dvjixqrDXBwqHEAQc6SNPARHYRXrc9MbZg29K45LTnz94oo4j",
  "key27": "4ptSdf9tH6iwQvc1Qqwq4p344g9Q1631R7cS5ogTQxxXTasUPi3YGBD12XvBh9uc5AAoGPaJeAtguMvfg31xGETW"
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
