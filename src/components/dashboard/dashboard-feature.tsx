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
    "3Padv9Um51LB56VFtDYWUWczarH8pV57ik3fmmeBgLergb6SxxZzyEw7D8NS1Mn9fgkQsTE3EKYEzsJ9q24pSN9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJeMdhDDy3NrQQFvsGpq9EKq37GcURnKKChhJGvULAz7Fu6tcrNf7wxWmHE1pdHx7oaHj97RVJuvD9d6YHWRqgo",
  "key1": "4PnrUXvH2xPWGMqhK8qucQBY3R1DZfZ7G1pvkuvT8KcLLwysaRLcHVueMhusVeBuAvYrXZJV5EEPtWir7JZWTSBx",
  "key2": "4Rmm1eAcNwVoX8HYt9dV6fpuZQ5HvW4dFVxXipARvqWKiJFjwbcTmZ5SR4X2cmcFLWvboCWMDGM66Sxu6f9peiYe",
  "key3": "XLzy1pkFtsqeQCroTjwjM6nnPHxLRc1sz8WWE6ERStjnM4Gvx3FpxHD8Nu3ZXHSbTgLw664sCZnHNN7TpbvhWEk",
  "key4": "4t7kTet5nuVfUppEcwa33sjjzy71Q4MomaVErQLhCQE1KABCN5z6z7TnzLhHbvZJJJueW5jbndkMJCaENLjgYpvb",
  "key5": "4jqzqd29P66Kui3TEgXppTytV5SpadQB6EDP6cvagHD5AVASoDbt2PiGVjrFohpAU8ihL38X6Fjdnhbir9LJw4Ng",
  "key6": "5WYwk4M1nbp8btuCgHakyMuGefezAgP4NyG97wv8FJZKpx3tJP3pjsZ92AWUKegEGWzrvi4W6VY33uzH7dVkvDgp",
  "key7": "5R6PDswJ9PEfRHi62xotjqf61Mo5eJDex124giessZEPQPHxCkUcNyJmdHjwmH4ZN9NQyWMaRMzaYjNNZWrywrBe",
  "key8": "2KGLDiMxwSQxceNzfDmzvh9HagVSuf1xRYMuTHUvpw5xgD6JEmpSQbJzacHfr9Dubqem3YdcCW4JetQQWXfH16TD",
  "key9": "4bdmqeHdT477kNfU7V1B7Ai89Bj5b9ATJBgy7kp6CsJLS5Ma3641GeUVNenJYzLyMKjjcEKsZStz1nH3Zw7xTmVa",
  "key10": "3SMKuxWADeGVDBzL1hM9ANEaPK2KYot43gUFpghXWxcTPpt8U43BBQGPrBamr73yFT1kcyZXdK2pC72TxfvtMGS3",
  "key11": "asYUapj3oDo8xY3nUhWcLHbNrJnUnr79hva2Do3QztMTBLB4HEA787cww3nZSmLsQcbbsTNT3bWB9rY8pyv6MB2",
  "key12": "ugpCREzdjWSzNDpuuYV46qHaJDGMErVBgjCt8SsJj5fbQq88onVwfVS33meuybYevveBX7vMVsefg3nfgX5Zq84",
  "key13": "27ZbcHYVphnTGzUUTL2gWZfLsXkks7eWnK8N8kKeHt8LaQdog9dYyBPQXbxm3coouaf4dDA2gvY6D7HKXQYoPpvg",
  "key14": "3nUwSdfhY1E7z6uGY7n34y7MqJGYZHgnkXEuEeV8BJyZzenNZDEiQ65mzebfV96dhw99GGkwTLb5eFCNSdosazuQ",
  "key15": "5m2ukEQynfGT7gDiFPS8HtrudsWkNVy7nk2tTbPuVeRN98AZXNE6T9VVfDq9SHyJNcAdrKFc1EhNYRjCM5hNJdQT",
  "key16": "5TBR4tYCC6XjwyapceXt3soiS8Rp8GqFsc9MyPNt9uT8WvfjREexjCYyiCyU9mFm4XmqVvmQ6dG6kxCdoGr6Ukdh",
  "key17": "4mxe3haxronEuJJFjUb8F6EQRhdcgMrGkCmHQMoEBXvsq8UURcruh6yZXUJR8mWyX2PNwkrD1rgNjWQ7AnGxbhsH",
  "key18": "3SgZHrduDrupbrARqDUbS5SMU971vrtyhc9reRyLtJK5dK3r5vEtZNt8wUJdXmUgdvK4vqZE946Pzdzn4vx2Ga9g",
  "key19": "4hrKgoLU5MgQ5UL9evMrQGf3rfsxhaa3brQsbYMpoZ2zoYWZASw18fnjEHvHdJykSMzGu2e6M78tVy1Q9zDgydaW",
  "key20": "5wf6uCAeY96Hdg1wC9Dp9yTx4mtBHSSvU7cFs8zVZS2RwYuKNRyY76gA2WhYaTQkZyK4UsDD7gtnCEe2a181t4J8",
  "key21": "mVMFG4XDGenGdUEseqHM8EYSRiL5jTxyps5ywbF8Qu1CX8UkMUGM4rUNJbEP31AcEJ94xKeJp4ai7V7bCjH3NcT",
  "key22": "2moJib9PgV37Xb6VJ3g4LXmpULGojGtaYSYKwgn6F5KPwpy8myUzPQwDBgVYd9qkkQKmhZidQ2GfBXkgNTuEPFWu",
  "key23": "425Q5ZbjfBcxhQY7FyydHRqo11BEQ6xvr6k73Fm15uSZGwcryv6keL6rieqELjR2h1K4kBSGmm5nFG8yehC2TDg3",
  "key24": "45VxCofhrUXjfbBbbRoSBucbJNrR8wqpPdCLA46vnaLmEzE86epv3BrJ15cMLbkCrdtG4npTizxgrUz8NXc9GW6Q",
  "key25": "3fpxERKwABGV8i2GfVyHZbFcTRdr7Jho8cDPmfFTsqZLA5vcgpnFghgz7kRfpoiEcUK4AjQsZvn9FnHde1teFeuR",
  "key26": "542JHkBGWFPwxqGDtaxp2Ni61CosYUUWwiY2oFGBEkDAcM5hAnWpGWLnzTt7kDBMNaP9BkCJdrNFA2Hz9GGdykJ4",
  "key27": "3mjSyho3SWBCSvNcXTyRALWv6umHTrk2LvuKWpFzyvHG1WvCHYg9SLBhHDztkBos1mjZLG2G8bUJ74zpuvELGGDg",
  "key28": "39Wk2aere7CRWsjJuQgcj5tRrpQZmvLqJTkbRS4jFHZYFPFpCx7NLB9QZkrXab6nhJNUggMY5BhFEU75m4UHxGt1"
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
