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
    "3yCTmHGvUcPHyyXRZKKb8LDGsn5KmpMNqsgA5gju6RvWeof6xKS1FQ2jFNnmmMDrLfoKrj48sJ9RdWiTN2KgixQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29d8fQBow7dDngWcdNKcHFSfCFvM8pZFJzXKBKR4QAsj6ii8gkbUE7uDaEQyR6sZeZiWaPnELC6xNhcr3tVx7qj2",
  "key1": "5jbzs8WD6FDzxpS3aCYovVPz5ivaR9CoQ9RS6tek292BvhtFYU4mPksjiN2QbXPQvY56gtHUi93K3MWbicJXrZ6a",
  "key2": "xcTye5qFdj6oTNKbymRkEgpPaXXEg3xBzAV7EsTHggxo1cDPtUEGdgTnKCsmup1ti6gjYmXDTD7vrjeAVamyV2a",
  "key3": "4N9tmLKWENz1NJnCsXeMgRVSLZYoUFspRsxxBFN8biHz4V6h5LMnTy9LtQY8xiN2yXgZBCY4pKLWYZSBqqRCXgUm",
  "key4": "5bXMJXRrQeMBfFhc4p3BD8dnpA3ATifcm5o5QeAS1fUyU3ShdvdUPLUZwmeGZpSPP9ED3nbhSZmABvwvyXXFSAwA",
  "key5": "5RuEjeACPEk37A7zrLA6vqGBeofWSr7HhiGmhqGcQBA6uR8uePD8MBbKXoHd37quBAn2cndZZzzoykVjQnCRkU4",
  "key6": "2Ju2adS1jmtJmymSaALkUhWVWLwFMfGFSodAkEPFNnpuhUpmHefiv6yi8PVBhAUdHdcPCgJTv221B5WgCHHRvGB",
  "key7": "4sxZe1YJxLT5JLCFRHd5ZYLj37ZsEtBTV79mdfo6C8sEztSiFweTWZFpvMgdK4GYykGSXvixK2wDJjqMNyX9Zxtj",
  "key8": "3r6KCM1jWNEbT6NJNU98kCFD6i6uq1xG9XuYLEJ8twQCS91MGjetuBYRrXSGMqv8op3uZRwgxfy7gHLXzdzzGdq3",
  "key9": "3NxM2hYTG76pPA4hgZKw96UXKUCh1Dhtd5PcYvmi1U6zCvArTnKSg6Pi9EbMvLEF6LLHrPWMaGvdq46tsskJfWZk",
  "key10": "57MeRRDhGFAg4FRbSNcgxjaRS6MhFqpMVvH1yZZyiUDeuWQe4VN1iJ7ihvTXWZrLCBejPJL4kABUb1yECDUCP9gz",
  "key11": "tMnYnwEfpR3jg5rSosHFphCmAffRirnpJZLwXgJg1qPiY7sv6tWc7mMMWeup5D1NDbf8fCurLupnsAAinB2jtaR",
  "key12": "2xK5nv8qVHVJafELbBckqwkT56wWy6FxKMkByAx6f6iyvAPPLbZYtYy7PBbq86Rc8fHn3gVSqnaW2dZ67YLBZafB",
  "key13": "33RGqy2PDjHJuM15PbF6KhqEw5e1Tssam5tagwcU6tFh4v9q39u2JRva3oVZYJCgZX1umBuys4JXwTrucWMtsvHw",
  "key14": "2uKFoUUd2oLsdLm1eeGqdV8YRzWr7eyRhcxiFMtfQ44rLtzJe9hfYbFe6K97ZXMvuGMN6DoTjnqMSHHLThqL6hok",
  "key15": "3qhtXHJRWmSTsXygdKkajUdowN4DxVu2VETycbMBfhEuCziwmckHhDeafMRfjTp32GPFxLhhoYYWM3VWXxZ1inEg",
  "key16": "28Kv7p91XSK9tb6sxWEtPbg8Y8mQKqk5ypDQ2Enzjza8WFpKRsA6T95FzB97UaaPgmhh3Bwh5fGfUTbYNgeKyWqZ",
  "key17": "5aawQUjGtnHnEXWnHfAfUaVC9j59GLWtwsG4gaF4Cr5agBWm89U24t25MRs13FvbRcezqJsgAq78CCTfhcCaAH1Q",
  "key18": "4ccPu5bGa44rFzDojjntGtYwNb3T5uKxE5WzarEH6hccikro8K7m1o4uV7uavZFhpx6zAdAetHfefSUPzSUYf2PT",
  "key19": "2mVsZspPtqVrAa7CAvan47NdonDBXUpcNmipBaMD5d4n73Uj8xrJSuZC7pa7uyT5c6kWCrFNnvUFBz3j6Szhjzjv",
  "key20": "5PqeDNfPAigrKUNFbgD3xcjX2hbS7Wf9SSa5RZacQbf6uGoA9QUoVzRZFpJXPhhhuii7b6StaWPx1xT8KmeLMjQb",
  "key21": "43nXrGqfcMTBBQNESZESctN4YQmSVAeDQpE4k9jQBihfvZLDH9ZbgkqommrFC5M3n2HgjCCbwR2n1nEBwyPCRrVW",
  "key22": "5k7CnrAjuHmZ9pa8vMLPbJtbGZMemHoW3M2ENmVdAim9cRRyViuvz7b87zia5R3gkjhJkdGTY7xtMdwkSoRLQUo6",
  "key23": "aWjQRwNitnvgv6EQWCW4YFxuZkRjsZ1F4ZokLkAEyzoas5aKDHA1xnzmCBnk7rTpisgTV9b7Ks1AnGY2VjV6cn1",
  "key24": "5U11p7kZqGWU4NxsCBd7ZhMABqHipiTKxWFb62xsTMTVrQhrGooE7uPVrJY7abNS8dZZMZ9BPCFVvZtmBHMpEkgg",
  "key25": "5m9JUAqLwZPbKQ39T28jg8BBsXB7xf71YtTmmKfkPk48UYfUY1Ge1tX2xA4yAM8yDUtZhV3uc1LeV8hiXVZDKe3e",
  "key26": "3z7naKFE1PeMbzPqEETUGPtLttyFjP4qDx2PuJXnvDJTUZquse4t9rEpwxgdn2xDRANpZn5woKezZmXJS3bsr1v2"
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
