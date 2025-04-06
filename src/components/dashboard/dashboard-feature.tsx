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
    "geHJin8B2zkEeGv2ZphEGvBnWmJU8iTy6NhkBWWfiX9D1KnwnV5ooqkioxKQNDjvBsXPMnJ7VUNuFwkowshEmHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W88gDJdbPcLsd7MEZD9djnNP5pDHBRVnByQ8fb1MGFQveXeaMuGqTmU77cBQmcGiQHHiFASJdPWLYdzQHNuJuEU",
  "key1": "52Y4MuTSRkwEgNMDrvosP3kCcGwo2267ZhCndW9LnGDb3a6jPoZcjLhpo6Rp5RPVDZxXj7AqfjBnXL4ky7RxxoBS",
  "key2": "67DivTdimFJ946BPtgf3vmaTQmbQ13b952gs79pZWrh5vkyaKX85Z3FDDW6SXGQSQcJyJb5mNcPyKniUjEkpLyMs",
  "key3": "3GELLgds3qgoqG4uuug164LDmBjAQhRc7r3BiSYB3ZFQt1bJScQMmZdLdWNyZ3EhWu9ku3yn5fjpXWuHtqUSm2Sw",
  "key4": "xJEgvLin2AnTuaHk9DyPMYHFR72qKXU782nrhd9VmVTXMQ47j4QtatUVDD1LoZ99jiHj7Rm6wwFUY5J7bVEqfHm",
  "key5": "2AXHhQSCo12Tg1tGmTPDbZEnVHL5vLn9WEkACVb65euCeCDFG1H6RwG4RASR8XV7H75FxiMrmjj9YdPzLhgtN6zh",
  "key6": "PGZBMUhCRUJttKbpnDBdTmv8sRMnrRwHL3VwQsKyfc4bhQ33Lz4Zbrw7qAc9vBP2smPXuGzkUgqqsk5ef88koPD",
  "key7": "4HVyNX1ofzrsn5jQjtcQP9vjjLEexcw87BwwnSFSCMybTyGbg9Ff7r6L2GPZ3V9uH8xW14YN8z5ec9yLftinn4m1",
  "key8": "2r1dxqKXEuYLpkAhExrpdAdnre2eYRH46DLdC6oA5m5cK9PrDq3UexXidHUzASbKnu78ZfcmRthvC2ppSXAvnuQR",
  "key9": "2P59MuZvusYqxjr5Q2LDT5uin1eiS7xPQwKsY9q2rYe7AYZdXM8DjYtadL6Re3aBLMonLjWx2EJf9MeLsaE21biX",
  "key10": "9MZDmQ1Y51AHpSHEc5vDceT5FkJvf2prK6M9WrEci5eyNjbTE98hEzT1DFX3TJYbG2cj9wibwKeBVmAMdVk2bYd",
  "key11": "Bq3PJYW99ihZFBZWTPK6Xgw1Mv7djJpHuGkAYwJq1qVUnNiEgrbdS6hTq6VLPgsZyuNkGRDDoT5HC8KtDgy1uDv",
  "key12": "JzumpAKQxq2KHhGG3Jx1T2oL8D5RBHfo8D627cApeM9oEYXWM5vQwSEVJo2A6ny3kn5h6yWdjupwerYDH8yTtmo",
  "key13": "56sx4F65zUpcdFjVSx99iHoD39DXRLyx39gTt665qY1h5Rzt7vY4npumeHCQE7aNQTvHxW5dmfJesxpSFt9LQ1kT",
  "key14": "4GeFU1JpMQzdYDhAf42rhDYvw7KFixAb9cgfbNAskLSPfniZuJtcCkXGe5vsuA9Hjr5CpSJqXR4KJYsPPrgyqhQ7",
  "key15": "4Ua8r5kDNymkKdRkFs9gdtrap2RzRVaQJJ1tzNywaMCNpWuLNvse2a4yZi4abLsZ9EpVnhxw5ZKPHBF2WxVSpakX",
  "key16": "2d3Du8rSDJJDQGvQvdGBrMHxxQmf941dkQaDcEUaxuDtfxS23uVDunoKPLWgY2dc1nXK9FqSRfv4kP66JV3GJ8KA",
  "key17": "rLgnRLEXzHuk1kg6VZwpKTeDxkLu45LUDKjV9RDaQguPBP1gwmU3HpEa7vQH19CHEj4VD3moMAqZ7HYwo6hcBhn",
  "key18": "42vY8KbqVG5HdtUJ12qpmLqTmdiUnugGpp6ZTRUrq98fCJzidVbjdeXw5XmGnFgz3A4wAFA6Tu27uxuGGmjXgDJU",
  "key19": "2KfVT1vq4op5GxRuR2DRq8UfVs79Ar5SwNnzfNKsUAKzJXnvRM5G6XhECYZgCiQx8mxwKs8CTjoG3HGkEf96nawF",
  "key20": "5SG6DpwjQ7wDvEpr1ozqdB8zUgHmrGw5eApyTVvnpNsDsVnp38JLRnvqcESCCh8AhNGYVyVUvphbGkddJTD5fTN",
  "key21": "4c4Z6eJmW4XTPoCXzx2rR3MMptZusm4V9zBzcguaNPhnhSBC1Ywg7Q9Abe4BPAjjxyKdi7BPY9PF3YDxYhmbKN7C",
  "key22": "4Xr49bfFyjuBLgMfGVy34eEthLfRucL7m2mQp9aNN2FrEu9wUvmk9QAFAKACP4hvn3gmiQQVBG8RtRtrrECik2vQ",
  "key23": "3Be367DY3pzw1bQb7qxjfKxAQQCGhnFQQmcc8A8FXk765hMGGonzFKfA2dJg3mF5DN84wntDjaG6Hx6G7iBBd33i",
  "key24": "4ii8wTs2kYxayUtkydZXFvqUKGkXQHu7RT3Ye9ranD7X2H1SeQuitK4LGJoDhDs2sYshevqoMiLDbTD14cXKJDwd",
  "key25": "AbxpaPy1n9DBHftPggVobPtDcYWvo5WjqGKcPNXS9A8mY3r1FDHUqqT8LgwDfw1A2Qn3yTZgmoJp1qodjb9Ufqp",
  "key26": "4cfcHBd2Q7X6NPkpqtNKtomaKU2pVATcyAwUgbw4mPT3KKvAW3jdiFHLEJztYAZELf2jJ6TtE5L5auPoqKz4TsvN",
  "key27": "33Hm9DMFPgqYbVdwWxirv33JBdKbSaZGqpPN1MqMM8gc5EMxuYg25PksXhP5k3WF7PAdvHvASCeVySTE6uFxxgQ2",
  "key28": "h5cUYH85Rye4Wuf3s6tKzM1T3BgLHwNgaSDa7VApa9bbudfa9mVghGCbzZSxziNzgkXbtpzKkXRaJdotj3CWLxr",
  "key29": "3zYsUvBMLZTrJrAdT9uN43E3nvwvAovDRQBvC7X3EwPgKDsfLYPiLeVKLBnqgrMXoJPBXPAmLqaDJepExH7eXznX",
  "key30": "5BWNdSttZ9uKZxyZ5z5PWjsa3cDrCrVzbB4RtAbP194txjzjuDwCK6f6dqJcyQVYCYcHNAZkrwfYaVjZZ1V1FdRD",
  "key31": "48XhXY2L234VtnpCWA9kTXiqSXriPQZLNV6pZ26sts159o3QvArp4WZBkZxZrC4EVNUvrz9MTRkewYC5ge6Yc6UD",
  "key32": "4VMskcreRSpfw4dFszEoaLzB9mv1NweRLdrkaLrSRJAAokrTbdKKksFLme6uXkqA5QhjSVNgQQKvC1PjJUcvMyeX",
  "key33": "xceB1SbHThXMWPRGKsaEdYjtHXp6a7QbXPSdYviSF575s5tkUeSn6etnUYs8HRMNAAjad2eE1rYgRGJwf59RU5c",
  "key34": "d1gjtV4mqQBhd7oNv6qDxxmpKzbPLnVRVGRmint3fD1ZmWMp5SyrbyrfSnr67uSfArwaxKGu9DKLPsaBgQDUqrQ"
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
