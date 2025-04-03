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
    "3nHDxwc21wrRC1fDoWksUyAcFd48tRZry553p6Vuq64my5xp7k22Efu83vBdUuLSNGc4MiPpHTAGqdXqx3FXDRkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYGBze8vxUi9xAFdijDX71vtn7pAuqDApZznvKNdum4a3jhToJYam336vu6twk13bhBwT66T8EmN1nJpVu9Dxv",
  "key1": "vXrPN4XEy1ho4mtitAzL3qDv3H7G71SHDVS2uezwwhhcmc9Bd4YWVT3VGp52FRrAGNenou2yaYLhA5jq6tB3x6U",
  "key2": "Rw7qeMxj26BmyDNT6bLoamCVNPHz6hFwrWqbbWs8WiTW9jnGak1SbA955VWVpR3oHtToVzShHAKgZ4V7rjpsrXD",
  "key3": "2AjfEXrycgLGivJSNWrTKkSKnur9t9fcQUqLrTAy9CYqHuR7kPCwvZQPaCm9tUci8yyxnpVExYUk3gochdcbx3jw",
  "key4": "32oyrSVB3Fbim2NR1tVMHNhoN9o8M4jYLZtXU98Vr3CWLZVsZKQoefxS2TZaeGxcNmcGkRyneVnajuebxyp2rGR",
  "key5": "2CcZy34bkNSKKEc8sDEjm7eyQD4yS3qdpPRCMq5B2M48FdMs7La1cVqrJdmcuqkuCCfzWGkPkqAUq3cZ2S73cNFa",
  "key6": "3RkmJJeB8hnog4uYf21r9iDTnGqJh8XfNnkLnoQZEWi4DpoepbHhgj8aPyK7bTxsZA4NibDf3qL6xgS9VqqocD6G",
  "key7": "pgHQ3TpX99cQ92u8boTdivEjvUesVa1bmM943J4PUkxgwBEcmL6jw2YBnCHA1XWSPLCmXs8iQepV9yQJW2dbk6q",
  "key8": "WC5aAYZd4LSyvmqnaXizz47Bw3AeKpPSTpw3sKMnitxr1cCvQKFwDd6Ru7xqheZmk6kRnkgdEekvdHafURqw7ez",
  "key9": "se6w4n6zrwCEqaS2tHa8vY3G5X5EApoCPXtpMU3AEbNs4QH8VD6jV3FSeYeo1beb7dTKVP1fLSqverjTBmnucCh",
  "key10": "5Wyw8qNWAZcgUfwvF7Lp1JF74ugYVAuFJBSuFHxu7q6QjnNotURwWSyLCf1KkqQuu1qsMkryFs3NwgeBtVJYVtwa",
  "key11": "4NDSUcihD9hNwnPaiFGhhpY7UpSmPFmaEUKYcSavbKSdHtkP6ZJf8PMq7iUq1v7yidLGR8t6Rsvert9tkHsDGMpb",
  "key12": "4Sd9XQJgsJDUfHPKuo3NqvBXee6prV2mEkYG5s9BjjANqVNZ4vXhCdAQeo5UEH7j2GFyAbQCwQdu3Br51YeCtoJw",
  "key13": "49xkjhPaSvHjhb92RS6U8wqNEpRzTpiXM8WXSEQv7L87PTbKywLGp3D8saYMRRzVSGFaPqgDNiNEaGSFPBzqqesN",
  "key14": "5kjnHFDoe7arerbWH3ceLWLJreCQKa2DvN8RqiCACAAzoRwsvt3ggMQwMJkPxnUCVq6EsXAUmUHuWPxVDhXqJK9o",
  "key15": "4xgK1DqGzZ9gPH9CCCWENKCszBGAXi6TD7gHsj9eA7JiYMxWDhCV8hz9kbuC7KkMuJyQfyDDYBFLvX3QxQjbyD1X",
  "key16": "5hhWfso68HNYJDtJBspzrP4xqUAGmJEgUL7mz7hyJoSULn5aH1noKsZwRrsTbafc6RKxYYL5cHMDJnH1SGjAozw7",
  "key17": "5NwgvnQfQoE7WuMPTzVKET4weDVFtVAZoAimi7ahBzNqZi2LXiinKJDB52KNTYrm1hxwUtGkCfjtpzhkirZV94FA",
  "key18": "5n6S3A9pKsmFwTUGsujjpEwkbq35D4EdtD1piYt5r8qoHR4gNGaGYDRgLaWUXX3VhB5AWqbGyttoqfsemovV7PaM",
  "key19": "3CJJLHSU8Qw6HKQ7mtfTNdebvyNp68yZeXmyqXFPRhd6cfZVJzpGMfSigd1pMLaZDCMs9DN3gJHUpRtvXBD7xQVQ",
  "key20": "5yVDhocgAnsC3vLmVJbqsYUcHk5ufs4RNUgDS3jjMtosqoKQGPRpRpgVfXec6nBCphbvMVJ47pV8KDgiJ6e46Akv",
  "key21": "325wYYPNMJSzVYbxoL5DPtA8SkU3UkDStWpa4GVNx64CMxemVgoCTjAFth9cT5YDC49NQrQsDsEpaVfRCgNKBeUU",
  "key22": "uAvHSKNcQ1z2a9BJVpKF2kmLjcVM3u9D8AGAfkd8Ub6ni3fo2LT5vrtaPKCAGBdNWoWxDGJBFPjvmgWPuSRgiCu",
  "key23": "2rs9cUvJtSg3LusWQcCskTaDYTShvSc6wnBcJmJr9BDuCERuikmzPdwrq3sBvdrMxwtuPrU7n3DPSgG4MA7M2XJc",
  "key24": "3wYFzUi3ri1ztzxUvwsqCzyGb9HzsAcku3Hni9qJRt5uh1LBtBpBRX73ztevhwUZzWTcEeBoB4YmRRsd8t3yKKFH",
  "key25": "35sr9ucuLCMquQDJ7kwfn1uj8eetCwXKnsqERpura2Pj4qYkeGC6UKT3MoJWSUYLBkbv31jSP5pDGM1iYxWQ5xGk",
  "key26": "3p2iEjM7daviECn6vByigcxGSVtaqfSzrZP5B9kQFAs6uwMT2nbQPRScTX2WypQrFfrPRFvWiJChNbYQ8mSkbQci",
  "key27": "2YQqm6vp4j4D8M9A8SJsXSoreFa3QCa2E96RGrTQK3GdhPVaYtYuCjdQi7iJmdQaSs6c3rFeLdYjdseYD6ee3TRX",
  "key28": "5EAdA9HC4Ke5YvjKGRAwZgKDnFU8FPTNCf2fUbyCG2XGUL7kgpzCKxTBWaKAnasgzuhYSTg7cfiNXtpgJhztwHSX",
  "key29": "HRYWTD19rN4rgHJKsvzgHcLbG1sFZVcNU4ugwXE66JdsMdY3XSjVAQx42FTsK3mbw4aJzabrz6mV5ei4AkLUrM7",
  "key30": "54zCWJRgU2pW8cwHBXhtaKkGf5NHNZRsJFkJxDaAD5szowE3b7aQpYAXY6s84Mq1xxW4X6UXg4kUccUhcChJSsmj",
  "key31": "4Pr5CnZJp4QVSpLvZrZpJdwZ9DL2u4UfRmNHDVPZG8qgTbrzqgUjjF8qMmsC6ciKZqhyotnpDf5V4nbSzS472Czf",
  "key32": "4QD34wWtw5dYKAYEMA74bpT1miz6zHf9XPThK8YdwMFmqiwHu9rxjuVA8J86UJ2qsAdrwBEc8L9XXe8sxuefLk3R",
  "key33": "39ZVviUkKZyLoYGTKnvvPEXfQdj7vReQgNTML46AzM9AEqw6ZJJiCsRQRecYe9An1oKgcLMtMgycU6Wwnxy9wA7y",
  "key34": "4eVGewSUfHstEHMf2jsr3m2eYD1CjiEwNMsQER3yVGdxf4TEjFsJT4PM4X1Z81dc9YfebwMEYN6W9Fj9QpEMLxfY",
  "key35": "2Sypv7SXYpqKYjkj7WCThr8vhWW58c1iAHCczWc7hrxX6cRvRNFioks9XoeGr5cfjRcULjZ66HEKtGiwiKo1Lfq1",
  "key36": "GsdsssEEoDmi6TYhP1YYTuLGkurMG4TRbhyJcMa4yh25q6aZytmdhKdMfx1pgWgdBk4S9dJWRo5iYJsxLYK19Wo",
  "key37": "4p7EM9n3rch416w5KhAnqAePz2FtdXwLGKommccEcno9q9URxdesg4FkZUjb29C9UGT6ZAMwHEQ6Xwz9Cyj7zybQ",
  "key38": "4vQJUjKVi9piYbTC2kX7YQQDGE2tz78Fct1vcszJM2cJH9usepM6Hqv214mRZd3RjQVsTB7VeqymGGbfK5SgSLdw",
  "key39": "4CGaHPuZs5nRoyASokNTMEB2KrGSJufk57WEkadWT6tR8GN23EZ6K1R1NTKExixA1Szxk14SfSq44dEedmM5WWPa",
  "key40": "2hWAoihENtQzokcDa2FcXv5FUmkuQqkRBf2NfWX3rD4AxdsBixSDcUeBEqqY9U6ptwGtwX8zhWHLmHbFPeRXNYBs",
  "key41": "5ucHd3ShrCMJuRuc9dgswzE8x4TDRwa7QFFMGhQAFHdQie16xjXRDxmXyjASH72PBQKTtVF5THmChFFssi6omDzQ"
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
