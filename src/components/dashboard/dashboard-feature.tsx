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
    "jLpZEAVwUvFxsEN5bMtbBtkV8Rur8M5rFApCw9BThaEFcrUvnRP3d9dnDkK9kRFfNbLU1VDXRzy317PfWqmDNux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVJRbFDseVJdu2H44xXRCBAUhXWdXkhmrbMZbNdeLX5QeNrTfFPuJgzU8caJaWZaBhdhZUvmJyPyZdfjMm8MGjW",
  "key1": "5AxLj9X443QnQygrhmBo9qRKiYZ8tcUmKu2fz3fPd1dPFWQJJAThiXnK9YjZXdxSjJSTPWY7ojdteFNrETLTFRf2",
  "key2": "ie7Lb1LrxVVUU7m5bHLKHxb6JEwXtviZKdAnK3VSsbToBAgpJL3MydDU2pckReKtBvYgZKRKbswzhr6fNcVVg9U",
  "key3": "3WmHZTgYqNwTy61C58KFV6Mp8gaNZuYunwEu5gLiVnTfCp4AyasSohVyLJmWZXeyHQEmi18S34Wz6D7LFAKYLfDU",
  "key4": "3f3V4X6Nr8SoC6PyugS3U3wyB5RyLFFn3cxBUwsAdmChvXUaUJMPj8JvYMN4DUZ8JUjpKNWNyP2LLQR8UVw7Qs2q",
  "key5": "46ZLCnFBrTesry9DwUXyTxaRvFib1nyQ8U5iYfddTsNr8p7r9oSTCbPnw8RfizhQrKjaQ6i3W3oUWhYkqHvvvXxj",
  "key6": "628ACEeSERWXyVMyDpmGff3Ma6dMsXxCs9TphHo4iK9q5N7wP56ZnqRRXo7wAwuT5xVTpv8zLdz6akaMwnpWKFDz",
  "key7": "3gUWxcFyizuTEoNgaJ1o5YsvS477LgY7hBEtFrSxHf7qqAUzP6zhgEcRpwT3Q33CReTaRpUX64TiCMfnonEwKn7",
  "key8": "42JS43qDNzjA1YyjDVy5nCLGwLoddAXptBNzjGK4rTNaB5i7vSAHX7XBnxukhkrq7nixcGjLbzHjpMspaH9SiMJE",
  "key9": "4PjKqF1XQm2EWG3G4PqwJmABa2aoPbTNzHusN4fc3dWhzqzHaptdgJE7uJvHpBEq73GYJWtQeLQ1Rqxw3CHW6Gwa",
  "key10": "4TAso1KvA13StUxLUrVd73pSkD99diznXGjEw25aozxZpxkty2dcuvEdtotPk31oEXDb5SBo2rbzeff1imnsXPDk",
  "key11": "5rmwvQPgJSfete9JyERzxJXX6pUiKJdWeKiyibapLvHX3QBCaaqRo3Kr2fwmvgHwvA7X38C362ak5xnS68BidMBJ",
  "key12": "4KAoYBa4szDSVMcvEtnYKPFpCAc2CyzdoM5Y66d3WZPDk6JXVWb4C6CVHYWU2KCATNDVEhgM2kpNePNxb3wSc7Vv",
  "key13": "5UU59R6Fb6TXiuM1zL75HBJ3meqKWp7h1dbpEA6AMSoejZRFbtn16M6jVdGdi8ygHsJEeMB4b1TkG3UuK3zDfDcK",
  "key14": "2ReUre3akagwS9XKuV3KyYU1aHTx4w8rSNdYSwiJ5W1H1d4z6FNxscbsHJxWKHe1nPbQjWfrv5yAgbvjnoX4Eixf",
  "key15": "4X5PQgPtZrvmb1L1ES2dZQ95wFxMKHUvyrSufivhsv2wshHQZmdzcGK9rBhtdD8DXzkHzRXHtbnmXaJd72rALifM",
  "key16": "ki3ib2hhMX124j2KuM9ZVYYdT2Euh4cZmmLQHdxgAZhWbnQ1951BGeM2BrsqKWfPJ3eZHkJPp7RYgpNcPwaQJRX",
  "key17": "oQ4bCmGqgHvMzZZUZ5pivVC4MFSk1ieNXk3UvpSmeoY2nq7LpcMRsPeAbyzKMPXMxjPh3xEC4VQ7bosknPHcjBS",
  "key18": "4vgTEUNJZgHGszkTEBTBNrQa3P2LdtZDktiHQjZt3gAxRVq2Hhpza2Vowo8w9LffjXzcm3KjrnTY5arKVGvK69Hh",
  "key19": "29qNuwfXHL24dGC4xM6wQQs6gb4aMpgNbxkYnCc3ugp6YaYxMMpphQDVwJvhdvMtprrCQuiEiGQNk6gT94evQMJN",
  "key20": "4RM6UBbpgpmsQZZy367197uDJx7StVNuqrG81qXyMfu68iptxYqzEXXGukqLnuyd5V8HWWBJMrY1SUzHNamif54V",
  "key21": "3ivzyTUKNynofgeDuW6azVeb3MusJBGx3sTCLS4og1uQNnANakFEaRV1s2414zxwntg8XPudPTYjRebh4CEYxNjf",
  "key22": "3FkuqShcw5sKnqkcj4Qscy4kQyntDpr3aQnmy63pxV1qc4NmZRAshE3toiEEsLmMpkcnDTMswE1QjKvnA8MZ6dLc",
  "key23": "5jzExGEP5sboHeKjsGPJZ6KKoGHMi2z4gYT41ixmpuEi7cZ9CzA5yrdugzcFfiCnPF1FStYaA2mBaMRUhT9d7xEQ",
  "key24": "yZJyq9PM6Uen3UGAyucn5DN7jLSapREmaCQbcdSvviRHdgdsP2oSEbcDxa5j3jGbczzcQoypTjobP4B1NEePuS7",
  "key25": "2CAYvZ83YZZu6ixMYCroQ2mhEysH9VHRHHDf361yJs1wg29d9ttj8gdKfxuNTcjP2vSC1WjL8YWgeXZVs2KfmLbp",
  "key26": "5cJEYStXzT9AsdEDq7mxQ5kkN36JL3mUXkcCfMWmUzdztnCgKLcb8n9qiz14woMYYdWJbx7YGGkXW2LrJ6UExPxU",
  "key27": "5GZZ6V3XbFf8KLfBGfKcRFTjCYp2M8ERebs6WNHcECrLxkiVJaZxu87jE8kcTPjLm6dN1x1vXHPMJ1h1Q9ADq3sh",
  "key28": "2Rp9R2jGZMb4FKc4KVg4SbnetjCAUbEcUQpYGQMA5oVA7KZpxYAe2ndEiwHEhgTB2fM41fbnRsijeWd3XzcZRT8L",
  "key29": "sRC6kPfMGKfg7WFQ3sQmgSBy2N99PZVP6TQyaJxnDnUXMzn8tddv4PqBjsFgQwWNgCr4nAuj1De87bGsDc4mDna",
  "key30": "3YHVyj52ZYrQ6Xt8JeWcaNUreG4gBfenZfY64wCft4G67SEpCYV6oKup8Gs1WByYq4QsYrR984tpk5AFf2VjtPxF",
  "key31": "2oS9rVdwLXeRqeHsRsWUv5ogNMZ6SoXo19FF9JPbuxgJnKS3D1WRfsTVHiuWjNTPEYeS3ZHZvR1YwVVToywM8LoS",
  "key32": "7qDvPx563Ap4KVcV8PUrL7sqzaNFT4BFULTmctpBVo7hyD4FnNwZF6WhGSifgVKDcjwNc9eNC2jiW8poXo3c5cv",
  "key33": "5vzYZ1MTwi5sKnRZxCFMyzJRopa9ms4CX9qpEzeFA6tWUi92L1mbpAfTMJ9NrVha8pn4txwRz2RhqcRj1n6z9wLo",
  "key34": "46mBz2q8AdSprnnUZRzABuHPuVosNKb4C3uNsovJanMhM9cRsqFFRvZGe9JL9Yy1ztxC9eS3qcYNhxqdghw4176m",
  "key35": "464kB6Gc1i4twiG5WK8HF8x4jjt21FQYauJd8gANBmcKaaymqNp6wQC9oMLxkMMgdDjmmjFkYiCLCguuHypqEtEK",
  "key36": "5pfBvvtYmt9u4Z5TidS56tga9F44Kdi6fivNUnDPKRdErbVZZHmerQeDK36qoL7wJGmH9KvP8gBZMvFTEusaLPTr",
  "key37": "2CbuSFPRA4oLr3UK5UedfvaXniZ5VJHef4oJJuLz4CRJ7cmtqBJKauhYWZ8U63Ae2Mb3ZfV9uaqwn1S7cyewtmfs"
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
