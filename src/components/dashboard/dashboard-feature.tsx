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
    "o1qVEm3eE54tLW7Z6UxjFNSBaA8uXMK4yUS5c4dMUuUHWCADwbHF7Q7uQRm1Tux8EJitgyYs8Cuz4wJNtF6vs2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4u2RdkE5jgkwHgworT8s15Vc6ximm7KwCrhBErk117F2P3bStRVWurxYXqjjEE3syEv77W79SE5ZQywqURfGpZ",
  "key1": "2xQoBaaPhqTeHZos3MEn95zQ1iEsXVVY89uQ8Qh3V8A4VePESqFAVFZwb658fcAnx7vh7DGBFSGb6vv63UsCtAzP",
  "key2": "1o6gHqLsJsd9x2SKutEEcKRAPA9ztQaWi3ZbXHTgFXT7mfu4c4EzAMJfgBRLwqzcgxMcPSjxZvCrbYE13BXcnmS",
  "key3": "5EqMy1mKQjyetvu2n4vCxZsFGDppmY4kSLoFzoSMLqc7UtMNB9CjKHfL2eUMbfQUfoA7chfWCvMq2nnaX1im8VUx",
  "key4": "ryv3AkrLRE1e8PVc6WBDGB3TnqHeHs2qzA6s4LDpwUQcCtXDwPHYLbBpScHzgcsaMy9XJjMQBSEgzND2t3423ZK",
  "key5": "4u7mgX2uN9Y96fMsUZ9xY4JdhmmnztoRctakokG26PoaEmHBM2vA7uNV4X8xfApFTUUG66PMS8UjU672NtmMb4Zk",
  "key6": "Gic9kgWD7gU2FEbe3AW867W8gk1vYszrTFsazW9yHWwdzZdG2dytRpCiYYApah45Z6vbTC363CyM1QsASHLKiyz",
  "key7": "48WkBWz8vQ68WZXNJz5teDjwYtL52ciKc6jxr9wHmH7pez95p6VQmm4b4wxJKkEbJSyodsNZSwCtkngT6cQUSTsy",
  "key8": "2UkwPPPiHhUZ45nTgkisYGpznrk4NB19uzApTnjp8dfe3fiaaJ3gU32uzhZjDKeXoCLzQBqtcskt1zQGVrupKDWp",
  "key9": "45iUMcZYRocZfHZfBCcebbAJWJ5B6HdbW3iPpuK4DqP3iHfY6kwPQ6FDyEw2aqPjyF5fRJBf5n4AGsXYwB7i3Bf4",
  "key10": "sCwkos8NUAwb8wy1FqaDFP9oJBN3WHbWFXJ13xiw3nCFM8cTeJYDe4erWG2zBReXB8vK55n4Lm8PavsugvRgzLB",
  "key11": "a6Uv69PbDrbbN9pyoBZVMqDDVfKiSmB4apm8P8XWtfjYMzo33fDJx4HDKW4bgRZBxRLLzdrFVytHdBxxsPqdvu2",
  "key12": "4rfuGwTotUJZusKbhcrXdWabMiemL5dMPPRQMYQEbH9CH8t1WZStEDQUioNcrPQFCmewkFM24nC9m1JxFpuUyHpN",
  "key13": "28ZCZBVByBmbBAF9D1cPVFMxfZY9qYeoNW7Q5H49KFEgMArHV8KUN8JnwHVabbBKyvb2NHNF66LdtkgBRujMMp4V",
  "key14": "4nQQfXE8fjC3JSF2hW2VA1Lz1XQVR3fjwLSU2so8d18CRQzv7M3Yqi3Bg4HZgvij5Gu15CPKo2b7UL3YQQCV7ZEC",
  "key15": "5oR9pZinhKkpV5FGLUCBQz3dLoDRWuMagJJojTTWCqGcH2gwU6d7nHa4a98HcJ2MdEwrMd9Diza3bxUrwmpX9HEn",
  "key16": "3sFVY2WhrEbTEyQm9EK7d652SsBcUGKcRv6KL4uFEgeHJnvm2z3ktWi7dCtLbeUHchiWJqiJEgBZ3c97ERJHxt5E",
  "key17": "31KSxjWEHbXHktQgC37qecfx2uWVfAyQcaecw6pibhbGTyDVRD8UfBVC3KsN6JvYcYCjCgC7U7Yq3TYeSje78bJY",
  "key18": "5ST8Lh5wC1MYRrWAK8jGgS98mFnUsmKx4YtnYVCSKemUYeEn9UPXbuaBJByCiif4cig8RPFPXGF9ykdXVTysoLYE",
  "key19": "yRWi7oiMzAj5yAwCDBV7nYCQUY6F5zKJwxw6XFtPWDigL1ekxMVkV5fCZzS7Nv9TQC5PjfJ2vRPuX3oGB27NJTE",
  "key20": "45V1RMpv5vfgzduvrSCqbQaNczYuZpXKk5UmQLrqmDKQQaCHZ39RdjQJrkpZwR9tGJ6d9Gnb93Y5NsU9Fiohyem1",
  "key21": "3LaY48vcbejtRPzaPQNH23HApD77aMKzam6t8QJAxkT1HyfUmGbFUTMkWknQiaiJkUMinSo7Sn6d73Z5p44YMPhe",
  "key22": "4J7nNFr6G3uSZ36dr6R1uNFFbCoPyt1iSaDgurUYJNseeY6CUV8bpSCKS33Evj7zAm7WmGY6aPBwghXkEabb5Teu",
  "key23": "66NNDAdPh42xqVkKT38RQJprujd94RynJrpEi3BRxtw2ccZawbuAn6ELiikNp4MLdkFK5dfmfihSR5p2ZMLzf2DM",
  "key24": "5xZtAyHWiKmVmduD7MeBorjq4ccjAHbxa1VxLKg99dDSM4bhTiNCtJqjtvYnvQ8eqTEuBavNj4wJjR2kUMv8R6Rw",
  "key25": "XwMt5LdrGoxZyBNrKqyVChaEfFqJU94G69TWFXSBsiaaYMTmovjy654dAjnDVwYp9xbiMfsVTYrFvGCBQLdDpbL",
  "key26": "4q51E6KH2Vybabwuc3gAYLpgejE2FJsQqMurYEtbthtqq6b5s9E7eM47EDwVYbxtosMhYh8PWbPPGvAZRz2d6qgW",
  "key27": "4rQYgdLPdy42mkJdk6EXi42Kd5bHVhJoeD7esfLYWgPSu8wCSsZGaKSxC9vwq1nNqzy3VBe99F2qfDUcD4Wdqx5k"
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
