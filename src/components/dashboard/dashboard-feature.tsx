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
    "5S9VpNAwGkEouj2Si9s3he7VGm5LSVcPUnf8rbWatexHLtamRhkWGHPTLZNsVK9KTFop1i5ZQaaHmSty5HKSM136"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkokreFcED3nrhF5HToyH3oC6iqinWc2PycFhePGF9ef5mxBF3RJLCdVaxzvFcDBWqDGKsDpo34mxnfSKonGjAG",
  "key1": "2rTKPnSmQ9ZMoT5khrcgULjqaR8c6TtkUtYBxw6H5rjveF5wAQazd47QswABUHcb4DeKSJDviLyHmNomRKwwxuBV",
  "key2": "3LrHmnBFTSejx9kog2Pp5HGa9PH5sB7jVGqnaYJAWasyXKghJDCSJF8TPLFFHGp6nmAbfbs86boNySgxHViXqoMZ",
  "key3": "28YJAaFxyPRAGhtg1AxXHFGRkVtwepwAkwho7FtgwWQ6MXEuk862r7yiKer6YYEr98GxEBAi7XF5Cm2qLrYMRhab",
  "key4": "751XUEjo9wBHwG791oY2paN4SvBExXqmnSQQPJLDG9hHSb6ekrSmgzWBEXhfM15CfXADfLcphWmPoN1Mf4Jw2pA",
  "key5": "3VVQXG4m6XfzrV213CP9DJPvJYt9WHbaXvqWdoR6o4DJSTvN3xTahSEeUoHB1vRHWC8riQW4oWHDaCxvEGQNMgVv",
  "key6": "h9G5HxMd1Mmmzov2NSZ6wqkuMn8RH9h6shTbXQZ1rorP7PLVJWfvneEHZiKjfDNZGzP4d7N522AoCfK9B9S3Z4L",
  "key7": "2EsZ4PuEFJPjKPhC5YxXMLbMZ5GhgdPXsxKXdUHp661DzD5j146HBX8q3V7Q1rR5haMDWdBxvTDKj5FRFTzphiV5",
  "key8": "5RFU74tE8yC6VyNBnoG6bJ3oqSZwHPobpUaFj4RrsvNTXGDLa1cf2ithspudGrdMAcnSTXGgAVxHG1R9wsvP44dP",
  "key9": "A7cfAyCC6F4F1evKB9LmeqN128PLay6J5zgARAwTNkeGKJguQvjSv2zZUdepHTePcFiVnsXURa9vWLzkpgfVg66",
  "key10": "4m7BwCSymhhY1TZtvQc5g5sroXtLPCfX4RttQkxPvGVeV22Mn2K3DTA5s7TNCnK3AmDiqDF2tyc46pLUvd72NzZ5",
  "key11": "2vEFrMBwUNavfQGZ1ET8LqcGgpqoVCAFHwvqHXJv2zLMBvmPpNXHTT7f2YWpfGVFjk7EYa87Ruzr4NhfpGCg2M4E",
  "key12": "5RpRYcqAc91Mqf137DqwK4WKMfaJyJkMPRpqYbBw7dUXuaszwnQtoLxnmAodYQnWfPMCdUZsaGaFNYhreao3zpDG",
  "key13": "48KTW2j9SR54RXdV4Cm1XBn3sp7DgZx9SHvLTSNgDdKXUsPjLrNmpT2yN6HdSeacjx2srgWynatu31rgN4AZFW7U",
  "key14": "5WgkBbZm7GRe7eCEeis1rZc4uv6sAssMMj2MHP6o5FT9vdKJimop64dNop5SPfM8tsnwA1TvkaJrYxCVUWauhT7X",
  "key15": "NLy4xuhGuvHrvHbwNLpF7g7sAWbwZxd7uVxkp6GfFSrFs25wmFrHX1Gqpw7UPFetzBZhn7cKc9M3pPYMrmEKvHP",
  "key16": "2bSGsSCJmktCz6nSaxTHJov4erzZ9yFqq2bQKfcZFnqEiADmHHBhR9jzq2cZ44WXTmrfsQsNucgsTF67hWDoLRHK",
  "key17": "kvYBW77XZppnWAm1LhcSUosXU5GRdUxae8VfrwN6s9GoLLDfGD33nHYfbvw8djnXemVPmj1KnfkrP8LDAWYxFPu",
  "key18": "5aNBoLceDWwdeKc29YFfCbnt8LsZPN4LcFVxXaDgEAfm5racog5Em6k7oQPWuM41yftNF4UstKEcTbGzkGiyxmST",
  "key19": "5hPkZPxHqCP4qiMtx8bLCaKMf75YVfaUHrqTzij764RiNN8beegg9Vozv2tGbtBJdcGHNpPLyyFhtxXCGUBjckJH",
  "key20": "2qRVbqau2jxtoDPphC6n9PLVuAexHuN3c95PTDnUM8h2Tnd6BFHBkZDqQ1bpa4Lke1DVaBDHkGrFWYwAg43quLCU",
  "key21": "PqUhUeWmFqtvmqm9ECYBR7hLLJxszrFfv2Z4YBSDkuCzPgrbTtUci3wC7vitUNqYny9t8dF6xtTGFzH3zw8TsYg",
  "key22": "3TgkiWFs1uhBfXqkqU8UUH2pVK7KqC5Dw6w1tm3bpaFSHTfxbHkvyvsJgJGkiANYEusT1wRPed79gWJUuDyMsT5N",
  "key23": "ZK5nurn5TEEzrJqAfWTeJNMSZ8DZEHHJFVH15xWvrRXZruT1bWy7jTG1xxLd3DoyFS7qseTWqYjvDd5WSoRqPx2",
  "key24": "2CafPSGSXCi3CPREtkngLXNzs9CEREEc9LA66vZ495FAEdqw7dEbDewpFFRJPJCPzphpkVBsuHCExWHFJaRDkoUb",
  "key25": "4eGhBooZ5aesfg4f8LCePjhGytsqZpMpZtGLf9WvBuLNTyJfb932Ct2dUvjqhKxob3w25KkB79evueAzKDk6q4d9",
  "key26": "fwxfdafRx8CxUMHcqmieSgZaaqbugH1iEsG1RoQUbJRHrzRLST7hPZUStgPjfTacgMSt5RshC6qgaoRo7rJrtWc",
  "key27": "2wocHGuAqqdYkLjFvWKtnntYf6SGVRgLuuMT9uXBgZJApg1nbkB7LxqFQWJv1BhsjhrnPhLzL4K4jTcKht2b7GBn",
  "key28": "59Xo7Z7SMRDQFauqyjxWEH9JjkYu5Qpwa3n6VBaGAAxB1tj5679TN3SYV3fmRYHvoAeEtZdV4y53uZtxeEgfbphc",
  "key29": "2ULXVDYYDp6bFZFgpA6CUkaBsWXzBW6D8dVi4Cy526fj38nRCqgoskq2E6YDNZcQT4XtRhvLmgMrKb9HeznSQDux",
  "key30": "2YtQZa9VxGPVFGRKMaY5s8e8VkEsyEUikBx2GFCwP9ksAoUh4mHch7KsPUJ6j3N3r6NgfZMo9X4NmbQsD15Dxa9J",
  "key31": "3UmdsdZ4n4xsoiMJyvn6uwopT3TLbifjKfefqorLTc16A4rNibyvH2JDsio69a5uRsSAjptsoutNkgNEWL78Ubz",
  "key32": "WASABN8CffssHhsyLEvXm8QTiiMYgAXqkhb1CnNDEjeDL1Lq7c4j7HTdBUEHM2aAgoZyyoQUXxXDkhnJUSksM77",
  "key33": "2XLYjQAxDWXUijdPG1WVrWepmD8Ay4A36STGkH4764FNN3Ae5iA33KGesiEtoaKJ1xYxHg8Ep59mpX44QuyetLA2",
  "key34": "3EmCrKPRNHbwayh6YinCSqxpGUNnJWgVrXvcWy6o6Tucb3QAMWfb3aq87ry61aHcLZjHjYUcVepHyNgfZ8LNXRtp",
  "key35": "4vuBvYxs46aoNzJBiYXdJKLEPMdT14aEH7x9TzPq8Vb1YEUcUGWkDBmk4agVpB2VMTfu7c6jFXuYpcRfacx5kUaP",
  "key36": "2MkHC9B4R6hqfaLXtz6nFcEYwdHrKU7wezUHegigQRtT4KEsX11Gqycy6pJJEJQVCgc4wuQd2zNgt3HoZcGR67Eb",
  "key37": "3wrZcBRGdzfWxSVLinL7zeGq2EUxFiRVZiq9QCGMFLupsj6CbwC2ckZ8b7M5CRyZAWS1nsuMGvxd3XG7jEgzvyCq",
  "key38": "3bey7Yq8nRTqGZCbjnwU6S46BSM375CpG22pkeKrKcntCPn1iVhXEtoH63FZFFbMTTS1FRrPpZ64pTHBweGG1zbK",
  "key39": "3zbcV3J7SekW8rfX3dm7Y3XLWW9M89Uq2fF7Hgirj4Ly6tjG6nVWy6CCXiCYJEvAnUy2HEKjYU5q7zqyY6ri4ULo",
  "key40": "2JnBf3VirAzcmcU2VarggstK4VaCsMBp6LeSDDKMdoSHz7bXxxoWR8KsYnTbGcV6gBTYX5hiZ6UpthVH8WNvSNH3",
  "key41": "yD3r4jAfZQg6YyTUzyURQ69WgrxPxkScMf6rma6n5SR1ZkwVBH5bJEonMEckRj4bDL4wmJShKXacckkv3PwXoPD",
  "key42": "2RrkFiT56Yd7zyXxZNwv6dGtqDyhwPf9pVzfhnKcZXFE28w5TBnro7QrTVFRfnD7TaaU1uY7xbuNqWcnVwt819gi",
  "key43": "3uPihW9FZX1zG9C9soYgULz5znPRr1oRarpfvKsUD6rzZnqqTjyTsfAAk7XDrot5G2fvDqkJRXkZxSepXe8McRB6",
  "key44": "2GYZ7sbCBWS75wvzRJt2QZ7tp4ajheqSzK3gLtReEWbpLvcpyQSkv3YktX7LhxHsLLmmy8whL7PYFGK6Ecak7t7B",
  "key45": "2kR1F5o2LgWQ4dYNRHggAUyxZH5v29FpfK6DbbMDvvJNxJSdYo99rLZ8EDRLvfvgjnrQY7XZJfpjKb1j3uN4K3Hg"
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
