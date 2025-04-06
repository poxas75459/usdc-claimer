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
    "5q8SxjbcCfEijfWc61TdqrVA9W8aX1AWBgNbqSHngmnCsmKiaFjaXzjzZe92tn2vwQCw1qqnzz8PKJCtXDUnVMCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SqCKVYN353AvzRnRYfWkTZMw38kas7YLeKDhL8gio8vcyPeyDpDee1YAZ4CWtw5gAvuZRFPCV6tqpqUDPo3ghZp",
  "key1": "3ufCEUEEwNVraGc4fCk9cZQPvxR9mfbKPuEPLpjubnL68yvReqfeJa7G59v46N6Lzq4hT58fXL7THHyg1XAuxc1w",
  "key2": "46BXAxDbwutrVBCPG4oRsKfFooHX6KRon3m2TGTpNroV2zvCvi7m6kNz9vzdhQJqNBK28YkRe6vVaMcg9rQ6rfnq",
  "key3": "38tC8MPUQQ6tUrRTXY9cQgwDyQqZd5NymT5YmGujLaWgwNfk6Z2mraqga7QeGeF9QtphC9WY6rgxTiiocUeRg4MN",
  "key4": "5QfL8JcGzriDgowL5bh3Sy9kAV4Ngyt4dmRNYu4C7FKwKQpbEzhXMxwGv21nJRD8TooUAK6m3j6H9kwDa6X9boZi",
  "key5": "58Srqumeunnd53BEyrMQkyj99LZwhseBaSzZ3dK8s9s23pkfC2ur8Sq3vzY6YJ3MJwuJtE24toEx2E8Cga5tnHqz",
  "key6": "3wcKhEKofkf2zP8Jbr6VD9bgTP1RDxfeWRN3habbtgLBU1x98BLbk5Us7weTvtBEmL88tEjYvRQLC6Dgab68QSuF",
  "key7": "2J8DU4u91Lz3HcYaSTggw4XB1TETUFknu8KNMG2BU6TWHearG7KrP1aNttLUz87o23pDLnPDTcnQkLsgoQRvAvtp",
  "key8": "2ek2GmgayRcFEDiVcf1Si27GnGEKoDCTUB3zCU4528t8rohD9WnSAwjvK92j4ET5btiFv4vV2vJFw78XjQAyDjtq",
  "key9": "2LeHznZH6Mi7L4JxYidmpnpskL8pktm6QD69GWxLZf5oS7qdg3qKbNHra16ryEuFVi17DvoGaRsW17pdxsQCcnCc",
  "key10": "2iQCqK9iAmpp9mVM5kH2CmHjcMbUJ7AFycGWYmS1MXVWAecpvnCQgXmsZFM2BZhJ2tGaZqmjDxT7V2To3kL56bZ3",
  "key11": "3FwnDoPrPngYT9Z8hjXD1X8z4CBJHEBMyYRViRnXnbTtYPtnWsPAMJn9ziY8KF7j6oXRnjs7Jwkyavo7xZDGQYJg",
  "key12": "LzpRQUthiYmRKRA9vfRJaFPRQaRHmGkCswoAvqP6XP9vE3tAhjTLQ6wscTqknG8iYUTBvFQQQbi2N961bgwsY9k",
  "key13": "5Z9NdNhGVyxrAYxEABaZpjKy1mE12aB82N2cB7dWX6SxWcCt5baxQsn1hMRU5WHq4A96cWciATwcvXx6HjFHx7JV",
  "key14": "5mt2hS3xEX1msUSEhaeXLgMrcpYYjJCTg8xzd3BHkyWWi6ms46UBA2Xt15AmYxuLqBjVKcfrVD5b4GUzkoSjj57N",
  "key15": "3jsoDdR7xcQzEyuusico5AkhcNkf4K3RL3Rmaxt1t1SbvLqg94FKTCVHvtekiZYiFsR4PUJqMBiECNc6RTto5AGc",
  "key16": "5qjjzoVpZREE54z4HGTFXmChcWV2CSCgC56NMCJoqswNn5WC34ETMfN1sEMcB9JyWmBvKxkeqo2haby33QY6aDNs",
  "key17": "2oPN1LQLoVnSL8HS5HH7uCs1oDPCwknYyAZZxTfJjSwy88qTfrBpk9qa9BKv8LkgWM99QhyGdsDS6dBzCLE9oW2B",
  "key18": "3kJxHm96dcogTxsG3Ng1Y2VnsA3vvJ2WSz9fvETU94pTE81ZDUyrzojLuL1sJEC6TxXXWL3vQaXbjDyTNyEU9Gjs",
  "key19": "4KaEeq2j2rVEfTKX7riSttrJ8PoMbBFnMBrT51fGnG2feKrhAmqYmKn8tSeDpASa7xvcsdbhafxsb7pvTvJcpH2X",
  "key20": "2pt78eztpa71zmAEPGWJdYJzAUMowhhLHwVrL5KVcFWFinnGBmtTYTX6MbUriwiQNNo3c2jfzXMbAUswBtXLykoM",
  "key21": "4KYVGmGPzUsop52KTo8BHy3ddhMdHGuNm6sLgDLNM3CHBg7wgTQ19xBgk6wxxsCWfnDJTVUb6FRjeMN8tf65oQ5n",
  "key22": "4eKxRELvTaknqFddyBqMkseQdBUNs3cNxBCujPhcLGt4ZBNbvc8Q9JRQCkQVbL5m5kfAydU2Fco3gKvhXpA5M9wN",
  "key23": "4snfXgwpGajSPMxieVQ5rPE3ePYLZp2iYXTx5ifxfmK8PFgutRYx44w48Exmrn24Aewa5dtg1rMPfGhs2QE2C68y",
  "key24": "3AF9Jw3gCMuj8J3TTr5NYqe6qdeDFzbWeKuRLN16kwLCKJhjgRKN9AeorcpD5H1UvguoZitVZ8YjyqZzuDN7qWsp",
  "key25": "4JpYSQW46HN2zJs4pdrXhChwTCVFPriQQNvF6rDK47iwe7NjMPANAYN5UJpZ4UyHcBrswvFgK3SPgt1c83MaCBj"
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
