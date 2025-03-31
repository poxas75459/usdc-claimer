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
    "5fDNhL4FHoXQFWAWQenT7kyZdrbnFbpreaANcMqMaoSCeBw3iBgYHu6o6nSkq6EB89mVEoBgH3rwW14xFxwHpkAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rf7SpMpjE9jiNS5cUYV5SLpbSzkDWKwbNLe6eENZAkXtskG1mohhZ4qLFKcJetLQgot2aEqTy55kkWuCMDaTV64",
  "key1": "5KoPxEpb6cZDx93QD5J5F799JEtymNa7guZwsU85zU3RQdnJSgiU1RhWQ55AuxoN2QskR683QWYU1SmhDsG43FxN",
  "key2": "4PMLxehTYrvcJrsCowRSJZ5sLMNN9WbwKdQmdKh8FjXXkuFRwndbNiGeo8RgG8o459K2NUrBD6Wmt4GssWNKAghz",
  "key3": "5gapqTJfnWYPvXxMPgEWcCpnY5K1Up7vQXoVFhDG3qnfz2cShz723CJuZZKjPdh9iZf4J6wjuy5VoSzzDmmXahHe",
  "key4": "4HgerfHVTHgECBC1r5J6N9Pnxeues8b3dUEiQ5jpPVd4DYadRd2E1GgGYRbyPFL384E5NZefCRLnNK2YVzfK8fAp",
  "key5": "2QVq4eQj37iiP3e8VLiAb9oNGmaNAq1CjLwGyix6VdQqbGNLi1DSKpEssqbD8pTWnKC2W6xTXy3jeboHHYbHT3VR",
  "key6": "4Sx38qKuASyU8ceme8jcFdyDxswZKJnDQeW4d3yvHvpX9GLodFPPTFK2Lv8Y6m2g339gfJXLsVUSwojPStB1Su3C",
  "key7": "3r1kui86vBqMnfS3k9G3EECbByugwkbc1Lbqk8qbkwFVQyX8KWwP3MCmu7bC9aiuSdNa57TA4Sv4yQxFx3Ea3bEB",
  "key8": "5SrWA877xvgdKr5pZ5gnzd9KwTqs1yFExCY5sfG95WQNxUj8XPuqSsST64PJHHdN2UYbnm9LcPCRaxjMvySUZhq6",
  "key9": "7u3oTLZDvyXJNoSN6hAuXLiPMuWtyYfqFYDS6mnHaB8CB6UWF8a8Phhm2VCVYrBiWeptuPvGczT9gQjsJ1AfkVq",
  "key10": "638dSqCEEf8irMjdLM8tvrP8jbQw7rkaEcDb5BM6JKZZsugkZVRYoj8Ap92mbq1i6a6gR5aN7T82DJhRCCzwXzv3",
  "key11": "2eJWFdsax4G2yBYFU9txKJhEp6xXEURdnY1QjjngV37jcpRbsVwXkdofvyhZwWLRTYKNDMG9uh1spHBHXNV1CRLb",
  "key12": "2NFX89PDoBrUhGzdifSmaXK1ecaKU9URE4ZYNoxvuhRMRXd61FKn11DUwVXaZ2Eh74E9WtYLpLGj5S8tSqEYLKYn",
  "key13": "jcPcUuL6W7QAGnJGha6GB3jRkNVYzCBx7hc5RqVcDLxVT1DqydaqRWFtxPyHrVHnBaQGt6HJxsqS3FPPh49awM7",
  "key14": "awKEcH1R7FJUeTCESLo7dsGsSf3VxtvKeKXpmhMm6zD1UoJwgbbwR94MoWVLVqy4mhEt7EByfcJPhoVVSWZoofB",
  "key15": "5TQiMPNA3HVcc5KdVqfutHKWLM3s56NBpanujrqSnjz4jnv1RZN5DLTPsNxEfLUUURu6Nk1QirsPRqpwwB8UFeRF",
  "key16": "ugDnDkefZdw5CD6QR7k31TVFwfvqXEEATDqvWSMTGQY8NKWwVeMbfEzEj9kNUVAVJi5WpKHFcFYD5XAS129VpX3",
  "key17": "57Dxz7b3i9yv8JL1A5BDcMPHw6Cv2fhvTNu3sNFMPeDcoT4gkymQiXSiajoziyxMkWHh3kjugbZfWxeMsYDZ96xj",
  "key18": "49LkWTJpLNgmagpaQ1N2gVgoNADqsXSFtFTY3pHgttfPaUGRjUQ6tHxFJDj5G5xcS3ur5NhbenbTk2eZGJRzPvyK",
  "key19": "4bu8edKPTude8mPjrd1k6qUmDMG2Tkm53WYE8GiPP4KENWb8BXqxH8VEFaDvUvi1X1U3223vHzyECHZ5ULmCYAfS",
  "key20": "3sdtiH2JvBFDhpQVnaZgYxS9ZQzdvJghU2CH52npbf6fno9N7guyHpsFxtxCid7deCCVgqN9jXM5mCyGxapq8M4g",
  "key21": "45kfF5cGuBUSzqjn2NLEYfNojytL77eJ8zj7bRQ6a8R5vzMSQtMbTW7rTcpEhtVN5vsKJwUUUbDB8i6deBEdTiuT",
  "key22": "5CR56qM8gmHSmUNeZzGvqNnz5tkWnSBuQqgH7nCyRV8eBN2az4sDzbPWZNY2WF6qCuvxuVmD14etyhbwqoCQsCDL",
  "key23": "34eMjWhiYr1dwz53gKHSSeXHJ889bzFcnsGss9ZAjmx3xPGhuYz225H1rbhMSarEZ9PaBiZzC3mXQxmSKCgkvvT3",
  "key24": "494fzFhD3W6RaxJKFsBZFFT8AddDrQF5WWL2bk3GoGEMeUAe9GJe6ca3PpdnTf4kbqSpsJMAvWrxJTNB7AK5qe3x",
  "key25": "489Z6acEZF9QiApHQxVNQN9YS38cCWPES3sFrMCgsfacTVR2q62RhmigLa3XR7jSfqBn6YuPA2gKiV5jqjaLaf7h",
  "key26": "2zyjXJCEa1oUUfkpbx4JF7cXwzWENyuNZXPv6UZB8gCpCD2npcHuXyoSuj5GMfGfB3uFpogp5sEFgYiEzfALzYDa",
  "key27": "3qWqXT7BXrA4SuGe1qLRQuc41Rxa14sgTs992PmXMFsVTh3oZtcpzzjQaRw7B3k1tBGeFPugUPXgkgu74UhKr2rz",
  "key28": "5crgkaTHTPg5T2zUL3xFqpPq9EwPFCxRgeP4cEYWnSZ25nSfUQ7WBHinZr3k2pfgxHTXb3Dx1PH2hu7NYuMgrfbb",
  "key29": "5v5AMmwqUo3PK6PaNa6zTYMpTHEx8KRAF2hwfsqdCee1XMYR6yfAQvYugbRQNiGi9nsKNdYR967fWMn79xdDp31t",
  "key30": "2k1SBH9Mj27jQTCYVjQCeE56SAPEvLjqwoxXaiTLqxsXDPmhoYRNm4WNUC9SG6Z7sPTVo2ugrpsS2EwuL7jSpg83",
  "key31": "4aXgRJCRj81P6jMpYJSAad3Aqtbz6a46TJHe8tTwxCVPhuw92VBNBFDnmicxhKiwVwbV72NRJeAM6ytHxmY3Sbxo",
  "key32": "62RqqUJL12wmMPUy1nk8zo7i97dZQD5YjRMocRt6htXUEjW4SRCvdVZwXRid13qMMmwYn5AWkWVYWQYB76KR3Nc6",
  "key33": "4A57utsAL2NtKFTRNkr1caVJWLfmDEjJjGT9AZBuFnJ3zUqXgVX9BQPHy2eNtTm36sVpG1AKRoDJKQLhUb8saQJg"
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
