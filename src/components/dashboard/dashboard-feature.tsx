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
    "53KmCwPHKwHi2VEWG6qQXWfxT3TuE9sXooYvckF37Tq4iGp7MvXocwSjhh7e3Vy6mt5f9SpL1ArcRsEWeZmQk3yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ps3aTyYeCs4bjYc1f7C7KVFdofEhZAc6Ymm2xTgP1R6QWMA8MzeZn2Arg57mB1juhsQSNKH3jpW4zMpAsYYHbDz",
  "key1": "2wyiAEExRKNFMDU7hSFgVWZ52UKMMgmrbZGVVzUmyJQCbHi1TJMAfSkhDwUzPXDt7b1Y5YmWfK6EL3qxRs4GVPwH",
  "key2": "4qu8YkJNmtCq7rDiNivyPdPc15rWejWrpKjrAP9fL2jw63ZEfYMoQvgFo8YL1KRFewp4FfQ659FoZeBi5K62U4C7",
  "key3": "4uXtg7ma6s5VS35Z97AMYFz2jHGYRBJPqznsyWkNigzCTybhjVE9UunqiZ713aBTPmDoD5yPL8CQ4cam53JDuZD3",
  "key4": "2EimHspzFKiqX5cVeWnVsH2R9u5nN4SyCS6Z7TJztcZTyL3V9A697WatU34fAST54mTPZ41gFfKCcDfHeMBVAJBu",
  "key5": "2recnxo35ZERbSY7zWpKe3TodQiHTxN1kqETGPvtfi4gNBR5EUPc6rWJaBx3WqNnJEJvk66dhrm2N39fBJ4HNYK2",
  "key6": "P6bEApQJp9uaN3QfATsXQmDKm8R9ifUUQoobxzvY97Mp755vWoAGZ8uRukJdY9itTdvLXCsWYyByXaD44Luk7gJ",
  "key7": "4HCVGmaE3vgNsYSnWYxzTrLQUM7KFv55UPcEQRjCYyUoRh84xR1g1e8N4grnpz55M4CJhkkiPyhm5c5A8aEE1aVg",
  "key8": "xuHySvPCivxCUkoEyCutuH3aqMqH38epshJmvRfJP4fiVrJBwhwnQk6dH76SuMEDUuWbo9kmeDeg669afPT4QtZ",
  "key9": "3dV7wZVZbukqS4A2cDsdP53ykJfzaE5TPuWh4PaCRuh632PLAg7qyKv7dzQged6aTymeZ5dMM1LDReScEEz7h7Z6",
  "key10": "7oyzZWzUix8GAQCMHvVtjQWVVAfuudQ9JHDZUuAhH8b4yKygee3dFVjpQkn49waiqms5UBddWqWwEQsGL5reeEt",
  "key11": "yj4ZVA4CbFT9wJkNM5QZkbv74AhWvuEw6GdxqfNgFCXLiEnBW4jQ6xXe1tYT8mvg8nhrD8sB2ALpjgrLJveyTTA",
  "key12": "41edGWzWP2QBPNRPbGFhsF9ZzKvYRgaT1LWMJULxZFRkLSa49ephVNaxZSVDv2Gjrzb49Kj8EVoo4pWWZ8YRhtfW",
  "key13": "27XWND4zybGCyvGSiywxZ5ShXqj5Q27CtoV8eZCGVPRk84HNnGbqCKuWN2G9BAre6XPezWk3XZT7UGsKmVPM2CUj",
  "key14": "1iY53yvN2sbrGmoMu9FZEQrJ95u6q5H1raqS4kdj9QTMoFck4rndrLtT34j5WdrjkwUpX71SWERsuJEEaeoFJxK",
  "key15": "5i3oy3mzpzrirs8VcQh13vfd97yCCpGoryeMFwAMhsYAcjS4GLKfvWQ2bpf6zFpXBNyTh5oX7Z3ddy7zxUHQTKEz",
  "key16": "3ru8DzXmG9tVq5bkH3yJJ8UdaUaRBiEDu88QD1UZqXQ9X74KEyGFrsKfZ2AW6wink9GqbEqaYyiwb88RnHuY5wk7",
  "key17": "2zSKfPeCnccEGufSfDdd4gZcxoDR54AcG6ipB8KWwFasoaTW1FCe2CnkSz4X1P8TLJNMtpFTrRPcBZQbGrZG9Knx",
  "key18": "5QVW2VzgJALsY9bc5YJh8C4byyfQoXaxdxqP3jp4uLpCPGdG9NMPWj9xNGqmHr4S6nvrJ6ucuwiDViEDPa7S8kJU",
  "key19": "2ge3PTjzq2Wia5NgHk1tXJAJTKeygWKi3fR2EzstRkwktjiQqLVd1hY8atBYMMhyt5gnFkjRKu4PP73j7dm11rta",
  "key20": "26LqyVCbNncAFAv2QEoK2eWB49T5qJ8kQHAPtZUjaHvQqmFKJYJ8DaGriZhDPzZ5frTZv4J28JkujWw4SaVL5Hyc",
  "key21": "4dBBdrNosao65B3zPY2MMbUpbwGGCRVoNCmRTEF8SxmTuf8HKgvGbyFbtWTK4Gsb5ZjDc7BzdnHr6aW48wmZBExZ",
  "key22": "2BWSymhuUrv5CVCWWywYTtyixreq1A7yFomvwufHdeztdvAiDqGdBAqmTxbVymAcAjHNvSoBLHuq9VidzQYrN3Wd",
  "key23": "5b642h68UbmURrZFshMzWiZFd56DynkE46Ts54fDGNVLpGcHXV8ei12axuNF16szbSmqK8D9dzpTt1M3T6zbeXfm",
  "key24": "2ocSUAaZteGsTLaKFUELaTV7EkRPryLTBvUxepZhak6Vp7Q84fDRodDDn1N59cPKHoVXpjm8N9wNjfgUvU2nxcFP",
  "key25": "26Y858ze5dvmQ3AFWngpENGckpQGaQNiWCx8bxEgq7eGyCKAFPNEYjRohBBa1ZGgDVW6MCbrmuEpDrFbdatnjm5K",
  "key26": "2DGvnWrJxaP3LKNsTuCZJVPhmsFsxjsdiCHVWNvdGyDNhwHLCgVcRLDvYyUjTC89agvAbatFGkPxzK7zzFJS1FKj",
  "key27": "4YsyFJcLSKFFog9K1EVUzLLJTzMabwLe8nBbLCQshMacvKiL8M8to3Yc9493Vj5Gfy16TVS73zQWYiR8WGCgbskk",
  "key28": "4AyS7xFtBCPsoZkNsbdouBASZjiGMKCQpiVAqpYYR9NhwP3mscGakG3jkiqvxto4F7zDQiZYJgDnL1q6qkCbuHbN",
  "key29": "43MctkhDxtkJ8vRv1gnZgEpemLwDJugmLfDa718UNdpbfcr65zcXUbVLx59QbgUeu8qFAVAeumGfrJT5fYKWY1Rs",
  "key30": "3voUrMMkEc6Q2suwcbQS8DHfDR5kU5i8mrv2at7JA6DSFTKgZD4aAWv2Cqdv5yBvmTHYmf6T5JQgVrQkVCE1PpW3",
  "key31": "4QDtjp9qVgwy9M1QW3hc8MoEWbExRpArHVbzfuS7X8CG2zfwhGTK9yDBnG5aTTo6Dx4yDGpsCRz3o4fVW4r9FPqm"
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
