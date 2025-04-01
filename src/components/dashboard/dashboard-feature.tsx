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
    "fEqwYKrnrgGqf7kmy7D6knTwuFP8nFNtkGxB3MPwCtrekE3nfZe5h9qYq4hbija4nLU9RAU4VhdY2Jsek2J5z1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgTCJVXnNWDvBUwDboq9xd141VmWtbjj4js4WyHW5QJjymQabwY33V5zmaZwDPAPKRWqnHCCuocSSp8vRuFm6PY",
  "key1": "5ihWtqJUxH8hp7CvM5635BFScRqxvJ6z7jyBjtj2WBYvdyi8JXqyNXy9vynE2GsmMvpgPPSEZzxYgbobxHnukHQP",
  "key2": "5aazKnqiT12ZoN6kjsScJCf2dPJcnFsNCVwkMJmDdPyudYkjThod7zpj4y8kU9uSYHMx8t9tjd4fnU1WdRuPRjbp",
  "key3": "4jVZ2Eyztttnd8YbDnZJD7peuw1C1dwiXPCVRKFBPGKhZK4mThDhJMvjhjd7tNCLtBen7ntbxdbode6FDWRpome3",
  "key4": "5XRpnfyRX8sCGV4E6fX6qQPBnt4bHBth4ZmJCtauHpERX5oeFYoPL1WMqozwaGgKxujptvCCntWkTF4MG2yUTd2v",
  "key5": "4ufk641oRTLM3MUpxa1AeEEsVShkmnD8ngEhW6WzVdv42exVF1RRrqVFEYoMEJuNbM9vt75gaHEC2TgSxUY96fEZ",
  "key6": "3yPZrY7JvrUWZLoMRvpfWcWbXiVgQJUjs7GPDznN3QsvmJ3RWGgbWDrn8KoSgJruSbPkG7A17mSGU7T6VamCjtvT",
  "key7": "23xWY1wzKcXq77HYYTefzURwcZTFuHDwVdUi4hoUvEZRvLomvHao64soboLj5JPRoE5qeieaVyriCxKmvYcH92Eu",
  "key8": "3zNDkWxsRPzHm8kVjBkEh8YgCFr64hzeivLM12RGiUAMEB1FWVkQWD8AcF94C7Wd6BWt2etJw66pnmRDtoBF8fC2",
  "key9": "gcReA9r7812TW2W7AtKDKTGfwyxb81QgQJnYgnkQgFQhye5LNc78CQesPPq1gMUb9A1zJekB6tpfe3HFgA7nidW",
  "key10": "hFdHCQWBg3VSrbf5CjVf8DtAaNvi51ZfHPFZHmJM6rDZn6niJPuTdxKCAqL6djVSWGJkKoZMQAKkgDeEZPmxWzw",
  "key11": "25F2z16pgLr5owXAEs34F8tcmAagbwQm59tn8qmCzLBZQw1PAvZNvvf8qxa7LZgBmiTekE8r4YZ1169vkEpP26a1",
  "key12": "3pYw6H9Ag97UbgxHUWu8wd1s89yEyHuJxaBnzDz1bRSCudGCbiRpztLPSu3DCiufEJW8aZCCZWpWBitN4in8GoRN",
  "key13": "4rGYAKqzSjCzNr29AspUWpumoH1Au4B7iisHQjjvVHH56gAYg5VX2zmFBi2aGVJbJmBCEKYQmRsVyCLEHJGxRv8e",
  "key14": "45qoQqYuvNNnAewFkBxCcg6KrLXRaHymWxggtKkFLVB4yeCS6zDiKB8UWZwW1h6QdsvsjdriCGKkLv129k8T3JZ7",
  "key15": "2p7zBy6rtyQc3RCeHH1iZxtz3PqatyMqA9NL2ZWk7W1kz9Xbiv2t1MdS8HGtHZPa4JZ5m1KFt2pC3Tc3m29hFmcP",
  "key16": "5M3UKMDm5XDiTV1bnSLiWdMqDhq1z5nQzBf26LGNrkJf5bYXGat4F22avvEHL5zMzoQKNAYwG4UubupjubjTbWM7",
  "key17": "3tRvbdEW33oVLM4vyuGLujv5hcPY664ZqQ11Ei1KKZaFjKkF3rpQ78RFBwqgWLvJW5hxjpmg7SCeTgD5teTbqf3F",
  "key18": "2spjLNGp6VUGZKkD86vEuJwYFCdzcg6Pxs51uZTSB7oGJr7c46gpuxhbWq9QFHyZvP7h21VWVNJwn2xHhJoFVu8p",
  "key19": "9Jh1mXjFuvNygW2cuVA6FpYCBiHi1T7K9urCT85ftP5kZjgGGMDAFLQNdEgh3v11WjqbWFKmxugxXNCTUeeeACa",
  "key20": "3WqwAzPBuwHsKXMAoKqDFSfDaaLv36j54RQcpHVUXuBn9qMdGk3yaCdkywANaNWLnvgQdMeqRRpQX4YDwFmkq4EE",
  "key21": "vCBM5ZoA9Xub2PUrgN3qsFidPGRFy99mHaFq6LCtZZ6H439bC4ipQoahqseU4ibPuMsgaoJhS5KJeFE69UmthZm",
  "key22": "3CBRUmDUW79KryHEUjMDudjNkoVgtQSVPCuMwkJaxbESX6CwdmvX3xykksbjhwBqEgeZsa6XehMwgWeUFxG36PFx",
  "key23": "3rX59fjCi9AQXzkd9UuYcXeBS2mNpscdD6sEzPmsVEgvbPJMLpq9Lgekx5SZWYpd9PszUyswZKWb1tVBVRfWyKii",
  "key24": "5jyhTpTFTxvyvgWcGprYhkdkpofKvLmsaUYo4VFDAVzFTaN6iSDRqxuzGESd2eNYvuJM2R9tgS4u33caMGK8eyTb",
  "key25": "WSyEbUAYSM5K2ap9bnV7DN4MTYopkYVqVQ8gWR9YBbQwah8NiXiYgAvuQgNLukRJusPUfcn1NgCo1Ar6daTAfY9",
  "key26": "3aaBVNZsGoDGnk1SxGfwsbVyemKv7gmn936dADJMz6vEMtkhvw4x9xgRB8iyViHbVNhfWwWmnbiUTyyjce9vtvJo",
  "key27": "5svRuN7pZ3DHf6esAhrWJVSSW745h283PE7pa7wePJYncESwp4LNu1ijGnjgp9eZM3c2ouyRJJM1he6No4gsVX7Z",
  "key28": "35kMhk29zDQodbJw5JiVv6oTo9caVng4rnA9K19sAWmPoRGu43TeAscptS9fP53YwkCysgSeiZkMd8KxrdJFmnWa",
  "key29": "3WqZoeSNah71rYEVDK8rHXAvavXJUspwrbycUDxjVvBG1FCp7cWryPEnQDGTMLFTVASCMy8i7HfiznomJmmMPJZD"
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
