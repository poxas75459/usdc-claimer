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
    "5QJcKZuafHPg683pKWBLvxRMPJL5HTJUJnshn8FEHU1nxERqfgxpU9YfY8kwikY9a4WXHoTi86HbagqDSWt9RpGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTGBGNoT5BwTmDBWwqR18otKW1pJtvrRZyEommAAJqudUNWMHNCurrECBonmqzPSP3z52HXMMc6P6FRP9hHpjxC",
  "key1": "AkJu7bczwFuoTKGiwkNJG2iMcqeodf59gszV7LG8Go3dfGDaiTCQqR9NwcfwrQRLTrCVtUpmQbrpMnumHLZwbkP",
  "key2": "ChGFaeqaA27rheLHyn289wWZZvpA1eDFyP78BPJ8SJw5qxhu6ybcaPAxRZNk5BFGNmG1hgSLZnYWKGAbxHnYNW2",
  "key3": "55KhZVAvrk2znGhdZH28q8DKKmGitQdQcQ7WPGmWqCZicCH4jeCMdj6Pq4GtgQRjGj81Lf9in5g9nSRAmP5mVf4t",
  "key4": "25CspnkzxnAmDbAGNf66onQDZi7SzNsoxQ5pP3G64wLpFX1H9eWiRCJwPqePdsPkPLW5BQM5tWor2WPkhnqEita1",
  "key5": "5e2tAJ8iwmptKsMH51P471gepWvpU1unWeGjZVsR3kpeo8Yc5RK9kjtSxzTTErunSnko9y1EPkYzUNCwrURaDafg",
  "key6": "2jJkaMt49F98kNB51HkwwebQBYmnhVDqeDZ1Xm2NXdfM4phd5XcnSfyvnizLdwwV9LMb3y4ENCr7qR49phrcehf1",
  "key7": "2JChTGiPeZNUEv2ooryMo9PKTHceCdNWKvkRLYMjMkusr5QuARpzTXBcY6FUYGXtB16G1fpN97J6wrFP44EXTVgR",
  "key8": "xq8NgHuQC59o3PvWLBS6bwkx1kgSsXVVEmVGb5pMH2L8xgZHLTKmD13vu5r2Nu8ZX5q3n4WrrdV1QTHhgPL9tKY",
  "key9": "53b192mPD4LynWSq3ELj4i9KsPFs1hR7gBosKyTtKiCCMtZr7je396hvYNoCUjyEdmz3PNh8CVBPAYmypxWYYPSg",
  "key10": "4D7CtrZyXjV4JgQhqGpv7Ceb5M1bGUg7r5gDUujntuEqkdGu9RzwduANHbUttkLkpWfEphE2kvaYLvXJ993Gbj5s",
  "key11": "2rFzYSryAwVPEzs3etBibXuRYdzWsYhEp1ZCFMRCiAj87BhfZ3Tedez7MM3HksJcFwioCgJRkC9uFKCjzw5375fd",
  "key12": "5xCGpMyqk1oBz4JsvjnaAF2PDiSf1dZY8TQBCLSnqez66cTorGJtXn2tY5SrDvjSjXssmqAaZiasRNeRK4TQrtmk",
  "key13": "3Cg9FjAUY22NvdABiLysCr1tTq2kC6VHqWskv6P95NxiqT45gFK89M1s7chBgoKFwppC4JX8aa6rwboq1mLn5TbY",
  "key14": "rrvnA6kayoVqdXAgjqMAewcJsFkKKLphoP6fVhr7Jjm3eH5gzbGfAEvVS3KMJbtsUayCuEFWGL6Z4SQwNAGjqFK",
  "key15": "3hQM7RiJsZfSTTHCtt7RzhpkUWDcWpa9iRT4hJCDKEVa8EEyt7sBcnfWH8y8bmzRmjb9JExatGU75JHP5CZXWi1o",
  "key16": "4jDdhDYRkvry48yd4zHjqatFSRHDzwX3tS4DNYMuEyCDa4FeUhq3szmCjxdvbYqBWUQH4GnMoSkWEUPggqsE3Lcb",
  "key17": "2wstSk8ziiCi9vnpKghAGeP1JzfuBVXamSFr16GKTa5BLHtEkmwRzJTv69tSjacZ2cA5eq46rFXveeWHcSLqMbo2",
  "key18": "2g1Pmc82zyUstWAujVMwihjdwdFEsNfrEonBWKjbUw8U5xBZXadWHncEC7HCdZA4k4bWv5dTRks3h3rEkVF6d5v3",
  "key19": "3rzp6GA22EYJv893Y9YheySEBH7UuYHstcoQqdCDkF65GUrpdMANfqy21hA5tjKT95gWzwJTpqqCBmVbZFXuLWQA",
  "key20": "5RVf5jXEupibqwhbs5SrQF2f1JzZcKjDTLT6ATKapwtRefTpTk8CDipHS2g6mkML7ye8N8xYhDnGwX9i5aj4YzAt",
  "key21": "QANW5pJUSgZqnXdpjbe73w3ehsaR6YHUL9Bdjc6G4SQVfAATyZHnGBLEx6W3Rq96rUqvJC8bmyBpUd2DqmdTwim",
  "key22": "UYbxcgvuYFiNj2TpQ5LT8yJ6Ke32pWNJbhT75yGgBNu9DGhSn7UYjtxRU8qYtcUucegqYViSMvZTeF98x33MX48",
  "key23": "5ZTDKNXgZ5h2uR9soVHWpjjQEJ34YzZcyg4N7Vhz42n1sdRF3HwLTG6YC3WjoYxfKYE89ymimu9DbW6nRu1NwjGV",
  "key24": "JN4kvFcRZxskDBwNK2cxNyhsQL1wzNLzBsNP1AhuLZBDiqrUK4x6UVskBS6PTKrkAdTcw3J6R8ebFJXB8E32MbY",
  "key25": "2HUSbEpPyVKYyqb5Kphkja9uvAe8CkdhBLyCgSVmVWMWXq74fq13yNfWo7658hApsNx2vB9tpf7rMgM7EDoMHfZu"
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
