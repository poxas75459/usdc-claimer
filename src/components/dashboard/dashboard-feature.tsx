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
    "4NcQthcDqEQLk9iUvf15XzAVbZLcnURbjnbFxwV1RYYnLAcvT7MLwVYuYryWzsQgo8nCa7P833JNBe3StUXhvvRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBDqzMpEtCGr1YX2V9jAHZ3PTANEJPba3hk1GXzvuAF7VmMjqVtaTvtkDvjeR9wj3Uuq5hXyeo1ZP2dpptvsu11",
  "key1": "3Mfx4gqwJxCJqG1WqjAt2KibvodXWC1n4KWdYxvSbXKFmqAUbyAzaSXSvzUKL27YZqTRBr5QEWjjn59zA3Uof79e",
  "key2": "f5iD13n1rTuQeKc8MjjjKXwy716YKuGhGCeUGeTLnC2gVmwHTgUy8Gb7u4SVDLmrPT12BY488JsmAniprPEKb9F",
  "key3": "2Bx8AT8DmBmoipgV3yAwikdgMngcJ8nq1iLwtS3qaS14mS1vdjbJAqLcFN7ibUXqKjaTfbMzDhgk2a4Wh18tsFGg",
  "key4": "55TREKV8wcfpa4MEv44YTTEW9mhTrVutNCbXFSMiWp3yEznuo5JhR3accHYWL2JdFve3NZ55JmTGAAqEa2hVxrih",
  "key5": "2FLU3ud4cVjr5kSxpDnt5RtKh3DcaVNGPN72akmPuyUwnoB3oxNicpZTfrWphjoVyTWSB8THwiYkf59eoLHsaEyN",
  "key6": "5X9ckTVqG6Fr1aoWQT6RngKBBFA8ha478d4BvnXr8DfpZugRH1VWaTp7eWyuiZt6fGiD2UkvgpceGYS4fNu2Axe1",
  "key7": "HB1tbc5MXeAG82KgebdDVyv18YJ82SJ7mvpbwDv6C7AEH4aqfwf4vUsHDqngtUNoPgKVuhea3MUqdHW9VeTwvPL",
  "key8": "2HmRuim81nrRRGkf68TqPGgzThwbreZ6h76JAXvAJhE2o1ZnyacCSfedNpQ7x2jDZKiZiuxgYazX34s1TzUAvDAA",
  "key9": "2XYck7qtnuZCjCH1JdchghNEGzNX2PoeynB81eknSE4ck7L2iMQY2QtE64yq3oBty7oqk8bkGFYW5pSJdCaj1yfz",
  "key10": "26gjerhcXUwELpoGjy9g2pLDLFLXz3cqSo9ESSm8JSKhzbm9MXyHrBgiEZX9A2xCLFs2NZrtUmXohcTzZrrAUhbh",
  "key11": "4eKn5NB3qtMSekXGoXdHLp1eqtuqZXq6ZCNqdZ2yRBxMGoFvYRyjEpfm8iCoYkD3R66RYVqQY9DkNT8E1cu8brj2",
  "key12": "39cYFHvxFb2VRdHh1ycDT7qevDqjvTXiuHrkcH5E4Pz2vCuvZR3AVFGPqUPAnApzaPw9igtWjhaEEm3aWoGLTwJT",
  "key13": "4bFgWxtbHL9cXDvUpz9xt7U4u58B3oga3Ma9kdGCVaDhuYXMct5QgfxC3xg2Sg5fVTQRkGyPwqr6hKQSBfAhX1mW",
  "key14": "XrENQcWLfX6bosatznF8biX1m5jDLUjk9HgVhFW6gqruwAhdnwPFAkdEWeGJz5c8UH1zABR69SJAfZ485oocJjA",
  "key15": "42wf6rSLt1zm4gH1UKXyWLViFUEqDopV5t6WPAZ9R6vzaMjGQnZhhrbPcf32eaZuguRFhBBnYki9vrJMLqqtwN6b",
  "key16": "3EdPQob7rWPfAF2k1BTbgyCBHTZthdTuECVFrpr59Wbs3imVMSgEWqDft2bKKBqDPjjtBKcEMDbgJKFQQnYULnMD",
  "key17": "a2x3ax8WPyWQbgXt9XVDPQdp1GQtYSSKRAdtUweVahW2gN5CG6KK6hTSjFg5wvvb6dF8RnQsosH1nkGBJ5UqXi6",
  "key18": "39rhSDEkhCC2EzbkA1gy2mJqp6b2fQvkP5NLn9BvhBVG5ki3Xtj5mvXwtniUq4exM91WZro56TuSUvYgNsouQ6NA",
  "key19": "AHFZ4wBBH7sPccHTw2oTCfSfY3dvL933oozgo7RaiTtGgzKJv4xZhz7ejBYyY7V3Jj44xmKM9WnFgKbnkVKR16q",
  "key20": "4NfJZYb3JMSkFJnRmRHyR14UCbTBCWYr7gtVwpejBjQQgLLPgDJmE1acMsF4RR7SoSctWCvtg8xTh1w3vyTQvcC2",
  "key21": "4srgt4ZiKNEruUERitiwSZfcPBVsxUdkj7HMfYcLcpZW9oTS8RZr8enxig1CzDa3p5EjocU8CkPZBtag1ieBR5ao",
  "key22": "3WbVqVPZzBUD14xawvgExAGzjKChS13r8UMDatLjUxebVvVUfsSp9JoJHUTcdbdCTpaFph2JkhxeEd1TTQYXBUa8",
  "key23": "5E4jza3yXzn8f7hpYJuBRrPz2FbjME19K496WkDBSTEkV1xXyhedZgweNsardCNUg5LAVXbKQgVzvR8D4E1SZzmo",
  "key24": "3judh4h3pJL5g8mCY4QTA4zWC9xrxJpecKXimvohR4paKAnodYGJuowgjGiHSZFd2Eb8nkNwzxVuUkBAcBewyGcj",
  "key25": "48nr3PUmG878cxv7BohzLubvLaijZqkGGCFzCE16w38rKBViPL7v6Q8S2cEik1ZM65VMFCpZJzoG2NyjBeC4dLa4",
  "key26": "WLFDFQntZuZ54NUf3jqxdScVSSknCXy9W3GL5K8Gj79AVr92CJ1WkoKeW833CZszTuXQY4a8uwitKiaHW4Qxagi"
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
