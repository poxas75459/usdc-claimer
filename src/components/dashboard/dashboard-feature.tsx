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
    "ocjKQcE4MoqrKyqz3Phcrr2raw8okmwZwNTdhGKPPVYbQUdeRbGYSr1imzKvzNR8r41yoyzZnbVpvxoTKc6mmVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSNjjzHWhqqDYRR7texbki6sRScj1P7SGB4veVBwDEJRzmizSKuEsbYNa3aRpiFRvMdzHv3VoEc3t8X95x4FNWK",
  "key1": "4adJUjkmJSx4poTtqqFsLY3x2hxE1i4R3huEdtaZjBREe1r6gLCRrKiijE7MP7zvkFfLBSUCdFznDBFZetsgtXtm",
  "key2": "67bdaqZ5euNCm28LkdF368SrGfGLaVdxLxVtAiKDjJjvPmH2Ernrc4bXNzTPTqd2JPNRCW7g2zva8aV8EAkB3t8U",
  "key3": "4xBuvdgmYCh6Fj3FPJQfBecG8kvugMVnkT3YyVZTPDKRGAcFpKcTHn68aWPo96Crg6MaVeyyTpk7pKhPYwa4Nrjv",
  "key4": "5WbjTb6VX24nHAAfpswARfXmSFRCDBNZEGQv1WhgFn5zncfB2XQAjctWTs2AohD8WVPeMoEravDmzBhX5tWnsCd5",
  "key5": "2AuNvSnvwe7iSKscxnSdn2RFxgdPL2a9GHidjQ3J4yfv2tq2DSyuRGMbGZqiehGbqCeNrMc8Hth9gFf397Ug3qRY",
  "key6": "5w2JHHQ9m84Jw3zfsavqQzNeHUGE8CEGd92Qsbiuh8nEzjJByXBzpHoq9cg8jFbg3fQ7YWQRYNmuMzPtgcSXMqGj",
  "key7": "5NXVMxMzNocLzzmn9knBYcPWexm7Y9Nxdkmem17CvcniDdteaUKYBmtUqGzbSUvzqMkGC5pqEFR7u6tf8FzwjNsN",
  "key8": "4SjpYzdUFrdnaobMKYR5kGwtqu1RDEVgJQVgWqpxLJeFDku3Vi4MQhWLEN42UbLQdYK2eZCQux2cfRxnnPhgCfg6",
  "key9": "3tEFr5NR7fou62n5WXKjCT5BcDNct2Jao96FMc9o5FFboAqMd49ggawNRYW2FVgFS45e5q5gTeGAimZztDuUW7TQ",
  "key10": "36KTc1MEVTJwdcXQpNWWZWdrUaxcrJDvC9718UkDwVufFdmwHjEREQM2Q6nwAAT76pqB261o9ht2Mij3dMFfSvqD",
  "key11": "3m7UwGhU9jneHDi7w9Ckt3DUvBjHxEkMs6VyRS5CMc2pp1tuJZiBFzn3QfUPcpHQq7kJAGVueNeKPgsVMqbK6wob",
  "key12": "5ESYmbHBCsvY4cNPHyZZdwTurYiDd9adDELEgeTki2yTo37McSWmTwjaZn41yMFjde2fD2pNkLwyLGaPmpDooYDb",
  "key13": "2EifFFneYPMwRzdgCgPiRFAfnLVoJzmC4S1uCTCCgcExiEN7HsNPZfnekDwpNidQcydvvFzL4LMJ7tXo9ePu47SW",
  "key14": "2m5fpBfS9sq6D7JQYpJHxrwv99f7dCrKC18sjbFQtpY3gYF7Vecr1im4B6HxPNGQAiUviFt4gDykWb1wKH9vbS7M",
  "key15": "4MdJsRPekwYEk7eqTckFBXad9HjHzdFAMiHzTwDWA7QZiMNbxQ8cVG4uYuA1S1i7ZmXY79VKEnfunSBrqQQ8zCm2",
  "key16": "pLm6Y1vcBEkmD4hct6XgMLss19bGD5g5bJo7u3W1JJDskC74ADQ2BJzYBoGShgpJCKAZq7NYVmciG8su8dLyVFk",
  "key17": "2B7x9C5jpwWCcwdpMe3KqPqiJHYBLEfMfY5PkzR6qsGy3ZxezbuUQWM2GWcn9ad5AbXWVc67CwJXPngw2nw5Rscz",
  "key18": "3rjU9QVXmKoJoDLbWweS1SqiSgqW8834VRQi8h83nitHTqrQXcB6hKgMdK9uZkiJeGQvqwE6Nq6s94Ren1f2SoJy",
  "key19": "4DGdvhG2ViuB5AtY3LGbCAdcnoDsWEvQqVjvK4rs1XZSRKDe1EDJdT3i5s3p3ZyK5V1sm81n7QQT7QYE8fM4YrRR",
  "key20": "25FQ1pg6zvgcpcyq8nCroH8Upr9HFDogg9egpDaLbyv8mBwVT5wcpVMeXMZyrzRzW2mSKv6NqNfwuu6nRoyZcySE",
  "key21": "4EttAKnf2ZGtFs4Y9fhmFFVmVBMh76pnYDbiRMxjCRBcfiN9HwxhRVvSrrU1ucyASyKVDCMa3ibKRcDD7JcsNkLJ",
  "key22": "4oBuNVncKhLNRf95GEm4Dfj6WydFZQ68k5uAa5N6F3qk59NDYERPJmabEWcjoKci1eegkWxk5FXBYos9aRjYgEx1",
  "key23": "N2PDRY76CGfRYHWDGdc3pQLmExAXM5cUmacchwFXFaNDcheemTy52BnsDV6vapuwgK18Mt9d2WM4zphTMx7nxSR",
  "key24": "SgZ3TYecKMoR37mhzyWqeepvCC646wiHGk5xcYtUCvVchjH6rk64UpmA1DwSSwurUNEVe1p6CSP3RGPmZXHUi7p",
  "key25": "dNW2E7PfL3akw6F3QciVNYHRkJeToyDWWGbcyBt92wEhSypbdEFDuHVgbWCtVfsRupjXx4nsS3GJvHzuAyDNdmu",
  "key26": "i6GBddCKtLD4pUFdi2JqkvbLAbAk6VDh7L8rAfkPrJRUNAfYNShFfbcGczS6e1eTpFNRvoAEYiKh1HXn8SJhHgC",
  "key27": "2aJsSjYR7xCXSFEXpy8WjaibuurP7MeaUjAtuPP1jZ7oeU2wjvWMGiw1vG8cgunDRv9p2JA71jYyE4czQS9YNwCM",
  "key28": "3PoMeRtNcZNzHyrHXb3WusvrWRfzg3QBHp1mnwEe8qEF93ARSZf8Y27P6MyE4NwwbT7dDppKsxXnjgnRk3CqTUi5",
  "key29": "2A8egayi92mcaiFWbrch39rTHhH8QXJf9Zd4yudCPhoYq1g6AVWWmdPXgfKtKkHdQuCz8FtDDwjq2ZYJVrHn6Eqq",
  "key30": "5DHUkezUZXvtx46sRYzMu7pXMAr87MYHd9x1CzFipB6BQsc3KqnSMDSguepuBEcQrfht8t79HJ1MPrh81VDvh3BD",
  "key31": "52BrveEkdLNQzMWgarA7dXo2oGiPphQJhDZxrosGp25ui24mXVTob4EJUEkk3QYhvpjEWK68GSrinBxpTH42pfRk",
  "key32": "5ss8zBMfC3iK7CfWJ8r2UZJGj8YuEzNkPmvf38UBZWg7VwVeEwMWCiVgAxrCbwWcRD2XY2nJuweMWkbmJvB9cJY7",
  "key33": "2cqojMWakQiXx7xMEiDb63pPvrSsAmjLcGUmvo2KsEeYwdSwYV58zHdeFoWMJTfZU1VxMtbFzYGcdwXjZ2T8r3vF"
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
