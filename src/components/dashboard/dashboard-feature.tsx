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
    "5GXbvwKyXxVW8UbYZg9MRtWNVpbbwq8YXRbg1GFsJPJU2WvwHWqm83GNLVNP64RioDC9F3z3PXw8ro4Xmbqw5wK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwVPdMy6JhrmexDoxvw21NxXg6M1cMTUgHsZ4c5TCLjMLjKbUtsW2t5SvwwxyjmvGW1rVQ9pPEd5GTw9swPkNn3",
  "key1": "3yVrPZGLfs2PAhgsfLx77vbFHcGwrT8dct2nq5Vp5Cqb9aSobudZjK7sZJ5pPfyFXrpq4s9KWe922Hf9cZ3WV6Dv",
  "key2": "2D45hbybZoujWZJwdBHe9jUvzZ24YhpwLGmdjB5JH2hP39nofxZUqGmhFNUHWhMPAKoMhm8zUmCNNyzMfKS56Tng",
  "key3": "4hi5QWv15ZKCLWukqwUYvJewFXeVZpxFq4kVyGqkjQJXvctzEuTCqLVrw14VdQqU4YaD1dxN27igQNsnUQpyJzPf",
  "key4": "5skGXnrL5SJx4rR2LKZWfun7Z9NsbecM2JPpTc7Dg6vhH35Aa4HvitxTXfcg8xRd5jWrcTqDUdTgdquJz5mWCyuS",
  "key5": "5AbW5rnj7zqRoKQWkekVgnubBpL92nqxXvidnMxHwCPkKZMmpxx6kDwdiQrfnGZNV4J36CM6ySxKSUPirHv8rW8u",
  "key6": "5UppE82vb54SaKQTQf9UAoAHHMi68g13pPtweMEHeMttVEDSqzPb3ssX1vZgDJ4wZwcW1zaqJnHq8NnvzFGBxzWQ",
  "key7": "2hwbmzpVNRfe8wVtPR3hMm46nMVgAu2iQVgwojsKx66VwWhcXiLA73f5RacELePqoR9g2C9oSGmr7JbmmCtdG3gS",
  "key8": "4sv7myfdMThQ19Do18R9D9aMTHZdLAyX2KAAk9T9kxt7qMeXUcHk4npdg6DbBcjaKZQZFkux8tQGeTN94dy846o7",
  "key9": "4aeKGMUnsUkJuciqunqDjGDcDpATSnwpNEtP2KExbgGESK8ommn2TCpXoqTvLviH4n5cB8DmXJE3EZdir654vWxP",
  "key10": "5eZwCfCb7RVonc74vmsnqJnn55FVrPzKvHZLfQobPX6bX9xh2Eie5hbL3m65dY4Mw2T8XvG2NSrw155Yyu1DHA6v",
  "key11": "3piSVAQ2HYwPJ6tprQzt3qaEaPpqrL8V2zuUxZeyMLn2cUnieY2LZ9QxAEUfnGhvJTP6nTGzhMn7bbmYsy731dCf",
  "key12": "pZw7Hqobm7KEaJRmtDaWVRQkf1aEk2Y66Ly9iGCTptvPyPssT6RCF9gkaTRpEB2Dd2M1MhJe4SabxtNsB6YZLku",
  "key13": "m8jfm77euvg4nfCHweES4V3fcRWfoaN5LcHsisUtBfGijXfJFioqxHfkXz9HyybHXM1SWepzqoHr5kNUVibjJau",
  "key14": "3XpeYECPLtonvKfqyCjV331eMpSLnGNq7dDpsmby8gtm23jBr3H1cc6Fqtp3SpsFHKeQQTLYP4BK4xiXTDfYk8X5",
  "key15": "4mU3VVbkRbnbSTcx8t3C8WvAkTA9HYf5W1oMt6z9PDjdG9gob6p8NPjNgyviEnSVmaeGkRxDq6r5ALV6DyFvS1ZB",
  "key16": "NhKWVGmHQY3MGnYJK7rG8szDurroemgsLFsH6nrrBREej8tMF1mLasyUthHAiPuMigncTYVbm8oSpT6NYT3uNv2",
  "key17": "2PmnE93JzKThavzWLpuAAPMWxagQgePSzSaDav7eakotCS2UW1ntuKakB6Shkm3ubofUtQNqS4bxWrcyGneXguhd",
  "key18": "2qeUi5b1cWDgP2BFRZro1xH1XTTQsDsFJ4ArDBSbBGpAzyxvSiSyWjuxeheUQ53nuSJysBaZf17SkgYMFPYKBjw8",
  "key19": "3n4oXkJnDfcLc3wqeLLSdZLhQsJKFuJPGz3tYqmBio73GeGWvkZ862T3VR2BDNuzf1qCJCFPttiPEz221PjN42XJ",
  "key20": "2HPHj7ZgRiX53TmvCHFfZWCShZRLn5Ty39jcRARzHZNkM3AKCwrDPjQYZXpTABRHPiaYXttm28pL8XdiqydjzmCy",
  "key21": "53WZZc5Hmrs8eXxeSbkZYUzxxtXZveRoHTRncK4W1rCxZUSCeGwkB3xHFbEtpWnREELEKwoEubimr4eC7SzaxEEn",
  "key22": "3tpBtm9hfjqHDVhHHrRyeT889RZQqYJxX1YmC54GWbn4Rsc4fVfzzK5YLT4F3wPapLCro5jbQhz5G8314vCG8MmS",
  "key23": "pbWn7hARNh1TqpFFU45RF67jJR9fptH8WiVkKGRcM8orucb7Xs5PoxVVHyZtS2FHWvEB7qoMvgDxGw9MUriSXen",
  "key24": "3CkUPjpfXBRBjFS7i5MeLNWNSXurDGaFmf9AgEKqM63KJZUgMFTvwPmGsNcME6mRGDLYiCtApfoVtpAbD9efjj6s"
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
