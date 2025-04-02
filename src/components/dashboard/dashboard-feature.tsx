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
    "57BHZQbN2siSpJtGSWYKUoTHE65ymUcbJr91VJQ15EoYvs53F2bbXDs8LTaT6n7GF6YiGV732ZJGeyaVRN3ZgbjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHCSZMcxqoCKZTSt2NEvezyspMyLKcvdunuAJo4Hwfv32fy4xfX3Ruc9DbzHJ9R6oAxgdxRpWjwGNfJp1nV9EBi",
  "key1": "7yixC1d6WVPwa13pjTfJViKsWVhSpJtpR5JzFXL7TWiWtAgqeefZhb8grsZE9XwWt1rxgrtGWZQzdVKStFDxVb5",
  "key2": "5KKR1cPMyuAbADE5hVrau8mqFRqnnL3xL6AopB5DLNcbBt2otnc8gkPiPXGGGCr2xgKVwBuUpK1FWLChVDuBjmHH",
  "key3": "nfCSyBypfMGfW9Pp8wU6WhzWWBAYJf72bC2pAtmgMr4vtistRsnj1iUhU8QoPGYa7XYx8VYnCrFrFyqNHUktjk2",
  "key4": "4cABGWG8N5gCL8GoLF1mJaLygfKy8izBcCjgf6QLTntzxUFZuCN4xq4mX4XnoYLyeFr77oYbXsPiraLXFkT476u5",
  "key5": "vQUxKvrzRdzdwfTxYUcssFxB97995weduFsoB7AmZwreELpcXcw3WZ6rsNKZha2t5M7XFuPc4gmyZbopy1PGdB8",
  "key6": "mkaPq2QZLqyw8oTcWwMdMqw3HLczPjhV5AB8rSE8xz7nfeSjHPP9HcoMA1CB1MZpwfiH1nRPJGNcRY2CBaXpFQa",
  "key7": "Ys9a343wjbWmg2ard5d5wMpqfJhVRTQm5krDcDVTgFVHrwxrEiy57wFw8tNErVGd98qXsV5PV6sWeEh5rF3tAPg",
  "key8": "3ki62c4cB3Ka1Q7CvbVF6qHAr25hZZUhMkZhyyVsNLMnV3R4tvjg8u2MaRvmhQn15JqpQ38KeeneiEbPUAzSG5gi",
  "key9": "urLJFRvft4aVyr6uX9qtAc3jriPFonTV4VarkFDumLLCJfJq4bpjTXLJAC6b6Q18XtR32QvXi4cv4zEk2mgSTgK",
  "key10": "24Kb1tPcLDq6zVHNBzYRmJ1wWQYDYAFq2oL1Ag3rNgTan1F91qhDddUzcHn6TRTEwkRZNNe9dFWVdGckMvPjk2Ru",
  "key11": "64dxfafgLXp9wnyjVEsv41JtJtoDYxJh3HajYULkmWeMCfQ86D9oHZvZ2L9myqMGk1EGchjxGiJtMy1FPk4aCuAw",
  "key12": "65Cvxm2icbA9rhMsKZctfd6R6VZoBRVa2mGMiuCYXnoiqtrb4NvecnXDXF1piSfGLHPAJCvmsBWBQ95C5VnZhKUz",
  "key13": "2scruT3Mh1rk1qr6KuvHcR3Cdh6UruGvV1sQY3bejgDFDCDtHpEXVDxjGtc33Vv8AZ7E5cy8KLwRUPhFKu3vPdsA",
  "key14": "49V6PzUPTUrUk1YtVmUFfNdg2CqopiHwDsF9LcV6DfmFsc58hwR7SVzNecNsPeb9D5bWwxbFgYHWWtuGmxemh1t6",
  "key15": "zYgP4mCakAepUYAbFayXzdwdqhMXKiDrfFWWKZjP4RPCEakeh7FW2Xyp3YQjwiZqaTMDHGST42Njb61DngGGyY6",
  "key16": "5KByNfxdWsSJm8MFL79VegAq7xWMRSaCbfzmmAQK32vdmadFsstpBeaa3TLKinTEduqMBA4ThdPJXHdScBnQhSC1",
  "key17": "ftMBQ4nXMXN6SYDrub7mBRLoGkszEQGgww8c5zEgiFRwfg57pgCFNE5QaCACbAttMUCXseEK3SckYstm1TCybBS",
  "key18": "3bjZf9tEK8ebwZtyd2GFMLyTfZ1qPe3qLeGFuYQTVveE7rdiZHygNL7ad2RH2LH29GkdBKNZr38DK4ueHE4GiNfP",
  "key19": "3yNSkQa1CYzuifD1KUUKKK8DPAEp6cQ6UcUY214PcCbZNnwCuUVck3zHaNFpZ7B67yKPXi7iCAXV1sMkaEje2KvZ",
  "key20": "2JPsQNpCwCqBdD6XHhgqB68fsYyzN3p2CFR9CZrzjHvq4PnTUcxaLGSC3rbi8FCXyC6riNSobr3Y8dTcwsUTi662",
  "key21": "5Vc6EoPe1GozVMQSCkzig3CNsE1NnrdkMHj3SkB8xUAzs5PDdUuLtawRmsURYiAnc21inBshp385tRQFGQ6heSpK",
  "key22": "iyM4pQCuHWWAxUpKudRgf3xeqVaLJrVVmJYK4hNuYcr5GtiqhSwwWTr8kYgySCjE7ikrLNVXDR4YDJLBQRYNm2g",
  "key23": "327YXJXBQc4w492Mj2vAafrdTP6JbmkSN6aRM2Phr8sss4yEQ7oP5disaGYqeEUDQNy9D8Dc876JhTqdqJABPKvM",
  "key24": "z76fyQqt2eXkMQ214k3k5hoku87YqgJDwaumyfwfiJ2v7VbXEFynN4be4pBWyarLT4ArLdrFtf77e4ftx74csah"
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
