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
    "2xFJ4jtTffVv4ZvprNdR6THybshzkEi9TZDvwrZT7SEyATccobnJbdbnw8Gc4kH7suMheKs5jaQTahcgniMBNY9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fv4i9SeX98NKFdSXvWvPJAHpjaAFXuyQLcpcFAHAizgrQ4fyNBdm3Sx1fcJz7drk1YCfxpzvpXPegnK9T42r7bq",
  "key1": "3ePp1AEK3bFVf6Ub3hCp77GqZdXARiD4c1CqhTfHGo8vPoCfCMnumNNCt22MhwncSERMWcj9z4g81Gn79NrvshsR",
  "key2": "5sTCzjzzN5mrxyS7hjurC5N1iNTR56uRpGU3zYE7EG3jC9sq1Cy56EkWW32zkPJMVdsryamvuRyNVAtxDuy4YvmW",
  "key3": "43pfvaXH7nXhMwMPtkPcP3YgXw9frVJcGGt4ggXYNTm8JhrcqAUxAUU1u6H2GyKms6YfoTZFZEEXEY6h2j2PsWiN",
  "key4": "2mML4hoYD1kqrVqDFksoVFFTvgFGtLrUjbbxRjLynZFBg3UJQ67tHgSCLcnLdjHkxAzzqFVp9YXdGRhf6kQdf46n",
  "key5": "3BgTUb3CY77WjijRVYX4RhsQYpexmMVaspdUWZ7kVbYkNva5icUUg71VCVPxYUrGPZBxunjwzAVzSWfX6XhACmkd",
  "key6": "44tkQU3TZkEkS4k6tfcRUM8dAahxhXbiY4GcNj5tBqZod8vG3ApCjKzQ1QeT8hPUSnHDLoQcP8KNfE7qpRGQgMFh",
  "key7": "5w6kbEVCUqZj3zeQmyBFu47JCLvFvjFjc8XUgKsfFfxEF9MqBsG4qS13Vpcv1fg15EF4vdPqjFbzuoP9tBMvQN1F",
  "key8": "w3ePcGKEE9dCW7KwzGUZUYqz5kzr98C1pr5QvraeDyQfrEijeb91f6Qnc2NZ6Ma5ea1tx9XKnCPJibrG9usirKC",
  "key9": "3oRxBeTgTHNEnsaFKcp3RRFnmfGAD9JJeg3gf1STyhDAK5pUUAbLNhPTSvp5Wp43i5Axbu9uA1eiMA1goBDPmVwe",
  "key10": "5crcHY1PeyjMEBMnoMphMv8bjH7NGiKpsMP4yoePBjuA7zNE3UX3Bbijx22tWopXnHzCdNWDo3m5DU9EDGdWRzLz",
  "key11": "meLYMQ52LV661FFgY36ugPWSfxniktfXBJTWKThm85Rnwg4iYuGtQacJbVPDfLs417383UzQA2AxPe25yGtoMr4",
  "key12": "5QhrSg7L3d43S5r4PSSGzmEA2jAusRcd4m318erbHvoko3gYacFpQHRK6iWRUpVn3Cp2qHHvqYq3YzpKGGB3WGrV",
  "key13": "35K6QuJr8EzNCWaFK6NcLfou6TLKQRxZSNT9GcmzgXC7sL44T14SF9m3extycyhqCWtLm2dhY2G89t2MiiBHde61",
  "key14": "64JiDsBpxANCWTVbnbX2zyomhaEbB6oVHMFHW4X26S5Afvh2jDDf6xtsR4ddYmu1g62uTaC4kCeQtQjYrB7QhWJG",
  "key15": "587jdtv7EobygPEExAujquucBMdoMEGLys3vXLjW3isL4U8fGdMhbqifxaXYNAdP9BsHT6US4zMMYqyJFvMfJa1K",
  "key16": "5arLnrJusEXu4keiL4mKhaKQUHnYwYk4nS4fETaTMFLqb8y5Z46124qLZvQrSCFp54UdMXcHiP1aUtQ6rtVG58WS",
  "key17": "31TSDaLfKLz6HGh146BybLsYNE1CaQwerU9FbQ5fFULZegpb4Kop4phZRHF4aHPEKwB2MHzkdfFvEoi4FJf2pSv",
  "key18": "36WvJJE2zQWxn3rD3CuNCGH9X4aaFc9ahvqmmqSvtqr2k81WVufG4q6oHbMsFm6rMgvGFDAbhHFsPDLmyyAvWCgr",
  "key19": "3PKaN7Kv5W8oAQ5GYY6mhhUMztb1Jim16br8dHfKwsKk1jakM4KQsad2p6GhsmzMzzdSJi1SNKNztuRknia3tdmH",
  "key20": "54LdfzNBcx5RqKVuqWEQVCjKmmqXfmonM7DStu3tAycutgFkZEZSwFSrBDie8xs7kcZ57fdkiamiRiyHsmsRGkS5",
  "key21": "5pdrx6SHd4vWts5AkuzzF2S6bkZhWwFHW7zhkrLyGWyGEH7Q5R22qNEhDqa4SBfUqdHdZmgB4u8dULf3au8Zz99x",
  "key22": "5QN12M4aomNqLhKgjNwVPMgcbdtaeTdo162tEURozSxRmUwEBfViH9wivLe8KJaoTcAC2oPnaoCEAAr4pHLSvfFt",
  "key23": "ioeAArVnFaZtEXDRoHXVruCSvRfyy6yiif8nMjBJ9Eegx1SW8htZXC9TrWpyWuhhA3viLLwvcUHDo8SRWzRMp1q",
  "key24": "bRM2ppygmbnXxfrARvcUUfrmf1XAaLpSmevVrx67kevPsPfbCHM2rnP1Uj9KadcMmQfi2zZkAykLannN5qTy8Gq",
  "key25": "5otT9ycQ7re4WM1QcU9KZfT1JiArDXKdo7ZnfuEE61v5QxHAmSMuU3EWJnf8aLeBLLB5Q7DhX6M7y7cYht8FgjUe",
  "key26": "4tMsSaB8z75VMWB94jiGKMyuXyEMLcK8UFK85JEL2oqEhsuykxhvt9ZFyAsN16rkNbzp6PHTzHJPe7BctcXUgzHe",
  "key27": "3gUzytRW6iHoHY55nNdvnwSYFnfit2dH4xMF4ax8nKnzhJa2HPvuZfHiH8wLHK8Gqiz85t5ZJ4dGcw3WfRwmDx3v",
  "key28": "4Ce24TW3KtgGdPRau3KRZnfP3e23MJiQqrzGZ42z4FqpbC7EmeChqnh7yM4fHGhMTXAaAU1pUMZ8oXssUk8ody5b",
  "key29": "ja4CxDbz3mcTRcqsLcnQkPUL8vmjtEh9SfAik662qxnrpavuGEAXugfSdzp9KjMdkumR1ah18oFn69wfEBDMZDD",
  "key30": "PMgYBV4PdSDssksM1fm6tNiRrJ8UtBcpait3ninvwq5AwExHep7Df54xkSompWz9rio2u78ZU4GpQ71Q1LB4X4D",
  "key31": "4ToYxhAPWUch898vZbjC6s5mqNugTcnbKjEKoPnE37HbBXmPPhj6nnQTdwV34b3p3mdY5DJisCEJbwT5QgHq4vgJ",
  "key32": "8uS5MCjFjejQWKfds4oc6ofbAGBcfSJtssrLAJFrKKnArvpvn5CxYs1LrETeEWX6JQNYu12bUfz45FVtMytqojb",
  "key33": "4zVG9e2RHTN7SEXJvLLnKQk6ELQ9WPS274HduJMNNBzs5M7jeVjmUrJmDBEkj33LAtitemt7eVGyL8xZP2nWG2fn",
  "key34": "ujgQSeBXCZuMTY9TNNV5bz2T2yTGYnaeV3e4mHTnvcjFDciYmMnw2BVe51BfhTDzQGBb4MuNUMNh9xnFvHqgiwb",
  "key35": "2QNeNn7qjKFeaX6r4V52ciKYiiAUJK9MbpF5WDBC31aFr6tmpGoL63qW6rMwMmdguEXa6PosofDkaA7qJDcn4jLo",
  "key36": "2NV4nNBQX57voRzVwr5tU6X2DnhHUJ2FEwzR9mQHVrqWomNgvxZAzDbRmvLYKZ6tPcKnngb2pu1P71cAx3oBgXME"
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
