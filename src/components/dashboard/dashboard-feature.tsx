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
    "633D7DRHEbxz75bTC2ffZ4hTqKNri3gC61R7aheKCsw5NytXpuYq1sNkpsCeKbi81iuDU3no9JLTzBomhWTZeh82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CK78EX1bTSiRtkDp1RJooQcRNpTiB4XYFyx2PDv7nCggLYWkz2fqMXA3H3vd53T6cXgzQhWev27CmZoioHunjev",
  "key1": "g9G6kpjbgn9bX1NYWutWyyBeoG996uKGFh5mYytXD6KXGot6TqHesHcKP8rr9ronLCHReUiQ6uqemBBF99smZPU",
  "key2": "5M5EjcXzrDMyusU2UcWxzkGa6xWYUALoCvDBray9U73S4DVx7FJ7MWhwGhULvY8ByjDz24SzbeWbUd1re3Up5FmA",
  "key3": "66yPKmNyvtLdiqAvpZPtq2U3ZGTU4KdNpVNNEvAX2gfcrNLcgubPK5VRpnfrgR2R8yX6qRqR8ia91K1rExwyqFG3",
  "key4": "2oGNmMr3zihUgsFakm35mTsVphrhba9pERrnV6DWQUNgEf6PDdp8PQVAvvpiy4UZvfKWfy62CgeJeu5pZLmQUXtP",
  "key5": "4KpPKsz1VKTDf5T5f5PDnpBfgxmQ3gTyXYsabbMVJUMuz5pV6MsouRZ74AbBuDqvs9YHciaMzayN6Un9E6wouKAU",
  "key6": "4JKL28yCBisyuru4pD46iahyRcqGMjqPs5ocvNkVJ3t9HuQGLFzBRY1fBTHwRonARHohuh8Tedh85aMx6xzXTLsP",
  "key7": "24Ynx4S9HtyWWnKfRJsjuB4zdmrGW39gNAJprJXSvjRa1QLZFJKg8NAPZNvGT1GzHhhEPBRSNDQMuweuabrVbthR",
  "key8": "sG7hYNqwGbLc7J2NJLZc7GWcGFwmQs8R4J6vjfyiVdpYfM6QK9dRm6qEYpZb267PNJ8oJpTxeSX5BQJh9ZSdZY4",
  "key9": "2QZ4aaWepsJSBmY9CQdohXUVKYJP9emcma946VJQhkMHPUBwegMDHNY9fi7ZKNvznCZoQ25Ff4CWUcCK283NWdSf",
  "key10": "4KDrtY5huiCWRAC9Rh1TyLFYDUpifuW9zLty6XowHiMCD2jJuLkoNa4yBPkQVFHnwBaopKRUb82TGSBtEsHVGX4m",
  "key11": "5jWw98oGCuwP4dp3zaWjcXBTWLE9M1rWm2M7KxojnpK9o5JiTPBxaC66xTeFNe33KWipyfGCQeoSYTPFvd2AGiS",
  "key12": "3jrQFhtcsFQ93MFh1nAbNHFQib9tKwzn673oY7F3WfmftwCrot8CGJ72zW1QFYTLdd1h6urneGqFHZTHjyvm57H1",
  "key13": "o1YjgRGeicvL4DXAq9y19Nt8xJ7PHTwUXoM7bzGzEXXabnNMzfgYk3WkpAtgQJbk5cS7KWgCCSvztpbytdqvH1C",
  "key14": "3nwpjEYKSLx1NgM2acVjcpqfaTS8t3g9X2MkFpcQMk6WbYdFsuwTM2x3AUJ6uKNuAbrgYxe5FoJss3PF7SMqKAvR",
  "key15": "4kn3LSNdiZA1gNTFuDtotW6HfzqmCZenMJLwSfa11NK1oMH3yDFREHJW4B3qqj3jrcdaXBEyBECVrxyDUumwYE7R",
  "key16": "37PpM7YG6czZrKQ3fQv2K32S27E1tx4FPpBdLkvLwMK4GrW2mZmdmmKWKA2P28AYU7px6yo7Hfuna9nHbEyqyCRw",
  "key17": "5bBf3HxoPczMT6MJck67oov5hayJ4fi4nv8UgQPVSot4nsg2vvUMVN6iLSrZhbVeLk3V7kkQCS9VbZoic9ctr2XG",
  "key18": "2y6kmd5gwPYqMD6odk44zoCxCzfezaAjXNKhAewhkZirQFi2b7r9bzWyrWXrRTnmrbSZ2dXtPnaKL5LacxYFFKEm",
  "key19": "5cmMQhGSjRDrCDUuycvC4Y8eptEUmAn8kVBHVrWXFdjreUShNyx1bN5qeidUin7iurryzhmhK2dAunYPNhPyDJoR",
  "key20": "4iQJN9iQdRAUpp2ADPEkL4sdKjRvVAupAjHtsgknaHBJVwz5YTvqDTEzMag9brCnyj4pdFtEQwRNmuBGJ5MPvS44",
  "key21": "3x6rNa4DAPfQEkv26EbZmfaRshAsjPVJjhaLQnC86VH28p6hjxtTF61paBr4pRxYCEMjcnqqastY669UXLU2zJfG",
  "key22": "2tYR3K55ohYgfNAdyV5NbZ28Wa7TNJzHAEj7vsoGYCs5ZBrmCrK7M6mS1JNQw7KxUhnDV9CFfjFvXnhbARkfLu8j",
  "key23": "nPotajhtwoBMb9KoPDZVnko13dstjhVW2h33diVrnjN2igEmbqBggNJS9zMov5S9FNgRtEDU1U8sRThtzESuM86",
  "key24": "4jAPRgKZ6uMxdwZsRRZeUbkSoaaznJ5QV9XBuGgTzGpMqaLejUwZSqYBCYgbAbdU9agLGvTNhakZurkm9UaLKEYF",
  "key25": "5ArqxkFDUkyWAtwgV5KDPL8uymju7bLXqgBbrwhxLhrzMphqrJLejyPGEyyD2cwBvMWvAedJJProWR7gFy3L3jTJ",
  "key26": "3NUJz32hjXFvysCQpjY5DjsvVkVdLih7D3X4zxAkFsXJvy2RgWQWsowPt9UT6K29nkM6PPLNweei7viJTYYyFEPt",
  "key27": "2K5ZUL7yjsr3MdehptbbA98MqKJijn3hVi4ZZqAXCeJDW842FvbrWRKSSLmFVbccKXiRftJQWp5b4Gpg1BSKNc5N",
  "key28": "3QT5nzkRzEaKtX8hMjGTJi4ieMTNAH3ZoEv2oMmmKQNyx61GxHtgNdbyz6Y4N62942HayZgdQmq9Eogq4P9VtmoY",
  "key29": "36VptQeiVmShjcNjbPHr7Vw24dCBjRFnC1SSkZssP71pDNoLRP3jFYffEbMzS3csTFYPoq8EuH6m9ys7aCiwJSdN",
  "key30": "jqEzUsKUP5zvHrJh2oV3anD9Gipma2othSiNkG87Dysii3zctm1ctj2d4rT4gn8tHvzCJZfT83a6Se3S9LPjQX8"
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
