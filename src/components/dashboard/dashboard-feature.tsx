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
    "Urj3Ven3xxcbmPTLwfRadjddzdWFgbV4e72RiVrkieEKHVqURvtMavYS4zBVQZuYD32xeXCMHm5NXazohYRUPRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SRaJLXiJ1cFvb5n1oJVfguKAwMZjnRN6FHo8Ae3VKGXZa416MrbexX9CnzWpyi63xasRGufdUKGhb7iga6ArEY",
  "key1": "2LeLtXuUgqsivATBPLCyDpwRr7m25ybtFpQVm83xhkThxcPjiGTXtHgzW91Hj2w79DQyT7gobzAcynNEva7jyuog",
  "key2": "41ToRiRdeAXYHbCST2R9eK1NdsRAy2yPTv1XVbb8LoekURxFxxf5wP3DCJm7HSBCTV77HSced1iL1b6Cwcn4WVff",
  "key3": "2xfEN8Ut2phrZbd6emqxyd1w2n21EL8NY5rGbRcAECphuQRNpuyj2PN6iMN375hd5nj7mNF33qyH1o8WpkmaDam8",
  "key4": "4ZaDsnuJZ7PNXC5VkTGkmWYBhUeb7iVbUinLkJP3DmZVdHTC4JuaFCR5kcnwUmXP2rtWqSDHeAmohpzYZziGu4YY",
  "key5": "4py8YStPR7kDvVbQUt7tiJuhqVojvdMZcXYvtFmuQcL1kH7h78T5xtCdJkphj9JgGgA1kwUie9qWPJJ5F6UV4VoB",
  "key6": "pYHQkNefSbf5a1gcjxnsUgatXQPH5PLqg94EnTLY1F3xBubZe4nncdDhRexZBusRe1Rc7G1XiFckB2Mo2xAEUkA",
  "key7": "4ThuLQiSowtzrmqbRwx5tm5widwT5g9rGdQBGMhffHDfMjCYC7JEk6EXRc6yzxwQtUUE2HSK7SG8HMoukpgMc3uB",
  "key8": "GS1XXD3FYLChEW4pHW8DsT1RmWKNpv9cMQzC7dGm3S9mpv5nervxywBXTSxedRzz37uNaNcnkg3U6BA4USxPZ5E",
  "key9": "4wksquVcTiNH8yzDet4HL32ozzVgxGthHdQBaN5BU9a5AUF8gJcP2MB74RhSHqMBrj1H3PPB75qm2AdSoXgQ5hT",
  "key10": "2AmBMMx2pyErB2XoGcipHeM1W4HrbfEXrjiLJZDZR58AZjP9mgdX2WB9FkCVTtgfaKGkWyR82rahwVsntwMF5jJ7",
  "key11": "49ZFeQBqPWRmdixktjkt1DqAP9tsT8kDxVbU6YXiwyDD5RLxnZ54at1X3XsYy9auYdqPq537CN4Z4AfATf1rLQ8z",
  "key12": "3GQz6empohJ8TxNQLiJb3XpuWT5aW98CY3zs5DKwk48695TZ2xi5FptLdmmsGuUjMqk1s9i7xNBqYNbZvembGGd2",
  "key13": "62qvh2xZcs2wj34WbuETifaAjNwzn3QJBs6qyyboVpavRtEVNovbvkJYtR3JgyRosybr9NbK11EhJusHLdxChc5H",
  "key14": "454JBbRcJqwwUmmHEp9nwXWCyLzmmJ3Ci1nY2ruBHhW9h5zbhg68FuPaEV7vHm9Nui1zHYEsh9fWX9XNUpfiVryv",
  "key15": "ahwT8y87PFukKGT5btHjDT3mDUAuYpB63QMNkUJzhaUzL3Dmywr1EJtvoc53stse5Nnkf44AeNUQDpmYFbR4Akz",
  "key16": "MoygLMfT5X2NRJZf7s9Nhfg3pYxBmk1zDkLSCo4d8Esb8C42ifztwKpTHxEZSbPR4thvE7NCsTDEuGSoxyYw5SC",
  "key17": "2BZrLQMnjWickWoDLaEMoRyJprbKsZ7ApBijC6rZuGL9gLwHp41iHpZX75MmBrWNdKMugsriBR2yCR8h1BYgfovh",
  "key18": "23R7tbTZUyrjuT6gGncdKzannroQrSca6LfQeqqJvqWW7h7gm2RLo6Toy4aoSHUnBs2cgB4kgQ1iiHnWhH9a9y9V",
  "key19": "5WD9ApyBEz2Q9uKR3cf84z9QPHPXdE6MiQt8LFxVQ6NQvEwThLYcnm4qU4cU8YdyAD1x6FoWgxZ3iZEqR6oweXNp",
  "key20": "4doY8sRaRFYBnroD6TdEEjMna93mZTzociTmNhfDhq2QJikQjCJcLWDRAScFE3z9tYguiKdXyRExoFSqNapM35Fp",
  "key21": "61cxoYDsdAqbEfeikAnLBHrMFfDYQJ2NQ8nbrsY9hjauwv9Hcsj19Lzjt1brsVMXq6JmnCo7Y8jfnZtUM3yg9bEC",
  "key22": "547hPJWfEqxEUMxHSCTYzv3PaF2iKeisqGxwGqTg8Z6k6YFEGGozTMVGHqDmXrmzvPRX9wm2LBtz1xRZm6EYuKGq",
  "key23": "Yqay1iVudz4D1NA9rsVHQniaVUgzfBkAA6H3j3znUqbnXvXU541MMMLx2HKk3FPAtBkVAPtm4Z5aBGYTLJmDC1g",
  "key24": "GmfrDunqZysn52uXrnkvwfNrHf9Kv2AirHuABScUNVkZpyXMHNm7rmRUUk6gdVYoFcGuojBBDJRHEwsPdoGKetZ",
  "key25": "4NqTgWcTmaschnYuRkZzNSNX3sBLbfGept1fPkmGWCN3oBqCYXwVNtYhhs1nMDjKFNF1HoJ1HWJ2Vp1WNGjY2Wak"
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
