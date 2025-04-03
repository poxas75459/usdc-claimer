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
    "24QxM1MDoggjDEeNWtEWmiM61CEhmJHVhyBa74YQmpREQoiGFhgXNxCfcMcq47SaoVnKePfpFXS9SzcKydUN8aBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oA35VvPdcVwTNnWbMDm5UmC3PzFSx3SXSnAqqk5HLMZQAZKXvFwDPJ1UUbv6kMDJJfaUQGJX7Ni931dHaZSku2s",
  "key1": "jNrNjoootpQ8bmU3rJ8SMsCs84gTYFu2H7AWk11AWpAo9GwBc8XnJMrmYoegACDbbb1dGmS7Epks8rFexmaJDkc",
  "key2": "56ocieeSbP6EnZS5fps62ZsRXVSk1AmtATeue8TP7XLzHeRjcEG9P8HfPBtRoNkHr6BLBC8v3rduzcSu2cEYn6ke",
  "key3": "4ALVnkyDvpnDEUwshGcUSDVDie5pNSUEWnbiqu4XRTXZBUavmAhwJdvuvsbgohHDw4E6VbuG9nhZz8c3Pvv7vfSH",
  "key4": "44dqSWrp44gDrcCLxEKxP68aWUHace247849AJf8E7ypkZLSs22fsz9V5cM1puRL2L8H3EbYagFPLRdkXX3bCcJX",
  "key5": "21QF4BoSEX7TgjPSfy4TGiVE9wXkoPwDRB3nzJyfWvqpjBBVaiXsmpz7EEMsggngTdAiKpQVhSLAsYjs79LoB3yD",
  "key6": "3hL9cDMgKW6qcyp9haGHbt2VD9MVXmCZAVdCTEzhamqxuAT4AXVKqTXqZtB7JjJ3ZaR5LPpBXovUW11RDioGERYK",
  "key7": "Gsr982mox9fK7mze2pRZXD8vyGdMvpARwXkpF4f658GJqMja2W8gpMVvgp2Gz6ChFQ11rF7qB3iaGDZ7MhH4HPW",
  "key8": "x2B44hnxHZiwjHCAeQGMPc43qyuS6KwrBDFRVcsiQX3jPgomUg9pKVk69UqwzQqs4nwfmQeRrZhidFKKQJBK2tB",
  "key9": "5jvN58zDQBKh3nKpdXovfnm8RD5abkGeVe6BT6fe7RUdh9byXSEypx738qdN3Kfg6HA1mxK6ZsfWsXAFoBsaVRR",
  "key10": "42xKpEzg5JUo9vLbcq71a8emoJwh4fdKmSrhJZn8MBj1tqCju1rLrhmc3rHfgVtXqcmU9EQqk9J6FKw8fWLUmKmy",
  "key11": "QFqtFfaL7kwCx4nBaGRqpczs6qEw4e4kghVNnTApxCwTY4UpNRBCMrbff1gMUVgg85ztaDYRNLwfoH65A5AeoXY",
  "key12": "3u7ZVN6NsghAxPGEFPYLBUapzh38dUKkBE1VFy2NgugnQ1SQEwzZA1gVTg5ZFxreTVcmSLQZE637Xr9c2PfzcvTU",
  "key13": "3dJLaXKUkBW9ZViniQhdCqY33rZ4BifFidD7T7ipQhSe6QeAZY46cdThmYrhLwQht48c1RWr17GPmxuwirR4LgFa",
  "key14": "5q1tqDkxoDtPAiaBMojGrGL8rqx23BqEVwXk25LMG9iykJ8zTXTLNNPLk21dh3kCjC7pnUgTU234x6rfQaG2wLmr",
  "key15": "5Z8xJnQthmREaaSgkS5iF8c5SKwdbEV6PEWsw83knRK9DidtmMJYR4PC77Wny2fyxK6GP6Ebhbv4Vc8HmdMFds6L",
  "key16": "3n8BKeuEwbXLfH7KCkrRn3uz1hG6Xv2z9gNZUm3kL87LCJYDPP8kURQzAu5ciKqkGBH9QnLrYZGQicUawJ4FgZpt",
  "key17": "3VrDmz1eD7NoPuL7TTNSm8GgDYYaoqN5D4v2guFbQPXZoHLXQPRyABHCR4FfFnHe5tjWQyWCrMBE2PtXVj8Y8i6K",
  "key18": "3jmtzqYM6DMJ66Sm7ZVFbyN21YpqnKPGLFGy5kwZL8qnBgdBCrmXLz48MLLscrYsjWzR4B61jswk3rTmExTr14rb",
  "key19": "5LcRxiBBXXT2zxdtMp8FxrKeFaFBDeZaPAMUnHByrmRqki5Nw2HEMjM1TXodeTsNazPZpDQ7WXG74VCAwXS9utzN",
  "key20": "2atuTTudPJkMbhmQ3mBXjp5P3493jkEMbJ4gB1Ef2z4s55UyJHLfXVg51hBuu9QXNgaxo8bUskrTsmYd9yT3xd3R",
  "key21": "3eMd9GabyD1xD5XyAdMCKjpKoMUt4Y9iLcKaYxs5UHtgdGgmst3vP5vrpaMsZ3zEnxGWPkfpnxfhLNtS5ZJu1xqQ",
  "key22": "35iuBs57MkppWHmNogxKqGDHFTBrxMF6zus4n5aZ54Z8Nww2wR8uUydMN3xgn6m5zBeMzZByywKg3Zdr1xh7xb3c",
  "key23": "fFipCZ7ffJWeCYF6PcR5PXLK9bLxrc6Yis9k7ovR1BsWysovQ3VuKDuDKzcRASmd4tcj31r2ESBk5fDAo21f3r2",
  "key24": "3vG1BQ1VFtkNPYGHBRHLyqWn5h3JmEG94oPgpDjF5MKVzzSU5tZ7E8UEjWuVCkifHG1KqxRN3wqzhA7x6VcruFdA",
  "key25": "614RGh9fqb8jV9LFHwFKyMgFz1gbRqYrx3wvPKA5cmxPhjatq9XYMcFnazMVGu1p1piwjcq1ecuUXbk38FMLhdUn",
  "key26": "3isDknYMvWm421BVXuGRp7HwsqaHgupasXc2bKQLtcGuFGvfe6ZU5GVq4BvEGFBp2ds2eHfocp5YWhNKNBo6QBq9",
  "key27": "4KtwAGek48FD1btshsbgoL37w9aMZrFQiKWSscPFNETFefp3JRvaKB1D9FVEaq6FqKYqKXe24Ts1mLC4hKZgib6U",
  "key28": "64MChc7PnrtCzQNWjzEeL9UWdvzG9hzF1oVy79sNqAxG5UiSxpURE1JNWskks39mqkn9W7YttcxW8kD3yBHUpLWJ"
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
