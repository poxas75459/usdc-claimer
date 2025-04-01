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
    "cVRNBnWDXxZZMNT18cCC6vfYpJx2dy6aYfozzkD1dgraBhAjxgG7G4axr5SDLMiatvWqCB35tV1uf5J3fHq8t77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cw9HZRUuLNCvKmr8cEpt6BhELn5U89xpyXErF7T9MTiyUG6mz7S3s45ey3amg9cFUyz82H4jrvUpNYBtJms3y8M",
  "key1": "2pKiRR8CaVda9pQRfyXutuWY1Rtv2FzGxAAn733MveXcdiZLqRdSY7Z7TniH7KXUccFGt1yFz3izd8GdsfDeHrAx",
  "key2": "4bLkk9oeTdQV2rn84TSABBUaDzNjeTZwMyVP8kBRMYznWtSXnJBnPSiNeK4eYHqgMwV1v1BKwzeq6uAS4FfBUdg5",
  "key3": "2bMcHkU6VbHCn4iQd1eLSBiHScKMGpqvW8zWdXnaFH1nGhGmPFGeJTYwgQqpFUsWubvBiGGSmHipnQ3HHABswaPp",
  "key4": "3kjCALGF2HUrfv3vBFMxT1fGobNwi7sfWfKpfXd3MdUomcnH738bj7oEVQrgwaW6bpcRPEw4bH6LQ4a9HHTEAgMH",
  "key5": "4qNgJAixwPggdYgGerye6VcRzesR5xxNwvttX4Y34EaVGsrcGVR1uA4zrRH6idUnsf5YTfJMBd1YpGESkMwZYKWh",
  "key6": "5SjQPSfi34Quq9WRoH3atwWwEqSncRxNhTFPqYpZtBfJ5iVKQQz13qU8LyDhCZNtQYEDW4rpmsqjLCMg3HvTP1vt",
  "key7": "27MrxyjFDg9T3TL3LutLrTornhd1MUkGmDRQhwZ5rzfsKM3UhNNkzfByMnU8Z9uqNTN5JCtSpLmRpuJkB5sHzEMy",
  "key8": "4uWNKfnWRYHwKhLxsaSuemjpSy6Z9hHqi7aMCbu6TtdemhzmtePcTFdw5tXUrEnBCZLSbvqgHuvDz3UxMVM9Vc8C",
  "key9": "5XVtS9UmC1nhh6nPa2pWyxD9PUVufrwkJ7oTuynvNeZBGTfG9AqjUcbhMC8S3Prt38jUhdFCTRJz1YdDGDU8AZKR",
  "key10": "4LTcwnMGUooBkgHNXa8RenpUqVkh98QPWtbB8KonhX572mBUNqQTZoxe1tBhFQYNyoGqaZoijW3qd9xpDPSnYPzB",
  "key11": "2vqg5HgxLwGnncUmA8E1pL7PFeRtNSzePmPnNpejXNrc1VCw5G1dsc6JrxdemHQ2zPBg3811MkQE6A9Z6wNnmv4b",
  "key12": "3TFHgYCQwZmEV5iYxagBQDwJfJe8mhoZp5m31eXsrGR2LG5exEC6MZETagymssSLHXbqFS47MBm3nro7qSfcEEbK",
  "key13": "3jcZFkqu85ZQeUbw2HQJeXGFKBBFAxZMx2LbVKAyVmS2h3eUws6Wh2CNxCXkKZn1JVqqCUcXDHqQmrxTtBU37WVK",
  "key14": "5cJHbmDz3G3KL3SFgfCf5PqwPzK7qXemxGvRTbW3g5h7Q9JuGmZbBUXqjykpGUtj2DsdLMzfCYoJmyoEx9iX2zYr",
  "key15": "4xfjNqQfXK5eFec3fqmc8adjgXKewidBK56qZin1D1YF6mztgUCoYPgqvec6DtCtYijGWi4xFWh3DDEdTmagwEYG",
  "key16": "mMF6yDjoATspcczFGwtx2LoXPmuChQdjt1yaTXt4uwL3F7BsARAE74RgqXPziBkHtfpJWe8xsWThviJZ3ukfQd4",
  "key17": "muLxU2vv2MJwdo3JU83tu16emNWdnrnWE8ko9ZSwvpxeP6oFSTBccxuE2uXkn7gesTvTT3R4nDb9TzoYs69M1mX",
  "key18": "5QMX4ywTguvNHd4azAdfG9FFzCgwHrLkTKYGm8e5y79FxGtYGAmg27x8HJDZpUnCSRiLPyjtANqakJDmLpX5oSfr",
  "key19": "2asUmmRkFLAqysYjrw7pEZEBayrANnPf7j5dBiHfWAcCev7medVibonCsCq9QGmVy9FK1AwxH956614jzUW3rPqz",
  "key20": "5xkX8rKCA3dLoZwFvZfZXZG1hPKxUF7yF1h6fVnjiiJFPW3bhfVicD3hkU5dkNNpJmEEHxa2YEDFzcDtKBndHxkJ",
  "key21": "rDfx35wadWACR9TQbs9f1GwWBtdgxpqNtmQbf2RQjoiSwXawPJQQu1HgS2RwCpkk5dPVySqderdmfACZ29sgpzR",
  "key22": "5gU3A2Daz2SvSL9CHU7G4t7CJqxbho96iYDrSowzUVbptANjxiQv5Gta8gdvtcN5sbQf4e1prvWHXJBFRFPHoi8G",
  "key23": "28TRUaRAtnJWkFQ1Epd5a8jrp28HPp7fD23aDGKGiiP3g9fEMYBV4a3augMyZMX9VNq9pb5bHwiYnptg7GHUd7qk",
  "key24": "3d1jx7d9sgqNjqpyzuaYcYs1zCVBR63iYj2owAg8sUuT3BEapbmPJANf8s8Faf7M1Labtf2w1mvP1PzFi2oLxN2y",
  "key25": "3oRmo5PMTm2wwpi7gFNvVMehyxAjP1GVyaW54cAiYdVSGn7Yq7WkDJsyj55PgzXfCVNdHUMBq3w2hbPY8Dz2Sa4V",
  "key26": "4419yay2HbN8EkzYsgyVda9jfvSCmwXJSLgsLGz57G3BZCp6Jg2TBqJbKPFXUFVQJvrtnosvXSM2pQcjbSJvebYf",
  "key27": "grdXa6Yd5M8jRWuYe5hvRA74gSCmaLyqEi8XYsEbm1Fr7TMVgMUjSEDSh5Gj2CyniGnLWJKK28HWWX2724KyyLR",
  "key28": "2qaSkSAtdSqJCWf4UfkvESqftSJRFaCjEu4YxEyudu2WQhio2LxHf5fe8oiKqEmL2GtLwRKCkGJTZHZWjVWVFcGh",
  "key29": "4Pc3YKpxFVGZS8N9JrdmaxUF3Pwfmfe96MTj441h35nTWBNLeRF2Ukut1xrCahNNPLbvApzc8Da8eXV5JgsVZbGi",
  "key30": "5MJvL3zDVYvA58PuvioL1FL4F4Xa21zHkTytWU2aeT92GT7utuxiFA262Uc6GQKhpe5QsGnFmcjv77V5Mboq6PY6",
  "key31": "53U16Qvx96o3mP2QKXGirbZ7NkeJ2oGd1sU2pgyT6QMhv96SLgPSDFJTYAXtXmYQeRAX4gEAfbJ4K6GspMTTZ4EG"
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
