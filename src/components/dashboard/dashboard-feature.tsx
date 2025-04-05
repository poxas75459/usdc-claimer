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
    "fa1wJ55caSgDyFsRFijijVjDAFkAWeDfVoLGJ9FDRB1bZQHEHeoWdkgs4A5u86Mzb66V1WXA5ySv3RDvpy3znq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGUDbF4ra8JLGaug7LdCQEusdkD6naFkvcpGacDB1hvYJZoUCkRc1M39DUqsFiCT54Ntzve84GyAFVfZXhWRfP4",
  "key1": "L1SFEPpLmxQYnyTzjQBYwfQUcJdV69J6bE98wmmauaX5J64a8MzvSeu8vKbPHTHp7kr3Uvnh3FofJLVgpEVYgYY",
  "key2": "5ot4Jefk1uMoHvuQXZyULYxPSr9uy5mC3AQ2SvMBUBxcAAg2tkBPhfLf4FYRKZFumfk8Je9K4DzRDsxZ8neEs8pq",
  "key3": "5YS73qm8LKnewcYvd4yDRE1s6sWMiEhM7XLJ82ywyV34EoYYaTu5y5EYSF8vvfYVz2dahApj37aLzxuLj2Tj3Q1N",
  "key4": "4E15V8L5fho8SojaevCMcYkh4Z73KcLVJoSDhUfJnbmLBMQnS9vqSvV9QUBFZhrhjeaikFnDnPzVcQTauFEVUTB4",
  "key5": "34eLiojB7yacVbN3aNAZz66XdcUYqRJyEunmk21aqfnscc3quZJynVSHL1vzVdZbUdAUVhu4oms8rSR8qMBAmEpC",
  "key6": "5ZrLks6vu8a4PhX5PzjHb6nZ8sANuYdk8J5ENu1PAmfadwf3CpFtzajzNpXkvG29HbGqM9ZX4UMkF6ATvMUWJt17",
  "key7": "5DkqcRuafGYasWzgdLWsp4u9FqhKWmpRi4RkKz51avYUwrGRnaBE5MQMGK78jp9VpXFRR7ENu2JsK77FtdZUxPet",
  "key8": "57MKiUUDQ6yVY6mCWF9QABWKvrh3hmnAX2zMQYCaJAWjgieJnk1Pjogr4SR9Ehf2ryCsgdjLG1ioUCALM4AJSj5b",
  "key9": "kB418qLS1s2zgB7QswrK2qSgpCLVFE4WfS8mvabDNxxT2a4JpQP8WheaMumGb5jr27Uz5pMQYgXhoRKbUnTR9SH",
  "key10": "4DuFQ2yyeUxYzHyJC7kXDxK9A6hLgVLhm8TCB4QMp11rrZL8YKrzZzbsy453RTgDLHM2tHMM2QqZdGkwjUNjTpNA",
  "key11": "259o5iobbmthKM6jxX2Dbr4xfW9kvQsu45Bq5ZwmKsCANkn9jaSw3R8PBNq8b8TLyUxtFtqXKEYuH5hBXYd1AwNV",
  "key12": "dRsRjNms4iqPCF1JAuEzk6AZEYR7rDo6cB84N7abFkEP1GChLXaTKZnYnTweACDDHJcCSBWD6x3DtRrT58TmNHN",
  "key13": "2QNHLTfwXtcJqgxwX52uL7dQmYMy3uRKd9xUrEUYE8Xup8eqktJ9phMSfwuRRCByTuCqbvdqyBf4wXoExjua29g1",
  "key14": "3hhERrKR69dUtjFEJwQNY8ZzJimbN4F3V5pUsuybSL7e48VMqEmoC9w6caLDnNLhdCER9LgXsPtgNszrWRH8Bsvn",
  "key15": "44DwnUmMKgDFCxcuxwEw9YP6bwauKZqvmUV5XZpVkn1YKDKenTWiQBci5q4N3JeZUvpgQ4rhh5u6j3dn6e52uKgL",
  "key16": "2ZwSS6Lij9BB6p8iNd3tycLVDsb4mC4fXRYoPwvU9dCudMtrCVBMHfwdcLiYAVGwdkmoj6VwTjXtW6WgDuBQ4gCm",
  "key17": "3BG4h2k9WMbT57yBC6CDJRek2M1Kw9tmA9gDDwH3NSxSGRThjNZyALdYVYTvWsZsCfWhqfAJUWMYrJxJVGL9dQBn",
  "key18": "271VhEFiDGHsZuTTTwxsMytGwh4BYJouax4BGRcayYzzQsqnSz9gi25QRH1dGKJqHdoqvngWZ4zabbUPWQEMjk2f",
  "key19": "376v3mnJnSWAk2R4KcEn8NYGfxEoDr2RhgGfm6CXYMddCqcJnMqF21SoxYhhtCbPACKbMh5ErDNuREn8KUShkeGK",
  "key20": "2pfXHTSNByLvdyHexjowVX3Qdz2PkvKgE7k4QhJbzVKqc9fpk7ydqC7cChPNWp6iDzBjykiGuZtE7zwC1bfFnbw9",
  "key21": "3qDHX69FcMvTnJQah9efjmrC6mQtrcA9E1mTdpDkujVRaYVTnaETjWFKT6RmmTLeuSuu7HDBnA7qDEyP16tcZjes",
  "key22": "5ueyx4srbMkBwM2y83LbxDkGKvPTmydoHPBEF8zu5PeqzLzL98Gdj8vBDEWuXkKdf2iCFDoYNw72ZVWcq2Qxayg4",
  "key23": "N9j5w3FGPQECt9C8Ej5QinMbLWbBfE6uXyc4UontVXxrzG1YNbRujiVFapJRi7Vh7Nv5yBw3KQE1A3GYrc4KAWD",
  "key24": "2kNEUWLqd3L3KiT6aNoDA2hMT6DAtC2iJknXgF5tcdFxqyWoRUT4C6v9jZLb9taH4fUoqWZrBrGcAGPx4BcepRJq",
  "key25": "7kuWjuxiN8msWfze8VPnZRALu6B9HrqunoDeNG6Y43j7AazeyWokrgMeSMcT3ez7rnrA1ptXXnooFQE6RUAWwaN",
  "key26": "5ydnpDBzPYtNkggqaStgU2Y5B8Zv6DjSmApNoaXAf7nhpfAvepYgyfaPDXQDsaYqAnWjvdRyZ1t18heqDMPd86SC",
  "key27": "3WXy7TLxMXCf1HnUKvLZexZcf31iB8mD2vDiUDQsMhhp3STGJCrXew1pqB5E6u3bgW76h7Ctkvq8u978GrA2VgFq"
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
