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
    "2H3fsgYyNtcumALj6i7tM1MbgW2pFdpfjDpEDJFSR92tKoWgNU7kNb5huuWtVzP62UBZXvmryUKXaqzY6M8wsR6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xFWozayHCXLfkzZRG1BwBmVv4UDWXKFiFkgcneM3ZECzTqAeowQLxknGdB6BdY3T9vJyGnitV4CYPjuLL1wijZ",
  "key1": "5USTggixo5avPUqLGpopivRUuWoN13SeisF6fAwqpESvy8263rT7yyS5EtaRMYxjiqws2Kvh7WXm64fJtqJrGmup",
  "key2": "5d11sNiH8V6MA2xLi2hmRjCsLqGoQ8dgYL63T6iKYKwqEYWqtndRCaBvHsxfxbcLHXQAegZvZrzB189ajJejVXHV",
  "key3": "yfaT2isc8g7dyMjzg3HCJL4zswJbVbPaqe7vDPpz3T8Mn2qz1xCDtm4T1qPNyLDpgg76jpGaKeW6hCPQ9FSqCPv",
  "key4": "5zyjw6BKeaXderzcbdbCvJMdyaSytYpsHw2AZWfL195z11xaoqWqCEB3sd5QWA5nUL9NpzBrJJfhm5SbmUp9Gj3g",
  "key5": "5o6DHwC5wUmRb3XQXosAakkfNgYjFb27fGYe6jrFgEHFzhTWbJ1LYkpoXsPBaQRqBNJQrVAHxDD146CV7QYbwwSA",
  "key6": "5Vt7w48Q8JATbWhHAHDiU4ijz2KpqUt1PKBHv5rt6wi9wd9p5SdzJ6ebQF1Zr7rN1Af3S93aB7HW2v6oDV1yfkYa",
  "key7": "LXT8VVxqxHBLzQZkRjW2ZcXsF5JJ6nfoxNH9wZDhhxtFQY6ZV7SRbtjxhbQBKTPEz4gk2aQb8HFHmsie1826nZP",
  "key8": "21mHUuoVPaxEMjAnUuNPuoK2wxZCRzVvABv1pj7U49caQ6tw75bduAx72UTKNMTfZV6DyChCEARu7xF5tzo9ztqw",
  "key9": "4cSbvAi9XiYZukhVKxfG3LGedSi8ctnqWgJ8X6MVQnW1vSbB295fo8DmLK1CaoDy7rjJQFqtBSRmq78NjtR1Px8P",
  "key10": "5dUmfV6m7TXp9ckyFfLvaq4D7QyWF8uHSgrNJPLxb12AAZRDWzsYmZWymdMPghpULW65nfZYKzWsYZHbCzD6eDyE",
  "key11": "3uBrkzRXvfyLCCZuat2BnyfXsoSNh447fhCRzxLeymwPumhTvq69hJjujcAzR7RcN2dM9AXiujCSjtME2G732c1S",
  "key12": "xn6UZMoP6BFKMxeyxrNTGchwEu3EaygqcBt1qSpEJXsw2YXoNA5EiYXeBsY7K4PRBDV4BUVef15wiyjZK4pUXXQ",
  "key13": "5p68c2fDvtT9FLdH28K9GhJnqn2ogcua5RbyamxSSWvpwZj1aGUJF3vURP4hYS2GB2sbyDeN4df5Gj6CZ8bhyp5j",
  "key14": "2vVFJejF7FyHNgWnEDgZtTpfi3BVko7hupRSsScduxh7tcSfJRpKsQp78ZpoYYhwD335J9CmETPbQYFpKkTLwqPt",
  "key15": "2gJEqVoDp2Ng3ULmjgrRgcq25FQqyBVU3Z7Q8cgVr9jVY9aHyQP6hr2yC9mL9kNhAFXd1oZTteJ65UywUj2CrrVb",
  "key16": "XSdKvzW4xLXAoyZ5UH6DrkYiyb1RVGbfMiky5HaQ7ry4iBY25wbNt2GE1JiF1ZpQ3QXfUDfYcNRjR59cz2ZqsYZ",
  "key17": "599gJLmA155AtDxHSyeAQhyYFj4vbqhVAWmKw4npCBeA9EpgV8Ek9AEUaPxuvCDDPmmcd1GJiKRchh6dj7J8qmSH",
  "key18": "4vHYJh6oTBMHdawFSnBGcJBesGf1vD5i1sdWGsmoXYegLt2iDsfk7t1XRgyhQTmtHhLWTZzBHXTr2parWgzsa8Ns",
  "key19": "W4Bcxq8jCRXwwMVE2jCSgHKzWgA5UHrdeSTaqWrFcrrC4obwDJQyWb7PQ5ThGzhrVnUb88xAmx8gJCfR2Rvcteu",
  "key20": "2A71JsAoGaMma11UrKx3uGWXToxtreVpMg25RPfPTZURFStErHmezZB32cN23q6yDekzUJNMv269m5YR55ZxqGe3",
  "key21": "359ciKYdbHiwXbeuDWaQcxSnXMequbnoNz9wtT1Nt9NCD2RYN9bHRsLCQdp9ohGUVqiRoQhdinV9h75PhWb5Pjj6",
  "key22": "4c9CW7nkiReoXwLRnyDmNzHhFKvPxFbaAnNXXhBxZsRcLVYYP69pusGYQoEXzyJjHigBAyn495C3BNuwFg62L4DB",
  "key23": "44vjYD1zLkr1Wop9icM9SN9yds8v7r3tmsRUdCPVi8Q4yKtzaQKQg4hzfuogRyMJTKE3XpwdZUZH6qXHLTbL224p",
  "key24": "2YcGMqWiyuzYc6jPzqLhkLhwmBMXhLtg1z2YjPSsM8K4zs9m2SPCCys2BUt1NLW4ncGU87LLuiWa4aFANqjxoUwC",
  "key25": "39oRgkyfm3QANRkDhxgSod4ocTGAqzkgyBXLcVE5ZjLNGwppithp6DeYRGwHu5b26jMZVKr8crUMMqZgETFZB6xA",
  "key26": "Foqcqe6RpcBwUuw2U9mbGNNdAzg8NH8MWkfMxVHa8dz86JpRRrXpL48BsZdFKuZhfYppBNX2Ra1hAWxqQyhW9Wf",
  "key27": "4D4V8kkNAnM9hZ2AeRsxjLaSH5oki54tqPtqmsuXtvEUMSecdhd4WfMkzKfB29HyLV6AsPA7GPaGi8NWRzSTwuDK",
  "key28": "3WHzy73HrUCKAW3XGgUgBQhDsAxvK815fku8a37mD1qEH9XhtCAgmadifiqJ7wwrJq55m2dk3j8YsF8pV2eSjQdv",
  "key29": "4VQLZiLDHFbkyBe166U8dbzStgNpQPBrE2VgtaFcgbxF7tRzENownizjtuXf9D7hzcPXCBHzcZnw7MJx4MVBtMFv"
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
