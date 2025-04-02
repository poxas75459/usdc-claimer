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
    "MbaGEcsAgphFcENAn7AvctsnwTni9DY41D6yHxtTVHE7wEgjRhrLynXMXenWhHLjffNrJyVj1shcHoqvoi1gihp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onZRCMhEhdqNigiTvbAzZe554zG6WoRZTL3WuSJ7NyqRuaM8QJYXW3THj8QuEeYdRhob58AaUiSdQaDJ1YG1kpR",
  "key1": "rJU4yxYb6UqRey9FC3LpZTh2JvAi54MHTQkrXMFTprQKxXxbPP7WgLR7XYcsYqJgZ1sC24creH6KzpqcradXcMC",
  "key2": "3RmxLAppSJCn7tpaHHHVQMgHgYLo6shLLFkuNVDerMcWKpwsaGvnweMwedEvoSzkbLWZ3vNLGTvUdZSvcdjh3Dr2",
  "key3": "5u3sT77FJnbPXSDfa9n8cYZBJDY91EEejv9L2MHkMuANdEjevVyLWkLUoeB8oJneWGtv1hTrYqPgX14pk6niPpCS",
  "key4": "5dvPRp3Fs4QicDa3sdgrHphThNsJk4uXw7DuSH68VXHwChRFPQL4vcEhW2t7X5yoX2RwGQ6FoiRmkNhhMeuhgR8A",
  "key5": "2ozyP4mNoRdtU4Vmq6h4AteLUHBb2Zrj7VZoBke7eisccVCMcn14TKBE7MA4KnJD9GvRSFij6Rr3Gz6RqE7NshE9",
  "key6": "5wPeCwqe6VUutbh29K1bcFRqdspyrAovsrzTUWSWDWUtnL6KcDrii6WortPpRJgDCJdiz3pySasdJWXQ5jEBEdFH",
  "key7": "5dyT8hemQkRyEmf3ui4fNVzqq9RJuYnJMx9tMEH4bmFCmsAFZagShga7WxXrZfJsPT49warig5VNmjikSEN8SJ7f",
  "key8": "22qMXSrnfehTQHzM3J6gHDq4uGom55DEJSr3DYZvqPudJ8P2WVypuy3Qiy7Z89kzpvKCK3Fdmp9XUMSa4y2ZYYgt",
  "key9": "3Tv7L2E8XmUUe4rwKj1qxhQ2yEnzKbryEfhScJS2EpxqGRLtd4i4zrJtZVtc6rGAUHVuSaYiQiEFsQiL5jeD4FW",
  "key10": "4bNuDgh2a9mMso6eWk8uCnGGHwWATw5T1nMrLzap8B4qBwHdxPNXiuQmLs69CAkKHWxaT8kcYzAE7RgyvhwPR6sA",
  "key11": "4XbXeMUea2qfQQ5ZYZnKkrr1sWjvtFpxNor2NuuvDmn87S8K8DprhqDor9de1kbXtbbBBduQFDoybAjs4GbPzfVC",
  "key12": "5ejm68RMhoh4oWxBsyaSt5mUoJQm71ye1YaV2acxTUxHkXL5XQ8aGuRCWxiZqRGPMfQ4mSoXohsJ8LG7pFqmqA7Y",
  "key13": "igkEMKZH5z7PpTHKsTLvjwriP6tqFeXARkNLSoMdVEs7QkxrpFESQhX6Qbf6furh4HQ1tLnE9Um8RiDQYXuc4eq",
  "key14": "3wj3cn1E2aPE31iyxPz5mYvZprwXiHu5ukCk5uhSHooRdUjDvyc9A84NFZF8kWbQ8fSaWsv8QAFvueXtqVQYWusC",
  "key15": "2nvsvpYM4gSx2geQg2s2GwpVVZG1mEkkuASQB3nhkr38K1Y2Q1XrYvvabWFZGLkxBuZMUQVkkXs5p9Q1arvTBBmu",
  "key16": "273CSpSgzda1vpNBKSzNLypGJmbbfVEnXiKVBCLMCMhsuPXLwGaJgehAMLaxKhNhNoLMZxkSu5HvoyJpwD7CbBcz",
  "key17": "3KXd6jhchbsWjdavtJ1FyZiNdQACRhkVDhgmqXsTYntWdH7ghQ9fwsDaodfE4i8ZQQLPj9W3azCFrZcmbMw4LcBE",
  "key18": "2pMkzFq6FbNq2mAUnxgNZDWuKhJGf2TpHn6yuA4fNDACQPYFX8J3oWpvXEKhKenYH9VFiudosMjf6nNyPtsp3zqA",
  "key19": "5h2huYyyiWBzqGj97kMer1D4PedZCq9bsgxJGsBy1FJYy856HarRYM5CZR1TvN1bYpz3Wqp17G8jGUHHgMTAj3EA",
  "key20": "2xhvX2vT2svSjEomaZAdtj9rhqspwLUTjBKPe4C4BMDJHqExZXPt4GA4zs6X8TnyH4zFGkqZoDNcH9jsfcoWdPtE",
  "key21": "5BM8S7vLSpyh5sQbZmcg4gXoD5MK4PCWGqLDEn2SjgKdmvSmnRmjPtDsqyW1uJwe979GBbwbJrcG12gkNN4dyKLc",
  "key22": "62rN2uuU93kqJbSUGtfyRNJEza5hZ1mtE3FKrUPXwusPJM2KGPYEMyfDSKA2amRa3nkGhMFgBnhCVpFNzNUygKLp",
  "key23": "TUarJF1AtQdpgLyAjaZPawcqSXddMwU5jaDztjXyZ93viqQiqRSpRsAGXvTETVH5ZKhZJvBoaqCNPpzFC2gBEcs",
  "key24": "5dXHMg8Er2rZSt698Jci1x1i1ixzp9A1iX96tjbgQvJJbpf4qCBTynPDY5gsDFUU2R4bKFHtP9RFT13RYtvYvnP9",
  "key25": "66dqj9svAM35dxbDfumoUFZEmoBsyiEzjQkvnxmoYjqSVXjoiLBWMDP31ME86N4yMCAgSCgkm7ckNQnxFmdYsFiv",
  "key26": "JJ8xgSrBP4VgpaMrDz86aydVQzhpskrFHJ3jjD1wVcvSE2Y7B2sJRv9fBLBeeZpJXPArTXNXhT5Xb7Svdy5CF8U",
  "key27": "UJaCBS7cDrLtiQYi7CqJKa1JHA3KqgA1de1UPyh7ha6dWQM2Y32FxBvossZMktzjk6ALdEptAJaqW54PyAb9w3z",
  "key28": "3GMdE87G5tGdnw1pkAb3y8HcwMo7cd5PFh3ETxf5F1Wjm5Mocrcb3AJQdDGsBwGzMA1qCKRUThiWSa4nf5dhumgw",
  "key29": "43MoNhwddMo6zxxKrXdKSJu8aAN3Z3Kn1K27R26iwfPZ674KzcTg9t4ZktwN6JeNsETXSeeCo4XGJ3M6GhdSc7NQ"
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
