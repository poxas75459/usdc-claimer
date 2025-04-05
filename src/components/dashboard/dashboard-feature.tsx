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
    "e6wMK6ZUiXsUk85BFZ17wcvfo8s2QkJjVdjjzCbikTzDbQMCsWd4C8HBcv58HC77WDZ5b87QaXjJ567WysL1Gxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjtL9n4jUmnmeUxewhLr9HGPbikLaWvyRKWg6Nua5P5LBC4XQ6U5jg9APxA6tRcrbUwceYVCmXPu4URxTAR3pcE",
  "key1": "2o8syw4vP7fNvMbceUConTGbpXdcj1xmyYuzRsMbKiT7o1Db3yvsHHHESfKzJ28qLz8UBqRzHP5UU8oifFAxLSN",
  "key2": "2phEMknxohH1yiZ7LwEEp4C2xGpXaBuYFgQgDSJfuWz791GHZjDQg2Qz49oCSxB5wVYhLZ1g9EmuKVrHcCSKDcFB",
  "key3": "4vxsnk7KA7F8tZyxA2ZfMmU9un4VZrbQvXB2phPjYV9jSSgzH6VU3WZW65sgm32uexVHx9N1eDU1qHCbqEtMSMWs",
  "key4": "fPbJJJ6DTdfE9Snf3E4RB2hC7hKDuHGfRc1SuWPKmy8f5ZHz23uGm63tLviTMbJojqQDJ6ezPVrkisRREm8k2xm",
  "key5": "3WbZLfKqngbC7Svqz5CiCxr67wLV89LuxUK6DUcEkgZ4pCGUquYqHauhhcUzLc6hjUKBzdEZbUmBDPNc8eBzKmED",
  "key6": "M5UiPgkQrt7uA2EsHKpgjhLD5zyAUEQFWcBqRYE7G9D1uDDgZ3LE5z9k6bKhQ5GJuwACo2t7xV1RivbvmMWCqLt",
  "key7": "SAS9SPckoJ5gFH2cdrN9Ae45Rff9xCBp8ZLoGHSTtGhcBSvGWrrSVLhmGrL2eeJh382ncKSdraZ8yS5YQ6BKGih",
  "key8": "49hxNtdq5Qx6Wr3HLppFfk9kq7NFqXbUpmNBqWfABfsukUdiWMTFrBJdebByziJWbd7R1sqZhJGhvQZLa8FskHqK",
  "key9": "3CMehYx91Yyqavt5a67UHwB4ApvhksHPqv9RtzcLH8gNEkcvVkMRWEZUHs7bgp7FWNqfcAJQJ4txUyJcwRtibByq",
  "key10": "3cnqnL4mMGEdWsuSn2YhEhd3fRW2mMGrRD3k6vAwDrXKWooioQA36bhH3FVTe7q17N1DXwUb1tDU36oeZoWJLmmB",
  "key11": "uiV7KSHW1ZyEpDepFEqbwB9kQVD7UBMEg5JKYptFfzXkotkdKLoh8BFxQXPXofd2yUnuHa3ammG2obpDG2x344p",
  "key12": "4SRn7cbkQsDjutoeQwp4D34DeFFMV3jf4HngBtkjT9WR9Lu6wYbRpNTrfRwD9ot22u58ATvMEE6Yt36mU5X7weyW",
  "key13": "5o1jSSvioAU8ecUDGjwxZQxDroSnGJGCjpk2ALBDfD1xiwmcRaCaBo6bFrJQKpDwBZAfkbRVsJmo2DvseEbJrEQH",
  "key14": "4qavvBU1ZCJvqXXJ8Ch8X3321XynFcdeViqGidhBCj4Lw89bmLtdn4KMi4u9ECCKaCe4WPXccnWJ5Kvng365Mccq",
  "key15": "x9fCXsvhc5uVcsTmz3s4ZipbhpWKLLnWiW692uccXMHzAnE1mWqfkS9R2MttVGxur7c6G34rLxBHzfCTmUoFKcP",
  "key16": "2HMoFrZuQcy6KKqWjnfzN6hLTcqUVcouhi844wvwRbWbVXYzSTudY1nD43qyoBn7Tui7HoS86vSMnzttiFcLUS2b",
  "key17": "5dpJd6rS29qc4iq5CTerHiRurpRNJvNKn3YjuA6FiDkJzBpDcQ5Rf6ejg9cDFpjxit99zwMZSFSX9Bg62x9zZ21e",
  "key18": "2E1UKUWWLyhJLj48DhoeWp34d4exogvXTDZijYB481pKyXdw4eERWpWHrF9K4ayKCpmD6iCDCzNfipCemg9fvCrJ",
  "key19": "2u9hfqZGAKHnjP3jVini21yRzcfr3r6cDphHPEgo13oBiNv7SnkoE841Efwf63SSrHz3X2NNh6mvAYuk9ji6XNd5",
  "key20": "3EqhAY66cyB1KSsCgNshJAdMHUmPBjoY4Gt6Uhhp7GuAASi2rV31UVXr8GEtGsttQBFTv6qLYdPKLPbu91mefsUu",
  "key21": "4PC8U75KJDmMs1piNkdUKwUMUbK2nFR14LamMXYt9DBTow5NcxJLv4Y2KRHA5poHpGJx5UwbwcndvjDt47MwQ8B2",
  "key22": "43syQFg5Xz7cFiPLksvQiyHpgzLfzg22Xds8dZ6NCBZ8gP7WJm2sm3gLZCGrvMjAmBdTTL5RVRrGT2z9bEa8Eh3V",
  "key23": "3xYehrx8fFUDjmjAEYew1TuNbXKgq1W7SitZhEqeyxLLth3iuTS92rpVofcr4Ahkk7R2yAYEk4veikXxjBSRSPh4",
  "key24": "jEi9SMr9NegkdBev5Z2VJc9FkdkCXfLFtdpZnEjdVvmXGFG4ZRGZRr7MiTfsbrs1m4ux3KzSoA4WqQj1yXSvCwA",
  "key25": "5XxLcSbdyjYejuz5JDnNigFZaJMdo1uXR7NxeVwVJCcvdrzJBjxRGp2xR9kVHPk5ZgsSD3Rz95gSieJcLrrFevpb",
  "key26": "2XXeWaJnKN9ax9i1w3QGVufNJvZNHL5JVH1Aim4Tof892JUZrm71jLAbtnsULvkLtDRNHaPQVwy6nQW2FMEfH21Q",
  "key27": "5Et9ZJSmWHLGTkk6K5jXjmMfVDmSPr4DPhLyRJjZVTHnGXNJ9MsBdvKvpiZA1mDHZ6L2mtsivsqgy67TnzFoXN4a",
  "key28": "2St7QU8HskxrKvqDGr5BQ8BeaZuVFHLqXhD78nUA6S4dtg37EAHUPUETfY6hNtZya6xkrqNKUdqVM7xTtQwYW2vo",
  "key29": "52r2r4eHGLBB2rsoRMJCdzo3exxMzi6mC9swA8fRceQYQPuGUFtd7cmUu6nk36c2H3qxc4Gk8dym1EnUchNEQKWz",
  "key30": "32g2YZco7eLW9ayWctQRvZDWhUcoWaqb4Uzg1NY9iyNgGr9YEnSAY6Yve53wwApbQzuCq8FGo7US2eV7gos66n7W",
  "key31": "2fGwgHTULFuvxGmyRVZrqM1Uetqt5Du5a2EXiPuZAdPivSHLDpWJ6SEgmxsZvXMQbdyTTBbCtM9NQh6z981uG1ou",
  "key32": "5E23RCSYbPo7mVX1VaE9C5Mns2x3e21B9K8XcshWfuxAi7uedsXEoDMjmTnk1ndzzVeggKmQyZLFqQXm9GJ2etUb",
  "key33": "3jHqknFdg3f2nejZQ8E7PcHRMuLQeiJcFJudYW8dAJmTRo1WLBka217gbCerUUY23wwdmTRANr8N1cMMUA3wrAyb",
  "key34": "1miiVVnJD7qdW3mx2R3yE6Hc4YRdyE6qKi3Xr9XekUG7RvUWCjgx6vPXcPg5PubETSwBRViJdkUmd8JAtpuPFBn",
  "key35": "49UNh7NRxBd9G9ezyfZC9hKvFURsgeh4B9pNqfdh3nrfhamyyFWGPpp7eUiYcGd4CG53vabQQhc7DB83iPidLs6q",
  "key36": "URpfq87LB1gVJyXvCjsdzwVjTdg3hJppVprk4UpP4ofDZVH5gPNo7qeuxumn4U5tSkZ4g2wNb3f5QhGxAPaG7qN",
  "key37": "xRtiy69FFVLgHN9m92TEzAZJbHafMxRbLGNp3Seqb8fsGkoonXo48NN1J9H9NkG3RXAVsAsizvJZkhx5HaEvtPx",
  "key38": "QQ7iDad7JJmbhw3Nc2zH1ERC3uy2paaGhE5wCCrMhhxNtPU89ZfegzBn5RE8qtzorTERSYyUvQkJLJjXydRpJMW",
  "key39": "MCAtdQpHFTJUCCd8dZH6W28VWjqqQpLYWQoQowaUtwTANdZ52fb3bjqQsFZXYBHv6J6xZHh6PhiPiaqKb4mJLGa",
  "key40": "5dpv65GFgQFBons2GhiXpa83PNaMb1XL6nndC4WbHr17VB3xsft7pPV3d4KJgvVvBHYomHhTmeb6EQLy6kGGUzuN",
  "key41": "4pfVCuPiD6VZZ3ShvBKcByikJgGWwARzmF66CDdNeTTneJDYJUUyLzf6Pvax6d7s54MSKn4ow9VRjPURFrPu6VtL"
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
