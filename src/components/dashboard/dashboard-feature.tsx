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
    "2SUVs1a8cUMQHePAjny7VorSPBhAgw7whR7AKdCjAUjt2sjB5C2N8EXVxCepGk9QxyRUgZVB7BrmgRKtKse4Rw7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBjd72LaTZEUTrC2PZhdcL8tBbjh9aYJzw38XTaWN33b855iGFxgda8egxYafXV9oyP4spD3FMbfjwJ2KavwquW",
  "key1": "scza5dET4FyruG6j5YczkcCr4JNJGd52Z9Esr13g12wbb7TsPxfis3qxCkgBpSjVdierbUuPQQ2WgXMxhzG97xw",
  "key2": "tcZNcNxtv3Ln2FHQ9FWd48yh4rzmt1jvfw7iinfV6xyYpEj52fYAhncwbw6kEG5H9xgqJntPbbQiZWFtoBtaY9x",
  "key3": "h9q28zFqaxgqGPjmJpinx7vHCnLFvRRvVRVzeM9wEZmY9xi8CshikYWtTKxGwh6toFqVj4vGaB8ghFyxBPU7vhg",
  "key4": "5g3t4fSXANyfC4SC9E5UvGbhNhgNyvA7fmRdV9G3REGfXhrfiSSAmLCykPjw2VbVBEwnRLeTdQ9Q79CRweeBZoG6",
  "key5": "KZMMopBEAeyfrkvCs6KdViECigK6RAdm3nb4eU4zmcq6kpJAPMWwhvPXMJpY7GdXQTZSQyHP9QvaQ9RP3J1udZ3",
  "key6": "3X6pd5iBJPDZMMJZT9syUDiV4vmm5zz2eNXadMBdSQ1sRWkaJP6wd3gQ81zLb1939vgQ5S1h1ZwhzDaszews2bxz",
  "key7": "2ziVjSXvQBwrz24uVxgVFF7EEbmc9J5QTUp7ifTp2x397k8stxoYp6BSwCmemM8GKKkKMpEG2GpWaNcqL7vc9QoV",
  "key8": "3jM5J6UvQbK6EYgnTfnPsyjSqavs6xorb3Gkqb2z73BAjftHqncNQ2qZFit3FpcMzVuTmxCUnsgtZ3S3YbTbH1Uc",
  "key9": "4pcUXdSNcEWzKocR7yZo2HxUAxLDwY88hJHJ3sEB6UWhogdWAQoHbrbL5ATXDfcZiU3Co3z8aT28taFkdENH9faq",
  "key10": "ciFDd5Z7DqTko7TxSCivtBSb2hJ6YyVtSyWD4WXJ1iq6b9uAiZ9joWdA4AoQYSU8gQnf9B2ht636SGZRkXj1XST",
  "key11": "2XUpox6q6MJ9bFJBziA3yRn9eVsMnhTxHgTHEC1HtzDUQwoem23dgo4vo4EK65qaPPUD5DEehhegNzhQyc2Aaszf",
  "key12": "4eioiGk4FepxRhMoVPspDvYnUQRV3fgxVtmxMgqwCR3qiLNptVB8GCtCudrfMPnCHg5qqT9Q9hG3MoGtDVTCihRu",
  "key13": "26WagyfibP9USfAgi9Gg2czinkzsZfraAqtxqq5TtSZfUBeZDiwMY2MRxcnXaodLx8TnoABG7KaAamDDVTvps33A",
  "key14": "Jgpiua7SNkLb68QkFkQRiXmgoFecqAyvsTxA3R9aQmMQAmsxouy49sPjFGJXuXsqgZ9KFAGB59YDThQeZWRijbR",
  "key15": "3B27Fp1THv5KWdqoR5fnSB3xdUcJXfj1e88SHinmcAoHop8LxasojgYcKtzaVfSCwHPQZ5ZH3QqtpKj5bRDo6Wgc",
  "key16": "3jZTaHQ4kU6adHYNdywxiPVpCoLdgwRv8rYuiqBUyP4WdcTDvn8gMWpMPXZwo3QmtgbtRECJWJLx1RALkuufW74N",
  "key17": "5hmrAQg42pVPFucvs9cjtoheGVN1FWLfDRsmMfBmGr8AZjAr6RZqpFu8cnVbE8j3Z1tWVjgByo8TnHm91QwBtmof",
  "key18": "5LMsEoTE8nLutjWApKKq79SnT1Li1Tmmazud4LNexEAS6x1si4c56k2kXFtCX9ny16GmLLDjpd38454M9QTfk5MY",
  "key19": "EADRsUq8xwfDrPicBDvwZ1DwoEZ5Q23zXYJGioAJo6EmcqZiFqrwnsob87TkdnRigNSMCs9Di7ei4XS2fFiUV5t",
  "key20": "4haJ6BugKKakuTNwsfjS9VPVgHZLpwRqgwoQuz3pMAPvhu3DieuPyVb1FXWWwqeWsyBDJhXAYSr6es8zfprGatkK",
  "key21": "5nsJwrMfXhVC9mBMUvUr6Q5T1kYraiqstmNXj9yqhUPSxP6h3BeHeH3ruZkZqWf2DdAod7a38dN78FRv22yx3ES7",
  "key22": "dCL32JSXuwfFcto5htUAWVERkhVwrE2wZRwRhWEgb11P2s84HRBVWXZKakVtQpU8SQNeCF6qsUw6jq7N7QCNkTK",
  "key23": "4mrK63X85UtU1G2RCnoqraCZei5GGtPcHiHLceimv57UngGqtpWVcNCweJGZxKYVYjDAitasuNvfjo3mi1R2CUbT",
  "key24": "5CeRgUpMEGPUgGKeNckFUZuWwDuU3uSVhbQsN8bsvPJuswyK4Qd6tnRjANwwc3KQiRXQ7oXjUe852ZBttp7LDbPU",
  "key25": "5sE2tzvAUk8xkmcp2cMUJdoWGbg2dwoY2UzXB7eVqvhejbyMANzw63jEdNoQGb6QTSjqi9UwCAzoxVTr2WpX1RB3",
  "key26": "2GPj9xwMbpcUq1WLo5UHUXxY7v6jtdgXVWBYcxH6RM2of6x12zquUn7EznXLPZ3TpE5XwqyKWmoRCoEWUUCBVLWi",
  "key27": "P1unUFTrgZGKogJgh9jnbcMMyzNUmGWedSzuFXqR64WdJ8apXjMzoWJvYdR5eqfSzuvuLpQwi4kAcRHEawThGK5",
  "key28": "5AuRYSP7WYQsseaeNW1Gj8V443QwEQSayXyLMoC93oDNzCCra4ZTRFEHJhpmms2uw7BA39UWhxVVJ9W5VwtFeRas",
  "key29": "5EukgceBUzL73QN13dVDwy2XZqSnytzeKqXiRr2D5dBzUHnM7nSF6JWkgMAX3j49DbSxNoWvB3phASU13TpZtXWW",
  "key30": "5vLaxq16N1CQ5XmtmMXgwCs94gshSdp7n3cTtk11pCLHZUQ343eaJ49NdKJP19uV4vtLU857Nt8MJrCnNpKQcmqB",
  "key31": "sp2WowAtrqxWGy5QJ2WXttT36HAovY8vxA8DcAzzLptRvM36xMbe1FUePmVsHoYmV6BCb5Q7Z8tpVrR1VoD2xXK",
  "key32": "4V8pUCxeTP5YLgzMcGHYg21cC3nquzX1S4bEMmbhTAxWUcKt8HK9xcJPVMGgdukxiaKEGMkRTeAvBxAg7N9CSAk",
  "key33": "4LE9uqJhb5cYopFXuUeJZi3iSeKXCroAnTN9CbbT3xwsku9fc97aVDb1Rg94NxbU9nDxunvu6ynnkXYQf3H2Aoho",
  "key34": "BX4oeK5Yg98RwFXR6nAoAAeFRaePVCgtpvA12YczMyhHgjAUENCckEsBsJb7iv15Mkq6sDV5LJa6TWbTWpYV6zy",
  "key35": "MZxHEo3PJyD4KybtwTeCyn4Xs36fF7tmkLRhbadoVpXFqVPbdf87huhhZ5rziChYfDKfhjKW7myMLvQWwbmcfTu",
  "key36": "4nBaWgNLCUsMPQB2oyMcKpVMxy7tXRm7fp1MpAcGkENr69YhgYQSDDBkRKnq4cPbVHpNZUZXHVgCsbgBwf2jfDSk",
  "key37": "2WUs6TFkY2Nd857JHFRAfJHgSbLydQdnjbtMxSuxJ6n4sjWFVvgVcp1opTQHWUMzHwMUjTP2XV3Mnqt8NcCiYs54",
  "key38": "5YjaM1kQAA76xir2axnNJQDYvQXcTFax3JuVTpsFU3QPxYD1HGWz31915qQw147DdS1S5Ub3xswpVC71xjvd3TK3",
  "key39": "36Kahw8YZbfR3ZhsZjJqD14AV6Vyt6W5aGpguMVrb5TAzXZSLsHDR9cUFvBjMbDo4Cuzrdg67iXYZCraxzciZ8Vs"
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
