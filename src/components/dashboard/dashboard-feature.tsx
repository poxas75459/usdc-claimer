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
    "2twkX8Lh3tiCHsCBQM8V39JRqTJtBMYVG7jm8cUqXj1eeUdsRwtsmMdyLZws7TvWWUGRwuxo7uP6bPPGk9rP9Sia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRoeRTSu5nVW7fnPbErX83Kex5aj3Fv2JgmFLVjgWr6GHvg8fX66eUSZdmkz49gnk9FbwaueMjQAscHYTsrRmuX",
  "key1": "3JcbjtxRaBpBGY2Tj78nNuy7WAqDq24neRtWVCkx8oB5QsfYtUJBU4FBFKwCKkgi1QYBGiivnZco15j8PZ7U93uT",
  "key2": "4H9BwEu6ZbhLdCoPP1JcjPREoLTXd7iHArQdD7HJU8VSLMawyJD3LdwdLq3jZKrtysHhMvk9UBtGoTgn9bgMHu2V",
  "key3": "4GgLzTCsTkdTtMMNLA3FdY3N5ggoDTWgLKivCrmdjraEdy5yY3K8UPo25Egf5688tk5X6EXz2UUqEYWNkG1D1w2J",
  "key4": "33RuVntUmJZJKoiUFKybec9MhQ9ZmJeamjCu19rpg8Daz7fJQKMwbpWoaASCmY3NSbdZzyoXfNwLc5fK9iJj6nHz",
  "key5": "4dwDjLoDeP7vTcMAkVQaEt3Ji9Hbq91JxQseNitn229kLFBYhCP57sZKcL3SpuRMMNuj9JAvfjgg59fnrdiofs8K",
  "key6": "5V7arAUG4esVoughY3q9a9x78BpgLW5eZngSAGexhruCayYH8CCA99AwgMCrUMRimjcTp59xkq8AY1txm4T9e5Qx",
  "key7": "5h2EXUeDbikefaDSLKyZL5nBq8MyLB7weXLHjx42ABxpALoXMuJMFK7Agakn2zVJXCpLnnedqXq6gbHo8qotyjAD",
  "key8": "5nkFi1BmP7UKKqxKN7yYKBmCxPVivJM7WdFYwsNAReFbLyy86djGTTLfNnEvstyGwvUtv3Fg8XChGso4mbaunJyX",
  "key9": "36oDCWmRVQSk1v5J8XL4JqsMCoCxtGQHjKJgRYUaTx7acvuApQfSuwzS787aovkAxVzbtPmUeYraLMzvNZ7dBQRJ",
  "key10": "5NX9ozkCZKEutaJk6S3Rw4gEPbW22885ueC3QjKcLUJtttWRi2EoRbhynxDQyXuJeJHkXFjEGyNHMivRcXQHEVP4",
  "key11": "2ZHj6quGeq9HPBvQPQ8Canq1dL2esvW6R5CHmuoaL18sWeMQ2HG3QnXHLsnpshgyZqksMopcNxLQiXjrb19cb4Nf",
  "key12": "4rEUAAAwQytihqwPF2yYfkdbiZ6tLgs9oRMfQMEAyCqepfr3u6m2y2gB29Q7gDq33aB1ByULXL9LPhFMy6At1jgd",
  "key13": "4ihjrV7wfXTJcV8FcsyGkzymSLMBL8NYgX9bRQECWs5cJ8Ak4nHgSnKCgy9kqydbETCGZPAbWNJLGAnmme8rwoMK",
  "key14": "2m8co45sV4yiRxe8QohmGSHQ57e2CgQTLSq3MmMgPBgoqpMNr6jK9cHggsaB4TpE6b2kUCZT8FkjDorQ8W369cCM",
  "key15": "JqzXYCMJ52HZFpL9SvABnPsSECU6u1Fhwxb9xbnVeXgiGs3DAY24VDFYDBaGFfRyLKhux98G37wfoY976PduEmv",
  "key16": "4dVSzA8o4VQQGdNzkYw9dEnnkW1ArBVtexswLXdExfuCBfhzmb2pr5TCjBD21NP4VcdwKX1kzRCMLLPrtK9F8zuM",
  "key17": "4SVHg7HT41dDgJqTwenkTJn7XiwaDCEPcueGg9CzDKvwdn7YrzpdyK5cShe5R4DssyBwRMuQYwqvZjB4e9NaitY3",
  "key18": "4DEg4VcCX9XmDV6ZLL4T3ymcQXtTGWC65EZKHLRY7geAgZKa2qACBD5HQ61kkiFfH39xvc3SUrgXYcaCxBa3z4et",
  "key19": "5nMqDNPWcMjTtXmfeTETVwan5TPv5Tnqkvb3WEQugwjSBcAgzJky6Mv6BiHKSjEfhZ2cMnScdbtYJT7egkjbh6tG",
  "key20": "4SxNyPCmZk3tmJtwBPUu2nHUsnQdM5bjHANWnVpdq5KMftpFW3etqakzDXJWPowzk6JH5HhejGhADvPhADBPPb8T",
  "key21": "5sqp97ZREQ7mNkgAZe9uGcTdxgetkiF5nybMyaWE8wAZbz8tDez9CA4bUquiAcUxgxi8mXeVv32MfaiUabgS5jEs",
  "key22": "3DQ7SrPG7PwQaHzyDXt1cCF98gjFTENQo4WxbELty1sNvqXxaU288XEBnNTYUpiryMnzuPEdWQ4sYE9zpkhjvpyY",
  "key23": "7EXTB1NLjasbnNEsGbuXZsfMKBpwuypCwHD168hpzEuQ5LFkVYfxmp6Rfr7tCMFo32hJeYckLco4jCZoiMVPM5s",
  "key24": "3Jpe3ScNVvbxxic3uwqydSoWhAV8Gzrp7oEiQ4M1ZJVaLhGTw8Qe4qXFoH1waYEN6QEvFetKu45MDJgDgm4uv4XA",
  "key25": "5cgjoU8t3BAtd52kPT8Et7ZjWnJh5e1KzupUSgkHaJq2GQMRMMZFKdYr2Ws14Zyp6d8RzSyQMAorhE4QNbTKju7F",
  "key26": "5iq3CsDB51s1vnUMt7gpE3nKjVkeuTMb98fCdyyfxTGqjTGB5ePmtjEgFtdDQNfXdSYoCDRVum2gq8Dia7EBDmrr",
  "key27": "tbLNUibCe5UpZ9LFBStsmVbDVhKiYwBHoZs4KdhHVHmF1oiw5rgNXfVW2Fnzwrybk7ckMM8HTWkmoW5WWx1j5sj",
  "key28": "ayvaKtCLGg6QTsDFNCeXTvyCLWDgvnZTxvrsqskEpLUSnzwBatgBKThTKLJkBH2o9XsqjgwXveXeTT5ZxhTGJRa",
  "key29": "4xBV9S9cELHP6smhFer37gLFK6xX17ywSP6rcmmxhDhM9JzXyrHRnGfQPHRLrhadfXdvgcgb8tWUGbHRCHCHrfFe",
  "key30": "a5pjHfyGEm1By91rP2A452GkzzfwfbyBCXPor67X3m3A81jpMx85JsRVxrLGCViuuMG3Y78j3mjfqv3GEa85tJB"
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
