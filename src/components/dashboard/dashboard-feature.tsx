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
    "yFjAPHAbTbS1VTwNRSdqaauRC3Q54kTGMjqLstxiKfEnTQ6WbPjaxn4cRYb8LcH1LqftjS8fEQhemzg71vE13qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9XbhSsa3xBe5gqTmMVcdrRZiq4m3kyekv1svXoNRaTEEFoy9KUXnvt75ir9hezF1x7NHv1bTxY9AJeQLPHrE13",
  "key1": "2BMBQYvYDPnwe6SArPd1cpJafVqnf6xkEeL1drei4zufYENRJ1Cayg5HVGe2PjYqyNCnFh6swtgi8MYCY8jxtaC8",
  "key2": "3955wWPD64hWZJkayLqGXLJsSfx3TQ1tvMMyskPhjWfJLD3Ur2J5Wy1tyVkd5SJ179jm5aJvFg9jMKfL7yuShKTF",
  "key3": "4SHraKgTM9BJib9w7WEypAHq3UMx7DBWp39E9Aq9pG41fUqzcN8RLgWsBNtCd75W6iWcsWiAbhaMBTWxhNWxztkp",
  "key4": "nS3T5VBMoqpKY2c7VasLzd423hizNzZ1hDsMQQSk1BpQZiwZ3obJ5gSGyTM3gBaC4qRKj4bg8JMJSymp3tDw7pJ",
  "key5": "4w8fMQ7ARDKtdH5mwLfABqEqTqe97whdmrhuVXjwCxJGRec5LnYpkw3Z4VezJR3CPgMkLf2yGTXzchQAwmFz5ifm",
  "key6": "CYiykNb3Q9K26twmkXVrYMeJXRp813v4k4ACQ2Gfv9qLmfd7Mz85EpN6zR296qo8wJxTsmhu1KsrR1Bp4JiB2Pn",
  "key7": "32YEcjFfY8gWQV6P3u6HHZPkC7d9P83fEkUeL64cgGKJSCgKGZ6CA5hFLidWvGAyT77eSe1LB5gLBdrDjaqsnf3a",
  "key8": "24eUs58wTVYxzgnHU185kbn6r2Lh6RDDRRPC8BvDNrbrjhC3UUGU9yy2QUnYq67FF4CMaLQCjnYAPLVnMMKNmnn7",
  "key9": "3uikH9k425saLp2qJGCt1DmAriVqXZPruVuzbnz3daKYHLw9U6fZnn9ZDz4nqWQCffk4zE9FpGATvzsV7At2HDyk",
  "key10": "28ecayYLaZiuq8doC5eSKK9572iorjmNB8LxfSb8CQGBLs2Lw2qofwgYrxsD2WpYB1VBSNeSbj24Rq71P1t2T8na",
  "key11": "RBYEDFnv8JSAptXLqQ1j4oWKAcTHbJ9uwCA7afUkS5p9du7nXMKGPMjYzRohSsBRbCy3i6zz4i8LXjRk1jTU4X6",
  "key12": "28MGMYyXZvLh137pEeYsGU2w18N65znkhsuxc2i7KTzJNXZZGLtgkcL9oMPcrLSuke5M1QBNq9g7HqppdduBu9j6",
  "key13": "4xqBArXPNkqJHdtJj2LfioaLhT76hi8ppAt9otdQxcmpGrZLVfGHSX44qQ5QMDgM7uZbEVzNFnG24KDtDGUn4xAQ",
  "key14": "4jAoREYGyBTPLfYHPDMYuqaFEZPNYjX1fe2akXutMyZ7eCkphXkNRaDm9hmMHd6knRM3KMwRgLGGCcENCMS83J2Y",
  "key15": "3nNBa42mKmDsZifArBqzjcosm3pkvUzq1ZDssXTgEQwebQiu92HUPww6YRkx1dvuhbuBkw9Emt57byCG6uT4iojL",
  "key16": "75spv2uXVVjFV9qJ1XRk8hnYdDyp8BP5Px7mmdnMLtVnmaA2wXxmmg6M4dZY5opVqpHnUJ6CN2fEFdnVUktMT6c",
  "key17": "3KQseUiEfcatKMUH7Jniu5Aft3PWYC3CyXujB2CYxF45VVfbnGj73WuSMRFrqAgDxWzo1K2NpndBDQG7pAvzWHsb",
  "key18": "2SWacsUtQCSMm9VbvVjyyh4PHVSDrELr1gBrVMY1Dm65qYroCdWyTwy9Rga4T96iMyHKKj6eiciam79nYDSPAHwT",
  "key19": "5y7eTJiMKManhg7V3dC2npWjSqvwDbdjqx7Xe8Y88t99sRu9DxDSnKLGBjQMLygMPUfoFZdjBfYa6ypM7sXmDPkD",
  "key20": "5ajrTTNJmzLxX7ccQN1GAC1gPFXDCwXsbS1QGmJ7TD7fB6XzXYgkCCKG2TZNKguYBxTnCxCuuZR7oFdzfYv3bRp3",
  "key21": "3JiYbWdJ2apvonPzA7Lm2mX2SRjVSzvcDfo3xT1vQ4EgF9d2eqGS9kbXBwBsHhuf2k7NTqG545CjgjzWSvenYgSg",
  "key22": "3kgoKRbLdBxfveE5jyxbkggA7DuKsor6ivA3T3rbCppsrytcQhSW4dfPsP38sqnfb4JFcVhxwDGKdu2869ikv68Z",
  "key23": "2vbQNGp6mNa2m2sY5cH42J1aB99EFwZUizys9iDiykEyJLY9E7TewbueK5ziyukJTc3MBUUiqpbVjKPWZXzPXZR9",
  "key24": "5qddSXCX7rvZLMKutJFq5TqxFZAQYMv8cf1QbWXMNty1xpD1pisibpo8vmZUjR4UhoYTCYBxQ68cVyNiUs1RdRca",
  "key25": "4iK611ey4x2XcCaXBUoaHSJdxcxviqBrPeGyqoJXYu1JjRX8UfmZmkxySdwiyrYTu6BJ3AYtE9T7B1rLYfvLhCcB"
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
