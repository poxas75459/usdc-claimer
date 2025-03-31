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
    "5RX3oZg7czGCWiG2aT4V5xccJz1TTaQtcZwHEBtA4SzsfndHDBabt3gbqyw4vjXbmWuJfZ71KpoKmLLaw8UpW3zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26KsPMYPuLoRJ7eTf3ZBpsZWxiFUuKom6K7Y6Bw7RLeQgbsyJAbVq2dBG9iaV5LUKS1S5FvF8wYptux4pWMgWfQz",
  "key1": "4H78H76aA4N5A3Zmu78iKSFgZjq5CGAHcWTgGjLX5uqAZiuRZBohQopb1cvczjdTZWj5NFXZgY4DTsnEZfjKxje4",
  "key2": "5WmfaYuCBwsi5YcVXYSV1vcErzvCc34JqvwLnSymwQMM48hBW5964XZXJguo5nKEn7aTn4KwQG15zu5Pewzkq3Wn",
  "key3": "4z6cuPr1chZwD7kE2LNXyACT5f1CTTvXmALryBFF7aKFZ8PLzq34vuMsS4i9hBzCbu4viJATiFRKQ3vFdCiuA5GN",
  "key4": "2MXoNbQvAZvs9iLp697EPbjL3vXcr1B9bQkxa8cALwPsJ2Q7cHgswc4hacWC8Y2iMrKiHFFYvqtTph6yG5ftH8Cp",
  "key5": "2wvqakSDUVVLdcfbRUP5WH8gSGmt4i9sJtfy8RdQ67T8uno8MfoScUys1sMYCUiLeg6RMXKGc3fNoy8ncLgk3BwK",
  "key6": "3GnBpRiBdFFB1fY6zCkrGM4DcEZNahtJqNvjQnQRs7jquPjcb6ZFnUs8assLTBMxnsBJj83MKvTbLn16Qaw2fnv4",
  "key7": "2zMNGv4RtSMTH85D584TnWXRn17mHPLooxsVGpVjYMCEowGAovBUgYe5DbtVuBrDWctPikTo9pmhGeDbWZDnhbBx",
  "key8": "4gpTMvz2aYpryiGfv7Z4zDmb1KXAj6MH7vQLhUx9sFnKQQj2H9QxAgghqxbVAwZbVME8BPL8V9at6ZFxeXNjvAaY",
  "key9": "64R1Q6nQ5SbeqsQDMDxPY4Pfpcmif1KPhBpcz9cjcpPs1ittNCX6T6dAk3mxoYCskrbCW9XwnChjJ7UaeCvFyWK6",
  "key10": "4TmXRNARY2reyFuSbyduoB5Seh9akNMJw9SJZDBWyfdAw5zsJAFHwDJUaSwyoC2CizGy7bqJMiS93ui97eZTfUKh",
  "key11": "2bkXow8XFQDArnYgWvsuJAsjsVLENUijkWN7JixegKdEspVmBa3Jo7LiwwPFHyEW8tNBcty4tXHeSvzqJcQFJeJF",
  "key12": "4oqWjMJEoxrSSofg1jtu83Mh292Ee6dKoYYTiBPTZotx14NxLXoSaJMMoFf9s5s491Zv5KLm49ZjCMpBji1cgyNd",
  "key13": "XSHwqTPcgHkzrKGvGAQFw2s37jvVEeysGdjsjtfKy5fnT9sPTsRdqff78socrVwz7hZ4N8sa2zsUMPWQZHTkgV4",
  "key14": "28siy1KqJ6hzKrAuNkXrG5XXmLvveWWVszzWfbesNVHoaQgP5ihgUBFFbUt4FBhbrhRMH7SCS4JTEJktmZhvenUM",
  "key15": "VuDtDzFeFsoqnq8nC1TAFrKb3WZB42s5a8RrqbcsSmxevhzFngFFsL9nKxa8zfZydA4MWFLdZz5ajefSKmmSrt4",
  "key16": "htLxFe3UTFVyPRNdJ5Z84jvGX3RBJke4TwCgpmNPBYTn9C4wTjd2KowH1mKaxKHMy6ngMKQh23GgDqA37FuKcFM",
  "key17": "GFHY1sX5wJ4hp3Spw7Bt84auTBn97Y3xFmVMibXddfSkcLDkwXFXfRFghuYV77f1BpPMaMcDoeeozJ1wXN5okEx",
  "key18": "66Ks4PywWwRXMuDfJP1XaRUDWBVtvt1BLnowVrXFxq425hc2P55FEpZWpLQwPopqcrd8FuS57s677r2GC14Vf8xZ",
  "key19": "5hyFQpDZqCUbiiPA9fVJQUkUKuzZXdiqK68yyUBCmheVEgDgWrPDW6DrALpu9HxaQhxbNZeJ8KiTMx64MaZwszWj",
  "key20": "3KSZVwpAn4t7LGgJN8AXtCqSuD4CumcKpGhRoQuqn4W54dNpM6cU7WoxHWHT1PdDHTj6nSF3ByycTzw47awW8ycQ",
  "key21": "4nf79ZnQP2cS7TsYdhEoLx21fBS46sDKecBuHMaSshbQdN1gx2nTgX1WMSCp6ENgWkK4TAVgrj4nMLBWRHzPK4Mq",
  "key22": "3cwWA8KqLtAZmPiHFBVGvownvyWatVECAh574XgsaGAYuV3QcBKkEDqUW4AuYF5PXXkcUpFBQaaJBLBhR4tws3Hm",
  "key23": "2PWYF7mMHYJQnomHux9UYGfXjjTaVhcJZeHAuWBdkgEn64aByZgYLbZnNEouppndjVo41T76YzwDY4gBkQuwaXrX",
  "key24": "5woftTFoPk6zZmvq8XZbkFjVQxErvSbLAvjMaWruYqqpsP7yopJEPKRN2uPn3xbP4CcjEUS5NBdNx1LqBnrV5q9b",
  "key25": "5M3Dbct8ZnKmEWwzB8GTX1n9ayW3pyGd2HUd5PdbxS3S5ANN5e7Xzn6vFR2hmuPZWFq4js9e5ZETMTCw5K3bo5Md",
  "key26": "3U4MEtx1LMnNwZR55i2S9FZ5XZuy8jjYUvrBACpDutuwRXvTZqqW2R4MZoTjwHqX8JX5WeLaP2AEBbb9KuKzok9S",
  "key27": "63kP4Bkk9rTW4axRiWDUwcT1p6kYzdVSLcppwFJ5JD6U7yQFZ1jGtdNghTt9LxP4u4AajzyKCLJevW1mLKG3RgNu",
  "key28": "4s5H9rW672CRJeD52rQfzQqg4v69xbbAep9fXKewrvSxdsHU2uiDGKV6DRv5L4QSWAB3b59gf35CrSgT4UC7gd4s",
  "key29": "3HBAtdQDHL6uQ3DcVV6m1kmRX97zUzM5WJbefwXU95LrffFWYj3Q9vRgfqdTRywXU53nqSAi11AEjjahEycNrnFn",
  "key30": "4RWgYpaWpUWSySSGCPo1BHQo5S1kMS5ZRQk981wiX95egY9VSLy86DumH2gMtFUYhqaiZas4qNTCE6CjJTVBQQ5Z",
  "key31": "2tuBxFcYUSpfS1Jj6sWjBwgznkKaKYT5rKDrCfx5RY1EepwTsncm7Mcyn3zDxHYQNPZFCk7h9tLN8uFcgkhnAKet",
  "key32": "2msMwnWHfHbfn7bV8NQqZe7TdbNNZuFEGAYyJ1ZtSK7uyGEQkxwLofGhDkfQeMw2vkzndeER4ihQriJ2ycf2Jo1E",
  "key33": "5pVM9CQpVyKvWiiLzL2415LZzte8jUBFxh7pQwkYT4KLsPWfQyvmQGDY9BN689mgXZCfQi9VRWxBQP2pa2h174NK",
  "key34": "4kx65MtqkoFnFLgavdkjHgppxe8Y2TCzpR5QUHWJc58P534jvruWfXPPjTuGcTc2PnuugkVMatscEiNEoaF4WfWK",
  "key35": "2EaVwjzYRn3b8DUww4jB91hPm1r72z2T1MUN1mbkVmhoDbyS3Sz8cw7ekbFRnKv47Nc6uJxA6SxVhmzny5inRccP",
  "key36": "4msgc9VrYDXoi694SkgcLaEYHR1doKg4P1kPupZyQpFQoSj1ZDGqUU572yefEb4ZR1uYpHFkYwUDVJG6KvuDQsYq",
  "key37": "5sLhXLEo8xkPYfiXWiEv6rGnFqdBm89brP2noXj1NkdkNnQBt3DwY3b9uX5paQEMxHuw2QvRRpfrRjdmfexxicG7",
  "key38": "38PhTkRJGwDRH1ora46YH18Guz5diaieN3j3ZME46LDtPffD1dtkbookzoLT3oX7xWLr9ZFyfVD2Y9uViWQCo847",
  "key39": "gwpEgZmCpVVXP9Q31wBXoFJ8Kcm5tnSf5J75VznZgfKRZq4PtJjGXjXenyrD38XArj1ZvvjaR1p6143z5yM5nxT",
  "key40": "8fkQ9NYsUiKzbmTVHJoLjt3U52om3H8PfAiLFyUcfxzZo86kEHQfCcN2hf7tB9VK2UCjKrtYvWMbaJ3Bk8E3CG6",
  "key41": "4HMZ8wFY5NemTzPQjEaH9ii4BTiDWLRTHtZrf89Wb8nDQf32x6KYrxVxyJJfheqsY5V65VCB11kA5K4FK1TTYBaN",
  "key42": "2Wyc9i4o2kXg3uNgTHYUeyCZ4vdcmmGCx3FAHwc38MbCP2h8tR9Fv8cvQaoCWDdsRDJdzvQ8UiB4JLCYAKBcpKgr",
  "key43": "32EAgeLQZiNWGQvbjKSJTq7nN7xfVe9br3MxxCFikKdncbA8vyfuy9dphm1CRkRw91qr8JEYKufJvQ8kat66aXyY",
  "key44": "32aNpQKd8NN32QCbWtk8xaQAyZZsWuX1o9ycvEATPgAvKWqFRFQiWzqYrZ9QefNDYCCa1EvspuiQY6Rtn5ow7d3r",
  "key45": "55SrM6LxrMQuX5eFccnwUL94Bd4QeXT5wnfcb28rmuhQZYTXTZXAvPFoHQ4eX5Zp9anCcn9iXCTgDdQ65CSUKEdx",
  "key46": "4PDcnAJx4NWkU9NCAkJWfGMfDzitXQAJS23dhfQhu1i5U3g3f9q7NdLXRUTVqhr9qJoJfTfTMsEwy7ivuD1hsRx5",
  "key47": "54QwbWxq2NW67A5qRNyT2Tkvhx291jXjsgetUszjFDjaquwUnVbYQAHz15iVbUyXa1wn7nLcyVoK4kzvHh8KX3aE",
  "key48": "F85yrSErrPE4JFHw53kPyUm8KAHLFQXyeRjbBLcwETTpRPycME61htCxgDmWBNeKP6cnhVcd7h9JmsrM79qXFyt",
  "key49": "5F4MEHc8QS92jqLjUfu3SWH4A9MDTSGXg3AyXCCgiiZAHUtjpVKpG3VTwMd7wxzpun1SJTksdg85CXjfe9qRZoWc"
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
