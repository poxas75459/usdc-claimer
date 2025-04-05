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
    "5WzDh8sfJbSdaPShCPrQ6JeChAmmLGxZmJnusbKaHmNoBeR5kaKWo7bvfUNcNPaenmvccx17diiPdS8W3Tnv4ifH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUTCcavyknaNRQ2KeGyTrA6ToCrjr8QaAtpyv143GkhqmqnwrDD1bTE7TkvtXHAmbdaAaAWL3GgyNxwe86Wo5Yt",
  "key1": "GBcW9j2Gt16SGrQEQEJqurgXitcJ5eC3Jo2BxhQgmyyGkmhDpKVtx1jsoaMoWYz9m6PoLN4gtCnXwapw467T6FC",
  "key2": "3KGdXPwjykUdGCoAeBvgw2E6kK4JsJTv9shJqT1HpWURLZ9c6hSszPfE3hRaXFjdGySvDJ6rxiF4WRrjFjGEHKmv",
  "key3": "5ynWH9p7HiVqSJgU6fLy422SyVnnpKjVzvTiQJoFSjeJCFmPcwM23W2uuBi8LJc4FZ4uNqMDBEWMt4Md8upcEdW1",
  "key4": "5UkpriW8vPFAF5DXE2EvpkmguAPVtm5pTGE5Tqh1SihAGJ8tfkhuktvVoNdyhqEzyCqMxrQ5wrhX2EK5bkXviKCw",
  "key5": "2mfJhWPnbHcrPHBKnBVQphRuNV4QFNsCCavtGQE67M7myEjokw3ztTueQURFvQfjeimJ3dtJdik5nE7BLFG3bvZ6",
  "key6": "2Zwt1HdwUfBhTdRy4A1H9rSMfPh4DsT7DCpGQak6jC2iTpidSrYyCcyUNaxnao9A41FK2iBwifP8dDuAGmt3Ak9S",
  "key7": "5Rh6PqZXt1hqjVo4rETJuT86iK2fESXHgHShTTH611qpdRaULLjyucfPxxCUADXo7uBpcwDWvii1NdBK2CrPuRrS",
  "key8": "YU5ronrdfrArecEJ2xaf1uWfWdmKfCGqHqzPbEwYfpPMV6MNRytpoGeRgt2imbmNXTKq37b5UCMHacghSoKbAYa",
  "key9": "21K3yVCVDw7oJqzcJDiBRMDQpDcRNH5GR5Lzdahre41prYn6CgwF6fVt3HHFfSxexux3Y6AkqWRFjGpWGaZceMYP",
  "key10": "2A9C9G7vaHJ51Yrd6gUCy5rRzRf7Npv7CsUb5YCyq8ouowFy9vmFE1uy7hpr8f2zQmDvBvXzkmzayR43qq6gfpsy",
  "key11": "3cBwcLGV673PYArAM3rQW4BjVHH2gNpNK29oe5o8v544vjbA3JdgmdoMeVPLmxQ5x9sqkDEvCyvTuuNYjzFzUuc8",
  "key12": "4JgrQ9rBVf45HS4zYt2ENN8AFiigHD9uZhQT8NkdbtXPdEioXZUUXCoJ2FkoBcW1EU1An78X7LypTg4KPUUzzYQ1",
  "key13": "4oMJ6qfYEgjyVBEUHRuPHkxAocUEbT2RQGejYJYnDEToxwGZ1foPE84MqTceoUz4ZiTcJmJGRSvsvACyFyKx9kS6",
  "key14": "P1YajehfzDu13eTcho3EgCQ87kR36ZrHWTenQXkvwpfnbp5nYbHxSsVeBguwHAXd4ZeJNQ33aMoEw1zhjcxBdzB",
  "key15": "Bc9H5QN98nEqQZrfPm29YbtUp5Tjzd6t1sLbj1Qti8bAy8y1eevkXdv4WQmgRu6YvMAkwDN5pMpGcaTCNmxK3nX",
  "key16": "5aNigShaxWPnjyR1pJ2HVoizUJT6YTCWPuskEofj7Bbnir2JPLL35RPuxcRovu4TjGdM8jBz6WNggV44Rg1BuXFY",
  "key17": "5qmhxDYrWWP7EFbBC7KGSgzkNzChgv38wpyFmifG5MdUZAzFjKHBKn4A8gt7pmRruBoTULBXzkQktqDGV6VbC4eH",
  "key18": "5GMWsJUNp2kiWTTh3hpUARgfzLNXGW6qJRxqwfsbpowWBapUVTrkYQXWbBe42pL3hPPibApKLNH81Y7kvFwE2MwZ",
  "key19": "35ND2mkpEyNuFq2FfEVh8aJ9mHxUw6jRMQprfjeJ4JoQvWrHTyzWiBEsyKWFXe7DkmnU8z3x1Mebbex5ZMWkqoy3",
  "key20": "4eb9g3dbdTCjGy9DH9uyC5UC7PW1JazEc9Y3gL7mpQLCHUC71tQY1cc2J4AgR9NEU2aFhthzHivLdUazPqWfY1wn",
  "key21": "3sKpY9k1BtYiwBF7QY2Fs1shfJ5cRobzvuEpAZgCtXuJUxW76zZN5utSD7H1yYCNi6cioUctJ3RJDi9W2HyR5qUZ",
  "key22": "3aX94PvPmc3MaQBjeAJQxNf7seh8ryCxRjhsk7mohFFXMo4twqY3J4B6vXSorVQ6rFa2swDbSzKrwuidx3KJqDVm",
  "key23": "wDoivHB4z5qyiSL1qJmBbHzJSAmeA4va3C1Fm8EQsSm4YDvunB365bZGPhYnvUjuy4giL1XiWiwuDVQJZSJ68A4",
  "key24": "3BE35z1fprkne59o8zTt1VACtH9P33EKqGSAFxx4VmdmRA3zBgnkBDZ4Mx1XvxptnTnidgkC6AAhWsXHWfXTS46S",
  "key25": "goW6wcuQkyNSzk1kveCjWLL6MK9Q4U7LK2zHGb6PWNX7YugGdVEyjpTSYbuB7xrhQ2BqrmqcfipCRzTUE12JCvF",
  "key26": "5fWTRKGp2N62TXM4CMPvccezFpphJXk9tocPSwYxbGwLrkGG77Mzjtz6YpkRP31Bv98XfUvFHGLcN8haPZP7oZ66",
  "key27": "5QRe49RmVM4xJZMrNgK2PMkZv4oi3eCGwp7e6RQe8q8ji3g24cq2AKExbsLHD5JuWCSFT9aJe6XTqVKCRDVVnhGE"
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
