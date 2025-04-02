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
    "2egPAPCSNTPUgh38MmVdYRp6bx2w2zPzWc5G5GEdknvBDf5PFvNaT44vHrSckscP4tfeY2vnDvhEe1J3xJz77TtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTRJ7TQ3FdrQhySDhUvZoD1yFW1WE7nxLxdYtRkULN6bHV8639cATpBLZJFAm3pZQjrxAxxFxFL1WaqG7EJUxVh",
  "key1": "2WAWbFocF2S188NYm6ucY3n36V77XAzzG5DycgkNgAjz4tcY74PEFHmxmA5qwf9nbYLCyfmuicZZYfKtkxjRn1Nx",
  "key2": "5nrdnFHcbRvnEGvbHbEPZg2jNpGxNw3w7QvaXcwryXzSweqVwbWz3rZ6NsCSp6R3a7B2kYgbmCCf9f53X2DABu4P",
  "key3": "2bEMWR7Hk9YJwjqkRyxcqp6tpBG38wU38T6yDEpzwe18ZVSCEc37sbkSGvYuEmRueTiVuXTfPnL54btAseyCLsAL",
  "key4": "pRfdkm72WzW5kdgNhVcMHQzRWz6XsY4hA7ve9NsGfgBw4ZKWdBR8sTCGf6AXXZz6uyQQ1Vu3wFXNo5ya3GQTXgJ",
  "key5": "4FabP3cLMSNW34TJdfsSGesRoRrqLoCG3f1Ec7ncZ9SDxRWqpEJ2sbBBeEe1NWaNDZUNVXcSpK6x34JK9dior8uH",
  "key6": "5HE6amsgSU2L116dpKhtkA2DvnJJ8n7FiGJTcrwySLFYmvpAfWmatiWMVTudCSxCjKRoGsZfnbjiFMKTcCypCU4s",
  "key7": "3WWkjtpGKXhGvPXJ1Bgm5pyzKHTkWDJaKEZyrnNSpWBUe5XsNAFgxAq3rjQq225Lu35Nbwo7dAzSztGnVjnBakyV",
  "key8": "51jcnt6CiVYh1EPxMDyM1fwjFTKquFD3AfzJThhad5hmH5Zu4kieWewRvo9oufuUoLzXZSuGJUnG6ikn3HRNrfpc",
  "key9": "w65fwnVNuCJSbTufXVGWNsZ4G3JrQu9RVbU1D21Sob7xcxBZAdy5ppBZVFWam5isLDdbFatNDTwcpuySWPPKm6n",
  "key10": "5Wxnv8khMPkunLyZiBeVdD7b8WrpsoPxRf3apEVDYWB8PJjrLJHnSAYorenmJCSkPCuabezKSrEyYDxBRQmqoQkB",
  "key11": "4kQ7g3TnpDFmih4e8HgziXHDGnvMwxRbfqLSkFz4NXDEifa7zTXkjGXLSQoUxSCRALwmja3u3hoRwBKNdWgcHyyj",
  "key12": "3UscEtt1qDBJAKUdKQmaS3B7rxWeggjjAGUs4pEnsE34Q8Pc3WBgx88c93fG9iW7B349P9MNsK3FGSFnPb5t2Mmx",
  "key13": "5wM1sjXoArGPQ5YLksxgnssZoXteW85D1kbGCoSv2jgnYkLeWYqo2ZWrTfuxXPmK1yz2eFCppqYW5wUssZnybHj1",
  "key14": "2PMVT2QMvK8uJBqPYajvExGEcwZEpLAN5gyR1ydU5Ho5ip5w1MpWrTsVtWKM6RLsruxMomDVjRvCz4wEucRm274c",
  "key15": "5cegwz7gnnsgehCMWjxSK7V1wSSVUCN2RouTTpsvw4dVnVgJ8S5pipP1aCk4mzN9WhGbgvkBdD6UQ7CnBXp1iXBg",
  "key16": "gHeszeVjmWtRERq6uczkFaibg5VNqgWH61uuQi2H97tYV33nCjXUELBx6oBxDBHREynvDPv1TXTWTbnDLhYTFWx",
  "key17": "5D7bdnFCEZk2Q3WBUiSWGBzYgqDXv8vZFBHmrTrshLQG49dmDqnRm4v8FAeLQUjtKRWe93mGEjQhSM6PyDpqcJB1",
  "key18": "o6gscNMLqw96h2AQCJx8nXXp27ESTXd7kNdoPY8iVJseKFCgzfoKmY5oCKWqoEUC3fQUQABYPMAWGTshsVTE5NG",
  "key19": "3tDmr4AQSaeX3T953frLBFtTcQnBiM7F72HhkdRNFGf6x2XVBn2uJaUX39V3t2VJxm8s7fKTm97hzfrXzRGHP4z9",
  "key20": "2JAjrfF7HdQzdbp3Bb1AKLt9oeNZyDABaVpk6sBAEwT2VtpxsxDtuteANFrybLJuVoMGzZToNFRu3A9BiVixxACg",
  "key21": "2poheb5NjQQtmoK5dEWu5eKd7So5ja6kz74ncsKeyBRuU1X25zFW1stEty23kPhEBRjCbmuEeuyYH7K61fZUQWPd",
  "key22": "5uru39VcjXbA2aY9ECjK9SQVUgUbjP97HQDtYWxj3U8acNXonCCHKa5mDVXGUPBiZ1XtepXRvxtmGXa7NQK71hLc",
  "key23": "33gVAsj3wCFfXpnfJf85mUbRoFELobqwnpTTMSS3u8ChZuzA22iwmSqoHnpNs2K8PDPrUtdsqNbXGrX2jD7e2tf",
  "key24": "52Us6213x5bL3UGwKbZQQ5GAPbHR4LSjuDZWUpPtScgcQ3p4e77sNvMyuBCDRMGHo5Air3JFCsEmBdMVabQ3szof",
  "key25": "2Zs44716HDVphRbEnX58NMkYW1PTxpsxpZzPKAusMpRDpQemxgB9RG7niDdPLrN58Gk87TSXBZp4cLYUfhG5f6oL",
  "key26": "nZNDQeisSXd9ohnTUVdLLgFQtHPGR3U77kMHCBtswh7bv4SzJgULYxcWL4LBm2NrkSvh1SxumBQXNCZc4zCJxxG",
  "key27": "5CCDLAaokCN6i8fbH3F9uUk53ezm7KT4vxSj4bqTN5AkwTJvUCDSLZQCJLDbd1Mcpmd1XUGjMaenLK1jRevNM8G9",
  "key28": "3Rhpc3CfpieohNxrgsX1iPE68j7Vj3JZqiS1VFTYQuoesenNN6895P8hXTJHF3fNopaQVr3XyxnRag8apetP2dpn"
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
