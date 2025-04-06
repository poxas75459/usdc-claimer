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
    "3RCysJf2S4NQRXskSFhfXNXRUERMCJLV8CMGibk31b32hWwrtZt6QTUVHSsCp4cogFVnPnJjUcP779YWhhGAZGGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRwWVZFKNFTbxhRH4kpDnhzmEcrXe39LZs38LZBNrZ2DfWN7cbf8FJiQBixaHzxxKC6MoofSmZuCDABnNKeM8Rk",
  "key1": "Y8ipXENLZeuFJNWwXWndYHixXpZWKZQPJw9eTwDG2GLq4KZNnwNwgKy56K9h8TiCYfa1VMgsuYJVB2mcoPraBh7",
  "key2": "3LFCJAkBDB5F38WJhyTBsyRcdfewjhis8rJZFo2CiDQTcnk5AB6rVEWX269xSNX9rcdv4xxGYwMwDaJFzd1sexjC",
  "key3": "dHstWXCPBaN7Bm32PHYVYwMohm8LebFCymMS3dwy1j5xnwdHavHpVdXhiVey4ekutHwmf57GS925PVd6D7VEvoq",
  "key4": "35Y5kMoC6uXLEgLoH5Xh7ugSQ7FerXcBDWNP5FeJhvBeqsJsQwqwcGPHEkSvjcQLf1x6SAaeHPPEoTntXkD7dZj6",
  "key5": "61JV9qGyKGHG6mK6hp7W7HJfLKNan7TREjdbMRddVyFknhU3U9m7b6sqbX377WT7oU5RXnCdzuKDXi6FRwjdB6TK",
  "key6": "2QeUPc2M5iJv2kX2nL7rSs2zbkxbJ4u3dcZHc1q816cWTfgpmbogBfrwd1JwBUPWexgUKg3792j1xaFCvGcrmDcV",
  "key7": "dQiyNSVQjCi3r8v54CXZoL8XReABEXkujZzxyUZFxXhMSa6N6DpQakrw7ErbprBUaoKF6hENaJexcspn1bqMRkn",
  "key8": "MQNbnKTuwMziYbLaeJtTWs4gsbWXAYD5vNkmRd8ire9yBrDLvYSFh2D9Aue6QEDM7HXcwWN6yghEbFRuQtxxed5",
  "key9": "2VABfBWFBu6729tZFneU2C9K5mZuAfNgfZXSoiYLKkwtDYLhiHMToifuWRiHTg9XXjpDsZTMwZLc5soN1pnsewhi",
  "key10": "LEZJU6xVyWpjqv4Y7Rm5bgMTVPaB7AFnFFnEy956R4Uatq157KmgNGSvB8erEcASMkPAn2EGXKBHX75gKxNEtYx",
  "key11": "2PqPYRMCv3om13zaK2UUrhuCJFiCutjg7sWSneYnwf2nk3Y8xE2T44HcLWSYrahPxGSfWWRtvANq1a9oGqcvqkH9",
  "key12": "5Btw14aV5bC67UVjpi5ivQXQhrT4zf2Jakb4C1eqkNQEZz9jQ1qHQp9AM7DG3mSb6HEEv3bQ6XNjTrGusnHqkFbA",
  "key13": "tgnfAehkZLr2iZ7LkTkkh6dAm2dgW83hpXYamCXZjb2kN9qQFvvqkQJ1F5q97B1nq3moiitznBpgpkWqUaEG7Mq",
  "key14": "4vnPEh79k7YqGt61XCLxxxk3j5dbVeThaPPFak9aDnkbTbRAT2YiepFoonjSM6GeQEVwfxWGvsLcvmuhYYhRfsgU",
  "key15": "5RSgmeEkq5zJAMGF44r41ubvzMvCT62hJrPiNpzdWri28TMSR2zheythKr3fEcC6orz1eEj3YkvQnzgn3X42zVXr",
  "key16": "5VZCgTUUHYj95tzVypkS8vfcJeRtoSP3iPBtmqjZKZLwGRKkT6rsw5uMFQ6NdXt4wsL6BkuiNfgUV3doEgDo1TKq",
  "key17": "2Y5snBV4zitbYKGozzFYT12Y5AWz9D45fjU68wadKWiL8HkUA23UEWgbxKQgyAf3igcbsroXdHAmepq6xBeELbht",
  "key18": "5nLTbF4omgBjdoEiAo6vi7zvatozhW246GMzw4PbWQPy9SAqNgqqASsbsvsQVnswxvtqW3aa3SSSzjt2K7jwJcrs",
  "key19": "62RiZ423QnjzNcK9Rds931HFVNPm9uwXwGNEuvqYaYocHDfAjkZ9RrpKQTdhgtvk4kAhwiaUydcqcNeHwpfhJMdi",
  "key20": "2XUJRDSp41yiGH3rgmda1oFvALAUKfovcezQnSSgDm8RQoKfg4pr3ienwRLNc4yv3n81dYjvPzapVMwVB7bpjgtR",
  "key21": "3bgrdwtpranWrsiMJYN5VHPYMpmEuo2m3aCeDJmExqVUoiV1AaYJzksAixfhbAX9t8BHBcSiv5rXgAwt3v78biNU",
  "key22": "3so1jwdziKtH8YidqbEaNUKkWBWzHqPeSKKhQhvgpLnGCCWzUTcfMjMLXpdeUE5BzXgMD7NGEwBoLdR6XfS4TcQS",
  "key23": "5Uo79sdM4VhJAeQuneXHSAMzUbW1yZRAH7JZm4N3fgqz5CKa4Mdog4mwRjJbo5iCRr36ax2xCmZt2jLdtsirk6n3",
  "key24": "2UYH1jmFdenG3pCY8aQrhTE99oPoc3Y5SBcnSd46tp46CSVtRNnKsiejcJiuAhaLmySdfCkpLavt1cdngBu5goxb",
  "key25": "3YT21x2HpnnvAHrFcu9KwJSGxMjU7ZSKKJMXvKWB68biw9gELBdTadYkEfoip4wsZbDh4RRTVRUH7mXGv9uVVFdF",
  "key26": "4mdcsr5JQUjunXMvzKCPsLRU61AtyrqJD36YBbJXi6CLcBc5M27BeV4k3HxnzSu3A6qa5Y86K9WBRhqkuKd8zixi",
  "key27": "3mCz8JopjE9xnLF8aMDwAbnwjHXnbNb4cyNTaemNCuxmUW4ZbvQRDcAUFQ78XkNZuHVmJEf8Gh8KfUFLzMD18aXQ"
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
