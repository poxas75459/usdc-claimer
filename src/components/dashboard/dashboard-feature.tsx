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
    "5DnNspV4uauzHpogonfmsWxEQGuWZ3TLZ4HCQpFTL8BuwEGhvufhxMsR2cWmnUtfuwTFLF6BSbtbAC3N2ZeJd2Fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PJ8KJwCs48j3EvTpZxrLXzASYuY6GcwrDdn74kFrHq6KFdNPMeoE42gGmVLXCvb6bMzQwKYi5QviN1BoeacaaG",
  "key1": "2woPHkJ7dg2w4oP3ZSsKXpVeYVLkgqSQQLaFYjyNftGSu4hBBx7DdwgGdScsYrY4HmBQL84gSBjxH3z6Co3uLvj4",
  "key2": "4ysw95gW91GVXkRrAxn5ARueA65wjp6jPzMNU3k16SFdGTJDx3mDVWzHrqqZZQewJ4urZ3VW85thGvNCHzct1Xyj",
  "key3": "3rhj6iJ3Pp4e36uqCBi36TLj881caJiNdkTCUAt8gTtp8UpqFe9KbFEppP8MNZ5EnYNEPFwzJVdTh5ZFdMNHjTzV",
  "key4": "5wCkQRKTxCy9b8jsNZJyZWYBjRfwMnkq1x9hWtNezWumA74zW78rkM12rcsmkWjpUbhxmvEUorJWospuXUGSR1AH",
  "key5": "4NUhDNxHSdf9FRBmSJgGmfmMZ1psMj3fcGwYkMKruekwunXkq3cxbHBEWRttZQP8GT2MXVDLspVrZvVQ1UsuvDci",
  "key6": "3WVKh7enLfZSs9TjKbGejCLYCqNZXAuCmSxppeQ3yWAHjz3NdLk1hESvVViJvUUTYaUr7htRbQg9T9hDoHahULMo",
  "key7": "3xAmC4E3rPamhSRMYorQs6B4buoqkPRWQbmAGRPamvgLMLBhVn3qZvE2rcyLZwjbXckUwzskdQaJsq3sMSrh2Tzu",
  "key8": "EN8JpkF7443nE3ZHTyHLJWjrs2F15P4NgYwDxDmN8z42omWU6cwxCbZChFnys2XLzNxA68DUE3rZvGffFsNugyM",
  "key9": "51dRwmFPYC2MtTsyNtaZz4jtC6423ygPeU5qL4oNxcH3PdP1SoGeQuoEdCkozj8q3PrVy1g3gzjZddmnS16wA5Ro",
  "key10": "YhyJfeoqaxYMXfLgfugZaXgLLbhFv9nV6i3dgtyo4UxWSgDtGYEVkEVKMSYFJHBDz67JNb1PaUduZuR7upQ3po6",
  "key11": "4voQcDWUFPE9gh9hjXEqc3YpU8HU29ULENvapyJibGgHmifrKMacA31nfUgHo3wus5UbQy4fFbusFCoE41SbGa5N",
  "key12": "5Wk1jhUMFiruZh5anuAiBJuwijqzTqDnRZkBuGcpsfNnokWNwGSvKujYHfhwZWLDPjPtzbt8MzZ5MGaSopkqena",
  "key13": "Hjw1hAGqkmkbnaz6dyoR3iAXkT1N4ReVtp6WyFUwQ6hfsvEqLt9TGfEUwC3E13xyzPs1n2BNEZZugpDfwuuD9o2",
  "key14": "4WbxdWaLknp8d3gzA3fufrEvL4CJwa5D3tXxNTyPL8KZb5mWcN838gWdEdfwbBgr2EREi2fnFsVV2n7GW6y5Zz9f",
  "key15": "4zEfaXvtSukFsiWhqpXbJaMH9NogpA51QqQji3oRCrxpfHnA5Run4YwjKmsiGJd2GsUoFF4GeCeiUn1ZACtNpYS8",
  "key16": "5DApyr17Xfb22DHLHxDpKxQHo4Mo6zh1ew2Sd1QQzg71gQPbm4t9GyTj6cRULuhBYf5wihj7DRXBZasgqxZ9vzma",
  "key17": "rEsJDUi3yrPog3AYG3fdBy77cKCVvwz9mdLo2dcEs6ziELwvEnkUEFka8qKixbPRH29HrMC6VLN9GETQysngW8P",
  "key18": "4XCHPs2S5u2GYCX3qN5YGpiDN7akr2aKhj9Fa4KL6R1P4XfVrzNXasnjPvQoSAvQVFKP2z2wtPj66Z7SNQs6nK1s",
  "key19": "2CtwwUh5R7rJvXsWti3jg4YbYNM9dF4uzSPShee1tfDbQNAeBFdwAUhpHY52RSRosnAhny9yoPTgohCgZ7vqv63Z",
  "key20": "4f1YduiW7E2uXvuJDsWTt3UY49k5gKRjpgz8CRd6aH8rYZSp6vA3iaQaGNALq72oy3pDHhDYZFb6sZV2DUC4m2W5",
  "key21": "66KFUDxYrhEjWW2CaARXzHzBVToh2waE424T9dfoqa7hoC5oHPSAzH3Jn5m79YxHpXTDeZx7wFxG2i5FXEriQE6q",
  "key22": "2BwDcqNrELdy4DiAHZBfziUDX9QFZqDN6xwEZfLU5PrkSGShqJw3rH3jFw4eigD8PBsZWpEVoCsm62L2eQhreSRf",
  "key23": "65g8ZZPnCt8XKnphTfnPGXHt2dbuJ1RgUjbz49e9g5BU8NbFNahGr5ciBxei3u6N3V92uY5PvGx1TM1dpfP4h1JE",
  "key24": "4XxZa3g8Z2WBYpFJE6aGh7db8EJgRv7T9i9cRAGP78J1dKFHXSgopsPwypFpWxgfENxGBoqweMtVwHN9Gd7WRshX",
  "key25": "2bCYB9gfD3gNLG7si5gp93HD18Di2xYFwUCCMrM6TLVxDArxEdjt1FZnBvFx3Yaud4WqSaf5MSV9mHdL3mBRdjM7",
  "key26": "4vnivGau963h9zkZDUfu4hhAnpDCZyx458rAoA1h679toxwgCbYZbxH72hFHfqEGY1d9RttMqj1wiuktLfiPMXGJ",
  "key27": "vwTQCfEouXQRdJtVtCQmpfiM3LewuQ538YyN4eqHv3X4poFaAmYZ4BhKHKWKSGCmRT6D48qMPp3zjo7vMRztCyf",
  "key28": "5LgVqVbpvB9d8SETMmzVLHwm4QyLsmDf1LdFvGWDiWaWDNmov5qsFUxbDWuUNrsdAGKufQHEpK1TN18DheLPqjcq",
  "key29": "4Xc1XNcQapgRHqUG6RcjRKV1iziizAkLV8xfa33GjRep715QRktSY3SutTRxCTL8F5saFRdeGcgj2jwPwsieZi6v",
  "key30": "Nj86Xuc7YytsgSbsr1RYGq2XTPFBQvezSMsF2T4AfMixvf8gtraAU7NLZMgkYvXT97AMawuvfiz6xzWe5anHV82",
  "key31": "2GAj9prq46cG1gg6p3XkFMg5fvzHqfwZHb8tBTQxz1iJK7V5PhewAcDxFnKt7vtLWBwd1xnwrkwhPgWY4HT62pWB",
  "key32": "2LwYsRNtu4F9bWcu93XVcvaXM1ZgJeoBewQB2XUrrZgkbAtAgsWWWPz9C5DZ2WRTR3uz35KVhnrsws22m2XfYsd4",
  "key33": "66NrwGEp2QtMsa6NNtypksRUErkjXaPiFAV3L9twiVVt9sqLpPQZzwGyaPYmHjwCa2AGQmGiqfVWsSXZWiVLvC7p",
  "key34": "35tiNdvLeoXffD9VGx8HBGbrnHx1ajQDbGCDz5PVgsb2B1YF8YAzNJ9Ckat6PLaNTWfmDQYqHD58YzUcQoMpFSRB",
  "key35": "FfJNMb8ifU7rUPdrPhjYxE3TYesM9dS9CJn8QwrnEiJCghWxD3ks3j3odbV4AbctXinaE1xteZ7RSPspeJTk7m6",
  "key36": "3vcujTi23ir7pEzbnBsWq8CqE1XKRg5dsonmc1sx7wbFtJmZc2fQEhnUkn3Kkuu1vEvoRdm6uvinU2X9X4jYZd1Q",
  "key37": "5q7sx91VM2u5rWcp945AsfCSM3YVNueCxfwRdvdmBkd5c3rzxBxh5FwdRab4mgAZQXpS4y52VQBKw6uvH6BjGgGY",
  "key38": "5waJvLjx2Y3XhJqguuva1w1R3rWmF3zhvZ1exfQH44bfqFeMS6ARPWLAF3c4pdSyU4Eiu4Rr3tTU5A7VeXao1R8M",
  "key39": "4DD7N42wmW6Q5TwDcWyjUwZWUDk4ekcdw2mB5WVYkKskCdUwMuoZumUjL3efcXuyUUE5pXz3x664L8W5kWF9fykq",
  "key40": "Mh7PmwogVfUHFrJuLS7V8L7KVuGxywdDQpSgEsMg2KuHMV3EGdAMUFuSxZMTCfrQMf86mEh2igu5rYEayUe6JnP",
  "key41": "3Mv6aSTyJEGHmoNkJuREmvi4fG635NffQR4mwtAhn81Q7Jm3o2VKCJNbRTye28ZXKFf38bBC7SVw4DvqqTXPWqeC",
  "key42": "2f1jQc4xkawgnzTq61yxpFyG1fmfS2AbqHtm2EHyyKyMn7tqhFzhnZcvbtpEekucDTzheSFmU29AJ5qrWSuuSGBa",
  "key43": "4TFUKQFGMVafCh8ok7x21CWohtSjoyegmmh7RnbF5mcMZivXieknHpYXqznXuCUJwRZGQzKe34j5z2ybGiE33Yq5",
  "key44": "3H53rYKLFZZoPWrw7VVtXVKHSoS496xuoyc5yXQncvHd8NGh9pvHGxGUdPZzUmYLDArh6njmyU7P9ce72FLT5WVe",
  "key45": "N9daL6HmY4r6qpaSZopx37KtHT5W12ZMds5Q8JNk7AexLRwUr9Bn4b6pETiCYBronJgJwEUzD3CdcKyNFygNcaW",
  "key46": "5UWcFeEThMoZz4hCZRayhCY7T2EeusZgkS3yVtWSbEKPfPSUJRo5vurGZUVCEBBAGgkSi86x8mSoy1ywri3eDFFd",
  "key47": "3SwqFyUU6a2yUT4S9uqvxJb8yGqR82hbyeJKYLEx2qnDW57bpnVK93hN1WHFtHKox43PtFMV2QqMrz4em9KaiKu4"
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
