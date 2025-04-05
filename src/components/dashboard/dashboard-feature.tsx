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
    "2bDPsrZwTkzkYe54jCkENthovMBCbLGcNWquTtGBpVjz88LN5mLa5vDZvboJvw4mCtBrttdQ1J55yQ9fNzs247V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBoLUh3BwSe9iVPECxuEVsUeG66S2Vo4SYzSj21Cp9jgeQipr1JuJihx7zkj8iAxQywXkgizToyZfKgvDv91VYh",
  "key1": "2mg2uUKc4hENBAzTQLW2dxo6WWdLzwLyWmNnMHkZVAm8SiDvxyY8gyCPkMVVu8G37vuHxHEMGTggM2usKkzV1JND",
  "key2": "214NAHv7eXaShVPWq3KTAi52XmBPA6hgw4fw2M8PQJQwxvEYTuos8fVZmr9JHF22FDzZYFCRSnv9uLnEB8HABdnW",
  "key3": "4zyeey4kMHbcbQadXiBi3HucB2HAozUYD1885H3BJ3C38KKbSGEGNMi6JivKD6kNXJwDrfkm53MTMsDB9Wse99gC",
  "key4": "5NSZe3fkRbBLcj6pmkTi5R3r5WGVKDRFEw6zhX2MFBYefKvJUJ9XHNEFX9Dpz7iVYKFCPpLvaqkWuWfSk73hkxF6",
  "key5": "4cS65Xcd65DoWhDxm5HV8R5CJzSohyAH6megWdbn1oXieFaY8BFWsAQGbxdmGRJPomeSQgqBEg6h2YVWCARKfEec",
  "key6": "tNTqLGzyc1qU4aD9XHPaisVuK92B1jvdohgZCkj45EAqsEaBsKiwnSQ2RbdqWxVmZupaRDVXPmFJpMLFokVHr3x",
  "key7": "5odUoBNGrRrburgX4VbyHFTsCxAeZLQJLQbYL9aBHdfZt3PcaUnkYCXoyv4g8A3U78xJgz8wY9WNoaEeivxbxxfp",
  "key8": "4MT6bkQJykzcTd43zJXdPVi2SVscjJvX2ojkr6kmuftK33JENAmLHT9SC3GBGNp6vqTAQQaboEwuEigtShyw9R3h",
  "key9": "5NJZCtEcM1jQRdXCecsALrK1NTou2ocD7XkG11u9xDWAVC9vrFqN6XzAqqj4LoctRhFh1g7585kdxAaB2XdeKdX3",
  "key10": "4JnSCpQZx9xqATvmEy7b1FFKm2ma7jNw1LCF38MZipS7L6UDZRh5CCJ6rnpwLTjQcCCauL2eoVwkHZc14JykNnS5",
  "key11": "2WG7LSyCR3DvsYXuAUVLze3LE4otjCj3kc8dAoCqiNsQ2EdDwNASnBj7MQJfHv99zW5nhKvVrgDoXtiEwKk3EZnE",
  "key12": "ojY2n3MKKzgywgkJzLmB7Fzw1qSJbpA4PYoe9zHwWvgbkHzxcuY99pQayqLzaVZodmqW36dqskGoYiCwMhZrHnK",
  "key13": "3Vapc6bQmTBADyjkMr2DEJejVvAhJ7AmfB4vsajNeHWgT3NhHzffCBfSNtDVcKNrMfezfqQ7TE5ArkS3aeHgqmCX",
  "key14": "5T7bT9hhiTtRqVWXJBvrb8J9UmMMuf55r9b5Y3bvbvJ2RsdTa3XuoZeSTsEjh5cdrKUwZczRH74tzHJcQfDK1Kx6",
  "key15": "dnihgpfpaKh4695YgUcGcWBPgt49r6U9ByGQRsMAQXqH5gohr7KGwJp2wBjPGfpXH11do8k1Mg7vas9hQFrcERC",
  "key16": "4aocp4ArkLiyQNNsge6eWDrRXGSKD6eS548z9r3ez4vy85xh1e4tzZJiBZwVYwbyd3ioed6B9bpPuh7F9kQU3cJ2",
  "key17": "4UdePzCGZY4PTisb7SATRXvUDDuZQqkBnpb4n9zaoZeYb5Dnupgb3DD5Y6hBAYjRXUhxMaqs53PYuu72YdJ2uGa5",
  "key18": "4iCtUZW2E4wPfH1w38et8Mfpba6GjTK6AkZ2Rdd1gd6i6BRKKeYPsPCUBntRyRdb65jLc2ruyRGDNr4kqnJs9NxV",
  "key19": "3A8zQHw6Dx6ks5Jp6FVHeuEZMEN8JLp9YK9Nz1FZf8ff5WHWoLsu1JDsrL2Vy5PJfY3SGVGwt5AUsWng1jSFFoaR",
  "key20": "4eUwuHxtT2T6XuPU3HUumJibiWNdQVd1U88uw1Mxf4Yf2Jj9kX5jXAnYrj4UFYedz5SPXhtaVkqpduNAXufx5zCA",
  "key21": "4KWy2eYMWLH4uRKyqXp7CeFdRQ5gYv8ZzbfEfvWHBc6XNn3jVBDNZrhPjFhtQZ9fAkPGssED33J2RTUrQexiTePZ",
  "key22": "2rNFB16R6hzCpz73WYHsABiJNjkj3rK6fWXdaCvnGXZBhcxjW9uRz1wwsDFkFZSFcimbbrkdt3ZVZrvsAq9FDjz6",
  "key23": "39cz7fRCCzwvWMvcx1sTA2BCAd5mFRvj69osFEaAdnje8d4GBsNhWJvgYetb9eoCucnLPkUswSe5FQkZMz6L6egk",
  "key24": "Qh2kgQmu5jRt5i8epSLtuRmt7MAgRV6q2Ncms2TiajAnFcpKEdEP6tsbP1phjJTu7BnMwG938j2AyMrLmGFgSKT",
  "key25": "h1NQ7gf7RJ4oTdzHwSjZSsFasqdgMocHASssGckoV4rs1ndc1PgdgVzRcGxWLR68EEbQ3FdVE7WWK74mg1fPcPt",
  "key26": "uD8Eq1ijuTh5QebUPkgYycQ5QK3vRHqe9eGZB4YqLojT7s1zUghaktEn8TN4rptFktxr2xh9eJVjKi15kNacp3c",
  "key27": "KPrbRKs1SqB5UaEoSkuB8B2hfGLRmhybxRXJ7NYP1GmCamjAyztWYJGJKFUbZCStGzsCnf5KE3uYCcDA8gXGWRW",
  "key28": "4nLr9RQQvPiRZEG1SiB6McVUtHR7PtcGmW1PGK2m1qH8TdxhTeoxN6G93E1vwVYybBhQ5qJnBYT8QxwBbgiKM7V8",
  "key29": "5dv87DqKBwS3adTiUQjaMqmxBACrdA9dpuUnY615Jqofv3hwe8qv9RXzxwBrKhE734cwN3CAF6kLFpACLzjWQDqA",
  "key30": "5R85tmjiykttnkri1wG9364wKLotjU57yW1tLbZvRRwqjR5AgVdPiQEb6NC7oDEJ64bXyncgQp3hV69FtRMqbejz",
  "key31": "2tvUGpJaUHLHJEhXSZfLWxU2K2jPHQzWQeZ5cvgiC9FrmKywQBaac7q6LikTH2AW5xUEzknj6bQ6vQg3kQHPdnnk",
  "key32": "2widfpJACwFWQWhvoXv2mBzFQMkG9DoitQav1D4BJt9YLxoXwF71BaWppZBXZ3sriS1yuENtRbpQfCmZSK6Vjtj",
  "key33": "3yge4vGGtTMqnF1E9ngzNbQeoaeShJgQRkTDSMufk9JcJUkET4s72B9bveKiiszxBj5QXVnnUEM3sAiyvhm6mgJ4",
  "key34": "5vnRmCeCNsimB2631PqcuiVMBFjCca8nP5dPHHP47EaBeCK1SBVjqYnjQ2wJW6DRXKb1VDodBfefx24bcJtfg5aV",
  "key35": "x6RTpoDreSf4iMnuAjk4SpbJrBWuXSek3XdYWJ6pS286f1MiYtMvY3Kdx8rDCQvnhzuzN9JaSQ4w6gimTVk1run",
  "key36": "4N5Cg8jwfjDj2L9gZvZhK9CymRxLje69moMhdo1MKG9iPzzTk9jBbF5xDgzhMcnECQeKzsPT7up6eLkijT65SyVE",
  "key37": "2va9Joat624krdttb7pr4xy6FcXjA8DP88b4oqaFLSp76xurD18g1N1nK5jXEc7uWeCUjcgmXrS21sQiRvbdzC7v"
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
