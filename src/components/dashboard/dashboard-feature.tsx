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
    "5YXSWFh4LVrWJVXsnJR8UmqVu6N8xneW3b91UXfBq84dtRx6vZTcVjfrH3eNcX6SqmnfNS5asEx1RqXyBZtXDmjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YvH3HaaJPgLSj2b7nhpWb8jUr6w8JsyhzJduZHJ3esrqNZ8fBpp7gthoWVnBVrcg7q1SGWLd9UVuKgXSSQoh1fF",
  "key1": "5SAX9jCuKurtxkhKrxb5mpWHz5D1obUxojJSuMBroPdrR7rHHLJALwT2nmWUpdD1FGXbkKG2w1y4s83dXNpDBHEB",
  "key2": "YiYuWbFQcvmDnQeirqUVXfF9jgtT491m4Q9GSsq6PrMCqS5o3jAgTHeVeABPUdrpXftPFzU6fVy53KEJzMhAcka",
  "key3": "ebcLmbzcahP6SX8DaeYupCQeat9BiV7BRpK92KoQX5ZrMvQ1McuQmXNtQ9RazufUn7Pw2tE9B3KCUtXtjBot1XN",
  "key4": "28zDskd176swY73rkDC6wjVfnx2xQfTtGYbaiWzakUkkfb4ryXeveBp4AF1JvA5WK8rxqiii45nzGwL9XyP4LeAU",
  "key5": "5vKp4h7dCVBgofUv2EMbThXBeeo7tnpmYqNf2qgDxS9Hwr6RxzLaxGPHFd78uReFLTpoWhHeX8Q4wZULMKFwAN7Q",
  "key6": "5AMCpYBK5QqEvJbV75d4jr2mTPYFY2GR3XeQc3UDttc7Drr6UqdjE8HoqUeoJjFibCYNMzj3oSqKe9encGgZaiBJ",
  "key7": "5Yx6pLTV5ANxHa4KEJjXAVZFoHdKm4MYHFGsn6hKA3bRRw8voB6tCu47ZKejiRJ5WeteLxgXaPP3q16eFx23GRcH",
  "key8": "2sex5RvdVMYVZrzqz1BgKo4V7sX55pFhDwHUTnq9nz7UjofgqdiBtx5qSbuFSsqhTJbdwex3rA7ygZNN6z21cBr1",
  "key9": "3iZgPgzwFcxvPYZHVfXtLxGyvh2GcmLVPX9DLaFZnUoTEegbVRG1xCxMEDwK3soszfekBscnRb8QQGU6MrG2MrsQ",
  "key10": "4RKZJ3FVxtY9ScgTSELPCzH4DcwRFgY41icw51oF1KLV1QToGrsPVM53Y2rNVEyY1eA9YJvnAFfiVXWhQ3R8iBmR",
  "key11": "5rwrexnstkqkGb3xbLcdgKkM3ZjX12E7XpMTsMhjDov4svPuu85QBcVQNQUKfHq1kTMkV9pVEHh1NJzY9VsUBcuj",
  "key12": "9Z2Rsymkjy8GGtXWJUkz8s463n8o6KVDySVLc1CBdDAYkF6nQKqdPfzeR4vYPNhgEQREcpB9bxZf9G7vBGuNfCE",
  "key13": "4BZ7zAe34ic9mqkBQPKQMjwuUCfzDVbH4aNdC2byP8huR8x1vUiBQUa8drmPytCEijDYpEXJnhcX9JDsNWMucXPs",
  "key14": "4XqZAR74M6NCvMqE7y1zbADTw3yTkmjuaUN7cMSqnJju4z55p2pCAjtH81oBE2xnkZ9ihYKd5W8PmNBS8s87GNbG",
  "key15": "GpQjkRWeC1weznsLsDsy4xMkVbaKCfDbu6CUiYNnUjgnbNspso9NhWfZvFG9ZSzETCmMDB1k1RQCEQK6P2xTiGq",
  "key16": "55zxXvBZQJwdjnWgtmj71LLiCMp8uL12zX9aNPDQMNNuvDSZSytTmbLFUhkVpPstXC2ETCGaqcq1cn75S8yr1rR9",
  "key17": "3Es2PPyDFYakeUWpPN2kDk8ghxNshpgHwFzYhtrnuymPsgbRX6SR6WsS5CrpQoyBfcmuBbdAfKrwNBaTqRuxrsZQ",
  "key18": "5jFioj3vJa1Q3PCaqCLyk7H5RiYWMLxYbcrjmm6mksPCycAtaoDtSGUxsbSspQRn5r8NEc49Yx3k1ZF61aoFrTCe",
  "key19": "47HxHWv5iS9xrVkZpKD9XdUMFYm5pYzfK1stZ6NfW3wUQqZbx98qdReCM47YTZf4iWfsRzSDEB5mz796hhhqD8gi",
  "key20": "4gG2iwEJYySyEFzvhZW4TGK5EivU35GtimQfn5i4mnUHkgiFmnyBrmRuoCprHicn6GRSZt6zmCbKUfdDkdxLDoNC",
  "key21": "4D9DZAoRiiExEPSFFyrZq4dWtEYZ17ho6jMSYMXTuues7wG2oy7yya4XpLM8v6DmwCmpmxtbm4AGx9EyojMP5bCX",
  "key22": "5U1DNzWcsA4Z3fu4iTHYAwTftGXtxwtzADMxC7Gj9wUM9NFJYBpsYwa1VEJFqJwQ7UFx57FCC212Wx594myFrnAX",
  "key23": "46BQMtc2FuW2VzCZ3pZHYLmF94SpMo3fuh6bdrRYD1MdMS4WqAx1Ujfs9L9sBAR1LqVHyWHczkVvauhVXeYbrpMx",
  "key24": "7kwnP2waUUs9GqZcaM8DsVDMLD24t6o4gKqerxCbi6k3vyB91LnfXHERGwyhz584fpMvbXvDeG95J7AkYXzBG1V",
  "key25": "3rMPC8xfqG3HJwA71pemnuXV7nB5FwNT9rjsZ2UntQ4j5AvMB8b5RRSwPw3EpBnkDyTAmBS2PF6c5zSuPZ6GTAjU",
  "key26": "5mJhn1NL4Fx1gMJip6pfJ2bwj5GqcjFdfX7yL6VDMpjp8S86PVWatAw8swMkYaDeDCyyFVXpdgH2Du2c8EsScErJ",
  "key27": "2AdstzNoiUevMVZo3STg3AvwnV2jUvgkffDiv8rT79VKugkAn9c3QjWreYBMqTrTG3iA4Mtvs36me8g9QHV3D4uP",
  "key28": "2jzUdgZ3gZ9ttwgaaVyZp8vZjr1TQ4nYtYoe5TvNhV9MnfFA9BwtzKt9AtM5Vi2KRHRoRyW9tESEUvRtR8Ayfwt",
  "key29": "4j2N398ZzRYVL5EtcnfrQrpFxf5uhpPmhpnS7X4xNnMPtM3FFm1HVkvjYaK5SGNnyNrS7Hwwyg9p6yZUj4oqzBnY",
  "key30": "iCGTeZmBfisf7okk2xYmUGBkh2YE5G5GNC9ZpceqSFaGHGHAhoAvGcZo5bQ4sVqxtt4NPr181zrUxue5ddsb37x",
  "key31": "4gJNvkTuZk3WaZtkRTgoXCSZJzUPUDhyjJT44dYjXAqAXM57C8SzsZbdDbzhXb4aQEL4scYFizfwZXfz9BYWGgYz",
  "key32": "3fnaVfrmZDnkvLrhu2W5GXmpZfHpH6no9TQMXH3P5rjhywKCURfP4gv8jgJ7Qw49AXyC5tsDM2WgvkHpe1gmXY7o",
  "key33": "r8C316KC82ggJG2WDKNCFiSTruQjRotKCxx7bkqkxHKJqXkynQ2tpCvnuUuQZkea2Cps6iMU9u5Y4agos8jNK54",
  "key34": "5MDDmgBXwoqNsZcZCf56j1Ly37zf35ZPRD5eBemaj7kW9o8ipzyFUqnZvttUXbWpAyC22BF1PFinTsSYXDFjVbNb",
  "key35": "A7vT8wM6oqMAH3DGwaP64FHAg2YpMHD8mGrjhiLMY7VeE8NVnixqZrWSiPKerN9gdBec96KJN3hiNbAp8VAj3cH",
  "key36": "3yKk9VDRziKZ3EAKYRSNZ5fiocmtsCaxGSXfa1RGFLkjL2kesdRg4rDEqh3pm6yV4GUEY6NMy9dAKXaizoG8wALj",
  "key37": "3KZ19ZaFrSeTYZE6fkHAMVB23Y6yC1BGw32eU5qSbgDcvDcRJUxwW6SuMMrQZPhFrwjZiTU3NCWQuzC8SfuygfQ8",
  "key38": "3cu1AuCGMwAtXezpu1A5W7ezQsEYYbUDFpbz7yPq6DWWxxsCvSBzA1RSwPEvk75PmZ28q7XaPb2xc2rVVS1sLWgc",
  "key39": "5fB8vyAuXCDX2pF1a7ycVv9oNM3B4yaEoS3XGJTYZm159bnYarjcpHfAaZQrhB85TiJxYnr3C1uNUAGSBoPxJFoy",
  "key40": "48LDNygzD654ez4xgNYjAgc5qnCsrqi388jt9XRdKLL1jYG8fUTfSAjTUQg3Bv7BWXhjmAD1RbrKGHDHsEMeguu8",
  "key41": "2rCYKfq7venzoP1Sc1wbyXuyKR3qvvUWRxvSDpfcKxH6vZeLrvWupRdvbUcB4gHGCFWDnE87SrsYQYzz12JvvUEk",
  "key42": "4BH1aopeaneRMwcphtLra57PndnuRmaYTZvB25LfEwHLPcDKkJYYHvAWofEMenWTuLtRYgeobh8ShvmDERozGH5V",
  "key43": "65LsQGKtNQBm8fFANRTNyDNeqPupKDvL77D13HP4ngvY2cvZa1reBY7V7wEKByfsPaSu7MFTVPoToR3ZBTYLCKxT"
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
