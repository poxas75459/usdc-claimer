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
    "63u3hQNQKj7NnZDqBmoQssoA3ysH4eGLJ1xwupD3Z7tZoo3Qy2eLMgB8EPAXmxxkzAACX7gP7UZmRixUTfPYxVv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3Jx3QK6B23Eow2a1ZjzgQWjDFXSGwGCH5YbAddYFFFQyWpiKXPWQVZeEmzi2dUbSruSfh1qZuVxK3fePdhdcS5",
  "key1": "4D7ACouD7JJuEMeYo3DSjs2JNDcA8x5FbzNnzUeBBGdADT2mykupSTrm5A3Am2cXhpcrctek1k3BYwNLHWLLXmRX",
  "key2": "yPcUZboHSxk4EGvEXZ7GpzYwGrhbDdXQUem7L85LdUdAv8TUXXjHEpG9jbpNoD8JqgMDYCjFfkMbx8K48e9oHEm",
  "key3": "5kvro566t9XcKQJE3kuJDs2B9AgRSHesL4X337k1fTgqQFdxnt2b9rpvZjVW8ZALSewQBWdVwQ5E5vJiHow2UHrm",
  "key4": "2yR8cDpHFzi2X2tq9aHiPeLPyPeBnf1s2ZFuM8DQqBeXdkqDBJ7hR5eT6k6q4ken3z23RrEDUfnWACazaQ4wzWZG",
  "key5": "tDCwfTgMTopkUbpTDwk44hJVvsirekfHcVe7kKN76GKyC62q1ya5rmDSPSKf4d46rYFvYcCN8k2zckhTpccZrrk",
  "key6": "pKD6Yt9Vz8NKHKDR2Z6JpVT61qHDVDn2KSRYwxMaGVnzHwveSCYyFgKU4djeDuWoCWoeMRYPzgVNnThzG5wWWxi",
  "key7": "icsU9FRJvx23oRhErSKgCzgS9Cn6V2JfkM4AoA59qUjMi87NPtr93Z2aRK5JfY64Si95bm2rgzn4ushPmoHebMp",
  "key8": "2A1Tf32WSejp6rtXKCEZLMEiwLgyBu2XotLkCoeLagE1re1rTWUfirWYHpuhrpWxNN6uvbpLsRNkAoYChKz56c9a",
  "key9": "2pTLG2r1HqNotMLroiZ7j3cETx2StTyvaCdBbs3YHgsw31fhfCg5BYayuFnXRpjTSJNLgFmnDfCUG3d1QtcQrYFV",
  "key10": "5GA8J8MMQzeThoUy4dYEJ7tJxgQyD3C2WV75tMAJDYYrBS54iB4ALx1MLyzDEzEot1BCsjewawyY3hYtYRCQxsja",
  "key11": "2fuDqUad1RjkbxMV2hpMi2zfXiEEWvJqMJiVcwnhxdFJHMbkuzvwqsaWvwfREePTp2E2WouDKpKasmkKXWRpPDK3",
  "key12": "2T1c4pMCUvjEeF8rw4numfNwhSDDyVCRd5dwDpiaTzEZh9MqLQEYCNWVQxDair7pjQ48N6U5kv1RkbDNvwLkfzaQ",
  "key13": "4JiVemgWFqiTUtygawZMP13aYUFoxiL8PeYn4hw2oibJVFscJar7NfXxp8F5EDAiNBwjAnjufYYqv9Gum9QF1YE5",
  "key14": "25iBMQ4ZxHuQ6rGukrNWnXXycrsz77QPScch5FoHSLrkjSq525KQUKo1XAgX5QYVrPfq1RRb9G7WV8cuHe2DnwcN",
  "key15": "3hUzRP7xztWrXLbGwYD56bdrZuzU531ZWWU3NCv9hSByEmxAUmRFcw7h2DefoYcSsExWi7yLdnKc472T5fTwy1Hr",
  "key16": "2vBZVWpiR8MxeDoeRL5tYDMsC17sNi4tkCNU4rnq5oCGUpo75CKSXrzkLaX12Tmvk2iNJW4tZ632QHnKvsMVQtDk",
  "key17": "3aK4JQ7cK65UtH92vqssLSX3BwzvjPQX9TZ44EKbinFosZYc7oC9Fe9kb7N6ZsfmmyfQXaUd9eggKJr2iTA14LhW",
  "key18": "5xSyrRQfADj5GAxqbsp7xw2TZeK42e5RYjHUCoVeSP6ng5T7su5tggY2hTqxVUf89LaDCoP2magGZt8RggUaVYUA",
  "key19": "2yoNnHB3ukwpEcVZFEqM41C8qUY7Wv5GJgdRHdx3v723chKQpZYxmDPkFmgurM2TYzYZnKtmQCrqBLeNgX2UgEpw",
  "key20": "5aPsckk1YfMWgb1X58KnQJdpR9PjVKXWiiakWpL1XVrU57uxhHxnchShABiB6s7QnPbJQWVKhiYZyVEwJUwTxc5m",
  "key21": "2yZK5KRZHY32r2se311ymLqAexf1TXz78JCaF4PsbYZpC8sdEvSaFgxug8gcsYh8KnG4tBo3wUY7SPRJof9v2Hv9",
  "key22": "64Ph9NArCpH1Jyrt1eckiaGsFW8Np8iCsQAAEyF8zvL9msAkchz4pKBnx84vmFFSD3kFD7wpgMiZnE7nnikJxink",
  "key23": "kwMyXaJb2UR2MxdbShEsLJamG7oV9WVW7zSoaqXN4qBPUDMKGe6dnEsz8qvmJQ6kn436BauJjfw1r7j4NnkvZHk",
  "key24": "UZo5CBQcjqFxpHAKABxwbRh8WXbdL9nmiwofCVjsE93pHAY7mwe4kN6mLsXtJKHKh2tBdud7D849Qc2ep3nY2Yr",
  "key25": "2ynjD1srTwLLdGdzq5iyQQwiXUPLDkbLqsB2RtvSoE8srkjMhcPVvp64CCXztTUeXt7qMSoPeBst4hMoFHce3FHB",
  "key26": "5xpDqC8jbGneRRWhBhm6927VHNM31Dr9inB73Jzd3Vb9fWnqYczgr91Bp2UN8zkqDeMKZhrZRcgycGy1oecVJ4vH",
  "key27": "qE7Yu9yhDQXKKh2bFj4pkJZ5gNTF3RRvdeuwgG73StoaSSx7hBdm5Z6jEWUR7YUsDxVpjtUHEeeroF8XQ4QbkSc",
  "key28": "3thA9c4Yw8pUJvd2QA4tuPjsba5jgqJfVAgqmT8V5qFgumn6W6syzyeJsSAXc1KL4CcNfwdysmwTU7WkEH2Xgui9"
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
