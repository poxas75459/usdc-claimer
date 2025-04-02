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
    "4wxTJAr97kDArqT7VupgC7DE4mqmkatg6ugqqPNif24JgPjF8FdjWfnZSjphN4sXNdFEP1HtuQzX3GYZDFr4QEnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoisKyDz6znPQmL7W6qh5mPnkLKFji8We4K1GextZ59744vx8wJ8MKRJ3R7K6FEaDKGouHisGYWbZK9fvDxtMuR",
  "key1": "4Lh3a5Q85scyvEQNzScjimnHfqFLT8shYsnGdnAppEWY7c9tFNcZaqDy72LzhfxTfCyj1iCQsKS3fWzEJTKMb9BB",
  "key2": "46848CFDdwjewC8U8Dozf1FwKeptoXxwezKQ5HqA1qMMJ2WZYj4ebEsYmBVRwCysKNw3vP4wBNhA7i13QcZsVfSD",
  "key3": "4sAxh1o2QtvFA9kkyGkNBdPqGDJkso9FFa2cCAbowQSLiVhXpXqtzPVf7x8Gf9Jo8S4Q8mRH6uGJXZoYHV24xvv3",
  "key4": "21rKVACeeyFkbftpkfPr2NGti6UraPKEVrA1rMxYzMCTxVo6WAWyk2q3yrM7fmWEMQMFRF4LtXzHg6U4F3ReArYK",
  "key5": "2Mjr47F2SqATJFG1RVpL2A3VURmkFj9FZYA3Nf7mEsVy5csdcmNywyaUoeAzXFJX8kjSmv2TeBCTGjCc6AtsAkdX",
  "key6": "5RAK1bnR3KLVtrivRXDqAoiET1if5FPyWsyV2z65g4NYKJWppDNMnk6pTFkYDRcBuvr8PJKYKAyrPgZiaWNHXfcA",
  "key7": "55DyVp3KyNJqn8cvFWiRmLvzj3NA8Es88groE3tixweTgipJCi2iWPSs8Ev1X9vdQmnm4ayb1ejWd288CRN8hjo6",
  "key8": "2dpGFL5nAdomg4VnhxbV2eBirkPYbAAj3fVoEr4N65X7SWXPcL3bsdZSUJH1fWUuhiRdH6GZwutZDk12giVk8SHn",
  "key9": "2LYigjwWYfi3mChLAxbZQKRwU6mfwCr1KsofhiPBGVnJdwSZLwnrMQzshJ4oU7Kt6bhM4Pe3bpag7vqHVZcC1DRP",
  "key10": "B4zraNzprDu2nRKR1nRjCmoZG5zaDd59zEvLpbdkSFhGw8sZFmc4tho2CpScjMAmsfqT23PEPS8LwW2Wk5JENQa",
  "key11": "272k6vKVQgK8q9sszMue9w3iJ1xTH8Jg4f6PB3UwthzH3Wp5w1FBukyC2sZfA1h3QDZNgQA9FM49kqXnQSQGNGed",
  "key12": "YneLTH7F8HVudEaBbf6kDJSCRMMjjei2jsZfRbLgctviYjvi3TiR3omUgonW7X6PspjKzziy66UXH8RdcnPC7Qr",
  "key13": "YxymcdN9CHi8ECymvrx7sDdrMx8pS1UXUv45nscBdArbSWLVkDMshZ71uL11KVKkqvyDTUTtC1GoFzjWUdDJfat",
  "key14": "3Jr3yf5sCRJDwZaUEzDStJ6ZUMj6jhm658SwyfT1xxA7aLgD9U77crS1HetBSZHd3o3hbYjFptzDCmT1HZ4HvwBS",
  "key15": "59aN7cm9GFKFuVmMLUza3s4a3CutGRXgFrcg2J3oPwpkzzXbWyCbpuThKiatZpBgACmshyDtxF9QpERfLmy54hGa",
  "key16": "4uR3kyC7EZ1f9tb8jeMrRHe3WNbduHMFd1Lc6enBGujCJEXiu9JaEKCeknQcL1nvSiQffBjvwPB7vp2TzPZFvCEo",
  "key17": "5KMN3dnHtyWURngNhZSh3qhmNwJn7fNr4uQH8LEUYoahet2CD19CbSPwr3QHL1Hwk8USVyf3EytApA1dUZkzTCiQ",
  "key18": "4e74av14vuN9xWAYmJjWPkwgxaL3PJV7JTG7AQibCJwBw6P7Jp83Sb5md22STevp6wjpmjK7DeK2zjSsQbpAyLa9",
  "key19": "4Y4GeY9ohBZ6WTHtkXXpMXKCjj4hVoVUjniYseq2E38ebdabtqaVeNkoBnZKAP4YJAyxQuiwu4B6FraUC5Nm5r28",
  "key20": "8pkqX4iHswfmYxC7jQLRyjQunf12HYovEAiU15xCmrMzFoWwnNDPc32puaM35UUNeSkhp1rdgAZGPQqHFfRRPn2",
  "key21": "2magCm3AgmSBQvTYpWEZZkjAqtj7VBc1S61v66URtw9T1T4gaHXqZ7YaVUF7RNbax2i8v6EFxEYEQn1MXX5tAPyc",
  "key22": "26jvJHTZwgAGrBhyUTGc4DiGJxHQJVYCPYLEpQhdGyM5hcmSWcpEXQcPEgSzRXEx47RfKurheL9nj9YR68ar8MFW",
  "key23": "4Yj4Z981uj6VDQPay5NXRU8XGffoEibCVf9LCajof2oktrRGT8z7MNy9Xso4kWbXTLwd5UM1nt4SP3FUtjifv5kd",
  "key24": "2iDAYAkskyp7yTvUL3pZ2eysMsqLDJofhvnyoBcoHmHVDVNt1z3NTPpKw6hQvKPkTP6kLTv4F39Z48ca7qsM9VDM",
  "key25": "2F3JAWNtQG28Y2t94j43ZCC2RLrkwABR5Rp3VdUCgjVdMtGV9gV2eowACbjBGnpPVzjBgvd3U38gbHKKkQgJABTN",
  "key26": "5WGua66ANjmekqsRKbLRU7YhMGPjGt7hnZNC4EE3vsGEKWV2kNj6Qyf5WytRD33PwoeF349uFcNMhyH1SX25BEgj",
  "key27": "TtYXYcF4GP3e73xQwqEFb9Zuox4kSDe5cCoUFLyvCG5dxk2599Y2RKCa1Cq8yt5xfFzm8nTEjs8NCUs6w45FZTn",
  "key28": "3bkqmsgQ9Pv6ZfrVMADr5LWru6ByWS6ybKGkRmW4jfBLVY2s5pvayLWVa1yccDMAEAARTqA9L4HHq5HgLM6u3bYc",
  "key29": "BQXKGL4fttRmuBYwc7UFyWGnFMfCtKLx4RbnDXCXv3KqYnfESbjsfQJtJf2Wuz1d8eLgaPgggqXDWkvFN7j6vJk",
  "key30": "qSpwdQvGNHnpMv9NHiERtBdPHQgqBgbDEUJU6C6AGok5gNuqqbBCNzGguZ52pVM2oKhXigh46wLcYxyx9GF6UTw",
  "key31": "4x7Z2nhZMK1QYcwtNg8ZFs3q8ajoWqDUtKYaaAT8BVaeNEqmosWRYmWjcQ8VzWMwYPLsghR8AjLdrS1GnkUkUrw1",
  "key32": "5Za7L2BfLCqgFCVqJWxXUNrVsQTau2WPV1Gkd2tEdXrwejd5xxQoyoxrQVi8teG3tgqSmQcseKDvukp7Kj8rDuDd",
  "key33": "3nNMyPXQyK4Sn4kXVb69rdZbcTdxHrnPZqk5LxtE1XqroVCNSLAnwtiSTA3C1m3Tk2Km6mvdFz77ZdiCTamLRfKw",
  "key34": "3fTi5JGy76JEYqNfYQ7UaXap1F2wgVqXMo9c4LT9z88AqYCU718F1t16btMmKMgCZXsPWnhKD2FRuVpa61HyoXdX",
  "key35": "EohYZkwTk5sHtrUjsDCybrpuEvThW3oSN9e3fAc229QXUCYj536vbBer6YpWEDLKN947BWzV1eHKX4wKtWi2pwF",
  "key36": "3D56LFP6Q1z2ibEwpPHRoZJiLj9UU1vTCu6JM9FPYKeePHMFzgjyUooNAapygqENQSoF1aR1LhBDVmKJYizsbrMm",
  "key37": "674GSbd7DSRkbfQgZB59MQx94PLu91P8JJtcJHGAxUgyWwdbb5ZUAwDUeasG3QCcX1f6KVRbtLFtiHMHkXHwMgNA",
  "key38": "31R2ESMa6Jp7mp2PYH9pJPZ8SeGep2exNvRPpwFbJ13CdXf3bZTGRBcJXBWQMaWFLUVKaPs8UsopvzCHtpdSJW6z",
  "key39": "4XLKmzmjsGhn4FJwPszvAHaqawmsjQ7n8n4ToS46xtsvXky9unvdWncU32vggdt4We667jG3fc1YgNPnztJa1wnn",
  "key40": "5nPHyucWpcALtNn75Lwky1DsAB4MRexXnsJ6QouEzYMBfXjRvex6DxF9XWnVPQGAm7f8g7oLhUEPfHSvbbuZC2en",
  "key41": "5QxYU58NKuVzbnUCSNKNAv1fRY42XqHZ1tt7yaWfxyojzzMnrx7KRjDbYW76g9agLPsq7RA7X9YNAh4QF15TvXXy"
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
