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
    "35MtbUchmMX4kM3T4rxk7eg6U9JmSxS8JEnr1bxJELomRY37k1F4f5o4Xm5cJWgyS8J8ro8sut82RjseJPhgjCYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYpaZkrFbwHqQDbDjmFZQJsBcbRv6Bqmaadg3ggZzmhhzF11RN6YVLtfEQWG8JQhNxGwuxEi7o6tthz4oZHeVv1",
  "key1": "3dSFZj1GmKteb1pnWzeGSMuVPrQFvBQ32Rf1nJN1pp1TTLZR4HXaPbvnT1v92yTCVoZeYvsZSA3vQWXqUg1b1AEB",
  "key2": "moUBU4K7qLcfaq3ZzscQayFnLVZYW2hgXFrVRR2azY2ThusoNSTkRp1aRh2DJREiW8AfG49zygSTobReMP1iuFw",
  "key3": "49moyzkF6XS31wRs3Pqh5Y3LEH1pvKVZDt39hyWT8oRPJxkXcTYsXUorZXtumL3buKsVy9ta1wU85TfNrVePxWEn",
  "key4": "3Wx1U5UD2Kgftgapq2RXNEW18zQgywSnqpqLL9EPpQahd7knKQy5wteHuK45YebWhSZ36Ci5KXHtzngLakNuXAfX",
  "key5": "3BQKe1B7BbDtQaBp3DEUdPEAKT6mnBmdu8NeQ1BieHcPJsNCUXmCsbmPSPCgBB8j6LHwRNYZftDQgwvjuvv9YnR4",
  "key6": "64QbBa5iYHfKUyjEWVej9J4qstK7j2EbtuVQKwSpkewhBp7hkR2m8SNjxzs6WgxVGNsPednCAKwtbNuF3ZQH81c7",
  "key7": "7t7yRfb3QRtspMQDsxndUNmLVdDL5csDkJFYZ5NFkiMexWg583ozjFCBnAQj8WjYRb9UdXYFPTbT9PE7hTt5nHy",
  "key8": "3MMA8JAos5xz89jvXrUnELtmwpoVLycHHENoAM89WwsehnpiuP8sinkHyMgq8VZqsBNhz2XzddA2ijfPdBV6A1fL",
  "key9": "3JZKH3VqVvGDqn2mSz9cKx884uzaoCZg4oEmy3zKMMsfHM3w39vysKiukQQUd5fxatJMUciQZrzRtvo9cFJtVU9e",
  "key10": "23qTRDeD6cEbdtKGyFtNdxAvFNtJtTT1NdD2gswfSQrBxtDqtysAJ1BTzRWfu6aRShRZc7Whv65GP14MccEf7RYk",
  "key11": "3HUWWe9AG8L6S3DhkkiavamWmhY7n2rsc89ZYh53Eygcwig4BhbCo1u8j7KirsLKz5dJGQTo58JGGSz32QNZuGMT",
  "key12": "5syN7FxtFSQ5Y2QguwMavtfdNbhrjZscKU7hsTMZFw2E8HFfdZv7Tv3hbP8yQVTRfNk7NofnNc7YJQW9K54fwd6R",
  "key13": "56fdeqAhNfz5x6rgnYhd9rokDqQWVqHiBWZBFaUBf7L8um5739ijdyf1GkVggfeKGSyvD1hNyEcGUGkWAigjwTfc",
  "key14": "5casoUE5sXiyUJQDQYZTBpvhVHZGodgpiGLuSWxEmyAeSbJkYZp1eg59tBuEzCLirgxxPpDvRarfNqK8R3eg4Gyw",
  "key15": "3JqsrRaAWmgrt3CgYB5BvMeVL5nwJkhHJmM7TjrorWobNqed3ZBVaBX42GpYPFMToaFwW91oCvqb1gYpuy8kmJrB",
  "key16": "5DF2ukSK5XiuYcBdjrcuxYdJ9s9pu5UWidXcVHb2sBoXbacLsM17HzoKRnZRD5F7HoGy1TerU5ZMgNfuqa1UbGHq",
  "key17": "4G3iC6MUaQ6nFo6PpJZfBzzFB9zz6YpRqErmJbyFYXDihNUGRAQkWuzfSauy24CQahhs9bdEEZBcuJK3LxJbFYUX",
  "key18": "5keUqd6aUTtfdhsdTPV848RjXP84H1UL9uSmQ2BRUs2Pkp6YMhNxiifvHbATm2aQcwhWnZc4tDacJsARrxz1XKWg",
  "key19": "5G5hfPYC5a5q4TKPoeR7jPwgyGEFnh87XfkE6sfmCnYanqw2jjG1XTz5mMwHnQFhV3B4rSgR1ahvee7M5rpoaitk",
  "key20": "4hGzJakTV9AvSiCC8gEqNBCjq89JKakeqoMntUqSmhPiZYP5JuM2K3Lc6bqmXr1M73U4vwMX55AEzXBC9qfpYyqM",
  "key21": "2rJwobLWVbkd8eS9BoK5JQGUBw2KMUf41Npo1oLXrpcKqvxdmqouZRwk44vMQb8tNAtkhHQ3yHFhW5SXQcK72rZA",
  "key22": "5FrXpWeC63yAzzzsdcC74D2XD84oBFkqQmasU1h4UwEZc5tysV3yBgAt1RN2e7qgjVFuVa3WfiExnPbLQPqdF1Yn",
  "key23": "3zvtU11Eq8HTL2u1iq25sQWF3NDAN9rUBdFrMwv32tVXFdZTyWsEWtYCum1VJVHWUF6ha2JZkpwM4PEgvmDbz2eD",
  "key24": "tGT6rjzBCCY4JUNQC8Ttmw9c8baFFLf7e8b89H6mSMTJPWQJyEdNPRcwc4ostUEHgBHQyFrcecLhiNs2hNVcH9r",
  "key25": "4VaZuZunXj5zLsx7YYt1Yc3KcEZS528qhvNifzJ9BzwuXGVe32ac5hVjzLXYEW1VZ74iL2SVyiv5g9JrjumJjHLT",
  "key26": "fsuDE3ZzaEfaSdRqiQehhq5MhCJj4BGafR2sQJHdxuHxpHYhDxwNJpgbRLNz9U44hNwQw5ZSLssvVHm3KtbAAXW",
  "key27": "3mhfiGd4womcsHMcY1fuz1UCnrsYGACfKeigBBbbq274Dq7zWW3cGyjeRPJSoT1BstScsbEJxsJavB7g3PyUoPdc",
  "key28": "6798S936FBoRa5X77nDb4Ez2VtNVNFRMHbedAghi5pUH9zKvVBbgDEjjC12QcDPHz8ui577tzu59TfuebJgUHagX",
  "key29": "sTPduMCarUVgfRemCDEtPmJ28CJEcNcn8EDyuVomkpTx4hjxXYdzCDQy7DtVZvCmx2QLFdB2eUEyxHg6dukjmMU",
  "key30": "5aZZteA4F4BVtucnVa1Dd8QipPbUzWrEaXZ9dVZ2oeoQinb7wB5dHc4w6kKgSKr4NBXxtmFrKThkdG9nY5drT5xD",
  "key31": "3ekpoTHsagfJqSosKkNVhiydRZrFowMVEu84TYHrgMydkgxkYfdWY1Ga9eQWR6HBtmusnMp436s2U9UFDV7eMcaX",
  "key32": "5c9oYkq5sMRUE2CKLZKotZvxWBuyAvC41B7viAFRP717GsFHi42MuwxxyPxxEE1dvQp1H7eBsBHWWBsiMkD3csRc",
  "key33": "122f7MnHgiob3uXV4yV31MkeSrthQHSdCCombLqBJ7sQP7sR4TuYb7AqnbcjfKrSCdpPUMrJyCCMG4mH5ugQurtt",
  "key34": "3jRWn7cc5Sppp9oqaQtZACDELh6fbUBY9tGUFzgcnUjYeXDXj2V3GbavoCu4tUSByqzYXvHJ2GddCqzRAXtHFiuM",
  "key35": "3LN8XfLLaLS4h2DBtDb4Eg4S47iWxRwU1QmQF3TQ1kFudbQrtW3XhdDt5BcMf8xiWjFLcZ56DaqvdPMw3cBtgd5R",
  "key36": "4UE5Q57mHS7P6RNqMD2839XbcHv1VAnP2W7VLpVZNQsM7gsDB1N352eaEd8yv2gjXE8NhdUt5TZnqTH7MHwhyN7e"
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
