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
    "5eDg2RxDxTmnwqzHnAxbxZS1Y6bHRUfgvfTaRY8YL89r6NAx5BKoGBsZRcLTvtq457K2dJT1gmchGeB54NeVsETv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41WurtLe97QQrN3tMdRDZ2arJ3ur6fye3zcfWEoT6SxGff2UMJXdsCepyP94gx8ruU6ECaNPkMgxdvM4KmUQuvDq",
  "key1": "i8Q2aHnjmm98WJe5epC2mfwtBC5Z7RBC6pP4rqgXaPStcqhYNobkBz8qnXsawKPzrAsBj2Ga14xJNaMH7YSmiy9",
  "key2": "29r8icFkcj8EVnqwpnQLdai4tkNgrbQQyyX5YWMJDfRK8UBNgdR5Coh422Cq41Qitnxcde8dANgcqRPNoW2rgXsC",
  "key3": "2hYKKiiEJvia9hPCTmMSMoLzoCTd8nNXvYMXdGPuN4BZ1ZhrEemVvFFSHc5a632uswB2s4QUPGTwhqg3jZYe2y7f",
  "key4": "2QtKgJu17qQTuPQa5Fj2bY15iUwUm7DmTndYfyQH7Wz7tX45su8RtaLdrDVtyqy3WBfAL5F5AGfrXsmiXoHoYVJD",
  "key5": "2uERiU51PGPZewoCLsUWYJWxmvDB8PG9KNgot2punqWnk2GgxUNUHdioEi3uiPptXzLP2xyuhV4Yv3ia1jeCSK3G",
  "key6": "67ZgAbkSYpdMmX8jgcJ83XXfUaC8ruMuoEkbCv62FTZEerVn3e2yNiUaWeojamnpRdNx4gsjTorNEMmRaSvT2aCM",
  "key7": "5gd5uDRVCCSHDs2Cj8y6EoysA4d7xLsNcjLob2BXk4HgzL29EquTsCewtbwYkLW2Vmm1opqeNLNXoEc5tF5J119g",
  "key8": "4buNQmC3Ck1VmkACnjpBSostoWFKZG78LpizMhTgYg5jbJdMESQda6dfhweW6urcH9vxrZgPPpEzb5kzKXiUQXLY",
  "key9": "3MC7Z38AtpVQjo6CQufftz99d7xUBLBvQN1iBXJsmV1qxdaomkKWFPuTq9d7UwGnARxmXf8jt9XH4uEoD85bQkb9",
  "key10": "QdMcnSZt37V6NqiE7jZsTQNRE4DFdwhcCri4M5ZrHZPuzjw11ZRHgBLpoLjAtE7CirP31m8XP5gAQUhP4uES5L7",
  "key11": "2f4racPyr8JARvvJZbDcf3CXdNEAdn6vdHiKCWvFW2XAq5gJFJo1ryLyt4hN378iz4oyemWgiriZXtK9Qi27HaAE",
  "key12": "3U8Tvx2ZTrBKK6Gk6nCS9WKZkQ3Kso18dM18ozsPLWwbnFmAwJ55XQ8BGkEdMqBhoruWTDC1q7an3xbz3ZEkCvyn",
  "key13": "2qh3nTavRsK5MWyxN9WYdgST87bxryQS1gK1unNbPePYgaY4HPE7AU6ep6d16J2SNy6zHfumhcVNXioVfpHZ9B7H",
  "key14": "5Kia2aTSTb86ayhtZSyJ42i11xerhZE6Y9d32t1zRbbtZZ59W4kCgpNKfhNVFdaBpBsa2pFmQxHageDhwM9CSDK6",
  "key15": "5CrU9xSQNjhcvX8su59qw1thYVMPThPajNgX3pgw9Qg9687GNxp2xMNCRfTV45dMzWdQ4uDJQiEkhM5X5pvWf32",
  "key16": "4zY6MfcVV29mm6aMaDjrZZLu4M2Dg9iAePRfisidfDy9dojg6VdAXSz9f3HEi61ggAU94Y8Cyz4rU6x1MutK5V4Q",
  "key17": "5V5REtEBTBKQaGVadW4ThcT6pj8o2grzR5mbsUcdQxqnCf9YJ9HKjWjsFZq5LKfcpmwcsrPeAUk7H53Wtxa6HicC",
  "key18": "4vvijoxYsxdo5ay6ZipiEX2S39fUsvcf4i86mjzXuunnYcB9JADJsiy4vSirFsappnLW8FfR5AZ9EHeTxxJ584MJ",
  "key19": "5SYGosjqzSL5tbYHcdaaVm5tvaq4EtKuhDGMB4iEArqTSV4eUsDDuX6TSq8wXiGMhHoHd4joP1dJ5WGRXzJiR2kg",
  "key20": "j5xZimwt1o9Fh25yRzPPSkTSSCjBGxN4MKr5MupFmG4vohCea5AoXEXi4XustBiMtvRZy55B47KvdXE9chJQnVd",
  "key21": "5zp9y1MubhRJ9ZZBw61xWEn2VDuhjHMKFLBkiNoLMCFQ36ruwGo3SifdSiFb8mgE1X8AXagfqbSgjGN8Yy2zDG6a",
  "key22": "npV9VbXK8js9Koqc9XBFGFztsiGpNcGWVmDBhXVoq82FwUTBybLP1YEkYj2VXHX4ptedxcbaMmFhtrby9PLv6sK",
  "key23": "5d8aqw87icRENzw4qRE2RJ3kPQxcd9eFKishNTat6V48YXD2VrMXUTyuzsEmQ8BAXu6Tfbys3NMd9yhfo9nkqV2D",
  "key24": "RbQwWEeFZRbKuHBFtwgLV6EmxrQpYQq3oTM1BNXf8JuEPFwjg4fVoBwWFm5WS8USXUMxbLR4vNBud5DspiSSjF5",
  "key25": "twmPEDJ4hYXDZi6Stow8hz2JhGg6qELXyFLGjW4rezFRHYqe1WSEbacD4cLzjmGJw5WhmV6NGziAJMMx9sYE6oQ",
  "key26": "37Wqc8YDddfugRaHmRvBffv8vFrHfMmSDy5ayBi4cUVZEzdF1YaFNdJmzc96fgYvtRuZSnDHW1AKH521ZCRDBNPJ",
  "key27": "2p1BXnZXmCYcZZbpVCerHFroZJt7x8MbUNpZDit7k1oRrgreqzANaFnwht26JLDsMzbHQ2MUuoPaRcCoEYrYbyem",
  "key28": "5BTamKgavWHyaWFPtQPvpYbhd5kCJbfKHVd916FEijNX9YdMZNNJRmhyUaqC5QfBVLqLZoxEE9AcrUa156CKN9fL",
  "key29": "4D8QVkskAH3fLYesyUcu2mp6widTUJ37CVAJ8v7AGhEEDhbdYoYBaempgxM12ftsthGag2BCX7eRJfFPGi7gYnCH",
  "key30": "29VSPywGZ4K6PU5CKfbSmGngabFZGti6R1P5anCszN6PioEUt1VtPY3mQRFT7wNAeGGKCkRf8r6tK52v5DCaSVtZ",
  "key31": "Lor2nwVgDwktY2KrQsaQ45bj88gWPWgxN9iQ7NMbAgL5Q4Wtcm2J3znpmpBDupYVFtb5Soxz2sHTGNmjKEEfQet",
  "key32": "3UvnKU2YD4ig3dwXLor8r7adJ9zJioMPbroyzBvF2myBc18fQAdE5yULYk2u5z56gyCYn7Q1SrBWT6MFzX3XoJys",
  "key33": "JcVd7cHdZQHokRgXYcKzCNFyMwkjft5mA2rEXzeEXTeSKB5cYVPh3Ly12BWdMf81SLf5wdpMNYYFrpAX8wmnvvx",
  "key34": "48HpaYzFJQX7EX5qfpJasXh6nPLhPqGG1p9nhYoFY9J7kZLVUxM2GxRiBaLVBaWhggYydr7wWpjApLaE8b9fMAc1",
  "key35": "3gT4vdfpcKznpYdCPmbG1snBrXtK8MLVmVKV2s5FiaVELvMmr6MWG2HbwniqZ3p7Zd2653p9kWiPbZkViGf2CJtf",
  "key36": "5VEGDocY4aBjGyqUaYApw57cLy7PdEcUtZDWY7BPSQnMx2Lq5rjeDX1uezjonXciPTp1GPdZLvG4wCWHkXWAduJz",
  "key37": "5AM28K5MXuZyNRWgLKGqf7GZ2LNQ4prt8vkfyvreajEtYYvApkK1tBsv85hS5xS2TF8EFYP4QFUDwBSrJXLPbBtm",
  "key38": "4uwNZY7DxQru4NGf577NVTtCp1v3zYaC82rjeqsxbqNLUYZSrd58p1iTXzwrJy5B7XFFfJPssnB6fyqSLJuTXgB3",
  "key39": "P2jJkAT2cDCDZQ4RfvH89X4grqsNvbrhMpnF2je5wrT668PsvFuDi1r1ZX8C47fwJNaULhEUseiY7igSRRpihLV",
  "key40": "3u5nnTEMXgx7rXnQvWP4Hdu3q4ypvM5fuhqJFEzxfLbG8i9L6TpvcdWhk4HAZSDeD4qfWtMx45eoK5sH9K9PyyL9",
  "key41": "22XHZCDk2cJNy6oBAp3dVoMhYiBKmj78nVFvoYLZdByrADKcGfReBSfMJc9hQV73smubBnAxzb3EZS3ScVWebmW2",
  "key42": "2e4698vy5PGLgpbxpR2PiWx8LUJqEYKcXBdq7DHj57MW8FHH9pBqNiXKLVVUqysaQL5P8ehT8X1uhzThJiPdmizc",
  "key43": "23ZG2QYvk3UynBXKyGQPm3XC1kYbfTSU8BYuUpPSrutxhVMtiNYWa7zcX9oX4k9ZaWmfVeTDzEwJv92vyy9SsPSA",
  "key44": "2vmfgZWQGQY3Q5MvAWtwxT9Tk4rTFuCdcHkgFJRpwt9VW46YYMvKwM7JtC69PAdMeJZbdLpNcpPQr2xcu3fJGWM6",
  "key45": "pRyzEyqYrHZEC451MDuKEqhDD3P84Ceqjy6YZPFFeupAGow9sYQnfKpnu3si9gLcNa6opffSceJuERhBKpWuv6o",
  "key46": "gvmb9ZLH7RXeuY7Ktp8ks6TqpxJAiFwBLPZrHzrFQ6252AVZEe18FYCb2iHudXZqAwr4SkPwnPMyL9gQKmttXn9",
  "key47": "2tTLvHcHz4n5j6hzUSdnT3SqH8qGWGCoPfcDW8hsZNmWzLvLggvmukV81NKLpjUyoFbGXxNR4Cnc3ZcBR1Ruk22f"
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
