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
    "4KkW8ZBHbjN4vdYbQQYcoZbGDM9KkQKty86pSL53EQGGQgmVZJyPWxkKqgzw3eQPVnqwMqaCKTBg4SFp5qqgnjbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHGTdFhRXYUk1CPVQgQXtt8v2NAuT4ehDGgmNjFa8Y6iuSU9dBDKM4kLEVZ7NSz9tXsUSMrCvs42nuYgoM6UHG4",
  "key1": "23RB7gFUyWGPnwHsgawd6ESthmeohuoy3nUXQCrqzwXu7oHPepPzMyEgWQGrr8FETz79muczHkSWzGaMSkSZN8EU",
  "key2": "2xqckDvoMVPLsUCaP2JNbcrRBivuyJpN6tWuoQBUu3dc9zSFRR5UYzZNGPg5LVeRG8eGrnyr6AKQLYnZwFwSqcFV",
  "key3": "N8kPi9n3wZB2rZYqcgRE62Gh1gUDPFVt3NA17wUEuPaoQdUHT3RNtxo4Dn2j31A7X691RDcctHVhtrkUCHBq73h",
  "key4": "4dvaiRot6QyNPf4NkyFEMPeyXjYa8hZmViWHKdtqEjjJt5XJ94pbSY3wMnPpRUo9k8QyjbVNFfXxNogmzWizFQtW",
  "key5": "3sarZJfB4W2UgseeFWyWvANTtoZAbHMD2BTCGxaykz4SK5drBBhuhQvS9BTX4SCTKbof3uzptiKU5ccTUWZzArV1",
  "key6": "2EthQGeQbrPj6DCiWQMy9u9fNh3aoe4SwvpBmBegDLB7a9MoEtV45KqF8gTUa5ZMuhsLQUDL3cH22ENXrrNnFe1t",
  "key7": "2kYwm2cKCGFwF18TRaCgR8LybUJGTXcdQ9UJhuh2KDqmvYVp7ftHm8BDoDqZngRvHHdga6nrGFujVCtxma86abUW",
  "key8": "2TrNVY8qUiCHSVtAyNEysDzohUFDwbhYhwkTwYLxPoVRRnTtpPFhur4SUX1UECWa5Kq3ggksFjimmfDZC4L7CBnq",
  "key9": "48FRiYNe3rDAF957QTF13jkxNogtmZg8EFAGCt4AFV1qJ5gXmYLxLwcpSKUKirtEjfcx8j6CDZ2YbQa8Mz5dJ6tD",
  "key10": "PZcHE8mFr8FEqHKSyd3WrMoTrRPFbwvwkyK2modtdcDV3nyivHEuKNu1yXMkj6TBfvn8dF94ez139M5h5MXscUT",
  "key11": "3sDeMAK5PNWt3PJNKtcr1trxY75bM386ZQgnvH2K42naLk77xA2ausJPBJUaJpYmsqEvbWXmrPWsLC86gSbHLH9w",
  "key12": "5bpdSDddPwJAbAyVfQF8x2WP9GxqU24o9sWrfjhc4nuu654972umbnK5XyebsEWdkANFa2A1VkvVchpdKv18XQWi",
  "key13": "3HDqC1utCFrwCe4s3TaveYtgFdZGb3LhqB9BGxm7c4q4qQ6SpdVrasHDUXQccAfSPU8w2sGrSqJDqZuzhjPXUvor",
  "key14": "5UKBZY6ujM5CR6YvMm9erbeEUccSmDDv6WUroJSof5rmU3fifzimdzkMSqYa6cgQC8o7zEfW6k8U5jxXEKniaZo4",
  "key15": "3KGaYQxr7sZgDPrvP1iXnNuvzno4GJzWiW99cg6Jqh64T5rA5jwHjiwY9RwDQ8EnBPGMKqbTQFDxrMpyBh3V7JHB",
  "key16": "5BqD537uFJeFdtYBxNbecHDK7dnhZYHTXKo7uHgcDdjqKtj8FpG5oSPT9tPFU1RySoE1qesDHrSNBMvUMzVDQCKv",
  "key17": "3intD1qWiEhnMfnhWiDD5oCXYiAZdmcQgRrkecbcUQriuBdPU8gjv5zcGdHye5BsUDHZdFGkUa2HBKufzSiLo7w3",
  "key18": "4n5tRPrzdGpX7osBzKgPUKCp1yd9rBnNaoN4ZDnxamZiuGJJh4CCxwvd5r4drv4Db2wA2nMg852Uki8uZjkdCTdb",
  "key19": "3fAVvCvCWGQuvu5cSBfGAhcpahzz6GPCNptJw2RQEevvynTUq4upwTAHicfaiAQP3sWLvVYh7f9rvypA8p3bcZAA",
  "key20": "3LA36PyDFXBfTBj765x3XPWSw2KXoZ97LFo3ZLdVpKHVhM4hYAMBcWoQdhS8pNLt6aexamFKphY9ntDHvRWAoBRy",
  "key21": "3ospyvu9wmaFx8k96CC3kghQJRB1BGLR7Q69y7i5bVq28Q1VYQzg4y5edRy6HcYvspAoZ1xG4Vy4AWYTmtXKQcYm",
  "key22": "4fZMxWDULYNsqZLziZ2ufKb6maao6ZgXNorkUEWL9ydCdJsBoVXHfN5LGAwFcrbdFbWnDf5Z6BRjFY6nQNQUYMkk",
  "key23": "4DwAuAQZVuNwiGa7LZW2p9qx1374S6mLAXwynDFipAuhPFzxEvqjJNPZ1MQH7M9RuqF1Qcu4sLC2PcsrF5ZnRt4G",
  "key24": "4NzWM8npj58dehbhUZk4pccL6CkMVwpkoe9Pb44k8okKSzugMteVXEnbfLhfQDMZph32MxYzQ1JhcnProsbJKmgs"
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
