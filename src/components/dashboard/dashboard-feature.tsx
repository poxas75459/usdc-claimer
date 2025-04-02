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
    "44ZcMJFyT2fx2F959qkExvhp2foPEa5tHDSMhUErfy8aLzfHX8tdukadSv4XBavmWxEFB5RzcAcy5krkckN8mEcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPdycFEy4Pf16YoTdFnuTarTQ25PYDUTesaHcsuunWAmyv6Gm2CYrXsDsL1GP8M8n2zZZHrjtckAebXMgbQ6rEP",
  "key1": "QgZDbPhJv7kWxVLKtKCLSd2ceC4azDpSfx4roW4vFAFx15pqxHqKSScZqMqNpdujK2DJZCc8pcMkfwLJkQEDxi1",
  "key2": "46B3T5YDHJHySFxgYfi7eGWsvg3SpTJcPzEpJSiZZD4cNtytFZ46CHUdMBqwmKcVCcQaWrT4gM8Fp3JrQuDYhPSV",
  "key3": "2LJ69kJoS8MAvxqdBwxMXspowv1KEyaeF1sjFn7QSABJSQTgor4Af1r4DGoGoKZiGd1Nscj2PwtCJDrJ8LtcyjEo",
  "key4": "4EdQ93TEqRUnjvgguJNWxteQCFN2mw7m7xVjGRJYAE6JgRuUkDHQPULEfcYfVDpGKNtdgJzT6Qv8pSsMhbS2SuMi",
  "key5": "3zbMG6woFrAkqAR3jMBvYY9jYrqBSUVag6nANKvnxdbqeCKGdeKAZ32qSLKTjw2wVH7smWNjYXUUQd41o7gYeEr9",
  "key6": "4tKX1u89CaLux2k9Ro1N5UoMTvvfdb1LP1DFWY4pVEkx15bG9q195pMPLCG9C5pRC65XGAhwHFCdCaGd5ABzDgWo",
  "key7": "3sSvd1mJgTqrnqkLuZbPocVpY9so3gzHzW5khVAyZ8DNEAYAtaVcXP5snYSRSZ3GrBbezcKC5iJCSzRR1inGa3qA",
  "key8": "iYsxy4mwGpa8JWAW6ZetjPYRiivX7JuqTnemRRT9MHJFE9SpWyzWnk7WvNywLRoKmboDvEuupaTVG2x3ATBWo5u",
  "key9": "3jkMySAHeZeARHfuL5E4obuGBjq4bRdoo5vWMCMUp6Xv6WWf5MMBkvBLkbzgPYves2MvvVxTbsuU66V89KHk3LRk",
  "key10": "4qTNt4dKr9yuU6T6YSe4mJaP96p65UmMs5Z7a2vg8bTkN3VVd4JNJMVZ3f8JmCMxiGqKPHesE8KyDhnqQ1qG8Z8N",
  "key11": "3VJAfruaQS7zTrTbbneVkjDBJSxiAJSMbYWooUE1MEkx3kextZ38pcVy6NQGH18phcvrjB7KKnGxvPrSMykrFzgJ",
  "key12": "62KpGz2nJZRe2HmPMzGmbW8w6D9TvSsZhsLjxF4XLdTe5KkFqeuHx4roe7mkf2fMtkawaS4MoBbAdw6fpwGRRjHH",
  "key13": "5Nbn385uKHfpta5brf7Hsya3uYwbG8V1UoT4D6gVxqktd8todfGHEeLfyXn3xBUh7SME7dZy5BDsmnt4wdx9ZakB",
  "key14": "3W8gxAQvxE4vmtZvGdTnCJVssuQ2jwMm4Gz28nymjca3aXnkfP1FaR2rnFwhrwwkX4Zokj8jttLj4KxxM4gaGp9Q",
  "key15": "4g9wEpPXMALmofkAbj9EwUDC3NQboQu993TWDdnMmpC2xx2m92QnykbfcURwq4hMxKc3akymdF2uGpoDD9mYpb9g",
  "key16": "3bBWztifNzn3TcSnQpRsWffNp13em5wcjA54ycY9zWiHTjVr7zSQhYrqRMoujYZ4pyZE5imjmLkhcWtArvUXdTWd",
  "key17": "4CCXAc7ntVmPBj96bT9wn9rqsBNNbprJz2TKK1yoCiu4bw75M5eGAf67bZg16TQwU4wmoFgoUME85j79RByQVsmK",
  "key18": "3KvH2ucCRFX8d85rQSgMqQFU7gtx7oWN6LCgpux7RgnJjmpmAhkjC1C3LAbyuAPQxgii2QczcMq2Rwb4BmATmjiG",
  "key19": "36XYJD6NambzdT17PhviiShbzYSEtpvZbaPF47LyYwQN6y1wndmmPTsNyLZDRF4hvBEq3U82UMnWtfhUtNKwMrv3",
  "key20": "zyNmjGghkbc33fuGXDFtdNj1DFDdmJi1XPeNX4c6iprpGGycgKuDBybTZKSQYEoUdfbVZFhRbCzi2XFBSvth1iS",
  "key21": "2wbcWv8267PeajTZuMsSXsH5yY2vJMZYdYgp4dtaVcnCufvc3e3pn2mHSobqpVJxyKfAS2nrXvQcgUHtjaVCFH8W",
  "key22": "3oaB1KuNVcpyEHHVULhWs8FB5Fn4v5iBpqHVFcMJZXZhXGW24dZkF4dMo8TVwjV77TLAxLPvZjMXjKaMZBkGQnmT",
  "key23": "5fUDmmfttVVb2xrj7ZuUu1MmB7nYgoWrMXWtUCNB3TcXhLKaPCVHuw9Dfe75wY5jcxov8BJ3Z1Y1CN3y8xPAxKLW",
  "key24": "2EJmMVRvorrCBtmLYXE2UhnvB6kfiNeBWp2ChuHykyUjX7YR7YeT2qmFBNAvMkaixrWkRtKiJDz6RMdXLzegZf1o",
  "key25": "WEpnVWnNLxNXvwJYuCqKvfNnHRGDDUBFY65BsNbUr4wWYwoWfhay7CzEGgLVnuTzjtmhiX91MwVmn6Mt5jmqutk",
  "key26": "4NnBtjPG8V3j9JorVvV1wJF6d8Kzjjp9BhWh5NdGBSW5AruqxRaq9toJyuRQCcVq4wXfWYsnZauAa37rCcyRWD4V",
  "key27": "37AccukseouebvDi53r9QGadgg2cT3SmCtLNjeNea5MabUwra5bxwS5Q8x4NpWTbqvkyUsSpFh5Gi7xpPiEuwvKS",
  "key28": "4wuaFMiVKTGEHiz1hXxLVweR1yZhLZGML1RQGqkRJSRHb83foExxL1CQponF7jgucenpojMhs13NNiPg32PoUtt",
  "key29": "ZdhUiJiE6JeYLBJSktDWsdEnZNPktZB4Bb1LBatZF7MmBUnTFqebJtVng2yKGJvEnamcdQLn8KHXN4Hcb4v1Dd3",
  "key30": "567vJgajL13ksNEXajLzDdbsLEKzQ428dSGCay8THPUsSHhrNaiuzehmjTFgvkPrHjDZweyXk99Nt7afnLmryLNP",
  "key31": "fPRb7TiQkG5npKwpoNWPsbZDToe6gKJDanYz5uLKEpVxN6VyGT9enVKo8E3tmyZmgXpZJZ2pip28EX4rwhKu4a2",
  "key32": "5j7raCF1VcRyeSVjzDxHAwD2BYoJkMw2k5RnFwsXuxnkznSUWtoN3BbaNQL5QFJYsRcD9ibb5LJ4YzUZPpZTiZ7r",
  "key33": "43Dnrp5CBd3Bha3eHZpE198SDWi59NzCpJn9dpiwtwpDUNkYeuRzY8Fd2UAAc4MFNJRx81KL2RyCgvrdQ6E9yvZu",
  "key34": "5Cz9oCZgPCgyVpqYSWkJiesvsczjcBfhDEkWFh4S1YK4KoPaeK4PnUEA9cmZ9ScY4owXWzSHqBfp9CwvJyxBCC5Q"
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
