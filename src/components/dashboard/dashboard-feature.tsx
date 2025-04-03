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
    "3yh6futE2HqKieZWxZBnTa3VsjkJiJhLoneAfFrcq7D77RstCTmNBCSj5L51gJ1v1abHyHTRjAXxMQCmaWqLQAcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmUzmMKanvk2C79uccLmHUefyVEjbzpdCUpK7WSCTCAgbCM8ADSGfYbyEDUNsB2t52koQUmbrAgDrsuR7PPsq5N",
  "key1": "2sWtG6xqvvec7Nki96rdc48RVDnCCFHPMeQKcqgVELhxRhtp3PrFqCYMgWxFao13U7m9ogXevQBxr6HUpP49XiYM",
  "key2": "5qAjP77rFK4azBZYsHYy4yidFmbYjdcAuFdqMXWSfqMKEdMYbpe6xBKwHS6MqdquchGzyA1rvos17p27ZacnkjmX",
  "key3": "z7YztSuTE6pQH79LUJyBYo64QCmTi8rpXuP8zD4FCcSthSMJM6GnZioPgwu9Y3xh1jsynq7D5uqqoCa7gr8xw43",
  "key4": "56R2tezhi57cN1gkNxZZLMzGdG16MEoHiH1t7rHPFqjPZKZ23vnQwgQoFdrwsLk3zNB8wZtyBYN5TLw6wAPBnakk",
  "key5": "3kH1j5mWx9Go5BCb9y8wEjw8gwxtWPQcf434Qvx4V9rEQjifEW2ArupP61FBDQJT5JwB2ax1wWMMHCLotMCARvX6",
  "key6": "ykPavdMwGgK8uQxdZF4bNXyNU6vHgQhFTFs6X8Cgq6eYE8WQrb1zTMcGkeVg4eMpJRvb66krWLGUj3Ens7RxQbG",
  "key7": "4ivQHCiM6nS7hA5By6d9dwQJfRyivZu7KAaV3QRDYAaqPpN1EHkyb5sABJ1aEkBmgRCdgZ87oezcnv2myomndegV",
  "key8": "5Nyio1issADypKq24kgnCdhcXsZ5E1nbtig8YzfAvdEUKVtWSszLBPaGoh92WnqqJCGPHkPtzfWmAEHC4Js2RjiB",
  "key9": "38SGGjckfD9z6E3S9dSxQhf6wkvXTJjXdSNtDdxS52PYHi4i3a3KvWbVdmVpAmW6Ybh3XNzdoUGMbUB5ozeSzMXd",
  "key10": "5jaPYLiPEXq9Sg5BP2KSkehr21hrCMS2Q3sdjSHR5K4YUG1ERE9UUqiTL58jMx69eoAAhMgGccAfBwHgJpY2J9s2",
  "key11": "3qxvPhKbDmwsYEgxbSaGMH3MBkFDXXQFXfAp2MceWLaoUnk534SoRo1bqNRh5Q99YCc8yad27q8nyaWjS9RTeSFA",
  "key12": "FHNeoJqqb3Azqwt9Tow8Z18dQLPyNRXeBbC76UPqvASdG2vohyepNZ8RmfsAYzTtFe3wAF39q9WW98behu9KUE4",
  "key13": "36bvU6q7yy8ay8Kst7xuu9LVpFUNAmx6J9EtnWdT97n383ZgwwZaWmsWfLkN7bRkkeAYoYxV39ek79y8DVKiQEEr",
  "key14": "2MwrnRVxTQNRQr1wa3gcsdhhEKMz11irj1BMEh7ztQuhrzE6ohrZkLXxSorQo474dEZsDVxYreqdRVSgLudChEGa",
  "key15": "5im7tRx9TZkPZSU1SoeXwiszWYyoumBeNi3N91fHRhTVuAq5diXA33Xi2ksCmQ2zr6gM4y9bRzbMdM9Tz9ywsxvH",
  "key16": "2ScJepeLzHUh22uFJx7S47eV66mU6YvwNyL6YX4XicbCzoZa2xhAS8r2MeLKe29mjdHPSjAU53wmz8sxnnEvMkVL",
  "key17": "3XGUJZ3uN7NXo4gYTovBQaU2ysg5VdDbJRmZjUsecFSB2CHfRvy46Fszm9KwL72mC4WxyAjSKFrVqPWndYBdsZdj",
  "key18": "QaDC7F8zjqose2YDpXQPeJz5HpQ7QZhvSbY88VuQ1arKETDMJUU9yVj9YZPAKJuDSJmafDY9Y9W7Yz5u2AWbymM",
  "key19": "Uo6TtXwdtQ1ENmbPaiN31QgTwDoMkyqrYu9Ei7mYsSa9uXw3eyNJMZtje98hPVUqNU3ax9JheBqMNgzeTzpiEVz",
  "key20": "5VmdJXqBrgQ542Fw5PioTY2Cu28ex5xdsFfrwoiJvwXK1AhiCBFgNQfqdeL63w7WjuiH1gSbvTtGCuUrhtXadAyY",
  "key21": "277KCkjeYAa443bSuFekcATHCgcMGzHv7hBM7MdVbA8VFNupTBSjWfTVhhqzfnPgpTa1cYLDMXBZMJTp3erjQQvA",
  "key22": "3syVTKUv3jwctQ4qfLF81RiF18kiuKpWsbwnhqEC6SH7rDJgYWRwvbzdoXo6RjwqcfNdo64CiimDSjtwCvWewcgk",
  "key23": "6yDG18h8iTZpbpmTg4jeSb3WdfTLmLXCmq3CQx5eh1cSta7ugoAaNRsNovJPUiNbKLhmLmrQo4FrKyJCKewJeHW",
  "key24": "WyvTJRkmNNHpLs9NMYcybtFEScpWAdjA4tGB6o54LWfvuTv3kHq78QsR2LQj9bNZR2W9MEvQHsNGHdEd3VzwYcg"
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
