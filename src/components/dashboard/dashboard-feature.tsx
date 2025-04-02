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
    "4dyXiz59hgdcpUR83cBzpUXFnhjHEAScMmgTd9k87WExitUjGgYo7kB73ANBfs2KLuiQaenBKgEe8Ww3Gzt3cn9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLoGAmQxNZuhKKdXv1cKNJDMZvwhG8EsWj3sPjgCgkimM9Wiewvg3QkNsUV8Dicw7w8cvgdQvpnyxYbF9waKU77",
  "key1": "CEsW9CEGfo8iLLxSo3SrvjUtAmi3yX1JXHvwxyZuqe4uH1uSYxx3SJBCr1VwdQWahtdn9ogD2xiivR11VRo4USr",
  "key2": "4peygxmpNtfyJEBrkWCjbvbZ1V4gq3CgLYsSowpYXBiqzhRvg7PzyXd6CS4SMGrX5tJ47c7NrAh3jF43umcZ1KVR",
  "key3": "5ARM5FDu9fvwsLf5W72w6ZTamWyXvSzNdHKJcDbMSgxXckJkozc5RRKLZ3hhntEcHS9j15URxj9JAV1MM7JqdkyQ",
  "key4": "3ARDpKtjaFLfTTpYaQTUsFPSpyHZpLaTTwvn5uNU45Z9nTnokgTQo2cHwDApXwfsE9JRHzc5bFcn92VF9bqiYfKz",
  "key5": "5e1bCP57sQcRtgMsiKieRJr3fvWJi4s9RPH1DtzroqirJsykL3TXUFdBv3CxWNS7NmLmgJ3CQkmk1eVX8AwDz6oZ",
  "key6": "5VvAuGMkJoXb86WdX7V7YPHbt2GgGN1im8MsdZx4g1dRE9J9nZf9vzZgAuHGAQPMKGQQRcRDtt3GUTZ3tREWjv4S",
  "key7": "LHPC28cRwtgy96FbTHC3f4UgUVPyFbqNcVMh7iaFmz37rSE9gLBRqZYe6fHprHjvZETsHadccig6Yq1YBoRTZQi",
  "key8": "2MWxRXHRkBTJwHurURiftyorjuHVszcYdvbxD6RgKEE4Z8ofwbwBVKfeHcWbz87RXaktQZ4ATGhggL1shwmFn5oV",
  "key9": "4dk8XrFNShoYUjAJJTgbdiBREKXyCFdzmnkrPG5cYrh65xoWSp3Hwk7kUYakvP64joVodULceGkj64SCUjs768Rp",
  "key10": "5wVqzAMf1oL4H4isBrufRsLNbZtfoqKYmD5L41MUKWt5oLZ6zmJpgsq7PKNzGtTGELUYK7uD1gZ5QpemezfZMxz8",
  "key11": "E3Bf9FdKTsM5Cq2yCcPhyuEg9vTgDRasPRqDsJ1zCGqM1AkSXiuJZaQmgvv6DsrfTNsNC7QsM47brqC11A7M2bK",
  "key12": "4oU8XeBDqQs797Vzj3WgNBHv3N4QykZJguj8QPrAXqaLx2b7pedqubX37t7AdnGTsdDdbcqhMYfhjSqLSyey69sV",
  "key13": "2RsYVwN5qHFDgbb1X8xSRzpgSZbViAj6yMVNdY8h6DdS7ByxLMHxRzi4GV6T72PEbanrYSZ1HEsShqrij2t2Mfvk",
  "key14": "5TK43AnqUk7YERWpnVHgFVxHp5SQzZDvHjsPzWBaFwfiToDwZAmQ7ebvFRnw6RT9jVqHwuzeL3kjP4cnaVRkqRKv",
  "key15": "2eGgcvpLHcYTaGqkefVyTXHUiehGVgJ9bUaaBPcTUe28z8shEjN4ThtjkYHhk1tiEHvGqK49rBgXX3eTeDCLoW4V",
  "key16": "5SfTQeSTm5a2oxutTeg8SQ5udmxWyyBfphg9ZvnyimQFKHoG3wom8tC1XZMKQ8nZb8ti6QZDXBduoPX9d5fYyNu",
  "key17": "35ix88qcGhrNM1XoEww6j1x7QQtKuG1opDWBE6Mgm74jqPPt3PikJ38bWq1aaBsVR85k5UsSrG7qTsLcZP7cs69X",
  "key18": "2J2kUQUH7fVBsBMYFYTmJLUGwc7J2zaZpkbsT9u5kftyG8KuuqPywGTYDqEnXkw6tEchuztFthacNdmt5qA68JTB",
  "key19": "4MvouKN8NGhb4HZtU9xJBU5fJqiKJEPShd1mNnwhWh2YUhMKSQivTEw4yUF5P9FjDpYmCYdTkygCFqmsmkftXzZj",
  "key20": "4hn5DXeTk7birZzMuC4GYxX9XG6ZR572Su7Xp5QSLgx5m5n1XWxWR2kMaPnqjqVWmTj3XfMYbRRHPxzP9Ygb3acr",
  "key21": "2EME6yCSmsogSPkcRqrn5M4Yf8wftvce84DqFpP1QkiJZT4H7zuES8QxFFQh9DgnWvQzC9zjCwtNADoZTbKFNSnz",
  "key22": "2Km4KDCCt4DoqJcyPLZGMHF3ZzAjPL2XhXcAz3V1uEjM3a4by1km7qDPoTsGF2ZwVUakwdG4cuywruiCsxTWJ89n",
  "key23": "3yU2sfbQ4XgYJL1Qx5Dt3UitiqNeqbk6ZtfwFmvAS5QH48b2pvc9UHtx7AuwWZGCaAbCwy3GskgvxCAPMaQL2Q1V",
  "key24": "4AUeZryJbd7QRGm1my4nHMV1JWRdGXiJy4kiTMv6Q2p1rVR8NSe2fbR2N2jAenHxvKKqaLnmPopeRne6m7nf1JWW",
  "key25": "43smAroWhijjYuEd4dREQPUbN1DyB8gdPzHG89eU86sc1Wepne6eNKarwcwNvQb9EygCGhRd5iqAmz4EzKzEhzDC",
  "key26": "AMS4HydkJsDNQpbSeAXb8KS1CkrHaZVxPYgktErrWKDt4umF4hN86mxbt7Td274gxmoXUFUnj8esDttF8Hj2GUG",
  "key27": "5VKtgrKqfCtpSC5FrDXqYCHv34i273VxhvqXhJYGGYHqVzcohYdnWTmj5oF1FJrQ9ot9YP1GZD8DGQAztyXGeLnW",
  "key28": "3vZyGcrBEKJKG53QsLutAdxaXYE7DMMfd1Lif2uVVTJK4SbXupXCrVSZfBwZYu9Q3sAXWPdkLEMjeeUcs7PzTurA",
  "key29": "2fNYhhfmZFKH4tJnSS9XmuHE3MpvcTujjt9wijEx4MKP33kKjvXLDqVj7ffeK9PsWLPyHw95JHVtmuPSpEx7HUuC",
  "key30": "4nm8LQUuDiC385UyGTsZT6PueWeyPJ7x7tMK1h3Sm8r8c3AeHm8BEbmnbGQLZbkSGrMGAG4X7zGHmRrZxm2VZdrj",
  "key31": "5iVi96gbkRKLALP5bW6ChejUmM4BZLoMFfKfRH1z3ZB1diZBPudWQtWZZ9qD4bdMCJVw6Dpjypg4iwR4zVoaw5py",
  "key32": "4xk7trXJ2oFLRHZAF8cFDauYU9Eks16mmpzX4JEd2VX8YcpeECtFMyeC1wVps1PRF9tsCwVP77FrBRE6qU5aRzzj",
  "key33": "56ndfiHtcUZzYpUtaFnfxZjHvbnGeZ1bJTF9SAAM7bn7oUmAaeVmpB3ny3PiLi8EBZ9xZEjjYFj11fQhaTKZnVsF",
  "key34": "4vJMiE5ninBcHNzm6KoVW2KcT94qmBtrM8qzLMqufppTkxgVGDrfEwyf69XEp37S4pEqtoLxAhhSSmRohamSDdRA"
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
