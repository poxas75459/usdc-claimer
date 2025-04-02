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
    "2YUa3Y87mRfAZd34YuvzYuRa4YTkpJCoAJUzCy1LZWaf3bWG8hvHFqk8Z3j5Qzvp3yeVCvJeAsKuBW1CYgfaCNsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7J2LJytjJdU6X7MqAUZ4urDD45h6wcEozwP96EQLCCoEUr4yoVRHTGn8Xu1FBauzVZi2ZsAhL3D2kN495EDv4k",
  "key1": "2V4DAhpsCaDpc6AwgC7AgupeiWNXXf4txybzCKnoPmhbPvQ5UpPjC282iQzVf21qrGvVus9gmUNGsjNQxwJj5iDT",
  "key2": "46iDjQ6gaqkQ9y1VW4UhttdzDjpP5n5CtHDmW4VwbScprb8W4qmTG4j6tzkeHGkGmEiFUC9Y34vrSjUFs9gu8pPS",
  "key3": "4xMzMbpShq1ifodq93qDApV1D44KYmHaaRFwya5GtcJpBEXrURj4hRkoNFQdHbswQxAvRA6pW3tUuRcS72gJVZRm",
  "key4": "3uZ1zgDfmxz3oxUrVbaxeC9ZrCTk9DHt6bQD7c7Nzepsyafoc6rXb7yumZ1SiLdEv5kp7b7EYQwtjUL1ZZFeebrn",
  "key5": "3hCm9Jgc1CdtxPcv2tDgEQ1atLd7ivVXspzyVcgM5XPt1fy77DEByFMUH8oiyaYKUaDY1JE6GCzTZEN8jcrHov75",
  "key6": "ZxijrU7FgPcmNrWin3q3TNcH7q9u5x3hya8FoT5jUQVMucyLvQh4ekhZ1bVbn2pRiUw5Cdx3zoDVHuafpNJ6JMY",
  "key7": "5Agf1HJSRYgP5VmzsnM6PifbjSKCnJApKjJXJZKxZrqBexQAuPiJRMy1613Xk9bm8yohiuKnKS3ikaHeCP8p368T",
  "key8": "3STqJ5qzo2LXMfQjZfHEHYc3iD8PYuzR5WhGvpFwBnFyfsLYQmd2pv37K2Mit3i3ThSFreGRLBRdSEgeU2Ra78Un",
  "key9": "43FKyBPVwvJ7fTERDyPck2eMLcj8Ugc832nKJcyhz6kV6KdTpmCYpHbnpDwKeQUcc8QF4TpbXLCYyP1VGjaCzUBx",
  "key10": "Yp4Ge2DPKLqML1VhKURy7SphAHywRpeXKA77f6fPZk1qBWHtDUFwYwy5Qn3RNZA2hgHUrajHFQUjaTdTvFkQHp9",
  "key11": "3x4AbrZYrfZhb9PKdph4HLZtWNN9fUwZS9b4utnzhjx3tCoWWUsmGcCe7B7GoLTJKYey9R9zjZAsfXmCTJfkMU3h",
  "key12": "rCfJ1ooa1zAWvD3xj89erpTSXca5756Sob6ZMLVMBavAPuuhEidDqUX34TGjJzEoQh9rocoV219Bwn3sLe8LNir",
  "key13": "5pntTK5NJhCrR36gKht6oknAqEovSBkML62Nc5oPmaQj3xEAf42TdJs8mjVZzS5gAMmJTbedS6KEdz2Us74r6CSc",
  "key14": "2pexBPkvZr4j3erWevoYwzrF8AHBGTSoVVmV5pLyBLKETeRmfbXfEH7MeDmHDCrRtrdM2KAE35q41oRR8Gi28KfR",
  "key15": "57DGKUcXxyyTsH1PKBsfazNXprQp9n8GdgQbuXDerwS3R3mmzvTRKkUhs4MbBQzyhC8XsAV55fyQXXKZTiXDB3pm",
  "key16": "2ibBojA12Sz2YCAXoBPcMukv5ychzyiGamJTeo64sRfTWkbagz3AVDLv4jfo3uf6D9ScQ8RSq6PzPvqizFqvzVz1",
  "key17": "4M24ijRP6yi2BSgcAwwZioRkHsk6uJKBuiq1PMrC1crPXTMc3fDML82tbqVysCvCpCsLgVnUvxumPDM8LsDJKYUv",
  "key18": "2RffGXNm8vhqu9dJcNGbL6Uf7T59ZVdfSkiVYdCVeydFkT3xbtDokRUbC3GPzzsURMizHsmoWra94kxPeDvHQrSV",
  "key19": "4EE3Bi92UUXeoyFFUStZQrGPcNQNJovbFkv3X4KYXwCcn41j6urw85Fw7PjhZvSWbUsajbNxNXRswRrpKbBDws6",
  "key20": "3yy7FiLSejLXAkTuerwytM7ZZUQKchRtKifVmc5VnpBUitqd2zMGTR6zCePYiQgM3w6jkafMt1eUsKiqedSCb4se",
  "key21": "31ZDBWJv2ukWtVywRRZUhMHpaxptbXQisVDZoK3HGy9sxfbUeND8ftAZGTVDnteG4nPP7FkxuYHjNQ8cp7dyG8Ju",
  "key22": "5aGyrm1oitVLdtS3jA9hDWjrFn1SsC1yE1SZz8R5xFMefmGZdGahMKX8to9YqAHkFbZzfCFU62Xf2LrAD1AuNres",
  "key23": "32PvYXdLbCxUCwW96rDzerqLyMZH92yojZkkh8uYsjkbtde7fuvxrBme6bLzfQMejS68XoL9w7KeQ5eiEF1cvpv9",
  "key24": "4zWgmCjrR34vgWZN1vd8mKr6UiwPNMLc6EuoPL3pYTUuiagPhwTLEgLQNjgz7Fh4Mb9aKADt66ePejLhpi2FPYxc",
  "key25": "5MCkguESvrSqXSei5YsLfci479xrGf5SU3E73cUXhbnTRXumy74mAfPHFLkKWctX4tt5Mt8JDbeoeQugkNwSdiSq",
  "key26": "xB3u1HGYsYzXtd13AaehR6sfLD2iXtPG7HKyB8RLnqWNCy49L3ZHW8ALqXLsX6s7tT4npPDv3LEMb4GM7QmXtvw",
  "key27": "eenHUk3rRwtu1W97vxQypN7DZUShmibNS28aHLKmSxkHocU42XkMChA1JWZRSySUuFhtDXfMPQg8uRcUTmxhaT7",
  "key28": "59SHZ7vpuhtt6W3ajMi1fa7vcY9Hu9R3NQxysWmT5pDzF8u2GrmDniyvZpyvxYEEXg9dGuiw84U5p3Uh1t3Vq6p5",
  "key29": "2HXBUBfSqk8mEtATnhSfJLyUartbFSbwVj7DvENtNbEy7Ru47hEr1RQF1oeWiUFKBkNrTddTcPP9ebBUNKX69JTZ",
  "key30": "2aT5PjR9fcqPZ7LwQ43YwkTPahXgi5e7JhQtLp5bphvSgNVTnsk1bN6X8Czwvxs6s9PjWWe1BmiuKuQYVfJ9VR4Y",
  "key31": "4SYG8oqRYeMWRFX8QPayQsKQjxFNqnr1JBJxduhb8o9MXx2qKgF49BaoZnjcjELNh2qTXtgCrNFD14hnv4T3a1BZ",
  "key32": "5f9wL3iLQUd21E3fErS32dJu91AhbxpXru2PxbFD1EuBeuYrnb8G8a3jZGaht9q6H5zKctfUybGPK3DmkBzR1nyy"
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
