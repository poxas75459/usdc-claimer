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
    "5p4mELdWEApUiwn88xSx3FEJjjVdE6wcjkm1y4oEanwyqxK6zXUcV21F2zQFWuv3EcDcfnTraiD4hVSKFaNbz5uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvjHuHQSfUK9HBk38VSG7tKiQ58Ja9dNBrj3pTbuybD6FwMVugMv3eZKUqmxMfyGwAXETthMuoRfBatuobqyVVr",
  "key1": "3NgwPn62WZW2VDWwC7ArZrmFSgBnNqbiv6y3p5r3QyNapzndDdzCwn83RvrE1AebFMPdvEd9Zpzg4MYAVXF63yCw",
  "key2": "5XtGrGp8WJVTKVhoeQ6JPwxPtz3grHGv1nGqWSTShr7qqTiiAdPASw5cpQUck4mG2qXC5cqehjFJtqnkTtayjGVA",
  "key3": "5JbHWUNwiS9j7ZCZRjopcWRbDP2mFxng8cVmo6q34ZAUo82MFSZsXMyQCAgb44q34HzKst5jGDgXEhGx2fdD6TVX",
  "key4": "5xaWRcNcv4rSGEUBud8nF6HG16DWWw8vMNQ85RMxBhsTok3acXxRkZfUYjJfz5XKm5iiKoAhpNh3Qt7K26anUfe3",
  "key5": "3VGrtWLVXSYkN5NxUZVNZCVyzaqdb43jr5pyz234FPEruC42pefCTc4M2eU6h1HidgMuCKXLQ7hJben5YbzDR47J",
  "key6": "4mNaLiBqxNFh9yog7mqrSPAYDXQYLhSZhk5ZNww1jAei5XRevmsJpQ3EeYXtxAdJmxguE8HMhQfncCyW1zWJJB8R",
  "key7": "289SmRWRkC4Ex8URGUgf6pTXqQdDzrURzmXC4VtCpaAKkRWBuHnSLRCCXyhctwSB3LnqzcyDi68iyfFEzrbMVsUJ",
  "key8": "3oEsuGU9PNQ46s1bhoeRtPMfw13KkQtE5NM72q23z7QH3hx3wsLvrMi9KzX3pyVnKnrtSUAtbWPWx1aa4nqzR8wX",
  "key9": "4TuKkxf4PS2mnaHVvMRKG2N6ZfcTg3fXd9ZqKMoguwKRGGNFKPxmkLmUZqkHfQRhwJYo5pp4SSKHC7qKUhEVvffz",
  "key10": "34ARrKFokv6ttqPmvECUMzeMyAocM5Rcf9mPv1gvJ2fCnqgKEL8sVmwL7otTaEsBfttgPW5D3ALQiDCzdXtdbUyE",
  "key11": "3XtySMeg6VyR2nnnY4cgYShBXaVahj95qS8vwHadH9dPhpcrk5kVZt6VWZoqzXpke5PKKnLtcfCd3TshnUzVK1nk",
  "key12": "4qHLYLfH788dTkyhybohykiKS7mkUzhAEAk4yVHy8ucQNuCHJmCv1RrCwfNMB3hag2yRBYeYZz7W7vmMgJv648TN",
  "key13": "KKCEw6McXUhTYGHYHCYnNxEh3Gcsgg17Gk82tdNj7EXc6bHHD4iRTkNgNXJVAT2eQG6H3n1WYxbo7tVzMW3XajA",
  "key14": "3E3WZ7TrwNAdwRBQUGdSMxB4oRiSpvoU9b444eSawebXsrKYZdZFVzZkR5wLbcVfQvY3ybPmpw5EE6RTFiXSS8id",
  "key15": "LLznQZSNpWWLwLBxf4qgaexoZjyHZcDvf7Ef1HYVG4aagKANhjeUiim2dVoLXMDhLezGRkPKmmpq51pdYvHyDhp",
  "key16": "3NYqFLA21rKovx6UbqZrYvw46dz5SutY3adQ6JFBn152rrfWEfq4k9vkVfDNu1FbcZWJL2EzArrUKmskquBDfq2S",
  "key17": "2WCHGiz1akNtjvqnd97SNBRsPr3LaDoa73tfnfbgjkF6cr6K9dUUtKmvyXq81979jn2nXVPMnhPt6zv2ZufbbKAR",
  "key18": "2f2qDVZzF5d4Q15QevJFSUvzHwHHz72AYpGUHBez6i5qbyubu8k6KqZmbbSvY6hzEZjedPXeGC36SFFgZhcEZGrB",
  "key19": "MiiTAY4Gqrwb1nBtjgrrRySRCMvZzw1wYx7dq1YYaXrL1m7SzZbYi84dLUabxBXNQASwQvmWzB2MVEJZjBehrfe",
  "key20": "ZwXLRYMK9tkud3Aqt3wosHBUXcLacsENzjFLEHcHnkdHF4TPsAC9RdqiBLHmHDYoJG83WPRS8mpFpQxsxqFKq7s",
  "key21": "U3cthuxM8iXvZBa2ezDNQW1WCt8R8AKK3rBGiUeTdWorLq5YxrkrHXskuyNdV15PM9Pa7UY9L4a7Mnw29Zey3wa",
  "key22": "2ksBPR5rneD86wB7NkAko4iDqAhcyCDx8x75fpzSaSKYB9Sa7tRopPEii8UaNi1oocWHNmCE1uE7kYBFdokQNejB",
  "key23": "2UBZUbofzQQeCnPTiTEdFvSswCqCwDKQoiej6aCsomMkZ2S9vHz1AyJmgz9VJCYUQW2mswvPPb23SzgcXpNk88BR",
  "key24": "4HMuXEHZNBk5VSA6TAViExZ3zCieQja1jNQE7cVsHd1ijKefn9qAFo33Q7t9GBAcQ83ugjT4NzDF4fAirbdthKmo",
  "key25": "53GM8YNcBFNQrFDheLLtvcc7uhkvYhjnSUmmZ5iLk42cYtnVpsLe2kkkhd7VRUAEeoFnD4476UXJWXkUj5grUdf7",
  "key26": "2NEmhCZkZH8dbhsMXwiaf4VEbBWc6diAWCzrsg6cNGUqXJz34YxTURE6uyE5Y4rftxCCg4zcftqRdqrWrbcyvEMQ"
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
