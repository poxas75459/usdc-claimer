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
    "2REZyeASeCie8HHy3P6C6v5kqhUoq4wwFKoyLZ3jos6gfaoDnnwEQo9bc73q7TnCaTLLyHuGyyafbHMtCu9NVpUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SbZxzXU4FtRi6PLEGBkipu6hxjQwnoD9fnzbtVvZuj5oNfQAPaKM6EKvWpvnG3cjoTc2sHZ71pxxgH2pYjDh8J",
  "key1": "3XC18kwKWoCyoxagcdeX1SESQt6ZGziD5Pg7zCufZa1nW2CCkSjbgL7PYdFWA56j8EjSVaKJQfeHsJwW5BazhJtq",
  "key2": "2ABLyHy5ppsAWYJj5d2XDr2oxGZbiytqnj5ocUmT28ZManbfv9nTX5XLfZeqrgX2myNVqbUJiNLfgqKF93vKuyak",
  "key3": "3mvaJ6VtyYJFmBfka6UT7eonroxxbzA7WoRBSueH6wzLhYxwARzLk7c16gPHGy1RoaDSTRANMS4rSLpmWfy8wBST",
  "key4": "665Qy72rCd2TWTkUGTqiMhA9RKvkNER5Z2s8o8HZxNSrYmDgoB7bnT3tRg1b5RTQzPAS6HQcdvLkWQ66uabSEfgz",
  "key5": "3p8woUzrGPStLULjg7nEDTGJmCWxsedPjVvufM3dPVuprjkBzJVuyVm6M3mPKiiuxvz1Ldmb65mFufga5bfARtk1",
  "key6": "47xZKWeUUjS4xNb3gmqMH86HcR7h3gGmjFwkDi9PGRUPAKu6C4i9N8jAgvi48xjh75yibwSBrSGQbay46y92iiDw",
  "key7": "2LGosWZqpMW8EBAiBfCPtXFx1nPVaRQtbV5t4DswWw8LNjdHTMe3LFhKcnPuCpxSn5qqqGBWLGFUQiVosDCMfqv5",
  "key8": "5WyV6vSMRHMudoXQoEFSfVgpkaJ2pt6PhRhi7t4t68yQeT3mt47UAozfMk63QFewUUWyXXKy8aa7rbpNcfUZqax9",
  "key9": "5ZdQFLg9U4VNAUo3zdaP1tjg7rccmHhYQ5cPV471LtuWpTUoJox25uHkxs5EZAXHrQhfn2wgY6V7pJgoEjZPV5X2",
  "key10": "2TmbFTrSQ7FqeKnDoEpCHhhMKoGt2BEkG8t7gNBQzKkBAXX9GHECriC3nidET4st7ckGEQbTvYuZRoqW8d8KzCWn",
  "key11": "2ZpV1XMhuY8JKUTbfk53yj2Wp9xRMp2obmQdDnd3SjFaMCU31p4bHr4MS562jGGYJbekPFPbJhLRKZxdbPTLWcWk",
  "key12": "n23WTG4h9QFiUfthZgLQPKYvNmoS4ZLnc4zCdmM7X1Ftycv3Gomo4YUi8Y21wXtEbEk6RWF7jxYeBGurnQJrEAR",
  "key13": "7C3mA1Lg2LsLf896hV45HiQb6cNyqALnwRgXmTgU7FMukTsrRgRdmTff5qHErT3t4m5HACtf6ebsNEDUQGTR87k",
  "key14": "2eqqKvbXeCt7TB2PReYJEB9soLAfBk2s6KbF22mN5QoRdZTwyDpmTNBbwGVwpVjUsSiWa2XsRtCPNJbaeDkLfoqk",
  "key15": "5RPWhFWckjKVa3fu8Ui9cN4xFQCGMDr4tKLXtB933taLHjqxJe56aqTnJwzo8xqYVHK1pL2UyEJm9jyiQj4j9cpC",
  "key16": "5omApR3HaMtxyJ636rjddqJ9uxMRGGPFdj6fH28NFBL9TiW8LgMNSHkoF4ua1AmnYVM6EUX8jysYHjqdmJ2pnR4X",
  "key17": "2GVDzANj5MdQj5VhswmwPznAubMaY8xVJBF5iuXh8aFie9boEuEoPn8TMUZyVtUKaRVD9oGxAZi3RXtFZyKTHwjC",
  "key18": "4w1pMFnJki86VKFuJMkHjj6Js9VzaCpoJ6WkgYLjDDz2RjeMyQfLXoQeWNJjJLhpHzczM6X2L1WpZBzsnYaC1HEi",
  "key19": "3ejTsrPwXYTYUMTGy6gmt5mCwCVaSMy3Be5rmqNEApuC3SDDX872DuaUUTZ9RTYNj7T6VQcMVJPkNWL9DENpa5KR",
  "key20": "QYoLoTTd1FggAAhi86YaKYv5tNgaPqf84pD1TnenR4sZhKbYyaJDbHFk2u4mv39cCKMY47FasekWUZ6isnNaNjg",
  "key21": "2XyWguyWnou5j8N7AqBhMHBCTi4iXYw3oeHi5HAvtP2XLX1ZZMMyBjnY41nn3KqYn4GA3tD9Tz5SVUeUYSApoUqS",
  "key22": "2uceTSU3vFkKEttrpTLXgoGEAGATw6UVLS57qhpWcYbohifwo78JU8mEHx1iEh1EccbRhdHo5wfeT8u1bBYpsmo1",
  "key23": "46wUNWEJJYEyrR9nKQt5NVTePXT86t2kYYEwuvaUdQmnqke7vGRGVh69GHcr6AeMsLDLCbJGrA2NYMcryMhzySF5",
  "key24": "2tRnxMHo3PJ5ehaUw4SvMt1Rh3Zm9QCZwf92tjMCPY154CnT2QcK3rVynWab4z2MTgLs4LUJ7VE8yoVTWNNu17u8",
  "key25": "2rRzT1FyVYmYnMoqA4HyZyCgSXKTfFGJnLVg6orsjViEz1cXRvmrPCLiExj7Hx8fFUw3kB8Mut4iyofa3xhy8nui",
  "key26": "5udQnAnzc1YQzzsTfair2fnqDwyZaaSBu7NzKsWhp19tt9ZDhtdQjaEP5dbqYj9GP5vme68B5cioQKw5YTbZ5Rwf",
  "key27": "4VQSw8gJaXdrwxFhdwMgxTmCT6jj8TnqXEDHCGpQ6VMEKF9EQJJb6bbfq416AyDugugenLhnNeYQ7zWkBcnXQgu9",
  "key28": "4MLcVU4x1GmcLUgr7ENLY5QCnL9W5m3bEwStJwH5Yvh4G7tc9GhuPUhHnZwB9TDxoxmshaNahcyTjNxReVppSQUr",
  "key29": "3qg4XM8H5xCxmKaNA7uiXc4GufJ3pEwBGX5NUm9W8DQ6Lk9xro8Wp9mmrdpA2MXVmyzN5xgSTKtE6UqxdduTL7HX",
  "key30": "2oFmyBDUX6ZSj9iknJCSmRhPEHaTghuMzNoXjaNCYKAPGvCxt5RWgwUt64QPhnysNgPWmDmkBMRjn9mK7zZNd8PB",
  "key31": "4Qjj2Q4f8LxSoQ4vajmVjoVk5L35rELPWhjdNXbaUykhAJ5niq3oiJcMjEHUEBnGHcE895FGucnSFooy2eHAha99",
  "key32": "5pe9EeV2fVoqK9rAGRAa6K7xfo7Gxk8Fjvcj1r9esNQMnzUevic7aopzLhGY6bSvGiVf1Tuk9Vo4Nn9wUnCBunu1",
  "key33": "TMfBzY1txTzp9DrypivzfoDCctzN6L5oRXgWSNYKHVz2xtS3Ttur84PYKZTDmDnGvE5fGdZgMoXxLGQG8B1iNM5",
  "key34": "4WAwnRWrcLt8QyCyCrotBkGrj3rdwXF9qLwDJ33auHac19JMW3Geq4Lxtx4JVeybfPoxuQ8okfbQtBxiVErEPaAe",
  "key35": "xEguEcPRH1t3PVRWeMqLj9g46CsfjdP1bRgL4FcLJXJP8UVedUQfmZ38Hfh2vFvHnmn2f3zc4JgVHGp8FcZdt58",
  "key36": "474EPMxGHbMa3kkmUCLWnKb5qznssUzMrrULDpPHKXotq3tP1n6FhQWWysiz7sn3r6Jtvwr3ADuvx1x3pVczatEW",
  "key37": "5V4QPsDwdJSdjgtoPB3md7mdAaN3MeHfuc4g2CbfUYYwiG1VWtefGPfW1XqbBrcMJpd6qwWRBvxAtJiktwQuB535",
  "key38": "5keiG8JRTP9yHt727HnV3dwh2yBQ3ChTuBRTLR9KPojG9cNdpwRfVufoyw1djesibQ41onCAGy1Gocc1WXVknyyy",
  "key39": "4qUhzRhcA52oSQYXPGxzuSeMTtNntdnTrExeXgzFo2tzovKtBsrdJVpYgVEgk6gADxyJZjhXRFYgGwxTXxSnLYKw",
  "key40": "3sgwH96NocgKdi2Agnti62HiXc5gJFjrkzCto8D3jrBpsNs7KpCZMDsSrTcDsd92soYkPpig9GhMFctd3oPNrhY6",
  "key41": "5mEmzJWoLLfMc1NZA7HpXDQixDM3QZPrE2S8thzZNty8YaYUttJFzscNcNcgoxQPUmw3tpPrhYVKkmGSdQJpemN8"
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
