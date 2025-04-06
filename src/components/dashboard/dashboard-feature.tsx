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
    "3wi1QSFC7CWaBPFR74AhMB8vv44BiJdw2r47GACp9n4Ncu2zEhpfZSdWyWSNrEoEQ8QdqpGbWR5fyE6dUz5ovAp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvhffkSf7xqHJWsBdkVyaJjuhjMhGKRD8HXn5LHLp33mwYA18Ju5bRMceLT6kaREF9SHkqpVk1LnLw9cNAP5CHp",
  "key1": "5TgCPeS31u4BNh4zrVLa8Jesi95wZNCUcDq1Z2H3uZExSDjy1uC5EmzigMN2kws3SkDAv3buJZYh5zfs3LemtncY",
  "key2": "bUYJ6wEszAQjaX1qZTVL9CQAn2egQXeWcrKubvyZCmg6iWPVZiXNeD2es4FLwcBvfC5GCdT2BdTimReZqiFCQDS",
  "key3": "2YXvv2C1tgaAWFU45P3GwXJAB28qWa6otp2b6PPifXxZveAP1WT9xTwhRBLq7beVkwEEJdqk1xJFFZRmbrreJVVu",
  "key4": "3zBK7TBeAjDNL6j58QFAvL7mTF4vuLzcdvSpRwUPb8DoRF7BmLTy3YVpZzz3rfDf7jidAUvFLeTyxb4G5NztzfSh",
  "key5": "bDpqQFy8kNoSB4T7vRrLgXB9keZF7daWsj83G8ohSUkiUsBfo4NfZJHGsbP7MdXAnVhUvgdUghsWqiZ5cuqqSLm",
  "key6": "39uxsaHaQtAz3dr9GcZfYKVKNvnHu7xGNyjp6PpfmPuCCemoeDCTyR2HzijmEhNrc9sG2GjxehiiE88qnBncNbi1",
  "key7": "4pdQzvyc4MEopFSM1P5twQ565Z9NLhar9AyQLptEQCbbLBEVNS7eAqMMs4SEjw9SdH72b5Ayt7iivE5Do8Q1sq2a",
  "key8": "4qdpTyPEhz1maj2ygFUCyhV1SbBdCnPegbpKhQHRo7NmN5KEymmvTPtaqxsgoxGMWNHSnyJFijdpmW4jX5HRqNDn",
  "key9": "4txRMBGpt736Qpd9ppYC7Re3N1Q2fjQ4JMvtbSYWdPECVCKYRFS88modaTa1nTRUVJDokFmwZag3Fo4jj8uXPLdd",
  "key10": "43ZPTZdLe51htnJwXKZYaZmCsVH6ouVz3CTj6xMEWC5sWBQqQthGbf431TpCRoA7syV7H6j1f8FchyEFPZfEE34f",
  "key11": "5kw4axMvasas1E3hqYhy1who72pghuYeTRvovZgBTHLQB2gbEPaCLm4zALnsTWGn1yswZCxt43uQ3EH9Xcnn9mof",
  "key12": "3Cv1yzh1rCKzo8aQiK6RUi144BxzHptLwE9svoJgVktxGe2PKqy2m6LY5mCKgPUSMSyWwZMYAcPGUdFQPMhNpqsb",
  "key13": "2X1HFahj7gS2mKSd45VwgiHRQkxEYGMgWvpPNs4NnsRNf4H5UafRa1jfWYh4TWMPGuT5j7c25xox74yvaMp367Ti",
  "key14": "TkeSPkWPbefbpDqbnmDEq4vytZpRgCCSRJrSXhESeP7nSEf1DwHzy5LTxbohgmQ6KDGAjhV1mAGZCnQhP2maDi9",
  "key15": "4GBKeuQpXYN5oVbupgM5CzGZ5KRsQRv9jQGPSsUV7RbNtarP4vwgrTmDLdbsYv7FhrBUXBv28sW5ge9rjGk1f9oi",
  "key16": "5aT5umR3aJkWLSLteqf16Lu6839kHsKQRDE9ijVW16FkpcVAN6yKNTs7HjW4WCqrQ6KBrffGLnzsmYKP1jvqTG4k",
  "key17": "48hz8Mim4ErcRJYo3BymW3aBwUuhBPC6JdYzMGFsA168pnzxF9rHiyGr1UJE2kxZa8Z3iLuFAh5cGt9yyP3QgWtW",
  "key18": "21UHCQvn3MzfcU1zqBrmCxMYCDzTN15UdZEaDqT5m1SAMnGt1q7kn2cYtC39kbUYNAQVAsoLnW43DtuF3kbf3CzR",
  "key19": "5tELJhCqmamoXGxvgoL3ti1jtVSsQSP7EpQHgsmiXj8FUaGVGS2oaqyj99rDe67PCLdTGuqdZ7eiPhSEM333X5qU",
  "key20": "577jZ4GM9o2mkjdCEc1YaVABerAAQFtZH33yf7AisYdooDvZqaH1nXU8dxm9htKvTFQN8HQ8LCWBUWbZqBeem3ya",
  "key21": "2dmcU8pX3Ji8zSr8rHR7cA2wBtegTh3uBcHXDWBvM3wYsq2amPkMHdfTTLNzsU8ZAbVwiYxtwnrxaUN6VHwD2gvK",
  "key22": "LC87WnrUGw2WnhCZyQy8KcY6eAQMn13W4WWMqK4ipVQDgrRh61CG3x8rU3TVWvQUDt6mYYn24pS883AhFSLaWeU",
  "key23": "Ujx7t7o3b7ADQrWfT9jzYPHtQNs5R1KEdoeEU4A8bVPP5GNhkrwrCWKYMGtWCB6YzijBwEWKdqeGM3cugDhLQnu",
  "key24": "34aFmQuWGy48tiSMtPchYCdwdVRaBrbVV9WtAWVpZpDwqbZLwamzHfD4Cq7QcoxioxNnJe7F6NshK2iaAZBpB8Mt",
  "key25": "4XChpK3ue9uSb8MB6pbTwbDsbgafdAWckmkpqUQ6AqEmB3UwFNCHQDvzpo9svYzwFENgDYDBbqCZVXtFPEtvBp8m",
  "key26": "fL4n1s8YMY9zR34yrYADU8o8uFEJmsKDVojtNQcKLPPoxn6cx2kmrDcekRup3b4qmwxGD8FYr77x2HNJxNFDETo",
  "key27": "2L5wMK8GPm7kAjY6tmkgfbBvD8KcsYzxArUtLXBvxttgB9rv9wVtUPiEq4AGNSVqefyTThkUy8pdYs2KGdWD3RTq",
  "key28": "4at3yjJENrLhUkfZu3pSunE6Gm3y6wkj8Wj99sGnj9CUDoyeiWfwW7g5fMgujRtPpPevWzFibspYETmK5dv8jbm5",
  "key29": "2FaRjDKCzJAYwVuvt88wyeSP55JgUvVvzfZLpvipZ4MyRdzVhgCSSeXNmuJK3SGPDU5mtU7j9oFpmJFLP1FA14bi",
  "key30": "bDH3T2dSqQz2YpKfZTGss9h3XSzC5h6gnFDDZD9rVzwD3nX6MiFa2xCHuXW7sGKHQ9K6E6KgBuyugF6sGLbsRkq",
  "key31": "9rRKUeJ7s9i3xqELsfW1gQjjRMCnrGvrdgA2vutmX8WZ87q6MKgSAaEcUD6LUPiyYJvG4XqKX2SdWn4PL8evFHc",
  "key32": "5ijsVhoCSKHgSwvhC5JmrT3huTTPsUQA6CtVyR69AvriCp2grVBVLKdq1yM3dKykpmeG65cD2x88MSApSG8NPu53",
  "key33": "3f3UQqVwrFnoS3fG8brbevMQGgoTpgAkmnoaRzr78HMiMretAKeuxiKGLVWbRZomNRXup3SvQxRyMVQGHcDRWfD4",
  "key34": "2CpFk3SWrTjRzmBbkwo8MeFeHcrJ1QwDcYXMxDABzzdiGnUt5ySdzAgty8P47WK6Nu5GixhA3CAK7pAKiBrP7Zfv",
  "key35": "3nAPJrVMm4ury7rKzuZa6BcFfptU9niAfMRnr1oerEd7tv2JXfvV75SthPgYKSi8dQvpcZxasibMC6QRA6SPL43n",
  "key36": "3UidZ4CZe19ESXT3YBj8R1471QgkunrtFWHyJ2qgrRFNVd6Ypez3JXEw8Wrp4LgPxU4w3CBbuFt7FmpnfyGihVD5"
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
