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
    "121W1its8KqsBJ8ZUXHKcJk44zdF9w5cYfScqvnGx4PNEuuuMaZ5zuC9DEFkXmAcxPAToeKAwSiM8Ng31davje7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbeYiEXGUCvHqAxVzLcZVyb4E38BM8sHjPH4SivnjV7gNKrfvmuHeE1gGqv9ccAuq1uqqz3ajrkHxzyBQkB17PX",
  "key1": "5qvr1csy2VH7JfD8JpdSwzuXGdhmRYDEiUtcK68tRCpXF5p1SdAL8fyXSxTrN7oTig1ZtNMVN3aDJYqLNndfMcX9",
  "key2": "36uazfqkRaDkXV3fkbwTjHHXqqDD5sA4unciXLCt7vKYESE7Mz9SN6BUcmsTZuEsHQLnWeyjvkaYqKhkQJhB3FHr",
  "key3": "4tgcMS3uWF5nGomQmSkBAuHXQc9os2CrkabzSG1WCbHDf4GKXCYGWLSqRJxnmEsZt9oKj3NfwZbk6KnQ1SX3vtAD",
  "key4": "5eaHhhCtCqQRwFsyqPC4rYM5wLrupR6bT5jzL7Ceu6BY1AaDdSFNUBpyBghb1TL7fWEgCLJ4MXK5FHbQ9JqBjYDX",
  "key5": "26hEZmhQRXPnTCQMVM5S7Zd7C1KjKBTfxaP9dVCp6V8Ee3aDXtjdDBCsp7zdyG3YLG13qm4Wb29oMSshv4fhkaN9",
  "key6": "25Jw6JubuSMFCUX8SSPaqkUQMbEascaiaHA44z1MLjZvuHhGTYrarzvzsKPU3Kkn6pDMnaeQsJAZa49ns9QYpxDf",
  "key7": "LMm3gHAv5FbtsXtXgTdTi3b7ZiF5tQPWbi3zRfDbYK5i4H9zT8VLBgaXBKSoJRTLrnwgpc7Mr4cMzrdADtvSjMy",
  "key8": "26mHbuSBfdkRnvCT9PbNTwd6CfvXkeLTH6urFfzCY3x19BGVGGK7buuzoatgjx9mhVos51gRFh5sxVL9NqzAdBwY",
  "key9": "49BEkaVMt3LR26NMsJuKXSH7jKjDhUeZEj8KN5jrfaP3QtjcaqJPNJeMQe5uoAwNxR26X1zNZi71z6EzXhcqh7fw",
  "key10": "pqwUMpYhhJrbKrXeBAB93TWHd1r9iEHMHfHgEUieg5C38cdF27eJwRp1BbYkQp3tS31AfYdwj3L1tNFxvwQY5ga",
  "key11": "4JJPg6jUh6yBTGjdmsAkdtyft1LoV7s6ScnyoXoPcHgF6ViYskpDbWXmD1eqruP2kKdYDiZzbHmum3FtNvpeDjnQ",
  "key12": "51VAmZm16hdstDpKPHZv1WykZ2itt2SJDTvF5GUw5dbrkvoVpRHiVvysVCAvhqHikknAzpcZ71WFFptLVHXNuhA1",
  "key13": "3yPiZ2MmVNnjmzyLEsKVcnDM8hzwGAsNJVhJpZG8g6ut8fqpZkAkHohmJTHiY7yQahryMevTJTFM7NiQNjgeaov3",
  "key14": "2BoPqVzARGc39sv4bAWfu3qAjgs4YijB19wHyXByWSa8chmjKrTwdLjZAKuA9tVSkketMKM7tcg7je1BC3nkVp82",
  "key15": "3HfgtQFhrANyugnVFXSrcx4xQdXoP2vspWZ964GZei4m85kWGrVTg5p48RLLMqUZHE3Kx8L5Sta51heppqLaaFeS",
  "key16": "5VHhRiK8tTQqo8ae3NhFYG1UFNyXQGXbMwYEjjkc5mFAaHcdR1M16R42ZLZHE9YaD5MTwfo6NcQcUFjgiNBvMxd",
  "key17": "4ctY7JqMmqLR4ZvBt8r3jPZmas2bm2UcWbykGWjzCdFJ4GPgQWwVt8yn1nr4s48HgtzuAME8iKL6gtj7z5nfGuq7",
  "key18": "4Muvm2EfqpQzcSUJoKuVx9nVCc3j5t9nNEXj7Cqof1KfgodjTDf6UJMWwTDAH98yvnZEjs7eMnhkNWdBBNXUhCQr",
  "key19": "3xw8HcGZbxJdv8nttod9kJERNg2DUc4ZuPAYLEZ2DwCT84sxSMg6c1GMB3UnAJNhYmvRgeN9ZQkscfe1gzNHyAKL",
  "key20": "TgrG82aQa5JeML61JV2a5C1o6ebmPoecPu9vDhAk4yENzCUqKNUFh7Ydz2WGeNfMkQ4hs5MJQWeYT5GbcRD2skZ",
  "key21": "5Mzzz9eLJqKKCE51m25Lci12KinmprjwugPHNfkyYFy2iS7tLaEgg8kdTYjioByqCJUn3UqiBTZ24cVMq1gUui5G",
  "key22": "2MCjVvrx6jAbBJfMrJBX3GuPSHaKEkkAQapSSihGN7tSiRgZ46NDK3tfDPkRANC5zSoi1ugVNYGKUyBzsy3axvnT",
  "key23": "4G8p7Gvj4RgHsBKYeNzh77GwZLrNAz6fkeFzW5ZdhDa6oHX1kcHwMr11Kz5hGt2ov27ddwxqZvbd7DjtLhVXBBDC",
  "key24": "3iDHaQcdxbGAsi8AbcpuWPCxWrGUv94ks6wNjhUmBUcN9pYWfZvcuYmoRu8Z7CUJ89Rdvtw3aTLn131PR9BYuRYS",
  "key25": "4xv5z3o9vy2Dgy6VK3LheANNpGhaUDcYBg343CtLRoUzbieGM7A1JdipPKHbV8QsCFTzugPwCVUBwDzgoAVCtwcM",
  "key26": "FgSRGfqTFwWuis1MquN46eh3UxbpwsmDvkeuvbYXFJw4Jwxz1QWrn9DMpftHbAs6bYEa2pW4BzuMmfdhFhKCdrP",
  "key27": "4hDqYz5ZASCLf54FafJ3YeMgHMPcTjRMxjxFxDVsb4U9NvEHteGxmuxVRuNGe8aJAyMqpNHv6xz5EzAXbAircikh",
  "key28": "386ZW9MKYPJD3EqgHVbkZvBAXiWQX8iZmvYGTY8x82FMPgFmZkVRQoX7ZZkpgaTARKUQj4mdVqQ9u8Z5g96obSFW",
  "key29": "5ib6bxNajMev97S939o7SQuER9yfviJg1h6gcr93cA6Y76xNXaWbMCUFW5oQjBEhPmo5zFqA5mjP1dv5EZJftsV6",
  "key30": "SVHhNAjAkUEb6sSSHVygZnaz4Gn1fgw9Sm272dBZYEieZjd5rWMTzooMtZPSkNNGGSUNnn3Cx1Qzz7dxYtM9GVD",
  "key31": "4d3WzuiFFfizesjRDfYSTyX9EkiAzamHKajyY8LVvrHfNRQ593A6qBVYxUr1EnkgUqD6vxgNqdFybMHZki66uPBm",
  "key32": "4kgWLsw6bd9L872YJA8iT6zGMQkMAFBLRzsfz3QpaguCfwERm6KWNxCswktFAgWrcmYDteQfw8sCbWtqnZHJZTqZ",
  "key33": "zbdfzrAwLny7TnQKjiiUC3g9fZBmL2YF3LU5Y2ZYsP7a8N7nTL1T5xNLWiWyhcFWRxft91e7W6irVkXJtBDnBKs"
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
