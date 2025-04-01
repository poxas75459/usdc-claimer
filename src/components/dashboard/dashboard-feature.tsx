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
    "5762Y13yso1fDB8qoYTMybTcDjnK6EXx3rhfHLy9aG7vZucgeW2FF771XX4SxgeMj8Fux7ZgVTpX3uuWEzahyoYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAkcjyy4qGtiq1cytJmEucL6ukMjJhZBhw5hpW9BoKPM23zgt4pkSyXXSsvesdyuXcjdTniQXumVEYLmTD6H4cB",
  "key1": "3N7kK25pPBh7wFyoASHKD1SkuyAmTW1hv8pozDfYZqncBP6FLuQyHKbhzvdzN1yWwjv2gFnbctKHgzXBWGEb1oko",
  "key2": "9VZskFCAhZpUANDXpBZ8hQwhovcEANYx76ELJzkyv7hvB1SDpDMqg28UyE9WwCxbj5ao3rboYT3ZnZtCQMPahRU",
  "key3": "YAf3aSTdMViT9D4PrMFihx84EzMGSy2SUgf12y9RFEiGeP1TqmvPsN9KVSJzpG9hxGXN58qWpmE7gqDVKJzLqoD",
  "key4": "4cxAqkk7fTduu5jdLWCPtvDAXqDsPzctL5VzZQxTm2aiokXjbY7EM6CWqx7xacCmfmrBMe8nibtQXtE9WH5Hx7Po",
  "key5": "5yEkT1hY8Z5UkgkD4c6npBTU16MZYY1RBVDiqjoCKhpayfaLSc2tSeximLvXTJxy3qtE1rktEAQaGi4zzSAzwUCq",
  "key6": "3FoNA6WKccVicJDuL9qAT22A41xsaEXUqhWc3dhZfCVfEJTNu5TZ8sQWwPBZ8657EvaPdpHsjA8QmMgBdYfUpHKM",
  "key7": "oAJ3cWuz3uCT2BTQ6bmrWbFvzfJKKy5iR2P5oFGatPGWoPrw53QdzFnWhQJm1XyDqqREuhG5rtw497eFKawzSqB",
  "key8": "5d6ruCUg5YoeZorBkLJfY9wbNHBMVu1pNhbb9MKMjbgCwSvzgGxDkRuizh7s3vpeADiFzptNyrgTz9USi9SNR2EF",
  "key9": "5vTKnagh3a9N48UbtwogTHabtLqskgE6VRRCPeRvrzKufLXyU5NxXJmrea4kNBCE2JkCRThb7gsXJUxUjcdPmw4b",
  "key10": "3gFGyRotqNvWXpgqFbct1E1JZ3ufdQSAjahHYqFQH9YpePfPbAWLhHUJsgvp8tvqngsiMQ5stdMioh86FmC744CV",
  "key11": "3Uh6yaejF6sqUsmVG8MUgBuKQASavHQ58L2JBbH6FuMqxF1aUrAdv5pobUZEMB6sxKEu9RfKYahNco2Zm3cj9Wpy",
  "key12": "2vyNSjYXxiCuHp1mhWaxphKbEBAHEFvVBQgUPw62Bt1N5Nha68egSVod2P3q3MbUFiQA5KnSnogrvWVcCcyBcLJh",
  "key13": "4HBCbpmcpoH5HiN6iwsqmEkzkc91t5rYuv37UkVoDo3aFPt6wPaCYuvD9PZkiD691uPxgVbfHR7Hk6W11ttEySep",
  "key14": "2dSyf7BxNMaaZ7uny96JyeJHTyY3ePLmpjZRUnX8mnEUDpXmMp8Ja8ZYc7p8zc2PuoGJ5nVLgZbbTYdmAEHYqF6Q",
  "key15": "363YyoYYrErCwBUe4wknfZFFeKiudty3eH57MbJiR6iG4PtTPUC9bZcS6Gyf2Yx5oBWCS1S57CwDFCTWUDbJDvFb",
  "key16": "64tSYKQMHj7YHzJhN8FbNTe3X77Cd6mtTGoaw1Z7ui8TmZxE6inU39DG32ye8HBBSHb9byJJzXPMPY76spqa6Jk8",
  "key17": "2mPDtxfeE58JPhjhZNcYF7PpVortWzpHqDjApanQLcFgu8a7pPk15pAtpo7axzvtx6K8aikCHWxMvaH58Gz9M1YU",
  "key18": "HDqGnaf6NXbTddekenhfPutacFEqUFa4PyyRCB2uTPbF8Qh89SyWtiukEoh5G6auBXhVNdoBmLEZ9mh6d8ZoBSZ",
  "key19": "4JCNCUPLtDrNWQMpkMroMZsEo5dNbmPg2e7zsmz6M4hjzTSPanPB6XBLKXzx4ERjbBeZbPEJov3UkkM1VccNG9gU",
  "key20": "48fkdttzZiNHKHeizGZCRzxVpzuTwBbo2syLLXoN4buT9Nqi34arBnh9fV3EqopW8cRkSyqARUkENuFHe8T5jzbx",
  "key21": "4o3htzTBPp3DEigHYfViMDPRo3qPBy9VQr5uX5dTEEn8chMtwcsaQPvX9vUDFvZH6QJY1bqzpRrhJJXpyp8YpWvT",
  "key22": "551H4LCmFh3cGHqprNVFGzy74dx8pqAYHFSDVEvePwor9yevT8VqP1YzUcZTWyGt3rqFAfc8YjfycArmen2YEzmd",
  "key23": "UWKycMyW5bNRRbcxMJC9HMarW46uBL2B4w3283GoFt8VQmho1robTHnkQaTuuc8ngSDy4xmgHLggYAFVFdJZTGs",
  "key24": "3JEhkYnkzKq9WtKAwUiE8aMRwaW4fUoTLF9ViVYLXyTbsB2DdfcVfzfEhHrWtkEviWq9F4t9b5w2LJNnQkbf8Yxy",
  "key25": "4nwcqGn7FwGr7AJjVKovAT6nsiSbZJcEP1zSo3GHPv2tazLWrjVFGr63kqZU5HPspowLsWdBnRAWLk1FbekSbazM",
  "key26": "2piUp9dQ1eFGX9DthoiZMCyomgQ4GscnoNDotN4XbLnQk7tgBdz15r4TboqM8JUWh3dWwTZravBbXTrw8m4VAttf",
  "key27": "5Ma1ULfXbTmE4PpanSkxPBUwFQJCkjtk674jnUb6xWknjruUwTcMdsQqAGGTnFuobJ6xCZvGyCzCRbYURc15AF8D",
  "key28": "3AUdKtVAVkUB67bTTc5GpKvzACvuwW3iGCxerDGLcuu7HEHRksDsyCKJSmxv2gY3LC9mgwJi9aQCZh47HYmjnsCm",
  "key29": "HcvJ3HvvcwEF4d4Hvx5aYRPV2vihynT5pLf7uGBxV1cjht7SLvLqpwaajtLWajZAWiCKqa1TwNJRrJuK9YQ9SES",
  "key30": "49TyGXoDpFV2J6gpoZCbjTX6FFD5cBWKrKCQBfsnjUnpK77g1frLUhLshzZk3KdCEjz9XuonVo5tnqZvGmacbNkQ",
  "key31": "5EthfJPbMqvAkWWKR7vgXvd4CJRMb4hfCDLcmZSp9LHTNTiH9RBapp9RLdDWcWuAHFwWK3XRQPY3xgFMQ9xQ2tRj",
  "key32": "5pyBU2hBML3oXKHmNgwvU7UHpsdKDMGTCjRPMacyCaXEuhcP9p4XHLFTiBTr8JoVb1FKQih2TpCyJpyt3r13ZcuB",
  "key33": "5wGUcXVNw89XtvbLncu4iW69PXeJyodbQhTTyq8c5sd2rPhsUcWcvjGe6WWkEif5Q2ub3LEgHXYXo9PUCHLV2Hur",
  "key34": "33o7aVhjsNEvXcsykvJXTgMYPag1unhbRHzcgoEmxwRTFb26ak6834MJk2kzXphAXATUunfbeEdGqZVoU4kXa26r",
  "key35": "5tyctai6NtLGswUn52131iRDFLQTrn3mf7S4D4xiXdEvpB2oQ2ouZwZXJ4gxxHxWYkZqus3SKmaTyJx6NoT3HPTZ",
  "key36": "P8Qm6f8FFG7xwkrwbcoVADVp5VUsbS5wTB97mQCbfod1rMLNmpJW9T3LfGedUhQaxKJ29VWBLRtYhCyJ8FyJ4xm",
  "key37": "3fYyfGMUtXshMmemRgjUQpakhLEiFX1neQna2Ct89i2pjU7yHhqTW4rsKkbWzGbu3PnyTntMfK8wFrP1ZkcWcxKS",
  "key38": "4gVo1QXrh75Kjb4bdH5GuffTF5mfb2c1APDtXGpjTeba6joXzP1BTZtGQMm6pj9XN4guQ29qkeJzsYd7ZefjNjCd",
  "key39": "5hSgTj7xiQvVWbfkwWuMJjNUzbkzaBdm4diRKMvJNrTFup9vk3q9TPdMG4TvL8qSdRTs47Qbgr3eegAbdz3jruDv",
  "key40": "4KXtoZ2cRMtJfroKQPToevBQH2owuwixUbGnJ9AZfGKLkY5GVWM7tmgdid3MqcSzBnju4WpChqXfpfenigYjw292",
  "key41": "GUYtx6oHFfeJJiYE6CJLs47aLg96gc39wJMBtTD1PBZkJvBiw2W5ZwWkD7fu9XsoAvJDpYhwezskeHijKyCF7WB",
  "key42": "65ZAZvXQ8zULT1Xj5RGveHDTDMFLGaCjLTeozt18gKRtx41RcPJHAkEv1Q6ACwLEgWvAV93bDCNz9QnJVgxtc1Xe",
  "key43": "19wTMccv3K2RtrxLWoMfLAP1FnELxHhontWohTBxaGxCka2t1gcU2GivZn6CD9X4SSjVj1UohvGWanyaLo2XhgS",
  "key44": "5TuuC1vyYbz2QrQdW35pLffZ9cyEJKVk7qSYnoPii6jYnmar6Qg287TbMVpJXGUjZ4AmXu1jxQdvqbuj7iPSY6Tv",
  "key45": "2xy2XVRuSpyvAreVvCKWTUhntXRZiRcnSyFq4CP7ePWuSV376JJJf4MLcrmwiFNrzYhD7r55v9Xz66TaWzkYPKZQ",
  "key46": "4XxWoUqJVEd5E2N6KKKYiGLQdSEAaUREnduGvV29QX7bYWNqiFe2hEYpJecpGvrzZrFnP5QcVX5CkZyXTVdVWC8f",
  "key47": "476pTy1eQUwzSYhQprH7NAvEHi3He4XjxQm6XMjkRYw2nZcFhiMtNPy4j8mPakmtBxeT7NXs1q55HgmwTAFUanf5",
  "key48": "qaxDHK2TFbHVgQ4ey8qJZhW6KQYmCdjymv72fMAq5JkQb1mX17PddmdMeCGffbMJucGBa48hVtaMarUxFZK4cs7",
  "key49": "4DgzEWMjEK3KkY6KoVHTQJQPV7mu4CoJvquGabiwKnMs6ink5cT4brUy2xcHhNyD8gatN3zkZ6Xxnsa7SpsKemPQ"
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
