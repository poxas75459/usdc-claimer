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
    "2YWdQiiSbzZ6yo6CregrEQCJMpfZiBtzybfyVVwVXyBYPpgpd3iv5vhBB6iqrpppbBcuDZiRky6SRYZwt9GwnfiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215HwYW9RM8khGS5LYnQgG3XpuqGgHQMUEM445yaYrJw4NuJL5N1Eb8FaPkFK7wdu5QVVvozbixjYhMUZ6YpB5tP",
  "key1": "ZT4YZ5XXbsVFnGahxC7gDPaFX344DxvqWvyUwHXT53CA7LZyi1z3NR37jLcw4jGy3tbaXjCHHsW23TLfRUFoKT1",
  "key2": "4a39p1a2V9rn5chWiyxTq4YDKQaBswVHbW4y1iM46hiTq5TXXXjRSC4DdDyMgS8sGNK3yZ6eQtH6PCuPEqbxrttE",
  "key3": "hBrb8WWNWo1RdqKeGDfvGv1xczLbL2EGx5warGRJo2Mm72YewrtXwcy7d6dPGsuiRStgyDR1y4coNW4Gm6bt7Db",
  "key4": "SDFZ6XTgemdJmU16D2UtNHAQwK5iEX5VZceMFznXZCXtpVnwxW9JynQhkrZAYBKvGVSK4SMB8R4sFDfiHDQkK2K",
  "key5": "2tbh5FyzwD1UkE4a4yzFmYsHTDJ2hq7y4mnR7j6E5G1we4b2es6x4s7ypL7brFmeyxV4xVkMkAfephG7kf7bDxnr",
  "key6": "3RZx6c3arrAApU8xSQkf2waCZJ5o72DPDtm6yCgBB56a6pQmLsMLJxp6AV2FjyxYZoj69kwxprNCof4BxCa5QucA",
  "key7": "2WYHrzPFj9ejEQtRXQQ9XzwWw3Z6PNdussJie7J76eG6V74AdKfgtroKT7kpyAZAs2fXuMyGDAqMx4Wfb4gMXjMw",
  "key8": "5XGpVUG6o974yyHhenDPUBhuqxtRufbyURdDHhFiXCskitH2jNRt9K7CXTr3Knns1FMc9yonrrUvYv1BDqKJaHwd",
  "key9": "3uxSKF7qyJ3yk83GfLkYpbq2QChg5W3cAur3rn8BAW4Cqmg4JsLEpPouD9bHn73XW5gETojFQt2jzK4YoRNYqpds",
  "key10": "5W48tsqqobvwiDbfGm3XNm49fjJhWaHieTj5Tmt1zBsuQPEYUtRCfHFufi9FV3tPDh6a3H4f6XRN63LsPmpK4cYd",
  "key11": "3nNy4Yn7akzV5XSfCLDFD95zaFuLSNLgpeBqSNJVisZWj6fZkDU6bhhFA7SigAsNLorVYZizWVJeBvQ3AjiAbsYH",
  "key12": "4DPFzQPyQanACBXyktk4vWqPcMrE4UzY7pU2HddpWhnJAE6Jq7GqaXvtG3xCXy98QLTvAejyGWGAkRqjzTzAS9VZ",
  "key13": "64fb6NfEZNm7Gw2TnEqqy37MTTmd3xQ8tHJ1eFFW8LJRUV8Yhg9Dvzq9xEYYLuwqv7hTZE6XQuNvhRtAYJqaTdaZ",
  "key14": "4UdYYY9yR5nFs4v9L1qXEXp11EiGz4AoMynaY9tvwjMr2BPLrdpJATT1F7G4k8UFoYaJutrEx95ZaPFiyT3udY9g",
  "key15": "3oLZgFDbTLMfg5QmuMrVfEKFGyQGok8v4AtGDTFrFyhYsJq4LYEKsM1sG3Lbaw8G7YJNLX9pRsdfqqJwrxJFh3HM",
  "key16": "4oMSsnjL12Qv8k1Qu8yy8xGk2ASfzMRBkSQCtpRQLSymVcf2Y1S2v3LrE3FF3UXJJhXyzDqwZnWKCxCrHSHcVz2q",
  "key17": "5vFV8FHXWUGK4VpMuGeTSUxAkGM4MZw9J9vmjfdVhD3vDGZ5zHQYZEzk3m7rrE4aiTFUYv1NTduWkSMmskC5WYoB",
  "key18": "3ptjawLGi9DvraYAVPCoavkVQYkt9MpRieAKRyVodkMqmfzUfg8T75sZA1eJZ1XWzoumWAa91mSzqQMpAGtFp96S",
  "key19": "3mhE8pbhH1L5D2dPkVYnJ6cxhDVrHUGU7EBZGEHtt5dA2GLztCr4eAHumdGFvNX1cARSU5rvoxLoRg1iWMvcoQEs",
  "key20": "4YNW6FS8gctf6MHS3ZqzoKQK8L46WN4TNR1sw5kBs1WgAz2xh1f1h1vmVfo4krEtqDFiogSQQpHvGJ6cxjCmaEM4",
  "key21": "3Eqmw7qWWEz3gz3qZ5acmTKd99g3KRSPs9aAGFAoTBmrMBCaCaPDyhiUMvo77CgtZwBnwH1uqEMWgth8woBRYcsr",
  "key22": "274hxVGXcdmDq8RUPVm4pqUH5vdwCUCfiiWjao4Q2uaSDR5DYbaCwvpiBrWBWXniRP4AzjMNFxPbrMzvZn9FJvNq",
  "key23": "28Vz9TZtDabyAiFtZiouxkEmKtjFBdNV4GRbB6fdHNseLnVeHuQSF9FFPYXninqq1hej8JnLZMqTv1wP5Gn6fRL6",
  "key24": "1qk1KXJFurspuXLrM6Fe3PcPbFu2Ad2FAmPqQjiXDEbGs3gAAwZwVcqGPVLzng6rYf1WW4CY7sdw2vAvpCmQNcQ",
  "key25": "2kavQX4Y2V9MHaqeJsBwLVceueAeE8oEJYGL2A4ZSxyk431Pbz2MVhikC5JUXpMdeNZjSEjqU6sf81T31dTivK2b",
  "key26": "63ch2qHsQCYPPyt9u1L86ekR2c6AWMPb3gEb2otR9gUShHx3zMFHzdycHcxFrUsU2nJptW5MBShubuvFkXyZGhgQ",
  "key27": "3g4YfY4X3tFyDFCgoFEtkvnvDKy3a6tvGm7r9mBFpeu4TFZUJd2dpf3VozWHzRqteGsarbD3YMErq9qP88fdHVKu",
  "key28": "7QPpGzmCy94z5GjSDLQM23tdgyNxMAUzzUruEM5nz7DbxLjLCvap5brAzy6R8QX9sQmr3eBkWKTmjzdh2pZoVKJ",
  "key29": "46eMLF66wzutAdKUQvkP3WWdxNMkLL6w9zrmGzLZEE7Gz527efNePPapyQtDFYgKcmR5kZ7aUt7o1SGZ3BdoMPdz",
  "key30": "3Y75LQk5i1i8JY2iH3XCA6TaarrNmN1zxGgBz552oq49bXR9rms1AUYiomaR4og9QRkSueYD86BByusTcT2HJpXT",
  "key31": "5YgKvABQDufKF1qrVtjCm15jp9M6MXmsMJd2hHhPCD4XhcdXi6LDDwoNzMR6vw1bS6mWRck9VazJCGanj6Qx5E1S",
  "key32": "28YEQ2BavPfY15zCzQ65XGVbLGnVwnNA6Dsgx5NKawsCMVHTvJUAfo9HKXEHMvFd3ZvPqdBoaUZDpvjk8fsN1JLZ",
  "key33": "2BGuVNYvu2YgZZpFMBxq8TyjamEJjP3t2jocE6KwxBQqR4f6gTQ4q8BAnKr6bUi3khgrXsdr6sdtjTE463ywjjhF",
  "key34": "5YuKjPuHooyamuWEu7qfrfpJ8X1Q1EPtbpety9SAwj9Tn6Qfu15wozC6SFpPhNrZ3Z58FjKZwjXCb5vVifdAoWGH",
  "key35": "66oY9bMPjfNHdx8CUh4APJrn1B7RtLmtUnBDWP5LajoagXTkmz9oewo4neS2nAXNz6GhwqVQTPvLKHBpxNWppmpH",
  "key36": "2xfZurXgSriWPUa58awgNxCZn8XZdY2HZ3tKSoLijSHHsiY7ouBGxCrSj1q2sdWN2aoybnihzSd8MGKh4s5dBtUJ"
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
