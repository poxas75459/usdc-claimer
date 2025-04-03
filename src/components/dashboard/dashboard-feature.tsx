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
    "3haHzE3dqXkfHVPoXV4YAvXhEJrcigDe614U6wLyV9NeQreaupTQQoxUhNYxwnbHpv6hurPpA26tBW9aS78fFn1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWhnw6KgDiFDdExTpDSVM2sVZFEyjyorWQF1hreCwTgvGbJWogZDFCvMULHv5VwCHa2kFEcpomSo5MBP5gaDEko",
  "key1": "4MreRj7rWc68jCJrDMCs7QECrfGeTpM2qPpLTJan8FvA8P7igyEMSE7zdeyhB1NbQVC8p5mAXrLUE94C1rFgPD84",
  "key2": "dwYgytxwNFks4Zn2iJzRfC41urYn1ymGER9gZW5mBFSpAktPTk41MCNKEoxC8vJu81rAZSGFdmaL1o3TSxVwQLA",
  "key3": "qQHKjAA1g3yfEuXjk1JinfWAHVWAZKDx4mZU9GJvMWo2YqWvGCZqGtScHCkXd6VuyfvfGMUMSS1A1ykygy7D6M9",
  "key4": "5yTkfwTi6HdCVUabKhX3SqsHMeUWRDVu4x5PMLZsCArP5R7NwVDtinrR457azwu4ttsKcNddM9ByLbnfb5x347Kc",
  "key5": "3RC6gVbnWU59KW3nUoeA4VtaL3xfTK117Qm245iv7RGbK69vdu1pm2W1LwP29QAoFLFaC776zxKNgvEMQZXL1CiV",
  "key6": "3i7vcdF8Q8WtdbwqFhBb5HEpWNUZuH3VDby1g55EDYyf5KztTVxBv8TBxNHzLWtqWGLWcWiLqNDWZ6AyuHLyjtsx",
  "key7": "3ufoxrBJSYAM3EY9RPA4VRnoRskN1BQHkMcrud1XtiStJCxubx3AxzyzZAY2GsiMk2LRXi6KuazRyz4aHfHXuoQQ",
  "key8": "2SSM5d1coWzyM6KsCqLy2Yq17CnDPw2PHujkHUjnLGpxbUywTWfhYQdSugXkxVUJVhxJ1KXEqYmhaHGpJBXi9mbN",
  "key9": "2BgpLQzxV5VtcU2FeMjLk6WzY5MgmZgZbgJg6EUJWA2N1bz6TJxcnZfXhKfyXpoRXo365GBrSu2E2yktPeY4y677",
  "key10": "3qCirgYodNaGnYVgHQ1JLBWM9qufa4UrdnVevvpmk3nsWMeNFL636jSkJWC3GPK6Ga4KLztHYXYuQszeXoFc14h3",
  "key11": "3v5ywiqfWouhTzUPyTPtRVRAzY7vRcDYM15mHjCJ2JhhRNRT3u6z9ArjFeVi1WTnVSGc33TAeZETU8sSDirdpTY",
  "key12": "5ixnggxt1Lq9VTmxY5cm4cUUUHSSpaHYcihY9hNAgZkpCVyCG4QiAwZFxKVVV2rtEbjmV3fm8sTHghksLspgV6Q2",
  "key13": "33VUnwqZS7BhVXztJzaV2b2gLhxjG748yakSGVsuucgNAL2frQEtaXHDzQD3KmagXhrT5XKi89K96hnB2zAQKCYy",
  "key14": "pNSkcRenqhvexodXXJkykSQJe6KK758iFVQV5uzdZdWgFrUreGwNXadRcRakZ8LG5ZzmhfnGfhWSi1ySZZgeEFk",
  "key15": "5LgZyojRHcfXLBTG1mVgw8taFqv7ZPfNxN87qunErxacuaczacAKE3BMQXH8SHUXbct1z53paQEzegKkmxrj9YUw",
  "key16": "hQm1EDvZ5RXNobbiHKmsKZ1NihZU1Jsz5cNwqKSXTBhS4jRezHZ6no3iidVKprXKVKY4ymWB7MkgZToM18oVXxk",
  "key17": "x3Hc1cStgZPMDv355ad9S4tuAqVncKMqDd92A9qHTbV7eeoEqQh7cvgZpKgFMcCjVtt5edGamJ1SZoSoBBY6Yzb",
  "key18": "2mjwUQPhbb6q2bH8rTCsukZfy1fTSp6tX75G1iogfKMDYzKdGfkJkKLmmuRuS5vUJiW22jVTPmgeHyHZkT3AY3a5",
  "key19": "fJ8v8tiJ8H8pP4ttCtoWtE3o6t57yjXsramnxR8tanw4hoj5UCbiKEJQVmxCQYqWrqMYgHYwUBC6RG5TomTDgn3",
  "key20": "UgNuJJdSF658m6souKgnoWdubNx8gqn2c3F82AqbB6oNZy8qN9x1sq8phVvVdkkiyiZriCjbmiSAdUdQ8ohQLKm",
  "key21": "5kWB3c33ZBhgtVajJFW9txTCbNGH7DA4LJtMNnBQf55HwnthVHjs3m5uPFyvog7FuiLm2WpQ3QdVTrUohntk9EXk",
  "key22": "46iDTEuicwyn2AsxF7oJ7eJ8BaLJWcsofwjqUxvES9U1cWUBPaNcL97CaezSH25fo4UiZETTqCLpKAMjDo5vJCM9",
  "key23": "4rhTwHzKnN7kQctB4n7vQCUbZjLG5FtbBfsQ4zXdvViiRjBfQ9cJBuccDHZj8mKrK93yNQz7bsEP47pRsBQJfmZQ",
  "key24": "4UbhHqgz76C535ddpnUvEv1CpbHZ1ufJjAppnFDS28wLBjAmcuA7Y1mjaH7ERo9AK69XVGk8aVtEuVwAk68vcwZG",
  "key25": "nPb1vRrZu3ePLPE1dGRam7VYdSXQmDLA7WXqMrCe4v6sati2SLkJyJc3VCd1ABSFZt2GTNwSYSxkY9B2Hcmznep",
  "key26": "65zJjjAtkyj4g9GGuryTMPqQi7mBv1mnzxf69TTh4A2we53UKY34bJvAQ8B6zhtsjvUi58qKX95YtAp9ohoEAkLe",
  "key27": "13A5STrcbVLDgESFuboBJsnWSxDHUvTmx4ukdcTMEVG7tZX6Ht18DUKNHbr2yxtca3S9ixa2e6RaCBSyjAHSZ7q"
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
