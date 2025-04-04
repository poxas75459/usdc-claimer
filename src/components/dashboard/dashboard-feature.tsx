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
    "yxrzFdWMWmky2TzeAiiRmXoF1ToeDXJwuPBWmEPW3PCz76DbonRbhy9yWEaQBEWDrpdC7GubmKF5B8vQbHwX7pC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VyeJ2GXPmtao6ZgRV8NSmQ3Mr2ET1eNY5QxTmgWKJ6MQJKwNhAz8TSF3G4vL6hK81vUwcidYnCYaiJWgB9gP2u",
  "key1": "4d3V7fnX4SE2tiXcp6PGTjJ6hJSDKrnzrgAbHgTeXAhpdtt4gf5sBV3hXsSMNGLEFqUySPmwgMBJAmQBz4WRHAY8",
  "key2": "3S1zc5KezqgnVYiaupyDj7g4VhUoZD1EYWpehPF7CeH8SKyVcRCsgfHdMZvREBMyeawJrNypVthPqHsBvrwpfS4x",
  "key3": "2UDhxibir7pmXebH9EtNbv5ZENg8zKQtGRQRbQtnvk9ApNrbzNFQCvsoi2r15mdY4qNVdtfD94EbCn452JHqE9T6",
  "key4": "2aN56nV3z6A7UBKxScqtgk33ykbdb9p6oQ6uD5jsxE4eTtaoBPqSTQGRYEKGb9Q7HRvaxrSTES5bDQebr8dZQbnv",
  "key5": "3KtNwmPULwggZv4xx6B3EGkmtfgpjNUgnUqF6hC8pNjR2Zi3Q2detiGVrRr47QUN3D7zc8v9d2wHAXhTST6T8MRG",
  "key6": "42p9pDTB1d8av6rgEKQ3pQSP1eciLNktdCMbwUZoM9wunGUrSpZ2LEzdkhdw1eLEFfsZgA6ibtRup3RrjdU8qwLE",
  "key7": "22PuDVqY48J99SVu15xAbJev1ohsmNNHyyqyxu5BCE5pJKAP9RoVekpiEjMHQ5pdEQv56LDRZuPxRewGdbe4UNN5",
  "key8": "2A8Xd3VCKXeqjiTzF4vG6F15aYpqtsHJv4ZyPG6e832Cqx2Ep3P1hKhYdy886TE7kFkwtPnorZBnaD3APohn7ucq",
  "key9": "647Mr3BEraknMMcfVVkKFRkEYAJvUHCwbxuigHop3bX1g3agYu5Dsb5dVs5pnnLtNTEqWwx3x3CXTizSiARS4kSy",
  "key10": "2CS4HcrQishh9xrDTj3PJk1NZjoLQGJfjc7EZ78dsPefNsQ6Ruq7Lk9iyCKha8HLC2khmrpmDfUGb495rgZh3gQd",
  "key11": "49CG2BxFRzvFTms3v1QA4D5E34zyHfFmvFtHNnGtx3u1fMeszqhi8vNz46pWKiJPJug3MzfqkmQiFeDQVzCV2sLD",
  "key12": "4EqLUNQa3im3yHZr5DZQVzcs7PacRd3mr2P17oWDC9QPefgMV5oiAzWo63TBdkTjVHP5VRpXjTpCpvmJ3QGQ2NtJ",
  "key13": "3sz5ws84nXvsEgswxgGkJ2oNdJp54HTGh9Q8jHBkFJwiGuqyjL4n9uCLky4Ya7NK2gXwj72h5yH5r3NExMXL3hVn",
  "key14": "2TP4wv7FMDxiB5qB9g63RwM3jU3EUZrbSgiJM93G3GmTXYzMYwTCsqmACN6DnB2XyBneTxVmV1tffVx1wk7DQqFG",
  "key15": "3mLyxHi4aEo9fP8kJMXM4nUtQLVRT7g8eJGzpybiM1NSn9m5G8ASJVo6vnAc3bU6vAfSKiEGZmbffVWC6RAUHwEx",
  "key16": "5B6UxDf8nDzyLrrT9qqmb9VzfudcJrQFxRCUrYaxCjnFQtMHGdjcS7HxQcHWxCaCMmswQBfdiFViHG2nojkAwDXc",
  "key17": "5nccbUmhFp1ERXuwzdqikHeb68cMp5SRpajUZvwx8H5Ugff6qdWj17QLst9fBwcsaVRParggBeoG9sYqFLhXk9K3",
  "key18": "3YD96iGco85P17QLnVSHD8BYGufivp7Z1C7LawvAwkbymrsuCVGRvSdKtsF5GEsBfZKBMDb5Ge9G2qJpKUFJKZwc",
  "key19": "3AkPd25dW38qhz16525KLUiREygHwBrmnoajFUsAbxpDMmvGDiqjcYCbZ4EtJkgdvRgzt59WDbHUcGePPFCY9tdB",
  "key20": "53oB2XoDCjjBqbPJGabi1j6Cxq2WJXPg25byTknR5BeobcaUBkmTeBUCx2zuAxA6maq6Z3LVUmjmjUCXiBNt4GC1",
  "key21": "63E1BMHTURw8SfDUGE4rirNGArFYD9u23CYA56PPseAYrttbp8VmJ3cHFn21e6gUWfiZFvNvFGx1LcfscPRoQ1tg",
  "key22": "8KPyg2rg3ttG6rf8ufJEwPkWCyFbBSboByHRf9tbWJbyutWQgJ852sDSQbqNDxTQo9sQQdHtHCpFiPbv7b2pYa2",
  "key23": "mNSXuDEdu83KvkbBBaCpAY9F6aWKin4sNRSpVQp2GWdoKioeFtkkbchpaHBJKJew6PH5LrjPcaQFjszGEPhGjKL",
  "key24": "2VvbZoPW7t87Eonxv2fAeK2ovRWiERqPtCMRvjAoaGAorSdf3Sw63z5XQFbhDyNW5BKfnWDsbNDdb25r1sjYyeKj",
  "key25": "XLeF8P42Nv8sxTCqmTuv1k3XYFv75xYMSUXCqKrtgzcqWSDJNeyQmpUYGJ2TMfWB9bw3fV2yU2eVzdi3qpwYcx9",
  "key26": "ffHLAiYVdbM7WYpsECG4kefj9muNLVDcTy3WXaLoDCxPHcKfVUP2kTwAwwqzodHoPmKrShz6s9otWRfzRiaC7c1",
  "key27": "4vwnBuH57XRxeKZQdgFBovbWrB6vzrhdxz5rwfkzARVYAYcpfU1Vjm39rd2YCJgodrb8YFjwFApfNwAm7Yp99PhD",
  "key28": "2pYqK91RJRLh3H1YYb6nkdpgBvhEa4RszSzhVczMkZ5xFetU799mAeLBQif1UnUt6y43oPuk6XGKkuGgnLXn8guz",
  "key29": "2HgJx46AKtgkke1e5HKod1vND5GerBGcVZk7Mijo3QDnXabacV8Eu1PwvWKLaJQJm1rc9JFzWnusCNwbZY7UeNm1",
  "key30": "2nbtYGtUke5xyAD65cD18CdswoUmPbNXXddCAazEnVaiCT2NHgsDP7Ne3yjCxCuh6xopHLRZXcBR3jbzEWffuXh9",
  "key31": "44Nrrq3uHnfY2V6smopbwPiGEhms1FctLaJ2m6PZHdzQwQWqGuw1b9AU32GUhccMMUn7jeo3nB3928X1JgGESuqd",
  "key32": "2TwAYS9LocaQ8SAMjFYbzwnP5VVMKrk82y4mb4TKTFJZ3mnvdj2rQERvadzEe57tYBnze7K6ZiMvHX3PPzsUhZ1L",
  "key33": "2RoVFraxLFScwQ3LkcwFep8iSpfYzyuRNZBVeEvadqFEXbWpXT7NGPFuYGkyK7NaB1ZWmgMZZkUeFV5JHRunQkj9",
  "key34": "C2foDYezrTJKpMTbePwTsXGbUoKi6kHoZV6hgTq7V3x3Qc8UBYUQ1xuS4sUqcyiFLdRCXsLcKT1VmEuRqtiUY9U",
  "key35": "4hyi5DvuDvNBYu2BbnMDbDUdbxTCYXPW3e2cPpSRsfCLLmL5P7nVuzdxWAMGK13jvYC9GKw9Ubyejt7yJVwvtWgW",
  "key36": "2aJnzFQqzPcsr1EAJiC7r3uZS1MKJLYG6JJou1xiJceTcWRMrpJntdJRpFzgUMDbrsoLcvDhi8ddipStRXS7f1SV",
  "key37": "2PZPhw18xrjBxv8XaU6VyzJj5n1s9DuUDZyazH2VooXfiRHjby2LJYqYJXd27mSebTXKRqdqB12mF9MxCa1FEUdQ",
  "key38": "CG9J3F5LL2f61CWcRR2b9ny3zfvdjdaa9S3Aj6prue4KHsqBeCRtWypZEmgAdgNQmx3dq8hzaqNSpYaop7cnP5R"
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
