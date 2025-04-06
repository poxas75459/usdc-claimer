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
    "53tW1stY5DdcrdKYT8ax9JQZ3R4YXLppviEKfjSmBGuG5QdgU58fWna9jZpVSJ1cSrWmsNBVJ3761uxPUjqVz5zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u38aSXG5rBTcxjJveZS9ocZP5iG4kXSsHxYAZkTKxXGp3zX3p6g6oh2T5guN36Cj5mvKrmh9i9B87Sq2RgPSPkz",
  "key1": "562qexozCsZT5upojZBxzDFvXgofYxgrDvSLJsgYnwocufcEjpRih4rFAQSCMDArgQXxAFqwauNGGE1MXMHyL6fu",
  "key2": "4YHYSAZH8TFiApN6QVf9kJQ9KvsumRmX4dajZ78PXBUNA6VvB179kX26KjXak9ncydQZiy9q8jsNwq8oCxin6TXT",
  "key3": "2L6AwmsAeyXE1P1HsYT787gJHoD9X3knGP32CTSMR3d929etW82ZxZM5hPCudH2WZvH3GZrpvEToxkEFztuQ4K3b",
  "key4": "2mr1EtKCgBcr3irh94KwKN6k88faBddWtGQcoNHVB5rw6TjC9EVkEfAgup5gsA5A7vNcHFfJw7k5mnWMw7NE4VYd",
  "key5": "269xsVmFUKWRykMm3kWiYFQ69zr1jZrwXBewf56T6mA8nPneZ5AmBTVDnWg8dxqBNHBWAhejxYWtGX7NCHhfjS38",
  "key6": "2A6B1DRFVM8MrSxkEU5UwozyxhQnssmgiygH8LHQ8me4nss1xwcXwsHrNNUx3aATPRnNMENnyVn5sK12MxyjEv9A",
  "key7": "2fm3HqMhHwtUeRkhmLZ2VMYqGoKkEJpNzaFS9due94hrzVAxRfGb4kvr3XB7iFP2Km5LmKX6M7GrDtjrzcehZU4k",
  "key8": "3KRenZ2rmkfGbVxJMy4JFWtxeBfgTG8mPS97Kj7HXBEFW5Rd86EEJnTS9PywbWicLZJuzTPXRmA5AMKvLJd8hqak",
  "key9": "3QeWHdGxKBFEXvwGG5He3kL99hoKAebR9SV666TELuFnNhX2iBEKS2G7iLuKNGJa7gJaw9URdK5jYoYKmrZ1QYBE",
  "key10": "3h3sQiSam8jhCwX8SqbgS43LLuJUghzqm6ut2gfKNdG6bvymRNQkjrQ3tprH7vhPf8T7UAgetKvhStcJNY5ayuuZ",
  "key11": "2EvvhdpgHuBWTsKb6kvkKuwpvEZ3zpUfjZXrkpu1wZYdF91Kkg5xpb1AdUmi1EEGyegprCh3329Lj7Ao5uLHbimh",
  "key12": "2YBH8J2uMWWAsurbzCAiTydK4gDeQ7au5pDri3YKhX87mxMq3VnNKrJaQi5mfchNJk3FrMzSLVYT9kHN4DtuXM6v",
  "key13": "5tBhQfym2BTtz8C9iSgqDCoBZR6nDhvtFkh9frFUB5mdn4Amb1fZ4hiD8DRz7LJGuFhrCJNnezohXntLm991nbdq",
  "key14": "TxRuzpahJskCu6E3EGFoN4zaVznUp3hYX5bYVvcDn92Gw4yd764cRjcghjPyhaMW5wrGbgSBfrgWJeqZVVw85AM",
  "key15": "2R7bJQRTe7B2G2y28M8543RvD5z9qmYC8xonjXkzgD7GXojdZLdiTQepBYdJGfh5dT5iezsG4fFDUr4nnuy7ucAm",
  "key16": "44A82EQzoeoCFoCGJVcqMNShDW7RSC3i7SFyJ1NXVANbUQ36sL5qPZaJCHw3raVqeJjTquhHxDmL7H8H3PwAq7WL",
  "key17": "2FonHteRe99iMKuNhXnwhAFTHHgzrPAMvXfh6J11PbdH8ci1pLsN9ayFYyvWobFq3Qz9qAc2nRCCjMwd3zt3dE3T",
  "key18": "5ZyNdEtHSjEQdqahdLxdi8jeQAJ4qSyvJSesa4h7KWFfWDDFJ7ct3obLjN3gegsTc2LKZPFPzsRgb8UnEZhgM8ss",
  "key19": "5Vvb28axP8rNUgtxLi1SM2dpsSNV3eHySB8fwf4J6vhF2bcaa6e458R1LSXLtA9MsazNeQBn2Es8Vq7pQU6Gtjc4",
  "key20": "3cm21perCTSh64yxJFS1TmpHMtgmBxVWDKdqyDeooRUQ1AjvxbZSLe5z1h74T6YaTWPWuHDV45Fva3TCzSmDGgJq",
  "key21": "Hi6z6qNGEjujSkfnxakaob3AyKM3GwXGbnud3NV8SrR8ot3c4axjpG4c7tPeSFhmKgboHG8aUGB6ohvSjHxC2Xu",
  "key22": "27GAQpZxvc5XM5TjFNknrESPPtRX7qPL9bA32XVzc8PR3jxBAjkWJBFVH6RAaniiRniWgZUkiEpScEZt4TKHmZeq",
  "key23": "3UbTbGj2cMvjZ7EUQKFNjdCqbbsqKk5fT6fA9au4wDGpJE39A8yNY4UDNJdqhm5TsaLmp29KRrBVavmLRuqRe8BS",
  "key24": "VdA5rhwCUM192LDNP4DqUySiAyvQwSrAGEEUStzhBY9A586CAWCGg9n6NrBgyzDTT1jEjLAmbfDSCwX9NSVUrKJ",
  "key25": "2UhPFmLpyJRtdGvqzwD3oy8D8oVAksLBYhSorsC5w8atca4AxgRvEbqbYxfo7mGm9RcnUfEBtnUbS9fYr3rZvFeH",
  "key26": "5ExRZTM4nZWgymFNwayEHX7Y9wYnoKud841kSX3c6LXaRDJcHhdXYqJKkwbT32aWTJzGtsZY2ajwzmNSnE6yJ9RD",
  "key27": "4Tocupa38R7WS72z2qLZXff2BVHj2u9QwV72enUVzn9i1w3r9HmPmtiNErJtNxHmSCs5hdUjwxQhUY6SSdtkux99",
  "key28": "5iVB56heP1GHcGjpiSDig71qVhLo64id11LYfLys5nq15GM93EgZQSdu9NDneigbcnECzXfjzXKT926XvqW95Kkw",
  "key29": "3KnzNZtAiLGPUWiiEQtgF4RhUVftpwtFMMuWG5yBWxJyErLK9JGoFkQLw7GivUAS4V1F5sHGts3d3Gn25C4HeN6q",
  "key30": "2SURwoMKD1r7zMNSWUWihfmv8b4fcBBYuZPninoVMeWPopXCWZsB9MFSWcbanCmChQRdjoEQY7MZT7LWy6gBRgNq",
  "key31": "3kV4EYPUnRYiswxdXrhiCKZMxTPT3KbFMLyyXrkjvNeDsTJbCojbREitYWuamiqz8DcXG4QiVAyBF7R1yC4rbAT6",
  "key32": "3z5ruE1UJzd2T2ijHCJdLCuSSpECAYyqyDGGLYFSpC1km1qN5W916c7EYLKZQZT4MudNKPV7146FNoFwHBNJwGE4",
  "key33": "5d4XYz1PvtBLiF3p1hBrXZNa4x6XM6Rpn5bVEXFrRAEGBtRPsLF7N3gPLqAUGFRZiKVCVZwGxKqtjRfrMDbgvgAJ",
  "key34": "5vjkkda1VX8aWuqkYoV1Jf9ykBPZ9xta95VXUiYGptZQVAmNQxa5DpxZBnDct4hJxpGQsXRAs9u5vGrSEt8CfDLs",
  "key35": "WWwwuqa5sdmVVea8dmFpFjCKqnjMSY1EiZygjyFVQdqUyHN7KiW5wstzUYU7y11ePme5sKkrACJxgQnvu7FHjqC"
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
