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
    "5RYDJmTnz3qYw8X5VtVVjjkk2VYwSpoRp6vBuvWr2i6AuHDMQ5VvqhrZtTwYh9bKrLRP2kAZzs5rYrmG9a7HQ878"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWek4YKuNrfRtv38f9RRpTRUwcJVgpCRkRYB1QYtgoyZeqLtzbLbC2K18EemtkuqCFkvREjwL42GnJAnDgwDb3",
  "key1": "4uXyXnAtsU47vBkctC6gtSgct7Ccaq45axXRC7Aep7DhhVCXbjdZF9Ez4eJjfkfqki5wHQVyaBR1q3pNDjXbG3U6",
  "key2": "2BzxmaxxwTKvRuYrM3eKNqQFmGeLSBPa5hs7LEiRLLd2zCkcT3dS5Jt2nxdR4L64Bbk5c56vHsQbXogwsReG9bJ2",
  "key3": "3iwYHUucnP1iyFy3K6NKbvr2tLaiFKBrqGqHtU6Vri9UPuZwhJC3PHuSxR7yF8pL9CCYCBYBkcikyUGcNs5QUAav",
  "key4": "5hK6g8LeW3Mn6KCbak2ZY7AYwRSEewW3mvZzujqQ4xv5qhinW4M86Pu6ocN6Enzgq5BETQFqyxPUgdMY2PXbqpdb",
  "key5": "4bJbMafJ5FB32RTeVAKb5hQK7FN7wFyMowBjx9JYSQj685sxJHfHSE3tmHsAx8rz5GJQ9jzxvR9urzv8FP4N1qYC",
  "key6": "5Pph54Q8b8JrE3as1fgiv1fMf137ng7kPS3FymDq8MQ4WK5kBmVSQD8sK7v6UgwUpGJ2kye4JMvwYDunsQtBUjQU",
  "key7": "2qPoCyGGmHMzoE5jZ2ApAhiyc8oXMBunKc3W8ZVPLtnjX6Novni7f5sec4RAjLz3cKYQEaUMHSuEV122s3eMiGv5",
  "key8": "DymsL1QTEGETHumBkDKen7TMhGGFhUwJZ8oEmSs1zhKzaXg5Kx9zFND4KpNRc9ciwkjMzSXswSFGSkNoc8dGfES",
  "key9": "4tuwD9fgZXNsyWJjTVN98UDPdS6P4VgDbE79vP4tzRNnmVziR7BzqRr1UAjd84CRwYp2ALs95RuvtwaGZ16MFRco",
  "key10": "5GXf1LLQA6P8iYAGcMHFVHfjjSF6T1E1Kuw3BRgNvSNuwXLTTqpDVCjJKMWecZ1LE8npcV46o2LxbAedt5nb1A8n",
  "key11": "4VppgSBjnhqjYuAsxk6pBeHYhUD8PZyut2cnUi7bHHQNTWNHsa8j6fKcnG3xXfixtGFEvXAGMFqVGjEXnHxmVqdH",
  "key12": "34um7YuG28gSB6xha5C9c8NVURD2PCXkUvHk9koaakDajD8A84JFCtPKswt89rvGT3S6hbRxdzeTsKTcrs9SeuaF",
  "key13": "EAmzThNNQNkJmpydApscdJXTjJowTwxbRkk5K8C3Qn1i2PQ3UruNCGZMp8DA1vPAwGW3uaXBDYikRrtD9v5Eqkf",
  "key14": "5WHMAXLvnEadB8rcBsUDCAejqXgNhCaEg35sKATT8BPk29G3KGEsWWdbi5kApLnqaBYwFepLNY4a9qrqWpxBPxN9",
  "key15": "5kRviJEXbv9V3ugXqYXCYZraNkk9hwuSXWUiMYfnmC3jLw4kFzkahpUkoNmm7ZyCQHj1K2MeE3e5KCN7iXUkPH6J",
  "key16": "5mV9xphcmJzfkUqwpZ8FbWVKdEKopbqCG38oNELT8QUDZ9z26uTd9pWk4UodgF231DwDuTv5erXHFd4S74RzfPLH",
  "key17": "4Mi2P82hEg27Ygut1FKQxJdHrARSTg3QeSwTNHP4sXzfkxRttmcPY9S43YSoRSrCGQ4X9acoa7bKzkQbXrs4rfa6",
  "key18": "3CDgXE9o6GC5xSofUDyRpQ6MsswasXg5tfxguDUQWG1cUGiWhBULymmuRE4JmmdNm7p4x4PnEet7e1GRv4SQVDRm",
  "key19": "2YEtxPX5XAyE8T84huWtMa4mTGayoFhhxT5xuoEeUH85F8crBCLmWYBDxibxtiGWjuiGKNsKWQuUjbRUM3mP2JGL",
  "key20": "3aK4nNf2ntyDDwfJubcstKCWF5vssDqY3aGpkh5DYe6N2QwSDMcCoZE6Yx2KxDZWyi4nFQ6mieLYmGVt3X86VDC5",
  "key21": "2HcqvRAB1c7QaXPhFsUKMPBfGi1XCoJrpJ7fq1ky3gN619Pmo6KtRu9VXb9SuWE8f4oNcxEkiJCtwjiWtzZUUu9a",
  "key22": "5VFFQ45hiJ8stPGLZWwb2dxGFwENRQggLSGL6RxPKWRxSNX8B4k7rneBZyc6QWKy8Bt1ecnNbCaBU2TTPfkHyfnh",
  "key23": "5KWRnUhRUdJXm9iNrXLnNn5sBp9asNiWT1kutZMqgHyMkTJGr4k1Dc9T1CP1PjujjGfmN7fLKBd2N2kXvYMXF2eb",
  "key24": "3czwpKDFkQjkrDmF9UBj2hFwiNqZoeVGETBNmDxzSL4vzissgnJ4jgQkz2CcJGKEyGcGLKbXDTe826d8FaiuVy6X"
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
