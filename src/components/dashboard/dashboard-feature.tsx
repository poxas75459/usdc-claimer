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
    "5ZnSTKeusuCFvEpkfRW5pVC3xCBPd37naVC7x4DAfqqHoJvDsTmguHSUd7fbKiSMH9JAyd7MbFYXUVFFSRAa3twS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VSYtqg8TEiL1ysq5nnwkZG57yTjiGXkemqAWwE8jjsMHKHQhAAtbJZegk4cAJ7SM1nkgQuAFKe1TmiTJb9ez1q",
  "key1": "2PesoT54Q4yZ174nsoYdkGgTKwmXBq4jmLTT1X4nmDvnvkhzFmt8smBJTiS2Dj6u5Z8Y6LMGqU5cTMvTFHo9TNKM",
  "key2": "2WygwWSMULtt8h1CWG4g18ZBJeMaHnxLGb9uMRLs1eAvHddTZeJejpMRgGepLEi9pC2fnM9AZ2mBCE4EM36eA2g1",
  "key3": "4dg1joe9FTqLFtUzmcsrf7qujA8dnfwKSQKh4if282kV292U3cHoxTaEH1tYeaa3Xt4it8sa4vBtj8sUARsEsRDb",
  "key4": "3wPf9tEAMNfeN18iCCNEh4Gxp3hJvZmpE8e82JnEwsMuEhGbT6SCZfw51kEM8a9GvLY5BubNz8ra3B8LiUTgCTB7",
  "key5": "5eEidBrLy5DQpWqZsc9Wp6ik5FLSQC7wpB3kaZNptfXcmPkz59sqtPgsSaxr4KqbuYRqvVmSgJwd2GSJrqR9giUY",
  "key6": "sb8cX9Rz1dd9ezqCC1E9kMPWKTn1c9BKx8BSmrBD4UYrot56EUUC9nmpbw4j9xQertW21ZG3UAAJKb6z9pqBwbU",
  "key7": "33idmpMfQnGP6pjGFEjonVsNMxvd7t8VzFod566ffJme7QbLRcKjfXBGTumcjPCy7DYAfDVpsNCrEJXFww7XyiEx",
  "key8": "3nuQANhjANj9Ru1KiQ4cCfjGSzkYgtudcLPgB2hBCA2Fpmg9gACjyRugAMQevThpry57okUDmykJtAER7ZGXcA4W",
  "key9": "3EtU1in6oa2mST99XxKxATWzzzvxQKiXbspS1SF34H7ehSnFyMzoMni58cPZFVnfQZAYtuxyDPjaRZETk1698ATm",
  "key10": "5JbQASbPfQhxqHxDHCxKyhHHYzgmaPRYz99SBHqSKCBuywKzsbnKTUZHfJbMvbgQaYKqcvCL41Xuud8FfAvVqfRS",
  "key11": "4v49BRwH8C6S56FqJzythEZAcpsyGEBmHQdtk4w3TrnqPC8727ynX63aDna2qxqMQbeUPgVUeUvbmuM8FgG8r8hN",
  "key12": "3SmyXrGE3Sp6CNreksaCHedK51DWjbvfX3xMJHWdfmnyqkmG9EArSYWFCtr5HkU9dfRPdbwBj3EP7RBv655k8SCx",
  "key13": "2JqQRGPwj2Y6v9zegH78BEZiop8eaZhT1c93Hqoh1U3gRrpviKdFT8j8Ed4JQK7Dnjd6yr7bNAQEpov7Pd1LTTum",
  "key14": "5VFcZq1r6CEF4jT3FEUQ1qMSW4GHVu2VaG25kXM2dWhiLzZ82KNnWorQbMgwLiPpRMsoS2QziiaZRcfQBCi7z3J4",
  "key15": "frzWUuiGYjP55rGSxoHr1E9WoZja9KBqaRkmN1CneaXfsemRoSjUpzZxixR7Y7wYU8YcahuY85hs46CmHuDHN3u",
  "key16": "3nL6aXH5UWT7QanaAHYCAsDTfw1hiEnipxrrJu6Dv8Kv55KfuC77EjtXLFJ2q7eCynFoTKVPkn16SZodUfWLGorD",
  "key17": "2oEziU5WANnXLvYAHBaVgv1PDNWX9A9vET6ctJCWgnN6fsXFqf8ZeHs1wPvs4pE1mGm31AThxRJWSzeL7DYqQ7Q8",
  "key18": "4wMHaiqnLEuLLaAvMThwtabJYxbywPEx9shhPa6FvyFzQUYeCakw9ewBo4E1fM1BkxTG5gLvXxZVFyxUfiniuzkw",
  "key19": "2yR2L8UejHMS8FJAUMKEAuKFVx3WgUAeE2FdauMBkW1dozqGG7WUBiJZnU6jjixjvYaXUiJJM7roYKNeopx9dikz",
  "key20": "3zDxvXVQArrS3WxYno7m8fioFySd9hCp3WHGF6uCByB1w9GGb99sM8t4F2vi1RFCvz1avRgPkfbeuSNoPG5ukeZ4",
  "key21": "4htpukbxDVpyydwvCo2M1rkTqBSM2LLPQPdiCYERMTWDRU582j4u1eJudGg5G2hoJvpWMdkct14gQ7yRU11yTGot",
  "key22": "23PM2nWFgU2uzxYhp8uULpUgGsdAMvCLeHDCX9V8wN3rHWo67cW3UZDKAnEkwvCaxWRv1V8wY4xaFNcLs6WLG23d",
  "key23": "5Ck3YxPAVmutHD8b5U9syEwUjHWR16L8CzNN49oizMigk6h3KbccKsr5JxPSPZHVffxm99zE7x3equB3VYFK6mw5",
  "key24": "4VQ4CQnz9ogkPSkb9GQZo5oNs1gwLNkmeFbGC5BTNqQiV2a42KsanpWv6iiuwJXE5fhmyE7WvfadAczrGmrcFbFS",
  "key25": "3EZPuX4tDE3dEbuKqXxSPKpz5ZN4Rufseca6i5rrPpVwx1FuFJaPMJd55edWGrA42yq9GhtpVq14LVf7iYyNYyga",
  "key26": "48tg3nHUvP3qCuhBVZq5RUuU7yLri4LP3eHZiggN5cYXejDMhharFrJR6gFEE3z3ZXooSam8gME4kpASNFpP2oFd",
  "key27": "fckcYheF92Hht7a2GyaqJJGyFFf5Rz6XdE8qFkViehjNBASWjsAGCu6tBxZgL5x3Rr98w1hzZXqDi5VaybXA3AL"
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
