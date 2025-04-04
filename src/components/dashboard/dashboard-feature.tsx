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
    "2KNoibUTgswYkrqLpk6feR8eQi76k3neV8TX8BQwnaF67dBKg3jWpgUrtE8zKZ3aqjFtZW7HurAyagJdXzPM2s9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5ghJ8gxhAn3WDecsVSjSpAU3ya2J4pxcZASzNbGFKthucWcrPz7vkdtkGkDLTNjnXmuEVXoQrWYeYPaY3GfTfR",
  "key1": "4EXMSiazAFdfhtyPENsaxyT6S6WwBqcDjKMgFw2C8V1pjdfXaYfuDAY4j7wjwNJpXw5Rmk3nodpuMpBKomXqea7X",
  "key2": "4Zgjtufmvg9ppNA97NvVKUChg35JdMzF1DQySV1PXfgj15Bms7sVhv4EmwoukfqvRYenAw6SQ4KmsUwLK8uJbd4d",
  "key3": "4Bj3G3Z3CszaqDWWrfhAFXQQ2qJv5DFQgMqTEoty9R3eGQYznVfpEuWDbCqHbbC3rhBuVCTdVy4zjr8deERR93jw",
  "key4": "xPN6ggSEg91t1dLdJTadzUzznckRBh97Ueb182CM3bCJ7WGo4WC9y4hgL6kvPRfZVZGoZ37DYdmrCMzV1qxnSAj",
  "key5": "5CuUgqPhGMFJ8HA8LWuhizPT4nwakpL4QGbCTMkfMSgDdKJivdaNiLPDrbH8Kck51gtXFsg3DcVys3oQYofwVpsp",
  "key6": "429pScKf5D3GUHfYwWfghPsGgQtT6McVeA8YjoJqoobmEFQ1daRaj4YKKi43iBNV5h34eNay7JVSzwq6aH7hfPVf",
  "key7": "3Y1dbe5QcrsuQufymJ9vX9o7Kf4Uj3sbZCfdzvXWPw6H3uWb9t4cFg5Hb2pHDVxz4nvfcZHYaEvP43XmDyy4RE16",
  "key8": "Wukhuh8cTeXi7p7Fm3AQDDtrpVDmJKCkr65qWHvDK5iq5UjWVk65JtePTz1nsP4Z8FXULnwLEU4KFP3pxMku3Ap",
  "key9": "5ik66XP47xnUVpUSMePMWhfNNFLQp2RX1MHo4EprZePkb5rDyzp9XdjQAYGJ7qaoTuV6j4DiXfM127MGhwXHkz4v",
  "key10": "2dBnC7Z11aFbtWQon5NkrQAESEHMtheCSf8KRfvrUu4W8TXi75fpWnvF5P7sZYCDvfdpsfU7CAq7tfGkVtrP8eoG",
  "key11": "2qPSpuN4dGqfH4uVTDpP9h6zNmwaVZgykWb8XyHPmWyEm5LjnYZqdEGS6Tvxx9KoTeRuY8ZqJc3cuf333XLcyCKB",
  "key12": "8hi48QwKYwzhbp7d6dSkq9nuXCdiXLde67cwbR7xifRkvdbkS51Gq5fRnmhx7AdLDt6g4aUrfmfj1WxU4rFRxg9",
  "key13": "3LFhUmuDZmSXUC4aNqoE1NsjqHCEzA9tDmsruy1rkBKAT9dYVQRtLA5xyxKeyETu2R9hzbPNqW97A2FKUhQgxdo9",
  "key14": "5R4XqeHs6RxVayhjpDJ6dLMwBBzXS1nNUX11r2WLX6CZsYBzF1n6W8UbKhqtMPTNTb9bqk5U1T1d5eE3mzGhuhH7",
  "key15": "2x5Fj4wuW2QbbGE5kYwZpEeXfpQ1UwXXFDXjya1Bthu7ytpj1mZ8j4vtDpxnNkP794xfpSdFXUG38QMvQJ8uBMMB",
  "key16": "2nhnS5dcYfT5bCerzd5YQqkUN5QfKfd4nCaTrkZtKv76i3WDNRTJGF571GA6kfVmYcbfvtCWbH7U76WH2HohLXZo",
  "key17": "DRFW7uhdMRoH7wgFoxpAmhyFNZtMNUQRhuxoW1YptoPZjEtbRdR2DBPCbRCRdCnEi8xbjbKc9WSU1CmXuvY4EEQ",
  "key18": "4SDxSgL2Et9ta9aN5QzmTxPyizKVcDZQPv6YxVgCbtKzM5b7GdKggZhNn7sdovuqcq766sDpmLBj96ZoCp1ta8Le",
  "key19": "3m13odHrxnwY5ab4hWrr3cM1gDruwXQw1WZ1EHUssdGVAEfjEwYmfdJ2ri8GuM8b6dU8wwhVgsKAPMHS7eQZry5b",
  "key20": "67UckZrANqP57A6cHdk54BU7r8epWXM4bC5Womzu7chr3zzhRmZMpNXLg8NqdzwHEEDRTs9iLviehEi6KDqA2Jjf",
  "key21": "4zsrpvs9MBQaoDEt1FCh3kRXUL4oogTCm9SxCUSXSmcGyYpiKc4Hr5njHmjz6ZtbYSo2CEau6WpSCWv6TYnWBi7r",
  "key22": "3tZxwhxd2SwXJ8vKS1PDE79viU37Qpnqy96SZ6fifaaXPuHcHR3VxXiv1zaKVecLi6WYPrcDZhTGDFEiakfCX54k",
  "key23": "AVKUBXG7DMVyFJt27tmk2aifuT12ag6bb2i99hJUZNnP4CC8g7anW7irYLxdjfWn6qc5CX9DZm5yzB3BastZveX",
  "key24": "7263Bx17L6juazxQB7RDz5j1cDQFwH5rxpKhZfhMDohy322DPQthK5K5AzdEHf23um7HEfM8M3QiFdcYn8tMAEh",
  "key25": "4cariREUJoR8FnF7irz5aY3p4rqxzf1gjAsc9usDHoJkHN6kVazVFP6YEcTAUY8Dq1vuQbjU7vbtsUqZDmyp7cpW"
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
