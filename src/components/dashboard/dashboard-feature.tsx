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
    "63mUZKMQcYdVByatUSMptTXVrZwit4LD6sWGwodbmcwvxdJ4a3sLgFENb3TDib7tc9qrBeh6fyTCPvNRQTrSJQ6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbX7Z5emYDkLxDcFTYRM2rKr9mVN4SEAbSbfa3xZrbSKD8L5oHQZ2aKWB1dSxpLmm7FaTxYhg2Ba2jTvuguCpqb",
  "key1": "5iqAEgFFQrDkVBrA52BGZSALZSif5surmkma3M89xTiVBGK1pFqex3Cf6YxhMYoAusHT7FqqU1cLoNMEBz8QC5UA",
  "key2": "2PG13RL8ucELmTjvoCZc9pnmSpbnmW1SG2M71B3fQAnKn8JewKzfnZzCaDaxm3dfewyX39aHgMSQpZWGeKDAG1rm",
  "key3": "3jdTorHCaaojcCPvQfspCAZeR6r5SnLmnG6T6jUzLSZQmym7eAtVBUXSMSefBumA3xBouqvc5m5fZGsJyKoxqWNB",
  "key4": "5PCRbiJTwW6n59PXu49bSuxCuydcjgpv4DFJB9uo2C2q1xgELmDJFPe8bVXekCWE8dEXUessaGebGxywQLCf5ZGw",
  "key5": "4smMfLNq8Ex6xwMWAfU1QFSf5hWDtDCwtfz7NyNhBEPMs8HtJNj2Wgjjh5p5kHs7omZpdSohxtLBQ13eqkCrDPgU",
  "key6": "3yTqF57YZeQLL57XkjwAnLSSToWRMkzcZz4vFkEyUQHq6P9PJcgMdSUgdJZVfjpjKRQfK8zfu5PHuvnSyAoKPowU",
  "key7": "5R2xMDEuoiKThvz8DpnspEKnpY3iyxKb98WhBKSBhe8exGDTGgd5uBNLg4fC2BqrbvqH91YvJJvCYQnTmFd4bLvE",
  "key8": "2Yhe8reCdBw2g4EiJanuo6tfanWD5i3cLrRbzN3xZ3SkwDwokVgr6GRX8SzmyL5uuVXebnr2kWjjWdDWD6Krdkmf",
  "key9": "FMgeriVdryaVCycQWbA4XnNSKGsJhcUFMCZdbUx3AQieM6Sa2i8KJfmiPkVb5uXqGayeQU1iRY53NZAycqYDhed",
  "key10": "xidEkGv1XNe3JQ7uA6Lqi2meJ9uomecksmuzq35GTW1P6bkZLstCMooivom6WoobPCjT5uxi7oVoRdGNrzW9o3t",
  "key11": "2qYGLG9v3ADMxrtAfDjHCvsPtFcK9T6aecFKxp5kB7c2wnP2e1pg73a6dzKHdXPekLVrs6bU8vgVQxv2sZsxUiMe",
  "key12": "5sxecNwiSSSEyt4GdbpnLfBtJPSLsHwmSa1ndmdp3b3iT7zqKsZRTta6addZw2rr1aCaQfnFwYLQw4WcxAvwuNcM",
  "key13": "4gTy6NuY1yUspThEpSsm5LMhUxcrnGNDmRqSiSB7j9E5kheKQNbu7BwybXCxEbi19Y7qG1KH13cK2wjQHwhDCDN2",
  "key14": "fmYponTfbDnhembKhZLyt1gKkLHGTeFej25LGtJaobgYPDZmnc1i6uU39ZbUJ6wW64MTBYjYQ9E21gG4ZwbaEAv",
  "key15": "TbNJSwBfw8WSYGACfrxiCJMn4oPYiH4dVrMMH7WMYT8vroo4X1epQk3x1Xdiso4mr2dD3p54Hr5aQBUJg2vW9DG",
  "key16": "3V8f4ZK29CnVcmx5Mad8mW2ZWvvdaoTCqjCcZ1bgQ6irecPi2VGJtiwDHeQSh8otUxuivsCRQ2JT4fQJG9RNK8Ky",
  "key17": "zgWKUt7dyQnjvQocMTEsEWHUHE1MvvPZnqsi1SrM9AjJoXUXazSqkmWoGFwc2VKGsT4GxcAF1Fts9krUL7Rd7tt",
  "key18": "2bsfWW8pZu96cJGbVaFYATbQuJH4mQKbjLvKVXShQwGZzKSakHd5krkhuLJGkbmQb5D9QbW8FNAcm7vrveJ78wkn",
  "key19": "2wSdrKFaYjGUuvPt2Pjg8u7uCaTBQMDE74JevBP88dXkoH5Sxi8LhmbDJHvweEZTYdDFJ5jFG32UujmhxUMfFSsc",
  "key20": "2xvDyQ2hsQ2ZBwLRNayFXJZVbi7YjfXpKNEy3jw9yF4AZFnZnF63555js5Ps3PbJadqSKnVRBCKZxtetsejWLv2c",
  "key21": "6M73q2WJM5ZTzsQMtgihJDLm843AQpCyxaF89W4Jkgt6tgDePQcSLdka38s9CaDJkYkkdogX7zuiqHVmDUH13ce",
  "key22": "TDzpaTNXGzw8mFz4RAu4pWN8av4JCvKzCfwd2e913hFAzrZTaBL89XXnMpcsuGsBX2t21DMvcNyAGDFRvbPcjKo",
  "key23": "5WFKYJo9ypUGpkChMFdTjY4HCTMNaGtkpoNrxrUthWes73HpfdraZjWbaKbSJBSje7BJZtXqg8sZ4MWkjhoMEkwd",
  "key24": "3VTbsVPGFpGBTP7EMh34X332PnEeLQKMdocNRBZda395cw7qqJRdddZz7XPyMWMeemSirn1ZwNEyZ6xYxpQ52pSu",
  "key25": "4NduLvUxBVZQaG7eJivmMByXc2prokonEcwiaMZjhWV33MJcekMNErUgLHddKyS5ZXjtHoq4hMcbmWws55vEDnC6",
  "key26": "4hzCzNJBx4XPx3XgkTx8uhN7SiztqtpnrmSBkEnaio93XhqsUtPccvaxYYSuWnDc2JZGpvZx9MYNekWBMAMPDiDd",
  "key27": "3gHLSnyNwW1oJj5juEx4fA4jUU1YupAiibZ6BAKBC7NrTqTmNNbNDqw68Vy5yVVzKwXTstoaq24gB5Vymgdcr4oQ",
  "key28": "2ZkdmtEUQi7JpmZSv4VDeWL9JptvFx852Bd3mrnha7HjDG9USQ4Rr8ogK8SnNUuSWhqHHbp8RRk98UzLb1RxqWM5",
  "key29": "2M1JYucrxBBoKaJzWKM2to1KicmFDJtoCyKNw4c6p7kodNqoEZJDT93d2rNgpXGfLSvWiKAk3RRVziwGnsASfhzN",
  "key30": "4sYavhfRi5xxHfg6u9sGjdo6NHTDwLcxaJNXr9M4Yvctdrx2pz3xwLUjvjN8xKKmJQV2QAWDkaRi58PFzK6SR3zj",
  "key31": "2SJax1eXMgQsowoBjwrz2AL6kjPpVaMgS1HGf65XSesKczWB18jNPNjHGF6ddKt5gk46TvNNgd5JowDDXGsAwTqe",
  "key32": "3T7waurTA6t4rqHNc5qVcwSgZkTfswPiWfGZ4ZjSf27BffFbXYjkrjUiJb3a6ggxfA89Ge1gMRPcctXHDtjVQNPY"
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
