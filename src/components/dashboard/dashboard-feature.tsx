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
    "3iqgQrhzKwxBhz6REE9dC3tqbBKBnXUX6JrAc1bsBz4Mw1rVWFaqXby9AR9goCkCpC1bPQPGPu1gDpvBHeGXWbYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431GSgEN7XNjbNRW9QaZ7bhHSUyDyiiiiDtW9BL9aGfpyiBQTSroGvpbX7a78MY1RfQkdENbrkLmyZRAN1U3UpWw",
  "key1": "XCzvgXvUF43dY2YVS6UwnqvbBRsN3iwMxUj3YGDe9qcS3xLxVmNkozJ9wZhStuzjNut11LfzQDAGCiarGUqmGKv",
  "key2": "2YLaDpk96MCeFDtPXQqNXrhc8CuHGycRirAbn27Y6PSX1ynqYFghsKKebGNZFFHnTX723FYeUybX6XtsTMvehJRc",
  "key3": "QvXKKjfC8Ty3To7YRTsy7799BMPs4jCNgAPr4VeWCx2YKtmhdVQV4BY6WMVLHYiaLJ5G2EAgGmjAn2QTrHhBNHZ",
  "key4": "5Ny5TzmetyNzoN57YJvTqQqqvBzTtAKzg92ejKW4FV28xvHrcaVPEUKoJ7GMBRvxiJE8J2rQ3vZ9vS6U9BJ1RWmX",
  "key5": "xEdaj39AnFR6FcYxok5634gVcczLxeEbAnh9WWW1JLu6Ex5wKgyNzQpWmhUbxZ1t6w7xsT8s2D7KzPvEeoLj2dn",
  "key6": "5E9nXYgm5jfzUtWMpqMwFKdpwgvBSe5zSfiGoYBustdyqowC3A3oDvTjdbiisXNPGTMe2Jz3Pzc5SigbydrvGRtR",
  "key7": "5kMRbtuTqDYodQWZhkPC3YHgHhJFqhv7f9NcFYNoz9ZyCZj3yso4N32yBeYiSbcZTF6e2ufJYZFD9SwnYQ3dkFTf",
  "key8": "4h6Gxc21VxqW7WShiV6CCg2KKKiK9f4ZiRJEj8KnYJJ4AcxtJRkTeuLAqntuLs8Lvzvs7fnqRtkqgutMoGk7FqTX",
  "key9": "EwAUic5xgsGUTrmtXeRP4eYe6zqbCXNEY1fQ3qTL5nBj7NiLGvSgGTfgnmojPQ99VTcWumcxSDza6rj5V2izAx2",
  "key10": "3P1SG5WPJhkeM4ANZwDfsD8q5Qmnip2ZjMDQoKR6buSxvpxNZxGp9BZzuYFjs2xnhQXEz2yEHsYAsqXoyV6jpJV5",
  "key11": "4EmG6bb2nbNhrXRmYyVHR4XUoVavTbC5XhVnnpEyj4D6FefMSv8vWcLwDFsKmurNsU6JySS9g8SKD5iUbLSDksUv",
  "key12": "2oqymt7o71a2YbTE1icW7X3AX5K6sVgCQ2JTPTZFnN72hGMXUfjgZ2WJPbmXY5NhSpop5RV4K6mMEpn3Vvrer3qH",
  "key13": "23KpqYt4DXwGbqvsAjPNn7W29aHjDFCpJYJZzfxWZFjk764emS2gupfocqSayWh74xMAaebpdKiYCSqwiqd7Ag6f",
  "key14": "5zAnfxFFHHyPVrwfZFwgUUgWGdxE1uWkBViu5u5Csk9xY38YqPjzgWaDY4c9FosQeMdUd1TbonpsF2gJ2FhCg9Uf",
  "key15": "pq5jKfDdLKEEgyRa4pGCyp7j4YbEUvjsL1adxBMaCtJmZDScAjAAXfmwDrEqwNvLgcsEyHrnNfLtYpTV4U3mW1G",
  "key16": "3HxUm34oVK65hx69u7DA1c1F6VzZmLEbXQKyc9utufDUaumD9TPzDSCgMeYVC2W4YdKbrbrKRLHkMKSE5XNVJ15R",
  "key17": "5MMtzkkZJcHdUYTajjSPkBeBqRkssNdYmHtpFQNBNHJwNGDD842ybPUNW3ZwVWLsiRe1753Djr2rdqZV76YPFwp9",
  "key18": "36FZnPMHd1VWdHJ19hm8CAnPjWypPVXpkddrCDHWTPDLBkYCFMKNq7owUNC2XN4LaHr1pztf9rW7GEycSEQV2EEK",
  "key19": "32VB2cPopoxNJL1HxaVxH2uPebe4SSLEk2K1gZJMv5fGwL8FtzADT2262MkbFr5gSZALmSxXdwUMhpUo6JSUsWxG",
  "key20": "5wqH8tVrrnayJP9aGm4LUYJGMSPPSrnppuPo3hprS1jjfgPWt2f1GNS1c7uzykJXRb7wmBQdgDHzdWgZVNod8dtt",
  "key21": "nSGG8ZQyV5oW9ykYWGwZ5nidWK7G6V4CVF8LK2REUyXKT7MDD2L4T8vRUPNcPKaBdhd5LTXXENvzYiN3vJGiKyB",
  "key22": "BJE8MvrW3NJPrTWazNddF4UwbR3geZxbHJgpBBGmKkLw7WAyh5j9AQxv5CGA4RdRec4rxevFRQghLAvXndTQ6zz",
  "key23": "2FmCcm1R18NpG8RB2AvNe1z6ACuRhXz9EDccQwoaXLkQb2GeiZFvmuEzbqeBgrqhLLWAGEPWK56Giohf8KdEvpwm",
  "key24": "4GZYTFsUjoZNT6EaTXfn7jMHExQ3TZS9ovp7cZo9Ka1jyqrb7HNupFnPMvMmFppXekqrZSKEPPMEU9VtexV5Rm59",
  "key25": "52UyBVnfNTzLsDVQrXxz6Nj8H2xZe7Qsw534BLaLjdRLqCAFzRTzuKNBti25WqqAxeZFNJKY3fBuoQVmr1s42G8e",
  "key26": "2KAWfvf2wkpzLK81AK5YM5EnunNstzQgexRtFqW6EhFLsJMCgraUjBvzWG9CyFM8TxC4TGvCQf5U84o3a6bQ6tQk",
  "key27": "6253wdFsqmiPArpH1vKXEp6Y9CxtAjYbCbmbrADoYXwCaXEfAnmPcgcCzULqw79BaAaWPbzd9gdCSbd1PbVEyE1W",
  "key28": "5d88kLCtrp7zj47LdkWGrgaLqhXUucjtsqRqj1xzSVwMFbqqJGZxpnWG5h9dmWif41A4qrwe3KHEserMASJut6AV"
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
