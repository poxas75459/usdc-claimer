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
    "nRd3EzcRmDdaZ74H7nuLKjbtcpdDXwXAvPDbbgKReaTYAFwY7EfXv5tZwMbPsPYVuVueNJSwJf5WbNzJAbrKkyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EKQYfGuWgyjBkinVHVCm3pVUZ4BgNojJrCCjd5K8mCx7MyUz1pfHEhBWuLo58p4NGPgfgQBCfd16UkwWE5ueQ2",
  "key1": "5RyGLMPHDj2PBsvNmmLV2QtXcxLZ1HhzXv5Rfki92rZQANM7xwwtEqeEQ2jtXL7ao3Ugr6NTuP7Rm46U9EgZA3JD",
  "key2": "4LzMUFdgPY4fEEffgtN8EUurSi121vtzyWg6sFntX2mgfiqDiBvdUzRb6MKV38JUJJZ5maed8qRbdbJzJkFPiAaS",
  "key3": "2KtEQGVixetSYdw1yb3wJ6txDnUzweZ57NdHBMZsoWsd5he4fbnhvatLvwi46y1a9ZPLcC5c9fRACyGidpAZBGem",
  "key4": "5qbRoATGF1QcXXfFMPi8JU834rgFMba1zKEpwjeUj14oof3rxKg9z2xVPffJhCRAgJwJB2W5SUFq3EXuLhuM4MAU",
  "key5": "5cisR5DTGUe6Zi4rRTytqujUs9pkqcHFDR3a5ZdqFEfEh5yMJ2iS75L4Cc5aW5sHoaB7Ws4TFKqNMMSqVW6d78g6",
  "key6": "2zJ6thNLNnP1Bqboh1rQf48PgDzeaR3dmcfcc2wLBnYcRZWDBjQ1oWRd6FoMGRkDhabJvZUwHWDG8ELHxLcQaJ1",
  "key7": "3MKKdr2oNJX1SNASSipVwW11MNeaRCCDnHbk8NsHmehpiERSe86BuTQ1oECmEEBVxJhsjnS5rQSdkuD9hx3TZQsz",
  "key8": "3cpyHieu36c2SBmDUHrSEgKn5JWexVLApzcGUVGPioe1rHvEMG1zSCZX7bcV13S5wGdxsUjTPkgvacKNBxVmSk4B",
  "key9": "2RgFfN96nUQZWtsNuS2HoZd6N7KeNS6jHpQi3e6FsdMxJnepEpzBGp8FiaPg2xN1PLmjq2uwgRZgL1f7rh9kUrgz",
  "key10": "5ffTPtwvoSakEZENbEuJezPyjcrjcj6ab6d5XhAWWZvwYRy6XB6wSy37TZQiy4cv2T7bWxeUSF1tnbdG3G48tTg4",
  "key11": "67Hp3Mp9KxEFeCwj3jQjLYP868a8WUANwSGqAovQvFywBf5MYNtnwtub2iFYsVqPrY5pN4Ms7LKVJ76roAMi8vyV",
  "key12": "3UidsuframPyfKVG2o5RbQrcbzNV6PsT1cbjn6fX8qZcA26CXPD7wrZs8x2t2dvtx2Yr6ywhtPdFgENxqjAhman8",
  "key13": "64QjBfhez2hzZTibe6DVeNAwxVbPcXd5FkQMBZ2546292mz9hyWyxwJekSGcdQoQcohuhetMJJ5b3omdrKcp7waU",
  "key14": "2G1xCatxWpBVgxZ5CfofZhRy2qXUkQATibJoeuJWMWQwHe1ewLiZQsU5xepRNYUsdSFk9HDEk76eYGT3pA9MHcTF",
  "key15": "2MF5UaEXT6oAmuqAUb1ho6oWjL7wQT96ieteeXKtgLXAPXEWHWWCbK5cWX9pbhhyGWmdqKDmKya6oSubPZe5W8gR",
  "key16": "oVsvWivytR3GXxwz8gtENkLDsK8peVjEdhG2PzYEpJvQgrVf38czZnxMw3ejtVjn4H7Du6u9sboPBLTi38RHfTL",
  "key17": "tGLhx6JJv6C1ZxNnwv5RBaHKGPtB2AGk4YhN3A7jY2br8zgyrWC1XxPbBBRdURUAJncgkt3ouYm9u4YnMAbAjs6",
  "key18": "2dLt5qT8jexBPBMbXP55vaMJve8cgSLvfDnWVfJrvgmAkgc2XQ3cVBqJhbwZ7isc1MaC1eukCgtVxya3MQmSvMSE",
  "key19": "3kpA4KDG9Kfrh22fmEe3nEV848nhzz6BFpNabkbJ3d6DHZe4r53RauWiNZu9MRstJQCEZHcBTdYTASE7MUKk4evs",
  "key20": "4szxpuC95SFoAcinsEMvBDw5A16f638sYU8qAoa7nGcJK4wFCWFVDh4WB6qRW5RVWPrbh2y72akqC5aPV2UwESv3",
  "key21": "45A8XXb3qrJAdZaRhq3W8G1yZvp8YR1LoopsX82qRTCtVVQAf75EfhECExbtigbZayBcHa5Y59tEUq3ACf4F41on",
  "key22": "5RYeq4r8iFn9ALcbxod6B8BPyhXGrYmVbc3qAo8FbLkQQ82tCXb1uR4CENsnEjgb6szFd2g7JNtYdzq3oU6hnvWV",
  "key23": "2pNy7SP9CWWBYxGf3dBSwz5aorZLYhgjDZshQ28trZtfZn1qJHAfQwN8KJJF7Z3E8BrKLmRzotvvWjGEDQVPaqQv",
  "key24": "4WTpjAxXonbikfqsyGFMdjmMNbYw3wU2EURUkFQoHw1cQmDjfYAGggDNFxC3UVszsP6k9RKKxbtNz7oAt9GAncsw",
  "key25": "4tuuz5JrXCcoDsaLU4WCbuZKa6ymfhMYqdqjWZH8FKk798gqGFNvmMHWvJPqfkHxKM6A6sPPjyHw2MhYsJBjre6B",
  "key26": "5xVjbGuSts2TExPHGdatHq4jJmZnZxRrsG1RmCSUAPA1RzuP8HFJnFazRT7Kx51kWgZRPgNqQUNb27tZQHPdbkht",
  "key27": "3tNABGBNBjPbHv4g58tr4x8bT4sjcZo5fEQ1AVqTNPawoS7EkGZbrZfDbJeJxkPQniHkc5N41vHKJg89vSBccyYA",
  "key28": "511joJkyse5ghqDt8CBCNhFmr5cJCDJ5MVSfBHnwenANtWkE4so9yaVCTs7BYVudPXaw5BoeWF2B2UHQeMFdC9qa",
  "key29": "52HnrWeukw24HqtXVX8gEDSVTKaaAkXy2a1V4YoksYQ5QAfMHq47aAF6GuKmgkDqib2CrF3yV2yjkbCKBUutew7f",
  "key30": "4TueEZfth4Z7K4JDxuBqrLsWpwa5G2F4eVPz8hdauxfA1Et2iP7m61Up7pXtoeHLSFiwhHqEfCXESoPWXcdAdywX"
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
