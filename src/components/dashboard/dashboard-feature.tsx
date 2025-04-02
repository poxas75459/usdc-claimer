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
    "3dF4Ybn2xVCebPMWSoMsU1iAHXVwWNcwECMxemSA7KiWUNXffB3qzPuKyXKBfQMKVqsJeMb4HdBVB7vTjw1zNrt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xtoqLZHjEbzSbrt4ujSVnxpBWxGHtAqEvg76dQVNGkBYNHsFsLFixsmLg9HP4qaGh5yd9jxrPhgS7rmxyScz9s",
  "key1": "3zHCSFiiGQg7E2wLYT4gt9urTGS5WPT7Vs9G3doTLNVEuvEQxoKmNrqqVyg7JEKNRoZp74qz9nxwKBtvh8E6dZct",
  "key2": "4gKH174BLjKVKgL4xoCupvxxDuKRMG7TQjMeYC8GYkKMet3Ms4MjWaoNv7jiK1CbW5k4sPrB3NXz7xkLnB9JdTMs",
  "key3": "5nwvt4J69hdf6T4jL1sCMzisaHXEfN2hWNoyxxXWHUohMTbYTfLfPw7ozdD6rUePfnr1fz2DHChL3Viw7SDcdjDC",
  "key4": "3RHfuu111Qqho3evij9t5dwxrASXX9YnBss9cefU7oQcdqFDBZKcYPn9r1WftLWsc8pV6mM7TRwFcDaayWVgqfCD",
  "key5": "8Wu3gnrqseVCZoMdrShCzd4GfLEcwWt6Eaa8GatkP7H3UDbFiLL3Z8PHDPP3KgysVBBKe2hMe15BWVXVW6pmQhL",
  "key6": "2unG6cNDzu2qpqqXQDuNmULYzNYMjCrgHfrkhPg4wW4EtgoWuHma9RxTzWqiTNHEp2H65edySqpzCATScibvQki6",
  "key7": "4ZHLzvehFjmw7AGFBt1tWiQLbwxSJpyX9Vqu7WRdjtJYhjyHBpJFPtt4gS1L87ntt69rTdo4tYFc3gj2MC72No2Q",
  "key8": "5zMbDnGooadeqiWjU8rsNEiYGyCRVdVsAVCzEWyLHhXnJtjqCa92XFbq6o5N2ApUT2k5DfqCbJFeo5chRLnyQjth",
  "key9": "XXjMS493kpBKJVhp99KRkSquvBKQPfeCtpu1smAinx4sqJXCQemdRxA575HPGodCRa6JE9AGY891Fx6VHqh8f5R",
  "key10": "2wGq9CNsqEjWa9xU8uo1sfpFWQkae41QKNz9a23hw2qwPJkEcTgZ7phjGvya7pGjftvq2LLw15e4dAXhPsy5Pw1Q",
  "key11": "3qGibGh9hWYrhsjjw2jjqffopnxn4wMSwU22K56JcFL2whYW9rqdoFRuj3jDKiMWQ24SaN6ZBJrsfn9FFbTFn9ct",
  "key12": "39bVi2jCtVjFzqamyhWFGp87eETQb2qh4z3fSTmkKqC4zYfVQ237Dkx7TYdFyX9rP9j83j2ggw1XSycj6cAjfWzp",
  "key13": "54R6gjcCDPJ48aFHP2KRDJbXmHYw9v7F7N2ooLwS2LQd8nDoWLCqkiffy53i5J6RC9vB7gnAD7h85mopDvV2Pbtm",
  "key14": "4FWowsg3unYFMqguzRrjRgUV2KZEWzeiggKFBPF8BobtHfeYN8VomGXMp7ideHFYQdJ7GZ6zad2tNAAM2WHWFovi",
  "key15": "4SHT9HPMHBNB3LPeuZtk99h6nXbdENAP1xL2YHTKwLExLdSb42SHbLc1EeoVDdZ26dwaHs41VtxNcNZARjW38Vuv",
  "key16": "4WE41vnec8Jrc22zV3AuARpRqwuV6uDRh2Q8YNj753zbXpkVXznQug8VKTfdEFYDEntTsCE9z3q4RGPBznNgdP7b",
  "key17": "5G5aMMs9QUE5uAfAqrdbd54nwxVc7NxGZZ5RG89xK2mdf6fq3URsdJU56uJfHZ9WdMryZk7RZdwADB2ovS4HzLjE",
  "key18": "5DGzbwGaWhjf7nQbLBmhk5EB3sV27aTCkQb1jj1vC5Te8iNtYu8WSsXSdpAtzZDQSR7sdBk82hDcKXpqCbhe8QPW",
  "key19": "GhJ3dgsVj5zNQQN66zsSqCYMUiKQUW4cgymYSQgKZmLP4fff17VYG7nWHVusUZBXa4EDaDq8fabxx8fvdZCvbYk",
  "key20": "Rh7nqt3b3AnKqa7QP9aT6bjyv1EcGwbhSNAKDNMxv1QMoxx9NjsJAKjZr7AXwo3rUqCgUNJBAoJw8qetJATrcyd",
  "key21": "4m44nWK9qqwdW84rgjiXFiAePMBhosSX12NBuQhDBwpzFVXHra8WGaPTEfbkS34rpwh7LevaLGE2SoKQMspEBu5x",
  "key22": "5CAH9ax7mCKoA3w5kvWDcjeMjW3rkzECCTxmJrr3JMCMDgvQJUGs1ZQdQX9WuQJ6HGBm7fWkiBYFwztfwtX48N8n",
  "key23": "3BrtgdG6SUwpP7VYpS9e8D9R1CnctXJJdqeedp8Abm6Vv9UrgB7oUq1WRoNU3WFk7yvx9Ymy6YA6vvX6rhuKxbG9",
  "key24": "2vjLgoUJKmTYW7KftuM43BX9oMkRjwcAjfWoSPNCj6Hkt6aKPHDnq2nvHPVmJBzasfjTHASMfJWsWfhiJ5P8zmms",
  "key25": "4CMYnxvASW8eQSCVFQfAdRSTUgKPJhvpyPrfuuUDAGF5pCawhoFNqPGrPEkedMzqQyCFNPEMs5uW3MVxk7qqHSP2",
  "key26": "2ecbubiPdMLcD5f3gYgSpT5n7ZmQJ1xPfZDKL9TMVivZEmksG2ipWuYhyfCTt2yCzemhCsSiGwMxFYYiaRATKgpi",
  "key27": "3mNJUw65HqRF1QAVC6LmUAjquZKGwUoqnktsYuLWFx8giP2DbA6aeE46wDjsGG898LvJeJ4EAyQDTszozSk4A2wL"
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
