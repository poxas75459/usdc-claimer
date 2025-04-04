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
    "bPMrW3nEzZaDsghu6nmsw4Vu3ax5ex4SpTWxXNzcwuJsdZwyf4tjGssTNEx7nCAvAL1sHWH1NVw9Dtm38mM85aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AzSYXfuZPsnvEDPA6wsW1FvbJJ2VChpdj8Ec1NQLJrgXk1ccWiLqPpxssyYpbiChHd4vpxmSnVaDue2P7ouqVkp",
  "key1": "5bZE7Mv5QzYy225pYHJm1L2VrXneT3DV46ZWBxtUzkvQ5tyVrS3ZrchrKpEycRsyTvYQF2WbtXNTJU9Dhf8dwvzw",
  "key2": "32LQrKB3a2zdZmuswPxQBjodLe1VPvsn7hnFsG28EZC4D41pyWog2aY8JTFPy3SsyvhkE63YfYdyWVGjUVxHKPPr",
  "key3": "2DqCjruqokWkdXqna23nU5jKYEX7yoHUBoBb5jcvnPFX2gYV2gkD2TZfxtQmEfoedoXm47TUgCST4Yys718wqtqL",
  "key4": "4ed1oySmsV1fte3gd9Um3deWHxugxaGBJjfRp2Fh8urmUiCvrgWSTka84DC3q6CEPg7twWJdsShzspdAFswLcGQb",
  "key5": "4EasG12WuZHFbt8stABWoBGnsvN9KNaJAQgmsrsMzaqe1tR6JBLYmPT7ZPe55Atyexn8k6oB7fcBsRQiDGr4ekSM",
  "key6": "52vVopmTX6MSqzPaBqXHd6MEuMSfj7k8Fo3pR5eYu6vtc8GPcU4ZRXAP1rqszyowgUgXE42aetR2RKCdFo3rTW2M",
  "key7": "zLk25nfYGzaegbAt4yBpAWXS3icFXLCNB61hPM11iF3jQRGYFZfwpUidKb8UmYoCzy9jCJ9wrmQhm1CWxb4q3Nq",
  "key8": "43S17yChbb26Jn5CDFE7iJQPhYSzJgLBFxPwC9EkZSXxfWgLUUiD6hdMSx5T93ZFQfayzvcn4HTjJwT8PBwjeact",
  "key9": "5EG94ZYk8eDAx1dcFAV9DDcFFQxSjgd1YTjJ7Zpg7m9VzLVnYuRpxCy6TxdtJ2L3Ee8HHQm4TgiYJjcLXzDnGRGf",
  "key10": "3Ds8AmTPTcejuXe9nxPKYG2yg1oEqRJB7NXD8bYbZLBLDacyqdD1idqDESXwRUXpX8j4N1vwVh3kdh79A97AQNMM",
  "key11": "2fAtgEejyAChKeJcjzriz2JVEmiNueESdLtjGeQAwiUrajwPF64smiy8ZQ2XAouGfzN3rxNbLn1edGAaHGewVR5q",
  "key12": "39eUtZU25kDBZpAkgqYqUN7mbwUj6oFWotmTsn7A564RF8bdDcSR4uy8sCzjjJzb8pFgKQ7jaEukj1Qnhis33Ga3",
  "key13": "2iyXTRrPEBHvZhp6wN4Cbg7CSpxjvwzzd7XjbKvBYqYBpEMeXxwZ2zZVc1SfM3LQLrWy7LUK14ZTdv5nX9fefV9u",
  "key14": "3wMHvUyfu85ePKXGFm675d6ib2TGeGwyjqtZaW3HweMheZRVhwg98i37yuN2vDxpAJ5re7Rx3bwcZNYzjQD4y9Y8",
  "key15": "5yx9mpz5o4wp4Qe4qddiXzmnEw84F8HQ5nG6UeyJaMPHkTdPdxGiwURhG3KcjR2RBmdDWwQ79a5HWgnnQEuUwuoe",
  "key16": "5Rij5p2UYDzkKCkNzdwDD13dCW76hzn9qrYv1iRkUp1EViqqVew6YkqgLyq79RrYhYhzorikwFEiQjNHo8CGMrEd",
  "key17": "3XYViSyG1XhSeaWiLcxKjiDTAr69U5Z3AQEtpxNKia9YCMhNoBc6zYhnTKtMn4gvfG2R2mAWMUwD2xSbsK2jo5Hu",
  "key18": "5EhRtinEqG6Q3rnZ3jdmxmaai3w61zdZVuTLLkBN6qobFQuAUE3Dk8XxrYtQEgDsQMrgeE9BtKyKzp1TtLNW4HUW",
  "key19": "3x54gz1wZYRyLG7NqmdFiX4ifLcXkMUFVUaVxDF2weBBv1JXH3pTZesoPaFiarMpKDx3U5eNr2yJSe9AtMP2vuF2",
  "key20": "3V71kPBhs4ywyu8Hq8x1tsmJ74fo1VB5ZbcqMktSJpELMPYHKCreaydUBiPeysAdtNtpfjAi7qRU19J4L4QanDSw",
  "key21": "44WfGm9MDLMG2ZHFmoJqb3vA8e2u2L7DioLXTDRcpUL4sFrSpUeUqJiXkYTfBvkcvpqGdAEeb5RhC7nt4ATbn6VU",
  "key22": "29H51ypGNoo6h7YubWWZ7H75Wca5LUykT33jQ7gBtoGTygTrPn4Di23MceRwAMLKdEv1AbycYapZc79VtAHnRJjL",
  "key23": "2nd9Xg2qa15X8wU2uh6hccrHJQKbh8eFKcQvd48nTUHjYNA4KqoYhyMfroZtUmLQ7Mepk4CKcG5pafNRdXXPiXvM",
  "key24": "3GmDqzqNR3aemQjWXs49gVChFBkoatyCxeSMEN8KDYZPs8TQjkrKydpz8XuckbZwoinT88s94dkoia6PxVaqZrY7",
  "key25": "3YiNoAoKreBExpHPyX5GEeLsLtNwnvEHzzEYbTFyGyyc4YDK7aZWJQvimCX849Ys4FnjNNhLgKK3c13GjKy2dV3c",
  "key26": "2PtQtV1RAeFRsBCv5Ujp7xf89HohbS6M9QVzmWZNdmebtQcsogYjmtN5yC2wrA2t7VsA5mg3FHs2fd9RUgHNVRsy",
  "key27": "6sWcWVydxJXqqS22QbgZm1kz4ZggxeeuDFLNpZyWaoAFaM68A4LY58r19su3BnqweJTw34E5BKKgYvxNKLkB8Zo",
  "key28": "51AR9Jfbn5iS5WhUPQUCW8TsE6wt4u944KXc4vY1Qb6KVDuRyAPveGhvDvSj2ds7CicHYJSBdou4HRZk8E368Fo3",
  "key29": "4vvJZ314BKvxhdNybtR8q3SsJNvbDRaKfnUBryMHAwJ4eNb7rFFfWeGQkQUmQeFqfFEbyzMcyAkq8fqXEVENDdWY",
  "key30": "2E1FJbNSRZUpJ7BsSCpNmbv3RvW5W2P7CoMmLUHdtqSYCTKjZoy354ZAyLftGbZqzqdtuz3g5RwwE4qkTpnGJmiA",
  "key31": "35yVBdgfZuDnnYcTU7AftVyH6tjUwUBixUiHHoqsQqMTjgyxmB5jSdXrpNiz3YDgotdSARVqryohM8k4oeRpk7PJ",
  "key32": "rTUgzbFbqg7DG5TxgTD5qdzwzwjPooFT3zwpadiGPxaTPYCfKPBzRoYksTeSeR7sRxo1DaUC4Nbf6eHpy2b73G6",
  "key33": "5B5W3nmZxnueXbbt3VFmv4HnSpNbMivLB2uxivEbxqqM3Frbhmaoo6iZTsCJMhaGX3TzPde1M8JsicJkn3iBzXGy",
  "key34": "RXzgiQw9hNe1JwKLGKsCgZTm4mBiZeD6evjCnKLLdHTnDKTnuC5wBQJTET1KDp4VgSA1ZBB5tgsRALth9GDjZkD",
  "key35": "5EWqo6wpyWa9TTQ6Ck6q9Yo8Dv8aADkoAjwuqEUugEtknjU1JRFvmBD93GKW9GLRDbQUZQ9YJhyYWsDYWR9xpuAY",
  "key36": "2oKrxhPDp2vatR9gGMvZEjyYWDwAm5S5zhcL5P3YGRep6na8jzenyZdoW2C4uQRhFS3nXzYMnsyoi8TY4MXM587z"
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
