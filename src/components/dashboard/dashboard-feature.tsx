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
    "3QnoPSdUGNFj9Jkxa98PQPVeZR5t67GxtwYdKTfXQPruMFeLcX3B5nRHHQD6KVsuRczbbSccg9ERBXwmX8RKvk8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HQ5nceTGiu31GqZ7krJhHwHkU6Dz98y4H3RhWdU38V4FFZQ1148gvi3Ta6HuxogawMivQG7YerCHV2rX5XA8Ba6",
  "key1": "ChRbcMceTrYMo7zW8EEpopdZsP6jajUq4NU9DDa8Z4WxyQXmjEvwA6j9g4a5Phoy4e7iYAXTowx7tbiyQZryrrj",
  "key2": "4uEimiAFRtW1DbLdAbfsKHbmjGLsivBPY3u2Hq7zX2sPxWP77FJU4THFJUXp8Hhk21VyE8yDLcEDs9eSgJMsPiQS",
  "key3": "jYbu8HBDEDhtm1NtYyUK9nizRQpv9eMMfSmc3aHFrHBCUXf1oJnxBEsBnMWVCyi8EJq5PiGD7pmSURZBvYjDjvF",
  "key4": "5kCyGakEyJqdHK5hADrHCdhWuXsHz3LCucmWcw9aW3F9bvDNpSRPT54egtHdtc6TjbjtJPUeuqHNDeU3BNucfuUy",
  "key5": "fpA7TEjN4FaVw5MC7LxhxDrGiNira76mujAQ8NGvxcME34NRL8oDeti36UmcEedkvMzD41ZZZmqELXfjheGEhpX",
  "key6": "ontCgjDRJr82CzpZhuJCda3SfvD687XUcgmnKbGTQ5gzdoxVMzpVF1zmCcWstzFsqQmAVxwXngqyUGev57QzMeu",
  "key7": "3eEqoK5r1PvLZExEQzMDfHPvDDMKosSa1kRPiGszAjssNZoCyv2pgih572EGAcaVMXdq9WtVmBojsrXEn94ppo5k",
  "key8": "3HyekM54mtX6XfRdtYpycVrCAHwhCB9tnezY752BD2Md8M84GhdCVd34tBAzBjaJC2Ca9RFjNKGCuiG4scxA8kZx",
  "key9": "Qj7Ywc3onPYViubxTQbbGyEo33ZkwNUBWzpgQDrGxzvqAjni1RivykAtNtaEiyPMPEBuSGsFiXceYAR49paAhUb",
  "key10": "4sZ9bs2isKZsA4eNfFAu2C1G5ozAAYvUBBhmhHnqaDSvCS8XHVNsaWK6c6A9ob4Aq97aD62w6NDiFVeXdYhqMM5d",
  "key11": "49BYEn7oYdKzDsERpVuFi7BC3ZVdPtnBPDPdMU71sE85mrZNyewuiNLwzXtpSoTkJt5N13w9xnTKT3k5NhBH1qPE",
  "key12": "5XMwvNvaMb2uGrfj17TsHmW2eCV9cJEi9uh1KQYe8LxybREmxTiiWZ1ZUShXqNrv5fnNbMGGBDPAmmw7nrQjs6pT",
  "key13": "BwUNgmneNr8tGnUF5BwARzXiN7DYGfk9hsA73FwRRN8ziUfkcCJd957pytHwMZ4qWK4oZgpKdPtLsJeJee4CprM",
  "key14": "35g8JUphgUw133xySyhh7NmZCpJCKuWQhcDPUgyQeoBZicRFK8jYVa3HmUkN8XADuA8mMZV6h6K8xpEfQTSmKtvc",
  "key15": "ChJVMnjaBMwWsE3kKU95AWqpqp2S9NwXdqZNBXTP63VB96fk9bGuZMxFChQNxZw6tX8fAZ2YryAoZsNwcsVnsDp",
  "key16": "gs9LbF34vEX8JsTw6J2kmNGHRBw64hkZ74zEMprzGsSqu3eGzQXWEQzyVUEfVSLUGUdNCpbd1XZ67PWwJSXebRf",
  "key17": "3orc7SYBajYzMwHjCgk6SkSWq15pdTHD8ZdbcYxZQgCibZi8aZ1PQ9rX8pbeT9WTNfqWZfgtHJv8rytoBSnP6BYP",
  "key18": "3bjWvuxGwif27q7UaUntGbPHTESeur6Du4JgpenMhmyjn2e5mpeFW88eRmdaEiRabo89QzvDXjpacWyb7hSncv51",
  "key19": "3FxF2rPSGLig6ECDZQsBK34wZjpLJoVVnpHAo5eCUACZzqhYbsd4J6k7A7uLBRWCzNYRYYnp1qNGLTWuD863GoRg",
  "key20": "65wJYgRGwDWNcaTE8HHVXYd2abJfedctB19JYKBNfHdZnqU1yXh75SJYTS429dD2zUu8vWf2k9GcDw8LL4qP2gBJ",
  "key21": "TJ8gjC1SGo41CULUBMjJuuYBMsSXbA2HUAZSGzJ5reXzydEVv1a6eRGPYq3s8NsTK6g81AKmVzktJmLEcLKEKgE",
  "key22": "4dHYd1wRieG9xueLEuFT2oXgFWhEYwrspq47Ntwnsfmt3dvpc6mQau4DDCQ2wnCx5Qy9LEB5WzDFzK191sZr1jaJ",
  "key23": "eVCpvamj8o182FSM8iD6q6NDnYvnCRygaMCY6MbEx2WAbKd1ekV3jRSece4VJsB3q1FxCyAMFVjEQQjkMwsqMdj",
  "key24": "4y88bSapXHe19a9PT16MdgertSHZZCfPBVu6CZSf637vPhfW8JSbo1JXJEqBZnRxte7ghSgy67Ryi1GKmQsj9YpL",
  "key25": "WzPaAoh95TLp7J739ETLGPTVjuw4HdG7e4TzCjUGLM8KiD2LjnGhCoYJSKftQuKVmESZ8jThYzFu3mavi1amyG6",
  "key26": "3882dNY24SsrQRqAnFZ7xPWSwsywiiJHwBn1bYhuNpRCcWaWttX6Z9t6gxHtUBDyKEErEYxXj6d8ckPryCzA49RY",
  "key27": "4sv1KnRrHpREVCA5jR7LEU8YPDfJ13e3JDwMLPMaMwfmg7iw7W24GBpJf6cagnVKVgLGCMVDSGvtqzswREVHfeSg",
  "key28": "3ND7dwXjApicrbxPesDgFQEW7SHomCTaiN3XACeR4J1TRmaqwGjZFr8U2DE7fGv4pxyAu4zTPWr9WoExoreZkxKo",
  "key29": "5Mq8MiiiEQuupLKDih3TKytEoVkeYZUnQyxqcc8o8gYqX6yUP1isPJtf8TYUFvU6czMR1ycQgwfBZ5BwZ6MxSgpj",
  "key30": "3Qic7tSrbnVRLmWSMJwEzThE3kBrsgk7hxiY1toG1PW4hny33zPP6z8x4yoUUPN2rqGP5JT7sJiKwGScHtJ9k5tU",
  "key31": "4uZc2dkaEStPxAq286VfGFjnD9BMqypnJ9fDtCuNpEW7sJ2LE5vo9uhwxZMxbgNspWm9otG7GEX2JBiREfxmkYrz",
  "key32": "4k11uPHzBNLVfJA7UCtbgE2nxzEfENo5gUpEh8t9kd7nXzFmdHHHuFhAfSreTxATVDA75bAGYTFG8Q86CuKgRDpV",
  "key33": "51FBDrfpFSqrGex5JsRQ6Jd8KwMx9FTpEpNnz3d2frvvnhcqjiJFdtZ1mAzThGritFCv1WLKq7nApVi8nkZTXQBo"
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
