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
    "41PGUqjojh2cLSzxxYYnXLd7efkCxJekFRvmj81SnmXHbYHPx8siKKgg3sxsmH7A28pTL5ViN8iPfrFiBcVsx3ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rBEMF5NHnfBx5PaMrZ5AKHtYkGsJGayyfcCwPKfW6qGtd9pjkkPQCokmV25Y2ihsM5R7j7eCFhUZjJePRsc2yJQ",
  "key1": "5C1Lh6tJ4csaqEHGAk18UrGZtFxQScf5ufq7adXotoJF3VjqjGAFnYntdWWM9zrkbeSbd7CYNRxFP3g9pWbmr6HH",
  "key2": "53ij3ekYEMZfgggzX6EXt6ERQ4JB9qBvybsWWaYRXENNe7Wzfqb8UFvmAWjiWd3JbsiCPk1FtSzNweXy6Qs33wg5",
  "key3": "26bUEW9RW9TeNhn98G7D9yB8gfeqHZEndLagKJSHAd9F7VHkCK2pzokAYT9Yqyj2pAKvXMPLQK8HA2wevkt6qN9F",
  "key4": "4bWBtjV6fPxoXXUk4hMWn3wPwLM32WQRz7smbXBrJGDrues2o9sTeifvjpn5SPqaS7UYgJ78aVjsR1HMTqpzQTa5",
  "key5": "2NiE7fMXagpC18NBFhekS91spiox17spB3AXrG2Y6EsSWmqnaoj12evpx14JqzaukcRrWNsysWSkjU16W7AiykQM",
  "key6": "2q6utXx82b6AvZFKjnMAuDtrbhhLKCQp2CZKQEJeM8euxvq6cjUQBBRpZkZDhAKCvDTXeyPhRSzeb8365XfR84vR",
  "key7": "5ftZpwkUF5ysh96wTsGsaCN5qium8eBrARvK7qPFjSh63G3cb5V3UF4BhH6qSSiEYSgKVW3wb3LGPLziEmGT8BBT",
  "key8": "3Qqa4RVB5kBcner9pEhy5o4Asc5FN7H1C41Uei7QDY2oYBrETigchHZGayKdPL6c8LWLd8q7FcZU3m1cZLqfHz8r",
  "key9": "2gT3nCupu8tK2VcY8DFm4RAKBT2oW8MaF66iJ7A6ydt8FdNHPCbcDQEF2ob2Tvdyvfyv7CNoicHE5DDfbMi63eAk",
  "key10": "4g5Tjex39PtFCm46nKQZE1VTqUcJPsnsuEiKC7nzcUajKrjJVg393jU5MX14mT141BLs9HhkRiZtW3LhUUnzyHyH",
  "key11": "3zkUyn2gLwHKzGYBNyPTjkZd3X6spQptozY8dzV1doo1cFBvA2iYi7ZAroGJkzf4C7RtiP3VU7sZ9Yncwz8vSeFt",
  "key12": "66PyHW9drsUDpghJEbNNJbRitu5bVDgEfvCDfAppSSUtDNkvkZN35y16Bnowt8WfRMT9ASXcLhx7VihVsLjExo36",
  "key13": "F3nTr5QaCWUNDVP1Uf7rMAEwioodyNUzN6wUkSaYU1BT47iW8AgXUDNL5pvTVZGwiKdETvkzn9SDz6wxBycAT4F",
  "key14": "4xhB5e7aMTgkLUnKJZVH2RHDQ4j51X8BZzA4aW7hVonQKAosHfPVnnvgQfTscHYvppTEZTg4FCdGLamZu616xFu",
  "key15": "5dZ36MqmVb6V13TCEtit5vc8NbdEW39Qr9B3qdQySu5TQjkMJwGep1Akk7CRjTRALjEmfvoTEtBdjSowXAFFm9Za",
  "key16": "5SKFS1fJ5jMr2RGBGkmne8VG4WN8UbXzsYYiqb13P9gaKJujJd8fMEY58NMrNm65HvcUjw7oHS8X6szC8K6UHnqv",
  "key17": "5ofveqbxnEKDfcPr5yuwvUC7GvJsJWGmJXBSE2xZ2AyM1vqA14CnGV8iKmpdExyy3u7XyvkTHvpeRKYxBB4XVAbt",
  "key18": "4xV6JVLA7voAqho1f9qz4fg2QUp8rR51sPP6wyQaZrGua12HconExLnhGTo8xGPjmyQZgAaCxLEdFnrbJuRM2kG5",
  "key19": "63jFJY8nU3xr9yi4fQR3QQMgxp9y7jEqY8wxTrqFtQ5HoywpCS4GQfitCoxyP8UW8A1BoaFn82KAGHuSi8GXVZ59",
  "key20": "3MxXnnLx7QBnYQ9817WsMXANXKmVHsaRuytAKHcm6vWfFpa7fBZbeYdFo2JHE365edDQv6QfKhhJ8FT3gUmtaiGa",
  "key21": "4LdEstXnJCKKbox472iKsac7LMkM2xcx22UWtxsoUnTmCtYKLVm6sfq6EVQTQbx9NuwYxkfBu4xN5Vt4s1zGWQuw",
  "key22": "5T9pk5VdppAGwehUvuYLq4ayrEyAwnUSGL6c74Rjj2F5k4ANPtVHEY6tfCB1XEYc81UsdoGJpRD9ZAwj1JMzSbRP",
  "key23": "5uT4pQ9e1N3Qcbzf7xus6w4yTLZghTkx7sS1qWEdoWhF4gZXEWJ2G3nXFaQx8UV8iaYbhb1RjABxNKRBHV5Jeyye",
  "key24": "2e5pYBtdoypFht3d3cFTAyomt9oCCMqnQZdxvw6SDef26FsSDQMKASX5tMwBZTYsKpV4xFbWLqtoga8UrXW4fXMf",
  "key25": "3wdhEXu3Vfd3FpVomvNQNVm8NyDxBnczvdpcbPGQY2LgMs3ZNKWDGhCJdsnHVoY3V45PM1PeDThXQW7AZtBSMtns",
  "key26": "3XNUnGiddHxehALW8R6yNZA2gbtKTx7g2fEXH1o3bAqjipJUUPPTKiXFHCzmEwpTE3ik4imFxkkmC3wackBg4x1g",
  "key27": "4UXWtQnzSTEKLi6gfrVKajUVjq4AAPkhfZz7PMaC2N3itPkPkRix9GShxaYzTXSEQpUT1aMJEh7hf1FxpJSP8PEW",
  "key28": "3fd2EJWK1w1GPL2Q2qXvfEMyyiNFQ3aZjEgs32LjbKZUq5S4neajbyqjbXtupziCdJnrmGQYw7FZuJGmsPXqJsAm",
  "key29": "wTycCdR27NSQGgf1pW2RhioXGAEcR6QHJe41KwpEDRV5W7CWs8qQPyH2X44kUb7JwtjHPzw1dC4NBL4364q5zB1",
  "key30": "3SX2U6nhARLEqHbVpa3nAjVnZJjATM9sY4M9DemeRLC4jR82q1iejNbQL8s4VxgquWcC92n1Gox3TfiXpczHuCnV",
  "key31": "3FkxszajU8ELJqVnnECxN181i5CH9AVZrwZXuUK3Tsk3zCHBWscTdeNzt3wNwnNCjvS8e4gBEwa3bkBVNYFDCyA1",
  "key32": "RiMPH47fQwPrzYKPLhaeU96fVKG3eknnVFV66hUQZuHQKBArtUtjNfZXdTWNRWRSJqFwQcyXgn3fAAkGtnLPniW",
  "key33": "2LuvjzdgkvmnRBiGVTsXvgU4sRrVZfMRyTSNZHiqCznJ3rX78xj9BgYd3UYHFVQtxM4yisf2E3j5nT1z7LRV3WL8",
  "key34": "qkC4fZ4UZDsqohZxtudAU8TUJKrvbwvDz6MZ5gc2iGuSP4bZUfuM2ZhiDcNsxEfCVG8wqL2FpwsjfMHpzLuJNsX"
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
