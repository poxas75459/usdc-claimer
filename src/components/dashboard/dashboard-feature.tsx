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
    "2khXEPiH8VTA7SpeK5NcGZK81mc9wdMDUWPbLd4TQkk5UhAaCi1CrRmZLR25KCs1sLz4MV1Rgny6kB2ZajXLasAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMpm7NcHuHedLhEtF4fJFggk8FMCZK8DtmxPSHz4QDsEBuK5f54vVhKF2PK7DVK6msdafnWH1578beYRxtAixG7",
  "key1": "cGzS9jqApdGhUZQXgCk4KnKJ4skqxABcxZJEnR8XWKkz6x4oUaQrQUAUfz2K87k3GaN5MTTX2L7TCn4sRk5Qgxs",
  "key2": "2USdj6zdWPdywQ5sz1Ka7XLPkvDvVGWqmdnA6YuEwVJsQLye6XPEoc1FU1oE99Wy7bofPWdGnfDc3jSVxTA4KkC4",
  "key3": "4p3bRrVNCve14uJDwhDNKMWnQbCowmEst2qtCoaWhKYxJzQAA6gE6hEQ5T6i1zuk54ymGeyCbXGzBGSUVJHaSqLF",
  "key4": "4yNivkqhSYPKUexMtpRpyRZBnZGAxed38MLVPpxSUDkrQknHr8H9FKWzxWkuKZuKj2e3eQFfHyByfaDrQfG7ae4v",
  "key5": "4kpp8pHbnAu2vAYV1i7MgtkcWeJE3rVaUuu7nsG5BG1TcMc9HQ4EAueunr11XbXZoNhpNQ531h5peqVv9STDCk3P",
  "key6": "2sookKpr7jFBBjoJq7FTa4EDMkbfsbPBhwg7CBZcBQfdeHFXuNjsqES8ok1S858d4vBvsat2TCr4snxvdtjoKz95",
  "key7": "3pR5PMBjfRfKa16BNWrnxWT1fBAdfaVA8XE2bz8jLcmXRVZCKhGT9SA1s4BD1Bjwte6BEJMY9wj6nFY6GxkvZKqi",
  "key8": "ENhRiPkaAmoQDjjgcc8sRrwizHN5D97FiaeehzA8zanSzeYFVow3YrHJNi61Lr4WsbXBh5tTUGEi5NuGd11xwnE",
  "key9": "3hVNMDR9FAxfbttr27ESUiceiLtWQWEVwqTmNK1yGrr7peVeZuH2haJNYD9Ajhvx1tVYqhmc6k7KJmgKvpkA4uez",
  "key10": "3YQyaCs5QH62cuMebiGTuhD4QTr9SjtNSB7hiQRTNRB9v9AyMvRWZBan9JHXzqDhcjDFNMa4QVMeBWpwkx2F8fM1",
  "key11": "3feycBdkicoyNhnqmbLqBdgf2PBBGbXfqKFJ8tSDUbZrdr5kuXX61Z1DFvqq38BAPu5auLaPQ8SLphZzkg2nPngh",
  "key12": "BRvng7Pngs5PkRJkaJKTDqMiHusBE7q1Z2CRn9RxUF18LY8642mvioVhNqsxFdPqvHZF9j2Wek4ETnkA6enGAjn",
  "key13": "5cuRLdZNzfLTnqRMV5XR4XrnAxJ4PTFFew7mEL87X19LU3zMKFExsbeLUQAbnMghAnhmt2j4rP8zt2qqWdG5kJGy",
  "key14": "NKuNopUkKpBEnUPri9QnQQL1wkgyfpDS9tU13THd3TDkSza9BuyPde6hss4afwbGVWjYbAZBKgnwAGy46WgPYR8",
  "key15": "3GULUCYZ2unrpURsfEpcptdKXigR41Fa2i3ywBHXP8JrZJJNgDaXppa11ZcvNtiwpt3SHkjcxKqBBEneDJNSinxP",
  "key16": "4hxZ646V1FCjni8uRQCYeNAsJTppV4q8yRHZQLt9qJLkhvjWzL7Sd6Gh6Zh5NFKPeWGQEoVYhpWZUsqUHyWgL5kV",
  "key17": "cFQKDCGX7h69dBLtEmDrMG5Cpt3eAwT9sTRzx89NHZz9b6Mb5pLXoej12LRunMTrE7KNtz1CYvuRLSyx7e68E6J",
  "key18": "5A4PFFmrKabEPVZN9CfQnhHknWeKfoVS4Exkbyvc3UxYG1Mb6cLustnxFoHvHwBysiV2qqKptApqHdtqwys9kqBY",
  "key19": "MRjjPt2bvBUUWY4vZksNa7jCL2e3S2Wed4V1byfRHg9tTne77kgALLFoV7GP7dZN2XuzMb63XEJJpErWRQXYhhH",
  "key20": "2fBoF1CRfShpMecGg6Q4WsaABjcSENNJbQFRhANnP76WVg67sG4YHNTrJfKM7gHxkiDPVnhE4WeL6bTq9KeT2UEW",
  "key21": "iayupBGe1kfrgxQ9UZJhKscDL8epAGHYrXgRNt77HEb34gQMDDvyVfu5FQG8rKtsQHzGD424TSLnKAkwFZBCNo6",
  "key22": "4XtAExpJaBRarx7KPZgxK1JLyE4geZYGMnDN4LHb5k5gjhZMcb6WLJhMJx5wYbc7dche4sjZWVk1PTK7FyekJNdz",
  "key23": "3gdD37dNBdwEcgPAQ3oEUEKY83hfmShKiV6QKyqwExc7kTHfb4SMEbcnzgLa4ZHx4esVDoSjiWjNvWDhcXPzhus7",
  "key24": "UDXrU7RAkXYKYiFqprPbiWj35H2uVcCTtttLaKg5vJcJeD96fa9YJk7BXpMWdkakDAh2P1PEaXFdqDD1c6Pnudr",
  "key25": "4cQ45m4rRKwJos3bvSg1FBv9xTcyEh5Bm15emhJ4FGb2bVGEr7RzCuNNhGnH6H7zECvCvLRJ6FreyZTZA5EzCEDo",
  "key26": "67Yxr7HXXozjJSrkEsVBMMS6omHm9FXgEk7Lm75DGJ2RYwkdaNapNF1K1ysL7yedf7zkX8pt2ypeiwAgbY1TMnMx"
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
