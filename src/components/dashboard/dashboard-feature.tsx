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
    "5noQQoB2c5J2jGpoV3pkABangF8SzJfjK843YfCxKQFuR6RHwUSwrc1ax4SWnmnSuRDho5tqGGKssERvoQELs9db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQt2VEiwQbfW2e6fGsr7mgxjufKLNftD4c9F8nxb7YnSXHjLVe6ibGhq8C7sMt81Mwm4DENKrZVWSCFksppdKwb",
  "key1": "521GGxA8A4RbaBzfg8Hog7zn2rgNntN6cpVZaTRiLwK49TuX8egSWJRb3SKZaXsDia7DgybLaicVHNoBYbdd5o5d",
  "key2": "3SwunnjK2ZPYcVNK5JLevh1tVwpDbbvhVytbk5WMxwZvXJ293HCRmHU8hQ9JHTUCwmYFB31EcrBtXXsKuq8E9eM",
  "key3": "5T9J1U8WUFe9m5Lh99VpmujH7JYAt1ZNzjPyr3efWVTZjfcQyE6HGfWaQGmpigBndkozYBYyn521ZsLk9sjxdixM",
  "key4": "3yapVGhQ1TASrxKKdwgoGAvtMWUNDKdM3396fGS31N7BH5BJpRWuLT1qYtYGbcbYjxonNzUD5kzfmmq9huAk7wrS",
  "key5": "4H4N1EoTwygnKQcY4Hn17ipdN7aB6y5gVNGouRwqcF7L6MXpUjrzg1oac47h3Ef3N7hzPrxzbUXY7LxHgXbf1w2E",
  "key6": "5PWyecDuUGEzKjCCgk9RNmx7TGNt5W7QyRN2jeG843po5W2LNV9wgnUUA7TwyUAbAh5gYZyKJfnJ67p9SLzq6er3",
  "key7": "5yiFzBNxA1L94xMGjSM4ZSnMDWcGAj6uBkZATsqZiJQSJQaUeikcWcRhmG16tJa638FESJYDgXaS64MwxLCfRzdc",
  "key8": "3a45zheTg8Ve8eogvFecMhrtMAP8FWhJcKYurJqatMQCFYHrqjXok4GEnnCuUqhdsXut1LikuhzkjUcGc8JFw9KD",
  "key9": "2pyrkdN9ppBbtKGQsWep6UZbpKzhXjtzYn5hcqSAMZjjJLTYVWDU1pq5pe95t4L9T7QhZ4TJUyHCxujtsR12Zdi",
  "key10": "2WhVFogAW6XJmew9U7iic3oTCgkHKvfY3HV2kBASh2kQUdQkqCHo9YG1cY7NQsDFhkoZkzdy6VqfvRBZAG549RAq",
  "key11": "7yJsnuuodBQcf2v4gqucrc2BMDB1kXLyysRPQwmeF2LAjYT78nviisYWEyvK1eocFNBC7QFFkAPqM6ZUHTZRrTt",
  "key12": "UAW9vxMB5JgBjzEPXx3knjrhGKkUxJuiJ9Vr7LzX5ECTNS2k4Cg4YoKPHAKxv5ekoDhjLvZn6CGwRMDm9STQE3N",
  "key13": "2MrFraD5zVDsCktg46HzCcD2cQ8GgbMmvzkALA4DSNXFtEZ2VNLh5dvHyGVFFX9zTr9RCzk6E7WTZmZwekYs4Yih",
  "key14": "62NZ9f6RsFoPRC3HjgckkpNSoN4TazvVXUGeXbRNwj8Tz4C3D9erY1pLz2Ce2qA3Zbr3JgSSNavbwyB1YqKRXwCa",
  "key15": "2RoNWBTfrJVFxpJWvf5F1UGJTwRc3hL4HPvAFFQiZg6tMHMERYN2v5rKcsCdNzhPybL8yu6QMPwhbfiix69dBgs3",
  "key16": "53AkCF89RFTKP1zVevQvLx6nVYdbwH94MpuayorfGiiojzob8mY2jdhsuxpY5L9dnQ6xSwk3p5UW9pqS8osfF5tc",
  "key17": "gCwVKNc5nyij7xSryuSiW5Mr96hC2avvBNs3j6jwWzbRNtMSDcq8RA8RTxWZh9xpfyFs7tyoUmwBJsniY5TVpvo",
  "key18": "KE4p5LGX1CwNwWSYefriJnuF1pw31KaXWozCowCtdudTok3qMSsohMYTg5Tg3XaeVkmjh4fjGKE7EA3tNpxaHhT",
  "key19": "jayktM8mR5dJScFK3rQ6E8r6RGHB3uqP5k2P72WBUoVjoZ8Kg5oR3nEA3tSJ14tWDwsjAojMWZ6JmGPhLbb2gK6",
  "key20": "23ntwWovxjkoMwZXh7ygBrxxTXNqMQkHYRMhZrXmqctcSH1ay4koxHwbpbWW8rojq8mF69JE8bQwgwPW624SnP6z",
  "key21": "2AwSbViEj4GmejW4VtnDtMQWRsJnTnJ9KB7zjDBiNVvaTuavCrcUmu8tHYJTkR2gBmb6nRPaHg454a5o1ip79Wkg",
  "key22": "2tDMUA6MTYDWLr8ysAk8EVNpFRTGCnqoLPnT9r1MCr5JXHzdAyQmwLDYLjAT6bXXS8Qx84iXtNUpYCgiKjRHXRVR",
  "key23": "KyyZphaNNGNRpuidn11aSKj8q58e2yKtcuH7LCht8F5srPyEsv1vuvyphpZtE61sRcHaDz5jkHaJQncvEfoL9VP",
  "key24": "2Qrjb5AJyXEpuK6mkRMibuvn5JVZBHC6EGthwxR6UFHsynxg4wEraAYeNArwky8zWWoDcyGZRY3kyUVJm9PVwoPA"
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
