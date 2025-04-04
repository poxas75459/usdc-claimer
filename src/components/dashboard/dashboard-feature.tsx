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
    "3L35RaEFKKZYCY8UwFB3tV3tW7z7YtHsVRaiBuUrMmYaJAkKcMzd6TaBGJyAUC7b1itgmXVmXwYVJ4rLxU1ALMyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPwNSD53d9JRhCLQAdynKypBWckfWyxBGTsQQAzsUhrLCp6Qza1cqqMdR3oxFNjdrVjZtf8k3pDdzG8YrxQoiSA",
  "key1": "4mPuA9zjCRyhpL8iU5wbu3A11XzGTHKSjaNjraRcWFr7CaCpyise2tGy3QuFpnckcbJNT8PgxEbg1bURohvYjHz8",
  "key2": "3RJfA6xMrCE6uHGRLLStPVsJAxTuaZQBpD12EZiKKFtArajdEpxwd4Eev9Ac2E1HpiWqEEMiAkAdPNmLDu84M8at",
  "key3": "fYJJ17ppwWNfgSALDmD5cF3JXUtGRqUQv11tuAvzabRw4w3xSbD8zzMnpvzUXSHfXpj2NKgEy1FHUe582ZQ2Yuc",
  "key4": "7NRVkAB4aRbhZdz5MesoRWPaERXEHxfAkoetMpr7sQYfb9dnaAK58TcSUgo9AuhHrGJWNB9wLezzYM4d24gwraa",
  "key5": "3ioeZkfb66dKpT5GxBmhFePhK5g1BcQQGo973PCTKXXjMoAR1y6kjCcmM6ANKy8RRHLLR5gjX7N8Pp1c4N8rcHj4",
  "key6": "5uJynARUUWihzCQuKHnDDy2pQ8uD7PxnE377jEZLUgYDph6WNeyNeEo3PQTTX2nZtAwX1xUiGA5NdNWQGFqvVMFR",
  "key7": "wT3RPnjk5fpoHk2g4DZt7dfQ5JzEeLVziPHyfYeyE4dNC2nfsN5E4Boje7UR54TvEFJoimwLvBw74jnyaYsyYpF",
  "key8": "22Cc8Mbe2bm4FeUCAj5L89qY8yLadhBKDHDtYTGRgcWB9MZijBb7Qf1DYLzNpzBAttghrSnUSzqTcXYWK2DnZpBb",
  "key9": "4pxmKCg5BQQiZqaMLi6QTf9i3duCaomQ2ZEbQAsJryK5Ed2vytjyU1BhVx5V7fskPnAYy2miYXdMYp73Cs6Rz3oK",
  "key10": "2dB3m22m5rEUF6oeeJR2yUKnAYSNsdEvLZz9s1mSRZyWGgZN8Dy8kdySJ1waJQRewDqdLmU9xaGqMhtqjGFVrD1Y",
  "key11": "3ofbLqVnjotdfwYRkxmF95A916PeBBrsaZHi8YQjbTf6gPW2ErX8pVsLkystGPMLXTR7QVJQgDNFnWECxGRzcTMg",
  "key12": "XJBKwFTu8QkKVxTwfCv7gr9TNuEGyYd6WaU7MKGVfQQQeF2SCQEQHavzk4tdAgAtpnLaRWT4e9cZTq9pFJ9Syjp",
  "key13": "4VMyhGkYEhZXZpMfcbBKLoX5cjWDT6ABHjSetBFsx6SX41CXAHDci9rmzgGkXxM9ew68EXcw1cLYW1u9w7ESbA2A",
  "key14": "6mQWsFz6cYtKbfqTSx9knPp7mvpufw1bFmVESmmscV1K6kxUmByfQbbTXEcUETzDXuL8svLbcLA9WkKFfPUbnCU",
  "key15": "9zrXZg75vj8oym4vVNYvLZoXNTs4TLC4GUs7CNyxcsVxnfcHoSFY6abT7C6KrneVZyrN2z9hLPcEhbqYFrMs4nx",
  "key16": "R2KjeMEgvMirGLDtSN26vEcrmEWUaYnd7PvfAhAPmaZ7x6Bt5Fgj6iqgiweB3RnjHXPMsyVpGLY6AGCQcRZ3t8G",
  "key17": "41is4Na1Uka9WgcxpakGn4QRvVzG1ct9gK52pkAxj4Ynq9aafamNqCoPE2Wk7oY6GpKVYq8GzLAMVAKWZuHchbK3",
  "key18": "fQvdH5EZHdE96ANea4dM4DxZnQoxhu9DsFLXdi9LtcenKGz86c2XtZgfurMXx2g1YpYpPhvebSgsvXB4EpXiAJa",
  "key19": "24Q5zXN94ELceuh9bpvJHyj9wHcAjbT6tNLL1pRaqCkaFnd77AjEta2zDPZydiuWn4y81A11A1r8Fwef2Z72w3Q5",
  "key20": "24gh2NfZJbbTUYKJ7uG9aD9CYZKLokzscgxH2KDenMiqpSh1K7C1kJ9YTYvjBH8MkZ7wMRrQ6iw77TtSzJf7HDJb",
  "key21": "5g5RwrzVdv3czZhUPvxVzqyAHqJTdmPeWmaw2XsU11Lsn4ZjkEFQkMex85H1caBWoPPjSwbFdLHd1SKU7iRDGDLY",
  "key22": "5c89dt3bB56i6ez5YnQiKkUY5359q8WHnK7QZwWHb3fe9weg1fBffV8WNvajbuboPqrqn28nsarxuC63qF2Wk7Tk",
  "key23": "55y3B2YPFEf1R226rVTy9UY5ZgRBarX8KcMn5s59b3kZM9jdCZqwqMub6DfN1uafGawjK5fwU3GXRyBN5mpVqjvT",
  "key24": "2CGqosE3Nriiu2tviq5JcYNXFpzQgigxnokx4wnzDBhqf8rrfLqvk8jG1HvzPFX1kTocSfzsedhQpVtnACKo3LCp"
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
