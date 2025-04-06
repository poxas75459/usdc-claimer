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
    "62Y3R9AqnDt6bsp8XGzUWLfjZyU3iua8Kkv2WniHJE6jHucLgPkFHZyUbsfdaa8YxckrqGqQyqNxRUi5BdMvzGZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rGHsQWXiVXoVp1EQVkXN6iKQqryapKLYumkspLBHUQcamp3oVqba4hMeYq8NQ7Mt9JEuY5NDEEirT3p88kmiuJf",
  "key1": "4UCrzofAVkYFySu8DWYpW7fi9AHFdvoH52Jhqh6vbo6D2p99gmzy2BoE4DbCrVwJk9wKr5AdKYhbrmoEpda9Trzr",
  "key2": "3K8JnBX7dgJPWdm1TMwvHZG7Ws4CoV8baR7cdZreW5TWngV3inzRZ56KCzuyVo6qp1axSW3AxzCP9W1T7bXGx6xb",
  "key3": "4988CsA2XiSwK9BcTARo2M5q22Tea3m7BVMtXr8yaJyyT5e8gn51bQ8b97spxN6JqRMTXJVX5jJFiBNNJUEifEHc",
  "key4": "2GN2jg7NN8akT4AWUyLkLQhYdmJuwcUoNyYv7Y3nU9MLL8LY3PUyFdsYGMqn8A2dAW9DgiHHhKgjErPNRRvXMAiZ",
  "key5": "4H2S3SfhnDWz2k82ryGozZbyMroJXABzxm1RWp2AibwxMSuYWCcwJvYGmDh39DjVCZiEKiBWEQjWNCZRyBeXk96o",
  "key6": "4Hxn5WydXYtH4yzZFQrAMYxSQae1rWd84QEb6cNFMmng2qW4EX2TbhP7k3U1dEngH9L9rsUDmVGFiPgSvGZmz4zi",
  "key7": "2h7FszVGDeNXVsqmtimBjDgiWk2Ka4RRmK6WbH7UbdTtTX9o94iv5tDS7vaWSCN7dozFy11MmscnwH6xP15ynKim",
  "key8": "23fGiYbbf2EyjDEmVweZqZnvsnFXW7A5mQmz3YPDMabi3FkW2wy8zQBxx19sQ72YioEVHN97HCjpFrwYygmxPBSL",
  "key9": "3ut7MLPcwtuaTjUzr9JbCE8qHzfSNWhUh3gYucnbTLZcNCmhtX82TQSzwu38JDZDzcPrW91mpgRnXjbCc7uePmAj",
  "key10": "5jisQyEZV3Fqc567Daw3VpvNXdeyhWBZ9zHEGpVGANHSFCcqKVazGoV4o5ZtEaNRJVNXqCinFes3nwap1FtsEsJk",
  "key11": "5wvixA1FDYBaHs5UBreW5yLBD7jgncbS2tPUrUS9bPNHcPNbCpaJWEUx9yxzgAJ9FcXfMMjqfPgu1VjaEs5mUpZv",
  "key12": "2P38H1aqhLbNZQqKqs3wWRovvqAzDap8SK3JAdnnguD5wqebAEFbFAg71KvzVZbhsT77aqMfmYyda7hqLismD5Uk",
  "key13": "36x4ja46hYgoHraqt696Xxip3jqEovLThKqChTa1Ec2fASZ2TAZjJroE7mvswzUpkgQSBS5KQcCZkAuSn5g8YysN",
  "key14": "5hi2rxZZpgSTTUCgttZowL1zpj2GezDTfcNGywdpptAhVweZwS4NGZ9a9VeRjwDyTwHG7EhTtEZDrgCmKEjyTBcg",
  "key15": "58pdQKAiHGv1itharks9jXzbfPXQWCRpv3nAraHgnR5dpQYB6V5Bj2sC4tdswMWxWJCyQkLJtv4KvNrRZ7jLLZ8p",
  "key16": "4MMa67GM1zW8MdT6jecmDvArcfiep1TMnnf7E3Y51DoL73WuCA3uqLnfxTF5AcWseoHfvJD7WHhbymv6JLEH5NCq",
  "key17": "3M1PhY5M9wVdjZA371yrqq9vETAurKs9AfMZrbbcnfCnbHeX7sFBnQD77BF3fh64bz22sNNZFCSvrvXsbZMMxA7B",
  "key18": "2SVVAjxYkJHYsf9tTaTiNmG9gpm5n1G1FoiYbBMHtXeZqHijydwVSbdgnUaej5LLPdwAfBTtjhrvWvpGw7knb9bB",
  "key19": "Rz8f1ZenbHvdj3pMgJiVgjuqYdb7ipNytyBUJ6Cywp4iM1K7eKHaKumRhzMLmDptMLGFW72qPPzNGsoCE2d9RiU",
  "key20": "32JF8Vitz7haa8oUbwT9B5jjqL2ixdAwKuNTCBeQt4VvMP76LgZCk6Feft3EkyS7FVRt8UJ3WYfqMZ2Y7AvFJpUi",
  "key21": "3Nv8icnEAU4T9g89iR49A5M59RqFtPfU9h3sjKLG93KNv1c7saob6s5wCGLeUcHc2DqqYoDJdof4WX8HXKkJ4LAd",
  "key22": "36o6aVM9E84rGDFayH2bYi8qmg4gQtUumKnvZy6pg8m7fWZzm3jS3MuwJLdRpfEDFfEsziHa5hWV2sjfSBCVU7Bi",
  "key23": "2RqMxcrkcYqmNvSASx6aMLLWGxiedQWQt6hR538RYJztVvGg27C39feWBqH4S2X4oTEN9S58K859A3k8PwBCp8wZ",
  "key24": "65iFS2G13EvNLzFxuNNXW2GHrcxvmXZSaHtoratVofVbo4XUQQrGX6iNY9FijLPjdEaA63BiC67MkBoFPJCjF3Cj",
  "key25": "DdawmSsqySyL5vf7mGovxaGrjYzSALGy8tmmkE5LRVFxTGLheyxMiPa6hkEi5fPbXtXMS2hAhJetgnStHS9vpv5",
  "key26": "4n8B3yzGvPm8FFUAFrWp3rA7pWLRE381caWMc94tnH9UxAXqCD5BDNd3dqHCcDfM6i5XZKShVS2qM9QBxsbmRksh"
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
