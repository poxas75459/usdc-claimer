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
    "3yVMM12c9rk7yEfRPDJLbEzgjbX5QDv8rmETTYHKyTBHykrchH91a1YjZcigGQ7PZm1YPKePv6BB66YRwhr32q89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAGTCHMbqHinbE8CnhfYkADJwH8qby849CrnBSxU4XUyDHLbACoPyahPacQ7D3R1WEJ6UmaLJ6EiNLRqTvStPEL",
  "key1": "Ws3kNCRPVsEjrLBG6dnKA6RxWpU6aFyB1mSNvsYhtNJmGpqZtvSXxN1D3Q9iMK1HifKedD42g455WKvn93oDd3o",
  "key2": "2L9H7KVXH627dTpaZ1uEJwx5zJSBT4fvTCN8x4ri6GfDF3B7kygyUrwXpmF4qnyDLmUUfFihgGD8cyKECNidfkbp",
  "key3": "EhRzjhNWhXNx8vUaHGPvqAf583uYc1ucczWLiaPhNm7xGSygoH5AxtKiFEViTFhxbmAH866bKCy8ZuZPdQXH2JU",
  "key4": "62nmSEnTe2KaFbdffzCEg5RqgKn4yR5o9CkT5vNU4fEJRhxaykH7oE5H1VUS9AdZRZx1MFVwRrjPWYNaKpApHxpe",
  "key5": "5tUiMTPdWj2HzbfezFjGG2FjkwfuvKtWspPzy1dVoFfgrhoTbsgR7E6tmSnPU5kh9Lf8wgkUHE2zHMzgYxq5osWE",
  "key6": "5GD1b5wrhqjjEQ6jRrTr4rrxJ5r3nU7pQYN2pYvmmPdaJk4SUtA8UhsgL4ARMUjCTwLrTcnTfiXo5ZzCYYvs9BTo",
  "key7": "4JH1iZE2yNW8Rs6NnZBPck9Vfim84N1D3WBYoFvvc6LuiJwnUdEVY5unFHMoAf5FoMQavTVWHei8g62wNXmXb2XX",
  "key8": "3a7q5gdVXxGoa3tmYmX8TqczK8L8y17WPTPsRXkGGU3KTgtZCf6ZRrKdtVqq6HdQbchGiem2LjQ6NYFhGC7mhQFa",
  "key9": "uNjAZuX16CSgeEkNhrKoE5ujadFyV1ZbzrvrS1YAwRVApXV9hSGdeMEzcTj3jJ89yBjvRz5bRKikcykMsCQwWS9",
  "key10": "3vGCrKUCjdJw3FFdC2tb9YrcdMpPwHq5Ne4uRe6HeB3ESsc4AWDKCw9wyz6JBdFtebSEUCPMeujA2VAXyWAJshEo",
  "key11": "j5BnBxCsX8aCX7wDBb2nqaXaebz6kyDM4PP18Y89ooX2mzxxAXV5bavf2idwhDAFjW8b9Hx2LzcDZNRi3rHhNtT",
  "key12": "45EMrTxeDVYV8ma3vyVYbxCDagbspr6H6m1FHYqbwqEcmGiYgmcx69pwaZRJo3MLhybDqQUy5m4LkCUAnFd9HQUV",
  "key13": "5C3VxdSSyai6SQKmeRyZwvG3pK9BaJXBXMqX1pAyWZg6WuVpcRhshMj2DVq4j4RQjFoiztms95BqM18VHvrKGdmW",
  "key14": "2R6RMuDXWShiXDWZ5YiMYJmCsyiREE1VPsy5KHaobSPsn7F49MkXesZZ6551gKaS2UkWfexhH4gE7eHDdzQYkLza",
  "key15": "44Ne3gHF1cQFU8bnbsLmxHtaCN3KUKcN5ofA6DyWuH6E3BbUi31vY9oigRYkJg5bwjXoxCocDx2VAhEmD9mXY5np",
  "key16": "36QEkuVQq8krThp6hVdLSbRpt93oxSYEpvuRF2iFvDh33oqgyTzF3GrrnB8N2dmED3qc91Yi3hfbohaUJ3p6i1M2",
  "key17": "6Rzq1EkVnPVKijyJENTDkKaHthrY45UM4rFnYQhu4WrGLsQMT1Y4yF5kvnM9vs7fUzAVYEvyqp3ubTPNvuActuc",
  "key18": "47R4dpp59FwyPjucddtZtzaKtvQU5ZuGCiJt8GfVE3Jg5c5twKgWvFyZG7sL5RevtJ8VPddaPFLQ2J5Qfr9ZU4YA",
  "key19": "3ez3p7C3uJinKoNntrbDnF58fYQhhGhPyg79cKi1WntTPpaXADisLUHZmHfG3BEHnJ1c9w3ou6iZ8YstXfiG6QrL",
  "key20": "4EXFbBB8f58duRauKrYiqR8VLjq4sWmYagjqFvXeeyeMjqeDeeMhbwNeDHXTc8UwyFqS3bNT2F4vdd7bU8JREMh6",
  "key21": "216XoJv86J5nfC55ukmuNinpQTteXbzhkHVki1FWGJ1HYKkfYqutJAmFhVp7qABY5GhrfcatPM9Cqf9g8pKFdBok",
  "key22": "4t9FXzyHpzr1KSrSZeCRjdnhJv3m99Cw1WspCSBib6S5U3suEkUXLF2Vq28Z6hwmk46oH4oAckmLJpGCMFK5CJQn",
  "key23": "4i3H7Myyjgt8mn4mVjgvdzifFYZBaqKJDGZYmfaxZoiX792K8Tn9qz1seB422auAWtKhX3UxK3nU7K8qwQk3a27s",
  "key24": "5ejdHvYHfd5d1GoCk7p2H1RkppTSfRW3G7hmsJeeSu7UNL687HvoCBwV8NXqtnsb6iyLaCrmjGdwUEwaRbP3CUVS",
  "key25": "4ZdtAeKWEoVqZHETpAnYikqmFw5FivUqVS66BWK92pYdtcCfZiKap1Ak8fgpnztkgSF9uRqpeaStpYG44DqeTjU6",
  "key26": "3ne73Bx9N7dS8eE3yTzQrVLPPdGxhK2UHkpJuUXgFdZGHWjVBQauJSRdb4kdFxDRjnaFpL2HqzewFE7HK9PSwqRV",
  "key27": "2X4bnYbeAojKZT6ucGNTHFATDr3sx4Ac8TNPMyjBJGMsqVRYtP83WCUJZrfD5HBLZmb7rR78budNWPHyWUkKE4T1",
  "key28": "z9hqLzzpLmdqKfhovqRASj6n3L6jzKXsELyQp2LRtabPzvcddVRd8Lp9Hf5bHjvfHNXEEfxobk4E8foEYqqrG27",
  "key29": "3QqpkdFA16Rb6TQjNffzVVVQqRjA4uyQiPf8jZzUatZeNQKvFqvHBuR9zoTbUhPKrfMR9X24zK6wH3bdV2sqW2wb",
  "key30": "5atVADrUyu7ACp1K993yikpxjjA5ByRbxYvVLw6ehrgcT12SeFndbbKDkCNttgufdjZgcyXAasGUGRpMNXFtXM5h"
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
