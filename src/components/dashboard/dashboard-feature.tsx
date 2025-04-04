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
    "3ZYKiXsctpz6B6RJDU87P2xQtJjUuXFysYw5FJMsc9ue5PqqMhA3onLFZW88x47VsrEtm7PhiN2zTC3a1twHbcoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NditjEj5Yx24Kbpvm5rLzerTBnHCNaBZ95qeBHEGG5YNvFBBhAGT8QrRQffARQ6AGDXRQBmHBXQriTFbYhLM9jp",
  "key1": "5to2AVR91XUJE6894ghkgH32rEWfCom1274BkpFJfgPjXpRd4v1NdrFS45fzkbRmDmkJNQr7D5PJ4RpxpKyEu6z4",
  "key2": "5Xua39coBHksEfPeMEG2eBoyhxyw72ziG9jQ3KwnLcUfPVLtnTYHndNEhKmKvCBi2MK55p4tzqjCkAQ3kNLXiFi4",
  "key3": "4PCEwCkcuriBfeX9fKQrMb19Le6epq96Zj3AiEvYUMee13jFDBmLcJe5dpbAoALj3JkRtViRUanmNJnY2Ln6pgjF",
  "key4": "5uQqXDdXhJJuWvWzaNx2kFPx4PuRis7ENr6vk9J9r6EuTBRaQDMp4F3P4pztwc1CgzCatUnQgHMjbQPMZAGmKXL9",
  "key5": "31fG5Cp94pCwsRtUm5LMzRGxFh4Ycwb6gyLSwTZ4gzNXUF5cCdJViMiCrFJ2segbYX6u3k2ZQTNXJJ8EHtuCeTmY",
  "key6": "5mzB5JWww4vvswugxbTx3qoNPg9Yp8vnV7Luz9XWh8N6tzSXeUerB38MPPV8WhN1DpwV9EGwDewFcv8jWFqxtiis",
  "key7": "4nqst9tY21uErQ6DxRyt2b214PUHAjTfEAN4tevu5UdP5h9ik6Bb78EWM1m8MJ3qxqKyoUyHg2dEaAoKSHBSqRTq",
  "key8": "4xxgN4XDxaceDkahTfres56no1PyBMxoSCHNMKn2HLjT5uVJjLmqmnZJZWX9LUPVAoUq5uyPWtQV8LgUphmvTWgp",
  "key9": "4zHnCuHowfqHMZNNy6WSCvRbVQ7RqA7mS1NQTjCeTFUAHZVLFHNdkRD1VXNYFsYwSBTmvgp3gDb7y3H8cdENJBQs",
  "key10": "5vs2RSzhb1MuN3iBX2LggWPKCPvYDjVhFxmdV9guUZ85RQmYnobEQQ3nUWahtffaSdjyimvSoinns5AnfYFbohc3",
  "key11": "4xHwsy16vKF7aUDE5qGBwChqXyyvxGP6fyjbEb8e1ypx8a3NQeqzN3gaHkwKw463SCrJuvgneVQrPPz9cXBqU72i",
  "key12": "5sDgchsJh6yxsBzbPGwCtcummF9h8LEE4NzXGS242Aij6eUtgM1oeKbasuJ1rkEpYViErk7xFBQ3NMxH6TVeFFTC",
  "key13": "39DNoJ69MY4Ec9LAzJZsSoRCsoTtSoxhdNjFj6kYNjX8DpcYx87FsMNQUnLUwPSE36ndakXqFaMyqwLjahp6wiPP",
  "key14": "5FvNCPPLxRGwKJf4qbWKReP61E2FywGDS8PiUmGbMZJbk3mDRdqxLkAGe3gZM7pJYe9BJiQG1KHHMdpPdgPH7mbk",
  "key15": "362FZm9a47oddm6bRp5xwiSsUmzgiB6MnhQbnGhh7unG12b5KV9hY8PJ1pzYsoYn58Mnf2c6Q68cHGcczDh8P8ad",
  "key16": "2dTvQ3DL32dAMB8hcLZWVfPna9Uxpe9mCxdpNyiw4eNMkvFkQaNySChXCyXVU8MB4E3xkFnyTZ3x4Jh3ySL37Cte",
  "key17": "2tbH1B1MT8ATfCL2eAGEs2e5kkZKk3XsYMqBo3RJbfHfPGeRhZ4sNcC6E1Pj44C89oJd5AkaBuKkgJsmm8D5QYUk",
  "key18": "2YxQ1sY3CsyWibsuZz7ToVWg8vyh7rBcBjM4P4GYSJSqEZsw34ZwF9enDT7CE9GXDR9DCYdUhyjep9YScL87mXgf",
  "key19": "tc85TsQxhB2YtYuwgE7z1rymFpuHjG5C1unAhoEFowjPJ67dAPU8sKoNBP2hsfx16AxhPEugobtWB8t2XgRC5pq",
  "key20": "2TBT1ZAUYLDTJgdYaC5fHBLa4NNg6L45A4bd53avvuhN187wCK8bhzMsn5cAqgKZBQNu75LzzSTBxTvGybUfcXYn",
  "key21": "5QatqjEErJZiv47UHfyceXQ5ehjKhRKtYqLB8SMVR9QYai1agn5d6Aw2VqVGbYRXot3PiJK3Hp5QUokGmfN55hf2",
  "key22": "4jnNnSte5sBBnXwpbP8ARYqtC4QcD2hR2vNnfp6pes4QeaPWX4Th5JKmRRLQQh7EhegMPqQoueB8k1pomRT3sjMG",
  "key23": "cHUYwJ1Krsk55TebbL7TLYXw2bH16SGJ9dhYyE2ZZcKAUv61QbuHq5UyZHwcd7EoD7XnSFKW3qVXx9bstCoE1Cy",
  "key24": "5YrBTnQqYr6YFve4VPuqDd6qrQtA3ihYryQk13JfkKCgvqbn8HjPQCGc8HqjM7zyBJNLjXafvrxRcHXUKjwcpSbs",
  "key25": "24tpKkTafSa1PPRe5poVg51NLco8HmbXkmsDMnnY4vNxEMU9zXD5oyaSFRX6VT52kNmaQJHhKwKLCZpsf2qn7j3k",
  "key26": "4vmnry2CN6kPE7GxYY2w55weZi9CHvGUeKkfAorgpSRsTFrtLAwF6jgdUt4XmdaWPn3EgAgoFKHdmLwF9ctZ4KZ6",
  "key27": "vf3TotwPq3mmMiyqBNEJKr26DqeZbqFQdkLyYem3WBuPTdRjT1SJE5TNuJMpfJGgJSvd2NszX2GXip69sERVr9J",
  "key28": "psHU1AcUdT778va3Rh4WdHjSMFoPsCcdEHVvW7fSfg1yLbTauurW4bPs558vitY3JZnYQVmqM6pSrHmnTxi82W7",
  "key29": "39aXB4DebD5eer9CdCrEbZ7mKwhqZukBeBd3eCeTLaszinPzvb4ywVyDBtDfGGgJjGCk1p5VvBnXTBi5RnKShmGU",
  "key30": "25GTsQ2SQoyry23po2U3nH4a7fKiY8enQrf6Gk1xQQFQEFBo9ne65EF8zs92UToDAgsCTLYpvn2GyZ3gWXNYKwEj",
  "key31": "2Dr5DeMeqEpCntX4amoyREafuX6usKCToKB8dctWWAtvcyNdvpabi9Ry1aujJQhcjH3UpPtk2k7vw178QDA4XmmT",
  "key32": "5NyDHPraQixnKgPtoMQfNrWvrsH28tdauxhYrfPH74rJ9tYVx575MaCSSh1WLu5aLmf8EEgiEKLuWHxr4Pv5rgYk",
  "key33": "4BePuNJfwZByvgEkp7QUyzfNY2WG37dWdvjkuKsq878KCyrWFGVAvPDLJ1A9knAh8pwY5bB8stURc6dXgaUZPtvb",
  "key34": "4XE4BVbi92NRQaGpqZKyL2bmp7QbsBmPHprP4AjunvoB8TjsgfVbptKyBxd1Gd6hGn4wj32Ubvohqp9EDBVG9JgS",
  "key35": "5LY7aE1Rsm5HzAA4j8Ej8jd9pMJcyUaMSz3sxr4XBu4naaZuhzBgjg1hKgEvJbRpRSCPrUveBe5VB9hRWL6trdug"
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
