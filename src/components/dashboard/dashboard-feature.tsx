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
    "3do8DsmaSk2F4aLtrN87Bvr86JZzyQmR7LoZShrHSgxkMSia1rhUGjRhDvhsWdZQPeZhppwYZkhBKcbDHBJR6RV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2a4g2QBaowHJteHg6n2HSYaLXshQMX7ZoneYX522R41PrTWnCn65628MFhqCcja1MxCQPKzeZBJ2hesPh2A7wg",
  "key1": "J964BVWaBTCv2CUHhym3mEC8K5E8P4eA9rxMK7qYBoQjjqqyTsK5d5GRXFQNrHJkfceb4TjehqZYVYAxkUiMA3r",
  "key2": "51yBxQboNqnLJ5StUXHLBgPoMf9fgqUsQBrMMVCt5rmAP8ZifcCi9mWUjYedUakPTZV4DgW9ZipweV5bMYQ6hRe5",
  "key3": "2d9qHw4F1rAvWkMWfofktq3iSoCUJNXjeZDhD1mbiPf37LLrYzYs6mpDyqeJVV4ZwVWr95bdeb5ez9ia2GhZTJ2X",
  "key4": "htsJ9aRLZa55RggEQD87pAdshGkNZP9enzf6BP44E4chUcRAMnF8Ja8ANRm6shtJrX81QgWYUWiS2U5GPvmMzHy",
  "key5": "2q5pNGsPmcyhDRMwejhC5hiyXLwSnXsoZJKyHWNBt7QUqGiiEZHcbNurfCGYJ7YARnKYJBD6AVqjdbVgYbQJVPpg",
  "key6": "3y7pPeeu4AQjJHKXgfLgxPeQka2dRVT5kdih8cD9sv9fuxhx9yeew55WDGHaGFWMXhPfq3497XVLYiNvZNVfXsMj",
  "key7": "4WZb6npuDrVvx1g1yTyLwRcJjgyQJxyXE2z2pxMvahF6vfSJEE6RmAMAyCvFjZhF4dwJepQsQAjMrT9or2R5zwf3",
  "key8": "5L2ZbYzHkuyFsxm3frVvRUN52Rn9eH4hPtVjpsDY9jNkvMkWnnS1SXSDz1PjrakAbTXxQrSm1j43Y56B2iYkbWTz",
  "key9": "nyahzpFFpMP2QNdsu93n4kddDeQgnpGFSS2iNGRebK5WuPs7fWsrqDdCdbuTZcCVyJNwMe832hUe7mweDuMT8Ja",
  "key10": "3QqwuSDj35v5ohmLk8ZJGKjN4ykUPihd7iQaaU1vaY8j5XDWNHd1t5E7sMQR5GQXGPajXAcNcjc7RjDEaHdLZCjj",
  "key11": "3tGRm5Lr8MHpRyCryoGvCgVTkqXSRwuve6QBivkA1L8ygTAa1y8vSv28E396za6DBBuQ9fPCfq6h4vBJDtpFe8MF",
  "key12": "4Ro7WgfR31EHHDvuupm3YEgkqAUkMC732UG3rXPyXjgsucBX7rE5So6vHPburzuDKcSXu9fgmGCmwp4uwwfKrFaS",
  "key13": "s2po9bz7DYtgUCjyrDUuL3GNeWjBB4fGuea3TQFpfYw13k4my4qLTzoPf3HB7hC3ZXy59BbgkrwGTYEWKfGK7zM",
  "key14": "PXj4KmyTFrN9vWt7MncaeoqbCZwo9xwoz1G2Chcf1JheqyCQrAGGVtQJYwsjWBuxz6eLTEdSTwrsQCprE1d42M1",
  "key15": "2vbFDjSbPZ8eDuKXsJ94eczzQyXzYCzsnpaDWX5k5oDep288XzXf1T14HB44K3AyTFukFqLCjcVKg3X8VL5RTgCs",
  "key16": "3dLzJgGjf31yDkWrpRts8iV19ZyULeAyiV7PouspU1Fouj5tbYF4W8B89PzgdN73zLTp6hNSN77tZXePXERunjfM",
  "key17": "3z7hx7o8QWzVFyai4bt3CMPwkExX9RAZBsJcb4z2FFcVaA2xeYHscc2Zhinqk9aDz5BwmoAVmLZv3W3HHhQQG8Uz",
  "key18": "3KrXF5nSqmJajDoRGBv9wXtD4sseqCD2vjq4viF15WwBAjCr1L92W7XTjX8KKzwAr6fJnGYwXLgfDtHe9ic5zQYc",
  "key19": "Y8AKKxPaurgDPnvhaynvXaHAFrFx69EqTChUJWLM2sUhZxpqW9gLKLAPh7YNYrJJVEGURXAs8M7L567GFqbU2hC",
  "key20": "33dJiRzp6fhqFskoaDwco7q4ygcmgvtGyHrWKozYp1VbsYRXH3tu2iBqYmfKoYxGoUKjdqSsQysWp19P3JqKB24j",
  "key21": "5WrYR65d2Cz86CfSvjhxBWauFpTGGmv4BidRGXzTeiAQhyzMFZLdYHMTLrJLrsdevNppMmziQ6oiWHJPSMHjEGgd",
  "key22": "iqWzT9MKTmSa64vFn9oWXnEHYqR3jj9rtXPkXNm5EMZFiJoc7LT2RVdfX1Ls1Gc6Uujqt7s7CU2Mj3bAuW1E5Cf",
  "key23": "q9y9revBoHzySxL95ojnau1dz4T542ueufqGB8wAhJXxzgjzyuEK9CrvMgAR34PVxdEwE6gcySLFLsLtULVrdnk",
  "key24": "3C82AjcQHWqdgzPCzY1oGWGNrpS6Tk8g8SknFgKsmwFMau4Lj6mogKjdyb5kzr6E73Uc1SfbxQPLw3wemTyrioTa",
  "key25": "VH8M283paCmP5kWZfvkLc8BXGUaE1M9yThpXSJXmWe8LMEXtyi7xqsf5vhDNfRUGoQDJFQmsamFZoYkQPmv3Urq",
  "key26": "3GqNqH3RYSNcX53CTCbs84ifugjdvQ7fJnrmCwtvNs8U5timyd9NNidUEhE2GvwAXKLeCAXVFq4rfmaxjPQwM5pm",
  "key27": "5taR2PzpprLmkvw72uNQwtvHJUUR4gRJ44hPoEqtvPsfzRi9XqiPoLcEGubzpDGXKVtAkQ3UK7VroiGVHxWvuvzL",
  "key28": "B9rZF92sgBHEWySnga95Eg8zpHo7gQmLx3d288UghQ8yupZS6XraaJaq7ypxfLyVx6kxeTf4c1Q6XBFRw6bCSHH",
  "key29": "4GGLmrJ3hKngPCNqukZfDswjQ8Rfyextxgx7wZ6rdRBJif2S3BwyHgVQtjc4RuE5pLQV3s7eeGWR4GQhqf7HYsAo",
  "key30": "2pV5JfbcGMuoxi3rxbzW8ZcyL1bVPTTSFMjg8VhPZo6g3EhYgULmRamYjZfBYqxWTYVT8EhUTrw9i3fmJEarXvom",
  "key31": "3FG3JWtihxs3qrCn9SNZdBS2Fth7TWJSSwB5seNzG9BZgXgDrkEMTrBcv9evtXVBp4EGaig5RDBD8mE5dTG2nje1",
  "key32": "3wFdNAfcGnYQKuN87zN3tTSPyABaKfALsPaZLm9AYHfFbi8TjAFsqcsZbaN7aKF5hbkDCQ22SgM8YwPznEDwBUVp",
  "key33": "3L31nWRrwkCTEUUAWqzdZqwa79vYmgCfGLYLz5qavQT5GW6ZRCDWy8DVDZ1p6swLe2YGpc5NuAxpjHd26K5kUGQF",
  "key34": "4KsU7YNUA7Wn9wKsTfcwCUzw5nT9pHnEUkHjzGQz5mfrpNvFca7ym3YVmtZnoGxEstv4CHGPokqBM1RxaQrRYGoo",
  "key35": "4Ufsd1gQrAhqxz5HBA3ZN652hg8snfyh9vKV7iEw8cxSoK1WAoPUYUUZHBcMLVtSTMKL9J33rbnsSA8QChQWETNk",
  "key36": "2JThvBQXKZ1bQZXKichkQL7UuGJFTnzocEfio1wEBZgjsHaiqk6jZMEsBjnovcrWCBzVnfsBwYTfS6FU6tkkRehY"
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
