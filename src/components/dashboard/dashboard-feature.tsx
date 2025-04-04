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
    "KDXLehNuGecmuQLp8pJ5X8cLkwT2VFkhy4uoueehjfs5v6i5hSbNhDCxUicXGmxUwwnWa86JXcANvKveb1PRDWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsd8Qqq9ZSFKjJgCpcq5P5aH6Z2YdhEoAsb8QepYqnpeuo71oqe7rMWcrhhjjiBDKJJdHQXaj9YuCJfvSZqa2BH",
  "key1": "24T5wSzdzjTXKxExoER7yS3hz4VPYBcuAEqapAyBk4SLNJAjyqNo1BBoZrEd5TKVXR9bpRAwYxZrT3ARVZk2hm9k",
  "key2": "5mNezDfCRo4brqpCkrLCvheU9PzeRKULDqrV1QW4v5z8JtBF5ngUow1MCDc9y3rQ29mM5n4dA7S1BubFKCQDMwXG",
  "key3": "65Y9FBLJeQs89ni86kZv5qbjh3LAoqGYWXgVV1Psqae1jUiwiBmhMHUJ5gr8haYFU84H1rfViwZcAo1LqFpHdR96",
  "key4": "3nbzBZY72jPMraaBtaxMxtwuY2AzoSZRTsgF2ZNSC1C4XU8Hxtky7jgoFD3cbYEADENtiLg2dfnEqugtZNJzXGZe",
  "key5": "bRtoqxQbtcT7ZtoTZv98VbFUfPFF7QDEaMTofHmkAQaqT5vCKJJS4ewXeEGqapZC93qF2JZsEQCuxx3su6gCygn",
  "key6": "4P7qJdzKhWSiJ3JgMbx9xu4UiYxmXehc6seCgD1tzrS6SdtRNdCkqGtrgM6FVcyYZiTDM9yULZ8exEbt3iRvuBfn",
  "key7": "2DRpNtuRF4ued9sSwkfLtQAbGCqc6ucV8uzm9YuqooMTuJ4XdZbr3V1y7rDXLt6p32KMevZNSyeTXq5CKNah8WxX",
  "key8": "4MJwUw4cRsK1pW2MAMz8zpNE5eWrPskSBrPbULNuDE6oo15c5Mxsmnf9TRE5oQjAVSimwQijosE8hSEhWzhak2bC",
  "key9": "3rJrH1Ng8N7MpKMN7isFJZTGCVsyxc81tamXjUzvMxiRiZtyfLY6UYv5s18kYvk6xHTGovpApyYAwyeFNkC7SP2L",
  "key10": "4ALExqg5LDWbpMUPw2c8tU7b16rw9Rzfub7tX3db8x3FdFrkk7YmkwAzRFkFwKnXkpKfZBf7DyrUWQXmWZ8rHqWi",
  "key11": "2utChLSPZM329ExHcFpod8KmUGhKtc24tBpLUWHQaosTKimcga1YfZN8Mb8qhv1CMgmWKAdT2JMhd9pCEvXh6Ruc",
  "key12": "2WEXjKq2pYuLS8ZCyns25GjyYcmMkAza5EDkLP3TDNRJ8feeKrB47TEt1zLSfiGbsLREhYTLuFqe1j95wsc6tM3m",
  "key13": "VY9MmkxFfMrkX9vhpWPxW2RE7eqRAAWGMViMrJxwhSQNSgwRMHnCjPsxTNAc5NSxi163XDRqyKocDyZZAuuYWct",
  "key14": "4rGqNbWcm4tdMe7uhhLLUPU7VLZLnramgcWWox3PA91y7ixJnU2C7fHahWbNHNPJL5dGqw77y4JnRe9uUUpU9qQD",
  "key15": "RF8nJ2Wmk8JXVZyF12V1ZtUsBTQhWFj7gjWPnjLYi25m5ti48dxoUKFFTYu9sptdmjTSzSpEhxnAPRRL5zaDzCX",
  "key16": "2ooymBa7KhGosuobr5Bnw1xsLHFPXtsHfabrE899MhZ7jDSRSWT88SkoerbvRDietEdUXh4oCCZ4t5WVqq9PKaWC",
  "key17": "2JRhL1qSKpDq7TG4C1VTVRYs7y7NT8ruoLLzXXbS3arZA7rPKnoPKJU36uvaege2Eiq4ZPVwGU8a7QXtU8BXWfqF",
  "key18": "5pyrBNqopLq4CJeFaey2VsXiY2AzNUH928W2JNFGiHyH5b8taZoMCgboFMDRvKaDBvVCmdMzNH1DtuBtuWaxx44W",
  "key19": "6629uZYECkEKTH3icMpoDXNfJLFFXUxix6arxqoDEVLXitBLURFghT4cLd39zqdyRfZnz4DFJNe5vNfR4bGrqcKC",
  "key20": "5pGmk8LffdvYfifdfUknkciBAusqi8HX9GAPrBwaU4aZJ8r5ZPUSQDuSi1pe8csW1ok2pDqNEGsU6fsA8TVMECNG",
  "key21": "3XQFKF8WzPK36exckuN3QPjGpriWTwHHKLdXDxrwckGmR2VuySc43ox4UvwZn1MhvwH8DD4pkdK9o2PzbGwXHfBS",
  "key22": "5VhC4t24zw4guFABJiQwvRtDauBsL7jHkRYLGKKQv3nwA7cQtg2K7fRYSyWJfVzcSpWycrLm9N4xn7iSCs7t99wv",
  "key23": "8ruCyDjx55W8zr2kQFn9WgfHX3hQz73LRGYEQ3C21CDMeEMDcaAyy4xv3YkqUMUsQZVCuJwhyaux9k3TNkaycdr",
  "key24": "4EfEYVnUkzrAarNJpJL3wSoJqSTErH42eovp8s9YrEMfy97WvdyS5cicn3MvXJvAsSHKKLZxeuQa395oGwhKmRZv"
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
