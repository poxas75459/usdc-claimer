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
    "3a2erWEMPKeehDBsiGThB67B1UEuF3N4VXtUnngWBqYVrqF3PvAZkM3jSBxpXgxCrndE78CjmBL34HzVZZs97nid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4twRHPGVRFmjvRvszMfqnUptPzMDLXgZxiHoWj1rRi3XLZcKzgzehZXXkgLFcpCJdU6g9bzvCoPM5mtG5mTzp2nP",
  "key1": "5f2T3pYY7efyvb1z8EkbFJhpkPpnRgV23vJLwaTBxh7NzYVfZwbrqM8MkSH12VFyjLsJHTD2spcXyJayZMqYBYM4",
  "key2": "4hPNCTvXTnHZHdTQaNw7QqPzMTC9by417byn2KDAUt3Q9Tjb9N2Zmqirn9KoEENY86m5h7KdLd4AYfUcCrqnSmRR",
  "key3": "3AQ2VQ5cfrxuPghGdyfiQtqJMDCBi1BGzMxAYXYRGdeQji9N4k71HQRqQok6c8NvY9L8xij6LHSQCHW2AKMtdzdG",
  "key4": "5iin2qyMoBKMedn85tsDrXi4A4BU1jKjBTzYsvCRcrYpUXaFp9guXPabaqErh8JDwbLD6Y2qJ2HA3UvtbB5F9p3a",
  "key5": "5XrUh4edgYXQ1RTAtmPA4UmfWav7jqTtL8zzsV8X2PUKkTaTbtwVx9oRmbxC1GQyf4U9Ge7J1grAehZvxCt6hnAA",
  "key6": "e4PwHkTnTMHpieWehqWy4PdpeiLzwGMtwfSZwmDaMfiaCTLdwd5ENKY8CDommgF7m6XPxj24MEnJ7jS1YJBqzXF",
  "key7": "2Tm2jd8M6AZ7h1k8AXhV6arvnscxRcu1FqdgH4JmU1MFQpQDnTQ3ponFhDyvHVn5Cv2xqjeUnZ96q6JzcoGhzwN6",
  "key8": "36MWx93YhEFKcCtbn4ziTrjwPYc8mYBQE6pL6bVGP9xJhkRLrFCmYoYm6y3ou4oNiXM3zA1okfFKCa2MyxE5VRoc",
  "key9": "63hBVeVMWXHvWZ59gDoczFw4nFJeggwcqqhYhpymHcFpPMvdcpzrnfbAf4hT3LSNhqmaZDu4cnhp9vs58f6eZ5n1",
  "key10": "BaF4CykAMN1oQ5JWQfAoig55bgyeGLatdtF4rab3tYi33eV3Fpwy6b21GY5uTmsWhXVH6xwyoSRRQjPo45SHPYd",
  "key11": "29VewNvNWFKsJn5J5UKPJdW89EKDMSLGyQZFiJt8F6WG56EPS7BUv3yqmpMmS9q2cTGU6jNUZEgnb9XR5VRaXoHK",
  "key12": "489TPEcu6nezhJDLHWMB33TEddidhc2YuugqPxK5HUrCNTex8TcLYjqk6S5hWFehyFksddm16Q482gcb59aupCmH",
  "key13": "332DPvSk4fcigDYH2wBu9iup5YAZurKF2v2mPtWR2bp4ouzEPpWAwjbH9QjcCkDJJ7KhKAYct4nDC2zCNjaQ9KbZ",
  "key14": "XPNWuSx3vxWgQQdvDp4uuuLw23wbC8zwzDCH7CvUJLnQCdYh7iJy4nS5KrmUU6gxFy5W2ia3wgeTKfEtDmf22Tr",
  "key15": "5DFAsx2Cpe9m5m4uH4bmMeNktxYQLaV5QdLfsaVMSh5s8cgSh1UYwdW5AYbf9Cb7deiXBZ1hBVQJxpXPgArUbAbH",
  "key16": "NRXWbjByY1bCeTJAAjDh46xLMC4g5e9252aSzsuPHYdF5TtEfhooc45BCBCRKHH81uoKFuTcCHrUqS5RGTYjfnt",
  "key17": "zRaRy13SsarB2sUS9wH42F2Ct8gnHrDBmaBGGM6hw6dUDuG3ztjabbE4W9tUA5ze4Av28or5YucbRo1Zv72URN5",
  "key18": "3HBQ5FsBmbkcmpuyRwvDfGUmUYJYLBnwWzUHoh4bVUW87HPoyHDfiBqt5z1KfdfzDPNy4gRzsJLWg3p8PMmmY8aH",
  "key19": "2oBv8MWPnAA9ec4phNG1mkynyjiTjWY79yUv9FiWG2wBTj5U7m2c8HMspVMyctMyFNbMqzF8TdRcLG2zQ8qY5FNf",
  "key20": "aqryckxKkdA7hMSSoj2wBBx2dxTfQxvFQWfR5esycyGxy7hzBJJVzWNb4HvffqVwvEifURFicKw77Z8KcwMUmC9",
  "key21": "3GHYh3unz2k2XUsz7tPYA2ga2FoDv43pfw7uirqPMf42r86f3HJDm8WpaP9dD44NKjqsrLc8MMZRfU4GZouy6HZb",
  "key22": "4gVjSXMCVRehaDxskg8g1yoM1WSa6XUTpYefUywE1TP4EMub9kqsX8brXcWzv3qvRiYSBq2dpHiZu3XpL1ia6RMs",
  "key23": "5Tz6ritTXi35rDZTKWrZGjVpAbinT3DLHYBSCnNt3RKoY8u42bgZeCAueW85D9pf7tgmWmr2TNmCNqGHgCgL4Bq2",
  "key24": "3gLWjoSDLKFWZvNa6jp5SA6byaGUQ5ijSy2NDpYACiqZg8aZTQ8JEJsJrbqhiMUQ9giTYpgfZArrD5NHF3UXCyw",
  "key25": "3sQD7fEoc1GttShM4Gk5fYYGB3xZuKdiQtaNMaZvbTi8vymudxFXefnxxqK4f8BfrCaR9wH8beMZZFFy26RmVRLk",
  "key26": "2C3XKmCte5hcsaWBx9RyC2KA6JEcYy928ZPZnrtFrcaE4KAdYwF1assCPL964PtS2WR9vJeNaqZ6P1eXm4FMpVhF",
  "key27": "2qtN86H1BbHy4v3122PwHW5hKDR6EbqEudEuaEEBsmxWYuJEb1guyDxP7hK2VMERkAtTWsXMHk5Q8F7WvmHtAg3E",
  "key28": "3j1m3vdmrA7ktfPAqxMud3GtV2JHPfeVgYM3Y7zHBqfUbkaMoVjX1JS75Q6Vpg4EQk9gXyaDzdKEqSBWDehw8RE8",
  "key29": "4r3uHZQ3WW2BoTVhHHWnXyge3xFKDksvYVrDWLeG3v1a7muwhKvBHRP2RJhwqCbEhsMHrzCsAqEs4QcwndnhnYf1",
  "key30": "39swNzrUoAU73RFscYR3ZekCBJqdNXevkkMpvn8WdYvGpmYeg5XSwserkz6zTUdruAqgwbGRVeC5WmKDhQKr4Y7E",
  "key31": "5rUYmU1rVeJk87TfD6HkFCyZiZy7famovwRaJGVL7AiEy4PJ5yU1cxMKm3DPZNFAXbbsNASWaNZxHWQF54TznnHF",
  "key32": "rDe9ac4Fn22tLf9p9qm4UUzVa6xAKsQn37H1n1zSwqQWQZSDJHo1JaUdbDVSUS8HimqrrFWWWeuCLFnPef6qcMu",
  "key33": "AceYAwhXC6EBpgEtWWYoXsDt3jYWD5YHXpy8o1d6KcjtAB16QsxTc7X8khWMUoWijp8sGk9UozPdFvCNW9Ed7hW"
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
