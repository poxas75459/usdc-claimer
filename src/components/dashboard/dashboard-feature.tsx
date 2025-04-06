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
    "mf4kGJghjHjKMedpTTch4VBJCtvjec2VGKogWPWfBayjkM61ddGWJQcJbR7NJnvtaazP6ZGKzh4WPc1jk8m1Zp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66YaEQ6hPzcd4YvoCpD7EqcUgFqkFa61etC8k4X9EeA5yc8QjDdSUs8SQ3BVm2NbeZqVAWwAqJ5dwAJGBWfLjs3a",
  "key1": "5mTGSBsFryaFQJzCuJuadbuLLBwXtPphAehvtFHwBi6o8xM9shu8iBy1eQD4VW4q2a9E4ydd2HEcsBRoicw8mv6G",
  "key2": "ttiiS5av5joHzBsjSsEkirTQJzh6PMt7iqbFdyVvfrwq36ucobmzk2usr26FGy1jpEHRpNJWhmUgJ7k4BwPNc7K",
  "key3": "2KMZNfzssuPgaSoYiLNvgcWiwnBdZfrwqFijmW3u4VRunWMyXcvzo8N5cp8NyGamArq8qe1taECm2jrSU4BoFtJk",
  "key4": "aoeJXmhSHNbi6FDRHVDrUNxvPV5bJ5sUZw1SxoXsztHcLNNUayE6iXAmepkuZQ25swCeg3FojoWjhpkDRrXb3Sa",
  "key5": "QJfT1JEDWMJJofumNukUethBYjMVuRC5Wqr5TYo9xepw4AQU85VV4Z8c8k6HfG6Ri6pY2zDBMdrEfdSt9gGTGfj",
  "key6": "2epwvHLPD5J3oe8jDAHNAjBKWBrk547URxHKp7KAQz8kvwT6YdNBbcf5NbBVnm7vAKNFi5jhyJaya2R8qtYFqv6C",
  "key7": "4UN7SKxgYM4nfWJitUMzRw2PsSphwT7UppdXP2SwZMUpwz1kSrXKjVS1FA5nRWXwwiHhvheXATovUMD46P1EFy84",
  "key8": "31op2JKs64yYqmMqQgMC4cVbkADDwHwiKmUgkzybAzdRKqqAPBXTnEdiQKNxDBmi1y4aJjDCdpQ4D6SvGTqPJ18X",
  "key9": "p54SJiaMieaRBjHueZCoiA1MwVMKsWgLCDMh2heGDLYRuttLNF8kQxouDX9dpxK7yCMaUfKZiYMN3NQ4gKneLpe",
  "key10": "3gK4o9uUxRhmpUdLfLTT8QxU6g8JfT2k2knzsJYnW2QCLWLbGYorxXydKrDBw9ZJWiPNxiUNtbyikqmAdL473S13",
  "key11": "NpwTTUECVignbfJ3ZUQrcm81jWL3baey9kcDyYFR4w3o2ZvHeyM3qcfUge6jNaNLb8yMdQ1hF25cKhGx59KF2z5",
  "key12": "2deEFGozRyP8DAxD3gYjFCfQFguhz9yCHCm1DNDcbfyxtXPJuP6Fn7Y6SMjNFWzzS8KY2Uu2qmfqSdmhx1x5PRbk",
  "key13": "tEkhHvEoiFaPEZ33aNvQ5bSxWzHFLNxwZ7YZ1jPqf5UasUXLedvF3upSR7wWDgoTm39QL2ScqTZ2bVsuG2cRQdb",
  "key14": "63q6sWpBcLqYT3cDVrxy3tEjzXRLPvvGvuRD87csoh3HWYdKwzguz5xiAbjN1H69c5Kd8KjMYcdsGW3FB2sxnNWb",
  "key15": "2R3V48R1NPisN5aGnuFknsmCB3MTu3raPszo3zTcWnBiq3tmkGcr7NJdNpTFRf5SaX6v3N1pVeEw45LwVAwaMWp4",
  "key16": "5n7F77RtEZ73qDsZHiNVimyxfqtDkuaAiTtp7ZQoWR5raPuoLNQrJfnaaX3Pn25MV8h46dLEDPcGJbxP9eD2z7Z",
  "key17": "33AwLB6MqbtsknvFhnUxjeUJwdQWxg4pjVV9jNvx2EoW1c53TN6ZiYq69CfGJBfYDHV8QDqSeFpLpwPKFJeChb2y",
  "key18": "4WyVezwtqo5XFgwX372iTzNkyDQBbafX3ZD9AjA2kGyj3Hi3XYFKYm5x3WzQ7WNvvaZwRrtYKW867GGrGnTX2gRD",
  "key19": "uf9vrANP1snpfE4bLULViBovm3KP7CAqWMDwKziFaRgo5bMv2Mq2wQtb4dp181qfbDSx4mY2vn7wCwYUnZphtpn",
  "key20": "4gXRZc1avD2FWnaHigY7gCJaUtS3TuNVVoK95HeNoE6gQZoZXguF7C5DeCnaWWYfHiLhUNi3Z6ciEDtkSqUWKXvU",
  "key21": "2WiyZFEJ5oMLiJkQ3Vhq2nT1F424hhQzuw7RFwYhGEfX5DwLiw8DMbThsgPHzpkpff4h4uaVv731NguHTRFh8xkb",
  "key22": "3bEjXf9aknyYV1rPE9QU1waSse6J1bq83xALWoULV1Lnea1P7T6VHiTExJAKzqv9EfyZGhyrzY3TEEqHFzTe9VpQ",
  "key23": "6AbafNvyBptzAkVitNUVcpLCY3fM7ezCc6FXiy5BnHEbLeWireEgofc9jdJw1YE6obdCSE5gsPeJjLaKs9q865w",
  "key24": "46Ej9CEt4aZPxsfH139hkc4MBEGxskWuwAsHdnd1XuSKkzZTqtbS3DM4DBT1WmybuUBSE3A8dqMkojG36srTFbfx",
  "key25": "so6FY6DFe5vEP2dtMjjVR3Mkvw5FEzgCWiqn9Su1ZWhK2frE5c92wUa9apZHGLWe8Y8aKw1AL1TeeMPZ3HfgqSn",
  "key26": "3i5haxBiMaTfGnv5cvq7u2FAPJf38QYmMXomig84KMiswF3qmG2iHEfTXvHHWZirSSSvRmwJvHp5TzVvBXjvUdhh"
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
