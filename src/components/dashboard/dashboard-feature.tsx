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
    "5JU1WF1DBWcd6m949fyukXR1qcsXx8qSi2sEK22dEF8gMxVmTcXdUa5tkzUd8HL6UcygeUqGDjyoce28EMZTZaWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrgySxJn1Ei2q95kGw122ZmBwcqSj7aqKVrJjT8XJmosgtxoSPdh7MygiBGHFvtfRKpCNcJT1GWebeGvAZJsxvy",
  "key1": "31XS5EMywHnS9826sZL3apmc8b19bdAr9HUnua4rFWgL2TJNiyLK8GBKnMxyN6PYAupR7ECQyi6h6wpxanRXM8Xw",
  "key2": "45Aq8YqMtNwTwRXxXthb7rRVieiBVNHA1DxdxeotyoviubqczZ11MaF1Abb9bYJ97FcujoSanaBTVwpxt5VgUF3p",
  "key3": "2vJS8SUaSUGFxPkpqUFCFYaRMnxPxkFVGfykz9gGdU5BovD1i6ePwk2yTUaKefdQe7qncFJKonzDqDVx88Q4HVDH",
  "key4": "3R5ENCinTYCUUjxPzskvuCV2mfZ2LAo3V6VS51QjjVQ8oVHXVkWzfMc4eq8bhjSSWdtY2HrbNdRWVDP8bbgnUHF3",
  "key5": "4LpEdMy3LPJCbMLfSEDeyZTS4wAGTRMbsH55y418UhoC4q4t6SveAnM24PiJwCP9Qb71zjrbapi3EvZixoK6Hren",
  "key6": "RB1pNahyLW2YaJV6Nao86MeenWmZmAJsWJkYEkUgopSXY4ZY9PYTUXBDQwAnhUkSSnYxnRUrFN5cdNj8njJZocv",
  "key7": "TPQdhfSWPJQGgjtTX1DSN5BBw5cGdqTBNHx2yA4mJ3NvxvLDMPNqXmSqiTyANU6accjk7G3cP3a4NZToqoJcXbP",
  "key8": "33KheNMtgUcbqxUT19x2oBgKmfbkmTVU2PzdbXR2fh3FUBtsq3ybKRK98JtQLesnPt8qMrLkvLGZRMUSnBPV8K6T",
  "key9": "vRsfHJthECzWg1QX8EhBWxUPShpA7QmPP8HYAUDMdK6m4ooMhGawvf3Uw7epjgabfSBqxHNYtzbjcGEMJMpYAXZ",
  "key10": "KLa8M1XxZLjzgYhToA3Jk5CXLRGHZd8Jp6uhrTBPf9CfXhKPMyArULVajTY3eiE77VNt2k1HFzGAztpsJnDCDQD",
  "key11": "5cEKFVnmhKLp5Z3XfWTXkHEe1o1SFweHuMWAkFsjKZ4B9zNTisDEd1kubuptoAgtha7dxXBy3uGZfzrYayZZ7At9",
  "key12": "4qxRbefM9teKAM7UNXaBvsfX12gRRqQNKGBZo6zHaRqJMkThZCJUaYAQyTvt4jCh4SWaFbkw3bfPdBnbjme5zhAW",
  "key13": "33Jm4p4pF6aVTA2KRTGgocTG8qDLpBgxhR3FUKE52cKDi9CGe4PM8nN7uvVeHBYCVBhzR7Q7yfP52DDjjEFErJk4",
  "key14": "5wrRvhAVMADN3BSsFx9MeaGkGmiAKF3xwez7D1zRpamtJmQU4tvBNMAqnqCWcSs389uSXgwUDkAZeXDKhEA5WK6N",
  "key15": "3HKxomwhbTA7JLApPZwQsT7koWT1qoT1jziL63TRzqmb2UEQWz4TjfYNsAuWuYFSwEU3evnm575b54ij542oK97U",
  "key16": "2pidVUmAJxVV7x1w8Swp4pjDSuWYtyKZ4AKDq4UqnjLbzEtZCM946UcwoLqdQfC4ygJ89GRyyR9nhr4fidxoUq2W",
  "key17": "5iVE5yNesxPFS3ixyunLDdGKogjRLLYDV7VwQ9dHiQGobz1eyZzcgjEYqHidZ8HA7k25R6fNyJ1Uc7bensMYiCYS",
  "key18": "4355tvCFiY1NWecEP6iwqLG9F5QRqNg1bqtUpSFrKK2hy9GweePAzrWw3o882NyhLPdo3J6jej5VFPeEegxWMffF",
  "key19": "3pmjUdmoVLc5UevFWipdvndKrNMpePgCyeQNhMSYYRBNZwraqNYF2JAd1V6qjYdCELjg9Py2izCrdALwbzccRSCe",
  "key20": "5crXpynEVjhnbzJgNMcsG8ESRYppRZ949HTfUzYdzGwiWQBQUvRY28rz7AieUpD7E1Yf4WfUvYTorMc3k3ZmtzqW",
  "key21": "35v4jrn8hmTX9ZLKbQD75hssFEUHqin65SWE4SFfPKaSDcHDdrxruhHfbw1V4VnEAfW2t1eCw8TQC8ERGy1t63JG",
  "key22": "37q3h15h9bqymtdpB1RqndpBtHFJcBoFAEBnmGwXwsZSZggVjQo3Cqu5kizt2yHpcHvn819tN22Nfr9e69iPVQ5W",
  "key23": "48beV3WxQ5QrS1hdnZTHZXkR8ssH5Xk3avbzYEtvkr5rDU7oQJn75vWg5r3kUmDCjgWBxB9DzuKYCTw4v2C66fJ",
  "key24": "5kpCQM5xLTbX34V6c2diSE2wmhYEEQZUNbmLyxVy351tNj4wdux4wrkh3sRVReKzmK6urTrq83sSpoUrU61eWi7n",
  "key25": "361cAdvrhLrY1Eiege9PgCkqQtDmiGxUfoF43pH2WsKaEviEoKS4Mz7jGNw8ncL9uRaAmZhsRjD3327dZZdktUV9"
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
