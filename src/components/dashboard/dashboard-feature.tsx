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
    "66XPhCv22kmrvkSC4xN7Y3FMntx9cArYdwj4uh5CWXuxJcumg4VasyHCoyAhLiuYHkW6AV99xjUpBk1xtZbgTqof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQjDE5Fw7irGFLkAXdFxPn6tV3YsFThNq56ac8jynh8wTTxCoyJo3pauTDLgTiZHjLhpeNXZarW5eeioFxCQJ6i",
  "key1": "4PTVazU8LsrwhqLqm3ZrmZASaHFa5bw1hd4femLHZjUQiDKd1Car1xfAxKJTdPyH4NRyZ4UowXtE7ud2kcLjHWDV",
  "key2": "44rPsQQFhmcPtrggc6Ze4qhESRq8tUcBqkCgfbNkAgzukn8Vpucn22HzNtnxLtMsBDYUh9DdEisFpj4CUCfzxxRg",
  "key3": "5UWWujSbMBkknz8Dotg2nW2czvLLQumHxd7kRW65moKWwsnUiGAEtcw1gmLjRPP4auGBBPwZ77G4eAmGdxxYXXMK",
  "key4": "rqBsKQHYcqa1hpJJuhm3mPZAbnigVFDrzX5KvYkaJqN19iVoFiJhDYcm1WmuUxg71KHshAVVLDUzPt3TUgtKahS",
  "key5": "3c53z5a9NVhzuE35oSRn4LEHjq4So7gtV42t9Nb29yKJVsSiAJRBRB9sjsB5houMJdwjv87kCSeKZu32RBbxwUam",
  "key6": "4fqmHsGLLPiWUXmjydP4Um4ZFp1a4hA9S8PoK84eQHbEsCFG2wt7i7b5g1MzMQ4eWGpezazWQXaJoBETFoLLMog2",
  "key7": "DzXGA4zA9S4pihhrBjK6i5eTsQaRkcRoiYK411DXCgMMV7HaequVDVjJnNdjCmiircdnqyFWHBhtAcwhPzzJt4s",
  "key8": "WESrfYf7qbYdiVPcyiz5CFV2L2WEs5HWxTfeL5eUBz1AJaEU4MYmLp7cpfQf8KPXVAPbi57v5PZPcmTZ4f7dvLp",
  "key9": "2Qnw1nAHY1vTxsWD7NazxRpYFQm6a527kRKMViMrohVvTic5Y3CXCZDpxjkCuzQByXnemXMG45e21E8FGjrUe4Hb",
  "key10": "3BxKmAiPo9CTiSSu6ZjqiwjB9qkLY6ycmmVjbhgVk8zEKTPUbfVawg8n7CTg1xkQnfqyQkKZ8UtPVs7zLM9rPHmS",
  "key11": "2xoHBzDxwrY4YJEtSPLfQj3L8sxFp5LcJYrD31M49tWzfaKnbxHpDtd3KUjjdxXuYJyAp8psnW5kDb6riAJ7baYU",
  "key12": "2bVPzp45Ney8mSGbu7H44oN7ioTNBn875CZsLA6MTY6XYTAtBX8cybDJusdbSVimiiiGQnPkUevUCgPWbmdqewqV",
  "key13": "4Zi5UxyWUeiqZ7QY9AQMZsYJps9yM9ZocJ6LXADUskF6f8qB9WrDRAf1LA2tMADhpQ1nQ5hsk3EkoUBBRJEApUT9",
  "key14": "367hh4RtwujkvDjyznHBFPnexdyqTPe8MFFw4NUdZqFgJkmMCqMehamtW4mHWX4FpxToVkXRe2nFFztHpiDeXwsP",
  "key15": "4m1kFjMjX6aZrsTwTvfSEQ9eL9YBkmyAjExFtd7fsTPz975WPAhWvie1xczDUMBDmHQZKEJF7ywnB7HrhRJpG5cw",
  "key16": "TewUBvribYgL3TYrpojLuqcdiibwzDkBVXSay2m2JkNDmQQHUk8AgKsTmiKwSA5Cp6RKa4jBEM9f7rb4vNMgz2h",
  "key17": "47kxnQdxAWxyMhq2dJu4rj4m6cDPAEEn9QF5oE3Ec5UWSGYe5M9mT6bwmQ9hPEMbJ1XSaY6i3AjZyxn6aoGV5CKn",
  "key18": "2Dr22hE4Ay4sNfDqq64LcGCZPH74DkP3A5oU3Uw2s87fEy7jXKSqsAuD2CBrhyaGAVReWZjVCtFZYztovPQxABrs",
  "key19": "RxDezbusBWDVboMLAkGcnQVqK89xXzFvobmivrXUM1QoTCV9vxe2UpBkzpfVZnV2FTGRRyHu5VtEQaBUVdGSMEr",
  "key20": "ic81hp8xBMkch5vbk5dAa3jJbWe46MmgNavtak9PgnnnAz8BBqyABipwwTu1WQd2T1i6PHN5VQXMHJKbpLkJEka",
  "key21": "57nVRQFyM5B1aF5YmrNPXN7LGUGMo9wsMK9CrChhwHRKjJFCfTFnKzTmHHHTKLfV5pJbZFLoewUVeEHa2unvqi4e",
  "key22": "4nN8TJaS6qq9a2KSgx2DA8HQsJqkBRQKmHt1pkHN7XGvkKXt6b6TpkERKWwuLJ3bNbLv8zDperKy5ZxfHsJc2C8y",
  "key23": "42v6CTuKnuUyj8LNbJ9gDSufNhCsXjehaDgJXQuFMALuofeuFYYqjB7UMPNHVmFfsncJ5At1wMCqQjv78nUgVUwe",
  "key24": "23YEetcd7JtLPS6SzMhrQSqZ5mUgWki3Z8w16jJ4kvBbhXXB6JM2WjryVJaMukmzHX8uu7UrDbn9CSTDZGJff1BK",
  "key25": "5tdT22gUejhKFnnKbXMaZbENW6t3aCweLZFsAfjgKCzyK3cMcyf2whUd7FHC8NmTeYEWtBcBSJoQwoo5rPz9tvuQ",
  "key26": "5qRz4fP1k6F8sTtToDjrYn3qg7cGXSXfG2dBvXQmxBXQMEfWqbVp9n2DqRJNdGSsT6Fhz1LUfsgroZ3qVDFdTpQQ",
  "key27": "2g22x98gpyKbn7JrwTMpWRjMbL1e5BtpMk6XiewgHTq78RocoX6qBRfghcqoSC8zQtkwjQeu8GgJX3KJvcv7TkWb",
  "key28": "mjLDfTk4SQnJpnwtphn569g6Pk78s9opyt7CToWi2moaY9phFGN3uWutBvuiNmcNYQoBi7pTssJ4DrDFVPPN8vV",
  "key29": "4tqBPsQ9ZVDXnNixNrQdtfdUA2cyUQXzAxN95sfxNdBmfkLLUZiVhag8b3DjHFZTCGBCoogZyWLzbMSDq9fw9NqS",
  "key30": "4YHaDV16MESMVDseZA3T9pSJ2rESReXPgTEeLoMEF1KbyChguPo17MJinZdomdaQxTNfq9KwcjmkwhAGJPUQu5JK",
  "key31": "gd5FPXjyyvu3zVUPxM4w8TsufCbUkMbKswK51xe73tNj7Z7mZKLPVZYLyE44trUKeyHFDtG3y4wDJRMWcUTRBzd",
  "key32": "61qBDdvyKKQ2XNv2d9uGAafTCiKUoVb2uvvvE6ZtcbszCUPp5QUmtMxQf1bNicFVvwfL26FjWRAr5wfPddQeTHwf",
  "key33": "4zYVxGfh9vM7cKUt6pEyzenEJay91xLRGZqWDUTXGvZn8BQU6prDGbZbDCFZ5Adazksc9nKP6EMZJ5T7nqPH9Pw5",
  "key34": "2id1W1bZQBKLmbrAxURU1tczd5f8a47qAdb8XcCbmPufFF8f2rRz6zpFozHHBJHYVEQ3NpvqYqcYkFHSNmYFGidK",
  "key35": "3FWjudqB1MH8AnCwY9n24RwEiNWRsREmGEM9Du1aWwZsJ4mbBFB7BATnHKXHZzrkb7ogcUANMv799n1SMXxrCwdy",
  "key36": "T5JsmfjokE28S5kZFJnsaxiNeG8txnXndx9E6iR4mJxQ8XaHXeG1WgE5K91jcJoMdHpzx4BSfVo1vDLq26Gcmz5",
  "key37": "pWx47FNGodw3BSSohqMgeVyL9MPXTcNA7xXZCR99WvtQgLUa4S7TmTVJtTkvikURH4GKv13QK39i8diaQu5VwGQ"
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
