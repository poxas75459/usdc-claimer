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
    "5acLuxzfwEkEygfkubTXwpgk3XD62BazR2RxKiefWzR5vCaxmji8Dt8QREaUCCycb9CCxwYJPWvjAP4Bux85E8Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJCgc2ggy87a39QcL7G7MnC1enLBxopUK2NLgtU5BumSXo6ggoibxXt9aQJnwgA99pn7wHTTy9xFdgdNACbqYMp",
  "key1": "3oXXeg6uMk6kzkTz5M2JmosZnSR1TtFyPKbtE9bSVJCedT79BeiEQpBs7KM5KdqfzXHX3uMFW7X8qPKtXg7qq41c",
  "key2": "57uwziQY4V2Nfz1ocFNm2PEuvYzCH4kQpHdhcmJKHnzfgXXk7FWajMsbDS55FJqhZ8SCn5kqQua8VBGLQiK53pSY",
  "key3": "GgsYnMUhqtqrXWAKQWXPNcgVTkgafFsRLLHhmgJ7NFpvgkB5n9Fe4M5vXaeHpPRL7trDPUBxXqrvEtiS5CXKyYP",
  "key4": "4VUDPxr8d1N6jg3KVfCYDNjTyXjeDq7qgvedKX2DoeoLVw9BqxRFqB5vAJWxfKLYAcz7N9k5GkYhhLLivHTTAYN6",
  "key5": "3kdj5Brd2cdWNLJZiXA3ZjGfQTGMEj8sa9dGUoArKatSDLTmnZcvJS9gGCUv21wXgtNdu38jshVb45VPioAYy3t7",
  "key6": "354ir49T2T2an2vBHjtnS84bZxnAKGGYvwQ21GnFNNwyF8UxZKry2CsEbY6gHqnVqWD4GTjf3g3qm9Qu3woQDs6K",
  "key7": "5TeGQ3D6ectxLyvZ3rrGKJfiCrjkKAXSBQjmgwges5z3f5k1cJxhNEeeYuiUiG3f2xgHEB5VbmPPNd6dHhetQVCf",
  "key8": "5nUHMXvYutfs4Go6LN2jFU8eotRU7AR4CeX9vkp6HDjdqSskr6pYqdfzXTPMeBrTD7PkPY6SH5CWrDEVMr53Uj8s",
  "key9": "5LAZyLMbKi81q4jak3a12ps8xBscoFCYKYcvAvgqsgrn2YFLdZa3y7kjhrS1nm1gJdwPabEWPv8WHY7i3PX9pxne",
  "key10": "4b75dhJZ6AuqaBQ11AbU3KC5Fon9TSGaGdQns4vGACTRYre8PP3oRnK1qUyqtrsxTi7f9tEPGU8YNRF2TCWoq7TU",
  "key11": "BU62fiM9Z52qkEEahdD2oNiKjkXWTVLHfCjSyT7XKwsf4Vj3b3Fm5NWRMcoJAyh9mny1gZaqMs86mvjqEpHsf2J",
  "key12": "4MWt1FQkvh1qYniZc9FB4CifcTwZgscSerFaYa7L17XVyGkspvqhQictv5NjtHaFga6NgRMK1SrqH8uMr2fhkmXp",
  "key13": "4VDNXYszLE4fbUcVnCQZcgawW6o4Mf54qnf4UwAs1E4Vsr6etPbBHMW4GR7eLDHJUzR1BfLL7AkrTYWTTRzjPxWH",
  "key14": "5GyKko4CSqgfvS2QFteuzLt5tXcXC781sxRWYNhhFaJCJSxQaJgKwm6Z1XF4tktpDUhrQCa9t2pkSDRyrWiHtV94",
  "key15": "2tMeKfZ1hVTNG1fykDTZaZUrBYu6vUnFdSjFFSoGCvUTLvZUy682RfGQczMcjMAwqs7f3YSoCLBHhavkj99jHbVL",
  "key16": "5613rogZ2XemsYJPpoakC31TRZjJbcJd9y1EinFj7oMLaYF2mbu78Zd4ttqVinwt3j3WZjG6pgf298jMo4MksPub",
  "key17": "5haHmPpFz7oJGJQf5VMQZzY1AoLepsF9NZS3fAxahQrmy5Rq5sRg9G3aNL6NC2d5ZJisSe4i1g4Z5Q5aQ9gWUMd9",
  "key18": "RjSoB9YiNG6DN7pNk14qxKc1tsG66y2EAGetdkYQEJ9zdPcHtns3sAG4ggNpYAA6LGU47iWmX9sbbWTfYnefmZy",
  "key19": "Q3L8bd3fNzqWR518NvxomUQ4j1dnSQmHJEGocAQ1ADCeHF1cjW6tBwZPafRdj2w9VrFW2XUUNyEDXYMYwR3QXuK",
  "key20": "4AMvr9zTTBKZrhRYfxsqMyUhWveHUbqpdz4G6LZRLiHkAsbNdcvcN3e7Qt1r62wdwVJ5svSzKvy1MMWynyAqve2V",
  "key21": "DK3qb3ksCE5LY8LYsjf8oHQognLxdkFgS8UxWGV3xHMAdyu35am6Y1CYDjpdNmGBSPLS6sTVM9GVgVzpFyh9Xm4",
  "key22": "3dcwwbj5r6x1QuKBLqvgWvQfmM2ELPwM23DNSrH8ie15rHJbjj9MgE7mtWdvN3y9VD7Q4ath3HK2CshSXZ1wHh9T",
  "key23": "21bnjysqEJoaoa2Si1R2RkFtrjAaCgmQJSNP5fubWuvENDeTjeNqgmC4U9S6yVV6ATmGweuWtpi8zjgKRouu9YLM",
  "key24": "5b38guhgAFwF3SVjEHK571DK2qM2JYDMryLt9zrs8xRaMt8AgwoZ5EufsrbB5H87snhCsi14BiJvqMqXde554e2n",
  "key25": "35dpkBQuVtoBft7PypgpYE81Bg6mCeqGybUSA9XxPHZQFhU6aK7RA7rkqooHDeAHyEnDsMZxMDsRoSfHs7vSaQzG",
  "key26": "dXHuxRjmRuVLuMAxB8JLARK5wTqvLh7hE9ipw3fQEKw2tX6DQMBTPQtW6NHcHXB1np6GvFgQszcw2XdP1coD4tZ",
  "key27": "25nwr3iG3Cn5XgFHq5FqaKy3Podv9YwDNJiwtS7wT6XmNSmdshRGUPwmVpLVKZJrwUyc4kydkHaXGhh6DH5SdnTb"
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
