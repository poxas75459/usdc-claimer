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
    "5qu594P4Sk9xyP8skFnkw1ngt8P3U3xXqa3FERyrnv5TrMfvUjSpZTPcaRs3PUBKNEYWmti8s25bitgU2SMQSXir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S1TQqjWuGuWVY949dUL8s3VjVXnozCL7SGeXM9tzuHbSB5vLoiixmBNsUovxjL4yJAorhSMRWKpAQJwaJpRygL7",
  "key1": "375twQRYjFknoSKfvSL5X2acHLfdawy583J8H7bwKvssaqq55NZX7q7uHjYjAkn3zBQCBC9MJMSbvGgdqnojiJG8",
  "key2": "583N9jjkJdPziZv6ZjkmNUzRHqAhbqGHQmpWb1vLzmHZ9iRv1uyttRpyq8nLfb3C9J15Wjh5ZduQgYwfqRgcRATK",
  "key3": "urgmzYrVyxQWDA9vAXUuhK4pp32AvRhMhvnWzcqj3oBNwdghHW23XCW1jUiPg2F18TcPe8PSthkVreZH2R6tvE1",
  "key4": "coeZduxHjCDwxdpTKJCTXuViywXUSYEff4Qbo2ruiqSD8iJR3Mngut1CTn75ZujWASd9289vPn1gMYfL1nXVYYM",
  "key5": "2T7dNXgrCRZy9kQiSPgu2YggeZg2eUcEH48gNSS7zqTG1FdEU3FtRfNcivAMwKbLENDTnXmcYMfj8HQdqt7baeS2",
  "key6": "5C4eXiGjkBR8LkLWaCGNLqw1wT1qTjupGwUay6XsxRs8eKfe8b2q2Ss7yMX3ymMCgJGq56sqWSHBXQtU2wLzAB8U",
  "key7": "2ikV3rdsKV9RvgJnKNeRSyG5VYBj4VMkuKHXB2ZEf3JZ2iQ7zhzyqatgwwbV6gwM1VfvaeSM6k1b8y8hyof8cTHB",
  "key8": "5XXipwTJXRFrtkRvi2Y5ozhS8tPcyfPWJ3mZWM7upfF7rHwmLTWTh6ak7hGz8qg1pPXRRhfauZ75K2Svud3R2KFm",
  "key9": "PoNg9uuJnaTk2AiDR8v3T2JdAoRdqMgk1R9ZWbzidE2V7a89bw4WUtzUc25FMbXkotkXfeWWyaCtqHDZM6KkP7p",
  "key10": "3xkD1u3Nw3PiWXV27vBXUE3D6NxDCPS3QaHomSzj95f5BvC5sUQLzJ1QUjpVBpdzSbcA7UMJ3gkJTbgKJL5UHvve",
  "key11": "5YMZ46CJCdmPK8XzJTCV8zPjRuwu8MnEroSm1x83H1CMPKKDMgdziGdrF8YxRGtFNguYHQLq4ByZ7tQps935tDoK",
  "key12": "2YtMys6sNjh7SdL7xjFKdURp4LouFvH8c193Sg6r8sVowCWgNLBUGuUJ9noaDJSv1DBq1WbxBok4ucBha5yUC8YW",
  "key13": "4fmMUpmZ4krp3mWC9trptWMmkg4hZphhpmG98tQXYo4BQPpbijiJXwwKea6w2TSfz66Twcq2tcQ423ZZnCe1pgE8",
  "key14": "5bFp3o51EgAecghGruRZbEdjRkn294xSHfmTiJhFBLZFzce4RvfZMNaks3Hx4K1SRLXXrCivcjxgUZoNJzJcptXF",
  "key15": "4tYBT8SRNJjd8Jv3vXJUc7KgeXsZxp2rfUJhtyTNo1S3iQb4puKJtTyT2i6nv3mVihJhUE66gtoZho2HeBoKF3uC",
  "key16": "45DSdo8oQFsAHvT57VgYtaadqiW8LaVNjRuxiToeLKHKx34H5QzaDErtAhDBHkvcdqnTP7xoqxaJPQn2r7y4Wixe",
  "key17": "2ttoAYoNyoTrZUnTJA9NyNY6Xs6iYyqPNSGN5Y2vD15me1YtWJTcyjFfT2MzXd8WBA4fZeq85EUsYNUV3kRNWCCM",
  "key18": "3LoWkYQYcsNXt4upofZqSbJ1dENgHDHkZmGtRCABV3MYeM1mj8sn2FmGs4gD66aPoPugntRwUh9APKDxAx9ob7wq",
  "key19": "yGFtorW8FSim6MCFb9TubU18xKFaeLTP7g7NkBx2JLH2B5anAXb3YgzyyPPMjdSEMJNFyx6A77hyekPhc5SGvSU",
  "key20": "5PNfgZ64pKbEkgN6re1Mq49XgtVf4fsgD5QqxSK9x7J85RGfUzHtQc59RZnUcbTiC3UwpnZmsE2aJUjp6ez3cjfe",
  "key21": "4HMhCj1u1cqCCU3J8EfSEXF5tQK5tAg4WmUNo45JstxJMSVvXwG5HWUk6sVTe1q44fkweHwv38fXPQy1UDFa5LN3",
  "key22": "5stAXEjW82NRaWpGMLbJmcgg8Z77BSn5jsBNu5HnhVzmBgnz63gq7uXyRgi2uS4um3Wr4sFbkK3RyopCNarHA2co",
  "key23": "PZ166vSUnRLGLK4iB3zAMusGqF4f9ig2Z4rtcTUoWicndGJtES9YqagS3KCLzXnJfjdhLd4jQjX97bbGLh6b9mP",
  "key24": "2P5c22xwHW4eZQ9D7wzorDoGxo1LqJpc5hwiYN3NTKwpRmWhCz4FKGmRhLekG6oPLCqhNLSzLBBfMCuLidfbFwbo",
  "key25": "2y8aSNaFUj5ULf4SyruyYTUgMRyErw95qFqn6S1XRMSxcuAQgLjDmTqTsxNXiBTxw3kLT9S9UExk8t51WnjB99YB",
  "key26": "3ULqe79yFWxq2z8xHvqU5kpvQRtamqyDQoycieUF13Mo7mgDckudsLr1WNxB6314fSNZaTcf2QApZtESqDVqhgf6",
  "key27": "56e9n8d37wGBR4F2n8ttoy1tkFuS6bsmB9YQHYzwo5r9d1WmPuNCMJFi2RxeWcDZEyJr24tovkKpmaj5yYiSDojL",
  "key28": "4F7FgLrTVDFHhrLDvPiG3YNGAGzyRz27bySPdKckzoXHfitR3rP1GbsMB8NCvHWevkaGBwaLt1e9jPVSw1jx1ndq",
  "key29": "Ld7yGdKzi8y8sYaf22RsacChxpoVZGkawYo9XCUjqL3DJoX1uJrKtKFBTmFfUPzkjEbuYdRKF1N2CvjR4qto8Sh",
  "key30": "1w4YJPEacyNqu73rdJaFoWwNkgaZD6RsAgsDAE7NxeEWoLtGEB9XTugNH1TJhHqLHcU59Zc3nRgMHg6WwruoGQ1",
  "key31": "3GFjP7Ab8bDNnRqxQWRJhxKeojLz74rxXnoQWwont8EWWg7FreAKKcPAfDHKFWA2pBSskNuxz4HoQd4gBXbYJQce",
  "key32": "67djwpY9Y65sueyRGB5nbyPuw8Qy65QBWKhEVVXXsJ2cNKkNRqQA2gJntpphgQGEbwvfXpsTM7A1yJAYZDvfBWQw",
  "key33": "LVA3qbD73AiWBycYLZAEZFATzNd7zmMaDw9tt8t8WVFCjSQtkbjFePS9DSyoiJe6d13dMzNZKpYhX3rzbvYC8DW",
  "key34": "4akH99aw6eZuSCqFvdSmxAUF2e4gvuuBFSQvaR9oh7woTp7eUa21AsfXHxrrjxNoaDLXB7fWvUQAja1azThVbMnF",
  "key35": "iTL1vTKR5QumiJ1yVStwg1m7X5phPw3PJyApgLn7ChP6ciRK7cE7S6NQDrBaf7dsWApzrWmmYDuGHG5mgCbHhTi",
  "key36": "4JEe3pzMEQESBzuhWswoZ2KmnHcKYps3TZCd7NPvrJB9FBV4ytjUR6LTeXnsaphMRGUWEfWvki5KdL7DMeiV7LL3",
  "key37": "2eA3Woj2N7UwQXHYVL2gBAGxtMNqWSwtMcKUsa21bbj1ZYd5Bh7GWiBhSupfJarL1XPBhQwi9pd8UFCUPNan5vvb",
  "key38": "2hGbdHBBrmMgEPToGV98anxonkYyEzCwXeVbbRZGvEgA5yaM9mPVMhaZSYK5Le6xwVSavx4W2vcWPY8n6t5c2LZQ",
  "key39": "3obDYC97Mg7fcUUgyetPTpa2gGf4qXtwk3frKxFo8f6usfN3oX1RDaDuem3JN5dGhGqxTazoJQKYNCrqzjhBXHpE",
  "key40": "DJqEJ7UM7QHs2XHdD9Sp6ZidciRBpBomeRZyvoRAJcgpNiXudY4ktdJLoHj2QkZt656HYvXyNFDKL6MiyqJJCxm",
  "key41": "3jND5K7vNsiQLYAyrvaa2avdo6oAcNUc2ZayoqTDQvzEDwAvg1VBSy8nELiwAVPZYwFf9WJeYVYRfXYCWmKGTJ3k",
  "key42": "2nMXohAuthQJrRdoR6qmYgCfyD38ZCFWSSGZWk29rLfqiKWsW64gAuoZNUEhrrBUaf5MkkeDBo942yKc9po2isMD",
  "key43": "5KVXC3qMPAmVkNouSYL2HD1DXryN1Ebj11EtqVY7zxS49zANBdD8PK9rmnNYcjMMrTYRnGn1MieTJi68n9wfv8Mp",
  "key44": "5fK8ZRK59BRDuDgQ7bWYxt6A3WWvdLPNhMqsroqof2miuhLmCFoE2RZgWReBebtkTE5WaJSZSJ8f7ohEMKt1DVNr",
  "key45": "3j3RUHoVardwb9oj5wLc4cHKNwf4Qn8JPbgL5nUSnz3vQr844D3hsX8RuB73weSn74DtkRFXFRCwhkGaQusG3KdF",
  "key46": "kF7RvBacFMMTzjgFamk8Ybc9kvfgg9SG4RfW1Q7kxiRX6M6ZXGfL92ip2HC4MbDiZEcr8q5YyNsC3wHPBZLHEMX",
  "key47": "3whz7VeG2xzgNoJCEqEAEjmFGM5tKyDKnhiqoHYbgfUUkJeQknAwEeFdN5HXKFxgB8giCJnsE8peqhoVrp33qs83",
  "key48": "2xr4QT5738oXjVTQYCmvm97SiEGcpPAWvgKocZyFEJeQFUL7ysXsrZJcWhm6GVkzdYuoqHgo39y7h1m8Q5fJoBoZ"
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
