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
    "2a2ca8zn6aP6mhtLJT4anAKfFCzY2DB6ZoCnzGtYndmnntK53334s1zc4KzxGmkBCnzsGYcCEjTC7SdkCWcoesrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EG4ABPBXZUGnypwmDW2RNh3TqELpac6na9MWRkhLgbQbA7igRJSYDrAQjVyhmFK7qMJFtZ7EAgw4oivPJY6UhTK",
  "key1": "54spkqUnnU5Lj6CM5Tee2fvNNq1CnCz4guDm13deRXoXs6PDaXZyMyfdspeqfrYgf9QSqme3SqD25mLZFS3fG5mb",
  "key2": "3npd1AVFd4ZdCmdm2CpNCZ2j2VBgHn2VkDgXpWkNZy1ZHom6qKBHghJpA3ZkqtAxabS12A8vLhB5cfaGmFbfpM23",
  "key3": "24rJCJZk3DDUe2au6eRdTgFdkRTUZDosgeoAawiYcvcSzSF3ZpvYKhEA9QW1SCtffmQcKjNBJ7Fp8zgnkByvRjEw",
  "key4": "5r1eF8uTVuCAycMSMviwkfvhNTNqGjfnWxAhB6ydg4f5bLUeo4QFh3E5azmn1JJSifpCPhJrfR3DgeD6NdizMoLW",
  "key5": "34xnXxFPUgJrA9E1FNRijoZm7TDhFcGgBjEWmkBsMh2iVKhhErvzQD99g9gGZi7RdrxKf7a3yGhqQCRXEJaMg7mM",
  "key6": "5XJNaNHDjqM6W2NCD2d2gdY4wppBbqonPCJMSKp9RHXisZXpYqyMV8hq5PDpbaQ4AcGyX4fVEXcWzJwV35EKVNkn",
  "key7": "4epZs3RRq7oCupgbwEZLLMyU3aXc2uCATHWGQRsRo7AtrjN8SJK1MwhJHx7kcb8KKt39BJRUtSDH15YnoDeHfK7r",
  "key8": "25AcxPU2qMAbpaBMBtRMfR8i2Sc712ygRsoAV9B5xECEqadvzLB9fQdHmow4HoALfZoqJStz3GnQafHeu7iyeKcD",
  "key9": "2cfE2kZcEvEn5pwRBmPRtpBdh91M2UxbrmY6G6GgPfxgp2GVoTGARdLbeYwS1iS5hsEepgEKFCU2hmzivqYu2i54",
  "key10": "4QvVv3Y8x5i6UzATAPCcoaYM6Pcez9NqGD8Fu6ADFPYNk8peaphcRWNYrm2sYgFgoYXPwhqbqHTnfwwxvwMpQfjn",
  "key11": "22LWJFpHmfMNFmns8kdL7dgj79VvvzqdAMGPprFazYYqzy5jLSASg8f4An8HrARsvSn4nZa4porHcAcCL7fKhHyT",
  "key12": "5xCaB3tVypJ3LgZvRqHtS4cL8kBp9p1Q7waZFsPX2PmxPgjDYmR5UcnFBooMJuYXXbA9V43Jm5mhg4kKqvxKW4Uy",
  "key13": "2bo9BNVMEzTDdPT7ifUtvckwJ6mX38LfqyP9ob1AaCfBH2BbPEHUzeFvAho3eQvYGpB4upXErGvKEZzkk3UJG5A7",
  "key14": "PtpBQrwCx2kiCp7oVooP1dduC2q92LpnTbpnyGXtiAgyCt8keH7Hc4rxXf83jHMKqnSWjHWAw7gLtrfSzu2YZEF",
  "key15": "4SZu7Xsfjzdyzcj6KeiaFe5z2zZvodrcRMB1KaWx8mecaXKQhzRYdtVPHxrz9jnyWk5sjU1FLEq2swejuX1TWnhQ",
  "key16": "4x2tT5R4FE2TCMCQMafoF1SKST6womKsMaHCtU7ud4Zxx6XK7KUVoYPTR2dMo6qiqnTB1SFp7r828ecaLLwsdUYE",
  "key17": "5V4yLkVwBuxedkwsfQAr8yDGNVHY1k8ofjzvKuhGmngHBo69xFHd9e63GwbUQoXDfYuRqYamFcWCSDAxy8EoPrY5",
  "key18": "2CLUtSXB5jZdSk52Cj5Atv9kR4Z9xJUfgzqweUCNG7Proa5xP2VvYU5QdScMTMo8QyUwiD6umUsp9epMPW4Y7CeV",
  "key19": "5NGgccM5bYGKZ14ui4ZsfSuz3Uy9Wix1DhkUxdbeCeRErbtsRJtyRrceyMwT3zUA6847oqkpnWLZRsq5bZbpRHtj",
  "key20": "3uaP1se9h29ZA4CfF2c1SHvC5jwD3NyMgsy88QqycXvv6zwFLjVgPJrDXB8F82pqx9paNY4nsZxPURFBfjhnN28f",
  "key21": "3FMdcZbqhaAW1rAuKAwCtRPncvJwu21KjrTXcqTeXJZwH98ZNXY3ZFcMJXqaiadMhETqaX8PqeybVft8acf6SYdf",
  "key22": "4vkFHu9eGSdR4D5b4M17dbkaRnWDgmHuUNQzGMrLKChUJiXtH48KHG1DzpWmkPDNhv89U11hEAvX59z8yhsm5K6c",
  "key23": "4tKqcMeY2fiTeLoUzhQ6ffAsMSAE5uARbgqBQZQZapTwZ7b5zHK9crstNFAR3PzhKwSFZgfv7QPzdwmuyziAFsup",
  "key24": "2tuFYZHD5oWkgZ9GMhn4scovFxasd8DPGPTfC3Ux9cEMU4RvB5jmFbgzYCJvfg8Cq7aRQK95N4et6CqFaKzJqWx6",
  "key25": "4mfChsqAirJpzgSWxTtVvchXQPQ3tBoZge8rGvVcyUkgXmSacbhcnEYAWJiBDBLkZMA9CJeMvXeZSfY9McuVVqUq",
  "key26": "3a1T7PqUdvTWVAFUV1PWUz4X5xXs8axXU29Kf3T2vbL1G3bJ2BtnPemhApabWdZQ9TqmQ3uiMzEo6VnSWXLCjUKB",
  "key27": "2CX7fwx7WFmjzTpVi4xbejN9viy6ZZ4d38vAzo2Qyk7vrGULU9qt1SB4RmB9CXimf17CLYJaqC6h7czEvAQmMBZe",
  "key28": "v9DBScbeFyn5ktGKbkM2raufrUSYPrt4Cnu5AUQGqWU4RwfQkLgE2ckz63MBDSf9sHSd7ag4YaMbPg9mcj1s9DR",
  "key29": "42vssC7hmWoy3yAFeeJVKAPzeheKXFo3F6KHEV4KwwGskGKPQBXCTZP8Zgi4gpPQhCd3eARQRjWMv1qbZwKqCj1Y",
  "key30": "2eEKhmiEkYukGTYfGrbTGYrAu2RSrHjBSfrmoJCxXaWGYbh7fsfoiq7DGsYb13CxqhAq66bZNGirnj2cZHUqzdPU",
  "key31": "hR1H9Kq3uRGygVSHdkbhBK95pSAYznSaeUjfyGDQHrTu3qxp2AijRSX55Jcvs8dwwefTkGRuRWev7r9NdrdQJzs",
  "key32": "UD5w6yRcUXZas86arDEt4wYt3QpFVwGk3y7uoYZZxFdEQTQ58HBSTRtMR9zhHRLNbe8CFYGutyU74mq6N8AcXEZ",
  "key33": "3N49vp1oLyignXM9ckRhMV5AaFKrpLDxY2pV4p8EmN2fwmSEXtPr7jcmg1TXs2ssDx52Z56bi8aUnVQMRkVveNqv",
  "key34": "3AEoBt3Arv1WKb8LydtBfqiM2j3dBHg35iHQSVnig9cxcRciiu8817nUahfWUWG6VGLZNVPLxZHH4wfFQkdbLJ2M",
  "key35": "ZxarzzHEfZK3GLB6CevBFSXQbRuZ5h9ee7sL73nTfXC1iWxiYBR3CZj2HhjLH6aUqzHYLqyjJH928Y8vXPyFP6x",
  "key36": "RvWM2jbLJdkxiwBzwrgP85nhs2R5kyx3yBpi3mRZNaMhb6dDLPayh4QdSJ3wkJnpiJDETKzYwLjGu236pKUQ6Ai",
  "key37": "MFKP5humB1imrK64mERhVUXQ6HadmT4gcfLRVTqnTbjAXZdZ1XXuX5PnbeHyM7Yza672yNxWnvbpijuPocM3fzR",
  "key38": "SqweL3CzF1kAtsb8MMN59TsxcUVzXpF4ziDPwyroioav1d6vpex6tYEAQZDKrkfL9QmuURUqX83QQQHmQo92Thm",
  "key39": "4dimUGfyKHayKvm2fT5CKbaQf79dcQoJFAmxdQ3LN451eL6DGGBinaX7EGb9Y672xrN1a9x7ugWj9NLzCCMnCSCn",
  "key40": "5djU2C7BsYLqKWxj8W5ByivtFGHfc9qMWwmVPSXh28xmmR1TbvEv8E8uUAnabZn8pjYYq4969FyBCGcJDZgoQVUH",
  "key41": "2jrLrHcLj6WYBU8cjFTBhSbpwRmRTEb9QxKzBTVkb45wRxujdenKQaz1uH77uCz4asGevcbQYAGjBQ1xjd12UY6X",
  "key42": "4kK2ZasfXz6pu3ZoqQogTEBMMDxMnzPBNo35FfNH46XMQ8KMRCrQH6ZMnTociy87ubZYo2ysLQFGiCpoj2F2r9y2",
  "key43": "YJ5ftdNYCvzWVsax7zTieuYfBFQDTqcUK3RNXr1frCcwFKPekVmxAwKB7atqVXsiPbyYewv6TJdLErmg3TFGj3p",
  "key44": "5LxKMSVjSidnGBRzcLtFq4gkFuLMuXxsmg3NMo4W5hGjDvtcH8FQQhQcFcuogxpc4GBR91YeR1HrkHVhJmqFKuJA",
  "key45": "56vNxuA8CZoBMihUmon6KtvVgzJAGhsy8TtNQJfkRanvx8yvRsNMggirV1gbUXPngMuxds4Bhh1vF3Vv38mSgUyt",
  "key46": "3EURve3XKv9cq8tq8bGeXZASLyZsk3ycT3DzxTxy1Knf9YkrRhEKThDBDyPRSPRGeLfrkJzBSzBbUkabMehszUJG",
  "key47": "M7QH1HBa12Dm4GCftoATfcE9RRzLXkNnBgsegEC5kEjt3TtF2fR25H5LuiR5RmBconne4X8anXUUkkTaoiux4z7",
  "key48": "5Lrdj6jekFEHjuoizbJat1M3pvc3VfnG7F4P8fL5mwc6XC4oJqCLmLuUmt3nfPjtxPSWgoS3vWAcQo2kKkbnKggP"
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
