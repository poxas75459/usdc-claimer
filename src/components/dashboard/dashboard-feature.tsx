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
    "3CnJtNenYG2L3EQ24yXF9WwhjUbxjZmcNY4JRUjhW3tCpafUyZxVR2tm7FAMoSqLKuw4G3YR9QsNVQJTXqijjUqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8D943uRvr3hdhMdomJX5Rhcif89ponsc2k3bZXZRXKzVP6eGAMZhJNS4tdEB245fns3aUjWii15P3vjKLhjEUc",
  "key1": "2WvkFqJmUxT9ZpbT1ATyGzEijdSGnXVZMEc8xq1jHrDZJK2TDfjscJpdjzmMMMRhjaNbytnEhaA5M1p5N4YCLCy6",
  "key2": "3XiCC5sNGJ4hH8p7MLM7UgsCbbEiPhP3QEYEU4h6sp3RiH8ouypHUBub7oJAXgVzrU7c4d54U84L7bEmaWAwJfWP",
  "key3": "2LhrQSx6VXpkayaLsQnEYwQXjoBBYcZbkbH7Sm3ucVDF6avPWkpkQA3xBtFmcRTW9LWKbrSTejC4VZsSS1QGZLAS",
  "key4": "5gVz6qtW1zPgJYgoyKpwuJEWFJGfJyHDt6Y159tuBMK34vKc2gN1gtHHt97xx46xwMQA6EAynEw4qUkm5ZyKcpU7",
  "key5": "411SDmNDGqs7UPyYNKwkLwkJYYgQLVWxmcws1qGb6QE21oKd34aEHZWipnnC6M9EFYsbLBvQmQE2N6REwRKbLUaS",
  "key6": "32aCJ5M4iX6XapHenB6C8VNQ6maetQefxAzVLKY5ETfVKsRYkLfPRyyS6o6tyv3gaa68MARaFJTVyzKMGAJJD8dx",
  "key7": "58qAnr1arFNzwcevZQEQrKVUdKJnNEjXip5GW5SgMgTXzdtHKB2ouvtD79HgwWoxJzz15G4bDk6rQx5CgFqnZpYh",
  "key8": "4cgCw8yyqHHbxGTfjXsV1saZN1uY3hAJPH9iGf5nXvv73BuXEaT85bhvKwCSDxkqs3JhFrhC3dto9akqwUsvDZVg",
  "key9": "fAZ1Vcvpp5kFjqW2m8Rjrd4xAS2LuLJ46WSSiPXVWQDrKLmPtZK1jpGaqaYj9oyYEKYUfiVnNcbSPqjAfP4pT4i",
  "key10": "3qrqjcmhEBfgLaYRR8TPmHFxufGzxVqEZrPEJBqtYS2BV1qgkcqMJuKddAvWjCWk2TMiCPPxL9n7ZfSNnsNbqinG",
  "key11": "5hBx4pKgJZyyFotS4BoWiwBVvKq4KUGLHaLsGSj8jSMHdqsA1gJCzb1geQDjjpdMGN633Qmtaj5kaXwVFWUZUxEe",
  "key12": "2ErkwLmeasq7VoJZoUEZu9YdtXnqc9NEKtQewhqeuvWdqUiHBHMV7RVVX92VeAEhXTVAZnyaFQAJUSaeumqHt6r3",
  "key13": "5dCn5FxjwSGYeqnuMN2hNFiWv1LcwFuraeWQ4NLyzM2ywq1MXNBu9yJyMRogRBUVxh6QqCt5kC62GhgX3U7mGGcT",
  "key14": "4JWWPM78szAV5Pzam6wsoFCUYaLz4nHjQKNArsGe3jQQo3Br99T3MhN6gT4DQ2sEDHFWnL62bU4o1ePBicBfAQhR",
  "key15": "3Jomov4YCXPWSn1uSad9A5za5G1nyw8K9NgGnSeCc6GpuUPKPkMvipp1v5vvQmfTCLycaRLaveuiGB7M3DdqZCoi",
  "key16": "27bdJH3XQZ5673quwQeCbhhE6ht79GCFbHdhV9DC4QkD9Z9pkzrvDVfZyYdhdcuyznrSWE8agRwX9x235isy8J8c",
  "key17": "5z6LymV48TwUCUopSE57AodJTQpnB5wMsMg9jmN3MUpTq3UMKGPg92G8EqHmQhEJnkTCXsAeyQLLDeLnC62m7mQz",
  "key18": "3thbY6HqbNA61wByrdG7oiCcm5TbMBuVvuu18bWCHxqvtpzzm8wTxT4vQTjcmXDqVSBo9AW7X3fJhS1qik3US1NF",
  "key19": "8WEVGJ3WrvyXXkDdF29Def3LGX3asG6b8q8Em61fWr1jDSHyUNwx7PkP12CQ1Gne8aqw1CvFFHDdX3N5i9qY8Nh",
  "key20": "eLK1H5UPuCeeGjmWrKBc2LX66CZ8mPDKcfEieeZZq1yPABKDBvsdPKw7WWnSoERAn7iFccc4sdtfiH5qJ5V2TgU",
  "key21": "5KbTnUY1SrheboMRCxo4434TMAXuyeKg9g4WkgynFvXwQNo3ZwZiAr9ypDayUicWbyyv3sDKW1hTwxotf9y2Jbux",
  "key22": "3BrqD9cyXumvgfi6jZcT1imGdraFd9fFnpSKF97v9MbpJuVJfM3hR42PsBqw2RCdV18mJfQAji8oqEcAaDjnUf8j",
  "key23": "saNHcGLpLZvSV2K8TzwtTLSgWX9UsFPGc58ycwvk9R2aBzDEaGVji2EteU3mZdxLQKHups16Jz9TmRxhXJb7Zex",
  "key24": "4Nac78Z4z591VrH8joXWb6cH3MFYmqZLtxv94Jp2gX49jFKhgn3e5qqb4r5jMXkdacDMYFtnhsXMckMadHuNsCDJ",
  "key25": "4dErFkLwnG3nQZgNbvfpD4rxgfssdWAZHJYPSSGuu7NLwEstZGvKi1Vvy5xNE4GBW7W6xSLx9vkHtUnmndeVtQpM",
  "key26": "2dXkQiFW9TVw4jSAj1dGWz3DRoWErB8oK9yHFoje1dUNhfzhHsDzysw3GpTi43vKJEErgQouua7dfZ8CVdHgMR5g",
  "key27": "4zMRFQDjmayviLgxoGo6KkvK38xN22MNXhgUdwg6LtcgvTXojfwBzhwoS4THS78yLTgoP9cPL79vML7ywCjDDRw",
  "key28": "3LPKKnb8BwNVgnZVsZPW74FwqiT56q33fBUaYQhyVYdLBAsNWJ44qiWt8SDVTk4jcCPq4cPm4fEByTamMuweY8PX",
  "key29": "3oAwrCcLsZcCjV4UHKXPFV91m8xpa6Bb6KUarVRfN4MNhpo9foye2EDzvpLhQit9oSihkgVM2G3LZoG4iDxZhtqv"
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
