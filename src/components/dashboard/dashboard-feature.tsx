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
    "eHZ68CsJmk85ekTjKE18skb8BJ4ozML9oqD1uP1jJTYahizgKXxvCD2epncw84nxehE4HeWu3ARGNpuYp6mcrD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoWr9PLhWvYwVZJY1HA5HysyRNfw2yyFDDNRTj1hJLLoksYFwPuTNhfpRnMuPRkawMJdynmNXQiuxWs5ervBYy2",
  "key1": "49zZFVunWxaPFCMqfw8CdSEuTDKT5aRu5MoGqazN148Bu1JZpB8xsBicHwNBwXPsxdbbnwo296AtsWkfiqX7z69A",
  "key2": "3fMqcbQDp5wTawBVsQfvR9SudGfZ2A3ahKLZ2ZziBH4CoipMS4EaBp6i7bNCsUVMqnnUHg7E4Uu41XujCmdzye3Q",
  "key3": "5FZmo1SiGdjBVJXmbAGNBn41qqQDYRTiBgk3ZgXcRWKEdXbp9j5goxcphb2mqdNmXF3eRh13PtJbf2CsoL4W6LFa",
  "key4": "2BjnLPCmGA8tGSqMaEjkbAJTQ3ThecSrYPb6H1jFxzSBMBBT7ccCUpk8KfkT5M1qrpZDr3WtaHvyLZxbsoHLzApe",
  "key5": "3M1PnwLZDFKV5M9TK7W63jgBYat38Qt3PYx486CQkK712iExXCztKrGvphwURKZdvuAv23dgiTKzFNf2xgzCf3JG",
  "key6": "5AL17EhFK5unsxBJh11rW6tiYiSrU1j8QCbi8mJJRXhsWwV99bTa91XoYcNa6TYqLe28mnKH1nVSAEi1W6rAPEYp",
  "key7": "4urfztxzVaExjpWKenrthiJ3h5MZ8LVnWTAHQkwRxrLrSnC5NiaMdYokLe6fesHsZdKAkMTn2TGthUMDhDniZP1b",
  "key8": "4pzX2PzwVXRvBJziUH7Zy2SSCwHUt91hynFvB6VNC4qRqQUTYyxsm2Y6Urbmx2cdSSDRS9S1GDa69pM1A7f1BLrY",
  "key9": "2QHQnnAUdQsJLMj8BRXxtFP1GjFGHBSk7U78NzktQingQ11omJzLaSiBDhkQoMn7jBjWbqsw4S2QVMywDo7J65Ri",
  "key10": "2CLrb8gjoeSqrWwwdafyFkSrh3do49nngk6GMBnupScxyPbzP3RQKPFqxWrpxXUWVQjZG39cfZ2upcjiUHYH4mqS",
  "key11": "XEoxpQV1wYEB9wVLnZHXHVr47y5DF56d5kz6AxRJqXV71peJsULGsH7MGjfGMZLevESVbLh3tuzVGkT3WuRu7jv",
  "key12": "4SE1GssaEiDYeLdDXRnBBJHXgPgpkhjGa5t8r3VsSn8SrWM4BtAzWwvhajZ6L347jTHzwffag4CNPinBszCLYEfS",
  "key13": "n47zaWND9P2EW6efMMVyfqbYUNJ8MM4zBMHnCnVvXt2BXHp63Czg8KaeBNCsjzZzXwNGMNTe8iWoNEkFLb5uksW",
  "key14": "2uteSdGjcmW8JqY34jyy3bRCpvJPXgk4VG4Hm9v1AAANcbGjskiRYjJETwN7ayJ6TtpoUZoZ2uzPJcvtv4jkFR5W",
  "key15": "622f8rCgT3Uq5g8vYRsUD6yWiKEaAyqyZKmuPBEv3U8poaBYYnysS4XBCbx1e2rgGVLa3h7CGEiLp9zFNCAWDnqz",
  "key16": "5h1eoYu3H4AXv8hbmkCYTbwfcLvVj2o7u7abw8J3ehdmZB3opeCJqruYpRhC6ZCBWvGBaD3PpqobaxD8SvJue14x",
  "key17": "2wtpkHoRmBVG4yxurpumw8xEQfdP8mHi7SzwM2CiTWXBAZYywQF3kzHvHog71JuuqNub2wzAqsmbgFW1L3AfURmU",
  "key18": "hP3Tv5jSdFstMpXskgSCYhEjNyLkFwFhLzN85atdt4AxxqKbRiTG3uf2rZM9sCmuB5VXFbZYWBfYEaHzSV3ptLt",
  "key19": "42r1bnLUmQ7mRtYvuKdtfSZVwdwPQ15EpBi13L13S1MVmufiMM8n5XQqpNu7ynqHaCLSCaTZMSbV9YbwhiJ9xw6j",
  "key20": "5VeD5dLpRDhXdCQFzZ86RFWX2zJ1DohGWhp4JG65N3vkGb57sg8q4M8HPso5MPnLBSmY4AavUuii6R8SZJgASKEm",
  "key21": "52m3fCALNS3HE4yNsNsc8C8L5rpGdrUQqCHZsrEcPgADWpzVvMWrjwZmwm19mgSVpPwd9v84qyLCRDV91ozmJrTB",
  "key22": "2qy6HZ3sRqcjnkKDanqASa2dXXeMfugLPkBzNoVPiNpBjCS2N5DNcup9QApAzu2RZp6ykkgkq7J7EGx1zVHohLB7",
  "key23": "2LoYZpveZ4vSPPyZ3XuhhPmGLfMpifSsjWQMCUQ7SstMkn7StfND8DMQPc11jDCQ2X7CVaKXQexdxkTZYYQkJqWC",
  "key24": "3UJbiE4xY3bvauLVRCaXrbEbbkeJhw5vCaaHK9AWCgWUwXwuNacwQnt8USUd2tvBdjZs1WMKsv6jMAhUnMNNak2e",
  "key25": "5W418KY4cefqV6wQNWRfCBtKP1mNXzB71MW5LdZhaNAY6Vt2ABYUJN3c52eZnJ6wkMqs4AeDTKaH5FuPbTFf1o4q",
  "key26": "3rnKMJAF2Vp3da7WKDubPawB9e3BwnKPmpjkEJfjRDAmg3FLPNUWaRHMSdGzTBBHgfRCxkzKHUjvBBoJEPRjag7d",
  "key27": "ja62M6Ni2rk6fqqqaGE4yaDLqWGqHJDQwaqHyrLJ32YdLQsgqPQFUkqrgm9LngfR5RiEUjxUp3DA1t9H5anVhp5",
  "key28": "3ce53pRzK5YQ6dfyP2NNhnBoBs5aV1fhQ5fV97RMj1ewXJ3vEscoT1dAVpAoxbL4XDF4KgJuf3KARC3UzG4aFqBG",
  "key29": "21DLcxaTkEfgaDmrbqbHWYBL4vGw7SmXYz9NDpoeg99CBLoxS4uRCBNpLTRxogURxBS8Qmg8WSGNBAtbmWC2v3hD",
  "key30": "5jeHVCM8mTfBSJSbQWaiuBU6vMcapDbS9Dj7jVxmAdm2jAsgwewq2G1QG8prABFi39zuZUZGK5cD9VoGpntY9k9D"
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
