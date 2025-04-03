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
    "5qgAU5h6DTzoX4CY7x5Rv6Vk49XKRmLwwEpGsftgSNAJPWaDngZ2cWVg2eYPDgTAnpWjn8wCTngnbToAxeEAcFN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMDFJSRrhbhha57kZEUGkfH3sXYDVhXvh8nQvoL1tRT3CViYZqw7z1mrj3T1idfZQaeYAKPPx813KQh8t6VmYLD",
  "key1": "2ZUFtN3n4yT5uYxo373JpNw3zx3HS1fbSAVFSVm2JATzXZ5DQ1M8QSXtNiz448KtauPFWGkDZQP8BVxj3ZhwZ7h5",
  "key2": "2CKZoN1Rphbd7Gtg7eii4T3yJZctJj8ETPrQ4YxRpq7e8vcCKsKTD5itopczwC9jgYpR2B4fNVX1Zv8B9vKzk7zN",
  "key3": "64bZ8pj5uf6xfcQxsFd6YGzxLu8AccBrwHGNG7TN7KLuJN6u3sQ5AaAjV86nunVpjmecxaiDvQXu5ZHUJrusjEk9",
  "key4": "53uP19XuEVM5DerM2YNawj37ZftXGDqwsvSHcEfH5K87Rou1aqPvvadDV8MvUR8Va5CXFTav4Hgwbr2TaWi5oguf",
  "key5": "3RU8CiCrGFmEk8e4r2KSdXE5VdZyhLvKfQJkLe9CLhpBmFz5qDrgX5JXgBv3NM84mXLYs3H7CjiBVPyzwn6bADot",
  "key6": "5jtMxx9FMCGZDeC3WaxgJSgzDZfuiGby8TqbU8ULdMVt96RLRq8XDi3pYbpZgf2xHFV1hJYCW5eyjHWckKdtTwEf",
  "key7": "4XPM7RBK8R9xMcL5D48UddKtReCubAiYoU2mYt9aNGCyxAHYFY8AhQfKajcAppqTA41VygyrstPNxAYNuf6aUN6S",
  "key8": "fkF3QMgywuqAgtEoWeeqMKY41TVZbmV3Vz99wtN4S7DwzR7zEezcPWguUqqeWFq4Mf25sbHVMRr8AYp6E9titnp",
  "key9": "5MQxqigP5TKS1cA9CUPwY7roDGfSUm4hJGxy6PB3vZf3g2vBS6gcBqaXAugis7xjXMZcEGsNpmu6z3gUzYnEE9d6",
  "key10": "u9wCDSHx7BNBXCSfYBRu51P4HYaP5Depm2SwqZmHFdmS9HqgK3FoKMDjB9RZ6scXvfL7xYricFTcefamZxNPxaS",
  "key11": "4BMGVCG29osezs33C2YqV96u7PCJdwXZimziz63hSRm1pW5ftEMpPDLa5tVFeUgkcWNKsUcnMws3stowFeps9dV1",
  "key12": "4hQqNnFEome7YQnPff1mLXyuB7yReoe7UgyuZLJKkGHEw3PhHJfkUbRtY2cwXbdZYFKgmRxk59UdE5SWn1QH2dUX",
  "key13": "5ri7XahpXFfG6gX8tXSgzB7qAtukbsr64z651Vhzho2VcFYhbxhEHaiJgJyvVup1JhY9pKDj1pUNhWwV7yxsCUGx",
  "key14": "5K8qq3j7EdwyA9nmBi8nb2jKejmbnkqU7aSuNZpo8hQ6gs5WRMdixF5QcMeB7bKhtdtArgLeuRZcjtvYD9tjyk1G",
  "key15": "57sJctWng8fVRfryYkPQwgnn7XX1WtmjE28JY46LAHgN6EtaN7wNYiEcV5WU6ApixPhkJ2vuzcFiWn8oqPXXXDHt",
  "key16": "UmpBrf1fmjhBcRQMwhyQpfUcsxBf5k4zfShaWD4kNumjMn5ZBt9CTkbc2r2VnXn3KZeB4avR3gXJZ9xc5BsQuoi",
  "key17": "438QrfjCuwKqDLVkoTzg8vicnvRMnJ6WKnRAJXF8Q9MUs7aW3fJHxucxHSXAaS1ZTuUyQzsXc8yczJ7ofPaQcV73",
  "key18": "5n792GTdJU3mX7Eu9wNRZCUrr97v8KLM93oGTaUwmseEyPDwKVEWcVsFmav5NWQKpxE98ANMPTf2tCjQDJvUvb1a",
  "key19": "3PUTY9UiuhcgoYsjnw7gS7AqLMSCN69rLuwuFs2t7GA39wzAorMnnY3FB27cF1nDf6z4RRz7Um1T3z3ZcYqxkQTV",
  "key20": "5Uam3dYVztC8ajWxfTQxpPMS1qebfT4mNJ9Z1iV2RVanBVpPeVEwDuggWJPxZRm24uWtnyDRVhFxE4BkmAXQbt69",
  "key21": "Vx6oZ8xQTmjKKaepmaFEHWSzkbxU2UnuPnfSUAK5UKEPaQrsWtniVzVvszbAiB18HYdbTqVmcqb8VTMwvcyx661",
  "key22": "2EZ9vZbxfAnLmmQGR28QGLZNsLswqaD5cRVodgRQU6Wqh4fx3L3Nqxh7J643b5ABURvx5BuEyHFwsYFaJ2W4NCi6",
  "key23": "5P13J8SycMSUDM4WzeV83btXc8J19GfijZzmpHYDQ1SHYCSr8f5MatVHGF1Bd5eoSHh9s39Ha39KQLmSehxqrCv5",
  "key24": "3syT4HcoSTGXe996z8XMFhT2FYNtSrsfubFpgtY7JKDz3kk8mi9JhMqugCikndwBhW9XiYZtamwBjCiRiDTFqvWs",
  "key25": "4fHLRyEbE5aEBBSQQAaTuhTTfKD3jZToFJeyZxtbebCED9VeiMa6GxQihHzwjtBuWr4ZexqWAC6hqxZFNu1pSvwX",
  "key26": "66SQACyXHWMEM2XiupjrV6L8xQj1K7ikRn5L3dVkenMmoAm5P7GF1D7bcpaYjdyoT4fVZj3DodruW4bBisocC4mi",
  "key27": "3hPZwyWKYeMinLbjVgJGVhwqJGNmo1gbyKqob1wsGMESuG5aThHdkcJWe6bwE1rfudAvbKjW8FMRWfsjFDE2fuqg",
  "key28": "3HiT2Wqi6eNfW6ZvG7AqSUcaX1bHUUWtekwKBd24uCEsZAu4spiS4gEXpumAnzRaT8rTirN7q7cUEYLFPLMniBio",
  "key29": "5e4TKm8hZkU2YymC838ZKiwpZ6shKJ4s6vs9SAuVvy3zLPv9N1i2YfpU36Zr9VqZ6ev6RnocnmFoxo8gvscgeDc6",
  "key30": "3knimkLNuioXB9dwBnxc5uEfFnEBHjWyNbffSFjPkdf8kgsUHRwrfTzXYjvFNq8VxWBQHvHaayfiT8Di7fvX3Eh4",
  "key31": "41gfScWG4cr6kAy6gfEBQHBKCxKcRbBqaAgV8y2znghWF41TviTtjjmSo51uhFb164TAv482UYdkibuo26ffWj7z"
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
