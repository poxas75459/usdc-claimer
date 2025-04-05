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
    "2ygvK72U5EkomuKpYFS7kHQbK9xkD8WUhrdjbSgsGfEi5tT4UkgyujTcKvsAr6BUeVT9fPLgx6JTvDuaFaxMpQ8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dX9YeL2t4bmc3FfKdLKa7w1WLwjfvrkieyv9rehfmFnXnN3GnDLqpdTLJxp2A2f5WWqw4kzbUbE9P4Q7khESjfk",
  "key1": "5N7cekQVSPWAP6KrwCWtRvoK3B76mCHgJkFidwYapMPL28x5puZgF8bsBpuvQRvUQRQfWP5YtN2bydiwoKvVzkLm",
  "key2": "5G6Xcj7hik7odJ31upnTDmEvVPEpb26rmB9HqvEjZy7DDfZh986kTLd4G4RVQHznHSNtvmXEJNNMnFmgbPqE3VV6",
  "key3": "5Hub49CB78gBPfv9iGZobWZhdYi8cm4jufCnwzrsJ7eazbvhfEkfcW7cVHR4JyTeJgLusVobQnXf5wiMXWcqZ64s",
  "key4": "RHAf8WC6cxGcMAS7FJtwSVsCvDDDgGN9HogYiGo2T5TsG7fFYhnr84AtwbhpuZsiPEL9UmNwGqWinBX76JLNckz",
  "key5": "2y1wNmMsL8EULkv345W7jtuV67az3BfAFFMN4i6meKt91ZfL4QaLLzK1MyeX7fLD6EfTUzPaRUBDKdDbnLwd1eaQ",
  "key6": "32gcwbmpiUpPNd2djRUPTyP8KWMvrhxYkinP6Vspar37dyK7jdkQx9MmGmwpsnopnx5ad5RLwy7A7amCuzxm7ois",
  "key7": "5EG9nbdqK1PfSLjtHHDcb6dgCPGZHTnL1iGoBUHg2zxarobS3eCYim2HRmdUjV67oBaHF6ECaXRiKskTdddQQ1Hr",
  "key8": "4488FrrCe8hVRQWmXH29GmGrqp3JrpURTESPRaGXayRUWMpuSydaaEAREyLwFYbN2goYyZq6F4figZ19R52XmYXG",
  "key9": "2tBPFhizFmrXC6DDSYZesfrfVmuRmWBGaKUaau5qmNBpQ7s1T5GyaDBwEWmmDPHnBoDiKsmpvtRGtpYwg9GGPGKJ",
  "key10": "vxXhkGoYesYHxq2xvgCpSmuiRHkLd7hfFNECbX19vmwUe4bgmuhCZ5iiMY4dYvXfnsNCcW94U9r7pB1VdQ91ua1",
  "key11": "22fSPypGySX4ZpUabKtWbrgbnjTNHSaWqHNi6Ggfj7x1Xi8wgh1PdobYUnNYMd7P3g9jRTodCY6JBsdk5iNvaJZf",
  "key12": "2Su1eR2ifK5UapCha5s69HzCoCLAHD5PKRo73C3jsbM3JAFc7RMJsWExPhQmAAn9dAzuPpP5oLJApjxvAwBTU1HR",
  "key13": "5HLMo9WyNJU5RATNkLDoSXvnTGQxgr2TGuS6jB3xdX5d4Ugqoa5zkraQPRXgTnsWUh5UYj9iKQ4pHUkc7JW5C4ZW",
  "key14": "rcCozAvtZ37Y73jS8fMLDNcnhLxrW5AjLEZ5CB4R8Mysq7wnQnZX2tkLMNtqi84qiz6PNDCX2236RzdB8KZAFV9",
  "key15": "2XtbzZiqYbyAzcvAPh1LhujCR2iTMepbTCZ52Wu2WYHegFWgQnUfLxRusEehaT5qo7NArCaSkKPyXMN1q4vqJ4xE",
  "key16": "36MYF6S1MrJHkKTcWTHhT19U4UCyV39ZiiLk2YuiEw1yKNsR5mJyrPJfRy1DKTCpQnKmoxKrC4R9yLJEyfDAVFU6",
  "key17": "ihecyJ59C2df7mVfVrUHaqtvP33bhywf7CCiodHsx28TszqbRakbAAUf2YGfB7VATAZWM5Yzf1dfQMSejQ6ZWA5",
  "key18": "5MRf9fJ67brEjCFYfBonDoKgyrNmnmkX6yRFvt1iogEYZB4sLif7KgSPJ9rpYqyexFxy38KJMV36Sairywa1VKCM",
  "key19": "DHBHNWsfjpPphKGdYeGp4EiEU3TXWeq5XHNL5jRnbM5mRB2Wvb8FbZN3Dnd2bcAp6HdpPw2fWptkRuZpf2zRVao",
  "key20": "5D2iL5bLMMiSqexScEM7ARVKHW4zgZSM6XjmNRPBCR3dssvcYdB1spDSk7dEv5B2pjUfs1dWuuh8sK5LLPmNQiAL",
  "key21": "5An2evvPGF6Vph2ip2iH54eQkBStCxEURn8isYbnA7R3B8UXDZrJU4rAduviuKDJ2gbrfx6XUpGnC3yWoxFyVarS",
  "key22": "2fEuNEETFiYaGkQ9Lm85fXQvBu7hcdC1MNZqetcYRGoyvUtcTE6CBvF7vGcuBccCGPLH9H5tDLwvvNHxjXAqv4Qi",
  "key23": "2LvhJAovNXXMv4NxiVojhMowTBJtBWaBgqMcEjuZjo2b9EhQq36St7WngmY1VK3axZZBMMCFkVcCrSyXa3HQEbiY",
  "key24": "RBPmHYKwXrcFPocoeNJiq2ZGv8hPaAvTnvxkxJ7Soqrz66aCd9Ftazq1h3UBrSRsMxEivzTp1j5rUt2mnsyj1J9",
  "key25": "RXkGizR3FKSjCziHC9Bz6vX3g1XWqJgcvvBtZ7g5YJLZEbuMgPVp9cgHKFqxjdJGEMRjcWnCfdA9YKjFuvAu4TW",
  "key26": "5SQrKsct2WpmZgVmrLBZ2rnXrDwZkMC6SSpHSiNZgaP2g14uWMJEk77on6o7YJMTpNAGb3CJqtqst6z23RtYCvso",
  "key27": "saHpnMFT8t5n8RsLt7erhcsYTYzASuLtgU2iKrcJRgkBatqtWcq49WudtQzgbuZ6KGZ3nnwSazf2bTW7pPwVt7n",
  "key28": "AK2eZ73itv21DDRDBuhXdSHZziuWwutezRk11SwP4UqNbDPWaN7Aj3eLmnrYHZXbZptnbXaku7PBYMydSfKWtn4",
  "key29": "4WrjXNVVoBNTb3nBFHSMvG6NCtggGGeASQsjtdoVdZP5JDwo6nAuy6wY18X7bj6ujiJTgpeen3HqxcjsYJ8jaqSu",
  "key30": "4tvcyW1bPJJ1PnsR73Yi1f3BdMBDqdwGA57qJipyBH8dwvPwTwnPwJpqU2dEsDqKHKQuxfeZPpHbiPKG4o8tmVcJ",
  "key31": "F33rhgAdXEA6WLNyopATcQ9EekyMJaPAwM21hLErsQMUr9PLTtj4n3xUSYXiRCYNptH3fqAfBJmWQTnEfJW1tEA",
  "key32": "Km2rG6A11ow224Vi6qEfbdjsGsumAsr9999VPpSb7wjDdEwamBkqHMijzSjZnMUxs6zaMjwLnvGBgCdry2iMGoi",
  "key33": "3x24dBKDFioqv8WavNLcZKxMhdGjEkVNtCMLhXHfabS4bNHdwkDdFZmhF4nZACKSJgoduGCd666iSpuQMqAfTeju"
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
