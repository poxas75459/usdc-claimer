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
    "3QiLz3JTeDBQ8MXs767vp3rrLekyZzh8mR25pTDZ5UCqZpJEDg8Nf5diAYbsxTxMpLXikyJksxzeoi8Dyv1PJryo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuaHiFaWCH2NqKHthnwcCavn7x7Fd9SQsuQYywhsvQXVUKn67KgGa9E8exUiLZj7Vg9DXXHau1xAhdqK95VH9Yb",
  "key1": "63kdfG126neTGGhrWSJcdK5eRZX51zxipwtrdaGXsSTk97cct7z71p7CdddJY4KxpXygBrSU7xj9aquJuT7sz5Bv",
  "key2": "3T75spRS4HxjRcELYCzGXTh9Snrkad8JRmZFKrfBCgsMPhhyAPTTfGrF1XXAjjvgUfD9KZe6ZbKfrATceM7U32Vm",
  "key3": "u161Kbe8GPF4ySr9TdsiTGMdVm6Th2DzUCS9TrvHowvLt6tkggH8NcQCV54U86jhRHjnQvf5Gi8exYpdAMzVke9",
  "key4": "3LpE13rJUbjHcFR7CoeiNftSTNZ92MWz2kBsUs3WWq8i2hsCyVJpqBysr1knY9eRjJoi9ZF4xg8LTfTG6MwXRZkZ",
  "key5": "64gKFram9RgXHk8q1f19rWTS95r9Zr55ZZmoNti68ss2GhfgWvLei5fbk6Vme6J3Sih6mVbYbGUwmtUDyauJCd74",
  "key6": "5w3JmnHHShXtfTBcSfs54VMi4dGoP76D5iovuTJuK6e98RmX6tgF8Zt2KADBDuXQMA7ABEGCXzCTLh9Bw4Fq2bgD",
  "key7": "5ar3KQX2Hr73YaFsrvn2EF5SmvkjXvS2FumB6N3fog7ZN4qcHKRbDmEfaZgyQbkMEKtg1xR8svuFVY2oYurgd5dq",
  "key8": "5yYWRx3dPzNVBd5Yoe71S5PPPGmSokMkmpSPXh2QwwazXrCbd5239AJPRhEZHRHDeEPyaDAMMJkHMyQPGgFrGc7u",
  "key9": "2c5FbZdqg9gJtsncAESoYifdfMsU5vRQWVDtS37TBw4yafdK7EyY4Qmv4sTcBj53Agoub42HAr4XYuXvpYFo3cYr",
  "key10": "3qvCrXWGQbZJTMXy2oXoW1FkLDeMpo2CgeS22FPGhpnRRTswiHVN7WqAATh47QUSYX6QtrLF2M18TTHf16oKLDLp",
  "key11": "2Ccfwut26Bf2iEx1PssKwGqZttWtu8aFuqY9E1jjVYYzwWZMNqeghCSsYd5rKc9Kj61fy8Pbi1SuUmtmjLttaXZ3",
  "key12": "5b9hBwnGqhAdDUgXbjU9wFBdHVKAf5Yg7JYGRKeYr4yb5QuJsZyRn1hPztUeL5WcrAik1pCz6Z66YD4JvMheUVab",
  "key13": "4Ce2gf19mjyvDWcL34cpYzvqBUbNYT6YxYaqMrDGHNxj3hRrFjjnxdyQnMcWbSxsQ1Qswj7sQjcMXjFCBiywLZx1",
  "key14": "3PAAAvZi5LFfz8NZLp9cpHPqB7WdVB1kkhAeEQkR6ARP9K6eb7oxSEedBdgayk2ysdqipDdFqPFeMQdZGrDsfxPA",
  "key15": "57khkzTRa6fmTCmcHAEZzb5u2gfXPA9uNjedkkHY5Us8ZBbySxo6BJBDpYUWuLJ7UR45fqB8xeEdMsbSgicp2P3E",
  "key16": "5gtYv7NGfJEMugc4KhMfZtPSSd1m9bnd6MQdkBQBYwiiXFNQSsqb6dBkbtNjoximpYqxesMjoEpURNGaSVXbyeFs",
  "key17": "39JoTQwt6vdcwb1DxLQLR1UdJJyz3nkTYjsM6UoDVBXkNaiTZrMJwkSktV2Ap4CUkyQf6VkFrJfEF1sRo4pFTSY5",
  "key18": "5pwr9JQeQNsgtABLWMt9nxuPd3KXDDDZzgZyFcTfDxHYfiEt4LeGSePibNdYXx9V71JUnaGigkMykSQTrFwo26nz",
  "key19": "4HVfTfvT94UB34ubvvtBauGmFgZLuYTrXEAQaB9iwqgGxR4DaWFmaahuRKHQu6grqLHxhXSYUubPhqZYwBYVSSNE",
  "key20": "2KJMwMKBRJAaHH6zghtPoxYc3E4KwEjCemzB8ySDjs8mx9YDLGewbZ3dDresf44tEXL5uT2DHPrvuDyn3dd3KDf",
  "key21": "2zKNKNvsfsbRGGxMrhdob1Y5e4Z4WH5JzMWzjSFNHiX7VfZAfqkBcdnBvnwpXB1hDKXAcWxWwAdoipjyprzjPHsa",
  "key22": "2f9m4ZSwMBLn8kFVeWifEUCj8gxb5mikGdUhW7rGNo1eQkULutUjHcV5Y1dM6xBFpWxghzsvBPZCiFuHPR8AavRF",
  "key23": "3i9JtLRgtDyAS9rMrSD6pFD1rNd5dJygFL2GYN6nTERuBGaLdiA9uj6ZcNiDFhdFFtzhuRMPbJ2Yvhif3P8FMXtd",
  "key24": "55EU8JyETYoAEhEpRtMjnkDUEZ3Peap7wx3UVEhd2ExPP6tE5NYEMwhiFBcXANJe1iNezuTmsGv4gaRRM2aZZLEZ",
  "key25": "3j4FNyYEAYSi853H2ztLaFeae2PVWVeD7gNDCQSY3uaPvQDtMBM8HE7num6tbJK1LHD7tPf3W5RvMRz4rZFSeKKh",
  "key26": "smgjPiXMkrpksSQ3GVkKZtRLVwTUpa7KDjrfuqXYmouHbCatykrVZEeaSTZSuFArbkbA9dSKdJvLhq3RqDB7adn",
  "key27": "3k5Jkn55iwfwSz6VULrsSeMynJtmGdUvU7G5pxB6RTHDwgQGnE48pBJXMXjEXVAykXJrz4uG85gvyETNV2jqEUKv",
  "key28": "2RLQt7iaxNstsCNeHp82jTqojLgFcTSyUM1TfRrkoZYdzCQsfyW7ES4tYYv4V8XGoYtxfSN4LV44yUwH5J2q1E3r",
  "key29": "2wirpRGUZJnaknx1maPTwLDcy38bsh9NwgGM5K5XJrdf4zY6VEsYwFyZVHCW6aUVMQFWR9hq8apBZeDyiHA7YZdo",
  "key30": "w68d13JENHpRiGG2nNJfeB8fuKpb62cRkaDXYxPNjbzTfXicUg19yt1cttf1MPHu8gQhGruJ4a1f4ggoQuAfizS",
  "key31": "5EoG6HwczHw9DaPqGtNqfFxz1RwGtNBzsHtCsxzeZJeTSDVP1YMJT9jUu7oFtQXngfwejNU8uWGyno5x6guYRVdZ",
  "key32": "4EjB531zEwhqJXaaLS2T2Cjy3UFrFF19UJmLfSfVfpXZnZfXMXLneoJdL2DBuUn6QqTDV7F9o8mr61VwuHE2V2Vu",
  "key33": "2BDZb8PFXyJbnihUB17FJiaP2k7Ym9WsobhmLFU6q3mfkAWaQjY9TKFKpNdNmWMpymdfyEbspx6qHeygjicRAk4n",
  "key34": "4hYLqa3oRDt7k3XLT2buGuxaP617WnPcRC9prxwEyWRYDDZ7FjpWVM8TKBQo2dQoMAjBx83WeWFMyPmNk8iSeHcQ",
  "key35": "4XCmUUoufkomJMA37Hz7siD6xQE6fbck5N99V3atBujognCHEzLrDa1Z11zPe64XRRbVoCVqzEmMzNigskUNJBNn",
  "key36": "3KigaibR3RSjmuectXti4aHw516vpxcbbtfUcT922vGzuWGdwGafcWz6U9VmMgrNrePkDiJckzG6wP52KrkiWhLN",
  "key37": "jLMZxeXNr5fw8gsb5wSBwrnvervkkLppsMwjytn9nJR9eCQKv9FM7VZbNNQxqS886yHLsQpy6EasMXda7Xj8ywh",
  "key38": "2fsj3tp2U9iWQaiJ57DaChLETiVkbCauSUAeT1CdNtdqUvJjLNYezPvHbmJA7emBGuEmHZhijagCqeaDPAjb4eqe"
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
