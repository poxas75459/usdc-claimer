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
    "2TX9VuwfHzednothUA6Dy9YPSTjmLfbzk43FZB5GpbqbLydRNL3XvUtAjvnSu6wvdSqnu37Tv8oXuoiZwzfycYnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuoJoKY7h8f6yh1Y9iYaJYhy8qsV1NPe34urmvUhsDoS7Lg6MoVJf5jUbVxRJYUqKCYQoHo3QzT577PBbZo362M",
  "key1": "2GQDkG2mRrU1e9d86RFgqsjWECPJMgsVhyzA2FPuatTmA7vajm2XF4FtnNjHRmUvKa3KFJj52fDoVCy7pgGCbvMS",
  "key2": "2fEbx1JKx9wmAPZzwr7T3nwy92q4xkfnf2Z5khqRDXLak1Fi8q8kodJyyZD4GkUHuwYakAL8YquFwPp89STbftqo",
  "key3": "3GHz1tAkAPhv1npeheJw8Q8yJMGctMZZt2PzbbeTm8n9GfAMsQW4ErJ4uGwhRdypf9DAuq6YGhc6GpV7C5EssoK7",
  "key4": "2pBoVru7Zr8m8NVeAY2ndrV3JBi1ftKREc5QKYNdpNGPuFM187KW5etwHJmw5E4ug8ycCKuNPQaCMPJy4GmQtgZ1",
  "key5": "FCz13dLMac4D5PG3rYTrjrHAYGj2rTNCm7thC4K1WHh5J9yYKGtJA8tWHXCf6Ct8pzw8LKMGAFF8AujbmJCPF5M",
  "key6": "3QAcpPxTT8cL59J2m9NQ3zorvwud9vn17W59VoBMdk1Wme5ExTfemS59UbKZ3i83EDNMe2AjgvSVjRQi5MLCvzj5",
  "key7": "4GUEQUKrAHMLqCb4TYCxWUui1kGh9EjBegCvaetuNLkjuYAxDhkPjxMAPuRvneqnk8HSX7c4TBx8X1Tx7qtRLBEm",
  "key8": "4vbVcZCUo3p2zYDLK6561qAW8pFYkXYbTfLwqx2ziovwfoESG7gvY68Vv36whKM5yz8V6g1bS3TJqyBQ6NBpot9m",
  "key9": "4FZxRw2phQ6nsRq9m8naVojXXVmxqobxc4XHsc4aasNstbUH4qTuLBRnThjuFAX9p53EFkNFW9caThQTLZQrGKtb",
  "key10": "5g6fd19Ej8fs8XgGjdYBinrBPwqAdRiR8D44aMFnRzsSfuXigwPTC3xt25xk6jaMSu6a3rroH7xRWCkHbF1DMmZT",
  "key11": "2v5t2KrMbCPap6MkzDdNCG5QUokPXxi6dR3y8jVitdjgLmNVTM3Dc4txdkttPg5EtHNqwYSUQYGWMbuk4x3twK8M",
  "key12": "3ixcAsGbDzn8pXDkrWcLhoY3AUqbToJrnXLF2qJoP8NuVrJS4PYxFYAjfDEVS22eFRknbRJab2UW2qyorTgQLSYw",
  "key13": "4Q2uzYk9vEJyhRdg9JUmVcRqeBL81RpXu5x3jSCeMS2wDCM2qeJ6yWoXztdgvxphznsUjn22y4myEWRDyR7L47wn",
  "key14": "4doQsLgcsqbFvGW4QQkQ183jL85p1k1tB6qxFJS4rp2QwyHSGuN3mnMZdSqMyYxpBYDdNWZwiz5CZe96oqD1YrPf",
  "key15": "33nyibvTZi9Uq22tku4eQCXQw4jkBF4bEFQMoqBscpA6LkA1hGppFLcaBsyywHVmsZ49NLV8rXJps9myf9kFkAcM",
  "key16": "2VhZsEgNFuxFr2sw5cbaPevxy92xxwh4W8PRDGS35gS555xDJL2D8bTZoU5qzgcW796Cm4UtGdZ2dajj6Q9BE9gc",
  "key17": "37nTFpHWm43s653vCH3E4rMwqBTw5QcUUz5RFiMvs1wfrc1iCHC5mRnwrgnyVV3S2xnvUvPetR6t5tEsZnndWdWd",
  "key18": "3Xs4jrHXaPDVHkcEaz4mztFbm7Q8wAt8mryDssPUWqErkNz2mKy7aierd2XGkKPJrntArv8ZWK2x3gBzNS5CQRj5",
  "key19": "5oqdWSVxCzzpfgDvBetsRb9Y3veVRQjRXERUcerefaQgrSaRonP5z7azVQwwYAThpdremVHskVFPpGsz38Q8buSq",
  "key20": "5xZ2KocpQg2SpXZ9ozRXFtQfCNzuDApeDADJffQAtnCs1eVFWpPaUcPkJNrZFWT3Q2mwJtrPLv3GEFjREjp7mrpA",
  "key21": "3SNUpchz6cRtniLeqGub4Y3Ct8RDyFYUmisTmU3vNsUUKYBkbUdBV5R1dABzv1v6sW5UFy6ErYsEXe6J8rQhu1nU",
  "key22": "3LbiLiFFwDzdfBd22xrB6dnQrmycUj7nr2FWRbAaeqFUESPqkUoqBK6bjyVdE5xFQe675sSDSJmF1EGPDs8eTScy",
  "key23": "2FFLM61LwYpymhSQMyEpHAk3nAecTEgLfwG6KGPSLa1rEK7DGndgEA6DLVGwcJtzyyydmQDp4nXBDNDQumKZfLF3",
  "key24": "3LFGkHGT1sAY4pcfbbYwtMqHxQEXJmhPpHzQX4agHtKcK1pBushpZA4dw8KtaUiZW1tGVZep5x93yzD2bmMEHYvk",
  "key25": "5Fb5g756T11Bn6vhF7ZbWjEnso8j9KxkJgRQdNzyryHrYJLuUW3ZsgfFoTLmZ1ELLo3urgBEe462dtgMbSoAz2pA",
  "key26": "2x3KYS1Jiq6eeaCWnfcRSDgVwB2fRbE1LP5uPLyTDEU4RFTiAvV1ESs4JrqvUYjBCY6fqsKeN8FkeFzJePRyhbnD",
  "key27": "2Yb8yRDhc5YtCgQLenvhZyWr5PDJLjfgv9YD4e6Jr8MDsCQKhb178EmA1ZH7S8G95WXVZM71dSYTqy1zcgd2tTev",
  "key28": "2Vbq31YQXNggUDaSFxnxMo4cTLEuxX5X1B4Hv9n7nBYRATP2P87sFeiCjU9H2Kop5FUJSYiqhCuRWzLtpDHwkLqj",
  "key29": "29oYiVdnsa9SpcXavd3d4fCTnDsGZeDbyE2jphksYS9eBEKvnZiUAK1tpaEQjhZxdDqpD8qLZNgYwEpRaYJEat7F",
  "key30": "2t9pSJ5KmeZxTgxT8JWWjo59WgzV3Ewu3hjMWZmk8rRG8ZJ9gvysYgUqpG6C6ZTQBViXZF43CMNZ3zTMaSHftCdm",
  "key31": "3WZgvr1wT4JPEUhaktEvmCZTCRVjBXf4LXShuixFTuzndkPK9A4cZnUjyfMuAuAu3py9GEcoEzCW7szZZ65VhJ2t"
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
