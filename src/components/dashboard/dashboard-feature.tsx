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
    "3AGRJthfQs4WEsVHrb7dwUncKnDjPnSeDQEvyYuwdoy13tJZcEwzxfLhBNHzEXvi4miDm8azQXSzcZh9ETF1qNNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65a5yLXxC9FWhVLGv75JJAqjrVzGA3WhVUJ5DTaTHgLHVgUvQ9JFqmKfuu1LpdDMWNNam13G78u6NpMMBdtcuMQD",
  "key1": "2JCa6rkEuHRVJwHFRKJ6CAg4td4ndBYi8dbBHMi5wvwS5ttnvNVsCdTL5SfV2TErJz9dTrhZNmQmTkoBAbcT1aYs",
  "key2": "w5CBcmYNnHjx6DqGrXFwcsWTXq5v1JDmMUzQ7Zr648PspCKF1HArNDjg5PXMU4xu4R84wHCR95T4iBdaSSAXyTE",
  "key3": "3Ywgz8RDGun5FhAKdB7TN2EJGWAMPmCjHTi4vshBY1vYPHHRdcgE6Hg277TcJvBPuj2k8uNzB1mtckizEt5KAem6",
  "key4": "NrUMEoAjGYe62KqMLganfCNmTVb2npz5NaTJMpn78vKCGNicdk32f5kf3duA8SdTNHaYJDLuzNMB8r1w9335ShV",
  "key5": "w8DQAPoyQa3QPaaRzTveAukPvLSmtDdkgkCnw11K3YpYyHp24zFLLsSp925NBF7RXimsbcH3MU5iRgwbpDQk3fa",
  "key6": "5VTng1ZVT1yAwnfW9rsto7TgDzTvTYkxN9eXqaMWxg4Eswh51ik58pDsqqcp2rchZfVtgrDx7N84TfDepdaYXZ5H",
  "key7": "43DsgnczJHUyqNmnfHJ9JV9Q1s7XDco6vFTZqSkpJKg8FCLv9Roym57ZwtFa2xQc1wSFoYvEpgHURLZzeT3K75jn",
  "key8": "5k7j1PToyTzBE9aiFsp6R1v3V4NFjVTuqmdyJr4mZ5PJSSci2ab3brDRYKYcBFDUuQctdWZsHnYqGDEcBBk5sHPU",
  "key9": "4CjcS7GMsD7PqRy32v2xX428t99qr6U3eW5pd9jbf3gxBL3hVVzyD1uujpQ5FUj94gc52mxu8EtLxPPF7HCBLrBH",
  "key10": "2vG1MiKkpGZJ3yivDMVSJKqnzGinNU5nS238MGydJLAk7i18K7tWHt7ZzR7foSzs86qvY59Xkjcdo6yScXqtPuGN",
  "key11": "UzK5eehRxnnLWGLfsZ5sbuZvjXetHL5h6JaNFKBY6eAA2dfa7LDhjbdEJotuomWKbupTnVLvCcrcZdhRG5Pvrai",
  "key12": "6NVCakcFA2fbUbTvAYddfeipGDwB61q8ZdoK4C9oqSRRfyqvwk1s2z8SwmfEDYTusy986fHCFrtbkj5G1h2Frvj",
  "key13": "4dUsKrRoVqMuCLuvPzpFrN1R6bawGF953zoXRhRB9uEMB5DL8AhD8QBcSex92SeUKh9W7r2AjeMA1ErcCwKTz5a2",
  "key14": "2NzNzFtxwkwU6AnqDspFuSsHj8ETLodom4XpACq9RKjsecCmKREXMPRRtsnYJgu1aQA81MFTad2paAEiYNvRNYP",
  "key15": "rCmCUgxxqyaFDv5raurdJhwSxbry6XachzxbhQu6u2hbZNgTwifmnGouyk9ShHBnQKNAEjydmYrNSGq39wZEEFH",
  "key16": "5hQYumJampaAjKSkpQc93SoXSMtvQgTLh4mtobRCJRSgCbJfBZCYcQSWoqQX8fNsNktksBMBoZ9CrJ2VKuVHq2pc",
  "key17": "S7ijsKUdkyiXf9Lk52mNzggq5mizurHajV2PPFrn9Ht9Tyz7REg67GcU6z5Rw8NMDxmF8qpcTr7ufgejo5WsFL1",
  "key18": "3TrdqtnX2sUJAiUthbEwCMEQETW7U7ftc9xHxix3udHYFJqXe9tzL7NDaoHzczozyrCPA9j65UJEUVRKSG3FKJXh",
  "key19": "VWzfkQhKJzTqGAsUZfbvF8na7M23reEJ9aRWT2dXjUd8BwubqNY4wHrUB7uRKayZWyX8h3XVN5uy61WLWndC2xD",
  "key20": "4KQ6NUPV6KrSqeVckh6rnWKBaUL1xdnqtgSeq9arf5jEVUA9oJMcRcFT621nCMQFTfSWckdFXFMddZTEqnZ7pk9p",
  "key21": "4r2wRBfztKVknftXNeVkuiesDARsVVSuTuiEaF8vNTMaAGQNQo98VqJtsSm6vuqnQFsMw8QBgZgW6d2YNEmLoDUN",
  "key22": "3DSnm45Hh2wkapqw7emWKKyiAyhSyjtrKgfkcf2zPPUsrDSCSPs6Q89yQhp8iX7PMjZzqh3t3dBpy95xYLgUemrs",
  "key23": "d5XyzPLp5LuX8kZLfygB6ZkDJetKYDfBNZCtFefqcxNeMFrvWQhJXcBdXVX6o56P4w8b1CeSzivrxxwaRxWJKDw",
  "key24": "51514EwQuZxMZFCFpKKqzcjR9GQC6F943a1R3JbxTDMkaXc3q1FFs6gFKcPLQ1UnbcynQ5WQwji9g3qwDnkeudd",
  "key25": "4GQnqygp4SsXhLw5mEVuhNYHasMiQ1hZwEUGeNg7y98Zg3GjHGf7ZnLxSPEwTh2tNo7HLoGGAgbHTdXztndeR3EZ",
  "key26": "3whgV6wotKyQszWX8WHdz2TPFQS3cscDK1UoKekHqJMRbbZ4FnW6MNxWBN6J7qCwzSRWqDxvFMdQMJNaXFiXVirp",
  "key27": "4sg52W26qktchUnzxmDQDvDsaLvyBbCsNtjJ9KLBBuwa9craNUikmaPxeqeF5HcaNnYxNaJgykci4r8fiFFprYFf",
  "key28": "3LVFqhpcM42tmtRcXkYcppurRDyAG6JdVRNyHN6jKuxubUvQ6tjULieaMhsvzL95qTcxDqqGPa6tXMXrrUJS5rCi"
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
