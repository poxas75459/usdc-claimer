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
    "3ws4TTCrRW98GSgtJQdXqoTLnh64efM5wu3ELU1Xze64RbcC9FZs5kkqRyuRkHQR4V3URei8cq4nAb2B7wmNTPKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrLdeXjK1PVfjNbRJdpGxQtkmFCFJ4iamrTHtP3xMbxhtivr75WaMrFqFLWbFSvbgBy8vPP6dm766U4SPswc6RJ",
  "key1": "qVvDNGG6crdGN43my4a5kEAQDBotPCN8PevkxaZYCxMd92uQNPWFefgUph5JVNTsZBrwNWpkFgNC5UqTexpwDJ5",
  "key2": "4a2YpZ8Y6CjFw1Y1XNehoa8aJidPg8GGapnKDj35RGrq6xiEmdtrheEfoiyyRfPFajT8Et2MD7nVFowrohDcC4AK",
  "key3": "3T81qCLSoStnovBYmH9N6d6cvmraRs59mnqyBa8XM6e6YhXDY2FkTL1UeDp6ZaTVFnWwGXr6jBmw6VPfGPWyiMqZ",
  "key4": "3cR1NruQxc3BRair4E3t1CxLM3eXRBL1qujTz3paXDJ1ywKNg8TYU98cmTToScpZ5LdhhQ3ZbykQUzci14zudJUb",
  "key5": "5KCq7AwJvXGxc7H3rkw8FZFm4Wt8i1V9ahXwPT1yCMydwAnJCWuGNfYpWKc8MPxrCLkgjRk1yB1zb49Rj2tCYuhW",
  "key6": "4LHBNPPqpp84uowtkKWC71Fz23G2NAgVBt2GDN2oL2KiovJJKfUBGohw8NknHj4hrPhu5NL1n8b6JKGXqnhB7TNx",
  "key7": "43XUn6FXTxfonwDy6vQtEFw6GRmfnn5HGXP6z7j5B3rbn5PJTV61Y6b8tYG4c7427bqNd1tRimeTnRA4zVL6AA8x",
  "key8": "54jYTNPKqjKg7vm8BBCdjpZ9rwLHoLQJYSn9pq6i7AMgZTfdNJBBeNM35SRiJjYcHUmspqmdeV241WCJdB4ESHek",
  "key9": "2rkqV6MZNkXBX2tdYK3hMdEH7LujBKBeyvrk1bq8dKRR2diy8f1myVVDvBSgnFozZQvve7pdupPi62NbnpvR91JM",
  "key10": "7jhygCdqoRZeLuujVWJDgMsWwMNkSLY1CRqFXfThZNzXnpw4s7NxhSpUhaQj6GxtsShSRyfCzYDjkq8qTjTqr7d",
  "key11": "2Qt6Seij62dgtVGnjquHSHqsy5QoDBaYyX9GeC2Kkt4yDfxsEEqJ8c6pN6DLcSdKNdpVfaupiam6h5JDYe6fwBmz",
  "key12": "4aqq7vxJofGjy9TfGN5sL13djUNdGwrqpEzoZ4sfrkx3QqhGmcrgiXTWbKqjXUU8ukNmrejCv1s2DzHLWQv3SF3K",
  "key13": "4xF1eWLr7z9wtqKAJdhERFdXHqtna4qqdzM3mZW2wgfdDuUTRiYnUv7dcJtyUcbNydQ32JDraVfk5j5K1WQyRsqB",
  "key14": "4XFZY9tCA9QHaH12mpeULPSehqLzQqgj98jZaQ3Zdh9xSoDTg1SbeQHzVh2L1GP45MkztLpatbb8ms92k2p7gpbJ",
  "key15": "44TfVdkrrBu64TCnxdjp3S74tZiA6PrLv4FMKiiD9SxdFQUkU6qFZd1NZrzKgFR9NFTYsvyL7eqUJ83XQzoccQd",
  "key16": "42ny4VFLpHMmJrGP7YUScBgKx3pNsVG8FHQmStiLv6qDkHYHC71HVUsZ8VBZveZ53utVoNo6MACKrJJjXnJ9d17X",
  "key17": "2J5SFsSLcqiW3hAkqoxqs6Zdf5xp5smq6vtrkddqv34CzSXAKMgAbtPhjfsFZ8SURXhnJwggatcehLRVe5SrVQph",
  "key18": "4UBDF13vKsQhjxfUJxPjdkxpYQ9EyvExb2pTC7HLiVYNMxGA2vf2bRc216LHpicFJhGWTKd5mGT2XZeWcNRpm1J1",
  "key19": "3hXr71WTBmz2NwBp3yu3AtSFTg1vb83SSRYTcUDikuMfBdQzR4dPh9NUKE8qSRRA9JTzTo5TF6wtK7HfE18JpGo5",
  "key20": "4Y2NQsYXPF5HkqfUDpSgo5U6XQz83DaLrroAtcwRYRZCpDqkDCkNV3q5xGdkzVwYf9PXD9pT3ySp2RjXbe936vwA",
  "key21": "4dT5uuKFksjmYStk3nPEYLnFrL6kQh3cG4PPwSfyJ2xUP9G88bwmYKnE5Ssv5YcM1wJcxvjk5yDozLZhQpQNAWiD",
  "key22": "2RRnMa3eNpb2Z7EUKV2qnYosfgK5VPXNQ33Fk273zgE3VP34RV4J1Htr7QapSaSf1yLHrxH161sPww7iLTXtRKH9",
  "key23": "sMPA317BSxCc2Rmr9Y4WSvtT1U9BKTzQUFKj7a4TXJce4EjY98ACcbEzmAvmo3GXcrMn7xb6Si2ofaKutPbpjSS",
  "key24": "23oirMaqzsE1ExvdTERuARKNrC7uGW4tHwE1JPN9k6X3RJ2XinQoueUhExKxwrySz9kpqab4cAvTb6DW6cF2NpkL",
  "key25": "2JSFiBb3fM6AWbJMwSUZxBTAJePaXErLDYpcUzxa7h6qKxG9ohFVmKcv9cEkGmvG6HWAHXaMe1kGwSW9io2jn3y1",
  "key26": "4j7fbUJfbRehyWzDNjBteWZEMN6QhmxDc3tLmSuVthHZWArRMmjTJNfciPEQjwoNqh1KgTksBNPEEGMTiMAcdAag",
  "key27": "3xTs94M1XdW7aVLrCDwrtSpUisNXXWzZUdaHhNF3JoD86YAsBKD5wBx9YQFVKoBrqJ5mJDqxSFDgS6RbthVWwQNe",
  "key28": "4PBJAUVZNJ9T8NWdzhBiJQRQRMxog7gGoSNqxkccXbPTgyZ7hheKMvJghuTPTaYqLLCT12dXoutTJEaBixL7c8vw",
  "key29": "3TDpqLHDHF4vEApecQMGCts6M7qN3GuFLz32Jhu9bHLnwwSYP87BCzH33W7r1q2Cjifcuz6vFMYfLE2HjHjM7TuR",
  "key30": "5Jnb5h3uXdEq8FCbLxf59Vv1FSbiE55dge9pWnTkytM1kWjxFsHMDfGrJayxoivn5H9eTaRaq8Bv24eeRN2pJWus",
  "key31": "3xRHqVpvDBzBF8ENdP2i32Lba3CyZeMoG7mtwEx3cSSaLRPf36zjmDPSGWuKgUdcPuk2wVkg1nYEeHpiyhDueZvQ",
  "key32": "STokznsR7k7xSKmuR1Pho5fmrPRpoa7xNoHXbPgbfAkaNYiAb1F2RawffNvV9bfC3tTZq9wi1o4upQDmcuiNyzb",
  "key33": "2HyThFPYdmEymUQ2NB2V46Y3r3teckd2Zq8vnEZAFoeRKdJ1hMrZBWiE21R4Zh7YzWBVTZvScce8arKU2UJbSq7c",
  "key34": "f9rF8pk7tqQ9zvfrCXT8Vaysd82XbkJ67odcotnMQz214wdvKiroDQk7QfNL8gnPB7hvLMAF8bfqJmn35cxCQu3",
  "key35": "2WWKDm1CffFHwbNK2E6ySZcX1cNr8rTGL71jEANvST4fEJYL7anoHGroQfWEUJ8bReEcCnjgrYuHtJooCpAnJp7w",
  "key36": "5i32p1WVoDbdFzibYbpesCM4B5KCsaUSrVxcdANsmcqVgnm6RiWUqTnYdBYENyQCsT6aKjxsXFRAFethpFy5k438",
  "key37": "mwbfzq8kCcyXASN9vv4X56udcHepZKxHmDEPoJv9PXZ3QypZGVhQpadFErr3cKE2uQgS92CsETNmFFUjtZak49g",
  "key38": "wmKZituMghvngCMGbmppTXLRcMkerxC1w1DuxXpb2sic3ps6UFmLzRD9W4MjcxS4QnER7pMjuee4Epi55XHkLmP",
  "key39": "2NUexEjMj2Yqk684hAZbD6cmLSR9yXQdqHghGpxT1nzJK5HguJLd4VhavDyzYeqhjh1bsV2nJHzWbNV9UpB4oSEC",
  "key40": "5BMipRsi4wx2A3QEP95ZAeDDyf1kc8aAyinRZ1bsj6Z2pbZKAqCXi5Fg94E81RAkVD8NUtJWpQbp9gvYtCqfMDXu",
  "key41": "4caw7wkkKsk7z84AuLBYbYLi71cesifHcShRRwb2DHjo6PWWaDBkfBRydcd4omPVk64X4aUVXS5yaCz8DGgY81W5",
  "key42": "4DZKTAZVWZYjgrbEEGdDQf1nrKExvc1vH3yACsLuoWU3HEEbRW48xj69z1DLdYafDCF2n9mtauPBygEVjF6kDtdJ",
  "key43": "4HGURJWakUELA7bTFMxVvpktiBwA6oqxnBxHSRR26dLZBMq33nNse9vydXBR1BPGCpEgj5oyphCTFRxxtmGqsMaa",
  "key44": "3ziy6Tg67bvLmHHVk7BodBZtrdVAMLHcmSnzRjVEQqwdoF65xb8LAp7Ga1hWMRRycoBkDtRg8DRoPGFSyTNqseD7",
  "key45": "BVnERKY1KstWcsCcCdUvxHy4HNhzUKbu5gw75CjWz234bFBD1WGSvcJkybH4d1EstYSiw6p8v6uaUAxTGKp5ERh",
  "key46": "5z8Vu3wShZM1TjRxdGszhBLoCxmo5k2poVgmWmJ459DfwG1JoT6dVDDdMhqC2axWb7dYrXEBDu5HSeWQiZjg3GK6",
  "key47": "593d3yDfKjUBnybzaHJRwD6as8fpEZapVb1pT3zyxwgJ25nv2p18MnFDdi7QLpkfLTo6YgsBG4spmEvFK6wT9vgs",
  "key48": "fc7tLBLVphoeDQdm9csdPsG1fiQ4n656nGo7z4hfj1LeeXWWifmSuNXp4nC6Q5BYLCRKkWUTrPjLubEy5xpXJHx"
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
