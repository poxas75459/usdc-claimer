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
    "7knKVJ3sHnfjRGoQDdjR8VGVsVXFzLFHR2DPgsN6rt67K7bku9k48StYHhJyrBytsZj1Uod8SNQapqpRQJg4nWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uz8AE5Gmd5ZFWv5MYXkRE4L3Hmpq6XZM75zYUEqF5uenegxmUd6Jz6iWympYThnttKuabiMKkjaNXAhPDesNAkx",
  "key1": "3M7V1fWJcfxXE7eX8KE4nA3og72a6wP5puGByydh6fLrhtvuyb3iqChBijauXEE66NSB8XvDj3E4bYz93PcqFvoB",
  "key2": "2pNSZ6YPWn7imqjzyva7QFCahaADzaU96GxoaMqU8mqm76mzH6aiu3NpUFuTdpzVq3RCWJDLrKFFxMidn3bfmWr4",
  "key3": "66qpmxywhZzUmCqSFQhLMjXtDKCtPD6jD1mZ75MBhvTYUNhqpR5nyN7L8keGjd59sx4QCSVtjvFwj1yw2MLWEa3u",
  "key4": "HLQnMRbowsZBRHZd7AxMfEseMYKnQJF7QcXJsiJahG9QasrtH5bDCxfMJtZWppCmCNdPnnPPPL18BkoTXQTSr4c",
  "key5": "5N6oGqnPhBiCXJvfsqqecNxVHCjTHYjvLau946mVBCpdZWbT7AMNWRBpp9c8BzLYbXsHkFbP3JfgJjU7CcKgCF5k",
  "key6": "bd1dnMpci4qR2Uu4wGpMZoUnGZsr2rWg9jhwGePquJ4TVF9Y1k9ae9qhhr4Ux7JRZuJCSYdAKnZBj5cQby1Xub5",
  "key7": "ZKj7aRHokCkVoM6fN4Eu7ibcVRqWZPLGahK2P8x48cxVL6j5jjcKg6GDn2BPUXRgT5YBBJyXFhmiz4VDM24g45Y",
  "key8": "5zmz4egTkhhWecrreTPoAptTnvB5q4LkNXFtVYrb9nut5MAinoSVYbuTWBo6pbxXgrxKgSTMiptL2fr6Vk3j2Vjz",
  "key9": "3QFfp3JmQG6fmknucqFYYjS3h5R83zhGZqx3dSUjd9WX2jSycGLi1Kw2aCx8NnvXKRztcWfdavMsQWFfg9Ek1MHa",
  "key10": "kTKNSPj1PNMsDpqPUuh7s84FptGyzswmGT2X53RTKvyddZ5cRUUjcjYqjm617jxf72Eoo4VHfmgSaphekcqVDBr",
  "key11": "3gv8KMbBfRq1o5J4MAcMMH9tjqfnQ4xWAkGnUNpQf4TvqspMvVKuZwZcdS2VkMbALouJhy87U53wgKoyErEmYNC5",
  "key12": "4hk8JxJRgG5CKhgmSY7ACtgakPsWRfcf5qqFx53w6uPLdvWGGX34EkX994zW9pqfxfAfDBN7f457T5mRurYKpcCM",
  "key13": "2VxwLGHsRoQg8BUepcoaDPpnsFqzTkXZTWkCbnH6mBKgukejn3pB2ifUY33BY9nLB12otU8h9nBhzpsQLkdQX1FU",
  "key14": "345ZwuiY6Qe7SVuhcUkkewMqLWmfx1hSD7QYjVk7dJyFav9N4pkByf9FjsyXkCCmytsjfk64thad8dHqEQ1iahVS",
  "key15": "4HsAYcFzc8XvPkp9dfiB1L7FcrQSKWF2enzkqJ5LwU56Syyu5BY5gudfx8sntfRrT7EGcDm6SnQVzcNCHpc5vLXe",
  "key16": "46djkRi4X3GsBtgYQyUamPRDGN2nXepQeS7cgMj4AokDdYGNAGEBgzJnD4CyAYgMZyfkcHVUPzSi7R8Q8SXLwWAK",
  "key17": "5TwZrVMbJUJpMw8Lesjyo59vaSEN4kyzrFes8FC5fU96y8jESRVUVBG8jCc1xhVccSSMNfU4kGzeW6swQDgKTXUM",
  "key18": "sxpJQNQaGfsuMei8XaL2qzZyGa8TpJTHrFSofhNaHKpTn93SzS9xSroqyRHtUSPxRfxoUEd8B9dKEg8VpWWDWLm",
  "key19": "rnBkYJKuUHDsCMCpCcTXeFohBqbXfGNFiLF1XCZhZ9jXNMU6NC5N2yMnuyQci4bmagUcUEqbwnhACd96gaZnvzi",
  "key20": "39hbKoDCZk63DL8GQRRBJGVfUSxAAodjx82VV8jKckz4HzVJ1K5L12bpC39yrXPv24vgNmXUKvnoMwXBT6ijtRqM",
  "key21": "4k67vkDRUzrnBC4xjcRkKhAB8yYdfKeHVYLkYiXsMLXnwsAx6237rc1ZGPCfLBtGvkvksZAsUcgxJZDP6qzVcghg",
  "key22": "678USiwx7kd45Zdb4UueDhcTMebfif8RQFpwTNKxAa5ft2A9K5TuZwDVfFaFFsLmJS7CD5tFzK9MxH1BCzEtoKCy",
  "key23": "3U9LwtXpQbmE8kWQK5EXZXmu3es5RE7xD3Jy2czmxdtPqiA7Y43ZMmffsAk8c7sZegGnrmTAcTEDZCzaD4eQnxwK",
  "key24": "2ghcWGoZYVcwo4tuRg2sRk6diKdYt3QPYooPKRDumB3N5wm1tKLZ4eU4qs4Zn6PqSoAXmWGLQZKqEK9VRBsJZZxN",
  "key25": "3N4xzXasiLn6NdtHFmUrKY8gv4oUnAdHnmyq8xb2QjKFU9parRbmxHZyBWdCqfG6s21gwaVUGBA3f1S24N1YJJjy",
  "key26": "42AXfkxjSKWuahgVfg71wSypJFEK43Trz8EiNbkzAQtKH8DN8uuFNRkovpWEv4SKkoUhh27bYsTcPE91po4kjREp",
  "key27": "3K6zj3wMuHaWJK7FAF2TZaaXmc82JoUw1m7ZX7GoLB4a95doBaeAuWPpxC4wPzL6SDjE2eCKTNU1KK56SSVBDsKP",
  "key28": "35Ey5mUjSo9JwTCvT8hhUJrA3DPDnBSSHDZbEYxBi8EVKmAV8N5kjz6fkL4CfiMgbYFLnewwNP5wxrgNVnabnXgS",
  "key29": "2urQkmjWrsRZhYBXKxAuAazRLyE1ks6UA7r15aghswktKBLKkY1HGwYDPzrU9BqWriV6uWvRmcN2fY7Q8UscVstW",
  "key30": "2kFeg3g9TovHH52um6ieMx6joKZtuJZCrqytMoby6bKgiK4JDch83xDiYTt17gGyeDDapC1CWNB155qKTjzKSWNL",
  "key31": "3f1hEY3sHv3w5nugbxgNHVRYXm67nmPW2kKB7u8Lg8ps3etQxyoXs3qXuEJpVnVp4VFTUK4TxsFGbdqk6UTrnnkr",
  "key32": "61gtP1k3QC9SKW9M22gxrj2n7QNS9QCcvdc3vvnVQmPXXffwcNHjL1o8Kkn9zBtL7qXkfhYGKB3jwsddCN8xsPv5",
  "key33": "48czUjQBtUSfJu8PkEohDaN6daMpPMbUusSsxpZaYN2f5ufwk7iiVKg4ttSB2X2GKL6WTptpopAtABRxiwSsV7tM",
  "key34": "41oLBwPiQ8PuHPGytCotK5MS9TR3snpvTM5m76ocEHFqj2opf5VK66Yo9UgVSanRvpjNVv4zRHT3pdbxJJNmSrca",
  "key35": "8aiZcxPuPk5myBRtm23vwRB3zLacHUpHFoMcY9Qe4npFnCnpWvc1PTKdMqGdpJdmyTBTjVNzzuceweDc3ogTHew",
  "key36": "3Rd1qQDwY3ThUxJqXu2P4EyDUbWeFdUcUFCgndKcVHk2LwJVp4Hf351RNDHfdKA2GJtQ71gkYbiNhCkSwbzQF99z",
  "key37": "2GrwTNVMNe7fUTSKUgZUNPY33k7mcgaXKyEj8ZsaDxi9XpbsY71gpC9DVaZNhH4kosscksPC1aLBoYgphJ9UyaCz",
  "key38": "4pc7KgnGF3AqpWdG8KVCBNWn9FEiYjvgXD4YSr4DxtifvnLmTPUe28XtfKabSLzAj31Fp4AGsCniFCgksppEuP8i",
  "key39": "4uPBADz5Yi8uNS9ctfAKWdB6KcdJntjsQ6RrHyV711AhzMNoyM2nRiP2eBXZeRbqr5WWduhuAqqdLh21SFhbqTJW",
  "key40": "2XhGah6gNzB2GQBjWzT26mG64ppJpCcud3uTyvbEYfANYJjuddD8iAN3Sgy4JNHjhF6UgAAaUpy5xosNADDnqRSk",
  "key41": "etfRSsuNKJTVmr6yu8tgQd9oU8yFwf9529HgGE6EWCqYNApoxgVExabFJdaDBeYcr7JmwrQp3NGnrVfskQf8XEi",
  "key42": "qdy9gKQhLfJZ6PpM7ysLXsATyb9nywggWQy5TpZJFBB9moAJVK5eipXFSms1tCFYDrSwRUTfMmK2gGcSLwaFNCx",
  "key43": "4v6tSZdGDCaBaR7tYhLwLnmANTM8K4UMCgkR1xd2zHtMCYmKWMVjQ47gcLZk8h9sFjWHazTpDdsLXjJAZT8Ppx6F",
  "key44": "vv85FufgiXmTHpjXki7w5nDkqvBLTpyJ7XzgYQpffJDkiWhDfVDNESjAPM1CnUG72a1NtZwUZcpN1AMMoR6XzjE",
  "key45": "4UNMyQePW8LRHYNe564q8VBj9bV68HNqC6cYCUiCQrJjz1qnfoqoLBxpF6LDnSjxGMkL6X5rnLfoaq3zPcgPS4qf",
  "key46": "2ToDfoendRdAEpb7Y8W9sFbdwNevLpc2TqQJkkNCoonFS4VZhRQm2nfifXABAU97ddEyq11pmgBPskSLb2LZdzzk"
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
