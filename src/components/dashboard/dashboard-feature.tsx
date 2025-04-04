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
    "3Em7Db3cTVDKJbgLiLQ8egAN5P8cbomw1VakJg4VvLawjvyXRC3FUCopZ3db1ZWZw3przcZAXzHtF57qHFegbHZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNQ7bNeHCrvG2uxRkHT3hRWGoRw6WR7WrGsHWDGdePTXuANTTJzN7qJ9zXgJZPTbh1PTTNNxMSgEHij5f9PcToP",
  "key1": "gjsyMdejwcgWRAYNvhFL4PUZ6qXpZm41LrQJ9rDUkPrJCMLyB7fPkkUHGtDGhLa1h3a3WTfGW23g6VuGCRrisUQ",
  "key2": "4hMTmCxA4Mzt1jh86dcKC1MUdCU6CLfaGAJDMTyfXuvWuAdAnjKf8VkJFMhioKsZRJ5ya7T27J5MTtzB9KH4T2BD",
  "key3": "mvmxKp3eDc5QDjGTNkcST43T1FZedc3fzHee2NakXiZmRhcHZvpY3sicAkVhwuJnKRNia2idCZk2MFVXis52DyA",
  "key4": "4qzMWYCTEHRKraDBDrgkaeH2nhugwYPrDidz8tC1T6jrA4XYpwgeVJEJQk1FUMpgopf91vkno31FVXZPZSAVdLoh",
  "key5": "2u5N4LmmWFLGEGiB5fbbdxHXuudLuAmaTv5WvD1WpCdjJx27gTzJMc3RuhfzUpA6aecbHbVpEBFogQS9EPVyoA1a",
  "key6": "53p39zSj19FX9MkqcZTwtsa6pEfdJ8NHgQ5cbkV26c1i96mMJZCTaxVrWsjhbxvznqCounkcddkpKB3qWK6fRQYe",
  "key7": "2PgXdDBRWiDu838c4Vf8rcE6uEvgVSoRUNrN9SVEz9izbTyaUng1ByUwZctah5YYeyWa2p6CMpmVjg96LDD3cSN3",
  "key8": "MkXrX7pJWTc4Nhrqis8x5gv4yvuKHEQZKKQmpuSyDQzHiX3m5tKBgJdwWnyGAYhkwVBKTLN6tSkGEYPMcqgfzAZ",
  "key9": "2AP24s8oktdD8zD9McKGvidkXFyxKjf1ehKPBwUDvEpexQK2nkfu9Zx23t1xbjJZmVGD4j9WQux6j37p7qGLDVvt",
  "key10": "61w9BRP6wPeVHnpdhruLuAw1KjDmRxegPoFP4r2Rzf3x8SpmhPnqaD62XH6YU2GkvAwRDLKb4sYNjkaVVPV4xXVw",
  "key11": "3YtUraYZErpnhaWx4etZVP4UzAtLHQBTQGjgzUQVNmLrQ1MjSuygVQk6qj2f3j31TEWZGWB9bBuUxNRJWNxA6Gdk",
  "key12": "46SXASUVMfL62HtZSRYNv1iCq5R76QsaomLoym6ifpHVx8GyuFgyVMqEYtJtQKkNUf45D4ecrs2QK8Wr6PcdVAEN",
  "key13": "4CB6fqQJ19v9AKZQNN9VJYefaDEHH1nQ6nzUVUEuEH4NtFrzCerfc9PdKJJed2mR8BemWJv3gDSPuLRp6ngFpJ9y",
  "key14": "66tWYYVTjocd9MVg8bCr85u48xQSDnMAKZyzoAnA1SGntktkHV5UUwp3noBdg96t4b3yAGZKfdVwChv6gqdMruDL",
  "key15": "kUmGYrJ6GxPhZd2pUSJXEDEyau457BMZhFunEkFvNTgfjG6RTLRSx1pK6uS33aPRkpbLujyjPkH2ty3XyuZHoar",
  "key16": "2EQbV47pDCNimY9cBvsri9spRpSnU9jq5GJyewSNYRxCWVcYuRsxgSkP5MxZKozR2yDY3nezRWqAYnYCqeiwfeFU",
  "key17": "P73Mxx1EUPQ6M2WqRPUAuNUdxzM7itQvkJTpiB7XhvnrwhYeGGrbaWDn2Ao8LY683pSwyHRWbHe3Sa6pGQSwj5j",
  "key18": "5k8ykydKCEc8CELn14qrSyq9UnSWpJub5WPCAd9cgNcbFaYERXQEiX27yvoUkbXZ34mrXwaBccAj4WhjsizRgExY",
  "key19": "DqHrfpadT63X8QkqWnNudJSoPVDXQsDdBxAD7LuD47mxMm1DUxb96Bv34gnKxzhb6dAwYFqUySg2noBvyPeW52b",
  "key20": "22V8s2Z28NRJ542w5UmZREequY7vktmcvg7Tygxb3fZyF7yxhy22x3mFMKrsqyhqdoednzGhsvL4VPbXK6Yzyhmc",
  "key21": "3eqL4ENxAG8fgBD7PrSuUWdnq1m9wn2psQfiYeL9CtLVsyERtb3q1DC2CYzHjbx2YiVcKFmfi7M94NYGMaFHtcXi",
  "key22": "3SEmrzb233H4L1erk4t67JCo99hh7rnoFQyFA6HiPiK5ENYmozio8sBW9Q8dLKuLScx9vDfgioMbdSQ72Wv8FjEX",
  "key23": "3V9gfTke5bzsvrFFPbEAb6uzu7cUPRNem8aqSfY9EXNMiHrUKrf2sQhi2X3Su6b1MPMRBztrUAA1gf7FUhPYyfEj",
  "key24": "4HsrUtvNysjSDDKNy943M17LWiPAAXXdJpKd5JsnGdE7RSTwCEHSxe1bmcU4oN5wc67PUAPHNsB9PpRDpa4MzwMC",
  "key25": "2Acif7QSDRAgo6DGSfuWqkjJCHa9TmLMscLSTA8hFhtSJbbcreWsfMQbonmfYzt7Sx34FSPBTyUw4FCaMmvAx2Vk",
  "key26": "3v5BesMPdNPXipJiamr25AFcoFUDx7F5ijGhEunL8BM2XC2GMVe4gPjdugH67knnsKSVg6K4o5uZAczWGHWMWJZa",
  "key27": "7uunc32M45AbXA5W6BeVHgFpSwoC7y7dKLB64YEmMtnVnSFYZ1CgkvVbbpqNMY6mUxnV7CFJjQCRrTWjC72SeXk"
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
