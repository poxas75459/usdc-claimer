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
    "o15AffMVo6GcczVQhvSvjK6jfpu9pv4pq89eaeMXoNo2vr66VWnJfZnxd3iksu7yyn1vAJafUtgXXNMesFZMpB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wKqKRsHJDGE68K8JWTqi3Rdv8kyFF3RyBz9PppzunSqhSduakmdQVMiSM7KSXuAku7TaBtzLSzHjbK7agiHF8p",
  "key1": "4oPQJgruwLG44KmJeaBnBE2YAAGzNmUSggwtmYMPEZMcJMMeAfHkzFfzz58rGo5UWN8qAorWyBNf4wJW8vagvCDo",
  "key2": "4Gx9YeyWppiPyiipgH1SbEiP9NEostr3UjooHnYu2Kr2AHZgbMP4hFdDPZFMghktLYb5fUjGQLunGEokMNG8n3fb",
  "key3": "5uG152u9YGRgsxbKj23dcnzzA32ggyx4bVaVTWMKZyubFfCMFjWeZaYyxnUZ32xMRVvNC5Ya7csscMxdgXXwDRfP",
  "key4": "3j5S5MY3iDyzGaJ8YPdyczdYUvgnUX4xB9VqY9koUST4Wm93LtKLXSbN1eenRJZdaA6MjtKfTRRRbA8X2beeZZRJ",
  "key5": "4mvF6xZX8cmfxZUivJX1MdGiGQ8uobYCN2JSike6UfRn49qy9wVaQEcEFAMvjxevfNjsmVtyojqvYmJFoPALUjB6",
  "key6": "4uVGWW1uq6kmX9gMSCLLtMAxupFPjuhb6N5fraRFht9MvuZKnmygs7Dst4QxW9q7iNeDWA2tRZPQHDJL5Tp7f6qL",
  "key7": "3jaWjxN5ESWgtYBURFTUA9fDZYuPxhgiTwSdAtgm3gx6xiQCVNoPgzPTVk5b9phz3gnRXe1SqYh88FafbDqwgnwq",
  "key8": "26zwa54s6DW7fhfiws8KS9omQU32E4tKvimvU2vqKGzvLMe6rgEGPdwrzueFcTxajbzX1N6hkvbcVrhKvxMBwmJ2",
  "key9": "2uE2doGNTnDWXabF1158osMGQmBy9YEM5itC5rFFSZBcUFeS8Vy4bMb1skrSpKU9fQ7KYT66JpB6hP5ByzFqMhxY",
  "key10": "4Nz8R2JtKgxazZU52QpMw7KVYThtu8K4CoSCDmih7RbZ6DwKSuagU69wuHHELJPsbLy1hF4a5wxY6y9QzUoPMgKP",
  "key11": "r3p8VVistqnnY2N9fSBM7yGsKNrCXszt5vvizQQrtuco8cinjzifdVrjfGeCNNcbB7gCUPzNcB4QGkE8pcbh1fk",
  "key12": "65wmEPeXrFDoovABi9bpmDGzYNWxijPGmDxo8gQA5s2CjAgYHUSBa14vAs1HWgyJg3adrk7q3kDGhs4NbiDTGfNT",
  "key13": "2NdnLVsGqH4dbyuxubajwoTgdrwasv7QZ9xBuKkja8XJAP5dcCTfaBQz99acL54XMikAzpC5erG1WkMw1nPeJCLq",
  "key14": "wiZCZcNZ65KQYDCovTKaahikRQiHaHwdZidYbSVcxKTLe6wjeE3VD7qGSgAwzmtiL6visLBhVxq9oUxZb828s28",
  "key15": "4nHG4wAqkBotB4dqLevEUbhpr2YkLf2o8AsfmiPgxeLUoagJ62cXBSPFAf6c2Gwp1u5x4dtC7PaUJshZszbPmHeC",
  "key16": "3q74yirEjwapLUE9qS4ikMNL31c8TdXyD7cLXFZe4ParVA7SBLKbYDrtZvh7bKqSYEgwLw57BCAPL4J9mfZRCsRr",
  "key17": "4PMSkBv3JvB7xVnxUtTpmoW4BMFUNJLH5QveytLSiZFiLR2KE6F3cp1LK5Pk7jx7yFm5634BXNuaWpQWggXDmqaA",
  "key18": "2ZUPRtQGTCkZ7hd9ovpbZmUtUjqVVRWVYCvsVvL22BiytSfPMrgQMqHoDQTbSrAoA8mDGaqoVrr3dri4ykd7mAkt",
  "key19": "4qLBhDhnZePCLHvfkJ3F9MrF4asZgVLeH2nevdFQhFeWZFhhQbHHL3HS4QpirEZh4HgGqaNXyw3JvuTeujRySKa4",
  "key20": "5NuaiZPokAXLwkubisBh7RLwCLvvAq4ZQqYSRZ26rRacSkWEDdp8xgb8arfseoh7npUDfsUwQkxGigK75sdxoqvo",
  "key21": "2Qp7iVFRaQ9TjTscEB4uiYrAg7qSqu2SKCBsQNurVep7HCgZkcUJpeobe7cbPqDq74mSgG1QPeNRLV8ugHieyMJR",
  "key22": "4f8w96awU8c1hEqdJiDM7jazbZ1f74i9HThvp7xRHjG5Pa4BMraxURPZLa6YFh3xEVryRQqz1fC3gsLcfonvUZBN",
  "key23": "ywt8aPgmNNqGJXVXphPURdK3kJSKpE1Lz9PMUFESifB9uDrLMKE6pqj4DQLMshNcbHuGqp9gLPj74sVDuRkr2wo",
  "key24": "61esAnvNbnZUupU9yt8EAkM4tgexwBbEDjaBvJRHZG568aaDQK24CbDtUXfTCTqnswdfb9QDUL5xukB7ESBoaE27",
  "key25": "5b53SPfsWUo3HfCKBHrWFvheWMRgJEUVB4GFNXdCmS9Ao6XqRvQ6TfrYcKmN6EUmJyDegCYFLtBZh6off4sxDagw",
  "key26": "35u9Gsz9yv5F9TR741Y3GgkhSBoEK8CPZoKKrBCxcbxD9QMWyoozVEQwwDyYrCCP8NsJsiXx4jGv8j1KPzS5u1ia",
  "key27": "2KJjWCN7Fx6NoEpDMXi5Vw6nbhRDoa3qwx9qoEdkvgCDobnzJCJ34C1GGFfUQUG4C5H7CHCpj5ZvM1x7XfQUb7wQ",
  "key28": "2zC8oTvBiRi6atAR7iQD2ho8VE39wJk1MqmXtc1VYtUw7EHCTW3NsYfe2fhcXS2eVG42cJxRvrphB38qYyxNfNNF",
  "key29": "MqDNuFo76VmXceCvWnpNT7TTtTQndhjdsHZyDdAxkL4yr4FaZee3nBz8Q3T5amQR5HFcpacdkFFSfVPHEN8FPrc",
  "key30": "UdzVe2GQWEYFxgR4g6WyvaqLL8rDt7tHpxqMR1aS9qXgRWY6Un5rQ9atWbTf83z82Khgzbs8PW6W4VcX5Fx9cpk",
  "key31": "2Gg1uihGiH741bCDSPXuYzHmNA6rE7ccPK2uu6oy73wX7xZVTZxKxhn3S3PDHartMSitBaMbGpUNbepvTZVAHXRA",
  "key32": "mbG334QGVYqk8wV5ifqfi3MuXFeYhoVq42xNdz6tL1jGtVzhAhL5PKtjmphBbzvjfakKmo9WuJ9Ux4HrSdVDhuq",
  "key33": "24mDxH12Z5RhQAvHtztXLddZFo5o7nU3kuLN4qrRd5vVTcticeKhzhzk6cVMZR2jprGXxWu1Bdp1Z1Pg3XNz4xzM",
  "key34": "3auG2xM6ZeK6s3jWqPXow5JsV1af3nmuyZ6bSWoXDPriLErUWhecMEkNJ4fikVTqwK4SYN2pDRphBPzHtis91KtF"
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
