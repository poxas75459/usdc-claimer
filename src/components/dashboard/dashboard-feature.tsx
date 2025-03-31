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
    "4ybvEviU2ed8VoDx1kYA9cUARTTARuvbDK9HdTkWTGJuBsvRExR1BWThSTMNn6U7H6nCoCJuBfAFUSt8daYP5pvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMTA2PDve8vJdBaFSrnCkYednZf3MseT2Hms9ZhpqQ1zgL2ZF3ngTomdxyhNfw4kCwhp2tkihM2hd3wKZebn5K8",
  "key1": "4m2pyaSJfXNgRacjocUCuFkgeJeP7Hqc81y2wRtVCyqmywxmit84UGLHBn7EAure3RHWHyxxjpFRgYuuU7t29jWd",
  "key2": "3sWt3DpffC4Eq9UhYeYZqcLwtGrGN46LLsN8NW1WG4QyY9v8vTDDQRoYDePb76KdT6ekTs7FmogDrYpiiWzYxoWz",
  "key3": "4xr7yz86NAEFTQ8XdLYogppB5B6paAUq1iXYUVtA8HQRCfgSLspbn97RnjsxJevJXcoGmQva55Toj6ooCEWTAcnL",
  "key4": "5Q9LA5BA7Vfk5ctDxruUAwMbdtrDd34edHHD3A3vHrrNMCELD4rCedXkJ9GjiJpq2efw4rs9KSzJ9PVPydXyCgFe",
  "key5": "5HzjFUiubwPoZeX9peXWGg4BCqSNVwmbWhAfv77QQGDsN3Yp4VfVeEPwHrhSwL2c3vVFgAnvaAdfc8KdvEPahhRT",
  "key6": "3TPzYZsTr6jjeK3vtekwvR1mSw7hgPVhHuFeGLzUtyCkx7XAjr9dVTBLpUTPXQKEDbvGVBHUpRPzg6K7fLdejmSx",
  "key7": "VwFea5wUEreoNbQFPCbjt4mrPrqn9gzknn6DaDacs6AgYaQndgn8SfRHTBabBtyhSMp91Cg9Rn87Z6F7hJn6Wdy",
  "key8": "426BPXqpgqArEYK8JA48evQZLHyXcEJUxBvPczVke8mUfz2j27A8q62sWVYuCjCpxhxcZpBuozNPJ2PrHmgrFzSs",
  "key9": "4pThu47pngEsNz2jfUyosbAqPnDNsRRmmwsd95Nhy1mbeXfTTWLraoHc5V99khC1Dpvwvw2Aeu4nss8srEYPRrnK",
  "key10": "BHt9t6N4L9253zTUsR1yW6CqLPP2RpfmwhfGAs5A6uU3ngPiEmXAA4mvgzct7H6KgJkzAFPACXXXHe3wJCHLmkm",
  "key11": "5gemmGY7eBp4awqFZXDVmwkVjyDTABeXVB6QL85orHJP9TZhGS7NfDJj2daDRSSHbShRShdG4o5zMvM5Ts3RTqSZ",
  "key12": "2ztywet1DnQCXghMfEToGbvF65AEiDG2Kiv5ZwjziNS9eiGE2kbJM7WUTp33qi8T9iUdTRUoZH1t256EFATMM7mV",
  "key13": "vhF62rnFnaR7sXatZZ3XxUpib5HVw5TvS7ztdayDgtA7vREY6ymvFJfkEfnt3AzBh5dhGd6XYm1WoAtfxwJXvhA",
  "key14": "5pVKpPXRuMibjZr1bcBWAgjDSD5fhQ7HZDPMKdSvLc7e35MbmuneszjCSfMF6RU9dsEGXfatTxFUNi2158Y6mEzr",
  "key15": "5aZj9pjPWXNTgNSA27ycSDusdtZ5RvZCtAh3CRCdMkLXucZ24WGhwsWUsQZgGUq3r88ZnaqKXoKBg57mPoUYLJpN",
  "key16": "3MEiYUKxxsoenLtSttQz6VB4erUk435CJPUUH8a1DL4etGCZnvK2dz9oYgBbpJjP3SJVLHjCntGaHEUACATtkY1B",
  "key17": "2S3uP6g2RQQbynptmzBwcHUgHoNgm8J5sTefk5JubLLyYKuKEskPC8hGa1q4ExV9SwJix7ZFBvtWTaRXXNRpR2E5",
  "key18": "58WkLfuf32MoAGoiupa7TwtK5Q4E6TazfPZAic8xmZCFxrx9mmbXfkVTH8WUrqsy9dX2e4QWsChpE4Suz6xqmNbw",
  "key19": "5yzeaVRHPwZHJwXRLTmrv556waLJpx6qupG9MaKMBHZGXdx4hS5yntDEdNnM9ayGJ2p7cyZhuxWUaQKrL43AxDx4",
  "key20": "4EW2PpipccMP1VhYFmPrF1sktQFAckzGFT9V6TzTUgXDVAr11K55rMb9zdzZfk54LiFqYnBt1w4hS3hTsY9sCZQA",
  "key21": "5zfsEjdZsbVyFuDvzuoqZnpQZ4Bp6XL744nBXCSoG2Nk8b5MTLxWytdq7zmAk23iDeUKJMQ7YynUqopVzsJJCuh",
  "key22": "2aL3dCcNBYJfedz7bk5NyJd4uV6DCsPiFCEpZvDvkwfCvZ5cRoEvLpvHocByN9KRXar3vAkAcf4wZN23om8m55Nn",
  "key23": "j6sSx2KCSU52Fftu8MzQVFCcnGfKBY1s49BRX4d7HTE7GDWqoByVaYWudAAdJC8TEXBLY6q8EmhHV5h9S35kgUt",
  "key24": "3wTbfNrNRGB6xbMMtFXPZJkg3n68C8gfeqSzpwqc3oZ7oY1LQYgjjM1gxQeXwu2pF6shFrJMkyu8pdSsG1h6t3gZ",
  "key25": "5Y4FUn7MhcroeYAVpGseLCBRfGXkL3uDSiFPms6YFRq3oBCku1o9b3AXyt3tnsArHYj7qBxonDSSbRQnZVJd2LW",
  "key26": "54Hx61sytAQXsysaBD75Jq662Rpc2FLs47v2JPFyBQYYSeBGPxasccqVF25g5HLjqa35WnWBu7JEQzukW9SZy6VC",
  "key27": "3127AnuVo9ZPSjVoMcxbTpN3YxnFDe2hecpuUgnvVBsiCqGEEy2po15JB2nctdxiP62o1zBHwDMAQ7roZtGt69kE",
  "key28": "4bAHPg3go6Q2Aixrmwa6mN8ACXgTdhEyqccaELftmrkvCrfDqFG1xe5yn6M5H6Sa7i5D9HB5hiex5Z4cronW1uhg",
  "key29": "3p4P3T2zewBZBkFE3HrzMSeHo2pMva3cnFAu3WuwxwkpCv1WkvLEVHmYvYHuo2LWfzQZ8fP3jS8xFrAAzVEWgSHb",
  "key30": "2jvdLmHA4fZx52p4jj5bPvXUm55yihaBhjJUXm9prVzDNkV7MvPmsk2277YtnJ8V8osUJLnmihV3c1V6TYd4TiKH",
  "key31": "KhLru2nTuUUCLWTwwUFg1M6baybB7SQGkMLkCjMLeuP4hGph9Bgf7B7PszxcdUpCBLViDVQvoRAH7yXaNtaCJKr",
  "key32": "21D7ozH9qow9gH2XcxVNvdj9PcJ8SvvVUMxfCLeVFqy12g2kAZtBZBQj2irhL2kF95LD7bP35X1AKdZYAdKsiHa6",
  "key33": "4NASryn5YvanAJRMmPTQj6qqQ7jVo4V1wfcyCbL6vrJ9hHWZDEi4jvvSRz5HCHFirR3Lfzq97i9YSUr7Bfa4wfF7",
  "key34": "5Uot9mkjECB4jJGjqgB6khJdo28B3VjVVvQh6xZBQSsJwDAQF1FPEBU7Rt2Qjm6XEBJQmLJn81tdPgfP9A7wZMEi",
  "key35": "5j9JzvAZGUf66tmTXWXKygvB6JFVtEMYtLtns4x1ccTDjxN5A1nJT3cwLRTu5nh8tc8vE9WC9rhP7rhvhCvcPekr",
  "key36": "2YbyS7GH7xFXCmFa6g8nP5RUJYC5A6HfRRqzivpxdn1sVCm5yDJxhKYBhpRCzZdynWvQpjAKWPEi8VzJJbeFvfP9",
  "key37": "5gLQBJgtU5HhhtdqyGqBrvjCota58X1vL42ChNYSE2WyzuF6TQFksYziXdoSKndXfYWSuCAfRHREwGprCBcHYoyZ",
  "key38": "4nduLxQ34nPnCsDQxjV7HhrK3cBc1hAb52axD8i6Zj1dWx9rodxwQMawryx71DW1rLxB7p25AKWhrYMUrzRxeuzu",
  "key39": "3FGxzKupJbQENxK4C796qfAPP13K4j3L4Nx3imVZryvsr5MLVdB1bncmq8BpiQviQtqGXW521tjev6h1V4Kyj6Pp"
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
