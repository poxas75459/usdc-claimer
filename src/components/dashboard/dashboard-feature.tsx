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
    "3ovS7LqLepPFXWmqpTo6xGxSc1Y73AeepDfTmhYDwDma87SSQdkncdD7wwVGoMHnWmEud3YygcJQTKgWrZK6E7az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THRpqDzond622YUNRaJYixDvLgoAypS61Ksc8FsRacj4fUGrxG1xQkxnLuoiA961yPfjaJHqQLPeUuzxR5WBtuH",
  "key1": "2bsgrH384LbTB6JGS8kACvKAj3vEf86Qr8yzWuQ7vXwPajz6uKDMFqS9WKcFkmTxsobcdSomw2d57w9YBgjkomLu",
  "key2": "3KedWCsspSKeq6J4Joa1p1qowLfd5tPjw9FfwwEgEPuYvnCYEcSmNQdFsY94XaXxm7pVDoyhAyFbLZn5gwy1LDhs",
  "key3": "3uEuxXozhuiDzW8XUJ62BHTcbcB56FHckaEfSeQiiLQuqYrwZBLbgS5RV8Csr6796Vfiu4a9khf6Ru9DkaHKU9C1",
  "key4": "62mkYcLyGbm1UyZNhPp89ApLrsVcGrHzrFrP96ZtAmcDuBBpFYcwTBPFSxbeJf5YuQTn8C142fQa6TNBSGujek9x",
  "key5": "34MzJwhcnuqsBn18Ksq7DEHshgaxA4oqbeovfjbvMNtjEimT3g781PQhodaNZmNTLrX84s8dD2QyY51Din43PCSF",
  "key6": "21XTsYqXVg4hRcCMQNwdPSv5oNWvzannxkWigB88PAryRPDxptnLKvvtgEA1BxJ7GxpjwY6bsPznmdKFuJiyiQbv",
  "key7": "4kHEnJwnubgXhgGeQ9UHLbJB8NLeKWpYtqA5z2FxWm6qNYU6gUNxzqzsXM5xnxv85qxEJ575JXptjyAgZaq9B53P",
  "key8": "5DTaXP9nuaUUmB7BtbD32UomRGE7ctEG7BD95ePAfzMo9yRk65wE8e1AzEoTpYL7fzBom9WJEVGPEvTFC5rd8PuD",
  "key9": "2mEW5sWv9Tpc7bo1v9eBrLNYYVMhiBv3MMYnvNaKo1BEreb1Lrv1SLDb8rUM6vnUTZ2uNuHQMqsyJWBPCtNGRPbW",
  "key10": "3LehD7ATJKDe5kQdvDuRqSLyprE1dvdth54kvkNd6fPNwgLzN5CKbsH2xu6e8RfG8ezDbNjgmBHHVhQP5piJBa2i",
  "key11": "46qpRhczEZoKvDQ9wV4daEpvW4phsiaM4mcMQxe3TkmTvhEmf1AFH67ouQkc8DFoPsEjBtvqfz2LhVA1Y7KG9EA9",
  "key12": "2jC8M2mLJHtwFmFReAQoQgs6HsHJA3Xki969hLiwYmkhmXzTwQWy6ewCJ1Yp9v7MaDdY5J5aDoj5kP9Jnjz9dSKH",
  "key13": "3s34hqnhpGCqxkZDboq8Zdftg2yfhB2mjnSKzsr6v35KBmfh5x1eB5pSeN32KswpuEDeaDzzCdPMYyj9662C8dQz",
  "key14": "K5Bo3FWyVnGFG7KrRN4Kf1HWLsazTbVAkntzYwLZ6yZmrUd9Y2aehDu4aPjZJ2DjbZEp6BaEBjRZ4145T79Cv2B",
  "key15": "4meBGBCvr2GhFWnQgRXecgUyfwmLxDAer9BZeD1c2BPYyQnR8xx2REjjTsWuswhB29EBHDhQuAcSmV2pnDEj6eiY",
  "key16": "489VKVe8W7HW1tkYAeGa7zAvfSrLfJfriPsUXW9FASvKMXDg2SMLt1PMXV8oWVwiw6CgkK7uTAg2rNmNDmPVjDW4",
  "key17": "2gxG1QNHXSMwtsajB5eMn2LR5XzRfB9cjC5R9j2TBfzvv95kW47usPDQKMQs25oZkRcz33ucgSHc1q12ci5gahny",
  "key18": "41AveVAcr5ydYs3HvkJPgHnTYstXekLKqAeDYHhQttDygTZ3wR2TSxPacqrpwHEpyevCrNKGh16MZpQEpDUv9Kv9",
  "key19": "5iAKYnPrxJwPtKSXhqvCNyajoeKL2Bb7trnXWiM2AMF5EhQX2bWqGEWQWpCBZ28mJkN3cjhXsa9QDh1k1dZ7Kztt",
  "key20": "5uQz37PLap9MumciXiDasmyDYa6F9SQStAXfTeeCfNtKMxNqR9F3ySdTVz91pwb1uN37JQwGLGoAgfWaUygJbbSz",
  "key21": "3tFchCoNWz5ARU3mnTUuUFXGhFZqBC7QpfwijEHZMV6UdmjS7M2HMnCHq5ZmQNGcs33VYEtmVQYKsvKjA7AQAoej",
  "key22": "5qwPdMSBhbuveStJa5zgWEkwAquHLR2jSjCQQ4eiPoDJ3ZzzVLp8djGaSnrKkf3tZkQqCVCDaU6vn1y6UWMC72Bu",
  "key23": "4HdnaVMv6zC6PfviYSKTVwwsBcmcJKRsTeSHXJ4tKpVt2DwaWLepa2xDfQH4xcrUgzBtY6G4Vz9JNr2C5JuARhvL",
  "key24": "3NE91fLd8ZAHdRBPZe9Z2u5KGd2CgCwBPyYEaE5zKmWnwGR5TdfFaoYmNaQfskw6u4Vmdow1jzoa4EWUE4ggLT9Z",
  "key25": "2NhV7QuKDmoPZ8biTx93B9v5eL3Zv1UDxzKSEo3UVp2RSboeCGsowxtgnU64fojCTJEA8wB3Xj4to1VrhDWQAbmp",
  "key26": "5uxL97xExFfSp3eTLJ2G2AgmNBPkZ5AtmD21wtekprNPeDEAUtDTMLvLDLWWZPbbLBP3oKut1kUKY7T51jj57GeP"
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
