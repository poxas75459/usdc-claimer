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
    "ntq6yxpnkVxbUUeoDbL7A3RQBdYGQhyTps4n1j6QzBu3HwgceSsBXRAeoFXetq3mgJeAWSmXkuGwSksc9359Hc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CdteAzGd4HDFAcPQzjcGbv7nPRkmc6ynDTUquu5xzrmvkMatww41PyLditBNuQscfdmVrPLdMDEwKH6t2RA1fA",
  "key1": "4thfSf7QztLrsk2SEQvZ1La1Esuyw8xWxaifo2GjVyUUb3jYf2WS74d4Tacau1237czBHHoaTcX1pSKiHfuBYimX",
  "key2": "4Kr1QDRx6YGg4CAtRD1rzJw9em4nDyeA3jzvnbkUY2m2EYR8GWv1uKSyLWRxXv2YpYhDUNXzSwsMuKMCHMTS4dA3",
  "key3": "RRgqfPtSePSeDCsxMX7fcT4MLVYQVpUJpZydcBKyNoxuwceKHnPzFK23xASaWKkamNnjTv5NKFRxJUU8QDidGYj",
  "key4": "3g9inxpGjnkRc5ggV9woKuhnkeGqJnrEdHzFResbgguU73gcEP3SoTaAriuFZQra729xUzaRFnJsgWBjF8MZimaV",
  "key5": "53Q26RwwSCiBZxHVnewLbuKb99mZ9UkxgDVG8ezeW5wkZN7VcALe8T5eQ5Q1EStWJ3vEqmyRwJdXBwsUNHADeBwk",
  "key6": "2xUf3gdYvi4Y5FSjUxF4uRrqKwDUTQsK8kZHx7tvJRZU3Mf8dFeJQNeKxx3P4sGKmtB8nAh2EoD5WZnYX12SjKG5",
  "key7": "2FMLcRKqdoVK2Dbi7DSKa9ATdEbVGH8E1HqhaTzVyxkTSMhNiMemnNgb3hi4akgHTw9dd7u8hnytZ945D6x83Gg1",
  "key8": "2oCvomrjKk37KuXeJjqJuMWJ9qNq3FmNjBbCjwvMu4m3EADBcmr5kpSkYDzVudmbiHtftFr4f9nt2nm54enfwMQp",
  "key9": "55KM2mSv1FKXM2hJmz2ffWy5ZX6ckb8JZvvaf33ZzWUjhWfXuEDhgqkZCEBVsbpmoKRQfwa68cau2PAUkqJXa1yb",
  "key10": "2zbbD9M7qD9nqKqrPHDvYJmyPoHPCPzmgfW8LNKchurQgCDfsAxx6weuc5CiAeKTDH2rLWDU3NKmSHCTtzhjQk4F",
  "key11": "36ctSwd8GvqafnsZeCj2yTXhc1ymLoX6vNhMnSfdPBZ4hG7c8yDAmfGHPwP5q9kzkjAqu2UP4LAFbJ6rEq6xSxQ6",
  "key12": "5Km1AMKZsnQGSC68HTk2JvnXPK66qn194okNZQ846rA2QY6fg32RUFjQqKS333Kw4wJc1p7E2zaGgFnVdYaqGDhY",
  "key13": "5WA5MeVjdcebMPGggYLWzs3z3GJDbJfFwCpZr2DzA1efR8GUG44ENA5HxNhQhAqwcLDYNWyWtcXLNfhkgBdHtL7B",
  "key14": "67C55GtDFWoiEDyNPcSXZrErKNNWNjSSTC6BiJEZMjUJYR9frpdzGk9RrS9ATvpjEM4bFF49Dws8S7D65u1BnddZ",
  "key15": "5YU3uaPSiVXabJ9huBbKATwf1TLhcujGysfUbNtW2KhYVBHZbpmrgUMhh4iCJqhskF7rfarFuyCh3LYC5M8qNe96",
  "key16": "4RBiRd3PDP5X6dfir9QK8JQMtYpM4HqGe8RzZn7zN16VopdBH5sqmo51wa6cBqPB8sHWKKrd9LbfPjG1UVMxdyHV",
  "key17": "4sYP85H646DfekLwAw947Dmqi5rzsKVGUsWdJHyNYNxghTt7rH8YSfP2yUJB8CeFeoLoHhFj52JKCRjQXx6oc3NW",
  "key18": "Rn2JbNiLkJyxFQsFTTbVRDPFTswF9GBszb34s3eTzqgYjvEiqu7CJ1mDet32Dqoae3gsDhF5FaTespk9frLqTYt",
  "key19": "2u8bL5zGTMRzyTphoAfRkNbRLeGF78z4Vtjp5gd4pThBMVSL26xh6d5TQLkRtNfoi6LKy5UDrrMj6hB89RhRUdqF",
  "key20": "Bfrwv1XAKobLMjZQpPPqXEtuYnWP2btyK1AJ2wUjpfhxu9cE5YL5nhHrrhHNMeDPoqBg5mvX3UsueYFhSCgqRaV",
  "key21": "2dVpEEEeNpThd7ZqLeZaweVjD7rZj6cbpQpu4B6rwiG46cA4Tj41kinD7Cj5YtHTfnnKjiVGMkE6ZMMCPcGWtSAx",
  "key22": "5SVNd3gkKb2xvcLjK94rvoAXjeSUEtfAcR5Gbxongp4JeGcp1QWMdtK8Dp4y3ybHCkS1VsYScZn4z3S9EbMmgN4",
  "key23": "4yLRPFJCUQmhCdwRPpg2KXDNJHkTMsZmCAt6TAzxwcuFW9XLHW8mpL8jXAJhNywcGGFDC12vNm4uYvpywR1aEpXS",
  "key24": "3Ak2YzedtHhkfkDmySMmENpCCQi8nx59rZBDgdJvb8FoXWXHad1287fxzZojVHN96MqrFGQzr7ykGNL425um7Ge6"
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
