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
    "3FbkXTsqPgyvWgNCkSS5MqxUnUpvnwTAjJ6KPre7TAVk668QvXHH6uUdZBR3q4bXZTzhmdgiVTzPq6hVTBrPurSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNWFvSZZNQJksChEW6oQBXSnLAU2g5btiXraMKfsVH1gZ17Zpz4yTmdY34L2Pe6ZJFXM9H8btxFdQd7xFahCoGf",
  "key1": "2Y2iB3e6vLKMCveA5VwNg5iTszr7kiPDf4UfDcmSdQVyqNorCJus2duxDFWdaYbaxzY6ybzGmH2rpNEhftSKLA1k",
  "key2": "2QXxrsjS1KPRTAq7fRvPuVz4ma8WLrDc8rsotRqzpMPWn2M9oyt4FPfNt8oq4UU8Y8m8pwXh51KrphtA3k2N1Cxj",
  "key3": "2dZZLSiYm7fcERLcNz2a8XaESo4AeTRLN9fokzbq21oTG3gqrHpujGwNt5tAPkHenQZJQy7SBQBTJusp5BJxsGSJ",
  "key4": "3hHeL1ZehehKxaMwtPnfbxnuBNip4BGZmwPvtEhRFseGSVvMoujaQUcLPuWdcjuYQ69WQUHNgh6yxAoniK2idZPu",
  "key5": "2z4VgaxSyrDYQum7xb7aE8yidJ2YoTGTcVKESr1nEzaGU2E1gGrKsSNB4yhZbiDeunDLqs9TrJp2sbxv1YZL6nE1",
  "key6": "3qaSHT9pwGjPypAj99oZsnGMSjaVt2YyA78gzWo2MthtxRptEuoc4w7zyTAoYc38Xpa7R6cq8ozg1cHWDx2d1f2z",
  "key7": "2aR3wMdz9oAQQgrPEefnr4udDzvsbpEKEHhFDg3ELtu2TxmwiNeV8cYGw6eKX2GpELG4oEqNU7QtZyRJP4fD8K79",
  "key8": "3CFs2GjT1RVBgXg4L8vxMcrKWGV6a5xQ9KbE9Vd9avYSrXLBkWbLUtYvREJAdnSWtQ18u8vUoExyzeZd5ZsvaFLJ",
  "key9": "5GLk9vxFWkEmjK3NTqBhwVRgMBYUSjhwW3Zhxf91N2NPM7fWX9wX9t9wWVBF6iCXpLBqtNdsDPZ44tyucq9AdZSg",
  "key10": "4C8dpNGow83EjUTHzrDHpwZE4AnMgLa5bFzTJZZJecfEGdahn9moguwVB773LHdFi8UyP5tU1veTqw8Gv1u31buL",
  "key11": "2qZbsBRQPUcqDCvL5GpNwqz3Hu9tQRHjMax7qYkmyJ2tjbBueM38T7wutFsemaUNQjEugZ4LsYXSgurE4KxSSzZC",
  "key12": "26iHyZ9jUC5JwPc7U5i3t1RU6kiBtBeewXmR9NTz5i1iwtt8cS37H5szvSrySdFvycka3xJKwGctcgvS1p2jd7ca",
  "key13": "56iLfGe2rpF6fvadBbZLjnz8hcP3X9LpyBmB41zR1xathUThcrZtUy6emwtiP9i6faDQHtUxWVKkLz7Kbf5L2GN",
  "key14": "4rKJM2RhyprYBc5Gx7oXJ6dNQvcB3JChnQ5TUXGZqusSc64SSFx7P5wbW8fe899JBPZyDztVE1Hjee14HGNUtqgs",
  "key15": "3RwpecjWwM4wXKMhsgLHcqhuNPxQf8Qu1WmwdT26aa9femDayBxokA9BG5TqmtGkZX29qYrc1cRT5vD9ZJHuym5m",
  "key16": "5La14BbURbrEhck3FtjvsXeZTrqzu2Tg3eBGc9yc6AsChN8WbWRyEDqGXSJN8YiystwB2ML5fSn6bajqtB6jPDWa",
  "key17": "4X8E6XRZbrTPaNoXEtGnPAJv53miVj6oycCQjt5Kxh2Xo1iGxyxue1jYiWqVtr4BKedSPXLnRpErbRTfpcoGoDLT",
  "key18": "DYgYTkEXAb4q4WLoVakMLsGvh8ADZKF49hvUXTpYC6H597fhp4Jb9r2KAgn2QkCqbpkarptji9xpzwFy6Mzz1yS",
  "key19": "2n5qKpnEkRcqZ1AuQGZoocrUD6qspF4ztj4ae8sYMAxq81PVXUFxo764ZBWFRs9XpgXFkhL2rupgNhmH1cotshpA",
  "key20": "2sWqwjnVM5xCPWKDju4A7ZTQrNSzaUMvwhZj48aSNkbF8sy5uTJDkvPy2zVUp5NpaxrLSNfyLhRVAyKsev9Ga1uc",
  "key21": "5Hd9TEcfyqZmoVpPMn316YkybyXGbJCtgevDzcFwxQdkQUXtR3ePzHL1GF8Tpcii1mzwCVNqX8R9B1RGr3ZubUTp",
  "key22": "2Wic6Xw3TJw8ua6krtfnirSve8RY66ZTJ5e8M4F3Skd87XMnpd9MJC2WcnnHAs5Qb4gqXbtwpms2iTMz7LaN8JoV",
  "key23": "9pkzoGnSEKF2kgCJokC82dLUedAtEXYemSigU7H4Ex3W7SUgDEwExNEFMfkZsRmQcuL4G5YqLoZK4DjEokW45F3",
  "key24": "MhxBnjvio3dh1kAuMGyzDUTD8HyNgntRwbqT3Hq7ELEko6S5TEQDebPsTit2kFE1zrELt3PeDQPwLYbj1bWjBr4",
  "key25": "2YFcKmBF9MN7NJHCizUqXbdF6TuymMZuo3Hf8dGUR4hGbBUddecNvj5jGeDaSjVLZHHbj1NKe1z9SL5sj7XhBohx",
  "key26": "2yCNooBZMoA2EKtY5avKFSoGZpHDuyDguet45nr1UJfWmS6eoZiXrApeo9CP5vbtqduGq19vx8BPyQWpcTtpJVf1"
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
