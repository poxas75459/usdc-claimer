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
    "3R1dNVKzPoKX7XbB9XkNRt7y8wRJSPiYxLBtBr8RJZdikUMGW5RmBgQhVYdKc17owsVNL2MpGeMW5hqHy2w9V1ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SoAAErDxaJdJ5Gi7PBp8jjaYZzPrwWg6SoUbmUeMAQdJEpKYh2NpSpGg2GRqhNcWfSyGwhGRgjHJe4vnHvSKRVe",
  "key1": "5aZbdj36cQtwz7321FVU3fy9bLnJYrz2MPsDaod8TT8wxsjSuQePh49ZTRtEwj4bRgjtSwYgPTaEk3RWUWpRPcDs",
  "key2": "65gjPfbHqppTuE6FpPTDznAo9eScNcvG5CLdchkqa2hsVZLGzKgHoe3hcESHkpbtUwxM2DRZSFDae1GVxVEFJMoH",
  "key3": "2ifzZ7cvx59CX392GJnen6KCUscKXx4Nru3j3UqycKgq9rg2vgteaPgm16Xh2pLFmssN9vVEK5Zb4KHkPLaSUZ4P",
  "key4": "3UKhcmyZHHsSonexNFYaHzFmxQHR3HKE7p5ZgBspjfgbUCrMFv2eAADtRWiqSTyVCYFb4ruE6BYna5jT2gcGLePu",
  "key5": "54yoTVyjBMFcC6SePM39p39mVGgcvvtGzo5jEddHTBuaPthrZJTkd5Tjsr2LMN8bVWwZdpSxRj12bPPXKXYyDm1s",
  "key6": "5fPbiEMYukwfb9n1sWyDDHb4wVKT2RSarzcXtY1GrrxBzS6PaWB4uCMPwUy1aKkPthBjrzPJUNgrwYQgTNkv5ZXt",
  "key7": "5CLwWazR8cs5vrxVKXS7MC1Wd136acJfMoCdMWYqYA7HQR5cD6t6NB692XxNBFRDiuFiWaWVLxXfKHLWTsuf6qYY",
  "key8": "fww4Z2cfY69nqcaFUBfiLJsxsSpAhodForCiEcX5twBq1HxrMxNF94EkGHTUYbLd4v47rwCkCAn4r1g9juL8bPu",
  "key9": "SBUCJBjNmK9ixSYTXGdU4yAdPyvJqVDxhACPjKa7pgSd7iw3uL79z76UTgh9kuncxwtKcdjVnxC8pzjBWkaKTnD",
  "key10": "3KxzhfRNS1apqBA14B8JgMVRayW2aGwfPZja6CvgFQPjERzKvvcrutu9bbT8QjvjPSFiLrNsmLXiA3B1vi1dXk9V",
  "key11": "25Vno6q2qxykK4joVE9o3niRTyykPZYqg55TaHL9AbE9eL3Umwu5TamBseXjz6Tj13Aq5pS5LgioivCVkRqzXKHa",
  "key12": "bSxn6qJ8Ew6D41yzkPshLUERQRNLtmP6wcnpivhtR3W99cs5habeZxMctN81E9MTNfHmMyRzWTqmE8KcCS1HDEx",
  "key13": "3AT4ZnDikAP2a5nXRvkr3hgTPSQ8A6w2eFcbfF8C6cpTDC765W32tUxnhCMpfs2jU1BN3TUbky1WZDAcTJDvnWtF",
  "key14": "4mnuEybF3wu2TRbsVFaCC6Nja4gkXHeBPaVKnmiG4x1AVs5egtJKUirbuwCkuCjXkh3untxH5FkEwmwBr3MxPm1P",
  "key15": "5JAoWPNEb11rv4mVkvELBGKJ29mBtSAmmRiWm7mAPBLETVixiBReozE3mbn5pe2LV9USjykbHuZpTbo84gZKw2qr",
  "key16": "48AGELxZZfDudvYbZv31QSUwJMuwynWRjvgf7NPYNmfCHDstnJhzJsvypQxNvWn2Qr8gDYR54RgNtPbajxh9Faxs",
  "key17": "BRnAP2kPow6XV5h2uxRaD2YHg622Lki4HXhggK8MC2SFPLXqJLDSLpgCq94DS8eXN7Mg5ouVHX2E3EYpeuTVqqD",
  "key18": "5yAT2wutDUoHrnmDKYDBgqtjcexR8r9UXKrUtpVgF8hH6YLNxQZmJCtCtKnedT9k25umKC38Un5Kft7upgZjweDs",
  "key19": "5V2D2dKauKPjFwTiciukdssnDsqoTsX3Y99okwPgBx8PCsJrAVd2EXHJXdF8vMQH52RTg5CSdpbipyjWER52qafk",
  "key20": "rHvJ5P5yKLdmw8nvAJa9tunukVQmBwcDQapJcnA39k6sd2oWDh81pKE7tkTsfTD76CHz1x3BMsyTX4Bpmzd5XSQ",
  "key21": "28KC3ngsBWNJmDmJAGVDMcphzsrNZMaAatox225tcEEHHSXr9YY1ygd9JV6hF3HzUPgzgAZfQYHBPfbqePjPasZQ",
  "key22": "5Fd4Ya8baVuwDBWXaWj1HfgD1T1ZFUH3u8zcHcMr1VuqWfC3ao6GdZEHokHHQqiHaubhDXATmnopxxTg4EwrsEHk",
  "key23": "2uy1YKMsbcxvgbboK7xZcUJabEQiSujQVMTBL7nxwUrHZEQmZFGCv5zyd3qSFaCVyYbPgvWxSWG4WorSLYFNd9pq",
  "key24": "5TGdyQU5LZJduP5DZa2a5QWvoumqsPVvfDBKdgpdfsfg5gxPJGJiekgA3CRDC2GVyDCtogh9Ejxy81WiesKtmi4q",
  "key25": "44R8rnNMvXHswetud2p1sPaFfd3btCzcGzDUwxCNyUUfWr1KPoGqZX3M3FQL5yyrtWdzbrCDcBZLNWHrRuEcVjAf",
  "key26": "2cmAkpf1DbVAANXMz7zfp8mxS8SKyGL6z48Yrf1D1vHfLTeiE5W8Dy126yBLw1exTLdtwvVHjmFKzBXyGbVuXBsV",
  "key27": "2fbr3Ry8TU81cughhtv7z1DmeYSwqH4XkQbJsT9rsj6U5W1Y41bVGD9W2ttZBnAXw6jxMfCaPpKAhdiPSbmePkkk",
  "key28": "2Crm1ao7fMahHg8EHjfVi1GCbKRwZbiFCAmyvD2A4q2Rd3PMMoG4y1Yq64Zf4rj3n5ra1KQ7ihfuSpebQoeFtv7t",
  "key29": "dqTC2A12zUUrP7EWJCCd8ktCdVCEh3dQHCKoK6QLUkQ1K4JGrMVBeb9nX1YjyDtSZNB6nvde76xsFMDXjLwkyQh",
  "key30": "BTJkdWULySS4pD7gytaDcucQyvSdarQGgNY3GdfjWKUYHwuCXiGQMuYeAFjLjkb4WQ99pZ59bJucGZJwnVrE8pD",
  "key31": "4QimVif8kDRf9rfZmwfoKuBQqgmZkH8iMfUTpLbbzbiwXXVCc4jgr1mcqKWFjtfk2etamryjWgGKUJ9xMzqk7sYk",
  "key32": "4rJ3vxtDPB8LNznm2jqeFtJUBVvrqy7Goh5EVKnen1xSBc4SYj2iM8jTAWSwGVpzUDZfHDCqu5Mc9jNnNzELRhFR",
  "key33": "56hRXEmQUgrKbB22vfTaAg8hL1QPWVVLQh3Xa9UjHzgmwGjW4ygURJ3PMty8pr7MdUQDYZsxyrW44L6XYJWB95rW",
  "key34": "4yuTvAcyD7A15QN4XiDBUuUHDNCSL4oS2aYDsfAnfqJGifH2BzFJGbjJmVzKexzhUB7v4oS2qdoZRM6AaDsKVZDu",
  "key35": "vLKnQ1yxuJnS1hi8yxRKLBoVi1oHyMLzzucyHioqQbFbkMnY4VNYvarb3k1PvS528THLKNghAoorjfqs26CriP5",
  "key36": "4zvVbXSc3N4q3zNHTKmfrKpdKGWqjNnehpSHaYdrEpJFftSfo4GHwTQr8Apzm6wEFt6jGh43Rs524xkXk8Jf9n4n",
  "key37": "64yztu8CGwTvBavXFJNTXMBUrAhsdTaKTCnVqRtV6NaYYWFPTpVoF8oQd9Px3QyMsHRakpHycTBTayGVUtCuyRKQ",
  "key38": "HRPrCvf5raGFs3MWjknPWuzmfzdADUDw1evuJZiqv6yAxKhZGnmXS7FGTGeek43GWGZygzDnYRyyxcnfruFXnQz",
  "key39": "Cj5ijy5qyHSP3NcAx84E1QPR5kDbTR6Td756kqrttzbQJ2HZXqhaLdETNAc9cPk4Kdx5vNev6sWVGggiH4JxZgr",
  "key40": "bUkuzL2V4z5BmYH1G651dK3eEcnKhsa3ZqHwYcCGQDP47EPnZ6oyhenZsUg3cKRkSta5FfwDSJUZSzLHsx8CHnn",
  "key41": "2cYTzHsEYoAURDxn7Y1RECRw5Xb8hYo2vbWCH3WpjN93fGNBTHskoA1wv2GtJrf7nLffYyKpFUQFAWmrv5Kexgzg",
  "key42": "4zPMosA4xT5tfBWuU8P8BXW5jgivD4q9dRoC8QqyZ3L92T3TyowDL12CBJ3aAkgH8cY74CMak1MBB9BiRkJS2mgJ",
  "key43": "4TgSvZU9Ndo3RYLQQwzZ26EdqrN6stUhdXesLg73kwLHxYC1vwqj6xdFmYVbeHZbgLwzZmKYyUyfQkCDtUz68mMv",
  "key44": "3hoCkXMmWchFiJVswqJFL7GFZW2fUCeYJvkbPWW5yHwJmsCLExpjJxPyP8KSsebUzDywLurQWZJhNY25uDwVWx74",
  "key45": "5hZpsVbtpbETdWV2LiPdMbs2vvQsW3JEyMR3e65ZAzap8TbQgqmYusPRxtYVnAvwDfoCYRfsgTPNYGZGiXBsDRkU",
  "key46": "5PiCir66xrBZ9wjzooAiTHwz3BcUKD5sKiFLf2mN4z4Bns8Zkw1ReektToDfUWuahVc6FkKLVKhuJFoQxjACAQzc",
  "key47": "2T4qLFSJ1NLauQpJQUwdRWFrQqXwpz4fx82Zn1WwNW5NRWq8amYu5gKUzWUB8cCdZXgm4sronV6PqKtvDg99gahe",
  "key48": "wDncFay2KUWRT9VvEXSwzQWkGXNBZCRdsdGDTSdDts5xdttq2at4isGTSsoqKDpG7jtHh9SsRw56RN6rVTej5FF"
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
