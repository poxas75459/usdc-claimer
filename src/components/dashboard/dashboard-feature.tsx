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
    "4ttm2NoS5zmhWuHY7F5qNQuexgXfh14kErsyqbo3FhufeXMXoW75LLW2KFLmoCeXEiBYc1bbnDbGxUoi9V2Hqg5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MmF8LAfjLjL7Ka5U2db2ztD5bguz1A6scKqoNP2QWKj6CNoqwdcXGaFCdawY7Cgfy7HxKrV94pCWdx6GWQeo4Fa",
  "key1": "2K99UNHtPc7p2dXqabH5xBrKyfaFa3yNQkhrZ73uSWs29TA7oiWyT29mwed6B8mFj7FQXusngDZXzDcf4BS2aGLi",
  "key2": "jfjzpZ1XfLJpFJZNhPwdpniR7qFNQv1hwCawU5k3fSDr4Z4mhxiBX1n8rsnEeVvpsojyPHuD6nH2cMY3D5DcYqS",
  "key3": "T9sdjTXThTQ2AUF9PNt2qyxhuCGLpUoeGULaLs9d5iaiURmA3YVAmbCYSqzfexVaYaEauTHHDREPr4gQZxAwxZJ",
  "key4": "4xaAK6DKDEkqc8McE4j5SmTgqpaZnCT2atbyQPUAaqWAsyKYjN8jGaFje4VFTLfDvL5sZ5VhJh2VdFwDSDadnxF3",
  "key5": "3X2Auwiwrd88Yrr3poDFNrCJBYMHCQsBRBuXrsTnKR9TjW48H1L456E8T6Yrzmq7D7sJioQ7ttV4VyNqeUnyYj52",
  "key6": "4NfxZHjEV8TxYUYz63xiMGoD1RhaxWsCdgyoDz3FHkQKQ7P9W87733gu2HHwyrk6JKgZZnDKEpByF8iLKbbHmr8f",
  "key7": "2azvs2dSev6CZpGzNXgiFu28zNBp9BNNJ9cqmpvfv2atwm6hDcDq86WY7sgKMeDRMyrNd4WfjCwnZXtGWKUBq21Y",
  "key8": "3cjgj9QouHW5gYYdJhMhxyZUeqsnaCo1rTkYzx3ceom8xMWN7Um2XdWH35HS9MsaB9NAbChdV9P2s96P7RfLAxnc",
  "key9": "4ReHnFjyYqW3A2SmZH9MLV4XU7SUN2arJBAcS74PUfH8ZUzG6EZiBogMfEL5DvuAfp6Tqrpi3VL1fyZHFuWggJGx",
  "key10": "3f1uW7qk3ECJBMygP2vfx5rGuMmeqNwuE2M64FYjY8K9sFsD1PZKY2Jx3brpNKEjwsJ8N5ZfphZagAmZFu3aGzaB",
  "key11": "5SLLmmcqWiWCrCmgwF4V6X3LnMtyAX2Z8P34TrBtysKT3kyLRhMs6z7yVjn4eVMCW8Cc8amcgJH9w1i3ZkY4BBt8",
  "key12": "5SGcUZ3LCQY8GGza9eh1sAAWiMwn2fiPPqYhuPkSEGWgMNq6Dwke5u7LJR4N7NTtR9bLptBKYvRP1X8sdZaBQbXQ",
  "key13": "59i1AvbY5DGZ5s4JSjGRCc5sMXCeWC3pNhYd4EgrUEMdgmkAEUJDPqCH6oMmPEU6pMjEhEKELwHNASHctMQ4YEuX",
  "key14": "5giP3A8DiYHxqb1kcuXoGGMBVRJozvhk5QF1UxgqAq2tS4M7QhHqUYqbCA3iZTejh1NFSNhATSQCy4StE7vwzfcV",
  "key15": "r1eFvGhr2MWVPjxchmBpMUoymjdRv95K13K3SJWgbVrfPUR8f7BznZXJrruQG41sGeSRQMgFEoEMxRbMi5sjtt5",
  "key16": "2umUjRygJqC5n43Ekc3QCxaUykehe7q31JbFaLfqgdZ2z5taqydAA6QAwYMYfzzZfQWdLy7JZqw72hZjUGXNQkPE",
  "key17": "3E7uGZZ8MkxgG7BDuS1BQgJo3FJczZdUX4k3DBYL6pDNGFf6mG6SxgkauJCuy6ZNbyAy6GhfZi1uBvtWQw6jWW9t",
  "key18": "4U8177UZq5yzwe8RrpKVU4natQNTinM9rLWShzgmpYLtL9oFtPtSZgtTiQx1C2exQu3ZBJBbvtxaCqmvYUSomC3L",
  "key19": "4Wqr5rpMAaRH79UKAkgAN8CLukD4ua7nvyEDR4UgLYvJQt8Ww81gnCTRPu6PeSuAdxG4UJ9XE1G6r2HwcNuWpmP3",
  "key20": "5JxrnJFKGdTipCpxkZsEGbEtFMJFwWemyCtoc7JZvNTzDaF2nRxPHLWiczt54Xw5q9Rde4wk5qJM1YDoutfLnJcg",
  "key21": "2p8VY3PvJkF8b1DgTDoepJ1FNomnmEGHt8S6JtCxbLRXqsM2huyrms3pfpMf8QdPggyps61KREBAza4WWU4W7mwE",
  "key22": "3FGechHBaJAbzN1FsbUFYSAvq7UEencwoSvADmCfZJ4HT4YtRs35yhd1cdJXXCavs75DANR77J5EvGazZrVMEU4o",
  "key23": "5BBeiCqp3TK93BEDU2jqJyovGQBhBXbYq5PywEebcXjAtdWANTBFy8pVurTesNkMa23k21Tba6FYtk6mf6c98XdK",
  "key24": "24qJLrvUVi8eeZRPTC676o8cFb6R5FcmbG7rHyqTz46mopQnteoLfwdCpQTte6nriHtMWjrAVd3Apz36hPvadoau",
  "key25": "356F1q4i2C8Mk4t7FxgBUEkscaQWMp3xH34eqrnSiniCzXAFr6aknwy4DYcqZJE3DsQ7QgkvfPGesedwLntRqiXB",
  "key26": "4v75bUVEMzn5KRVHnr5aFKPT8URBLirRcvUhyihMXRFP92623qM7NQPY5Y2SXgnXmXEKMtarCDUToQWLQXSP6YbC",
  "key27": "2Ng7Q89hwXNJY3x5JM8M8dt74et6BrbgCbfmPmZLhzuBahdje7ggKZdqCB2GeJjpaVKyqxDqkZM2vbrgTTT24YwH",
  "key28": "EivgZZiBociSHHFtR1kYQNnnUkSCVTp34K4JQtoumgVpRnVVN4RwVJhoBaUop3RMK3t4uwR4E3K4t3zYoXAJuAJ",
  "key29": "4n3pBf8Q384Sp7bSkiTh2CDkbHdg6iBaqMx4ygqq2VsQuc6WSYdmVAm9q5Ba8r3YWdmGHKim551Hg3QTAnA6xK19",
  "key30": "52mHNwhL9nqYY1qJTh2H4E7j8WqSKXPUwfLUL2p37QsT7Ryjn1KfMpfJDRs7GLnj1aW6bt5mcr3aJNC9Q1eP572W",
  "key31": "5ApYRYaw5ZtgYQgoeTW8FHExEZTWdXJ7htP4a45xoj6LaZ8oLGT7nCrCa55R8fs8r8YiZVbQiz6bNxVJcqLfyb9N",
  "key32": "3T7h7VTwRBjhMuGeDSWmuxboUT8LenYc1NxJKtcrAMtrQEeudNc3RpVh2SVk1aLy3PbUanMudPBU4DVgKKSe5SQZ",
  "key33": "2fMFxCVDgNQbddNBDgdgLEfGvDhEKDtWBuSro1FcpG4gNoh2LnxRF4waACJJoZ3nJPE7GY6eA4Px8wLwqXAXnKdq",
  "key34": "2jm3HWvnNr8hkLFNTPNpJBMjdDQ53qz95kVBTUGSETFBxozFwBq92vZwU9JpbVHeUvSDobWQjcxzfw6ziEjuwmdV",
  "key35": "JHtqK5mLsyyLaVdBEJsF46DyJdyz6PXbgVJ7xz7yZibzqDTQot8axnGWjRSn8YQmfGAFJmJkwyPYVApK5vE12nH",
  "key36": "GjC7qdvR3UrotUjpKxbCdH77jyw3kKdxjXqwUNH6JmizgAYEFE4r4tQHkAZvaqSxhf1JbGs8hRuMyPTnzL54UzS"
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
