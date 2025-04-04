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
    "4pKXLAfQAoWY4Ag3vGFoUao2hb37SMeRQR2tzKbSxCmoNKmg8LEeD3BLup8E3hjy4Com1ZgkVxxye5dq4KdTnpMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPKL6jgwn676zDFcgiThsPLehCWMV2xHSiHbmUY8qRR4DLwXUUCG5f6USqj5BouFhaJE3GdXaBYTq69G9dPb8cP",
  "key1": "3CLmMyThQWn72JTP4Hun817Vqiw8dPznVXQaYLSJz34Cw7CtL29ydWjGeSbSL4EFTjMTkE8EdhYsm6y7EZ3FYM5k",
  "key2": "2vutrUxzwbAptjBuGV8cUmspec13j7SaHM9zdvEuerRo73mmb7f6vqoMWrCwyy8NnNMmPwx5AWZo8PEeyQnjRdRD",
  "key3": "4uFAkHnT2xDQVbWcqvCcxD2ryrjGTfjiDr7WspJmHBP9aFHFAxx1hKgCi25tm6Lx4YPYM9JXF9svuEqJQKkT74K9",
  "key4": "5U4LLR6S6xyhXSUr6Bpi2SFGqPywYFq62U5aJ7pKLBMuXzdptFTGdkSb3iMauZPtPjv3iYxgdAUinuu5aBm95Z7W",
  "key5": "29EzrKR2zGo58FhmMv3cENyeaofaPeGgMWjQ3sEjk8GEGXSUt6ZcQWNR1SWSqyAqqQTotf8foc8DeibTgLx2Tsis",
  "key6": "5rLvLmDNXHMQxhuR5La87gyVHU85xgxspdvZyESPwkYunZvzN1p1D79A7HwQLjEBi3SzGCHwtgPAbhRePz1C6Jxc",
  "key7": "46YxfGKxfwVjNc92Tr5wRbRRv5sqesGWAGJGR7qVYVMUyDNqfa2NiDA66da7UqVFC5sex7K66aruDV8nnqi8h31A",
  "key8": "fZxjxnW6UfmFArxRQJRrr2Ums13dAeMKkk4Z6Sf38eXAZGqW3BE2yUyjNBk8EMFHwhv46bDqygeBzJy7P3BjkNE",
  "key9": "Z57KYRVAcN3uqMz2Ba2BbVM8789qkyRqMhfaudmb3NStCqJK8pNCu1kr7BRDMco7R8Fu5RaKUSB6dZWiN1M28pV",
  "key10": "3MsdGecNGuLU7BuvuiXZ4skdMCBt3yCh8P9AajQP3sWX1mQrBqMmFLq5G9jDTjv48e6aQwcWsuCWWhaXyx7FHNQC",
  "key11": "4qK1PZS6iVv8bFmfF3vMbur6bR4vwtd11MjcdvueigV3UNKQG2EJymsrU81E4q6hjWLtHfdxGncSt2zLbDHtP5SZ",
  "key12": "5egGfj4za5zd7oWknGt8X5zVjAoULsLCKvrkf2YhgicbWZEmstepgthYH3faPPnx9twTnjU9hV3ngK8iuPF55LFG",
  "key13": "FSgT1UgGJEP2pxUTNBVQ6EctA1A4Ettq4CwraMAKfLfudzrWyDzbBT5RFo6vbjZP1QjzELe3CTXgBvZ1sWXHgJ1",
  "key14": "29A1sEULgukbp6N5UGWrQFZLUVie1ixNJWJMWoZf51RHwemsiLfoWJP4Kg7uXetHR1jzUZyGTV4hPwHH67YMTtaM",
  "key15": "3otrcR4FzadCch4U6GzWsYBX6hUKEFegmHJoguTwsUy2N22BpNxbXe18Qgf3PY4MpLkh3HQyTggU19M3uxJPkvoU",
  "key16": "5pu63q8cPBXgzmjqhZJsDb1YsvdPonbQFXiZ47FZa4y8BSA5b3sx8KAYmamN3bHBT4aAGgBvciPxVAwCWdx2NHAu",
  "key17": "N6XjSQTaaPNre6sV8AMTzm5K1YRV9hV9hb4cdyaBDQXvqp8nBw8g8Rr7JcN7FkzV8SJDpT3ZrEuZaMceuW7uqcE",
  "key18": "3PUcuW5NzvnURkchPir7HkUb63XiXkwoZpWKepXCtMLwpLfnXr5bdztCk4jnLVzvLdxgUsK6pBNSrkaXJBAMTVca",
  "key19": "2JqUASr9daJPcMuLtr9DabC8Cos9xc9MuxsHwKafu3614mbbbBo5HqgoXRQEoAZ38J7tzcrJfwswUkYHaLHc8jeq",
  "key20": "3i48nkqyFeBSgyfoj4GpMxJ7JYYKsksekBsbpP7Q6x7pY18JgkvC86FQeY7C6upzsJgAfYPp1jJGGK4hcJiHbDYM",
  "key21": "3JwSSao3zeQTRL77YMegweADT9D4KqfxSiQezQg2d488H93vq5qWup2mKUGpQb6ssm68NFHQJosKhMJW3fGAMSdp",
  "key22": "3RxZ7YFagPJs5xsUENNCjRF12WAwrfDAPJ6ZbnJr9bskJJaY9r2w7UHashtA2nvwHDGevtBrTfJumnDoQ4TFMZxd",
  "key23": "2w5ABC9vNXivrjZ2i57hzSwLAV9JS6N3o5QfapYDKXZtnWc9CVJMTnQVP3ZV52i73tdDYiYiEQ25MFdyfk88XBni",
  "key24": "2R2QZMTtweYLxM7dQ4Vxfs76WSQ6jKVjamUq4vBstzT6T6EWvMA1jSmf1AC34ToLr95cd44rGeSZys717UsNV4CZ",
  "key25": "2WFja1Y6EaP3YqvCXz3zCuU8NQrkA2kMqijSJcVoHjo3mRmvfC9HTLdKyFJ4yUzXuxjcJK5LE4mLbm5yUwdis516",
  "key26": "3BxEibPeRY95caaQZT86MHZqBxW1RNbjUb2hvEoCJp9ZmxrEDDnRZLAmjxMeDDJ2XCdWS3DYgKHxbrUJUps7Xgts",
  "key27": "3fk27nKRpUahfxVotmR2VbEqButrNZNZhfV7gMAQebvcJ5ijLXenwjuv935gy9qXTwPYajZWctkwo9GmowAAKgYH",
  "key28": "5mcVXPZazCZauuu7mqJ9zHxVZoA54eNqAMHqRVERfioYwKncjevdyp66FYGsL7nsMuhTtgTULm5WaRBTgJKfbF1V",
  "key29": "5qyDvUZq7ybUe9SyfeepkhfYtXFmzHzbhYFtrUxjQqbRbQ6wCYfLkip8jMhK3pa1czkChBEma43owpUFiG3MLyyP",
  "key30": "4VgqCHM82G2nXFeWUMbkYCoypQNvSQ9tREksWfR4cmLNfWE2kVdQ9Q2g9aW4hFdooA8H2vsNiE3rJ5XjbVd2qTAn",
  "key31": "2VsduwWp9zCz5osHPf7aVEbMV5cGWwbBny6nabTkZas4QHVRxEKnv5Z6VAYs6irsJ8pg9hPLYkLVLfxhgczJ2pz3",
  "key32": "46AmC33d7eHggGCuNt3rKfJ3n5NmAzAJcBV7VgAPagMs6ucg6aN6b5uBW1a8djR4jxPHcDDC3q4vuNNUHdpybxc7",
  "key33": "mVUyJe43rSbU58dGRUMi17Rv89NoQFYvEYAmi4wpSmsk4g9ykjN2A5v5PqDxWJQmeXEKzpbHTnKvhPB9uiM32h4",
  "key34": "3DR1oN3EK2Duwx8kE2UnCPpTgeMv7XqdfnLKZCE2xWiMSjaF7gumyr15Ntk3pbRERmVhQS42CeaXuCLgLDKDcmMi",
  "key35": "3kU8cm84ND2Thpaf6DCR4udHAyyULQ2tsML2mKmBFmhZTFTFZAd6AEofaKYe1zWMyubDYrWQqStQtURNrdxtRa7H",
  "key36": "5DhmtS2DM7RebGBxcts7rPsihTg5qGk25351AnZdAvNFHngUrEif3JN3Xuc2kg8XxjU3AJAz8Mkq8kah8LCzCKRR",
  "key37": "fbeLXUAy2sh8aCcv53CEE48nxkq1xPWVT286PfcfuSU2PPZeyFSGJCjnt8zeaZMLXo5xNusmqp4ofZNapugGDfL"
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
