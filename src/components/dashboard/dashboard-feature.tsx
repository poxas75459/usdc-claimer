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
    "sED3ZYPGuabmg2i91wMKfESPGrWtkzvJa2GoMuFJnZVJM2iNTXz686Uk78kRUTQGopDsyqSQGpWTNRJMNHYKjDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254b8TZV9wKAwJ2qd5jER8x1t3i9F1Cj3rtmfosHsEbgHoXHLSmWxcGNbm9JyZx6DDB7C5XmUVEvHtvND8WzRS2p",
  "key1": "2FVFU4USxeVM12r1nBxsjjwZ3PxkgAgwN2DwUQ4Zmn91Hp22Azjfc6VThPz4PrHKz9i6Aihcyb8qvHi7z7eMmgK6",
  "key2": "4Gjc4Y2qiK6enNWYUk6AfdhcqnSd44GX5rMmXdhyWBpvAwc3yYvsr5tSYfuqJiygbpFTM9vfTcS1iyygGJ1AJ68P",
  "key3": "2HhMsodPFmaBb3TRoFCNtf8xVhXLSGvkPXUhfoTH59KGSinCmSWBZ5jyxiHNVnFK3BV4GEYro8EnL4tWEGobfBrf",
  "key4": "hdBB8ofvU55xPRJov2oc1C3C9D9Y1gavLsihWTCsfNJSqyFNxdua8hKUJKia1rLgo9NWPkwNyL52sx2WCihSGKR",
  "key5": "583vD4axd8Jyy1u9ebqqfZscjwKycS4ZaEbCJ8iDRqTVxz9mfsKPYMQmXS6FLULhCdQkQv8Qqk4FQTa5FjWAxW4w",
  "key6": "4QhPK5VaBZxrDdFSgRMYDaVsGJMik2DwsQfDSStrS3ZiTEuLryLESUtZnDHenXyG8VUua697tVig7mEqAi8hwEuh",
  "key7": "62aYVisTQwmeeqJXgWKJgB1oB3jBnY1FCAue4EHHg1pVxpe7G8KcS3Sgg3xGmEtGQKAZpShereZ3MAL5xbYLh2RF",
  "key8": "5JmHVhuFkfWjxkVFfbRx6UKNxAmfSduoDs73wXr3mQ23b6PbAwzAMaExYH5ZBFPaBaR6BYrAXbbDfEHmPZk5m6Xj",
  "key9": "5AHA9j8NkLSfntk7oEtBJsAgaXDzasrfW8L67eq2yWV8i1osMdfjcoRUo4SLhqqQDAHry8ZQiujmjWAZMHf5sbLP",
  "key10": "3Vwv1SpBaizqTSq2LeutEcn8EmzSJKir3qUL7hJKBiNx6FBA8MgjMyF7rsAmMunVErnsfSH5LUQFFyEaGVucLtQW",
  "key11": "2a4U5m5RJJuhSN8VWqJigs1TVdzwtPHXF4w2DUmd8W3pdXxkebVbsnHv1dWA3CSLf2UJa1fNCxWvdzJy4qWpqJvL",
  "key12": "5s1vnzAXuHu9ZLY9KEQUUAT82CaoHqRHz9jEZFjmW9g8A3Jcn41xtPwW6gaiqMeGrfFE4FyiW5SUPMXrsr6fQQZc",
  "key13": "EcMRBVS4sv9SE4kNUmkwsRHLhMj3WxE7wnkdKDevwBwLkdGkPhKrbzYnhqHQKaacT8y3YERxxHn9c1ffLzzhYxf",
  "key14": "5H3bCz2qHQhwzTthyUam5LHxXoAgD3ePhhbuv31cM6VR5DZti2FDVwJn6Syv7wrGWurJbPDgmnMEGagFkcfTTaCh",
  "key15": "5mz9xrUPiqC48jyuraP5sXtQShMZxZTJS67wd5hHSmzkdReEGsoku76W31oW9m9asCqHa53Rct5me6SRH1RXqywy",
  "key16": "3nETFnved3sNaDcjSQQHnivgosgcF1FXj2ykHRUrahazkbmriic1Eqmq2VuPrJAYzZw4bPnNzGBon6PXyQqxnsgL",
  "key17": "67SmkfXukHK68nUwaXNw2iP6KK4NB5XzySHy55Dc1APJ5cyQHS9DmtcdxCDgTbVSmwy8zKir34uS56CsYfLW5HTS",
  "key18": "3MXSJAWm5HFeZaLzLZrQRDAVipsSwxDjsH66w6Q5J1GQnkSDhJr3nz82HaTJdrmbpEcG1M8tHcJ1PFHQxY5QrVGt",
  "key19": "2iVAVThHrWNxXnhDEtv1iRazKtoj2DyH1wrqA7u8UAvEGknXKNoB4jFWLuFrG4F6x8f6ETdvMRsj5dqmF7MzQaRM",
  "key20": "4FB8qhwBdCUTFdJENkcgL9fz4yLoFMQt3X62U6KdMYJz8ujvrFP1n9SwTyNbErVn9XmQCCt8ZAKwyoc4TDc1uX8G",
  "key21": "3ZeaBfkGvvSL9MvxwLP5MxyP7ZCVwJ9YhdrtmzjvNRj4JR3PdrYwjV4NQzpdgChjTmzMtHib3RXdHCv3Ed7hVHzz",
  "key22": "5juyRnuhQMfK4QaDVWeHUWJuqEik6Yy9iC74JrmmDTuNGbwekXNRep4Lcxn5w1ApK9aVXHieTPZgCZaDx8c2LzRi",
  "key23": "oPix4Wp8R26hZP2EopmfVMSjRLxMQaQqCnnjCLRUF85eXE9EVupyE9EgeAiKG5ZxbXr633F2sbkoY6QbsqpjpfK",
  "key24": "513f7w1sg9reaDiczVVLRSKb2AmJ5icCQkMji4MzkfxXQwxuYShUZggdxdcwEDZV9TVJJaSrhohwwS94KWnjB7un",
  "key25": "4gxTRbhUPQ3wUvi4N9yY6X5FFwn4KcvGfhSohiRcL4wbw4RWLRcvdJitmpq9bB6xMnof1NY9s7YzcYmNe2UCfxeP",
  "key26": "2PkhfazdUaEci187XqqYasntE3KTrn61DWWtDPD1GZpMQbuS7M8Ezqmh1oKmuaXMc2wQTea8VM4wAPbC3J1XzWW8",
  "key27": "3WRt9AvJ9KXcsAEURQzgiaPcggXsUtYfJpzp8DyxPETmJZ5giTJj4XDehyA8USATfawBHYU4poza75hZ3hC5j7Q6",
  "key28": "4G2Nu737RuGQvJabXcucc8UNUdHqVdSACEKdbRUVqjxXYt27tNHC1HFyMuXHh11Bye8KP7GkVu4XMUMGjb5f7kFd",
  "key29": "FzjFx4dNZXRQgTw8Lxr3xfAi48ffLtzJCmkVYUUPbUqX1gJoE59ncDBh1yf67PcPeogXueU3mV2zT83EVYqt1Nh",
  "key30": "2bPk1wUzEDYjfGetNXhWsNQZWhBRxzwstEbSKcDfuGLqb1oB6um7gHEd51VT4Tf3F92q7x8TQPHbtcgrHe2npfNk",
  "key31": "39qMz6oXkqQKXsfnkYemACxU4f4YeyoB9rUudzYojPvaaUXtpntHehPP5PVWTzUf36JF4PHtQVARLFiwKoonDF9M",
  "key32": "DQzqSgTp6NamWhH8v4q5nfw11pCpywuhM7feKyRsJNBi9PL3huQqznDgPiH2akovS1ReaNGACwjYm6gPKbyn826"
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
