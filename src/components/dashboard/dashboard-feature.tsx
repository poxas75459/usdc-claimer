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
    "rpkxBjbjsQDd6RsCCvdC9CebLLmYBEEFwf2E3Xy6k9HBfUWyE7msnM3Ppoo8kUzPuai7pNNr2M1phwKAjEP7cmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XgntnZqPmVnaC6jkPEqhkZLczTt6SswH4AujVNXumotEsvdLqrZSKKLV1eeVXbZ151j2pDhH7ai6VoRhxka8awD",
  "key1": "2htJKRC8XesCRuR2tPBZWz2NvL8U2ruqr33uucpQHuNjDwEgJy1ydguexu6vehuobCEPAPz3s68t6AtFLytgTcTn",
  "key2": "3SHJYSbkPXfxQCkf8LYeo7uXBVb2wfDMLsUePFsU4uCHLWqG9qkCmVZPB7NEQwMGKps3SLiCH3XCR7ZUwMGDtssH",
  "key3": "5EuxKqEw5UEiMS5XRoViywbD9GwVnP5pQtvcZ16iy8Syq8muXB2NcmZ9gd1zjToV8SkEorc2HeHDNgWRryq92jEU",
  "key4": "tfsjMB89Mia2WijAdzZ7yEJy9S8ndxow67vdzZ6U7HXxPFBpnWboFmKL7nvQV6LNhjPCSKXLxEqa1eqsfE2t6Pa",
  "key5": "tKgpYtNnuVVFL4TcEsWJUsfaZFYXcfX6WBpA3QkEqvq8SVmSkDZgRT3Qd1KtE4WxURdDF5krmecK296rdTNT1gr",
  "key6": "3v33Hdn8JBcJCJ2w9bhy9njAcnn6kaD79nJLbEPivQ5n2gtQCHPhg7ENG7EkrYtDNp42yiE5ExqqYwfz8Dk4sV16",
  "key7": "5v5GAzNuezsYc8Fang6QKAZMQqMJcbiY8PATmuQ2UFqtXPRjwea7T21wxq2drMjkiBHNHdrTWDn7FQL8wHJnbt8k",
  "key8": "51LAXDbLrfE3urdUaCiBLMQWSXDJ1HAREfCxjrhDbfpMnLto9KppEmVVL4gyUqVjSpLXVHpJceoWSjFUNASvJoKh",
  "key9": "2mh7LjzeSMG4gDf7MqS9SThE1z5AWVR7J6h8b8KDReab211ydq94yB6AF1yB3ywuYNhv4KhRPvYPghKEyGsZLPkc",
  "key10": "aMr5FHp6MuFFHs8nqzGLYuUDp1AczG9wazdfMkNwvebEh7UXALAaj12DCq8tYgVC9NwV3PkagPnGikpL9DBFpjF",
  "key11": "3bSQSSNP84WruxawiW2dUJuKtWwuTVFpqdaojYon6Ywd9bXjU5RPeJ2evqGdFJtRHY3DWgsHioifSiTwR5khicWY",
  "key12": "2Vt9g8EhF9R2geZTYacPGJC4LsL3JcFLc8WGN3nQKhPJF1tx83uePzn88VT7wo7RwG2cjnXhsovKcKRRgnbeQzfj",
  "key13": "3chuAoF5YbUgPYA3a1Qz3qhKmKWxV7Prev9p8UhKSR4Tnr4Ai8j6LnYjwVQypzN9Q7Nfig4rhujaZ4hwdZnbRP9Y",
  "key14": "4r6YNGMLWr5wBJbATpPA3PzesR3zMgyckvrz2VznMyTSyff8HjM1zmgS1QEUHqFQrV3o51pE79CiHraukJtqoCbF",
  "key15": "3TkRMH2Tu1D3RLZRjcEHMHHNfKxCd8Adh39jDUwAFe2y59ALvZPBNv8b9K7vDf3wqDHmxrYvvrNPkMZk9KvREXm5",
  "key16": "4PZohNS4627MeQhG72Juxvc6Kz2YSXQLM36r2gwN8m1bF6RWpzNfFLxiMjjRMt37NX7H4zw2ZW5hx6KrSZtYzPvU",
  "key17": "5kqYtq7EV5RBzSXLhZRtnAtdQJ18rpLXJSHx9aiR4BHFiypTwwMMFyV5rcXTqd65act5m18T9MLZyV3SrytF6Nxj",
  "key18": "4RT23c9VusX552hL7u9B1MLdWG6E9CSDoAjgVJq1eChPiN2UcZiNWxBH2Vi3fvBSub9yFvRFvXTge2sj1YRVhriH",
  "key19": "k68yrLRisFsHrHA81FpgnN6vSTSVFVuBEDspQQTGesZUy7uw6YSQpYPvTxQcWTk8mqvnUgYLwHtn9btPcHcYEkS",
  "key20": "2aYLELycGQxXj6zSGp1BdJF7Btr3aMefuNAGSkhxXkYqa6LcT2L87XB15bVU6P6yYEFTPD2HSuhcx35HHFxU7Dg4",
  "key21": "4pgJRgPuJJ79wA8Fo713NX1Lbrf8V7g7gTykhw9dso1ciYKtGVnPcsUgcz4GVJi6ZuYyDEqrVgpEixc2QWP944Yg",
  "key22": "3oDoq8ZZjzt8agLrb9TTXxAgzZjtMooV3rMod93skNbCL7JsknWbu4CUKZ1Mfd1YB9jHpCKnvxJqZqntgNAaoUrc",
  "key23": "2LR6UrF4s9qYUkFDSsA4YYArwzbaSjBYYZrKncPcBSrfAWgUPDBJGdttFS8YWzZjYfHKzZj1QQxvs7LqZnbCR8th",
  "key24": "2fimXHLypvDJe7NDJVFY3bqeoisqHF6YM6V3YjQHCehBp6MG1e1djxL4WR6kUwpKxmSoKzWVZJbXEHMpjTu4TSVo",
  "key25": "3zJjM1HrtH3vkyvnbXx6PxQjnZHa76LrwqQ1fmJWMJRbDVMwfxSTM6qCQv6E7peX9TU9yiyG3UXXgqUjXnY3RKdb",
  "key26": "3fMqVoHcak6SgFmke6BDAXmaLT74V23iNZK1SzZ1fWWj9EwxjrvrSR5GgqQGCx53bBr2Fgb1aAb8epyr4hrBqruh",
  "key27": "5LdhRpgDFuGoCDjTKUE54FaV6ebVuYXDKGtcKSUGNUM2xcYEqgHioefFJumjabbr12rtqzeZUiXptYLpiP4WUXjR",
  "key28": "4xet8UMV9FrhJr5gyZs66LvdPAaG58eZA6hCw1mWLxLg1Mu9CaKDcnui94ry6EwtNdhLAbJFvid21ND8xWsXYkQn",
  "key29": "57iAjfyim2go4hrirQk9w4cEqdf9XGxRQVGWJ26o74AV1pqBMMAjT3bvT7XkHZ4TG9PeMGjK8Vyz3SCs4FwQsFng",
  "key30": "2xKy7sVma8HT1C4JQ5QA5rzi18cuesuScNZW6nS7AvUJc8EE86Gsj9jpZea7rTLH6VDXZvKo9N3LmzJXcrTVN1bP",
  "key31": "2mVK9NBEHvN38wJXTniaVDoemb9TkApeX5DEigMY7w9PY79gwR1dreUiPLgL8iUoPcYwYU2Znev7rQoVoCikFdof"
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
