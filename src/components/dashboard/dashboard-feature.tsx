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
    "5w1dC1GcCxugzhkqZbCvCVcZUR86yVJ1XXteTbywivyNdiqyun5B3CkXGq64Fw674kvmEzGuYxpys4GVAGgXkApF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCN2Z3kHe4FMuYLZq2kyGTxKW9TpHqPWP6snfAAGoFY8DGqXxUeK4NNiSS3pqA7yiTyr2fDGV3J1dQwJ8f59MFq",
  "key1": "4eJ2bM6mQVE6a7kzPcxNE2Pfr8wrN1MsffQVYBFfWPvyfcru3Yr5Bjjqy6PaohoQtEcJLDEDZDJ5uRsNnP4bUacj",
  "key2": "3RohcqZqipnPdhuk9UbQo48Tyk642bLh9htUXir2FpZu8Vp4DvSffca2FuTssQxLGHyAepUi4mk89k5u89BZMtch",
  "key3": "2AWVFiy63W5qdohfqMBcWYtENpkMRDb9wqqBGAD3oNDipHUFqhWEx8BS5ZZASUDjBnhJQR1XLNGXKngaCVLAntwG",
  "key4": "vqLQzktR1azSk6jS5UddcHQmDAFo4FTpQJgLH1HKVCYXv55NpQqCQq48WxJfEWYYiKh284oWTYY9b5tgMp5DWTt",
  "key5": "4d8gncuNQNje3A95mCfsoGy42jMGK1xGfATgX7uNyCEzU66MJbGBZTqfk7aHB7w1wxqSD18tkvggt426fempT8T1",
  "key6": "2MZLTvjrYcRAqPDDcZDWSNotxrZDjY7r5vKrQpctjXmQ8KqYM6gg8b4bnEc5PiuwHwdn2jdpg5YEqZaUVhohg6V9",
  "key7": "Qr6cyiZwiRjDLgJLgH3ruTJayBPpbvSq6KdCuyL5HNYDsv4QztaYHYtux74xnyji6WQdRMwCCaeDHR2bAvuAwdz",
  "key8": "4LfnwRi1qt8EdMnRmnvdANsMzH68VDQVaQBJAwT4hoXzZqrRk6iFphwypTpv4aD4bAHPMjQ81myP9k4VTd1ejo2L",
  "key9": "4tCCQft8QchQLCf6DyjRRUyjZSeA49LCZhy4NAFGVppw3vhQVN57TnCcEC7ce1tXRm2CTNSpW251bZPXDfxieR9v",
  "key10": "2ZEkATdSMan6K3KG1YVe7UHcZqDC84zbRJV2DVpwxHWRBtnD719QxFAb4RduAeyGZXtyiyvHjVRyijfHnApB8GGJ",
  "key11": "4hPBgKq1rG8iNUveCRj4u8KiE3as7JDhzauVW7cDeaGNecpStoAV2VowryUKfzpSWPiZVR1UzE54Q45eMeK71Cep",
  "key12": "2N6tYcYey9jmpkZc6DJNzVdo52j2NViCfPsv22KVzoPTVhJyoqgJRH6Fe9JeBVnvKadCHoBHuwVYsEpWGZwdQCqX",
  "key13": "2wjhBS1hoCpnp8xR2zhF7VqHALikfAD9cZcYYwZeLRSJGPmtT6RKncnqqHUuNyzzWHSc6TWTMfQdWhTuqa8jQFBo",
  "key14": "5wyz5uV1tN7LnRRtDJqqT4LKFw7hAuHtvirvE6wBSbnKViiXB7pLVM1Qa9sS5GEekDHNGKB4GiEQPZesXG2c4cyq",
  "key15": "8e1xMZ9ogMk2Yk1mMfC44QQiWsnEsii15hYM2ogP18MCqWgFXpuHYNNpxGeQby137dgcTWH7tXpkJvC3krpqLZp",
  "key16": "3Ex2cGbjVjbHYYFaDW7vnxAkdhEiBvwGPiV2LRVajrQxnt327Edjfsz7hXduCHod9AnXUEvvxGftEXf6ybdn188u",
  "key17": "5pqHhvoGkrwZaNnjvQX5UuaFgT74ZfV99HxupGBqPc1BcweWoKWWrhVpMiBcPkeVFdeH8vC2osPxxnGesjhBtc1",
  "key18": "53qwGtcB51NSnvuQVeyxBrq8D3BPHwJ5rwwSNSktzAhZ7qmuAyrD5AjAaWgopD7qVwvqyFQB1j7rhQ67RafnLfJx",
  "key19": "VK5yj2azwGxTayve9MPbMGHxBVh9nsp2FkJTUdZfFtxeWko99FPAPZEGrjcH67hcJr9q5LitUwvPwsqN75bezXZ",
  "key20": "3A847Q5Hp1cag1Yd23rcvVCGFGCKnV1cuo7qtDjhDafDEw92VLhyeUx5WTkEG11KJ1dWxKY1VBRf8gCKRtvUUyPw",
  "key21": "21zSDkUDiz1aUDiFeKn9h1k7LNe8CVuQqvtUiqtuejxAs1kVyCg9agBxyuvjtx2Vt8qK2KXK7GXdcrcWCTuuL4r8",
  "key22": "5qYHkuSAHZ6ef1JFjBXHVxDMeB7Z2ppyzY1ChD8D6X1VHbi1FBAo4S9ReNaUZZx8oMqiqFHJcpmGHdbwDpJfJv36",
  "key23": "2mpyghffpucudfikpUVKQLFzxyNTAs9LL1M4irCJoXUWvmFqRoZubJTkpWxAR9TVBuyWWeq46kYd6GDmWC9udf9u",
  "key24": "3aEJsETmMRn5xfH2FCBnoB3UY7sSCpcTnCF1RsJs3ZnNtWPeDBvNNGSNzq14SziiHkQtRLoMLsfsoJngiZY97nm5",
  "key25": "3cBDLUighNwp4wNjTtPnGjmMzB4g6GtkXSnPphhTLfwpSaGERb2fjiZJLa58y5WiDeMhYLQQPt17yNpCCKQX5tSs",
  "key26": "62CYchtKMkV3s5XomVBTkgsrUiauF72bathjnqa6izBbQmNbBF4ZVY59ZRdJYoaAqJ7PxzCM3fuCgr3wes78CDkq",
  "key27": "5KwiVv5Q4gemgaWStcBB5wF5JcD51vyaxSZZWUStqnYu2onGXhQAJ93Tv35ap91CdmrmQJeN9Fd8FNaviJGSkWUY",
  "key28": "xCyHpRyWVWDg7YMiTBkH4UumhzQ7KxrkFo3vVnYkDoB2z9S1e4EAD38UBeArsqdPzXc42dedVPSywVTXENhBSuC",
  "key29": "2fccE9BtARaUoHss88ghMuszHgobe31J6hNN8kbo7dcAQX4BJgcNHjgiFrCChriVSFhemR48qVAx8YFBSnv5KJuM",
  "key30": "4vdRrduxNkNhKoVkqn7QS8CWcScnP6XaK4Sxhjk2yPVdYaxe9qvCfkc3811dVn1sfPvrAFFKdErw19LvRKgfDpZ",
  "key31": "4KYw5K7Co9hTEWE36eLrEw8tLprm7BkQvfDAyXaomzH4JoRTzRAhtPX9hQobkS4fv5Xnjc22wmUy7hXcRqmPHYqS",
  "key32": "3WLbe5qfUEvUZgaZ6JSNCMcZJtdSpFcvcVeVuftppkNkCiqPRQL3vgmcED64rJjxKtAUAhD6ZuVJSSUtp69uCinW",
  "key33": "4uk9Kfqpgs6H1rVJrhzoShvwNvEJeRbVnqrxrBFuXRBnkfj9HXzU4zkqHw6TyaaFNmUNdqeAafvCkuYkCCMX3pYJ",
  "key34": "39GVdiLCQpeWsEP2hitPt7jJxwbohburjyRxkxJVBQZqaAUQoFKmqFm7pZ1Vr7Nt2uP7c2JvxvevzCrrZHHr1YQb",
  "key35": "rM9igpvF26TFhkSZ48Lm2AiTqA2JXhpzZd9yT5vE1MrAtivp76gE5WgPizWu2s7DuDRsnKpeVjYrGqEbaXkLoRh",
  "key36": "5nVzeP1upNQqqstSVX9razpSPQXjofK4evGW5b3CCfXY6KKuvS7tF6oi8TntsaY2dNR5EJyaGhmtmqCjdQVBpitS",
  "key37": "3QA1MJCTe6bSTN1GtTpVMFTXa64idP6AxhaZhQpvLxdDXkFnQndAqMnZ1xU8PEe2eHeM3M15Zzi42MU7Ru4iy9L3",
  "key38": "38AB1nXMYWXXAgbAgyYdZfzxEghe35h2PCwtfuJPHm2TVUrfJbYTDB7DiquHu7jbdeHFrruCXbEb8hv1bu4r8iBN",
  "key39": "KvtEd1UG59FSiN21gibYTo18AyfjNyL5pW64dQXu9vMH5VwJ5oKwx6W3XiW7uRiNgGbyxNwHZ6vBaVVoEgY6BYo"
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
