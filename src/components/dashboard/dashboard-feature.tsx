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
    "49TLgpUDgt63NDqYqh1v5w4EVQeYvTs6s4i2ke3i2V7CeKnj5VbSn4TyN2QxznGX4ghP2GPXo9ZMk2tMY46ThXEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8tjGoDGweAb5SH6SuXRH69Yd6cfc3EvWJ4TDqcRezHjHBGjLqSpKUbd9iXTWKMmHYwFaBUqTgHw8d7x2zdvBBU",
  "key1": "Myewn5MoAXmPDHihQK5hR7LjfcGTCAroZsChh3Wngjui9B9QK9qqUF57mDJqNXaBfWYJEaudvji2mzb9HR2CKLU",
  "key2": "4iaFgt81ciRRJ1rtL1SAGHQ6XTivx6TE61UNQbJ2U1dxbUdaruHmAzxSAXWfFBAtyNV1doRq2MnRgZMJKT1Uk9B9",
  "key3": "53FUkWvvFttWudEtcNw3bBjn3YWywYxngQqfNio1khNL1xi44FQAhRpmmsbezM6aqivYwN4DgvVe4f6ARmY9rfer",
  "key4": "WN94vgNT3NLYNccTRLvrzBJe4WhkCmQsLtpmgpqf5iBfRzu66gbikwhc9T47BM1qrAxY4GWQezKt2mz1KPPzwQy",
  "key5": "3HiZTavxYA4Mt5K1k3tQeu41jysmNMB6cYviZcSuQtVsbTPuUswysnDnNQHWEfvc9TJwNECVYGD3vLFdoB1RWNBx",
  "key6": "2x3MP7aEn9VCkqtkbZy41Qe4Q4FUCemNzbcHkoYhtAkH7xf3zyVoouzrPq6U53fjucAuvxTEpaBCrhULHuvcYFJQ",
  "key7": "2PfqNePPw91TUEbwHt6rKTQR2kuGdxfNgv3SGvWU9qkQhK7N58ZuLNeee4G2tztSu2jsm6LaU1LaJDdowDKktoQP",
  "key8": "4AKeoCBkiHXgW6WMiUW6eZFUChy29jsmyrrHAKUStySHCTE2bETnz85LJJtR2AyjhW8uVcipPZFxSqwGUPNWitsG",
  "key9": "3kKi6EPM7i3ZGLZX1Y2Xge5TrD4cM6Zbm7Ck2g6mkhinWf18xMgcqxXEZL9yK2TKraH7CVVaktxCFdoofao9oqL5",
  "key10": "2ArrBajecPetF6XSJGHqirzXdFkzbkMUnCcx2CNG19LrgWqieFDCBMeGTnDYFA7cEgw8CWRPmkmVWum765pJMg4W",
  "key11": "5tgzYQCFsuCCYScyeXLEKGD9CB9sqKa7F4HfoddwSErQYcXZxEgRJb8PVTfkY1BNTH1o3UvXWu6n25cj5St9NDSx",
  "key12": "3xSqumRrE4RvS8ti4pebowY1msdBH1Ddgh17FJjenLaEoykTtBDoBQUzshG5utymYRoYQELG3eyqsFqgi2XxM8TV",
  "key13": "3b2N6uZj5j9QdbbxMSUy9Xgp8CHYJwe4JH7BHRTaj8jaNA4zdxkoWSMmKb3kzN1upEttnUfiBY5unYm7nQcuo84k",
  "key14": "2peCh1rs45ShS2B9ofAifFW8WvR3cdGNky9qPCaD3WLr45UxSYbuBSwd8H9YxD2BVVKvawCyngyFD2MRhRP21ZPe",
  "key15": "2jVMpA7tdtsoAw3JFAFrZMLcGtygPG8wsMHwYVtCcNpwbAdUXbtiPQij4Xk9boU1ZGr4bo1Zqioe4hQqNdsftgRt",
  "key16": "65jx3Dn9SHojTirDWSPFvnADwVjLs71z6pArNDkKvtr2hDnCFGx6SXfmE2rKo2rbJzg6HcdEw8WwqnJjHpgiW4Fq",
  "key17": "2KaZLpdQQAjMkR6rNB5AZ2D4BNTheXPtSoCDKyjhpJcHbxbRXad6PKG9HcEUjCRSWjkJcBNzKWumoY6MBVg2uj2p",
  "key18": "3TKMbJV8GUAJ1btutQ4LaVmncgGJNQYxKnrsvMxHbCcgcWn5KCLNMHeEanRMbK4p1EpTm2bMXQMUXhQmTQTeRZ7c",
  "key19": "2YY1C4sfFibETKo7AX2RvZoAr6L4FL7TFBXa9aowaJmRLZBGjY8rhKAWqpAYdtiLJPaCDE3Hjv1nM3J6d5m3Uh32",
  "key20": "62k7ay5Qyjn1TuqobQCZp2QL7GEEu6a8UzMeY6Vshzmx817eVKapxRdA9gDfW1Ukukh89rWC9bkiZMt85uF8ZC3u",
  "key21": "48PAYpKWgnY7cW3H75YxKnRNCUv3V6KjLXnnoGQAWwdLCx2cGy7GssVmypiutWAYmJjPkv5SGUUixbT2fjGq3rdf",
  "key22": "3aCqUskR6ji4yW5eKndbj7NQgMNN7EcR2psRxaWaoYxcSB9B8twVDV3u6HFkUjP8sBoJYQi5GqdA7uLvGHnsQUbd",
  "key23": "3QFi35nVNcsSpuuzzR9nmn1UGVsUyKxuLfQWmyEfueqdnLpYnvv9cfVsvvPRdUNsz28SbAhLEsi6bE1xuWH82XBY",
  "key24": "2SDEirBi6V475DmYFz7pM21jphWtEdQQJ5anXCuA5tzwXYsWi5CwniBHAv9tkqbfm5qTQQzqoXyUCK55o4JX6RcL",
  "key25": "4QxDYHCF2AQkFioQFk6KpD85d3MxbLvxbw5UAyyz91QviAUwb6TAn9SFHiHWifHRBcX1qStpreKA7hf8puUKsKBh",
  "key26": "5tHY8TFGH1QGQ231jz7PE5h7tzBSPsy4SECJzQYc1R7L4v1CShrTPTM5GgpGr5Cb3zAGAhctWJQ49resTxyZBEDG",
  "key27": "5B79vFDq5KNC5W4uQv11k6oBZpiF2Y3LQSWSDDnKmLo9wyyM75VfbVWwTR7EY6Rw4wp6DfrMhVTsAYgYFq9xuZLf",
  "key28": "3pj9xMx5L5iRmwVSgevAPfex3ybkTY7bcQJR9P1uTaAD3C1pNYnBeKgrA54c4wJGeEVECLM5hWptyD7sKFkQxYwo",
  "key29": "5sFTuYZWxbtA5B5DENjN6qVPVC8sBHnHEtwCGxB3GTrLYGb5tgAcpvgpnkXDAMUfddYMsDquEC66FwNTeKWuiRXN"
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
