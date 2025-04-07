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
    "1F2AhjHWpopcKCSumKBZ6hJTEACdHW2gkTGBw5oxshtYQ38tbARyVcwp9bqqmmGKE4T1JAuvoQ4afUFHUjPMw2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyAntDZF5kyChPyp2ZAsfgsFAvMhK2v3KiAe5nczmwweJ65RmMJuFw42m4QPy4Piytmirm4RuWsn5x8dHCnFn94",
  "key1": "33hmCnyUUT8Axi7oiBXhCLzY3V8L14kTZma2C5Zue6tJg2636uNGEK1TSEhhLyZrMQV1FqQqDLiUbU94xua7gvd9",
  "key2": "43Qjdh3Hyu6T5tBv8J37CF6ZcDzp4RDYrwjPXD8QSjc9PW8TcDTKASijC6rSWX2W1JZiUSca8QCvHewKoCt4F4Wo",
  "key3": "5L34wURhW41hS3rTq5m4GmUC1ByNGyMgi3kiq7VdGBSGQZfWouLwNuLVoUnMBAYRZXmQScvudAa8xbNHWr9vQkga",
  "key4": "2fZTZBFWUgA86LvGX5N2HSoeu6zPj9eD5yxUscBQaMMRkQnCTkHszpYDVRFiABztvfRNJu1tfXRbN79YgqxivKpK",
  "key5": "3jv955LnTtZHUfNxJskztQrvdpC8yGmWog3hDMUPZ1tFLmTqGBJju9UGVixBApHRR46qbYzc8RkjQLyRGjVDoBmY",
  "key6": "4jWeVCabiUT1GiANRJRiT4peBwoFZtZmpfBYJYrGC92v9He1DnyVao1y6YVXH194J3KkATYWG8RKtwm8czBbAwtP",
  "key7": "2Cb2Di6uwTbBKKubky4556c2xajXAkz1CXy7ZJ4enke3zRQVzuyvsSgd9khKvXneBQZPQCHswMG1a82CgzBM4sPA",
  "key8": "5bon5QHmrD3oaPogFYyHLGRewoT3nzYaBm9g4YdgrmPgZKN8EEAp2WWT3qcPXPLVD5vszFQZQPnRc7a4dupe52a4",
  "key9": "3dsG1wQK9S7c8a3jPd92ckLBDyZteZmZB1pnAW8LM1UaGjL22EMK2dtYCuEkCdQ7KLvmYim5bfSfq5hWAk7AuXmE",
  "key10": "Wjn1h6wUWHu9TMUAjNzFJ4QtWtGQicUJ9ubwMZguNDb91RJ42cUgMMf3koWdTMFEJdLqFxwSy9XKvH78uUbR7jQ",
  "key11": "x6ouWrCsar1Mt5Hohq1pSW23s3zAytc7hmHkbBnMXbrdFRvGV2JajCU2W1fFhbs7jG8LcPKFsgRkjrHKZMx6E8t",
  "key12": "538etigJCvdqUX9mZP7TJvU1cvA3frMot38yDoSPtFVgVxpePd1rH5xXGmiddp1Rnb34HQw36vNRTcv1UbJQ4B5n",
  "key13": "2PKoDReGpXjzRwXuLsEx6yzZsyoUbs9S4zAsiz3gQEU2V4JgkhQhht5ZKrwi2wHnuLaw8Ba7PFE1hho364Xy7ses",
  "key14": "4Erty9vdv6TdfssgGFSzKpyDsQaMYukHy2EP2wPwB26mqv3vvxC5VsaHhdz6CzD82oTeS12DpHS8o98SLKGnQHUV",
  "key15": "5kByB4goRqg5iTcoCubQCwvQdkDkt9r36XxpPobWKw1mcLP564KBkqp5DVAVDBek4dKM3qDEEX2PoNxKTTQfMe2a",
  "key16": "CeH5kyH36SHrQH1Q29U8VHH6AoZsW6uLWNWZSw966ukRELKnFJ5QpWafG43GbRuD4KvwF2pCJuMnatzqQxLAcUX",
  "key17": "5FkGq29VHqv7bivkwrPQDK8xf2YjWh3R2Gjj38NotyHY6LPagyAFSxZxD2JtGnPyaDkkFnQqwvmSFb6najgpY4jh",
  "key18": "USU8T6BNCXu476MbrpB5H6MyQ5SgyLfaJLN2T2VqoG4pftMnZXvYSahaAT1HjTMPtDA128FfL87dvjXaPjZRwH3",
  "key19": "XbU1toySZDTQNf242RBiJVZ8eBKrxWXdRbpMo6VFEb6W4sDMLP8nRRU9ZH8XGLpYQvikwuit6zQ7vtN7cG9rPWD",
  "key20": "31swdoVszwmF7RKJfnZhmUXCqXGpr22HxhECmKvAAvtgUVHtXFhqkrdLXjMFpkpZUm1G1cP463wSVz9kkNZH1nWz",
  "key21": "2EptLRpMxnXwhTSYGEZiT24Xa1szY3DaiPgZd3JGnAxjEDN3S9zZoNMnsJfmbZkw4dg5rEFYFRWtS9som66yGD8v",
  "key22": "67384Fr4QCTPvdy4XEAAWoAe45sJVXFC2KSK7S7SBwXK5WQ9RK1Sej2xukX8PbapmNPYhjMmo4GKkm2d5aZhTC2f",
  "key23": "45mdyKmjpAEBPmrviCzxT9LoqrroRwX1p51MBZ56WV899anLWdu2iNsS3BgvZUYvWLmhg6Dw268sy16LeZHT5E9m",
  "key24": "F6E1qEPpRvcxsJDTH29QX5SAbT46J9uinWUowGfAMngduajSTk6Rg8RiFYSTehcGzt6inb2Rq8wfzDivsYRC632",
  "key25": "4H46KegHuw9YCiw9nJVpcUod689YtZVGEDFGLkpLjHXyTmcc6dEF1edfFVK4cWk7ysuFCCfcdQMBYBSj179zKSVR",
  "key26": "nG3TdmzRVeJfwtidRnvYEhage5YxWm8FK7WFTwpEc69SuSze93BJ5ofFvye1URdWgRqa3WgXMsyd5JLm9tdxERY"
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
