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
    "GKfVgX7PntSA8DqyKZiQXJHgVMbgXpNUm8HTFVW2j9xA7z4CLTz81kr42LHbSYXSWxGiLDs3NHpeZHtEDujnFNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqaqkNk2vcF2pknn5zsjRiY5hLfUnj45kNFU82HFdzGRwDfsNH7eBdF5wXbbhJwrzU7G4CxsdzMNbNFhEzzZ4cT",
  "key1": "3XQ7t1z3p5mKhQnGfqJZ4R2shhb9aR4SViNLYqHGq5mc76UYhm6DBXXwwCE9z9gMeXXdpa5tgZQYQtZmB8fBnB6o",
  "key2": "2ZGPyj1DTiYScr6yYZTe34EnoimP72LrK3n5uco3tSgqxS4jNJoKygGmZGMGA2mTKH7yn8X5fhnetXuzbvvXd7VM",
  "key3": "3NYLTqmMr1eF98guX66vJCzm6EtdQCCvfHHrye794u4NMkm6Vp4PPRQM1DFJobyJ81YXCMSRwvQa4EdApN8pr3vR",
  "key4": "4EAeL3QscLpDcb1W1gcMu1jTHBrcxpP32ezuc2L5TGnr232TaMRoTVKYG2WFCPMgvc9J161nPVZXk1pjYJgdJvx7",
  "key5": "k5WGwPy2E726jTeB8784nbptEPT2NfNYrPfo8tHkrD5EYNxFk8nZJ224UWtJFCd16PTr4gTcHAF9QukkH7WgMGG",
  "key6": "3kceZJKENV6Hj7pG63iUaXUyz5kwAB4u1xeZcJoeY136DRGH4wgAqj5cmubh4wSzLAWxL5opGomc1kHXXXYcrqV3",
  "key7": "4uBgXTM7PDNi7A85KhLLTPmpooSjKuAjvw5cmzR2izZGFDE7b5wUxGJdMqov565p3P4ATBva62r5udzg18of44mu",
  "key8": "52Vf8mJMCY3nPT6vBXTqs91R8LxVkVLV8AwY2kb4bHgvjrg6SeK7nJB6bLronENNqyoVkGVqRRUr7XfWWjxFQwW7",
  "key9": "5gHneQoV8obqQ9nBrsxqqk8rJcsqu6TT5tgAGba2SBswsZ9fJBAqwpUMXJHKwL3Y546iWbd7MwC7YRQz12RsW3CD",
  "key10": "5w3q5aG1ufM9fNA5nJjR5XvgUP28jej3v2GF9AbRwfVoMdx28gofuFfxry1uDBqXe5czBefNRxB4ieZRFfgc8JK5",
  "key11": "92L5gmHGFynhiaGkFUgj82CWbU8BRRtRMxcBzGNj8KQqMUReLpBbgSEihXikTXtLTxphy7wfu9GY8AUR81eRE2a",
  "key12": "jZCYEbRfAXQ3CJt9BSnFpRMoLPkkhN1bnbnVt2vaL9RF4ahjGzmNXQamUf9cs78ujQ4hp9pvpEAzWEBo6WSvrGP",
  "key13": "5ABXHBKe73xbTHfeGUNxZixiKAqmEWitsTdKMLghi3gy9Ymbqxqr69WeBAAH6WXbg3okzZkvPRUtsvrMxS8QMPLj",
  "key14": "5acC3P4nppm7Kq17nbu7WSar8S7UkZxzeJf7jpyMgaf9UEEp9Xs2AvmMFxD95wXqsWb5XPYRcDoAbAYPvn3o7MRE",
  "key15": "4HpBHqSpZtkDWDxqBVzCYxQUV3MBUhHsmc1puiMiM1m1W1RXxamZmuZ6UJczCuiuijKHnaXucsD82zLVS1bGz7Nj",
  "key16": "i5cknc4VGRV4aL5Xp1MQ7feMoVmmc2sPPQmKsP1LwkoRbA2wuQALBbQbppseC2Df3mEuTwiweVtaVaXW2NmRCNM",
  "key17": "5tx1MH1vRALsTub64oTehX4NRKswmSFHCVotRybNXq4ssYesync6aaxiXCdCQ1xbxnAcENMe1YVZaWvqi2KV68yQ",
  "key18": "3mb8Gyp6n7Ns4hZmgZ7LeN4i4GkdVfrkRWEe7rmW1qbERpVSDmRmHqkRjEypArfsoTeMQhStptdvBCghW3i9VxGJ",
  "key19": "2ZicT9VVaTdnf1XiitmQYUQQ2RKBNY4MJohB4EcDawdutFe1YHGqQAXuG6b7n5B4vzToXca36gT488H7hL5XyKNa",
  "key20": "5PsU7ZcbdzQC6yHAKiZuqBvjuSX5GWTKNhuWvLeou3DyTkX6WhGmMQdmoh9GeP9g52LxNdweADCehXTBcF1FS6Rc",
  "key21": "4a9Y9BshSkzFDws6azuxJyBW2mrNEoz66ZUgUu6mrfq16w9wrdvAEZnn1zVCAUVpDpLxm5e4QXrG5b5An3fkATJD",
  "key22": "36mo4PBeJVZCbzZW7JV97tnYDTEvGNUFW8imNVfm3GCfDgzJ1T1no7NRL7Bc62fNsQVWakL1Dt4PjWUW7NxZvTkK",
  "key23": "4bo5qvHXcYgmHy7rhuEXG6UM9SFppdmPRjy1B2aTrqvX5BNSKkNXFB9ofgEALWtLn6Fgo2ays9aZTrkEfuYW6DTm",
  "key24": "5zkdsXF1JWpzq1Gpm17Rp9jMDbPS4SjBoPunYifnnxvH7phQPSbFazABXdnahkHjFrR5bALVdhPA9SPfvhjS2Fwr"
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
