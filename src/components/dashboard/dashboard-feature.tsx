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
    "4EEiqMGZM1wxYWWRQ26EpR5yqHJT4gLZv3uhFGqWLa8wnn85QVJ77Q96gt7wQmmP9ciUVf3Zmw4p4okAz2pFNsxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiDN4TcvHfTAjYtAbcCpjktAUNwGApmqBQTCNBPeWJowfDZEPefDxn7eupuy2H1fkphBDdV5isBYQcFjv67bkEb",
  "key1": "3Pizy6Zn2SnzPrq5Fqe2BXZwo8JVAhh7QAmNusHbBKSMCnXYj5T2BehqMw7Xd724KeYmWjGPJ1B51imMGvXL8BUB",
  "key2": "4irAyKuWxwHSCLdD8vxs6FQVicwe6uQj62ZJtatopLmGUTHgfNeehG2FGTXVWauChPhStEWYPHhcKQB1BXgGhu3G",
  "key3": "6HDrYaZjYSXDxEXnxUsRuprKSnfvG22snG73jduuZEqAyKrR4hYFTdofi3qqbe3T79TA7kgEYm2VAM2PUnsfv1m",
  "key4": "2ekNyiERqkntoNTnbpZDMwKZMqZLoVoCTCXdPLgRtGDn57A4QSAv5EJ6vALm1GaaFDFgftJtTCbi2WvgRpF1vfmC",
  "key5": "4iFpVC9F8VP7dCPJD3Ck11L4A6my8hhnqEyDG22s8QC2ocxvGTbSoaF3eD1R5HLLpg5byD9qTeCmZW7i6o6G1XJe",
  "key6": "4k35iCfV9sSRXnUaeBy2eZ6YaPwrYNLafEhjzzEH9qNUpNSbWYWyhXEndn4G8dAHrHgSg1wEsadTUAuJDcGLadf9",
  "key7": "2FPZuGjGvcP64XanRHJdPt9QdrBKpgi3cHyHQykTPuKHgML7WJfZFWysvr3wrGaeXqWiZw1YtcSgo2ePokF3bKsL",
  "key8": "a9KCVD6nkL2xQA3o4MesPQXqyEdfHcckBHD1nS5fM8Tv2bBNKE4dnQyVRLnq6qkrvTxMwaRK5YkqF5QEjanvYaR",
  "key9": "5fdBfyZ8VKPvGwLKqMFxkq8cbaXeucZmj2H2kECcQZnbm8pbCaXr7QNKSqozvbXkQgaTsn3FNsoVzecisqo8tcJB",
  "key10": "3ASMkD3DnF82gpTNQkcDjvJfoHimXgVi4WimoU9Kv76JPu53D25r95CUZTF4xk53qh8mR9x817di8ag3g5fFt8cB",
  "key11": "2GWvSBpv5rmAEnHaLFfg5gC8AGStdjgNJ3i4cePkgk2NHzHzVvm4mPAxsmiYENwWsHPkB8SFUVgodhHWHkY1gaPo",
  "key12": "2ZrZyYn6J7aisejWpv23VgWSztfyUf5jXLhHjCJAD1PMrbsEHjDHTZf4n14uqNKxW491rxh1riwnCj6eYLEG3Qm2",
  "key13": "3n2ggQMZftgLHn8W1TodcA5NC8MUwNQoah5KGSNCveRnL5bTxQ8xpXvs8xmQq6BeHochEAq9HwdACf9MFCWLWxXG",
  "key14": "3Jf5J4bxR8ToRk9QSKACVLjoPb6vXn8wGb8JLeLUMZekEupsa9cM7LY5d6Sjrkpin68KZYBV2AHQLAazNwY2nxuz",
  "key15": "3P44DTtVxqc7fTkiPkxx7jncqkkffDk2NLSPkLZYedCAik4ynCEisUfiZoGqLbv4cTodRNAy7vYRaDjekLCnBSgC",
  "key16": "FJAFgywuxTUxMu4srdBwz1Z6EBtvu6nShmBjWX1h5HAzGFir2VNti9BFPUzVuu32si8beF56CaP4AqMrjDBSPBc",
  "key17": "5xP6RqbGebJs8Y6KizRZRKmkGfoQm5CbLWiTDgHRqypp4iqJtEJFnV2VvNGvixrwi2q9kqEMwWiyZQqaCKLgpF2t",
  "key18": "4UbQUASZnAd7ajWRZtwCTo3FwWyaaha84mdcztduqpKb4xUhZn8rwwzR7mDNvgerXUFU2C4ty7aUvBFnyJRGusHP",
  "key19": "5GSAkpbFsJtK3YhG15Mmn24V5ieEHsNuUqdX2Wxp66s5jx9sqNaGbNtwGK4pyJDuHwMTSAYJL8j33ugx8UY69DMu",
  "key20": "5MBkN5PqpiVDxGvr18D9fH291RjafZe5oABuvJmLDtMKGF3djpDC3jRx6Q6EUQuNXr9aDzj7pT2zrod2d8PFy8om",
  "key21": "4PayRCrg2ZCrosCK3ju6u31BrRtAw2zrdNpKE6Wkabdft5PYLUyUH22sHyUjngj26hPSwYcFEqKhDduLGRUGNuhH",
  "key22": "Atf8WGkUo1kCorvLeFCoHvjkhFLdgD4m74HLU64vzjXEWCacmYyfWKAVqT3uyiWZxLudnvA3SwoMCYvPMvabWtD",
  "key23": "5BS3jQMBd7rYzMpPmJPBbRPZ3knTdyKPYAu2smDpojkjfu7oHaKUP5a8Vmt9hpKtLih19rRsQcoidNNZxhGnthiC",
  "key24": "DbE9CBFuwyiRZZbhD3Q4ifZDqKgyw1GXgFzWdS6cFu66Q8FqaoxKz8YnGkapW87385uVKUrc3depfrqPsoZ5xHX",
  "key25": "5y49PzANkVCNEC4kpnG1JmX5mpzzXng3tH42v1biNbmH6bZp95kNQea3nYFCrLhVmYrWcQXZSqY364MrdSANAAZG",
  "key26": "PwMCGUSsvB58LiqyD6WXqGvgZKL6J6PJK6csDC42Z4tcgHoncPw2S7LNoyoHo1YDKiKXv6kPxz7wEbTekEK6Kv9",
  "key27": "3PvoXmqB93nNnp7i2ZEKTWGcxtKRWmR3E6WL2rLYE1HkLow9q2Ume7KApm5rDfA6EBP6SurTycPtGZ6S2vFrHZ1m",
  "key28": "3j3srd1njpBGN5ygK44JvdX1vFHT136NYFCnFiZZUM6QKXnHz1D3FL3VYDQ3kd2bMVDSUm6QWezWbN9gxZxU38kg",
  "key29": "3t587bwsucb6MiRBJxvVkMYaq7L9npQJexCQ8wmbmWHDyRwN6iq9rWRWLF1BUEdVPLteUnziEtV7Jcr6bRdxtbcS",
  "key30": "5UnwUtMUCjj6HfxLXTRHSXoE8cDt9Y5nyqDzAVkSrCRZ2MMX4nMmvKASaTGyW99dyqVBTza3byjSgFyXdHTT55ea",
  "key31": "3ZeFMpQLdYR6xCGuNbra9LJYNaCfkZZ4HA53zQTtNtW9r5ZPPUzVF8SJokHaDpRWWi3tG3B4bQoAEZ6tzzZWMGyP",
  "key32": "2th1nLoE36Th5rK5VUAMJRagFjSinqPnGFH64DaZ2Fhu84SY3JEyvhAHFo3yKEgxEeupnrJhTWKMyAPZJtHG8vku",
  "key33": "82vWveCdCuuqbTHbsVM8iaobtTNvG44nvVkiELbCFX4HnUzad5a57BHVZnSs3fJaYiirGGCDzs9ZX7uCVC66sbW",
  "key34": "o39bNe1zDeZGtmhXB5sx43UdG71ZtweASQ4BAGAFu72SsT1FgyCgDPMYhCJFjvKQ2jGq31be7RdrYtKwZrjwrmv",
  "key35": "3Ge6bfPJkB7UxX95o4eEhs5AowT3NnhzkNb8LZt9Rp9EZyDTqPeZtdyZ1GBC2qk59hWSQwsibLrEK7skfKGcBz7c",
  "key36": "3hGNpARPUkkwJH5qryoUyGvfU6PTqa747uwTBiYfoVhfbcBbG32McoXHP3wbHxV1mTirBeKLbFz5xFnsWCnkVVh3",
  "key37": "2fRJkJzDy3sb4GUYawzuZ9Ui5a5vFD7E8f7nz33FgTHAQTqggMuXJufhFDih5ZdQ7iWP1Ecuj7rS57CZMZNeFsTM",
  "key38": "Q1qwXQSQooGnn9VwqPZH33uvD1QawTbgxynWgy2aeTboENn79gRHJcepygGrNWcdUVxqxSWv3UVNMpC2WWa1nrv",
  "key39": "3hECSD6NBGpw9iRcCEwKwT73Rz694GWhSqDHxtjk9yRPdyEdXfkP6RNwJ155atrEKHFMDqLigYBHKyBeqTh5tGd",
  "key40": "554mbo1xUk1Kp92R5yCV6VMNFZp8dP93rVqQNhoXVybBC1LnzNDrrRnGTkCtr2Z4wxShijpFXsabCB27c2nfewYg",
  "key41": "29GBsHHf5pgF6tmVvMAkwGBPpxryp8zYB3Nvi5Ba1kNqcnup2Pp9hZGuGJA36UmmQz7Z9iJqvGXa2oWP9qVtzFZN",
  "key42": "4XnKDJNrMz2Wnqj8mSSCPN6VEFc3EWuwwEN2GcudPzvZfGK24LeZCwzE5iNEvK1zGayyhgdo9nXki2FcCW29MKtr",
  "key43": "2TvUP8tcycW42Ep9ZwHt8ipotR5tE4qX61deaWWa8bpUQxtz72A2t2W35iADfrR6a77ADosYuY4roDCyQcxBTKAS",
  "key44": "3Mtokz1skRExK2oKwrgTBUmpkdXWMt7mNRLeukovKSJHUzYrLUJTrHoC9KTWuwoqPsSfDSyYgjF2AE1jJTXB4UoM",
  "key45": "CRNSVMyyrDBq6kApxgQ37FRy8DU5ovLdRUaiizGTNR8ugixE61k6TjFrnn7rXm7W9RmQmxQVFP4PcSErRT2L9LY"
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
