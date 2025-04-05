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
    "4iXbPdE5s7sxS9vdEPgBjpXReKQHL1xrWvpXT19CneiC21DGckokEJpbksd7hfG23qTLkdUFcqt8dwnuLwJLeq7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gxe5JcnctG2kZiPo5CnvCTcrg15xqMyBtsBbCP8LQe23fnBH9eCBdX2mQLuv7ZaN628fpamUsi7LAT5ULbFKZB",
  "key1": "4XymAmEa1B5of28TiXmS4z7i8gerf7ZuQZhQMS419Hc9MXt3kX31KB9kViNceDJ7sso45isT1TLDbnCepT1uE1F3",
  "key2": "it1YcRwC6euarafuDkmgxsBWUJBGPYcVMPfH98G16L5cA1ZBphbvpXnUfKbdAWmXtxGtYYvVwfV8ouasUhku6jW",
  "key3": "5xCSuZaBk4A2cjg2kpZVWU56WANG8aBKb9GJp2vHcTGguE27eep4Bmc3yhLghHFu7sNgaUXeTFsQNG8TeZQkot8",
  "key4": "5mJSXVT1KGHd5ECG2k9fsoLEhB6nQvtfu2tHi6qig4fgUPeJqiaBVuAYmaurSKCstwXrt2bRAb3FaykV8wXYUKj3",
  "key5": "5Y4f2QJxhrRQr6e1aQXJRQqUg6o9UAc8zBofR4Yu6VxEj3tDW61fxkt6amEQZgnUmrrC48B2XwMERVkYiaida9DC",
  "key6": "5heicmsmgvarSzzfFnHx4sQxaKpprZUrbfFsvV5fDvYKJrTnfD5RqkoHst1vVPhTUQvAjtJtM8vGqUDaCTy12tL6",
  "key7": "282UTHrwwBrqRx2S5zNJjKUxAhdaYTfBTGbwb74tMWny2HQ5S4rhPG3VYpc5k6vFDNsExgFhDGbjFNUxxkDouqeX",
  "key8": "291HGxhyUSbAMuPVayjHCZAc6QRmENhS1pxt22gcbqGaaDnpdTFX2oLh7hRGizEEVV8umiMbG156QJ1LVCifXugg",
  "key9": "3YqJztwEWiKijbSiX7KX7uAxvrzT2sRStqjK7WRk4QmgKQsrxN5b8zCciVTSi6seiWz6Z5vrrepYeJguQCu9nZ6H",
  "key10": "4iaoLqyvbZy79S5sFh2qhmrigQUTjrMqYfTNb7sygd5WXJvNDbT7jddCGYSxs7m44eC9wzf7qpWF7NM4JHu55s69",
  "key11": "43CA5ZMKeJTjjpTU8oq2jBmbiYkGfN1YzSTUkfGzq8uU3WMw19rBDVg3EWDH2Kq2VTpwBvN7xQ4i7mzePXu3zQoa",
  "key12": "PTrYhoAkHE1rHQFJ8JWzn3fK2c7gFWq3fuyrwJQkFBB3jed7vmpr8RJk9Bvi8PVoWo1dbXNQgjonv7kzexEmQgn",
  "key13": "66hvJmbPgknSfeCcvZrhXfB9t6TQq5YAh218k2kMNkGysEoXM1peGgYoxEYgbgug3SU485p5xxMu5wgPTptZUspJ",
  "key14": "5Fpj4MpqCvasSyNLAEgbQJfEkxh2Un1F9yPKypaUHiaYeuYiekoi75db2F1TXqsfY8rYEviCgFVNRDBiqHrsmqfo",
  "key15": "3KNe8mkSWa5G2NDzKQjqoPBLiM2gDJKkVQb46UmuUDoC72NvCM7NgVnzKbnXEvRhWjLbrwMNAYTz9SHNLkTQ6tPx",
  "key16": "5Yqde7bFMyzHmkP1ou2nfugubjxSLdWniJHkWf6HK55mvouYEC6MeV4zkVYep8WVRbct7m3orqUUYwBrrQhFxydo",
  "key17": "4KeyEn2fHnMXp5h4iYXC87BB4qk2d937FuKCXD5F2pzGChZLaFD4PpusFHdBn3CrtJWycygewbnviTtGwmojSrZH",
  "key18": "3jtDbFHBsFsotAf14dXnjMcZ8inmo2oNS3vbp8dj4icGPTsJzqeKhKie7BnALeJ8niMB1Bf115WgSq8epiDeiTLJ",
  "key19": "3ZkZVNYZkkoe2n6LjsdqWwWQpeLMVNA8EbXaajCHCGcfNVwLw6KHU6rKKM6WReyN4rqesg6mUJmcTUTwF1r6nCNn",
  "key20": "ety9FzodFGzaxn9KnNVY2542HN43jbPDnJ8Taz44bKsw7vVvUvNZrBrVkijjFRFQCXwiVAsiDEkrqHVdVTzcL8N",
  "key21": "5skAgTU8pVaNKxXZcgwhdnTvGcczCarxSVxgm1AxmSWV5LVe8aoZqnu1EZqGhHXP9s1etXjGrZC79UA7R7nywokw",
  "key22": "4u6CWkieVZrG9Ga7mwPL5zJZxbXie4WFVGgLYi12N8XY36mnex88YNckNw4cZU7uiYzekrgwQgbbnudsqTaRnSDu",
  "key23": "4mQyJGp5Y6W7SRkLiEKVNYYnCr3jsJnEDgs4xhhGKhUkKVaEtNc8Rp2pCqKNNHoL5Uk3B1A4wt4UsjVB1hq5zg9q",
  "key24": "CZUnCezecNc4iGS1nhn6swPyrTNwhYbCVfGo8us3htLEt19meATiY1oXkYGG8dFuHSKn6f75FycJArVC4Vk2Txh",
  "key25": "j92hY1k5bzZV5e5QHpepeY2ayU39ANUFPVrsxjTnrT2g6CbstyeHQ2mTqsqvAo7RTDRFnBFuoqUF4W4PAfD5c3J",
  "key26": "3Bp3Bd3XcDnK8eMf7f2CKpbxXNkFQbYi5LKJjFxSAR5TCNVkKPQ1XSnMfcTgkAYXzucyi2fPhogPC6fn3SYSZ45y",
  "key27": "3E2UVB69g9cRxJ4R5u8TQvCdjDSen5N54AzHwGKW7dnoSfUbuiRcTEovGcceuoHW3Cq2rL892RkxyDpE4zRD3om",
  "key28": "rdxqp52z2MDXuFH8kTP869WuVFJp3rG7gDRNPraGVF6LJvY1iTKUbEB78ETt49iWY6sPsKav4pXZvzDaiNznGgh",
  "key29": "3nkKnXc5xAS2MHaJFJNML2X3TtV9Tbyh58gkQAb8qUQaVF2d4Jvwsk3o8aqafdzRaM6Ce8cQuwmskoUroCL1wbXw",
  "key30": "5mEcVxdhMWaYMZWySsoxAoFPTKmxbyFZ4sHzmZzgVSrAgY3SHfDQU9aXGZ3X2mBxhjcwwyxezajiBSfzXzSDd2xK",
  "key31": "CvvHu7u5VGRe4jMeB2LhiHV8Nk2uus3HYQtWs4XkcTyW7H12ezYRvCD6ADXuTWainQ1Zp32XdQJMVLfHDRWRBEg",
  "key32": "5hyzztXtxNYB972r6ghupc2pFSsPdCDNYmcQznTqafDWVuKz7UwEFB8EbXSspEGrPVWQ1kE2ccyxxyJWpYcfPCTu",
  "key33": "3shwQPcrGctxb3C61J4UqmqTyZQepXuCmUkYxm1wRTfHGk3gVwsV7wZeinLstrZoJ4J6Av1SZY9GoGhBRY4UwEM",
  "key34": "3gCipmihfcLPjNTA5iHdGMnKZpBmpdDSBGKnAqqaqgKEspMUnJbsjRyURXeVmvUcLZc3S6bqxqHgQ74FMd7mgirt",
  "key35": "4tzpCaGKSr1oEm1YUQM5AsXQtQPyWN2dhxUokytk9vo6uP9ydcehA6yMVtUX7pzhvtk6PABbhWwxK3SF94brtdK",
  "key36": "3DMAxuVzNitVFLsmfwWbjbY1nGGwi17bEdNRpp6ZCUyPNuNJUuvnQnRX1QMYK31ziUUBnArbkTNjbeoXtC6FAdwn",
  "key37": "2mNmd5oQQnm1hP3zKDKb6ekbRwEUb6D6PiyK5HKZruv9J82uUdxqfAyqpVCfSLFdHDsaTjEdf67NiudFMsK6C7vk",
  "key38": "2wAzQag37eAqh7mDaXeb3E8aQNvAzB7G1Ju72AE4Tmqm8ApabC1D6dib2xbx8sCvw5hwYFhnFVE1WjTDUN3XYmF9",
  "key39": "5LMTXES6sKR2CavG7Ssji6vHRns2UDJTK8m7ggJyrze7brMhLq1evgWJFEZbGFR4YwKUru8keisnzU5ndTKm8a5g",
  "key40": "4PLyoiuD5Tr8PqF6MW6AYCqvTYJyv7WpAHEgpqAUVfReNKtT41rbZwiQcVD2SyYkyZZnxFoU1xXDRfkC142eChQA",
  "key41": "35eveHHhfMSfeRzCZEyLHYioFFqTdBmj1MnPhFwiYcqCiJ7N2vHGPMAmQj9keKauML3kNSQxZjyitrUqgcUSn5mC",
  "key42": "3Si4QP9mr2rSYCgBDyCYHWrn1iRDfBK5zk8BuYS7NPYCdGBZxaWL8xXAh88NViePgGQgmag87d9ajDuZATGFapv8",
  "key43": "3ZXawYYFXuEon8EwdEveM2VYLKVNomQDLQSm4FsXHE3jpYVZmyguRj9uUKrc31xxjkADvkKSiiUePd7tUAZrtWZF",
  "key44": "5a993bHvrAikhoK7mNbYcHrfDLrsKzFdw6jqGmr98gcTZu6TjCci45QcV4m8RjzonP1rYVKCsRs53iQV7Ea56v7a",
  "key45": "vkHhx5cNcpuW3E7PMihp3XTPLQu2zsE3htS4gca1a3b5jKmYBxgv71uRDiwDANqdh65CPwXFDg3LkfEpHEpEFoL",
  "key46": "4wdKyGk7iNoeWxhLq6nw3UxED72QULDJ5Hb2jjq5GF6dCPs5dcFaZdmJJVm6Qc1niQstBNwBgNz2jsFRBQvnkURn",
  "key47": "61AFtzmGgsGz7cpA8oYK4XYqsdyeRXz55xyRmTYsACcyhHUffeYsxvZu2UoXCgDYjscdoSiNoSGWZs1k33oJDRiL"
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
