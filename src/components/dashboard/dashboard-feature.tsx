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
    "fRPLtEj2AKRV8vHqiVG22DGE5AgYojKqj4r82GFbGGwRur4pLB64xmXPg69CUUGRHvrJ75MxnZywsTNenxyV5os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhw4QbzVXU7Zg18SJfpP2naNWSfKqqw9p4A4uvfo9bQ5yUFxGiJArbnCpo3UM1x3KuXueQ4PBc2fFhBGDD1eGfu",
  "key1": "35cgmHbd1d5uZzrXw9MBEbUiVfMLzzny9p83JsHrmFY3N4eoyffPhVoMLTwKr6qKPrRxpXif3y4E4pvMsxzkgLw7",
  "key2": "4TkdXgXJKiHXXpq2hWR4ZTBLWmWBPSGgZB2SV8hzXnTvqQhrmCMUgwa27xv2DZ3TXe7jmVWfEGao7hfW2WLpaqFf",
  "key3": "55pFFVbHzVcNVYUW68ehgCAqtrASqsEeGuxNuLL63F5Hd9YnYsRC6QU6AMpMEsi5A2FPCH5mbCiSeKAEyKdv7kuG",
  "key4": "4NfSYqavuVubE7h765VnHTkYaJB4eiTWt3fywxTvxo98feSAFdEc3zFEH4U3MDcRjd8cctYKiXRCLGAi8V5eE8na",
  "key5": "49nJBedn9pJV5pT9UYxJPTRpvxCFiZ7fL4mQGL5SrhUHWvVUBQTDvN4omeuTMy5vsiGFX8jagpqXbosvpQ8A2QTc",
  "key6": "2yLycrBZ5PuBWQS6QCFsiNPUVmiy4KUWWWmU3xTTMdiAFKrCGFTXi8hzPC2W5QGGCfWNWkeCuduG75CgNLTyS7G9",
  "key7": "2TBfE3AN9aiDy2B5xReB13AYrVEQW7AbJd6yeqa1XWYR8c9iZpa6JyCQ1K6KDhrScqRmVkpavMGeifBPLYsichYL",
  "key8": "4iUEbsksAtnNKcxTQhPFSfuZZZSUjjn33pT9tjChQkxQ5gJvr6FofaRKCaAWTmCjVZH1FCyVQ8hF5orzcWuYJVWn",
  "key9": "5cGt192kCAdzeno46KeLEyBAxiHKvpNj5LvtpArY9RkttLz2EAJ9uahsxqAtmLR1LiQbumzm6aqUbdr8X1cEPFNe",
  "key10": "41hPC9kzQb97GK7ZZKCQwe5G5cQvdmN6W4F1QpQ7QUfWjmH8AityE7bKiWryw1ak3Eh2L4GwFHfWP53F3Zwe3Aob",
  "key11": "3JgytmHokesjU4nhdXhRpAfR54boJjgiC99bkfjjMRPiSi36cFd9SAxo7MN6jv6h68ic5kRGhUEZomNBMNPvRwDU",
  "key12": "4BsDKbzHc4Nzt95t59HLtewBGx9R3e67cMutetyq9qCBTdXvZ3DfGh3fW9oM2939YFS3CpACyXd17RYY81UFFs3H",
  "key13": "26eBMwambbDNQgTwNn5jZ7rJ1jQLmTJfV58fQmtR5jc7Cp5vpvuZxhVb2UxR2pFp4Cpb7pP67foShpEpjEnrgoZg",
  "key14": "3o1NxrCeh81vLH3nfjr4CtmythC7fwXjPe3zVCrKqyKdDcUFketKY3wsHqGgB3ww7LLhy3eMLbfHPXU14KmF4Cj",
  "key15": "2DXV6iPNfVtJaMtynMWN7mGxsksmfRNy9UEXLZYio6CbSJjWWSw8nAJ4RchjTbmZnvAtqELfH7DzSgUX1Qf3ti9D",
  "key16": "2w2d1BYhVyrTJkAM434bpyiLdSReQDEXvmZKKNhbJUFwpbXKgCHqHVFTZ64cXfPvbhthvJRsqdcxXNwDVQ621Xrj",
  "key17": "2kwehGUaF4A8Mczr5BEmzM2pgsgCoapLag9Su1HjzNasKRLeH4MbaU8fGVvFQ8qWugFk4QrbWAAU1DdeTLabSnPT",
  "key18": "ZDQjTHZKWSkHuUV1jDeotKzfXNpMiz7e3ku32FqXZKaCfL3xJhFcPzbpxixULSRcd3kRTTd1446NWQ8nExeDrSx",
  "key19": "TP1xpMP6GvrdUK8YLoVEfgbeuESZVGXZCSmrgHmgfe97JdtGqkP35nUSgL63BuW8dQ5KTtySKvjauMemu5mX9Z2",
  "key20": "5Gho7PjKLzYCR9ZXWDYrKqjrk7ZGrJwCW9WjiPG7wQphvHEVNxWjnkv1unBHP6Kp14ZPotCzNghKASEDsMUjkCvt",
  "key21": "5pAcHP9yW4Ft9poQL3FeAHmRLH5SL7ZNV3NWtRVgXDrHrc8RkFC9mh2HpCGGRtNebKVBMjrXoUkoMbiNeHVtTzAT",
  "key22": "YNCt37V5gJ3FinWXMdhAGkZerZEqSYPwFYSs5yCNmMsU4NooMrRM5ixxi1zrSfpawqs71M5PHQDRDNS5G5gKZmb",
  "key23": "JVHDJAknwvvTJedg9ymVwibMvXYvLKHQqg2dRcxvLggwABFQx7ZnxJjpxxQzn9cop72doyAbeGyuQoTm5XULzZ9",
  "key24": "2ajuQqcLugB1ZSgvjePMaDvguguGUDnUvREYiz8DU6ifTE2Cg8auyQbZoWRY9ezVop6u2BMxyqwfNP4m6zDjdQrW",
  "key25": "2nM6f32CHKZ4gqqTtss65fp6QVekFZ8aCFuExYtr4pZomS5kVgGMu4GA6diS17UAG4hapwSzj12hSZ8pfa7CzSv3",
  "key26": "FXQajiJrbCR77WbQkppMziLbU9TsY67K79yrWFvGWWDFSt81j77C8BcuhD32EotymigecjcvY8MTfjGGTpNyFfF",
  "key27": "2X894XAuPsMc7warSdvaS7eHgfC2ZMHYXo3zUMHit85hFPn4shLT5ihxXyViNouQ4T8w3F93KobeKATc1acB7tDb",
  "key28": "3Feg6Urd5GWhdz4wR8RkJmPfoDJxFfanQGnmoX9HV47nAPTfR5xocz6wLNvLMCMfajaKX3c8bhePJSDY98cpWXii",
  "key29": "2VqAcyTUbqm8WL5H6TfdVWQ8xGDcToXkGD4Sju2ppAZS1ySvKGttSZHGKAgsJourUhz9tMuUm7fXudEqUPXudFnZ",
  "key30": "3FEUD3cU8uhMrsRxptMrmydc3vyDQY4cyzGqCNv3EspqsrEt5n4zEHwaptenCMrHyzHmy7eXQ8jZ2jzGAT5AQAQN",
  "key31": "oftekruattGS7cSRknjyVZ1N5ec1mzR3cECAXeog4xbRMyx36vV9mhzh5pXRrbTjc8sPfZ3pX1Fw5u9bneDzeVv",
  "key32": "wgdHM3V38kbZanAY1AXEPrLAx9Ec1m5tNbxoaQXdp7fzPPibbjV7TJYXjeXCShWYUesXaN2kitdpj1PWCVePHxD",
  "key33": "Fsr7GJX7SfNrbDCygb6gkLXEarjGGyC8R55WB7XYtzbHGLx2AFjNZ3vGveY3A45sFBkUKPXf2Zkr41jzK8RirdV",
  "key34": "3qwWccFKF4uvZ7zVMGT9KCy8SVccmgcMRXmcpUTQ5TFmfTuQRu4GnCTtKfdej9eTFwUiHxZ8oF77tr3RRnYR5uYr",
  "key35": "1C2cPP8JZFfddQRWsdNEWu3ZAP5v6wz3i16UGd3FBRzrX3mrVYjgrDomCBm11wFSZ2QZ62CADFxT2XMnwQuJV92",
  "key36": "perBjYN7V3tj1wpYMERSBtVuxweDM7BFZ9xb6kjK2hdebwp6Jrcccc4HWohZZWuwvwMh4TAS2ybB4nwasSWTFLq",
  "key37": "WGXQJciVdTea9uKCzoLMw9Y8pyQyJoUq9p2SXdUsFgsYfsB54FbJKrZsyR75vDWyrMgqoSEXLcXK7xQdcPXTf6q",
  "key38": "3VqdxG1u4iw4V1AP8dPnY86gK9DQUtb85x8FWRHR3v66kkW2iVMa3DJVtPxZ9fGiCXW5y58hADUfEZjsWHdjNyPc",
  "key39": "3BnkgCBLCrCHNS78Zu7DAxn3YZuHvnY4SxD3M9ifMUqoAnxS1sGzxdnkyvfbaxM8Wet8qVZLNq7229gBkyg7qAJ",
  "key40": "4Wq2jm2NmNfsGJLTZ7UvzaMPujuYQPGdmkpPqGQ6p8BwQsCoD45YzrMdGN27dLAcbc5gv22qNGiLk6CXaSbesnk2"
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
