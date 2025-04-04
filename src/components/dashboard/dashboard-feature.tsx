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
    "4gDtPLLq7dLBEW6wGUXMuejiXsfifLaw166DZFHXpVK3ApoXUYtxJsggQ3FHEb1UhWD3xBH52ehdbajo17oJUg36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ea2qDUJqPVQoxsGT5m9ivgXE6apSwDW7sPNjsXQ6C9UbrtddpPpVmVKuvkhgCNjwrBCvHysnmt9rPwCCejVvRn8",
  "key1": "67Y7pjcJYfwfEUrciuJzWDW2bSHruGmrZrSD8qFB2SZWFmfYVAEsQjndBxZhDRBAiUTDnDbPbjNjoGurU9aToKm3",
  "key2": "4cDmPUwp4hmonARJQyEZewLQhu6DkirUTgy3AbQNWL9crm8GvoM1njgWzgcQ9zXd3i2idPhRZuN6ionsrcCTLfvu",
  "key3": "51aqZ7zcLeN65njYQfdBr71toyiNEeQcVCtYG6V6RAx9MVMRqWbts3mxBrRFHYZo7Yuhk8AW2kH9P6B9SA4bTYe6",
  "key4": "4B13dNLpdzqHBDGcYrmNK1GhGBG7TauKCsiUomMSxgLZDqchLfv4iyUnKJRawSexnWuJYQXn1ayf1NqKNBUrzCcW",
  "key5": "36z5ruC3EWaXh9tFgJVyiX2D6wvdqmyrSwuHEmv2r58gvbHUMF97BMJYfRwazyum5jqqqCbaKJEbehWJodJ6b4Fr",
  "key6": "PXz7udB4LwyroB4HNDAXnq4Vd7u4ZWAzS9pj4SDxeN3m4Ji5S94qwaLrTDxziepMG5GymLtEMqsEvBkYS8Sh1pp",
  "key7": "2bNQaRvuGhv1ECJUEu2wew9n83PS6b9zAar7kH88zzr3pPH2W9ifcG2vJoT9wSVpssC6bvhY4uodKtmEtoWBPEgB",
  "key8": "2JnXhxxFxPmVUBWHcKpwkiQb6ZFjJsPDeyZYFrroHrkwijFCW5uboWG92wzNsTQEdsRvAaLGSy9kKRohx7hb2sEn",
  "key9": "5Kk5ZddBuMnhLbZuFiwi5g1aqA5LL58AuWHKBrBn4McaB2Gde1jUU5HCtDT6tCeYHGEXiHwgdXFCRPsCV9qN8ZPC",
  "key10": "SxsnjHaSobUUkvtZXrxMaZogjWMuwz6xJFwgcWkFY6gsy64JdAdViDRSduFHcCak7aWDvEbJfaXobhRqSEcXwZF",
  "key11": "58vvaLDCkmiwCDk4Dh4ApkZnipPUCw2AxjJ9D1FrsLvdmd6C8uEjbWd97Bw82bYZctdb1rnVaVK9jbFxK9juFx1G",
  "key12": "2FX7915Ko666WExLB7qTZFMo8y4orWqZ9bmpDzpTro47xHnvKa34voXAyZHaJwV6cpEa4FpLAnbYQiDjUX6V5mGB",
  "key13": "3kTRvTdSNcoB1jFvk6ffniNpU3hH2EMqbnx94s6bQaiA1pbjBNVqCG6MejJCPyCk5gCyr97kwDuud2EnbQCAAt37",
  "key14": "4uGSF5uWkomSsCWnFhJX3uXWJGdhZKmXnCsdoAbMc8UT6yRqtwEH96ubRU5WaQ2kNXLDiBrJjVDp8qZEjkyATZNU",
  "key15": "313UvtH2WMCWbpyDTKvJSYEAREiyCrarjqnwAZsxcKKMfamfTFVwgpFrzu7K6z9MkiaUFxfr6rJrtw9kdFS9kY2m",
  "key16": "4QYDvYD6J9b7nykPJwxFjJCsZHenrEnbgfgRNDxHMemHECiBmpzgZknErfDymo8T6ucYAodhqzx8TCn9poXT5Wvn",
  "key17": "3vo5M5vFZukhrMhcLbVmL9q18WzSKQE2Qe5241YG4qWg3RTobwd4aFCGwVxHRHf5FRKTrBWD1cWwm6omHSATzwKi",
  "key18": "2cWpZyQzFUQrNzm3r83gLmutJKH2Vc88L8BaPQX7HXmzkDEsvzAj6bDqtsnmEPNvDockp3AyXweCFAb5hn8xjBkY",
  "key19": "3dRGLTfzBuPeruvoaGs8PiuayMRZ33ZKVjWVuQiZABQ77RMesK6TUfH8JDtjJU8s7g1r4BDNTyMA1FdZqeGGR8ra",
  "key20": "3Yu8XmYCLPfkYZ8cdTX8LrS1rrUDFZ4NFHGY5DjqpBsaE4pHEBQj53eEiyvhdQnwe5vAgUprsXsmgxTioQxF2krp",
  "key21": "5h3QR7gByFBvQgCLHagjQtchwTGgXMkTtK1SUuMbwJSCB5k3PpiX6sJKGidEeU943jty5ybno7gunDK8jC5oid45",
  "key22": "3JnRepRujxbdGbyjERaivqHz1NoNwBWdnpEx6H218H5vua7mW3BTkWLcGPUynrwmd2FQLKftxmR8eTFWW3ZyxA5C",
  "key23": "47UauucSmJPbyAE7cqSEp9hr7BRcXbHYyhnYGp4n6d6e6W35BnXGxfymLpHtq73jkq6vzuvS5g6gtSygBdPXzgot",
  "key24": "3cauyNNfiq7uyMBPFt8ts6Pwa122qmi7mL2okauPiDFMV1Zx2tVAy2JFVBHUcmBSbEMuJS2hd2hkVmPW5oqMAboU",
  "key25": "4EVHkZyfVqzumyykQDx92KwpfweUyAG3qxd4LZ7ygGkZuq8gfn3UTABsPqfMXGu1nE41qpRfzyGaVVm2rkHiySdg",
  "key26": "qExpPvN7gLKpL2kJ1zZA5LNaMj5ATYda5u9KH7Thb1FRA85MV38FhMy914NvPPnUj4L5B8oVW9sHu5Pqmsyj7WB",
  "key27": "3sPE2mpBow5tHKs51swn6H3ws7GJtFdVRuw9jgcsBSqtQSh2JFWQ2VCHqFRgWW8KM2AW76AJ8ZnH4SSBDF25iet4"
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
