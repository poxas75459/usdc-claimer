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
    "5eiYBHDPVnpp8jDUvJawkB3ed4pwAyaw2rd21umdUu93yE9JsDuC1Hb5doVfp4MgAYqdRyNUSd5Wps5oo85SCJMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNqycVtrG78WiWjWHRqzXK3eZCmU8QpEDL8EWUqtxESsEdcBXugf7QVdj3kM8egKZAjoMvBn1pqweHCm59XJjav",
  "key1": "35p621U9U7bwBf7oEQD6PnZWMPKvNAdGNncGfWVwCfXr9baCCJPL3yaUh83aZ3g22cEnXFwV7ET2eopYYmdMaurL",
  "key2": "4d7nNuqK1XExkBbmka9AbTPF6Lajm7rdYrUEov9W8kvr8BF57FH1GJRmmHViXrq4tmfA7hVfA1wzraKScFC3sFLB",
  "key3": "2wY9GRVFw7oFCgb1PGNw4NzQmVTTt3SGEfgrrPjH7nHFefVw1xhQ8Ewg6m41QR2yxekXAVFbnsRgUJxPgekwenSo",
  "key4": "wvETUSMVkJFH8QvtygDKKg71S8kcznaicDSkd8xVjisjq91HFEAqfkEZVTxtp5F22ZWUEVpdA144tWFnVZf78Wb",
  "key5": "2U9UH8N23LboiHdY3md53xegJUbZtPwGKRxGGiEazvUtzv3z2HRgidSqyJK4wMQ8YuVmsVzHb7ryZ4VQXXoMeooW",
  "key6": "51XY5WGnFdBnpRWqtR6pQuLU31qmK6wTJSeQZUCpfNMyHLB7DHpEsebcsHfZWpqsHnVxTfgiau7LB6Kb7GxArkhu",
  "key7": "4XzvPRomLNahKLRwF8maVfcLrrm6c4R2edEfQx5aTqnV2e8BzSidKkc2fdRrS5C9hahvPsfFBbCSAHxTWrgNX6Bt",
  "key8": "utNrJq2pQLYJzKHa2yKUJoGYM3V5Sc4Gg5Kozr26D8EQoX9bGrxM2tR6CHj62gLwGmW3mm3hgJoC3Siv3zSgEwC",
  "key9": "iUghS9eTKRwFXkFKNbqbca2qmxAtf7sAbZLwaqxzVjixDTbW2skB9kKoSMS2EVugMgKx5FZWNuiXoyNLdS3z3pg",
  "key10": "58YCJM1G8QQWbyavknMFusb4VBLAeGFXyoJmQ7uN9KqzM3qH47G3JLwFwYwEb4JtvyR131qT4qkJdcigRwPdbUMr",
  "key11": "5k4UkxJvJrSaW2PWRS4y5MKeXwhJRxB4QXLmG2MY8D98HpadwhQ3KLeZ6LAvxKYmKDSHb4zjoo7Gx1RHAzJRULac",
  "key12": "5LzNYSwW7HdyLYvkAWp2HW55F1qP8nhufTWJk3cTaFzpHHXxa9Yn9eWCr4tYGnB9LjA3CoxSDGyNrAHwKY37Kn6q",
  "key13": "5SbnRDfesx37SxBmnk461jGJ3PWupgMgEiSjvtUgKmyV7DuGmHhAAyPdUdXvi2isRDcJBWYeC83ZBBx4QkbDegmE",
  "key14": "49U3yTbwyVf35AkARiF1Xju72jN7xJTHZENZZ47nViAwBmx6xD9rL8DLHVXDeSJoi4cipAHU8iAR5ykCRTwzX3qM",
  "key15": "5Te1ExmKKfpEsvE5vS1u7nY1mzfL18MD8dnXaQeDuvB8xC7ZYtfP5ECk91GZpxgLp4XrcTyGaRQ3ddeTPD4nx8zJ",
  "key16": "4SUhsV8r9MLScZjap5pDpiTHLHTNaB5UiJW78GZU4d52zxkLz2LdX1XH3dtncLizvSu7X8u3Nyar39TniSt63y66",
  "key17": "33CYLSZTKwNqfvBuKPuXgPuVR4suGNRV2gpMZmEixGAqTcTnaz49kzG3PhNqsdRWBXs5iaHrd7cEVpMjCVeRhfWH",
  "key18": "BW64JoiVHTpsZ9v8r99dR4SS76n551K2NQKtXrCKF2wjkW1jc659dtNBsN6CvNRedUstYCT18YknHiAwEhgZcpT",
  "key19": "3Ger3PHp3h37wRMTZTGn2GMqQ6w19cqptMNkfQEY2uGd1nuN9Ep71he5LC3Vj8oMttb8YZzi82cQUeXKdkza2Uuy",
  "key20": "4fJ2LmfarKNi34qkEkWqhghosh6KC2oMzCUds8LU8a8mcyVAVzMt6MybxXrHzdacsP6BBxRgpqUXFc5394BTanHP",
  "key21": "2Ew975ryD3TMtqkYhCE8z3ey7arrQjttAV9cQrPRugjqFAJJ5KM2fJ4SeyZZTh4o6cJ1F6ka9itnjd63bMWEEqd7",
  "key22": "Xptn9UrUkCAdwygH9va3S8XvUVUoGRxXVP9MEvSAfvcGtE4DffSWuKdF3F9mUtgsB4T1L1vFEWVJd9MvtJ8yZ3R",
  "key23": "3wZfAuZ1MPQkMpYMChc54hjLDdJU6SDRitfKhsGNmz3LfRPRxT4jVar4ivK97QWoW7NkoeNA8dB2YxHnUzMTw5NK",
  "key24": "8Vg76DdengKawgwXit2xfFY5PbSx2VPGkNT8GLC38pMShfTQqwbqbq1xUDtgS6s5kuyW6BtTPtjncgT4CU2yDtD",
  "key25": "4cM3UZ84qLzP9866jsLFdEC2Mq5nm8YYJoTtW2HVkJ8CG7iucQTQt6GF1KXqmXBVgokpZVSkHYDUC9y36HZVuEKb"
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
