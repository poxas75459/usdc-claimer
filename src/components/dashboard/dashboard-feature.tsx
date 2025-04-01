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
    "4bnDGFoJGndCJGpKBSL9jPzMa9D7nsfgVabMzyQnX6cbCuHDfbZ1cCRsoo8WEVohfXMe7PEGxhARjEy7gfV1gSAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DT3LUpej8TqgqmJUinerMCugTkWcUJKfA2gn9Le8hGEQ581C2dTVZy77uYzRqeTBMENnSEF9xSC4xP7sEaLok6T",
  "key1": "3pKdbGHPy19XPb1u2uJ1JuCWQzjK47N8gS9aW4CfSJ6Nz7fsNaUhVnS79tBd9DyHW7CUsCMLjufRrAKwUcnEvgQW",
  "key2": "aJNUjqCTDMA8igeaq2hYy95etFSMRbfReSk9Gk8Jvqrm2Y1L8J8TJvZhpDGWczNwkJaPeg5EVN3sjp5AzHsfaMh",
  "key3": "5ruSF4Fx1PgEim952GKURYgYX4B95xh4gz5vSCGULuzezCGm5FcoXmhNdjvqt27Dm8pksFWkywmj3rTmnhKUiGnF",
  "key4": "3xjgnB56rqStEDN9Ah1V6L3F6JGHetdMCc78yzFTgot5eBNj1jQ5RjiV5TgQoXatvUPL2AR6jGyoXQMTm7ydWj2",
  "key5": "5imZKWR5a7KGmj8Yc7kBtbKdwZ6jNXeALaEqS9EwGFMCFNBiehS5aVKRjrYkFRDPEeQ1W7c5x9DyCrb9XvGUfoAa",
  "key6": "2q3Nz56ockNK992ageVpuyuQ9vzHxPrGqMafzJUAnmUY1rPfKsApK9CKfm6Qg4rXJx2aEPf9GzbkXmewtaX8jhxY",
  "key7": "5bwyhM5WLGNrk3BgpKMeZJJCcxd5MnCJzmRtCPTSHnfGMwv7XShKAuWb2MuH3DXBmG7QyAz8isUJ5LUcoNnJG7Um",
  "key8": "R8XjZ1cCft2QWSnHBAcbWkV8gQKp3J5sSTEwqrTv3rCJn9tg593AQwdUfJmnqo5BtcKZwJcfvWwHaxUrT1Xe9Aa",
  "key9": "2RccU3r2mfp7fdC1tVP1tDtG7FJg6u3sP9zGVj97kxCzf57nVmaCqwPu1wyF1jgnJkG5WxUSTTk3h6JUumR5edp7",
  "key10": "4CRnVgnZpiFsaQgwPE7r433VP7oFQiNDBzcdRUdRLzYq4AHcTjmJDVkastavRc3mV1RgkoV8BciCScqCZBU9JxaN",
  "key11": "5NsUULbh9N2vupXaXfn2XizgEuq4zyEuPwReJTMurA7w3yN5egLZHi8aTxdJ1JDxJh7MnjpWbfp16WrU4TAeJW4v",
  "key12": "2isdaL6WSGnmzUVTMFaDeNyiVy785HwhzGTfZYfUBT7mkSNPZofnPDc4Ku4KLFYpryc2zLYFe3hFXvGkzktt6CSP",
  "key13": "38EhuhbtzSXyLTKLxPYNEjjXX5HVnxdVZGd7qsiPfFkvnRvzX48JCs3B1mgaAnCSTG1m3TQubbbz9GAGVFYU8fLz",
  "key14": "2QM8voMLNVz11pxvPks5dyoNoRHxvaqakUCmjXwgHeXB5wusF8VbLwuBdyN7pQt2dwKJdtMrEd7uqSg7tXhCe6ph",
  "key15": "QNkTJmvYLjaepmxNYgsjciTDEkx3xr4BRXVXvzt6pQsmX7LvJXnaprNpuQBrhhs8r2jssttZgGGATDdXddaGSL7",
  "key16": "3d42weqfDiSP2EDmsMvfioZFx7Ka4KgdxbCUj7oBVgXSAeGLFuyubmUwxHn1JEbYdBduJmYbRyewsd9hLkfha8Ka",
  "key17": "2RgR1cfAg7fFHT6JKyGur61n6MtusWYAVQDu6brw4FGe6epsmMR2c5maMZ92EvyyYjXnQ9K41Lg2SfiSXtXdhVTx",
  "key18": "2xmfF8fC7HoEPcMwmQA64Ja4WGRZ4BbYAAqVMmWdk8Fx3F3Zcnmx7gJhmc25AfpqTMrEnkcfKheHpn2k3z8rMxpU",
  "key19": "27Mxf72SQTkxCxV6Hy3AumuQ3z2PPVJSwveqLvm5ZjzzEVxu5yKZJhPtUEsiLQxCLQg7nAeZTdWrtHfSds47ggAU",
  "key20": "TCmYuhafP5TaYk29c6E6mL6fg9GyvVpJWcJXe1LZzpAiSG19WT1cynPNCpNQfA9VsTp39EGvus84x9RAqbYwte4",
  "key21": "5Pd6pmKuwZ7fDcjSRdFc1z1LLj5oskSXCKdWvPvXMXEKx1Q2TZqZcohdHxYWFBgwb3UBRBryuci4bp5yz7nqFVUe",
  "key22": "2gNJps44Khj4QQ6RyNUzWFfibKGg7CBrmpNA6mQwrn4NK1oM7CV29au5db36Yz4jLJ6K6chPJgT5du5ZrBKcV79B",
  "key23": "4fWwEGnNoS9bZ1Fi1pJhKJdi1iYxdHakUCMdPdSzNzcTcFdmaLyaP8TKDFU7gm5DYnM3ku4W3dTXjNHcV6xg5U3x",
  "key24": "47V3a4P663t7Q6T4WeVX8FZDvmN4WGCifHuaQ24eawUMj9j26LVjTGR3WNZ2WTKFd4tkYE2YMT5kJtjkbzVNE5o7",
  "key25": "4AyEx2Kto4kfB9qNJAT47NagNiDZ2rqFqMSogShJAHHo71SSf2mXA7WtoYV4etxz1G14Le55htzySTT3YbigA3Ao",
  "key26": "4jDxkVW8hXvvRrsSvTW1X3DTTjWBV5cHc5Q5TAnfcq2YjBPazkrJYm2RTakCCgJRYSC1kUCxG4RxVSm6D8MDvpk2",
  "key27": "27ZFGHuhs9AMgz1kMwHszZnkXf2xieY7rzDdYQnBZjidJUPPcDgGKrRowJR8Wrdzfx5priVjX3M78DQzp68BpJdV",
  "key28": "5D4Qf8YbuxyY7CkDARCrZrwZ67X3VhTKAsfnyyhgq6t9QKkTWycrErQ5fLWPUcVdpq8WjTD6A14XPScnMsDqJtUW",
  "key29": "4GRtALw7vWHTwf9GXjbWuAqztd9wwptQsSpAYgFkJq2mYsHcrGXRRZBxv8Nvi2ANyqhUeHMuEjLUd4BKhyTNzxyQ",
  "key30": "2ryRyD4fTgvad3ui5KJhxJ6NXsHBz7fffv41iZLHJpFaTyf3ogpoit3nMBJQ1KESKuTZQ9ScBKtD8EchQKHfwJsK",
  "key31": "2xvreMS24S8e4qVHRbKMNweVx8KW814FAorumLw96XFfT3kZCttgxsEtxfbnT77iyiLVYNsMiJNUBuCnHACfFzJ1",
  "key32": "2HawhuNxc4jDC1UXt6FGGWbNc3oN28fFXowL8ShbUXVqRtReRejMtxhnLN1AumDJwecHXMUk74sspFnfZ9aQKGeM",
  "key33": "5mZ5XYHRggeom2deWLFsYKripz8kjjehawcEx9RmzUbPsnmJKMgNDmfbcxF8oNSFbNueF4EnpHx8KypTrPFF2dkP",
  "key34": "5t8JqNtMCrF4r9fvKxmFc86Pj8C7PQ5uwusPMg8yam42okqiXXMG1vwBzQbSSeLBkDJR8vdBXEBXSM6RVCwRp7wS",
  "key35": "58S8AtU2yDjGjpQzoPHxN94ytqbLiefHn9SXyqxiG2WJNgQEvUEYsM1oku186VkUVQknvTvykRHVcHjz3vjmacgQ",
  "key36": "3jsM2bFDuRTUnJz2xD229cCcgf2P5RpNAnqTSaRzxzdGq9UhJNYHQYKPRZxqAGYLiCz5FxGi1cnscwVFSYMXZwbo",
  "key37": "3D5YE8ywMBEDJDds89gZdFtEa79hnpd1aHaLTDQwZthm8QMqKbtdtJezA9gsVsTYaR8mpASBjwRXZpUGY2JBZUvZ",
  "key38": "4s6GoQPEGCaWS6EFE5n2rQPWSfWQaT1TxejWBPbCMLYiEpXtBgLBFhY3xk2JqMGNRJ3zubzHyWd739GK73ERsTNE",
  "key39": "4wJG473jNMvNZTDZ71u166WtVjuMe6nKQHV8EorP9Qu9PSb2D9YTJ9nrPT4tAH13hG2a2UAW3kGJJCBiVhgyHx7p",
  "key40": "Z1AyHephKacsNbmbrASieKs7QCcLf3gFnPTaBxsnCgUTYMLuLVrKLGBN8DQvT85apGs1gEdEi2beshW8rXhLC9a",
  "key41": "4MFqTXFgSgGubqAKFw9JpTAGHYtbweQ8a3a7ud44s5Mhs3A8gsQZsV21LvBM7aLYHZXV6BwynfHtNrPENCBTogPp",
  "key42": "r7wto21xh95VA1QKcCysknVswUCfSptLY8zC7SBLzzyKaFGLVwnTej8hcdHPnF53BaRRV252iPGkBMdtrXPAJjP",
  "key43": "ewLrcQD4QyZQGiDPEyJujkER8P1A6T26Zg3knXG4kJRtkiaCbt3ZVKLSiGpQrfX2or2VGLt9oGyAWPdFGSbWnt2"
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
