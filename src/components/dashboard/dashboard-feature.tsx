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
    "NJoUWcbYEMEBASTKdvQadWjM42z99auM7zwh88tFqtbqVgQ3i9C1AQbWRi6WmiQdXocZLor4PAjcpTN6U5nZH8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDCayoEUBdFsFnp3YX2BjzQXVwmVy9gxD7ZcGnz9mk3cfQQm2sNcQ863p6Sx6eVie17m4ovmE2SV7CYmRf29q1y",
  "key1": "5TmQzo4Eha5vku3hCEZwiYrHMLUzZ6drXfHahzgLULFqTHFCPSdfQJsE51S32akhwpegXpeuQuVNchi55UZHFgCJ",
  "key2": "46h8N6hp1ayz9eRS4jq6Nqct165yWgx86QTNCxEwqXZyQeD7XqoyShD7i5qzXQtA4GC9UtM9E77LpJeRUJdeiRx2",
  "key3": "2iiJxnNKNcPgm5tzxh9zJfufuJgjMP5et7xdumgDwVDLvy7863KgyMeeeT5UrVHS29gRkTpESNW9W1uCBFE9f8g5",
  "key4": "5PZbcHHdSCeK8G48WQVXfgnwZft3XyaT8zjiFBqthEivkicP1WeYu5Fb99KNFeqJndT53PQyw55JDLLp9XBpbSzy",
  "key5": "3Fbg7CSUbDfdxoiuu3cgM1e8ve7n1RCg1fgAfBVpFEqzBJL6qR1opFZ45WMe2Kb8iGYGS4vLhjZavf7B9vLwzMLA",
  "key6": "Jijz9twfUzwRpUYcTxFBFsnR1QYw9UEwaPsZZJSy3SAYZb7YQCXiQboEKQnC9r7buPte8PtumtduZpDKRNHZSEu",
  "key7": "2pT6E6Xe1sdKdo2FyXTaAuMBdNYP4xYXRMyh2789QGVN2ym1wYxdjhTrqPMe1Mo1FiheKFSzYPLGAxJ7p28BZHz8",
  "key8": "5Fp16qcvRqtC49oxEJV7fkCnHae77RSQSbT7N3DRgifKRcuXikZTeVwJH9KMC4m2W8949AvaycCoXZbcqQ5pyE3R",
  "key9": "2zM1WZiBESWpAxDYmzMZqT8fhzCpY7KSJPkjusGe8djsf75fVVrc75R1bGx1yqZbmk6T7SMf6hX1uUBkgjg5zJ17",
  "key10": "2qSG2HfE1Y9JwaPM5YjCUsjBLqxPjhFhcSq1H1puTPCsAKaNETtpKw3Cht3AW2nrAx5jbWidF3174Jtr1Gkbz89i",
  "key11": "3ocgwwouRiMot1x8PTjTCtNVYaoe8aqf4kuqix6VyFQxuV9bky1hJkjRLtjtK6T1uwwtrArxS6qkM6VhV5V79SJv",
  "key12": "41RGEhD9WKtM7sRKMu9zpUY5jUnQRVxoq28V4j7N415gB5RyNkCTW7vmrFYtNebVa8WRa4Hpdgu8r9ycnbWHJ5dM",
  "key13": "2qWxHM5fHpKm98rj4nDWiBQK25HTk5JwodVusjnoUaVk2Kx6zrkN5XQWLtPrsDVMtatLxxWz5VGGCGM5SirZRwk1",
  "key14": "RgxD9wC8nxG3urwLeFnjTcpTUaHgLR8XsR99MK83tx7oNaiZ1rj3vtMnkf18eJrqwuRD761kzQq5yk8VYSVfikG",
  "key15": "4TmDZ7mq6Fg1wgUuPxnFhG1XSQCwRcouRST6K41jwvQL6YPB58yLtgogegofkR31JSKGgUmx9xUa9MqanAwcn4u2",
  "key16": "5AserFLvEv1gGU7r9ATuBgsdXBrhFYaoMkNFQynFdNEiqQ9xNoi4rKhiorZCL1QwoEksYg3FSW4ozGCxDnjpVy6S",
  "key17": "4NjA9M2sLkWaNoPvDLNeHcpt2uEtn8dPQ2ihH7p1ghR1spWEsCYGvdNTLUaMg4QQ5MmmzB1n2vYhgptHBFrDTnMA",
  "key18": "54V58yFjVBxRqRX3k52yXbvakCSKNyk9cUA1sxymx5xmTyZsMoWMUG7kh2GhZ2ohjdLcqpJvqAKg4PMHfssrb9dT",
  "key19": "BPzga6AArC8a6CtzrEXAodCCqSyqCTZiictNTzVyHD45Zq8tgsSw4JqjUyHf4BZasf48QkNfFsmm9qBkwDnsUZV",
  "key20": "38Cx6P4yuZRcFweaF11DEJGEZC7j5RLrGKCBfjCHobvTFfL78GNZ6XYMsKo2YUGBi2o1tQqq7QwRpqqqvNjY6LJP",
  "key21": "5rwnx4Eb2PHLqgWW2z2zANuyWkYaEosz4kSkHUYWRjCtnGoTmYD2WZWh2fdeiMHF7ukzsWPiwZrxqqm1wBNTMiTi",
  "key22": "4iTdbP8nBaeHoU4pneNH3nXYu7p3LwRG2UHKVxDJnq1L98u92WNqUFj3qtr2a2duuTAcFV6NKbanFGL5MhrMB9Dn",
  "key23": "4SK8ZRWwvRGHj3NEeUXxe7BkPnxNpsYWkY11839jBJ3aT6DKjy3hLxCksUTGAosmrpQG9BBHNyw7rHQ4pFbvymXh",
  "key24": "4fmuCmYAbGgRknjKHpiyCxQMLH99QxC3Mp76uzUgmehPXKy8v5kHeHjzfGyrn2PipKh2AoFtqSQb85UXWKVfK7y3"
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
