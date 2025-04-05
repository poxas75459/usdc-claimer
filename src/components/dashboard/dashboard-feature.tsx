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
    "43Te6kD1Fsy595DGyiKXmbjGDDjikWkmMbcoQNUnJSbMxUBDbXRmchqyvo1WTmtFGnQzCyHtJeSBtjte3UEreSHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43J572J9hs7e5AR9XbB9Y2p3BsSvaKAHNnk3afJDnn9jp1eGKbHpmtrr726fELxqufPMHMTinUCAiz3AtK6RWZbA",
  "key1": "2jzebr3Qz1p9Tkz3zYB6Rh5XzWzhfuvJorcjM2DqDoMf8gpDkR9vhtp1UFHARB5CYHgHWixQU7WB4M3W7UrhixRg",
  "key2": "2PjTqJ2UkVd7jDozGtf6x4AzM1mP12XpbEBTLByqPfhSF9JkvfCTf4GKBkpyxJN8i7QYwiu4B7fHfBTPpQ6Vyi8r",
  "key3": "26s47YxZxjvakhfE7FrziXpz9nm6BeJwVZDmHmSaCagC8dXkxeq7TTcSorMztRPPJdW7phRgvmev8embm6J2m2ch",
  "key4": "4ngqUw3qMsVCoqoS5Nqyc2thbm91VM3K7EwSKR2ZRE8JrCGeLQFwfNEPD3KTQRbjHDAV3u7xNKnZYikyyjmTMHRg",
  "key5": "3T4JncYczKn6hc7towdfe4A4p14ksogmRSeb5CFgngq6jJg6i7tDwjbSr8Fam5oRhphj7LmJJeHk6t4Xy8yM9iTr",
  "key6": "3X2eGXottQaCXJtdTHKXUEsnmNmW6r4NfyvUcoLJUdnXTBXVmMN3ZAS4AtRiZfJdwnYABEMpwskagy41JJfu7Gnz",
  "key7": "1vw97dCkHKA2gcTcSX4zxhpraxoU8W8D5QMJyi9brH3x3eQbG8MNCmMATYhcZYtmra5pGWV55iMBV7HE5meSsQX",
  "key8": "5d59YbpTs67aa73eSNRTtGJKVcbEjGXLJefofXRvoR4DGgzQH4eSZA76BVX7FKzULKG4Nxx4eiFwVqbrmMaK7L2L",
  "key9": "6eAqTiVuXSVqs7Raa4CUjkkmbe3mSjiE6NN6qfH3R4hmHGe9UdWDkVdgC9QUiD23BxDn85bXPY9v6Nwo3vSLRgm",
  "key10": "2ZryVm4nUePQKGeNfWVrURrz9nwapaZvjKgmfiTMMR6rZWCfYXf8noW68TZXQziDoztnLR8B4QZKaZNhX99CYSPA",
  "key11": "4BJGkbmaZGjvpaA4EgAV4y5cFwDHdHQsCHvhUD1qPqoWXVsxPSiV8K59Lp5QnHrNvqLoMBhCr48geNCg9KiAPUGL",
  "key12": "2QiMkC7a8ZA8zRSeGWHkN2gh4kuXFVKLnt7FhrRhJhUQYTbFF8EydLs9oEEiyBE9TRmUsz7xFppNLWnddQrUxvXf",
  "key13": "wkrX2PbwsYotL2azJYewiwBafcLDmm7xPp19NRHrGyVnt9fxtGkEPfw3P6Q4MDEhraNAC7neLtocmju6p7GUbyB",
  "key14": "3qEpKuoM3tLuBk59T7y1KbdbByF5S7ks56oAoxUL25eCQxgGg7nBXPTRC1E9PUFkPaP7iaQ2DFKA9Bk519UTMcog",
  "key15": "5akwExzKJckXXFnBCp3RnDtNzomwG16iDhLdogt3t9ycbRhvbi6kpqrzGRfFMTV8XcemqyJVufBj8NkiftpGctae",
  "key16": "yZdsmQwotLZa5uDwEvTUTjRdfM9rn1WszXN5sKXrQ6rPCRrLZ3pXyxLiNkrVH6pQ8HpLDCmwyEDHCTdPKWBMoog",
  "key17": "4Rquaxm2eNBNyqA25zKeMo4Bff3ZeiH8X4g7wpv73hK6Vk4ZnfjERBkpba9q2srszKsmoxA4hVdMmYyFnvHmECTS",
  "key18": "4enLyAAnwxPNUQDrn2dF1g3vU4211cch72P1zgCxLVi2Sz45i9cSpdWCbFptJKxNeVAS9tSEKUXN2DvZUn4KaxWm",
  "key19": "3CwsZrxwB5nwC88DLrYeyMhKUHiewdfQSM2RXfvKKH89fLiGzcymm4BgFyWeCcEKM4xkudnPakV2uUtQhL8NYwS1",
  "key20": "5gY81xx8aHjRLSSS994PVDRhFwL6DxVhWeWt6mB7sNBLrCnjexLoe8VK1ZXbutw1ecUXDFY1cN2caVfqpo3DcGiy",
  "key21": "2nhS1qsKhRZeMLFsrS3Nu7ty6GiqmNCcKKGpk6dK23LckoU1kXBspPaREae1HPha4Pq3enaAoD7J49XxjkoUSeGt",
  "key22": "45GBMDxGpnspk7stjknFy1UUHTP65ATSedAPQDmrjYM69pZBb1VpwXfoXLfUQrdxyazDytsuHNLrgg6VMR242ThE",
  "key23": "4g2QJRmCJM9EfWdVQKshe9zsY46p2VGcwx9upaX1wDh1EQ1RT4i1Qc1VarDdu9dCkJjDDNiHtewuKMG2oopoc28E",
  "key24": "7EdETm3vtxLjMvRp14vK38hVfx1F5if8h12seyP4au1fLuq1fu5cf43msXcophQrnDKG2oKbFQBxVgU181gAXR6",
  "key25": "3NB4s82zNtpJrtyfg1z8TwHPptwLknG6UpzMSVmtsc4LL2pd9owFURfU8ZzzgGckZWKvZTYn4r9SW4tRa31498VR",
  "key26": "zzcEjWwPuSCnxgy22ozGFbY7S4Yiu8yHo53HjD3qegZ7fMBB6KGqXDUiawD35JZnzm3LoDB3kp3BvMz5aEdxPdx"
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
