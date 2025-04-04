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
    "2qMWVzWYzpvxQWcxjAtwdmTg8SkPmVv41kummGpYc5aakxBAoKd1JLYas36s7JUkgrBXjk2YFwyhaV6rRv2BCvNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvfrnHGDWugNPKGVJJUgjZ3uiXogRTraP9GZUV83NbBTRNpdew3nqhyH57HpLh2bNTxsaArA8JTG4WTtuY21QGN",
  "key1": "4g5g6p1Xdo3DMN6JvgVH4Vg7X87X58PhFcphHrMtaGUF8fQXTcQ4voLMdNi3DVh7aEv8gABh7PWTWF1M8ZPQPaRj",
  "key2": "83BGsVBRMgZAPDBAc9tFSxCWJxsctvmmCJynKdRRcYxtDf5af6Cv1DZ8FW2zy5wsgtjXMS89kMsADWxqbhZ67x3",
  "key3": "4qTMMmjXRSUbifZ5dXK6jxQLPn6tfyhsMLe948MKqW1eBAs9zYHocgq3Ev9iHzYjBPVBxNhPBj29MRSv2nnKhie",
  "key4": "5BEwFw64zVstjeMq6Sd6KzEepzFSMFAk8a7xuF6gh5E3SUKGbYPARhXP7gZ1Qn2R9U8NEU7ygsegPqG5hKo5N2M",
  "key5": "5vmDNkEv6uMdULfUcFzLrRpgkCr6yDjtvAN5cpoz9dvKx9u9qqQwUeRggvfvsE2zk5Xk3pSLjDFcS28KKzTbteTB",
  "key6": "Uzy9UCRUuMUNx8ZYaqyazvHsZNp6WDAdpWdCw7UijcLNKjxW5TNEUoL9mDNVmEoaxmWZjRpkQLL5CJWnbYBuRwB",
  "key7": "2VgCUhNLF6haKiqsE1GyFHSorBZom587UnRWA2EY8Qm1EX9kq1PNX8E96DXuU7zCyu7RijucvdkV8KEGREU7MT61",
  "key8": "3q8yfasU3jRK8j1qNXzcKYmWRpmDmkeTsgth81pbvkoa4J43p1NXttUBJftXWsiGShs2FBMsVAcWLvTgfTazSVxB",
  "key9": "2vTCYLbunbH8B9rFY4vGcc3L6E1asokjKQiBYMHyr2SGKBpF2DAVga9ecQDEnMb8tkA2noQSEbRX5c3mmAaV8XUS",
  "key10": "2VFspuff3TS3S5sd4BgTQrKypj2m8zsu1cAYLwiByiJBeh8pUSoy3tsNRwNARL8d94SmebhFvSkhMGrPrKnMhtUr",
  "key11": "2toerg1cnW89os9eHr3Pv96qfVzz4edrnDvfpacBx3nSXRk6PSwKz4wRPB5PomiEQWetgSbN4n1WiPk7ouhbHkKr",
  "key12": "32x6xg99hwNBbWfseJadepursW9oPMi6Qw1H4W1Cuk7PSJjjD2oHcV7uAYefZVqmnsxb5TdB2c4zDA2gn4UnomFL",
  "key13": "NpsrS2BNm5Mkm72kh8irzFyRN1yUzK7ErF4LrVFMfCT7r5RfVDSA3qwWyyvBHiXFGXWguu89cRJjBgdf3xGSjTn",
  "key14": "6s5xFBWgoT4FssjFVuMxGAWVXZBHoTqUNaNUTw2brwmHYNVfzkm7upgW97bAcENzx5W5xT5QN6K2UyPY2FGhTZT",
  "key15": "3oLdpRkAsq4AmESpS3B8XxW1CE4BvdrJZaE6u3LU1w2k3GgQnvSbNofQLdoMdVfPnKwX9jWfH5wXUn59sc9QR6oz",
  "key16": "4EJvJJwwsYQ1RSt3Fpy4HmfreDvX6HopUqNe2AHKxTQCYWPkNqt9zVs4SbWY4Sjq9dh97Ba5h2Kho2KbFfSV645f",
  "key17": "3FxMjij31YgovPHxHhNmQLM3TcfDBSi3mok5PKfiXHTnfkBshAwig27k1E3Cy6GoY5Tm1913AJnFKQbG3LCifPjh",
  "key18": "42w3p4b8JWuvJJWtFMx3qmTqWYe9zGEAsk2GKAMaFkQuZCFm5hrcT2V6rZ7QSwmbHfv9sYzf8LYn7n5iLNmEZZhn",
  "key19": "52R5HrvKZjGBsXSZK2FYDPdmA5W4oWwW7dZtKqkqxrB8ovsjyafRNVCYU7px7iDZru1Jiu4261Tar26uVY37DNwq",
  "key20": "2tNX2pVdtqiwZX3JCazrjvfmF23UuFfBKxhovWetsrANhsckc4AMb5JC1rz2M9XWkFcpCcRmDc6AqqYvFyhVd83j",
  "key21": "61QtabKEoNSzpBmPN7pxMGDEN2eTnPiaPp3BGVz87sE96PNp4dPm8QWybEgnRaxyLUWxun2Wp1XKTJ98D7Fntb8Z",
  "key22": "4q6TNsGJVhTNrPatYhCfW1EoE1MRf1EC2q5CMJNWuxkgNSHuNHQs4Mw7aMMTbzgZERsRa41pxrWkZMk5b6pDeS3n",
  "key23": "3tdwyk7QVDqdJLMtwttKdbuS6Zcsm2YaUou6ywk6tqF3zxaJPcWLUBneVUXzuWsnHiCfxFSqkZRVXBgaE71jFCDa",
  "key24": "55vt89wQowr7U7BuvXKHrFQofQDMWVCPFKKcXW4PWoCDvZZkqkvjVQqCFQGCqzUZmdRKpbHkTXBTA1ZwRxcRg1Rb",
  "key25": "58hJUYWTTndcYXDowCvcN5spmWbEfoUe8i9kUWqdnwc3uzqYW3m8X6HSWmRMrTX4wDfTXtqNkqmp5w4GQFA34rKb"
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
