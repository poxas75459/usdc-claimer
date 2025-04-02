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
    "3whsq8GLQBs36paEqs3ea2zFv2dPD6qDjPyufc5dUC7Th6rjgp5Qs6VFiySp3jPQ4QiTK91hBTwEQdW9ZaauWtVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3kyeE1gAqqHakA47s9LGTMS3d99N4BGfMAVvHerrnkUko83n9wZZfN9TFhGDEeFmoVhfZEY3z4AdDLzsG3p3wB",
  "key1": "2R8KC9cyc28R4spHBVV9f7TuSGRzf2sqCPSiz63WcePhqD2QMtB5Wjhpir3UnDPpGcdVPUWLZi3FcdfWP5Ktn7wf",
  "key2": "zS5Q1HrVR7Gjch6TNFLtvqKUMiSqusW5kv5kq7Eser7ZAaCHYn9apQrqrsUcd4LQrUDeb5zY7SW5TH686ZrqxT4",
  "key3": "3FN3x5zXU6cqtcrXmGBgS8dFugwn6GEgiqrosJv6hr2U7Xkg9WGHMrveBG4dpbipy1CgAXbxuyKXoUfpppLfgaJ",
  "key4": "4rsfD9KfxxfuHdHGXbAaaho6vocgs8hzSaNyXFRX11RU2djT2QTsPvxGJ966EPJe4QG4ftp9hDgH311yKBYymA8V",
  "key5": "4R4q5dbxtoE83ojxMdAH3gKHjSMzFhL8HyLkdU12DQqvCKmYekU2NkKAS5B31khMMKVUuFX9QXxvxbZKktZ4vjdh",
  "key6": "4gqpaijm2Xy3tTavVevARebFB9WieWzYqzLWHiXPQekncWtW1x5zHcgWwJSLibXGmjpej6L4CBWogtZs8RSC7AmK",
  "key7": "66AT8t9KtUCff11iMhGJ4SM5uqXAGiBcLD6BrdC2Cj5EHq85W9cVNpLNTyoJehpmQt6irx5CvRhjGJPxBhqv2sEF",
  "key8": "3rzvdZAk2qmq82WzS2ZPH4oR3mcDEunBJ9a2rbr1AqJ6uE5juzt4s6Tfufr3mjiFt3ibn1AoSpjx5cNPhrvqEFHF",
  "key9": "3vW7NqL5JTaGNausivWYV5sPPNboAufgGwPCosCTPbWbF8LbxznScvEYmVXh3h2yWhWwvE2ZxNoo9XDiTinhTekn",
  "key10": "2wdQYWgFTipEFWZvn1G56oRn9gXjEYegrGajvNBg41cioEhDrxh3MPVtgpVyHX3U2u59k553pS65APnUXu4FrDtc",
  "key11": "25EZWngCch6DPym2y1965J4ee1qfGHmXdLNPFyUVGzuz2CGzwvn8LsZevwXBs8dXvuEA9j5HWh27kzX71m14uPL1",
  "key12": "59BzaHQUtHb3JwwE5SiPyXZKjHREUKNGhnBgHe7YjWXZK5rF2aNt1xofgHcEtXrzcMkMxMiYc2bEgyTbapB8XbxC",
  "key13": "4b7sv9hfugqQQFsGAgt5Dw3dk1Mrgq18BNoLosgr7zU7NG2neK4KD6nr19orhyyVJuHQDGWeABNcRbsNdXdTnhCS",
  "key14": "62J7XSoQCsQ56SnV2r4dxBLkfERxaR1mThfPCe9SLR8JHQS5NZfNxJ38cDkfo2yaMU6DkSM3thrGR1tTWtv3RdKc",
  "key15": "5NDseQPasgpiUr2CzXRsBkfzGXbXR1xhEvM8uR3CrrTAVppp4qqiEP7oX1gcQMEaSyc6C9UjXTdQgM2eWE6TZt1k",
  "key16": "3PCnYnGn4P3br9T4XmQfBQ1gRgARHJUhfGJo5SQ1Nr5rQChfmqkhowpW9emhn7773hUjAidNRebVAzr4a1WEuvJ1",
  "key17": "3fhYnyJwftkzx7MS8WxZWBHiLUCaTdGuZir6nzCqVDrJ9YtvVAbsCFCTJqckj5XBDpr3xye9cA2Btd3DCVgALV8b",
  "key18": "54Jd4ZPQmpsLo8tzrNDFKBkW2LNQhYn53e1AAg71V4qgKV1EuXGSw7ZJVGYfFeBJEycEDJYBwd76ski1EGCzT6fa",
  "key19": "36xVJKt1NgCR6KAE4fNvmNCYsUrW9aGjXFGaYcvJRhfesxvBTkNqhuLoX2bY67MvVLAsKAjd29X8XVKfxHN3sTb1",
  "key20": "43ysoyqfUAEfYPJzTgSEW5myWgX7VawjxxE9pFzGJtSyFTZ1E4sot9xRLCCvvkkYrtFszRQDhAt7x1tQg7CoBVxp",
  "key21": "35L5ctznByGwgqsb2KUGtwWdJWEr5TMx2N8MUDFzSvHLiUB1oKkHs2MjxJaZ1oqeyG2ZS8nJ78uPTu9HNgZnHcJn",
  "key22": "2GANFeaYvRFkGVNVBr2K9CLxGFTSD3yFeNeM3f42LKJ79cJ3m2cHFHDdVQcHBzF1MQYqbRGHAQy8M5pHq9myr3fW",
  "key23": "5Xr3tAoqPApqYQiu4xz7JgxVmab3eYL4ccZMpZ5QsVaoq9STh18DF8oDxV6xynhj2enqeL4Z6aueoG649dL96wBQ",
  "key24": "5dosSsXC1S6uMug7WUGtmPvf5oRV6LghgP3u11pq4EGo1MSxBYuon782mfaAqWdPbSGVXtAzeDdsab3CaG2goAb2",
  "key25": "31ayMrpyrqEMZw3sBi9TudYUymiznsV6s63qWJ551VWMGcH9THaicDeDjaon2Ka8m2UXpC9uCXZ4swhSHdDbAeHX"
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
