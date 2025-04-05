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
    "fBqTUPd69cJGALmGhzz6YQrZPyvKxnJz8wyD2XZHQA5rXQ7zUu2aVzbtD7Wgjkpmn77KFbYsVUJFpsTdrEvkTN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516c8Xwer29uWErGXDymZqYBCzNJBBab3bR6kxwP1C2g2PvU4YU91vneh8i9qm4mfKVouzmRk5eWLum87d9ENxTX",
  "key1": "2CKGFfn1RrW7FpCuDEbE9V834dpD1F2dgZzfTHhEFm6JAE6X8681SsQxWzwHBeE9VBssQg4J5LpM8jf3ZNWHnZY2",
  "key2": "3BL6uUq4ELh2L4SniP6osXRhzSNSKYtHvKAjuAPvnSwcj8DCJ6V9PzvirfwZqY3Y3itk3Nq37hXmDvn6HccsvYr6",
  "key3": "27GUJjkHFRmYbmZrPm8MUsKxjsUFScUVieFqP1tPAdQrKa22yNQRxAyTNfdrU1vUNDjworqxNJWGG8MLjVpgwVG4",
  "key4": "4RBqun99wPtNwSD4H5RrYeDK5xStnWMP8RCJMUsT5LWtE19NebN3mN2Cupeh3HoXmXvEB4n87fyEpxMzhbc8H4BZ",
  "key5": "gFcBfaJyRLSrsqhxUQyBKRA68uHqMZ6mJeb6dSxo466fX4N4GL2Ha5mcS1uoFNmagX6UTXGscDvqPXHM7SVrgY8",
  "key6": "2NeA68hCNJxLUjUQ422as6xrdTph8t46LE55Dh7VCkVLJdh2YrJjvUrZMNc6KiHUVPBkyaSjmNkREJR9QAKqek9d",
  "key7": "4XS1GdUoSTtc3uUY4jRXnYS167MG5A2yWU3LMGKfvktXx1WFPVe2WHssfqcTuz4jc8WTLnjdZKaetPKZj3Lq6YqX",
  "key8": "28dnpDURRszLeYJ7PMgTZiDqQkKUA7JvXWKoodYg32ar1fVv67vniESgh44gsU8ExA9dYBag32Fz3NFmSV5j9DY3",
  "key9": "3kecvQRBnuqQADK32qP8n6HcURgJccTMQu2W4btUvU8vjE3ySgC9PfoovpE2UuhYTZLAnbMkxiSXgLb16kckjUn9",
  "key10": "PSo12AJhp25edjYmAw8TXox18fjdX7NAiNSdGWQ9pMgonVwkd6CiG54RJdw8du9MZ3ZejtKUYJg1bZkc5fMxnKg",
  "key11": "32rfehSxWmBxTeGhzabSqrt2sVMfDUfGYDayU1UgDRLYY8ULXFtwiYbXVbTTrfW3GwVbCPMWhwkfC3mGLJd4SiZU",
  "key12": "2eFRBxPHLyjwMRnJizphT3gxQZ3sVn4Towbc9AnSxRTpMaJ8WDcZK3v4CtCVSsDbSexk6NUpTenfX6yYP3Gw5mgu",
  "key13": "5XVkWmHEAtZUFqPKeF8qhtQmFjwdj4B36EJ1kALxTgF4dyJqDGtXhjZhcivu2u1P5kkUxUJ8EJBVJ9kcxg2Wxsrd",
  "key14": "3FDYPsdywXGwh6WKy6A8KnGmQeL6YwxWdXGvcg34QeQPPV4js9DTAGS6CbTk1w5L8TTzGFP7jTTfqoAHGjUY9ahf",
  "key15": "3ZbeSxijQkxrknWkHqEHWUJwiGkT9bY6mqaVxKom8bg2hz4HeCDSvv39Pa2riLCcYPhWckMiHeYrqUiPTXRWTC1M",
  "key16": "5QWBPnkL4xaw3Cos9L2NJBZzm83o7n52BQxRZcMkTAzuvdsteKBscAQXyP8Qjh6Gn2N3VVGoxTV6EC31XFub3zUF",
  "key17": "21XPbCVkH1qRDV51GEdaiPrc9H79QM9CaMzoZcLrBoLLPC7ti38qquR4DLgTQKMmW4GzxqevHUaQqAJzUujKUcas",
  "key18": "42AcyFDix43hy8NopcZeRCkbTRxBhLuJGuUGDFqFHmynB6AgdHwRM8RvTTa2dXN63JcZzLAdc1aq2wxzKCpqTXEP",
  "key19": "5Apeqco4JxEKbkvF4tu2sBKow7Lr6KPmqvasW2Hr43mWNxotmpqqR3AiespVud7j7aYXjnD1xnEbPLdSJJHJMcTP",
  "key20": "4QpoEAzVJbkVSMsbttwB7S1jKepgB3sHXPAfLYZcrDeRX56Z8bBv8EGE7AGKm8E94eEgqPzVBeGipBjet3jaNQkL",
  "key21": "5xGKEpqr9ZqogwMXUr6g6SaHnsDs5Bva5ry5LAUCx1kHUx43TN8oEyQjqaVR49YRpfsD2d3RnQv3k96Pbsv8yzRJ",
  "key22": "GivpuaK9GXXrpddqR8StzFf3CRCLEkjo1YsBQtcaZ9rX7skcWXFMZQKegQPBrLrynCktuRbQwbdA48KabQfqw3A",
  "key23": "5GX4LsU16Dcm72b8ogdAW8NecFwQBFmubTTqtrG4PBcAyL6vszZt1FcpKYrfEa54KUKYBYix2qRK6ww4P4aPub2v",
  "key24": "4mRCuKvc5p8Tr3xWEx2Eqwx4DRXK2QMNkTgJSXQxVFQNwox7AgwFCDZiMSrzLs1rfHPW7EiUkD47QttyBfjKsGjD",
  "key25": "4KwtAHZvD6aVBvCZ8ZnHtfH65riJMHwE1BDmsFckY5Cerc7UHtNDrseGmoopfx9iUbR3hQZxfhWZ7q6WSoX2Xwko",
  "key26": "2KfXx5eERq5UFDosj7sGfiScm7pV2BqoAfWTMz9qXY7GNz3GWtkiaGSKuQdZRDzWqFtmJv4KQ8WJ953QcSWFJiNC",
  "key27": "33yMTuGBW2zkdouXMZBR2oh4nCzTFbGefWd1Kj2Ayzn4ePPobtDEk9T4NMXLEVs14QswtNCAkR3aMehPQifn72ZW",
  "key28": "4kKPwfmVvZKf4uMXWoiXRD3daoEd5HTjhu3Ju7y485e2pDyaMndrQ8LfzjGNjw2uL9EAjSwKT9h63HA1SmTWozF7",
  "key29": "28UvLAhPe9Zw1twXiPnv5GSCxp4wN6s1HtJdemWC2nQgTwu3EJFeq2XP8pXiE6FYm77JAHnB8j1PCn1ygEonK3s6",
  "key30": "2Gh1awHRuQc6zzTM98wQc1vuBQihgYGjjjQS3eM2tJXjaQreVry9foMswd8bZPCyDmNudxAGBQfnNVDehAPaFHh3",
  "key31": "57VUFJZcsD7WuyWgPVGX7AWCsXHCNefKbqvn158My1oCAkom96bJz5rHraxgsgGoMCLuNczpDHpryMZUUX3nrVaY",
  "key32": "5iW5hzARTQrE5QzWMWDdMmh4KMX1YinM9GyK1TzgPk3KJFFtvH3zg5czPwFA2mNkJVm8yAvzvXGeEjw7RetbgN5H",
  "key33": "85WeXiexQd63BXYwH3k9EB5xxHMA57vc2R6hvho5pD59b1bjjFfNsTxLf3R2zZoBTs22PQC1uATvG6tXEL1aqBJ",
  "key34": "EKKNKuXTX5UJV3s36SqNoKadyXMtsPvkPjrWgc7QTuP3mGR9jECzYXYoWj7xVPBFHCCPZtYJWFHgYAT4h8pVNJQ",
  "key35": "3DatC3KSRxnFzoFpfz5oMuGkXQDoyarotVKNUvrQcscvfnuaLaZFtEsenBfooUMLtYEWrW8FgWHBcWGPonFeeMgn",
  "key36": "2gavSSS5XxCXMhhWLELTqLaQXzQtsJvBpm5NwEPAAFtJsA6nKmKs2KT1ttwwL2nT2ZcLEMu1QWCrjg9Jm8Kjshha"
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
