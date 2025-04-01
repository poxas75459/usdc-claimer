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
    "2xD1obZKx1fWdGAe6qKC7t3KcvZdxtxwfeDcnA1rMMJDHuZUen1GzfyZZYkyJtvAztYFZzZzMWZJJrDnULcVMuBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293Wjm5iVcMaRyAfJtEWthFvBeKMj1xjmWWRKuSgsi2NrLsy51vwnotAvRpzToXDJSCmXsfEUKB5rpGEUgSaAAg3",
  "key1": "2YRMVDNNujNh2rS6Y5V7fAHKvBkHz2HhAPEoYszi8mh61ytTbLK6L9YsNsdVD5Sm8ikS67yN7yCvkMSaumjX567j",
  "key2": "3Lk1EkjZv8N1WbNedTH7Brt3Dfe82eH4Vo6KuMpQhQiWwmRxm1tgDDhxb79HLr1QXFAAMEzHpSciR38W6R8MR4G9",
  "key3": "2ptJgGwaX33LxKwyx83ZMzZL9eBuZ7zJiAQ7D38wniyznQogGKK6c4yjTSRC2wz3xxLT5BeoFGk9SnCSu9uqZwbV",
  "key4": "3kzq9ELoAnGHeuY8KZiPcBSjYkQYx8PRBSGp9JfBPQkL1LdvN2pmr64qSzU8o45srYXzqXcgbgmkkFjjp2CNQETj",
  "key5": "4H1L2X7dmYV979oRCwfk7HH4dz9HyMKy1AtNVBawGG8TbnPPRvescngpgpKZuDqpiw2quGrgQRGEEaarsFx2D1WX",
  "key6": "2iLMAt7p7juWnGKoQJGcH36em7He4hNzY7ctBP3RP9gYpvWq46UDsdeJGFjBC6h8Q34hHKDPFDGJVuqHBaqZyUJG",
  "key7": "3cubqxQP11AfsVSiTmsbJUnNy8y2RgNiTwxFbERxYHgvvoPKiCQsP6J3PzwcDkXHuBUKTcrTKST7YUu1d8BdqJgS",
  "key8": "2Tr6igPUkXvZaEfToQpWs2SxKyaFDdJaMmUKRmMihdiQhYpbkYDF8YQ5Huufp8CQNTNxNGg6gx8X6PnYEV8n1SC7",
  "key9": "236FgXR7PCEkstszLXXnNfn79j8JgvugFJsuxhCFBko6t8Lk7MPSXWDgSWgV96aAef1Ab2BSr5uKAgqhw65CA54z",
  "key10": "2cQwennSK9sFddWeM7MW5S9U18T5yw79TNhaEYYXf1ppr9PsXEri4CU6sdAWMa84a8UQxX1mQU62w8Sfk33RNHsr",
  "key11": "35BA7MpqEjUVCxPcvTXHS3Ey2cAhdLxcX8EcJXUx3vLwPKDEgptVcTEWxap2dWMAFaajv4NoV1oBuszbU2qiqSoo",
  "key12": "3iorPKd1TyfhKFAxeotyoxr6WtUA8W3Dm7Kn1YT29jJH64uG6Y7RkywcLEXzP4wpUCdQNtfuaKg3nJii2vQ9Frts",
  "key13": "73sB7FkS7whLd7xsypV7Wd45YyF9ecfY4yeuLRUrEJcKmHd8rKhAjfxpX4mE8RPpeiYkKxEwFq3WGeNwqJeXstf",
  "key14": "3UNkXYeBYfZ7aKFEXcndT5eVEDyJLxfb9HsKQ2w48modvrzGnMpWn2nGSEEGZ8raHjsQergnWrC5qw59EdFWyMGH",
  "key15": "3Yc3bH2WiqEx3s3jeikRkhwPw8Zh9zaSEeinHMe4iqaXNeLGChpTz8cgQrTiEEcKLwUado7vHVamVPPoJ9Kby3a1",
  "key16": "65fq8YGqmkFFMCqGxig2mKkEFQwpcAkMGYoXLSVXTpdjBtpVYe7N6CRe4NDp8g5GCVsTYDpwbGRrStZ4agos3Xis",
  "key17": "2Gq6vBj6gWesf6ep32u4d21kdbGu7ZaYJK34yyx3fgeiWAQSGUbfVHMeY5seseTx6J8Gfya6v1AsWzUxwwnZVcVZ",
  "key18": "2S3GhEbYPGttvD2vFb9XFF59irAtkpsZEs6NmqP4wmj9YRNEsbJzuRU1w5opMRWg643KnbPkfvvx8Vp4bC8zUXkb",
  "key19": "3mPRs27aDBG9g1EcqCgzB2XbJgvbFxaXyPFhTgoit5G9r3CBFj2iw82NfZkeY6nMbiMR1o9QZ5nWQLZoQE8yjrYw",
  "key20": "46vakP4FzARTNN9U1HDyWzAS4My5Y277AW8XU1EJkXVmKERofuT6jH8QPWwzfPrt2uyBnbHh1Puwpw9yZAZGgph6",
  "key21": "5NaSGbFwWMVvrhSx38PAjJ1CtQVK7EjjZkvaXRC1tmQcjNbv7LJ4AYJgRHEDTZJPZD6kfNv9KxoRrsAQdrruZKxP",
  "key22": "47FxAx5zvzBPHeDLSRqJqv1eQ3MATGseLKb3XXq1UJVvpda1YpNdyvspf4ztT7cMtLdKQ9XFeZoe7FbRqv79ARBt",
  "key23": "2WnSdtk1q8UsbFmHUj6KvsGopWnvM5PfZWh6Axu796Y7DAKgoMLLg4pwcQYcYo9W8t1LvCcUw5wEfCSb8KPTcG23",
  "key24": "2k1TWBKLKFzGjMeMgfcVjxqcFBbzEjsduyHdvT8uKtygtu7GcuuRoA6qweJDAkB6FpmCdSdLBebDnHqWHtT1fHDp",
  "key25": "2nMfAkMLCTDoFL4qqFvQWAWauqt7VSgn6ZisUJUdKtbshznC1NMSaKQAmDqPGBQTBYTrDYCoM8wonebTkadwQMrg",
  "key26": "ZX35jMnsk9oPTGisE4Jn4mkQeiqNwEbtNyn8zH923KuBmeBVBEuBDJGv8m53789RvAnVZwGC6D3pyVmR78FcgYF",
  "key27": "LQXV5yBnJvLHcH7eFhdNfiyMv4hx73obHZr6faVUZ2FvEZYB5sEKNAzg8XrgT1xRAxCA6miAiN9R9UhWFFDSjyx",
  "key28": "YouKvmWiaS9KQqYMfBGnW71KguT6WUxxvXc1fJqQG8cXwBJYR7LKikRnFyvBTWc3Jkh1EDaPxvgEtcoSJAcTCDu",
  "key29": "2iP6Td8aAJDKztwN2jyMvhRRrC2rpSpPGsFkVU79hdeNF3qpdQJdCJK5Dr9ChYmze3wYSd6r4M7oxAt9ewaMG8bK",
  "key30": "Ne6UJcDAGHP9rzVuWQeMPvQ9i9ebmSr8MP5K7xaEPsF5pVFvT1BgGHg9yseD3sKoaoW8gfF36PCjqrN3YSTmtZN",
  "key31": "4k9mcXyE836x72fb55KcnGfyNLBxsUP9Nv1nfKSKq7u3kr3NDtVXURR2SWcUmW5BN7afCn2U94J1PwThr847yixi",
  "key32": "5Y7u8YT6Dssx96jHKePCVqJPymsHDjhGxyz1VqEwaQZEHKFJmzbxUcJAcPcSeDdCHRqoRPDRKXeNCdHSMdaZYE2C",
  "key33": "bdUsmbG4dhPUVrF2KSZim46q2yD6sgBBdwHByEepqBf8Ck7bnqfuH8jYCYzsd1bEvoNYWBdR2z48eRjZ6VJ187C",
  "key34": "2zPHiqnEBPBPVQHcihuE5AsDgUv4HoTxF4htNhubGzdsj8FFF2AJeT5S8nkdQJcs9axV6ku3Ht1b59fSHHbrbPUd",
  "key35": "39rjBevUCeoeJ8krTTY3a4LZVd5szCFUCT17WQxEZuiqCWu6JbNu99EAYmGqmjbykBbULTkHXzAL3oPaKzJs7ELz",
  "key36": "57cQPs41tuGcu6qNxbFL4xgvYNAnC91Z2xoqzNRSPyw8kqDqT86FWbs3VEQgdX4LzNZQFdM8rstahjLoCKRRSTkW"
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
