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
    "23MPHXgMBbwdVokLNWfkMMLGM5hkLK9fKHAdaCXopRoUNgZhFxRAAuaDy8tvrnBg32cyJSenzxMb5K4fAkf3d3RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqeHazdDDqSZwRWPJa1LVx9kmQtmb3YhqBS1Gr4GpgPv4YyJnq5nL5qxFnGKSNxCPnFDmYaDUyLcwtZ3bLQbs3X",
  "key1": "swQD1awNwuMsToEpgeiJffPRBtG9sXJLwL2139zDxj58Yc14rHv5uupb48Vu79RsGq1dvRs3L4g394vcY48Qjpe",
  "key2": "JfBgwsWVpocF6DbhChq23dyU5ySDifEB3RDDRzoA2WpjsFh63TYMT2poL9UX5K2FXzuC5ut4MzUm9EEyeTC1Ltp",
  "key3": "2fu277kfdwNniv2hG8gH4FMohnMuTye4MoWhE6X7dWxRV45Suhc7FqtYHQP5Zvjwx8Vc4cbwunUSFRHLYwX89NnL",
  "key4": "3iTTQEsyq23LgxGYinnQj3832cioUDojxaPmGWCJ1xYDSPs912JQPrdMq14GLyaWME2mfHYtppVvV6wMQuXyENAH",
  "key5": "5rccdrGL7w374fWKVbKbpLbUk3djcRJBNR7nyqcyjbAuNikotEkBjYLTR3yhDxsAeEuVwM9Dg9W8KRB1AVfoQjgw",
  "key6": "5GmecEZxFehC1rtnmyEyqdMxUCL7uJ7vDSESiauF9hcL56RwmrWcNedViQaeWCmEzbotTtQxnP2QYB4GRGhosxxs",
  "key7": "3WZyNRYG5UzM6BjNkRcTm6ayDB3sZmGsJeeXEAcLzbqAkaEqQaoL7h2nGzhHmdcBTAWKwGLi9PrJPCVV4CXDJ7eZ",
  "key8": "5hPBRs9jKiMSrGKArDPrDBodXexkoiP4vGXCAJZ2veVC9pXBDTtZUzYfRC487Z6MkWH745iC8HBRto78DhEz6kzA",
  "key9": "5gbf3RmgpuVS1qeEu5zhi7PyS7SQMfQFryBicFDmygt3CpCVF6C5HwCK7Kb2SyRZinufcMa7KYuqxhxsxS4QcVCu",
  "key10": "2g87iWFUZ97pQgCHV4R6FZxtaSEiyBPuE26FsWeLoTrBZH1peC39C5oyHBad2qBpH79GUJJswyxbFJrWtjCRwmaX",
  "key11": "565WQcytV7mRV2ikFA1tHTjqDJxoJhtDowa81zZ3rPAJzWRT3npx4tzjWDmjyu2vpQkKJL3DsgdgR7TRnLhDSFJi",
  "key12": "5sPP6kBWbrxGCAavdtbG7RtkakDYZvEDJDoqx17X1K9cGnmcWtTEqRQQnsU7MVXaw3TVheqUvEeAHbwPy49sTPtt",
  "key13": "2zWxBVxUMFfPBFsTu48EBoZXpBqdfnNQUbN1yNBY7Ai1ccd35LNf5N6CGTkje6hsWZgeYG5NsHYhCN2m9XdLctJ3",
  "key14": "5VbhpP3mw8A9Y3ErkJcWa9JtjBjZGo3z7c6afnADDRpwgvLCbSoETXe4CbAuCrhhCV74utmVxbNLxkigs74V99H9",
  "key15": "5kpHwXHpUsKugCZgET2k8BofNYk7Pw73UP97qDysYZJj4qFYV788ArjA7SfbfhKKwp2pFY2yJMepo2UAHZzTLGE1",
  "key16": "5pUeygZH35SXcfW5csmTFwzVejatYfE35PbnXS9PBgDP2YPGZf1T23XiBoaDdSGQT93jCX3pyco8guqcqjKQ6oGx",
  "key17": "4Aqmo7Kcd4KvdT2xrS6TA4guf8YusLwCjEvjHSz51wGbpMLZgAm7ZQbjgwCRcHEMMSUw6BA5bH5uuu9brkXLdK4y",
  "key18": "3W3ad7SqDdRgzdko6ED5J7Gs4HRn6EiPtV74pMn9UndghmtZRQT6SwCbDBDg78QTUYgfZV1FFqVkEwqjWLV1hHF5",
  "key19": "5ZUM2yNYu9i4LF29DqFLmwzbvRfmXuf7qeLQDgmH4MKVoRHWBFrGnrWDnfWc9kFN2RngkemH6a1h38Hc32Cveshc",
  "key20": "5X6RPQREJ6swPUiu6AWSiNzSaJouoAwJXdaUnji1pmByy68a7j5JyrgCZhw3VWNpYefPAsC1F4pKrYhRj7F5hj6j",
  "key21": "64cgy5WVAcZjv2up8enHgmP4df5VKAk4CRZbjHNGkt2o3to3vNoUGmhYGTm7k3Qdr5C27GGAWWGXDs6CdRLXnYEF",
  "key22": "4YEE3DnEjKd63T3k4nTBPMSxvg9aFCn1QiYjuxfRvE1j1Q78oaTtuAeB9NTNodpNQeGFuYQP8WZnfLUjRJtfgQjF",
  "key23": "set8yJoGG5ccShiwWs7BjMGUY9H1Tdo8DYiRdKLdMSFAHUtgr436Wk58xZLLacZYP5sxhemRGB6W5xCoV83XLPn",
  "key24": "GBzzEXKRYT4jWEX4Kdr9VRnSVtJpz6x5Y8Akf1XjKUtVy2bXV1eBgY1D99vmJtjDBnVwSdqwhRun6QgPSHu2RcY",
  "key25": "63tV9Rz8hG9orBdDtTDqjVsng1L8TrEhuRcsecsx6BBxQVyi5qSq8bjWPNLMKubatjFMi14GWpQJGMCdGZ1KaFQg",
  "key26": "449hJnVNpA6a6ZiMc7CbTm2jKombmUzR1vL3AyJ89urYDSCZVJ2tRZK9JV3mAzaFkamWcPD9CfvzJEsxynmDHn9V",
  "key27": "4XamshHVWTnCjpBdfEkZqYguJvzJQcAsWnjeowZzPzFGv4v3WwwN8twhKRpLVwBL5W3bjnqJLknUC3jT9FHCDRTd",
  "key28": "5yQiM18JUoreSdq14YpyvJiQpRbKxapq3aRaDPH1H6nwQVrpqCCoHvsijhVTCCQgDKjWs3zkDTvadiWXZqBJRr1T",
  "key29": "3ACoE4yLaKw9zWTCBYrBe9iUwuEpL416aM1zy4LZA1w9t7NVPWMd4WqDQj8mJzkfekTQamZge5hiS8U8F3w3Cziv",
  "key30": "YNp5JPcKHbsq8EyPZc8wKg2bxUY1TAEQJs8pHiCCF1im6ZTic2bRtneCSuSJLjy2aBK5F6DkLzyDY5aGBhoebA9",
  "key31": "5Bi6pujurKhd7A5aMqEnN5M2j75Grqj71XRG1CJgDs6Qd8jp7SDgBf6sDeWyGqZPkQute2yfzP9aVex8hshJPbME",
  "key32": "KSaYqbDG1jF1TMULUFBdpWLi1s24bQ5SveWLukb8JFKynpoeU9HFgeBm2CX4dgVJBm8S87xemHW4DWeN6uAt4HM",
  "key33": "4bshU22gWmzc6uQsk1PVUnmKZhCeRfXxxfKKKyDRbi9tQTypJRA6cq8pS9q7MW3Sfjs6pKEoNc12Xm5EXXGBKVw7",
  "key34": "3t75FF5cR6DJWJoHHZbgDG4nibKdfL8mv7Jqc21Ps7DGtWmc6vd6FkfNdD4Z5o61c4vRVDftMnqEnwxfLxL3bf9E",
  "key35": "3TEqse7qTMypCSs5uJnwbQZzY7XUNhALK9QepdA6Aj89vXMiZwwzRyoBD4mxkHfA2i1Mxpna3okGdfXZ2ZHjfTGZ",
  "key36": "pB52BCRxRXq4iaL3jPsaDursKkMPH7Wd535CVyXvb5bFhk3tNa6NgWE84R7tsnKbUhdidKE6S8kg7qKavXgmUvy",
  "key37": "2icYNeYvdAiy7VryWkS6ddPU4hiATjzfQ57rmPczJA2g7sr5YUd9p2pGFSeKhjQhSZdaGbxG8mJK66boC7gnrwgn",
  "key38": "3ruMtvad6oSXfbx8mvasdCup74cHzYP9k7NZZhWk9kYevfvheVnSLLY2QGNf8EgoQXxech5gg4vJXn1neuAXrcYc",
  "key39": "2hG5hFqsqkWS7aasbV5gFVRFujpKZy3v35pT3Se26cm7RhwX7QVogV2c6r9ypczedp3pAFB5ZBw5VrW52dhiwVD3",
  "key40": "4zaY7pEXgAfngAyrCGS7riNpLv2rYpKp4kVBqre4AzgSPDfMKXZNyB9Pyp7bMnoin355z6b4vU3ujpLtVapuTzeb",
  "key41": "dm8TyxAwCoKZzxhnja5x9WpM92da8iU1gwYB8ASeQ5em5YoPmSP3TvdhzEfNqf351WQojWZsuTR4pF4rond3JCU",
  "key42": "5EnBGpGkZNaFYkVAZXx2wK24RVLHtbWdxQJuhSdpX6fSP2Hrf4A4F2H6cQzWRZBusRmwmsxLKQ3FBzYQLcBhMp83",
  "key43": "3Qie86HCQ4FJ1Cr5MnaJgKHgV135HCcrihZ3fLVMFzVv8pPWc6NrBCpTp3UNuvTjGiPJege1HLx1P1rfGKVRMVxT",
  "key44": "2bk3AWr4yCvS3wRuzeR4Kpz281pzGcu9XXLb85ZnHhQq6av8KVJdCQ4DPaS8HKtiHs9GXoXT3QiPkEpgF91yBxYQ"
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
