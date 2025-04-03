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
    "4beZh1YygdkpErq3F4BZuE827mUYTYc4Bz6kgEGuvhcSxt8KJFQWvrhqhLLjnp1KGjAUDF3XiZRkTkD9xpNpz1L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oo8xD8GFaZPNA8DpWxuWTo6Wqyz7nC4Sd6UzQmkLEGZzAr8G4eKgmy6MAPTbMHFHmvuJSn9nZ83KeELLQibdBBZ",
  "key1": "2BWHzotpQV12mHsEUEAQDUk4uZ3BRu4mXfsZFG6n5q2jnkxK6HXHtu7DGsKb8dCu2Xfxk2UQH2gQsPDncrDH9NJc",
  "key2": "4QpgwC6KLKoc2EF8kKNAt94YfnfrS5wyk62t4bfxSFtHnSRGaxfEFCxgf1hs2CKWKgKbszXCR8QoarkwSKZwfZ9g",
  "key3": "3SeoUFYrLpvBBwztebRm9gwxuec2N3mokLPyoJbhT6ELH7dWQnWixk68Y6DAtkJdsuDLnzBYrFhetvSkewHVcwQE",
  "key4": "4BMoHE6JZuTQT3Bg1Fvb4axgCJzbF6ZzNpjaUBsGQvzumjN7m3LmmsrYHAH6azEDYWad2UWnm2ZvtQo1QwrnSpZN",
  "key5": "rtq2u4uo5sjBArbXzhDQSzru4TMyQ1Kzar64nzs6vKCh7vJKcSx4CgWZgEnnq4GFJUgm48XVRCXPiC4xummoXQs",
  "key6": "5fJE3z1pM1YG5z3wAKx54R5eBBUuvG8jPW5V2tkFPfNbHo8VcFMdsMxEk5tGM228Yd8Hn5zzdhjDRwxaLrVHZxGP",
  "key7": "Lsnh8ogmC1zoEHiXFW4GhR5MvDpTdvEMyum3G7nC4Cpo1f5KXzzNoqmrJRioXLhj25tWNHsNB7NZfDhxrQJhXe5",
  "key8": "KhM5jDjd26NC5LKLXgrsisCisLoqRF9JttUmfcQ8EmvvbAF3Q5VuCZy8io2tBjqZNWPPrzrKwmob1FivegBb4EV",
  "key9": "4b3CByHqiN6tipHnAkLNvHPRdQM5SgiCyjYuwqRq2HJviQQtoG9TDvMPdx8vkTnNFEJzXLHhuPeJNX9QzonynrLf",
  "key10": "ovtBqtBqCS5PSJAeJSKEPMJe6W4TqrGXgNpvVzEGL6vnbPU9PEHhQQedxC78JgB1X5KAN7GjmCeCnfrJPnfXe5V",
  "key11": "4uE6Tj71EMKXqYZbupZJ1XfWK2ULBEn1H77aYLNqDEm7SyDqzeyaCGq6S2398r8VMpHKYmvT46dhqDV5DagJw94P",
  "key12": "5fKHjokvMDbnTCcCVyY2F71GcZEdoTAmVHJhaCjiaBT5zBeRVYXaskZK9YJ5eyKiTxU3TYCL5Ci7Qwmi8S73s1qT",
  "key13": "rzPManADZXdjSRNU3cC9kQC31H7wJBfbg4dCHTKmANG9h5GSGMn2D5aH8NYEZdbaVraypDnVnvPMw57EB9Rqnso",
  "key14": "5Gr7qj2a5dC96CTTHyKbkqvAXBninYC2tPXmVNyg2bcV8jPzhaEWNfi7eJxHsfV1aCDmyLrzyscm2jXhzoEf9Y7g",
  "key15": "XTcFvW73PQ5dro5iWRHrkKtJKXWSsgXhWYdrjC16PUHsxWdHsTDufkG5de2bd47BxEGG3SyHfqg3erBmr4ngWG8",
  "key16": "41gs6tM9ZdwfkBp7VgtfCgheM9jY7tpp4NydLTP4LjMXftbYCN1qUAngiim2FW45Cxxn3TzLWTW4gw2DfESDTXyj",
  "key17": "3dcPsUZB9A9KAFfkMxEXHwtD3aaSFNwefXADNBTfDsF7u6cG2CHvfxq9cpmhBzGjuvpTFJZ5CLupEWMtCVA7tq2m",
  "key18": "2wCvQ52ageFXAB2XSdEfsZHZrtepMq3QH2rS5kDe7LQsdLxEuJ7XhM8PvBFeEPukkenBZy2j1XA1UQJUB9WBQkPe",
  "key19": "44C6pCqneRNHUM24awjRbHazAb6NJ2Q9hgg9gyMccrCXDdjRdxZkcy3rxG1UgGAfE3DY1B8zhayNdkunJCnoXDwy",
  "key20": "574NERr5jdFcp2BfVzdRQ1zL2d9gXXuS6kw6doWM1qYHySgNBPr1QV8Wtdp9rrbcJo72QJi2Qfmz49nwNQWwKanp",
  "key21": "4vnPmkPVpe2UXKXs553r2fXT6u86eckkRqpChm4w6dbKk8zPGHgkuYARTnj5CvGwxjPp7hxF6MBMTCY1fTgsopxD",
  "key22": "5z8kC37quxcHZmG27BrTiVoJMDyp7daocSEwfubsQgZ3p72buwyBAGcSCviRg9TChep5E4EdHLcAX7R4EyfJH2Pp",
  "key23": "kkQCUhexnERz5ipjYiDp6o3VKpeRJa1Wi5TsPLxNAbcxskn5c9UunyM6V3Nok5myn2dBF6gWQX1ixXHwFg68tPU",
  "key24": "9x8Dv1KJEzVAng6TCdC5xjk7efJhQBafwSTWauqH8yYZFBnj4CN62yJpmaz2NQuBNcMEsAbvTHTnfUUvkAKHSoz",
  "key25": "4SwW2646gtQdCjbjWEx8LbQq1n8y2qcjmTToXh6bk2mvYzxjKeTsnjrayo4ZZ6oXQ4D2KpT463Mp6R8vQdiLJfoo"
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
