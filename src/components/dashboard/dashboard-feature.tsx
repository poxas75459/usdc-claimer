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
    "4PxL3xEzRic3c1rKRfZCTPdJGaf2aQ3uJY9aEs3zaxivrmDuGLJGAbDdAM3ukoLanFr2L8WEzQL8QjpDkYxkc8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bj5Zh7gCaSMQR34D3QiuKeWmiyzs2isJYBQgmaFuLRFWqVJdnUmDUYCRnJ3wHY9KmFfJvvjwuE3YtvrApKpUUJ",
  "key1": "35BiZeX7CYnbSxGrEf3ESFGBj3TuBGeci4tBTvsYGL3ELJdunQvjgMxpKnAvtEUidBy8fkLePenaWd5qyUwcruV8",
  "key2": "5QvEwytqvwC7zuDocSGEqk6hqJNtjiMzzk7HvtMdaVRpEUe716EDuyjy1h2P5nyAhz7qmBKrhcAdp4o1DAJsCgvs",
  "key3": "4LGVsiPtyiNB2t62XSgCEPLkbnz3Xw1eW6AvVSdFXRHVoEBwpbJEfg4jUwPm71SMcq3GjNGZo6zAkcwZynsDNKmF",
  "key4": "35tWYJULJWMieTvjFrSYe4Yrzjo7T9TdoiBeuWbrWgRG5bSCu4KeAsPyHxFveHHQwTf47tm4A8GLMqPt1c18nsGR",
  "key5": "5PZ694ZZb8GME7scjZd9M1czo9nzkqKBL34mN1RGEsWTf7yp1X28UMHiA6JnVr3UaTi38SFBZ3efYTEta6UV4uuN",
  "key6": "4GgeQBxvhempbCygH8mBLuiPtPNfUEPvTSb6JMUR6wAocfk466P3dPoi1mQLK9TNMNdvz8R8gcLtjXnZsf513NZv",
  "key7": "55kCR4hCjQEKySbHyA3BKgVcWZ5HZzu3xUvtDxoKyeaD9dHv3wz5wapMEf1QexSQby2RkFaMc3QReQvLTbUCkSnU",
  "key8": "2o463msHjA1ZSmpLfi92Bd36TTkr75uXVMCyMCALdc17FLfqTwwG2FNZ8mAore1FwUKfp1c8hAn8K2yVPfMFWRXw",
  "key9": "3Y7zoTcKt56dK1E4ubNURThQtMBGhkLnhRMJGCtMiUpdN9rfp9XP4SnqqG5KLyNxDG3JFLGyaehybvVA8D3VsAL8",
  "key10": "5spkSVBDK3hGo7XGzpgQ37go6qh4Y6dtm8smZQTZh8kLZ3g7dCG6LGsZsmeGNyVXqPFudn246CWFern3he6CERyy",
  "key11": "4fzqNdLNqJTA1gCAtZqAE6QyKH7MxJ7B2QbbUpGFHK42c5DSh8CXssi2dELs7z9WS9avKNZfhbUZ6NMd8gXikL1C",
  "key12": "6Ux6mhfwdAweEzmKgYeZHGqPZyArW5wKYziE8keNn38Negdom6kv4byfxMafKbMNuhBtCLgTASpYkru9v2ewPcE",
  "key13": "3GJ8kQGTRmoH634GwVLMFHM45gu7yD3J6XzCpoBFAzERVSY7S8F8zm6VFSqCavfSHmuaTWcNAyhmio1baUhFfWtH",
  "key14": "4vyn2QbwwLWoExZjw6craEXpjTyqb6LgokJU9bnTJq7NaWDhuQcxbutjWqwSRXJGwC7xRQfZfxQkFoYxC6hjEAHL",
  "key15": "2EBRKyGiR867eyzrFb25aoT4CnxhYQ994t6DZ7PbCCeVn62sH1UMtKpUsvHzqyWiSroQYKX3tL65iwfpZt8buZsf",
  "key16": "3CVzxKKRQNNbPLvwKjLvW2AdC3RnfwfqTkpkFXE5L2PqqXBPGF7QwxC6rYxx9eR4jv89j8jizmjNcU3XFL93s83r",
  "key17": "3BDCt2ZxUFLRNnDrrzck8MQzsuxeo1X8nLLjqJGrc1aSzjZgjjKJeUfhoBRmLXSttoPuWDizPz77wzaCfmoBGwkm",
  "key18": "snL9q3sbkQHWVDD5SNcEt6kLaT36qCNjvbkqa7FxkvThswKuVzcsauLQoYwkkLHM9k2L1WtWK5XKXC5uM1k2hak",
  "key19": "2Hozij6wgg2eKxoW7gWrtkEh4NHxNTGZhCW4yZAs8WwXoj8oWdJCGYH61CByv6catkHpisEEqxxaAu3yVeWtSAUq",
  "key20": "2RtyMbWn3LJeeTQw8jyWcaW7ezaNsqkBSu7P6k8wgm5p3Kqs2R7K27jVKK1kBnrnk5Qhwc8veQ5cVmfyyNJzw2T6",
  "key21": "4tZH7Wc22HAeYCty8sE3zYfPmGo588Xsup7FUKVrXPvQKzec4DaYAEwmgruUsBwgVzXGreVeT8umiQQcJJdRRAtj",
  "key22": "4rQPyJDjiYY9DiDmXejf1LNbLY8tCTan2hmXtDHJf8JxZ55jXJEJDkZPRYBHN9jfkFKQK5WMoCCch4PsYAsFemsM",
  "key23": "4GQwU7x86updJukk7g9DbHgkhyUX6tbAoQ2512thZuUgQnPdo4yoRtJqPCRq1oGgncWQP853VpNVXsDpeQpTVEHq",
  "key24": "3Lgf3KGqYKikw1CHpRPLdjjpJx4oVTWYKDQFcD5x3KDqjqdXEucH98ii4aJoi31E2tbXsguK1CHTsfj2bdZ73g5y",
  "key25": "6mYP5jp33U1GotAxbjYrT5vaKaB6Jwu6NkfhydHPYFXMyUKE7GGJdfveEGN5QMMr62tYPdet1WNcqMKjiAU4rkj",
  "key26": "5Ssh98sqg4NFG2idw8637bJdH3GXTdVnVN58bivfvnocsohGedWqT2C9Vnb7ig7m3d3K4NCYVbevPdmYDnucECWK",
  "key27": "3RUEi1mD3b6h1FdkZKYG34YGfNbLYA3QY85HycEoWxyA6GrQnaQi81bPEbtte4HbAdGCdRQiPcYhYNjY73Ex37T2",
  "key28": "4Vk3V1vGWr9rgwwzEbA9NAxrCwNZuKG7gWCqbrQvrLPtJ47uWu5NEth5rZpfyhjUWXqJrGPXxTwuJQMUoNFQqdRi",
  "key29": "3kgSnDGhjZn7uPsbYZz77VdXLM75fECPcjfetXwt2W1hhb1jmEsa6dvnYqpcKeC7GLdTo44tDaNtfb6rJAztU1tC",
  "key30": "21mjXQG7qjD5qrNvp1sy5L3MpC5MSEYq1mUomwRTMQQNj81vTGbQ76Cq9o7i7NPseqmZ513Mxadh9VidJyDjt7yo",
  "key31": "USzfW2UAy9fu7H7VLVARxrEZBL5nMtXUEsGgLX9gmHGFXpKwLn27usew87Yf15GH5GXdpDSgWPVU3kuxJDyDPwQ",
  "key32": "2jYCRGVrCN7jDq3PSaPGFcTVrxz1g2WVfuD4GvSMhZDqNxSsw13KdBCtcHgqTvteY2FoVu6HcNdFFciui8VDUxTn",
  "key33": "2eA5U5DHgTM5tQP231iLR8n38NAUVpHajB7CtuzRVHb8wGrJnwveXbw42QHYiTxrEwCGxwVyKQGzYPyDAVKAxQ8n",
  "key34": "3rEMXu8278zfMABtNzdDJSyiXVmqs3koQncpieT23h196jCp3grFhHR652a31pMZGZTJ4FwWrNoBoyai9geM5MGr",
  "key35": "4BoecWqsNGE4UDNw9G8sbybpgfkYhoLHHGQpVrxW6Z8zxoTqvCbdHuyNTEUsMEkoxzX75TpfvWQpQkkzQgHdMfyN",
  "key36": "5TKAK8DGqdSG7BY7SsjK8RtyhWgYDN4Vv44BL4Zukf6oC8iTJSsAQzutwadzNqhY7gyshFY5wgaiyCvtZhXn8yKe",
  "key37": "2CBBpTNoyfLjLziFp7qjptWtpS7kTHhraEELhvoV3Qtjfj6veFATXstKwjhhrnhGGZXpC26zULetSjwAs6MCXrGc",
  "key38": "4dpCjZLf892ACuZLnmriFEcrQePHGNNsFB6kYckPWDQmJ5awWcr4a4dww5Cmf5EkDowHLLHyWuwhNbtZj6Y8TFUG",
  "key39": "3uzttdyR3iZ4dE7otZUQ67jkhAvpfZ2ut8r2ZbJ1szh5jdcSj2MdMjsYxuEuvQZ64cigJLUYP34b82uSszWk7rPV",
  "key40": "4QKs49fTYHEBnjpVNo6kd1PptPTsxZKsWpJ9NNuYwEJsp8JA43iUvXf91fzBEQvXnVkJLVg5Hx3QrbfqjvV6iJTv",
  "key41": "3z2UgXXDuQtjg84fGfwkrCAwT9cW4fJdbbJssiHyY46SmL3WrxVt4QT36yUEJG2SqAFPyYiVrEzKbSPmmn57gK1G",
  "key42": "5scyzZhnqoG78Dosy473a9hxkKfHHFNBLqZ5xav3cYFDG3eefNc6JegghnCR8CBcy3cSvxs7HRMFG5vE6x8vGWHs",
  "key43": "4nKCgVUEAM99HAkuWiMHZF2Di7wVdEVcNvmg12NhT2DH5wrrMRsR23UNqHSbd4Dz7sNZUSa1gg1gZDwBS4pxyPHc",
  "key44": "5g5x6yVMzfbPWUTPZbxwzK7LRCUUapM7oAQrQMi2ZS4211QKtpRfg77A5BQdiNPW4fG3oB8PyFHPTHqFeGnxiFjz"
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
