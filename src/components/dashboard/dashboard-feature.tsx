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
    "4Cp1Wrp2iMPY35sQGL7jP3HM7js48SiESMrTJ5REHTLF2T8EPLRzRtqVw6T7B4zYfpe1C31CvLzWbFMGKepXSkQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnvPZ8j6ZisJsFZMamfYFZ4ewjNY63wL24H5o6mpamHT8gpxm3zBMCpZhPRYLNs2uk8SG8aV4WcZX3we3yPG8Uo",
  "key1": "3ETa9MrERrmbUF9XaBnw9wjkKL3KUEgYzS3fB9D78rgof6tT5UdvjguzB5trqGmtHzJhcPZ963WEoPjFjikKR5Nc",
  "key2": "33ivK46CogEQC2batZV7MgJM2rM61TLBKVPEw9fkwCNPm7H4aesLv4kMjQXZYK5j4XGLUdqbeaAoyh1GaXDf4xCM",
  "key3": "5shcWguqUcmbQABoZkfXDTrYoUt8fnwCte63J9XD2YLi1yjWRgnJktLMopSwQ4dY7sRoy6X9gfK9QZ6QuU3gj2SD",
  "key4": "538MsuioY1GfET1NMm3kZJEdLnDHQguWH9dLZNrFEmyKRbGEdDEx5g75jKZJS13LYi3zRsqMoK8GEc9NPcAkW6Rk",
  "key5": "3SHYKu5AjaTkEAt3KJ5eK4iRWteztDD3G3m6G2SUsamwVCyPEk7ZMo5x1tr1yAbTBp78wMCrzmUk36NyZHTkfc1r",
  "key6": "As4cfoAqC7dtkqYqhm2ncp8MzYkx9aQkQu1NryMbonQkAaRNnGyHgYTub29yzntqNR4CQg4F42hMDYTnb965Duo",
  "key7": "2KdG7PHDbvfG3SLu5yswPgdNMfRKC5hbntAwzpL9tQLaQhixAt3zBfHKBEeMi41CwvuJfqUWehGpYZwE57mhiF9D",
  "key8": "4FD6vahX9UhpqXxEYV592Mjjv6r1iqvFQZrRohNxKJM1YfDiKudVVgTyCepuppiPgShdbpMMT1zd7624PpZ7CxQY",
  "key9": "4fSUagZx4EeXdkkyGzmBZqHGeahWmJfG7YLbKcURHimUUPh3XnCVrecmrJiG98mPgb1UAsAkJ1dxjF6WMLxUCNdg",
  "key10": "2FdXa2r9P6KZFoE7kPCYCxq3E9m7yrqXsSpWsjhHGTz3kCZbkvE1xRKraa7jSYtm3MK8XiScT2h58ueUvHsZLvsh",
  "key11": "3w81dYmJUbPGsurN2yY516Y93SmktL2RsRzFHLNtU1FBeT64GjuYsM2mebnfaYvnbvffg5GwcKP5mrkQYPbD9LBb",
  "key12": "621KRUsnVZjeWTVhHyD7tKgJZnJB1eR1RTbPQC7EcvKCpEUfCzxvmTsCAqNTZXYqZ2vuguMeFLV32wfDaNdcYgaR",
  "key13": "2rFcF4DHSSmJMJVdcYcLNiBR7MZ54DBBewyTxomSRPtygnnWUvGo59FCXqRMo4Xh1eiuyS6dPcnU8nZaYb6Yqh2n",
  "key14": "3TJYTVU7LoQcv25ejbZtkaV355AMwehqm191A8DsqMSwPM82PFq2mWP51zQ6XishgJ8TwnaAsfBnnYfsqMb7GdJR",
  "key15": "reXTZ9ibwFxEM7UyVoSJNzSS9PhLKaZHpUmiHDvTeh84WFdnBz6anvM7yK1QTXTRzuXDbuvAnGnVWnvWv4mx9cx",
  "key16": "422ycpwZK9HqVjtxvx6CgzwfZ8YZcXsHUu8DWyGqJzXc2Z2tHisiPFCpZYRgA8My8MgYMRKPiVykiMx2zxDGGzfy",
  "key17": "2ym8eSgp6EUzX81d8YEc7WVdTHH3Z7E23LuivW6iSETzrAc95JE4oHwvQgdyWkTizs51r6AXB5PTH4ViAfvqWEXx",
  "key18": "2riWtMGdXVxAx8UFUn1tFsJNvgDa8SeFyxGauHuf5mBJXmxLnBQBHn8vErEa6SviFyduxgXeG4cYrZHCtjbgsHPp",
  "key19": "UKygJbWLu6ofZDspPB5r9vKzTiwrSthzTK9Sfk2UXznZgsBAUgfWxE2Rpgyrb34zZXWwSwAsS3ZFAq7XPo1BcHR",
  "key20": "PKxBNWhiCbyx5WFoH5EF8MPq7Q72Y1UvunqAn1rtGpDwk9t8kU9L3fJLDTKU8nygrtcXPpb4Twa2cRX6XAdT6cu",
  "key21": "21yZ6vPxyRfjriDh2A5MnkdWmFgwWGDotBY6VwoxFMTNvG7STweYBLTWjDqUDVc55ujq4VB3sH6Ad57RjyWe2z7V",
  "key22": "3HNxwdT4X3C9t5vnwCVbzokHaeeX9WD4KJds27cFoAwKMmvTwGdPupTmfk7TS9a5rgWC4X4GciktSv88t952pVU3",
  "key23": "2heMADTx5pgFG9Ka4dc9fBZuuCwXaCGTUK1k9aYJvCtJLGFmQaBBvRZBZhxeRK9DssnQm4TcmztPbQkCRbkLd9b2",
  "key24": "tvYipKkaBqZLvUecnGBNcLkGDnQPBR94QJM58J4sCpSoNd8vN9QaEAnaRaNfxyYp9uF6QQHPUEQTAuTXAYHAhmR",
  "key25": "2vDtZ3z3Lng9ahrEAoeuDpBgMCNtAjEWsEhaF5vPQsbA1crqqwf8j9UrqZX5KgMYB6cFfkYcvEyDpL85kvkSkibz",
  "key26": "4c1StdY2TzuwtUbCcfhcb2k9Qf9UFEzNPmtNGN2o5BXMmP58NHW4mY266rKpr2zFApGpYjvH5xwSgJuG18LeuEPv",
  "key27": "3cWFaRLPYNvJ2KDop9MxhZzGdphuedRLPWbj5b8dYbABV5TNTdMTfMkSqwWgUp3UBa7yHv47ZndHTEL1futrfSLD",
  "key28": "2baLT5euaCRrB9mCDut6mKGJQuoTzm2VaZ7Xn5QN157g3HSBWxGczUq4LeSVbF3ZZjZr59dPFUbY3pejpA3dcvFJ",
  "key29": "4Wr64k1vbKkMB4LvbFRC84uQ6SYPaNgt1ruQ5AVxEpZWUMSr9BGums58EWVr1JzgW218vSL1bhV1n7BBbWQVB2wF",
  "key30": "2JjrzfMyzH4CiTWVKzFXmaYSVgM8Vw4kHPXzuSZb5HjffQ3scM84bfja3FVbvWV8HfppynuPKvjAU5n8Zt7dydR3",
  "key31": "4NN3BRvE7f4qoFQfueMzx4NvFcQMRe8ak1VBSKz6rhUEot1cWJ2bKcYChDBhsetq5AvLZGnbS39rxQrPzEnNEHDe",
  "key32": "3QKyVKEEjErNj8pMMvdajNPEsEvGz7kNEV7K2nYUCNTCY9MPqUU91VTpZ3n89XysdMg6rtYzXJvEALMmwcpAQKrY",
  "key33": "317daofrmKXRrhX9DTj2Qx45LLgPtqrotrX8eCPerW9vZHC6qSDN8Yr4z6UmLFi6EDTthNsHKKvLMXDwwVWdMJSv",
  "key34": "21TAhWS1UHrkD7zB42GVSmdoeBcojbhzkhDMKueQGNTDJhVVY9TmRKPELREqJaieKz9VnAiQ8QgeiyZx2Knd8v1k",
  "key35": "2w1RbLkHh3x9ugVUKPF3sj6wP718zAwRWCyALaxe7NuNzcugnCNUunagRgn8YJcVN3TDg9GTR9Lza9jgHcmrCs3p",
  "key36": "3sqDapk7ArYdLECCzHYPBSxmipngUFJDvkq71bGM2Tdngf8FynToeLCL2pUk6bQsW8QjLh7cXaxnGCLFk4yj9P7B",
  "key37": "31eG96A5XDCSo8VUsHUgDXvf5RjubX8f4z8MWFQHJnAPBaVh3zqY2HDpm96YTUQKQnjHhVE7pXDyyGDrCWQQVL85",
  "key38": "2Ef4RS25bGtrPkipLE3aCezWKT23ebVtE7LXPadRiPWDwsHGRDxChbJcbYRwEh2XtLpp2U6UHuPnmu8zuv24zQJT",
  "key39": "2xxZ6GZ3WSbXzWKsWs4VZNHzCW2qqF4VZHCvEru6Z3BdAokF6yJpY2pi31kXkDC5SCdz6DKrSZg43kwxGUhdzAQM",
  "key40": "3c2iNmzRku4AUeKp5FrR4osnyqFWSBQJinFEEwSmWyU5DjvF6Ecdh4dTqEbzd3xZphKFHDpaeYqdx36oasGt7Eap",
  "key41": "666YFMnHpHDHLstn85DBf5tcq2VfSgmLjvE2zF8b6F59EGNfwPqru16y1tv6ay5FMRDRCigjbMGK1bNcpqUi3uSt",
  "key42": "CE11b9TZVAqzEYwMLkY5V6fZM3u9ACUe999vt3H4UPkkYPkyB2JjD7dcAA8iPNf5pB4nxgtjnRZF9XfYyP6XJw6",
  "key43": "3m1N3QxuHNm336MZgMsnjb2CfDsMx2jDD9XqommNPcWNbSKJkY3uam4JreptK2kTDW8xrmpVk3DSyqp9xuK5457B"
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
