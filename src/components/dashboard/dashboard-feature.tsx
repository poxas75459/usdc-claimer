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
    "QE5VixHJdxvPaLnMSMS4Zp4mcxDSgoRXq4TfFBmYbDMLTgTWe278o4Yd9DyGF7ghTa5QKDHcmEBT6dhvtL2BinT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nYT4pfNEwv7jZUGQUDr6nsMDRwVGNmkdksavYFrU7qL1w2wWxoXz26LZEkP5c8E74rVq9TE2MdLgCcGbRh9Rzu",
  "key1": "5UpvauiNPzup9mBHHETgN9WcpaqwngDH9GTJ9hWpCTabU5ZM7DMNwFtnoSNEYCbK6qM1JW9H4AijsY2rN3gj6TLZ",
  "key2": "4VWY446ancXdKWfWkFNHAynRcEUCvvEFktZmdyVLjSux8sRSRDf6L1K9Xr3WZjz4XL1MQhFcpreiiXB5d4GMx53a",
  "key3": "3FMgT7MMgnGQMJikEbryuvfunE5pRDS4HCJePxrENAeKPvP9HoiRLzuZCibpCRyVSHP9RJwXvYffVszTSYNxy4AZ",
  "key4": "5f5iG4ha2M37mmiE5JaFcHLtM8mztnEZ47te2dJsqg1kcctdaPMkRfxU1nfbinFe1Hqy7ZA1RczEaEtSSQ6Qz4mK",
  "key5": "5gyFiwHGtXpor2HzqqFAHMB16RpuewDBYPwMyaukDWPjrEVNEUcH5Jwk473pHWHPVJath4HtDKXbnCpPM1rjEJvM",
  "key6": "3B6xe8LUJrUpVVebrG2MMHYJ3xvboJ5rTxwrEgbFpwY7XUXaqgCATqriTV4bouLLGcSL5evb28FTNsEW56qBUHCy",
  "key7": "KqxAkTPQaeyWpKG5srJKLnZvy8BUzKMnj4Cx99dVjNjtCCzXPi759fJCMCjEHiPPB4PYLSkeGc9M6n6DoN9uXCX",
  "key8": "5jLz2vSBekRK4XZELZETDJRwfdmrRBed4kDJJJgcy1F8Dfu1cCRT4kkzgv4uCAYXeghccuGAGuKS2h3sG2oq7xHZ",
  "key9": "3wPCMcoJV43pfjPnwQzpATsGmnHbJz9SLR1PEWhKhC4BhMWZwQz2rdEW16vYELNSVfTNjbH2QxWpqLw8cWpgWPRF",
  "key10": "4woRHKQwrqxsVteCoRswFbrhGPGKxh16hhhzN6mFE5E7xRqjCSGH8kYChqsYYD2uXE9dk2PakzfPLJYxg9ju2y1d",
  "key11": "4UxYrCgmpxwsbRYmpN6c88eriQ23jAaBgbFCNdRW2Xt7cv5Ck2G8sC3k4sAz4UNoiu6tPmpRgNBoq76u3wSH28jt",
  "key12": "5jkwsFihSb6NEUu6i68e6CkhgcBXwGBCrpSpoHxfAjeyxQXEvk1kD237SF9WoT6j8WQGu4A4pTMCs8k8w4TXZ28",
  "key13": "3ADTPggYqU7Svc7BKJ59K6vrB3c8jqLdbL9L9jvGMcvtPS4kwwtmBr6Eh5cuytAdwr6ihPBbFJywmgaYaMWeyQDY",
  "key14": "3ieEowNH4AmFQ478kukK6rASfpUVJAjHzak5qPDzTqNohtiEcCdDJytEem92DtBizyxNFaUYpuaF4StkSj9oxmF8",
  "key15": "4tmuqywE4TGCewKBf9boSc8SsbiUdW3DSph4NuyDD6gzdMgtT3jTnwsp9gLaHx42kY4SbuWtum2BYnuEgxZYJzsc",
  "key16": "55qogqtao1mDMUue4JejBPRpnjcrbRJmTGFXnqnP2jEJF16dJjEU8XJchZmJFZ7yb5mH8KtyZxrWxMgSfLbfG7Qs",
  "key17": "TRQ5yvY5tFe7MuKh6YEvcZ6LJqWdUeLf3X4frfJSKSE1ajWy4eH6G1ULKozytdCF5fYhUu8n65MBJcUGCmxKZSF",
  "key18": "2RVBpEBjo2tmVYNJfhTKUo7dkf9hWAtXkxwdzKPb3bLjmS1Q3Avpiw2JCEaTGphB5rbu9gKgZJ3Jwu2v3TNzuXNE",
  "key19": "EHRUBQAUwBQ8QMhNge5A86okRNidcyFXBnL1tBuzuG7UGPKQnkEb45ENN8dNA8akMhNPHwCjVtvSpRfrcftpwJd",
  "key20": "4Z1M3bHgyTgu3nTpcAryspGQBi1SG5iGGKC13dz54q1dfJWNyCsBPps3qRrDqAAwngE91ukcLyGLrkJwzQXsxwAR",
  "key21": "5Tr1ta65NXFQyqikR6ULG1jdecWtSphf2q4JXj27XCwWU3jMXS55NQ2cS2MUmBLorhcuH8ZP4imAv3a3pdghqicp",
  "key22": "unGHoWJzBbcNFDERt5ZtLiTpybzQBhdUx6xqjLiTDhNwkw5DuV5w1jCYgqzjapTD1uUAYaYshzYGcpDtztWEh9D",
  "key23": "4uLm1RfZta5nuGEYFuBHv2gw6LzNBJMzYimUAmodzWoxvJi363nuMaVaZdaxd62BifsYryoEGGjgrFmMrEu5V4eV",
  "key24": "3hZEaVWSAoJbMdxXrExUUhQA2EuMBNVG6MLQX2RjKMusPnUB3TP3YsxCWdXb3GL2aggMw95rEf9WrdAp7GbWe6Mm",
  "key25": "5MeKDzUVmaeidhtJhNeDpityT868e8wCwYQiAc22Dkf5i8XCVcc61Ma5xBGCY2Nd2vZTgWY9wsTXcHneVBbCUvKp",
  "key26": "4Cs9Snzbh6a1c5rk2Fifafd5eNgwgcyCke5jWRmv1w49PfEGQThxCJZMRLu7W4hxripwiVbLHAZn7ME6N3QRsBbX",
  "key27": "FVPwQ8GvEHZTfgReFxrstShJu1s5m6k8UjfGDbja2rQMrgcw98GUc59phGNmkwhKfTVpmxy4EmCk7W4jXW6x5WN",
  "key28": "4asU3WLJBwNUB8gzX6CP19GGBRRVQsCvYdDmes21SvjaRnnbSEfJnpUMxzgEQfTgADG2yYcLeXGZrLyR9YD7HjVu",
  "key29": "4H7XNNUQVMZ4B985Hf8p18C6SERMktJoK2vawQ44bxBtN2R6HFfJhFV1uj7Uba976Ni25xB5GNeps9orTXUWedJ1",
  "key30": "4VndicDaVoi4QRsMn6uzvK4Pah262M2iQTwe3HWZih4NmMNWEh8bnywzws5TXEZDj5fXEeLC28gGdPr9H2rJoHW6",
  "key31": "2T7WxmZ5wWK8bTjB6vf6RiuQKRnKS1BAxCFNR8NWWhpHfMfJmstTjFhHNGh6meicSKLBhnRyr4n69BiGSpXzjhi3",
  "key32": "2yNXbw3kgxtve5T7avN8u1YWMyogvqwnLnCG3o5xwDK3REvF9CVxS2SK7f6k3oCymBXMNpinUSCpPwtcixcp6BsC",
  "key33": "4hQv3dmLtM6BaCLLb4yGK47EeQ45KuKtmoh93KLXCLV4Dk3bnN6Aj4oWK1ZG9DTFgmWmkqcgVcxUJoEbTfRtrDnX",
  "key34": "2SE8VvkXvqXAX41cV7LmXK3oiHdTFAP9DqDeDoberGany3pyFif9JSqzQEaUcM2AdNScBYTspFTKpBJb912EnryH",
  "key35": "5WS6UMh9mUVcYVBkTdwJDPHzK1m4RTCNyU7zmvM2KCwBy8ZBdCVSCwbmpLVUHdkrHdi3KBTeiNtMrmcGsdejGqvm",
  "key36": "3SRieUBUVjh3UCUFNebosLsuPNDSRN8e9FwPiyyRVg2GEEvgvJuuoLknddjgUhqEJm5gGD6PChgStNPASsCjfiJD",
  "key37": "4tpDiuoCtkY21tT2eNVdzVBfg7QPAwAv55wuGDcTw1n1gJaToQzxp8viHsBHJYNXAULXvfVNi8uyShXfRBksf7FZ",
  "key38": "21c4ksG4jXDZXABxA8LA8bxXUfQ67vN4vRvMbJLVaEiZvEEQFB4myhdk4n3iGRLt5jBFZqwMo4DxHmWcML5NXCNK",
  "key39": "5cfQ3q7LUh6xUFbJ8HjhBsiKMEYyNaJ64XqJWuHPjD31N8NxVoZpir8SjPsAfggAN5S4upgjdw84pBuYTXMBXAok",
  "key40": "3N1JLo8cLux8s5NWtKtMEjBsf9b1jfiACoQZVX22JrHgTSu1yQvbrPvCMfbLKAbHodE4o1es8cGeYYwDNjiDyrbJ",
  "key41": "uL3ZXpvyLe4iZfTXUBBMdxb7iEWuVqX4BcSBm6VJ1iZ6s4fe4XzdEzHcpPDy5JAFdRrwGYj98WonpZ7c7M4Pcde",
  "key42": "2bHcXFEAaVAMRR2N89j7k4KSumbp2quFTds6yoAoKWozEBfgqzgp4dn5JQ9h2wtDbrw6spo9xeGyfeBDeCCAFN9T",
  "key43": "5crxHY3vbdCf5GtjLePbhhiQGvYCrbjzGgd3yryLphGYrHnQujxnaqynYDBTjrzXFeLXzgjXbvtCZKKeK3Q2rnav",
  "key44": "DyriyPWTY1QzJHXsfNhiTFwwfkEQoYnu7YGhW51RM9H3XkMwbu15t91bARaN2cZF2drUyRhQgRUxBhxJWXxKmZ7",
  "key45": "4pU7dHK266NHZbYsnrtqBasrnDibjmamxVma9CR2NoG5VMuL49ggmUHrfTDLmwER1EkPegdtEM3aEuoNTjc2qexH",
  "key46": "3zPiKUE43e6hMyy9h2xPSd9Kp9MLvdX5pEgcgiakub3zLms77bzWPidpy5Qy89fE8M8tvGeLJud8HX2n5Z3aYDsH"
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
