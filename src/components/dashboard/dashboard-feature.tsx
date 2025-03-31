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
    "4yQobFepdQFRwP6xVUjNeRRLTCzwRNV9kzTjjrEWWGmDRuJVyfhbW6pezWCfQDke1wrNfaikXfJDQRqLWz3pm3kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJs7aYtuQrDLH63QGkGd2cSkiqAwtYQ62vzjWqnGpLUKiMr7TFXUbzKmnsiPTC6FayXeFp1kmnx1eivkxRNGT5x",
  "key1": "3w8xhiAsipUC1metDjfkgX9UCAERiJkFZJrb7ib6AY1pvus6w1PwQP4mFtseBEtLNozJmKz8QsVPGG77nE2eFk6z",
  "key2": "2PEhfutfHCaFHUkLJzeLWQdSRJqjNF9GMRy22vqvuTgHjaDuJADvLmbiRegnrSXPNLpoJtJbvCc5RZeATHumkNZc",
  "key3": "4LThDSN3YnN8Qib3MV4D3mNjs9oyURQj8n1m8Mfx8YgXg9jioourjYTByQ8zqXyPhPdAvS6z3nN7D7kHsUuX5f1R",
  "key4": "4f63MDd8CpN7pPUJVFm7fy5rjk1eCQBTu6vTswMyC8dx1EsMVkoxWmExQ5VY8T6ZC58FvZtkXtB8SJNrEQh6rRMg",
  "key5": "j5fQcQAUQvFhdAQoHg1v1xLPzDWEX8BSMidN34ifdZ6sdtoSgGoL3TZ2GxNuBZMAQu1VAW5CEsfmRAQ14vyw7u9",
  "key6": "414ALeQs4oWL1kZVKMDMpmvfxvF3rZTisvNwJzXszwpFULMFCvyWVSobd1ydkxPDTGoXYopD5ZFpG7pei5ceLheu",
  "key7": "2QLgBdeLSZ94EQ9ktrXWLrkMJzNZTeZGSdnEFVingQVYKSxt5DHeQcWGrkLjnP5XQFVVL46sjhmcHhdWKhjzLeTU",
  "key8": "2h4e9HLkHbF56DBUw1HjJu5FXgty8zSRxpATYpZXyrMVSit9XfHLMAaKSZe4mJg4qptCrzuWHkQXQusyC8wuj9m1",
  "key9": "4kYQuVzTrK4Fijq4bWKjCZQrEiJLqwxARLFXAyGeduf1vT78FbqCGSGAyK4eMrYBTXARgp77x1ZammowpVycHjHf",
  "key10": "49VLKdyqNHHU61ynUjNR1vPbtwJSGstyJCeoePMh7nBg5eB5bmTGgNuhfSANS9zNm1hMqnjdBVr5sZMqVP9VFein",
  "key11": "5utWFdgChXF1zYU13vzPNYWrqvZFi5HuPkG6tqRrAKeP92e1AxupAsHZHma8HBsPdiJ8JUjafyGbSqU4f1P9EsUq",
  "key12": "56juidX7r6MiZWUg164y42ZzmvLiptdjeSMChhUuNgqw1v1Vio5tsJyAJzjzHmb2jsKu5fS6A2ccNG2qXhy29ADX",
  "key13": "2c7XiG8boc4eCXeLfEPsv3DJH8ZXq2dQosPQKAratbPmQaC1HEYKLuuQUR1hWjZQvedNmSntyyQDipAg9DDU3Msf",
  "key14": "2B114yaYpVfPxiu3Z7DzzyJ1RhXX6wrH2eYA2s1vbeaMtZq5VCwFWtk5K3sENTxTCabFv1ZNA759G3FCrHgQPcmV",
  "key15": "4idaV8ucKmPc4u6xXWtUhg7EAjwriGtwo9oof5bHUCZZzkWbcfA5TnGSehq2LEkmphktfkm5dNZK9oRWp7pPvpQZ",
  "key16": "5VLfZ1HRV7ak53CCg4DHEvPy5dzUjoeP92yxigHiJ8c9TLGJxXdmb8AKXZdP9E6wArEYpy7Wz2FXtPoEnjaofddM",
  "key17": "63JrM4JafKQJJapVTQiwxfku83hZxV6rAMR8AKirMHs7xrAw7R8GWKyrTLCzAbE8EQ7CEPgjy3cWJvkZN85rLrC8",
  "key18": "2iYXqqgkC6jdo3kLD3qSdjdJcawpzgohZQgYsvhTkr7UQBdBFgeyfVKQDaVXEoXD1GqfzUCQet2E269q6VygKwS8",
  "key19": "81MwoBt8Mb17pHzEiBTBeT7f987t5PXUkS8QPSVpnXqGQgrP3dGUD4dchwiui3T7ymBDGsA3kkKdSJY3H5916hq",
  "key20": "4PY6Gz2BaeyUJFKLyE89v7K8CbowV7eW5h8g8rMtCbrBQpYzCqXvCUPLY1M2o1mAS5eXSvS1RNoFYgVUjacUa2UZ",
  "key21": "5VGfexRgzRFMQuKD1f9RfGB5WTGDVt4A4tarTmNxiDHdNAkaZVekcspdafBNJFYrMQW2MUWv4qhZBdZEX3ttg57C",
  "key22": "3uUgmaTPMZrJhmY78NJS1SAAkmdB374DmPLMESfJyNoRVwirfHwquxR4PXGhZFUeztSn7wkctzha9feZtEgNzy7h",
  "key23": "3Ec7egYaMgiaTJRaupxhWqjGC7sQRHRdHa1bo2ksGQGsYKkF8zVS6J8B6wpf1w8L98YwzKjTn4mL89cTZh3qdFrt",
  "key24": "2R99DGzBDAsagCBue4uYsBXeeTh2Hz82K5oCi7EFmPj4W82KA6P4itUXYMPUng1YjeU6dXDEx3r6kwvGTvmNZGqq",
  "key25": "5dWuqFzBvUMPfkxWShEh4gjYYxioGEne5TixKLpjtJLEnJXACLGqVsHovRyGg77YPWM7yMC4vDzNZXSK13w8kvow",
  "key26": "CK3yZkQrPzGayU4i4QkM5HNuz9vKR1v6f5aC9T5Sh8Hc7QG3i5EAkYMgw25p1HwbuwpMbGPL1PKxPq58stgTAGN",
  "key27": "2zSowLuzDoQxWHKkC5Usge4xWcwTerqLK6FTe7kNn4VMcQuv9cVtuZztgWSiQaRWY26q6qxFC4YqgofZdK5XpvkX",
  "key28": "4CPCWAis9RV8y3q6szpCUTmeHVmeoN8WfVPSZ2SqGKVV2cn29d9jkQBygaWahLgVJquamWAFjfah2Nomyf6GK7ye",
  "key29": "4YozTPca25VcdAdg7oGDNkCNAHbTW9K9HVYtQPPWeZcq1h3NEDtLnreS1WGy38Txcbp2vhUvVcrhJBqRdsjg7GZQ",
  "key30": "51UppZ6DKtbbdLceaFHEVS6Fe1n43EAJgH9zKJQRmQjBz7JiencskTtyUFzyRFZHczpniDAHoydkWf6wP7gTQMCS",
  "key31": "2RcUptEQpguKSkxPQeFAGtWxxnFxqeX6HdVGhSAuazqn7Sen9HuuZvGysHPbXjkVaTdJTGEx8CAAuZdZj2KXy3gM",
  "key32": "2ibJcGV9btmkz7AMJKgNWERbLLM8VeXiZB86WZGfXHmr3Lj495QN6vSCfaYF7KicFpWREd2zD2Sth3NCiXbwXB9k"
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
