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
    "3vmB47UtF1JwGXPfWHsELopv265JRYmAzLeszhEd4PwDcw4yy3KUdc5FLwpaZSboSswm3kXP91Y2XuUWKXFGvc6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJwfzLRPct5g6auKg8LtwX1D17Z9niG1wHvo1fCGbBjXqApS34GTc6H5DpunXBQtfYKAKxtkFRYRin1vDCtbZQR",
  "key1": "3a7NMZnNvGFnfRTjLc5P2hjhZg5LzQkHDwXzzU9JZWbDJdGAC9ZkdtEw6vVmsYytvHyRY52SmWdsRvvhuw3HRPak",
  "key2": "4Y11Ljiqa1W6n6DJP7aYZjkGXc4CJywXUGEdGCf4dNR8Abgtn4UZ4qJaVUq3kmiiiZLoVtHCREAK9n9cZ5yvBjtg",
  "key3": "2Zukq6sBMycDnm1qpXTKjFVjcpPLLA1HGxLGUFzJkJER1GMXcXAzLPf4ytrR4GzsQKjQRKRADh9dGbxMnHxt5FaY",
  "key4": "31YZPm533zTWXhjXshje689ocxCuyc4N7Mh6Ki2xFwgsER6HsWSy1QpDzXQwrNCofTGsxJndPbZsofViEmjgAVPp",
  "key5": "bMGBypqVjiFbBU4JNphk1uwLekw7EBxd17tt5Hf2WVyKQKcLW5bx1hsuwrcF8eFX5w8w3k52EuBPRtMemnkKXVr",
  "key6": "fxbAtf7GbqAb9YamkBQVeX4Yoe6LYCRXCHi9JfdBcyvAhj9uwwpCpPfW3EQpkqpejnSDQm9t7jbHNt3xiyi1566",
  "key7": "2xhZfG3Xq4EwaJLQLL2Hzk8fijCrL9EYPDdf1qPpK1WCJPxxTHooBgF1RioGQbTBwiEMFhVUAKPV17N8gEo6cq9Y",
  "key8": "2inRNNEtDT7p2QCHgA7bJKmTQc1LSFKjTSJCPHhAmGJ6WJebvhv78r5oisKvNJeDdUgVpHBHDbnQ7JzasiTvUeqW",
  "key9": "4sv43WhTMTgNZTndJ9GN4gN7PdBL1HNfgFVM6XRCe6GLjJWZ3Sm9YAahvPzDkmWYS5HGWDXPrjhwsinQm4TuxXAH",
  "key10": "2hRXyxReJp1APaZZpH8Hc1tTfv6T3guNkqStNE67vGTXLDsNMQh9Zqkqxdu7zB8FPi3ueEd9ScnC74xy65Ue3Uf3",
  "key11": "4MFNZBeALe953vqRF9dvqNc1NM9LsD5g7dH92CdbvK1RqDSccFNnksjh7g77wMHNN7BatUqLcyPVrjeXsyutjUw8",
  "key12": "5c8cWj8xGDDbkgYjyFT168ddKFHsRasdtDuoMiYDi1cnwT2pRtRYTugWXBqiR2t23mYDc6dvEtEjYt4aPqg1xrSC",
  "key13": "5QbF7uNMcao3Zr1o71eAJZwvP7uSc4UVKWXg6hbn2nTMcesmmzvo3dZZ23CNuin8gtp7NpAVeakukenYpSDdc39j",
  "key14": "3beAv4gUUF8PfqBJwNsLQ7nqFRKVjKJsi9KzWAVyx8DiJgQHCsj42o5wByZ7hV5ozPSxo1HanY3eTQaJD1vPaHdw",
  "key15": "5FqP5A33X2TJACrtu1LsXE7NCkvcYKuiKRrKNixpugovJAeAL5ikXjNGzvBgLt2xZRtBifURKoqQr8fwyv2MVnzb",
  "key16": "e8ucN2Qrd9TUho7McraBC3gRjipsdda814BqXGpes6kBcdT9oPDZXugdAp3WXxyvr9Q1ryHVuxvbifxXQU4GrpY",
  "key17": "42P65AqFwkHSquiw8hDzBNyAng56Q1j4NPcDjUTTVWuvB1WZS2Xg7tg8EXw7h844S26XhYycrfD3ZmfCij2y1zUG",
  "key18": "4WXbZaRg2VvJHwYQv6PKhAtVgUPLt4tf1FzZbTanxEN6aGMCVFgKkZUJHrPxriH3wXXcMZqEssEKFMXRJuEeG8xe",
  "key19": "kinbWQnXnLELbZxYMgsCi55wXjNiihpwcnzVwN46ojgp6icrNMLgmAnLM64VGkqLKzDbrm1YfhmsZYp7RA2iEdk",
  "key20": "3VzthZ3wXnCxMbDdqBKWR6yvB6TptWRVXqdzwuUJJeFzV3o2rhEpkmhSuzssvA2w4TBMsTF9Lkdsnfs9t9SgRWLk",
  "key21": "842FoAUayq4kRdZvejUTmDQ3GrmHhASg5t6gG4AuV4W6gShtHyqQ4URXT3pnC7P94qVXPiNZtxGYKtRp8dfZywm",
  "key22": "3RHvF1PeupCFZbP2UHsugmBn83tJQ2ujJA3jk7CCV5tgQivxjjBqvaVhmoYZhadimypDfrKhNpgbgSxXj6FVbaXT",
  "key23": "2MpFJV9H2bEWybYny3n847kcVWmR1LbsKsUZfftPxXR6YmRfj7r1JWbxpEwVzJJzR3nPvdtSCdJEcySato5gRXo9",
  "key24": "3txdJC7G4wzthZSxEFroktEJtfdqerDjGmfxFDdT8KZjNknTLWrf9VVipd3NaGFtKMdgxWSkxDy5P8x3zAwjDRJK",
  "key25": "4ytkCNVFBb8R1XziPfDYdbvPHV8ezXt2SeVv6cjHotFYVNgDUH5rNnWjS216fWPopUTMizogz7DiMVNUW5aufthS",
  "key26": "2ZAYprPdVuwUbrpraPq8WaWaxRNcBWZRJLTknTrHojhvV5Ls2riVuzwWW1fTidUTw9ZiSCymjASyBGpPUExWaNsv",
  "key27": "4ns9xX5eP17RtSG6wJ3GnqpFRtuvEKiWjJerr311M62X3E7SwK7BsFFNXanCbucRU7qHwmYkyuv9LkfUMvkTAw5D",
  "key28": "5JJU1T9tYa4vH1BAbMLWjHDsPhYu4L8zdPFDCsTJ3UMGhu2zCxViCDpxY92qPVoFrWkQvRZ887sPSrcMdwunsBpo",
  "key29": "63JAqU5QkoAbVfYjxSrJSFhoZZpVsurvvpV79NPhcNFfWTkghrCQfqxXncpN52ni2sHMscchyuQVWSHxim4HY5m6",
  "key30": "2R5bSufziqoXhZRvsHZ7Wwjo57JFowuVtJ26QoDzK11me3r1pnqGL1CJBhTv4vtWQJ31cioXKubdqWEa4u9EULqY"
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
