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
    "2d9ueYu9rvUpcCRRGXg7xTZ64CcRz8h3z7hUsRfijZciJrjbV8pEn6aHyAsPfYXf3mgPoPCroGkWhsFwu4MeZtHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tB4rVXfXkjNNky5ZwMTLxNDSQMuypJuDEY4syCZcNqdc8wnpDb5UZeH7LNsMXv6yVLfPFMGvwCngBwQF8NvXs9R",
  "key1": "4TmEgK9iX4Ne6MQEMRx75FFpUEJYHL1nLioj8LTk2whoffCvC49mads97ZofPFz9iQ3oPBsZdUevnujeo18RCZiq",
  "key2": "2vhLrScj2kUxPXGV2VWEU6o3bx7TaxDQW4jLwhSzQh78AWrdZS5i2fskv1FBkdtf38hBGHJ4dqE1xVxDVrAwGwjK",
  "key3": "5k7puYQfHShVhqfgPSzi55SpmWsP4cWBTVAoiF88CEjeEYLMV3RGPRShsq2LrBVtbsim5HDm5xhfTp9HMAabqhg1",
  "key4": "4pSqdjf5GJUWjMLsi6XuRX3yNBRtvwTtexooG6Qz9hT9MFx52qRLpsvGFSn811pDWRBwTY6iYWfVuzjt5MxB44e5",
  "key5": "EGxxQUrsBwwzpJ1aprVK7zMsxTxhmQ567YtpTmtVpfKGm8BeznT26y96Hxrwd3txbe9hxo8SdRdKES3zRRXgCVA",
  "key6": "4u8pFfH2E6BuN3kPjmKkDowNhUDVCENAqcnmhMa2CnWMLQUnesQgv45GqM3BPsdTrUVdr2U3KsptoJPRhAtz8Q3Y",
  "key7": "575HV7iPB2mws4kdaoPpSoPzJEtbeGbYw56C6JupNYouP2ESoAFu5r9UneRyTcCZJTZmah1oTjGzCJPJsPmE4G9a",
  "key8": "2yvtGgm2KKAQwvjcjyytKHkvJ8PHsR55ezemhExdzkk9oihd3k7PHMS4hPGHTck6cmp33hqejWu4RnMkpnF4EvHA",
  "key9": "5rPeJgGyqvQLWszdHE2bRcaML7ZC4NBou4DdqJ6XCz9utm7mGZ6cfMmyBYrrRjRq3FJ6BtU6QPkoXnUzcMbNRX5W",
  "key10": "jJJMMxxDKuFWqUZpzNJW2MTELHjrJrr5Pvn7oHqvidY8AymRQfznBD5TCCv6NQ9MbWu9FaHJazK4jtTrLCGLABS",
  "key11": "2ax9mrS2TP7iigK9jo2cnCG6nRcrCjFP52nKCFH3nuf9juHGUg3UadGRmVhSnGCCFrgT9uJbPZmCYhfuX8pDDSt9",
  "key12": "aUWDDdWXy8b69vUZgYdAa17ANMYSYgqqx6nRLPPPKm5rmFvN9XxtPNm6QeLYaYnofUQgSdnCGNKWxXFCVGdP6Wq",
  "key13": "4S424ekBCcAfep192SapxHBPGPXZCcpgHrEmjZ8UXb1cvEbumHjmAZPwQKsgjsw3wHnTc8qsYWTZ8KStGxLrgBeQ",
  "key14": "3NyE36vHQP892wr58yxgEhkzP3giBis5m1XppTZ92dxzX6B4EQ2tzqjaKobFPDNxWedVMfGuoG2wsyfRASGPgLqZ",
  "key15": "5D36aiRhJQpa7N6TLKRyu49BebmhAxG4D3paWSgaEzGzkfiSrWdmn9n5UXNpWp2nVdM4ECtpiU6X3QEKKH6yULAG",
  "key16": "3SQgqWHzLVXNcyZJhgH7idvMMQ9xZYm2PpTwN1zvJ6iJxc7exys1BrDkSJSDx5sM7sFBWoZxFny5919QrttH7zVt",
  "key17": "9YMh2WgwhifYexhbTQQpghcH6b3BLaBjFC5eiJwzFQBKroPFat8MNASLGPX7M9c9LuCGSKqVu2xqQAix5zQ2pFU",
  "key18": "4QUiJUcWKFyGLjcQMh4Ap3cyrbdPJiG2RdsdD3NZcc5ys3ZoAZ2pbsGSNbCy85PghzBrAvp3xwKCS2UtRZJ8FMHo",
  "key19": "2kfCp3STKsM8eFQSG9tdtXq1vb3yQzqepHYwzkQELSSvg86DVw4Ye4ZxSuiy6x4Snh5k5jXT1BKPiPmrCN9PPGu8",
  "key20": "MgC92sVMdTWrURpEBm7w4zXSBQRYJYuHcZ1TajzkoRjr8CeQvyrLA75UDKqRL8S1H6shBgEGPNz5oNA2UsMhXJv",
  "key21": "2ghTME2LYJLHT7Ygs3tUHT9xJJTTZTaNnh1T5iTg3NyvAWCQ3KUD1uupGA5Nqj3xKwnHx9aBdqWuSqioAHAnFjPR",
  "key22": "26H8QrztpFW3bgGfYENtuogVRjpjByPmqrBZi9pnDvSjVuedzijtPP2CZg7JMWACFaoa17U1TsozpVvBh3Wopxi1",
  "key23": "3d7U4JvQ96pUe9s82htuYUm1afVv5XZbfBV31zvJdHyQnXnvB5ULWiZRaKqhToKQ6ZzmSypi3DbCaMEeJ2d1n2rK",
  "key24": "67J4ARrgyqnVE6jcYVRVof5TufKB85wJZA2orawySdBx2ntg54ZZuddBw7ki1QaK49RhQTBQbbSWA7xcvN7hCnZb",
  "key25": "3hPjEaZMQp8FFHr8RjLLXDYhYLc2mH2YS5Lnpo8U2k6FGyyGyN4MzP7css4YR8SFX2yjicMsQ2bK8kyhK8jnR41y",
  "key26": "3NcYpPxYWgx1Rb68743ZmhUSJEdCsKJ1Bmhuv8E3sJn5jCY8vpoaSpHTr33HswJTHevKKcEeSVuu6R8YRnd6Fon8",
  "key27": "4W69e1pb39UkSEdP3v9nyh8jckPruV81haz2ynM3DK9SkjrRiqhQBcJjcDBAH9j6vgVKebsztfhc2ugesW4UX2BP",
  "key28": "4M2n8JegGWZyCnV3L9EjS7scmxfTkuvhkCcJn5Ssw7wtKcNySMeLFLUiSqGBuvGscr9Fmsz65nbgB8MJB6ZjrwA1",
  "key29": "254b9kw8MkNNmPpVih1rDPTJt9Pc5LmCcBWZZqTEQRbp5A4JhYa66dGzBYJ6Z2niWD15cdj8Jxeg4HnbU8Wxwe4x",
  "key30": "42Lx5frdHVhCpeNnuMMGEC1DVBscXrCfcbdoUnwgXunMwE3xbdV8eg7U1owMgZcJnSoYaEy34FL6VCUYmVDyjoYn",
  "key31": "5psirSrkNkgD3bHuMGtH7czUE9fRnYnxGWYukfoCDC6pSypYwEzSHisB6rxvEzprauCYYv4S8ue2MVdycWhNmXuV",
  "key32": "3uqgj6jXCVAUAw6sZ84uUMoeNTcwyk3PT6QZr83N992tffGVMtszxMSoqw4o2AbmyUt8mzgd78eanuBbB62mKTbK",
  "key33": "2bjKhKNwS39R1tQBqeELtzdXuHBSav2AR5LSC7C38V2dSuSVhtWt6G64TytVeyhNXw9mA7S5d9CfLtLdZxkCAM3L",
  "key34": "4PEkQ61gWodBMBjLc9yVr8nkjNZkaY9DK2zmue7urHTuFeVyJ558PwAQSAG9PewteVPJQiCiUCkhA2ADx95waSbH",
  "key35": "3nfwRTvmbwXsFZRUQM2WRHpDK2t8d9pHagBxa9ZfCJUUAkHLsB2i3jZfdCa1sYCUqpRFwsaEcgrcf3WJMdGJBNqK",
  "key36": "49CqURaX8S51UW495bM1UyWRe9pPcPGubTQGYkqzScJ6kKXeh1RwbTfXVTrLhsdt1J7LeUygnmbJSXT1zTQyoFjr",
  "key37": "239YH18iHUBLRXLgGyMZvNJkvfKGGicSz2DVyrRFEgYynSptUZmLCezDCp5zEgQqQNCYkHX8jgYnDUvJoywbM1DF",
  "key38": "3uijm3sDcyHttWGcsDMJmsAjevTxZziNjdxfrHx3jdGtQ1LLaRpDRrP79kiw57S8MN1aMTiKWiyr57fa3a21q2nU",
  "key39": "7BPdvJSZ94uWNR35sqEdCXuwydHfdvYhDuZkZNun7UiR8u9tjhFBtU1GQpB3o4qLPavDfMSzCNUFUArJKJvxxhc",
  "key40": "4zMwLBsNLMLaiqQGUaNq7bdmkUQKwG6Zs4rCKG4hwi6DC28eXHDjKm5wQb99fLJ4uNWVSySsbbaWkmRsHsRTw9Ln",
  "key41": "3ruF9hPhf6CBTTWMmCbDP5SdZVoN4j2uAjBuuqwXX2bdUMH94b9pVRqYFa8AbViv3dp62YUNFRoWhd7s4iyV8KsC",
  "key42": "55aWXgyZLvCRe7J5pxKmXpbrPsBKRsdEUiT585KuLGv2SDhma26PjN48f4uhdFUpWhusypHkxpyXx57RPWHBb5st",
  "key43": "4xQzXqZ2LmRY198YYqesZg1nrEEm5v6Q7SEkAjkGsNRHm3g9grHP2nr55Hu6n2huN5VHsusZEVfCDZrrAXGaC1G",
  "key44": "39ZNfNBF8TgVvzviGoq2zpbSyyXKwC7Cxx6CtQMnAfjZ7fhN5THNRW2gWMSgXyAurnV91KYmG5JfMjn6hD2BeJCd"
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
