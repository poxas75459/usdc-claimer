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
    "5QuBEdELZkuE4Kq41JoK3hax8zHS8SY9i1chhBiEzwSEAiL1Ui1JqYbMaXoX1owN6GZ6uWj8QnV7zGQYVcpQuau8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qyJWVrraKZEEhB5PeSEnaxsThbyn4XpTsGHCpf3oZPvDU1wJ9WHYZ6eiHL7DzkXqTnoqrL9bvNz7GfN8vLmKAAh",
  "key1": "2aQc5jezVuepMiPYCKombLwCfBAQChN6Z8o626WNZp2APRHMAAgsL8Y3nruHYLDQJTCJW9UNXujpsqv4qK2VszAp",
  "key2": "4k32HZGhBoCZYUgnF6wW69bFpiRSBRafReajmG5ikFS5FGpD1ouYgzRUxaU3gS7cAwtTU8G6DeFcCNYHDeXT8epe",
  "key3": "2UYTYrthvgVQATNpBLteGSRyguLiWr94GNYZGsNbJjTtCCWC8eJaF7KMdctH3CJUzphFKBX6zz1pQvL75tXbao1U",
  "key4": "3kHaAxHAnmeUFRXmazJQm327sA5ix98DRy2RnaMo6Y6rEh9bmUzAStmYCR5antLPgbDRUCN4YwK9uGBt3wTRAFMG",
  "key5": "29bv78SiE6CazakXSzrceh9zjoYRHGJXHBSJuinydXDr32Mf2tq3fi5tfr1JhuBDYAfthBHwidH5M9eDpQBiUXUu",
  "key6": "2sqqgkAMNVwt2tsEEDXYySGMQpwjA86xuyBfvB1qmQj8ZpaZpHHGQYkQwuegV2Y5b1TuThHBH6MjTjwTZmuKNxFH",
  "key7": "3s3zZjc1p4o2taMqQ6Uw98f6gMgQpJkfKooKe5nPRdd5g6coyUaFawk1i87yAFM6eWBM9Dgvg3fTeHmh3bCNFeRE",
  "key8": "5CEsW3YASqA49hBc1Eo9jaewR41zipkWzstfKr8xRnbVSSFAyyrdARedUYWw5vDB3pQrVhHw7Nfparm8cKdKZ9AZ",
  "key9": "xpAunr4zPoZKiVWn6sca88z3rejF6foCioKsSitwBx9uqUofWDiScz5kvaSa44BH8wvdfnyEUQ4VpXxJ1FAXXdS",
  "key10": "3WVcp8qBAn1FhHbo6cmNdQdfZMiUHkw3nMbVdUYSxxmq8PdPAjDV83Vou2uGhRU7VM9BCUhUtcjcj1TxLJ6dSqMg",
  "key11": "2JpyHVN2f9Mp1ruJU84T6gfLsrEAZtL6vqNfcuKsxiQRTantbP1Ji16BHBeLDS7zUD9VZWNULCkWCv3kD6REPioG",
  "key12": "3JwNzzCvujR14ZP8V22kNN4fJPQjartxMMttRpXPaTA5xz4JxJq62xDUY48CWG1BArjkFUQvq6QhwFJ3if5o8Pd7",
  "key13": "3zJSPre9BJPAq89oidPykCEK1Qim4JMiQFtacYGfP36fibcPSDcmmp7aXuWt8Fw7EHaQovWbZDD6vZiUZ1XX5zsW",
  "key14": "4wJYCyANJCvE9icNk1qnDTCmLhpCKDqTYdzP6Sd8AXYwxWpcXbT5kbG4ZTRkftJiz2YchNgDQoxBPgiiXYbyexBs",
  "key15": "3MzErFgnzb36E6nEcMdqTP8gwzvsQ4Dmx8Q85UWNbBzs45Q8joF1b88TwqX6KihF6nn1XPSbWjoMbvf1g8Yd1ciF",
  "key16": "2YXasdGDufd5LQvicAD8sXsD7fNqeVrn1aUBqknfnGVh37gmBm2TAxdnS3NKtreFFNws1k73PdRYwmzSMEjMtZin",
  "key17": "3sRByAY5Y5YATMxPKmdLUogvnetjrU9Q1zSks84qrTA2LHb3Uhtgt5CrRi61vgm1BfmmdPcjvwJH3BB6Px7CBx84",
  "key18": "5d3ikhiA3ng31N97H1pC9EMSQ35pZ9niMKNffQjs97AHRv5idqcftWj3jEoUn8gYw5T9C6Bf8msKWDtnpJxphHxz",
  "key19": "5P7BT39odRLdGvE5cVXQ98RuJKgFASF7rhF1o98ZMrHwBn4HouvxeRAEcCgJEDzAdrd8U7TFf7KnqoHhjfPVgxSS",
  "key20": "oeRBF4E4iwRLZ7fpRtDoxEfQrftwtSybZ4TQvJ2NSBC7Vz37B7fcrUNwYnTxrbVQAz3tqeQC5BNAVwDFDSYUcFa",
  "key21": "2QdyRypiRtDNteVdNXMrjdxKdbmiMZr1TwSqfjHktfjjPmZhqVr8gcfpgtTnup24NTHpUgkeZHhvDMf66o2omNLH",
  "key22": "5kVyUhptjF9rrV8LJPoJFXAN2QvJdfFWMcZAtcgRA2yUVXsLMhHhWhueDF8DNZUUrr4QaerKgicQDzUYdFMrPK3",
  "key23": "4gkzLYm9pSob9CD2ggXvu1ma7jRibYnb87qPmdf2As2G9sbmR9tgBKdCKgDtmNyDgg27S8s4ByZ14gRom5xFE5Wc",
  "key24": "5PZo2MD617DJFKzCnTC4ttYcvvxzxi5P22YHNB3bMCvUH2jJLSe4ccH9aUUCBaSDYvYUZavHYFiyzyoLjcDE3XAi",
  "key25": "3JcchLQEdTQ8h5dZLLajzHnSGMmUGW9CpRyK3twnKaZbGdJWoNr2B6uTBjRRfbZnTxUdqRuFz3YEc6nqxbFgruAm",
  "key26": "56Z6Tx2f7ZZerwcFA4cY4oboMGsHnPAsPfopCeFk67Nk5FS29ABDw14oaCcPRkKM2kmNkEbZf3BbLok1Cv2kUJt2",
  "key27": "5ErWV8WNVFK12Khqy3MvpwYg5rKgkAxPMRpd6rp8g2xg6epaytBpEEPVXM9vyW3THXaqXFpw5vK9xdfayu9s27z5",
  "key28": "7AzKfCUGdvLH6CHFJVTg2qFqKi63aYp51CgdhfkgKyapMiwG1ujgP2pC9esa5xfG51Yn95iyMmXfUvEnNb1RtJ3",
  "key29": "3QxeAPFcmYE2XeDy32rMoGnLodeRVw77pezf2tqTqj89icHewjJK1oFcMu6py7tKEvMbcHsq1tsP8UMAzMgt66nk",
  "key30": "3zhSaVwyzQEkMTPY2R1TEHvNbCCsPg8w4rnp64pXsCBXSYz6FJnn65iknzyJ1HU4EGQ3TgUbYjVLtnXhNb3KXjtw",
  "key31": "3StG3o9DjNNp6s9do26xuVFHr6FnvtGBejaNk9tvr64B6Q8FDR1uz19NBYcUnt4cKfuTjSJ1B5nGzxZfuy278PH1",
  "key32": "4Mq9BFF2hbVYvbwerw52r8t6mJ8SK2eMvuNorpwVZB89Jjv8KkaKEPuJwsUAiSDgTbumJTwDsVmcRYQkh3K4Ecz6",
  "key33": "3jUyoWhiauX7oiF6PD3STBbNxy7qSaD8PQrqEQfnJuTtAfCrh7bc3XqQWdeD9oixXfEYiY9JRgr5Lnnav8KtUzq8",
  "key34": "4nUxJ76HBsdmTz4AQ9EmQY1vxjpkUmwRAcaxNCvyj4BoLBKiotgokJVPcziwDWc9qrC5ewuyM53BWhWjDpuuZtx2",
  "key35": "75ngWPYMPWcrnLsjMdamo1JXWvrey4j1aGMjENkdGsKfqpxcAwfr4URcK3Chpa8GXiWYiSAyEUKK93ez8X1aKMH",
  "key36": "3zy4Unw2n9T7ufbgBwJ8yKD2t95igrSuKfm8WJGiEv76CHgymLJhi78zgqXQQAz2LAUWnKNFiTbktnrhsm4yH1kd",
  "key37": "3Y24HoZXKZ6aEuhnhjTGg6f7Vh4g5prdDLYebvXjfoedKb6furdHL6BBtZixLH5cLbX27PDVCz61qkiUY2mm2sAa",
  "key38": "2gQ6vhHirptYDMe8e17Cubpqczh1GisTd9dZJkr7rqZtgTMGcH8qUf6XZtiGD8KjxRpc5QaNzL78b8qZUDjNK3vR",
  "key39": "3PfUXLQAgjfvDvv9SEF985UXsq1AMkjXvuYyPqVAGqtgrKPDztnraKZ4WMhmgiisrBr5uEHx46c1AVsoeP3g8RqW",
  "key40": "5rVunCxP9fsiEFYYXJTKRcdZYAZwT3ChjpVzFGQGJkd2syGQ7d7XLFpbzDutqVmqeeFqFbnNxeegcLCsTQAx9Ub1",
  "key41": "3TR1SRPjg91ESizCwFoa6cexGaNouCZu1Y7d8XsDPk9GCf3j8DNtcZ8KWHPGhwgEPKn8qckJAhSxCPCmoNBiiY8r",
  "key42": "5Uv78L26mRwo6rQZ622sGvvFySBt1h5Xtfeo3ZWAtrHQ4bwq5JNfVCFBzzoGof9AHK6QyHs2t99atMEgV9D97zuU"
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
