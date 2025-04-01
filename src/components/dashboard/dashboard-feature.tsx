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
    "oYCih8ky5YLvupgdyDvvo8AeUDmvRmD3J4Qk4kbD6nwomQzcd1E9GDK4ZA38UqDVjNVrRVC9yorRm69RHXhGfu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nsa88pGFXufXHjq2iMu4WRorokSRxJLnvQRk42zxaYkK6r4J95rChbeC2RMYkkF4HWvCah7mg8o43DNpgLV9GS",
  "key1": "2yKNNyyxp7q1AJDJQxm9tGKVquK9xQokqJ4vcM9RvPHBPC9KM9P1crkfrRWZEZUXAptjEMAvZGqptPyYeaT8FGEv",
  "key2": "2HajoUnkVFTdAn4CLcV71cGMmPrx9UHLQYHDyVo4hNqsTTucAmDGhZxGpAvMCevvYQLNVnNVXhL35NjNiwsSAXMa",
  "key3": "6cM6RbAe1vgcypeQ1fvYQwrqx15RG5DPQbNYg86XrQ1ifJeWZCPvWzX8mqj8zWw2LfjJLdsuKQGXyMuJs1eziC8",
  "key4": "4NHMmZyCnmeHbve6QWv5Ba3WsRXMtJ4AxqXfgotkWHjfo8jR1sgxPKJ5hZBnrV55fdSUpMdr38uUPqd52faxexHJ",
  "key5": "5jQJ5BXQjmxdRJLDtsQA7HwcCyDju9N5W5gVo6xqtKUYSuPkEqkpLoA2oMcNedw5mBkmZjqAy1GjN14bvCfKxLKs",
  "key6": "uiWdqQmYKRRPB1nEMqGMfQovCNheJq457d27rQQccxFsHhyDzhwtzxvTjZsoF6UmQheRjhjid5enYof8NY7G3fr",
  "key7": "3AjBAeNWA77cwxuRYWMUQzdqVhoiJdsR7LFYFQywryipd4TmCfouoyZ16NdVxiSqwC9XbpUG9Po5Y7yYBkxw8R43",
  "key8": "2FTkERyrAsi7goquesRB1Bap1JLGrMUoH8xnoemg5jZYFExCe7iekpwATdSZ3HDyMBT7679Q8UDjju8mWN8TLbrZ",
  "key9": "2aUwCmpwa8Srfp5yxjqWwXS69XDzJjCbdTKjwVFPk7WDtKmr7cKu1WDbSdvJ4SADfDJWC69oULj3jBP4WBnconeD",
  "key10": "5GZskfDGNp2BVYr6kXwPDEBBiMyLDf7DWLjQeUFFZ5nRCZqcEEnhP7RR2QU5bE5JdUWJ3ChHegfF9qC7Wn79MxjJ",
  "key11": "6JWYUnWutpbXmhtgwRafJ5HxeiXuofht5ifVUchP6c9GasMkwUmzF32XyTKGADwc5YnRmdffZ9Yz6QWudHGw189",
  "key12": "2uEG6DSvxWjQsgw7bwqr8dHnzYH5iBjVpp1CGNztWK2nZVKojADq5jb7kdYvT6T3MtWttmx9urKfpf3JN681dt2",
  "key13": "5u4bvtHzFenFkJr4M3gRQfhiQmofdaWdTEHKRBwJYFFvXvhoWoQPgpQMtKPDq5EbC2FR8XqbrW9HQXK71gLaS3J6",
  "key14": "2JZEQwhFKhe92a6NtiwpGWoM2zZfKc2Nuv2859Fw4cMNwEkoqPPFuPnQo4MD2Zb9VMYN2o2ctMtYJkkjSBPnSfpp",
  "key15": "2B3QnrJH8AEn1Z8w7i6TPBhZMPwGjqTCjQUAH7fh9xwyDkDza1YtCY3QmgeJPyTRBMrTiGdu8V8E8SL4rJXEKhCB",
  "key16": "4D94gTLiFoXCxmefTWvCPH5Es76tp7zGzWi2nttz8zBL4deWDfEjeGDBWNhTJznQqJfk2WTiDguggjq1tFNEmco8",
  "key17": "2kr6vgfMFZXECt4nh1G4C3F71p9Sh62oxGNAkBD2DeuHdxEsdB1Hu1mjnaVSWvqDNkZbcVGZt9wPGvCj9pLTasRp",
  "key18": "eQoeumA3UJUuXQghX2Gw7QADmJvHa2XJ77QmbPNcQx8S7dBijBz9E8tNqoX6BJ8xeFrVT7uw5Jh2rbsRcQGVwz1",
  "key19": "4R95PgzwHzzqz7XKeNEFvUbkrC1Y27WHzXVpvFkicK9tcYbQGwDp2AhVxP63Y21kEoi8BrFjoQYJyBygkcVuJiUx",
  "key20": "4feheaNqqoN1sBCF3E196Lv7Qp7zcsck6TbYa6bewpodNcRd6qFGrPH9kMEKfkehBteaispj27ksSXXBvEuSg9iF",
  "key21": "2FJkEU9hK2SdibowwmCmmrmJVhihEeWd3kNDWvYSrs6fmSNjb1hpS2vFJ2KUpuRwYgJRQ9FusHtehMqdR7iLA9jD",
  "key22": "cx2QFqMtK9Zdu3VNjUAn6jt52g6Pmnfu4WuAsEXq8N94xAxacQBuUBACKsHXqF9EZyb3UTcEkMSMh4YvT5U7Kik",
  "key23": "5D8aKKm2Vy1y9uTXMzjbNkpj4tCmv8RQjDpdSwRxPSN2taesGJyZVyQRCHFeZy3E1PpxzogABMhhLG9pg63scAG2",
  "key24": "42rg2P4dwRDNYBcKSi6xdxH87ebXHo2M4AVXebjp7WpWgaNvUG5kzbqmhbPW7TZiTQvXp6xHsW4xsj6CFEWio69s",
  "key25": "3Lhz9kKaEsBNvqDY5tPH3gW1Y7SiNmkQspMCaeUnqUK7g72btS82RSBvnphJDudNFw5axUmN7U2tvNNsPV3f3Qov",
  "key26": "3e12PQ6SbTk4DT1iBi5Q6rNt7kx4As6JDbBZ6rMxhXVouA5FMTBEtbi9GEb3SgvrY6fLpsfNd3PBfjkGUzxkRaQa",
  "key27": "2Q2VB5TxXPUCKyjVCGBAqUtQFaV48L6xSauYYHs8DcVVG3haYxL3Vumjn998Y9PzKuhpETU73tJwYdo31vUFGoga"
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
