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
    "3G9ghxzw6eN2z8ssxX9Q3yMuCgiD3KCmM2RebDq3SRE8N7Cu7ovRbBHpzCDZvzYKqcZUnDyGEwNtdojKZXYckhvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BD4YGJKHCgNGQFBrnFQymkHf5AVJZFqJDxiue9FXeEesb5G1fAKPfw61Mt4cUyfCNVMD1JBZgVh7kEVZWumVEMf",
  "key1": "3NFT9e7kvAEFpXjNrGDSQWwi6xY1oKH6kimKDdCtpEZRrMHLNvRY5itw6djeFVcEEigxnLxQHRNPpqCKH7RQe1Xz",
  "key2": "3CAnecVQWUcir6Hgom6GaGvLrJRM1kX6i66RgcAJLHUiH3TkoKKzKz2Qs3SJgotLYJydRFETrT7FR375EpMy8ZZ9",
  "key3": "2xz69Ji6QLzKXypAi3VZ7pZxxfDV5tDfVC36UBYdHQLaCCbKmps4AicNMSfVEFs64QFo4pwzvTdXHo3KtjaX4CjX",
  "key4": "NNf1VDxeUCpV9ATLaiwG2mybbGqBvjuxLtBGTTySmJF1NjDbACzoRwAyAfm7urTnt7QR2mfn18haSqfsZJdiiqj",
  "key5": "ubcZabVaCeMtCVvcrZ57c86SwePpNx7Yr1QQsXBpJoHYopaA1FbiYemTkfTp7cpZYLKNFZrwwwq45in8CQMDwPM",
  "key6": "tnw82kB2bMXjaE3mWDy5UeLqfC5Vf1xet66qAR1LMFjLbpENMXzSubNPdi4kiL6zPan99Uc3qUYDiiBE92h1dYG",
  "key7": "41Evhhd8ku6VPeUYAjQejcXoR4f1R8uzZDHZ5WdZ6KN1UJQFki1Sb8itR3RKJGgXXXHU3Z97dxQp4XZeaTztRLJ8",
  "key8": "4wFdtc59YVkWaRMFH6QkcSsTQb5WsbjVgFd7wBLrWPpQh5k7Nh7dbdmWLfLWBiuyC7yszuCtDWSL56a3u5RCnwdZ",
  "key9": "5fVjVFWBvu9E8She8ThAtMrhUY1cUK6YvCUmbVPhwbj65yZJqYG18QCdnJdaTtCadDsXDcSqzcMgRPY1WfoafZRp",
  "key10": "29JT1yNRs3ghWWMT6txnEVN51pDuKkTgw13wbgfJRkwwk1vPKErxkmY39K2dTjfLrU6zewNmJMd9jMH8Qt9oGGHT",
  "key11": "3KEBLSK886u1bcit34pwTVd6x8nnZRaF1qj6nxjfxfKHczukmvXUdEyKughNBBuLu7tqEsSLjdammtXTkSCM813b",
  "key12": "2ew8jguWLSrCiBaXBdwt9sTDCZf3Pf4TLuw9YBmhofxckHJLEoJbuDKDnmUM51hWtaMU2oEapyBPtgpjkcoUTH9b",
  "key13": "9JYuvoWTnbTEVTKQf73bZjRVnvwZHfDhDEGtwTngNcCZgoFJqBa5EUv4nrnNbMNBsg5yBuaHiGYEGhj5gry5HFp",
  "key14": "5wzt41696xzgDxLDqsrEYPuG3SnVQUmjsgE9qSxVq2quXHXaA73DdXSfd5VQcyn23D3zvAXzf7Ukcc7XqoBgUaas",
  "key15": "5hQBQW26G1rpoFKSyq6GybcpRFxoKmKmeL8LFx1Gm387dAUjTsZkMDYfY3hHL3csDeGi9GJkFjZhWi371x1nNXeG",
  "key16": "4rhiWTkyChoMCQrvU2VpTn7Hm34AmZY2V5m4PsWnrgv6QgGL1LA8KAL7a7EHTDoyVVbapfF35mWkNTpvtBLQmV1B",
  "key17": "ARPjha8QnUfWvgMjUQ5qQtxRSc2T9WkafuLwDm188G9afmCUSV4CUxxxnYHDTuNdAvG6pPvVQmDaqrHL69irUPf",
  "key18": "4t9bA39FTfzvN4F2ZTbNKZcKU2UgrMjU7eH56GLebD1GMd8AmdUhUJo9o1EtKvKmmoND88rnExoHCYoBYrJ96T2a",
  "key19": "2dELKJyTKAc4vUpWK1Du62WeziVonxK9exs55oik2x31nj771J3AMteh1TLkNTpEPaVEqdaAMcNcnPDyUBSHnc1x",
  "key20": "2Hcnn2GdccV5rsABsL1peW4LArXp7ZYCFLi8MZ1aToJDJgzMJ5Wi1twndDmR2fbhyFUv8zDVeo6sebq9JK46oRBK",
  "key21": "2tp5hoTzHyVLXkPQE95WHgV3z8TZtAo9wmd1nQ2GKRWS7NRYwzSv4Z7i4oTMwpKoVoFaPDK7ZfHm6QSiCkVCJ2mQ",
  "key22": "22zsc4iwoV1wiFj5PKfyWpw83kZRsitCpBFcppjJv5dsFuSo5hAkGuMcuNo27kzqzauA7d87MebTR4NsbLQ2uBnZ",
  "key23": "qjKHK4x4Jnrj38RLjACK1npFsTTWA8nKHE6v2xDKxUK2z6CAcu2dZCngJZee5xT8YyJvNJNaQnMVt9XsyqSRxz8",
  "key24": "4Wjv2AyNE9RLp78u7z1BmCV9eDLuR6gEzs3FrsKNdfKBypxbM3iuwRMXpY6TTmJbvQ6C7ywK76hPsrp9HgnSTD6V",
  "key25": "4ugy6zQaixaUAvGoSoJWtLjFWWsS6P3vghZdNUisqfGtQh6WA7Q6JobUaTH1WujigWTvJMYKS1CERzNc9fofUY76",
  "key26": "3wbPYFdrLjQZC77iJubnNiHmuZ3kQd1h5DnQ4Fg4DEJLisZtTAe4NxH9asJDmfzQ1keScBevLruQxZzawgKykHcM",
  "key27": "3CDMES4drjG7aZFzx5RA1RYnegd1jc5XSLBL2rDHkDh5mRvUaPLPsyzLpYVkoXEPxnhFctrswJG1WQJwk6Ge9ciH",
  "key28": "63fx4u8QKvurQUB7zsqSQQwD4wEbvoSmdvJSj6taAsFeuuoMK3FuBuwcgXWzN3sz9ddUq8EV9GP52omFHruSckbB",
  "key29": "5grcr6pzUhyPeoTgXC8KHTJxtxBmQGG9VYAkpjs9ck4QUCXShC2wb91RkxG9remwugPkbg8hKgmbpoSbPdtEeAbf",
  "key30": "2WntLPHD7DjF5gCjKK9UDvgWKQqqrSZMeAV3Hm46nwuCnUmf4jZaVTE2viA5obFPQEWLh9vaZ8fjyJUe2T8ks6fk",
  "key31": "4wGKYbBysdaXEqFif6tZF2ubZFYGeVjhRcthMHTehMQCJeivNB7Wc2h2UrtRfyj3ABeZJaPHroepoMcMzbbXZRZ6",
  "key32": "48FfpQAW82JJixQRm4j9BpcuiU9jKJDgkJMJxDkoGoDM3AgDpja7xmSeYJVY1i8ixWR5nJ7eG7H3K7sgAWGf6LNS",
  "key33": "2wFkVopbVQL6R7MV8hPFfbAhRC3nESgBnmhpQHiXfp9k5MTPQXLwxDQYqV9WxrNjcwkHQv9k3VCfFhDx6TjvByfS",
  "key34": "5oap4XNovFR7ZtU8NkpjmmEuBtPJsbRPjDhcEut16cbuuUojNNwje5WoKmWBzkViE2pGEYGSbPoHJrh6CAY6Q9jK",
  "key35": "2tciQBrYFaFMoBDtcLWZd3xp7qh7CiWkCc7bgYqkzq5Xy5ARpCbtrNKsm3XURTLDNi4tuS4L1TE1S55krFQ6vm5",
  "key36": "kX91dwphXATGUzSVfLfQ6BupSFaMkKNFhoJ5f1NkiGacSxVUsfNrVQvmxUU4gf9LmrTanM1LvmXPDQAX51ZJqPD",
  "key37": "25ZgwZCFbcTtk3nRVBfMMxmX8fwGcE3pKvcrWNgpFDwryBorLY2BuUAsWYg4DDM4f41esCN7JQvSmrmwYMiBzcDb",
  "key38": "21ryMmeoDctK7STGtReYfrsmw5KAiXrW2Fcfq9NJnY3s31xHAHxNvYKuWhZD9tfPtrsw1cvtKs5TMvr7u2HfLeL7",
  "key39": "gXppXLqtdtkfj2Kzwf32FzC9aMXVhh2smsCemqyhV63WRgH4bYBRTMfAKWBPKJELnyCt5jGCwXCSmRmf3ifkeit",
  "key40": "3ZTeXt8HGLTAZjK1E2qTtPNkbk9hfgixa79KpQ8mLL3cmaVpNoo824ffbfqn3j1iWnveuFo3QwDbWqNj8gPm13Fh",
  "key41": "38HdyEctr4HzjxgszEhnW6aKmNepxAHgT61w4Vyfr1so8sUfZmWi2VdFsv7K3a2drk7gmt3rtfrzdY5skHRwCgLQ",
  "key42": "4Hd3Vrvm9BmVAb5KyB9xChbNUC2KKrpLUV8uBa8hAnHgvTdxwiLLbmLjcgx686myVdje5ASN1fDEQTGzZGZnEerE",
  "key43": "2fGnzZMzDBYGuqGwpwjc1F3WnjAsUc5to12a1jwQKnYLuBBBrLkQMqppmx6ePis2QoByTCe13e87NxCGnayHFwhD"
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
