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
    "4DK21ELASzeRyLzUeJ36zrNygvJfe92RuwrhtQ6xC8gy1u2QWnRjL5VJNDW9JhEUsM7foLm7yhxyxBV4aAGHxTL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kk2PtXhwTekciimDzSKj3RABx3WS68MavTb985RVC2r97bb7LEmsqfeAXBrMprwnqS3u8kJ9ZYkGTY1bkHG9h6e",
  "key1": "4T6vehFvDv75rmzxo8e5661CAi9Nh6nQS8qmHSTfQWFvyEGH5PJnD8jLF7C7BM8XdN6MXHAYxEvnb4E6MgU4vuye",
  "key2": "3ABM3HFZgxBjMUY3TvHrjTtJgqBTbuv1GFYmHPK8dqfNaPUxfZUzctoJcejRcCanSJr3XXdbMvVuuypegdBw82GD",
  "key3": "2wXdYErBoiPTMB1qJZayjbNd914BpTNNPgpNXuQRu26dnQt9Tm6LAm4r2L6p4yfkXraCJZ7PmhZByRnJGR1pzrTB",
  "key4": "bbXGe2e7C8XfQsHmKDoM1b4LXMrY69b4tf44nNztc9DLHAS8kNVvfyj26CAnZcpyBSnj9Bpi17uqymubZX5jWEv",
  "key5": "Vsx5wrcCrYQjmAULvdwah7FqnM8DqBWJhSC18RdGP8wkzcyyf5GnawA4kJ72p2QDrZW6U4khfH69MLqHN2PtzFF",
  "key6": "3s8f84dCqQMxy5t2E2MP8nEYqSyQXq4NRGjWRxAoAkD2TEqwNV1Dd9iqJ7nVfvZu9ChfbJ2E2CvbtfjzdwoVXqgR",
  "key7": "5y3heCMoeXct29GWb5JHgpnDig9Ut3SSKFNgqPTym76K6rE9Zb2zZWwTPhBWNfYaa9MqjfGVL7ikqWWWwhuL3V8J",
  "key8": "3pU2TrYJKkg5sdhGCyGhX1icvwDkDv6SELxuubL2cwCuzW6vdhUSWyRSuxhbJLHfGbyCUAd87y7CNj5tptjehQRt",
  "key9": "4HEXCA6YVrx9WNsBnfafipLXMMxN89tSgiNp16jBagTqgAa8Sm94snL2w5948jGWVmgVzJtg83eZUHFrVGfF9BQk",
  "key10": "4evtQYhfx4ZHeBZM7PExNiFQspwQB7y5DEGkPfTMQNTeinfoXBwyFtmEADEKNdhLiuiD8ynhVjTbAKgVfyRcStNf",
  "key11": "2duXMc6LqB8PHRYeZdyZmheUK2eUjc2D1rKeCFqMrvtC61fBtxrwjweuY6dmsebaJVWHshdfjuQ8dVc6SSN1XEdb",
  "key12": "3vULG98kCSQbg68LSxypria6yezWjP3Y59hiEEcNhaHfmj4Sg39hZeTQphwAMJH5R9ihPUa6s3RFsa988Sjk81xJ",
  "key13": "2NTEiTwePhXXm7TYs9ug2d8ULLzHHkvpLWKguF856tV24REfNMgGEL5hVFAufRym1vLh6NtKUM3SMdtJCvJ7qmST",
  "key14": "47dgcZqA177HWk2QAjaxwQuJBdKUmvp7skVn8uCXcPWkwo5KEhkUU8gryxK3FVaDAUzyBoJnqm526CyK1ebDmHpw",
  "key15": "3GGxdy3MnaaFdNxoaRePBaU2nP8ZL7czmhCffXVc3hLKSoPz5go7fRqBGnHkNPwGwaU8zh3KBrZXYwi9wrPrvstd",
  "key16": "X5Jki2BhfWY5Q4jANJcc8Toisni7QiumkReRVaQYvJ3m58bRbrV5SabMvd9P8TpvbZNnoSFRbnaKnNjNsAzacx7",
  "key17": "2ozBbk8tgirBabeG1ze58u1tZJcBrbzNgR9oNKd9mPT2WouaHNEQD7WEbf9yZucFvza8u5EJJPmzfW8XWbSNhVs9",
  "key18": "4kmVSq6SGHNar8V9u9zvM1bnxv7Hi2RrjQmMUrsmpBPL3MMCUxmbEF3jf1HyVcUwYEowB1uE58Bdva4kWtBF8FWv",
  "key19": "5rqUPtWsjngpcQ3F2q3JYYNVhoitFaoPL1AwykdDaMwJDB6QujfSnQ9xiXe2Up8PeXPMXzQgkFt5hszrBLWbKUkh",
  "key20": "3VDd7rnMGVXoZauDcXy5JB2jCUqSgZdyDpKRKQrc9MfUKfJAXtTRGX3t5B6HXHbY5At4NwZ2wQRfJLuq2rhAoSFD",
  "key21": "Xy8oxQ6s8FnWgv9nqBrG9EC3VmZMJgqum3k7EvKjvnm1FAAQ85rAxy8vuNh9FHY7uEddg6XuE8ckrype8ek2o9i",
  "key22": "2ANY2WFzk5qp2kLVfEUzjLYUUNCGZ5cNRf311JfpfTp4sDxp9CDCTN2gZeSqJFijqQMct66Zetj574zBTXVASL6C",
  "key23": "3PF3wjgCwEE95HFuVsiaQE466ZYYcYCc5jRhjLP4VXB6wKuSngkiXXprgPomNnccTQoHF1RvMPx6wpTatWR3pqpF",
  "key24": "3mCN7SSvcxBZXnww7e8sNovYVJ9L6CHbD9BFUNVsWtqmhx9W9vFAvBscwxBEhdugZEXBDZ6fjj559DRv6DSLcB6s",
  "key25": "46dmyGJsoEXfrwXNXvnPU7dk83KvnxxmxoDhnGrMmBEZ8SMJ9ceRS9KFoLz1QZTpopL4rYuVV6ZVUxb1JKAPoQMn",
  "key26": "4EpPMAREBpaNwYByWKh8BnRQjYwG8pvBHfQYJX2ncxr4JPFQsaVpch6x6G28Yb5ssdHwpZYbXP4CyfLEAT5unK1q",
  "key27": "5cyfLSEZad8XPaLn3XgPBU3wocpFsyMjvUWZb77YCezmtZDBRNGjVofh8J8rAAz6ny45bdLANohAtXduy8PHQNNC",
  "key28": "baAr7c5MiFks7wWroxR7YaiY62CJHmPw1DvuoLnVxNVrYeTyT184ARLZv4zBQCHLnqtriwUb5kxq5miQVf87Amn",
  "key29": "67d4gR1zegsf8PLc6vMbjWcSEm7sMkpGLqeZ5fHtWBNHt38EzRHSBTyhMAPNi55t6nHCmUufHubzLskLTwCx1eco",
  "key30": "FapXVNsPm2LtUf15CMrp4vNwp6UwyGeNg8KBvemGiVmKeMFzxgXmvxKibbyatkbQjo1UUEAraBCZtfrBPGacBBz"
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
