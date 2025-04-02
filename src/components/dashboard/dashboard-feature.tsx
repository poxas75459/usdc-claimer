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
    "225qnx1FCc8C26tMXvVXW9duaD9Tyk8dMdr6j84i1DCJYhvf7tTZ8K8Y5wnh7pyHpp1tcZvtqdG94g9VY5baYHMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CgE6uJVpXqt2ry7FoDKdnm2MQZ9SinM5D84CsuqBdewMAWjuiW9cYZD88kAPKZedtGS7oP6kGgdhXVFXgmXXiG",
  "key1": "2bFGVvxFjxRrWMMTt7tKrzRiG5XEdcxGaLrN16PBsvDnUDWaqJUXQRnLC71YtKJPdt3oEb3pZ36EpBaCNPaffWt1",
  "key2": "89Bkft6M6utXd651mvV1SNGHAfwnLKbu226nn696rpYUEVyYRirGHLbSevmjMmQH24dP5jhxPaCBBeK2zRHCjEz",
  "key3": "5b3yQJdRHhVqYZRTmym95AYLY8Hjx1y8N3WKyDhabvnYN11Meks9bRdnu3TrM8aF52JajKApmrPiYxTbE2onx8nX",
  "key4": "5gTw3TFfHV5pESHkNCSRqT2bJLKWqRkJiFpp5y17PcCuSyphoSsRUqES16Asxj3sHd9a6Lsw5fMqnPB7J3SfwkWn",
  "key5": "4xccgjqDBWeusiCTNCznKXPxmowe9vEfT8MPAY4jXoSPTvdGP2F8yhu6C5NDHWa683q3yKzGvbCJApwFAeSAB6St",
  "key6": "2UuM8CgKDPnqSpVXWe8VwBX3BzoXTaGeYgwyb7XY2cRKzsq84NTv8dHndvfvb28YkQAhQUG8G28wNGJMXbXpcpRx",
  "key7": "51Bfxzy8rtnKUXQNrRcLQodPjGGfAxTnUbRe4pvs2eMaf6o4HShBDEtJvL84RKpJu58sSWRQVnZ8HGzuVjo66RfH",
  "key8": "26cq8EKG3v8BoNzFiwKJnZ3wj3xqRtJ7XDv1kzcgJ9TEEvt4yGKAPM3zAxKKYz2YSQNrLdyGZ769iXAzSjgunwWd",
  "key9": "PibT1qqTAKxADHagsfxAZ7GrFdtf7xz7wjHmap4qQPhmvDbLLHdiPD5tXp9F6VKmBzaxNbSFnsj7LEhA5yXCkf9",
  "key10": "5HJqMB5p8qJ6fW7i7DZba3shRawiyr9eGE8Zxvs1MEJbqNZ6H6PGbMsfzhkVXrNKZYW2eixhQHHNhQLcMjo1wWsT",
  "key11": "2ZUTHT1bYBnRH6XmAMkeq8Xgh5txut4tSshrWwMt6H13iRsjbsyazKQMRMbrzbeKng8j1GRYmDkHbHGnoq2oa74P",
  "key12": "5gCHgCuWmmiiRiDbY3fN82USUSNEchxuiZ6Q4bh5Kd4z8W1J2xua91wQZwx8J9RWrmfCc6wo2H7hLwYeqG4FgG9E",
  "key13": "33aKNmgJjRrY2ejbtNLHQAazTrSWYdk963giLbZj7fiJTRMmQonE5RJ6Eo4nAmPEuqaMMQ7ttwEq4CWUZNPLPHQq",
  "key14": "5wtR4PfLtueMTpXEWRAkwHrDGZ54PUoEdaZHgeLo2rZBuo6b95ZjpYezJgMk9axsEJUmMoXvPJtRC1rmeJEUjCHq",
  "key15": "4kJcAwmJz4Y3gn8s919ggBspzcHPMYca8DnqLARo3ruTfbk51zdtGKG9JwSsgTTZ61ibZgjMt9Jq8n9M1zSDeekp",
  "key16": "5Fv3MMzPnNE91uW4vgLLLufhV3sFZoBsMSzCqiZPbSC2dTa7xq5HaUd7dvQAUuJdrh61JkHEkUAbvRXWj6Mt5yr7",
  "key17": "4QhoWEpkg6Gm5SkcvRtuhirHRiL6PmGBsJEtM7Fv2tcn1cio9VEJsjaA6smemwqpseNUUbfgtjiwMYjA3LdtQS9e",
  "key18": "ccVYPGanDhGzhhCF2oE7g87EyyYaw9vxHT25wAqSaWjM4vozmdZmz2x4N6u8ZEJKW73bTTKAYqdKz91aZcFjmTQ",
  "key19": "5FymYuyt7VCihZyPMuZyvoTdxfFXTYdre4XwPRmcfPLfKXLVHMZXawyt5JHW6PCfXPyqCx33GDuCsU1HsSNeCuuB",
  "key20": "5uoRYyxHmJAGNpLTWLiJzXPj9m7sPM2nSwPbYKCAiMwBtZfAx8aSbBaL4GPVEvMxUeqNmQL4uS3j3ct4oUzPdVeM",
  "key21": "4gZT1634LQcuMrSHSWmvN2uEXBjQpJpRqVGvTQfg2f31PrR1sh5s3Bsv84GaDvVuoFJYXDFkxL38WQu9SnoNfKLB",
  "key22": "4ipH9DoLxyeqcVjMSUGE5tyKYS7EXUD5JyecinKjyUsWzJwSKXD31Me9J22GaHsYX5dTizjRoyVGhQXpe6iDQxMF",
  "key23": "3AoDEZCWqMoQne2C4TxdDkVdQRaZ8pFqZCeZW7y5kxsvZV1m6egcT3msTT2eci3QzAF8WSFaFm43jBsDmjXjYjoL",
  "key24": "47nWpJ4DyCJRSDK4acnrqbutrXChZL6vprt4r5M4XQFXvJmB7urEF5BUubCkLPN3YCLmCGZ2DQdseCk9janqo1rU",
  "key25": "3C1MWYiwTTzgPtbFdCCBjZ8S7cSpfd3cwfPRAAWnf6mr7buUteyq4wsoViUcXcfjC9KSJxrD3PNTN4aanwn6oZmN",
  "key26": "36ZUm7nVryzeGXXW5rm2CWfYFQ2hpLncPbyyQru4vP69ePyvumqyduwN3QJXxurYT1F2hFbLmDr2CRezZ3zaZphg",
  "key27": "4s6qfbTSYE1N5UWSaiYATcDDLiYvFDmAXKYeDEBsgWCHcKkHRvARvS1f6eRMCBsFXVtQrXcbVXupU5DGaVngeuoh",
  "key28": "3BvShaSvotcgrzdBSec7Wqjn6T9Bbcio7tb9sMthnFkauqKbGBZZKdpvCXZaPsny4DGekAry5qrZM8Sf3YEEsbTE"
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
