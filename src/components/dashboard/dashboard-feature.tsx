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
    "4HgA57mLCiA47TLRJY1xux5FCvA3D7tBRHb8HTPZD9bijxCnuZV2s6yHYvX4cVaen8VeJuEZ88a3dm3hHqDb9h9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKU4ibE5ZhhoMmFLkGgyx5ZCZ3RfEvWmKbd8MedyvBXAwh7PjeastTQfUbaXSPvAFdJLGFcKLC36rNT6rLF1cuq",
  "key1": "2FjhXWRmbvuMzq1syxCa5L5DtZMbnva5547u9cdLjwrFfqiVwqQnA3xTNt6D2hVHgrrvcBJ14bGiKmu9A4U9g1PE",
  "key2": "4MP8hZGt6Hp3j9gjqargnHpH7j7oUbihHS7HNTt29DXuMGBAFccz6gehF77P8upu5NN8inQGCm61YX56L8tBVqXv",
  "key3": "3JZZWxbvENvsdTzD5m5k6CVGhw2WcJSqM3Who8StSaoA3EqEBzmLuWZJVW9VCFyhzXGm4uV2gW6TtS4GYuTemjTA",
  "key4": "2bW554FUJS4hVVv2vecuPsDC2e5K3X2EkHZ58fWeFVEXnuif3P7cUQRw381oVAnbQMSthnm1dCPLG331XVPXKWVN",
  "key5": "2zCXmqVM7NVuqtQAMwU31oEkyDnM5c3AhyhRpC7ykgFEpxAQNvYVW8vztJPBZDriDnGn3GZMtv6k9Uj26EAfp7zz",
  "key6": "3AyAJerRLEHuyHAaCqoKskQybCQQsobxsN7crQV3VzATdyYQjj5Fu9UFBzYrb57yTvHQqdFVhxAHkFZdT14yjEFi",
  "key7": "64ppxGh4iJYoKUgz9GQwp7qDrrzAXgt7RzUN8Wq7k5EqUwdLDFob6KD4krufaqKVaYxSNDn8WQtW9AQYmmR1rnJZ",
  "key8": "2t1b4mtskF9pbQrNxa4jdfvktg3Z1V67QB18SNCTAGJ5aXKk9pSR1ddyaJdZ3pnJojcLXPT4yN4hHwubLVfSFMoh",
  "key9": "2g7HdC9ue1axnc4E8UY1zgD6YFCPGiJvftNrRPRsb9yLpLezNkzJBUZ9FedKK7xCnXoeNwKVsDyhNv72J7mZdH2L",
  "key10": "3U2wsgdjSuopTrXYUsxTiARTmbwGRSSRWRjHFZTJvBx6uW1ydw1rZoUFrMi8kYRDcWRvNndMuDw3Xd69Vg9PLa8w",
  "key11": "3idaX7tc92tyiKDqMfN4GQ9T85LN7dRQJy622cA8FEP3hTajcPh88Ev8m69zgbNmLSPwfQSdezjPSHYZtcs6DVEf",
  "key12": "5ysyehkGRVmnVi1Ma71ze3pHprbmyJeuAQ7oAdnb2k9oiwFpcsBghuUSnRf93tQDBVnyxdoDsw39wayYyZ7LsC48",
  "key13": "wWDgqKTWARJKwRBcE5pA3Uibx6N8aTrD8esf6yNMrvCCib54FhHVY9CoGbLxFYFvCtTk7cKwFWChxigkgVMn89k",
  "key14": "3uZ5VS8uCTnrNccEU5X3kFnTYqpaqSrqGfLCa2JWCC7QDiLzLRw6RCdXyrazpQfEuodht6UfvkMPDBweARGhY1rs",
  "key15": "3tMJD2fLVSgZR9QJrDHVKxB132w3coob2QES5uLiMLqTfepakgYmS2C2YBvmSxXCvMHDQ1eAd1L3Gcki8ARVseLR",
  "key16": "5z9Xh3h6yYFq41eJzCb14kb4pBpfGM4PYvN3ztJtHG1Y73BTg8B2vC36Z8cHoeBFS3Ccu2aibCsZQvSfB3ckK6Cf",
  "key17": "3PjzcnAggKhC6m4s14Fe8qVyZDWPK1fCgeqCKhxk9cgvkL3XtKE5eGxvk3HJyXrBdammJYTsThoif9ZQ1GTvBVtR",
  "key18": "3eMQCjYytQQbhrFAM17ZF698L9MLeq2uW6s5xAFfN53DhUhHNsXXF9afpCvgbUxRCnDjSkbLVrc4ePHPGic8RUZh",
  "key19": "3oUjdPSn9TrUxTSGnYYV8R2te6KKrwVEVSvUcpMJd3AEUVZPHjDzsv1f5sjvD3xtMZYUneeLVDN5irLCMZQWpDBF",
  "key20": "4q1XQUCfgU7HvZTt6ucqsnfYCrAvg5ZgigHjZa39KdiUAUHXgurTWn8qhSAj8AzANQYFogej4b8PNoZhB8zMf55X",
  "key21": "w6tQaSG1AXX8ooswsXcgwae1Qrzs2fdx7FZQHo3xUpxKmUGoEpxb1sSNePSfqGa7jeBr6WHWu72y5Yf3ZiUy3Mm",
  "key22": "4aiDGq6tQGfJzct5AeEzMpw8CC5QCagGpRiQTNmFSphQKEkZzjAZFYES93cpEJGkKRWcjHj1oLE47P2c8pbjWMph",
  "key23": "4KitwssYBRBtHj3TtAnx29ED9SwbMyqHndYWqfCWARUUkvge13DoqPmyGg4fMqQn5gAiUgibsPaphdbF8qPkAiro",
  "key24": "kWr7J7EAyisvf1iby84iyV5gidphgsa1wXBTyz5cgGjQ83yotKqL5RPHE2WhaVBKN16K2G1MSh6K7UKq4dLTuzU",
  "key25": "3yhC9cLzp5sEnBpftvm6N7c2P6drZqvTwwsSwDN95DdkNrKP1dXVSii5ManRCnnG62Qj5JV62a2EEwrz46naEzXE"
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
