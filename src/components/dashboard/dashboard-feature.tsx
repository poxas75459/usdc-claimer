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
    "54S2wbeXjeT5Rng8fBJFyMqETjhYUTgagCXeQiN8jQzBXUtR7SuPRkJZU4k18UiaZvFfmwe9rnUahDbnuvfiE4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipkZLg5GWFwAxzqmfM5GbHK1aRx8W5pk3twJHpkpXNo4qdyJt129g1Pw9m7fZRnETFrNGwQZpi4RefFunyJNo2H",
  "key1": "2nHLSTt6BYk3RRhUzew7bRyJbaSnv2zLkWvUrvfpe13p7NQvLaRw1q12V13mdspaYdE8vdYMgQrv32iGDYMYpDoB",
  "key2": "5TzZY11q3nvmisPcCWEf2Dhx3Rc8mq59uA6gn2fSZFMJBH1sbsZezMtqWWz9VrqrfSf7Ejw1af5N6BptPtTCbsQj",
  "key3": "331KS7D38r4Fh2zLurwnqxwZdUMVmssS41nt1HoNXFZe1qRo3wdvzKDHsfkBYoMfewi4mY9n4fXq3TiuzeMrhE46",
  "key4": "5y9Q8UrsWKW9tzBEP3z8byBGacmXoYd8pXfsQTFhmQL15ftrzonPTCacBuvzzSUKfEiTAZ2WgikR2TSuUr2ncH4n",
  "key5": "2ZEcjkc7aP5z9yLtA5aN3eizkaeEgW9u7gVKhoDm4xBxB1AkqXK4W3a9LZmtZZ4Zi3vbk5xW175nxXguw2r8NAEq",
  "key6": "4tRJJLApx7qTQSiifre6mkVV7cVP7QQkTJ3qyedy7whzMZXSgn12JhMkvwmAhzxuiHQSdPRArrkYQxWeP9ZwstSv",
  "key7": "dDEWbwxe1zVSqSwWKZDJejDXBeswTELjz2UyTNcBzEnMszeuppBoB3mEdtNtpptjJQ5EZqYKG277hAaVtMPpxJP",
  "key8": "58r56NJZ7x3x33rEBJZBY5TCanAyVzmmuez5FG8NjkFzvRpSfzn84qg9z4ApNZPqBfFusPmD52ay7awyiFPtjTCb",
  "key9": "4ewdoJkrCNDpDJEer9eq636zVW6npF5fFZiZepWKm831rAYUDsLdy74oMPAwosfoymqsNYRxZpbqGZ3LuaoevBTJ",
  "key10": "5VWSFbUqLFmVk8f2tnsM7kiLFpaFtn2UK2eo2bKzBVP9TScuSdUE1BwrNSNantSCrpD2E9SqecM4oxw4K5bVVdev",
  "key11": "6dxn5EzY91ihPDSVabKrmX7kEyXDE1n8yt53aF3WkMGP2AVfU5ZkbpJjan4eKb5GHgSxAAVTWmoRtGpyzFqs4DA",
  "key12": "3xwPfaTLRdUfQ8hKSFGQoq3xFB145Utv78USzrwtbxefwzoSvDF1LYbi37zdcrxPQTjaCFzMynpeuaYt2LmAEBTZ",
  "key13": "5UNkWYcXE2D9BXdTeEXuwygtyPk7JJ22ecMrHRdiRp5TGpU2cbArGsmNGfKMVx6iVEzM6TzDkJTqJ6qfSv7gt6jV",
  "key14": "5fGhytJFqajcGpESECPysnKfKycGvfshiEmgoGoEsHCGvMpWPSatqet7n2uiovcsnowyyN2DFHM9uXS9JAwCNbx4",
  "key15": "cvapY599LKP9qa4kTwm16FMnZMCuUsEQo2oCughPxMvYzabzQm2ZFape4FBTdrXec6GMk58G5qFfbMAK57YXTvq",
  "key16": "32VsswZh7q8qCmyAPnqcQytHg1GLg6miukaKwoFG7e4vRMXJbQSJ2JpuPuqEJykEg8neSdwuifAwkbpuNGAM2sME",
  "key17": "5s4SymFqBZmUQydgUt3DWKzG4xpB8oZiopLn6H4QD2EV45gYxB3FvLL7sttkUmKRsFo74cgMf6R3hh1Qa9nPxHGT",
  "key18": "3psCMaN3gzAhYR6XdnRZhYg68csbbZVJX1NdMtL4YxnV23nSc1h3KfEaxuySsRaAqsNantsWn8wGcKAVmgRmgTnX",
  "key19": "3sbXeNscnttzTdqS7qrtoJhmwFq1ExhX9kzr8yBosbDuRXAZMFWfixe8n6AXGyMTzGbPPpGj8ggLXDS7cABhfC6Z",
  "key20": "4Pe96bFFXfExHXAE2fTc8aeihUk5RUC5C9AhFpwJhBQitWHNPiq8swZg4qF8MFY5U8CJnmiERS2WDEwyvT8j2iaA",
  "key21": "3twbrBxb3Bqao9So9xQRyppfLPQjuakzj8Dno2x6Ducf1975UjfvBkyJwzybPMcqcT489Noa6kQs4HEVJ8zYzYf6",
  "key22": "3Cseeao1b3m8pm7hh1MSP3xXj92kEenYh3Ugb9QQTe1VFXyDrQLBnTyfimTNGezub9kQ9wR6iU4qjauEFgbURvMo",
  "key23": "5dSAx73EYXFPrfsiCsZSCLWEX7iFCRegFJivTmD8Sp2sHANf918p2RA6TcMpDyjrXt5iYCkbdbDrpQzYp1Ep8rvY",
  "key24": "39P7umtn4XGYiXz8KzZocBd3jBciNJCN7euKNDHz8UXXxfvseAtJRj2DWud47Cd6QSSzBBVkCVrBizL5x39iF4t3"
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
