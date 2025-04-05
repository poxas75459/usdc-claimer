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
    "31RyUjbiP3txHY2XD5CXiFPiHJKPo317LSc8PmhwWszekPEtg5JJirfgCKjvJbnuPXQ4AuxJteagA7zVZBLynkkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "225WV2Ju6DvfKNLqdjshT1TnF8FkLoCpm6eNHiYJhTykQr24XcLPodUoPRCAEDmhiPeQPj94sB9ETvmkoccdP165",
  "key1": "3WR84H6YPnRWx5pPv5GiHJD5hf6cBCKrp7cC2JUHewUqYi3s4erwQZJJFqP8NMRa778WAPMY3yjAnUEGG9HS8vG6",
  "key2": "4FFGc2csW8q2hS2n9RsRb78En6KmB6qvNN2qrvc8yTYHHip8jQfaiw2SPFTQAjYNHDvbfJPSVLdvajBRFbfUFReN",
  "key3": "4KB17HPY2M94vUFeCUuBT77Mat8QsJcmwbDo5CNUwumBJxnGpSLsnnrYSGKhAdHMG8fAzaLXU6tCSNCLQJBDgokF",
  "key4": "3X79ebqBmAd7a6AhSNtL9jUsNwCPVPKbP8mdzEUd1C1sibjFqaFCnuiieCT1zharF4uwdWLbeLCzuCp33ANpb24A",
  "key5": "5JQGwNNkJfSNpN29eFK1dVrA3CdFJ3vkbhMPM1dY4r2dYmjdxqzYM2Y5rGRLW9YNDugVvTBqpc7F64ewsfkQVE2m",
  "key6": "5EH4sCq4sgpEdtU1w2Qtcu9WwwGuzLVoFaTwfeoiPXW1Cz2zobWYJJBC6By3m94WzutyT3prPNCSj1AyELHk8zAL",
  "key7": "3qNaPrB1PqTvZfuy1Beijo9FhegcXkPQREFNep2dyFMUGQrgVZkdYeQSBqwandudAEuDdMYJQaJksLPwKb4mMPEo",
  "key8": "21iUFgeQiMpNk2pg49CyGx9yVkeJxxSC4YaZFazs85z1xYPR8sinMSZ45n7hPDPSK7RR7PnKTTuXGV5Q4hDauKDk",
  "key9": "238b2DKRrt9kAF6cHysGftUkK7ePYof8zzP1barph8RQccUrV436HxmWHxfjjqSWqTqgjxMm77uLwKcHArMwnv7h",
  "key10": "5kCeNoBvf6V9noTZJGvck8Qzg39KdU53Ck1wGJRB2GQX6Uuc6R2f4GexsTos1NJuzHHd6AwC6ZngTQpYJ4inFDkw",
  "key11": "VzCQaEwKe1tngRbA3dK2ewxfZ9E7up5mFrdjAr1crUbqUazuECA1UGFvr3R5jfD3atqwMzRRVifycVtX9BP3JRg",
  "key12": "3CMhVKd3ruHvjyQY16gwA6Ur436eEnpF1ucfJWLGRPdBi1sJMnCzT56rSb3XShhuZaP4Lu1uiGEAFuxJqLYUh6tq",
  "key13": "BLNNLVENb9J6sUu9AiVdEqUL4eWWV5AnHsN7jR3YkjFY7cAVUZH2FDLaVmVWgyKN5e4igFTcsimvuZ4RU3NGjdA",
  "key14": "5vcyvbnhiK1PsdciBSkM4pzddJ7WiN3fDRN87qwg7ypC4jY5bZyWsjZhsUtkT5S3U8uCmaA4bKWBaFBwrq5EgJNp",
  "key15": "4ViupCD5gbNUqf9LyLCZNpJkKwmCMmXkvQdGWAeGkAvsTRWkb4seyJ9RZFnLtZ3asDdWsuPDzcaGFrxbzZEqdAer",
  "key16": "B8RCV469uXHdVmgLEthPrC7mEYyGRiEf5ktSyAEyp8aGa79Q7XwwfMT5CLM58vcmwV68H7cMHUwvgjocgieysht",
  "key17": "jRESXMSuAWbBJTP5zHefnRq1vkCpANdiLsHGWgBGDJQhYEAXuoWRPsJfcx11AhzvMuRt88brnSDHof9XvQ6v396",
  "key18": "2gRSR4prh73SapYkKHwpgxk5GCkrKf9HHwg92ZdxxF6M6Sr7f1yj4NXQs5xeDw5zVrUWcgdrQjW966NjrdLyDHPY",
  "key19": "pUg175DybCqmEPqQLEHKsskcZNb3EXSBQU2MDf2ViKdvF7gbydSRbPkADvg7ZpL1V8RKKwfDs5pDbgP7Y9q9AMY",
  "key20": "4oXLc6aGg7QqoYqEhR8rZY2GxoHvixMrWu5b8xz8Tse8f33V1rTa363rib8rT6rVASFBdBTCkFDkqPaLqr9nmJwF",
  "key21": "2NxZreySHXgVbT1ce2z48AJkchnhavDQeDFYtWtxWHvDXuBpzCKwxuk5VVqerQK6wZ1QKqZfy3JjJo2LAUrijhC1",
  "key22": "34GkkuK7udkaLz7KGfVJV1QWz3y71nGVUFoRFpo2W7u4894oQXXyvizFk9N9QUjFJMzq325c786B1eBHh3Adwe9J",
  "key23": "2ReRGxEYJaa8evAsspGuHZTmoFR8T7sGnRNrzbbsyAJmaZ7YnhduhxBKrWXP41ncrNmVFd8MVifeuvQxVKoR4L7b",
  "key24": "5JgfTLdHULqWtH4w2fdi9VnZRtBC7ZnJBWCYbcY1zn62KbRL7oeDUoz1ug3SYSu3JfyLrYmuMJAyeCnJoBFmVgkK",
  "key25": "3MJYZZ3XXK8ocRxE1KhPjMXWNE49JXK1A5fz11Z4MJq5ukLpgJBAgM6t7mZtKhFBaMMg7SzWCVJVjRFmrFvCKEJ8",
  "key26": "5xNTxkTmmgrpyzc6vpJuhSMunH39dUucv4KKTkDEdqpFeYMJYDURfCJZwLzyF6DcpeqkLxQ9NodRDkxEikMtcziu",
  "key27": "3apLxn86khmpJZ4P18xhQ1v5f2FGSucfer7szqw8me4gQYDCp1e3pWFt57gzi7UnrtXrk1g7fhstDHJvK9CQkoy",
  "key28": "Nh75kTMfvGZE7PV8NRsHrRTspySSJSp3TH5YKRBojqaLVVo1bxdw2w58E26Shta4BTdVSeDNb88oHqfGKwSYMaK",
  "key29": "2zsEFGs2tWQUZWzR1tLKbi5EoC4NPMdURY8Sso55E4WwH6ni97VfMULsSUZvNKhTthaoEerSyfG5mBdZwaETJ1Zz",
  "key30": "4qE5L7adHLo8RMdX92HRMrtZv5AgP55MqALTavY4gYTow9TdDYcgMW25seidtLVo9Bu9rZYCk6XL24KXn42LKamU",
  "key31": "5skaJ8HCt5nWbF3iCNipbBxhSuTUBrFmoUd5L5RDH5ksZubrAY6GrRX6MvL9HyqXY6MaomZJ2V3GbiFRdqkwnmYQ"
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
