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
    "35WemqZ9jvWo6hNa3hr4jcRqHxuwbdWR3hxyLS4ZJn8erUYCCemu4CypiYY6Z26rhDHjpVSCXzBJe6frPFUNopHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27hVZa9QUeLHMMsKUVnArwoTw9cETc5dnYN2hxhznuHXUCrcBTGHmHWvnSvw1xDgKk9SkD5VnVhcBYCsjKTPE5RQ",
  "key1": "347LqxSRRdPxn4SaPTQNMS7oS7M3Sy3QSErzxF7QsjSivWXXftnisdrwMiG8sN3kd9TjLR54xwBMabcS8fcBpwLB",
  "key2": "2TRqAVFUdBZywa3yLcZH1zVy1dwbwcnZYaqZ1GPVCDWDbskzTnKfQkkmttuHCzYBXe9NjHnzufEiM4e71d88GBk4",
  "key3": "4qyeMmnKmHBC8UQTdWZQDs4xSQM3cs44kg87ERJHkk96Hkok7CEBfvbsasUERZmLYpwprN9DC9hZiVc2aJxdFDgF",
  "key4": "5AkUqZypHRYZ2cXqZ6MFeHmi83YeZxHxd92VrUMgijdemLhQ2zsUsu16NPjKsbNcFkrU2i3N5xZ2iCwPgNCiFsJa",
  "key5": "3YWZRZEDNxMNJ1KjD8jxt4n3rEndDydrXjqpMnLtADMa3u9Fy3BkMgBEsYX4aawhWUJy2MqLknGFTvtEtRx7NBju",
  "key6": "2X7vJqwS3cNufzLRFpRfLd2bdsSuW5eiLNWzPTJnebad8c7xrAauPF8jiz4ESGW65khXb6xShdeoLCrnBLKLSLNr",
  "key7": "3hJS5zNZfWf7XUfYtzSykwdR2G7RQdjex9DMriXSN6UUPuzawZ4LZVqDQjZyjHBXvzFLdLYgobZWneJm35neP9hw",
  "key8": "55EPfSQKq4jgidt7kEMFTiAPxhYD98PDQTh4rgST3KrQhvvuQvLmw31mSWhbo1AKLuyccNtqyJ9wwwY2hyZubLgp",
  "key9": "2BvrFkojesNSjCWyR1AMTQjdRGEsbAQ7Q569SjxMgKfgzbQdcaSE5DPBN7u7UH8yTeJoHAJDCe7Kt3r187w9VQ4o",
  "key10": "66JqApTBbpk4CrVEXNnraLdEzMmarKtLdnFPSeopdD1a8tg1Uqu8gnVZbAycv9zQ2wzQDYSG77JtAFxq9hgBx4Bo",
  "key11": "63dCJ5uX2CfGh4VSQtgbamCgTE6j9akgSYFVXns1UcpzkFWBBV8b8D5wUyY83gh6t6NeLHE5pCdgmqiUTU7cwULU",
  "key12": "2i1sXgNnRwncx2CrkPrqgZFgvQRLdWDXpc5zTkJZ7AMbKfdKDLbxgp31vdQfYs2mRKJsgy18PjoL4HD8dNgxjNTj",
  "key13": "58Cb4MdtaqkriNJPoXotnW6MMpXCBod7jiokjdnfbJNdcWevcSBZefNzCNHWTPjrQakfa7reb2ApAdSXyvfCtkUK",
  "key14": "2hE1CWgVfoVzxjYQk4Gxk7hBALgAgXygeZgCnRFeBN2iakyKYnELmJb3bzeSRMRuJMK1D8PF3gs1TQqrVWhLPimu",
  "key15": "515ngSKv47vGez9uwc2soUeNXHaVC2jmjYpBzCu6DkTcJqroXxRYhqmEemuc8HnNAFBJPWT7KMknVqeSCKxSAsCo",
  "key16": "4zm5fsLkNGjnKFxaNR28kietTsPf66f82fyArhb8rSGwXwf7ojwP277SxqM77SZ9qoR8kZBiUAFZuujo2zTtBChp",
  "key17": "4Z7u8N7JM52zGYdAhCAwQvxKwTb7uDjJc5ojvXpQVgMYfTeBRVT2bGVryCeM55xkDyLTkxn4XStmeMeEzujWe9yh",
  "key18": "43M7udfvJcya7xisPPEfwp9xEppbGyvUt6Zp55GJz1GZ1fu9UGtHDnABHmS3jYkUG9ysCuRKeXiJp9UgWa6wQFKo",
  "key19": "4pMgveMLrXboHZyraF5TKvXfiw8yG7d7b7BpvVej6AhYVecDtATD3cZWFpYd8jCkrT2hAYcxKJWDJp53cBwdSkzL",
  "key20": "5qpQwDrae3azkKkCiivGEiWjkjKB48ZNAtyHRfDx7c85WshPDVqiqSU2GvMGQY36sXsUrtXVp2NbFEtPSDTiDUu7",
  "key21": "5n1LxXuAuJn6SCsUwFgmDwHpmzmYSW4vMTtUPov4mA1YTMPSa1wPRTrbfXme8gxgo6pnNS3Ppzv5gJNWVgJ93KHf",
  "key22": "4NFHs6zvL5KEubCqCae2H5kuRps2zjnikt6dmBAxwuWBgHmCD2kodb3FEJ4M79tGE3MtRo8i7PShvD9NYahBeSmB",
  "key23": "4Xfa3yqK34UyuozGvToN3ch5GcKf5GsuQJ3LtFfAuTMxExDhgeWZd4wfdtbfbzTcrqjy7bRHc8aNUEkKoJLHbSTq",
  "key24": "4nmWa5uG2voNhtbfrUpMNVpBSqMbdcT69myKMbY5SzG4FV7RUcWtng9AfFoDyGCCJjkyqoVLAa9TkRAAxNYiAKJM",
  "key25": "47QyQguKpa8eoteDse27DD72aeaVRwnfNVzFxYECy25M9JHp393YehLVYuJRTW7QGbokPEU79MUM5XYZsqkcvssC"
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
