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
    "4YvVgXzvT2J84zt7zjwUCMnLHEso8cjUGUSJ4g1uRPHmo9GWETiV58xsFDxWS4UwDNqi6mtzLJTXF53E5LigdXXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58RR8V6DBoW4t428HHUkTK36yYA3eNU5Gz7WfnvMnpYiu37dadkrerYYCeQZjszJ9qgZcu257NquqoRuQ1NocLei",
  "key1": "28t79D2uXP5B3JZA1sCTdfhwARBrZvovPhbvLQD2LCgDYtnrrwSmCV4ALc2DXe22hx4WvJw2gdq2gauve4cZn9iM",
  "key2": "2kekAHgieLLUfGmEmpmr5AXKfaY6JFo2mcEgjiHUs5KPuVBk9n3s7XFb9RHUheNWbBoLffuTrCdsaA3XKukbFVbJ",
  "key3": "54JuEwZsQDyyKGwN2YAq2H2DahUmjxvYKWLA4MhzPacRqseuy2TKaWZNN1khSGU9Rkkt1AG6sW26Q4o1dHYXaNEX",
  "key4": "4oh3jFdVmfcBuUqHTvLJerTuW8sS2CtecqmCV4XSPtMinjd1MiSkaBDUqstQmmf42oMivLvGPtRFWk2M54MmWhQn",
  "key5": "eiXP2CM7baZZk35HwcvV1Wn8yTAAU3g6eRjE989QskpmpT9xMqtTd4NEFbbfvmSogDVqQ8b4cevFhm86UArFkpT",
  "key6": "53yPfugd6nYfrZVdMyt2J1xaD59acKeQuw1yDjDB8CbZrQVS8kpWA9LEbpDqhYQ5nYeskwFMwwLkA83Xp5F54UtR",
  "key7": "3P1jkQAZbr9AQVJaw75dHZZcF9cJDNZiu6gkhpAKJNvJD9aF9iH2W7onjM11J9XLemYrNqeFKeorXnftwKgu9Dyv",
  "key8": "3oTK1ntgyA5RXbgtMWYmSJQnRsXbR1iGL4XQDPZdinv9dn81Ge3cdQKsv8YfUoAk184bJskGY4F8xZ9r4zXh4MhH",
  "key9": "2A8Vj6KDDnAHFYcTTkZZ5aq7dCaXwfRJNNWdQhGf7jc6PYDPQFNxg3yS3cHwegege2MQAkQUkbP3iHANDM7oz6Fz",
  "key10": "51u9BYFe7tzP5vtfmNb8g3NzjrYqkETcCWF7MqzSvPo5LyYMcNrbYY9vpnzTuBWKcJsHRQLwCBcik2BujEkhU7eq",
  "key11": "4hdPv1hr6bHUc1UxcdchL3Dg7kghNwudsc3btWPYuSgjGBxpin5Vu4aDLzEaBzyrBQnwmDTxdVabZhg8yMWFSjiD",
  "key12": "4D1FJ3gLn751qmbLw69jjadgk2nVNLaNnwdKKEZjXXZR3h9zxB5mUCMKVYwbWCibfWu9ZFbRneE8ywbwntgfkmXF",
  "key13": "aTQVBb1oF9XWQkDa3TYqKSJzNyVDehMaRswjcg3yE6Ygy4vZs4WhNCraK6xHdVbthvPSYvAiTmoAgYhEDX975JK",
  "key14": "4HZSLc3W5AzzvEqLrbJYFdMcHjQXvGdkTinvXjZexRbMVfjb4jamvoe49kTssbXpgbwP7iPfGDd7S6xwHPQ6t2EJ",
  "key15": "5qLXXy6hRYQhSZKqf7gPkqroVtN9FpdUBszZBWRYZhauQocizMy6MU63obHFD7iQzoS3rGZDPDgk6BW6Jg6G29DL",
  "key16": "FoRJXGDgww5W3fFbfcQLRUJtjZvmdbrRdVqTFBgaqhrCfnqNvNotNEWTkQYvSzSMr4Lmny4HB4U2rW9aafY6XMh",
  "key17": "2VnJScxRAfdzjZnfpyJyPVyQBmMpg3We2qSauJ4KVCjRzvKEJ77GzwAEjzgAh1Y6kADYG3cbSVGMDbFuAjgFBDvM",
  "key18": "4JV1jCch2d6EyTpazpX796BRXsTdioTH8qNyKQPPVShfLKZidhVkbcjmzvANcpngCr5WvM77e29XXNxMpk99pbSv",
  "key19": "vEc4aZUBVECHYxWhEFMQiGGhT6uWBoEb9MFyvazN8XEsm1dq73k78yhe6BgPXXNXXTfeKbAguwc9Ck5bPy1tV3X",
  "key20": "3Af3LqX4EDe3AYmSwx9deML33a7tmNFu3K7n8BeVBCDvNJ9ooHnrAqtbLWNmojCHzBcWrkRm31En25pLGoFYdffo",
  "key21": "61gJUYjaGvFSiHTikYAACTJ641bvifHCzoSS127ni1mbCXq2C4J3YYEBNNeWpzbeNwBGndwT2QBBUEyF5htxPgCM",
  "key22": "2tvcaWqWVhd4hnKJ3DijeVnbJfEERokF86edQLzUsdxLCEga8Ww61tJVNa6PY1aDQ2Smjc3fSBY8cJ5NWJj9awE3",
  "key23": "4zYwZq3JdBcKMuYgtjJ31sr9d1ZSYaM1HhYVhQQMZJMit46zFT5sdnYbcQnM6WWmQ9F8xJALTvsnXHb6kiditYsn",
  "key24": "2VT2Q6G6bK1d2fTHi5C2QiEZZTUZDidKuZ548h4hRTAjH7395bHC626EUbeETXb8GAXynkQDSDFeX8kdzKaHiGz9",
  "key25": "4k8EcQa17Q3zSf11L9BEdp9LqQ7Wt2xqdBwf2A7qHN1xeYMZfhAxkhnjSur3mQqyv1NrWVqbxhYsAY3Vm3LLGeWn",
  "key26": "21xzs2iTTYUfex5YkfkGvncpQ6z6yE6m26jSSMBVTKadmvGeV3nG7qa1v9hZftQX41DvEtRz5pJEV4uRMNrkBHGf",
  "key27": "dFtAXu8LyqXkkWbu4nf17zKho4gX9pLqTh2nkV8img3jcHMth7syZCafigoBNFKFV4nGs2yT24SE2eFMmvcFdG8",
  "key28": "2YkxznQxZC57Zh63cWrobnxs3Yytj7XrHUX7jus7QCMvMyReKmoJNciTKNtiNeVXUkPxH4riKrWnH1SQDsVcTVGx",
  "key29": "5fhGUgwE61zZznsrXT6MBNVJnohZkDBAusb3JWvwZYZjEcCYkdLSGthfF8TkEKzsrd9Y29J2vE62hR1KmwScsiRK",
  "key30": "5nbkHed1k9t2W41gQNY7Lve69Esn5ZLZAxxD3w6Qito9zQpaukN3sAJ6qRiunmRoKMC9n2ewArRD5jjJJy8o7gDz",
  "key31": "2Z81Jrz4U85m2e1yX3R5RdreFpajrJfmY3u5udz3FKGXe6ykKn3afrc8NAsDLr7XAv3ytphcpuHHWqRDBamSxk3G",
  "key32": "3jT4awVUDZ3StGXqzXZiFPWsfX1mdY12Ug6rfwCeEbCvwMMzJhzDQSedg7ECzpcGetQ7HDLaQooSpxzdvygChu5j",
  "key33": "5hn1DTEt1cXHJnLgzRnZzGVWbbR2MN8zcm8FKZTceqkv4yp3mYSSE26R8Wuo9cLjLAfY4UXdo5pS4jUUapGFwui",
  "key34": "2qr4mASbykUYCtQJDvfT99trNkjfqteCGo9zfupt6DmhznG77ypvxdS6ofvRHCqzykonDYpGiLJ1LrPWeb8sXdCr",
  "key35": "5GXK7DCuuYetfF87G49XMD1bog4xqu3b9pzS2agPj6zbKcmgefxPNBKn6T6YwYu4Fg6DNnvzoWTc13maMfahLtQK"
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
