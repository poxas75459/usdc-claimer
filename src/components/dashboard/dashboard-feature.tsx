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
    "4yX6Kysh3k5RV45moChRPDYALBx7kknEGP7ACzgTMHCvbScrWNTtJ3gnUScFoMS9SGMFmofvfbLDb51AiETa6BCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RUeMg6kyCjEtJg8cpyccJ5fHux48A5LaV8jskjtZtB7AjPtoBt3mEZ43VxG6KzAhMvLDiszhJy4pcqdo1u4EubB",
  "key1": "5wGJGR4JeLZ9icsW7TkP3G8MEYMHskw2fLxLTf1Xa4VDFAQShA4PvBAm4QKXDQbVZE4Qj8WdoKUEUsMR4AcTQhTb",
  "key2": "2T7ZxXiLfNMUffzv4qbKU1AxgtuzbFEtkkLKK1ouLymX7FENddm27PqoHgGhfGTMEMvzJDeRWJwnJnoFfzZXCHth",
  "key3": "5DBF4N3fJDSKoZMytk6o4yGpUooH7nEiDuhMTyFbtGpFopMWDA5xEqKAC3UGiRtS8rongAmmCgo66Gg6KpzQkvof",
  "key4": "wx6bFSvPBasywEHTB4Zq7Uy1uPze6Cr8spgYkt7MRu3qff4TQ6uZkbCtYBV5oda15QTcR1W3DdfZMBcUVs6R8WZ",
  "key5": "4i3T1B3gQWkk1TT3LDqA9AGpwgKJtAEDB7m9MQHxNyRzUDNTUEuSHkvnzxb3tDhWdiUmfLwrYDuJh6wWVHjwuKyX",
  "key6": "5T4w8SkZxy13msrgR3nFo2Tb48YwUXan4jRW97SWacM6JcSR8T1mVD381Kng7UhfPDuNCxgEztLMw5tGovXQcGpA",
  "key7": "mVzghvqEjBz1uDjtLQFkEY2NW76qxKU6dfePHuXwmYJVE13ztJoAzuSdUFhkBLdTFV1krRtBthgyPkhMi2ZafK4",
  "key8": "2vQMAybemcZF4RphiWs81F4xeVQkZtdAUgErNzNL2AUUSPRf75navNexfFRa98WhzzWUkjfwN8CjPGpSKxxN6WRb",
  "key9": "3TUtadZaGLjgBNto1XG4FWPT8hMm4cic5x1qUk63tJDP6S6ZNoePDknzJRLygDrVizjhY1ECtu2j7K82rvGhYKqF",
  "key10": "4Yn7zC9AjXPxabkjGWzrKpvafqzxj96M8wWy98pgTXXSuWKjgtfZfmZjwNtJMfR6hhyuNc1WATCDPwTwwLB9yG3T",
  "key11": "GdjppZPCYq322QzAJyBWYqrThjQEwuccPCgRS99cmdrTksuEYCLtpo57BeS8A5Dy7o2PmeeZuQJvYMs791nbBiC",
  "key12": "2kdLKowxcn5NPQVGFEgJXKeu7rKVc4fZ4nZb2qbsTfeGbK6wNxf8drfC43quZMQENMEANHnzuv1aLakRxx1sCs8J",
  "key13": "2rMYEuKCkHa7uuEac8BzMB1Nj3krFvexRC8ohMbZfuctZpg3px5RSAE2EUqmNrLBCiBnYcfk4qH3m9iPF3jGc2y2",
  "key14": "2PvDtpbcputrP3xQ7jVhu1DrZuRD7Jy9Tw31LALMtokNZBx4tZHnScqQXTQ3hYbfC8dFtM9DN5EgKoxoJt8pSWEm",
  "key15": "rXUs9avZ4Pe7ufi4DUJaA7VvXUvCKdiYXc6wjxre6f7HTti5o7L2KM8T4GkMjMDfzQdVUQvAnrFVEpHQV16kCoS",
  "key16": "hPLQnTLyt6ivYQGAxbdnsB5HV91iNctA8U2aJjwNuisJUPJA18Z8PpTd1yiNtQRiPiVqqSQ4sZyZqXywxnEB6x2",
  "key17": "4m2XKtxfx4RwrLoF7uhZhkhzQDxjjdERifFa9DB6MqzT54QLWmRDiVBuoQSaMjZJHktgnXNFJm2RQhLU1N6zTpwJ",
  "key18": "4u8Zo6bVSFirEUd9XnWPJuADRuA5HEcS5yNAevKFd9UU73ac9NXZAbYui5ZJ2RQNVBC6cZDskowyRM3ivycDyR4J",
  "key19": "xPrDYva9vUfrGW11vac8YgG47LX1M2tELvviBr8r1kFErX5SX4LRR8wqeUQt4Vs2g6KDkQfeF1NYM64HfNpmMTs",
  "key20": "4apwTtokoAN4CRvSsVko6Cdrvwg5JtAHqNViNbc8xiUjvPpuWkK4em1dGGDDK9NdqxE5baufWhoeey3FTgDiVWkx",
  "key21": "5ax6uHrzW9grgVxSkCS74uGgQE8bEqvCjebqoMS95K5gr7HsNGLzdBecq8T4xAnRhhohCTHrn4SeU1uYdhSXWczg",
  "key22": "VyHSeCPxYXp94e1JvZULBro6i4Mb2nUBP8vXiC7Qu7kVYKeFezntazk3NbEvyhwPaXgGhxciw5KF5cSd1RDVLWr",
  "key23": "5SsUqo3XWnnY4aMwRPCXoFYX29DZnWexNMbJ3NV4Uwxe55gbRy9s8PHYsjZ19DtsEP1w6JVKZ6GnG29wwhtX9ZMk",
  "key24": "5fH3V4PpnYbjTLzPd5xy2WNYDfoKsPEypJ9gMCjN5weocacJ7GgmY4d6z4FVvtAhFufQKfaUogcq6vYg8CSkTaxo",
  "key25": "5bRMRjnywVXeton5VR9Rbf5WnApKrCyVUiZR1TPKnXN3a3FTsF6Dgx2QUhtonj4eQbm85dhzAXvjt1cHw5zVS2c6",
  "key26": "2eL4tz78PycNZwzFW3fVpFw4E1tjPYvz4Sz716yrGaBFwL3qWpvZbkoWtTfrCTeZsDc5V4tmaGQrB4CD9owwGPDV",
  "key27": "hqhCmXk3gnJva6MXm6XYmcu4nBuAgWxzT57KCUpAD9kFkWdAMzzN5sDeUxX57yBA5tAQNPcTnRHtdPmT1nTFWMS",
  "key28": "2RvMBtyiR4X5YDqDKMeTEAiNdYek5MTX1dUVqEMJMRK8X8PWKqga5xMM4gFpaR57183NLVSJ8SR94KYyQVcoqmAN",
  "key29": "4yE43kmFF5A6XpCEtquB4Jmum9aqN8VScDDwc6b5dB8ihtnU2bYuH32BNQhvc9dh5i6ELdS6NEBaRYmdYYvWpY5A",
  "key30": "3fqWQu8VbLDnjBrPFk6bG1LirLRJ6nt7uLjPehnkeB5f7849JxeBG1y3on3pUafVjGsYN5RVR32H2FuaXxRZWP5",
  "key31": "4SJBfyBizuouoXd7for5U2K6XHWCXy3UTZLxKk9ifhwzUpL1gPw29Q3YAzyWKQDZmwhkv7bAKA1tccjTeDLPjmUK",
  "key32": "i6FjmWfMKk6QE9R6vmz8aHVwRqfFCuPU93MycvFRGwW9yAPFhqJpTQWCwuigGjtmsrxxkdkpWBxBS4XJSC56G5X",
  "key33": "2Mtp8TjCNUGmjt3P1ien8ieuwEXcfgq3xXEx83uv4Zu7JZ9ykDncspgafxXa5yTC1WeCP4bX5UzQVVVoc9epYjL1",
  "key34": "3EpwdvEwaD6SRDwaBgHMw5RojQ1xEtodFvEr9SmNd3Lsnx7XnrF9XRZbj9zzevY35m7HvFBriRmTaKPA4QYDaq4w"
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
