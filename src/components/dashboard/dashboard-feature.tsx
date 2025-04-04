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
    "wchU7jXKBa1YjXBm7b9qmpWUAjR4XGUgAvieTgUvWVcfpAwLnQybjHpYyhZeMbUXC2ebzMRqLwWvKzKX8Vr1pVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHskADqc6pMRbfsxhKWTeMTLjJacFReBK3QFDchYNKwEr12cuVUz9GfVkPUGoxyvpfRT1yBtTdMhymHtJ6vssBQ",
  "key1": "Sbty1VziGNCoLaKSkcCKdXwjBMbTadGhG1P7mxCmCE3LbazWXoUNDAKrNE8f2mLB1QPdt4ZK8EzC7PG4q2VBqX6",
  "key2": "h9o7bwDKpQGpUG3LBPtC87AwBpMD7WjrjwEX1GHBLqVhp1DRcWkDqNFG92NS7iRNbjSWsZQsRCEFuxpehhnz57g",
  "key3": "3PxDqDMG5okeis2QWZ26oxH4GziePpF3tE1p81Mhe5viyVyqezBn5y6hx5Gr1s5S9z18MqTsME5QgSopZCvajMwT",
  "key4": "2LJYfQFeV5STgkc4p23kP8WJYb9bDyUoaXHoa3jD2ktupXUxR7LH7ujP2i1byxZFDyr6Z6y6qnVRrVqevsxEtzkr",
  "key5": "2hiyXLD9d5Jo4kcHcS7NECiienZPjUUQbXs7HuK51NHv6ZrNntRKYWBny2r2HC7dX7DSYxyrAh6uxbpxCW2VMQFc",
  "key6": "2zhpL4zbcHS89m9zv9SbNn4RiYXu81PJRNj6AeKRf7mVGUBeUGhjcXM3sHpW1vNiNorosStjs2ebj65x5Kf33pMC",
  "key7": "2Jqrpx8aYHHAfnmWfSeUgMJeL8UMBtjKnRmcv1t9rM5FAVHts1c7NoziPq49bRpzCuAgncwgnGsR8kHJ5C6Uy2Li",
  "key8": "7NfQWocJaRfgi7i1DY7emHM13fVCPdkfu2MRodhGN3cyFAYpjkakGJYjwQEfhqD2KNi5zN6495ec4KNVkwSBnx4",
  "key9": "2wv2WrZoiod2gazPvMNB6U4APpe9yQCUVBW1dWbyV6Hhn5GsWE5FVBd7FRTacy35hZDRVrbEGMCYF2Fgq6EE559R",
  "key10": "2Eno9vfgjWHyarKky2S9zc9dWnoJ5CN8E8YcstZQpder1JwM6sjCzusFv7FpPphK4rhdvCPkzMbH9AjRhFKUHziD",
  "key11": "GXErT6wUQUEkoneFd7broV4nb3ERH4JuK3pxbjHNKCvuRcLuQNVC8a7aUWx5RM2ieXU9eJS2KUMg8aG8bY2yBuj",
  "key12": "24UinqdaracZeujuak2FSNFpe6n7vZKt8N7KBChKXcjZjet2anTA18TtWWH7o9qzsPcarqspFjCpUAWEcDVkXv4H",
  "key13": "yWMHzw22QNkoMqcp5dS6NTAzXygbZvETU6czowFWaSckdva3oeGqnFtn8sFdzMi2Vq3Rq9iQpqdyiyxqEF2wXhf",
  "key14": "3Jb7T2W2pksqnpky38bKsUmdXB3KVRoMwSRj4aDwGDeRRbuBDhRvhsUAxQURaowtovy5dYNansRSYbV39MHWSodZ",
  "key15": "5kFmgG1bP17TfwfQ7b8pw8LDM8ujRGPyKXivXADUuBngNpb8rdUKzjcgp2NAFVNHER9mp26LPJjhvyf7gg8ZWtyr",
  "key16": "4kcRwRtHJCYTAyJ9KUGe6DC1istjTCNp4dSchtaJFsT6iLmMi1D3SLFwyQ6Vd9RRDhVGQejxzFJnczCKEWQbZk1X",
  "key17": "5uJ7prQvWemd6N8DJ7BhhUNEAxkF1Y5dQhnyV58Gc3qN2fRQznhv6FfWuFzUEHJKf7YEgAFmg4MphmS1XykvgHko",
  "key18": "2Qro5WC6QxHo87YwEzFkSbgA4GHMRvjSqRDSV1wk9CuQLqxpAwYT5A7yhXwW7bqG4YYZCmXbqsZzuTGfvrLqXUcs",
  "key19": "36VzZyY83FausCB4phExaSbLa5dc6qwuqHgKd1n7uPu6iJrSVuXCDNYtac6yoxRZCTdaded6kpqQyhDXB6VV2QFD",
  "key20": "5kYaccrvkn5WFVfv2WAbYcQuuC2Fe3U87YSyQ35yBsXdsVdvAyABPxUG4in83MwBeEK1pfW2og4AaenrpWVg1Sto",
  "key21": "FxQrVtrmYSYsD5MPY21FWwfhLHS6RjjS6tjYCHCqrdXiVNwn4JX4tBj5fyd2zmeFyoWVnym4zabfugngTx85o62",
  "key22": "DhYQyESW9oksxUpKywaGFaNGG1rT4uEhk3aeur88GRthtQ5hFte5yPdqdhp1CDHQY6hGbuQZ16sAhZN9M36Hbrj",
  "key23": "aE2GcbKDSWQodiCbrNwBY7YBxGcY9xMcgJjRndxdWBjGqLh3XSh6MfLG2msz8gcJztXAYSFKWgmZ8AoDk9GrEYx",
  "key24": "4W6HJSGv3uVHrc9higQfkBKh1pPGLwvKraNnK3Pv5wuKSWRFkCPLdDyetHeY5U7fDKLqBT44G3sH9cAc8rPzZUTm",
  "key25": "4hWavncJDxK1BmvZhhQitHNqSt9efHBAvqf6EgPv5gyQTaga3TxLNaxDeRJZJD7XadPaeosS44adqkhZ4DLtYdF4",
  "key26": "5BaAdp5iVNGmJy7EKkJxpqP5MdaCrPuAVzxTrCGaBxNLv4n1V2x1QBGoJnSZF6mF4jyAUGDZuxd7L3KDjb4AojHo",
  "key27": "RxtD98KxbZTGK3TAuDWnzkudG6k5u7Kbu3StEui2pdQmm4v4TBaMi1EzfjWJibtrawQkGGiZM5kRNKqBud7rmMP",
  "key28": "633tsaKsbrrbbHfaWvCZRqcxKnMauwV9K5rE3vUkaQrXKSjKPv1CmoT1fbEuLJRuF2496TCYVVp816fr8oySmy6e",
  "key29": "55gZrWBkfCPVX4ZWeo9xEN9XMiWFfHav3njX5i3LRHV2j5RHzA31MCJcoVCtLREf4ASLiRUC3Cgta2NiMvJtkGrd",
  "key30": "42N8RV7RTxkyQKBN4FWbPrs3BUKzkgNWWD6L6XLFUw5HhUDNTdjQW74RghK69FM7KtbjD5nXzQkeEUrfSGi8jzV3",
  "key31": "3Zeq6vHyQVs4DqZotdTB6WLMxUsqnLRCw9jaUAYaVmyADMD4q5KduAgxdMVspNWbvGzfBsAxWmYhyCEU47Nijc8F",
  "key32": "AJ56sM61C3U731v1pEbF17ej8NGyXKNW3xWsxYcwj1keMQ32S5GjpvDALYhLJLKTZKZWvbHauifhCYjjoyX8nii",
  "key33": "3R6SKptYzkVUafuDtjKzsZJiacPkckknmuMkS6aJpJx5Lpm6HkYTu1wADRhRRhU4UNnTtFihdNU54mhvHr36ewNc",
  "key34": "65mvuncs86WgykZ86qPTXwdEp9gWu45fZJfZ5rQn5A1KcK8CdMkinBmAcKGS97DCaxsBGVBwSsGJvG5sWeL7zEcR",
  "key35": "niCnLskp7Yx7UwQ9SPs8YRPMCy5yoAswcZaHBjfsjJLmjsfU5Pyezf6CeEyFVAdRFVBaWLGrAZ75sg1RmWpWCXp",
  "key36": "HoUbynCrDJZU1ZKjK2wzKNko5TmRQdBQaC7Pa8DT2nuHdVKKFYobYTyB8uh8KhicyTeBhAA6RETmsUrwpzuW31A",
  "key37": "5gK2dkua8Mht8ECBsKoYacjZN5UWVRtNs2dfDjywx2FicjyR76xGCsCyEcgfCZFZwBUsa2X3xYpgD6FBYG7yAkna",
  "key38": "3T3qU5yzGj8iuWgEnWrqdFmE6dBjDizM2FqkJnybHNZb1EszSFim8HdsMGz7zhYo9LYmtRq6PuspovgwsWGWuoD2",
  "key39": "2bCYGdgKQSwGRgfjkeNr5d8xD6ugJyubD3Ver5gkw2WSkvoFB3k7sr1b289sLctLQQXUS5ULzFc6mQ7hYhC2yZvr",
  "key40": "4g1xjNL5qHJAKKwZTT36ZXELLFNfEPoWkddyqUBWrYJccMKMrki23oVavjdqFVFUvyPLnkBiBJRs8qQkft21QgGo",
  "key41": "2PaPucbuYT6EmbQ4ie7tjGT6EZ89UmU5i8SJDFoCN6VtuQgzbaCkZfZE1J598sLs9rFAdF5eqxm4Jt9bVHeAhTPW",
  "key42": "2c7oxWhsf5cxTakBskzMr6T58ZEJuL5uDCKgDA9wDur5u2WLchCFzY9fa9sBwuycDpth9Q96BTM1ynnvaATX5gNx",
  "key43": "onzi6vkvKr18VnksTZjwU6pBb6LRF5Ga8gk78TZkkicj398hnMcCyGYSL1A9Sx7ghV29t6Q663nognMDfrFHPq4",
  "key44": "4TJ8korGjb1PuVpheSs7kNDtQh7DCPPjBXrRDG42GnMsbG42M3rg3ejGrxMWtuw47WA8QbncJyrdcoRtbUSTE7LB",
  "key45": "3sYYMCqUfeKMhs8PFesK4ZQnhfDcFzwjj9rkkiYMagbSunyxRtnMwJSjLy1sUMoopuVYbcL4ygQ5Wzkmy6whWnQj",
  "key46": "5iMcmLvpCKibvxjWnxBogoKMJUQ5Q8n83thq1WKPMTfL9tNY6FsY4MAqHsJdsYHGzPFzds99Xhh4bKatzUQsxnQM",
  "key47": "5ugbcr1soo8a1bTNXnapW23RdXGPEZNrkAJeWMbCMNc97uS3DFWjXJQbPsD9ZMm6kdq7Zouyhjywdo7nRsDDRtLJ",
  "key48": "4GsYNkQkEr4QmNkESxmb8Ghjg354zbMR4daoX6zeSFqampE3dj2fh7wveHUy7nCh7GuXXz78ULUkCUkA6pCmDefr"
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
