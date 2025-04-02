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
    "2Bk5UEcCb94DYVB7DHt9ja119XbhTSyMtoLiq1Tpdd4nSz5bGE8yKenf7BVZFBcKkdmD2dEByWgp7wq5YhNfAb1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sL3tZGrjjjVruApKSvMm7aDeCZbKUYfSiSGydNHpdDX7BG3Jfor1xct8sWN38M6idotDrWfjSeJWaUWvPX4jbKR",
  "key1": "kf6eYJwM7sxMRy15sMA6ZF52FCziVAGbnayFXvRnudUnPwZs3X29hwCJdLYZkmZJkpyjtp6sudqEmN6kr5FQr3e",
  "key2": "9ZZG836RZisbwVHguGCAuJZyDxZKgEdbP9Doh7jRAVLJt5r2sPKM6wQQtQ2y5kKXcRTbdvFmdCqBbgubHyS1mQM",
  "key3": "5PPcdpn8qjRSC5vn2d2cXjJ8eEW29paEC9zXQRaLVv4tLienZaLQ5aWCQ9Xhzc3vhmjXPoZqvToVB8iEy2h8dkPa",
  "key4": "3Y6cXaFV6AD5X4DrSJAoSUjqitHUbS4DKCpkJpdTNRr2PEK298TMNFtkknpKBVeJUcceBWh5DtqNwpkGaDfpNgM4",
  "key5": "3DyYxbvPZZb8H1zzFQ4WwhRAaUKWj9nXSi8pKg3JfiyYFx3CivcEptGYw6R7ruHJ2KfS3gMRpr3JKDdqSgkrp6rc",
  "key6": "r17DgasR5Yn6D3eLmgY35bKxJxysUX6kADSsaVz1eaanUK8JNfzQNikfoERouQtQkRNL7vzqN5Fb1TkHBrC7f3Z",
  "key7": "49pC565RNTRCYXyrmyXJx9oSFforEoNvL9gAX52NsGP16FLG2xUUbvV4jqPWD21kmQgNnPuh92w1muKZcqyvd2YY",
  "key8": "4KBc6o7MjE1qAxEDgkAb31mY4xB6wrXMkb25VWiX411NjLfMtvZPrpJ5PJghWdCcPvQrobigggES23TyirfJ7pgs",
  "key9": "4pHKxUM6QWfkCXbZGMvwJVVqQfi2ivD5czCizLpXoYGpVJ9KxmMHUhd6UY7zECr9WXXmTVMauzUwWpMyyvpbSxKa",
  "key10": "2f6Ppe2GBs147jL4pJqArXenAGdzPMwMV9d4PHScPLmktmidDfzfstJZPuBbShUPtUzWnDAYkmqcEa8TDxUGhNLD",
  "key11": "29hnyA7Mfv9Y485KcoH9tvJuNhVpwxnENwBPW2rSQ5RZtQfSQiZccAE6iWxddNj7oEcW4vMh8Rdq7Hvu7PEVibBt",
  "key12": "5PyTZmZQwT6UEhJeUARgLtE9D5NtEwpgVKqVaRhfsC9P2n6xA24YYHHhYeKod2wFbKCPp5849K5ffZsvaLweCJCb",
  "key13": "pnmJvv7z8MdKw7Lj16JrjjZJYwJtJdHjgihExQinHqrLNbUHw6mPBhx6v8VszYdUYrXmMrP5QRyCbZJ7ZSEGHBF",
  "key14": "2QQA41CS4QCAXNpwm46XLN5tgL7upa1gKzgPpm17k5YkjmqAmANjEWBLx61cpLwdPcLSKVLhms73UHaVBiyyHUGL",
  "key15": "3pEoq3hM4BgQJh9PdC4ebC5eHE6xQfXdB48Lfb3nSNJ7hsHo4jBYSQadex3Yx5WCpX34yo8mXWjvgciSuN3ifsSQ",
  "key16": "5aSJmb47jhVHJEo33VPnTaZKXnJmr3xjxRfohuxF76MrLhu8n8FoZ7zqN4Zd1xVDcEweCGLd6wreSo83Y15t8Bb1",
  "key17": "5mByANC6k2KthoPmgxakn79DBH3G5bZvX8CkDvbFy2vkvmcye24M3cLH2skzWd4XmPmi8dLTtArSovH8H3TyTVcy",
  "key18": "5zbELY664Viezd35FigEkLBscctXUyqpE5c98B8VmSi2ALQsHFzQBri7n8CQYFfScaHBcNP2oJJjV5b3H17LQrB5",
  "key19": "3NDSRuyS2mkAVtZXHsFGeQdYNCG5yLyKraNHnjCJ7aiWQEAHRL8sja3JQtjZHrWeCiAQUrEcdUXbtejnAuR8aMpJ",
  "key20": "27z7F2j4qtphPD3d7CH7FsFgDEsAswQXczeUC2tE4hWmSWEHdKyVN2mzCuNBxW7H4uK77u5QxXHuibDB9mLM7RUQ",
  "key21": "277ua6vzBUvbjKKbzmoP43QWTJHCV6ThmTxyx2FmCR1etziXFyNZJvRj5vKxbCLWhMqCwSoLGGnZXNjgSphyYdv2",
  "key22": "2VhTnk3C7Ei7bekCAAUas9ED9GawiGwdLnwejynH3GvPfraqpw5M6vyMdqhJc2NKydZRXrcUkJsdDczrS3enR41i",
  "key23": "5jgTxzt1YDKmNYy9mT3i83GaWcug4pqz4cq4ABUzVB4gF8aX5AFerMrVursomu7WZNu2JfFwQeAid7oanJFY3wUy",
  "key24": "2bALzzhV7paNusREtiKe2RPZWRd8p8LbXKNiscAzDVHudR6AGYpGQi1gTqa9ArsJU6mfiJqu9cs3GhNGxSSzCdu2",
  "key25": "33eHp3gBGmV76EHwD3x5mMwp49sdrdG9hNoh5Jh9Er7zTBNALTkhcfCYooabBZQhxezt6BJnLwcdLpYSNbNhjQ4C",
  "key26": "2vBufCb8183TmkrhwcZKVykPdyqNCD4vbs2SNp8LuB8cyAuh4KJAP6qRmFHb1i9a3mznbEdN38CAoS8xx3gaoBXB",
  "key27": "53zjv7iS3gSXC8a7JUAr4gJ61zoVyragxebjEux9iqdCwp3LRshC9D2joKHpwWxBCmcvDYYYDiGLEtjz2W17ftjM",
  "key28": "5ReusZxnjZZ5cQLeu9tcekUwVwYLrq9W6epN3a8HTCSpCN5ZGT39inAvWqQxPKq6o2RiKSyzLjZq99oW3CaxUTHH",
  "key29": "n9jHhHKe7qqYMq7JuBcPST6BaMBHXdTK8EChkoePgBpcTnjxdh9pDbrFi5keE9y9jy6GKgrAxHEFLL7iysM56t1",
  "key30": "YtmCHSyxcNrYHQKtXCJE9yuizUweVXJTnbT2RYy3fMAJxEQ96dkZ82TxoEGZrcU9L4qn2jzLp46wUjKsjDpt1dn",
  "key31": "3KV2BKRw4oYi9B4BC3mZg81bShVAizxpHyxGCXZKYXENto4BLEcujKAxmugYWFjxy2uuoxAVoKBoHPPeCb7NV4bf",
  "key32": "2sFiPmeLuxL2yyHgAT3bJ9cQfGW6uYki889jBuV2ysW3prcuawFNcNdNh1U9zqsSSMtFZSkhPAaRVNX2TBPrGdgb",
  "key33": "5ynpDJTaUd2VcPBQFH4wFNKp8dL7wvq7G4aWEhQLbKbCgxVppPEubDbSYm7SEpisySHg8B1aNNfmgP5FnUT8hK3i",
  "key34": "646iRbjRXX7gn4WeTM2SXwZNHvfnhZpEXXdWE9LVQWhRBAZMKcfSbz9hB9byBhPJ1ssAYwPae9M6UbP2aPAG1QPA",
  "key35": "5wU7W4gFVvSfeDczprfRzaZ9FKT9M2MiMoCzVPfU9dPqrpKk9Z3NVnuc8EfJYqA9BqGNP1LLgRHqJnoUjnFQV8iW",
  "key36": "5od9MZswqhEdTEJxgFpZsZdcgXB5nM9bAtuuLP5QrEjfc2cD6zuM5TXR7kPA5xVCvWSCcXj7uhcHxvCNjHd76biV",
  "key37": "epZybVCpPAXhHiMahP1J5QhS2YK97fkBY2WdX56CPipNcFxkKn1dzqudDGigVZ6pjL9Ctfpyq1cjfQb2XFZ5wEh",
  "key38": "4D46AhrVXVYyscemBAFuHxhGqCKQ2qFkLEDncZQwpSLNZiingVWYjEU3ua9EzT2gRWw1PzbPshDuYLRiBDN7uDaP",
  "key39": "ebVzTNjBwfu872X4KzRZ7Af7UDM4ZRj3VnJrMLHqko6tteb7c1yZbm4qWYxZUGs42Pmu4B1xAsgw9EXeWV6vsc9",
  "key40": "53ZiNFhGj5M6Q1d9wkZq6WByFAkpAt5NExDG2mxjfJ2NJuqjMyoq3V4xXhM3mtiej3NTQMAWwcv1LB9FisW8u6Dr",
  "key41": "3Tg7YAPbSGYDDYGXf8scLBhrEx7yA9dnPBYAA5DRGBbHwpnrM5aMaDrfQqGrQUGgzueikgoUUZ9MjhV9Vgguroye",
  "key42": "3skTdbUNCHNVYwafHsdvTdK5HSHKqhr6NT6xSPaYdrV8KbT8dYZ65gywk3i88JoTMK4FVEFy1dFskrXQfJKAcvvL",
  "key43": "61AzbMtqdH21thrh7RnvVkCfW1yXetedx8ZbCA1C68yBaKz4hXzW7yQBiAJYPnzac8mWqr7vytVHMJkbD13SoRFC",
  "key44": "3qHsgVwb5upsVwBYFaLaghifBRkevRQodEYEm9XD9u61GmpYJkU4nhzLhdakxDe1Q1vbnFVLLC7JsZddjANy6nua",
  "key45": "3RHckDr2FoNqWda1793SVFANyQi1MdCiQTp2u8pDzwZh8ykQGfS89UpgKL8TcnzLTJDi7hQFScWEt1VRV9CUFFwp",
  "key46": "5VEzzy4rcATaMaaAcmxWyHxKvjfQFJxFZrb1692ZQA63Lb7Svch7sJXXhWEN23AkFk6c4hbeP9nsSrqGwDUcN6V3",
  "key47": "2nL5UaY4vJLE9uMoGUchHdjqRVMk64EVTqbYp4CmgzMshBphTPnJVHQGt19Xbw4iuG2D6iWDjz2zP36Mkd1AMLqF"
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
