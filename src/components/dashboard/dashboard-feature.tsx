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
    "5ATkDknwiAyWU9tRTdTaUhhga7j4nmAqJtEpo8Mg7bZkiTtNM6JrsQWsV6nWapX3UbyeoEMgmX67J8dDqNJMvAFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAhAPHhh4A5Y83WAmzrfFY2zg3HvY8A354dqydQZj97DfeEVycSRYBEU2we9BKDJXtzHsjFUY55Xygyx6prLM5C",
  "key1": "44Ai6NcuAtr8rRtWDsWbMSviJ7CSPUU2ZTJ1jCev7oTxCKAkC8GTg1xGCVW2pD4XBdua8fn7XJqKjwzXd4zvpkmo",
  "key2": "5jsr3riHLGVdxroCzrS6zguNgYmbjxQvWwoPRP5ggY12GW1YpmMXC4rAtjHoGi9ZWpxsXPA3EB8n4WGouQ9gNj9a",
  "key3": "42AC43vnXnxK9tw6mdq35y8ioCWfpCRqNtvF4bYjLbKfFWDBSYTrozhQj7Qp7ENtRbo79TJjKGPffqawEzg9xpBv",
  "key4": "2zQfmUQJhe5UQNaDt9DUwhWLHdsmDXegdwBwEUiLUtfcBFpJhsWiRNRmB2eAB4uxEi3q6jPWUCVL5PRsiAD88y8z",
  "key5": "5TddmV6HowRbKtviUbcqsPv65sD2YadskVBDkVxFBC3FRW3ZLxkEYFeieiEeZFwUanTjAuhoeBkNNhjKzLo4vsuF",
  "key6": "5fTAkhRzDbVhjmvJLsv5ccqJhhHnr8hv25mHdPDsx414tXacrHSVGchfCdVURDx4mxZ1QEao7YSKfFsQXjkCjB6m",
  "key7": "akHykbXzaUghAx4fnhNEunY6LzSm6d2G9KUnHBFZgMefkMga6yDT5RrN81KKx4f4LFW5hJHRjcA64ADcHdY6sEZ",
  "key8": "4L4ZZCuf9YRWhxRUGX2Q4P5qggzaCtybNJ846nnMHj6XWxiqpKPjs6WPsghyeMMEMTd7kGxxGoEmbUmtn2D6n2D3",
  "key9": "4BbMqyuzag9uJkDDVJ8dxBwCqJPmYubENo8e2ZxTBdzStzjarfF1B5v1zd7CZZdpzTCWn9aSFKrnEb3Yks8ZW9iX",
  "key10": "XVPEV66gCuzEQFeyLr5ohw2qX3StjiCjbsiGpHVKoaqBLfVTCEcZ1fSzkmF3fB5NWpbUzSdh3uezYKD5D1eGdHY",
  "key11": "2EsDRqk6YXneLw3YusvKhFkoWQDojVJdswgmsnUygUwY3HhUkKgBHDeoQfQBP2VR5FiSfHgRy9ySeSjSo79Q2pif",
  "key12": "56wyhdDLQ5Zenq9rAfrmWYaqaNgeFwk8NkpZaqmAXz4yacp6FwhJWow36HDuvJ2tVxP6gd3WZtKmpQnJWD3gCXVQ",
  "key13": "4x3LsPoa9WGUYf9ATqaD1H3MzqLFAxoFtL5qiMtDkt4KdwXMieZXhUtdmGFgmQUzga17bmAmxhswgmSq3bcPEREQ",
  "key14": "2c3RLJymB1txdmY2asuwSdvcWgeK4xkcCd2EJ9yugqXhuJyuZF3WqxMMp9yP55jJ8HE5fvDA15DsF4RsdcqRY6Ni",
  "key15": "5pcDo1JBkYSjumCYPxH8duPq45t5YExtwea2TjEi9RApmafcPr7pte4Qb5Wmd75DBTnUUd1vWnLkoFKSmLqXPUvJ",
  "key16": "22hBJnpQvkCAeZZReWMs1YGKhPu24cbX2ro1WpUwRQmG753HmwKsuRfDLpd6NZ9U77RAYXmufJBH9QXoTdzdpHqY",
  "key17": "3jK1GuMp6NWx2tDxa4qaU9YpLQuVF15b2mNa1cL9ZBtair3hzXTnLvBa4BxYv3hKFkTAw8BnatNGJoNyn9taHE8K",
  "key18": "27TmFLFjDpXRAy1JGZ4HbdpDWGtNd8VjKYTYCzmyG9Bf9hXMKK7Ku8yrLmPSNHgscQeDbgKC7T8vT5UEBHzm76Jb",
  "key19": "4UhVu7qFB8U8GAd5Fdfpi8yqr3FYX7oWrtuwdGpcTTCjZDXHTP9HU1VPXzfDiW1DuD4s7gLKuKL4LawvDsvjGeKm",
  "key20": "3Eor4qhKrEMNprEtpmFdgQmMy8KUACzaV6YRdFLVpHMhEwcNPB9qi7mb7yALbw3AxQgt128spzvmXf7mqefPkGcX",
  "key21": "CFBKHW5f1Eo3aieACMH3unSp37UwGdQ6PuQPe1EFYGocRyakzcis5oYg2AnMZPUtegUTYgGjid48Qn1FhE4mss6",
  "key22": "5N9Fa9VDAHGmrVLBkZCN63rNzxguYrJdgMvAxsezDXuRVLV71bRU4mSPrcKjDj4mrTkbMbmX9tSypoDCLqKS4pwm",
  "key23": "2qRvJQ2kZBnSDJaxnEbziZ298PgH2gEPjcEgD4HR2BhaNPtDF5Q3f8TJVppnvQoqXMG3RauUgq7Lk1md1sWb1Df4",
  "key24": "wvjdNxYQfFt2hDHtHaDUT6aZb5kW73gQptsJkpnTUD3GtJpFaxd3LoCFbJorbCJUPciuzUMPHuaBpAewhcutsfX",
  "key25": "N3nauRhNHKVv1TRkvPnVhnFKwR4fFW2AAHffbqZjwLxfTTNK8axN7HSa9SNY49mtn5iRfhcmyukkidErA48iETu",
  "key26": "67QHK2C4BZ1jJfYd8sVkeH8gArA6JJDhAkCc8FVZdnFMEfpmJ11QGyxZ4zXQJxU1h3c6WDjRZcs8iyoCAUfinaM9",
  "key27": "2xtPSV3Htk7k1R4NxsJKFXTggkKmFoCLeeaXDuEqpGg5D5w5K4XVGWxLHBJNbzitph7uBNAiB6Awb4XsnFCXQuPm",
  "key28": "3CNztjN19YNEgazZB5xwhWzFobJZwKfUu2xhsvpZkHw8uShfYh3DXa811WrWYCkUms64YyrodWBTdu8CtsV7dSkV",
  "key29": "3H17jTnKtU3YS2vuDNy9XR5M4jTLmzkYsjEi6obxHa2cEsEYRsHP3EM4MMSq9WW8TeQpSxyscEUUuYvqA4H7LHpH",
  "key30": "4n9btZi7mSwbqMVTMe5FcwAgd1863qNTVsbFTCcTJgKvgBHvmdWvFeucZEDJt3kiHQEMSHRmza52L9wh2GpLir1X",
  "key31": "2iWyLpKo6E33PWj8rp6YD9rCqJtYbRMYdBsnjMHHtoHHAW4qM59RT28YuAqaBdJtLadf7R53eJuqvi2fBw65LDLy",
  "key32": "2EYERFSw7qmoj1jrUDF2ETV9y2HMphYfQpjSLLDSx45xZdoi5m5JRfVCrAehDG6Z9qdgGihRNDyWBDhj8mWjnjyB",
  "key33": "2sY3wG2pgr3BwdLRzqu1Ua1HeK7Z7BjFvMdbk5HLWe1VTU1z3DCm5yiJ71UZSyrSeQ1h2jQV6GLs7K8xLfJ6Yy8q",
  "key34": "4LTouzWx6quZUz1NWtjn16ktXSDzkDu6UT15KShEFE6Q5D75oXU8v3aDJiYMwbmjthY9GLPz8TYMBeziH8MJpwxp",
  "key35": "5K8rhn17AjkRLFbgHGnDGAJRt7KcyVu1mvDdQRcV4XXw4Cb91s9AN9ns9zEvDBXKjLPb6EhwijKADrWuhHKmSJJn",
  "key36": "3XqUhwD2k9sQcTm99F9WxH6tERpdSVNK4XkhswT6wxSnNqkQ3M1cB4DJ29ihAoiW1Fp7AtDXEWud4Q7U9HDk8FAx",
  "key37": "5sfuJgBEMs6RTsJEnmMwCuzVS11t2J11kGKaHhy5Dfs5wmrwfHmmPxqHWTLAVqWqQXJhgYkxhah3wjEEvpeYERqq",
  "key38": "4Z7o2EGFcCpqqkT7JGc5sRWQn1Ct2qh4zZukJuD9PVAVjHZVNLBcZv4cBo1VhsTC7U8o2Zenrq3K7X4sSqsdhWXP"
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
