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
    "RkqsezMtZpS6HC6KUbDm6dN9BtuT7bbaBh3KUcjJozNSjArLQQ7kpb6LWGdo6byeY4DWGcSK7VY2s3s4PaPDbzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LKL2Ct87vQQnF6Vh1iC4PebAq5HZ6XW7zwUxxmvCE5HCd1S7eAavvjn6NoWvTiobhx1TjTeAPmVXfWBCCLg9zHg",
  "key1": "2CR2mmDvHKr4kCo7sL78VwSY41wUnpK233VXG8uzEuMVfTzqZZ4iLSHcQpowJAXq3uWMYiUkKs42BDepwEdaAT7e",
  "key2": "2rfeAgJvM8PntnG8aahwAkbZqubRsePoLXZbnw1VTbE6jFaTtN3NQunrjxsgyYGoRpBzQcNSZx6hmtcgQft9Ljuf",
  "key3": "66EQGcgb4ogtBmNiLAtBv42P17DpPCT2thARnpmaDHXydRSA6JxmeK4FQYECxeWAkeVAGS9N84AKVD6wsDWzvuP",
  "key4": "33gJQ7qH8KQ6Y4tKqVsgyT2U331w7EMBNZdWosXQybgZeD1ZnXU5nTrWpbUrEjo6AfcLphHAXchGJmDTZ1pSMCF4",
  "key5": "5A811iXtCLMrngACdDQJ6UBiVt9zbo9uUfuFRAa3F7D6Pwn4HMefubftchVzoPenWoQDcXwT7SK1GKXDtwASmrA7",
  "key6": "3678R1MSkJrumfemkgapGybFJ2r9u6RAJ9zvuW86omU5vQyNHjWjLhk9u8zNyyDVP5sijg9xHwaYf1B83iGJBzsc",
  "key7": "4hzwACQg1gSrDAgsq2W25KHx8F31xLPHMa9hcrNJMNneNTEyAkYwAoeTo58DxLCa7395FFjCWXDu9orJ27FScgp9",
  "key8": "5tZVXYWFT3uky9XbEwEH7HFooabgYrH996xt7sp5ZLuGUXM1Pw5qLQopd33XomoQU3mDop23qnpoA2tBKSvCyXx4",
  "key9": "fTCb6Ms4Z7QKHvDMAMNpNqtEv5BZRBXfZ7HkSGLdHYCQd6bhTBdyRpVANLaSbvxBVWY2Smxf4ZrVdzfkPXjT7LL",
  "key10": "3uL6smc7xRqAmndgVWV3EjNjSBUY53di6kHRqRnKECQRF1ViUU3GjvGJmbbQae7Uzp6euo5HZqP4dYDrirFA9jY4",
  "key11": "qAQ8i52kH75848NrBe6rxgoyd3YnLZ1DG6QdTzD2aXs6AXptBx1AEBjsdnrJJnYTUeBmcqM4SxsuAQuP5wywrLz",
  "key12": "5HpvjaB2i9mtY3SJrc6saeuzGiRTkoH7fHauDZcHMXdqk4g48R9VvFQ28qpapfiiXk4EeNELj4KwwhQg8WMpvnvN",
  "key13": "4vP9D96mo1pv17fXdZfmvHAmTpvotDob4vDfBvGXFg1VP6JArGZZtNdSWW1MCJHkzXACnBtCPYjbZ1XFNRjwcQUb",
  "key14": "2RkrC7rCreR7axdQf1NW6iDTWjjrcB88hBxbocCZSodUE3sDRQHtSSorftkcpnr6om5sDGBt18Ce3uCKPMJkgb6r",
  "key15": "3Js9SFTK5hubGA8zqJTuJgZh1ANHazCndGAPjwyY3wdBHC6Ca4APHrjrkUpGbHg5HTU51ucwXPD8QAxHHBbQdsft",
  "key16": "4RMhPQSgpGbAUBwNdpSUYsnJu41rPD5FPeHgxEktCCWgi3u4YAp51aR7qzMY43cdhMDA99qnv2q1PJDu121vffox",
  "key17": "QaCi2wDYFFLPYgDCkmHrW8LmEZuVwB1KddGP1vks3WHyc6qSoiNWPW7qjgUUFBHV6Bq62xbLQeC1uH2e3HkuNuf",
  "key18": "5tsDupmeb6a6sa5eGHkEAddabpaq2hCnVPkPMxVKKuDhRrH5j7yp2TtNgosy8pyJNAqRoBgueh3372BvKB3Kg7wY",
  "key19": "3EibeAeLQKG3bARWJrLpHDqwZUhNehxj68JWNoWSU24by7jbr2FyxoMj2aXhwjL48JKWwPL4UHWmpLxhqRvj7WTo",
  "key20": "4iacuiQzuRcrDKdPDSC3DiEJWDdQ4Rpiz7EeXNsmxsC76QcA8uxia2e8aUyEPMzfe7eVbDhrqS8t2BV7g3Vc2EVx",
  "key21": "2JB1968K2scNhiXoZJgTbBuAbmvHeBRqFRQ541k7UXnUzaknk1KY52ZFDrnUhvjD4UAdXdEKy1uCsiN3TPjdRX2C",
  "key22": "488wSfiyLZpC7BWbBs3KaW8v4W4Pnycbrmyk5c6CAQgGoQ22okgERLbaZQi4bjHQ1JBnpAgKeGubyDbajWTUbpdf",
  "key23": "3PfWzdh22cDjN7wGU1RjMsyJwfJnPrTLoWEiB1Yuh3D7LCyjzNzSChRh1FYoFjPANKXrKrBvnZokVSYLRHfmTsKN",
  "key24": "i9mratEBNKSMTtubTKmT1KuMsUwE1T39hKV9b6CkEtqmcBbmqJEb1aECzBj3kWrvQUAYa6tzYpsrxNmbR7ksG4G",
  "key25": "2rsFJEfe3wVKXk8MjhuDrPbJ8xCMCvfPzQWc4nLxy75sVJg4GzYfQD661GTUZqZGCtJtxPeSncg5F5FsCAW4xBXm",
  "key26": "3tLZSyWUgLDzf1TXF8y8qHi3yvRM2wDZogWceE2PqVMLHwR1f7ym4AbyA7q2ynMBtacJ1DVxs6sqN64hAJ4UMT17",
  "key27": "39hJoNu8PKtxnJ2qQ1akPYtauWfVFwG8y2PCNdQQMVpDiTsjFLj9WNuKsZS8Ak4dGanDmHwkLJ7mL22iidfaQS5w",
  "key28": "v45erN7By5KZD6WQctKY7kBFTdRBbL1D4F2fXYS1J7ewkv68qf9kdFo9c2hj3B6ti5z6x8nGAU4YMQCtzgQ8HFe",
  "key29": "2seyLkdpKdEScpPDfwQoNuaZL8Xv5bxxTd82XCCrEE4Uh1K8egsk9fDUbEsjsx1HZjenqtYxVQ43CRsmPB3R1jTV",
  "key30": "44zYEsVq74fKJyfeGxWSgjp8e4GCgZ1AZ91BVWtL8Ri1FnQ2WqrXu99bJYTtgjz1UcDLFnPB3N56X5VZb3j6vFYd",
  "key31": "4yVZ9NVbCymExycif2iNdmwzzQQnJh8eYTXEuR512EewvqD3WogqthCGQ9mMJGAhQPr7jKYnEygBD6FGgjWWbePx",
  "key32": "5Cb7i4GD2nDCdcZWYsjs5mSh3B6uYUSsikPEF356qUS5yZfFQDY3gp5mkwy7bLojQZykfy4QNchFfzvsxNRP7QMG",
  "key33": "zeZfCx8ztvac9ZPG6bgxHF1g6nUvQGeaeYtEeZam553QVPEtr3McHAYviytTCN3Kzcehq2nU3avithg2xkxbzte"
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
