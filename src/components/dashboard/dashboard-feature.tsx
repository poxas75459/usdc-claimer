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
    "5T9UCUkJvHpNfjqnBxxQLaWUkfzbXzwxsfavJZdbrwjzsnWQ8E3WuDsTXj6wfDA7rbqrykeDey65YEw3BEuGce92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykg3dpkM7mDwpPM7Sk4HomUJXNfzQig7PJYKDo9somngYz5fVTLvwNKD1xK6rwsR4HyTroocJuitiPpkC81sbrF",
  "key1": "52nghWxG5iDuSSMcZTgqcAkkZD5xsDrghpWNFVB9PV1WxZvCecQ13EgAKn5PB9SSfyVWDBfQJkFAZoaXZoeoSwZp",
  "key2": "35RaLYY1QCfGjdbkygDcpyF3VWeK8m3d7BJvxbPRkF9NGxVcv72JgpTEu7xQ5MzBpvt5UGdeZSj7MtgKTtYYE3mH",
  "key3": "4Yc9mkXMtrrdith7uFJWvBXGqct1ze5yBz4BSEMKYF1kEoKDKxjkyF754RgyaHKwpGqARao1x4fAmXrwJjsHvHzJ",
  "key4": "9m6ibU3ZP8Skeu14pdaqRwFeP4tc2DJxjuStdTN8JwncMfoouaYyb761XJ7fg1oUYexzhM68eNMBB5nMRdNwtG4",
  "key5": "54AbXB45RNtaKi9GuTwx2YjP72UT1b94oGu9cHFEocJmZ2t74gAyKtpixbDdmn7nj3udroRQYV1jVUuwvEijjFYD",
  "key6": "3EAtizPZo5hHJqdrrz2tBRWW46RayaBzvwHfswPuwBTnDYCPjfu8iY2VM49nmUT5JLBpfmUQAN78ZS9U3crhjg6r",
  "key7": "4ehckmPbkUyuVSvLspgRTbP473yahoShhde8LjeDx1BMkmeJyvt5sxwDMsXm6DdnnvjYvdVYGLTX6HvcBP6sHVnV",
  "key8": "2FkKBirUmJtuDxupfzWVLY8Q9bu6d7LVyGfeNgiSs8CRrYheA8zDTG9vUuL3tNGiJetDErY6goirLYkxv9V2Z3Tr",
  "key9": "3xduHrsXd3ePip9KWoaEmzP2pyNiTUg2GEpTVBrBTP8N24ZBLgXSWaXfGQxxXSoqCJmSxusaeNmywfBEhDz6QTkT",
  "key10": "PTxzACimFTSdi73Whmw4WWoq7FcxF5TTXE2n6nsGwt64uGrn6MTGAvnHrLQsSyhJPpPkXEox2PTskyfd3fSMTpN",
  "key11": "gov2qWiFGsZzyLsn4XjeVdbapG2HfZ2Dq4sFkXHF21tG5Ynqb4dFQfJSCbywJ8bRgJhWrcpSX7B4VG2bjasAq1z",
  "key12": "U5x12zaBDMyAZPR3mfAcWBVwcApfDdhy6h5PzYvphWibMYQyJ4TuiF4T6hedJfaV5pUGieX7c8nDgiKgPt1rMVM",
  "key13": "g5pZXHVta5JGWVqGpPgcKv9HnkUYqxk5wvsMiTAWkvQRN98eSA1PmfhJvvxbfqQC2dx8H28KzXyvdBhf3dY3t9m",
  "key14": "2xv5Yq9ZhRUJxBpR6yh7gDWHpWywFkFMngmakLWgssXXrvFL3UzuVv5iKt1nkdCYg2q2wVLQnfJFgNFcsqJwzZXq",
  "key15": "3KgVAAmJSRxb8xayHNwuBcBaQzsz4sgJQ2QLupY8FsimRi8MRSxsNvRUveTRCqG2gk2D8KTY2WKWrpwZNuJbbYxU",
  "key16": "3GqVvirQiS7F3zsmjConHMnTZqZPkpbSxyBQbnNiASgGVmCEWAv4RS16HSerhegMk98ieovwGqDqcRLNGfGtwWi9",
  "key17": "2YGhzmu5ZmFS14m8d2qPZdHb68WcxmxrgdYL2RZyhwqocnJXhBFRFZH4NtrKQkUTBMVCjBpUNEKrBizcWCqoXe24",
  "key18": "3Q8yrXgr3ZEid9cRKRQotaeanrXxEFLcRZKrgCeyKEhWi618d2LfPjM6HS7VxSYGDpZoTzaR38M7AaRdJG8KCUNS",
  "key19": "2wwQf6c6heXi6XALeijnSREnUU9u4xXEC9kXjkZcbiBQvyz4kcVcQBxCXUWK6mVHWeHZfj2sPWpejB5qmiyjb8w",
  "key20": "drFfbyFvXtHT6TopT5oxVAL9aaK29Tn3QBByyMzsYwUT2V9wzZMFWz4HtzQvYMeyZLri375ZnjfeGDdHq3vnqsn",
  "key21": "5x7e6S7cVPyHpJGkRYYKv6r164BQqZVsDHuWCtg3ZhaJ3C4VQ8q4f7FSu2X4dipkddtiy1UZVzt8P8G7wwhuME3H",
  "key22": "2gwKqsjWZoEqV4MyCkaEt2JKFmMqtqL75vxdMMg9R7MGLcYmF5ek84Z4azdy4BUBGJkNa8BDUkmrNwC4U9VAcJd9",
  "key23": "3jCcCCV8yn3b5CtiC3BVaTLQJ68L4g2V9322YYBrme6ComsRH9UhaiKasT5sThoxXhYfyty4BNThhV2YnsYyavYg",
  "key24": "3K9RD2kABHVXYHBrVcNcWQwKXHeoEnmQgztc9r5rypKMSkfBghY63BMJgdLySMMwS5UmmxSntWiCnGDhMWMNFzpK",
  "key25": "5NQwQ6zNjeq2TRfCPVVZEBAs3uKcJEGoLpJkjDPC3Deb4SVFgY74SMxEDT1xWqqVCHZNGzmiqTNCk9oj6WxbjwVh",
  "key26": "5kCD15CjptiD9rQYWtS5EkBStWjbxp7DbE5x8VvUKQkGASsmvgsdCcogTbePqDHtBjcRJKJPD1iBQbKK5Aa5UNSD",
  "key27": "ZLJ5cyeFq5XxZHMMRFok8G4E8cvXr5p63skcKoFW3tfgu9C2KLAdXuKtesXSXmek5NwE7JsJ948wpnDPb1SuZXg",
  "key28": "5uzNU9xni9iwUM1QkXFYo9GirfqsCnjFmy2cyfDAiBiZaYrcG5ioyxWceRgPbNEdgiopoFk26GbJgFtcsAfZ1wT3",
  "key29": "3c2b6fTh1V824goXAyBxXY4cgAzLbSK5iRTUELYBtjH5TAb9ycCtkNf61PrEsHVZFbwzwT2fXZV1ZdjX8N63kL4M",
  "key30": "3G9G8NToYTjmjnMcEZ7ZHM4KrmCv9CMkS1BREuJjbNZWa1FtKu3MdcQTY1Dv1A5JPvXdhNP8Dx9gs2SQb4SZoGDG",
  "key31": "5T4dc1ws5T9J5puJo12KTY8eNgcaVSaqNvERYS7RCXgBCaeYjBgrTDkDHgLtM5FipX34Hysko233QhhQEQSQYRGX",
  "key32": "5UhoYpSEMRU9MPKpur9PrQGcxTYhuPCkVNc4hFz5btwqaxo2zzUmUafEztnKJeMuH1xuJtCgfHFNmPVun4gnsWeC",
  "key33": "5aHjXt5iGQbtkeNabT5rQohmQjqw5rNMDou3hP8jsuVsDiFXXNcXnTcMcG2dZG9XphTBHMsAPkiudyyWGcFx4bnk",
  "key34": "3tX2uokjLPzansxSQ5dcFewPaqXLc8Kk8gBYc38tR6AHjQg6g6E9gdrarmKuCy64JuH1D1S4irzZdk9NMn7eDEF6",
  "key35": "3GotQ5T5TjpFj9A2jmW15i91MKfamAmPeckvDwUtcvFwNoRtMWvYDGSPxX9fFVWw9mDqc7SBZ23Mrms7GXEuPgfo",
  "key36": "2V9mT8wuSi5ctVMCUbjyn2joX8zbCEe1kJMBdp6rKJErixTtQBxipGzUa3zLU6JXQiNCRikiVbLWPWU74BmQuxgv"
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
