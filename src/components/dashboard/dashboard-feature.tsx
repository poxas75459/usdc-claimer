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
    "5yYWSPiFe6L6Qz6EKZMrSTFeY9xvaE7Wz4HMUmX62ZGkhb7gDgm3FRbByxfW2CxNJbpYfLxW3U6sCkMjoje5FhHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ly6WzgRwCXkavexzBLszJWCGQ4DfCFr2R7gzCsTzhGNiVrAar6u5vRbtbWqsNrGrZvsu3mw7g8Cgx2EGrUfSjSq",
  "key1": "38P6LdsnDLgcaeFSoQKkJQB8beDpzh7q3q5e5mYzqXd9tBLgUTyFA5oDZD2SdNxV9gscXSubgGUtRfkG6mZduLBo",
  "key2": "DMwFUrDpnPhaZsZVMgzsfvqN3Fj2R3EkSamTxxmzUb4G8QL7ygWpEqpFytiuWpdMsoTcVGcwzUfLkVqzoT1gtkf",
  "key3": "b3p5yo1bpUFsjt7uCNNWr1CSPqhqeXtrFmQgbKnSyaSNWcrTxKFuJxzfLL9T5gqXGS27pCEUgCX94ijKUhDZQoF",
  "key4": "2jWhWtncSVtr52ik2Bb9NgQKLq144UcDbkYUCaA1HTdKyNjVj1f8BeMxR1WjLr51qvnRU35MXv6Nsje7RaTp1jNd",
  "key5": "pyKRvk2v3mBNfCDmNUwSu6pYqiEYqxLkv48P2RdZA1d89H9QBhSeeNHimRmYL1cFT7e9HjYQAwou2FgNergVYu5",
  "key6": "K3WR2M6BQ8eYdrQvXmX3s5m8L1dVUeFFYijV9TyAPqFeKPgyyc2Nsz94fPn3a1D4fLAigWxrAQqBxQ9pkWSS3mR",
  "key7": "DsxC8HPa4GkkJuk1XEqcZ7fsBFkUKGDk1rma9T62mgoJkX5hXTD3HAfUNyXixZypV1TCyWDXgEpRfaukrdLhT8b",
  "key8": "4BRDcFEbSEicja8u3akYZVpsEv2k4DmNVAb6zY7TiQU6LRRiHR8Ndk9Acagga4BqT2xgjdv3PVA8p5w5ZHakf7j6",
  "key9": "Q9bzCcFWF6tyW3bpboud93oB6pBun5K6pEVf9MpFxUDbSxh1jxYP4VsnrYM63q1BDAakSPufCkbMpZuHrPKdLMx",
  "key10": "2pdEMub4nTdBKzs5jQj9hkRLkS4eDfAJwgEP4QSgQRvMXWn9Nazo1zV8rHnBrZd3LPPNt9vmp4hGGtPas36YHPEk",
  "key11": "5oFo3cWk27YW4a6j4nx2eacpkxtgQL15wwYDdf71aFUCj9W1hZjuGCu26oQezBz9L6hExQNvUk1rZZdekPnXufGN",
  "key12": "yyXVSkTiafhUDCMrTkjqALYJ4PUa6anJQw9xFJejK4Gedm5avgETCsrXcyW4GQLWCvCL3EmTZJHMk9fp8Tqn81S",
  "key13": "4NTVn2c8wTavigJtaHXRs6zekhjGqfoqLgoGDpzKmQ3hhtJJzcUfdX6ohkrRx4jwMMFJahYX8VxeKuX7gdV36EXg",
  "key14": "2hmKmQJVj7V4eBo5ozZqxE39PuKAEfLzMnsMBbvxbVdCBDo2dgsyxeFZYZ1t1ZRmgpmcMFP8x1UiVc1Jub4MSoDe",
  "key15": "5gkT9CDEi1FTSLxUU9KYKqAhdNscB1hKAj8LYy3fZFiCVDr869ycECwgVaByh6QVnWYbQM6aaDzorJRPooNLGSCz",
  "key16": "23VGmKBxhAMUYhjeGSDkWqeetPSbhoFqsCWPcrb5tqZKPejvgYTNvGKpRvGcPbHEaH1R1ttgWnUtrmzQ6Ui9PbS7",
  "key17": "QJFWo5ChhaP6zQQNxoqisZNoHdJgd9xot2aenurviSqQWFy1pUGMeu8ZfojmUfsmXLYvCq5wiUbo6dy4J58dQ8n",
  "key18": "9vrnRhFJCbLk7JLDDgHhXfxbRLRU8aKFmftqACTb5TykgtqKNJMH9ZLaEkm9uLLm6jAYKu6d4VHoyunRDFQB3Za",
  "key19": "5BPCpkocEwSmgYukMehYszXKzTN9am96XHgtyaaewdcT48hswnhz6q9hZjkNs7DikDeZSfJ9iSZCxifpXo1kWbpD",
  "key20": "3Cfi84LsRcjV6htmigVoY8qGCZiEpRZjtfnjecZjeNRpWkD7GW1gPH6YcLS8Yk5AnWbJPjwMGi3e1R9fVvC8tseZ",
  "key21": "3ZzDE5Dk9j8rPgGgNmMBpqbFpuywXm2AvWPrJm4Z98U2EN5Vovc6gkP7jGctg8PBZcyuCnzQcgSZzjFr9LJcnECW",
  "key22": "4NMEkMwQhDGtQ358Z3rrUY7gQjh7QjoVShSSfKJ886RyrtETbrN3p1VfZeRGZhj5GtmjSQu2GCaxA9W7mpyLDNNW",
  "key23": "3dcqm9FWA16XDpWWwcUWyDZGnB9bUTEhPDnurh8zzg1Ue3vShmMA8YLiH2HF6kKaBCHRfyyArEdZ7w3HUzqvvxXH",
  "key24": "368ETrQ7Ju4KuVob8gGco41hPiMB6E71p18jVVVAqyP33yBBkZuoGjqsGWNi5MpzGJNsHK5JD8khxKQqFhJ3eLgq",
  "key25": "4BSeYmUfhfYecAQ4HVeNYBoCNcZyrtRncKi7nwyajDRw9T1LffFVZMDi3Yv9Nzs2PUTtKxcsSp9YrQDGtNRT4y6s",
  "key26": "4reyEPEmC417ttzE6UJLD6r73h9er2KNEKs3CkRJsh9sDnD7AAcL5Pic4xiA65WhbktVzqm1GYgdTA28h68yq4ji",
  "key27": "rKjTM3nvjGcRcfJ7q5F8CqyFHqgMpnuRMRN8FX7WNsmJo3aXzupSCBMfP8TdzVRwL5kiinnvqx9iSTEJrx8cCpo"
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
