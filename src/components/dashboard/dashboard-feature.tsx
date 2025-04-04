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
    "4jTB1exRHVEDMGVm2Wdr6rnLZnqAi8Ftrj5fZ6HutgUf7yQ1roPUs1yCr3vEZq6uwsrw14JnbJwjASJZ3e41bvzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbjT4PyF17X5Ea8cbGfmojERqTJPd2sTfnmZ1pWoH6Zzx7rwvFpKc9ebN7gCwrUTRwmVuJK7xSp8c6hmWD5ZD5P",
  "key1": "5QSSbQajXnST5E4CiRcxBH95fE2P7Bh9GFk9gJCib8ptywQoqeTtw5vyYDMn7XT2zBxRw8zSzgv9Co49sLHZGejp",
  "key2": "5Q5mdDERyjj2dwtHyU87GMgNRW46xLk6gGiUh6AjnkQ7gpuPrig4d5tnDtGD5CzXdLEBeWzEt8iMaPYcchvJ8gby",
  "key3": "33n5WRXRTxWuUC9twwMSgur7iWJfyUQyq3fajHvt8RGF8fkEBJqqyDKazv8LMaAifsiUqhDPcrNaEDgKMG5KUMfw",
  "key4": "kutWJN8oSGMrKh5nMeX1MDHqq8vfr7CrQem5eLpMD5dJX7u1DH1fpDzUEoVmCcpNDPD5U7qtuGUbRbFCRa8bbEm",
  "key5": "2C7TNhDH7GTuFP7VNnbULkAMoZCDr1X8t7fmm7VwNLNCTxcZVtu9v6Jni395CKGQg9qyaYB4ouPTWmpPHS1bSD61",
  "key6": "5wipLvRYrcruzNLZ6EEnou6jw8uWpuSnT8NWz9hRGtXsYFkhgHXi1PrMFVccxrpYe3TK9DD8fqY2zuW2qJjRbqPe",
  "key7": "2EDPmvzsCU8LQbaYQb1QsktuBhed2vcf2iWL5M8hquXm53KjkeGZ1R7F2aUTTqiR4GdLZdkXnsrUfbfacjEu8KMk",
  "key8": "4qLZ3wJxzbsMhRBPqS5SvX7JQz96bxLSqhWsobermhmE7hyfvPupb4eQGHcXty1mTuZjSPzy8tHo91W6QghavCxA",
  "key9": "4mA6ASHwg2Qt5jfGgDuSpDcbTPgSP7BUnf3zQHDMxuoSRE3HRbw9U7d7TJGXBvge1MFgkrcpdp1yxqxj2Pcgq295",
  "key10": "57gDeAWU6SMZzv5SWwQoezMyTGZJNe8sm2oubqN5oD96x7phQVbyaPXtXMU1e7P6mpmujJwA8pZgQTkEvXdwJPFC",
  "key11": "3dbYdowtGWBD3Q4f2cMcMN79DSu4veLLiuyMs3VXU2E9fYH6hXLupvGpFQc31k5EixqcvvVJ7wgdg8TKGMfryEcY",
  "key12": "5DCkkgXRzxcb2ovBXyfxQeSbSLR1biQjNhoYhThgLkkyrACfZfw8yia767FhpS5vUo5qAQ3Xv9ijtFSyHfLhWugD",
  "key13": "5CpqJi7E4jUHnc6qzwqnfR7KARKBrNy2xQe18ygjC55jhXbNTFE7UDGbtdePvZo4SGPdMV2PicATFRG8v7mJTPXt",
  "key14": "5p2z7yGmRQ9P7pNJnTGMr3aa8YuzpLxYiQZzgrBG2n2taHxDhpaynTLjx8eDB7AYEibFWtXB4sScpzezVEHjgeq8",
  "key15": "2fMw484TG9dXjhKJXthovHNWC3CQuACVdRkWAKTJBm3wuMXmtS8m8ceKURXeNAmz33H9es8ohhc7E9xaMgvdSFTQ",
  "key16": "2uHYTNfPeYy6NogjvEpUth6F8vzK7TKRUuJ4NbRN7hzFtiaJQZBU14safqDGKKyZg16EAYjd8uvVdFjtKnXmbBXr",
  "key17": "gCFRAKqsLJcgjfJv9NYGBJY91Keak513z3GbeJrL7QyGUA9CcTa6Y7ed2PwPuju13Q7X8cgBGoMah79v839UapS",
  "key18": "3hKdSCukHnSz7S2UdRkm1BHD4Kda7t2WcyjErSBUtiQza4ciQrkDGbh6ndYmofLbuiMghtzBQKoU6rsDoVwnFKkS",
  "key19": "FaVquLHmumsTTWLBNRr6GVtWoMCB1NMr29dxwYtP3QKnB4bGH2hZWoMnYA9QABPyn3Trgw57H7TMaPQBA6VJsgt",
  "key20": "4p4bLDC5Xh1YWaYRrTKJcxBbxQhS9JzKp2RG3KGi1P23n23PW4vBzydXuThswy4z9nmP7BfHq1mMrEaXM1uA7UZT",
  "key21": "3e9XuCACfmE4GzngcYG7TuRiJQh4JpbHsVPEgBZ7CdCgHNepuAWikUNNVT8gqxw2QUPCpJTUQJxGUJYySjxkAmaK",
  "key22": "4zcK9971KWMkYicfNHsbcuwMjhPQijVuoRVrC5caYxvCC4CJdX6V4nrQvHWPipkuJvFqytStHh5sejj2ui1k3AgA",
  "key23": "4RVUmDEYAAd8CK7gHrt7RGexsP5K2toxaS4qHxpFmHP6YrHs3XNeApT28FmnnYLhvngcB5NmVjrxibehMeA97Nb7",
  "key24": "T4h7onH9hLsd4PWzvqtLidDwPsykiLon44LWECfoP453tg42FR2eREfWhxHwGbza4Zeojnv4rph7DgHrdDJfWv9",
  "key25": "5ZeXAJCtVwUGNzkkhdr5eNCfScaRMKouFtj9yCDsfSSyFAyYQNTnR54X6n3yGGKzyvYuHXSrTudDCs2Xjy1c98zU",
  "key26": "4Y6tdKxX2pK9epzBrQkBNrvkxak8qysozgfGTCopQGW1ZzRkGy7i1kjXhEMxbZzrmE8ATj5WaAh4pF7nLFW9QomV",
  "key27": "3ECb3ptagLAZYdggjHzL4ThaEdZoxSroUSQx2FoJWje7PQwCHkYjFg1r12FLXgMq2YxV6yiYMbfSAqszm1R4fU4T",
  "key28": "dCV1PruWGhMfMipCdGtoTSVLgyPDfgm5PLsD9bcbVyyuJKtvEQHjyaG5PPsSmWtmsDEoKvNiG8tCrRFdZhZUtAm",
  "key29": "osAeg26GhjYq5L91LALXSLK7GezYqbEFSEu392SybrgcvdT3S2fUYkyn3bGb4N6K8KxyybxeCxd89ERvyEvJKeP",
  "key30": "3t1KZVKCzmgr5tKU3tct3nPezfhUHEUSiJ2znvRXtg45y9FWNuUU1SMys52Lp61PSydFf6Xv4fV5omaPqzJfxjzN",
  "key31": "2sg9UqGHPyuLXju2aqbEx3WFDUu9rSVPZAGRtoo4k7hQ4hDuVHtZJNsiw3Z6GbD2R7uuDePjxANqSbNYH6VmKkhs",
  "key32": "2Jmt27AcNzRvxcjzJRauWFEa5B53WMSFGkKQwDraMxEBTQ4Fa8n49STMPsbRUY4MnuJiaeJzc3BikwiJBJtwujQg",
  "key33": "jK9ffvdWKZhcey7fDwSXy4ES5fyEhwEwMHojpeykCNmAk3VynipUCWpbmFr5639bGsU973WmwsYJPNb5Noi4cT6",
  "key34": "5eNpiHNtmuNEDe9Fe4rrYHoFcwrLXLv2ZAZcTtzoGqr5UVtAk4hnnAp9sHLzntRdrpJ5iN8PKj7bU2eZezrwzMoa",
  "key35": "5eAsbFrkikECjdLxoYGf9hH5SRw2HpZ4QTCSSg6kYFrhYZ9bjTyuYhs2wksoPyAJVpghZHhSFDNdpypCsM4JntVp",
  "key36": "GQGySx3rRaFJpwt39Lvo4B3pCQJRgymLZRUrr6aCGkvrNEehwNqjLq4NhGb7LZG5QVm5JPL2kyCxxcVtD59GeYT",
  "key37": "3p3SPqFMz18VvVxZcf5EAWmTy3qBobWBeUSQDV3662NMQky4aTcs4hW6MY9SqDWyZsdEEgPKUNPUcETkErf8STEq",
  "key38": "2Zh8Bt1tg6ikKNxj8joxqTzbUGc4GCBLvbxB4NphS4Aogx4Dd2NX1WXSkG2Jfoqo9HoAVcEbjq32KDqJiLZ24eCt"
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
