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
    "53RtzgatTkFZ4oaTS2hnTmYbC1ReJwYky1HtDkG3Vj18DG8sPqA1pZNZvB8PkbgNDJxVUePoFjQJ2oLN4BG7roRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jjMTMzF78crqmgHFeyBC2bbeX6MYM34LHL2wXVVij5QkwUtMxtTM7Wbf9UePqSpPHevXmE2ppnJ8FTzpYeqb2",
  "key1": "YKuXik2jb7wqb9rFGLikvko177AzjUmKFVDFiHZbTMJ8BYp2UbzsCU2Ekgaiy3NUHK214GYaJeWmmS5qwpmMixG",
  "key2": "4yLPsVu28qTFcApz3ZGuXAT7TANu9dmhfLJYqV46R4pGeoZEmNYUFA46yAfrRquyvkNMTEss1darJ9gZt85iwJdV",
  "key3": "2nGzmjRMtfrvxkeVZNgUmV3jWDfhrRMR5RxJmCZ2jo54HuSiiQRSw7pXkxEzjX4SsnoQbFunq5tw4YMGgwPtvupr",
  "key4": "5XugJWjmrS6oNyWTcanpcvapgYWzWJg6o32QWH6RestSYJApUotGW7SMZRRp8g28VapVNCz1AKB4FxvFYj3RaHLP",
  "key5": "3c7YEkvBaEUdhqjmtEUcuJpVUHJ33S1ejezJjLUp9ccWLr91618kXeXt9zYo9DemV8iCssbFYpj65rYzo24w4Um2",
  "key6": "41xACoQbpw2w3J4GRgXMhS3p7nUQ8rzgPfsEmq9irV1QgSp4cEi37rVewdQwX9k4bQ419yVQB12yEbFBK5mXmn18",
  "key7": "5LqUSz3qXRjoBBu2HqaxyMRfvdDS1JrKW9jXaAPwhDtsPM95Uwkq1vkaw2BA89fDNRjxrUPnWQuWseQzTVjCPGiE",
  "key8": "4mf7tC45foCYnVkf5trZxndibfEMvBcXEFZoSg8AoiQYHoFf3ZURgoPFsEnxZKuCzcDo3GtDZZEUbk8r5Kvd3XJ1",
  "key9": "4LpYx64RpXCHakDjxtoQMPgr18SA6WBCnzA4ZqaDgASPzAbNoZwnsp8x6kAmo282GUXob8shEwtkeGVcZqMD68SR",
  "key10": "3RvuVuDP81EAUDYRf8VKobcuLSVH5EEcp9wbnVACYEkQhtrnt71S3SMaLyUceeGXNZnVpbRfCJd1magCCcBAJD1C",
  "key11": "3PpxwCVVvKX1Wm4AzCpenkF518n1yvfRQziDWCdPwaPnjvNQNBAUwqKJ5TqyJ1YAhC2tmiJECtgV4HMMNYPngPcs",
  "key12": "2zpTZTNfw46ckyALEjKion7oRZGNUFcTRiBfYbhFnpfdZRx4zfv6Kgr1aVHGozvoKCFyFygg3rp7oj9CnVPHh6Gi",
  "key13": "3fAkrxePT6UtWbup81nDq6tzA2qJw1eJ3z7sDBnVqubE5ehfFoHsz2yZkPk8gRrqByJWzcBupXZNqHWCN57ztLmw",
  "key14": "EiwhCLvctu8bbi9QfNQMAGhmrFpDYQxBMuydizihRbZ8UFeR4b2hmAj2tT2Yrn3jyVbs4euTTFWcuqa1RvxEL8p",
  "key15": "5AUCbeLE54k2P7YBRrXGCAPovPYaaWuoGAipmreEx6Y1wQUE4FV4HH17F3EzzrroC7DZN8HvAhyhDzpkotNeyFb3",
  "key16": "GuyM6oEoYEr5KmjB2GCYMXQmpWCR7WtbtGSNceqgTFMsgBzyWMo6zyunxeZYtyFDDiLU9D6FYauC3gtsM7xC5FF",
  "key17": "3JewmwgQXNd3vegEE65F18vxGCP7kTNc5sFbfpdmUtdbCCTVK39iuoNu7F8UK8sdf5MZWTxDuFpFJCLVrcW2sgEB",
  "key18": "45tj4n6vxaLtMG69FKHK6jyfr5EenR8yPpXYEoXxbgpa9E44v8YjaBiKuq9Yawrj4UrWmFmcBMV9dR5nvQwrrTH7",
  "key19": "41W5UgCyctShgar9ZS1hDJuTNjJz6YwMRBVgXyTn6zmWjJV8t8sgfcJSzVDTcDY32MpdzE1vr7DT99CtgDzYc8Cm",
  "key20": "2aJ6db7rJ8QdrSumTXHQiV26QzdmwDJ27RDUiC1YHFMgo3vfFKjXChsLMTQPEqxoEiPWpmippLcHSxgPjhmfrwN2",
  "key21": "32UV7oGo5FaVYXz4EekmeWxDY8NbGvybHMYRw42Q2Kb63zj9VtzJD41Huv1B78wm77fJ29MxM8f2btS87Tqv6TgB",
  "key22": "2Uv3Yu82wbSzRmt85GQiEYmk2WDt7sDyijKoLKRhYhSjE7xMmCAiYqQ3caBEH6M2DJ2yxQFfnNab8XR2p9DU15Th",
  "key23": "5bKwwM5yjxrc9QmYos97WNzA8iQsUrzpmYTENLyShAcDvXaHX9tibbc91LA4owSNeQm6DL15WecbKVZ8K18ypm5A",
  "key24": "4Zwuw6fLjKhauzvsVFKp27f9TLh7NU1DAuxeNYUfdZS6cvqDU4CnaCwxDNcxR7YwPwT4m4WTiPejQZgMtgXAjtAy",
  "key25": "3JhhnYibjbRyHc3efeykaW8ZPqhA7ADky1tk1uJFQWqooG52RpeSyofp99kmt63W2qrShJ6GDsZykLVernDnmb3",
  "key26": "4XAfwGT1NMgZQnT1oqXM1czam2RBHdnRivujxdYgpBJxekpWAhtWYmsA5JKG5HCGnJevB74xP7aXxoFpddz6ccwz",
  "key27": "3384oBCA3uwbAihbHPwyzGRk6A3pnhnPC2ytrkEazXQhV8WB6Lkf3r5iLJuHanSpcxTRwfe6rR7HNXanzcnVEpF3",
  "key28": "5dPp8TvzW5odcQ9uHYTK5XUmUUqYjwhPM6YxdZ7sPSwg2BiSS5tvxhr6xHjgyDXvaAC1W6G69dUz1dgP8fCppf9M",
  "key29": "2FgGEPbxG7a7ix3WKvDKh2buA4eESZfg5bcoBN6sstXY2tbkdzAHEHg29WkfsQgnFwjXVtXiWtMKwdRfvVtvCsRe",
  "key30": "3LsTTcJPj88FvXoA1UkcnTsW6WoLJgZJNPCt5uaqKXLDf35utpuTi3TDdwUfiLUVMZnhKAwwYVPip2PsMj8gVoBJ",
  "key31": "3x1rHZU6RJfkykxeqDM7ewFBbHZh5UJeSNRF2L2wBPBG8v3ZgvL2FbNgQj8YWDrqSc5pHNRFJVEMQ3KJuAvxKyR6",
  "key32": "3Cbz9XVbgJC8UzRZA1Z9tPiYNt7V8dU3sQLoJKA4URHeGph3mgDc5payGWXwTVymzJfoUinPYU9ELsdXnGSndbvU",
  "key33": "2NWmcj7fst3kadHZycpkWtPzQvi8q3qxXjSGnWtKccpzvkxAgsWuXwGnfHTy7dxs8gBzcSb9GRUGrbtqkRxqTX7c",
  "key34": "5RbJumyBsfke6FF7BS2aN5X4jecY5umtvJXke8WSKVmvwLMycEdKtdsRbP8j3x2JjmZxhzvu3oXA8Ua1Ua3wdvPu",
  "key35": "2zK6cu1FyC3hgCjUb28rV4tt4JW3PhqL6ZoYfRCMaKY1hZvicCytfD3MTb1xK9LLQxy4h7ABJRYBQncqM3LkBYfA",
  "key36": "2DRK157pTNKJyMskkH94LFBoMLFa8cT3oyazJxTa8dCmVFFksycfSL1YpNig8nQyGfeCboAPUNTGrYHpSKT6R2fs",
  "key37": "Az1UWKE2qajVCTmEsS4ybwBGfbwtSjyR3BmWcxF7zx3D2AbY14r9rX7ZFLAEKe5teAeUgWnZ35JYZHocHF1e7Qj",
  "key38": "BxEtaQTXFiy28Z7AbhpcS3Uhek85MAp27snsPBV1ZnLPkRcYzo7QFnTFR6X2FYqKtfoe2CVeA6Hee9NR8QxRFjx",
  "key39": "5cdeYhcM4YCX4PJ22qsFMC1jCvtyw81HibtNbB1HecXLr8adyDb4TThrd3fNM5sFVH2FeWGW1D8X4Wtr9yYV8CJr",
  "key40": "2RgZ7CrEEddEeXt5GK85QQay1CHhn3z2zoKycYxqX1H6E19VBVCRcNsDaygQgSsQbQsJ89WeC8YC5cM3KeeygE1e",
  "key41": "2K84vAidRaLm4nqCWSixc2BEtGjSNzDFivnqr7Xy4HC6yRRny8CL4JZvNzQo2V3iSve6L6N892vwk9dncPW9wUD7",
  "key42": "eSPvAHsoENqEtDuRbe7EfqvXnDPzuCUme2ZfUFcUtCMc7iLN9nLWTPnx491CYnJeW3gHDTcRVbRvUggJr9tuZ9k",
  "key43": "2uXkqRfBE4ecDsmpHRx5LgkNSrrF1YbCZhVdN4YRZ1Ta67aSQQVikSxpSfZj946YqpBEAaX1ZeChJnUB21hqgbiH",
  "key44": "2SsG8L4bRndGhyjBG8nzEgMCnigYaAMvvrqLsCMT2p63QaBM2rfEoH58UWJUkoduPXT5m29B4o9wJozuFEC8uXSf",
  "key45": "4a4CPDoNYwdR3H4zHthiw3AfVpc3UfJqGkweSxY6sP8D3bybTEDBkxK3yQrWsYB5vBX8on6TNnyomxPDTEh2Zcb9"
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
