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
    "4fF8XNEAEYvv4Tt4por55LrNexr9BgmdToKqLAYJzBvCgDPjEb78YTtQzPk4b2urd6P9yMsSHVxsLEvjFDfcicZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cNe16SYwr1tQgGNe37bAidJadtb4cabA6pQXnpif2UTaA1bELr87JJ6UDNzRfKPfNGrWj7j7prS7wQrap7ymHS",
  "key1": "G4XVNbhDsywFv8y1JsWbmuy8qfWHkSjHggNEexHrJN4FxGUp51CD4aBr5LtWMkmSPB65moYmxjrzY2GUANfkEzH",
  "key2": "53pEUDYzZGF29WkrzntXGHFadJ7ryJ8js9L1fNfddL4ox9KZdTittFR5nZEm9sFLJ66F8E1X45Zq59NfcB6qtVx",
  "key3": "6vQ6QRL7oS3XA9WArJ6GGruRMXV3MjRVn5isegEJAqfrbG8DFZ4i2Nn7CLP1LDZDQ8KYftX27YbJARzknWFuRoW",
  "key4": "5K4B9FwQo52p5d9PELijA5q8bfdgSxUZuQpcB6SxEfcuwypJSZh4epTJXw6DTcEZ42q1NCS8QNpqbSgaTA9tkMf8",
  "key5": "8xnJFyNxf1ZMjwQJBje2zCPgLYPGdbkyWmo4TXRa1CLve18fkgXiJSRzaW6YCMB3YE5VgiaxCQDwWMCmUKT6DKB",
  "key6": "4pvFJdenvze3KAGAKRUKrMSMfsRwYuX84Ebn5PzQnFRY1W1Jo1dQtXUDEgSwQBnwaLQyyw1Hqs6UFhL95waALwpE",
  "key7": "5r8TrjTrGCDM5MWjjcRQTbxZTkpXSKWMF2kfVs5geLKPUJWu9YGQqvfSsp9e6GmV9ZerhAbvViDgS5kraWi1Jyrw",
  "key8": "5QyZNcpUoze1Gwj4E53PtLnCzriNy2W4xowRa8vq8VuYmGm55NFzMpMJ672cAAY6oDADtenzZkaK4ouu1uAu4gHP",
  "key9": "yUvryGpv44gEZ7tzxcyWpbn2PWB7NZVUWVFYoTA7G1KDL7JZEYTcHd3xCAhuWg75rajJPKxqqZrH6eFAzcTKJsw",
  "key10": "4x1R8gJRRvq64Q3KhqHv4ZShrE7T44S8J8FbPBx7XH7pfo42nnnZjAKs8VruSsWbQzD6UuUPLNnqzpXmNgmuHrWm",
  "key11": "wcLNjMHfL1hhMH1zAhHnfhcnZEe41w92bcARbSB3GbSDyyKrhG4z6LL887EJL1JtPEHmXiVpB1UrbHXFxm9s4eo",
  "key12": "ubGSsTQi2b1wfh5xR1BATEDa52jyP1oQHY9jrQoNHt1SDpjbGThTB11NLwhnLZ4tVSwqbgmPHuaSBDo7EyuKXoi",
  "key13": "4zWURS1on1BfALQ3WJkZAtdEhBmbW8XA9HexKfuvWf5qj1ZWanyJAVcX8VM3Dojp55azRtcxMHLRvgKAjUAJYTBi",
  "key14": "2rKs8wuDwensVH4ZGe4dZnrRqR5dqyBC121tUTFXoHoFnhvAfrrsQ4kSqe9Bti9C1DTKgzJC2gQFro57q149AyBe",
  "key15": "64gapvLae62uFcnaTxGcp4xzgByEaeeetyWnhkSVciSkQYiSjWpDjDP1CSahJ5y3Q2aHNxzrfqU4Mkgtk2Tv6hMX",
  "key16": "5NHowgbc9Fk8cG77JPto4X8PnUuRHmMGjPjsMuo8erCmLZKGWMrpGgFMFRrW8xPBLFQT98Mrt8r98E4PKEd1tNM8",
  "key17": "2vQ2mHx9RmgP52mqLtqdU2W23y8wVJ6ucAL4sqoyz4UwuSETR7TLWmZWVdaqwXrxUVpP353Sev2AFaBLX2eEB6a8",
  "key18": "5VovJVy9JivUBQy95rEZJ1F1ffcpV4baPH4FWVD5kENQYye3zfckkPHdUjN9BZ7MR8L53bj8Cr5onbjscLuD4jXQ",
  "key19": "4VPq5SsgboUGTMqfP7cpiz3g4LbRcFBqQRpgRKPUSP5E64SHBXrWPcvTt9dJLbCw75JPx1wC6xPxNeiTrkaLsdbR",
  "key20": "55NLa4B9JbMrEZFjdkwXzuwRie718zgmkVukdqAeGtULdthCJ7E6hCNFfpWXYmF8LgXYL4GptbVZopyE7477hTCt",
  "key21": "9K3Bv5DCm7XKvC2cSNGvumwUwsBUWrkJZSgRpawxhZZL6BpKETucr8dk6LV28wUQhKeYNkFDRrzXE1mBk3SQEic",
  "key22": "CjtJgDtzmjpETmjcogFTXMdp7pEjMUcwVBZ4HhEyKCD43SMD2PSBKbhGckYWUj5LCdyt3JPTp6UcLStejKvijtH",
  "key23": "pTL9K34ggFkxgrNqPhbGJrrqC2exByna9kZrbA43UEw7fbo8oKsmMAA1narnMeEWaXbWKqGPXjHSqtTaEBfth1x",
  "key24": "RWULdDZ5mqxQ9ZzrdGyzgicWSWx7WYscDkSod77apswg1tkCp5vgJWmvYyGtekS25ejq9agNUaYbyUh8z6sM4b7",
  "key25": "QKn9fZmprA9BBWvoMB743ZQFwer6bhjSmk3oZdSstdp2pUihs6iQvA2CGK7iptTNhActmvDybQwL4y9nVTHbiZt",
  "key26": "42HWeAyDg459xzijWkDdHss3hq2xdr1eF6y582uFB44vyiiyQNwH8Z3WzagXxfh6mC89fFbLwaQA3kNLQJ64qV7U",
  "key27": "XjrTXAkmDXh5unEoXgjZHjT5DKjaVf7DSgEjK5wD8eoAFeyCCrSoT8xNgDiey3uesjqpLeuE3bbxGB5QSDX1vZU",
  "key28": "5u7vEatVHp31AYQrDsPqFSH3xGGUFX7NAEqGiQytwBh6T1vnGZSqqRPk2gsMBLhSbTdVhtMC8FR2ZjKArLnF2WMc",
  "key29": "478dGzYwLBXwNVChVypmqKKau92yb8AAkSvhCut61QjbBEGsSgixCc57RvtsFmDSJHugLbTfFQciWjsKP9LmRqKh",
  "key30": "4kJkujeGoa8J9YiGHD4xLdPncsPrrQB75tYnaDZ4jKBFJcNLe8ereRSAP4Pz6WDE3YeWrDj6V4xg4s1wyZt9cJBC",
  "key31": "36F6aU9wzovfnEyZ4xVaShhHrygBe5MGhVRkskPEWAuMzRsAqwEW3hjdL612MdQ1s5GiNfmqExMdT9Hb2KQji3Qj",
  "key32": "3dVa7xUL85irQYAxZvDxMJkzYW6xRkmsXqSJ2r9isMmbtUZWKQWPEqMSPqkd7VC4sBb7Wtju9PnUJuzstBynsEmE",
  "key33": "4XHr94ArsQ9seQj49sDg6vniSr3Rqgz5AjP5cem1MZ2nicYXJNnxj347ycUQZicq4gJzSRUSr5fcbewuctbJqPa7",
  "key34": "9U2jvptfbbxwPp2kFyAPe6MTo9Nc7rKE68ry1q3XddUgBF8MbLKZSg2nU9diuRzbY2W1TxRPzJZHZ7WqFZXvFkY",
  "key35": "3dD7PsD6o819ttUveEskVkK6bBSTNbF3YE3Bi1y5wTmTLbuKbowAQVUPfDV9PYCHP1hrVWccwdouvwnrPQLk9HtQ",
  "key36": "3bmBHfsbt5brVVPATLVavo2SXYb5ZLVjm7EoYjah2zCaavzNdnWtGUiRpo1Xsx8kiztGUNN94goQY1WSWGcom1J4",
  "key37": "3MP2xbE6hyMLvSMFAxQ8dbNfSMb9H2hcF96npcnGkEA72KMSkkt9BGFfPrafnE6q5eWDCMvvusdC15jovNcJxafY",
  "key38": "64baxzkgHFsgfFLCyQZrQBiGGdw8Zy9AaDu5bG8tR5ZR1gxnubU2nbTD9dXcFL4bSpu8dNj3p6fShp1bt6QvRTUz",
  "key39": "4MTccUGV3sqyQxr5PpKc95PpPenp2z4m3fLRvzXWjiWxhg2wnXuv8ZYwQzh6wh66PbGZJeMQtwPqLD9hy3PxyyE7",
  "key40": "35bCbJHVtJ1QY816JqFEcRF4GHuv3Fs6vEg3UPFV7YqW7voZxvzRTmefH6TBQpGv3bw1jnw4vfGb3pRyUi5MjZXF",
  "key41": "44HNKUw8BFsYX4XcPQ4N6gUHrgQ3SU1sz6wtMFp4SpPBmYRAKkC7mxu9LUXhVVqvBAffg4f4DRnwKUK8ySmYkLPk",
  "key42": "5SR4xUp5PGkev3JuJArrNkpN1kLPVmdHDNPaw2VsyWVv6g18YytCwF1y3jsy8nfvGoq5sLHppRgbmb6tG3kQBhA1",
  "key43": "3yjNvmhdC4EediJbsWKhtXp2BciKsH6CN3h1dqRfF681XmUGaCRemLfsSpzfVA3TgceinPjRAMwGyZqbqLcdcBuC",
  "key44": "2mw9FuGK8QLQDUEjGC2tenruouyQAVsUytMSrBhp9zKsQkpJhUXTVWxAM3NiJNT27miHjjsUM34eZbyVcWc4dkkH"
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
