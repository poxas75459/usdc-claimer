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
    "2kndQoRwhvsTZMBRggfwweKRaTSKtXiHKm4omaTuqqV86Z54S1iigWKqCBuhJJR7JHLsWBkNBaLWBkJqgCebv83K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZB7BBvL7T31hyeUHQBmJRgeE1CwazcdiXWMfGj3onyNsnemYNWL1QgwfQSG4nqNUYb6ZizNoz7AR2AwHoYW4EWz",
  "key1": "1d4GSLReQrn6DELrSybw3SvMfUn4itVRmWc7YKJGuYJ2w3pRW8MCMUGmiqMMBMK8ghbXd6GPr11mt4SPbWrtncQ",
  "key2": "2GmzWocBsZKFPGGku41ydVHWiVWWeqwwLuftDe98Wqnews5Z2nsBypgRaFFxMFNMuXLWxcr7BrgFugtgTkiVoEdi",
  "key3": "26cP3hBMxyDERpokVztaC3VSfcPAi7N3g48PtAZzjhMC3dXnERLqQ5DGpZhwG8aWiLAxSc7aoHK1RDCwApoVQLZA",
  "key4": "2cynsEiAzWsnL5dDxh8KwKabvP3ZWUyLV4yqi8uLMMs9MWbJSAvj3kqYQYmkugz3SVGGeojSjk9mVoqPKjiNQbS3",
  "key5": "4nUYB8hoUUyXupnHx1BMFZ5NFot9ZGkADDUwY9NGb2F4eU32fjL2zBRcoRd4SGgCkcJSUtHWGfc6WS54uu5xE93e",
  "key6": "VgX4rYatMKUZGkDCwU6b8LUdVJ9R8G96ysEhRQ6cZjuDLBQYB3EkcGyzGauLDZmrrm5brkoVYYFthR3UcpeoCrx",
  "key7": "2n5QQBmC6sVL2YDcguJNKimrryJbUGMEGPLwa4nQgiPSDapwPirz8Uje3rn99X1QPdb9pPDZdhukkfX3G4yQaKgo",
  "key8": "LAbNSfr3fme7MDPtMoZwewdcpMXaDMgHzKtorZsEwq1MV6mioDD6u2tC5Pq5v1WfEk7M1y67M3aPaCaKMkjo4MZ",
  "key9": "5jtx5451YLa4gCrNAtFhLEyW5Z4j7kUuxCsZU49g67WUxqFacTUB4vLUpysdi7HxoWXinHHGsrL2GN4zz7JTUZzd",
  "key10": "Exskg5K4pNivCi2fwfs3dnzj2qqvKEjkkSptxcPW5QE8WBR4KpqsJHKcD86rEao2pu1Lyen6yxp3WqXbe2r15hn",
  "key11": "3FhhcFdDDr4sfuLTVCn2rjWVPCo89fefG5YNzi2RRDNQEVC9H52rCMGKmgjiWiKw7uU3kNxtaE2etQHuHdVAdjvA",
  "key12": "4PhXLaT3u5VmLJZV9VX56DZA4ijSoBBev6HXWfLFCc3wBphSDUtCDmxcmG4PPZmoijSuBSvDHpM894DWzQ1hva2w",
  "key13": "4ydJivH136cDj81arNoDBWYnkwpfyfqkxHtvrQxxc2pj1auvXeNhahndw4kggDTjbWYhcynf1s5n84APGLAEKJab",
  "key14": "CTf96bnbiqLCigD2GsucZ95Aqngd9qpTDFgndmHhn9y9shTxAcxDx5aYhMCaLABpZYpcEtEK31c8jjkB5acQiHs",
  "key15": "NcuyVEsPeLWJ6P9Km86jCXWj3PPyepKSoHs4UgLp5DZqtwExacWRxbDTvmMHf6yjY9rKncoHaaTwbepdWjmVv7V",
  "key16": "4rebuHDFmUh6fg9K3tLfsf3UDN8tixH97ubde3TCoWiWoWURjCP2Nkx1nSPWB9Jajjgede1eFjE4xZFoAp7NgQHk",
  "key17": "qB7oS26S6Xb77SDCf5E9vFoQhkfWgEBRaZA7aNdRSv4ucpL7dZF39AeMpQbrCb6sw5XWLVDkDQvi7ThT3zaUseD",
  "key18": "2KMEmFy8znZ1xU49VRrfHaepLnkkJGbfxpwQPah6Bb7Qc3RVmPSVXm3VJGeU5ZD6pzHFUYZrwnuhgw4twQrkhaKB",
  "key19": "65KevbVnHrENNq4nfqPD58GcUazbyw2ZAfWvitq7buA36HK5DYnjdiGpj6EWRUKipzV6ahscoK7DJevwRWfwYRW7",
  "key20": "2bG9Cw1ZNA9BqPhvQmvaRwoEWmdVPrx4JmzqgHQhmwzER7kkveLGPCwMXxuva34dSQPq1JbWYL459vRTQATxMMtc",
  "key21": "4RuyRf8sLhVetKhuQgNnYbZBaEHpiN9MwiE38jd4HNSecC4Hgjci6sEwn9j4LZuWkw7jc3sFFKqRM7Jihe5uvaiy",
  "key22": "58zFx5cpzjgQ1QQjAfPv7RCDdXBcMKQXBnvbhSGHaJz4aWYCVRmUbEGgRfSLW8e2ZppqdynLhZHB2vmBbhv9FBJD",
  "key23": "3QHPkJuoyu2BWie4u4wRRpoXTp7j9dTLC9wPV1aiRBBFeLW4QXw8FuyAfXm2j1ynjgLwoF2JXQvJgAWBkVTuyDKU",
  "key24": "2EkUkyh5VEEoixToGZDcAC2P3ps6jfy8S2U1TmqiWbbWFvJqDpgy8C2aXFFe6UFVGy7k3xyYJhxR6C2jdDY8x918",
  "key25": "4AzdLh8hW4R6AyBJzqbELVFsAMba9H7x6RQoJscFHptm4BDYg2QyvdUiXE7UDDY5CXt7fwHQvUfuSn9NnevyNyCa",
  "key26": "586sFMpHQAkZfHq7zoUVELS6Yh1zUXBhN1FJmzKReWueuCdmjFd53ucU92ynNS4rS83Ywng7gJCtS6erM9jUYYrb",
  "key27": "5yVtwzRU7CR5bKFAUxEfsrgJvcJKyhimXp7gojJDt9UWUHgyhryPBhHsiouxGtgYmkJqVgUNhycXgKYgTeacWtNM",
  "key28": "4qfZ8VR1fZc8VN9SNMVYT3wW2twr85SqoCrgvSBgYzm8PXwhSm4YwkvTZg81PB8LQfmqxrSnHn5hjaGBXtkaS7we",
  "key29": "31ejGHDvQUk1HVQRLqgajBowksLL3EXysLkW9DAUrJKX3coJ3rEUn9Ld5tLVhjmfJG1c5uQi24LWmRhPRtAGYnr2",
  "key30": "5eZaM17ULPCUjpm2LR5jGpbuMr8myEz9AX3ng1Md9jtDTVuQ23EByzzHSaovDpgXMWJR6EJsgKWoVKMCbx4EmwXJ",
  "key31": "fd7wcu9gTeNUHqkn5BNNX5mo17G433nGwkHCLeuKgY8RMkydH2qbLzcV3Vu1ybYfpbG9pNLTyP8qVeTCJJekQx5",
  "key32": "2qquY4mXZ2KqgMgLvLH1Bs3Hrxk5H72Bu26R21LyNF92sm1hZyhBzTVP6bZZPWVFpqJtchk9gksyfvNjT3iNQrGp",
  "key33": "3UXghgYaSunVsZQkHritsMJivCktbNpZBWpUKBxEHAdQdKHqwXxCNanPVbDXCCAvmUiinmVJkn8kc2KchHgcgujb",
  "key34": "3NTfDcRXE1TpqqxccX4ZfWULjPg8NANyT1fK5BU8Xyi8oCJiBhJzy6kYQV9PzsRAjiyrdBC6bt7MrYibTAXc3pKQ",
  "key35": "5dLHeqrxTXruxrCLdDmRmg4j4zQVKq52CTWCfqq4s1vTqs2jt7N7bQcYdpTk8p6bXerYCMK3Q8xnmc1etZGF27P8",
  "key36": "5Em8i2fe7UvjbUkoYD7HZBP3soja59eGVXzvoBvX4S4JR8sko3dnygMKx6nXnt3hVjezK5iNaj9V4crc6KWZTZjX",
  "key37": "5pmhGxWgnpPRNCtynaBSimtkRrgf9735ijGPyxYTpMyL7cCUvQrSUA3BXB31Hx99DnJHsjzapmgFDbW9k5QoonGT",
  "key38": "5maCN7BADNpRKzDtgkD5RmSa55fjRXWpmi81UHbBsdrWBHAKtPNb3MK4sHPFX1CQii2x46EgHJRtsM5m7NddmbBR",
  "key39": "3KDbYHnJx1YpFhg5VQ7193u6H1JYttUE42GWZN97L9KJWQZVzyr8vwUGQMEaQ2Yg715y38RGfteuD6j8dLucanev",
  "key40": "5tsuPJNrUTsyaFAnS2nTDcbXAB7YpYLGM65szqoNYQuTveHRa7EsXZBCzQZxhRTwG1ZVZLSL3LHWyLLRWGFkr1bX",
  "key41": "2s1S5DqsMDikfy28vupeCKCoQ8N4GtUSMDje6kp9QKFkcCcWeDfMFkraQe7eXHHSfNfSxtzSoyFBo83d7RKiADWj",
  "key42": "2fiPWbnWwPsN456f63Bat2FpuaVU3MA58Q6edtQ8fQkKcJQVh64YB7EWcfpJYXAkyHpcSKhCucw7kPKQjDHwvNzw",
  "key43": "3MgTuq9ZpR6G8MJhcRc47hqjmc4sv7Cc1NVwaM63J7ML5jwFnW1GNdSALu9WVp6UMgx5iqmAK9Nk6dxY2QxwtgeS",
  "key44": "4xuRb7WL1kadHEgwnpXzMhChSC99hywTqpPb1zjPQY1fASTo9MNhGABPsQSccJBKaBpmGm6JGvWT4nr4GEyqam8g",
  "key45": "cVQzngdNocQwzoiZj436qTCjehuH3eobph6dZt5rZzUXAvDEgusdAj6Mjy3y5aMgpX4VRR66rxzCd5rv2warfGc",
  "key46": "3LCKoB2EMUVvcV2ym3afJNKfvocXJ7DmduNGhQ5CZgRiEPuTpK3pzpRECncoAB8JtWmJz7KJB4Yx3rf8ByU6h9uv",
  "key47": "4MwzR74TaAqwGeh7PG6Y6gmsxNFb5fKXcEP56GZ2YvGJQCnStREPCpmUtoQtjwpC35VhAo6L5nR6T5HNacML8Z5G",
  "key48": "zVYpZqNNU62aNcCTNJ8NrFytW4jXrXC4p3jDhdYiTi7puqiEXHhszCv88hVWxrar8oJD8rB7kjZW5qtxFSijPuf",
  "key49": "2Cb4UazmkXr77eR5kQJvS7tF2jwc3zxNrhLxrAej9FfdfvYFdHwFzYFFpH2GC3NdLdz9Y2ExF3YSfmUd8GqWfzT3"
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
