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
    "smtHdLxtjqPtAoeyy2Vr7snhoWV2YuwMc6wXYQrRdAAzjepHNsTL9Uk4iFUpUo8gwZCUVGWAVvCRGesjxniWh6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYrfwHhciooPiXhk1P2GmT7LAXoQfWt6aP636rbnHibk2Tvnb9ZbjzT5VqvmR9ptxpxjkvYewJ1NcyfTnLpRsgt",
  "key1": "2m851Lm8Srv2qMF8K6dt2tWj6JK4qQgeMSwekF8u4kq6tyhRw82h83LSeRPkBQSajcLMdwUgUTx8KAv8VBQK4Udy",
  "key2": "3HZToufKTQZgcmTv2XJ11QV9gUMQtX2BHvWbtURhHWcqLQqJhdjLkcr9nU68n7bQJ4fdxwSFd2nQ4BUeaUWbkkWq",
  "key3": "2u5LMKVgiQTzv8cVzZypDzuzZ8NizzNvD4cEW7p73xSdnNXGfWYpUi8KJtwYavX8i3MM7aeJfVHZ6wob2UGean3Y",
  "key4": "5xBtGAKe4iZuyFFhJHoHDXv6Mzv4MKphCtRQnvxwmXozDzS75k3HytKFK9Mi7Z1ibTjFHs2EkeSKJPWDeobtT3e5",
  "key5": "2UeTxQCLZzgfzdioNM2TxAA1BZ6kdfwd18MtXV57oBomcKxLsudp2VE5Vv5nu8UGMo7SYmWE4KdA8Qy8RJ3ob8Em",
  "key6": "xkQSbUXbheteCWSvptyNGR6FYTcM7ACJuWeo29QafTbPQbmCcEBiuBbvtsiKd8M8HJKBJZeLxtmnWM3X44wMaTY",
  "key7": "3moArBCTicGZobvkws6hDvtMC1Eyiogh4pqUdomgevjUYnYsa2DfaztxcrbkHjvu4CxN2eX69pW87UoYc8rsihPL",
  "key8": "53xpBX1X3d2S1sGrWv3hDB6uTGyvVQQWMVeYmzNPFyXk5E9BxgYBs2mckpKit9amwM3SZvKWyWEq97o9SU7F5ymC",
  "key9": "nSKyuav4ySajEF6RMBMW3LGwjQan6wJsgha2RnZxrVUUEc2yrizx4kHsMi363jCARn1rJKbhj444X73wkxfeaPT",
  "key10": "4RZXg4Fv86CPSytPbbrrsj4EwZAoPEknKUEEAr1AHWcXZf8Ew1U6NvRBTmRpkhNbRR5qAYG9UNJ48MLJHWAxGmu9",
  "key11": "4wKFz1w26ZRAySYkUGgoMuWcoNNd9KbTQsuBsCRcCCuhPpSiNumqmZ3QfB4AfwnagA7fjacrDjefgStvVLHYdbHe",
  "key12": "3wVAmCN1WKgKbbCqpz33Uia9P9TDdncouoxSFLEZQPBjWZnKffqBQht6gNC4MimoMAcG4D4J11mZMgTFqZFgSPeH",
  "key13": "4AuDhFYtSCXM23datjXLRdVxiA24cDwznr7iJP7YDPSbUU8XgVuKUTvt5V4UVD8gYwYZgsTSmoUE8KBrPEuPeas3",
  "key14": "5rVVMufRteygSdDCKgRxv8yTiWYK8hggytiNotSS927Q9zLUPu1HHFLjRU5jUnvw4J8KaFULEGAd6uKMgp6uJJV",
  "key15": "Ak2osUZdKi8bBkBngD9g6LgXcnnkT5qDc2GCFnYNax1tHw2gFtVNas2NPrD5GLTmorVgxNan13Kgm6wdo6FgmYr",
  "key16": "3JNrbYfaTKJA8y78sqhfZV5KrUcNW33TvhwvWPCaLniCZZiny8TgdGKX7znady6Cd9LjaBqHj3zxvPT738Dtnvkz",
  "key17": "64D9DxNkmDt2fzwB5UNNv4YLRUqxDgBrobFWc3PTgmrJXp5pkY27PpBi2xfMd2t6UkhbwnAXaYnGAUfSZHizviAV",
  "key18": "4Viky4WWjxGwrDFwsFAe4pgSGSh1xQgCLM8GhyMNy4mMPbtF5iHFDRjaZNK1xzNGP3BZEBo3nZpFt35BKSnxwRu4",
  "key19": "5cnugencBBMitn63ASwLwB2HziS9FZU5jtebGxdEvx2kY8tQcdgSqRbQTGzfx3uCxGmPNENZJ6FZF29wfr9wayT7",
  "key20": "432eo6ZkWcF1sKqaRi2Ku4kmFAZSkxz7EuQgyr8kFgEbA3CA7yQ38cuH7BxfiJuPRKxrFpZzicA5hXMPC8CKVgWm",
  "key21": "bcmUy7oM59WqmkURwzzoC8vobXUFrWVBEH5P17sfv4Vuha1ZNs6eR2FiREfqRnKUQzLStDMD3KRQ3FNCGFyFnLX",
  "key22": "2W8nnMBaxxq5CAkvMLN8Ww1dHtocgW3mGfFjtaRpETBZtWp6yNbuTKLfHGxJ6N8YKNzLwyPqF62Q9faBSUYr5aWE",
  "key23": "fVeUVhnWgy9VS1HZRxgYWDYAkzXFUYr5MSWPJg8ySdCFVo3VqpeDg2ogAmtsvj9AVxhPF7Tk14HpyraH7DUco4e",
  "key24": "Z4ZAr1L1r7kjT4ih4Cocvc8Y3zeZ8jA4Raatr7jmH47mzyoVMzDzCmQMpnHX21XumTADQA5Qez1yEBx49JxEFZj",
  "key25": "222F8oqfuDEK9XfCrS2U1BVn2jRFBQCaNdzwHooPDT37Gy7UFBriZpRy7ELrYECV3avLJV3dTwbDt2BATbc9cetN",
  "key26": "3nwoTWa8sYezpQpVTDdEoLNijdzxzD3gSsr1dG58KmWhWXGjRmCBygMJ65MDtscdnTL8M9d7633Aa396sLrw1UgA"
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
