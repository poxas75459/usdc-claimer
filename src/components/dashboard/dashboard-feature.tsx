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
    "2VYCypAsKQS6EjPNxMasrsYVu6imtqtPpAVn3GJZRiJBGkw3Zs4o8nT2LknzE1V2ADsbuvLS4maTUQcS2o4TkH4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKHKCnVd2wzyoZFtZ3WQx7BJ8dKwym6Cp6gbthWkRSG2cZYWk3F4b9QJTrsLziNiNTFonCUbUjqv2BrdN4wb1aU",
  "key1": "2qm99Mjm9hh2RXC2hpf56USV5Vom7Jw5cSq6epNcjvVJhjCVbF4gwxdCkSLbfMeL6pVEmHv9mK2eKahiGQVMvkZv",
  "key2": "2hc9TH6HDM2ozpMWjsmJ3YmEyZAu4m68bEBqj5w6r8ydWhzmvcMrtyrKwHXnryPG5xX1Kh5KQi3zc3gjKfBiurE5",
  "key3": "269tsihoHdRFcQw5BiTbsy7CbsY8newoj4Z3fuyWmGok8USvmWSv1ZCagMVAUHEMChPEgz3CJgD2M4XUkm2t9YNn",
  "key4": "5dvskRxcjuq5s2VXKzqChK1QVUgXcTd7Drm17rFW81GwoaBeUtF1BkH6PRjrwh68DEvaSVcgfvtxYG8T8jxMvDqX",
  "key5": "5axu5aRj1kDuHXPsDsrp88E9E3Le4seXAJtSsJVMQBkP8uEbpAiHM7CYySabFBcRqkroMbgeeHq1Hg46qp9ketA9",
  "key6": "cqDBwvvu5UYehoDZhDkUd5bhLq5mXDHfP6EfyYhiERYSpUqJFpPQ2gNhF1kvHDzbgraF5p8kZtRQBJQgdBLkRnt",
  "key7": "2xZSfutHViXGwCtxFYNdd8UfQEYr9VNC5eBTnsRysXY2R6qxPbBPURwcDdHwEvFq3dPJfs1EYCjNiF7S4mKW8j5a",
  "key8": "4dw6xXTXucubSNuiLbS4Ax9fBCYb15SPqhoYcUr1junRdq7rx9Zdz7sBgdet4vS9Luunp3m7VRRmJXbGXfmxiJBs",
  "key9": "5B9HK4Kgnih4difd1o3VmCxYKuqmMrBuqJZk6E1froyJSFdsYbfo9APWtZJpngE7BdnUFK1hp6PGSsNR5EbuNhZE",
  "key10": "5rUcmtoJMqwj9gzXRZtuSSw5v4hr7zNL5NuMW4tajscZmEHrFwAbGyKaPviLrcFJ8FAzFPu9hSErKAfrjjt5siQ6",
  "key11": "tm6b8U4V1DfwFAdS3E9se7qpHnxdDjmLAUfQvpXaaAvYoWndzvXWezVSdH2X4fauMZs86wcGjVpE6uaLptCguCR",
  "key12": "2PKuTHNGFoZEwxG8nfZxkPP2MYSTVLPPhj9J1GSBUd52x7DBrK8RaiZnUKGXJMGtFJj9eMLhm4ocbUMkMKJ8BHzG",
  "key13": "2tZP9go5Vy3YjdcDzF1Wb77AULx8LJ9v2MGPLjibihS12QZbNNQ6dzKe6qai6Epddb7cowuG8Utsg8ewmAnoBULu",
  "key14": "4ScbY7ve4JSoyP13vPMZZGWzG9UutjXvrsc3AcB8SFhqehb8xkbpjGgEUepCfYdTzt4Dt4ybTaHUWkSk97UKXm3c",
  "key15": "4JDnFv3mkouuDz2gxb4CKoas4nGrUHg2NvaZNY4c6gGfbaeGCKdMrwu9z3kUjhxHd92iJR9fEP4v1ZBscwvqGrAJ",
  "key16": "2y8wvBB3qy4eQ8xJNYBVHg2RocMxP3FTKRjK8tWguZDHR7ZVXXuQ8KG1rwWThkjz3NkySCeE7S8yJ1zHgXpcM2cA",
  "key17": "MmskSANzq1ne5X1VL43raNH1KSLFPNzWJSSdC4XJcBbYvZy5wXCADukjCa8H6WZPt739idFfcBARfgXZBiCKCid",
  "key18": "2fS2BejDJGag3K1b64fmeU828G45SzXkDAgE9S35PWk1HQT9tkpo95Dcb9yg7aZBtrc7WCT4hZ7Jz8pYVMC74pgG",
  "key19": "5PysJdMhPUnXPiHcV579uAaPzUHL7x1v2s6uvnoCxAYcUWEjwtJoBesp3JYQV6Jw8EE4GmoMUgLERQMWbFzRsp3r",
  "key20": "4ahc9sgYA4uuBFAaHqz8ahtHTUZuAm59S46bKUJ9DLh4njxfhmoz7Y9DVDhCT8NMKy1gRXAVbRtdNxj74q3FMmGR",
  "key21": "4Vstu1DesPhNrH2xeDnUbRSju8QXFpz8CEagwBAHz7CvS8yw1YtDTtyHAVkb4cTq8SAHnYW4HZrJLiniG5GZWAqS",
  "key22": "453kT4K3VJLaZRzkXNaiXgBkJ7VvEL6TX1KsZT6cz5Cp6c62vCoJ3r466JWiwh297JnArAE9uTEmK9dnaG4hyzQh",
  "key23": "5229ae7UfNJjHwSHjSqB6JA4VpiFYkt5YfqE99AmPaCkDWKLFw6dcdd7Y4zTVQRwfQiTZoRym4mQbS4teBp1mGPC",
  "key24": "5r5zWUVKw1Af9voexXB1qAa64e1E3eda5Dj31dFpRH7yntMYtWJLWh84EBjmVYeGnomYhrLmKQt63C6uFudpGy1D"
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
