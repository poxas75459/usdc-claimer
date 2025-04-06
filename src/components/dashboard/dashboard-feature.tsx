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
    "275jd3DxPWX61UdfB3ESQLC3jFMF3sobkuZDBT7uTTM4ETLhoaoSc2JTcZBoi2MaTnjL6sQnYeY7xzSFcqUkgrGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Wtz1g37aMunSygZxGCZhbc9mKyacwzXwYCH99hkypK6A33osivKxYPeZdQwpERmQfTkHQh6CK2UYR4rQGREFx6",
  "key1": "567CtFVctPt6z6nf53ZnpedjoF9UbgsJbjTQQoyTBGBopLR9UGTYED4JVP38gh19t3RcH68wPyLyih54TBQhHnf1",
  "key2": "35PPCYmiKCG5dC77LjdzQ3fEbPafTjCSmytFeSHJKnzcNXwtK2MCFoRyzM9phMtWGLfMMr5q62qxWL9NavW3gdXf",
  "key3": "5WfKLWfQwkoVeekrtAiT1ZjdoguayxD33H5EeDXLWBFMcR9BbzJ8grFDMpJ3FzhCppK1zUVsDVeA4Dsx8zVfkALZ",
  "key4": "4AjMifHpGHtWxBQgfewrj5umdGRCMHqt5Ju9PoPhrWKUJkyC7aJApLomNCPk4fq3wtFSxmEyhF4daWhXe4YGgzSt",
  "key5": "4WPUcEa4JbFQhTih6ZVKfPzgYvdaWwMMiTrs9z5X6sH5wsfTeky9KfmDZmiUTbVQjqLpvPp2XUeHmexJctkMuZWN",
  "key6": "2gugeVdMkEwiqa2L7f3mnp2idZCxf8Xv3y5VvzD5RahVfLk4CyEBUxu6CQQFQTHsq2gELqtQ8dhWkh5YA6zwFeeL",
  "key7": "2uXzqcZuhmWeCto37Xvt5MCUhoATY9Ffp3CFzL4kDQDn1PPbG9CMSWmKfhobAebqFriCkW1WjiPuuRhBL1yU3uDt",
  "key8": "XxFqy5b76Dj5gZZTSUgsaN8KDHJrYRaSvY3Ruh4eCc5kg5sSFND185GDNG8v3rNjGvgJ1tx7oMfWqHJo78Cxqpv",
  "key9": "5ceLz1NAYdQ1Vkj7pr4ZoKoPmphjymd3rbrRzcHd7s6hDiYxbkmmUiB6MoBbjT9guSrRpecxfp1Qgwp6gWCBrxTa",
  "key10": "5oZadmxM7nXszXD5uMxATirTBxHgucUQSDobm4mYanbbWDFJSfxhYRyanx19c1VTFzT2TD8KEmaRoGPCsHUYEsDT",
  "key11": "5B3DS8oXtPMKZsYsnXtnVTVBtLs9eZDmE6PUnuKsCEJnkgWJko1VFqvBU1q8toAvrPzCrZnEcevNmDt5AX2NdQpz",
  "key12": "24JQ21L1pqRNDeNcCKLU9jfViwPiphEeYDM7wAzL6azXLU1ghCrPXx2owprrFGLSGBHQX7G4xyLpTLXDULwwLjkE",
  "key13": "4rh3n5oBhYA7KW5iTTBZrJvJeKTo2X5vugc9B2GuiTho5RTwLBKf3KzrybQhLWFrHNzMK3KojGK7SY6zyZ89R4v9",
  "key14": "5ycZwszMM8axpGbMhG4mhA5FWRRterq5t9f1PjKD7AyRpLJNfNJD2K7DwqURmv3HrdqGNMycbRZFZsuxvtgWDP8Z",
  "key15": "3fnNeEgwuQiLAKQPuLwXTVQyPbNN5SxowySDz8VTXA2zT4DvAapR1DZRm1fo8zf13X66MpMRRzMFFgPcA9RcH5hX",
  "key16": "3wrKbVCZa4mZ15Ytw5RtVPSbidX1LPEM6wV21jwVhtakSWw83oKdjMNwzvQfZWgX3vgne7nJKXxFmvmknT5zgwBD",
  "key17": "3YtHYQYGDLSuebD1i6v7WW3HrMnVGqkdns2g9KsoNu29F5UfwdykB2YzTfxNqQQnEUrEcSBRDwcxA7pYDgsoh71U",
  "key18": "4PdFLApxCWZv2V4aXnvQ8JZfeN896qVZ6V6BuosiJ3tmW2B5rwaWUpnyGQ7q771oWLmLu33D2SUjDrbXogVCwv4d",
  "key19": "28Gg4sJWQru4bq18BoEon218coCyPGC3BiEqdhnq3XMWgKMUoXQy5sKkrNa7XPZfxcPz2FQPQXRQTeT4QQ1zc15R",
  "key20": "526abBBPqzXJ4ZM3ckofNjDNfFeP1wK5mQdbVu2QWKM7u34v5ozr7oMvG7f3rcXJ8Gb6LkygU9uSJhnfs8MKNa1A",
  "key21": "5NqK7ZomV7FeJ65M1F9tB4y8SMsjEkVebDiHXNFHqfNHa7bGurmZSbE3XdrSQrvrSRGDwAfdsiVSnmPQ8qdGp7v2",
  "key22": "3Pj5E6X3gFi7EFSX6FgNSwBWbWqD5q2jDjtp4XWAsdECQziFxwq72xDVipH7f2kc8iodmhWpndY45FCBQff6wzcy",
  "key23": "MBAdY47LXDePVzpbrTVPxtmHcdJXsb5z2hufyTaT3EWeqNvTyw8uGshFAPsaf2D1CJ1EBMyj6CejErEXzevCETW",
  "key24": "35kTjHi4GixkYUzzNPBtpYYNgeE49YY1UuyAZtmquPoSvb1SMcrJDQ8PapAVPj8Mi48UufcJYqJ68j9thwMGXRbr",
  "key25": "58E5JaWBfh8mYGh1kxCrTbPucdrDcgK7yxmGCiM97VosRpMHGzhzFCcHb4nanDqpra5ZJK1qD4DHnePhMso1uPg9",
  "key26": "49xXW7B6bYLp144RSWYHoZy3EiVavt1NYXAkoboXpQdWQw7NZccR54pjV7nWtQk5eLnuX7EFXq4GnyfnA59SUYta",
  "key27": "4G4r9wz7pDWBZ2g9TBDvMzFNckxGLRxu9WDX67V8v1Q4YLbU8F95dFzzLQBopkwbmk7Yndq4yLMoL1meo8Xcz1h6",
  "key28": "4qMUJAqXwqC8gfN1auRd3ayLZm5L2hMSPr4vHrvBpG4PApYrbwVKggyKXjE7RbKef9ujWXtgk3aVJgorvb8JAFhT",
  "key29": "4Q6h8A3U2YaVL1ETVA7jTyPDKzNuLu9iuTdkTSyGCho9j5k4vDrcKzkujveDsPzpbWv1X1va4WnNBmnyaS2io8cW",
  "key30": "2PCJV7o2ieAha6CiWphsDZvAcS5bQwc3FsH4gUXicDZ4397CmFPdnUTfWTmZD8RxHTNTSQr1sjCQFxrk9JA2R8A9",
  "key31": "5rajva4VfYBSW7YdgsdEZTXtUbEf6SkPMd1FWaxnTYCx2ksW3G7RFGTUJFvfr5oZfKJLmM6NnduTWMraYr9Fscgc",
  "key32": "3VD9cPBbBfrR2FC4T6J5Tq7euq7TUfxaeTySWsNGbFmpvXT2zmmw51P8a5b5TmxY482kuL4YGFnJYZVmeGayMhER"
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
