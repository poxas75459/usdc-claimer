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
    "riqxGQb2GiHkWeFPdPQkWqs8MLZrG2UvCouG1SRs3TyYbvwVeYZoFD8bGB3mxZSAo9ugrfKzVgk3XeP7iqTmsQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9voVfkMp91q9hWgzeP7X757CMvR3hQJYCy3Lm22LrMC5F6j2DYScGVD52JnTzA9DhRfitKHtx2ejDdzbjqgTth",
  "key1": "2KKBNxWTjNmcdviUPf9LjyXCBXHx52nMXy7Zr7C3BK4Y8hUJ5v4WpPPhFnH8n2Y4jKsCkrpQjoR6jnAR1Z2oFv1v",
  "key2": "5ua4MNX836ap7TxrghzxVvKvNh1droNBRvjvWWjgBivybdfGex2CXpjDLMQeAgTd7yYTRP54HuatLxVtbwbwGugo",
  "key3": "67BU5L8cptHEurSmPJz7DBVut6HZ6BZyh5yBXNxJfgZohdd92Ls5HZLiTB832Dgdz8krz6X3RyhcfLSNSKZthKXo",
  "key4": "3zzrpWLYtEmkbxyGrdofYKN2Yr6ZJ8vXA6begWEhXsg7oMa2sJfjmEmyWHw7AVAr1N88ntAkqxe7L1XtBnrszx8G",
  "key5": "3NTMxpjAt7ejmaRDNH2ZDCzPT2LQskndRFm3RV4iBxcqcTqYXnQQYPXV4VLJ9SjCDku8cPFmTfXgw7uoLkV8n9na",
  "key6": "5stK9pDadKk4PJVDBPTmw8SyLcaU8wLDks2rWei2HzXWFwjucZvSkiNdVusHr5ajzrGPKoKHMLkhLhB1NSJHzM8q",
  "key7": "HbYyQk9vEJNztsEQd3ToT3weX3oUvAa2ch3pEgZG8Uwe8vctBvmRwYic9kfraTHqUFnDQvPp2NRaLW7UuAfKomS",
  "key8": "PdPXaXrmdEsw45hTm6hZGChB3btwBjxRW533JJufUN9jXDriRbA7zf9c5AQHjie2zKYU7FqctiDsarwAF6JNz64",
  "key9": "2PTC3HuMCX7o6KsEUvbHtvBcg4kg7Gs7sxMsVSrfqaWA7xLJcuvn2ecmQmfdYkzA5m4Qim7xBTc3viWvcJ83Ctu5",
  "key10": "7o5obREWqTuBE4xiY27Lab2saSkT7EEcFgenRqqBwjkrrbGGC7zweRg6WQ74qMeNnndDAGqJ3rugLEfHhWPjbvD",
  "key11": "4a7faztf1Un3wa7KsRSmGsHqF4ueDWmmq8vhViKoomNCVgb4UXGySqcacQ6VniZM1dKREDo5Xonsw8HyWvK41YSM",
  "key12": "5gWKpRGgjZJ7QkV83jqkvzGAFZQmj9egr6aXCdkVnZV5RHEZVW3W8Q7g5KsnFQEKxQDuhhV98LZ8tzwx5aQGaNMa",
  "key13": "5EUHscQEDrVJauQWRGb2zDo6uieztShx6QYrXUSXTCCKvihV13JuPhv7QUBk64BU5TTBmjf4pTqRDQUNSRo2J9yT",
  "key14": "3ctWTxrkzLscKxfcnsacfASTG4f8ZfjcWqLum5jabWZB8dpZwdLjXfccKrc8w4f8BJzP6RgFzVwn2D3sG1vURv3R",
  "key15": "4wgboNdeyF7CYvNDPru2kQ6rcaCPza2gx5tuU3x9uen3zYTRmkQfqshRSADwg7HxNVfAtoYWCqvYKThKqyQ9VYr6",
  "key16": "4XS1SeRULdpFXhxnoBQWjLm7iHcuRBGgswBF6z96471iuoERFTrfkTAjVeXpwtyPa7d1UuB8NBsVdGGse1aqeSGu",
  "key17": "28hnfbPBpwJM8aAD7nPPRU1qwhdCEtquDNL71QoCrg4XSxiSop3LGbxp3noUD8fTs8drmYqTZZobqAw6zoYpsrdg",
  "key18": "5nmed3XKG6Caxy5FTryVJ5xmtKoih9HM1XQS2bvLRXjZbnq42zhfHbRaToy1okTMWJQMBw2d4MY8ttWmdiQQ7oKb",
  "key19": "2Z6dyLaV4hX1eYfDpEkfPqB8m8wCDt9ova9kQFMVMetVdUi8GCFx75kGAYKj38DtYfEbiSHPK3RVn4NNB1Q3k7W2",
  "key20": "4Py2i3DQtDGeX7JevscLRUzkZrhGAtDXLBnJcka1mEEKcTd4sErpWv6xFhySk2Vwuyh4c6hBdu6BQzCCVT9tvyCm",
  "key21": "2Yqbes94VnV5ewDdU6XHAjGow5d2u5NNJh95PrcFdRVnVcNtUQGTg6kSAVWc7wEeSg1mXkSrRmuGdruq5sznoVrp",
  "key22": "5Ee3CUsmo9to5g8FpbcmhFrh8uM1bLYRC1ibj6XmNkitZ59Gi7nTnpGj65k47oTfZMPspak8b5bZdY9TY8dcLEs4",
  "key23": "5Cn7dd6hwzQ6xvmHeimGShuhmWvDnWHcdidaJ1X1bgo9UziYp5qLknEH618oJSNGKzxZLkRQKgjApG9tqwTFrzzi",
  "key24": "qGDCTcXkN1Bpc7exszKJjZPZYUDPZ71FbV78PgoE2wbz8FrPnsXLQNdT6eJmToTFMAV7gBS3isw2XKq1uPTRXbj",
  "key25": "4sfRWUuDP3R4CRDbNtFSWkoqRznj3rMzE9oQvrBX6H4uqTBnVame9yUUN1Rr4KntkMHTqSDvWCGGaeHC9F941ooA",
  "key26": "3PbXgj2rPCofqN4m8qaAA3E96S7D9E3ddy4ARuiSGYmi6kVWVvVDAL8xfpFbCLfdCerNuqSCnbZ7nUkwdRXFZwgv",
  "key27": "4eX7eYnFZXcUk54i5s81jbHmKBLJDtZJkDPhca1nFUmdz2zCmj5vrZhm3U7V8kscLsKVRhUZAYEpiqhbbW9ELCD",
  "key28": "5tda5RDGmQGgKPFgoDDKZ6UJyVZmkutpJ2g8FR8DwL1mHvSuLjPaXNGd97ze7SJiNKBFJtjqC8tBVSWGKfWXXBjm",
  "key29": "VP4gmktNym3JAon1kGxFLwnXbWMQwncFCR7maPBHkTA8zvSPmEYv64pU4FKMUdjSrxLzR6SGBQcLssnue1cHtqW",
  "key30": "47L6aYMMmwEg4MapTq6K5EogivxguxxVnLMHggVvhuvk7ALKx8Hmfhddu7atiFYopsgjFELpRJsZX6WLVr9evT9y",
  "key31": "5xnSVid59keACD6w7nyUNVT83P4Y8BYNHrbRt2VtHRsiEKNAAboWi9UkdwLYPmyiuj1f2fdjfAbkGNhM9LWFzWRQ",
  "key32": "48XvdqCCEM1QSTo81MrtTSm7LQtbhohtojHZg5LSEgms8xc4zotNPLTtJuD8JLP5X3Z4nESH3bG4MJvz1g21e8Q9",
  "key33": "5VcC43Ge6GCDFcxcCbwVvUVjTjuTqZLfouCvNBAA6ioAJMXRHNj1DerQ8Pfi4jas3iJcoEJ2iCGwzJCTNZX1hz68",
  "key34": "62td4tqCdXrizDKw5FFhKBkC4Wr2gAYQHNrHAy2TfiVCrSa3c8LgS9HuYF8JrfFMrN6ixj4JKTnXUcgL8kUNDJjR"
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
