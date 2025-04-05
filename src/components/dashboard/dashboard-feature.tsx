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
    "5KJrcJiedu2ywQyDT1AtcUw45iuzKG6mevoysay8NA4Lk1BjxVAmMqFfUWrQTB5BayZHaHSvyDnHdkfek82SeACY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCwY8UR9gsvLyT72k65H83sG9AGWpQMk687CsAQvf3Bwv3oWFA79km2xNqFLteVQfbpe93x6GZpkbEHkeFSGjvN",
  "key1": "4xQ9dVt75Nv6BFiGGwNJ8XhqZVCZPGxSstT7NA6CuVArG3Vsyz1gB6oT919QVqxWLPHhf7PTGzcT3QKA3Nwz2cUJ",
  "key2": "5jWeoWtmc5zSivV2CKixpSarKhPDbtbGMQcfoz4n6H4RuyfwDwJQPTL6hNEt966sdwRFvXESZq2VyrqEsn5EcVz2",
  "key3": "41M9VcqF7BFtsjXzoeEgdbB2ZR15nP6r2o8SCkQiQvsi4gidBE2wxnuVdmwN211nKs4WcNhXA8ME7keShNmnXW8o",
  "key4": "TEn2MRtgfsUNcN1Kq79mjVk2BZ76tnPydTQtBVrHLmRuNNrM9Yt3jLStdWutsffJWJXEFnbsdJGt3qaKyAg4Pg1",
  "key5": "bWgRGEXAA4uAD55UMN4wyxeJHA8CaWudqYh5g545qSFZiQLaag7BqVhGZ25tu6yMKHS9pnV3Uq4JJPQZQoG5CTs",
  "key6": "4dpSVt7FcsKTVSG7TEnje4CfTjhmxgwnyiLnRN2FZnKKPKRj5srskwbe47EReygyqRJFbC5n22RwPX3LqLcxZHFb",
  "key7": "4NC2zWdYTCBL47gv4hsNXxhsHNQtqANpbmZFZQnpn8tZAs8TzaAohnivsTfGbxukZqb3bhAv2iJvYYFJUYAULoNS",
  "key8": "Kd54UvcP1fcrGftxPjwCiDpp7SkixPC94T5SGqZc2sK252Q3dxR3B6LAZ2iV84oUovbnacYPgfh8N7R4VUFPEET",
  "key9": "Cyp2mUTsciNAdKRqn7PXKLqZGd2tajgVWKHBJMeHPu4QwuK5GyZJ8PiXjPcQ65b8Ydi37vwmyyzZq95bH1q2ckV",
  "key10": "2YiZzxFgWKtcLgx8e63NGBGky7a4kYbWBDT1SVyRFK5FFWqM6bSa7JmwfkHLAEFAvWNxNtDmgJA4rYQAYr3c9DNX",
  "key11": "4eHF7hqfoZuqbbehfa24qn7yq9r4DLcoixanyTkfyXrR9GBLaAwnhiQvHjhoVxGa6cRS8kJptYumAi41FwVUWSCu",
  "key12": "43VgrFJSPzRXzJiHj7LCo2NZA75ZNGU61h97HhDpHfNzgBH8cXYe8VbN6LZUrSChqosRrdGmYsjLq3iiqDeD4Nod",
  "key13": "4ahkfHuaPHzy8ifpxSGD9iTXjf1PuBkzPYSfnZhopZREfXZc7pTrWJXez9jVHvpqEP5UwTUW6Kwk6y17YER8JDQq",
  "key14": "2CbgW3RwUptv8a28PfYBxQNxQ1cqa2wGoGmtFULTvPKNWvwFANhrgvT3tqRWNVgoL4wwcZMbYBUWuioPLT3F9noX",
  "key15": "4k86rBKVkf5ZvxXaPf3qMaxRu49zUe2VtkEdQZUc5zBQwbXDL5hiScYsXDxJ3DoattEDc4oun58ce1ToEzxDoha8",
  "key16": "5RjEijKPJve1pMLzSVEZxRZuFmfr2YUkurSRbXdzyvm4RTW37knv8RLgshSxHFLHLJdE7Qa1W3aYqE6QnNPtGb5i",
  "key17": "3b3zo8DvAcZ2CAAGUdJbofiPkWQpFb5W9RheGF33FD3T7RPziPHb2dAZ86595GWH7ubJNDphqATb3tq6kvcUerTN",
  "key18": "GQCyhakMEdeaBv4qTSEYvERBibJ1LvGWwcHKRFSJZSpV3djpdz22xwPNQnw3nu3obgPyFVRon5tvEijpeJ55R1R",
  "key19": "giVWGWFaezfyZ3Xku9odafvzJaPSpURg2M317qvNcKqxcUpExiJMiwPyWwC2u17EbyRUTaBpku3Re6g6RM1NUVu",
  "key20": "573twfVPBmFxvSWDcQWkYb2Zye3XZWpUF2uAVi3uuX4GjiLkS1J6STXZL5gfTkmqvrFBDLfN3MpjsC24wksqsHUJ",
  "key21": "34NEpms4vjYQHBMdxNPDXBNfa9FmcTLH4s5zhHU5uwQYjLjJ41XmaGAxEfTg6xD7fu7fovrL187Lmn2519cMDwPp",
  "key22": "4nRrDjyf6Fonqi1GFfwkqk6ho9fMEeAivtpgZ8FXPerfU691pWebgbaD5LMdJCAQ19M24fHpKoXQkGv8W8yeZEvR",
  "key23": "2NM3KLxg9z5FRE3E6X5x1PksWCyt8F1bta4JCZ1eHzov3uYQGDfVdKokhX72SABvvTExHfu4VZDu7Ss3z1RsyAFP",
  "key24": "5cvRCAHeamXFV1jFGkp9C3Byun6Q2UC16w34eXVTyu8Mm1jd3qRF6GzmXiHB1eo3mYwNLb1WGtrSrbrhj3M8mV31",
  "key25": "4pTLG6ouYraC7Y1GfRrFmEUqLDCYZWJdwbxvkcEevUMpgjNs3LEfAZWYv2eX2KzLa2M1Z9CMac1iVS4PkfYJ7KcP",
  "key26": "3dpq75gw7uVL1haMZTaRp8ST9v65jG3cgrKdHsXf3jBvSsnGCybGtdBUUZtUQTLhMeDmX3ANqJ39nLQJC6PvdM1k",
  "key27": "5YCibVWW1sqhCpThczrE3courKjXRkokUo6TGfBUJEWw9RZuGUKLQuhTndR4Nn3sYuJmiL8bTBieTiysD53FSgKA",
  "key28": "2tfVAv25TvuCg53hNHZL1RsMwQTpPV5M5xxLV6x7Mb6i9eBbKosMdYPy2x51bm5jahAFXdQnYhLX1CaqUmEYQN5d",
  "key29": "3yo8ympJwGLTJhe9GWnQVr9QcvyKM3ZmiWgKXcKRFrFgTj9LhK8e8bBQXRcn8GxZadDBDwmm7PyMdtyvwC4cQaf1",
  "key30": "5YibfSxTZDv3SQUoEcFardMkFtD5ZbCANQfziozpgKBXGFvNkWuyVw93XB1FmmTzhaZJ5bpiTgFP4KRDSYWjpEnF"
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
