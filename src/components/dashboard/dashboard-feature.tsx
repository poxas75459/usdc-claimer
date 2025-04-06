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
    "5A74rW843nbGAdrg523T8wVGbQowHkdfxWSHybKs1xPj1W7wmAVpPEehVccjkPDkDLoAgHucsVq5iJJtFaYA8NYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ppB6fzxPv8UejzFkSHgwyYeReyXzHzf6H89TQwBau4FgjzyNx6Xuz6bLR1o5z3MRc6vU2btGMbzsbo7q823u2JN",
  "key1": "wzAYjXFbcsfBQ6BY2WWzdufXY86R1WT3YegcFr4LdSTsupsaEZNrQ5tTmC3idHpLoXww4qVPHBb1rivxWKHEKvK",
  "key2": "QpPLFsxFP6TAemUyH2mzVFuEHb728rCtkxkR835sokJ4qTRfrNGP1LXPHKGAdtpRfqDBnhwAdwkcg6h56Tj76pp",
  "key3": "798bftbXTgLd6vM7s2C2atc4xUtUtuFnn3AYFv4fwqQ6SPU4xnRfbeq6y2hwANCkiKG6sysAQQMAmjxxTdL4wWv",
  "key4": "35q2xAvdmLuybEyCogh5RNmWqchwMiQeiGySztyAc43EvxVmCMT3xxffSBgNmfHmv28gAt3f4wN1auy5VqFCDMqi",
  "key5": "3qu1ppDbm7B5KnxsiccyHzm1srGRjfaDcqzV9ZyDiWGF3pU3DLZjQ2zKFDVHaKuTTV7wV86hvc3LQ2ZDHMEkupCn",
  "key6": "2kzFyKnLEpVpnEGn94qzZSiigm6i7YGgNfMBYgRh9chnRrDwSNi1c5cyySX3rd3fWxUH7VoMjRsZ2xoRyco335RB",
  "key7": "3CgzUD3F3FmJaZYQcoYZXV8e64bnA71g1e9UXNtTYEUmxyG6J5A2ngeCaf3w9kxtZAox2LSVFAGvnVYGZYvPbnbV",
  "key8": "3XjMhVek9ew2mXijKPeRz2TAyoe11r5ipBFDBNL7CVAQ2U9VkDNmEbGqxmDzQXn1FGY6QM6NJoU5ZJ38FhzuJoDq",
  "key9": "64isEfVDShXNTYYLNCtnPPEF7HhKjcHbw9oH3qmquZJnGeFMiWjTYxEoquc5Hqs43qwNjjcxevW6USVxfRkY2Xcq",
  "key10": "2dgtVnsSaJHmRmPxdH3GMPvBJLvh1dvexCxX7Nv5XJVRJbCAtaZJE2AKsbij9mrivGsfGnUr6utcPXZb8wDYw4t",
  "key11": "4WiDqsa4SZmyRZwQsYkwtVh7eeoX3wQt1RavPvcwNA9u2UZ3k4zfJ3rxpDS3kTgkEjUoaHuDuQZfRPJaJdM6q9kg",
  "key12": "K1AWziKQ6gituB3santPDahEkZPxLcYz3BUuMDV7gRAxg6Vgwu5uZ8LfLV8U213QyCvXAZXyYCnP9aW6FExY7m3",
  "key13": "2sM53o9kbGwZrhbFFrzZQRiHAnHnNMWH6s6mMMPXKi1BzQP5USgW24gdAt1ty3mpNNYGy4fuPP3DAtShjiKpQZHP",
  "key14": "bgRt8RH7fTJ4HqagC4SLer2PgodF6M1FePqy1dnQL4aNxwj5niZ5YoQ3K43KoMxiJHDoowXKenzFbo536i9YtvR",
  "key15": "oFhMzB1a2BM5uu8CwSVE8d3upc3BVyArt3WjjJ1Cu5Gi1M1KQ8FtxJbsSWsgEEf9N9zkZpNKfX2UFarNbcf5Zop",
  "key16": "fAsr7Q8EJ8RdR7ApHVarLrFTdHR6n3c4n1HP9NCuqgSRDgGNyDgBeqteKNYDiW2QsnBi7K3yYhbYSqnYXLFRqtD",
  "key17": "3ZWCJwjjpNXG6PpBoPrecoPQXhxQfvjBRWCiVzY3KkVD4m5yMmAwo4ZdjTLcJsKWKnSjet21z2UNZYLj3fgryNdV",
  "key18": "BnR1kTp5C1VcZNWpyCdzcv1qJKL8Ac7uiq9PBMaXo9v2rNPNjx6nXUNdYjjm8gYqjh3XBVQGbhaqmP7A3snFYSf",
  "key19": "2eY91mmZiLm3T8C2xuReNV9BbTCrGgeVoQDChkoQnC3bJShugCnWCa3YXFv4WvYBvumWhMXXPLzAFd7DnA1TKYFk",
  "key20": "2w1QiWkJaTzBnGQNCDKhGbT5j2wdNBM9aF79ZfpfCF1srEKaL1yhm8pGpVYbcKrpnAetWHT7ZvHXDsobwk3qt4G6",
  "key21": "2Ri58ZfyUMYNfGnDXpK9gMWoCeWV7Sm7wyR4NBciomEjUu2PuiXR5pSEhNQccVS5XaKMgpjRobkCz23UxYmixwzE",
  "key22": "28GVauuobHm1Ux4uN8cXDVwB3oeVDYWVWvUuNghomuMKn9RJS4fHPtUJ6faqq5oubju2iJkTSYGcVKGQHQieHqwS",
  "key23": "sn9ka8jnK8N8HyhTWxmkGERNbikvCP7WzfhAGVdDY7nCSrjoH5X94EqknDHJLTsDYA14TF3W7r7UFaTAmpEhEbc",
  "key24": "3RJsPgiJjzRLoaFfXa4M1J2xXiCy1WSgBv8tTgWNRGq326VqBoxbiu5iog4Pzn9L6edZFbijhd2NGibdWJraAQ4U",
  "key25": "3WTD25sZcKJ1QVSKbDu1vH4eFzTqDMGp2DrTU9vqFn1yeXnkXan6MQradLewUC1oKtzkgcKwMSRnu8d4iYmVccrR",
  "key26": "u2fuDrRFio51FnanTLUQGm2DmBHzvuNB1ZDaAgAkrPhPWgv42kSpifVqLkZkjTUNF7nyqYN7AGYLjWGo4TATpP3",
  "key27": "5JvpfnyRPEHSXzQzfACVg3n1dpiwe7DsgUaCrjU5TcTHsbB16eQpxbE6yF5usrJ3EpVGQsbmtajcRqrHsLZPWhSc",
  "key28": "4zGdLGKka8fKV3TeFZoPPm63koS62CssroedVVS4kF3dMLaPXDfRK7TqsL5QRiLmZNvTxNdYZDr9dGgdzGUVj4SR",
  "key29": "5gDD9mD7L9CgGNvd351mimvhRh7sKpxrsdMSrF9ihoyfdYuUzDuDJta6YJpLT8gA4XNha9qjSfe6o8TvBSr2R9U4",
  "key30": "3MNpTCXJwJtMHMcboVwA6XLBjAT9srasXGpYwdMEr3u3kasprEjiX5zit4FWk5BR6McA28SiJ3jcjEX6j1bZw1rm",
  "key31": "2RKwReykjEBhf64cKVhMG498nNwnYtEyH722LCQndRQAiRh124B6MZ6UbHGhbm8rxeL9vvQMHNMKBAz923djYrJp",
  "key32": "6qvrnbcvvuadXavS3pG4Q3jeMWH5kAJFYZWWbRPvo15SdwABkDbHLQ84Wa2ygPK985VQcVNPbWHsshJpshpQE1N",
  "key33": "2ByZnRWAnCfgD3ydHZb5FDNTyt1vH1mdg9US5eXinNqQBEVVa2WY3YLb3ENuy1aNGfw7yMGFGRrVuGnojBpTFtm1",
  "key34": "2bk9Sjxda7fuNVu2nT9HG5BtCuTZFp48g7bBxGc9moFTrDpTeBLDoi3kUaysoET4WhYTNmG6fgXDmouLb6bkssoq",
  "key35": "28C28U9x79wAeVQV7AsQMAcrBgvTdJcXZTWfxgKgiraUE3npa3BseqDoZUiLbpqqVV6bC8gXh4YWVF4f1Y5NAKEK",
  "key36": "5MZeQwd3oasisG9MHxDpkxwg8H7wLJLX5J3piH76LMgY9vbofBPx2kU5htCR3xgJ93T4XE5nrZh6VHHaQJ2aNyZZ",
  "key37": "4g3W8JUFFcK2wGGmdX7kWVsQ23g6rEHcpyfZ3TUepUhwbyDYmXKrwBctho5dyiarMXru8VxM2p1zMuaQknbnHcaG",
  "key38": "3a1kyjwDhdCDmtoG4vUne3Xh6tAv5KeFccFdq5ki8JxKmHLPireUxmxyK1B13Wn6rhgcfguoP3drDDRG6udEbLuG",
  "key39": "2T28AcR29uPHDYtbpLwWWne7Jk95NVnCibDJrjc64gCRuF4giENuXBKZivYcd9RD7iCiaeUAP8JFnER6NZ2d6h5c",
  "key40": "3CHpPWJGEMec1uzoqaZqC2CFBSb9gpgTNuGqQrZW4PBBkEsSDQVkPhJmuurvefnq2qKqBNN835EGm25AcLB2LvEB",
  "key41": "4AsLUPcmjgQVhXQ23Y4vFfMtonV874bG2YiW5bw9QF4dgjHiGEwcuT5L9afGrzSezfvsvqgH36cp2xtbr5XaJjbY",
  "key42": "5nk4epdtKVxK8TBxLUwhR9R56JvDBb86ur1cKeYWBCnvwFsNy6z9XM4rPFzzvGWtbL6w1JihBvD51mwdpANVJnEH",
  "key43": "2evVdGe5d2sDkd3tth29NZq2Zaysoz8fovjxjZim521hBK93DATWE1LfVkHiQN9exGdqUWZmUUG2wPmhJHoJZhye",
  "key44": "25Ci1pj9tTrB7PameDiVY8am6xXPXMpHouwpf6omUqo5rviwyZRAvjxNAnbunRYei5idiJAqeWK1tagEKRSb4MNt",
  "key45": "ut5BAZrLB3vUEQ5nDKsE7cfk9eHvqBgGjnKoFa9XrNzhWmRgVtMpV44UHuCf9FZhMhcoNVikgKfE1q4jb6oFHmd",
  "key46": "5xmmoi2e7vjBEBwbvNqaqVZpv33G7j4T6sgRNUbkK9mkcubjRmuRjQGiAi6Gq5W7im1L2X8e1VmA6cucFS2FwPFh",
  "key47": "4LTY3fVTs5y6DrUYeDmGr8E8dfWmVr2ZNLMbVtPkpQdkTDjXz38i7H16BeHGhCrW2E4ms7RXyWdU4TNggTMC4Gw",
  "key48": "2dftUjy4PH936vn8n5c24SZ6mxS1jiMusEFaWExKiXvmaVMvfGbxXWzTupRYY69FcHcPRnpz5cMDEigViwjpjjXa"
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
