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
    "2TJmHh9QCjXsngpwQPPRpLLpXEvQ5JPDA9Fc3j3qWadJ3WGfWrMvCzM4dWRRNGFaTboSH6QBY3yT3GCZHst28UPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9SHzqKBPRBdPkXzQPd2wDJJaz6BpaTXAp5CD5oNJnZjQbGwNi7umRcZB4o14VN2LoyswxjGoHhwovypQXsEF3A",
  "key1": "2sWhL8MsYftix551ZjYQ6q8sh2GtWcx5Umwao5C1EmNkjwVMxASQDLRRSaQ9h3bqy7qZ431vvrTRjbqTzNvbH9ju",
  "key2": "5rDZJpKxjCWEWTKyMcdnM8kTBGHtqwWqjornd4BT6B6CCMNSBH5EPv1fGx9a7wbkCkb87qFZ7CJU21tdhJyWsvFF",
  "key3": "J5CXtymPSUV4ZP8XbE4PoYxMzKtBW7V6t5c3ELLF2Dw9Kdzppvx4jwtggfYUwikb93bXHo9B9aYYwdCKjcZ66rw",
  "key4": "5aGAk2La3eqEm9NjeZkEK3bFyqDDPgLGk9MScq7A7oYazZZtaQnqY5KXq1z4uAYYEt6paJqZ37SdFYgFzWGqb8uf",
  "key5": "4mdtzf8ziVJAxw31zgEoegdvW2KhRDdtjHKqQDzyFVu4MNmKgXsmCC7vehm44W2ahhBgjA7wz99hTzF9SoKTSqUH",
  "key6": "5y8Sex7KShfYtWYym9BAf9xuqoveTdB77HRBbovCD9HYXhq3Aj9xMXDo5Mp9TKcPdHuH6q41qgRnq9m9U7myXM43",
  "key7": "39s6L3uKvmciVLxLqh7KnEjw11YcAsz4W5RwANK5ELGkMejxXsNrjnwZ1BqNWu34paUyS8YbxnSXFPGsjLD6fRiE",
  "key8": "2EcvLELtSnimkd4hZ3eb81iVFiUweAZDqJsgqVRVNi6QX2jXdugiYqM144Hq7pTLKFJQTiRYa3y6r5iepNczobpF",
  "key9": "AjkKv4MqsHns9T3W2GB4GEF7h3ieLHdfQJ7oUKfZGhy1PLovtjzteXAJTKRDxDPgtyr6AqiSKZjVZAxhkNX9H89",
  "key10": "ESLGRm95rvDqLAzA43u1e3CAXdj1gRQmvUY78cKbn32WfUNDHto7cYvEA9YA13Vd4ZsnLPGqjcSD42CkrWNpPAj",
  "key11": "R2621gKA3nLRcVuMe5WSN4iLFYyM7kbZqcq3LNk8A2fjmhgMqVkqGcVLrxYr713D1tSKY9Eb1r5EikSN4rXoEYV",
  "key12": "wB6CUyzfGvju8EirfJoZYcDj8xDvVMJ76KA8pi5kTb2EHbEtiH8zhkp2PZftwwMuLiVGrLdrarDyMVeaCzVhaie",
  "key13": "2qCYYp1EYTCvPkme36sGxY2ziM22zpRreCugxXs8a4vhX2RFcgnDzUKcpjBwrWL576EMw7UK5arNdEZA4yRRK3rU",
  "key14": "8s3pyFeutMC7detEX9t1zj5Tc9U4uUvgT8TMYDDccJAB2ptXR1ByHnj3r5QSAs9Km3ELALUXwesoP8W91TNXFH2",
  "key15": "43HkStsZCmAaSPwr9SJiKxZCsmGhvcN97vxSRsPdmdeU7qyuH7SNL64XFbK3oegrXxjwGB1a4MtwwFHHDkZ8MNDK",
  "key16": "3wTgHCbGczRSUNbCihdFYsQJNgGtyo8HN1MCvKMLugN8Pp9FFTa5DbCtpVdRQWHZDMW1y7SG36oxdoCTLeFPJ4N4",
  "key17": "5pUSAzLXmu1ASBVMSK8vjBsdRot5dSpwTyrDLTjDEhrVy1SQwkRCxbPpr8nUdcyeaUcNbKwmVkq6hVa4mPGERKzs",
  "key18": "4Uy9HAKNewnGtubijo3WW2VJjEsCrb7X58nvYbD2NfzQVyRiaa9SuLofgA5D34GZiESiEsNwn25kZ1SsHXD47fE5",
  "key19": "3naniQ5AKv3o8opuJbZmv62G5D9NSwtyDZbBPyMFg3xDAShKx9YoCMApnadA6d73ntp4nYs1yntXf4U7fKCES9pj",
  "key20": "4JwBS7UPYJXxcgukBZnLDVEmgc7bMdEEnUd1i937YkirwgmKubbz8zcWyRtPBouGBYrw1icxVGNt6MknTQDT8eDZ",
  "key21": "bBP2mQnMALUbqAx4zmHiCGCJEGM1me9nVdMknaMiS2KXiDzJ4A9YidthYuLZyo1DXxNnV8gPCdizNSd4Sex4KYF",
  "key22": "z5VZ35fsjvvVEDphXwLQp79p2kxAwwQLHfLs5tEKGnRsMz4cS4oatuL7sE5PNY3ecK9tDDFCPJXSSBQQxpUnvpn",
  "key23": "2bkEnkGtx3fFngJFMHgj7YTokJ2BemeRJKLRBb7cHT6vVNZXCAfPC1B1A2jidwSZvb3NaoZq412Sqgx5Nrk2QwCi",
  "key24": "5YccgFDRCnbwaoCtNLcmVY96bD3U1t6pxhRUX24yzYtSJeKACLrX7g7gvTtMTr6yn2ydJB3WC5GVmxsFPwFZNDRD",
  "key25": "5yMtZWC7p4XDNs77V34E2XF8sZVb6aN3TtAP9aUy2XCZkYoFLskY2tuZFaJDCuWEsro6AR7W3bGPuUXJoRDZMP7J",
  "key26": "29KPLUWQA9D8i9BkfKFJbxpyUoaUjamLDVFNvBaYjczwh4ChfVBoi3rnYrTxzoxcchFWJy95zXBQEE86qYaWvyeM",
  "key27": "8ncaVck8dmc3HTnWtTusHt26pM4WZAH5KcbT6K8GbBxw7CvdoUJmfCFuucb1Wr9UhCGpFSUEWZxMd593GwLJ6bs",
  "key28": "52Zv6YE1TKyvDA1gABZEBok93fVnpmumpKdrGGL3J6h8cV8KWjHZzUyCm6ivKGkLQh2kU425EXZLcBorTXpN9hQZ",
  "key29": "42D8u9yYMSvR3vjRFKWTdZ6PUyR22SZPGNB7pdGmCHpqFdctgd2X34iJTDo5aczKyzX2XiPjaGiJtED3wtfAmBFj"
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
