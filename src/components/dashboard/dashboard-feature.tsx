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
    "66yjGQJpzHuwcUwAfuPnGepFNGY1a6s1cnWZdfoDEwN1Sy5gkWrcbbPctqciBRE4o9XNx5GH8DCJMNtXzyLPDHFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAtGRmJaaQvhR6CqA9noy2UKqvyyvAme4Up8DVhq75VUfRHDySqkRLYwy5rRZTa5BpJUaqBs6u8mLsS9u8BTg8T",
  "key1": "4y3XBZNg6qtuKnbmD1WJYkECfMKbopsUwsYGvFXrw11uHmDy7u5FrzHHfozrrgkg8tjXr4hwtpNXEUBfjb4SL2Bp",
  "key2": "3kkGPrA2JkS6uF3QfpXXpZdLR4w6qzTPXoaf9QLkLQKtFyahamkY1ov7xEaR6zGzbrPaypC3yetEsJGNBe8ENV9J",
  "key3": "23ijbakWTxtvrjgubCEunLKbV9TmRAz4mmHt7MU8QPmMqggPy4TLJWW3ukGjZKaehC2P2qsDtQtxZhAfF6pvMg7K",
  "key4": "2MmjMqmLk2UFMLha868wSsC17MSAFbY3vGidfSV2LtKfnE2bb8QLBVWS2s3EcigjEvT4DhP7T4vZ9P9rqGNQ4GRA",
  "key5": "3keaR8otHTCdyRXCPg85Q2mZ3JgBKNi7DJYQEhzH4B2PGSu9uLuDtkwY7r77PgSbgp8dUxScufgDKNbCQXsQL7YV",
  "key6": "4jNVDHzgYCHjyWNG3AsxS84RCH9R4QdoFUg6szZahMAjTuX2J1ByKqxBScPyZdUWCCxHd9r19UR6wU2LoTvmEtdA",
  "key7": "3MsT386AFVKpwVKYdhqT27wggwy29v1BrPLHLeyFdtiaJSmAbwSWyrZTHv5vYyTCUBzxfni2pFHvnbWnXXMQVtrW",
  "key8": "2yVewkdr1Kg4MJvMUcieAmzut8mJJRUJnEF23sRHCcVARbPA2ttEkCDynnqEucUjqQ1pQhWw6J6jTaKkX9qMxDGz",
  "key9": "2XiVQqUzif8zze58ffi1Lx74yqmtcabuTQk5RPTQZbosXTDVxs4PT5BTM9AFRwy6NvVsrKVKQgScZzpxwkC3sKyE",
  "key10": "MJt2Z8Nd2mNkGqmL3vB4wkVMefN88YvZMyp8qwcemv8p2YvG5JHvKC2fQayyeHp9Q6qdZedp8AMD5idBqAVkAvT",
  "key11": "2egJXzcQvnXAhi4vVMs6bGwzk8Gb7PMDZsMt4m7ioeU9Qa2k9XR6r3qxwVyNe1gHsBzkdgkAYrjZQgYYGqyNpwTw",
  "key12": "4piwT6UxvrA7WXFdgd91twwkji4qkZYw71pnwyY8o1zsGfzm78UDnsKJCnGHyNzBcxQ6xDHUdexmMAsqaXteZ6xT",
  "key13": "2fe39HjsgQ5wqSBRd1PvUYvTUqaqi4ytsd8FGhaGxDs37sCYHsyRYJFEJZ9nxyhgkpdTcBeyF9R5QnXrxELUU4Uu",
  "key14": "7SZXJJeq3pip6drGtRgXciLUFB85RMXd6LyGjN9dMaU1b2YKERh8QZBSTsSc5V4xkRBZsZbUAfKWyqvYVk4mfxd",
  "key15": "59sAfiB56PcZo7dPtHwkYvG84nivjk6NcxGaNvujVmZGzAy4wFvHbKo8JkMeS5N8rMPDQvzLUe6ThLbycUsiokJp",
  "key16": "3EG5JWngBRNpCVjBJx2duVqAn722MZe9qxhJSGA6ai3qtFP9pe8XfZnDXB3F4QwWs8agsP9ftanmTD9quaeRazeR",
  "key17": "43rj3fc9x4zt4hNGPWyfEaoww3oyx7fHexiond6iGsdAiXfaW1hYK9ydNdtfj5QoENfbnkLnEwf8EuUQu21mzPw3",
  "key18": "5q9xwujVgYqJWi2oZDhGvcZq258xhAhd35YF7c61NZfmgBGtDbbvSABwgrCp1EewUcPCYGxGrWfCdt6BwCLNtBnt",
  "key19": "7uSAk5eLzZviJVYrKtuVPok4sLvtZVevPaZUyY6AumoH5wFjg7gofg45MFCCeMmrW5rStDpFFX6djvmTctec5mn",
  "key20": "7o3dgXTz6Tx6CiisWzdAiUk3Aqj9i1i4kU8ASbjZd3BFHwR6Xhpamb9JfQLtoYN1SGnt3SPyinDxb2JBTwt42QZ",
  "key21": "36mhAHYjYA4cbYNv8XTPM7eTPdFtPnsJcnGddeT2mAGmeSDkvFvegKoTgNpXpoLj7bgdr18NhnVEh8ty9xFqov6",
  "key22": "2JSBmS9H2qJNL7Asjy8qX3jGD41i4mQiEcBmdxj6Apukg9PJ7i5vU2Q7qZTEJVE8bH4Jcda9a379X9D6sHw6cVs5",
  "key23": "61R7xwra8ZEzRxMUK3oE5waUALPgQwxvaJzFadsr11JFwTQrXXsUwBiDVazKeRiN1zfrKv9FWypH5sfU9hVQKKCd",
  "key24": "2GXbpJQcujojjKMALRU5mMhxTTpqpEKYoJEw7hEQ8nvs6R9WAmtBbBEk3NAb6D88QRp1oLEVzSm8rdMiKr5Vxzwh",
  "key25": "73yh8jEgnXTFdU3RdPpqeHDPbTKPsrf4kbi1HxwNvvrZcBQtHidKmSrrFGM7QACFefv9pJ4CQ2fCW3mfTnpXGLZ",
  "key26": "2erSKnmdKroexk1gJPhNtHDpGmA9uBzqHunpQetBb95W35x8eaaSekyChVKjP2rhCWVmkhCY4W5awnKF73K4Qu8X",
  "key27": "2xd5kx5ZyNK3VsKMShUxEpjShvzQLkm3uUE3FtZZMUWAWhxzKgryT5nj2bG2k1cMVukN9JrE69cVNStcBfLJsNwE",
  "key28": "5TZgeQpkWjwK37jaMK69c7NqyhDBoJd6km8U1LRaP1CjA2uJ56Uq7mChNYywZWYJkTEG2gAfEkA1rGFwLBA8Cu6P",
  "key29": "4CkstktHex2jWYRhGcf8LLoM7tjusybeBnCaGDRzXbha7zGYaGd6JRE7NaTCyH9yTsRuCUt4V8Juvc2Ao5NDBWiL",
  "key30": "2NscS2kSGXCGDuf9qRyoCaSooMUupiuHBWt3ut32mEwrbdDdENzVzz9obDcLrSkbQY2WTWXF61xFYLBV1kb3hPhp",
  "key31": "4JKiYd4MBucgwntGAD5yFKApnKAV9Upkw1YokLBjY6f9ouJzNR2PeZp7cRUY8thbQXYqS692bzbWxqLVeyiJaRtx",
  "key32": "3CkBUnCFAPkRtqN5BsAF4m3KEK1vjft3Zam2wUKr781dh3w5qPnPRKwX6gqJWjCwPFBeRb3vxQJTeZFhYGW6icoE",
  "key33": "4YcmfKMa27KroUCe6f8CPLczNnD2RECG78v2VpVsNACjyg4fFnDha8duUTysTLs9EdgnYpsAZ6KdHuZbb9unrv6",
  "key34": "4GxdvSm26BdEktVGMRMWxfqxH83EpTZUtydSwFDQPnmrH7CtWVQjybLKyVcUC2YmSTbVwta38CoA9zV6yHyk6mBm",
  "key35": "2Uw7feFb7atPTcv4ggowTApAmqxLdGAwTxtw35DnNLjjvm7sntqFbWpxGwrFPwjKujYhrgmNa23c7CRPo8fyzx4Y",
  "key36": "2TvHvF13Tv1F5iNRbD1Y3nhuzET3LiSFT3CwupU83vhif3xMq2PehKyk6AUpKjffRuUnxSQCQPzfbVrS84xCmied",
  "key37": "zZqRj2idUHGDGGn9jXFWvcmgHHxrDLXx6WDg4pB5QRaoaukTRoLNAtv1TBfKodcJXssJ1GhBebKpskvutijFMkq",
  "key38": "2QJtenv9A5JuhcB5uKEuog4n3n4cRco7fx4o6NFvQpexxQpeGezeQ4gcm6mFLbKAWNsS2kZL5cALwL3kD8LNVvYm",
  "key39": "5TkZHGYpycv6fRqz7YNSLKvn3BiMGgTtBZutZngfNhP3u4yjbfoBKEs6ExegwbvgHAmfPRf2qkre3rDe1otdWDvj",
  "key40": "24gTdAHjQpvrPHP8RP6SqAjMgbc7kapxkkZjFtWfY4TS4au3f7eNjNAaCH3H85kJzpPvs4JL4VjwzAU9A4qc8Dvr"
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
