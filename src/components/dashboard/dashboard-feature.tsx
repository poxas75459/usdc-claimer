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
    "45bHQDLbY7qR954gSeotpD5xgGxGoqKBP2hiBSTEJii67gZTTYs5ayQkXv41hnaAq6DbqwN1cjZwfhAo7tLrhsF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51bAwLVddPfVWTKtnCP5GLjzFLWK6CRjW4RDduStxGmKEwfca8w3avi6ykSskRYbkvUgAhCxWcJsu2hgAHarYHcR",
  "key1": "frZeFTRW4fphxvW6kPANm7aQFY1C9bGgXpPkkWvCDuMmNAyWALmMSdWVdzp4R79EXihJqBYpLoGyiRbvmASzq9Z",
  "key2": "4S3ex8weuxbHX59Rxdo9JzWmidKRqSeZAYbm5TD6m3HXTQhZE9nHtwLNS8bt9Kv3X3JZPkqwyHzewig93ey2hir1",
  "key3": "3HQbyu1c1Yyw6oYQJTK9UM5Vr9gksi4ATfm1FHuYXuHXzQCUbsgW3sfB8ANemHrnv4FHLVQWhcJBhEJFP3epBBX",
  "key4": "2GEzobT5DfT8debztbfzPjo5dwTFfJRRoNTu1vWjPVZkk2uPrfbepZTEomSHdWzQx1jSAzyfRPMGYZj5MKs36MGM",
  "key5": "61CuZ1zr8qFdsoUwqrkWvoUF6m6ckWLc9ZmBdAqQYkSnYKZm75wWVMHt19Sr4BZjmQWjiJZLym9TkpyC9amFjNyR",
  "key6": "51WARkniMyps2VwsKvJM6f3aST8Pf6yq1HjLBAUTMBc2qfpw7MVxH6HeXB6ryCscZGB97EupgyyKc6DVNTNsdvtf",
  "key7": "4dY9xnX75qSM6yvxf4URoxigYF7neYnfT3NUUGe6P2x9fHaZEiaqzY2kTwBrXYA8h78f8Mc1LUqBfrTdDNyaMnCz",
  "key8": "5qChwV1ibiMoLB9gnxi9ThcfmtwB29PR7deQT3rsrHKKAK4pncS1JxtBKcrr9f3mE6ME8xDuLNhkCgiGrLHfo41N",
  "key9": "3fBy5XquC8PykM7F4GXw4gXidEasRed7b7gNNAKFYfjDVoxRTi8vKTf92CuiZL6G1MLgyjKkkZnoK31wadhtTTSt",
  "key10": "eZvStWsy7Fu3jmLMH7cFg2yUTeLK4BXstKh9rH9ZKWi6KSjm72k8TddQdsbe7M3saUiBtdaZwoebMRx9zoQpnyR",
  "key11": "5GeoLPBKwxgZRan7Qg1Rbu2pwGEScWXjB8AFyrviE8NwKtcgp4wegwMksG3SoCM8vqSZYGbmNxEfA1HMfDHVit7p",
  "key12": "5qRiXizWy2UjtexRdGcwXW5sF2oYfJHZH6guxma3ZhNUsVxHcup86NghKacFSe6AbBUNjKE2RoAvTLkmybGTf4vL",
  "key13": "66KhTN6A1n3tJiwS77u3bdsnmmwqFMuyvujSjudgrwVn9sLKfeJRATmVqpXpFqPt7RGU6giuJDdYWzR5VSm4Dd6V",
  "key14": "2oqMtVKq93Eim9QxxY1dN8gcmFrKUQc3ddEDxT8UdYcnNvDNaNLFoFMRaVHk4BwvbeJcBbkAM3i87Wp87NPizhfE",
  "key15": "GHyuuJuhTW8h8XvsKvZQpK3YtnWyAPzGZWbJNrpQ8mACZChJPJCPaX3bm1HZZyTBHJkxTLrbfijzFy87zwZgWq6",
  "key16": "3PokWfj9eBzRcjG8hZqguiQsmrf3eBPpC9WG2FGkJMdREd82HaqWAvVhHPRNijWd73CaUV3xxuQjZMb8mYV8aJ99",
  "key17": "cMrBwiE1uEbyvtnsmXS7XLtph31mqwwa1WKdF5v1MfwMqrzR9upxGXmuoytMVQiz5SQd5rqvNp8ya18U7tpyneq",
  "key18": "4HLeJwWwDHhnhKmsUXG9MfyyXkAJHBHpFdANwt2Fw1AmZpA5BcLykHHGYCSHumHaw1evzDpjnJ8fH8rk4NX2LQrd",
  "key19": "2MUufoobndptMi79NCYSjM9J1quHT6KnR5nBLPLqStzbWsQHQjMv2GheA2qQ7T64rpm9E1WL1g7V2jfcenpPyrf9",
  "key20": "5eUeRHFXSLszm9fEZSUpSFycwAqA6u4wrufSW7rmSW27KHjJ7hmLqMnamLc91zXQt9deGpjAMkVBbBM7v1fiLzzt",
  "key21": "tjZnhpZgCQHS4q8JYNNZamoSmHFXF1TF8XFs5nGUKBGNXwz3gY9EkHroUzzKKUdhFi2WCMXgoDnaqBr1AK2Kb9F",
  "key22": "4Z7YnLSanafEJXtwZxcAbpkuKZZrZiML47Bhp3Fw45MgoWsUvyCZFNfF7qQp19CbqjrbdcN76W7u8R5DfEQ5EfL1",
  "key23": "4ktWc8MAVigx3pe73mqWzzsRsxByDAHqxQPQnT9AFofDpXU759J3CPFiJspFxWK94RifAp5YaoKsEWLAus1EM8iD",
  "key24": "Bn62Jduzk7sEKS1Tdw1U6id2uxfhiKLdm9isjjAB3bt9UMZsMgiqMhgGs3LqnqgRCkPcuXvusTo72pj38mi6GvR",
  "key25": "5GzYWhxpBqGA3NYSNfADSdDfPh8XpHTv7WKjqViyBLY24Hg22pq27pY2d4Ph8HMb9nevBWYmUZB9tZ798W7e2VkF"
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
