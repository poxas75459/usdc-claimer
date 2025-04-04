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
    "44qADU5uqjRLbUpHrtQUgEfdYUU8P4hWDcpWbHNXQhmizR1AtzPHtTuLUrhrZhGrsoWzB5yTvk8db4x3LAGZTEw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wa32Cj9cLbn7ai9vmHTF8PLJxi5qaFsV2wce43GwDV9u12WCa1r3WjdQuE2NcxNWNUZnrQegSUnpGrvA8HGcBz2",
  "key1": "ZdeANJKn7HEjb3Hs1oULNZHxqiEb65gC6yG7ctUHiayTAQPRUqiRCKBeRZ85STZtKJYTV66xwoHzbhGEijU1HYw",
  "key2": "4AuA6f3EdAnyPJi8exAg513U69zXz1DkBpqfqMWNNS2YXmkrsTDC2gwBH8SU5SR347hLrZAfdFyfzfBePYk2a9jF",
  "key3": "33FJduLTQeqZtbMkbqr3umBDxv8tgf5agasc4tkk24ySHkK2Z7GKqP2CyyCC3mkQurpCQDus4kTqirjS9BNB6ujF",
  "key4": "E9RuXg7zNrXRFDrLCsFxXP9vvw1WURwAFe2AUqZx9J5W95K5YefVNQ1uR5FgmvSPTkaLGqaLAKzHVp4PdMmzk1r",
  "key5": "3kyMD9tSdvFTxJEEqxt2Y8X43TtzvKFMdTkzWkVCvgS8SVtyo5fT1aiVoAfqk45fhLfr7Z3poDEtkUo3Z8vGSdbx",
  "key6": "5bnGQaBp153fx4pj7G7TJtkAzLfSGESs2mHC6Cin3zKwYHBT25Ph1qwHcxERaXFy1hjqvmXDUmR6SeWvPP5y2NTs",
  "key7": "3n6RrXHH3CSsvbiyrQiQvRf46HwMPUcLJEANx3pYmSZkmkHwNZKmweZBKQogHB1p5EkLfPN8vztZQaCawTdHVzQx",
  "key8": "2P1cLkDdZkjeNUyKiSPnXJsuku3SQxoNnKtSZ65tcUFyFdqj36zxgmefYdjpBhKHUDzpyaBC7RLNjkXDh3D7sP7Q",
  "key9": "WVu9c2zrYd51FxAiLfoPhDxUU1nkuJ6JwcttdfuoUmyXa8jzFBgMuY47cB9k5tY2LpFEx341ehHFR2hTRMtB1sf",
  "key10": "2ht4QMTHgKBqhs8JTamy4P1VqpopLk9KY9qQv9XzigWWnVrs8CS2ZZcuUH5yRw54sKXj24vExrdozyiiGTvivSr2",
  "key11": "5Kasf5pZZhq48rUM79rA5nKvWPuCGpTp5h6C62EGfYmxBKzhq6wp1WRUK7Q47GT2KLARrQiEmPG19wBwMH3TMxLR",
  "key12": "2z4PiK6Z41RhaVuEqJbzbXhtQFGmPkQHLVERnCBT1ytmwjXXuCG9qfDgeuTPkJV4JBrw7nzqN7MiapA5NAGqeFqZ",
  "key13": "4bS6pq7rqLNWcxUviP7RAifB8gbs4UZtdWbV1eQKQ3BBznRsxZzgKfDTVXLwHxMk5DWXvrYrrca2VsK2LTXFu8xE",
  "key14": "sGiJaEx7QaFB9wxeovmmZFTr7Y46Uk7GfJsg39CdVgKSxC3wbx42Zzw4qr4XJd4ARzhjvMePmjteRrYphEU2zLH",
  "key15": "4aMT6PyHFq5qZGLn5Q4hZ4KjcJjq4TcwxpaSSQ2jDgVHQcmjumnyUByvSa6VckvZYD5wngQRiWngVbkSu5c8DNff",
  "key16": "5ZFRL3bq71o2FveDcXWk7Y1Qp5L4PCYsyL4qCTM4txHb7Y9DyZqaBwu8i25zX21AnNfsgYYpCbzTUasM1YCnEU7C",
  "key17": "2GLDk2rifXn7FtV2ztTewKAwLRbAdByioqpSYSKtQ1QYPsPWsmSeAznNHHXFWxYPxS6vZcpr7BSLr2Kmub7C2cSt",
  "key18": "62LrC5ifeWBSK5bmmDBcoLi373vESc1iZiGkL5ZKwGPAycnzU57ne1m9jfkx6kmuUyupVe1TV7u9cAYo5vSvSSuk",
  "key19": "2pbSDKYSfVAJ1uwtVTjhKCdUpt1XUEar388RAqRSyUmnDAEBJv8SjQBpnMNqhF1ADsj6mFQzSUFCZLJHpSRAeXa8",
  "key20": "235EwqAjF3MhSvvzm66W9UAqjncGrAfnfK31TmW4HMFdssBWEM1WJUgoRpxQBK6FALbdreho2jkZrvrShCR3cbwX",
  "key21": "592ApDRqeXPBEDNtXGam9DLg2X9En9v7AvnPPj9BJDN352g2cAHVEfKc6UqbiaoW3Tg3aWVtZKcbiW558PmdbBa7",
  "key22": "4nh5rbaxAWfNtKTCopqAbzjBnXtHYc1vE27f21aJZMx3Ey3msVZZYchJLNyxziokvEFGF4ydKuaiz1DxazWUFhH5",
  "key23": "4uK7a6Q3oH6fyTjujYeDgycWYH2peMNjTYaiw3o4eqR6XEP5n625HAeVptSdmXdQtdJzf1PeiiZvk33E5KTaaCbe",
  "key24": "4emHhsb3iUCQzwRsF58pxeFD9znK2FDTqt9kVQoo4mqddp1es85pFA1gaRhsztWrHyiBXfdNA1JnjpouGUPyatnS",
  "key25": "5fYjcp2kqCXK6y8codsGdDhiqmhNNFU84TQSY3YB7ZYKR7HDCbSKgs9HFHjUgL5wytTtjKpCtrqQSxP9Wj618kNX",
  "key26": "2T8utWSTq9RRdYwmpySTT7vS2UkBRaZwfSTUrKMV7Nd3PjTNZzrb2M9XYTxfE5u3dQTrwZiVag5Z6CVFECYJNtGK",
  "key27": "HGZ1sdt5KUCm8KKJ1uCUZUqPQtAj59RNmGWGRkLB7USzFgLtBqjJy9zRvcmtgcxr8RawhK1LVfetkcrT1vMYFZA",
  "key28": "33euXWBkH9uScDaXRXm9DNZBww4HmdgQLTmAwWo5EcdZXWyfsECdYoX8QvCxKPkZkaPkM46rARWjckiFFo3ett8z",
  "key29": "5oycjzwHGa935FGEHbw4ei5ZLbxmsXcYk8JteQkqGTyy7ckEs8CwXq1sNLntukbPEwq3j3ec9ZNETyR2kd5KcZh9",
  "key30": "3d1q4s1Tsi2uDkb8LYB4j4dLC737vvbE6zDNXi2dkWhcbjrsYSpG46Dv7qfNY77ACkiThHnFb9bbjdwkFU9rtn7S",
  "key31": "2fuMZveCnxR9DJTfbD4PTsRozYHgx6p6vDNmrqh5DP3a52c5s9rLnabCR6S5PM293ghxq8gHeEMd9zMDUwhJG1gU",
  "key32": "5efURuEtMbkuNQydycohpKmcDBsRBisXj235qq6J5R4seuB3uYcgyR2LdhtdVhFhywhig5u8MsFRGzqPXMrgTxbn"
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
