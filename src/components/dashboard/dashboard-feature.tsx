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
    "2s9ih9STmYYZNpHpsexNqz4DbNs7tTVaMWdt4RJLGTDYpSVyJBMEb316cQg1oVCYsfpXGxHkjW13qvTVbxkesA8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLb6L9hwNfVQt63g7mu99Bqq9kLrsgN5bWZwmmioTfHSwaP2Y6vhSRstY1io57N7rJG4ufDxEi1mQwPCPyCLJsV",
  "key1": "hZbChH1TEbBzYnDoYSGonQ3rRJSzNV8e9ymFHGC5hTdBq96f6tnsxSrX7LWvuaBkPzhLxRiX3iv9FRch9fs6zwB",
  "key2": "4qrFQmepBr2dJMDtDUswmVhKdL4uxNDBDExgPQEZjo6PyqYU6kzn62h4FSZ4dF5HKkNvaHDcfMEJ7Ai5tc3vNjNk",
  "key3": "5Bswe4yv1LTE6L8jwYPtFDytRPjSD3F5hdKdEMQWQJqKYk2SmfEFTreeWZEFFQ287fjSiFmTwF6fS3bqUdd87cwa",
  "key4": "3iT2bXW1yfuJ6H6wwRUubP8m6ma5EJ1DhfNNnzJCdvFeGmAFmuXstR4byiPEW7uiHoRTMjgARicKCLNCR9zaE1ew",
  "key5": "Kn6saYLJFR8hQCJDEhbWUHBaThzPSL4YeX5o3kHwT2yGiPjy45ZrqyEPpMYaH8mZE5T9cvspMX4gzH37ubLadue",
  "key6": "MQWf54Wd96RL6vj7g1w5Js5nTPCN2wLxVa3Kq3hBsXynvNkBKAdGvX4pNakKJgUiJbWgNuRb8tiaD8HsJU1tV11",
  "key7": "67B2MHZQgboBepqEo62wjvA5hrFySJE9CynGkVh9o4Nr37SUPrqVj83xZddStFhxub8bqg2Gak5sN2CGKXDLEqZK",
  "key8": "2ZWu1ZfMvxdFc6Kg5BdoaZUhhjXseaFRZw3Ui2hhGR11o13LWG1gJu9UdgjEUtccf3LBdnLuVxhR8kvRAFiqfEXC",
  "key9": "2bsRdrnZPCeRvwDxwaQSnpxesH8E3CxVjSFGtGMDyRrdjHBV7wTL9vVJ82sdJN8wcPDkYT4TmHorgCxT5hLsgwjy",
  "key10": "CAUrLTfkBr7Pw1UFUJvbsNfw5x3Xz1JXgN2z9ZhEEfV2UTNXDLUhmjSRui1DwysXTBfYEYkjdy4ZchdBXUeZBqz",
  "key11": "2qJdYWgwgBfsJCo6woNmtw3qACDJbTvgcCr15RL9WbPa1QgTTvuTctU8N2eCGXUM5SBfhUQ7F3f1yctECVkZib6V",
  "key12": "3DMHy7wsDHsNmka55iV3bC5JAkubwnhEzjvJS1cPgRhmzLrojaBQnq5wHK3qBa1Mb5y6rPA1toLJYsgeNXVTGTCr",
  "key13": "4gwDxukaeB97TrTYw6o4LB76d9uUKU8UHVkmpg4QkJWeAe2CT3wgQs5orLV3n6ps3LJ9eqtz9BHpy2ezbwXTjzfA",
  "key14": "4LpiepdGBGit3XAtgWBvF3c4Kw69PYGPZayQDm6pY6Kc8GuYjEMrqk5WktTAwUAsAcnEXAPULSH38TGMwdUJaDLW",
  "key15": "5jsTqptVPPVRHzCTFYJcRsZwVrtp8G1Mkid19XV1qnALyjwWodgjrcK2TeiBKdoXoAiBs6BKEB3ZUvHSi3LRvihQ",
  "key16": "4qsSbPCRoGGfkHJKdtK2XCyfECU6FnXqG5cqKCHwibxmrPmbzVDZkivbkwZ5FqMxfTE375tuZQjRucDhqtpNg5MZ",
  "key17": "3bm4enjzmHnmhshj4EtvG3PnuHD7uKLEBHSe2ANyzWQK9EVcT4BGeH6Koq1bHuuow1urvVSdK7apiFaRH4Wn54rC",
  "key18": "3x8xN7ZBKwfGireLebBw5bKGakHQjVfBUre1hdggjxji94hj5GBUT1LUZq4LWysNsLyYVVtao5NaFipVphgg5qRX",
  "key19": "28oLY46Afea52XFuW8UwfjoedfRHDRFetWt3dMnvoVHJq6KTvbrZucwouwwJgcxR6K6NcCP69uJJjR8M5BSEpYtY",
  "key20": "4Vv5YfS1wP3dQS44QYWiHwVgLhTAx82g6ik4Ws1rqH6Gpbjmdr8wtBuncnTvgmVcCUCNTpgS874iGaeDhvkop1DJ",
  "key21": "4QY7v7Pvkh6uBvEmvNhaaBmfkFhtawuBMQGEMACAc6TCsGEkLBNCCd9FicG6Jw1biKgtniTfQjgESbHbVcTpqf9U",
  "key22": "3bpvJjo34jzvVSjZXs8otX2v7uYdy89iyUrR3JG6j4xKKmmNbXJ34cWBBx5DqjeLVR5TkXQgFjUQ9PZUdX1L39Pt",
  "key23": "y4Cu9C7uNv9TKj6zFZLy1Wqrgk6D7evSGzguL6TnGA64R3wDRjA5Xu2SpD3H3YpSQFWyrvKoXEasmNCdwk2zopv",
  "key24": "46PFJFghfryMtSpvrZUAtDUEmKYYzsVACR4TzZzqvuz9KtQdTGP6HtoGsVBM82DgtewsbjihokNMxZQDCrj8fg4t",
  "key25": "5tfhwL65fjR1CqstVVt5rcroCQE3QWFSMYD5wCAdtqX2PA6m6ke5RcdSKhU9xuvtprdEAivYSF1qJggzd3KKS8tX",
  "key26": "ApL6kkPuvWD4GDm816sZyMxCpzsVSP4FNCssp1RvM6seUaEXnZY8XBa6z5yS18xdzM5sLf8DCvFXb3qZJV3prV4",
  "key27": "5vs7ufDEU1SSrcfVdeuVH5xc2q4k8egrvLqJNdFJ1csSYEMq8hKyacoPxiErQDmLrDeBwBUrcD6nTdncUuahBfYj",
  "key28": "tNec6gx2RD8KyWN55CLv7TGG7swGGY13fkj2pCvawQSkgjVQsRCqXqLb5e7D88GWksPScdNjxFCZ7zufbeYorUh",
  "key29": "2NS5Fk2LNvD62GQcGw3bFVJ3toXJBeZQrN1ZQ2gzQSTboCRpQSCeBfJg9fkViBRtQyngbk6VaF7o3EZSazh9UMAQ",
  "key30": "4DFyyofM1HFtiHuCxxJT1fiHB4HZMxR82XWm8hTmh1wMiUTCudKwKBTvVBUQesyNNxPnwaHoHZLZwUfumA9KBFqE",
  "key31": "4wes7G4MQx4VStfLLkaGh5C44DYL7d8aTS1EpqxjSSJ1CEikHUtFdZwoFAdLY2cjVmJHpP6XNzrzgXRHft1xMQXY",
  "key32": "hK3JpJWFwjvwUaSbRH3VGL9cWMwrXB8W7FWoWjVt32am6jCHnwQs2mNHWnvNcqdTJmbPPfEsJh72hUHBdZVUy9S",
  "key33": "2RTYiPnvvoGxrLevGANV26ZdRgVtr7QsbqU78P31Fq3oFzhvN3r9R2NCzanb2BLuQXW3G1TRpbuKGQs4mfU22MeR",
  "key34": "3wzSg7ongZ9zFm2SK6NppqEzZ1QZDfNj3WWwyd6soPwiRtWHyoEfTiDM3bhvBbuQF34crTgAGYgsWPLDBRUnuWT3"
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
