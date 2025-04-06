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
    "r3oAq81i7VQuGVd3QacTkmNmK8zpZVQ3XaGSVu42rwsR2JA7V1RfkK8SEVacQ51XBJu8WxLxxB6xrpCHHfytNsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QPwoGUwHovVnpvQEfHktFYjgj57CXxc2ZgPLJ5ZSKrPEouBhDCnatfPdgR8NsmQ5R8o18bb49d8wpVFqjZPqiJ",
  "key1": "b5ktHjUSax9Zo1ejSM5D6MkNfSWTotPt1kd4vLrub7n7FfaLWpssqrAe2wQCtAs2riSjcTBZXzeiRewNEVznFyr",
  "key2": "5DQY6QeTaSaDS8S7hZ7bpbegMaU2MaDY5cnioCKA2crVDZhFipfKSgpvJezGRwMhzuHCbUCQAgTQo8kJgsDMqqfo",
  "key3": "5d6x2qTWXbdoVPqNeupadnCxzFTez3W4PzqicMKcLEwwiFhsCAkufSkxuV4sEDVm7zjzgrm2B9Zyq7KxEbT6d16W",
  "key4": "53XAZXdMi8p9K3NBv3XfBUtiFmNBTB5LFc5LsW1ZYrsNivR1AZUFhixbnzpaH4139uxu2YpAcb6oT6sg84SvmAHY",
  "key5": "mdL23noEXACPGEqgdWu514C5azPCcPYPsNuifAAwkY6PsJe6pm1gJjX2Bbwur7r2b64L8K863mLnavFVDfHduYT",
  "key6": "2We7VHtGhLx3yCZUbH9cPZXB5r31oHeQbMngWprzmdfWJFKMEm5jxCWvPXazyokWUHqUL91yrfWCEN3FZdZi7t6C",
  "key7": "3xQe6FsYJmogj1VtAgPsKnGSZhq2W5KA2nWMg8j8goMegj7mYKuTno85NqPChzd127ErKGKQBAhfNso7ZYwwdquh",
  "key8": "2AFGGcSV2peP1AEsb4VQSmiBQFGAnACGP1tTzEnZ6ULWmWsxuyzrV2THh8oAsMwAKProy8ixoqR6cDRmcsPfpSZJ",
  "key9": "3H33Hd8NriWaVjHSFvwwoyrRZozzVrFTtHaVHgzg1p4KhU9GvxXJSMHWXhv5jBAtmFSeVHNtL5oBmfxeJ9k69EpF",
  "key10": "5tk8WxbcmyoFWuJhYAVu9EmeiukRv5tgiyUYfs5hH8uToUMbttKzWpuZ1rAknjgemzftsfyftEvuN5h8UN2nKmCF",
  "key11": "PwD3QomPZdL6HBrDJqhyewLuFHjzmNYoC4BRcXR9a76vMydwgkiy9rHSHWKETAVpXfRk77ytkrpCzkCCYHbffzc",
  "key12": "3NSEKYBmqsrhGLurEhhrJzJnFbjZpUoDkSXzQmQKRPdZBW17x8scLXT524T255MXvVrcdAyyKEoWd3W2yjow6ibP",
  "key13": "5m6nrE76ubn71Mh8xtKmTxYVmXvok1hVHfSJvRf5N44BxjG1ETJGr4qcmXr1eoBuBEf5PyXtdsC7NUmesdy4dskV",
  "key14": "4rsMnP8b98t5jsP4FDD2nNTeEpGEGbF4Liqz8epbvrGt2WFWpX9cyZBpvd4ccsJ6zPYX93qowAz4vG7oUb7UoP8p",
  "key15": "4x5tgnJAF9fMYu2rcon2BdXeAxGH1YN8UyPyiFw6YTG4DkGJUEM2MRFe2Hqzk3dvJC2W91m8Aa7GJhu1W6bR7sZB",
  "key16": "jGKxgi81nPeDNHBfiThby2iifYsiEK8UzFzXgnfBPiUKfrJ3DtnjVUZuQPMNi9oKYsmNH749hZdbKtRHm3oBAaS",
  "key17": "5sLtFvo4jWVrkfZvypBP8x5hmq9p5HBBUJ9H88q99dYuFSQMR9Zq3a9dDXEwJZpVipYXD5Cnij4yZPV2mWVcuNLv",
  "key18": "4oaf2u2HqAhhutsHEeRa4UGBPiGag4AG5oXvV7tybLQLpYtzgcMbFxkkTyXCrEKHd4SFyo3EiG7w7vjcTbGmPy55",
  "key19": "3mYbEzNW13wvCM2DWtF2AziEhW6BoB1ymWUDgTWcwEWiGNL1AKbcNhh8ZJ5DnRbxkJPPUQ81YJuqwtSbM98LKrj6",
  "key20": "5CsqZX1VRu2S1QuuWs3eMpAekt7noRCapVca7jxgQ5f1cSc3tcjaSTQ7LncGYsEYgg5tv8zf37RzJci7ShMR6XmF",
  "key21": "5wRHTLHsUMz6mDTNGWHux1o3k9DpwwvN1t2N2kZX7Te5meHfWMSbdbyFxeMVYesZzsHRR3Xad5vFZHpyHzMZvZLn",
  "key22": "5dqWQwWgzThQyXrpBtBohQhCPxLnse8tb3psQrGRgTHaoSNPRubcvWWb1yaocacFKENGgj9BEDzMjiUXEH9EYr7",
  "key23": "4tgpE76aPe217qjUzXRQM9q9zDMJcdeWhZ2yK7hWF5YrWx5MguEwh9mNbfNkGMyt9EwUi9R7YZ6qDn6jyxT9ppGU",
  "key24": "ZzjYuT9HDDmVEJuAybGbcCM5d64qjSnzLBEZwcurVw5QZweXeSs3bQp5KLf1x3xvFmHojHrLnn9yJ57q8n6VYN3"
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
