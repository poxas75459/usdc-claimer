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
    "3QHsmKZMmqw6RpfLAs1r4keZwZenwR6p1CF8ScJFtZcGFxPKM5ZePnkDgiMuGh114yuEQ6RpLxBYVW3AyT7t5znJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVSy5AkQi6o9rcdPFG2psfBKGoZYYXwdgNyRf5XM99sCxHbTMmXctRXwB7MGDnULdSyxvQjZRkKGfgBzi9bwF2S",
  "key1": "5aBFdJWGo2d5S9vRJ87JZScePwvmLJVg3neQz1Qd6guKCmr4yZ23PDXF2HHqHcT4fHxFa2Th7RdocJLptbrcs1kB",
  "key2": "5iNKSJ2NHzYUJzKmesxzWzr1mda81PfEedrXeSCJe3ybQ9eQoHp1RRVok6GJotYA3bYm9TXgsB9ssNv6Kch4QGvK",
  "key3": "3D3XEJb61zNV2hdzmnjAdxyBJMKtLtt1LRHDpjjiZjRqWJo9c6ZcqZgnfBzJqh8EZ7HX1gPhk1cnyR1QAMT7xbxW",
  "key4": "4VuFzy5uajqcVX3zePmkxZwLUyGwWVkAxD94UWT9GXgbNE3GwZqqA62B4weED17ZyUEqH4VUGnLccTiCtmCwKzck",
  "key5": "32JaXgqdMfbfZYqzaVGeMAT6Qo9TfKZJkXWdjBPeGm1oeR2mfjsYYPJPWS42FNjpVbmKwfTebqYUsbw92WSWm7xF",
  "key6": "3UtmeGYYZmDGMKYAro3bGwLXFfr64wQJHzUCY1yvRXitxJDRufmHGtCmMjLnLyzhcz9sGukPkm9eUX6TvPbEXbxa",
  "key7": "53ChZU5LP6s2wp52KwofVGGNig5S9QhzKuYnSKtm7G6iJmNhenYXgwhp5V1GMzASFojryU6Upucywc4bcFTyYeaA",
  "key8": "28n83zLgZ63bxWDxULxADXZDExetHkKUzVDNcDx89N86xGyxnhAzk4RSiYWkobaQKTgWSDgddAzreu6FBqzcbVxg",
  "key9": "3D6hAfs4LMp6dPxoB9aTxGhprVFrg2tifz36Wb4KXe6xiC8kXULXf721XNv1SZUSFHUQWM8bfDvaqzRNYyh24xvE",
  "key10": "4yt5CRxXM27Era9Gk1ETkK7J7bmodAMXH4iC7bRYypq4ctdGaMM4JZijN73CSbdooJXZCQ2RQiDJDJnes2VAazFo",
  "key11": "29Uy9LrXbGt5Xe1LXtNkFMFDCXv77zUfCV1RvuRW5fgLhxKXCFJJMJ6KM4mbccf4GYYbvgw56MBkPwGdpM8WWdTy",
  "key12": "24rWUGMb9V4SB1ytcq1uhZRL8o5K4qzHqyedt139ccmHDVU2EfhJqaCHtgTByiv9ydg2z3tnC36A6Th63sB86o5H",
  "key13": "2BJzpmNomJXTGCmhv36iY8UTTtfA2mFaW3SME9Ess9aGVN6z4HaacsVUQzJ9T1pMuNXpz7hCi88NyzG3HCbv7rdi",
  "key14": "5bVQZjovp5cgY32YQt8uuNQu2RyndzwUMQuy8kPzpkh6PYHBqKH2RcYpPdXsZzcSuLSj22K3LZ4PWzALaexj1sek",
  "key15": "2wiG8G28PEhJNmam2w9ciHooBqCHhVw2VUwPXLQ1VDk24Jxh2XF2x2DzQeStS4Zx8hQefUTpwAgwL8KKfZha5ouU",
  "key16": "3Xikjma8B3JhJ13zvRXRThNwDcZfmWnSpkKTTUWnqG6AfpyungBsnZ3smyyRtvRfJgC4yXukUQo2SiW3BxSLPWbk",
  "key17": "52oA72HdLEy3xaHwkJDSMMNAcGgcmBKuY7gHL3ZuuBLrZ9UHF4Eub3Je8kzqLGB2pn4HUtbzQzYksnYatVibqFMo",
  "key18": "NRWqGqRQWDDmfqUnEHBC62RqJAnSWRz6q9My1TCM2HH3R5z7m1pEs1XwuYbY6LXQdkBZENv6UybnqJj43sxh6QT",
  "key19": "5gmrzhH6aenZgWCHVJ7Z38cZbjYhvFkTsjGjK6TesADC84pWxfv6yiaTmNm6Z7CeF5GwtZCtRHgEbmzSDvEV9tQS",
  "key20": "4baQNmEUp6MJxb5rz2RkQCdWUfEL2vhA6KNn3SKx4eVpQoFNbsW771d4HR8kPKqs7bRdQYNoJyCBwdj4eCvkrHvM",
  "key21": "2zzdX4ERcsVJgFxEJFn7q3WxZLcSwv3G9X9kgu6Hd21PJRuXu2mZJfFvVcWW1ed3ge2PTTYbSC9GAZSm47vvFrbE",
  "key22": "5aYE3NZ3BXwKUbb2Puscp2XtinTigysSd5X1gfpY3wXHRWD8uUyAwRzPK9smyR175rJU4u9UzSfX8sfUmDDxMx74",
  "key23": "4xumUFSwDAhre8E2oDUKVLuk2U4iQkWuUVR7VbPxhyb3v4Sd2nby95X6P7wAigfzYevxCreF6SyweYB1jyyYR3tH",
  "key24": "4R7WwMHpxdpQo11jCCNxcUEu3JkarVhKvDqqAwu3xBDv8avrHLzV1U69F4N8PtTR6iHuucJk6sBoBJwYLRRzN7Sc",
  "key25": "eC6ysyTxjzhD5AoBkLXPAHocnvxkRW4mGhKE2HpP3LLdmgGZzrmQDB4T2WHNhPkgWGyVrADCUEw5XNoHTdgZWaV",
  "key26": "5FnJHFZdH1kVkkrvgdePujzyUokmVm7GKd1jgkQa3aeHSE9hA9CRYKRhLRA2sKXjjbqAmCy8R8rBHDXN7DHWRMxf",
  "key27": "2GyYNtDdZr4Wq9Tj42s7Bb1DNeegTnYQCnfJmGMwD56BDCxiTEJarKqSSYvaQ8dDUQm5kJThHghLiwYmKbHSSQR5",
  "key28": "3rZxZD9K3j7Cycvs9TvpmvRX3mrkSCNdPgcjgJHop7qQTbLnbvVMjTgC9mdJM7d9hNa6Cumh1K1dHwrtr4LjST2z",
  "key29": "5RUKck6KSNQZp4NL4iMFiFYLspRJYNQEXLkYfUFGugHsqyvxT8tshfgKaor93hfWuHNyDSXTSMKQSgvoZBr1icVX"
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
