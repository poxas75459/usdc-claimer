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
    "digc1oBV7nh78c8Akoenv4fCfNtmAj1PLQkTnxCJgJzxwmtJmPBppz3tucp79jogHWxnJkC6p1RdXMh2BgLhya2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29CZ7xAZq129uwF6PbT1XrYmzZTpnuFtPtrF7EaAqWfEfuqeCZkDZYjDuXaFahcHcxmzDEpMRU9FKQ6gVwrqtKzL",
  "key1": "4GodenZXjidRxDRNYYicqWygfHRM33CjsEEWqXMGZrAiJ7FBcLnvfvDoVgcyobc5v2KA6gm72LH49uQX4aQDZ6df",
  "key2": "5e3TVyDhxT9LPNAV3M7sUS9vjLe8CdSWr2Zx3mkjeQFVXfva7pj57Mvk4pYxsanMn5K4cuPknD3HZdrngWFqV9zN",
  "key3": "4QMaguDFj3VkXSPd3pMURyHYccWHQQm9kvHtoTds4oAKs2hAGG2cS7Bf7UN89j73sigQwuEEXMe8TViTHbY2nSFA",
  "key4": "3RxRXAKB9C6qLjsGWcezpZxbzHhDySy5XULwGvxRd6sk7cQNPrrMMG9ivjKHThbgtA8u13SaUcycrdbJTf6x2MeD",
  "key5": "2tiUD8wQ2oJgvLvxCmQEYsLbESAx22DRpAKkyNtKZWCjqVBtUjkPUvJKrWQRuALcXqpdTFEXaEFf134dVuwCoPY",
  "key6": "5hfqAfJJswAw2iZYaSLkE6SCjduRQkRtXVdDeoecy7F3dQrnDKLkQAq9dzuyFVHscUq2zpzvpxfx5ur5Ep3vYtaw",
  "key7": "4La7hiWNmWunuTbqtSPwwsFRWsBe8kD9QqVV3fhYqx3ooeuwwxNNyyRocSYKGHFGSNtuQPTjCJpzHcFeLwJaTMko",
  "key8": "5H5yMzoYQHSsdJY8eVxWPycVagL9gemrsgZeGK886dwnF4i9KL9vNt3mkDSQCWCdC6T19FGGJbMM8GBjmFcNpm7t",
  "key9": "34eQdmeT7nynHrfXi8vG3PYx7fw5fW1JJjGgULLsZo7X7srSPVALV9Bvjmchhx4boEuPH3HaZJZSky2ucmF2RgDZ",
  "key10": "HwEoVXd5xugYWJXfnbPapfApGWsH4emmZ7k91cQRxgtA5r5rNE6N6kNzt6Bp9HSWPJmBi39vjyiwbmtygx8HTwH",
  "key11": "5gjhfk9oYiRuU6nsaWvGxkL6iHvD3DfrCaz9FtykBUon26JUbPnQZ12XWppXbbxGaBx4C3ZjcUEkUcLwUZqvVJZx",
  "key12": "617eTzWgSJc6oBMMi8ABfQWu4PTvs5S1SWKVWUBWF4nC4N8pDKvQQS7yJNfPKUZAAfUZ54irjdrmr2fX3DSgMEef",
  "key13": "5eDDSrPBty38itbJe8bfaN41HNeUV8r2SWemgdS2zQgMCnFko4L6LkZEfRDbpszFANRddDwfJXem3QnJ8L3Lmryb",
  "key14": "2K1TTfdmhh8b6EycWxog9LUsK36peob2duTkqotaRHrhqZQ5QxiRX3PsR4zDcgcMfUFf17A9gLBD2ZVN8osBMJJK",
  "key15": "4uyWJREYWDMRVAzFZViE3wPxcAztnidMkdXm4qtr4gwG2yJp8dXyx7DQbws6DtigqYL9KRBTQ3njZpnHzChYMdtK",
  "key16": "3hTB6GueLXscGgt7DAsRQA3xDpQSUMGt4ZHN1qu5M3FEJHczqpLci8jEFfWmzXFSj6DA8r53F4M8X7pQBaNBgsAm",
  "key17": "GZnw7fWzBUvVZWRZRYXFaQBtRLCEvFuzSCyw6izut9SzNyPmbgCmhzJF1sX3M82AXaumgJXpgyhGiRxsR7DGyLc",
  "key18": "MFUmEajLThHFpV17PYqCeadDFbjJ6zDM111MSvQVZGkLJUzrgJKTCCjQ7fVYL2i4q426ryL6jej4czwrgzEuRMS",
  "key19": "4Wx7WvNHmciSCeMj6hpBYtFA4NKf6MTMBRLGvpAfEX2vJEkq8z1hVpprnjw2qebMRDadTzmMhCreDmdZNVsGqeJH",
  "key20": "5hR87Z6Uh1GFrNMPMGNNABGqmmPShGn1JkmdWkrFLkzQLA4gHqxsSBeZ72VSFKa92wtx3hxgzenw3SCGYZgWQHyy",
  "key21": "5rNfsB6w5RgYxUzAysU4Q51xBjRbRZT6CFpgZYjeXQXW5vU5ydNqhFXEJtu7Bb9cQUhtJoGFbAD4iKE2T1T3xX4a",
  "key22": "LP6M5qvC3vC79M4kF6h72LE1qRwV1FXsb1hJBzvX6qD7HSRcenTpWVphnZho1kf5nKvbGJzEiymUUBxsfvGgF1j",
  "key23": "3vVqCpTDts1cjNE6Co978SwQX1UcaZgdABtLM2Fnf29TSWEgXZXBGLe4qCpuinh7YRHedADBNoQpEG9gtizXqjHg",
  "key24": "bUhhVuxw6xLWRTZVKNjWn6StSh4PTjcmREpwjbuKVerm4DATUnSCDrxyD6ZZpr5jiibct1vujcejn4Rq8iAd6xF",
  "key25": "4J1Qmj4ZEpumtLV8dAz2voe291ZcoafHMEZxgdKcd4zKRvy6Wz5d3Pc4fvZZNVwx7En4Y1ZJiMjBVb5SuAKATZFU",
  "key26": "5szQmj1wBhhRjajdeRmKjEYbxjCveYUGy35zpXUHhBqbemwVwSxgNfYqtrFKoCEWocmFHEMJuwPm5eCcFYTAa9gr",
  "key27": "YLkPhxMRv3KdeJ3fUynw82mn4TzceRGJ9VaLLpBp2fB8DKfugvFZ6MAe2tbpfzqu9dhX6fW2dADq6nrVSLPcfgh",
  "key28": "384VteCH1nqrUFf1SVGjrmk7MzDgnVKgovfwCZM9wtmgwnnhXjCCV6N4154pn75xQt8Wr9NayknrDZXYyNf2ZSkD",
  "key29": "4tJmXmsXsMJs7FnBm6EpNPbxihHgNUJVavJtL6WUDa6h815wRxppBGunXsdVaLFp52enJHHpbdcYn5L1b2GShBxL",
  "key30": "5KpVGsCrihkEGkYWNW9bGnG5DgQUnSuWJGvCQochsyT8rVzQ2ByAm39BqSvGYbz7VuwRuo11TtpK7WMMd3Fz12qJ",
  "key31": "3DRyMm3CdmGwksdsHa9FWw28sjpoWzHboMD66eQnYzKujEeTgjkLjB21LWNBAB5eq6UZ7TQ7VJGkTzGY2jee7Y4v",
  "key32": "BqN4atA3Ly6FXPCyVjtfnLa2GDJNAiDLLArnMFsaYxqGGBrhVG5H1ta838rDgmh3m3Rzs8gTd7vkUBX8MmE77G2",
  "key33": "BaTTwHViHzrEBjyTs4kmaAF9pSD6V6XdYDiAGHD8NGkSAAVK2FnFh6SStB8RNwRCWPQkFX5VQao75ZhE6LX3TS5",
  "key34": "5dizbBtk9kbsaMrTS82N5EqhuAhWREjETdj4Wd9265mS2Z5c5GbPDjB2M3y1ncvzamSwqKnPQZPpe4Tns4g27LVR",
  "key35": "kr18f97cFUpcs8y7KptvxmPzhSRnmftTcNz6vVMP5vZrCz1QSxnN83wkDb1Mp55epoKQzadVzeSJdnbKRQFuMW8",
  "key36": "2pzYZTVrzwaADDhJxqJNqKXXAYDGc2sQWjxT5p5thmvwyt7Vte7iuHrmaBmdEkRTsGQFu4DqfHmFQGAu2BeHeULm",
  "key37": "5njWUHiZLCZxiwrqS5kTkXiek6bb7FzypPdy55rhRqj8gihh7ccjh9Ybk147jT5yi5s1Zfn49w8aiLaYBwDfgyoR",
  "key38": "3SBg2DaPxWo4mNwhY9na8aVdFUDFUuuGo76wXDXzndCUwL4SVyxepCP8DAhaoEY4eEWy1nvJrPH35h86CGvvHmzc",
  "key39": "2p1xSEMFJasHvM5h2wfNxGbBh2uafUrfSuLcvAfeGpuNh1hc22EyeV8X1f2YsH3jj1KWdCPQca5KYeAi98PCXqca",
  "key40": "45W8ATedGJAnWtW3HkCfyCX6oSdgfwKdtrycV3xBQGdwKeVsytnru6pihmyxG5hfpCkgNwjwJrqdyG5qn53vmK3d",
  "key41": "49r17xK8ay5FdiAfFJi3Lz1ATitnyDZfYPthoCWDC8vWNT5nmGmpnZucSybcfxj7cS9BmwbutMK5yxoC2CieKdpj",
  "key42": "5ELm5P7E1Qkb13nFEu7RmCpVmhvvnENPo5mc63cRrfUBBMpCJdbk9YYxunGM9yhmqFgodonsf2syzLvjxjpGvpwd"
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
