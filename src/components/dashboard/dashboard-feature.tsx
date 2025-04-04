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
    "2rHcgKkqRhSbSMJT6stwvMgBHWvsBb3ELoheh7VjvwN2Y44qK7tVB6BZqJSLxWy1CEcamffse2KHHHmZYJkArzEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwFC6YHMDVx8KN5ujCDvTqTBUtUTXdPyLzhX9ee897d4QuGVP4GZdDRUS4g8Uy53NPkdc2moc1Hf2cm9T5QCv5s",
  "key1": "4xaZFwcDhaStd6mwxTGnYX78VdssHoXEFrj2rKp7W5iuFn9jBagticAVgxZ4BKoFbHfyZptpoac7NAAtvKMfGf7J",
  "key2": "5YeHtVAVXCnEF782fMNVxFxJzgPouugA6hdMd8Ea8gUdoQ7eYSmAgiDCF5VCBDLhchx5EyeoqhuhKvnR5Etm7wip",
  "key3": "LucFYpQWgBX4j5FVjdpyULjc6uC4Hu2CYyJ49VQCiRjs39Wd7BPZf3hSR8Cmn3QCQN3kPtknYtSEmeNydY22Xmd",
  "key4": "7Mg28L4TPbN22F6QXjASbkucAQvK8tXYNonQSHkFoN15AgytdXP7EeC5TJChtjd4KZjXdtCJciUzC5KDTzq5MLf",
  "key5": "59RMic7cxUeHxnYvYFaDrxqmRSzoCJqnZgCGtcJZYbkeFypwdZ3BCiiWoc3rpGU7qa7iKNihsFMCorZagPFMqdjC",
  "key6": "4SdWFY3X6xay4KKiUGzt9Acc6CM1JDp77ZrXBTHWiEwhPb3yy3YkYTu6tNbdU2NzZbcf8sCm7v91EhG7L84AfyQo",
  "key7": "2w961SG4UhW5d8KNB48BM98ZybcEbu3jp347GoL8K77Nud43pGgeMKfJgYhuYbEryW3iZz3R3QwCf3NWkz39FPQC",
  "key8": "3upF6p44bRiZzuY4J4T6WsLv7QhfTrvSZ1o1MbjwrYixuvVLbgntpLHarmbCGqTo4ZP2T3BmYECRo78MoSEVefij",
  "key9": "kG4ye6AGQCvP7KrsGupZ6xApeckcR4q7tcCQaT2EU61iZLPYb1TLDdxYfie61yL1JN2iV7DWJrSMSmPXYYyApst",
  "key10": "2kreMa9dbBcBNPuo5NqADC6XKD8Q4mL9qC8zvoPBEeMKwQ3j1KK8WfoFxgUCkuUBD5PopKqfoETYZHGfBdiJznDu",
  "key11": "2B5ZRo32BEqKWN3pVe3g3xysraa1YCknt3tje8Mf6ts3f8dBGzdhtLrgprYMVMCeEp6LV67qZv9vzMgW1Ln7xHTo",
  "key12": "4SETttNhYVfkAHXPc1TVzkHK2BazBAg5uSbKE6rD3jWF1G8P5J56xzeh7SzkmhkmACR5SdUBMDRs4aMhtZ3HoKmG",
  "key13": "XzfyXdE4jRjrtEGVGmpeAuatjZ2SpcMXhtEJpZ8SRCG8hb2ZX1SmZym2gLXJNYAx1Ctw1F8scuxsvdo9MNhdDss",
  "key14": "2tV6Y8sMkhcm2rQezRy6mR1SQVqmsKAGsFrF1YFoKiFymXhnTUEpznmtsoUM7X7RLAZ7vL2mnYaWkaGdcsNAc46G",
  "key15": "4dsipiuW4tLW5pSaR8yxZUVfpqLHuvTGv2geEJXv6awb7myxatKF2QSmewjDsvxmBzU39CeohDFs1hpwdbg3oL56",
  "key16": "thy21QDpwoUxSnteCD3LME12XYdcKTAJCuAEUpcXPHp1Ewjhwi72U5eaYTFGe55ozzhbrhTf1r6MfqPA4Cp6Pbu",
  "key17": "3VszVqRA5K6A2fszBSe2DCuAw7BbgSdhrm3xq2emRPinMAHX14XHWQGjZqYLdDo8MkeEdkkwApjWt8WQQARdrdCn",
  "key18": "4uyaMkYJztc7gziW1eyc9yVdxno14ZEQ1HeYgbcfFucmEir5EMDDEhZwwbcG4U1ytohiskGFtkvanUe1FyujwGA9",
  "key19": "3fTm3nvzWzatWQRS1ht445gEN2SneKYXz4fbC13tC2n3j6pAH6rQDa5CoJ1qSEfKrcVsSmxfpURtzWoDPBazFtCn",
  "key20": "34CTpDzQaRvULqWtNxws6XkaH1kGRhQgxYb7Qw2hYpkJiszpVAgmS1T8H4N9YS9u5DRRMtuGSi6J6TsBSCRuooce",
  "key21": "4UhJFhWnLY2qNqgicLn9tKw7mPLvDtM2djM5ky8Rud8pAZi3B4UuG5gVgXAVw6YyDQWvdSmn6FntYC8JQGbsAUB5",
  "key22": "4fk1PX7bqLYYKQem4gcSFfpCX36ZHhx6xn3bqzPmESyepWRNeE4SvVcdDjB1NoysVmJivZXCogzgLVKhuPJq19rK",
  "key23": "2BVVw9jLZfAmzpQ97DC9GPSuZn8L7KxPbkSszDK7sEeDH9FeJoPUhyyDsau9FqvJ5QfHkBEUn9s4fjrAqroUJnzE",
  "key24": "51snxJAKFLCmhdZJummqpTL35jyAofkbyDR78Jy5LgcFfQbwsLB2nDkXKXgqnJtcNRY5NZ7JU2GamtdeeD4oj8T9",
  "key25": "5rtFeWwUPx69EVNZkmPicAH6A3cuYZmYoPWRgAk2kNenYSdwrhv8hmRCJLBWAd72LVqKmaY3WS2g7FSKWMaaapxR"
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
