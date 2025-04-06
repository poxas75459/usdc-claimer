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
    "5Bhmhpqe1rk97hHBYziozyuPwCaZbXUtccDZSPuNAD3N6fcmAMNw3qEMAgRxaX7FSS2c9Dgi8EjFahrUUuFQweW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTHKQ9ST5efkUZTjAdVzXGmsE55CBa8jrcGH53npGZZGboxWya2UBT2K2mYQnArAsBzFpuBe7TV9nu88ttUPQdj",
  "key1": "39gbyxwtA6ijLumh2P3fZCJY4AXyemJwX2ppSMmvvMb6DvGcEvW1PdjP7KRySxziedMMKfnGWJbrAFdtTzvAM14h",
  "key2": "39Uj8eZ2iSC8oyHm5FyMzbRyy2Rn43BjhSyx3F2wAdzmfoYwG3uXYrBHeq2MErkvwyZnPJHyEwPBwdL6GF3dxSpc",
  "key3": "5HiDiXQR7GTUMh3LP8Du3kjCbmd4JHFiNfeCtLsz22FFJCxJsR3uPpnCZ1fmF41M9SyvzGjgscWtKA5nnLa6hSVa",
  "key4": "55J5jDFvLhbonM9nwgj5MEzQVZwvDdV5yFKs8GpbUZrXCoUjfMeBRJSC8uxydYMXGLhvBn2LvHjne7TAZ14Tkri6",
  "key5": "jb8khCi7H7HoXMheiATggwqYKSYyYMmYKCCE57N8VhiviXVdeb9Q7hsg1GM2i7ZQxVhDJsuAtq9qgb7S1Ck9JMk",
  "key6": "5hFpDsqptd9WSrfzjUnqEPQrz4vfWGQ1PZj4ReJdUYa18ri9421yQJvxLgqq25Sop3VnKSZCaL9wxSgAvigUnMoN",
  "key7": "4Hz1VMvye3zArqJpgGud8dYi2xTxsP2WufVthpj9JDXCEGXF5Gzwi6wAJNygrgZnx6FU7NZfq9n6TyQ174fGMXWU",
  "key8": "2CeYmYQvTx4W4UdFpQcDyRH9zYLGYt1h8Q7S6LWAPefai3mh35GynjLfSGnNFrEEHx1D6AF6Mb5UJKoY89Sf6YxX",
  "key9": "21xSBU2FWWdasqvB2vuQ9Wz2hn1mTeKSiKuoJD8M93vqjwHK5EwkXnxesFT4JQFSkqSQPEd8wP633EQJMYKouFjN",
  "key10": "2eJnYZ4WATF6v2Ud2zFJGbYkp8QvWRMUicpFCzTYkHYFR1bNniS5rhtoBrqzpj1YjzdYQxh5q96QoTZqb3o8BuzH",
  "key11": "xnGCQGQT5pH5AswsaLNiRH2bfSgsxAmRsoZm2Y1QJUPnXvcn2Tsa4egoAoXsXV4NEnHewYeXktxp2Ac6Cfw2mZJ",
  "key12": "R4ujjrQCa1eLtCXavCWvwLtFksFAdbFwRz4Vf9qkYe93guQnUbE7cn4WJj6dQowzzPM6ufdgLo3cWwrhtYedHT1",
  "key13": "5Fdr9DhUkCc3hE43DnBiHGQV4tJNGreiop4DpomWD2Nqo2bjVFk4JDgrLJqjumfTsaEkSo5xhF5D9AovDNLxMhpy",
  "key14": "64BdLfq8FXMihvN5naRToyuZWxBofwF3HofLwprbyZvhFfrsjXbtVDAJsRQ3QqKAwZspjXqZ9gwSyZW4rTBF8qTM",
  "key15": "kp8c8dimxpuC5F186vSNvnRnus4U7KBvUY4iQCqdqXSUjEeFXL3WMP7LFWoygSXq6HVNqcbyEzd7hjZMsBnsvQY",
  "key16": "3SEexhHvmcRmsXeqFhCc7tJd1163zcXbvhq3ULVHQS36hv4V1J6WvGFBVLkMsKjNyP7m5rbVSNmQP2ddH89K1WGd",
  "key17": "5n7YpdykheESBgiCWMMiw1r3bHCCQ5TuWWVuyEzpeLU38WBp9bbqaU5kRLqfgMkVaqaeomtZQg2MQUsLptsDJcTb",
  "key18": "5hvuLcvQUTmjbXStr1ELNCutvsVSRDpSWZRGdacGztX29JdKDkjEsDNHP6JwcamNrZToX2dHQs8umssqRKhZCoKb",
  "key19": "4zP1gqUho3mzEvzhSJGzvoPVEoDtuGTREX6gaZxqEd277DoG4oSvi1hjQW8gae11AGt5PgbbSPaiK9J7LbnJWRDw",
  "key20": "3utjzTvgM8FZWXe8Rczm8vKxs2jSypAvWqAXL1zYvKwtTE2sL1jr5RpGrY9A7DucPMErAUDDDHsc7vx7aSjMvGhS",
  "key21": "2bGw53Dj12e1osh9rppnjAxyaXYp1BKk8PKaCsmGHddoBAjfQkEJ99L35V164TDiv3Gfa91peK4zftw1buRp7yRX",
  "key22": "2bFdks5upbiqgysQVwEmEuyM8CGHL6DBVBGECU98GtDgKfxcZg3BqP9UhQobtewEUBgtjH9Qa6oNczv3XXWF84NQ",
  "key23": "2ZffHQEKaeE8JV56me32i5UDrGpcKogrpQfGdyfvgpzD9QrfpL5VDSU1DbLAN3ot2JHV2bPTdySTBQbyvijk6t6z",
  "key24": "67oQqz5q53SRywJDneHiFWzgkBKx5PSf3ezphAXjVmnnKyyqjmvet5BJUMejPqb6ZsRXW22BmrrEWgEwmNHdSJnd",
  "key25": "WiiYJztzVKtNDDTkidwAY1NPDKrV5d8FcLffzStXmDQoHymPM5EHDLGXM29F2i1zMYxq725eEFocsncyZgqQVTm",
  "key26": "5HTtFG5pT4rDVWAVmhvAL2GMutgam8U6C8P2dAuaBw4xAyXFQWdvh9WisTBe9vxNq9saD5oDjBkz8KH755sFd6mN",
  "key27": "2HjRgvuSG8X9vVHnqAfPUDHXep3A7MppDw8fScdmXWtyugQLX5G23bsNwwnzi9uzGBPAu4NpyFszpSCZVSZgXHzJ",
  "key28": "4KDKTbdvgMmcWZi3kVkw4hD9YzMCpYiAXAo6ka2niTNPNSGMUqb5spWzp581jCGG7oHULjhGS4cXxeQecDnAVpfe",
  "key29": "gA7XmVoLk8eJY5rb2uW7kjT27LeXj8XC1mL5oPZV9yERgNMS8VPXy3qbfhgcKGGdYyiTYRYdvRHKaYaBz9EYjem",
  "key30": "qLRS11NTvnFbPNwJ4zBPuz11deSptsNU9zZdTVdUPiWfmC8EMDZcE4PLW2rFBVAGKDTMubnPEuhMRMV1XtvYisd",
  "key31": "qRSqB944k9BDqNjh7V1qs9T6mSctGmiX5P3wgTvfLjSPNZFV5VTF3ZmvfWT1o4ZsMYDsCdsyu6uST7w5uuJBaHm",
  "key32": "29VjCJrfbB7KsCGBNQdS9sU2bP7sFe29chQToRhiQiUY9vLBdV291qZGJh2hgTXtaif13WLCP2CmRPGN1Tmo3pQL",
  "key33": "3ioiUXCrGegbxL6mpVkVDfdy7G6MP43cGLF4S6JApMDnURYwYvbpPcRhveSMSn5tDRAgqnEUWsBosjGfCG1SguM"
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
