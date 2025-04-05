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
    "37nwawrpd3zcpWSN2uQdnKmtCMQffNBNMXgMQwodiAVXJt7fAbR3jr2mAafpsd4h3iSUnF2CoHWQdkcyPoriiNj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9f5x6WPZw19RyNEPrzufFyByEGyF7huwMAK9sLJvAue7MDGRLqiyycVe6RK84GVVMuWg1ZgmB5G8J8tCF2E9eBK",
  "key1": "2HWPuipzHkAqcCi8YZRUSWMXXt3fygAnE95dhQTGcuEs9CjiaFZSwQG8fk6ZxxSC7dF7MYXPf2yoCSTJAEit59eL",
  "key2": "4ypXYSVZG5i9u3K8mbzTGcGtcUAN5BPnz9mGFt12LKiZXMzGUubrQAtQmkTB5CxBXutmeGYmwSp6oUnCgzcW4teA",
  "key3": "267gjMhHGRSbt9UfkjQ1wu7b4jZhDorC1exxhDwyKu6hDXZpVYwd2ibyayztpJJFjTqWQeakDgo9rgmFx3iAoDxD",
  "key4": "4hAAHKJ7rVBVfRJ2e9ckyiDcAbrrYg3QSDP89ScgrVp7D1XBUaPTxS2fpdcxUzrdLZRYEhLZeRog8hgJEkawRNUU",
  "key5": "4QXs1ktziQ7m1GJUmLqnydJXWJ2BYzBiDaMMpU5rnaN7krtj5gohge2T5QEmxFZK9o2eNTfDXamfshgeTDsV4ana",
  "key6": "3U3FrYLV4PpUADY9myJaUMkcYawoxfDchWsF8L1HDJXB4PDA8Tz3cqDaudbbkpDPqtLNr2YLXB3zrW5JeZNaMA3g",
  "key7": "62hdKRYvvPDexKfvCkWT2gtKWY1RS6LKxmzhHuvta96yS45mN4dRe2DB4tNSCjnfzQebKLTfrN3zDU4De4VS6TcR",
  "key8": "2dvPugUvuBPbSNRyddndreiep1B2Zr2P1etnA3QZrQbXRAbhYiUrhYJPHGkwdoA79bRJGPauhUW4fqjNksYrYKnz",
  "key9": "36uikThr4dzRmgEhy3BywASFyi7H5NLYWMb6taGMEj51jDmqbQXkU1qMu7LPEshNdNTQXnnH1gGdysG5CicdWRvi",
  "key10": "42q5PuCs4wUDYcS9RScwhzvg2KXdHAvMK2GJK98xEGYqGvXTiwYmUui5dcWifeEA5SRN3n6Ve7qK6o18XRYisALp",
  "key11": "2cb5zJiYsqzxStFdK5hmo19ppH51is4z2GeSLmPpSfTbcvmf292KUoHRn2Ap7rbykTzQB6zFRsYvdxUvgrM3fHbt",
  "key12": "2U5xQ7WnjwTtcCHesYSWtsnNrRttmnXjhzfoXqmswmzw6tVnRiEK2P6XfyNQ71bGWPANSepcdqqJtoAJdABvrCo7",
  "key13": "3VQPHXSqKdALNd4Wet6w1rt1Qt48iPaxFErqchQX77fY3zbctsqBVRFgfigoF8B4mpaDf8XMWnVgGBnhmShQZpgR",
  "key14": "52MLbixPM1KweUs4Lyu2rq6SZQd8XCqPFcYaZkw1tZEcETatJ8oXEgSeJZuUDfQAGq9neuctG7gDCe8YT4f5hzTv",
  "key15": "22vn6fVAqdPYG3cCM4g8Th3Q5uc3JUMnSg2g2jQ1d14xz5nZXY8AfSxEcSiPV6ztsLXriDKt8dcS6gHd9HY96o1W",
  "key16": "4tS5XkLcEEGC51dompiHiQuXKuCPBYJB4YnzHHzFLPgs3y9r7m2kMEojWuFGu4yyApG1VzsW9qheGscAfXnqPsAg",
  "key17": "5AJniEr9GMGwDFJd8ozACvAVDSL815KNLCTJVjB7dc1ERcfMADQUFBmuRohXN89qiWfnbm6GTG6sL42QwoUHTtW9",
  "key18": "3VeNftn5QKrNFAeiVAS7jq9JGtAMXLX3EJbYqcq2Ysyzkwpcm7mjEsCP66CR1jCJCtak3bayGNAnmov63yToxrKN",
  "key19": "26TE53xuFJDD68KhWsZHozLnTDSTqZVf77ZSY8PRiD5zUrhSpUeL2bNWHtDboE5AnaR91bz8BZfVC3SF1t6riyZk",
  "key20": "mets99DEqy8PxxfhAApiq5yivep2NFnhg1iGCUyqRiFR289H3it4FyUvbgMQ6b6v7R1rMXre6WaiGWPRvKQHvBd",
  "key21": "rCsrV4g9UBiDw5DKxFZE3nqYFAqaoQGQg6hsKwC33y9KYjqp2mWdE6tMqszjk1KhWSy9WQVzwHzYADbGeidKRpU",
  "key22": "B54fYD4JRto5L87eRWB5zaxXuVdWC4CByxyWX4QudhdLW9jZSZimJAT4WvcqNuwLrYGgkKNdnQnoZCMv3sGVEez",
  "key23": "5ZdHFxnwomctx3TcQ6ny3u1ytGgd2s4jRW8WmUpSYySZ84bQXqpajEHpmyjWV31wmpqZ3pdaFhwssNCL9Z35DLdX",
  "key24": "xPPsoHqdLLcggauCHC4gsMEqKFtQ4vuYNCKMAS7YmasUaryUK6wbZ3AeH7SEhfMVvhrHtDXVHnoQ4XjMFyHQu43",
  "key25": "5RgRrGwkLAvCrCLbwT2u5ojgJV2vgrDrzJtLd4rZkQmAnEA4sLsiBLtJjkQhfS237Y9bG3DEjHRG8QWGWLZeuzZ6"
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
