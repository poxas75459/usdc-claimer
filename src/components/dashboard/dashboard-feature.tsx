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
    "RYvBiiQcWWmdfbzJHQ8uTFCvbk5EMMt67NseDgZqGk67HPCXE9rArbd3Xgy879R8FtD2eKYdbFHTsFxRHtctJHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RJivAm5kPFMKM4EqM7RXaeRPFqhFrersq6aW5hZUdeTAxvgfUPKMziDVMQn1xPaKAUrQ4ZF4KNobFafWdeUjQL",
  "key1": "2HA169b4VWLZtSZeNEfQP8AdWUKeTNfQC25CAK65aHxhRnKpSGpHaMvKw7kLQoSR9Z1hvdZ31D4z2sP4WRJ97Lpv",
  "key2": "3maUsndQo2iSDttvPtGUz58DvhanQSK4tqFuheioDH6eS7FF3gRzNVMb29PTfM75JPL9ZAFyVra2o2Wwb44A5Bgm",
  "key3": "4K3p777tJVeTuFyzqfYbpRMUG6WypC3oAkB3XNYyWaPtHaqmzVGUVscC51bZRom9TWL7DQFmF3JXHZw6Lz7JfhMt",
  "key4": "3zvqvKCiHaDMYGxr8cLe83E9Zz9dtR4MqmKELZMEVYSeQQ9qzSxkpjwtVHQ8F6piBPZvBSfHKr16mgfpa2gJXoig",
  "key5": "3XRwDPow51hbxnhB7GZuwNbKfvLBMHpa448HXJyU2kzptTkJXEQGtBy8ADEWVP4YCbNgnAwUfP9bj95SernBxYyt",
  "key6": "5UDYtyP55Bb1QdN4MdPKiTYaJEji8SrpdNuXnHf7VzvQPd99jpnfNXtyFnDbiwPBrumLapX9kEMa9VQ15i591Toq",
  "key7": "5nwDfWCyy1ugTJjtbHoDnnRqAL6rcxAKKcJE8WfHdFMFz8tP1vZNPuU8RVbe1oLQ2jvQr9vtGuCFfkShbyevzaJj",
  "key8": "44KWWymEUkvK9FAFEdECzvfBN9efLge9wjBED6BywFYx8nSVbgjJsHKJvzgGYxityonnp42pnhw2766MAt9e1Q9x",
  "key9": "4CbEVsyxfkELaaRvLtwAnGCQbg8aG87Q9nX9R2BtTwCmXVNprz5igVRqAPKZtyzzywVdDvmc931Dx9KatqeuNPdJ",
  "key10": "LjnwUPQVN2YdoymHk3vN6ZevwcvY4Udhc1GJufivSpr2JVhbLR9Kkpvfht7JrTxstAFZw6i8wgDznjjSjsbPrHF",
  "key11": "5TiS6Zg8MU6dRuZgDgPqT7VNLGnsCNL3zxmNimFG5mXPPFTDN1YSdH1payKa4weDSZ9QtwxA3r9fwkdCjJDEXkZA",
  "key12": "4w4hbXDcjSz75rFY88Em8jxFiFeNiqPrM8tyaQMfR2wXNYvnTJV3rH9A1vmXibKcYy26BtnXmEadLKXExkVJztwX",
  "key13": "3zuycPvKqKGQBBnwd9qGczecsqcCE3teZhZe4dy5oQubKityivqXdPjqSPoFPkjjPbshhkkguczw6CPmEE4KcS3u",
  "key14": "5KTHyNRAxiPdo15tUYqJGrFynSk5XSRe9454UMDwEhFnmmFWkpZYWAY1trjQTfHJGhEf2koJ9QNHCycrJbGtnD3D",
  "key15": "3CQ3QTtVh2aYVay6LsUbMtT8FxoujNmRtT2DZR8eM1yhPHiVm6iM2MfR21f8XCo3SFTZRHHXMCZqqRFqUrEzq5KD",
  "key16": "2iRUCv8JoYVgV6dbmMQErSbo676Ug7QxEWw9UVordLJdwFdgkxoDBThx2VDPx7gP1jvo5tzpAkpHpEqeadiXajtW",
  "key17": "3K5ecUQejmgBUAmMAAwsrg7WdZJ711ArBEnvW24CNGr2qXKLbhz2PXorcYUAGwtcYH5iijTzf1pXmPdPwGQfh1QU",
  "key18": "53Pz9ujKvzaYD5LeCn2acx1LbDc6MdoamUHPJHQdmnPZrT1xr5WxJQeErptpJzKknTLVbkNGjHrtLmtV48gbTH51",
  "key19": "PAF1oV9KMRLtnqTofBLsgkhPDReiahwsgy15Fj11QG6rbwNTZ82hskVnpzuGh7ybL1QLrPH2cgouwcQdR7FgnHk",
  "key20": "5MYeP6aeGB9nY7EMkVm3exJM8KT9mekKAmAc7iMy3uFVMjEnk9eG7mT7Pn6XsNj2pNMF9EdMKT8L6dra9LqHFdYD",
  "key21": "3AdjorDPm6K6CRd9iS9RGTPpu3hgSu7G5N2kjDyzXuPHif567QGNwNiv7aJovgfYg3SvTY6HGTLziobyY9tBv5Lg",
  "key22": "5dLDXiX3C4TPiAXYDbmi3USHmXy7XgqZwEw1iDWD7usQ9ppUyGyk2QVBwJqVsgptSHW5zmMZVL7qUUyhRe2ccT8k",
  "key23": "5cSMSWCrB9ZrAecsULkAZjzAJHN2bZMjM38wtqBkU9F2uxKcnzvkMmPrwnSB2Z1RJaHFohCsBDGJA1v7uKvbhJdX",
  "key24": "55BZYS1DGVNghR2LP5XZSD53JWecTgzJTWpiHktMGUuYXwRHF9LJz3jNN2Zvb28StGtiqYjtj6DL6Q3avkQBgttB",
  "key25": "26SwULCm4pH4QSX6hfLW36KxuXVr9ST45bmjPGEXk1EshK5mp8njXZcCv5rwCR78YVyzLng9tjLBiXiMizRNpv4W",
  "key26": "3tqDbL9VQtU9JjfZ6wPnvJRSmA3Hko1qKqd7m6jq3YudknJYJ31sumv6Jn8i74tWdAjkWnek3VKjNjf2NpcAXBqQ"
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
