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
    "9Zs3AwHGxgByzgMXkQYL7EfUA9r4CmZHVP97hhw6QJnqurcnxRB2BqifhVYgchmtzYDiNkc8PEYMDVALuPwuN94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxBxpEwa8xv55ot8prCJYeZaLnAQVx8xXAFejH8iRpMuiRRWxA77Ya6LrDdyVhKGsWQPYa7G8PZ9J1ZTorVozqz",
  "key1": "3WZA1TKm6GY3gDTUXQStSyxYXwDrkbrnPty7gb3beQnWcaE6A83rShUbgd7oNvHayUSZxzS6GaviTaarQioWDPiZ",
  "key2": "3NnW9nEtuKhebhD9gewRcWCSPfB34GxLcHVcxxaWyk3FsyJw2CjZKRdi8M8jNxNWkyx3E8GDVLUxx2F6EDvTqsNk",
  "key3": "aFaTFMU6qfyz2y3nJTvwieekAst9KnAvFnUNvGX34C52FcwEK8hM4Po4zcwYtEk3SkJGrMtNQf4V4P46oXpsTUH",
  "key4": "3z2JasUxyraQkoos6nVcBCff9zGhfw299eQWVbZBcPYkYuTnwubRczDT9iGJXVeRYKfoFXdc5hxr1VNXhKLSrcA6",
  "key5": "29dWmdZdatSQFsJKey2vKSwDYe8csVArq2UaFXuvkur8mri9kVZarna1dTPXiEtZN4tkcsECpZXFMprNSXiT11gW",
  "key6": "51z4zDaBYGf2Y9BTPzc7cgpz36Qcfx1DwaxtV1TM4reaghQ7P5ccyZDuCoi5FML6YsErAeCbeMxpaZanVDfFy2va",
  "key7": "31Rw24zTALTNLfQ2UzNoUEysYsVkhay5LF5H1QmREZ4oAMhGNTEhA9QwrBQ2rZCPi8B3hMyQN4RUmZwxJMKyqbVg",
  "key8": "5XyfiZjNUxPZ5vNXghDhSHusFL9ZPxJqcj6i5kmXESDN4TmQyBvVNHU9mr2HJ2xJJDgAat4E4CUMWDLvprdiL2jM",
  "key9": "fPP9TRJ9fdKqfvBtG1mVLV38J6BHmpJqF5BqDe6b1iU8b8NsrtMvG6kB3rkq3iUpv5WbhCysxbEoMMimg8UBqNF",
  "key10": "5Xvmh4jp9Ucb4MZALHHMPR9pdCk5jTv7PiuDVvAXauQuSLCrAmLD3ddq2nezyLNtg8Rge1J3tjehT9uUUh33tVXm",
  "key11": "2U6ZFqadpgvXoffyxGXGvqpGUzyx2Ss391FqqMA7Jp7RijcBfr8ew7ywuwJHGRCZJk2z8MKeq3Hm3NUVSC4Viq5W",
  "key12": "3NfeXj77ggXsts6u7fYmTcLah7oStiufD5Q4w96rEuBPUcfGuKorRtJjkNHRxe2JhNq7XmRqVtH3sSyjcNCw49TK",
  "key13": "5erBGRcU35f95hviegcjxDLB2jm8gT4YHugTdJmEigAG72raobV3uqwojvC6QHERpwPu12sXNt7AuQhyV67QAYyx",
  "key14": "5uCKG9F1cnk5trY7t19kuy1yBy74CDgG449eWWK2mEhkiMDJsV2QS3868PxK1j64sJRs6wsJbjEEfGqNFsaZQyAY",
  "key15": "4sxDGaS3bytbydH5HDo1B6qrnswaVesgELYVxcPbDJqz7P4fiPE8VPWN7fcppWXyDkBrY4pCGTru15HPbWgwyjKi",
  "key16": "4ZyxUGz3Wqcn96k8fDqHwsPW7CYwt951Xe9RoCoskrDGpyRH4hHJpTagR7CNEwhxEE2ce98F4GvXXJNsYPAc6eWU",
  "key17": "3VnkLswbXiDEzzRqCdsSF5CWtnbW5PuVTfjiy1nKVop3oR2YUxYmrwpnY5GCwvrj6LPKUG9dsjsNszDGvPhCs4Tu",
  "key18": "4NcfBs1dp4jpfUPWGeqQGKiCXRaZ4wLTmkvyNZZZJvyDdN3RjhVgSvWGvkTw9UJfYrgH7NtZMNy5CGTebkXnNLGM",
  "key19": "5hWyX4Q1XyaEJ1B1BNq44HUELEeubM61w3Be3no5pn6dwhpGJb1qgNwTpAycbpBx9aAGjXBfoFBVRiCzmsnKkT9s",
  "key20": "3FKfuNNXHcxRZS2LPR5BqhEHMKMSZ4M5YwVHzKcT5tyTV9AGd5ssxHiCKbk96qqCVCfRaZHZq6iJy8WXGPspRtCC",
  "key21": "5WFHXCXN3pSpdchrPwVpYcpeHy5pws1p1Wo4qadzERXJ2gd4T6sGNXypioPUw9MQx25SshYqmxCND8japjScqs7y",
  "key22": "HuKUnfMPHJeksb5WLDXdVQ27CHCx79FmixnoRB8Xx2Kd5LbjGfA3TvzGigWvKhPaDRA5iGCZeCcqswut8xBBHin",
  "key23": "51bNrnmHxpJctFDGEtwge2VoHcs16mGfXgrvGczPx2DLpQCJMH9wBa9ds8ANy9ZayT5hA4XBzg65QDZi81bCDdct",
  "key24": "5Cwtm3yZchQNhVVmHDJoWbjqFnbevxE3B1fiv2hy915Mr8YPEysatWMJsZfi5HBnMXGaLzFpjpCKF3C9nz4iX8sK",
  "key25": "52WinBjLigUrA3rVAXNnziW8u9cazWJd1GcU132d3AvNzdeRn79bS5QrWwpiSH74pSRHuGVEaTCALrASDn2wWP8i",
  "key26": "63mhsFxMQPT1nF36udHXv6PbpyCDueKi1qZxFdUATpcbEEuTFfQXKMcbvJW7mXj668XxrtYF3YiXyQrrDFnX1MqB",
  "key27": "3azMYn2URVuypUxxRmExZr7aXw3UDCnhW8E8Aq9UiHt4eGi8c3wPP6A5ufbDKASnkXZiYv2vZGpf1Tu6guFRdF2K",
  "key28": "2zKj1jSrLLyncipu1FqqdCN4iZnCJbFQSbZyxUxHKFw74PSzAcx3utqNZ6FDsQAqtEKVt8y8THe89FhhhhyXkutJ",
  "key29": "5FdcCTA1TgaTMXzwDdzpGpsAtFguNk7r8nx5gGYsyFVpzVqNFzy7g5DsD1d6DfaE2rTJfzqu2tdBZ7JZZcmuCysT",
  "key30": "5CzPcEGREYPPK65F6QiyCxhcNgVYm4qAYaysSR3a1RbFUUDhfJQ5dYDz54R4xuitMFpTgXdTJCSN6bHkQHihHmzW",
  "key31": "MaCofvWXPdFqaPEnNtsFP1hmdHW6FVPqzdQgheHqogErdnMsrF4GAcjMAtnz8WTWRAZmyhTJfq3pavebKk7dsio",
  "key32": "3seMEprdbrL2fFqiTNQ7Pug8WGFrqxVBb3FEpRn5p8yW8gimX8KA5tTL2xFzqBNhu7AHDYUXcN577de4U3GA9ouv",
  "key33": "UMPQ2LSs4m1mXtPKPFSLKPKCC4rwBfpxFuxGkckMKProwqC81BPQekg2153qumDWntUHFLnbP9SxMXDdwMgFSCs",
  "key34": "5oRuKXQhPqLYLJS9EuaMAbKv2MWgh9UTDTz9G9xdryk9URiD2wUNWaKkYVtjV1qMNNWZDuHcqjykYszoVJnWdXVf",
  "key35": "5oLTcNzpot4Ahrj1DLGjnUkscjkupfVHMXKJ5acXDpX8KXH7mQysw6F1Qq6RkAWhkAqb8yY9K1GQSp6ninQkfL1q",
  "key36": "3ovBXB6cULcRP7LGTSpae7cMURQSVM8vUFEvg3xs4qjEV7CZXVKHNR6ztepoyXNmWGQqPiAYhn55oY9tepWUJqtG",
  "key37": "VGKc9dCRDxD2EtzfWjAKjvEPaEgmR9anevb6HMVHsuUTiFZuZXT95GVwSSciia8fVd4yc9fPi6SkK1PD6LXNzZ9",
  "key38": "55UD66Ba2P2DyGrSVGEMUm5YvZmUVEJaZuPh6g63sdKsGCMYQbyTKs1AW1GyFcEuayjvWieejJSZwcxWur7PocQ2",
  "key39": "4VbAYbyWMVninAzUWtRPeWcx3KaXKi1gfm2rkp9s62Ao1hb71AGU4ZAMJb6BrXeWYfeEW2ogqr28ZVkYsLgUXpNo",
  "key40": "Aq5E4Mz3oM7318rLKZnzpYbdfJSYu4dznksh6wFDkQsFQw7kKG9ZAMnQRahAXvcdh2FcafL7L8gCUDnYYdax8tJ",
  "key41": "re72bpTiuLgnBnBuKaX4SfSA3hrtexC4rtx9WNhwYpLgkBvLbrrrcwENaVCV5Zav1exLK7GeixLa5n2QSrUWYgs",
  "key42": "43UxbR3yNxtnx7CGjXVuMPJ7jxt6bPYwojDvQxmuuBbMTC3ow7AdgHh8V4dPdaKgRxoUD5egSvQQP99m9zX3qyN4",
  "key43": "49tg7dvzKNP8uNCQoPZMjrsJp3m39J7cNRb6AnHaaM81h3X4sSsRyHtorYm7PmAzxnJTBozfRX3mUS8Qt7xoQ9yK",
  "key44": "2QyaddAEXMAjHW1cUfMw1YkAPSjtG47zF7vseyQMqcYTTy9RXsb1qRM64bvpEcY9Lne8p1u3AGGxJR4S57TwHRjF",
  "key45": "27zqLPxzfoxKyAT8wWukoLURAuHQtbwyGBggdB5EJxPzYZ4rT529VTpsZZdCbg6rq4b25y3Pu4KfFfgVabChpkJs",
  "key46": "3KJRf13h42ziLGYpnQ8gLMbvu2WC9TokRFF82PxtiQQzkPAkksUqH8ib4yU4y21GACSmy8h7Np77Aiw8YbqaCFTs",
  "key47": "4EcJo76hmUmFMBzgX1at7ARejM2U1PXLN1nekUASJFb1Ya2mT2oVKmw8Qy5ECjx2cc8c4UmU4hqTqb9K4JdEi2T9"
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
