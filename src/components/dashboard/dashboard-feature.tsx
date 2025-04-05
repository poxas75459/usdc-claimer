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
    "rTfzmAk5SmcXKUYMokCLDzf94KFcenDT6zz6Zw6SUEGNH45t8SVZFUBPXsz5xVpqfaLnqBYEvNdyquSqJXfJdZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrKoj9mcMfk3bxYCaasaLphU6u6bgdH5kCDoKYTFK1Eg7cTjxVsAujNq94WdegkPMzXRvPwmmUqN2R19GdgjK6g",
  "key1": "43KXs2r6NYaHBqQDU5pwvtScn3fparA1GXbZQsjaAAx3oupz9UzTPe833GnjueG8MTGuQC8ztZx2FVkjGZajeQzA",
  "key2": "3kRD1kc7fFPCGDvfipyjJDLMjywuwEcYZgDT517apFsV2nFwKDr4h9zwdd8eTVdJS8dzagDHNghza5FREki1LDXk",
  "key3": "2t6XWT2iqwKi7g81oosub2qbuxKRPEeMkZNMWKYeP3rsCjoegPG5JF9mB2qYinivEHeyBQKjzybLtm7VKfuXg7fG",
  "key4": "3DSJcdRR21a6bssvRUtJGGGmFoFgVc1DrPwqJEeV9ZiD1sL3pCnY4D66yKZzTzWu6duY5y1TtdEqUaHVm7gpAAuN",
  "key5": "3RKwVz4KiMnuLe1uazhjnvo9W6Yr9PR2YubSYuGT2mne6M7zLFrg95isFreBdVnAtiCnW4LA89acWhGm5zBC1tui",
  "key6": "2iYLRgRAMQ9K2Bd3WuFAX9AM5UjNE7wt5MxDEuK451MxFTd6LUguaMSABrpFnx4pmQENNyzUKLd6tttLPvaHFMRs",
  "key7": "wkGY7AZBNMG19jw4NrAgJwHipKuQa7uP7hPEv9vMCuVdr9Je23PbduJzx9h7iY63NcpU8vXJMu57NiaXNy8imT8",
  "key8": "2RFntpFUkuA6Wkq1grThw2W4BbsJ95aiDrvKqsk6CYTvyLdqzEgZqqb7H5fzpW43jUHRH7swG6k7hJDX5fovFx7P",
  "key9": "3T2j4GwhYa5wfKYrxx5MrRaAtBwKBCXKYwcq3j3WSQp5jwV9uiiayNinRTC5K7EGrGVsLLSeX3LQ2C1eK49nasJg",
  "key10": "49Cg1Z2D79BdKNFnTZev5GkSkpMLCPqgU5sPLT8nqk9nwx9j8ckKiL43yu6TVFrx86Cf8CvDCPVJgR7W2Rjn7172",
  "key11": "4sbot8njSR53KjzJyeEdbRcmoj6AKErfQVyTcDe9rpEGgSixy9pbgAyHPtsJ6ct8rYnNBfBCxx3eV6oCddpJdM4g",
  "key12": "4LEucSW1SuBEmKauvK9DVYnctTsdiPa9vTqMmCQ81aKZuQCsTSbr8zs5P76yQCMGMCmMcvD6DHtF2LVrHgjnVpKY",
  "key13": "4DtjHQC91APqCYewYTfYkbhAmmtFNMQyS4strtMc36ABzwEd5UFQFxwc22mBSGPVndz5o8zkwjb4ena9cCeuzoed",
  "key14": "26WGBmKi7xeMLAh8ihBv3EpkXRWwhs4i9KGWiauz5YXjwKLe6wr7VYVCeBY786PWneUu1Aj4711Zwe2TbebFy9WV",
  "key15": "5FsHUZpArnZcaJASghpP7zzhhRvYEjBiSHqvWj22owzZFs9yum7wn988n5dRznmz5VTHUryQ7AHPU9ZowD9ac2y2",
  "key16": "CTMgatMU8zUm63S1petWXihCGUVK5CVwQH6HwAqS4ZWsCdkKa2xVYoS5s7PLUz67y4jtfJddSN5KYxSAkMpew3M",
  "key17": "3wY5dpeQgp7xjN6QNtKTPt1FU4xFm7qt1yyPZ58FFciMuQjYDMLDR2nhnFn5n2PSiqoVSRZi7C8jFhS9fkrtM8jj",
  "key18": "4vz4kc24b3WvdMsL9ngGSwYXaTzc5h5sUWxaNqg3pmDKM6AHVNMy1oYbob2bm8JbmPz8APzLjsJW3CKfzUtFQkPx",
  "key19": "yG2UJDWDUsG5DxatuigaDYAv8T3w7eESrRrsivTdAijHKDqKkTvndGmUrzRiGxrNmD5DTmddxEzsVxj78FBfikG",
  "key20": "58QdYTDsDzZJoYwXmKQZqPtAid5rrn94txmEqhMwewkK5egotuBfCjS7haDYxP4o7pcta5QciSHyt4jUkYwZsZZC",
  "key21": "FjLZWGb2dozivUQRYGex3F7YwYXYixbM9pTKRh9bCqJpnjmT2KQ54keXDMm9XzByWS9LPoRpZWxrzRmbNEZdZ1k",
  "key22": "3Pu76Msx9s89K7s91bLAsayDTKUtPpcjCna4h2BApjpPJz47TqJQoJYiCMzN5owc2gGY7LEmcVa6A6j17F5N1q3y",
  "key23": "5ieoVNaLh5iJxiVu8Q8NeFTeRimUvLaMMXEgVCGSsv14bYqHRRd2x4psm47KBBUcBDThU8dzunyQY9DjnfJQi6vE",
  "key24": "5BPaTX19eBubN4EbYEME3eojWteUmU4uPLxPfj6f1c72h5u7Bxis7SdMLWsnFuHdNiDpKQbiE91DM4ve1xAF44Qo",
  "key25": "5cWLAeUkwP9xphoDjuFzggvPncD9zXgQCUN7mpaQMKFSZUAktCLMoxj7nNAPSZ3Fx5Brrxs17wXRLV6yyeQyogBn",
  "key26": "4ZXsPDt77FYB9aENWxPesHc8AweVkVYUTBW1sEkZYGWkChBN18E9w3iadPtt7FQqa7JouTHiW4fgHYKpZ25VL6tz"
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
