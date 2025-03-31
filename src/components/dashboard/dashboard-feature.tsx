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
    "5ZVqXyaSHeLF3GycSjE1VER2snLP7n6Dtyue7tjCpDgzz8aYUBNCc4hWehqyVkP3Jm1m5Etr6V7w3gJL7Z6dSAFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4iE6cX76kdyU2tgdFDc9tp9TtSjgwLh3E4psEWkAWZ5uNG4XKEDWizdjcyNBPwmcNbszyCtinkuZpKJPPZJ4QY",
  "key1": "uxZjsaCenx4Lmz2UVzegQ3vyUxnj4F1F8tnyZKy8etTXCpAibBUnQxDLKb5CohSgrPufQJLx4vALZ16Anz5HgeN",
  "key2": "2Rq2uCgYqVHRJvDGJjPTvHmxaLpurkNojmNjiEjvkFmPUBBaANS6gcQmGn6Nug8MDeEqiPeH2Jnm5bLPEt1ChhB1",
  "key3": "arMGcvvBbsGsfAj2tVMWKzXbRC6w6VwPgK1jxrKApdW8Z6LfR3G5Gz2ATuGqRsnMiXKAuoBqasrUwMVJ37bXV4B",
  "key4": "nZjCW8kCR3r4Vvqh3agVnWXxnESido9zWqCxzpfimbX6d81ajZ9RccNWY3MdfsnX8KsDkToMSEhRsvukz2WA7wV",
  "key5": "4367PTqipSvj4czeAbgc73jh2BWcPV6uehWWssJyN9Pak7d9ni5JsNJyNcyQtBqmTmuPLAfA3ZBpFA9yQ3CHBsoD",
  "key6": "4sUjhUopu6LFobQQUnDcEQe5oU1U8iZ56DzuU1YXtE8dm36kkNT8oTfs6ci9dr4Wr9Te86CEVVp2EcecHX9hQwTJ",
  "key7": "2QzoGFwsWdSKeDMUq1xL9N1jcAFEebtns3Tx75HCkiQRDmDaEnGpu4YbP66psNSUP6a2YccD7rWDq6eByCq6gFNn",
  "key8": "4vY24e7smWysPna7EALwfgzBU9BByefqvAsWAwJx2sFA5dDwYhQSAE1kjJPV8cJnxVrFQanurmDiFTmwoNMdd5Xo",
  "key9": "2zKrfnRUK3SvxX9NZWoc9bqDLKrGRuweKqwkYYkwubJWmnW24sKSpgP1RTvui3jktX3RcfuPwCvMJ28BNw4L6KBS",
  "key10": "5D1C3vtqgo4vPz2sjjLHpH3d1PBgkj65DmFnBf4fssEp5AssCAgAeRpnDPRSFU2Hj2MCZgFvSc2jpReJuKb5WrWw",
  "key11": "61QAiUx2NuhrtaXaZYgm91SNiAApx7Pb1UmAs9SJWqWvRVzGrboKjheuPPvypBWTi4G68F3EbGw4YqtKS3zV9xnQ",
  "key12": "3igFeTwsDQ9br8fq6A29NhHUWq59WXwDXcTqUDr96EupXexyCCZLtkD6KSJaYWRYDYXie3QYZdumErvVBf4RCHCf",
  "key13": "YroPUtqw9wTZEfNFo77uvHQZwC8o582TYJyNksUVzDEMzi9uZuh9q98FayxcDRSp9kHsSvUZSK614eDdV152u2d",
  "key14": "5DFWdHexyrT1sxtuJnH7thBrZQyxUSNuWrnbVh8y8KvXZCE8i5Na49CwQySASL1uM6JENB5GWrGa5Q25MvJxV9Mw",
  "key15": "3LwJHkB5fSUrHYPSHmLVXfFM5Ekupg2MjUYtrNYXQu6nB46jUTc95afeeuCMZBUeq63gSvPWMW4GmiEujgg3KW2Q",
  "key16": "21drLXGHUut4XFjayhua7zKzXxGkVsoVGNFsUt4vQYPHb3xj4DEG4EEQZH54YvsSmbZkLG8sVkNGonWu7FQXCb1C",
  "key17": "4qC8sgbRF7ontEmusq7KyfkbpnbPaVoQUrFx7ScwTRw1LLMURVSfF8GLDtpHFDTNLeiqcWvkLZjxqAQ7x58DMtkj",
  "key18": "3b2Tdv89EaPX3Z8fKrCt5qeNwPfbgaKR9sxarB9TBShBsDiKZADFWwPW44ZmcHDrzLyYAZSSaF1chypbEJezmZ4H",
  "key19": "4cW9Zsj6Y8rhhuqaMzkuAnhbJV3xaTFtaW1NxH3dbKbux9SZ7mTzsFrhDavqwM8FwWAGVddTJKPYEbVi7KauAXUs",
  "key20": "4Db6urDJAsqcDRgUYLXtYtJh1RJTh39mesRv2z4d6Lv6wDcxC1zuk3SDKWMr53eW8jMceztATce87SNe1ijHVUjB",
  "key21": "CSAbh5Af71SevqLsKjkavSmDbhVANV46w9gzxJyBkN5dzxMpZsbft32YCpZVyHshik8AXn4hYu4mcVW3LZ8h4qY",
  "key22": "5p2i6KXBmev2aufaHLtPg28UasqjGGLycDE9wuxhu6rMFX4zQQ9PiRmoA5ujQJwvWnbTz7xNsdZVLcgX22N3KRJ9",
  "key23": "53hhcSy9Wdwc22uXeDBv9eW5izmtgHxVu7mSkFvNn2zDHfeSpUX51eoqSvNwqGJDz6Xxi7PUyJ5tkXxsobZeKUyH",
  "key24": "3TUi24w43QwfDuePVstbXkJUy5TChzXF5vJ6dDWoMMWkDG4nyyTeG6ZPxD2pbCpsXxqAwAeFDGvuA5KXeLMidN7m",
  "key25": "4XDFXwqmut2kkZ3WSVruofYjByXiS9pRYtBXqbXqCnWSdRFQjuSZsNAow6SjAxUK9916fYmpMw77S6TeMN9Zr4Wj",
  "key26": "5F857Md2KSUCHWuBzJEuJ4h9E5xLmqhqB1uivfKCV9QE5NcB7iamg5cKoDU81fjLLtxjAwUFmR3qchgT4KWRd8Tz",
  "key27": "667hGhDejLFMoReLJaqMdnu2gvGNUtmtunUoqemBvxXJCmhkQXwJzGtH6aJcfi6BA9CnCUaobbUQ74WaV8Tad3UH",
  "key28": "5E2ME9aFdWaLudgGfm1A9CCHccJAjKscEBDoYPskfrqq38biv5DL5kX2ZbpjBxZBEpo4xuwLU7RNP8e9WGvkNpM5",
  "key29": "2P8yqjrvoGzydVQZfWzSeYCxaZGB52PxFzhQYuakR3umvRBJrBbYFRtsK6aBkQhdGKrFT9Q6ZE4ArVG2Gk1gcpYR",
  "key30": "5CFiTnBE1EhRV912tQ6kYTEAQEcHiVa9z6M5h5mxNSvBXtdkiXWUQpbxjEsoqaZxpJtxMsWdkg7yk8s18YHRvFZA",
  "key31": "5EFPsAQKJBpMqDE7R9QWpXinVYUCDsJktioZQXhAgQgzKr1YXwSW8i5GwiwmfVCsdrSPHVQ3Hqg3m5fnRUi4Kwwa",
  "key32": "prLSbr34YtQW8uV64zScn48zmTbZ9wsBkkQVD2sbWnBHA7zmCkwdrJMJ8VKNGtLL2ip9xYbSAxVVMYY3NhVYQd6",
  "key33": "4UXPkrsvzWHzqp9MXXh9FAT4CgjEFfvZtbaPhpxosA6Gk6NeqgS8X4gr7huUBVK5SxV4pKvcAfJUBA35qepDb9sL",
  "key34": "3dRpF7Qf95LkqBj51817NDg4XKMbHcgxifcP9ypLVdG3dvcCwXk7TksVJa99fzugwBKRD41Vd1HqNFkCbMe492CX"
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
