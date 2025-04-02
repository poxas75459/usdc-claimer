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
    "3GnZ7XjTpZGVHYXqn3mYydj1yGtFZjdGebxczfy6mKeGPfBKdBXb18gDwiA77ZiqVEf9ojoTgNYbJ8Ex2jjnu4ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrvVJsfHZqdngZL1JBEPN7dgE3rRmTj34X4JafEfCG6SaJx7jYSc119BMgkGbiPexZjH8DwzyAR1dh6nvm7w41d",
  "key1": "2XaM12971cUepQdC7proSeCx1NjYyCfxVxXUQj9PdmcNKEsvpGN6irm7DmyQEhu2JNUDo1SBuqEtLYue2rwHYrQT",
  "key2": "4NcZVjRniUJNt6LY8nxAbVbPH3KJLa1tqWZzYUH8ALZj9tohyLNpQvuHFfx5Rjb1qde8uRxv7aQpLayHhoRutB74",
  "key3": "45PKsp8Do2U4tgs4R35j7EAMAjrULt7FNY8oNWMSHtaBBRYeqcjuoWuh49jxRW4FzvQL24X9qSKJGtdMgiH8nUia",
  "key4": "3n7tHSBrYWwpcmHVXtmy515XXCfv5QZyw7Qd95kso16Fa1uJbRP3MZMeAnu4t4D9dBr95YsoSt9YCUN1hjr97qoA",
  "key5": "659cjQEXZNiVZmK1bWxoPUxcwdVSrXiQQssuYViCUM3FQ5JKuTWqDaLYFvZdbvKQLYaEnyXX1YDZdwhN4BYtY2Tf",
  "key6": "5jbJNiuoBveiWoTLT7FKjtYdpcvucjKu7pCm6dwHiwQzGJ5ihiAQS1edtBVzJ6X8Df6d13NQFS9shgKGqDXLZDba",
  "key7": "3htzveAgfnpf1dPcbZekXKus28T5Ti88gvMGNRP37TXBckNaRa9oERxmXjvv7QwzK6uzSznACVFM8ZgbMk49mTD7",
  "key8": "2iuVZUJVARR3HVNSoA71HAfxGCVm2ttGNNk8QFpGCcm6ZViDGgHAJ7a73piHo7Y4yzQGZH6rbjjWrcdp7AUdYQn7",
  "key9": "4SrQ8oTgT4Ex7ZyGD9iaZZ6Kh1fXWbETaVQDx9FucpNcmeLYK71raLVHPu9nmMdehp41agFvWNh9D6FknhpvtAXd",
  "key10": "UuK3zHfVbzZJrxxvz9shtCVimfJaFT1V5Shi3jdVQMuMJ5aG2Ef2pZhPXWdxxaaHrhnu8HR446KUUfoqUj54UC6",
  "key11": "2DSNA6JtMxLt6qMy3qsuAzmD9vnEacSyam3ajEL82p4f5RFmJnxXqSUjhb9PqfaqEjv3Ud54LsmVAHGr9zzZF7jR",
  "key12": "4tuwzi5Tr1PgcEbYwHe49M7WHnY2qG3gNnL1yxj2yz98kd9EAbNV8ZrCndEKGpveFZVfGfsjfzC9Gkz2FuHXCPjF",
  "key13": "2cWxxpqJD7rpqEc3KtxspmrVDRwdCn9dJNDsC4hkefbGyvKqvCev5GMmAosR8eQwTxW774uFdJV5LYkT9j7t6yWt",
  "key14": "VKgoFut2HqbFV9dZAzGQDaBU4ua9sQGvB8pADVpaas4Zqcyt5zuqG9aQM9A5E1iHRRFGXLJBqxWzWN1a7Q48oSi",
  "key15": "4VMq3F1MqBSkXHqmWqjaNntNzGxKxdApyDoYGT6wiSQjK6Ap12nx37wzzP5R7N5LTVbYQuNLUtmwFNJY8s2u19UC",
  "key16": "4kyn9axN2iSKZa41XTKoMidCWrLPSCct2NDviTSnbHpEFsL2e39YwxuVjTsmHxXq78RaxkXaRU23tCGyiZ2bbghJ",
  "key17": "2XPyJanC6a7Rk5k5Zp6dqZqFKKsu1Lmb3khQSme2ocfergXm4nwEQNPT23zuoTa5QWoXdc2XvUvYFGWUPVvJo6yv",
  "key18": "m8RmGwgmmtZzud58dzRiY4ijzGKvrDuURWFkp9h52wJ6VBM1TrRQwBEbrnk6JbCjaQqtVQXUnULN48RCeT8PPaD",
  "key19": "3HohJu6SyspNZRKux3YyRCetY2HpSWttSgChP3x9EY85UnkxDXMajcjQTrfA4f7HUDzWqUKCprP4SZbxMAk3iZYv",
  "key20": "22yq2EoGj77UKnxd18Ls4iGbEkDFh6ze2x7PGfh9tAgAvo4WqDMmBejc5MT4jNey4XZtK79aoEdfyNSVT1KtUZaq",
  "key21": "3maW79c3UdwvgV2QHwcrtm3UwnNA1xLxiqXVyMhCxcAGJWHwpvfBDE78eDTFLaoVDvufGBLyVvzGEMgQYRHAtgoS",
  "key22": "3WTCTRStXS1Y5B73aLzPeCjMe1MYSjPxb8uFb7EyT8wMieF68zQto6c6gAPBWgnf5GpHvU7qwZuAxnmHu9facyjn",
  "key23": "2owxKKNHpqiypmjmr5qkKqMpXCroYnPP94FYu2XCazTAKmh5D99Le8MuK4PqvfFmcUFn3WipVMqeMb252EYYydgz",
  "key24": "2APZgMB1NyNj8UFxiMKU67r5dDwP76T3h3SEFKraFwHQ5W9Zza1g8qUS3W2cLMWPDvhxhZKiSbsLK5J17mBssoKA",
  "key25": "CxcskVe8bCegpW6Kj9a884gZGUPmV4KK3WSfKs6MTNB8BmaPRTs3HMT1WNqdd6rhtDskKV6NuVgJeegPRyrVfJH",
  "key26": "3fPhbU7EUB2gH7uteLr2jHGmMWL1a9H8zHsWaeULYDFHEN9vWsQhnzWVGFitGo8AEYziZ2tSiqL3FEgd92EajvUT",
  "key27": "2vobxPoz6MZQBcx5wZ32bGve9ZRBhbgnkS2RzzwCjqtch5Rscw7bnnTqs7JRGkaVazSLLZLKEJgFptwC3Kf8JvdY"
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
