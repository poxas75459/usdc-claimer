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
    "4MMhVPTmtj3BU9eSavMYMp7Xk4q4dDWZjxjfExVvZqZZ4XnRDwJPY2TbCjmeVAho6ANtwh836AFX89ywbkDW1LRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aVN96HtaGauB5SLBo6CFzxS7eAbzYT6XzRPxycPDWjxexiwFrLktJumuXcKyCKjfnbLjCtkVbgn1cbAtChyzhF1",
  "key1": "3BWwvX4Qn4vz1fDZPw2M4ftE4VyE46uSNWkgkWUQHhpYvt3k7z4znaCES4evYVc5MHZ6nhB3BQnu4gCbGNPEZSMK",
  "key2": "2DDso5bSBYXXBkCZYxSH4vff2ZcNDuoTBHhdGh6CKrDmTzhWc5iZTvENegszj1oMCduLznDSxyC9f6HKFgVyZkHH",
  "key3": "4pUSoHH32KZQM56R8xZJGLgw2ba8CdwYHTWGHLGtJZietfSPnVg7dFTzgjdxSWfVqy3vRZgkY129wyFPNSkLy6nh",
  "key4": "wSga63icUoJhnytZeAeSgaWCyzq3gytsg8yhJoBNqtCBWyRuSk5nAVttyahc5d8QuV8igwgYuei9P6Len1nb2Fo",
  "key5": "4rhs6bKp7DTrWtGjWtffTvHx3xvKoJ5iSFjSeCY2YbRNucFG7CG4weU4hAkc7G9Wq7CSmgsPNnA2ZjPH18GhC2xL",
  "key6": "5SWfSgYGUbAiZ2kd6uoua8hFiW7RFMQfgAtVP4qq6rEpd4M9yVWrCD88VS6tp97EYuGgDKfSybtSc1FjSNMgMj5C",
  "key7": "JNcpJZXNSDAtLXDfPvqfaCyaTN7J6u7HkhoRQ7UrNc7TBmeg3FHbjaaUeyDG6e1oeUPrgYc86Av2jsKvzanHtR8",
  "key8": "61mtmCvy6BHx3zWY4JU3wToRgdqx7smQSnhN3nkGBekFpo7WkunYi12Ws9Mx79snb9gA4LtW1uDpvprvFVmbe1GZ",
  "key9": "54rdP3SUN8wbsGNTY9ZCN6Z8FgqkmCWy8bdYGBCWcBP5NkYFXJa9u7iXFYtHddBYzu4Giyf9zBfT2MSacmC5k7zb",
  "key10": "5dg6KNUzoiy5oHJhK7x5J1Z5kE2hAhzWYJ4JBtQATB7mNUxW8dqd8TNKX1DUJFX2ky51gDYLgX5W3t1Xx8YRGZbS",
  "key11": "4MCJjJNBNzzzUK8Eui4xVBNUaBSxV7wPUX5pEncENUUmPvFemUjyyGyoiadJrWSxKpphpxsEVuY5wWJiQuTRRxTK",
  "key12": "q8ayoiZM3avuwkG6hjZjfmiB4xcEE1wc4wJy1yRmopVZjsjjPZqxVnzYgJb5vvW6k2xJUiw2aj163KDSs64RLp8",
  "key13": "2woF2vyHYgch22gAVmUKGzFytJTmY6nebnmwT1VEpmLj7krGqL5G4ZCjYGnZFiP7aYpGS5QM7Xks1H1SpKELBCHS",
  "key14": "3yUQbYk2Q18huDisKhuKya2s4zgyvqGv7YxEGSdYvZBXXT1Nt9PhkafSmaVus3HjszphoPrho6DjG7kLEUqYyuHK",
  "key15": "2AC1Pr4ojt5UnaiDim9NMKKinBty8HZHjbHpqmoGgYCkys4erYkvwdcBgJYghdHM5bB8RtfhCKGQsYPYhPGW3wm2",
  "key16": "679LAgiWUdoYvdQo9M38CSxWHQWcUZwmCdAV28hKH2d2WCZVP6cWj8p8drxkUhtm1NEPR4Ry6DJSLNhjYp6vfwBj",
  "key17": "2SsLwVZPsGW34BjfG18HN8LFUxmM6FGX2Uj8cLQDSF2VcMPDQttYbYZMqkFuzzvw6JmdzBz7wD4BUkaCdyNKAF7Q",
  "key18": "d4CsuXNADyx1GJm2teTSsMyUGQmEZaPrWciwpLiyatwqV8Hqw7UfwKdS1NaoyPGBLxCJJz2v8kdVfS2bD5kn4ZW",
  "key19": "3CH9HN4hTPjjH9LgQk62pFbJkVCibgvLTmSCv2gEH6UpiiR8KfhaySYvytacJ2BbhNTj2EV3e2trJBB2mscdovuc",
  "key20": "3RfqwVjFYcwyKGFekcPSzMhuqmeZNL8AJVCy8AoCiLBYsds7NgfeoGhFnvbEnnJR9LywCN4LgkCCG4dzPQhoxue2",
  "key21": "y7vk4TruRvu5WZaMpoDyZGs56wbxH5votL5vRjSJGDsUJ3gnYpNNRgpyCAXDcTPx7ZJoh6ybXVVm1RBbfJctDvA",
  "key22": "4KWKD6pki74GSZNgoCtJZ8yeUPGYShqk7AjhYf9C37cfiZ9TdccZQTRUe31HaPexXt8m9hVd6KJYHSQTqaMEcfHm",
  "key23": "52oLRKVSKjWKRQT4Z7URuLauHSf7AeVQRNkwwiJXBVL4UAwi3JtYdk1uV4jxYFch8FMPsE6RuqgKBzACREm83j9M",
  "key24": "3PvPtqFdsxNarVGH7gzVBtDHcFXQiUJn6q5Ty7qY3CLZKenCyKqZug8P7UFqaE8i2FtTqscAjKQajMf6yaXPgVrq",
  "key25": "4pkoHipTanvqUuH9MnMpAU6VPkZWo1qmcYkJKALD6RmVCAAstTbB2ecpq7ev8uPSHcuiZUhaHvEzJEto7F3wV3f2",
  "key26": "BLE3xdFxE7PNXCMhuYCTwMkgs4D3KmdVUnWhCoJXxZhEZWCHe9RCPAoqpJt1JF1g5k5pxx7bqyLVwusJxr8bVMr"
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
