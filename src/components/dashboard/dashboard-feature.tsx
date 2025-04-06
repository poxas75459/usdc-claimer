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
    "dGd525xYubT37UwN6LuFySxiqkayCoE6vsMAjdUPgUPLNikqgp54JBR8mPsY72n5Xy1icVpq9YQD3UqpWrQv3BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MDpb654294sW8cS6XZsFtA9jh28iUWQXATZbbJerd9RhBTA3e76yEE9Jbp9cjQWCJwJyMBQzTUXZQ8TYbKEazj",
  "key1": "3kAT864d1XeSHpcriQGc5YtAhpfzbFA5CjQJhzPuQyt3yG2nEn6KasEHK9inHFv7MSpZZMwdSv4ZN6zPYE2tCVGY",
  "key2": "5XyyctqagNQBnXEMXxiaoG9khN5RRC4k9TnKakH4UMEVxRyc193Fn7QcZTNX8776LjuuaK2nxQ4b34ocAr4HtxU",
  "key3": "3ydZxwU89nropQGF9He3QRLn3TGxoGEWJfxfjkVq4fdgmLxYooJ8mXEgQptLu3LbkVoq9wkJ75j5mhwHwVUcJhkm",
  "key4": "4i6CGiVzb3vM4Dcx4QxoeFsBMYuh54ErhZyLuJhkwtBD1PkhrMkHXf41uuJeZDGjBXHaL4XYHw1nbYE1D6YceGJS",
  "key5": "2i69rqJJTJZbdVaAXjrewnP7umtXojDb4G3rTzBv1v5cvf7PZhaGHBdmvhPKSRLJA5FyT4izJckNNaDbEZqxLqQ7",
  "key6": "2FXdCg2Gnu1mU5JWC3Er38E6CuUorDWWPB1sW71ZeY6H96rhmKcBU1Nhm7Y9axPyAyB1PUNUSeAALk9t24zFTkvg",
  "key7": "52ySCc93P3Ah2vrKXrT4hKTuY5xiERkrRV9SXEcZ75CmNZN847Z5TZTs5ogthSbbd528hWTcdovtS4FoXynucWAc",
  "key8": "4j31a35Jmui8snkkquA8Cc6Aideqw7amxXHvRazLN5gQWFoFY1xdmGNp1NvfzfGh1JyHgjFdJsCqXq8eXr2vEr4J",
  "key9": "2qZoh6qPkv5pGCiTu6NLE6wgresQkQSCZbvzSxFgTEAAQPrGdXMUthdXWMFy5icxz36bEJkVMctFkrEsGXwmpyur",
  "key10": "4EoR7dxNH8LXE6ZXyHxdmgHnmubAw3geGSiZj9HKxX9uXWyzA69A4YGa3L5b6QJDxuN3KNez3xPJqePA8WfUQdo",
  "key11": "2Rcm4TYkxvskiauDGbVp5ECUvuPYAZNXuHj1JYSFdGk15fuPk89Y793S5s2nHReLfeiPh6WK7Egtn8ZKpT7Weg6y",
  "key12": "3K35YQcepzMumXXUs3jbmYBMmAtP4v4nkHCMnDyiNSASFauhXLu5EWZdPyvDC7xi5wF6KgfrKLyuNLGEjhzEgTqa",
  "key13": "4y8DNzDxkjpdUTrjaXWMmzJ7D4cV81rTQYUzEfaa5NnyHArUUSinZbzE73iwV7dEowireybYwry4WghzhkTAWwN1",
  "key14": "2ntdNo6YvRHpV7jUfND5mTBiR983YJG6NATamjNGpopgrfYX4ETtd88X3baHWy6y7cJrHrqzsmZdqtzLU9bbvzkf",
  "key15": "3cDUXEwgApwtwTKkxP1nxVsZ5jefNtuQ8qTBpxRH3HX4zqop3BAgpb36J8TsUHjyJKYexiGur72fqrEZVdBBLDgm",
  "key16": "2padCM9SBCZsL92vydx4vfsFPFynPwPyrkeTn2J8uoBpsithP1FF5HWC3pJ5AVn3cqhGed5A9oVYLovjDnvirrfu",
  "key17": "Lg8LfSNF2wyoDrrjnLSZGSZv2ywjG6kH9xKiBEa4cnp9ZBYbsVZXzbnTvatKKV7nkJRvyPrYU8zmRDMEc4kX1DL",
  "key18": "5pphLniiNPer4aDFCpkuVhxNHzcExr8ZG6W9txTgv6XExc4eSYnbnUt7RDcsTLVDTugUjFAHQ6vEAAR2z9z368gx",
  "key19": "65an7mn9wR3hC1qbUut7dYATCPjZw94bb5RXv3QaZj1PXgUHUji2wxK1JjxjMZRW3AnukfvJNfpULJ7UiRAp3UPK",
  "key20": "25Gk7Q8koTsVC19x4u7mfDxCeKTWv8roWxwjbR3ANqmpY3Na4nHZVwLRdaFSbNKgLwDExTgCXfAavXaCanbqvRnQ",
  "key21": "nhDBF3s7f5NWQ2K6vSvMineEyPR2N3G79jGf6UhSP2JGh7Ju8s8wNnZsS1Muvprxd81E7eTKuYBrAde7rQeK4Cr",
  "key22": "5EyXKxwTqY87fVGfzaBpaNv6F5XEE5QArhAsa3xw1XVvG56zfdJrKUBis3bvP9P629KuYoFoknyy7vDQzmJde3Tv",
  "key23": "3yeygDtYikkknriz2PXcnWAx5Tkmhd2KX471dGQJM59CGbxstiTZUVadYCFsG9GkBmiGPzbHtkXhctgGmGNDavtY",
  "key24": "wzYkj5oZosGuP4EwHdjiqp6Vw3qRiRTrH4p5aZRKYSfJWnWsVjHPQDsm58HRHBscRYimvkuYf8cUSGifeTBiEcR",
  "key25": "5jNa25rNeED8k2uKn4L1v2Qh6wxd8gAAyNaPWGuhXGT48hMZm6NfEQ3M9evGw5ghVsDKQcGSUbJPBPfyjPzEiZcs",
  "key26": "4RW8gayczNdoyDoBgLKAcNJWvPyg9iyEsbjp2ngQvgiZV8qxzzapoygfUeCi8BZoNasnLHfiTS1vFmt2V7zMnZzo",
  "key27": "WnLmgmq7TivaZphewNDEJeQYwfsC98KMFxxU7CamrYCqcUhZAHNcxBu92HwBAswHJavVsTkdHA1XxQzM4KpdJPq",
  "key28": "35gd1NQ19YK6TFFH3Rx2UHNgL3RUfPos4UbtaBE7dGUAbMpjGcYJkZzcxKCwHBeVAJKQ2ixU18ZjdW5AdPCjxGHY",
  "key29": "28XDdX9K4TizvPDbGW1mBCndcPWdKAXaUDW9kDrFaaNSp82HjXSQyfHUArxUhBbXuLkH1mLnBP22TQPduCNERFfV",
  "key30": "47sE8pKPn5E1Zsj2da31GDPjfDk6JcVkj9bRah6JBiAy3saxRJx95ykxQ4b4QgcFALU9KNFzsFvWr72YZCRVxAD3",
  "key31": "5DX9kY1hTBMLkrSXsm986kq6fG8HhWhR7ZsjhLXfeCA1n43TBVdrqtu6pZPPQEBDXTJH6UAvB6cBxo25TF34LMJi",
  "key32": "5fYjLDCW4XFKX8dG77kUagSbQnuhveUBL2axRYPiZHTea5pY2CWhMGresHKrLf4duU7vQnQopGUsmGWreQiksJh",
  "key33": "WyoCULKAd5KMA1BCtEJsCnoXpsEi3JrGLsqMFW6Wd1b7XXZFtFHfHNhAHvbxnadnhCsM47ttqyFW85GHQDmyBdn",
  "key34": "3RH9S6DD5QKMvv79ZSd9wGkpaRNvabf5zSG6JLMgvLxJRZdoLxW1WEbYyLhGRukDttbBNCYzQv23GUXd1HUVoUts",
  "key35": "29dbYEoMhHuHbwuMyLzuktA2tSg7gPtscHYmTbJzNRmgUQoR2JVBp7buU6Tc3NLm27RBkNswTquPVoJBD9nd1rCU",
  "key36": "2vNPuhg8FWJLmsE3sUsxMkQqMADhMAKPfHFi87hjbt4MfvcrCaWjo9VpAkrRd8yKELXmj4RMHXotNRbsRR2xyQ2t",
  "key37": "5dJZHyvpzHi2Qiwd7d8YRppY4HuJK3c1ptPGgmN3sN7BwWjXKw2FsD3LvYy1C6p25YCQijoXTAg9LaxrSX5uPG7q",
  "key38": "3Lp8b8pfFKnprf9RdXv2ZbFdXWN6UkWYzTofv2NR5HHrsdxaXwerqqCWv1Nnzw8MeFF25hDyh4cTZar3rG5YP4Ht"
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
