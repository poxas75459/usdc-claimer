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
    "5mDYZ5YMDPnKFgBW1sL2RHgJEYCPvZ3ph5foSTQwHcNZ2mgk59dio6516jesgzfzuE75voTVdu1HWs29jNUXxKN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ha7PwuL5Vqpk281DsebndhHffXDjPDXa5BpkVAnNoj3bC4dyC9kiym9rnc5Cg5RV6hL7JBrCqJifVAg25p3GWgD",
  "key1": "5pSaZnpeSgf96azToCesee9VscdaWPbzaMfs4TdVvPpXvU1yQcCcmF4RgmssGgqQ1cEjPqXV1rPEVNc9wDRmKCx8",
  "key2": "4Ym6pRpeCDTiyNn7eT6abUpk1jhp9YTv5HsgAAWSRp51c4Bg2nV448weeJmXackfRE7jRceZZTYiHGEk5jtuwWhE",
  "key3": "5S5Bfuck6w9Z29fYCMHbUCP85f4WL38FESjq8kbf5ATm5EcRiLLLX12QyB4FGQiPKmyENi8xXabhzUP1QR46qX6c",
  "key4": "9gZKabjdYhQMqqUBsxDfGjuDr9gTjJpUHMuacH2wBeVchyvpcqhNaViNneFSqPRd18aer46Lg4LS3HhjQN2TKYg",
  "key5": "2xQbHqhohWT7epHvKv7ixo7bUSd6ErS2JuoTjsaPcJtDqu75UxSGW2rzSnUr6WigELiRb77DvxfeyuiFQAME6JTR",
  "key6": "4AXgkyiTdszK85QbGxeg4S1HZK3novtw7ERZQubFXHJ5GKahvCbxkiHNEb97wtV3B9G3oRUuQt3FyYE6guTz2TL7",
  "key7": "3wkHAgcG6jE3MEWw9Tr45o8NTBzkedej7Q3nszEPDLjKyDNWtpMTGsnpoctvyUVjzvS5GoyMwGB4SBjrM6XSqVRt",
  "key8": "3eC2w3XpkJg8YwE3aiM2H5rArS7xQ3atjsruZA1kHuKnfaawNGvP6u6ua5Jz4k4etLYSVSGa96FfdudoKrnZJMm",
  "key9": "5drBcpVTkQ1MkYCqSwQMXdqHopEvgGawvJBYiaEM217WmGN8zeTX7rYnL5zj4qP2zx35B6wXhQnQQqv5h9RuPZeg",
  "key10": "46yEngW2Lg8qgDxXh8xs3ngnpenkKSwWF9ygFNWEB1DEv3f2Wsv3aMmH8ABCJ4dJH2zHH33SGhPVtvgmGukNijY2",
  "key11": "2Q547d63q71k7jHnw59jVrE76jnwdW4vp1X3C5EkVBpteFqfPdq9XRwETrKFmxDUQskNP23f2kxBvA818w1dNxkw",
  "key12": "4ZTMi6MycaemW1y8wWTHRVumyTuMy2wKPLg67UZ3Ab5e8WpGbRDnXNRW2z8r7mBmN4cFSru6AerxdpHAZq45jaBx",
  "key13": "5mY9in5wYVoX1e6LVDJzdwGbxaPaAs6UkzsHwDzZ7gEzyGtVQ2HC4yxHZokn3ExgQL2U1dXtg4Txc3Ho4d9XCU1p",
  "key14": "4aREHeGg9b9GudrDHkpb43qy88BetiVqfeJeCS84nHsatB5wjeVM4yUE3U5nRFFUDXaTSpLpgQ8kDc8wtc3cMK6b",
  "key15": "356BLok32zXitjDDvyZdhCA5avyA1drorBsvy9GHj4WnDJwTuzEJYANctfHVpAkRBobPvbstUPwEdYw8D64TSJYj",
  "key16": "Ur4qbK4BH2mum7GfmJebvMSQCEMY2GDyY6PoKDbyjE45kBZ4cdw5sAmWzfdUmpYyjQPETqNWMwE1pWLKftbWUTC",
  "key17": "346KfFEsmEngQrhwQWeRLaFz6vC7ULG9u86GPqBJ4EEPZqimWGkn1HG6PmFv1LPJLfJr1XBYTNJDMJCL6S6eo5fR",
  "key18": "aR5JtczSf97d2iNU3SMtw6rW5Qyq3vm3V9vDaT1ErH91PjRTHvcKymudXLtm4sMiPgMWT3TQJEmwLAsivXVYG5M",
  "key19": "5G2PT6nPEZCCxS19tCj9CreScMQrHDEoq9QJgGwNKUh9CS6UPSE9um49csJfCpZWN1XroPemrzVmj2RbMZzhhb6K",
  "key20": "4b8VRj1GcqadytP8suhXuagFBC4ybUSTKMPFwqazDgXCD4sTqzcYxJ5PPzo6DbDpYvmrdRPwfgpJwhEYHYiv2zoD",
  "key21": "2Hodo7MUFGpqyuMcX7KHgzaekqCxTV7NYzS5gWpJ37GD6G6vNfFV32pyn7irMmfP9EW8kn5JQE2AdmCNfqbRMVXG",
  "key22": "41rmTratEiX8agsVh5DooNVC6R2uquaeUeDf7NkCpt4mnq4sgFxjbXtkZX71tbs3aqto7mCXHCvKEz58gLEqorHk",
  "key23": "2Nu2wYzPWaQRM3bAteR97dfehHHjMqfVGdE8EZ1ytHP5jzvEuw1ErZT51qR3PXdGMvoHf5kttDfeYiTXbNr84y8g",
  "key24": "4A9TB5ENAe4tM5H9CcvxoeyKrShZWNNzjuThn1mxRs8PZSEw9Zw56Np41nKy9M4cbGkc9vEwp8ww31DPfU22zge3",
  "key25": "5SRgafaexVPbBjAqEwqMoSjwMpD7CPcmdDiBiuVkNVV6ETt7QDhtztHeoXC7ghgvso8u8dEGfAVuTX26i6VERLfC",
  "key26": "4fQy4ztvYT1wBv2ZkXGSptchZEkHtsidQpP1hJMGsgiPns5V3wQW3YnFg9T8VBvpaHbXr33Gr48NAtpEDpCDjL1h",
  "key27": "4BFyZjuvdwxkobjdZsTbK5EJocRgcVa7MjmcsBvtxygGoucbREEopJZykCeJRDy61DNUuFKHK9zGpRwRimHzPWzX",
  "key28": "2ejQt2V5Ae2jCBW6Nrj8bRGyNHbSuyj9AgWBtvUTJ31DX5FARKj27KhSLccibN665Q4Vvs6ocfuNk21LyNULQnw6",
  "key29": "TKGYNEPCLqSUu5fhWt9o6gaYMhr25oYY66QgFJgZUt5t2DqdtoUQBDZbJLGSvEK7Zps265Py1GCJQZfgDRMTYn4",
  "key30": "5RgELy2x3BkFJGerd9jQgaAzhCjeaEH2AZqNZNUFzMANiK4358hWEoqQvNvzyBut7vY9gXWQewBZPpt5W4rfsKWU",
  "key31": "4ZeQyukfTTSV48DxbUexpBPzQd5fT3gbSAADzfvX8AMbGF1TNcuuy6SLpqK8vSWxhX3ELhTzzjfBG7HvUX5vNWmz",
  "key32": "2UeE5w1fhUPaJfHvN1c1eKNqWFmFuBq9jujBx5iotya6VbHvjWWkk1NFfyjxZRX1Ar4AQJo2KCxscJsQ6NCiUDgx",
  "key33": "4sfcTipryegMMNmLbyuU5qJowYaadpBj6iJ99zVzCX52CAZo7GkbY5BpC2m3vmmwb5Up4XgGK6AtS7YhphHkm9vM",
  "key34": "2ZDZmgkrQ64qD4URyBW66y7DsbfgpUdoGGh1WmbMGDhErFe2ypWEYwno9T3HaBK54yXpi6DwDAqbBe69ofttYFVA",
  "key35": "3SvfMadQEUmjwLYuN3iRyacwxyfDYoXPaGueemKWnWqYUx6GdxjjYSzx23GnQhj433dGjXfRpL4ArFnCaANKUPyi",
  "key36": "7v8bSoB5HCQcvGJHu6DNZcUvbqjmbGERYiNLS3ePZm16DThX1UCvtdHrWLZ2AoAqR8dojmrKuXBRHCEH6Bcx2QD",
  "key37": "43GX4Cdaum4SH5E6rjfwJKjWnp3MrTpC8F6ZSSMGu2ypZKof7rP33ZX5Y9VqGzGdB3fJa7eop1DjLyffYNZwE4Ku",
  "key38": "4T52qRggQUZSjGTCUp3nMfjgKZJ4WhW4Jz5tgRTG3bSmw96A4fDbQLiHmSfxRgkshRLWSNCo2SJV9zna2yXtkjmJ",
  "key39": "2JD3qHXBX4JjZeuy7p8woeCzVmj7pPeJuWUVRgiEHLyYmutAVUJszRtsbjwgPSZjGFgwauYX9wskB8AurtrZgsmT",
  "key40": "2sWqfquynovJkGDqRkqeePUJQdjksRhn776Q8vVfDGNYvVR3gfWgwBcbYVLATbVoV7kc2Evc5DJ1i2qnagtj5VZU",
  "key41": "3nPXA6q4ep6VMHibHpZQLRvvW3Pmn3cEtwcy7p1F3USXZ1PQdHW6bNK7Qb7yy3C8KyEWJ33XPhT6JsgxhNX8Hnui",
  "key42": "2iAL6k1WSnt2vrTmKLZvzm5zNYYbEXVfWSFv94bGtEEYZb2d6EfreRZX8V32xVwifmoGi68AF8enuw2ErVgxgRHL",
  "key43": "67eht55Xo8EwPMoqAfn7mc1tGkuJJHZWejBVyTvuNiroaaJzNSYsZiHg9stdc4nvmbKgZdSUrLZ7iE4MGysVV2Di",
  "key44": "5rdEsoz8Q9hdhcWKdU7hDntNREFobi98ivr6eaDZoKVrnJPiT4F1QgdVZM7TaoLFKkMbCZR1bV1niqNzMyszAhae",
  "key45": "2sW6C78SPu2z36JdNpBfRXd2ZTdWb8VWYGnmVce5rThVtjDQb8rHHr3zYGBr5UD6wx4q4upfJjDWhrU9MKkwzgVS",
  "key46": "21yd2o5G5FHBuHDHwS5Y6rg2BdFKcWbdubCtAHsGnt5wtiX3941AbU5Ei4fFdRz1vKxedsEFgV6pRdbjibGG6tkU",
  "key47": "3uWJPvYE5amLXeExY4hzfPKEkLw1w5YrpErHnDwTLtvwZL8bF1jLAnV6oaugSRu5nPtxroY3ABLGVKD86tYdLVDQ",
  "key48": "3fhwgdbTbm1DtyUbSrzGH6WtSqcnEvKKvbSJX1QdMGvzVckcoEhAMonVgcy27GQgscUVpne8Q2JYXxmXaVDAXUBJ"
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
