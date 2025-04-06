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
    "2cPtDefD7Jnpr6aXTB3nUoPaapDa1QGDgrE8ubTgorR5ppHirh1zz52vfxoxB1AyaqS4za7jFLHKkL2gNmhbmoMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBK5gPK6qKkP5kJzeJYCEjzDa3UqyCjULAMX3FtSYKUtqEUZL3po64yFYY8sh8udzanfpvZdopTLWSzRxUzWc8h",
  "key1": "3SaZ4127tJxTU3DyLruK97hb8RbGbbcmtsY7NqvKHywKk3LXzLBd3f2g3UBZuk6iLvZ8jvvpK9f7QL8UYrGYPnZF",
  "key2": "4Tt3nDMKpp9Hd37AphHpg5Vn6eKL5FPmZyqgX6oFgALQncRh8ntdHeCkqsfBYB3cDJxQiKwUKBQSsorYGLhqkMhm",
  "key3": "3hXXTPc8rnSE4Njr9suWwiSzPNxb8LhNMGHuZXXqQQezZeootkk1Z3wr5aaqrU2kiSkLBQTmBdSLrjFrP9qha2VF",
  "key4": "56CcCTmFFQxfLGMCzgUb6hPSXQUWCRma6zxranvaSQihcCVnxxsTWNmpnj2SAKWJZvgPtp4Ph4KEet4ZAe45muFu",
  "key5": "5okKFDRmXHyKPJDqvHfXwbE6ezYWiHqqevEGiQ2YScit8LCBuZfV2A5sDpSh9NpCPUMSNyHQUJ9h91wyz5KsMdVz",
  "key6": "3Tn3q57zBVfUftUemZ2TWpaRbTEe6QzjwBHjyZJFdiQypYgxGWHkM1rpUSccooZCDtLNfYwPYP8cb3WtB3oVcaQq",
  "key7": "2SK2x8k6k5PPAtw6btGEDHosP9BtiwiwQ5AitZkjvMuv28eEoXvAbPukzLrds3LhwYkgKAeTz9tjdSomRLKXym2K",
  "key8": "2dRfExwZLjDfab8VFzcG9bW4qaVVSvZuK41fndJCD9pszbS5zQZ9C4QjQiKYkEqxJTUVKJxY5eeW8dLLk4P5nTzf",
  "key9": "5ZyvFE16NkSFRiXMfJo1b1TTvKYtkMg3uagATqLPbmzv5XXPE49CzEFK7BnqpFT1rso4zzPzy1CnTPThyDkFBV8A",
  "key10": "2tZ9JuEntG9KRfnByVq67ySka1iSsbpXqr4dgNoBWQXWMRqyn7wkLnJBdfWFFhYyoqLmHLnnNALrfs7PGdwZh3vS",
  "key11": "4kVxJqiPha5kZxDvEwftmqYAFTSewc8bePGxMjRUiyTSB5ypTjuYiGAotu8ijkTDQZQ8VRhi9dw3W8DhLkfyRdXs",
  "key12": "FAxxhfywBTBwWB6VMVLcX4NaMbUvieW91arKFCpDr71ZaEfhaHiuK2VuXmBY5YWXSDWaFmNwBARDB5y63xG7skb",
  "key13": "6UcgVsqYr7DJ1coNSKTu23sAdgcyPK7T5gVXYaqVnsZoKkkuXVg4dsv6UmpXM3aMdg6KLTTY7tPjcPfE28D8LFt",
  "key14": "4zX64R1qvJV7aQEqH8x6jxNGJLJ4C5UQhpb5buKTKFSte1hvzCRkxxt6pvmyE1pmpvL7AC9asHS9X1h9ufArga7M",
  "key15": "2eDfpYt85SbXu6jtvGxj46Tqm3tuqQzHzwkMgainDrKo5MaQXZS8nEQvphzKnKF6n3ukNwPVQaU9kGZ1PVM1NMi3",
  "key16": "2hggYS5ziDRFB2UnCGPNC4AgJf9osFYrp6PuZ1aVCnhq9YLKJ2MnZ7JgPSgoqK3fS6wnH947hJmBSt5ah9NtUczW",
  "key17": "2FVGnRGHikHjPZYL7kqBySipL77yNXXfaJYU33E31c5Ki3cj3vDjJQFgBphFfT7kPoeJs3Mr99jFwZADAkBntskE",
  "key18": "f6WqoHN1frQA5X1cuJfGpzvXQoDiVbw6JUZCSUfiGH3LTx6dAPdX15xG96BYJFHe4TXRhMFR6t14sVNHSqBd2XK",
  "key19": "21e6nYJPXBeC9MmUJLeemiie8LVVeBpMwX48JTzJnBNnghQh1nAm6kg67YdEAb6F5xH6UDN7uEwPArG3ceMTjXKG",
  "key20": "U32GfPZAv3yA79WCua7U4AQHdEKMRNX5c591VZpJNNJXf76KL839aJsBfW4iVcN7RnAiLNGHPhdSDpeW8oBBGXS",
  "key21": "3Y5Hkv6uABRvy853tbM8PdoiXMTX2tUt3E8EduYRA7U6YYEdJC8xTdTc7kKEZpT1f7wsfAGwgrFVXt4PdVCiRYdd",
  "key22": "3hiYsyQPKTyy8Cm1YV9VH4DeRWbyETcnHCqjViTAvHUr4RPXoCfQq94h7NKsejbPrjq7yFsksZGunt3geGpt1mVV",
  "key23": "5yp9GwEHHQ2RqT6FMcJFH9d6aBUb7nJdzqgRmbBMxfu77CWhcpPW5UQTZxPgR6rop9EKAGygU1TCJChn5eoWeFbG",
  "key24": "CQ86B8HJtQgFXvRr7Vfqx3xUoSwgv3efKsJG5X48FR5Fu2DXewYsTrJiEriWj6TPnHDGoifHS49Tw5sAVjxzNZc",
  "key25": "43kFK3h4BXDWYKaje7BHXovBzPUrJoPawuSGqu5WFSdbZXmhZ4PmaCB2d2gueb5qGHeq8YcDM11xpJGC23THP36U",
  "key26": "39H5w26hvsdNLjJz4GutfqjSHBUyh8LgvjGmhoZeG2Rji1Hfqdma7ouetTx8x7W4VrzCcKpwN2U96UETPGdWoD1",
  "key27": "3Y4QiJAfNr9erWs6Bc27cABsgiynibzHASY5znmSeY3df8Eb6d7MmTY5EkA8BpjFXjFBDQVZkP12tsobqepysvYW",
  "key28": "uGUqUrQeQJ1NSoUY5nBYpPtGd1bFbAmdibwyLK3NtZByBaxS1suLTfDqs4VUQCCT1uB3spRuBFE1oDVRyg7BDgL",
  "key29": "5pM5vjFtQvVb1j7YVmHnQNh7TfSUTQ2TH3Js9f6ftr4E5USyfJYenSqd34E7mFpWMwWXtvNP9xYEjLUNJnvjYZfs",
  "key30": "2eyrewBLwSwqrhPnv5H7eJ3v2dJTXbVbbXpqErnK3A6CRzug6sxDWtovp51pYwQYkXYJVAYHhwpbHC6pCc7woDmw",
  "key31": "5bdxHvix5GMdAcJWcmajwDMjVjr9PLBbAxgi1nUnPX5R5dsV56c8EYRTj7F9YANSdAgkuzDEnUDCMSatxAwYevFw",
  "key32": "5mfYZasnxsQTdC8QfTpZYrTEqii6Yv5NcHwAW4tDmGz5wdkJzu6skUyNBczToLTRC6hu2PHjdmJSNcYiPJjWanCa",
  "key33": "5AAhjLXzE8M4ogAsBhX3ks3FgBPBwvLvGS4xpnC2FnVSuNADPoTDcJ1z1nWrPZJtduzhrypjdCanjg51apWRy54V",
  "key34": "3XWhrrMxBEC3rZfHnFLqetSW34tGx3kF4MF8vweRCRSGwpquxV5R6wVVHme3iDWTeLeJbhZgf9DEm9cHCukmLsZr",
  "key35": "5LDjCm4WberP5yyCTGeqocfoSvAxMeexgpYTHWLiC7P6bEKNnioeUe9mXUB5oeXHa6KPxwCqwW78u1ux6TuWk27",
  "key36": "4ZS6DBVshjTWiTrEtMadFMTfb759mA8kYmtY2EiQeGuwTD57PTHfuY3AVcMaBWFFF6BT5wDg3BAiMeZUhUGGZK9Y",
  "key37": "5HkRRbURrek22bA6CVqPTVuMWLksErbCyPrho1HtZqb5U7kZS7ECNqaEX1ZqmPggECiymkD3Dcn7gb6vrK5g4XjN",
  "key38": "3hZ2AMsYAv6VpSu9U3ELCcArSjXpZ1JrQy5UFg2g2h6QHdQzeZKKTFbnkqJPFdcqZCwsGuD5HyKkfxhxNV3rFY1T",
  "key39": "3J3ejEWCpUCAw7a8d3ZYCcdLhP7y8LAVgagVcxVNxD2VeJX3STRfXysTSbDyxDqbaZ6SYH1JgY7qrSV9P4qo5z7Z",
  "key40": "5AzjM7EoKGFwZVSMPrLcyGHWWvYycDbd7LQjJjRRUc5137f3eg3XaZYje3s5rzNGRQMKfVx7RQWVmDjxT42Pi1bn",
  "key41": "2KLY3r6WquBQ6DNzaJdNrJV6grNaBeGP5XwFmUC4PUcVEeUnQ9ebBrGR2riUvFKprUrT57u21PGn4LBKQByP42eR",
  "key42": "mBDgkkPaZJo3AXTpuSoatWJAi2CGhuocj61KabZvwG18LBE1jZXaRhKQfsDUzP92kxdJ1nQyfq9c5ka3SiXWM6L",
  "key43": "3GDERv2JjU5RL2AFyovwGiBMpX91hYFa4mFgGP6Z22tMkUYmbAWdj1BX2ki5jN3WScLqKrimsM8zPEukpRAPtuKp",
  "key44": "5wSNWJPPGwMXwPez9zuF4m6BfFz4eVnqJC2UoUriXtBBoxkSvp57qQE4T4o3epUAFMCesKABW89Z72WzfGreUeEW",
  "key45": "24LBptrk4cGkJnbLcXSP1FMb6tuydjaGik7Nws9eZCj6r91bfFkBd2pE6q9iuC7dSy2LxfFnuDmBzHiNcndZ4fkV",
  "key46": "5KdBK1rWdcV4BkMx5SWYLjMURe6WVd9Ph3XWc7ACsr4GJu7o1pMw1hqZCDt7CtzpiLLyrrQxYJdtqn8KP8ZydJK1"
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
