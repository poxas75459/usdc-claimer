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
    "4B99cBBy7W8Swvx8hmpG3MYM1S5koaiqbT9is9BzzyqRw4iavSjm8c2XdrW3GVGDNpjFazse7SMx9czebowng25f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWm6y8DsrmqN2GqGJ7fmnDkyBZ8v1pKxJ6S7PitTfgqxgSqnCsTJtGWGmkfGupGbn4DgxmU5U64wFR9eQNvgiGd",
  "key1": "5MfX5wWvKA1xpwx7pa7JBKqxtKPuHFibyWQps8Jn3bQJtFeRnJDWvC93gSnbna2LzyXvjiLxc2z4ncHisTmrNTvK",
  "key2": "7gQSfm67kENVokDia1YfNrNVhtVpmdgcDZ7xD6S4A1JEcnouZ3phLaGpEcQyQAVBiwetiX1wemqFjBDBhxgtDoh",
  "key3": "4SSDFWcseYH3jtW21NeK9NXBQ3G7mSfZANfkZ63YHoc2LuuaKrkEe9tmETfK56w4ijKmruhZebjPzEBPWMFNTDGJ",
  "key4": "5JxN6AHn8RTwUXLERTtz414GHeZMkLE99ySLHCWQafGCXHCT7yysP7yBerg6JDhGyKnYkxUDEG7iqBPidQMB9Z9b",
  "key5": "3BPySKMemvGEbXXd4QgfnmfwvqWEy8Eyc2qwuJMo1FUvuhtf5UuEfV6GJXehexktygfnYMT43ZYXTcNAdWc4Byoc",
  "key6": "5uqVwBn4JU7H1EcijkiMRqVPsnoerkB1qFEbZ6RfzFvCaWsRCUxMaZHVU35GHTAaPAZBZTfRiFDvi55WJQyxtavs",
  "key7": "AtDyGs133jyDymqhC9HwBrE3m8E4BCxw8fbHfKKbj15kQATbbpHxTzsmdGiaxCx5gkBBRtGABdGXTVZzEFjDuH9",
  "key8": "W1jZpg6SHSUWAEBnjSjjyUkrXwQu1AW42MUB1dxFn7JRDRueex2MPeCJ8bdnVoBZTKVYuoGznqjhiYi3nictweM",
  "key9": "42F2CwCzRTZ8uD2CGbQ94HusY4Y78cRLiA3BgwHSondKDFDUtaZnQDHiNcPGB87iWGwLi9Uy2KDbMvUYtC2pT8cq",
  "key10": "5M9zq6munKhEN7BnXmWdHETU8Qs6tpRWUgAJF56WCZ9bSXbAbdqkSEaXQ6LfH1AjaQV2imxXuxCjt7AqLBrUUZvn",
  "key11": "3YXsRUHwy83u667RjCx7SVVZDnpN8xVwPEpDy4eLi4MyEBgJnVgU3whqKNJkkFo1y9PrLbxtPNYNwDAc1xs2AVvX",
  "key12": "3MyDk9ZHMUKzMMCUtH2zAhjXExFJsBJgq1q5HTK5qh7oL8TWBLFvaumseMNdesmJwSm3PhcKGiRVeXZ12e4Tdfvs",
  "key13": "67hB3h3Tpirqgp5mq9VRq2YUNk8GanxAGG1fnqcmjjxdMJge2RWxrG7kk3VsWaMGi3hyEX2L9zxsSY6SDL4ybRKJ",
  "key14": "3CioD13ML2JDveaSYsJuatumPdqPyJPGURKKmdBmBw5gPxKxkK5wyyYHL6C9DZZbD468iSrqMhgb6iWWiuK7XMeT",
  "key15": "2HXnNz2hSALmAbkxLruhZ8nxP9JmTYxbBbcQYoACpJMBJGmAJEXwLaXUsHmwUnVNN6SiBZvGZeLBKvLaWbHS7pYf",
  "key16": "5ntRdUZte1jaDtSMqXPof8aaHb2mCMHRkHnjgpzgHHa5kwdkRED768UpAAGKEk8LuKwjd7keTKFoZt6X18aMZLNh",
  "key17": "4vz9XhgwmVg42FtcLys29ZuFQSPRtzio4F8N63c2k6CbGvRDwBPFik8GUjkvUivtz7RaWeYiDobJy8dYuFSgTcWQ",
  "key18": "3jjyb2wuf3npWoM131fSG4KKytU9TsQjRVjXwjqWfpDeMchmULJZkADknnxdNqniqX6ECk51ZefMn8UijCDFT4xt",
  "key19": "5zoKLk7yHgdJLwttXVZtZqcwus5GNiu4AqSywkzkfVv4ipKdXnD6JmFr34LkBcL4ssYWV7XJgqibbgsRaKN2yaVd",
  "key20": "3GmqMPGnhij6KXTvoDHjc2rjoAX6khb3gApPDKtsxRE95eP9zMtUWqJzkqQhJZ4NSEbxNDUsGhx1jJUxu65SrqZG",
  "key21": "54knfqo7hZk7LgZqxUGjZPh1SnijPfqvKodSMURbVRJUCAFZawhUmkRCgsq1nAe5o9JsGoDVum6xGbU81nuymYsg",
  "key22": "Tkv3taKmtYQYkhHXHW3BUHj9wAFCfhum1bSLjvmvYpvQpM1bXKzQ6AqdhM1ZEY4QeTsaaKtmPne9yQUEJ3AHWzT",
  "key23": "5yFm6YEiEFuQszvy46HcEaio5TPgFcc4ohTsAAEXtYmgFDfJ6eZALskSx2v3YYXZoXzPTbvtSuJVTtmkr9vrPCTG",
  "key24": "kdg8pjupn278nxP9zgTscEskpVHTmdfabSUr2V3oX25Y3ftxrYPgrBg9ooVyehBDzqsMLjzKSCL971ERRfyuRiN",
  "key25": "QhraEu4hj498prRcRLKjjUbmrZxTkZumMW7dECyWCSUtU9f6nw4avs5JxuBMELpWho1CYTG1jw5dDPMgr5wF6RE",
  "key26": "5abXiukotzQrANAZpV7rLJajj9NEgpbc5mvc16WacpujuYm9BDWEScg5k5HsQi8EzxUvevbg9mvs1RkLG5j49Ldw",
  "key27": "qgMAvqb6ii6ahw4eUm9JZNVWz7SvT4jad1TkcoDXVncM82tduwZ4JxGeLbigJCCHiL4ogmMFQjwwqMtgjUzssSw",
  "key28": "2uEPPe3s5tdBqbFL3KYhCNxhbzsS78e1HYCPoqBia95t9YEZaE7eVfzCdqLYm8Ym3J1gtgJWPtfBhmt3EmvjHBZe",
  "key29": "5wAudufAdUcYbMBg5DXEoPaJ94y1i2wucagKknNgGx7E9RnuUGi4MhUPYBqmebwwhNxXzGFotqrrkZSde9BSE8td",
  "key30": "3L9a8wWa8qKF8D47HQQoTrh613qBfFq6WJPyKuGptURHpcJr3LG3XfCkYhR6NW7MJur7u2xq2NabzRq5PB7EZGoy",
  "key31": "2oJx69LhaGbrd2M4t8ix98WQ2U43h1mC44j3wumiZJt7BJuo5Ccvww58xddnccN9BjqFJHXeksz4phLj7NxyWvcz",
  "key32": "4TeEt48uNNZK9rSCuniHKWM9ExVyNXFqrkeDMBmYqXohAcyTDaip2uhvYDhV13xViFh98cjSwehLQRsgc4pxfM7J",
  "key33": "4q6sSMNGHqW8SGQZKnYFiGdnXpKGqXgNNmSjXb9WHTpcimG5znthAXuVoaZtQfKu5ZGdQaiJkmPLyXKb1hsuxMkR",
  "key34": "5j5rxNf2QpQg1dAvdM6RgKXprMw5S68N5oEKDDFx9nzpABjKyN5kQ6stkP9Yv5jWWZnY2C14zGg3Dr8f8dKFL4ae",
  "key35": "37A8e53SQafnz5G68pw62PD4ebCqPJu9rPMieLx4sMd2CzPDtt6zBzfrwjHjXAk4scuHyLrdeGrxuCr7APeXvYJt",
  "key36": "3TkLD5VEoEuxqm13VhnsU8wn4TxRR1jQJ9d9dQVNXriiKfKbffjbZ8WMNXsPvTzBKfDnTBwbZKGZ4ZWQABSnmRmH",
  "key37": "aMTwvTspQ8ekwZwcZ6FexegfaxPsFXZk2SxHLpTkMk5S7TcR8F5W8fwfUXsAcA1EWyKgqfEqqwHjxcaWJTsBgHv"
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
