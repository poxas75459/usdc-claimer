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
    "3nzyUb1kpkMn94DaEY2Q7JB6DKJ62kdeBkqEetNBDoBfHatbyCqLwb6jMFXSpQci7sm1qTAmueukxtCySca5k2v1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGpNPJ1nEJxWykRaMqXBE39SovToPAQpkN2b2bQQa3FKY4R88rx6MtAoonWrzd86ZsscHCjYibCHdkRPJ9nTvtE",
  "key1": "3ecjKFnNdvFZWhjAFTKxByEChNmDXXA1ymFXKbwdYUbhEWrDK7SsYNKjmFFtaycKQtfwh8Vkz1bEuHiHxqbSaJC4",
  "key2": "3QV1g8JKhvXd7q3yDg7L6Ujy1wMhyKkv8K1qYWNkakDPX828uSNjsG4Sd7i4S1t1Vfcv7UAHYx6sVrpRHTJWzWSP",
  "key3": "PnNfSa3P85eumCJRsvjATQzCKFY6RT45ePKUmfhZ9z2LesmQXT8zXuTF6sTVbAgpAY1dTwUkx8jfAmia2Vqfv9L",
  "key4": "362KHtCKZu6CcaA9xW4jmGMR6DF4267EB9Th1fUvNQ6Rm2FVkBZSfskEzMYaUFtCDEsxhHmGXdmr3pFBFNsGiZsX",
  "key5": "3c6DdZoDgsnpmLdbxrfBhZ7B73iCzJgkwpHcysQTdSCa8jtaJ4jcosBUPgBXovKjHwaKdkqkg2muaWwZXPxudowL",
  "key6": "5W1nViYWzmk9uTcEapY9PHK4cHgLcw2jyfxVKLvkaJxRP58snXXz9gRaKAQvrTPZzYxiYiVbo445YGbUeUc5gKzS",
  "key7": "2TkhVuHrT2zmZ6JAWZ7VryqFnTQAobaGqiC4P6zQneMEEFtD8yJSWUTjtbLDQv8VYfZBnAr1oNAk2SfYC1s389MY",
  "key8": "3LEfdaijzHs7uCgwDCkP75AJ7bwwCGVBNEHhHiSZw5evTH2mpUcKCdfkc7SEVTAy6GfgjmDfwrXFu7pFSGtbenQc",
  "key9": "5ZXzVQunNo7r93J9Lwx5DfGFgynY5cmPAc7rQtLBsURiASmVo1NMpjWABTbBpDDnyzUw5kFdBWGnXd2kbeuNGco3",
  "key10": "62Q947Q3Bxj233ScYKjVAeXXMS5nbBLfbSBw4b59JCpjXxoE5yNu8X4fc3Kt9ssEyVCAQ6Wm95Jfm85Nf3dVSNDG",
  "key11": "smY6capDY554gKnG6udAx8Yf1HUtcsT6hNy9FEXxEFEd4wntGdRSgfw6VyKw4x6fJNWGNFmnvKM3mZ5ZmtaJz9d",
  "key12": "ZM5DgKg6bpug6vrcMZY84sZjmewBaFwrJA96GqQscrAN9NQvmaQtePDJHG81ff81NwmxDnDmwi3myfjSrCZR2Y4",
  "key13": "2a7wJTYRcXqx7nuFWRWoYRGFdYG6rSWNN57hkmZSMAdTzi5sbxPVNrofGD5YyvGJ1KJUPsefKPeWvy5Ubkpns5uP",
  "key14": "3x4s8px5nxxLmmwREF4r7XJeSBpAc8soh4gVm5QbLtisQVyZwMi6WibXNYXqRh4uyPDjuDqcwntR2DEkDPaEYaTk",
  "key15": "4X54VePdYfLvwBgQyshtrArVazpAtFJUHSmwfpRXbCPiA3gr5N2XR2zrZ4TFk2YQDYpxJ8MTu1x5tZGUbaTnQqzr",
  "key16": "4xhEF8MYargf4eCTQK7myVxp4PvCN8yLG15nb3kwSrz8yd8nwMrsMa7uLiVnpynp2YnaH8wEtM8jipZLDU2s9g7n",
  "key17": "511Pc4RgFs1AvSShPsmshpjWHcWaQvprJAGHZEYf6WHLw41qRV1wsrppHsviY88CoBZRdECXWuCnffCQpSEvSRR8",
  "key18": "4UznuW6SDGmTFk8sn8du1JFSepnXPmpXaz5pUBmTjrZX9bjRu9GdPe526i7o41x7TeUySzZTdH4f12WjuhV5MMzW",
  "key19": "66AJvKL3Tr7MFv5VU1n24e6KgPV6fG9rP4WitNXJHaoSCWPDg4WVibtNSd3cea9VkuzC7xpqEGNRAkzunEtJ4ETx",
  "key20": "4xcueZptiKJs4QrUVny83gXX5g8gBJ533V2w7cTNhjF6xujutGRgp1dEZPSWLQ5i4FfumLYnofsqX5DWvwxwvzD3",
  "key21": "3GLeraobQqeBGgJZWiye3L3uFNegq5rnEAmUMDDif7XtLxdS5DASHuD2ia8Xmaed5G2e6Y9CcsTQNWLD7fDT2vfj",
  "key22": "igCm9oZQws3M7ec98XnTCziigqJtg2XtaiwSrPedSUsFANb7bDLho2GbWPpaEHfG3XH3c4U3HURSnZAvF6LGsok",
  "key23": "2ZFrTdEbrWMoHdTLfqAXisaxs6ZpP862ZKv6YVzfDGCSBhCL3DvSTZLjeEvztyRijCpd3XuD24zMKd46dr6mojz4",
  "key24": "3DgktT6qtmm1xhrTLmf7ArcprtknJXTPddZ4V2hemjL7VUqxEsYPiaazLsoDf2kCKLW5PBcYdS2ECEiGeuPsmz5Y",
  "key25": "kEHpHc7p3VsACWRJMwU9YhJNUspD84GULK5o44JCpWnZSe5mv23DEMBX1DcKt6uGeoVTqPCNVvPvEjtV8tsTBuq",
  "key26": "3yAyAt4bpbaPcqyXoXjjcspxkJgcouQVaeXMgRETJSFrzvE2kcvKsyDXtkB7hkruQ6Kun2qxHQxCgoW37DkWM6Eq",
  "key27": "4CENSGLCd1TeEnk9Fi13HyJXyWGoHfRqoBo8pnQMJoEkTgPbR5QeM6uF8fx4p1DBxrv2TokUngWKT8VCW7FUJVjH",
  "key28": "anFnj3zzU9TWWvQcNUwp2Jws8P3gfTbpYqB7ExKh3C3ax2Nwu2TWovSXeFNDFJNVmh277VTAwpw7iUM9dyZZhyi",
  "key29": "2pHsqDA4G74UD2dfvyEgXXfruEXDK9u7qPX3n8CRz174A5VdG4ALWkazcEUA7ZtZ5Ua3qB9SpDa7rmiqcYTbkCtf",
  "key30": "4mvvWeqd7GCbui1PGmVZVZHyLYYa3jnEBTpbnNVjCXXqRRQa6ppQgcbuy3NRMdT46U1bg6q8n7WZ9nCd9Vx3DmuD",
  "key31": "4ATDG5eNovjdQaDS9eoP2oM9VX7mzxwSZjidoLKH7CcpFYgDQzaUFGnt5X45u4DtvL94C2h66J5vcJFyyEUGZXzc",
  "key32": "5mo3HbWXPu3XQ1aVWigwDVQniTSRwmHggnk9PN9XBuRNJFZu9wNxA56PsASQEThc2efXcCyRRGnmeq14kddPBvkS",
  "key33": "vtFicnNrhbYRAHZQArMeymJ2xsAR73XH8k6G2ZntowQ92AUCLH7UhzhaRtcGsp9RWyCAiHkDE64DuymJbPiwi7H",
  "key34": "2F3nDkKhMcYjxt3HAYE3LpGQAfakC4wJgJz9q6dyjQnACtqZN7NZ7EMXY2wNE5gjKX4BRHcfjHvY3RuLkhk6UZTm",
  "key35": "4GDZF48ZNnEpVjNmFXGvQKFxSYHupbYEE8rTDhNxbh8B3jwozwpCsBQxZB4RJphRaexD1KA7WgikdXizW8kqYBS6",
  "key36": "4a26GdJex8EbkXJ5qw9daqVaxyybtDCoGEJmRSnFgqie3cX9GPaRt2foqtyKF5eLay35o92udTzBXYLBjKjCLjYg",
  "key37": "5Mon2TRMAsv9BwDiyPLMMkGuACz6x7yybnujbtZTbWJc9Rqab6KqJNxGfYi4sgiWCQmvoerjC2jXT2WWSz1FZQv",
  "key38": "exQZSSSSP3YYvpbF6oV3azj364EpqS6sBEYWxWB342KfxNtrj7QsMuG95KQzFD9oqvUjq3rC8h5Se4xG29W4JQS",
  "key39": "2u5zK18cRKCw7zR7qrDBGCBEL6TfHVp9ukAEALuErfMY1CGFst5ibvhfuCuEMWBvFS4qpiHg62zj8pCgEv33Sqsd",
  "key40": "Yg2xJS5BAGX4owbMxSme5j18iEfkxznG7nETadKNbEEPvHQrVUtXbvqEeuTo129T52uSNnbc6ZmMH3TxrU5mkA7",
  "key41": "2zp66L9YgyU1y4B5WgPARh7mdttWDCxKsJzhhpBsVYinA2K4SZthzs9Sasgt2tJpzg6WUQMdAbumQTY5SpebT7A8",
  "key42": "47rrPazV698aGEiquYtD2oqWbBNxfakjWdrmfe5HhSYBCorh6rT4Y2LXmFDwLeU5z1K4TvWHRPvXbT7RyrvjeV84",
  "key43": "2R4i8e83LX6Mcbewwsc6fzgY7g7U6udJfvkKSa8fp4Sj1ZJ6xKoLsbsHz1nDCb4EAcj1qNX1XJYh3QTjnyGeDi9Y",
  "key44": "5en3wRzbZUvvkEcduUvLbtKFq5Bbtteg9NHwQ6f8EXTqTQmBxzNrq39BT6UEBKtZxeHuFYnEKTwsuhDRtz85Qn4o",
  "key45": "4ACHvXfN8LQPZWthUFHvkydf3eiT8YncSkYCrmQhAA2w1DApCtyhfC5UwHwKy4WVQS6dPq7jmmtmFZDxthmWmYMj"
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
