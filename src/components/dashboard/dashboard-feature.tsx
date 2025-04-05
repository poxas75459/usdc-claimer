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
    "5S4RdUqyHdgtteUv7XonQ2WtCkXoWPZXJ9UM9WCkPJQmPJW6W98V48bYhGYaq8HFGXaja1jMMrZnsTqS4fNqw1ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzRdtEUw5c3xAkVvbB7pPHvXdDdWY3taJLXN4hvk9wWviA9jA6wtxgmBDys9KjXzPQrpFnNwHzxFfj3T4TFXsXX",
  "key1": "2rRQTdr5T8HS2hZu6Pau3zaEt9TnYHh8KtKmQ27D9QQxJF7rYvyeDgLtVKqTMWi6i6Foj3NMb1coJySHBeZDBqTC",
  "key2": "3FiX3sUcydKE8EFFxJBLWUsmms1KsPzwaSkCR5hGe2hNNhy2qF4pepD19SVminYQHb5gMHvhwaPvh8oRTniySiSC",
  "key3": "9t2hsDNBbncJRmjWZDzAviqqQPeBfyJrZ7ZHL8NvgE6v66uGFuJqiFV71iCmXmVeK5DY2e8XNuBa9ZY51Vs17R5",
  "key4": "5evHgwsZEoHsHBxaMiJ9fY7kSYX1Pvj8JxDTcyiTZeanpoAUGV6pfpnvpN7MQX6Tj1huaAP8xfXn2ojgpQ3oHEKS",
  "key5": "5mkuejRCfVWpd9uKpJ3kU7je5Y9zyWPMk7x5YwedMpHrTHQteXzwwNaCPN3YLLEu6NcRfrxHzTH4rYvq5sAAdb8u",
  "key6": "1oSiYvApGtwUKH7HVJKg3oxfp6zoC1scggq2x2feSy63fg6XTtZueEtBGqMUWbEgeGWuvuhW5gxcBVp7rFhBEQo",
  "key7": "4RrAyFLGkLyx7L3k15CABtVn8WaP1nfNNsZQidNaTLykF7Ku3Nhf7zvGUnduJizWiGDmUUmegNeUiYu12Cky95es",
  "key8": "4JBuZtT5JFkk79LozpAehAtfCxiVA2raqTxF8PrTVxP8it1rkjSUemZBFg1FT2XxMMxZVZf3wJn2NrEqtLGJ9yA3",
  "key9": "3c8HYZa2Ez9yvkh4WaqeJsJwEPnCB4JqLCWT8Gnk21Ewe5cNFERWJss21UXYHTLezF5zUc3wNqVkgp5R7ey7QCm8",
  "key10": "3QZbpNy7oFtCyzsPZQ1GoMWZcUNPrvmtJtaQAFDZ4xftzm9exsK59L2wkt873jRbg4GiQye3ZvsU7Rnh6svmXyVa",
  "key11": "5Ej3woDpzftPySseb1DAFhskC4rTtigumqNSuhfpTC8gQmXJJ3oM8RMSMjpUudWoUVqNySzcLa9QJeAjBVAwL1Kp",
  "key12": "3whCMhQPh8FPGuSauduKHXy1FRje5t9WBJ84fGC7ShF9nxKTA4yaHnNFqLZB3N8spuX3xp2ZRR6yynHhocupujbQ",
  "key13": "5N3yvWZ2UijX5nRB9qJxjKH6tQvWBQwwmqm3T5z6Jo29m8YkHeareJUgAJatR6aef7iCr1BpHwQiBXidixWv4z3G",
  "key14": "NA8pcnRPwtnKXG1KHuY4HZYW7f8nGnxESqizJu3jTr49T5AS466ZDro8EUC4NdjxP6z1QUatyESebeo7wgnbxmJ",
  "key15": "5AwmVChgHUGokqCmfq1kXjtkczJAMsRq7QZonkrpht8BgEa5CdjPJKZHe3x34fWYQTZMxGMma3YfBxWVTYzaZ4QZ",
  "key16": "4g7NCKQH3zWVNbUBJiExW9yJsDSaYME2gCopMopT6aeTNvKzkY8viXWxhFTuoghKbPuuvx3MZmiVrJ43KWkgJ7aG",
  "key17": "mrEPGWLdL2nhAUGxR9vwoCzt8hoxSjDuSDdSaDtxsc88BAEgrdcoFyEAmZ87W9YiLNMVoMyQCbRBsmrRM5pDa5N",
  "key18": "2q5pMPJnoNbtLG8i7cnabXNyEKYVz7bJx14Q8VXYf6AnGbzXWKcJS4yYmdtJodHqykyaVGfph6PdtLd2KFbXEi9E",
  "key19": "46YFJWGpAPUXKx5exa9RP9gEiJ3sME7kBRvNwfU1Mdk7PmhRbmaA2P3yAWZFTkZmHUrf8zq9SSrVo1m5KrokNew6",
  "key20": "4dj37ogP87cHPYB1iJSzutsmUFdojnadnMsxfSn1mSDZRJU5p2PaNbpbWj7UJqFcjJKJhkmPgatFzFJHim2nuiYs",
  "key21": "4DnqVnNACGV5Sn2DR731czVYBbFnWPrwYy2HTa9tBfk8KvnGGEx7BVp4yaBbYSbbrSqWK9rogh8hpDehSxe5m6nH",
  "key22": "2wCH7DRn53Pz8a4RgD7kRMuxeM9Jq6MzNEsZPixMC4Rc6Qky7T38oYibQc51D6xgF1WSazv2vo4wRkZM4qkWJ3ty",
  "key23": "3RtctxcH1Ja4bjdfQpp8TcVSKwcfE8izaSfJ728STdUQfkn6ULxvGeQyhjQViw3Qmm5qojU5tTFHXX3oY7Asg48K",
  "key24": "637it3FJ5nHxE7WDKPBSCKV3wiCNJGxcorUB6SPXFWh9jjSbeySYTbAtz1GPTQfwGES4jKSNaCqcEoWPszbc6DX5"
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
