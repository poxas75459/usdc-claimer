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
    "vkqcKwHsvanoy8MuE8TsANYAqBY13Evj2roicGADySq9EoAFdZD6GuRNwn5qC3xfRJLiaPwn9xajtMKDmeSRHYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589ye1XKTko8KBNJknVPDLT7zGUNEs6Es2GGHLqXeYBUFDnY7KWbVDRsuyn4L6CMdGdjm5HbFgn12pEcpfCqNvEU",
  "key1": "29xHQzkfukFVxpyZxeXHCDbJcxPPKML6A7NWbkimUWGt9LhgnMCkXjy91eaxTLW1YobrGWh4b2kZwwcfiducCvjU",
  "key2": "24TWQJmRELqZMLKrtqAjeug5YfSUsreMD6RDHfv2u5y1sjE8qowYiWxzt6wfXYk2rSdLj7x2WvyK4xr2bycYcmbk",
  "key3": "UT63DzueN7S44YKsDfFqm4q5X15kxmKUQMmFKBRvRSRPYZ94nqZQ46yccbCoa6LBYcxKgr2YmNuDSU5ySnNGjMn",
  "key4": "HPc1XzyAS36EWo43cVzDaxAHveEufGmS5mY76CWGSrxh2L96cGZBA5jkVak9jfDLp1SdWaXdfZADEsh4SJquFiS",
  "key5": "2avYNz8EdsRYasVTr6a31bJd4isA5DJePA54nHYvddruSSeLg7gCPbtiyEVYNLGGVcCq26YbJXKciYBR7V7pUq3C",
  "key6": "46eXrZsArm4Pk8ugF94qgcGvwGmKCPdxJ3KGoU43gm3iSrBihovxv8G4QYCuhFyPkbEMSi3uf39m6VPhQ7CvrHqp",
  "key7": "4D8xr9Kpn9vkVhzMvWCQWJcbLo6kBafypnwkNFhSVgWVaSci2rGSjZAFekiNNg6bnSohYprY1RV6AbFu3kNUZe9f",
  "key8": "3Gsi169nsn8pviFCjB4PWaWkuzj1YEex3DB8h8j3smCLxXXicGAqYbazQRxGfvaZcGHNEMRDXTVGxpQEcmXBaX8B",
  "key9": "2h4WKZhHEJTwsYDvALX1adh2xUifiXYH8wHHLcLYJX3mL9WFUfXgCrNePwKuC7Vadzu36TizKxPtdW3Yoe4nUa4g",
  "key10": "56REwKEdX4igDcFAmQHDXv9vw4G52rUx3bGihspbwHZJwFTtCZoxUFBHEEK62pMGXvfQpintx92fbVVQUjh2xZXo",
  "key11": "3knPpsr8HBg7yToCy9n4PGK3DbSTDhCHMU3ZHebCsAMFTtTEhaRcMGFdxHk4UAAL3tVjGGGEuWH3VWZxTWZVcVAu",
  "key12": "3DLWsAuuKbBXPWXUfEUM2im5HAEc7HMf89MsKbhYB9ftXUhjeVXiYV5BBb8ZcypnY2q5MMcqpqMELuWYeCA9QPy6",
  "key13": "4D8obDBg7i8WSNiyKZtNiBeW3uJLtPmije1x66jhx924VLcVoyW9t3iGoyp4phZ9xnosmDzJ3opYpFWYnYsytdfC",
  "key14": "4TogjrG4EKu9vzaHDBRx2P1Ffr4TPA9Tnd9hLx1WFz65TNxvfFeehkt8aavB8zdNsSrFESCp2oPQhJdchbhdyK1Q",
  "key15": "4LBVkEjoVPfZXE3KxATJNoJhoJMirQeE91W6nCYd5JPo8D7HcPZ8ZG8G5NX4qhLJy3TB7j7tZVv5kVT2SRDBJFAA",
  "key16": "2q7AobtMk9QKV1C5dyDFipCh7ij4exNYycSX5J7JfdjXTPqLjfqr6bNcDv8ZtzhGXa2AED3QbaDE1GaFj46f1784",
  "key17": "5c4ArfRQ4GuuRoGQm8KCqGHY3vGDS3NPHGWQcrYvTWJ37sKbRtsiLv1e1817TbEnz5uPboh3HKCzfAzAjCEzfpDa",
  "key18": "3UmZUqYXao5NFTykYTJezBv7taZFvn54D2T46PBEkp9NFRxWmFvuiaYq3cMtFVd3qyy6a1Fi1JfahVueZJcYq1Vx",
  "key19": "3CChmfxXRUmHEnhDnc3sS8HKLKF9U7Sxc5behiGBYiQrFF6weLi5U8sLAenfTRSjjUHsEzVUoLFRRzFb8SNKyYHe",
  "key20": "5HjqVwRZjsCyQyqNnARpLPWsReWbZvZ8dBgXvSv9qWMGbRy3scLbq3BUBZA9S1McZUiu7tHmk4cVaMpGce6VNquh",
  "key21": "5ARE4Hm7kQHtWQpteDZUEdLFPVYBqWqJLDYQPkyZiy8rPDg97kYgXxtMJY9MU2fXnvWrZ7GZPL1Hc547RQzdZEkm",
  "key22": "5XD3bDwV9eB3ibQ9w4b3cyybJiWgfvCpTVMVpTE9NkDKyAbb4FKLgkhQdm7VjFUyvb2UKejTw1TCN6F8wY9TyaKS",
  "key23": "2AfmqN6iQ4uxfPDDEvWBmz4Ntzi15iNfMitwwVgeTiYQFbKbY1iBDbqMCLwghpsTyuddfZ6TT9TqVkwpM9qRhirc",
  "key24": "29JaDpcprrb7cnLTm5SYy3D989Q5kWZT4QFCAJ3dTZEnBNwciCPSAt64y9fczHQxGswLqRS21cpaMJrr5HwhGxVJ",
  "key25": "3Bua3i2DzteBa5L2sTS6Evx9shKm8XWnp8oNKkWsaVDUgnUykncTtF8Q4b86VdLEuFF6nXfjdULAdv4RYhsDCzud",
  "key26": "CbUKpcazPyG6JPBUPDQqT4BD7qDv1ujNT6AACb5BL23AmUuSU8QSrmH8wcYCgmgjip6mBqXyAemG7uiQYJYvbt6",
  "key27": "unF1D534Bf2aS5B1TL7r5LEQdjGDoAidFEcMxRbwWy6AxsAWuMY5AGRozCnfAjL41bK5LoVEta8s4pHE4JNkTUw",
  "key28": "qQvsdPGaCqTcSRf2NTyw3aLbH39yLnd5fxbHUZ93s3zqC15YEDpAfWezGkREiSn66ib1EXfxQZCQ5Y34XV9GVXK",
  "key29": "3rzHXRGq6GpAEWaUHv2nfU8TfxtoZ15sCq5C5qqkLugngCmoBYJ5RE5EbipxhAzgoL6Ukc6a4Z6JdTy8LrEmc7FP",
  "key30": "2DUFrT6iY62H1kazbxUqsprvg8WVFAgxGjU2vJcJP9xD2puqW4wkJ94MU4YXXR1pNg5szxTqf2zp9dGPaY1J811m",
  "key31": "25fX2qBJSKXf6eVcjnYeTYQXa9s9d4N6jRxbnB4anNhtkTFtwTdsRyyBkMYz5s7fdvbhcXDkJHV71GeQK28tF8LD",
  "key32": "2Gc6VKeZozcoXtAzabLLXPv9ywX5Q9Dj37Gox6CSJvPXbCU6yZeWfr3NZJLTP9yiakGDPUoX8eFHA3fZhSm6qPnH",
  "key33": "2qHexjfeSvHMCVFjdErYcG1cdcb1paq3yec3fhYH1sbSRxpv7aaqakyFYUwkb7QXYLiccnwcfGRspRsXERbr1CWM",
  "key34": "4QZTDhU38JHUkymsrrBSCN82TwJ8yXHHMU8WBA3bG71ftNJvwc8S1GsKdC4z88aZ8wuXze56g9UYZzesTGXGwLA7",
  "key35": "4KM1SBeLVVofFyrMmJvZJZQeXHbETCEqBtRmAWXT3SSuLv9KnZCwU4otr9VcEnwHkMtgWapgtWjAz7HMeTU9V7x5",
  "key36": "5Fi7SodFtRgAGUmgCmY2wX4mJvx5NA8FDuq2Mgs2CkScBXsqfYHjFm8GyoMK3n78sJZNAnB3WhVS3uGzeFxfqmGL",
  "key37": "627VZRYT6dFoGD93vVTLbjNvG592wP3ywxxtNLbjrnNes9ZrHN68RiyEZnKCfukWZukostJYQjpbdhKhBX3sf2Ax",
  "key38": "3w94xtgpnQQKNCCx5Dk8PMTHHsJJ1G3uoAjf8S9BP7eq6wrSx44hdZ9AaNr9yukxerVMHi2doDEMcYxPeuotUMz",
  "key39": "PFDTs8DWqe2CTYCHwBx8ZiZkcXPpMPXaa1oo2KMSTtDABP6a45ebe145nGamTVXkSea5MagK2nsgSZhqwfPv3gs",
  "key40": "31h9CyqFy7c9CEV6EAUdKF7sfomVHgJXh5n4cLfCouzEomPRvf6Zfugi7HQZ4ZRsT3ovAtih5j8MuYE8ERejDYN2"
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
