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
    "55eMRWwvwUdBX9CK3vywqQTkT4SzxKzW4eVLitBVPhzFvKRVwuaoDgb9t42BwJ72BWXEDnMVpPB4FuhDTT7TwVMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zgvb1RWXiUWueb9dsDcg4nZGh68YagQHaobf7v9cvvqQNWxL6vdP5bNw8Ge875jfjmNMFCTVfgDvRphUeEU8iU",
  "key1": "3Pj35qwgGpLd2TucimLgATpqHFfpjqJrvqSu1iWdirfvWYCkJBim6E3VxBLQSKnva8iT3w121dtyd27AaH3kZ5iG",
  "key2": "DsxXLGm1HDmJK7sXKbsxYrJZhzXLCj1AVh5eAHYJfwZm4BQLYEtCCPpKMht7m2BGQ1nwyuzv21VWabYJtG2gGgK",
  "key3": "2tqUUkT5sBB9cMMCzZkHCbQScg3bc8RWuBGnWKuAzHRMkZejC1Pvv5enVDBuZ49BUkC6oEZvNJy4PgoYxXd91L18",
  "key4": "2jPswzxe8RmnMHH9cyT4L57DQd6hVoqvkC5Wor8mkkwuA5X9H8ouZ1Z6xApynDDdAiESKGX5iJbDYUR56FWcpuJu",
  "key5": "2kQgmeNpMqzim4PL8xKoxFEKgZn3Ya8rb6cYpFVQoBw3qY4TJgrFEokXcdHoWD3qE4dszESt1SPLQ4CtM6bKUHfo",
  "key6": "4o9A3Pvz3roxJTsXHP8UqYGrsz1sTzrTzwedwUmu8Xn9drfd62cj3QDU7KpBaa7TkVFtPzCXxw1NZLpa8yMCPxxb",
  "key7": "2FsoFM5f1q9G9NhXCjPNaqPwLZRwabi9aMxFiTEGQQhXJwna2DLTy3mEpVZufx3zYxCGwkhqSoQyPSeDs88tpKf8",
  "key8": "4WzzBiHc6VLp8HJ3wj3MhammtQvSUCgAkojxMemuTWPBFfL9vDunyKeCpRhLQpq3sEnU4g6uC4xQNsQt9zpCwXwE",
  "key9": "2J2YBrqktgDgU9i7YtQiRGuvGMuuue5aBgBSWzxDZ85B19f1kzTii8gSARw4dhiV3yrudjD6pCn54KKTKz4aGqKz",
  "key10": "2gL25WvudexPj7qDZC7Y1tyvUzBPz4r7aHckWcsQqrbXJf5bPrZsFmpvjNf8Jafcr7zJaXVjtj2GqaSFivnquFLr",
  "key11": "66Syo5bD1vA4RkhCAZNFN2C4uELsJCUWDhx36d5TRHYWU26X6DaozfnGsbXzW6D7DoK73NYw9JuXm32vR82VuJjf",
  "key12": "2SNkphuwfwXbhaiW1p8sibDHa5vuG5Z3RWHnuohnCMtpUoEReGN4CnyiyatZBv4t9mhoYEPoUUKG3DQPuwFbRbkK",
  "key13": "59RG92BR37vT5vkeK9eBL9ci5bDo6T1wfDfxUHNSEBGW7KWHpZtGE24qUiSXRSZUnLp7z4nufk72nF55bmkSWLv8",
  "key14": "xsRZ3rz7YiqiWquj3dSEiVrXqRtgcpLqryRPXdZWXPZhAtvEiqdJZ4HTyN3VG1sUajm6QRJovtaqBX86xjGKkjM",
  "key15": "2QrQUNUBvUufw8Jf8MkcZcGPATtzr4hLNzVKPoXZEzuszXoXbyZmuHZkdsRzBF6KriugsTqGZWAJ2Fjq5dpga177",
  "key16": "2U32gnbNSbALSPDJgKMvcF366QHKUqcpruGvZNczWpEVNge6kypnSNC4pFGzXyALrRDTuKQeNA6PLkFGkGDTbdh5",
  "key17": "5XgpZJimFqQMe1d64KWhWJtAjYjezzL9cNJ4rNCzAvTfG6dn5TBRq2nTgmSWc4RrsXWAv3cddqfSiTq88DWBVDLw",
  "key18": "9u4tZZFC8ds52rUJv2mUTZY5YjnnADxfjm4HXeUf8iZ2oyXBB4zgHvYpcTQ9sbeUoZs6JfjTAwmdkL7TFwF4TFz",
  "key19": "2nbNNRETYZxCqxRcjgeviF9XmLBBw8uVUjNRKP4jRvUEUz648B9BLqbMjWvdhiMdQd94jojuNa5WLPNnjQuJ61UD",
  "key20": "3SuhW9SsqbrG9bHCTXpy6V5tFNCrfW8irxniF815NtPuQn2AMUUSQ67DPvytBKntbrUAEQmLyRPYrwVabQB8ndVe",
  "key21": "4rCg5Py3mSL3BwYH7k9exjkpDLnDYkphuPvvCiu74M5meAWQ5PBZFAjnwzGmxvMrGjGQvRuce5F4gyLKeqbvyPJ9",
  "key22": "2QaS6B38qyJvowvD53Rdmv96Rg87YSQfxRU3Z5d7nFVTNNvBj2Ufj23DSju2SKUE97Z9T5tMsDpsYWewrf75rUkn",
  "key23": "63sfutoojuUNe53ri1FCFhMo54j9r3ZBXvcAVMc8Xexs6XkB1ua9Mm1zna4sFzGGviWt8SdJUNonJ3e3rJM4ZZam",
  "key24": "4s51zUELhgnRuGMWZsnSXQAd4M62E9PQ4vDA5xsaBuSqBjiegaaFbWheQk46kUZhUwRaxJX7yWkRFwJYbhLNudfG",
  "key25": "55FZNttJ9yfr7YPBAAu378ntoLnr1ktQ2BEC1eH18xziHj6Wgg44qqGA8CWMhtv7cWh2EE8fC5roUEFQsAwV2pD6",
  "key26": "2avzmrc6hePwG8A2zGhZntdsPbgujt9R2zmFP5qH4JLR7vrpZnuzCDeAuvEzAFw81E5Twas8kgEWCJ8yWLvUiUCs"
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
