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
    "4HXCYci2dyTN67NHoQKXCNQU6mQT8WSka7XSRBi9ywLK14Y18raPkGwbkHgjE1wUPNK2TVgwP39Gfyr7HmxTcm4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGz2DAR5XDBSAy1gyUUs4dTKwmm5Lt7L2w3pjKViiS5ouEJA5K5PidZAnKSNqYCdHejPGg7cfZLVAS6RR4kBUay",
  "key1": "4owEDW6doU2vyuwx4N4QNPvQD89wGUgUesTMdaKgMSQHZkCiV2qQR1ezfLhPECiPPfko1eFDNM9nU3MyRLf7NTRQ",
  "key2": "38txKfCDHY4FREgBHYRuujNqTLVNgStmRXr3p59ZyfNyNdry2JC3Zcjgh7xZbjjrom57tvf7wxiFNqZcAS3WzPr4",
  "key3": "2b5GhnsbckXq7twbsK5mbQQDBrPq34iVMoHEBG6iN9QMhDHdfjj3yrbV8yqQPtkDT8mCjnsoxCqgj48BHPBWFQbd",
  "key4": "37S7ig5k4kHy74rVbzrDLhnuuUo9JB79KPYt23155V7mtYN8U4VoVjE1nDLmxeCgnv65BgkVkQ9DCKWVVkP4xqmZ",
  "key5": "5f6KzxSTYT2sbNSN4yzMuCrzPY6XJ1ahofba2vYMDsWfpwuawtsuF314MM1qmWWjt53dJRYRpBTnvBvY9E4wb1To",
  "key6": "3rZwXfkTHXtV2Yo4b6ToGqEwKhQ1CBHy2YXLgQmaXnc3JuN5wxnsXVUBM8NPWu2sPVyiaSbLZLuGiREu51Wfr1qN",
  "key7": "2KtwJTw8Niwihser1QTqt5aAFuRAnZwQTnXp48rs4zJ2XwvHxyLtsDaZxZCKfLviZFPq57PePnz7zvrCZ9Ej6y7K",
  "key8": "J2ZdtUfpFBxtfngCdktE8pMf8QxSX53m2smMVfxzq7mk9RuqwNF5bLZiAVT4FVHtLJUxCjmwtXH3uxhCFzE6Y88",
  "key9": "Rf8vYzw85Eoy9d788zM4AsVLRsRhBeBbWk77S3NAiV9sUVEfC68THAaThJk1oNyEyffddCFQPzXDDajZmASxVNc",
  "key10": "3TQmTJsN95k4dym9omXsLyjmqzrqVs5X9EojYamTtWBnRD9o1hQxd9FrVJenw8y9cKML7QuSxtKs9DUiw5qatHvp",
  "key11": "3DrbU77mB5BtZugzFHXvyuaesSmGo1md3RahtdYhKz7GDtwvHXYyTk5VS4ewn6k4E8sgVh4iMczq8nrHBHb8H1S2",
  "key12": "RjKVdGHpjna12Edwc3iXZRyCx7JufAsmARRxZJKtKqfGKpys1DvNeQkoryrZSPwsEGxmDxj59GiBKerDPjjpXKW",
  "key13": "736x4FtmiYdc7cXVbSD4XraCWs2VxmJcWxZxsV5BqrLKP9S5AjozVzXT1VaECo956yXe4TtFMqkSGL1eQ4KG7VE",
  "key14": "2uA3icmbap1mwWRDC4QVpLTLk73ake9U4aXqDsy4r157sqH8UQVGQeuU9F1NwghCzXYUE2x9rHPcLu48FnNSKpVA",
  "key15": "4PwEdLnzxJvg6UvXvtUto87X3AWB1rpmHugobCi7TPdqFn1xqE8T3RqQ79w6b98NA47DSSR9hT8aCzDoLFG8VaQS",
  "key16": "5MJanKhxgnUcL44xXyVatXNTiCdKKjxdF3Fa6AvQUjm3bdwR5wih92K2ojKjfMV4m9qaRg8P3DPy8FcWnnuVt7Zb",
  "key17": "5ASuMKrGkqEyjgAHZJQiCmpVyTheGHpXdsvNDaAQbJg9z5gokeZVi5VnRqgVjYDPCEZP3QwWxusZQbQPrwRpHWCN",
  "key18": "3CYtcjYeN4eMAX1TdnNXHkMVXDmVnBBPHcuEdccKPcKwyquwRi6Q1e1NapryigoMXNTSzieSHdBHE7Ry9pvhbJme",
  "key19": "4DqgNG6vXA3grLHTr5pUD7pHB7LoiFz8mv2Bv8fBUaPv8XPpVvem8Gu5pB5VJi75pgWHpMjTBqFXXNzzEGQGNZeu",
  "key20": "5bAKxagydSWBhNx3ytxU9agVK9GiB7RvJns1FkpA3wp4fVCBcQh5FBF5LDEpqnrNLLHvk4mMagERhoaeJwadewGF",
  "key21": "3LcqxVYGdGbmv6NmQp28ArAmp1weJnWxQLr2RTnVFV3du3DACu815e55LXbJeZ69xG6hF2PfmUPenwygpPzmcpGR",
  "key22": "5aDR1Voab8NzFgyfVUkUxafFQghF8yDmbmrSsE8KFbCDZFAgzJxwmEDaKcgs5K8b7StsjVaF38xjqVQMTmGNiX91",
  "key23": "3C2DFDzmBEeSxBSxhKVj55vx5G62AQHovM8JYqmSgN2Ng69eqXwEXjRygL3oKVUYzfxvnL2ZWVNauzXg31UWwGFJ",
  "key24": "22FeU1MdmFf55ZJBg4JUWxqVWHsX6b1H97r5UfgaFCyhhgnooFvZkhyG281cxhHsQckxUScz8tvJphSiRKhSSC6G",
  "key25": "3wrgxXkuLDp6Twn1irqQ5JZ1MeVn1DU6zd1JKMqYzvcaT6Sx9WwMhWvjbnrz7SUS1ETawYvqJ51emmJER9e2kBkb"
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
