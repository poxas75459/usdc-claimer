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
    "Lwt7ybAkUnFi8pgVS1DaDFKZGtpy3ucrckdHRgsZHeoZnVdX3DEL45BXKJH8SfhgHpoXsU1ccntkwqmYhwAg6h4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFLa7tHG1UuTMiszFhkrjz4affJhnTv3XehXoYysM1JeMJrkhM63Bwz74f6teyPUnhDxj5LTk5xu6ET7rthMSpQ",
  "key1": "2uR3pRa9PcT8ZvXATMC42i2x86UYftqJpo1Eku9LPhh9exmAdFZzLVsrp65ZAcUu5qoHpmRNCvkbMAhRspeYGZKG",
  "key2": "3mxRxNqE8HRjbMthhtzTccGLZqzUQGixTuTyvwpYuiBbGa5KAc6VnhVbuDbhQt9fNcwGkez9dmYDFcQhyh2VKJrK",
  "key3": "668EvdMUbRkU6gzVhetR7vYHiysqK98MPZfHpYMB1usYQxwqAFvWc3p5GQu7tyq8mW28riv3AunfqLWLJJitKKnq",
  "key4": "27SBXfx1Bcj59Ju1qS1cLbsR9UC1SVS3jD4jYcXLbDFWLCbq2oiMwgpbZDBzNDbMsaTVCzSySgswkVfHpo5hAZK8",
  "key5": "3HfiySzXr4Mi4sv2m8MR7H7U3J42htcu2RtgqtikMT9U5vj3PRSKoVLooURt2THM9JqJYz1myYMsvrRJXuupeQqC",
  "key6": "3eg7PuQhDaYhKCgdbNUuaFpFnEBou2XAvnbsRhr2DX9JqGDH8NiXnfpcrEZvrounek9hkks1CoErWQNQsXtn3j64",
  "key7": "5ZSoRXAzLu6TDvzBgu2KGrDTR7TdytsbY8Xxtz9w5hKqMn4XTYs9ng6u8wiTtYHBSU6AFcTTUqHH9vckp5pKUb5h",
  "key8": "38PmY9yqNewpiAGn6NVRw3pm5fGwqa3TMvb6m22UJkX2vJVcWPpY87ehHFeiXExNg337M84G3hbhBnePd61Jbj13",
  "key9": "5RmDgZDueVYCm7ioPk8A5ewhSVb3nQX3amW5dtyWR4gzNCMA9VNGyLK6uCMDr2DekZRLJRzDhQ27huxPAL63QrNR",
  "key10": "2N66SzC2xkaJm9XWyFd9cUVAVNwmhTf9VRbcuAQtxn6mof9pFWx4sfGxFkirHamRJytWHKJUHFatFHgjT71e5ruJ",
  "key11": "5wuxPBmz9537P7bhpbocrmMZHcnscQUvE191b7jvtiFU2MP1nc5aSgnkC5W7y4gAsFVFv6NnzMTxV7tgSau77nb7",
  "key12": "Tn5xTnjNwZEioa6ShERKWj5av7jmz9T7ribMg5wASoC9dTDNZiPqdimzaKXjapKPMcSq4cBVYYjCafv83944zGo",
  "key13": "62v9WfCG3wycQkgeRyi5AYMWqC7gzzecCj7J4mjiqEsJ8uDaCofBRUqruYJqS5RUS3n5eVKCQvr669G3aW8zo4Xw",
  "key14": "3NbdZt1ga9JLEN66uh2iVsM9hTUWMgXRG6v3uFvuqHpkzSguZNwkWZtz3BmX8xnFBj9VWmkZYMbnwzU6FQcPX3Cf",
  "key15": "2nTds4Z3VfweTv9j9LiPRNS6TXb7gSbCaC1XCEpTYbH1qHkEqStVLoAuTkX9gLXZkN3sXkGTPSEGbePzJw4zfygZ",
  "key16": "4vyQqWi7Awa5vBsrgi9inoJR9pbzWrm8MDL1ziJmXk8KxN9zHk6GuLmV6Ko2orcKcCebjZuDWp23MqNGnr9X5keX",
  "key17": "2QJtLnhiz99kHWxtEXrAof39GjUoj3Drk2xpoU45zJpoNy6e2frfzDSozMRjVsZs19oVnYsehWDqETSUuDmRzCNf",
  "key18": "2ehrscJdu4yvLvQjxB1FheCPd9EPots8yNAf6ztY4uojtbNvkBrGmodAkp77ShEQ6b4uVeyQYTFW4byEjN2UqgqR",
  "key19": "44Ljy3rvAp5EQnmBVUJj2YxYRB5uTFmuVVkJhSpxthEzHKHionBbwmgso7dmSxrVH6XWxRb8PVTDimEYgnsXyQUC",
  "key20": "4PJvBDWJoFvtYy8QsL9oKQRGev1zDWqRBhJ9scbWaFUeUoDwDgz9U2Ck38TYPBMyQv43UiodzaGmFr2G22jgJD1p",
  "key21": "tP2V7NrnNQ7vTR78fMY2nNeLvsTZ8rqSLyDxgy4fetnRFTeLsQnkZXxzzrESkdRjuRZAagiiPgLLNLpbksgf1v2",
  "key22": "66fMBcQ4Xkk2bbEwoygv1hRaW3EPYXKXecvb558Sd3HeDxptzYYg69zdeYzPxfZodPBDTbJPEYE6y3BdQTuK4aey",
  "key23": "SgMuDm1EMYrokuWF6H3yYwPKK2qbi8AREB4ADq9TKTkGHCZ3DqU6K7yQjDgi12UmdDtwZsnuyMGa26K7TaRp3gr",
  "key24": "aiMm2NQHgyvAxQJDGwFydDsqT7oLzRMXGRbKYBEHgxEbS1HgJ2CmYfUNn3rY9mg394wQUmJWqbuGoWqYMyXPaXz"
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
