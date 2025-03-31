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
    "3x8jBZekBTQvVvnjywndLHrJadreWXSnpXkN7bYYopuPJr41iJZp33oKDJN7pPj5s773x7uG3iiSZ7mVsT1zz2CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBzyskHXF26wq7GnsrvoWL2axU4BNrotfhjiWpkbaZ1tztwEcK5bD6aDHh7HtxSSsAbUcMZrUxUf3JiFMnfS8h",
  "key1": "4T7DN8vkqRP4urrc6xWhq4G46NWxnGMMUtvdmG9SwcXYZoPkCRcxrs5Px83nygpKKV464QpdzzhWac12YcRzHR6r",
  "key2": "52GrNDrSeGZnBroNpwbJuojsxkgPtzyEu46TJCbesJYJHPSe2EteubRcpko4wFQ6kUtpNvvTwHiCiUyG8RpVwhz1",
  "key3": "64667Q5FGv3pzYPcwFZNFBywe9f4NndQRVddh4v8Zyz5CBDTdQNJVtc8skqhJDtU7giBwGnBMeQgLCbVFndyeLUt",
  "key4": "4u8nPiCo1LY2QrFbrZ5iJqniyCCcqrQhSXuWENHVfEwfC5cQuoqKvkiDGEyWE3Ldzb9tZsNFcfGCQQ8kVcfAkoBG",
  "key5": "26F3WE9G8W1URGBedaqDnCBJuwYBJHKXRgB1usfRVeeTzkMg8UCPNq1TW5rmc24bAP42TahXNWhcgMzMit3eaTFZ",
  "key6": "45dEBekCanE7wUT3BSrDik6rKPkPiCxHEtFEFxAxwUttQLWM7tnguH8SzhV5Ck1ND94qkmca8acqhRL7AEtQR3AP",
  "key7": "57TU1fs111BgGp4qVHk5YFhj7Hh2q4A2M6m8o2atuMyALojHzbosAAaoAoicNH8ubDtPKFCXJ5AbLcSK6Q2gWK5H",
  "key8": "28ntoEGMuohtqQ8RzsV2zRjwxLGWq5GYytkff1GhvRzXra5mqN6RNUrVH2igiEkBhZoHY3DL7cGarLt5BKhqwXak",
  "key9": "32HCTNkXkQNwz3XvFKW3DxPwJzbNcTYxAeovY5aYuXW5GRWQFCXuvrK1KAiBQU4qNGdpgtvKk7RyRnptzBjKGzxa",
  "key10": "Tgji1j7cwM4gGw8tKetSA5CJA29tVCA7iqXZgnhLDvPJ9QZsBVi1KJpLsiozqWb2QYK8N4rCKiZ98sYpbwSUUx6",
  "key11": "2dpm2hNSWnuF5HuX3qe3epfLUUT1rJ5NTFhAXyZQTQEs1iM7aceq7CRpd3JZtgvRbiU9vUSBuP1MipVmCVqMMJdh",
  "key12": "mfRrkzk9F5m2LAV6Rryj4gzobWYZVCkRAtJyi3vQ5Wq7uthRhrhny55RWTmx6oMm7GY5Pp8jEp1BULB5RCGpPQ8",
  "key13": "29v5Zb1MyW3M1JXC3zmFgJwuyfJGb4Kiu6E5fri1no3WRpVwSdUZQtZRESAQfws1yZ9GL1GYhHgiSv6tsDei4ZW1",
  "key14": "24VJ4dCxK7HhMRLsELt6iA7Mj3xsF8B1NyP3u8ibQu7jA8jDqDMt5LiNzA4Wu4PCu3Uc7KhEvHcobajBNJyzBcW7",
  "key15": "2z2YddzHBrzqrW14SZuvfXSRUnKf33LguR25oc5c83PTX5T8kdAcdp2N8TeZWogdAudrj7mSnrry7bu9aq2pom1L",
  "key16": "4ZWkYBqdDGYRHWwdFAEXjt3kfJ5eAgTHA9B8qfYxSponY9bhPoRo2Bi8YJiTido1HVrA1FRx7twsiUhe5rAFnM37",
  "key17": "2S7Fw4powW2wUGRReagMkB6z9jCVj6rQqqDYGG9GmQ43nBJARP8pETMBFedMRyfaV5U5orsfivFL5uiG8oiiDM6D",
  "key18": "2etrLTtojDxwSuCHThQQaLVdscykEHRH23xdWLrC4pY3s3ox1TNBatt9Q4hPcKnPKnNZJTRptFXNJfReUAZYrQXd",
  "key19": "PHjtejD7Cz2G5joQHzhnWtayFoWLZgF1bBiQQ2mq7NePQBAauxHAoqM5xq8AhuMgrn7DfU8QWxC5GACEqPJvefX",
  "key20": "53r216fkW91Jh86XwcjDrQrVL8sY5xWVUtYqrbMLMtx9BnoyiawaGmrtKUHBif6hVKscAfN4bxUMyJsUkgU3sjVg",
  "key21": "2tv9yHsvTrV7Qz49riMc4vWRjCDe4bhsuMgWnAfbK6cqQiSbgAhoq8v7ZqVVNQLdYYC4xZQGFgdH283N3KcfsjDg",
  "key22": "3gHNMLmQLCN6yxXxTmNadiF9W8s5dQSqwqwvWbJmXdGRRo944sJXeFmEQgoANKnHwy5qpczYBsX1Rk396quZcNgE",
  "key23": "sdDD1CKUfHC6RyzpM1y8atNj8v7hhxyMo9vHMxoYXv1LmBV2m6sb9JrHrR22qjzL8FKaxsPv8BPFqVGsn9Eup9o",
  "key24": "52MgejgPMNXQh4CUn22mfU5FMVuA6kAnUxaZ1AsrNvV8P3FLAQSyf6jruPh9L7E4Re8YdXQLtvNnBHuhri1EZjh3",
  "key25": "4A772DsVz5tYaKZ1J6reKU7V4YPva6Ak79nc6H36xAKcViP3FfwSRp49MNN3FPzUtCFxwhRuuCzNz5KPbGWJPUGJ",
  "key26": "2K76wNmugBWwG29kuwHLJzzSqGpLDtDfK6MFEEurWnNxoNzqVuPHjp2gdC4rVSAfTDC4CJJbsh6utufXBX1DULwf",
  "key27": "3Nn74SjE87DZ2EAYZ7TMCvorHvay4366Pc4D2gT8CThdLQY3XmXxgENzsF5dqJPAHb75SY8dS6vCbuLDHquUvzMW",
  "key28": "5e2QBLTGgokViKDri5QPdkqk7qwfutZzUgXkvR1pmT7hS18zNAAocD6saAAG8ydXGQCkq24abVUCrJn6XdFo7uQV",
  "key29": "5w3cPnMoti6sNGX9wCZYKSzydX66xn92dHDDSg6nFebyysjBssXNmPVKa5XBjxnQ1Dj33v1uxMartytvxNonXbx1",
  "key30": "zm3c5F1RBGavgJQykZJjVFT7sUnuY2Hd8jSWBvyub21z2VPAavZyAcdqPw9s8pCDpw65EwmqkG4SsuhiiS6ntFU"
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
