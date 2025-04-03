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
    "21Tk4L9MMqjXauvZCfb8sPmwDjsT89rTu6f7TRc54xBbTtraznXFVNTkpehfB92d9XVLJofCzHaKLvMUdBMuz2CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiH3yhzyJ1gW1QW7TVSJwZBAV5Nnj8T7je8YNNrqX9QKTK6WbKvipJALQiee339v4rGvJWm55AVZNcmXTx1N5rh",
  "key1": "3i1oqpAnDXEjwrLrQJS3qjCir1tZJuiZjExro3Fe64HRbfkmm2p4QxtJmMBgSC5YtUeAVw9k4934xQLtbbJwk6g6",
  "key2": "3odwZAMz3WP3BACLiJ1SKwyz3n4GDVVq91eSjysrURj53dsL9VvPQAR6MrbPELFNXc7Yf5v7p4nMfWCq9vxEP7oS",
  "key3": "638SaFGwByoYDG47u71qHp4ufsveWfEEug2pLhmDrr424bxUMwfyanJeBSemxtEVZ19PHb2wt4QVtAZZdbHLyJc2",
  "key4": "5Lk5UWQ1d9d5t7V4TA135vSPc3xhZ41SjAiYvsLah3eqtxjKJ4ccVBEmPBUS8yYsmhvNBaJ2U9dP2RQX89D9sZkx",
  "key5": "5GCcUE2TFL7P8To8EAQUgfGjBTpr9LYfWLms6vV9RhYEDE8jgHuzrNkmacxur9FxxJy3ZZNQsG2egZwvRMrd4UCB",
  "key6": "3SK4Q1AqtiY1JLvrN13kRiwhiEoX9atnj4gesjPhtVVrvmBQkS5sYGme8v6NFHuay3MDCDHxV8YTU2GhkHUqa4dF",
  "key7": "2PVysRkSRyFX51A4fsE4mEhELqvLNLSxo1ZiWf1LvDGN3dE46U7Ngy3UWXB9XxKxE8MXP4A8vygU6EByP5uuJLKy",
  "key8": "4sRqmpZSjvVSpwk9vz9FXDV4oab1MtiDB96is1rHduv24VSb2bYwuzgHkvx1HvQo4r9u7WUmtA6Xxf8ZBpoCAXbb",
  "key9": "V4xoBreYdUihuxBrcgtKLHjPXfnNAiFbK2HWEtdkC48CBjHAAsgHGUL7ew8WMVLmwCasLNQ1V2FKBgEb1MwXyt9",
  "key10": "E3LsxT9mPXnLHBCNpQpWJpTphP8FgwzPYR5cgcPVMSTRhqfS5XNP9Z8aV1ALuajcsauD8xXpTVhXJV3NPKh6Fcv",
  "key11": "5BvcUDV6TPVZ5a1u6bq8AhLK5UmfezPGsuQQzdGkD1EGq2Mtkn1FNvzMXd8EuPvasjvtXqHs8ZD47kfXezPJTJGu",
  "key12": "5gHSr2K5AYdMtPeHvxpXEW3T5RUwB9Udevk8xCqcXWo7HeVEznGqbqocJs3pw7RAqDtkTBGaqQ81DBu3cpsV8uvP",
  "key13": "2xZvs84Rhb9mWZAKsg68XRaJVYCYfqBznBKks6WyFgo5txu6snMSxokafaJvq2871JC8ap8yWSrV83qoQg5EohKR",
  "key14": "2sBerWttRXgnVsmrps8EsL6njHGVLPFQqs4dbNJqHTUi3Gj5TzngikdYN1KxxApdbUPYMcKspPWCAZZoXzLFfFNR",
  "key15": "64G4m2tYPTzbcvjMmt9QAkMBSnvQTtLDY2CzdjdRfUbqUhCMDBShr6T2d7ou8dNWCjACYdpqMM7Cm2nQfcG6hRCP",
  "key16": "4DjgZHqzSdntwEiAnrHTxCNVizk7jZGuE3vM69HKRk5b7vx3Kp48BXv97A4cRyVSFSRUAmmQdxrz9RP6agYqRGci",
  "key17": "25zjUuHDxafSmtjdHT6Kzk2SuvYFJHpgZo6srvWoLTJYHFp1vM4ebgi1UMfbX8qbR98JUn4T2AMrTi7i1ABMN6NP",
  "key18": "5oMLfgKpLxgSBaCSXCF6BdNNFGzNWw3CiLTfpfaEwfpadChy5L8pGtxsWE1ibXocjxkVjRhixc37SnPcNQUjxkzc",
  "key19": "4o15tpYdDps4h2ruq9r82AwYdYRAyD64scKwwmsT7KmyRHugjB5z1k5rk4fieetwYB9HAzt8JMCA9EAqusjSTRxz",
  "key20": "k6pQHmPNKaC3Ho4dGSUz8u1BYbKaxkkKMmtVtybUi975UuvJZBbYGJxWE3U6mpREV4MFnf92yGUuGJenhUkbLP7",
  "key21": "bogBVi51uHMKaHD7W1bKb4hNcGQEXgTfZv8xykf2d1fCu4xB9h8jDWn5VVwGYh3cnX2NfVyQ2rYeH1WaAd4EkTk",
  "key22": "5RYLZmzLipVLAG9hBbdkU6vHvYDBWFCxKC2GNPHt1XBzXK3Fd91knpyjmLRPnJrKNBSvVpg5CDwT8LDYDSyYc5B4",
  "key23": "4vska2f1jHBjeGaRAwdXCvR7rSuQpV4rnRCTwLeCYbVb849aJFvN7Xwoe2NxEwdT43etLrTsHpdjzH52gypwJVzN",
  "key24": "66eAsVJ3GeVFhi4z6UxjzNHkU9Ri9PXG1F4abJsp6jvggh3mEfGkpiKi5ZTyzNP8axiUiF4ZyJMji2SfYN8Wd5qv",
  "key25": "3vhFM1UynZbYk9FNpeDEWgaTcTPNrqBwkhGXoiJbE38JjRTjsWKuGSbanimFgMSmne4E6p892DBcL5vstPtmtXZm",
  "key26": "2tC5MYwfx1um79ecc2oKa2Ea3HQ9zrLyvpe8ruYhAfTjVJXoTbnrLJSNWPEoPTjfdmpPmsos3eAvYtq9sBGC8bRc",
  "key27": "2rnGHz4CtX5uozhuQrg3KdywwFwtz8wiye48D2y6tH8Rfi3pRV2X6NofjAE15zn3ct29P93PjyqNp7HAN1RbqCQw",
  "key28": "4A9bMeaYiTn7pSz1TqQHx2nh2PFQzYjTbyo2EDWJZyCofhEQbH5y8ncuWA4axZkDp4QLZYBPVRzNHDcqToD42g9",
  "key29": "479i4Ae2XMb1NdBq47VQpC6RVqFPaBXhisNBdFgeuQX7XVhtqL3uqMk4CCb8gxbj3fzWEXffnoDv1KefPuZsW7z6",
  "key30": "2y1HuWJwoD3zLQayiNLP8xTRUTZuUqwzz8PmXGCmccZQykqV9utVPoYokefA9VxcHXbiFXTyBX5rgynTjbyYwEZH",
  "key31": "38L1ZWkH7bkeqSXy17c23xRSfAg3d61DcTYRab9NHF3AWGYT6mkxjhH41DxV2UqeBU7GU9LWMAUuS6jo8BTFT3QZ",
  "key32": "5jyMtbdbGLFdezaHboXWAHLJj5KoJRCCnLv7JqWQdTivbp8WGTwP5EYuLn1nzmRndD6ahUJN71zafXkXcfih6WsL",
  "key33": "pkpLYMVR8xRnsLoxZsNzqTk8BdXngCCH9sfDbqprtHHabavHrb6iaB9K9gow8ZwjQtAivNTpWVUHxPPk5ugo4Cy",
  "key34": "5dVMbpiCF7B8zrTCGRyf9rCZjTsSQ3mnuUL9UdbSPWLGNu7tEWu9f4rB92oLuRRbgtYZhdABi5vosLNbPzA7LMgG",
  "key35": "4x7t5uNrHmhzyA8v6zDrfYMubSR1gGVFLZ2FLeVD9ARZJeGLSk3uVzoUoWyzxyPfSWAPWVmYasDNYAdEafMAdKJ7",
  "key36": "meujSNMCmw1n2gAmh9w4tWXkCuBxsiqT781mY5pjXP6yo7kQX47MUwTdCMTdMcUkwqP5w2MXCHHvoVQuFBMb4a1",
  "key37": "2aApcqFMq43skPmP3bwJxv2TzaNGatyibi1Junn5ehLwkGyWWkaMRMnuv2Wudc9w7SK4vUsYkLhHjA9mfwhiN1md",
  "key38": "3a4UF318ENKh3ezSa6begA44Fh8FbymrFzLYHZetiiqCdGzBhQ9hzV9opfGykfYBndeGk799UxrDei5gDJFWV5kE",
  "key39": "3fachDPWKBjHkg5nnNGNN3rzz6kiJFhCArNPMie5j2JwBEbBDNnBZARvR7xDgJeQyZ5RHzUUpq9sGVzzGLQwn4e3",
  "key40": "5Cs2tLbc4DLyTodcgqm9toxdaCk2QWCqPp8GrKzWtMfQ3veQKTy15cw5NZkHKpr6gzGEDWhGFkrEXtpKwHThJJ4M",
  "key41": "2LBM4ZgQLe9TXLfYN8Q1z3V6ArYWZkqLHW15RpDC7BE4cxzpDWiiTzwPvrWeCbTz5gN946pxdS48sjDK26t8i7Yw",
  "key42": "2BDaYmw2Hy3pAmjDx9Ng2S6BkuSxpBopVz3bib8eJtrsMjkFrjJ8B9L7SzBkzESVGFugSKLtLy33j8ZpA3Z8B4MB",
  "key43": "3z3RvfN1CzMbagE2mWD4jDuL4TP1R11STvMyyiWCFmVtVtoZpqSjHK3rPqXWJLYhbzpRaC9uTvpNhBLnmcsoT5BU",
  "key44": "fFaco2RrxfADoLH4VM8qead22wPCU6ExjW4o1JLHEFeaHGSRXXfxhmaKsApJhq8DhLWoqQkMq3UzEd24ZVR5LdU",
  "key45": "43R3gK7F5GvpyVAoP41j84inAmjzDaNkUq2E9mCJP6JiKnm4QbofD8mdkCg677icxvgDo9i63cmZH51DwsJ3mXyK",
  "key46": "b11y4kpLBGALiSxBuFKivz8Mjg5okazGiWP6EXFGpgyuPn9BVjbU6wtUk3CYrDECockUGhYDwy7MXoP4QBQwsar"
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
