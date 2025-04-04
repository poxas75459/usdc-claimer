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
    "2dL4Qak7Y59Jhjr2D1Wa6dCH4YdWVavr4fyLDLk5JRpKrnYNgJBb6ZUqqLfaZA8o1pJ92wba7hRkpDeP5jeL6oyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5ge3M5YKFgmZ2HpPVfjzvSgWMZFep1DHyWux5pgFes22ajxaCapiBCN91oA8jLwuw9dKpJQmZreVroHBYpQeoy",
  "key1": "eLcdXsP72SYrydtuYjRKvhnxxkxx5fM49q15ChdjEZ2FGydNcecN3UXq72EgLEhZYXPjRASBWq8Hu91FMK7tVAf",
  "key2": "43Btutaqys7A9PAU6cPkuTFgS2HVZj2oiCNpqSXWN3QHPc3wN2TffJKFrnBYWwSzrXx3NgxjwTi8jXob2hmGsUFu",
  "key3": "7qezFNsQrpN87aPtE26qw3zKZLGa8EaBwrG57Z4ytmZBQ6gur6i1yQ8rJDpvhp4ZryxY4w3qudxbUzg5sgUZm1N",
  "key4": "4MeN6iy4hGHkXdVaE4cMKBWwrenXLA1btDQLwxFusePvRAVRng4Nmzzm76w3iE9nZ6Vs2wXASyB891xvWEFWqrgQ",
  "key5": "tP611Pk9myNpzrnPmenaVqj5BkMxbHZXfhzvNV7um2vP5tF4EunQrCz9n3tZvLwWQRWKx9g384xYVLponq2FnfT",
  "key6": "2JxwbS1fQBZgsieqa7ZRGm2qj1gfAYB8KreFzNuuhLhuXrPkSPnHgfUuKrCN6mYk3cVwgEMH2YV6zWEJeF4tHPJX",
  "key7": "DchdWYSYLQXxrQmio5d6BDtYXt2fuG1y6GNRTBdvkXCx4LUdRqcGLGYEXPr72rrydufqineuNqJgLmQGncFyAkQ",
  "key8": "4eHukAuN4BCvdXEFt9RGuzytv2bAoxKHeTr8o3WBkQHgHACJkmFqwD7G1rmy4j5rJmpvSDJ1M7ZrcaTZjcB92oVE",
  "key9": "4rPz5dsAWoDKzLTERCf4pKXNK9oSac1E4dawEPJazsXJbG8sJ2ZnYhiELXTwbPN9ix6Tc5JyywZkaMGy3gvkDX7d",
  "key10": "45EAZ3xFVwQquB5DC5frLwQR3yVUDZhDDE6ToBSWqN9AwkyE7GFTnqbo6pwVF8UsRiAQvdPMbF2mV6wTa9oNGWZE",
  "key11": "5wef7adviJjSusAQGNCBjhcXDkUNLnw9nQeobtJHfowDwvSVFHYP6dEzUfixP5ACbt572N8pVvPDuQ41Youn1pMe",
  "key12": "2CMDA8DuLrZFimrkrvJtn9neXuyhz2c3xvmXkKvRHCyzEYfFJe5qTDZx6mm6zuvTfcmbfUDQQwjVebhCcT9rxDuv",
  "key13": "A1qCNvqaEUfRjqiajUmEyDEY85pU85Rd4ZEvA1p3RNxuLzF9YCCGSywUNjVEKbtxVwbYBd7CDhB55BY84MsxwpR",
  "key14": "4gLoMNqUyntwBBXDGTTSPeHi45DatH8TKWxhEwP2LZG4gSsy335DGABN8Z26jMiv8BiFeYyfougPSVvooJkAf8bs",
  "key15": "3jd21YyySk5qxdw9jRCyZXyYVnwwGL1mrR1wkBm29SGdyyuFoLZ5TTXmwToGRzoN48oURM8JtHZKqazfzcKTYYZv",
  "key16": "2DrXbDUcxMoPibo7DB46xEzigimstZC3ThxNFn3MmcxZ8KGEbQyv7GtGCFEmqmVUuvAGs46MMvzyLMMqmRz1Ddiu",
  "key17": "2Eddyv8Qs8gZJ9fqgSrMs3jqUNSPqbPQFYx99VJnDBgHqTY5KAf6DzrwRSQx18GByNEjckHjuQdDZX5nWqHobA7Q",
  "key18": "3CquGYBtLwbjz8Fy8MMDhtuKA9FGPXt99XGwVEaxJhrifW7zAQ1y7C8hzooSh1HG2MubxNL8Nkb5wFNK6XNUuMA5",
  "key19": "aN1SZQjYJd9MZ9DGmStKzAmmEDMG4x1uKpa2xAUEbqVn9bZDuJdU3nnvog3Yj7cZzm3Bg32E9q14h4ALHPn6fs4",
  "key20": "362UpANU4RQcLRMZMMHvZoYX1MK6kDRRJiP6mLsLUvHfxbCv2ThUeLDeAYA12eFuJbMnVbjAzfrdxHSTH5NURGH7",
  "key21": "24tbz7PDKizyGbBc4jkL6b8nvsHDQmm44Cj8EW1JbMNgFb93TUVEovGsm3v687GPMyUjbKhSrcni1BnSUSKYsZvL",
  "key22": "2dghjQ6wsyNsU4nR2C9BX56rqD2YBXwAtr3CiA8VTuKsKZnLnf7AfR8V9roVrs8iKRXLgMVz1K3xfzMTwfPiPTxq",
  "key23": "2Z1DRWqNbBoyHCfoGL4sREDzYxYUcg2NDW4nGT2KiQd8F8X8ZmeGxCN31Q8HGGNHcbMNTTwfdHmDc8KQbzp539oj",
  "key24": "2ckrAB7V35EXbZjWuduCJcckqoaBLhFdu3xisebNtdqzAUsmrJebemgbtUSiqPCwikBoT7pFPmuqQh7wbpg9cYW7"
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
