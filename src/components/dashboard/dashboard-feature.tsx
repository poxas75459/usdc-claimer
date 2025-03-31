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
    "2RV7fMnwYWVq3aPx8Qejt7eHEYaGguCsqdpVTQ2aN17FmFbescjVW5ozwh4ofRamL8dai2SeWyHguzMNSLcT1vXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNpDMqjyzQyP3fSD4uFQWtxyPMgXykbwYVTtXkf3SLirMGHvufe3px8NS44E1kefzAEpjhzTqWiuFd5XApctBoC",
  "key1": "3Jg1P1BfdEKkUA4Mbefw2cp6WC767dwwgA2eZLfzCaqDMEzwCUZ1tutw5vHeL9ugZYyxK4QLeh2afCmCguXLwjti",
  "key2": "3XcGfJ8q5Fa6K785G2VVXxJy8U26NrW5qjiG9KNShFKogCMeAebNMVwo1NwyJYAd7i6fJyuaVLsxbJUasPuphz3E",
  "key3": "495wGp7s4bedwNx7Xy8Vqa16z3G1iFmtaGwMWzL7dnpVaVVaCxGkKnpTVEU49iMeLQmetrFpB7SgPQ3WmakT4MV8",
  "key4": "3qHyX2SWVvDKJ3GQSRngaFj3Jupnt1uGRtrpzxhRq4qMtsivc5kBANNUzhPXWArwV3kCr2yKf7RPCXyoLFkPyaZ8",
  "key5": "Cmmnt4C3zaVbHPSfg9nvfGgY7U1XGdYyEfBkonoLLGcPMew9f9WNQeHx7Ld313z48ocUkidh35DgUmepmQUEPAW",
  "key6": "2HCkmXrmeT6BobM9T7g2YaJZ5J9GaKw9YMMcADXRHL31rdmL849rtqbUqF2tj64BPx7vtLBDTQ8J8ZbdpywWmNtT",
  "key7": "28LqVHTNWPuGH7afB9nyJgVSckJae8Uif5FsRM5HFJdXVHoq59pyDdXrmyVFdCPJGmt4VisvEfczy8TtFHYdt6rt",
  "key8": "3DCdKHknaEGutGpSzsAAAA9FVXHN1DB9EKsn9yLkbWkYhGLTerwQatYjEoQvrwSHgh1LzHxoBJMaMVVLik7JARR6",
  "key9": "5kbwDccNWW5EmSihKzuniHEEnJ9UipmFkfh4dza5qmKurUii8bc39PsG2NKNTneusLYR7mXSfT1jscSjxgxiZ6fP",
  "key10": "rTDfbQxnTcsKsKv81Gpdk55grXo9xn8eSxBS5z2eC9ZCyfLLKvc63EqVJ1cKCbMwJ8BbN3DEPitSQSfbQxxQPit",
  "key11": "a8A2MT7odEDmzFYKM7R3JQpamCGg2foDnDSbKkteS81fbNrKS9A6RHgtAFirFTLUw1hxWxtUXurrxGtXmkCpg1H",
  "key12": "5Wq6syF1UmvBEEikES7EBoTwgMvpBdvBAxSyKebzne8ahWLzUNX3bjPaawPAFB4diebZrAoGPnwa6thq2eXvVZoV",
  "key13": "5fuS2Lvok3TY6fZ1okmuHsLutM9iGHn45dG3KVqPEysN218RHCb4BnbfbAUuFwX632PSXvEsgfDT9gEsraEXXwcz",
  "key14": "5CXLqQTqFUsaGSyaZJyz5dKv7hsFFKfRh98EmnLoPZNqky1XNcJd9hRZ6VGVAX6hMkgxgYz5N7zT5csQeVWgDcQ4",
  "key15": "21LM2CDnEcV5HD3vgWECRkS6EX7TSjB25FPWbKt2zZrKefWv7HKxMNszHTVYMYKpFkMGVmnQjfpVyDX6B79RtHr1",
  "key16": "5CRgGbGwKZ4qoD7FCqjnye97So7PnSNkTMjyZdMUcmTAf5WDv5EafawiScXF593KPUEJazC31qL2FjT5wV8nA854",
  "key17": "2Re9JAZ7ui2j8XFijY4ucg5EGXKqzE3jsngYsCBoetocfXHFfxDJAGBiASci3twGvioXyELDZBagXxTaDXF7rkTn",
  "key18": "iwPgagYgkLYFCD1ZsZFSPNHa6QwLFaFNk2MuAjag7aWPsJp6wsdMzQnksT5qdB7CTJ2Gu93mY1QjTgFUHDKVNSX",
  "key19": "49zoZjb6Pa1HeNxwhnGd2FPS7cD8bcNMyPXCFZ95hEqEKTiY9gjb5AmKmDJ48hpdwWTuJyRp17XbzTb2bmuMh4nM",
  "key20": "hkEEMFRzg9fJNvjJUVJ1URa39TEq2RVNqVFcZf2HCQSpKRS5N3FCv8n1xgYyta6GkF6KnfqTR4ZvughENTffxRY",
  "key21": "2mBPLG3SCJ4dBEUHz5zc7T2UmVybXQETn8ue6RQEcTQiWQ5v1aEBWAnsgXaVgeD6G5sdF9PduS3D9UqBGDoxfKyy",
  "key22": "4kgg9VWD7ZwEqJtpN7N2KVC74kv6dj5Q1sUEiRbW2bwEqQXt4mBgyer6zobiBnStv2Du5cxvAXSrCpq28zncavGu",
  "key23": "3JbNeQp1qWAw65jLrrhAkeQxdMphWtG5reGWEsqYAPQoHUyYrJC6LyobLCDAcX3kVSJSGmt1tZshjRtvyfnocsj9",
  "key24": "3C9bXNsDoAR5tn9srUZjUSiMRnLXLPVfd8aX4SgsgfhcbFX299ZKcyymjzPotNUhqtzien7AFkJ74AHY6CNEwC1U",
  "key25": "4xK3Q5FERMKbKhx4etKHJ6DhtrCHFdKB41pXC4Np16J3U43413XX5m4ybrvFmdCc8u4aWkSuTcKobV3VHezRmYuy",
  "key26": "5Xm8MT8Lm2FTN1ZEgLJtYxRXFXcDKdsUFsYqA6YG6Ugv11brE3Mhr4yKcgaqmrZziAHQQvvczrcTytfCtMRfL82z",
  "key27": "aj6G6p7QLBnC2Ng1fikEECdiXR2Csxuyeqy1owuALtF6NDnLhRmorxULhFQy7exESJKpy9ZUvvmv6Ck8PVruLw9",
  "key28": "3M6cnMHta9xkHQqr3wtkBVRwngbiH8wEVcjAHP92z81TKVV9nMnQmrzGhAh4JEoJmKdX4WLf3YSxkibtSdUNuAhV",
  "key29": "iJ4jPztyHNWXcH42ei61H8jMcAtTogUDdcMeUKRCFacNLkN7t7ScT2oSQYmgNeBM5JvKYPPJFPWgQdfGYpit54H",
  "key30": "5nCTAj3VRtDp7YxidYa6gYGdGtLwpzFWiXKZ5G2w9hCzBPzkWy6KhGfJ4QQvUeCb4TcefeyTxWsszk413b76cvL6",
  "key31": "5YEvb1HDorY3LTCQP1xo9kqMab95KN6Lfqoqv34RhBojsyHBzZeCdHkuftMjxg8pVvxEPZ2HtEJVv9Vbs3fxAcqq",
  "key32": "639Nf4Chrc9R5hHqR7wcZ1KqM3XarfFrQDhJfoBRC9AoqBkezEW6ZZ72JiXAjjkocHi969V8RhqiCXFKzpCLSged",
  "key33": "4EovL8YsBQ81geisnu4HPWyGtAaV7JDynL1oMyFvtgzk6rXGEG19DwYQ8LLkM29nmYsLNzv1MgkQsTdxCFDx7ALN",
  "key34": "5RxLyotE5McZHpSuT6J8mEdGyh6wvuE3ktR4YsiAqv5BYSiVkwkxHsqaB4qUpFB9CJLvDMfMytN1Lff4PLTT9a2x",
  "key35": "3rk74jn9PYV14hHeCEfG96TMpSuq2ynxJh7TCXUAmFtUGuZ4ffAe1ZkH8fh2HyH8h2KP6rupqD7EhtRvHVmwD6Bo",
  "key36": "RHRA1uhLtYD9rJZJXheQ7qU6YHSRj3Fcq8BWxyTeK9nNwxbHe673wuGCFJqFHFRMWcarVu7EJ8xhTMURxtkdobR",
  "key37": "249aDyyR3cxc3uRsmSMoTXgsN5cbxUg5vLJs6tAVgV2zJsyRT8qT5J2Bd9P7oxyCHVJ3ukFegLreCERMW766wS6o",
  "key38": "WBVDpWjEoYXG3Snm5tPsNr2BtwsJDxxY1Bvi1ikMTcwtQgPtC1dikELeG8L55ZCy2PFmBGRb2oBHdA1vRdytNhK",
  "key39": "5bNYMH4W4Rys6Ex6o5KmXSk3LGtmGDo7msBjS4jFFyCf51gfWUCWavWY8pPrLPfYVc1XomSyBz2fCYzpEomQmArt",
  "key40": "3p4Q3QZEGZuFCtoEJoB5oANFJrJbsamrJemvmgQj7jPfawVBJPhJHx4D6iZbVkRYkPw36o4YC1FESGEZnuE3YLU1",
  "key41": "3vyzocCtQAqNN86V7XryzmbSpijkxWHr5oMQvYB77Ejb6eSwQSFwY9kFNZUZptobYrqCzEpdxh3XwCD9kLbj5HRH",
  "key42": "3QsYBi2ZbWYguNZFrKmdtTnp5SUmLwiFEM1aZkttCLxwkd3eX92o41mtH17Ax8N6kcHBsJ5RSFwPNjL22QEGSkQS",
  "key43": "5me4GZ6wUBW5K2WsmzqstyvEcxx18G3kdXLS3DyyXNxCAS3ZhVYt1k1r73QYRTbsnEz2Wb8oKGknEbYW8SX3dwVh",
  "key44": "5x6KGxkmHGodW8ipwK5yLZD5wzkuLDYiDWzTCJ38ie864iUfzaHWnyHECshmZxvF6yGSDnfeavNidzJQKqPQyWSW",
  "key45": "3rMQK2E1UGXUoMbforxLYTdhpQWuPN6DmPdtDbh9PhEndSa6pEEa21CiUDmxF19WpZA5PTcLvCmPHzJ52pASzJtQ",
  "key46": "2Z7LuA1RBnHa3qgsp8hPUzLEsrswuXFjuyiitvxduKzZM25cZBWCK4TrLyR8JKK1bhaSk5Tk11NejhnVRhbm45jW",
  "key47": "k5XaxMPuEUYnLbs1Y3kEpUgDJjDHR7tzRdkp4W48Moe44tnzHCT5YNwB7uSDfkBjdRnbfmCRfQkvU7eTTA68dDY",
  "key48": "2LqTmN9CePN85DretA42o4fyWQvyWXFLfGurRAkbqJ5bNyTKHU16D7TKtZzn5563S1gspqFR5TaNXvd8NfKTnaB2",
  "key49": "rSUem5grF18aCYyqE4e5PL6GBWafpcSQgcwajLsd7bhMt3fREzpmSeq9qA3yHMzBYx1VnbmukmczqwRkN9iPtDg"
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
