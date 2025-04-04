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
    "FB53iAHG6ZxMUcPqfhCMa3wmUQFQhd9v29EgqyoAJ93qQuD82AYKyDwwULJ5xyUoMz6PQNmrzKq2WXXNeJ5aN3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCr7Jcs4o1hr9T7pzdMUUuZRK8bkbavjStPv5mohJvth4dyWtxe6dyQsfQcTpJJ2VcTDN4X6JTekhWXsX54ZinT",
  "key1": "4Vp33CUxqo26ngqnoqSdywQwiZQpdDwASSDNHYFYem387t9NZWtcRyRMH5Lr9yeMKpLFgygBKdZxsYMyAWfbnQt4",
  "key2": "4uR1WFH6Xtik4KE6Z6piLTmVHkq9rYGrEL31yH546XXMS9H2MdqoNVj2BnDW1DVJNtTzgTZLu2BfUggW1cWmxF2b",
  "key3": "4jfXPNHeUtuxYoZ8vQPaJobySBh6RX2coEM6PFysmVAZfzSqsJTTtncBaw7X172N8N8uxTuhWgnGYz6cLGjQWY9Q",
  "key4": "3JoLYBxSVaxknRt2E8C6rChhw3BcazLSwopiG2tMh9GG3zWuKAnRPwWUBAaJJzoHPGkYXsLUhYtCbztZjHopruTC",
  "key5": "AxbomrVnC8vnspdTg4tRc44EM6QsjVqbVdZ2WGtcSigVXWnwN6xCbSyiwdsnC9guE2G3tTi7SoYufgNF9igTB6t",
  "key6": "3ifrnqzdHkWDq1JXMYEUkPuemZR6s7qnHtGmxy4M21iCtCosqNy2KR6MghLoDCv5WikNW3ezu55gMinnurCu8X3L",
  "key7": "4eEGY2Xo6oTQnVqaWRCAUyi58hu8DA2ao49GhfxbS3H3ztTrnf3bF9jFWWJNExK2U9LjrtcXnhfAMFRgr2KLP6aJ",
  "key8": "2y7ELBZNG7bATAbhGaBxgmBJAanbx5Gk1xVSvboSMNdUpHhT1Xew1CurndLjkYrDJgrQkeEP9KBDU4DKwqDQjpzf",
  "key9": "3FM6wLEyhGGeDHNnPcRy8RNCvuzp8Uy2RSeUv6yztAUAjfCRxGqCmN2pfNMzsXqB4oR2qJ2bRPSRkvcnVDtoSqTz",
  "key10": "4uuMHhabtBTcqcCVH7uJ4JDLkoAfn4QwoZMEEu5TxGXHKL62Dd7ejEnT8JNjMJjuKrjKQWTkvCy8R8TJeSWiCL9t",
  "key11": "2UVWZxXCD2VJtF9iiRdtGddoLbvFJyT8F36EZWxGZ2X7hpKDRtVhqg38XtzV11rbKX6uKksBKa2Kk69vNAq9b4aH",
  "key12": "5WTJ4UHkf6vi67JLec8BmtZ84v9acWhYvGpDQi849NbwziRMdN1xU8Sv9aKb8fa1v4GnJQfajXwsw1jK6zR1k1dV",
  "key13": "5PvCeMqtRffX94NkEE8NbC7g6acgJJbiCTGuVa76yxkmmUukjgKWaB2oCmnFT9RoDsp8LW7uG5xuoMtCDvccG2Fg",
  "key14": "i9NbYxfwtYSWCAsekNxnR6GmTx51ZEdQC7rbiCBvoE3471x1jXpFq6cYX5VGvcCeF987X17NxP4hh3WEFDruXxN",
  "key15": "YWesXkhaXcm2yxmV38BJ8pMZgy5bUp5dHN4rjWooPwuZCdsCo4vCAfab4sXCvEGDoXCNiuv9yfpuFSWq9qRsxXv",
  "key16": "myxRN6ry1w86LE9k6FmdBZMYKvAcMNTZQjfsik3ZB2NqWUy4sQ1Ls9WXAmaKAb5B5LRr2UuxgLBPq2KALi8rr8t",
  "key17": "ySrVp5usg38VuTy5BUSiYLN85R9gYaRvWeHH4yaYPjVjcA1toRUkdjnU4xsgDGPJKjVK25HAdTwEGpUuEBw2gK1",
  "key18": "TzH3bAP4JLUnZP3CM56aKTzYoAVyrDrL9wKYKFt2pJqhcHqL89fKvFuAR91KuCaBqYgNyfGnRzYTWhPyKyLb9TX",
  "key19": "bU6j6yZheDBevh3awbq4drHsmA14uoEbVxUQq6rEhLzGz7mQMWKF3sw9oacZQ6dB2k3heEK9iERJvb6JP1M9Vnr",
  "key20": "5PksYp4c8mTR1CpcFD9SjPA8ZJwwdj6bDiZAmsRnWWh5Ar5NrmCsMXwCSMhJPnbwfqpAm8UNa3q1SP84nyurzWNF",
  "key21": "4XNtmxLpejdDnvFtfEqMJLFBLTAsShQt2i9MSYHYg6SmKvK97DRoeN83QDzm2QdJj67vuBQj8HX1wQ6LvveCc8pf",
  "key22": "4RZnvyJNuzAed6NPm4dDUpF2dMdxCtMZB58KZ695mRGYmKWx3DcCcrx2LySYAXW9mvdWW1rZ1MDiTeKer5m9YyYM",
  "key23": "4MpqAfcncN5nfZ5h6Pgzd75ssbewzD7DMp6eijwnDAgoHq289sF3LspD92VY4HPt1SL4KZzMPzfuPJdhEAs126Z7",
  "key24": "Src9wUxzAYQ2rNSsmWky3Nisy6kEknKqdy26LhHZvRGWo3MPZ8P3hEPPxAVgJM4HvTSRWtDutM82nkzj1ULWrqP",
  "key25": "5LUboWmYimh8Jf2U1nDm6D6nzdBZ5HrmHjFwBGC2QxDDtV5CSvHtYXyFX9qCQxTJkgpqFmwoRVec6eMLRBjpvzgQ",
  "key26": "4MCPusC7VA2GW2WQUHuyWyGVhWBSLFZ1SDndSEd3xpMa9XTH3jQWVLH5LXGyfXV1U9pXz1w2PbFWrGH449sWf8F2",
  "key27": "24b6MaXNLdBmeJF2Xh1ErezzQhca9sjF6PpFYJkKciaSfEamokwPq1jcFZRwL9dHjJ1iyXs6CsNWBep2EBoT8KkX",
  "key28": "2mf9o96QfWtYEAvnT5do48q9TwvS7MFPuzYVhtzLxkUhU5WuP79craezmd7Nnp1v3rwDjcuahFBmFsKpq2HBtk5M",
  "key29": "39BnVoYRNbNZ2PANVUH8TMVsYPE7AfM2ssP8mDUDQDapSJ2ozqgQ5n2WSB2f3yQUB2tRLvm5dK3aaFzDJnQe2pwG",
  "key30": "4VDPNjso5Tz8aBQpTd4d6iSq16fCb8nZu4zkQmXnpgM8hiDc1cLAgxALDHp7yPR565JhoRfdNpvR6NTfNdkpeokv",
  "key31": "5MkeeYkBNq8vVdggaiSkwEjJhhWwjN93EwcgR52Qgn3P4hP2QERyW7bQuZ6e3fjHSn2QPhA33mHm8R8s1ZxfoE5v"
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
