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
    "3PaPTrVUXkRgRNgg4HPegqoX4bg9hG6oTnVqVjGZNiW1oi3f2LQzd1SrBTnUk7Bog9wPySJAUuaJRADQq5vDD3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eXtZZwcGEsbhpLULuiicB817cwhouNQCNoztXZczbhDeTAJW4WLKoY2xU9s4VJ174tpicyYnBFYyPchDxFtCxv",
  "key1": "4wxKTZuxyF7DFEQSxWtCXmsWFErQ5RHmbwLr4X8PNHhay9UXg6s8SHgtvm1fMrTb7i191UrniAs2qeQQqmAEbxrH",
  "key2": "Wo1KCoP2TqquzCKCQkoHh6UE7WNdfoSaweaKA2eSTPfFaNbvWxk9ApkpSUHkpT6Sr3eR82LfnhKwPikqJpafU6x",
  "key3": "2CRox7AewYHUTaJbGLMB5dgRhEefHwG2fiKazrcxiCQFbqNotk72vSLazJ9yN8noL2LskafTFsZEbRKBPrDgmLeu",
  "key4": "4ndX3DCU7tDysKYXwLtjA6SNqn7saJvi7xYbTJnVciNWSUNadCkPSX927XoXyRuhQLkZ8Ei9oZEyqMQGLei6syqt",
  "key5": "o7DhbNFt6NLtWhwsLzsLJwRz5rnwG2h33LJ4NyRJaJXiQKE4wqCooQXWyBpagQvxAp9qg22dcGERgo9rbjNCwVW",
  "key6": "1sYsEtSrEJpCpHbppNsm6d8DXUFi6qbWYnLFkpeXAX5iAx1j8Jkqy8efNCgBV51CnWF8YStE1DEhGiWRr61bdKp",
  "key7": "3hS6DzJLYUe4teirf8DhkQMPr1EkcLVmSbBp9Ega48iFAyaJTW9AzissAMRLz7zGHtWQFwNwUbBNhBetFU98N1aN",
  "key8": "2wWR7yD8mCx4nKvZPFfDtUzfyWHgWZ5C9z2hKG5467Z7C7BX8XxiXaDnD3B8ExZmqDDu4kbUYt4UMzYAyPfw1jUv",
  "key9": "F57uyv6g2KCXRN2BZk2aQam1MurG5QY9rREDd58KRpiyDrNph8EXynCjt9NbAqipPDmyTpBCMCnZwZQADp5c5SB",
  "key10": "3yQM17i6fSC9TQXF4kh3RoXv3adjadZxjpro65VBT2E54oUPBNPuZFuu7vaLh7R2CuxQfakuDzFXQpGwXmbxzMZe",
  "key11": "4GCRqh31MEgkC6haNbWJLQvBzrJpy2YZ6BL77Wmvp8RWpHwCpiTcv7Sn1GSMNtNZygoxsv7dZfEX1FQ7ji6kfTVM",
  "key12": "2LY2wV8b3EmjNv9UsZCrji3pULwmJ9WZMzPsK7Ln5WZcoEK7QqsEjvMmoswYRo7GkSa2tQGGoPEQ8TRBBQQ3aUYo",
  "key13": "2gpupFnsmKVT79u36cBSuagZJGVaNUyiSPMoUyXGMgeBYJbguMqbnbCe87wC8Tx7gP6eFB8F38JoV1NXzAyy3MV9",
  "key14": "4Sm4ny4moGGjyWfjdUzUj1JRSzEDuQsnzsVjwWr9KP4FvrdyLpyZBjiA8UfGyky7EgeWp7RCpVhhPPUE4KGgXs9h",
  "key15": "2Zgz1wfSYw8yA6uawUEVGgM2qBumjBEHjzVvddrL57x9PXJRvCJiBePJ7jy3m3karQ3opCKjaPSSh5b1nintoNfc",
  "key16": "5ihRyjT5Uz6tURuhxXYtbdoi1MHHsemGJhaPAREdTjL2xfT8Q1REP5FCDFTf3R8AtshenWNAfVBmJEb9tNgdcfLF",
  "key17": "bShyGzosBJiHAX9QBzYFWk6wMMSYaQXxUqEzfraqVoauu45pzWGZChuCtZL5PsrGsSGNEumREyEoHBBny7pXXTm",
  "key18": "3Rj4XQz5zLDwCShjcrv88Et4dG1wwCf8Bei3WGVcgWVrwQ5gZGLkF2UNiqNH3wgJnNWdGXBrkJLTWzUEezqH8cWY",
  "key19": "2rCA6ufHUKVHTunxVE4vn8PiuDYnENe8ubgZMz6HbHCwUxnt2NEL2nyEfwZD8yYjsCLiUF5wXaFdoq8Mkez6a4L5",
  "key20": "nwzFvub7UbPa6X7qKkrM1LXCwGYGTkCXccAPdUAhgEbt1Nx1jbVvmaUY2QiVdxGp5wyqyDkyMcPWwB3FX1Lqwvk",
  "key21": "2hm6EDNGgfkUg5fdBn9BS4h4NaHu4HJ7g8xyxYgCZZULPdmqKKWWs5cCmjsGGah17A3dv171FHBHKJmmiryeC4N5",
  "key22": "hZRidDHhwBHeC9WRa5aWgzAUTYdvEUKMigWnTJ5MdCFwqWJBpk4pUD7CpaiS6EqDiiG3xzoNuMnU2inWfdUJrRJ",
  "key23": "43Z73KS4DkxnJrZ1tzZdgsXiqBb47tivLJZDPFuAKwQHrKP3s98VzEXRadqtwYBPqyc5aYzErj1jcuTTrGh4oMnv",
  "key24": "3RBwwdo68DeerpoxCVxs97vFVK5u2jzHqR1sW7P6Wi7H1phJasQKgZuzgspqB9tYeQ98wCgU6QtVjxNKQrtFTeUB",
  "key25": "5bhc9fPYSd1hJBqaQdRkHv9zktKt8SxLLEUuamzZXQCc2acS8WZBjTeqSAopDSFyjUjRPe8EMVbQ6BVLu3fHdhpU",
  "key26": "51yazUufxXNouFj8GWs6GX4gHPvjYHsTBHh6t5DmCd8KpwPfBLnQwf4osFzNNnbf5zQ73wpe4fU8pk68gsP3mUJu",
  "key27": "38VBQz6ZVvMHKXddy5C1BvnPG3yTq8s9voKA88E8orLx19TG7cHfZ77CE8SyeE9ssmY3adbg6BGtPuf9jj8ykU9V",
  "key28": "4Waq3MHPwkPmnj76dGBqgG9zwRtanKbcZc3cA7Bhg4x7BUSDLH3LKPHzasLv8pRovZV1vbYfL8sMT5XdyE2XpEgG",
  "key29": "tND9usXJh1sgp9Sc83DBK4BkXJVcrXhYYWcZqVhn9pDo6aBWgxWUGJidobVZVghyMjCfcBy8488Fpzd9GbFkAFX",
  "key30": "2pmTPdUKw8Lpm2GnUFvaL1xQpr1TeCfMvfY9wxUrBx1UjUtgmFWMK9cxkKz5oCMvhCp8SU3UkoSn7SYrL3cuxjj8",
  "key31": "5tC5CZKLxQ3dEX9j1BfvBNHUXtgBjZiGLW79vofHHr3pGkauK3d7tWR7NeghKhjv8sxLmtDYK6sTMsa4H6BV6Qy8",
  "key32": "3WeDzBMFLn3ZvECKGB8j7XPpK9cpsr1pSn3R58ft4xrtFrRGpSg5xtcBhCPDYVw8UdTrB354AHpWG8MvmDrJeCUu",
  "key33": "3H2hURZUVjzRwJbPoBsP3C1NodyikPTPYS3SMXkm47fagQgHngWP1pdpgAN2pjA5BZd5sLzsSkspJzAkdLWXZvhi",
  "key34": "3xibBFm6Pt6sZPDSnzVq1h4C2DbAAtBXdwkjQbkwX6eGyeEEV4T2LmMnv9KLbKcfLKFbPydz6F8kcNpfgpftmgzz",
  "key35": "3sLSxHgB3amSF1tuSp4XoZ97obCQ2CJYZGRSn2c9ryCXfr3RLJBeYjCAtsHWC4Hg1Z8fcTi8uhKozexuU7KpxKsD",
  "key36": "4ESSQuLuy2rUq3DXezUD2PzxfXiuTxU9ykTZ8sW7imMamag4nS4vRj6ymDZvde154mf7C1LKJ6tL3T5G8j47gpLL",
  "key37": "4NJg5WVCUtQQhpNfZ5KbtR1MsHXK7ya8e2WsXzWNAmtkRUAAqaiWa3QcZXgHYqjdd8wNPo9CNqF5jPQtJjM1uap8",
  "key38": "38AHi1FqXKTpN8yR3DgBapaTJ3bxCuKcGWZcx8azTQB8Y8QyRuPN1jC2U9HByjo9t3AHoFSzc1LtaSLMGd22yM1H",
  "key39": "4kj4Jzz9RBtpjApisNenzutrmUF1wD7oJ7YM1P2TXK9cXQ57BYgJ1tEXLHnE6PiMatZCFdcjJ9kzdq5hsegVtVzJ",
  "key40": "3RDQVWjsMtsUR9za3ojuVKZL8oEfAXyu4QqLSFLKiKVN92kUw1JLzMAWEjGCJkgZgeorc598XCGi83XitBsA2CVd",
  "key41": "EA8vGgJ3fSoANmXZkhWz3ky7MdLrpyHkEfjqPKTWBuEEZcVX95pqQtc53SyuzoDDSXWygVpQakyfyCvGvwoswW9",
  "key42": "5LQJow2PBhh8TyduBG6fYuwJNFRV2Z2tMdjWYw56vqjMAnEXMCZJkJgUQn5pkNnC3CMUkHBzFLqzGLeLjwuu43RD",
  "key43": "3oauNwPU3DUvLLDbVuF6ezpmo66XpbioWvz5TJt6J73mGPTY4JoN1XQGqDtyrqKqCxqKTqXWKWiPDTzcY8eaDQMP",
  "key44": "5uSFRkQURw32K7jw5LDtL2HiYztgjT9EYLn5pQeUDqCrEgzCzZLGT3RGBWWaoibNXNbwBHYaXvmaUJd6uEcWtCXE",
  "key45": "5sZx13xSUUp17xdszbQqKY86GGAzKVW8kmh2V1PdmHtA7SiHqpvf2usJx4Tieu1aVWGVhNpU78moiDZTkB57zKmm",
  "key46": "2QiSh3BrjFgp46EcXp2EsaRqRJ7bJDavKzRAmeVDF8ZA2pSv686UzumByAGEH7JvLyTmFhf3133MsPxntNtXcaFk",
  "key47": "53uQkm8SUL1UK8emCz76y7zvQmSaYS84zkRyCMBaiNQT8eyZMoCkiyphqLLnoSXgPa3vkW1GYCgrWxTVUpd4KCqW",
  "key48": "4gzfsAaspeKy1KGHP4Bk6BJRS3a8FeQeh2yoiMYv7oxr5wvLAgiZbWCqavifvSESuFaSHiAa6hNpEaLJDepnZ77P"
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
