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
    "4GHkR7tEXQYrmG9ZSgUkUx58uAVujLQ6wCPLzMAKWkKMedBUWXyU258cu32FuPicBZ9Tte85FqWvvg8mAdFAntwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2AYDb9UUMPRKWBNTPGyPDPvCjP4mMAx2mffXTczdJsnvMUGJJ9vwTGj6iuG2XrG59mu79sYc2rxFKEvu2CGKui",
  "key1": "3idGKGQPZJ3F7cVjZJoBh221F2uetLFUxRV4LNg1CN4ibEsgKtX8d3MkUr8fp7eMRnSjrrZLTVsahUGi8bagSGph",
  "key2": "2ZGYyNP8fAciE7iVDeVowFpWBNQxWxgDoadW59s4wekNokjgfnwy2UdvxBeru7ojRRbsAmeGtEWkzrJtmuBhrtUV",
  "key3": "Xt3nmLwKkYhBDGtH1QpM5tQRfJBFqhxp9LmGcbcsJo5XEqNGKJmFgSXBe7uZyJtTgwMvzyb7Gihfx2Nc6wy9XoP",
  "key4": "5kAE7RfwaMDAbNtTj4y18kmoJQy1k78GeSf4KGdb5z2HCCjtZ6NUQFp8wLfdubvbkTpfS2FJdWqdheNHsZjPbDSA",
  "key5": "5jpjbNNUg4Kj4TkNho8ZMEXxGw2wSD2Sj7MftXMHwz4gdujcJ6njHvzDtTzef2BfDh4PgpPuNyW4dQM8FJU2aXWX",
  "key6": "2bTQXetbh7kmHP16H2Tw4S5k1DZ7G3nASLT9Unb1CxVD6yxXpj31WS7iRFmmgdbWh7rfezvhsNmz1ertV9e26n27",
  "key7": "2y4gcG9gPZZvmmsA6fN9pdZiLqMiuSEDoLdukvhCXc5WKfPQgz2DSpQx9UCatXDxJPj1DRrxmz4Y39u3TS4S4c52",
  "key8": "5mA45GgpBUN1UdKMLdV8nQjTNwJQfKruZbydHYrhBghyS7xHnb7Js6RD6fbmrVwd5Bz28qQyYKT5aTZstYQ7q44K",
  "key9": "5mdP9z2PFNW6og72qzo4XThCusk4ZRtZpnuGahtCwLcAZAfhTBw27xeF35R3JJhVSzHbwVx4vWWRA3naJrVAoRi9",
  "key10": "3FJbiCeRHXmcc6Xd4Y7nQBeBTcgxD5pks8KWi4jgMGgAXBxK5wztgsXXT62uRCdCXBzm7z7MTrxCST9ucTPKTxFk",
  "key11": "5mtxP6r9V1MZQTp9LcDQ1jEKhsBKFSLDQAEx8i1N18Fjfsug5riU9TQdhnHAXs9JY4ydzTJ6y55wFE1eYfD981Nf",
  "key12": "2wpD8WebeSLLd28JFe96RjkjxmvfXu8F8oYfknPvEkM8kRm9Z6HdBpVwyHZSFRG6oRm2roMwXjLKJVMSbSrdFjg5",
  "key13": "U11QqmkjRwa97Nzw7hMHZ4v7rzCafGhKE8ewhYkA8ZEEgBcZX5c5jqAmeWUCENuSFkSBEwmvUjpdaMhTpvV6ybV",
  "key14": "4JU27WY1VD9iCTLht1wYrqW28hDJzLoBZGNPMV3YXCKmkyW8izS5xAzaHpWKvTtiQGocKsFBdbCXqs1FwPrGoACW",
  "key15": "3ivHGj7feH3vHFiHC57njQcYeQrbehXwSpFZb2sqmCpvs6tKatQSc3PKLJZZZywwJemmBbPhSTFhWEzdJM5Afufk",
  "key16": "5SwbC9dMDMksgwHPNA1udtT7PYLZpoobGqdakyUUgJL4UpbwFx2b3RZFsL4fTBbmLhVYYYeGW4e9oqyZbDd4CBuK",
  "key17": "591wNs6DR8waKFsfRGCuheu1ULRSFtYhYYzRxUZdEzh65C7q4rDup12N3qxPpu5uahbQ5xR6n9mVC9JEVAEUNazy",
  "key18": "5WMccCiSdeQTgaJaD3qftNwAcrJk3kU98e6PzkvfLAthm6cDDCzeQBSe2SaoCCBKCndP1dTHywtUVUgDk9Ted4yo",
  "key19": "5zbLZPKiGLQ65QjfmwLARFaAHpLyLxLL9QNHibDUMesB67S9eX4DHnnykEWpnTB8Qs8rK7UeB9ivKuDeaLRchKGR",
  "key20": "4sPGWS2CNTSZK95ZoWSUyeDPf8C5ZYRjZoYrjX1BcDPNVeamSU9TRCACB6h47nvLs5p5ssq3a8krHh9YQRX8Vukv",
  "key21": "5XaYyWkZZuB7gR5kMJ3V3A7fnxAALJHHm7Vx6KJKFh97q3wXE2zbL3BRTnQfmo3QxhsP6nJxjMP716vr3UdnQuke",
  "key22": "2LWD3nt8Y9BnejYKtDPBQUaMV12jNbeJnAVirP15Z5bGsx8noqBHjxeXiww8FPynGrY9tGnmEGy4EDFVskuyTprm",
  "key23": "2Xyy1MsVCya7Svnq4GJ1pEicXz86nyvSSs8BTQ21zw45x8PAcRpDzhdZKv3bvgGqmHrEd4u3BNfrQcxthwueCh8X",
  "key24": "de86QA27UFRNRWvrQ6cssfG7Wtzebu2TBcJLYMTErEYTwC4sVewU78RMC6kcsVzrchnDwtrTpuLocjU9CpRDbmK",
  "key25": "3ptYv1fShqLwtAhkoBuxiuUDppDY8kXQ1pN1Jfp2ZP7qTg3wHGpwZQxRJxfjBCsWQd2rYu4DJQw2rXH1CJsvPLeM",
  "key26": "2xPJskcZrdivUb6YUF2MP3rL8JQktDyPhnT72p5y6c2u2Vy4KzpRmo44gVyTrCqa9yPFX1SWmXzsHSDMTBmnYbJQ",
  "key27": "3fJvuPf6XmKoEqvaq1A6pifogVwUX4df9KdyRRRMZirb2mHc8j3ioTXzBvSB8jg68bpQM31AWUZRwnHMZygdrUHu",
  "key28": "5rsu9uCo7GWogD1NPhd64rRa8puch8LXSEKfBWr9TmUVjhC4QCHivvGwXCYiiu8dtCN2MPSaaNtrGkUrRm5N5sg2"
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
