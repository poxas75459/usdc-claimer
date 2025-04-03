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
    "5Pe2PvxhRm6txXhvmLUfLgZw5v49qC3zwRRQaC82MeUtdchcQA2TCV4Zo3MAZLv3n216erC1HaF3CmQqYPRYa7sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYAXKJ3fEJqTyUohPreFNHNiUzy5TFKQNFJVtUCtQx4E7VzyuYLHUmU79gpwLkbLSMxJ44sKpakDNp8J1uJ4XfZ",
  "key1": "42SmAnZGRw3JGPH7hAKntFP1VcninFYQR2422zE4cxJQGX6XwFJ5AwkxNe5QZYJCm2LzDky5GZrbZ36GM5q1frP5",
  "key2": "2WLk5tjQiBuZxCTp4n1Nr7mRxSU4cfP84aADyy6x6ge86uVjjofnZvFLxky4EDt1ztNwFKtsiYRFxTjLe1iWkVGz",
  "key3": "46Gzc6AygtCUEMcux39cP2KPVyTWxNwk3fxAD8zW6SV5bwEq6pdRUg7fy8h2wKQvZHAFsoxb2G1iaztQJxAZ2JeC",
  "key4": "49ieH87DgLUT8rHAW6mzac1oNupWWa9J4i2qpdXpoQ4KjmWr1yDEAf7DHyxm6jko3ic1x8knMctFae653HuGcCor",
  "key5": "3mcvhPsvQJw6MZfQE4AJaBAmiFPZ8CdjUtK24jjuH17VnCtmSspxZ9nn29RhDKe2rkRnSdNftg5rQ9wVeVKxC5cP",
  "key6": "5VtmfFFjJY6sonTijAoD7CVHpwMfg4GMGjTDEtLNZ55EC1o2rEt22J5nZvD2n4CzM4gyUc8NYz1s6kXnNxcqNZL9",
  "key7": "62VeSoFPWVXuh8ykAw3FSX49AsmYMxdCtF1n24rcxYWGJk8efD3V5qy4ivYY63zd8CdYRsQcwe8d1SGwgR8ELjdP",
  "key8": "5BP84UFUBQPmdnig6s8BMcnjThhGNAvDKY4fDDxRd3RSmb41Gg2osxp5dMMNcdxACgaMR6LaNf91NT8ouf3KsvMg",
  "key9": "3vhwy5ibtzKbUwnW1RorBBHJ4BiKRXX2QBPGkMKBnXeUmz6AqvorN7qipnnVwwvaSsdMGRkXWweC7dNuNjND6r4F",
  "key10": "4Shr6uPSRqTJNGjV6R9EPv1zT77aW1wbFb1im8c9Dcjciak4taKPHjn59ncLcLeXjTStr8U74mzX4M8QGWtHwMGL",
  "key11": "5isJ6uSwQ48i59foyDa9ikfpWop8qL1GF481isnVcHySbeEtyFCzuqKdvNvh1PiZeEUuWWs4TiAXaCLsBxS2HP4P",
  "key12": "37nZYKjpCBe8R3rAJ1rWXA5UvFhA22LXKN276qnhDgQ3Hac7w8NT9Wskx76WbPEUSxJE9g2C2rWjcjXqVmtJBLPX",
  "key13": "ZxfLLYhFHZDrfQf2ktTnRcGy1TwPoK6BWxf4Y5RabEqo2gFEcqu6fFYL4LKDEghzmfZ6hNCudhn9pGwe7sca5fm",
  "key14": "4Co3pwXmGwLeEY6yXwU64Y4V7wt1voCAL1G87sUxoK7LDasswjXEmnQ8E2y3GgkDPfxbf5edSGyYKeqYDX1dNkXM",
  "key15": "28e5ka3gGvgy6rCjthZCrcuGnmyiu46WPVtGEEgco6Hd5o1zdMkKJWRqDWS9Px1ZC4nSXMky26thb8qz8v4dBbG2",
  "key16": "5Cy1Hi3LfbE7xxo7pFaMgD8CDPANsL6FZJbTQtTiV1twmYZasmvGWKhCQ3XF3TAeuknMtizJo4s7FFVyjBViLXcw",
  "key17": "FpueL4st7s3HcbUMRMFPzHGLF5dfpjHRGquASnj7sCva9SXSnRNqmXWmZrSU38GXLBbhRjGVhBkVagmniuC4bav",
  "key18": "37osEziVqbmhLUor58BKDD8b39JSZDgPcBZy2aQPzaPgDDDG2iGRjd5chjYCT7fk7HixSdYyVcXyncrVfzKR2h5i",
  "key19": "4VwYb5L4d5L949icRxcYGtQ8dG6zhUWEYCe3GGdbu3sCBFKNuNpX4tzJQDPPqi5XBXDcjHjvmRd8SbGVi6xAVTxZ",
  "key20": "4aXam5ESXEWwvqCFnninvPKm3AG7ShdwPUBss6RtgW4pXLUsjwsDMgzJmDe2tdSuhyJCG5C3Fy8ik2E7HXKykopW",
  "key21": "2ecm16XkVVqAKZvoxWc3SfLrgLbvoyujsnX6BqCUCEvdtGfnYP7sSfA6bvLH4bzSfPDhoeE5HABXPhwHt4SHbsr6",
  "key22": "4P5RmBPekEg8XpBdac6dSFW3LLbWkBAfJ19zZKXhMN5fuQveVW47cVMMHikeMWRQGHEgan5GfHDNRTxNTHYBtxa9",
  "key23": "5P51NmTztSEhZe9XZrEauuL8wPNYu9TW3SkfniuJkAhmr93w8XL4URAZhs6A81b5DnfzHmPUFFhDxCdNRWGpWDc9",
  "key24": "3ooLVfmvAV54AnV2Fvt6WD1Y75DN4KAYe68aixdMBorEwEPuWzSov8y5S3AYDzko3HmgkV2jprLu8pYNy73NwMqr",
  "key25": "2R7SxSm5TWGFHXHtB2aivYa2T8xvLMoVWbdDTuFZJhAyw5T3NqSsiyNDshxfPUXsPgGJDpCkLTWijyqhxnQGPtnf",
  "key26": "32VUK8KHVpsLX4r2kuuMPFmYQjQn6tnf7gtp4FzqXEgR6QT8FKJBfaf4XHpuQ15PRiuUiFZHEYBMCoi4Ak9ux5BS",
  "key27": "5s9jfy6VrfZfEWNqVGQeLJLcRE8zhdHoNdjnZCuKKdmd9vpbMHXY8zpC6WQWbrcmFfhMxYroup8r9p8zsyQuwgV5",
  "key28": "3jLHCZYZenghkcPRTAxpNa4H9esKESnPpRBtKLyWqjS9n7g9Pra2rPombefaA471ShJwhN3LRLadybUecvPrmJKY",
  "key29": "3WSEHmh6mgzo7y64xyjniWyfmaoye7gnCMWHSC6JEPDtMeQCnjXWAKmUNJisNs7n1YPpCSDTmkUZ931k4h6kdmUm",
  "key30": "4mgS2KzaENLRDUd7bZsmmEV3dzaPhHDpodwoQxf7GFETS1VZHVdbakxgwGUpe1LDKBrr6W2cJK8pkQNUqfmNTrLL"
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
