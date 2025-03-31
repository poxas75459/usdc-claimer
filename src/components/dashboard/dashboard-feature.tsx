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
    "2xDKGRzrWug78T7iNJbHStDf2xKfRzjuiiU5Fe3mqtNyBpz9Q548vdHHFa8WuWVPPLriqxcdWT3cQjE7JkWenuU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aK7jv9tm7Ge5cFA2sNpeR224GVwWiYtzZxEJCWRU4wak81N2QEHCNnVJBvk94kVESLH5T1aEQbNRpmt1DcWHFhh",
  "key1": "5X5rj12jjwEttKw448DdpJAFVBYFhkTzF1hN6HsatAVxwJ5sjby8JYYovXS2q45CiP4gUzasNcX85sAr3qzcioaG",
  "key2": "25YwXvvEhqCwoU1YqVEo6t4ZNPEnWiw69ASeQ4FhDFwAP4N1uvVBSmXZS8qYS9ZGsjH1oJTR77V5BnB9RDM55NzL",
  "key3": "4tQKTKVpyVpKdXKyzBQDK6b6Q9xWtD6kuTmY9Rw77jzchBk8u9Y2oqPB7EM2z2RQdwTHKnL3cNd5e1uu86eoHEXR",
  "key4": "23g2RGcsfLHxjcj4TJKwocBXwSe7i6PjSikrMsDxpJCScDxP4hnR8pjErdDU25GAzhhq2EAWJ4JEnJMsd44Fguft",
  "key5": "2pw5vFBCvGaJNdRXvZveAFzA1xFpNPZuohuQqWLLH87p3PmKfZs8J2FDxY5NZEto1upqm4344i3SagHZzL3pAFtC",
  "key6": "4Ri9dJzx6p1zYE6TeZE87FGLnVd5gbp4D95f7PSjJnbhFWgVJhDdB5oxEA1tGAPtEziXPJNU2i5xZiKg7F9CFtKf",
  "key7": "s1R6EaYAGmfUm8bDG1nNPSb65TX6DkvttqmBQxc7ownHsgkcP6M8La1SpPhocC7pUc15UTV9vWiLxgFMfpaoXme",
  "key8": "5p38HRsFFFTet9xXcq2iKLJDHpxcNWGVi7KctX7kwGTDG8g1UnbeHvBLmEyYfzShrzR5fmFPKsRjScsvWTRsHzU2",
  "key9": "62Mp63Gwj3zxDwJdhbivZyC85oiaZHreVQmv2r2QQ1aMzvdAdCHqMgD8LE3hLYjgz9EN9zkx3NBYcThSgCYrphgr",
  "key10": "NEyFELF393pUJfBUFeR6FegZofU87uKb2UiPQqpnEhisTEgSMzJ4e1DQSxwQiFLToimouTnCAMScJB1dRRRfLZA",
  "key11": "44ZegLScVDGWZkEEeaJxKbYScFAmskTJWysurs1yn3QD4XD4BmrRiD28iGwq1Yyk4v9skBJ8rAPVtTN8bKzBooMQ",
  "key12": "4PzdRJzqZT94X8SyQyW1i7tRCK1RzZ5BHrSgytobkMrodq4pU2XL4NH6RKztQnLuSMJibhx1SaW1rtL2Xt2djwjQ",
  "key13": "5joWypMYXMGyKmR1pYJLDzJdvbTHAt1vgDbmjAeVUHD3WbJNBmhw8DdmgeWn4cpcUTmLThp7x23BBYGet8ReDNt9",
  "key14": "5w5xzW4ND9EgDzHB2Fxs5LB58AmSwpx86LwezmtJ5ndidxnND8aPmkhzQiWhpGFzu6Wu21bK9upfZ1jpk3pR1ZYU",
  "key15": "q1Gc3B5N8NuHbaTM2WXq7jVgZWNXRWg5TThxsA1u6fT3CCoEUgnFmdqhyoWMG6Y3Bwzx4d7xA9PuTKXWwCHyJUr",
  "key16": "sncSMFqTNfwVYEkHmmcAyYatktT2p7r2SVi8tarTDJf2ETcR3PgUuh1Nik69d6wtAcXBePmxecveZ8TqgL5mdq3",
  "key17": "BCtUzbiDiFRdhCbPes6ta9mcQ9tYvBaGkewyynnT1mqU1tChf72h48JVia1VggUCFbBtZMS3MTL3TsnPym2mFDp",
  "key18": "5GMrP6H4ko8ok5fuMtK3k3mGLP1WsniaL2iZ3nNnfa6DFDiWSA8iGkKcjUH6Nd3nxdsgza9oTyk9BJnZ9CSrAMo1",
  "key19": "ciJcRSuQjhGhM2xP2K4ufuGzxBENHG73pnrma8YwQZv1T176jW8ZLTvy6CsyQBDiQ4PcL1ey6kEyN9yNJGMPs2M",
  "key20": "5E1hfqdDHw4CcB6XDLcKBdLYscfX9NG1MyyP1UkzAEJmJhL1yfzeHE9Gh1TDXJGQwp77XuBeCk3kxev6rYoGKDFG",
  "key21": "5myPYRC5PuQW5PB8CjZbfjRdyHXSNSzJ8wnTEWxJmbkvFXrG2e2mCF8LkudeyHzXc3NiPfoqBZS6CEXKzhQbMWRW",
  "key22": "5eEGebeFSCZJ3GDNnR12pAor6jgPyAvLaoeWncp5bBuDbzZ5pAeKzeUXUJkpsJEm9ZZmPpxsDdWfb4pXqfbxTqvk",
  "key23": "k7t3at4WhjiLgPtgybZ3Ni3SvtUvn1rSeS2nRVJc2xm3yHFmfzupp5YoUZtDHTGRSGkqQi7paujvFFqBYVQWPE3",
  "key24": "4bMxp5EUQrZYUn11bXdG8q1M1tMr3JA2364LsfwHuporoDtXyR1g2MCbsNFPJcNPMkc1k3FRj3A8Qu2tKkHVq22R",
  "key25": "6431DQUdMoAyoxuRJ3KvTzmaBXpoqJ4fmQFCL7SiNkk6rV29y7NdxToWXJuvr5CCyoBhrLLUb9NBmf9Yp1ybZxf7",
  "key26": "388HvZFFNjKphqBNnMnf2S9GehGMd7HZR9vaF4N8k25UaN7BnKwmW59XBWnpJimEsnSWTzeRypSrSiKm3DBzaMXp",
  "key27": "4m8UNfeUAv5xFeUwHHYcW2hMSLWj6oaTe4V927dBfc8afWBmnMqAB3JSckXpz25H8Q4DswmKejjGvGb6TSPM1962",
  "key28": "4z1SPVfrWj3q6ryx2kyqGaNwrrnwhW7v5tmePCSooCrbQMSPgtsZeAqZ6UcYEoVwsXvDwtmTgqHe8CY1vjFHvZeM",
  "key29": "5fSuNiLmVoQi7Zq4XowxUikQnvzUmwaMqfe33oNnxuvFFfzTJbrNvWB9WVczmfw6rm7MmzobzTgasDx9T9HzhCEN",
  "key30": "TwHJvxNz8FyXq1qm7zKUdkQ6VTAnHuEkSbHMtzzLmPdbmmiExMdF38yaHb9ocuh1YvrScdR1GrWxX9d5UV1e163",
  "key31": "4ErUMB5MuJSnJ36coLaPG3ruNpanFEr3HxAgNWkb6RzUmotS2uGoFobuci6JkGkxpf9ykxviuCDaVzq7uex5SaRr"
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
