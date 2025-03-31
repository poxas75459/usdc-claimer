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
    "54VPuAhQoaqo6kY2YpF5muALsax6m2M7GyfpdKdt88NrEpsbHaGLQif7bWNeMLx5sZi7buCuKkBuEcXmRLExB3nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HWSYo67n6CptjhdzatUMphbTSkjGz4ryUf3AU5iw9qPbfKb1NUiVuFPz4e2ZJaFJ58i9ySY4EYwqW1gMHFHR1a",
  "key1": "5p8r1GewH9ubZmxFQYbdMxQMU2u9Nw7hqRfcP1VyAqF9bjB1ea6FLgVTWSkt58JMUskkBdzvUuZksmrcBe5Ps3PU",
  "key2": "4fVUXRpkeK2GRPJHFoHrmqiPuA8Sj5FLM4SLzasrfbp8556G6BhKY3JYxsYZYr43dvaJLTSKvzd5vFTSjR2k7Bd1",
  "key3": "WLGxXX4ce23yAPbGTB9TWe6iW69UAsyBdMr6G8fEq2jMgGLqxQ7kdTvCpXADU5B7PFeyMHgu1pi821eG6X3HYrz",
  "key4": "5feJkenQwHrDoCZkDKjb9HCXSwcMREL8pPfSwAv8s7ZmXRWFwP1EgsVdWm2mWjnmBAGfZHoAdKBZU8wUdmgLmoTj",
  "key5": "5MbeAj3kdYvJMETGCRuqLmwiAtFNuUoZTiHWchbEHvyQJ8xDHEVrC91XFpvSqTZzLyjDaZZz6ikjt9rWt6YFzMs6",
  "key6": "3Qf4BWJt8HKzDY7hngDmuo2Ws7Lf2eSMDcrUn6o1b8nYRRZTqp36qZ4wGZrW3mrkKBY4nvim9y3uUMNcoAHNFL2T",
  "key7": "2nLrSyaJFACRFcSmeWToTPohNvmhjiUPG4PVfMPseKzb2g7A2dLfSPCdoY4FDucEbY8CCXu6f9kSpJryCpi2YDuq",
  "key8": "2FXww8PtTo5R4AprUggydH3ZExnMbgt5TDRdaVznG44XLdw6sVVeaGwY2JYJbM1hq3pSwBrgbhLsi1VGVvDPtHA",
  "key9": "kUKPE2JjsFAwPnaZarQww4Ms9qVJyrRQR5GDSRSpr2z9Q45Q5vTTsqzUi4NXypNauCh7araH5qtALNqZZSkUevi",
  "key10": "q1t5WKb6R8ZJVaLWTS8sArAGznbAV1hPM8t9yVq9Zbv2k2yhE1bjzYTyc1ojxxp2v58aFjESWUcPD8APTGQK3wn",
  "key11": "5L2CQdXXdZbHf1oEFHY4mEHZJEGs3RyPs4WkmATUjFKYysMMmhtew6u8HJZXs7x75QysC7YXAfkHt3VWujj3WtLe",
  "key12": "2WdLjYSYfw77UJnWCc5GMBN9KiYer2tJFCYT9RBLK4tDnxkYwq3rzRfoaC2NxMn5FCAkiLUF78xEeJkXPN1VznKC",
  "key13": "4vEoE1D9rUL5oubz9bEuvVi1Fb8uKEo4dkyyTqz5u3qQityaVhMnsWjkdereuBts2ofkaVzAfQaT2j8NBZjsYbPE",
  "key14": "3U6PyFskw39wFA3zUJ9Xmp9apvABGUn7kL3uULXTdAhFe2w7qgP1XdtLDSxt1n5WcVFvphwicWikCAmMYTZzWU2P",
  "key15": "4HoRD2AzMYYXjjPMkpzX7RfUTsYcJVT3hBjTGLUXxhF66SBgfr7b7Gr2fq3rKEBrk4bLBhy2LLUtZjudGVdFZH3F",
  "key16": "pZyqVVoF1Zrh5gP7HcmzhSfL5EZhoN4gkrC11VuZGkcDWfPDGHbzD3ppsLJgsV13GRPv4eHNZcf3KE2EbWaZq91",
  "key17": "5bj6bE1wnEvSDb5aYGzyBVsXqKzS4bfBVE5BLiWGi64MCPKg642iBQ6KntLjFvPH5NnfzxbUBNEgzqfnJWm2GF9Z",
  "key18": "516i9xhrnPjXePyCSWk9RxTxCs8jG4DQHYRrubHW3GkYtHitmiVyn9utmuZQ1wT1TykASPB7jnm1MJHXjCR1VaSv",
  "key19": "2MYdYNxDRJT5QGnFSRnqGQhZtthtRnB4mBTbTzL9eMeJLjfjyNzS8XJeHomGZqDjFbeXEAqP8bWS1bzvn3T4ruKu",
  "key20": "FZz8aZhcVfFPQWP1LqnbY4MeaiUhLRf6Tv2Up3FcUWmoYjHPRDFVnPd8ztettvp4Uf28FJ2RmRBt9LSMUb8weX1",
  "key21": "3oPzoCLg6uVaJ2BQKduaMMWgMqYbQuV4zD18Jzg5t8d43CyeQehMWhALnnZAFiTr4e2FjJUGirk2NtPCiCx17XoN",
  "key22": "54AgEbx6n5qxgh3gRYr9x51aQABjww2nnYbb3axkt4LUQdK9jZXf59FHqegXSMpfhhhSHZM1WS6H22U9g11k7CnB",
  "key23": "5aocguVoF7v6MD2Jht8y3i4EhpHzbsq1dGx3s7LPz8DN5Gi8HUbWjRXbTiN8hmqEgdrn7KCyeURAA9tCjEnBHUiJ",
  "key24": "27waR3hi9zd1JQHcuJdUkoYbTdhQ1tbxGsA48JXQA53L7RgAWs9swJCPDpnqFmGVb61RgR1PbDvGjvM5LgGSybNf",
  "key25": "2XGaHwAdHujEeG6PAPcL5JBqmzjr4sCeXPBHxpMwJucKo5HvPVKaziCGdktbUS6K424vR8JHwGURmZzG1zKqwp2u",
  "key26": "5Qyk2GTTQh8fx2tqHnYLTBUuXZJUydFooGfdyindRAg1AuqQFHLMqAXE6bPK9cYeTTegHCWYGo2cEXqAQxd3ECMY",
  "key27": "2DtJxa4SU9mBwKnTbHrHQ2bcJUURh2cbi7hsahqHZWkxe5rSy3Z1WctA4wAL4oMRVy93NuSEzi5DyRmD97VwHCFw",
  "key28": "1WbgzqQwp6nxaz3xrsdQXvGzaad9qms46GntdRArWLwPNaSj1Qyfd2WEzuz7hkyJJjDVYSZZvCn862kPeZkoj9C",
  "key29": "5h7bVqeygfbub1V2n34CEgeAnMX69gkayXKBm2RzPNmHshY7eVGi7WRPZQAf7osy5CniyTK3Qrr4Nvpke6ysnFVj",
  "key30": "5APSEAfszhFAY1DMJTHhfrLeJE4SZHsj7Q1jVhsrDWKZXGXajWFEQevc39D8jMVCSPBFj1xMmybrXVzDvHYjQC3e",
  "key31": "5od6eKgH2GQBV6wXsfhJrSEpfPWsj4yZSbuKG594pPzo8t9XjX9W5Ye6xt5Dgcn3sDRHajaKU8gPuweyaK9r3VoV",
  "key32": "Q2aHWveLPBJbvw1RuhQhRf8JD5WzfJcViZB4CnBJwmb6dbf1xYSYmYmPfP12Etd3sfYdKo4S1jdU2bNj7bfVGo1"
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
