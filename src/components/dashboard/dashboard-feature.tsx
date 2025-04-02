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
    "4ViS7baDyMwo7zP6pMCnmftTcyTGcWGmMMdhEEUPUfFEV5GqscyJK9CZE3ZtJ1LnRGMoepPbqMSwNYDBhptiTpn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RuRqUXDNCcjGAHcH9mh4ycTePYpfcdDfzcq7CEgcb2LPExnWDpEbtxPsjAxxViY7SvryDWJfbkmX7EbAWjozMVD",
  "key1": "2oGXs9GM3XQ2bdJdzZqNcXsDoN79f6kqZB18RBvCnQNUrJLE4RQ2A5jDNV5Q9TAcbhnGRdJjMTwfZxxBWuJuJQc9",
  "key2": "2PWRBX4ahtjyw9iAxAytRKin64tyt17mhzNdV9DYhG41K5Qteojwk1dPfUfU8hSsPfKJiseMehzWGFeZU6bABT4m",
  "key3": "2fUvhXpvZA8eyhEoCDbZMjvZ5XPG2DsmNdGpxWHRWiwwLLuXFSti8M1NZ3HgpmuAi593ajTSVLEcoXSnUnXDBgA",
  "key4": "4kEfXiHZy4rr3DcpkvFXjNvaHvAfw7WiMgJ88wyCah7NU3UNr7Fpvac3Ba8Dxu3wd5GbjY4wKPbcb33DssUMxXS7",
  "key5": "4YLKd4WRUn7VGBmwhwPNKuHbPzahDX9KMmFNcdkyhL2KwZHAeabLmp39G36GeQUWv7wCWkwLtS6utu5ZNhDZJywo",
  "key6": "52v2v4sya4UfhLSktYFPWrcMEb3Uj3c5u7XmTEtpvh55MfyLsdVBVV9Bjy2rrKmaa96qB18DK7FUeGwjEuxoDB5a",
  "key7": "5Ut46VBhSZ8Kh4NZCCNsiYhHn4xKBeyj8HfqiV4ZcW7zCMxdMKRLvvpBLwky6XY34yFMo6MrajKe6hpkYtzAfHen",
  "key8": "3WSgFhiitjwBEKLEjhL3C3z6mpcmxurtvSCCjeS18p3Deur5tpsVjam1UAKTigNY4bQhnZi9ffQ8aedeAajfwxyd",
  "key9": "2WesXBLe3gwcPDrMzPY2icZhzcswAhhBc4g7d9yrfwNgweuDK598uLJJnykjMVMT97RgLJ6z7PQT8Rho7xgrBcor",
  "key10": "3XTv1dqZTzHcs6H3Dh41Tt1yvspoNUA5jSvQsDQQx1YiykbBWK6Qp8EsN3GfQCoxiCUC3W8hDCL3jvf5hJy5MYpJ",
  "key11": "3eTz4JYg3Xv1hZmjmLK177XTsYcHeBHSYHrfaVokYtrcb26CatsXcjFwVMo5Yk5ygDxaw5ugz2vkCeLk2hiPXuLK",
  "key12": "5L5nM74Z81jTzuzX2q2NuKWCVBCWAEKX5nMCgRnmDp6ZNpnrM4xH4ErBRn1bZtXtvSU1uaf35ce2ptu6wBkyh428",
  "key13": "3TxGp255cS8G6WofmL9yTjTG7bSCrA3uMEy7pNLGukBHQoR27C1T8EywDDonRhYEj48rXoC1VVP22Sg9eBxhdtto",
  "key14": "4jV41tEx4dgrAFEqXFoLCBYg4ctB6PfYnM9SUeFSPcaCQuVJMhW9niw4L7x3fHnzvz7y31hd2qhN6DZ1HMhCGqnp",
  "key15": "4BdM15wacMXkhdfHQP9gxqwwBpiNfyJdFZvRM9xqpZ1sWTho44pwFVqEH3WWdNyTgccQMvmnNSas11SJAfMj3YEX",
  "key16": "5QpsN8w5biDD2x9QqpU7e24MiGDYFVfLfTBnbQurNnPk9i9mcsqUVyo7UR8fi8sSygqbPQkXXgN7fKvhKsNEAWLu",
  "key17": "2n2Pn7ffb52jiBcwQRB8HVvytrgCrAe6kenxXz6NUdcRSiqqHTfyLsSotc9mzWvWMjj5SyWUS4RToPJVcJ3bKWEw",
  "key18": "5GtCGj54SDcMJRGVwfnMyBVFUW6RpVAxWL65ouNiszbTRkMVxrKqu5VyKsUMDXtEH3CkeyxGgvGhyehsmrjwpfDj",
  "key19": "7dzp5nvHAC53LF9CuaCoPLZeXrVFzo7Gj7pEfyY1DSEAY7fBjWe6JbNqggzSeq7S5DihdpCW1e3iiQZ3CjMJrY9",
  "key20": "FAeeGvtvGds5Tto7RJYEQC4ak6zmadM57UP2UVLb33ZhVsx8FX7QfZ3g2SWQPmP1H9EvW4CWGEmPk3L94N8fasL",
  "key21": "3moMG8qSCuLXGBZ2GkTqEjsyVZ31JChx7zhp12yYPGweFoUgoEkGV8HEPLgAcpqGMEKpYEQSRzw77F2VgKgvUDoa",
  "key22": "62EXaJezXfcDu9eMf4aP6LptREHJrnAJ2mLfAVgWQTwnb8ewFzY3iWEZdZUCLen9kVzE9vvnQ84FvynBiEeBYT7B",
  "key23": "3ERdXngCNKZMvqk39B9WYXJFMSMV6gEBidQ8zASw2o1mkyVxGqQzbqL7NUiKhyrFAjQzFZ9zhJNvBCPi2XtdZECp",
  "key24": "4P5w3CiuzPDGzxtpProB7NLW4CBiq4cT9T2j2MFCYHBVVQpgter2UJBc1obhi2Xhephm2aoXNZas9mqFeatcQBZT",
  "key25": "4KbWwVsW9uMF8Y7s25b7wmJeBYmMn3R5sNeeSRqzjHY7QjGPeTdTFGMBbE3keg8VsHkcMDUisfpQ3oUtFpgqmvT",
  "key26": "3mdHzs4Wi4EVAqfKhEi8BjtZjmVNXPvAUq6CFbgQiP1b5wnNHf8PdC3BQT9LygixxNpQgadxUcJ9yUzCJ6kN6S5t",
  "key27": "3w64aHQvBchsmEZa9wX2E7jYbyHQ7P1jmsPAEp89vFmFfBhStXYSP4dQWvEPPQKiKrzY9Pg5aC7Rd4KGMaGmkDyv",
  "key28": "2yaGzGkeEo2XXBwbDCopHZb6WN9S26wwMc2ZH1c57aRVaJpiD4Jw842pMFYs76Qygfb96fF3HeV7JBNXH8KUamyi",
  "key29": "3wkWbcCqnKkJ8QrYxBYNk3FpUY8JR4tRUa2eg3UjjrDtWexeMip3393zJD9bMbSZU5Hr9z456cya3pqitqDnLDfG",
  "key30": "31avvJJRQLf4Dh7tJy49LWJFL3E7WJY3xtRzyqUeucQHXLTnU6CDrsPzz7b86mZGHdxEuKkk5aQHhaZa95X1F6Dz",
  "key31": "CiR6R85YD2VvNHYuew6bwb7dwytw4kcccwskXsmmqEEV7GSXBCCJMnDSPgup2qGF91hm9MfDndKREEBLBbrmKUc",
  "key32": "4uiJZdka9tQa3h13eABRUomSF4NPFhALiGq3eZxng9MmFHNkCVa3UPpKHuJ5L1t3dk3aDtDgcEHw9HQ2fx1neMFn",
  "key33": "4Di297anMmhiW5A7NT3s5poweJGbozj3Fnxnw5fQQpvYCKjTTyMcmUmabKMwxg9em5D1gKAqZCxBKwSsM6ASz8qF",
  "key34": "4DonyW2nqy5hwkB8BRKrMXqJCcwzehF9NE3Cm2oSmUbwezvYEWZtiDUYEsmju2HsnX3go6nzTkVMKCE4kA6QXpTv",
  "key35": "3obAF5d13L5xm4PYSDs7w7Vpe1kySKTL8NWdJ7m65j4eeYix7oPwMTEfiSgWcCX9EXDNgd21ocTjMpAfZCqk2EKc",
  "key36": "2jdLr4RMs9WfkE7ZAtQSRbqXLRRc8F2ApJ5fDzavboEYyahJGrA4FUwTKqmExh8AGxkLqGHhnQkem8dgtuqTXj1A",
  "key37": "2sDzsNZtPi8KdkJiJeZEF8awTsi5stEXNxhQ584s8QS3HDu2mJpVuYCP6iiFTBoUz82EMQcBx6zbYsC8Z5duGu1",
  "key38": "27zQqU2kPwcBUeQ7c8kPefbVnY7mEZoLdHLakHwVWhAmJBaVb5XAsddvcFq45snfqKEV1zcX1MG4TetprUfBWPKj",
  "key39": "4zuac1ko5tH8txnehnyom4n8oVBo8BjjLWt8Q437jSqG5fiA1YRjZpz7XLThBA1W12VLvegmMrT2VbabaevJ3rqz",
  "key40": "3RK4dTvBHNDY3WrhG99kzFekbgnWK7vTeLcKLQuiTpkgGCLFMG5byx1MiBV1XrXQ37fosLrZ7A6thjDykpoBivd5",
  "key41": "3sJLe5mmaxVZhCxhrxewkKALtJar1xgvhzmwaAEiY8ukcrhrAanS33b8rAuXySnmN2qWY4gKQo6Ab8WqtTm59Jp7",
  "key42": "2rAKsFJtdGmfSQx7UiNL3De2AZDSiVX9PNGFDtxPpDLUi8cfFN5QML3ArA84b9cb6NHUCpz52yU3VSRVjHtMZE1Q",
  "key43": "EnZJztF3PDbs3pwP7x58ScbseHmNxshEGh4Ju5pdrBh6puiPAPCp6bBsV8xhdsJzi9bFQNMW2wi9dsReFMTJFpm",
  "key44": "52fKvQmKEa2pPzxJbBPeCzRz81cPU9ETm5p6VZxTadCnV7Hdb3Xauwo1Hteg62toKi1sh3DgxRFZXuBBuks25ZzR",
  "key45": "926ZnT1wyZEAvHtprLLe26Gbf7MfrHQwVSaiHZo2y7Sib7amPetUCRotGAXL9vouZhwQChh8PakKMWnCekkEEnN",
  "key46": "2CCoxzystP8gnCCS4txeqxo5mzAMhsHjeZUx1Xhf7ZevMh73Nzh9itGgj1JJBwFzKYhw8YsUaYTpd7hWnbAz3PAT",
  "key47": "5oqFkSwM3d5swq9wuuRCrQG7JFgktx2uLe4uG26rVmpiFBFUbZPGBHhqDUamJwzUAgbZ2RjN4JTs5SkXsdx5aVkp"
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
