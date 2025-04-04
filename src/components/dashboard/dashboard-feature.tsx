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
    "3e5xgK3dkRLNPb4juHmAuzH2jU47S22Sm4pD5ryFqDZN5EvVeAAfThzCkyb9qDszaPGc6PDwfETmEanKvvzGE33h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51924WwUcz7LVhuWYthf6PoFBg4KmLgg9Zz3aW34bocngQiPPoYn4HntBFxJ9cXBXi4TdK1LiYw9hMNXu2wptrj",
  "key1": "23F6X1CRXbq7GBj3tEAasQeVaCZx1v3QUMySvcFWAZyzm13ydFAHhiTN7tHyWy9sAKfNmnKZEJ17iRLzBddcYaTJ",
  "key2": "4MozXsQw77ysh5YwPdDWgsV2uvD38xPpp6ppDd1W1XGH4SRnrgXh2v1papzbs6547BzJe1mweM6moaF3PSsmBzvr",
  "key3": "2E2PAWbu1wTTBL9K4pXwmYKrLjFJXGeWddZxhV7L6SHXKZ8JR2q1sVkbEnW1Juos9wXPr9TaQ4AoLABkCKUSvQ47",
  "key4": "5xvTYL1Na69vK4o4wWWyHi1eHZkqneteSqmWdK9gyoi4qVtqQAEAkLdJxUUAcsYAGV8DtFvtCYdSAEVBYDA4qnki",
  "key5": "5cC6XTJPkMQx2k2Zm52Yzf1WXH1e5sWjwUSy99HUi5j2mjgZN4eRZEbjfun82cH5wuCLq9iTRtqYu7dvjvBnGeSW",
  "key6": "2oWqbWmnfe49UqhUxHfefJmJsuvtzEn4uEu4kzYC537rWjR3JSrkw1ZMperLo1UU7sZYPXWahDkGV66c7Ptw9uFS",
  "key7": "4iAjENknsGxHv8vhHuXfoLRU55oxBAt3LJbQ1BfgQgYDM9J54vJmSYxp9N4JQswH1pJggihDJUFCVkGL8nRxn4BB",
  "key8": "2KKxQuaJsZNEoUP96sxktJXCP19qy8QR546QdFLgMYgijkJGfUy77c9jJ6tKczoFiSM9N9gDFv6BQqGaRiwPQoct",
  "key9": "5Hox3LB1uy8wvP9ktCDLkkb2p35MH6T1tGm2D3ZvKexw4jkui4PKKn8w9n6AUHQgZzDqfJQSX1UWKJVJg8hQsG4s",
  "key10": "22QKrTJnKXD2bUkHvGM37b9QY7XbsXftPHNbYf8WxeCixuuKVLJK43rGrrn2nw7CvRUPbj7Wev1CcZXkBDgmHtiL",
  "key11": "3eQVwJK6b2Rdc7MK3N9ZvguYGuspEPou7mzxVSc3wFNp7EttzGDLxhZyN1N15FTEEVVkN1AMQ5hpyQk2ADSat6wY",
  "key12": "3WZBfpJsQYfxRgUYieGAoUsJQFRpEFEG7dPxtcoXDJFNUsYgAVWMwXrVxAX3Ubk6BTfSRZuekvVCWQmpZSLS69nB",
  "key13": "4UGuhSn1zD2XNBBAryZ6NQsrS9mmNHVbEyeKRD3ZURWj2uiKzqN2FaN9wxM6C72yqQpa3vTPbNiD4xRa8G41vFq",
  "key14": "L8QgZrjB5uJqrRhDPpfshed33AR1G8YJPspQad7B4DmSWHk5fkphVDg7zExTmnGDFvngUR4AByFBiUT5pwftbg8",
  "key15": "2ekMsvDF3pikVqkbQPsAsDibfC3JzYfPTGVRQGagn6D359kNj3C1z9T91YMjwF4th583NMEff4HcvVtgrXZBuoQS",
  "key16": "wmKWQNfLEE2LVHM5mLeY26fwqQF3wJb9nEfeQGT7TU4mQME9GyAHQSoH1crTDjQZE3nFQBr7Q1Z5iVPshvNLDVX",
  "key17": "2mPJ5FfgWTA8Fy123zTEsX8niJbdwjzwfoF5myUgT7xPTQ4AewUmSNcCBFCenQeTRVfwdMSfBybmbPUqbWP49ydh",
  "key18": "2vRTLcyfwHMgKwd91hzooLAeN4LV6T1YF384y5Cm4ZivPA4Fwu53M1vRv5KDJ3pNeY7H4ZUTipa5AmqMazdeP21L",
  "key19": "2HaowEtJgGgHaUWknmbBrUXtY5wKwpgpzurdHR3d2aqAjFAy2phTmEPJLz3ZJxGpvWdBnEDYbYixhrVxrh8afWex",
  "key20": "37d6Yo8wrgU49VhhacrBBetpmMjbB1mxTbWkTsDWDXjGhF2dhMrXTgCZBFnS5foXUNtvinepK2nYvyAuMWAgBqn5",
  "key21": "2cfAVWs9fp6GUuBcRmcuWJoF3w7hUi2AEbgqaAniNa61XfwpNhbFMt3PYFRVkYqyyf2VAy4v6wP12hJUHxFtzyHJ",
  "key22": "qkb2LayExxjaVwQPCe31weYNb7q5gMLbFUzhWoKyv1StgrhVRynJu2iaD8DTgn2BSYiwhGZZG1QmZbY4321Q8Ps",
  "key23": "s9A82Eb3FAHMqQ9EGruPinqD4gBwFndP4nFKETzctTjBARuAUSxyo3naiwjzRTL4ZP52kcduJhHr1CcdbvRHnRn",
  "key24": "CN2X8F8SA2oGcUXi6zU1TWsA5WTYnHKAWdRq4tYZ6xchPAX5jpcPnzBC1MihQuNN2wTpTHwYGLiykT29doF8S2a",
  "key25": "37mXAKXbHUdszHWVRRgufjXK14uJpMr1sexq5E5Cm25MDW3uEcGzVPsxwdPPH5W37zmFyMjCUhn9xCrvU8Wsy43r",
  "key26": "2nF4yztY2ba8RhSzcVcMaAf3msy5ZbrN6XKpuryPGLoyfMCjca6u4UuvtoVc7JpdBvcWTko6RbGuH7nxvh7dskVD",
  "key27": "2YSW8p7k1bFLUESikPLhxD5gdgZJNSRNrKAX5RFM1ReXXH5ezC5W13Ah1mRL57yr6wNS1X8JenFjPBpFSqt1xwKD",
  "key28": "4eMfF5wMmTwdmNQyEQyoCaUKTEnKw6thRCXGas7iEvoaUXKer2NCJkccNd8pHQTUfvPtbqe5FZzB1SzicempC4ih",
  "key29": "55bcroLqXjzKWjRGxbEzDFuumR23Kd2tFjhne4gqecJeomop7hKBbGbtypJSyEArQmj8UXR5LS6feS2oyNHcwQ6L"
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
