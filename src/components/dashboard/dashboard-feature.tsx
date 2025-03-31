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
    "2Cvd6T7hDT16oXNP6QxiduB52KZ9skosJsK6mZyrbjpepEu62w3CpNbp1vuuBVYjEvFehStLo4HkVXfupVD7Nct9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZU3mxyNbNuSRzEJHNRGfGbyRQkipvQ2wfAE5G4qxbZymGguKFDpzENpFPu7cp8BgRt7g3dBtBXVKARH23RSdkg7",
  "key1": "4xh7YGGWgjbF6Qi321w8CBYrdgob4uXhjMzDzuGTC4ffy6BL8eA5ifG6LE6jiwy55yLdgNNxAQZJrCGG3hzfgwfe",
  "key2": "5s7pA9CYZfoEdxsvzE9b6T6FC8A5icRVohB1vvZR9kCSjT5DwaKsAWS9MRoAXGG5gKCZaZvh8UcdxQfkMHSSZa9C",
  "key3": "2NCc9oBSriPhHUK54xnqjnLp9MAGHpbtQcAK7YT3DFrc4X8VW8aVSBggvm8DNVBY6gWUJELq6aJ5kqLKwLfwKnsg",
  "key4": "54ES49Xs1KvjQgPK9vayWF5LuVWKEt3UTojExEWnpFzPYYjHhBe9wwLbwCbc6MWcJzfCaRVermh2DE3fteKLzVFM",
  "key5": "4B49PFe3RhiLzKpDXrk9uQrPcKBP6zVjH4TgMb15YGHqmNSanZNmNHefhk3qxeT7iMaMbT4RQcVyNmmBUuz3scYj",
  "key6": "zZFj7H6wg4xeVKfyWzqHSCd9ibjaUKJUu2PZNqMMQYmErPWEk62f6aDySHT4PY6bvHd9SQ3JaxSSpy8jzZ19qLJ",
  "key7": "2cznSXqamBfb5bXju55XeJmbSdfBrNLxEFHk4bH9MLy5QQwSGeHtZ5dGJEriGW5BwwcdVinHie9ADLfx87EzbWib",
  "key8": "3Y4gw5VgYrgSWV26HdMV4b7vUPYaVzsG4Q9Q4eY6vwGgFmrfh32WFdX5kKoVDCHGEe2nKzzCPwAPmC8zyvxGBd3X",
  "key9": "48NaQAVSmrmEPqgGdXcT33XDsCsvfM7NuRBRd2g9dRjhp8p28fc5jUY96tKWGNCN97LDBPUvsJ5xeaq3iXSbwRua",
  "key10": "obejx53yWcaFAsvzmuF9QA17gTHU9xyCmcqt8GxMmbTtXhU5QBeS9s5uqAe632K8VBqbdT3XAkV8JS6n7eP3e6n",
  "key11": "3Ew8yRUZry6ryDKstXcow9MY9FE7eY3qfFzZmG7r6hf4GwK2fkDeTb5tFKiH6LjsjkX6sxaBdggqFdSZxqLG2yNN",
  "key12": "668koat1f7WBwLgJvrE33N4ydvFs8YZGk5WLDRxA73TSW8Mz3Za64n6MS5jUKZtD3HD8on5kVqYXvARGXymWeDra",
  "key13": "5M38cANuLLJup7U4MhAHFvFs5C7fydbbD3oL5wKFj8Nwd3eZVLzGz6v3x3VwV68sNDU8VD5GzEb5DLb51xxxdUiK",
  "key14": "3jTnBssyyrysZXkETrZgy1RvMMmjYsvLcyUvYRnNuS43weVHBw1gixeTFcKgRWoaV53rvsCB8CeG5wPVs8MBurY",
  "key15": "2A3sTNxsFXHe9TnmCevEeZkYGv2uiBCepqiV4XAxLEpxqRUUEmCJzYxNFnWUdv71j1pPMzuiY2AuUrKXydFMQs1g",
  "key16": "PMsHvrraxFR7w3uXzHVuSMbd9NtiYpSo9o4qmp7U4WCExHaFC3zt99VZHM4xMaoGPgdxH3qD9giFnnTWS82Fsyb",
  "key17": "kt2eYQ9De3dHPuXBfETXpuDcmEZ1HcSuvURUCfBT4Z9YnVsMmjyhbNeA5boLbE7ikRUCpvfR1z4XCaMk5V1Qdah",
  "key18": "2u3QihyU95wydCtJVNLrfSRndrCsVcAu7XdFXaSACShJYGWJdRau1sawabTogotdQ4NbrasowuB86pLvbGnhtL2F",
  "key19": "5V23Ln8wYyg4nMbiyWgE75Rm6mriV6rZhydSSL5eGLqnEdX8vWL8AFhF6VYm49JiScH282YhYCZGbzCrrfpPYg5V",
  "key20": "59CqkLq2nsrWWVfNBuU8n6x2eEWwP2DwzFhFDPBXGb1YREeDSQ6yyqGxYuUmXdLHDTBfYvrvJ5Knqsw3E3gsdziG",
  "key21": "4i3VdgyWahDsa6mZasLNW3fsKJcBV3ujJdvDAUkhnQiHTh6w8Kow62ZcPVqZbXu6ABonzHUd99MYbTGzuyWhjBeP",
  "key22": "CWTuiby2inkSQz5FgD1yaYDb1tXDx71aG9qgm8x2tA3CjJs89kh4mDK8wbMi3ZnmNYutwp5dYhMdP7U9tD9yXwm",
  "key23": "4dYByy1XjqrZcunMmeidWv3VgqGF7c8AFUMqJAGHngjE7uMKmBavLUjgKNhaAQSA4cvJoUBBrzvAhxZG7pP6ydzC",
  "key24": "4CSwn1xURTpganKHNfurV7Sv2yTCxh3b9bnre5XuXecJjMYgMGewQju1DKUA6JcgjnmMdNFgUDps5yK4aYgc6YH",
  "key25": "5dHytTJ6nrMLPBTAwBBaq46YBhF6fQqh8rghL4216w1GmzUrsVUayxHwm3BjkZCHnUhdfJ1anVsim8Wwbpofgmmh",
  "key26": "5CcZ7KH21nxBt981yva3g3gn2L7nYMn6cYn62wLCyFGAWNt5KsFAb1Gtv5qVV5yaYimazk2JJWziKe4DoPioJLCz",
  "key27": "4JNfVyhdqiCJ4TFm2gj3krEhH7usMbgurYEAsn5HRCNE9SGXuszkVSqxVZoWGZTTFTg8kBVxswBQ7EH9tqPqydpM",
  "key28": "2oPLFBPTBjzBM7EKQ4qRDTXiSaxe1JbRnDQoMCBNrBrrmWwQ1479uFPCqMq5aJUaE9PmcGGb1kA8WwxiT8XrKpzi",
  "key29": "2t2do7ExVDH7hfbafNZ7uHjVuPXAJbDQFh4tub3ZEDMnojtm8vfEhRy9wz5hK4arYHX9CYRkYcG9QseKWTpFYhVg"
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
