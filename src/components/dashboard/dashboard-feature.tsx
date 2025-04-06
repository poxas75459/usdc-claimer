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
    "621DsC4Ffx74g22cpvF5uAT3yv56h6NzXShSJsoetx7UufZ2QuffbgThEUKGqgx8xC1xzSLnzhrzjU7KAvheo5Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YseJbtyoifoTJqudanuASoUWaswnw9jBYBkdcDQuJ5Py4aDJPrXno3AAfq1ZKYP9rYmz2763WKF7stfp4PoH54t",
  "key1": "4A6ePtEFvAvbAhjB1BX6otXAAFWb4EQQPkrWbA22xdHiPzndmfhjwih17TqALa1jfcakJZqVNWLayJqJdV9JE4WR",
  "key2": "4mfJLT7gUDYQwQN3vvPq73UA58FV8mUpgSArdMWCjae5gqf9yPLTthfpaqrrdFhAFLu3w8QCE4JWumWsuGka1SnA",
  "key3": "3bUJFSPJ2hZwHC5aYjhu7SL8SvEsZrvg1pgCpTrTe5R8u5gLJBr7CoXp4F1HK1Mz5jZerSXhDjnz6V8giQZYaf2U",
  "key4": "3F7JWZ1tU2KseeeFkDhC9c7nCwdu5XYViyFwz7gfkQeExDsxbDYVgmkNT1DzsMHLPAGP9G8JLyBo8H2zuVkQETBc",
  "key5": "2J65kejGf24VL5NfgtDErgEAabD3A8HXQhTss1JcvCdLobhhdtk56n9YqiKkG8iv28BpkDD5azivym1q4YNFRTic",
  "key6": "2qHzeKqehCTVxJqqAo7LRfbWbKaUyhyQ33pPhqkx3artynso9CphJAito1jz6m4H1ZAuArrnM8JzafpLHGJCGhbN",
  "key7": "uRgXeiFFRRsAkfmQNpsWfjn1fDR8vBJNHqzLACCcyo2JnWqgiNvtRNBsQyiY5JvcBZjMVQ1nWCzk82JP1rdRGtt",
  "key8": "5zF8EfCVYbDrMe1Khcy84B188fi1YDMw7HJpMb4MeK2V8LuNphJJgLWTq6m4rwbfi8aSjeqSNwsDPQbW6z9H8jd6",
  "key9": "59fGMEUYuhex5kGUEu2mQi8esor4cg4MG8RCueEjaTk955CBy4Kn4JyiaYWwZ3PuLXxXwhLvfJzCrYmfwofW5bSc",
  "key10": "2BDSmupViT4wA1sw7K4wFdmLC8ebixm63Y59GVdj8wUjaWgP5cjVyukxC8FBV3GUbz7FUcwTfaTgrcRijwpfP9SN",
  "key11": "2fLdvxB4ToJa226Hmtn3sWKZtU9Z7GZvjt5i7eVvq3nJe7q5Zb5qmjkDgJG5x9e63disKV2LvNNrNZQhX5UaZggS",
  "key12": "2TvsB4h4KUGmFyLt1jthuSVP24b8WvS538jAmddp83KYFRS93ptuYadiMWM6W6sdm9PFqbz8GKYB34FHb4dFy23U",
  "key13": "5E8fuVyLry3XT53jxmxYV1rv9gginEzDkETEqZLXFasNw6yQpb5AeYFcGSgMt8JArxm365Eie2AzzNAmr2RSoYGi",
  "key14": "53CqWTGGKzYFNScuyTXJMn75nVRSyh8u61vTqaG6RXd2vbam8ZUE5t19zPc1XUXfPrLefSjueVeskgYoGg5pEhTf",
  "key15": "5vqeT15Ch9Jj2S1RsZHaHUEGLGYwjFbu5FWmHwWaWVUgsvtKahE83bwfi4Tzsn9Spozyr6Yozy2FWLG1qcnM92AZ",
  "key16": "eMH2WkGTsXGieWsfMH7jBz8kQC5vN82kY51GdAMrWRac8DsQoWVTUHjLcnYLwAnAraSmhWptSx9jua2N91qeQ2a",
  "key17": "2S5SCTgLxSDVK6RjQcSHgSynUzGZ1kjWnr5kZPZqCpAYzcHMNZDgGPNqHpLQBphKxuVG7wrvVtTN9Qq4np5PZyFT",
  "key18": "4U1kqq6UAtmzzBQTmpTrtYRKHffiV5cRBkFr8jkFUMt1KrZeiyU6Ryn2YgiWSUBEKRvX5NbSedQbK9m99yDnWFjT",
  "key19": "5cERKc8NCRZgE9G9EC1ZKoTuBgSAMRSkffRQxxkEXzAeTSgNnyGkEkXfQR5zKsjWCp1UCTEwUMBjzVvk7pPCYu43",
  "key20": "5KBiVNfDkMAfm5r9WMuxY9zB3x57yC3MQ4FiXdCShYKdTW9cvhEuoTNy73bAKk8gdRmKQj4kVk5cgLDdUymUNbik",
  "key21": "5yJyypHTg4FSEac36DdtfybHp7WmQmHtQ7GXRfJEkc6QFuAkjq1PdqBj8d9114UMvfXcowfwZ98tk9ANUZwqvTvw",
  "key22": "3R2hYqgQE6XCsufGQQNEtj2u5QiQMXwKWDwtShiNzZw3Un2DaDTJAENeDHLkEZUmKDHieremS3aSRpEdKNFUmb2Y",
  "key23": "2EYgBo2pPAo7MfRTqon3BcnQru3jHjt9FgHzhUp4xoJTAvk2jaLxwC97DKUY28opk5qLWbSyXXs8MJYQA3coV2wj",
  "key24": "45khwMMpV6nEYh5tUQHzqDk6BUdumqTwWhxuZ8Aw2MbV9BXUDEgBaDy8myQniQ2V1NbXohHjtAR9dLt4YzdkP7AA",
  "key25": "3BccHvXsyB4PVKCUD1qUjaWX6Mx1onX9M1rcH2oSkRXRW7JzWggWiwtCBr55jE1AWTGGuqL2QWMTgA15LqdjRkBi",
  "key26": "4gJrsASuQPXmPnWuALqRd2qXu5Jp7PAvmANVneCkCpLtaYhYEv91P4PmwCPxRHy3QMWZ4EivN51DQwNaBc9NE96F",
  "key27": "5w4vJvydwHCEPoJjtJU5gCS3Myha5RVYK5XKWG8dQrrj9q8y8fDa6sKsAAwmzwZZUHLQ7jjwAV5wAATW1Q4Tfjp",
  "key28": "rU3kTSH6siCdZoeVPmLYYB1iTnPgqUMwerE6Zyyu2uydsnjxXRz2wF6TbRQnkWRYZe1QM5TkjTGyNKpT1vfoh3C",
  "key29": "2CEJ4JkZVoJ4aNHWXbZgCvgLEXh7CKMHymeqFxv9N5Muux1aAeSzhaWSwUhzUfAmenpG6M324MsEZVus5MC2iiYT",
  "key30": "2EV3JurVe7P3QARJbaN8fLe5jxztguP69TFe8qpCGzLAYVKVLkLQ2tnfmwTPijrRsDsjJN8SgtQtyX91iVnS5ToE",
  "key31": "PQyfAxwWfNGeX7N7MnQLeZjjGb4V1sZU5ZTA29C4fQqwd4H5Zim7YocKoxHZBZVm6JLDBTWdruBCVtoYpLkJm6V",
  "key32": "3tdCfkrVxLjNgei487Z7n6sp7HEwsP3T5QhRuwrxyg976CsbN2mRp4WWisyRCDLYWmJKS6LoW9XFLg5JVUY4PAAi",
  "key33": "5jmr3RVn9jFk5YwRbQfmWfEwWdFWxjcQtAggf5vrnn7z35XEw9bMxHjoNuuZvsmMZSWV7YyjcgKMbwyN2Nc5u2D4"
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
