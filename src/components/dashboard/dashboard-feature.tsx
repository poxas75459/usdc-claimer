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
    "3c5LUyFA3z7thdHEDsHcqgH3XSJKbpJDif6brLMQDA1WhmY5YKxEms27TJqxXUVjR5z6toJXoRoAe2aDMhUiD6KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLMWzHZ8AUivi9Mh7HALVgKBmdN4PpC7BKUru4pDjSvWnAij7m42RUBPnkdBsZgXKDdYZLYBLwtUxPNwbe2i6YV",
  "key1": "4g76F95ksQoJJX1c3qzV88E8qrfysVDqdmF6pvCo6UBDq8V7raDYj8WJd2iHp25JwrQ7LTXCuspYZFNtXDKFhJB6",
  "key2": "8HJHA9osKP3sLj9oDQAwFTwoMCUg86GyN9gesw3zbZCgHZnCuVWsJH2bxvkWJCKVdEJJAosgg3umM88BiyB7QnC",
  "key3": "3ZG5oDsgydqBjBn9RfBwLcZbx7B964iVQKmtiGDYUTfbhb2WVNSf8c9KGHY5CqfBd3SUPbf2Z6z3WMyBi6cY5MRq",
  "key4": "Wsh7c2Ct6PpJeZbYrKF88oiThB38zYHnfspikBExyqSeTJZwswwzxjRxs1BDmbby4gg96c6yKNFMLc23J1Httu6",
  "key5": "4zd21i28r4j9VY8ZzpdWo7Y3xzY7szwGnhysyrUZoCRkzTpXC36sozRNvctE1irCmKDqqnXe4DHvrbdHCH5LNGYi",
  "key6": "PnkWqQwoj1Edqh6NfGCgQVcV6PPR8HzzavYKe3ZeekbErNrRNBp6tDvPa5kWQZ627iFgfitM84ZpbzijrjtSy9J",
  "key7": "49UNGq8JVc9VEvRJcXMLpDNAwhCX2XqBLuJCuaZhSmmNThmEF3716t8bwdAqFr6NUQTojB4PYPuCUEqSRiddZgpZ",
  "key8": "AUKFhMAr2aTQYKBFvKezNtY2tyC9aht3yJXeziT5ZBNmJQFND1kCBco3AcjPTyLErjVW1wtsTyx1o7E874uj6bd",
  "key9": "4hiKiBVwn6QRBynjBjMAKrurBLJWBYerkVnN61ZXSYCYc23nEE3kT8cqDfMenKKSP44Jnbo5SWXcWM7eJeWTbQVa",
  "key10": "5yPF4y7qJ7FzaERjKTiMgQLfkBC1tjbSvHeCxeWYuUaibSiYprWUCbkiPRt1vjNAh52PFqaMrncVPyfCWvkTnXhv",
  "key11": "396sbagp47V5XNN2uhU2A31M8sGzo8vfjRoovKVvQQZWfaogromj3Gzwp8n5zA76BqWY9juzD1913W4EE85pgpJ3",
  "key12": "4VPge927vJeTGx2imaA2r14Xfp73N55aFhawGzAWY3uuECzkYu9t4G24srsSKJZQVmtHG2xzWBFokY57YhwvAiNm",
  "key13": "3CBuA5VmjRgsU1QbzV2sKEf6Ue2agSF9HKmDwcXJ4U6AhauwdVgv9SUiheGXAzkPr9q9RPQZJbsmUwD8GJVNExQc",
  "key14": "3f8XXkbtAPB2kZBpBczZmz7totkz7AwNLG9iJgKTgW5vLwFRuWQFNNYuAeik9QEVmvFUmUQ7nT81FBzmrzc4EHg4",
  "key15": "5E2Fmhw6ozT8sGKUSjp3vYbYZfaCif4r5y3YCs4qcmfEVPXw2TEB8EXHqXVUvANRcFdJt8nvuaDpy7ZCAotxgRD1",
  "key16": "2GE34cdPjwKc4LidYNds7cQhukFS7h5MqAPi9hggUVydfd2NpZZFnpGMcsS3eDrL5dev2wUAtQV9TB7SKxot7A8V",
  "key17": "4Fi4abr2tLGf7sEa1suLfLfRZnMCt1hnWkoApnByNr4Sg1YrSpoPUDwLNHaY91Avm7obtR3W38ffmTD8ZKQBPM8j",
  "key18": "4HGhHpUZp8BiobJb5bYXwcBdGjsHNxaan36nbLxy6JJwbRQQKsH1vJie3dNWi6NP6YUz6Zy6MgvW4ow97AfJLZxA",
  "key19": "5UkqroUbtbysPvRYwTrUb2gQUeMkc8b3bsYLPzvcYuaxW541XpGsEcHapVKWBngu1kwVtVqKQQ5bfEYgRTFBwrT1",
  "key20": "4GbiA4C6CboNcyn1ti6d5iq7qUaLg6EGyiQsGNUaymR54uP2VTtzGtiAC9ezyvcChp27PbrbiudP9j8i8gKaWdLJ",
  "key21": "4k1ZxzNXKaDkAabf2UaxyzYVvaufpAvwZDciJ5owuRa1fFYdBF3kvq7obpsnN9FXYgG7cL1qsNb59WiAy5s5RffL",
  "key22": "49X72q1JEDNqPhTP49UaHoKTGpdBt6KG6kQEKwrjrbpABLafBwf7PkkeDFrAbRe58fFCio9PYCqQ6n9UKVZfGkza",
  "key23": "Fg35fzhAxBcmSryje5ExCjnbeqQCzQwztGYmMbeYxaeTNampdFCo3wtrfcuk8CMfUQamqtEDnwWycWGYcQQujjR",
  "key24": "3tRXB7hx5iJZdD4jDjJN89ZDiZYPMxSo7E2NDY6bjtA1msyfCCaotB8R8TBTpFccaRGhU16FL81BTksb6SjkCW7B"
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
