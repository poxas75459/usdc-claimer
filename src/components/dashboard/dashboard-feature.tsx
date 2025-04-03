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
    "5ybAv4ZKLabUKGzQCJNhL5jkpNeqB8DhPVZv4MpNooiFRLgWwBBZoTqprtVZRR2MRCgPb687xuQ76WK4fWP4NXKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XEduSTymwJRL8c5P91Es5Bdem63REbT1Ev7N92pSb7z4gK6xWvzWGVpMorK7vQcpYhit49wMijN6pN6kELdHZw",
  "key1": "3TZKrHoMnAg93yZVqTQu9EpqhBmwZ4fTLJHnrYvRfusTcBe4f62wx4hCMu5muS3Y5yZpMevZQREesBJE3nCYHQs9",
  "key2": "2iEKHcKEXDpTsL6M3SDxqYTsrSz8CwCatdtjqS7WKJxAVWbHfQEKgU7nmt7ByWTMuvpD49U3b2JXQoiPG1qp71nq",
  "key3": "Xk9EFrQG1sDHbiRHXL6VYZxgMz3WoFymN5VM81zxk2NcBUC9sTpdCqrkFXEMpAM2ebh3ogSTmCFmEpiadEcan6w",
  "key4": "4K1EF2e8wT8wRTtHfSeo4hQX1ZhSvEGUNRev1qfaMpFnX7Znew82cAgfKwu7e91ADL9py1YQNexzdonLNMDuYRzb",
  "key5": "65j5KmPvBxh1c431xstSuz8D92qGvSaKW5YkD2wEUwJskszGNVHCKtk8LwBJsg2uJ6U1mmexso3zVn2iBWymeWAg",
  "key6": "V9DrdGz2nTtxHfFakSMww8dkkh4tk2KxyDFZmzS4atfspzvUYNGofDancz9WZAoxxkTFadzB4YQXMdMwZYNJqYp",
  "key7": "2LBNwBDxRQ1PaJuFeiCvu9BAJoeEi4RXcY4zzSznpVb74t86z8jixPFquqPsxFXaSYSTXxddXMqSV9GabgXz6KNC",
  "key8": "2XKMiHnzWAJ1DcY2vY7JNEgesRbbwbuDF3HqGp1xg9hYE5V2XeSqTpoWcHFUeZwqwH7YS5uULgFGfdDXJAMo3yf8",
  "key9": "49UieFhzN5ZRgM2zfQYKmEuYKE2rZf3UhsnieqLAy7Sf3QbQTyGWN6n1XPeDDdqhReyaRuQonxdom43demE2knr6",
  "key10": "4VmaZYQuJdybhiutC6euFYz1AfmkAGYBiAuGmoFNms1ArUUoVvmQ8bYQXi311MZuTdfWJXRsR3xybrVxrBuWogbU",
  "key11": "3AbFEKuCWpBEG5M4sBY4fE8Cqnb5sNyNfydSfCa4ty8K8eH8ukRU89nU2akoD4LPQkmGkGSutYG1dXutSGvDrqoc",
  "key12": "294qkk1TsLKspS32f28HpHnx68kd7p6hxELnLVNtUrvFh3PZEGFjVgRaiFogo2nEzh8zrn4LZD5xetDgvooa6gVr",
  "key13": "2kbUFT15Zneb8w1f75Axx8eVRTPP9Bd1w3S694fdRw9iDatjEoHq3xpAM2cNA9xUSuZFTMqHR1MxcdQup8oapNnL",
  "key14": "3j6DQc5M6gQS98nZ4ZWF6MBCmb6K6P9mA4zmxT2rzHiGrKin7NPSCpg7MQdEu4tYQbVPXWGApVSw3PfM2atnsjv3",
  "key15": "PMVtBbZtFF3NrYwiWosUX6L6un6nHp3RCjajssjSEsbLsvmteQcH3GEwUWLzsiEz5tUJV9woHK7mKTc24qv1Pux",
  "key16": "46WudKkStXzcGAUNDCe8dYX7ohjC9Aqgeg3Kn2KhP6EmRUrZcZvwYb3qteWSzfuxMY1T5gGUJM8PRB8uv1kFHJNn",
  "key17": "2zzmqzY1VpyhzKvPnCaBxw7TV1dfRD3oatvCkiiaJGKMoNn9KptG21eNqkPXD2zFmH8ntskrGazK5UrD3rFyi5Hn",
  "key18": "3tDvYyFfix5S5BM1eogGg3jEY913PvDrXoAAu4ycPHP6KACTU4NX5XCXXYx683Wx2TQhH1tnNs1mNaNtbktCSQYQ",
  "key19": "adZ6cgAcNkBXhjvQczaPQhpy2YHMduw4pNteLaszrW9E2GAnCtjAxMmghjoxeTx9XE1B8dE5Gt8eTLEqAVFQuij",
  "key20": "3ter4C1tDxx8Ntw7j8KGGqfkuE7njmWoR56d2nY6EpekMQR5taTG7beRPqHBWtRzT4mByFY8aJqcQm1WMfX7Dhv6",
  "key21": "53NfYDM1o4UAhT3LnPXveve6AwQBqaBeK8oSh41gZAoMdLQH1ah2gwKsYAXkqm6fLLKKyrqeTU2XbCwQVdzHTGzb",
  "key22": "6672fDy7oQDoYpecbSj7eLVWL66fRLh9EpN5N2DAFw8PUEe7K6CCKKGywsyoJmFZRuE9weaTx1QALpqoygs9NPhg",
  "key23": "5E7nGCto7kajVfMGPFjfw49nBJAZr39gUWr2xNCrobqCgV52mRKNr124zsxrVQ8Yx2nQwyUZqi8DfYFoF8QHALsF",
  "key24": "wsUe9UAvDQ8XZcLdwhrrjmCwiDTy3WgDAYYCX4oxvoErLxCoUZxMiMbMHztYozWH7pkZwuZnWqH6oz9PbUJx44G"
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
