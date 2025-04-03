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
    "55Rr4aXtisKqhQ196HEVXvuhnmwBHjd3bQBfCDMxsdbVTBWsQA7AaH343fQdM6ipCbbbZvm8VS8haLDx4fHTnoo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmmjwXQsoHjE1QofHarq6Cvj2yRuK7XnB5LqSeqsTZFRMvgA8Zxb822VLRz8JVoiMPAHp1rNg1EM7vQRyjP3emg",
  "key1": "2TobHT5tij789mem9aYfc2ZR7ahJ8yh6xeiNHjYXeBTitiFsqBPsXCo9UeptrXeg27GE8Kf6QQ76mWZPqcbuKH73",
  "key2": "L3hWaxM69qtsPyzpcMAjUYuVDmFAKen3Dn4xR2AUYaeKpA5svd7SL8LsiLVG2a3M5R7x8i6RsopZFGhCjcbMBTh",
  "key3": "5aquasbYKqfhwXSjp4YJKFUjQFH7v2Coopqx92vM5i59CLjgFd1vQnsJDPrnY88RG42Fz9CUvnDWi2wLpy7VgBL5",
  "key4": "5ifC8D8neYaoygVqY6wVFptT7LR7zY7z1YZp5GbADRted1HyVkZ94mqfrYPdX61hHAob4MX1pgp1wrRozsLHQX6e",
  "key5": "66jCYiMnh2r9W7Aqpdfrenx93mCm64j6hmQQGgnBL2bygRGTYT2MarsEug1J9DxbhcXFpqkSwYPZnyHpdQG2Beky",
  "key6": "4i7NKjRtypbuzZT7xxpFHbGvKuLquvovBjDGipfLF1CNwCf6JQzjmDppaYnJEnCpchGZVUTxuw6j9CogyniiKfpt",
  "key7": "WWGXHXVs3UaBG8dzdBsrhLno6SNkn6a8mcaSnr6WxMQAJUk5wBsJMdxCAiDnAeS4uSWPUz7C7Xu6nHesqchH4zB",
  "key8": "2qGyahsvZ9UAkZUEhT9t8Tu5btfQJfWSWtub44XyT2DoXHumAxSsDr5XokbVs1bedX76hwZHzgPHv22Yj8jYdTT1",
  "key9": "4DqFDbrFJHodJq6KqBjxR6wg7PeyPSjx2tdfP82HcYjg823w6oqe4wFM3ED7LRu1FhPzgNER2rTNZCzKL6bkwX2Z",
  "key10": "55NGzHRKyyaimCFLLGeNckjKr7AFxNrCVLBTr651ARPbu5Kvec1mMDphQbJwj7tabzZVr2G7vLFf9ZU8uPiyNH6a",
  "key11": "5gQjN4Tb3b1SrvSiE7LEM2KvN7FU14HjAfrksNYvEKWwxae2xZCY9xiLG4Fs4qL1XtHHNsNnMRD1wr9a44dveqGq",
  "key12": "r6Qp4vrAatDuKCsQQrWiY395So1oPJKW87ttAk3qYWdQTjwLqEcFkUt2RJoUzVJaqtiNuRD63T3FHMJxk2zQRYX",
  "key13": "34NPWqUYbTtHNAgyhgDg5fRoiZ8D4pETAijpnsmW1LGE5STkticV76XW15FWAq9VncaJr3h6tSgowMeCDLiCLFnS",
  "key14": "3naNMzJ6HM1SkZv6oPqwwTxRXnFZSJSTyEzRvFSzuqwTDL2GRN8EQSSFW5xzPap5Gi5dhH4fykw6JbdE4hefRJU5",
  "key15": "2anwTeaJAcunQacSRGtoUDZQg4Tf1zVjFRPYXXZUZcKMpHDnhdmjzGu2n3TR1ePbhgwNfCkuWpkZnFsaNtDM5Rit",
  "key16": "2gk15xZQamqcWp7YVVDwynpkN7wcxoARFBMhkEjk9kX5aQst4Mfk84uEoCwm1HEm4iLvoHdhqqpfwen5reTYHStY",
  "key17": "3Yh5mvtYw8ohTXh5xmLYMEk4ewR8ZjoFZd8CKGpinLtd2R6VhPhDaHyf6GfkhQD8MBtjjg84TVdobU5E2SkFA1jJ",
  "key18": "5SEfkJVXgevGREdyw2XigujnNZX3YiSvr9QiKvTuQCxpxFMkC3mwiMuxNF9J25aETPiS3g7YzgDRyrvGm1e8bD5v",
  "key19": "42escuC6YSu58Qzyk8ayDY8JoGEZdPvaLoFsfAo9bxZLQx6TcVsdpU2MCpyTAKr1bDKETKmNZwmYHyfVXR9cdpGU",
  "key20": "2vTQRuaUFQB6foPktZkEVHZ7oxHNXir4Vz2dPmWHm1fniPAQM7GBgsdtGoUBe1HA9QrSvot69aAhe5zX1A6K22V1",
  "key21": "2kHTo55x5HB8hSe773rXZL7drKoEAAJkyVCvS8Tiepxz51pPNBPtjCPhvrZQG9qFuheX12PRK28bZjZvtLU63EjE",
  "key22": "5JhxTt84nTscdNPVExiL4cVi7MD8TtRMNvyiqPE69zpB7Xxzso9EwKvDbDuFi94rpaU8ewEnNxpjLLDUnuC9CJXj",
  "key23": "5Rd1FYBCqb2kfDKtZgwcUar5Y8uT6WaR4W5AaSuZnwGt4GzCu3hBjhCXtYUrPB8EtyBR6gfTFxXezg9oXFD1Ci9e",
  "key24": "3ZFcR2zEA3QZm8SfoPNWuJez1VbCc6P7RjZ99hUc3SV86vhc2njswNfvQjMFfqhAtxY4fRhJmN8QLtQGsZFk631S",
  "key25": "4WYSjqwx7URqFz1CLP7eQd89pBETuMajuFNX2KNUS66SozaNPxyEztCvD6YqqGAWX7Fecz99tmHe7pYXCp6RFgZu",
  "key26": "4GywkV1rVMzaexWogcz1hTEaMFqywmsQsc5kCVnEeuisVWsx8STEBxDNLuzwZsx7sL9CNoG8sz6vNP6ip6WiqeXc",
  "key27": "3fA9kpfPVyX5KwR81nF3P1TuwaoTe85p5x8WgR6vU69KiZe7tQySLgY9ownrW3WoFiYyTxCvuoqbiAa7wWan5YJ4",
  "key28": "4oh6jv6HhWQW4FFq9mNDpmtcTwLQKp56SDLe4c61G16L2ezi41DGQTm7GTCM8B56ZuDejrgXPuqMm1U2RpJPUasJ",
  "key29": "2ZQPydWUNAMee5ePqDZgHLtJb8vWi5a2bbfTE6zYecNc9mpx1eQqAmEZ34L8ayDDwPNzZQ9c26XLUZDPLaSp9bKW",
  "key30": "iXmMTfePGm2wyYK6H4C5V9PkmZHBRm3CXhLueN44rtwuddbuqNddV73FMmyaEDUxqk1rDNpQaxd5iB2xsW93i7E",
  "key31": "3ZHU9QRbGrtW7hd2u8V2PkLSHJ4u2jFBdjRR2wuCTdyGdgeghK4BPhvfp4L6rH9ApThkuv9y6XesRCd7PhCkW9mX",
  "key32": "3ofu2ZMzTuUDQVWote5muW3vuSEENHvTJ2VawMy9ZKhZtgCRP1JNA4e2ws1RtdJMTvJYwFvjXh4A3croMgq41nF2",
  "key33": "5GRjfnsWHWepj5L5ywngFCRxRtBjEMzAUZ5yk1Gx1UrYRjz9m4q6kSG8dccqjiSXB9XGmWu6awKVS9j1Hf4Vu1Hb"
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
