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
    "4J4jrzC44uGRU8D2TvvwZLN34Zfb12DhfYWQWKoje2V6smVRkZ6KYdEuFfuiEP2G9jvcvhMC4v4vMyRXTXS8bKvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrbrQBWrD7dqfaHaiPUNQHxRnj5Sm5zULs3SNYUf3RxsnqEPwubEJdxZwHsauZ2aE7fMERk7duASdb77pBAzueS",
  "key1": "NJKgPX12eLkqo79n7oNTydRZJLsYVpfFachorVVcExNCTuDstbo8LGVFtwaueUFKwBfSy37P9ghY9bq65H4dETw",
  "key2": "77J3shJgqnCKGmX6qYh5FjKNN8euoDpdqsrdbhJHt72DJmueFSiw4howwrejW3kSd1xRH8GxPv6N7bkG98fJQuo",
  "key3": "4pDqVhFeyVPK42XkK13Ep4Bc6r4jJ925qCd7hHG7hozNqeFTPcZmAnjeXpAYWp8mJLN2nY52RR2GCPHdEHFq3mxs",
  "key4": "2eNyXLwbU9ewRQNgPx7EoeLTm8euK9Kocr6r8SLSWp7ZfdeXPrrgLtoTiXayn4ntdmtfyXj1f8AGmKBS7w2CTzjE",
  "key5": "4CkNUZPc9o6cW2udtuhUt3hxjym3pm63VP6wdZJ1vgkkbGXvXxPkFYBe9BdPw6azTQ7YY4yk5Dqp1vg52Z9Ee7wQ",
  "key6": "4kT2J2bZ7ea3VTxPAkBETQQUyBYzirWHRMVYgsPHjjL4vQQYDTcwvvtDB6gZpLWU67cPup7tgR6Ptea1LPd5sjaf",
  "key7": "44HV8G2kB4iZs3c8CcCzUJX75rreYwhqzJDDuEZG9FagdTzG4w1rEcZeBM2o2NqP2zxTyUSFf89Mq1tTDx3bseme",
  "key8": "2boi3r2pKXgjcWRHoQYXAgQvWtSzFeaTV2LgDbund38cEAiTyBv1ScV3j5PYGY5mFW2zUMMquP7SmoTmHaLxBFmd",
  "key9": "bSHpmvv2CGZNkTybNxRXzCWL9BELdgm53ih4EzZR5XhmTUXSbpHEmgs39X7a1trN97AvtoANCv6AJHKXgBChqsM",
  "key10": "47LLi1u37ErViibTV8rzEw4wBw8P4kc5NYUf89QC3m3D97JBsb529UJKCsjtmWAuDR7ZEpJLcbjZeAQCV2sGsaVZ",
  "key11": "4rkoLhTk6XZmRfczPL7fk8634h2QUrD7nhWE2VtmvJvejvsWeMJ1nPA6T2EiTuzWsYDJW4egKFmhaJH8u8HEYhtS",
  "key12": "2jpj8Unr1YNCCaFNMatHg9egMBD9fwp3bmrRKvKV4GoTnefrgSvcpxMTPHVTVjZbqiK8RWCRamMpxhpSkwBmrukq",
  "key13": "2AxgSPobRzELf5sSAaN9483FzxXE6JDvVGoe3RG8LYz3fST48gzK8x3r5BnwM6ARBN17hpXFraPFHusJskySSMC1",
  "key14": "4G4gtJ77dXYgbW5XYc5zWuX5d1CfgPFXBVoqdqYwPfXnFuPvRQHorLJEteg9SSbYRoYJtBVVjEmVjkFYHnbnrtUT",
  "key15": "5Hwdz2xTFweJUyvdA5zykWTm5YqVUi7A58vXbr89rQnwa5JMJgQiZzCHjXMqvf83DfyuyPhrKEFE3HrRALi9UEfE",
  "key16": "3jK4dWGBndKacJ4mnsJiGe51igPXnmTWebn5N9z3PVL7M5gLBXrEum8s8gzqHeT5sX4UjPxjGBxhYJvgWubRbxxs",
  "key17": "33uyW34iyxSxKbfr8PMkXiwqGk5kkdwJZtsJfXEuRhvHQ829TrvuPq7o8zMxsu1beka7WacfRif4wwC7qsDjqM2U",
  "key18": "2PyE1SjJ6XvZPTbLCVEvLUvGrV9s8qybEzcuKFrBQqVZHgnE9gD1MDHe8WwA12UbEBbDo7rMYt7FzoWVnkpCApy",
  "key19": "Qn7NUFFL1xQUaxGLx9SB4kpaYrJDDRB4RUGnquiHH5GVLr1qQdd7joXnyfmZdiJF6eccaPi15paLS2uxHrpL1ix",
  "key20": "2QYmyTfnxZVWhegjYTmUaq6AX4TLUXHFfYrTnoPCVEyEo8o4ELzg8VupiEN1kwyQp3w5q5B2B8bdMPrtP5pr5RpR",
  "key21": "4BKHB9PfwkFt7ME5cCCGYdZkHDXps8nnvZupigFPzcgg5i5npr44GjRJ68CsZj2mgTq5CcffM6Fpz9nGyxmjTuM9",
  "key22": "4c2RjzMfnDqzQwKdYyKbwN7GHbyyEfdiJmVgwWyniwtskKx3FnSCu8FFXKqrUagLo2kzZeb6o1dJJVCFqojjhFwq",
  "key23": "eMMWj1ZHGbAqs8wvg5RcqfXUprakcxpTL1x5fduf3Z7oumxrtouEiLWr35Djv1BZf2cpTgyQsXgiKPCovTQ7LRE",
  "key24": "eCZpMfWVyHKwh7NfyR1XCYaSSe1XhYJNgxj3QbBJwviu6ggrgLTPDvzE7JsL38s8gvDxuanJFAuGzLiNg5Er65U",
  "key25": "2i9GEAF9jwQ3y9D4WGSXLZ6AHXnxbxSV8gAQQNS5Ky9n2tNsHGKP2aRZtn9xv5SGFupzA275HKM8BUNxitg6Naos",
  "key26": "5beLnF3BdaM5mqvoCKTnNXCpm1PnnZ166HQtw2mrKQnXS9b6d9gWKrkvJyd662N262susgxYknScMvevKWWfGtoD",
  "key27": "67kYWaDaBkdyQf7CDCTuDhNAR1EJ4GMtmipzukNpXyYZPJtVgTDXat9Q9KkYhuzBrY9J6gTuYAeQ718ARvDijnZS",
  "key28": "a8aG2hKBmMMn6QzR6TQ7SRAmTuPpPChMDZnHLF93w6Wtmi2AYo8bdcQWzV9NCJkKN8DWoqmTWM422FGw9m3ZWVX",
  "key29": "3usjuN4PH1uXiCGkZam8tHuLK6vE7mEkDz34KBZ1zSFAE4uit377tSp7DCH8wjEEqZ8tFxrFUWGMZCArgKe264wM",
  "key30": "2gj6F7czfBXvn2itjLcRPeTBUHG9wwKnnSUXrKn1cRJVtBFSdh1yupGd9jQEQbJLr8ChSu7mh33JvnYFFy1t78o1"
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
