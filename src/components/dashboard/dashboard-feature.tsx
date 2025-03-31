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
    "4ZhnU6fLgMxgirHJXF2PMiFagXfgGGy82vPQxjU7VefYF2hHM77hGNQcQsSR7SpcdeSwvQHSa2aMFHqmPbSDvgCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BDTLqK2wH7HjiPuHTn4P9edwrTvAGVcjgiLShfegCdNmcWMdUn8GGb2GvY5Yh7p5wfHFzzCpJvkn3BsdH7zzxn",
  "key1": "4eb12DQhNZot6gs9W8qdPpVQWSBUdf9PFy49mm4xqhHZT6Eh78aswCzFtt6MWUoUtK5BdL1MLT35i6sd7KYo9QK4",
  "key2": "dSdKL2Pp87Q29hbrkoHRcQXYJLP2RDidEo9PUBjcDLxLP71cPeSjuCHVE2cRPPBxx5a6YLam2GYt2ynEwZrkek8",
  "key3": "BiqD3GtBDioLgY1UnbjwgAmXuBVHWELezvpB8LCuGNcehznTspgfTLTyysmwhYpEHvrMAVapDZdKpbQFtWV8pU9",
  "key4": "5GdV3goUPDyL82ArVYxVR8ArYpVV3HHHJWYeyuLhcvhxRXbYvJGvAA4dqjsEby3ozxN1GeGgqw5McgpYjc85zeeD",
  "key5": "5BwKprVo3y9focqyCYQtrdZj2G2Ei84EtUu5PWjxWT5ucZTC2jfEzN4Yc17SUpRPSHEC8ijGaXioG7foH1bx4KvC",
  "key6": "3z4teVDqKtcg8AknHLx8nNcBLAui3tQYx5LGbFamjpb6Zy9ww7VTgdzoarkazRgxeYiBAB9uK616LrYMmhKV7P7G",
  "key7": "5eiHSzNJE2jicvaWAL8oQ4RcZ8oPYP6THMAcuBtJDWebZGJYru1x88E6yn6M8EkRBEMWqqhirX6cNqBcDRxTNJ6m",
  "key8": "5ayWCJxR1ECao3BfTuGyiQHZRw7WV8bHiML1pdCUZiNfHeeEGcvBdswHxWp22L4Tt7w9uknBbMPj8Xz7b9hHPoo1",
  "key9": "3LHoCv79BDTfR4Ve3g489yffkHYMtkZcygpVSKUoCagjWsQLrt4t256SnMgR8CHzcqFmSLrpnqyCQtD1QK4Uwgvt",
  "key10": "2ma8ndqW1veNvcbbA9S36XSrEBDJrUk5e7CVxvLfqyqauqrn8eNzSvEZPDd2nYFgBWPLRpC3WBkiaBPrhr2rNaCQ",
  "key11": "4Am7JWto9r9dPDpF1MhkPe6Utd2yN6WG951NDZM39v6u6JnJB7BQZ2wTcYoyMgGFt8JFJdooLcEZrfSBt9n48RQx",
  "key12": "RUY5xRRJ9TrpYyi1oF8tprJ344U8JuSvHELNTUw3X7dLuWUPxEbuZj95zyYJ7eLCQgCJB1gUNVpcvg6Lt5XbWVB",
  "key13": "5KF72L2c6cAcjc7aG3JDjkCz5Ab23VRBN8FAS3Rfp6ucQ5MUbnQJP6YAPfXrE5nZ2P63f1wgrdBkd3SWMUBD9Ncg",
  "key14": "2nnEmUhDDwL7pqDSSq2vRAsNp2RDRpj2pTXbS26vMFiVCvZkA71evxRSJMD9X3v3FFWk61XWZbDhYiZRc8YTRNFN",
  "key15": "3mko13Vs5RxtcSAJNKZRyHkHKhDtuQXhMu7veHBhxgaRm67yC5iz9awcWLSG4fSDMiVTMxtGEvbEU4MJ3KXWeg4T",
  "key16": "3kMSqviQNb8vdCzMrFeGLJkeWrUgCsXXdpDnPgmtq9c7wBMuK5XPNqHZgr6V9A8MwfkBb5BoEcHQpavVz1t8pw8U",
  "key17": "2eVFqPCB9xeCDUPJdG5KaPcticZNgnpjadVRDHKkpckamA13FdGeL2TBpV1NjTwxD2Zr7RuBDrd3arwUQczL9mNV",
  "key18": "57wNFMqNyMLsAAriMGZ352f49EoLVsWCgV7WLru4pW3gqpe7j38jyoCP5mnARdhzwQyuZNJADDdSwRLq8ySH2NCj",
  "key19": "3n8cPgo8PMzqA41RP9hkFM7ocm5kzbnVKmMxiuuSNtRuWAu29Lz7jobrLdc1AKg7wDYxE5dupE46vEHgmY5tqWG5",
  "key20": "o8yJ4jyJ5cPLih4ZNVcrsnNos3wgZTYxJN5waYFUQ5F8kkF87jHqNTExdvRZUUcsLfhd1kG2NxqDLxwqgC3NH9e",
  "key21": "LpXSbGw5PpS2F11yopx5ETQDpfkv1uo9m7zBmtyVKLkiCM7VffhWRorj8itBnhGP4GZaoDrNEVpzxsU5JMDrGVY",
  "key22": "4HpAC9fC8WPhoVQAesrHKgfFdiwb4fAwTU13WjhTSYRmWWtf36Nxx45hjxvLRjsUmCWicUjgS9tgqkjgV32Ctm5B",
  "key23": "a3HeRaSFsqm3PF8ZSLr1kvV7BF8YCmskMivYJ6tmPGwku2uumqu7AZ4mG5WHtGGZwP4AzgBPbBQJhASM252SWsA",
  "key24": "489jqyDfcTk5p3Sea2fq5pjE8V8X7UktGrT833TTt4gQvA8TqHLK9KAGYWfameEzGHHd9nNPwuMDhjzKqQLtb1Pv",
  "key25": "B5eGptSwdf3pVRNyGFywz6s4MW5WpJnsKmpxf7wtQppVqz8P9dCZ3RMrprn88MAR8fzjiVmZ43SLBnhRbvd3Xs9",
  "key26": "3iRnZDWkcCDgBY8qLQmQfjDES4mU7G3nruRjGNDwDxMVTrsU4CLXRqgHJ2RdQj2xaFLNttCw2bej6nanyR4DF3b8"
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
