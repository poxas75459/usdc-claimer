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
    "2xpaX9h3bHUKjmVHQMipXSBZ5ar4txfyVQ799e7jCrbkoKYGg5umn9bzGpZ3byeWnn6y9hTzb1xJ8V35kyTvuWXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnJNJKi6ncDcacns8sikjrt96DwcZnHwb9vsspJ4SXAfkWbURoBF9ZQzxdnQJ7wGMWuzVsMZVJyiWCYvih2jCfq",
  "key1": "5JD1XP1acvVMrDKoUkdPMoSMx9RtNceTaFFeZJtXb4USAqqrbSe6DJCeVGUoMZtJMtUVyedE9ZsDM4oQa3DaDhPF",
  "key2": "2HsCY24tWArqhzK3hKY6K6mePFQw49qSzYjQFN8cTayjJK8psPo3yKh9cTwXnPze3XCMho8PNARLDBi6BFYpy1Xg",
  "key3": "61uEkpdmJJ7ERcHwZb77uD3bScWaW3mHBX7irnms2A1oKfP7AjTwMAxFd1WxTXA4s5N8kWFUnubTypP4aj3hbqZ7",
  "key4": "3iWj4nMCSr1yJ29Rgar1Sy367zWZvuGB1P2WTkziwAVVT6PDtADeim3GSZLQUvh8zc2GKDAH1QH2rHVG1nYJds3",
  "key5": "9BgbSTgipkXLPnB46dTL6JrpcB8Mv3ShY3cfXm4iXpBSD42d8rYi28iaTh6iSmywZQ35Y3okndb5Z4hWcRD5Yn3",
  "key6": "Y81UqWM9TNrKQVufFefirgTn8h9DEYPaNUveMXkDuvm46i46ZZSimZNhBvombdy14awFtxD86BrfuQh3ANBnmGM",
  "key7": "4y75puGH7JGLMteJyf7VvBEZ2KuUSd43YUF1xkup9RbLyuPgZJY67Pg43VotkwSM1HV31drnna8hqFUmBkHSSbiC",
  "key8": "kRiGod5xyPDaNGvxkbB5bEQK9Psgr3MfVSFyALADHvmz5NGN7aumiQ53VDnFbnDKMujjG8mK6C9KZSkLZoKw1uK",
  "key9": "4ivLuusx3vykiMgz9fW6iY2SAr2Lq7NgAi7go2KYp3ChDVHU5roPK98uXsy5HwcPnTCeWVQ7ubq7wyRps1yQqp58",
  "key10": "5JN5VC4wELMV4ExkFwCoF9StRh89Y6edNR7rhAookyAmLZEmqMUibLxVC4cp5uXCG7fMTyEsPUg2Niioiz8Mn8cV",
  "key11": "3s993b9jJCKbfwX6DNhhBrwMXPjMKVJZMtxBKRJjpksNmeJcT5DSkMA1Jh6sKWndkBiF5t9kQjDcwUTNWLcZXjSX",
  "key12": "5fCD35AYoFHe919bCPYqMqKXEEGpfRF35XjJRDkAWjg3mVwMpAhAu3kBz2q17KDPkvux4NMJwc2UDmL9He8P3J8Z",
  "key13": "mFss4SA1b6gcGRAqsKi7UoqtD8WbuFWRboytebftHPavhvSarrLrcMfRGxx2uC9KAPhkjhotybNSi5RyzaMXjkh",
  "key14": "5V7fgguKDqAyq6kxXVDpyGis4UZVQD7PQJGbrPFeg38541jMuSwJdGLxdS1qFC8j4au4Gdev6oQRzVcS63CrwtnZ",
  "key15": "5Hz9SLKK7f29sVS6oKABUshojj8JZkNo9cxhQxvqNUcPgRAEb4jhoq8ZL9bwWREyrsdqaDM81GDmQfJrHqN1WBwo",
  "key16": "2izKDZzy7fsNhLgHtUoAThqrKnhP6VbR5rkWtKLCSwFTmYgDVDq8qyap1sGJMqmKXq8KQEwqMzsxbqsEqXysnRgS",
  "key17": "2jZFtgdSm79JZgZ4Yn7nG3qVqcLVgmEHXhZb2gS3kbPd62DK7sW5uR4CxrJMF5XUvcR3oKVncUx8wstaStrgYRhr",
  "key18": "47pPpMFV9Ut2BkqHS6Jp1Fdr6hNkShyRarEnfAu9hJdMHZ5r1HjECYUsFfAktuxBK2Bga5svrmYpkiK5iEPvnS94",
  "key19": "2ogJyd7ebm8RLaqzCfSAqpBqqeq6qLgjJdTZ7qZ7KJpxf1tkWw9iVjf6KKmuTjro7gnrop8BTRdsNvUqykyUD6g8",
  "key20": "2i8g4V5mZ45uDnubifWjDamM8a8bBywa8erMWGdyFG3xsagW2SqYgfCK2ToXXbkTcFS9pMXp52ef93UfekWYnPdt",
  "key21": "2ocr8uL7c8taHENFHN4vAsshBVRPQMsiDwiaLE8ZNBBn6oUdNVDbpEM4Uk4ViT3mPuBs4jQeYcHw5q9iDUU2rkp1",
  "key22": "4VfqTfkrV98U1HoWbaL9wStufa3nNL8jmzyri7nG2zQCArh2VXxNWmuidx29kpH77rYMJD6Q2cAxETezpu8XrEao",
  "key23": "3Rk7NHVCG8KjPTnc7DUY3NgWsWb19tYonYk2mk3Fycqdm3pTAccqv3Jkpmk66SivUdGk1U7HBTRQDzkK4zRMtbxF",
  "key24": "3nXyVtSUcRWVLS5SCAZmkm4iqsNGaSKN3cfZJp84ZYe1NDJ2D7GDPEFwZqyoayeonv9TFE7scs1ZiBc3M21Bvp9s",
  "key25": "51xHyhJVpMugS4TULuMCGEwswft6WLJmgLqdHEZFjBW8JBHdg5x6GaaP2wC8zf4jpr8ETng5M7phHCdxBJSGBarP",
  "key26": "9ZcdDTku1WLzQCN1YboQDyLyuBqaMurXshN5pXW8Rwe9YEJiJXCCqeCcKDgdh4ipQuLLYqHKoZaibD8tgAmoA4Y",
  "key27": "2QkbhDyEhRV6sdc4vYSua5oqZFwajCrXx2ztsqSVhvf783iXRWEKnKrRvrB9sxyEtks6AxSqoxxke8p2g6aLTqi4",
  "key28": "SbDBd7JCGxbQUvAcgMy4HDGzqpuWNVCmQ3bSVxHDoSMN5mu2uq1g7aKz4GuMriEhpZ7VgpaVvWN8pGAgnLN4tBm",
  "key29": "2TkwtjjyVCJXpafxxFgvCzSGS3ty74254J6bFpxm1RPwBVzJuPhiSapicXSu3HqsLqNMQQfV9qySKR493j3CLCCd",
  "key30": "3zAKQncCjMprR9vj7hCQeoCQA97UsCeWMr6MboF8HCBfee3qJanM3JxM9WwRQbePgqmxehP2W4TgWF523h5BSdVw",
  "key31": "2GRobL5fJSbEem5E2SjSFiX1GF4HmxhcWiBZR3WBsU5LSU869pmGSdVmwVQ1fmubGyESvo4CoSJZ5Q5huXfFuBLr",
  "key32": "66hAhT1K857s7eHsNYPsytemNZHHGUrGmBerh61MT3C51sX7Xmk4gD8Fj91UzL2ZgsfT5SrXRZU8LXVXiTo8PuCc",
  "key33": "xZ13uKdWoWLS48D2wf3raknGn3erMMS2TCnD5desCiUNmNDzyPXSn7ZEpsgPJDe4G4nNoTPwEkW62YpwytRgTBH",
  "key34": "3RpRe2goM2vdY4mWgGtfT7WUoUjGk2HQBwDgT23rKhs4BtXVrMi9Ys2v9x47zeVKnC8RKaqGKjZ27HZdEipAcHd3",
  "key35": "2K4SYQ5fm9a9L41TNicPJQpdYWxzcJVWLGguaGa3of6PqfvLgdhbwfLKvMWF1bMu5d5EpYRdZad8yE4eh67G5WT",
  "key36": "4J4UHNab4GqtfNUqykxcT3UTdVmjceqmNgWhLuYwtk8YFtRYWMXyyGPmauxNgBrfJ5cUqWxhpKkcPnaEFE9hAwkJ"
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
