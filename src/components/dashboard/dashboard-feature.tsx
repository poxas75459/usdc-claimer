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
    "3mm9yKvmSeVE95QQac5vXwU77F5AtUrsF7sHPDuUoXE8T3xEwyftACwdi8gTcNTBbR54Ldpi2xABD8LQwC2tc4M6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmidxsnK9yRsHeYrj3zNo2aQfnYLuHpLiT9xzMoXRnMhQKks35Ktf38ttbtV3nEsKSA7hTHbvVhcRKwknV1EqTz",
  "key1": "57Rv5BVv2xbMgJLZ4NNbFgaK5kKBm2impRxrwBCT1A1e2yfqCvkUyzAL46PtGpX5Uf3Pu8CGcqX3jZtU9s9UuwtT",
  "key2": "2qrJoKrzYus4M5uetDV4CwWW7yjNe7uHgT41LYed7zBYLjDeUVHy7KoXFtts7mpYWAEgxu8cQfrNXXiCJZuh9bvz",
  "key3": "5dGhnPAXnZqDLwzNyPHpmmicY89HEqk9NpiMPQN4keGSbpY3feGcwcFNeN2vLbJZ34dbWCCUCGhr6bMZ8zDRcMPu",
  "key4": "3dRRZbmwFKJQArQEtnHSX6iTcswH9zsnKxw5JbHKoDTmhty9Ed12CgiW4SuHd5qA6Ebs3tmPzh4ankKLG5h1eqC6",
  "key5": "42MhUGuiKHUQKuNrTJvZdF5ibkh3aVdejNwwZeoK1dCnzbSavtoniC88KkQoziu9wP83fiXBWGJABqiUnM4qRJ4w",
  "key6": "4U5yCLSvsv7xTJpw3aMxEhVBE9AisZ78Nnudcr855uDsbH7Z3ZxHRXTtM1Ksd6pqAL7C1T3wwfrBvg5pTv3jPBnB",
  "key7": "4ZS7nwVYroQFhaYjvsdUNAqxSRvAF1spMP9z6WS8bQxz5rGDRQjukPknL7W1bsjiXbGe7RU6Ubfd3im1Gy1sNrGe",
  "key8": "2ypvoux13BvSnMr53aHsiarvaFkFhiDr7bc1mcDm5wNVpmo559sQ445vhxjXNpphPcNUAh3gDjpFG2X6N9hFooi1",
  "key9": "31wwyLQj8w7ikqi7Dr2QrK9r4pZm7CtUEnsAnQnbeoJxPDDq2Q6xvkDje424RyPyBk1pYgYtRgrrBQk7FY6ThT9U",
  "key10": "2q5Ac4JLUAFmjc2eLXQJNMvdxDRHUheBrbkiwn4PRxfmgCXorvuW3wKhEYnt6Wb4QMaso8tC8hHwsXnpcA7QsSp",
  "key11": "3mSs4Z6kbRcD5yM8wPGtLX1WCdrESDfkVcTS27G35idA7YUW1ycKs4XF2BhxNoyDGnSmmbn5WabTFeEAdwij9mYM",
  "key12": "2khbtjd1pr3PTdnm82aUeKx9SFLs2C7iphL13mQYzKr3gNXMuVGexmksjDiRz11WtLXCN9AcDCzYrVe1R1Ci2AXJ",
  "key13": "3mF8jcbaDb94dcZddi15fdNnCaSwRMdQC7y5SouK1ZeB1ZuEAEtwXihjUziC9CDKRCSpBL78Gbt9nWyCRpQjz5yu",
  "key14": "TTLHUydRa9kRnkGPBTZCCDKzUFimVqzDJYRrAMTfyNdgSJxNcBwwMQ643hF2oNoHxVgrzyu9CG77BNbexB72nwg",
  "key15": "4YevG6PyUbXu4TwH6fcMEhxk4Zfk969snvGYa9iZEhEoqFVRZfCBeCYPWAYMLuBuEvK484yfB4Y98Vm1GxeEiK7W",
  "key16": "4Y9YopnqV16nQcBEoTi9a2VSNkyPEykbUsp5mtMwFyV9pbe7aEZxgrHa3n7BMqczaR1PV97k245uwZZR4BczRdZx",
  "key17": "5as7YHgFMK2hcCyPQjGbVYQdz78yoyXWjdT6XNc5xGQHB3AjuxpSoJ1VEYKFxyycnb1WZy9UyktPMtBY62wZNaok",
  "key18": "4D1Znm3eVMX1cqvAhKW3UD2CryvVijY7gkUSCXJGJQeaA3apAMJLnTuR86ESVNqvpbEBarsZ7mw9hkKhcFa2ruNv",
  "key19": "3F2ZuTEibPYQk6k2bVajGU6bJfRUuonFtsXzydfKeSoJaidMap6WRoMK16gjF6sGXMCPR66HTDjmy1PHV6E5NMAs",
  "key20": "2NM5DkLrFLqeU1d46RauxkuPLP5fDzsFX3GGoqeipkR4jxzttpotDGZHjYKzmB72DPPjNdtJJSonC2sn8xByZATn",
  "key21": "GPn7tTxdgXdGsE87TGXDpFkJfnmzL8HKz2deYJF1LvZffZA9ZChvqqT3wSkerxK6QMCR1XtwBarnJPZWegpKK5e",
  "key22": "2La81vBUnHTbX89kKmqCP81onBcAsWZTqaQsbXWxRaGEZbBK8NRkzPCD5hAusBTRnb54xT1w9UoMKBLaE977HAd4",
  "key23": "4aZozsYgBfwRtRbM2xC8weLneMipDoKWYEciMYD8Gcf4x5zUf2hmHjtdzrqo188mopt8eabRe3dchTMC5bY4BAha",
  "key24": "TiJUpWb5JkHfDUNbpHUFHhKyjgwa1wNRQTQFhEa3V7fMnRJPvYt3qf8ChXk1LLLUB5uUtnLd9iWTpvJTyKoZtcG",
  "key25": "4VA98fNeq6a2DaQpPXxqKf9XQBcer47FP591VrsaMJ1xkiWs8h9EyupAfSu6prpx8qjN3GULrpX1RMPxHxEytgVH",
  "key26": "2jrroxQK4YbAsfKa7d9SDkrBgVXF7exAADQjyYsgjw6o2qknuA1PJhmQG4Dm1tQD62KFnjwzA4vanNpxjJ8ina5o",
  "key27": "4juzEFFnDy9siChApdfrMy5QA9WqR2zGq3ykd5WuQPACxPCGKL9kRmctz5ifswpZ2jc7dhaG3Hb7ASAh2TJQtK21",
  "key28": "5D9p4HgnYHivYWK3cKGtSAKkZ4apwf3xRTe4ADtmGiSz5ZFxVoK9guUuRUsXkimNvj8ofvdNnJtPhwqhFWzQ5hEr",
  "key29": "4ssETAXqyGrS3u5QhN6WH6aK1hsFAtK3mcp3mgCHvt8TgbCtBXuAHNaxoVcMB3Eddh43DEESpN3KxzWBn8RepjS8",
  "key30": "3JPQCfPLznV5t7enV4uG24UDAe8S3SqonjH7x4QkEgYPCbbqcknfFSRGRKn16FCS2NSQgKevYVj5KUv77XF3b9BJ",
  "key31": "3WsqWQsq5njm3UbEdSuMDSRNjtPMmKy1JNtDavA1ovEZuwS4tzqdnCwUZzca66MfXJZ9esZyMySVLn4AB5R2mJvU",
  "key32": "3AvBuJQSgL6ezHT5CtuCz53AbiFrNNJzdxuVdcr8Y4qEGuSaZhvTtZs46i4PNjWiFPqwp8X8V8koViJ2D9udAsmV",
  "key33": "2Rj499oU3QFYaNyDr16Jy3jRCqwou3d3PcvWM3daCuBFKme7PdkMhjny31MxxJjmBBHK7BmwiwWo7E7gJtbY7vbn",
  "key34": "5XHvEdhZLQJCNENogzA31iAhDu9ysYqrNChio1PzzUTGvtdSciPmrNwWQHQShMTkVDdXWDP9K32RhS6KCvBPZSx5",
  "key35": "2kiCz6ocDpNK6GrtW8VpQzUPcuCFJFGWZ22PJ4EgH98PVvtneSFdqbcqt9id761Nu8P8Be5E9HwxHw1VpcJKierF",
  "key36": "2qWsrJxteNTcp67ajBNYfXyk1RS9T5zwHFq84wZXjqgWbQwMPtHFgxBCJmETro6uLYibTaygegtCuLy6qRCDDiTe",
  "key37": "3ffUvsUQCyqoEjE7iW5SW3hg5EwYgChZp2BAK4MivH59rVuofxqZKVhvYoYFoDV9JzUL4my9xAWdL1yAvv64Hnof",
  "key38": "j8FJb7a58yxjZQq1jwz8UQYP2ornT2oPTYUoRxWvvLymT6eKMEZW8cp2zHaBfwwPjcVH9P97HLfnKieqStVPCdT",
  "key39": "3Y1ergVATNsE1cvFozXduZGfKEA47Xoohhep1AzFYbxJYD5drcfTS3qchhY9MW3eMLpV2d2QGvWAsnDYtefqeWQm",
  "key40": "Dy1x42jerFvmtAaKMooAg1NdDLfRkDNqFLd87ngsDW9S2QmhtkqPqDnCoQrhKn6yqwe8YW2evstYbsr165WhrJE",
  "key41": "5beXRtB6TPnH3Qz1c5RgtgfZUwzUpRfcjtXzUEgKYKRJV8CxPTR43KqvC4AiG2c3xM5oALrQtXXgSn9ngQSuw7NE",
  "key42": "4EeSBrAF5s83TWZQB54iZr3GeZAu8f6vEMU1p71L3W1M5eBV66GR3t2Lmiyhph2b3DPximb79242H9fS6GFTPvd6",
  "key43": "53ULdaQAiArCKPp2dnbEegoSZ2dAafUb1UVVHSzqKxA2a9tynYgyYPcivo8ihEajNLSmceSJYL6ua3UMxaQvWhUY",
  "key44": "2aiFKa1jFZNy8qvi1RbJaQWDGWc3As3A5iwraiUFGSkt86MAUvKkz3WQnhNJ7jnGcDpcvz3JoWGWiwZUaqn5Ns1p",
  "key45": "4L13hKSs7WqH3oNWcA2atmdoa2Lhr2d15fdPZd6956xATdHCtWrEkWVU1fgw9DHyEKWrxKT7jfeZ3XvyE9BTopP4",
  "key46": "2SrZUA4rmF1KYHzSEhVXMD1P7TxobwkEhEvwCdTjvnqcqaN4GPQxNRxyYNq7RZC95sKGR2saw4JFrjTYCbJdT3nf"
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
