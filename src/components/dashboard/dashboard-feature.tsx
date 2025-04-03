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
    "WzHAvweXGk1zxdC6qWohomRpxRr79FuRhXKhGnTZZ9seQ5UHvydmZdfguKJ6Txe6D94RnPHX8JDPGb4ynBrGakW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yx6j3oJcBMkBaARNrA8DhVEbuMVebJxvcCQ9cideYx4nbHtEic9uVwpSMDwofvnETLEk27BRcSz56ENN8SZVNZG",
  "key1": "41QcMwHbdCL6cYxHQ2X3z212RPYjp3MxTyZyLf1D68DS7Zjbv4fB6cTphhYqvFgKjbj6wwf7W2o6FiMFoyGmgZzg",
  "key2": "2FwdcJMnY1SXrw33bRsEbfQK8nJoS2XA6kqHnDuZRXHcHpotfJPE2ZMi2GYvazKbn8FsPfa8bFkyKzuwwrH8YKjG",
  "key3": "4bQKZAz8XagCZ66mKRwWrctRevbmBDN4zLjN5c8uo8UC2CcVQtt8bxZqw6xE9y6RFUexv1om2JFQko8juNmgCHEz",
  "key4": "3MiWhBNAuefe876joUwnK6unkzGnzRvz7JiNQAv1Vc6NDvpL3R2TrmS4R1ZSxkvTkkpqGUkyHiqAupqB8VBRU9Q",
  "key5": "5v1zwqb1wfCJYLnr5y2URAB1e1ZBG6as2eLezid5RP3x5TRmVvWRu1FLLGYi5rdeYc8ZoJPKUeqHNPJEpzmsp3PC",
  "key6": "zCApbt13KizfQzAmq8jVqTcZCWmr34QFjnoStnFL7AsQGpDmsG5WWjcapWTNvurtcYxwDmgcndj9NnmGrQN8dYg",
  "key7": "2XXE2r6u9QKhS6HJSqpSSrfKbLuVVcFPeVHSmsNKAF824YTbSUiw6iF3ALYQZCspHDccZg2oNVhoud7VZTiiaxJM",
  "key8": "AqRfjwY9qBNC87qgfQYgFC6FzpCGBs1obaxuHFsoiKD6AGiXT2NevntRvpZhh7cxxfe7ShNtFvfnfssA8Bva8wN",
  "key9": "2UdCWZQNrHyY5RqRd9SUEfoh69x5uewvpJuRhhKo5wZx2yZ6hjkzTxoDBMdXELYwK3eALSZQnDXvx55NDMU9p8ZE",
  "key10": "4xY2ziUGi9kbZpVZF7PdtrtnGHWnaaeo6Fr2JSyE8eD8aXzNsKk1W1DSV6gYPRxVnT64hBP8rjpbte9uh3GiTKoZ",
  "key11": "2QCP4VuR473GLUitsyXJArG7uK3PD6gzx7NeLR85CRexXcjmB5r9DDBPAZfHoeYY45DcJSvqCp9o6SiLi2ddEQia",
  "key12": "5P8VoB8DS96h6MsrBAGCqwcbfdDN7e7DfDeaWUxiPzWXE5k2Fq3NvZLYyBAWc2PA1MHKHXLLFe46vy5kKVeLDrpW",
  "key13": "3fzHayQZNuJZyoi3MG8Fj1PCwhEqDUnopEXhCSNVvRis5oqtQEYTLpLzQi4T5YC1Edxd9vUraboDMNjNP9L5i4eD",
  "key14": "5vyXP9uaA72fc9SWPfhHVTEzPexGFi9TnzeZTvHpggbqUqnzdWaumaHQicRTckASbC8aReiu5ubotwiYsrJTYWus",
  "key15": "3asZjktb8ydteQnct9crZoeTGyk31iKHnKy3TcwBG68zzryXS1FW1y1SPPtQQeChneZ6oidqPQWLMRtuotiy7ZRJ",
  "key16": "3j4MdGbLmzWDV2MjojmWS4ZhtK1apa8hSLAJSWA7s6DMi8sejcF3ZW6R7ndfTehhMrKmqCZ7Gp1ohxjTUfvQU5sp",
  "key17": "5eVnFAkRxYw9Gi8j99rhtYFHe9KTatEGsc4Xqdm2gxdi1PehkZoyCDzezhmUiWsDusgirWm2zfZ7GeCQaGo83ncJ",
  "key18": "51d5fTXAeawqPufV69DgPc3pwq1UTRc9XN3yaLu6mzEK3pGkShi7DuwXs6MhtyJWoLYe4D1J9imuKeNE4191KBfw",
  "key19": "3SHZKRC7uDRXcpoBPSn5RhCKmnYc1RRXYtER138A91g2VYk6Z1BLsR7ePGRNByg42zVrs1nQkyRhv3ZnkgKgBDnp",
  "key20": "229KadxPfmuEo49jRUnv4sTHND1o35cfTjNdXUeTKhEy1v7YwDyzNFor9T7h9Y6vh987gKhpP4AScWMmvuKt23kw",
  "key21": "4Tew7nihUsbiLkgWNT1KJgtugJEzixYnd5Py1Ad1tPrKn2gQQeuPX1bntKdENBxBwwMvgeyUMEKSxWF8K89FMcHy",
  "key22": "Mq26a19UoqHarsHyp88RpmSiL4whn1CgbxVq8z9UjaHp3ZR3doS8WjJiZfusEivKBwQ6Vzx26JsACjCkZzVQEeX",
  "key23": "5UJPo1aKvmZXCrq6vKonJqEqo6Hq7M19A62ZFku8YYDQG94MrHVEqtyDRpf6w3Kn4Q5RH98CTwSaZTiNHid48VMN",
  "key24": "xFcZig1NPPqKRgtuu2wsCTfWM6Ga1qKWiZUUYDDrms2rhwTJPuPNDEgxdkJqf5Y4WGZ2eNYQfM68i9QeSXm2wNw"
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
