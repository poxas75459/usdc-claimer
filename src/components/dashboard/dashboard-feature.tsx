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
    "4XwhHMYfBN6kvL6b8URm7eJma6qA7CYWLFK8awb58bs6MznHQmQE2YQr6v3cYnWwsDStz7CkZ6N2Hm2Fq4Uesviq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dz6zN2Ka8sppKFbhzVo2B3A6V38CCVQFGbgPWmi9Wwk6MdDKnpJ3pzbdmY2NXpwqLTi5jC8DJiQdvofpiSnQuxX",
  "key1": "nfaQ8vbyGDGNb7hmg861NVYGRR2gR4Y9bpN1jFNXy6idzLLZUjnyX18ZMcJ7xPGqkYFjQ7NhhvpZ3sAwmbFHbWy",
  "key2": "3wBDXxZ96M63xM7LmYs56h63ZtnginVmBc4VfYnrjDAUqUxd6u3aahwCvsTiqYHSPrfR2zoMhC5eXRrFe3BcTXov",
  "key3": "3FimmR8WRUFgm8RrWbfJFeyZkjNPnKkDW2tKbmTiKU3CidXwhbQgMcTU1p2mtCifCFLSgvchDXBENwksccNnxixW",
  "key4": "66y7gXtrZiNGF3aLbGF5QVwSbJdPx9QrsBPp1eohsLcDcMjFUC1vF8VAZcHH7ai1CeMn5s7R9yy9M17fpUZf4rKq",
  "key5": "2PxjjmH3Bsg3NerFeWqCTW35GcSAv9VTY4VYW8PiuSFHBMZf17rVkAZuZ68TRdUSZY8T6TqdD4hA3mcwSebxZf3c",
  "key6": "X95ukKexDWZmMsniNPx9iBKz2SiG8FeDb1vCGpDJwcoifudF7Z3JsHJ8qn2P5KjxxZUrc4ZdC3KNzngxrTUPqjk",
  "key7": "5VvHBL9H52NG23EcZM5B57m5iazMzJsbD4UvNZPws4eScrT4pnqVRdiwvsYDuenqFurbYKgCPDSR7KYoXhi3SssV",
  "key8": "JAecdnpRqCEhuFUeUadX64guYXTZ9khCW3SwuKebfxyz49vmqgXzmNs96KHe8pYck9jBtq4UQKCbZAMEdtnrwDp",
  "key9": "2xBNjrwTuw8WZ26on6xYVyqboUJ728MTPQPT2DaL9oUHDAxEmP3CfPvX3SDyDeM2uwHLn9Cp8T2544N6YaGhT6z8",
  "key10": "2pWfc4Cu6WT8ZAQHa3havdQHAXvpQkgGxgAVGsuT5fpYfNkEG39WSp3vo1YRGKHaFHQH5dNYjnE97wSU2GYXaLKQ",
  "key11": "5p1KgrLUMDAEcT2spkCqk4xPmCVE77S2diFCT2BNBMiiwmiL8ZxXi21HjnPizXDNpbFzggEf7zTsJ1XU8rSTvJYx",
  "key12": "wGrBhFQ1YG6PEkjZpvT2kCBKGPVzGHmsNLAzudMzEwWZhZzupT7E15jWihog7inQCYh3wbsDm5Dk1UWRsAS6MUq",
  "key13": "3Lw7EaUy4G1gVpYQ1dowYAzkgi8cNtKhv2ikDHQ9ADn7EQeeZ1mEg89XyB6buhLcNFWFVhBd9geXiUTeQYb7Nxy9",
  "key14": "4VrjPawTMR9RzkS5Ck7nA2mjNBXXG4Ymuf3yPGhX24eJkXcypLCTVa97BNdCZptdCnkKT3CTJPE5g2WxxAXXckDR",
  "key15": "y3bhy2YgxfguVAHmJpyzAe4RMwQkcVNsT5sCjSvKJoJR7CJNpsPAbk7Mi3dzHNAUHsr9AB5PoHtSMLsCuJXvnVR",
  "key16": "3FqcV31FHWbwtuVfUL3X8EenWN9P7pNAtQEJCa8xmFvcxUd1ig2zHogVmSUfcpGxLTnWFoKANek6HMaQuLKuFLME",
  "key17": "2P7J8uFuqcrgpjsKjT24gW9TyGmADJsyQqPMc8h85mXzwsnKN2TDpbFQf5zYYhzALAUB69v2D4MxF5mMtUdXtmF5",
  "key18": "8GwVAHTJ9UaVnM1WwJEE9WR5wBdqjgGTcMwieeSH3F966rDCwWYk52b4A7M1fy1uLxVxWDW8nTGeuaQupwCGtcZ",
  "key19": "3FppEXCvNPmFBm1dfKbbnWkYdbWW8EJJe1Q3ufF3tK1XgbseMB6qvZ7bRrqNW6sDPvpjAGq3HPupBH1Jwu8kwLvU",
  "key20": "4ojLMBfsdjhRHMq9s3iUbbFbJas48sTPTynyxvcz4mymmvp5HaxAfVUAgyfgJ1cVXKwmq4TkQx8pgpoQj1xCZ42M",
  "key21": "4YKgpbt1zWqDQp4d42MwksEPEpRjC2bUMpUrZibTY1Co4rKM4dVKZDiFtwJDQ8T8t456X7qS5EawgQEkaBPQwJAT",
  "key22": "4brDV216YeaA4XXrHVmZApyynNp65Kuj4TAEZXdTSXMpZF6KvWnkUkzH2CoSq9UWddHcEjexX4tm7hPkDQfcnEM8",
  "key23": "4M1CP8yZJ6x7wpeEzqHHkzRWabLSSRmkKTrwkng3pfQPJudqE3aNT61VnhhguCrQgBQLZtXhr2oegHF6gFXdKzrR",
  "key24": "4H18uNYF2XkwZrvLz8nJx69Z2gKnZYta4W2PnZTiWKcQ7W3DLfqDycqRZb5P3vSeP64i2feKEc4gU8EJdCZpQhyp",
  "key25": "5fbaycNCtht27rCe1L9YVP3QWLjKh8TG58QGUq2se4ZYL4RhgDtJDfDP4rXEKir8YaAfr9upmHcMeFDyVPHHq8jW"
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
