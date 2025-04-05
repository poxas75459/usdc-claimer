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
    "23mjHZZ9fzPtFdv12uLg7b3YzPVP7bNagPdbjHrvz16bFh7WQYoDRuBera1fFzDcjfcafMQoG9nK4VhMMgsJ9xAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KURxruW2VzkmrFNKApgKZ1ddWeHNbjwKVJE3yGL9WJHWYd4gbNVverdADxnZxNYJDWRaAdDf58UvSsQtetERohn",
  "key1": "3X3tjxcv4Euv3AXkerYQ7c2jawYRHfZZdTzt2GfutoLCTUts9rVJzMUmUXNCEH1JfyAKMvojAMXHY1z1WTnBf53q",
  "key2": "29bXywn8LHbkBV33DyR11t5u221QFCjVtSzYVD4PfH5Hg6ohng6CBfAHzfdRKv7VVE2kE7VUfzg3gPbCwhj61PVL",
  "key3": "qd7jrr3AoSnndhQZ3sHpaxAAKSzxvSEgVss94ykpLD7awMJvk2bWk19oUYErWsA7reLbLgNyWQnF4gppQ2GUeCS",
  "key4": "RstB4viho4G9MxiwbaBpWe7EVVwwzvrg6xhyLBSp2jC4fQiPGuCk3QmriUPF9zirSUFf2JHxZo33oYz2rhtGzJY",
  "key5": "2dCAGMLcKydHD4hfcFinwty8RvhUKKbRMs5YcRN9YkQCx1QF4MB1ehptsPGDK4YZr8mcHmthd7Nt5uN1pXqa2sWu",
  "key6": "58eX7QbpGxxpfWCXuAThak78BAwGHkKCWX4ofudAUQKe9P47Wu76rzJZdqiJLxRC3KPSQUGWLr6XwUH63tAXh1ya",
  "key7": "4D7P9jHCyYamkQUqwckumS4AvHZLXJbquPeVtUP4ggdG7dRHvoMx8KMtBXdjswLkbD1nugtEZun5EB67xZjpRDDr",
  "key8": "o8RX3X8TmbcKF8P4AG8xmdqRmepzy61Svuyj8DMi3G2SZMZzkTgKEqT1HM9tqPqdChi4ztwK76h2rDpmidfHWLC",
  "key9": "kasVCFHj47g3eLKuzqBREYZs4jbrmG3KGT3mET11MPXoWkuR87H9ao6eYRhgCFF57ssCGf4DR8zZ99ezompyi3C",
  "key10": "5zxp5rP16eZFRXCJdV8u7SznR9gpdy3TidJPGFBh3AE1pUqtHVumSB55BpSMxDXKCxbRWXCCbVSBmMssijxyEAHx",
  "key11": "2famxBqspii2jTaC1bPXFpuxrtj1cC4TYxzgBghxiYJwZgCJHrVmYSoeK1oxgwny3i2edKZby2cfTnatGC7urcVf",
  "key12": "4i3vEkmdgTb3NNZRkLnBZTbgbYifd7ELcMU9QTkNvQRteiF5NmiePtKptgGXumpWwcegXtS5SEeqmPvdApx38DYx",
  "key13": "5NLtj8GHLQMuhhjt8gDq6rsaWbJte8koBWQntznjeNybMcgYAdpz97b8eoAaqHJNCzdeLYq84uR5ZjapNjYANKwq",
  "key14": "2LTWkmfwkCs7EZLA5Qmd3RbewWNknprwYYGPLUoLwJoLC3pHW5MU9DUyqwQgNURsjkgvEdzBYFSkE9EtkhXrJFfa",
  "key15": "43cai88u4sm62VWrvAi755HF5RR2hG5g8awqM7TUfQzWyG3LDvqnkLC5suAoj3h6aYDJpGUvmVvsJyjkZEVeVvy8",
  "key16": "5286c9jXYdxy7Yz9SQV2u9gTi2wPfi33qtD6FaKXwtP8nKoJ2T5d2pNBpDy84skbrebobHP7cUnPnTtrhqYPfbog",
  "key17": "3s3B4TgKgoCDV3WD54w4G6YnSKHSknDjjHEoZf4EvJPFtenjXUmpzf7y6LkVH9EmdNBDyohzno2uNjb1WPBmV7Q4",
  "key18": "2xfAqnfVLKtEePJxTjZG9Mm9oAwFtgBHQmzqh6NF2uM3bWAr77qvr4M8GaCwgdUJ51p2oKJF46xzNfesoeC6Y4Qq",
  "key19": "fd7YY2VG13hGz1p3HMpoFx2DU5x8uuDR54RBRECWCSKLKkGEiCTPg64MAjbiacKZa2hpWyaHb3YEwFQwD6vpQfx",
  "key20": "26xu3Kb5t42mgGDhthi6cnurWpBm2FwYvr26a4YrDHx7waUpNmJR8AdYZVD1zLhhF9SntF4eAD1bPEA4WyqnjCNx",
  "key21": "2x8mPfMosmDLjvhNDaS5wu2z2NWwfihAuZpgCHYH9GehQ4JEDMi7KDCc1EziYcoyuJQh4XiKBfSR11n1BAvJbcdA",
  "key22": "4TrLAjmXau5Vv9frPwbRSaMvqZuZH55R76Wf6BdeTEfaiSy4uTDp7euWmSL1yqwXYkhxUfMXyWhk51hTmxYNHfCE",
  "key23": "5rQTucpb7vGMbVhvXtFciUsxMzyqf6M1b7x6KoZJ4SmgQDJvHnzqa23oLQcrwSrxr74MfDHsMdqxsyhuz5s9rNWK",
  "key24": "4QxC15AcV4u94uSH8PdgD2tTqs8nbB1g6UBxYXKoWx6UwVxwZAVb2D2VRTbB1Lfbg8KkStVbYUb7XNdqxsDk9pi2",
  "key25": "4LCE4RPFwEuKkBKcUaD9hfDdPxWmvdkoa8uRNgzeQggFTcYubW4FyDeGT3Umtx9QD2nJYpPuPq1Pf8uqEDpTwKw7",
  "key26": "5kTJztnAg12LnB7NbupznHFVm9Q8RQDTF4gT9iMZSkRPqRvEA7sy4NzNDUYmnFSnUNreeoLQhaTi6SqpcZ9PW3L2",
  "key27": "2y8kUJ7qQfgT3qwdAX7MGMzjBvK4PzG5XSbASoaPK4ceRr3BHH3bNk2Q9uRfzzCVZAY9d4t1AcfPBa9fRniGvQ9a",
  "key28": "38JmE2jyxVhseCmM53VkBcHnEjUT6icuGZK6Yprr4STrqA7Y4ZUPMYaD9xsUjdMdVfx2ueeUwUCDk7GTLKtZT5mp",
  "key29": "4Uftd12j3jRwarn6G6d9RZkGYF6Y9xfMhZLdTjLbCs2X3aaFDP1dh6JHiTjDcYQV1C5vmUtUu7Ggn3VpQfwVWRXv",
  "key30": "3v37cmxgKMjBaVMDunuNLQ58oVaQXxz7ijjdHWWrgnUyzFmXZtifDdDYWZHFAM1Vs6kK1CCS995yD317eTgC4VWr",
  "key31": "4QMwMyW8dbc1VVU6iiRLg2nbs6aAtsBFxySfJpVTRptitWNUtYSHdeJVK5EhbADDVPnnnaZJssc4TDiRi61YrHsY",
  "key32": "1CaUSFZ3cLNtoZcDuoeVnKDSY4kD36hcrT6dzYo6QYRxa5AR9yJypAMSjnnnbS6eBGouveUmpj5WSxo6svjURju",
  "key33": "4uS5chj5eruX1fABHbrnc2R6z6iM8ucVqw4scnctAvCeYD81uN4RWTkkK5RCnwvhMCDxyQ4xUfgWWxEWJAunRVtZ",
  "key34": "4E3BJ6Y9pwrnHVMU7oiqp3BXypJszLKh4zuW2cqc6MPjgcS6HxcV2xSmAAu2Tkh6VEXEtHgLJBPx8KXaKW2Ju2Tt",
  "key35": "4pcAGVRXV73FVr9mUtPfP9eg4gXjVV1GGuSBjMVfCFXmQiFrkiTYkufjsXVBmV3ZP7cgjpsRqhVShnULcw4GARwM",
  "key36": "2zoDwDjvjFmL8Jtewr2QPRvj3GPo3hZ877so8cUVqYRTpiFAJW2XKe74uzeA5NRg7N3WoDaXuEs1Pmq4UkM7irVR",
  "key37": "5Q51s1cA2ren7wVD2Wn4oVSC4GYAQUTaLsNxgEJ7dirL6SMnH2x3Kf6gFz8fgmCGhXmo4rVMbRpcaCJGq42dyXvX",
  "key38": "5232ygb79fajhK9mE4kUy1TwoMSFZZZJ33JvyJUfStP9oY2KqqJYCSjftnk71wLuitDxRZf1MDLESengyn2FjDE6",
  "key39": "rVhCzEy2W98JfEHKmiEbH8hcx3jupVr8GCPVoEvzVuNsPboVMTwYhcfF81yGvYUus9Ewkz3kdGghsiuKPeJBXrk",
  "key40": "yELYF9mcqYrkcm41AvtLpS6miRFTYdtYEs8KtaftRfJkCQQaQ1aXpR9pcrLRHGZmoSuNqFFsPd7nVBmDGz1Fi89",
  "key41": "4X8SqVjbkWYZgEH73v52TZY99BHw6dL6UUctbMwm6GTvYpveKwmLfDJnRX2jmvHZLMuvMpMszkRU9YihbX4hHF6w",
  "key42": "2vBwK2TjVu2dKTx5KK4RfiAm9DyzHs1fSwQRdk1ZZs87eg1gssyPv5MDnsCLmBX21BiQ9r7CtTKkws5CiCXiibza",
  "key43": "XQFZFiesubgo8BjpEQ6q9bGxJamjFC2iWU1Uds5xrMwq96XGetjZuqK7CzDgrem3f7WjebNLsoaUZdPy5y2Yri2",
  "key44": "3PNQ6WZN2vJHGnC6VuRNugQnnk1gJtx3ijtgSKzMFW7q1QiYGgQs3KifMSL918xUVxWqRH87UNUpsoGX6CBT29K9",
  "key45": "rQvarSgMe4zGhXcfywS6u7LZNPRvaWpmiEWN8UCjmaA3CBBruNyXfttdXVcLbKCHpKgkWM7KcrdQbY3s4PM5SwY",
  "key46": "ZWccHeCPiCdLM39Pj2DiXr32yQM1Lev6kxrVyDFFFGxuCPA6SA2YgkP9qXajbK4YaLSTD3ySc7VM8ygNm2DhHDi"
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
