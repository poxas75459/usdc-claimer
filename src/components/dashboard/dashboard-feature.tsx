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
    "3kzKfdZrZUwPHYpjLLbDCehALv841x5xtUXafX2d9JhDooX7robXaaUENbZFm2Gwa38iGJidCWPE3V716yiDmTmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzGrU9Bems368mX33Xx9NC6N4ibD4ZEyTS4D9XVys6WdPoztVprZ1ZLp5U1zyNriHPyGyVq2DKMu5bxxPRVzfrs",
  "key1": "qjRB4BBGz26Pk7aEJ4ff9jaDcfrUi6XkiHjVhaMJUGsFJqPK8uWWsztTf5o7iSCYEeQUWh1rwPM6h44eytoNGWu",
  "key2": "266qM6THw9JW4o8iSTtMiYE1zVsXR4ay9UqZUaeDJffQ2JNVkibzgTsw6TS8LBptwMkvBVmjXQp1EwK93mJeF4jN",
  "key3": "FwFgaQ7hJoJDHb9M9PN78Hp8VX2dvQrgYXHuvyNq1Diycw3JkGUisMu7hBmiV1GXXvhdWe1vEcb1wE4BGi3vBjw",
  "key4": "4kiWNnvFHzgZYP58evGCUUMimmy2CnsP4pMJq8TQSy4ayRZTHmDrVMCW445Q8JKSPZ5QS3xtRxSnqTivb7TdQRxm",
  "key5": "25SdQtPCdbYVyT4jH6ZdAwdFPCwVLNbDJxMKxaEjQdefFkuJ6GY5gnahx8mSEV9yMLSRc4JYpFtAdiXC3LDNiJMn",
  "key6": "2XPzq6e1C71hTnjcJeb7mUqVtdScFeVzNJoVzknttiNB43tZmkwRxuscJsoojQKtUdMppV9YUb5WuAYzPehy43Gf",
  "key7": "5WPS7vqrTxLigaAJGCz8hUaKEReDTtAQyutmnxZpHSd5Tnp2rVT94NJK23NKxDPhG8fkxFFuctz3aDB38zwUxmSW",
  "key8": "4kaoQQF2Efx2YpEfU2rTwmcSEKVSZPVYagUVhWpQPeMRFokYqFtsCPZFGn7NnJYtssKC8myCPwCNmAF3Q6hf58jL",
  "key9": "gREv7STLnAkt95jgfveu9k8oPzFUJYtSLVMJo2yNj5Ua64sBtYKPVnSVoWG7iVMwvUcmjdDTCuVxGmcVMVmLcSL",
  "key10": "4qcXB1UQRHpGxZi57j4ahrpq76FUXQVc2ZmWsokzSPaTHJoRDxDcLVtJhfEfQzPXWRcAkJnsDGgSi1t2KrNtfqzp",
  "key11": "3ZcscRr8EbdHBrLXNVPvyP72T4XqBMGqVDXrFC5caEQpZAqojSbXEMFzpX5PgbfSBYGMWf79j2pGvs7kyYfRRBjg",
  "key12": "wwnJwMhFdR9oJkM9RV4Txs6fJZCEZmMd1imwpTtBqVKQsfg8oBxkPJR1GAeaFfXFY8JUdqqL7QVKDFoj6zECYRr",
  "key13": "4naJvHWLZn6NFNHN96yzNH8djyn9aRG6hvs2B6CixCyfU8r7stwf9mEiwU2FdxqZwqAb17oh1W9r8SsSTkiajh1p",
  "key14": "3erLLPNuHNEB5NMB5JKs1QBxPssXdJeDjp1vArybCx64FqBTff3iaka3u2nDwZQro3bJyGQu8a8YEqRSXvpNhG2R",
  "key15": "4t4vx2igzMBUWa4EhnyWCPbPz2ovyv9XykBE6jAGg8DwhY7JKoaZEMFPf1K2Np3dxZhPr9ChyqhfUQxMv52ckJLg",
  "key16": "2aUp8TYxtm1vPsr955aGE8tYTze7dzeLczZKmGg4n267WtVnUcFvrDP7REjRG3veLd4hqjsPaqgRhvm5Ban2rc7i",
  "key17": "xXwfqpSAGizinK6C5UQyP3jFd2ayVwaah5GhVPy6Qz2GD4fw438NUiVR4fEa6CjViQ1HmSdqf38qQRuCJPE4txG",
  "key18": "39SELEQhEDbAsHw2ftxCqVWXonJUiSALvJpunGrrd3tvDQPrcKf2SV3XWuPdajXmqJRJGWCWqUbUxd8GVhxXP1iN",
  "key19": "4mFeikT8zjTbncetXwr7LSUFFoRFwxBft8pR7ViLiUPP1FDMHSS3eBNoHgdkJTnAtNxCEwuia12xF2Q7oBf8VxhS",
  "key20": "64328Aj6rVv2bnK4hRmxXXhMRutVamaDRs9tjpUL3H67tsotgia4BDBn6PL3bBoFZyKiKzW5dSNBfEoTubRZN6eR",
  "key21": "2FVCstobktCv5nT6qVBVpAQ5Gk78VpaJvsE8gjHxp7NTPF9bEmG3SjKE56WawN3nuxgCUqFEyJxEoAd9RJQkang4",
  "key22": "4SU51Bjb7GrmcUEGgZCBBST6K1NwGSYXEzRzQi49ziav2DDqiStWERdMJu4WzVCiKb5RpWVmAg3PY9eyJt3aTW6x",
  "key23": "5TfGZWnVdB8RB4tNLf92DVBHsnSUN8Y7ygCkEQwWNYDrj9uiKi53Aucu6LQtPdqji5KjiF8jLiZEshcUVforSugg",
  "key24": "21Y1uWnSwXC4ZjVW2g1Vf7ENgsewBMm7AuCS8o19inMoZt7y8anL7apcGvWi3SQxNZLw1qnt2J9S8uUXBjSuRLh4",
  "key25": "4ebeeNHyaCsTVCc5K3wkRbhCXG6DJ27iacDn6eAz9VTeciGv5Xvq7Ae8zgc3WPtNYc8wsvHJQjWX8vmob9ewtKw",
  "key26": "67g7thyKBqh2psVQyMYHsxERJEDkyXCKr1oFNQbgMYZzbQPttaaz9r2BEwmCap8BKwKPEAt1hxru2BPXwhccVnYZ",
  "key27": "3UZe8eCLk3VwMuJAjbiZxvkN2s1xMn5ZJhnPW5qQ2QLJSFfksLTPrzUJsNngjk7DVyzcc9nkrGumAbuwfQsa4cRT",
  "key28": "3np4VWfZKrDD4FE78bbXHJpNYVrXUqt1d92nDREvsUhcBgsEWvYva6g5HJC1qZpuxYTjMnoZBVpJwsGVj8fboYp8"
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
