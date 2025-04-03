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
    "2jDBJW9NUwjLC4fKB36aqPyRagW4VRc2cV9du9UzAkdJ6dirbGmxMkADwXM67pzi9x9YWsACSsQboJCjQJDMvoEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rM4e3aUbH4F9bMKFBSjjjAipYUHSaGu1quiuyrsEgSpTiT9UETexGfWwUNNLYhk65iNs4K9Skesd2AznEjpadkk",
  "key1": "DBXQHC71bCmnUXDyQvPAorEaPTHzXyNJTy1wt48KnhRpzFzQFbUYo7Xfn5M1P8XbZRC1ewKAzKBLEhx9ak3o3J4",
  "key2": "5swCq7gRRCeJQkEDsMtPkbiTsF7NZTDPC9Rceb5fB7vEJAPQsnrndJNBP3MWeUz1Wt6wN2WVsJv7mqRzXztR2R7s",
  "key3": "EV2Aj5HtksXt6zG9zUidbsod3HiNWiKsRqZJ8XUD9kCYHudJcgQgAczx1i9B71NnrhwXRi2GpnddyXEJKpzuayg",
  "key4": "63moYPTEnu1BJfRnRx8Q78LrpA4siSGomPZ1TmjMxAn7rBuQAQEv8P4dPxUPoL6WCCmYaAYAyuKoKvawQ2Bu3UGi",
  "key5": "3VCTLJDCXFN7iHT3U4w33VZ9uj7zdVda1vSfvCCN9DJWRFZcrX2uc6v9rdW5Tzz1C8oYsF34xAuYH6ZZ24MCuHAS",
  "key6": "2tzga6yuVwLkpq7H1PRDkCudDhxpEh5YSNSXiyMJH6A4UV7T22P71QsJM2p6HXTw7Pbz8gwzjxZX1qbLin5onRmd",
  "key7": "3nX53dpZUJYTk9EMGaNGahCPHrx5nBa1ykhw88cu5S9bosTq6R3un2HRgv4MR4YxYtQgabmqxV88e7uB4EfXW75y",
  "key8": "4CSs8jubnm7Sz9qc65XJhtxoeazxaPmLJRiQrJEsVMpTcFkmkFxpoEjqih18mcXiMxH367f5LVhWJggZnzvTN3hA",
  "key9": "DzfvK8y5CvuyignSnX59QcngRhZN9MrfioDjJS42m7WRRALK84qAkPLaEbYoYgeCb8k3E91Hnn9TSA9hDmPR9Lk",
  "key10": "ComVP6Xp2CAt9svv2f8Abxq8NeGSovoesDhtLzdkESB51Qoz9jgnAyuwncSRxCsVJ6p7ku7q85S8mXcTw3PUs6S",
  "key11": "25yoB4QU74opj8KiDVkYD8zRSTBmMnRsZNgfxyNoA9k2f5Ndz4yehGapaHov7DrzWHCJfSqs3uqPxUFHKhfYYWoS",
  "key12": "dHfGmcVPJVPaUR75EFLJ8JBb9QJJuzmPvLz5LptCiu9wigsdW6oMYp4AvAMEfb5cqNBMjMDT3PkxVrHjd1Jh5e3",
  "key13": "2jHePcBLmJrReQAqHsxJgSDVzaZhE6DzcN9d1oLwjCogkWHDBVm4rQfamWsQ3iuiNYF1uoG3DMKHgmwjLb7xnBD4",
  "key14": "5EhRaByEg7CqtaKaADYpn6SdLgNZjRr9MyHZTaWkow6stAspNYyYhjEQPdXsE8bcr7XVjUJmSjKGmpaU731bkjo",
  "key15": "r8BLDTriW6bGQtV7H96EQnmk4PhfxkTj4ndqf8YwT6B7Jipu3VVWeisCir6dfBrLnEdfesW7aFLVnv37iLgybzi",
  "key16": "4Qf9cUrtNyTuHdCGSNBwWsxZ3SUFoyBeGiaoe2HLbDZRYhNBH2KmhhnjUWPDLaM6viJBR6v1xGVWwZNQa12Niw32",
  "key17": "1GbBioezGqwp3y9UQnEGMFafeyg2vTa2k7mAG5xRrUbDaMQ1kk5MBR3UAXauMCaPga6kmS1HJEDUVNFGB7Ssqh1",
  "key18": "4jdNm7gexTQA8RQ6AUivnFVPPmfKeWqT4Ko2faLUKLpNpiy4jRN1zaHx1XTu8dkQWLquBpbbR2Jh6KRGGo6h99CA",
  "key19": "5oZVAH4yYqZ4nfvxA4a8ALU6eDdaz8naJdpc7DPfDmdC9jn6P7mVqg2sSQiRMHaSzDcirQ2NysAKXxPyP825K8pF",
  "key20": "37L25ztdCff3mHxoHyg8EX5dVrYywFQ4nuD1cw2TLnKpfw7wzYeejWEmetkFHvgD4fC3E5aoxSWBT78nDuZ3gwAv",
  "key21": "5F3tB2yVHXpWERWkv9j91SSUg3ZN4WBwGww49BgpCwgfYXjmX8KFjtfDQUbw9ZiF1nLtsos1NPJxH3eDSqS965hL",
  "key22": "4VSWhdU3BeYBXEjvAyNBmArWkTFHGDSzSuq3QfawqSCmoBSYWJ4akVwCStjH2E55K6pCH53gm8bCoVm8Qi82ezNC",
  "key23": "NdtesRfVpuXurwQEaNQhnsd9sFv6SCRb9sRLZiU8s2q2QbGD1nfTDERdXwXgA1w6W6AgYBPowWeStVATqxnferY",
  "key24": "4N4kR8h6TAxmJQDAjY2qM2V7Z95VdH1XJxEzsYY2pLpSRBfnhPxT5oFcjitUUDgHPyuKPogUv8crECRuCq1Z5Zzi",
  "key25": "2mfkP1BjaJ7Agv81RA8ZeySU7ykcZXCe2jQoVSR17czt2N9y3TarSV7H1t1mzHHvRXaN8L9rpVFNEgUnMGwdAtf4",
  "key26": "ACy7oVCkWMuoLw6TXcpmHPwaQoNgUGx3CfxrhhxuWFXh4N28JJPuMFCbrgY4yNHQqNBLcJjhNdKucq6Tib4dCpo",
  "key27": "5xsnvcVjcJ5CnUHgxBcSgkjYv3VxBhH4CFmomG2zM9bcb8Zrmz1rJWkxNk1QQ8Ys5DtnPs5Dkw5zCFWgptRf2D7i",
  "key28": "4o81Kcr9NEoamFfCNPNzGiiobnorUGewdRqDfV7X3V23sttdTeWai4fq9GWp4KNkrdtqUeyMBd9oPEPNBv5FFM4",
  "key29": "2ytuZw1j24s7GPyVbDamY53VwY3FwsBueNoMVPPjZHHA9yT2cU9Dq5RXLD2hKSaLzL4AEPwraHzoTDtABN8aZy11",
  "key30": "3zjfgGpbexbUuLS4xfaiHFjJedgFdU6NYoaRBRAET6acmmrrSFF6Nn2MAaR6jhYfLGwGmpggMsfwTigisDbD9tFb"
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
