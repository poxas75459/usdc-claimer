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
    "RzKVnB31adLJkTZewfYRfFFQJot39GbcqVFimt72TrpzjYUKvpxk7X1hL25qYYQVxu7PiKRLotgKxfd3t9UJHVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48u8P8aHMWV6DTk5nw2XFML3h99ujSoT6bZW7NRknm262TD8B1AvX6YcYn8attMC6jVK4Ry4hQoZHZyRTaojDZ76",
  "key1": "q3PXPDaq11SsygkPFqBJEnpiydyhpZi1kmdajKnTU3JGRaTVCTiUHAZWwSrtwhfPYbF4d93GwzQTQk1f23hBfMx",
  "key2": "4oHknzeTmPVKs6aPnnhg8AK9sNR5i8KtQTPTFmXQtybo8XhXiCobN1X9veFkzEpPiT5FyMd1Kf5JFvYQtAcLVDNm",
  "key3": "57rzam1XkvssVvsyE57DujrCHETjwpxZVpbSJZMN3hR3TJDLfZo7Rd4aP5a6qN5k1w2E34DeTzA2y78tRYiJAxtr",
  "key4": "GFpsu6vAtuCSvWu8f7wHXNCAbYRH81trERGmkTyWeqofYbU7kyeXui8No5Q48Nq163j194Af43rn12RzU44VDiE",
  "key5": "3dH33XWWksLNFxXWKEgsJiXnACyTic32yBUuKkGyYoTaMa6zYKBDbsGeDwDebdw36As8f4ov4zspVRnwizL4bWY2",
  "key6": "2XCdeXbep4PYbwYkbNJy69GFVAXwfFhz74HFceDN48KeGGEvFPHJV32yua9yKVZWTn3n8WzX8CDRbpE3Q9HD5HF3",
  "key7": "2ZUrjRpMp3ZTqJM3C1b8Y27fy8BknCXTq7WqR5KBwok2e2sf76sioGsJuuGPt7GkwC7ZvMvFXPHYsWTHgVZYcf9Y",
  "key8": "3QVTNqfkg3eBRrSdhwudjJ5byJqAtb17o3qgLGFhmPLDXHwd14gcjF37Lusqu3jKtLNoc9Jh3Qur2cgtBHT3Ajze",
  "key9": "kqfaLK6F2BcZCvJG3fprwywhXoqN7e7vrGcrH5R7og7XKKHofUBnZqo12e3knZi7qnFivzKhcbMfA1Ty7iuCDx5",
  "key10": "799tfGiCdp5PdZ2hQfBTai7TCDTt6XNRzJS8GufgtuYWV4crvrGc9vdD6bix98Ma3bBfyXzheQXFQY7MCbFhXWU",
  "key11": "322oH5J7BckGjJboQ62QQhRf8oTMHZ49qKpFKuGKjQk4D6rzp8JRZyWYRKsDHm7PfgoTCxTUnkvcGuwnyHnQuA6E",
  "key12": "2QjYTUtbKFDepFTp3VmGZfysKLmph3nzgzpPbhCEQYjeYdTguS1vDvmLJTpWW9M1C8vyPNTsbi4VBsizEqqGZ3Ga",
  "key13": "supcEQEB21NomFygQgSHMR7SL2bEHUteNE3WbZgtfVyXnb1wo7WCoZRErFFNuTJ9h9SUoGWxes6ouJCVL8mTMz3",
  "key14": "3dXvXGLWjS8tFrAat1TLDWm9m1FsPWSVwmiSFBsrpokUETsR2gdQqpFLwspg9oBGAko4MTEeKdbsfFHjjsGcoU2G",
  "key15": "Xy89m1HWHLCp7woB6P1751craT5BsE2GGdkRAVtRqQMTmjwg92rqJhyna8E6Ez38fthfRMYTboKrFFExWJG3JHw",
  "key16": "5iMm1TEsoaV6eUP1hX3EKGwM4k3zwoqcVERTeeseDXiDRDanwaLubiovwW5Dknq3txYq7GCjctSV24T8C3JMYSwL",
  "key17": "yWGMfgcw743Y9P9RtLecc4Ahmghq6JYoqZtnGAk86fmiKGtYYfm9fZhadXkHDsUCvNBmcJLUtRCw4cJBzqud8kx",
  "key18": "jNneW1yfXRJ3BBMKs7N6RULkM9yGuTrq5yewEvHRBHdbPGG6tp1mizZG1n4NskmNssCC8CZFPCS43ASnEhM3nGv",
  "key19": "3G6UgkPhsure9S6vdhiGmrUXHG7MF4ycSYeggQxJBdbsoHPQXmrx9UmfLyvWfpDVu5zm1c6jfypqFA8aN4wVWCWA",
  "key20": "5DePv9drnub7gAipcMomCyRprWZB2NgbHArFTSvBNw6E4L3ZG31R3jyrThMPKRT3c3Xf1CSUhXApJct97MTxD72U",
  "key21": "391E26zzpJAqk5nhQYY3MtFrjzoq2VZFhhrWEzTzbb3EHpTQVdeAgLp3N19NH2oT2tfBwsMcrYoHo7K9NP6dM37j",
  "key22": "3xXL5TbnM2rQffXUdp8KEEgwXPbrGcyUANa46eBypPXLnXYCUzqXhaCiHUFABNVAY6De9DzGbcygwUx3JZkwT4AA",
  "key23": "5W583Juf9K8riqkHnodFytumjGTc2Y4U4VU5z4wkxeT39BewETYyo6KZkMu6gvgApDtqW8zaXdRvhdUN1nz5WY5J",
  "key24": "2vcdFmm1U3sPs1qN8Y8UnFztN4NsbTzfETxU85Wm2GcLTweMiBU7wz5KCdqu5ozygo4DJrFumtARQPS7WSJfh5hp",
  "key25": "4GhYj4TdtDuSLbHKSWqjGJWuUzNmNp4diuyQh6YmzrAEv5hQCimbbAnQwbr8PdizfXA2YTD15zbKHbV9coU4xmmp",
  "key26": "223Y55LavoCEM3pzaeECjBAm6oGCs4mm6qrvdhetSSuUpnoHr3cnXLwBXbjMG46HRKhZttqTsS1g8oRGG9JDYXFk",
  "key27": "5vsAT8ZXABBKdGVQcp39KAxm476LR5hwB694PYVQrQ1ibeHMk4hMVQw6Bhs7BMb6py4oSKcssHXM2mjfUkbSA4hD",
  "key28": "3dpGH5qsjkmTZKgLnxdBRaBmT69UXYhU4eCbdgi8rnZd1r1NEWxRbCwWDPz2y7gztkyKhZXVLn1Bzj2kQY6y6zYc",
  "key29": "4GVCut223aaaDFxwQp5r4DnW7UbFTu2iTgAiPdMnfnNwSdKSAvURbAMtztym2C6eDhmfHpP2tiPDXB4ujC3ughHv",
  "key30": "3JMhxLFjKNLQt6cZjakYenoYpR8rYFUuCcgt8qqdHH1QiSQx2qbRJn3VUNKNdysa9gBq2dk2eZ8dg2F94trpvWvn",
  "key31": "5rYJ9bcMUwcFkQa1K5bGaA8EkjL1ktfdXZHuPHjm39jiTgH12LtxgYLfz516GQFVivvDX74UCJf7nAXn5Dhnyc2h",
  "key32": "5aN8MYZWRoCibGUBogroABLo1zZDSk4S3PnJxgxfTRa9WQEDK2B3yv1Sa2SGVorDT9fs3wN3iEP2SPuS7JtfKKbm",
  "key33": "RY7Qqu2TXEc6js1iedwLpjF8NKHW5oPRjiUjnTcaYfcWYREGER1qH3K5k2r7e75ofT2pPwqmrw6QEQT8pk3p7WU",
  "key34": "cLiJH7JbN81HDAvTD3k8oGXVDri6Lrj6YjofQVrqNZztT44KcRycrQ2ikgiYni3dhbDd7wiRarekn63QxybXbK3",
  "key35": "2Kdmcqr7FAwuwZRW7VoKV51Wf4DGd4EPuMNumV7paBgYnywmGZW9umGpnY9VhTgsRmvWzMi3zKgPstpPUm3aFCZa",
  "key36": "23ue8TADRkE9HcwpxKkvZNxtyJVxpBnDcPLsnLJmVvWHn23MyLvuqSbJnZXkT6Y1rCPQUzd84BmMnQQ7nqMn2PwJ",
  "key37": "2ufiofhiCLrwuasmRqmEVqLoXeX5pfi8aBRBqso8LnESXSGTD8AsjbfD9aERtSPpfVpD2Yqk5M3rbPro1oFDiVDs",
  "key38": "YSwrkCQVHuCnqvvGE338TcokhfvcBGPfFXHhCH58FAv8yzerYGoUc9GZ9oSUgKe12STuuYdMPHreFLt7KsZKPkW",
  "key39": "5aY3XjYnFQCrcMmDodnqzH8ji3kASjnb1kK6Y2kQMEcseGHkY1h2n8c5upmVdrRLnjktgz2a54ZDS97nRKokT9R1",
  "key40": "2HLPj66WJfz1aNr5sp7N2CtWyXyA7V6UeU7UTvGiWRZutd4RY77UaEy2n8u9MgAa5ovXXuTjzK3Z2JnHy7TNJR3M",
  "key41": "2EnG8HKcKKZLoYaNpf9ntidsdsQKVZbZJWgdbgU227dnQjTEXyhofhWYrLWxqz3T79FpqJrg3Bw7sDRKPw9ciHgY",
  "key42": "5aNTq613WS6kWkaxdQvW9PerefzfccmTKPPjhGuhwFmRmzpGrs3tNYZorGdEhyzk3KPYHxw5hhqn4YuX1d3tewZK",
  "key43": "3KuAcfe4F9CwkrsN8pQVCWfoJ3Z24NJZibvwXUc4Q18NwsYLgqw61t2KUfh6F98GYCuFrBpown5sZPpPnk29WHkT",
  "key44": "3Do8mPGvUv1HnbQmfGX5K7GkGBLTCE6cdE9CAcEmFSMxmXVfcJhC1rSw7TiU8scD4LjdJYUdgiuubgRkat7XHL3Z",
  "key45": "3emzGvBiEKcjXp5g228BEn2cWqK7hoAbhDCcdvN66YT1aA8c9Gffc42uhKJs5JS7xNDJbj4JrWRCEXKjYpyTb7Wp"
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
