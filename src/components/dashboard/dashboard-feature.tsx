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
    "n4R8u8FJPRqRq4nzTXZ4XjUy3zt9LbQ5o45CG86VEq5oHPfoQVuePG56B9k33tQ4Xdycb4VcGxiETAfbDbUgjSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RT344wLBjTcJ9nS699qYoD9pibTUv4GZLg3vYDpCj63UUQr3hao9zjT67tmskmjnaojsfJJWcKQMggr21aCydVD",
  "key1": "4x6FVHkYcz3U7tLniGaD94pLcv62gi598frTMmksQAa42gFUwYqmCCYBtp3dii1cZoEX1scuLvzh7B3ZsVfDT4GY",
  "key2": "5vtc71vmzqc25286Feov3A5yMNSHQjLsAEebAexCGGHyoiBJALBWBBBBrGqcAv5xukaqp1ibPio2tZQgxmrb8vH7",
  "key3": "5WdxEYfrkexcvCKQbPE7FsjBFzix4twkGiwH9BC71ZgetagwKVakRLSZPMJFyBdtjiCiuVYpz1N8CdhPzStYdcDU",
  "key4": "4seVzhx2bUp8aQXew4CPUxoeoNWMYxVzhwLw3c3SFhiBZSmATYLdManYYEcW3UTVPbpdrcNYtT7vfvpjah4pjaV7",
  "key5": "Ag7mVXY7qMMJzRMycFCAbWyeBZGoSRB1vkWdUtpReiSquZPV92E4TGQHC39VchJow4kb8hCmnMQaoYbrGmamJbA",
  "key6": "7AQ64LTSrf7gTRdDDTYjwzGycqTzhYeD6QkSf9jBnwR1WJB3x43hsu8gzXQWUNk7HH4VNAQUf8VSnwHDCjjiyzV",
  "key7": "4jWw454PCV5z1VuopeiQC2omRdTdajr5YjwoEq9KWqGbA4o8tugKFASvreP1U5hyMNwFkVk3ZqC3FMUMwkU6rNdv",
  "key8": "1Pvbb6CW8BzXuNCYVE9gDHy64UUQHshxQSau6nHgHLXrZ6cxyXLfgJQZb2d47hBL9LPdNFCY2a5kqLjsRR8xn2j",
  "key9": "2hdduViqYwG93cfw9NwSK2GPraa9rRxprbRFSPGitMvDYGj8qxHVFbxqBnBvgwZoywEuCukeAD3vdBZXbFKhchxq",
  "key10": "52KVczKsyNM9S4n6gweqbQbzYYup8nUwUWjXv13AUZjxzkyBHzM7bXU2kDYpciwXL6LF2CCzRLNbp6bURmkstZAt",
  "key11": "2zSpSqY2sgwpntL1nADWmReAtXw47N3yeodqgdNsCbPxSzAw95LZmzfUeLtwLqRpLcSD6DH78AzKUKUQ8htudYfe",
  "key12": "2yhkEiRZ91KCS9ot8DKe3AtnGibmddE2jQ7JVZh7auufoCvrz9grQ3upmbENh9zeChvWoycJNjihEtEL7dmE9wby",
  "key13": "4ypyTNsdB7Y2AimDZ2wT1afVX2k7HoU7JAgPCdR8Ep6J6XtXGFDfCnGaALdJbcfftK3izH7kGLXLZMuLFxuE5GAd",
  "key14": "5hSKP7go8FpGUjwoZWWSfs3FFweoqN3ThjrmRLWbiPVCZtCtRm2TtjLb199VxfbfyEsUqzmFM9wsTRn2LJjzePL5",
  "key15": "3AaxpVWHhJxDujWGRXyALw61uDErjfk64GFUQF3bndJLpBYyCXd6h9m1mFRmfJbmXi6jsDLmBVmRcAj7iPGfrR9D",
  "key16": "2wYSXX7gNcVpfDD9YMnnwa5EYJNaFgqt9JT1CmDjq5kramT7bcBA9ADZcjznqEuudKsaTHAAWJowbvJ5dJK6GrYi",
  "key17": "4DAL6Qd7B8LjQ5ksGBtyhhDovp1GvrbdDfwrscBPpmqSC6UY78fX2NTWJFtU7Q6wmW2qx47prxji2kFiBC5DL8dy",
  "key18": "ksXVnndRBAGEuDf2cc2y7N3d1MqwbZW1A1TfYPoUw88yqTwFk8zyG67NiTdibTVmxqhdz2ci2cG2gPHGHJsDhab",
  "key19": "61cS9ZCon3GR1rH1Le2SGsJdmdLpAeD3AWNb64n1ECmUWWnZFMCYrZWNK2Jji3LZJ5wyp4EUPhaUNKs5MPT25y2T",
  "key20": "2SbKAohuM4t7i8dSnSQ5amjdacmyG1BQPqbuw1Ke5DWPvf152q5dkKRV8t8tsFyEF8b7yQewUFmAcGcmoWkiQ5Sf",
  "key21": "4DQ1yL6ibzUWfNasueCbiDLmzMzpwap4dJaMJNfdqoo9Q1hF4647g2ncvWQZdB3UjQdZw8yrgjtzWxACjWFsDYgk",
  "key22": "X7LhBANv51AA3J5ynrtKGNWDcJ2cAacgYXDHUPQMe5wTz26KDG6JHgvYa1jiJ3cQEu8kg1JV8uwkYNHADsdVr51",
  "key23": "5vSLuX7645XSBoPYFRHYAwLBQoZN5vUZLyGcvioFR7MewMfwoHvUPmKyHUEjWXcr9fY4VCMGrW69qB4iqSfwccHk",
  "key24": "3YhTvhm1uSaaUyRo2erZn6tn5usuiQnSr37t3636RLRtF6KCt3FJESwrjmwstpCDjCrm8SREPSekECET6fH2ETfz",
  "key25": "29mw1E4PKxSHrmMtPVzDPCxC6jB9hBLiutkUUGUQgnu1RY8tE8xtpGkVA4aFEbtVzav9wKeLMZiuvkTwMQW4TAeG",
  "key26": "4vqaKRpfVXfHcLrcrj9SSLKL2ryroh3k4o1BNxsmANApk6CkT6KiTCRu8fs38qzZzxLhgcn6gkPK11JFadMnppJm",
  "key27": "4NxjYyQarARDkueUz18cwHpYPW4NteuZwGxXi2amRFBtgxvTMJQENG3yUfrSnFSYMCakATFsU8XZWeERCf3njWhx",
  "key28": "4haLxf9u3iLfNtN5ZYVXJyzCScu9DFwccaRp9DvcrKQqkeponMnGT8vScKCMfVuWgKc7qEfrDnuzjuHXsU2fvwvk",
  "key29": "2aYZrPu9aV1hzs9eKUp9zTbYwj4ouA7CsM3o8yEM8nQjA4Q4ZHJir9W72a85v97o8VHhL7Jj2mzdtMYCr81aSFGa",
  "key30": "5Kd1G9wCTSLizv8TiEybXy8z3qT11vRLZQNL33Hyor8ACRCCwR2KGW5hF2sRR8FGHXStdqbEVbm5todV3KjvTa3J",
  "key31": "4Yrq5DmR92zrCwdExQZMcaX7sDEg3H85p5QtbJ1Zvbyqeb6Mxdt9F2sSN1BSagyxLy2pkQ6mQEiTnz4PhQZk5pq7",
  "key32": "2hUgy95qNbpPHvrx1QwMMWkgDfG8Tn9vvmMuA5QfBgDBGMEUuNo1f173vxFCHvbfUzwAS2wRVnF872tuiX1nR69x",
  "key33": "4oP6bwYzvgcKtN5PTnDH9ULQp1RhBqDmrXUjxeuLXfg2LCZLiPjC9FpYRb74T7n5WZdwSp17uR7BgDQtHP1zC2LM",
  "key34": "5SDyxkBYacaV7KNxjyoFuNABhLxruAZWZFXrNByeQJtaztqfBqocjdfaHTVagUv3aAqVjDrVNnQrvKEH7gySrAjc",
  "key35": "FCx4zLprekTVg2iYzkyxpHcW7ZnhKHGr3xETXzre12aWjXrfgdaWDbQPSvvaywzARFfsv8oKHLT2sZi2j8o2DWr"
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
