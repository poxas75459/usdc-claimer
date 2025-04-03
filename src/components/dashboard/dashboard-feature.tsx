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
    "3Z9SCeKnqm4PEPpec1o2imgTNdKseG5cEF9yAShRVLDrdLR7XD7j9ssRkfmLNdvH1H99DXdGjBzXcLvzTBNbroxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SE22ZdujFRUzNNZHepFYTG9QVtVPaEVmrAGXZWevewMt7NFjbD7mjm6S4saW996E4YH7fqCYHwAh2qbGqo8wJcb",
  "key1": "4ERad5ABcj5EuraGefYkyJRWAoGoW6knNnnbzqsBgjm5DsjvVdRZRH4ayTvRhht4ZZQqpd75UqK4kS56XriZJhY7",
  "key2": "5RGt4ez6KNtADV6EXoiZYrWrWJs6xgZJySs9RYbHyVC17c6v9HQP7Fr8PPDLvwh8emvcyDyFsyf4gycHUGie95Wr",
  "key3": "4aGnxEBvEFnbAPz2RNWiKtsvbD4oL45rrqxeMvWGJqeT1e4XnmsVYbho6KN5WCHrvAWmZDj1xwibDuUSY4CQD1R6",
  "key4": "yj9bQuQSvCKNNoAvF7DMD9wNFZYT2F6rTKqWyL63SdqVy7CGV7xM9h8YBdRqtEH6H1nScdb5UTob9VDAuY7s5Ha",
  "key5": "3qnbcNEESLLsYePFuyTLBfDjRuEhgKny4TCsXWFzak7FpSj9fiiaeHYgv1k8z9AmqYu1KVyDqcqT615wGVpsJ7UK",
  "key6": "2p7KoMaH5yBSMK56HTRob3PmybJXbcYKYZjuAFq2snSPYGGbuJhRSc4F4mdht7uJdUaHWZB9GLFuV7pgCLJRXmN9",
  "key7": "2xe3TiuhbreaxnhzTJ5T8rrZR5RUn7TjwZFtayTXNeXGCZ71R9SM8XaESaYGtrMWkAoTRTXiekgywtdmpKc5mYsZ",
  "key8": "6VY6je72YzQPQjvG3h9gTLDrsSqf7f8aRDb2uNUCNLPr4yfopbTvqeToxRiRnPpP3iVRcxj8QgxE2irKdRm55Wm",
  "key9": "3o1tRG4FWBmF2RcvoXR9H5Wq39wyPyqNqRXc1V4ihqBGctSnrRPZrMxJKqPfFafCMzEeqkw6nZ87xXhwZ4U94qro",
  "key10": "3i7dTQq8XTd8M8zEcudVjRNhjcE4QP7DXfyPDAFaRAhMUxLqEakFLbAmcNLmJSD1saobu8XMiJBjXz625GQVNGba",
  "key11": "3aQWhhgX82thNdPMSKUHy2Z3K22ru8Jf3ZNEVGRa1Gkxqa8L2xxfb4NTgtecLZyNfb3At4K6ufnjxjjaXjvMby99",
  "key12": "62qb4Lbi9yKe2fHMQdU9acJXN2CYo1op3WKCVtqMdjQUho7zTibc2C23xyCxoR1ZR83Db5dPrvdyk5SS4ZCMEdBw",
  "key13": "4C3UGvnFRyYNUyS2dPYRLGeJeWjkR6SmBFZTWbrr3GSyCAQMgXihv1GoZWALhLBLC926Yf9H34kiTi61wRnR7FdF",
  "key14": "3E9Ts1GFJ6tt6DDNnTio8JW3adxBLaHr7VkejoTLASWJ7DAy6WqMQX8YEXaohLgyxQUfNbgCwkHFYcLirPqGQFBB",
  "key15": "29X9mGkQ15wvVRLpf4LNqUKdUc92xX4qG9A96YXbuQt3TrcDQM7J68H99Xwtu8KmL85aTa1fP7DH88iWSvzHSyMg",
  "key16": "4ZMcu19Fnu3A68WQHqmm7tY3PrhrLgx5Kg822N285TSEbHEkrybXnk6SuVDWD6ojEJmvQFP6g5sYrb9raZcuoM2x",
  "key17": "XWWcGiHg6wKfTXBRYFirBCUzUCDmaz3aTuqsu5QxvjJh5u8oc4HzmV4xXoQZNQAaBjzKEZDH4EwGevZgjjNutGo",
  "key18": "2i6BdvjLSwYtczyURa9ZSfioE29Z4rm78ojcmk8xXU1KRnmphaoNcccNgnFdWqpvWaCsCunmmpXyKkCDuewLM4u5",
  "key19": "2nLRTEZhuHejtdnrbL3ykpbC9BzUqvAJKZKPGFLaDJGpBvaw2odhfmUJE14RZgphArpH913nmrybAckgndWpTSvQ",
  "key20": "52UixR99259cHoDkadwBbTiphrY4yDmQ8KzTELaAuzUwE9doxoABggm3xFEKQUpbMdDsbUkzGPYMg5ijWU6SNR7F",
  "key21": "2YNp5qJk9UwNnHvLjeD1d1UM5gm1DHgEPdptXGMVy4JPDA9XPNmyg7GxFF5EG4A1t2137S9L2tAvEukVzqWHgqmv",
  "key22": "4MNTsA5DUxDgYtmK3iRUNCp3d6nuB5kqf4yPykZRcH2TkWXzwpuDhAuajhtJXiMaC8xyvZSpuKsUiMwYEpk7E1Qy",
  "key23": "3k2coxtm7kZWZkAgbXaxaYcccRpSomNsvyHMhK5uRPhvqMHSEmZKoWN4G6MPBCo8vFtzMAgjrRkwzCXgvUsAmhZw",
  "key24": "42Vm14m9K5ZGrt1w1kJMBFQqSC19eiUZTmcLMd7iZpBq5zkjFYATj1Mx8tLYhCsWKRkCrVyAasPFRAyFoptfsa49",
  "key25": "5uimzamRjjq1sUi7YhaiJjMPtamiVewicWoqd7RpnL5dNdGSe6Dt89sK8ct5uJAYBM6QjY5kmNREEvjBmThxDFjw",
  "key26": "4AR5wknHXfQgsz7SF7tqHa26EqkxWysf8D3WKDSphZWLjm2NkdCgfD6rHxjpoUydAV7K9tGkW67Exz6Pd3MoWRCK",
  "key27": "5T4ZkHiYBGyKQ38tRr9z2bgT2KKMm6VAf1bgbtCMgnzokFzVJy3JhoAgNYNirgy1KTm2BcxnZ4UwSV5bJsgzkBno",
  "key28": "Z9EY7xAWZyNMi7qXyat4EmKPYBaQbqeVRBThpyx4c3dPJrvWG5RUcqj71KtEgp8QYcX9PVLZe8gqDjkqyWcyrEx",
  "key29": "3q3US2CUNqr2bwXct1x454dAEmT7ynNgqh4rJmUMUmGSRQpsbkKiW8w8B1eTPgNgPPm3iADSPiXwW9KWRYPiG9qC",
  "key30": "3dkbhX3Cs6AkYaygbdN9rZfNuxQk3Fp2dh1E1i3KFs4gEpnHoRoYgQsZqQrRMobcA5jUUgMqkqUwNxnZ48EuUydT",
  "key31": "54mGxweE7epqvV5W7B91NBrZ3X35iDtQUnTKcZB98X7B7ZeE6QupzzjVgcWGTEhvVRj2RuMYisHvigozbwMjrSYw",
  "key32": "29yaUANxd6nF28TuA2ddZJ3TuxECcsF8AxMbd3fhxMy4ndFfd8MRYtXCJKkZ3WT57tfMU9tZN5Ty8SQYchqYnHXV"
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
