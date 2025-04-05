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
    "4R5ucH9LRsNiUKaSkngYN1gtSZ8fXSKqaPhAxCvtLw3YFv5u6E8poy9MD4cPQM1t4isRJDACNnYYYAk655SVTYxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jTadxz2N6PkesRXnCuPerDHmzbPP2e98niym8Ka9YsrBkMxkhu9hdvzQMQDMZdoqvNc5hJYvh9Z5vjNQQsT6oS",
  "key1": "YWeAEgP7V4KdEd1NFZUjpBhSc5P6XfH7SWzj98KcwZiUaRTLEykKvTUk3BSpBCGiEvYNuC88mbj4wxCaKnQSSiD",
  "key2": "3oFfukFWB1a1Kbg3fzjHqFsHGNSemidPsTMVbMfoPwFdJ6vF6AG1wxospqm9Anh6KmQTEnCFGscmYZmUWdwUr1DR",
  "key3": "5gWdvWgiUtYWwrhRdXhTuy6N8PCY2TRaK2r8ckazL3Qyet6yqFAHuSsAmzFZcMdaSrRHCwpjuHCctHYknvL8wsvR",
  "key4": "5RgGWViPckpgwn511ryEdehr82kmk7NuZfLjgsChgPn6cmxWbpwrFon9hZthbjpz3HM64g6PFk2fGkytoUHJV9gj",
  "key5": "31MXawG8rL1y9hKEv1VFV6JwcNbQzxXjhA47wKtP82WUwYFeBsztWYrep2Pjk5ZztN1jo3Vz1hHKcG4F1Q9HyBhJ",
  "key6": "21tLkMhmzfFJAV1u4gLyy9mRRmVV5LubDjcRt9Ry4miK2G8YzrRGgT1iTiekoTuLy8BLxAeNwvTei5MebsuGEzmS",
  "key7": "b7ZyuXgJSfyF1NGzNsYRKiy7k6VTVjBGk6QLBktfgjBT26skoNF3k8h2UKpZPs8ZYAUCvRjUecuqzi44wBsgGPr",
  "key8": "25kVvZN9P4p1chYimRbn8fdKr9TKTq1vnFVtkuSTAsrYXWdsgLPKJrKCD9GNpoDLF4MtiGjziJ2FzpFteWcfdAEZ",
  "key9": "5pBazAyWpThGagwWyv3BC6VVQV9tBiwLXoWYFtf7sfTf858yATsbKdoQJL3SJPJ8FUhba28UL2qq8G1MXt1gRozF",
  "key10": "4GLvkQ18S8PnH99gnKtqxUnXKEAgqv5VEaUs7m3sa6DjbHp1tmdGuZLvFFu2Q7Lk3WZn5YdspUKf59nJhcPKp3Ab",
  "key11": "49Q2V6P4DoLNTSAgYd2b99HoMcp8L5yxnonJb4QAKF3SaSd6vuxfX7ZLBKVJXiu3hmJotyn5EBesRr14jSefqTtW",
  "key12": "58tVsfzP3c2d82HDuuMnVYPfCrhhDBHUExktxWxZP8WeKYTZhzkEwj6zCcBcDDkT9Xc1WqPcQTFNPx8hWnS9Tj7P",
  "key13": "4f7zyWTbkCFXnuDov6esMTum1S5nfZkBZLEFkJC5rJbWJbCazezeqwmXdQZRucpXHi2tCLAYt9tBRSYa1pNG5ipw",
  "key14": "yRHVaYhAKyFGwQtx14WqiwPqM8H4s6KrGMj1wZSaVuEK7Jc2LwKEJyLS21t8JrNT59tNKwHSiyWKSnkc9xYmhBw",
  "key15": "3qLfdf5abn3m88y4xG1rXgdSBzWFxbqifZ7rPzqX8LH5ad7b93NYQ2PWu6tzhLKpJc5oaUMWAzZKDhYML1Yaq8p7",
  "key16": "4x4rhw6ungy5MYrDgiJs54oFVYXuxbnTEsiBRm65wSventcpXpJU53HH4oQwNVAD4zqgyHD5ziBUjvQEns2oSMii",
  "key17": "3uEm5veoiZmTUA4mL9NrQEsR5zTcDnWa6zcgkQxPbYozanYkT5Xr96PJPZJGaJsmfoTudC77XJLSrikaVJAJdWds",
  "key18": "67o9CKPcNvoRzrK31r6QizTCLzjnjqZm3sXyUWW2wcoHbFpbpmqE7ZZSAHNYcWorLk9fk4UsNYLZCuDPdPMM8ZEU",
  "key19": "4CoeRpVJ7oYrpdHTMSznAyG5LDQzJJnwtBxRVbBTy3wg6XHaBT189yJpkbKNYYWeAA9x8s56qJx395R8Te5FQna6",
  "key20": "2gWt3s2pFv1X9TYE5pULmhNsShd3pb6dztemfG9KMd8meP1zWgJ6F2TbpknbaCcEGi6UVJXo5nByCWr4iRVYGK8k",
  "key21": "35bwLqgsrjPTkqU6PHPj4fX1sRAseAaJdcUbPQoBykSFXwjJ2ehjX8CMmBHz7Xn7oj4aR4CBp4QNaYfH7MSMMHs4",
  "key22": "4MzyfyYNnKAWYhegYW8iVqnBCfq6bKQq6kT6aChjoGLazP9YtEuatDwkpVZmXAxdYvX61W4zH989nt8E365RDny3",
  "key23": "3qKkKmFAPZ6W62qct2snVTVdDmV678UZg9xRBP4EUGyrAz5apR6oWxJ4LDNLJ75LLfVe4tRmeF9okjQXCY3GyB1U",
  "key24": "5dk4QrNe6hRnWM6p8aqXqMUyDJUmtxi9RJv2nX6MsUS4cMDa9ZdGbUq7NykfT9dBzU8oKqtngAwDbbjT7upKN6rD",
  "key25": "3o43yBeq4ZnGF29MrEptbdNoeoVXb5a5fqvEvMUcMPubKw9ZH24uHoh3EBzvBzCMcGMM75NKStkjK9aaATH9V9vt",
  "key26": "4NoTX7ncyzjUH221stDk9mgyCTxHmZAmSkjdV6Arkh8wn7XoxULNMJkHvXbGLw524Ch9C33bzBYpCbQFDyXPYxKn",
  "key27": "5VWgm1CicVceDzFsDp45rVRAcTVsCfSW94mN5KHLBJFsFDkREDBaYrGcJPNNT2V9VD2Ls973jWM48rrBmQ8Q4zsY",
  "key28": "4oEncyWcfgW1EwDUGzKavQCRR9PhuEAV73MZS85NwTpfX4jzSztuRPnSqDsd5wLRVsPr1eCCyH2NEfuSbbwB8b5Q",
  "key29": "urh8aKAqX9ACQo9Qq1r8M8ksZTHtcoEnkfSowvP5XWC8NRHxrJW8ydJEuV4g9t6WW6EuXAGeMpimkvESbARUBjA",
  "key30": "2C9Mfk11KGDXgvrUhR3kj9PUBLRcRVEPSD6AZWDUNrcj4oURigiKFanNjKJM5ksSgc2pX1zJZphsLPHMgTkzEWNv",
  "key31": "2M4Lv8PbyTXM1JWNWdsvpCXvq5MtRD6yWpWE18x98McCrSpafrEp223zQmWuLVUKVZbex1a8Za79GG8iKGMDMX4S"
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
