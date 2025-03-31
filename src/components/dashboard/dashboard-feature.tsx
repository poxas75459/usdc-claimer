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
    "41NuyHUfWMycqepdZDr1GWAygbFg8kGaMycGWiYhcLhZTUGfnUK6A5nSZyHQ4Mvt5HtD4G6Asi6JuZ8bQ4nWNEtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvyrpA83iB1Atp6ZbPjJa2DkQcf1YuxA5CqktcggdGeihXecDkCdYAiqB7824XLhuTk3hvWgaGxdzH2YjDgDUw4",
  "key1": "3mafEb456wHih3mguuhnXNjiJUNCckxCUie4eR35Xh3ich4nqwTSsHV2foxaVL8qW4aiFi22eFgiQkkVQpW79jb7",
  "key2": "3NYx8RYMDqGjjjmSXEuLSnomeJTt2qCeyLzavBVjiR36cQim3R8KmEhdNQr5Pw4cYs6UyyqhP7GyjasQwFCzHwSm",
  "key3": "56CWmicaHLirVLJhDzKYxhrQdH179YWsHvYaRmSb1Ncu2wyRjN9M2Y8ta2qxEX9AMZSce8AqixVr4pbRzKEXmb1a",
  "key4": "3ovqL3vLveUDVynJPKj5X2rNJv7HgX5KhCQ7cqDXsaoFvo5cnGYfwSSV5mFx7ACp8zHmqu5PpiEtxuTUVdPQkcRF",
  "key5": "3hHzPgiUVrY6yH9zUyLSGX83ejAMc8KzQS1RyqCj3NCZRZiPqoQi7GJCp8XoqdKN5roKKPADzLEu72DzJHtdJ9An",
  "key6": "63kSq1QhNpTKC9WFSRhWsZJKPucPs4BE6wkbvroezovG3rnyL3xdFs1HCphkTGeteh62zC5dpZghzBGz29R5RAH2",
  "key7": "3zBfULmKEWBSQkzJa2fr7ryvWf3HpvCL5v34DSeRfnhpuxwuaYjuAZiDb4hufJeBCvgsNAWgFnXUmkgtnzx7gCpc",
  "key8": "4DXLcfroUapP8vR1kei8tfBZXE2inrr6PwoZYmk2P5rGzMAEf8jCx7PfNhKcw1nva5sCentf1d6xpzXRStYPSPLP",
  "key9": "4k5dYG2KjspMKPhqgRLmaLycLYzK3ST5kRFW3kD5HdNqYfmUTQzrSxF3FU4PHik9RP95fnLEuztucMWX7AfRzcrp",
  "key10": "3Ex4dEepBn56YGfYFPtvg6RZPqjnKVHL8svcNjeiH77Ls33N9iZ1gBhMBihikuUaRpQ19446q1ugvg6KeatGzFBo",
  "key11": "4Cg3KCu14UTM4MBLxGE18uP94gFLYhkYSEPfSfuJ1rQUtDxQSKCeF9d7b6WwPtpon6ewLXWJPxZVXoduEx2RZasj",
  "key12": "4vukT32bY9CLyyfRkfFSks9WLowuH5j58ExvxXBZ3iZo3c8X6SxkgggoxTCrcaGgN1GH1bTYEeVWbMfTdCANJfUn",
  "key13": "4JJH4CyTRDRTZzQbX1W8uJrZe7aFwk13yRyr3th1imMxdGcmdhajA8SK8c9hAj8DpzmobpJfTB9TAhLwd8a3xeCR",
  "key14": "5KZL9mW7CGWfQ3q5XucPRgibJSuJe83BYW3p8XyjKi9Wt6RwsUeG3qzr7s5jdHjeURSb8GojGqCCiF6ygr4Z33gN",
  "key15": "tuEH4nkXx3iJKrxaAMTGWhWZSeVKUEsYABWCg2TLiYrPuZwd28CJLpdar6KowSPDbiyvzWm1ia965iGttxAAHc7",
  "key16": "LAbPaKgfTzyHGcRzo4wPULMNfAWtQCjrWeyUi9aXby5pX7m8xam5RjgbD49WsndJoWAYFiQNUDgtkbmmNW29pZD",
  "key17": "61uAZjibRr1zBcScfii25EWFVSGVajH7G4RzPCYy7D5LuH5ybC6UrW63wS1ryrKDdsp117Lqv8pnYTpaMwYtqzLa",
  "key18": "5q9MwiBPzmQP4eZJCak2LJ3LtbnDJsJDAgHBRDt99DEsmrcBsdqWyg7bxfVXY9DyNRZBrJJirLa2vScicgxDvaKb",
  "key19": "2aaDfQast5a9z7ZG7qTpakj5XH79k4D1aHc5PRDv3U6TU7LMhUehybMXfxQ77gtrjoLcFguRQWyasgxMbzcSTt1W",
  "key20": "4JbDJKBn2r95wSv2Q9LWTE8ZkSzpZi94SqZiuJ51yhxU5Ew3UbPMRT81vP6J9KK4p2HQnr1jFaJKgBUVh9anfMhU",
  "key21": "5H9CS4SDtLm7qNcZsdcAQtTXaM67p9dWduZqHsxcyFQEYWo3h1inNmM9jzFUwLAvCBSLte1wSBViE9A5mCypaiXX",
  "key22": "4RHCGznWHP7z2f61XPtycxgfCVAW1WuMuoNPSJ2y8XXFBZh3H21FFeqxUgRmKgpYLWGfLGdxfHfgJ6PeB9AWLAuW",
  "key23": "cmWLs7YwYE2Ks9DCXLjScDfkDXST8GR5MFh6wVXLbWiS16wccmzH92HxirSKB7oXBJcXEgyxYhSPUVYpgB1UcKm",
  "key24": "5VnZv1nH4uhox6vVBzENfPmxEBTHzJqx8QXQPszVWZUbrR4P7itL43c9ycYPuekEdSaa5wUTibxHCVsFRVmRe2xT"
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
