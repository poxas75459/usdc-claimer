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
    "nLg4QfZd99fr3AhKrz6jCRv1VGKki2haNfMJY6tesuV9R5Ka8UBWrRyjAjdtiDr6KYtFgMpsH51nCekqXG9crEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5UR32ac1SotbwyEEoW4zf14oW91T1Bwfk6h1GRREXD1QqvJg6w1KNJmycvG1p5yGycPNZrbkyj3cNeiF6rbQc6",
  "key1": "3yjeWe56NucB2q7onysBgLHQTmtyAJDHQoNLzgh4njoCV14MQ8BnxeoPQYiaNo6bCRgrchZr1wpnHDH3fNzRXiS7",
  "key2": "5zR2s8p3HWXpFzc4Cb8pGWeqouJjk73ri7WHGidbRsopXcnmRD5X1jdXp7d16heDnitYWvwNXzEsFpNh5b8b8ueU",
  "key3": "23ubnkQwuGEHTrkKH9CUxcRcMeYVzN36GoEtQBvZpNdTeXQEuWp3Ssz5k1Bfg516aWH3bCdUCeLqGEfQKTiHBVh5",
  "key4": "KtHQSiXjCJyc52Af5oNtnZbgKx11PmUQjww1ZX4NMgdtNps68hBULpEbEGpR4iiVrQ7yTGGf2q1P9heXZjy4u2L",
  "key5": "2oHgwv48Zp4Hhe4mo6KcAHXbgKtVFozW2Pc8LPni8HUEFHpKMWJeBZ5uDTxdyrKj11BvBq9j4uqfmD8zFsz3KQq3",
  "key6": "5qn1d1wUVb5dvvFpCZppSxyrrVUyw4eYvHuHRvZDer3yYYw9hobyKMB6jFof5kteCU8y3UfKowvtgPPoVTE8jXQu",
  "key7": "5dABKPB27sqRt6nzgY25EfseuQfnA91RKAHpXB3E2BpzKs482EvtcxfSUcUAEqC9Vh3dmbvbyBEbSL1aTfGanejv",
  "key8": "4Rf8to7EQ47d1FzrxRQrfFsscajVSnSDLQL9giNdBWmtZrdqBKmxefnKFUZgw2izbtYoBPc3rfEnYmLeiE3Zb2En",
  "key9": "2UdHMJDvdncCjBBip4xCxwtNRnR5bF65UagXjdTzzS22PGrfxtDAkqNgkKY3jAj65Tyh9MbrgLxf7DnvPDrjkUsj",
  "key10": "2aZfd1poeoV25sfspoUetMhFRrzjz2Wu8AYwQqb6EswiSTqNjj2uj9qJ25yGJqUSdn7siGHGDcJUaQ7kDiQCjimM",
  "key11": "38JaUwk2CzviESYU9NcbnffvFEnwVivJvUyjKDdyK4WidgEx1u3osY41mJ7ouogbvDSEtxDbo1M5cmBUrJjUbeK2",
  "key12": "3vBkmjToARxyjSmtjcT7fJN2dZjLzFueLUf6Rzh6ymoeeQxP2RnkJBdzxc7if3FDAzs1dT2rGBSR6EGwcw2fETX7",
  "key13": "3tRiR5B2qHnkbXwn2eXJvpHMmWLmkWXkVVdvcFEoZCv7kqgCXZUB5WsHfQW7mzgixuPcj3fgJwnw3zx8pWUJ7fpM",
  "key14": "5o4vibuK2LNMBSYVQSZfqopHs1A4jMZELWa5UWv6tNSGcL4abE6UvCmra2vh14QNt1GHbfrJy4dhzGsC9XBVccFS",
  "key15": "2FS9adot5CxxGft1adBoCduEhzLa4vFGfv3DQ3GQN5kKKF1adKrJXFUUtS9rjXaLif5K1Yc3Q1DNaTFPDL8iUeG5",
  "key16": "5Z5mQ88tg2AyKj97CxLqGY176NmAgKZ2Te4asureaiccYztbXJgkpUW7RDSnPuBhnMfK6YozVZRNidSW3YnJEo8S",
  "key17": "2ZCbRGAXhVnfd9kndznVGENzEkzNjTwWjzxeMEdMbZ6ajcP2chxf1B78rYJz7iy3gFPbWe48thA4GxHEshQs4TKd",
  "key18": "2qc3bEBksYbAWc7ZmrjWSHNSddPEvG3bSshi8QjJHG3PsmPTqY3RrVHMDE8cp6toGUbUMMKC5gFbPEzmbaTnHpPk",
  "key19": "BgDvxfSXMxAgfJAx88ttZTYY2agVHYpPghp6etB34nAe7is3caZ4xLKrtUKPrjjcyqJjC5PHNtMZja6qhAfjuJ7",
  "key20": "4Fs1ubZoUhdvojuQijwAFruaqLhJaJbv9rFnzM7XQGJiht28XcVxXiiQ8LPsAsKRXj8pbX2WEm2GjEZbcsMcbz5k",
  "key21": "2GoNaBgtdY8fkAWXNVuMr4MLksE6rACqAacqWw9op2rgqXb6bExrCssQpcgmycqEjZn3PgbUEgX1PVSHzJ11M2tL",
  "key22": "2DbiaKdresDhAoZDzvbmyWPBJsQMYpS3WZsic3t5ePe6d8WpLTkwqRG18nAzgd11cRU3aRFWmEvZC6paKCKKSJf6",
  "key23": "3Cohn3FKe25hcN6yNN1qviTagAbXbo6FSGPhwk8eoRwAqevAxFj9dvkM5uMMQEPyD25cHVnmzHwYTMYt4Cg5uaKz",
  "key24": "4h9UuPkkH9Ubha6yggTsJwXcYw3JjDs3wXjDARP9FDUXmAo6yKhxn9jGSfAtNk2XYwCDdyPNseUTw28itTw2sNZH",
  "key25": "2UvxsrFhaQTxYZ7qd1HFYPzeK5D3AEiiZJ8Pv1BCkF21Zze47dEbMs9Nbkaa4KtLKVMuwjcbi27Vfiw5dkBzEU1b",
  "key26": "5TstmrtoaKvAskKbAi8HaBVq24fLoPzdQPwuLJconh5du66aWWFv3cEoJ9yVb9Q2BAotR2NtSx5g3zsJW34tgcDi",
  "key27": "2qRbRRbxdsRn3AN5eNt51fsT98Sm7GM6XK9qVZmY7EKKGmhirXf3NXqYiHVQMSGB7vBEsJwVbobxbi5z7QaV21qY",
  "key28": "48SFt4xBvosF6wQHjfs6Y6ciNjy4WHc71Se2nPoqmndg5jZyCm1v45J8vVJWQz28E6HM8Mp3HqGC9btNG7eeMFY3",
  "key29": "4JswPCt76V8ek7bf8hbp6sQh98qE6fJJ68Abb2Hj65JvJfhbPmTwMDzdbBTmGavBRqdtbCyLYKuHW2shypQvd48a",
  "key30": "3kXXFXHfiHFjTH4DtcU4vF8AXieXKaoEmuU1eXiijyvXtGgFkiJyLFTYwzvMNrdfVHZUKj3ntYBiNEzgts8ma1vL",
  "key31": "27eccQb7psYXYq85jNJRKiC2AnX8HkT2K7JhBwHdZtxW6kpKRmDgQ4CV2F3KGC1dzqNT3ozx66kyToK8gYtWhwuM",
  "key32": "5nMB8yYghtdY9hmm7FcPwpuEUNJ8MaPLTUdZZsatty4UTUZXKE847yca1esziE5RKJ7CvAuhgyWc6KfSiKptpWLH"
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
