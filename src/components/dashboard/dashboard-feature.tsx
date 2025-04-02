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
    "2NnhEJSVmWHopZG8T7uLtfsJpHaLf1JYAhjhWhLdo1CgXyHZdc2UrmSV5Jicf8uj29gzjA6qp2xh6sSfd3jMZVuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ME1NcnnGhQKbaErDFfjrCT6yFEfqWuDakcb62m3ENdmkVfTJeY8pYtJyTAWW1CeCuKhjVmCaFN1eSJ6TBXvxN9g",
  "key1": "4AeXQ9TDGQiMPYvKEJ9CvFKo6zGsrxzEjLs2tp1xUVXKow4fgMgRhY8QvU7xXXv8tQ6FGDreNGWSjdsABao3oEky",
  "key2": "4g3T1khVQVsKzN6UFsbLa47nJsVykSiBY2GyDqU1mNt3m76W6JZ8wm4RwqhDbr9wuAbnrSw3xLnFYdCyVT7nqfbH",
  "key3": "2SnffctUjCxgaWMjeq5eNR6P5qEKwbmCxKSGK2bXhNL6yhVvgxyzapKk5TyBUMh7vDzcwTp7izz3YVxoCvzCSHWn",
  "key4": "56aUcbxQdA4RdfgPEaBtv9hhDLuJ7UgPU8vXk6Ayd83tE6DkppVwKmBYXZpyDupdwuGnqMEmqMyXjY1dZoZqS7L9",
  "key5": "3LzV7YyKBfDeg8MDjfPnDr6Dx8ZLNUtVzffGBGHrJAGAym332cx7R6pZBktYnC4sSAVsdWyVD7sSNXrHTGKF3gWM",
  "key6": "5L3fQVwTg8HnRiNVq5Z6P9gpDh6mji1UXLZcvLJME6HPDePAxetLFWmyPd1vhdbrCchvUs2A9u4eSRgJ4hU1qnd3",
  "key7": "64iyHXkR6qRsa78H7dW3ZCQFvVbHBsCZ1WAGaZeu5DBPTS4zHZocajxnWyV5X9gqyC4sh8r8ucanoUWC5iLuiK2k",
  "key8": "2Ab4R62Gj9Je8RtLeQus16h3MbvJmxJmJb6XPXavrrV4HVz1rHSir6Z8Wkt9vb3Pbm3bXMqJUpTqK1gCLzwuKqZ8",
  "key9": "3vVjoSARNf6Qab2QW9xdLhU6UrpqhVCPt1f7uddrWTdyVqEPqd4JEpmQauwvRKyw27iS2mG7r4KQZNda8V6zKWcf",
  "key10": "5zdUWHSbG9cftiC63KgukEjGSBQaXgdxoAnDNDh4dHzFxVMZPADFHidt447etgLHi4quxpQkMUZ3QU9ZDJ6yTpep",
  "key11": "XKwbWEffBDicJTEHmAnXCsXoUh6JPeMH3hDLcdA6H21Az2pqxHwTSE2vfdpGY1xgr5TkwN5PiDXPUXDNWBhHrKJ",
  "key12": "3enFunrhtNEteFnqW8SevjaYTbaCgtmbvuYcKDf99RLXt96Ew9xUwiDywa824WSwVa4V6k6o9QQKFaSH8BKTFbAP",
  "key13": "2dPP4AXavCH6L9q2z7j5FkCxGVSVHASBVGt5eDbV9dcrY9QMzitH2C7ecpRTdJpruKiSBqnYkMnm26TrMHWdVdmn",
  "key14": "1t8dLqn8QiwXWRP8uzDmit9XmuxGBVktZyu7CR9wgeBqsjdYoVwwbPL1BjGhxvjwTbQyC4uha6upKA19SQ72arz",
  "key15": "1vQq8qeWU78jZk5cGccG75GSNNGjCoHWiaWLKAbhJBh12NyD53d3kNgPebRVGtMBe8TRSJmHPa5MwLwRK8Nnvqm",
  "key16": "rmQtUt5cPa5YaY2DXYbdyuSoJzsMRui6yxjJkMt9kVoNQVkMwjhJzWSWjMBFyyoYguGUFpAGkR3xrEsQyyCc9eA",
  "key17": "X2gCtNfjaKubjGqw4iEVLiEtJ5jywJ9nm6kKLZiBfC8KX55oKCmKsdmD3dZAksWJ3hFPDLWnfWNx6i2p9K4ZFn2",
  "key18": "4exyNGGcbsNjHQFr4XVJKKAsxXjhWSP8zfUrR53an5677MG1zXoe8eK1LmdDDS8bmcragSuhaT5WiaQAu6AcQeFo",
  "key19": "4wjPfqfJpgQonCBPV3FLTpXmsrMnzuM3SaRztVQ6XuwnytrLHsN4QEzZCsirkzC65HySLTK7fJxaWVoirMvecuHF",
  "key20": "4Cv1TesoNXor2JnGQLdq5C7KyoV4Y68ibtwtC9wsBfRkeEbmWRfEPEWtqtQhcBJqRcvkgcXnHUiddayJrY3VLpm6",
  "key21": "3Thf2Tve8F4kexusKw9zoEzpJnBvx7q53ZqeogLKtyvVBRncWLMcktr45e94ZroyqXqk4V7qjNJVUhjwYiDHNb1b",
  "key22": "674vsyR7uNuq1vYFAfG9xJw7kp4NisMUB3bCM4b9TxR28CjDhbopQViVHocb49EPJvbCqja6UBj91cHA3sgSXLYA",
  "key23": "3sxhzKmvKtLCmKJDhps69GVDGMVp8NjedrLJUxPvzden7JtsmiREtgBdLV5CK5FZv4RCF2qtjRqM5Ko6mdmSrKkf",
  "key24": "5cQ1VgQXm77N5ts2wVJuYD6hWvxabhZQJ5JuGpfYWGA9K9iFdTg6dMUVjzSRWevHwPvEHzXx8jySv599gGpNbpDb",
  "key25": "3ADHoXQ3qPNC3VhXgg1LvzjAoxG4QMumdKETRgciV2FHJX36VN7A8VZ7uLr47CYX6QRSCW6tpqpMc2GYBNYirhc2",
  "key26": "4Bb8SMy9KE6V9Lrk8n2MK6ZUqgCiR9iB3JyHApBQMZWynhBCsVYxLWZFMpHLHZaq9ccJUidMqAC6hSNQKwQC4hdY",
  "key27": "4SwDrKrku4BFtnU6f3iyYgFdNi3EeKxuJSGSfj7y6Jhe41XpgHXVaRAkrV3qTKcV4ZTJSYnLS6STuBLoVrMyodi",
  "key28": "4wsSYSeNU8gT6fWrN53t1no3ZMGjJ5JSqXzJwhhVJcpBD5tG4tvicxhtSR5JAVhaMpLuVehsW9w7fTjA4oXbtxdp",
  "key29": "2eU4wouccvaTeTAAqfzYWvmHxvtetC9KAPyNzaPfjULx5W1hbj9h97GnQGwi4pWi8D3XMyMPeKm51bjL9CHtFq3z",
  "key30": "4ZDzS1PHNupUtV4yBQRRWqgCbUpao9cknEUzuYYt6Hkseu86XgB7qzYnR3JoPEA9on2KTNyupKZ6kGanEzzXPEwD",
  "key31": "BV3JKqzYZq97MmE9UoBUsYvaTpLWRKVKBvH26RdXsCxaCWoAjLNaWU8xEM8fYAZ1bovVgfdQT7LKvEc9nNH2bJF",
  "key32": "RUs7PUGkhAoGFrhvn7jiMPXpVPnS2TwRufm8ZZmPHNqgrckwVMRzmwhPihiBNf875yxYdxjMJ1pPwYznbzQ7RRx",
  "key33": "5QtzU8K2MiLYyb1zvKfwbjbZz1oGWt52KaN8Nc9Luav3WivSQJWvzFBZ8sgvwKpXjRQg4txCB9LjcD455wC7SoWR",
  "key34": "5FiFudFtPUErixbYDQu1VyHa2ZiCsi5iCbbc7i1jty2eGWPkC1nsPbrohh3kKu7mkVMhgJBFuf2HVJeL2PXC5rwc",
  "key35": "4gk6xFxz3bURa21nHV8wTBB2TSq69Ssmg22NwydpPQkmTx1gNcQm9b4GW6dv35A1LGEX8mgd3ouER3Nqw1nRQet"
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
