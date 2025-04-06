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
    "52EhSXH8psL41NJFDyxobkhVwd4Bsj1w2K3VjYTJzvTWcmgwAiWmzpXq4VEGwFW2nKsLyt3KtFtJCzpBR5r3oaU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhnypPdm85SxzeuhZKQteQXfW3iyG5CJL9r5Vyq7wXQ6kGf8BUc8ApC2afJxPhfk1hWzVTT7TvEuxwnT6ZQqTU6",
  "key1": "fDi3UiJWNYRCMwrXt3GqPWqvXZRWXpTFu4ZMpdK66avoMnpPw4qMZpALP1XVssHmuTRbMU1Fum5yc79b4X6TiDV",
  "key2": "aExHXvVajgUU8PKw1mbR56UqLmcwSbEpQzfTEGvj262oPnXTm5xgVo31g4w33kQxMH6YaVPNKRXVms7EPk2xMQJ",
  "key3": "3U4943m9SuGa4Yx7FqDMPDKXT9wfbWRjdSVtczjrpwq9CFoAwHo5VhzBLc2Y6zF5SzRr9Zsx251zSALx9HeATd2x",
  "key4": "2fn6R9VW4gW3Us49smJe9Wx5VkKdqLHvyGDLKXPFfm8Wa6GUMuKT272SdQqocbKADyUaFNj5MMccdjm15Bmg9B8w",
  "key5": "TXUbkX42ajBcADRD3DoKhqVaNfb9zaiTG5N2z41mHNGhtPcXPDxE2ap75zUEBVppRAeDBeRXfVFdi2vHZPw19jj",
  "key6": "5tn8L4ko9E13EtXzap3LsqyPKbdDYZXVsA9MTbzmJ5EJRWu2HCR7rg6it9UKxtstG2cX7A5rFYJ4ZKWEp3z6MsyH",
  "key7": "3DjDxHNHYndonhN8L34sEnZhy36K9FiyLMCuu8vVnb2PXfCqZ3U1NAisd3yrLBkwXFEUXocqSwk7MyLkyxyxzuAL",
  "key8": "4GdtRUwB7fRyN8K84TodN2WykaALCexhD9ACeA1HqYQSbK7p36uu5rjunz3jsk66Q45DomfyNbGc4NhJ8jqKMCsP",
  "key9": "2wyRmJbAxm5S914AQBsYbXWXVXZhQRCrT3r4pPj5X1Vnd72QiZyKCfunDkLMVGmHwuis5sJ8mjFwyp46hWhsCawK",
  "key10": "3kYaqpbHh2A6UNXuydPK1xhNywmmWjyKv7cmiknWkigrbp7YK3Sg25FsKzcnVk11gc4UYGPCJ5w54aEZDbQ3UAdE",
  "key11": "4qXaXKYPoVbdq4G7ejWUquDQSqpkGLh3KEPLqwmXF9Kadx8P9uVZ5A7brExStqrs9qggU6UC5oRorfHo9odJWsdU",
  "key12": "4BNb5Tb6pkSonxy5kmv88b7RqmBCwhNZUGocsXUW2omij4NbqPXPKVk4NfySDtEKeQRcoiTsvkKdwnC1Djt6HcmG",
  "key13": "rBLCjix3JcHwa8k5EUWTZkV3u871pbNBYQbTPo6DtqgB23PN89UenKUDdaTgJ33ySsrnuaCgo5u839TfB6o3sR9",
  "key14": "212ar5wDD26GNLsiA2iC6hRxYKFnEB41mZyx3AkEJ7Ln5wyBhGzQ8bjcrrEJFejE6NwT7vxMC8ctXaXPk4d1PiYA",
  "key15": "2SLANZRCctvbvnW3da3wJAKAsKBtoodaeBDTU3YFeNjtRwoKDN9vwB2855PGWWsyTsddtbo4mgjH3Kr7tn6NaEXx",
  "key16": "5mVuJKcuE8uT4h6tVVuXXp4bCRWLrMrrphwgQu2BptyaezmcXBhurFg1VVN5rFnDken9ycPed1Tt9afDmCZDrWF6",
  "key17": "345J3k1eioi3F1gwqPT7Nzvkiufe81tCDfusEcpcM7nw5Nrm634pNqQWPyzzV9A2t6fnNoNEB6qZEw7XvQdmMXzP",
  "key18": "2aY4fudqDd2Xgc8aikckRzbMvAQbg8cvkMVeuKCsYEeu9tuDD9FMWcKvgb7Xfx9ENXHZWzaEx9dEtzp63Bbn9YBp",
  "key19": "5yBnkMsG2orWVJY11BxNgX3CkYnvuVpwi6qURp1LEQzweSawhiwVGK2kQT3KQgxxrjEoQDU8vHW8VA7RqtLa4SSb",
  "key20": "Yj917UbrHYMzYYkBbhG1K7eXJof7rN8dDfL8ucSwfXDV2ivjpdCUmDjkzu35HYBeyFo7soTDxfgt7yVtP7Rh4ha",
  "key21": "94pBVSHcwUQgipa8FVf8DcecY3nZsXEgpkcwJiJhPNszypVjVMXggXwZWT3XyRAkuALdBfQTwQDibESwhPtVuTi",
  "key22": "2yAVs1QZF9sHvxhRp6CMSAog2oTbXC7aU3FVFhkjVSmkcx1Vyk3afthU3vhQnUDe8NbMZRgQcWBVWrGqvkmH17fF",
  "key23": "55hs7rf2PqNNbY7pwRWeJDmbPvszjZ9MJMdQVjUbdUJ7LpWzN5K6pEhzxn3DaRWXMPqRpyJ3vyXZoUUXgiSpaxiy",
  "key24": "42aXPT2cb6NuZHGRERw6BM1V8qkfqU36J9gvewU7Jb9153RUFuWP7JkYBDsNgKMo8oefYvBzpt7cSumQ2B3anY8s",
  "key25": "dVSAfE6wTWbSLCQHg3XPcKjZqVF8UoMoxKnkiCqUJX8Ucgn9Gqhg7JmAff83QUBERs7TUggiawQBfTtRNxTYcXt",
  "key26": "4dbVYPRGTQEqQLoTHsyrgQKgun6u84SLVCnbboJxoKTGRMWiAxqwXYV1yxomFWkewo9amTh7sFCq3DcGPwVbYATs",
  "key27": "RP6BqCVWuwme2jCuabcZtnZdzG7qBbWZLWpgAFVcLk2qfpJkYLEHhtk8wwE98VkRV9rcPsebaooBzHAcgmHG3v2",
  "key28": "4GXu3CawCZWSQafiM6VbYAphz6mQyAPFX5RXBkKUVAA8hxjMWvYAUKzZpQaPod5KHczgxEv8M5ApbQ8EHoQhVndm",
  "key29": "AUrTQ33rQ174oYc4CnWHuNocRLs1akSeW2dzx4iWUC8pYEMZ5aq65E8gBy6MobkEh8RHrWUHBwPBdhtnWH5HUpJ",
  "key30": "3woaEGZHodF1PkqstyEPfccmAqASVAijcKsqmePqMgT9xt66mULCuRPJ6bBc5xyrx55cUks8YSV4AAoYWiSTpuax",
  "key31": "KnGdXfzSYcjjwfnKwzrBQAWopgTmSiAjFSiQzHfFdwRcnBazB6yXYEWhkvep4WLsknx45y7Tai3MfwBvdbo5Z1d",
  "key32": "3KonreRFXhzAhcQwwn74KE1ut7DppEhPrjCEnmr8GZbU8BCwhQuaAKZxU4bYq97yudNxp7151tk9cXx6thVgakZf",
  "key33": "ELakrv6yed3ru4M9bPphiereaqzrUXpgDfKjEQNAZtHn6FRaMsP8guZVGkN13cVwY3VndkGy9mcxhbfDhUMvCEj",
  "key34": "4Cd2MXh3GTS5iHf6AaADQVRcsAZhGM1jwx3bE1v7zmocCBAWx9DwT2g9LDiBjHFSJD7KNzWGZChocJEmRdv4fyD2",
  "key35": "6E96a1tUeq1sB95R97Vj6AT4vMUH3fm8Qh7sWpRknpMUZwL9GsUFrHJjAUq2tNuSJuzXGSFYKGyKAMEpgLb1NA9",
  "key36": "5uL8Gjw8DQUsfgJFZ7FHWnc1HMWVR4NkrXzJoGeyYJwgibQfrZksKnYSknp1ewhbEZ5DSKK6pJqizUp6BepsF7g7",
  "key37": "6QM3SsNMN1FkmUoLnjvkG647F9DyeTW9Fv4cGZdSBZ39eocTMcysprhmtd4xobUsJ68HnnzyVXLw9vwwmBXaApM",
  "key38": "nxxE25HcT6qXNUSGsQdRVV8Cthe49xM6NmdHXt1Zw34V854orWhaofEK1gh68REtF7Ef6r47tDDmuP71RHkLi8X",
  "key39": "4FUn769PwwTMbMhY1CTFmiZAuuHs4o523d3KUUBTdU7rVsnoP2vjn6eecCBVPE6erzUrr2u4hZNAUvmTYnpJ1eXE",
  "key40": "3FPwXATgUfSDKCPtB1Qu3UgeQ4v1Xno3LLL89aeoMToktkx9mJb7uhkJdXMRQN49mXpcZUo5z1ceAtiMhDa15m6q",
  "key41": "56u8dtNFY9B7yogRA19EPWyg6vXkURH1p3bfxEHopevZDnU2V2Pj5o8AhfFZkaiva97SKLEGetkBdwPt6dvW2ZQc",
  "key42": "5r3WJni15tkXqFqVxFRtGW5QDGFjhYm1TNJigtWJQXdZxMzXYvKLpNo2aYFeCsSZ15Zq9RvfNr8nne5KdkmA9u1h",
  "key43": "39FEr7HGWDJHVvNr53ETW9tXvEdUXmf3BJu74G5wJCq9B86t14bNhZdU2RW2nbD9Esv6CTG6PkVLvi5o4sFk824L",
  "key44": "4JYPieEYeU41sT9Q6jTKxyZPkPYu6quPBz1VAsTF8jwUmGnqSLPt7fofZhWkAethWc3nYsbsYA3AVKS8sBaSynEZ",
  "key45": "i9GnUhbspmKeX6CraU97RCoTJSmx5SA32oboFvRxGaVUEXk5hjfjyxss9owqGBo2hbYdLvDajUCGWY7dN6MzqZt",
  "key46": "4FcPk8suRAaUzDUNZKcsnT4EWFmd2FPJHtAb9FB86vVEaZejaYMDnCFEBgvgoQbVDK3njFfE8js255irUjEFWCmh",
  "key47": "9XvcMF5sAtf4TAqDzEjcJndwWt4vamgHfpec49FrCrzuUoi1Wttw8LnotmzMQ8nrCaARDofmJXYwHWkmxQK5dUz",
  "key48": "5TXdnyPjhkAw6cYMrLvejL1qVoiFH7z1pnHk3M6TRKmsuU2S7ei5yFCnsXuTbvdLGfKu6KvUHdsmYMMTo7PPJRtm"
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
