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
    "39BcpmeeLKGECtARyDBx7hMymQNFMSYxofnYEKuzyK6Ld6opChKmSc4RF8fSqmbhWyZSXjNRw57M4YEfKFySawTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pujJqjCGayShm32wTorexn4jxTjFHJEY4DiscDZtTuCyTFjRMskKENQNi66HFXmETpgQ5bcqAfUgAbVwRvkyrgw",
  "key1": "5DTPHRWGapyrzup4gwCHruMnUqYdrmLTLcMYWfofjbpwisJivZxqiEbWKrSnGTZQWMUa7D8uUVKJL6hzjz1948CE",
  "key2": "3XobRu5uYz5Qn4wUnLiTYFZJt7197usupafGdXyGZ65nf5G3GpXwsYsXWRz7qEzQyPnadReoW2WugkAip1Aux3dE",
  "key3": "3pS79oGXjEFt7jZa6sLHjN66KFbeTATaBVFY1KDWrN7iZbmM64mzGZA6p75LWyJeaX6uvVk71eowEhUtnsHkA43A",
  "key4": "4E4Du1HdER7HcwAsbJxvow41RJ9AcnikwSsA7k29HFFJVXp88QghsSFyQ9BofkupnyCocyjjajGpF2cd1AoB3218",
  "key5": "3bVAs4M5tRF9T3d6bTNXec6UKsG2nT8FXkKdMNYZS6uwpuZCoD3AFRURVKJnnDcXDga6HrA4NR91giSHNszgHVNw",
  "key6": "5mEqa2Z17UeT1vPXmtJ77gmJ4jradNGjGzT6eroJWvP3CChKG7PQ6RrDuTEeqFMnZ3RcjqqN3VSQ57WyfXPxGGXB",
  "key7": "kwqEu45YzG1jMh5nZFS861ZftpEixBepLasjirt5pqzkd1MWEVKNrYnnaus96DbUBuwnBhgBKWLDgASECzEdF1B",
  "key8": "kpLCzsNWEfFoW72XR9pdBwMHaoeDNmUe5ywYx5vU1nwSXJcwb3HH5UjdXqJUMT7FjBBXZfq7hmV73ZjTYh6t8Tm",
  "key9": "3KxVhKiDvmEN9BWsKckQZNwv9q4sr5C1iSDzwxFobSGr6oJT2PuUVuiEXDkkBZaJY55HdKJXRF4BZ5omyq5gV3b6",
  "key10": "SnRQ4eDUsQhTtkoqYcz6Guw2Y7YYKnopxWafX5zo1BNa3uSgyGRQb9GYU1wJW66RxSTJMeavKG3MsxM7Tw3YuuG",
  "key11": "5uHrrjkCEqHXcTrKTxzgqwnrfTbikoPaCcjf7JgHYhsyChDdBWNc9UwtEBTVK45iLBGdqwsWM7TPWbpyUzWB522v",
  "key12": "42sP17uu8svmekV9eRfGxGBGs9acd2NsLdTYK2aw51LXtAtpmnEEWZ5kcXjonjSMKN2Qf94x72DqRkbUuL93AdU",
  "key13": "64HPjvr5ZW2Y35SQNf5ufakYF1c6jpcF539uJc1ipMREsnJYq7i5pYWe9zywxqcwoQCR7AmLQvaxGk1SuzXmoyp1",
  "key14": "36akKAJ8GmKrNrqdZsZaiZoZoXLqwFRGHaqHkS6178N1bZqw28ZBsFH5UpG5mPddwKdhrWKfbmoBykvhTiBwBss6",
  "key15": "5YAMqRC5dV2v6sAqZH8cTTrXfXhyofgBCzjBkqFxEYayd3m1hVfHkADJesWYuoT67Z1d2z3MCsNGhmPHsCx2hh6N",
  "key16": "4QGqUyibwrfokNcPFtiAsLBzGmzpUAXnyeypJGSsJsuruVsmzJcapVpRtrA9sm4Y8KHyh6xwkzMyqQ74pRXXDSAU",
  "key17": "2tpSYkacvYWPtsuayZ9aoGMFhQpJ7oMASTJUBJpeFt3ixQpEPaUGXqzAsxJXtpFhvaUvedVkJUKDu1M7jFbLgvkh",
  "key18": "3A64ysBcGJqDqr9xdvHGJLvFp1b9NC1MYSs7jw9zgiKWVyKbcE3EjbpSMcBcn6qf1eH7pJuDAdozqrobqzwyZKjS",
  "key19": "25h6Y8AMAP1L8AFZ94K44wsmnsb7vZgQko3NKGaCPigptWuhEsLvdkGqM3U8AMhTkahFddWEWqBDKzTmjbKsm7u5",
  "key20": "4TpKefhSb25GBZNxdZVfTc1GS3Ee6mvDwRdiQi63kPRCxGebEUHEVSwGFoH3K9tdcRt2oJnggctAn8tzvQyGx1Nw",
  "key21": "4Jb4ZDmLfNsQHYhi4RzHwuLCX74ZrNrtXGNjJnJoDAkJKLWaRuu3WzEhE7U55gVTRUJuT28AGewRSnL1ERkUCBNn",
  "key22": "39c7p9Yo6d8YbLmCMsbUbdJ1qrmh5ZYVbs4mWQxqhzPLhy2BspKvmJ44jBnHdewfwduRUEGM4CryEeiTjeYNdo6W",
  "key23": "2t5LGJPKFFBBk9eN4LXPPfPmcX8PMDhzBQJbstM1DjMr8C1Gn2wJbWY2yPYXPXbUELFUMwwEDiitbHt5nL85pzAC",
  "key24": "C2GHPSK328UzEkR9Kas3jisXwGmL88kMLG1Rwdmj6pvf4fzRLAxrEzUZVPH6dd9q1y5ofQ8hgfvBMiRQ7xkLghG",
  "key25": "2gNdCswPRt9vzhwEHHcbYvR2y5SwKLRk1A5CRtDfJCpoJQyq7fjwfrA49kz8bcxez52G5vX4SSNAf7Ha9GQQNFBR",
  "key26": "ANDkW3mYP3iHaGY2PP5PAAQz3a81NyMAb3kuU9X2xEz3prFkxy1c3dVo8QEY9BWMBqfFTMeQEFbqB7QwMhsSYcv",
  "key27": "5NKSfhRMzihzJSHobjanqoZTVmqRsy1YM3pfVKyX7CL9QHRYGEWacvvw8gdtzmVS8R13vnPYGCKPXREjUDAod3Xq",
  "key28": "37UTrT72WHD1jSrX6KVvG8s2Mj9mrkLS16xqV6BSLQHJLrqHJPK1mPCMyXNpGPFdQJGNCHjq9qwbW56fsyz9kmu1",
  "key29": "3Ymt1Bp1dNtzySpN5wKyJ6hKefgPt6y6bWGofJQsp5bdEiiWafCYuVHLCSMHqcYfytBRFqa62W6yB3mGc9eNUpt1"
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
