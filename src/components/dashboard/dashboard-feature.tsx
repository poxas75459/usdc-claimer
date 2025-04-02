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
    "436S4v1wLr862jXt7y1txx8Gs8SmT7wNvb4LCT3SG7G19nt8ck5FYpJqQ9ap7QQegvHqDau4uXdTAYHhMSDnio6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n7jNYNeuNdD98cqckE4mThUjdd8PV6ddapzmKCCqmp8XNbdc754br1uMbqjKB6rBMTL53HFFAPy4uyoDS8PFSUt",
  "key1": "2nQaCVq74EaW2JpLaw6ni9KqL8jyf59AMZfVrSCDB9JrMoFZzqeNp2zbCRcRFKxPWs5s1upBM4REyAD3qF66GNeb",
  "key2": "5tatR7K5TT334B4egByQAUBqCPaMg4YUN49jathCZMn7zbeTft5HKEAMsRzaxCPWTL7PCEVrNbejA5zd7h6wpK3v",
  "key3": "2wyygtcsh2tQQdSLc5t468sKbdxRWx9BsPgLhrkruuFcHQryqibmezxh5cTpNzt47qzA3FfukhepCjT1PzVqxaLg",
  "key4": "5ZWgJpiDxAPar8xWyQ1rh49R4mxMPzmUxyGC9AhsGPPKXyv3HjNcSihw5Gj4KCREbuuwXdrErCkQLyeg3Gg3LJeC",
  "key5": "5HHMKsAqgTr7vYEkzCr9hbGHhF4kKjD5YyMr5Q7FdsL7zH9PPSqFnCamciX6rE3o5EoNgW2s81UxdrKq67FFBC8o",
  "key6": "gqrXzijcUiH3foRe3UT2SxZA9HrsMFJqTjtLg8mn98keQ6XxexSN7iCLC1pcJW1YBmTJTdekhEiRKunscTRa5gv",
  "key7": "cXQjDdF8a4bkouduYPcgFAbGGEMHAp6KxArBKPa4JTZ5ak94tNsmp4JuncPGTduUDByG25Vn8B6RDQLYeB88pye",
  "key8": "4JWdkz9QZ57ALKe5ePn5hdnPoohHEjMmCV3HSUQFm5QtsUFoJoTs8FRY2o2AZg5bUdkWwUd8Y8oxgt8ghdVro5zL",
  "key9": "48eJgP6JwiMBGwWTehBiTFWKPFe5ukMHy473iLZixrdB5UHr4dNwUBzmudyBnE1G179hYUJ7jW6Rs5TLXiJCPMHF",
  "key10": "43e66w8XeJ4NHwe7h6jFAW7t77TPp4ZhHv1ymh4oytqBhQktaKXYsWyqrzFi2mV2c7qs5LdEF3hNxfUcupJEdPJW",
  "key11": "XiNrKtK2pdTevSjoUnfWDDpRXrdBPvRSMaCuQp8n4FfDGoyBenr1ztHgSHJwLpuuYVfzYkCMuQxP67VaPCYKXyn",
  "key12": "rPrqA17qY6zpvmEas72M1zMRHrkwtorz159jFZ4R7N8QcP4PFidmmKkGib8GqDrRpq4zXzAaVyo3j66D4LvCNwH",
  "key13": "5vkj6MqLU2SgNikG3gU87r1zXVQrtDJfhzgk6DJPR5dvFkkcP2SCmcTDAGgvRFjqCtSnG2cFBApPQtVM5wtDGHme",
  "key14": "2ex8hBVuzPccDAqQw2ycUpvRo4M9aooigKDv62n1DYEXeX7ohGssLSZsFaLZe27BfJ2yRM4bqpuy8JD7qAzSqDCs",
  "key15": "2rvHnPBccjyhqrSqibJs3if7NYiNNGfReSnAT9SrwUQ8L7oQRDQ4GwUWBhiSHd9y1AWwbEaJhEQ9oFB5vZPcfeuD",
  "key16": "yXy1inSHutuuzEw1tnNscD1WtzFjBpdpo9uA9fGixmtnyinhYzkPSM5LR9wG1QvYzM2YaiAdFfSRch7FyVyiJ8f",
  "key17": "4nyNsuLahEErhd4Gdbzug8ADKrDaGaDcjUGzNyWLb1S9jPZ7zbXvzb9Hji9eas6swwyGTygRnMyTDkQc1jFu9jbR",
  "key18": "5o7hJSAjxAAEknBPeLHz65vENGyCdPNtAM4xJNiqrPKPsMAqRjaEeiGppDXpAtd5MApdXh3Gprn7WBackx6GJ5iu",
  "key19": "NUf8zeG1o9XP14LNNT5jbdATpVjTxf5cUz5whLerQXAAftFs1duaHKad5fkoExoz2r3mXdz1pf9Z1EoJLbCgLRx",
  "key20": "4JeYYBjuoWyDwNut134mvvL2ECNHsaDPJvs1HsNETt1WYvzLcBfmZQnXGJ52R3hrY7xdohLwg6fVFKimEWumytk1",
  "key21": "4jUKjLexcaaqiPKbfPvpXbt7Z2X8wCmUWKwr9ZDJeNXDZA21E5zgbUut3q2nTy6s77PWVYPM6Q3YWPC3FWYuJTJR",
  "key22": "3EWBK1TnWfV7ab2xgihz6C9XGUBFLbmGRYjkLWDdzp1wS3bNHiN5Sfa8MmWdXiyfSY31CMKuW8hcGVYJJKdhwQRf",
  "key23": "4f3epjXGYruaKxzAd7JiXuTrPz9p5dzyCRMVEshD1F3deMFUhDqSwcpRL1Wn8pWK4CKx4GtTWBSQgPQaV9twDvLC",
  "key24": "fCgjxCj1n51zKViMP6zoU9e6Jvi9AkLzSAcwUzbgueKujPhTantttBnqLHh2fyYGFFNgELsJyVJVv8zmWodHoZA",
  "key25": "3NRwy6iki6pGSsD2fMdaJGEtTdbnZpKSiWkREbbjTqbU6k8sivc8hNNTPeSmKu9jFNvRD7p296VJFguLJE21TLkv",
  "key26": "4jjoZvh2siCdbJqUJAHPtGp3S26Z1M42pa7pSGLSLTWw1rm8FnsPRrQ4N6kuMfPFfLTKCZsJWU2aUMsBLaJ6iVa4"
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
