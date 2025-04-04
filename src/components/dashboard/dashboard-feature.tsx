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
    "3NuF69tzaYcJcp4C22wXG8A2yhvfmFGxUJ9xi7VH9s9rW1r6gGFfBUme56eVUCZwWZc5Mx3h4hePVDTGQTPJyqRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHGyUpSaAzhSSGiBWmAswX1grBuvsi7Kby3K53jfiXqDNDwBTSTRMrsXGKymvGztpFSYGjm9FgY7tYDBs9Xzq1t",
  "key1": "NtwcK4sTdmYdUBRcqLHABucPZy3nwUbeUBmYfYJ3AnakNM2yKjd55kB1uFwYbBPc15xsJpHF4vmTEKpxVxNKu32",
  "key2": "2g7ChWf4CbVPZTZLu2EBgrgYs2TPw5CUvP2dyVTA3u4szEkKMaAwYLqSEbGktgEHN9iRmu3ewWctHEmrTej2HcqP",
  "key3": "9Bdqngvrh7M4M5xULGnuR9WyKvtGtbiXZTPWLrroMyThvkhwTySyDqMoAYWKDaMvZSAkgTuDyrzCtnpPDYpJuWe",
  "key4": "5seFsSGTCnnLuZgxedEhUaXSmcU3f89SAyRQVHQENaM4ciQQZDFYyQFJTP44NhD6zE31ZswW7Udk1zE7dj5TucD4",
  "key5": "4AJ2aCAmrCiNiPNBDiKe169tU7KX4sWJUwkrUQ6ehvSY88uxnGN6bdvWvCGNFn6FQSze2w4GxPtmpaxufigNzVAe",
  "key6": "4o5b5zHTGDLru6JaJMA3KVSErs1dY3QqpwWebbgSUpoek2Cp5wTiP1BSNCVc6YVwpk5NhcTn1aWUo14vYS44iqiA",
  "key7": "3Js6EzvSJW7Arf49PascmKF1haoSnwm4c9AfkYVk1PHw3Mw64j3TbvSsbK9qnbeaTyhjm9B32UP3Ld3z8LvdrVXj",
  "key8": "5DwTidJgzUVjxi5KRt4nYqxQyZpZQwbr8c8745mCNZiqSyRvdKPRnfhx4qqEJtRUMuJYZ2FjwV6Pnwtu8spijgtS",
  "key9": "2qvVvMfP8CMSb45PaRY48Cw3jr7W7JXhPHmZj4QVmE65zuUMUVXetMXJgDrrepYperZEDiGzTkuoGGYvk8SZ15EX",
  "key10": "4qg36aYs7PEYMxDZdqfssMeZQ1xgtQvxHE7PSkBzTdJAWfXa2ryDU6qkyzfX7QuixWgR3BGEWi4RQ6nS4V7mYzgj",
  "key11": "5ePrBkYgN86o9DxTKoA1LFZX4iN8j1R1UTZx8mXPxyJhqMQ63sR46eUna4BeQwdmjw5aSinWJ9f7UxqNm9yMnTjm",
  "key12": "5myk5xBMCxw7txg2LXtiuVcTgULum9jK8atdKZtf1vtmW2i4iD2ijmFFkaqvufYGSj26o89SuyDmbPaHmdQ6pWtu",
  "key13": "5wpWpCxR1rwmJ5ueTL6B6JjsPuY7cnDrqcZPVNic8s2iodd43S9UdA6bWH8GjQdfVF6WvT9pWoeKf1bFaggY6H8t",
  "key14": "4qiFRd1UqZcx9bhd2aW6i3BS6S87XgemXVa9e4CTHvCvFFPVAzKcQjs8pGKEVBuRAsSLpSLsCbpfhuoac4wvsbMT",
  "key15": "65jCEnFN2oScgtC7JLTopkRuVhwXmQ93N7RS3XcSM2bRHJTik1eJ3QVKrFYJw9aYkGtJybCwDntLThSUXkubxmeC",
  "key16": "5Aj9LgGA8u4i643tSMwwyR5ZUZTRfcrnuKkCD2HxgChodaLGQz9WXENt9rjESM8FXN1kQkntY6dkFAEMKZn58VDX",
  "key17": "3NVWRWGuJCWF2Ahe5ACyTA677HnNBpEhztvQgVaWet3Jz37n6AyJ4R6b22saY1Gm7UZsjrfMu9NZoMNS2iDuZCxE",
  "key18": "2EL1u8e3TvHJ7q14KKDKbtnkjF6MBhpUZfUcVA8EqfRFrjqMa3thy4hnsVB92Wm8b9vLh4ZUA6vgembNGL1mvHit",
  "key19": "4NkJzdezc4Ns22VYtNJ87cXnnyRMMqCpypKxR9vF4sMMrzz8jFkHuYAU4AqiVrNH22ZNaMRaWe26n9dDWqnZ1wEs",
  "key20": "33jvMibMLpkyxYsrdBSbf2AnJmZn92sovgP7LMb1yDu7Z3RWVDiMko25VFAgVPARxsiPoBAvm8AEk7UFZ9wMgx71",
  "key21": "4Mm7xDoJSLxFpPMFSXsqkL27RSKhpEN6zk8dn9H73bPcfFy5NdBXH7LLghksDFr732AeWgKfb33DSWTvpWPJ1t1p",
  "key22": "5BVGmP8dbVpmiKqjBA2PduqPAxQCythErZfthpYyFNNhrJgyMG2QsVSHHaytoSqDoDmTEPqrSfS9WmzqvxHXCUYr",
  "key23": "3MM6SnhZfwLWbz1bvcTGVq7wSswH18NKuedLS3nmA89M2JE5Rir52U9MsBiB6dHF73vg2a8zz6twmkdTpwycidFj",
  "key24": "1278yL9e58DJ2a9ZCDnpsgE8MdkfC3K4fQQyXgttVt4HKeb7vpUp1Bo3zFS3nj8jyEuB7Yjk1hG4hu54mG2mXJCR",
  "key25": "49jaKctyCYaqFvtNje84TVbtCrH1NWWkFiyCgmvRti6d4R5zvatTRV9y6epzGuTV9WhaWLc3KEB7V5SibUT9hAqv",
  "key26": "5Y2Ptp6bViSyYkcjb9M6pAccCM1ZUh9vNUqYTYcUEPHjJe6P5hWedwGbZQK4yTZtSXFAT8uVAmR6ruyC6ZLwRcXo",
  "key27": "4eqhisEw6eQU2Yjw6nWfjfj4auRLDDna6q5pR9VBL9k8y5dnKPy8tN59QRyZgZa7s3pKidtLUwM7aqRCHGZ2vZGw",
  "key28": "66m48227byipzcTWZx87Y2i5qyn7zzwkAKmnk4fLXkhrQuSZqBbenVhvcth6G34QZMLnMyft6sxxCbwfeSDm7xhN",
  "key29": "58PwLgGEDGETD1ed6NGvUgXXiNPavJLcggzwhezawKYeJsFfvzqxEkJjHLLNVWhGCKGGCkdh3Pmd6ncfmvYoJWK2"
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
