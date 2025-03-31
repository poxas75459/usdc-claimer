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
    "3r6hzy6wcNZDKhgn7dF5D9Ynbp42m1kYVHUaJKP1iLTYwvnDnhTV8zKGaY8LWFTSQF8BoekGraGrf47EaFJyiuCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M9qpNJxLTA3wzwQP2hP7dUpRsYyAwsbogq1zz4cdLg8Sgx714rfRnhW8MhDcWNJ1UzGvv9EJ9g4mW7rvMUXjm32",
  "key1": "5WUnzHQPmdz687Z58pSABnmcHJDesd5GGpiX686phWcmFJfWZbX7Wif59hY5nHAa6gzYbnBz44YsfTHbj5YAVS1D",
  "key2": "xwF9AxYmu2kJ2jmq9XRFqoDy17Zdbir8xksJ9DgzseWmFnanjMGHPWXuoJ6QDhQ6WUsTffzSXddzCKaQSo7tJrL",
  "key3": "2meynm94s9hzexreubA3vPCYrSQds6jjypHuJs9hfCCaysMDwEAukLjWfsBs4cMP5Y4YQD7RWaX43jB91aa8f2kh",
  "key4": "5CN1nhRHPfvs3aRRhKR3qm66x6N6s1au34LwV3jnrydnhCGgwjCQD71fpTsUPMJMHvzAN2fA8W9ukgMZcPUjqgEY",
  "key5": "5M9rzjCiGpaooNCWPqeoZjBe7GtR23dzrShSceSUk1EzSinop43zUU6eFBFUcYFMLhZvQqzqbgwme4CfttHzxmLZ",
  "key6": "7dokKgKpzP5cP2ijLYJoCXenRwgpQnsZRjoz2wocYSGLfMZsCLv76PF58NBY6emLUtqqZ5G6NtqqEREmj86D4AA",
  "key7": "3pSudMQaLKYeDJJeY7RMruJiWrdzcoQnqUinx2R6samgTGRUmGjSmTHpdzJzq6jqUGuxB461noyb2nnzf5wYWfzr",
  "key8": "2GUFDp66ymZdfanKnqLkTiU1NZrQPCaTs5FcChpPPnUt2ZyN7FYxeYg5fEnsywqhFo7Po4QfvyfJx9smyknEBB6w",
  "key9": "5TgSQYoKGQJXZrvV7UvaM1zbrwifvweaAKzgHk7LButtaRNEjYNZxCw2c98Cm3fKszaPHrq3BdynzQAKZJG42LaR",
  "key10": "UJWBr9Se4A9m4aeQJE8nPy82micFifgbEvkzoP2mLxbvtSBuv3UNrQS3yovpDW7WkE6Leopd9dStn3BDPW39u3a",
  "key11": "5n2VLdswVgTGfX6W6gDbswrcCWUehTH1e6Y1KFUiCRrFTsWp5J1Sry4pQc2z2xYaLxXrbUwVLUow14gfvCjRLHCi",
  "key12": "3ZtZRq4RBBfSyj4uZLNrSFFgb5YASdW3xifv1P2Hm1mCf2W5RiqWMUbExg28vd5EBahkQx1FFLD88189LizKaTC2",
  "key13": "pAbX6xmcUYZ5WVjqYkAu5R1vA6ZHqLqpoKndj7ogXr8Fsk7ubbXBWSb1tuMuy4QFRSfvA8reJt93jzBoHJYAvJx",
  "key14": "3eLuGwSUi3sbHiHNKSMNXH55ME1WRBU9ucmBQ33MnCYerEbtWVVtP2EYKGXtyjioJ8fNsjU6b1zGMFdMbra6hikx",
  "key15": "64Nq4z9aMuBFFeFRaDvKFBoSveKEwTbFvgWbSYaJUks5B9SHAMHXRx5kmjAY8nP2emR4pbqXrQmdkBcrKtgmT3Fg",
  "key16": "52xGV9CYNph6JbhKfuoJpCY5q5u3GSm667CcjkV7ySb3WaDDaD9N9mjWgLddkSMhgSjsdY83uFPRr18oT85rL62A",
  "key17": "2ABpAQ5RiYJmuYKyr24t1weUtW2YLJw7RLVn2nmKSWxmei979fNhfgXkVb5XE5cNSMA7eQ9yQALJzhR5n4vcgUkV",
  "key18": "2kobggQ7pasaL2ZCanETQukyNqJ3kUZ9DFLhaGYGJwo7LCxeK4BBub54htSmaAwPRhfLCmoNwVUAQVxSUwb9ehBm",
  "key19": "qMP9Jf68m18yjEzNAFpjy4kMpv2B71N44p4FGiRMJuHctNHgJKf272ZkDWmpzyHFF6Szce1GMPvLjkm7qwpyCcB",
  "key20": "3XUouZwauUzGomoE7KZe8oRqkfYEzQpQ8nx6J4nz19WQVhuk1eRUxMV3gP416zMpyiPXN1ZEvjBkiwCeWF5NmNhB",
  "key21": "5xRaTXTSk8aedovLdVh7gZkgPBsor2WN5zR4gA3ocXvsFSot8YgYfKcKRU1JVEWYHRuFkUKhUGxw4YGoeg6wdgJT",
  "key22": "3CQZFLbDg6GvDXsUPR6YnqTcmBBeePgVnnRP2vjV39fNrf5sf9cZZuqoUh7C7qoeEpmLBsMhSuYkG6kWVjyYJcGv",
  "key23": "4YTsF7NYfGtmcJrfkzL3MzbUkxnLWEsuddQoD9Qu6TMTX1DUup4sn57K6EXNJYH3qurxGXhe7Ad9eFpGe64QPpfE",
  "key24": "WqD95UsqFRybUczNcdNr6q45PB2GU6jsKW4aNxEwPb1eEg46P8tUP9yCF9JaUhxZ3ZUweB334w4bzsXF6zrSMy1",
  "key25": "2sqqFFArY88r6MpTJnDhiFr7o3UEwBEWMzcnYmSvoKAg6rDQhha9CcWuRs833cQBkw5JRyyRZspGC9tRngx3mnvY",
  "key26": "5DMyjYnocoNdZYgCgH2emMj98FwGjoxXb1E7tZRzSiYZ2SwTDQTx4wiKQMgmtUbTtNW7kv5GzxbLF42AhRcT6SjU"
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
