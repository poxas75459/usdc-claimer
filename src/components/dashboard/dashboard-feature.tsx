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
    "AiYnNqKuiJPK9BCD1XkysVrR2UyjsBnT3422TV6BS94d5QzoHCf5E5qpFUhTxfCzcgg2D3BHhAqhjCdF6Jp3U2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpKkpPop3cmweGHTAzJ64CHZabLPTbbH2Qn2xigwkxQMwoBYcBvjfVKkQBBcSRHEQrnSTMZxLu4uzjRdrjCLda5",
  "key1": "4Lwuj2e9HzMUoU78sdsxaHKXnirVVuEr3MGmaD1e5GDHAs5UgXEtpfhYqFZJ8oWWVLvPdY1x8SVnsi41xv9tUdE4",
  "key2": "2UJCq8FYBa3c2cGKX2TWkyeGfChLM13c4XpNDMUaN61v3WFBWqubxFS349hPMitnEsJbuhF5swN3jfMH77KMrGL8",
  "key3": "2KNRXzJ9HKoEtpQmCRQEFZhPX9b2Ae48P17DScaM1bAFWJJ9GMMA4Un5fARLmVetEAaiJUbMZAdc7bAGZ1fYumE2",
  "key4": "2yXTnwLHfRfa7BnDkRiy5C8fSmeq8XFj7p15Nrzmryc3Eq2MK4vYzxptt2LYv6uwYcDwZ4bPairEU92aaFoTAdwB",
  "key5": "2GR558Tn9tXM5XVetdJ65gwyhutv7nGZD5JioQ8vuLY2BiTqBp7NjbwY8kJohT5VvuSkRmfKURxUy8DXbCNZ5VAR",
  "key6": "5YyPAc299KjgFhTrPuYw93RqEr6d7LBXtgzGJgLg5LPsiJt35gDzQ5MGCsK1n8K6nkQa7YEf4qsDJfL7F6FSDRTe",
  "key7": "MYB6wXceZ3EUyutn3A4a7HJjad3t8u7UC7xp1i1g9GFmGkFM2nCnWJo4jjkqA6emvuyqCJdirTJs2SsRKRbxLDK",
  "key8": "2i369PzwW8Y65dS55cEyjnteUusui3W47eEfN6ZntuSC9wasMv89Gy8obAdeYaRUMr81sXWoGYfXExXi8LVQJJsr",
  "key9": "Xzju3xXVwdjCaeyioCkTyQBYgPGVzL1pip2KNnbhKL7SDMqS49L6mefXZTAmbZHngsV4np1VFKHLRGRDehhi9aH",
  "key10": "38etSBz9rLmCwAWitLVkwiGN3a7LhoWe3tegRoDvf9c54aT3dbxXKqzmju6dfGdAffSmVWrGV6rpcj6cijJU8hRU",
  "key11": "4qQNnPqqvnfwEbeaXewaAh6vUbYaRm6cMmq2Fq3vKwofWt3PyHVYNBxGZ3Uk9eu6mgAPwSSaBPBzv2mHm7C54QFf",
  "key12": "2pkAa4ZQudUvn2WwgcmV9ta5GUJgrVMfuTTwEeqsaSfccCVMgzNVRoJpeUKyajEXTGxxmpMu4gyDNtnA5bTm7y8w",
  "key13": "2EZ3xjgE9wpCufMVGRcDgtQ1Hxs6yR5URdw19sWtVbS3PvmTPa1yR5uDHHGeeYV2cnkqztix78XqoGYBW3xKSQGQ",
  "key14": "3EDvxXozhmTjFuVK5G7uvZTyf257HFaMp1n5erch3NfyuF4LSy9cEvijjVu2xrnytnNfXiQzgF2CSut72XkJ9kC3",
  "key15": "AiJcdm4f6gLZtmxY5W4vMFN2b3kpP27hywMzxqBooh3JYg7BQLnL5PLJSQTn8xzQazQdcePrTRkFWBzirKKSdxL",
  "key16": "Sgr7ZCQdr7Z5MkMLJALkmfPn4GtM1Ro3htTYVErGEHC5L6eUXNTEJreoLjqBm8NrDpsQu78kLBNUnzPeTR8aK8s",
  "key17": "2tBJQxXBsTUXWESH2hr9fEXbuAWcic6cYtTH8UgYAJzjwMeGcGSu5NoX99q5w1VWSscnBkVMji5WkFp3tzVW11TK",
  "key18": "5cjDfkpaMRw37AKh5Dr84W13PypTjcJGeNsmdWzzMF6ZiTgKFDdjnavzATDjRUhy2qYdSZkpKqswjnSKu7gY1Xk3",
  "key19": "2SjuJdugaRiuzkfUZTAyZjpZ7Y3DEh5hAHwEy8i1uoSSriLXdDabtr7ve1L1vq7a5d1nJfTrmToVcMmUhsMwvHjm",
  "key20": "2U1fW9LummVYDZXNbLxvPEi5Wek5VaBjexgcdCk4M19rFBuYANuu6RAEJHDntWieoCzRDwAoYd8htRiTfdiEq46W",
  "key21": "2mDjVnStY1DfCGnLJMHzS7Wgo4KQsdxfr5ceL25GrUMZAnAqJTydTV2Lu6qB9Vhouir9EZCZoG8uuPkWq7RE9BVy",
  "key22": "4B26ENERECHtpNVZWD7eTBbRA9o1gRgEB73GAWdtz42QX52vYe7GKe8fKPebYXEtufysa3JAfe8eZWUS8HGjWM7Y",
  "key23": "2ZmZhn2nxrqHiA4FNGhUFgVyTf4kRBgrnjwzvSLPhYiiMtKn93ommCHyLFJF5pFSK57txRXNiSQ5BYQCg4ZsRkw5",
  "key24": "2vV2pA7x6vWFBBvbGzBASXcLCwcCzXGeGe9Hj1Djcec3vNA544usShDySQwQZJySpe4HzXxUg7hDufF71X3eF29t",
  "key25": "2HHM4yzzBSNGi8vedYPzduUbGaZwQrzqv3YR8YW5E4MrooLJcwVbqMaQBzkhsNmToUvpk1uiRvqHvVT9fRVVweSN",
  "key26": "2z3RfJVvHecNcBZxUDqfHg3UaisctX1EF7sZ69tpFo4eqKr9V5wJCzjpWCsDSGheTDbPavGDS6GYyowtbvuwxppb",
  "key27": "2LLWonGhU87iNYXBFzStcBSxFyrB4e1twjqJ3uKS31EbVyhd87VSpygrD1uRamr5PJjW2CMHBRRyYgBwMcFmfWTv",
  "key28": "294E2WUrNsZwbWoWiGnp6NtiRMzMLFZQTf6wxdQfdpnZ9zCCgSTh8A82cHcyWAUMKNsgz8WcVzo26e5x9Zxtoj9H"
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
