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
    "5LxYNinjG1cs4s8ZaLLW3GL4N5o11NkwqEiXUoj5hCRHWzRzy4KvL7oQ8HZMzqA2ufsNGmnpTgdrWyUDc3tntsno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBRE1cijNw2Hz2YbvaVwc5AVmWHHkq4cRENQX2tyu37zrJAhRTSaKC8UugNdDMoYp1TWK9z555qQ1vt23Qv2fQz",
  "key1": "2cFr55DG3iBxeDWakFagg6PxRGC7iYdupKbKcrrumQUmRoN5aocwLWP1cWhJNBMJthGrG1fpWRDYt4vNawwgPe4U",
  "key2": "3RwCVs1FNZgGU3CsXiCGKLjeqHdVdLG4xa98exh88bY9CxTATMNM61C3tfNpzE7i28Z2Uou9bFqrzdBhunFXgGdr",
  "key3": "MCN8AWhPHWUXAGcq45NwtY46P5X1g79QW2yYiGvxbHz8pxZPYPQpLb9TQ4wFsiw26DeVJQiWsT8h7Ze1TDG8RK7",
  "key4": "2wp8F7wrwgDYsAcEm6NWhGins2QZVYmw7XGqvqNXsGKGtSouSTMwaeiDWei4btcYjdpydxZhtj47Fkm46EXiX1yd",
  "key5": "3Cn8JHYtRcs47Lq2WmupRr23UzCShikAV9jS1WxeNXDLS29TyYRLPvNGCyocPWZ4A1uhYf24pmQtuPAy6fcExaeC",
  "key6": "GaGqzTT7cUKNrY5ZYSE7aEBjSZdWUdBqjTXUmxbgcKnSHRCoaL9e5aq2GzRVUte35ZUtHKmwn5feFr1ta5EhkTy",
  "key7": "2tkzZVHPtdvzMEpELNfP1Tpc9ybs4MX6Q1n1JJR9ZtLTeM8iS2RfkgqCPiurANrPdrFzcxWhyPyTPxgN83u6vRQZ",
  "key8": "3csst4qCHeQibpaZ2pUYWAQT4x16FCjyCr1659HLBgESeLcVz6RSzgQntmsjnqPEEgv4ZjxaLUtcBYSfWVvFBvC9",
  "key9": "2gASrAp1ztn1nyNtQ24tKzRhvQDaPUckprN6AYJnpTBE8VWbGobj2gpGXDAcJsoo84Da6qTobAz2FVDS8z9dCQp2",
  "key10": "5JN1ZsXw22zN7e8YiucaQSCBahXNtoAUZcKyxaXaR7C1Zr8yvX9efJz1o6FYveDM8iyTeAx8NymkMMnTdCTAjRbT",
  "key11": "5tSnKvupT1davdrnSwvyBNNAXuKrMfhuQdegf9W4aeyXN3Qdwx7MZvPZsAtkjtVV3EEFdiniCTetYaPAHNMVGMzB",
  "key12": "37swz3FBNbTXDUqCF6E26Pz4LAw8iZGUsnKYwhDKU7obtJ9Kx1DvCrJ1AWjKfSdTusgVVdeT8xhQnotKXzExF1bp",
  "key13": "48EVsEWnxZPjaBfovEts466Afc57iu7DXEkrFdT4mQYM2FfvUeNrJUuWuC5T7QE3smr4mMPuKLinLEASTzioCZyJ",
  "key14": "3p9Va5TTVXgrshYNz95JguULx1JxPryHMXz6hreqUHZGbGTd7nY3AmtLn5z93NbLbqieSHqA3AnFuq9FP7jRzRD4",
  "key15": "5qgFvZjPWyjgWaVBm2etWFqBwJjnTue7TQbPmSRC3yWYeFaX6rwbfzHT7qy59aPf6uKfdJhdZh4oB72KsbaW3jDN",
  "key16": "3c9PTqSh8YeFYoZdLkcqUzQRn1zBhkap6YEo6g4dwtFFDbEdnsywKdxvbuNstZAdpNyHPyHvJcFciSATvums85vS",
  "key17": "4bZJPFJLE41H69pFgHUqQfzoU2uX8EirDjVoq87us2sFcci32ePupEKdA9dHMhtzMKAq3sHCKGtncGGhbMKnA3Lt",
  "key18": "6osesykM1tmtE6nSYuyNeGF3L6rFhvquHwR38ekU4EduUFXaiY8HgibLEbtfeSfMu8TWUT7y112iHqz25xyssER",
  "key19": "2EpFxT1NFrW3Ngd8aw3obRbh8y42UgFHbrV8xBGhtN6CdRkZ5YkFvYw3ohVeFrtT7QRNwAMHXJN8sk2FaVgynPTo",
  "key20": "5gvAZsj6zqB85g9L8pq3C3RT263qLxDgRoSARvPoBMy6riwGPjvKfzV4b3JVCyXNgDi9W2Hwar1DGrTkkatG4NKK",
  "key21": "3BE5erAqsYysUpZbj4RXBH5mNkVebqZQXssuhepAYxh4He85ckC4RXBm1vCd9UM9jyxpMMdHHQMVpTqWkV4BQNcY",
  "key22": "3oELG7XhotjxuFKkBX52pM54R4EquqFNrkJj2JagkqxMDezGuvAJo9LKdDs4vaW7uKLt7cs6a27uZHLQBs5zknNy",
  "key23": "4VccbjWzPfKz39scYWxfGpCFpQXuK8B457uPKvYk6PwwSZFhSonBAR1EnrZrP8rZDjJW6KvxQtGYW7HB3n1KQTTs",
  "key24": "5KriExtXyUgsmJeUvKTBavYyxZYUYTuutGpFaQGaTvwU4JXFe5ajiNMrd1HSVHJ4754GeDdKSn2jSWWYtuakAXLb",
  "key25": "4EHC8YArLyo2gvrQbETEamvAs2phXJkLgNc839nzMqJjqDhEg53ASca1tNvuADQHEsLvDTATkNeoMfQU5BRcMVgU",
  "key26": "5b7oYJsdctWXLUfXRmn1ZC6tU1zswZ7mtEhVCxYXA9er8Dhv3bVWi84gBBSEikL2DBxXENmBs5nzwTeAYDDjqAkC",
  "key27": "5CJ2dcdbHJbLxzKASL9srESTpartWahXcM6uf5mJK5BgrgnM3zBhuBvS9cb4YAg9mu34wH2SfYF8uFCMYDDmAGcG",
  "key28": "2Ad7c4XBYSPYJPpGdxsYkqiUEjUEofEmuZPgaMhpZR8ABTubPaTTrJVebieKuw2ixc44FB7ikyWTYqP8FyiEndU5",
  "key29": "54wUNKsuFYsVrXHrDvmPM27TQ4Q1QmDzaH36xWy2Hou9oWG7RJA1M5G2PXtrEUcfEp9xaGsrbjEaEmV2wbRAZz8c",
  "key30": "2csNbuxZmfDhbSpRUSsDFvPwCi9fFwWagLSdedMNecfuKPkbZsgMdc6WowhuFgBfaySLV4rS1zewNk5rbYhPcvSo",
  "key31": "2Fxigeh74725AwS51wRu4PcordygLkgFo44uqrTLrFWUuNAxAWceWrmqFSiMECszbiPDgWDu5P2kaXxQf7qopf4r",
  "key32": "3HQgcDBcbesQ1148aqLJvcGeDYLhKLdjz9cnyq6nXwZ2qLWNSiW4HveyTvha4wpPJyzvC9QSfkyrxBNM9qfeLkBJ",
  "key33": "42X6BNJKRc5T9Ppe7GWqqLhS6abRmASJfpW7McQ9iNEJXUwwuBLtzfR7Ngw9Dzc3tUGQpwBFbqNkkr3KCZer12kD",
  "key34": "ptrJ3EnfT68vDe88cy1Gj6HAvsDxmP4oGX8fu9fVeg6TkVoUYbLay7sTB8ERAY8oVnMWVAoJfpxR37rxzqDzxNA"
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
