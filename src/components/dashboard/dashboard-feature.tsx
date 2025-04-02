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
    "5p2nmZzkz15AaNy8qWMUqSQZxhNXkoWJ7pekA59GeCoMLvdVwsexrXPNV5ushbBkxEaKUws3DSkFEB9cMGN5qvJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8qtqLTYqQNS4HZxz2EQpkaDSVJiX7EZLKwDv13VTMCnjPwwCCshzAkeXD5TDhbsYLfGvGuR1KC4LNXUuKAAvt1",
  "key1": "2URuenw7apxAbbB8x8yQJvEVzagM71fsGnL6TJ97BRL7JYahDEFuDB3Uuz8LAp8qCqQ2bMZUWZcRrCYJYWht3gLR",
  "key2": "4SRJYkbz5BwcsRmF2dDV6E2W7zdpqzbp1H3e5VKc4r8EGU1FW8hk5da5zE1ZbsebaiB9efHKcmpau584WKUgtZ6j",
  "key3": "3BgBCxRe3e5G9p2DLYuC8msQcG2jtHZQfSEdX4NHi341Yyk3eRBX72gdUnFLEG2wmD9ZFin8FuYfWb6fjAzzDGsq",
  "key4": "5yrZcgnk9NvH24SSZMMSBK7FRbghftH3KMvunc4XFL4X7CKrB18VoqZwgnPRVS8E6VXwJE4xdVamkg9r9ErEfWdu",
  "key5": "4WKpebn9kKZ4VJgc8D2bp5KoT7DgMWrLn5qiTm3bw6z5K16F7xX5Znouc1KSoGfctuxhAcXztZrNVGAVx2YTkWi2",
  "key6": "64DsHPjLMPgM2UzmQhzqwcPWh7gg5oexijBFxrMfZVm4b3zHChqEi5ThCULkWUey1ATiJeoP16gdbDrebTsMD56o",
  "key7": "2NMXA9LgMeJi6mFNKxkisE9fehmsJGF7FNPwD5pKDJq9gF6NoUvxhj1ZsTD6TfbZ6XrhytA18unNDKbfkvNjtAbY",
  "key8": "Trt9W3QW7vLJ1RpSXGjzCALq6iYMSKKhJrgs2bcf8BYitbZMLK5iTy2Xasu1dzohYBpCwNU5WBLarNoayN1n4XM",
  "key9": "57h4QtMsMLiExffKLjK2CG5YNKxjmiYgcYCLHwkr655Qnetqh6z6uHx23RSfgJ8hyB5aNGU2Z9KDagRZhURuTcw6",
  "key10": "3NbCivGp48X16C912Dzbw7xTx5pZP6cbrqZnw7mrRk7qSuwxQgpq3H526EZ9rcqkPXkZPgqMrhidxNEZcswk4vTr",
  "key11": "3aj1rRJ6yDTEQuR3cbxg6ms1tmxeHtqZgrougPViqS2FPMZEfQHsBvGgAbL6k5uNWfpidsQrVGzwi93YvLun7Rot",
  "key12": "2AwEuUYnxmwFdfodHWbcpJ55VV71zYpLMS9sX8Fs4iDWRr3ZhRgfZvdRZNTeoWR2AEgDqhQv1rfdEuqExDEUPebE",
  "key13": "32yZ4vJ1ZFvBVkZgyYCdoEci9j4t5hMEktyUF77gai5GMRqXeU3g7sMHCDK7wmx6xwBhm9Ci3d5gmdmPwta5JSAa",
  "key14": "iS1sSNv6Zt1dwBaDcommJ88ampErakVx6ePXd6KkeixmUb3sgbQ5PxUPiZg7DspzHV93u5cSyr48bCvRxbLGgCj",
  "key15": "3h7SsDWNE4Qqij2g3aVF3HfPLStvpmAPnjDDycsjrZnx7p6Bq3ppsYUMjRCobxvTouijf5cUXqjUTdKaE6bHMLQc",
  "key16": "25JDw3APKndnnHtcAGa1eGKGXKDcETPurCugoqmaU6EXXX24c7akWhw6GA9oorTmWfBZcmbGRFyV3XwZFVhmdwJM",
  "key17": "4KZNchHwM6PAKtQsuWqdJH8y3FvfoGXPDoJFQDa2TL7NojbQDeChsqdqsZv5Wz6g8ri6rdqqgVEB33jnF45SP9bW",
  "key18": "2hai7Lfh9BzFYjyTD1XTBBXoVriJanro9hHU9JESNRAEkhr5jX1kiW8wLLA9yp9rhhX7unt3aXuUnj495NK39iMm",
  "key19": "4YqLZ29XVYDuCTBZiU57kheibPS5gefAX5KBaKwQdYjtzLqiqurSU6uuJexEgxYY3okYcxzaqtynLRmXu6qqzAdx",
  "key20": "sSfGzKEZJjcEssEAfooB6U8dkF8fEEimjhdihLvL6jdhzfyevYpX5Z5m4Sny2qVyXBntrHPbwK1hVJhJgY7V99i",
  "key21": "2T1LzHFS9rSBvs16pKKrgcdnRkJny4w8GCeBaCQhbavAsuj5yzZfWaBnvBVfNJUR7pppjhpZn1bNTMbj23aTGLHE",
  "key22": "5iT4TA3WerbeS1SaQu8qstGE72PkXYswkJ1vvfSiWAeZcRQpQyzCnatMgFTG2prNAxenzH7EaksKagHh69Tzxvcn",
  "key23": "3EiG7SgLpxquDA1RqAN7UMApur1Z5ZQDkBkueSTvkvSqDWeCsqRwxUiucVxfken95vNkt9NGr835uqY6giBAeVY4",
  "key24": "fHcVm7eqNc7LhGYXkPC6qQKXa1nrRx9R86Rbv1aQaLtmKuQ4k5UXc8B35F33AFdBV6Tw4SUhUeVTbca9phRHJsH",
  "key25": "4HHKZhiPVgfcSHrHRFy2Xqj8vExJYeAfXtjd2VtitubeBdnt5BiUkGxQw6Fnfe1Heysuy7xyNJvTeMJZvp9MV53t",
  "key26": "3KmnG5b3YYDW8uWLLrmpD93BxsrZ1x8EnVkZ4yigpiQypL3SpyHaNKmJc5D7SBNfvsiotvSvQPbh6pmfsXdHz5LB",
  "key27": "46hCpiCJwWQLKLGcg6LXVhRPRNzytz9cV8eZUm4u5DPH2qnHF9ta3YETctgMJbiWJCRwJ734f1ERskS5KWDGdFok",
  "key28": "K8e9UcRmW4U44ASKDVoL7uJtAP4Wqotq7XZM21nTE9e7DfsNXTAY7JsjdzgG6EaX2BpkeR11ANKtYtP1zqKH5kg",
  "key29": "3vkndnhLKU91h3Xov7EhqSkt3m1dzb3CnPmVg5X1MvW18oBm8sFLkyBLfrNN8zARJ7tgWMkucWnVAnBdYHfzHUZX",
  "key30": "2nsAtQGqReMscbspauaczAkdTrpwWQFoWK5VRPejAc4oSwELVgCUYsRNPVzhstof7g1ioQP6QDU5E4JviDSmBYV8",
  "key31": "3UaQCcAjUfvwaE2yyAmuxU8kLibXm4ApwQaR9338qfrqofSnG89wCh2LoH6hLN4oPQYbPuLiQnASguFduXCCwyms",
  "key32": "8hDLjPa7KMmZAYHURbh2oKvy9yAncqNWNTGaSzvSVwgkqzZoy2CzDD4WaKbsAgxgEwKDvobKv6QZkbCgfoFRZhQ",
  "key33": "54yqXeXVNSD8gfrNc893f1Zro3sk179yPRK12xSMm9esegXCJ9zvDfem66esVPLaYqFhVXHXR5kAbUzN9zQRwL46",
  "key34": "5fRVTHSSoZyJwK5QzVFUHMaGMvrGiwhdouv4FRXoSYFrfDJ4YVcQRZzzDrWJw4PEdyox2ogkhSjYkgJAhJtFQNqK",
  "key35": "4ngRWFbcRs38zPLezEeST6VsQMT7RfoDm54oCd5earvAvGuVZpwi4jc6u2g27uCsZBKFbF2ygWmzSGuD9vPdEKnd",
  "key36": "5sJyV6yTibZSKGX6hF8dgsV5AXF2EtCfaNEydubZyPFEHaXzYA8Dbf4t7nHYU1pZEhqk2mM5gWG4W1QjUuwxMmUK",
  "key37": "3NUUtWGb5JZkps3BnpCc5XW3Np9BiuNY6CCYEheiCV8WvqgbxzjYUDXSqbZrZ6zR8Es38qvqJrPqAknS25ZQhijn",
  "key38": "5UnvMWJhw5geu7reP78vb3WVaNg3Arisw3yuCu85MzZgDCXe7T6Hz5zV5dKYaufgBeq6kU7zwzVPs1dS4aidJu3c",
  "key39": "5a1zrdLHP7GNdTrjTyKpQ4SZgx1diMgBhbKavgPQ5NpQUbsGBrMmXAzsbWLXHvp4QKf5Kp1J91Peesw3mjpg3o8n",
  "key40": "4BtsfRKyCuL85aq27iXM2jCGZUqLUqiVgYA1AWJrR1RYQuX5udUPkgcewZnjDDEgrTvWLGQRUbpzqgiASNkK5QXK",
  "key41": "43Y3KNCR1d2mHWcPqmUADX6yjHNxBiTAeoyPWQLzbRPWJDTmqwvhnRvdn5MhE6LhTSQEvgpQLm8G8pBcYG8GdmJb"
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
