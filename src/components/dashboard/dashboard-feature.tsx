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
    "52noxvrZL1qx4UW84K3Rd9GWGUf8TieqAJr6dJ1ATq9qNjTsg7zqw1pDXqqbh53A8tyraQRW5Nbc8s68CC8ZeqqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a63iB8n9VDgMGk5iMEzm6nVC6YtgGZDXwerBuWHWthiFpuBKgy2fEn1VTq14SW74E6U9grDCzMfWA9RRYeAbt6U",
  "key1": "5LCgxECm5YaiR3HhxoGfWBfjV9DjXaoJfp7Hvw9YrqsXC8LQ7SmySqCCU4419JakjtGfgp2DTo5vqY9b3TcVhXwg",
  "key2": "3idFDcZyBAMaLDpZyE2nMys6kjbACrgVcnhVqCyitZJYAiU42B8tUdUe2msWX4yb2YeoLeVHPATKPVRi7nySss6p",
  "key3": "53MnBSHsanKcVqG5SvRC81W7ZnUy9jyrYhhJJNYshLjoezc53rayhCRe9DQ55E5h3SZBv2xGubCE3R439ZqpEnoz",
  "key4": "4LHktSPfRrMo1wJZWM7FjmWHQVbjfVi4mGS5RYhUzzGXaP7wpCFEuo3PP62HMeuGDEvj14qAyviPuX4sxXXvn5P6",
  "key5": "4sfdGpqtNEQneqBTYjynmsGzDBnkapxASVqvvD4NxEPxAwJAXdM183fis6NdsvnoEmYwc9ETnasdXz55NbBreMfZ",
  "key6": "2BdF64mH4MVz1Gt3F4t4z2k11heVbPc3JgFFHhN1aL7iDSuBkkncgv3sf8z3uAaopHDva7D8fPx6gtg887wsztr7",
  "key7": "3DHUFhuGQBqWPXPMaeVFDMmQ1nb8a5wk2hiVn3HFnsYNfcabQkvadJcg5s7ESsaDkscABom5XjqeEVhssg22sRuA",
  "key8": "3dqdPu4ESsDQwPXNEgPpYyhB651QawL4JVJvJQZhcRq9X13ieuNGVQQ4ELabxd9oYW3zQP92NrLv4EK4keFYfKno",
  "key9": "3YbAqoEYDB8kuRqQPKXooaoWdibHm7TKe8THBj8E3xfc2AfDubxuQFMGjKZqYC8sHTCyvNdZZP1SxUg7JcpG6wNJ",
  "key10": "56sqtkDj5Luhy6SxnWtcqcuEJaQMfxzbyG8FS5xBuhHkXr3znziMFE2v2NFnKf5fkjc26pV7qdeFpdMcA1fRWecW",
  "key11": "HK5WLk1ozsjqk8Ydzt9ULTrkxRPxjqZPF3QDxND6yvnLGm8YFbrndwyjDUqDBxomPbkgbsPwLkePZo8HPkaECBr",
  "key12": "4ibrvPypiQuCdrb4fgVQA2i1aRvApMFT5XRsxCPcDBGVSDjidhQThXsyAwCPXoXx9n4houN7mDGggA6uh64rQPWx",
  "key13": "2GukxhzwxtXmNa8YzmzFdjga94G6YWTgeVkcaA48kvre3h4SN9mMAJFEfSL2aLiwS1fUWtQG4wUdbk7u5heHwvai",
  "key14": "Tb1DWASaCiFU3Q3BaMoSyuAQtG1mmhJCmPQpv3yLa8BXnmmyLU4tymEt71jQTihad2gX1fUG17iQUtKXTkPA4vf",
  "key15": "2a3f24NvigwkjwqDLgPvqxLU7uUE6oyWe7WiETsmcub4XshzAxvptSrGVZkXfxtGDWnoTLNJpWeZaRjSf6MWBnMG",
  "key16": "58sp6UdNcfAMzqWYYbcAZdtiiQhqBgW2fxHTU5jiujpwxLWEczgPWJwsTziZJbgV6zEqfhDUwkeTJnKPW3zrxz3t",
  "key17": "23kyhD5LYYJ6PEMv6kL5cw2YAHfGhPhqZNPvgWTg7nrEhriTgE6ntParFyxAh46kzY1Mds4sV7FnSnuXMJB7ByGe",
  "key18": "333M9S2Ana3vn4ity8jfNGaJV1LPQ9ibNNd4pFcsQPjMi2Br6w1CbWqVjPj7NwiSbRcLKVBkAXib48m1H1kw2GSo",
  "key19": "KyzFia9xdCYdPV6JCveinm9CYf2z8ztJR4PYXLMtKV3XLunxYZLJzZiqUUf7Nmx28smTsm19kcgqADtvn7KRgkA",
  "key20": "4sVXT8RV535rKPg3FcHTyiqFhhs22S6TkQ7fg4GqgV65mR8otMZQWRvic84UZj9UTrN158An8EBn391JnsLreXE6",
  "key21": "4jPS6ibsciSgD73rBnqu1KciDML6jikosDHwSGkQYuHMq7hY6UqUafPhL9Ddqc3c7ebtRRiHzzA7Azdne75XxUKe",
  "key22": "5BbvrBNkALRkiJsGpHVPkFmW8Y6wrhDxiRRz3TKnsymrV1D2V5hXbSUFYfNDd4oQ9JgmZbT5ui5VQvMqDPGbiWf3",
  "key23": "gSpvvwZWXqYvrtqipcaN7AMCKCfcKMBWx75TdKbke13Tb5jfLgnDTGyuiRmUPQb72ZUmMRvGaYgtdKsf4K6wSs2",
  "key24": "2Kvpv9AhyPnWr4Mq9ynZKp2bV2mDDbckmYGF1gVJ7kVEBwD8a4hD1NzxTYeJ9LgQTiDwJnin8W4XhqdxRvYQ8c74",
  "key25": "4i1cCkQou6XjNKnqmkuXp1VGPfbwEkvusoLbXGcxnJo37bVhGxs9cDCxcB6LGGAE6PFPCXdx6S8ZApukMu6Ve8bd",
  "key26": "4hcWM2SWbgAQFTCjSRFJYKbkHNmgQnBFxJGgauXcNtsfum2jtWWZZsX6cyYBzPcGvm6i3f42QvppQGud9GZRi8D6",
  "key27": "2Q9LHV9vXGfLrWFuLFeMbPqTgMK92XZUx3TFJUhgSZe99XPAmVyuzsG1uatuN3epu7VPS3CQGKcWy6SJ7Tpe2Jo",
  "key28": "657Awq4UwKuagWjBoZrnfevPfWEoGjU21yDAHo8PnFxtSjuCFs8VwJyMfQqKnYiLhqpjynTvSDiiCMR86Hs3U3Jn",
  "key29": "3tp4e4VSmR8i9fQnryUQQkLuMWR5FLemsbaSehGhs13UhGkZCDteEWc8g6BZQrcek8upt4a45J94iWZhTZffVTfa",
  "key30": "5Uqpp3tBmDcBeWtGzxLmvyNPjhBvte75ZV6cwq3Pzgpkd1rbxWa3B6R7VLt15v5WZQLcFsFgE8QPh2PQGzhYzfJy",
  "key31": "3uXmQqjiCgXKwjWh5PNTpHiD742YJ4PXWqcWS6CiXY7Px5efeC5iwXRqZvB4crvJj2ynfpYysw6rzHrWqRhyGi39",
  "key32": "5jHkqL7hJpH93i8PiQDhr6ZmUho6bg1ZvaQudYauQG5jCWaYS5tRYTg3LUQhXD9KXU3EcewYezDAZQDSP7R7ndYG",
  "key33": "3vi1oJR7vA25xvogsngEUwSVCMR22qKWm7W6vaWfAQHvmobaXXqp87V2iKa4e3PSosm6DButK5BqUtcwV49xfThL"
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
