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
    "5n6rTnCGwf8Wo8FFD8fThS7Gb24P6PQi6DfAWqfqRvurgDFMqXRHeVccxdYWQdzeGmMh2pgbzyBjEskaCd5fcTtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tWc8YwqSdn8hHQLueZaBJZ4mcg6SS2TqQ5WHUtd8NsuGShUfeZrG78kr9gaywFdS6edLqufK7jzADRtxQDx6nr",
  "key1": "3LxVUU5Qi4a7Xe4VThGz3bRT2VwLgYUz3w9oC1YH7mCofo9FUqbM3M9qXdGqWp2Vi1aVpqr8SWTLXz6q4DgeLiJe",
  "key2": "5yHq5DDWCeCY7gvDVyZ5MEc3YKjBANitF9LL2w5x1xVnKt5gbbwizjkVeEr5awgCWiueEfREWedaxBhHhcRhmHZY",
  "key3": "5MmoZMtSk1BiDSdP89TgWzPmQnp3uA7jDrry5WxJ6gWvYR29wQTSeKcNbEckDjvgZXRcE9EFj7scAF6FoEMeyMQG",
  "key4": "4wH4G9rTRV2Nq9P42QRm63V118LbQKUUsiZnk3AoF8JkbTfMM28M42UTdkBucK6nA74s5eJxCt25Fwwan5hQx3ri",
  "key5": "3DDrJjZiH4z3chqjKsFFFZXN32XxehesUnr1AMUpciDT8nf1DWqNwpHxqT9FcRZ3FAD4gfm7YniqV1NigbQTmfgd",
  "key6": "43tbHYgLFi9xc4nQCKVSsXFHExT6k2dwsbq8Gw3A9g4sS7wDEE3t9PG5PBFuWeqeSXaAVepeSnpnpV7rJx5enY7m",
  "key7": "2BiTiRCsXg9PeNqFFncVCvcgynYnH32aTXWVazMVYDYVxwCAh21HXrVTfdHjkZ3UYusbFTByWrCHtvcD5KXrAvk7",
  "key8": "iapT8TyRAGFYoRm3mis9DV68JuUHg4hx2x7Wr7YqK4FFNXdRnZdmWQ813gFMegUQRsseyQDxEanmDKDEJf6TYAA",
  "key9": "yhGkoEBFgGsjwermFd5Y8N96RPD9FW2RTxTsjaV2gKBiwqwEWPCkVMBNk1pibgEtgP9gkgMNsLkso2vxWsDAVQm",
  "key10": "2nD671vqLmZ8ProAi5gNGi1EMmMVGPLiWQENEbkyAW3XYxSYgkCFfTL7toCEQKoRmQj8uqA9ShSdDntfTXCaZaU",
  "key11": "Rrqpdjs7dYktzjPkD3ikaUbFme6qreu8LE1scMfXjmo69NN8tR27qGsoEPhmLp6qjeC3x9A627eY62Mvas7enSL",
  "key12": "296FEygqhMvPxGuBnSBpcadPwGZKAjLtLaTkLs9qWSg6XX27BDJfFDY5YJTA8uS4Z17YfHLU7W6qQmD7Xb9vvY6b",
  "key13": "5W6A69iiQ1goL3dp3wPYyZbBHoYgKPht5VHiFsFjKbXHUtwxw6ZRKQvoFq5PE2fVeS3ofq8U9wEzFrgdbasghCsc",
  "key14": "3eET4wfFNSjAX6RrjMR6EzYeoqb5PrscZh9vCJvzyR7sXGiqtjoansrbaQBv9bYR1TEwja62DM4AUwik4hDRvbNj",
  "key15": "39UTaj1Xs3vdkdzxKnsSSrSy32NJ2PidUh2gM7rNi6A9C9USg1BPeCc3Er8x1LG7kirbMfwkiiw9dC86gThJs3w1",
  "key16": "4gaXrK7TVGBHXw7icVCbkbs35P3cZ5MChFKmLwk6fmN4C897WcsExbdMyf1mRE5n7XLjDkxrVSUyvVXCbywEZxou",
  "key17": "2b7XAQsKc3pesaWodTRrkLZ2PAs4K6QzJ2kfV3BqfRXQGrV1yVL1hQdfBtwiELjZ36BajDk8xXJmr1hpW61Rz9vR",
  "key18": "u5oYdS42xhagnzS2seUQrSGKfxp7McJmxBHsEKoZ2ofWP9SsRUjtHMug5PPF4t46W8hwVmFCGXMrx175T5fXyrS",
  "key19": "WBNUMAxSv2WYycmCwkoq4B6WDBjvgyuLNasCS7EuERna6NZReWdznzptKmDjWPqV4tNP3CG7FYDF9ex5GAF98e8",
  "key20": "2hidtNxkN2QaLnGUnnr1i6382Bv6Z2ZAJabPghidH5FsCmhmq2xCrbhJa7E1itD4r3TDmqrkK9GYZeioxpxdnK6R",
  "key21": "4MjdT57Q391zDYtzWEitJvrQtEnNxzPkRs1yLmeEHtAy57Mq9xXtGjWMR4ocFLTPUEYRDbDUMAd7GXfxdiLGguTz",
  "key22": "3UFrrtYoaEYYj1X7KBwJXdotmJ6yyaiZuycCexkVJ4ZM2SrrMuku4etiKs5vckoarZtY8sqTyjrURBCLziw5pWLX",
  "key23": "2UshuKvo2CCX97uK8BVwS4zw9ZuJDm21sZqnYo6DtkEBDp7muEnaqYdzpStuqrkv5u98ooYWw4k6RtCz7axFtJDc",
  "key24": "5svEXW7b6PrK22ouL8Znt55P2R5LVKzNC8zNqsSQPCqGhyFUS5XfkdRSnAuNZJPZM7inf5Nzec1ofug2Ahe3A4TE",
  "key25": "4RPoiWedJmbetm3Yq4uNV9ubXTehY3GYcqFpf5QZLCpqeXuR6N3zMaKyG4tRUXKiyUV8fbBBKGRp3WL1qZCEYbeF",
  "key26": "5ViHNQHx4kV5i5NA9atqajkemjUPT4rD3QC5jrdLEQuewKgHSDTuvqhYhGTsnr8uLbrkeEuZJ199AXVJc361b6i3"
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
