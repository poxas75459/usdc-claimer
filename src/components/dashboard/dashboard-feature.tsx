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
    "2kBhuuQtLyr1zReCYqoXQjzSZQ1cJmQg4AMT5uFbcyDoK63Zm48oMhL4DreS6tzAoHFMFbQvcrV4Fbr32Zgiz8k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsCKLCfmbWgvcw2ccVFdsSsR3efTDX1841pJKzhZSt87XfFCKAhHo7aV7EKxTq8Hw98xUJbRdf8dwU5U9eQ9kFC",
  "key1": "4TqmL8ABUnBL72BRdoU3nsjes2mhdFyr5ajsdtcmSeqgCChD53L32ezGA9ABfEJmaqWe5TfLNCJFee6CsUsnag6Y",
  "key2": "9FykyLqpTCRurup2czieNJY5USaXKp4Ao5r73PGfJQmQf3E3gQYfoY71szpjHepvEhqHVXmKSeaRseREbSAyW8A",
  "key3": "2nHyJhfZnFZg3y4WLpyS9ZTzCsQKtZiMygC9dBHxshv3i7g8poU6RiqZASwuei6EiHQ1JLT24xQGTioC4kgKMc3a",
  "key4": "5YscsLAxBMNUJPHeRGyxLZU1FpEyLxmr1GAgSMDYDjCVed5VUz7cFfuBCAC4uJoRzSw6ubHBMvKLph4rqUFdqDx4",
  "key5": "4fkub2557yfiCoYYEMFxcKh3zQY62hDaAUf1BrXFT5ZXT4ouDdqgHyaevN13U95ALH5qJBSH6ywUZgRJLJQ1bBh8",
  "key6": "2bTFYPzRyj6GwXu6T6p3LoTeW1Jku4LzLiqJ6hwWTGNs4Mr3mPTpbggeaNw3UNmdXa8NbVj9TpsLtBeo7ASpTvYG",
  "key7": "4M3D2w5NiSnYzJk2pPKyq6SxcChPW1jyVjSnK9Afjz9Xxez7z6fFmbCezVcQf8H5KTv52ELpbiA4q343aNGe1cMH",
  "key8": "5rDxUDrfVCgUDx11Dx5JvNZZ4UzUvV4n6cDMH1Eqvq6bBkKtcqx6sa61BttGUCJ3T9vdQTpfLBXM6GkQtvjHEuuD",
  "key9": "2MswxmjB9M7AWEUPwPGkHKuUT2ACkDWoo9CCZzNGcwhQsfc8DiVracJAD7VU9twd9xMK9tZkCUgpqza6gWy9iJEP",
  "key10": "3SCtpRLuqNyAGzChsURWUzx89ztV23FARzUvUmwL2MxPPFCn63XU22ngg3JBwW6wRz3AgeRWRrt4UTWfQYjZxauQ",
  "key11": "3Xizs1wUG9YbPSCjbwdYebn3zSJzfcFVpxyKsYBxvwCYYAYdYMUzihmiF8iCsydp7nDJgCuEbQyKf5kAfCTi5tVT",
  "key12": "499gz3SkukMGryim1qKs6bdJsQsFy87T7e6RVJEM6BJYJjZ1VSL29YtdqBbDBTyqUwQTR1MdhGjJhsDdkduT7EeC",
  "key13": "27z8r31v9JfW4XyQJ3TxNTut8AByubZXUAMrpzxAaD6ysdw42nMhwAxyC8Qam5FMsnjQpp9wuqDRj1kqp2sZXMoj",
  "key14": "3Mp195YxGsNDhPSytohycDMBarYqV69zFuGXz3j2gPow3dUfV1CTZYTnknf75zUA5D9yD32USESAjJTCRAFmGF5b",
  "key15": "3SrMSPdF1TU5W5RhKaEmKwoQxmXPivUb7MRPzU8epuESmmKiD5vp8b7SMuQtX7LyQmTTDidN5Bhi2ZhbD5jUr1DL",
  "key16": "4Xe6UAnBcqo6guzbKGmuRdKRY6rNQymADQgGDpdpTM74YmnqZUVCwPApVy7WqSDiaYaAy9z5CrHJH1sy5DR1jczj",
  "key17": "sCgRXQny2naHupfjEHMWLJ97538N7tidEVc5Y6zwhU5siQ2us9EdquYi35aUVwrUBR1eopeWt7xdQ8aWK8JozCz",
  "key18": "rtEEogniEZ7jxXJr2NRzmTsJsKBP5FFi2rzZHf1Q6kzdhyN2sqxKHyLKc9TnYZKauoWJbUMPYwhGfZSS7Ln3wtb",
  "key19": "5SG5Y7g4qEJecCFBYaApv61AUcAcirDf1m1FKnE1aWJvK8L3Vt2wdGyjzpcfAJFn6Acuy3zrDwQxjA4hcBrdPWzh",
  "key20": "29DCQs7wdXiHrhSQUAjAsG8kF73tkXFEYSkPTq7bmqsnZUvTTW5GnySUKetqngVntSTViK6zmXyELqLDxFYvvWkf",
  "key21": "2NCPDyuem9AifuFThC5PfaTtYfhDBHF73hJyEqaoh1gsyzKEAx9jdR9fZhbTYGCG7VJLpUTwymfc6wyXQZuUzveA",
  "key22": "DqgviodKqTKAyNAizaynKdNiiiz7UYqnp71XTMnzwRypGtRwDwpzdNxfyRFWVV37ZetKoAYwdioiL6YkzSGrHav",
  "key23": "qaUqvoTvN7wTVhcvuoSy4FLTM6j5FfvTyfhSS4gb9whZJKwkGZgTfr7129B7w9YyrmFjnADXuJce3pegQP3nmTM",
  "key24": "1LmXNwpK8K8gRYa31xSPXN3Jg7Cq8vpD1Y6Jyi4GmacYPJuGnuN7V45qfutS3iqAnVdh5JSck7ZkR15PwA61hkZ",
  "key25": "49KKbwCr1hP8dFZCsTgeHmmZMfWvQS6YqSGAQWgpkooRtsDZV4oCnhTZHU7WoXfwz5kMK1yToXUgNJZRjqwTNxx3",
  "key26": "5uDbGG9Cxrpj7p4DY9GT9vUkkaXe4AFK65SHw5wupYBiSeTTwhnXJF69QzxbHNEE4t3Na3bkLHHiZmE47KMUe8rz",
  "key27": "2jpXch1yaq5RCmLwpBVhcYSKWGz6v21DCxVgVkLnqmUKHuprCscF5yHh6bJbAyHe6X9UWzDstr5MF2UTcTsC8vyH"
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
