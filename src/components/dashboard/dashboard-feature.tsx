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
    "bXwsasQCVcgeyXN5PKksqdD9j31nKA17Z65rwxGYCvQHa49DAiKzuDvPpWv8QWtgaJjowCrGHGpRvXv7tYoCFCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obYSNRWgv2J23ZMoshDVhGjxXUPJ92cwakjbsS9JVpJjxWCThKPcpxZ62CfHWtQvmA4Q26sE7PkvqFACPFCPjQr",
  "key1": "GGJftHpT3yGaq5q9UwTTtLAyp3t37rjKFTPekq3ogv9QvFWfDRHm1a91aqYL9KqPHNZcx8hXHHwB8Xki3b5uEbr",
  "key2": "657yzsZiWnDEYjnJgnCv5EmzjA2FJefMXPt7EpkkjV3FgVkfMpmjDYUznMiv3jPqusjLUut8phnbjhSKcdPQevp",
  "key3": "346y7j5kfiDiN6K1kjv5ASCmbtBoxYkTKkuzi8k9tB1LHKnL6fGpSuBry5gUrnnCn7qjCNSAAPNS5tXZC98aCqoE",
  "key4": "5EYBHp4SL1vz1W5oqXkX7agj1PPDSNrQeeZpR48rCLuDP2sw9Qo7KwStGUTpg3gFLEbQr1bxEVHUBHwxbDtCUbud",
  "key5": "v3N7oxqry21MLqENBCgDNPSPuTZpoVCWBnY81iaypM645JUdgR8QRxdAYwFVT2NbAsi5KVn4LHYCMRZTZTKXK2h",
  "key6": "48jpVEbSAtLEHE1ZDsASEaNXcCVqKEqvg3gdmQQAbQVPXaas1Mu1gJJF1GQjiqtawonCJcKMkzaFVGY3D4T49krD",
  "key7": "5d9fM6qFVpZqD92gVKUtdbQ6psAoqJ6xBuQbQRLt8tmivYBPAiexGVp8urMnJ9ZC1cqkmRVEU5DHVuTnr8Zjcipc",
  "key8": "621Ux5ojMAKemZJJzDw4Ry4WDpD3jPCH9epHvecvqnQtzTMdbiqt7LfinBmscknVXv3xMZ4JDobGxmUBvhmqGEUF",
  "key9": "3vEvrpZkeN3PQQ1oC12vpdbeGyWtvhS2W5LEgCcLUR3sZ6QwR3hBB1czg6Z4gSaHfXxGwtnBthvTZ2zqbYxcRQq6",
  "key10": "xGLoLihdhSdLaKNCahRcGWG9qubnDzm8RMwKFC8sUiihSiSpG6g35YSpxgA4kfPF5MU3y8jPXbCPXiNLMy5p9zL",
  "key11": "4Cv3yNVRwK7htMY23YBhGXhjFauJR4NpM7WsubVzYJ8avrrrrVfKEv9834UFcYHJC4Z2tTQdjhMEjnif8X8N4JdB",
  "key12": "249eRLY6nTszXPPHFU8Nv3Tr62mDVgGZyRhCfS7RFYU8KcaGZTmDogE9FeeWfTdV25wtVyx45ZNkJzBUqt2J9iB5",
  "key13": "SQgCLDkJ5NzDRSKpXW7ntTE5BM5a3WdH6BJP4iZZQ9Uve79iPrBezA4xYGDTsgr3xouC7f1GcK8XvPZHkr4uQaZ",
  "key14": "4yQXShPLSdqh4U64vsj9MbnHsNjq6McALDtxcLKdd51cpViChBumGLwuGSPwV5XejHs2XPiDeoR7jGDjs45qbcVL",
  "key15": "5HzhagKxZMgrGKFCf9LKjPEZqgRCyEbcXEttLNq7bcFf8SjC2uqvE8NoRSDmSAbPanKYHFqm69ZNiaKBNtePruck",
  "key16": "2T38QeWxWACmou1ZeaY4QFMi59DCRfF7Dp15KrtSZsvBpRrmw982x8J5D3oEUG5Crks6qG2Cb3cdJMcq6ifM9uYA",
  "key17": "3orBK6ri7zJ1FVAYAkEqJHaYSNgpksAoEKyB9VQSDdT8CMHg19J749HwwKwss6g1Z8oKr74rcJgcCVnPwzggPJZq",
  "key18": "2Vx39vST6jJtLQ8mNgjwM8mHa3JUaiUZ3PzmT7FYH2PYuZcYTq9qMcYkNbNmgZRbLPUqNJVuqPYqqtKvzhgdHY2d",
  "key19": "5vMa4m7DokdrXnn13jMC5T1Yjm38sw6uCPqaNG3McGHqh3Gxc7wkTBS3PPK5sp8xJDwMRWFzCGW3j4ZcpcCGqKyS",
  "key20": "4wfXmQV52xM5ju5KTKD1LGzfBruEBGPExzHKEi4nufuN7FjmSfG9nsSY6RC8Pytac6EXoyRsqWWi2D4LCEtUCgbm",
  "key21": "4xLQf65J5GHsNk74B2WJxtbyxYPTQ3Gd1KrgkKLe4Lw1XKJcMNVmGsyJyWbVxGvy3u2JrUJBCeguPMqQbuqWuXp4",
  "key22": "4JNyMnfrcgXm4h6Ywq1EqaFWduNdXTJuvkecsLMpY44kAwgcSWjM6bysy7NCmUSrJavTGCtYdjDSyWC1vNYKn4ZB",
  "key23": "39u3hCLx4vLN9UfPMraVXMCyg7kF1L5j2xGX7qH6hvqiJLyoXivuzwCDEbif1ZvGoEZS552awE8irxtCP6dUnoPX",
  "key24": "4FiRMMCFgeTskTLKut65ssByvhnSwHH7J5dChSD2g2cyLD9bFQPx1vtppoZkRS5rxzGWsYwYVQiTpiL4Np4ev8gv",
  "key25": "2AwsfBurg35FYnJtVuHhJfycBEi7jD551bEk67Xoh6WMS9SqFxSovn2e95ZTMq5JRqJmQPJjyGGx4RwgbqSyNbBM",
  "key26": "24rajBFRxSJhAMhtA3JEyKjbBT7TciQFCoDwoy5JScPerfpgHSpEett4eBcS6WdPTQUQW2MFPaicusszdwiRzzQU",
  "key27": "5y2rJQVYwMVGAPi8taAh672uWLPGC4ioSE9QhMitu85gM7tVZzyHqo6DyCvxqCtsxffkuL5fRSU81QxggNJEdAnU",
  "key28": "3pepdssX9YTENivYtnTAXsoDRt1CmpGsDbLLxcGF1dk9PiHTXPFimLQsuEZ5s9XRT784BCfrdVAw4ToCu9MF1KAW"
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
