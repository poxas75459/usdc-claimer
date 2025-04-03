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
    "5mpM9WbkjhohsDZeE9dnii1g4f1gQFx5iCjW4Se4r6oJsp1hHRXAenx34cjuTyvUQF8PxDGDie7G8cGBf3aAcmjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxrcJ1C1C2i4h8Ye8oQu1Pzseiz2kHYGLvm4a7NNjcEH6Pju9wcg8Sa2eHrtQXeFhvTAmmxGFia43p46CneebTC",
  "key1": "2qe8sD7CdZSYEpfAp1x23xSgzrb2wjZ7WdsZRswka58DEdfpvRo8CgXNQYKG39Bec3j75LKU6VL2hgSvAaoejBuG",
  "key2": "5engrbKSLtRuNuqdnvfCgUidN6ud94U1GDsN9hdyCga1TAkLir7UkbrLwu7cTRHuWHqs18QCp9RYeL6zn38ttWbs",
  "key3": "5cQzqjE4sD6YW454prQkgwq2eemkBgx3cephrb5tALaV5zHSx7AeYKhJbK5tS9aKE2vE7iPVUFZaB7WfFpXoezrD",
  "key4": "QWnKdDFvUtFnJ5u8EroPb7Sip2rKKTLA9wrXipTQFw1bC3hM2JwkKJsbsrgWPijs9qRQZEozC1mrbqXhdLFYF35",
  "key5": "7tEqj2BhzcC3D6XiUMre9UmCc1pBBtxeWhWzyddfdzE59kauRGZfg4ebPHDi3q8MRLwqT42wFo5uxK4gbq81xok",
  "key6": "3DcC5WSLmngsMk4mbQ9RDkYz4yHhDfx4dLNhcD3UWDQihU5SNf6bfz1ZFrxrwjJ2rbKfdbbx5V2qJ9Gg3zGVDD3Q",
  "key7": "94Emvx1EkfWJGuj1x6ivoTdbiM3qp5vTLKHMiQwVse3NJBG5Kh7hhB3gXqSD3GdY8WAv4ReoWwKKFsh4ReqzDv2",
  "key8": "5HKWdhCXbyxt5t4cVfxuj8zyuJC9oVdHKdmWuZHGxeT88rJo119HqbDPwFK9TpwzXtRLS66jJ8CPWy94pK7hGy8T",
  "key9": "2AZnnZqEkN6x5LpPE72HKZy1R2ekwTjH2NUiorA8uJAUh2nEN8HhH4Ed2CwGywyMaps8kmrGhCvmWzTYRzgEgy8P",
  "key10": "38SntqRfYHcGAtKyqfCxybCKCVxPGLbDPUCW5AXnV5gWNLagSRtqxUZef1ZLXRuRgc7oyGe4FVjFd3m1cSHXUtpf",
  "key11": "3cgGLPVgZJg7xqAAmvCwXo4XdC4Hs66JPGAWL9meLtw9BgtpTYJN9nczRdJkPF8AyiBBHL7GwyL3NiZNEY2C8Up1",
  "key12": "4bHvdqGdN9u9D6uMERASM4x9GxtRWDrmyaH1zvskCgdjMDVViXmWbUAaJvf16JiJefcR1oLh9LsmHeexBJLJSPcs",
  "key13": "31S6KVVGvacYDo7ycL6bx61eQJteGBo3Wt1Vp78VHiiKTb4uuMUpkpkVteR2sxTFXzNLF2HBiUeL8GGnrTxyaVPF",
  "key14": "32PpbdgdXTk1cbnWBatEdF76TqHU8AQ25DGZgdzeuCM7WhusiCW4VJH87nSXCJ56mSM5ZpAcTnLzkhnfcWjFj9Hs",
  "key15": "4MnGtrpL9LtWH4hDd3oLAmt6LRHrT9duD4eB89jX93n21aLE3yehsgVqQNJhzr2LNSJu9gwjFdTqrRR9dVUjRJGJ",
  "key16": "42yPSVKToUBuJGhkbpSLEZoHtDx5KV8bAnD3DrxrwGHgC7ZBD1PLrMBVRx5XHCwgWh3Twy9cw2vHt6hgEtKbHX6z",
  "key17": "4RiEd7noFRYUQxjFYDLg2133pcMf8wE5VhRmF34ufCkuKQzbDsMNA7fwUjqqzQz4RVYf5o7U5fPfXWfNFJu3QFPX",
  "key18": "3a7C9YNLGk5ynSnzPwkpVeEGx9NTqwtrfLF7yJkUdz2sN4so6WtpyRyJHxJMxeuFX2TupGNhgP4gMUGBZBfypvwd",
  "key19": "2ZxbmrtXdftqHgEftgE1djp33FKo8rfwYdMy4RrZuNTNnHq3KpBPnApanYpT569APvZz1ZLM5U7ScckspxzHLKRb",
  "key20": "m2AsXKMJYfqC9dShC47yNyzqfSmPL7g4y3i2FskdXEcux2A9DkCYaDZaNJ2NWsJfmQKov1KthmuxugyUwGSuihz",
  "key21": "52cHR7ULNC51u7iMdaqwMyDxcR7cbvmbEBoH4RDJmN8cyawB1JwhE88tZJfTBGJECiLg1w7pzNhXB6ygSYXZ2VDL",
  "key22": "4hYxKWwHb253fQGJf1MdwtvknMk85Unva6pHs58KEirHnXx8c9FhoBfAoENKGAj6kKKSbBN2fvZH8m3ja5ry5gk4",
  "key23": "4WnWqNpozHjdtMdYKeXZ8yu2T1UCkUKizHPRsfYBmpvshiH8obgC7ijjxT42qonxg7SFwm417ygLiG3Ggfbc56Kj",
  "key24": "2N1KLWr7uMnaZvF6xASvCJMnZisCbpRRPpNF391mzyDkbub6f6NahZEpUGmcSQhLPMFoqtHstLxBForDuPVyX9Yj",
  "key25": "28ViysJtVj2xHNxLAmyWRfMbni6Kr8firQjarEaRbjhffR4pJZ9eFYHZVweiHhmaB8fYNxFnVgxMGFEGAXnUt3mj",
  "key26": "3Q9dnPfdYCknhAUA57ofww3ZVomMHJCT99YubZMkN4V2QRf9k9c1TnmACqWH5WpwxZbdEXsdEJN3oJokrb2aAYrM",
  "key27": "oVA7xQBcJaXGvgPqHANCsQZLKhsmcHHnYtQtj4owFnhqMdeavyz9ADJ2rQ52bX4mCWK3QyoPMPM5E6Lh9Zoa7L9",
  "key28": "2e4F6gGdoy5KxcFLYiMb5ttmbpXvcesY9ghVuBXmUetA7G61tYM1XGHgA8SKnJo14LCLyUj1zCzXwYJ9H1yByiM6",
  "key29": "L2f1xu7BH2dNUg4xYECvu35YQdAEFNmXbscQiMXmxB6zdrPtomJ8u6kCb3NGorHjkak4vcvNFr2fG4S89Hh4FdF"
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
