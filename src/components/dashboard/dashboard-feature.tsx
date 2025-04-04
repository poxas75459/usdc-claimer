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
    "3qUeS3KTCSbcMNmbuaqn1oJhtTYF1whnyGdFXVRPS7DjAtN69g2NzaRBbLRKQ4PSwVECGUBipd9UStjWgfQzXEZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MM8t1bQkPWyez4wP3nwBX4wtT6GDRgvpBbP8WZj6VpzyUuvtJBzsct1FGpNQeiB4XMNavDjSxKdKWWGrNdzvjEs",
  "key1": "5tzhpnyrHCcVj3sSidUCsi9TMu1wG2ftLFsvHkJvuP4TMLxaBZrdu7LbrsBdvY5wP8MqVL3C5BLmexh8r2FAMvPB",
  "key2": "2HftNp14iinbBbpMzb6AykrvyoBS8waQaVRjGSUYh7EJ2HXGvVXHib2freXatRYEZ9evdu7aGLFSA9ci9bdzYTZb",
  "key3": "5oUpJdFaPLW8jkmQmSqmo8sPpXJLyK8TVVhCCj5s9isDY5qrVAqYgtvBSoiHi6mziawkWbXePnypZGwR8hpzFDWn",
  "key4": "rtEK5B3ghjHCGEL2omneu4PcinH1FPZhLk7SsVrNhRoX5i6GQxn6mTakTynMCgLgGDwiiBuWFdDQC7Lpev1R1xr",
  "key5": "2YcR1K8ifAmAMVaXQ7ePB8s4sYvphanf5yDZAFenotaMAGi1bUrJwhXG1UGwCHnsMkwrPiddVCt9SP2GRNpJ4Uh",
  "key6": "An89Fx6LGT3SmtdS2iZbUYRz6FaFkVCCo7gc11zp6T2yJXcy4SXVeUcayqxtq3b5mqNXRAokWz11nyuWwrPLgSw",
  "key7": "5jDqr6Vq2S2BWVACRJLHndYiFbDFdrXhJ8KXXkxjGaJcMBTa211ocL3XhVtLQaSmRkWVySGRqSwG4Yc8dzgdeUCx",
  "key8": "4sUEL2UhdrJPwzcZPXi5KMwd4oBbRXdEwDG3jgC8wDTdPof91NgWZLE7NZkFjLthX6ngGXzevagdxbgFCKYttQDo",
  "key9": "2joJ5zM4aTLPzPDXMZ7o8Tk9ND27GTQiHPTHLpKU7GTTENZ7mgdBFYA2kUuF88MRqxNvaDHHnK92vckN2N1kg4Wg",
  "key10": "4jwuw7UbaQoYtfCyf7Q36KYmeTLLqezXhoMZV1gvtbNuhPXdVLpEMC6EAwdHukhwnGyy7wT4WvumuX37Bx6RGmni",
  "key11": "3quN8V3T56roprg7SqZtQS5JjfiVwNUg36uLbVdgoHHo6xC41SajHNiTJhn5zea62Fws4PasjPme1k5fZFN6ngrE",
  "key12": "2U2w25DcjY3VBFCDXLr1Ao4ksy9dg3XckTcfPJHH2YSvWVCrPiWSTVrTo1VdRPisuhsGu9HAh4DGehso7MmQfyUf",
  "key13": "5ru7aewjB6x8JhBpTr35VVSa1D72ZUYwyxgFhg9siS4gwu66MMMiBTmRuYMeGcBd6km3eFeBBtK6JfqGQLuexPmo",
  "key14": "nsDxvbiSRtqMZk5EgY1P6ZuduRch1ZtcG5HHJRiVuzMAg42pDo8nFHM89j5iBCCbLPAvRyNNWE71X6Dmh6sovdA",
  "key15": "32q1Vp3LuhchtLgCUT8adGbQMYnQAFLKPUAXu63gspQ75GBcWF1qtADaxHTkjETEVmsp8yrhqrC83673t9PAKqNC",
  "key16": "3PqSGwsp9QW4eMDKpEBiyobYhcNwJrxboeCXwvyPvk891UvwfoRwQxokBfATkQWePp3xqyeimDeJvx4qsQgRFFpm",
  "key17": "3kySvrqYhZnRrHgPZBvGWYjr2qUuNadG7y2V8R3h9wAFAoikL2Zg5r5DW1ZJB1CfEymi6pWViMW1CLHGwLNxjrE4",
  "key18": "mWEYNTcuTDpHovS5y22PaEqqqqVYdogsKeizGN5PA5kqr4U2XmKfixidKunACK96JB7J1uyygAZkAqng6AXzTNo",
  "key19": "23RukPCWiLLQEvBdJX8iDBE8h4LwhSyP34K6qm18nQcNKHXxULhrCExfxzJEQMYgoa9HrdHjkzJP2b6cXU9VDw7N",
  "key20": "37dt2XdSKzmJkndV2gVD4r91vJbPkptQUcrXha2EnpVvvKWJ3dc1evDrDZ3yBjTecgdSwWPLzTWsqbnpB7HBAV4i",
  "key21": "3663ufEm5iSPvT8xA8ogUmRaP2UCEjpYcLZHW9KvrUX7ySGYBnTecdgrff1Bcu3ztrdSk3iGxhoY7UhNLyQ7G3Co",
  "key22": "34Lcijyb5eHgptVwnauHFGVSKxFmNhKfH5FJbPzmQsqKUr2Qnmpk8WNuqV2Ssr3V952nMQe3vRL22NcwQHshRZik",
  "key23": "5K852VFsV41V8uYohya7bDDuxTf3YwYpTJkPKPwnnM8Cdc3rjVhX42bM8ReHC9hCNYCFvGnv4mN6HjM7SLia4VXN",
  "key24": "3biDYYey6sPNansie9Rahbc4HkBFrLEDhS11bi2RSNvErkJ8JAs7326uWNFcDU3NLmGqHfmnYkTTJnJcSEUoZeYy",
  "key25": "4nA8DsXCT2VAxfgRDg2RS1u8L9eLjt2JtvVbMtwB61DPVj5UW8bMS8jBVfsnCnW4ccwLtiF1J7GggAfjoceM4xxT",
  "key26": "5AHs9aynYfNskDCuMaUoTuepfoGTW6RqtUG2uTjoUNXHLViVnzuBnv6K4uAbcxqioK6LnRBkVWAL2Vd6az9bwhsc",
  "key27": "2KpimW5VJL2nLch1adVHuGckFCLvXCWjvLru3jPuV1Kf6JEFQAMHmFUg3A7S7obCDK9LV5AVjkQTbqJrxFmuBFsv",
  "key28": "2VXmGaWMWWU2X7tSvsfhdXxsfUtEdqQ3eQCgw7myQP7unoU3SrLubZh3ToZbx1owJHWzrv6iouuqkbFntSDL5Yyo",
  "key29": "2g9akar4fRsX7vrFPoixFX1KQ6tdYUXUmbeAmo8gnL9FuVvLTuiT4Wi8uoVhRCwkXP8MvAE4trqXTXdbMi1ZUXzS",
  "key30": "3A9uhH8pRgLFYEV1UN7eYVCTKSiYCS6tNXU5z3KiEChhrwkirgg4EgUqGoY5ETAr2FD5o9F9N2b9MHjKEwmN4Jyt",
  "key31": "3R5G49auTDPrFgHYSqPX7vFPyFDzYE4NBLqqa8gzft3RStbQQ5wag3ten5aAoBU3CV1xNFCjWYbqr9RwME2Nx4y2",
  "key32": "3hVBmvkqfqE2WoKMtyu3e2mCdqPZMeMbKccaZ9FyzkZnT78MxppAsAchqo5x2oTTRRLpxdf76HxKrAUi673Zsdr8",
  "key33": "41cVhA72CLzXwu4VHtthjAHXPxFieFJ89NUtGgnFr529qoFcm24KAFitHDJkpDeEqKMDT4cgbmMyFZ85xxR8gsMg",
  "key34": "4yw6DPa2ZdWaHbMxLvCHRtCZgJRQoPR2bphbJjKC6uuNT6H8BrGthhXHuNWUh93b9pHAqFoQPs7ecYohUDfJBvJw",
  "key35": "45UnDjHFyddqhrTofFgqwDx7x7T1AJ5tajJJb6MKAAc5YXTchQxdrnDQwqPDAy42csgD5UpFcLLPVaVunHvFMJA2",
  "key36": "4UHUQ8g41Gmys1PfyhN9WGXwEsy18aurc7KfKVXQku5qbAqoEgXABeTv7XoH7skeU4mQ63Bx76DZt5ZqW1xVwa4G",
  "key37": "2uzaHoFh7UxqEwcP72MLfa7aZaMPBrvYcVnVdRwPeBHkUB3bMkJmPk55reQEbd3SW2FUACNbCYvoXTRijURGZP8Z",
  "key38": "4gU1RwrNWLwHsjD7yrEUobunWnPczVFBPAVwkZHbLjbr5akLRCa4o9p4FMmeCWBsHzgnKicyzee1oSVYWmQh2hVR",
  "key39": "2jyZtq5SDZr1MyHuRWx45fgQLLGboqKtn9yrJEfKRAu9wEDej4S75sbDmxFFtfcMwWfS8PPFSCNw5i98dcawD4Ja",
  "key40": "2c4uwzVffTYFB6fCaEE9urU7etiEjS6NL7Gotmo5FadyaoEaFjFFU9VKhar1Y3eBTG2tQt1M9BPX2uk4haK9m8Ln",
  "key41": "2C5MwGBK4QECq3B58k9qMWfLbEEnvQNbu3uXftG1p8aV7ckRCYQiskyrHqdfApc3zf1Nttiyvv4WmAxhTW5r1eEy",
  "key42": "3srrWAKt9CwPxYHYfsmL6Yu5rUc33cUiCuERD1Smo3xa52KtNqRyXwuxMgnbHrVwAXxbaoML9wArgtMGpz5PsbVR"
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
