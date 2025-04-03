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
    "3VjfnRAZuAKxx3K3NuCa46iKJiyuxLqYTJ2CKhnu4YNKWEpoBoQGjZFqmNe4LsJRMMZj6EE9U9mPepMa3SL1HEy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzVXs8pk6a1CDUuy6qQ1vx9xMxHUZePxFWiyFHsrJeY1J3ELmSoFxWJDEkD9ko1mNmBRjNTCvYFc9p2QsE8co3B",
  "key1": "3TpYz7gvhZpxtVV8E8Qcr7mGEa5MggSmineENTY3jaZ37R7XEPzm4Np4HvU2GE318ecgREESqPw65PK4WVYE1PRH",
  "key2": "3WEy5j5J5PdYML1qvGqViabS5EUgZL4wjJhDTCGRuAtQn3z5oZUB5oF7ijeEHQrJHxviN7UzTAiJGrRUeWe4tUWa",
  "key3": "4GNVFqZFVY1XfSbdjT9YjYinUERjoUfCnFGTusbgrx4YYMZwBAREKSLLqkgZZqHVgoJKgXnDZHv4Vg21BAPbB4Dm",
  "key4": "5kfFLkpvbeDa2571ce2x4zPApP9C7oAWpD2uLAASPLSkK6sG7WVT7kKtXAtpb3uK9CmfdTmK8F8rTroQtBoD3pZk",
  "key5": "35vHfaSvgX9Db6N4fqGVN58n5nKiqDGqtVdxx1WnzYbDceThHYHQ9G8zhVctZDR2XFC8KW9aWZnafK3To3iS43s7",
  "key6": "QyiNEbD5qoMPRYF42wNsdycyd8WbbE9e8WdNK3bQT4udPehVFdnQyKAbfhQzCiXD8DhoNXHdnAWGWpv9Po4YcuG",
  "key7": "yDn9jE7mobfwnnboXkzKM5WGmNP2KeiMwPaxUF8YzwLurJ4C3GotwGX1ptkvvLkfcni9rVog3mSgAeUAYMuXz7H",
  "key8": "2b4ybwoAFikzfWgdYHra3jUomkZKFKSdYsJDw1mUUC1QVBZSL3U8bisfEzHLWH7gEuLszXtft5Brkr9YwvfBFFCP",
  "key9": "3naomk7Fzq3F7o6P5pa3sGyYNk6CSZP5iTV7NbAqeYFkvAmbgQVK3QfN63hwRS6AuSDdSAAoXDkzzUnm55dHprYZ",
  "key10": "2PtwGmpPZyRiX2x9Kv751PJxviM6NetxQJhP94Zsw1nGt8aJSFfKumTRUYJ8sehEmHpEdNyn3gLb2coBe1egFQYF",
  "key11": "4rjUPy7TXaunBYfq7MmJ2pWRw98AvaPFWLaY4SYrKbqpAGa1vniCFkFuriFdpqGyCUngwuNMZeexsHM34x4rsS2w",
  "key12": "2uDbcZMj7VP16kmMMsTYdDLQ7RuVps4yWQXdBbSNjnfhuJR5A7fmTjmdiTVg5UNCYnoEqLy9DUTDDon45D1qrFSp",
  "key13": "4skoZtwvtkVVHUsc8SoYiSzwd8M9ksqXkm4XiiYjjN2EYNZEDCXUT2g9K8QRGcPp2gwsRt9hAa4FX2zxM4qZcR8F",
  "key14": "2kdkJt2c6JUSmN5E9UyJ7BkY3taE6KkGheu8psBNJou3Qu971PhT78fm5dGuB18Kav3daudnKaupjbsU2Eta5eTT",
  "key15": "5thuzdzXhtPx7FDLjCBmwuRdosRa7fqp3dqu98uGEacouvrs3bua8Hd2WVDaSXorPLvfA3MYHcQ6YKA8TkNhywNA",
  "key16": "4m6FX75zYzQZHqiQXzLQ1tWi3uBdXh8sQLnrDLFwJpLkL1hp3sd3RHYUkGBb4XgbiiRt6p6eS8FNAUkS3aGmTsBo",
  "key17": "MvqKkPm3MCWMhNTvhy4Fca9qFvjPJtExk1TCDXFVx5frZbjmNAFaw5hqP6GCv19Ji5crPY9jJy5TXNM2iu6mXbQ",
  "key18": "3QDQdQMDt8jT4TKYcpocEn3jjKQGPoEQTChD6rTWTtqZtMZmRqG4oAKhxW4zrEaZNEX3KHpcu9JCtkCdaN3on6dk",
  "key19": "27Wemfofvx4uUE7MAWSAyUGMmgw3uHt7SP73bFTtCNiQWf6FncJF6juJcd4QxFkgroVWFRutaHEBPhkXjhbUefns",
  "key20": "eBMfggiNhpC8RJika2F6fHH4m6fXkNSTNapke6MYqqcw521HNn6hvGRpgNBDCEL8Bp4dzZDyS1Zd6eJu4mraP8C",
  "key21": "Pp5ZEAaC56SCEZMhkb5YzqX49RGyg5TKR9jhZ4FZFSfMVUsbndCDKRK2CtRCaxnv5vStXfcB2CfsirxcbfqzBBB",
  "key22": "3TspxtNQhnxZeVHkGTjsXk6xB6vQpaGPGFhgZo2hUKUWJCUhDnvMMqjEsu5dhSu2jRbVvJxvWAxH6jjp9jX8xk7A",
  "key23": "3op1qhej4npwhEsFu5jLsEvwLViDcxQpidqsQ9yQ2Nivmjw19JrX4RQwBJqj2muzMpSMpcHeT11MoUp1vipDbo6F",
  "key24": "62HZAK8VaMCRx25uaYj77X8dphX4V9ZSMd7PPD4EHRPs4sqPZ8amvBjWpz1PmX1YFpzBmYFjvfuMjZboHzTsUj7b",
  "key25": "5iMZXNrxdgysPeEhT2FfZkQxGWR4EG7B9tvcw2wLD614bWKFerQZVVxWieeUeepH7NpyjiFm8ur3u7tpMimUPwX7",
  "key26": "5X81uQw41A8yoTzPhrHuq2mtMhGSJ8K5ZuSoQ4cZfJ1Bu35TYWG3YroMY997t8WCaFqzkiCBhoKxCYia3qDWP9cj",
  "key27": "49dUfNK5qBdFVPcrmDyXXiDZnQtfTdqUSfpkn5ia7gZGzFAFXNDjbWo9yRYVNE3j4R33gsLy34ALXamDgu5SY1cA"
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
