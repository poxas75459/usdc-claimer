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
    "4H7ErGgfYNRTn2Y8wE6y8D33fxXWG881vRjSCw79KbtovKA2ii97BHYe4sub3cVE358BrCKVAUyf8XyJUxCtBzph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1LNiEWAtcxxgpKAH4BwRyayiyhxXwMu5vYKozg88gyxqB3kCf4BW4j9h9AHDGA9YR4xBGWd3jJoJ61hSzXkFTs",
  "key1": "2CCes8xwdfcVtmWB64fmZnNN6Zu6yzXPU8XAc8P9GAykNzsapj9wQ4w5n1evxrQg4tq1rU1E2vk3AEVRKKmrsA2V",
  "key2": "UirrLvt2bEtqHSQTFW9w1h9FnVYeQURgZ2F6KexaYhQzExB7ihj5nzsEVNbWu7R1Jr2uGezLkEdskYNj5hwuT8J",
  "key3": "NeAn1qe9FxAqURYFjaRcq8oYBbTn37LfBLjXPUwAb22LhtAmxcyvcXuKLMHBcuCCMuDDAjEE7PVQ3RSNkHFyP2n",
  "key4": "2ufZhE4S33CWmMF5kdxckMv5i8RFqNREavd7BsWDH6u9tHjXJJ1uaG5iE2FvNmKVaVeMopsFkqzBdf8kmiaBzULH",
  "key5": "38NrufvKArUCqcSs99ubM2EGGJLPrzpfqMc9cfKFDs8zWSXbieuTsw59QxE3FCziXX18ZNDww6w67BngrACgnUt3",
  "key6": "3ANnqXfCg1FYXKVJHTKni2cZib33dh4LAJGWT6xX8knGAKXJ2jRZrqoEJ3dM4QJvrxNddAcqXR253Xs4nFoH9qWs",
  "key7": "5WC87dSMAVBc3CGULrPrALXRBGsgB3KhUGpp3Mj5FkqQQr3ThWjCcPyYqUvxUNpJNetoc8Mhgowd3sMdVxkNNPc6",
  "key8": "2MtnzGSGS5ZuRJaHsxML5WP5rhvrmtgcFYQULaE5qn6UbcUmoNjvKCgqGbpqiJ2jBATStPEcXuf7mV7rEAHyMZ7w",
  "key9": "2J9pqPVRdCYuAgjaYDWJsrjEBazUSDUS1D8bkunNKYyLLXusTHSm8eSAdVkswwJuy5e8o7nLiSELVxAffvyU8nzX",
  "key10": "412RG2Hg1NPxBtpbXgGDxCtAezeMye6bDusWgDqdqBJPdCefEN8A6nus76aqJ6eS5gr5tWkDoZvfeT7Ua4PbLCBV",
  "key11": "5FbhSthi9x2kQALm4LEgRUMyTEpPjy1SwPqsWNjyFLzkTfkvsV92EgW7voShm4CqwV95XWKMN5D7y8S6hq6z6RSA",
  "key12": "44PxovuV4NfAfEMmdmadHHJrUfrapKu9bCd2mCz52BBHYqb6LuvC9a9d2PFGb5BN4yd9NDvkqzyiazSjb4RiEgMZ",
  "key13": "5KMmEcQUktyXCJyK2XKYd8cEDtbCKQbiAB1B3daUtoqVi2mPHv25ZreEhFroR7H7aW6LjZW6tivmmbA5FCVXBJG4",
  "key14": "Qh9idc4LKx5WFhHL5iix1wUqXL5y9PLsizr9jyES65DQTC5DHUdH2Hu3e27JoSPWpCY7vLMMtKTDswtK7RuFtRc",
  "key15": "5moaJ5txmMuNR6ZrMUGutFCFpZBNnpZkB4WH9fu9DTXRcXqsQqbqQjm9xa3JDyjE4gBV7u9oxD3R2LsRdNJ9n2yJ",
  "key16": "4R25fUedJ9TwcpJ5y9bK6nk7HRzwd2WMy8P2ZNoSkLrDxwqWrFFemS5ysfbZKfc5hf1Rq53eZ1nxSHqiK8a8FYfi",
  "key17": "5UchL8xcVUxbuHa8wmVvsrqEWXoC4JRrXCsdhYSFrEkbCmffeZzPtwSSCjjU9rygkfNs5mPn8fS1BxCfV64jQkqe",
  "key18": "5vkoZQoqNqALHmuAnedvxTjD29gQHnLJ2hMGcSYLHR1Fbcgr76e7iVSThW9ep5Z2LH8v2kQQjf7WDdrrVpQ3z8E1",
  "key19": "2H3D2dWgxxJbMcLp421QcJUTC2XC4kxJvgVoinwkVERhvTTBMLqnVwYjyzHuusqGNQkUYGRESt5wAbfahT3h7Drk",
  "key20": "25bGH4vLXioJ2kghezLgxDM4AeU8RoGDyg2JfsdyMQC8Nih5aXpHXuBq88iP2MZywxJXkpDE3h5QtYqzfSFB7JYP",
  "key21": "4VJqpsrUXvqcmieRikc8WGtxYpVaR9QQdo53PcqUixkNiPFrEMPvwcN1vd2kWB8jW7firzxnszuBxj1dkwDrTdse",
  "key22": "3ro4pEw2nhMeRnvmDC5c5iF21mXi7hCgay24HYThwUQxT2V3koRfkJPqSAMsjVWppPwXPTgimWUB7i6maFHBSV1c",
  "key23": "EC5xDa7DeacZgmMRSbg69FXGuFyA6HYpyM7c4XY1wYB3ohsPMqzDRY8HvTkJVPytLZjE5HbUKKKafjYK8A9g9Wh",
  "key24": "32kL5WvR6aekSgM6251qdvirtzZhr69TZu4J4WxVmita2AQsTpTdMB1K6tNkjjkfkiXf8NBWQF1ZHNEjvioaF9jM",
  "key25": "44Au5qPaQUoxrpPziMV6rfmxybT5wwC825wQT6DwWbn17ftmndWBnsVcspNcXsgDimivL2Priq7iCuzSjuuVBjAN",
  "key26": "64U5fCp5K1RLV6KgR5ScE4CnUb22Jto2dVaDSRRmSM4wmWk9Rg88Hx2UifZbQMzwtaxB2mYiy3ypiLaR7MVBrFMS",
  "key27": "ii7J9cZgTLXA3ofJjCwm2rVTXf4Y9HQWW9AQnbniRrQAYLvq9XVr7RrYwKh9tDBerzJKYH6EoXxk8MMKaKkCzPd",
  "key28": "GZjiE7UM2bytNpqgYX2sbAPCz8PGRwrzYCjmADK398GsPT4N26dBCHYNgAtJ6F7JNYgeaAae24Yn9ZL3aMfRrJ3",
  "key29": "436jRVEpAiJcQRKzu2ucuecfmZMPRyvi4bS4SfToUtUg3LNdHZdPtU5fQtR7vRJBCkaLTPqDGLy15zaRNSzHiGGR",
  "key30": "2Nx4PqHN7eV4iU5ZCeL8Vk7AYqq8Mzh3i8cyRTuKWRQHcoPHwCVeSCSgk2ojajmfcbCEH25HZ1rf6Jn3AYvvMwvc"
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
