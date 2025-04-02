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
    "2W3npXSWgBdKpzApHkYyTyR7zBPTfjjXoLcjxmbPGLZ1wDHAea1BCEJ6qeFLtCWHGZSpTV6wHoR6S1Hik6qBKCEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuJp96wUFzHYne1TCt8dxJqomFcdmNo6qfLVYZcFtMNcxjgHvMMRtX713iC8iPE6CbkAprj2qNw4MmVKmQeu4xK",
  "key1": "4o7TTxWfnfyMvRSjw2ES4Hv7xfS9z1Z1tw1QaDRbYXJyxPSobXZ8GhB79sFuqx7miYKgkFEBRDiPC2JMHeQNurMm",
  "key2": "5ww2FuQZ4YZCzKwy6wht14wgwWqKdasRpBeT6JfgRQESUbaXfU3c5aUgHokLExQgmbB2ZSKYb8SD1cLhobCiBDwW",
  "key3": "4seKuSXyaJPBy6LKtXYLDiLZrwRMxmjvthdw4vEJCsMTYUir7V9NhofB4Auo8rirSdYEJGy3Ry5s2CJQbDKniDah",
  "key4": "5gPjqfKXZgZNe7JpimRBN6bVe2uCjWnWw2AhiiNNRWEYQEXzYn2q5zSGPTvyuhCMUmFxJfy6Xy4pgeHMVvSZP5tq",
  "key5": "54TRckUXdEENhcgw3rNcELbRz2ojUA9zHXUpLbYGoPhDBb46CuLGjQhGcuyvxmGLjToqRP6RBBHK7uhyyvzaVVVA",
  "key6": "kSottPqw4TL3yHqXcNKTZ6PBbJP77Y1ke8ouc6exFmKpaXLeuFKS3wsAxiYsLjdwYjEULQx8J5kEUToaiVzt3Qp",
  "key7": "2vdC9jtEZyDsps62Ma6eZR42TBzZkoACQQn4sgjtvYs7MEtq89ASq1NrfuteDsJJ1DT8DQUCLqGUUjZuQVShHzhh",
  "key8": "5PWyjdL8ELQHqyjXmTSDervrHridWGSbC166yzgpNcD4vjvsw86s2Qk2QfFGhdHEnv65o76TbWAkqMpnW5FHhCwZ",
  "key9": "4NJMiKeDVN8wByYaEckgVf5SH88ZgvZQsThqDF9h6uqmaEfzwbKvuezFtGcSoF3M1YDSCexbcJJAEEhdsbRyFAro",
  "key10": "65y9YdYpZb2wN42fm2LhtvMR4NtfJC6LEQdyacyVs5PSCNUoMAPYBVmWbVKt1qCsM85fGC2fc8evQfsivW7EUiUf",
  "key11": "2HJPXLyVAUnUbnJNCv2HdCjq8a77J69CZftnBHbjLyPw8Zs7yLZUaC9wKkgNnLrE4mJrvhL3scbwv1sJNtCf6x3Z",
  "key12": "5QhkbZkzr4dDMcaA6NxhtQkUaES8riwBUrZZi1UN9wNKNieTXttQdQeAK8cnmhGgwMhRkmmYWfrn6NgL8GroBevZ",
  "key13": "p8dea1NLn6rRdLeNQT3bLg4QtBEKpejMpbap8hJjXV6EFLFswEefzw38jFwAHtCjDdsx5egDiLTfHSCHceobmEJ",
  "key14": "4aeNv9uj6v3WbP2notm2cE7JTSEj42eFUJn5Zzk2Hia2YcLnxTxaSVZvgzcd9MHkS8uHAgosw1wL9kEYdvPdeNSA",
  "key15": "425H1yomNxWE8yoqeHkirzimJ4J2LQQ1Bos6igRPYERjFd17F6nQtvsh9VfuEmt6mWysQnDAUuCqc3mKDnzHo9r8",
  "key16": "49epwhAA1PwBunsj7am2NAGZHbFd8chX4c6QpMM7zWkfcWbpgf8RtFuSCtpKULL81GTswwcgWWPuAPHDs6Goj7tV",
  "key17": "2xZvpZQwNBqqSE2Xeq6jiFhr8ehAieZmyq2vJTbA9GsF64wtEvSUvzWWjhGJhtndAeR7zUqvxMb3mxkeYbxQhE2H",
  "key18": "4DdU7G2CUorb4RMSDFZDcezXKkMZfGr6WUF59RU2x7fktiKgwdDd7vT6WRqQbPYSqYrf3c77shiBoKgSYDCEb1cU",
  "key19": "sPnLvsbQe2mwXchz8wtvoUkm8DNxR29Um74x1BAr1rsEbPdqwNFCC49o7aCLEWdqioJe6Wa7o1geWe1s6yDTMr4",
  "key20": "4x4LPjz2qkVxyKrVWnDwB3yWvLu4wvqbAKoBKSr3wPBoCE9PrkPSNobJ4mrS2p9CiYD5E8vbin5v59m2fPqYeaar",
  "key21": "3hbLYvLcLaY8eSScw6c9X43rUAsPSorvUx9w6mVbqw3friyFhd1kcuT2VYH1AjGCK9LG7Ai4QWfW94uFir8bmHm7",
  "key22": "3v7QdaFCBFkwzVKZXiMv3cp3ShWyBT8KcTuLTjgMKUDGJhoiG2EgQE5RenGKdpBQWEP8RbSmg1fPD469TYdhfkHX",
  "key23": "2hQDfAzhZr5V7AqMtpkbkuMUKRShHfEsjwVvmrcaLdEnaJQfyknoWcqopadKCjsBDygKoWu6chv1b35GgDPMmeFq",
  "key24": "2q2SmFQp9Tcg4Bt1xR8r3Wtfe5JLhY6iBjJK2NLRJpc1BdUNEDsnDVRFJkxXMtVkPs99377HpnDd84X7rxRrHtDv",
  "key25": "4fFJzhK1a1HBCYR73FREcDCJYVeH6ThbbuVmJW4yUhr5t8uNLgyUqxdJKLKk5Q7wME8aoVkayKEP57koWNPKy5gQ",
  "key26": "2LY6xEd8L7NDMYzTHKC3UhS4c34nQ4n14urW47DN5peQKzqfx5Vm42Zb3tRbMmtXu2w4Hf7CKJ5B8t3S9zjEnVaB",
  "key27": "vJfKEPQQJbC9W89AuPStv79zHqthGBa3i1QnzKti7k3TF4F5FEs18xHmoVXjBW2k7XAkfe6WWAGZr99VTveC8SU",
  "key28": "4wyk1LQmSpEQFMoJRN6B6JLUamFsiJ89uG5tuBULgX8khP5tovq4XDfVXfcJhGvRPuDaaC4y7fXTbWzDE9WtCrRv",
  "key29": "xkqP9i5nTRMcdg42wgCjqWzrf1g7xe1dVxgAigZNkhidCZ2D91EXMK41Gfku22RzptybtPbTETzQi41xa8ZHfC4",
  "key30": "4gdPMUL42Q1SBhRAfnqD42qoUNDhom41Ycsj9TnPJbfcYp2apzwohn6ZWNeiqZu5NQE84JTqLXi6bMtiZcXh7eji"
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
