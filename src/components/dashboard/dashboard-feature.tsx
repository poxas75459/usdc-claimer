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
    "5sPkUJ8eLfHTC4NPkTPNvCZA9wi2i6JxtH6AgCgtay9SB3t3qspYt699p5R7vpQtYjVST1PyHmyXrvkUQbFyrJDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dXWDUfXArmVTW1u7JvdvB6eNrsXf39w1g9M5TuXdkxT93w23jd5jxgpNd8Gqdj7HLc4ty8wSrHzBSy4HK8nGkfX",
  "key1": "4PQU6LpogRCEF5oAvcY39HDA5pVVFMC5w9m7cVNZFosBCjNkwAQAUoW3QRuYvrnizfpPDfGYfaJ5vUS4FsoKA2Gq",
  "key2": "Lf7xm3f2C1gHNahnkaRUaLMNsv4gXNWd1a4iFgrsv9MQH3saFq7Dp5fnCKgqV8vmanJm3ARp6dbX1VeW6g3jiK6",
  "key3": "2ysR8KAsVFhhV48Fyyj1f5qJMYoVM3xeRuBKrtkhmaoCtTMkJkAkETLjxNkNUYWsxLZKv5EMwrbgSCH7BPoSJZot",
  "key4": "R9wby5tD48zTWB7Vvt2rXM5QGfiZ15uQdfR72FmP9PkoZk2DT81ncnMX3jXcL76ksr6p5ZXXb1Aj5AawwdWeUo9",
  "key5": "3br5VRLdwjhGFjsps47RgMQgSPpfWLekdNahtD711DiFqFXNN2T2oh9w7UVic95sBaotXSAtiQLwwZt7PEHopebG",
  "key6": "3SLQtJcXcXajpA7m87LTPXk6a8PKS7v8UTm9x6Xg52D2mAp1LZ7p7ctA4jsk6kBNN2EtbDNZZgQJK27vhtrmVpVC",
  "key7": "TaxbcMWx8uaHGppBHL7Bf2VjtpHiRWVSxVsWeKr8gZ1wHzdexpjAjGMFG5Mizbh8QtDPcXAPqRfG1a371WMpTQf",
  "key8": "4iaijqAnTsmeWEKfRG74zS7CGV7Nszf9PXGWVAZLLbz9qJzYAf99GJU3GwWjRYxjcFvirw5FGFMq4oKaFBReAXPc",
  "key9": "2s5Kaz6Ay8JJu1zZAj9PGQqWwcACxK8W9gMJgya8ZLpMaqZ9EHCyFAFcBpMYFPGMU19abmZkX1dKFz5u3cykb7jB",
  "key10": "2pbrotsR3D1zzugMMBtKPKuXTRpvzyJnf8E9BNzT2sp8DEKNPVZcdn4cwqXFo1cs63MvBPYR27uyUAucVC7sNzJU",
  "key11": "57gAJcvBSph5mYt6e4iDsnddBTm37ZAhoLiJHZ57vJrfMgwWVHye5Q2bKxyX3Apm7RJvagSs3zuCrG1QVq5Esxt4",
  "key12": "5TgWZeqwciW1CbtEHF3659hJZXuj3PVhSfRHL8Mv3eFfXCZDGkWGd62vDMeMkJztdddL2ZpgEyUiDXpCCuMxZ33K",
  "key13": "JaoBEEe6kbMgFdQ7jkU9aMnyG4eJjP2FV75NC9QmzDthwfnPHunVz94Yhh6iLS64zxLrMNzaZNaa9QGq3Rj8BjT",
  "key14": "54itogg1NYwB83innGtnsCfhmVKba7BJNhvKCniRmDMvo7AFdTa6p7S966WZZf51Nen9DBsEBNhnPREnC2njnuUP",
  "key15": "23k63MTppvN6K7xftkhFwKjstwcm2SoxeWcqtW2CbDaDHfDERQne6mggVZw3mZbABunV7hRNk4XQhXknh2bna7xw",
  "key16": "44Sqfom2AhErBq8JGzB2xXNoYDGxYf8PLtehHkUMisG6UTPiygq1vtLYSASXG9SbypgUEg4tnDEEubQPz391xtz2",
  "key17": "4Nfo9exphaSNSDRj2JAZwPmpC5eAatGdiYsmbWaZkqGmVtAZ1Sqqr6LDakvTwESZCd76BMLK9NrS5MVNS3Ft1ngL",
  "key18": "j15FwrvpbXVPxM1umKwEk2do2LF3b7zibU5kLRRDi1UnrC4PjG9uDV5ktAXURapinzDc7XnGq7S3XXYGwaLxPW2",
  "key19": "3TX1H9j1zXEj2angjJ1QrcCKrAQm8Ny33VEJ5LrJzK7WCLDY9GCjLVDBAXNJ1ConHCvJvHYerKw2m2ZH9ivqY5v2",
  "key20": "4VgmGT9HZfH3NwD54ko4zy42zWURSyWE1DW2j6ZcPFDRszoUcoMi7Cy2px4V3A2XDTBCFs6XcuQUc7XwkKnWPN8s",
  "key21": "41ivziHCk77oT2XdHrTA5yeHf6XeELabwzNxmpKEi6ngqC3dL46PX8bWxf96KjkJhJYdHenwU6HtvPK8WLMwKNKD",
  "key22": "24fZ29QpRNDNAjHm6zRKCjBh4nCL2RfhCowydeHLgLczw6VYYUhTopXzv2bNMxqjCZpxBfQ3WMdeVgFhUvBU6aHq",
  "key23": "kWHidr9ZLephs2hQivuztZpAvhKmkNYCXTmxoG9YHvj383ikCs9U4LF1nRKMtNNRQ4seXpuDMxYqSoVNvFY8QrV",
  "key24": "5NmmgwFQBtDx6tSYRgCm9JLki1FzaVgG3AMFRVu3udbPLgjm1qx54buqLUhmJVUA8WrXfRfDeCZ5JXT6rRs8ac8j",
  "key25": "2zmZq1UHcNbzef2rn89WZLgB9L3xD3xdbNffWTqvRsoBN5zw9HexFJaHNDGk6k4wGhXPPqUppDPRm9ttH2kBroY",
  "key26": "SxX6LXyhbNe8eZnGFv7y3jjxMR8mj6ZiBuX2jma4EumfxM3TL61cqHkdG1r6tUrC2WWZjxEv9zm8uRqWLV4fjdM",
  "key27": "w1Du2H1zdakEYwXkyBf28hVWDCXkVyLYTA4QBQrus1hjoHxhid81XrqSPM5ZsZ9BU2N7XcwAygjD8kgezy5Etm9",
  "key28": "5dJeHnEWLmVQEC6s2X3nE2GoTgveMEZvhfQ7eGUpr4jnH6bAc1BE8EkxdAF8n8n7mA6pcFo2ZMKsun6tzDuSMLT3",
  "key29": "3eEvhXHGEEpgaJ925h7D7jewG3uMyJKYYeDDLYnk6LamqKHeyKcNxicgxAvkZQqaRPRmrPaPQVAFaj12K3G87VZY",
  "key30": "2LxaySsaBnHGnJTXAZnAJVuzR1Xt5u3T6bUeGH6jEHf6kqSqNgcPepvsvaUVVhLcgsuQ51bEKR9o9kBDKP7X5UvR",
  "key31": "3zXmPKunyGnKSqWPoFxQteSjP5eoppz2hnDnPch3gQDSq5KWKkKJp2vauJoHDpNUKCTpHJjBG7FQqhBy3ScaT5B6",
  "key32": "5VFzQM9noqSKwPnmhuH4jqgsBodqCVqvek7e7V3h96wKa4a2zQbciTpfGueX41VfQUcHLb2qq7pUG431jEqJWwTi",
  "key33": "54KVQ3YTw7sKbi1qF215SLEWm5hs3rY9NwemmoMp1mV5ajyJqwa3svYVr8CGftuw1bp24cGK2Xv4Sz94sgZji9M9"
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
