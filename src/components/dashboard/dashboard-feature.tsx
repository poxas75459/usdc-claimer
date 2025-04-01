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
    "65qKL6PxjL2cwkuCuMgmCm3zshyqimxgggnxiwK5C7RLTMN4gLDmaeyT4fo7gvTtYdzQ67XMhZ5qKGBPk831w6Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9DhQpcLG7413hSTPssMxwcELoeWEyLDp62htj2b4x5in5Yf5VdWBeoEkmtvpcRRfEabmDeAof2kJzce3jjqxw9",
  "key1": "4ZVbKZpkfEsCHxoB5wwGg5tzFUVpXNHqPya1LWCrj1P3h33NLNr6QaTmk64T5m4ft3ZNRknyqfRYxytewdyp2UWa",
  "key2": "47xnQZty9vCzuR6QdmrjjNZ6srRCzHdWNq5SkKYoeGUUFJYyEeRYLBQbPhyucYtkvZAUVg7dqSRN1bJfBURUuzz4",
  "key3": "46y9JyAkR9D7EXFmaj2BUWdkzVRfeqLUHWxaGyb651qTuLQd8FYjcUWEDbxPqboAx2jFgrC6xLwJUBu44etEzu7R",
  "key4": "24AxsaYnu3sfJ1mPBdkHx3hX1vNxPLpHkX1iEfMu9vajyn6BAjC5bnXKbaRcjVCxSZQLqn9wCoUTSmX2FxLUTWGn",
  "key5": "24R3k9vX8394Na4Axou8XHbHUukb51tuLoihH8pavLsvtFWPbTxi5d35d2dx5fdtgV8rRok3R28Dit1fALmqh6c2",
  "key6": "2sf3rBsG3tc3JcBJSHujFNALVRhjMeJ78WWvpYWFDj6kRCME4g5uiqLuFGzo8nFn5S2Z2Pi9EdKQPEW9eVVFamCN",
  "key7": "3D6Dyiq4TQsFvGtCPfGaGgHSGmkLjL6VNwqBfeSPVjt6i2RJ1pmP2jd7YDwVodGTb7cWg4xt2wQe677hQPJwJZjG",
  "key8": "47R6vY9iJHxJRVf6PysGpBQiJvgR4XKSnUMbB5WMycnC9N2SgCTRiPS13RYPZUxUtSy3GGbzyiEM1wKYcZgoyrzM",
  "key9": "5tv22ot8DhzFbPKVF8i9WE56VS3tZsLxP9rcBUwS6hdLZUYnPmtjLP63G4cTx2bU9Zey4Y2KVeCyVRVDPNtfdkqP",
  "key10": "4BWquJPMo7Jhjbxu5m8nzxgVf9xRrUD2yT7ive5QFgt2DJHdaoae2kaVEXcBtSEkbqcUwwVozYivwSB8XuFwuTU9",
  "key11": "3wjQkdsXSdf2eFFjRfRH9pcLVNoT9jrAX6Nm1TVZ1e7XePwQ5UiVQ94wycD8uvR4xbcXxo4jTtgrUJiZxCcnLJ8r",
  "key12": "3R6BvheZGHCfoR4b6JAKxEtQAd1tigFLcfUt5c9SUmuKnZX9jL7uwxDMAdN9BtBhGxQaYUfwajq2rqae9DcmNRwE",
  "key13": "337Rnrikwzz3Yojc7EF2EcN5yikqi8z5ZeNasSY6YvMMZ7wFZyo98ZaR1kirGyLnnanrDjLZs8ho987Dgzeg5fWe",
  "key14": "5mbv9rAJwRkkxiXfDJ2bPLWfMNTngofRYSg6MLnfS6q639t4QTeuSbXLVTyHuMZzP2J8Xudp83FUoaW4ucC3hLFx",
  "key15": "5oHzyMDBZKNWAX9MMsKYTnxAV92S6XqNkHWecw9Yrhrnk4LNgdGqJRQSTh24TYdHpPc1q3Ju2HMrDGNuE9piLvi3",
  "key16": "61WPDznLtx674pPh44GhAw3Xto5MRCFEyVX29TkMap9MRu9XA5ZVJhYXrScPoAGhUtfBGWbsG9XF7eeEs8i5Ywae",
  "key17": "4id1cvwJKPsgYepBBhcB3F2eqdqoo7nUHpNiYQ2YvfAXii1WvVxZteiPLLZhje37TDK7jUhYTscMqFrQzoJFBZU8",
  "key18": "4YP8oj6YHLTzACq4FUV4N1yHmyEPAxQRFLRchvodaUtUiA9tGULE7zsyzpzncJ1VLaoNmhs1qr3h4nAKxLfnMiaN",
  "key19": "4eEUNMLao79FAaTC7m2nr8v57dC3ecQFHVWgqtWMPkH1GhZaYh4HqfqYVsNWw76G98RttnoGnxDgurkXZ1FyX6ci",
  "key20": "5i4pCE6AaDN43xA859pTE7jjFP1Cge13pTRFgYEjvAcx1tuwWsZF2s2SGBLPSPKB6TveyZL8YNqGLYwWAWq67ari",
  "key21": "42unGDUg6zNGWKj3KRdEvMmcx6ZHstjafMqDn18eB1STwobm1AWcVKdamTjn3yaSzkYekkEzszsj3hx68tzrSDiK",
  "key22": "4ge4iyEzU2HEZAizZc5s1wcTxdH78qX8XXEw8XznNh2phkH7uYiqcbUHWrfEAs93GzDT7V3c8PwmMYTRefkqEifT",
  "key23": "374EHQMWyktBfKNVbjn3ANEZnngRmU1fBHTWCKG7FkLq5Bk8qsK8d4tuNBkRrVKznFHchDZFmf3ffjw6JwVd9yRk",
  "key24": "646QGgVpby7q6V9t7MbEFPdY1eEUV56UmohmeKfnvRsJHDUhYqzCT3WLT1JY92bLvtVVtdtG8ju7nftk39D6j2mR",
  "key25": "5UASRUwhDRuqvU9FSSiQuFbLk3Qd9TFvqJjsofT7UZmBqHjR7DdwpgornN5SxFMseU2yokFP3QBmz5Ycd15iyNJg",
  "key26": "3LjXZXAQinf1deLGoiCGqjJdYpBXtkXgTjsdmU2jsyhZaCm1qqXiTTeNbXS4EcA8Abof2Ny2Wv1eCAnA6NRLiKey",
  "key27": "5aCNi51FnvbjC47u5f4nXdVKbFz713sFQWoyccTEYwdyfywsbvcwWbZQ5eah4hfAf3gyqBQcP585StojfBrgUrCg",
  "key28": "9CrtoPJLh8DTNGxNUx9UGFaao8rZjm5FL2UWbZ1REQ31KbQE8JpDdefPGTDVgAM15yEvAxLEGzRAJSn8oLJnQvS",
  "key29": "2woBjwAZpmnAeTkc4GgFHFBhDAkWHFDcAJfLpUkZNfMMs36kGtwJJfstd8L755kBo1JDW1QrSeVVNbTSF7dwDRBy",
  "key30": "2Mo1iCKRaQDFJCEkk6LpUKx5tdnfunrkNQmy3HfKQWYHv7xz88rRyD7AwWgMoZPT7RjCogn6qE2BaTZTo1Fu53SY",
  "key31": "6LNWKMCQWYtu1Edkj7vNMsjzZDCU6SvrzG1DNzSxWg3FEzPT54ZEqauPFSsqZM9TkzgYsQhvZstXaQCiWvnAUmJ",
  "key32": "3JpVRf1SPkF1iWCGYkMMgxbtacUprGonunDGfAm2zvuPoGcFH4ahDGsCCkQUf4TKnSLSjWyD8zZVMhVWs7VzDx74",
  "key33": "4iMkR412diThDG26sBmgQAbTJaSWHdhida6YppeKE4DpsHzCnJsC1ZH5WeShmNpMHyBP9tVzscd3sGgfmv7CJoim",
  "key34": "VuEC1usfoMZGY1uU2MfpwtjWFXLoXbBVEvD3EspJ88NX9PpFNEeNPvKkZNp6iid5bn18XpZS6ypTVmuk81EpZTg",
  "key35": "2qWSHiZbLms9LDsEcHqESTyERt9NQBbB9RDGfqZHpU7bG97c7ikCgLF7Z1mfN8qsox3zNqKjcNGkJXTThtJnaqs4",
  "key36": "3ngveRb4WzfiJnsWcdAKPMwjhMUBMYr2YsVtqVjvuAb3KKVA2PxmwgznHthJvKPGbzHuYUQn6uXgzP9MGvkFDdKE"
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
