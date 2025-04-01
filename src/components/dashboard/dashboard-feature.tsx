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
    "2PDdhPXwoDxh4rHceYNJrA5U1UAocueLvMBU6vTxhj9b6f3ZtDfmDqdhaSF2PQBi6kAefcixe3q6CYZgm16gHA6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TEgqMgeF2GLDLncwJ3YKsBYPCBwvneG7SXgrjCNxBUCCeX1aisedK3UgoQ73bU8i54JFLnMv1pQqiGmySvxAmry",
  "key1": "4jksy7FowW1YWja3YNvM2g7PaERQZTS6haMTfo5jsJigGtK5eqiFkFPPYWfGxjEgS9sTstba92pyD6px49eBEmf2",
  "key2": "67Yo6G5gcMsB929S16tfmrcAZmSAKAVbdsQJGbyx1ZT1k4nQH5Nf8f6kd6c6gGHhpej9xnrG9GGLpPHfZ6oqSjzu",
  "key3": "4PoVm1mjFSZ7vCaQ6SvEefB3YGMvzaxrM4VSMJRghnTY524iTpu9krtq7ApuRKmVZj8PEGa6sYNkqEG1TGs2pwJq",
  "key4": "2eKHSX9JdAiZVo7JZGe9iYPDBW8LUofBYmSqyHDvUwrnc5qUsoL53AvPQZF8TTqWdHrXJQGhtExTwPZA4XDpPkHM",
  "key5": "4Z3WBNKJYvkT5SDDG1iUny29P2uf6HZgnbgb7GRHyRPrw9ZG3FgyJHcajby5tuveNFRTYHZez6c5PdQPMKL8m8G6",
  "key6": "5pkNCqqKEhawSbmZSS1SFJHe6DvxiMUpXPNGZxzfF5FjJ2HB5F3akYezGXeJPCB1gikrFjdjWKeT2nGJtL9P9WSt",
  "key7": "2aqXKhqnbgrefWXD8JyACkGKj9WQy3CGCZLNReputCHAPmdW1TvHPrhWCic87iYxnbBzAG457iUAiAquiwny6mbw",
  "key8": "5q44tDSNMBdQurhhzHRbEejj1w1emriKuhn8GdZZxgZ8ckhWEZfNapB6YjL7bPcBW5cyBzuagm5dQcsKo1J2eCXZ",
  "key9": "4kxmdMFF6obLxhjq5uqGuJceX6tJwgPW4cgnyJSEdaRRMPjU8GX94oMopdqvP6YX9irahpv8Bdr5vVGHLdFceW8U",
  "key10": "KcvnWxLCAMSdg7ErQhYxSENTj9v4G9rUnBwn6xneY1Baw6Py9TYnr6Sjr3nVnVfXBVULqkYxPAKrMiFGpu6W8wM",
  "key11": "41ne1J4qtgB6zrD1kXpPJ4JfTCeHUmpzgTW8hyYAYDRp5vDVCoZdipP4G5ewsCjnSefxVA11WUydqp2hE1QTQFmq",
  "key12": "2sEBATVa6RRVEdv6bvgiTAE6ziyVst4nVTtnm56NvkugN9H5C5j1gzwhdte6ZYiWyHbzdvAZBR8wbwKnkLkXhkJN",
  "key13": "2g3Vsvj6BJWw6czegBvVZE1Qn3xvuSTRzdbtXHSEe5NEZbFqJCTW2FBYK6Sb8H5ZdZMyHboobhKCnrxvhTZNdZCv",
  "key14": "u8dwc7m7XQ21FJuKm82hf3YveTMG4NKc1HHfR4bq4u8P97u2vcFhYfJPZdyFa8LWkLQM3QwLtvNem9yatDZSmWg",
  "key15": "4JM9zBnuncs4QvcCZSnEcoHdwsPPdpJ5AYkJWyjKrVfZuWfj8aMm1yfemvBEQp6Y6pVFTDvE1oSprvYzK8WmYdE9",
  "key16": "2zFNBBJkQTxKse9YG5bM3zuRJyimTe9EQGk97aUKmUwXiMCggmCwP2pKYzyub9qSFBSQ854SePK5JR59X6H5Eueb",
  "key17": "3xnFKPv9o8SVfAwVxfXmKUocbgb2sG34AvzMk2xs6hji4acbUJPin4yKj64RkZpNPYzUnHKcpVrBL4jSCAkJjbM5",
  "key18": "5JwgARCvrL5EjfjBA6thJ64skGXEYPjF8J1xYozaZUGYxUsJdy6SdQWJm46FxJFuexzb4Vognb6vRUkhjRuVgirJ",
  "key19": "2L5XdLm4BUyz1sHJzvC9uLhTkXzckH2f7TXZ3AVvojfAG9Pg61EmXfuQ6CfbEA4zWN8qWqWRroPHaPzUTxeqp9YA",
  "key20": "56EmXwBHkciAEK3YmFPALn7D5LzVVLhRc4QZPJDqkXuy2549sif5C1nV5aLf2X6f7wbBNEy5MhqLvn6zB5xGahNU",
  "key21": "2Wy2YaLPirJwPQJdkVYn7sxsQSRZr9f9vnxG1iL3FvNTF62uWDhL1LURd6T1yz9YZBZo2NoKBzX39dffM3WZquJp",
  "key22": "2BYtxqe3gahx2XQk8u4MxgneobywG217mwDreUbj7hkWLPLmTEmz94R74amVUuGo2ndTdvCgXUbqWjYgLkcWu3Az",
  "key23": "4t4seDGXHzaBTopM3SV6i9EqYjqLqm2C21gPQZzrRubjugkc5yZzftrn1WYqt2o5CDq2CFpdYbCXjyNJWQhUVmEn",
  "key24": "4AVCUxo2UVfcFkFpj6vEsbcGig48oc63XnmcRfmAjSLfPkviFd3rCQZyuULgYe7XuYCyhJiSyMH9svuM5GbharMd",
  "key25": "4f2s84u5k7KiWRCY6wkmbyc8huR7Ksyj72oZBpkax588grCN1pesVhG7diiwFAhEZ1Vct76Khkk9exKb41bzfoep"
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
