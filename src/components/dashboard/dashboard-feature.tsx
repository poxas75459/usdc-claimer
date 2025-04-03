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
    "49fui9FY3dyjdm776HZ1aBPJi3PMAveAgAJrRgSXQo2VHmBpgViymm2JT9PSqiLMT5Qf4vEdQGWj8aUZykppmz2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rraVUUQAYhX8yKBtczytYdL9LWGnyUvjKiVBEQXr1PSVWkrDEC23r5cirADQXCJSxKEq6D2G7SAgAMtZQNc3Zsc",
  "key1": "4WwJTYE43ac1xUuLvVVZtkUpepcv3C1V6CwEPJfaj9cLXYe9fjxQF37zEhqevKmM9CCc4iZ22FVAxWPVgwdFcqeU",
  "key2": "3JamU3UQThGVtD7gzY6rcRjm9DMVyeErcmFRRAVFYeWGk6xAar7XnV8ouMZPtRjM8YacVYsugCiPNqicmvYERocZ",
  "key3": "2myKsVvr29AeSrQizsWfBSYrA2fZzX5hzSpZcdaKGZdX1frto3rFT89GP7a4yA8jNiR2i6LMBbtc2C5YR2jtAbt4",
  "key4": "4gf3TiRmSxmLrK425tcj6FJeVAPgbgfahkHAe998LHzs2SHS9RZCZB8YXQzjpUT9RdzCjktES2Vgz3CSUGWyfoZH",
  "key5": "3he8LRieiPHuXsVWb25yssAtKzqn2DXuxnUcpavrHxCRwt5WJZrwkoUFjavxGYXFdfEZ5Kjsv2SueyxERUSuXMs8",
  "key6": "5d4MevZMMJFfyGVTEiYrbJfU8qosz56vXsBw4gGrdrNpBimbwDCbGnayVS5e5yLNrAcNTJgnZjNAJvdGegM6PKER",
  "key7": "4PP8D9crSNqD4b1ajTwPCfYgS4qEHVMNoiLipuiFK7LFBa9pDxA2MBFyhLeBoCP4dHXF7PBZNQWcfEETfHwLDCCz",
  "key8": "3ebz3V8kHs7RgzjzzJqxgJWMC3nYk2bdfFRjyyA1TC1KLCSQ1EFZ5mE3rbazMD4BcNXBGp7sazayZSdWjHMkEGL9",
  "key9": "5Yc7k32AmDwovghnaLPXhHSLDWDqjg41rbQERjpmmw8t313a5uzS5W35hnDgwAt9xLSshRzM452tjaCoQRvcfE6Y",
  "key10": "5uB4vdEPWA15PTKnTTM7k4e1na3fRNumbupFUdnRbmmdiGkqDULBZpPmdAvYSZNsDESWZ9J61xcuwE4K31DErGaM",
  "key11": "4eXBFGPvE437AH78vtTmWbQdtFRTWzRU4kH1cJrn4Vu8ohFtu5e3f8AUcEntDfAZYhSCmy9HH2ZzUG2PoaB5Fyfj",
  "key12": "66FGY9j3j4mwqfSYpiGzSm7JhqEaH6ToiQAw57zrBEYHDqmxgwS8jTZo4aE9aRY4mL9mteMfE1swRw761KKy6WN3",
  "key13": "5wracvtbzVq6ZvMPn8MJPgFFzsNt8fgVNswdMhYt2j5xi6NRAEZkCEGd7jsen4D4N2KQ4R5CAUA9Cxqb7hbVbJBK",
  "key14": "3aFj9uNs1sd6RQeR92cFm9yJGaHjANBwqhk2fBDJ8pjWpg8LhSNgzdu7usXnBZPwVhVpUXJDFm2mgVETUVjmoBUW",
  "key15": "55uPUsuJ7mP4wNmDNaXK6L1nhgG7soKarbo8W9omjvrn9cdhnGjcGGfQmYKFb84x8Ttf5PZemVjuJGDvmbCgE1fZ",
  "key16": "29EpWj6sqSgyeHjdLbnTVomR3SRUBg8X4pkwtPRrvTu99YzUGZfTk1LhG6xAifAjrhQjoFpP5FHcVp8miLnJStSK",
  "key17": "rYEBZhjG7TfMFu7r9y22mpHNb2YYwHT2ZQyrCvqoi3sQPiYM5o44z2LRQgmicjpJqbmfQbeAskkgDssyXhY2cUn",
  "key18": "256NUGJztmm6vA2od7WVi8izy9WAamobkRYzzG8hZG1ndzaDMeyToxUvpbzKwhY32pWSGD3axaHSNpCdfwXMCu1M",
  "key19": "2mdyZABRSShMunPNVdeLSWxUW3vHekXHxqRWvgSKD4k5AgUV7cZquKogtQd65Q1jT5fL8y5Tv1k1rnVFh2p4QZDg",
  "key20": "3P4ch7KWw3zWzhx9xuMzuAM59U9UYygRVEGwMKUfWbJvcEsNN7vxnrUF8v5Fj2XKkUNx8Xn2jrjjhRqZ6ADNPKne",
  "key21": "39V2sMVSet9oNfdc36mSyKRHbdnH75RTAsERTxBX12o5MQFJVFM6DAq1jAxTi4ZuDFczWr7WKfDjEx4GRVnWqg2a",
  "key22": "2X69G4UKCYUqnJtrZB3t6oQGngJStVqrMudmmaziAyiphwLjNWKkaBxSppSvyRNMoDdfy7yzekKYdsqjSJYuGdU6",
  "key23": "4qp88p7jmgcTPF12oSgJf8osu33Eu9cQVhBmhXShdMbbSbnhmMudCFnpdwJadTvrGVVSFAkX7gKp7cFvKphrPmNt",
  "key24": "HqBVhLTXfkpVa7ZMSebLH6UAei4e6irwHfdFnxRgUkRzPRjbdhHSJKukA1MKoDPMQ7xuLrp1fwY5oScZVRNB21g",
  "key25": "5yq7XSjZPXLbTqMT7EJQbb5DTHzciNsAmA7BoMNkKpMXMzuhe5dAXoWmYrSMf26fQYu6nKaPwWdBdn6EBo6tARAU",
  "key26": "4xVeRPEaEKcPguGh7azYuZV8FZ9GF39BQ7ffwwkxgRrYhYvQvBYhAXyg9CNts7aEZDch255s4bopFdo126xpQptt",
  "key27": "2sT2vzNSCdfbksvbxnPqVW7rw6L9MSdmAXoWmGixgyKSotkNMXQYhkV6iMKEFw1Fus8gfF5WwrRe1oXmt7AGK4K1",
  "key28": "23qY8TqLD3Cedk1iT5tUEFLnFFNtnNV4BP471DkvBqjoNtRgdVAMCTx5G7dqqAvTDQ3JcBiFWGEr4EJM2BE13DAx",
  "key29": "3GhDxizcY7apYQkNZ68gNygEyDh89A6fnZjURawgR8wgWUTCao6ZWMfxWGCSLCAg42Ki5uM3VpLeCSHjrumMHrov",
  "key30": "1Q4daKqQ5zuQKW7uDQwzijUAGdzrQgzicrUadCBua5LtNbX2C5z4A9faCVkRvk5kiRc239Tmhxgdrd1Ustd6r8x",
  "key31": "53CdHpe8K8r4HTFDJunHbgP9owYGv63QRYgUWubPWMtMhigvGG9zBsGAxReSifb3Qusco6oPQbBJtqyWcaMwzVjN",
  "key32": "cnidVUW9KJntnWjQTpyyoyviPe2NtroVV8eMU1N7GQrHUdT5hfNDmx3n1AHbGLoT9EGLmZ6dUYG1Zybt56ghmP2",
  "key33": "Z7mvVrCHupfq4A3jfh1tmpuPPJf9oDQ1cTjmeRHY4JkUEMxE19oWeYdXccLySRYKpEKKJPufjW9H2dcn3GTm8Ls",
  "key34": "2hHveW1RPpS3GkWmDTTxUShSJd4rWtjYnQ5qHzyHFQMDzHF8G5n7raYkwEoK42cJQ5MqXA5pxUFannVF9ZhxwcBj",
  "key35": "84J3fGWTS4xSEy9QqZbvLiyfqGHNyuSbBNCEsC5BdPDp3uVgE5s3coeLVuDCrycC1RkDyTxh8BpBzL7JPdN54HA",
  "key36": "4SvK5iNRJxVEd4h1RxKUj1jk4tzrWHYJrKC8sVz1EBUEH1hjHyhE9BEqTu6eUzCj733qFrpfLsMCD9vvjUPxjpyA",
  "key37": "2vV4vG7DTYrxipYgvM1BwJLPq34tcBM9XXnaEqALQUpcGybAhcczywUaJykaAYs5Kog85GgCamtZbtykUuqBk45v",
  "key38": "4QteLXrLva1jprpMQZktjtsdhp2BKGZ2Jtc35KbsPxBNNq9ZC38ZZF319qbFwrJzBgDit8vPya6UXjYDUxKhiow3",
  "key39": "519GgeTMmb5B4LXbMMU9r1biQXc6ydwPS1WcFYysEnPybA6oz6b9B2ZAiccTEvWoHkpQ4yNfS931hBzYkb9p5m5v",
  "key40": "56ZizMXp1NWG4aPaMeLESPm9e5RUhVi7EZ83KBz9TU9aj3wHQ4fqoPqqomFMX8WJvbFSKVCwGyuDjR4QFc4xiu8R",
  "key41": "5eadzE1VK2YSfyZ6pCz7HmX6AD62Q4ve8ZZpXCzDfrZW3hSiHC5pp42A35kcpr6F96eBtr6cYEVF5frjYJycdjoa",
  "key42": "45fnWGnTrQbD4eXKR4pWa7x1ETh2BBkusjoYHE4JxiZ2zLshmXuvFW7i8eWRVjR26dj3cezMLgpJABqvJF2ega1E",
  "key43": "szDKJQwZ1tWvrnENuBNi7DmuGd5urQVea2JZTdKPeot6doQ567YMSxz4jJSzTGZwQMD87KeUFhTrHCPyz4g7APq",
  "key44": "24LLom62FYV6j7PGAkxTTvozgexgBwsbiyUWKE85GgFiTKtAJbHiFjy52HxxW4RyhaiV84YhAQaxTWwM3k6NgbUJ",
  "key45": "3ddzq6UJP8SkkDiRZS3ySkdZPvDHEhe1aK5oZ447iupm21bRrs1FtcvdJFmcBzovS2tU7PCZGucy3zpabUma8c4J",
  "key46": "63r5ntXjCuc2eaeSLmAPHGEDg7fCdGH6NtkPVCGjBEThcJtuBQ2679AmGreah3sHiXchCmnJsYiESvrWjkBfqYn6"
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
