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
    "5nUqXEs5UyQ1jycwxhU3ZCWgnn9cnQnZpXNGn4jdN6ETKTN52sp9P2tyxt88KwSWHuEyLR1xQTaksBg94nPc4ZeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNvriAvghWsFrtJjcSWCogavY8EAS8AePijGQna9CeRagqoQrCTTnFGnb5PKDxQygyJ3bRjxn7X2s8L3RAo247U",
  "key1": "33XM2HhMJnuYciuCLJRM2S4ZQWh6TcWDGED1uhNubPP4zLU39aNKzMCaP3D8oUJR5Sr4TRZ9J6zSfZmg78W8mYVH",
  "key2": "2eRrtPHCyiUZHpjiEgKuNNcZL5GQsWEi1DqF7HcphzT6At3R7tjN3zMr2uw7rVHykzLgLVUh2piyqghLQqicNRdg",
  "key3": "3zVJdmgJnhfWsW3bDfqBXCTaxe5piVGMzirVjAT8HMtkuwHBtSeP3fdWwCtHkjXmkDwfXjB3pyby5rZnhrt3Qt7E",
  "key4": "8XLdHCCfYZFm9YbAqY7984qfLsivQG5ZPmZw2EdSRR4jGVSZGaZzcAcEBnhTksdW8U5ARE9JStMb3vHgg4rWbTY",
  "key5": "2cT4o93PkwBWh9xtk9uVTMMwPFiHWux7xMKmW3yZ9ArH9Eg1oofHrHdqF2jvCsBfXoQfzHruWp6GHroWDhSiWCF",
  "key6": "4tY5Xb5YBpnZQFmKMQgzMTgNyhMz7kPgbhX7qzHgciPXwh1K43euTCzXy4WP7Lit2nm85ntK2LxUEU4CGoyoA1iC",
  "key7": "3QhDVNczcYPCLP9SLeNqyzHBZpmwn51d12kBaSH8s4UJsZwzHx73vwGckGkdVLbAedH8Z42f94HKTd7hRxb6Vr1J",
  "key8": "2SPq3fyt98EG9nb7aaqQozBnseXs28GkQjKGMpEQfd5sYfzdwcohFJNT5rHEn17G7L2TsREr9NXgcarFvEFTB4Bj",
  "key9": "hu8BZuBxGXVPycicKor7BC5Vq5ZUyeapkFLWaJuXEcfXEHvFzp75sViUpWrQiCe4aemuT3HofmXfnU8AMxzbJcq",
  "key10": "5qGK2ju9RBGdTycEZeBTXob97iaRXDgyg6n1Xsja7nHJi6vrhFPt4Qf7UUCHpSz8tRVv8SYQhQbT9TEsQfUyTUkm",
  "key11": "3eJHWsCHTgpzr76kPpVWnTek2z9FMzM1gJAMyUtW2rZdGGodCmQYs13xw6Xxusg5hUUx6hkgR7mZQNSmM4hqEeC6",
  "key12": "3uasxaEdJmjAb3GxLPGu8zNdxwN8QQw2uQzX24cFCcEcF6Tv62St8dLW6ugb2oJwqFooiCpNpQ3rZvEWdVg3uRjS",
  "key13": "3cTu1gDi6bU7MnrJZ4SFyRZznX1XUoVjxnwghCLTfuzEhRpGqY9xWVuHN96PiZ1eKEdzGJfQEpQ6T6gBHVX9Ta9U",
  "key14": "kgVAHG54JB6oKcTcSzBJ9TtxkY89DGSRRJuA8hXbSX2ngszzCBabLW6W8koST8Rws9gucfktQ6vWgPEcFzpWjDP",
  "key15": "2urSFpMPJq1L1cQv5WE11KQRHaCTJXvV2DtWoRDWSjS7VqzLxqgKopXnhC5VbyXpJLfrUfnDrg4JQ2TVQEWN2Z1m",
  "key16": "JRby51xTDWcuajs4uKB2iPwiKdMFKsbizoBphH9xEjQGm3ZL9gArZb8pqksTw4pymKNwNh8Mt927chcgpVzeTw1",
  "key17": "3d86asSCyeq49Q2MQQDsPgs2Fs7zZ8MJAiGKNuvxULMrbUx2v77cRDKJKECojaouAbyxEgqkdzdPMajuTy831TQu",
  "key18": "CCCg5jG1MA23HpRMUYAKF1ExEksuSdfmPsxLYUEFNcQm5UF1MRfDYMwUpMy3m2Zd7LKviFihs2zaQtjeR9o2UqY",
  "key19": "4QN93mqX3TypfCPm8Zqx7cbo5UYzGbKedu5u2DK6XZ4r3aR1MpiVhz7zb47hEexryCRAg8zbsW2DWWo5u1dQYitK",
  "key20": "4vzGdSmoduUHrNMvVqj9FrDPf7gbauWeXdyqD2kjofmXeRoye1vBssmVZGKWtqa96VsuZWo9H3BXKaHg9wgGnXoW",
  "key21": "4qhUCq6QMNEUh9GXfDzgZRRCgFEw64p3VXu6WqEYWUj8C3qGhcnYpbiUbX18S6Asr48EYPrDXzPRmznWpup1D4au",
  "key22": "49qno35U8fmV4sNGS7MuyT2bJyaURJ1ed1jN8j5o9Fm5fmw8YzWpZhYSXpR4efzBkX4KNtYnHRvmCqF8VksasSJy",
  "key23": "4VeLPPRK8cy3xVdU3VQovJXr7fakxqrz94dF4So56jC6b8gzoyC78pvcMRpWCcQwmrCfkpiMtRGuyiY4Sf1JmENY",
  "key24": "4mxwnScFyUYK4erRGchc8XXsdRZEqEQY1CARXWryJQVQeYAKEPepsoouBCFJUj35qxJTTkCECEvmEZrRuW49B9VV",
  "key25": "4q9E69Zf8cVgWf19V7rZuYpqPh5ejzF5bzomk3rn6Nh5VoYqR3XstS4DuR9h4J8gTQARrjuXjczUB6gY91SypnuJ"
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
