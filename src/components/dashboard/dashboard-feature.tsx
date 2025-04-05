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
    "5ASLwV88wwuL72YpxidTcBBK82pHtb3PqrWjcsKqysSPv7gH5yETVfmz6vUx9E6KHokhsK6MH5m1dSFT1CY7goGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWY2fW6eKSJcSowxEnGW5wYTFtQpvr82pft7w7UbjXeyCyvMXThXm9k5dHz8K6yfFS7gjjbedVKHRqNhgYBZrg7",
  "key1": "Bs4CTzo4heYYdtLr5SuHP7GxC72iAXdFYkBt9w1JA14ytQM9cSE3XAd941cpuVSaPfK7yS4Gyyw7meKs5XANGcF",
  "key2": "5SDZ7ZsWB3cNosYaLVAnCbDJMVAUXkvXSF85X4XCFz6haYAB448Z7q9ChpTkZV9bnXDkJc4gh8metNoxgNSbCDuq",
  "key3": "36osCTEa9cwK7uFhn4xTFPBUwXQM6RxCPYWko2CKpQsAqEcDtzuHLgPeciEmhS3eUTbggqKGdPzMJ8SPtMvNTGXQ",
  "key4": "66RrJqVhxh2Mp8kKoDTv6xvmTxXQYseqFN7BcywcXSCrcPUs9xBdwuNJFDdHRi2N94VunGAt9WRhxw7JeBM3QogY",
  "key5": "wD41FZtmsPpyw95z6BWHhpA7aKRxUfJT1tQSLDBDTuoWrbxzAyYzKRJpar2k7j9JuY2QnQGN7R8YpxTWMcQWBsu",
  "key6": "4NwYATWG34r38mJwGijdVwogXcn5Y5yRKY6KadWCTH7tbMeRva81WRzFuxg5J3e2Ae2C246LfzSMD7DZWk7RnD9X",
  "key7": "bMpXJNZdfGuVYnnusga2FV3cWa1ytdcKDJXwmZ1Rk1UE2wt63GdCPeKoyQRviePT9F1FP2SRd6TbWGAddoQrumW",
  "key8": "4nAyx4s1Wmz2EhVNsKKwuBiLWqXBYo2KmFNgN9dUXzNxMW3G4JKQkcBfhGqW6tKrCaCmeKJ5uHWF25RYB6fD6qcL",
  "key9": "21wp4BAJ8Q1ejPXBW3axt8tY8Cbphim6ZvX2eUHHAktMHEgw3tPGujqACGL7rmnoAk5ps5Dvg4RkG6vxEyD8ZVDA",
  "key10": "2LdPGfQAyYToNtra9nTdv3efeKR1n86C6od3GzEHzvvm5aGqMGa2ypG5CUFr3BS7HkiK7sZxZdBURd2ZEUigsav7",
  "key11": "39nqDtDUa4SFsiv6dmBrrSQCz492tgg9X5kgAwdUtf4jz2hfVGpUCbpV91a3KcnuP6bJZzuFopmbbbzRec6B5fuB",
  "key12": "3rpEKG8gMfcw6z8W3WvntjA61qJmzj1yREMcHKfcTui8Vxwm7UnwwjspEF3CaNYx3MYNjirHA67zGcFuazTQEWVM",
  "key13": "4CH62eKoUDqbJ8xcPcRZFm8MbNREtvhEwP3KyS4xY2VkeTLKUgFvcD4VtXQgAEpnbMp11eq9gyLGiwMLZvCzF2fx",
  "key14": "3bE1AQ1qDM9vQRueoakz4kJVPRqphG9YhZVv4tBaGpFqUtXk4cxSTnBSYFmeVd68DY8djgnuzepqkJy6VG42up4G",
  "key15": "3wptzdyxZ7DHJohowQVrC7m4gDsmkg1KsSp7pgoJsh3yhFycFncidZSmrsANt6FPGL7k7p6jkfsjSqT6BAuEjLRE",
  "key16": "dZu16baM4mz9Ux98iRUrhnfm9kbTU9FyTp3SUJSLKDGBvPpREMuo2M7L9e4Ap2ggSh8pc9MA4rsLonmJLeAzfh3",
  "key17": "2n739Pk2QoucQwp6kuYDPChDpz5BxQCYEBxSdsfnMzkVCmjPVU1L7524gdywvgRzXdAdq5yy6UEATbZieBK7vV4b",
  "key18": "5Q3AbbzmawVfEZpENKNg94xyra2vbmQg67eBFbmwGgTiiWW8p3svJUL6nCyeRYLydyKaxzhvuypjyhUbHEBb26gx",
  "key19": "naFc2AC6pQ9nFzsNJ28t2RaejLXzBYhgrs7cMsRbKf1pKa5bfKrjWVLEsicECDYU5Ha4ib9vL4tvQ2uPbj84JuC",
  "key20": "4At9LrSeG9XFJSGCREscNnVS8vJuQoQeuKWMpRYGwLdnmWvUjYs1cmztqvyR8y9nqLp1PcdLQzVRunxRP1k3gAbM",
  "key21": "UxET52nWWacnkDB8KeV4JLXkv5wcwJpGxUvNUKEm1nqAQL4EyaddZuL8SVcpFKKvsyXegFo97GgCAWkS6qac7qF",
  "key22": "3KWTXG4YNKKSakNMvWzARivSbXQH9oaZ9X824JUMpb5bqtdxa6uDCJx2cTpwQp2utsWBBM6ur3fF3WMbCR3viAbU",
  "key23": "5JEpdg33evYMx71kJacV2g3tYsfSHzKUZueqGUjQD4hYrSnZsanJ9QCu5UtPHNy4WMDGyoGPynZpYXaUPLGnQCuT",
  "key24": "3Xyw5W1m2AmgPuJL28XRP8ffcwQSKT5oHjoXdcrBiDEU1xiMXK8MyTCz4ZQ41PdZWwHHYa1YcUMZFZQFDyQt7NHj",
  "key25": "CRpYCuCEqhkV3Aw21oh5sNLQi18ikYuiU5di8BrxnkgHaLqHHy5sUAjhAK6kb1nqiTYBRuCCR6kgSiSZPQTLgpy",
  "key26": "g8RGc7RmXLbb2FCHXz5sazk8eVqRQtskeTEze2m9LBqxwdfBaG6yhSej5ksqwbkZUBqYzj8mSa2YfEoB95EjFkz"
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
