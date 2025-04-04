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
    "6JeXHvgQieGcaBPWc1jBbico4omdJQeS1yCuRx1QErnhtpv84LDdzwMDgwhP7HFTCQ1aumdCBL4tkvPdaW16VGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjUytpQyjh5niJURe3chDWdcf8kgUQ7o3mLQ32JMkfR2FHy1tGeS34Dbi26cviiHZHbxvfKe8aGJqWQV4ceBVkF",
  "key1": "3gXcLRndX9kJoda5SLBDyhmUkBoh3pnzjK5G2Ryh6aXZ1Xj9tAu1g8Zm81T2XKVfgBAtGodD1msf3Aft9HM1n4mH",
  "key2": "2MHdiHGwyr9L4Jwme5sh5kqsuprruWPBdYfwWvPRDi9jfA3EXGELwymxZzc1CvAQw1B4vkh166koKWwr2KovEvVT",
  "key3": "2QaU4Sohw2PXK3mVvNNUfZ3sHyVPoyiVXG2iYAfyGtrYzfjdRtGATADXuhsR9XH9DgAKtNPJg2t4kmkG8VyTMj1y",
  "key4": "4BzR7fpZXqZbyXCUaUZGsfnAbxQzW69TJY4Mw7hV4zL8CmykCm4bfuBWexziZfohJAyXbenzFZHXYWeMFcGYARC9",
  "key5": "2AiQTcGisRceRTTHt53xv6sKx87vc6988nGZTLYexU2PLFdPmhfz4ig4viBDu1Zfw1oK45AMbN5nqoVg8Trd62o7",
  "key6": "XH6eHYtuyC4ehmceXH9XxctxYWg7Fq9wYz1B5T7EQ9f5XykDhFNeRFP2imPJHxh3LjCNK2CXHBQMsBuoSRa8kcg",
  "key7": "3eVy5B11Q129DWFsopnbat4kmhFFeJckViemBGhQd7kUcweqcHApUpGy71zeS4VQ2LLgR1RSsCVVAoUSb85PScE",
  "key8": "2ho7C5HVghtAS4dfuqA9uAsLaYEHs7h8crAFyEXWGRRFuBEjrwxDEeRA6BD69mbrZ5A4Lgc3noz3fRq3BHfyzht1",
  "key9": "5jzkGBA8ndLtwMiJ3kKawb7jnD2TUSB23BWyuXzMDAvw2Fvpm3KZpBCJpdtrCFbPCyf8v2myN22TfE1NrLRuENWo",
  "key10": "wG31rQ2S6GpxbNWkwruGSPt6XhoYU3GL6vAUsKbt53bWRzQBda2L5W4CxDvYY6iwFc62s2Cv2FKNDVuThhbnefJ",
  "key11": "5aWBoMJaMt7yB3fyygP9GmaZK97s2fnwhy6JAo5Li3hMxVcRFfrgf6PjiYhYRBtqYCfAStsrqrVb7urTYpDxkzL7",
  "key12": "3UXyRZ1g77JswhKtGGJAT5jL2SkAPKUq43bSiguCRnKEZUHeK4Yvxf1f4iUEjNC35jxnaMFjZ5JQQeNKWDhV1gY1",
  "key13": "4Cj3BTRSZsrh7APtiEX1ggQqWQ7xL6qkwYF4noZ8a8YgqQb9BG2Q76zGTg7AuBN3TedeQv4Mk6WR8uhkWhxwWDij",
  "key14": "3yRnhrJrwFzkfGK3ccCE9jDSjS57A115pCXZFJMjMuDRKA31ahuPPesxTfVtUQZATsagAGerKaWQ6WPFBcxipbgL",
  "key15": "3x2WBAPmWRf5cN85AoqFL78B2dMqzZR3sBE2oqnruJrpgHoPLguowwPqmYRMXGEakudVKWedpxieB5N8HMmKyzmB",
  "key16": "2ctkfzqg9hNgUHwrduEeTx7ugJX5QTxfWsxXx1DdDAXNJGNWazjyUaQYNpbntK6ZVYhNFPWfXwsHZTS4NeA4uav7",
  "key17": "3qx1nGgkjyzJDNdG27R2nnHfyCY3B9x6jrduvqhoAznzSV9FGjfwRm53yhM6yN2WicrgmthKW16QKpTVnDeokjSx",
  "key18": "5atUD22nt2kKog9Ny5xZoiBncoWQT16DFDZzGd2UNdCSJft95H32J866i9cNxpvv8LG1VC4ykuk91SaXXMkp8Tur",
  "key19": "5jfVAVJ84dWrH86fCShSQ1sszxK6E8bTbbsDN7sMDBeDQDi6BvMMXDfHKNsK8v3kgRu9Bt5VK4VLKKfoU35amYs7",
  "key20": "5UY6D6m3dbqsKcNpebsZzJcBAhGDY7xqbubBrERK6mqUrC8dQEToxF6RT6e6Wc9HLC81gt87X4NSEsEqp1wW1FVu",
  "key21": "2vojZQmxE5316LG4FHePZcFGkac4ADwYUpqmiWRm5DEB4pvfXPxUmxEAhysUfYwSGTcNxG29GXggVoddJmPQNsse",
  "key22": "3BGWUEbZxkX6UHcEm2BkVScsDDQtjUbYEGsRMkJnyPgbFQnA8n1kCgvy9nXzYmqzGeoSBi4ByvnMmdLJaBhayYTb",
  "key23": "4jmmzHYCBRnkLMR4oyXCCVwZBDX2mUxaH6VaiQs8qPNgeLe5tXbDVpPrL4tUV6PbcMsmKeU5yAHBWAVqJJRjWyoY",
  "key24": "2VAXqGEFz3RmGYZo6xNo7nmTJgE3JaK12nhgKtQapNapAC54jui7TZqDKHZ4wM3zkLde3RXznjweUHZWAANbv96e",
  "key25": "4MyRmgULr9pojgydEHeHquVj5b3qXLLjhpWt8LzbT5cCn6gVAAv8kFrdyGdMs6AQu2z9xaRhkw83yWHcPHhT7vG7",
  "key26": "3fv8vJ2Mcj3uP8aU9KKJjfGiskuJzj7TaJosdzLFgv4Ba2h3yw4t4j6EmvEFaaiCcdzkXKjvqiq5pPGJrAm4JBKt",
  "key27": "3qkuHCKenAD1tg2seH6M5vLridzQ4FYH7wTiVTvVAZ1UQTpywxP6rcRPbXeGDnRok6W5bd5M1VXS7Z9aABthkw6r",
  "key28": "2kCrW7EZUVyDrJnjXEM9VatLPPfcKZsHC25BcCGrkpdwTBvwRF9UVxWSZnadt2HVM9FBUqG2SZpTELwskZNCevvt",
  "key29": "4hW3DAVbMmVPSHMSwToBwzo7fooEFafbs27fGiCJxaZ7pT4qobreJwvXUsVMi2npaR869bhwBdnYDYhuQ5V6fJhN",
  "key30": "2qkcrwqCMV8WG4Njh7zMKxfXhRXwx11oGbCmDhNUAE3uYEm9ibUDDo1Dxbsm84mpL2Fskjas85wmuHRU6DyDTTje",
  "key31": "7eUqS9icrhxtrWsbcZ8DFW9ByPT428DaHPEDXat9pHwvDADZmhmwQkBoKbDTLuyKWD3Pu6DHU37kHqSi9wzU4PP",
  "key32": "3kVtuxJMTjeyXMSo82XjRuV3P9mVdjKXhzztJY5fRw3aVD2nDhWgwLKbmKTUZLzTjd29tTUXcxb66fZUDcGYp14r",
  "key33": "5Yk7j9cx6FZ5zSzAgRnVJFnkzwfASRrEaSNk5yZ1voN41x2w3Bw7c379LycqV6jnCtW3zC9p6pdm3e2PwVj4MvV7",
  "key34": "2SKYPKgZSGBUVh9CHeW6xzPGYagHbTSzEDFZgJmtVN7VwzRLpbP2ravNJwsyhpbufSHyJ8aBYQSX4C3gMTDp42WD"
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
