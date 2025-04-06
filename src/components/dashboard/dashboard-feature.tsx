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
    "3FbpiJSq2S5qWzii8d8Drj8jBfVug5ZZ6YArwhvMzxkVBuf97QJ5H6Fh9L7SLcYEDUVCmMg8Ekp9UrnaP4nMLaE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDKupPafmQPXVqRiBkGN7QqzonV7vN6FUE1NWN7pXPhyiD2eXWTxS5psrvibHJsbBcskWChRxeX2oMHWfdQzh4f",
  "key1": "416aHvgYPBCcx6scfjmaYrmPKgX7LhTRNTaZHUAoLECEu6Dr5ZFZZCfnrS7xszm4rzpdqGkkYhtwi7YTwj8aVBDc",
  "key2": "4Ttud3yqraT66kRL7ur1GRonJDzvQAmSnDJCE6WaLbaGFxzKDbdvyDpXNuy8kXrJekQkbzjQUKW7uYkJ8SBTgmE8",
  "key3": "3iCaacHtiKF8emApzSkJYasXSjhnPAe7UtgD2AKgmDRqo2tAAAa8DPuDs79FRsHFNJpLWWJ9e8cU65XHFQgNquZb",
  "key4": "2FGAzcL6vwUNXjjNk2SX1LJEhyimcG38QX1Em2ebkaPSKoa3aKHj3bcVb6D1t6u9SKyhSedZSrnbrYYDbCJC9Y9e",
  "key5": "5biXeE7UAv9KGrzv1gGouLb57WCXVcu18vrmvrVXR2gkwG56hxyftGyVLYpmuvz5hGHoiuDEKDD69PBfqxV3fXzY",
  "key6": "4tHYGcUGVVkYk2ZLixv7GuioBnDDnhbHBfjcZGZNjGAz7qG4xP3vMRzCTSMdRGKuAkyAWMK3ezW6Jd875r7BTF7h",
  "key7": "7WPN8apQ3H79Sq1gJfSGnKm2phsBEVQNo3ukLq36EZqquyvrKgMFiSzgeKs6NkE6Kg3d3nZbHLbRu97pSHyfHBS",
  "key8": "5TbhkwizAp6HMkX9Cm1kBR3LqtUxJwPpT6CRQnp8XTGHsNtEjf5YzJimiPxguLuLpvtqyzYewgKVtzQeN7B7RAd8",
  "key9": "5K5H9jbVR9v4EaF8wEu4UMPwmwPyaRw2EDNvkNxAauFwZwsNak5qvsMgM1vMD1XhsEZMHGitRQqMKgPJtHtW8kCF",
  "key10": "5Nx9NamBuVC1mQUEYBstTSRnt5nbEKB1CC6MmfjbX31TL5fChfDWw53FDBGVhcSdFW2W5nShBncryJtbGN9y5Cf7",
  "key11": "4hLHXPS87Rh1G9WenVJSNN3E7gLZFZAu5kFmdhEPLQC5Cf3fE37ZyUBgAySd3SiKhHszMC8RUNqSNR9u31ZH7u3C",
  "key12": "2123bgLLf9KxY9nWDKvVMvYr45eWdHkzaCstf1Wdw6WQhLudTzJtoB7nvpJFkCm3Tf2CNZ2i5Esnq98kohYdYNdg",
  "key13": "PJoP1wB21N9avn8ATbrHhPkRYYbSqrAC9pwKoWYp8Yf3SLdj1m9QiCxUYd1WzMPfKZR4EPfsRFnW9gHQYfJinM1",
  "key14": "3jmnAGnewK3i95ZN2FV4jbdLLSWyWsJTMK76MCgu4nMv2sMS8fTpjTWrGEi48RqSa42otYcWTBFvb2xEcLpMFA6B",
  "key15": "4AX47yRrrnQCK71yBrMhpCAGBS883y7qxzu2f4P2hWyXv1F5wGcoQXnEL4BSKEgUg76oBqsmVRoQgG7zcWp152nU",
  "key16": "2S7UxgySijjgPDJvG6AqWzgQTkw4JGoeXLLSaNXLdZgoDu9MvYRjMHefH1xxPLY1HbDAEamsCQVDjvi64Esrqg1N",
  "key17": "4eotRntGZz6QoRE86VEUxfdR65hk88P8MK1JWuMLotCSVQ2Cu5HBovXn5GLB6BuFUVdWygmdAJ5JQdr314qUZZyE",
  "key18": "2SWvJhmR23BeFLaXLAZjeJUzXJywztGC14TPkXXnK6sX4NnbpJjdsYhLnq8RQjwpH1sGN1A8DHEi5GNo6zmp5L5k",
  "key19": "c3NCgmMTSdxuEE6uarExAsDMTxJdyVF7UBkZb12d78Uxd5xazAp7yLqBD2wqj1ReXHksFT2AGZZMsvjaYUgdtkC",
  "key20": "3UFEUwa8QK9PR1UkJaodXpHFk8Ju3VAD9aP6dzKTzPkmjpyVHXTmXikNDppBN7msfw17hYade6pinsf9MLAtXAd6",
  "key21": "23jKYxAQrp7H62XMew8WyqURir5CeF76YLeXaHLYjcRzbdqzkByLSTP59okYtuod2yCbmFBU8bBfhhjfB6nyayap",
  "key22": "4za4ouDhJti6CY3dxefAYcVji7Q1bs88Lyg86zK7N33su5k4jFTMQjQvzDvthrM2LagVeVNmuUT6VbmDhhJF1EUZ",
  "key23": "qvCbw7MXhuboMPF4kPjuymMDFrCUMmi7j4nkLn7oizLvvzPrcSYhAiKqFLjiC7jmKJKTdn2RdKjPPwpFJZ5gpkx",
  "key24": "5niYQ5fWqwXv6k52QqAs3bQ7MUxCgEm2HN1BUZSSekDNX5N9iCtNGeca6MMv2aF1WRpF6stBfruZYfDUWKqjacJ5",
  "key25": "4tXr3wJAVrWDExJYbFBX5hEpngYQiNh3DyZXboBjrp2Ue8tUYDpxZ6CLwkuVMD5PB5KBmG7pYoQTQRMr17VrJBQ3",
  "key26": "32uF17ijgTyxyNNqn6f9ajpXogqGfTE62xLTXr7zvMkHyaNphWhNxLUJTqcLam4f6ok1vy3pZKa7TyZe4UKUNrF7",
  "key27": "3hi5LBkKgppsUQbPEiYCEbFCFTVfRuayombHKZFha5g8VGovYdsK8XuULkyJyMmE85ckaPaQr1BR2PrdYb2aHg9v",
  "key28": "5ic2qMJWL615iqvcEK3QJ3XSCAcvF4ZZfQZH2jCTccbKzBV8sSP893JGSiCpwrjqzqQX5B1mzwN7cenZqg8SLsNY",
  "key29": "qMWYf9thm2uy6niThXbfqYWtRSvjvMiL2jpPayPng4cWYZnD8CgAYvuE17kDXrSyzd7AagNchcwNs5dsX1ycVpp",
  "key30": "2dVLc7QcCfPRWbfY8viU9mFGfeqC7xafq9axmnEDtHmuif7z7yuCvQWCeDztJPKiQGxbYGXKGayAXVH2R3rd8iFo",
  "key31": "3pqZsDLdfckTPy3mMV3hg3Wem3xs7qzqu2tx63wmGnTdLVhv3JuYBR3chrcibZuJ989HP4Fb5xuzvgqBZ5WSMkRd"
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
