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
    "2f7Q5w98q8ProotV4jAcZK9D7RMwWDuCxuKLeLgkjoXso76AZoZJsZBsV3uoxbxf62maiBb4MDVHcuP5eWNhLF92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JG8Rr8R2Fg4HscJcPSwfH5aYFrAebpvcVrvYjLL1HVzePS9i2VhW4uJeQmVnEGmn1iDKJpkLnjS2q4TUQNHkTZp",
  "key1": "5WMhPK8Nin8fgxYxkPjhGdBHZTq5AFpQWMGqGbn4ygGAGYsmC6n5ZvAUoYB3oHV2ZjrgtUS7A4JQgefhw5M62qXX",
  "key2": "5dAQkeqp7D2bDZ7qTMd4E1utcZV4oGVJoA3SK6zHkV7PY3P5iCg7AtAzfiHafX9NevEuzys8usW4NKJaF9eBjhHR",
  "key3": "2fhkTsuD2NPPry9bz2XESJyvna6i5o8XAVGHNj7dijoxyvsByK54jKKQce8nYHYtXBoU8Rqrh2xYUW8G9HcchaL3",
  "key4": "2mXXnpWeBRGxC64SK6FHL9SjSyjezXm86DSjwmx3yG6wfW2tAmcv8noiUgJcsHGozJbdv6REK461pGQCkmiaLCTS",
  "key5": "2HcyqQ7zoq3etQLA5Wdd4Bqc2zLa556j89UwgrkgERzUnJFR72FBf4zKyUcXGtphZonMRowzKhQj9xGUH7x5PTo6",
  "key6": "NeQBwi9uG3Xr8WX8r3NqH44pRUTNxMAMY6waA66yowiG246qsBfcFDJGdx9wXyMgfGQBrMyjhvPgQmsbBQoHTrR",
  "key7": "foBVGAm5H5DvRQcxa6mivZ64kx7kBiv7FQvfoC5aR9asCpQoReumbcuej8BXHDpe7kaVySz5LH43zZaDkmthj9x",
  "key8": "2AirY7Px55wxQNRiUuAtnfA12zWEtGisjNxkqUQb9sR5aqfFsJbL9d56WAq3pdimkNic1Ko9ifLWuRBUb3iRQ29D",
  "key9": "36E8kTAaLy5H6S1GRADNPU79A67Q7s13Sz5uhzSbGtkLyGaXKmhNkYpt3VmDjud7dQkwrKDg8GxiGhH5bBCnTRZh",
  "key10": "66FsTKn16N7JwBDRnfZv4fuyFLtXpGYPnmuhfLSTZiEAVLKkycTeocbprYVS1QWAHHioC7mRvVsrF25XMFqsVzpL",
  "key11": "5Z5jYjct4HwCtbTtNFkzrLBTAS9nVKZnfNdjoho4WqybZCXGuZh5j4h4Bt43mGm4S7Xdv6dQEFBqGm9juoVHVvoz",
  "key12": "39uy1QP2y6MeYakADmDUqpmxvLnatvwx1HBmFCGnRx55Efaj35wipogLgUiZWzcJ9XKR3Fx7sBamPrXoX1QfLD4r",
  "key13": "2Bzg2bAiHCCBUpiVUSdPW3waT9CZo4xMNbHvmAnxFpBpEAvaYfvp6QJfCZFPo2zcMrCLsdjEwRoJajf4JdSzzbQj",
  "key14": "2mh8EefcusdT2D4fuoRNNHLjeczNV3ZFSkp5BZj42SpMQTcX2ewo7pHkYzChJu9Q2FwFYnzrMGpxQtjwdsBZcXZP",
  "key15": "3vm3qqwRxJqe46QsPFeJpLoTomqy9ckAsCFqQmadkir4AET7uaiy81WzfXdFh4tpatth7thpQ7oABkRXgZW9Tdkn",
  "key16": "3Pwax1EHizaHZjnFV8e7JZrpQ2JCaxnkBmDH3XurL2YVchkcbNU867nSFj4jJ9eqJekh8tzfv3oquMHr9ZVASQ8f",
  "key17": "4dFW1T6Rb78GdGeoykYDoC1dwePF2VdgQkQsNfR9HA3fj9ACVD8jbvY4DLZv9KJAWfWN7HQpW7fBMMbMKL894jrG",
  "key18": "sT6ctruuHAwftzzaDvfdvhEat5DkLVWQ7xjoGGQR8gbYCFZ3JT7XJG2NHzrucxcQmnbMgtunUDnb5jd2ZPhE62s",
  "key19": "2cieHispSwgrqWHx2KFq4sdznpJ2QZiQ4amhAw7UeAr4iTAMEkECqyo3cHrX9XgJsyYcpzFYWJW61YKQPC3hEGnu",
  "key20": "2zZxZUCWqCxGhBqepuJcZvajoe31QTWDmJt6aAY6RArnK48RZ1Hzq2sj48W8RosejtNVajEMZFUmK3eYeCrMzWJb",
  "key21": "5QthR1z2Prwc1YfBijPoTHmBwFoffEkQmnRfGTvGKP1hbNPwXLqCSyqAkeAd55wAahNywcSyGQyT4og4K1k1GVFc",
  "key22": "PJnqReovamrkd1fQ49VXn3pkL9EDSP1gMq5tgKRiRrmA1XemkYiMqA29tqAwYzreYtJ3PYihQi5zEsvyJeXikmS",
  "key23": "WQ4AD8WgzhvsS7ueyUmpTuGsjnwv39hCF7VTpWZX7rWvHyYrcgXNowTVS3ZTHJojAVs4Hj26ePGoVXfZVMJsYUw",
  "key24": "3c4sj2wwXspGqbFAgJZnwgazqQd2EGX8X91NjrBYobTCR7yCM3YP2PW4zaCrzS7GvFKFDmKHRaSRXNT9iVkxqQpg",
  "key25": "3spRHT1pyaLjMUviDX44FTfctS2iS6HJFEfgrorLzTotHzQr5tNRXb1yhcKaCrXSLsbHUzK3FdReyCurFuS3nRS4",
  "key26": "2rYrzvfHmf69XtnQaBVAVNeEfdSEYsdQYVkG7BuHi2WTyzDFjjbk1WQYygFvVwrPnARbY369gtNmgVTNTHiCX1NF",
  "key27": "63VsLEn5SymiSPmyewiFmnD9pJZemLwUKVmgRQzPF5kzyvzbdGcKTriLTbZFKiqm9ukAXFTKVqXt7m6zarAMvC1v",
  "key28": "37WNbQZtha2fKukXaEXgQhr5PdqpiXTtLcKxJotJxWpxRhwG24BqWQyV51Qoy67Q8MskVUVpa1sYejS5ESWUf4fo"
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
