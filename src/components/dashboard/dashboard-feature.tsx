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
    "347sPXGW372TgvJ6oKvSdL2CZ1sH2vxFEA6rCs6eWnUH2p4nQRTQLbBUxaEv2ZCeAgCGiTsLZpPKr54jabSPbTbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Du3qZBrp8u6nZEZv5ALArG7BoyqDfbfix6em2ZgnWLjPusa4Z8e3CthdKxdqwUkmziFwVBLJHokezfbhySdjVtx",
  "key1": "3Uno3EQyR232zAtY9kNmScokKqz5jF5qkxkqaCMWrzpyNXzo3VpddbEnBh1d2WNtW4hNFy5YjRoRJV4UnDzzgc6N",
  "key2": "5ngeSHa9eCDJgWVoJKEeS3a7ir6UahqjG2F1D7zyRNoyoyu6UrqQwhcyZ563YpaiVhs12TetJHryn8VKMP1nkKSL",
  "key3": "2XmLVrJ3RjoGQ6k7GXD6dtNmuYvEP8ziDs2UcPueG9XRfWndHmScuGigvfMLfaUeDKFzjKH4kgmN78BXY5PPFXWP",
  "key4": "m2TQ3ZY6HBjcTgxCdmoY8zQRgeQZ6Lck3YXFWP91n6PxSgYTgR2fMqxj7eyAZVqLz5fT4AewWtVEimyLt7pzNhx",
  "key5": "2zGsYWxJ8RkUdgQT2ecwNiaaF96pdFDYDbCoCudxj8PVcGgxFdiKSEiSfn5TM9BuP8xyQJUbWSANcZV1RxDwB4Vq",
  "key6": "3BWNHJ6Evtj3VDB8bCJjTqKfybq7e8mRipXyGb91GVoumAL9tqFKVA9fF6N43ProBSXB7xvfoR7d7745a4kBt4W4",
  "key7": "5sMZF29REsDrAKFL4yGj9YoQWE665m2LjE2SK5yUyX8RAgkCbUT1oPgEvMjjjAVnY3nrZ6q9zgaykE6Fa2rVDz6",
  "key8": "4d7ihAkvE7hiydjkQGDrQ7LrMDxRvVJze9Gha6zimtQPiw8ima3erbNWEsCkiEDXmfeqG81XH5Gem1e1kzhFfNVV",
  "key9": "2GCHrE8WwdKeRvCpV3UsxSw3mMNspmPDzb9Cym1heq9s248awG6SCrgmWPFvztLjk7FDELqztas6T6X8zXjJ3ppe",
  "key10": "53erAWEuFn1fPo4LoQivqVRHna3E9e5eJWXhTxajLAwhYDLfw3LZ9hNmkHwd3gm92zgN5QGBNhpxaSoqNbKoCpJF",
  "key11": "Hpd35Q86X2wyX6qp6Hwa3kgD6G2fF4XLCxQLUi7RcMtNpx27inmMsQyC2JyxNg2Z9gXoSDSZfkfPZSDLrT5zNqY",
  "key12": "3SHSrDcfwMyrWgQnAxW9p2aDQkUfW2L33AZUPCkCvrtZzwakyQmcU8iYPjoDuVbRz1C1xKaNUPxvaAAiZ56dyNKo",
  "key13": "5gBoqvytPMVLuQboQg1eqYfxsxdK36uTesoUZ2qkF2TXRU54WNwWyPvTSfwmiijBYzD683z5sdrvWnjLxNhGiur2",
  "key14": "LQxkgYZ4ef2ZzsfP3aBQjTqnUph4u5v96s9U7QcNAWUjjCCWkqQQTHxKAo4TwdUYQYyqT6X5jfXH6zRGo3CTUWp",
  "key15": "4eJd7bmvwTqUVNWxJepEqXToCRrsMvnAjScTYJ6ytCL96BJ1qD9BDgcf8otLgYLP4PFp5crVSxG5hMnexu3az24s",
  "key16": "dDcMHoTgdJMSg3rVjZTAMPC8Mhufs6PweeUJQHwnF4q6Hi6aJjRAEPhxb6hpQvsXchDaHv6m8agHpWxPV8ddiZP",
  "key17": "2jCw8XLeFQJ671iFHr2noAx1kE5XGJ5u1h9Jgt42aY8d7VtrhPvJ7Q9aLf4HktBDTokvLNegs54PKqab6hYPJVs3",
  "key18": "5sA9oofLE1ZiTGEE6k8LvkjpBkoPDL77DCC5t4p5mPED1oL3gMgS7MoSdQTA5ZTwGSEkRgb4gyJwRiShKcLzsG3X",
  "key19": "2KrEGS46KLMwvxo13NiSCBXe9rqoKbS2MJw31VTU7tV3JPHetDoVGsCsxH21vhoFA7UqiwAyWcTSuPuUshzwK5V9",
  "key20": "bh7F7w51rmmseiLdWaMTnAiTZvLFtgZHKmjEkMgiXFGe85cX6agkUXEbXPS1NrVao5WvrjmpkCb3WuWShGiLvyE",
  "key21": "2fovsCrX1e1YakzhbDjDVi6PcbGewunkj1h7Lxdzxkz94gS7DKJMWijRvQkcqSuoKH2ve6qLDpXt5J7zxxpBLhFA",
  "key22": "5k8uz8L66N5cWtGexswPzSJBjNHKc5sKgZnjZau68apRmLyVAPf87GoUwhj1Vztr9f3vrRV78eajHa369CJqVRmc",
  "key23": "5HuQ2fDTLgbS31QLi6DP6qgrutLdmBCMVLQi5ZdypzJiyZTYLg2ZxaLnjwubdtzsYRXJBrQgd9ET7FwnF1KX3HJh",
  "key24": "5nF1eKJjvshGmpCCTHxqEC6DbsE3sHwGQfUn9Hf5q6twQxsAX3cm1ZfWjS7UXi2wRGp8Jt5JrCE3b3AMGoVpegGL",
  "key25": "3dNws6HqwpM9cm5TvUTr5bjoPp8qJR21HnCBjfyCWH2bbpQoJfEQaYrZ5NPor62k4xbRLXqeky7j6zLyVwfH9fS1",
  "key26": "66b3RKePRVGoeUmB6CCLWGuUaJ4uUKWj1oQWVoG9ehyAqaPrX3j6TnQThM3ytvGFXBWXqQ6kNUFco8qQfgtr4Kzm",
  "key27": "46asidwWAbeGBPB827nnELGq1AVGyWdDJpHJAjkmL3SP2mQ6f5twLKXtiZV2HWY7SAyT62aYbefqxVRSjXF8Sity",
  "key28": "6wfbsfncqcv5HGQVZ2FRwGySNn1kiBRT6gAxi5ydeKhX3inUGt4pP81zjxKoWHM28MkgSn7BTbvuihnabgLV1Dt",
  "key29": "4T1NUZgJ3npTTZ4rm24E2mV1LHQHSTUX5Gi7HsbnjVNC8jSYJPKVLRpUD1koW2Ho33JyoXnUHUy3y2ix4p7NWGCj",
  "key30": "5T9MuMQRPCSJsH8HuA1R63FbZmBidKap8DL5quU62ULL6SBEY9yvCX1CksnH8HUV1kww9fMfubFyVniZwtf8Gigd",
  "key31": "4MQPSWVRthMeTjZCSSSbEw4PPhdTowuqJQXqCtpaGBRbPW5SgXJWkc3hcK64qHFs8pJEnZpURUpVJdhau6nvVc5m",
  "key32": "28cSoMvTedCeKFtDdpxJ8RE89iQbaiCKqbzvjiX9YqXMZNu5zDHfJewwXdeotRWy5AzTjizvHtxQsQQjorgq9PRn",
  "key33": "6NnYyh3dGq49o6dLBfxajEe963Nv3FHHh8MrgNSZqF3VkVwzHmWENZSeYrv8yG6ifNQmuqaup1nWd4nXbjCVGeP",
  "key34": "5TBwa6mrZFkr8YnPyhpBLwkyeeBBnyFN2AGbnzMHNM95xcFb1s1uVLGvbUzwY2NSitWuxtshbJf3bXw5Zhma5PF1",
  "key35": "2sFQMHdptckzJuR1LBM4CQAnViFRzMtgCWkbYdnHjAV8hFzXm4MwS56PpnNFFnaFK7uE3Qwk1gEEwewH6gyNKPFz",
  "key36": "28n16UuR17CV2EAUJg7Uxha1dhGX2WQvZPGhPxyZLspctXTn317dW34FUK8TKN4rspqapwKiuf6DHfdSZLEH4Ujn",
  "key37": "4moB2FqF1NHRByZnd9zcNsJ9dzLjNuabELdkteCwyBfGQJj4JVgugZzDDdABFNuEcWcG9yuNpQwNRL3pxqmnT7T9",
  "key38": "3kMbQnysm7ZBH37J53sSmi1LmThDSC6sVvoeZmBxFCa3uRfRpSPGZVpFHZRQqgYaUCHrRdtbQL5YyiVGKRrmFPNx",
  "key39": "53tzr8cqNipfYeKrwKAEHh7fRxovUBy9fC6gnMFzncyrDiFtJGkPnKstFnDAUz1XjQ64kmmSksdttdFeHYwp2HYe",
  "key40": "MHsxk8vqcE2n7xv4H6xMV4WJwEaD2QiNynk7z3iYcerxg57MKqgqKWmsBAERgodwXsEDhDThLGZRDwjmHeWAXnG",
  "key41": "5JaVe9x4vvorzRTXy9c3myKNdmjZGrhhXk5AaZDZii491TJrNBazKjZnf4mK3jXT4aCZqjz2pgnU5cL5agH6v4pM",
  "key42": "242XQoBcZUYQXJKg6tjA7EADWuJUaqoSuJewJzz2WMFmcSjAJHcBGJJd4UVUrdTNG9akjj5iD8D44KBtZcCg6Znv",
  "key43": "WWg6JCWG9UnCt6Je96BhFf2hi8mbm3457BZCS4xpqgfJeaUeYX1YsuC9ToDPH3PkS1wwukbrEFCDy293DTbSox1"
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
