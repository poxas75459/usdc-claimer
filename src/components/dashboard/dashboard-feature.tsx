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
    "3BAqfrwCujWTYVkQz35VRmsvLCjy4GTh95vmWsRT3tD8mbw9rwkeUj8T4YoHDRhVP7djFTEiW5oSCgWZZLaVmyyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKd7v85pvmzzp3H2DwfPwjDnzdW7jtASsQJXvfkyCbFRDRjzRzaMCrUC8DjxHNwXJm2VbScQcq7Cahcixf8w5vz",
  "key1": "2HWeAW4W6bV7mkya9Z8WFsEY2p9KDXpWZeTSaV4oAcNgnCumo2R1Eu24jRFhQEYiBzTub9p8EWHv4vFKuhjqkeV3",
  "key2": "5a665fVEszsUaCfj9nmm2Hmmay3CdJ7Us4vQEXXfz3a9txTXMqYrh2XqdNCUvVV8SPvqq2htdTydpJCvRfhBwCYn",
  "key3": "vyCw9SFWYnLq6v2VcXSPGH1Nf2NyUwrYY4egavpYon4pTgQqHrxGamVp7nuuvsi9JcgU2mwwEbf8mKdwfrXrP6H",
  "key4": "2JZaMsKckmDCTKudrrZF75U3iggiZqNqhLPaXaiuNfBRzphCSTHUbVoHPhePSMrbMDa44pdwJHR4huYx2M1SAZLP",
  "key5": "sfnUnPiCHpiLZB727ZgTZKbCM6jNpTmdw44e1t3V4UsuBwXJJcM5oQKQiuPTGPpURqspNGMNDmf3d4FMfkSvcMG",
  "key6": "2kWoCrpqLvUuqrwvQBfpo1QnSzCeUYh8qtJaa5t1hQ2vduqPXhnHUd1MRne8e2Mj74ieVsiGZGuyZFSGrQ7BTzkj",
  "key7": "4fMgzY9U4uc1YcFefE9xtoLyJnX1A37oKzVk8mX873vMuZosasSpAfvGtAzCAr7s6SminnScwu6GF3WCsnizmwQ6",
  "key8": "3qLVgwqBxBfCFnwy3r3r9PZjCZkVbzVQBkgUQNx79jWJ6xcSDfMojhWzcxPkkfbzeDLK4aHFrx9hc1AgHznn66w2",
  "key9": "3Koww4d4cVzYuVQ9RvHrhaA61dZS43Bi5kWvcEwQ9EZcV7AD8CnYYSA6d2z4vCCCFdy4YTWn6MMVHDXrRRKda9GM",
  "key10": "ewtitsymYXfpCZZjKH8cYDGUvdfdSQQ1wi1MXL2sKoJ3KAkwPmR6Z4Qb5gtSvW1s2hTuneUnH8ghL58TLu2mqNx",
  "key11": "31LY7tAVU27mda6g3zG2wtMsXSLHSEBeVoGqtBgXB6SqtnNF4xG1D6QQdFYtkgZedu7pfTVjstwV4AW9u4X4vwYm",
  "key12": "4k3Hvq996vcJEG9k53LbpQDnTfqbhFGzJUaS3Ny5rCmJRaxC8R9T1ph3STwjSPtdp5innzb5KE4itXnC4nWpnaaT",
  "key13": "v561tXqc8AmiRwMaraUbQBv23iuD3dqHfgXwKW1Td2r4TYFM8vKEg1zow3i8MswTJ8GhD2g6TWDgnx4aKkWxBMf",
  "key14": "54HDabzokRbAUzb1bpG9tipJp37SjthPFv3ivYvptvWKUnmKXUuJWK8BoxSWddKLxExeeUnevHPW4wpJhnvp3Amz",
  "key15": "i5pUEHQ7yPrdKHNBwiz3ahuNERjwZfAnFTmFKz5H1ejAWiQCbb2MPB4A3t89QUYiTSdshvJc9XPNrsr6RoPzh5V",
  "key16": "61ptULMbonP6NRthq9BnA9dVvWYxjbW6jyJjFx5uG4TMpoSresGRuLeQhX4DWPeRNfj2AfdSTTDUZyS8DYYawkXj",
  "key17": "5BJU4QgWDMnK1DUW21SozE1sY5SYLmFV3jsnjNGqNMfsFHMyyQEDEPMFrhzN4LSX31wY7ycwoDZNu7HDVmF2NoXQ",
  "key18": "2GCXQDdkKd89vTj3tEV8zvdkGpJdA5pBtBwLYMMJHFn5Gjm6HztU7mqmnfUureeGq4qcE9cxYDo6HzVkwwwPSAdb",
  "key19": "58wAmUQeHss67yJNYGmtZGeZ9XyTCqAEn1zo6yzZnJBvYbPB6DS2xcHrhyASuAj7vHFExcnKAiLfsXkhLSa3g84x",
  "key20": "gM8XsyEwziJDNw93oxab2Ri4kSARx4kNQaHfg2GmchKhZdcDrrKKFDqFADEzbNmyXLgNC4KCqoH3dQUkvbm1WAs",
  "key21": "3wPmk3GFsqmkddtHxEVqovBZu4HUJZ42FjgHkkoMynF8NktZtFijremntYaRkTPGQRNRM7hLTA4LR45gCH6mAPzU",
  "key22": "2LVRvBa5itijZrYwHWwPci7n5t4HtotUBrVxYik9Qx8yDsfGrb2sYi5cbM6rycZ9bZF95e2uWmhZEa72v1UDN5eh",
  "key23": "652FHCkRTvySyUAKVWiHS1Lr7BZivNXaiqJqEfLybgBHBicwTcaA6EJuMm4xU1qoaBbVxg1yk949mU33GegXXqXT",
  "key24": "34E9zPQjrECvnVXgrpywHGNd2NoaaPoPdjkg1BK9Nfz9heWurKyyvcTrzin6BNFXMUEoqE464c5GJx62iEru9qJp",
  "key25": "cqAbCrq1WDF1ohEg6ttPfhq1ceWAcx2pq7Da7bGJtxzHgjgeqPiLcP1qS7SEdyL9oPmRuLN5DQZhnBbC9JDvqxH",
  "key26": "46SCcrtvXxpkvK5EaEFVSY3AQSxMmkKd2yVsjbfBjWXvGDrZHSjTvHR7sLaE3xGDn2ooRo6U9TccUc2R4GKx13xw",
  "key27": "24C4wYxTw9P5q2MPUfzAfgw2od9xPjrWbc26Ykth8FeAJxGvCFPo7LizAdxW4YnRNiFDFofoBPNe9dUu1sdVbK1D",
  "key28": "4ZPKKR177pY8tzrSteDScFGjPhCA7myDLFdb5ctn7doJ3w7wAunn1y3T2CSNvcvU6HrC4jpzayPWNSKaWt7qQWVA",
  "key29": "JPJEDtzStEYuH9hVBnTYAAtfpAZ7eDAHYrkvLV2NYGRmhxFJYJ99UjoE32yWPjuLtNhDTJ95iNBWrB4Fjp5Bgjq",
  "key30": "5kPHtUrCSLRu9dqpkGaFV8uXS3K627jAieGhhNWYCyJF8EM8QTX9U8RiF1UvUSduh7oSqPRoPR4CnQBM9mcHCdha",
  "key31": "2HQR8odVvx3rMiD8WiwokhjiYbUDbdLX6p3VrkDCFac5iKeTgeBhwvch8jqKq8KUEDoPUeP3KDetEf93Zm8v9JuJ",
  "key32": "5GagZxna2AgogdvG2bXfjsiz8PinejF7msa3k4DEV5SPkx8yybbqGHm6bxie5QGtZA5yuNd4dHTTYXNLGzuyy5aD",
  "key33": "2jABdh9Bc4RZaqmRkrLmxja5wxHzmhAroJ7H8EmXPpJ5VYHppgsSPfq1UjBnUU5apyT2YEFH5NFnNzjQtHpb1RxA",
  "key34": "5SSasxxP7nGPCyTuuvK9M77FpbDFNVqSHH561b1W4JntP1F9qox7itdKCBdbrq3fuGztUf8AenivR6BUtb7fgXsc",
  "key35": "5fXm7TDiwFxJyZnUhkUECvqLbRhrBih8kZyTqxmYoKYivXSnggKyLHfRLeYkuPVoeDvuCm1byxQujYfDpBxGiaGr",
  "key36": "3isWKGmnqmJmAsZ7rN7MB26Wz4Gx9LYV91yUMTe8mVoq5RSf8jWNfgPGcNti48X5QASdv6o1bTHriuVS2ApCxShd"
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
