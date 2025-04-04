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
    "4gwqjjbEVt9qXC5GpBKyiXUPF25agqWJyhQ6r22BVZiqkJiG7PQPiC3buxpFEq1QDEunDBAWUGTrjBZGYP24t6Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fGikjVNXoWY9RddJ24d8ZftK6maPEmcqqfRZ18MVry6c7kqxTpR1ymdydLqhQgd9f1AvqYDURgywRijhPBsphi",
  "key1": "63293MYsAJ7jXmyG5ZwrwKWPUyrUj6d4h2rqQ13AP3Uq8g5rpSeRrcjNgCDApJRHPpkWXU6hdokt7SwUGce1wFNF",
  "key2": "4gjrXMgzNymFc6U7L4R6PGcoyq3C8Gp171Vu4xF1rKayk6UZd3RumZpdD1pV3rh2KZpZzcZG3resdABfV4hsBKSs",
  "key3": "cH7dTtBXqFqtt36rC2PjCQxXA38vDndvXKfp9S8q8Ue2kxASBybWeZKX1YVpSqKSBKBppBSZqhySSt2xXvitgkj",
  "key4": "2U3TqXmpMJyRWfq1Ks2bew9JyuAHyrnPC69gWjeKJBqYcqCRbz8xSa7HDCtJs4D5waXSWPR2dSgU55QXsStaXqpH",
  "key5": "XQTNMxvzvBkg5vPtnfUWreF1jtxDcigK8gt5Tgp1nG4cd1Vj5uyB6yvA5wp7amWXfNHW5cZbYEYFQZgUogQizeK",
  "key6": "41JeiUfKduUgT9aeeVofdEQCx4Kd8hvEvfosdRSrEHJNvneznpint7vRBx9B1wyhRfSbWYeSszr1UZotQufjH2Uh",
  "key7": "DEv96N6ZoYia6XFkixrWsKLjBCE2GhuULCGy7f6ZPF64kcJQBKi98WmhrwuBANdtRJ26LLaz2ZryddVt5o1DYwW",
  "key8": "5RiyqmL4R8k3NhU14LaZ9d7upYSkFgzfEHto43SftiaMYHx8PKPiPDj7N19hvQAhxBZobyV6qEdhBEccC7hrVpzn",
  "key9": "5YBSkuEBQ8bztbc1DzXkUgpd3WFeed71QxqXM57WqgBvn8Y4PGtSis17jUnuscXGBsV3vJZN7yernRpN4WWMu9nK",
  "key10": "HUkc2AJBGxZ2ygHD6SeU1ajFZbBCA8VqEWYyu2f3bdfX7E6TdzFTqPLP7bvAkUZBYKQAb4XCFjfFBa4v8V4Qwh2",
  "key11": "3t5PS3WDWuGC2TUkHEm37zj1dCU2NkB6PrsEWxh2kdHEJVC56Ka3iyewYzdKLUunYjHSN5osZvdfSjDjkRwbHsc7",
  "key12": "3JPQGCwTW4vR11SMpZQMCVsd8BUN5dfHZxbSEjpA9rFqdCUrxF2WYaW5Cgxv5CYAfXCbsKeHejvhRydZWcrQ6GRC",
  "key13": "tJfM5L7NrEKsif89NWvu6MKPsYmJvhAeBSF6rvm9KbbXifWLUVTVSLNBubMYmXDH3tVCMDstqQPr2Qa1VgychXg",
  "key14": "53WthrBDx5nJ8Rw3A7V79HSukuRN5dF32Dmk6cBdBRGr1V6nHb6jwWpS8K94F7MDJSay8jmrCvZFbLAHP9MP5NxV",
  "key15": "5FX6z6wnzuwWYibsmyqhQp4J9jcGefGPaGzJktDUqPjeGNsaNdUDYvs58DXbfx895aXwTLKacDPHttc6nJriFFZb",
  "key16": "25AZEAxHWNyBGskbUzMALzWL5YtfsKkxkgSvFeJ9gySYxDHtuXV1z27TSH5Y1rQRVRYufwDS5TXhtXJotnB5uWqa",
  "key17": "5vPWs43mQSHwoM1WZx3UagTUaqB9yCN1Sn4a7A24XqwmRKZYJxMp2cMj2HYjBHREWBtejXieTvZPbqvoUX5Tex6k",
  "key18": "4Jynr5z2kCnWT5kUYDryJjtiXfDUWr912j6kgoRR9h9eg2FWeWtm2tnuo3Tu27cqw6uvDXoLjdfc27rqrPSkKs2q",
  "key19": "53NtxrKiyjvZajJAi1g5rpD4AFPwc2J65fzBuwqHRmHv55gaN7DAwYEaGk9mVXJPWnsUS9A7Uzpb5t82hMzve1TK",
  "key20": "A4uz1sxqnPKPYE2bFcnPF5DrUTgvu9Px8UCvFPpmUgSVHzLwUrhCEjmTj52HUn8xQCkau2cG6BUJ77gp983L7Yk",
  "key21": "jadk6rwaB4vVyysgYDpBLWAzp6C1PjKnVNoyiMPub7T99fkZ5dFUumiSH1hx6oYijuttCHYjQz6mFvRfhAd5jbi",
  "key22": "334gZ8YjQZ8zJbE8mAbbbgm9o4TBrGy2TjASaz5B7bzvqDtabocNKr2pPSc9ugSxmMGQVvFBsxArtEeYdfbVR3BZ",
  "key23": "28RXHUsvdHN9iaxCcfSkfxEYSKZ6eX1K5MxmSn5zCfWTNvYwEX6d1z9XNFc158EoChC3kz9UpaYYKAkBWJ1bAsGc",
  "key24": "5M8ci1EFQEN84g3BKdKX8g6yS5juWp636t6yVETDkXojDsySotTsfyMAvJRoPAuVUgKQpTjeNqf32QUTfTTiZvep",
  "key25": "2BbYRUFd6wrHa3uNjuG2iamNLwFAhVc4GAcy3QxNRprG6Gho4LFoXTZxFL8pGUpQG9BPnjCKNsBTdVkpWFfAcpBS",
  "key26": "27aLy5jqPQ1CKs2YNB4ZP9Ux9bHyLa2Uu3XgXGMu65sTj8u93wsp88f8H3QbHccuMkhehnrPZjaAHyLBzSiRiV7c",
  "key27": "4grMP1y4qr6XbpP8Y5iJprVSxhfXaKRNWabAqQDJNDzSabusuY428ETuVN2eevwquC9vPayXcgA8f1KpajJf65Yc",
  "key28": "36wdu187jUM5GW5GNF1tndob8rdf1B5sKDBwUhRQ8KSz6nNs1CtB1vCCYwg4gVBQmQELJnRJU9ggxNGXU2435u2x",
  "key29": "583iqR871Eh3n4uBMiaajJVRpuXwFpGcEZF6ZB4knqUxf3vZBdeJpkvV8qsW4bhdhSZjDww7DvQK5zWFWDpsiGLC",
  "key30": "4oL6MiK3s1X8VtET1Kz169vm2DYRdqz73Wxkdnd7ugyXhQHwDwCqvB4RE6dXa9ysHi5A35uh3qbTEFNxjxWAX4Tk",
  "key31": "2owtSATVpwdFfuNZNm3V5SUDwQB5yRYsyfFxRQHdsPqZVhMizeTbRuRAaAry6tYMKGWspsAV8xYD8e2PJgASQY9m",
  "key32": "uLdRzbLux3iMYRXhFUf3anKL3MVezXgysZVDY2TXzKtof322n7ckMS7eAkM4q1fg6NHHiSQATprzKJM3kCuKZq9",
  "key33": "392CsyECrRVXAt7G3YCRf2t15SpYbYZfJxN7pF7XfNXQUzWjrSbfzWHCXxnF75cYn6NbaG3gxZB8L2ANZbEfrSKR",
  "key34": "3W6qCHisVhaZwFds5sGFyXAh5P2ip2YxCcTBzUMKEHweyvxBk8MsjFZMCwJCCVNXsn4MvHcrLDadbC5XYgDCuqML",
  "key35": "3HG4UP2XkJemosXUG4onYtzHetaPXQ6fZGzZBm2R2BGnTLH2bESfCuQsBDv51yJDN3V4V6RBUd1xDFX376ezoP7Q",
  "key36": "3CtgFdDtWRYcntNWf2KRhP2zKhjon8HS9cHPqxMJWB4FG27MgwNwMzGuKeG8RKnS1YqZz9sL7ML6qfQ1LEvsUFuY",
  "key37": "4ZXqkb3bduSMRRRMWj7bFvygC9pwgxATrq1Kn5MJndCQ3pf3HQQirhqgY4vBt4XH8jXE7yJzvnf3L2zJsu9WszSe"
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
