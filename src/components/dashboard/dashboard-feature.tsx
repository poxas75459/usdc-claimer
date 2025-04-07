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
    "4DpLZ5eZhLUTpVqwHGefe89fkHdf18SS3S7oLdy8VzQFLDEzdjcv1NXP1ZYmRuvCDUkZbaBiZAmR6jefk7r95Hg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTuTLnvJR8roMar4k2ae1WoWD8DdrAacAfsgDU6ETQNWCMuNGbLriSMZ1eyDCjoK3yT7UYpcDzJ48vT9ALNmqMV",
  "key1": "2dnP2Yews21DzLFQsZNwbKRBWh3UEJAmd8suPXz4pYnrNPMGFwtNY9ipi4zmX719rMNFgZjPze1ZwQmqSdE8GLfB",
  "key2": "54vsUohVYsGUTvtdQw1JrwQAM8NVbfa9nGQtWvM1sEKdMHPqK3BQPByRakG6YWDwew4x7RV1goMFDApG3vNgEnyL",
  "key3": "5yDf4tasj5UQDuZGDnJuvZmVvUruqsQpLcH5HGLNgcZ4XBsCS87LLpNBqdp5kShDvpdFhw2ooTYawYPyHeATob6b",
  "key4": "42LYnwoDMuVRETCtvZs2yaLVAbmGxhrShw21bftU4g43FR3cS55ARA5nxvS19i9RdTKDRmi44mEJztrkbJMmhyTH",
  "key5": "quDWbV2UsqdAmrYGmQomV4wAq7yMSVE12bzSfZcAEKcWH3zxqobXbZF44wERXqj3KNWqAQFACme5HPfrebbRXpA",
  "key6": "SHAk6EhJ7xXt66Ay9aj6pMXy3m4WQQfZjxRmzkKEU6d63recCzSZtrpsFRfHGSj6W5NvpduGRv25X1QjfRB4Lci",
  "key7": "4guSmajn9WPCowazWosMdfS4trswXjysLY4F3Ef517xXcWwUzJx7xxADcWsjWdA6Rn4StYtb9Hta8w7UrxSFouuc",
  "key8": "2pV89C6aHQH2jJg1QDAU8BvW8hLbnSS5nycM6Jfd52XnUMK7C3uFkdfUN1hniCbPtH4t1WqMRpkvZQWzodeHJdwZ",
  "key9": "2zffy6Xsabsxb9WX7j68zdatddzH18YwhTLuux9Mec9JF2WiHTtHSahGiebMwLgjUKtQ5CDzLWfyXC8Web5pLsXU",
  "key10": "evCFSLjeWKNYjRAPFbQeNLYbz2ZZM5tPhde5YzTjHY3yddauZ9MLtJXRSKvXpYRVYxpfQaWtDB4s5Ay24ZjESG6",
  "key11": "32zj8Pk4X4KK9byY7SindA2T2YrnzrM8RSKV5q2LHy3TfWiTD5TMCAT75UGuLMKiP2UCGKQB2dUTbwZy1f1s6dMf",
  "key12": "4aaJviBk6Zha7YrymVfuf1M2xRWMbfWGhyURv6MWjxoiinUWfiy1PP8vTiJY6hB9gmbNsxDCD9fTWTdU4qDNmtCn",
  "key13": "ekRd9voSLg4Y4MZYRtAyySMQer5TMwwMipA8e5K13LTGD1kH3LAgBaU8eUTEn6vqAKWS8gpgKETmQPHCYHutYbN",
  "key14": "2MQtEHDasYnnr6AAKcY7d3YQoMnbHDSRP6kSbBzjPvv8qNes3fZK3AFJDC5XM1qUpKQ2XuDRJ6mRVQbbi9M6gWpF",
  "key15": "4YmrjQEZS6eJ1MMTUsvZqeA9Qfck27t6Q3aQBwB9PxrYwkrpiahVMPw7kE7fLMtSZJcHr31pkwGofnxevxUd6AGu",
  "key16": "5UjgqXJfvLj2KSm2rp6VPQv5jdgs2YtnFceUL7cPmS8DN8MnkuiK6Pmw4pSRs3Jb1HGGcpYGVPzBqjjVd3nAc25P",
  "key17": "3VKNGGWxh1PQ1qYXgGmfLk7yz4Z6Hh5PwUWA6VKBHoveUCCp2eziqtMUHpHvNiooWgvR9qeNNuNSPSDivm5dkPC",
  "key18": "56Y9MDc4tGhpfYSvEFNZxQxswgC4ZDH4n1AYArCLpfhWREu55RoTiXjs5ZH8WwZeq5Sby3JhXKERRbcxtPhciv3E",
  "key19": "53fLF8RypZsTumwx6oX48B2wRJzWVbynUiBx2ymFVYWhCEvc2HD9dq2vzqYAK4DwcCppSrPAGbSBoaGxr8tsEZ9N",
  "key20": "573HFpbtcKvccQ2DQaZDxXsf3JQoXyUD86UTkQtpY38pyKoxUiPEUV3eRVEKE51vJ2vSqE8MyqCunGBwwQ6sJ9ij",
  "key21": "2L7Xo81mH86sqX6MrMVNpZ2GzDWQ4j5vWYFBkGkV5PZZ5euKk5Bdd1bw11692yctS2a5EVDUurYBkW7CFySgPHsF",
  "key22": "X7D6BfPrsoGYEd1ApYeYo9xLyNaZsnAcDNyyRDTjLUHiX2j6YbGav5NkkQHMumAUp1K1MD5c4c9RV34nXwwBJaJ",
  "key23": "62LYexdsHn3FNjV4eKAKrfKQV7JQATxhbwtDmgQmPDAq8ZZ2h8iLdYkUpMCgx63BAozcQKWzHFdfwF8y8ZWSZezY",
  "key24": "4qCzPHwCa2LkYKPGAc735twmU9vjN31XDtGG2eU3YqL1tgzSZm3ynZYYpyD1epAp2aU1rGZmEzKaBvxzgXzUivuf",
  "key25": "3QopvGG9EmnAP1nFX1J8MZsJETiY5efG1ePU2WoLXq3kyYQLbiympJQs3GmHcdaXwpv3983UFbarHc47GNUrLvXz",
  "key26": "21VHeFZ9gdLJJLd2woHT9PqKbumBN4SLWsaSvczKG4Xb21BYbfYEmEtCgcfDmayXbKzYY3Ps733B4c11fjPmsFTN",
  "key27": "WarzjK6KVmRkZJRreFrJ4dM8TF3TNShvNawAUGCZbLuhgcxSAVZddwvE3T2N3wti56fYUJ3UPF4sbpqMojoWWvb",
  "key28": "5SZDCJ9d1oSaPZGDPptp5bphWqdb3sRdFxVKurAkLXeMx8DzPwsdxzaAEgqz5i2s66jAjLLsaC2aLQDJf7fo8CWo",
  "key29": "3bkNNDoqUU386oDbmTU1SZbA4PGA9nMPHTaX6qaTNz5QdKRBf4LxNLEMrhtNczUKKJfemdRRjUSt4grEtUMeRavx",
  "key30": "5N91Bo8Ptoi3UwbfHm8SarQaSAtevbg3turW6BKob4VdbdqMTHjiGEeoR7vkYEgxQeWuNWmR9nfseZ2rn2EbYRR7",
  "key31": "sWkz3KuNca6HPT6BwQYC69nvFgnvrNCR6yXGVcFDioQ6SjcUUFgLDz1W8DovEQ5GcApVcejjToTiqH9UXpz1T21",
  "key32": "5HTH6zgyWKaPa5Q8eUJgNR2ARfmQFxs7GBpWoYN6B3x2dqjUi7fjzQPqAo4dUv111gDfXom3rNgu73WTiK4mMUrL",
  "key33": "3e6XN1ajTf2bee4fg8PPeGcpwgYvL7ReaYpJcj1oWkzQaoF8Yb2dyn9qx25xhVSeYWbtMRDQbC96gsb28kFprcQt",
  "key34": "2UtsM1XzyS5ucExUnvfRUq1AEEr26Bb6gPBEuAUMQkbfpxCLQsudBMinyvufoV17KtsD7BzkLpn6ahnoDCUntxsa",
  "key35": "5gSh8m3NxNjsPi37yBzkXATxrttwLofNdj63kkzBDumCQkDYYTbffs1JMWmQvPYmu52tV2Ne9cuaCyw15SqJBDSh",
  "key36": "2sHm1zZ5S8sv8TCYDQj57mHzTK4f8efw57iusfconVjUDVxhgwgmJYJW315tGSX2Xbs7TwtJpFGR7jVmiGRqBK2L",
  "key37": "4ihdvbkE6fvDshzLgontJX9HKonuWrhP3rL2ffqvGBoDKZRNhkkmZz4Ca5Ur5poycdNYKvxfG2ryUVofzxDLZxFo",
  "key38": "Py5d84Jn26kryLoatiR2WcA2Yckz5VGcwFQ73XFoVHjj8g58Tm2Q94ZWpCFojgLFwoppbBzHEhFuNxpip34SkSR",
  "key39": "3jcaaJqn9gmtSsw1LSXjBdqZzdsmUm8yr6jt49Lc6tCE1S6dqZrLJCY5LLhwdM3uZZKhNTNwW7gHWRMrr6hdesbX",
  "key40": "e1TUz8DyLZZgpE6K3Q8yscQxbrkfFisMx6vSkVmoEBBBjweriXJYuDKGcD7iLFSvbvhGKbeK2SVuf3eSg8fnFsY",
  "key41": "2VNkLcYbinwL5MywfMYnjTKZ3T3DCVw6vpZxVz8SDHt8p7a5xtdZ9M4rpzXPQt8eRjPNK2XT8dneioxqapB9G4kY",
  "key42": "2tZqh3AeXjM63nq1JgMLQBcjCAgpighUMrGvQaRbaeP8ZRK3h9ranTR65JEJ4EVK7TJVpcJp83r5XNu6GBqEEmST",
  "key43": "23nrmw9w7H5fAWEEnbM1jBpuV9LYjpdh2xvAGUGAbQQKviacfRsf43Sx7an1YqrnmgGmSRwvoTPoEVNYEYRdtMCt",
  "key44": "3tZMkdh82tvMShvbwKBfJHjVugpPJ9gpKTcgYrLzFX7BJNLstKQbzp6jQWDy2Ddu27RLcGfYxh3HzSwUUAQveSdM",
  "key45": "59Zpe4PMK1imL8PeS4L2R6fyCsJK5JijA6npevEdxZmKSSADfCwn6xs8TVyPqjEVLWUEyrmpkCHc7f5eNW2emczX"
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
