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
    "1dj4QZDYNyEVkCKJNsjGELqgLN7kAfPvjXDByCLF2p5dewV1sAr4N7hfuKT6hJSHLAcobns9UGpppgsw9LsDVCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYWrVVAzZoK1GNqFuunuc2RcnFdhfGb1fATetQYd9kRMiNCjJ68bFv3uzUzPpNQnMHS2HQz9X4xrUVwJ2aaC7RA",
  "key1": "21ztim3U1yRRcfaAH9WK2eoPyoUaghnaGYCaUwW7UyY2kUYnzNrT8xPLs1BQGD2darznt1chuPuJX99DYjkaPWaF",
  "key2": "4TJb9afGWqEw2w8atfTXG3JDLaEokqgKUsBvk354bbNuXXAj7RNDmR8ERd3HmGHb7TRYGyj9kVgcYzBUV22UCsx",
  "key3": "X9hXFw2x2xYfYasPfJUsGqgpCRhwzTRqKMcpwP6M7GTdfHMwsy3LSHra1Bu6tRHeYPgh9YDT59SUahgYzE3rf8d",
  "key4": "bxHgGv5suzBkPYvi1WWe4bTaoKCf7KZ9BqgucEUWztaY31TzsZ68zmATqzG3HmzzqLR6faqhnvYSaVP1SSwWhoz",
  "key5": "55cuDUEjmg9A4nrKTbJf1yuhotpWxeVp3scna5eUPvvabMMkAcUwciZkoqoDpdzzDijebY3s3HwT4FZai53itpiK",
  "key6": "2rEoU2aCVfmVorC8WwC9nJXxaT2YFRyjYf6wu8BLJeFzUACBkJsvxDohfCb8Ev7EzsxRZtV48i9CGa6D5Hm85Sqj",
  "key7": "3XN1ZZCjm2iRDkNbwzSRabLSuYhBQxYLXc4LXscRCj3RsFZwyWkCcpgjmheTzQ6UQHquqwMsQsywuCJHbri9AZkY",
  "key8": "2GPBx4v9BMzYq8gaQwNxr8Q314YbUjD7R3UBzGQFJHQC1KxkKPS6oQURQcteQH88R9vfgugz4LHkhFR7mamYbnw2",
  "key9": "5w57nV9yFgxnhF4S6U538FhWoXsdwUfDC7a2UBXFEDdULQUxyzHeznjpAHzWY5eX9wxzQiAUHafcp3iA2nyCHtyQ",
  "key10": "2DbAyRti6biFQdyJDPxUzCQvL1gQ1c1gBxSDyd5X2t8jrEtdWPnVc3QczKhYt582uhnZmWMdeT96GRuQKBM2pawz",
  "key11": "5gB7ZJ4nt7CvwtPpbt545qui1ygHLdi6YgXdUXhviTJRiW7L5SKsuoxg1iJqhKUzz38LCb7hnTySBPN6k8Vq259o",
  "key12": "Vz4qUabnVZgTzeFfdd7So3Th7i17FjWkpYRbdAuCuyvF3zfBnwpKz6zg1pGpVkxMdNQx53FCwk8UiiCajxuXibj",
  "key13": "ppECtGmjQ7AdWThFR3USruXETDGyWHGoxEd1aZSHWLWCji8TeHrEiRDA66V7QXx26X91cJPa2mTctwQYNAx9HGN",
  "key14": "4D4L5k4yAy5pffGS8z4LCgHYfSwii1g2FjvGaVVN6VRcP8HjVCAD3EiiWoe9r8gbuUHibUyNVzb5qPSH153cG3ew",
  "key15": "5HYfZQ4vQjYvzKauaDu6ZdHzKE2fCh5cJEAJ8Bdhg7amRfcoZhjKTxoEYeorafkkUUMLmeu4zCiRt3HsKWHu8xBh",
  "key16": "4HE4BuTqp2b1FbyLk5F4BDVsXxj3CuMpQ2DMtnFMqjZhSRk956XJd6fgMB7okT8TfUCnboErrPY6cWtZ2nLA7pSB",
  "key17": "XyRwxpd4b6dsZtjjzYzFwENB5LGRZf3n8cDwdq9SmBsHVXtA4tLs9xZyXrCrRGHoGK5nkUP9d2HFHq1wsW1ZUe8",
  "key18": "5kXQo1pthvaCwM4s9KVrSJHUhaP4AzT8mbUgoh5oNcLC2fAYKGMsPzZ3nPCHmVgvMQzBhSBUkBfpMvkxnobnatY3",
  "key19": "2q4TEPsm4ds5KEYwya6MQKpcsPSkTjcgctCmHN5KMTX5x8YAQR2itZYLUexnZJSrDzYivxXccRr4FAFGCP5VJZEz",
  "key20": "3RLedqcTtUmRCvh5Rkkxh7A9fis7TMmUzJz2qnu8GPw5xcKSpKoxHKfVMo9kqvPcDYyZbsGsxsx9htXK3T1ErKmG",
  "key21": "29T3PLxL3cT7MG9CPFJMqFeQr2eEn2MFHEHkm4MFRyuPpSdwVunYAK9ggj7nW1kJwdWGYu8Rbe6wnMNU7w46CYw2",
  "key22": "2F1rgSqeR1hMgNA23q6ir51hKfwRaZvT4ZTa5B6reanVFPyMLm2niR7kcuufdhhty7XXuWcQmuY8ocAU8v2S9jha",
  "key23": "2c5YjgpZsYjQpdGeqASPzv6j5vq4r6Uk7ptyHkavZS4GhkzHWzAHbiPyiCexmvcniCqKGN7DrLWvN8oWiY2pw1mp",
  "key24": "59cXTnRzhqCEWStqSwFGMRkjFUFqR6o59rFDYgS7fzQ3PWnhuDMrTLe6XxtcZTHcxTrkRoTQzggBqdpnnG8naKoN",
  "key25": "52ngZPwHvG4xXiB6fMQR7WFiZCvtDr1fPbf5dfqeEB5F7bbPGvpLmTyo8xhgg2WZwpLKCVtWSTFbPX7cVm7wt5X",
  "key26": "4VBTah5vbB2jSqyt5pPE3enB7N4jfMAtt8z6JXNd9iGN5UvpgnNbz8v3bPjZQL1fNP97ARaUsa22HqFine1obFDB",
  "key27": "2gm7T3eoBb54EZ9wBAwdPZLwj9xsQPVh1m1grESdHGCvN7tFvYh6igss4ugwr73F8NyijGupYfhRRekMZXGW9vK",
  "key28": "34GksUUE1KJzPML94esKiw8viFt2FnL5PgaZyhBvGnY5CZtsHfcMWJxEhH9KknbkhdwkeaQHXvJh5YbvD4G9XcUd",
  "key29": "5Kf2X9qMkfqLkFnQpmTaSZXes7WSHqjLVB62AVdC541hyqMMrqBDHQVzYzB9BqtKL9Rm9YSjCm8NHZoebKuD9Y6n",
  "key30": "5CDtnAFhjyCdJzVqk7t8auxBm3AUH8yLuhusojuSQbQorXCDHTnkePgHwNbu6L2pAdfpWhmzaSknwSqkiM5DR7nB",
  "key31": "32jz9ng2P4WjsDdB82Nj9D3xVT7LjPwcmY4ZZqVkwpiVXPE45WRQSeUzvVtRfk8ejEJuWaAAYKnFonw2ir9zoxwt",
  "key32": "5PubCrgqxBgiGJq8bhvsvH84E1gigtEwms4LxBBE4DNzezgw5AqnvVaNdpUHht46p1e1dubwNksGyfpTbjHcLYFi",
  "key33": "33w2fya2oDZHuSahdXYUwvF2ru5b5KcqaDssWdmV4X7tuLx4Rp6BWV4iwiZsuPyQrWPctBpBJybBDwNMCF49jEWQ",
  "key34": "4sas2EXc5NqKQ9rHwEpRSYFVyxTKeD8vfFNDi6Hhcr9GBAcuUGhur1ah5hmvPMffJhUUmqumJxuFcPbnBrepZu9X",
  "key35": "27fYtuXTKcFLse7Wk2Y2wEk4y9aJKMPz1qovs2hEuG5d6S9DuBTizE4kmfmaEFK8DqSNpdoad5X9w9qQuWn2VPk8",
  "key36": "4khEZdAvGV6GDSrgVcAVVDLAvy9RvKrYJxikdcw6K3GypzNMfBn3ZW4sftR3brAjq77FbMmrYXRmXG1RbC8jwwtd",
  "key37": "5aTBRff9a4wbi5rzesnmPBXcUty8vMdK9JRNrr2aBd1h3C4JsZc7YzerAzqVkQfemxdAHA1YBeqz5JsbAtecTNbc",
  "key38": "2Vhq6p9xhbbm2WTDXDeLSN1EuL9sRozbRAFmR6ydSSGwrD6kvpzmcKaHqRERC7NHuEjtgPysfeSdshmkXCyzZZ1e",
  "key39": "36oHef2hWu2D8epZcsEDP6SvAKHUu3FvxGVLrxP8jypCJgmkXpsp5JnCDMVeg2nDgA1eUMwF2B9Yon1q622oAe2P",
  "key40": "4Xo51eTKvZPaf1f66mupRwuNvmnw9Ap3C4vmj4TYsnfBTxceET7CTEsuRRQd8Eu2j5hoodoHE2hHRqsEKZZ3VTPn"
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
