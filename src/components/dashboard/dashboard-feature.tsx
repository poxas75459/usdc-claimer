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
    "3d4fWL8QJ8rviHAhCtCTsP1AtxH6C429SU9zzG1jnvCG2vPcXgcn3FGLPPs4vSxrzXDfbmYtCZy3FWU7KRpXUQ9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GS9qJc9thFLM6EtbBZUHdborvexYXWG3WnCGZoRMfrBFtKTeGU1fDQXA5oQpZLoDDB1Pnb7gF5wTV6vNKpaeweS",
  "key1": "2gut2Duz9SFm1aW7d87wMuybbCSe8JSBcHZTfpM5TyRudXUkzS2PVvFu6TsyixJFGN5CJhgcfNRo7ZtuNQA74pF7",
  "key2": "5mAzYupEFm9sWtNXCM1KrDjUmGvNNjC9Rcu5UJgNdaTUhyDmYviF4tX9j5vP2FRAdFb2RMW2UzxSfWiT4LEY4bP3",
  "key3": "5L8pc9HMMMnQfbtGAVHfV4SoeFAtTGchK5xYoyBarDriv9xhhVhDPrXJx8nTPgUzeFXt9HRtaS46AD3mSfSGqJ7e",
  "key4": "3eY8nYyjd5jFp6QyPWAY7RfnHrnAsSjpeRvEdnnUWynosnbu1QMrGcp8zoACPmdv2bRku2bR5rKgLtD3qKFXnekH",
  "key5": "2Kq5PGcGqD5VRrDdWsnMruAMMqzk2scmEqQuBFQVdAJtJwNzDpJQsbTXsqPYyZR3Nu8ATsp5JB1xsnmx2YGrybTY",
  "key6": "3mjJB4e3cMc7vZqHrL1XvNrxKJVAnLfkvB2Api7jrkdCf7NemFnRxiULU4u3rHjpoNonURYN8swVHdHVXCDrVd1L",
  "key7": "2e7UoJ5nr85fabQwaDv9WTa53CCYnN25zLgfsX1mV8fu8P7f4HddEUtWZYBqPkjuMNNztgccMX4qKHrP5uyyxKTn",
  "key8": "3CKWvAHSKERGb7HQ9kgE3yJBcxz1KR4KBcgpsxtbJgG61bj24RhYrGD56Cc7uTDJLBgehzwAdovB4W5A13irgtyp",
  "key9": "5YChNdeBuyrMUDnANSVMN11oCmCgvn71NWPfHYdKbmq9kB1Pz2e9hNrd2VS6dHLTny7N5u2iNoq7YYQ5LDyaJdg4",
  "key10": "4Lptqfbpz6CQmsTspUUqFHM8y4UWVbZKrTH415n1j496KgkKJ6hChSdqKripijdHJdXBKpswMSvS3sipcS51USFV",
  "key11": "2SYbqE82tv3MW2EDok53Zn7W2XCu4bBWoTULZB4DLwmW1MZ9w9PzumNUBQmTiKD4sSjG3u3vkwBQT3w5coqcGoPZ",
  "key12": "3CDf4n7DFUyXK74oZBsGUcmX3wiDEtkjdDbwjoV7UJE7xXEbQuc3zHYPj36EB6ctZ6ug9AzZpUXNZfpsVnPGRU1h",
  "key13": "5kQKiTgzAAR5qVBnfHoki82qyuwVPeci9F5crawx2a14jGrrhdNTES8qPuZd9QGyHo3XVHxew1isiV1UjHceY3QV",
  "key14": "1NQLHik1ULbbJiG8dBaijvpiFuu67eW8NxDG62wB672tDX1zKqgsNp44PzEHKzDCfH7r2dE5Uk97rSkfh2ZZUhK",
  "key15": "5Ebxzs9x571MQzHXTtuXz8zzz3forcgEnKZdSPsiGNCNaSmHbdYDzpV5ZRb4CCgZjct32q88ZjvroYZXeyKerGP2",
  "key16": "3oB8gExrTyvzTi8RvtdR25WyrUs98xyRMdd6UmNebBsLcXEAtosDt8tCSxjrTsdeymoMUNY4yTuP8Xgct4YFdpW1",
  "key17": "4GudjwT1qVtrsXo3mYinTN3RK3ba3bSyjfhPRXx5wDse66JhDUSbVa1GQHw5xcqbercigAuBNQe18rGR1E6YXzxk",
  "key18": "HCzRY7psFH6CfnB6JXwTk3He6s99cmJh8CTVNb5XM3awpBMrDGzLcTH9sCBmUjrgHH1StUfMvt3TFCq8BZXbPAD",
  "key19": "8GV6fcThrmwr4EsezKZt9U65ssBuTRozjHP8L3yJYgeK3KZicSMXMRMvm497N72aHFFHTx23YqJZyHj5rxx2EUr",
  "key20": "Y8vSYP8Dr3bJJymys39rYXSvvvNfD75HkFfinzLgEQjr63U2ep6TsAkCcWntZeWg8bdfexofaNg89bpnCN3edsq",
  "key21": "s3kTcspWnGv1gMGJLhzD8A1PxK45UmqxSCq1zqZmgkCAqoWxtS4VFnKtvy2y67jLyBGaMJ1Nmtm81thnRjx9TRu",
  "key22": "4wVAEHy3ej5hQNC7bkMDBcAR9rzy14Wr2n5d7zeNWva7W9BNbmXP75fKEdbuJ99w1QCngJQKkCJA5QQCvS82NR5m",
  "key23": "2j3oRBWQrWRMFkSEhRTAVZDTNwPTRKePV8Fr6suFMZegJ2VcESze5r2MbWahHayBptVFKTbGM3aRLDPjxroPpJ8t",
  "key24": "fcenjNKYgS2EsiAXNMAkMTEiFYY4WAjphDiFLUta6ahsdT3TUvcYMWqN36VrzQLPhiuNEugtQnMKKTHdFH9F4Kd",
  "key25": "SaKa5TDR55qiDoqBKTeYPr9DZJ1KLUyzicB41kAh6WX91Ex3a8DD686G9SQd3r2w5zEuK5zHkCykvMm8yM9nSwv",
  "key26": "JjX78AfKGmBJQ8HBQhkhA8uZxvJNdaBEny4mGSNokUaVyLwdYt3TCk9oczmM5tQ2MdWti4N5nKUZZuT3YE7faGa"
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
