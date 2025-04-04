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
    "3wgzk8B4aUxTFime2LEnrtUHXd3xBgjSF52CyhDrE5JYksJjT8PQJyxUJQtG55yoCmNEDrsyUHNyha8Xo64noikA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQ9zkimQ6Bvtu3qUyJFmFMeS2jbajXVLAh7JLHop5JVZdsxm5BPkk5CYJW1vqhatwbM3TxeMHwdj9dWz8d6cVmx",
  "key1": "4DxWNGYXruWsF1k9FqQEP5xrGM8nTrRtaqh2apnRpm8q9YAFAkM5KqNtCMYznbAE2z5LwKmNZFJxsxNcZosuz6pQ",
  "key2": "5EvovL3mAAywvEB2G6W7g8xJSu8SjWzw9pobzHB5BPmoazaP1c9GqhE6LsxdY4eftccGLwBLPDxCTbofyvq568KB",
  "key3": "23kRDv5M1tH6u2AAZQRvEu62Jzrc92SgD5BikWGJ3oDYgn5Zc8xtWtwVtujRbTXMNDAKaZrLJNmhdr8BB7u8VQva",
  "key4": "2srf98UxeHmHM2LhmK7MJJUFGu6gezGHyWqUnFdcxHEXNpq2Qze4eyVaXLR2vomB79BB3xQTgxsYXEnwPtCBtGtk",
  "key5": "AWRaAwhPkCn1QKQmYUZUSLkAzAmLsAuYYrEzV5ggM8UojC1Rgn4Tg4TtCqw86jY4X2fEUrczgmo8NmLiWqZxqjH",
  "key6": "3PbFLzSacZJ6AtWeBA4PzJsf96cEAGTTk91YJPzNuqzNUJDVAMTANyv9qpxjGia39377HWcNDXxoYYGcAJVvgGww",
  "key7": "3qTf6ah6JeHGGkNC4zJhhmc4o2pXfXf1u4aXHMmqATvbw67rgS2N8m16GN6xtNCoKztzxVecPuAoL5sPkStedi8r",
  "key8": "4nZGFhpqZxDr5oR4k4KycnQfirXUyWDx4iydwKg1QSzkDchtyAedJSMgiUk9UD14BWRPL7FoaKz71momdTU7PVog",
  "key9": "DGzVkKcqrp4gGNrUrS1sS3rGcsEUjCeokvuSfndgefbUrWsU4eGa2Q6mehhVjPJUndsSH42bzvdtBC6NXcYdYH2",
  "key10": "2xBxwPwZTFkiKSFrQC7AP4udDn7MWThfn5SmcY219Q8ajAHRMRoh6Xwr9JXBXHuuNxbe43d1qY6efd52n4Ud8xNB",
  "key11": "2oR5BJsDZJUeB1h4cmgExra9d2CTt4a2iReEFDiX5NNnmBgJTarrDfDvT3HHhbh1HWKnuCRXAwMLVV4TDJGft3So",
  "key12": "mzqA17FcHc5Xc8Woz95uPDs7hUjGPnHpB26grKFWYoP2gkSCtNxUd9WavdGpfeu5qkWZpXrLMaXeaqUpmA2rcwJ",
  "key13": "4snGE7DT25EWrS4Wwaoi3nGRDNrWp8B9WtZZgojv4nkoWTeuDyAXpQk4Gh2WzmVtNTd65HGdxE3omVmgKmtgtbjv",
  "key14": "3YgX6gTVTTXajx38v1HoX9GmwWZWxyV6ebUQLncZ3r2H2KhAgx8YrX41WMM6mc7dzH6EkZhwz6j6USuFXWavwsV5",
  "key15": "2ibj62qtA1qKkqZoyW5D6BjWMvrpCFrqkGGxZgTptDnyiQZaoUMv8gk53ovYo1U4zcRts1bkbYTpCHRpTSARSXqV",
  "key16": "3ckPxtYXv1E7ypXrLF1jHY5TUSyrMcX73g1NbbVNPb5YVw7L8wcv46q3fFiXYWid193L8SjpjHPAwFAv6yUobpTb",
  "key17": "2rKbjLALBTxQtDAWyjWXto4uRbjuXGjXrpYoiJRtRwKCUEidGfuDmSD71aQat4QGBDNgz7MngCdkdsZnkndyREn9",
  "key18": "52UwSreupXarifDV4kW8woPKKL2UTPtdQYUWxo966GDdM33TAjvqRVfTMf6AF4E4rnboCoYyHPp9WXDHwDJ7LjWS",
  "key19": "4RfqwTKGhtKDESi1H55Sqh6d8h79YQkikMbwmPfx51vd8kasfSHw6M4c2vSBdynUXvtV5MKxzQR1wJpJA78dZeJJ",
  "key20": "3axaUhfH5rcY27ALF7smwe1uQsm8kgiLtAeSSo121Peff6vsyABPVZRwDUi896ZZQJ1Z82JNnmwnCPoV4wWwDSZ1",
  "key21": "4uaRBfS11HPGvEut486mSTm6aUs7sG5pdctvJcKTYRLHvb9KrXNAkJQGQrwxVWxPN6Jg7T94Y5cQDFXuqzyZGHtU",
  "key22": "47yxBEJRRAGGW78fafp81J7XHE9Rwmx6agfntdd86UR3d3YUnHYhTP1n3BseQVuQ8AV9qqukDDSBvqjpYfXAjM8a",
  "key23": "57AqoYRwZcbKxba5cBF5MbSiq5kaFo1G3rheeSo9vG1zmGj8EwJmHagqgQVhb4UPxGW5RWi87iZpPWQjnpHdKJ2D",
  "key24": "5efwGyfScufDNm11SazPuiuRjVvHqw6wa9zDDWXyK4uC4E1K7CgLSmPJPhEg5qhghx6ze5fGEsWoQfconzr7YVZk",
  "key25": "4jVZwZXVtxWVZbT6sohxgheZn49eiZwRqFXhBXM68T31EpdHGjXjVb4bnogCpeCmKF4C1sQGVmS7zK1KssHshK3r",
  "key26": "2jynBfKvDPRtrY6JCy6FCQUSmPjnE62cjMtoZeBhCMN7K4dShkYshYbGWQUikJ6yh2zzcthkCrmHagTSfeGsBGS4",
  "key27": "eHoTmE6r8LXtf5jt3bPR5YtmGm1GLwko3rgjUPpUEzqQeNoN4wmx917145TmBiAQSAcQVD5QPwkYmjPCPvw6ABf",
  "key28": "vifPXMiXVkTmZLjqGvwLg2EXMRHj62wwWm34wkKq5JVcuwJGjmoQfjttKJNFQUU8aDkZSWWPWFk94fzx1L5FEdy",
  "key29": "2MZo3QvUpNVqPTdbkq2juVq1SFP2QN9eBCeL68LbjkLqNoM1NRmV6kzSWxW6ipvWYQyh3TMaD7eLtfuNT46KCvnh",
  "key30": "3UXGUGmTD1bnjMQKXo9w8F4gW7jBmhLGxj8QDYhehHMNv1V4xu4hmY7rTQEPqPKjX8UKSYt4VohJPLqd2Ld2m4B7",
  "key31": "2RtRp7Ueb6jHT9oT1qjhp1CRGLhFzp2bL94WDC2DPLrQsVWGg16TB3TzVVKgcfsQS7Bs7tuG6pgNwuvTQXvMfEBD",
  "key32": "4AquCvczXsmAUXNFrr3agh57TP8dut3MAvrzWuCAwtNiS9XuvnzfQvviXnQ6kUkUnzQWbXS6z2MQq32zEVikxfoA"
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
