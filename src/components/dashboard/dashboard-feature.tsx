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
    "5SVBAyCCRmJW7PzUwNkVLbGo292sv7PPWK4kCPeiDDoq6JPdiQFHuVXsmpoHAKZPLcnn3Hg8wwnz5caUMDRxo4U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jetj4H6zakbyetmQSX5V8N6Lub7pB4i4rbqrVKCHoTJQj1nGisTySZRGpYa6tdbhA9RQ42ofuri9XEREjA9f8NM",
  "key1": "2HMvLo2FtguzEJSpqTm9ToGcAE6eES1jcWW9KPdQXbqGrEQQJEW7hw65XW3mPDXxWzNxgQeXyAn7SFtfHmxjkw2a",
  "key2": "5gspx5ttgj4vkH4TJyefJKQJiewGXH3TEY7KEDcC28swxrkNWBQ6FD5MB8yDJ1R3Pg9zGywtg6mcgcLbVu1gXRow",
  "key3": "2sjrmtyHW1uxHAMWt6YACZPeCyvKTHkoJ4WuNy11GJhVSDdynamruaci4wsLUvh56ygzNxh5C43pfMeFUdMFQabA",
  "key4": "3r1rzPkgmam1XGVLSJCCqB5ekNMjmwi68jgw64YPRqQFNfdjWWumHhMzeJJDpV6hzKdFdvvMPgbh73oDhHWcYEA9",
  "key5": "3PGXZSBxxQ2CoWrCAVZwLQYUPDxYT6XZTcVyybN4Eqsiw6vvBvK97oZ5nmZk46qnxWmJqBjAjKJBV7v1kBB4xdas",
  "key6": "48bwzmGErP88y8G3ynBMqYXDuRvgSuH9LNxngoKLPVhBfqxhjb6A2zpE5CBr6osFxNcbfHwDZCUNResV8VSoTG4J",
  "key7": "4YUMRFGo1tZGysWSwLa6ip4uMifbhmp61nY5zXrGLqSTWPMyKGUdTo1w7rAymFsg197ibYdtZdtTwDrFyztg4gsC",
  "key8": "61mMQbUBJvUYkAvKted4uCffaBgmigDi2QMX4wbKksR4PeybrLZL8rLbzzm9ABZ3nMivwpsJem3QrUsmRU6VGAXg",
  "key9": "4Zvb9oXx1L7VGw3fEYw8X94SqYN9GQEcACmwNoBhb1pXfNCQVhppNrH4gRteML3GofpoXbrN137fSPhPaa6MJJV5",
  "key10": "4fd7pGYmj7U8EGwwwr6uVMK5KjKmFYZhcEv4f7iPzojJLVVwKMnZY6o1YkQiUt4W5Jfc78hSBxymXyuidWmuZD6B",
  "key11": "uYo8m5LpHmENDqqagcfxDNEMzdgHuc4bArHCZYzPeBLy6JbaWW4E5vFGbSRZJzq7Fp9AkSgco6B7v6pFFTsTS3c",
  "key12": "3YJSEzbcdKcStmBUbPqcUWHMQ8nzBHDV49MCMFzbhfwTFvPDCy33E1nBSbR8E1QAGPhg5JpVwdtJksf8U6DD1Bmq",
  "key13": "Y4YUNnUCVCKWX1hLtBSj6NuQuTECP5HfPaUcxqrzeYNuheDxg8VcV8TZ1tUsFYTDXfKUEMAz24mjdaLfs5hLCpG",
  "key14": "21ry6D6waNMDizfFX1czFyTCWoGZ4xpKDtZRiMrKiuV6VkeCRhcmvpa4318wxpDTwxZx4vnzLH3DfQhuaPh2yR7d",
  "key15": "4bEAyUvvzXED8g6kCqXkMc6SMCDtGjTpN4qqRtaqcfS5AjCj1XUTL29eXLVLbsMDTpnU9yJGKkJ21eg3u31GgaRv",
  "key16": "3XtBPtEefF2XzmBynMHWUgauTxDkGzRqLsvXtHTxHqjYJaAiSN9DaBstwBETrpWgfi1Ws3AiHV6bVJQszurM4Tf",
  "key17": "4tQ82RqEXk39K6786jZE4VrzndP8ZTaJNK5LTC2Qp5wGzXXNojuU6Tsf33Ei1PUpeE6QqVVS59irrixyec6MC6Jd",
  "key18": "g9GUhcD8KxBBcienhwMnLk83Y5S5v1iuYXNeywuKehwZizaJu8HdmW1fBhqKJs5Q45vMxVKTiv2QcuzjhVSpYbg",
  "key19": "5hPY8rnt154nazkBD1SEPTA55rgtzNwMUrQZtd6PK8dWSDpeeS9p98WCxroqAkEgcuq9U2qrGxbqkG7CrBiEfAoX",
  "key20": "4zS1G2XafzEC3d1V4qpkDDDxrSChb8GXvRtUnZxeN7xri5GcBesAWPH3YmYzmXHU4CwCRcysjuWcRiEGpvC2nxCQ",
  "key21": "61hwibJxa4V6RGMSiDbceqQB3yDDqRinbBPNxGVoq5yhfX8oAJiKeWS9MQDWKZnLmUksp3tFNYz69eFoKG7ek4mB",
  "key22": "2G5sy2gyppGCMc6avYDPBpx7KMcUgfvg2c8xrDBQGSkV5NopQRtKwaGvogjj4eK5wPN1TLAmoXiDW98sLMWSRWqz",
  "key23": "54k1vpb6dXhsoN24xzyFr37yGDSnJivYeq8tcDv9sPkvSen5cd4K5YHZADNLzSngffXNctdFsvRWG5pg1hPtkJ6J",
  "key24": "2nfMbe2Aq55ZpxX4LemUbEpi3oFPKQPpVYwrrx65iijjQkTKNE4r441odmabPSayxgFPhwm81Lcuw931mC2i8HHW",
  "key25": "3bCAVLoYXMYFVTp9EsgC1tEorGiUntbGCP1b9xWno8E8V7HCPF1pXWfYMUcrtkY1v47cEAMLH4i1Y831tiuFjDBD",
  "key26": "T4GFjThGotwe7QKF7VHJMsUYMPUB3fJuCQtH6NQx6JH9gHj4nAudMctWMk2gb3wmxGbA9XyLBNYjqhhTeswd7Sb",
  "key27": "4zjzc5ZZhwWmp8SeHpLddVZmXAHQKotvRcJ172XJfhpFfBgiFM5LD4WSdi5Cunq8mSfGy1V9rzyHKN3SxbUQXsSt",
  "key28": "3HZAkm9aYjUSy3uWd7k63JYYmrtrtk8ENjoqbjMVdQc91mM9zTs4hV3DSNCL7K2Bm2PUzRKuHfouLxKgoZXyuc8i",
  "key29": "4v7gBmEHTEu9Wd76e4KSFQ94HbsY5JLS8jXsTjLPe9zPizYU4qwwwGbM6boPv3zY3Tj7jxnmdXVMud8N3WMobxqx",
  "key30": "33zjkvFuWBesmfyxb3N5cu7QMjaTfsqJkzociAx1TT2ZvydyG76LsZQn8Tk9VwV2FPoqXoMAEj38J6NDEwKKxrxB",
  "key31": "25tVkMpyCNawpriUYno5pcyof8QgqmTfciqy2KvUT7b3GoTaM1Zyj2u3FyAptjxDcNgXe3QnPpEvERfp9hJQR46F",
  "key32": "3nap38F6rt7XnKKLEhTUPLxXj4dCdZuRKxt4boZDgijqWAU2SPbHEFPYZfrkUYGuaHpvvQVVn2SBrnMB5i6M5EsM",
  "key33": "MovYK8Dc2tLsvfoQqMCD5yQCfYAQMTdmvFACScsRWkVwgYgPrmKtb1AMxRsiGeTKSo4bampruWruo6gapCi95Ex",
  "key34": "dsPbVCMH1fpLbLr39sKH2EPaf6ma9Z5fvSPUu3G9WWNSWdsJNQZ2Ee855wrr1jbmiCsnVy5WXLBX9P38stmjbUj",
  "key35": "5XycULmReMi2K85YLf7QDXg1mwxHyQ7aZgjjuzWoSxD9AG57HgeqEC9sq3RaykXfSL6dp99ehW8axxN6ymTV6LqZ",
  "key36": "462XMrbHHCVqevqx7V8w7M7WMgCY75KGKBsKPCjGrR8W5sDgDAdCVCCmJw1oaps6LJNwj983ovFzVWmRWGe5c59N",
  "key37": "MJGoHyyTGeGqUQ1X8uLYjVmqTWa68hkc89LnaRzJEthocc3XrtM6ySrbp23guChpqdrbsFAYVP6oQGDzNq4g8dq",
  "key38": "v6YD9NxWNrGb5z1QYreha12ozx3ZTRbJ2iU9t2v6DfyWHQA38oyDYxiD9GcdtHDUtmsnwhAzb3GBdE8sT1BHyoS",
  "key39": "2wxWFu85j6Ph9tiUAbQYZq3QidskoRGFjubfMJe3EucYeUb1Jv5pZDiRREkeVnoEH7dyrw6i1kw2gTixGdGHFJAJ",
  "key40": "BTkieqXPy2A4YqdJXfU7JnWRGkkBvHJhnc6CVSuxHkwMtBtLDuj45xV8ohfRaWVVTsCJ4wy6i6DpZxnTsEdoAQx",
  "key41": "2dznBRbbX4u1VmAfZqfbNFAXfXpRLbZadGEuMphbqmZwQqcrugnGg4LR8KJjtjXVbNKPrgdJg3uZo84omLKURKKa",
  "key42": "5ynwe5ixUo3HKyAbtKKKckeoMgrRaWSuur11siVCirF2qhEK8vNcVx8KfLoyQNqxY29qJ4e5m1PtGRpLH5z41hxA",
  "key43": "52cx8WmXwvwvjyzZA1sf33Mv3oSUBWmbmjgD32qkX4kn4wzRxctW8waFiicGh8YpCpCdgX1pSkSnotdBRxMnuMHw",
  "key44": "3DWoEP8VDhFEvTjmR5kNTj1nRCnW2BZ6PaifygP23AZdPxWbczyPxQFsTVWxFkQdyN4SSMXAs3pfQAgmi2aDGfdX",
  "key45": "5Qi5uMQanURNhHBjuwDJ1hkbALMWDzez7nh5MeZFgJXPKgN7j34YqcYkSuycBzBPnaHSdGNC1YZ4eve1NPrrJZKr",
  "key46": "44ex7oNfyUtk1jL7RDheLrt1CHTGTGKmirRBqJiFzcs3gr87DG7RDiSCqViAtXZyCu3V6yo34MiE5mM3VFFyji8B",
  "key47": "HkjBgG5PtYcuiiuSNXZrrENu4m25F89rrFLVD5Mpzjtadzpow6A6zrs1Voy7KJbFTGFzdLEqVLmoHR5EqY1pdin",
  "key48": "3sP1srAHT6Db7AwKB8JdXGzUiR7MzNUTrBHwv9brxL7otHE9pHvgJYwCZUTopV7qQNyS8wH65RMMV6A65ZkVHRqS"
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
