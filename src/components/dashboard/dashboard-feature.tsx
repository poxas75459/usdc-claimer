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
    "425tk5t63YhNE9u6roMMu7oFn3nqGWS5eHdCG1aKyxjA95HSFbS47PhZ7N6yG21wky6Rvd5utVkDDhB36GoYaoUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1iWpfx2S6wdkkTfsZBwnEBde4TjkCS7aA4GoYbyBSXNwSJYLp5MHqN3cpgM7FPpq3bQyh7BgAza2HbtUS39CgC",
  "key1": "2DzfdqLfJcwD3cKSuLRkTXW3ZfqJewSV4zRYsVtisdLoKV8bcyoDxfmqQwrJMK947nesFP5ug5K3XYsUZajhnFT5",
  "key2": "JtAbV9F9uLW2vwmVvfhVGadypo5T59bWYZmET8T2ayx5pn8FJbSi65Sw9KVHf5HpkF4ZC4VfoZ6gpyvHTui3Kwv",
  "key3": "3yW8H3teo6wKJpZdX2LMULVuLocL6fozdWvNm5Dio6axEnpPksfdoEj4zRqjn82xyapDrgTUQzy8gXaCQA5fqE8a",
  "key4": "3XfgaaAaV5yeJmEkWDKmY2V795fEHCZjRCCvLVUyaWaUCXoFJBQSZY6BMPE8PNZQrKGK2WHvTh2eBRbfECKDzMcY",
  "key5": "5pThubZkHgVFRV4LaNexHV8argMdsqL4kntX1Ux4h8EjFed7jbaiA6PbLb2m6tGxj9fNw2xcFDoysowZmB139fDq",
  "key6": "XAto7ZtBiwfynpuupapAt7WzrP6NxfVEwaLDTMy9REanLhgjwT8N7EinyHJZQwc6f8QUQWJ71YrZKPrxCeRK16q",
  "key7": "kYWs8JGrErNZMX74mX8m4odgcPMitpudd3usfsmLZq2EHsDZzzjTCb54cm47bJHwjrL7i7WdyahVup53yF7XvFk",
  "key8": "2B9CYyoiKcgX4k9AcWJite8DukG7kzTKXacZj1kdV2ZbSGi6Kn32XEkNGoQpuqZjGLSuiCH5CAoWSdcuzg7cuyCQ",
  "key9": "5YG7QaXhNbJS1PkMR8btzecosqm32heEuUyr5RiN8rJvE6dJZEC1zqyn5RW1waCaeMWMCcqkM4f2qWxoJ8UnrkmW",
  "key10": "5jUtDPDDWgmMve7fco9jfPnqZZNftk1iYv3Dgkn4YxweNdnhhLrD9U8c6t9bZtLz3TDraQfK9xFmtvVdTCFpJ9uJ",
  "key11": "3NbotTWuCm8e4Yh1tajq4mZtnnfgcjTHD1HsFaHYwQocD5z8FuwtSjgtbXNunAnyskKYzYz11Te8uw3thBx6s96W",
  "key12": "3JEhWPEeVQcK7PiF4N3LcARn2kvYY5ozxgKSSXUkcFK7JqHhSyuSG6u3SbapwFYJwpL3aM1d25wpCb4jvJENyWU3",
  "key13": "ZC5ebsEj3zei1AjGvXdCo59x9xh24phRG7eDjZZMWonWPvmF998Dpv6sDTH1osSGx2xvqoNRczsHvePoMvGG73z",
  "key14": "QrcqJyZVmCz6hQ8nDQwnA3xiMt9HC3CD29ARjVQr4MBRgmAELucsxaB4nDTXT644rbZ1UAgZk1MUumiMAhoVdHJ",
  "key15": "ZucjHUcK37gqLPEV9mufiqTHtDcnX2H6ysjUH5jmp2tDUdJZZ1QAG7c5cX9nJj8XpRixdnLLAT5njUP8BJhyWFd",
  "key16": "3Ccu3ymNKtaFH8BgA1proq7tqRcrFqahP8Xb3K13a2Zzh87D4QBt9CUY3YgaiCwEu69Ey81HdPbCF68QyCJq3iRN",
  "key17": "5Z8Nh1EWmDEEv4FDh1SiEtFzA6xyKaqjgkVXLDgzyi9F2FjdV7qntkPPdZCrRKjpJgLZHJwGv1EFEvqZT6gDZN5h",
  "key18": "bDDCM7ftqi6MEnauJeveD3oak3LpsFQ7vqq7bho2RoyjHKhKLD2H4GWM6itbREhFa2KukzhXmXXNfkScS4qw9xq",
  "key19": "3yRtZNusCH1dHAFHUKacxDW6YB2bJo88BMJmds2R4jJmUG9LVn7U4PviHU2jivCEBwim7Fwof6ntf921oZuxpjRH",
  "key20": "5xWDZCULwYsxzkCQ98mydt6iSXtc95rPrp7FUj5RApQJXnXCmr5SBeLL82LBAAYVPbFnDEK1SuV3jbYqLSdwKnMV",
  "key21": "gRsCxJsKXVipwTPXudmfLFv29mwEnN3qwEQ9nVk6xKMSsoqr2w42DKTyduhtFPzX3W74o6J9AkhcfWTEc9wf8S3",
  "key22": "VuyF3RoBd5BePxuwYcjnwDF9GDWVTVbVbMe9HrpD9Xrgoa6wnLT5RaZoti8i132YL7wcDxHVTyWVjYmWvDJx6Xq",
  "key23": "2bAxdMppyJJSxPeFDQ26B3aY9BCz3mrBso4g7miT1GB2bPiPTK2QPWrmHh1ELZeb9npPbqHYxuFhvX9bZMJpxrhu",
  "key24": "NjA16mSK1KWC8ahcPvDLdc6iWsGTRcgfjsqCYTo4KXDcxEhuXD5mP2VS6Mq7a1sC45S9D9VUw6d9iKRQju3gMH7",
  "key25": "5Yy6Xr2EGZrEx2xaDiMxqvGXikXeNYvm6hVvq2YSTCHiPsNdASJJRnvQxLTBcjdQXNCRJQ2bkTf6kk8iwo6wk1yT",
  "key26": "hKSnVwXvgLVqjVtG4u2MP4UUNzGFbY1V1qDt9YMTUtLA3WPXV2UMt7kPXb3c9H5kKrsqK7ZZY8EnjHE2bBB9URN",
  "key27": "5Ffz5inGuTA3eNMY4yJKSwRd3ftnczGsjLJYUy99csaN7SovLUkNSGMzYNuX9xBQNbBvvdNYa789PpAbHMgjpzZL",
  "key28": "N5vNv8vRToLgSoG6gKvVEtE6P9vZ9CdRfhdhWT5zoJVgKAtissqBsXTzJTnuk46YR3TKtgxz5DZmYXKrkuQHCsp",
  "key29": "2RhQrgmdodGdL5Fa3LaGTNrsZktvWsrUBWvdtpnRaodj8JztEUwgv53AXAzyXduequwY34fuC8ceddsBaLG3yHLg",
  "key30": "84UZJhWXgU4vqBWTZkQbqL9okNWBnvhtqUzbgehbL2bqUm6iDAbUSRrimn925ajgqLP3ZoJf5cVCV1pN7G6CaUP",
  "key31": "2HxS9jXRBhFzuDKasfoTkwukt3dL5jD4diPxaFoPj1Me9Q47ySsfsHW9MoWp9XEbFhXXV4AWQFpsHTVmUEo94FDk",
  "key32": "iCjc2krpHK5tNGoSU8mhjhR6HuCsvfegz7eb3U9AwmXK25cCmPbKahHYZpJiJwkXMN4okCiEkBhBQX1y491sVYA",
  "key33": "3UGsqG3ciVoju4Nbs7HtUKFyuksQAjjKwa75fLsUXjPD4Fpvbndsfo89c2yUH3zzXHBPa7m5etxbow6hLkQs7LHd",
  "key34": "2tLC72sYedBkNCvNijPXjS23UKbbwTQUgPtLw63ZWiZJeUMfmknwgLe5Kb8ABLw1Le4aVRgbcZwxL7z3e8CGsipU",
  "key35": "5KL5QmsW6zcTzMnHCKN3PdpuiE74LyVLTSksio4uUW8GJYPJ8MiwkjfF6XUpFKo53dkHue77exzZWiBATDASsYNo",
  "key36": "349omYhbo9Py7YQsixho2NSrK6aNv7LRGa7MPbTgtrmTjyoZ5guzgRuT17HGveiRZ8GGSh3Evf6toyXg54SNDRvd",
  "key37": "DPJe6JJsDByYeBDMvK4HeiEEyjVRTrjebRDz1LLz37DM3MkLBfScWJx6v2iaybXd48Ta7gMVqdoZxcKaVoCJhDt",
  "key38": "27WjrPLTVpWNvdJk85AscPQCuGWys4otj4GcU1H2d9TyAq7FPD7a7Qz9dFn5zL2qDvqr8oRdrFnLzqpnEJfP4xTP",
  "key39": "GdX6vwB2WwBjwfYvppUr8z5v5X3aaV2YHHeFfBMPJAgHSx6ZYjqJoKGTfqdyoudHBYYAWNyiZoAqTCMAgkpfNST",
  "key40": "Pkq9xgP3jC2ks9gE4ooNDrj7Vxyk5FoF5jjMh4dpqb8yTVWgEnUqi59XtRshyR8eXNu57f4Xq9Y1rAmidytisXM",
  "key41": "2eFuZxWg4Gof1SaxcmeSAviSxXsHjnD9iF5Xgrq3fgc4bQnm5mqZn43rnGLU2p66kDkDnDZB52mG1VqP3uyEDhST",
  "key42": "2WCaQYekarsLsdzHSY7SqNoeDAz5khVyBpLAc6FfthK8KcQFPi4Wi1BCnZsZxGXzX4ECoPvNcfipfzimC9v8RqRG",
  "key43": "1B7zaiKf3reZTWTgXcujyCF6Qf2Q42PPwsfWyTUynEkzEZR2vM2W9QdcHPgdSBksG47VSbfzMgH79mDRy4kEWnz",
  "key44": "2Y8urNq2CDSoLaagCxbrpDZc46EAi4bWHjPaSumDXSxuozabHEmYn5jCoE9r811ZtiXWb1mpxdeZRVXh6LX15CVa"
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
