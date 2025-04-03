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
    "2DcKoEZA5f84tdjj1guV8FLJapDFdH9tMGZttzDVuBiZKutWP9kxjZqPJkYq9VqRRgmDfUZHa2J8VswJ3XBgE5Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRaeUTCnaK4EQdMUBYxqPEknKAQjTJaAttN2ANmE8afbU8fH8S6FTsVf77Mxp5KswTP9kiWjCC5c8CtCEvoj5hT",
  "key1": "5wuz8yy23wEqWV7o4qUVcn1A3YNCGNr4xRdVBV5zbCRa4NFhySfiWRGMcFFf5vZkAY5xAymWxFgzjMZLQMFjt5vn",
  "key2": "5yK67m6SxUhTqnh2YV3Zy7C4ADpVD5KhVhkKF9wY8TPAgdvGE2kinryUpmg9CZdSS25sYredJ5YhDaY35WjuxYFh",
  "key3": "ujiACAUpLsSJgTBdjmQigYDAchCzCnP218iz3sieV68KSSBgzn8mEBfBnKKRpzs2m9SttkdvBB4MNXPnWf1D5mz",
  "key4": "4joVaJ1AWJSPBbbQgRd661CyyKwsmRq8FWXTGQaruCoFM3E8GMWD422hrNHQvKeGBw28gsGg3dq5jbE2z21w984Z",
  "key5": "2ufaCxTfjBdCK3x2WGdL4qNyMBGJ3E7MxodTyPzqK6CVoZeJfEKkv32Qm95rAUN6v8C9dWcG5QBp4s4cq1jRDgNf",
  "key6": "21bDpGJEbDqG2sYSbXS4BhzcadHnMdAh2SBxndapuahDG8UNW5jD6DdAsrVgRjTdDxvFtUrXNfqjpGj4xhPrRY4G",
  "key7": "29mA1Lq2GkJhZtUSJbwdfzDAZges7NftGEhUxzHmxXkhAdeq4w38tSSL5UtDPL5guU98zbfjqYhmz5dzLJiaW43W",
  "key8": "57XisATpPDXkvHhwrrZNHJcR1ak8zX6ppCjrYkkLqra8Q1kXB69B3FnyseDBGgfhPJrYSeKLXT5nqaGe34xhADng",
  "key9": "5HYGc7z31rFMPgw4uTbGUmK2p3j95KKKshi6Qq4VmjztpK9UgZ5rt7B9SuefbafxDN8Ec6jRCzBifHmz5Ygcz26T",
  "key10": "5m1NTeejC8rnkPmz3tvmYf9rMe6rR162Q1CzD8Wizrs6MUhq8YtSimjR472e6cDDfKqpdWwx8hRytAWdUDrNJjzv",
  "key11": "3AXZztDiateFUZ86HJMWjeFhreKZ4N74Yt3tvADRXPGX18VvgjptipTY14yK1rspH1Pch7bVURZE4R9shDtqwran",
  "key12": "4y66sJ4ypzfCPQRKmzDVb7i42fcsBUDMD4BiZbkFdvrU4bePdTLeD9skhWxedudUAmBXmFJCF284YqZ1RKtZHmLK",
  "key13": "3Es4kzvAKtaEFTE98RFYvSy2bzRaVr7C7QyUdyguWvdiTY6A6rhP7fDeTZgdFsfLRQHryQnuCvv4HcSzoBJw5mxY",
  "key14": "ytJSrRTXVYqPQVQz26sLb9EHg1iCaS74JkpiMyDwUYwjUgezyq1ibejW67F2TJ3jXBWSzrGXnLS4rUzVhFqqJhG",
  "key15": "32MFQrmE9bA3rnKBYP7xBnDBnbeLiRWiPjK9W82CtNb8gp484TGtw7VcDetTgFFumEWzsBQRuHt1uriaDdgP9bEL",
  "key16": "4Ur477Ywp9rVaD7TMU1JfwnB3rGeL9nBkXsgReQQBWFt8MDzunf7MyvJXLUbXJyGti5Zw5uoP3qbTD69a916wTNT",
  "key17": "2byUtVbELJuDET2E2zTB3emEmEQBNFH9g1qN3yyCxXhK8DW1eTntXJpy6xKQcjLN6KQq7x1ZohEuKiV8UyeL7Rij",
  "key18": "35goNrwuoYSGjuHoP4n2aqWvdDzJ8DcTSXVsF91tob82hAHMbCBAgx8TPsF9u3NApn5Tbi4JcHPT3iD6V8HRNtvq",
  "key19": "5Y6qs7hjQWgiPVtYstwPtTfHeYFMjexJZuPvueP5v1Ru5s1ziEYfCgpNNznhq22ajMHUzaKFXdVdPgkE9B1LTomt",
  "key20": "21oHgsQZ5yXBtRQejYQhrs65z7kRZ1EPvTiJPDrubvEDmFYMhjNittC9jLMDg7S4QtGqX1xipHoPs54vK8tgWB94",
  "key21": "2uNrLKqL12v9noq85PGA4iqWzWr12bnhqYwTYY9krVRY6xh5BFqkD3eCdVUriHegrZFjknQ85aps5RdkrcNouDy8",
  "key22": "Yu3zGvPMrgLysWDn2yThfCu7SfzQRgGHPRJu4P19caRk3cZCh6bMNXXh3eunYCjUBzRFm7U742AMpFZouVLZZB7",
  "key23": "36bCQNjVyx3YuWpbJGKhEGhyr95g8x6dFgSergWa4akywhHEPYBuxe6hQphBgpSgGS6sa5R2QooTUtmXGNay7VsR",
  "key24": "492ejvi8FC9MVGQEnJBmfeiE1oW1Q6z2Y9ESHCSFJWykhav14fgJwkgYEfJ8cuMHpcw7XwFvoRw2fLXxSAHWX2m2",
  "key25": "yUo5XBs7gK6R5XPCAaL4RRWE7btAa1bT4WXF6E4oya9YEfBBdfCneKGMPJm2EpxBrjVka2386FiJ8V5jUEuHPbj",
  "key26": "35NJgXkVErNvKX635K4755ifUpCDQzWcFPRB8JfxmgX3kfELCeAVEG7R2rsAm17LFkVckdpARMm7FdjjwQRg4dJA",
  "key27": "5mggE9RyX1F89tFJs8FTcRk8U8nCD2gYBZ7JUKntoSTBjc5sM5U4pSePKanRc6tHNzfdT7fD6NSdSRwQMRoqWcbK",
  "key28": "54giFn2cWSqRMueJHXjHF8NzkErdSWSPApEBnRMqLoFvdrfUzxzFAAktZZsEWnaSeV584SdjjnmqQzsLyDXQdK8U",
  "key29": "5frVdUD9W95C1MBL6yx8mXDoqQouKiupAgcBKNk33TCiYXZkrT8f3UZ71iGg3vHzo7fq9db1M6qDjaDS3h6gPXiJ",
  "key30": "2M2SnvfJK3jSfG2DSqdn7Sh4yZoqHjuzw4v3ThCVyJUGX5vuR8tTbbia3BzJGNPpzz8D2C5FZHgfjPFehcWq1rfP",
  "key31": "3fnPqfe9Z8YSYpyiYJGWEkBof2pHKRxmSR2yDKh6uKWvuGN4nejZY8bWxXpMaN8pm5hts7wKaieKfF1CNZQ83W9m",
  "key32": "3Cb8ME7yn5dn81ayM5f4PX8dpZ1vnUEB86Ss9SFiao8E3WV9DTRGLNmuAiLxKQcobFggqQu4RaNB98sFqaDSdtfZ",
  "key33": "5P9e1LWuxrwTst8j5jp29vppxDAFjxEvRQ4d3qDAmu9uy9YrfK14PEtTUAwEDfdZKWqqSGKUWUpRfeX8K9wgJH2E",
  "key34": "5FKKcnSQeySLPhGoS1qjA4GP7S5ZiSvNBapPWWSVshWtwXbEJr4kBF6cs8SdL7SMV7rygM8xSPjimis3SQWaMp31",
  "key35": "5RQwrUx9ipncU2RarPLXHCUnvv2kRmTTPX2KfX2vybKSn6HiewpK8Psye2W7kstkJ6SbL4hSzmjk4HX3FcAMiZ1v",
  "key36": "5WW6WZV8txggxRztMAza1MjMU3xqiazW1Lf2NKooPiFidzrRis9HZUi6ty5rBF6fJ2bPiKDapybR1LCXPVdMS47b",
  "key37": "2kHpuk2uEzXFrjKDpBzGB6pjrAfFv81jys3LPZ9o1YuTWQ8wDxtTbUie2oETqUh2SBvoFL9BsxJKaHWsqHMNRA9R",
  "key38": "3Vj78PNkFr3NfPvCfodVHowBF6WfXuk2zaYAPLHkBryJk2V6mPipvmWo4sJhvQ66tLwNbVUde9we99wZA3QD4BzD",
  "key39": "64taqPUnyVgqXoKUJkPtTu9C6s8aMSoB3i9PuxjwqpgCR6qRNJyeD1gqsYaxGeoZtXA8uW9419m4rqSWxEYMKUAU",
  "key40": "37BWBiwEwcM3GEqQAeaVZkzKQZ7AbsYtorRH8a1pxEvvEkwhaHbW7rauTeZDSdrEXFeMyvtNkDjJRELo6ZWZmj1Q"
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
