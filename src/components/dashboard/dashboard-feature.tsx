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
    "mJwHQTTT7vhtprpEc9xTmcNtVcLRJeNFwDvTiEJyQZWtuemAdyEkmNVn66GnbwwY1nTHRoN7UgBQmhLtACFamaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577qZtJUWSBTGsnZgSF7XQfcwFLtFHnWaxFHmzpo4q7CPMuUqeDCVqVHPyPD1rQxiEiPKGqMPAWaVCvFEUaHu8qU",
  "key1": "3ixD4SwBE1Hk7mWC7gVCqw9GwcDSFHDuNbJv4JD3nw4XMX6CWHAfq84buY3p2cgNLubFxc4hFoeN5F9HdWeCpraR",
  "key2": "2FRZjfSbkk8whgXRvvTyySM14kQawYtPujyArxBNnaG9p2YCDJLqu97FPbqDXGA5GURf8uLrNcJagcBZuLBQNfyg",
  "key3": "62zUCJ8ApsN2HNf43TxUsZ2gw4mSYZF2rP3f7BDM4nGWWZ7rVUmKRuLu5AJbDEpeKhMWGCfsVvbNHPXpBLxs6wEQ",
  "key4": "3S4mGtAyvygyQbkbtqWFW79tokX7kHSzWBACJbWQ1nSXKB1L9WfQ5424oTvA6Haa7v2NW3F7MPkWKUkDBCNcfTUM",
  "key5": "5gZPmhg69V1jZo78o2FwUw8vdr4GwPxtMMCdc9J2bFmu6PJwy8aKLZa2fRD9DFuskYGdLp78tqKgdxkdSqPUjM3M",
  "key6": "61KC2SER2iZHxZmLJBQ7Dape5SK5UsVxWmnBG4wCYvruLJKAw19GqrzMHP8UreBqhw8zHZtNSM5v3kyTYB2fWPZ7",
  "key7": "2dkxYJgLXMaFxqpCQoahhv1K3JvqDzrvRzQwmr9MmqhKVbCP1sTwAzChkG5fse9kU8zMtdYUg49mjJLAxhGWmyGi",
  "key8": "4ULkPdNfcrGZtNMv47rHKPW1BJPdUxRKiwrLeqM292WN6trDWBTvKysu8yhybwVks1Xgb4N8VRGPgRfB9v5qPyJK",
  "key9": "5Xz7GQfQqF4e6ExsR1FbsZjaxN73XwRc7BSnCXN8DcDGyUTX2B3qdJYJgjCKsSVmGyAEwEaWP5XbyMMxYMAdqpr7",
  "key10": "2hTJyyVD2KCSod2rKPBGuw7vRWTsZ11DM6G9kxGmGKJXi6SpkDhL9yUYmp74Vy6nKB9cuuNgVxhgJ3aTkR322nr3",
  "key11": "4FitVgEqQUvFHT7wgCzynv8FzUH2DnTE9MESZBFSBY6c8WcbpNPTKydsLHHanQYgx4TzV6mxJFgD9nJGGRjWMrFz",
  "key12": "4YrJwa3rEv7w9qu8uDqvBGyoTBYExb8XVL81ooL4RnypeF55SAfkWuud6634MCwXAxJdbWirf2kkzTxoSZHjdGnP",
  "key13": "51oT1ugpH9KxgaXqNBht3VJeAzLHkCWRN4vRi5bsky3NLWGBRcZmsj8QB8L2roSSHcwDDHiw5KWGNu1tK1vFDhpr",
  "key14": "2Ln89WXVRPA2krRDbpGnai5wT3gw9Wm5c3WozxREyaKLMz8x5jwgcyX86QWeDWjbCk25sMEFsNghfXusxZ6bVMSw",
  "key15": "5C9S1vN1sjrFfkPEqKjnnvnpAzUKikbMUNrhgpZXSxV1NGMYks38PMJAC9hs99RzVvz9LRXCvyYn1KaCUxHGu7mA",
  "key16": "5ZhwLYUySv8dgYFDxhJNM1pBs3CAMgdKXNNHxzuPZb333KSgye6ehCz3mfGy4r45tEgrd35bhFcx5SUALMW9R13d",
  "key17": "2gKugBqbTNKUshbj4694voTSDXTnPvqEGRURt6oT2aiVqNQaMMHyBqx2LiWme6fAMbYqSwDvLNDSy2QjDTd4Uke1",
  "key18": "3wUB88izWUQu4nei4cy3hHMWdqZ5FQTamuLUAKTfSuF7RjzqPBJCDQMeoG8kBejMRT7EVUDzTp7xN23qGocAoFWt",
  "key19": "5Uu2YhMk1Y6PJgKXYiez6VNCUoyB4Ujh4RkyUucHQ3BDneFmubmBzDA8gCN8om3qGHFkUh1hp5iK22GZfsUW7rrT",
  "key20": "5gD3pj612dPW4yjXRKiXMg4kkW25bgsHxJGhxyeVhta3FKavVjoAs9q3djnTd9ZY3wJ4wtoVHQjHRQvDh1PReWD9",
  "key21": "4g4LT9nWkwxCfAUunUDzqRKSCtQCQXBWDJZgsJSoq4dnEFmRUZaRWFaxvpigbWpLG5iEndFy7XpEeJNki4uLvaZr",
  "key22": "3uqGwcfTYCwq6r7cqFoJZg1KfdbohNH2Bn7xsDGDPicTvZmy3dv3jR4HynNW6VxHkpqJLwmztBYdMad64HwmksXf",
  "key23": "5rE5q6Dau4nA5e8KcVU7kH8FoWjd3cYJpMQzohPQeysFyYt5gNPBXSb82FecoxWUU4mDe6RMuwKrqbEXaSUoV92y",
  "key24": "57SzhC7E9PmoxVZQHynYFSgEZsMLdDvUZE57B8zgFfLa8BrfEerThhYKE334jdktn3XzPdsiQKDop5YbkZ4B92jw",
  "key25": "47QfKGPb73kcduPyUZb19p7wUJeiPjwkRxFiH3xM1aYUi7WptvJ8SDXkrMgxey2rHNRPBwDjkhZxyTexyxtRAetj",
  "key26": "3aoMaztaHokinycrw6G7HHbmdyMEj55xKqNkZjUJKA17mf5rQgzN2iB2FBjrZS2KU6dQ5Tz2AMxWVD1PyFZ1aM3a",
  "key27": "4RY8tvubcNS2H4XFtgdnjN3SbDPErK92NAVGtYry6TAed2g9mR1S1QnQiHf4GCfCuU72K1SfoTpeM1eXpz621a8R",
  "key28": "45WLBtecDvBZeyCdwTTcMZAFL728ZLY7Bo6Kirq6BsxsB2LKAdLD5JV8fFK3xDhmTkWEdD61FLHUkzmD9p7oh58A",
  "key29": "J3M2awvh4ADYXJ7bzHjqgqKQuBU9tqEXPWjmJ9FuuyzEpRqjU5H6UvaZGSLu8iz1PzASEdbEAnhJpynj8ut6kVh",
  "key30": "gpQ7B5KaxUYudCkLDfWD1a4VDZe8cUwYkuR7dsrE4LBoRKNXv7trgwfxhSG6w5sbYZWhQPgbNPSvRbeBNkxrNvP",
  "key31": "5ebxmVfVnrqbqo3wbKr327wPSkLoBn5dXkuNxjTpQ9bZ1ejTS7eR8SPN7UaJMnpxsTV6VduTKkR8d166vnh4Fhsp",
  "key32": "4RJ7R8W7xKMwwwaDPJiurkEYHhtbgigvCpzoGjZUk9dn2KtyRBV4873i9xqjfzPJ65uW2qyASYggtaU7ukkbMDsD",
  "key33": "5KKuNZEsgHSfMmJA664DLy1HHGepiJ7aSD6HNCp8YaNtSwvTf8STcyDTS7nzkBAiusjRbMKGKHZ3ePDckTGEPZM1",
  "key34": "DGWSz7sn99jEgXLaLx37M4Bjf4A3FhU7iombnD7PLeza1sojX67SCHidZgSHRWgg5xbAHLzGMX6SHgvMgcxznuG",
  "key35": "4o8W5tdjUyygoeu8XktoZjgKTPhk57oF7whKoWnDY9RR9aEVcgntHVBoXSHL1TMMCnNZQYhPz1usbYKd7yWqHDiT",
  "key36": "2xptjkGbaa6Kvy9zrK2mYvRG8Em75zFSJ1JPQMsuAsn5pq9th83h5CezMpYKW1F1mAmD5s1SrG8wVX5N9fWG9uBa",
  "key37": "3bwzko4KEyaVQdmh48fnM6DbYCGZh8kiAu6oDriiPfP4MeZ2NhPyvFrnn97zRj8UZUjWHiuvREDttpd5JiaD4bas"
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
