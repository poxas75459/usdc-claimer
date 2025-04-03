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
    "45NbDJBwkeHEywe4Z43eJT29xuR7KTvUUKbcLZBx72FqS3FfKPzQgMkWo3Qy3TPfY8emW8KhKr2oUT7DRa1NBQDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56X4cQ6t7vZcNoG2MWcwBmvFrHrpuvi27HzevC5wCnERCqopDyWFA6yTCEBYXXELLVEniVxbVALTkDHFtDQcx5B4",
  "key1": "2MTHg5mMr8G35sUrTBtBvHf6uXHqLU7bQuz4wi3k2LGjyT9ZoKGa6DMkDvYtvtFcwESFrD48W4sNxTNNQAEHTmmQ",
  "key2": "3WgSBt2vnKRcAVuhsxVd3a9WQzX7aU1J9i5LZDpCp7o1ngULNfencUS7ZgpmHTjDe2WKh9sQwMeHXuzsgeFrM8Ma",
  "key3": "4jLfZ6eT38ur7bYBvoyTaUvLhqBX6NLaDNKPJMWUfjmTYML4z9sFDRXNxAc39taTbNzchPdYfdaPyRmdg8yhPhY6",
  "key4": "3wh3UVFjo9pK5ATYF9fmzMMd5YHqgbiYBZyywF8kqBQFTs5wZKyBAAVScSMKZp2MaXmfHEr6wbVBhEDXuWVmXbLU",
  "key5": "2fTYzgxMsZYcTKUtdN9P573vKmdbBFXLhfqEJ1LeGEepK8vZeuvQwsQtz5aFQuMs12LJdWtmiqy15FMTYuBC8mRn",
  "key6": "2MyocbwBtgLwwYz6h7vfJK9iyiKdiJjtR7KYvJV5qNEuoPLHTA5rx4JNPEVFa9sSk8XLogGktLeAtJFByL4bxiA7",
  "key7": "5kTcNsy3XNVw2KgpJ2jBRySJu8EAMLaGHqC2S6ZECnGQQHcisYM5ojGDj5rx5k2MSJs5csxBd3GjQPpAUMqKaaN1",
  "key8": "4hkU4nroVzbiZoBPwfrzE6ti114K7jfUu6d4pLURyz6gQJALoYhG2eDEaVwTkkfYm8zrij9P4uCi4nPRv46Br9Y9",
  "key9": "3n9M5NrL92SNGpa2Ltw3rvqMkX7a9a6jVxwrqZx1u6aq2UzLQbKhvcYnGyNKbtBPvLbuAyxUDDQw61MfwukdHeTm",
  "key10": "o9bT2kjPN7Vvg5Knt9jC7qMPrXJ8LAYDGnqdfSewSPHYNc56oySTjYEFVyZorF6abtYxsnB5Mu6DXa6mJpLKo8S",
  "key11": "4tGkpscfFu1KSqmZUd98KMLPGGk1XW81kTnv4HHyvhGDyHT9xV8dvDNVx3WLMLwb4yzKFcdPNtgnjhQnGmdLVzVL",
  "key12": "A2r2LUzCHNHbritGTfaTS5D2MFUKvJFZhykq4ZvJzz7Y5MCSA2TZMAew1Y5eTc3ovzed6YUjX8xCCh5t8C6kygV",
  "key13": "5CDAZMQDS5m4ayNYe6z7ecrBPfxxwQdkM6r7ksvagaVYDxLyTFJBL3LgHRU7mALfu5M918hi5GQN93t8kn7pj9fE",
  "key14": "u2atiQZY6QTXWcKYUGzgcsjnG5RNusQqmNVzJcWFY7CA1zM2KGQtc25KLdi5YYrxg3PLuSAabG2aCr6CX2RK7SL",
  "key15": "5Rs8gchmDkm5EkHPPqSLSQhNNtpyw9L5XFDkEjk9J8vNPUaFMBJcTntPs9VjRiGC1X1BWqP1rf8LP4t7iDS3zvi9",
  "key16": "47mKX3r56W66YqQ8ym2ss1P1errWAngF8YKSrUutyL3eRoFFFf6C1Dz61Z6bnzmCMRuKiBvpD2RzjAGJFG2mdDgc",
  "key17": "33vkG2hFb5NASoUVBvKpEpaew9zXWAi3noa9Lgci6R3LeeM4aBwGiD6cJ8RWjvTWJA5wJBXt5oU8vhPx8ENaHPkR",
  "key18": "4foURKohhgP8xjYPPZUCxHyNzCMRdqAezmvTm5rD1YtfHX5PJznyZfZPSwx1DFFbg31BwQ7Q6vZPMXhoZRxDhJaY",
  "key19": "5YimzbHBzBxGKPYKfnoFc1o1fcrbafhAxoWEYnBFJrGjiVbyXunuTC1EBy9rBi3RiYyoNw23nVGRCG7yRyEsFiZi",
  "key20": "3FYrnih9i4jKFU3eD4M1bYAeamvizPFvV7erqYFCQcWbBZXaDPKVbph7P5h3sueUSfJhtesEQtDksqxwsRKP3MWo",
  "key21": "5v3HQjqngYNWE7sr4Yitak17YHptYwwYqVpa1P2JekKVSSGSXdhzL9zEZANvgUSKUUAA8hDWJRpsZJz1XqsfTLsf",
  "key22": "2Pn1n18PPXucSqxsrip7JabMqRUkxYuKzKA2a9xExfYZSEBHGZt17X3weFkVNaNR1VaM7M6UuFTXkFiwmRQ9qaYL",
  "key23": "4ob1h8DgPyCUtdwjoG6VCgLpMrP6YzDg6y6aU2NbQjr1devChM8d5hNH1t54YSXADKbNZhAgD81KWghbiqfW2QtJ",
  "key24": "GBxoN6AYyp3hFGbNASg83oT3gNXob1B653J6SbJf8kKNs1ReoU51KybuVgX75XbsWrY1Sm1XQAdt9n8mkJikFm2",
  "key25": "5RzTBKVAvZuKzpMVfNYAGne3u1zj3jf37EpqfQr7Jk4wwvkemzqoTi9fiUdUs9rs4AdeFQCDV1YgGnkUTUGhk6Wx"
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
