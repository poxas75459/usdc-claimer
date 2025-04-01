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
    "3qFRWwZ2KJ1wAUbRVPWavFSFLpmGsLsKFJwsuuTvy58qGu7wjEmHzh4o3s97xFbhMBw9Rzc8W3nqCgnYENBrPnw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542VoxXBQE3annr42JYyZk1B4ZR5EUZuFqisRLB5yGZQfjCuvD5fAcvArKStaF49J9UqexsPrMLcpPmEt66RyFQT",
  "key1": "3FTBpSWpZNbWKUrEGf7yCYskfCL5sx9gHibVGH5FZrrQWmQg5aCL5bBLWmMH3ceTFq113FVJ7tcEmja7PnRwzQhd",
  "key2": "4XAU7BiXj2r3G3L9w76MHU4kVn1wvTAYyAV8zgTkexKEW7awP95eF69Ah5SpyF211seqiWsrsFkyRponSdmEaQxH",
  "key3": "2HmqFRNgDJVx3GWqaeoWFbKJGRdANnMaTjYg7pfEquKDCGTan5bA8fJ9etj7pwg1f3m8BEqYTzRaKPGnY1VcQkRB",
  "key4": "5s5ZN5W5Qntm1QdrtycjR8Zi3TT5rAJVp3CdE2i4Kc7KE4phH6rSbEzCJSEcvB9XgPzqKAWpZWZXwwzqtzgHnxrN",
  "key5": "4jULSJb6Heymz4pC9piVaL9UUy38vSc1SiR8ZeW89PHPhfuuEVjpLiBWHfkKzzNQEV3AEi3y3vZWtXNRHDkBijck",
  "key6": "5G6nZESpkdmyGAVeycM9KWti3DBRNaayPBcT5HtPpwNGWiqnpxr73Z8Y3L8NFEWo6wQ42RDiDSkHYDC4CtUak1JK",
  "key7": "d64VrVKPmHa5JrQRq6nBFfkrdqEouWUeRZgr33sGfuHwkwQvzj3FQJhvXdQWiqooe4h6pMNh3Q1cHbVQfRREzyT",
  "key8": "2cVggJC1phmayQg3nsRXZaZEhyR6ACfusiaJY37b5kNG11bAdHTy8acbezRZWnmrQkk4gUUuwqAvHz7wLwvxYRFK",
  "key9": "UzqoKfUrQwmvnKw41fcW73fPTdisV3bom3NNG9Btta4NXETNFbLCoyEQwz1roJgHLT8FxhVagw84853DceHVUuZ",
  "key10": "2J9ohZ3EL4zHpS7TXy4azK1BhFg45AD4NaKkCtAcaafNPcnbKiNzkdNktQh8a8AzXT4ctijMoYX5ew7mkm9VU4mn",
  "key11": "XQhvw74imcbzTHWYjeuCNFbpdLLCarQttPUsMZpvJ7SD4TdjpBgpydL93B19VGYxhGcvQc8U6yrviRdPejAgXev",
  "key12": "obDDkLdmERRdE3bcs5UUE221KbPv1iYtgRSH3v7goYZB7i3gG956qkmQS9G9JYdgnkAjUYKztPKbYqmpLntHPHx",
  "key13": "3wcdctg5K6JLD4bAZCrb8nB1m3sR7dbYdcQcMBfowpaaB14Yo1gcsbDChvZbdTw9BoAwxfyzizcApgWoDN6WQ8ok",
  "key14": "3vdTcs7SFfxgg2GjxpUozhkdxj3bBN2ieAwMVJSXXZKawXCeVAGcxiUy4Vduqe4gbV7RXsSLFvk7Hu3rVwq8AZGe",
  "key15": "5nqUM3rQppNwVtrENwnjyFUoGLrvs4Z2RUZTaVA4rftXXcjZbGL5kyfRhmiHx2tPN12BEq6RXcNoto3uRaDihUb8",
  "key16": "mMRzXc9xC1TxiiTgj4sN1WHPqXq6WbbveKz4u1oPcybpM15p58sqS745qkaAotkUeBzD5tESyRvYMkRn6hCKZxp",
  "key17": "3dJFXf7xR5MvWL82jy5cbrJ2oeMNTZraVJmgFPtyWU83cQsgeYZMTgTEYBia9B2AS1dvY1TgsA1v6oBcLJFmRMXD",
  "key18": "5yjp6GgQkccJ8qDmDcDNqmq4rkPKqqbsE64Aho4Y59WmsLRQ1TRqPZs9WmJDhGtVHspsuCESDf6xTf9AnejDDfNZ",
  "key19": "4Yxw2Vj5sPregDTNUpdN4cnwD4mXupAXnKGKFh9D6D6vq8LbQiBfbaWS6MG8rsS5YcKnHMTEYMUEHXE94gxTx3Ww",
  "key20": "248zgow6xsDL9aFkEQb7rgnjvVytAcXinppkVCCNLKvNzJCmMQ1KHgRTjE7ZfnzuML9F1sw36Hf5t6HUjgkkRbfr",
  "key21": "GitWcgX6sGXbLtWUkjTKTtSg5Ff2UmpGE8DfSrN9CTugm8HA6sDtSemMckV7qp455JQgTrwZvSRYAhkgscB6g5r",
  "key22": "wUwTkWzb5KXUXeHR4e5Ceb8HKaHbfVdcoUr2acGehBdEtcLv5dKtcRvssKD7ZX9BffWPhVFkTTYjoFHbo2axs47",
  "key23": "2kCdmseDWTRQzSwj1jxfCttvCYpmamk37Dn2pGE2xPJUUGkuhs2VXbgnG8YCGXYHy25sepBtGFqUtMR74NAHe2Af",
  "key24": "2vqgV9a3k9hHth4cJmpnL7E1ovYpU1hDLnRxdShSfAQqyVRfAZW39omrYR4P4SrFbvJAxW8X541FYLsfZ2r9FQ1z",
  "key25": "5YRU8izWGn12waXJ84sbyJYbTkRMALqorLLJUCHnZDBFAAg3fqkybuVWfHRSxkqUFtRQtifxsAqNYqQEi4DzXppm",
  "key26": "BM1s5KX4Fyenyt6eBfpCjwZVUKQgbsWXvFJur2FbSVe9UV316wE59KQ91LKDafhQVhbKpvBbLGu6YPTPoDDRfys",
  "key27": "2rzEmu4qSLwEkE7D8NujbuvEhsWHruLYNymLeHseeZ53E1sgtvf9TuvfeNbN51ViR1kvXavLk8u72ijNwQoeL4Ny",
  "key28": "GGVhm7GzDLanrFnoJa5h2paKLUhMEaBVY5b6nbRLcniLgUDF3qYVLrFqUBYkweg8ihZ5pWmZ8qTzryuKF7nwvmw",
  "key29": "5xyKRXzx822TXLwDbk5DV3SsHLwVnq5bVTT9giLXGUE3nHDGHL9JBzDS1KrwSC8gZkukS6Dm88LrTo82MT6k2Ts7"
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
