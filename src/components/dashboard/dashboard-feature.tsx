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
    "32D9yYUk64NCJ9PSdX1SDNzaMWs5T7iLzD7nJPUoQBiFbnzvDosYNz8ddCHCMEJwNwrTw5VN4J6BQvzVq28dzfDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdSiJSYzdYv4HV2ThMvzDyx7Lg1BT2XV9GmTUFhdRfmeJtTb4ogz9rYJaFj6BAR7BgD3Vi8g8gLcs7Q2MUAgMS5",
  "key1": "5TBYF8v6X6NrpTYZRzkuezDur1ZCiAUYqGYAX845vCnmtGRBioW95qswxaqbjHMxbpdQpuV3uyP86AJbvnuSim6U",
  "key2": "4a7Nzjt8AE9XSnEqpddnpQnVK1B637VLxdvU5xYoWda9gzFm1ky52gjAKE1NykJPdok5LS3ysnaFhL38SmSuPwTh",
  "key3": "3qJcQhyodTTSKsqJ1S3rWhevinc9P84QpT2XVRHMeVqRZ8qYm5yuGzVtbgu54MYnxNoiTsC8qFcueHZaBvkNaSjA",
  "key4": "27JvVxYqzYpoeX5f644cVwX9iECHbWq33Kd9esH1CUjQZoSUqFLBDm2yUy6RgLgyPgGESkmspy9xih7uzRF7exRf",
  "key5": "3qMPduLsFEasS9FciVaReKVZfa1hpdtziymm1fNbb22WZJZPDca2hyzYL9a7RkqsTRr8rvtEnvXnZERdTMWNdFns",
  "key6": "Wqwia1u7NkUnF5n6zc8WFEQJ3jkTr5i1uVMzcx1mkN8AT1PgqRxtcZUTDUZyujgtxqzW216C1NJxCLL7FSSe8U2",
  "key7": "218dC7Gi2DXUPewuxGqoTsB76Us9CbAX4Yp4emwx6gkN3Piaif6se44iYVvBM5wKnURyQZRwrEZAJ4KBDmEmtLQT",
  "key8": "2tpDrAXhVT5WRFCNqDZ8KZfsro6Jp5YPaKEYuocs9PooWG8VL5uzQC2qpP2oLKXmEKkTWcokDDBenvYgNqvNttuC",
  "key9": "4YwTpyKGAs4ha7wLnYKZP1fuUoF4AkwKHayi2myuKGpWp6vqXRb3t7nHe1XBw3HivFWdT8MMWeTPEwBhEtoQ9CDP",
  "key10": "3KmMTpZimHWq8HdmHB9UGydrfuNPPaLiQekEBe5cPFuHACQojpBu5nRdhJ815HZhs5WGZn7wx2uEW1tDVtA2K4H3",
  "key11": "3cnZ4YiN4b68DvCJpbaPk7D88uHcRFudvju3EajXvefyCUkFtcMACBhhF9fvXuL11KUvEgmpPYTqHEWUFpEMQefA",
  "key12": "464My3VMWex21x7r89KyLNHz6bkLnsCyFVRpFrMyqJAfD8yaBVD1XenhdRGZivMU2Gn2SnuWJb7ScFb5W793q8jr",
  "key13": "5zgky3eAChRALHgVSzYzxTzu2sWFYtAaMNaH2WoTT2crrtzn3pcsqrDJJ4kKXKLNQwDV5mwPGL8PNp13kypSpkxT",
  "key14": "3pPvvEskaFwAucNSdvfTALfpCqaCLKaMGTq1EGZyKBXL3iavd2Bj5hPNcXsNBYjoa9AqYintgN4e4KPTTSSTQFZJ",
  "key15": "5MEQ1gpPQafajTiNRnQcBAevbxhivbezixJv78f1KYU7VZDSK4HbHTVwpyPysU2gpEgnsSy73YGim1RYcZ19Zdxk",
  "key16": "5h1FRKxrHjdhGZAtTMRGLDPgG85tQ9gPVhhbDkKTv1Zk2k6bsJdjnmUghE2PUiqUPeGnJafkk4b7xaTfW32vxFdp",
  "key17": "2dqGYLsAbQfoijsm3R5qxA5V349axaeNN2E36L6wUxots9Tsov8vdNk9uwWHxFW6hpLjiTTXMeZ27RqyQYoRNqQH",
  "key18": "hPwSLKMf4pwVofkg84UCPx4xHUkX62kzuPg2sTZ5C7paw8TUV3zy8TjDp9gc2SpUUbKUDgERqSbkexyPbBYgTfe",
  "key19": "Zc8EfvhwRmL1tGcga3a75E8kENwuPMo8LNC4i7moeT12T1JDQSS5L1CeWJibwi3CwV3cLEaosoyp2hqznaL9bPb",
  "key20": "4kXiDfAzSUxFwr6buUCdTCwe1nm1umdkUnge5rsooNN4Gp7PF6EYFiGWVWawFUAkEW4AhvvtBbLmiWuBVGQgNntf",
  "key21": "215qt4tcuE3exvDgp4epA7TtU4wp3GMo3tuunm3rBAckxJe679bAmTZc3RyeaKX43xzCGsKGABbQw3n4Ay2CqZ4g",
  "key22": "ugTnfKr4UoWJFnTsJS3UttHpffTW6kqRwq4wZR27CrL5W5GTC8J26WntQcUVdqsecoau2JbKNUBZxDjQnLTiNqW",
  "key23": "2iTQs59hZTovoa28YkjXjtBcwrCEu5WAmh1gX9rmApawagUjNQRxgQHiGLyiRj1RucGZf3akxNCb2KejGntvtikg",
  "key24": "ReDp87VdCsdabNX1B7WzztRo2g9MT27Waw2ap6myfJHyzm7S46kkizmfFwexsLv3UuneCNt4y3XxekhYpMXJ159",
  "key25": "4UdVovbw4jV1jAKsdzW83TcJyVBRz2LbkvjSfjFhDcTXg8LuapVMRUbWp4dQkDxoDWYbEVp4jeRLJswXPdARoN24",
  "key26": "3Mwo8gLeh3cbRm1SaxeE24YUR3QG4W6AGq4LYYmhjTEY2k48o6ETB8A9J4VEty6Xinp8uVuqRRVtSDTAW9bQdVBD",
  "key27": "4HGQ6L9kQCnR3jnotwRNSC7tkYgrysEkqS3o9jYmTL68MaX9RQHnbaAoNR9gmW5UVwXLtADLG8xzTmc1aYhbpio7",
  "key28": "589Bhu393Hx4YxK7cD6myEimPH8nKAMtqwqzDsj1WnNPMrNDireunTcSNyxAYpAwMLUS51AUwVVyc5XMzrXautH1",
  "key29": "21QhxX8CnnQPhGxrvVPxjsb76jMbCtpDE1gdD69vCdba8NgyoNXgC2f4bKN3BUmVP2BUZNB7vy6aUDfUtSLWGRVA",
  "key30": "4xmddJWFqpJLcX99xrfS9dcUx7zefeKdF8Qa37PUnG43HDLmYTqPs7ALCSou1DSkqgL6NBATQeWxBdwUKkSyZvzE"
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
