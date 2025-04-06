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
    "43RSZaczoB79VR2uVhtU2RUL6oefE1E7TA31h68roY82mnp1fqQJyu11E1KzY441ZZFDGMiPdAMCgvFnhdh78pRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfx9bwuGPVwgxzDK8f2dvwGZxt7iJKbYF2QpSUjzVN57iCFDebRsGjNUfSyzFNipSzaGHfvd8F6D5uTo945Yb7u",
  "key1": "LUyQNFoUgveusWXFnh8C5TnQLSYoXrPXHoUWo29We7mrpUAXuCunzouZHBXx3J8Z5NrRenEbSjPhGnLo4WJUv8i",
  "key2": "5BUU83KpCQdFEF8YGfc6T7htBFkyPZzzw2EKPT9FKHMQZfU3EPKwrrudeYxuL8wsC2e7ie2zXS5C4bNpVSxd2ALX",
  "key3": "oLbPnhbLQxgnWNL9LTRP1jG7UMGHBC2WSLhVuUyzf49THmVQPkKAPxZniFYMbLfPqWgohYJNYbCsZ8tYWCsYznT",
  "key4": "3D4gLfWChRQtfYJYheqsrDFQvebYdnuPuuaishj2XbVhv3Jkvy2EM4NtFMJ3RGe1hDnB7tzZkZRYzrQNiRX8EzUr",
  "key5": "5GzWyWDC6s9ekdHJURBuBjVGch8oNjUJGdURXy5HQHv2TnMrXGvdQgBJcCzK1aEoUzW3Rh8pX6ze3k8WZXpk51H3",
  "key6": "48VK4NrcAtWJfmUn5WdWcb2JUrQSddX73LvKCdYiZ2bQa8nhXmkAcwXyBXoVimDZ4zBV9vGurZ6HBJy6cVqxNHMn",
  "key7": "2cnsmdAYBSUD6WitSFPG4vvoPWZM3GZXtuWcEfwsFzH9Mty3ZEBrmqHQ5PshAsttpySe9j3LSwAeHbcvgMHqZoZw",
  "key8": "51B5ZGnRNyDfgXVCLjZSKHGu2QDuf7oxT26cTPSANfCfPrXoSkapFZB11fzean1mkMtZFRqFsJertuqosQW7iB65",
  "key9": "5gmiX5XWoWtgS8278J92UBAkQP3GLL12eqZTfqqiThaz9TW6gHRYbZz6UdXRTtfGJS4gBnD974CZFNhw34vK1h26",
  "key10": "3sTWug7eysevZodP1ddj7pfS9tYRbM1mX7yo8QxLE9MzABFV3sczifXiJPND84JRNs9jPssFWCq76piMGgexnXge",
  "key11": "4iJdFmxH4r5111tJYccqmkCsfFN9yKA49gBxvss9C5YZhxcEeM8pShnhuJFssd6oCMLNBcmfLUdbZJpMG2RPbWyD",
  "key12": "5cZk6Wwx6uFVds5pAQzts9NuMKJ5m1pZbxqSeZA3m5sKKVndnNHe2nVNGnoUaHt2vUxFKLp5DgkAYmo1p5pwRc3U",
  "key13": "d32JMi9618QX7WuUHB89AAnsk1DKQyzVZmBndNWTpVaEyrfmSV3UiwzMMQbdyo7964wibU5FqUL7eNMAqGxrZb7",
  "key14": "3hEEN4hf986rgpJteVCXfVGcxJRXHqEHUmbNgWh621vGzLBPnZVXqyqMX5ZjND4cLbUUTgQcMRNb4nFUwx9TgsRa",
  "key15": "2YihWTNDJmgNXTRXkHsnXyrZ5gZnuNj31832BmGxT34RafNtjKm9pAwgjXsnZdJXvt5qMPjRV8xKJgsjWxLASXm6",
  "key16": "2ec2vQTXF9oggaYNxkuxVnLpYq8CzwTxYX5DdCNfDAqkZdmbigDTzShouHpq739QmoepukPckHJQyJdttrrWafzp",
  "key17": "5vkekqw4F92Fv58WRzFR8wBpEwvsuGBosmqgB49J9Xdsz9ihiqwxztGiaEs2Ht9KoUzo6ExHd2WK3o5ydwDEuWBY",
  "key18": "h2LzrEtcAF33LTX6WY9f1CdmBQUjh61UMLbUJw7WV1GqY1BtvbimLpkPps6cYDztmdhheLMJD1op5ojPhcDxNj5",
  "key19": "4JdDHzozqrp92h2GoVJ8JxyJg75DzjgJm86bnUTCSh2rm8hhdiJjWK5HVmN5iADLMvuAPqAf63nvKjSYPX2tFpn7",
  "key20": "4BeRVrZ8KnjP6wKHB11cZ92ns9VpygQRchCNuaTMdmzn6EkzMBL1e2YN15y3DK4RnH9FKNUDSRR5dC1nz2MPBZbM",
  "key21": "5PqetdxsseSP6NKwqJCk818M4QfpNGKmCKKMmWKRD2gkXoQxgsNcrhZ45bb8QPK5kt7eDQZTJSxmqt3fgFyERRzJ",
  "key22": "QxY1jQNqzC5hYvsXYnzDfUaBDHApZifhdxmteX1axExsWyaU1aLe3bFzvsbD3fhp9VozDd4mTZE2XmATL8fRphs",
  "key23": "4WXRtqqqFPW6jqLt6BFEy5req2FQe11UwigaijDLM19Y2kf9mCtrU89fgsShREQWnwSXaL4SYaB5YPGnNmRgffEJ",
  "key24": "3PPts3zQnQQncsULSVteZ4LPZLVPogbw1xqR8HybT2f7HBXnzGGb78287J1Q7Jmy63mZmFDv7yYa51e1ffCqwyfs",
  "key25": "3jYSwkJQNzMYZs5jjuC3cpnRsM5XbyhGkzKUqNVu3zkbcTCJu9JWD5oPG16nkZjEEN41giknh9jwmMZvz7vf9Bd1",
  "key26": "4NwPZVWb9PDrmHrLLQNmrVRzYDrGsHcTqPY6ESCLdDarg7FWg2JfCeH1rtjAzQHn4PNbPS8zB2wENyCCuQJcsdW5",
  "key27": "3ufJtDfvTgdeiDLXycSqNGEeFqPJUt1U5UXrZe4fLkJw1pwaVhsRLZuqrp8xF14SGH2acP9ww1D9PdsQHRrYbmbf",
  "key28": "2QQQhWshdJ14aGQivTUv6TVdzrSgAeBhzHA3mELQ5PQsrtH7m3YSCi8WbR7qRLsNVkDynBJ7AS7WYyLgyqU7gAKv",
  "key29": "58dRbsYRbmfrywb6k56ZMGgR1qnV2iioQ9AtF1KxCYVHus5i1x8hjP4kSCsDQFrJdkjDVSSrQZsKGuqSLejySxxw"
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
