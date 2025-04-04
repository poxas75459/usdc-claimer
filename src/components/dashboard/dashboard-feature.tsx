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
    "ZKCGtbZuCoBnA6sonA78aeFJswex6hga6So61Zqs33s3TBccoPHtNPWMKydCJGexBc9cUuWsgTGBgjH7Lvj24m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4x3nVBWVG7Hx1DPo2uU25QNrKXTqoevdcXxSLCUP4tXamT2JUbu7mVLk3No3RNk93FnevtGLMtxTzn7vfmDxXK",
  "key1": "394zoR8qdUHHLF8TR1zncZxEsjiEjxrJhhd4nw7XpK13ScqTvx45NEdMfrG6XoWpjRoVGNz2mbe8WGPhAJS8Yfet",
  "key2": "3t8fLCvnFj61ga7Pe6C44ZLets8at9mfHhXmqxYMEtQ3RRmMcsG8chxnEDeJT4ERp3xrDCwxuKWxhUAWDQz9ddbU",
  "key3": "yLp18S3BLtGVgTo9B5Pa2oiH8SYM7CLbE2wX1nP5T9PbD6WKXUu44UoR5zV2Ub1dbk5kKLVjAAxyTV8djgvQSkp",
  "key4": "4e9ifnpFLNwCs92VKxL83X589JBqcXzwRhTfLxDrMxCNyM344XReNcQZVu2DrPUt9yhXRRJeZ2pbXomfFGoB9zH3",
  "key5": "4SeWkweSNSHPy2btkC2iBoGA7Ffyhiih9wpN9kTctX1mzkY36a2MydHwVBUYgyGLP8r6shGXdG9hsBa5sHHt9FJr",
  "key6": "3WgYaowiQMNy5rgiBSJWDWJuUNgCJthfuwHzJubQZo4M2v2wfSjZHFFj7xtFXvn6rdKenVzHyYP7c9q6oS41ToGT",
  "key7": "GVdC92xjXGc4MctgU6GmjzCPysSdokRZxJ1MMijUxpg5KWErnvJbZzbTBqTVqdzVTxfoj7FG3c4FEfJknNweqeS",
  "key8": "25YiRvnNZhtJ6CEEEPa4zbRdmSmWrd6b1gEDYRb3bVxVZcmCYhR1WFHBVfd9EVEZ44UQFv3u2oKKZMiut9uqu8N7",
  "key9": "1tECeduFhsNn72MGLuGi4Q7kSJWMuCGr6pBV3Eu68cpNPkoZqRVNC7grbDiKPhu1L6iVUfCB4DSVfBK75WAoLzU",
  "key10": "5xCrWgGxR21813xkjbisRA9Nn9qGqntm76ze8ruSrLqwoU31eSp3rDk9w6JtUnjYCAnnQ2PyDqeM1UnzBJJxHDX2",
  "key11": "4JNEMCk533XejjJJTYTHSsabSJTLNN4qs5FNE2rB35p2DouVgYHuGCJD9x6BhuFLZAa5jZxTtPrpDRgi9W8zE3av",
  "key12": "4r3tNVKJEPjuhBTxxzK286WpjMJ8EThy6vuW8jrtasKcLWiUtVcEHYFkLfxc4V4FjtBj6GkzSVWhZNgkyuRY96Ns",
  "key13": "2C6Pt1WbJ4kLfQFtnA2kUjxwo18HqoFezQarbNkXGf4ksu98KTcjYVrPYGYWqVjmqVxf57vSagzEh4kxQncyHjqc",
  "key14": "5PuzYERUFUu7dxXxj1NbTMRCNEQTndft8f5j1UxTCDaALoB3fivQoL3LLEm6e1mYMFjSGH9jqwDujFXAkrXwHTfT",
  "key15": "51RUWcbnV2SG3j37bTTzzy5bJmmKrapMbUhcy8ru4yRKmK3j1fQPT427EYvkFSujBa13yRCeV7bpePfp5Hj66GMH",
  "key16": "2bbdr63GrHfUPYMaMfEUc36UkRnqRrLM2WvS1VgDFb5ujjLobqtPwVcdg6xbZRWg2zm27i5em5NjUUf4uR3Qw9oT",
  "key17": "BFXoQkxfooeCaUed8jy3o6DcTja8u4LsmzwHgi5rHmVTRd7hxxh4nvRqfsY34fx4JY6zKXGu1ExqKanrDSjuJWU",
  "key18": "2MPcQNGZdWG5L7Q7nwB3UpXd5qn6UPkRoofVA5nYP8HhzjEY8prfY3gMvzPfakPbpevCwADDKioCbhw3T1VGy1h1",
  "key19": "zfpoKqd7LTAPksJ1qxvDAD1MnaAnQSeaMKecAazW7c6DDCyUzRPsuUuwTnunArX5kMZLhVaoPQaL9QXrhG8bZF3",
  "key20": "3FZb2VYu9uWthhm9DbYZCFZqBRb96fkchN59hdh614Tg7PMRXZv2Fn62sn2WL5EzTuKXEZcxfLmAqC5XHHa2VJQv",
  "key21": "uvjDc5AEh1rLYWVNQ1ALdm6TfVHUMDRLsYG2b5gbbts9K1JUscJ2qRWry7Yyre8Pm6HgBYgyXXBdYSgiazEupeB",
  "key22": "52gbAbgfXuovXeA4ktd56HztzMiZU2GbvQNu8QBnm1TwzhMH7erfF6JTwYeioZnuJ4MwtTLHMuMySaj7V1NwFGz8",
  "key23": "43tK1fm96m6WhWsFFWrTkpDqGWjW67QHem3EnPPg3khPry9eH6YdwoNJAE2F3Z35hBUUBYigyVTHG85wHaeMFuux",
  "key24": "iKzeRGsHuXQqh17QLYowj7sTUnM8GdyVJGynMgdYYD1SU6VNjozGV1gAnEJ54Zp1PLMk9XiS5kzjQ9ZGvS7TbKK",
  "key25": "4uDyXv2VS2aYoGcm6wktv7aLhfHBbny9J8XrQBEYBck34tTa8mtAzV8wzfqjxW5bwinH2SR5j4YYB1YTBNWbSJGM",
  "key26": "kZJQd63c2WsxfhmcGnMNovqxaFyHrtPZ1vNef2Yk4AUQDHpZytFHYHZdrYtuLU7ktuLFrM5Ef2uwXQrXbbsdTcb",
  "key27": "31k9c4rtdiruF1EngY6Xu3a4Uo1McBVxQLyPWJ7LvJ3iLk9bNBe8LrXFpduF9HdgLkbiVm48EXQRgueCJxvBG8Le",
  "key28": "3LAEFrtsoBqPVQDYYy1cKho1AzGgS8WXioidjc8j6M2yWoHrwdsfZMnWZhAXfkuuum7EWGub2okAB8tnghrtqjoK"
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
