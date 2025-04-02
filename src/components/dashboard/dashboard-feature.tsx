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
    "3qBXKyrJEsnwLq7f2wZatuiXzTZgcQ45AXkdC2u45xDissgWbheSUyhq4KtaSB5p7PaeybdTUMLA8keGzC57AvvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVrnnWxqvaiojbKChFWwjXTP5mX1mg17A5D98VncykVXfPZk6GJC3mJFrMAxcvkURhxSorq17YxjBhL92enxbKD",
  "key1": "squJjAnSZLa1dCrrNEW4TPkcUTDT7NhN5Mtd1u9KbvmHCe1ppaQED9SNJkWGCmcfXSd8qud4RJJ6RErpxadtdMB",
  "key2": "27jBnUcnYSp2YhLYdCpzrCogbAsVwPVWAQpCjDZnd7WKdj3NDPQKiPdWsRFxRe3DdiPpV2H5uH1STZgVnV24w8pf",
  "key3": "2gQEnAtanRj7Q6dHq3Df8QE9LwrpxR2op9suMp6LWwVRjacLHk6xKzR45jpfH4KHKhV61hnNva75K5MYxdgyw7UZ",
  "key4": "3FVEuLuDbyquXWdddXSDbRrsmpMG5DMqRYvTN2hZ6QuQTuPYYZwAhw5LmS8HtgCJVQicLNXe5dYj8dRJ3fz6Z8u8",
  "key5": "a31unkYPmBWupmuSmCXHLPbcozmaZc3rHteV72WhGz1AhT4dQusgc9D1cpD9EZmcf5UJozyyNJu2YJsZoLGWG4a",
  "key6": "4hzeMs1nTgNVK9ad1625323y6waxF6p7wWCe5ht6nQ6wg4555yuY5ucBd96RhxWw9D3B3iEDaWEEDsxM8YjK4P9P",
  "key7": "5KUcAJfYkkvFzxMFTWBGX826uXHJ4SKEas1yGP11mnUDJQ1Cn7SphgttAzRwA5rVW5NawJvKzFAZykTKMPLjZdRo",
  "key8": "4L2A9kaSY5escfw34Z3gb55gQux5iReTW42Zy2jCnfXDzkon6HrxEEdSXH8hPNVAihwcjChCRsaMcNL21ga2VYk7",
  "key9": "55eicyrt5KVqwjVusMFU8SPwd85pzG4iUy6UGx7k5VBaPkaTQNn1R6b78yqFoYL1VMQMiaWfeTL4Ewaaiw3GnQkP",
  "key10": "4mwxgdGjNXyxwSHTASk3zhAKftZhZsnUGj69ZXLRvVv1QfWB1Z4yYyuPfDRdJ9V3R4KQktG8AwWK8RCS4NToaf4j",
  "key11": "4qwDHkq2zLXRtWKrdHS6hZmW7gXJicXDSnKJsTM8sWkuwcBexnxxonSfEDSkPu8WCyaTwJQEPAFtYouCLhQnry6r",
  "key12": "2bXUvQL4qzm48yZJB39Dzzia1cq2fFqGDA5JjNG1fzqRcNcBuX2RBegYRbXrpLpGEZyR9W58mF2ZZ7JV4a4BY266",
  "key13": "4p315pEg9arDGSQbiw3ic6YUFqAC3tuvR1YafKXvmrE2GEJCyKUKeEcsqciNGDdvkC2Eet5tHvqu61Haew2jJHTR",
  "key14": "5dX4KESG1DvTrbZTa1RdyfwAZfpduNN4vhhS9r46qDPawAqGuv6vFCYuWLbe1ZDovEan7bMLmzUsBPqrEEAX6YJu",
  "key15": "3XZ482MBDRBRx5CENWJbzM3bQQnLb5AmHte1kqtqUuztjsprNphTX7P8LdGEGW88ntK6Y31iW3b1D57BhiaeBLPs",
  "key16": "5TQSJLaLxVtChMp6kdGf7Q28AqGrPLJxwkLxWUakpLUFypvLWc1KXgYC8YcAzzJiHK594FTEbRECf8mZdp1MFuZy",
  "key17": "5YpHvTQoCx37JiXsuzZ8keBpN4XDt7ehzGXT26oqS3UctvchfRvonKk9ctdNaLKHAnPw3hHeaeD9AnveLFQjJvq2",
  "key18": "2cUiU5sWBk6swAsDS64dqyMDXwMhEUmSKqU3CKuA13cNg9giyHvKqZguyXuKTPVttsGhvoK4vzYMpdq4g9Y2NvYt",
  "key19": "2ZjWmWCUpBMwNDLKUQhC2qd7k6NWrGxs9DWFNsRsyrarSfxh3EznmZqWMzLFHz8aCu52Yq1W8KRMVikF34HeqcD4",
  "key20": "3MiSrbnBTfLQqCrXaoNk3kYf4xjt7jsX2rufG5E2U6KPBKY4achiGKEFGn51HkVmLsC9ZF6TM4jEDmYhXRe3oVGb",
  "key21": "3TXdoeEZFeTUonZp2E3kKCEkEdh743QC6GKZv6eEPeAFJZR1JvQLiJ1YArT1djv9bboAx1gz1vvXKFjcBtT8QbQi",
  "key22": "3KPKbpSoc5jpn8PVGwPT3SdLwLzFGvQ24CN8LwVKFw5VU4pieUJYbBLkLtpxndFe1wYgaka1nLZTwo8o6MwQzGNq",
  "key23": "4k9tFTX7c4NjD5uQXvwZYdVHECrkHK6fuPGxTXoT3UgXZkJFbuVrEo2d288iQnhUizN7TpJ86HctcqUUzH71BRfn",
  "key24": "4AHrvZESPM91xiJiyxuHt5j2nKSSbQDT8dEJ8RdTLbco2CB4fCdv536fqiX91D7P32GxsHVTe96SK5uUqtX9mmqZ",
  "key25": "4SSLNnVBCUdVBYNRUGwKPkv1uNfRQuQuUCrF4Qsj55iZd1NGuUrKCXNVVcSGvX4BiQGVYF2BS8rQkC7dq2xeCPt8",
  "key26": "2CRA6qVD1po9DM2CScuNT5QwExiSTUg6XKd5f5V9NRjUjcRDsopNGgibSbJ8XSoHTdqEAxricpgM6YZSLEdDRhes",
  "key27": "DDkXMyvVfDx6A1BBsodgFniRjsf2eyspUn5jp1AqXeTsWE48gDN9vKAoevkmjXzcPLLzpoZkF5pZxrymVY9tD1P"
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
