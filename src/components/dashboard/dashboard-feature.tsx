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
    "4KHuVadxTXLvyNVoCY8mWbBLyrmRetGnmjdc8cb7edXPYT7qVRZv4CzENieEsmENkoqUpvG42wo4jd3ieAMRZBw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xMNssPSbCozjQtKQ5XVdRwckZ4uz2yNJYjidbHyGbBS71U6dkC6mso1vk6PaZ3m7MMsBLKTsSN1eybLJDWYBNCS",
  "key1": "2GYJ8LAqW1yNfcYhDznY895zUsVM4UqBG85ta6D4Z2xvQ9ibdmc2Y7AXQ3PLBHGVjL62qeb4uVv5hUYkjKgimn1A",
  "key2": "3ADEgSACTXvYRyZvDoDqsMa8PG19XCNc7mwC9HUrAsnEACGMvfGXvrVmYKwC4YCPtPvwRoPWk18uGbZH8rrjfjHd",
  "key3": "3jRHhiZhkmtAgPmi4HX4xJu3mNciKzddZAL8aPSFQm28BEp352q8k1SfyDqL8zWRmqJZRYP5R6vs2B1Ui1qmV5qh",
  "key4": "3axror8tYpd6mHsB5BJeMxNbLPaiEWoisag7wb9hbptKwPLMEWdwBurSAqheo9sQ6yVMkT3yjqB4M3RgBtqCMJti",
  "key5": "3VwVJwBWtqUFAdXV5p7tYGPwR9TQjAPCFQkpL5ytoKXXVTpXdZFKEs62G5nhirKQtCxEWMmRhaBwT8KFa7Bi843L",
  "key6": "22E1omxpUqiLomySYDLdr1UcQH2R45bvcstGmEcPNjsMHtSY1ZjmxYEkSb7GrSs4V1oUQDgehFCWdsmQdUcTobbG",
  "key7": "4JkSaVZw42znhKmod6C5hgSwHfxuCKuYzvoW141MF4LxqwYhfRahFjLmattHSDJvwt45DM5A3hJ6CxfUtkZ6cNgE",
  "key8": "5r3vYFW6CXWjzLhBdJw69khaDR6RaxKhQA2Ret45sdBC8jSrMYCGrxMHuRes9B4iUc1bm28WiuvkZP8rVfRQW9cG",
  "key9": "3jmWKutqkNypX39rtPuTrXmfCnmFcNWuLE6jR4zSruKFdDbqVJiwrCeb92buZBGJoUX8MjUtyDLCGahBAqMd1dxi",
  "key10": "3sTH6VVP9H9g51bMyjLXAgt5eS6HtvT4Vh5YK5VD7E2YD8cQj1gBWwgYHg8BNwHY2TmSRGobSSQpRRRsgSmFyDBJ",
  "key11": "5uniVRXFeXCmTikoUJ6g3ip4Prsgo1pQrMFTtWoUGJDR8uuwYyNWzBsuHrAVF61JdFk6p2wkHU8u9TZsQvpK15nB",
  "key12": "5XRoKuurAUKkLbPd154z6NJf2nmmtRgTLUs1v86FD3oFcCy3xJ4pReduCzrs6bumwC4jKvkEawhGEEdNuabUqW17",
  "key13": "5pMQhgfrPsQpUWrN63aPeVzeHtdU9b8cRK9btWfzUpLSiDqcYSyypPguuZbEkqcNXfG1cxHxLhLdKSgfw6xq9tHj",
  "key14": "KpxU8GpjvpXevABA3FEkDCMNjLYXmkMX4iRD4roYpoT7Th6bq5M75V1friBmfuKD1NbqDbaoZnRWW581XgJVgEm",
  "key15": "3HKZmmoD7jCenr5haYvoS6JatJkQaGsdRDy5NE2H7XMCDrwYdJeaKsjm5haJmH6vn6HWi1HQ3RhycfrAsfZ9EafM",
  "key16": "5Net5gJ3As6LezEtupTDXqUsyUZ4rj3LmSoYTk1BznwrM5ykqemeBHJRnJT7Zg7Q8HhgZn2DWAUVwnAE88NBCLpZ",
  "key17": "2eziG5Lo3Ksrr6Vw3LqARNesBArLbEnBbxApfcYDxGywwpmrkncQ1Er5kaV8d9kC2hspaosLEa28Zkxa81wZo1Sw",
  "key18": "5wyV4VnDriDUE5C1zf29eAkJTKY3KdZwsGbiCZn49KQt42cLwcRbUcS5fGkvr79F4kz8XZ7o2EcoPp2rg7w6PsDc",
  "key19": "5JC3r9ioMKKJU16NfA7udsCw6NiGBy1JB2V3PCsRf7R5oA92QmBJTSUKagKBE9qMQoCBXjRAQbpgbs7jtFQWCzd1",
  "key20": "3UntNVX5PedDzCYJHjDvNyTuFDrcNmeoicNsMTn9t2cantjAPAqsBzGVeoLthpob67H4puKcwSCaucaGn2ZizjWT",
  "key21": "5SkGUxKaU4s31UheoC9fKeNWsVQ6oWJZpwuMUBejoixFUjDZWfzhJupgPUtinmPAS3yTifJ7RC8FTZ5d8gXjUmas",
  "key22": "3KCZRQjXjpzHnT1Uaq6uhpRKumcozYXgwr6nk6QcJxSPk3KqeLu6Ru6NSKeqy8bSJKHbLE2LaDZbe3y6RHVcWARB",
  "key23": "32hAH4oM6Ym4to2Ksobnt8rDgxia6FDY2HWAfPAc98gaXQxAQCqjo5hQ9Yts2TZKs4LVd6zPJjbWqzUAocAnrGLi",
  "key24": "2HyXMZw2wiT6GD87BWuvuELMUx6yHNcqvabqNuaWtpnnQzy8k19dfn8f1KULrunayFrUBj5ktVn7n4Y937L3YGif",
  "key25": "yg7SSpkka6DoTRkhMPHftTBTTLksn9uVBmmu5Az3HSG8bYWDdiZTA8NRMBujhgYSHwRc2b7rFZcUtNnGrQJdcrj",
  "key26": "4H4rF1PTtfoDY1FvYpdT5VYVRr14nFVNtWYeEbvhKVuJDKNFMAiECYX8oT8ieYh7Q9shRmWGcdwYo9Rt5yfs6dyy",
  "key27": "4nuVTjtAgktUWQkasNwMoottJ1XrG4ZAUWgxmGZp79LEHCvLRGgpRfyRCKqj4ZeHDBT1TRxX9QGciR3nEPjZHK7H",
  "key28": "2ueEtK2fwtQdMyxWHQBw62xneMT4igJHqYGwgcmiYktJTozaYRH2jWSEtkPypaKnfPX7yxuKwiHK57ACofZBgoD",
  "key29": "kfQDcTtrmMNZ4wbCHemEesDpmT8UiQLK78BAgqmzJqQLtEQYJT7NcrmxwNgQgKwGA79HDtFrLibKDHmE4BqgzMn",
  "key30": "3nnwkT7J9G1BtwLdWuKn89fHqma7RrWdb5xHWLxx7xPSCjbZa8C7n13z1MT1NLjabF2QkiHM5DxssMffpusjMK6i",
  "key31": "59QzyUPZrGiSECdp2pjKz7EAZcpqvb17AmgWm1thw4UyELANWdRkVWsWzxbUdDe3N3z6veAQu2YHsKYMQZ3soU88",
  "key32": "5ymaEFL5mTUsbnVzjkY8JAoBjRbWMS1Z7u3svaLygJd7zCBKEpuUEAg137CjUfMhnsnz1ebxYX9pJRxc5T91uiF3",
  "key33": "PbjgkszgiWRCniSUdNSjZrRyqUGs2nGjbP4HHpviZAHVRjUQuALTfWrwwEK5bQ1UMJFPpUqnfih2zapLnJi45TM",
  "key34": "66wCuTJ68vagVVFwapPcuhhM9Yu11odw1qTwY3M8BjHu7VygKdPt7Fk7RjMFcyJGYT31Twy633kMwr4uLtq2WV8M",
  "key35": "pRRXhbLQ41q8wEPKGSJSvetdc4XCyYRCynGRcwrzmjwkVvtqteUcHp3Q4pPgTE1nrEZxqcpD4UaKaYHDKGL46EA"
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
