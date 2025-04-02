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
    "3JxVn6B5NvtsPnYSYngGTeC2MreYoY55R11QMVUDyzmvWFGKmnFkRM7ertXvEs9D9C8tHshJJuy45WVrsR49w1bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7j2jbAgx1zm1aqP1JN18SgdywV3eraS9vfeCbbZujgxjS2RcbnKbiyj8iwpspKF3vF9fgXXFbWqjbYMhRVsHK5",
  "key1": "37e9217eLoyaQDCgpVGuHryNTYZgme7z57w7cEJ3n2QKto8623Dk5aMJdfwNxMw79AGDtJLG7Joq8ZEkZZttoKUe",
  "key2": "36JrSzjVgAHY1ke5n3J2xMZxs9XS69n46bWE9uPpT9CDpfNn8UsiZ4wHL6V8HkeZkPxhtfSsn3vs6R1pK7sqDeC4",
  "key3": "5jpwibcXzXMP4eSHwxJqbuUMnYBAudQrmaNdoUFdPnSASq5SzFUrz5Fu3nLfMhHmTxQTvzueDvc6YaJVaZbeV1G2",
  "key4": "5oaxCdQdza6rE8VwppybR9r9eH6tTdD9BK41Eu1Y8DYHGv7r5mzD9hmCsUHuQcwpeeDAqWXwxbKfDWNuATaPcBVM",
  "key5": "3HPdvaA8Jy1FoJw9GHPAufrapcZAwCLZzgSaBuqVTmRnyv7NqrzkqR4zrdavhQEzZ5XLpaK4min5UxmU676zSDAr",
  "key6": "3T2Jvi9eeUVbdgBXHnvBST8MwnM7EKyyxJBJyM2BL5T7tsf6oeMtaq55jFZk3BFYtDab1a6FSbQ3Xf3LWyfoEhDo",
  "key7": "5GU2ormbJzo5tDAhbw4spir42n3wYsNyQGrz1KFdray4qDZHiNmT1qBr4VcwALmsGsyW8JLEFr5NurCnN9vRaRBq",
  "key8": "3z5jmUMwUQYX8DgrhuAWhvPknRbm1kEmtH8UZjG7coW2YNthtVetYeBR6RFwsKYaQYq9sPHpQ9WtzRqWUy18Rsji",
  "key9": "5G9wwDhG8KbdTWYZJgbZ7GQonESC89UjwNdb6i2AXSREnAZaxkDEFy3sH3GmSMgtz4H5Xf5mGjdyRa3gGJrK57GA",
  "key10": "2HmSfWyBBE69zXsg33ymVMJKYNZzh2J9UcmFjbRHstQuvmuHLnSMHnhuS6qq7o9LxGcGCywDaQ5B9HDzQywGk8JA",
  "key11": "3FFb61CaifwYm75wrsp8us8hoqp6DQUSt5B9fbGpHXqEt1oPUSw18a5u3TaHgd9WfdtSq1a5q6L6cymWzXdrX1He",
  "key12": "28SJoF3H4926TLdMxjwvMVFbSUPhPXXQdGa7axAr8Q45FeZABYQ9uR26AH3GPjua2Ztv3KN3UWepiFeFwQW4Kbng",
  "key13": "22rQp4n2heSUsVX3zgvae4HnrEEnSkLmqgua9AWYmt44KJjKz1LTGfNWH5uhZMjW9bUZvGzj9dsJKoxzv5CVi3P2",
  "key14": "qcWo4MdZSEBLpJ3ExU6SggNB3RTzfFhnse23VMirdrvKTRDaZWBVDcJrjPvfQMyeWGXExMWnExFmJcJqojKwGsy",
  "key15": "3LZkMSf7T43iQ1vmTe8fugCuvqvsVoiLphsKdCwf9cZeF3YKguR6DC85i5ppwimF9iedn2qtJtRA3h6GZLJsf8TC",
  "key16": "2ohHGPvDWCBueoyEUdUswjThLhw81h3tf2DA6JxievNFG3oR48MpJ3MjWQaxFpen7ipMb22KcizsWTMZz7UWGMfh",
  "key17": "5Nsv2CaNPD5qpu4tyQXRVwpyLwxFKpvVfQkebR5HBcCE8w2BnhvujCjJLTs5Nd77bkgDjuz7iADRB25E4g72N7ca",
  "key18": "4tiEtR5qbjJa5fKCo26fcSTPsshsPT1w5NmGdyPsRZK5QynP3rGKqwHGj8pQENfmNEBcsh37SgHTvt9whNzPGz9m",
  "key19": "2dQuWshkyrjGvSveq4mbTcM8m4faPd86HPdQ2faVEXJVuU4VrQC2mfx1eMUmRV4Sc6YmKno523pVAUwBaHbsWnBS",
  "key20": "2jQGefbLUVBpBsDpXcTZWVW1LxcMaiGuH9khwt9eXwNWqzG4iLgDQGsR7jBMmjWSCWPYKdSts6WuusEFTSQapjYY",
  "key21": "48Cp2fcCs2r5f2QNHnoCj8YuRBtmro3qNJHGpWJV69TvynABHwdsLzbSd87arFVeZWApEmPPNL4x91oJbSgwByWT",
  "key22": "2VhLuJzoTzpNqTi2oycuHEzHh7QSf4BaLTQjv8goAvgKqgrbCMGLit1YMxwpjkpTGnfp6SoUZP9vQwJCHmwuXnXn",
  "key23": "5Tj4i6ioRa1bJuWKmmx4sw6Ge5ngLMMVDr3GEWhJapeQT1oGemQhq3PHdgbbZtg5UbxHmezjJNteDjbYJEhG1iRD",
  "key24": "3LDBsa1kM24NKbEnG5AA6cVGGFtvT8zxNKzHSnCwJ998L4umjEqhY3cixs6HKRFXLfpNGzmdizmURJgiR5gLqfZM",
  "key25": "QFsWiK1h3PYGZjSLoTB5o2AXPw3jsF1UyzzKs3XVbsDdGjW2unszZ4yYa3Xks9a7bY4785FDSYpAUvKxQP1iQcX",
  "key26": "4uicx79v3yoM3mJKRU3XSmwtPDC2e7SRQMwHLun1AKb3jD3ZDM9tn1yXBYcZc6psVg4ejGKpEcbJFfCAarJBGKQP"
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
