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
    "5Jsg3MmRRe2PbbB8aHAyKo72NX7zAfna7VNVTqETAri5RNetzy5ivyQ4qwVvidQY3xhWX3SNJKYhVvgRc9r5jUYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQ9gBp9r391pH7uVJ3Nh3tyqcxGLkDkExgknUVLAYe2ACpUj3LnjKEMMrSDzd4yMUAFmRkjj1mahdD8CHxJw5GM",
  "key1": "2A1Ft1fLcR1JLyiaYrMgtMtxrxykW1HfjEVSaTKqCYTpNPoB95bCGtC3H9DbDV9V2ctRoNZRqoj6QHoqyVabhQaz",
  "key2": "27Ritw9CcK3NadgzvACBrvVbdcanzSspKVsrvZUu3Z6dwirDV1YMrSe618DsUyLcExShi4j1ciuMhpjYi1NQKU3T",
  "key3": "uu4YRVaJ3JVgVnMCyrB4Rpz7U6NxaddD219E7Ngh3RfAFU2ndcGzesPncquk8LK8BPR56nCfQcWkSSPNn9ku7b5",
  "key4": "uu7CgiMbREKXEnTDfwRM8XAfaGdD6dcunvs7za1D2AX5LbnaWaEuRXWqnE31Wne6rUCwN4WzEXdiZFReGkB7n4R",
  "key5": "2WtK9QViPyTnsmwkAUyrVr9XENqn3Qhr8AbDfUAV3zyDsDR7PodHC5jsHtwVrvca19QGgtuEQWXGczJc6CVKu9CH",
  "key6": "3rev1TwbS5fwHSygUZGmohjJQVdFmeG3uXzvHmG9YEtbnKM4YkDK6xdqQqhHdinu1qSNEKT8fKJT4VSo39KSYTdU",
  "key7": "4NeeyiieXTr6opUXniUzWNA8kmKz1mH6KSg9FxTvmxGmvZB5oPmvCagv1oxbW5s7eojJk4RrmwaqcmKvtiFGPxUN",
  "key8": "4bCyUmzvBiyx6h7FDauAAndkokLHpq3tVCRJrfDs39E2gMBCWzDE2SuUw5Cf8Bu8nz1psU4B8pmbcrQSFaTp4qYt",
  "key9": "3cuPinqazkSensU3UaMx1aGh8yUFnkLqnHukJthSey566h8hqdSCE1wyaYwqJXnzT3euLX2e6vFxTPLMshQwRy9v",
  "key10": "3QeBxUyg3qUQYScjGxCqBxetu6jDLEkM9XLKrFLzgLX1F2bZpE83DN3WG4w9Q7TaxEX1qybDGd5XHhFDjntuTgw1",
  "key11": "2CnJKKSgLFjct15Q3ipNu3bpTVGqLX2DAmbkm3YnKvNdmxXQY4ctVdfKbVGxETDxJytZqRc1pSWEuUizgxhhnjGE",
  "key12": "a5954QMnzfwjK3Uea7XWChfbFJYzs3s2Q1rXoLJW2yXmc7qcfZQLbALJzqnrb3ud773seZ1Zq414icreL9XbtCA",
  "key13": "59WFzY5HenJQZA87RSgfxrexQfTMLUkGYYFjRFGjz3hWg4qrSgKmFqgnfsjeeMpWKpP6FWj2kotjS6b4URWXKqMa",
  "key14": "a5GfjFu7BBzrGzR7UWMTkFFivowvHxSNAkVXRU4j5ATCFR6gWX1PqjbY6jpYBdhC9h8TeoBHk6rcXUfW1EeSW2R",
  "key15": "53nL7gRM134Cc4NdGtHhu3g9VpkoLwpftmsKSDN3cHnsNLV6sLUPPs7MhiiKEGwAbDBADi8GuKA6UjVW2gxeuurb",
  "key16": "2HrvyXky57kVuuByTU4kPZC2144cBNgK9ebFVShYVF2JmUdXUgbif37aucyoLuSzJ4NEoCQwZMYLpto1XicfTyyc",
  "key17": "24yeXUdwrqP4UHYGaVrsacV8BbH3B9uDzEvSuWw4tUobZFcQAEwqftUCChBnzLXwLmGAoz3gcSAvRWx431Ld9yxm",
  "key18": "2eUnqkeJmrqXgeb7q69GQXXYbZBQPCN5FEkCU4ti4qN1Z9D4pkqgAryzyXhdMwx8W1k8kX6LjdmB8Kjt3ym37HSt",
  "key19": "2yA431ka2eLEF63Bnao5dKUHZvaRnw5kdv11H8VzKdj4wuh427ZweWnwfZVzmmU3PpmUtQQTwRAELjt2Yv3sZPPK",
  "key20": "2iYXUBpEShhgtUCD1zuNhK2bPp1QnBWAxw1RFUWktSpMp2fDS5DoDT3oAFFqhG87WiHZZitVzhyWWHzq8H5orhc7",
  "key21": "4kBsGrtH496wFg3HUsCGcziCxw8suTQVo65TEZWZ8be4tzpznNvKir1QFvgXDT7Zv5HVKuQ7XVuaEfNP5SQNzu5G",
  "key22": "2wQDH8hTz1jGhHACWFyutkVpCmjPNyD9ZPHJvbN7qMkUNtbN2Ek9akGvwW16nQDtGvz4Mxz1yqX2bA3kNzKUG5yK",
  "key23": "4RejoYfN5wVSEdqN1XoxnMBZoWzTk93qtL6fxNqkHFyJW39NbMmN7AP3Hx4pjWCzmzw66JQiEdFToLAQYnrbtLRq",
  "key24": "3TexaT3fZg5r7hYVuTNBmtqqFyPoJXBQKLGmrAeFkRhnPSK9YVDTqzRK8UVst6A3Lu2KWphCh7egFUYvmu9cfXfd",
  "key25": "Tw73V4STe6FYYgDJpkKsGXZSvDGnU7tQDLxDafmDmsQjej9JK5RvQXuMDmxgjxA117FgYvm2HVwKPCDe1ENXuD4",
  "key26": "3FTSP1dLQVVHM1VzPJeZ14SjiYquE6v5MUSx2cTujyESwRF4rcTJA9XoP5619bKPVQb7tgmwKhUwWcvaMEDCwXcH",
  "key27": "35i9uw8AuBxtYe2yCJUFoe1j49L6JfkQUYa3MzMWtjuTbrkDb8garqYK3P1kKY72VY2DUYKmRDMExEJA6nRnsdPv",
  "key28": "U7LC75N8UuMoe5BZcDWzEBAhNF7fKThxr8iCPu1CkX43Zk7BcQrTAedRkNUMYS13LoevrMekyWUDYu2zMUd4tTH",
  "key29": "44rv2NsD3MNrGVnu3kDFd1wVJGGo12qV7UmLECjeaQQnUL2TAFwWRMtgjYBqnN3KeB4sYDHC3C9bFWP8yYjzVjr9",
  "key30": "3rVyANwCGKoLis8tsSJBjoYcyt6fsptzacbNRc8NUiGeNk9CU39p8wbFpW5LJV28Un2Yk3W6Sj3A4NypkEuFRyZ6",
  "key31": "4M2sP5nAjPzZv9yHLvszXw6v96B9NJTY8NFjADYffz8qHAGdGbr274DreqGAjNExQWYLSqFtzVA6d3881wc6oawH"
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
