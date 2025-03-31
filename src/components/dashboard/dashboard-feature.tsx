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
    "2tnKW5m1cKyRFmygsgmNBjBEMPccFLwZZVX7YjXS57eziL1royCBNpYTeSuhseSAdyx66dZUPH4mEXWg6nxPEpdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcJbNRwZQfWBd3GQs61KaA1SK4qgR1DZgYY2WRE6tfD5PBcrVWWpMdaWcC91nUAsmmU6xyWraWffRUknpe9vgmQ",
  "key1": "3nwUbyt3gQKrjiu2tNXpTZPsiNaENoU4joenCWV7ViMo7wahXjagLu2F7SfgSbG79oHzwMUk4Xi7Gsajz9hqABGk",
  "key2": "2mv9ctwX2JaGJYwQMdLKy9wY6LHnbW1cRSxR6UP2oXo15iXd3JLtzU8Qypb45XZ7r82hgMavBfdoRkuNpeKuEDd8",
  "key3": "cvyucrqLzPAZiK3JoRZSRKqvQF1yDNARwtAoLc5rrZd6Y44LfuLXRm5g9QwsrscGGvXE1fcEm8sE1VBYQ9T5GN7",
  "key4": "4RYHmfdhV2U4d6WVSLfYThd54ejwnRMoAKjD2xq4RN7yMhctAiVYNCnWaDLC9XHm9657beTpX7ZDAtiGo1XgHU95",
  "key5": "2kBdXgmzwbdDWKWYQZ1Sau4sLymfXXjC517ySC69beJhFUTBQwhCEFsScdJmvAs3qx6hWRs28V6ZURuWBDsxZwn5",
  "key6": "4frsR76TVNxRTETzMSjp4RWus7RZsjwQTuHQso17naL7RuUdqCrJ2J1RstfsHUADVs1SnejXBYfrBivMmqMNK8vh",
  "key7": "67Vc1WTeTMPncEV851ytf99vwEuymJsFYZ1wi21R44j23kZqgyvkLRbSijMpGs3C8dQmVMsAuWuhsNodsXJwQVbc",
  "key8": "4xuLyKAMZ2CccEktsJbaqPpLeu8NYUvMTs4gGLgWGDgBhLzEYYjyqkPKFx7wMPLc88HFVZyyVVNCsYnQLQMqphs9",
  "key9": "5GaJJhDbRH8EZYT9wuhVpg17w7AqqbtWEZduKPvicjqHYAWLCbQyTNufk7MqCpsSL1R6RPDbZdi78kpkwQTVJ4rb",
  "key10": "3UAKrPh5fzanSBcQaWroFk3PY4VLTcDmMRYjZg761ujXPJUtB2TAMxAiFJT8XW8wcggGLrHYoi27drhsTA6Et7zB",
  "key11": "54hErP6d63YCqYBPFRSvxkrAQ3LR6LeaFu43Mo1LtnDY5V9XaVW2nP6a38UUHFrAKNLddSQvJMjgarENCVYsLunc",
  "key12": "5ugRJoBxv3t1p3WanDwRNtPiJFGsRgyntjyjkXd8GqFF1dzik6XUrzc1SRe36DDjLPeoAExyk4fLza5awJWJKXRf",
  "key13": "2LKs4j6t9dtGzu219TFquUZWi5Hh2KRbnY8KqgEAZERxc4znUeJawntUhXwL3TfEGbkeWpPjcDyfPztGWpUZkrrt",
  "key14": "4oPw6GVEpMABonNW2ntjhv6WVGGvTb6znNyY8fxn4WxTD1W3cTQS1pEFJHWG31vyZv4w3tWQcFwFuHYSXJGaCzac",
  "key15": "56K33KXprr1GxJUrcftNqGUsJ7BpK64u3NMeLCPd7YsJbtWXik6UBbBJP4e2WDujki1tvYnakUNkjqUrKW62sKYK",
  "key16": "2UTC5HnwBDC14pscrpyJwx7Y3qRpqzXsQfHQHkwsJCQ7GkErRM8nTDcNzCjfw49ic1H8wyefmLPEVhnaVLnyyuUX",
  "key17": "2eMmAcaXnVfHSr9fVF7yhWZxtmP5meC7ePEitrokVqYHxFBobAKUpt19E9Y7B7J7DXhm6mhDgL817Y74gTEQs86A",
  "key18": "3xVkdYSoL5fvAW1ByNFHCTCnWgjRX7sVkpAsinfTvXovft1VsrcsCyNRSNurx4jkR32Ku4FMXHGm1WYnPdShH7cG",
  "key19": "23zKhRt41ChnDS9xWacaTg2goQmJEefM2toNArSDSHe1YNHprUUL2JTr1fn5a8w5reu4miWA2TemizaxnZqXjDL8",
  "key20": "8NVxwmbpop29AcFjy9xrg4WsUQZvc3bmG4DUZ2iUW3JbuDL6itwmqbyDeVodPa4ZdYqCxAucsCBzjVDeuamBHvb",
  "key21": "9wGXkQmnPiLx1sKJja4mefCGGcgebFpdZjeuNfVBqgrsHBKDpScRA7PZ8BHS1BQxs9p5fbh5W4qeTv5ibMdsKnD",
  "key22": "3eW4P1pGFN7TgSQJR4rwGzhLySFG5qRTebB9mp9Zt7bgT7kDtmRb69ZXPekhJJ6W4LaJmx9R43cYqq2tQskxtJts",
  "key23": "413pzQPdDLJSwFpKbBHkhNHotsjanQxVboGKuUW1Yv6t1XGyx8CJA4YrdCyegU5QjgsUVEZtst2EB7QcgxY4ajDH",
  "key24": "3GYF3U5WU6kXT2ddZbkWnXPeUrABkQCM1HymC8hXdDaHPiLTYFmhUtXF9y6gt37SHDVThaffWQjKSa6JNEerhse1",
  "key25": "3B6wS71YeJyxoxhj2DTTz1gbgALVooLh4aUHgmSLVUyZCKt2hmx6SocRVNswpMCZRWYygX8MHb7jRkV6DCUbB9Lk"
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
